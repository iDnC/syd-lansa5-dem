﻿LANSA.addComponent({id:"XDEMOW_51",nm:"xDemoWebFixedPosition",ot:"wp",tp:"Web Page",de:"Fixing the position of a child control",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C10=this.cR("LABEL1","PRIM_LABL");var C11=this.cR("LABEL2","PRIM_LABL");var C12=this.cR("LABEL3","PRIM_LABL");var C13=this.cR("LABEL4","PRIM_LABL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(200);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(200);
C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(2);C4.setParent(C0);C4.setHeight(2000);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setHeight(91);C5.setUnits("PIXELS");C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C2);C6.setFlow("DOWN");C6.setManage(C10);C6.setParent(C0);C6.setRow(C4);C6.setSizing("NONE");C6.iC();C7.setAlignment("TOPRIGHT");C7.setColumn(C2);C7.setFlow("DOWN");C7.setManage(C11);C7.setParent(C0);C7.setRow(C4);C7.setSizing("NONE");C7.iC();C8.setAlignment("BOTTOMCENTER");
C8.setColumn(C1);C8.setFlow("DOWN");C8.setManage(C12);C8.setParent(C0);C8.setRow(C4);C8.setSizing("FITTOWIDTH");C8.setColumnSpan(3);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C1);C9.setFlow("DOWN");C9.setManage(C13);C9.setParent(C0);C9.setRow(C5);C9.setSizing("FITTOWIDTH");C9.setColumnSpan(3);C9.iC();C10.setCaption("Scrolling Label - FixedPosition(False)");C10.setDisplayPosition(2);C10.setEllipses("WORD");C10.setHeight(177);C10.setLeft(200);C10.setParent(this);C10.setTabPosition(2);C10.setTabStop(false);
C10.setTop(91);C10.setVerticalAlignment("CENTER");C10.setWidth(329);C10.setAlignment("CENTER");C10.setThemeDrawStyle("Heading3+MediumTitle");C10.iC();C11.setCaption("Non- scrolling Label - FixedPosition(True)");C11.setDisplayPosition(3);C11.setEllipses("WORD");C11.setHeight(177);C11.setLeft(653);C11.setParent(this);C11.setTabPosition(1);C11.setTabStop(false);C11.setTop(91);C11.setVerticalAlignment("CENTER");C11.setWidth(329);C11.setAlignment("CENTER");C11.setFixedPosition(true);C11.setThemeDrawStyle("Heading3+MediumTitle");
C11.iC();C12.setCaption("Footer");C12.setDisplayPosition(4);C12.setEllipses("WORD");C12.setHeight(56);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(3);C12.setTabStop(false);C12.setTop(2035);C12.setVerticalAlignment("CENTER");C12.setWidth(1182);C12.setAlignment("CENTER");C12.setThemeDrawStyle("Heading2+MediumTitle");C12.iC();C13.setCaption("Scroll the page - This header and the box on the right will stay in the same place");C13.setDisplayPosition(1);C13.setEllipses("WORD");C13.setHeight(33);
C13.setLeft(0);C13.setParent(this);C13.setTabPosition(4);C13.setTabStop(false);C13.setTop(0);C13.setVerticalAlignment("CENTER");C13.setWidth(1182);C13.setAlignment("CENTER");C13.setFixedPosition(true);C13.setThemeDrawStyle("Heading1+DarkTitle");C13.iC();this.setLayoutManager(C0);this.setHeight(1200);this.setTheme(l.THEME().get("2015INDIGO"));}});},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL"]});