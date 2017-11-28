﻿LANSA.addComponent({id:"DF_T52F1O",ot:"rp",tp:"Reusable Part",de:"\OC=Business Object 102 Filter",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":""}[cL],h3:"",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",ia:["LC","FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,
ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T52F1O",Fd);var C0=this.cA("PEOPLE_CONTROLLER1","DF_T52CTO");var C1=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C2=this.cR("LABL_1","PRIM_LABL");
var C3=this.cF("SEARCHSURNAME",Fd.F1.VISUALEDIT);var C4=this.cR("BUTTON_SEARCH","PRIM_PHBN");var C5=this.cR("LABEL1","PRIM_LABL");var C6=this.cR("ATTACHITEM1","PRIM_ATLI");var C7=this.cR("ATTACHITEM2","PRIM_ATLI");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCaption("See component DF_T52F1O for details of this FILTER");C1.setDisplayPosition(1);C1.setHeight(33);C1.setLeft(4);C1.setParent(this);C1.setTabPosition(1);C1.setTabStop(false);C1.setTop(4);C1.setWidth(313);C1.setVerticalAlignment("CENTER");
C1.iC();C2.setCaption("Enter a part of a surname");C2.setDisplayPosition(2);C2.setHeight(25);C2.setParent(this);C2.setTabPosition(2);C2.setTabStop(false);C2.setTop(40);C2.setWidth(209);C2.setVerticalAlignment("CENTER");C2.setLeft(8);C2.iC();C3.setDisplayPosition(3);C3.setHeight(25);C3.setParent(this);C3.setTabPosition(3);C3.setTop(40);C3.setWidth(97);C3.setLabelType("CAPTION");C3.setMarginLeft(0);C3.setLeft(216);C3.aD();C3.iC();C4.setCaption("Search");C4.setDisplayPosition(4);C4.setHeight(33);C4.setParent(this);
C4.setTabPosition(4);C4.setTop(72);C4.setWidth(145);C4.setLeft(8);C4.iC();C5.setCaption("This filter reads from the database and writes to the instance list by calling a shared component called a controller (DF_T52CTO). This means it does not have to access the database directly, and all database updates and instance list updates are handled in a standard way by all filters and command handlers.");C5.setDisplayPosition(5);C5.setEllipses("WORD");C5.setHeight(153);C5.setLeft(4);C5.setParent(this);C5.setTabPosition(5);
C5.setTabStop(false);C5.setTop(108);C5.setVerticalAlignment("CENTER");C5.setWidth(313);C5.iC();C6.setManage(C5);C6.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C6.setAttachment("BOTTOM");C6.setMarginLeft(4);C6.setMarginRight(4);C6.setMarginTop(4);C6.setMarginBottom(4);C6.iC();C7.setManage(C1);C7.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C7.setAttachment("TOP");C7.setMarginLeft(4);C7.setMarginRight(4);C7.setMarginTop(4);C7.setMarginBottom(4);C7.iC();C3.aH("CHANGED",this,e1);C3.aH("ENTER",this,e2);
C4.aH("CLICK",this,e2);this.setHeight(265);this.setWidth(321);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",45);r.ln=45;{r.ln=47;cA.mthUINITIALIZE.call(this);r.ln=49;this.setAVFILTERLOCATION("LEFT");this.setAVALLOWLOCATIONCHANGE(false);r.ln=51;m.BUTTON_SEARCH.setEnabled(false);}r.ln=53;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SearchSurname.Changed",56);r.ln=56;{r.ln=58;m.BUTTON_SEARCH.setEnabled(l.s.ne(l.s.Trim(m.SEARCHSURNAME.get()),""));
}r.ln=60;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Search.Click #SearchSurname.Enter",63);var C0=r.cF("TOTALFOUND",Fd.F2.Dc);C0.iC();r.ln=63;{r.ln=67;if(l.s.ne(l.s.Trim(m.SEARCHSURNAME.get()),"")){r.ln=70;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=73;m.PEOPLE_CONTROLLER1.ref.mthFINDEMPLOYEES(2,false,m.SEARCHSURNAME.get(),this.REF.AVLISTMANAGER,true,C0);r.ln=76;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat("Search for '",m.SEARCHSURNAME.get()),"' found "),l.n.AsString(C0.get())),u,u,this,u,u,u);
}}r.ln=80;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"DF_ELTX"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"DF_ELTX",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);
};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","DF_T52CTO"],rp:["PRIM_LABL","PRIM_EVEF","PRIM_PHBN","PRIM_ATLI","PRIM_FLD"]});