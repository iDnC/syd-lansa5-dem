/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R L I N K ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic hyperlink  ---------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#IFNET
//# class FP_RLINK_Object extends FP_BASE_Object  
//# { 
//#    var arrayobjALinks : Array = null;
//#endif 


/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RLINK"] = FP_RLINK_PUBLIC_Create;
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
function FP_RLINK_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RLINK_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.arrayobjALinks = new Array();  
 
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RLINK_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RLINK_PUBLIC_Visualize; 
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
function FP_RLINK_PUBLIC_Destroy( thisObject )  
{
  var intIndex = 0;   
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RLINK_Object = this; 
//#   var intIndex : int = 0; 
//#endif 

   try {
               

       /* Destroy any details an free any resources */ 
 
       for (intIndex in thisObject.arrayobjALinks)
       {
          var objALink = thisObject.arrayobjALinks[intIndex];
          objALink.detachEvent("onclick",FP_RLINK_EVENT_HANDLER_001);   
       } 

       thisObject.arrayobjALinks = null;  
   
   }
   catch (objError) 
   { 
       window.alert("FP_RLINK:Error " + objError.description + " detected in FP_RLINK_PUBLIC_Destroy.");     
   } 

   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RLINK_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RLINK_Object = this;  
//#endif 

   /* Declarations */ 
  
   var thisDocument     = thisObject.objDocument; 
   var struLinkCaption      = ""; 
   var struLinkHTMLCaption  = ""; 
   var struLinkHint     = "";
   var intItem          = 0; 
   var intItemCount     = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence);   
   var flagVertical     = ( VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   

   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);
  
   /* Add a an A element to this object for any that has caption property */ 

   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      var objNewElement; 
      var flagExecuteLinkURLImmediate = (VF_System.FP_Get(thisObject,"uExecuteLinkURL",intItem,"WHENCLICKED",false,thisObject.intOccurrence).toUpperCase() == "IMMEDIATE"); 
      var strLinkURL = "";
      var struWindowFeatures = "";  
      var struHoverColor = VF_System.FP_Get(thisObject,"uHoverColor",intItem,"blue",false,thisObject.intOccurrence); 
  
      /* Get the link caption and skip out if no more */

      struLinkCaption = VF_System.FP_Get(thisObject,"uLinkCaption",intItem,"",false,thisObject.intOccurrence);

      struLinkHTMLCaption = VF_System.FP_Get(thisObject,"uLinkHTMLCaption",intItem,"",false,thisObject.intOccurrence);

      /* if we are using vertival arrangement add a quick <BR> break between items */

      if ( (intItem > 1) && (flagVertical) ) thisObject.objWorkContainer.appendChild( thisDocument.createElement("BR") );  

      /* Create a new "A" element */ 

      objNewElement = thisDocument.createElement("a");  
      objNewElement.attachEvent("onmouseover", FP_RLINK_MOUSEOVER);
      objNewElement.attachEvent("onmouseout", FP_RLINK_MOUSEOOUT);
      objNewElement.setAttribute("uhovercolor", struHoverColor);
             
      /* Insert the standard set of item properties into this HTML element */
     
      VF_SY506_PRIVATE_InsertItemDetails(thisObject,objNewElement,intItem,thisObject.intOccurrence,null,false);  

      /* Keep a track of all the A links created */
      
      thisObject.arrayobjALinks[thisObject.arrayobjALinks.length] = objNewElement;    
      
      /* Attach events */
      
      objNewElement.attachEvent("onclick", FP_RLINK_EVENT_HANDLER_001);   

      /* Set up the new object's visible text */

      if ( (intItem > 1) && ( !(flagVertical)) )
      {
            if (struLinkHTMLCaption != "") objNewElement.innerHTML = "   " + struLinkHTMLCaption; 
            else                           objNewElement.innerText = "   " + struLinkCaption;
      }      
      else
      {                                      
         if (struLinkHTMLCaption != "") objNewElement.innerHTML = struLinkHTMLCaption; 
         else objNewElement.innerText = struLinkCaption; 
      } 

      /* Handle the uLinkHint property (if it has one) */

      struLinkHint = VF_System.FP_Get(thisObject,"ULINKHINT",intItem,"",false,thisObject.intOccurrence);
 
      if (struLinkHint != "") objNewElement.title = struLinkHint;  
             
      /* Insert the URL (if it has one) */
      
      strLinkURL = VF_System.FP_Get(thisObject,"uLinkURL",intItem,"",false,thisObject.intOccurrence);
      
      objNewElement.struLinkURL = strLinkURL;
                  
      /* Insert the window features */

      struWindowFeatures = VF_System.FP_Get(thisObject,"uWindowFeatures",intItem,"",false,thisObject.intOccurrence);
      objNewElement.struWindowFeatures = struWindowFeatures;

      /* Insert the immediate execution property */ 

      objNewElement.flagExecuteLinkURLImmediate = flagExecuteLinkURLImmediate.toString().toUpperCase();
                  
      /* Append this object into the container division element for this FP_Rxxxx object */

      thisObject.objWorkContainer.appendChild(objNewElement);

      /* If requested, execute the link URL immediately */ 

      if ( (flagExecuteLinkURLImmediate) && (strLinkURL != "") )
      {
        VF_System.objMainWindow.open(strLinkURL,"_blank",struWindowFeatures);
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

/* -------------------------------------------------------- */
/* FP_RLINK_EVENT_HANDLER_001 - Handle a click on an A link */
/* -------------------------------------------------------- */ 
  
function FP_RLINK_EVENT_HANDLER_001( argobjEvent )   
{
   if  ( !(VF_System.flagBusy) )
   {
      var thisALink          = argobjEvent.srcElement; 
           
//#ifscript
      var thisObject  = thisALink.objFP_RXXXX;  
      var struLinkURL = thisALink.struLinkURL;
      var flagExecuteLinkURLImmediate = (thisALink.flagExecuteLinkURLImmediate == "TRUE");
      var struWindowFeatures = thisALink.struWindowFeatures; 
//#else
//#   var thisObject:FP_RLINK_Object = this;  
//#   var struLinkURL : String = VF_System.GetAttribute(thisALink,"struLinkURL");
//#   var flagExecuteLinkURLImmediate : Boolean = (VF_System.GetAttribute(thisALink,"flagExecuteLinkURLImmediate") == "TRUE");
//#   var struWindowFeatures : String = VF_System.GetAttribute(thisALink,"struWindowFeatures"); 
//#endif 

      argobjEvent.cancelBubble = true;

      VF_SY506_PRIVATE_SelectItem(thisALink,thisObject);  

      if ((struLinkURL != null) && (struLinkURL != ""))
      {
         if ( !(flagExecuteLinkURLImmediate) ) 
         {
            try { VF_System.objMainWindow.open(struLinkURL,"_blank",struWindowFeatures); }
            catch (objError) 
            {
               window.alert("FP_RLINK:Error " + objError.description + " detected when attempting to launching a new window for URL " + struLinkURL + " using window options " + struWindowFeatures);   
            }
         }    
      }  
      else
      {
         VF_SY506_PRIVATE_HandleEvent(thisObject,"CLICK");  
      } 
   }

   return; 
}

/* -------------------------------------------------------- */
/* FP_RLINK_MOUSEOVER - Handle a mouseover on an A link */
/* -------------------------------------------------------- */ 
  
function FP_RLINK_MOUSEOVER( argobjEvent )   
{
   if  (VF_System.flagBusy) return;

   var thisALink          = argobjEvent.srcElement; 
         
   thisALink.SCOL = thisALink.style.color;
   thisALink.SCUR = thisALink.style.cursor;
   thisALink.style.color = thisALink.getAttribute("uhovercolor");
   thisALink.style.cursor= VF_System.usingFirefox ? "pointer" : "hand";
   argobjEvent.cancelBubble = true;

   return; 
}

/* -------------------------------------------------------- */
/* FP_RLINK_MOUSEOOUT - Handle a mouseover on an A link */
/* -------------------------------------------------------- */ 
  
function FP_RLINK_MOUSEOOUT( argobjEvent )   
{
   if  (VF_System.flagBusy) return;

   var thisALink          = argobjEvent.srcElement; 
   thisALink.style.color =  thisALink.SCOL;
   thisALink.style.cursor = thisALink.SCUR;
   argobjEvent.cancelBubble = true;

   return; 
}

//#IFNET
//# }  
//#endif 
