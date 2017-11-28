﻿LANSA.addComponent({id:"DF_DET56O",ot:"rp",tp:"Reusable Part",de:"\OC=Employee Notes & Images",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec("1.1"),c2=l.cDec(".88"),c3=l.cDec("107.8");var Fd={F1:{nm:"XEMPGUID",ft:"A",ln:32,dc:0,lb:"Note GUID",h1:"Note",h2:"GUID",h3:"",de:"Note GUID",dv:"",ia:["FE"]},F2:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text"}[cL],h2:" ",
h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT"}[cL],dv:"",ia:["LC"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]},F4:{nm:"STD_INT",ft:"I",ln:4,dc:0,
ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F5:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F6:{nm:"XEMPNOTE",ft:"NV",ln:4096,dc:0,lb:"Employee Note",h1:"Employee",h2:"Note",h3:"",de:"Employee Note",
dv:"",ia:["FE","LC"]},F7:{nm:"XEMPNTCRU",ft:"DT",ln:19,dc:0,lb:"Creation/Update",h1:"Creation/Update",h2:"DateTime",h3:"stamp",de:"Creation/Update DateTime stamp",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"],oa:["TCYX"]},F8:{nm:"ATTACHMENTFILESUFFIX",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"",ia:["LC"]},F9:{nm:"XEMPNTATT",ft:"BL",ln:0,dc:0,lb:"Note Attachment",h1:"Note",h2:"Attachment",h3:"",de:"Note Attachment",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{
an:"VF_AC010O",fd:Fd,rm:["dt"],mt:{CheckSaveDirtyFirst:{},uQueryCanClose:{ps:{"CanBeCancelled":{pt:"i"},"TimeOutinProgress":{pt:"i"}}},uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},LoadAllNotes:{ps:{"GotoFreeState":{pt:"io"}}},LoadSpecificNote:{ps:{"GotoFreeState":{pt:"io"}}},DeleteNote:{ps:{"GotoFreeState":{pt:"io"}}},CreateNewNote:{ps:{"GotoFreeState":{pt:"io"}}},SetFocusItem:{ps:{"GotoFreeState":{pt:"io"}}},SaveNote:{ps:{"RefreshDisplay":
{pt:"i"},"GotoFreeState":{pt:"io"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_DET56O",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("LIST1ITEM1","PRIM_TBLO","Item");var C4=this.cR("LIST1ITEM2","PRIM_TBLO","Item");var C5=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C6=this.cR("ATTACHITEM3","PRIM_ATLI");var C7=this.cR("ATTACHITEM4","PRIM_ATLI");var C8=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C9=this.cR("ATTACHITEM5","PRIM_ATLI");
var C10=this.cR("ATTACHITEM6","PRIM_ATLI");var C11=this.cR("LEFTPANEL","PRIM_PANL");var C12=this.cR("BUTTONPANELLEFT","PRIM_PANL");var C13=this.cR("NEWBUTTON","PRIM_PHBN");var C14=this.cR("DELETEBUTTON","PRIM_PHBN");var C15=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C16=this.cR("ATTACHITEM1","PRIM_ATLI");var C17=this.cR("ATTACHITEM2","PRIM_ATLI");var C18=this.cR("ATTACHITEM2A","PRIM_ATLI");var C19=this.cR("COLUMNDIVIDER1","PRIM_TBLO","ColumnDivider");var C20=this.cR("ROW1","PRIM_TBLO","Row");var C21=this.cR("VISIBLELIST","PRIM_TREE");
var C22=this.cR("BORDERALLROUND","PRIM_VS","Style");var C23=this.cR("LAYOUT2","PRIM_TBLO");var C24=this.cR("COLUMN3","PRIM_TBLO","Column");var C25=this.cR("ROW2","PRIM_TBLO","Row");var C26=this.cR("IMAGEROW","PRIM_TBLO","Row");var C27=this.cR("ROW4","PRIM_TBLO","Row");var C28=this.cR("LIST2ITEM1","PRIM_TBLO","Item");var C29=this.cR("ROWDIVIDER1","PRIM_TBLO","RowDivider");var C30=this.cR("IMAGELISTITEM","PRIM_TBLO","Item");var C31=this.cR("LIST2ITEM3","PRIM_TBLO","Item");var C32=this.cR("DETAILSPANEL","PRIM_PANL");
var C33=this.cR("NOTE","PRIM_TEXT");var C34=this.cR("IMAGE","PRIM_IMAG");var C35=this.cR("BUTTONPANELRIGHT","PRIM_PANL");var C36=this.cR("DOWNLOADATTACHMENT","PRIM_PHBN");var C37=this.cR("SAVECHANGES","PRIM_PHBN");var C38=this.cR("UPLOADATTACHMENT","PRIM_WEB","FilePicker");var C39=this.cR("BLUETEXT","PRIM_VS","Style");this.cD("SETFOCUSITEM");var C41=this.cF("CURRENTEMPLOYEENOTEGUID",Fd.F1.Dc);var C42=this.cF("CURRENTEMPLOYEEIMAGESUFFIX",Fd.F2.Dc);var C43=this.cR("CURRENTEMPLOYEENOTEISDIRTY","PRIM_BOLN");
var C44=this.cR("CURRENTEMPLOYEEIMAGEISDIRTY","PRIM_BOLN");var C45=this.cF("LOADEMPLOYEENOTEGUID",Fd.F1.Dc);var C46=this.cR("CR","PRIM_DC","UnicodeString");var C47=this.cR("LF","PRIM_DC","UnicodeString");var C48=this.cR("HT","PRIM_DC","UnicodeString");C0.setDividerStyle("GAP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(c1);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.setWidth(c2);C2.iC();C3.setColumn(C1);C3.setManage(C11);C3.setParent(C0);C3.setRow(C20);C3.setMarginLeft(4);
C3.setMarginRight(4);C3.setMarginTop(4);C3.iC();C4.setColumn(C2);C4.setManage(C32);C4.setParent(C0);C4.setRow(C20);C4.iC();C5.iC();C6.setManage(C12);C6.setParent(C5);C6.setAttachment("BOTTOM");C6.iC();C7.setParent(C5);C7.setAttachment("CENTER");C7.setManage(C21);C7.iC();C8.iC();C9.setManage(C14);C9.setParent(C8);C9.setAttachment("LEFT");C9.setMarginLeft(4);C9.setMarginRight(4);C9.setMarginTop(4);C9.setMarginBottom(4);C9.iC();C10.setManage(C13);C10.setParent(C8);C10.setAttachment("LEFT");C10.setMarginLeft(4);
C10.setMarginRight(4);C10.setMarginTop(4);C10.setMarginBottom(4);C10.iC();C11.setParent(this);C11.setDisplayPosition(2);C11.setTabPosition(2);C11.setHeight(461);C11.setLeft(4);C11.setTop(4);C11.setWidth(560);C11.setLayoutManager(C5);C11.iC();C12.setParent(C11);C12.setDisplayPosition(1);C12.setTabPosition(1);C12.setHeight(32);C12.setLeft(0);C12.setTop(429);C12.setWidth(560);C12.setLayoutManager(C8);C12.iC();C13.setParent(C12);C13.setCaption("New Note");C13.setDisplayPosition(2);C13.setTabPosition(2);
C13.setHeight(24);C13.setLeft(89);C13.setTop(4);C13.iC();C14.setParent(C12);C14.setCaption("Delete Note");C14.setDisplayPosition(1);C14.setTabPosition(1);C14.setHeight(24);C14.setLeft(4);C14.setTop(4);C14.setWidth(77);C14.iC();C15.iC();C16.setManage(C36);C16.setParent(C15);C16.setAttachment("RIGHT");C16.setMarginLeft(4);C16.setMarginRight(4);C16.setMarginTop(4);C16.setMarginBottom(4);C16.iC();C17.setManage(C38);C17.setParent(C15);C17.setAttachment("RIGHT");C17.setMarginBottom(4);C17.setMarginLeft(4);
C17.setMarginRight(4);C17.setMarginTop(4);C17.iC();C18.setManage(C37);C18.setParent(C15);C18.setAttachment("RIGHT");C18.setMarginBottom(4);C18.setMarginLeft(4);C18.setMarginRight(4);C18.setMarginTop(4);C18.iC();C19.setDisplayPosition(2);C19.setParent(C0);C19.setWidth(4);C19.iC();C20.setDisplayPosition(1);C20.setParent(C0);C20.iC();C21.setDisplayPosition(2);C21.setLeft(0);C21.setParent(C11);C21.setTabPosition(2);C21.setTop(0);C21.setWidth(560);C21.setHeight(429);C21.setStyle(C22);C21.iC();C22.setBorderBottom(1);
C22.setBorderLeft(1);C22.setBorderTop(1);C22.setBorderRight(1);C22.iC();C23.setDividerStyle("GAP");C23.iC();C24.setDisplayPosition(1);C24.setParent(C23);C24.iC();C25.setDisplayPosition(3);C25.setParent(C23);C25.setHeight(c3);C25.iC();C26.setDisplayPosition(1);C26.setParent(C23);C26.setHeight(60);C26.setUnits("PIXELS");C26.iC();C27.setDisplayPosition(4);C27.setParent(C23);C27.setHeight(32);C27.setUnits("PIXELS");C27.iC();C28.setColumn(C24);C28.setParent(C23);C28.setRow(C25);C28.setManage(C33);C28.setMarginLeft(4);
C28.setMarginRight(4);C28.setMarginTop(4);C28.iC();C29.setDisplayPosition(2);C29.setParent(C23);C29.setHeight(4);C29.iC();C30.setColumn(C24);C30.setManage(C34);C30.setParent(C23);C30.setRow(C26);C30.setMarginBottom(4);C30.setMarginLeft(4);C30.setMarginRight(4);C30.setMarginTop(4);C30.setFlow("LEFT");C30.iC();C31.setColumn(C24);C31.setParent(C23);C31.setRow(C27);C31.setManage(C35);C31.iC();C32.setDisplayPosition(1);C32.setLeft(572);C32.setParent(this);C32.setTabPosition(1);C32.setTabStop(false);C32.setTop(0);
C32.setHeight(465);C32.setWidth(453);C32.setLayoutManager(C23);C32.iC();C33.setParent(C32);C33.setDisplayPosition(1);C33.setTabPosition(1);C33.setHeight(365);C33.setLeft(4);C33.setTop(68);C33.setWidth(445);C33.setSpellCheck(true);C33.iC();C34.setParent(C32);C34.setDisplayPosition(3);C34.setTabPosition(3);C34.setHeight(52);C34.setLeft(4);C34.setTop(4);C34.setWidth(445);C34.setImageAlignment("TOPLEFT");C34.iC();C35.setParent(C32);C35.setDisplayPosition(2);C35.setTabPosition(2);C35.setHeight(32);C35.setLeft(0);
C35.setTop(433);C35.setWidth(453);C35.setLayoutManager(C15);C35.iC();C36.setParent(C35);C36.setCaption("Download Attachment");C36.setDisplayPosition(3);C36.setTabPosition(3);C36.setHeight(24);C36.setTop(4);C36.setWidth(153);C36.setLeft(296);C36.iC();C37.setParent(C35);C37.setCaption("Save Changes");C37.setDisplayPosition(1);C37.setTabPosition(2);C37.setHeight(24);C37.setTop(4);C37.setWidth(105);C37.setLeft(25);C37.iC();C38.setDisplayPosition(2);C38.setEllipses("WORD");C38.setHeight(24);C38.setLeft(138);
C38.setParent(C35);C38.setTabPosition(1);C38.setTabStop(false);C38.setTop(4);C38.setVerticalAlignment("CENTER");C38.setWidth(150);C38.setCaption("Upload an Attachment");C38.setMarginLeft(8);C38.setThemeDrawStyle("PushButton");C38.iC();C39.setTextColor("BLUE");C39.iC();C41.aD();C41.iC();C42.aD();C42.iC();C43.iC();C44.iC();C45.aD();C45.iC();C46.iC();C47.iC();C48.iC();C13.aH("CLICK",this,e4);C14.aH("CLICK",this,e3);C21.aH("ITEMGOTFOCUS",this,e2);C33.aH("CHANGED",this,e5);C36.aH("CLICK",this,e8);C37.aH("CLICK",this,e6);
C38.aH("FILESELECTED",this,e7);this.REF.AVLOCALTIMER.aH("TICK",this,e1);C21.aDS("DF_DET57O");C21.aLF({});this.setHeight(465);this.setWidth(1025);this.setLayoutManager(C0);var li=this.aL("DF_DET56O");li.EMPLOYEENOTES=l.cLT({"XEMPLOYID":f.F5,"XEMPGUID":f.F1,"XEMPNOTE":f.F6,"XEMPNTCRU":f.F7,"ATTACHMENTFILESUFFIX":f.F8},null);}});var cA=cO.aN.prototype;cO.mthCHECKSAVEDIRTYFIRST=function(){var m=this.REF,r=l.mR(this,cO,"CheckSaveDirtyFirst",99);var P0=r.cP("GOAHEADANWAY","PRIM_BOLN");r.ln=99;{r.ln=102;
P0.set(true);r.ln=104;if(l.tB((m.CURRENTEMPLOYEENOTEISDIRTY.get()||m.CURRENTEMPLOYEEIMAGEISDIRTY.get()))){r.ln=106;P0.set(l.s.eq(l.WEB().mthCONFIRM(l.cat(l.add("A note or attachment associated with employee ",this.getAVASSOCIATEDINSTANCE().getAVVISUALID1().get())," have been changed and not saved. Click OK to save them?")),"CANCEL"));}}r.ln=110;return r.rV(P0.get());};cO.mthUQUERYCANCLOSE=function(p0,p2){var r=l.mR(this,cO,"uQueryCanClose",115);var P0=r.cP("CANBECANCELLED","PRIM_BOLN");var P1=r.cP("ALLOW","PRIM_BOLN");
var P2=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");P0.set(p0);P2.set(p2);r.ln=115;{r.ln=117;if(l.tB(P0.get())){r.ln=118;P1.set(cO.mthCHECKSAVEDIRTYFIRST.call(this));}else{r.ln=120;P1.set(true);}}r.ln=123;return r.rV(P1.get());};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",127);var C0=r.cD("C0");r.ln=127;{r.ln=130;cA.mthUINITIALIZE.call(this);r.ln=132;m.CR.set(l.n.AsUnicodeString(13));r.ln=133;m.LF.set(l.n.AsUnicodeString(10));r.ln=134;m.HT.set(l.n.AsUnicodeString(9));}r.ln=136;
r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",140);r.ln=140;{r.ln=142;cA.mthUTERMINATE.call(this);}r.ln=144;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",148);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=148;{r.ln=150;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=151;m.VISIBLELIST.clearList();r.ln=152;m.DETAILSPANEL.setVisible(false);r.ln=153;this.REF.AVLOCALTIMER.setComponentTag("LOADALLNOTES");
this.REF.AVLOCALTIMER.setInterval(1);r.ln=154;P0.set(false);p0.set(P0.get());}r.ln=156;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",159);var C0=r.cR("GOTOFREESTATE","PRIM_BOLN");C0.iC();r.ln=159;{r.ln=163;this.REF.AVLOCALTIMER.setInterval(0);r.ln=165;C0.set(true);r.ln=167;{var v1=this.REF.AVLOCALTIMER.getComponentTag();if(r.ln=169,l.s.eq(v1,"LOADALLNOTES")){r.ln=170;this.mthLOADALLNOTES(C0);}else if(r.ln=172,l.s.eq(v1,"LOADSPECIFICNOTE")){r.ln=173;this.mthLOADSPECIFICNOTE(C0);
}else if(r.ln=175,l.s.eq(v1,"CREATENEWNOTE")){r.ln=176;this.mthCREATENEWNOTE(C0);}else if(r.ln=178,l.s.eq(v1,"DELETENOTE")){r.ln=179;this.mthDELETENOTE(C0);}else if(r.ln=181,l.s.eq(v1,"SAVENOTE")){r.ln=182;this.mthSAVENOTE(false,C0);}else if(r.ln=184,l.s.eq(v1,"SAVENOTEWITHREFRESH")){r.ln=185;this.mthSAVENOTE(true,C0);}else if(r.ln=187,l.s.eq(v1,"SETFOCUSITEM")){r.ln=188;this.mthSETFOCUSITEM(C0);}r.ln=191;}r.ln=193;if(l.tB(C0.get())){r.ln=194;this.mthAVGOTOFREESTATE();}}r.ln=197;r.e();};cO.mthLOADALLNOTES=function(p0)
{var li=this.LIST.DF_DET56O,f=this.FLD.DF_DET56O,m=this.REF,r=l.mR(this,cO,"LoadAllNotes",200);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");P0.set(p0.get());var C0=r.cDR("GETNOTES","DF_EMDSO","GETALLNOTES");C0.iC();r.ln=200;{r.ln=210;f.F5.set(this.getAVASSOCIATEDINSTANCE().getAVAKEY1().get());r.ln=213;li.EMPLOYEENOTES.clearList();r.ln=214;m.VISIBLELIST.clearList();r.ln=216;m.DETAILSPANEL.setVisible(false);r.ln=217;m.DELETEBUTTON.setVisible(false);r.ln=218;m.CURRENTEMPLOYEENOTEGUID.set("");r.ln=219;m.CURRENTEMPLOYEENOTEISDIRTY.set(false);
r.ln=220;m.CURRENTEMPLOYEEIMAGEISDIRTY.set(false);r.ln=222;C0.mthEXECUTE({FLD:{"XEMPLOYID":f.F5.get()}},{LIST:{"EMPLOYEENOTES":li.EMPLOYEENOTES}});r.ln=224;{var l1=li.EMPLOYEENOTES.selectList();while(l1.step()){r.ln=226;m.VISIBLELIST.addEntry();r.ln=228;l.cast(m.VISIBLELIST.getCurrentItem().getDesign(),"DF_DET57O").mthCREATEUPDATEITEM(f.F7.get(),f.F6.get(),f.F1.get(),f.F8.get());r.ln=230;}l1.end();}p0.set(P0.get());}r.ln=232;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#VisibleList.ItemGotFocus",235);
r.ln=235;{r.ln=237;if(cO.mthCHECKSAVEDIRTYFIRST.call(this)){r.ln=239;this.mthAVGOTOBUSYSTATE("Loading",false,u);r.ln=240;m.LOADEMPLOYEENOTEGUID.set(l.cast(m.VISIBLELIST.getCurrentItem().getDesign(),"DF_DET57O").getASSIGNEDEMPLOYEENOTEGUID());r.ln=241;this.REF.AVLOCALTIMER.setComponentTag("LOADSPECIFICNOTE");this.REF.AVLOCALTIMER.setInterval(1);}}r.ln=245;r.e();};cO.mthLOADSPECIFICNOTE=function(p0){var f=this.FLD.DF_DET56O,m=this.REF,r=l.mR(this,cO,"LoadSpecificNote",248);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");
P0.set(p0.get());var C0=r.cDR("GETNOTEANDIMAGE","DF_EMDSO","GETNOTEANDIMAGE");var C1=r.cF("RETURNCODE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=248;{r.ln=254;m.NOTE.setVisible(true);m.DETAILSPANEL.setVisible(true);r.ln=255;m.IMAGE.setVisible(false);m.DOWNLOADATTACHMENT.setVisible(false);r.ln=257;f.F6.set(l.SqlNull);r.ln=258;f.F9.set(l.SqlNull);r.ln=260;C0.mthEXECUTE({FLD:{"XEMPGUID":m.LOADEMPLOYEENOTEGUID.get()}},{FLD:{"RETURNCODE":C1,"XEMPNOTE":f.F6,"ATTACHMENTFILESUFFIX":f.F8,"XEMPNTATT":f.F9}});r.ln=263;
if(l.s.ne(C1.get(),"OK")){r.ln=264;this.mthAVGOTOBUSYSTATE("Loading",false,u);r.ln=265;this.REF.AVLOCALTIMER.setComponentTag("LOADALLNOTES");this.REF.AVLOCALTIMER.setInterval(1);r.ln=266;P0.set(false);p0.set(P0.get());r.e();return;}r.ln=273;m.CURRENTEMPLOYEENOTEGUID.set(m.LOADEMPLOYEENOTEGUID.get());r.ln=274;m.CURRENTEMPLOYEEIMAGESUFFIX.set(f.F8.get());r.ln=275;m.CURRENTEMPLOYEENOTEISDIRTY.set(false);r.ln=276;m.CURRENTEMPLOYEEIMAGEISDIRTY.set(false);r.ln=277;m.SAVECHANGES.setVisible(false);r.ln=279;
m.NOTE.setVisible(true);m.DETAILSPANEL.setVisible(true);m.DELETEBUTTON.setVisible(true);r.ln=280;m.IMAGE.setVisible(false);m.DOWNLOADATTACHMENT.setVisible(false);r.ln=281;m.NOTE.setText(f.F6.get());r.ln=285;m.IMAGE.setVisible(true);r.ln=286;m.IMAGEROW.setHeight(32);r.ln=287;m.IMAGE.setImageSizing("NONE");r.ln=289;if(l.s.eq(f.F8.get(),"NO_FILE")){r.ln=291;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("DENY_OUTLINE.PNG","MEDIUM","T",false));}else{r.ln=295;m.DOWNLOADATTACHMENT.setVisible(true);
r.ln=297;{var v1=f.F8.get();if(r.ln=299,l.or(l.s.eq(v1,"DOC"),l.s.eq(v1,"DOCX"))){r.ln=300;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("DOCUMENTS_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=302,l.s.eq(v1,"TXT")){r.ln=303;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("NOTE-OR-NOTEBOOK_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=305,l.or(l.s.eq(v1,"XLS"),l.s.eq(v1,"XLSX"))){r.ln=306;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("SPREADSHEET_OUTLINE.PNG","MEDIUM","T",false));
}else if(r.ln=308,l.or(l.or(l.s.eq(v1,"JPG"),l.s.eq(v1,"PNG")),l.s.eq(v1,"BMP"))){r.ln=309;m.IMAGE.setFileName(f.F9.get());r.ln=310;m.IMAGEROW.setHeight(160);r.ln=311;m.IMAGE.setImageSizing("BESTFIT");}else if(r.ln=314,l.or(l.s.eq(v1,"PPT"),l.s.eq(v1,"PPTX"))){r.ln=315;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("ABOUT_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=317,l.s.eq(v1,"PDF")){r.ln=318;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("PRINT_OUTLINE.PNG","MEDIUM","T",false));
}else{r.ln=321;m.IMAGE.setImage(this.REF.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("DENY_OUTLINE.PNG","MEDIUM","T",false));}r.ln=323;}}p0.set(P0.get());}r.ln=327;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#DeleteButton.Click",330);r.ln=330;{r.ln=332;this.mthAVGOTOBUSYSTATE("Deleting",false,u);r.ln=333;this.REF.AVLOCALTIMER.setComponentTag("DELETENOTE");this.REF.AVLOCALTIMER.setInterval(1);}r.ln=335;r.e();};cO.mthDELETENOTE=function(p0){var m=this.REF,r=l.mR(this,cO,"DeleteNote",338);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");
P0.set(p0.get());var C0=r.cDR("DELETENOTE","DF_EMDSO","DELETENOTE");var C1=r.cF("RETURNCODE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=338;{r.ln=344;C0.mthEXECUTE({FLD:{"XEMPGUID":m.CURRENTEMPLOYEENOTEGUID.get()}},{FLD:{"RETURNCODE":C1}});r.ln=346;if(l.s.eq(C1.get(),"OK")){r.ln=348;{var l1=m.VISIBLELIST.selectList();while(l1.step()){r.ln=350;if(l.s.eq(l.cast(m.VISIBLELIST.getCurrentItem().getDesign(),"DF_DET57O").getASSIGNEDEMPLOYEENOTEGUID(),m.CURRENTEMPLOYEENOTEGUID.get())){r.ln=351;m.VISIBLELIST.deleteEntry();
r.ln=352;break;}r.ln=355;}l1.end();}r.ln=357;m.CURRENTEMPLOYEENOTEGUID.set("");r.ln=358;m.CURRENTEMPLOYEENOTEISDIRTY.set(false);r.ln=359;m.CURRENTEMPLOYEEIMAGEISDIRTY.set(false);r.ln=360;m.DETAILSPANEL.setVisible(false);}p0.set(P0.get());}r.ln=365;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#NewButton.Click",368);r.ln=368;{r.ln=370;if(cO.mthCHECKSAVEDIRTYFIRST.call(this)){r.ln=372;this.mthAVGOTOBUSYSTATE("Creating",false,u);r.ln=373;this.REF.AVLOCALTIMER.setComponentTag("CREATENEWNOTE");this.REF.AVLOCALTIMER.setInterval(1);
}}r.ln=377;r.e();};cO.mthCREATENEWNOTE=function(p0){var f=this.FLD.DF_DET56O,m=this.REF,r=l.mR(this,cO,"CreateNewNote",380);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");P0.set(p0.get());var C0=r.cDR("CREATENEWNOTE","DF_EMDSO","CREATENEWNOTE");var C1=r.cF("RETURNCODE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=380;{r.ln=387;f.F5.set(this.getAVASSOCIATEDINSTANCE().getAVVISUALID1().get());r.ln=388;f.F1.set("");r.ln=389;f.F6.set("New Note");r.ln=390;f.F9.set(l.SqlNull);r.ln=392;C0.mthEXECUTE({FLD:{"XEMPLOYID":f.F5.get(),"XEMPGUID":f.F1.get()}},{FLD:{"RETURNCODE":C1,"XEMPGUID":f.F1}});
r.ln=394;m.VISIBLELIST.addEntry();r.ln=396;l.cast(m.VISIBLELIST.getCurrentItem().getDesign(),"DF_DET57O").mthCREATEUPDATEITEM(f.F7.get(),f.F6.get(),f.F1.get(),"NO_FILE");r.ln=398;m.LOADEMPLOYEENOTEGUID.set(f.F1.get());r.ln=399;this.mthLOADSPECIFICNOTE(P0);r.ln=401;this.srSETFOCUSITEM(m.VISIBLELIST.getCurrentItem());r.ln=402;this.REF.AVLOCALTIMER.setComponentTag("SETFOCUSITEM");this.REF.AVLOCALTIMER.setInterval(1);r.ln=404;P0.set(false);p0.set(P0.get());}r.ln=406;r.e();};cO.mthSETFOCUSITEM=function(p0)
{var m=this.REF,r=l.mR(this,cO,"SetFocusItem",409);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");P0.set(p0.get());r.ln=409;{r.ln=412;if((m.SETFOCUSITEM!=null)){r.ln=414;m.SETFOCUSITEM.setFocus(true);r.ln=416;m.VISIBLELIST.mthVERTICALSCROLLTO(m.SETFOCUSITEM.getDesign(),"TOP");r.ln=418;this.srSETFOCUSITEM(null);}p0.set(P0.get());}r.ln=422;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Note.Changed",425);r.ln=425;{r.ln=427;m.CURRENTEMPLOYEENOTEISDIRTY.set(true);r.ln=428;m.SAVECHANGES.setVisible(true);
}r.ln=430;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#SaveChanges.Click",433);r.ln=433;{r.ln=435;this.mthAVGOTOBUSYSTATE("Saving",false,u);r.ln=436;this.REF.AVLOCALTIMER.setComponentTag("SAVENOTE");this.REF.AVLOCALTIMER.setInterval(1);}r.ln=438;r.e();};cO.mthSAVENOTE=function(p0,p1){var f=this.FLD.DF_DET56O,m=this.REF,r=l.mR(this,cO,"SaveNote",441);var P0=r.cP("REFRESHDISPLAY","PRIM_BOLN");var P1=r.cP("GOTOFREESTATE","PRIM_BOLN");P0.set(p0);P1.set(p1.get());var C0=r.cDR("UPDATENOTE","DF_EMDSO","UPDATENOTE");
var C1=r.cDR("UPDATEATTACHMENT","DF_EMDSO","UPDATEATTACHMENT");var C2=r.cF("RETURNCODE",Fd.F3.Dc);var C3=r.cR("UPDATEVISIBLELIST","PRIM_BOLN");C0.iC();C1.iC();C2.iC();C3.iC();r.ln=441;{r.ln=452;if(l.tB(m.CURRENTEMPLOYEENOTEISDIRTY.get())){r.ln=454;C0.mthEXECUTE({FLD:{"XEMPNOTE":m.NOTE.get(),"XEMPGUID":m.CURRENTEMPLOYEENOTEGUID.get()}},{FLD:{"RETURNCODE":C2}});r.ln=456;if(l.s.ne(C2.get(),"OK")){r.ln=457;l.WEB().mthALERT("Attempt to update employee note failed.");p1.set(P1.get());r.e();return;}r.ln=461;
m.CURRENTEMPLOYEENOTEISDIRTY.set(false);r.ln=463;C3.set(true);}r.ln=467;if(l.tB(m.CURRENTEMPLOYEEIMAGEISDIRTY.get())){r.ln=469;C1.mthEXECUTE({FLD:{"XEMPNTATT":f.F9.get(),"XEMPGUID":m.CURRENTEMPLOYEENOTEGUID.get()},sm:"M"},{FLD:{"RETURNCODE":C2}});r.ln=471;if(l.s.ne(C2.get(),"OK")){r.ln=472;l.WEB().mthALERT("Attempt to update employee attachment failed.");p1.set(P1.get());r.e();return;}r.ln=476;m.CURRENTEMPLOYEEIMAGEISDIRTY.set(false);r.ln=478;C3.set(true);}r.ln=482;if(l.tB(C3.get())){r.ln=484;{var l1=m.VISIBLELIST.getItems().cI();
while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=485;if(l.s.eq(l.cast(ITEM.getDesign(),"DF_DET57O").getASSIGNEDEMPLOYEENOTEGUID(),m.CURRENTEMPLOYEENOTEGUID.get())){r.ln=486;l.cast(ITEM.getDesign(),"DF_DET57O").mthCREATEUPDATEITEM(l.t.Now(l.dt.Time(f.F7.get())),m.NOTE.get(),m.CURRENTEMPLOYEENOTEGUID.get(),m.CURRENTEMPLOYEEIMAGESUFFIX.get());r.ln=487;break;}r.ln=489;}l1.end();r.dR("ITEM");}}r.ln=493;m.SAVECHANGES.setVisible(false);r.ln=495;if(l.tB(P0.get())){r.ln=497;m.LOADEMPLOYEENOTEGUID.set(m.CURRENTEMPLOYEENOTEGUID.get());
r.ln=498;this.mthLOADSPECIFICNOTE(P1);}r.ln=502;P1.set(true);p1.set(P1.get());}r.ln=504;r.e();};function e7(sender,Ps){var f=this.FLD.DF_DET56O,m=this.REF,r=l.eR(this,cO,"#UploadAttachment.FileSelected",507);var P0=Ps.r("FILE");var C0=r.cF("P",Fd.F4.Dc);var C1=r.cR("SUFFIX","PRIM_ALPH");C0.iC();C1.iC();r.ln=507;{r.ln=513;if(l.n.gt(P0.getFileSize(),4194304)){r.ln=514;l.WEB().mthALERT(l.cat(l.cat("File ",P0.getName())," is more than 4Mb, which is the maximum attachment size that this example allows."));
r.e();return;}r.ln=518;if(l.n.lt(P0.getFileSize(),1)){r.ln=519;l.WEB().mthALERT(l.cat(l.cat("File ",P0.getName())," is empty. Choose a file that contains some data, to upload "));r.e();return;}r.ln=524;C1.set("UNKNOWN");r.ln=525;C0.set(l.s.LastPositionOf(P0.getName(),"."));r.ln=526;if(l.n.gt(C0.get(),1)){r.ln=527;C1.set(l.s.UpperCase(l.s.Substring(P0.getName(),l.add(C0.get(),1))));}r.ln=530;{var v1=C1.get();if(r.ln=531,l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.s.eq(v1,"DOC"),l.s.eq(v1,"DOCX")),l.s.eq(v1,"XLS")),l.s.eq(v1,"XLSX")),l.s.eq(v1,"JPG")),l.s.eq(v1,"PNG")),l.s.eq(v1,"BMP")),l.s.eq(v1,"PDF")),l.s.eq(v1,"PPT")),l.s.eq(v1,"PPTX")),l.s.eq(v1,"TXT")))
{r.ln=533;f.F9.set(P0.getBlob());r.ln=534;m.CURRENTEMPLOYEEIMAGEISDIRTY.set(true);r.ln=535;m.CURRENTEMPLOYEEIMAGESUFFIX.set(C1.get());r.ln=536;this.mthAVGOTOBUSYSTATE("Saving",false,u);r.ln=537;this.REF.AVLOCALTIMER.setComponentTag("SAVENOTEWITHREFRESH");this.REF.AVLOCALTIMER.setInterval(1);}else{r.ln=540;l.WEB().mthALERT(l.cat(l.cat("File ",P0.getName())," is not a valid type to be attached to an employee in this example."));}r.ln=542;}}r.ln=544;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DownLoadAttachment.Click",548);
var C0=r.cRR("GETATTACHASRESPONSE","DF_EMDSO","GETATTACHASRESPONSE");C0.iC();r.ln=548;{r.ln=552;C0.setTarget("NEW");r.ln=553;C0.mthEXECUTE({FLD:{"XEMPGUID":m.CURRENTEMPLOYEENOTEGUID.get()}},{});}r.ln=555;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPGUID"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_TEXT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"IOdSTS"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srSETFOCUSITEM=function(rn){this.sR("SETFOCUSITEM",rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_PHBN","PRIM_TBLO.ColumnDivider","PRIM_TBLO.Row","PRIM_TREE","PRIM_VS.Style","PRIM_TBLO.RowDivider","PRIM_TEXT","PRIM_IMAG","PRIM_WEB.FilePicker","PRIM_FLD","PRIM_BOLN","PRIM_DC.UnicodeString","PRIM_WEB.DataRequest","PRIM_WEB.ResourceRequest","PRIM_DTIM"],
dc:["DF_DET57O"],dp:["PRIM_TREE.TreeItem","PRIM_EVP","PRIM_BOLN","PRIM_ALPH"]});