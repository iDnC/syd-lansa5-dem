/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R B U T T ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic button -------------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RBUTT_Object extends FP_BASE_Object  
//# { 
//#    var arrayBUTTON : Array = null;  
//#    var objCONTAINER : Object = null; 
//#endif 


//#ifscript
arrayFP_RObjectConstructor["FP_RBUTT"] = FP_RBUTT_PUBLIC_Create;
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

//#IFSCRIPT
function FP_RBUTT_PUBLIC_Create(thisObject)  
{
   var thisDocument = thisObject.objDocument; 
   var intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);    
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RBUTT_Object = this;  
//#   var thisDocument = thisObject.objDocument; 
//#   var intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);   
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.arrayBUTTON  = new Array();   

   if (intItemCount > 1) 
   {
      thisObject.objCONTAINER = thisDocument.createElement("DIV");
   }    
   else 
   {
      thisObject.objCONTAINER = thisDocument.createElement("BUTTON");
      thisObject.arrayBUTTON[thisObject.arrayBUTTON.length] = thisObject.objCONTAINER;
   }      
   
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy              = FP_RBUTT_PUBLIC_Destroy; 
   thisObject.Visualize            = FP_RBUTT_PUBLIC_Visualize; 
//#endif   
    
   /* -------- */ 
   /* Finished */
   /* -------- */ 

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#IFSCRIPT
function FP_RBUTT_PUBLIC_Destroy(thisObject)  
{
//#else
//# override function Destroy()  
//# {
//#    var thisObject : FP_RBUTT_Object = this;    
//#endif
 
   var intIndex = 0; 

   /* Destroy any details and free any resources */ 

   for (intIndex = 0; intIndex < thisObject.arrayBUTTON.length; intIndex++)
   {
      var objBUTTON = thisObject.arrayBUTTON[intIndex];  
        
      objBUTTON.objFP_RXXXX = null;  
      objBUTTON.detachEvent("onclick", FP_RBUTT_EVENT_HANDLER_001);
   }  
      
   thisObject.arrayBUTTON  = null;  
   thisObject.objCONTAINER = null;  

   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#IFSCRIPT
function FP_RBUTT_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#    var thisObject : FP_RBUTT_Object = this;    
//#endif 
   /* Declarations */ 
   
//#ifscript   
   var thisDocument = thisObject.objDocument;
   var flagVertical = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   
   var intItem      = 0; 
   var intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);   
//#else
//#   var thisDocument = thisObject.objDocument;
//#   var flagVertical : Boolean = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   
//#   var intItem : int = 0; 
//#   var intItemCount : int = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);   
//#endif 

   /* Set up the container with default for no label */

   VF_SY506_PRIVATE_SetupContainer(thisObject,"NONE",null,null);

   /* Insert the main DIV into the container */
   
   thisObject.objWorkContainer.appendChild(thisObject.objCONTAINER);

   /* Loop through all items */

   for (intItem = 1; intItem <= intItemCount; intItem++)     
   { 
      var objNewCONTAINER    = null; 
      var objNewBUTTON       = null;
      var strImage           = VF_System.FP_Get(thisObject,"uImage",intItem,"",false,thisObject.intOccurrence); 
      var strCaptionPosition = VF_System.FP_Get(thisObject,"uCaptionPosition",intItem,"RIGHT",true,thisObject.intOccurrence);
      var strCaption         = VF_System.FP_Get(thisObject,"uCaption",intItem,"",false,thisObject.intOccurrence);
      var struHint           = VF_System.FP_Get(thisObject,"uHint",intItem,"",false,thisObject.intOccurrence);
      var flaguButtonVisible = VF_System.FP_GetBool(thisObject,"uButtonVisible",intItem,"TRUE",thisObject.intOccurrence);
      var flaguButtonEnabled = VF_System.FP_GetBool(thisObject,"uButtonEnabled",intItem,"TRUE",thisObject.intOccurrence);
      var objNewCAPTION      = null; 
      var flaguButtonDefault = false;

      /* As long as a default (FP_R) button for the form has not been found, make this new button the default */
      /* If the RDML has specified uButtonDefault as true for a button, when the button is processed it will override any previous default button. */  
      if (thisObject.objVF_SY503.objFP_RBUTT_DefaultButton == null)
      {
         flaguButtonDefault = VF_System.FP_GetBool(thisObject,"uButtonDefault",intItem,"TRUE",thisObject.intOccurrence);
      }
      else
      { 
         flaguButtonDefault = VF_System.FP_GetBool(thisObject,"uButtonDefault",intItem,"FALSE",thisObject.intOccurrence);
      } 


      /* Create the container */

      if (intItemCount > 1)
      {   
         if (flagVertical) objNewCONTAINER = thisDocument.createElement("DIV");
         else              objNewCONTAINER = thisDocument.createElement("SPAN");
         objNewBUTTON = thisDocument.createElement("BUTTON");
         thisObject.arrayBUTTON[thisObject.arrayBUTTON.length] = objNewBUTTON;
      }
      else
      { 
         objNewBUTTON = thisObject.objCONTAINER;
      } 

      objNewBUTTON.setAttribute("acceptonclick", "true");
      objNewBUTTON.setAttribute("type","button");
      /* Adjust some values */

      if (strCaption == "") 
      {
         strCaptionPosition = "NONE";
         if (strImage == "") strImage = "vf_ic1121.gif"; /* No caption and no image defaults to this image */ 
      }

      /* Force the height and width to standard values */ 

      objNewBUTTON.style.height = "auto";   
      objNewBUTTON.style.width  = "auto";   
      objNewBUTTON.disabled     = thisObject.objMainContainer.disabled;

      /* Insert any hint */
      if (struHint != null) objNewBUTTON.title = struHint;  

      /* Create and set up LEFT or TOP captions */

      switch (strCaptionPosition)
      {
         case "LEFT":
              objNewCAPTION = thisDocument.createElement("SPAN");
              objNewCAPTION.style.verticalAlign = "middle";
              objNewCAPTION.style.paddingRight  = "4px";
              objNewCAPTION.innerText = strCaption;  
              break;

         case "TOP": 
              objNewCAPTION = thisDocument.createElement("DIV");
              objNewCAPTION.style.verticalAlign = "middle";
              objNewCAPTION.style.paddingBottom = "4px";
              objNewCAPTION.innerText = strCaption;  
              break;

         default:  
              break;
      }

      if (objNewCAPTION != null) 
      {
         objNewBUTTON.appendChild(objNewCAPTION); 
         objNewCAPTION = null; 
      } 

      /* Create and set up the image (if required) */
   
      if (strImage != "") 
      {
         var objNewIMG = thisDocument.createElement("IMG");
      
         objNewIMG.src = VF_System.ReturnImgSource(strImage);
         objNewIMG.unselectable        = "on";
         objNewIMG.align               = "middle"; 
         objNewIMG.style.verticalAlign = "middle";
         if(!flaguButtonEnabled) objNewIMG.disabled = true;

         objNewBUTTON.appendChild(objNewIMG); 
      } 

      /* Handle RIGHT and BOTTOM captions */ 

      switch (strCaptionPosition)
      {
         case "RIGHT":
              objNewCAPTION = thisDocument.createElement("SPAN");
              objNewCAPTION.style.verticalAlign = "middle";
              objNewCAPTION.style.paddingLeft = "4px";
              objNewCAPTION.innerText = strCaption;  
              break;

         case "BOTTOM": 
              objNewCAPTION = thisDocument.createElement("DIV");
              objNewCAPTION.style.verticalAlign = "middle";
              objNewCAPTION.style.paddingTop = "4px";
              objNewCAPTION.innerText = strCaption;  
              break;

         default:  
              break;
      }

      if (objNewCAPTION != null) 
      {
         objNewBUTTON.appendChild(objNewCAPTION);
         objNewCAPTION = null; 
      } 

      /* If the button should be invisible, hide it */
      
      if(!flaguButtonVisible) 	VF_System.Hide(objNewBUTTON);
      
      /* Disable the button if required */ 
      
      if(!flaguButtonEnabled) objNewBUTTON.disabled = true;
      
      /* Insert this button into container and the container into the main container */

      if (objNewCONTAINER != null)
      {
         objNewCONTAINER.appendChild(objNewBUTTON);
         thisObject.objCONTAINER.appendChild(objNewCONTAINER);
      }
      else
      {
         if (objNewBUTTON == thisObject.objCONTAINER) thisObject.objWorkContainer.appendChild(objNewBUTTON);
         else                                         thisObject.objCONTAINER.appendChild(objNewBUTTON);
      } 

      /* Attach an event to the button */

      objNewBUTTON.attachEvent("onclick", FP_RBUTT_EVENT_HANDLER_001); 


      /* tell the objVF_SY503 that this is the default button, provided its the first visible and enabled button */
      if ((flaguButtonDefault) && (flaguButtonVisible) && (flaguButtonEnabled))
      {
         thisObject.objVF_SY503.objFP_RBUTT_DefaultButton = objNewBUTTON; 
      }

      /* Insert the standard set of item properties into this HTML element */

      VF_SY506_PRIVATE_InsertItemDetails(thisObject,objNewBUTTON,intItem,thisObject.intOccurrence,null,false);   

      /* Loop around */ 
   }     

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

 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------  E V E N T   H A N D L E R S   ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------- */
/* FP_RBUTT_EVENT_HANDLER_001 - Handle a click on the button */
/* --------------------------------------------------------- */ 
  
function FP_RBUTT_EVENT_HANDLER_001(argobjEvent)   
{
   /* Kill the event */
  
   argobjEvent.cancelBubble = true;
   argobjEvent.returnValue  = false;

   /* If the system is not currently busy */

   if  ( !(VF_System.flagBusy) )
   {
//#ifscript      
      /* Webkit browsers return the span inside the button as the source element */
      var oSrcEle = (VF_System.usingWebkit) ? VF_System.getSrcElement(argobjEvent, "acceptonclick") : argobjEvent.srcElement;
      var thisObject        = oSrcEle.objFP_RXXXX;
      var intItem           = oSrcEle.intItem;
      var struOpenURL       = VF_System.FP_Get(thisObject,"uOpenURL",intItem,"",false,thisObject.intOccurrence);
      var struSignalEventId = VF_System.FP_Get(thisObject,"uSignalEventId",intItem,"",false,thisObject.intOccurrence);
      var struSwitchTo      = VF_System.FP_Get(thisObject,"uSwitchTo",intItem,"",false,thisObject.intOccurrence);
//#else
//#   var thisObject  : FP_RBUTT_Object = this;
//#   var thisElement : FP_BASE_Association = thisObject.GetAssociatedObjectInfo(argobjEvent.srcElement);
//#   if (thisElement == null) return;  
//#   var intItem : int = thisElement.intItem;
//#   var struOpenURL : String = VF_System.FP_Get(thisObject,"uOpenURL",intItem,"",false,thisObject.intOccurrence);
//#   var struSignalEventId : String = VF_System.FP_Get(thisObject,"uSignalEventId",intItem,"",false,thisObject.intOccurrence);
//#   var struSwitchTo : String = VF_System.FP_Get(thisObject,"uSwitchTo",intItem,"",false,thisObject.intOccurrence);
//#endif       

      /* Ignore if button is not enabled */ 
      
      if (thisObject.objMainContainer.disabled) return;    

      /* Select the item details */ 
//#ifscript      
      VF_SY506_PRIVATE_SelectItem(oSrcEle,thisObject);  
//#else
//#   VF_SY506_PRIVATE_SelectItem(argobjEvent.srcElement,thisObject);  
//#endif
      /* If a URL was specified */

      if (struOpenURL != "")
      { 
         VF_System.objMainWindow.open(struOpenURL,"_blank",VF_System.FP_Get(thisObject,"uWindowFeatures",intItem,"",false,thisObject.intOccurrence));
         return; 
      }
            
      /* If a signal was requested */ 

      if (struSignalEventId != "")
      { 
         _SetAlpha_501("==ES_ID==","","",1,struSignalEventId.toUpperCase(),null);
         _SetAlpha_501("==ES_TO==","","",1,VF_System.FP_Get(thisObject,"uSendTo",intItem,"FRAMEWORK",false,thisObject.intOccurrence).toUpperCase(),null);
  
         _SetAlpha_501("==ES_A1==","","",1,VF_System.FP_Get(thisObject,"uSendAInfo1",intItem,"",false,thisObject.intOccurrence),null);
         _SetAlpha_501("==ES_A2==","","",1,VF_System.FP_Get(thisObject,"uSendAInfo2",intItem,"",false,thisObject.intOccurrence),null);
         _SetAlpha_501("==ES_A3==","","",1,VF_System.FP_Get(thisObject,"uSendAInfo3",intItem,"",false,thisObject.intOccurrence),null);
         _SetAlpha_501("==ES_A4==","","",1,VF_System.FP_Get(thisObject,"uSendAInfo4",intItem,"",false,thisObject.intOccurrence),null);
         _SetAlpha_501("==ES_A5==","","",1,VF_System.FP_Get(thisObject,"uSendAInfo5",intItem,"",false,thisObject.intOccurrence),null);

         _SetNumeric_501("==ES_N1==","","",1,VF_System.FP_GetNum(thisObject,"uSendNInfo1",intItem,false,0,thisObject.intOccurrence),21,false);
         _SetNumeric_501("==ES_N2==","","",1,VF_System.FP_GetNum(thisObject,"uSendNInfo2",intItem,false,0,thisObject.intOccurrence),21,false);
         _SetNumeric_501("==ES_N3==","","",1,VF_System.FP_GetNum(thisObject,"uSendNInfo3",intItem,false,0,thisObject.intOccurrence),21,false);
         _SetNumeric_501("==ES_N4==","","",1,VF_System.FP_GetNum(thisObject,"uSendNInfo4",intItem,false,0,thisObject.intOccurrence),21,false);
         _SetNumeric_501("==ES_N5==","","",1,VF_System.FP_GetNum(thisObject,"uSendNInfo5",intItem,false,0,thisObject.intOccurrence),21,false);

         VF_System.QueueSignalAVEvent(thisObject.objVF_SY503);    

         VF_System.HandlePendingAVEvent();    

         return; 
      }

    
      /* Handle a switch request */ 
    
      if (struSwitchTo != "")
      {

         _SetAlpha_501("=SW1=","","",1,struSwitchTo.toUpperCase(),false);
         _SetAlpha_501("=SW2=","","",1,VF_System.FP_Get(thisObject,"uNamed",intItem,"",false,thisObject.intOccurrence),false);
         _SetAlpha_501("=SW3=","","",1,VF_System.FP_Get(thisObject,"uExecute",intItem,"",false,thisObject.intOccurrence),false);
 
         VF_System.HandleSwitch(false,null); 
  
         return; 
      }
  
      /* If we reach here signal a click */

      VF_SY506_PRIVATE_HandleEvent(thisObject,"CLICK");  
  
      return;  

  }

  return; 
}

//#IFNET
//# } 
//#endif 
 