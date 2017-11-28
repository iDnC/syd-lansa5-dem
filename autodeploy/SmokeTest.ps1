"SmokeTest.ps1"

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

Write-Output( "HOME = $($ENV:HOME)")
whoami

git status
git remote -vv
git fetch
Write-Output("git fetch returned $LASTEXITCODE")
if ( $LASTEXITCODE -ne 0 ) {
    Write-Output("Check HOME environment variable is set correctly for the current user - see top of log output.")
    Write-Output("The machine must be rebooted in order to propagate environment variable changes to the svchost.exe process which hosts iis (w3wp.exe).")
    throw
}
