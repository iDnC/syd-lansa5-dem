/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R Q I K P ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a quick pick field -----------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RQIKP_Object extends FP_BASE_Object  
//# { 
//#   var uSignalSelection : Boolean = false;
//#   var objINPUT : Object = null;
//#   var objSEPERATE : Object = null;
//#   var objDESCRIPT : Object = null;
//#   var objPOPUPDIV : Object = null;
//#   var flagPOPUPDIVVisible : Boolean = false; 
//#   var arraySortedItems  : Array = null
//#   var arrayFirstCharacters : Array = null; 
//#   var intItemCount : int   = 0; 
//#   var intUseSharedOccurrence : int = 0; 
//#   var strVisibleField : String  = "uShowValue"; 
//#   var intDisplayPageSize : int;
//#   var struINPUTEntryFormat : String;
//#   var struDESCRIPTIONEntryFormat : String; 
//#   var struDESCRIPTIONDisplayFormat : String; 
//#   var struINPUTDisplayFormat : String; 
//#   var intCurrentSortedItem : int; 
//#endif 

//#ifscript
arrayFP_RObjectConstructor["FP_RQIKP"] = FP_RQIKP_PUBLIC_Create;
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
function FP_RQIKP_PUBLIC_Create(thisObject)  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RQIKP_Object = this;  
//#endif 

   var thisDocument = thisObject.objDocument;

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */
 
   thisObject.objINPUT = thisDocument.createElement("INPUT");
   thisObject.objINPUT.attachEvent("onkeyup",FP_RQIKP_EVENT_HANDLER_onkeyup);   
   thisObject.objINPUT.attachEvent("onkeydown",FP_RQIKP_EVENT_HANDLER_onkeydown);   

   /* replace onblur with ondeactivate because in .NET the onblur was cancelling hte onclick */
   /* For non IE browsers that don't support ondeactivate we do need onblur. But it does cancel the onclick, so I added a mousedown for the pop up to cancel */
   /* onblur temporarily. It will be reattached in the pop up div onclick event */   
   if (VF_System.usingExplorer) 
   {
      thisObject.objINPUT.attachEvent("onfocus",FP_RQIKP_EVENT_HANDLER_onfocus);   
      thisObject.objINPUT.attachEvent("ondeactivate", FP_RQIKP_EVENT_HANDLER_onblur);
   }
   else 
   {
      thisObject.objINPUT.attachEvent("onclick",FP_RQIKP_EVENT_HANDLER_onfocus);   
      thisObject.objINPUT.addEventListener("blur", FP_RQIKP_EVENT_HANDLER_onblur,false);   
   }
   
   thisObject.objSEPERATE = thisDocument.createElement("span");
   thisObject.objSEPERATE.unselectable = "on";
   thisObject.objDESCRIPT = thisDocument.createElement("span");
   thisObject.objDESCRIPT.unselectable = "on";
   thisObject.objPOPUPDIV = null;
   thisObject.flagPOPUPDIVVisible = false; 
   thisObject.arraySortedItems     = new Array(); 
   thisObject.arrayFirstCharacters = new Array(); 
   
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */
//#ifscript
   thisObject.Destroy              = FP_RQIKP_PUBLIC_Destroy; 
   thisObject.Visualize            = FP_RQIKP_PUBLIC_Visualize; 
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
function FP_RQIKP_PUBLIC_Destroy(thisObject)  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RQIKP_Object = this;  
//#endif 

   /* Destroy references */     

   if (thisObject.objINPUT != null)
   { 
      thisObject.objINPUT.detachEvent("onkeyup",FP_RQIKP_EVENT_HANDLER_onkeyup); 
      thisObject.objINPUT.detachEvent("onkeydown",FP_RQIKP_EVENT_HANDLER_onkeydown); 
      thisObject.objINPUT.detachEvent("onfocus",FP_RQIKP_EVENT_HANDLER_onfocus); 
      thisObject.objINPUT.detachEvent("onblur",FP_RQIKP_EVENT_HANDLER_onblur); 
      thisObject.objINPUT.thisObject = null;  
      
      thisObject.objWorkContainer.removeChild(thisObject.objINPUT);

      if (thisObject.objSEPERATE != null) thisObject.objWorkContainer.removeChild(thisObject.objSEPERATE);
      if (thisObject.objDESCRIPT != null) thisObject.objWorkContainer.removeChild(thisObject.objDESCRIPT);
      
      thisObject.objINPUT    = null; 
      thisObject.objSEPERATE = null; 
      thisObject.objDESCRIPT = null; 
   }     

   if (thisObject.objPOPUPDIV != null)
   { 
      thisObject.objPOPUPDIV.detachEvent("onclick",FP_RQIKP_EVENT_HANDLER_onclick);   
      thisObject.objPOPUPDIV.thisObject = null;

      thisObject.objDocument.body.removeChild(thisObject.objPOPUPDIV);

      thisObject.objPOPUPDIV = null;   
      thisObject.flagPOPUPDIVVisible = false; 
   }

//#ifscript
   delete(thisObject.arraySortedItems);  
   delete(thisObject.arrayFirstCharacters);   
//#else
//# thisObject.arraySortedItems.length = 0;
//# thisObject.arrayFirstCharacters.length = 0;
//#endif
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
//#ifscript 
function FP_RQIKP_PUBLIC_Visualize(thisObject)  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RQIKP_Object = this;  
//#endif 

   /* Declarations */ 

   var thisDocument             = thisObject.objDocument;
   
//#ifscript 
   var intItemCount             = 0;
   var intDisplayPageSize       = VF_System.FP_GetNum(thisObject,"uDisplayPageSize",1,true,8);
   var intSortedItem            = 0; 
   var intActualItem            = 0;    
   var intIndex                 = 0; 
   var strVisibleField          = "uShowValue";
   var flagCodeTableAvailable   = thisObject.flagCodeTableAvailable;  
   var struOptionDescription    = ""; 
   var flagSelectedNotFound     = true; 
   var intUseSharedOccurrence   = 0; 
//#else
//#     var intSortedItem :int  = 0; 
//#     var intActualItem : int = 0;    
//#     var intIndex : int       = 0; 
//#     var flagCodeTableAvailable : Boolean = thisObject.flagCodeTableAvailable;  
//#     var struOptionDescription : String  = "";
//#     var flagSelectedNotFound : Boolean = true;
//#     var intDisplayPageSize : int = VF_System.FP_GetNum(thisObject,"uDisplayPageSize",1,true,8,thisObject.intOccurrence);
//#endif

   /* Shared occurrence is when some of the settings for occurrence one are used for all occurrences */

//#ifscript 
    if (VF_System.FP_GetBool(thisObject,"uSharedItems",1,"FALSE")) intUseSharedOccurrence = 1;
//#else
//# if (VF_System.FP_GetBool(thisObject,"uSharedItems",1,"FALSE",thisObject.intOccurrence)) intUseSharedOccurrence = 1;
//#endif
   else                                                           intUseSharedOccurrence = thisObject.intOccurrence; 

   /* Get the item count */ 
   
   intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,intUseSharedOccurrence);
     
   /* If using a code table then alter the source of the visible field */
 
   if (flagCodeTableAvailable) strVisibleField = thisObject.objVF_FP021.strDescriptionField;

   /* Set up the container with default for no label */

   VF_SY506_PRIVATE_SetupContainer(thisObject, "LEFT", null, null);

   /* Insert the INPUT field into the container */
   
   thisObject.objWorkContainer.appendChild(thisObject.objINPUT);
   thisObject.objINPUT.thisObject    = thisObject; 
   thisObject.objINPUT.size          = VF_System.FP_GetNum(thisObject,"uINPUTSize",1,true,20, thisObject.intOccurrence);
   thisObject.objINPUT.disabled      = (!(VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE", thisObject.intOccurrence))); 

   /* Insert the separator and description areas into the form */

   thisObject.objWorkContainer.appendChild(thisObject.objSEPERATE);
   thisObject.objSEPERATE.innerText = " " + VF_System.FP_Get(thisObject,"uSeparator",1,"-",false,thisObject.intOccurrence) + " ";
   VF_System.Hide(thisObject.objSEPERATE);
   thisObject.objWorkContainer.appendChild(thisObject.objDESCRIPT);
   VF_System.Hide(thisObject.objDESCRIPT);

   /* Set special values into this object */
   
   thisObject.intItemCount = intItemCount;   
   thisObject.intUseSharedOccurrence = intUseSharedOccurrence;
   thisObject.strVisibleField = strVisibleField; 
   thisObject.intDisplayPageSize = intDisplayPageSize;  

   thisObject.struINPUTEntryFormat   = VF_System.FP_Get(thisObject,"uINPUTEntryFormat",1,"C",true, thisObject.intOccurrence).toUpperCase();
   thisObject.struINPUTDisplayFormat = VF_System.FP_Get(thisObject,"uINPUTDisplayFormat",1,"V",true, thisObject.intOccurrence).toUpperCase();

   thisObject.struDESCRIPTIONEntryFormat   = VF_System.FP_Get(thisObject,"uDESCRIPTIONEntryFormat",1,"N",true, thisObject.intOccurrence).toUpperCase(); 
   thisObject.struDESCRIPTIONDisplayFormat = VF_System.FP_Get(thisObject,"uDESCRIPTIONDisplayFormat",1,"N",true, thisObject.intOccurrence).toUpperCase();
   thisObject.intCurrentSortedItem = 0;

   { 
       var struSelectHiddenKey1 = VF_System.FP_GetVariantasString(thisObject,"uSelectHiddenKey1",1,thisObject.intOccurrence);    
       var struHiddenKey1       = ""; 

       /* Look for the first selected item and then stop */

       for (intIndex = 1; intIndex <= intItemCount; intIndex++)
       {
          intSortedItem = thisObject.arraySortedItems.length; 

          /* If this fast part is being filled from a code table get the sorted item number */
          /* from the table definition object                                               */ 

          if (flagCodeTableAvailable) intActualItem = thisObject.objVF_FP021.GetSortedItem(intIndex); 
          else                        intActualItem = intIndex; 

          thisObject.arraySortedItems[intSortedItem] = intActualItem; 

          if (flagSelectedNotFound)
          {
             struHiddenKey1 = VF_System.FP_GetVariantasString(thisObject,"uHiddenKey1",intActualItem,intUseSharedOccurrence);     

             if (struSelectHiddenKey1 == struHiddenKey1) 
             { 
                FP_RQIKP_PRIVATE_SelectItem(thisObject,intSortedItem,false,false);   
                flagSelectedNotFound = false; 
             }
          }    

          /* Track first letters */

          {
             var strFirstChar = VF_System.FP_Get(thisObject,strVisibleField,intActualItem," ",false,intUseSharedOccurrence).charAt(0).toUpperCase(); 
             
             if (thisObject.arrayFirstCharacters[strFirstChar] == null) thisObject.arrayFirstCharacters[strFirstChar] = intSortedItem;  
          }
        
          /* Loop to next */ 
       }

       /* Default selection to the first item */

       if (flagSelectedNotFound) FP_RQIKP_PRIVATE_SelectItem(thisObject,0,false,true); 
 
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

/* ---------------------------------------------------- */
/* FP_RQIKP_PRIVATE_PositionPopup - Position the Pop up */
/* ---------------------------------------------------- */ 

function FP_RQIKP_PRIVATE_PositionPopup(thisObject)
{
   if (thisObject.objPOPUPDIV != null)
   {
       {
          var loop = thisObject.objINPUT; 
          var left = 0; 

          while (loop != null)
	      {
	         left += loop.offsetLeft;
	         loop = loop.offsetParent; 
	      }

          thisObject.objPOPUPDIV.style.left = left + "px"; 
       }
	    
       {
          var loop = thisObject.objINPUT; 
          var top  = 0; 
         
          while (loop != null)
	      {
	         top += loop.offsetTop;
	         loop = loop.offsetParent; 
	      }

          thisObject.objPOPUPDIV.style.top = top + 22 + "px"; 
       }

   }

   return; 
}

/* -------------------------------------------- */
/* FP_RQIKP_PRIVATE_SelectItem - Select an Item */
/* -------------------------------------------- */ 

function FP_RQIKP_PRIVATE_SelectItem(thisObject,intSortedItem,flagForEntry,flagSetasSelected)
{
   var strCODE              = "";    
   var strDESCRIPT          = "";
   var strITEM              = "";
   var strINPUTFormat       = "";
   var strDESCRIPTIONFormat = "";
   var intActualItem        = 0; 
    
   /* Adjust bodgy item numbers to be correct */

   if (intSortedItem >= thisObject.intItemCount) intSortedItem = thisObject.intItemCount - 1; 
   
   if (intSortedItem < 0) intSortedItem = 0;

   intActualItem = thisObject.arraySortedItems[intSortedItem]; 

   /* Extract the code and description to be used */ 

   strITEM     = (intSortedItem + 1).toString(); 
   strCODE     = VF_System.FP_GetVariantasString(thisObject,"uHiddenKey1",intActualItem,thisObject.intUseSharedOccurrence);    
   strDESCRIPT = VF_System.FP_Get(thisObject,thisObject.strVisibleField,intActualItem," ",false,thisObject.intUseSharedOccurrence);

   /* Set the current item details */

   thisObject.intCurrentSortedItem = intSortedItem; 

   /* If required set as the selected item */

   if (flagSetasSelected)
   {
      var objTempObject = __new();  

//#ifscript      
      VF_SY506_PRIVATE_InsertItemDetails(thisObject,objTempObject,intActualItem,thisObject.intUseSharedOccurrence,""); 
//#else
//#   VF_SY506_PRIVATE_InsertItemDetails(thisObject,objTempObject,intActualItem, thisObject.intUseSharedOccurrence, null, false);  
//#endif

      VF_SY506_PRIVATE_SelectItem(objTempObject, thisObject);

      __destroy(objTempObject);  
   }
 
   /* Decide on the formats to be used */

   if (flagForEntry)
   {
       strINPUTFormat       = thisObject.struINPUTEntryFormat;
       strDESCRIPTIONFormat = thisObject.struDESCRIPTIONEntryFormat;
   }
   else
   {
       strINPUTFormat       = thisObject.struINPUTDisplayFormat;
       strDESCRIPTIONFormat = thisObject.struDESCRIPTIONDisplayFormat;
   }

   /* Do the INPUT field first */ 

   switch (strINPUTFormat)
   {

      case "V":
           thisObject.objINPUT.value = strDESCRIPT;  
           break; 

      case "CV":
           thisObject.objINPUT.value = strCODE + thisObject.objSEPERATE.innerText + strDESCRIPT;  
           break;

      case "I":
           thisObject.objINPUT.value = strITEM;  
           break;

      case "IV":
           thisObject.objINPUT.value = strITEM + thisObject.objSEPERATE.innerText + strDESCRIPT;  
           break;

      case "IC":
           thisObject.objINPUT.value = strITEM + thisObject.objSEPERATE.innerText + strCODE;  
           break;

      default:  
           thisObject.objINPUT.value = strCODE;  
           break; 
        
   }   

   /* Now do the description format */ 

   switch (strDESCRIPTIONFormat)
   {
      case "C":
           thisObject.objDESCRIPT.innerText = strCODE;  
           break; 

      case "CV":
           thisObject.objDESCRIPT.innerText = strCODE + thisObject.objSEPERATE.innerText + strDESCRIPT;  
           break; 

      case "I":
           thisObject.objDESCRIPT.innerText = strITEM;  
           break;

      case "IV":
           thisObject.objDESCRIPT.innerText = strITEM + thisObject.objSEPERATE.innerText + strDESCRIPT;  
           break;

      case "IC":
           thisObject.objDESCRIPT.innerText = strITEM + thisObject.objSEPERATE.innerText + strCODE;  
           break;

      default: 
           thisObject.objDESCRIPT.innerText = strDESCRIPT;  
           break; 
   } 

   /* Now decide whether to show the descrption and seperator at all */ 
 
   if (strDESCRIPTIONFormat == "N")
   {
       VF_System.Hide(thisObject.objSEPERATE);
       VF_System.Hide(thisObject.objDESCRIPT);
   }
   else
   {
       VF_System.Show(thisObject.objSEPERATE);
       VF_System.Show(thisObject.objDESCRIPT);
   }

   /* Finished */ 

   return; 
} 

/* -------------------------------------------- */
/* FP_RQIKP_PRIVATE_BuildPopUp - Build a Pop up */
/* -------------------------------------------- */ 

function FP_RQIKP_PRIVATE_BuildPopUp(thisObject,argintPositioningIndex,strPosition)
{
   var intSortedItems        = 0;
   var intIndex        = 0;
   var objPOPUPDIV     = null;
   var struPOPUPFormat = VF_System.FP_Get(thisObject,"uPOPUPFormat",1,"CV",true, thisObject.intOccurrence).toUpperCase(); 
   var strCODE         = "";     
   var strDESCRIPT     = "";
   var strITEM         = "";
   var objChild        = null;
   var intStartIndex   = 0; 
   var intEndIndex     = 0; 
   var thisDocument    = thisObject.objDocument;
   var strInactiveField         = "";
   var strInactiveValue         = "";

   /* Create and position the pop-up (if required) */
  
   if (thisObject.objPOPUPDIV != null)
   {
      objPOPUPDIV = thisObject.objPOPUPDIV;
   }
   else 
   { 

      objPOPUPDIV = thisDocument.createElement("div"); 
      objPOPUPDIV.attachEvent("onclick",FP_RQIKP_EVENT_HANDLER_onclick);   

      /* Add the mouse down because it occurs before the onclick so taht we can remove the onblur that cancels the onclick */      
      if (!VF_System.usingExplorer)
      {
         objPOPUPDIV.addEventListener("mousedown", function() { FP_RQIKP_EVENT_HANDLER_mouseDown(thisObject); }, false);         
      }

      
      thisDocument.body.appendChild(objPOPUPDIV);       

      objPOPUPDIV.thisObject = thisObject; 
      objPOPUPDIV.style.position = "absolute"; 
      objPOPUPDIV.style.cursor          = "default"; 
      objPOPUPDIV.style.font            = "menu"; 
      objPOPUPDIV.style.color           = "menutext"; 
      objPOPUPDIV.style.backgroundColor =  "Menu";
      objPOPUPDIV.style.borderTop    = "1px solid  buttonshadow";
      objPOPUPDIV.style.borderLeft   = "1px solid  buttonshadow";
      objPOPUPDIV.style.borderRight  = "3px groove buttonshadow";
      objPOPUPDIV.style.borderBottom = "3px groove buttonshadow";
      objPOPUPDIV.style.height = "";
      objPOPUPDIV.style.width  = "";
      thisObject.objPOPUPDIV = objPOPUPDIV;
   }

   /* Position the pop up */

   FP_RQIKP_PRIVATE_PositionPopup(thisObject);

   /* Now compute the number of entries to show in the pop up */
   
   {

      var intMidPoint     = thisObject.intDisplayPageSize / 2;

      if (intMidPoint < 1) intMidPoint = 1; 
    
      if (argintPositioningIndex < 0) argintPositioningIndex = 0;  

      switch (strPosition)
      {
         case "T":
              intStartIndex = argintPositioningIndex;
              intEndIndex   = argintPositioningIndex + thisObject.intDisplayPageSize;
              break;  

         case "B":
              intStartIndex = argintPositioningIndex - thisObject.intDisplayPageSize;
              intEndIndex   = argintPositioningIndex;
              break;  
         
         case "M": 
              intStartIndex = argintPositioningIndex - intMidPoint;
              intEndIndex   = argintPositioningIndex + intMidPoint;
              break;  
      }   

      /* Correct values */ 

      if (intStartIndex < 0) 
      {
         intStartIndex = 0; 
         intEndIndex   = thisObject.intDisplayPageSize; 
      }      

      if (intEndIndex > thisObject.intItemCount)
      { 
         intEndIndex = thisObject.intItemCount;
         intStartIndex = intEndIndex - thisObject.intDisplayPageSize; 
         if (intStartIndex < 0) intStartIndex = 0;   
      }     
                 
      intSortedItems = intEndIndex - intStartIndex; 
        
   }

   /* Add sufficient new entries to the popup to handle the number of items */   

   while (objPOPUPDIV.children.length < intSortedItems)
   {
      var objNewDIV = thisDocument.createElement("div");
      objNewDIV.unselectable = "on";       
      objNewDIV.style.marginLeft  = "2px"; 
      objNewDIV.style.marginRight = "2px"; 
      objPOPUPDIV.appendChild(objNewDIV);
   }

   /* Now set all values in the pop up and hide extra pop-up entries */ 

   objPOPUPDIV.intCurrentTopofPageIndex    = -1;      
   objPOPUPDIV.intCurrentBottomofPageIndex = -1;      

   objChild = objPOPUPDIV.firstChild;

   for (intIndex = intStartIndex; (objChild != null); intIndex++)
   {
     
      if (intIndex < intEndIndex)
      {
         var intActualItem = thisObject.arraySortedItems[intIndex]; 
       
         objPOPUPDIV.intCurrentBottomofPageIndex = intIndex; 

//#ifscript
         if (objPOPUPDIV.intCurrentTopofPageIndex < 0) objPOPUPDIV.intCurrentTopofPageIndex = intIndex; 
//#else
//# var __strCurrentTopofPageIndex : String = VF_System.GetAttribute(objPOPUPDIV,"intCurrentTopofPageIndex");
//# if ( parseInt(__strCurrentTopofPageIndex, 10) < 0 ) objPOPUPDIV.intCurrentTopofPageIndex = intIndex;
//#endif


          /* Extract the code and description to be used */ 

          strITEM     = (intIndex + 1).toString();   
          strCODE     = VF_System.FP_GetVariantasString(thisObject,"uHiddenKey1",intActualItem,thisObject.intUseSharedOccurrence);    
          strDESCRIPT = VF_System.FP_Get(thisObject,thisObject.strVisibleField,intActualItem," ",false,thisObject.intUseSharedOccurrence);

         
         /* determine if this option is a code table entry that is inactive */ 

         objChild.disabled = false ;

         if (thisObject.flagCodeTableAvailable) 
         {   
            strInactiveField = thisObject.objVF_FP021.strInactiveField; 

            if ((strInactiveField != "*NONE") && (strInactiveField != ""))
            {
               /* Get the value of the field used to control inactive items */
               strInactiveValue = VF_System.FP_Get(thisObject,strInactiveField,intActualItem,"",false,thisObject.intUseSharedOccurrence);
       
               if (strInactiveValue != "")
               { 
                   objChild.disabled = true ; 
               }
            } 
         }


          /* Now do the description format */ 

           switch (struPOPUPFormat)
           {
              case "C":
                   objChild.innerText = strCODE;  
                   break; 

              case "CV":
                   objChild.innerText = strCODE + thisObject.objSEPERATE.innerText + strDESCRIPT;  
                   break; 

              case "I":
                  objChild.innerText = strITEM;  
                  break;

              case "IV":
                   objChild.innerText = strITEM + thisObject.objSEPERATE.innerText + strDESCRIPT;  
                   break;

              case "IC":
                  objChild.innerText = strITEM + thisObject.objSEPERATE.innerText + strCODE;  
                  break;

              default: 
                   objChild.innerText = strDESCRIPT;  
                   break; 
           } 

/*           VF_System.Show(objChild); */
           objChild.style.visibility = "visible";
           objChild.style.display = "block";
           
           if (intIndex == thisObject.intCurrentSortedItem) 
           {
              VF_SY001_PUBLIC_MouseEnterPopupEntry(objChild);  
           } 
           else
           {
              VF_SY001_PUBLIC_MouseExitPopupEntry(objChild); 
           } 
//#ifscript           
           objChild.__intSortedItem = intIndex;    
//#else
//#        objChild.__strSortedItem = intIndex.toString();    
//#endif
       }
       else
       {
//#ifscript           
           objChild.__intSortedItem = -1; 
//#else
//#        objChild.__strSortedItem = "-1";
//#endif
           VF_System.Hide(objChild);  
       } 

       /* Move to next child */ 

       objChild = objChild.nextSibling;
   } 

   /* Show the DIV */


   thisObject.flagPOPUPDIVVisible = true;
   VF_System.Show(objPOPUPDIV); 

   /* Finished */ 
  
   return; 
}

function FP_RQIKP_EVENT_HANDLER_mouseDown(thisObject)
{
   thisObject.objINPUT.removeEventListener("blur", FP_RQIKP_EVENT_HANDLER_onblur,false);
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

/* --------------------------------------------------------- */
/* FP_RQIKP_PRIVATE_SelectDifferences - Select Differences   */
/* --------------------------------------------------------- */ 

function FP_RQIKP_PRIVATE_SelectDifferences(objINPUT,strCOMPAREValue,intCOMPAREValueLength)
{
   var intINPUTValueLength = objINPUT.value.length; 
   var intLengthDifference = intCOMPAREValueLength - intINPUTValueLength;

   if (intLengthDifference <= 0) return;

   var strAddition = strCOMPAREValue.substr(intINPUTValueLength);

   if (VF_System.usingExplorer)
   {
      var objTEXTRange = objINPUT.createTextRange();    

      objTEXTRange.text  += strAddition;
      objTEXTRange.findText(strAddition,(intLengthDifference * -2));
      objTEXTRange.select();
      objTEXTRange = null;          
   }
   else
   {
      objINPUT.value += strAddition;
      objINPUT.setSelectionRange(intINPUTValueLength, intCOMPAREValueLength);
   }

   return;
}

/* --------------------------------------------------------- */
/* FP_RQIKP_EVENT_HANDLER_onclick - Handle click on window   */
/* --------------------------------------------------------- */ 
  
function FP_RQIKP_EVENT_HANDLER_onclick(argobjEvent)   
{
   argobjEvent.cancelBubble = true;

   if (VF_System.flagBusy) return;
   
//#ifscript 
   if (typeof(argobjEvent.srcElement.__intSortedItem) == "number") FP_RQIKP_PRIVATE_onfocus(argobjEvent.srcElement.parentElement.thisObject,false,argobjEvent.srcElement.__intSortedItem); 
   if (!VF_System.usingExplorer)  FP_RQIKP_EVENT_HANDLER_XB_onblur(argobjEvent.srcElement.parentElement.thisObject);
//#else
//# var __strSortedItem : String = VF_System.GetAttribute(argobjEvent.srcElement,"__strSortedItem");
//# if (!(isNaN(__strSortedItem)) )
//# {
//#   var __intSortedItem : int = parseInt(__strSortedItem, 10); 
//#   FP_RQIKP_PRIVATE_onfocus(this,false,__intSortedItem); 
//# }
//#endif

   return; 
}

/* --------------------------------------------------------- */
/* FP_RQIKP_EVENT_HANDLER_onkeydown - Handle some keys       */
/* --------------------------------------------------------- */ 
  
function FP_RQIKP_EVENT_HANDLER_onkeydown(argobjEvent)   
{
   if (VF_System.flagBusy) return;
   if (argobjEvent.keyCode == 13) VF_SY001_PRIVATE_CancelEvent(argobjEvent); 
   return;
}

/* --------------------------------------------------------- */
/* FP_RQIKP_EVENT_HANDLER_onkeyup - Handle key Up            */
/* --------------------------------------------------------- */ 
  
function FP_RQIKP_EVENT_HANDLER_onkeyup(argobjEvent)   
{
   var objINPUT   = argobjEvent.srcElement;

//#ifscript
   var thisObject = objINPUT.thisObject;
//#else
//# var thisObject : FP_RQIKP_Object = this;
//#endif

   if (VF_System.flagBusy) return;  
   if (argobjEvent.altKey) return;
   if (argobjEvent.altLeft) return;
   if ( ( VF_System.usingExplorer ) && (argobjEvent.button != 0) ) return;
   if (argobjEvent.ctrlKey)  return;
   if (argobjEvent.ctrlLeft) return;

   switch (argobjEvent.keyCode)
   {

      /* Page up */

      case 33: 
           if (thisObject.flagPOPUPDIVVisible)
           {

//#ifscript
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.objPOPUPDIV.intCurrentTopofPageIndex,"B"); 
//#else
//#           var strCurrentTopofPageIndex : String = VF_System.GetAttribute(thisObject.objPOPUPDIV,"intCurrentTopofPageIndex");
//#           if (!( isNaN(strCurrentTopofPageIndex) )) FP_RQIKP_PRIVATE_BuildPopUp(thisObject,parseInt(strCurrentTopofPageIndex,10),"B"); 
//#endif              
           }
           else
           {
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }
           return; 
      
      /* Page down */ 

      case 34: 
           if (thisObject.flagPOPUPDIVVisible)
           {
//#ifscript
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.objPOPUPDIV.intCurrentBottomofPageIndex,"T");  
//#else
//#           var strCurrentBottomofPageIndex : String = VF_System.GetAttribute(thisObject.objPOPUPDIV,"intCurrentBottomofPageIndex");
//#           if (!( isNaN(strCurrentBottomofPageIndex) )) FP_RQIKP_PRIVATE_BuildPopUp(thisObject,parseInt(strCurrentBottomofPageIndex,10),"T");  
//#endif                            
           }        
           else
           {
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }
           return; 

      /* Arrow Up */ 

      case 38:
           if (thisObject.flagPOPUPDIVVisible)
           {
              FP_RQIKP_PRIVATE_SelectItem(thisObject,(thisObject.intCurrentSortedItem - 1),true,true); 
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }        
           else
           {
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }
           return; 

      /* Arrow down */

      case 40: 
           if (thisObject.flagPOPUPDIVVisible)
           {
              FP_RQIKP_PRIVATE_SelectItem(thisObject,(thisObject.intCurrentSortedItem + 1),true,true); 
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }
           else
           {
              FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M"); 
           }        
           return; 

      /* Enter key */ 

      case 13:
           if (thisObject.flagPOPUPDIVVisible) FP_RQIKP_PRIVATE_onfocus(thisObject,false,thisObject.intCurrentSortedItem);
           return; 

      /* Other keys to ignore */

      case 33: 
      case 34: 
      case 38:
      case 40: 
      case 37:  
      case 39:  
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 91:
      case 92:
      case 93:
      case 32:
      case 8:
      case 9:
      case 36: 
      case 35: 
      case 45: 
      case 46: 
      case 47: 
      case 48: 
      case 145: 
         return;
      
     default:
         break; 
   }

   argobjEvent.cancelBubble = true;   

   /* Ignore empty input fields */

   if (objINPUT.value.length == 0) return;

   /* If using an item type lookup */

   if (thisObject.struINPUTEntryFormat.charAt(0) == "I")
   {
      var intSortedItem    = 0;  
      var strOriginalINPUT = objINPUT.value; 
      var strNewINPUT      = "";  
 
      intSortedItem = parseInt(objINPUT.value,10); 
      
      if (isNaN(intSortedItem)) intSortedItem = 0;
      else                      intSortedItem = intSortedItem - 1;     

      FP_RQIKP_PRIVATE_SelectItem(thisObject,intSortedItem,true,true);

      strNewINPUT    = objINPUT.value; 
      objINPUT.value = strOriginalINPUT;  

      FP_RQIKP_PRIVATE_SelectDifferences(objINPUT,strNewINPUT,strNewINPUT.length);

   }

   /* Else using a generic lookup */  

   else
   {
      var intSortedItem          = 0; 
      var intItemCount           = thisObject.intItemCount; 
      var intActualItem          = 0; 
      var flagCodeTableAvailable = thisObject.flagCodeTableAvailable;  
      var intUseSharedOccurrence = thisObject.intUseSharedOccurrence; 
      var strVisibleField        = thisObject.strVisibleField; 

      var strINPUTValue            = "";
      var strINPUTValueUpper       = "";
      var intINPUTValueLength      = 0;
      var intCOMPAREValueLength    = 0;
      var intCOMPAREValues         = 0; 
      var intMatches               = 0;
      var strCODE                  = "";    
      var strDESCRIPT              = "";
      var i                        = 0; 
      var strINPUTFormat           = thisObject.struINPUTEntryFormat; 
      var intFirstFoundSortedIndex = -1;  
      var arraystrCOMPAREValue     = new Array();
      var intStartSearchItem       = 0;

      strINPUTValue       = objINPUT.value;
	  intINPUTValueLength = strINPUTValue.length;
      strINPUTValueUpper  = strINPUTValue.toUpperCase();

      /* Turn on the busy light */ 

      VF_System.objVF_UM007.SetBusy(true); 

      /* If possible start the search at the first character match */ 

      {
         var strFirstChar = strINPUTValueUpper.charAt(0);
          
         if (thisObject.arrayFirstCharacters[strFirstChar] != null) intStartSearchItem = thisObject.arrayFirstCharacters[strFirstChar]; 
         else                                                       intStartSearchItem = 0; 
      }

    
      /* Do the search sequentially until a single match found */  

      for (intSortedItem = intStartSearchItem; (intSortedItem < intItemCount) && (intMatches == 0); intSortedItem++)
      {
         intActualItem = thisObject.arraySortedItems[intSortedItem];  

         strCODE     = VF_System.FP_GetVariantasString(thisObject,"uHiddenKey1",intActualItem,thisObject.intUseSharedOccurrence);    
         strDESCRIPT = VF_System.FP_Get(thisObject,thisObject.strVisibleField,intActualItem," ",false,thisObject.intUseSharedOccurrence);

         switch (strINPUTFormat)
         {
            case "V":
                 arraystrCOMPAREValue[0] = strDESCRIPT;
                 intCOMPAREValues   = 1;    
                 break; 

            case "CV":
                 arraystrCOMPAREValue[0] = strCODE;  
                 arraystrCOMPAREValue[1] = strDESCRIPT;
                 intCOMPAREValues   = 2;    
                 break;

            default:  
                 arraystrCOMPAREValue[0] = strCODE;
                 intCOMPAREValues        = 1;    
                 break; 
            
         } 
         
         for (i = 0; i < intCOMPAREValues; i++)
         {  
            intCOMPAREValueLength = arraystrCOMPAREValue[i].length; 

            if (strINPUTValueUpper == arraystrCOMPAREValue[i].substr(0,intINPUTValueLength).toUpperCase()) 
            {
               intMatches++;

               if (intMatches == 1)  
               {
                  var strOriginalINPUT = objINPUT.value; 
                  var strNewINPUT      = "";  
                 
                  intFirstFoundSortedIndex = intSortedItem;

                  FP_RQIKP_PRIVATE_SelectItem(thisObject,intSortedItem,true,true); 

                  strNewINPUT    = objINPUT.value; 
                  objINPUT.value = strOriginalINPUT;  

                  FP_RQIKP_PRIVATE_SelectDifferences(objINPUT,strNewINPUT,strNewINPUT.length);
               }
              
               i = 2; /* Terminate loop */   
            } 
         }
      }

      /* Display the matching pop - up */ 

      FP_RQIKP_PRIVATE_BuildPopUp(thisObject,intFirstFoundSortedIndex,"M"); 

      /* Delete the arrays */

//#ifscript
      delete(arraystrCOMPAREValue);
//#else
//#   arraystrCOMPAREValue.length = 0;
//#endif
      /* Turn off the busy light */ 

      VF_System.objVF_UM007.SetBusy(false); 

    } 

    /* Finished */ 

    return;
}


/* --------------------------------------------------------- */
/* FP_RQIKP_PRIVATE_onfocus - Handle focus             */
/* --------------------------------------------------------- */ 

function FP_RQIKP_PRIVATE_onfocus(thisObject,flagShowPopup,intSortedItem)   
{
   var objINPUT     = thisObject.objINPUT;  
   var objTEXTRange = null;
   var strInactiveValue = "" ;
   var strInactiveField = "*NONE" ;
   var intActualItem = 0 ;

   /* if a code table is used check whether the item being clicked on is an Inactive code table entry */

   if (thisObject.flagCodeTableAvailable) 
   {   
      strInactiveField = thisObject.objVF_FP021.strInactiveField; 

      if ((strInactiveField != "*NONE") && (strInactiveField != ""))
      {
         /* Get the value of the field used to control inactive items */
         intActualItem = thisObject.arraySortedItems[intSortedItem]; 

         strInactiveValue = VF_System.FP_Get(thisObject,strInactiveField,intActualItem,"",false,thisObject.intUseSharedOccurrence);
 
         if (strInactiveValue != "")
         { 
            /* This is an inactive entry                    */
            /* If the user has tried to select it from the list, bail out */
            /* If the user has prompted on the field, go ahead and show the list of all available values */
          
            if (!(flagShowPopup)) 
            { 
               return ;
            }  
         }
      } 
   }

   FP_RQIKP_PRIVATE_SelectItem(thisObject,intSortedItem,true,true);   

   if (VF_System.usingExplorer)
   {
      objTEXTRange = thisObject.objINPUT.createTextRange();    
      objTEXTRange.select();
   }
   else
   {
      thisObject.objINPUT.setSelectionRange(0, thisObject.objINPUT.value.length);
   }

   if (flagShowPopup) 
   {
      FP_RQIKP_PRIVATE_BuildPopUp(thisObject,thisObject.intCurrentSortedItem,"M");
   }
   else
   {
      if (thisObject.flagPOPUPDIVVisible)
      {
         thisObject.flagPOPUPDIVVisible = false;
         VF_System.Hide(thisObject.objPOPUPDIV);
      } 
   }    

   objTEXTRange = null; 

   return; 
}
  
function FP_RQIKP_EVENT_HANDLER_onfocus(argobjEvent)   
{
   if (VF_System.flagBusy) return;

//#ifscript
   FP_RQIKP_PRIVATE_onfocus(argobjEvent.srcElement.thisObject,true,argobjEvent.srcElement.thisObject.intCurrentSortedItem); 

   if (!VF_System.usingExplorer) 
   {
      /* Add the onblur again which would have been removed in the mousedown event of the pop up */
      argobjEvent.srcElement.thisObject.objINPUT.addEventListener("blur", FP_RQIKP_EVENT_HANDLER_onblur,false);   
   }
//#else
//# FP_RQIKP_PRIVATE_onfocus(this,true,this.intCurrentSortedItem); 
//#endif
   argobjEvent.cancelBubble = true;

   return;  
}

/* --------------------------------------------------------- */
/* FP_RQIKP_EVENT_HANDLER_onblur - Handle blur               */
/* --------------------------------------------------------- */ 
  
function FP_RQIKP_EVENT_HANDLER_onblur(argobjEvent)   
{
   var objINPUT   = argobjEvent.srcElement;
//#ifscript
   var thisObject = objINPUT.thisObject;
//#else
//# var thisObject : FP_RQIKP_Object = this;
//#endif

   if (VF_System.flagBusy) return;

   argobjEvent.cancelBubble = true;

   FP_RQIKP_PRIVATE_SelectItem(thisObject,thisObject.intCurrentSortedItem,false,true);   

   if (thisObject.flagPOPUPDIVVisible)
   {
      thisObject.flagPOPUPDIVVisible = false;
      VF_System.Hide(thisObject.objPOPUPDIV);
   } 
   
   
   return;  
}


function FP_RQIKP_EVENT_HANDLER_XB_onblur(thisObject)   
{
   FP_RQIKP_PRIVATE_SelectItem(thisObject,thisObject.intCurrentSortedItem,false,true);   

   if (thisObject.flagPOPUPDIVVisible)
   {
      thisObject.flagPOPUPDIVVisible = false;
      VF_System.Hide(thisObject.objPOPUPDIV);
   } 
}

//#IFNET
//# } 
//#endif 
