﻿LANSA.addComponent({id:"DF_T72F1O",ot:"rp",tp:"Reusable Part",de:"\OC= Filter modifies the instance list",tl:14015000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XHOMECITY",ft:"N",ln:100,dc:0,lb:"Home City",h1:"Home",h2:"City",h3:" ",de:"Home City",dv:"",ia:["FE","LC"]},F2:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],
h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"XHOMEDESC",ft:"N",ln:512,dc:0,lb:"Home Descriptio",h1:"Home",h2:"Description",h3:" ",de:"Home Description",dv:"",ia:["FE","LC"]},F4:{nm:"XHOMEADDR",ft:"N",ln:256,dc:0,lb:"Home Address",h1:"Home",h2:"Address",h3:" ",de:"Home Address",dv:"",ia:["FE","LC"]},F5:{
nm:"XHOMEID",ft:"I",ln:4,dc:0,lb:"Home Identifier",h1:"Home",h2:"Identifier",h3:" ",de:"Home Identifier",dv:0,ia:["FE","RB"]},F6:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,
{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{},uSelectData:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_T72F1O",Fd);var C0=this.cR("DATAITEMPANEL","PRIM_PANL");var C1=this.cR("BUTTONPANEL","PRIM_PANL");var C2=this.cR("ATTACHDATAITEMPANEL","PRIM_ATLI");var C3=this.cR("ATTACHBUTTONPANEL","PRIM_ATLI");var C4=this.cR("BUTTONPANELATTACHMENTHMANAGER","PRIM_ATLM");var C5=this.cR("BUTTONPANELATTACHMENTSAVE","PRIM_ATLI");var C6=this.cR("ATTACHITEM1","PRIM_ATLI");var C7=this.cR("SEARCH_BUTTON","PRIM_PHBN");
var C8=this.cR("CLEAR_LIST","PRIM_CKBX");var C9=this.cF("XHOMECITY",Fd.F1.VISUAL);var C10=this.cR("LABEL1","PRIM_LABL");C0.setParent(this);C0.setDisplayPosition(1);C0.setTabPosition(1);C0.setHeight(150);C0.setLeft(0);C0.setTop(0);C0.setWidth(215);C0.setHorizontalScroll(true);C0.setVerticalScroll(true);C0.setTabStop(false);C0.iC();C1.setParent(this);C1.setDisplayPosition(2);C1.setTabPosition(2);C1.setLeft(0);C1.setTop(150);C1.setWidth(215);C1.setLayoutManager(C4);C1.setHeight(32);C1.setTabStop(false);
C1.iC();C2.setManage(C0);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("CENTER");C2.iC();C3.setManage(C1);C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("BOTTOM");C3.iC();C4.iC();C5.setParent(C4);C5.setManage(C7);C5.setAttachment("RIGHT");C5.setMarginRight(4);C5.setMarginTop(4);C5.setMarginBottom(4);C5.iC();C6.setManage(C8);C6.setParent(C4);C6.setAttachment("LEFT");C6.iC();C7.setParent(C1);C7.setCaption("Search");C7.setDisplayPosition(1);C7.setTabPosition(1);
C7.setHeight(24);C7.setLeft(131);C7.setTop(4);C7.setButtonDefault(true);C7.iC();C8.setCaption("Clear List");C8.setParent(C1);C8.setDisplayPosition(2);C8.setTabPosition(2);C8.setButtonState("CHECKED");C8.setLeft(0);C8.setTop(0);C8.setHeight(32);C8.iC();C9.setParent(C0);C9.setDisplayPosition(1);C9.setTabPosition(1);C9.setTop(4);C9.setLeft(4);C9.setMarginLeft(0);C9.setWidth(205);C9.setLabelPosition("TOP");C9.setMarginTop(19);C9.setHeight(40);C9.setUsePicklist(false);C9.aD();C9.iC();C10.setCaption("This filter (DF_T72F1O) modifies the appearance of the instance list. See the uInitialize routine in the source code.");
C10.setDisplayPosition(2);C10.setEllipses("WORD");C10.setHeight(97);C10.setLeft(8);C10.setParent(C0);C10.setTabPosition(2);C10.setTabStop(false);C10.setTop(48);C10.setWidth(201);C10.iC();C7.aH("CLICK",this,e1);this.setHeight(182);this.setWidth(215);var li=this.aL("DF_T72F1O");li.ACCESSKEYS=l.cLT({"XHOMECITY":C9},null);li.INSTANCELIST_COLUMNS=l.cLT({"XHOMEDESC":f.F3,"XHOMEADDR":f.F4,"XHOMEID":f.F5,"XHOMECITY":C9},f.F2);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",45);
r.ln=45;{r.ln=49;cA.mthUINITIALIZE.call(this);r.ln=51;this.setAVFILTERLOCATION("LEFT");r.ln=52;this.setAVALLOWLOCATIONCHANGE(true);r.ln=56;if((this.REF.AVLISTMANAGER.mthAVVISUALLIST()!=null)){r.ln=57;this.REF.AVLISTMANAGER.mthAVVISUALLIST().setRowSizing("INDIVIDUAL");this.REF.AVLISTMANAGER.mthAVVISUALLIST().setRowHeight(0);this.REF.AVLISTMANAGER.mthAVVISUALLIST().setRowLines(true);this.REF.AVLISTMANAGER.mthAVVISUALLIST().setColumnLines(true);r.ln=58;{var l1=this.REF.AVLISTMANAGER.mthAVVISUALLIST().getColumns().cI();
while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=59;if(l.Io(COLUMN,"PRIM_LIST.String")){r.ln=60;l.cast(COLUMN,"PRIM_LIST.String").setWordWrap(true);}r.ln=62;}l1.end();r.dR("COLUMN");}}}r.ln=65;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Search_Button.Click",68);r.ln=68;{r.ln=69;this.mthUSELECTDATA();}r.ln=70;r.e();};cO.mthUSELECTDATA=function(){var li=this.LIST.DF_T72F1O,f=this.FLD.DF_T72F1O,m=this.REF,r=l.mR(this,cO,"uSelectData",73);var C0=r.cDR("SEARCH","DF_T72DSO","SEARCH");C0.iC();
C0.aH("COMPLETED",this,e2);r.ln=73;{r.ln=79;li.ACCESSKEYS.initList(1);r.ln=82;this.mthAVGOTOBUSYSTATE("Searching",false,u);r.ln=85;C0.mthEXECUTEASYNC({LIST:{"ACCESSKEYS":li.ACCESSKEYS}},{LIST:{"INSTANCELIST_COLUMNS":li.INSTANCELIST_COLUMNS}});}r.ln=111;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#Search.Completed",88);r.ln=88;{r.ln=90;if(l.s.eq(m.CLEAR_LIST.getButtonState(),"CHECKED")){r.ln=91;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);}r.ln=94;{var l1=li.INSTANCELIST_COLUMNS.selectList();while(l1.step())
{r.ln=98;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F3.get(),f.F4.get(),u,u,u,u,u,f.F5.get(),u,u,u,u,u,u,u,u,u,u,u,u,m.XHOMECITY.get(),u,u,u,u,u,u,u,u,u,f.F5.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=100;}l1.end();}r.ln=102;li.INSTANCELIST_COLUMNS.clearList();r.ln=105;f.F6.set(lIO=li.ACCESSKEYS.getEntry(1));r.ln=108;this.mthAVGOTOFREESTATE();}r.ln=110;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XHOMECITY"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());
};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"XHOMECITY",cn:"Visual"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_PANL","PRIM_ATLI","PRIM_ATLM","PRIM_PHBN","PRIM_CKBX","PRIM_EVEF","PRIM_LABL","PRIM_WEB.DataRequest"]});