﻿LANSA.addComponent({id:"DF_T71O_2",nm:"DF_T71O_PieChart_Handler",ot:"rp",tp:"Reusable Part",de:"\OC= Pie using Chart.js",tl:14015000},function(l,oI,u){var c1=l.cDec(".5"),c2=l.cDec(".7");var cO=l.rC(oI,{an:"VF_AC010O",mt:{uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C1=this.cR("PIECHART","DF_T71O_1");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("LAYOUTITEM1","PRIM_ATLI");var C4=this.cR("LAYOUTITEM2","PRIM_ATLI");C0.setCaption("Pie Chart using Chart.js See component DF_T71O_Pie_Chart_Handler for details of this command handler");
C0.setDisplayPosition(1);C0.setEllipses("WORD");C0.setHeight(32);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setVerticalAlignment("CENTER");C0.setWidth(601);C0.iC();C1.setParent(this);C1.setTabStop(false);C1.setWidth(601);C1.setDisplayPosition(2);C1.setTabPosition(2);C1.setTop(32);C1.iC();C2.iC();C3.setAttachment("CENTER");C3.setManage(C1);C3.setParent(C2);C3.iC();C4.setAttachment("TOP");C4.setManage(C0);C4.setParent(C2);C4.iC();C1.aH("UCHARTINITIALIZED",this,e1);
this.setHeight(377);this.setWidth(601);this.setLayoutManager(C2);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",31);r.ln=31;{r.ln=34;cA.mthUINITIALIZE.call(this);r.ln=36;this.setAVCONTENTNEEDSSHIELDING(true);}r.ln=38;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PieChart.uChartInitialized",45);r.ln=45;{r.ln=47;m.PIECHART.mthUSHOWTITLE("Sales By Agent",u,16,u,u,u);r.ln=71;m.PIECHART.mthUADDPIESECTION(u,"John Smythe",10,"204,0,204",c1);r.ln=72;
m.PIECHART.mthUADDPIESECTION(u,"Martha Connors",22,"0,102,0",c1);r.ln=73;m.PIECHART.mthUADDPIESECTION(u,"Rachel May",8,"black",c2);r.ln=74;m.PIECHART.mthUADDPIESECTION(u,"Susan Conradi",50,"153,0,0",c1);r.ln=75;m.PIECHART.mthUADDPIESECTION(u,"Peter Phelps",55,"green",c1);r.ln=76;m.PIECHART.mthUADDPIESECTION(u,"Juan Menendez",30,"orange",c1);r.ln=78;m.PIECHART.mthUREFRESH(u,u);}r.ln=80;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",82);r.ln=82;{r.ln=85;m.PIECHART.mthUCLEAR(true);
}r.ln=87;r.e();};},{rc:["VF_AC010O","DF_T71O_1"],rp:["PRIM_LABL","PRIM_ATLM","PRIM_ATLI"]});