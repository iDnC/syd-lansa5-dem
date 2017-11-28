LANSA.addComponent({id:"XCONNEC10",nm:"xConnectorWebQueue",ot:"ww",tp:"Widget",de:"Perform web queue transactions",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireErrorReceived=function(pMessage){var eP=l.ePs();eP.aS("MESSAGE",pMessage);l.fE(this,"ERRORRECEIVED",eP);};wP.fireConnectionOpened=function(){l.fE(this,"CONNECTIONOPENED");};wP.fireConnectionReady=function(pQueue){var eP=l.ePs();eP.aS("QUEUE",pQueue);l.fE(this,"CONNECTIONREADY",eP);};wP.fireConnectionClosed=function(pCode,pClean,pReason)
{var eP=l.ePs();eP.aS("CODE",pCode);eP.aS("CLEAN",pClean);eP.aS("REASON",pReason);l.fE(this,"CONNECTIONCLOSED",eP);};wP.fireMessageAccepted=function(pMessageId){var eP=l.ePs();eP.aS("MESSAGEID",pMessageId);l.fE(this,"MESSAGEACCEPTED",eP);};wP.fireMessageRejected=function(pMessageId,pCode,pReason){var eP=l.ePs();eP.aS("MESSAGEID",pMessageId);eP.aS("CODE",pCode);eP.aS("REASON",pReason);l.fE(this,"MESSAGEREJECTED",eP);};wP.fireMessagePushedByServer=function(pMessage){var eP=l.ePs();eP.aS("MESSAGE",pMessage);
l.fE(this,"MESSAGEPUSHEDBYSERVER",eP);};wP.fireDataPushedByServer=function(pFormat,pData,pUnfilteredMessage){var eP=l.ePs();eP.aE("FORMAT",pFormat);eP.aS("DATA",pData);eP.aS("UNFILTEREDMESSAGE",pUnfilteredMessage);l.fE(this,"DATAPUSHEDBYSERVER",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var m_Queue = null;
var m_Parameters = [];
PROTOTYPE.onCreateInstance = function()
{
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
PROTOTYPE.SetConnectionParameterAsString = function( name, value )
{
this.SetParameter( name, value );
}
PROTOTYPE.SetConnectionParameterAsNumber = function( name, value )
{
this.SetParameter( name, value );
}
PROTOTYPE.SetParameter = function( name, value )
{
var i;
var found = false;
for ( i = 0; ( i < m_Parameters.length ) && ( !found ); i++ )
{
if ( m_Parameters[ i ].name == name )
{
found = true;
break;
}
}
var parameter = { name: name, value: value };
if ( found )
{
m_Parameters[ i ] = parameter;
}
else
{
m_Parameters.push( parameter );
}
}
PROTOTYPE.ClearParameters = function()
{
m_Parameters = [];
}
PROTOTYPE.Open = function( queue )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
var service = {
queue: queue,
parameters: m_Parameters };
m_Queue = LUICONNECTOR.createWebQueue();
var pThis = this;
m_Queue.open( host, service, function( message, binaryData )
{
pThis.onMessage( message, binaryData )
});
}
PROTOTYPE.Send = function( messageId, message, file )
{
if ( file == "" )
{
this.SendSimple( messageId, message );
}
else
{
this.SendWithFile( messageId, message, file );
}
}
PROTOTYPE.SendWithNumericId = function( messageId, message, file )
{
if ( file == "" )
{
this.SendSimple( messageId, message );
}
else
{
this.SendWithFile( messageId, message, file );
}
}
PROTOTYPE.SendSimple = function( messageId, message )
{
m_Queue.send( messageId, message );
}
PROTOTYPE.SendWithFile = function( messageId, message, file )
{
m_Queue.send( messageId, message, file );
}
PROTOTYPE.Close = function( queueId, message )
{
if ( m_Queue === null )
{
return ;
}
m_Queue.close( queueId, message );
m_Queue = null ;
}
PROTOTYPE.onMessage = function( message, binaryData )
{
switch( message.type )
{
case "error":
{
this.fireErrorReceived( message.message );
}
case "status":
{
switch( message.status )
{
case "OPEN":
{
this.fireConnectionOpened();
return;
}
case "CLOSE":
{
this.fireConnectionClosed( message.code, message.clean, message.reason );
return;
}
case "READY":
{
this.fireConnectionReady( message.queue );
return;
}
case "PUSH":
{
this.onMessagePush ( message, binaryData ) ;
return;
}
case "ACCEPT":
{
this.fireMessageAccepted( message.correlationid );
return;
}
case "REJECT":
{
this.fireMessageRejected( message.correlationid, message.code, message.reason );
return;
}
default:
{
console.log ( "onMessage 'status DEFAULT' " + JSON.stringify( message ) ) ;
return;
}
}
}
default:
{
console.log ( "onMessage 'type DEFAULT' " + JSON.stringify( message ) ) ;
return ;
}
}
}
PROTOTYPE.onMessagePush = function( message, binaryData )
{
var value = message.value; // String or JSON object
var sender = message.sender;
var messageId = message.messageid;
var qid = messageId.qid;
var cid = messageId.cid;
var tid = messageId.tid; // Epoch time in milliseconds, IBMi has a time resolution of 1 ms
var textFormat = "PLAIN";
if ( message.value.function )
{
return;
}
if ( binaryData )
{
if ( message.value.mimetype === "text/plain" )
{
textFormat = "PLAIN"
value = LUIENCRYPT.decodeUTF8Uint8Array( binaryData, true );
}
else if ( message.value.mimetype === "text/css" )
{
textFormat = "CSS"
value = LUIENCRYPT.decodeUTF8Uint8Array( binaryData, true );
}
else if ( message.value.mimetype === "text/javascript" )
{
textFormat = "JAVASCRIPT"
value = LUIENCRYPT.decodeUTF8Uint8Array( binaryData, true );
}
else if ( message.value.mimetype === "text/html" )
{
textFormat = "HTML"
value = LUIENCRYPT.decodeUTF8Uint8Array( binaryData, true );
}
else if ( message.value.mimetype === "image/jpeg" )
{
console.log ( "jpeg files are not supported in the Widget/RDML interface" );
return;
}
else if ( message.value.mimetype === "application/pdf" )
{
console.log ( "pdf files are not supported in the Widget/RDML interface" );
return;
}
this.fireDataPushedByServer( textFormat, value, JSON.stringify( message ) );
}
else
{
this.fireMessagePushedByServer( message.value );
}
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC10",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-connector-min.js").get(),l.cRc("lui-encrypt-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));};cO.getHOSTUSERID=function(){return l.tS(this.get("HostUserid"));
};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.mthOPEN=function(P0){this.invoke("Open",[l.tS(P0)]);};cO.mthSETCONNECTIONPARAMETERASSTRING=function(P0,P1){this.invoke("SetConnectionParameterAsString",[l.tS(P0),l.tS(P1)]);};cO.mthSETCONNECTIONPARAMETERASNUMBER=function(P0,P1){this.invoke("SetConnectionParameterAsNumber",[l.tS(P0),l.tN(P1)]);};cO.mthCLEARPARAMETERS=function()
{this.invoke("ClearParameters");};cO.mthCLOSE=function(P0,P1){this.invoke("Close",[l.tI(P0),l.tS(P1)]);};cO.mthSEND=function(P0,P1,P2){this.invoke("Send",[l.tS(P0),l.tS(P1),l.tS(P2)]);};cO.mthSENDWITHNUMERICID=function(P0,P1,P2){this.invoke("SendWithNumericId",[l.tI(P0),l.tS(P1),l.tS(P2)]);};},{rp:["PRIM_WDGT.Object"]});