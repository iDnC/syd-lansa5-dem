﻿LANSA.addComponent({id:"VF_UI041O",ot:"rp",tp:"Reusable Part",de:"\OC=Create an application sidebar pop up",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{TotalBusinessObjectItems:{da:"r"}},mt:{zInt_Initialize:{ps:{"WithReference":{pt:"i"}}},zInt_ShowPopOver:{},zInt_ClosePopOver:{},zInt_Terminate:{}},ev:{Closed:{}},co:function(){cO.aN.call(this);this.aF("VF_UI041O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("PANELS","PRIM_ACOL");var C3=this.cR("HEADINGLABELS","PRIM_ACOL");var C4=this.cR("BOLABELS","PRIM_ACOL");var C5=this.cR("IMAGES","PRIM_ACOL");var C6=this.cR("LEFTEDGEBORDER","PRIM_VS","Style");
var C7=this.cR("BOLDTEXT","PRIM_VS","Style");var C8=this.cF("USEUNSELECTEDOPACITY",Fd.F1.Dc);var C9=this.cF("TOTALBUSINESSOBJECTITEMS",Fd.F1.Dc);this.cD("POPUPHANDLER");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setCollects("PRIM_PANL");C2.iC();C3.setCollects("PRIM_LABL");C3.iC();C4.setCollects("PRIM_LABL");C4.iC();C5.setCollects("VF_UI005O");C5.iC();C6.setBorderLeft(1);C6.iC();C7.setBold(true);C7.iC();C8.aD();C8.iC();C9.aD();C9.iC();C0.aH("CURRENTTHEMEALTERED",this,e5);
C4.aH("CLICK",this,e2);C4.aH("MOUSEENTER",this,e3);C4.aH("MOUSELEAVE",this,e4);C5.aH("WASCLICKED",this,e2);C5.aH("MOUSEENTER",this,e3);C5.aH("MOUSELEAVE",this,e4);this.setLeft(0);this.setTop(0);this.setDisplayPosition(1);this.setTabPosition(1);}});cO.mthZINT_INITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",31);var P0=r.cPD("WITHREFERENCE");P0=p0;var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cD("C3");var C4=r.cR("MULTIPLEVIEWS","PRIM_BOLN");var C5=r.cF("LABELHEIGHT",Fd.F1.Dc);
var C6=r.cF("LABELWIDTH",Fd.F1.Dc);var C7=r.cF("MARGIN",Fd.F1.Dc);var C8=r.cF("NEXTPANELLEFT",Fd.F1.Dc);var C9=r.cF("PANELWIDTH",Fd.F1.Dc);var C10=r.cF("IMAGEHEIGHTANDWIDTH",Fd.F1.Dc);var C11=r.cF("ESTIMATEDPIXELWIDTH",Fd.F1.Dc);var C12=r.cF("WIDESTESTIMATEDPIXELWIDTH",Fd.F1.Dc);C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.iC();C12.iC();r.ln=31;{r.ln=50;this.srPOPUPHANDLER(l.cC("VF_UI021O"));r.ln=52;m.POPUPHANDLER.mthZINT_INITIALIZE(this);r.ln=54;m.USEUNSELECTEDOPACITY.set(75);r.ln=56;
m.LEFTEDGEBORDER.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=58;C5.set(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_POPUPLABELHEIGHT());r.ln=59;C6.set(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_POPUPLABELWIDTH());r.ln=60;C7.set(4);r.ln=61;C10.set(16);r.ln=62;C9.set(l.add(l.add(l.add(C10.get(),C6.get()),l.mul(3,C7.get())),1));r.ln=64;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_BACKGROUNDSTYLE());r.ln=66;this.getStyle().setTextColor(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_FONTSTYLE().getTextColor());
r.ln=68;this.getStyle().setFaceName(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_FONTSTYLE().getFaceName());r.ln=70;this.setHeight(0);r.ln=72;C4.set(l.n.gt(P0.getCHILDVF_FP018O().getItemCount(),1));r.ln=74;{var l1=P0.getCHILDVF_FP018O().cI();while(l1.step()){var OBJVF_FP018=r.sR("OBJVF_FP018",l1.item());r.ln=75;if(OBJVF_FP018.getHASMENUSELECTABLECHILD()){r.ln=79;C0=r.sR("C0",l.cC("PRIM_PANL"));r.ln=81;m.PANELS.mthINSERT(C0);r.ln=83;C0.setParent(this);C0.setHeight(C7.get());C0.setWidth(C9.get());
C0.setTop(0);C0.setLeft(C8.get());r.ln=85;this.setWidth(l.mul(m.PANELS.getItemCount(),C9.get()));r.ln=87;C8.set(l.add(C8.get(),C9.get()));r.ln=89;if(l.n.gt(m.PANELS.getItemCount(),1)){r.ln=90;C0.getStyles().mthADD(m.LEFTEDGEBORDER);}r.ln=95;if(l.tB(C4.get())){r.ln=97;C1=r.sR("C1",l.cC("PRIM_LABL"));r.ln=99;m.HEADINGLABELS.mthINSERT(C1);r.ln=101;C1.setParent(C0);C1.setHeight(C5.get());C1.setWidth(C6.get());C1.setLeft(C7.get());C1.setTop(C0.getHeight());C1.setCaption(OBJVF_FP018.getUCAPTION());C1.setAlignment("CENTER");
C1.setVerticalAlignment("CENTER");r.ln=103;C1.getStyles().mthADD(m.BOLDTEXT);r.ln=105;C0.setHeight(l.add(l.add(C1.getTop(),C1.getHeight()),C7.get()));}r.ln=111;{var l2=OBJVF_FP018.getCHILDVF_FR003O().cI();while(l2.step()){var OBJVF_FR003O=r.sR("OBJVF_FR003O",l2.item());r.ln=114;m.TOTALBUSINESSOBJECTITEMS.set(l.add(m.TOTALBUSINESSOBJECTITEMS.get(),1));r.ln=116;if(OBJVF_FR003O.getUMENUSELECT()){r.ln=119;C3=r.sR("C3",l.cC("VF_UI005O"));r.ln=121;m.IMAGES.mthINSERT(C3);r.ln=123;C3.setParent(C0);C3.setHeight(C10.get());
C3.setWidth(C10.get());C3.setLeft(l.add(C7.get(),1));C3.setTop(l.add(C0.getHeight(),l.div(l.sub(C5.get(),C10.get()),2)));C3.setComponentTag(OBJVF_FR003O.getUIDENTIFIER());r.ln=125;C3.mthZINT_INTIALIZEIMAGE(OBJVF_FR003O.getUVLFONEIMAGE(),OBJVF_FR003O.getUIMAGESOURCE(),OBJVF_FR003O.getUHINT(),"SMALL",true,false,u,true,u);r.ln=129;C2=r.sR("C2",l.cC("PRIM_LABL"));r.ln=131;m.BOLABELS.mthINSERT(C2);r.ln=133;C2.setParent(C0);C2.setHeight(C5.get());C2.setWidth(C6.get());C2.setLeft(l.add(l.add(C10.get(),l.add(2,C7.get())),1));
C2.setTop(C0.getHeight());C2.setCaption(OBJVF_FR003O.getUCAPTION());C2.setAlignment("LEFT");C2.setVerticalAlignment("CENTER");C2.setOpacity(m.USEUNSELECTEDOPACITY.get());C2.setHint(OBJVF_FR003O.getUHINT());C2.setComponentTag(OBJVF_FR003O.getUIDENTIFIER());r.ln=135;C0.setHeight(l.add(l.add(C2.getTop(),C2.getHeight()),C7.get()));r.ln=138;if(l.b.Not(C4.get())){r.ln=139;C11.set(m.USYSTEM.ref.getCURRENTTHEME().mthESTIMATEPIXELWIDTH(C2.getCaption()));r.ln=140;if(l.n.gt(C11.get(),C12.get())){r.ln=141;C12.set(C11.get());
}}}r.ln=146;}l2.end();r.dR("OBJVF_FR003O");}r.ln=149;if(l.n.gt(C0.getHeight(),this.getHeight())){r.ln=150;this.setHeight(C0.getHeight());}}r.ln=154;}l1.end();r.dR("OBJVF_FP018");}r.ln=157;if(l.n.gt(m.PANELS.getItemCount(),1)){r.ln=158;for(var l1=m.PANELS.cI();l1.step();){l1.item().setHeight(this.getHeight())};}r.ln=163;if(l.b.Not(C4.get())){r.ln=164;if(l.n.gt(C6.get(),C12.get())){r.ln=166;C6.set(C12.get());r.ln=168;for(var l1=m.HEADINGLABELS.cI();l1.step();){l1.item().setWidth(C6.get())};r.ln=169;
for(var l1=m.BOLABELS.cI();l1.step();){l1.item().setWidth(C6.get())};r.ln=170;C9.set(l.add(l.add(l.add(C10.get(),C6.get()),l.mul(3,C7.get())),1));r.ln=171;for(var l1=m.PANELS.cI();l1.step();){l1.item().setWidth(C9.get())};r.ln=172;this.setWidth(C9.get());}}}r.ln=177;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#PopupHandler.WasClosed",181);r.ln=181;{r.ln=183;this.fE("CLOSED");}r.ln=185;r.e();};cO.mthZINT_SHOWPOPOVER=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ShowPopOver",188);r.ln=188;{
r.ln=191;m.POPUPHANDLER.mthZINT_SHOWPOPOVER(u,u,u,u,"FADEINANDSCALE",false,u,u,u,u);}r.ln=193;r.e();};cO.mthZINT_CLOSEPOPOVER=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ClosePopOver",197);r.ln=197;{r.ln=199;m.POPUPHANDLER.mthZINT_CLOSEPOPOVER();}r.ln=201;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",204);r.ln=204;{r.ln=207;if((m.POPUPHANDLER!=null)){r.ln=208;m.POPUPHANDLER.mthZINT_TERMINATE();r.ln=209;this.srPOPUPHANDLER(null);}r.ln=212;m.IMAGES.mthREMOVEALL();
r.ln=213;m.PANELS.mthREMOVEALL();r.ln=214;m.HEADINGLABELS.mthREMOVEALL();r.ln=215;m.BOLABELS.mthREMOVEALL();}r.ln=217;r.e();};function e2(LABELORIMAGE,Ps){var m=this.REF,r=l.eR(this,cO,"#BOLabels<>.Click #Images<>.WasClicked",220);var C0=r.cD("C0");r.ln=220;{r.ln=224;this.mthZINT_CLOSEPOPOVER();r.ln=226;C0=r.sR("C0",l.cast(m.USYSTEM.ref.mthZINT_GETVF_AC001OBJECT(LABELORIMAGE.getComponentTag()),"VF_FR003O"));r.ln=228;m.USYSTEM.ref.mthZINT_SELECTBUSINESSOBJECTINSTANCE(C0,this.getComponentPatternName(),true);
}r.ln=230;r.e();};function e3(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#BOLabels<>.MouseEnter #Images<>.MouseEnter",233);var C0=r.cF("LIMIT",Fd.F1.Dc);var C1=r.cF("INDEX",Fd.F1.Dc);var C2=r.cD("C2");var C3=r.cD("C3");C0.iC();C1.iC();r.ln=233;{r.ln=241;C0.set(m.BOLABELS.getItemCount());r.ln=243;for(var i1=1,s1=1,t1=l.tI(C0.get());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=244;C2=r.sR("C2",m.BOLABELS.get(C1.get()));r.ln=245;C3=r.sR("C3",m.IMAGES.get(C1.get()));r.ln=246;if(((SENDER===C2)||(SENDER===C3)))
{r.ln=247;C2.setOpacity(100);C3.setOpacity(100);r.ln=248;C2.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_MOUSEOVERSTYLE());r.ln=249;C3.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_MOUSEOVERSTYLE());r.ln=250;break;}}}r.ln=254;r.e();};function e4(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#BOLabels<>.MouseLeave #Images<>.MouseLeave",258);var C0=r.cF("LIMIT",Fd.F1.Dc);var C1=r.cF("INDEX",Fd.F1.Dc);var C2=r.cD("C2");var C3=r.cD("C3");C0.iC();C1.iC();r.ln=258;{
r.ln=266;C0.set(m.BOLABELS.getItemCount());r.ln=268;for(var i1=1,s1=1,t1=l.tI(C0.get());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=269;C2=r.sR("C2",m.BOLABELS.get(C1.get()));r.ln=270;C3=r.sR("C3",m.IMAGES.get(C1.get()));r.ln=271;if(((SENDER===C2)||(SENDER===C3))){r.ln=272;C2.setOpacity(m.USEUNSELECTEDOPACITY.get());C3.setOpacity(m.USEUNSELECTEDOPACITY.get());r.ln=273;C2.getStyles().mthREMOVE(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_MOUSEOVERSTYLE());r.ln=274;C3.getStyles().mthREMOVE(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_MOUSEOVERSTYLE());
r.ln=275;break;}}}r.ln=279;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#uSystem.CurrentThemeAltered",283);r.ln=283;{r.ln=285;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_BACKGROUNDSTYLE());r.ln=287;this.getStyle().setTextColor(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_FONTSTYLE().getTextColor());r.ln=289;this.getStyle().setFaceName(m.USYSTEM.ref.getCURRENTTHEME().getSIDEBARMENU_FONTSTYLE().getFaceName());}r.ln=292;r.e();};cO.getTOTALBUSINESSOBJECTITEMS=function()
{return this.REF.TOTALBUSINESSOBJECTITEMS.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srPOPUPHANDLER=function(rn){if(this.REF.POPUPHANDLER!=null){this.REF.POPUPHANDLER.rH("WASCLOSED",this,e1);}this.sR("POPUPHANDLER",rn);if(this.REF.POPUPHANDLER!=null){this.REF.POPUPHANDLER.aH("WASCLOSED",this,e1);}};},{rc:["VF_SY001O","VF_FP001O"],rp:["PRIM_PANL","PRIM_ACOL","PRIM_VS.Style","PRIM_FLD","PRIM_HINT"],dc:["VF_UI021O","VF_UI005O","VF_FR003O"],
dp:["PRIM_PANL","PRIM_LABL","PRIM_BOLN"]});