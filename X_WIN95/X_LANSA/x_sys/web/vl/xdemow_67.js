﻿LANSA.addComponent({id:"XDEMOW_67",nm:"xDemoWebLayout3ColumnWithHeaderandFooter",ot:"wp",tp:"Web Page",de:"3 Column with header and footer",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("DESIGNS","PRIM_DESN");var C1=this.cR("MOBILE","PRIM_DESN","Design");var C2=this.cR("TABLET","PRIM_DESN","Design");var C3=this.cR("LAYOUT1","PRIM_TBLO");var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C10=this.cR("HEADER","XDEMO_43");var C11=this.cR("FOOTER","XDEMO_44");var C12=this.cR("BODY","XDEMO_45");var C13=this.cR("XDEMOWEBLAYOUT3COLUMNWITHHEADERANDFOOTERMENU","XDEMO_47");C0.iC();C1.setDesignManager(C0);C1.setWidth(640);C1.iC();C2.setDesignManager(C0);C2.setWidth(1024);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);
C5.setParent(C3);C5.iC();C6.setColumn(C4);C6.setFlow("DOWN");C6.setManage(C10);C6.setParent(C3);C6.setRow(C5);C6.setSizing("CONTENTHEIGHTFITTOWIDTH");C6.setAlignment("TOPCENTER");C6.iC();C7.setColumn(C4);C7.setFlow("DOWN");C7.setManage(C13);C7.setParent(C3);C7.setRow(C5);C7.setSizing("FITTOWIDTH");C7.setAlignment("TOPCENTER");C7.setMarginTop(4);C7.iC();C8.setColumn(C4);C8.setFlow("DOWN");C8.setManage(C12);C8.setParent(C3);C8.setRow(C5);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.setAlignment("TOPCENTER");
C8.setMarginTop(4);C8.setMarginBottom(4);C8.iC();C9.setColumn(C4);C9.setFlow("DOWN");C9.setManage(C11);C9.setParent(C3);C9.setRow(C5);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setAlignment("TOPCENTER");C9.iC();C10.setParent(this);C10.setTabStop(false);C10.setWidth(1200);C10.setHeight(55);C10.iC();C11.setDisplayPosition(4);C11.setParent(this);C11.setTabPosition(3);C11.setTabStop(false);C11.setTop(549);C11.setWidth(1200);C11.iC();C12.setDisplayPosition(3);C12.setParent(this);C12.setTabPosition(2);
C12.setTabStop(false);C12.setTop(93);C12.setWidth(1200);C12.setHeight(452);C12.iC();C13.setDisplayPosition(2);C13.setParent(this);C13.setTabPosition(4);C13.setTabStop(false);C13.setTop(59);C13.setWidth(1200);C13.iC();this.setTheme(l.gTh("XDEMOW_68"));this.setDesignManager(C0);this.setLayoutManager(C3);}});},{rc:["XDEMO_43","XDEMO_44","XDEMO_45","XDEMO_47","XDEMOW_68"],rp:["PRIM_WEB","PRIM_DESN","PRIM_DESN.Design","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item"]});