﻿LANSA.addComponent({id:"DF_FILT1O",ot:"rp",tp:"Reusable Part",de:"\OC=Employees Filter by Name",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":""}[cL],h3:"",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",ia:["LC","FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,
ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,co:function(){cO.aN.call(this);this.aF("DF_FILT1O",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cR("LABL_1","PRIM_LABL");var C2=this.cR("CLEARLIST_CKBX","PRIM_CKBX");var C3=this.cF("SEARCHSURNAME",Fd.F1.VISUALEDIT);
var C4=this.cR("BUTTON_SEARCH","PRIM_PHBN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCaption("Enter a partial surname");C1.setDisplayPosition(1);C1.setHeight(25);C1.setLeft(8);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(8);C1.setWidth(193);C1.setVerticalAlignment("CENTER");C1.iC();C2.setButtonState("CHECKED");C2.setCaption("Clear List");C2.setDisplayPosition(2);C2.setHeight(22);C2.setParent(this);C2.setTabPosition(1);C2.setTop(98);C2.setWidth(145);C2.setLeft(8);C2.iC();
C3.setDisplayPosition(3);C3.setHeight(25);C3.setParent(this);C3.setTabPosition(3);C3.setTop(29);C3.setWidth(145);C3.setLabelType("CAPTION");C3.setMarginLeft(0);C3.setLeft(8);C3.aD();C3.iC();C4.setCaption("Search");C4.setDisplayPosition(4);C4.setHeight(33);C4.setParent(this);C4.setTabPosition(4);C4.setTop(59);C4.setWidth(145);C4.setLeft(8);C4.setEnabled(false);C4.iC();C3.aH("CHANGED",this,e1);C4.aH("CLICK",this,e2);this.REF.AVLOCALTIMER.aH("TICK",this,e3);this.setHeight(127);this.setWidth(175);this.setLayoutManager(null);
}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SearchSurname.Changed",44);r.ln=44;{r.ln=46;m.BUTTON_SEARCH.setEnabled(l.s.ne(l.s.Trim(m.SEARCHSURNAME.get()),""));}r.ln=48;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Search.Click",51);r.ln=51;{r.ln=54;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=57;this.mthAVGOTOBUSYSTATE(l.cat(l.cat("Searching for '",m.SEARCHSURNAME.get()),"'"),false,u);r.ln=60;this.REF.AVLOCALTIMER.setInterval(1);
}r.ln=62;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",65);var C0=r.cF("TOTALFOUND",Fd.F2.Dc);C0.iC();r.ln=65;{r.ln=70;this.REF.AVLOCALTIMER.setInterval(0);r.ln=73;m.PEOPLECONTROLLER.ref.mthFINDEMPLOYEES(2,false,m.SEARCHSURNAME.get(),this.REF.AVLISTMANAGER,l.s.eq(m.CLEARLIST_CKBX.getButtonState(),"CHECKED"),C0);r.ln=76;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat("Search for '",m.SEARCHSURNAME.get()),"' found "),l.n.AsString(C0.get())),u,u,this,u,u,u);
r.ln=79;this.mthAVGOTOFREESTATE();}r.ln=81;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"DF_ELTX"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"DF_ELTX",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVFRAMEWORKMANAGER=function(rn)
{cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","DF_EMCTLO"],rp:["PRIM_LABL","PRIM_CKBX","PRIM_EVEF","PRIM_PHBN","PRIM_FLD"]});