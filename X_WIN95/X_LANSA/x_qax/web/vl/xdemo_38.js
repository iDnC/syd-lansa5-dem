﻿LANSA.addComponent({id:"XDEMO_38",nm:"xDemoWebDataEntryGender",ot:"rp",tp:"Reusable Part",de:"Gender Dropdown",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOVALU",an:"xDemoValue",ft:"N",ln:256,dc:0,lb:"Generic Alphanu",h1:"Generic",h2:"Alphanumeric",h3:"Value",de:"Generic Alphanumeric Value",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],
h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_LIST.IListCellDesign"],fd:Fd,mt:{OnAdd:{ps:{"ListItem":{pt:"i"}}},OnUpdate:{ps:{"ListItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_38",Fd);var C0=this.cR("STYLE2","PRIM_VS","Style");
var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("DROPDOWN","XDEMO_25");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C2);C4.setManage(C5);C4.setParent(C1);C4.setRow(C3);C4.iC();C5.setHeight(41);
C5.setParent(this);C5.setWidth(249);C5.setStyle(C0);C5.iC();C5.aH("ITEMGOTFOCUS",this,e2);this.setDisplayPosition(1);this.setHeight(41);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(249);this.setLayoutManager(C1);this.aH("CREATEINSTANCE",this,e1);this.aLF({"XGENDER":f.F2});}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",16);r.ln=16;{r.ln=18;m.DROPDOWN.mthADD("Male","Male");r.ln=19;m.DROPDOWN.mthADD("Female","Female");r.ln=20;m.DROPDOWN.mthADD("NoDisclose","Not Disclosed");
r.ln=23;m.DROPDOWN.setEMBEDDEDINLIST(true);}r.ln=25;r.e();};cO.mthONADD=function(p0){var f=this.FLD.XDEMO_38,m=this.REF,r=l.mR(this,cO,"OnAdd",27);var P0=r.cPD("LISTITEM");P0=p0;r.ln=27;{r.ln=29;m.DROPDOWN.mthFIND(f.F2.get());}r.ln=31;r.e();};cO.mthONUPDATE=function(p0){var f=this.FLD.XDEMO_38,m=this.REF,r=l.mR(this,cO,"OnUpdate",33);var P0=r.cPD("LISTITEM");P0=p0;r.ln=33;{r.ln=35;m.DROPDOWN.mthFIND(f.F2.get());}r.ln=37;r.e();};function e2(sender,Ps){var f=this.FLD.XDEMO_38,r=l.eR(this,cO,"#DropDown.ItemGotFocus",39);
var P0=Ps.r("VALUE");r.ln=39;{r.ln=41;f.F2.set(P0.get());}r.ln=43;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOVALU"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");
C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XDEMO_25"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FLD","PRIM_PKLT"]});