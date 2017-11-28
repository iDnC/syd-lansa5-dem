LANSA.addComponent({id:"XDEVICE02",nm:"xDeviceAudioPlayback",ot:"ww",tp:"Widget",de:"Control audio playback on mobile devices",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireStarted=function(pStatus){var eP=l.ePs();eP.aE("STATUS",pStatus);l.fE(this,"STARTED",eP);};wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};wP.fireStopped=function(pStatus){var eP=l.ePs();eP.aE("STATUS",pStatus);l.fE(this,"STOPPED",eP);
};};var fW=
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
this.m_File = "";
this.m_StatusCheckInterval = 2;
}
PROTOTYPE.getFile = function()
{
return this.m_File;
}
PROTOTYPE.setFile = function( value )
{
this.m_File = value;
}
PROTOTYPE.Play = function()
{
var pThis = this;
var options = { };
options.path = this.m_File;
options.onCompleted = function( result )
{
pThis.fireStarted( LongRangeToVLStatusCodes( result.status ) );
};
LONGRANGE.Audio.play(options);
this.AlertStop = setInterval( function()
{
var iOptions = { };
iOptions.onCompleted = function( result )
{
if ( !result.active )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
clearInterval( pThis.AlertStop );
}
}
LONGRANGE.Audio.isActive(iOptions);
}, ( this.m_StatusCheckInterval * 1000 ) );
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
clearInterval( pThis.AlertStop );
pThis.fireStopped( LongRangeToVLStatusCodes( result.status ), message );
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
return widgetStatus;
}
;
l.rWg({nm:"XDEVICE02",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFILE("");}});cO.getFILE=function(){return l.tS(this.get("File"));};cO.setFILE=function(v){this.set("File",l.tS(v));};cO.mthPLAY=function(){return l.tS(this.invoke("Play"));};cO.mthSTOP=function(){this.invoke("Stop");};},{rp:["PRIM_WDGT.Object"]});