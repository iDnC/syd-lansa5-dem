﻿LANSA.addComponent({id:"DF_T71O_3",nm:"DF_T71O_Bar_Chart_Handler",ot:"rp",tp:"Reusable Part",de:"\OC=Bar Chart using Chart.js",tl:14015000},function(l,oI,u){var c1=l.cDec(".5");var cO=l.rC(oI,{an:"VF_AC010O",mt:{uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C1=this.cR("BARCHART","DF_T71O_4");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("LAYOUTITEM1","PRIM_ATLI");var C4=this.cR("LAYOUTITEM2","PRIM_ATLI");var C5=this.cR("BARCHART_INITIALIZED","PRIM_BOLN");
C0.setCaption("Bar Chart using Chart.js See component DF_T71O_Bar_Chart_Handler for details of this command handler");C0.setDisplayPosition(1);C0.setEllipses("WORD");C0.setHeight(39);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setVerticalAlignment("CENTER");C0.setWidth(665);C0.iC();C1.setParent(this);C1.setTabStop(false);C1.setHeight(378);C1.setWidth(665);C1.setDisplayPosition(2);C1.setTabPosition(2);C1.setTop(39);C1.iC();C2.iC();C3.setAttachment("CENTER");
C3.setParent(C2);C3.setManage(C1);C3.iC();C4.setAttachment("TOP");C4.setManage(C0);C4.setParent(C2);C4.iC();C5.iC();C1.aH("UCHARTINITIALIZED",this,e1);this.setHeight(417);this.setWidth(665);this.setLayoutManager(C2);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",36);r.ln=36;{r.ln=39;cA.mthUINITIALIZE.call(this);r.ln=42;this.setAVCONTENTNEEDSSHIELDING(true);}r.ln=44;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BarChart.uChartInitialized",48);
var C0=r.cR("NEWDATASETID","PRIM_ALPH");C0.iC();r.ln=48;{r.ln=53;m.BARCHART.mthUSHOWTITLE("Monthly Sales 2015-2016",u,18,u,u,u);r.ln=55;m.BARCHART.mthUSETLEGEND(u,"2015",u,u,u,u,u,u);r.ln=58;m.BARCHART.mthUSETBARSTYLES("red",u,u,c1,u,14,"black",u);r.ln=61;m.BARCHART.mthUADDBAR(u,"January",33,u,u);r.ln=62;m.BARCHART.mthUADDBAR(u,"February",45,u,u);r.ln=63;m.BARCHART.mthUADDBAR(u,"March",22,u,u);r.ln=64;m.BARCHART.mthUADDBAR(u,"April",88,u,u);r.ln=65;m.BARCHART.mthUADDBAR(u,"May",111,u,u);r.ln=66;m.BARCHART.mthUADDBAR(u,"June",53,u,u);
r.ln=67;m.BARCHART.mthUADDBAR(u,"July",69,u,u);r.ln=68;m.BARCHART.mthUADDBAR(u,"August",79,u,u);r.ln=69;m.BARCHART.mthUADDBAR(u,"September",61,u,u);r.ln=70;m.BARCHART.mthUADDBAR(u,"October",88,u,u);r.ln=71;m.BARCHART.mthUADDBAR(u,"November",60,u,u);r.ln=72;m.BARCHART.mthUADDBAR(u,"December",40,u,u);r.ln=75;C0.set(m.BARCHART.mthUADDDATASET("2016"));r.ln=77;m.BARCHART.mthUSETBARSTYLES("orange",u,u,u,C0.get(),u,u,u);r.ln=80;m.BARCHART.mthUADDBAR(C0.get(),u,43,u,u);r.ln=81;m.BARCHART.mthUADDBAR(C0.get(),u,35,u,u);
r.ln=82;m.BARCHART.mthUADDBAR(C0.get(),u,52,u,u);r.ln=83;m.BARCHART.mthUADDBAR(C0.get(),u,68,u,u);r.ln=84;m.BARCHART.mthUADDBAR(C0.get(),u,90,u,u);r.ln=85;m.BARCHART.mthUADDBAR(C0.get(),u,63,u,u);r.ln=86;m.BARCHART.mthUADDBAR(C0.get(),u,59,u,u);r.ln=87;m.BARCHART.mthUADDBAR(C0.get(),u,89,u,u);r.ln=88;m.BARCHART.mthUADDBAR(C0.get(),u,75,u,u);r.ln=89;m.BARCHART.mthUADDBAR(C0.get(),u,55,u,u);r.ln=90;m.BARCHART.mthUADDBAR(C0.get(),u,44,u,u);r.ln=91;m.BARCHART.mthUADDBAR(C0.get(),u,59,u,u);r.ln=94;m.BARCHART.mthUREFRESH();
}r.ln=96;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",99);r.ln=99;{r.ln=101;m.BARCHART.mthUCLEAR(true);}r.ln=103;r.e();};},{rc:["VF_AC010O","DF_T71O_4"],rp:["PRIM_LABL","PRIM_ATLM","PRIM_ATLI","PRIM_BOLN"],dp:["PRIM_ALPH"]});