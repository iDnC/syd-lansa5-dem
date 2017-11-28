/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R C O M B ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------ Create and manage a dynamic combo box ------------------ */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RCOMB_Object extends FP_BASE_Object  
//# { 
//#    var intUseSharedOccurrence : int = 0; 
//#endif 


/* Register this class of object and it's creator with the system */ 

//#ifscript
arrayFP_RObjectConstructor["FP_RCOMB"] = FP_RCOMB_PUBLIC_Create;
//#endif 


/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* ---- C O N S T R U C T O R, D E S T R U C T O R & V I S U A L I Z E R ----- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
 
//#ifscript 
function FP_RCOMB_PUBLIC_Create( thisObject ) 
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RCOMB_Object = this;  
//#endif 
 
   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.intthisObjectID = VF_System.GetThisObjectID(thisObject);

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript

   thisObject.Destroy   = FP_RCOMB_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RCOMB_PUBLIC_Visualize; 

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
function FP_RCOMB_PUBLIC_Destroy( thisObject ) 
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RCOMB_Object = this;  
//#endif 
   
    /* Destroy any details and free any resources */ 

    VF_System.DeleteThisObjectID(thisObject.intthisObjectID); 

    /* Finished */ 

    return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript 
function FP_RCOMB_PUBLIC_Visualize( thisObject ) 
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RCOMB_Object = this;  
//#endif 

    /* Declarations */ 

//#ifscript
    var intItem                  = 0; 
    var intItemCount             = 0; 
    var intActualItem            = 0; 
    var struOptionDescription    = "";
    var flagAlreadyFoundSelected = false;
    var intUseSharedOccurrence   = 0 ; 
    var strVisibleField          = "uShowValue";
    var objTempObject            = __new();  
    var strSELECT_HTML           = "";
    var flagCodeTableAvailable   = thisObject.flagCodeTableAvailable;  
    var flagDisabled			 = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE")));
    var strInactiveField          = "";
    var strInactiveValue         = "";
//#else
//#     var intItem : int                 = 0; 
//#     var intItemCount : int            = 0; 
//#     var intActualItem : int           = 0; 
//#     var struOptionDescription : String  = "";
//#     var flagAlreadyFoundSelected : Boolean = false;
//#     var intUseSharedOccurrence : int     = 0 ; 
//#     var strVisibleField : String         = "uShowValue";
//#     var objTempObject : Object           = __new();  
//#     var strSELECT_HTML : StringBuilder   = new StringBuilder();
//#     var flagCodeTableAvailable : Boolean = thisObject.flagCodeTableAvailable;  
//#     var flagDisabled : Boolean	 		 = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE",thisObject.intOccurrence)));
//#     var strInactiveField : String         = "";
//#     var strInactiveValue : String         = ""; 
//#endif     
  
    /* Set up the container */
 
    VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

    /* Shared occurrence is when some of the settings for occurrence one are used for all occurrences */
 
    if (VF_System.FP_GetBool(thisObject,"uSharedItems",1,"FALSE",thisObject.intOccurrence)) intUseSharedOccurrence = 1;
    else                                                                                    intUseSharedOccurrence = thisObject.intOccurrence; 
     
    thisObject.intUseSharedOccurrence = intUseSharedOccurrence;  
  
    /* Get the item count */

    intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,intUseSharedOccurrence);
    
    /* Create the select */


//#ifscript
    strSELECT_HTML += "<select";   
	strSELECT_HTML += " onchange=\"parent.VF_System.objMainWindow.FP_RCOMB_EVENT_HANDLER_onchange(this," + thisObject.intthisObjectID.toString() + ");\" ";
    if(flagDisabled) strSELECT_HTML += " DISABLED";
    strSELECT_HTML += ">";   
//#else
//#    strSELECT_HTML.Append("<select");   
//#    strSELECT_HTML.Append(" onchange=\"window.external.NET_RCOMB_EVENT_HANDLER_onchange(this," + thisObject.intthisObjectID.toString() + "); \" ");
//#    if(flagDisabled) strSELECT_HTML.Append(" DISABLED");
//#    strSELECT_HTML.Append(">");   
//#endif 
   
    /* If using a code table then alter the source of the visible field */
 
    if (flagCodeTableAvailable) strVisibleField = thisObject.objVF_FP021.strDescriptionField; 

    /*  Get the inactive field name if using a code table */

    if (flagCodeTableAvailable) strInactiveField = thisObject.objVF_FP021.strInactiveField; 
    
    /* (Each Item is an option that can be selected) */ 
 
    for (intItem = 1; intItem <= intItemCount; intItem++)
    {
       /* If this fast part is being filled from a code table get the sorted item number */
       /* from the table definition object */ 

       if (flagCodeTableAvailable) intActualItem = thisObject.objVF_FP021.GetSortedItem(intItem); 
       else                        intActualItem = intItem; 

       /* Extract the description to be used */ 

       struOptionDescription = VF_System.FP_Get(thisObject,strVisibleField,intActualItem," ",false,intUseSharedOccurrence);

       /* Start the option */ 

//#ifscript
       strSELECT_HTML += "<option value=\"" + intActualItem.toString() + "\"";  
//#else
//#    strSELECT_HTML.Append("<option value=\"" + intActualItem.toString() + "\"");  
//#endif 

       if ((strInactiveField != "*NONE") && (strInactiveField != ""))
       {
          /* Get the value of the field used to control inactive items */
      
          strInactiveValue = VF_System.FP_Get(thisObject,strInactiveField,intActualItem,"",false,intUseSharedOccurrence);
 
          if (strInactiveValue != "")
          { 
//#ifscript
              strSELECT_HTML += " DISABLED CLASS='FP_RCOMB_DisabledEntry' "; 
//#else
//#           strSELECT_HTML.Append(" DISABLED CLASS='FP_RCOMB_DisabledEntry' "); 
//#endif 
          }
       } 

       /* Determine whether this Item is the selected one */ 
    
       if (!(flagAlreadyFoundSelected))
       {
          VF_SY506_PRIVATE_InsertItemDetails(thisObject,objTempObject,intActualItem,intUseSharedOccurrence,struOptionDescription,false); 

          if (VF_SY506_PRIVATE_IsSelectedItem(objTempObject,true,thisObject)) 
          { 
             flagAlreadyFoundSelected = true ;
//#ifscript          
              strSELECT_HTML += " SELECTED ";
//#else
//#           strSELECT_HTML.Append(" SELECTED ");
//#endif                
              VF_SY506_PRIVATE_SelectItem(objTempObject,thisObject); 
 
          } 
       } 

       /* End the option */

//#ifscript          
       strSELECT_HTML += ">" + FP_RCOMB_PRIVATE_MakeHTML(struOptionDescription) + "</option>"; 
//#else
//#    strSELECT_HTML.Append(">" + FP_RCOMB_PRIVATE_MakeHTML(struOptionDescription) + "</option>"); 
//#endif

        /* Loop to next */ 
    }

    /* Append the Select into the container division element for this FP_Rxxxx object */

//#ifscript
       strSELECT_HTML += "</select>";   
       thisObject.objWorkContainer.innerHTML = strSELECT_HTML;
//#else
//#   strSELECT_HTML.Append("</select>");   
//#   thisObject.objWorkContainer.innerHTML = strSELECT_HTML.ToString();
//#endif     

    /* Store the currently selected index, in case we have to revert to it when the user selects an Inactive table item */
    thisObject.objWorkContainer.firstChild.setAttribute("defaultSelectedIndex", thisObject.objWorkContainer.firstChild.selectedIndex);
    
    /* Clean up */ 

//#ifscript
      strSELECT_HTML = "";
//#else
//#   strSELECT_HTML = null;
//#endif 
       
    __destroy(objTempObject);  
  
    /* Finished */ 

    return; 
}

/* -------------------------------------------------------------------------- */
/* FP_RCOMB_PRIVATE_MakeHTML - Make a HTML standard string                    */
/* -------------------------------------------------------------------------- */ 
 
//#ifscript  
function FP_RCOMB_PRIVATE_MakeHTML(strString)
//#else
//# function FP_RCOMB_PRIVATE_MakeHTML(strString:String):String 
//#endif 
{
   strString = strString.replace(/\&/g,"&amp;");
   strString = strString.replace(/\</g,"&lt;");
   strString = strString.replace(/\>/g,"&gt;");
   /* strString = strString.replace(/\"/g,"&quot;");  */
   /* strString = strString.replace(/\n/g,"<br/>\n"); */
   return(strString);
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* -------------------- E V E N T H A N D L E R S ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* FP_RCOMB_EVENT_HANDLER_001 - Handle a user selection of a drop down option */
/* -------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RCOMB_EVENT_HANDLER_onchange(objSelect,intthisObjectID) 
//#else
//# static function FP_RCOMB_EVENT_HANDLER_onchange(objSelect: HTMLSelectElement,intthisObjectID:int) 
//#endif 
{

    /* Ignore request if busy */ 

    if (VF_System.flagBusy) return(false); 
  
    /* Otherwise handle the request */
      
    { 
    
//#ifscript    
       var thisObject	 = VF_System.ConvertThisObjectID(intthisObjectID);
       var intActualItem = 0;  
       var objTempObject = null;   
       var objOption     = null;   
//#else
//#    var thisObject    : FP_RCOMB_Object = VF_System.ConvertThisObjectID(intthisObjectID);
//#    var intActualItem : int = 0;  
//#    var objTempObject : Object = null;   
//#    var objOption: HTMLOptionElement = null;   
//#endif 

       if (thisObject == null) return; 

       /* Get the option that the user selected from the drop down and the associated item */ 
  
       objOption = objSelect.options[objSelect.selectedIndex]; 

       if (typeof(objOption) == "undefined") return(false); 

       /* If the option the user chose is disabled revert to the previously selected option */
       
       if (objOption.disabled)
       { 
          objSelect.selectedIndex = objSelect.getAttribute("defaultSelectedIndex");
          return(false); 
       }
       else
       {
          objSelect.setAttribute("defaultSelectedIndex", objSelect.selectedIndex);
       }

       /* Set the uChanged property for this occurrence, first Item, so that multiple changes can be identified by the RDML */
    
       VF_System.FP_SetBool(thisObject,"uChanged",1,"TRUE",thisObject.intOccurrence); 

       /* Create a temporary object */

       objTempObject = __new();
    
       /* Get the actual item number */ 

       intActualItem = parseInt(objOption.value,10); 

       VF_SY506_PRIVATE_InsertItemDetails(thisObject,objTempObject,intActualItem,thisObject.intUseSharedOccurrence,objOption.text,false);  
    
       /* Select the item */

       VF_SY506_PRIVATE_SelectItem(objTempObject,thisObject);
    
       /* Pass the event name on to the WEBEVENT RDML function */ 
     
       if (VF_System.FP_GetBool(thisObject,"uSignalSelection",1,"FALSE",thisObject.intOccurrence)) VF_SY506_PRIVATE_HandleEvent(thisObject,"SELECTED"); 
             
       /* Clean up */

        __destroy(objTempObject);  
    }

    /* Finished */

    return(true); 
}

/* ---------------------------------------------------------------- */ 

//#IFNET
//# } 
//#endif 

 