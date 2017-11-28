﻿LANSA.addComponent({id:"XEDMAIN",nm:"XEDMain",ot:"wp",tp:"Web Page",de:"Employee Editor: Desktop",tl:14020000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xedbm003.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept","JPN":"部門記述","LLL":"Department Desc"}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門記述","LLL":"Department"}[cL],
h2:{"ENG":"Description","FRA":"Département","JPN":"記述","LLL":"Description"}[cL],h3:{"ENG":"Description","FRA":"Employé","JPN":" ","LLL":"Description"}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門記述","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",
an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],
h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
dv:"",ia:["FE","LC"]},F12:{nm:"INCLUDEEMPLOYEEINSEARCHRESULTS",ft:"B",ln:1,dc:0,lb:"IncludeEmployeeInSearchResults",h1:"IncludeEmployeeInSearchResults",h2:"",h3:"",de:"IncludeEmployeeInSearchResults",dv:false},F13:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],
h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F14:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],
dv:"Male",ia:["FE","LC"]},F15:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F16:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",
ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F17:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F18:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],
h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],dv:0,ia:["FE","RB"]},F19:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F20:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],
dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F22:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,
lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F23:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],
h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{LoadEmployees:{},UpdateEmployeeInList:{ps:{"ID":{pt:"i"}}},DeleteEmployeeFromList:{ps:{"ID":{pt:"i"}}}},co:function(){cO.aN.call(this);
var f=this.aF("XEDMAIN",Fd);var C0=this.cR("STYLEBACKGROUND","PRIM_VS","Style");var C1=this.cR("STYLESEARCH","PRIM_VS","Style");var C2=this.cR("STYLEWHITEBACKGROUND","PRIM_VS","Style");var C3=this.cR("STYLEADDBUTTON","PRIM_VS","Style");var C4=this.cR("TABLELAYOUTMAIN","PRIM_TBLO");var C5=this.cR("COLUMN1","PRIM_TBLO","Column");var C6=this.cR("COLUMN2","PRIM_TBLO","Column");var C7=this.cR("COLUMN3","PRIM_TBLO","Column");var C8=this.cR("ROW1","PRIM_TBLO","Row");var C9=this.cR("ROW2","PRIM_TBLO","Row");
var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C12=this.cR("TABLELAYOUTHEADERPANEL","PRIM_TBLO");var C13=this.cR("COLUMN5","PRIM_TBLO","Column");var C14=this.cR("COLUMN4","PRIM_TBLO","Column");var C15=this.cR("COLUMN6","PRIM_TBLO","Column");var C16=this.cR("ROW3","PRIM_TBLO","Row");var C17=this.cR("IMAGE1ITEM1","PRIM_TBLO","Item");var C18=this.cR("LABEL1ITEM1","PRIM_TBLO","Item");var C19=this.cR("IMAGE2ITEM1","PRIM_TBLO","Item");var C20=this.cR("SEARCHVALUEITEM2","PRIM_TBLO","Item");
var C21=this.cR("HEADERPANEL","PRIM_PANL");var C22=this.cR("HEADERTEXT","PRIM_LABL");var C23=this.cR("EMPLOYEESLISTVIEW","PRIM_LIST");var C24=this.cR("SEARCHVALUE","PRIM_EDIT");var C25=this.cR("ADDBUTTON","PRIM_LABL");var C26=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");var C27=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C28=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C29=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C30=this.cR("COLUMNXEMPDEPT1","PRIM_LIST","String");
var C31=this.cR("COLUMNXEMPTHM1","PRIM_LIST","Image");var C32=this.cR("COLUMNXEMPADDR1","PRIM_LIST","Part");var C33=this.cR("LOGO","PRIM_IMAG");var C34=this.cR("EMPLOYEEEDITOR","XEDEDIT");C0.setNormBackColor("THEME50");C0.iC();C1.setTextColor("THEMETEXT");C1.iC();C2.setNormBackColor("WHITE");C2.iC();C3.setCursor("HAND");C3.setTextColor("THEME50");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.setUnits("PIXELS");C6.setWidth(1000);C6.iC();
C7.setDisplayPosition(3);C7.setParent(C4);C7.iC();C8.setDisplayPosition(1);C8.setParent(C4);C8.setHeight(64);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(2);C9.setParent(C4);C9.iC();C10.setColumn(C6);C10.setManage(C23);C10.setParent(C4);C10.setRow(C9);C10.iC();C11.setColumn(C5);C11.setManage(C21);C11.setParent(C4);C11.setRow(C8);C11.setColumnSpan(3);C11.iC();C12.iC();C13.setDisplayPosition(2);C13.setParent(C12);C13.setUnits("PIXELS");C13.setWidth(1000);C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);
C14.iC();C15.setDisplayPosition(3);C15.setParent(C12);C15.iC();C16.setDisplayPosition(1);C16.setParent(C12);C16.iC();C17.setManage(C33);C17.setParent(C12);C17.setRow(C16);C17.setSizing("NONE");C17.setAlignment("CENTERLEFT");C17.setFlow("RIGHT");C17.setColumn(C13);C17.setMarginLeft(3);C17.iC();C18.setColumn(C13);C18.setManage(C22);C18.setParent(C12);C18.setRow(C16);C18.setSizing("NONE");C18.setFlow("RIGHT");C18.setMarginLeft(20);C18.setAlignment("CENTERLEFT");C18.iC();C19.setAlignment("CENTERRIGHT");
C19.setColumn(C13);C19.setManage(C25);C19.setParent(C12);C19.setRow(C16);C19.setSizing("NONE");C19.setFlow("LEFT");C19.setMarginRight(10);C19.iC();C20.setColumn(C13);C20.setManage(C24);C20.setParent(C12);C20.setSizing("NONE");C20.setRow(C16);C20.setAlignment("CENTERRIGHT");C20.setFlow("LEFT");C20.setMarginRight(3);C20.iC();C21.setDisplayPosition(2);C21.setLeft(0);C21.setParent(this);C21.setTabPosition(2);C21.setTabStop(false);C21.setTop(0);C21.setHeight(64);C21.setWidth(1200);C21.setThemeDrawStyle("MediumTitle");
C21.setLayoutManager(C12);C21.iC();C22.setCaption("Employees");C22.setDisplayPosition(4);C22.setEllipses("WORD");C22.setHeight(64);C22.setLeft(171);C22.setParent(C21);C22.setTabPosition(1);C22.setTabStop(false);C22.setTop(0);C22.setVerticalAlignment("CENTER");C22.setWidth(500);C22.setMarginLeft(4);C22.setThemeDrawStyle("Title+MediumTitle");C22.iC();C23.setDisplayPosition(1);C23.setHeight(736);C23.setLeft(100);C23.setParent(this);C23.setTabPosition(1);C23.setTop(64);C23.setWidth(1000);C23.setRowHeight(62);
C23.setColumnLines(false);C23.setStyle(C2);C23.iC();C24.setDisplayPosition(1);C24.setHeight(28);C24.setLeft(847);C24.setParent(C21);C24.setTabPosition(2);C24.setWidth(250);C24.setTop(18);C24.setPlaceholder("Search");C24.setTabStop(false);C24.setStyle(C1);C24.iC();C25.setDisplayPosition(2);C25.setEllipses("WORD");C25.setLeft(802);C25.setParent(C21);C25.setTabPosition(3);C25.setTabStop(false);C25.setTop(15);C25.setAlignment("CENTER");C25.setThemeDrawStyle("Title+MediumTitle");C25.setVerticalAlignment("CENTER");
C25.setImagePosition("ABOVECAPTION");C25.setCaption("+");C25.setMarginBottom(4);C25.setStyle(C3);C25.setWidth(35);C25.setHeight(35);C25.iC();C26.setDisplayPosition(2);C26.setParent(C23);C26.setSource(f.F1);C26.setSortOnClick(true);C26.setColumnWidth(92);C26.iC();C27.setDisplayPosition(3);C27.setParent(C23);C27.setSource(f.F2);C27.setColumnWidth(72);C27.setSortOnClick(true);C27.iC();C28.setDisplayPosition(4);C28.setParent(C23);C28.setSource(f.F3);C28.setSortOnClick(true);C28.setColumnWidth(151);C28.iC();
C29.setDisplayPosition(5);C29.setParent(C23);C29.setSource(f.F4);C29.setSortOnClick(true);C29.setColumnWidth(192);C29.iC();C30.setDisplayPosition(6);C30.setParent(C23);C30.setSource(f.F5);C30.setSortOnClick(true);C30.setColumnCaption("Department");C30.setColumnCaptionType("CAPTION");C30.iC();C31.setDisplayPosition(1);C31.setParent(C23);C31.setSource(f.F6);C31.setCellMarginBottom(3);C31.setCellMarginLeft(3);C31.setCellMarginRight(1);C31.setCellMarginTop(1);C31.setImageSizing("BESTFIT");C31.setColumnWidth(67);
C31.iC();C32.setColumnWidth(224);C32.setDesign("XEDADRS");C32.setDisplayPosition(7);C32.setParent(C23);C32.setColumnCaption("Address");C32.setSortOnClick(true);C32.iC();C33.setDisplayPosition(3);C33.setHeight(48);C33.setImage(rc1);C33.setLeft(103);C33.setParent(C21);C33.setTabPosition(4);C33.setTabStop(false);C33.setTop(8);C33.setWidth(48);C33.iC();C34.iC();C23.aH("ITEMDOUBLECLICK",this,e2);C24.aH("CHANGED",this,e6);C25.aH("CLICK",this,e5);C34.aH("EMPLOYEESAVED",this,e3);C34.aH("EMPLOYEEDELETED",this,e4);
C32.aLF({"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F10,"XCOUNTRY":f.F11});this.setLayoutManager(C4);this.setTheme(l.THEME().get("2015BLUE"));this.setCaption("Employees");this.setStyle(C0);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",57);r.ln=57;{r.ln=60;this.mthLOADEMPLOYEES();}r.ln=62;r.e();};function e2(sender,Ps){var f=this.FLD.XEDMAIN,m=this.REF,r=l.eR(this,cO,"#EmployeesListView.ItemDoubleClick",68);r.ln=68;{r.ln=70;
m.EMPLOYEEEDITOR.mthEDITEMPLOYEE(f.F1.get());r.ln=72;m.EMPLOYEEEDITOR.mthSHOWPOPUP(u,u,"CENTER","FADEINANDSCALE",u);}r.ln=74;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#EmployeeEditor.EmployeeSaved",80);var P0=Ps.r("ID");r.ln=80;{r.ln=82;cO.mthUPDATEEMPLOYEEINLIST.call(this,P0.get());}r.ln=84;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#EmployeeEditor.EmployeeDeleted",86);var P0=Ps.r("ID");r.ln=86;{r.ln=88;cO.mthDELETEEMPLOYEEFROMLIST.call(this,P0.get());}r.ln=90;r.e();};function e5(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#AddButton.Click",96);r.ln=96;{r.ln=98;m.EMPLOYEEEDITOR.mthCREATEEMPLOYEE();r.ln=100;m.EMPLOYEEEDITOR.mthSHOWPOPUP(u,u,"CENTER","FADEINANDSCALE",u);}r.ln=102;r.e();};function e6(sender,Ps){var f=this.FLD.XEDMAIN,m=this.REF,r=l.eR(this,cO,"#SearchValue.Changed",104);r.ln=104;{r.ln=108;{var l1=m.EMPLOYEESLISTVIEW.selectList();while(l1.step()){r.ln=110;f.F12.set(false);r.ln=113;if(l.s.eq(m.SEARCHVALUE.get(),"")){r.ln=115;f.F12.set(true);}r.ln=120;if(l.s.Contains(l.s.UpperCase(f.F3.get()),l.s.UpperCase(m.SEARCHVALUE.getValue())))
{r.ln=122;f.F12.set(true);}r.ln=127;if(l.s.Contains(l.s.UpperCase(f.F4.get()),l.s.UpperCase(m.SEARCHVALUE.getValue()))){r.ln=129;f.F12.set(true);}r.ln=133;m.EMPLOYEESLISTVIEW.getCurrentItem().setVisible(f.F12.get());r.ln=135;}l1.end();}}r.ln=137;r.e();};cO.mthLOADEMPLOYEES=function(){var m=this.REF,r=l.mR(this,cO,"LoadEmployees",143);var C0=r.cDR("GETEMPLOYEESFROMSERVER","XEDSRVR","GETEMPLOYEES");C0.iC();r.ln=143;{r.ln=148;C0.mthEXECUTEASYNC({},{LIST:{"XEMPLOYEELIST":m.EMPLOYEESLISTVIEW}});}r.ln=150;
r.e();};cO.mthUPDATEEMPLOYEEINLIST=function(p0){var f=this.FLD.XEDMAIN,m=this.REF,r=l.mR(this,cO,"UpdateEmployeeInList",152),mth=r;var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("FETCHEMPLOYEEFROMSERVER","XEDSRVR","FETCHEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e7);r.ln=152;{r.ln=157;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":f.F1,"XEMPTITLE":f.F2,"XSURNAME":f.F3,"XGIVENAME":f.F4,"XEMPDOB":f.F13,"XGENDER":f.F14,"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F10,"XCOUNTRY":f.F11,"XPHONEHME":f.F15,"XPHONEBUS":f.F16,"XPHONEMOB":f.F17,"XSALARY":f.F18,"XSTARTDTE":f.F19,"XTERMDATE":f.F20,"XDEPTMENT":f.F21,"XEMPIMG":f.F22}});
}r.ln=178;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#FetchEmployeeFromServer.Completed",159,mth);r.ln=159;{r.ln=162;f.F23.set(lIO=m.EMPLOYEESLISTVIEW.locateEntry(function(e){return l.s.eq(((e["XEMPLOYID"]!==u)?e["XEMPLOYID"]:f.F1.get()),((e["ID"]!==u)?e["ID"]:P0.get()))},null,true));r.ln=164;if(lIO=="OK"){r.ln=167;m.EMPLOYEESLISTVIEW.updateEntry();}else{r.ln=172;m.EMPLOYEESLISTVIEW.addEntry();}}r.ln=176;r.e();}};cO.mthDELETEEMPLOYEEFROMLIST=function(p0){var f=this.FLD.XEDMAIN,m=this.REF,r=l.mR(this,cO,"DeleteEmployeeFromList",180);
var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);r.ln=180;{r.ln=183;f.F23.set(lIO=m.EMPLOYEESLISTVIEW.locateEntry(function(e){return l.s.eq(((e["XEMPLOYID"]!==u)?e["XEMPLOYID"]:f.F1.get()),((e["ID"]!==u)?e["ID"]:P0.get()))},null,true));r.ln=185;m.EMPLOYEESLISTVIEW.deleteEntry();}r.ln=187;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function()
{this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");
C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F14.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");
C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F14.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XEDEDIT"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_LABL","PRIM_LIST","PRIM_EDIT","PRIM_LIST.String","PRIM_LIST.Image","PRIM_LIST.Part","PRIM_IMAG","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_PKLT"]});