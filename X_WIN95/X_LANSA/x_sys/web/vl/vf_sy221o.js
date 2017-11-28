LANSA.addComponent({id:"VF_SY221O",ot:"ww",tp:"Widget",de:"\OC=VLF-ONE / RAMP-TS2 shared session",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireframeLoaded=function(psessionGUID){var eP=l.ePs();eP.aS("SESSIONGUID",psessionGUID);l.fE(this,"FRAMELOADED",eP);};wP.fireSignalEvent=function(pEventId,pS1,pS2,pS3,pS4,pSessionGUID){var eP=l.ePs();eP.aS("EVENTID",pEventId);eP.aS("S1",pS1);eP.aS("S2",pS2);eP.aS("S3",pS3);eP.aS("S4",pS4);eP.aS("SESSIONGUID",pSessionGUID);l.fE(this,"SIGNALEVENT",eP);
};wP.fireframeLoadFailed=function(psessionGUID){var eP=l.ePs();eP.aS("SESSIONGUID",psessionGUID);l.fE(this,"FRAMELOADFAILED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
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
this.parentDiv = parentDiv;
this.parentDiv.style.visibility = "hidden";
this.parentDiv.style.display = "none";
return;
}
PROTOTYPE.loadSharedSession = function( strFromURL, strRAMPScriptFile, sessionGUID )
{
var pThis = this;
var loc   = window.location;
var newsession = { pThis: pThis, frameLoaded:false, shareddataLoaded:false, iFrame:null, sessionGUID: sessionGUID };
window.VLFONE.SharedSessionScripts[sessionGUID] = newsession;
if (this.parentDiv == null) return;
strFromURL += '&SESSIONGUID=' + sessionGUID;
strFromURL += '&WEBPROTOCOL=' + loc.protocol + '//';
strFromURL += '&WEBHOST=' + loc.hostname;
if (loc.port != '') strFromURL += '&WEBPORT=' + loc.port;
strFromURL += '&RAMPSRC=' + loc.protocol + '//' + loc.hostname;
if (loc.port != "") strFromURL += ':' + loc.port;
strFromURL += loc.pathname.substring(0,loc.pathname.lastIndexOf("/")) + "/" + strRAMPScriptFile;
newsession.iFrame = document.createElement("IFRAME");
newsession.iFrame.style.height = "0px";
newsession.iFrame.style.width  = "0px";
this.parentDiv.appendChild(newsession.iFrame);
newsession.iFrame.onload = function ()
{
try
{
newsession.frameLoaded = true;
window.VLFONE.SendMESSAGE(newsession.sessionGUID,"INITIALIZE");
pThis.fireframeLoaded( newsession.sessionGUID );
}
catch (oE)
{
window.alert("A VF_SY221O RAMP shared session load failure was detected in situation A. The error encountered was - " + oE + " in session " + newsession.sessionGUID);
}
};
newsession.iFrame.onerror = function ()
{
try
{
window.alert("A VF_SY221O RAMP shared session load failure was detected in situation B in session " + newsession.sessionGUID);
newsession.frameLoaded = false;
pThis.fireframeLoadFailed( newsession.sessionGUID );
window.VLFONE.SendMESSAGE(newsession.sessionGUID,"ERROR");
}
catch (oE) { }
};
/* Start the aysnchronous load */
newsession.iFrame.src = strFromURL;
return;
}
PROTOTYPE.unLoadAllSessions = function ()
{
if (this.parentDiv == null) return;
if (window.VLFONE != null)
{
try
{
for (var sessionGUID in VLFONE.SharedSessionScripts)
{
var session = window.VLFONE.SharedSessionScripts[sessionGUID];
this.parentDiv.removeChild(session.iFrame);
session.iFrame = null;
}
this.parentDiv = null;
} catch (e) { }
}
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_SY221O",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthUNLOADALLSESSIONS=function(){this.invoke("unLoadAllSessions");};cO.mthLOADSHAREDSESSION=function(P0,P1,P2){this.invoke("loadSharedSession",[l.tS(P0),l.tS(P1),l.tS(P2)]);};},{rp:["PRIM_WDGT.Control"]});