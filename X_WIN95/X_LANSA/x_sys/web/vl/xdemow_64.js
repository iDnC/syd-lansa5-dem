﻿LANSA.addComponent({id:"XDEMOW_64",nm:"xDemoWebDropShadow",ot:"wp",tp:"Web Page",de:"Drop Shadow",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMONUMB",an:"xDemoNumber",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Number","FRA":"Nombre","JPN":"??","LLL":"Number"}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],h2:"",h3:"",de:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],dv:0,ia:["ASQN"]
}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOW_64",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C3=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C4=this.cR("DROPSHADOW","PRIM_VS","DropShadow");var C5=this.cR("STYLE2","PRIM_VS","Style");var C6=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C7=this.cR("LABEL1","PRIM_LABL");var C8=this.cF("BLURRADIUS",Fd.F1.SPINEDIT);
var C9=this.cF("SHADOWDEPTH",Fd.F1.SPINEDIT);var C10=this.cF("DIRECTION",Fd.F1.SPINEDIT);var C11=this.cR("TRANSPARENT","PRIM_CKBX");C0.setEffect(C4);C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.setBackgroundBrush(C3);C0.iC();C1.setColor("THEME300");C1.iC();C2.setColor("75:255:38");C2.iC();C3.setColor("255:255:255");C3.iC();C4.setColor("THEME300");C4.setShadowDepth(38);C4.setBlurRadius(44);C4.iC();C5.setBackgroundBrush(C6);C5.iC();C6.setColor("THEME50");C6.iC();
C7.setCaption("Label1");C7.setDisplayPosition(1);C7.setEllipses("WORD");C7.setLeft(152);C7.setParent(this);C7.setTabPosition(1);C7.setTabStop(false);C7.setTop(144);C7.setVerticalAlignment("CENTER");C7.setWidth(249);C7.setStyle(C0);C7.setHeight(121);C7.setAlignment("CENTER");C7.iC();C8.setDisplayPosition(3);C8.setLeft(552);C8.setParent(this);C8.setTabPosition(3);C8.setTop(64);C8.setCaption("Blur Radius");C8.setLabelType("CAPTION");C8.setHeight(25);C8.setEditFocusedStyle(C0);C8.setWidth(257);C8.aD();
C8.iC();C9.setDisplayPosition(2);C9.setLeft(552);C9.setParent(this);C9.setTabPosition(2);C9.setTop(96);C9.setCaption("Shadow Depth");C9.setLabelType("CAPTION");C9.setHeight(25);C9.setEditFocusedStyle(C0);C9.setWidth(257);C9.aD();C9.iC();C10.setDisplayPosition(4);C10.setLeft(552);C10.setParent(this);C10.setTabPosition(4);C10.setTop(128);C10.setWidth(257);C10.setCaption("Direction");C10.setLabelType("CAPTION");C10.setHeight(25);C10.aD();C10.iC();C11.setCaption("Transparent");C11.setDisplayPosition(5);
C11.setLeft(552);C11.setMarginLeft(2);C11.setParent(this);C11.setTabPosition(5);C11.setTop(32);C11.setHeight(29);C11.setWidth(223);C11.iC();C8.aH("CHANGED",this,e2);C9.aH("CHANGED",this,e3);C10.aH("CHANGED",this,e4);C11.aH("CLICK",this,e5);this.setHeight(505);this.setWidth(985);this.setStyle(C5);this.setTheme(l.THEME().get("2015LIGHTBLUE"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#com_owner.CreateInstance",19);r.ln=19;{r.ln=21;m.BLURRADIUS.set(m.DROPSHADOW.getBlurRadius());
r.ln=22;m.SHADOWDEPTH.set(m.DROPSHADOW.getShadowDepth());r.ln=23;m.DIRECTION.set(m.DROPSHADOW.getDirection());}r.ln=25;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BlurRadius.Changed",27);r.ln=27;{r.ln=29;m.DROPSHADOW.setBlurRadius(m.BLURRADIUS.get());}r.ln=31;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ShadowDepth.Changed",33);r.ln=33;{r.ln=35;m.DROPSHADOW.setShadowDepth(m.SHADOWDEPTH.get());}r.ln=37;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Direction.Changed",39);
r.ln=39;{r.ln=41;m.DROPSHADOW.setDirection(m.DIRECTION.get());}r.ln=43;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Transparent.Click",45);r.ln=45;{r.ln=47;if(l.s.eq(m.TRANSPARENT.getButtonState(),"CHECKED")){r.ln=49;m.BRUSH2.setColor("TRANSPARENT");}else{r.ln=53;m.BRUSH2.setColor("WHITE");}}r.ln=57;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMONUMB"});Fd.F1.SPINEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);
this.setHeight(20);this.setUsePicklist(false);this.setWidth(261);};l.cFC({co:Fd.F1.SPINEDIT,an:"PRIM_EVSE",fn:"XDEMONUMB",cn:"SpinEdit"});}},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_VS.DropShadow","PRIM_LABL","PRIM_EVSE","PRIM_CKBX"]});