﻿LANSA.addComponent({id:"XAAPART10",nm:"xAssessorDataObject",ot:"rp",tp:"Reusable Part",de:"xAssessorDataObject",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XAAFLD08",an:"xAssessorAudioNotes",ft:"VC",ln:63,dc:0,lb:"Note Recodings",h1:"Note",h2:"Recodings",h3:"",de:"Note Recodings",dv:"",ia:["ASQN","FE"],oa:["ASQN"]},F2:{nm:"XAAFLD05",an:"xAssessorLatitude",ft:"S",ln:18,dc:15,lb:"Latitude",h1:"Latitude",h2:"",h3:"",
de:"Assessor Latitude",dv:0,ia:["FE","RB"]},F3:{nm:"XAAFLD04",an:"xAssessorLongitude",ft:"S",ln:18,dc:15,lb:"Longitude",h1:"Longitude",h2:"",h3:"",de:"Longitude",dv:0,ia:["FE","RB"]},F4:{nm:"XAAFLD11",an:"xDriverSurname",ft:"A",ln:15,dc:0,lb:"Driver Last Nam",h1:"Driver",h2:"Last",h3:"Name",de:"Driver Last Name",dv:"",ia:["FE","LC"]},F5:{nm:"XAAFLD09",an:"xDriverFirstName",ft:"A",ln:15,dc:0,lb:"Driver First Na",h1:"Driver",h2:"First",h3:"Name",de:"Driver First Name",dv:"",ia:["FE","LC"]},F6:{nm:"XAAFLD10",
an:"xDriverPhone",ft:"P",ln:12,dc:0,ec:"Z",lb:"Driver Phone",h1:"Driver",h2:"Phone",h3:"",de:"Driver Phone No.",dv:0,ia:["FE","RB"],oa:["ASQN"]},F7:{nm:"XAAFLD14",an:"xVehicleMakeModel",ft:"A",ln:20,dc:0,lb:"Vehicle Make/Mo",h1:"Vehicle",h2:"Make/Model",h3:"",de:"Vehicle Make/Model",dv:"",ia:["FE","LC"]},F8:{nm:"XAAFLD15",an:"xVehicleRegistration",ft:"A",ln:8,dc:0,lb:"Vehicle Registr",h1:"Vehicle",h2:"Registration",h3:"",de:"Vehicle Registration",dv:"",ia:["FE","LC"]},F9:{nm:"XAAFLD01",an:"xAccidentTime",
ft:"T",ln:8,dc:0,lb:"Time",h1:"Time",h2:"",h3:"",de:"Time of Accident",dv:l.n.AsTime(l.eSV("*TIME"),"HHMMSS"),ia:["ASQN","FE","ISO"]},F10:{nm:"XAAFLD03",an:"xAccidentDate",ft:"D",ln:10,dc:0,lb:"Date of Acciden",h1:"Date",h2:"of",h3:"Accident",de:"Date of Accident",dv:l.SqlNull,ia:["ASQN","FE","ISO"],oa:["ISO"]},F11:{nm:"XAAFLD06",an:"xAssessorNotes",ft:"VC",ln:65535,dc:0,lb:"AssessorNotes",h1:"AssessorNotes",h2:"",h3:"",de:"Assessor Notes",dv:"",ia:["FE","LC"]},F12:{nm:"XAAFLD07",an:"xAssessorImage",
ft:"VC",ln:65535,dc:0,lb:"Assessor Image",h1:"Assessor",h2:"Image",h3:"",de:"Assessor Image",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,rm:["dt"],pt:{AudioFileName:{da:"rw"},ImageBase64Data:{da:"rw"},ImageFileName:{da:"rw"},Latitude:{da:"rw"},Longitude:{da:"rw"},Coordinates:{da:"na"},MegaPixelSetting:{da:"rw"},VideoSetting:{da:"rw"},DriverSurname:{da:"rw"},DriverFirstName:{da:"rw"},DriverPhone:{da:"rw"},VehicleMakeModel:{da:"rw"},VehicleRegistration:{da:"rw"},AccidentTime:
{da:"rw"},AccidentDate:{da:"rw"},AssessorNotes:{da:"rw"}},mt:{SetCoordinates:{},SetAudioFileName:{},CreateNewAssesment:{},DataCheck:{},Submit:{}},ev:{Changed:{},Submitted:{},CoordinatesRecieved:{},SetError:{ps:{"FieldName":{pt:"i"},"ErrorMessage":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XAAPART10",Fd);var C0=this.cR("IMAGEFILE","PRIM_ALPH");var C1=this.cR("IMAGEBASE64DATA","PRIM_ALPH");var C2=this.cR("MEGAPIXELS","PRIM_NMBR");var C3=this.cR("VIDEOQUALITY","PRIM_ALPH");var C4=this.cR("MESSAGE","PRIM_ALPH");
C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();}});cO.mthGETCOORDINATES=function(){var f=this.FLD.XAAPART10,r=l.pR(this,cO,"GetCoordinates",41);var P0=r.cP("COORDINATES","PRIM_ALPH");r.ln=41;{r.ln=44;if(l.and(l.n.ne(f.F2.get(),0),l.n.ne(f.F3.get(),0))){r.ln=46;P0.set(l.cat(l.cat(l.cat(l.n.AsString(f.F2.get()),"N "),l.n.AsString(f.F3.get())),"W"));}}r.ln=50;return r.rV(P0.get());};cO.mthSETCOORDINATES=function(){var r=l.mR(this,cO,"SetCoordinates",56);r.ln=56;{r.ln=58;this.fE("COORDINATESRECIEVED");}r.ln=60;
r.e();};cO.mthSETAUDIOFILENAME=function(){var f=this.FLD.XAAPART10,r=l.mR(this,cO,"SetAudioFileName",62);var P0=r.cP("R_AUDIOFILE","PRIM_ALPH");r.ln=62;{r.ln=65;P0.set(l.cat(l.cat(l.cat(l.cat("Audio_",l.d.AsString(l.d.Now(f.F10.get()))),"_"),l.s.ReplaceAll(l.s.ReplaceAll(l.t.AsString(l.t.Now(f.F9.get())),":","-"),".","-")),".m4a"));}r.ln=67;return r.rV(P0.get());};cO.mthCREATENEWASSESMENT=function(){var f=this.FLD.XAAPART10,r=l.mR(this,cO,"CreateNewAssesment",69);r.ln=69;{r.ln=71;f.F5.set("");f.F4.set("");
f.F7.set("");f.F8.set("");f.F1.set("");f.F11.set("");f.F12.set("");r.ln=73;f.F2.set(0);f.F3.set(0);f.F6.set(0);r.ln=75;f.F10.set(l.d.Now(f.F10.get()));r.ln=77;f.F9.set(l.t.Now(f.F9.get()));}r.ln=79;r.e();};cO.mthDATACHECK=function(){var f=this.FLD.XAAPART10,m=this.REF,r=l.mR(this,cO,"DataCheck",81);var C0=r.cR("EMPTYFIELDS","PRIM_NMBR");C0.iC();r.ln=81;{r.ln=84;C0.set(0);r.ln=86;if(l.s.eq(f.F4.get(),"")){r.ln=88;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XDRIVERSURNAME");
eP.r("ERRORMESSAGE").set("Driver surname not submitted.");this.fE("SETERROR",eP);eP.e();}r.ln=90;C0.set(l.add(C0.get(),1));}r.ln=94;if(l.s.eq(f.F5.get(),"")){r.ln=96;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XDRIVERFIRSTNAME");eP.r("ERRORMESSAGE").set("Driver first name not submitted.");this.fE("SETERROR",eP);eP.e();}r.ln=98;C0.set(l.add(C0.get(),1));}r.ln=102;if(l.tB(l.n.eq(f.F6.get(),0))){r.ln=104;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");
eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XDRIVERPHONE");eP.r("ERRORMESSAGE").set("Driver phone number not submitted.");this.fE("SETERROR",eP);eP.e();}r.ln=106;C0.set(l.add(C0.get(),1));}r.ln=110;if(l.s.eq(f.F7.get(),"")){r.ln=112;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XVEHICLEMAKEMODEL");eP.r("ERRORMESSAGE").set("Vehicle make and model not submitted.");this.fE("SETERROR",eP);eP.e();}r.ln=114;C0.set(l.add(C0.get(),1));
}r.ln=118;if(l.s.eq(f.F8.get(),"")){r.ln=120;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XVEHICLEREGISTRATION");eP.r("ERRORMESSAGE").set("Vehicle registration not submitted.");this.fE("SETERROR",eP);eP.e();}r.ln=122;C0.set(l.add(C0.get(),1));}r.ln=126;if(l.tB(l.s.eq(f.F1.get(),""))){r.ln=128;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XASSESSORAUDIONOTES");eP.r("ERRORMESSAGE").set("Audio notes have not been recorded.");
this.fE("SETERROR",eP);eP.e();}r.ln=130;C0.set(l.add(C0.get(),1));}r.ln=134;if(l.s.eq(this.getCOORDINATES(),"")){r.ln=136;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XACCIDENTLOCATION");eP.r("ERRORMESSAGE").set("Accident location has not been set.");this.fE("SETERROR",eP);eP.e();}r.ln=138;C0.set(l.add(C0.get(),1));}r.ln=142;if(l.tB(l.s.eq(m.IMAGEFILE.get(),""))){r.ln=144;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");
eP.r("FIELDNAME").set("XASSESSORIMAGE");eP.r("ERRORMESSAGE").set("Photo of damage has not been supplied.");this.fE("SETERROR",eP);eP.e();}r.ln=146;C0.set(l.add(C0.get(),1));}r.ln=150;if(l.s.eq(f.F11.get(),"")){r.ln=152;{var eP=l.ePs();eP.cR("FIELDNAME","PRIM_ALPH");eP.cR("ERRORMESSAGE","PRIM_ALPH");eP.r("FIELDNAME").set("XASSESSORNOTES");eP.r("ERRORMESSAGE").set("Assessor comments are required");this.fE("SETERROR",eP);eP.e();}r.ln=154;C0.set(l.add(C0.get(),1));}r.ln=158;if(l.tB(l.n.eq(C0.get(),0)))
{r.ln=160;this.mthSUBMIT();}else{r.ln=164;m.MESSAGE.set(l.cat(l.cat("There are currently ",l.n.AsString(C0.get()))," empty fields in assessment. Please rectify this before uploading assessment."));r.ln=166;l.WEB().mthALERT(m.MESSAGE.get());}}r.ln=170;r.e();};cO.mthSUBMIT=function(){var m=this.REF,r=l.mR(this,cO,"Submit",172);r.ln=172;{r.ln=174;m.MESSAGE.set("Assessment uploaded to the server.");r.ln=176;l.WEB().mthALERT(m.MESSAGE.get());r.ln=178;this.mthCREATENEWASSESMENT();r.ln=180;this.fE("SUBMITTED");
}r.ln=182;r.e();};cO.getAUDIOFILENAME=function(){var f=this.FLD.XAAPART10;return f.F1.get();};cO.setAUDIOFILENAME=function(v){var f=this.FLD.XAAPART10;f.F1.set(v);};cO.getIMAGEBASE64DATA=function(){return this.REF.IMAGEBASE64DATA.get();};cO.setIMAGEBASE64DATA=function(v){this.REF.IMAGEBASE64DATA.set(v);};cO.getIMAGEFILENAME=function(){return this.REF.IMAGEFILE.get();};cO.setIMAGEFILENAME=function(v){this.REF.IMAGEFILE.set(v);};cO.getLATITUDE=function(){var f=this.FLD.XAAPART10;return f.F2.get();};
cO.setLATITUDE=function(v){var f=this.FLD.XAAPART10;f.F2.set(v);};cO.getLONGITUDE=function(){var f=this.FLD.XAAPART10;return f.F3.get();};cO.setLONGITUDE=function(v){var f=this.FLD.XAAPART10;f.F3.set(v);};cO.getCOORDINATES=function(){return this.mthGETCOORDINATES();};cO.getMEGAPIXELSETTING=function(){return this.REF.MEGAPIXELS.get();};cO.setMEGAPIXELSETTING=function(v){this.REF.MEGAPIXELS.set(v);};cO.getVIDEOSETTING=function(){return this.REF.VIDEOQUALITY.get();};cO.setVIDEOSETTING=function(v){this.REF.VIDEOQUALITY.set(v);
};cO.getDRIVERSURNAME=function(){var f=this.FLD.XAAPART10;return f.F4.get();};cO.setDRIVERSURNAME=function(v){var f=this.FLD.XAAPART10;f.F4.set(v);};cO.getDRIVERFIRSTNAME=function(){var f=this.FLD.XAAPART10;return f.F5.get();};cO.setDRIVERFIRSTNAME=function(v){var f=this.FLD.XAAPART10;f.F5.set(v);};cO.getDRIVERPHONE=function(){var f=this.FLD.XAAPART10;return f.F6.get();};cO.setDRIVERPHONE=function(v){var f=this.FLD.XAAPART10;f.F6.set(v);};cO.getVEHICLEMAKEMODEL=function(){var f=this.FLD.XAAPART10;
return f.F7.get();};cO.setVEHICLEMAKEMODEL=function(v){var f=this.FLD.XAAPART10;f.F7.set(v);};cO.getVEHICLEREGISTRATION=function(){var f=this.FLD.XAAPART10;return f.F8.get();};cO.setVEHICLEREGISTRATION=function(v){var f=this.FLD.XAAPART10;f.F8.set(v);};cO.getACCIDENTTIME=function(){var f=this.FLD.XAAPART10;return f.F9.get();};cO.setACCIDENTTIME=function(v){var f=this.FLD.XAAPART10;f.F9.set(v);};cO.getACCIDENTDATE=function(){var f=this.FLD.XAAPART10;return f.F10.get();};cO.setACCIDENTDATE=function(v)
{var f=this.FLD.XAAPART10;f.F10.set(v);};cO.getASSESSORNOTES=function(){var f=this.FLD.XAAPART10;return f.F11.get();};cO.setASSESSORNOTES=function(v){var f=this.FLD.XAAPART10;f.F11.set(v);};},{rp:["PRIM_OBJT","PRIM_ALPH","PRIM_NMBR","PRIM_DTIM"],dp:["PRIM_NMBR"]});