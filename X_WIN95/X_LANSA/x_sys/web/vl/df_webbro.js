﻿LANSA.addComponent({id:"DF_WEBBRO",ot:"rp",tp:"Reusable Part",de:"\OC=Web browser",tl:14015000},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("ATLM_1","PRIM_ATLM");var C1=this.cR("WEBPAGE","PRIM_WEB","Page");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");C0.iC();C1.setDescription("Web Page");C1.setDisplayPosition(1);C1.setHeight(327);C1.setParent(this);C1.setTabPosition(1);
C1.setTabStop(false);C1.setWidth(587);C1.iC();C2.setManage(C1);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("CENTER");C2.iC();this.setHeight(327);this.setWidth(587);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",36);r.ln=36;{r.ln=38;cA.mthUINITIALIZE.call(this);r.ln=40;this.setAVCONTENTNEEDSSHIELDING(true);}r.ln=42;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",47);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");
var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=47;{r.ln=51;cA.mthUEXECUTE.call(this,P0,P1);r.ln=57;m.WEBPAGE.setSource(this.getAVALPHAARG1());p0.set(P0.get());}r.ln=59;r.e();};},{rc:["VF_AC010O"],rp:["PRIM_ATLM","PRIM_WEB.Page","PRIM_ATLI"]});