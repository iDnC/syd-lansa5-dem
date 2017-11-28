/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R L I S T  ---------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------------  Create and manage Lists  --------------------  */
/* --------------------------------------------------------------------- */

//#ifNET
//# class FP_RCLIP_PRIVATE_ItemNode
//# {
//#   var arrayCells = new Array();
//# }
//#endif 

//#IFNET
//# class FP_RCLIP_Object extends FP_BASE_Object  
//# { 
//#    var arrayAllItems : Array = null; 
//#    var arrayCells : Array = null;
//#    var strAction : String;
//#    var strReplaceCR : String;
//#    var strReplaceLF : String;
//#    var strWhenToCopy : String;
//#    var objPasteButton : Object = null;
//#    var objCopyButton : Object = null;
//#    var intItemCount : int = 0; 
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RCLIP"] = FP_RCLIP_PUBLIC_Create;
//#endif 


/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --  C O N S T R U C T O R,  D E S T R U C T O R  &  V I S U A L I Z E R --- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RCLIP_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RCLIP_Object = this;  
//#endif 


   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */
   
   /* Create store to hold every single List items */

   thisObject.arrayAllItems = new Array();

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RCLIP_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RCLIP_PUBLIC_Visualize;   
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
function FP_RCLIP_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RCLIP_Object = this;  
//#endif 

   /* Destroy any details and free any resources */ 
   
   thisObject.arrayAllItems = null;
 
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RCLIP_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RCLIP_Object = this;  
//#endif 

   /* Declarations */ 

   var thisDocument = thisObject.objDocument;

   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer (thisObject,"NONE",null,null);

   thisObject.strAction      = VF_System.FP_Get(thisObject,"uAction",1,"COPY", true, thisObject.intOccurrence);
   thisObject.strReplaceCR   = VF_System.FP_Get(thisObject,"uReplaceCR",1,"\\r", false, thisObject.intOccurrence);
   thisObject.strReplaceLF   = VF_System.FP_Get(thisObject,"uReplaceLF",1,"\\n", false, thisObject.intOccurrence);
	thisObject.strWhenToCopy  = VF_System.FP_Get(thisObject,"uWhenToCopy",1,"AfterSignal", true, thisObject.intOccurrence);

	/* Create the buttons only if they are to be shown */
	if ( VF_System.FP_GetBool(thisObject, "uVisible" , 1,"TRUE",thisObject.intOccurrence) )
	{
		switch ( thisObject.strAction )
		{
			case "PASTE":

			thisObject.objPasteButton = FP_RCLIP_PRIVATE_CreatePasteButton(thisObject);
			thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objPasteButton);
			 
			break;

			case "COPY":
			thisObject.objCopyButton = FP_RCLIP_PRIVATE_CreateCopyButton(thisObject);
			thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objCopyButton); 

			break;

			case "COPYPASTE":
      
			thisObject.objPasteButton = FP_RCLIP_PRIVATE_CreatePasteButton(thisObject);
			thisObject.objCopyButton  = FP_RCLIP_PRIVATE_CreateCopyButton(thisObject);
			thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objPasteButton); 
			thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objCopyButton); 
			break;
		}
   }


   if ( thisObject.strWhenToCopy != "AFTERSIGNAL") FP_RCLIP_PRIVATE_PrepareClipboardData(thisObject);

   return;

}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  P R I V A T E   M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* ------------------------------------------------------------------ */
/* FP_RCLIP_PRIVATE_PrepareClipboardData - Build Array of clipboard data */
/* ------------------------------------------------------------------- */

//#ifscript
function FP_RCLIP_PRIVATE_PrepareClipboardData(thisObject)
//#else
//# function FP_RCLIP_PRIVATE_PrepareClipboardData(thisObject:FP_RCLIP_Object)
//#endif 
{
   var arrayAllItems   = new Array();
   var intItem         = 0; 
   var intCell       = 0;
   var intCellCount  = 0;
   var objNode         = null;

   /* Get Item Count (number of rows) and Column Count (number of columns) */ 
   var intItemCount   = thisObject.intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence); 

   /* Traverse all Items (rows) building the object tree (not tree as the TreeView but as a tree structure)  */
   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      /* Create a new Item */
      
      objNode = new FP_RCLIP_PRIVATE_ItemNode();

      /* Add Item Node to the array of all the items */
      arrayAllItems[intItem] = objNode;
      
      intCellCount = VF_System.FP_GetNum(thisObject,"uItem.CellCount", intItem ,true,0,thisObject.intOccurrence);

      /* Traverse the columns to access the Cell properties */

      for (intCell = 1; intCell <= intCellCount; intCell++ )
      {
         objNode.arrayCells[intCell] = FP_RCLIP_PRIVATE_CreateCell(thisObject, intCell, intItem);
      }
   }

	thisObject.arrayAllItems = arrayAllItems;

	if ( (intItemCount > 0 ) && ( thisObject.strWhenToCopy == "IMMEDIATE" ) ) FP_RCLIP_PRIVATE_CopyToClipboard(thisObject);

   return; 
}

/* --------------------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_CopyToClipboard - Copy to clipboard     */
/* --------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RCLIP_PRIVATE_CopyToClipboard( thisObject )
//#else
//# function FP_RCLIP_PRIVATE_CopyToClipboard( thisObject:FP_RCLIP_Object )
//#endif 
{
   var arrayData      = thisObject.arrayAllItems;
   var intItemCount   = thisObject.intItemCount;
   var strReplaceCR   = thisObject.strReplaceCR;
   var strReplaceLF   = thisObject.strReplaceLF;
   var intItem        = 0;
   var strData        = "";

	for (intItem = 1; intItem <= intItemCount ; intItem++)
	{
		strData += VF_System.FormatTABItemCells(arrayData[intItem].arrayCells, strReplaceCR, strReplaceLF, "\x0D\x0A");
	}

   /*VF_System.objMainWindow.clipboardData.clearData("Text");*/
   if (VF_System.usingExplorer)
   {
      VF_System.objMainWindow.clipboardData.setData("Text", strData);
   }

}

       
/* --------------------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_ItemNode - Create a Node object                      */
/* --------------------------------------------------------------------- */ 

//#ifscript
  
function FP_RCLIP_PRIVATE_ItemNode()
{
   this.arrayCells = new Array();
}

//#endif 

/* --------------------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_CreateCell - Create a Cell object                     */
/* --------------------------------------------------------------------- */ 

//#ifscript  
function FP_RCLIP_PRIVATE_CreateCell(thisObject, argintCell, argintItem)
//#else
//# function FP_RCLIP_PRIVATE_CreateCell(thisObject:FP_RCLIP_Object, argintCell:int, argintItem:int)
//#endif 
{
   var objCell = null;  
   var strCell = "Column" + argintCell.toString() + ".Cell";

	var strColType	= VF_System.FP_Get(thisObject, strCell + ".TYPE",argintItem, "AUTO", true, thisObject.intOccurrence);

   objCell = new Object();

	switch ( strColType )
	{
		case "AUTO":

			var objCellValue = VF_System.FP_GetVariant(thisObject, strCell + ".Value", argintItem, thisObject.intOccurrence);

			if ( !objCellValue.flagFound ) objCellValue.value = "";
			else if ( objCellValue.strType == "A" ) objCellValue.value = objCellValue.strAlphaValue;
			else 
			{  
				objCellValue.value = VF_System.MakeNumericString(objCellValue.floatNumericValue, VF_System.FP_GetNum(thisObject, "Column" + argintCell.toString() + ".uPrecision",1,true, 0, thisObject.intOccurrence), true);
			}

			objCell.Value = objCellValue.value;
			break;

		case "N":

			objCell.Value = VF_System.FP_GetNum(thisObject, strCell + ".Value", argintItem, false, 0, thisObject.intOccurrence ).toString();
			break;

		case "A":

			objCell.Value = VF_System.FP_Get(thisObject, strCell + ".Value", argintItem, " ", false, thisObject.intOccurrence);
			break;
	}

   return(objCell);
}

/* ------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_CreateCopyButton - Create the Copy button element */
/* ------------------------------------------------------- */

//#ifscript  
function FP_RCLIP_PRIVATE_CreateCopyButton( thisObject )
//#else
//# function FP_RCLIP_PRIVATE_CreateCopyButton( thisObject:FP_RCLIP_Object )
//#endif 
{
   var thisDocument = thisObject.objDocument;

   var objButton            = thisDocument.createElement("button");
       objButton.innerText  = VF_System.FP_Get(thisObject,"uButtonCaption",1,VF_System.MString(112), false,thisObject.intOccurrence);
       objButton.style.width = "100%";
       objButton.setAttribute("type","button");
       objButton.thisObject = thisObject;
       objButton.attachEvent("onclick", FP_RCLIP_EVENT_HANDLER_OnCopyClick);

   return(objButton);
}

/* -------------------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_CreatePasteButton - Create the Paste button element */
/* -------------------------------------------------------------------- */

//#ifscript  
function FP_RCLIP_PRIVATE_CreatePasteButton( thisObject )
//#else
//# function FP_RCLIP_PRIVATE_CreatePasteButton( thisObject:FP_RCLIP_Object )
//#endif 
{
   var thisDocument = thisObject.objDocument;

   var objButton            = thisDocument.createElement("button");
       objButton.innerText  = VF_System.FP_Get(thisObject,"uButtonCaption",1,VF_System.MString(113), false,thisObject.intOccurrence);
       objButton.style.width = "100%";
       objButton.setAttribute("type","button");
       objButton.thisObject = thisObject;
       objButton.attachEvent("onclick", FP_RCLIP_EVENT_HANDLER_OnPasteClick);

   return(objButton);
}

/* -------------------------------------------------------------------- */
/* FP_RCLIP_PRIVATE_SetCellValues - Set properties of data to PASTE   */
/* -------------------------------------------------------------------- */

//#ifscript
function FP_RCLIP_PRIVATE_SetCellValues( thisObject, argarrayCells, argintItem )
//#else
//# function FP_RCLIP_PRIVATE_SetCellValues( thisObject:FP_RCLIP_Object, argarrayCells:Array, argintItem:int )
//#endif 
{
   var arrayCells     = argarrayCells;
   var intCellsLength = arrayCells.length;
   var intItem        = argintItem;
   var intCell        = 0;
   var objCell        = null;
   var strCell        = "";
   var strToNumber    = 0;
   var floatCellValue = 0;
   var strCellValue; 

   var strThousandSeparator = VF_System.FP_Get(thisObject,"uThousandSeparator",1,VF_System.strThousandSeparator, false,thisObject.intOccurrence);
   var strDecimalSeparator  = VF_System.FP_Get(thisObject,"uDecimalSeparator",1,VF_System.strDecimalSeparator, false,thisObject.intOccurrence);

   for (intCell = 0; intCell < intCellsLength; intCell++)
   {
      strCell      = "Column" + (intCell + 1).toString() + ".Cell.Value";
      strCellValue = arrayCells[intCell];

      VF_System.FP_Set(thisObject, strCell, intItem, strCellValue, false, thisObject.intOccurrence);

      floatCellValue = VF_System.ParseFloat(strCellValue, strThousandSeparator /* strDecimalSeparator */ );

      if (floatCellValue != null ) VF_System.FP_SetNum(thisObject, strCell, intItem, floatCellValue, VF_System.FP_GetNum(thisObject, "Column" + (intCell + 1).toString() + ".uPrecision",1,true, 0,thisObject.intOccurrence), thisObject.intOccurrence);
   }
   
   VF_System.FP_SetNum(thisObject, "uItem.CellCount", intItem, intCellsLength, true, thisObject.intOccurrence);
}
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------  E V E N T   H A N D L E R S  ---------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* FP_RCLIP_EVENT_HANDLER_OnCopyClick - Handle COPY to clipboard        */
/* -------------------------------------------------------------------- */

function FP_RCLIP_EVENT_HANDLER_OnCopyClick(argobjEvent)
{
//#ifscript
      var thisObject = argobjEvent.srcElement.thisObject;
//#else
//#   var thisObject : FP_RCLIP_Object = this;
//#endif 

	if ( thisObject.strWhenToCopy == "WHENCLICKED") 
	{
		thisObject.strWhenToCopy = "IMMEDIATE";
		FP_RCLIP_PRIVATE_PrepareClipboardData( thisObject );
		thisObject.strWhenToCopy = "WHENCLICKED";
	}
	
	else 
	
	{
	   VF_System.FP_Set(thisObject,"uWhenToCopy", 1 ,"IMMEDIATE",false,thisObject.intOccurrence);	
		
		VF_SY506_PRIVATE_HandleEvent(thisObject,"COPY");
	}
}

/* -------------------------------------------------------------------- */
/* FP_RCLIP_EVENT_HANDLER_OnPasteClick - Handle PASTE from clipboard     */
/* -------------------------------------------------------------------- */

function FP_RCLIP_EVENT_HANDLER_OnPasteClick(argobjEvent)
{
//#ifscript
      var thisObject = argobjEvent.srcElement.thisObject;
//#else
//#   var thisObject : FP_RCLIP_Object = this;
//#endif 

   var intItem    = 0;
   var strData = null;
   if (VF_System.usingExplorer) strData = VF_System.objMainWindow.clipboardData.getData("Text");
   else window.alert("Not supported in non IE browsers");
   

   if ( strData == null ) 
   {
      window.alert("Current Clipboard Data is not Text");  
      return;
   }

   var arraySplittedData = new Array();
       arraySplittedData = strData.split("\x0D\x0A");

	/* the last element of the array built by the split method is a CRLF which shouldn't be processed. Subtract 1 from */
	/* from the array's length so that the CRLF is ignored */

	var intItemCount = arraySplittedData.length - 1;
	
   var arrayCells = new Array();

	for (intItem = 0; intItem < intItemCount; intItem++)
	{
      arrayCells = VF_System.FormatTABString(arraySplittedData[intItem], thisObject.strReplaceCR, thisObject.strReplaceLF);

		FP_RCLIP_PRIVATE_SetCellValues(thisObject, arrayCells, intItem + 1);
	}         

    VF_System.FP_SetNum(thisObject, "uItemCount", 1, intItemCount, true, thisObject.intOccurrence);  

    VF_SY506_PRIVATE_HandleEvent(thisObject,"PASTE");
}

//#IFNET
//# }  
//#endif 
