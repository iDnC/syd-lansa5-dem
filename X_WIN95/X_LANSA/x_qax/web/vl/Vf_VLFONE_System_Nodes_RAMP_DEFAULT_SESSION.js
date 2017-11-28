function EXEC_027()
{
}
function EXEC_028()
{
}
function EXEC_029()
{
return;
}
function EXEC_030()
{
}
var vSD_2276B7EC2C7C41779F228EDC43301E16 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHOW_CURRENT_FORM(false);
 SHOW_5250_BUTTONS();
 SETBUSY(false);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 switch (sToForm)
 {
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vName      :  "=UNKNOWN_FORM=",
 vGUID      :  "87C8CC1EE7D2437EB668E210B315084E",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTYPE      :  "U"
 };
try{VF_SY420_REGISTER_FORM(vSD_2276B7EC2C7C41779F228EDC43301E16);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_1.");}
var vSD_6EA2C03B6315441ABA00E6A93ED609E7 = {
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "MAIN":
 {
 SETVALUE("loginUser",objUser.Name);
 SETVALUE("loginPwd",objUser.Password);
 SENDKEY(KeyEnter);
 Q_SENDKEY(null,KeyEnter);
 Q_CHECK_CURRENT_FORM("MAIN","Unable to navigate to form MAIN");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 return(bReturn);
 },
 vName      :  "MainLogin",
 vGUID      :  "BFD2069824EB4D80A4776A3CB03FBD07",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("MAIN"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_6EA2C03B6315441ABA00E6A93ED609E7);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_2.");}
var vSD_01295B9F1C2F46B185240DA974B46CD3 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 SENDKEY(KeyEnter);
 return(bReturn);
 },
 vName      :  "MESSAGES",
 vGUID      :  "1843766E95AC46E0B3986871930A2881",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("MESSAGES"),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_01295B9F1C2F46B185240DA974B46CD3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_3.");}
var vSD_FCC7629CBE8A419C84B44B7E51362F16 = {
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "PRO_KEY":
 {
 SETVALUE("COMMAND","lansa run df_ramp dfrprom partition(dem)");
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("PRO_KEY","Unable to navigate to form PRO_KEY");
 }
 break;
 case "ORD_KEY":
 {
 SETVALUE("COMMAND","lansa run df_ramp dfrordm partition(dem)");
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("ORD_KEY","Unable to navigate to form ORD_KEY");
 }
 break;
 case "CUS_KEY":
 {
 SETVALUE("COMMAND","lansa run df_ramp dfrcusm partition(dem)");
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("CUS_KEY","Unable to navigate to form CUS_KEY");
 }
 break;
 case "MainLogin":
 {
 SETVALUE("COMMAND","90");
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("MainLogin","Unable to navigate to form MainLogin");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 return(bReturn);
 },
 vName      :  "MAIN",
 vGUID      :  "66570D3F20A049B988A9AB9BC89C9BC3",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("MainLogin","CUS_KEY","ORD_KEY","PRO_KEY"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_FCC7629CBE8A419C84B44B7E51362F16);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_4.");}
var vSD_CC67332E9F4341F5A9795C9C62AE01AC = {
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "CUS_MAINT":
 {
 SETVALUE("KEY",objListManager.NKey1[0]);
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("CUS_MAINT","Unable to navigate to form CUS_MAINT");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (oPayload != null)
 {
 SETVALUE("KEY",oPayload.N);
 SENDKEY(KeyEnter,oPayload);
 Q_CHECK_CURRENT_FORM("CUS_MAINT","Unable to navigate to form CUS_MAINT");
 }
 return(bReturn);
 },
 vName      :  "CUS_KEY",
 vGUID      :  "30F8256E661240D29DAA182726A47098",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("CUS_MAINT"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_CC67332E9F4341F5A9795C9C62AE01AC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_6.");}
var vSD_606981E775614551AB45B80FB13694ED = {
 vHandle_AVEVENT: function(WithId,Sender,WithAInfo1,WithAInfo2,WithAInfo3,WithAInfo4,WithAInfo5,WithNInfo1,WithNInfo2,WithNInfo3,WithNInfo4,WithNInfo5)
 {
 if ((WithId == "CUS_MAINT_SHOW") || (WithId == "CUS_MAINT_ALIGN"))
 {
 SENDKEY(KeyEnter, {ID:WithId,N:WithAInfo1,A:WithAInfo2,C:WithAInfo3,PC:WithAInfo4} );
 }
 if (WithId == "CUS_PHONE")
 {
 SETVALUE("PHONE",WithAInfo1);
 }
 return(true);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHOW_CURRENT_FORM(true); /* Show the form in the framework and show VLF buttons */
 HIDE_5250_BUTTONS();     /* Hide any 5250 style buttons displayed               */
 GET_FORM_MESSAGE(22);    /* Extract messages and hide the message line          */
 SETBUSY(false);          /* Last thing done - turn off the busy state           */
 if ((oPayload != null) && (oPayload.ID == "CUS_MAINT_ALIGN" ))
 {
 SETVALUE("ADDRESS",oPayload.A);
 SETVALUE("CITY",oPayload.C);
 SETVALUE("POSTALCODE",oPayload.PC);
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 if (HANDLE_PROMPT()) return(bReturn); /* If the focus element is automatically prompted finish now */
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF12:
 SENDKEY(KeyF12);
 break;
 case KeyF24:
 AVSIGNALEVENT("ORD_MAINT_ALIGN","FRAMEWORK",objListManager.NKey2[0],GETVALUE("ADDRESS"),GETVALUE("CITY"),GETVALUE("POSTALCODE"));
 break;
 default:
 SENDKEY(sButton);
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "MAIN":
 {
 SENDKEY(KeyF12);
 Q_CHECK_CURRENT_FORM("MAIN","Unable to navigate to form MAIN");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vName      :  "CUS_MAINT",
 vGUID      :  "D2292D3CE1654ED2919B21A35F187C3B",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","Exit","Prompt","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","Msg","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "Align Order","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10011000000010100000000000000000000000",
 vFKEVLF : "00000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("MAIN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_606981E775614551AB45B80FB13694ED);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_7.");}
var vSD_2DA0E981309B4277BD3BF869E8BDEFCA = {
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "ORD_MAINT":
 {
 SETVALUE("KEY",objListManager.NKey1[0]);
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("ORD_MAINT","Unable to navigate to form ORD_MAINT");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 return(bReturn);
 },
 vName      :  "ORD_KEY",
 vGUID      :  "7F77509DADC94A0AB4488EB7056FE345",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("ORD_MAINT"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_2DA0E981309B4277BD3BF869E8BDEFCA);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_8.");}
var vSD_8355C862F0514C8D8B89E4A3DBCA0770 = {
 vHandle_AVEVENT: function(WithId,Sender,WithAInfo1,WithAInfo2,WithAInfo3,WithAInfo4,WithAInfo5,WithNInfo1,WithNInfo2,WithNInfo3,WithNInfo4,WithNInfo5)
 {
 if (WithId == "ORD_MAINT_ALIGN")
 {
 SETVALUE("ADDRESS",WithAInfo2);
 SETVALUE("CITY",WithAInfo3);
 SETVALUE("POSTALCODE",WithAInfo4);
 }
 if (WithId == "ORD_PHONE")
 {
 SETVALUE("PHONE",WithAInfo1);
 }
 return(true);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHOW_CURRENT_FORM(true); /* Show the form in the framework and show VLF buttons */
 HIDE_5250_BUTTONS();     /* Hide any 5250 style buttons displayed               */
 GET_FORM_MESSAGE(22);    /* Extract messages and hide the message line          */
 SETBUSY(false);          /* Last thing done - turn off the busy state           */
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 if (HANDLE_PROMPT()) return(bReturn); /* If the focus element is automatically prompted finish now */
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF12:
 SENDKEY(KeyF12);
 break;
 case KeyF23:
 AVSIGNALEVENT("CUS_MAINT_SHOW","FRAMEWORK",objListManager.NKey2[0]);
 break;
 case KeyF24:
 AVSIGNALEVENT("CUS_MAINT_ALIGN","FRAMEWORK",objListManager.NKey2[0],GETVALUE("ADDRESS"),GETVALUE("CITY"),GETVALUE("POSTALCODE"));
 break;
 default:
 SENDKEY(sButton);
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "MAIN":
 {
 SENDKEY(KeyF12);
 Q_CHECK_CURRENT_FORM("MAIN","Unable to navigate to form MAIN");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vName      :  "ORD_MAINT",
 vGUID      :  "3A2C6B7ECFE84A0799BDBFBF29F157EF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","Exit","Prompt","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","Msg","F15","F16","F17",
 "F18","F19","F20","F21","F22","Show Customer",
 "Align Customer","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10011000000010100000000000000000000000",
 vFKEVLF : "00000000000000000000000110000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("MAIN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8355C862F0514C8D8B89E4A3DBCA0770);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_9.");}
var vSD_8958FB625D5945189548166542A127D4 = {
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "PRO_MAINT":
 {
 SETVALUE("KEY",objListManager.NKey1[0]);
 SENDKEY(KeyEnter);
 Q_CHECK_CURRENT_FORM("PRO_MAINT","Unable to navigate to form PRO_MAINT");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 return(bReturn);
 },
 vName      :  "PRO_KEY",
 vGUID      :  "FDD967E44EDE46628AC64D37B17C2DA1",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("PRO_MAINT"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8958FB625D5945189548166542A127D4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_10.");}
var vSD_B467418407814CC1BC4147B3F9AA767C = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHOW_CURRENT_FORM(true); /* Show the form in the framework and show VLF buttons */
 HIDE_5250_BUTTONS();     /* Hide any 5250 style buttons displayed               */
 GET_FORM_MESSAGE(22);    /* Extract messages and hide the message line          */
 SETBUSY(false);          /* Last thing done - turn off the busy state           */
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 if (HANDLE_PROMPT()) return(bReturn); /* If the focus element is automatically prompted finish now */
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 default:
 SENDKEY(sButton);
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 case "MAIN":
 {
 SENDKEY(KeyF12);
 Q_CHECK_CURRENT_FORM("MAIN","Unable to navigate to form MAIN");
 }
 break;
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vName      :  "PRO_MAINT",
 vGUID      :  "02163A65D8004CC8B5015C1F452F1AF3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("MAIN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B467418407814CC1BC4147B3F9AA767C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_14.");}
function EXEC_026()
{
objNodeGroup.uRampStamp="20171108-063553";
objNodeGroup.uIdentifier="RAMP_DEFAULT_SESSION";
objNodeGroup.uCaption="Default Session";
objNodeGroup.uLayoutStyle="FIXED";
objNodeGroup.flagLockUnknown=true;
objNodeGroup.uScriptCount=10;
objNodeGroup.arrayobjSpecialFields=new Array();
var oSF=null;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_CLASS";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_CLASS"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_GROUP";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_GROUP"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_BUYER";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_BUYER"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_UNIT";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_UNIT"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_HAXMC";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_HAXMC"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM08O";
oSF.uName="PRO_SHIPP";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_SHIPP"]=oSF;
oSF=new Object();
oSF.uKey="F4";
oSF.uHandler="";
oSF.uHandlerONE="DF_PRM09O";
oSF.uName="PRO_NUM*";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F4PRO_NUM*"]=oSF;
if ( !(objNodeGroup.flagSessionManaged) ) objNodeGroup.flagLockUnknown=false;
return;
}
