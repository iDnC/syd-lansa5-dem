﻿LANSA.addComponent({id:"VF_SY203O",ot:"rp",tp:"Reusable Part",de:"\OA=Power Filter Tab",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"VF_AC201O",fd:Fd,pt:{Title:{da:"rw"}},mt:{zInt_SerializeObject:{},zInt_DeserializeProperty:{ps:{"PropertyId":{pt:"i"},"Instance":{pt:"i"},"Value":{pt:"i"}}},zInt_AddSearchOption:{ps:{"Caption":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_SY203O",Fd);var C0=this.cR("TITLE","PRIM_DC","UnicodeString");C0.iC();}});var cA=cO.aN.prototype;cO.mthZINT_SERIALIZEOBJECT=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SerializeObject",10);r.ln=10;{r.ln=13;cA.mthZINT_BEGINSERIALIZATION.call(this,this);
r.ln=16;if(l.tB(l.s.ne(m.TITLE.get(),""))){r.ln=17;cA.mthZINT_SERIALIZEPROPERTY.call(this,101,1,m.TITLE.get());}r.ln=22;cA.mthZINT_ENDSERIALIZATION.call(this,this);}r.ln=24;r.e();};cO.mthZINT_DESERIALIZEPROPERTY=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_DeserializeProperty",28);var P0=r.cPF("PROPERTYID",Fd.F1.Dc);var P1=r.cPF("INSTANCE",Fd.F1.Dc);var P2=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=28;{r.ln=30;{var v1=P0.get();if(r.ln=32,l.n.eq(v1,101))
{r.ln=33;m.TITLE.set(P2.get());}r.ln=35;}}r.ln=37;r.e();};cO.mthZINT_ADDSEARCHOPTION=function(p0){var r=l.mR(this,cO,"zInt_AddSearchOption",41);var P0=r.cP("CAPTION","PRIM_DC","UnicodeString");var P1=r.cPD("REFERENCE");P0.set(p0);r.ln=41;{r.ln=45;P1=r.sR("P1",l.cC("VF_SY204O"));r.ln=47;P1.mthZINT_INITIALIZE(this,this.getPROPERTYSTREAM());r.ln=49;P1.setCAPTION(P0.get());}r.ln=51;return r.rR(P1);};cO.getTITLE=function(){return this.REF.TITLE.get();};cO.setTITLE=function(v){this.REF.TITLE.set(v);};{
Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC201O"],rp:["PRIM_DC.UnicodeString","PRIM_FLD"]});