﻿LANSA.addComponent({id:"XDEMOMES",nm:"xDemoMessageBar",ot:"rp",tp:"Reusable Part",de:"Message Bar",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximageup1.png");var rc2=l.cB("ximagedet.png");var rc3=l.cB("ximaged_4.png");var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{ActivateMessage:
{ps:{"Index":{pt:"i"}}},ShowMessagesPopup:{}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOMES",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("COLUMN5","PRIM_TBLO","Column");var C7=this.cR("ROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("MESSAGETEXTITEM1","PRIM_TBLO","Item");var C11=this.cR("TABLELAYOUT2","PRIM_TBLO");var C12=this.cR("COLUMN4","PRIM_TBLO","Column");var C13=this.cR("ROW2","PRIM_TBLO","Row");var C14=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C16=this.cR("MESSAGETEXT","PRIM_LABL");var C17=this.cR("NEXT","PRIM_SPBN");var C18=this.cR("SHOWALLMESSAGES","PRIM_SPBN");var C19=this.cR("POPUP","PRIM_PPNL");
var C20=this.cR("LIST","PRIM_LIST");var C21=this.cR("COLUMNXDEMOCAPT1","PRIM_LIST","String");var C22=this.cR("CURRENTMESSAGE","PRIM_NMBR");var C23=this.cR("PREVIOUS","PRIM_SPBN");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME100");C1.setOpacity(50);C1.iC();C2.iC();C3.setDisplayPosition(2);C3.setParent(C2);C3.iC();C4.setDisplayPosition(3);C4.setParent(C2);C4.setUnits("PIXELS");C4.setWidth(28);C4.iC();C5.setDisplayPosition(4);C5.setParent(C2);C5.setWidth(28);C5.setUnits("PIXELS");C5.iC();C6.setDisplayPosition(1);
C6.setParent(C2);C6.setWidth(28);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(1);C7.setParent(C2);C7.iC();C8.setColumn(C5);C8.setManage(C17);C8.setParent(C2);C8.setRow(C7);C8.setSizing("NONE");C8.iC();C9.setColumn(C6);C9.setManage(C18);C9.setParent(C2);C9.setRow(C7);C9.setSizing("NONE");C9.iC();C10.setColumn(C3);C10.setManage(C16);C10.setParent(C2);C10.setRow(C7);C10.iC();C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.iC();C13.setDisplayPosition(1);C13.setParent(C11);C13.iC();C14.setColumn(C12);
C14.setManage(C20);C14.setParent(C11);C14.setRow(C13);C14.iC();C15.setColumn(C4);C15.setManage(C23);C15.setParent(C2);C15.setRow(C7);C15.setSizing("NONE");C15.iC();C16.setDisplayPosition(3);C16.setEllipses("WORD");C16.setHeight(25);C16.setLeft(28);C16.setParent(this);C16.setTabPosition(1);C16.setTabStop(false);C16.setTop(0);C16.setVerticalAlignment("CENTER");C16.setWidth(581);C16.setMarginLeft(4);C16.iC();C17.setDisplayPosition(1);C17.setHeight(20);C17.setImage(rc1);C17.setLeft(641);C17.setParent(this);
C17.setTabPosition(2);C17.setTabStop(false);C17.setTop(2);C17.setWidth(20);C17.setVisible(false);C17.iC();C18.setDisplayPosition(2);C18.setImage(rc2);C18.setLeft(4);C18.setParent(this);C18.setTabPosition(4);C18.setTabStop(false);C18.setTop(2);C18.setVisible(false);C18.setHeight(20);C18.setWidth(20);C18.iC();C19.setCloseButton(true);C19.setLeft(184);C19.setTitleBar(true);C19.setTop(32);C19.setLayoutManager(C11);C19.setHeight(274);C19.setWidth(329);C19.setShroudStyle(C0);C19.setCaption("Messages");
C19.iC();C20.setDisplayPosition(2);C20.setHeight(242);C20.setLeft(0);C20.setParent(C19);C20.setTabPosition(2);C20.setTop(30);C20.setWidth(327);C20.setColumnHeaderHeight(0);C20.setColumnLines(false);C20.setRowLines(false);C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.setSource(f.F1);C21.setColumnUnits("PROPORTION");C21.setColumnWidth(1);C21.iC();C22.iC();C23.setDisplayPosition(4);C23.setHeight(20);C23.setImage(rc3);C23.setLeft(613);C23.setParent(this);C23.setTabPosition(3);C23.setTabStop(false);
C23.setTop(2);C23.setWidth(20);C23.setVisible(false);C23.iC();l.MSGQ().aH("MESSAGEADDED",this,e1);l.MSGQ().aH("MESSAGEREMOVED",this,e1);C16.aH("DOUBLECLICK",this,e4);C17.aH("CLICK",this,e2);C18.aH("CLICK",this,e4);C23.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setHeight(25);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(665);this.setLayoutManager(C2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#sys_msgq.MessageAdded #sys_msgq.MessageRemoved",33);r.ln=33;
{r.ln=35;m.MESSAGETEXT.set("");r.ln=36;m.NEXT.setVisible(l.n.gt(l.MSGQ().getMessages().getItemCount(),1));m.PREVIOUS.setVisible(l.n.gt(l.MSGQ().getMessages().getItemCount(),1));r.ln=38;if(l.n.gt(l.MSGQ().getMessages().getItemCount(),0)){r.ln=40;cO.mthACTIVATEMESSAGE.call(this,l.MSGQ().getMessages().getItemCount());}}r.ln=44;r.e();};cO.mthACTIVATEMESSAGE=function(p0){var m=this.REF,r=l.mR(this,cO,"ActivateMessage",46);var P0=r.cP("INDEX","PRIM_NMBR");P0.set(p0);var C0=r.cR("I","PRIM_NMBR");C0.iC();
r.ln=46;{r.ln=51;m.CURRENTMESSAGE.set(P0.get());r.ln=53;{var v1=P0.get();if(r.ln=54,l.n.gt(v1,l.MSGQ().getMessages().getItemCount())){r.ln=56;cO.mthACTIVATEMESSAGE.call(this,1);}else if(r.ln=58,l.n.eq(v1,0)){r.ln=60;cO.mthACTIVATEMESSAGE.call(this,l.MSGQ().getMessages().getItemCount());}else{r.ln=64;m.MESSAGETEXT.set(l.MSGQ().getMessages().get(P0.get()).getText());}r.ln=66;}}r.ln=68;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Next.Click",70);r.ln=70;{r.ln=72;cO.mthACTIVATEMESSAGE.call(this,l.sub(m.CURRENTMESSAGE.get(),1));
}r.ln=74;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Previous.Click",76);r.ln=76;{r.ln=78;cO.mthACTIVATEMESSAGE.call(this,l.add(m.CURRENTMESSAGE.get(),1));}r.ln=80;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#MessageText.DoubleClick #ShowAllMessages.Click",82);r.ln=82;{r.ln=84;this.mthSHOWMESSAGESPOPUP();}r.ln=86;r.e();};cO.mthSHOWMESSAGESPOPUP=function(){var f=this.FLD.XDEMOMES,m=this.REF,r=l.mR(this,cO,"ShowMessagesPopup",88);r.ln=88;{r.ln=90;m.LIST.clearList();r.ln=92;
{var l1=l.MSGQ().getMessages().cI();while(l1.step()){var MESSAGE=r.sR("MESSAGE",l1.item());r.ln=94;f.F1.set(MESSAGE.getText());r.ln=96;m.LIST.addEntry();r.ln=98;}l1.end();r.dR("MESSAGE");}r.ln=100;m.POPUP.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=102;r.e();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_SPBN","PRIM_PPNL","PRIM_LIST","PRIM_LIST.String","PRIM_NMBR","PRIM_MSGQ"],dp:["PRIM_NMBR"]});