﻿LANSA.addComponent({id:"DF_T62H1O",ot:"rp",tp:"Reusable Part",de:"\OC=Persistent application string",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELURLU",ft:"N",ln:256,dc:0,lb:"URL (Unicode)",h1:"URL",h2:"(Unicode)",h3:"",de:"URL (Unicode)",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T62H1O",Fd);
var C0=this.cR("ATTACHITEMABOUT","PRIM_ATLI");var C1=this.cR("ATTACHITEMAS1","PRIM_ATLI");var C2=this.cR("ATTACHITEMAS2","PRIM_ATLI");var C3=this.cR("ATTACHITEMAS3","PRIM_ATLI");var C4=this.cR("ATTACHITEMAS4","PRIM_ATLI");var C5=this.cR("ATTACHITEMAS5","PRIM_ATLI");var C6=this.cR("ATTACHITEMYS1","PRIM_ATLI");var C7=this.cR("ATTACHITEMYS2","PRIM_ATLI");var C8=this.cR("ATTACHITEMBUTTONPANEL","PRIM_ATLI");var C9=this.cR("ABOUT","PRIM_LABL");var C10=this.cF("APPLICATIONSTRING1",Fd.F1.VISUALEDIT);var C11=this.cF("APPLICATIONSTRING2",Fd.F1.VISUALEDIT);
var C12=this.cF("APPLICATIONSTRING3",Fd.F1.VISUALEDIT);var C13=this.cF("APPLICATIONSTRING4",Fd.F1.VISUALEDIT);var C14=this.cF("APPLICATIONSTRING5",Fd.F1.VISUALEDIT);var C15=this.cF("MYADDITIONALSTRING1",Fd.F1.VISUALEDIT);var C16=this.cF("MYADDITIONALSTRING2",Fd.F1.VISUALEDIT);var C17=this.cR("BUTTON_PANEL","PRIM_PANL");var C18=this.cR("SET_BUTTON","PRIM_PHBN");var C19=this.cR("GET_BUTTON","PRIM_PHBN");var C20=this.cR("ATTACHBUTTONPANEL","PRIM_ATLM");var C21=this.cR("ATTACHGETBUTTON","PRIM_ATLI");
var C22=this.cR("ATTACHPUTBUTTON","PRIM_ATLI");C0.setManage(C9);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setMarginBottom(4);C0.setMarginLeft(4);C0.setMarginTop(4);C0.setMarginRight(4);C0.iC();C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("TOP");C1.setMarginBottom(4);C1.setMarginLeft(4);C1.setMarginTop(4);C1.setMarginRight(4);C1.setManage(C10);C1.iC();C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("TOP");C2.setMarginBottom(4);
C2.setMarginLeft(4);C2.setMarginTop(4);C2.setMarginRight(4);C2.setManage(C11);C2.iC();C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("TOP");C3.setMarginBottom(4);C3.setMarginLeft(4);C3.setMarginTop(4);C3.setMarginRight(4);C3.setManage(C12);C3.iC();C4.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C4.setAttachment("TOP");C4.setMarginBottom(4);C4.setMarginLeft(4);C4.setMarginTop(4);C4.setMarginRight(4);C4.setManage(C13);C4.iC();C5.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C5.setAttachment("TOP");
C5.setMarginBottom(4);C5.setMarginLeft(4);C5.setMarginTop(4);C5.setMarginRight(4);C5.setManage(C14);C5.iC();C6.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C6.setAttachment("TOP");C6.setMarginBottom(4);C6.setMarginLeft(4);C6.setMarginTop(4);C6.setMarginRight(4);C6.setManage(C15);C6.iC();C7.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C7.setAttachment("TOP");C7.setMarginBottom(4);C7.setMarginLeft(4);C7.setMarginTop(4);C7.setMarginRight(4);C7.setManage(C16);C7.iC();C8.setParent(this.REF.MAINPANELATTACHMENTMANAGER);
C8.setAttachment("BOTTOM");C8.setMarginBottom(4);C8.setMarginLeft(4);C8.setMarginTop(4);C8.setMarginRight(4);C8.setManage(C17);C8.iC();C9.setParent(this);C9.setDisplayPosition(1);C9.setTabPosition(9);C9.setTabStop(false);C9.setLeft(4);C9.setTop(4);C9.setWidth(801);C9.setHeight(301);C9.iC();C10.setDisplayPosition(2);C10.setHeight(19);C10.setParent(this);C10.setTabPosition(1);C10.setWidth(801);C10.setLeft(4);C10.setTop(313);C10.setCaption("Persistent Application String 1");C10.setLabelType("CAPTION");
C10.setMarginLeft(200);C10.aD();C10.iC();C11.setDisplayPosition(3);C11.setHeight(19);C11.setParent(this);C11.setTabPosition(2);C11.setWidth(801);C11.setLeft(4);C11.setTop(340);C11.setCaption("Persistent Application String 2");C11.setLabelType("CAPTION");C11.setMarginLeft(200);C11.aD();C11.iC();C12.setDisplayPosition(4);C12.setHeight(19);C12.setParent(this);C12.setTabPosition(3);C12.setWidth(801);C12.setLeft(4);C12.setTop(367);C12.setCaption("Persistent Application String 3");C12.setLabelType("CAPTION");
C12.setMarginLeft(200);C12.aD();C12.iC();C13.setDisplayPosition(5);C13.setHeight(19);C13.setParent(this);C13.setTabPosition(4);C13.setWidth(801);C13.setLeft(4);C13.setTop(394);C13.setCaption("Persistent Application String 4");C13.setLabelType("CAPTION");C13.setMarginLeft(200);C13.aD();C13.iC();C14.setDisplayPosition(6);C14.setHeight(19);C14.setParent(this);C14.setTabPosition(5);C14.setWidth(801);C14.setLeft(4);C14.setTop(421);C14.setCaption("Persistent Application String 5");C14.setLabelType("CAPTION");
C14.setMarginLeft(200);C14.aD();C14.iC();C15.setDisplayPosition(7);C15.setHeight(19);C15.setParent(this);C15.setTabPosition(6);C15.setWidth(801);C15.setLeft(4);C15.setTop(448);C15.setCaption("Your Additional String 1");C15.setLabelType("CAPTION");C15.setMarginLeft(200);C15.aD();C15.iC();C16.setDisplayPosition(8);C16.setHeight(19);C16.setParent(this);C16.setTabPosition(7);C16.setWidth(801);C16.setLeft(4);C16.setTop(475);C16.setCaption("Your Additional String 2");C16.setLabelType("CAPTION");C16.setMarginLeft(200);
C16.aD();C16.iC();C17.setParent(this);C17.setHeight(30);C17.setDisplayPosition(9);C17.setTabPosition(8);C17.setLeft(4);C17.setTop(551);C17.setWidth(801);C17.setLayoutManager(C20);C17.iC();C18.setParent(C17);C18.setCaption("Set (save) Strings on the Server");C18.setDisplayPosition(2);C18.setTabPosition(2);C18.setLeft(552);C18.setTop(4);C18.setWidth(245);C18.setHeight(22);C18.iC();C19.setParent(C17);C19.setCaption("Get Strings from Server");C19.setDisplayPosition(1);C19.setTabPosition(1);C19.setTop(4);
C19.setLeft(339);C19.setWidth(205);C19.setHeight(22);C19.iC();C20.iC();C21.setManage(C19);C21.setParent(C20);C21.setAttachment("RIGHT");C21.setMarginLeft(4);C21.setMarginTop(4);C21.setMarginRight(4);C21.setMarginBottom(4);C21.iC();C22.setManage(C18);C22.setParent(C20);C22.setAttachment("RIGHT");C22.setMarginLeft(4);C22.setMarginTop(4);C22.setMarginRight(4);C22.setMarginBottom(4);C22.iC();C18.aH("CLICK",this,e2);C19.aH("CLICK",this,e1);this.setHeight(585);this.setWidth(809);}});var cA=cO.aN.prototype;
cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",68);var C0=r.cR("DOUBLECR","PRIM_ALPH");C0.iC();r.ln=68;{r.ln=72;C0.set(l.cat(l.n.AsUnicodeString(10),l.n.AsUnicodeString(10)));r.ln=75;cA.mthUINITIALIZE.call(this);r.ln=79;m.ABOUT.set("This is example VL reusable part DF_T62H1O.");r.ln=81;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"DF_T62H1O demonstrates how up to 5 application strings can be set at logon time, and then made accessible to other server modules running in the same session. For example, the logon validator might put the logged on user name into #Persistent_ApplicationString1. This makes that value accessible to all other server modules running within that session.  Similarly, server modules can alter the values as a means of passing basic information amongst themselves.")));
r.ln=83;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"In the shipped demonstration system, the logon validator used is UF_OLOGON. UF_OLOGON initializes the 5 persistent applications strings to say ‘Example string 1’ through ‘Example string 5’. So the first time you run this example that is typically what you should see when you first retrieve them. If you alter the values and save them then you should be able to see your changes if you rerun this command handler sometime later in this session.")));
r.ln=85;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"You can of course persist and share other things between your server modules. In this example two additional strings are also persisted to demonstrate doing this. Beware of persisting too many things on the server. It may be simpler to persist things in the client and then pass them to your server modules as parameters. See the advanced Custom Manager examples for more information about how you can persist and share values in the client.")));
r.ln=87;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"Refer to the code and comments in this command handler DF_T62H1O, and in the server module DF_T62SMO that it invokes.")));}r.ln=90;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",95);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=95;{r.ln=97;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat("Use the ",m.GET_BUTTON.getCaption())," button to retreive the current values persisted on the server."),u,u,this,u,u,u);
r.ln=99;P0.set(true);p0.set(P0.get());}r.ln=101;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Get_Button.Click",106);var C0=r.cDR("GETCURRENTVALUES","DF_T62SMO","GETCURRENTVALUES");C0.iC();r.ln=106;{r.ln=110;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=112;C0.mthEXECUTE({},{FLD:{"APPLICATIONSTRING1":m.APPLICATIONSTRING1,"APPLICATIONSTRING2":m.APPLICATIONSTRING2,"APPLICATIONSTRING3":m.APPLICATIONSTRING3,"APPLICATIONSTRING4":m.APPLICATIONSTRING4,"APPLICATIONSTRING5":m.APPLICATIONSTRING5,"MYSTRING1":m.MYADDITIONALSTRING1,"MYSTRING2":m.MYADDITIONALSTRING2}});
r.ln=114;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);}r.ln=116;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Set_Button.Click",121);var C0=r.cDR("SETCURRENTVALUES","DF_T62SMO","SETCURRENTVALUES");C0.iC();r.ln=121;{r.ln=125;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=127;C0.mthEXECUTE({FLD:{"APPLICATIONSTRING1":m.APPLICATIONSTRING1.get(),"APPLICATIONSTRING2":m.APPLICATIONSTRING2.get(),"APPLICATIONSTRING3":m.APPLICATIONSTRING3.get(),"APPLICATIONSTRING4":m.APPLICATIONSTRING4.get(),"APPLICATIONSTRING5":m.APPLICATIONSTRING5.get(),"MYSTRING1":m.MYADDITIONALSTRING1.get(),"MYSTRING2":m.MYADDITIONALSTRING2.get()}},{});
r.ln=129;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);}r.ln=131;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELURLU"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"VF_ELURLU",cn:"VisualEdit"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};
},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_LABL","PRIM_EVEF","PRIM_PANL","PRIM_PHBN","PRIM_ATLM","PRIM_WEB.DataRequest"],dp:["PRIM_ALPH"]});