﻿LANSA.addComponent({id:"XDTOOLSE",nm:"xDToolsEditTimer",ot:"rp",tp:"Reusable Part",de:"Edit timer to support delayed entry",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{ActiveControl:{da:"r"}},mt:{Stop:{},Start:{},Restart:{},Tick:{}},ev:{Ticked:{ps:{"Control":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("GTIMER","PRIM_TIMR");this.cD("GACTIVECONTROL");C0.setInterval(300);C0.setStartup("MANUAL");C0.iC();C0.aH("TICK",this,e1);}});cO.mthSETACTIVECONTROL=function(p0){var m=this.REF,r=l.pR(this,cO,"SetActiveControl",12);
var P0=r.cPD("CONTROL");P0=p0;r.ln=12;{r.ln=15;if((m.GACTIVECONTROL!==P0)){r.ln=17;if(m.GTIMER.getIsStarted()){r.ln=20;this.mthTICK();r.ln=23;this.mthRESTART();}r.ln=28;this.srGACTIVECONTROL(P0);}}r.ln=32;r.e();};cO.mthSTOP=function(){var m=this.REF,r=l.mR(this,cO,"Stop",34);r.ln=34;{r.ln=36;m.GTIMER.mthSTOP();}r.ln=38;r.e();};cO.mthSTART=function(){var m=this.REF,r=l.mR(this,cO,"Start",40);r.ln=40;{r.ln=42;m.GTIMER.mthSTART();}r.ln=44;r.e();};cO.mthRESTART=function(){var m=this.REF,r=l.mR(this,cO,"Restart",46);
r.ln=46;{r.ln=48;m.GTIMER.mthSTOP();r.ln=49;m.GTIMER.mthSTART();}r.ln=51;r.e();};cO.mthTICK=function(){var m=this.REF,r=l.mR(this,cO,"Tick",53);r.ln=53;{r.ln=56;m.GTIMER.mthSTOP();r.ln=59;{var eP=l.ePs();eP.cD("CONTROL");eP.sR("CONTROL",m.GACTIVECONTROL);this.fE("TICKED",eP);eP.e();}}r.ln=61;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#gTimer.Tick",63);r.ln=63;{r.ln=65;this.mthTICK();}r.ln=67;r.e();};cO.getACTIVECONTROL=function(){return this.REF.GACTIVECONTROL;};cO.setACTIVECONTROL=function(v)
{this.mthSETACTIVECONTROL(v);};cO.srGACTIVECONTROL=function(rn){this.sR("GACTIVECONTROL",rn);};},{rp:["PRIM_OBJT","PRIM_TIMR"],dp:["PRIM_OBJT"]});