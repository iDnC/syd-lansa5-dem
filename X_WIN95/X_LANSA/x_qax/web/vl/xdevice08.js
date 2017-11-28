LANSA.addComponent({id:"XDEVICE08",nm:"xDeviceFileDelete",ot:"ww",tp:"Widget",de:"Delete a local file",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
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
PROTOTYPE.getFileName = function()
{
return this.m_FileName;
}
PROTOTYPE.setFileName = function( strValue )
{
this.m_FileName = strValue;
}
PROTOTYPE.Delete = function()
{
var pThis = this;
var options = { };
options.file = this.m_FileName;
options.fileMustExist = true;
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.LocalFiles.deleteFile(options);
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
l.rWg({nm:"XDEVICE08",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFILENAME("");}});cO.getFILENAME=function(){return l.tS(this.get("FileName"));};cO.setFILENAME=function(v){this.set("FileName",l.tS(v));};cO.mthDELETE=function(){return l.tS(this.invoke("Delete"));};},{rp:["PRIM_WDGT.Object"]});