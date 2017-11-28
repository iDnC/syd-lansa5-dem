﻿LANSA.addComponent({id:"XDEMOW_20",nm:"xDemoWebMaintenanceFrameEditor",ot:"wp",tp:"Web Page",de:"Editing in a Frame Editor",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.59"),c2=l.cDec(".94");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",
ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],
h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F6:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],
dv:"",ia:["FE","LC"]},F8:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],
dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F13:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],
h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F14:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F15:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],
dv:0,ia:["FE","RB"]},F16:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F17:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],
h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F19:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F20:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F21:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{LoadEmployee:{ps:{"EmployeeNumber":{pt:"i"}}},Update:{},Save:{}},co:function(){cO.aN.call(this);this.aF("XDEMOW_20",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("MESSAGESITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");
var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");
var C18=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM15","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM16","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM17","PRIM_TBLO","Item");var C23=this.cR("IMAGE","PRIM_IMAG");var C24=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C25=this.cR("STYLE_2","PRIM_VS","Style");var C26=this.cR("BRUSH","PRIM_VS","SolidBrush");var C27=this.cR("COLUMNDIVIDER","PRIM_TBLO","ColumnDivider");var C28=this.cR("TITLE","PRIM_LABL");
var C29=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C30=this.cR("COLUMN_5","PRIM_TBLO","Column");var C31=this.cR("SAVE","PRIM_SPBN");var C32=this.cR("LAYOUTITEM_17","PRIM_TBLO","Item");var C33=this.cR("CLOSE","PRIM_SPBN");var C34=this.cR("LAYOUTITEM_18","PRIM_TBLO","Item");var C35=this.cR("MESSAGES","XDEMO_23");var C36=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C37=this.cF("XEMPLOYEETITLE",Fd.F2.VISUALPICKLIST);var C38=this.cF("XEMPLOYEESURNAME",Fd.F3.VISUALEDIT);var C39=this.cF("XEMPLOYEEGIVENNAMES",Fd.F4.VISUALEDIT);
var C40=this.cF("XEMPLOYEEDATEOFBIRTH",Fd.F5.VISUALDATE);var C41=this.cF("XEMPLOYEEGENDER",Fd.F6.VISUALPICKLIST);var C42=this.cF("XEMPLOYEESTREET",Fd.F7.VISUALEDIT);var C43=this.cF("XEMPLOYEECITY",Fd.F8.VISUALEDIT);var C44=this.cF("XEMPLOYEESTATE",Fd.F9.VISUALEDIT);var C45=this.cF("XEMPLOYEEPOSTALCODE",Fd.F10.VISUALEDIT);var C46=this.cF("XEMPLOYEECOUNTRY",Fd.F11.VISUALEDIT);var C47=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F12.VISUALEDIT);var C48=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F13.VISUALEDIT);
var C49=this.cF("XEMPLOYEEMOBILEPHONE",Fd.F14.VISUALEDIT);var C50=this.cF("XEMPLOYEESALARY",Fd.F15.VISUALEDIT);var C51=this.cF("XEMPLOYEESTARTDATE",Fd.F16.VISUALDATE);var C52=this.cF("XEMPLOYEETERMINATIONDATE",Fd.F17.VISUALDATE);C0.setCursor("HAND");C0.iC();C1.setDividerStyle("GAP");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(45);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.setWidth(c2);
C4.iC();C5.setColumn(C4);C5.setManage(C35);C5.setParent(C1);C5.setRow(C2);C5.setSizing("NONE");C5.setColumnSpan(3);C5.setRowSpan(2);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C4);C6.setManage(C36);C6.setParent(C1);C6.setRow(C3);C6.setSizing("NONE");C6.setFlow("DOWN");C6.setMarginLeft(4);C6.setMarginTop(4);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C4);C7.setManage(C37);C7.setParent(C1);C7.setRow(C3);C7.setSizing("NONE");C7.setFlow("DOWN");C7.setMarginLeft(4);C7.setMarginTop(4);C7.iC();C8.setAlignment("TOPLEFT");
C8.setColumn(C4);C8.setManage(C38);C8.setParent(C1);C8.setRow(C3);C8.setSizing("NONE");C8.setFlow("DOWN");C8.setMarginLeft(4);C8.setMarginTop(4);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C4);C9.setManage(C39);C9.setParent(C1);C9.setRow(C3);C9.setSizing("NONE");C9.setFlow("DOWN");C9.setMarginLeft(4);C9.setMarginTop(4);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C4);C10.setManage(C40);C10.setParent(C1);C10.setRow(C3);C10.setSizing("NONE");C10.setFlow("DOWN");C10.setMarginLeft(4);C10.setMarginTop(4);
C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C4);C11.setManage(C41);C11.setParent(C1);C11.setRow(C3);C11.setSizing("NONE");C11.setFlow("DOWN");C11.setMarginLeft(4);C11.setMarginTop(4);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C4);C12.setManage(C42);C12.setParent(C1);C12.setRow(C3);C12.setSizing("NONE");C12.setFlow("DOWN");C12.setMarginLeft(4);C12.setMarginTop(4);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C4);C13.setManage(C43);C13.setParent(C1);C13.setRow(C3);C13.setSizing("NONE");
C13.setFlow("DOWN");C13.setMarginLeft(4);C13.setMarginTop(4);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C4);C14.setManage(C44);C14.setParent(C1);C14.setRow(C3);C14.setSizing("NONE");C14.setFlow("DOWN");C14.setMarginLeft(4);C14.setMarginTop(4);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C4);C15.setManage(C45);C15.setParent(C1);C15.setRow(C3);C15.setSizing("NONE");C15.setFlow("DOWN");C15.setMarginLeft(4);C15.setMarginTop(4);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C4);C16.setManage(C46);
C16.setParent(C1);C16.setRow(C3);C16.setSizing("NONE");C16.setFlow("DOWN");C16.setMarginLeft(4);C16.setMarginTop(4);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C4);C17.setManage(C47);C17.setParent(C1);C17.setRow(C3);C17.setSizing("NONE");C17.setFlow("DOWN");C17.setMarginLeft(4);C17.setMarginTop(4);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C4);C18.setManage(C48);C18.setParent(C1);C18.setRow(C3);C18.setSizing("NONE");C18.setFlow("DOWN");C18.setMarginLeft(4);C18.setMarginTop(4);C18.iC();
C19.setAlignment("TOPLEFT");C19.setColumn(C4);C19.setManage(C49);C19.setParent(C1);C19.setRow(C3);C19.setSizing("NONE");C19.setFlow("DOWN");C19.setMarginLeft(4);C19.setMarginTop(4);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C4);C20.setManage(C50);C20.setParent(C1);C20.setRow(C3);C20.setSizing("NONE");C20.setFlow("DOWN");C20.setMarginLeft(4);C20.setMarginTop(4);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C4);C21.setManage(C51);C21.setParent(C1);C21.setRow(C3);C21.setSizing("NONE");C21.setFlow("DOWN");
C21.setMarginLeft(4);C21.setMarginTop(4);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C4);C22.setManage(C52);C22.setParent(C1);C22.setRow(C3);C22.setSizing("NONE");C22.setFlow("DOWN");C22.setMarginLeft(4);C22.setMarginTop(4);C22.iC();C23.setDisplayPosition(1);C23.setLeft(742);C23.setParent(this);C23.setTabPosition(1);C23.setTabStop(false);C23.setHeight(751);C23.setWidth(456);C23.setTop(47);C23.setImageSizing("BESTFIT");C23.iC();C24.setColumn(C30);C24.setManage(C23);C24.setParent(C1);C24.setRow(C3);
C24.setRowSpan(3);C24.setMarginTop(2);C24.setMarginBottom(2);C24.setMarginLeft(2);C24.setMarginRight(2);C24.iC();C25.setCornerTopLeft(8);C25.setCornerBottomLeft(8);C25.setCornerTopRight(8);C25.setCornerBottomRight(8);C25.setBackgroundBrush(C26);C25.iC();C26.setColor("242:242:242");C26.iC();C27.setDisplayPosition(2);C27.setParent(C1);C27.setWidth(4);C27.setStartRow(C3);C27.iC();C28.setCaption("Loading...");C28.setDisplayPosition(5);C28.setEllipses("WORD");C28.setLeft(2);C28.setParent(this);C28.setTabPosition(2);
C28.setTabStop(false);C28.setTop(2);C28.setVerticalAlignment("CENTER");C28.setHeight(41);C28.setWidth(1196);C28.setMarginLeft(2);C28.setThemeDrawStyle("Heading2+DarkTitle");C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C4);C29.setFlow("DOWN");C29.setManage(C28);C29.setParent(C1);C29.setRow(C2);C29.setMarginTop(2);C29.setMarginBottom(2);C29.setMarginLeft(2);C29.setColumnSpan(6);C29.setMarginRight(2);C29.iC();C30.setDisplayPosition(3);C30.setParent(C1);C30.setWidth(460);C30.setUnits("PIXELS");
C30.iC();C31.setCaption("Save");C31.setDisplayPosition(3);C31.setEllipses("WORD");C31.setLeft(1016);C31.setParent(this);C31.setTabPosition(3);C31.setTabStop(false);C31.setTop(2);C31.setWidth(92);C31.setHeight(41);C31.setThemeDrawStyle("DarkTitle");C31.setStyle(C0);C31.iC();C32.setAlignment("CENTERRIGHT");C32.setColumn(C30);C32.setFlow("LEFT");C32.setManage(C31);C32.setParent(C1);C32.setRow(C2);C32.setSizing("FITTOHEIGHT");C32.setMarginBottom(2);C32.setMarginTop(2);C32.iC();C33.setCaption("Close");
C33.setDisplayPosition(2);C33.setEllipses("WORD");C33.setLeft(1108);C33.setParent(this);C33.setTabPosition(4);C33.setTabStop(false);C33.setTop(2);C33.setWidth(92);C33.setHeight(41);C33.setThemeDrawStyle("DarkTitle");C33.setStyle(C0);C33.iC();C34.setAlignment("CENTERRIGHT");C34.setColumn(C30);C34.setFlow("LEFT");C34.setManage(C33);C34.setParent(C1);C34.setRow(C2);C34.setSizing("FITTOHEIGHT");C34.setMarginBottom(2);C34.setMarginTop(2);C34.iC();C35.setParent(this);C35.setLeft(388);C35.setTop(268);C35.iC();
C36.setDisplayPosition(6);C36.setParent(this);C36.setTabPosition(22);C36.setTop(49);C36.setLeft(4);C36.setHeight(22);C36.setWidth(253);C36.setReadOnly(true);C36.aD();C36.iC();C37.setDisplayPosition(7);C37.setParent(this);C37.setTabPosition(6);C37.setTop(75);C37.setLeft(4);C37.setHeight(22);C37.setWidth(253);C37.aD();C37.iC();C38.setDisplayPosition(8);C38.setParent(this);C38.setTabPosition(7);C38.setTop(101);C38.setLeft(4);C38.setHeight(22);C38.aD();C38.iC();C39.setDisplayPosition(9);C39.setParent(this);
C39.setTabPosition(8);C39.setTop(127);C39.setLeft(4);C39.setHeight(22);C39.aD();C39.iC();C40.setDisplayPosition(10);C40.setParent(this);C40.setTabPosition(9);C40.setTop(153);C40.setLeft(4);C40.setHeight(22);C40.setWidth(253);C40.aD();C40.iC();C41.setDisplayPosition(11);C41.setParent(this);C41.setTabPosition(10);C41.setTop(179);C41.setLeft(4);C41.setMarginLeft(150);C41.setHeight(22);C41.setWidth(253);C41.aD();C41.iC();C42.setDisplayPosition(12);C42.setParent(this);C42.setTabPosition(11);C42.setTop(205);
C42.setLeft(4);C42.setHeight(22);C42.aD();C42.iC();C43.setDisplayPosition(13);C43.setParent(this);C43.setTabPosition(12);C43.setTop(231);C43.setLeft(4);C43.setHeight(22);C43.aD();C43.iC();C44.setDisplayPosition(14);C44.setParent(this);C44.setTabPosition(13);C44.setTop(257);C44.setLeft(4);C44.setHeight(22);C44.aD();C44.iC();C45.setDisplayPosition(15);C45.setParent(this);C45.setTabPosition(14);C45.setTop(283);C45.setLeft(4);C45.setHeight(22);C45.setWidth(325);C45.aD();C45.iC();C46.setDisplayPosition(16);
C46.setParent(this);C46.setTabPosition(15);C46.setTop(309);C46.setLeft(4);C46.setHeight(22);C46.aD();C46.iC();C47.setDisplayPosition(17);C47.setParent(this);C47.setTabPosition(16);C47.setTop(335);C47.setLeft(4);C47.setHeight(22);C47.aD();C47.iC();C48.setDisplayPosition(18);C48.setParent(this);C48.setTabPosition(17);C48.setTop(361);C48.setLeft(4);C48.setMarginLeft(150);C48.setHeight(22);C48.aD();C48.iC();C49.setDisplayPosition(19);C49.setParent(this);C49.setTabPosition(18);C49.setTop(387);C49.setLeft(4);
C49.setHeight(22);C49.aD();C49.iC();C50.setDisplayPosition(20);C50.setParent(this);C50.setTabPosition(19);C50.setTop(413);C50.setLeft(4);C50.setHeight(22);C50.setWidth(325);C50.aD();C50.iC();C51.setDisplayPosition(21);C51.setParent(this);C51.setTabPosition(20);C51.setTop(439);C51.setLeft(4);C51.setHeight(22);C51.aD();C51.iC();C52.setDisplayPosition(22);C52.setParent(this);C52.setTabPosition(21);C52.setTop(465);C52.setLeft(4);C52.setHeight(22);C52.aD();C52.iC();l.WEB().aH("URLCHANGED",this,e1);C31.aH("CLICK",this,e5);
C33.aH("CLICK",this,e6);C38.aH("CHANGED",this,e3);C39.aH("CHANGED",this,e4);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#sys_web.URLChanged",73);r.ln=73;{r.ln=75;{var l1=l.WEB().getURLParameters().cI();while(l1.step()){var PARAMETER=r.sR("PARAMETER",l1.item());r.ln=77;if(l.s.ne(l.s.UpperCase(PARAMETER.getName()),"EMPLOYEE")){continue;}r.ln=79;cO.mthLOADEMPLOYEE.call(this,PARAMETER.getValue());r.ln=81;break;r.ln=83;}l1.end();r.dR("PARAMETER");
}}r.ln=85;r.e();};cO.mthLOADEMPLOYEE=function(p0){var f=this.FLD.XDEMOW_20,m=this.REF,r=l.mR(this,cO,"LoadEmployee",87),mth=r;var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMOW_84","GETEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=87;{r.ln=92;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":m.XEMPLOYEETITLE,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH,"XGENDER":m.XEMPLOYEEGENDER,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":m.XEMPLOYEECOUNTRY,"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE,"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE,"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE,"XSALARY":m.XEMPLOYEESALARY,"XSTARTDTE":m.XEMPLOYEESTARTDATE,"XTERMDATE":m.XEMPLOYEETERMINATIONDATE,"XDEPTMENT":f.F18,"XEMPTHM":f.F19,"XEMPIMG":f.F20}});
}r.ln=102;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.Completed",94,mth);r.ln=94;{r.ln=96;m.IMAGE.setFileName(f.F20.get());r.ln=98;this.mthUPDATE();}r.ln=100;r.e();}};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",104);r.ln=104;{r.ln=106;this.setCaption(l.s.Substitute("&1 &2 (&3)",m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEIDENTIFICATION.get()));m.TITLE.set(l.s.Substitute("&1 &2 (&3)",m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEIDENTIFICATION.get()));
}r.ln=108;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#xEmployeeSurname.Changed",110);r.ln=110;{r.ln=112;this.mthUPDATE();}r.ln=114;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#xEmployeeGivenNames.Changed",116);r.ln=116;{r.ln=118;this.mthUPDATE();}r.ln=120;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Save.Click",122);r.ln=122;{r.ln=124;this.mthSAVE();}r.ln=126;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Close.Click",128);r.ln=128;{r.ln=130;l.WEB().getLocalStorage().mthADD("CLOSEEMPLOYEE",m.XEMPLOYEEIDENTIFICATION.get());
}r.ln=132;r.e();};cO.mthSAVE=function(){var f=this.FLD.XDEMOW_20,m=this.REF,r=l.mR(this,cO,"Save",134),mth=r;var C0=r.cDR("SAVEEMPLOYEE","XDEMOW_84","SAVEEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e7);r.ln=134;{r.ln=138;l.MSGQ().mthCLEARALL();r.ln=140;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get(),"XEMPTITLE":m.XEMPLOYEETITLE.get(),"XSURNAME":m.XEMPLOYEESURNAME.get(),"XGIVENAME":m.XEMPLOYEEGIVENNAMES.get(),"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH.get(),"XGENDER":m.XEMPLOYEEGENDER.get(),"XSTREET":m.XEMPLOYEESTREET.get(),"XCITY":m.XEMPLOYEECITY.get(),"XSTATE":m.XEMPLOYEESTATE.get(),"XPOSTCODE":m.XEMPLOYEEPOSTALCODE.get(),"XCOUNTRY":m.XEMPLOYEECOUNTRY.get(),"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE.get(),"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE.get(),"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE.get(),"XSALARY":m.XEMPLOYEESALARY.get(),"XSTARTDTE":m.XEMPLOYEESTARTDATE.get(),"XTERMDATE":m.XEMPLOYEETERMINATIONDATE.get(),"XDEPTMENT":f.F18.get(),"XEMPTHM":f.F19.get(),"XEMPIMG":f.F20.get()},sm:"M"},{FLD:{"IO$STS":f.F21}});
}r.ln=156;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#SaveEmployee.Completed",142,mth);r.ln=142;{r.ln=144;if(l.s.eq(f.F21.get(),"OK")){r.ln=146;l.WEB().getLocalStorage().mthADD("UPDATEEMPLOYEE",m.XEMPLOYEEIDENTIFICATION.get());}else{r.ln=150;m.MESSAGES.mthSHOW();}}r.ln=154;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);
this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");
C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});Fd.F2.VISUALPICKLIST=function(){this.aN.call(this,new Fd.F2.Dc());this.setAppearance("DROPDOWNLIST");this.setHeight(19);this.setComponentVersion(1);this.setWidth(251);
this.setFixedHeight(false);};l.cFC({co:Fd.F2.VISUALPICKLIST,an:"PRIM_EVPL",fn:"XEMPTITLE",cn:"VisualPicklist"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});
Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XEMPDOB"});Fd.F5.VISUALDATE=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALDATE,an:"PRIM_EVDT",fn:"XEMPDOB",cn:"VisualDate"});
}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F6.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");
};l.cFC({co:Fd.F6.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});Fd.F6.VISUALPICKLIST=function(){this.aN.call(this,new Fd.F6.Dc());this.setAppearance("DROPDOWNLIST");this.setComponentVersion(1);this.setFixedHeight(false);this.setHeight(20);this.setMarginLeft(120);this.setWidth(237);};l.cFC({co:Fd.F6.VISUALPICKLIST,an:"PRIM_EVPL",fn:"XGENDER",cn:"VisualPicklist"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());
this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F9.Dc=function()
{this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F9.VISUALEDIT=function(){this.aN.call(this,new Fd.F9.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F9.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F10.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XCOUNTRY"});Fd.F11.VISUALEDIT=function(){this.aN.call(this,new Fd.F11.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F11.VISUALEDIT,an:"PRIM_EVEF",fn:"XCOUNTRY",cn:"VisualEdit"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);
};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F12.VISUALEDIT=function(){this.aN.call(this,new Fd.F12.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F12.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEHME",cn:"VisualEdit"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F13.VISUALEDIT=function(){this.aN.call(this,new Fd.F13.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);
this.setComponentVersion(1);this.setMarginLeft(188);};l.cFC({co:Fd.F13.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEBUS",cn:"VisualEdit"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XPHONEMOB"});Fd.F14.VISUALEDIT=function(){this.aN.call(this,new Fd.F14.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F14.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEMOB",cn:"VisualEdit"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);
};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F15.VISUALEDIT=function(){this.aN.call(this,new Fd.F15.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(293);this.setComponentVersion(1);};l.cFC({co:Fd.F15.VISUALEDIT,an:"PRIM_EVEF",fn:"XSALARY",cn:"VisualEdit"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});Fd.F16.VISUALDATE=function(){this.aN.call(this,new Fd.F16.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);
this.setComponentVersion(1);};l.cFC({co:Fd.F16.VISUALDATE,an:"PRIM_EVDT",fn:"XSTARTDTE",cn:"VisualDate"});}{Fd.F17.Dc=function(){this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});Fd.F17.VISUALDATE=function(){this.aN.call(this,new Fd.F17.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F17.VISUALDATE,an:"PRIM_EVDT",fn:"XTERMDATE",cn:"VisualDate"});}},{rc:["XDEMO_23","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_IMAG","PRIM_VS.SolidBrush","PRIM_TBLO.ColumnDivider","PRIM_LABL","PRIM_SPBN","PRIM_EVEF","PRIM_PKLT","PRIM_EVPL","PRIM_EVDT","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_MSGQ"]
});