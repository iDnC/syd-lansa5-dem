﻿LANSA.addComponent({id:"XDEMOWEBP",nm:"xDemoWebPopupinaLoop",ot:"wp",tp:"Web Page",de:"Showing Popups in a loop",tl:14020000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.74");var Fd={F1:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F3:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],
h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Prepare:{},ShowItem:{ps:{"ListItem":{pt:"i"}}},NavigateTo:{ps:{"Item":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOWEBP",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");
var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LIST","PRIM_LIST");var C7=this.cR("COLUMNXEMPTHM1","PRIM_LIST","Image");var C8=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");var C9=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C10=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C11=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C12=this.cR("LABEL1","PRIM_LABL");var C13=this.cR("POPUP","XDEMO_58");
this.cD("ACTIVEITEM");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(71);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setColumn(C1);C4.setManage(C6);C4.setParent(C0);C4.setRow(C3);C4.iC();C5.setColumn(C1);C5.setManage(C12);C5.setParent(C0);C5.setRow(C2);C5.iC();C6.setDisplayPosition(1);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTop(71);C6.setHeight(474);C6.setWidth(961);
C6.setColumnLines(false);C6.setRowHeight(25);C6.setRowLines(false);C6.iC();C7.setColumnWidth(36);C7.setDisplayPosition(1);C7.setParent(C6);C7.setSource(f.F1);C7.setImageSizing("BESTFIT");C7.setCellMarginBottom(1);C7.setCellMarginTop(1);C7.iC();C8.setColumnWidth(102);C8.setDisplayPosition(2);C8.setParent(C6);C8.setSource(f.F2);C8.iC();C9.setColumnWidth(121);C9.setDisplayPosition(3);C9.setParent(C6);C9.setSource(f.F3);C9.iC();C10.setColumnWidth(307);C10.setDisplayPosition(4);C10.setParent(C6);C10.setSource(f.F4);
C10.iC();C11.setColumnWidth(307);C11.setDisplayPosition(5);C11.setParent(C6);C11.setSource(f.F5);C11.iC();C12.setCaption("DoubleClick an item to show it in a popup");C12.setDisplayPosition(3);C12.setEllipses("WORD");C12.setHeight(71);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(2);C12.setTabStop(false);C12.setTop(0);C12.setVerticalAlignment("CENTER");C12.setWidth(961);C12.setThemeDrawStyle("Title+MediumTitle");C12.setMarginLeft(4);C12.iC();C13.setLeft(264);C13.setParent(this);C13.setTop(64);
C13.iC();C6.aH("ITEMDOUBLECLICK",this,e2);C13.aH("NAVIGATING",this,e3);this.setHeight(545);this.setWidth(961);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015BLUE"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",20);r.ln=20;{r.ln=22;this.mthPREPARE();}r.ln=24;r.e();};cO.mthPREPARE=function(){var m=this.REF,r=l.mR(this,cO,"Prepare",26);var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();r.ln=26;{r.ln=30;C0.mthEXECUTE({},{LIST:{"EMPLOYEES":m.LIST}});
}r.ln=32;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemDoubleClick",34);r.ln=34;{r.ln=36;cO.mthSHOWITEM.call(this,m.LIST.getCurrentItem());}r.ln=38;r.e();};cO.mthSHOWITEM=function(p0){var f=this.FLD.XDEMOWEBP,m=this.REF,r=l.mR(this,cO,"ShowItem",40);var P0=r.cPD("LISTITEM");P0=p0;r.ln=40;{r.ln=43;f.F6.set(lIO=m.LIST.getEntry(P0.getEntry()));r.ln=45;this.srACTIVEITEM(P0);r.ln=47;m.POPUP.mthSHOWDETAILS(f.F5.get(),f.F4.get(),f.F2.get(),f.F1.get());}r.ln=49;r.e();};function e3(sender,Ps)
{var r=l.eR(this,cO,"#Popup.Navigating",51);var P0=Ps.r("ITEM");r.ln=51;{r.ln=53;cO.mthNAVIGATETO.call(this,P0.get());}r.ln=55;r.e();};cO.mthNAVIGATETO=function(p0){var m=this.REF,r=l.mR(this,cO,"NavigateTo",57);var P0=r.cP("ITEM","PRIM_STR");P0.set(p0);r.ln=57;{r.ln=60;{var v1=P0.get();if(r.ln=62,l.s.eq(v1,"FIRST")){r.ln=64;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(1));}else if(r.ln=66,l.s.eq(v1,"PREVIOUS")){r.ln=68;if(l.n.eq(m.ACTIVEITEM.getPosition(),1)){r.ln=70;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(m.LIST.getItems().getItemCount()));
}else{r.ln=74;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(l.sub(m.ACTIVEITEM.getPosition(),1)));}}else if(r.ln=78,l.s.eq(v1,"NEXT")){r.ln=80;if(l.n.eq(m.ACTIVEITEM.getPosition(),m.LIST.getItems().getItemCount())){r.ln=82;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(1));}else{r.ln=86;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(l.add(m.ACTIVEITEM.getPosition(),1)));}}else if(r.ln=90,l.s.eq(v1,"LAST")){r.ln=92;cO.mthSHOWITEM.call(this,m.LIST.getItems().get(m.LIST.getItems().getItemCount()));
}r.ln=94;}}r.ln=96;r.e();};{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F3.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");
C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F3.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}cO.srACTIVEITEM=function(rn){this.sR("ACTIVEITEM",rn);};},{rc:["XDEMO_58"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_LABL","PRIM_WEB.DataRequest","PRIM_PKLT"],
dp:["PRIM_LIST.ListItem"]});