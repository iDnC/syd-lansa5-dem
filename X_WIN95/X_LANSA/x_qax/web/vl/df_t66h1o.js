﻿LANSA.addComponent({id:"DF_T66H1O",ot:"rp",tp:"Reusable Part",de:"\OC=Show details of a Thing",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELURL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uTerminate:{},uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T66H1O",Fd);var C0=this.cR("ATTACHMENTS","PRIM_ACOL");var C1=this.cR("VISIBLEITEMS","PRIM_ACOL");var C2=this.cR("ATTACH_LONGNOTESPANEL1","PRIM_ATLI");var C3=this.cR("ATTACH_LONGNOTESPANEL2","PRIM_ATLI");var C4=this.cR("ATTACH_LONGNOTESTEXT1","PRIM_ATLM");
var C5=this.cR("ATTACH_LONGNOTESTEXT2","PRIM_ATLM");var C6=this.cR("ATTACH_LONGNOTES1","PRIM_ATLI");var C7=this.cR("ATTACH_LONGNOTES2","PRIM_ATLI");var C8=this.cR("LONGNOTESPANEL1","PRIM_PANL");var C9=this.cR("LONGNOTESPANEL2","PRIM_PANL");var C10=this.cR("LONGNOTES1","PRIM_LABL");var C11=this.cR("LONGNOTES2","PRIM_LABL");var C12=this.cR("LONGNOTES1STYLE","PRIM_VS","Style");var C13=this.cR("LONGNOTES2STYLE","PRIM_VS","Style");C0.setCollects("PRIM_ATLI");C0.iC();C1.setCollects("VF_ELURL.Visual");C1.iC();
C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setManage(C8);C2.setMarginLeft(4);C2.setMarginRight(4);C2.setMarginTop(4);C2.setMarginBottom(4);C2.setAttachment("CENTER");C2.iC();C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setManage(C9);C3.setMarginLeft(4);C3.setMarginRight(4);C3.setMarginTop(4);C3.setMarginBottom(4);C3.setAttachment("BOTTOM");C3.iC();C4.iC();C5.iC();C6.setManage(C10);C6.setParent(C4);C6.setAttachment("CENTER");C6.setMarginLeft(8);C6.setMarginRight(8);C6.setMarginTop(8);
C6.setMarginBottom(8);C6.iC();C7.setManage(C11);C7.setParent(C5);C7.setAttachment("CENTER");C7.setMarginLeft(8);C7.setMarginRight(8);C7.setMarginTop(8);C7.setMarginBottom(8);C7.iC();C8.setParent(this);C8.setDisplayPosition(2);C8.setHeight(134);C8.setLeft(4);C8.setTabPosition(2);C8.setTop(4);C8.setWidth(485);C8.setLayoutManager(C4);C8.setStyle(C12);C8.iC();C9.setParent(this);C9.setDisplayPosition(1);C9.setHeight(100);C9.setLeft(4);C9.setTabPosition(1);C9.setTop(146);C9.setWidth(485);C9.setLayoutManager(C5);
C9.setStyle(C13);C9.iC();C10.setParent(C8);C10.setDisplayPosition(1);C10.setTabPosition(1);C10.setTabStop(false);C10.setLeft(8);C10.setTop(8);C10.setWidth(467);C10.setEllipses("END");C10.setHeight(116);C10.iC();C11.setParent(C9);C11.setDisplayPosition(1);C11.setTabPosition(1);C11.setTabStop(false);C11.setLeft(8);C11.setTop(8);C11.setWidth(467);C11.setEllipses("END");C11.setHeight(82);C11.iC();C12.setNormBackColor("243:235:152");C12.setBorderBottom(1);C12.setBorderTop(1);C12.setBorderLeft(1);C12.setBorderRight(1);
C12.iC();C13.setNormBackColor("212:225:170");C13.setBorderBottom(1);C13.setBorderTop(1);C13.setBorderLeft(1);C13.setBorderRight(1);C13.iC();this.setHeight(250);this.setWidth(493);}});var cA=cO.aN.prototype;cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",54);r.ln=54;{r.ln=56;m.ATTACHMENTS.mthREMOVEALL();r.ln=58;m.VISIBLEITEMS.mthREMOVEALL();r.ln=60;cA.mthUTERMINATE.call(this);}r.ln=62;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",66);var C0=r.cD("C0");
var C1=r.cD("C1");r.ln=66;{r.ln=72;cA.mthUINITIALIZE.call(this);r.ln=76;{var l1=this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMNDEFINITION=r.sR("COLUMNDEFINITION",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=78;C0=r.sR("C0",l.cC("PRIM_ATLI"));r.ln=79;m.ATTACHMENTS.mthINSERT(C0);r.ln=81;C1=r.sR("C1",new Fd.F1.VISUAL());r.ln=82;m.VISIBLEITEMS.mthINSERT(C1);r.ln=84;C1.setParent(this);C1.setDisplayPosition(INDEX.get());C1.setHeight(21);C1.setTabPosition(INDEX.get());
C1.setReadOnly(true);C1.setCaption(COLUMNDEFINITION.getUCAPTION());C1.setLabelType("CAPTION");C1.setMarginLeft(127);r.ln=86;C0.setManage(C1);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setMarginLeft(4);C0.setMarginRight(4);C0.setMarginTop(4);C0.setMarginBottom(0);r.ln=89;}l1.end();r.dR("COLUMNDEFINITION");r.dR("INDEX");}}r.ln=92;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",97);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");
P0.set(p0.get());P1=p1;var C0=r.cD("C0");var C1=r.cF("TEMPINT",Fd.F2.Dc);var C2=r.cR("EVEN","PRIM_BOLN");C1.iC();C2.iC();r.ln=97;{r.ln=104;cA.mthUEXECUTE.call(this,P0,P1);r.ln=108;m.LONGNOTESPANEL1.setVisible(l.s.eq(this.getAVALPHAARG1(),"NOTES"));m.LONGNOTESPANEL2.setVisible(l.s.eq(this.getAVALPHAARG1(),"NOTES"));r.ln=111;C0=r.sR("C0",this.getAVASSOCIATEDINSTANCE());r.ln=115;if(l.or((C0==null),l.s.eq(this.getAVALPHAARG1(),"NEW"))){r.ln=117;for(var l1=m.VISIBLEITEMS.cI();l1.step();){l1.item().setValue("");
l1.item().setReadOnly(false);}}else{r.ln=121;C1.set(l.div(C0.getUII().get(),2));r.ln=122;C2.set(l.n.eq(l.mul(C1.get(),2),C0.getUII().get()));r.ln=124;{var l1=this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMNDEFINITION=r.sR("COLUMNDEFINITION",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=126;{var v1=COLUMNDEFINITION.getTYPE();if(r.ln=128,l.s.eq(v1,"V")){r.ln=129;if(l.n.eq(COLUMNDEFINITION.getINSTANCEOFTYPE(),1)){r.ln=130;m.VISIBLEITEMS.get(INDEX.get()).setValue(C0.getAVVISUALID1().get());
}else{r.ln=132;m.VISIBLEITEMS.get(INDEX.get()).setValue(C0.getAVVISUALID2().get());}}else if(r.ln=135,l.s.eq(v1,"A")){r.ln=136;m.VISIBLEITEMS.get(INDEX.get()).setValue(C0.getAVACOLUMNX(COLUMNDEFINITION.getINSTANCEOFTYPE()));}else if(r.ln=138,l.s.eq(v1,"N")){r.ln=139;m.VISIBLEITEMS.get(INDEX.get()).setValue(C0.getAVNUMERICVISIBLECOLUMNX(COLUMNDEFINITION.getINSTANCEOFTYPE()).get());}else if(r.ln=141,l.s.eq(v1,"D")){r.ln=142;m.VISIBLEITEMS.get(INDEX.get()).setValue(C0.getAVDATEVISIBLECOLUMNX(COLUMNDEFINITION.getINSTANCEOFTYPE()).get());
}r.ln=144;}r.ln=146;}l1.end();r.dR("COLUMNDEFINITION");r.dR("INDEX");}}r.ln=152;if(m.LONGNOTESPANEL1.getVisible()){r.ln=154;if(l.tB(C2.get())){r.ln=156;m.LONGNOTESPANEL1.setStyle(m.LONGNOTES2STYLE);m.LONGNOTESPANEL2.setStyle(m.LONGNOTES2STYLE);r.ln=158;m.LONGNOTESPANEL2.setVisible(true);r.ln=160;m.LONGNOTES1.setCaption(l.cat(l.cat("Lorem ipsum dolor sit amet, graeco corrumpit ea vis, eu ius regione molestiae instructior. Et sed homero adipisci. Per et latine menandri posidonium.",l.n.AsUnicodeString(10)),"Ius ut liber noster causae, at mei tale debet luptatum. Ius sint quas ea, iriure instructior est ex."));
r.ln=162;m.LONGNOTES2.setCaption("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ");}else{r.ln=167;m.LONGNOTESPANEL1.setStyle(m.LONGNOTES1STYLE);r.ln=169;m.LONGNOTESPANEL2.setVisible(false);r.ln=171;m.LONGNOTES1.setCaption(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("Forensibus comprehensam vel ad. Meis homero explicari eos at, an pro fugit aperiam dissentiet. Eos mucius possit at, vel sale assueverit reprehendunt ne. Percipit antiopam ad mei. In elit laoreet nec. Purto dolorem mentitum vis ea, his soleat cetero dissentiunt eu, pri quot elitr electram at.",l.n.AsUnicodeString(10)),"Ea nam solet labitur. An eum nihil luptatum mediocrem. Mei ad fabulas expetenda reprehendunt, nec ne debet appellantur. Dicit saperet nam ut. Quo an meis dolore verterem, has ei inimicus adipiscing. Liber erroribus an qui, probo minim an vel. Duo ipsum tamquam probatus ne. Modo fabellas persecuti nam at, vis at prima ornatus voluptua, an pri nullam doctus persequeris."),l.n.AsUnicodeString(10)),"Ne sed affert ceteros iracundia, ius in enim urbanitas disputando. Eu pro scripserit scribentur, no vocent adversarium theophrastus mea, te vim autem assum vivendum. Nam ludus petentium argumentum et, has no modo laudem ancillae."),l.n.AsUnicodeString(10)),"His malis dolore ex. Apeirian volutpat ex his. In agam nominati maiestatis per, odio consulatu mel eu."));
}}p0.set(P0.get());}r.ln=179;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELURL"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"VF_ELURL",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ACOL","PRIM_ATLI","PRIM_ATLM","PRIM_PANL","PRIM_LABL","PRIM_VS.Style","PRIM_EVEF","PRIM_FLD"],
dc:["VF_LM003O"],dp:["PRIM_ATLI","PRIM_BOLN"]});