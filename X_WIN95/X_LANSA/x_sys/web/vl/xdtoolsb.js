﻿LANSA.addComponent({id:"XDTOOLSB",nm:"xDToolsBanner",ot:"rp",tp:"Reusable Part",de:"Banner Images",tl:14020000},function(l,oI,u){var rc1=l.cB("xsbanner1.jpg");var rc2=l.cB("xsbanner2.jpg");var rc3=l.cB("xsbanner3.jpg");var cO=l.rC(oI,{an:"XDTOOLSP",mt:{Next:{},Previous:{},Animate:{ps:{"Image":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("IMAGE1ITEM1","PRIM_TBLO","Item");
var C4=this.cR("IMAGE2ITEM1","PRIM_TBLO","Item");var C5=this.cR("IMAGE3ITEM1","PRIM_TBLO","Item");var C6=this.cR("IMAGE1","PRIM_IMAG");var C7=this.cR("IMAGE2","PRIM_IMAG");var C8=this.cR("IMAGE3","PRIM_IMAG");var C9=this.cR("TIMER","PRIM_TIMR");var C10=this.cR("IMAGES","PRIM_ACOL");var C11=this.cR("ACTIVEIMAGE","PRIM_NMBR");C0.setSizing("CONTENTHEIGHT");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setManage(C6);C3.setParent(C0);
C3.setRow(C2);C3.setAlignment("TOPCENTER");C3.setSizing("CONTENTHEIGHTFITTOWIDTH");C3.iC();C4.setColumn(C1);C4.setManage(C7);C4.setParent(C0);C4.setRow(C2);C4.setAlignment("TOPCENTER");C4.setSizing("CONTENTHEIGHTFITTOWIDTH");C4.iC();C5.setColumn(C1);C5.setManage(C8);C5.setParent(C0);C5.setRow(C2);C5.setAlignment("TOPCENTER");C5.setSizing("CONTENTHEIGHTFITTOWIDTH");C5.iC();C6.setDisplayPosition(1);C6.setImage(rc1);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(0);
C6.setHeight(199);C6.setWidth(737);C6.iC();C7.setDisplayPosition(2);C7.setImage(rc2);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(0);C7.setVisible(false);C7.setHeight(199);C7.setWidth(737);C7.iC();C8.setDisplayPosition(3);C8.setImage(rc3);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(3);C8.setTabStop(false);C8.setTop(0);C8.setVisible(false);C8.setHeight(199);C8.setWidth(737);C8.iC();C9.setInterval(6000);C9.iC();C10.setCollects("PRIM_IMAG");C10.iC();C11.iC();
C9.aH("TICK",this,e2);this.setWidth(737);this.setLayoutManager(C0);this.setHeight(199);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",20);r.ln=20;{r.ln=22;m.ACTIVEIMAGE.set(1);r.ln=24;m.IMAGES.mthINSERT(m.IMAGE1);r.ln=25;m.IMAGES.mthINSERT(m.IMAGE2);r.ln=26;m.IMAGES.mthINSERT(m.IMAGE3);}r.ln=28;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Timer.Tick",30);r.ln=30;{r.ln=32;this.mthNEXT();}r.ln=34;r.e();};cO.mthNEXT=function()
{var m=this.REF,r=l.mR(this,cO,"Next",36);r.ln=36;{r.ln=38;cO.mthANIMATE.call(this,l.add(m.ACTIVEIMAGE.get(),1));}r.ln=40;r.e();};cO.mthPREVIOUS=function(){var m=this.REF,r=l.mR(this,cO,"Previous",42);r.ln=42;{r.ln=44;cO.mthANIMATE.call(this,l.sub(m.ACTIVEIMAGE.get(),1));}r.ln=46;r.e();};cO.mthANIMATE=function(p0){var m=this.REF,r=l.mR(this,cO,"Animate",48);var P0=r.cP("IMAGE","PRIM_NMBR");P0.set(p0);r.ln=48;{r.ln=51;m.TIMER.mthSTOP();r.ln=53;if(l.tB(l.n.gt(P0.get(),m.IMAGES.getItemCount()))){r.ln=55;
P0.set(1);}r.ln=59;if(l.tB(l.n.eq(P0.get(),0))){r.ln=61;P0.set(1);}r.ln=65;cO.mthTRANSITION.call(this,m.IMAGES.get(m.ACTIVEIMAGE.get()),m.IMAGES.get(P0.get()),"FADEFROMTOP",1500);r.ln=67;m.ACTIVEIMAGE.set(P0.get());r.ln=69;m.TIMER.mthSTART();}r.ln=71;r.e();};},{rc:["XDTOOLSP"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_TIMR","PRIM_ACOL","PRIM_NMBR"],dp:["PRIM_ANIM"]});