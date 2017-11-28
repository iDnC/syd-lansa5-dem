﻿LANSA.addComponent({id:"DF_MSGEXO",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Messaging Example",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELNCHR",ft:"N",ln:512,dc:0,lb:"NCHAR field",h1:"NCHAR",h2:"field",h3:"",de:"NCHAR field",dv:"",ia:["FE","LC"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},SetButtonEnablement:{}},co:function(){cO.aN.call(this);this.aF("DF_MSGEXO",Fd);var C0=this.cR("THISDEMOOBJECT","PRIM_LABL");var C1=this.cR("THISDEMOOBJECTSTYLE","PRIM_VS","Style");var C2=this.cF("MESSAGETEXT",Fd.F1.VISUALEDIT);var C3=this.cR("INFOMESSAGE","PRIM_PHBN");
var C4=this.cR("WARNMESSAGE","PRIM_PHBN");var C5=this.cR("FATALMESSAGE","PRIM_PHBN");var C6=this.cR("CLEARMESSAGES","PRIM_PHBN");var C7=this.cR("SHOWMESSAGES","PRIM_PHBN");var C8=this.cR("ISSUE30MESSAGES","PRIM_PHBN");var C9=this.cR("ISSUE3MESSAGESWITHSECONDLEVEL","PRIM_PHBN");var C10=this.cR("ISSUEVIASYS_MSGQCOMMAND","PRIM_PHBN");var C11=this.cR("ISSUEFROMSERVERMODULE","PRIM_PHBN");var C12=this.cR("AUTOCLEAR","PRIM_CKBX");var C13=this.cR("USEMAINFORM","PRIM_CKBX");C0.setParent(this);C0.setDisplayPosition(5);
C0.setTabPosition(5);C0.setTabStop(false);C0.setHeight(24);C0.setWidth(381);C0.setCaption("DF_MSGEXO - VLF-ONE Messaging Example");C0.setStyle(C1);C0.setTop(4);C0.setLeft(4);C0.iC();C1.setTextColor("BLUE");C1.setFontSize(14);C1.iC();C2.setDisplayPosition(1);C2.setParent(this);C2.setTabPosition(1);C2.setWidth(526);C2.setCaption("Message Text");C2.setLabelType("CAPTION");C2.setMarginLeft(90);C2.setLeft(43);C2.setTop(45);C2.setHeight(21);C2.setUsePicklist(false);C2.setPlaceholder("You need to enter some text to enable the issue message buttons");
C2.aD();C2.iC();C3.setCaption("Issue as Information Message");C3.setDisplayPosition(11);C3.setLeft(43);C3.setParent(this);C3.setTabPosition(11);C3.setTop(75);C3.setWidth(526);C3.iC();C4.setCaption("Issue as Warning Message");C4.setDisplayPosition(10);C4.setLeft(43);C4.setParent(this);C4.setTabPosition(10);C4.setTop(104);C4.setWidth(526);C4.iC();C5.setCaption("Issue as Fatal Message");C5.setDisplayPosition(9);C5.setLeft(43);C5.setParent(this);C5.setTabPosition(9);C5.setTop(135);C5.setWidth(526);C5.iC();
C6.setCaption("Clear Messages");C6.setDisplayPosition(8);C6.setLeft(43);C6.setParent(this);C6.setTabPosition(8);C6.setTop(165);C6.setWidth(526);C6.iC();C7.setCaption("Show Messages");C7.setDisplayPosition(7);C7.setLeft(43);C7.setParent(this);C7.setTabPosition(7);C7.setTop(195);C7.setWidth(526);C7.iC();C8.setCaption("Issue 30 Test Messages");C8.setDisplayPosition(6);C8.setLeft(43);C8.setParent(this);C8.setTabPosition(6);C8.setTop(224);C8.setWidth(526);C8.iC();C9.setCaption("Issue 3 With 2nd Level Text");
C9.setDisplayPosition(4);C9.setLeft(43);C9.setParent(this);C9.setTabPosition(4);C9.setTop(254);C9.setWidth(526);C9.iC();C10.setCaption("Issue messages using #SYS_MSGQ");C10.setDisplayPosition(3);C10.setLeft(43);C10.setParent(this);C10.setTabPosition(3);C10.setTop(285);C10.setWidth(526);C10.iC();C11.setCaption("Issue messages from a Server Module (see DF_MSGSMO)");C11.setDisplayPosition(2);C11.setLeft(43);C11.setParent(this);C11.setTabPosition(2);C11.setTop(316);C11.setWidth(526);C11.iC();C12.setCaption("Use AutoClear(True) parameter ");
C12.setDisplayPosition(13);C12.setLeft(44);C12.setMarginLeft(2);C12.setParent(this);C12.setTabPosition(13);C12.setTop(350);C12.setWidth(329);C12.iC();C13.setCaption("To/From Main Form");C13.setDisplayPosition(12);C13.setLeft(44);C13.setMarginLeft(2);C13.setParent(this);C13.setTabPosition(12);C13.setTop(378);C13.setWidth(329);C13.iC();C2.aH("CHANGED",this,e1);C3.aH("CLICK",this,e2);C4.aH("CLICK",this,e3);C5.aH("CLICK",this,e4);C6.aH("CLICK",this,e5);C7.aH("CLICK",this,e6);C8.aH("CLICK",this,e7);C9.aH("CLICK",this,e8);
C10.aH("CLICK",this,e9);C11.aH("CLICK",this,e10);this.setHeight(409);this.setWidth(585);this.setLayoutManager(null);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",53);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=53;{r.ln=55;this.mthSETBUTTONENABLEMENT();p0.set(P0.get());}r.ln=57;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#MessageText.Changed",60);r.ln=60;{r.ln=62;this.mthSETBUTTONENABLEMENT();
}r.ln=63;r.e();};cO.mthSETBUTTONENABLEMENT=function(){var m=this.REF,r=l.mR(this,cO,"SetButtonEnablement",66);r.ln=66;{r.ln=68;m.INFOMESSAGE.setEnabled(l.s.ne(l.s.Trim(m.MESSAGETEXT.getValue()),""));m.WARNMESSAGE.setEnabled(l.s.ne(l.s.Trim(m.MESSAGETEXT.getValue()),""));m.FATALMESSAGE.setEnabled(l.s.ne(l.s.Trim(m.MESSAGETEXT.getValue()),""));}r.ln=70;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#InfoMessage.Click",73);r.ln=73;{r.ln=75;sr1.call(this);r.ln=77;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(m.MESSAGETEXT.getValue(),u,"INFO",this,l.s.eq(m.AUTOCLEAR.getButtonState(),"CHECKED"),l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);
}r.ln=79;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#WarnMessage.Click",82);r.ln=82;{r.ln=84;sr1.call(this);r.ln=86;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(m.MESSAGETEXT.getValue(),u,"WARN",this,l.s.eq(m.AUTOCLEAR.getButtonState(),"CHECKED"),l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);}r.ln=88;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#FatalMessage.Click",91);r.ln=91;{r.ln=93;sr1.call(this);r.ln=95;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(m.MESSAGETEXT.getValue(),u,"FATAL",this,l.s.eq(m.AUTOCLEAR.getButtonState(),"CHECKED"),l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);
}r.ln=97;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#ClearMessages.Click",100);r.ln=100;{r.ln=102;sr1.call(this);}r.ln=104;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ShowMessages.Click",107);r.ln=107;{r.ln=109;this.REF.AVFRAMEWORKMANAGER.mthAVSHOWMESSAGES(this,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"));}r.ln=111;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Issue30Messages.Click",115);var C0=r.cF("I",Fd.F2.Dc);C0.iC();r.ln=115;{r.ln=119;sr1.call(this);
r.ln=121;for(var i1=1,s1=1,t1=l.tI(30);C0.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=122;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat("Test messsage number ",l.n.AsString(C0.get())),u,"INFO",this,l.and(l.n.eq(C0.get(),30),l.s.eq(m.AUTOCLEAR.getButtonState(),"CHECKED")),l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);}}r.ln=125;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Issue3MessagesWithSecondLevel.Click",128);r.ln=128;{r.ln=130;sr1.call(this);r.ln=132;
this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Test messsage number 1 with second level text","Lorem ipsum dolor sit amet, corpora tractatos partiendo mel ea, has at quem agam recusabo. Ea ponderum consequuntur has. Eos cu illum malis aeterno. Esse referrentur his ad, eos cu quodsi inermis. Nihil ceteros delicatissimi ad pri, sale vituperata cu per.","INFO",this,u,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);r.ln=134;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Test messsage number 2 with second level text","Accumsan interpretaris concludaturque vis id. Est alienum detraxit honestatis et. Ne appetere temporibus consectetuer eum, tantas atomorum euripidis vim ex. In usu ludus antiopam periculis. Vel te latine lucilius, est no deleniti disputationi.Eum tantas salutatus argumentum eu, in nostro periculis ius, est dolorum docendi philosophia ea. Scaevola erroribus ut vis. Cu nonumy admodum nec, pri an delenit verterem facilisis. Dicant aperiam habemus ei qui, id mel mollis philosophia. Quis soleat fabellas qui id, alii referrentur in sit, soluta cetero liberavisse id vix. Eu harum denique sed, pro quaeque verterem ne. Nam in stet nulla praesent, dicta fierent constituto eu eam. Interpretaris concludaturque vis id. Est alienum detraxit honestatis et. Ne appetere temporibus consectetuer eum, tantas atomorum euripidis vim ex. In usu ludus antiopam periculis. Vel te latine lucilius, est no deleniti disputationi.Eum tantas salutatus argumentum eu, in nostro periculis ius, est dolorum docendi philosophia ea. Scaevola erroribus ut vis. Cu nonumy admodum nec, pri an delenit verterem facilisis. Dicant aperiam habemus ei qui, id mel mollis philosophia. Quis soleat fabellas qui id, alii referrentur in sit, soluta cetero liberavisse id vix. Eu harum denique sed, pro quaeque verterem ne. Nam in stet nulla praesent, dicta fierent constituto eu eam.","INFO",this,u,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);
r.ln=136;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Test messsage number 3 with second level text","Sea percipit vivendum reformidans an. Eligendi accusata quo ei. Libris scripta vix ne. Ei qui zril iuvaret denique. Viris altera sed at.","INFO",this,l.s.eq(m.AUTOCLEAR.getButtonState(),"CHECKED"),l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"),u);}r.ln=139;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#IssueviaSYS_MSGQCommand.Click",142);r.ln=142;{r.ln=145;sr1.call(this);r.ln=148;
l.MSGQ().mthADD("Message 1 issued via #SYS_MSGQ.Add",u);r.ln=149;l.MSGQ().mthADD("Message 2 issued via #SYS_MSGQ.Add",u);r.ln=150;l.MSGQ().mthADD("Message 2 issued via #SYS_MSGQ.Add",u);r.ln=153;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"));}r.ln=155;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#IssuefromServerModule.Click",159);var C0=r.cDR("ISSUESERVERMESSAGES","DF_MSGSMO","ISSUESERVERMESSAGES");C0.iC();r.ln=159;
{r.ln=164;sr1.call(this);r.ln=167;C0.mthEXECUTE({},{});r.ln=170;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"));}r.ln=172;r.e();};function sr1(){var m=this.REF,r=l.sR(this,cO,"ClearMessage",176);r.ln=176;{r.ln=178;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,l.s.eq(m.USEMAINFORM.getButtonState(),"CHECKED"));}r.ln=180;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELNCHR"});Fd.F1.VISUALEDIT=function()
{this.aN.call(this,new Fd.F1.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(895);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"VF_ELNCHR",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_LABL","PRIM_VS.Style","PRIM_EVEF","PRIM_PHBN","PRIM_CKBX","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_MSGQ"]
});