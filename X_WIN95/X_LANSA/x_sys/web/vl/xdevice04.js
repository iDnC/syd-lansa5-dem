LANSA.addComponent({id:"XDEVICE04",nm:"xDeviceCamera",ot:"ww",tp:"Widget",de:"Control camera on mobile devices",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var
widgetStatus = WIDGET.Completed;
if ( !window.LONGRANGE )
{
widgetStatus = WIDGET.Loading;
var
pPreviousOnLongRangeReady = window.onLongRangeReady;
window.onLongRangeReady = function()
{
WIDGET.Finalize();
if ( pPreviousOnLongRangeReady )
{
pPreviousOnLongRangeReady();
}
}
}
PROTOTYPE.onCreateInstance = function()
{
this.m_ImageOrientation = "PORT";
this.m_ImageWidth = 0;
this.m_ImageHeight = 0;
this.m_Base64Orientation = "BOTH";
this.m_Base64Width = 0;
this.m_Base64Height = 0;
}
PROTOTYPE.getSource = function()
{
var
source = "";
switch (this.m_Source)
{
case "camera":
source = "CAM";
break;
case "library":
source = "LIB";
break;
}
return source;
}
PROTOTYPE.setSource = function( enumValue )
{
switch (enumValue)
{
case "CAM":
this.m_Source = "camera";
break;
case "LIB":
this.m_Source = "library";
break;
default:
this.m_Source = "camera";
}
}
PROTOTYPE.getEnableImage = function()
{
return this.m_EnableImage;
}
PROTOTYPE.setEnableImage = function( enable )
{
this.m_EnableImage = enable;
}
PROTOTYPE.getEnableVideo = function()
{
return this.m_EnableVideo;
}
PROTOTYPE.setEnableVideo = function( enable )
{
this.m_EnableVideo = enable;
}
PROTOTYPE.getSaveToPhotoGallery = function()
{
return this.m_SaveToPhotoGallery;
}
PROTOTYPE.setSaveToPhotoGallery = function( save )
{
this.m_SaveToPhotoGallery = save;
}
PROTOTYPE.getReturnBase64String = function()
{
return this.m_ReturnBase64String;
}
PROTOTYPE.setReturnBase64String = function( bValue )
{
this.m_ReturnBase64String = bValue;
}
PROTOTYPE.getReturnFile = function()
{
return this.m_ReturnFile;
}
PROTOTYPE.setReturnFile = function( save )
{
this.m_ReturnFile = save;
}
PROTOTYPE.getAllowEdit = function()
{
return this.m_AllowEdit;
}
PROTOTYPE.setAllowEdit = function( allow )
{
this.m_AllowEdit = allow;
}
PROTOTYPE.getEnableAnnotation = function()
{
return this.m_EnableAnnotation;
}
PROTOTYPE.setEnableAnnotation = function( enable )
{
this.m_EnableAnnotation = enable;
}
PROTOTYPE.getVideoQuality = function()
{
var
quality = "";
switch (this.m_VideoQuality)
{
case 0:
quality = "HIGH";
break;
case 1:
quality = "MED";
break;
case 3:
quality = "LOW";
break;
default:
quality = "MED";
}
return quality;
}
PROTOTYPE.setVideoQuality = function( level )
{
switch (level)
{
case "HIGH":
this.m_VideoQuality = 0;
break;
case "MED":
this.m_VideoQuality = 1;
break;
case "LOW":
this.m_VideoQuality = 3;
break;
default:
this.m_VideoQuality = 1;
}
}
PROTOTYPE.getVideoMaxDuration = function()
{
return this.m_VideoMaxDuration;
}
PROTOTYPE.setVideoMaxDuration = function( maximum )
{
this.m_VideoMaxDuration = maximum;
}
PROTOTYPE.getOutputPath = function()
{
return this.m_OutputPath;
}
PROTOTYPE.setOutputPath = function( path )
{
this.m_OutputPath = path;
}
PROTOTYPE.getOutputFile = function()
{
return this.m_OutputFile;
}
PROTOTYPE.setOutputFile = function( strValue )
{
this.m_OutputFile = strValue;
}
PROTOTYPE.getOutputUrl = function()
{
return this.m_OutputUrl;
}
PROTOTYPE.setOutputUrl = function( strValue )
{
this.m_OutputUrl = strValue;
}
PROTOTYPE.getIsImage = function()
{
return this.m_IsImage;
}
PROTOTYPE.setIsImage = function( bValue )
{
this.m_IsImage = bValue;
}
PROTOTYPE.getIsVideo = function()
{
return this.m_IsVideo;
}
PROTOTYPE.setIsVideo = function( bValue )
{
this.m_IsVideo = bValue;
}
PROTOTYPE.getImageAsBase64Data = function()
{
return this.m_ImageAsBase64Data;
}
PROTOTYPE.setImageAsBase64Data = function( strValue )
{
this.m_ImageAsBase64Data = strValue;
}
PROTOTYPE.SetImageSize = function( orientation, width, height )
{
this.m_ImageOrientation = orientation.toUpperCase();
this.m_ImageWidth = width;
this.m_ImageHeight = height;
}
PROTOTYPE.SetBase64ImageSize = function( orientation, width, height )
{
this.m_Base64Orientation = orientation.toUpperCase();
this.m_Base64Width = width;
this.m_Base64Height = height;
}
PROTOTYPE.ActivateCamera = function()
{
var pThis = this;
var options = { };
options.source = this.m_Source;
options.enableImage = this.m_EnableImage;
options.enableVideo = this.m_EnableVideo;
if ( this.m_ImageOrientation == "PORT" )
{
options.size = { width:{ portrait:this.m_ImageWidth }, height:{ portrait:this.m_ImageHeight } };
}
else if ( this.m_ImageOrientation == "LAND" )
{
options.size = { width:{ landscape:this.m_ImageWidth }, height:{ landscape:this.m_ImageHeight } };
}
else
{
options.size = { width:this.m_ImageWidth, height:this.m_ImageHeight };
}
options.saveToPhotoGallery = this.m_SaveToPhotoGallery;
options.returnContent = this.m_ReturnBase64String;
if ( options.returnContent )
{
if ( this.m_Base64Orientation == "PORT" )
{
options.returnContent = { size:{ width:{ portrait:this.m_Base64Width }, height:{ portrait:this.m_Base64Height } } };
}
else if ( this.m_Base64Orientation == "LAND" )
{
options.returnContent = { size:{ width:{ landscape:this.m_Base64Width }, height:{ landscape:this.m_Base64Height } } };
}
else
{
options.returnContent = { size:{ width:this.m_Base64Width, height:this.m_Base64Height } };
}
}
options.returnFile = this.m_ReturnFile;
options.allowsEditing = this.m_AllowEdit;
options.enableAnnotation = this.m_EnableAnnotation;
options.videoQuality = this.m_VideoQuality;
options.videoMaxDuration = this.m_VideoMaxDuration;
options.writeToFilePath = this.m_OutputPath;
options.onCompleted = function( result )
{
if ( result.status != LONGRANGE.Status.Error)
{
pThis.m_OutputFile = result.filePath;
pThis.m_OutputUrl = result.fileURL;
if ( result.mediaType == "public.image" )
{
pThis.m_IsImage = true;
pThis.m_IsVideo = false;
}
else
{
pThis.m_IsImage = false;
pThis.m_IsVideo = true;
}
if ( pThis.m_ReturnBase64String )
{
pThis.m_ImageAsBase64Data = result.data;
}
else
{
pThis.m_ImageAsBase64Data = "";
}
}
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
};
LONGRANGE.Camera.show(options);
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
l.rWg({nm:"XDEVICE04",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setSOURCE("CAM");this.setENABLEIMAGE(true);this.setENABLEVIDEO(false);this.setSAVETOPHOTOGALLERY(false);this.setRETURNBASE64STRING(true);this.setRETURNFILE(false);this.setALLOWEDIT(false);this.setENABLEANNOTATION(false);this.setVIDEOQUALITY("HIGH");this.setVIDEOMAXDURATION(0);this.setOUTPUTPATH("");this.setOUTPUTFILE("");this.setOUTPUTURL("");this.setISIMAGE(false);this.setISVIDEO(false);
this.setIMAGEASBASE64DATA("");}});cO.getSOURCE=function(){return l.tS(this.get("Source")).toUpperCase();};cO.setSOURCE=function(v){this.set("Source",l.tS(v).toUpperCase());};cO.getENABLEIMAGE=function(){return l.tB(this.get("EnableImage"));};cO.setENABLEIMAGE=function(v){this.set("EnableImage",l.tB(v));};cO.getENABLEVIDEO=function(){return l.tB(this.get("EnableVideo"));};cO.setENABLEVIDEO=function(v){this.set("EnableVideo",l.tB(v));};cO.getSAVETOPHOTOGALLERY=function(){return l.tB(this.get("SaveToPhotoGallery"));
};cO.setSAVETOPHOTOGALLERY=function(v){this.set("SaveToPhotoGallery",l.tB(v));};cO.getRETURNBASE64STRING=function(){return l.tB(this.get("ReturnBase64String"));};cO.setRETURNBASE64STRING=function(v){this.set("ReturnBase64String",l.tB(v));};cO.getRETURNFILE=function(){return l.tB(this.get("ReturnFile"));};cO.setRETURNFILE=function(v){this.set("ReturnFile",l.tB(v));};cO.getALLOWEDIT=function(){return l.tB(this.get("AllowEdit"));};cO.setALLOWEDIT=function(v){this.set("AllowEdit",l.tB(v));};cO.getENABLEANNOTATION=function()
{return l.tB(this.get("EnableAnnotation"));};cO.setENABLEANNOTATION=function(v){this.set("EnableAnnotation",l.tB(v));};cO.getVIDEOQUALITY=function(){return l.tS(this.get("VideoQuality")).toUpperCase();};cO.setVIDEOQUALITY=function(v){this.set("VideoQuality",l.tS(v).toUpperCase());};cO.getVIDEOMAXDURATION=function(){return l.tI(this.get("VideoMaxDuration"));};cO.setVIDEOMAXDURATION=function(v){this.set("VideoMaxDuration",l.tI(v));};cO.getOUTPUTPATH=function(){return l.tS(this.get("OutputPath"));};
cO.setOUTPUTPATH=function(v){this.set("OutputPath",l.tS(v));};cO.getOUTPUTFILE=function(){return l.tS(this.get("OutputFile"));};cO.setOUTPUTFILE=function(v){this.set("OutputFile",l.tS(v));};cO.getOUTPUTURL=function(){return l.tS(this.get("OutputUrl"));};cO.setOUTPUTURL=function(v){this.set("OutputUrl",l.tS(v));};cO.getISIMAGE=function(){return l.tB(this.get("IsImage"));};cO.setISIMAGE=function(v){this.set("IsImage",l.tB(v));};cO.getISVIDEO=function(){return l.tB(this.get("IsVideo"));};cO.setISVIDEO=function(v)
{this.set("IsVideo",l.tB(v));};cO.getIMAGEASBASE64DATA=function(){return l.tS(this.get("ImageAsBase64Data"));};cO.setIMAGEASBASE64DATA=function(v){this.set("ImageAsBase64Data",l.tS(v));};cO.mthACTIVATECAMERA=function(){return l.tS(this.invoke("ActivateCamera"));};cO.mthSETIMAGESIZE=function(P0,P1,P2){this.invoke("SetImageSize",[l.tS(P0).toUpperCase(),l.tI(P1),l.tI(P2)]);};cO.mthSETBASE64IMAGESIZE=function(P0,P1,P2){this.invoke("SetBase64ImageSize",[l.tS(P0).toUpperCase(),l.tI(P1),l.tI(P2)]);};},{
rp:["PRIM_WDGT.Object"]});