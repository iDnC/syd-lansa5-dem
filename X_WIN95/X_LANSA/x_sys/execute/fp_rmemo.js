/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R M E M O ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic memo ---------------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RMEMO_Object extends FP_BASE_Object  
//# { 
//#    var objTextArea : Object = null; 
//#    var intuMaxLineLength : int = 0; 
//#endif 


/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RMEMO"] = FP_RMEMO_PUBLIC_Create;
//#endif 

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --  C O N S T R U C T O R,  D E S T R U C T O R  &  V I S U A L I Z E R --- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RMEMO_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RMEMO_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */
 
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RMEMO_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RMEMO_PUBLIC_Visualize; 
//#endif 
    
   /* -------- */ 
   /* Finished */
   /* -------- */ 

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */


//#ifscript
function FP_RMEMO_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RMEMO_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 
 
   thisObject.objTextArea.detachEvent("onchange",FP_RMEMO_EVENT_HANDLER_001);    
   thisObject.objTextArea.detachEvent("onkeyup", FP_RMEMO_EVENT_HANDLER_002);    
   thisObject.objTextArea.detachEvent("onkeydown", FP_RMEMO_EVENT_HANDLER_003);    
   
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RMEMO_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RMEMO_Object = this;  
//#endif 


   /* Declarations */ 
 
   var thisDocument      = thisObject.objDocument; 
   var strMemo           = ""; 
   var intItem           = 0; 
   var intuItemCount     = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence);   
   var intuMaxLineLength = VF_System.FP_GetNum(thisObject,"uMaxLineLength",1,true,35,thisObject.intOccurrence);  
   var objNewTextArea    = null;  

   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

   
   /* Add a a TEXTAREA element to this object */ 

   objNewTextArea = thisDocument.createElement("TEXTAREA");  
   objNewTextArea.cols     = intuMaxLineLength; 
   
   /* Put this new element into the HTML DOM tree */

   if ( VF_System.FP_GetBool(thisObject,"uFixedFont",1,"FALSE",thisObject.intOccurrence) )
   {
      objNewTextArea.className = "FP_RMEMO_Fixed_Font"; 

      if ( VF_System.FP_GetBool(thisObject,"uSubtractTwo",1,"FALSE",thisObject.intOccurrence) ) objNewTextArea.cols = intuMaxLineLength - 2;
   }
   else
   {
      objNewTextArea.className = "FP_RMEMO_Variable_Font"; 
   }

   thisObject.objWorkContainer.appendChild(objNewTextArea);

   /* Fill all available space in the container */

   objNewTextArea.rows     = VF_System.FP_GetNum(thisObject,"UVISIBLELINES",1,true,10,thisObject.intOccurrence); 
   objNewTextArea.readOnly = VF_System.FP_GetBool(thisObject,"uReadOnly",1,"FALSE",thisObject.intOccurrence); 
   objNewTextArea.disabled = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE",thisObject.intOccurrence))); 

   /* Insert normal properties to this element */

   VF_SY506_PRIVATE_InsertItemDetails(thisObject,objNewTextArea,1, thisObject.intOccurrence,null,false);

   /* Add special properties to this element and this object */

   thisObject.objTextArea       = objNewTextArea;  
   thisObject.intuMaxLineLength = intuMaxLineLength;  
   

   /* Attach events to this this element */  

   objNewTextArea.attachEvent("onchange",FP_RMEMO_EVENT_HANDLER_001);   
   objNewTextArea.attachEvent("onkeyup", FP_RMEMO_EVENT_HANDLER_002);   
   objNewTextArea.attachEvent("onkeydown", FP_RMEMO_EVENT_HANDLER_003);   

   /* Build up the text to put into the text area */   

   for (intItem = 1; intItem <= intuItemCount; intItem++)
   {
      var struLine           = FP_RMEMO_PRIVATE_TrimTrailingBlanks( VF_System.FP_Get(thisObject,"uLine",intItem,"",false,thisObject.intOccurrence) );
      var intuTrailingBlanks = VF_System.FP_GetNum(thisObject,"uTrailingBlanks",intItem,true,0,thisObject.intOccurrence);   ;
      var flaguNewLine       = VF_System.FP_GetBool(thisObject,"uNewLine",intItem,"TRUE",thisObject.intOccurrence);   

      if (struLine.length > intuMaxLineLength) struLine = struLine.substring(0,intuMaxLineLength); 

      if ((flaguNewLine) && (intItem > 1)) strMemo += "\r\n"; 

      strMemo += struLine;  
 
      while (intuTrailingBlanks > 0) 
      {
         strMemo += " "; 
         intuTrailingBlanks--; 
      }  
    
   }
   
   /* Set in the text value */
   
   objNewTextArea.value = strMemo;   

   /* Finished */ 

   return; 
}


/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  P R I V A T E   M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* ----------------------------------------*/
/* FP_RMEMO_PRIVATE_SaveLine - save a line */
/* --------------------------------------- */ 

//#ifscript  
function FP_RMEMO_PRIVATE_SaveLine(thisObject, intItem, argstruLine, argflaguNewLine )   
//#else
//# function FP_RMEMO_PRIVATE_SaveLine(thisObject:FP_RMEMO_Object, intItem:int, argstruLine:String, argflaguNewLine:Boolean )   
//#endif 
{
   var struNewLine; 
   
   if (argflaguNewLine) struNewLine = "TRUE"; 
   else                 struNewLine = "FALSE"; 
   
   VF_System.FP_Set(thisObject,"uLine",intItem, FP_RMEMO_PRIVATE_TrimTrailingBlanks(argstruLine),false,thisObject.intOccurrence );

   VF_System.FP_SetNum(thisObject,"uTrailingBlanks",intItem,FP_RMEMO_PRIVATE_CountTrailingBlanks(argstruLine),0,thisObject.intOccurrence); 
   
   VF_System.FP_Set(thisObject,"uNewLine",intItem,struNewLine,false,thisObject.intOccurrence);

   return; 
}

/* ------------------------------------------------------ */
/* FP_RMEMO_PRIVATE_CountTrailingBlanks - count traling blanks */
/* ------------------------------------------------------ */ 
  
//#ifscript  
function FP_RMEMO_PRIVATE_CountTrailingBlanks( argstrString )   
//#else
//# function FP_RMEMO_PRIVATE_CountTrailingBlanks( argstrString:String ):int   
//#endif 
{
   var intIndex       = argstrString.length - 1;    
   var intTrailBlanks = 0;

   while ( (intIndex >= 0) && (argstrString.charAt(intIndex) == " ") )
   {
      intTrailBlanks++;
      intIndex--;   
   }

   return(intTrailBlanks); 
}

/* ---------------------------------------------------------- */
/* FP_RMEMO_PRIVATE_TrimTrailingBlanks - Trim trailing blanks */
/* ---------------------------------------------------------- */ 
  
//#ifscript  
function FP_RMEMO_PRIVATE_TrimTrailingBlanks( argstrString )   
//#else
//# function FP_RMEMO_PRIVATE_TrimTrailingBlanks( argstrString : String ) : String   
//#endif 
{
   var intNonBlankLength = argstrString.length - FP_RMEMO_PRIVATE_CountTrailingBlanks(argstrString);    

   if (intNonBlankLength <= 0) return("");  
   else                        return(argstrString.substring(0,intNonBlankLength));   

}

 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------  E V E N T   H A N D L E R S   ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------- */
/* FP_RMEMO_EVENT_HANDLER_001 - Handle change and blur */
/* --------------------------------------------------- */ 
  
function FP_RMEMO_EVENT_HANDLER_001( argobjEvent )   
{
   var thisTextArea       = argobjEvent.srcElement; 
//#ifscript   
      var thisObject         = thisTextArea.objFP_RXXXX;
//#else
//#   var thisObject:FP_RMEMO_Object = this;
//#endif 
   
   var intuMaxLineLength  = thisObject.intuMaxLineLength;   
  
   var intLoopIndex       = 0;
//#ifscript   
   var intLoopLimit       = thisTextArea.value.length;
//#else
//# var intLoopLimit      = thisTextArea.value != null ? thisTextArea.value.length : 0;
//#endif   
   var strChar            = "";     

   var intCurrentuItemCount  = 0;
   var strCurrentuLine       = ""; 
   var flagCurrentuNewLine   = false; 

   argobjEvent.cancelBubble = true;

   for (intLoopIndex = 0; intLoopIndex < intLoopLimit; intLoopIndex++)
   {
      strChar = thisTextArea.value.charAt(intLoopIndex);

      switch (strChar)
      {
         case "\r":
              break; 

         case "\n":
               intCurrentuItemCount++; 
               FP_RMEMO_PRIVATE_SaveLine(thisObject,intCurrentuItemCount,strCurrentuLine,flagCurrentuNewLine);   
               strCurrentuLine     = ""; 
               flagCurrentuNewLine = true; 
               break; 

         default:
               if (strCurrentuLine.length >= intuMaxLineLength)
               {
                  intCurrentuItemCount++; 
                  FP_RMEMO_PRIVATE_SaveLine(thisObject,intCurrentuItemCount,strCurrentuLine,flagCurrentuNewLine);   
                  strCurrentuLine     = strChar; 
                  flagCurrentuNewLine = false; 
               }
               else
               {
                  strCurrentuLine += strChar; 
               } 
               break; 
      }

   }  

   /* Flush the buffer */

   if (strCurrentuLine != "")
   {
      intCurrentuItemCount++; 
      FP_RMEMO_PRIVATE_SaveLine(thisObject,intCurrentuItemCount,strCurrentuLine,flagCurrentuNewLine);   
   } 

   /* Update the Item count */

   VF_System.FP_SetNum(thisObject,"uItemCount",1,intCurrentuItemCount,0,thisObject.intOccurrence); 

   return; 
}

/* ------------------------------------------- */
/* FP_RMEMO_EVENT_HANDLER_002 - Handle key up  */
/* ------------------------------------------- */ 
  
function FP_RMEMO_EVENT_HANDLER_002( argobjEvent )   
{
   argobjEvent.cancelBubble = true;
   return;  
}

/* -------------------------------------------- */
/* FP_RMEMO_EVENT_HANDLER_003 - Handle key down */
/* -------------------------------------------- */ 
  
function FP_RMEMO_EVENT_HANDLER_003( argobjEvent )   
{
   argobjEvent.cancelBubble = true;
   return;  
}


//#IFNET
//# }  
//#endif 
