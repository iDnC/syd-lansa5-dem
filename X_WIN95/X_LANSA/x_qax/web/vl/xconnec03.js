LANSA.addComponent({id:"XCONNEC03",nm:"xConnectorEmail",ot:"ww",tp:"Widget",de:"Send email",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireEmailSendCompleted=function(pStatus,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("ERROR",pError);l.fE(this,"EMAILSENDCOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var m_ToList = [];
var m_CcList = [];
var m_BccList = [];
PROTOTYPE.onCreateInstance = function()
{
this.Caption = 'My Widget';
}
PROTOTYPE.getHostEndPoint = function()
{
return this.m_HostEndPoint;
}
PROTOTYPE.setHostEndPoint = function( strValue )
{
this.m_HostEndPoint = strValue;
}
PROTOTYPE.getHostUserid = function()
{
return this.m_HostUserid;
}
PROTOTYPE.setHostUserid = function( strValue )
{
this.m_HostUserid = strValue;
}
PROTOTYPE.getHostPassword = function()
{
return this.m_HostPassword;
}
PROTOTYPE.setHostPassword = function( strValue )
{
this.m_HostPassword = strValue;
}
PROTOTYPE.getEmailRequest = function()
{
return this.m_EmailRequest;
}
PROTOTYPE.setEmailRequest = function( strValue )
{
this.m_EmailRequest = strValue;
}
PROTOTYPE.getSubject = function()
{
return this.m_Subject;
}
PROTOTYPE.setSubject = function( strValue )
{
this.m_Subject = strValue;
}
PROTOTYPE.getBodyText = function()
{
return this.m_BodyText;
}
PROTOTYPE.setBodyText = function( strValue )
{
this.m_BodyText = strValue;
}
PROTOTYPE.getError = function()
{
return this.m_Error;
}
PROTOTYPE.setError = function( strValue )
{
this.m_Error = strValue;
}
PROTOTYPE.AddReceiver = function( emailAddress, enumReceiverType )
{
switch ( enumReceiverType )
{
case "TO":
m_ToList.push( emailAddress );
break;
case "CC":
m_CcList.push( emailAddress );
break;
case "BCC":
m_BccList.push( emailAddress );
break;
}
}
PROTOTYPE.Send = function( asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
var service = {
connector: "email",
object: this.m_EmailRequest,
subject: this.m_Subject,
body: this.m_BodyText,
to: m_ToList,
cc: m_CcList,
bcc: m_BccList };
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
pThis.fireEmailSendCompleted( "OK", "" );
}
else if ( response.type == "error" )
{
pThis.fireEmailSendCompleted( "ER", CollateErrorMessage( response ) );
}
else
{
pThis.fireEmailSendCompleted( "ER", "" );
}
});
return "OK";
}
else
{
var response = LUICONNECTOR.execute( host, service, null ) ;
return this.ProcessReturnValue( response );
}
}
PROTOTYPE.ProcessReturnValue = function( response )
{
var status = "ER";
if ( response.type == "status" )
{
if ( response.status == "OK" )
{
status = "OK";
}
}
else if ( response.type == "error" )
{
this.m_Error = CollateErrorMessage( response );
}
return status;
}
PROTOTYPE.ClearReceiversList = function()
{
m_ToList = []
m_CcList = [];
m_BccList = [];
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC03",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-connector-min.js").get(),l.cRc("lui-encrypt-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");this.setEMAILREQUEST("");this.setSUBJECT("");this.setBODYTEXT("");this.setERROR("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));
};cO.getHOSTUSERID=function(){return l.tS(this.get("HostUserid"));};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.getEMAILREQUEST=function(){return l.tS(this.get("EmailRequest"));};cO.setEMAILREQUEST=function(v){this.set("EmailRequest",l.tS(v));};cO.getSUBJECT=function(){return l.tS(this.get("Subject"));};cO.setSUBJECT=function(v){this.set("Subject",l.tS(v));
};cO.getBODYTEXT=function(){return l.tS(this.get("BodyText"));};cO.setBODYTEXT=function(v){this.set("BodyText",l.tS(v));};cO.getERROR=function(){return l.tS(this.get("Error"));};cO.setERROR=function(v){this.set("Error",l.tS(v));};cO.mthADDRECEIVER=function(P0,P1){this.invoke("AddReceiver",[l.tS(P0),l.tS(P1).toUpperCase()]);};cO.mthCLEARRECEIVERSLIST=function(){this.invoke("ClearReceiversList");};cO.mthSEND=function(P0){return l.tS(this.invoke("Send",[l.tB(P0)])).toUpperCase();};},{rp:["PRIM_WDGT.Object"]
});