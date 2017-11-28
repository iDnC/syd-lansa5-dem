﻿LANSA.addComponent({id:"DF_T53H1O",ot:"rp",tp:"Reusable Part",de:"\OC=Business Object 103 Command Handler",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:"",de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",
h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:"",h3:"",de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:"",h3:"",de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:"",h3:"",de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:"",de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"VF_ELRETC",
ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F9:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:"",de:"Home Telephone",dv:"",ia:["FE"]},F10:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:"",de:"Business Telephone",dv:"",ia:["FE"]},F11:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:"",de:"Department",dv:"",ia:["FE"]},F12:{nm:"XSALARY",ft:"P",ln:15,dc:2,
ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:"",de:"Annual Salary",dv:0,ia:["FE","RB"]},F13:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:"",de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F14:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:"",de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{
pt:"i"}}},LoadEmployee:{},SaveEmployee:{},uQueryCanClose:{ps:{"CanBeCancelled":{pt:"i"},"TimeOutinProgress":{pt:"i"}}},CheckForUnsavedChanges:{ps:{"TimeOutinProgress":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T53H1O",Fd);var C0=this.cA("PEOPLE_CONTROLLER2","DF_T53CCO");var C1=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C2=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C3=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C4=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C5=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);
var C6=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C7=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C8=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C9=this.cR("BUTTON_SAVE","PRIM_PHBN");var C10=this.cR("LABEL1","PRIM_LABL");var C11=this.cR("PANELFIELDS","PRIM_ACOL");this.cD("LASTFOCUSCONTROL");var C13=this.cR("ATTACHITEM1","PRIM_ATLI");var C14=this.cR("ATTACHITEM2","PRIM_ATLI");var C15=this.cR("ENTER","PRIM_STPG");this.cD("CURRENTEMPLOYEEDATAITEM");if((C0!=null)&&(C0.iI()==false)){C0.iC();
}C1.setCaption("See component DF_T53H1O for details of this COMMAND HANDLER");C1.setDisplayPosition(1);C1.setHeight(33);C1.setLeft(4);C1.setParent(this);C1.setTabPosition(1);C1.setTabStop(false);C1.setTop(0);C1.setWidth(577);C1.setVerticalAlignment("CENTER");C1.iC();C2.setDisplayPosition(2);C2.setHeight(21);C2.setLeft(23);C2.setParent(this);C2.setTabPosition(2);C2.setTop(122);C2.setWidth(237);C2.setReadOnly(true);C2.aD();C2.iC();C3.setDisplayPosition(4);C3.setLeft(23);C3.setParent(this);C3.setTabPosition(4);
C3.setTop(144);C3.aD();C3.iC();C4.setDisplayPosition(5);C4.setLeft(23);C4.setParent(this);C4.setTabPosition(5);C4.setTop(166);C4.aD();C4.iC();C5.setDisplayPosition(6);C5.setHeight(21);C5.setLeft(23);C5.setParent(this);C5.setTabPosition(6);C5.setTop(188);C5.setWidth(479);C5.aD();C5.iC();C6.setDisplayPosition(7);C6.setHeight(21);C6.setLeft(23);C6.setParent(this);C6.setTabPosition(7);C6.setTop(210);C6.setWidth(479);C6.aD();C6.iC();C7.setDisplayPosition(8);C7.setHeight(21);C7.setLeft(23);C7.setParent(this);
C7.setTabPosition(8);C7.setTop(232);C7.setWidth(479);C7.aD();C7.iC();C8.setDisplayPosition(9);C8.setHeight(21);C8.setLeft(23);C8.setParent(this);C8.setTabPosition(9);C8.setTop(254);C8.setWidth(249);C8.aD();C8.iC();C9.setCaption("Save");C9.setDisplayPosition(3);C9.setLeft(24);C9.setParent(this);C9.setTabPosition(3);C9.setTop(96);C9.setWidth(129);C9.setEnabled(false);C9.iC();C10.setCaption("This example uses both a client controller and a Shared Server System Object (DF_T53SSO). The Server System object is useful if any common processing has to be done at the start and end of calls to server modules. For example setting the library list for the job, or setting the job user profile.");
C10.setDisplayPosition(10);C10.setEllipses("WORD");C10.setHeight(64);C10.setLeft(4);C10.setParent(this);C10.setTabPosition(10);C10.setTabStop(false);C10.setTop(33);C10.setVerticalAlignment("CENTER");C10.setWidth(577);C10.iC();C11.setCollects("PRIM_EVP");C11.iC();C13.setManage(C1);C13.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C13.setAttachment("TOP");C13.setMarginLeft(4);C13.setMarginRight(4);C13.iC();C14.setManage(C10);C14.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C14.setAttachment("TOP");
C14.setMarginLeft(4);C14.setMarginRight(4);C14.setMarginBottom(4);C14.iC();C15.setShortCut("ENTER");C15.setParent(this);C15.iC();C0.aH("CURRENTEMPLOYEECHANGED",this,e2);C9.aH("CLICK",this,e3);C11.aH("CHANGED",this,e1);C15.aH("PRESSED",this,e3);this.setHeight(465);this.setWidth(585);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",69);var C0=r.cD("C0");r.ln=69;{r.ln=73;cA.mthUINITIALIZE.call(this);r.ln=79;{var l1=this.getComponentControls().cI();while(l1.step())
{var CONTROL=r.sR("CONTROL",l1.item());r.ln=80;if(l.Io(CONTROL,"PRIM_EVP")){r.ln=81;C0=r.sR("C0",CONTROL);r.ln=82;m.PANELFIELDS.mthINSERT(C0);}r.ln=84;}l1.end();r.dR("CONTROL");}}r.ln=86;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",90);r.ln=90;{r.ln=92;this.srLASTFOCUSCONTROL(null);r.ln=93;this.srCURRENTEMPLOYEEDATAITEM(null);}r.ln=95;r.e();};cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",99);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");
P0.set(p0.get());P1=p1;r.ln=99;{r.ln=101;if(cO.mthCHECKFORUNSAVEDCHANGES.call(this,false)){r.ln=103;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=105;this.mthLOADEMPLOYEE();}p0.set(P0.get());}r.ln=109;r.e();};cO.mthLOADEMPLOYEE=function(){var f=this.FLD.DF_T53H1O,m=this.REF,r=l.mR(this,cO,"LoadEmployee",113);r.ln=113;{r.ln=117;this.srCURRENTEMPLOYEEDATAITEM(this.REF.AVLISTMANAGER.getCURRENTINSTANCE());r.ln=119;if((m.CURRENTEMPLOYEEDATAITEM!=null)){r.ln=122;m.XEMPLOYEEIDENTIFICATION.set(m.CURRENTEMPLOYEEDATAITEM.getAVAKEY1().get());
r.ln=125;m.PEOPLE_CONTROLLER2.ref.mthLOADASCURRENTEMPLOYEE(m.XEMPLOYEEIDENTIFICATION.get());r.ln=128;m.PEOPLE_CONTROLLER2.ref.mthGETCURRENTEMPLOYEEDETAILS(m.XEMPLOYEEIDENTIFICATION,m.XEMPLOYEESURNAME,m.XEMPLOYEEGIVENNAMES,m.XEMPLOYEESTREET,m.XEMPLOYEECITY,m.XEMPLOYEESTATE,m.XEMPLOYEEPOSTALCODE,f.F9,f.F10,f.F11,f.F12,f.F13,f.F14);r.ln=131;m.BUTTON_SAVE.setEnabled(false);}}r.ln=135;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PanelFields<>.Changed",139);r.ln=139;{r.ln=141;m.PEOPLE_CONTROLLER2.ref.mthUPDATECURRENTEMPLOYEEDETAILS(m.XEMPLOYEEIDENTIFICATION.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESTREET.get(),m.XEMPLOYEECITY.get(),m.XEMPLOYEESTATE.get(),m.XEMPLOYEEPOSTALCODE.get());
}r.ln=143;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#People_Controller2.CurrentEmployeeChanged",147);r.ln=147;{r.ln=149;m.BUTTON_SAVE.setEnabled(true);}r.ln=151;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Save.Click #Enter.Pressed",155);r.ln=155;{r.ln=157;if(m.BUTTON_SAVE.getEnabled()){r.ln=158;this.mthSAVEEMPLOYEE();}}r.ln=160;r.e();};cO.mthSAVEEMPLOYEE=function(){var m=this.REF,r=l.mR(this,cO,"SaveEmployee",163);var C0=r.cF("RETURNCODE",Fd.F8.Dc);C0.iC();
r.ln=163;{r.ln=167;m.PEOPLE_CONTROLLER2.ref.mthSAVECURRENTEMPLOYEE(this,m.CURRENTEMPLOYEEDATAITEM,C0);r.ln=169;m.BUTTON_SAVE.setEnabled(l.s.ne(C0.get(),"OK"));}r.ln=171;r.e();};cO.mthUQUERYCANCLOSE=function(p0,p2){var r=l.mR(this,cO,"uQueryCanClose",177);var P0=r.cP("CANBECANCELLED","PRIM_BOLN");var P1=r.cP("ALLOW","PRIM_BOLN");var P2=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");P0.set(p0);P2.set(p2);r.ln=177;{r.ln=179;P1.set(this.mthCHECKFORUNSAVEDCHANGES(P2.get()));}r.ln=181;return r.rV(P1.get());};cO.mthCHECKFORUNSAVEDCHANGES=function(p0)
{var m=this.REF,r=l.mR(this,cO,"CheckForUnsavedChanges",187);var P0=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");var P1=r.cP("ALLOWTOPROCEED","PRIM_BOLN");P0.set(p0);r.ln=187;{r.ln=193;if(l.and(m.BUTTON_SAVE.getEnabled(),l.b.Not(P0.get()))){r.ln=195;P1.set(l.s.eq(l.WEB().mthCONFIRM(l.cat(l.add(l.cat(l.add("Changed details of ",m.XEMPLOYEEGIVENNAMES.get())," "),m.XEMPLOYEESURNAME.get())," have not been saved. Do you want to save them first?")),"CANCEL"));}else{r.ln=198;P1.set(true);}}r.ln=201;return r.rV(P1.get());
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});
Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}cO.srLASTFOCUSCONTROL=function(rn){this.sR("LASTFOCUSCONTROL",rn);};cO.srCURRENTEMPLOYEEDATAITEM=function(rn){this.sR("CURRENTEMPLOYEEDATAITEM",rn);};cO.srAVFRAMEWORKMANAGER=function(rn)
{cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC010O","DF_T53CCO"],rp:["PRIM_LABL","PRIM_EVEF","PRIM_PHBN","PRIM_ACOL","PRIM_ATLI","PRIM_STPG","PRIM_FLD"],dc:["VF_LM003O"],dp:["PRIM_CTRL","PRIM_EVP"]});