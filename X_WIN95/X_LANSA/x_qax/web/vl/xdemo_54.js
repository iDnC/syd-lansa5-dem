﻿LANSA.addComponent({id:"XDEMO_54",nm:"xDemoWebSPAToolbar",ot:"rp",tp:"Reusable Part",de:"Toolbar",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"XDEMO_51",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("ADD","PRIM_SPBN");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);
C2.iC();C3.setAlignment("CENTERLEFT");C3.setColumn(C2);C3.setManage(C4);C3.setParent(C0);C3.setRow(C1);C3.setSizing("NONE");C3.setMarginLeft(8);C3.iC();C4.setAutoSize(false);C4.setButtonStyle("FLATBUTTON");C4.setComponentVersion(1);C4.setDisplayPosition(1);C4.setLeft(8);C4.setParent(this);C4.setTabPosition(1);C4.setTop(18);C4.setWidth(72);C4.setCaption("Add Page");C4.iC();C4.aH("CLICK",this,e1);this.setHeight(65);this.setWidth(553);this.setLayoutManager(C0);this.setThemeDrawStyle("MediumTitle");}
});function e1(sender,Ps){var r=l.eR(this,cO,"#Add.Click",11);r.ln=11;{r.ln=13;this.REF.GAPPLICATION.ref.mthADD();}r.ln=15;r.e();};},{rc:["XDEMO_51"],rp:["PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_SPBN"]});