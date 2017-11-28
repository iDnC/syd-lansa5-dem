﻿LANSA.addComponent({id:"XDEMO_70",nm:"xDemoWebDesignsUDCTreeDesign",ot:"rp",tp:"Reusable Part",de:"Designs and UDC Tree Design",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"FULLNAME",ft:"A",ln:41,dc:0,ks:"O",lb:{"ENG":"Employee name","FRA":"Nom employE","JPN":"社員姓名","LLL":"Employee name"}[cL],h1:{"ENG":"Employee name","FRA":"Nom de l´employE","JPN":"社員姓名","LLL":"Employee name"}[cL],h2:{"ENG":"-------------","FRA":"----------------","JPN":" ","LLL":"-------------"}[cL],
h3:" ",de:{"ENG":"Employee full name","FRA":"Nom complet de l´employE","JPN":"社員姓名","LLL":"Employee full name"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]},F3:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F4:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F5:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F6:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XCITY",an:"xEmployeeCity",
ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F9:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F11:{nm:"XGIVENAME",an:"xEmployeeGivenNames",
ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],
h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F13:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F14:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
dv:"",ia:["FE","LC"]},F15:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F16:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F17:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],dv:0,ia:["FE","RB"]},F18:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],
dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F20:{nm:"XDEPTMENT",
an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F21:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F22:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],fd:Fd,mt:{OnAdd:{ps:{"TreeItem":{pt:"i"}}},ApplyDesign:{ps:{"Design":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_70",Fd);var C0=this.cR("LAYOUTLARGE","PRIM_TBLO");var C1=this.cR("ROW1","PRIM_TBLO","Row");
var C2=this.cR("ROW2","PRIM_TBLO","Row");var C3=this.cR("ROW3","PRIM_TBLO","Row");var C4=this.cR("ROW4","PRIM_TBLO","Row");var C5=this.cR("COLUMN1","PRIM_TBLO","Column");var C6=this.cR("COLUMN2","PRIM_TBLO","Column");var C7=this.cR("COLUMN3","PRIM_TBLO","Column");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");
var C13=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C17=this.cR("LAYOUTSMALL","PRIM_TBLO");var C18=this.cR("COLUMN4","PRIM_TBLO","Column");var C19=this.cR("COLUMN5","PRIM_TBLO","Column");var C20=this.cR("ROW5","PRIM_TBLO","Row");var C21=this.cR("ROW6","PRIM_TBLO","Row");var C22=this.cR("ROW7","PRIM_TBLO","Row");var C23=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");
var C24=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C27=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C28=this.cR("ROW_4","PRIM_TBLO","Row");var C29=this.cF("FULLNAME",Fd.F1.VISUALEDIT);var C30=this.cF("EMAIL",Fd.F2.VISUALEDIT);var C31=this.cF("ADDRESSANDPOSTCODE",Fd.F2.VISUALEDIT);var C32=this.cF("XEMPLOYEEMOBILEPHONE",Fd.F3.VISUALEDIT);var C33=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F4.VISUALEDIT);
var C34=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F5.VISUALEDIT);var C35=this.cF("XEMPLOYEESTREET",Fd.F6.VISUALEDIT);var C36=this.cF("XEMPLOYEECITY",Fd.F7.VISUALEDIT);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.iC();C3.setDisplayPosition(4);C3.setParent(C0);C3.iC();C4.setDisplayPosition(5);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setUnits("PIXELS");C5.setWidth(50);C5.iC();C6.setDisplayPosition(2);C6.setParent(C0);C6.setUnits("PIXELS");
C6.setWidth(438);C6.iC();C7.setDisplayPosition(3);C7.setParent(C0);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C6);C8.setManage(C29);C8.setParent(C0);C8.setRow(C1);C8.setColumnSpan(2);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C6);C9.setManage(C30);C9.setParent(C0);C9.setRow(C2);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C7);C10.setManage(C31);C10.setParent(C0);C10.setRow(C3);C10.setMarginLeft(10);C10.iC();C11.setColumn(C6);C11.setManage(C32);C11.setParent(C0);C11.setRow(C28);C11.iC();
C12.setColumn(C6);C12.setManage(C33);C12.setParent(C0);C12.setRow(C4);C12.iC();C13.setColumn(C6);C13.setManage(C34);C13.setParent(C0);C13.setRow(C3);C13.iC();C14.setColumn(C7);C14.setManage(C35);C14.setParent(C0);C14.setRow(C28);C14.setMarginLeft(10);C14.iC();C15.setColumn(C7);C15.setManage(C36);C15.setParent(C0);C15.setRow(C2);C15.setMarginLeft(10);C15.iC();C16.setColumn(C5);C16.setManage(C27);C16.setParent(C0);C16.setRow(C1);C16.setSizing("FITTOWIDTH");C16.setAlignment("TOPLEFT");C16.setMarginLeft(4);
C16.setMarginTop(4);C16.setMarginRight(4);C16.iC();C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setWidth(50);C18.setUnits("PIXELS");C18.iC();C19.setDisplayPosition(2);C19.setParent(C17);C19.iC();C20.setDisplayPosition(1);C20.setParent(C17);C20.iC();C21.setDisplayPosition(2);C21.setParent(C17);C21.iC();C22.setDisplayPosition(3);C22.setParent(C17);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C18);C23.setManage(C27);C23.setParent(C17);C23.setRow(C20);C23.setSizing("FITTOWIDTH");C23.setMarginLeft(4);
C23.setMarginTop(4);C23.setMarginRight(4);C23.iC();C24.setColumn(C19);C24.setManage(C30);C24.setParent(C17);C24.setRow(C22);C24.setRowSpan(3);C24.iC();C25.setColumn(C19);C25.setManage(C32);C25.setParent(C17);C25.setRow(C21);C25.iC();C26.setColumn(C19);C26.setManage(C29);C26.setParent(C17);C26.setRow(C20);C26.iC();C27.setDisplayPosition(1);C27.setParent(this);C27.setTabPosition(1);C27.setTop(4);C27.setLeft(4);C27.setImageSizing("BESTFIT");C27.setWidth(42);C27.iC();C28.setDisplayPosition(2);C28.setParent(C0);
C28.iC();C29.setDisplayPosition(2);C29.setLeft(50);C29.setParent(this);C29.setTabPosition(2);C29.setHeight(25);C29.setWidth(575);C29.setCaption("Name");C29.setLabelType("CAPTION");C29.setDisplayOnly(true);C29.setThemeDrawStyle("Heading2");C29.setMarginLeft(0);C29.aD();C29.iC();C30.setDisplayPosition(3);C30.setParent(this);C30.setTabPosition(5);C30.setTop(50);C30.setCaption("Email");C30.setLabelType("CAPTION");C30.setHeight(25);C30.setWidth(438);C30.setDisplayOnly(true);C30.setLeft(50);C30.aD();C30.iC();
C31.setDisplayPosition(4);C31.setLeft(498);C31.setParent(this);C31.setTabPosition(3);C31.setTop(75);C31.setLabelType("CAPTION");C31.setHeight(25);C31.setWidth(127);C31.setDisplayOnly(true);C31.setMarginLeft(80);C31.aD();C31.iC();C32.setDisplayPosition(5);C32.setLeft(50);C32.setParent(this);C32.setTabPosition(4);C32.setHeight(25);C32.setWidth(438);C32.setDisplayOnly(true);C32.setTop(25);C32.aD();C32.iC();C33.setDisplayPosition(6);C33.setLeft(50);C33.setParent(this);C33.setTabPosition(6);C33.setTop(100);
C33.setHeight(25);C33.setWidth(438);C33.setMarginLeft(150);C33.setDisplayOnly(true);C33.aD();C33.iC();C34.setDisplayPosition(7);C34.setLeft(50);C34.setParent(this);C34.setTabPosition(7);C34.setTop(75);C34.setHeight(25);C34.setWidth(438);C34.setDisplayOnly(true);C34.aD();C34.iC();C35.setDisplayPosition(8);C35.setLeft(498);C35.setParent(this);C35.setTabPosition(8);C35.setTop(25);C35.setHeight(25);C35.setWidth(127);C35.setDisplayOnly(true);C35.setMarginLeft(80);C35.aD();C35.iC();C36.setDisplayPosition(9);
C36.setLeft(498);C36.setParent(this);C36.setTabPosition(9);C36.setTop(50);C36.setHeight(25);C36.setWidth(127);C36.setDisplayOnly(true);C36.setMarginLeft(80);C36.aD();C36.iC();this.setHeight(125);this.setWidth(625);this.setLayoutManager(C0);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setThemeDrawStyle("ListItem");this.aH("DESIGNCHANGED",this,e1);this.aLF({"XEMPLOYID":f.F8,"XEMPTITLE":f.F9,"XSURNAME":f.F10,"XGIVENAME":f.F11,"XEMPDOB":f.F12,"XGENDER":f.F13,"XSTREET":C35,"XCITY":C36,"XSTATE":f.F14,"XPOSTCODE":f.F15,"XCOUNTRY":f.F16,"XPHONEHME":C34,"XPHONEBUS":C33,"XPHONEMOB":C32,"XSALARY":f.F17,"XSTARTDTE":f.F18,"XTERMDATE":f.F19,"XDEPTMENT":f.F20,"XEMPTHM":f.F21,"XEMPIMG":f.F22});
}});cO.mthONADD=function(p0){var f=this.FLD.XDEMO_70,m=this.REF,r=l.mR(this,cO,"OnAdd",48);var P0=r.cPD("TREEITEM");P0=p0;r.ln=48;{r.ln=53;m.FULLNAME.set(l.s.Substitute("&1 &2 (&3)",f.F11.get(),f.F10.get(),f.F8.get()));r.ln=54;m.ADDRESSANDPOSTCODE.set(l.s.Substitute("&1, &2",f.F14.get(),f.F15.get()));r.ln=55;m.EMAIL.set(l.s.LowerCase(l.s.Substitute("&1.&2@acompany.com",f.F11.get(),f.F10.get())));r.ln=56;m.EMPLOYEEIMAGE.setFileName(f.F21.get());r.ln=59;cO.mthAPPLYDESIGN.call(this,l.cast(l.WEB().getWebPage(),"XDEMOW_95").getACTIVEDESIGN());
}r.ln=64;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Com_Owner.DesignChanged",66);var P0=Ps.r("DESIGN");r.ln=66;{r.ln=68;cO.mthAPPLYDESIGN.call(this,P0);}r.ln=70;r.e();};cO.mthAPPLYDESIGN=function(p0){var m=this.REF,r=l.mR(this,cO,"ApplyDesign",72);var P0=r.cPD("DESIGN");P0=p0;r.ln=72;{r.ln=75;if((P0==null)){r.ln=77;m.XEMPLOYEEBUSINESSTELEPHONE.setVisible(true);m.XEMPLOYEECITY.setVisible(true);m.XEMPLOYEEHOMETELEPHONE.setVisible(true);m.ADDRESSANDPOSTCODE.setVisible(true);m.XEMPLOYEESTREET.setVisible(true);
r.ln=79;this.setHeight(125);r.ln=81;this.setLayoutManager(m.LAYOUTLARGE);}else{r.ln=85;m.XEMPLOYEEBUSINESSTELEPHONE.setVisible(false);m.XEMPLOYEECITY.setVisible(false);m.XEMPLOYEEHOMETELEPHONE.setVisible(false);m.ADDRESSANDPOSTCODE.setVisible(false);m.XEMPLOYEESTREET.setVisible(false);r.ln=87;this.setHeight(75);r.ln=89;this.setLayoutManager(m.LAYOUTSMALL);}}r.ln=93;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"FULLNAME"});Fd.F1.VISUALEDIT=function(){
this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(673);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"FULLNAME",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOUNIC"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(951);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOUNIC",cn:"VisualEdit"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XPHONEMOB"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEMOB",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);this.setMarginLeft(188);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEBUS",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEHME",cn:"VisualEdit"});
}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F9.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");
C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F9.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F13.pl=function()
{this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F13.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_IMAG","PRIM_EVEF","PRIM_PKLT"]
});