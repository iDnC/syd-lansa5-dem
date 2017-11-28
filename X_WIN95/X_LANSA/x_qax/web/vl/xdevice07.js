LANSA.addComponent({id:"XDEVICE07",nm:"xDeviceFileCopy",ot:"ww",tp:"Widget",de:"Copy local files",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
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
PROTOTYPE.getFromFile = function()
{
return this.m_FromFile;
}
PROTOTYPE.setFromFile = function( strValue )
{
this.m_FromFile = strValue;
}
PROTOTYPE.getToFile = function()
{
return this.m_ToFile;
}
PROTOTYPE.setToFile = function( strValue )
{
this.m_ToFile = strValue;
}
PROTOTYPE.Copy = function()
{
var pThis = this;
var options = { };
options.file = { };
options.file.from = this.m_FromFile;
options.file.to = this.m_ToFile;
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.LocalFiles.copyFile(options);
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
l.rWg({nm:"XDEVICE07",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFROMFILE("");this.setTOFILE("");}});cO.getFROMFILE=function(){return l.tS(this.get("FromFile"));};cO.setFROMFILE=function(v){this.set("FromFile",l.tS(v));};cO.getTOFILE=function(){return l.tS(this.get("ToFile"));};cO.setTOFILE=function(v){this.set("ToFile",l.tS(v));};cO.mthCOPY=function(){return l.tS(this.invoke("Copy"));};},{rp:["PRIM_WDGT.Object"]});