﻿LANSA.addComponent({id:"VF_UI034O",ot:"rp",tp:"Reusable Part",de:"Slider Bar",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELN155",
ft:"S",ln:15,dc:5,ec:"N",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F3:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{avCurrentPercentage:{da:"r"}},mt:{zInt_AttachTo:
{ps:{"VF_AC005OReference":{pt:"i"}}},zInt_UpdateSlider:{ps:{"ForVF_AC005OReference":{pt:"i"}}},zInt_DetachFrom:{ps:{"VF_AC005OReference":{pt:"i"}}},zInt_Initialize:{},zInt_HideCurrentPercentage:{},zInt_ShowCurrentPercentage:{ps:{"To":{pt:"i"},"UpdateButtonPosition":{pt:"i"},"KnownButtonLeftPosition":{pt:"i"}}},avChangePercentage:{ps:{"To":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI034O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("SLIDERPANEL","PRIM_PANL");
var C3=this.cR("SLIDERPERCENTAGE","PRIM_LABL");var C4=this.cR("SLIDERBUTTON","PRIM_PANL");var C5=this.cR("CENTERLINE","PRIM_LABL");var C6=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C7=this.cR("BACKBRUSH","PRIM_VS","SolidBrush");var C8=this.cR("LIGHTBACKBRUSH","PRIM_VS","SolidBrush");var C9=this.cR("SLIDER","PRIM_VS","Style");var C10=this.cR("SMALLFONT","PRIM_VS","Style");var C11=this.cF("BUTTONWIDTH",Fd.F1.Dc);var C12=this.cF("MINIMUMPERCENTAGE",Fd.F1.Dc);var C13=this.cF("MAXIMUMPERCENTAGE",Fd.F1.Dc);
var C14=this.cF("MINIMUMLEFT",Fd.F1.Dc);var C15=this.cF("MAXIMUMLEFT",Fd.F1.Dc);var C16=this.cF("CURRENTPERCENTAGE",Fd.F1.Dc);var C17=this.cR("SETTINGSPOPUPMENU","VF_UI008O");var C18=this.cR("PIXELTOPERCENTAGE","PRIM_ACOL");this.cD("CURRENTATTACHEDTOVF_AC005O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setDisplayPosition(1);C2.setParent(this);C2.setTabPosition(1);C2.setHeight(41);C2.setLeft(0);C2.setTop(0);C2.setWidth(256);C2.iC();C3.setParent(this);C3.setDisplayPosition(2);
C3.setTabPosition(2);C3.setTabStop(false);C3.setWidth(57);C3.setHeight(41);C3.setLeft(256);C3.setTop(0);C3.setAlignment("CENTER");C3.setVerticalAlignment("CENTER");C3.setStyle(C10);C3.iC();C4.setParent(C2);C4.setDisplayPosition(2);C4.setTabPosition(2);C4.setWidth(8);C4.setTouchMove("HORIZONTAL");C4.setStyle(C9);C4.iC();C5.setParent(C2);C5.setDisplayPosition(1);C5.setTabPosition(1);C5.setTabStop(false);C5.setStyle(C6);C5.iC();C6.setBorderBottom(1);C6.iC();C7.setColor("GRAY");C7.iC();C8.setColor("GRAY");
C8.iC();C9.setBackgroundBrush(C7);C9.iC();C10.setFontSize(8);C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();C13.aD();C13.iC();C14.aD();C14.iC();C15.aD();C15.iC();C16.aD();C16.iC();C17.iC();C18.setCollects("STD_INT");C18.iC();C2.aH("CLICK",this,e4);C3.aH("CLICK",this,e3);C4.aH("TOUCHCHANGE",this,e2);C17.aH("ITEMSELECTED",this,e5);this.setDisplayPosition(1);this.setHeight(41);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(313);this.aH("CLICK",this,e1);}});cO.mthZINT_ATTACHTO=function(p0)
{var m=this.REF,r=l.mR(this,cO,"zInt_AttachTo",42);var P0=r.cPD("VF_AC005OREFERENCE");P0=p0;r.ln=42;{r.ln=45;if((P0!==m.CURRENTATTACHEDTOVF_AC005O)){r.ln=47;this.srCURRENTATTACHEDTOVF_AC005O(P0);r.ln=49;this.mthZINT_UPDATESLIDER(P0);}}r.ln=53;r.e();};cO.mthZINT_UPDATESLIDER=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_UpdateSlider",56);var P0=r.cPD("FORVF_AC005OREFERENCE");P0=p0;r.ln=56;{r.ln=59;if((P0===m.CURRENTATTACHEDTOVF_AC005O)){r.ln=61;this.mthZINT_SHOWCURRENTPERCENTAGE(m.CURRENTATTACHEDTOVF_AC005O.getCURRENTSCALE(),true,m.CURRENTATTACHEDTOVF_AC005O.getCURRENTSLIDERBARSCALEPOSITION());
r.ln=63;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSLIDERBARSCALEPOSITION(m.SLIDERBUTTON.getLeft());}}r.ln=67;r.e();};cO.mthZINT_DETACHFROM=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_DetachFrom",70);var P0=r.cPD("VF_AC005OREFERENCE");P0=p0;r.ln=70;{r.ln=73;if(l.or((m.CURRENTATTACHEDTOVF_AC005O===P0),(P0==null))){r.ln=75;this.mthZINT_HIDECURRENTPERCENTAGE();r.ln=77;this.srCURRENTATTACHEDTOVF_AC005O(null);}}r.ln=81;r.e();};cO.mthZINT_INITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",84);
var C0=r.cF("PERCENTAGEPERPIXELACCUMULATED",Fd.F2.Dc);var C1=r.cF("INDEX",Fd.F1.Dc);var C2=r.cF("LIMIT",Fd.F1.Dc);var C3=r.cF("PERCENTAGEPERPIXEL",Fd.F2.Dc);var C4=r.cD("C4");C0.iC();C1.iC();C2.iC();C3.iC();r.ln=84;{r.ln=92;m.BUTTONWIDTH.set(10);r.ln=93;m.MINIMUMPERCENTAGE.set(25);r.ln=94;m.MAXIMUMPERCENTAGE.set(200);r.ln=98;m.SETTINGSPOPUPMENU.mthZINT_INITIALIZE(true,false,"");r.ln=100;m.SETTINGSPOPUPMENU.mthZINT_PUTMENUITEM("50%","50","SYM=DOWN_ARROW",u,u,u,u,u,u,u,u,u);r.ln=102;m.SETTINGSPOPUPMENU.mthZINT_PUTMENUITEM("75%","75","SYM=DOWN_ARROW",u,u,u,u,u,u,u,u,u);
r.ln=104;m.SETTINGSPOPUPMENU.mthZINT_PUTMENUITEM("100%","100","SYM=TICK",u,u,u,u,u,u,u,u,u);r.ln=106;m.SETTINGSPOPUPMENU.mthZINT_PUTMENUITEM("125%","125","SYM=UP_ARROW",u,u,u,u,u,u,u,u,u);r.ln=108;m.SETTINGSPOPUPMENU.mthZINT_PUTMENUITEM("150%","150","SYM=UP_ARROW",u,u,u,u,u,u,u,u,u);r.ln=110;m.SLIDERPERCENTAGE.setHeight(m.SLIDERPERCENTAGE.getParent().getHeight());m.SLIDERPERCENTAGE.setWidth(37);m.SLIDERPERCENTAGE.setLeft(l.sub(m.SLIDERPERCENTAGE.getParent().getWidth(),38));m.SLIDERPERCENTAGE.setTop(0);
r.ln=112;m.SLIDERPANEL.setHeight(m.SLIDERPANEL.getParent().getHeight());m.SLIDERPANEL.setWidth(l.sub(m.SLIDERPANEL.getParent().getWidth(),m.SLIDERPERCENTAGE.getWidth()));m.SLIDERPANEL.setLeft(0);m.SLIDERPANEL.setTop(0);r.ln=114;m.SLIDERBUTTON.setHeight(m.SLIDERBUTTON.getParent().getHeight());m.SLIDERBUTTON.setWidth(m.BUTTONWIDTH.get());m.SLIDERBUTTON.setTop(0);m.SLIDERBUTTON.setLeft(0);m.SLIDERBUTTON.setDisplayPosition(1);r.ln=116;m.CENTERLINE.setHeight(l.div(m.SLIDERPANEL.getHeight(),2));m.CENTERLINE.setWidth(l.sub(m.SLIDERPANEL.getWidth(),4));
m.CENTERLINE.setTop(0);m.CENTERLINE.setLeft(2);m.CENTERLINE.setDisplayPosition(2);r.ln=118;m.MINIMUMLEFT.set(0);r.ln=119;m.MAXIMUMLEFT.set(l.add(l.sub(m.SLIDERPANEL.getWidth(),m.SLIDERBUTTON.getWidth()),1));r.ln=121;C3.set(l.div(l.sub(m.MAXIMUMPERCENTAGE.get(),m.MINIMUMPERCENTAGE.get()),m.SLIDERPANEL.getWidth()));r.ln=123;C0.set(m.MINIMUMPERCENTAGE.get());r.ln=125;for(var i1=l.tI(m.MINIMUMLEFT.get()),s1=1,t1=l.tI(m.MAXIMUMLEFT.get());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=126;
C4=r.sR("C4",new Fd.F1.Dc());r.ln=127;C4.setValue(C0.get());r.ln=128;m.PIXELTOPERCENTAGE.mthINSERT(C4);r.ln=129;C0.set(l.add(C0.get(),C3.get()));}r.ln=132;m.PIXELTOPERCENTAGE.get(l.add(m.MINIMUMLEFT.get(),1)).setValue(m.MINIMUMPERCENTAGE.get());r.ln=133;m.PIXELTOPERCENTAGE.get(l.add(m.MAXIMUMLEFT.get(),1)).setValue(m.MAXIMUMPERCENTAGE.get());r.ln=135;C1.set(l.mul(l.sub(100,m.MINIMUMPERCENTAGE.get()),C3.get()));r.ln=136;m.PIXELTOPERCENTAGE.get(l.sub(m.MAXIMUMLEFT.get(),1)).setValue(100);r.ln=138;this.mthZINT_HIDECURRENTPERCENTAGE();
}r.ln=140;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Com_Owner.Click",143);var P0=Ps.r("HANDLED");r.ln=143;{r.ln=145;P0.set(true);}r.ln=147;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SliderButton.TouchChange",151);var P0=Ps.r("MOVELEFT");var P1=Ps.r("CONTINUE");var C0=r.cF("PROPOSEDLEFTPIXEL",Fd.F1.Dc);var C1=r.cF("NEWPERCENTAGE",Fd.F1.Dc);C0.iC();C1.iC();r.ln=151;{r.ln=156;if(((m.CURRENTATTACHEDTOVF_AC005O!=null)&&l.b.Not(m.CURRENTATTACHEDTOVF_AC005O.getSCALINGCURRENTLYALLOWED())))
{r.ln=157;P1.set(false);r.e();return;}r.ln=161;P1.set(true);r.ln=163;if(l.n.eq(P0.get(),0)){r.e();return;}r.ln=167;C0.set(l.add(m.SLIDERBUTTON.getLeft(),P0.get()));r.ln=169;if(l.n.lt(C0.get(),m.MINIMUMLEFT.get())){r.ln=170;m.SLIDERBUTTON.setLeft(m.MINIMUMLEFT.get());r.ln=171;P1.set(false);r.e();return;}r.ln=175;if(l.n.gt(C0.get(),m.MAXIMUMLEFT.get())){r.ln=176;m.SLIDERBUTTON.setLeft(m.MAXIMUMLEFT.get());r.ln=177;P1.set(false);r.e();return;}r.ln=181;C1.set(m.PIXELTOPERCENTAGE.get(l.add(C0.get(),1)).get());
r.ln=183;this.mthZINT_SHOWCURRENTPERCENTAGE(C1.get(),false,u);r.ln=185;if((m.CURRENTATTACHEDTOVF_AC005O!=null)){r.ln=186;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSCALE(m.CURRENTPERCENTAGE.get());}}r.ln=190;r.e();};cO.mthZINT_HIDECURRENTPERCENTAGE=function(){var r=l.mR(this,cO,"zInt_HideCurrentPercentage",193);r.ln=193;{r.ln=195;this.setVisible(false);}r.ln=197;r.e();};cO.mthZINT_SHOWCURRENTPERCENTAGE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCurrentPercentage",200);var P0=r.cPF("TO",Fd.F1.Dc);
var P1=r.cP("UPDATEBUTTONPOSITION","PRIM_BOLN");var P2=r.cPF("KNOWNBUTTONLEFTPOSITION",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set((p2===u)?(-1):(p2));var C0=r.cF("LOGICALLEFT",Fd.F1.Dc);C0.iC();r.ln=200;{r.ln=207;if(l.b.Not(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getALLOWPANELZOOMING())){r.ln=209;this.mthZINT_HIDECURRENTPERCENTAGE();}else{r.ln=213;this.setVisible(true);r.ln=215;if(l.n.lt(P0.get(),m.MINIMUMPERCENTAGE.get())){r.ln=216;P0.set(m.MINIMUMPERCENTAGE.get());}r.ln=219;if(l.n.gt(P0.get(),m.MAXIMUMPERCENTAGE.get()))
{r.ln=220;P0.set(m.MAXIMUMPERCENTAGE.get());}r.ln=223;m.CURRENTPERCENTAGE.set(P0.get());r.ln=225;m.SLIDERPERCENTAGE.set(l.cat(l.n.AsString(m.CURRENTPERCENTAGE.get()),"%"));r.ln=227;if(l.tB(P1.get())){r.ln=229;if(l.n.ge(P2.get(),0)){r.ln=231;m.SLIDERBUTTON.setLeft(P2.get());}else{r.ln=235;{var l1=m.PIXELTOPERCENTAGE.cI();while(l1.step()){var PERCENTAGE=r.sR("PERCENTAGE",l1.item());var LEFTPOSITION=r.sR("LEFTPOSITION",l1.key());r.ln=236;if(l.n.ge(PERCENTAGE.get(),m.CURRENTPERCENTAGE.get())){r.ln=237;
m.SLIDERBUTTON.setLeft(LEFTPOSITION.get());r.ln=238;break;}r.ln=240;}l1.end();r.dR("PERCENTAGE");r.dR("LEFTPOSITION");}}}}}r.ln=248;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SliderPercentage.click",251);var P0=Ps.r("HANDLED");r.ln=251;{r.ln=253;P0.set(true);r.ln=255;if(((m.CURRENTATTACHEDTOVF_AC005O!=null)&&l.b.Not(m.CURRENTATTACHEDTOVF_AC005O.getSCALINGCURRENTLYALLOWED()))){r.e();return;}r.ln=259;m.SETTINGSPOPUPMENU.mthZINT_SHOW(u);}r.ln=261;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SliderPanel.click",264);
var P0=Ps.r("HANDLED");r.ln=264;{r.ln=266;P0.set(true);r.ln=268;if(((m.CURRENTATTACHEDTOVF_AC005O!=null)&&l.b.Not(m.CURRENTATTACHEDTOVF_AC005O.getSCALINGCURRENTLYALLOWED()))){r.e();return;}r.ln=272;m.SETTINGSPOPUPMENU.mthZINT_SHOW(u);}r.ln=274;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SettingsPopUpMenu.ItemSelected",277);var P0=Ps.r("EVENTNAME");var C0=r.cF("PERCENTAGE",Fd.F1.Dc);C0.iC();r.ln=277;{r.ln=282;if((m.CURRENTATTACHEDTOVF_AC005O!=null)){r.ln=284;C0.set(l.s.AsNumber(P0.get()));
r.ln=286;this.mthZINT_SHOWCURRENTPERCENTAGE(C0.get(),true,-1);r.ln=288;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSLIDERBARSCALEPOSITION(m.SLIDERBUTTON.getLeft());r.ln=290;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSCALE(m.CURRENTPERCENTAGE.get());}}r.ln=294;r.e();};cO.mthAVCHANGEPERCENTAGE=function(p0){var m=this.REF,r=l.mR(this,cO,"avChangePercentage",300);var P0=r.cPF("TO",Fd.F1.Dc);P0.set(p0);r.ln=300;{r.ln=303;if(((m.CURRENTATTACHEDTOVF_AC005O!=null)&&m.CURRENTATTACHEDTOVF_AC005O.getSCALINGCURRENTLYALLOWED()))
{r.ln=305;this.mthZINT_SHOWCURRENTPERCENTAGE(P0.get(),true,-1);r.ln=307;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSLIDERBARSCALEPOSITION(m.SLIDERBUTTON.getLeft());r.ln=309;m.CURRENTATTACHEDTOVF_AC005O.setCURRENTSCALE(m.CURRENTPERCENTAGE.get());}}r.ln=313;r.e();};cO.getAVCURRENTPERCENTAGE=function(){return this.REF.CURRENTPERCENTAGE.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELN155"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srCURRENTATTACHEDTOVF_AC005O=function(rn){this.sR("CURRENTATTACHEDTOVF_AC005O",rn);};},{rc:["VF_SY001O","VF_SY001X","VF_UI008O"],rp:["PRIM_PANL","PRIM_LABL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_FLD","PRIM_ACOL"],dc:["VF_AC005O"]});