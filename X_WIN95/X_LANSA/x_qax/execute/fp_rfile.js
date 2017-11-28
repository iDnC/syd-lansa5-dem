/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R L I S T  ---------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------------  Create and manage Lists  --------------------  */
/* --------------------------------------------------------------------- */

//#ifnet  
//# class FP_RFILE_PRIVATE_ItemNode
//# {
//#    var arrayCells : Array = null; 
//# }
//#endif 


//#IFNET
//# class FP_RFILE_Object extends FP_BASE_Object  
//# { 
//#    var arrayAllItems : Array = null; 
//#    var strAction : String; 
//#    var strLineTerminator : String; 
//#    var strFileFormat : String; 
//#    var strTargetFile : String; 
//#    var strReplaceCR : String; 
//#    var strReplaceLF : String; 
//#    var strSourceFile : String; 
//#    var strWhenToDownload : String; 
//#    var objDownloadBox : Object; 
//#    var objUploadBox : Object; 
//#    var intItemCount : int; 
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RFILE"] = FP_RFILE_PUBLIC_Create;
//#endif 

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --  C O N S T R U C T O R,  D E S T R U C T O R  &  V I S U A L I Z E R --- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RFILE_Object = this;  
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
   thisObject.Destroy   = FP_RFILE_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RFILE_PUBLIC_Visualize;   
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
function FP_RFILE_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RFILE_Object = this;  
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
function FP_RFILE_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RFILE_Object = this;  
//#endif 

   /* Set up the container */
   VF_SY506_PRIVATE_SetupContainer (thisObject,"NONE",null,null);

   thisObject.strAction		        = VF_System.FP_Get(thisObject,"uAction",1,"DownloadData", true,thisObject.intOccurrence);
   thisObject.strLineTerminator     = FP_RFILE_PRIVATE_GetTerminator(thisObject);
   thisObject.strFileFormat	 	    = VF_System.FP_Get(thisObject,"uFileFormat",1,"CSV", false,thisObject.intOccurrence);
   thisObject.strTargetFile		    = VF_System.FP_Get(thisObject,"uTargetFile",1,"", false,thisObject.intOccurrence);
   thisObject.strReplaceCR			= VF_System.FP_Get(thisObject,"uReplaceCR",1,"\\r", false,thisObject.intOccurrence);
   thisObject.strReplaceLF			= VF_System.FP_Get(thisObject,"uReplaceLF",1,"\\n", false,thisObject.intOccurrence);
	thisObject.strSourceFile		= "";

	/* Create the buttons only if they are to be shown */
	if ( VF_System.FP_GetBool(thisObject, "uVisible" , 1,"TRUE",thisObject.intOccurrence) )
	{
		switch ( thisObject.strAction )
		{
			case "DOWNLOADDATA":

				thisObject.strWhenToDownload  = VF_System.FP_Get(thisObject,"uWhenToDownload",1,"AfterSignal", true,thisObject.intOccurrence);
	
				thisObject.objDownloadBox = FP_RFILE_PRIVATE_CreateDownloadBox(thisObject);
				thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objDownloadBox); 
			
				if ( thisObject.strWhenToDownload != "AFTERSIGNAL") FP_RFILE_PRIVATE_PrepareFileData(thisObject);

				break;

			case "UPLOADDATA":

				thisObject.objUploadBox			 = FP_RFILE_PRIVATE_CreateUploadBox(thisObject);
				thisObject.objWorkContainer.insertAdjacentElement("afterBegin", thisObject.objUploadBox); 

				break;
		}
   }

   return;
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  P R I V A T E   M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* ------------------------------------------------------------------ */
/* FP_RFILE_PRIVATE_PrepareFileData - Build Array of clipboard data */
/* ------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PRIVATE_PrepareFileData(thisObject)
//#else
//# function FP_RFILE_PRIVATE_PrepareFileData(thisObject:FP_RFILE_Object)
//#endif 
{
   var arrayAllItems = new Array();
   var intItem       = 0; 
   var intCell       = 0;
   var intCellCount  = 0;
   var objNode       = null;

   /* Get Item Count (number of rows) and Column Count (number of columns) */ 
   var intItemCount   = thisObject.intItemCount = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence); 

   /* Traverse all Items (rows) building the object tree (not tree as the TreeView but as a tree structure)  */
   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      /* Create a new Item */
      objNode = new FP_RFILE_PRIVATE_ItemNode();

      /* Add Item Node to the array of all the items */
      arrayAllItems[intItem] = objNode;

      intCellCount = VF_System.FP_GetNum(thisObject,"uItem.CellCount", intItem ,true,0,thisObject.intOccurrence);

      /* Traverse the columns to access the Cell properties */

      for (intCell = 1; intCell <= intCellCount; intCell++ )
      {
         objNode.arrayCells[intCell] = FP_RFILE_PRIVATE_CreateCell(thisObject, intCell, intItem);
      }
   }

	thisObject.arrayAllItems = arrayAllItems;

	if ( (intItemCount > 0 ) && ( thisObject.strWhenToDownload == "IMMEDIATE" ) ) FP_RFILE_PRIVATE_WriteFile( thisObject );

   return; 
}

/* --------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_WriteFile - Read incoming data and write to file     */
/* --------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RFILE_PRIVATE_WriteFile( thisObject )
//#else
//# function FP_RFILE_PRIVATE_WriteFile(thisObject:FP_RFILE_Object)
//#endif 
{
	var strFilePath		= thisObject.strTargetFile;

	if ( strFilePath == "")
	{	
		VF_System.SendClientMessage("Fully qualified file name not provided", true, "R");
		return;
	}

   var strReplaceCR		 = thisObject.strReplaceCR;
   var strReplaceLF		 = thisObject.strReplaceLF;
   var arrayData			 = thisObject.arrayAllItems;
   var intItemCount		 = thisObject.intItemCount;
   var strLineTerminator = thisObject.strLineTerminator;
   var strFileFormat		 = thisObject.strFileFormat;
   var intItem				 = 0; 
   var strData				 = "";
	var intCellIndex		 = 0;

	var objFileSystem = VF_System.GetFileSystemObject();

	if ( VF_System.FP_GetBool(thisObject,"uAppendData",1,"TRUE",thisObject.intOccurrence) ) var intIOMode = 8; /* Open file for appending */
	else																				var intIOMode = 2; /* Open file for writing */

	if (objFileSystem.FileExists(strFilePath)) var objFile = objFileSystem.OpenTextFile( strFilePath, intIOMode, false );
	else 													 var objFile = objFileSystem.CreateTextFile( strFilePath );

	switch ( strFileFormat )
	{
		case "TAB":

			for (intItem = 1; intItem <= intItemCount ; intItem++)
			{
				strData += VF_System.FormatTABItemCells(arrayData[intItem].arrayCells, strReplaceCR, strReplaceLF, strLineTerminator);
			}

			break;

		case "CSV":

			for (intItem = 1; intItem <= intItemCount ; intItem++)
			{
				strData += VF_System.FormatCSVItemCells(arrayData[intItem].arrayCells, strReplaceCR, strReplaceLF, strLineTerminator);
			}

			break;

		case "TEXT":

			for (intItem = 1; intItem <= intItemCount ; intItem++)
			{
				strData += VF_System.FormatTEXTItemCells(arrayData[intItem].arrayCells, strReplaceCR, strReplaceLF, strLineTerminator);
			}

			break;
	}

	objFile.Write(strData);
	objFile.Close();

}

/* ------------------------------------------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_GetTerminator - Get the line terminator property and convert it to the real characters */
/* ------------------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RFILE_PRIVATE_GetTerminator(thisObject)
//#else
//# function FP_RFILE_PRIVATE_GetTerminator(thisObject:FP_RFILE_Object)
//#endif 
{

	switch ( VF_System.FP_Get(thisObject,"uLineTerminator",1,"CRLF", true, thisObject.intOccurrence) )
	{
		case "CRLF": return("\x0D\x0A");

		case "CR":	 return("\x0D");

		case "LF":	 return("\x0A");

		default:		 return("");
	}
}

/* --------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_ItemNode - Create a Node object                      */
/* --------------------------------------------------------------------- */ 

//#ifscript  
function FP_RFILE_PRIVATE_ItemNode()
{
   this.arrayCells = new Array();
}
//#endif 

/* --------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_CreateCell - Create a Cell object                     */
/* --------------------------------------------------------------------- */ 

//#ifscript  
function FP_RFILE_PRIVATE_CreateCell(thisObject, argintCell, argintItem)
//#else
//# function FP_RFILE_PRIVATE_CreateCell(thisObject:FP_RFILE_Object, argintCell:int, argintItem:int)
//#endif 
{
   var strCell    = "Column" + argintCell.toString() + ".Cell";
	var strColType	= VF_System.FP_Get(thisObject, strCell + ".TYPE",argintItem, "AUTO", true, thisObject.intOccurrence);
   var objCell    = new Object();

	objCell.Type = strColType;

	switch ( strColType )
	{
		case "AUTO":

			var objCellValue = VF_System.FP_GetVariant(thisObject, strCell + ".Value", argintItem,thisObject.intOccurrence);

			if ( !objCellValue.flagFound ) objCellValue.value = "";
			else if ( objCellValue.strType == "A" ) objCellValue.value = objCellValue.strAlphaValue;
			else 
			{  
				objCellValue.value = VF_System.MakeNumericString(objCellValue.floatNumericValue, VF_System.FP_GetNum(thisObject, "Column" + argintCell.toString() + ".uPrecision",1,true, 0, thisObject.intOccurrence), true);
			}
			objCell.Type = objCellValue.strType;
			objCell.Value = objCellValue.value;
			break;

		case "N": /* numeric column */

			objCell.Value = VF_System.FP_GetNum(thisObject, strCell + ".Value", argintItem, false, 0, thisObject.intOccurrence).toString();
			break;

		case "A": /* alpha column */

			objCell.Value = VF_System.FP_Get(thisObject, strCell + ".Value", argintItem, " ", false,thisObject.intOccurrence);
			break;
	}

   return(objCell);
}

/* --------------------------------------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_CreateDownloadBox - Create a group box containing an input target file input field */
/* --------------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PRIVATE_CreateDownloadBox( thisObject )
//#else
//# function FP_RFILE_PRIVATE_CreateDownloadBox( thisObject : FP_RFILE_Object )
//#endif 
{
   var thisDocument = thisObject.objDocument;
   var objSpanContainer = null;
   var objInputField = null; 
   var objButton = null;  

   var objGroupBox  = thisDocument.createElement("fieldset");
		 objGroupBox.style.padding = "8px";
		 objGroupBox.unselectable = "on";

	var strGroupCaption = VF_System.FP_Get(thisObject,"uGroupCaption",1,"", false,thisObject.intOccurrence);

	if ( strGroupCaption != "" )
	{
		var objGroupCaption = thisDocument.createElement("legend");
			 objGroupCaption.innerText = strGroupCaption;
			 objGroupBox.appendChild(objGroupCaption);
	}

	objSpanContainer				= thisDocument.createElement("span");

	objInputField				 = thisDocument.createElement("input");
	objInputField.size		 = 15;
	objInputField.style.marginLeft = "5px";
	objInputField.thisObject = thisObject;
   objInputField.attachEvent("onchange", FP_RFILE_EVENT_HANDLER_FilePathOnChange);

	objSpanContainer.appendChild(objInputField);
   
	if ( VF_System.FP_GetBool(thisObject,"uDownloadButton",1,"TRUE",thisObject.intOccurrence) )
	{
		objButton						= thisDocument.createElement("button");
		objButton.innerText			= VF_System.FP_Get(thisObject,"uDownloadBtnCaption",1, VF_System.MString(114), false,thisObject.intOccurrence);
		objButton.style.marginLeft = "5px";
      objButton.setAttribute("type","button");
		objButton.thisObject			= thisObject;
		objButton.attachEvent("onclick", FP_RFILE_EVENT_HANDLER_OnDownloadClick);

		objSpanContainer.appendChild(objButton);
	}

	objGroupBox.appendChild(objSpanContainer);

   return(objGroupBox);
}

/* ----------------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_CreateUploadBox - Create the Group box with the Upload field */
/* ----------------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PRIVATE_CreateUploadBox( thisObject )
//#else
//# function FP_RFILE_PRIVATE_CreateUploadBox( thisObject : FP_RFILE_Object )
//#endif 
{
   var thisDocument = thisObject.objDocument;
   var objGroupBox  = thisDocument.createElement("fieldset");
	var strGroupCaption = VF_System.FP_Get(thisObject,"uGroupCaption",1,"", false,thisObject.intOccurrence);

	objGroupBox.style.padding = "8px";
	objGroupBox.unselectable = "on";

	if ( strGroupCaption != "" )
	{
		var objGroupCaption = thisDocument.createElement("legend");
			 objGroupCaption.innerText = strGroupCaption;
			 objGroupBox.appendChild(objGroupCaption);
	}

	var objSpanContainer				= thisDocument.createElement("span");	 

	var objInputFilePath				  = thisDocument.createElement("input");
		 objInputFilePath.name		  = VF_System.GenerateUniqueName();
		 objInputFilePath.type		  = "file";
       objInputFilePath.thisObject = thisObject;
       objInputFilePath.contentEditable = false;
		 objInputFilePath.unselectable = "on";
  		 objInputFilePath.attachEvent("onchange", FP_RFILE_EVENT_HANDLER_FileChanged);

	objSpanContainer.appendChild(objInputFilePath);

	if ( VF_System.FP_GetBool(thisObject, "uUploadButton", 1,"TRUE",thisObject.intOccurrence) )
	{
  		var objButton						 = thisDocument.createElement("button");
			 objButton.innerText			= VF_System.FP_Get(thisObject,"uUploadBtnCaption",1, VF_System.MString(115), false,thisObject.intOccurrence);
			 objButton.style.marginLeft = "5px";
			 objButton.thisObject		 = thisObject;
			 objButton.attachEvent("onclick", FP_RFILE_EVENT_HANDLER_OnUpload);
			 objButton.disabled			= true;
          objButton.setAttribute("type","button");
			 objInputFilePath.objButton	 = objButton;
          
	       objSpanContainer.appendChild(objButton);
	}

	objGroupBox.appendChild(objSpanContainer);

   return(objGroupBox);
}

/* -------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_SetCellValues - Set properties of data to PASTE   */
/* -------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PRIVATE_SetCellValues( thisObject, argarrayCells, argintItem )
//#else
//# function FP_RFILE_PRIVATE_SetCellValues( thisObject : FP_RFILE_Object,  argarrayCells : Array, argintItem : int  )
//#endif 
{
   var arrayCells     = argarrayCells;
   var intCellsLength = arrayCells.length;
   var intItem        = argintItem;
   var intCell        = 0;
   var strCell        = "";
   var floatCellValue = 0;
   var strCellValue   = ""; 

   var strThousandSeparator = VF_System.FP_Get(thisObject,"uThousandSeparator",1,VF_System.strThousandSeparator, false,thisObject.intOccurrence);
   var strDecimalSeparator  = VF_System.FP_Get(thisObject,"uDecimalSeparator",1,VF_System.strDecimalSeparator, false,thisObject.intOccurrence);

   for (intCell = 0; intCell < intCellsLength; intCell++)
   {
      strCell      = "Column" + (intCell + 1).toString() + ".Cell.Value";
      strCellValue = arrayCells[intCell];

      VF_System.FP_Set(thisObject, strCell, intItem, strCellValue, false,thisObject.intOccurrence);
   
 	   floatCellValue = VF_System.ParseFloat(strCellValue, strThousandSeparator /* strDecimalSeparator */ );

      if (floatCellValue != null ) 
		{ 
			VF_System.FP_SetNum(thisObject, strCell, intItem, floatCellValue, VF_System.FP_GetNum(thisObject, "Column" + (intCell + 1).toString() + ".uPrecision",1,true, 0, thisObject.intOccurrence),thisObject.intOccurrence);
		}
   }
   
   VF_System.FP_SetNum(thisObject, "uItem.CellCount", intItem, intCellsLength, 0,thisObject.intOccurrence);
}

/* -------------------------------------------------------------------- */
/* FP_RFILE_PRIVATE_ReadFile - Read the file to upload and set the cell values   */
/* -------------------------------------------------------------------- */

//#ifscript
function FP_RFILE_PRIVATE_ReadFile( thisObject, argstrReplaceCR, argstrReplaceLF )
//#else
//# function FP_RFILE_PRIVATE_ReadFile( thisObject:FP_RFILE_Object, argstrReplaceCR : String, argstrReplaceLF :String )
//#endif 
{
	var strFilePath	= thisObject.strSourceFile;
	var strReplaceCR	= argstrReplaceCR;
	var strReplaceLF	= argstrReplaceLF;
	var intItem			= 0;
   var strFileFormat = thisObject.strFileFormat;
	var strData			= "";

	var objFileSystem = VF_System.GetFileSystemObject();

	/* get the size of the file to compare it with the */
	var objFile		= objFileSystem.GetFile(strFilePath);
	var intMaxSize = 	VF_System.FP_GetNum(thisObject,"uMaxFileSize",1,true,100,thisObject.intOccurrence) * 1024;

	if ( objFile.Size > intMaxSize ) 
	{
		VF_System.SendClientMessage(VF_System.MString(116) + " " + intMaxSize + " bytes", true, "R");
		VF_System.SendClientMessage(VF_System.MString(117), false, "R");

		return false;
	}

	/* open file for reading */
	var objFile = objFileSystem.OpenTextFile(strFilePath, 1);

	strData = objFile.ReadAll();
   
	var arraySplittedData = strData.split(thisObject.strLineTerminator);
	var intItemCount = arraySplittedData.length - 1;

   var arrayCells = new Array();

	switch ( strFileFormat )
	{
		case "TAB":

			for (intItem = 0; intItem <= intItemCount ; intItem++)
			{
				arrayCells = VF_System.FormatTABString(arraySplittedData[intItem], strReplaceCR, strReplaceLF);

				FP_RFILE_PRIVATE_SetCellValues(thisObject, arrayCells, intItem + 1);
			}

		break;

		case "CSV":

			for (intItem = 0; intItem < intItemCount ; intItem++)
			{
				arrayCells = VF_System.FormatCSVString(arraySplittedData[intItem], strReplaceCR, strReplaceLF);

				FP_RFILE_PRIVATE_SetCellValues(thisObject, arrayCells, intItem + 1);
			}

		break;

		case "TEXT":

			for (intItem = 0; intItem < intItemCount; intItem++)
			{
				arrayCells[intItem] = arraySplittedData[intItem];

				FP_RFILE_PRIVATE_SetCellValues(thisObject, arrayCells, intItem + 1);
			}

		break;
	}

   VF_System.FP_SetNum(thisObject, "uItemCount", 1, intItemCount, 0, thisObject.intOccurrence);  

	return true;
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------  E V E N T   H A N D L E R S  ---------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------- */
/* FP_RFILE_EVENT_HANDLER_FilePathOnChange - Onchange of the source file input field  */
/* --------------------------------------------------------------------------------------- */
function FP_RFILE_EVENT_HANDLER_FilePathOnChange(argobjEvent)
{
	var objSourceElement = argobjEvent.srcElement;
//#ifscript
    var thisObject = objSourceElement.thisObject;
//#else
//# var thisObject : FP_RFILE_Object = this;
//#endif 

	thisObject.strTargetFile = objSourceElement.value;
}

/* -------------------------------------------------------------------- */
/* FP_RFILE_EVENT_HANDLER_OnDownloadClick - Handle click on the download button */
/* -------------------------------------------------------------------- */
function FP_RFILE_EVENT_HANDLER_OnDownloadClick(argobjEvent)
{
	if ( VF_System.flagBusy ) return;

//#ifscript
      var thisObject = argobjEvent.srcElement.thisObject;
//#else
//#   var thisObject : FP_RFILE_Object = this;
//#endif 

	if ( thisObject.strWhenToDownload == "WHENCLICKED" ) 
	{
		thisObject.strWhenToDownload = "IMMEDIATE";
		FP_RFILE_PRIVATE_PrepareFileData( thisObject );
		thisObject.strWhenToDownload = "WHENCLICKED";
	}
	else 
	{
	   VF_System.FP_Set(thisObject,"uWhenToDownload", 1 ,"IMMEDIATE",false,thisObject.intOccurrence);
      VF_System.FP_Set(thisObject,"uTargetFile", 1 , thisObject.strTargetFile,false,thisObject.intOccurrence);
	
		VF_SY506_PRIVATE_HandleEvent(thisObject,"DownloadData");
	}
}

/* ------------------------------------------------------------------------------------- */
/* FP_RFILE_EVENT_HANDLER_FileChanged - Handle selection of a file using the browse button */
/* ------------------------------------------------------------------------------------- */

function FP_RFILE_EVENT_HANDLER_FileChanged( argobjEvent )
{
	if ( VF_System.flagBusy ) return;

	var objSourceElement = argobjEvent.srcElement;

//#ifscript
     var thisObject	 = objSourceElement.thisObject;
//#else
//#   var thisObject : FP_RFILE_Object = this;
//#endif 

	
	thisObject.strSourceFile = objSourceElement.value;

	if ( objSourceElement.value != "" ) objSourceElement.objButton.disabled = false; 
	else								objSourceElement.objButton.disabled = true;

}

/* ------------------------------------------------------------------------------------- */
/* FP_RFILE_EVENT_HANDLER_OnUpload - Handle Uploade, format data and set the cell values */
/* ------------------------------------------------------------------------------------- */

function FP_RFILE_EVENT_HANDLER_OnUpload(argobjEvent)
{
	if ( VF_System.flagBusy ) return;

//#ifscript
     var thisObject	 = argobjEvent.srcElement.thisObject;
//#else
//#   var thisObject : FP_RFILE_Object = this;
//#endif 
  
	if ( ( thisObject.strSourceFile != "" ) && ( FP_RFILE_PRIVATE_ReadFile( thisObject, thisObject.strReplaceCR, thisObject.strReplaceLF ) ) )
    {
	   	VF_SY506_PRIVATE_HandleEvent(thisObject,"UploadData");
    }
}



//#IFNET
//# }  
//#endif 
