/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R R A D B   --------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic radio button group -------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RRADB_Object extends FP_BASE_Object  
//# { 
//#   var arrayobjRadioOptions : Array = null;  
//#   var uSignalSelection : Boolean = false;
//#endif 

//#ifscript
arrayFP_RObjectConstructor["FP_RRADB"] = FP_RRADB_PUBLIC_Create;
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
function FP_RRADB_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RRADB_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.arrayobjRadioOptions = new Array();  

//#ifscript      
   thisObject.uSignalSelection = false;
//#endif
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RRADB_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RRADB_PUBLIC_Visualize;   
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
function FP_RRADB_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RRADB_Object = this;  
//#endif 

   /* Establish addressability to "this" object */ 
   
   /* Destroy any details and free any resources */ 
 
   for (var intIndex in thisObject.arrayobjRadioOptions)
   {
      var objRadioOption = thisObject.arrayobjRadioOptions[intIndex];

      objRadioOption.detachEvent("onclick",FP_RRADB_EVENT_HANDLER_onclick);   
   } 

   thisObject.arrayobjRadioOptions = null;  
   
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript 
function FP_RRADB_PUBLIC_Visualize( argthisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RRADB_Object = this;  
//#endif 

   /* Declarations */ 

//#ifscript   
   var thisObject               = argthisObject;  
   var struLinkedField          = ""; 
   var intItem                  = 0; 
   var intItemCount             = 0;  
   var struOptionDescription    = "";
   var intOption                = 0;
   var intLastOption            = 0;  
   var flagAlreadyFoundSelected = false;
   var struName                 = " ";
   var struCaption              = VF_System.FP_Get(thisObject,"uCaption",1,""); 
   var flagVertical             = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true) == "VERTICAL");   
   var flagCaptionLeft          = (VF_System.FP_Get(thisObject,"uCaptionPosition",1,"TOP",true) == "LEFT");
   var flagNoGroupBox           = (VF_System.FP_Get(thisObject,"uGroupBox",1,"TRUE",true) == "FALSE");
   var strVisibleField          = "uShowValue"; 
   var strInactiveField          = "";
//#else
//#     var struLinkedField : String = ""; 
//#     var intItem : int                 = 0; 
//#     var intItemCount : int            = 0; 
//#     var struOptionDescription : String  = "";
//#     var intOption : int                 = 0; 
//#     var intLastOption : int             = 0; 
//#     var flagAlreadyFoundSelected : Boolean = false;
//#     var struName : String = " "; 
//#     var struCaption : String = VF_System.FP_Get(thisObject,"uCaption",1,"",false,thisObject.intOccurrence); 
//#     var flagVertical : Boolean  = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   
//#     var flagCaptionLeft : Boolean = (VF_System.FP_Get(thisObject,"uCaptionPosition",1,"TOP",true,thisObject.intOccurrence) == "LEFT");
//#     var flagNoGroupBox : Boolean  = (VF_System.FP_Get(thisObject,"uGroupBox",1,"TRUE",true,thisObject.intOccurrence) == "FALSE");
//#     var strVisibleField : String  = "uShowValue"; 
//#     var strInactiveField : String = "";
//#endif     

   var thisDocument             = thisObject.objDocument;
   var objSelect                = null; 
   var objNewOption             = null;
   
   /* Set up the container that will hold this radio button group with either LEFT or NO conatiner captioning */

   if (flagCaptionLeft) VF_SY506_PRIVATE_SetupContainer(thisObject,"LEFT",null,null);
   else                 VF_SY506_PRIVATE_SetupContainer(thisObject,"NONE",null,null);

   /* Create the SELECT (In this case a fieldset is used as a parent object for the radio buttons */ 

   objSelect = thisDocument.createElement("FIELDSET"); 

   if (flagNoGroupBox) 
   {
      /* Hide groupbox */
      objSelect.style.border = "0";  
      /* Align radio buttons flush with other fields */
      thisObject.objWorkContainer.style.marginLeft = "-4px";
   }
  
   /* Append the FieldSet into the container division element for this FP_Rxxxx object */

   thisObject.objWorkContainer.appendChild(objSelect); 
   
   /* Create and append a LEGEND to the FIELDSET, using the uCaption property as the text */
   
   if ( (!(flagCaptionLeft)) && (struCaption != "") && (!(flagNoGroupBox)) )
   {
      var objLegend = thisDocument.createElement("LEGEND"); 
      objLegend.innerText = struCaption; 
      objSelect.appendChild(objLegend) ; 
   }  

   /* This is the current implementation of uReadOnly                           */
   
   objSelect.disabled  = VF_System.FP_GetBool(thisObject,"uReadOnly",1,"FALSE",thisObject.intOccurrence);

   /* Get the number of the last Item               */ 
   intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence); 

   /* Store the option that controls whether the webpage gets rebuilt following */
   /* a change of selection in the drop down by the user                        */

   thisObject.uSignalSelection = VF_System.FP_GetBool(thisObject,"uSignalSelection",1,"FALSE",thisObject.intOccurrence); 

   /* If using a code table then alter the name of the source field */
   
   if (thisObject.flagCodeTableAvailable) strVisibleField = thisObject.objVF_FP021.strDescriptionField; 

    /*  Get the inactive field name if using a code table */

   if (thisObject.flagCodeTableAvailable) strInactiveField = thisObject.objVF_FP021.strInactiveField; 

   /* Create the Options (INPUT type="radio")                                   */
   /* (Each Item is an option that can be selected) */ 

   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      /* Get the sorted item number to be used by all iteme references in this loop */
      /* For normal fast parts it defaults to the storage item number in intItem    */

      var intActualItem = intItem; 

      /* If this fast part is being filled from a code table get the sorted item number */
      /* from the table definition object                                               */ 

      if (thisObject.flagCodeTableAvailable) intActualItem = thisObject.objVF_FP021.GetSortedItem(intItem);   
      
      /* The name attribute cannot be applied except during the createElement */
      /* <INPUT NAME="Radio_n">                                               */

      struOptionDescription = VF_System.FP_Get(thisObject,strVisibleField,intActualItem," ",false,thisObject.intOccurrence);
      objNewOption = thisDocument.createElement("input");
      objNewOption.name = "Radio_" + thisObject.strFP_Name + "_" + thisObject.intOccurrence.toString();
      objNewOption.type = "radio"; 
      objNewOption.intItem = intActualItem;

      /* Attach the option to the drop down - NOTE THIS MUST BE DONE BEFORE SETTING THE SELECTED PROPERTY OF THE OPTION  */
      objSelect.appendChild(objNewOption); 

      /* Attach the text that describes this option                                           */        
      var objNewTextNode = thisDocument.createTextNode(struOptionDescription);
      objSelect.appendChild(objNewTextNode);

      /* Set for vertical arrangement unless horizontal arrangement requested */
	  if (flagVertical) 
	  {
         /* Attach the BR to put each radio button on a new line                                 */	
         var objNewBR = thisDocument.createElement("BR");
         objSelect.appendChild(objNewBR);
      }

      /* Cross link the newly created option object to thisObject to make event handling easy  */
      objNewOption.objFP_RXXXX = thisObject; 

      /* Attach events                                                             */
      objNewOption.attachEvent("onclick", FP_RRADB_EVENT_HANDLER_onclick);   

      /* Keep a track of all the re-usable components created               */
      /* (for which we may have to later detach events)                     */ 
      thisObject.arrayobjRadioOptions[thisObject.arrayobjRadioOptions.length] = objNewOption;    

      /* Store the HiddenKey information against each option */ 
//#ifscript      
      VF_SY506_PRIVATE_InsertItemDetails(thisObject,objNewOption,intActualItem, null, struOptionDescription, false);  
//#else
//#   VF_SY506_PRIVATE_InsertItemDetails(thisObject,objNewOption,intActualItem, thisObject.intOccurrence, struOptionDescription, false);  
//#endif
      /* determine if this option is a code table entry that is inactive */ 
      if ((strInactiveField != "*NONE") && (strInactiveField != ""))
      {
         /* Get the value of the field used to control inactive items */
         var strInactiveValue = VF_System.FP_Get(thisObject,strInactiveField,intActualItem,"",false,thisObject.intOccurrence);
 
         if (strInactiveValue != "")
         { 
             objNewOption.disabled = true ; 
         }
      } 

      /* Determine whether this Item is the selected one */ 
//#ifscript      
      if (VF_SY506_PRIVATE_IsSelectedItem(objNewOption))  
//#else
//#   if (VF_SY506_PRIVATE_IsSelectedItem(objNewOption, true, thisObject))  
//#endif
      {   
  
         if (flagAlreadyFoundSelected == false)
         {   
            objNewOption.checked = true ;
	     /* Ensure that all the system settings reflect this  */
            /* Set the uSelectHiddenKey and uSelectItem properties against this occurrence, first Item */
            /* Set the uSelectOccurrence against the first Item first occurrence */
//#ifscript
   VF_SY506_PRIVATE_SelectItem(objNewOption);
//#else
//# VF_SY506_PRIVATE_SelectItem(objNewOption, thisObject);
//#endif            
            flagAlreadyFoundSelected = true ;
         }	  
       }  
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

/* ------------------------------------------------------------------------ */
/* FP_RRADB_EVENT_HANDLER_001 - Handle a user clicks on a radio button     */
/* ------------------------------------------------------------------------ */ 
function FP_RRADB_EVENT_HANDLER_onclick( argobjEvent )   
{
  /* Get the option that the user selected from the drop down  */  
   var objSelectedOption = argobjEvent.srcElement; 

//#ifscript   
   var thisObject = objSelectedOption.objFP_RXXXX;  
//#else
//# var thisObject : FP_RRADB_Object = this;  
//#endif

   argobjEvent.cancelBubble = true;

   if (VF_System.flagBusy)
   {
         return(false); 
   }		  

   /* Set the uSelectHiddenKey and uSelectItem properties against this occurrence, first Item */
   /* Set the uSelectOccurrence against the first Item first occurrence */

//#ifscript
   VF_SY506_PRIVATE_SelectItem(objSelectedOption);
//#else
//# VF_SY506_PRIVATE_SelectItem(objSelectedOption, thisObject);
//#endif

   /* Set the uChanged property for this occurrence, first Item, so that multiple changes */
   /* can be identified by the RDML                                                           */

   VF_System.FP_SetBool(thisObject,"uChanged",1,"TRUE", thisObject.intOccurrence);  

   /* Pass the event name on to the WEBEVENT RDML function      */ 
   if (thisObject.uSignalSelection) VF_SY506_PRIVATE_HandleEvent(thisObject,"SELECTED");  

   return; 
}

//#IFNET
//# } 
//#endif 
