/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R I M A G ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* -------------  Create and manage a Clickable Image  ----------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#IFNET
//# class FP_RIMAG_Object extends FP_BASE_Object  
//# { 
//#    var arrayobjItems : Array = null; 
//#endif 


/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RIMAG"] = FP_RIMAG_PUBLIC_Create;
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
function FP_RIMAG_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RIMAG_Object = this;  
//#endif 


   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.arrayobjItems = new Array();  
 
   thisObject.intthisObjectID	= VF_System.GetThisObjectID(thisObject);

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RIMAG_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RIMAG_PUBLIC_Visualize; 
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
function FP_RIMAG_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RIMAG_Object = this;  
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
function FP_RIMAG_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RIMAG_Object = this;  
//#endif 

   /* Declarations */ 
  
   var thisDocument					= thisObject.objDocument; 
   var struImageCaption				= ""; 
   var struImageCaptionPosition		= VF_System.FP_Get(thisObject,"uImageCaptionPosition",1,"LEFT",true,thisObject.intOccurrence);
   var intItem						= 0; 
   var intItemCount					= VF_System.FP_GetNum(thisObject,"uItemCount",1,true,1,thisObject.intOccurrence);   
   var flagVertical					= (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   

   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

   /* Build the HTML for this object as a string */
   
   var strHTML = "";  
   
   /* Start building a table to contan the items */
   
   strHTML += "<TABLE border=0><TR><TD>"; 
   
   /* For each Item build the HTML for the Item */ 

   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      thisObject.arrayobjItems[intItem] = new Object();
      
      /* Insert the standard set of item properties into this HTML element */

      VF_SY506_PRIVATE_InsertItemDetails(thisObject,thisObject.arrayobjItems[intItem],intItem, thisObject.intOccurrence,null,false);  

      /* Start a new row or cell if required */

      if (((intItem > 1) && (struImageCaptionPosition == "LEFT"))
		|| ((intItem > 1) && (struImageCaptionPosition == "RIGHT"))
		|| ((intItem > 1) && !flagVertical))
	  {
		if (flagVertical) strHTML += "<TR>";
		strHTML += "<TD>";
	  }
	  
	  /* Add the image caption first if it is to be left or on top */
	  
	  if ((struImageCaptionPosition == "LEFT") || (struImageCaptionPosition == "TOP"))
	  {
		strHTML += FP_RIMAG_PRIVATE_insertCaption(thisObject, intItem, struImageCaptionPosition);
	  }
	  else /* add the image */
	  {
		strHTML += FP_RIMAG_PRIVATE_insertImage(thisObject, intItem, struImageCaptionPosition);
	  }
      
      /* Close the cell and start a new one if required */

      if ((struImageCaptionPosition == "LEFT") || (struImageCaptionPosition == "RIGHT"))
	  {
		strHTML += "</TD>";
		strHTML += "<TD>";
	  }
	  
	  /* Add the image next if image caption to be left or on top */
	  
	  if ((struImageCaptionPosition == "LEFT") || (struImageCaptionPosition == "TOP"))
	  {
		strHTML += FP_RIMAG_PRIVATE_insertImage(thisObject, intItem, struImageCaptionPosition);		
 	  }
	  else /* add the image caption */
	  {
		strHTML += FP_RIMAG_PRIVATE_insertCaption(thisObject, intItem, struImageCaptionPosition);
	  }
      
      /* End the row or cell if required */

      if ((struImageCaptionPosition == "LEFT")
		|| (struImageCaptionPosition == "RIGHT") 
		|| (!flagVertical))
	  {
		strHTML += "</TD>";
		if (flagVertical) strHTML += "</TR>";
	  }
	  
	}
	
	/* Close the cell and row if they haven't been already closed */
	
	if (flagVertical) 
	  {
	  if ((struImageCaptionPosition == "TOP")
		|| (struImageCaptionPosition == "BOTTOM"))
		{
		  strHTML += "</TD>";
		  strHTML += "</TR>";
		}
	  }
	  else
	  {
	  strHTML += "</TR>";
	  }
	
	/* Close the table */
	
	strHTML += "</TABLE>";
	
    /* Insert the HTML for this object into the container for this FP_Rxxxx object */

    thisObject.objWorkContainer.innerHTML = strHTML;
      
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
/* FP_RIMAG_PRIVATE_InsertCaption - Adds the image caption to the HTML   */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RIMAG_PRIVATE_insertCaption(thisObject, argintItem, argstruImageCaptionPosition) 
//#else
//# function FP_RIMAG_PRIVATE_insertCaption(thisObject:FP_RIMAG_Object, argintItem:int, argstruImageCaptionPosition:String) 
//#endif 
{
	var intItem						= argintItem;
	var strImageHTML				= "";
    var struImageCaptionPosition	= argstruImageCaptionPosition; 
    var struImageCaption			= VF_System.FP_Get(thisObject,"uImageCaption",intItem,"",false,thisObject.intOccurrence); 
    var struImageHint				= VF_System.FP_Get(thisObject,"UImageHint",intItem,"",false,thisObject.intOccurrence); 
	var boolusignalClick			= VF_System.FP_GetBool(thisObject,"UsignalClick",intItem,"FALSE",thisObject.intOccurrence); 

	if (struImageCaption != "")
	{
	  strImageHTML += "<div";
	  strImageHTML += " title='" + struImageHint + "'";
	  
	  /* Handle the alignment of the caption */
	  switch (struImageCaptionPosition)
	  {
		case "TOP":
	      strImageHTML += " style='PADDING: 5px 5px 1px 5px' align='center'";
        break;
		case "RIGHT":
	      strImageHTML += " style='PADDING: 5px 5px 5px 1px' align='left'";
        break;
		case "BOTTOM":
	      strImageHTML += " style='PADDING: 1px 5px 5px 5px' align='center'";
        break;
		case "LEFT":
	      strImageHTML += " style='PADDING: 5px 1px 5px 5px' align='right'";
        break;
	  }
	  
	  /* Make the image clickable */
	  if (boolusignalClick)
	  {
//#ifscript
	    strImageHTML += " onClick='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() +  ");'";
	    strImageHTML += " onMouseOver='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_002(this);'";
	    strImageHTML += " onMouseOut='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_003(this);'";
//#else
//#     strImageHTML += " onClick='window.external.NET_RIMAG_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() +  ");'";
//#     strImageHTML += " onMouseOver='window.external.NET_RIMAG_EVENT_HANDLER_002(this);'";
//#     strImageHTML += " onMouseOut='window.external.NET_RIMAG_EVENT_HANDLER_003(this);'";
//#endif 	  	  
	  	  
	  }
	  strImageHTML += ">" + struImageCaption;
	  strImageHTML += "</div>";
	}
	
	return(strImageHTML);
}

/* --------------------------------------------------------------------- */
/* FP_RIMAG_PRIVATE_InsertImage - Adds the image to the HTML             */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RIMAG_PRIVATE_insertImage(thisObject, argintItem, argstruImageCaptionPosition) 
//#else
//# function FP_RIMAG_PRIVATE_insertImage(thisObject:FP_RIMAG_Object, argintItem:int, argstruImageCaptionPosition:String) 
//#endif 
{
	var intItem						= argintItem;
	var strImageHTML				= "";
    var struImageCaptionPosition	= argstruImageCaptionPosition; 
    var struImageSourceURL			= VF_System.FP_Get(thisObject,"uImageSourceURL",intItem,"",false,thisObject.intOccurrence); 
    var struImageHint				= VF_System.FP_Get(thisObject,"UImageHint",intItem,"",false,thisObject.intOccurrence); 
	var boolusignalClick			= VF_System.FP_GetBool(thisObject,"UsignalClick",intItem,"FALSE",thisObject.intOccurrence); 

	/* Align to the center */
	strImageHTML += "<div align='center'";
	
	/* Handle the alignment of the image */
	switch (struImageCaptionPosition)
	{
	  case "TOP":
	    strImageHTML += " style='PADDING: 1px 5px 5px 5px'";
      break;
	  case "RIGHT":
	    strImageHTML += " style='PADDING: 5px 1px 5px 5px'";
      break;
	  case "BOTTOM":
	    strImageHTML += " style='PADDING: 5px 5px 1px 5px'";
      break;
	  case "LEFT":
	    strImageHTML += " style='PADDING: 5px 5px 5px 1px'";
      break;
	}
	  
	/* Close div */
	strImageHTML += ">";
	
	strImageHTML += "<IMG SRC='" + struImageSourceURL + "'";
	strImageHTML += " title='" + struImageHint + "'";
	  
	/* Make the image clickable*/
	
	if (boolusignalClick)
	{
//#ifscript  	
	  strImageHTML += " onClick='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() +  ");'";
	  strImageHTML += " onMouseOver='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_002(this);'";
	  strImageHTML += " onMouseOut='parent.VF_System.objMainWindow.FP_RIMAG_EVENT_HANDLER_003(this);'";
//#else
//#   strImageHTML += " onClick='window.external.NET_RIMAG_EVENT_HANDLER_001(" + thisObject.intthisObjectID.toString() + "," + intItem.toString() +  ");'";
//#   strImageHTML += " onMouseOver='window.external.NET_RIMAG_EVENT_HANDLER_002(this);'";
//#   strImageHTML += " onMouseOut='window.external.NET_RIMAG_EVENT_HANDLER_003(this);'";
//#endif 	  
	}
	strImageHTML += "></div>";
	
	return(strImageHTML);
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
function FP_RIMAG_EVENT_HANDLER_001( argintthisObjectID, argintthisItem )   
//#else
//# static function FP_RIMAG_EVENT_HANDLER_001( argintthisObjectID:int, argintthisItem:int )   
//#endif 
{
   if  ( !(VF_System.flagBusy) )
   {
//#ifscript   
      var thisObject		         = VF_System.ConvertThisObjectID(argintthisObjectID);
//#else
//#   var thisObject:FP_RIMAG_Object = VF_System.ConvertThisObjectID(argintthisObjectID);
//#endif       
            
      var thisobjItem		 = thisObject.arrayobjItems[argintthisItem];
      var struImageTargetURL = VF_System.FP_Get(thisObject,"uImageTargetURL",argintthisItem,"",false,thisObject.intOccurrence);
      var struWindowFeatures = VF_System.FP_Get(thisObject,"uWindowFeatures",argintthisItem,"",false,thisObject.intOccurrence);

      VF_SY506_PRIVATE_SelectItem(thisobjItem,thisObject);  
      
      /* If there is a target URL open it in a new window */

      if (struImageTargetURL != "")
      {
         VF_System.objMainWindow.open(struImageTargetURL,"_blank",struWindowFeatures); 
      }
      else /* Signal a click event if required */
      {
		 VF_SY506_PRIVATE_HandleEvent(thisObject,"CLICK");  
      } 
   }

   return; 
}

/* ------------------------------------------------------------ */
/* FP_RLINK_EVENT_HANDLER_002 - Handle a mouseover on an Image  */
/* ------------------------------------------------------------ */ 

//#ifscript  
function FP_RIMAG_EVENT_HANDLER_002( argthis )   
//#else
//# static function FP_RIMAG_EVENT_HANDLER_002( argthis : Object )   
//#endif 
{
	if  ( !(VF_System.flagBusy) )
	{
	    /* Save the original cursor */
	  
	    argthis.strSaveCursor = argthis.style.cursor;   
	  
	    /* Change the cursor to the hand */
	  
        argthis.style.cursor = "hand";
	}
   return; 
}

/* ------------------------------------------------------------ */
/* FP_RLINK_EVENT_HANDLER_003 - Handle a mouseout on  an Image  */
/* ------------------------------------------------------------ */ 

//#ifscript  
function FP_RIMAG_EVENT_HANDLER_003( argthis )   
//#else
//# static function FP_RIMAG_EVENT_HANDLER_003( argthis:Object )   
//#endif 
{

   if  ( !(VF_System.flagBusy) && (argthis.strSaveCursor != null) )
   {
	 /* Restore cursor */
	 
	 argthis.style.cursor = argthis.strSaveCursor;
   }
   return; 
}


//#IFNET
//# } 
//#endif 
