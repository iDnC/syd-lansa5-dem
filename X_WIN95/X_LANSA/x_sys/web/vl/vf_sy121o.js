LANSA.addComponent({id:"VF_SY121O",ot:"ww",tp:"Widget",de:"\OC=VLF-ONE / RAMP-TS2 interface widget",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireSignalEvent=function(pEventId,pS1,pS2,pS3,pS4){var eP=l.ePs();eP.aS("EVENTID",pEventId);eP.aS("S1",pS1);eP.aS("S2",pS2);eP.aS("S3",pS3);eP.aS("S4",pS4);l.fE(this,"SIGNALEVENT",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.int_iFrame = null;
this.int_contentWindow = null;
if (window.VLFONE == null) /* This code is repeated in VF_SY121O and VF_SY221O */
{
window.VLFONE = {};
window.VLFONE.Sessions = [];
window.VLFONE.SharedSessionScripts = [];
window.VLFONE.sharedSESSION = function (forGUID)
{
var session = window.VLFONE.SharedSessionScripts[forGUID];
if (session != null) return (session.iFrame.contentWindow);
else                 return (null);
};
window.VLFONE.SendMESSAGE = function (s, e, s1, s2, s3, s4)
{
var pThis = null;
e = e.toUpperCase();
if (s1 == null) s1 = "";
if (s2 == null) s2 = "";
if (s3 == null) s3 = "";
if (s4 == null) s4 = "";
pThis = window.VLFONE.Sessions[s];
if (pThis != null)
{
if (pThis.int_contentWindow != null) pThis.int_contentWindow.postMessage({ s:s, e:e, s1:s1, s2:s2, s3:s3, s4:s4 }, "*");
return;
}
var session = window.VLFONE.SharedSessionScripts[s];
if ((session != null) && (session.iFrame.contentWindow != null))
{
session.iFrame.contentWindow.postMessage({ s:s, e:e, s1:s1, s2:s2, s3:s3, s4:s4 },"*");
return;
}
return;
};
window.VLFONE.ReceiveMESSAGE = function (event)
{
var data = event.data;
var len = 0;
var i = 0;
var pThis = window.VLFONE.Sessions[data.s];
if (pThis != null)
{
pThis.fireSignalEvent(data.e, data.s1, data.s2, data.s3, data.s4);
return;
}
var session = window.VLFONE.SharedSessionScripts[data.s];
if ((session != null) && (session.iFrame.contentWindow != null))
{
session.pThis.fireSignalEvent(data.e, data.s1, data.s2, data.s3, data.s4, session.sessionGUID);
return;
}
return;
};
window.addEventListener("message", window.VLFONE.ReceiveMESSAGE);
}
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.int_parentDiv = parentDiv;
if (this.int_iFrame == null)
{
this.int_iFrame = document.createElement("IFRAME");
this.int_iFrame.style.height   = "100%";
this.int_iFrame.style.width    = "100%";
this.int_iFrame.style.border   = "0px";
this.int_iFrame.style.margin   = "0px";
this.int_iFrame.style.padding  = "0px";
this.int_iFrame.style.overflow = "hidden";
this.int_parentDiv.appendChild(this.int_iFrame);
}
return;
}
PROTOTYPE.onSizeChanged = function()
{
}
PROTOTYPE.getSessionIdentifier = function()
{
return this.m_SessionIdentifier;
}
PROTOTYPE.setSessionIdentifier = function( strValue )
{
this.m_SessionIdentifier = strValue;
}
PROTOTYPE.getflagCurrentlyConnected = function()
{
return this.m_flagCurrentlyConnected;
}
PROTOTYPE.setflagCurrentlyConnected = function( bValue )
{
this.m_flagCurrentlyConnected = bValue;
}
PROTOTYPE.getflagCurrentlyLoggedOn = function()
{
return this.m_flagCurrentlyLoggedOn;
}
PROTOTYPE.setflagCurrentlyLoggedOn = function( bValue )
{
this.m_flagCurrentlyLoggedOn = bValue;
}
PROTOTYPE.getflagRAMPScriptsLoaded = function()
{
return this.m_flagRAMPScriptsLoaded;
}
PROTOTYPE.setflagRAMPScriptsLoaded = function( bValue )
{
this.m_flagRAMPScriptsLoaded = bValue;
}
PROTOTYPE.Load = function( strFromURL, strRAMPScriptFile, strTheme, strBackgroundColor, strSessionGUID, bSharedSession )
{
var pThis      = this;
var loc = window.location;
window.VLFONE.Sessions[this.m_SessionIdentifier] = this;
strFromURL += '&SESSIONID=' + this.m_SessionIdentifier;
strFromURL += '&SESSIONGUID=' + strSessionGUID;
if (bSharedSession == true) strFromURL += '&SHAREDSESSION=Y';
else                        strFromURL += '&SHAREDSESSION=N';
strFromURL += '&THEME=' + strTheme;
strFromURL += '&BACKCOLOR=' + strBackgroundColor;
strFromURL += '&RAMPSRC=' + loc.protocol + "//" + loc.hostname;
if (loc.port != "") strFromURL += ":" + loc.port;
strFromURL += loc.pathname.substring(0,loc.pathname.lastIndexOf("/")) + "/" + strRAMPScriptFile;
this.int_iFrame.onload = function ()
{
try
{
pThis.int_contentWindow = pThis.int_iFrame.contentWindow;
window.VLFONE.SendMESSAGE(pThis.m_SessionIdentifier,"INITIALIZE");
}
catch (oE)
{
window.alert("A VF_SY121O RAMP load failure was detected in situation A. The error encountered was - " + oE);
pThis.int_iFrame = null;
pThis.int_contentWindow = null;
}
};
this.int_iFrame.onerror = function ()
{
try
{
window.VLFONE.SendMESSAGE(pThis.m_SessionIdentifier,"VF_FATAL","A VF_SY121O RAMP load failure was detected in situation B." );
}
catch (oE)
{
window.alert("A VF_SY121O RAMP load failure was detected in situation B. The error encountered was - " + oE);
pThis.int_iFrame = null;
pThis.int_contentWindow = null;
}
};
this.int_iFrame.src = strFromURL;
return;
}
PROTOTYPE.unLoad = function()
{
try
{
window.VLFONE.Sessions[this.m_SessionIdentifier] = null;
if (this.int_iFrame != null)
{
this.int_parentDiv.removeChild(this.int_iFrame);
this.int_iFrame = null;
}
this.int_contentWindow = null;
this.int_parentDiv = null;
} catch (e) { }
}
PROTOTYPE.CloseSession = function()
{
try
{
window.VLFONE.SendMESSAGE(this.m_SessionIdentifier,"CLOSESESSION");
} catch (e) { }
}
PROTOTYPE.HandleExternalRequest = function(e,s1,s2,s3,s4)
{
window.VLFONE.SendMESSAGE(this.m_SessionIdentifier,e,s1,s2,s3,s4);
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_SY121O",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setFLAGCURRENTLYCONNECTED(false);this.setFLAGCURRENTLYLOGGEDON(false);this.setFLAGRAMPSCRIPTSLOADED(false);this.setSESSIONIDENTIFIER("");}});cO.getFLAGCURRENTLYCONNECTED=function(){return l.tB(this.get("flagCurrentlyConnected"));};cO.setFLAGCURRENTLYCONNECTED=function(v){this.set("flagCurrentlyConnected",l.tB(v));};cO.getFLAGCURRENTLYLOGGEDON=function(){return l.tB(this.get("flagCurrentlyLoggedOn"));
};cO.setFLAGCURRENTLYLOGGEDON=function(v){this.set("flagCurrentlyLoggedOn",l.tB(v));};cO.getFLAGRAMPSCRIPTSLOADED=function(){return l.tB(this.get("flagRAMPScriptsLoaded"));};cO.setFLAGRAMPSCRIPTSLOADED=function(v){this.set("flagRAMPScriptsLoaded",l.tB(v));};cO.getSESSIONIDENTIFIER=function(){return l.tS(this.get("SessionIdentifier"));};cO.setSESSIONIDENTIFIER=function(v){this.set("SessionIdentifier",l.tS(v));};cO.mthHANDLEEXTERNALREQUEST=function(P0,P1,P2,P3,P4){this.invoke("HandleExternalRequest",[l.tS(P0),l.tS(P1),l.tS(P2),l.tS(P3),l.tS(P4)]);
};cO.mthUNLOAD=function(){this.invoke("unLoad");};cO.mthLOAD=function(P0,P1,P2,P3,P4,P5){this.invoke("Load",[l.tS(P0),l.tS(P1),l.tS(P2),l.tS(P3),l.tS(P4),l.tB(P5)]);};cO.mthCLOSESESSION=function(){this.invoke("CloseSession");};},{rp:["PRIM_WDGT.Control"]});