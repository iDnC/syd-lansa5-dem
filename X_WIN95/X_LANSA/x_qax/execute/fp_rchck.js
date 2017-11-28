/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R C H C K ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a list of checkboxes  --------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RCHCK_Object extends FP_BASE_Object  
//# { 
//#   var arrayobjItems : Array = null;  
//#endif 

//#ifscript
arrayFP_RObjectConstructor["FP_RCHCK"] = FP_RCHCK_PUBLIC_Create;
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
function FP_RCHCK_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RCHCK_Object = this;  
//#endif 
   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

    thisObject.arrayobjItems = new Array();  
    thisObject.intthisObjectID = VF_System.GetThisObjectID(thisObject);
    thisObject.flagAllowMultipleSelection = true ;

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */
//#ifscript
   thisObject.Destroy   = FP_RCHCK_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RCHCK_PUBLIC_Visualize; 
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
function FP_RCHCK_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RCHCK_Object = this;  
//#endif 

   /* Destroy any details and free any resources */ 
 
   thisObject.arrayobjItems = null;  
   
   VF_System.DeleteThisObjectID(thisObject.intthisObjectID);
   
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
//#ifscript 
function FP_RCHCK_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RCHCK_Object = this;  
//#endif 

   /* Declarations */ 
   
   var thisDocument	   = thisObject.objDocument; 
   var struCaption	   = VF_System.FP_Get(thisObject,"uCaption",1,"", false, thisObject.intOccurrence); 
   var intItem		   = 0; 
   var intItemCount    = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);   
   var flagVertical    = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   
   var flagCaptionLeft = (VF_System.FP_Get(thisObject,"uCaptionPosition",1,"TOP",true,thisObject.intOccurrence) == "LEFT");
   var flagCaptionTop  = !(flagCaptionLeft); 
   var flagNoGroupBox  = (VF_System.FP_Get(thisObject,"uGroupBox",1,"TRUE",true,thisObject.intOccurrence) == "FALSE");
   var flagFieldSet    = false;  
   var flagCodeTableAvailable   = thisObject.flagCodeTableAvailable;
   var strVisibleField          = "uItemCaption";
   var strInactiveField         = "";
   var strInactiveValue         = "";
   var intActualItem;
   
   /* If using a code table */
   if (flagCodeTableAvailable)
   {
      /* Echo down to the server the information about the group that came from the code table  */
      VF_System.FP_SetNum(thisObject, "uItemCount", 1, intItemCount, 0, thisObject.intOccurrence);

      /* If no caption has been specified then use the tables description */
      if (struCaption == "") struCaption = thisObject.objVF_FP021.strDescriptionField; 

      /* Alter the source of the visible field */
      strVisibleField = thisObject.objVF_FP021.strDescriptionField; 

      /*  Get the inactive field name if using a code table */
      strInactiveField = thisObject.objVF_FP021.strInactiveField; 
   }

   /* Set up the container and either put the caption on the left or stop it showing */

   if (flagCaptionLeft) VF_SY506_PRIVATE_SetupContainer(thisObject,"LEFT", null, null);
   else                 VF_SY506_PRIVATE_SetupContainer(thisObject,"NONE", null, null);
   
   /* Build the HTML for this object as a string */
   
   var strHTML = "";  
   
   /* Start a division to contain the items */
   
   /* Add a Fieldset tag if there is to be a group box */

   if ((intItemCount > 1) && (!(flagNoGroupBox)))
   {
     flagFieldSet = true;
     strHTML                     += "<div><fieldset";  
     strHTML                     += ">";
     if ( (flagCaptionTop) && (struCaption != "")) strHTML += "<legend>" + struCaption + "</legend>"; 
   }
   else
   {
     strHTML += "<div>";
   }
	  
   /* For each Item build the HTML for the Item */ 

   for (intItem = 1; intItem <= intItemCount; intItem++)
   {

      /* If this fast part is being filled from a code table get the sorted item number */
      /* from the table definition object */ 

       if (flagCodeTableAvailable) intActualItem = thisObject.objVF_FP021.GetSortedItem(intItem); 
       else                        intActualItem = intItem; 


      thisObject.arrayobjItems[intActualItem] = new Object();
      
      /* Insert the standard set of item properties into this HTML element                                      */
      /* The last parameter instructs that the properties originating from a code table echo down to the server */
      /* (as well as being set for this object)                                                                 */

//#ifscript      
      VF_SY506_PRIVATE_InsertItemDetails(thisObject, thisObject.arrayobjItems[intActualItem], intActualItem, null, "", true);  
//#else
//#   VF_SY506_PRIVATE_InsertItemDetails(thisObject, thisObject.arrayobjItems[intActualItem], intActualItem, thisObject.intOccurrence, null, true);  
//#endif

      /* determine if this option is a code table entry that is inactive */ 
      if ((strInactiveField != "*NONE") && (strInactiveField != ""))
      {
         /* Get the value of the field used to control inactive items */
         strInactiveValue = VF_System.FP_Get(thisObject,strInactiveField,intActualItem,"",false,thisObject.intOccurrence);
 
         if (strInactiveValue != "")
         { 
             strInactiveValue = "DISABLED" ; 
         }
      } 


      /* Generate a unique ID */
      var strID	= VF_System.GenerateUniqueName(); 

      /* Add a checkbox to the HTML string */
	  strHTML += FP_RCHCK_PRIVATE_BuildCheckbox(thisObject, intActualItem, strID, strInactiveValue);
	  
	  /* Use uCaption for the label if there is only one checkbox and uItemCaption hasn't been supplied */

     var struItemCaption = VF_System.FP_Get(thisObject,strVisibleField,intActualItem,"", false, thisObject.intOccurrence); 
     /* var struItemCaption = VF_System.FP_Get(thisObject,strVisibleField,intActualItem,"",false,intUseSharedOccurrence) */ 

      
	  if ((intItemCount == 1) && (struItemCaption == "") && (flagCaptionTop))
	  {
	    struItemCaption = struCaption;
	  }
	  
	  /* Add a label for the checkbox */
	  
	    strHTML += FP_RCHCK_PRIVATE_BuildLabel(thisObject, intActualItem, struItemCaption, strID);
	  
	  /* If the checkboxes are to be arranged vertically add a line break */
	
	  if (flagVertical) 
	  {
	    strHTML += "<br>";
	  }
	  
	}
		
   /* If a group box was used add a </fieldset> tag*/

   if (flagFieldSet) strHTML += "</fieldset>";
   
   /* Close the div */
	
   strHTML += "</div>";
   
   /* Insert the HTML for this object into the container for this FP_Rxxxx object */

   thisObject.objWorkContainer.innerHTML = strHTML;

   /* Finished */ 

   return; 
}


/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------  P R I V A T E   M E T H O D S  ---------------------- */
/* ------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
/* FP_RCHCK_PRIVATE_BuildCheckbox - Builds and adds a checkbox to the HTML   */
/* ------------------------------------------------------------------------- */ 

function FP_RCHCK_PRIVATE_BuildCheckbox(thisObject, intItem, argstrID, argstrInactiveValue) 
{
	var strCheckboxHTML = "";
	var strID           = argstrID; 
	var struHint        = VF_System.FP_Get(thisObject,"uHint",intItem,"", false, thisObject.intOccurrence); 
   var struItemHint    = VF_System.FP_Get(thisObject,"uItemHint",intItem,struHint, false, thisObject.intOccurrence); 
	var flagChecked     = VF_System.FP_GetBool(thisObject,"uChecked",intItem,"FALSE", thisObject.intOccurrence);   

	/* Build a checkbox */
	  
	strCheckboxHTML += "<input type='checkbox'";

       /* Make this checkbox disabled if this code table entry is inactive */
       
       strCheckboxHTML += " " + argstrInactiveValue + " " ;   
      
    /* Assign a unique ID */

	strCheckboxHTML += " id='" + strID + "'";
	  
	/* Add the hint */
	  
	strCheckboxHTML += " title='" + struItemHint + "'";
      
    /* Set the return value of the checkbox to "ON" */

	strCheckboxHTML += " value='ON'";
	  
	/* Check box if requested */

	if (flagChecked) strCheckboxHTML += " checked";
	  
	/* Enable click event */
//#ifscript	
	  strCheckboxHTML += " onclick='parent.VF_System.objMainWindow.FP_RCHCK_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() +  ", this);'";
//#else	
//#  strCheckboxHTML += " onclick='window.external.NET_RCHCK_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() + ", this);'";
//#endif	  
    /* Close the <input> tag to complete the checkbox */

	strCheckboxHTML += ">";
	  
	
	return(strCheckboxHTML);
}

/* ------------------------------------------------------------------------------------ */
/* FP_RCHCK_PRIVATE_BuildLabel - Builds and adds a label fir the checkbox to the HTML   */
/* ------------------------------------------------------------------------------------ */ 

function FP_RCHCK_PRIVATE_BuildLabel(argthisObject, argintItem, argstruItemCaption, argstrID) 
{
	var thisObject				= argthisObject;
	var intItem					= argintItem;
	var strLabelHTML			= "";
	var strID					= argstrID; 
	var struHint				= VF_System.FP_Get(thisObject,"uHint",intItem,"", false, thisObject.intOccurrence); 
   var struItemHint        = VF_System.FP_Get(thisObject,"uItemHint",intItem,struHint, false, thisObject.intOccurrence); 
	var struItemCaption     = argstruItemCaption; 

	  /* Start a label for the current checkbox */
	  
	  strLabelHTML += "<label for='" + strID + "'";
    
	  /* Add the hint to the label*/
	  
	  strLabelHTML += " title='" + struItemHint + "'";
   
      /* Close the <label> tag */

	  strLabelHTML += ">";
	  
	  /* Add text for the label */

	  strLabelHTML += struItemCaption;
   
	  /* Add a space to the end */

	  strLabelHTML += "&nbsp;";
   
      /* Add the </label> tag */
      
	  strLabelHTML += "</label>";
	    
	
	return(strLabelHTML);
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

/* -------------------------------------------------------- */
/* FP_RLINK_EVENT_HANDLER_001 - Handle a click on an Image  */
/* -------------------------------------------------------- */ 

//#ifscript  
function FP_RCHCK_EVENT_HANDLER_001( argintthisObjectID, argintthisItem, argthis )   
//#else
//# static function FP_RCHCK_EVENT_HANDLER_001( argintthisObjectID:int, argintthisItem:int, argthis : Object )   
//#endif 
{
   if  ( !(VF_System.flagBusy) )
   {
     var thisObject			= VF_System.ConvertThisObjectID(argintthisObjectID);
     var thisobjItem			= thisObject.arrayobjItems[argintthisItem];
	  var booluSignalChanged	= VF_System.FP_GetBool(thisObject,"uSignalChanged",argintthisItem,"FALSE", thisObject.intOccurrence); 

     VF_SY506_PRIVATE_SelectItem(thisobjItem, thisObject);  
      
      /* Determine what the state of the checkbox is and update the uChecked property accordingly */
      
	  if (argthis.checked == true) 
	  {
	    VF_System.FP_SetBool(thisObject,"uChecked",argintthisItem,"TRUE",thisObject.intOccurrence);
	  }
	  else
	  {
	    VF_System.FP_SetBool(thisObject,"uChecked",argintthisItem,"FALSE", thisObject.intOccurrence);	  
	  }
	  
	  /* Signal a change event if required */
	  if (booluSignalChanged) VF_SY506_PRIVATE_HandleEvent(thisObject,"changed");  
   }

   return; 
}

//#IFNET
//# } 
//#endif 
