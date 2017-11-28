LANSA.addComponent({id:"XDEVICE01",nm:"xDeviceAudioRecord",ot:"ww",tp:"Widget",de:"Control audio recording on mobile device",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireStarted=function(pStatus){var eP=l.ePs();eP.aE("STATUS",pStatus);l.fE(this,"STARTED",eP);};wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};wP.fireRecordFinished=function(){l.fE(this,"RECORDFINISHED");};};var fW=
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
this.m_File = '';
this.m_CompressionLevel = 2
this.m_Duration = 0;
}
PROTOTYPE.getFile = function()
{
return this.m_File;
}
PROTOTYPE.setFile = function( value )
{
this.m_File = value;
}
PROTOTYPE.getCompressionLevel = function()
{
return this.m_CompressionLevel;
}
PROTOTYPE.setCompressionLevel = function( value )
{
this.m_CompressionLevel = value;
}
PROTOTYPE.getDuration = function()
{
return this.m_Duration
}
PROTOTYPE.setDuration = function( value )
{
this.m_Duration = value;
}
PROTOTYPE.Record = function()
{
var pThis = this;
var options = { };
options.writeToFilePath = this.m_File;
options.duration = this.m_Duration
options.compressionLevel = this.m_CompressionLevel
options.onCompleted = function( result )
{
pThis.fireStarted( LongRangeToVLStatusCodes( result.status ) );
};
options.onRecordFinished = function()
{
pThis.fireRecordFinished();
};
LONGRANGE.Audio.record(options);
return "OK";
}
PROTOTYPE.Stop = function()
{
var pThis = this;
var options = { };
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
}
LONGRANGE.Audio.stop(options);
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
return widgetStatus
}
;
l.rWg({nm:"XDEVICE01",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFILE("");this.setCOMPRESSIONLEVEL(2);this.setDURATION(0);}});cO.getFILE=function(){return l.tS(this.get("File"));};cO.setFILE=function(v){this.set("File",l.tS(v));};cO.getCOMPRESSIONLEVEL=function(){return l.tI(this.get("CompressionLevel"));};cO.setCOMPRESSIONLEVEL=function(v){this.set("CompressionLevel",l.tI(v));};cO.getDURATION=function(){return l.tI(this.get("Duration"));};cO.setDURATION=function(v)
{this.set("Duration",l.tI(v));};cO.mthRECORD=function(){return l.tS(this.invoke("Record"));};cO.mthSTOP=function(){this.invoke("Stop");};},{rp:["PRIM_WDGT.Object"]});