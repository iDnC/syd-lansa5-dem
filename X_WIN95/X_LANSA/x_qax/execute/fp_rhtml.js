/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R H T M L ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------ Create and manage a piece of html     ------------------ */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* Register this class of object and it's creator with the system */ 

//#IFNET
//# class FP_RHTML_Object extends FP_BASE_Object  
//# { 
//#    var intUseSharedOccurrence : int = 0; 
//#endif 

//#ifscript
arrayFP_RObjectConstructor["FP_RHTML"] = FP_RHTML_PUBLIC_Create;
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
function FP_RHTML_PUBLIC_Create( thisObject ) 
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RHTML_Object = this;  
//#endif 
 
   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.intthisObjectID = VF_System.GetThisObjectID(thisObject);

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RHTML_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RHTML_PUBLIC_Visualize; 
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
function FP_RHTML_PUBLIC_Destroy( thisObject ) 
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RHTML_Object = this;  
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
function FP_RHTML_PUBLIC_Visualize( thisObject ) 
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RHTML_Object = this;  
//#endif 

    /* Declarations */ 

//#ifscript
    var intItem                  = 0; 
    var intItemCount             = 0; 
    var intUseSharedOccurrence   = 0 ; 
    var strVisibleField          = "uShowValue";
    var flagDisabled			 = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE")));
    var struHTMLString           = "";
    var strHTML                  = "";
//#else
//#    var intItem : int                = 0; 
//#    var intItemCount :int            = 0; 
//#    var intUseSharedOccurrence : int = 0 ; 
//#    var strVisibleField : String     = "uShowValue";
//#    var flagDisabled : Boolean       = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE",thisObject.intOccurrence)));
//#    var struHTMLString : String      = "";
//#    var strHTML : StringBuilder      = new StringBuilder();
//#endif     
    
    /* Set up the container */
 
    VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

    /* Shared occurrence is when some of the settings for occurrence one are used for all occurrences */
 
    if (VF_System.FP_GetBool(thisObject,"uSharedItems",1,"FALSE",thisObject.intOccurrence)) intUseSharedOccurrence = 1;
    else                                                                                    intUseSharedOccurrence = thisObject.intOccurrence; 
     
    thisObject.intUseSharedOccurrence = intUseSharedOccurrence;  

    /* Get the item count */

    intItemCount = VF_System.FP_GetNum(thisObject,"uHTMLStringCount",1,true,0,intUseSharedOccurrence);
   

   /* Build up the total HTML string from the instances */
 
    for (intItem = 1; intItem <= intItemCount; intItem++)
    {

       struHTMLString = VF_System.FP_Get(thisObject,"uHTMLString",intItem," ",false,intUseSharedOccurrence);

//#ifscript
       strHTML += struHTMLString;  
//#else
//#    strHTML.Append(struHTMLString);
//#endif 

       /* Loop to next */ 
    }

    /* Show the HTML that is to go into the Fast Part, if the programmer set uDebug to TRUE */

    if (VF_System.FP_GetBool(thisObject,"uDebug",1,"FALSE",thisObject.intOccurrence))
    {
       window.alert(strHTML);
    }    

//#ifscript
    thisObject.objWorkContainer.innerHTML = strHTML;
    strHTML = "";
//#else
//# thisObject.objWorkContainer.innerHTML = strHTML.ToString();
//# strHTML = null; 
//#endif     
       
    /* Finished */ 

    return; 
}

/* -------------------------------------------------------------------------- */
/* FP_RHTML_PRIVATE_MakeHTML - Make a HTML standard string                    */
/* -------------------------------------------------------------------------- */ 

//#ifscript 
function FP_RHTML_PRIVATE_MakeHTML(strString)
//#else
//# function FP_RHTML_PRIVATE_MakeHTML(strString:String):String
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
/* FP_RHTML_Event Event Handler - Handle a user click on an html element in the fast part */
/* -------------------------------------------------------------------------- */ 

//#ifscript 
function FP_RHTML_Event(argobjElement, argClickedOnID) 
//#else
//# static function FP_RHTML_Event(argobjElement, argClickedOnID) 
//#endif
{
    var objElement = argobjElement ;

    argobjElement.cancelBubble = true;

    if (VF_System.flagBusy) return(false); 
 
    while ((objElement != null) && (objElement.objFP_RXXXX == null)) objElement = objElement.parentElement;  
   
    if (objElement == null) 
    {
       window.alert("Error ... cannot locate fast part instance");
    }     
    else 
    {
       var objFP_RHTML =  objElement.objFP_RXXXX; 
       if (typeof(argClickedOnID) == "number")
       { 
          VF_System.FP_SetNum(objFP_RHTML,"uClickedOnID",1,argClickedOnID,0,objFP_RHTML.intOccurrence); 
       }
       else
       {
          VF_System.FP_Set(objFP_RHTML,"uClickedOnID",1,argClickedOnID,false,objFP_RHTML.intOccurrence); 
       }


       /* Set the selected occurrence as a property of the first occurrence */
   
       VF_System.FP_SetNum(objFP_RHTML,"uSelectOccurrence",1,objFP_RHTML.intOccurrence,0,1); 

    
       /* Pass the event name on to the WEBEVENT RDML function */ 
   
       if (VF_System.FP_GetBool(objFP_RHTML,"uSignalClicked",1,"TRUE",objFP_RHTML.intOccurrence)) VF_SY506_PRIVATE_HandleEvent(objFP_RHTML,"CLICK") ; 
             
    }

    /* Finished */

    return(true); 
}
 
//#IFNET
//# }  
//#endif 
