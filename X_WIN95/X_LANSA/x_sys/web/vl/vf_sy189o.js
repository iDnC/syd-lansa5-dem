﻿LANSA.addComponent({id:"VF_SY189O",ot:"rp",tp:"Reusable Part",de:"\OC=Instance list column tracker",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{VisibleColumn:{da:"rw"},ColumnDefinition:{da:"rw"},CurrentSortDirection:{da:"rw"},IsCurrentSortColumn:{da:"rw"}},co:function()
{cO.aN.call(this);this.aF("VF_SY189O",Fd);this.cD("VISIBLECOLUMN");this.cD("COLUMNDEFINITION");var C2=this.cF("CURRENTSORTDIRECTION",Fd.F1.Dc);var C3=this.cR("ISCURRENTSORTCOLUMN","PRIM_BOLN");C2.aD();C2.iC();C3.iC();}});cO.getVISIBLECOLUMN=function(){return this.REF.VISIBLECOLUMN;};cO.setVISIBLECOLUMN=function(v){this.srVISIBLECOLUMN(v);};cO.getCOLUMNDEFINITION=function(){return this.REF.COLUMNDEFINITION;};cO.setCOLUMNDEFINITION=function(v){this.srCOLUMNDEFINITION(v);};cO.getCURRENTSORTDIRECTION=function()
{return this.REF.CURRENTSORTDIRECTION.get();};cO.setCURRENTSORTDIRECTION=function(v){this.REF.CURRENTSORTDIRECTION.set(v);};cO.getISCURRENTSORTCOLUMN=function(){return this.REF.ISCURRENTSORTCOLUMN.get();};cO.setISCURRENTSORTCOLUMN=function(v){this.REF.ISCURRENTSORTCOLUMN.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}cO.srVISIBLECOLUMN=function(rn){this.sR("VISIBLECOLUMN",rn);};cO.srCOLUMNDEFINITION=function(rn){this.sR("COLUMNDEFINITION",rn);
};},{rp:["PRIM_OBJT","PRIM_FLD","PRIM_BOLN"],dc:["VF_FP200O"],dp:["PRIM_LIST.String"]});