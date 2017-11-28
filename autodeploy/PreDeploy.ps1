"PreDeploy.ps1"

#Requires -RunAsAdministrator

# When this process is started as Admin (RunAs) the stdout and stderr cannot be redirected 
# back to the caller because they are essentially different users.
# So, if a log file is passed in, the caller is implying that redirection is broken so
# use the file instead, and RESTART this script using normal redirection.

if ($args.length -gt 0) {
    write-output "Log file is $($args[0])"
    $LogFile = $args[0]

    # Needs to be a current directory too
    if ($args.length -gt 1) {
        write-output "Working directory is $($args[1])"
        $WorkingDirectory = $args[1]
    
        Set-Location $WorkingDirectory

        Write-Output("Re-run script without the log file parameter but using redirection to the log file")
        & $MyInvocation.MyCommand.Path > $LogFile 2>&1
        return
    } else {
        Write-Error("Working Directory parameter missing")
        throw
    }
} else {
    Write-Output("Redirection presumed to already be setup")
}

Import-Module WebAdministration

function Log-Date 
{
    ((get-date).ToUniversalTime()).ToString("yyyy-MM-dd HH:mm:ssZ")
}

function Execute-Process
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $ExecutablePath,
    
        [Parameter(Mandatory=$true)]
            [String[]] 
            $Arguments,

        [Parameter(Mandatory=$true)]
            [String ]
            $ErrorText
    )

    if ( !(Test-Path $ExecutablePath) )
    {
        Write-Output "$(Log-Date) $ExecutablePath does not exist"
        return
    }

    Write-Output "$(Log-Date) Executing $ExecutablePath $Arguments"

    # Use Start-Process to obtain the exit code. But then we need to redirect stdout and stderr
    $psi = New-object System.Diagnostics.ProcessStartInfo 
    $psi.CreateNoWindow = $true 
    $psi.UseShellExecute = $false 
    $psi.RedirectStandardOutput = $true 
    $psi.RedirectStandardError = $true 
    $psi.FileName = $ExecutablePath
    $psi.Arguments = $Arguments 
    $p = New-Object System.Diagnostics.Process 
    $p.StartInfo = $psi 
    [void]$p.Start()
    $output = $p.StandardOutput.ReadToEnd()     
    $errorText = $p.StandardError.ReadToEnd() 
    $p.WaitForExit() 
    $output    
    $errorText

	# Must continue on error so that everything that can be stopped is stopped.
	# Not all installations have everything running anyway.
    if ( $p.ExitCode -ne 0 ) {
       $ErrorMessage = "$ErrorText $($p.ExitCode)."
       Write-Output "$(Log-Date) $ErrorMessage"
    }     
}

###############################################################################
# Control-Related-WebSites
# Start/stop all web sites which use this 
###############################################################################
function Control-Related-WebSites
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $Root,
            
            [Boolean]
            $Start = $true
    )    

    $SiteVirtualDirectories = @()
    $Sites = Get-ChildItem IIS:\Sites
    foreach($Site in $Sites) {
        $VirtualDirectories = Get-ChildItem "IIS:\Sites\$($Site.Name)" | Where-Object{$_.NodeType -match "virtualDirectory"}
        foreach($VirtualDirectory in $VirtualDirectories) {
            $SiteVirtualDirectories += @([pscustomobject]@{Site=$Site.Name;VirtualDirectory=$VirtualDirectory.Name;PhysicalPath=$VirtualDirectory.PhysicalPath; ApplicationPool=$Site.ApplicationPool})
        }
    }
    
    Out-String -InputObject $SiteVirtualDirectories | Write-Verbose
    
    $VirtualDirectoryPath = Join-Path $Root 'WebServer\IISPlugin\lansaweb64'
    foreach ($SiteVirtualDirectory in $SiteVirtualDirectories)
    {
        if ( $SiteVirtualDirectory.PhysicalPath -eq $VirtualDirectoryPath)
        {
            Write-Output "$(Log-Date) $SiteVirtualDirectory"
            Write-Output "$(Log-Date) Web Site = $($SiteVirtualDirectory.Site)"
            if ($Start) {
                Write-Output ("$(Log-Date) Starting web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Start-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool)
                Write-Output ("$(Log-Date) Starting web site $($SiteVirtualDirectory.Site)")
                Start-Website -name $($SiteVirtualDirectory.Site)
            } else {
                Write-Output ("$(Log-Date) Stopping web site $($SiteVirtualDirectory.Site)")
                Stop-Website -name $($SiteVirtualDirectory.Site)  -ErrorAction SilentlyContinue
                Write-Output ("$(Log-Date) Stopping web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Stop-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool) -ErrorAction SilentlyContinue
            }
        }
    }
}

###############################################################################
# Control-Related-Services
# Incomplete function.
###############################################################################
function Control-Related-Services
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $Root,
            
            [Parameter(Mandatory=$true)]
            [string]
            $ServiceName,
            
            [Boolean]
            $Start = $true
    )    
    
    $IntegratorService = Get-WmiObject win32_service | Where-Object{$_.Name -like $ServiceName} | select-object Name, DisplayName, State, PathName
    Out-String -InputObject $IntegratorService | Write-Verbose
}

###############################################################################
# Main Code
###############################################################################

# $VerbosePreference = "Continue"

try {
    Write-Output ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $Root = (Split-Path (Split-Path $MyInvocation.MyCommand.Path))
    Write-Output ("$(Log-Date) Root Path = $Root")

    $ExecuteDir = Join-Path $Root 'x_win95\x_lansa\execute'
    
    if ( !(Test-Path $ExecuteDir -PathType Container)) {
        $ExecuteDir = Join-Path $Root 'x_win64\x_lansa\execute'
    }

    ###############################################################################
    Write-Output ("$(Log-Date) Stopping processes running in this installation")
    ###############################################################################
    Execute-Process (Join-Path $ExecuteDir 'w3_p2200.exe') @("*FORINSTALL") "Stopping Web Jobs returned error code"
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstop") "Stopping Listener returned error code"
    Execute-Process (Join-Path $Root 'integrator\jsmadmin\strjsm.exe') @("-sstop") "Stopping JSM returned error code"
    Control-Related-WebSites -Root $Root -Start $false

    # Terminate x_run.exe and lcoadm32.exe processes and any other running processes installed into this LANSA configuration

    $Processes = @(Get-Process | Where-Object {$_.Path -like "$Root*" })
    foreach ($process in $processes ) {
        Write-Output("$(Log-Date) Stopping $($Process.ProcessName)")
        Stop-Process $process.id -Force
    }
} catch {
    $e = $_.Exception
    $e|format-list -force
    throw
}