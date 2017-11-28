LANSA.addComponent({id:"XCONNEC05",nm:"xConnectorObjectList",ot:"ww",tp:"Widget",de:"Retrieve an object list",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireGetListCompleted=function(pStatus,pError){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("ERROR",pError);l.fE(this,"GETLISTCOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var m_List;
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
PROTOTYPE.getError = function()
{
return this.m_Error;
}
PROTOTYPE.setError = function( strValue )
{
this.m_Error = strValue;
}
PROTOTYPE.GetList = function( listName, asynchronous )
{
var host = {
endpoint: this.m_HostEndPoint,
profile: this.m_HostUserid,
password: this.m_HostPassword };
var service = {
connector: "objectlist",
object: listName };
this.m_List = [];
this.m_Error = "";
if ( asynchronous )
{
var pThis = this;
LUICONNECTOR.execute( host, service, function( response )
{
if ( ( response.type == "status" ) && ( response.status == "OK" ) )
{
pThis.m_List = response.list;
pThis.fireGetListCompleted( "OK", "" );
}
else if ( response.type == "error" )
{
pThis.fireGetListCompleted( "ER", CollateErrorMessage( response ) );
}
else
{
pThis.fireGetListCompleted( "ER", "", "" );
}
});
return "OK";
}
else
{
var response = LUICONNECTOR.execute( host, service, null ) ;
return this.ProcessReturnedList( response );
}
}
PROTOTYPE.ProcessReturnedList = function( response )
{
var status = "ER";
if ( response.type == "status" )
{
if ( response.status == "OK" )
{
this.m_List = response.list;
status = "OK";
}
}
else if ( response.type == "error" )
{
this.m_Error = CollateErrorMessage( response );
}
return status;
}
PROTOTYPE.GetObjectCount = function()
{
return this.m_List.length;
}
PROTOTYPE.GetObjectName = function( index )
{
return this.m_List[ index ].name;
}
PROTOTYPE.GetObjectLibrary = function( index )
{
return this.m_List[ index ].library;
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCONNEC05",js:[l.cRc("connectorUtilities_min.js").get(),l.cRc("lui-connector-min.js").get(),l.cRc("lui-encrypt-min.js").get()],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOSTENDPOINT("");this.setHOSTUSERID("");this.setHOSTPASSWORD("");this.setERROR("");}});cO.getHOSTENDPOINT=function(){return l.tS(this.get("HostEndPoint"));};cO.setHOSTENDPOINT=function(v){this.set("HostEndPoint",l.tS(v));};cO.getHOSTUSERID=function(){return l.tS(this.get("HostUserid"));
};cO.setHOSTUSERID=function(v){this.set("HostUserid",l.tS(v));};cO.getHOSTPASSWORD=function(){return l.tS(this.get("HostPassword"));};cO.setHOSTPASSWORD=function(v){this.set("HostPassword",l.tS(v));};cO.getERROR=function(){return l.tS(this.get("Error"));};cO.setERROR=function(v){this.set("Error",l.tS(v));};cO.mthGETLIST=function(P0,P1){return l.tS(this.invoke("GetList",[l.tS(P0),l.tB(P1)])).toUpperCase();};cO.mthGETOBJECTCOUNT=function(){return l.tI(this.invoke("GetObjectCount"));};cO.mthGETOBJECTNAME=function(P0)
{return l.tS(this.invoke("GetObjectName",[l.tI(P0)]));};cO.mthGETOBJECTLIBRARY=function(P0){return l.tS(this.invoke("GetObjectLibrary",[l.tI(P0)]));};},{rp:["PRIM_WDGT.Object"]});