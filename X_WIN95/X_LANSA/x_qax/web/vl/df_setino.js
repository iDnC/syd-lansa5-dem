﻿LANSA.addComponent({id:"DF_SETINO",ot:"rp",tp:"Reusable Part",de:"\OC=Example of Settings snap in reusable",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELSYMN",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC030O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uDisplayRequested:{ps:{"AdditionalRequestdetails":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_SETINO",Fd);
var C0=this.cR("MAINATTACHMENTMANAGER","PRIM_ATLM");var C1=this.cR("ATTACHEXAMPLEMESSAGE","PRIM_ATLI");var C2=this.cR("EXAMPLEMESSAGE","PRIM_LABL");var C3=this.cR("LABEL_ADDITIONAL_DETAILS","PRIM_LABL");var C4=this.cR("EXAMPLEMESSAGESTYLE","PRIM_VS","Style");var C5=this.cR("ATTACHITEM1","PRIM_ATLI");C0.iC();C1.setManage(C2);C1.setParent(C0);C1.setAttachment("CENTER");C1.setMarginLeft(8);C1.setMarginTop(8);C1.setMarginBottom(8);C1.setMarginRight(8);C1.iC();C2.setParent(this);C2.setCaption("This is an example of an optional snap in ‘Settings’ pane. To make your own create a component with ancestor VF_AC030O and then enrol in your framework on the Web/RAMP details tab.");
C2.setDisplayPosition(2);C2.setTabPosition(1);C2.setTabStop(false);C2.setLeft(8);C2.setTop(8);C2.setHeight(423);C2.setWidth(279);C2.setAlignment("CENTER");C2.setVerticalAlignment("CENTER");C2.setStyle(C4);C2.iC();C3.setCaption("Additional Details");C3.setDisplayPosition(1);C3.setEllipses("WORD");C3.setHeight(73);C3.setLeft(0);C3.setParent(this);C3.setTabPosition(2);C3.setTabStop(false);C3.setTop(366);C3.setVerticalAlignment("CENTER");C3.setWidth(327);C3.iC();C4.setFontSize(12);C4.setTextColor("0:0:255");
C4.iC();C5.setManage(C3);C5.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C5.setAttachment("BOTTOM");C5.iC();this.setWidth(327);}});var cA=cO.aN.prototype;cO.mthGET_UHINT=function(){var r=l.pR(this,cO,"Get_uHint",37);var P0=r.cP("RETURNHINT","PRIM_DC","UnicodeString");r.ln=37;{r.ln=38;P0.set(this.getUHINT());}r.ln=39;return r.rV(P0.get());};cO.mthGET_UIMAGENAME=function(){var r=l.pR(this,cO,"Get_uImageName",43);var P0=r.cPF("RETURNIMAGENAME",Fd.F1.Dc);r.ln=43;{r.ln=44;P0.set(this.getUIMAGENAME());
}r.ln=45;return r.rV(P0.get());};cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",49);r.ln=49;{r.ln=50;cA.mthUINITIALIZE.call(this);}r.ln=51;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",55);r.ln=55;{r.ln=56;cA.mthUTERMINATE.call(this);}r.ln=57;r.e();};cO.mthUDISPLAYREQUESTED=function(p0){var m=this.REF,r=l.mR(this,cO,"uDisplayRequested",61);var P0=r.cPD("ADDITIONALREQUESTDETAILS");P0=p0;r.ln=61;{r.ln=64;cA.mthUDISPLAYREQUESTED.call(this,P0);r.ln=71;m.LABEL_ADDITIONAL_DETAILS.setCaption("");
r.ln=72;if(l.Io(P0,"PRIM_ALPH")){r.ln=73;m.LABEL_ADDITIONAL_DETAILS.setCaption(l.cat("The additional details passed with the request to display were: ",l.cast(P0,"PRIM_ALPH").getValue()));}}r.ln=75;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}},{rc:["VF_AC030O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_VS.Style","PRIM_FLD"]});