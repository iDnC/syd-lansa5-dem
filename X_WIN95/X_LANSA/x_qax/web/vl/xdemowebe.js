﻿LANSA.addComponent({id:"XDEMOWEBE",nm:"xDemoWebExpandingContent",ot:"wp",tp:"Web Page",de:"Expanding Content",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XDEMOWEBE",Fd);var C0=this.cR("STYLE2","PRIM_VS","Style");
var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("COLUMN3","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("BODYRIGHTITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");
var C12=this.cR("LISTITEM1","PRIM_TBLO","Item");var C13=this.cR("HEADER","PRIM_LABL");var C14=this.cR("FOOTER","PRIM_LABL");var C15=this.cR("LIST","PRIM_LIST");var C16=this.cR("COLUMNXDEMOCAPT1","PRIM_LIST","String");var C17=this.cR("BODYLEFT","PRIM_PANL");var C18=this.cR("BODYRIGHT","PRIM_PANL");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setUnits("PIXELS");C2.setWidth(200);C2.iC();C3.setDisplayPosition(2);
C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setWidth(200);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.setHeight(80);C5.setUnits("PIXELS");C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.setUnits("CONTENT");C6.setMinHeight(200);C6.setHeight(69);C6.iC();C7.setDisplayPosition(3);C7.setParent(C1);C7.setHeight(80);C7.setUnits("PIXELS");C7.iC();C8.setColumn(C2);C8.setManage(C13);C8.setParent(C1);C8.setRow(C5);C8.setColumnSpan(3);C8.iC();C9.setColumn(C2);
C9.setManage(C14);C9.setParent(C1);C9.setRow(C7);C9.setColumnSpan(3);C9.iC();C10.setManage(C18);C10.setParent(C1);C10.setRow(C6);C10.setColumn(C4);C10.iC();C11.setColumn(C2);C11.setManage(C17);C11.setParent(C1);C11.setRow(C6);C11.iC();C12.setColumn(C3);C12.setManage(C15);C12.setParent(C1);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setRow(C6);C12.setAlignment("TOPCENTER");C12.iC();C13.setCaption("Double Click To Add 10 Items");C13.setDisplayPosition(4);C13.setEllipses("WORD");C13.setHeight(80);C13.setLeft(0);
C13.setParent(this);C13.setTabPosition(5);C13.setTabStop(false);C13.setTop(0);C13.setVerticalAlignment("CENTER");C13.setWidth(968);C13.setAlignment("CENTER");C13.setThemeDrawStyle("MediumTitle");C13.iC();C14.setDisplayPosition(5);C14.setEllipses("WORD");C14.setHeight(80);C14.setLeft(0);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(280);C14.setVerticalAlignment("CENTER");C14.setWidth(968);C14.setAlignment("CENTER");C14.setThemeDrawStyle("MediumTitle");C14.setCaption("Footer");
C14.iC();C15.setDisplayPosition(1);C15.setHeight(69);C15.setParent(this);C15.setTabPosition(1);C15.setTop(80);C15.setWidth(568);C15.setStyle(C0);C15.setColumnLines(false);C15.setColumnHeaderHeight(0);C15.setRowHeight(20);C15.setRowLines(false);C15.setLeft(200);C15.iC();C16.setDisplayPosition(1);C16.setParent(C15);C16.setSource(f.F1);C16.setColumnUnits("PROPORTION");C16.setDisplayAlignment("CENTER");C16.iC();C17.setDisplayPosition(2);C17.setHeight(200);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(4);
C17.setTabStop(false);C17.setTop(80);C17.setWidth(200);C17.setThemeDrawStyle("LightTitle");C17.iC();C18.setDisplayPosition(3);C18.setHeight(200);C18.setParent(this);C18.setTabPosition(2);C18.setTabStop(false);C18.setTop(80);C18.setWidth(200);C18.setThemeDrawStyle("LightTitle");C18.setLeft(768);C18.iC();C13.aH("DOUBLECLICK",this,e3);this.setHeight(529);this.setWidth(968);this.setTheme(l.gTh("XDEMOTH_2"));this.setLayoutManager(C1);this.aH("CREATEINSTANCE",this,e1);this.aH("SIZECHANGED",this,e2);}});
function e1(sender,Ps){var f=this.FLD.XDEMOWEBE,r=l.eR(this,cO,"#Com_owner.CreateInstance",26);r.ln=26;{r.ln=28;f.F1.set("List Entry");}r.ln=30;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.SizeChanged",32);r.ln=32;{r.ln=34;m.ROW2.setMinHeight(l.sub(l.sub(this.getHeight(),m.ROW1.getHeight()),m.ROW3.getHeight()));}r.ln=36;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Header.DoubleClick",38);r.ln=38;{r.ln=40;for(var i1=1,s1=1,t1=l.tI(10);(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=41;m.LIST.addEntry();}}r.ln=44;r.e();};},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_LIST","PRIM_LIST.String","PRIM_PANL"]});