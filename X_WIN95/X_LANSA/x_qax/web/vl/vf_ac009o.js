﻿LANSA.addComponent({id:"VF_AC009O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE *** Not for customer use ***",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC001O",fd:Fd,pt:{VF_FP010OHandlers:{da:"r"},RealDefaultVF_FP010OHandler:{da:"rw"},CurrentDefaultVF_FP010OHandler:{da:"rw"},VF_FP017OProperties:{da:"r"},OwnerVF_FP002Object:{da:"rw"},AutoTilingRootSequence:{da:"na"},uCurrentThemeColor:{da:"na"},uUserReorderTabs:{da:"na"}},mt:{zInt_InitializeInstanceLevel:{},zInt_ShowCommandExecutor:{ps:
{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"ExecuteDefaultCommand":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_QueryCommandExecutorExistence:{ps:{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"}}},zInt_LocateAppropriateInstanceCommandExecutor:{ps:{"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"actuallyCreate":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_GetAppropriateCommandExecutor:
{ps:{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_SetVF_FP010OHandlerEnablements:{ps:{"Enabled":{pt:"i"},"AtReferenceLevel":{pt:"i"},"AtAnyReferenceLevel":{pt:"i"}}},zInt_SetSpecificVF_FP010OHandlerEnablement:{ps:{"Enabled":{pt:"i"},"Handler":{pt:"i"}}},zInt_ResetDefaultCommand:{},zInt_OverrideDefaultCommand:{ps:{"ToVF_FP010OHandler":{pt:"i"}}},zInt_ExecuteDefaultCommand:{ps:{"AtReferenceLevel":{pt:"i"},"AtAnyReferenceLevel":
{pt:"i"},"HandlerWasExecuted":{pt:"o"},"UseBusyPanel":{pt:"i"},"WithInstanceReferenceKey":{pt:"i"},"IgnoreEnablement":{pt:"i"}}},zInt_EnrollChild:{ps:{"uReference":{pt:"i"}}},zInt_SetProperty:{ps:{"P":{pt:"i"}}},zInt_ShowCommandHandlerChoiceMenu:{ps:{"UseBusyPanel":{pt:"i"},"WithInstanceReferenceKey":{pt:"i"},"IgnoreEnablement":{pt:"i"}}},zInt_GoBusy:{ps:{"OverPanel":{pt:"i"},"ShowBusyText":{pt:"i"},"Animated":{pt:"i"},"WaitFor":{pt:"i"}}},zInt_GoFree:{}},co:function(){cO.aN.call(this);this.aF("VF_AC009O",Fd);
var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("VF_FP010OHANDLERS","PRIM_ACOL");this.cD("REALDEFAULTVF_FP010OHANDLER");this.cD("CURRENTDEFAULTVF_FP010OHANDLER");var C5=this.cR("VF_FP017OPROPERTIES","PRIM_ACOL");this.cD("OWNERVF_FP002OBJECT");this.cD("BUSYSTATECHAIN");var C8=this.cF("AUTOTILINGROOTSEQUENCE",Fd.F1.Dc);this.cD("OBJECTLEVELCOMMANDEXECUTOR");this.cD("HIDDENLEVELCOMMANDEXECUTOR");var C11=this.cR("INSTANCELEVELCOMMANDEXECUTORS","PRIM_ACOL");
var C12=this.cR("INSTANCELEVELCOMMANDEXECUTORSKEY","PRIM_ACOL");var C13=this.cF("COMMANDEXECUTORLASTRETURNEDINDEX",Fd.F1.Dc);var C14=this.cR("ULIGHTTHEMECOLOR","PRIM_ALPH");var C15=this.cR("UDARKTHEMECOLOR","PRIM_ALPH");var C16=this.cR("PTY_UUSERREORDERTABS","PRIM_BOLN");this.cD("TEMPCOMMANDHANDLERCHOICEMENU");this.cD("TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL");var C19=this.cR("TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY","PRIM_ALPH");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false))
{C1.iC();}C2.setCollects("VF_FP010O");C2.iC();C5.setCollects("VF_FP017O");C5.iC();C8.aD();C8.iC();C11.setCollects("VF_UM012O");C11.iC();C12.setCollects("PRIM_ALPH");C12.iC();C13.aD();C13.iC();C14.iC();C15.iC();C16.iC();C19.iC();C11.aH("UTERMINATED",this,e3);this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;cO.mthGET_AUTOTILINGROOTSEQUENCE=function(){var m=this.REF,r=l.pR(this,cO,"Get_AutoTilingRootSequence",70);var P0=r.cPF("VALUE",Fd.F1.Dc);r.ln=70;{r.ln=73;if(l.n.eq(m.AUTOTILINGROOTSEQUENCE.get(),0))
{r.ln=74;m.AUTOTILINGROOTSEQUENCE.set(m.USYSTEM.ref.getNEXTAUTOTILINGROOTSEQUENCE());r.ln=75;m.USYSTEM.ref.setNEXTAUTOTILINGROOTSEQUENCE(l.add(m.USYSTEM.ref.getNEXTAUTOTILINGROOTSEQUENCE(),100));}r.ln=78;P0.set(m.AUTOTILINGROOTSEQUENCE.get());}r.ln=80;return r.rV(P0.get());};cO.mthGET_UCURRENTTHEMECOLOR=function(){var m=this.REF,r=l.pR(this,cO,"Get_uCurrentThemeColor",83);var P0=r.cP("RETURNCOLOR","PRIM_ALPH");r.ln=83;{r.ln=86;if(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME()){r.ln=87;P0.set(m.UDARKTHEMECOLOR.get());
}else{r.ln=89;P0.set(m.ULIGHTTHEMECOLOR.get());}r.ln=92;if(l.tB(l.s.eq(P0.get(),""))){r.ln=93;P0.set(m.USYSTEM.ref.getCURRENTTHEME().getBASETITLESTYLE().getNormBackColor());}}r.ln=96;return r.rV(P0.get());};cO.mthGET_UUSERREORDERTABS=function(){var m=this.REF,r=l.pR(this,cO,"Get_uUserReorderTabs",99);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=99;{r.ln=104;P0.set(m.PTY_UUSERREORDERTABS.get());}r.ln=109;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",112);
r.ln=112;{r.ln=115;m.PTY_UUSERREORDERTABS.set(false);}r.ln=116;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#HiddenLevelCommandExecutor.uTerminated",119);r.ln=119;{r.ln=120;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",m.HIDDENLEVELCOMMANDEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false);r.ln=121;this.srHIDDENLEVELCOMMANDEXECUTOR(null);}r.ln=122;r.e();};function e3(FROMEXECUTOR,Ps){var m=this.REF,r=l.eR(this,cO,"#InstanceLevelCommandExecutors<>.uTerminated",124);
r.ln=124;{r.ln=126;{var l1=m.INSTANCELEVELCOMMANDEXECUTORS.cI();while(l1.step()){var EXECUTOR=r.sR("EXECUTOR",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=127;if((EXECUTOR===FROMEXECUTOR)){r.ln=128;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",FROMEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false);r.ln=129;m.INSTANCELEVELCOMMANDEXECUTORS.set(INDEX.get(),null);r.ln=130;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(INDEX.get()).set("");l1.end();r.e();return;}r.ln=133;}l1.end();
r.dR("EXECUTOR");r.dR("INDEX");}}r.ln=135;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ObjectLevelCommandExecutor.uTerminated",137);r.ln=137;{r.ln=138;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",m.OBJECTLEVELCOMMANDEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false);r.ln=139;this.srOBJECTLEVELCOMMANDEXECUTOR(null);}r.ln=140;r.e();};cO.mthZINT_INITIALIZEINSTANCELEVEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_InitializeInstanceLevel",143);var C0=r.cD("C0");
var C1=r.cD("C1");var C2=r.cF("MAXIMUMINSTANCESALLOWED",Fd.F1.Dc);C2.iC();r.ln=143;{r.ln=149;if(l.Io(this,"VF_FR003O")){r.ln=150;if(l.n.eq(m.INSTANCELEVELCOMMANDEXECUTORS.getItemCount(),0)){r.ln=152;C2.set(l.cast(this,"VF_FR003O").getUDESIGNERMAXINSTANCESOPEN());r.ln=154;for(var i1=1,s1=1,t1=l.tI(C2.get());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=155;m.INSTANCELEVELCOMMANDEXECUTORS.mthINSERT(C0);r.ln=156;C1=r.sR("C1",l.cC("PRIM_ALPH"));r.ln=157;m.INSTANCELEVELCOMMANDEXECUTORSKEY.mthINSERT(C1);
}}}}r.ln=163;r.e();};cO.mthZINT_SHOWCOMMANDEXECUTOR=function(p0,p1,p2,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCommandExecutor",166);var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cPD("EXECUTEDEFAULTCOMMAND");var P4=r.cPD("HADTOBECREATED");P0=p0;P1=p1;P2=p2;P3=p3;P4=p4;var C0=r.cD("C0");r.ln=166;{r.ln=175;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"ShowCommandExecutor executed.",u,u,false);r.ln=177;C0=r.sR("C0",this.mthZINT_GETAPPROPRIATECOMMANDEXECUTOR(P0,P1,P2,P4));
r.ln=179;if((C0!=null)){r.ln=181;C0.getVF_AC005CONTAINER().mthZINT_RESTORE(C0.getVF_AC005CONTAINER().getDEFAULTTABLETMODETRANSITION(),true);}r.ln=186;if(l.tB(P3.get())){r.ln=188;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"ShowCommandExecutor is executing default command.",u,u,false);r.ln=190;this.mthZINT_EXECUTEDEFAULTCOMMAND(u,true,u,C0.getBUSYPANEL(),P1.get(),false);}}r.ln=195;r.e();};cO.mthZINT_QUERYCOMMANDEXECUTOREXISTENCE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_QueryCommandExecutorExistence",198);
var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cP("CURRENTLYEXISTS","PRIM_BOLN");P0=p0;P1=p1;P2=p2;var C0=r.cR("HADTOBECREATED","PRIM_BOLN");C0.iC();r.ln=198;{r.ln=206;P3.set(true);r.ln=208;{var v1=P0.get();if(r.ln=210,l.s.eq(v1,"H")){r.ln=211;if((m.HIDDENLEVELCOMMANDEXECUTOR==null)){r.ln=212;P3.set(false);}}else if(r.ln=215,l.s.eq(v1,"I")){r.ln=217;this.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR(P1,P2,false,C0);}else
{r.ln=222;if((m.OBJECTLEVELCOMMANDEXECUTOR==null)){r.ln=223;P3.set(false);}}r.ln=226;}}r.ln=228;return r.rV(P3.get());};cO.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR=function(p0,p1,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_LocateAppropriateInstanceCommandExecutor",232);var P0=r.cPD("WITHINSTANCEKEY");var P1=r.cPD("CURRENTOPENINSTANCELIMIT");var P2=r.cPD("RETURNREFERENCE");var P3=r.cP("ACTUALLYCREATE","PRIM_BOLN");var P4=r.cPD("HADTOBECREATED");P0=p0;P1=p1;P2=null;P3.set(p3);P4=p4;var C0=r.cD("C0");
var C1=r.cF("SIEZEINDEX",Fd.F1.Dc);C1.iC();r.ln=232;{r.ln=244;this.mthZINT_INITIALIZEINSTANCELEVEL();r.ln=247;P2=r.sR("P2",null);r.ln=250;if(l.and(l.n.eq(m.INSTANCELEVELCOMMANDEXECUTORS.getItemCount(),1),(m.INSTANCELEVELCOMMANDEXECUTORS.get(1)!=null))){r.ln=251;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(1));r.ln=252;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(1).set(P0.get());r.ln=253;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(1);r.ln=254;P4.set(false);r.ln=255;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE())
{r.ln=256;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 1. IK=",P0.get()),u,u,false);}return r.rR(P2);}r.ln=262;{var l1=m.INSTANCELEVELCOMMANDEXECUTORSKEY.cI();while(l1.step()){var KEY=r.sR("KEY",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=263;if(l.tB(l.and(l.s.eq(KEY.getValue(),P0.getValue()),(m.INSTANCELEVELCOMMANDEXECUTORS.get(INDEX.get())!=null)))){r.ln=264;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(INDEX.get()));r.ln=265;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(INDEX.get());
r.ln=266;P4.set(false);r.ln=267;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=268;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 2. IK=",P0.get()),u,u,false);}l1.end();return r.rR(P2);}r.ln=272;}l1.end();r.dR("KEY");r.dR("INDEX");}r.ln=275;{var l1=m.INSTANCELEVELCOMMANDEXECUTORS.cI();while(l1.step()){var EXECUTOR=r.sR("EXECUTOR",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=276;if(l.and((EXECUTOR==null),l.n.le(INDEX.get(),P1.get()))){r.ln=278;if(l.tB(P3.get()))
{r.ln=280;C0=r.sR("C0",l.cAs("VF_UM012O"));r.ln=281;C0.mthZINT_CREATEINSTANCE(this,"I",INDEX.get());r.ln=282;m.INSTANCELEVELCOMMANDEXECUTORS.set(INDEX.get(),C0);r.ln=283;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(INDEX.get()).set(P0.get());r.ln=284;P2=r.sR("P2",C0);r.ln=285;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(INDEX.get());r.ln=287;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=288;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 3. IK=",P0.get()),u,u,false);}}r.ln=293;
P4.set(true);l1.end();return r.rR(P2);}r.ln=297;}l1.end();r.dR("EXECUTOR");r.dR("INDEX");}r.ln=301;C1.set(l.add(m.COMMANDEXECUTORLASTRETURNEDINDEX.get(),1));r.ln=303;if(l.or(l.n.lt(C1.get(),1),l.n.gt(C1.get(),P1.get()))){r.ln=304;C1.set(1);}r.ln=307;if(l.tB(P3.get())){r.ln=308;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(C1.get()));r.ln=309;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(C1.get()).set(P0.get());r.ln=310;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(C1.get());r.ln=312;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE())
{r.ln=313;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 4. IK=",P0.get()),u,u,false);}}r.ln=318;P4.set(false);return r.rR(P2);}r.ln=321;};cO.mthZINT_GETAPPROPRIATECOMMANDEXECUTOR=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"zInt_GetAppropriateCommandExecutor",324);var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cPD("HADTOBECREATED");var P4=r.cPD("RETURNREFERENCE");P0=p0;P1=p1;P2=p2;
P3=p3;r.ln=324;{r.ln=331;P3.set(false);r.ln=333;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=334;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat("GetCommandExecutor started. Instance key is \"",P1.get()),"\""),u,u,false);}r.ln=337;{var v1=P0.get();if(r.ln=339,l.s.eq(v1,"H")){r.ln=341;if((m.HIDDENLEVELCOMMANDEXECUTOR==null)){r.ln=342;P3.set(true);r.ln=343;this.srHIDDENLEVELCOMMANDEXECUTOR(l.cAs("VF_UM012O"));r.ln=344;m.HIDDENLEVELCOMMANDEXECUTOR.mthZINT_CREATEINSTANCE(this,"H",1);}r.ln=347;
P4=r.sR("P4",m.HIDDENLEVELCOMMANDEXECUTOR);}else if(r.ln=349,l.s.eq(v1,"I")){r.ln=351;P4=r.sR("P4",this.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR(P1,P2,true,P3));}else{r.ln=357;if((m.OBJECTLEVELCOMMANDEXECUTOR==null)){r.ln=358;P3.set(true);r.ln=359;this.srOBJECTLEVELCOMMANDEXECUTOR(l.cAs("VF_UM012O"));r.ln=360;m.OBJECTLEVELCOMMANDEXECUTOR.mthZINT_CREATEINSTANCE(this,"O",1);}r.ln=363;P4=r.sR("P4",m.OBJECTLEVELCOMMANDEXECUTOR);}r.ln=365;}r.ln=368;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=369;
m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"GetCommandExecutor ended",u,u,false);}}r.ln=372;return r.rR(P4);};cO.mthZINT_SETVF_FP010OHANDLERENABLEMENTS=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_SetVF_FP010OHandlerEnablements",376);var P0=r.cP("ENABLED","PRIM_BOLN");var P1=r.cPF("ATREFERENCELEVEL",Fd.F1.Dc);var P2=r.cP("ATANYREFERENCELEVEL","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?(-999):(p1));P2.set((p2===u)?(false):(p2));r.ln=376;{r.ln=381;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step())
{var HANDLER=r.sR("HANDLER",l1.item());r.ln=382;if(l.tB(l.or(l.b.ne(HANDLER.getLOGICALLYENABLED(),P0.get()),HANDLER.getHASSUBTYPES()))){r.ln=383;if(l.tB(l.or(l.n.eq(HANDLER.getREFERENCELEVEL(),P1.get()),P2.get()))){r.ln=385;this.mthZINT_SETSPECIFICVF_FP010OHANDLERENABLEMENT(P0.get(),HANDLER);}}r.ln=389;}l1.end();r.dR("HANDLER");}}r.ln=391;r.e();};cO.mthZINT_SETSPECIFICVF_FP010OHANDLERENABLEMENT=function(p0,p1){var r=l.mR(this,cO,"zInt_SetSpecificVF_FP010OHandlerEnablement",395);var P0=r.cP("ENABLED","PRIM_BOLN");
var P1=r.cPD("HANDLER");P0.set(p0);P1=p1;r.ln=395;{r.ln=399;if(l.tB(l.or(l.b.ne(P1.getLOGICALLYENABLED(),P0.get()),P1.getHASSUBTYPES()))){r.ln=403;P1.setLOGICALLYENABLED(P0.get());r.ln=406;if((P1.getVF_FP009REFERENCE()!=null)){r.ln=407;P1.getVF_FP009REFERENCE().mthZINT_VF_FP010OHANDLERENABLEMENTCHANGED(P1);}}}r.ln=444;r.e();};cO.mthZINT_RESETDEFAULTCOMMAND=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ResetDefaultCommand",449);r.ln=449;{r.ln=451;this.srCURRENTDEFAULTVF_FP010OHANDLER(m.REALDEFAULTVF_FP010OHANDLER);
}r.ln=453;r.e();};cO.mthZINT_OVERRIDEDEFAULTCOMMAND=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_OverrideDefaultCommand",457);var P0=r.cPD("TOVF_FP010OHANDLER");P0=p0;r.ln=457;{r.ln=460;if(((l.n.eq(P0.getREFERENCELEVEL(),1)&&l.b.Not(P0.getISNEVERDEFAULT()))&&P0.getLOGICALLYENABLED())){r.ln=461;this.srCURRENTDEFAULTVF_FP010OHANDLER(P0);}else{r.ln=463;this.mthZINT_RESETDEFAULTCOMMAND();}}r.ln=466;r.e();};cO.mthZINT_EXECUTEDEFAULTCOMMAND=function(p0,p1,p2,p3,p4,p5){var m=this.REF,r=l.mR(this,cO,"zInt_ExecuteDefaultCommand",470);
var P0=r.cPF("ATREFERENCELEVEL",Fd.F1.Dc);var P1=r.cP("ATANYREFERENCELEVEL","PRIM_BOLN");var P2=r.cP("HANDLERWASEXECUTED","PRIM_BOLN");var P3=r.cPD("USEBUSYPANEL");var P4=r.cP("WITHINSTANCEREFERENCEKEY","PRIM_ALPH");var P5=r.cP("IGNOREENABLEMENT","PRIM_BOLN");P0.set((p0===u)?(-999):(p0));P1.set((p1===u)?(false):(p1));P2.set(false);P3=p3;P4.set(p4);P5.set(p5);r.ln=470;{r.ln=478;P2.set(false);r.ln=481;if((m.CURRENTDEFAULTVF_FP010OHANDLER!=null)){r.ln=482;if((l.b.Not(m.CURRENTDEFAULTVF_FP010OHANDLER.getLOGICALLYENABLED())&&l.b.Not(P5.get())))
{r.ln=483;this.mthZINT_RESETDEFAULTCOMMAND();}}r.ln=488;if((m.CURRENTDEFAULTVF_FP010OHANDLER==null)){r.ln=489;this.mthZINT_RESETDEFAULTCOMMAND();}r.ln=493;if((m.CURRENTDEFAULTVF_FP010OHANDLER!=null)){r.ln=495;if(l.tB(l.or(m.CURRENTDEFAULTVF_FP010OHANDLER.getLOGICALLYENABLED(),P5.get()))){r.ln=496;if(l.tB(l.or(l.n.eq(m.CURRENTDEFAULTVF_FP010OHANDLER.getREFERENCELEVEL(),P0.get()),P1.get()))){r.ln=498;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=499;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Executing as current default command - ",m.CURRENTDEFAULTVF_FP010OHANDLER.getVF_FP009REFERENCE().getUCAPTION()),u,u,false);
}r.ln=502;m.CURRENTDEFAULTVF_FP010OHANDLER.mthZINT_EXECUTECOMMANDHANDLER(P3,null,P4);r.ln=504;P2.set(true);}}}if(p2!==u){p2.set(P2.get());}}r.ln=511;r.e();};cO.mthZINT_ENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnrollChild",515);var P0=r.cPD("UREFERENCE");var P1=r.cP("LATEENROLLREJECTED","PRIM_BOLN");P0=p0;var C0=r.cD("C0");r.ln=515;{r.ln=521;cA.mthZINT_ENROLLCHILD.call(this,P0);r.ln=525;if(l.Ko(P0,"VF_FP010O")){r.ln=526;m.VF_FP010OHANDLERS.mthINSERT(l.cast(P0,"VF_FP010O"));return r.rV(P1.get());
}r.ln=530;if(l.Ko(P0,"VF_FP017O")){r.ln=531;m.VF_FP017OPROPERTIES.mthINSERT(l.cast(P0,"VF_FP017O"));return r.rV(P1.get());}}r.ln=535;return r.rV(P1.get());};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",539);var P0=r.cPD("P");P0=p0;r.ln=539;{r.ln=543;if(l.n.le(P0.getPROPERTYNUMBER(),100)){r.ln=545;cA.mthZINT_SETPROPERTY.call(this,P0);}else{r.ln=551;{var v1=P0.getPROPERTYNUMBER();if(r.ln=553,l.n.eq(v1,101)){r.ln=554;m.ULIGHTTHEMECOLOR.set(l.s.AsNativeString(P0.getVALUE()));
}else if(r.ln=556,l.n.eq(v1,102)){r.ln=557;m.UDARKTHEMECOLOR.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=559,l.n.eq(v1,103)){r.ln=560;this.srOWNERVF_FP002OBJECT(l.cast(m.USYSTEM.ref.mthZINT_GETVF_AC001OBJECT(l.s.AsNativeString(P0.getVALUE())),"VF_FP002O"));}else if(r.ln=562,l.n.eq(v1,104)){r.ln=563;m.PTY_UUSERREORDERTABS.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}r.ln=565;}}}r.ln=569;r.e();};cO.mthZINT_SHOWCOMMANDHANDLERCHOICEMENU=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCommandHandlerChoiceMenu",572);
var P0=r.cPD("USEBUSYPANEL");var P1=r.cP("WITHINSTANCEREFERENCEKEY","PRIM_ALPH");var P2=r.cP("IGNOREENABLEMENT","PRIM_BOLN");P0=p0;P1.set(p1);P2.set(p2);var C0=r.cF("COUNT",Fd.F1.Dc);var C1=r.cD("C1");C0.iC();r.ln=572;{r.ln=582;if((m.TEMPCOMMANDHANDLERCHOICEMENU==null)){r.ln=584;this.srTEMPCOMMANDHANDLERCHOICEMENU(l.cC("VF_UI008O"));r.ln=586;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_INITIALIZE(true,false,"");r.ln=588;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());
r.ln=589;C1=r.sR("C1",HANDLER.getVF_FP009REFERENCE());r.ln=590;if((C1!=null)){r.ln=591;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_PUTMENUITEM(C1.getUCAPTION(),"",C1.getUVLFONEIMAGE(),C1.getUIMAGESOURCE(),u,u,HANDLER,u,u,u,u,u);}r.ln=593;}l1.end();r.dR("HANDLER");}}r.ln=598;C0.set(0);r.ln=599;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());r.ln=600;C0.set(l.add(C0.get(),1));r.ln=602;m.TEMPCOMMANDHANDLERCHOICEMENU.getMENUITEMSPANELS().get(C0.get()).setEnabled(l.or(P2.get(),HANDLER.getLOGICALLYENABLED()));
r.ln=604;}l1.end();r.dR("HANDLER");}r.ln=607;if(l.n.gt(C0.get(),0)){r.ln=608;m.TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY.set(P1.get());r.ln=609;this.srTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(P0);r.ln=610;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_SHOW(u);}}r.ln=613;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TempCommandHandlerChoiceMenu.Closing",616);r.ln=616;{r.ln=618;this.srTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(null);}r.ln=620;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TempCommandHandlerChoiceMenu.ItemSelected",623);
var P0=Ps.r("ASSOCIATEDREFERENCE");var C0=r.cD("C0");r.ln=623;{r.ln=627;C0=r.sR("C0",P0);r.ln=629;C0.mthZINT_EXECUTECOMMANDHANDLER(m.TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL,null,m.TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY);r.ln=631;this.srTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(null);}r.ln=633;r.e();};cO.mthZINT_GOBUSY=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"zInt_GoBusy",636);var P0=r.cPD("OVERPANEL");var P1=r.cPD("SHOWBUSYTEXT");var P2=r.cPD("ANIMATED");var P3=r.cPD("WAITFOR");P0=p0;P1=p1;
P2=p2;P3=p3;r.ln=636;{r.ln=643;if((m.BUSYSTATECHAIN==null)){r.ln=644;this.srBUSYSTATECHAIN(l.cC("VF_SY175O"));}r.ln=648;m.BUSYSTATECHAIN.mthZINT_GOBUSY(P0,P1,P2,P3);}r.ln=650;r.e();};cO.mthZINT_GOFREE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_GoFree",653);r.ln=653;{r.ln=655;if((m.BUSYSTATECHAIN!=null)){r.ln=656;m.BUSYSTATECHAIN.mthZINT_GOFREE();}}r.ln=659;r.e();};cO.getVF_FP010OHANDLERS=function(){return this.REF.VF_FP010OHANDLERS;};cO.getREALDEFAULTVF_FP010OHANDLER=function(){return this.REF.REALDEFAULTVF_FP010OHANDLER;
};cO.setREALDEFAULTVF_FP010OHANDLER=function(v){this.srREALDEFAULTVF_FP010OHANDLER(v);};cO.getCURRENTDEFAULTVF_FP010OHANDLER=function(){return this.REF.CURRENTDEFAULTVF_FP010OHANDLER;};cO.setCURRENTDEFAULTVF_FP010OHANDLER=function(v){this.srCURRENTDEFAULTVF_FP010OHANDLER(v);};cO.getVF_FP017OPROPERTIES=function(){return this.REF.VF_FP017OPROPERTIES;};cO.getOWNERVF_FP002OBJECT=function(){return this.REF.OWNERVF_FP002OBJECT;};cO.setOWNERVF_FP002OBJECT=function(v){this.srOWNERVF_FP002OBJECT(v);};cO.getAUTOTILINGROOTSEQUENCE=function()
{return this.mthGET_AUTOTILINGROOTSEQUENCE();};cO.getUCURRENTTHEMECOLOR=function(){return this.mthGET_UCURRENTTHEMECOLOR();};cO.getUUSERREORDERTABS=function(){return this.mthGET_UUSERREORDERTABS();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}cO.srREALDEFAULTVF_FP010OHANDLER=function(rn){this.sR("REALDEFAULTVF_FP010OHANDLER",rn);};cO.srCURRENTDEFAULTVF_FP010OHANDLER=function(rn)
{this.sR("CURRENTDEFAULTVF_FP010OHANDLER",rn);};cO.srOWNERVF_FP002OBJECT=function(rn){this.sR("OWNERVF_FP002OBJECT",rn);};cO.srBUSYSTATECHAIN=function(rn){this.sR("BUSYSTATECHAIN",rn);};cO.srOBJECTLEVELCOMMANDEXECUTOR=function(rn){if(this.REF.OBJECTLEVELCOMMANDEXECUTOR!=null){this.REF.OBJECTLEVELCOMMANDEXECUTOR.rH("UTERMINATED",this,e4);}this.sR("OBJECTLEVELCOMMANDEXECUTOR",rn);if(this.REF.OBJECTLEVELCOMMANDEXECUTOR!=null){this.REF.OBJECTLEVELCOMMANDEXECUTOR.aH("UTERMINATED",this,e4);}};cO.srHIDDENLEVELCOMMANDEXECUTOR=function(rn)
{if(this.REF.HIDDENLEVELCOMMANDEXECUTOR!=null){this.REF.HIDDENLEVELCOMMANDEXECUTOR.rH("UTERMINATED",this,e2);}this.sR("HIDDENLEVELCOMMANDEXECUTOR",rn);if(this.REF.HIDDENLEVELCOMMANDEXECUTOR!=null){this.REF.HIDDENLEVELCOMMANDEXECUTOR.aH("UTERMINATED",this,e2);}};cO.srTEMPCOMMANDHANDLERCHOICEMENU=function(rn){if(this.REF.TEMPCOMMANDHANDLERCHOICEMENU!=null){this.REF.TEMPCOMMANDHANDLERCHOICEMENU.rH("CLOSING",this,e5);this.REF.TEMPCOMMANDHANDLERCHOICEMENU.rH("ITEMSELECTED",this,e6);}this.sR("TEMPCOMMANDHANDLERCHOICEMENU",rn);
if(this.REF.TEMPCOMMANDHANDLERCHOICEMENU!=null){this.REF.TEMPCOMMANDHANDLERCHOICEMENU.aH("CLOSING",this,e5);this.REF.TEMPCOMMANDHANDLERCHOICEMENU.aH("ITEMSELECTED",this,e6);}};cO.srTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL=function(rn){this.sR("TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL",rn);};},{rc:["VF_AC001O","VF_SY001O","VF_SY001X"],rp:["PRIM_ACOL","PRIM_FLD","PRIM_ALPH","PRIM_BOLN"],dc:["VF_FP010O","VF_FP002O","VF_SY175O","VF_UM012O","VF_UI008O","VF_FP017O","VF_FP009O"],dp:["PRIM_PANL","PRIM_ALPH","PRIM_BOLN"]
});