﻿LANSA.addComponent({id:"DF_T43H1O",ot:"rp",tp:"Reusable Part",de:"\OC=How to handle errors",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:"",de:"Department",dv:"",ia:["FE"]},F2:{nm:"XDEPTDESC",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"Department"}[cL],
h2:{"ENG":"Description","FRA":"Département","JPN":"Description"}[cL],h3:" ",de:{"ENG":"Department Description","FRA":"Département","JPN":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{},CauseErrorHandled:{},CauseErrorUnHandled:{}},co:function(){cO.aN.call(this);this.aF("DF_T43H1O",Fd);var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C1=this.cR("BUTTON_ERROR","PRIM_PHBN");var C2=this.cR("LABEL1","PRIM_LABL");var C3=this.cR("BUTTONUNHANDLEDERROR","PRIM_PHBN");C0.setCaption("See component DF_T43H1O for more details");C0.setDisplayPosition(1);C0.setHeight(41);C0.setLeft(24);C0.setParent(this);
C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(8);C0.setWidth(473);C0.setVerticalAlignment("CENTER");C0.iC();C1.setCaption("Call a routine that generates an error (handled)");C1.setDisplayPosition(2);C1.setLeft(24);C1.setParent(this);C1.setTabPosition(2);C1.setTop(128);C1.setWidth(313);C1.iC();C2.setCaption("This component shows how an error can be handled, if required");C2.setDisplayPosition(3);C2.setEllipses("WORD");C2.setHeight(57);C2.setLeft(24);C2.setParent(this);C2.setTabPosition(3);C2.setTabStop(false);
C2.setTop(56);C2.setVerticalAlignment("CENTER");C2.setWidth(313);C2.iC();C3.setCaption("Call a routine that generates an error (unhandled)");C3.setDisplayPosition(4);C3.setLeft(24);C3.setParent(this);C3.setTabPosition(4);C3.setTop(160);C3.setWidth(313);C3.iC();C1.aH("CLICK",this,e1);C3.aH("CLICK",this,e4);this.setHeight(249);this.setWidth(353);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",41);r.ln=41;{}r.ln=43;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",47);
r.ln=47;{r.ln=50;cA.mthUTERMINATE.call(this);}r.ln=52;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Button_Error.Click",57);r.ln=57;{r.ln=58;this.mthCAUSEERRORHANDLED();}r.ln=59;r.e();};cO.mthCAUSEERRORHANDLED=function(){var f=this.FLD.DF_T43H1O,r=l.mR(this,cO,"CauseErrorHandled",62);var C0=r.cDR("FIND","DF_T43DSO","FIND");var C1=r.cR("CRLF","PRIM_DC","UnicodeString");var C2=r.cR("UMESSAGE","PRIM_DC","UnicodeString");C0.iC();C1.iC();C2.iC();C0.aH("COMPLETED",this,e2);C0.aH("FAILED",this,e3);
r.ln=62;{r.ln=68;C1.set(l.cat(l.n.AsUnicodeString(13),l.n.AsUnicodeString(10)));r.ln=72;C0.mthEXECUTEASYNC({FLD:{"XDEPTMENT":f.F1.get()}},{FLD:{"XDEPTMENT":f.F1,"XDEPTDESC":f.F2,"IO$STS":f.F3}});}r.ln=95;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",75);r.ln=75;{r.ln=76;l.WEB().mthALERT("Report that mthroutine Find has succeeded");}r.ln=77;r.e();}function e3(sender,Ps){var r=l.eR(this,cO,"#Find.Failed",81);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=81;{r.ln=84;l.WEB().mthALERT(l.cat(l.add(l.cat(l.add(l.cat(l.add(l.cat("Report that mthroutine Find has failed with Reason:",P1.get()),C1.get()),"Note how the user can keep working, even though a crash has occurred."),C1.get()),"The server session is now dead, so any interactions with server modules will fail, but the user can continue to work on the client."),C1.get()),"Normally, if this kind of error is trapped, the application would be coded to advise the user and then shut down in a controlled manner."));
r.ln=87;P0.set(true);}r.ln=93;r.e();}};function e4(sender,Ps){var r=l.eR(this,cO,"#ButtonUnHandledError.Click",98);r.ln=98;{r.ln=99;this.mthCAUSEERRORUNHANDLED();}r.ln=100;r.e();};cO.mthCAUSEERRORUNHANDLED=function(){var f=this.FLD.DF_T43H1O,r=l.mR(this,cO,"CauseErrorUnHandled",103);var C0=r.cDR("FIND","DF_T43DSO","FIND");var C1=r.cR("CRLF","PRIM_DC","UnicodeString");var C2=r.cR("UMESSAGE","PRIM_DC","UnicodeString");C0.iC();C1.iC();C2.iC();C0.aH("COMPLETED",this,e5);r.ln=103;{r.ln=109;C1.set(l.cat(l.n.AsUnicodeString(13),l.n.AsUnicodeString(10)));
r.ln=113;C0.mthEXECUTEASYNC({FLD:{"XDEPTMENT":f.F1.get()}},{FLD:{"XDEPTMENT":f.F1,"XDEPTDESC":f.F2,"IO$STS":f.F3}});}r.ln=122;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",116);r.ln=116;{r.ln=117;l.WEB().mthALERT("Report that mthroutine Find has succeeded");}r.ln=118;r.e();}};},{rc:["VF_AC010O"],rp:["PRIM_LABL","PRIM_PHBN","PRIM_WEB.DataRequest"],dp:["PRIM_DC.UnicodeString"]});