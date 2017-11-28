﻿LANSA.addComponent({id:"DF_T73H2O",ot:"rp",tp:"Reusable Part",de:"\OC=Asynchronous Example 2",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};
var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{avExecuteAsyncOperation:{ps:{"OperationID":{pt:"i"},"Parameter1":{pt:"i"},"Parameter2":{pt:"i"},"ParameterReference1":{pt:"i"},"ParameterReference2":{pt:"i"},"KillOtherPendingOperations":{pt:"o"}}}},co:function(){cO.aN.call(this);this.aF("DF_T73H2O",Fd);var C0=this.cR("STARTLONGPROCESSING","PRIM_PHBN");var C1=this.cR("PROGRESSOUTERPANEL","PRIM_PANL");var C2=this.cR("PROGRESSINNERLABEL","PRIM_LABL");var C3=this.cR("PROGRESS","PRIM_VS","Style");var C4=this.cR("BORDERS","PRIM_VS","Style");
C0.setDisplayPosition(1);C0.setParent(this);C0.setCaption("Start Long Processing Task");C0.setTabPosition(1);C0.setWidth(199);C0.iC();C1.setParent(this);C1.setDisplayPosition(2);C1.setTabPosition(2);C1.setTop(96);C1.setHeight(25);C1.setWidth(450);C1.setStyle(C4);C1.setVisible(false);C1.iC();C2.setParent(C1);C2.setDisplayPosition(1);C2.setTabPosition(1);C2.setLeft(0);C2.setTop(0);C2.setWidth(440);C2.setTabStop(false);C2.setStyle(C3);C2.setAlignment("CENTER");C2.setVerticalAlignment("CENTER");C2.setCaption("10%");
C2.setHeight(25);C2.iC();C3.setNormBackColor("0:99:177");C3.setTextColor("WHITE");C3.iC();C4.setBorderBottom(1);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderColor("0:99:177");C4.iC();C0.aH("CLICK",this,e1);this.setHeight(281);this.setWidth(609);}});function e1(sender,Ps){var r=l.eR(this,cO,"#StartLongProcessing.Click",29);r.ln=29;{r.ln=31;this.mthAVQUEUEASYNCOPERATION("START",u,u,u,u,u,u,u,u,u,u);}r.ln=33;r.e();};cO.mthAVEXECUTEASYNCOPERATION=function(p0,p1,p2,p3,p4,p5)
{var m=this.REF,r=l.mR(this,cO,"avExecuteAsyncOperation",36);var P0=r.cP("OPERATIONID","PRIM_DC","UnicodeString");var P1=r.cP("PARAMETER1","PRIM_DC","UnicodeString");var P2=r.cP("PARAMETER2","PRIM_DC","UnicodeString");var P3=r.cPD("PARAMETERREFERENCE1");var P4=r.cPD("PARAMETERREFERENCE2");var P5=r.cP("KILLOTHERPENDINGOPERATIONS","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);P3=p3;P4=p4;var C0=r.cF("PERCENTAGEDONE",Fd.F1.Dc);C0.iC();r.ln=36;{r.ln=40;{var v1=P0.get();if(r.ln=43,l.s.eq(v1,"START")){
r.ln=45;m.PROGRESSINNERLABEL.setTop(0);m.PROGRESSINNERLABEL.setLeft(0);m.PROGRESSINNERLABEL.setHeight(m.PROGRESSOUTERPANEL.getHeight());m.PROGRESSINNERLABEL.setWidth(0);r.ln=47;m.PROGRESSOUTERPANEL.setVisible(true);r.ln=49;this.mthAVQUEUEASYNCOPERATION("PERFORMOPERATION","0",u,u,u,u,u,u,u,u,1000);}else if(r.ln=52,l.s.eq(v1,"STOP")){r.ln=54;m.PROGRESSOUTERPANEL.setVisible(false);}else if(r.ln=57,l.s.eq(v1,"PERFORMOPERATION")){r.ln=59;C0.set(l.s.AsNumber(P1.get()));r.ln=60;C0.set(l.add(C0.get(),5));
r.ln=62;if(l.n.ge(C0.get(),100)){r.ln=64;m.PROGRESSINNERLABEL.setWidth(m.PROGRESSOUTERPANEL.getWidth());m.PROGRESSINNERLABEL.setCaption("Completed");r.ln=66;this.mthAVQUEUEASYNCOPERATION("STOP",u,u,u,u,u,u,u,u,u,2000);}else{r.ln=70;m.PROGRESSINNERLABEL.setWidth(l.add(m.PROGRESSINNERLABEL.getWidth(),l.div(m.PROGRESSOUTERPANEL.getWidth(),20)));r.ln=72;m.PROGRESSINNERLABEL.setCaption(l.cat(l.n.AsString(C0.get()),"%"));r.ln=74;this.mthAVQUEUEASYNCOPERATION("PERFORMOPERATION",l.n.AsString(C0.get()),u,u,u,u,u,u,u,u,1000);
}}r.ln=78;}p5.set(P5.get());}r.ln=80;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC010O"],rp:["PRIM_PHBN","PRIM_PANL","PRIM_LABL","PRIM_VS.Style","PRIM_FLD"]});