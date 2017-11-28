LANSA.addComponent({id:"XCONNEC06",nm:"xConnectorDataQueue",ot:"ww",tp:"Widget",de:"Read/Write to a data queue",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireReadCompleted=function(pStatus,pValue,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("VALUE",pValue);eP.aS("ERROR",pError);l.fE(this,"READCOMPLETED",eP);};wP.fireWriteCompleted=function(pStatus,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("ERROR",pError);l.fE(this,"WRITECOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
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
PROTOTYPE.getValue = function()
{
return this.m_Value;
}
PROTOTYPE.setValue = function( strValue )
{
this.m_Value = strValue;
}
PROTOTYPE.getError = function()
{
return this.m_Error;
}
PROTOTYPE.setError = function( strValue )
{
this.m_Error = strValue;
}
PROTOTYPE.Read = function( dataQueue, waitTime, asynchronous )
{
var service = {
connector: "dataqueue",
action: "read",
object: dataQueue,
wait: waitTime };
return this.ReadGeneric( service, asynchronous );
}
PROTOTYPE.ReadWithKey = function( dataQueue, key, waitTime, asynchronous )
{
var service = {
connector: "dataqueue",
action: "read",
object: dataQueue,
wait: waitTime,
key: key };
return this.ReadGeneric( service, asynchronous );
}
PROTOTYPE.ReadGeneric = function( service, asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
this.m_Value = "";
this.m_Error = "";
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
if ( typeof response.value == "object" )
{
pThis.fireReadCompleted( "OK", JSON.stringify( response.value ), "" );
}
else
{
pThis.fireReadCompleted( "OK", response.value, "" );
}
}
else if ( response.type == "error" )
{
pThis.fireReadCompleted( "ER", "", CollateErrorMessage( response ) );
}
else
{
pThis.fireReadCompleted( "ER", "", "" );
}
});
return "OK";
}
else
{
var response = LUICONNECTOR.execute( host, service, null ) ;
return this.ProcessReadValue( response );
}
}
PROTOTYPE.ProcessReadValue = function( response )
{
var status = "ER";
if ( response.type == "status" )
{
if ( response.status == "OK" )
{
if ( typeof response.value == "object" )
{
this.m_Value = JSON.stringify( response.value );
}
else
{
this.m_Value = response.value;
}
status = "OK";
}
}
else if ( response.type == "error" )
{
this.m_Error = CollateErrorMessage( response );
}
return status;
}
PROTOTYPE.Write = function( dataQueue, value, asynchronous )
{
var service = {
connector: "dataqueue",
action: "write",
object: dataQueue,
value: value };
return this.WriteGeneric( service, asynchronous );
}
PROTOTYPE.WriteWithKey = function( dataQueue, key, value, asynchronous )
{
var service = {
connector: "dataqueue",
action: "write",
object: dataQueue,
key: key,
value: value };
return this.WriteGeneric( service, asynchronous );
}
PROTOTYPE.WriteGeneric = function( service, asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
this.m_Value = "";
this.m_Error = "";
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
pThis.fireWriteCompleted( "OK", "" );
}
else if ( response.type == "error" )
{
pThis.fireWriteCompleted( "ER", CollateErrorMessage( response ) );
}
else
{
pThis.fireWriteCompleted( "ER", "" );
}
});
return "OK";
}
else
{
var response = LUICONNECTOR.execute( host, service, null ) ;
return this.ProcessWrittenValue( response );
}
}
PROTOTYPE.ProcessWrittenValue = function( response )
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
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC06",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-encrypt-min.js").get(),l.cRc("lui-connector-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");this.setVALUE("");this.setERROR("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));};cO.getHOSTUSERID=function()
{return l.tS(this.get("HostUserid"));};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.getVALUE=function(){return l.tS(this.get("Value"));};cO.setVALUE=function(v){this.set("Value",l.tS(v));};cO.getERROR=function(){return l.tS(this.get("Error"));};cO.setERROR=function(v){this.set("Error",l.tS(v));};cO.mthREAD=function(P0,P1,P2){return l.tS(this.invoke("Read",[l.tS(P0),l.tI(P1),l.tB(P2)])).toUpperCase();
};cO.mthWRITE=function(P0,P1,P2){return l.tS(this.invoke("Write",[l.tS(P0),l.tS(P1),l.tB(P2)])).toUpperCase();};cO.mthREADWITHKEY=function(P0,P1,P2,P3){return l.tS(this.invoke("ReadWithKey",[l.tS(P0),l.tS(P1),l.tI(P2),l.tB(P3)])).toUpperCase();};cO.mthWRITEWITHKEY=function(P0,P1,P2,P3){return l.tS(this.invoke("WriteWithKey",[l.tS(P0),l.tS(P1),l.tS(P2),l.tS(P3)])).toUpperCase();};},{rp:["PRIM_WDGT.Object"]});