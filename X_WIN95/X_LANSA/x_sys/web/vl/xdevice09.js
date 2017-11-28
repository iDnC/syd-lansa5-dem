LANSA.addComponent({id:"XDEVICE09",nm:"xDeviceFileTransfer",ot:"ww",tp:"Widget",de:"Transfer a file from/to a remote server",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var
widgetStatus = WIDGET.Completed;
if ( !window.LONGRANGE )
{
widgetStatus = WIDGET.Loading;
var
previousOnLongRangeReady = window.onLongRangeReady;
window.onLongRangeReady = function()
{
WIDGET.Finalize();
if ( previousOnLongRangeReady )
{
previousOnLongRangeReady();
}
}
}
PROTOTYPE.onCreateInstance = function()
{
}
PROTOTYPE.getLocalFile = function()
{
return this.m_LocalFile;
}
PROTOTYPE.setLocalFile = function( strValue )
{
this.m_LocalFile = strValue;
}
PROTOTYPE.getRemoteFile = function()
{
return this.m_RemoteFile;
}
PROTOTYPE.setRemoteFile = function( strValue )
{
this.m_RemoteFile = strValue;
}
PROTOTYPE.getRemoteServerUrl = function()
{
return this.m_RemoteServerUrl;
}
PROTOTYPE.setRemoteServerUrl = function( strValue )
{
this.m_RemoteServerUrl = strValue;
}
PROTOTYPE.getRemoteServerUser = function()
{
return this.m_RemoteServerUser;
}
PROTOTYPE.setRemoteServerUser = function( strValue )
{
this.m_RemoteServerUser = strValue;
}
PROTOTYPE.getRemoteServerPassword = function()
{
return this.m_RemoteServerPassword;
}
PROTOTYPE.setRemoteServerPassword = function( strValue )
{
this.m_RemoteServerPassword = strValue;
}
PROTOTYPE.SetRemoteServer = function( strServerUrl, strUserid, strPassword )
{
var options = { };
options.serverUrl = strServerUrl;
options.credential = { };
options.credential.user = strUserid;
options.credential.password = strPassword;
LONGRANGE.FileTransfer.setDefaultConfig( options );
}
PROTOTYPE.Upload = function()
{
var pThis = this;
var serverOptions = { };
serverOptions.serverUrl = this.m_RemoteServerUrl;
serverOptions.credential = { };
serverOptions.credential.user = this.m_RemoteServerUser
serverOptions.credential.password = this.m_RemoteServerPassword;
LONGRANGE.FileTransfer.setDefaultConfig( serverOptions );
var options = { };
options.file = { };
options.file.local = this.m_LocalFile;
options.file.remote = this.m_RemoteFile;
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.FileTransfer.sendToServer(options);
return "OK";
}
PROTOTYPE.Download = function()
{
var pThis = this;
var serverOptions = { };
serverOptions.serverUrl = this.m_RemoteServerUrl;
serverOptions.credential = { };
serverOptions.credential.user = this.m_RemoteServerUser
serverOptions.credential.password = this.m_RemoteServerPassword;
LONGRANGE.FileTransfer.setDefaultConfig( serverOptions );
var options = { };
options.file = { };
options.file.local = this.m_LocalFile;
options.file.remote = this.m_RemoteFile;
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.FileTransfer.getFromServer(options);
return "OK";
}
function LongRangeToVLStatusCodes( lrStatus )
{
var
vlStatus = "";
if ( lrStatus == LONGRANGE.Status.Ok )
{
vlStatus = "OK";
}
else if ( lrStatus == LONGRANGE.Status.Cancelled )
{
vlStatus = "CAN";
}
else if ( lrStatus == LONGRANGE.Status.Error )
{
vlStatus = "ER";
}
else
{
vlStatus = "UNK";
}
return vlStatus;
}
return widgetStatus;
}
;
l.rWg({nm:"XDEVICE09",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setREMOTESERVERURL("");this.setREMOTESERVERUSER("");this.setREMOTESERVERPASSWORD("");this.setLOCALFILE("");this.setREMOTEFILE("");}});cO.getREMOTESERVERURL=function(){return l.tS(this.get("RemoteServerUrl"));};cO.setREMOTESERVERURL=function(v){this.set("RemoteServerUrl",l.tS(v));};cO.getREMOTESERVERUSER=function(){return l.tS(this.get("RemoteServerUser"));};cO.setREMOTESERVERUSER=function(v)
{this.set("RemoteServerUser",l.tS(v));};cO.getREMOTESERVERPASSWORD=function(){return l.tS(this.get("RemoteServerPassword"));};cO.setREMOTESERVERPASSWORD=function(v){this.set("RemoteServerPassword",l.tS(v));};cO.getLOCALFILE=function(){return l.tS(this.get("LocalFile"));};cO.setLOCALFILE=function(v){this.set("LocalFile",l.tS(v));};cO.getREMOTEFILE=function(){return l.tS(this.get("RemoteFile"));};cO.setREMOTEFILE=function(v){this.set("RemoteFile",l.tS(v));};cO.mthUPLOAD=function(){return l.tS(this.invoke("Upload"));
};cO.mthDOWNLOAD=function(){return l.tS(this.invoke("Download"));};},{rp:["PRIM_WDGT.Object"]});