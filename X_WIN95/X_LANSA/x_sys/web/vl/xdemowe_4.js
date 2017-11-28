﻿LANSA.addComponent({id:"XDEMOWE_4",nm:"xDemoWebList",ot:"wp",tp:"Web Page",de:"List Control (Prim_List)",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XDEPTDESC",an:"xDepartmentDescription",
ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,
co:function(){cO.aN.call(this);var f=this.aF("XDEMOWE_4",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("LIST","PRIM_LIST");var C5=this.cR("COLUMNBUTTON1","PRIM_LIST","Button");var C6=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C7=this.cR("COLUMNIMAGE","PRIM_LIST","Image");var C8=this.cR("COLUMNXEMPLOYEEIDENTIFICATION","PRIM_LIST","String");var C9=this.cR("COLUMNXEMPLOYEESURNAME","PRIM_LIST","String");
var C10=this.cR("COLUMNGIVENAME","PRIM_LIST","String");var C11=this.cR("COLUMNDEPTDESC","PRIM_LIST","String");var C12=this.cR("COLUMNADDRESS","PRIM_LIST","Part");var C13=this.cR("COLUMNCHECKBOX","PRIM_LIST","CheckBox");var C14=this.cR("COLUMNCHECKBOX2","PRIM_LIST","CheckBox");var C15=this.cR("COLUMNCHECKBOX3","PRIM_LIST","CheckBox");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setDisplayPosition(1);
C4.setHeight(800);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(1);C4.setTop(0);C4.setWidth(1200);C4.setRowHeight(46);C4.setRowResize(true);C4.setSelectionStyle("ALL");C4.setCheckBoxes(true);C4.setColumnLines(false);C4.setRowLines(false);C4.setRowSizing("INDIVIDUAL");C4.iC();C5.setColumnWidth(94);C5.setDisplayPosition(10);C5.setParent(C4);C5.setCellSizing("NONE");C5.setCellWidth(80);C5.setCaption("Button");C5.iC();C6.setColumn(C3);C6.setManage(C4);C6.setParent(C1);C6.setRow(C2);C6.iC();C7.setColumnWidth(69);
C7.setDisplayPosition(1);C7.setParent(C4);C7.setImageSizing("BESTFIT");C7.setCellMarginBottom(2);C7.setCellMarginLeft(2);C7.setCellMarginRight(2);C7.setCellMarginTop(2);C7.iC();C8.setDisplayPosition(2);C8.setParent(C4);C8.setSource(f.F1);C8.setColumnCaption("Emp #");C8.setColumnWidth(78);C8.setSortOnClick(true);C8.setColumnCaptionType("CAPTION");C8.iC();C9.setDisplayPosition(3);C9.setParent(C4);C9.setSource(f.F2);C9.setSortOnClick(true);C9.iC();C10.setDisplayPosition(4);C10.setParent(C4);C10.setSource(f.F3);
C10.setSortOnClick(true);C10.setColumnWidth(161);C10.iC();C11.setDisplayPosition(5);C11.setParent(C4);C11.setSource(f.F4);C11.setColumnWidth(166);C11.setSortOnClick(true);C11.iC();C12.setDisplayPosition(6);C12.setParent(C4);C12.setDesign("XDEMOWEB");C12.setColumnWidth(157);C12.setColumnCaption("Address");C12.iC();C13.setColumnWidth(22);C13.setDisplayPosition(8);C13.setParent(C4);C13.iC();C14.setColumnWidth(22);C14.setDisplayPosition(7);C14.setParent(C4);C14.setColumnReadOnly(true);C14.iC();C15.setColumnWidth(22);
C15.setDisplayPosition(9);C15.setParent(C4);C15.setColumnReadOnly(true);C15.iC();C0.aH("PREPARED",this,e1);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var f=this.FLD.XDEMOWE_4,m=this.REF,r=l.eR(this,cO,"#gData.Prepared",29);r.ln=29;{r.ln=32;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=35;f.F1.set(EMPLOYEE.getID());r.ln=36;f.F2.set(EMPLOYEE.getSURNAME());r.ln=37;f.F3.set(EMPLOYEE.getGIVENNAME());r.ln=38;
f.F4.set(EMPLOYEE.getDEPARTMENT().getDESCRIPTION());r.ln=40;m.LIST.addEntry();r.ln=43;m.COLUMNIMAGE.getCurrentItem().setImage(EMPLOYEE.getTHUMBNAIL());r.ln=46;m.COLUMNIMAGE.getCurrentItem().setHint(f.F2.get());r.ln=47;m.COLUMNIMAGE.getCurrentItem().setHintTitle(f.F3.get());r.ln=51;m.LIST.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=53;}l1.end();r.dR("EMPLOYEE");}}r.ln=55;r.e();};},{rc:["XDEMO_30","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LIST","PRIM_LIST.Button","PRIM_TBLO.Item","PRIM_LIST.Image","PRIM_LIST.String","PRIM_LIST.Part","PRIM_LIST.CheckBox"]
});