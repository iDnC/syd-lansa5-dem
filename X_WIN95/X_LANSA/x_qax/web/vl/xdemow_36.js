﻿LANSA.addComponent({id:"XDEMOW_36",nm:"xDemoWebMailTo",ot:"wp",tp:"Web Page",de:"Preparing an email",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.51"),c2=l.cDec("1.74");var rc1=l.cB("ximageema.png");var Fd={F1:{nm:"XDEMOUN_3",an:"xDemoUnicode4K",ft:"N",ln:4096,dc:0,lb:"Unicode 4096",h1:"Unicode",h2:"4096",h3:"",de:"Unicode 4096",dv:"",ia:["LC"]},F2:{nm:"XDEMOUN_4",an:"xDemoUnicode256",ft:"N",ln:256,dc:0,lb:"Unicode 256",
h1:"Unicode",h2:"256",h3:"",de:"Unicode 256",dv:l.SqlNull,ia:["LC","ASQN"]},F3:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{MailTo:{},AddParameter:{ps:{"Name":{pt:"i"},"Value":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOW_36",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW","PRIM_TBLO","Row");
var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("COLUMN_2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C12=this.cF("TO",Fd.F1.VISUALEDIT);var C13=this.cF("CC",Fd.F1.VISUALEDIT);
var C14=this.cF("BCC",Fd.F1.VISUALEDIT);var C15=this.cF("SUBJECT",Fd.F2.VISUALEDIT);var C16=this.cR("MESSAGE","PRIM_TEXT");var C17=this.cR("SEND","PRIM_PHBN");var C18=this.cR("MAILTO","PRIM_STR");var C19=this.cR("PARAMETERS","PRIM_STR");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(113);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(118);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(2);
C4.setParent(C0);C4.setWidth(c2);C4.iC();C5.setDisplayPosition(3);C5.setParent(C0);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C4);C6.setFlow("DOWN");C6.setManage(C12);C6.setParent(C0);C6.setRow(C2);C6.setSizing("FITTOWIDTH");C6.setMarginTop(2);C6.setMarginBottom(2);C6.setColumnSpan(2);C6.setMarginLeft(2);C6.setMarginRight(2);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C4);C7.setFlow("DOWN");C7.setManage(C13);C7.setParent(C0);C7.setRow(C2);C7.setSizing("FITTOWIDTH");C7.setMarginTop(2);C7.setMarginBottom(2);
C7.setColumnSpan(2);C7.setMarginLeft(2);C7.setMarginRight(2);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C4);C8.setFlow("DOWN");C8.setManage(C14);C8.setParent(C0);C8.setRow(C2);C8.setSizing("FITTOWIDTH");C8.setMarginTop(2);C8.setMarginBottom(2);C8.setColumnSpan(2);C8.setMarginLeft(2);C8.setMarginRight(2);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C4);C9.setFlow("DOWN");C9.setManage(C15);C9.setParent(C0);C9.setRow(C2);C9.setSizing("FITTOWIDTH");C9.setMarginTop(2);C9.setMarginBottom(2);C9.setColumnSpan(2);
C9.setMarginLeft(2);C9.setMarginRight(2);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C1);C10.setFlow("DOWN");C10.setManage(C16);C10.setParent(C0);C10.setRow(C3);C10.setColumnSpan(3);C10.setMarginLeft(2);C10.setMarginRight(2);C10.setMarginBottom(2);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C1);C11.setFlow("RIGHT");C11.setManage(C17);C11.setParent(C0);C11.setRow(C2);C11.setMarginTop(2);C11.setMarginLeft(2);C11.setMarginRight(2);C11.setMarginBottom(2);C11.iC();C12.setDisplayPosition(1);
C12.setParent(this);C12.setTabPosition(1);C12.setHeight(25);C12.setWidth(1083);C12.setTop(2);C12.setCaption("To");C12.setLabelType("CAPTION");C12.setMarginLeft(60);C12.setLeft(115);C12.aD();C12.iC();C13.setDisplayPosition(2);C13.setParent(this);C13.setTabPosition(2);C13.setTop(31);C13.setHeight(25);C13.setWidth(1083);C13.setCaption("CC");C13.setLabelType("CAPTION");C13.setMarginLeft(60);C13.setLeft(115);C13.aD();C13.iC();C14.setDisplayPosition(3);C14.setParent(this);C14.setTabPosition(3);C14.setTop(60);
C14.setHeight(25);C14.setWidth(1083);C14.setCaption("BCC");C14.setLabelType("CAPTION");C14.setMarginLeft(60);C14.setLeft(115);C14.aD();C14.iC();C15.setDisplayPosition(4);C15.setParent(this);C15.setTabPosition(4);C15.setTop(89);C15.setHeight(25);C15.setWidth(1083);C15.setLabelType("CAPTION");C15.setMarginLeft(60);C15.setCaption("Subject");C15.setLeft(115);C15.aD();C15.iC();C16.setDisplayPosition(5);C16.setLeft(2);C16.setParent(this);C16.setTabPosition(5);C16.setTop(118);C16.setWidth(1196);C16.setHeight(680);
C16.iC();C17.setCaption("Send");C17.setDisplayPosition(6);C17.setLeft(2);C17.setParent(this);C17.setTabPosition(6);C17.setTop(2);C17.setWidth(109);C17.setHeight(114);C17.setImagePosition("ABOVECAPTION");C17.setImage(rc1);C17.iC();C18.iC();C19.iC();C17.aH("CLICK",this,e2);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015BLUE"));this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",26);r.ln=26;{r.ln=28;m.TO.set("Sample@_YourSite_.Com");
r.ln=29;m.CC.set("CC_Sample@_YourSite_.Com");r.ln=30;m.BCC.set("BCC_Sample@_YourSite_.Com");r.ln=31;m.SUBJECT.set("Sample subject");r.ln=32;m.MESSAGE.set("Sample message content.");}r.ln=34;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Send.Click",36);r.ln=36;{r.ln=38;this.mthMAILTO();}r.ln=40;r.e();};cO.mthMAILTO=function(){var m=this.REF,r=l.mR(this,cO,"MailTo",42);r.ln=42;{r.ln=44;m.MAILTO.set(l.s.Substitute("mailto:&1",m.TO.get()));r.ln=46;cO.mthADDPARAMETER.call(this,"CC",m.CC.get());r.ln=47;
cO.mthADDPARAMETER.call(this,"BCC",m.BCC.get());r.ln=48;cO.mthADDPARAMETER.call(this,"SUBJECT",m.SUBJECT.get());r.ln=49;cO.mthADDPARAMETER.call(this,"BODY",m.MESSAGE.get());r.ln=51;l.WEB().mthNAVIGATE(l.add(m.MAILTO.get(),m.PARAMETERS.get()),"CURRENT");}r.ln=53;r.e();};cO.mthADDPARAMETER=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"AddParameter",55);var P0=r.cPF("NAME",Fd.F3.Dc);var P1=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0);P1.set(p1);r.ln=55;{r.ln=59;if(l.tB(l.s.eq(m.PARAMETERS.get(),""))){r.ln=61;
m.PARAMETERS.set("?");}r.ln=65;if(l.tB(l.s.ne(m.PARAMETERS.get(),"?"))){r.ln=67;m.PARAMETERS.set(l.cat(m.PARAMETERS.get(),"&"));}r.ln=71;if(l.s.eq(P1.get(),"")){r.ln=73;P1.set("???");}r.ln=77;m.PARAMETERS.set(l.cat(m.PARAMETERS.get(),l.s.Substitute("&1=&2",P0.get(),l.s.ReplaceAll(P1.get()," ","%20"))));}r.ln=79;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOUN_3"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);
this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOUN_3",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOUN_4"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(951);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOUN_4",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);
};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XDEMOUNIC"});}},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_EVEF","PRIM_TEXT","PRIM_PHBN","PRIM_STR","PRIM_FLD"]});