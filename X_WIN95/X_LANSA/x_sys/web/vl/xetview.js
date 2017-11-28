﻿LANSA.addComponent({id:"XETVIEW",nm:"XETViewer",ot:"rp",tp:"Reusable Part",de:"Employee Viewer",tl:14020000},function(l,oI,u){var rc1=l.cB("xetbm004.png");var rc2=l.cB("xetbm005.png");var rc3=l.cB("xetbm006.png");var cO=l.rC(oI,{an:"PRIM_PANL",pt:{CurrentEmployee:{da:"r"}},mt:{ShowOneColumn:{},ShowTwoColumns:{},ShowBackButton:{},HideBackButton:{},ViewEmployee:{ps:{"Employee":{pt:"i"}}}},ev:{BackClicked:{},EditClicked:{},DeleteClicked:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE_WHITEBACKGROUND","PRIM_VS","Style");
var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("ROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C10=this.cR("PANELHEADINGITEM1","PRIM_TBLO","Item");var C11=this.cR("LABELHEADINGITEM1","PRIM_TBLO","Item");
var C12=this.cR("PANELHEADING","PRIM_PANL");var C13=this.cR("LABELHEADING","PRIM_LABL");var C14=this.cR("IMAGEBACK","PRIM_IMAG");var C15=this.cR("IMAGEDELETE","PRIM_IMAG");var C16=this.cR("IMAGEEDIT","PRIM_IMAG");var C17=this.cR("EMPLOYEEDETAILS","XETDTLS");this.cD("CURRENTEMPLOYEE");C0.setNormBackColor("WHITE");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.setHeight(48);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(2);C4.setParent(C1);
C4.iC();C5.setAlignment("CENTERLEFT");C5.setColumn(C2);C5.setParent(C1);C5.setRow(C3);C5.iC();C6.setColumn(C2);C6.setManage(C14);C6.setParent(C1);C6.setRow(C3);C6.setSizing("FITTOHEIGHT");C6.setAlignment("CENTERLEFT");C6.setFlow("RIGHT");C6.iC();C7.setColumn(C2);C7.setManage(C17);C7.setParent(C1);C7.setRow(C4);C7.iC();C8.setColumn(C2);C8.setManage(C15);C8.setParent(C1);C8.setRow(C3);C8.setSizing("FITTOHEIGHT");C8.setAlignment("TOPRIGHT");C8.setFlow("LEFT");C8.iC();C9.setColumn(C2);C9.setManage(C16);
C9.setParent(C1);C9.setRow(C3);C9.setSizing("FITTOHEIGHT");C9.setAlignment("TOPRIGHT");C9.setFlow("LEFT");C9.iC();C10.setColumn(C2);C10.setManage(C12);C10.setParent(C1);C10.setRow(C3);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C2);C11.setManage(C13);C11.setParent(C1);C11.setRow(C3);C11.setSizing("FITTOWIDTH");C11.iC();C12.setDisplayPosition(2);C12.setHeight(48);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(0);C12.setWidth(500);C12.setThemeDrawStyle("MediumTitle");
C12.setLayoutManager(C1);C12.iC();C13.setDisplayPosition(4);C13.setEllipses("WORD");C13.setHeight(48);C13.setLeft(0);C13.setParent(C12);C13.setTabPosition(1);C13.setTabStop(false);C13.setTop(0);C13.setVerticalAlignment("CENTER");C13.setWidth(500);C13.setThemeDrawStyle("Heading1+MediumTitle");C13.setMarginLeft(50);C13.setCaption("New Employee");C13.setWordWrap(false);C13.setMarginRight(100);C13.iC();C14.setDisplayPosition(3);C14.setLeft(0);C14.setParent(C12);C14.setTabStop(false);C14.setTop(0);C14.setHeight(48);
C14.setTabPosition(2);C14.setImage(rc1);C14.setWidth(48);C14.iC();C15.setDisplayPosition(1);C15.setLeft(452);C15.setParent(C12);C15.setTabPosition(3);C15.setTabStop(false);C15.setTop(0);C15.setHeight(48);C15.setWidth(48);C15.setImage(rc2);C15.setHint("Delete Employee Details");C15.iC();C16.setDisplayPosition(2);C16.setLeft(404);C16.setParent(C12);C16.setTabPosition(4);C16.setTabStop(false);C16.setTop(0);C16.setHeight(48);C16.setWidth(48);C16.setImage(rc3);C16.setHint("Edit Employee Details");C16.iC();
C17.setHeight(521);C17.setParent(this);C17.setTabPosition(2);C17.setTabStop(false);C17.setTop(48);C17.setWidth(500);C17.iC();C14.aH("CLICK",this,e1);C15.aH("CLICK",this,e3);C16.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setHeight(569);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C1);this.setStyle(C0);}});function e1(sender,Ps){var r=l.eR(this,cO,"#ImageBack.Click",48);r.ln=48;{r.ln=50;this.fE("BACKCLICKED");}r.ln=52;r.e();};function e2(sender,Ps)
{var r=l.eR(this,cO,"#ImageEdit.Click",54);r.ln=54;{r.ln=56;this.fE("EDITCLICKED");}r.ln=58;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ImageDelete.Click",60);r.ln=60;{r.ln=62;this.fE("DELETECLICKED");}r.ln=64;r.e();};cO.mthSHOWONECOLUMN=function(){var m=this.REF,r=l.mR(this,cO,"ShowOneColumn",69);r.ln=69;{r.ln=71;m.EMPLOYEEDETAILS.mthSHOWONECOLUMN();}r.ln=73;r.e();};cO.mthSHOWTWOCOLUMNS=function(){var m=this.REF,r=l.mR(this,cO,"ShowTwoColumns",75);r.ln=75;{r.ln=77;m.EMPLOYEEDETAILS.mthSHOWTWOCOLUMNS();
}r.ln=79;r.e();};cO.mthSHOWBACKBUTTON=function(){var m=this.REF,r=l.mR(this,cO,"ShowBackButton",81);r.ln=81;{r.ln=83;m.IMAGEBACK.setVisible(true);r.ln=85;m.LABELHEADING.setMarginLeft(50);}r.ln=87;r.e();};cO.mthHIDEBACKBUTTON=function(){var m=this.REF,r=l.mR(this,cO,"HideBackButton",89);r.ln=89;{r.ln=91;m.IMAGEBACK.setVisible(false);r.ln=93;m.LABELHEADING.setMarginLeft(10);}r.ln=95;r.e();};cO.mthVIEWEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"ViewEmployee",97);var P0=r.cPD("EMPLOYEE");P0=p0;
r.ln=97;{r.ln=100;this.srCURRENTEMPLOYEE(P0);r.ln=102;m.LABELHEADING.set(P0.getDISPLAYNAME());r.ln=104;m.EMPLOYEEDETAILS.mthVIEWEMPLOYEE(m.CURRENTEMPLOYEE);}r.ln=106;r.e();};cO.getCURRENTEMPLOYEE=function(){return this.REF.CURRENTEMPLOYEE;};cO.srCURRENTEMPLOYEE=function(rn){this.sR("CURRENTEMPLOYEE",rn);};},{rc:["XETDTLS"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_HINT"],dc:["XETDATA"]});