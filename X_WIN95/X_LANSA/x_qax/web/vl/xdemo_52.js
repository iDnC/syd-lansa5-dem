﻿LANSA.addComponent({id:"XDEMO_52",nm:"xDemoWebSPABody",ot:"rp",tp:"Reusable Part",de:"Body",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"XDEMO_51",mt:{Activate:{ps:{"Page":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM","PRIM_TBLO","Item");this.cD("ACTIVEPAGE");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);
C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setParent(C0);C3.setRow(C1);C3.iC();this.REF.GAPPLICATION.ref.aH("ACTIVATING",this,e1);this.setHeight(457);this.setWidth(657);this.setLayoutManager(C0);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.Activating",12);var P0=Ps.r("PAGE");r.ln=12;{r.ln=14;cO.mthACTIVATE.call(this,P0);}r.ln=16;r.e();};cO.mthACTIVATE=function(p0){var m=this.REF,r=l.mR(this,cO,"Activate",18);var P0=r.cPD("PAGE");P0=p0;r.ln=18;{r.ln=21;if((m.ACTIVEPAGE!=null)){r.ln=22;
m.ACTIVEPAGE.mthFADEOUT(500);}r.ln=25;m.LAYOUTITEM.setManage(P0);r.ln=26;P0.setParent(this);r.ln=27;P0.mthFADEIN(u,u);r.ln=28;this.srACTIVEPAGE(P0);}r.ln=30;r.e();};cO.srACTIVEPAGE=function(rn){this.sR("ACTIVEPAGE",rn);};},{rc:["XDEMO_51"],rp:["PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item"],dc:["XDEMO_49"],dp:["PRIM_ANIM"]});