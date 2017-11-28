﻿LANSA.addComponent({id:"DF_PRM03O",ot:"rp",tp:"Reusable Part",de:"\OC=5250 Prompter - 3 - List and Search",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:"",de:"Surname",dv:"",ia:["FE","LC"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F4:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F5:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:"",de:"Postal Code",dv:"",ia:["FE"]},
F6:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F7:{nm:"XSTREET",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:"",h3:"",de:"Street",dv:"",
ia:["FE","LC"]},F8:{nm:"XCITY",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:"",h3:"",de:"City",dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:"",h3:"",de:"State",dv:"",ia:["FE","LC"]},F10:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:"",de:"Home Telephone",dv:"",ia:["FE"]},F11:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:"",de:"Business Telephone",dv:"",ia:["FE"]},F12:{nm:"XSTARTDTE",ft:"D",ln:10,
dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:"",de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F13:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:"",de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F14:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:"",de:"Department",dv:"",ia:["FE"]},F15:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:"",de:"Annual Salary",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"VF_AC017O",fd:Fd,mt:{uShow:{ps:{"Top":{pt:"i"},"Left":{pt:"i"},"Height":{pt:"i"},"Width":{pt:"i"}}},uSearch:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_PRM03O",Fd);var C0=this.cR("PANL_1","PRIM_PANL");var C1=this.cR("LIST_1","PRIM_LIST");var C2=this.cR("COLUMN_1","PRIM_LIST","String");var C3=this.cR("COLUMN_2","PRIM_LIST","String");var C4=this.cR("COLUMN_3","PRIM_LIST","String");var C5=this.cR("COLUMN_4","PRIM_LIST","Number");var C6=this.cR("ATLM_1","PRIM_ATLM");var C7=this.cR("ATLI_1","PRIM_ATLI");
var C8=this.cR("ATTACHITEM1","PRIM_ATLI");var C9=this.cF("SEARCH_XEMPLOYEESURNAME",Fd.F1.VISUALEDIT);var C10=this.cR("SEARCH_BUTTON","PRIM_PHBN");C0.setDisplayPosition(1);C0.setHeight(41);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setWidth(423);C0.iC();C1.setDisplayPosition(2);C1.setHeight(200);C1.setLeft(0);C1.setParent(this);C1.setTabPosition(2);C1.setTop(41);C1.setWidth(423);C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setSource(f.F3);C2.setColumnWidth(77);
C2.setColumnCaption("id");C2.setColumnCaptionType("CAPTION");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setSource(f.F1);C3.setColumnWidth(91);C3.setColumnCaption("xEmployeeSurname");C3.setColumnCaptionType("CAPTION");C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setSource(f.F4);C4.setColumnCaption("Given Name");C4.setColumnCaptionType("CAPTION");C4.iC();C5.setDisplayPosition(4);C5.setParent(C1);C5.setSource(f.F5);C5.setColumnCaption("Zip");C5.setColumnCaptionType("CAPTION");C5.iC();
C6.iC();C7.setAttachment("TOP");C7.setManage(C0);C7.setParent(C6);C7.iC();C8.setAttachment("CENTER");C8.setManage(C1);C8.setParent(C6);C8.iC();C9.setDisplayPosition(1);C9.setLeft(8);C9.setMarginLeft(100);C9.setParent(C0);C9.setTabPosition(1);C9.setTop(8);C9.setWidth(233);C9.setLabelType("CAPTION");C9.setCaption("xEmployeeSurname");C9.aD();C9.iC();C10.setButtonDefault(true);C10.setCaption("Search");C10.setDisplayPosition(2);C10.setHeight(20);C10.setLeft(248);C10.setParent(C0);C10.setTabPosition(2);
C10.setTop(8);C10.iC();C1.aH("ITEMCLICK",this,e3);C10.aH("CLICK",this,e1);this.setCaption("DF_PRM03O - Prompting Example 3 ");this.setHeight(243);this.setLayoutManager(C6);this.setWidth(425);var li=this.aL("DF_PRM03O");li.XEMPLOYEELIST=l.cLT({"XEMPLOYID":f.F3,"XSURNAME":f.F1,"XGIVENAME":f.F4,"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F5,"XPHONEHME":f.F10,"XPHONEBUS":f.F11,"XSTARTDTE":f.F12,"XTERMDATE":f.F13,"XDEPTMENT":f.F14,"XSALARY":f.F15},f.F6);}});cO.mthUSHOW=function(p0,p1,p2,p3)
{var m=this.REF,r=l.mR(this,cO,"uShow",63);var P0=r.cPF("TOP",Fd.F2.Dc);var P1=r.cPF("LEFT",Fd.F2.Dc);var P2=r.cPF("HEIGHT",Fd.F2.Dc);var P3=r.cPF("WIDTH",Fd.F2.Dc);P0.set((p0===u)?(-999999):(p0));P1.set((p1===u)?(-999999):(p1));P2.set((p2===u)?(-999999):(p2));P3.set((p3===u)?(-999999):(p3));r.ln=63;{r.ln=70;this.mthUGET5250FIELD(this.getUPROMPT5250FIELD(),this.getUPROMPT5250INDEX(),m.SEARCH_XEMPLOYEESURNAME,u);r.ln=72;m.SEARCH_XEMPLOYEESURNAME.set(l.s.UpperCase(m.SEARCH_XEMPLOYEESURNAME.get()));
r.ln=76;this.mthUSEARCH();r.ln=79;this.setVisible(true);r.ln=80;this.mthSHOWPOPUP(P1.get(),P0.get(),"ABSOLUTE",u,u);r.ln=84;m.SEARCH_XEMPLOYEESURNAME.mthSETFOCUS();}r.ln=88;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Search_Button.Click",94);r.ln=94;{r.ln=96;this.mthUSEARCH();}r.ln=98;r.e();};cO.mthUSEARCH=function(){var li=this.LIST.DF_PRM03O,m=this.REF,r=l.mR(this,cO,"uSearch",104);var C0=r.cDR("FIND","DF_PRMDSO","FINDEMPBYSURNAME");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=104;{r.ln=107;
C0.mthEXECUTEASYNC({FLD:{"XSURNAME":m.SEARCH_XEMPLOYEESURNAME.get()}},{LIST:{"XEMPLOYEELIST":li.XEMPLOYEELIST}});}r.ln=120;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",109);r.ln=109;{r.ln=111;if(l.s.ne(m.SEARCH_XEMPLOYEESURNAME.get(),"")){r.ln=113;m.LIST_1.clearList();r.ln=115;{var l1=li.XEMPLOYEELIST.selectList();while(l1.step()){r.ln=116;m.LIST_1.addEntry();r.ln=117;}l1.end();}}}r.ln=119;r.e();}};function e3(sender,Ps){var f=this.FLD.DF_PRM03O,r=l.eR(this,cO,"#LIST_1.ItemClick",126);
r.ln=126;{r.ln=130;this.mthUSET5250FIELD("TXTXEMPLOYEEIDENTIFICATION",f.F3.get(),u,u);r.ln=131;this.mthUSET5250FIELD("TXTXEMPLOYEESURNAME",f.F1.get(),u,u);r.ln=132;this.mthUSET5250FIELD("TXTXEMPLOYEEGIVENNAMES",f.F4.get(),u,u);r.ln=136;this.mthUHIDE();}r.ln=138;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);
};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC017O"],rp:["PRIM_PANL","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number","PRIM_ATLM","PRIM_ATLI","PRIM_EVEF","PRIM_PHBN","PRIM_FLD","PRIM_WEB.DataRequest"]});