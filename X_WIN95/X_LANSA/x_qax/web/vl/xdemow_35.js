﻿LANSA.addComponent({id:"XDEMOW_35",nm:"xDemoWebLazyLoadingScrollintoView",ot:"wp",tp:"Web Page",de:"Lazy Loading Scroll into View",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,
{an:"PRIM_WEB",fd:Fd,mt:{LoadImages:{},LoadImage:{ps:{"EmployeeNumber":{pt:"i"},"Image":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOW_35",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("COLUMN_2","PRIM_TBLO","Column");var C5=this.cR("COLUMN_3","PRIM_TBLO","Column");var C6=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C8=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C12=this.cR("LABEL11","PRIM_LABL");var C13=this.cR("IMAGE1","PRIM_IMAG");var C14=this.cR("IMAGE2","PRIM_IMAG");var C15=this.cR("IMAGE3","PRIM_IMAG");var C16=this.cR("IMAGE4","PRIM_IMAG");var C17=this.cR("IMAGE5","PRIM_IMAG");var C18=this.cR("REQUESTS","PRIM_KCOL");C0.setFontSize(22);C0.setFontUnits("PIXEL");
C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setDisplayPosition(2);C4.setParent(C1);C4.setWidth(871);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(3);C5.setParent(C1);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C4);C6.setFlow("DOWN");C6.setManage(C12);C6.setParent(C1);C6.setRow(C2);C6.setSizing("FITTOWIDTH");C6.setMarginTop(4);C6.iC();C7.setColumn(C4);C7.setManage(C13);C7.setParent(C1);C7.setRow(C2);C7.setSizing("NONE");
C7.setAlignment("TOPCENTER");C7.setFlow("DOWN");C7.setMarginTop(10);C7.iC();C8.setColumn(C4);C8.setManage(C14);C8.setParent(C1);C8.setRow(C2);C8.setSizing("NONE");C8.setAlignment("TOPCENTER");C8.setFlow("DOWN");C8.setMarginTop(10);C8.iC();C9.setColumn(C4);C9.setManage(C15);C9.setParent(C1);C9.setRow(C2);C9.setSizing("NONE");C9.setAlignment("TOPCENTER");C9.setFlow("DOWN");C9.setMarginTop(10);C9.iC();C10.setColumn(C4);C10.setManage(C16);C10.setParent(C1);C10.setRow(C2);C10.setSizing("NONE");C10.setAlignment("TOPCENTER");
C10.setFlow("DOWN");C10.setMarginTop(10);C10.iC();C11.setColumn(C4);C11.setManage(C17);C11.setParent(C1);C11.setRow(C2);C11.setSizing("NONE");C11.setAlignment("TOPCENTER");C11.setFlow("DOWN");C11.setMarginTop(10);C11.iC();C12.setCaption("Scroll down the page. The images will be loaded as they come in to view");C12.setDisplayPosition(1);C12.setEllipses("WORD");C12.setHeight(45);C12.setLeft(156);C12.setParent(this);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(4);C12.setWidth(871);C12.setAlignment("CENTER");
C12.setVerticalAlignment("CENTER");C12.setThemeDrawStyle("DarkTitle");C12.setStyle(C0);C12.iC();C13.setDisplayPosition(2);C13.setLeft(424);C13.setParent(this);C13.setTabPosition(6);C13.setTabStop(false);C13.setTop(59);C13.setHeight(230);C13.setWidth(335);C13.setImageSizing("BESTFIT");C13.iC();C14.setDisplayPosition(3);C14.setLeft(424);C14.setParent(this);C14.setTabPosition(5);C14.setTabStop(false);C14.setTop(299);C14.setHeight(230);C14.setWidth(335);C14.setImageSizing("BESTFIT");C14.iC();C15.setDisplayPosition(4);
C15.setLeft(424);C15.setParent(this);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(539);C15.setHeight(230);C15.setWidth(335);C15.setImageSizing("BESTFIT");C15.iC();C16.setDisplayPosition(5);C16.setLeft(424);C16.setParent(this);C16.setTabPosition(3);C16.setTabStop(false);C16.setTop(779);C16.setHeight(230);C16.setWidth(335);C16.setImageSizing("BESTFIT");C16.iC();C17.setDisplayPosition(6);C17.setLeft(424);C17.setParent(this);C17.setTabPosition(2);C17.setTabStop(false);C17.setTop(1019);C17.setHeight(230);
C17.setWidth(335);C17.setImageSizing("BESTFIT");C17.iC();C18.setCollects("PRIM_BOLN");C18.setKeyedBy(Fd.F1.Dc);C18.iC();this.setLayoutManager(C1);this.setTheme(l.THEME().get("2015GREEN"));this.aH("CREATEINSTANCE",this,e1);this.aH("SCROLLCHANGED",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance #Com_Owner.ScrollChanged",33);r.ln=33;{r.ln=35;this.mthLOADIMAGES();}r.ln=37;r.e();};cO.mthLOADIMAGES=function(){var m=this.REF,r=l.mR(this,cO,"LoadImages",39);r.ln=39;{r.ln=42;
if(l.n.lt(m.IMAGE1.getScrollTop(),this.getHeight())){r.ln=45;cO.mthLOADIMAGE.call(this,"108069",m.IMAGE1);}r.ln=49;if(l.n.lt(m.IMAGE2.getScrollTop(),this.getHeight())){r.ln=51;cO.mthLOADIMAGE.call(this,"104590",m.IMAGE2);}r.ln=55;if(l.n.lt(m.IMAGE3.getScrollTop(),this.getHeight())){r.ln=57;cO.mthLOADIMAGE.call(this,"112521",m.IMAGE3);}r.ln=61;if(l.n.lt(m.IMAGE4.getScrollTop(),this.getHeight())){r.ln=63;cO.mthLOADIMAGE.call(this,"108192",m.IMAGE4);}r.ln=67;if(l.n.lt(m.IMAGE5.getScrollTop(),this.getHeight()))
{r.ln=69;cO.mthLOADIMAGE.call(this,"114968",m.IMAGE5);}}r.ln=73;r.e();};cO.mthLOADIMAGE=function(p0,p1){var f=this.FLD.XDEMOW_35,m=this.REF,r=l.mR(this,cO,"LoadImage",75),mth=r;var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);var P1=r.cPD("IMAGE");P0.set(p0);P1=p1;var C0=r.cDR("GETEMPLOYEEIMAGE","XDEMOW_84","GETEMPLOYEEIMAGE");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=75;{r.ln=83;if(l.tB(l.not(m.REQUESTS.get(P0.get()).get()))){r.ln=86;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPIMG":f.F2,"IO$STS":f.F3}});
r.ln=89;m.REQUESTS.get(P0.get()).set(true);}}r.ln=100;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployeeImage.Completed",94,mth);r.ln=94;{r.ln=96;P1.setImage(l.APPL().mthCREATEBITMAP(f.F2.get()));}r.ln=98;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_KCOL","PRIM_FLD","PRIM_WEB.DataRequest"]});