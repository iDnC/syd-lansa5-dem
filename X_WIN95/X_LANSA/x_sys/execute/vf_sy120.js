
/* ================================================================================================= */ 
/* =============================== COPYRIGHT NOTICE ================================================ */
/* ================================================================================================= */ 
/* (C) Copyright 2014 LANSA. LANSA is a trade name and registered trademark of LANSA in the          */
/* United States of America, Australia, the United Kingdom and other countries. All rights reserved. */
/* ================================================================================================= */
/*                                                                                                   */
/*          #     #       #       ######     #     #    ###    #     #     #####                     */
/*          #  #  #      # #      #     #    ##    #     #     ##    #    #     #                    */
/*          #  #  #     #   #     #     #    # #   #     #     # #   #    #                          */
/*          #  #  #    #     #    ######     #  #  #     #     #  #  #    #  ####                    */
/*          #  #  #    #######    #   #      #   # #     #     #   # #    #     #                    */ 
/*          #  #  #    #     #    #    #     #    ##     #     #    ##    #     #                    */ 
/*           ## ##     #     #    #     #    #     #    ###    #     #     #####                     */
/*                                                                                                   */
/* ================================================================================================= */ 
/* Modification of these shipped JavaScript routines will result one or more of the following:       */
/* -> The introduction of incompatibilities with future versions of this framework.                  */
/* -> Voiding or limitation of any maintenance contract you may have in place for this framework.    */
/* -> Being charged for problem resolutions that are traced back to any such modifications.          */  
/* ================================================================================================= */ 
  
/* ==================== */
/* Multilingual strings */
/* ==================== */

var arrayMtxtMessages    = new Array(); /* Multilingual strings */
    arrayMtxtMessages[0] = "Attempt to send a key (SENDKEY) in an unexpected screen";
    arrayMtxtMessages[1] = "Attempt to set a value (SETVALUE) in an unexpected screen";
    arrayMtxtMessages[2] = "No valid path to navigate to specified junction";
    arrayMtxtMessages[3] = "Failed to initialize Active X control";
    arrayMtxtMessages[4] = "Waiting for server connection .";

var __First = 9999001;
var __Last  = 9999002;
var __Field = 9999003;
        
/* ================== ================== ================== */
/* ================== GLOBAL   VARIABLES ================== */
/* ================== ================== ================== */
var GLOBAL_flagWEBMODEExecute             = false;
var GLOBAL_flagNETMODEExecute             = false;
var GLOBAL_flagOnTitleChangedEventEnabled = false;
var objNewLook = null;
var GLOBAL_intScriptCount = 0;
var GLOBAL_flagFrameworkLocked = false;
var GLOBAL_flagTraceModeOn     = false;
var GLOBAL_flagTraceToArray    = false;
var GLOBAL_arrayTraceData      = null;  
var GLOBAL_intTraceIndent      = 0;
var GLOBAL_strTraceIndent      = "                                                                                 ";
var GLOBAL_V_SendCount         = -1; 
var GLOBAL_V_ReceiveCount      = -1;
var GLOBAL_flagManagedUIEvent  = false;     
var GLOBAL_intNextScriptNumber = 0;     
var GLOBAL_strPropertySplitter = "";
var GLOBAL_arrayUserStrings    = new Array();
var GLOBAL_intSignalCount      = 0;
var GLOBAL_intSavRstValueCount = 0;
var GLOBAL_flagHandlingRamp    = true;
var GLOBAL_flagSBIsShowing     = false;
var GLOBAL_flagShowSBUndefined = false;
var GLOBAL_strLockMessage      = "";
var GLOBAL_flagForcePopUp      = true;
var GLOBAL_flagRecursionCheck  = true;
var GLOBAL_intPrevDestTrackInd = 0; /* Index to add prev dest array */
var GLOBAL_intMaxPrevDest = 20;   /* Maximum number of previous destinations allowed */
var GLOBAL_strFatalMsgType     = "FATAL";
var GLOBAL_PopupRefreshTimer     = null;
var GLOBAL_PopupRefreshTimerPoll = 50;
var GLOBAL_flagHideMainOnSendKey  = false;
var GLOBAL_sCheckButtonVisible  = "FALSE"; /* */

/* Background Colors */
var GLOBAL_HTML_BackColor = "";
var GLOBAL_NL_BackColor   = "";

/* Disable keyboard buffering */
var GLOBAL_V_SendGO = "Y";
var GLOBAL_V_SendSTOP = "N";

/* The default or null function key */

var GLOBAL_NULL_FunctionKey           = new Object();  
    GLOBAL_NULL_FunctionKey.KC        = "UNKNOWN";
    GLOBAL_NULL_FunctionKey.fKENL     = false;
    GLOBAL_NULL_FunctionKey.fKEVLF    = false;
    GLOBAL_NULL_FunctionKey.KS        = "UNKNOWN";
    GLOBAL_NULL_FunctionKey.KSEQ      = 1;    
    GLOBAL_NULL_FunctionKey.objCherry = null;

/* Only used in the browser context */

var GLOBAL_strRAMP_Instance_Id   = "";
var GLOBAL_int503AssignedNum     = null;
var GLOBAL_VF_SY120_Parent       = null;
var GLOBAL_VF_System_EXTERN      = null;

var GLOBAL_arraySendKeyAttempts = new Array();
/* ================== ================== ================== */
/* ============== CHERRY and JUNCTION STORAGE ============= */
/* ================== ================== ================== */

var objNodeGroup                   = new Object(); /* VF_FP026 */
var arrayobjCherriesbyScreenName    = new Array();  /* VF_FP027 */
var arrayobjJunctionsbyScreenName    = new Array();  /* VF_FP028 */
var arrayobjSpecialsbyScreenName     = new Array();  /* VF_FP029 */
var arrayobjNodebyIDN                = new Array();  /* VF_FP026/27/28 keyed by uIdentifer */
var arrayobjEnabledFunctionKeyIndex  = new Array();  
var arrayKeySequences = new Array();
var arrayKeyCapsBySeq = new Array();
var arrayClickedKeyIndexes = new Array();
var arrayobjEnabledFunctionKeyStroke = new Array();  
var arraystrPreviousDestinations     = new Array(20);  /* Remember the 20 last cherries shown in case NAVIGATE_TO_PREV_DESTINATION */
var arrayobjScriptsbyIDN             = new Array();  /* VF_FP030 */

/* Target -> script cross reference. This array is very useful when building the paths to a Junction. It is keyed */
/* by the uIdentifier of the target and has an array of the scripts that go there */
/* When setting the scripts, a new entry is created with the entry number of the script in arrayobjScriptsbyIDN */

var arrayobjTargetScriptXRef           = new Array();
var arrayScriptInstanceExecutionStack  = new Array();
var intScriptExecutionStackPos = 0;     

/* -------------------------------------------- */
/* Connection and disconnection timer intervals */
/* -------------------------------------------- */

var intNLConnectionWaitInterval  = 500;    /* Milliseconds */ 
var intNLConnectionWaitLimit     = 30000;  /* Milliseconds */ 
var intNLWaitAttempts            = 0;      /* normal integer used as counter to send a message to cause connection screen update a dot, e.g. Waiting for connection . . . */
var objNLConnectionWaitTimer     = null;
var intNLConnectionWaitElapsed   = 0;      /* Milliseconds */
var objNLConnectionLostTimer     = null;
var intNLConnectionLostInterval  = 2000;   /* Milliseconds */ 
var GLOBAL_strNLWaitMessage      = arrayMtxtMessages[4];

var objNLFunctionKeyUsageTimer         = null;
var intNLFunctionKeyUsageTimerInterval = 400;  /* Milliseconds */ 

var GLOBAL_flagLoadAttempted      = false;
var GLOBAL_objLoadAttemptedTimer  = null;
var GLOBAL_flagConnected          = false;
var GLOBAL_CurrentStatus          = 0;
var GLOBAL_strProbeSeparator      = ""; 

/* =================================== */
/* The current node and session status */
/* =================================== */ 
  
var GLOBAL_objCurrentNode              = null;
var GLOBAL_intCurrentFormSequence      = 0;
var GLOBAL_flagSessionSignedOn         = false;
var GLOBAL_strLogonScreenName          = "";
var GLOBAL_arrayobjScriptBranch        = new Array(); 
var GLOBAL_arrayShortestPathtoJunction = new Array(); 
var GLOBAL_intMinimumBranchLength      = 9999;
var GLOBAL_arrayOptimizedPaths         = new Array(); 

/* ================== ================== ================== */
/* ================== FRAMEWORK OBJECTS  ================== */
/* ================== ================== ================== */

var objFramework      = new Object();
var objApplication    = new Object();
var objBusinessObject = new Object();
var objCommand        = new Object();
var objListManager    = new Object();


   /* Alphanumeric keys */
   objListManager.AKey1 = new Array();
   objListManager.AKey2 = new Array();
   objListManager.AKey3 = new Array();
   objListManager.AKey4 = new Array();
   objListManager.AKey5 = new Array();
 
   
   /* Numeric keys */
   objListManager.NKey1 = new Array();
   objListManager.NKey2 = new Array();
   objListManager.NKey3 = new Array();
   objListManager.NKey4 = new Array();
   objListManager.NKey5 = new Array();
   
   /* Visual IDs */
   objListManager.VisualId1 = new Array();
   objListManager.VisualId2 = new Array();
   
   /* Additional Alpha columns */

   objListManager.AColumn1 = new Array();
   objListManager.AColumn2 = new Array();
   objListManager.AColumn3 = new Array();
   objListManager.AColumn4 = new Array();
   objListManager.AColumn5 = new Array();
   objListManager.AColumn6 = new Array();
   objListManager.AColumn7 = new Array();
   objListManager.AColumn8 = new Array();
   objListManager.AColumn9 = new Array();
   objListManager.AColumn10 = new Array();

   /* Additional Numeric columns */
   
   objListManager.NColumn1 = new Array();
   objListManager.NColumn2 = new Array();
   objListManager.NColumn3 = new Array();
   objListManager.NColumn4 = new Array();
   objListManager.NColumn5 = new Array();
   objListManager.NColumn6 = new Array();
   objListManager.NColumn7 = new Array();
   objListManager.NColumn8 = new Array();
   objListManager.NColumn9 = new Array();
   objListManager.NColumn10 = new Array();

   /* Additional Date/Time columns */
   
   objListManager.DColumn1 = new Array();
   objListManager.DColumn2 = new Array();
   objListManager.DColumn3 = new Array();
   objListManager.DColumn4 = new Array();
   objListManager.DColumn5 = new Array();

   /* Subtype - Enhancement request */
   objListManager.Subtype = new Array();   

/* ========= */
/* User      */
/* ========= */

var objUser = new Object();
    objUser.Name     = "";
    objUser.Password = "";

/* ===================================================================================== */    
/* Global object to allow users to pass information between the framework and the Script */
/* ===================================================================================== */    

var objGlobal = new Object();

/* =========================== */
/* Script error handler object */
/* =========================== */

var objGlobalError = new Object();
    objGlobalError.strLastErrorDescription = "";

/* ====================================================================== */
/* ================== VL - JavaScript Exchange values  ================== */
/* ====================================================================== */

var arrayVFPROP            = new Array(); 
var objVFPROP_Exchange1    = null; 
var objVFPROP_Exchange2    = null; 
var objVFPROP_LastTransact = null; 
var intVFPROP_LastTransact = 0;  
var objVFPROP_ExchangeIdn  = null; 
var objVFPROP_ExchangeIns  = null; 
var objVFPROP_ExchangeVal  = null; 

var GLOBAL_objStartSignalQueue = null;
var GLOBAL_objEndSignalQueue   = null;

/* =================================== ================== */
/* =================================== ================== */
/* ================== ================== ================== */

/* NL Control constants */
var nlCtrlUnknown = 0;
var CtrlCommandButton = 9;
var CtrlGrid = 14;
var CtrlLabel = 4;
var CtrlMenuButton = 3;
var CtrlTextBox = 10;

var strDoubleQuote = "\"";
var sSingleQuote = "\'";

/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 
/* ==================== FUNCTIONS ADDRESSABLE FROM USER SCRIPT ====================== */ 

/* ---------------------------------------------------------------------------------- */
/* SUBFILE - define a subfile object                                                  */
/* ---------------------------------------------------------------------------------- */ 

function SUBFILE_ACCESSOR(strControlName)  
{  
   if (typeof(_SUBFILE_Prototypes_Defined) == 'undefined')
   {
      _SUBFILE_Prototypes_Defined                         = true;
      SUBFILE_ACCESSOR.prototype.Dispose                  = _SUBFILE_Dispose;   
      SUBFILE_ACCESSOR.prototype.SetSearchColumnNumber    = _SUBFILE_SearchColumnNumber;   
      SUBFILE_ACCESSOR.prototype.SetSearchColumnName      = _SUBFILE_SearchColumnName;   
      SUBFILE_ACCESSOR.prototype.SelectSubFileEntry       = _SUBFILE_SelectEntry;   
      SUBFILE_ACCESSOR.prototype.TracePage                = _SUBFILE_TracePage;   
      SUBFILE_ACCESSOR.prototype.SetSelectionColumnName   = _SUBFILE_SetSelectionColumnName; 
      SUBFILE_ACCESSOR.prototype.SetSelectionColumnNumber = _SUBFILE_SetSelectionColumnNumber; 
   }  
   
   this.strControlName            = strControlName; 
   this.arraySearchColumnNumber   = new Array(); 
   this.arraySearchColumnValue    = new Array(); 
   this.arraySearchColumnUpper    = new Array();
   this.arraySearchColumnContains = new Array();

   this.SelectionColumnNumber     = 2;  
   this.SelectionColumnOffset     = 0; 
   this.SelectionColumnValue      = "1";
   this.UnSelectionColumnValue    = "<NONE>";
   this.SelectionByCursor         = false; 
   this.SelectionByCursorOffset   = 0;
   this.SelectionKey              = KeyEnter; 
   this.KeyPageDown               = KeyPageDown; 
   this.Scrollable                = true; 
   this.Trace                     = true;    
   this.EndofFileMarker           = "Bottom";  
   this.UseMarker                 = true;    
   
   return;
}

/* ---------------------------------------------------------------------------------- */
/* ADD_STRING - Add a multilingual string to the collection array                    */
/* ---------------------------------------------------------------------------------- */ 

function ADD_STRING(intId,strText)  
{
   GLOBAL_arrayUserStrings[intId] = strText;
}

/* ---------------------------------------------------------------------------------- */
/* STRING - Get a multilingual string from the collection array                      */
/* ---------------------------------------------------------------------------------- */ 

function STRING(intId)  
{
   var strText = GLOBAL_arrayUserStrings[intId]; 
   if (strText == null) return(("String number " + intId.toString() + " not found."));   
   else                 return(strText);   
}

/* ---------------------------------------------------------------------------------- */
/* CLEAR_MESSAGES - Clear all messages                                                */
/* ---------------------------------------------------------------------------------- */ 

function CLEAR_MESSAGES()  
{
   VF_SY120_CLEARMESSAGES();  
   return; 
}
  
/* ---------------------------------------------------------------------------------- */
/* CHECK_CURRENT_FORM() - Check a form                                                */
/* ---------------------------------------------------------------------------------- */ 

function CHECK_CURRENT_FORM(strCheckFormName)  
{
   if (VF_SY120_GETCURRENTFORM() == strCheckFormName) return(true);
   
   HIDE_CURRENT_FORM( VF_BUILD_ARGUMENT_STRING(arguments,1) );  
 
   return(false); 
}
          
/* ---------------------------------------------------------------------------------- */
/* FATAL_MESSAGE() - Issue a fatal message                                            */
/* ---------------------------------------------------------------------------------- */ 

function FATAL_MESSAGE()
{
   VF_SY121_INLINE_ERROR_HANDLER(VF_BUILD_ARGUMENT_STRING(arguments));
   return;
}

/* ---------------------------------------------------------------------------------- */
/* ALERT_MESSAGE() - Issue a message as an alert                                      */
/* ---------------------------------------------------------------------------------- */ 

function ALERT_MESSAGE()
{
   VFPROP_Signal("Alert",VF_BUILD_ARGUMENT_STRING(arguments));
   return;
}

/* ---------------------------------------------------------------------------------- */
/* Clipboard methods */
/* ---------------------------------------------------------------------------------- */ 

/* Save a value in the virtual clipboard */
function AVSAVEVALUE(vValue, strID1, strID2, strID3, intInstance, strLang, boolPersist)
{
   if ( (vValue == null) || (strID1 == null) ) return false;
   
   if (intInstance == null) intInstance = 1;
   if (strLang == null) strLang = "ALL";
   if (strID2 == null) strID2 = "";
   if (strID3 == null) strID3 = "";
   if (boolPersist == null) boolPersist = true;
   
   GLOBAL_intSavRstValueCount++;

   VFPROP_Set("SaveLang",GLOBAL_intSavRstValueCount, strLang); 
   VFPROP_Set("SaveInst",GLOBAL_intSavRstValueCount, intInstance.toString()); 
   VFPROP_Set("SaveId1", GLOBAL_intSavRstValueCount, strID1); 
   VFPROP_Set("SaveId2", GLOBAL_intSavRstValueCount, strID2); 
   VFPROP_Set("SaveId3", GLOBAL_intSavRstValueCount, strID3); 
   VFPROP_Set("SavePersist", GLOBAL_intSavRstValueCount, boolPersist.toString().toUpperCase()); 

   /* Trace record */
   if (GLOBAL_flagTraceModeOn) 
   {
      TRACE("Saving value to the clipboard with With Id1=",strID1,"Id2=",strID2,
            "Id3=",strID3,"Instance=",intInstance,"Language=",strLang,"Persist=",boolPersist.toString().toUpperCase(),"Value=",vValue.toString() );   
   }
   
   var strSignalCount = ("000" + GLOBAL_intSavRstValueCount.toString() ).slice(-3);

   if (typeof (vValue) == "string") VFPROP_Set("ValueType", GLOBAL_intSavRstValueCount, "ALPHA"); 
   else VFPROP_Set("ValueType", GLOBAL_intSavRstValueCount, "NUMBER"); 
   
   VFPROP_Signal("SaveClipValue", strSignalCount + "=" + vValue.toString());
   
   return true;
}

/* ----------------------------------------------------------*/
/* Restore an aplphanumeric value from the virtual clipboard */
/* ----------------------------------------------------------*/
function AVRESTOREAVALUE(argstrDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang)
{
   return VF_SY120_RestoreValue("A", argstrDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang);
}

/* Restore a numeric value from the virtual clipboard */
function AVRESTORENVALUE(argintDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang)
{
   return VF_SY120_RestoreValue("N", argintDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang);
}

function VF_SY120_RestoreValue(argType, argvDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang) 
{
   if (argintInstance == null) argintInstance = 1;
   if (argstrLang == null) argstrLang = "ALL";
   if (argstrID2  == null) argstrID2 = "";
   if (argstrID3  == null) argstrID3 = "";
   
   var vRetValue = "";
   
   if ( !( GLOBAL_flagWEBMODEExecute ) ) 
   {
      vRetValue = VFPROP_Get(argstrID1 + "." + argstrID2 + "." + argstrID3 + "." + argstrLang, argintInstance, true); 
      if      (vRetValue == null)    vRetValue = argvDft;
      else if (argType == "N")       vRetValue = parseFloat(vRetValue);       
   }
   else 
   {
      vRetValue = GLOBAL_VF_SY120_Parent.VF_SY503_PRIVATE_RestoreClipValue(argType, argvDft, argstrID1, argstrID2, argstrID3, argintInstance, argstrLang);
   }

   /* Trace record */
   if (GLOBAL_flagTraceModeOn) 
   {
      TRACE("Restoring value from the clipboard with With Id1=",argstrID1,"Id2=",argstrID2,
            "Id3=",argstrID3,"Instance=",argintInstance,"Language=",argstrLang,"Return Value=",vRetValue.toString() );   
   }
   
   return vRetValue;
}

/* ---------------------------------------------------------------------------------- */
/* AVSIGNALEVENT() - Signal an Event                                                  */
/* ---------------------------------------------------------------------------------- */ 

function AVSIGNALEVENT(strId,strTo,
                       strAInfo1,strAInfo2,strAInfo3,strAInfo4,strAInfo5,
                       numNInfo1,numNInfo2,numNInfo3,numNInfo4,numNInfo5)  
{

   var strSignalCount = "000";

   if (strTo == null)     strTo     = "FRAMEWORK";

   if (strAInfo1 == null) strAInfo1 = "";
   if (strAInfo2 == null) strAInfo2 = "";
   if (strAInfo3 == null) strAInfo3 = "";
   if (strAInfo4 == null) strAInfo4 = "";
   if (strAInfo5 == null) strAInfo5 = "";
  
   if (numNInfo1 == null) numNInfo1 = 0;
   if (numNInfo2 == null) numNInfo2 = 0;
   if (numNInfo3 == null) numNInfo3 = 0;
   if (numNInfo4 == null) numNInfo4 = 0;
   if (numNInfo5 == null) numNInfo5 = 0;

   if (GLOBAL_flagTraceModeOn) 
   {
      TRACE("AVSIGNAL executed with WithId=",strId,"To=",strTo,
            "SendAInfo1=",strAInfo1,"SendAInfo2=",strAInfo2,"SendAInfo3=",strAInfo3,"SendAInfo4=",strAInfo4,"SendAInfo5=",strAInfo5, 
            "SendNInfo1=",numNInfo1.toString(),"SendNInfo2=",numNInfo2.toString(),"SendNInfo3=",numNInfo3.toString(),"SendNInfo4=",numNInfo4.toString(),"SendNInfo5=",numNInfo5.toString() );   
   }

   GLOBAL_intSignalCount++;

   strSignalCount = ("000" + GLOBAL_intSignalCount.toString() ).slice(-3)
 

   VFPROP_Set("avSignalEvent.To",GLOBAL_intSignalCount,strTo);  

   VFPROP_Set("avSignalEvent.AInfo1",GLOBAL_intSignalCount,strAInfo1);   
   VFPROP_Set("avSignalEvent.AInfo2",GLOBAL_intSignalCount,strAInfo2);   
   VFPROP_Set("avSignalEvent.AInfo3",GLOBAL_intSignalCount,strAInfo3);   
   VFPROP_Set("avSignalEvent.AInfo4",GLOBAL_intSignalCount,strAInfo4);   
   VFPROP_Set("avSignalEvent.AInfo5",GLOBAL_intSignalCount,strAInfo5);   

   VFPROP_Set("avSignalEvent.NInfo1",GLOBAL_intSignalCount,numNInfo1.toString());   
   VFPROP_Set("avSignalEvent.NInfo2",GLOBAL_intSignalCount,numNInfo2.toString());   
   VFPROP_Set("avSignalEvent.NInfo3",GLOBAL_intSignalCount,numNInfo3.toString());   
   VFPROP_Set("avSignalEvent.NInfo4",GLOBAL_intSignalCount,numNInfo4.toString());   
   VFPROP_Set("avSignalEvent.NInfo5",GLOBAL_intSignalCount,numNInfo5.toString());   

   VFPROP_Signal("avSignalEvent",(strSignalCount + "=" + strId) );  

   return; 
}

/* ---------------------------------------------------------------------------------- */
/* AVCLOSEFORM() - Close the current command handler                                  */
/* ---------------------------------------------------------------------------------- */ 

function AVCLOSEFORM()  
{

   if (GLOBAL_flagTraceModeOn) TRACE("AVCLOSEFORM executed");   

   VFPROP_Signal("avCloseForm","");

   return; 
}


/* ---------------------------------------------------------------------------------- */
/* HIDE_CURRENT_FORM - Hide the current form with an optional message                 */
/* ---------------------------------------------------------------------------------- */ 

function HIDE_CURRENT_FORM()
{
   if (GLOBAL_flagTraceModeOn) TRACE("HIDE_CURRENT_FORM executed to hide the current 5250 screen"); 
   
   VF_SY120_ADDMESSAGE("HIDE",VF_BUILD_ARGUMENT_STRING(arguments)); 
   return;
}

/* ---------------------------------------------------------------------------------- */
/* MESSAGE - Issue a message to user interface                                        */
/* ---------------------------------------------------------------------------------- */ 
  
function MESSAGE()
{
   VF_SY120_ADDMESSAGE("INFO",VF_BUILD_ARGUMENT_STRING(arguments)); 
   return;
} 
   
/* ------------------------------------------------------------------------- */
/* SENDKEY - Sends a key to NL via VF_Macro - User versioKn                */
/* ------------------------------------------------------------------------- */ 

function SENDKEY(argstrKeyToSend)
{
   try
   {
       if (GLOBAL_flagConnected)
       {
          if (GLOBAL_flagTraceModeOn) TRACE("SENDKEY",argstrKeyToSend,"requested.");
          VF_SY121_SENDKEY(argstrKeyToSend);
          if (GLOBAL_flagTraceModeOn) TRACE("SENDKEY",argstrKeyToSend,"completed.");  
       }
   }
   catch (objError)
   {
     var strFailureReason = "SENDKEY failed - " + objError.description + " (" + objError.number.toString() + ")";  
     TRACE(strFailureReason);
     ALERT_MESSAGE(strFailureReason);       
   }   

   return; 
}
/* ------------------------------------------------------------------------- */
/* SETCURSOR - Sets the cursor in a given row and column                     */
/* ------------------------------------------------------------------------- */ 

function SETCURSOR(argintRowNo, argintColNo, argintOffset)
{
   if (GLOBAL_flagConnected)
   {
      var intArgLength = arguments.length;

      if ( intArgLength <= 0 )
      {  
         var objError = new Object();
         objError.description = "No row position was provided. Unable to set the cursor in a valid row position.";
         VF_SY120_SCRIPT_ERROR_HANDLER(objError);
      }
      else
      {
         var strRowNo       = argintRowNo.toString();
         var strCursorValue = "";

         if ( intArgLength == 1 ) strCursorValue = strRowNo + ",1"; /* Assume argument is the row and set column to 1 */
         else if ( intArgLength == 2 ) strCursorValue = strRowNo + "," + argintColNo.toString() ; /* Assume arguments are row and columne */
         else strCursorValue = (argintOffset + argintRowNo).toString() + "," + argintColNo.toString();

         if (GLOBAL_flagTraceModeOn) TRACE("SETCURSOR to (row,column)",strCursorValue,"started.");

         VF_SY121_SETNL_VALUE("ActiveForm.SendCursor", strCursorValue);
         if (GLOBAL_flagTraceModeOn) TRACE("SETCURSOR to (row,column)",strCursorValue,"completed.");
      }
   }

   return; 
}

/* ------------------------------------------------------------------------- */
/* SETVALUE - Set NL variable, user version  */
/* ------------------------------------------------------------------------- */ 

function SETVALUE(argstrVariable, argstrValue, argstrValue2)
{
   try
   {
       if ( GLOBAL_flagConnected )
       {
          switch ( typeof(argstrVariable) )
          {
             case "string": 
                   if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE of",argstrVariable.toString(),"to value",argstrValue.toString(),"( type = ",typeof(argstrValue),")");   
                   VF_SY121_SETNL_VALUE(argstrVariable, argstrValue);
                   if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE of",argstrVariable.toString(),"completed");   
                   break;
             case "number":  
                   VF_SY121_SETNL_VALUE_BY_LOCATION(argstrVariable, argstrValue, argstrValue2); 
                   break;
             default: 
                  if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE of",argstrVariable.toString(),"is an invalid function call");       
                  break;
          }          
       }
   }
   catch (objError)
   {
     var strFailureReason = "SETVALUE of " + argstrVariable.toString() + " to " + argstrValue.toString() + " failed - " + objError.description + " (" + objError.number.toString() + ")";  
     TRACE(strFailureReason);
     ALERT_MESSAGE(strFailureReason);       
   } 

   return; 
}

/* -------------------------------------------------------------------------------------------------------------------------------------- */
/* FORCE_POPUP_REFRESH - Work around NL problem when in a destination, a button to show a pop up is clicked and the pop up goes behind */
/* -------------------------------------------------------------------------------------------------------------------------------------- */

function FORCE_POPUP_REFRESH(argflagForce)
{
   if (argflagForce == null) argflagForce = true;
   GLOBAL_flagForcePopUp = argflagForce;
}

function VF_SY120_FORCE_POPUP_REFRESH_TimerTick() 
{
   if (GLOBAL_PopupRefreshTimer != null)
   {
      window.clearInterval(GLOBAL_PopupRefreshTimer); 
      GLOBAL_PopupRefreshTimer = null;
   }

   if (GLOBAL_flagForcePopUp) 
   {
      if (objNewLook.GetValue("ActiveForm.PopUp") == -1) 
      {       
         VF_SY121_RUNMACRO("VF_Macro.VF_Restore_Form"); 
      } 
   }
}

function VF_SY120_FORCE_POPUP_REFRESH() 
{
   if ((GLOBAL_flagForcePopUp) && (objNewLook.GetValue("ActiveForm.PopUp") == -1) && (GLOBAL_PopupRefreshTimer == null)) 
   {
      GLOBAL_PopupRefreshTimer = window.setInterval(VF_SY120_FORCE_POPUP_REFRESH_TimerTick,GLOBAL_PopupRefreshTimerPoll); 
   }
}

/* ------------------------------------------------- */
/* VF_SY120_DEACTIVATE - Deactivate the current form */
/* ------------------------------------------------- */

var GLOBAL_CurrentlyDeactivated     = false;
var GLOBAL_DeactivatedKeyUsageTimer = false; 
var GLOBAL_DeactivatedPopUp         = false; 

function VF_SY120_DEACTIVATE()
{
   if (GLOBAL_CurrentlyDeactivated) return;

   GLOBAL_DeactivatedKeyUsageTimer = false; 
   GLOBAL_DeactivatedPopUp         = false; 

   if (GLOBAL_flagConnected)
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Form DEACTIVATE logic invoked");   
   
      try 
      {
          if (objNLFunctionKeyUsageTimer != null) 
          { 
             VF_SY121_STOPKEYUSAGETIMER(); 
             GLOBAL_DeactivatedKeyUsageTimer = true; 
          }
      }
      catch (objError) { } 

      try 
      {
          if (objNewLook.GetValue("ActiveForm.PopUp") == -1) 
          {
             VF_SY121_RUNMACRO("VF_Macro.VF_Minimize_Form");   
             GLOBAL_DeactivatedPopUp = true; 
          }
      }
      catch (objError) { } 
   }

   GLOBAL_CurrentlyDeactivated = true;

   return;
}  

/* --------------------------------------------- */
/* VF_SY120_ACTIVATE - Activate the current form */
/* --------------------------------------------- */

function VF_SY120_ACTIVATE()
{
   if ( !(GLOBAL_CurrentlyDeactivated) ) return;

   if (GLOBAL_flagConnected) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Form ACTIVATE logic invoked");   
      
      try { if (GLOBAL_DeactivatedPopUp) VF_SY121_RUNMACRO("VF_Macro.VF_Restore_Form"); }
      catch (objError) { } 
          
      try { if (GLOBAL_DeactivatedKeyUsageTimer) VF_SY121_STARTKEYUSAGETIMER(); }
      catch (objError) { } 
   }  

   GLOBAL_CurrentlyDeactivated     = false;
   GLOBAL_DeactivatedKeyUsageTimer = false;
   GLOBAL_DeactivatedPopUp         = false; 

   return;
}
/* ----------------------------------------------------------------------------- */
/* VF_SY121_SETNL_VALUE_BY_LOCATION - Sets a variable in NL variable by location */
/* ----------------------------------------------------------------------------- */ 

var GLOBAL_arrayDynamicFormIndicies = new Array();

function VF_SY121_SETNL_VALUE_BY_LOCATION(argintType, argintInstance, argunknownValue)
{
   var intNLType        = 0;
   var strNLType        = "";   
   var strMatchInstance = ""; 
   var strCacheKey      = VF_SY120_GETCURRENTFORM() + "-" + argintType.toString() + "-" + argintInstance.toString();    
   var intFoundIndex    = GLOBAL_arrayDynamicFormIndicies[strCacheKey];   

   /* Decide on the type of field we are looking for on the form */ 

   switch (argintType)
   {
       case __Field:
            intNLType = 10; 
            strNLType = "field";
            break;     

       default:
            if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE by type parameter 1 is",argintType.toString(),"which is an invalid value.");        
            return; 
            break;       
   }         

   /* Now loop through the screen looking for a match unless already a cached value */

   if (intFoundIndex != null) /* Found a value in the cache */ 
   {
      if (GLOBAL_flagTraceModeOn)
      { 
         if (argintInstance == __Last) strMatchInstance = "last - from cache";
         else                          strMatchInstance = "number " + argintInstance.toString() + " - from cache";    
      }     
   }
   else
   {
      var intLoopLimit     = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count") );
      var intI             = 0;   

      if (argintInstance == __Last)
      {
         strMatchInstance = "last";
         for (intI = intLoopLimit - 1; intI >= 0; intI--)
         {
            var intType = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intI.toString() + ").Type") ); 
            if (intType == intNLType) 
            { 
               intFoundIndex = intI; 
               break; 
            }
         }
      }
      else
      {
         var intInstanceCount = 0;
         for (intI = 0; intI < intLoopLimit; intI++)
         {
            var intType = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intI.toString() + ").Type") ); 
            if (intType == intNLType) 
            {
               intInstanceCount++;
               if ((argintInstance == intInstanceCount) || (argintInstance == __First)) 
               { 
                  strMatchInstance = "number " + intInstanceCount.toString(); 
                  intFoundIndex = intI; 
                  break; 
               }  
            }
         }
      }
   }
     

   /* If no match found by now it's an error */ 

   if (intFoundIndex == null)
   {
      if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE by type could not find the specified field."); 
   }
   else /* Else set the value into the control */
   {

      if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE of",strNLType,"(",strMatchInstance,") in control number",(intFoundIndex + 1).toString(),"to value",argunknownValue.toString());
      
      try 
      { 
         VF_SY121_SETNL_VALUE("ActiveForm.Controls(" + intFoundIndex.toString() + ").Text",argunknownValue.toString()); 

         GLOBAL_arrayDynamicFormIndicies[strCacheKey] = intFoundIndex;    

         if (GLOBAL_flagTraceModeOn) TRACE("SETVALUE of",strNLType,"completed.");  
      }
      catch (objError)
      {
         VF_SY120_SCRIPT_ERROR_HANDLER(objError);
      }
   }

   /* Finished */
  
   return;
}


/* --------------------------------- */
/* TRACE - User trace                */
/* --------------------------------- */

function TRACE()
{

   if (GLOBAL_flagTraceModeOn || GLOBAL_flagTraceToArray) 
   {
      var intNumArgs = arguments.length;
      var intIndex   = 0; 
      var strTraceText   = ""; 

      if (GLOBAL_intTraceIndent != 0)
      {
         if (GLOBAL_intTraceIndent < 0)  GLOBAL_intTraceIndent = 0;
         if (GLOBAL_intTraceIndent > 60) GLOBAL_intTraceIndent = 60;
         strTraceText += GLOBAL_strTraceIndent.substr(0,GLOBAL_intTraceIndent); 
      }

      for (intIndex = 0; intIndex < intNumArgs; intIndex++) strTraceText += arguments[intIndex].toString() + " ";  

      if (GLOBAL_flagTraceToArray)
      {
         if (GLOBAL_arrayTraceData == null) GLOBAL_arrayTraceData = new Array();
         GLOBAL_arrayTraceData[GLOBAL_arrayTraceData.length] = strTraceText; 
      }   
      else
      {
         VFPROP_Signal("VF_TRACE",(strTraceText + "(" + GETTIMESTAMP() + ")") ); 
      } 
   }     

   return;  
}

/* ------------------------------------------------------------------------- */
/* GETTIMESTAMP - Get a milliseond time stamp                                */
/* ------------------------------------------------------------------------- */ 

function GETTIMESTAMP()   
{
   var objDate  = new Date();
   var strStamp = objDate.getHours() + ":" + objDate.getMinutes() + ":" + objDate.getSeconds() + ":" + objDate.getMilliseconds();   
   delete(objDate);
   return(strStamp); 
}

/* ------------------------------------------------------------------------- */
/* GETVALUE - Get NL value, user version  */
/* ------------------------------------------------------------------------- */ 

function GETVALUE(argstrVariable)
{
      return( VF_SY121_GETNL_VALUE(argstrVariable) );
}

/* ----------------------------------------------------------------------------------------------------- */
/* CURRENT_FORM - Invoked by SET/Get and SENDKEY methods to make sure we are acting on the proper screen */
/* ----------------------------------------------------------------------------------------------------- */ 

function CURRENT_FORM()
{
   return(VF_SY120_GETCURRENTFORM());
}


/* ------------------------------------------------------------------------- */
/* RUNMACRO - Runs a NL macro - User version */
/* ----------------------------------------------------------------------- */ 
function RUNMACRO(strMacro)
{
    VF_SY121_RUNMACRO(strMacro);
}

/* ------------------------------------------------------------------ */
/* TONUMBER - Make something into a number                            */
/* ------------------------------------------------------------------ */ 
function TONUMBER(object)
{
    if (typeof(object) == "number") return(object); 
    else return( parseInt(object.toString(),10) );
}

/* ------------------------------------------------------------------ */
/* TOSTRING - Make something into a string                            */
/* ------------------------------------------------------------------ */ 
function TOSTRING(object)
{
    if (typeof(object) == "string") return(object); 
    else return( object.toString() );
}

/* ------------------------------------------------------------------------- */
/* This Navigates to a Destination. Only validly invoked from a button script       */
/* ------------------------------------------------------------------------- */ 

function NAVIGATE_TO_DESTINATION(argstrDestinationName) 
{
   var strDestinationName = argstrDestinationName;
      
   if ( VF_SY120_IS_VALID_SCRIPT("NAVIGATE_TO_DESTINATION") )
   {
      if (strDestinationName == null) 
      {
         VF_SY121_INLINE_ERROR_HANDLER("NAVIGATE_TO_DESTINATION failed. No Destination name specified.");
         return;
      }

      var objDestination = arrayobjCherriesbyScreenName[strDestinationName];

      if (objDestination == null) 
      {
         VF_SY121_INLINE_ERROR_HANDLER("NAVIGATE_TO_DESTINATION request failed. Destination " + strDestinationName + " does not exist."); 
      }
      else
      {
         if (GLOBAL_flagTraceModeOn) TRACE("NAVIGATE_TO_DESTINATION invoked to navigate to",strDestinationName, "using script ID", objDestination.uNavigateScript); 
         VF_SY121_EXECUTESCRIPT( objDestination.uNavigateScript );
      }
   }
}

/* ------------------------------------------------------------------------- */
/* This Navigates to a previously shown Destination. Only validly invoked from a button script. */
/* The argument is an integer representing the order of a previously shown destination */
/* ------------------------------------------------------------------------- */ 

function NAVIGATE_TO_PREV_DESTINATION(argintPrevDestination) 
{
   if ( VF_SY120_IS_VALID_SCRIPT("NAVIGATE_TO_PREV_DESTINATION") )
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Requested Navigate to the",argintPrevDestination," previous destination. The type of the value is ", typeof(argintPrevDestination));  

      var intPrevDestination = argintPrevDestination;

      if (typeof (intPrevDestination) != "number") intPrevDestination = parseInt(intPrevDestination, 10);
      
      if ( (intPrevDestination == null) || (intPrevDestination <= 0) || (intPrevDestination > GLOBAL_intMaxPrevDest) || isNaN(intPrevDestination))
      {
         GLOBAL_intPrevDestTrackInd = 0;      
         VF_SY121_INLINE_ERROR_HANDLER("NAVIGATE_TO_PREV_DESTINATION failed. Either the Destination numeral was not specified or the value passed is not valid in this context.");
         return;
      }

      /* Get the name of the desired destination name from the tracking array. */
      
      var intPrevDestInd = GLOBAL_intPrevDestTrackInd - intPrevDestination;
      
      if (intPrevDestInd < 0) 
      { 
         intPrevDestInd = intPrevDestInd + GLOBAL_intMaxPrevDest;
      }

      if ( arraystrPreviousDestinations[intPrevDestInd] == "undefined") 
      {
         VF_SY121_INLINE_ERROR_HANDLER("NAVIGATE_TO_PREV_DESTINATION failed. The previous destination value passed in not valid in this context.");
         GLOBAL_intPrevDestTrackInd = 0;
      }
      else
      {
         var strPrevDestName = arraystrPreviousDestinations[intPrevDestInd];
         var objDestination = arrayobjCherriesbyScreenName[strPrevDestName];
   
         if (objDestination == null) 
         {
            VF_SY121_INLINE_ERROR_HANDLER("NAVIGATE_TO_PREV_DESTINATION request failed. Destination requested has not been shown."); 
            GLOBAL_intPrevDestTrackInd = 0;
         }
         else
         {
            if (GLOBAL_flagTraceModeOn) TRACE("Previous destination resolved as being",strPrevDestName, "screen name", objDestination.uScreenName); 
            VF_SY121_EXECUTESCRIPT( objDestination.uNavigateScript );
         }
      }
   }
}

/* ------------------------------------------------------------------------- */
/* Check the current executing script is a button or invoke script       */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_IS_VALID_SCRIPT(argstrCallerMethod)
{
   var objCurrentExecutingScript = VF_SY121_GET_CURRENTSCRIPTINSTANCE();

   if ( objCurrentExecutingScript != null )
   {
      var strScriptType = objCurrentExecutingScript.objScript.uScriptType;

      if ( ( strScriptType != "BUTTON" ) && (strScriptType != "INVOKE") )
      {
         VF_SY121_INLINE_ERROR_HANDLER(argstrCallerMethod + " can only be invoked from a BUTTON or INVOKE script but it was invoked from a " + strScriptType + " script."); 
         return false;
      }
   }
   else if ( GLOBAL_flagHandlingRamp )  
   {
      VF_SY121_INLINE_ERROR_HANDLER("Fatal Error: The script currently executing is null"); 
      return false;
   }

   return true;
}

/* ------------------------------------------------------------------------- */
/* This is the Navigate invoked from the first line of the User script       */
/* ------------------------------------------------------------------------- */ 

function NAVIGATE_TO_JUNCTION(strJunctionName) 
{
   var objJunction           = arrayobjJunctionsbyScreenName[strJunctionName];
   var strJunctionId         = "";
   var strCurrentJunctionName = "";    
   
   /* Trace */ 

   if (GLOBAL_flagTraceModeOn) TRACE("NAVIGATE_TO_JUNCTION(",strJunctionName,") request is being processed.");  

   /* ----------------------------------------------- */ 
   /* Check that the specified junction name is valid */   
   /* ----------------------------------------------- */ 

   if (objJunction == null)
   {
      VF_SY121_INLINE_ERROR_HANDLER(("NAVIGATE_TO_JUNCTION request failed. No junction named " + strJunctionName + " has been defined to RAMP."));   
      return; 
   }
     
   strJunctionId = objJunction.uIdentifier;

   /* ----------------------------------------------- */
   /* Handle any special screens in the screen buffer */
   /* ----------------------------------------------- */

   VF_SY121_HANDLESPECIAL();

   /* ----------------------------------------------------------------------------- */
   /* If the current screen is a cherry then navigate to the nearest junction first */
   /* ----------------------------------------------------------------------------- */

   {
       var objCherry = arrayobjCherriesbyScreenName[ VF_SY120_GETCURRENTFORM() ];

       if ((objCherry != null) && (objCherry.uReturnScript != ""))
       {
          if (GLOBAL_flagTraceModeOn) 
          {
             var objScript = arrayobjScriptsbyIDN[objCherry.uReturnScript];
             var strReturnScriptName = "** UNDEFINED SCRIPT **";  
             if (objScript != null) strReturnScriptName = objScript.uScriptUserName;

             TRACE("The current 5250 screen",VF_SY120_GETCURRENTFORM(),"is a destination, so script",strReturnScriptName,"will be executed to attempt to return to nearest junction.");  
          }
          if (VF_SY121_EXECUTESCRIPT(objCherry.uReturnScript) == false) return;
       }
   } 

   /* ----------------------------------------------- */
   /* Handle any special screens in the screen buffer */
   /* ----------------------------------------------- */

   VF_SY121_HANDLESPECIAL();

   /* --------------------------------------------------------------------------------------------------------- */ 
   /* This condition is true when we run the RETURN to junction script. The form showing is actually the one we */
   /* we wanted to get to so that we can then run the cherry script. Upon return, the cherry script will run    */
   /* --------------------------------------------------------------------------------------------------------- */   

   strCurrentJunctionName = VF_SY120_GETCURRENTFORM();

   if (strCurrentJunctionName == strJunctionName) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("The current 5250 screen",strCurrentJunctionName,"is the requested target junction, so no further navigation is required.");  
      return;
   }

   /* Special trace mode warning */

   if (GLOBAL_flagTraceModeOn)
   {
       if (arrayobjJunctionsbyScreenName[strCurrentJunctionName] == null)
       {
          TRACE("** Warning => The current 5250 screen",strCurrentJunctionName,"is not a known junction, so this NAVIGATE_TO_JUNCTION request is likely to fail.");  
       }
   }

   /* Find the path or reuse an optimized previous search */

   {
      var strOptimizedStorageKey = strJunctionId + "." + strCurrentJunctionName; 

      if (GLOBAL_arrayOptimizedPaths[strOptimizedStorageKey] != null)
      {
         CopySimpleArray(GLOBAL_arrayOptimizedPaths[strOptimizedStorageKey],GLOBAL_arrayShortestPathtoJunction);
         if (GLOBAL_flagTraceModeOn) TRACE("An optimized pre-existing navigation plan from",strCurrentJunctionName,"to",strJunctionName,"will be used.");   
      }
      else
      {
         GLOBAL_arrayShortestPathtoJunction.length = 0;  
         GLOBAL_arrayobjScriptBranch.length        = 0;
         GLOBAL_intMinimumBranchLength             = 9999;

         FindPathToJunction(strJunctionId,strCurrentJunctionName);

         GLOBAL_arrayOptimizedPaths[strOptimizedStorageKey] = new Array(); 
         CopySimpleArray(GLOBAL_arrayShortestPathtoJunction,GLOBAL_arrayOptimizedPaths[strOptimizedStorageKey]);
      }
   } 
 
   /* Handle the search repsonse */

   if ( GLOBAL_arrayShortestPathtoJunction.length == 0) 
   {
      VF_SY121_INLINE_ERROR_HANDLER(("NAVIGATE_TO_JUNCTION request failed. No valid navigation path from " + strCurrentJunctionName + " to " + strJunctionName + " could be found."));
   }
   else     
   {
      var intI = 0;
      var intPathLength = GLOBAL_arrayShortestPathtoJunction.length;
      var flagExecutedOK = true; 

      /* In trace mode, trace out the plan */

      if (GLOBAL_flagTraceModeOn)
      {
          TRACE("   The navigation plan to be used is ....");

          for (intI = 0; ((intI < intPathLength) && (flagExecutedOK)); intI++)
          {
             var objScript = arrayobjScriptsbyIDN[GLOBAL_arrayShortestPathtoJunction[intI]];
              
             if (objScript == null)
             {
                TRACE("     -> Execute script with unknown identifier",GLOBAL_arrayShortestPathtoJunction[intI],"which will cause a failure.");  
             }
             else
             {
              
                var strFromJunctionName = "**UNKNOWN**";   
                var strToJunctionName   = "**UNKNOWN**";   
                
                if (objScript.uScriptType == "NAVIGATE")
                {
                  var objFromJunction = arrayobjNodebyIDN[objScript.uNominalOwnerNodeIDN];
                  var objToJunction   = arrayobjNodebyIDN[objScript.uNavigateToIDN]; 
                  if (objFromJunction != null) strFromJunctionName = objFromJunction.uScreenName; 
                  if (objToJunction   != null) strToJunctionName   = objToJunction.uScreenName; 
                } 
                 
                TRACE("     -> Navigate from",strFromJunctionName,"to",strToJunctionName,"by executing script named",objScript.uScriptUserName,"which has identifier",objScript.uIdentifier);   
             }
          }

          TRACE("   End of navigation plan trace.");
      }

      /* Execute the scripts */

      for (intI = 0; ((intI < intPathLength) && (flagExecutedOK)); intI++)
      {
         flagExecutedOK = VF_SY121_EXECUTESCRIPT( GLOBAL_arrayShortestPathtoJunction[intI] );
      }
 
   }

   /* Finished */       

   return;
}

/* ------------------------------------------------------------------------------------- */
/* This allows a RAMP script to override a Function Key Caption for a Destination Screen */
/* ------------------------------------------------------------------------------------- */ 

function OVERRIDE_KEY_CAPTION_SCREEN(strScreenName,strKeyCode,strOverrideCaption)

{

   if (GLOBAL_flagTraceModeOn) TRACE("OVERRIDE_KEY_CAPTION_SCREEN Screen ", strScreenName, " for Key ",strKeyCode," to Caption ", strOverrideCaption, " is being processed.");  

   var objCherry = arrayobjCherriesbyScreenName[strScreenName]; 
   if (objCherry != null)
   {   
      var objFunctionKey = objCherry.aFK[strKeyCode];
      if (objFunctionKey != null) objFunctionKey.KC = strOverrideCaption;   
   } 
   return;
}

/* ---------------------------------------------------------------------------------------- */
/* This allows a RAMP script to override a Function Key Caption for all Destination Screens */
/* ---------------------------------------------------------------------------------------- */ 

function OVERRIDE_KEY_CAPTION_ALL(strKeyCode,strOverrideCaption)
{

   var intKeyId = 0;

   if (GLOBAL_flagTraceModeOn) TRACE("OVERRIDE_KEY_CAPTION_ALL for Key ",strKeyCode," to Caption ", strOverrideCaption, " is being processed.");  

   for (strScreenName in arrayobjCherriesbyScreenName)
   {
     var objCherry = arrayobjCherriesbyScreenName[strScreenName]; 
      if (objCherry != null)
      {   
          var objFunctionKey = objCherry.aFK[strKeyCode];
          if (objFunctionKey != null) objFunctionKey.KC = strOverrideCaption;   
      } 
   } 
   return;
}

/* ------------------------------------------------------------------------------------------------------------------- */
/* This function allows a RAMP script to override the command handlers tab caption (same as property avHandlercaption) */
/* ------------------------------------------------------------------------------------------------------------------- */ 

function SET_HANDLER_CAPTION(strOverrideCaption)
{

   /* Signal to the framework to change the Command handlers tab caption */
   VFPROP_Signal("SetHandlerCaption", strOverrideCaption);
   
   return;
}

function SET_UNKNOWN_LOCKING(flagState)
{
   if ( flagState != null) objNodeGroup.flagLockUnknown = flagState;
   return;
}

function SETKEYENABLED(strDestinationName, strKeyCode, flagEnableVLF, flagEnableNL)
{
   var objCherry = arrayobjCherriesbyScreenName[strDestinationName]; 
   
   if (objCherry != null)
   {   
      var objFunctionKey = objCherry.aFK[strKeyCode];

      if (objFunctionKey != null) 
      {
         if (flagEnableVLF != null) 
         {
            objFunctionKey.fKEVLF = flagEnableVLF;
            if (flagEnableVLF) TRACE("VLF button", strKeyCode, "ENABLED in Destination named",strDestinationName);           
            else TRACE("VLF button", strKeyCode, "DISABLED in Destination named",strDestinationName);           
         }

         if (flagEnableNL != null) 
         {
            objFunctionKey.fKENL = flagEnableNL;
            if (flagEnableNL) TRACE("NL Function Key", strKeyCode, "ENABLED in Destination named",strDestinationName);           
            else TRACE("NL Function Key", strKeyCode, "DISABLED in Destination named",strDestinationName);                       
         }
      }
      else
      {
         TRACE("SETKEYENABLED request ignored. Invalid key code of =>", strKeyCode ,"<= supplied");  
      }
   } 
   else
   {
      TRACE("SETKEYENABLED request ignored. There is no Destination with the supplied name of =>", strDestinationName, "<=");  
   }
}

function SET_VLFBUTTON_VISIBILITY(sKeyCode)
{
   var strintI, intKeyId, objKey, intNLKeyCount, bNLkeyFound, sCode;
   var objCherry = GLOBAL_objCurrentNode;

   for (Identifier in objCherry.aFK)
   {
      objKey = objCherry.aFK[Identifier]; 

      if (objKey.fKEVLF) 
      {
         if (Identifier == sKeyCode) 
         {
            bNLkeyFound = false;
            VFPROP_Set("VLFbutton.Show", 1, "TRUE");
            intNLKeyCount = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys.Count") );

            for (var intI = 0; intI < intNLKeyCount; intI++)
            {
               strintI = intI.toString();
               intKeyId = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OutputKey",true) ); 
               sCode = GLOBAL_arrayobjKeybyId[intKeyId].strKeyCode;

               if ( sCode == sKeyCode )
               {
                  bNLkeyFound = true;
                  if ( VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").Visible",true) == 0 )
                  {
                     VFPROP_Set("VLFbutton.Show", 1, "FALSE");
                  }
                  break;                        
               }
            } /* end for keycount */

            if (!bNLkeyFound)
            {
               VFPROP_Set("VLFbutton.Show", 1, "FALSE");
            }
            break;                        
         } /* end if key code */
      }
   }
}

/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 
/* ================== FUNCTIONS NOT ADDRESSABLE FROM USER SCRIPT ==================== */ 

/* ---------------------------------------------------------------------------------- */
/* _EVENT_WINDOW_ERROR - Handle window errors                                         */
/* ---------------------------------------------------------------------------------- */ 

window.onerror = _EVENT_WINDOW_ERROR;

var GLOBAL_ERROR_flaginProgress = false;     
var GLOBAL_ERROR_strMessage     = "";     
var GLOBAL_ERROR_strURL         = "";     
var GLOBAL_ERROR_strLine        = "";  
var GLOBAL_objErrorTimer        = null;    

function _EVENT_WINDOW_ERROR(strMessage,strURL,strLine)
{
   if ( !(GLOBAL_ERROR_flaginProgress) ) 
   {
       GLOBAL_ERROR_flaginProgress = true; 

       try
       {
          if (GLOBAL_objErrorTimer == null)
          {
             GLOBAL_ERROR_strMessage     = strMessage;
             GLOBAL_ERROR_strLine        = strLine;
             GLOBAL_ERROR_strURL         = strURL;
             GLOBAL_objErrorTimer        = window.setTimeout(_EVENT_WINDOW_ERROR_TIMER,20); 
             GLOBAL_ERROR_flaginProgress = false;
             return(true); /* Suppress native handling */
          }
       }
       catch (objError)
       {
       }     

       GLOBAL_ERROR_flaginProgress = false; 
   }

   return; /* Allow default error handling */
}

/* ---------------------------------------------------------------------------------- */
/* _EVENT_WINDOW_ERROR_TIMER - Handle window event error timer                        */
/* ---------------------------------------------------------------------------------- */ 

function _EVENT_WINDOW_ERROR_TIMER(strMessage,strURL,strLine)
{
   /* Turn off the timer */ 

   if (GLOBAL_objErrorTimer != null) 
   {   
      window.clearTimeout(GLOBAL_objErrorTimer);
      GLOBAL_objErrorTimer = null;
   }    

   /* Finished */

   return; 
}

/* ------------------------------------------------------------------------------------------------------------------------ */
/* VF_SY120_GetNameValue - */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_GetNameValue(iStart, iOffSet)
{
  if (iStart != -1)
  {
     var iStartPos = iStart + iOffSet;
     var iNextPlus = sWinLocSearch.indexOf("+", iStartPos);

     if (iNextPlus != -1) return sWinLocSearch.substr(iStartPos, iNextPlus - iStartPos);
     else if ( sWinLocSearch.substr(iStartPos).length > 0 ) return sWinLocSearch.substr(iStartPos);
  }
  
  return "";           
}        

function VF_SY120_MakeBIN(argstrHEXValue, argnumLength)  
{
   var  flagLeft       = true;
   var  numLoopLimit   = argnumLength * 2;
   var  numLoopIndex   = 0;
   var  strResult      = ""; 
   var  strHex         = ""; 

   for ( numLoopIndex = 0; numLoopIndex < numLoopLimit; numLoopIndex++)
   {
      if ( flagLeft )
      {
         strHex   = argstrHEXValue.charAt(numLoopIndex);
         flagLeft = false;
      }
      else
      {
         strHex    += argstrHEXValue.charAt(numLoopIndex);
         strResult += String.fromCharCode( parseInt(strHex,16) );  
         flagLeft   = true;
      }
   }

   return(strResult); 
}

/* ------------------------------------------------------------------------------------------------------------------------ */
/* VF_SY120_CreateControl - Insert Newlook this way to avoid the Microsoft ActiveX "click here to activate control" message */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_CreateControl(strContainerDiv, flagLiteclient, sUseIni, sUpdateFile, sCodeBase)
{ 
   var objContDiv = document.getElementById(strContainerDiv);
   var sInitHeight = "style='height:100%;'"; 
   var sInitWidth  = "width='100%'"; 
   
   if (GLOBAL_flagWEBMODEExecute)
   {
      sInitHeight = "style='height:1px;'"; 
      sInitWidth  = "width='1px'"; 
   }  
      
   if (flagLiteclient)
   {
      var strHTML = "<object" + sCodeBase + " id='__objNewLookAX' onreadystatechange='VF_SY121_KICK_OFF()' " + sInitHeight + " " + sInitWidth + " classid='CLSID:CFFE5E18-79B9-431C-8CE2-AE55A16E7C09'><param name='options' value='-vs -vr -q " + sUseIni + "'><param name='TimeOut' value='0'><param name='HideToolbars' value='-1'><param name='HideConnectionDialog' value='1'><param name='license' value='liteclient'>" + sUpdateFile + "<h1 id='NL_Failed'>Newlook has failed to Initialize.</h1></object>";
   }
   else
   {
      var strHTML = "<object" + sCodeBase + " id='__objNewLookAX' onreadystatechange='VF_SY121_KICK_OFF()' " + sInitHeight + " " + sInitWidth + " classid='CLSID:CFFE5E18-79B9-431C-8CE2-AE55A16E7C09'><param name='options' value='-vs -vr -q " + sUseIni + "'><param name='TimeOut' value='0'><param name='HideToolbars' value='-1'><param name='HideConnectionDialog' value='1'>" + sUpdateFile + "<h1 id='NL_Failed'>Newlook has failed to Initialize.</h1></object>";      
   }

   objContDiv.insertAdjacentHTML("afterBegin", strHTML);
   
   VF_SY120_ApplyNETColors(true,true); 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_KICK_OFF_TIMER_FIRED - Handle the kickoff timer                  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_KICK_OFF_TIMER_FIRED()
{
   window.clearTimeout(GLOBAL_objLoadAttemptedTimer); 
   GLOBAL_objLoadAttemptedTimer = null;
   VF_SY121_KICK_OFF(); 
   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_KICK_OFF - Kick off all window processing                        */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_KICK_OFF()
{
    if (GLOBAL_flagLoadAttempted) return;
    
    if ((document.readyState == "loaded") || (document.readyState == "complete"))
    {
      var flagInitializeFailure      = false;
      var strInitializeFailureReason = "";

      GLOBAL_flagLoadAttempted = true;
       
      try
      {
        objNewLook = __objNewLookAX;
        VF_SY120_ApplyNETColors(true,true); 
        VF_SY120_SET_SY503_REF();
        if (GLOBAL_flagWEBMODEExecute)
        {
           var doc = window.document;
           var body = doc.body;
                      
           try {
           
              body.attachEvent("onmouseenter",VF_SY121_WINDOW_GotLogicalFocus);
              body.attachEvent("onmouseleave",VF_SY121_WINDOW_GotLogicalFocus);
              doc.attachEvent("onfocusin",VF_SY121_WINDOW_GotLogicalFocus);
              doc.attachEvent("onfocusout",VF_SY121_WINDOW_GotLogicalFocus);                                 
           }
           catch (Error) {  
           
              body.addEventListener("mouseenter",VF_SY121_WINDOW_GotLogicalFocus, false);
              body.addEventListener("mouseleave",VF_SY121_WINDOW_GotLogicalFocus, false);
              doc.addEventListener("focusin",VF_SY121_WINDOW_GotLogicalFocus, false);
              doc.addEventListener("focusout",VF_SY121_WINDOW_GotLogicalFocus, false);                                            
           }
         }
          VF_SY120_SCRIPT_MANAGER('INITIALIZE'); 
      }
      catch (objError) 
      {
        flagInitializeFailure      = true;
        strInitializeFailureReason = objError.number.toString() + " - " + objError.description;  
        
      } 

       /* If initialize failed alert the reason */  

       if (flagInitializeFailure) alert(strInitializeFailureReason);
    }
    else
    {
       GLOBAL_objLoadAttemptedTimer = window.setTimeout(VF_SY121_KICK_OFF_TIMER_FIRED,10);        
    }

    return;  
} 

/* ------------------------------------------------------------------------------------------------------------------------------- */
/* VF_SY120_SET_SY503_REF - Check whether we are running in a browser and if yes, establish a reference to the appropiate VF_SY503 */
/* ------------------------------------------------------------------------------------------------------------------------------- */
function VF_SY120_SET_SY503_REF()
{
   /* If this is true, we are running in the browser main Window, that is the commands are NOT in a floating window, the parent is the main window */
   
   if (GLOBAL_flagNETMODEExecute)
   {
      GLOBAL_VF_SY120_Parent   = window.external; 
      GLOBAL_VF_System_EXTERN  = null;
      GLOBAL_int503AssignedNum = GLOBAL_VF_SY120_Parent.intSystemAssignedVF_SY503;  
   }
   else if ((GLOBAL_flagWEBMODEExecute) && (typeof(parent.VF_AC006_Main_Container) != "undefined")) 
   {  
      GLOBAL_int503AssignedNum = parent.VF_System.objVF_UM012.objVF_SY503TabManager.intSystemAssignedVF_SY503;
      GLOBAL_VF_SY120_Parent = parent; 
      GLOBAL_VF_System_EXTERN = parent.VF_System;      
   }
   /* If this is true, we are running in a browser FLOATING window, the parent is the VF_HT005.htm window */
   else if ((GLOBAL_flagWEBMODEExecute) && (typeof(parent.VF_UM012_Division) != "undefined"))  
   {
      GLOBAL_int503AssignedNum = parent.objCurrentVF_FP010.objVF_UM012.objVF_SY503TabManager.intSystemAssignedVF_SY503;
      GLOBAL_VF_SY120_Parent = parent.VF_Opener;
      GLOBAL_VF_System_EXTERN = parent.VF_System;            
   }
   else
   {
      VF_SY120_MainContainer.style.width ="100%";
      VF_SY120_MainContainer.style.overflow ="hidden";
      VF_SY120_MainContainer.style.styleFloat = "none";
      GLOBAL_int503AssignedNum  = null;
      GLOBAL_flagWEBMODEExecute = false;   
      GLOBAL_flagNETMODEExecute = false; 
      GLOBAL_VF_System_EXTERN   = null;                     
   }
   
   return;  
}

/* ------------------------------------------------------------------------------------- */
/* VF_SY120_SCRIPT_MANAGER - Entry point routine for all actions */
/* ------------------------------------------------------------------------------------- */ 

/* Requested action values:*/
/*    INITIALIZE - fired from onload event in main document body */
/*    CONNECT - request to connect to Host  */
/*    STARTNAVIGATION - Navigate to a cherry */


/* This method can be called from two different places: */
/* 1. From VF_SY120.htm during the Active X onreadystatechange event. In such case the argstrRequestedAction = INITIALIZE */
/* 2. From VL. In such case, VL will do a VFPROP_Set of the requested action. */

function VF_SY120_SCRIPT_MANAGER(argstrRequestedAction)
{
   var strRequestedAction = "";

   if (argstrRequestedAction == null)   
   {
      strRequestedAction = VFPROP_Get("objRequestor.uAction",1);
   }
   else   
   {
      strRequestedAction = argstrRequestedAction;
   } 

   GLOBAL_flagTraceModeOn = (VFPROP_Get("objFramework.TraceMode",1) == "TRUE"); 

   GLOBAL_flagHandlingRamp = true;
  
   switch (strRequestedAction)
   {
      /* Start navigation for a specific cherry */

      case "STARTNAVIGATION":
           {
              var strScreenName       = VFPROP_Get("StartNavigation.ScreenName",1);
              var strStartScriptIDN   = VFPROP_Get("StartNavigation.StartScriptIDN",1);

              GLOBAL_flagManagedUIEvent = true;

              VF_SY120_SET_SHOWFORM(false); 

              if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
              
              GLOBAL_intSavRstValueCount = 0;
              GLOBAL_intSignalCount      = 0;
      
              VF_SY121_EXECUTESCRIPT(strStartScriptIDN);

              VF_SY120_SET_SHOWFORM(true); 

              GLOBAL_flagManagedUIEvent = false; 

           }
           break;

      case "INITIALIZE":
           if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
           VFPROP_Signal(VF_SY121_INITIALIZE(),""); 
           break;

      case "CONNECT":
           if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
           VF_SY121_MAKECONNECTION();
           break;
      
      case "DISCONNECT":
           if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
           VF_SY120_CLEANUP_DISCONNECT();
           break;

      case "ACTIVATE":  
           if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
           VF_SY120_ACTIVATE(); 
           break;

      case "DEACTIVATE":
           if (GLOBAL_flagTraceModeOn) TRACE("Script manager handling request",strRequestedAction);
           VF_SY120_DEACTIVATE();   
           break;

      case "VF_SY122_NAVTOSCREEN":
         
           GLOBAL_flagManagedUIEvent = true;
           GLOBAL_flagHandlingRamp = false;
           VF_SY120_SET_SHOWFORM(false);
                      
           VF_SY122_NAVTOSCREEN();
           GLOBAL_flagManagedUIEvent = false; 
           break;
           
      case "VF_SY122_SETVALUE":
           
           GLOBAL_flagManagedUIEvent = true;
           GLOBAL_flagHandlingRamp = false;
           VF_SY120_SET_SHOWFORM(false);
           
           var vFieldName = VFPROP_Get("Hidden.Field",1);
           var vVal1 = VFPROP_Get("Hidden.Value",1);
           var vVal2 = "";
           
           if (vFieldName == "__Field") 
           {
               vVal2 = vVal1; /* vVal2 now becomes the actual value and vVal1 will the field order, either special value __First, __Last or the order number */
               vFieldName = __Field;

               var strSpecialValue = VFPROP_Get("Hidden.SpecialValue",1);               
               
               if (strSpecialValue == "__First") vVal1 = __First;
               else if (strSpecialValue == "__Last") vVal1 = __Last;
               else 
               {
                  vVal1 = parseInt(VFPROP_Get("Hidden.Order",1), 10);
               }
           }
         
           SETVALUE(vFieldName, vVal1, vVal2);
           
           GLOBAL_flagManagedUIEvent = false;            
           break;
           
      case "VF_SY122_GETVALUE":
           
           GLOBAL_flagManagedUIEvent = true;
           GLOBAL_flagHandlingRamp = false;
           VF_SY120_SET_SHOWFORM(false);

           var strFromField = VFPROP_Get("Hidden.FromField",1);
           var strValue = GETVALUE(strFromField);
      
           VFPROP_Set("Hidden.FromFieldValue",1,strValue); 
           GLOBAL_flagManagedUIEvent = false; 
           break;          
            
       case "VF_SY122_SENDKEY":
           
           GLOBAL_flagManagedUIEvent = true;
           GLOBAL_flagHandlingRamp = false;           
           VF_SY120_SET_SHOWFORM(false);

           SENDKEY(VFPROP_Get("Hidden.KeyToSend",1)); 

           if (GLOBAL_objCurrentNode != null) VFPROP_Set("Hidden.CurrentScreen",1,GLOBAL_objCurrentNode.uScreenName); 
           
           GLOBAL_flagManagedUIEvent = false; 
           break;
           
       case "VF_SY122_SETCURSOR":
           
           GLOBAL_flagManagedUIEvent = true;
           GLOBAL_flagHandlingRamp = false;           
           VF_SY120_SET_SHOWFORM(false);

           SETCURSOR( TONUMBER(VFPROP_Get("Hidden.CursorRow",1)), TONUMBER(VFPROP_Get("Hidden.CursorCol",1)), 0 ); 

           /* See if they want to send a key */
           var strKeyToSend = VFPROP_Get("Hidden.KeyToSend",1);
           if ( strKeyToSend != "==NONE==") SENDKEY(strKeyToSend); 
           
           if (GLOBAL_objCurrentNode != null) VFPROP_Set("Hidden.CurrentScreen",1,GLOBAL_objCurrentNode.uScreenName); 
           
           GLOBAL_flagManagedUIEvent = false; 
           break;

       case "VF_SY122_CURRENTFORM": 
           if (GLOBAL_flagTraceModeOn) TRACE("Get current form", VF_SY120_GETCURRENTFORM(true));
          VFPROP_Set("Hidden.CurrentForm",1,VF_SY120_GETCURRENTFORM(true)); /* ignore error */
          
          break;   
   }
   
   return; 
}

/* ----------------------------------------------- */
/* Methods for Hidden handling are prefixed VF_SY122 */
/* ----------------------------------------------- */ 
function VF_SY122_NAVTOSCREEN()
{
   var strScreenName = VFPROP_Get("NavHiddenTo.uScreenName",1);

   if ( arrayobjJunctionsbyScreenName[strScreenName] != null) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Ramp handling request Navigate To JUNCTION Screen named", strScreenName);
      NAVIGATE_TO_JUNCTION(strScreenName);
   }
   else if (arrayobjCherriesbyScreenName[strScreenName] != null) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Ramp handling request Navigate To DESTINATION Screen named", strScreenName);   
      NAVIGATE_TO_DESTINATION(strScreenName);
   }
   else
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Ramp handling request to navigate to screen named", strScreenName, "which is not a Junction nor a Destination, navigate ignored");
      VF_SY120_ADDMESSAGE("INFO",'The screen ' + strScreenName + ' is not a Junction nor a Destination. Navigate to screen ignored.');    
   }
   
   if (GLOBAL_objCurrentNode != null) 
   {
      VFPROP_Set("Hidden.CurrentScreen",1,GLOBAL_objCurrentNode.uScreenName); 
      if (GLOBAL_flagTraceModeOn) TRACE("Ramp finished Navigate To Screen ", strScreenName, ". The current screen is", GLOBAL_objCurrentNode.uScreenName );
   }
}

/* --------------------------------------------------------------------------------------------- */
/* VF_SY120_CLEANUP_DISCONNECT - Either VL is shuting down or the user requested disconnection   */
/* --------------------------------------------------------------------------------------------- */ 

function VF_SY120_CLEANUP_DISCONNECT()
{

   if (GLOBAL_flagTraceModeOn) TRACE("VF_SY120_CLEANUP_DISCONNECT started");

   /* Stop any active connection management timers */ 

   if (objNLConnectionLostTimer != null) 
   {
      window.clearInterval(objNLConnectionLostTimer);
      objNLConnectionLostTimer = null;  
   } 

   if (objNLConnectionWaitTimer != null) 
   {
      window.clearInterval(objNLConnectionWaitTimer);
      objNLConnectionWaitTimer = null;
   }

   /* If new look is connected */

   if ( (objNewLook != null) && (GLOBAL_flagConnected) ) 
   {
      /* If logged on, attempt to log off and let erros happen */
      
      if ((GLOBAL_flagSessionSignedOn) && (GLOBAL_strLogonScreenName != ""))
      {  
         try 
         {
            if (GLOBAL_flagTraceModeOn) TRACE("Attempting to navigate to screen named",GLOBAL_strLogonScreenName);
            NAVIGATE_TO_JUNCTION(GLOBAL_strLogonScreenName);  
            if (GLOBAL_flagTraceModeOn) TRACE("Navigation to screen named",GLOBAL_strLogonScreenName,"completed.");
         }
         catch (objError) { /* Do nothing and ignore */ }
      }   
               
      /* Run the Disconnect macro */
 
      try 
      {
        if (GLOBAL_flagTraceModeOn) TRACE("Attempting to disconnect from server");
        VF_SY121_RUNMACRO("VF_Macro.VF_Disconnect");
        if (GLOBAL_flagTraceModeOn) TRACE("Disconnection from server attempt complete");
      } 
      catch (objError) { /* Do nothing and ignore */ }
   }

   /* Reset some variables */ 

   try
   { 

      if (objNewLook != null) 
      {
         objNewLook.OnTitleChanged = null; 
         if (GLOBAL_flagWEBMODEExecute)
         {
           try { window.document.body.detachEvent("onmouseenter",VF_SY121_WINDOW_GotLogicalFocus);  } catch (oE) { }  
           try { window.document.body.detachEvent("onmouseleave",VF_SY121_WINDOW_LostLogicalFocus); } catch (oE) { }  
    	     try { window.document.detachEvent("onfocusin",VF_SY121_WINDOW_GotLogicalFocus); } catch (oE) { }
           try { window.document.detachEvent("onfocusout",VF_SY121_WINDOW_LostLogicalFocus); } catch (oE) { }
         }         
      }
      
      GLOBAL_flagSessionSignedOn = false;
      GLOBAL_strLogonScreenName = "";
      GLOBAL_strRAMP_Instance_Id = "";
      GLOBAL_int503AssignedNum = null;
      GLOBAL_VF_SY120_Parent = null;

      objNewLook = null;
   
   }            
   catch (objError) { /* Do nothing and ignore */ }

   /* Finished */   

   if (GLOBAL_flagTraceModeOn) TRACE("VF_SY120_CLEANUP_DISCONNECT ended"); 

   return;  
}


/* ------------------------------------------------------------------------- */
/* VF_SY120_GET_NEXT_SIGNAL - Get the next signal                            */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_GET_NEXT_SIGNAL()
{

   if (GLOBAL_objStartSignalQueue == null)
   {
      VFPROP_Set("Signal.Id",1,"");
      VFPROP_Set("Signal.PayLoad",1,"");
   }
   else
   {
      var objSignal = GLOBAL_objStartSignalQueue; 
     
      GLOBAL_objStartSignalQueue = objSignal.objNextSignal; 

      if (GLOBAL_objEndSignalQueue == objSignal) GLOBAL_objEndSignalQueue = null;

      VFPROP_Set("Signal.Id",1,objSignal.strId); 
      VFPROP_Set("Signal.PayLoad",1,objSignal.strPayLoad);
      
      objSignal.objNextSignal = null;
      delete(objSignal); 
   }

   return;
}

/* ----------------------------------------------------------------------------------------------------- */
/* VF_SY120_SETEXEC_FP026 - Set the Node container properties for EXEC mode (i.e. not Design) - VF_FP026  */
/* ----------------------------------------------------------------------------------------------------- */ 

function VF_SY120_SETEXEC_FP026()
{
      var objScript = window.document.createElement("SCRIPT");
      objScript.type = "text/javascript";
      objScript.src = VFPROP_Get("objNodeGroup.uJsname",1);
      
     
      objNodeGroup.uIdentifier  = VFPROP_Get("objNodeGroup.uIdentifier",1);
      
      try { objScript.attachEvent("onreadystatechange",VF_SY120_Execute); }
      catch (Error) { objScript.addEventListener("load", VF_SY120_Execute, false); }    

      oGLOBAL_ScriptLoadElement = objScript;       
      
      window.document.body.appendChild(objScript);
}

function VF_SY120_Execute(evt)
{

   if (oGLOBAL_ScriptLoadElement == null) return; 

   var objScriptEle = oGLOBAL_ScriptLoadElement; 
   var bReady = true;
   
   if ( typeof objScriptEle.readyState == "string") bReady = ( ( objScriptEle.readyState == "loaded") || ( objScriptEle.readyState == "complete") );

   if (bReady) 
   {
      try { objScriptEle.detachEvent("onreadystatechange",objScriptEle); }   
      catch (Error) { objScriptEle.removeEventListener("load",objScriptEle,false); }
    
      objNodeGroup.flagSessionManaged = (VFPROP_Get("objNodeGroup.flagSessionManaged",1) != "FALSE");    

      EXEC_026();
      EXEC_027();
      EXEC_028();
      EXEC_029();
      EXEC_030();

      var strNodesStamp = "==NONE==";
         
      /* Date time stamp checking */
      if (typeof (objNodeGroup.uRampStamp) != "undefined") 
      {
         strNodesStamp = objNodeGroup.uRampStamp; 
         
         VFPROP_Set("objNodeGroup.uDate",1,strNodesStamp.substr(0,4) + "/" + strNodesStamp.substr(4,2) + "/" + strNodesStamp.substr(6,2));
         VFPROP_Set("objNodeGroup.uTime",1,strNodesStamp.substr(9,2) + ":" + strNodesStamp.substr(11,2) + ":" + strNodesStamp.substr(13,2));         
      }

      VFPROP_Signal("ScriptsLoaded",strNodesStamp); /* Pass the stamp to save doing a VFGET on the other side */

   }
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_ExecSessionScript - Execute unrolled javascript         */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_ExecSessionScript(strJSfunction)
{
   try 
   {    
      execScript(strJSfunction,"Javascript");
   }
   catch (_objError_) 
   { 
      ALERT_MESSAGE(_objError_.description + " when executing " + strJSfunction);
   }
   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_SETGROUPNODE - Set the Group Node properties  - VF_FP026         */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_SETGROUPNODE()
{
   objNodeGroup.uIdentifier        = VFPROP_Get("objNodeGroup.uIdentifier",1);
   objNodeGroup.uCaption           = VFPROP_Get("objNodeGroup.uCaption",1);
   objNodeGroup.uScriptCount       = parseInt(VFPROP_Get("objNodeGroup.uScriptCount",1),10);
   objNodeGroup.flagLockUnknown    = (VFPROP_Get("objNodeGroup.uLockUnknown",1) != "FALSE");   
   objNodeGroup.flagSessionManaged = (VFPROP_Get("objNodeGroup.flagSessionManaged",1) != "FALSE");    

   /* These are the storage of the special button or function key handler "interceptors" */
   var intSpecialFieldTotal = objNodeGroup.intSpecialFieldTotal = parseInt(VFPROP_Get("objNodeGroup.SpecialFieldTotal",1), 10);
   var strArrayKey = "";

   objNodeGroup.arrayobjSpecialFields = new Array();

   for (var intI = 0; intI < intSpecialFieldTotal; intI++)
   {
      var objSpecialField = new Object();

      objSpecialField.uKey = VFPROP_Get("objNodeGroup.uSpecialFldKey",intI + 1);
      objSpecialField.uHandler = VFPROP_Get("objNodeGroup.uSpecialFldHandler",intI + 1);
      objSpecialField.uName = VFPROP_Get("objNodeGroup.uSpecialFldName",intI + 1);
      
      strArrayKey =  objSpecialField.uName.toUpperCase() + objSpecialField.uKey;

      objNodeGroup.arrayobjSpecialFields[strArrayKey] = objSpecialField;
   }

   /* If the session is not managed then locking is never used */

   if ( !(objNodeGroup.flagSessionManaged) ) objNodeGroup.flagLockUnknown = false; 

   /* Finished */  

   return;  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_CREATECHERRY - Set the cherry properties - VF_FP027              */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_RELOADCHERRY()
{
   var objCherry = new Object();

   objCherry.uScreenName     = VFPROP_Get("objCherry.uScreenName",1);
   objCherry.uIdentifier     = VFPROP_Get("objCherry.uIdentifier",1);
   objCherry.uNavigateScript = VFPROP_Get("objCherry.uNavigateScript",1);
   objCherry.uReturnScript   = VFPROP_Get("objCherry.uReturnScript",1);   
   objCherry.uButtonScript   = VFPROP_Get("objCherry.uButtonScript",1);
   
   objCherry.arraystrDisabledNLFunctionKey     = new Array();   
   objCherry.arraystrEnabledNLFunctionKey      = new Array();   
   objCherry.arraystrEnabledNLFunctionKeyMacro = new Array();   

   var strFKeyCount = VFPROP_Get("objCherry.uFKeycount",1);

   objCherry.aFK  = new Array();

   {
       var objFunctionKey      = null;
       var intI         = 0;
       var intFKeyCount = objCherry.uFkeyCount = parseInt(strFKeyCount, 10);
       
       var arraySplitCaps = VFPROP_Get("objFKey.uKeyCaption",1).split(">=<");
       var arraySplitEnNL = VFPROP_Get("objFKey.uKeyEnabledNL",1).split(">=<");
       var arraySplitEnVF = VFPROP_Get("objFKey.uKeyEnabledVLF",1).split(">=<");
       var arraySplitKSnd = VFPROP_Get("objFKey.uKeytoSend",1).split(">=<");
       var arraySplitKSeq = VFPROP_Get("objFKey.uKeySequence",1).split(">=<");
       
       for (intI = 0; intI < intFKeyCount; intI++)
       {
          objFunctionKey           = new Object();
          objFunctionKey.KC        = arraySplitCaps[intI];
          objFunctionKey.fKENL     = (arraySplitEnNL[intI] == "TRUE");
          objFunctionKey.fKEVLF    = (arraySplitEnVF[intI] == "TRUE");
          objFunctionKey.KS        = arraySplitKSnd[intI];
          objFunctionKey.KSEQ      = arraySplitKSeq[intI];
          objFunctionKey.objCherry = objCherry;

          objCherry.aFK[objFunctionKey.KS] = objFunctionKey;
       }
   }

   arrayobjCherriesbyScreenName[objCherry.uScreenName] = objCherry;
   arrayobjNodebyIDN[objCherry.uIdentifier]            = objCherry;

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_RELOADJUNCTION - Set the Junction properties  - VF_FP028         */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_RELOADJUNCTION()
{
   var objJunction = new Object();

   objJunction.uScreenName = VFPROP_Get("objJunction.uScreenName",1);
   objJunction.uIdentifier = VFPROP_Get("objJunction.uIdentifier",1);

   arrayobjJunctionsbyScreenName[objJunction.uScreenName] = objJunction;
   arrayobjNodebyIDN[objJunction.uIdentifier]             = objJunction;

   return;   
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_RELOADSPECIAL - Set the Special properties  - VF_FP029           */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_RELOADSPECIAL()
{
   var objSpecial = new Object();

   objSpecial.uScreenName = VFPROP_Get("objSpecial.uScreenName",1);
   objSpecial.uIdentifier = VFPROP_Get("objSpecial.uIdentifier",1);
   objSpecial.objELIMINATEScript = null;
   
   arrayobjSpecialsbyScreenName[objSpecial.uScreenName] = objSpecial;
   arrayobjNodebyIDN[objSpecial.uIdentifier]            = objSpecial;

}

/* --------------------------------------------------------------------------------- */
/* VF_SY120_IS_VALID_IDN - Check the validility of an IDN                            */
/* --------------------------------------------------------------------------------- */ 

function VF_SY120_IS_VALID_IDN(argstrIDN,argobjScript) 
{
   if ( arrayobjNodebyIDN[argstrIDN] == null) 
   {
      ALERT_MESSAGE(argobjScript.uScriptUserName + " is an orphan script and should be deleted. The script CAPTION is: " + argobjScript.uCaption + " The script IDENTIFIER is: " + argobjScript.uIdentifier + " The script TYPE is: " + argobjScript.uScriptType); 
      return(false); 
   }
   else
   {
      return(true);
   }
}

/* --------------------------------------------------------------------------------- */
/* VF_SY120_XREFSCRIPT - Cross reference a script with its targets                   */
/* --------------------------------------------------------------------------------- */ 

function VF_SY120_XREFSCRIPT(argstrTargetIDN,argobjScript)
{

   if ( VF_SY120_IS_VALID_IDN(argstrTargetIDN,argobjScript)  ) 
   {
      var arrayobjScriptsNavigatingTo = arrayobjTargetScriptXRef[argstrTargetIDN];

      if (arrayobjScriptsNavigatingTo == null)
      {
         arrayobjScriptsNavigatingTo = new Array();  
         arrayobjTargetScriptXRef[argstrTargetIDN] = arrayobjScriptsNavigatingTo;
      }

      arrayobjScriptsNavigatingTo[argobjScript.uIdentifier] = argobjScript;
   }

   return; 
}

/* --------------------------------------------------------------------------------- */
/* VF_SY121_RELOADSCRIPT - Load and manage script objects                            */
/* --------------------------------------------------------------------------------- */ 

function VF_SY121_RELOADSCRIPT()  
{   
    var objScript         = null;
    var intIndex          = 0;   
    var uNavigateToIDN    = "";
    var uNavigateFromDN   = "";
    var uIdentifier       = VFPROP_Get("objScript.uIdentifier",1);

    /* See if we need to create a new script object and do so if required */

    objScript = arrayobjScriptsbyIDN[uIdentifier];

    if (objScript == null)
    { 
       objScript = new Object();
       arrayobjScriptsbyIDN[uIdentifier] = objScript;
    } 

    /* Extract the identifier and track the script object */ 

    objScript.uIdentifier            = uIdentifier;
    objScript.uScriptUserName        = VFPROP_Get("objScript.uUserObjectType",1);
    objScript.uCaption               = VFPROP_Get("objScript.uCaption",1); 
    objScript.flagDeleted            = (VFPROP_Get("objScript.uDeleted",1) == "TRUE");       
    objScript.uScriptType            = VFPROP_Get("objScript.uScriptType",1);

    uNavigateToIDN                   = VFPROP_Get("objScript.uNavigateToIDN",1);
    uNavigateFromIDN                 = VFPROP_Get("objScript.uNavigateFromIDN",1);
      
    /* Handle the various script types - see uCreateChildNodes in VF_FP026 for matching VL setup code */

    switch (objScript.uScriptType)
    {
       case "INVOKE": /* Script that causes a cherry to fire */ 
            objScript.uNominalOwnerNodeIDN = uNavigateToIDN;
            break;
       
       case "RETURN": /* Script that causes a cherry to return to the nearest junction */  
       case "BUTTON": /* Script that is associated with a button                       */  
            objScript.uNominalOwnerNodeIDN = uNavigateFromIDN; 
            break;
       
       case "ELIMINATE": /* Script that causes a special to be eliminated */  
            objScript.uNominalOwnerNodeIDN = uNavigateFromIDN; 
            {
               var objSpecial = arrayobjNodebyIDN[uNavigateFromIDN];
               if (objSpecial != null) objSpecial.objELIMINATEScript = objScript; 
            }   
            break;
       
       case "NAVIGATE": /* Script that navigates between two junctions */ 
            objScript.uNominalOwnerNodeIDN = uNavigateFromIDN; 
            objScript.uNavigateToIDN = uNavigateToIDN;
            VF_SY120_XREFSCRIPT(uNavigateToIDN,objScript);
            break;

       default:
            objScript.uNominalOwnerNodeIDN = uNavigateFromIDN; 
            ALERT_MESSAGE("Unknown script type encountered");
            break;                  
    }  

    /* Check the nominal script parent is valid */    

    VF_SY120_IS_VALID_IDN(objScript.uNominalOwnerNodeIDN,objScript);     

    /* Now load up the scripts                                   */ 
    /* Build the script strings up as an executable script block */  

    GLOBAL_intNextScriptNumber++; 

    objScript.strScriptLines  = ("{ _UF_" + GLOBAL_intNextScriptNumber.toString() + "(arrayScriptInstanceExecutionStack[intScriptExecutionStackPos]); function _UF_" + GLOBAL_intNextScriptNumber.toString() + "(objScriptInstance) {\x0D\x0A ");

    objScript.strScriptLines += VFPROP_Get("objScript.uScriptLines",1);  
    
    objScript.strScriptLines += ("\x0D\x0A }\x0D\x0A }");    

    /* Finished */ 
      
    return;  
}

/* -------------------------------------------------------------------------------- */
/* VF_SY121_GET_CURRENTSCRIPTINSTANCE - Get current scripts objScriptInstance       */
/* -------------------------------------------------------------------------------- */ 

function VF_SY121_GET_CURRENTSCRIPTINSTANCE()
{
  if ( intScriptExecutionStackPos <= 0) return(null); 
  else                                  return(arrayScriptInstanceExecutionStack[intScriptExecutionStackPos]);
}

/* -------------------------------------------------------------------------------- */
/* VF_SY121_EXECUTESCRIPT - Execute a script */
/* -------------------------------------------------------------------------------- */ 

function VF_SY121_EXECUTESCRIPT(strScriptIDN,strFunctionKeyUsed)
{
   var objScript                = arrayobjScriptsbyIDN[strScriptIDN];
   var objCallingScriptInstance = VF_SY121_GET_CURRENTSCRIPTINSTANCE();

   /* If the specifed script could not be found */ 

   if (objScript == null )
   {
      VF_SY121_INLINE_ERROR_HANDLER(("Script with identifier " + strScriptIDN + " not found."),null);  
      return(false);
   }

   /* If there is already an error in the current script executing above this one in the stack */

   if ((objCallingScriptInstance != null) && (objCallingScriptInstance.flagFatalError))
   {
      VF_SY121_INLINE_ERROR_HANDLER(("Execution of script " + objScript.uScriptUserName + " aborted because of error in a previous script."),null);  
      return(false);
   }

   /* If the specifed script has been deleted */ 

   if (objScript.flagDeleted)
   {
      VF_SY121_INLINE_ERROR_HANDLER(("Execution of script " + objScript.uScriptUserName + " aborted because script has been deleted."),null);  
      return(false);
   }

   /* Check for recursion if checking is on */
   
   if (GLOBAL_flagRecursionCheck)
   {

      for (var intStackInd = 1; intStackInd <= intScriptExecutionStackPos; intStackInd++)
      {  
         if (arrayScriptInstanceExecutionStack[intStackInd].objScript == objScript)
         {
            VF_SY121_INLINE_ERROR_HANDLER(("Aborting execution of script " + objScript.uScriptUserName + ". Script execution might cause infinite recursion."),null);  
            return(false);
         }
      }
   }
   
   /* Attempt to execute it */ 

   {
      var flagSaveTitleChanged = GLOBAL_flagOnTitleChangedEventEnabled;
      var flagReturnValue      = true;
      var objActiveScriptInstance  = null;

      /* Turn off the global change flag */ 

      GLOBAL_flagOnTitleChangedEventEnabled = false;

      /* Add to the script stack */      

      intScriptExecutionStackPos++; 
      
      objActiveScriptInstance = arrayScriptInstanceExecutionStack[intScriptExecutionStackPos];
      
      if (objActiveScriptInstance == null)
      {
         objActiveScriptInstance = new Object();
         arrayScriptInstanceExecutionStack[intScriptExecutionStackPos] = objActiveScriptInstance;
      }

      /* (Re)Initialize the script object assigned for this script from the stack */ 

      objActiveScriptInstance.flagFatalError          = false;
      objActiveScriptInstance.strLastErrorDescription = ""; 
      objActiveScriptInstance.objScript               = objScript; 

      if (strFunctionKeyUsed != null) objActiveScriptInstance.FunctionKeyUsed = strFunctionKeyUsed;  
      else                            objActiveScriptInstance.FunctionKeyUsed = "";  
 
      /* Build up the script function call and then do it and handle errors */ 

      GLOBAL_intTraceIndent += 5; 

      if (GLOBAL_flagTraceModeOn) TRACE("Executing script",objScript.uScriptUserName,"-",objScript.uCaption);

      GLOBAL_intTraceIndent += 5; 
      
      var strScript = objFramework.flagDesignMode ? objScript.strScriptLines : "__UF__" + strScriptIDN + "(arrayScriptInstanceExecutionStack[intScriptExecutionStackPos]);"

       try {        
            window.execScript(strScript,"Javascript"); 
       }
       catch (Error) { 
       
         try { 
         
            eval(strScript); 
         }
         catch (Error) { VF_SY120_SCRIPT_ERROR_HANDLER(Error); }       
      }   
                    
      GLOBAL_intTraceIndent -= 5;   
         
      if (objActiveScriptInstance.flagFatalError) 
      {
         flagReturnValue = false;

         VF_SY121_INLINE_ERROR_HANDLER(("Fatal error \"" + objActiveScriptInstance.strLastErrorDescription + "\" detected in script " + objScript.uScriptUserName),null);   
            
         if (GLOBAL_flagTraceModeOn) TRACE("Execution of script",objScript.uScriptUserName,"-",objScript.uCaption,"ended in error.");
            
         if (objCallingScriptInstance != null) objCallingScriptInstance.flagFatalError = true; /* Pass the fatal error up the calling stack */
      }   
      else
      {    
         flagReturnValue = true;

         if (GLOBAL_flagTraceModeOn) TRACE("Execution of script",objScript.uScriptUserName,"-",objScript.uCaption,"completed. No error detected.");
      } 

      GLOBAL_intTraceIndent -= 5; 
  
      /* Remove from the stack */  

      intScriptExecutionStackPos--; 

      /* Reset the change enabled flag */

      GLOBAL_flagOnTitleChangedEventEnabled = flagSaveTitleChanged;
      
      /* Finished */  
      
      return(flagReturnValue); 
   }

}

/* ------------------------------------------------------------------------- */
/* VF_SY121_RESETCONNECTIONDETAILS - Reset connection details                */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_RESETCONNECTIONDETAILS()
{
   objNodeGroup.uConnectionName =  VFPROP_Get("objNodeGroup.uConnectionName",1);
   objNodeGroup.uUseIPaddress   =  VFPROP_Get("objNodeGroup.uUseIPaddress",1);
   objNodeGroup.uUsePort        =  VFPROP_Get("objNodeGroup.uUsePort",1);
   objUser.Name                 =  VFPROP_Get("objUser.Name",1);
   objUser.Password             =  VFPROP_Get("objUser.Password",1); 
   return;  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_MAKECONNECTION - Establish a NL connection                       */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_MAKECONNECTION()
{

   VF_SY121_RESETCONNECTIONDETAILS(); 

   if (objNodeGroup.uUseIPaddress == "") objNodeGroup.uUseConnectionName = "TRUE";
   else                                  objNodeGroup.uUseConnectionName = "FALSE";   

   VF_SY121_SETNL_VALUE("V_UseConnectionName",objNodeGroup.uUseConnectionName);  
   VF_SY121_SETNL_VALUE("V_ConnectionName", objNodeGroup.uConnectionName);
   VF_SY121_SETNL_VALUE("V_IPAddress", objNodeGroup.uUseIPaddress);
   VF_SY121_SETNL_VALUE("V_TelnetPort", objNodeGroup.uUsePort);
   VF_SY121_SETNL_VALUE("V_UserName", objUser.Name);
   VF_SY121_SETNL_VALUE("V_UserPassword",objUser.Password);  

   GLOBAL_V_SendCount    = -1; 
   GLOBAL_V_ReceiveCount = -1;  

   VF_SY121_SETNL_VALUE("V_SendCount",0);  
   VF_SY121_SETNL_VALUE("V_ReceiveCount",0);  
   VF_SY121_SETNL_VALUE("V_KeyStroke","");  
   VF_SY121_SETNL_VALUE("App.OnReceive","VF_Macro.VF_Receive"); 
   VF_SY121_SETNL_VALUE("App.OnRefresh","VF_Macro.VF_Receive");       
   VF_SY121_SETNL_VALUE("App.OnSend",   "VF_Macro.VF_Send");  
   VF_SY121_SETNL_VALUE("V_SendSTATE",GLOBAL_V_SendGO);  
   VF_SY121_SETNL_VALUE("V_SendSTOP",GLOBAL_V_SendSTOP);  
   VF_SY121_SETNL_VALUE("V_SendGO",GLOBAL_V_SendGO);  
   
   /* Now run the connection macro */ 

   if (GLOBAL_flagTraceModeOn)
   {
      try 
      {
            TRACE("======DETAILS OF NEWLOOK SOFTWARE USED BY THIS RAMP APPLICATION ========");            
            TRACE("Version",objNewLook.GetValue("App.Version"));
            TRACE("Settings file",objNewLook.GetValue("App.Path") + "\\" + objNewLook.GetValue("App.SettingsFile"));            
            TRACE("SID File", objNewLook.GetValue("App.Path") + "\\" + objNewLook.GetValue("App.SharedRepository"));                        
            TRACE("License used",objNewLook.License);            
            TRACE("Remote Session", (objNewLook.GetValue("App.RemoteSession").toString() == "1").toString());
            TRACE("Newlook is embedded in a html page in this location:", window.location.href);
            TRACE("using these OPTIONS:", objNewLook.getAttribute("options"));            
            TRACE("License param:", objNewLook.getAttribute("license"));                        
            TRACE("========================================================================");                     
      }
      catch (oError) { }
         
      TRACE("Attempting server connection using user profile",objUser.Name);
      if (objNodeGroup.uUseConnectionName == "TRUE") TRACE("Connection will be attempted to server named",objNodeGroup.uConnectionName);
      else TRACE("Connection will be attempted to server with IP Address =", objNodeGroup.uUseIPaddress,"and port =",objNodeGroup.uUsePort);
   }
   
   VF_SY120_ADDMESSAGE("WAITCONNECTION",GLOBAL_strNLWaitMessage); 
   VF_SY120_CLEARMESSAGES();

   VF_SY121_RUNMACRO("VF_Macro.VF_Connect");

   if (GLOBAL_flagTraceModeOn)
   {
      TRACE("Server connection attempt has completed. Waiting for server to activate.");
   }

   var strV_PastConnection =  VF_SY121_GETNL_VALUE("V_PastConnection", true);

   if (strV_PastConnection == "FALSE")
   {
      intNLConnectionWaitElapsed = 999999;
   }

   /* Check every half second for a connection, stop interval after 30 seconds which is what Newlooks status message says */

   objNLConnectionWaitTimer = window.setInterval(VF_SY121_WAIT_SIGNAL_CONNECTION,intNLConnectionWaitInterval); 

   /* Finished */

   return;  
}

/* ------------------------------------------------------------------------------------------------------------- */
/* VF_SY121_WAIT_SIGNAL_CONNECTION - Check every second until we get a connection and signal to VL if connected. */
/* ------------------------------------------------------------------------------------------------------------- */

function VF_SY121_WAIT_SIGNAL_CONNECTION()
{
   /* If the time out has been exceeded */

   if ((intNLConnectionWaitElapsed >= intNLConnectionWaitLimit) && (objNLConnectionWaitTimer != null)) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Server connection attempt failed. Wait limit of",intNLConnectionWaitLimit,"milliseconds exceeded."); 
      if (objNLConnectionWaitTimer != null) window.clearInterval(objNLConnectionWaitTimer);
      objNLConnectionWaitTimer = null; 
      VF_SY120_ADDMESSAGE("HIDE","Server connection attempt failed. Wait limit of",intNLConnectionWaitLimit,"milliseconds exceeded."); 
      VFPROP_Signal("NL_DisConnected","");
   }

   /* If connected AND and active form exist in the 5250 display area signal connected to the driver */  

   else if ( ( GLOBAL_flagConnected ) && ( VF_SY121_CHECKACTIVEFORM() ) ) 
   {
      if (objNLConnectionWaitTimer != null) window.clearInterval(objNLConnectionWaitTimer);
      objNLConnectionWaitTimer = null; 
      GLOBAL_flagOnTitleChangedEventEnabled = true;  
      if (GLOBAL_flagTraceModeOn) TRACE("Server connection completed and fully active. Signalling full connection ready.");  
      VFPROP_Signal("NL_Connected","");
      VF_SY120_SET_SHOWFORM(false); 
   }

   /* Else wait some more for the connection to complete */

   else 
   {
      intNLConnectionWaitElapsed += intNLConnectionWaitInterval;   
      if (GLOBAL_flagTraceModeOn) TRACE("Waiting for server connection to complete.");  

      intNLWaitAttempts++;

      if (intNLWaitAttempts > 5) 
      {
         VF_SY120_CLEARMESSAGES();
         GLOBAL_strNLWaitMessage += " .";
         VF_SY120_ADDMESSAGE("WAITCONNECTION",GLOBAL_strNLWaitMessage); 
         intNLWaitAttempts = 0;
      }
   } 

   /* Finished */ 

   return;
}

/* ------------------------------------------------------------------------------------------------------------- */
/* VF_SY121_WINDOW_LostLogicalFocus/VF_SY121_WINDOW_GotLogicalFocus - Track got/lost focus of main RAMP window                   */
/* ------------------------------------------------------------------------------------------------------------- */

function VF_SY121_WINDOW_LostLogicalFocus()
{
   if (objNLFunctionKeyUsageTimer != null) 
   {
      VF_SY121_STOPKEYUSAGETIMER(false);
   }
            
   return;  
}  

function VF_SY121_WINDOW_GotLogicalFocus()
{
   if ((objNLFunctionKeyUsageTimer == null) && (!(GLOBAL_CurrentlyDeactivated)) ) 
   {
      VF_SY121_STARTKEYUSAGETIMER(false,false); 
   }
                
   return;  
}

/* ------------------------------------------------------------------------------------------------------------- */
/* VF_SY121_STARTKEYUSAGETIMER - Check for key usage                                                             */
/* ------------------------------------------------------------------------------------------------------------- */

function VF_SY121_STARTKEYUSAGETIMER(fSetKeyStroke,fTrace)
{  
   if (fSetKeyStroke == null) fSetKeyStroke = true;
   if (fTrace == null) fTrace = true;
   fTrace = fTrace && GLOBAL_flagTraceModeOn; 

   if ((objNLFunctionKeyUsageTimer == null) && (GLOBAL_flagConnected)) 
   {
      if (fTrace) TRACE("Function key usage watch started.");
      if (GLOBAL_VF_System_EXTERN) GLOBAL_VF_System_EXTERN.objMainWindow.status = "RAMP-NL function keys on (" + GLOBAL_int503AssignedNum.toString() + ").";
      if (fSetKeyStroke) VF_SY121_SETNL_VALUE("V_KeyStroke","");  
      objNLFunctionKeyUsageTimer = window.setInterval(VF_SY121_CHECK_FUNCTIONKEYUSAGE,intNLFunctionKeyUsageTimerInterval);
   }   

   return; 
}

/* ------------------------------------------------------------------------------------------------------------- */
/* VF_SY121_STOPKEYUSAGETIMER - Stop the key usage timer                                                         */
/* ------------------------------------------------------------------------------------------------------------- */

function VF_SY121_STOPKEYUSAGETIMER(fTrace)
{
   if (fTrace == null) fTrace = true;
   fTrace = fTrace && GLOBAL_flagTraceModeOn; 

   if (objNLFunctionKeyUsageTimer != null) 
   {
      if (fTrace) TRACE("Function key usage watch stopped.")         
      if (GLOBAL_VF_System_EXTERN) GLOBAL_VF_System_EXTERN.objMainWindow.status = "RAMP-NL function keys off (" + GLOBAL_int503AssignedNum.toString() + ")."; 
      window.clearInterval(objNLFunctionKeyUsageTimer);
      objNLFunctionKeyUsageTimer = null;
   }

   return; 
}
  
/* ------------------------------------------------------------------------------------------------------------- */
/* VF_SY121_CHECK_FUNCTIONKEYUSAGE - Check for key usages                                                                */
/* ------------------------------------------------------------------------------------------------------------- */

function VF_SY121_CHECK_FUNCTIONKEYUSAGE()
{
   if ( GLOBAL_flagConnected ) 
   {
      var strV_KeyStroke = VF_SY121_GETNL_VALUE("V_KeyStroke", true); 

      if ( (strV_KeyStroke != " ") && (strV_KeyStroke != "") )
      {
         var objFunctionKey = null;

         VF_SY121_STOPKEYUSAGETIMER();

         VF_SY121_SETNL_VALUE("V_KeyStroke","");  

         objFunctionKey = arrayobjEnabledFunctionKeyStroke[strV_KeyStroke]; 

         if (objFunctionKey != null) 
         {
            /* VF_SY120_BUTTON_CLICKED(objFunctionKey); PREVIOUS CODE: NOW WE GO VIA SIGNAL */

            /* Fire an event to VL so that the Newlook screen becomes hidden, otherwise for function key presses the transitions will show */

            VFPROP_Signal("FunctionKeyPressed", strV_KeyStroke);            
         }

         VF_SY121_STARTKEYUSAGETIMER();
      }
   }

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_INITIALIZE - Initialize Newlook                                  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_INITIALIZE()
{
    /* Handle the new look loaded details */  

    if ((objNewLook != null) && (objNewLook.readyState == 4))
    {
      objNewLook.OnTitleChanged        = VF_SY120_ONTITLECHANGED;
      objNewLook.onConnectStateChanged = VF_SY120_STATECHANGED;
      objNewLook.OnRefreshed           = VF_SY120_ONREFRESHED;
      objNewLook.OnReceived            = VF_SY120_ONRECEIVED;            
      VFPROP_Set("Initialize.OpenBrace",1,"{");
      VFPROP_Set("Initialize.CloseBrace",1,"}");  
      return("NL_Ready");
    }
    else
    {
       VF_SY121_INLINE_ERROR_HANDLER(arrayMtxtMessages[3],null);
       return("NL_Error");
    }

    /* Finished */

    return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SENDKEY - Sends a key to NL via VF_Macro                */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SENDKEY(argstrKeyToSend)
{
   try
   {
       VF_SY120_SENDSTATE_GO("SENDKEY");

       if (GLOBAL_arrayobjKeybyCode[argstrKeyToSend] == null)
       {
          VF_SY121_INLINE_ERROR_HANDLER(("Function key identifier \"" + argstrKeyToSend + "\" is not a valid function key name."),null);   
       }
       else
       {
           var Stacked_intCurrentFormSequence = GLOBAL_intCurrentFormSequence; 

           /* Reset any current cherry buttons so that they can be sent programtically */ 

           VF_SY121_RESET_CHERRY_FUNCTIONKEYS(true,false);

           /* Set the value and run the macro that send the key */

           if (GLOBAL_flagTraceModeOn) TRACE("Invoking macro to send key",argstrKeyToSend);

           VF_SY121_SETNL_VALUE("V_KeytoSend", ( "{" + argstrKeyToSend + "}" ) );

           VF_SY121_RUNMACRO("VF_Macro.VF_SendKeys"); 

           /* Handling the arrived form */
    
           VF_SY120_HANDLEARRIVEDFORM();

           /* If the current screen did not change at all reset the enabled state */

           if (Stacked_intCurrentFormSequence == GLOBAL_intCurrentFormSequence) VF_SY121_RESET_CHERRY_FUNCTIONKEYS(false,true); 
       }
   }
   catch (objError)
   {
     var strFailureReason = " VF_SY121_SENDKEY failed - " + objError.description + " (" + objError.number.toString() + ")";  
     TRACE(strFailureReason);
     ALERT_MESSAGE(strFailureReason);       
   } 
  
   /* Finished */  

   return; 
}
  
/* ------------------------------------------------------------------------- */
/* VF_SY121_SETNL_VALUE - Sets a variable in NL Active X */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETNL_VALUE(argstrVariable, argstrVariant, flagPassasReceived, flagIgnoreError)
{
   try
   {
       if ((flagPassasReceived != null) && (flagPassasReceived))
       {
          objNewLook.SetValue(argstrVariable,argstrVariant);
       }
       else
       {
           switch (typeof(argstrVariant))
           {
              case "string":

                    if ( argstrVariant == "")  argstrVariant = " ";

                    objNewLook.SetValue(argstrVariable, (strDoubleQuote + argstrVariant.replace(/"/g, "\"\"") + strDoubleQuote) ); 
                
                    break; 

              case "boolean":
              case "number":
                    objNewLook.SetValue(argstrVariable, argstrVariant);
                    break; 

              default:
                    VF_SY121_INLINE_ERROR_HANDLER(("SETVALUE attempt not valid. Javascript value argument passed is of type " + typeof(argstrVariant)),null);
                    break;

           }
       }

   }
   catch (objError)
   {
     var strFailureReason = "SETVALUE of " + argstrVariable.toString() + " to " + argstrVariant.toString() + " failed - " + objError.description + " (" + objError.number.toString() + ")";  
     TRACE(strFailureReason);

     if ( ( flagIgnoreError == null ) || ( flagIgnoreError == false ) ) ALERT_MESSAGE(strFailureReason);       
   } 

   /* Finished */
 
   return;  
}
  
/* ------------------------------------------------------------------------- */
/* VF_SY121_GETNL_VALUE - Gets a variable content from NL Active X */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GETNL_VALUE(argstrVariable,flagIgnoreError)
{
   try 
   { 
       var x = objNewLook.GetValue(argstrVariable);     
       return(x); 
   }
   catch (objError)
   {
     var strFailureReason = "";  
     if ( typeof(argstrVariable) == "undefined" ) strFailureReason = "GETVALUE of an undefined variable failed - " + objError.description + " (" + objError.number.toString() + ")";  
     else strFailureReason = "GETVALUE of " + argstrVariable.toString() + " failed - " + objError.description + " (" + objError.number.toString() + ")";  

     TRACE(strFailureReason);
         
     if ( ( flagIgnoreError == null ) || ( flagIgnoreError == false ) ) ALERT_MESSAGE(strFailureReason);
    
     return("");      
   }

}

/* ------------------------------------------------------------------------- */
/* VF_SY121_RUNMACRO - Runs a NL macro */
/* ----------------------------------------------------------------------- */ 
function VF_SY121_RUNMACRO(strMacro)
{
    try 
    {
       objNewLook.RunMacro(strMacro);
    }
    catch (objError)
    {
       VF_SY120_SCRIPT_ERROR_HANDLER(objError);
       VF_SY121_INLINE_ERROR_HANDLER("Attempt to execute a macro named " + strMacro + " ended in error." );
    }  

    return; 
} 

/* -------------------------------------------------------------- */
/* VF_SY120_STATECHANGED - Handler of onConnectStateChanged event */
/* -------------------------------------------------------------- */ 

function VF_SY120_STATECHANGED()
{
   /* Status = 0 means disconnected */
   /* Status = 1 means connected to a host */
   /* Status = 2 means connected to a host but busy */
   /* Status = 3 means connected to a host but an error has occured.*/

   var intStatus = TONUMBER( objNewLook.GetValue("App.Status") );

   /* If the status has not changed then get out immediately */

   if (intStatus == GLOBAL_CurrentStatus) return;

   if (GLOBAL_flagTraceModeOn) TRACE("Status changed from", GLOBAL_CurrentStatus.toString(), "to", intStatus.toString() );  

   GLOBAL_CurrentStatus = intStatus;

   /* Switch on the status */

   switch (intStatus)
   {
       case 0: /* Disconnected */
            {
               if (GLOBAL_flagTraceModeOn) TRACE("Server has signalled disconnected");        
               GLOBAL_flagConnected = false;
               VFPROP_Signal("NL_DisConnected", "");
               break;
            }

       case 1:
       case 2:
            {
               if ( !(GLOBAL_flagConnected) )
               { 
                  if (GLOBAL_flagTraceModeOn) TRACE("Server has signalled connected.");        
                  GLOBAL_flagConnected = true;
                  VF_SY121_WAIT_SIGNAL_CONNECTION(); /* Don't wait for the timer, fire the event handler right now */
               } 
               break;
            }

       case 3:
            {
               if (GLOBAL_flagTraceModeOn) TRACE("Server has signalled connected but an error has occured.");        
               break;
            }

       default:
            {
               if (GLOBAL_flagTraceModeOn) TRACE("Server has signalled an unknown connection state ",intStatus.toString());        
               break;
            }
    }
   
    /* Finished */

    return;
}

function DisableKeyPress()
{
   return false;
}
/* ------------------------------------------------------- */
/* VF_BUILD_ARGUMENT_STRING - Convert an array to a string */
/* ------------------------------------------------------- */ 

function VF_BUILD_ARGUMENT_STRING(arrayElements,intStartPos)
{
   var intLimit      = arrayElements.length;
   var intIndex      = 0; 
   var strReturnText = ""; 

   if (intStartPos != null) intIndex = intStartPos; 

   for (   ; intIndex < intLimit; intIndex++) strReturnText += arrayElements[intIndex].toString() + " ";  
   
   return(strReturnText);
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY121_INLINE_ERROR_HANDLER - General inline fatal error handler                 */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY121_INLINE_ERROR_HANDLER(strErrorMessage)
{
   var objError = new Object();

   objError.description = strErrorMessage;
  
   VF_SY120_SCRIPT_ERROR_HANDLER(objError);

   delete(objError);

   return;
}

/* -------------------------------------------------------------------------- */
/* VF_SY120_SCRIPT_ERROR_HANDLER - handle an erro coming from the user script */
/* -------------------------------------------------------------------------- */

function VF_SY120_SCRIPT_ERROR_HANDLER(objError)
{
    var objScriptInstance = VF_SY121_GET_CURRENTSCRIPTINSTANCE(); 

    objGlobalError.strLastErrorDescription = objError.description; 

    if (objScriptInstance != null)
    {
       objScriptInstance.flagFatalError          = true;
       objScriptInstance.strLastErrorDescription = objError.description; 
    }
    
    VF_SY120_ADDMESSAGE(GLOBAL_strFatalMsgType,objError.description);

    if (GLOBAL_flagTraceModeOn) TRACE(objError.description);  

    return; 
}

/* ----------------------------------------------------------- */
/* Clear all messages - Add a message to the messages arrays */
/* ----------------------------------------------------------- */
function VF_SY120_CLEARMESSAGES()
{
   VFPROP_Signal("VF_CLEAR","");  
   return;    
}

/* ----------------------------------------------------------- */
/* VF_SY120_ADDMESSAGE - Add a message to the messages arrays */
/* ----------------------------------------------------------- */
function VF_SY120_ADDMESSAGE(argstrMsgType, argstrMsgText)
{ 
   VFPROP_Signal(("VF_" + argstrMsgType),argstrMsgText); 
   return; 
}

/* ---------------------------------------------------------------------------------------------- */
/* FATAL_MESSAGE_TYPE - Set how users view fatal messages.  Valid values are FATAL, INFO, or HIDE */
/* ---------------------------------------------------------------------------------------------- */
function FATAL_MESSAGE_TYPE(strFatalMsgType)
{
  if (GLOBAL_flagTraceModeOn) TRACE("FATAL_MESSAGE_TYPE invoked with type", strFatalMsgType);
     
  if( (strFatalMsgType != "INFO") && (strFatalMsgType != "HIDE") )
  {
    GLOBAL_strFatalMsgType = "FATAL";
  }
  else
  {
    GLOBAL_strFatalMsgType = strFatalMsgType;
  }

  return;
}

/* --------------------------------------------------------------------------------------- */
/* This allows a RAMP script to make all undefined screens use the Newlook toolbar buttons */
/* --------------------------------------------------------------------------------------- */ 

function OVERRIDE_BUTTONS_UNDEFINED_SCREENS()
{
   if (GLOBAL_flagTraceModeOn) TRACE("Setting Function Key Bar for ALL screens");
   
   GLOBAL_flagShowSBUndefined = true;
   objNewLook.HideToolbars = 67;   
   
   return;
}

/* ------------------------------------------------------------------------- */
/* These are the methods that communicate with VL                            */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_SETPROPERTYSPLITTER()
{
   GLOBAL_strPropertySplitter = document.getElementById("VFPROP_Exchange1").innerText;
}

function VFPROP_Initialize()
{
    if (objVFPROP_Exchange1 == null)
    {  
       objVFPROP_Exchange1    = document.getElementById("VFPROP_Exchange1");
       objVFPROP_Exchange2    = document.getElementById("VFPROP_Exchange2");
       objVFPROP_LastTransact = document.getElementById("VFPROP_LastTransAct");
       objVFPROP_ExchangeIdn  = document.getElementById("VFPROP_ExchangeIdn");
       objVFPROP_ExchangeIns  = document.getElementById("VFPROP_ExchangeIns");
       objVFPROP_ExchangeVal  = document.getElementById("VFPROP_ExchangeVal"); 
       if (objVFPROP_Exchange1 == null) alert("Failed to load VFPROP_Exchange elements correctly"); 
    }
    return; 
}
 
/* Get a property value */

function VFPROP_Get(strId,intInstance,flagReturnNull)
{
   if (flagReturnNull == null) flagReturnNull = false;

   VFPROP_Initialize(); 
   {
      var strKey   = strId.toUpperCase() + "." +  intInstance.toString();        
      var strValue = arrayVFPROP[strKey];  
      if (strValue == null) 
      {
         if (flagReturnNull) return(null);
         else                return("");
      }
      else
      {
         return(strValue);
      }         
   }       
}

/* Set a property value */

function VFPROP_Set(strId,intInstance,strValue)
{
   VFPROP_Initialize();
  
   {
      var strKey   = strId.toUpperCase() + "." + intInstance.toString();
      arrayVFPROP[strKey] = strValue;     
   }        
 
   return;   
}
 
/* Get a property value for a VL routine */

function VFPROP_Get_VL(strId,intInstance)  
{
   objVFPROP_Exchange1.innerText = VFPROP_Get(strId,intInstance); 
   return;
}  

/* Set a property value for a VL routine */ 

function VFPROP_Set_VL(strId,intInstance)  
{
   VFPROP_Initialize(); 
   VFPROP_Set(strId,intInstance,objVFPROP_Exchange1.innerText);  
   return;    
}  

/* Set a property value for a VL routine */ 

function VFPROP_Set_VL_Multiple()  
{
   VFPROP_Initialize(); 

   {
      var arrayIdn = objVFPROP_ExchangeIdn.innerText.split(GLOBAL_strPropertySplitter);
      var arrayIns = objVFPROP_ExchangeIns.innerText.split(GLOBAL_strPropertySplitter);
      var arrayVal = objVFPROP_ExchangeVal.innerText.split(GLOBAL_strPropertySplitter); 
      var intIndex = 0;  
      var intLimit = arrayIdn.length - 2;      

      for (intIndex = 0; intIndex <= intLimit; intIndex++)
      {
         VFPROP_Set(arrayIdn[intIndex],parseInt(arrayIns[intIndex],10),arrayVal[intIndex]);   
      }
        
      delete(arrayIdn); 
      delete(arrayIns); 
      delete(arrayVal); 
   } 
 
   return;  
}  

/* Signal into the VL code */

function VFPROP_Signal(strEventId,strEventPayLoad)
{
   /* Initialize */ 
     
   VFPROP_Initialize(); 

   /* Handle .NET */ 

   if (GLOBAL_flagNETMODEExecute)
   {         
      window.external.VF_SY503_PRIVATE_HandleRampEvent(window, strEventId, strEventPayLoad, GLOBAL_int503AssignedNum);
   }

   /* Handle web browser */ 

   else if (GLOBAL_flagWEBMODEExecute) 
   {
      GLOBAL_VF_SY120_Parent.VF_SY503_PRIVATE_HandleRampEvent(window, strEventId, strEventPayLoad, GLOBAL_int503AssignedNum);
   }

   /* else handle windows environment */ 

   else
   {
       var objSignal = new Object();

       /* Queue the signal object cleanly */ 

       objSignal.strId         = strEventId;
       objSignal.strPayLoad    = strEventPayLoad;
       objSignal.objNextSignal = null;

       if (GLOBAL_objStartSignalQueue == null) GLOBAL_objStartSignalQueue = objSignal;
       
       if (GLOBAL_objEndSignalQueue != null  ) GLOBAL_objEndSignalQueue.objNextSignal = objSignal; 

       GLOBAL_objEndSignalQueue = objSignal;
 
       /* Fire the signalling event */  
    
       intVFPROP_LastTransact++;
       
       if (intVFPROP_LastTransact > 9999999) intVFPROP_LastTransact = 1;  

       /* Fire the signal to the HTML form container or, if running in Browser, to the VF_SY503 */

       objVFPROP_LastTransact.innerText = intVFPROP_LastTransact.toString();  
   
       window.document.title = "<<VLF_SIGNAL>>";  
   
   } 

   /* Finished */

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_Set_BROWSER_Globals - Set some global variables used when running in the browser */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_Set_BROWSER_Globals(argstrId, argflagInOwnWindow)
{
   GLOBAL_strRAMP_Instance_Id = argstrId;
   
   /* Very important: this is related to the <param name="TimeOut" value="0"> in vf_sy120.htm  */   
   /* The timeout of 0 (seconds) is required so that when a RAMP command opens in a new window, the Newlook server job */   
   /* is terminated when we close the command window. However, it was found that with the August 06 build, this was */   
   /* upsetting tab folder commands only when after running a RAMP cmd in a tab in the main window, we clicked on a  */      
   /* different application or bob and then came back to run the cmd. VF_SY120_GETCURRENTFORM would through an error */               
   /* when getting the ActiveForm.Name. The solution is to leave the timeout as 0 but when the command doesn't run */
   /* in its own window, set the timeout to the default value of 600. */
   
   if (!(argflagInOwnWindow)) 
   {
      objNewLook.Timeout = 600;
   }
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_AddBrowserMessages - Add message to the hidden div */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_AddBrowserMessage(strHTML)
{
   var objErrorDiv = document.getElementById("VF_SY120_Errors");

   if (objErrorDiv != null) objErrorDiv.insertAdjacentHTML("beforeEnd", strHTML);
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_ShowBrowserMessages - Show messages */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_ShowBrowserMessages()
{
   var objErrorDiv = document.getElementById("VF_SY120_Errors");

   if (objErrorDiv != null) objErrorDiv.style.display = "block";
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_ClearBrowserMessages - Hides messages */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_ClearBrowserMessages()
{
   var objErrorDiv = document.getElementById("VF_SY120_Errors");

   if (objErrorDiv != null)
   {
      objErrorDiv.style.display = "none";
      objErrorDiv.innerHTML = "";
   }

}

/* ------------------------------------------------------------------------- */
/* VF_SY120_GETCURRENTFORM - Gets the name of the current Newlook form and returns it */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_GETCURRENTFORM(argflagIgnoreError)
{
   var strActiveForm = "";
   var flagIgnoreError = ((argflagIgnoreError != null) && (argflagIgnoreError));

   try 
   { 
      strActiveForm = objNewLook.GetValue("ActiveForm.Name"); 
      return(strActiveForm);  
   }
   catch (objError) 
   { 
      if (!(argflagIgnoreError))
      {
         var strCallerFunction = VF_SY120_GETCURRENTFORM.caller.toString();
         var strFailureReason  = "";  
         strCallerFunction = strCallerFunction.substring(strCallerFunction.indexOf(" "),strCallerFunction.indexOf("("));
         strFailureReason = "Call to VF_SY120_GETCURRENTFORM() by " + strCallerFunction + " failed with error - " + objError.description + " (" + objError.number.toString() + ")"; 
         TRACE(strFailureReason);
         ALERT_MESSAGE(strFailureReason);      
      } 
      return("");    
   }   

}

/* --------------------------------------------------------------- */
/* VF_SY121_CHECKACTIVEFORM - Test to see if an active form exists */
/* --------------------------------------------------------------- */ 

function VF_SY121_CHECKACTIVEFORM()
{
   try 
   { 
      var strActiveForm = objNewLook.GetValue("ActiveForm.Name"); 
      return(true); 
   }     
   catch (objError) { }
   
   return(false);       
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_HANDLE_LOGON_LOGOFF - Handle logon/off state                      */
/* ------------------------------------------------------------------------- */ 
function VF_SY121_HANDLE_LOGON_LOGOFF()
{
   var strArrivedForm = ""; 
 
   /* Do a low level extraction of the form name and get out if an error is trapped */ 
  
   try              { strArrivedForm = objNewLook.GetValue("ActiveForm.Name"); }
   catch (objError) { strArrivedForm = ""; }  

   /* If the screen has a name */   

   if ((strArrivedForm != "") && (arrayobjSpecialsbyScreenName[strArrivedForm] == null))
   {
      /* If there is no recorded log on screen name yet then the arrived screen name must be the log on screen name */ 

      if (GLOBAL_strLogonScreenName == "")  
      {
         GLOBAL_strLogonScreenName = strArrivedForm;
         if (GLOBAL_flagTraceModeOn) 
         {
            TRACE(GLOBAL_strLogonScreenName,"has been set as the signon/off form");
            TRACE("** Note: if",GLOBAL_strLogonScreenName,"is NOT the correct signon/off form then you are using an OS/400 or Newlook automatic sign on, which is not valid in RAMP applications.");
         }    
      }     

      /* If not already logged on and the arrived form is not screen name then we must now be loggied on */ 
      /* However, if we are already logged on and this is the logon session then we must have signed off */ 
  
      if (GLOBAL_flagSessionSignedOn) /* Already logged on */ 
      {
         if (strArrivedForm == GLOBAL_strLogonScreenName) 
         {
            GLOBAL_flagSessionSignedOn = false;
            VFPROP_Signal("NL_SignOff",""); 
            if (GLOBAL_flagTraceModeOn) TRACE("Session has now been set as logged off");
         }  
      }
      else /* Have not logged on yet */
      {
         if (strArrivedForm != GLOBAL_strLogonScreenName) 
         {
            GLOBAL_flagSessionSignedOn = true;
            VFPROP_Signal("NL_SignOn",""); 
            if (GLOBAL_flagTraceModeOn) TRACE("Session has now been set as logged on");
         }     
      }
   } 

   /* Finished */

   return(strArrivedForm); 
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_ONTITLECHANGED - A new NL form has arrived  */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_ONTITLECHANGED()
{  
   /* Handle logon/logoff screen tracking */

   VF_SY121_HANDLE_LOGON_LOGOFF();

   /* If allowed, process the arrived form */ 

   if (GLOBAL_flagConnected && GLOBAL_flagOnTitleChangedEventEnabled)
   { 
      VF_SY120_HANDLEARRIVEDFORM();
   }

   VF_SY120_SENDSTATE_GO("ONTITLECHANGED finished");

   return;
}

function VF_SY120_ONRECEIVED()
{
   VF_SY120_SENDSTATE_GO("OnReceived");
}

function VF_SY120_ONREFRESHED()
{
   VF_SY120_SENDSTATE_GO("OnRefreshed");   
}

function VF_SY120_SENDSTATE_GO(sCaller)
{
   if (GLOBAL_flagTraceModeOn) 
   {
      var sPrevState = VF_SY121_GETNL_VALUE("V_SendSTATE",true);
      /* TRACE("SENDSTATE_GO called by", sCaller, ". Setting to", GLOBAL_V_SendGO, "Previous value", sPrevState);   */
   }
   
   VF_SY121_SETNL_VALUE("V_SendSTATE",GLOBAL_V_SendGO,false,true);  
}

function VF_SY120_SENDSTATE_STOP(sCaller)
{
   if (GLOBAL_flagTraceModeOn) 
   {
      var sPrevState = VF_SY121_GETNL_VALUE("V_SendSTATE",true);
      /* TRACE("Send State set to", GLOBAL_V_SendSTOP, "Previous value", sPrevState);  */
   }
   
   VF_SY121_SETNL_VALUE("V_SendSTATE",GLOBAL_V_SendSTOP,false,true);  
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_HANDLEARRIVEDFORM - Newlook screen arrival processing  */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_HANDLEARRIVEDFORM()
{
   var strArrivedForm = ""; 
 
   /* Do a low level extraction of the form name and get out if an error is trapped */ 
  
   try              { strArrivedForm = objNewLook.GetValue("ActiveForm.Name"); }
   catch (objError) { VF_SY120_SENDSTATE_GO("HANDLEARRIVED catch"); return; }      
   
   if (GLOBAL_NL_BackColor != "")
   {
      VF_SY121_SETNL_VALUE("ActiveForm.BackColor",GLOBAL_NL_BackColor,false,true);  
   } 
               
   /* If we get to hear then proceed with normal processing */ 

   {
       var int_V_SendCount    = VF_SY121_GETNL_VALUE("V_SendCount")
       var int_V_ReceiveCount = VF_SY121_GETNL_VALUE("V_ReceiveCount")

       /* If the send count has not changed then this is phantom form that should be ignored */

       if ( (int_V_SendCount == GLOBAL_V_SendCount) && (int_V_ReceiveCount == GLOBAL_V_ReceiveCount) ) 
       {
          VF_SY120_SENDSTATE_GO("HANDLEARRIVED ghost"); 
          return;
       }
                             
       GLOBAL_V_SendCount    = int_V_SendCount;  
       GLOBAL_V_ReceiveCount = int_V_ReceiveCount; 

       /* Increment and roll over the form transition sequence number ... this indicates the form has logically changed */
   
       GLOBAL_intCurrentFormSequence++;   
   
       if (GLOBAL_intCurrentFormSequence > 9999999) GLOBAL_intCurrentFormSequence = 1;

       var strScreenNLType = "Screen";
         
       if (objNewLook.GetValue("ActiveForm.PopUp") == -1)
       {
         strScreenNLType = "PopUp";
       }

       /* Trace */       
       if (GLOBAL_flagTraceModeOn) 
       {
           TRACE(strScreenNLType + " named",strArrivedForm,"has arrived and is being processed");
       }

       /* Rest the current node reference and session details */ 

       GLOBAL_objCurrentNode = null;

       /* Unlock the framework */   

       VF_SY121_UNLOCKFRAMEWORK(strArrivedForm);

       /* Important - since we moved the formatting of the buttons to inside the "if this is a cherry" logic, must set the key count to 0. Prevously format buttons was called unconditionally */
       
       VFPROP_Set("EnabledKey.Count",1,"0"); 
       
       /* Is it a Cherry, Junction, Special or unknown? */

       while (true)
       {
           /* ------------------- */
           /* An arrived junction */
           /* ------------------- */
       
           if ( arrayobjJunctionsbyScreenName[strArrivedForm] != null) 
           {
              if (GLOBAL_flagTraceModeOn) TRACE(strScreenNLType + " named",strArrivedForm,"has identified as a junction form. Function keys will be left unchanged");
              
              GLOBAL_objCurrentNode = arrayobjJunctionsbyScreenName[strArrivedForm];
              break; 
           }

           /* ------------------- */
           /* An arrived cherry   */
           /* ------------------- */
       
           if (arrayobjCherriesbyScreenName[strArrivedForm] != null) 
           {
              GLOBAL_objCurrentNode = arrayobjCherriesbyScreenName[strArrivedForm];

              var flagSaveTitleChanged = GLOBAL_flagOnTitleChangedEventEnabled;

              GLOBAL_flagOnTitleChangedEventEnabled = false;
             
              if (GLOBAL_flagTraceModeOn) TRACE(strScreenNLType + " named",strArrivedForm,"has identified as a destination form.");

              if ( GLOBAL_flagShowSBUndefined ) 
              {
                 if (GLOBAL_flagTraceModeOn) TRACE("Resetting Mask");                  
                 VFPROP_Signal("ResetMask");
              }

              /* We only keep the last 20 cherries */ 

              if (GLOBAL_intPrevDestTrackInd >= GLOBAL_intMaxPrevDest ) GLOBAL_intPrevDestTrackInd = 0;
              
              arraystrPreviousDestinations[GLOBAL_intPrevDestTrackInd] = strArrivedForm;

              GLOBAL_intPrevDestTrackInd++;
              
              GLOBAL_flagOnTitleChangedEventEnabled = flagSaveTitleChanged; 

              /* Format the buttons as appropriate for each screen type */
              VF_SY121_FORMATBUTTONS(GLOBAL_objCurrentNode, strArrivedForm);
                            
              break;      
           }

           /* ------------------- */
           /* An arrived special  */
           /* ------------------- */
       
           if (arrayobjSpecialsbyScreenName[strArrivedForm] != null) 
           {
              if (GLOBAL_flagTraceModeOn) TRACE(strScreenNLType + " named",strArrivedForm,"has identified as a special form. Function keys will be left unchanged");
              GLOBAL_objCurrentNode = arrayobjSpecialsbyScreenName[strArrivedForm];
              VF_SY121_HANDLESPECIAL();
              break; 
           }

           /* ------------------- */
           /* Something undefined */
           /* ------------------- */
         
           {
              if (GLOBAL_flagTraceModeOn) TRACE(strScreenNLType + " named",strArrivedForm,"is a 5250 screen not defined to the framework. Function keys will be left unchanged");

              if (GLOBAL_flagHandlingRamp) /* as opposed to Chums */
              {
                  if ( (GLOBAL_flagShowSBUndefined) && (strScreenNLType != "PopUp") ) 
                  {
                     if (GLOBAL_flagTraceModeOn) TRACE("Removing Mask for Non Pop Up undefined");                  
                     VFPROP_Signal("RemoveMask");
                  }

                  VF_SY120_FORCE_POPUP_REFRESH();
                  VF_SY121_LOCKFRAMEWORK(strArrivedForm);
              }
              else 
              {
                  VFPROP_Signal("VF_UNKNOWN_FORM", "Screen named " + strArrivedForm + " is a 5250 screen not defined to the framework.");
              }

             break; 
           }

       }

       /* If this form arrival is not under full management then signal back the arrival to VF_SY120 */
  
       if ( !(GLOBAL_flagManagedUIEvent) && (GLOBAL_flagHandlingRamp) ) 
       {
         VF_SY120_CLEARMESSAGES(); /* 133740 - clear messages for unmanaged sessions */
         VFPROP_Signal("UserInit","");   
       }
   }

   /* Get any messages sent to the workstation */
   {
      var strMessage = VF_SY121_GETNL_VALUE("ActiveForm.Message");
      if (strMessage != "") VF_SY120_ADDMESSAGE("INFO",strMessage); 
   }
   
   /* Finished */ 

   VF_SY120_SENDSTATE_GO("HANDLEARRIVED end");
      
   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_RESET_CHERRY_FUNCTIONKEYS - Resets the cherry buttons            */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_RESET_CHERRY_FUNCTIONKEYS(flagKeyEnabled,flagMacrosEnabled)
{
   var objCherry = arrayobjCherriesbyScreenName[VF_SY120_GETCURRENTFORM()];  

   if (objCherry != null)
   {
      var i = 0;
      var j = objCherry.arraystrDisabledNLFunctionKey.length;
      var strintI = ""; 

      for (i = 0; i < j; i++)
      {
         strintI = objCherry.arraystrDisabledNLFunctionKey[i];
         VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").SendKey", flagKeyEnabled);
         VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").Enabled", flagKeyEnabled);
      } 

      j = objCherry.arraystrEnabledNLFunctionKey.length;

      for (i = 0; i < j; i++)
      {
         strintI = objCherry.arraystrEnabledNLFunctionKey[i];
         
         if (flagMacrosEnabled) 
         {
            var strMacro = objCherry.arraystrEnabledNLFunctionKeyMacro[strintI];

            VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OnClick", strMacro);
         }
         else 
         {
            VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OnClick",(strDoubleQuote + "" + strDoubleQuote), true); 
         }
      } 
   }
  
   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_FORMATBUTTONS - Format the buttons for display                   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_FORMATBUTTONS(objCherry, strCurrentForm)
{
   if (!(GLOBAL_flagHandlingRamp)) 
   {
      objCherry.arraystrDisabledNLFunctionKey.length = 0;
      objCherry.arraystrEnabledNLFunctionKey.length  = 0;
      return; /* No button handling for Chums because they are invisible */
   }
   
   var intEnabledKeyCount = 0; 
   var objFunctionKey     = null;

   /* Check and set all VLF enabled keys */
   var strVLFEnaBtnsTrace = " ";
   
   delete(arrayKeySequences);
   delete(arrayKeyCapsBySeq);
   delete(arrayClickedKeyIndexes);
            
   arrayKeySequences = new Array();
   arrayKeyCapsBySeq = new Array();
   arrayClickedKeyIndexes = new Array();
   
   VFPROP_Set("VLF_Button.CheckVisible",1,GLOBAL_sCheckButtonVisible);    
   
   for (Identifier in objCherry.aFK)
   {
      /* If allowed in the VLF */   
     
      objFunctionKey = objCherry.aFK[Identifier]; 
      if (objFunctionKey.fKEVLF) 
      {  
          intEnabledKeyCount++; 
          VFPROP_Set("EnabledKey.Caption",intEnabledKeyCount,objFunctionKey.KC); 
          VFPROP_Set("EnabledKey.KeySequence",intEnabledKeyCount,objFunctionKey.KSEQ);
          VFPROP_Set("EnabledKey.KeyCode",intEnabledKeyCount,Identifier);          
          arrayobjEnabledFunctionKeyIndex[intEnabledKeyCount] = objFunctionKey;                    
          arrayKeySequences[intEnabledKeyCount - 1] = parseInt(objFunctionKey.KSEQ,10);
          arrayKeyCapsBySeq[parseInt(objFunctionKey.KSEQ,10)] = objFunctionKey.KC;
          arrayClickedKeyIndexes[parseInt(objFunctionKey.KSEQ,10)] = intEnabledKeyCount;          
          strVLFEnaBtnsTrace += objFunctionKey.KS + " ";
      } 
   }

   var intNLKeyCount = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys.Count") );

   if (GLOBAL_flagTraceModeOn) TRACE("Screen named",strCurrentForm,"is a destination so function keys are being set.");

   objCherry.arraystrDisabledNLFunctionKey.length = 0;
   objCherry.arraystrEnabledNLFunctionKey.length  = 0;
   var strDisFkeyTrace = " ";
   var strEnaFkeyTrace = " ";
   var intNLFkeyDis = 0;
   var intNLFkeyEna = 0;
       
   for (intI = 0; intI < intNLKeyCount; intI++)
   {
      var strintI  = intI.toString();
      var intKeyId = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OutputKey",true) ); 
      var objKey   = GLOBAL_arrayobjKeybyId[intKeyId]; 

      if (objKey != null)
      { 
          objFunctionKey = objCherry.aFK[objKey.strKeyCode]; 

          if (objFunctionKey == null) objFunctionKey = GLOBAL_NULL_FunctionKey;  

          arrayobjEnabledFunctionKeyStroke[objKey.strKeyCode] = null;

          /* If VLF definition says not allowed in newlook then stop it being used in Newlook */ 

          if ( !(objFunctionKey.fKENL) )
          {
             VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").SendKey", false, false, true);
             VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").Enabled", false, false, true);
             objCherry.arraystrDisabledNLFunctionKey[objCherry.arraystrDisabledNLFunctionKey.length] = strintI;  
             strDisFkeyTrace += objKey.strKeyCode + " ";
             intNLFkeyDis++;
          }   
          else
          {
             var strMacro = "VF_Macro." + objKey.strMacro; 
             VF_SY121_SETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OnClick",strMacro, false, true);
             arrayobjEnabledFunctionKeyStroke[objKey.strKeyCode] = objFunctionKey;
             objCherry.arraystrEnabledNLFunctionKey[objCherry.arraystrEnabledNLFunctionKey.length] = strintI;  
             objCherry.arraystrEnabledNLFunctionKeyMacro[strintI] = strMacro;  
             
             strEnaFkeyTrace += objFunctionKey.KS + " ";
             intNLFkeyEna++;
         }
      } 
   } 
       
   if (GLOBAL_flagTraceModeOn)  
   {
      TRACE(("Button/Function Key Summary: " + intEnabledKeyCount.toString() + " buttons enabled for this Destination =>" + strVLFEnaBtnsTrace));
      var strTraceLine = "Number of Function Keys in destination = " + intNLKeyCount.toString();
      strTraceLine += " DISABLED:";
      if (intNLFkeyDis > 0) { strTraceLine += strDisFkeyTrace + "."; } else { strTraceLine += "None."; }
      strTraceLine += " ENABLED:";
      if (intNLFkeyEna > 0) { strTraceLine += strEnaFkeyTrace + "."; } else { strTraceLine += "None."; }
      TRACE(strTraceLine);
   }   

   TRACE( "Finish formatting buttons for Screen Named", VF_SY121_GETNL_VALUE("ActiveForm.Name") );
  
   /* Set the enablement count */ 

   VFPROP_Set("EnabledKey.Count",1,intEnabledKeyCount.toString()); 

   /* Finished */ 

   return;   
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_BUTTON_CLICKED() - onclick handler for Function Keys             */
/*    NOTE : This routine is called internally and from VF_SY120 in VL code  */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_BUTTON_CLICKED()
{
   var objFunctionKey = null;

   /* reset the Signal count */
   GLOBAL_intSignalCount = 0 ; 

   GLOBAL_flagTraceModeOn = (VFPROP_Get("objFramework.TraceMode",1) == "TRUE"); 
      
   /* Get the function key. If Btn click (VL vf_sy120 or Web vf_sy503), use clickedkey.index, else a function key was pressed. See VF_SY121_CHECK_FUNCTIONKEYUSAGE()*/
   
   if (VFPROP_Get("HowTo.GetKey",1) == "USE_INDEX") 
   {
      objFunctionKey = arrayobjEnabledFunctionKeyIndex[ parseInt(VFPROP_Get("ClickedKey.Index",1),10) ];
      if (GLOBAL_flagTraceModeOn) TRACE("Button with caption",objFunctionKey.KC,"was clicked.");  
   }
   else 
   {
      objFunctionKey = arrayobjEnabledFunctionKeyStroke[ VFPROP_Get("ClickedKey.Keystroke",1) ];
      if (GLOBAL_flagTraceModeOn) TRACE("Function key",objFunctionKey.KS,"used from within Newlook form.");        
   }
    
   /* If the function key can be resolved */

   if (objFunctionKey != null)
   {
       var objCherry = objFunctionKey.objCherry;
      
       if ((objCherry != null) && (objCherry == GLOBAL_objCurrentNode))  
       {

          VF_SY120_SENDSTATE_GO("BUTTON CLICKED");

          GLOBAL_flagManagedUIEvent = true;

          VF_SY120_SET_SHOWFORM(false); 

           /* If the is no script them simply send the key */

          if (objCherry.uButtonScript == "") 
          {
             VF_SY121_SENDKEY(objFunctionKey.KS); 
          }
          else
          {
             VF_SY121_EXECUTESCRIPT(objCherry.uButtonScript,objFunctionKey.KS); 
          } 

          /* Show the result */ 

          VF_SY120_SET_SHOWFORM(true);
         
          GLOBAL_flagManagedUIEvent = false;
       }
   }

   /* Finished */ 

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_GETNL_INTVALUE - Reeturns the Newlook value as an integer */
/* ------------------------------------------------------------------------- */ 
function VF_SY121_GETNL_INTVALUE(argintNumber)
{
   return parseInt(VF_SY121_GETNL_VALUE(argintNumber), 10);
}

/* ------------------------------------------------------------------------- */
/* HANDLE_PROMPT - If the currently active field has a prompter, do it       */
/* ------------------------------------------------------------------------- */ 

function HANDLE_PROMPT()
{
   var strPromptField = VF_SY121_GETNL_VALUE("ActiveControl.Name",true); /* Ignore any error, will return "" on an error */
   var flagDoPrompt = false;

   /* Typically, if there are no input fields in a form there will be no Active Control */
   
   if ((typeof(strPromptField) == "string") && (strPromptField != ""))
   {
      var arrayArguments = arguments;
      var intArgLength   = arrayArguments.length;

      strPromptField = strPromptField.toUpperCase();

      /* Does this field have prompting? If yes, check whether the function key associated with the prompter is the same the one that was used and */
      /* that the field has a handler */
      
      var strArrayKey = strPromptField + VF_SY121_GET_CURRENTSCRIPTINSTANCE().FunctionKeyUsed;

      if (typeof (objNodeGroup.arrayobjSpecialFields[strArrayKey]) != "undefined")
      {
         var objField = new Object();
         objField = objNodeGroup.arrayobjSpecialFields[strArrayKey];
      
         if ( objField.uHandler != "") 
         {
            var intTop = VF_SY121_GETNL_INTVALUE("ActiveControl.top") + objNewLook.clientTop + document.body.clientTop;
            var intLeft = VF_SY121_GETNL_INTVALUE("ActiveControl.Left") + objNewLook.clientLeft + document.body.clientLeft;

            VFPROP_Set("uPrompt.FormName",1,VF_SY120_GETCURRENTFORM());
            VFPROP_Set("uPrompt.Name",1,strPromptField);
            VFPROP_Set("uPrompt.Key",1,objField.uKey);
            VFPROP_Set("uPrompt.Handler",1,objField.uHandler);  
            VFPROP_Set("uPrompt.Left",1,intLeft.toString());
            VFPROP_Set("uPrompt.Top",1, intTop.toString());
            VFPROP_Set("uPrompt.Width",1, ( VF_SY121_GETNL_VALUE("ActiveControl.Width")).toString());
            VFPROP_Set("uPrompt.Height",1, ( VF_SY121_GETNL_VALUE("ActiveControl.Height")).toString());

            /* Now get the optional parameters if any */
            for (var intI = 0; intI < intArgLength; intI++)
            {  
               VFPROP_Set("uField.Name",intI + 1,"UARG" + (intI + 1));
               VFPROP_Set("uField.Value",intI +1,arrayArguments[intI].toString());
            }

            VFPROP_Set("uArguments.Total",1,arrayArguments.length);         

            VFPROP_Signal("uDoPrompt", "");
            flagDoPrompt = true;
         }
      }  
   }

   return(flagDoPrompt);
}

/* ------------------------------------------------------------------------------------------------ */
/* VF_SY121_GETFORMFIELDS - Get all the fields in the current form with a name and post them to VL  */
/* ------------------------------------------------------------------------------------------------ */ 
function VF_SY121_GETFORMFIELDS()
{
   var intControls = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count") );
   var intI = 0;
   var strFieldName = "";
   var strFieldValue = "";
   var intCounter = parseInt(VFPROP_Get("uArguments.Total",1),10);
   
   for (intI = 0; intI < intControls; intI++)
   {  
     strFieldName = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intI + ").Name");

      if ( strFieldName != "" ) 
      {
         intCounter++;
         strFieldValue = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intI + ").Text", true);

         VFPROP_Set("uField.Name",intCounter,strFieldName.toUpperCase());
         VFPROP_Set("uField.Value",intCounter,strFieldValue);
      }     
   }

   VFPROP_Set("uField.Total",1,intCounter.toString());
}

/* ------------------------------------------------------------------------------------------------ */
/* VF_SY121_SET_FORMFIELD - Set the value of a field in a newlook form  */
/* ------------------------------------------------------------------------------------------------ */ 
function VF_SY121_SET_FORMFIELD()
{
   var strFieldName = VFPROP_Get("uField.Name",1).toUpperCase();
   var strFieldValue = VFPROP_Get("uField.Value",1);

   /* if the field is not an input box, ignore. Also, Newlook ignores the request if the field doesn't exist in the form*/
   if ( TONUMBER(VF_SY121_GETNL_VALUE(strFieldName + ".Type")) == CtrlTextBox)
   {
      VF_SY121_SETNL_VALUE(strFieldName + ".Text", strFieldValue);
   }
}

function ADD_UNKNOWN_FORM_GUESS(strKey)
{
   GLOBAL_arraySendKeyAttempts[GLOBAL_arraySendKeyAttempts.length] = strKey;
}

/* --------------------------------------------------------------------------------------------- */
/* VF_SY120_ATTEMPTDROPLOCK - Special case where users set some keys they want to send for undefined screens */
/* --------------------------------------------------------------------------------------------- */ 
function VF_SY120_ATTEMPTDROPLOCK()
{
   var flagLocked = objNodeGroup.flagLockUnknown;
   
   if (GLOBAL_flagTraceModeOn) TRACE("Attempting to Drop Lock");   
   
   if (flagLocked)               
   {  
      if ( VF_SY120_IS_DEF_CURR_FORM() ) /* if the current form is defined, no locking */
      {
         if (GLOBAL_flagTraceModeOn) TRACE("Form Known, no lock required");   
         flagLocked = false;
      }         
      else  
      {
         for (i = 0; ( ( i < GLOBAL_arraySendKeyAttempts.length ) && ( flagLocked ) ); i++)
         {
            if (GLOBAL_flagTraceModeOn) TRACE("Attempt to Drop Lock: Sending Key ",GLOBAL_arraySendKeyAttempts[i]); 
            SENDKEY(GLOBAL_arraySendKeyAttempts[i]);
            VF_SY121_HANDLESPECIAL();
            if ( VF_SY120_IS_DEF_CURR_FORM() ) flagLocked = false;    
         }  
      }
   }      

   /* At completion always set a property to respond with locked state right now */

   if (flagLocked) 
   {
      VFPROP_Set("HandleUnknown.Locked",1,"TRUE");
      if (GLOBAL_flagTraceModeOn) TRACE("Attempt do Drop lock unsuccessful");   
   }
   else 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("Attempt do Drop lock successful");   
      VFPROP_Set("HandleUnknown.Locked",1,"FALSE");
      VF_SY120_CLEARMESSAGES();
   }

}

/* ------------------------------------------------------------------------- */
/* VF_SY120_IS_DEF_CURR_FORM - Check whether the current form is defined or not */
/* ------------------------------------------------------------------------- */ 
function VF_SY120_IS_DEF_CURR_FORM()
{
   var strCurrentForm = VF_SY120_GETCURRENTFORM(true);
   if (( arrayobjJunctionsbyScreenName[strCurrentForm] != null) || (arrayobjCherriesbyScreenName[strCurrentForm] != null ) )
   {
      return true;
   }
   
   return false;
}
 
/* ------------------------------------------------------------------------- */
/* VF_SY121_LOCKFRAMEWORK - A new NL form has arrived  */
/* ------------------------------------------------------------------------- */ 
function VF_SY121_LOCKFRAMEWORK(argstrArrivedForm)
{
   if ((objNodeGroup.flagLockUnknown) && (!GLOBAL_flagFrameworkLocked)) 
   {
      GLOBAL_flagFrameworkLocked = true;
      VFPROP_Signal("LockFramework",GLOBAL_strLockMessage);
   }

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_UNLOCKFRAMEWORK - A new NL form has arrived  */
/* ------------------------------------------------------------------------- */ 
function VF_SY121_UNLOCKFRAMEWORK()
{
   if ((objNodeGroup.flagLockUnknown) && (GLOBAL_flagFrameworkLocked)) 
   {
      GLOBAL_flagFrameworkLocked = false;
      VFPROP_Signal("UnLockFramework","");
   }

   return;
}

/* ------------------------------------------------------------------------- */
/* SET_LOCK_MESSAGE - User defined lock message  */
/* ------------------------------------------------------------------------- */ 
function SET_LOCK_MESSAGE(strMessage)
{
   GLOBAL_strLockMessage = strMessage; 
   if (GLOBAL_flagTraceModeOn) TRACE("Lock message set to ",GLOBAL_strLockMessage);   
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_HANDLESPECIAL - A new NL form has arrived  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_HANDLESPECIAL()
{
   var objSpecial = arrayobjSpecialsbyScreenName[ VF_SY120_GETCURRENTFORM(true) ];

   if ( (objSpecial != null) && (objSpecial != "") ) VF_SY121_EXECUTESCRIPT(objSpecial.objELIMINATEScript.uIdentifier);  
   
   return;
}


/* ---------------------------------------------------------------------------------- */
/* GET_MENU_OPTION_NUMBER() - Try to locate a menu option number                      */
/* ---------------------------------------------------------------------------------- */ 

var GLOBAL_arrayDynamicMenuItems = new Array();

function GET_MENU_OPTION_NUMBER(strSearchText,flagParmCaseInsensitive,flagParmTryPreceding)  
{
   var strReturnOptionNumber = ""; 
   var strCurrentForm        = VF_SY120_GETCURRENTFORM(); 
   var flagCaseInsensitive   = ((flagParmCaseInsensitive == null) || (flagParmCaseInsensitive == true));

   if (flagCaseInsensitive) strSearchText = strSearchText.toUpperCase(); 

   if (GLOBAL_flagTraceModeOn) TRACE("GET_MENU_OPTION_NUMBER executed. Looking for menu option",strSearchText,"in screen named",strCurrentForm);      

   strReturnOptionNumber = GLOBAL_arrayDynamicMenuItems[strCurrentForm + "-" + strSearchText];    

   if ( strReturnOptionNumber != null) 
   {
      if (GLOBAL_flagTraceModeOn) TRACE("GET_MENU_OPTION_NUMBER found previously cached match for",strSearchText,"and is returning menu option number",strReturnOptionNumber);      
   }
   else
   {  
       var flagTryPreceding      = ((flagParmTryPreceding    == null) || (flagParmTryPreceding    == true));
       var intControls           = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count") );
       var intI                  = 0;  
       var strPrecedingLabelText = "";   

       strReturnOptionNumber = ""; /* Reset default from a null value */ 

       for (intI = 0; intI < intControls; intI++)
       {  
           var strintI = intI.toString();  
           var intType = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Type") ); 

           if (intType == 4) /* A label field */
           {
              var intPos = 0; 
              var strLabelText = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Caption");  
           
              /* Optionally convert to uppercase */

              if (flagCaseInsensitive) strLabelText = strLabelText.toUpperCase(); 
     
              /* See is search string is contained in the label */

              intPos = strLabelText.indexOf(strSearchText); 
          
              /* If it is then we have found the match */
         
              if (intPos >= 0)
              {
                 /* Try and strip some numbers from the start of the label */  

                 strReturnOptionNumber = STRIP_LEADING_NUMBERS(strLabelText);  
                   
                 /* If no numbers were stripped and we are allowed to try the rpeceding label then try it */ 

                 if ((strReturnOptionNumber == "") && (flagTryPreceding)) strReturnOptionNumber = STRIP_LEADING_NUMBERS(strPrecedingLabelText);     

                 /* Cache the return value that was stripped and then return it */ 

                 GLOBAL_arrayDynamicMenuItems[strCurrentForm + "-" + strSearchText] = strReturnOptionNumber;     

                 if (GLOBAL_flagTraceModeOn) TRACE("GET_MENU_OPTION_NUMBER found",strSearchText,"and is returning menu option number",strReturnOptionNumber);      

                 return(strReturnOptionNumber);    
              }
          
              /* No match found so far, so keep track of the text of the preceding label control */ 

              strPrecedingLabelText = strLabelText;             
           } 
       }
 
       /* If we reach here no match could be found */

       if (GLOBAL_flagTraceModeOn) TRACE("GET_MENU_OPTION_NUMBER did not find a matching menu entry for",strSearchText);     
   }

   /* Finished */

   return(strReturnOptionNumber);  
}

/* ------------------------------------------------------------------------- */
/* STRIP_LEADING_NUMBERS - Strip Leanding numbers from a string              */
/* ------------------------------------------------------------------------- */ 

function STRIP_LEADING_NUMBERS(argString)
{
   var strReturn = "";
   var intLimit  = argString.length;
   var i         = 0; 

   for (i = 0; i < intLimit; i++)
   {
      var strTestChar = argString.charAt(i);
      
      switch (strTestChar)
      {
          case " ":  /* Ignore leading blanks only */
               if (strReturn != "") return(strReturn);      
               break;  

          case "0":  /* Ignore leading zeroes, else add to return value */ 
               if (strReturn != "") strReturn += strTestChar;    
               break;  

          case "1": /* Handle other numbers */
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
               strReturn += strTestChar;    
               break;

          default: /* End of numbers */
               return(strReturn);  
               break;         
      }  
   }

   return(strReturn); 
}

/* ------------------------------------------------*/
/* Given a destination, build the navigation stack */
/* ------------------------------------------------*/ 

/* This routine finds all the valid paths to a given Junction. It stores them in arrayValidPaths */
/* Each entry in arrayValidPaths is an array of Script objects to execute to arrive at the desired Junction. */
/* It uses the array of Script <--> Junction cross reference created during script object creation: see VF_SY121_SETSCRIPT()*/
/* Each entry in arrayobjTargetScriptXRef[argstrToJunctionIDN] yields an array of the script objects that can get to */
/* the Junction with uIdentifier = argstrToJunctionIDN. */

function CopySimpleArray(arrayFrom,arrayTo)
{
   var i = 0;
   var j = arrayFrom.length;

   arrayTo.length = 0;

   for (i = 0; i < j; i++) arrayTo[i] = arrayFrom[i];      

   return; 
}


function FindPathToJunction(argstrToJunctionIDN,strTargetScreenName)
{
   var arrayobjScriptsNavigatingTo = arrayobjTargetScriptXRef[argstrToJunctionIDN];

   /* Are there any Scripts that can reach Junction with ID argstrToJunctionIDN? */
  
   if ( arrayobjScriptsNavigatingTo  != null )
   {
      var uIdentifier     = "";
      var i               = 0;  
      var x               = 0; 
      var flagProcessNode = false;
 
 
      for (uIdentifier in arrayobjScriptsNavigatingTo )
      {
         var objScript           = arrayobjScriptsNavigatingTo[uIdentifier];
         var objScriptIDN        = objScript.uIdentifier;  
         var strOwnerJunctionIDN = objScript.uNominalOwnerNodeIDN;  
  
         /* ---------------------------------------------------------------- */
         /* Ignore this script if already in the stack or has a crappy owner */
         /* ---------------------------------------------------------------- */
     
         flagProcessNode = ( arrayobjNodebyIDN[strOwnerJunctionIDN] != null ); 
   
         /* This check is prevents going into an infinite recursion */
         /* If this script is one which I already have in my path */
         /* OR */
         /* If this script's junction owner is the target of a script I already have in the path, don't do it. */
         /* In other words, on our way to JX, I found a script that goes from J1 to J2. Next I will be doing the ones that go to J1. If it so happens */
         /* that J2 goes to J1, I am not interested */

         for (i = 0, x = GLOBAL_arrayobjScriptBranch.length; (flagProcessNode) && (i < x); i++)   
         { 
            if ( (objScript == GLOBAL_arrayobjScriptBranch[i]) || 
                 (strOwnerJunctionIDN == GLOBAL_arrayobjScriptBranch[i].uNavigateToIDN) ) flagProcessNode = false; 
         }

         /* -------------------------------- */
         /* If this node should be processed */ 
         /* -------------------------------- */

         if (flagProcessNode) 
         {
            /* ========================================== */  
            /* Add the current script to a tracking array */
            /* ========================================== */  

            GLOBAL_arrayobjScriptBranch[GLOBAL_arrayobjScriptBranch.length] = objScript; 

            /* ------------------------------------------------------- */
            /* Is this junction is NOT the one currently in the buffer */
            /* ------------------------------------------------------- */
      
            if ( strTargetScreenName != arrayobjNodebyIDN[strOwnerJunctionIDN].uScreenName)
            {  

               /* NO. Call the same routine recursively passing it the Id of the script parent which will be another junction. But do it only if we */
               /* haven't exceeded the length of the currently shortest path. Otherwise, branch out because even if we find */
               /* a path it will be the same length or longer than one we currently have so don't bother */

               if ( GLOBAL_arrayobjScriptBranch.length < GLOBAL_intMinimumBranchLength) FindPathToJunction(strOwnerJunctionIDN,strTargetScreenName); 
                               
            }
            else 
            { 
               /* ---------------------------------------------------------------------------------------- */
               /* YES. Store away, this path will defintely be the shortest, otherwise it would have stopped searching, see the if of this else */
               /* ---------------------------------------------------------------------------------------- */
           
               x = GLOBAL_intMinimumBranchLength = GLOBAL_arrayobjScriptBranch.length; 

               GLOBAL_arrayShortestPathtoJunction.length = 0; 

               for (intJ = x - 1; intJ >= 0; intJ--)
               {
                  GLOBAL_arrayShortestPathtoJunction[GLOBAL_arrayShortestPathtoJunction.length] = GLOBAL_arrayobjScriptBranch[intJ].uIdentifier;
               }
            }

            /* ============================================================= */
            /* Delete the last entry in the branch, we don't need it anymore */
            /* ============================================================= */

            GLOBAL_arrayobjScriptBranch.length -= 1;  

         }
      }   
   }

   /* Finished */

   return;  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SetFramework - Set the Framework properties   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETFRAMEWORK()
{
    objFramework.uCaption             = VFPROP_Get("objFramework.uCaption",1);
    objFramework.ExecutionEnvironment = VFPROP_Get("objFramework.ExecutionEnvironment",1);
    objFramework.flagDesignMode       = (VFPROP_Get("objFramework.DesignMode",1) == "TRUE");
    objFramework.Partition            = VFPROP_Get("objFramework.Partition",1);
    objFramework.Language             = VFPROP_Get("objFramework.Language",1);
    GLOBAL_flagTraceModeOn            = (VFPROP_Get("objFramework.TraceMode",1) == "TRUE"); 
    
    return; 
}  

/* ------------------------------------------------------------------------- */
/* VF_SY121_SetApplication - Set the Application properties   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETAPPLICATION()
{
    objApplication.uCaption        = VFPROP_Get("objApplication.uCaption",1);
    objApplication.uUserObjectType = VFPROP_Get("objApplication.uUserObjectType",1);
    return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SetBusinessObject - Set the Business Object properties   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETBUSINESSOBJECT()
{
    objBusinessObject.uCaption        = VFPROP_Get("objBusinessObject.uCaption",1);
    objBusinessObject.uUserObjectType = VFPROP_Get("objBusinessObject.uUserObjectType",1);
    return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SETCOMMAND - Set the Command properties   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETCOMMAND()
{
   objCommand.uCaption = VFPROP_Get("objCommand.uCaption",1);
   objCommand.uUserObjectType = VFPROP_Get("objCommand.uUserObjectType",1);
   objCommand.uAlphaArg1 = VFPROP_Get("objCommand.uAlphaArg1",1);
   objCommand.uAlphaArg2 = VFPROP_Get("objCommand.uAlphaArg2",1);      
   objCommand.uNumArg1 = parseInt(VFPROP_Get("objCommand.uNumArg1",1), 10);
   objCommand.uNumArg2 = parseInt(VFPROP_Get("objCommand.uNumArg2",1), 10);
   objCommand.uExecReason = VFPROP_Get("objCommand.uExecReason",1); 
   if (objCommand.uExecReason == "") objCommand.uExecReason = "EXECUTE"; 
   return; 
}
  
/* ------------------------------------------------------------------------- */
/* VF_SY121_SetListManager - Set the List Manager properties   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETLISTMANAGER()  
{
   objListManager.TotalSelected = 0 ;
   objListManager.TotalSelected = parseInt(VFPROP_Get("objListManager.TotalSelected",1),10);

   for ( intIndex = 0; intIndex <= objListManager.TotalSelected; intIndex++)
   {


      /* Alphanumeric keys */
      objListManager.AKey1[intIndex] = VFPROP_Get("objListManager.AKey1", intIndex );
      objListManager.AKey2[intIndex] = VFPROP_Get("objListManager.AKey2", intIndex );
      objListManager.AKey3[intIndex] = VFPROP_Get("objListManager.AKey3", intIndex );
      objListManager.AKey4[intIndex] = VFPROP_Get("objListManager.AKey4", intIndex );
      objListManager.AKey5[intIndex] = VFPROP_Get("objListManager.AKey5", intIndex );   
      
      /* Numeric keys */

      objListManager.NKey1[intIndex] = parseInt(VFPROP_Get("objListManager.NKey1",intIndex),10);
      objListManager.NKey2[intIndex] = parseInt(VFPROP_Get("objListManager.NKey2",intIndex),10);
      objListManager.NKey3[intIndex] = parseInt(VFPROP_Get("objListManager.NKey3",intIndex),10);
      objListManager.NKey4[intIndex] = parseInt(VFPROP_Get("objListManager.NKey4",intIndex),10);
      objListManager.NKey5[intIndex] = parseInt(VFPROP_Get("objListManager.NKey5",intIndex),10);
      
      /* Visual IDs */
      objListManager.VisualId1[intIndex] = VFPROP_Get("objListManager.VisualId1", intIndex ); 
      objListManager.VisualId2[intIndex] = VFPROP_Get("objListManager.VisualId2", intIndex ); 
      
      /* Additional Alpha columns */

      objListManager.AColumn1[intIndex]  = VFPROP_Get("objListManager.AColumn1", intIndex );
      objListManager.AColumn2[intIndex]  = VFPROP_Get("objListManager.AColumn2", intIndex );
      objListManager.AColumn3[intIndex]  = VFPROP_Get("objListManager.AColumn3", intIndex );
      objListManager.AColumn4[intIndex]  = VFPROP_Get("objListManager.AColumn4", intIndex );
      objListManager.AColumn5[intIndex]  = VFPROP_Get("objListManager.AColumn5", intIndex );
      objListManager.AColumn6[intIndex]  = VFPROP_Get("objListManager.AColumn6", intIndex );
      objListManager.AColumn7[intIndex]  = VFPROP_Get("objListManager.AColumn7", intIndex );
      objListManager.AColumn8[intIndex]  = VFPROP_Get("objListManager.AColumn8", intIndex );
      objListManager.AColumn9[intIndex]  = VFPROP_Get("objListManager.AColumn9", intIndex );
      objListManager.AColumn10[intIndex] = VFPROP_Get("objListManager.AColumn10", intIndex );

      /* Additional Numeric Columns */
      
      objListManager.NColumn1[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn1",intIndex));
      objListManager.NColumn2[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn2",intIndex));
      objListManager.NColumn3[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn3",intIndex));
      objListManager.NColumn4[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn4",intIndex));
      objListManager.NColumn5[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn5",intIndex));
      objListManager.NColumn6[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn6",intIndex));
      objListManager.NColumn7[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn7",intIndex));
      objListManager.NColumn8[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn8",intIndex));
      objListManager.NColumn9[intIndex]  = parseFloat(VFPROP_Get("objListManager.NColumn9",intIndex));
      objListManager.NColumn10[intIndex] = parseFloat(VFPROP_Get("objListManager.NColumn10",intIndex));
      
      /* Additional Date/Time columns */
      
      objListManager.DColumn1[intIndex]  = VFPROP_Get("objListManager.DColumn1",intIndex);
      objListManager.DColumn2[intIndex]  = VFPROP_Get("objListManager.DColumn2",intIndex);
      objListManager.DColumn3[intIndex]  = VFPROP_Get("objListManager.DColumn3",intIndex);
      objListManager.DColumn4[intIndex]  = VFPROP_Get("objListManager.DColumn4",intIndex);
      objListManager.DColumn5[intIndex]  = VFPROP_Get("objListManager.DColumn5",intIndex);

      /* Subtype - Enhancement */
      objListManager.Subtype[intIndex]  = VFPROP_Get("objListManager.Subtype",intIndex);
      
   }

   return; 
}


/* ------------------------------------------------------------------------- */
/* VF_SY121_CLEARLISTMANAGER - Clear ListManager object default values       */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_CLEARLISTMANAGER()
{

   objListManager.TotalSelected = 0 ;

   objListManager.AKey1[0] = "";
   objListManager.AKey2[0] = "";
   objListManager.AKey3[0] = "";
   objListManager.AKey4[0] = "";
   objListManager.AKey5[0] = "";

/* Numeric Keys */
   objListManager.NKey1[0] = 0;
   objListManager.NKey2[0] = 0;
   objListManager.NKey3[0] = 0;
   objListManager.NKey4[0] = 0;
   objListManager.NKey5[0] = 0;

/* Visual IDs */
   objListManager.VisualId1[0] = "";
   objListManager.VisualId2[0] = "";

/* Additional Alpha Columns */
   objListManager.AColumn1[0] = "";
   objListManager.AColumn2[0] = "";
   objListManager.AColumn3[0] = "";
   objListManager.AColumn4[0] = "";
   objListManager.AColumn5[0] = "";
   objListManager.AColumn6[0] = "";
   objListManager.AColumn7[0] = "";
   objListManager.AColumn8[0] = "";
   objListManager.AColumn9[0] = "";
   objListManager.AColumn10[0] = "";

/* Additional Numeric Columns */
   objListManager.NColumn1[0]  = 0.0;
   objListManager.NColumn2[0]  = 0.0;
   objListManager.NColumn3[0]  = 0.0;
   objListManager.NColumn4[0]  = 0.0;
   objListManager.NColumn5[0]  = 0.0;
   objListManager.NColumn6[0]  = 0.0;
   objListManager.NColumn7[0]  = 0.0;
   objListManager.NColumn8[0]  = 0.0;
   objListManager.NColumn9[0]  = 0.0;
   objListManager.NColumn10[0] = 0.0;

/* Additional Date/Time Columns */
   objListManager.DColumn1[0] = "";
   objListManager.DColumn2[0] = "";
   objListManager.DColumn3[0] = "";
   objListManager.DColumn4[0] = "";
   objListManager.DColumn5[0] = "";

/* Subtype - Enhancement request */
   objListManager.Subtype[0] = "";
   
   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY120_SET_SHOWFORMS  - set the show forms option off or on             */
/* ------------------------------------------------------------------------- */ 

function VF_SY120_SET_SHOWFORM(argflagStatus)
{
   if (GLOBAL_flagConnected)
   {
      if (argflagStatus == null) argflagStatus = true;

      /* VF_SY121_SETNL_VALUE("App.ShowForms",argflagStatus,true); */
      
      if (argflagStatus) VF_SY121_STARTKEYUSAGETIMER();
      else               VF_SY121_STOPKEYUSAGETIMER();   
   }

   return;    
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_Dispose - dispose of a subfile                                   */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_Dispose()
{
   delete(this.arraySearchColumnNumber); 
   delete(this.arraySearchColumnValue); 
   delete(this.arraySearchColumnUpper); 
   delete(this.arraySearchColumnContains); 
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_SetSelectionColumnName - set the seclction column name           */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_SetSelectionColumnName(strName,strSelectValue,strUnSelectValue)
{
   this.SelectionColumnNumber = VF_SY121_FIND_COLUMN_NUMBER(this.strControlName,strName); 
   this.SelectionColumnValue  = strSelectValue.toString();    
   if (strUnSelectValue != null) this.UnSelectionColumnValue = strUnSelectValue.toString();  
   if (this.SelectionColumnNumber < 0) ALERT_MESSAGE("No selection column named " + strName + " could be found in subfile control " + this.strControlName); 
   return; 
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_SetSelectionColumnNumber - set the selection column number       */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_SetSelectionColumnNumber(intNumber,strSelectValue,strUnSelectValue)
{
   this.SelectionColumnNumber = intNumber; 
   this.SelectionColumnValue  = strSelectValue.toString();    
   if (strUnSelectValue != null) this.UnSelectionColumnValue = strUnSelectValue.toString();  
   return; 
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_SearchColumnNumber - search a subfile by number                      */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_SearchColumnNumber(intNumber,strValue,flagUpperCase,flagContains)
{
   var intAddIndex = this.arraySearchColumnNumber.length;   
   
   if (flagUpperCase == null) flagUpperCase = false;
   if (flagContains  == null) flagContains  = false;
   
   this.arraySearchColumnNumber[intAddIndex]   = intNumber;
   this.arraySearchColumnUpper[intAddIndex]    = flagUpperCase;
   this.arraySearchColumnContains[intAddIndex] = flagContains;

   if (flagUpperCase) strValue = strValue.toUpperCase(); 
   this.arraySearchColumnValue[intAddIndex] = strValue;

   return; 
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_SearchColumnName - search a subfile by name                          */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_SearchColumnName(strName,strValue,flagUpperCase,flagContains)
{
   /* Convert the name to a number */
  
   var intColumnNumber = VF_SY121_FIND_COLUMN_NUMBER(this.strControlName,strName); 

   /* Issue an error or add by number */

   if (intColumnNumber < 0) 
   {
      ALERT_MESSAGE("No search column named " + strName + " could be found in subfile control " + this.strControlName); 
   }
   else
   {
      if (flagUpperCase == null) flagUpperCase = false;
      if (flagContains  == null) flagContains  = false;
      this.SetSearchColumnNumber(intColumnNumber,strValue,flagUpperCase,flagContains);        
   }
 
   /* Finished */

   return;  
}

/* ------------------------------------------------------------------------- */
/* _SUBFILE_TracePage - trace the content of a subfile page                  */
/* ------------------------------------------------------------------------- */ 

function _SUBFILE_TracePage()
{

  try
  {

      var intColumnCount = TONUMBER(GETVALUE(this.strControlName + ".Columns.Count"));   
      var intRowCount    = TONUMBER(GETVALUE(this.strControlName + ".RowCount"));

      TRACE("  ** Subfile grid control layout probe started for",this.strControlName," **");    
      TRACE("     It has",intColumnCount.toString(),"columns and",intRowCount.toString(),"rows on the current screen.");    

      if ((intColumnCount == 0) && (intColumnCount == 0) )
      {
         TRACE("     Subfile control named",this.strControlName,"seems to have zero rows and zero columns. Is the name correct and in the exact case?");    
      }

      for (c = 0; c < intColumnCount; c++)
      {  
         var ColumnNumber = c.toString();  
         var ColumnName   = GETVALUE(this.strControlName + ".Columns(" + c.toString() + ").Name");  

         if (ColumnName != "") TRACE("     Column number",ColumnNumber,"is named",ColumnName);
         else                  TRACE("     Column number",ColumnNumber,"has no name."); 

         for (r = 0; r < intRowCount; r++)
         {
            var strValue  = GETVALUE(this.strControlName + ".Columns(" + ColumnNumber + ").Cells(" + r.toString() + ").Text");  
            TRACE("        in row",r.toString()," it contains \"" + strValue + "\"");    
         } 

      }

      TRACE("  ** Subfile grid control layout probe ended for",this.strControlName + " **");    
  }
  catch (objError)
  {
     var strFailureReason = " - " + objError.description + " (" + objError.number.toString() + ")";  
     TRACE("  ** Subfile grid control layout probe encountered error",strFailureReason + " **");      
  }  

  /* Finished */  
  
  return;    
} 

/* ------------------------------------------------------------------------- */
/* _SUBFILE_SelectEntry - select a subfile entry                             */
/* ------------------------------------------------------------------------- */ 
  
function _SUBFILE_SelectEntry()
{
   var flagTraceModeOn = (GLOBAL_flagTraceModeOn && this.Trace) 
   var intColumnCount  = TONUMBER(GETVALUE(this.strControlName + ".Columns.Count"));   
   var flagUnSelect    = (this.UnSelectionColumnValue != "<NONE>");  

   /* Check that we have a selection number now (either converted from a name or supplied) */ 
 
   if ( (!(this.SelectionByCursor)) && ((this.SelectionColumnNumber < 0) || (this.SelectionColumnNumber >= intColumnCount)) )
   {
      if (flagTraceModeOn) TRACE("The specified SelectionNumber property is not valid for or not found in subfile control",this.strControlName);    
      return(false);
   }

   /* Now we are ready to do a column number search through the data */ 
 
   var intHeaderRowCount = TONUMBER(GETVALUE(this.strControlName + ".HeadRows"));
  
   while (true)
   {
      /* Get the number of rows in the currently displayed page */
   
      var intRowCount = TONUMBER(GETVALUE(this.strControlName + ".RowCount"));

      
      for (intRowNumber = intHeaderRowCount; intRowNumber < intRowCount; intRowNumber++)
      {
         var intMatchCount = 0; 
        
         /* See how many columns in this row match the users search request */ 

         for (n = 0; n < this.arraySearchColumnNumber.length; n++)
         {
            var intCompareColumn     = this.arraySearchColumnNumber[n];
            var strSearchColumnValue = GETVALUE(this.strControlName + ".Columns(" + intCompareColumn.toString() + ").Cells(" + intRowNumber.toString() + ").Text"); 
            var flagMatches          = false;  
            
            if (this.arraySearchColumnUpper[n]) strSearchColumnValue = strSearchColumnValue.toUpperCase();

            /* Match by contains or by equality */

            if (this.arraySearchColumnContains[n])
            {
                flagMatches = (strSearchColumnValue.indexOf(this.arraySearchColumnValue[n]) >= 0);  
            }
            else
            {
                flagMatches = (strSearchColumnValue == this.arraySearchColumnValue[n]);
            } 
            
            /* If this one matches */ 

            if (flagMatches) 
            {
               intMatchCount++; 
               if (flagTraceModeOn) TRACE("Matched row",intRowNumber.toString(),"column",intCompareColumn.toString(),"containing value",strSearchColumnValue,"with search value",this.arraySearchColumnValue[n]);    
            }
            else
            {
               if (flagTraceModeOn) TRACE("Did not match row",intRowNumber.toString(),"column",intCompareColumn.toString(),"containing value",strSearchColumnValue,"with search value",this.arraySearchColumnValue[n]);    
            } 
              
         } /* arraySearchColumnNumber */

         /* If the number of matches equals the number of searches then we have a match */  

         if (intMatchCount == this.arraySearchColumnNumber.length)
         {
            var intUseRow = intRowNumber - this.SelectionColumnOffset;  
            
            if (this.SelectionByCursor)
            {
               var int5250Row = intUseRow + this.SelectionByCursorOffset;    
               if (flagTraceModeOn) TRACE("Selecting subfile control row",intUseRow.toString(),"by positioning the screen cursor to 5250 row",int5250Row.toString(),", column 2.");    
               SETCURSOR(int5250Row,2,0); 
            }
            else
            {  
               if (flagTraceModeOn) TRACE("Selecting subfile control row",intUseRow.toString(),"by placing value",this.SelectionColumnValue,"into column number",this.SelectionColumnNumber.toString());     
               SETVALUE(this.strControlName + ".Columns(" + this.SelectionColumnNumber + ").Cells(" + intUseRow.toString() + ").Text", this.SelectionColumnValue);
            }    

            /* Send the selection key */
            if (this.SelectionKey != null)
            {
               SENDKEY(this.SelectionKey);
            } 

            /* Selection is complete */  

            return(true);
         }
         else
         {
            if (flagUnSelect)
            {
               var intUseRow     = intRowNumber - this.SelectionColumnOffset;  
               var intColumnType = TONUMBER( GETVALUE(this.strControlName + ".Columns(" + this.SelectionColumnNumber.toString() + ").Cells(" + intUseRow.toString() + ").Type") );  
               if (intColumnType == 10) 
               {    
                  if (flagTraceModeOn) TRACE("Unselecting subfile control row",intUseRow.toString(),"by placing value",this.UnSelectionColumnValue,"into column number",this.SelectionColumnNumber.toString());     
                  SETVALUE(this.strControlName + ".Columns(" + this.SelectionColumnNumber + ").Cells(" + intUseRow.toString() + ").Text",this.UnSelectionColumnValue); 
               } 
            }
         }     
      } 

	  /* If we reach here we either need to scroll the page or finish with an error */

      var strMarker = GETVALUE(this.strControlName + ".Marker");
      var strMessage = "";
      var flagEndMessage;
      
      /* If markers are not used try to get a message from the form */
      
      if (!(this.UseMarker))
      {
         try
         {
            var strMessage = GETVALUE("ActiveForm.Message");
         } 
         catch (objError) {strMessage = "";}
         
         /* And see if it signals the end of subfile has been reached */
         
         flagEndMessage = (!(strMessage.indexOf(this.EndofFileMarker) < 0));
      }

      if (!(this.Scrollable) || (this.UseMarker && ((strMarker == "") || (strMarker == this.EndofFileMarker)))) 
      {
         if (flagTraceModeOn) TRACE("No selectable matches could be found in subfile control",this.strControlName); 
         return(false); 
      }
      else 
      {
         if (!(this.UseMarker) && flagEndMessage)
         {
            if (flagTraceModeOn) TRACE("No selectable matches could be found in subfile control",this.strControlName); 
            return(false); 
         }
         else
         {
            if (flagTraceModeOn) TRACE("Scrolling",this.strControlName,"to next subfile control page."); 
            SENDKEY(this.KeyPageDown);             
         }
      }      
   
   } /* Loop around and process the new subfile page */  

   /* Finished - but we should never get to here */

   if (flagTraceModeOn) TRACE("No selectable matches could be found in subfile control",this.strControlName); 

   return(false); 
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY121_FIND_COLUMN_NUMBER - find a subfile column by name and return the number */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY121_FIND_COLUMN_NUMBER(strControlName,strLocateColumnName)
{
   try 
   {
      var intColumnCount = TONUMBER( GETVALUE(strControlName + ".Columns.Count") );   
      var c              = 0;                          
   
      strLocateColumnName = strLocateColumnName.toUpperCase();   

      for (c = 0; c < intColumnCount; c++)
      {  
         var strColumnName = GETVALUE(strControlName + ".Columns(" + c.toString() + ").Name");  
         strColumnName = strColumnName.toUpperCase();   
         if (strColumnName == strLocateColumnName) return(c);
      }

   }
   catch (objError)
   {
   }

   return(-1); 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SCREEN_PROBE - perform a probe of the current screen             */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SCREEN_PROBE_Sep(intTotalLines)
{
   if (GLOBAL_strProbeSeparator == "") while (GLOBAL_strProbeSeparator.length < 256) GLOBAL_strProbeSeparator += "----------------"; 
   VFPROP_Set("uProbe.Line",++intTotalLines,GLOBAL_strProbeSeparator);
   return(intTotalLines);
}

function VF_SY121_SCREEN_PROBE()
{
   var intTotalLines = 0; 

   /* Loop through the form looking for all named datagrids */

   VFPROP_Set("uProbe.Line",++intTotalLines,("*** Screen probe report start ***"));           
 
   try
   {
      var intControls = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count") );
      var intI        = 0;  

      /* Do the basic form details */

      {
         var strName = VF_SY120_GETCURRENTFORM();

         intTotalLines = VF_SY121_SCREEN_PROBE_Sep(intTotalLines);

         if (strName == "")
         {
            VFPROP_Set("uProbe.Line",++intTotalLines,("The current screen has no name associated with it and is not defined to RAMP."));           
         }
         else
         {
            var strScreenType = "";
            var strScreenNLType = objNewLook.GetValue("ActiveForm.PopUp") == -1?strScreenNLType = "PopUp":strScreenNLType = "screen";
            VFPROP_Set("uProbe.Line",++intTotalLines,("The current " + strScreenNLType + " is named " + strName));
            var strVisibility = objNewLook.GetValue("ActiveForm.Visible") == 0?strVisibility = "Invisible":strVisibility = "Visible";
            VFPROP_Set("uProbe.Line",++intTotalLines,(strName + " should be " + strVisibility));            
            if (arrayobjJunctionsbyScreenName[strName]       != null) strScreenType += "JUNCTION"; /* Yes += is correct */  
            if (arrayobjCherriesbyScreenName[strName] != null) strScreenType += "DESTINATION";
            if (arrayobjSpecialsbyScreenName[strName] != null) strScreenType += "SPECIAL";
            if (strScreenType == "") VFPROP_Set("uProbe.Line",++intTotalLines,("The current screen is not defined to RAMP."));
            else VFPROP_Set("uProbe.Line",++intTotalLines,("The current screen is defined to RAMP as a " + strScreenType + " screen."));  
            

         }
      }

      /* Now do the fields/controls on the form */  

      for (intI = 0; intI < intControls; intI++)
      {  
         var strintI = intI.toString();  
         var intType = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Type") ); 

         switch (intType)
         {
              case 14: /* A DataGrid control */
              {
                 var strName = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Name");  

                 intTotalLines = VF_SY121_SCREEN_PROBE_Sep(intTotalLines);
                 
                 if (strName == "")
                 {
                    var intRow    = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Row"));  
                    var intColumn = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Column"));

                    VFPROP_Set("uProbe.Line",++intTotalLines,
                               ("A datagrid control (which might be a 5250 subfile representation) was found in row " + intRow.toString() + " at column " + intColumn.toString()));           
                    VFPROP_Set("uProbe.Line",++intTotalLines,
                               ("However it has no name associated with it, so it cannot be used yet for scripting purposes."));          
                    VFPROP_Set("uProbe.Line",++intTotalLines,
                               ("If you want to use it in a script then use the designer tool to assign a name to it and then attempt this operation again."));          
                 }
                 else
                 {
                     var objCTL = new SUBFILE_ACCESSOR(strName);

                     GLOBAL_flagTraceToArray = true;
                     
                     objCTL.TracePage();
                     
                     GLOBAL_flagTraceToArray = false;
                   
                     for (i = 0; i < GLOBAL_arrayTraceData.length; i++) 
                     { 
                        VFPROP_Set("uProbe.Line",++intTotalLines,GLOBAL_arrayTraceData[i]);          
                     }  

                     GLOBAL_arrayTraceData.length = 0;
                     GLOBAL_flagTraceToArray = null;
                 }

                 break;
              } /* case: 14 */
                 

             default: /* Other controls except labels */ 
                 {
                     if (intType != 4)
                     {
                        var strName = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Name"); 
               
                        if (strName != "")
                        {
                           var strText = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Text");  
                           var strSample = "<some value>";
                           
                           if (strText != "") strSample = strText;                              
          
                           intTotalLines = VF_SY121_SCREEN_PROBE_Sep(intTotalLines);
                       
                           VFPROP_Set("uProbe.Line",++intTotalLines,
                                   ("A field (or control) named " + strName + " with current value \"" + strText + "\" was found." ) );           
                       
                           VFPROP_Set("uProbe.Line",++intTotalLines,
                                   ("    To set this field's value from a script use SETVALUE(\"" + strName + "\",\"" + strSample + "\");"));           

                           VFPROP_Set("uProbe.Line",++intTotalLines,
                                   ("    To get this field's value into a script use <some variable> = GETVALUE(\"" + strName + "\");") );           
                        }
                 
                     } /* Type = 4 */

                     break; 
                 
                 } /* default */ 
                    
          } /* switch */

       } /* for */
    
        
   } /* try */
   catch (objError)
   {
      var strFailureReason = " - " + objError.description + " (" + objError.number.toString() + ")";  
      VFPROP_Set("uProbe.Line",++intTotalLines,("The screen probe encountered error " + strFailureReason));          
   }

   intTotalLines = VF_SY121_SCREEN_PROBE_Sep(intTotalLines);

   VFPROP_Set("uProbe.Line",++intTotalLines,("*** Screen probe report end ***"));           
 
   /* Set the final total */

   VFPROP_Set("uProbe.Total",1,intTotalLines.toString());          

   /* Finished */
   
   return; 
}

/* ------------------------------------------------------------------------- */
/* DefineFunctionKey - set an arrived form's attributes           */
/* ------------------------------------------------------------------------- */ 

GLOBAL_arrayobjKeybyId   = new Array(); 
GLOBAL_arrayobjKeybyCode = new Array(); 

function DefineFunctionKey(intKeyId, strKeyCode, strMacro)
{
   var objKey = new Object();
    
   objKey.intKeyId   = intKeyId;
   objKey.strKeyCode = strKeyCode;
   objKey.strMacro   = strMacro;    

   GLOBAL_arrayobjKeybyId[objKey.intKeyId]     = objKey;
   GLOBAL_arrayobjKeybyCode[objKey.strKeyCode] = objKey;

   return; 
}

/* =============================================================================== */
function _ext_SET_SCRIPTPROPERTY(argstrName,argInstance,strValue) 
{
   if (GLOBAL_VF_System_EXTERN == null) alert("_ext_SET_SCRIPTPROPERTY is not available in this environment");
   else                          GLOBAL_VF_System_EXTERN.ext_SET_SCRIPTPROPERTY(argstrName,argInstance,strValue);     
}
/* =============================================================================== */
function _ext_GET_SCRIPTPROPERTY(argstrName,argInstance) 
{
   if (GLOBAL_VF_System_EXTERN == null ) { alert("_ext_GET_SCRIPTPROPERTY is not available in this environment"); return(""); }
   else return( GLOBAL_VF_System_EXTERN.ext_GET_SCRIPTPROPERTY(argstrName,argInstance) ); 
}
/* =============================================================================== */

/* ------------------------------------------------------------------------- */
/* SETFOCUS - set focus to a control on a RAMP screen                        */
/* ------------------------------------------------------------------------- */ 

var GLOBAL_strFocusItem = "";

function SETFOCUS(argstrFocusItem)
{
   /* If parameter is passed then this function was called from a RAMP script */
   if (argstrFocusItem != null)
   {

      if (GLOBAL_flagTraceModeOn) TRACE("SETFOCUS to field named: ",argstrFocusItem.toString());

      /* remember ths control name */
      GLOBAL_strFocusItem = argstrFocusItem;   
      
      /* Restart this function in 30 milliseconds */
      setTimeout(SETFOCUS,30);          
   }  
   /* else this function is being called by setTimeout after a 30 millisecond yield has completed */
   else
   {
     try
     {
         var strGetValueString = "App.ActiveForm.Controls." + GLOBAL_strFocusItem + ".FormControlsCollectionIndex";
         
         var intIndex  = GETVALUE(strGetValueString);
        
         SETVALUE("intControlIndex",intIndex);
 
         VF_SY121_RUNMACRO("VF_Macro.VF_Set_Active_Control"); 

         if (GLOBAL_flagTraceModeOn) TRACE("SETFOCUS to field named: ", GLOBAL_strFocusItem.toString(),"completed");
 
      }
      catch (objError) { alert("SETFOCUS failed - " + objError.description); } 
   } 
}  

/* =============================================================================== */

/* ------------------------------------------------------------------------- */
/* GETFOCUS - get the name of the field with focus on a RAMP screen          */
/* ------------------------------------------------------------------------- */ 

function GETFOCUS()
{  
   /* Ignore any error, will return "" on an error */ 
   var strFocusName = VF_SY121_GETNL_VALUE("ActiveControl.Name",true); 
 
   if (GLOBAL_flagTraceModeOn) TRACE("GETFOCUS returned field named: ", strFocusName.toString());

   if ((typeof(strFocusName) == "string") && (strFocusName != "")) 
   {
      return(strFocusName);
   }
   else
   {
     return("");
   }
}

/* =============================================================================== */

/* ------------------------------------------------------------------------- */
/* COPYTOCLIPBOARD - copy a string to clipboard        */
/* ------------------------------------------------------------------------- */ 

function COPYTOCLIPBOARD(argstrData)
{  

   /* Output the result */ 
   if (GLOBAL_flagTraceModeOn) TRACE("COPYTOCLIPBOARD");
   window.clipboardData.setData("Text", argstrData);
}


/* =============================================================================== */

/* ------------------------------------------------------------------------- */
/* MAKESUBFILEINTOSTRING - make the contents of a subfile into a string      */
/* ------------------------------------------------------------------------- */ 

var GLOBAL_TAB_Char = "\x09" ;
var GLOBAL_EOL_Char = "\x0D\x0A" ;

function MAKESUBFILEINTOSTRING(argstrDataGridName, argflagAllPages, argflagIncludeHeader, argstrHeaderColumns, argstrDetailColumns )
{  
 
   if (GLOBAL_flagTraceModeOn) TRACE("Start MAKESUBFILEINTOSTRING");

   var strDataGridName = argstrDataGridName ;
   var strData = "";
   var intPageCount = 0;
   var intColumnCount = 0;
   var intHeaderColumn = 0;
   var intDetailColumn = 0;
   var arrstrHeaderColumns = new Array();
   var arrstrDetailColumns = new Array();

   if (argstrHeaderColumns == "") argstrHeaderColumns = null;
   if (argstrDetailColumns == "") argstrDetailColumns = null;
   if (argflagAllPages == null) argflagAllPages = false ;
   if (argflagIncludeHeader == null) argflagIncludeHeader = true ;

   if (argstrHeaderColumns != null)
   {
      /* argstrHeaderColumns is formatted like "0,1,2,3,6,10,23" */
      /* make them into an array                                 */
      arrstrHeaderColumns = argstrHeaderColumns.split(",");
   }

   if (argstrDetailColumns != null)
   {
      /* argstrDetailColumns is formatted like "0,1,2,3,6,10,23" */
      /* make them into an array                                 */
      arrstrDetailColumns = argstrDetailColumns.split(",");
   }

   var flagAnotherPageExists = true;        /* Another subfile page exists           */
   var intTopRow = TONUMBER(GETVALUE(strDataGridName + ".HeadRows"));
   var arrIdx = -1;
   var strHeader, strColVal = "";
   var strColumn, strRow = "0";
   var underline = "_____________________________________";
   var strHeaderline, strUnderline = "";


   /* If the user has not specified which header columns they want, then read all    */
   /* and guess based on headers that are not empty or undefined,                    */
   /* and build up the array of Header columns                                       */                   

   if (argstrHeaderColumns != null)
   {
      intColumnCount = arrstrHeaderColumns.length ;
   }
   else
   {
      intColumnCount = TONUMBER(GETVALUE(strDataGridName + ".Columns.Count"));
   }

   for( intHeaderColumn = 0; intHeaderColumn < intColumnCount ; intHeaderColumn+= 1)  
   {  

      if (argstrHeaderColumns != null)
      {
         strColumn = arrstrHeaderColumns[intHeaderColumn];
      }
      else
      {
         strColumn = intHeaderColumn.toString();
      }

      strHeader = "";
      for(intRow = 0; intRow < intTopRow; intRow++) /* Read through the Header rows */
      {
         strRow = intRow.toString();
         strColVal = GETVALUE(strDataGridName + ".Columns(" + strColumn + ").Cells(" + strRow + ").Text");
         if (strColVal > "") strHeader = strHeader + " " +strColVal;
      }

      if (argstrHeaderColumns == null ) 
      {
         if ((strHeader > "") && (strHeader != "undefined")) 
         {

            arrIdx++;
            /* build the array of valid Header Columns */ 
            arrstrHeaderColumns[arrIdx] = strColumn;

            if (arrIdx == 0)
            {
               strHeaderline = strHeader;
               strUnderline = underline;
            }
            else
            {
               strHeaderline = strHeaderline + GLOBAL_TAB_Char + strHeader;
               strUnderline = strUnderline + GLOBAL_TAB_Char + underline;
            }

         }
      }
      else
      {

          if (intHeaderColumn == 0)
          {
             strHeaderline = strHeader;
             strUnderline = underline;
          }
          else
          {
             strHeaderline = strHeaderline + GLOBAL_TAB_Char + strHeader;
             strUnderline = strUnderline + GLOBAL_TAB_Char + underline;
          }

      } 

   }

   strHeaderline = strHeaderline + GLOBAL_EOL_Char;
   strUnderline = strUnderline + GLOBAL_EOL_Char;

   if (argflagIncludeHeader)
   {
      strData += strHeaderline;
      strData += strUnderline;
   }

   var strLine, strColVal = "";

   do
   {
      var intRowCount = TONUMBER(GETVALUE(strDataGridName + ".RowCount"));
      var intRow = 0;
      for (intRow = intTopRow; intRow < intRowCount; intRow++) /* Read through the Detail rows */
      {
              strRow = intRow.toString();
              strLine = "";

              /* If the user has not specified which detail columns they want, then use the array of header columns */

              if (argstrDetailColumns != null)
              {
                 intColumnCount = arrstrDetailColumns.length
              }
              else
              {
                 intColumnCount = arrstrHeaderColumns.length
              }

              /* Read the cells for the requested columns for the row */
              for( intDetailColumn = 0; intDetailColumn < intColumnCount ; intDetailColumn+= 1)  
              {  

                 if (argstrDetailColumns != null)
                 {
                    strColumn = arrstrDetailColumns[intDetailColumn];
                 }
                 else
                 {
                    strColumn = arrstrHeaderColumns[intDetailColumn];
                 }

                 strColVal = GETVALUE(strDataGridName + ".Columns(" + strColumn + ").Cells(" + strRow + ").Text");
                 strColVal = strColVal.replace(/,/g, "");
                 if (intDetailColumn == 0)
                 {
                    strLine = strColVal;
                 }
                 else
                 {
                    /* add tabs between fields */
                    strLine = strLine + GLOBAL_TAB_Char + strColVal;
                 } 
              }
              strData += strLine + GLOBAL_EOL_Char;
      }

      if (argflagAllPages)
      { 
         /* Proceed (or not) to the next subfile page based on the marker */
         flagAnotherPageExists = (GETVALUE(strDataGridName + ".Marker") != "");
         if(flagAnotherPageExists) { SENDKEY(KeyPageDown); intPageCount = intPageCount + 1; }
      }
      else
      {
         flagAnotherPageExists = false ;
      } 

   } while(flagAnotherPageExists); /* Loop around and process the next subfile page */

   /* return to where the screen was */
   for(i = 0; i < intPageCount; i++)
   {
       SENDKEY(KeyPageUp);
   }

   arrstrHeaderColumns = null;
   arrstrDetailColumns = null;


   if (GLOBAL_flagTraceModeOn) TRACE("End MAKESUBFILEINTOSTRING");

   return(strData);
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_SetButtonContainerStyle                                                   */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_SetButtonContainerStyle(sStyle)
{
   var objBtnDivCont = document.getElementById("VF_SY120_BtnContainer");
   if (objBtnDivCont != null) VF_SY120_BtnContainer.display = sStyle;
   return; 
}  

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_SetButtonContainerStyle                                                   */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_ResizeNL(argstrWidth, argstrHeight)
{
   if (objNewLook != null)
   {
      objNewLook.width        = argstrWidth;
      objNewLook.style.height = argstrHeight;
   }    
   return; 
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_ShowSession                                                               */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_ShowSession(argstrCurrChRef)
{

   if (objNewLook != null)
   {
       var objDestination = arrayobjNodebyIDN[argstrCurrChRef];
       var strHeight, strWidth, strTop, strLeft, intWidth;
     
       if ((objDestination != null) && (objDestination.uLayoutStyle == "FIXED"))
       {
          strHeight = objDestination.uHeight + "px";
          strTop    = objDestination.uTop + "px";
          intWidth  = objDestination.uWidth;
          strWidth  = intWidth + "px";
          strLeft   = objDestination.uLeft + "px";
       }
       else
       {
          strTop    = "0px";
          strLeft   = "0px";         
          strWidth  = "100%";
          strHeight = "100%";                  
       }

      objNewLook.style.position = "relative";
      objNewLook.style.top      = strTop;
      objNewLook.style.left     = strLeft;
       
      VF_SY120_ClearBrowserMessages();
      
      VF_SY120_ResizeNL(strWidth,strHeight);
 
   }

   return; 
}

/* ----------------------------------------------------------------------- */
/* VF_SY120_HandleButtons                                                  */
/* ----------------------------------------------------------------------- */ 
function VF_SY120_HandleButtons()
{
   var objBtnDivCont = document.getElementById("VF_SY120_BtnContainer");

   if (objBtnDivCont == null) return;
   
   var intEnabButtons = parseInt( VFPROP_Get("EnabledKey.Count",1), 10);

   objBtnDivCont.style.display = "none";

   if (intEnabButtons > 0)
   {  
      var arrayBtns  = objBtnDivCont.getElementsByTagName("INPUT");
      var objCurrBtn = null;
      var intI,j,intClickedIndex;
      var intTotBtns = arrayBtns.length;
                  
      if (intEnabButtons > intTotBtns) intEnabButtons = intTotBtns;
      
      arrayKeySequences.sort(sortNumber);
      
      j=0;
      for (intI = 0; intI < arrayKeySequences.length; intI++)
      {
         objCurrBtn               = arrayBtns[j];
         objCurrBtn.style.display = "block";
         objCurrBtn.style.width   = "90%";            
         objCurrBtn.style.left    = "20px";  
         intClickedIndex =  arrayKeySequences[intI];
         objCurrBtn.ClickedIndex  = arrayClickedKeyIndexes[intClickedIndex];
         objCurrBtn.value         = arrayKeyCapsBySeq[intClickedIndex];          
         
         j++;
      }
      
      /* now hide any other buttons that might have been showing in a prior cherry */
          
      for (intI=intEnabButtons; intI<intTotBtns; intI++)
      {
         arrayBtns[intI].style.display = "none";
      }

      objBtnDivCont.style.display = "inline-block";
   }

   return;
}

function sortNumber(a,b)
{
return a - b;
}

/* ----------------------------------------------------------------------- */
/* VF_SY120_ApplyNETColors                                                 */
/* ----------------------------------------------------------------------- */ 

function VF_SY120_ApplyNETColors(flagHTML,flagNL)
{
   if ((flagHTML) && (GLOBAL_HTML_BackColor != ""))
   {
      document.body.style.backgroundColor          = GLOBAL_HTML_BackColor; 
      VF_SY120_MainContainer.style.backgroundColor = GLOBAL_HTML_BackColor; 
      VF_SY120_BtnContainer.style.backgroundColor  = GLOBAL_HTML_BackColor; 
      VF_SY120_Errors.style.backgroundColor        = GLOBAL_HTML_BackColor; 
      if (__objNewLookAX != null) __objNewLookAX.style.backgroundColor = GLOBAL_HTML_BackColor
   }
   if ((flagNL) && (GLOBAL_NL_BackColor != "") && (objNewLook != null))
   {
      VF_SY121_SETNL_VALUE("App.BackColor",GLOBAL_NL_BackColor,false,true);  
   } 
   return;   
} 

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_ShowSession                                                               */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_HideMainOnSendKey()
{
   if (GLOBAL_flagHideMainOnSendKey) return("TRUE");
   else                              return("FALSE"); 
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_TotalSelected                                                             */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_TotalSelected(intTotal)
{
   objListManager.TotalSelected = intTotal;
   return;  
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY120_SetInstanceListEntry                                                      */
/* ---------------------------------------------------------------------------------- */ 

function VF_SY120_SetInstanceListEntry(i,VI1,VI2,AK1,AK2,AK3,AK4,AK5,NK1,NK2,NK3,NK4,NK5,
                                       AAC1,AAC2,AAC3,AAC4,AAC5,AAC6,AAC7,AAC8,AAC9,AAC10, 
                                       ANC1,ANC2,ANC3,ANC4,ANC5,ANC6,ANC7,ANC8,ANC9,ANC10,
                                       ADC1,ADC2,ADC3,ADC4,ADC5)
{

   objListManager.VisualId1[i] = VI1;
   objListManager.VisualId2[i] = VI2;
            
   objListManager.AKey1[i] = AK1;
   objListManager.AKey2[i] = AK2;
   objListManager.AKey3[i] = AK3;
   objListManager.AKey4[i] = AK4;
   objListManager.AKey5[i] = AK5;

   objListManager.NKey1[i] = NK1;
   objListManager.NKey2[i] = NK2;
   objListManager.NKey3[i] = NK3;   
   objListManager.NKey4[i] = NK4;
   objListManager.NKey5[i] = NK5;

   objListManager.AColumn1[i] = AAC1;
   objListManager.AColumn2[i] = AAC2;
   objListManager.AColumn3[i] = AAC3;
   objListManager.AColumn4[i] = AAC4;
   objListManager.AColumn5[i] = AAC5;
   objListManager.AColumn6[i] = AAC6;
   objListManager.AColumn7[i] = AAC7;
   objListManager.AColumn8[i] = AAC8;
   objListManager.AColumn9[i] = AAC9;
   objListManager.AColumn10[i] = AAC10;

   objListManager.NColumn1[i] = ANC1;
   objListManager.NColumn2[i] = ANC2;
   objListManager.NColumn3[i] = ANC3;
   objListManager.NColumn4[i] = ANC4;
   objListManager.NColumn5[i] = ANC5;
   objListManager.NColumn6[i] = ANC6;
   objListManager.NColumn7[i] = ANC7;
   objListManager.NColumn8[i] = ANC8;
   objListManager.NColumn9[i] = ANC9;
   objListManager.NColumn10[i] = ANC10;

   objListManager.DColumn1[i] = ADC1;
   objListManager.DColumn2[i] = ADC2;
   objListManager.DColumn3[i] = ADC3;
   objListManager.DColumn4[i] = ADC4;
   objListManager.DColumn5[i] = ADC5;
   
   return;  
}

/* =============================================================================== */


DefineFunctionKey(12,"Clear","VF_Handle_Clear");
DefineFunctionKey(13,"Enter","VF_Handle_Enter");
DefineFunctionKey(33,"Page Up","VF_Handle_Page_Up");
DefineFunctionKey(34,"Page Down","VF_Handle_Page_Down");
DefineFunctionKey(42,"Print","VF_Handle_Print");
DefineFunctionKey(47,"Help","VF_Handle_Help");
DefineFunctionKey(112,"F1","VF_Handle_F1");
DefineFunctionKey(113,"F2","VF_Handle_F2");
DefineFunctionKey(114,"F3","VF_Handle_F3");
DefineFunctionKey(115,"F4","VF_Handle_F4");
DefineFunctionKey(116,"F5","VF_Handle_F5");
DefineFunctionKey(117,"F6","VF_Handle_F6");
DefineFunctionKey(118,"F7","VF_Handle_F7");
DefineFunctionKey(119,"F8","VF_Handle_F8");
DefineFunctionKey(120,"F9","VF_Handle_F9");
DefineFunctionKey(121,"F10","VF_Handle_F10");
DefineFunctionKey(122,"F11","VF_Handle_F11");
DefineFunctionKey(123,"F12","VF_Handle_F12");
DefineFunctionKey(124,"F13","VF_Handle_F13");  
DefineFunctionKey(125,"F14","VF_Handle_F14");
DefineFunctionKey(126,"F15","VF_Handle_F15");
DefineFunctionKey(127,"F16","VF_Handle_F16");
DefineFunctionKey(128,"F17","VF_Handle_F17");
DefineFunctionKey(129,"F18","VF_Handle_F18");
DefineFunctionKey(130,"F19","VF_Handle_F19");
DefineFunctionKey(131,"F20","VF_Handle_F20");
DefineFunctionKey(132,"F21","VF_Handle_F21");
DefineFunctionKey(133,"F22","VF_Handle_F22");
DefineFunctionKey(134,"F23","VF_Handle_F23");
DefineFunctionKey(135,"F24","VF_Handle_F24");
DefineFunctionKey(193,"Sys Req","VF_Handle_SysReq");
DefineFunctionKey(194,"Test Req","VF_Handle_TestReq");
DefineFunctionKey(195,"Reset","VF_Handle_Reset");
DefineFunctionKey(207,"Home Field","VF_Handle_Home");
DefineFunctionKey(208,"PA2","VF_Handle_PA2");
DefineFunctionKey(209,"PA3","VF_Handle_PA3");
DefineFunctionKey(246,"Attn","VF_Handle_Attn");
DefineFunctionKey(253,"PA1","VF_Handle_PA1");
  
var KeyAttn     = "Attn";  
var KeyClear    = "Clear";
var KeyEnter    = "Enter"; 
var KeyHelp     = "Help";
var KeyPageDown = "Page Down"; 
var KeyPageUp   = "Page Up";
var KeyPrint    = "Print";
var KeyReset    = "Reset";
var KeySysReq   = "Sys Req";
var KeyTestReq  = "Test Req";  
var KeyHome     = "Home Field";  
var KeyF1       = "F1";
var KeyF2       = "F2";
var KeyF3       = "F3";
var KeyF4       = "F4";
var KeyF5       = "F5";
var KeyF6       = "F6";
var KeyF7       = "F7";
var KeyF8       = "F8";
var KeyF9       = "F9";
var KeyF10      = "F10";
var KeyF11      = "F11";
var KeyF12      = "F12";
var KeyF13      = "F13";
var KeyF14      = "F14";
var KeyF15      = "F15";
var KeyF16      = "F16";
var KeyF17      = "F17";
var KeyF18      = "F18";
var KeyF19      = "F19";
var KeyF20      = "F20";
var KeyF21      = "F21";
var KeyF22      = "F22";
var KeyF23      = "F23";
var KeyF24      = "F24";
var KeyPA1      = "PA1"; 
var KeyPA2      = "PA2"; 
var KeyPA3      = "PA3"; 
