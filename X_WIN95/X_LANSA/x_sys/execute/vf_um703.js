
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

/* ======================================================= */
/* ================== Snap shot loaction variables ======= */
/* ======================================================= */

var GLOBAL_SnapShot_NewLookTopStrip    = 46;
var GLOBAL_SnapShot_NewLookBottom5250  = 21;
var GLOBAL_SnapShot_NewLookBottomGUI   = 47;

/* ====================================================== */
/* ================== GLOBAL VARIABLES ================== */
/* ====================================================== */
  
var objNewLook                 = null;
var arraystrFormStack          = new Array();      
var arraystrFormStackDIV       = new Array();      
var arrayintFormStackAID       = new Array();      
var arraystrFormStackAIDTarget = new Array();      
var arrayobjFormStackSnapShots = new Array();   
var intIndexSelectedRoadmap    = -1;
var objLayoutTimerID           = null;
var intLayoutTimerInterval     = 500; /* Milliseconds */ 
var flagLayoutSampleActive     = false;  
var intCurrentSampleFormIndex  = -1; 
var strDoubleQuote = "\"";
var sSingleQuote = "\'";

/* These are specific to interaction with VF_UM701 (OTFN) */
var GLOBAL_CurrControlInd  = -1; 
var GLOBAL_ControlBackr    = ""; 

var objHiddenTag = new Object();
    objHiddenTag.strHashOvr = "NOT_SET";
    objHiddenTag.strNameOvr = "";

/* ===================== */

var GLOBAL_V_SendCount        = -1; 
var GLOBAL_V_ReceiveCount     = -1;  
var GLOBAL_V_SignonFormName   = "";  
var GLOBAL_VF_SY121_REFRESH_Requested    = false; 
var GLOBAL_VF_SY121_REFRESH_ShowMessages = false; 
var GLOBAL_HandlingArrivedForm           = false; 
var GLOBAL_strProbeSeparator = "";     
var GLOBAL_New_VF_UM701_Form = false;

/* Disable keyboard buffering */
var GLOBAL_V_SendGO = "Y";
var GLOBAL_V_SendSTOP = "N";

var arraystrLinkFunctionKeys = new Array(
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "Clear","Enter","",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "Page Up","Page Down","","",    "",     "",     "",
    "",     "",     "Print","",     "",     "",     "",     "Help", "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "F1",   "F2",   "F3",   "F4",   "F5",   "F6",   "F7",   "F8",
    "F9",   "F10",  "F11",  "F12",  "F13",  "F14",  "F15",  "F16",  "F17",  "F18",
    "F19",  "F20",  "F21",  "F22",  "F23",  "F24",  "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "Sys Req","Test Req","Reset","","",     "",     "",
    "",     "",     "",     "",     "",     "",     "",    "Home Field",  "PA2",  "PA3",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "Attn", "",     "",     "",
    "",     "",     "",     "PA1",  "",     "");

var arraystrLinkFunctionKeysLiterals = new Array(
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "KeyClear","KeyEnter","",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "KeyPageUp","KeyPageDown","","",    "",     "",     "",
    "",     "",     "KeyPrint","",     "",     "",     "",     "KeyHelp", "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "KeyF1",   "KeyF2",   "KeyF3",   "KeyF4",   "KeyF5",   "KeyF6",   "KeyF7",   "KeyF8",
    "KeyF9",   "KeyF10",  "KeyF11",  "KeyF12",  "KeyF13",  "KeyF14",  "KeyF15",  "KeyF16",  "KeyF17",  "KeyF18",
    "KeyF19",  "KeyF20",  "KeyF21",  "KeyF22",  "KeyF23",  "KeyF24",  "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "KeySysReq","KeyTestReq","KeyReset","","",     "",     "",
    "",     "",     "",     "",     "",     "",     "",  "KeyHome", "KeyPA2",  "KeyPA3",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",
    "",     "",     "",     "",     "",     "",     "KeyAttn", "",     "",     "",
    "",     "",     "",     "KeyPA1",  "",     "");

var arrayControlTypes = new Array(
    "",     "",     "", "Menu button", "Label", "", "Frame", "Option button", "Check box", "Command button", "Text box",
    "",     "Combo box", "",  "DataGrid", "", "", "", "", "",  "Up down",
    "Date combo box",  "PictureBox", "ListBox", "", "Data", "NumericCombo", "ListView", "ImageList", "", "TreeView",
    "ProgressBar",  "ScrollBar",  "TrackBar", "Tab", "", "TrackBar");
    
var GLOBAL_objStartSignalQueue = null;
var GLOBAL_objEndSignalQueue   = null;

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* These are the methods that communicate with VL component VF_UM703         */
/* ------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

var arrayVFPROP            = new Array(); 
var objVFPROP_Exchange1    = null; 
var objVFPROP_Exchange2    = null; 
var objVFPROP_LastTransact = null; 
var intVFPROP_LastTransact = 0;  

/* ------------------------------------------------------------------------- */

function VFPROP_Initialize()
{
    if (objVFPROP_Exchange1 == null)
    {  
       objVFPROP_Exchange1    = document.getElementById("VFPROP_Exchange1");
       objVFPROP_Exchange2    = document.getElementById("VFPROP_Exchange2");
       objVFPROP_LastTransact = document.getElementById("VFPROP_LastTransAct");
       if (objVFPROP_Exchange1 == null) alert("Failed to load elements correctly"); 
    }
    return; 
}

/* ------------------------------------------------------------------------- */

function VFPROP_Get(strId,intInstance)
{
   VFPROP_Initialize(); 
   {
      var strKey   = strId.toUpperCase() + "." +  intInstance.toString();        
      var strValue = arrayVFPROP[strKey];  
      if (strValue == null) return("");
      else                  return(strValue);     
   }       
}

/* ------------------------------------------------------------------------- */

function VFPROP_Set(strId,intInstance,strValue)
{
   VFPROP_Initialize();
   {
      var strKey   = strId.toUpperCase() + "." + intInstance.toString();
      arrayVFPROP[strKey] = strValue;     
   }        
   return;   
}
 
/* ------------------------------------------------------------------------- */

function VFPROP_Get_VL(strId,intInstance)  
{
   objVFPROP_Exchange1.innerText = VFPROP_Get(strId,intInstance); 
   return;
}  

/* ------------------------------------------------------------------------- */

function VFPROP_Set_VL(strId,intInstance)  
{
   VFPROP_Initialize(); 
   VFPROP_Set(strId,intInstance,objVFPROP_Exchange1.innerText);  
   return;  
}  

/* ------------------------------------------------------------------------- */
/* VF_SY121_GET_NEXT_SIGNAL - Get the next signal                            */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GET_NEXT_SIGNAL()
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

/* ------------------------------------------------------------------------- */

function VFPROP_Signal(strEventId,strEventPayLoad)
{
   var objSignal = new Object();

   /* Initialize */ 

   VFPROP_Initialize(); 

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

   /* Fire the signal to the HTML form container */

   objVFPROP_LastTransact.innerText = intVFPROP_LastTransact.toString();  
   window.document.title = "<<VLF_SIGNAL>>";  

   /* Finished */

   return; 
}

/* ------------------------------------------------------------------------------------------------------------------------ */
/* VF_UM703_CreateControl - Insert Newlook this way to avoid the Microsoft ActiveX "click here to activate control" message */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_CreateControl(strContainerSpan, sLicParam, sUseIni)
{ 
   var objContSpan = document.getElementById(strContainerSpan);
   
   var strHTML = "<object id='NewLookAX' style='height:100%;' width='100%' classid='CLSID:CFFE5E18-79B9-431C-8CE2-AE55A16E7C09'><param name='options' value='-vr -q " + sUseIni + "'><param name='TimeOut' value='0'>" + sLicParam + "<h1 id='NL_Failed'>Newlook has failed to Initialize.</h1></object>"; 

   objContSpan.insertAdjacentHTML("afterBegin", strHTML);
}

/* ------------------------------------------------------------------------- */
/* VF_SY703_INITIALIZE - Invoked from the VF_UM703.HTM file to start things  */
/* ------------------------------------------------------------------------- */ 

function VF_SY703_INITIALIZE()
{
   
   if ( document.all("NewLookAX") ) 
   {
      var strNewlookVersion = "";  

      objNewLook = NewLookAX;

      GLOBAL_V_SendCount    = -1; 
      GLOBAL_V_ReceiveCount = -1;  
      GLOBAL_V_SignonFormName = ""; 

      VF_SY121_SETNL_VALUE("V_SendCount",0);  
      VF_SY121_SETNL_VALUE("V_ReceiveCount",0);  

      VF_SY121_SETNL_VALUE("App.OnReceive","VF_Macro.VF_Receive"); 
      VF_SY121_SETNL_VALUE("App.OnSend",   "VF_Macro.VF_Send");  
      VF_SY121_SETNL_VALUE("App.OnRefresh","VF_Macro.VF_Receive");                
      VF_SY121_SETNL_VALUE("V_SendSTATE",GLOBAL_V_SendGO);  
      VF_SY121_SETNL_VALUE("V_SendSTOP",GLOBAL_V_SendGO);  
      VF_SY121_SETNL_VALUE("V_SendGO",GLOBAL_V_SendGO);        
      objNewLook.OnTitleChanged = VF_SY121_HANDLEARRIVEDFORM; 

      try { strNewlookVersion = objNewLook.GetValue("App.Version"); }
      catch (objError) { strNewlookVersion = "UNKNOWN" }  
      
      VFPROP_Signal("NL_Loaded",strNewlookVersion);
   }
   else 
   {
      VFPROP_Signal("NL_NotLoaded");
   }
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_HANDLEARRIVEDFORM - Newlook screen arrival processing  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_HANDLEARRIVEDFORM()
{

   /* If not already handling an arrived form */   

   if ( !(GLOBAL_HandlingArrivedForm)  )
   {
       GLOBAL_HandlingArrivedForm = true;

       var flag_REFRESH_Requested    = GLOBAL_VF_SY121_REFRESH_Requested; 
       var flag_REFRESH_ShowMessages = GLOBAL_VF_SY121_REFRESH_ShowMessages; 

       GLOBAL_VF_SY121_REFRESH_Requested    = false;
       GLOBAL_VF_SY121_REFRESH_ShowMessages = false; 

       /* Reset the background and index variables for each form referenced by the naming tool VF_UM701 */
       GLOBAL_CurrControlInd  = -1; 
       GLOBAL_ControlBackr    = ""; 

       var strArrivedFormName     = VF_SY121_GETCURRENTFORM(); 
       var strArrivedFormCaption  = VF_SY121_GETCURRENTFORMCAPTION(); 
       var strLastFormOnStack     = "";   
       
       /* Get the details of the last form currently on the stack */

       if (arraystrFormStack.length > 0) strLastFormOnStack = arraystrFormStack[arraystrFormStack.length - 1]; 
       else                              strLastFormOnStack = ""; 

       /* If newlook is connected */   

       if (VF_SY121_NLCONNECTED()) 
       {
          var intLastAIDKey      = VF_SY121_GETNL_VALUE("App.LastAidKey");  
          var strLastAIDKey      = arraystrLinkFunctionKeys[intLastAIDKey];   
          var int_V_SendCount    = VF_SY121_GETNL_VALUE("V_SendCount");
          var int_V_ReceiveCount = VF_SY121_GETNL_VALUE("V_ReceiveCount");

          /* If a refresh has been requested reset some details and display messages */

          if (flag_REFRESH_Requested)
          {
             GLOBAL_V_SendCount    = -1; 
             GLOBAL_V_ReceiveCount = -1;    

             if (flag_REFRESH_ShowMessages)
             { 
                 if (strArrivedFormName == "") 
                 {
                    alert("Refresh Note: The 5250 screen currently being displayed by Newlook has no name.\rie: There is no Newlook Designer (Name) property that is associated with it.");
                 }
                 else
                 {
                    var strMessage = "";
                    strMessage += "Refresh Note: The 5250 screen currently being displayed by Newlook is named \"" + strArrivedFormName + "\""; 
                    if (strArrivedFormCaption != "") strMessage += "\rIt has caption \"" + strArrivedFormCaption + "\" associated with it."; 
                    alert(strMessage); 
                 }
             }                           

          }

          /* Track the signon screen */ 
      
          if ((GLOBAL_V_SignonFormName == "") && (strArrivedFormName != "")) GLOBAL_V_SignonFormName = strArrivedFormName; 

          var strOTFNactive = VFPROP_Get("OTFN.Active",1);
          
          /* If this screen and the preceding screen are the same then ignore this request */ 
          if ( (strArrivedFormName != "") && (strArrivedFormName == strLastFormOnStack) ) 
          {
             GLOBAL_HandlingArrivedForm = false;
             return;
          }      

          /* If the send count has not changed then this is phantom message that should be ignored */

          if (int_V_SendCount == GLOBAL_V_SendCount)
          {
             GLOBAL_HandlingArrivedForm = false;
             return;
          }

          /* If the last AID key is nothing then assume enter */

          if (strLastAIDKey == "") strLastAIDKey = "Enter"; 
      
          /* Else track the latest changed values */  
       
          GLOBAL_V_SendCount    = int_V_SendCount;  
          GLOBAL_V_ReceiveCount = int_V_ReceiveCount; 

          /* Indicate that NewLook is still connected */ 
          VFPROP_Set("objNewLook.Connected",1,"TRUE");

          /* Update the previous form with the AID bytes use to come from it */

          if ( arraystrFormStack.length > 0) 
          {
             var intIndex = arraystrFormStack.length - 1;   
             VF_SY121_SELECT_ROADMAP_FORM(intIndex,false); 
             arrayintFormStackAID[intIndex]       = intLastAIDKey; 
             arraystrFormStackAIDTarget[intIndex] = strArrivedFormName; 
             VF_SY121_ADD_ROADMAP_AID(strLastAIDKey); 
          }

          /* Keep a stack of all the forms used in the order they are used */ 
          arraystrFormStack[arraystrFormStack.length]                   = strArrivedFormName; 
          arrayintFormStackAID[arrayintFormStackAID.length]             = 13; /* Enter */ 
          arraystrFormStackAIDTarget[arraystrFormStackAIDTarget.length] = ""; 

          /* Track the current form's sampling index */
          intCurrentSampleFormIndex = arraystrFormStack.length - 1;  

          /* Sample this form's layout details */ 
          VF_SY121_SAMPLE_FORM_LAYOUT();

          /* Update the roadmap */
          VFPROP_Set("ArrivedForm.SampleIndex",1,intCurrentSampleFormIndex.toString()); 

          /* Addition for VF_UM701 to check whether user clicked in rectangle div that is not the one currently showing. See Mthroutine Name(uUpdateNLcontrols) in VF_UM701 */
          VFPROP_Set("Div.SelectedIndex",1,intCurrentSampleFormIndex.toString());     

          VF_SY121_ADD_ROADMAP_FORM(strArrivedFormName,intCurrentSampleFormIndex);
 
          /* Select the roadmap */
          VF_SY121_SELECT_ROADMAP_FORM((arraystrFormStack.length - 1),true);              

          /* Start / restart the form layout timer */
          VF_SY121_START_FORM_LAYOUT_TIMER();  

       } 
       else
       {
          /* Stop any active form layout timer */ 

          VF_SY121_STOP_FORM_LAYOUT_TIMER();  

          /* Indicate that Newlook is no longer connected */

          VFPROP_Set("objNewLook.Connected",1,"FALSE"); 
   
          /* Clear the tracking arrays */

          VF_SY121_CLEAR_FORM_LAYOUTS(); 

          /* Set the arrived form index to indicate not valid */ 

          VFPROP_Set("ArrivedForm.SampleIndex",1,"-1"); 
       }     

       /* Signal back to the VF_UM703 that a form has arrived and include the name and a suggested caption */

       if (strArrivedFormCaption == "") VFPROP_Set("ArrivedForm.Caption",1,strArrivedFormName);  
       else                             VFPROP_Set("ArrivedForm.Caption",1,strArrivedFormCaption);   

       VFPROP_Signal("ArrivedForm",strArrivedFormName);

       /* Finished */

       GLOBAL_HandlingArrivedForm = false;

   }
 
   /* Reset back to default value */

   GLOBAL_VF_SY121_REFRESH_Requested    = false;
   GLOBAL_VF_SY121_REFRESH_ShowMessages = false; 

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_MAKESCRIPT_KEY - Make a recommended script send key operation    */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_MAKESCRIPT_SENDKEY(arrayScript, intIndex, strOverrideComment)
{

   if (intIndex <= -1) return;
   if (intIndex >= arraystrFormStack.length) return;
   
   {
      var strAIDKey    = arraystrLinkFunctionKeysLiterals[ arrayintFormStackAID[intIndex] ];   
      var strAIDTarget = arraystrFormStackAIDTarget[intIndex]; 

      if (strOverrideComment != null) VF_SY121_MAKESCRIPT_COMMENT(arrayScript,strOverrideComment); 
      else                            VF_SY121_MAKESCRIPT_COMMENT(arrayScript,("Send the key required to navigate to " + strAIDTarget)); 
      
      if ((strAIDKey != "") && (strAIDKey.charAt(0) != " ")) arrayScript[arrayScript.length] = "SENDKEY(" + strAIDKey + ");";           
   
   } 

   return;
}  


/* --------------------------------------------------------- */
/* VF_SY121_MAKESCRIPT_COMMENT - Make a comment              */
/* --------------------------------------------------------- */ 

function VF_SY121_MAKESCRIPT_COMMENT(arrayScript,strComment) 
{
   arrayScript[arrayScript.length] = " ";       
   arrayScript[arrayScript.length] = "/* " + strComment + " */";       
   arrayScript[arrayScript.length] = " ";       
   return; 
}

/* ----------------------------------------------------------------- */
/* VF_SY121_MAKESCRIPT_CHECKFORM - Make a CHECK_CURRENT_FORM command */
/* ----------------------------------------------------------------- */ 

function VF_SY121_MAKESCRIPT_CHECKFORM(arrayScript, strTargetForm, strMessage)
{
   VF_SY121_MAKESCRIPT_COMMENT(arrayScript,("Check for arrival at " + strTargetForm)); 
   arrayScript[arrayScript.length] = " if ( !(CHECK_CURRENT_FORM(\"" + strTargetForm + "\",\"" + strMessage + "\")) ) return;";          
   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_MAKESCRIPT_DATA - Make a recommended script set data operation   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_MAKESCRIPT_SETVALUE(arrayScript, intIndex, flagSignOnScreen)
{
   if (intIndex <= -1) return;
   if (intIndex >= arraystrFormStack.length) return;

   { 
      var strFormName     = arraystrFormStack[intIndex]; 
      var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
      var strControlName  = ""; 
      var intCounter      = 0;   

      if (objFormSnapShot != null)
      {
         for (strControlName in objFormSnapShot.arrayobjControls)
         {
            var objControl        = objFormSnapShot.arrayobjControls[strControlName];   
            var flagLineGenerated = false;  

            if ( ( objControl != null ) && (objControl.intType != 4) && ( objControl.intChangeCount > 0 ) )
            {
                intCounter++;
         
                if (intCounter == 1) VF_SY121_MAKESCRIPT_COMMENT(arrayScript,("Set up data fields on form " + strFormName)); 

                /* Handle the special sign on screen */  
                  
                if (flagSignOnScreen)
                {
                   switch (intCounter)
                   {
                      case 1: /* Assume the user if the first field */
                           arrayScript[arrayScript.length] = "SETVALUE(\"" + objControl.strControlName + "\",objUser.Name);";
                           flagLineGenerated = true;
                           break;  

                      case 2: /* Assume that teh password is the second field */  
                           arrayScript[arrayScript.length] = "SETVALUE(\"" + objControl.strControlName + "\",objUser.Password);"; 
                           flagLineGenerated = true;
                           break;

                      default :
                           break;
                   } 
                }
                
                /* If no line was generated so far then generate a default one */ 

                if ( !(flagLineGenerated) ) 
                {
                   arrayScript[arrayScript.length] = "SETVALUE(\"" + objControl.strControlName + "\",\"" + objControl.strLatestText + "\");";
                   flagLineGenerated = true; 
                }              
            }
         }
      } 
   } 

   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_GETUSAGE - Newlook screen arrival processing                 */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GETUSAGE(strSearchType, strFormName, strFormType, intStart, intLimit, strExcludeForm)
{
   var flagLastSearch    = (strSearchType == "LAST"); 
   var intUseStart       = 0; 
   var intUseLimit       = arraystrFormStack.length - 1; 
   var intReturnIndex    = -1; /* Default return value */
   var intIndex          = 0; 
   var strUseExcludeForm = "*NONE*"; 
  
   /* Extract optional start and end limitations */

   if (intStart != null) intUseStart = intStart; 
   if (intLimit != null) intUseLimit = intLimit; 
   if (strExcludeForm != null) strUseExcludeForm = strExcludeForm; 

   /* Validate */ 

   if (intStart < 0)                              return(intReturnIndex);  
   if (intLimit < 0)                              return(intReturnIndex);  
   if (intLimit > (arraystrFormStack.length - 1)) return(intReturnIndex);  

   /* Do the search to find the last matching value in the stack */  

   for (intIndex = intUseStart; intIndex <= intUseLimit; intIndex++) 
   {
      var strName = arraystrFormStack[intIndex];  

      if ((strFormName == "*ANY") || (strName == strFormName))
      {
          if (strName != strUseExcludeForm)
          {
              objFormSnapShot = arrayobjFormStackSnapShots[intIndex];

              if ((objFormSnapShot != null) && ((objFormSnapShot.strFormType == strFormType) || (strFormType == "*ANY")) ) 
              {
                 intReturnIndex = intIndex;
                 if ( !(flagLastSearch) ) return(intReturnIndex); 
              }
          }      
      }  
   }

   /* Finished */ 

   return(intReturnIndex);  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_GET_PRECEDING_JUNCTION - Get the preceding junction to a node    */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GET_PRECEDING_JUNCTION()
{
   var strSourceForm  = VFPROP_Get("GETJUNCTION.Source",1) 
   var strTargetForm  = "";
   var intSourceIndex = 0; 
   var intSourceIndex = 0; 

   if (strSourceForm != "")
   {
       /* Locate the last occurence of this source form */ 
    
       intSourceIndex = VF_SY121_GETUSAGE("LAST",strSourceForm,"*ANY"); 

       /* Now find the last preceding junction of any name */
   
       if (intSourceIndex > -1) intTargetIndex = VF_SY121_GETUSAGE("LAST","*ANY","NODE_JUNCTION",0,(intSourceIndex - 1),strSourceForm);  

       if (intTargetIndex > -1) strTargetForm = arraystrFormStack[intTargetIndex];  
   } 

   /* Set the response */

   VFPROP_Set("GETJUNCTION.Target",1,strTargetForm);  

   /* Finished */ 

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_MAKESCRIPT - Make a recommended script                           */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_MAKESCRIPT()
{
   var strType       = VFPROP_Get("MAKESCRIPT.Type",1) 
   var strSourceForm = VFPROP_Get("MAKESCRIPT.Source",1) 
   var strTargetForm = VFPROP_Get("MAKESCRIPT.Target",1) 
   var arrayScript   = new Array(); 
   var intIndex      = 0; 
   var strResponse   = "OK";  /* Default response */ 

   /* Handle the various supported script types */

   switch (strType)
   {    
     /* ======================================== */ 
     /* Handle a junction to junction transition */ 
     /* ======================================== */ 

      case "NAVIGATE":  
           {
              var intAttempts = 0;

              for (intAttempts = 1; intAttempts <= 3; intAttempts++)
              { 
                  var intTargetIndex   = 0;   
                  var intSourceIndex   = 0;  
                  var intJunctionCount = 0;     
             
                  /* Assume that this will be an okay attempt and clear the array */
                  
                  strResponse        = "OK";
                  arrayScript.length = 0;                   

                  /* On each attempt make a new try at getting a result */  

                  switch (intAttempts)
                  {
                     case 1:
                          intTargetIndex = VF_SY121_GETUSAGE("FIRST",strTargetForm,"NODE_JUNCTION");   
                          intSourceIndex = VF_SY121_GETUSAGE("LAST", strSourceForm,"NODE_JUNCTION",0,(intTargetIndex - 1));  
                          break;

                     case 2:
                          intSourceIndex = VF_SY121_GETUSAGE("FIRST",strSourceForm,"NODE_JUNCTION"); 
                          intTargetIndex = VF_SY121_GETUSAGE("FIRST",strTargetForm,"NODE_JUNCTION",(intSourceIndex + 1));    
                          break;

                     case 3:
                          intTargetIndex = VF_SY121_GETUSAGE("LAST",strTargetForm,"NODE_JUNCTION");   
                          intSourceIndex = VF_SY121_GETUSAGE("LAST",strSourceForm,"NODE_JUNCTION",0,(intTargetIndex - 1)); 
                          break;

                  } 
                  
                  /* If a valid range of indexes was found then use it to try and generate code */        
            
                  if ((intSourceIndex > -1) && (intTargetIndex > -1)) 
                  {        
                      var flagSignOnScreen = (strSourceForm == GLOBAL_V_SignonFormName); 
                     
                      /* Special code for a sign on screen */
                     
                      if (flagSignOnScreen)
                      {

                         arrayScript[arrayScript.length] = '/* If you need to set up multilingual strings or function key captions, use logic like this  */';
                         arrayScript[arrayScript.length] = '/* switch (objFramework.Language)                                                            */';
                         arrayScript[arrayScript.length] = '/* {                                                                                         */';                                     
                         arrayScript[arrayScript.length] = '/* case "ENG":                                                                               */';
                         arrayScript[arrayScript.length] = '/* If you need to set up multilingual strings for use in other RAMP scripts then use this:   */';
                         arrayScript[arrayScript.length] = '/* ADD_STRING(1,"english string 1");                                                         */';      
                         arrayScript[arrayScript.length] = '/* ADD_STRING(2,"english string 2");                                                         */'; 
                         arrayScript[arrayScript.length] = '/* then in the other scripts use  var StrText = STRING(1); to get the string value.          */';            
                         arrayScript[arrayScript.length] = '/* If you need to set up multilingual function keys then use this function                   */';
                         arrayScript[arrayScript.length] = '/* OVERRIDE_KEY_CAPTION_ALL(KeyF1,"english help");                                           */';
                         arrayScript[arrayScript.length] = '/* break;                                                                                    */';
                         arrayScript[arrayScript.length] = '/* case "ESP":                                                                               */';
                         arrayScript[arrayScript.length] = '/* Spanish versions of multilingual strings                                                  */';
                         arrayScript[arrayScript.length] = '/* ADD_STRING(1,"spanish string 1");                                                         */';      
                         arrayScript[arrayScript.length] = '/* ADD_STRING(2,"spanish string 2");                                                         */'; 
                         arrayScript[arrayScript.length] = '/* Spanish function key captions                                                             */';
                         arrayScript[arrayScript.length] = '/* OVERRIDE_KEY_CAPTION_ALL(KeyF1,"spanish Help");                                           */';
                         arrayScript[arrayScript.length] = '/* break;                                                                                    */';
                         arrayScript[arrayScript.length] = '/* default:                                                                                  */';
                         arrayScript[arrayScript.length] = '/* break;                                                                                    */';  
                         arrayScript[arrayScript.length] = '/* }                                                                                         */';
                         arrayScript[arrayScript.length] = ' ';
                         arrayScript[arrayScript.length] = '/* If the user tries to leave an undefined screen (e.g. a prompt), specify the key that is   */';
                         arrayScript[arrayScript.length] = '/* most likely to take them back to a RAMP defined screen.                                   */';
                         arrayScript[arrayScript.length] = '/* ADD_UNKNOWN_FORM_GUESS(KeyF12);                                                           */';
                         arrayScript[arrayScript.length] = ' ';



                         arrayScript[arrayScript.length] = "var strSignOnScreen = CURRENT_FORM();"; 
                         arrayScript[arrayScript.length] = "var intAttempts = 0;"; 
                         arrayScript[arrayScript.length] = "while ((CURRENT_FORM() == strSignOnScreen) && (intAttempts < 2))"; 
                         arrayScript[arrayScript.length] = "{"; 
                         arrayScript[arrayScript.length] = "intAttempts++;";     
                      }
                       
                      /* No generate the required code */                                
                                                                                                                    
                      for (intIndex = intSourceIndex; ((strResponse == "OK") && (intIndex < intTargetIndex)); intIndex++)
                      {   
                         var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
                    
                         if (objFormSnapShot != null)
                         { 
                            switch (objFormSnapShot.strFormType)
                            {
                                 case "NODE_SPECIAL": 
                                       {
                                          break; 
                                       }

                                 case "NODE_CHERRY": 
                                       {
                                          strResponse = "E2"; /* Error 2 */ 
                                          break; 
                                       }

                                 case "NODE_JUNCTION": 
                                       {
                                          intJunctionCount++;
                                          if (intJunctionCount > 1) strResponse = "E2"; /* Error 2 */  
                                          VF_SY121_MAKESCRIPT_SETVALUE(arrayScript,intIndex,flagSignOnScreen); 
                                          VF_SY121_MAKESCRIPT_SENDKEY(arrayScript,intIndex);  
                                          break; 
                                       }

                                 default: 
                                       {
                                         VF_SY121_MAKESCRIPT_SETVALUE(arrayScript,intIndex,flagSignOnScreen); 
                                         VF_SY121_MAKESCRIPT_SENDKEY(arrayScript,intIndex);  
                                         break; 
                                       }

                            }  
                         }
                      
                      }

                      /* Issue termination code if no errors and code was generated */ 
                      
                      if ((strResponse == "OK") && (arrayScript.length > 0)) 
                      {
                         if (flagSignOnScreen) arrayScript[arrayScript.length] = "}"; 
                         
                         VF_SY121_MAKESCRIPT_CHECKFORM(arrayScript,arraystrFormStack[intTargetIndex],("Unable to display form " + arraystrFormStack[intTargetIndex]) );       
                      
                      }        

                  }

                  /* Now see if this attempt is okay and some code was generated break the attempts loop */ 
                    
                  if ((strResponse == "OK") && (arrayScript.length > 0)) break;
                  
                 /* Otherwise we will loop around and have another attempt */    
              } 

              /* If all 3 attempts come up with nada then it's an error */ 

              if (arrayScript.length <= 0) strResponse = "E1";            
          }

          break; 

     /* ======================================== */ 
     /* Handle a special                         */ 
     /* ======================================== */ 
          
      case "ELIMINATE":
           {  
              var intElimIndex = VF_SY121_GETUSAGE("LAST",strSourceForm,"NODE_SPECIAL"); 

              if (intElimIndex > -1)
              {
                 for (intIndex = intElimIndex; intIndex < arraystrFormStack.length; intIndex++)
                 { 
                    var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
 
                    if (objFormSnapShot == null)                        break;
                    if (objFormSnapShot.strFormType == "NODE_CHERRY")   break;
                    if (objFormSnapShot.strFormType == "NODE_JUNCTION") break;

                      
                    VF_SY121_MAKESCRIPT_SETVALUE(arrayScript,intIndex,false); 
                    VF_SY121_MAKESCRIPT_SENDKEY(arrayScript,intIndex + 1," ");
                 }
              }
  
              if (arrayScript.length <= 0) strResponse = "E3";           
  
           }

           break; 

     /* ======================================== */ 
     /* Handle a cherry invocation               */ 
     /* ======================================== */ 

      case "INVOKE":  
           {
              var intCherryIndex = VF_SY121_GETUSAGE("LAST",strTargetForm,"NODE_CHERRY"); 
               
              /* If the cherry was found */  
              
              if (intCherryIndex > -1)
              {
                 var intPreviousJunctionIndex = VF_SY121_GETUSAGE("LAST","*ANY","NODE_JUNCTION",0,intCherryIndex); 
 
                 if (intPreviousJunctionIndex > -1)
                 {

                    VF_SY121_MAKESCRIPT_COMMENT(arrayScript,"Navigate to the nearest access junction");  
                    arrayScript[arrayScript.length] = "NAVIGATE_TO_JUNCTION(\"" + arraystrFormStack[intPreviousJunctionIndex] + "\");";          
              
                    VF_SY121_MAKESCRIPT_CHECKFORM(arrayScript,arraystrFormStack[intPreviousJunctionIndex],("Unable to navigate to form " + arraystrFormStack[intPreviousJunctionIndex]) );            

                    for (intIndex = intPreviousJunctionIndex; intIndex < intCherryIndex; intIndex++)
                    { 
                       var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
                       if (objFormSnapShot != null)
                       { 
                          if (objFormSnapShot.strFormType != "NODE_SPECIAL")
                          {
                             VF_SY121_MAKESCRIPT_SETVALUE(arrayScript,intIndex,false); 
                             VF_SY121_MAKESCRIPT_SENDKEY(arrayScript,intIndex);  
                          }
                       }
                    }
                 }
              }
   
              if (arrayScript.length <= 0) strResponse = "E4";           
           }

           break;   

     /* ======================================== */ 
     /* Handle a cherry return to junction       */ 
     /* ======================================== */ 

      case "RETURN":
           {
              var intCherryIndex = VF_SY121_GETUSAGE("LAST",strSourceForm,"NODE_CHERRY");  

              if (intCherryIndex > -1)
              {
                 var intNextJunctionIndex = VF_SY121_GETUSAGE("FIRST","*ANY","NODE_JUNCTION",intCherryIndex);   

                 if (intNextJunctionIndex > -1)
                 {

                     VF_SY121_MAKESCRIPT_COMMENT(arrayScript,("Navigate back to the nearest junction (" + arraystrFormStack[intNextJunctionIndex] + ")") );  

                     for (intIndex = intCherryIndex; intIndex < intNextJunctionIndex; intIndex++)
                     { 
                        var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
                        if (objFormSnapShot != null)
                        { 
                            if (objFormSnapShot.strFormType != "NODE_SPECIAL") 
                            {
                               if (intIndex > intCherryIndex) VF_SY121_MAKESCRIPT_SETVALUE(arrayScript,intIndex,false); 
                               VF_SY121_MAKESCRIPT_SENDKEY(arrayScript,intIndex);  
                            }  
                        }
                     }
                 }
              }

              if (arrayScript.length <= 0) strResponse = "E5";            
           }
 
           break;
           
           
     /* ======================================== */ 
     /* Handle a cherry button script            */ 
     /* ======================================== */ 

      case "BUTTON":
              {
                  var intCherryIndex  = VF_SY121_GETUSAGE("LAST",strSourceForm,"NODE_CHERRY"); 
                  var objFormSnapShot = null;  
             
                  /* If the cherry was found */  
              
                  if (intCherryIndex > -1)
                  {

                     VF_SY121_MAKESCRIPT_COMMENT(arrayScript,"Handle any automatic client-side prompting");   
                     arrayScript[arrayScript.length] = "if ( HANDLE_PROMPT() ) return;";           
                     VF_SY121_MAKESCRIPT_COMMENT(arrayScript,"Otherwise handle function keys and buttons");   
                     arrayScript[arrayScript.length] = "switch (objScriptInstance.FunctionKeyUsed)";           
                     arrayScript[arrayScript.length] = "{";           

                     var objFormSnapShot = arrayobjFormStackSnapShots[intCherryIndex];
   
                     if (objFormSnapShot != null)
                     { 
                         for (intI in objFormSnapShot.arrayobjFunctionKeys)
                         {
                            objFunctionKey = objFormSnapShot.arrayobjFunctionKeys[intI];

                            if (objFunctionKey.strKeySymbolicName != "")
                            {
                               arrayScript[arrayScript.length] = "   case " + objFunctionKey.strKeySymbolicName + ":";
                               arrayScript[arrayScript.length] = "      SENDKEY(" + objFunctionKey.strKeySymbolicName + ");";
                               arrayScript[arrayScript.length] = "      break;";           
                            }   
                         }
                     }

                     arrayScript[arrayScript.length] = "   default:";           
                     arrayScript[arrayScript.length] = "      SENDKEY(objScriptInstance.FunctionKeyUsed);";           
                     arrayScript[arrayScript.length] = "      break;";           
                     arrayScript[arrayScript.length] = "}";           
                  }
              }

              if (arrayScript.length <= 0) strResponse = "E6";            

              break;

   }  /* Switch */ 
  
   /* Dump out the script generated and response code */ 

   VFPROP_Set("MAKESCRIPT.Response",1,strResponse);   
   VFPROP_Set("MAKESCRIPT.TotalScriptLines",1,"0");  
  
   if ((strResponse == "OK") && (arrayScript.length > 0))
   { 
      VFPROP_Set("MAKESCRIPT.TotalScriptLines",1,arrayScript.length.toString()); 
      for (intIndex = 0; intIndex < arrayScript.length; intIndex++)
      {
         VFPROP_Set("MAKESCRIPT.ScriptLine",(intIndex + 1),arrayScript[intIndex]); 
      }
   }    

   /* Free resources */ 

   delete(arrayScript);

   /* Finished */

   return;  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_NLCONNECTED - Check that we are still connected */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_NLCONNECTED()
{
   var intStatus = 0;

   /* Status = 0 means disconnected */
   /* Status = 1 means connected to a host */
   /* Status = 2 means connected to a host but busy */
   /* Status = 3 means connected to a host but an error has occured.*/

   try { intStatus = VF_SY121_GETNL_VALUE("App.Status"); }
   catch (objError) { intStatus = 0 }

   return((intStatus > 0));
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_NLUSEABLE - Check whether newlook is useable                     */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_NLUSEABLE()
{
   var intStatus = 0;

   /* Status = 0 means disconnected */
   /* Status = 1 means connected to a host */
   /* Status = 2 means connected to a host but busy */
   /* Status = 3 means connected to a host but an error has occured.*/

   try { intStatus = VF_SY121_GETNL_VALUE("App.Status"); }
   catch (objError) { intStatus = 0 }
   
   return((intStatus == 1));
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_GETNL_VALUE - Gets a variable content from NL Active X */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GETNL_VALUE(argstrVariable)
{
   var strValue = ""; 
   
   try              { strValue = objNewLook.GetValue(argstrVariable); }
   catch (objError) { }
 
   return(strValue); 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SETNL_VALUE - Sets a variable in NL Active X */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_SETNL_VALUE(argstrVariable, argstrVariant)
{
   switch (typeof(argstrVariant))
   {
      case "string":

            if (argstrVariant == "") argstrVariant = " ";
            objNewLook.SetValue(argstrVariable, (strDoubleQuote + argstrVariant + strDoubleQuote) );
            break; 

      case "boolean":
      case "number":
            objNewLook.SetValue(argstrVariable, argstrVariant);
            break; 

      default:
            alert("VF_SY121_SETNL_VALUE attempt not valid. Javascript value argument passed is of type " + typeof(argstrVariant)); 
            break;
   }
 
   return;  
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY121_GETCURRENTFORM - Gets the name of the current Newlook form and returns it */
/* ---------------------------------------------------------------------------------- */ 
function VF_SY121_GETCURRENTFORM()
{
   return( VF_SY121_GETNL_VALUE("ActiveForm.Name") ); 
}

/* ---------------------------------------------------------------------------------- */
/* VF_SY121_ACTIVE_FORM_INFO - Gets the name of the active Newlook form and returns it */
/* ---------------------------------------------------------------------------------- */ 
function VF_SY121_GET_ACTIVE_FORM_INFO()
{
   var strActiveForm = VF_SY121_GETCURRENTFORM(); 
   VFPROP_Set("ActiveForm.Name",1,strActiveForm);  
   VFPROP_Set("ActiveForm.Type",1,VF_SY121_GET_FORM_TYPE(strActiveForm));  
   return;
}

/* -------------------------------------------------------------------------------------------- */
/* VF_SY121_GETCURRENTFORMCAPTION - Gets the caption of the current Newlook form and returns it */
/* -------------------------------------------------------------------------------------------- */ 
function VF_SY121_GETCURRENTFORMCAPTION()
{
   return( VF_SY121_GETNL_VALUE("ActiveForm.Caption") ); 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_RETURN_FORM_LAYOUT - Return form layout details                  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GET_FORM_LAYOUT()
{
   var intTotalControls = 0; 
   var intTotUsrNamedCtls = 0;    
   var strControlName   = ""; 
   var objControl = null;
      
   if ( VFPROP_Get("FORMLAYOUT.FormNoName",1) == "TRUE")
   {
      var intIndex = VF_SY121_GETUSAGE("LAST","*ANY","*ANY");
   }
   else 
   {
      var strFormName = VFPROP_Get("FORMLAYOUT.FormName",1); 
      var intIndex = VF_SY121_GETUSAGE("LAST",strFormName,"*ANY");
   }
   
   if (intIndex > -1)
   {
      var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];
      
      if (objFormSnapShot != null)
      {
         for (strControlName in objFormSnapShot.arrayobjControls)
         {
            objControl = objFormSnapShot.arrayobjControls[strControlName];


            if (objControl != null)
            {
               intTotalControls++;
               VFPROP_Set("FORMLAYOUT.ControlName",intTotalControls,strControlName); 
               VFPROP_Set("FORMLAYOUT.ControlType",intTotalControls,objControl.intType.toString()); 
               VFPROP_Set("FORMLAYOUT.ControlRow",intTotalControls,objControl.intRow);
               VFPROP_Set("FORMLAYOUT.ControlCol",intTotalControls,objControl.intCol);   
               VFPROP_Set("FORMLAYOUT.ControlIndex",intTotalControls,objControl.strIndex);  
               VFPROP_Set("FORMLAYOUT.ControlPrecLabel",intTotalControls,objControl.strPrecLabel);  
               VFPROP_Set("FORMLAYOUT.ControlLabelContent",intTotalControls,objControl.strLabelContent);    
               VFPROP_Set("FORMLAYOUT.ControlTempName",intTotalControls,objControl.flagTempName);   
               
               /* Keep 2 counters, one for the real total of controls and the other one only for those that have names that were specified by the user using Designer because these are the only ones shown as named in VF_UM703 */                                     
               if (objControl.flagTempName == "FALSE") intTotUsrNamedCtls++;
               
            }
         }
      } 
   }     

   VFPROP_Set("FORMLAYOUT.TotalControls",1,intTotalControls.toString()); 
   VFPROP_Set("FORMLAYOUT.TotUsrNamedCtls",1,intTotUsrNamedCtls.toString());    
   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_UM703_SET_FORM_HIDDEN_PTYS - Set the form's hidden tag properties formatted as <pty>=<value>;<pty>=<value> ... */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_SET_HIDDEN_PTYS(argstrHiddenTag)
{
   var arrayHiddenTag = new Array();
   arrayHiddenTag = argstrHiddenTag.split(";"); 

   /* Initialize these variables or they will carry the previous value */
   VFPROP_Set("Form.LastSaved", 1, ""); 
   VFPROP_Set("Form.LastUser", 1, ""); 
         
   if (arrayHiddenTag[0] == "") return;
   
   for (intIndex in arrayHiddenTag)
   {
      var arrayPtyVal = arrayHiddenTag[intIndex].split("=");

      switch (arrayPtyVal[0])
      {
         case "LastSaved": VFPROP_Set("Form.LastSaved", 1, arrayPtyVal[1]); break;
         case "LastUser": VFPROP_Set("Form.LastUser", 1, arrayPtyVal[1]); break;
         default: break;
      }

      arrayPtyVal = null;
   }
   
   return;
}

/* ------------------------------------------------------------------------- */
/* VF_UM703_SET_FIELDNAME - Set the field namings changed in VF_UM701 VL     */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_SET_FIELDNAME()
{
   var intInstance = parseInt(VFPROP_Get("Control.Instance",1), 10);
   var intControlCol = parseInt(VFPROP_Get("Control.Col",1),10);    
   var intControlRow = parseInt(VFPROP_Get("Control.Row",1),10);    
   var intControlType = parseInt(VFPROP_Get("Control.Type",1),10); 
   var strControlName  = VFPROP_Get("Control.Name",intInstance); 

   /* This is a control that used to have a name and it was blanked out in Dynamic Naming */
   if (strControlName.length == 0) strControlName = '';
      
   try 
   { 
/* alert("col = " + intControlCol + " row = " + intControlRow + "  name = " + strControlName); */
      objNewLook.SetFieldName(intControlRow, intControlCol, strControlName); 
      VFPROP_Set("Field.Saved", 1, "true");
   }
   catch (objError) 
   { 
      /* can't do until Newlook fixes bug where setting a value between reload override and save override screws up. When the bug is fixed think about only d */
      /* try
      {
         var strControlInd  = VFPROP_Get("Control.Index",intInstance); 
         VF_SY121_SETNL_VALUE("ActiveForm.Controls(" + strControlInd + ").Name", strControlName);    
         VFPROP_Set("Field.Saved", 1, "true");         
      }
      
      catch (objError) 
      {

      } */

      VFPROP_Set("Field.Saved", 1, "false");       
   }
}

/* ------------------------------------------------------------------------- */
/* VF_UM703_RELOAD_OVERRIDE() - This prevents any field values to be saved     */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_RELOAD_OVERRIDE()
{
   objNewLook.ReloadOverride();
}

/* ------------------------------------------------------------------------- */
/* VF_UM703_SAVE_OVERRDIDE - Save the override changed in VF_UM701 VL     */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_SAVE_OVERRIDE()
{
   /*  Long story about this. Main thing: if all of a sudden the background color gets saved as part of the saveoverride, uncomment it. */
   /*  But doing so might introduce other issues so it needs to be tested very well */   
   /* if ( (GLOBAL_ControlBackr != "") && (GLOBAL_CurrControlInd >= 0) ) 
      { 
         VF_SY121_SETNL_VALUE("ActiveForm.Controls(" + GLOBAL_CurrControlInd + ").BackColor", GLOBAL_ControlBackr); 
   } */

   /* Get/Set the form name */
   var strFormName = VFPROP_Get("Update.FormName",1);
      
   /* Check for an existing override */
   var intOvrCount = objNewLook.GetOverrideCount();

   if ( intOvrCount > 0) 
   {
      var strOvrName = objNewLook.GetOverrideDescription();
   }
   else 
   {
      /* no override exists, use the form name */
      var strOvrName = strFormName;
   }

  /* Update the strSelectFormName property of the tracking DIV, the rest is updated in VF_SY121_UPDATE_FORM_TYPE() as part of the RefreshRightPanel routine in VF_UM703 */
   var objDIV = arraystrFormStackDIV[arraystrFormStack.length - 1];
       objDIV.strSelectFormName = strFormName;
   
   var strLastSaved = VFPROP_Get("Form.LastSaved",1);
   var strLastUser = VFPROP_Get("Form.LastUser",1);   

   /* Uncomment the following line when Newlook fixes bug -> their Support Item #07010605 */
   /* VF_SY121_SETNL_VALUE("ActiveForm.HiddenTag", ("LastSaved=" + strLastSaved + ";LastUser=" + strLastUser));  */

   /* Stop this timer. It will be automatically re started when the next form arrives */   
   VF_SY121_STOP_FORM_LAYOUT_TIMER();
   
   /* Turn this flag on because the save override triggers a title change and hence an arrived form and it all gets whacky */
   GLOBAL_HandlingArrivedForm = true;
   
   objNewLook.SetFormName(strFormName);   
   objNewLook.SaveOverride(strOvrName);

   /* Now update the form name in the array of form names even if it hasn't changed it won't matter */
   arraystrFormStack[arraystrFormStack.length - 1] = strFormName;

   /* Now we have to update the snapshot because some fields might have changed names */
   VF_UM703_UPDATE_SNAPSHOT();

   /* Reset */
   GLOBAL_HandlingArrivedForm = false;   

   return;
}

/* ----------------------------------------------------------------------------------------------------- */
/* VF_UM703_UPDATE_SNAPSHOT - Update the snapshot of the screen just saved with potential renamed fields */
/* ----------------------------------------------------------------------------------------------------- */ 
function VF_UM703_UPDATE_SNAPSHOT()
{
   var objFormSnapShot = arrayobjFormStackSnapShots[arrayobjFormStackSnapShots.length - 1]; 

   if (objFormSnapShot != null)
   {  
      var intChgdControlInst = parseInt(VFPROP_Get("Control.Instances",1), 10); 
      var Ind, strControlName, strOldName, objControl, objTempControl, strTempName;
      
      /* If it was an unknown change it because it most certainly will have a name now. */
      if (objFormSnapShot.strFormType == "NODE_UNKNOWN")
      {
         objFormSnapShot.strFormType = "UNDEFINED";
      }

      /* alert("changed controls = " + intChgdControlInst); */
      
      for (Ind = 1; Ind <= intChgdControlInst; Ind++)
      {
         strOldName  = VFPROP_Get("Control.OldName",Ind);        
         objControl = objFormSnapShot.arrayobjControls[strOldName];
         
         if (objControl != null)
         {
            objTempControl = objControl;
            objFormSnapShot.arrayobjControls[strOldName] = null;
            
            strTempName = VFPROP_Get("Control.Name",Ind);
            
            /* If its a control whose name was blanked out it should revert to the type of controls that should be assigned a temporary name and given a name accordingly */
            if (strTempName.length > 0) 
            {
               objTempControl.flagTempName = "FALSE";
               objTempControl.strControlName = strTempName;

               /* alert("NEW " + strTempName + " R= " +  objTempControl.intRow + " C= " + objTempControl.intCol); */
            }
            else 
            {
               objTempControl.flagTempName = "TRUE";
               objTempControl.strControlName = "utxt_" + objControl.strIndex;

               /* alert("OLD " + objTempControl.strControlName + " R= " +  objTempControl.intRow + " C= " + objTempControl.intCol); */
               
            }

            objTempControl.intChangeCount = 0;            

            objFormSnapShot.arrayobjControls[objTempControl.strControlName] = objTempControl;            
         }
         
      }
   }
   
   return;
}

/* ------------------------------------------------------------------------- */
/* VF_UM703_SET_CONTROL_BACKGR - Change the                      */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_SET_CONTROL_BACKGR()
{
   /* Remove this return statement when Newlook fixes bug -> their Support Item #07010605 */
   

  /* Get the index of the control with focus in VF_UM701 */
  var strCtlInd = parseInt(VFPROP_Get("Control.Index",1), 10); 
  
  /* Store the currents control's background and index so that it can be restored to its previous value once another control is to have it backgroudn changed */

  if ( GLOBAL_ControlBackr != "") /* First time that a control is to have its background changed for the current form */
  {
      VF_SY121_SETNL_VALUE("ActiveForm.Controls(" + GLOBAL_CurrControlInd + ").BackColor", GLOBAL_ControlBackr); 
  }

  /* Some controls do not have the BackColor property */
  GLOBAL_ControlBackr = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strCtlInd + ").BackColor");  
    
  if (GLOBAL_ControlBackr != "")
  {
     GLOBAL_CurrControlInd = strCtlInd;  
     VF_SY121_SETNL_VALUE("ActiveForm.Controls(" + strCtlInd + ").BackColor", "&H00FF66FF"); 
  }
  
  return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_START_FORM_LAYOUT_TIMER - Take a sample of a form layout                     */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_START_FORM_LAYOUT_TIMER()
{
   if (objLayoutTimerID == null)
   {
      objLayoutTimerID = window.setInterval(VF_SY121_SAMPLE_FORM_LAYOUT_TIMER,intLayoutTimerInterval);  
   }
   
   return;
}

function VF_SY121_STOP_FORM_LAYOUT_TIMER()
{
   if (objLayoutTimerID != null)
   {
      window.clearInterval(objLayoutTimerID);
      objLayoutTimerID = null;   
   }
   return;
}

function VF_SY121_SAMPLE_FORM_LAYOUT_TIMER()
{
    /* If NL is currently accessible */

    try 
    { 
        if ( VF_SY121_NLUSEABLE() ) 
        {
           /* If not currently handling an arrived form */  

           if ( !(GLOBAL_HandlingArrivedForm) )
           { 
              /* If there is something on the form stack */

              if (arraystrFormStack.length > 0) 
              {
                 var strLastFormOnStack = arraystrFormStack[arraystrFormStack.length - 1]; 
                 var strCurrentFormName = VF_SY121_GETCURRENTFORM(); 

                 /* If the current form does not match the current form try a refresh */
                 if ( strLastFormOnStack != strCurrentFormName ) VF_SY121_REFRESH_FORM_LAYOUTS(false);
                 /* Else try sampling all the fields on the form again */ 
                 else VF_SY121_SAMPLE_FORM_LAYOUT(); 
              } 
           }
        }
    }
    catch (objError)
    {
       /* Ignore the error */ 
    }

    /* Finished */

    return;  
}

function VF_SY121_SAMPLE_FORM_LAYOUT()
{
   if ( !(flagLayoutSampleActive) && (intCurrentSampleFormIndex > -1) )
   {

      flagLayoutSampleActive = true;

      /* --- */       
      /* Try */
      /* --- */       
  
      try 
       {
           var strFormName     = VF_SY121_GETCURRENTFORM();   
           var strFormCaption  = VF_SY121_GETCURRENTFORMCAPTION();   
           var objFormSnapShot = null; 
           var intControlCount = 0; 
           var intI            = 0;
           var strintI         = "";    
           var intType         = 0; 
           var strControlName  = "";   
           var intHashOvr  = -1;              
           var strTempName = "FALSE";           
           var strText    = "";            
           var intRow, intCol;
           
           /* See if the form snap shot object already resides in the array, if not create it and initialize */ 
           objFormSnapShot = arrayobjFormStackSnapShots[intCurrentSampleFormIndex];

           /* -------------------------------------- */
           /* Create the snapshot object if required */
           /* -------------------------------------- */

           if (objFormSnapShot == null)
           {
              /* objFormSnapShot is an object tracked in the arrayobjFormStackSnapShots array */
              /* It has properties                                                            */
              /*    arrayobjControls    : An array of the controls on the form                */ 
              /*    strFormType         : Classification as NODE_JUNCTION, etc                */       
              /*    arrayobjFunctionKeys: An array of the function keys on the form           */ 

              objFormSnapShot                                       = new Object();
              arrayobjFormStackSnapShots[intCurrentSampleFormIndex] = objFormSnapShot;    

              objFormSnapShot.strFormType          = "NODE_UNKNOWN";
              objFormSnapShot.strFormCaption       = strFormCaption;  
              objFormSnapShot.arrayobjControls     = new Array();
              objFormSnapShot.arrayobjFunctionKeys = new Array();
           }    

           /* --------------------------------- */
           /* Get details of fields on the form */
           /* --------------------------------- */

           intControlCount = VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count");

           for (intI = 0; intI < intControlCount; intI++)
           {
               strintI = intI.toString(); 
               /* Very important check: screen out the controls with dodgy rows and/or columns */
               intRow = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Row");
               intCol = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Column");
               intType = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Type");

               /* This line results in data grids and other controls that don't have a row and column property being screened out because of a bug in Newlook */
               /* Once it is possible to set values between reload override and save override at least the first part of the if that screens out datagrids can be removed */
               /* The rest will have to be tested */               
               if ( (intType == 14) || (intRow == "")  || ( intCol == "") ) continue;
               
               /* Get the name of the control. If it has no name, make up a temporary name and flag the control so VF_UM703 knows it is not a user defined name */
               strControlName = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Name"); 

               if (strControlName == "")
               {
                  strControlName = "utxt_" + strintI;
                  strTempName = "TRUE";
               }
               else
               {
                  strTempName = "FALSE";               
               }

               /* Create or update the objControl tracked in the arrayobjControls inside the objFormSnapShot */ 
               var objControl = objFormSnapShot.arrayobjControls[strControlName];  
               
               if ( (intType != 4) && (intType != 14) ) /* when not a label and not a datagrid, get the Text pty */
               {
                  strText = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Text");
               }

               if (objControl == null)               
               {
                  objControl = new Object(); 
                  objFormSnapShot.arrayobjControls[strControlName] = objControl;
                  objControl.strControlName = strControlName;

                  /* These properties are used by the dynamic naming tool VF_UM701 VL component */
                  objControl.intRow = intRow;
                  objControl.intCol = intCol;
                  objControl.intType = intType;
                  objControl.flagTempName = strTempName;
                  objControl.strIndex = strintI;
                  objControl.intChangeCount = 0;
                  objControl.strInitialText = strText;
                  
                  /* If this control is a label, put its caption as its content, otherwise try to find the most suitable value to return */
                  if (intType == 4)
                  {
                     objControl.strPrecLabel = ""; 
                     objControl.strLabelContent = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strintI + ").Caption");
                  }
                  /* Datagrids don't have backgroudn color. This makes it hard for the user to know where to put the name of it because when they focus on the cell in the */
                  /* dynamic naming dialog there is no visual feedback. To get around that, put the control type as the text */
                  else if (intType == 14) 
                  {
                     objControl.strPrecLabel = arrayControlTypes[intType];
                  }
                  else
                  {
                     objControl.strLabelContent = "";
                     objControl.strPrecLabel = VF_UM703_GET_PRECEDLABEL(intI);
                  }
               }

               if (intType != 4)
               {
                  objControl.strLatestText = strText;
                  if (objControl.strLatestText != objControl.strInitialText) objControl.intChangeCount++;   
               }
           }

           VF_UM703_SET_HIDDEN_PTYS(VF_SY121_GETNL_VALUE("ActiveForm.HiddenTag"));
           
           /* ======================================= */ 
           /* Get details of functon keys on the form */
           /* ======================================= */ 

            {
               var intKeyCount    = VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys.Count");
               var intRealKey     = 0;
               var objFunctionKey = null; 

               for (intI = 0; intI < intKeyCount; intI++)
               {
                  strintI = intI.toString(); 
 
                  objFunctionKey = objFormSnapShot.arrayobjFunctionKeys[intI + 1];  

                  if (objFunctionKey == null)
                  {
                     objFunctionKey = new Object();
                     objFormSnapShot.arrayobjFunctionKeys[intI + 1] = objFunctionKey;  
                  }

                  /* Insert the caption */

                  objFunctionKey.strCaption = VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").Text");
                     
                  /* Insert the output key that should be sent */

                  intRealKey = VF_SY121_GETNL_VALUE("ActiveForm.FunctionKeys(" + strintI + ").OutputKey");
                   
                  objFunctionKey.strKeySymbolicName = arraystrLinkFunctionKeysLiterals[intRealKey];  
                  objFunctionKey.strKeytoSend       = arraystrLinkFunctionKeys[intRealKey];  

               } /* end for */

            } /* end scoping block */ 

       } /* end Try */

       /* --------- */
       /* and catch */ 
       /* --------- */
     
       catch (objError) 
       { 
       }

       flagLayoutSampleActive = false; 
   }

   /* Finished */ 

   return; 
}  

/* ------------------------------------------------------------------------- */
/* VF_UM703_CREATE_CONTROL: Get the sample function keys      */
/* ------------------------------------------------------------------------- */ 
function VF_UM703_GET_PRECEDLABEL(intCurrInd)
{
   if (intCurrInd > 0)
   {
      var strPrevInd = (intCurrInd - 1).toString();
      var strPrevCtlType = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strPrevInd + ").Type");
      
      /* if the preceding control was a label, return its caption */
      if (strPrevCtlType == 4)
      {
         return VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strPrevInd + ").Caption");
      }
      /* Otherwise, try the current control's caption as some other controls like checkboxes, menu buttons, etc also have captions */
      else
      {
         var strCaption = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intCurrInd.toString() + ").Caption");
         if (strCaption != "")
         {
            return strCaption;
         }
         /* if not, try the text property of the current controls */
         else
         {
            var strText = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + intCurrInd.toString() + ").Text");
            if (strText != "")
            {
               return strText;
            }
         }
      }
   }
   
   return "";
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_GET_CURRENT_FORM_FUNCTIONKEYS: Get the sample function keys      */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GET_CURRENT_FORM_FUNCTIONKEYS()
{
   /* This is the index of the form that has been selected */
   var iFormIndex = parseInt(VFPROP_Get("SelectedForm.Index",1), 10);     
   var iUseIndex = intCurrentSampleFormIndex; /* default to the current form */
   
   /* if the current form index and the selected one are not equal is because user clicked in the tracking area */
   if (intCurrentSampleFormIndex != iFormIndex) iUseIndex = iFormIndex;
      
   var objFormSnapShot = arrayobjFormStackSnapShots[iUseIndex];
   var intLimit   = arraystrLinkFunctionKeys.length;
   var intIndex   = 0;
   var intI       = 0;
   var IndexbyKey = new Array();

   /* First prime the results with all possible function keys */

   for (intI = 0; intI < intLimit; intI++)
   {
      if (arraystrLinkFunctionKeys[intI] != "")
      {
         var strKeyValue = arraystrLinkFunctionKeys[intI]; 

         intIndex++; 

         VFPROP_Set("CurrentForm.uKeyCaption", intIndex, strKeyValue);  
         VFPROP_Set("CurrentForm.uKeytoSend",  intIndex, strKeyValue);   
         VFPROP_Set("CurrentForm.uEnabled",     intIndex, "FALSE");   
  
         IndexbyKey[strKeyValue] = intIndex; 
      }
   } 
 
   /* Set the count of the number returned */ 

   VFPROP_Set("CurrentForm.FunctionKeyTotal",1,intIndex.toString());  

   /* Now overwrite the function keys with specific details for the current form */

   if (objFormSnapShot != null)
   {
       for (intI in objFormSnapShot.arrayobjFunctionKeys)
       {
          var objFunctionKey = objFormSnapShot.arrayobjFunctionKeys[intI];

          intIndex = IndexbyKey[objFunctionKey.strKeytoSend];

          if (intIndex != null)
          {
             VFPROP_Set("CurrentForm.uKeyCaption", intIndex, objFunctionKey.strCaption);  
             VFPROP_Set("CurrentForm.uEnabled",    intIndex, "TRUE");   
          }     
       }
   }   
          
   /* Clean up */

   delete(IndexbyKey);

   /* Finished */ 

   return; 
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_COUNT_FORM_TYPE - Count form types in snapshots                  */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_COUNT_FORM_TYPE()
{
   var intIndex       = 0; 
   var intLimit       = arraystrFormStack.length;  
   var intJunction    = 0;   
   var intSpecial     = 0;   
   var intDestination = 0;   
   var intOther       = 0;     
   
   for (intIndex = 0; intIndex < intLimit; intIndex++)
   {
      var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];     

      if (objFormSnapShot != null) 
      {
         switch (objFormSnapShot.strFormType)
         {
               case "NODE_JUNCTION": intJunction++; break;
               case "NODE_CHERRY"  : intDestination++; break;
               case "NODE_SPECIAL" : intSpecial++; break; 
               default             : intOther++; break; 

         } /* switch */

      } /* not null */ 

   } /* for */

   /* Return the counts back to VF_UM703 */     

   VFPROP_Set("Count.Junctions",1,intJunction.toString());  
   VFPROP_Set("Count.Destinations",1,intDestination.toString());  
   VFPROP_Set("Count.Special",1,intSpecial.toString());  
   VFPROP_Set("Count.Other",1,intOther.toString());  

   return;  
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_UPDATE_FORM_LAYOUT - Update a forms layout with some details     */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_GET_FORM_TYPE(strFormName)
{
   strReturnType = "UNDEFINED";
   var intIndex  = 0; 
   var intLimit  = arraystrFormStack.length;  
   
   for (intIndex = 0; intIndex < intLimit; intIndex++)
   {
      if ( arraystrFormStack[intIndex] == strFormName )
      {
         var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];     
         if (objFormSnapShot != null) 
         {
            switch (objFormSnapShot.strFormType)
            {
               case "NODE_JUNCTION":
                  strReturnType = "JUNCTION";   
                  break;
               case "NODE_CHERRY":
                  strReturnType = "DESTINATION";   
                  break;
               case "NODE_SPECIAL":
                  strReturnType = "SPECIAL";   
                  break;
               default:
                  strReturnType = "UNDEFINED";   
                  break; 
            }

            return(strReturnType); 
         }
      }                
 
   } /* for */

   return(strReturnType);  
}

function VF_SY121_UPDATE_FORM_TYPE()
{
   var strFormName     = VFPROP_Get("Update.FormName",1);  
   var strFormType     = VFPROP_Get("Update.FormType",1);  
   var intIndex = 0; 
   var intLimit = arraystrFormStack.length;  
   var strOldFormName = VFPROP_Get("Update.OldFormName",1);
   
   /* This situation didn't exist prior to the Dynamic Naming tool. A form can now be renamed. In such cases, we have to find tracking DIVs that represent the same form to rename them. */
   /* This is done by searching for the old name as well. The old form name is set in the uSaveOverride method in VF_UM703 */
   
   if (strOldFormName == "NA") strOldFormName = strFormName;
   
   if ((strFormType != "NODE_BLANK") && (strFormName != ""))  
   {
      for (intIndex = 0; intIndex < intLimit; intIndex++)
      {
          if ( ( arraystrFormStack[intIndex] == strFormName) || ( arraystrFormStack[intIndex] == strOldFormName) )
          {
             var objFormSnapShot = arrayobjFormStackSnapShots[intIndex];     
             var objDIV          = arraystrFormStackDIV[intIndex];

             /* The stack can contain unknown forms. These have been navigated through but not given a name. We ignore them */ 
             if (objDIV.className != "UNKNOWN") 
             {
                objDIV.innerText = strFormName;   

                if (objFormSnapShot == null)
                {
                  objDIV.className = "UNDEFINED";   
                }
                else
                {
                   objFormSnapShot.strFormType = strFormType;
                   
                   switch (objFormSnapShot.strFormType)
                   {
                      case "NODE_JUNCTION":
                         objDIV.className = "JUNCTION";   
                         break;
                      case "NODE_CHERRY":
                         objDIV.className = "CHERRY";   
                         break;
                      case "NODE_SPECIAL":
                         objDIV.className = "SPECIAL";   
                         break;
                      default:
                         objDIV.className = "UNDEFINED";   
                         break; 
                   }
                }
             } /* endif objDIV.className != "UNKNOWN" */   
          } 
      } /* for */

   }

   return; 
}


/* ------------------------------------------------------------------------- */
/* VF_SY121_ADD_ROADMAP_XXXX - Update the roadmap area                       */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_ADD_ROADMAP_AID(strAID)
{
   var objNewDIV = document.createElement("DIV");

   /* objNewDIV.innerText = "<" + strAID + ">"; */    

   objNewDIV.innerHTML = "<font face='Symbol' size='1'>" + "\xAF" + "</font><font face='Arial' size='1'> "+ strAID + "</font>";     

   RoadMapSpan.appendChild(objNewDIV);  

   objNewDIV.scrollIntoView(false);  
 
   return; 
}

function VF_SY121_ADD_ROADMAP_FORM(strFormName,intUseIndex)
{
   var objFormSnapShot = arrayobjFormStackSnapShots[intUseIndex];     
   var strDefaultClass = "UNDEFINED"; 

   var objNewDIV                     = document.createElement("DIV");
   arraystrFormStackDIV[intUseIndex] = objNewDIV; 

   if (strFormName == "") 
   {
      strDefaultClass     = "UNKNOWN"; 
      objNewDIV.innerText = "Unknown Form"; 
   } 
   else
   {
      objNewDIV.innerText = strFormName;
   }

   objNewDIV.intUseIndex          = intUseIndex; 
   objNewDIV.strSelectFormName    = strFormName;

   VFPROP_Set("Div.SelectedIndex",1,intUseIndex.toString());     
      
   /* We must set the hash numer in the tracking DIV in case the user clicks on a tracking DIV that is not the currently showing one. See VF_SY121_SELECT_ROADMAP_ITEM() */
   objNewDIV.strHashOvr           = objHiddenTag.strHashOvr;
   
   if (objFormSnapShot == null) objNewDIV.strSelectFormCaption = "";
   else                         objNewDIV.strSelectFormCaption = objFormSnapShot.strFormCaption;  
    
   if ((strFormName == "") || (objFormSnapShot == null))
   {
      objNewDIV.className = strDefaultClass;   
   }
   else
   {
      switch (objFormSnapShot.strFormType)
      {
         case "NODE_JUNCTION":
            objNewDIV.className = "JUNCTION";   
            break;
         case "NODE_CHERRY":
            objNewDIV.className = "CHERRY";   
            break;
         case "NODE_SPECIAL":
            objNewDIV.className = "SPECIAL";   
            break;
         default:
            break; 
      }
   }

   objNewDIV.onclick = VF_SY121_SELECT_ROADMAP_ITEM;   

   RoadMapSpan.appendChild(objNewDIV);  

   objNewDIV.scrollIntoView(false);  

   return; 
}

function VF_SY121_SELECT_ROADMAP_FORM(intIndex,flagState)
{
   var objDIV = arraystrFormStackDIV[intIndex];

   if (objDIV != null) 
   {
       if (flagState) 
       {
          if (intIndexSelectedRoadmap >= 0) VF_SY121_SELECT_ROADMAP_FORM(intIndexSelectedRoadmap,false); 
          objDIV.style.margin = "3px"; 
          objDIV.style.border = "2px solid black";
          intIndexSelectedRoadmap = intIndex; 
       }
       else 
       {
          if (intIndex == intIndexSelectedRoadmap) intIndexSelectedRoadmap = -1; 
          objDIV.style.margin = "1px"; 
          objDIV.style.border = "1px solid ThreedFace";
       }    
   }

   return; 
}  

function VF_SY121_SELECT_ROADMAP_ITEM()
{
   var objDIV = event.srcElement;

   VF_SY121_SELECT_ROADMAP_FORM(objDIV.intUseIndex,true); 
   
   VFPROP_Set("ArrivedForm.Caption",1,objDIV.strSelectFormCaption);     
            
   VFPROP_Set("Div.SelectedIndex",1,objDIV.intUseIndex.toString());     

   VFPROP_Signal("SelectedForm",objDIV.strSelectFormName); 
  
   return; 
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

/* --------------------------------------------------------------------- */
/* HIDE - Hide a HTML element                                            */
/* --------------------------------------------------------------------- */ 

function HIDE( argobjHTMLElement )  
{
   if ( argobjHTMLElement.style.visibility != "hidden")
   {
      argobjHTMLElement.style.visibility        = "hidden"; 
      argobjHTMLElement.__save_style_display    = argobjHTMLElement.runtimeStyle.display; 
      argobjHTMLElement.style.display           = "none"; 
      argobjHTMLElement.runtimeStyle.visibility = "hidden"; 
      argobjHTMLElement.runtimeStyle.display    = "none"; 
   }  
     
   return; 
}
   
/* --------------------------------------------------------------------- */
/* SHOW - Show a HTML element                                            */
/* --------------------------------------------------------------------- */ 

function SHOW(argobjHTMLElement)  
{

   if (typeof(argobjHTMLElement.__save_style_display) == 'undefined') 
   {
      argobjHTMLElement.__save_style_display = argobjHTMLElement.currentStyle.display; 
   }

   if ( argobjHTMLElement.runtimeStyle.visibility != "visible")
   {
      argobjHTMLElement.runtimeStyle.visibility = "visible"; 
      argobjHTMLElement.runtimeStyle.display    = argobjHTMLElement.__save_style_display;  
      argobjHTMLElement.style.visibility = "visible"; 
      argobjHTMLElement.style.display    = argobjHTMLElement.__save_style_display; 
   }
           
   return;

}

/* ------------------------------------------------------------------------- */
/* VF_SY121_START_SNAPSHOT - Start a snap shot                               */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_START_SNAPSHOT(intOption,intWebBrowserHeight,intWebBrowserWidth)
{
   /* try */ 
   {
      HIDE(RoadMapSpan); 

      if (intOption == 1) VF_SY121_SETNL_VALUE("App.View","0");    

      NewLookSpan.style.width  = "100%";  
      NewLookSpan.style.margin = "0px";

      NewLookAX._Save_position    = NewLookAX.style.position;

      NewLookAX.style.position    = "absolute";

      NewLookAX.style.pixelTop    = -(GLOBAL_SnapShot_NewLookTopStrip);

      if (intOption == 1)
      { 
         NewLookAX.style.pixelHeight = intWebBrowserHeight + GLOBAL_SnapShot_NewLookTopStrip + GLOBAL_SnapShot_NewLookBottom5250; 
      }
      else
      {
         NewLookAX.style.pixelHeight = intWebBrowserHeight + GLOBAL_SnapShot_NewLookTopStrip + GLOBAL_SnapShot_NewLookBottomGUI;  
      }
                  
   }
   /* catch (objError) { } */

   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_END_SNAPSHOT - End a snap shot                                   */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_END_SNAPSHOT()
{
   /* try */
   {
      VF_SY121_SETNL_VALUE("App.View","5");    

      NewLookSpan.style.width  = "80%";
      NewLookSpan.style.margin = "3px";

      NewLookAX.style.position = NewLookAX._Save_position;
      NewLookAX.style.height   = "100%"; 
      NewLookAX.style.width    = "100%"; 

      SHOW(RoadMapSpan);    
   }  
   /* catch (objError) { } */ 

   return;
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_SCREEN_PROBE - perform a probe of the current screen             */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_PROBE_DATAGRID(strControlName,intControlNumber)
{

  try 
  {
     var strControlNumber = intControlNumber.toString(); 

     if (strControlName == "")
     {
        var intRow    = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").Row"));  
        var intColumn = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").Column"));
 
        VFPROP_Signal("PROBE_LINE",
                               ("   ** Subfile control layout probe started for an unnamed datagrid control found at 5250 row " + intRow.toString() + " and column " + intColumn.toString() + " **"));            
        VFPROP_Signal("PROBE_LINE",
                               ("      As it has no name associated with it, it cannot be used yet for scripting purposes."));          
        VFPROP_Signal("PROBE_LINE",
                               ("      If you need to reference it in a script then use the designer tool to assign a name to it."));          
     }
     else
     {
        VFPROP_Signal("PROBE_LINE",("   ** Subfile control layout probe started for datadrid control named " + strControlName + " **"));
     }       
    
     var intColumnCount = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").Columns.Count"));   
     var intRowCount    = TONUMBER(VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").RowCount"));

     VFPROP_Signal("PROBE_LINE",("      It has " + intColumnCount.toString() + " columns and " + intRowCount.toString() + " rows on the current screen."));    

     for (c = 0; c < intColumnCount; c++)
     {  
         var ColumnNumber = c.toString();  
         var ColumnName   = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").Columns(" + c.toString() + ").Name");  

         if (ColumnName != "") VFPROP_Signal("PROBE_LINE",("      Column number " + ColumnNumber + " is named " + ColumnName));
         else                  VFPROP_Signal("PROBE_LINE",("      Column number " + ColumnNumber + " has no name")); 

         for (r = 0; r < intRowCount; r++)
         {
            var strValue  = VF_SY121_GETNL_VALUE("ActiveForm.Controls(" + strControlNumber + ").Columns(" + ColumnNumber + ").Cells(" + r.toString() + ").Text");  
            VFPROP_Signal("PROBE_LINE",("        in row " +  r.toString() + " it contains \"" + strValue + "\""));      
         } 

      }

      VFPROP_Signal("PROBE_LINE",("  ** Subfile control layout probe ended **"));    

  }
  catch (objError) 
  { 
      var strFailureReason = " - " + objError.description + " (" + objError.number.toString() + ")";  
      VFPROP_Signal("PROBE_LINE",("  ** Subfile control layout probe encountered error " + strFailureReason + " **"));      
  }  

  /* Finished */  
  
  return;    
} 

function VF_SY121_SCREEN_PROBE_Sep()
{
   if (GLOBAL_strProbeSeparator == "") while (GLOBAL_strProbeSeparator.length < 256) GLOBAL_strProbeSeparator += "----------------"; 
   VFPROP_Signal("PROBE_LINE",GLOBAL_strProbeSeparator); 
   return;
}

function VF_SY121_SCREEN_PROBE()
{
   /* Probe start signal */ 

   VFPROP_Signal("PROBE_START",""); 

   /* Loop through the form looking for all named datagrids */

   VFPROP_Signal("PROBE_LINE",("*** Screen probe report started ***"));           
 
   try
   {
      var intControls = TONUMBER( VF_SY121_GETNL_VALUE("ActiveForm.Controls.Count") );
      var intI        = 0;  

      /* Do the basic form details */

      {
         var strName = VF_SY121_GETCURRENTFORM();

         VF_SY121_SCREEN_PROBE_Sep();

         if (strName == "")
         {
            VFPROP_Signal("PROBE_LINE",("The current 5250 screen has no name associated with it and is not defined to RAMP."));           
         }
         else
         {
            var strScreenType = VF_SY121_GET_FORM_TYPE(strName);
            if (strScreenType == "UNDEFINED") VFPROP_Signal("PROBE_LINE",("The current 5250 screen is named " + strName + " and is not defined to RAMP.")); 
            else VFPROP_Signal("PROBE_LINE",("The current 5250 screen is named " + strName + " and defined to RAMP as a " + strScreenType + " screen." ));           
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

                 VF_SY121_SCREEN_PROBE_Sep();

                 VF_SY121_PROBE_DATAGRID(strName,intI);

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
          
                           VF_SY121_SCREEN_PROBE_Sep(); 
                       
                           VFPROP_Signal("PROBE_LINE",
                                   ("A field (or control) named " + strName + " with current value \"" + strText + "\" was found." ) );           
                       
                           VFPROP_Signal("PROBE_LINE",
                                   ("    To set this field's value from a script use SETVALUE(\"" + strName + "\",\"" + strSample + "\");"));           

                           VFPROP_Signal("PROBE_LINE",
                                   ("    To get this field's value into a script use <some variable> = GETVALUE(\"" + strName + "\");") );           
                        }
                 
                     } /* Type != 4 */

                     break; 
                 
                 } /* default */ 
                    
          } /* switch */

       } /* for */
    
        
   } /* try */
   catch (objError)
   {
      var strFailureReason = " - " + objError.description + " (" + objError.number.toString() + ")";  
      VFPROP_Signal("PROBE_LINE",("The screen probe encountered error " + strFailureReason));          
   }

   VF_SY121_SCREEN_PROBE_Sep(); 

   VFPROP_Signal("PROBE_LINE",("*** Screen probe report ended ***"));            
 
   /* Send the probe end signal */

   VFPROP_Signal("PROBE_END",""); 

   /* Finished */
   
   return; 
}


/* ------------------------------------------------------------------------- */
/* VF_SY121_CLEAR_FORM_LAYOUTS - Clear all form layouts                      */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_CLEAR_FORM_LAYOUTS()
{
  var intIndex = 0; 

  /* Clear the form stack array */ 

  if (arraystrFormStack != null)
  {
     delete(arraystrFormStack);
     delete(arrayintFormStackAID);
     delete(arraystrFormStackDIV);
     delete(arrayobjFormStackSnapShots);
       
     arraystrFormStack          = new Array();
     arrayintFormStackAID       = new Array();
     arraystrFormStackDIV       = new Array();
     arrayobjFormStackSnapShots = new Array();

     intCurrentSampleFormIndex = -1; 

      GLOBAL_V_SendCount    = -1; 
      GLOBAL_V_ReceiveCount = -1;  
  } 

  /* Clear the roadmap of all details */

  RoadMapSpan.innerHTML = "<div>Tracking Info</div><br/>";   

  intIndexSelectedRoadmap = -1;  

  /* Refresh again if newlook is connected */ 

  if (VF_SY121_NLCONNECTED()) VF_SY121_HANDLEARRIVEDFORM();

  /* Finished */  

  return;     
}

/* ------------------------------------------------------------------------- */
/* VF_SY121_CLEAR_REFRESH_LAYOUTS - Refresh all form layouts                 */
/* ------------------------------------------------------------------------- */ 

function VF_SY121_REFRESH_FORM_LAYOUTS(flagShowMessages)
{  
  /* If newlook is connect force a refresh */  

  if ( VF_SY121_NLCONNECTED() ) 
  {
     if (flagShowMessages != null) GLOBAL_VF_SY121_REFRESH_ShowMessages = flagShowMessages; 
     else                          GLOBAL_VF_SY121_REFRESH_ShowMessages = true; 

     GLOBAL_VF_SY121_REFRESH_Requested    = true;

     VF_SY121_HANDLEARRIVEDFORM();
  } 

  /* Finished */  

  return;     
}




