/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------- F P _ R C A L C ------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* ------  Create and manage a calculator attached to a numeric field  ------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#IFNET
//# class FP_RCALC_Object extends FP_BASE_Object  
//# { 
//#    var intThisObjectID : int; 
//#    var objCalculatorWindow : Object = null;
//#    var flagSeperateWindow : Boolean; 
//#    var NumericField : Object = null;
//#    var CalculatorButton : Object = null; 
//#    var flagReadOnly : Boolean;
//#    var strCalculatorHint : String;
//#    var intFieldValue : float;
//#    var intPrecision : int;
//#    var objIFrame : Object;
//#    var VF_Opener : Object = null; 
//#    var VF_SystemCopy : VF_SY001_Object = null; 
//#    var IFrameID : String = ""; 
//#    var objVF_HT010_Result : Object = new Object();
//#    var objButtonTexts: VLF.UI.CalculatorPopup.ButtonTexts = new VLF.UI.CalculatorPopup.ButtonTexts();
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RCALC"] = FP_RCALC_PUBLIC_Create;
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
function FP_RCALC_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RCALC_Object = this;  
//#   var arrButtonNames = new Array("Backspace", "CE", "C", "sqrt", "MC", "MR", "MS", "M+");
//#   for (var i = 0; i < arrButtonNames.length; i++)
//#   {
//#       this.objButtonTexts[arrButtonNames[i]] = VF_System.MString(i + 200);
//#   }
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RCALC_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RCALC_PUBLIC_Visualize;   
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
function FP_RCALC_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 


	/* Close and free floating window */
	if ( thisObject.objCalculatorWindow != null) thisObject.objCalculatorWindow.FP_RCALC_PRIVATE_CloseWindow();

	/* Destroy any details and free any resources */ 
	thisObject.objCalculatorWindow = null; 
	
	/* Detach events on the numeric field and the button */
	if(thisObject.flagSeperateWindow)
	{
		thisObject.NumericField.detachEvent("onchange", FP_RCALC_EVENT_HANDLER_NumericField_Onchange); 
		thisObject.NumericField.detachEvent("onfocus", FP_RCALC_EVENT_HANDLER_NumericField_Onfocus); 
		
		if  (( !thisObject.objMainContainer.disabled ) && ( !thisObject.flagReadOnly ) )
		{
			thisObject.CalculatorButton.attachEvent("onclick", FP_RCALC_EVENT_HANDLER_CalculatorButton_onClick);
			thisObject.CalculatorButton.attachEvent("onmousedown", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmousedown); 
			thisObject.CalculatorButton.attachEvent("onmouseenter", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter); 
			thisObject.CalculatorButton.attachEvent("onmouseup", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter); 
			thisObject.CalculatorButton.attachEvent("onmouseout", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouseout);
		}
	}
	
	VF_System.DeleteThisObjectID(thisObject.intThisObjectID);
	
	/* Finished */         
	return; 
}
	
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */


//#ifscript
function FP_RCALC_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 

	/* Declarations */ 

	var thisDocument = thisObject.objDocument;

    VF_SY506_PRIVATE_SetupContainer (thisObject,"NONE",null,null);

	var objCaptionContainer			= thisObject.objCaptionContainer;
	
	thisObject.flagSeperateWindow	= VF_System.FP_GetBool(thisObject,"uSeparateWindow",1,"TRUE",thisObject.intOccurrence);
	thisObject.flagReadOnly			= VF_System.FP_GetBool(thisObject,"uReadOnly",1,"FALSE",thisObject.intOccurrence);
	thisObject.strCalculatorHint	= VF_System.FP_Get(thisObject,"uHint",1,null, false,thisObject.intOccurrence);
	thisObject.intFieldValue		= VF_System.FP_GetNum(thisObject,"uValue",1,false,0,thisObject.intOccurrence);
	thisObject.intPrecision			= VF_System.FP_GetNum(thisObject,"uPrecision",1,false,0,thisObject.intOccurrence);
	thisObject.objIFrame			= null;
	thisObject.objCalculatorWindow	= null; 

	/* String for innerHTML */
	var strHTML	= "";  
	
	/* Details passed to floating window */
	
	thisObject.VF_Opener = VF_System.objMainWindow; 

//#ifscript	
	thisObject.VF_System     = VF_System;  
//#else
//# thisObject.VF_SystemCopy = VF_System;  
//#endif 

	/* Get a unique number assigned to this object */ 
	
	thisObject.intThisObjectID = VF_System.GetThisObjectID(thisObject); 
   
	var intNumericValue = 0;

	/* Create the TABLE container */

	var objTableContainer = thisDocument.createElement("TABLE");

	objTableContainer.style.width      = "100%"; 
	objTableContainer.style.height     = "100%";
	objTableContainer.cellSpacing      = 0; 
	objTableContainer.cellPadding      = 0; 

	var objTbody = thisDocument.createElement("TBODY");
	objTableContainer.appendChild( objTbody ); 

    var objRow = thisDocument.createElement("TR");
    objRow.vAlign = "top";
	objRow.style.padding = "0px";
	objTbody.appendChild( objRow ); 

	/* Allow for a caption */
	
	if ( ( objCaptionContainer != null ) && ( objCaptionContainer.style.display == "inline" ) && ( !thisObject.flagWAM ) )
	{
		var objCell = thisDocument.createElement("TD");
   		objCell.style.padding = "0px";
		objRow.appendChild( objCell );
		objCell.insertAdjacentElement("afterBegin", objCaptionContainer);
	}

	/* Make room for the fast part content */ 
	var objCell = thisDocument.createElement("TD");
	objCell.style.padding = "0px";
	objRow.appendChild( objCell ); 

	/* If calculator is to open into a separate window...... */
	if(thisObject.flagSeperateWindow)
	{
		/* Add the field */
		thisObject.NumericField = FP_RCALC_PRIVATE_CreateInput(thisObject);
		thisObject.NumericField.attachEvent("onchange", FP_RCALC_EVENT_HANDLER_NumericField_Onchange); 
		thisObject.NumericField.attachEvent("onfocus", FP_RCALC_EVENT_HANDLER_NumericField_Onfocus); 
		objCell.appendChild(thisObject.NumericField);

		/* Create and append the Calculator button */

		objCell = thisDocument.createElement("TD");
		objCell.style.padding = "0px";
	
		objRow.appendChild( objCell );
	
		thisObject.CalculatorButton                  = thisDocument.createElement("IMG");
		thisObject.CalculatorButton.className        = "FP_RCALC_CalculatorImg";  
  		thisObject.CalculatorButton.src              = VF_System.ReturnImgSource(VF_System.FP_Get(thisObject,"uCalculatorImage",1, "vf_ic3671.gif", true,thisObject.intOccurrence));

		if  (( !thisObject.objMainContainer.disabled ) && ( !thisObject.flagReadOnly ) )
		{
//#ifscript		
			thisObject.CalculatorButton.objFP_RXXXX      = thisObject;
//#endif 			  
			thisObject.CalculatorButton.title            = VF_System.MString(193);
			thisObject.CalculatorButton.attachEvent("onclick", FP_RCALC_EVENT_HANDLER_CalculatorButton_onClick);
			thisObject.CalculatorButton.attachEvent("onmouseenter", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter); 
			thisObject.CalculatorButton.attachEvent("onmousedown", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmousedown); 
			thisObject.CalculatorButton.attachEvent("onmouseup", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter); 
			thisObject.CalculatorButton.attachEvent("onmouseout", FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouseout);
		}

		objCell.appendChild( thisObject.CalculatorButton );

	}
	else
	{

		/* Create an IFrame element */

//#ifscript
   	   strHTML += FP_RCALC_PRIVATE_CreateIFrame(thisObject);
//#else
//#  	 strHTML += "<div>Inline calculator not available</div>";
//#endif

		/* Insert the HTML for the Iframe into the cell */

		objCell.innerHTML = strHTML;
		
	}

	if ( thisObject.objMainContainer.style.width == "auto" )	thisObject.objMainContainer.style.width = "45px"; 

	if ( objCaptionContainer == null ) thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objTableContainer ); 
		else if ( objCaptionContainer.style.display != "inline" ) 
		{
			objCaptionContainer.align = "center";
			objCaptionContainer.insertAdjacentElement("afterEnd", objTableContainer ); 
		}
		else
		{
			thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objTableContainer );
		}
		
	/* Finished */ 
	return; 

}

/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ----------------------------  P R I V A T E   M E T H O D S  ------------------------------ */ 
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------- */
/* FP_RCALC_PRIVATE_CreateInput - Create an INPUT element for the numeric field                */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RCALC_PRIVATE_CreateInput (thisObject)
//#else
//# function FP_RCALC_PRIVATE_CreateInput ( thisObject : FP_RCALC_Object)
//#endif 
{
	var thisDocument  = thisObject.objDocument;

	var objField      = thisDocument.createElement("INPUT");

	objField.value = VF_System.MakeNumericString(thisObject.intFieldValue, thisObject.intPrecision,false);

//#ifscript	
	objField.objFP_RXXXX = thisObject;
//#endif 

	return(objField);
}

/* --------------------------------------------------------------------------------------- */
/* FP_RCALC_PRIVATE_CreateIFrame - Create the iframe that is the calculator                */
/* --------------------------------------------------------------------------------------- */ 

//#ifscript  

function FP_RCALC_PRIVATE_CreateIFrame(thisObject) 
{
	/* String for IFrame HTML fragment*/

	var strIframeHTML = "";  
	
	/* Generate a unique ID for the Iframe*/
	var strID = VF_System.GenerateUniqueName(); 

	/* Save the Iframe ID */
	thisObject.IFrameID = strID;
   	
	/* Get the page URL */
	var struWebPageSourceURL = VF_System.ReturnImgSource("vf_ht010.htm"); 
	
	/* Create a new "IFrame" element */ 

	strIframeHTML += "<IFRAME ID='" + strID + "'";
	strIframeHTML += " name='" + strID + "'";
	
	/* Set Height and Width of the calculator */
	
	strIframeHTML +=  " height=255 width='247'"; 
	
	/* Set frame border to no (for now) */
	
	strIframeHTML +=  " frameborder=No"; 
	
	/* Set a margin to the left */
	
	strIframeHTML +=  " style='margin-left: 4px'"; 
	
	/* Add the source URL */
	
	strIframeHTML +=  " src='" + struWebPageSourceURL + "'";
   
	/* Add the onload event */
	
	strIframeHTML +=  " onload='parent.VF_System.objMainWindow.FP_RCALC_EXTERNAL_EVENT_HANDLER_005(this," + thisObject.intThisObjectID + ");'";
   
	/* End Iframe tag */
	
	strIframeHTML +=  "></IFRAME>";
	
	/* Pass back resulting HTML */
	
	return(strIframeHTML);
}

//#endif 

/* --------------------------------------------------------------------------------------- */
/* FP_RCALC_PRIVATE_EvaluateString - First converts the decimal separator to a "." and     */
/*								   - removes thousand serparators then tries to evaluate   */
/*								   - the resultant string.							       */
/* --------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RCALC_PRIVATE_EvaluateString(argstrEvalString, argintThisObjectID) 
//#else
//# function FP_RCALC_PRIVATE_EvaluateString(argstrEvalString:String, argintThisObjectID:int) 
//#endif 
{
	var thisObject				= VF_System.ConvertThisObjectID(argintThisObjectID); 
	var strDecimalSeparator		= VF_System.strDecimalSeparator;
	var strThousandSeparator	= VF_System.strThousandSeparator;
	var strEvalString			= argstrEvalString;
	var strResult				= "";
	var floatResult				= 0;
	var arrayEvalString			= null;
	var intStringLength			= 0;
	
	/* Check if system uses a different decimal separator */
	var flagNotDot = (strDecimalSeparator != ".");
	
	if(flagNotDot)
	{
		/* Create the regular expression that finds the decimal separator */
		var re = new RegExp(strDecimalSeparator,"g");
		
		/* Replace the decimal separator with a "." */
		strEvalString = strEvalString.replace(re, ".");
	}
	
	/* Remove the thousands separator */
	arrayEvalString = strEvalString.split(strThousandSeparator);
	intStringLength = arrayEvalString.length;
	
	/* Clear the evaluation string */
	strEvalString = "";

	/* Rebuild the evaluation string without the thousands separators */
	for (var intInd = 0; intInd < intStringLength; intInd++)
	{
		strEvalString += arrayEvalString[intInd];
	}
   
	try {
        /* Try to do the calculation */
		floatResult = eval(strEvalString);
		
		/* Clean up number and convert to a string */
		
		strResult = VF_System.MakeNumericString(floatResult, thisObject.intPrecision,false);
	
		/* Replace the "." with the decimal separator again if required */
		if (flagNotDot) strResult = strResult.replace(/\./, strDecimalSeparator);
	}
	catch(objError)
	{
		strResult = "ERROR";
	}
	
	return(strResult);
	
}

/* -------------------------------------------------------------------------------------- */
/* FP_RCALC_PRIVATE_RoundResult - Converts the value of the calculator display to the     */
/*								- correct number of decimal places.                       */
/* -------------------------------------------------------------------------------------- */ 
 
//#ifscript  
function FP_RCALC_PRIVATE_RoundResult(argintThisObjectID) 
//#else
//# function FP_RCALC_PRIVATE_RoundResult(argintThisObjectID:int) 
//#endif 
{

//#ifscript
 	  var thisObject		= VF_System.ConvertThisObjectID(argintThisObjectID); 
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 	
	
	var strResult		= "";
	var floatResult		= 0;
	
	/* Get the result from the calculator as a float */
	floatResult = parseFloat(thisObject.objVF_HT010_Result.value);
	
	/* Clean up number and convert to a string */
	strResult = VF_System.MakeNumericString(floatResult, thisObject.intPrecision,false);
	
	/* Return the result back to the calculator display */
	thisObject.objVF_HT010_Result.value = strResult;
	
	return;
}

/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------  E V E N T   H A N D L E R S   ----------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------- */
/* FP_RCALC_EVENT_HANDLER_CalculatorButton_onClick - Handle onclick on the Calendar button */
/* --------------------------------------------------------------------------------------- */ 
  
function FP_RCALC_EVENT_HANDLER_CalculatorButton_onClick( argobjEvent )
{

	argobjEvent.cancelBubble = true;
	
	if  (VF_System.flagBusy) return;

//#ifscript
	try { if (argobjEvent.srcElement.objFP_RXXXX.objCalculatorWindow != null) return;}
//#else
//# try { if (this.objCalculatorWindow != null) return;}
//#endif 	
	catch (objError) {}

	var objSourceINPUT =  argobjEvent.srcElement;

//#ifscript	
	  var thisObject = argobjEvent.srcElement.objFP_RXXXX;
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 

	var thisDocument       = thisObject.objDocument;

//#ifscript
   	
	/* Get the page URL */

	/* X-Browser change: */
        /* var struWebPageSourceURL = VF_System.ReturnImgSource("vf_ht010.htm"); */
        var struWebPageSourceURL = VF_System.strEntryURI + "vf_ht010.htm";
 
	
	/* Get the co-ordinates to open the calculator window */
	
	var intCalculatorLeft = argobjEvent.screenX - argobjEvent.offsetX + 20;
	var intCalculatorTop = argobjEvent.screenY - argobjEvent.offsetY;

        /* XBrowser */ 
	/* var strCalculatorCoordinates = " dialogLeft:" + intCalculatorLeft + "px;" + " dialogTop:" + intCalculatorTop + "px;"; */
	var strCalculatorCoordinates = " left=" + intCalculatorLeft + "," + " top=" + intCalculatorTop; 
      
	/* Now create the window */
    
        /* X-Browser change: */
        /* thisObject.objCalculatorWindow = VF_System.objMainWindow.showModelessDialog(struWebPageSourceURL,thisObject,(VF_Global_strCalculatorWindow + strCalculatorCoordinates)); */

        VF_System.objTempFP_RCALC = thisObject ;
        thisObject.objCalculatorWindow = VF_System.objMainWindow.open(struWebPageSourceURL,"_blank",(VF_Global_strCalculatorWindow + strCalculatorCoordinates));



//#else
//#   var flagCustomButton1 = VF_System.FP_GetBool(this,"uCustomButton1",1,"FALSE",1);
//#   var flagCustomButton2 = VF_System.FP_GetBool(this,"uCustomButton2",1,"FALSE",1);
//#   var strCustomButton1 = flagCustomButton1 ? VF_System.FP_Get(this,"uCustomButton1Text",1,null,false,this.intOccurrence) : "";
//#   var strCustomButton2 = flagCustomButton2 ? VF_System.FP_Get(this,"uCustomButton2Text",1,null,false,this.intOccurrence) : "";
//#   FP_RCALC_EXTERNAL_EVENT_HANDLER_001();
//#   VLF.UI.CalculatorPopup.Show(thisObject.objVF_HT010_Result.value, new Point(argobjEvent.screenX, argobjEvent.screenY), strCustomButton1, strCustomButton2, VF_System.strDecimalSeparator, VF_System.strThousandSeparator, this.objButtonTexts, FP_RCALC_EXTERNAL_EVENT_HANDLER_002, FP_RCALC_EXTERNAL_EVENT_HANDLER_003);
//#endif 	
	
						
	return; 
}

/* ---------------------------------------------------------------------------*/
/* FP_RCALC_EVENT_HANDLER_CalculatorButton_onmousedown - Change image borders */
/* ---------------------------------------------------------------------------*/ 

function FP_RCALC_EVENT_HANDLER_CalculatorButton_onmousedown(argobjEvent)
{
   argobjEvent.srcElement.className        = "FP_RCALC_CalculatorImgDown";  
}

/* ------------------------------------------------------------------------------*/
/* FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter - Change image borders */
/* ------------------------------------------------------------------------------*/ 

function FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouse_up_enter(argobjEvent)
{
   argobjEvent.srcElement.className        = "FP_RCALC_CalculatorImgEnter";  
}

/* ------------------------------------------------------------------------------*/
/* FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouseout - Change image borders */
/* ------------------------------------------------------------------------------*/ 

function FP_RCALC_EVENT_HANDLER_CalculatorButton_onmouseout(argobjEvent)
{
   argobjEvent.srcElement.className = "FP_RCALC_CalculatorImg";  
}

/* ----------------------------------------------------------------------------------------------- */
/* FP_RCALC_EXTERNAL_EVENT_HANDLER_001 - Free floating window is set up and wants the field value  */
/* ----------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RCALC_EXTERNAL_EVENT_HANDLER_001(argobjWindow, argintThisObjectID)   
//#else
//# function FP_RCALC_EXTERNAL_EVENT_HANDLER_001()   
//#endif
{
//#ifscript
      var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID); 
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 	

//#ifscript	
	argobjWindow.document.body.style.background = "#ece9d8";

	/* Get a reference to the calculator window */
	var objCalculator = argobjWindow; 
 
	/* Get a reference to the calculator display field */ 
	thisObject.objVF_HT010_Result = objCalculator.document.getElementById("VF_HT010_Result");
//#endif

	/* If calculator is displayed in a separate window */
	if(thisObject.flagSeperateWindow)
	{
		/* Set the calculator display field to the numeric field's value */
		thisObject.objVF_HT010_Result.value = thisObject.NumericField.value;
	}
	else
	{
		/* Set the calculator display field to the fast part's value */
		thisObject.objVF_HT010_Result.value = VF_System.MakeNumericString(VF_System.FP_GetNum(thisObject,"uValue",1,false,0,thisObject.intOccurrence), thisObject.intPrecision, false);
	}

	/* Finished */ 
	return;     
}

/* ----------------------------------------------------------------------- */
/* FP_RCALC_EXTERNAL_EVENT_HANDLER_002 - A custom buttom has been clicked  */
/* ----------------------------------------------------------------------- */ 

//#ifscript  
function FP_RCALC_EXTERNAL_EVENT_HANDLER_002(argintButtonNumber, argintThisObjectID)   
//#else
//# function FP_RCALC_EXTERNAL_EVENT_HANDLER_002(argintButtonNumber: int)
//#endif
{
	/* If the system is not already doing something */
	if  (VF_System.flagBusy) return;
	
	/* Get a reference to the fast part object that was clicked */

//#ifscript	
	var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID); 
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 

	/* Fire an event depending on which custom button was clicked */
	if (argintButtonNumber == 1)
	{
		VF_SY506_PRIVATE_HandleEvent(thisObject,"CUSTOMBUTTON1CLICK");  
	}

	if (argintButtonNumber == 2)
	{
		VF_SY506_PRIVATE_HandleEvent(thisObject,"CUSTOMBUTTON2CLICK");  
	}
	
	/* Finished */ 
	return;     
}

/* -------------------------------------------------------------------------------------- */
/* FP_RCALC_EXTERNAL_EVENT_HANDLER_003 - Sychronize fast part values with the calculator  */
/* -------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RCALC_EXTERNAL_EVENT_HANDLER_003(argintThisObjectID)   
//#else
//# function FP_RCALC_EXTERNAL_EVENT_HANDLER_003(value: System.Decimal)
//#endif
{
	/* If the system is not already doing something */
	if  (VF_System.flagBusy) return;
	
	/* Get a reference to the fast part object that was clicked */

//#ifscript	
	var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID); 
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#   thisObject.objVF_HT010_Result.value = VF_System.MakeNumericString(Convert.ToSingle(value), thisObject.intPrecision, false);
//#endif 

	/* Set the fast part's value to the calculator display field */
	VF_System.FP_SetNum(thisObject, "uValue", 1, thisObject.objVF_HT010_Result.value, thisObject.intPrecision, thisObject.intOccurrence);
	
	/* If calculator is displayed in a separate window */
	if(thisObject.flagSeperateWindow)
	{
		/* Set the numeric field's value to the calculator display field */
		thisObject.NumericField.value = thisObject.objVF_HT010_Result.value;
	}
	
	/* Finished */ 
	return;     
}

/* ----------------------------------------------------------------------- */
/* FP_RCALC_EXTERNAL_EVENT_HANDLER_004 - The calculator has been closed    */
/* ----------------------------------------------------------------------- */ 
  
function FP_RCALC_EXTERNAL_EVENT_HANDLER_004(argintThisObjectID)   
{
	/* Get a reference to the fast part object that was clicked */

//#ifscript	
	var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID); 
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 

	/* Try to clear the floating calculator window for this fast part */
	try	{
		if (thisObject.objCalculatorWindow != null) thisObject.objCalculatorWindow = null;
	}
	catch(objError){}
	
	/* Finished */ 
	return;     
}

/* ---------------------------------------------------------------------------------------- */
/* FP_RCALC_EXTERNAL_EVENT_HANDLER_005 - The iframe has loaded and is ready to be set up    */
/* ---------------------------------------------------------------------------------------- */ 
 
//#ifscript  

function FP_RCALC_EXTERNAL_EVENT_HANDLER_005(argIFrame, argintThisObjectID)   
{

	argIFrame.contentWindow.FP_RCALC_PRIVATE_SetupCalculator(VF_System.ConvertThisObjectID(argintThisObjectID));
		
	/* Finished */ 
	return;     
}

//#endif 

/* ------------------------------------------------------------------------------------------------- */
/* FP_RCALC_EVENT_HANDLER_NumericField_Onchange - Record the new value of the field in the fast part */
/* ------------------------------------------------------------------------------------------------- */ 
  
function FP_RCALC_EVENT_HANDLER_NumericField_Onchange(argobjEvent)   
{
	argobjEvent.cancelBubble = true;

	if  ( VF_System.flagBusy ) return;

//#ifscript
	var thisObject = argobjEvent.srcElement.objFP_RXXXX;
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 	
	
	/* Set the fast part's value to the new value of the numeric field */
	
	VF_System.FP_SetNum(thisObject, "uValue", 1, thisObject.NumericField.value, thisObject.intPrecision,thisObject.intOccurrence);
		
	/* Finished */ 
	return;     
}

/* ------------------------------------------------------------------------------------------------- */
/* FP_RCALC_EVENT_HANDLER_NumericField_Onfocus - Handle the numeric field getting focus              */
/* ------------------------------------------------------------------------------------------------- */ 
  
function FP_RCALC_EVENT_HANDLER_NumericField_Onfocus(argobjEvent)   
{
	argobjEvent.cancelBubble = true;

	if  ( VF_System.flagBusy ) return;

	var objSourceINPUT = argobjEvent.srcElement;

//#ifscript	
	var thisObject     = objSourceINPUT.objFP_RXXXX;
//#else
//#   var thisObject : FP_RCALC_Object = this;  
//#endif 

   if ( !thisObject.flagReadOnly ) 
   {
      objSourceINPUT.select();
   }
		
   /* Finished */ 
   return;     
}


//#IFNET
//# } 
//#endif 
