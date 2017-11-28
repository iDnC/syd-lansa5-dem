LANSA.addComponent({id:"XCONNEC04",nm:"xConnectorProgramCall",ot:"ww",tp:"Widget",de:"Call a program",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireProgramCallCompleted=function(pStatus,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("ERROR",pError);l.fE(this,"PROGRAMCALLCOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var m_Parameters = [];
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
PROTOTYPE.getProgram = function()
{
return this.m_Program;
}
PROTOTYPE.setProgram = function( strValue )
{
this.m_Program = strValue;
}
PROTOTYPE.getError = function()
{
return this.m_Error;
}
PROTOTYPE.setError = function( strValue )
{
this.m_Error = strValue;
}
PROTOTYPE.SetParameterAsString = function( name, value )
{
this.SetParameter( name, value );
}
PROTOTYPE.GetParameterAsString = function( name )
{
var string = "";
for ( var i = 0; i < m_Parameters.length; i++ )
{
if ( m_Parameters[ i ].name == name )
{
string = m_Parameters[ i ].value;
if ( typeof string == "object" )
{
string = JSON.stringify( string );
}
break;
}
}
return string;
}
PROTOTYPE.SetParameterAsNumber = function( name, value )
{
this.SetParameter( name, value );
}
PROTOTYPE.GetParameterAsNumber = function( name )
{
var number = 0;
for ( var i = 0; i < m_Parameters.length; i++ )
{
if ( m_Parameters[ i ].name == name )
{
number = m_Parameters[ i ].value;
break;
}
}
return number;
}
PROTOTYPE.ClearParameters = function()
{
m_Parameters = [];
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
PROTOTYPE.Call = function( asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
var service = {
connector: "programcall",
object: this.m_Program,
parameters: "" };
service.parameters = m_Parameters;
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
pThis.ProcessReturnedParameters( response.parameters );
pThis.fireProgramCallCompleted( "OK", "" );
}
else if ( response.type == "error" )
{
pThis.fireProgramCallCompleted( "ER", CollateErrorMessage( response ) );
}
else
{
pThis.fireProgramCallCompleted( "ER", "" );
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
this.ProcessReturnedParameters( response.parameters );
}
}
else if ( response.type == "error" )
{
this.m_Error = CollateErrorMessage( response );
}
return status;
}
PROTOTYPE.ProcessReturnedParameters = function( parameters )
{
for ( var i = 0; i < parameters.length; i++ )
{
this.SetParameter( parameters[ i ].name, parameters[ i ].value )
}
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC04",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-connector-min.js").get(),l.cRc("lui-encrypt-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");this.setPROGRAM("");this.setERROR("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));};cO.getHOSTUSERID=function()
{return l.tS(this.get("HostUserid"));};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.getPROGRAM=function(){return l.tS(this.get("Program"));};cO.setPROGRAM=function(v){this.set("Program",l.tS(v));};cO.getERROR=function(){return l.tS(this.get("Error"));};cO.setERROR=function(v){this.set("Error",l.tS(v));};cO.mthSETPARAMETERASSTRING=function(P0,P1)
{this.invoke("SetParameterAsString",[l.tS(P0),l.tS(P1)]);};cO.mthGETPARAMETERASSTRING=function(P0){return l.tS(this.invoke("GetParameterAsString",[l.tS(P0)]));};cO.mthSETPARAMETERASNUMBER=function(P0,P1){this.invoke("SetParameterAsNumber",[l.tS(P0),l.tN(P1)]);};cO.mthGETPARAMETERASNUMBER=function(P0){return l.tD(this.invoke("GetParameterAsNumber",[l.tS(P0)]));};cO.mthCALL=function(P0){return l.tS(this.invoke("Call",[l.tB(P0)])).toUpperCase();};cO.mthCLEARPARAMETERS=function(){this.invoke("ClearParameters");
};},{rp:["PRIM_WDGT.Object"]});