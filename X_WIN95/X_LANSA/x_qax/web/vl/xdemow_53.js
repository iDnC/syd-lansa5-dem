﻿LANSA.addComponent({id:"XDEMOW_53",nm:"xDemoWebSignatureCapture",ot:"wp",tp:"Web Page",de:"Signature Capture",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.47"),c2=l.cDec("1.89");var Fd={F1:{nm:"XDEMOBLOB",an:"xDemoBlob",ft:"BL",ln:0,dc:0,lb:"Blob",h1:"Blob",h2:"",h3:"",de:"Blob",dv:l.SqlNull,ia:["ASQN","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOW_53",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");
var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C11=this.cR("SIGNATURE","PRIM_WEB","Signature");
var C12=this.cR("LABEL1","PRIM_LABL");var C13=this.cR("IMAGE","PRIM_IMAG");var C14=this.cR("CAPTURE","PRIM_PHBN");var C15=this.cR("CLEAR","PRIM_PHBN");C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setWidth(c1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setWidth(243);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.setHeight(40);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(2);
C5.setParent(C1);C5.setHeight(c2);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C2);C6.setFlow("DOWN");C6.setManage(C11);C6.setParent(C1);C6.setRow(C5);C6.setMarginTop(4);C6.setMarginLeft(4);C6.setMarginRight(4);C6.setMarginBottom(4);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C2);C7.setFlow("DOWN");C7.setManage(C12);C7.setParent(C1);C7.setRow(C4);C7.setColumnSpan(2);C7.iC();C8.setColumn(C3);C8.setManage(C13);C8.setParent(C1);C8.setRow(C5);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setAlignment("TOPCENTER");
C8.setMarginLeft(4);C8.setMarginTop(4);C8.setMarginRight(4);C8.iC();C9.setColumn(C3);C9.setManage(C14);C9.setParent(C1);C9.setRow(C5);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.setAlignment("TOPCENTER");C9.setMarginLeft(4);C9.setMarginRight(4);C9.setMarginTop(4);C9.iC();C10.setColumn(C3);C10.setManage(C15);C10.setParent(C1);C10.setRow(C5);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setAlignment("TOPCENTER");C10.setMarginLeft(4);C10.setMarginRight(4);C10.setMarginTop(4);C10.iC();C11.setDisplayPosition(1);
C11.setParent(this);C11.setTabPosition(1);C11.setTabStop(false);C11.setHeight(664);C11.setWidth(669);C11.setTop(44);C11.setLeft(4);C11.iC();C12.setCaption("Sign Below");C12.setDisplayPosition(2);C12.setEllipses("WORD");C12.setLeft(0);C12.setParent(this);C12.setTabPosition(2);C12.setTabStop(false);C12.setTop(0);C12.setVerticalAlignment("CENTER");C12.setWidth(920);C12.setThemeDrawStyle("Heading2+DarkTitle");C12.setHeight(40);C12.setMarginLeft(4);C12.iC();C13.setDisplayPosition(3);C13.setLeft(681);C13.setParent(this);
C13.setTabPosition(3);C13.setTabStop(false);C13.setTop(44);C13.setWidth(235);C13.setHeight(235);C13.setStyle(C0);C13.iC();C14.setCaption("Capture");C14.setDisplayPosition(4);C14.setLeft(681);C14.setParent(this);C14.setTabPosition(4);C14.setTop(283);C14.setWidth(235);C14.iC();C15.setCaption("Clear");C15.setDisplayPosition(5);C15.setLeft(681);C15.setParent(this);C15.setTabPosition(5);C15.setTop(312);C15.setWidth(235);C15.iC();C14.aH("CLICK",this,e1);C15.aH("CLICK",this,e2);this.setHeight(712);this.setWidth(920);
this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var f=this.FLD.XDEMOW_53,m=this.REF,r=l.eR(this,cO,"#Capture.Click",21);r.ln=21;{r.ln=23;m.IMAGE.setFileName(m.SIGNATURE.getBlob());r.ln=24;f.F1.set(m.SIGNATURE.getBlob());}r.ln=26;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Clear.Click",28);r.ln=28;{r.ln=30;m.SIGNATURE.mthCLEAR();}r.ln=32;r.e();};},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_WEB.Signature","PRIM_LABL","PRIM_IMAG","PRIM_PHBN"]
});