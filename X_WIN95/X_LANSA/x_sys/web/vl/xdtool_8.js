﻿LANSA.addComponent({id:"XDTOOL_8",nm:"xDToolsDataProductLine",ot:"rp",tp:"Reusable Part",de:"Product Line",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSPRDLNID",an:"XSProductLineID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product Categor","FRA":"Ligne produit","JPN":"製品ライン","LLL":"Product Categor"}[cL],h1:{"ENG":"Product","FRA":"ID","JPN":"製品","LLL":"Product"}[cL],h2:{"ENG":"Category","FRA":"Ligne","JPN":"ライン","LLL":"Category"}[cL],
h3:{"ENG":"ID","FRA":"Produit","JPN":"ID","LLL":"ID"}[cL],de:{"ENG":"Product Line ID","FRA":"Id Ligne Produit","JPN":"製品ライン ID","LLL":"Product Line ID"}[cL],dv:"",ia:["FE"]},F2:{nm:"XSPRDLNDS",an:"XSProductLineDescription",ft:"C",ln:100,dc:0,lb:{"ENG":"Last Name","FRA":"Desc lig prod","JPN":"製品ライン","LLL":"Last Name"}[cL],h1:{"ENG":"Last","FRA":"Description","JPN":"製品ライン","LLL":"Last"}[cL],h2:{"ENG":"Name","FRA":"Ligne","JPN":"説明","LLL":"Name"}[cL],h3:{"ENG":" ","FRA":"Produit","JPN":" ","LLL":""}[cL],
de:{"ENG":"Product Line Description","FRA":"Description ligne produit","JPN":"製品ライン説明","LLL":"Product Line Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"XDTOOL_5",fd:Fd,pt:{ID:{da:"r"},Description:{da:"r"},Categories:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XDTOOL_8",Fd);this.aLF({"XSPRDLNID":f.F1,"XSPRDLNDS":f.F2});}});cO.mthGETCATEGORIES=function(){var r=l.pR(this,cO,"GetCategories",11);var P0=r.cPD("PROPERTY");r.ln=11;{r.ln=14;P0=r.sR("P0",l.cC("PRIM_ACOL").tB([ti1]));
r.ln=16;{var l1=this.REF.GDATAMODEL.ref.getPRODUCTCATEGORIES().cI();while(l1.step()){var PRODUCTCATEGORY=r.sR("PRODUCTCATEGORY",l1.item());r.ln=17;if((PRODUCTCATEGORY.getPRODUCTLINE()!==this)){continue;}r.ln=19;P0.mthINSERT(PRODUCTCATEGORY);r.ln=21;}l1.end();r.dR("PRODUCTCATEGORY");}}r.ln=23;return r.rR(P0);};cO.getID=function(){var f=this.FLD.XDTOOL_8;return f.F1.get();};cO.getDESCRIPTION=function(){var f=this.FLD.XDTOOL_8;return f.F2.get();};cO.getCATEGORIES=function(){return this.mthGETCATEGORIES();
};var ti1={p:"XDTOOL_7"};},{rc:["XDTOOL_5"]});