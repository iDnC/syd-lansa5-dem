LANSA.addComponent({id:"XDEVICE03",nm:"xDeviceBarcodeScanner",ot:"ww",tp:"Widget",de:"Scan barcodes on mobile devices",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pBarcodeCount,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aI("BARCODECOUNT",pBarcodeCount);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
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
this.m_ScanMultiple = false;
this.m_AllowDuplicates = false;
this.m_ScannerEngine = "Default";
this.BarcodeTypes = [ ];
}
PROTOTYPE.getScanMultiple = function()
{
return this.m_ScanMultiple;
}
PROTOTYPE.setScanMultiple = function( strValue )
{
this.m_ScanMultiple = strValue;
}
PROTOTYPE.getAllowDuplicates = function()
{
return this.m_AllowDuplicates;
}
PROTOTYPE.setAllowDuplicates = function( strValue )
{
this.m_AllowDuplicates = strValue;
}
PROTOTYPE.getScannerEngine = function()
{
return this.m_ScannerEngine;
}
PROTOTYPE.setScannerEngine = function( enumValue )
{
this.m_ScannerEngine = enumValue;
}
PROTOTYPE.AddBarcodeType = function( enumType )
{
var type = enumType;
if ( this.BarcodeTypes.indexOf( type ) < 0 )
{
this.BarcodeTypes.push( type );
}
}
PROTOTYPE.RemoveBarcodeType = function( enumType )
{
var type = enumType;
var index = this.BarcodeTypes.indexOf( type );
if ( index > -1 )
{
this.BarcodeTypes.splice( index, 1 );
}
}
PROTOTYPE.ClearBarcodeTypes = function()
{
this.BarcodeTypes.splice( 0, this.BarcodeTypes.length );
}
PROTOTYPE.ActivateScanner = function()
{
var pThis = this;
var options = { };
options.multipleEntries = this.m_ScanMultiple;
options.allowDuplicates = this.m_AllowDuplicates;
options.scannerEngine = this.m_ScannerEngine;
options.barcodeTypes = '';
if ( this.BarcodeTypes.length > 0 )
{
options.barcodeTypes = this.BarcodeTypes[ 0 ];
for ( i = 1; i < this.BarcodeTypes.length; i++ )
{
options.barcodeTypes += "," + this.BarcodeTypes[ i ];
}
}
options.onCompleted = function( result )
{
var barcodeCount = 0;
if ( result.status == LONGRANGE.Status.Ok)
{
if ( pThis.m_ScanMultiple )
{
pThis.Values = result.values;
}
else
{
pThis.Values = [ result.value ];
}
barcodeCount = pThis.Values.length;
}
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), barcodeCount, message );
};
LONGRANGE.BarcodeScanner.scan(options);
return "OK";
}
PROTOTYPE.GetScannedValue = function( iIndex )
{
if ( iIndex < this.Values.length )
{
return this.Values[ iIndex ];
}
return "";
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
l.rWg({nm:"XDEVICE03",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setSCANMULTIPLE(false);this.setALLOWDUPLICATES(false);this.setSCANNERENGINE("DEFAULT");}});cO.getSCANMULTIPLE=function(){return l.tB(this.get("ScanMultiple"));};cO.setSCANMULTIPLE=function(v){this.set("ScanMultiple",l.tB(v));};cO.getALLOWDUPLICATES=function(){return l.tB(this.get("AllowDuplicates"));};cO.setALLOWDUPLICATES=function(v){this.set("AllowDuplicates",l.tB(v));};cO.getSCANNERENGINE=function()
{return l.tS(this.get("ScannerEngine")).toUpperCase();};cO.setSCANNERENGINE=function(v){this.set("ScannerEngine",l.tS(v).toUpperCase());};cO.mthADDBARCODETYPE=function(P0){this.invoke("AddBarcodeType",[l.tS(P0).toUpperCase()]);};cO.mthREMOVEBARCODETYPE=function(P0){this.invoke("RemoveBarcodeType",[l.tS(P0).toUpperCase()]);};cO.mthCLEARBARCODETYPES=function(){this.invoke("ClearBarcodeTypes");};cO.mthACTIVATESCANNER=function(){return l.tS(this.invoke("ActivateScanner"));};cO.mthGETSCANNEDVALUE=function(P0)
{return l.tS(this.invoke("GetScannedValue",[l.tI(P0)]));};},{rp:["PRIM_WDGT.Object"]});