﻿LANSA.addComponent({id:"XDTOOL_2",nm:"xDToolsBodyLandingPage",ot:"rp",tp:"Reusable Part",de:"Body Landing Page",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"XDTOOLSP",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("XDTOOLSBANNERITEM1","PRIM_TBLO","Item");var C4=this.cR("XDTOOLSFEATUREDPRODUCTSITEM1","PRIM_TBLO","Item");var C5=this.cR("XDTOOLSBANNER","XDTOOLSB");var C6=this.cR("XDTOOLSFEATUREDPRODUCTS","XDTOOLSF");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setManage(C5);C3.setParent(C0);C3.setRow(C2);C3.setSizing("CONTENTHEIGHTFITTOWIDTH");C3.setAlignment("TOPCENTER");C3.setFlow("DOWN");C3.setMarginBottom(4);C3.iC();C4.setColumn(C1);C4.setManage(C6);C4.setParent(C0);C4.setRow(C2);C4.setSizing("CONTENTHEIGHTFITTOWIDTH");C4.setAlignment("TOPCENTER");C4.setFlow("DOWN");C4.iC();C5.setParent(this);C5.setHeight(270);C5.setWidth(1001);
C5.iC();C6.setParent(this);C6.setTabPosition(2);C6.setWidth(1001);C6.setDisplayPosition(2);C6.setTop(274);C6.setHeight(1516);C6.iC();this.setHeight(732);this.setWidth(1001);this.setLayoutManager(C0);}});},{rc:["XDTOOLSP","XDTOOLSB","XDTOOLSF"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item"]});