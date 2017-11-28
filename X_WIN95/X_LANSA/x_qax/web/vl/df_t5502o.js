﻿LANSA.addComponent({id:"DF_T5502O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Example DashBoard Part 2",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_T60TIM",ft:"DT",ln:24,dc:0,lb:{"ENG":"Date / time","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Date / time","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"-----------","FRA":"?","JPN":"?"}[cL],h3:"",de:{"ENG":"Message TimeStamp","FRA":"?","JPN":"?"}[cL],dv:l.n.AsDateTime(l.eSV("*DATETIME"),"CCYYMMDDHHMMSS"),
ia:["FE","ISO","SUTC"]},F2:{nm:"DATETIMEX",ft:"DT",ln:26,dc:0,lb:{"ENG":"Date / time","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Date / time","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"-----------","FRA":"?","JPN":"?"}[cL],h3:" ",de:{"ENG":"Current date and time (RDMLX)","FRA":"?","JPN":"?"}[cL],dv:l.n.AsDateTime(l.eSV("*DATETIME"),"CCYYMMDDHHMMSS"),ia:["ASQN","FE","ISO","SUTC"]},F3:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],
h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F4:{nm:"VF_ELUTXL",ft:"N",ln:255,dc:0,lb:"Standard Long U",h1:"Standard",h2:"Long",h3:"Unicode",de:"Standard Long Unicode Text",dv:"",ia:["FE","LC"]},F5:{nm:"DF_T60SEN",ft:"N",ln:32,dc:0,lb:"Message Sender",h1:"Message",h2:"Sender",h3:"",de:"Message Sender",dv:"",ia:["FE","LC"]},F6:{nm:"DF_T60TEX",ft:"NV",ln:512,dc:0,lb:"MessageText",
h1:"MessageText",h2:"",h3:"",de:"MessageText",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,rm:["dt"],mt:{uInitialize:{ps:{"UseavFrameworkManager":{pt:"i"}}},MakeDisplayTime:{ps:{"UTCTime":{pt:"i"}}},uTerminate:{},StopEnsureVisibleLogic:{},AddMessage:{ps:{"Sender":{pt:"i"},"WithTime":{pt:"i"},"Text":{pt:"i"},"SendtoServer":{pt:"i"},"TextStyle":{pt:"i"},"SendtoVisibleMessages":{pt:"i"}}},PollServer:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_T5502O",Fd);var C0=this.cA("UFRAMEWORK","VF_FP001O");
var C1=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");var C3=this.cR("ATTACHITEM2","PRIM_ATLI");var C4=this.cR("ATTACHITEM3","PRIM_ATLI");var C5=this.cR("ATTACHITEM8","PRIM_ATLI");var C6=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C7=this.cR("ATTACHITEM4","PRIM_ATLI");var C8=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C9=this.cR("ATTACHITEM5","PRIM_ATLI");var C10=this.cR("ATTACHLAYOUT4","PRIM_ATLM");var C11=this.cR("ATTACHITEM6","PRIM_ATLI");var C12=this.cR("ATTACHITEM7","PRIM_ATLI");
var C13=this.cR("HEADPANEL","PRIM_PANL");var C14=this.cR("MESSAGEPANEL","PRIM_PANL");var C15=this.cR("RESPONSEPANEL","PRIM_PANL");var C16=this.cR("INSTRUCTIONS","PRIM_LABL");var C17=this.cR("CHAT","PRIM_IMAG");var C18=this.cR("TITLE","PRIM_LABL");var C19=this.cR("RESPONSETEXT","PRIM_EDIT");var C20=this.cR("MESSAGELIST","PRIM_LIST");var C21=this.cR("COLUMNVF_ELUTXL1","PRIM_LIST","String");var C22=this.cR("CLEARBUTTON","PRIM_PHBN");var C23=this.cR("REFRESHBUTTON","PRIM_PHBN");var C24=this.cR("BUTTONPANEL","PRIM_PANL");
var C25=this.cR("WHITEBACKGROUND","PRIM_VS","Style");var C26=this.cR("TITLEFONT","PRIM_VS","Style");var C27=this.cR("INSTRUCTIONFONT","PRIM_VS","Style");var C28=this.cR("ENSUREVISIBLETIMER","PRIM_TIMR");this.cD("ENSUREVISIBLELISTITEM");var C30=this.cR("SYSTEMMESSAGE","PRIM_VS","Style");var C31=this.cR("RESPONSEMESSAGE","PRIM_VS","Style");var C32=this.cR("RECEIVEDMESSAGE","PRIM_VS","Style");this.cD("AVFRAMEWORKMANAGER");var C34=this.cR("MANUALLYPOLLED","PRIM_BOLN");var C35=this.cDR("SENDSERVICE","DF_T60SVO","SEND");
var C36=this.cDR("RECEIVESERVICE","DF_T60SVO","RECEIVE");var C37=this.cF("LASTPOLLTIME",Fd.F1.Dc);var C38=this.cR("POLLTIMER","PRIM_TIMR");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setManage(C13);C2.setParent(C1);C2.setAttachment("TOP");C2.iC();C3.setManage(C14);C3.setParent(C1);C3.setAttachment("CENTER");C3.iC();C4.setManage(C15);C4.setParent(C1);C4.setAttachment("BOTTOM");C4.setMarginLeft(8);C4.setMarginRight(8);C4.setMarginTop(4);C4.setMarginBottom(4);C4.iC();C5.setManage(C16);C5.setParent(C1);
C5.setAttachment("TOP");C5.iC();C6.iC();C7.setManage(C20);C7.setParent(C6);C7.setAttachment("CENTER");C7.setMarginLeft(8);C7.setMarginRight(8);C7.setMarginTop(8);C7.iC();C8.iC();C9.setManage(C19);C9.setParent(C8);C9.setAttachment("CENTER");C9.setMarginBottom(4);C9.setMarginLeft(8);C9.setMarginRight(8);C9.setMarginTop(4);C9.iC();C10.iC();C11.setManage(C24);C11.setParent(C10);C11.setAttachment("BOTTOM");C11.iC();C12.setManage(C19);C12.setParent(C10);C12.setAttachment("CENTER");C12.iC();C13.setParent(this);
C13.setDisplayPosition(1);C13.setTabPosition(1);C13.setLeft(0);C13.setTop(0);C13.setWidth(433);C13.iC();C14.setParent(this);C14.setDisplayPosition(3);C14.setTabPosition(3);C14.setHeight(89);C14.setLeft(0);C14.setTop(113);C14.setWidth(433);C14.setLayoutManager(C6);C14.iC();C15.setParent(this);C15.setDisplayPosition(2);C15.setTabPosition(2);C15.setTop(206);C15.setWidth(417);C15.setHeight(60);C15.setLayoutManager(C10);C15.setLeft(8);C15.iC();C16.setParent(this);C16.setDisplayPosition(4);C16.setTabPosition(4);
C16.setTabStop(false);C16.setCaption("Start another web browser session using the same back end web server as this session uses to send and receive messages and alerts in real time. Use different users for each session. Automatic checks for new messages or alerts are made every 20 seconds or when refresh is used.");C16.setLeft(0);C16.setTop(50);C16.setWidth(433);C16.setHeight(63);C16.setVerticalAlignment("CENTER");C16.setStyle(C27);C16.setMarginLeft(8);C16.setMarginRight(8);C16.iC();C17.setParent(C13);
C17.setDisplayPosition(2);C17.setTabPosition(2);C17.setHeight(32);C17.setWidth(32);C17.setTop(11);C17.setLeft(11);C17.iC();C18.setParent(C13);C18.setDisplayPosition(1);C18.setTabPosition(1);C18.setTabStop(false);C18.setLeft(55);C18.setWidth(355);C18.setHeight(32);C18.setVerticalAlignment("CENTER");C18.setStyle(C26);C18.setCaption("Internal Alert System");C18.setTop(11);C18.iC();C19.setDisplayPosition(1);C19.setLeft(0);C19.setParent(C15);C19.setShowSelection(false);C19.setShowSelectionHilight(false);
C19.setTabPosition(1);C19.setTop(0);C19.setWidth(417);C19.setHeight(26);C19.setPlaceholder("Type an alert or message here and press enter");C19.setMaxLength(200);C19.iC();C20.setDisplayPosition(1);C20.setLeft(8);C20.setParent(C14);C20.setTabPosition(1);C20.setTop(8);C20.setWidth(417);C20.setColumnHeaderHeight(0);C20.setColumnLines(false);C20.setRowLines(false);C20.setStyle(C25);C20.setHeight(81);C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.setSource(f.F4);C21.setAutoSelect(false);C21.setColumnUnits("PROPORTION");
C21.setColumnWidth(100);C21.iC();C22.setParent(C24);C22.setCaption("Clear");C22.setDisplayPosition(2);C22.setTabPosition(2);C22.setTop(6);C22.setLeft(0);C22.iC();C23.setParent(C24);C23.setCaption("Refresh");C23.setDisplayPosition(1);C23.setTabPosition(1);C23.setTop(6);C23.setLeft(85);C23.iC();C24.setParent(C15);C24.setDisplayPosition(2);C24.setTabPosition(2);C24.setLeft(0);C24.setWidth(417);C24.setHeight(34);C24.setTop(26);C24.iC();C25.setNormBackColor("WHITE");C25.iC();C26.setFontSize(18);C26.setBold(true);
C26.setTextColor("18:69:114");C26.iC();C27.setFontSize(8);C27.iC();C28.setInterval(0);C28.iC();C30.setNormBackColor("WHITE");C30.setTextColor("255:128:64");C30.iC();C31.setNormBackColor("WHITE");C31.setTextColor("18:69:114");C31.iC();C32.setNormBackColor("WHITE");C32.setTextColor("BLACK");C32.setItalic(true);C32.iC();C34.iC();C35.iC();C36.iC();C37.aD();C37.iC();C38.setInterval(0);C38.iC();C19.aH("ENTER",this,e7);C22.aH("CLICK",this,e6);C23.aH("CLICK",this,e5);C28.aH("TICK",this,e1);C36.aH("COMPLETED",this,e3);
C36.aH("FAILED",this,e4);C38.aH("TICK",this,e2);this.setHeight(270);this.setLeft(0);this.setTop(0);this.setWidth(433);this.setDisplayPosition(1);this.setTabPosition(1);this.setVerticalScroll(true);this.setLayoutManager(C1);var li=this.aL("DF_T5502O");li.RESULT_MESSAGE_LIST=l.cLT({"DF_T60TIM":f.F1,"DF_T60SEN":f.F5,"DF_T60TEX":f.F6},null);}});cO.mthUINITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"uInitialize",100);var P0=r.cPD("USEAVFRAMEWORKMANAGER");P0=p0;var C0=r.cF("CURRENTTIME",Fd.F2.Dc);
C0.iC();r.ln=100;{r.ln=105;m.LASTPOLLTIME.set(l.dt.Now(m.LASTPOLLTIME.get()));r.ln=107;this.srAVFRAMEWORKMANAGER(P0);r.ln=109;m.CHAT.setImage(m.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("CONNECT_OUTLINE.PNG","T","LARGE",false));r.ln=111;C0.set(l.dt.Now(C0.get()));r.ln=112;this.mthADDMESSAGE(m.UFRAMEWORK.ref.getUCAPTION(),C0.get(),l.add("Welcome ",m.AVFRAMEWORKMANAGER.getAVVISIBLEUSER()),false,m.SYSTEMMESSAGE,false);r.ln=114;this.mthADDMESSAGE(m.AVFRAMEWORKMANAGER.getAVLOGGEDONUSER(),C0.get(),l.cat("Started session at ",cO.mthMAKEDISPLAYTIME.call(this,C0.get())),true,m.SYSTEMMESSAGE,false);
r.ln=116;m.POLLTIMER.setInterval(20000);}r.ln=118;r.e();};cO.mthMAKEDISPLAYTIME=function(p0){var r=l.mR(this,cO,"MakeDisplayTime",121);var P0=r.cPF("UTCTIME",Fd.F2.Dc);var P1=r.cP("RESULT","PRIM_ALPH");P0.set(p0);r.ln=121;{r.ln=125;P0.set(l.dt.AsLocalizedDateTime(P0.get()));r.ln=127;P1.set(l.cat(l.cat(l.d.AsDisplayString(l.dt.Date(P0.get()),"CCYYSMMSDD")," "),l.t.AsDisplayString(l.dt.Time(P0.get()),"HHSMMSSS")));}r.ln=129;return r.rV(P1.get());};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",132);
r.ln=132;{r.ln=134;this.mthSTOPENSUREVISIBLELOGIC();r.ln=136;m.POLLTIMER.setInterval(0);r.ln=138;this.srAVFRAMEWORKMANAGER(null);}r.ln=140;r.e();};cO.mthSTOPENSUREVISIBLELOGIC=function(){var m=this.REF,r=l.mR(this,cO,"StopEnsureVisibleLogic",143);r.ln=143;{r.ln=145;this.srENSUREVISIBLELISTITEM(null);r.ln=146;m.ENSUREVISIBLETIMER.setInterval(0);}r.ln=148;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EnsureVisibleTimer.Tick",152);r.ln=152;{r.ln=155;if(l.and(this.getVisible(),(m.ENSUREVISIBLELISTITEM!=null)))
{r.ln=156;m.MESSAGELIST.mthVERTICALSCROLLTO(m.ENSUREVISIBLELISTITEM,"BOTTOM");}r.ln=159;this.mthSTOPENSUREVISIBLELOGIC();}r.ln=161;r.e();};cO.mthADDMESSAGE=function(p0,p1,p2,p3,p4,p5){var f=this.FLD.DF_T5502O,m=this.REF,r=l.mR(this,cO,"AddMessage",164);var P0=r.cP("SENDER","PRIM_ALPH");var P1=r.cPF("WITHTIME",Fd.F2.Dc);var P2=r.cP("TEXT","PRIM_DC","UnicodeString");var P3=r.cP("SENDTOSERVER","PRIM_BOLN");var P4=r.cPD("TEXTSTYLE");var P5=r.cP("SENDTOVISIBLEMESSAGES","PRIM_BOLN");P0.set(p0);P1.set(p1);
P2.set(p2);P3.set(p3);P4=p4;P5.set(p5);r.ln=164;{r.ln=172;if(l.n.gt(m.MESSAGELIST.getItems().getItemCount(),250)){r.ln=173;m.MESSAGELIST.clearList();}r.ln=176;f.F4.set(l.add(l.cat(l.cat(l.cat(cO.mthMAKEDISPLAYTIME.call(this,P1.get())," - "),P0.get())," : "),P2.get()));r.ln=177;m.MESSAGELIST.addEntry();r.ln=178;m.MESSAGELIST.getCurrentItem().setStyle(P4);r.ln=180;if((m.ENSUREVISIBLELISTITEM==null)){r.ln=181;this.srENSUREVISIBLELISTITEM(m.MESSAGELIST.getCurrentItem());r.ln=182;m.ENSUREVISIBLETIMER.setInterval(10);
}r.ln=185;if(l.tB(P3.get())){r.ln=186;m.SENDSERVICE.mthEXECUTEASYNC({FLD:{"SENDER":P0.get(),"TEXT":P2.get()}},{});}r.ln=189;if(l.tB(P5.get())){r.ln=190;m.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(P2.get(),u,u,this,u,true,u);}}r.ln=193;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PollTimer.Tick",196);r.ln=196;{r.ln=198;m.POLLTIMER.setInterval(0);r.ln=200;this.mthPOLLSERVER();r.ln=202;m.POLLTIMER.setInterval(20000);}r.ln=204;r.e();};cO.mthPOLLSERVER=function(){var li=this.LIST.DF_T5502O,m=this.REF,r=l.mR(this,cO,"PollServer",207);
var C0=r.cF("SAVELASTPOLLTIME",Fd.F1.Dc);C0.iC();r.ln=207;{r.ln=211;if(m.REFRESHBUTTON.getEnabled()){r.ln=213;this.srENSUREVISIBLELISTITEM(null);r.ln=215;m.ENSUREVISIBLETIMER.setInterval(0);r.ln=217;m.REFRESHBUTTON.setEnabled(false);r.ln=219;C0.set(m.LASTPOLLTIME.get());r.ln=221;m.LASTPOLLTIME.set(l.dt.Now(m.LASTPOLLTIME.get()));r.ln=223;li.RESULT_MESSAGE_LIST.clearList();r.ln=225;m.RECEIVESERVICE.mthEXECUTEASYNC({FLD:{"AFTERTIME":C0.get(),"SENDER":m.AVFRAMEWORKMANAGER.getAVLOGGEDONUSER()}},{LIST:{"RESULT_MESSAGE_LIST":li.RESULT_MESSAGE_LIST}});
}}r.ln=229;r.e();};function e3(sender,Ps){var li=this.LIST.DF_T5502O,f=this.FLD.DF_T5502O,m=this.REF,r=l.eR(this,cO,"#ReceiveService.Completed",232);var C0=r.cF("MESSAGECOUNT",Fd.F3.Dc);var C1=r.cF("CURRENTTIME",Fd.F2.Dc);C0.iC();C1.iC();r.ln=232;{r.ln=237;{var l1=li.RESULT_MESSAGE_LIST.selectList();while(l1.step()){r.ln=239;this.mthADDMESSAGE(f.F5.get(),f.F1.get(),f.F6.get(),false,m.RECEIVEDMESSAGE,l.b.Not(m.MANUALLYPOLLED.get()));r.ln=241;C0.set(l.add(C0.get(),1));r.ln=243;}l1.end();}r.ln=245;li.RESULT_MESSAGE_LIST.clearList();
r.ln=248;if(l.tB(m.MANUALLYPOLLED.get())){r.ln=250;C1.set(l.dt.Now(C1.get()));r.ln=252;this.mthADDMESSAGE(m.UFRAMEWORK.ref.getUCAPTION(),C1.get(),l.cat(l.n.AsString(C0.get())," new alerts or messages found."),false,m.SYSTEMMESSAGE,false);r.ln=254;m.MANUALLYPOLLED.set(false);}r.ln=258;m.REFRESHBUTTON.setEnabled(true);}r.ln=261;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ReceiveService.Failed",264);var C0=r.cF("CURRENTTIME",Fd.F2.Dc);C0.iC();r.ln=264;{r.ln=268;C0.set(l.dt.Now(C0.get()));
r.ln=270;this.mthADDMESSAGE(m.UFRAMEWORK.ref.getUCAPTION(),C0.get(),"Attempt to get messages from server failed.",false,m.SYSTEMMESSAGE,l.b.Not(m.MANUALLYPOLLED.get()));r.ln=272;m.REFRESHBUTTON.setEnabled(true);r.ln=274;m.MANUALLYPOLLED.set(false);}r.ln=276;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RefreshButton.Click",279);r.ln=279;{r.ln=281;m.MANUALLYPOLLED.set(true);r.ln=283;this.mthPOLLSERVER();}r.ln=285;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ClearButton.Click",288);
r.ln=288;{r.ln=290;this.mthSTOPENSUREVISIBLELOGIC();r.ln=292;m.MESSAGELIST.clearList();}r.ln=294;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ResponseText.Enter",297);var C0=r.cF("CURRENTTIME",Fd.F2.Dc);C0.iC();r.ln=297;{r.ln=301;this.mthSTOPENSUREVISIBLELOGIC();r.ln=303;if(l.s.ne(l.s.Trim(m.RESPONSETEXT.getValue()),"")){r.ln=305;C0.set(l.dt.Now(C0.get()));r.ln=307;this.mthADDMESSAGE(m.AVFRAMEWORKMANAGER.getAVLOGGEDONUSER(),C0.get(),m.RESPONSETEXT.get(),true,m.RESPONSEMESSAGE,false);
r.ln=309;m.RESPONSETEXT.set("");}}r.ln=313;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"DF_T60TIM"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"DATETIMEX"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srENSUREVISIBLELISTITEM=function(rn){this.sR("ENSUREVISIBLELISTITEM",rn);};cO.srAVFRAMEWORKMANAGER=function(rn){this.sR("AVFRAMEWORKMANAGER",rn);};},{rc:["VF_FP001O"],
rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_IMAG","PRIM_EDIT","PRIM_LIST","PRIM_LIST.String","PRIM_PHBN","PRIM_VS.Style","PRIM_TIMR","PRIM_BOLN","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_DTIM"],dc:["VF_SY100O"],dp:["PRIM_LIST.ListItem"]});