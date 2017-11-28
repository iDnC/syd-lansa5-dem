/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R T I M E ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic Time       ---------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RTIME_Object extends FP_BASE_Object  
//# { 
//#    var HH : Object = null;
//#    var MM : Object = null;
//#    var SS : Object = null;
//#    var UpButton : Object = null;
//#    var DownButton : Object = null; 
//#    var AMPMButton : Object = null; 
//#    var uInputAmPmTime : Boolean = false; 
//#    var uOutputAmPmTime: Boolean = false; 
//#    var uTimeIsAmOrPm : String = "";
//#    var uSignalChanged : Boolean = false;  
//#    var uAlphaValue : String;
//#    var uNumericValue : int; 
//#    var uOutputIsAmOrPm:String; 
//#    var uInputFormat:String; 
//#    var INPUTOnFocus : Object; 
//#    var flagTimeInError : Boolean; 
//#    var KeepValue : String; 
//#endif 


/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RTIME"] = FP_RTIME_PUBLIC_Create;
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
function FP_RTIME_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RTIME_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */
		
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RTIME_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RTIME_PUBLIC_Visualize;   
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
function FP_RTIME_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RTIME_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 
 
   thisObject.HH.detachEvent("onchange", FP_RTIME_EVENT_HANDLER_Time_onChange);   
   thisObject.HH.detachEvent("onfocus", FP_RTIME_EVENT_HANDLER_Time_onFocus);

   thisObject.MM.detachEvent("onchange", FP_RTIME_EVENT_HANDLER_Time_onChange);
	thisObject.MM.detachEvent("onfocus", FP_RTIME_EVENT_HANDLER_Time_onFocus);

   if ( ( typeof(thisObject.UpButton) != 'undefined' ) && ( thisObject.UpButton != null ) )
   {
  	   thisObject.UpButton.detachEvent("onclick", FP_RTIME_EVENT_HANDLER_UpDwButton_onClick);
   }
    
   if ( ( typeof(thisObject.DownButton) != 'undefined' ) && ( thisObject.DownButton != null ) )
   {
		thisObject.DownButton.detachEvent("onclick", FP_RTIME_EVENT_HANDLER_UpDwButton_onClick);
   }
    
   if ( ( typeof(thisObject.SS) != 'undefined' ) && ( thisObject.SS != null ) )
   {
     thisObject.SS.detachEvent("onchange", FP_RTIME_EVENT_HANDLER_Time_onChange);
  	 thisObject.SS.detachEvent("onfocus", FP_RTIME_EVENT_HANDLER_Time_onFocus);
   }

   if ( ( typeof(thisObject.AMPMButton) != 'undefined' ) && ( thisObject.AMPMButton != null ) )
   {
      thisObject.AMPMButton.detachEvent("onclick", FP_RTIME_EVENT_HANDLER_AMPMButton_onClick);
   }

   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RTIME_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RTIME_Object = this;  
//#endif 

   /* Declarations */ 

   var thisDocument        = thisObject.objDocument; 
	
   VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

	var objCaptionContainer = thisObject.objCaptionContainer;

   thisObject.uInputAmPmTime = VF_System.FP_GetBool(thisObject,"uInputAmPmTime",1,"FALSE",thisObject.intOccurrence);

	if ( thisObject.uInputAmPmTime ) thisObject.uTimeIsAmOrPm = VF_System.FP_Get(thisObject,"uTimeIsAmOrPm",1, "AM", true, thisObject.intOccurrence); 

   thisObject.uSignalChanged = VF_System.FP_GetBool(thisObject,"uSignalChanged",1,"FALSE",thisObject.intOccurrence);

   var intNumericTime = VF_System.FP_GetVariant(thisObject, "uNumericValue",1,thisObject.intOccurrence);
  
   if ( !intNumericTime.flagFound ) 
   {
      var strAlphaTime = VF_System.FP_GetVariant(thisObject, "uAlphaValue",1,thisObject.intOccurrence);
      
      if ( !strAlphaTime.flagFound ) 
      {
         thisObject.uAlphaValue     = FP_RTIME_PRIVATE_GetDefaultAlphaTime(thisObject);
	      thisObject.uNumericValue   = parseInt(thisObject.uAlphaValue, 10);
      }
      else
      {
         thisObject.uAlphaValue   = strAlphaTime.strAlphaValue;
         thisObject.uNumericValue = parseInt(strAlphaTime.strAlphaValue, 10);
      }
   }
   else
   {
      thisObject.uNumericValue = intNumericTime.intNumericValue;
      thisObject.uAlphaValue   = FP_RTIME_PRIVATE_ZeroPadding(thisObject.uNumericValue);
   }

	/* Set properties */

   thisObject.uOutputAmPmTime = VF_System.FP_GetBool(thisObject,"uOutputAmPmTime",1, "FALSE", thisObject.intOccurrence);

	var flaguTimeSeparator     = VF_System.FP_GetBool(thisObject,"uTimeSeparator",1, "TRUE", thisObject.intOccurrence);

	if ( !VF_System.FP_GetBool(thisObject,"uReadOnly",1,"FALSE",thisObject.intOccurrence ) )
		{
			var flagContentEditable = true;
			thisObject.objMainContainer.className = "FP_RTIME_Container";
		}
	else
		{
	      var flagContentEditable    = false;
			thisObject.objMainContainer.className = "FP_RTIME_Container_ReadOnly";
		}		

	var struInputFormat  = FP_RTIME_PRIVATE_SetInputFormat(thisObject);

  /* Create the TABLE container */
		
	var objTableContainer = thisDocument.createElement("TABLE");

	    objTableContainer.style.width      = "100%"; 
	    objTableContainer.style.height     = "100%";
	    objTableContainer.cellSpacing      = 0; 
	    objTableContainer.cellPadding      = 0; 

		 var objTbody = thisDocument.createElement("TBODY");
	    objTableContainer.appendChild( objTbody ); 

       var objRow = thisDocument.createElement("TR");
		 objRow.style.padding = "0px";
	    objTbody.appendChild( objRow ); 

   if ( ( objCaptionContainer != null ) && ( objCaptionContainer.style.display == "inline" ) )
	{
		var objCell = thisDocument.createElement("TD");
   	objCell.style.padding = "0px";
		objRow.appendChild( objCell );
		objCell.insertAdjacentElement("afterBegin", objCaptionContainer);
	}

	var objCell = thisDocument.createElement("TD");
		 objCell.style.padding = "0px";
	    objRow.appendChild( objCell ); 

   if ( thisObject.uInputAmPmTime )
   {
      var intMaxValue = 12;
      var intMinValue = 1;
   }
   else
   {
      var intMaxValue = 23;
      var intMinValue = 0;
   }

   thisObject.HH = FP_RTIME_PRIVATE_CreateInput(thisObject, thisObject.uAlphaValue.substr(0, 2), intMaxValue, intMinValue, VF_System.MString(41), flagContentEditable);
	
	objCell.appendChild(thisObject.HH);

   if ( flaguTimeSeparator )
   {
      objCell = FP_RTIME_PRIVATE_CreateTDSeparator(thisDocument);
      objRow.appendChild( objCell ); 
   }

   objCell = thisDocument.createElement("TD");
   objCell.style.padding = "0px";
   objRow.appendChild( objCell ); 

   thisObject.MM = FP_RTIME_PRIVATE_CreateInput(thisObject, thisObject.uAlphaValue.substr(2, 2), 59, 0, VF_System.MString(42), flagContentEditable);

   objCell.appendChild( thisObject.MM );

	/* If the desired format is with Seconds, add the Seconds INPUT and append it */
		if ( struInputFormat == "A" ) 
		{
			if ( flaguTimeSeparator )
				{
					objCell = FP_RTIME_PRIVATE_CreateTDSeparator(thisDocument);
					objRow.appendChild( objCell ); 
				}
		
			objCell = thisDocument.createElement("TD");
			objCell.style.padding = "0px";
			objRow.appendChild( objCell ); 

         thisObject.SS = FP_RTIME_PRIVATE_CreateInput(thisObject, thisObject.uAlphaValue.substr(4, 2) , 59, 0, VF_System.MString(43), flagContentEditable);
         objCell.appendChild( thisObject.SS );
		}

/* Create and append the AMPM button depending on property */

		if ( thisObject.uInputAmPmTime )
		{
			objCell = thisDocument.createElement("TD");
			objCell.style.padding = "0px";
			objRow.appendChild( objCell ); 
	
			thisObject.AMPMButton                = thisDocument.createElement("BUTTON");
			thisObject.AMPMButton.name           = "Time_AMPM";
			thisObject.AMPMButton.className      = "FP_RTIME_AMPM";
			thisObject.AMPMButton.innerText      = thisObject.uTimeIsAmOrPm;
         thisObject.AMPMButton.setAttribute("type","button");
         if (VF_System.strStyleScheme == "WEB") thisObject.AMPMButton.style.width = "100%";
			
//#ifscript			
			thisObject.AMPMButton.objFP_RXXXX    = thisObject;
//#endif 	       
	        thisObject.AMPMButton.attachEvent("onclick", FP_RTIME_EVENT_HANDLER_AMPMButton_onClick);
			objCell.appendChild( thisObject.AMPMButton );

			thisObject.uOutputIsAmOrPm = thisObject.uTimeIsAmOrPm;
		}

		/* If the component is  not set to read only, add the scrolling images */

		if ( flagContentEditable == true )
			{
				objCell = thisDocument.createElement("TD");
				objCell.style.padding = "0px";
				objRow.appendChild( objCell ); 

				var objUpDownContainer = thisDocument.createElement("TABLE");
				objUpDownContainer.cellSpacing  = 0;
				objUpDownContainer.cellPadding  = 0;

				objTbody = thisDocument.createElement("TBODY");
				objUpDownContainer.appendChild(objTbody);
				objCell.appendChild( objUpDownContainer );
	
				objRow = thisDocument.createElement("TR");
				objRow.style.padding = "0px";
				objTbody.appendChild( objRow ); 
	
				objCell = thisDocument.createElement("TD");
				objCell.style.padding = "0px";
				objRow.appendChild( objCell ); 

				thisObject.UpButton = FP_RTIME_PRIVATE_CreateUpDownImg ( thisObject, "FP_RTIME_UpImage", 1, "UpButton", "fp_im001.gif", VF_System.MString(106));

				objCell.appendChild( thisObject.UpButton );
		
				var objRow = thisDocument.createElement("TR");
				objRow.style.padding = "0px";
				objTbody.appendChild( objRow ); 
		
				objCell = thisDocument.createElement("TD");
				objCell.style.padding = "0px";
				objRow.appendChild( objCell ); 

				thisObject.DownButton = FP_RTIME_PRIVATE_CreateUpDownImg ( thisObject, "FP_RTIME_DownImage", -1, "DownButton", "fp_im002.gif", VF_System.MString(107));
            	
				objCell.appendChild( thisObject.DownButton );
			}
   
   if (!VF_System.usingExplorer) thisObject.objMainContainer.style.display = "table-cell";
   
   if ( thisObject.objMainContainer.style.width == "auto" )	thisObject.objMainContainer.style.width = "45px"; 

   thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objTableContainer );
		
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

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_CreateInput - Create an INPUT element for the HH, MM or SS                 */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RTIME_PRIVATE_CreateInput ( thisObject, argstrValue, argintMaxValue, argintMinValue, argstrName, argflagContEdit)
//#else
//# function FP_RTIME_PRIVATE_CreateInput ( thisObject:FP_RTIME_Object, argstrValue:String, argintMaxValue:int, argintMinValue:int, argstrName:String, argflagContEdit:Boolean)
//#endif 
{
   var thisDocument = thisObject.objDocument;

   var objXX            = thisDocument.createElement("INPUT");
   
       objXX.value      = argstrValue;

//#ifscript       
       objXX._MAXVALUE  = argintMaxValue;
       objXX._MINVALUE  = argintMinValue;
	   objXX.objFP_RXXXX     = thisObject;
//#else
//#    objXX._MAXVALUE  = argintMaxValue.toString();
//#    objXX._MINVALUE  = argintMinValue.toString();
//#endif        
 	
 		 objXX.name            = argstrName;
		 if (VF_System.strStyleScheme == "WEB") objXX.size = 1;
		 objXX.maxLength       = 2;
		 objXX.className       = "FP_RTIME_HHMMSS";
		 objXX.style.textAlign = "center";
		 objXX.contentEditable = argflagContEdit;
	
       objXX.attachEvent("onchange", FP_RTIME_EVENT_HANDLER_Time_onChange);   
       objXX.attachEvent("onfocus", FP_RTIME_EVENT_HANDLER_Time_onFocus);
       
       /* if (!VF_System.usingExplorer) objXX.attachEvent("onblur", FP_RTIME_EVENT_HANDLER_Time_onChange);  */

   return(objXX);
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_CreateUpDownImg - Create an IMG to use as the buttons to scroll the time up or down   */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RTIME_PRIVATE_CreateUpDownImg ( thisObject, argstrClassName, argintIncrValue, argstrName, argstrImgSource, argstrTitle)
//#else
//# function FP_RTIME_PRIVATE_CreateUpDownImg ( thisObject:FP_RTIME_Object, argstrClassName:String, argintIncrValue:int, argstrName:String, argstrImgSource:String, argstrTitle:String)
//#endif 
{
   var thisDocument = thisObject.objDocument;
   
   var objButton  = thisDocument.createElement("IMG");
	    objButton.name         = argstrName;
		 objButton.src = VF_System.ReturnImgSource(argstrImgSource);
	    objButton.className    = argstrClassName;

//#ifscript			
      objButton._INCREMENT   = argintIncrValue;
      objButton.objFP_RXXXX  = thisObject;
//#else
//#   objButton._INCREMENT   = argintIncrValue.toString();
//#endif       

       objButton.title        = argstrTitle;
	   objButton.attachEvent("onclick", FP_RTIME_EVENT_HANDLER_UpDwButton_onClick);

   return(objButton);
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_SetInputFormat - Set the Input format as a letter                    */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RTIME_PRIVATE_SetInputFormat ( thisObject )
//#else
//# function FP_RTIME_PRIVATE_SetInputFormat ( thisObject:FP_RTIME_Object )
//#endif 
{

	var strInputFormat = VF_System.FP_Get(thisObject,"uInputFormat",1, "A", true,thisObject.intOccurrence);
	var struAlphaValue = thisObject.uAlphaValue;
	
	if ( ( strInputFormat == "HHMM" ) || ( strInputFormat == "B" ) )
   {
		thisObject.uInputFormat = "B";

      var strSlicedValue = struAlphaValue;

		if ( struAlphaValue.length > 4 ) strSlicedValue = struAlphaValue.slice(0, -2);

      if ( strSlicedValue.length < 4 ) 
		{
			thisObject.uAlphaValue = "0" + struAlphaValue;
		}
	}

	else if ( ( strInputFormat == "HHMMSS" )  || ( strInputFormat == "A" ) )
	{
		thisObject.uInputFormat = "A";
		if ( struAlphaValue.length < 6 ) 
			{
				thisObject.uAlphaValue = "0" + struAlphaValue;
			}
	}

   return(thisObject.uInputFormat); 
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_SetReturnFormat - Set the Return format as a letter                    */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RTIME_PRIVATE_SetReturnFormat ( thisObject )
//#else
//# function FP_RTIME_PRIVATE_SetReturnFormat ( thisObject:FP_RTIME_Object )
//#endif 
{
	var strReturnFormat = VF_System.FP_Get(thisObject,"uReturnFormat",1, "A", true,thisObject.intOccurrence);

	if ( ( strReturnFormat == "HHMMSS" ) || ( strReturnFormat == "A" ) ) return("A");
	if ( ( strReturnFormat == "HHMM" ) || ( strReturnFormat == "B" ) ) return("B");
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_CreateTDSeparator - Create a TD for the time separator                     */
/* ------------------------------------------------------------------------------------------- */ 

function FP_RTIME_PRIVATE_CreateTDSeparator (argthisDocument)
{
	var objTimeSeparator                     = argthisDocument.createElement("TD");
		 objTimeSeparator.style.padding       = "0px";
	    objTimeSeparator.innerText           = ":";
	    objTimeSeparator.style.fontWeight    = "bold";
       objTimeSeparator.style.verticalAlign = "middle";

   return(objTimeSeparator); 
}

/* -------------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_GetDefaultAlphaTime - Get the current alphanumeric time to pass as default value  */
/* -------------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RTIME_PRIVATE_GetDefaultAlphaTime(thisObject)
//#else
//# function FP_RTIME_PRIVATE_GetDefaultAlphaTime( thisObject:FP_RTIME_Object )
//#endif 
{
   var objTime      = new Date();
   var objHours     = objTime.getHours();
   var objMinutes   = objTime.getMinutes();
   var objSeconds   = objTime.getSeconds();

   if ( thisObject.uInputAmPmTime ) objHours = FP_RTIME_PRIVATE_ConvToAP(thisObject, objHours.toString());

	var strAlphaTime = FP_RTIME_PRIVATE_HHMMSSLessTen( objHours ) + FP_RTIME_PRIVATE_HHMMSSLessTen( objMinutes ) + FP_RTIME_PRIVATE_HHMMSSLessTen(objSeconds); 

   return(strAlphaTime); 
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_HHMMSSLessTen - Add a zero in front of the hour, min or sec when less than 10 and return as string */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RTIME_PRIVATE_HHMMSSLessTen( argintValue )
//#else
//# function FP_RTIME_PRIVATE_HHMMSSLessTen( argintValue : int )
//#endif 
{
	var strValue = argintValue.toString();

	if ( argintValue < 10 ) strValue = "0" + strValue;

	return(strValue);

}
/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_SetReturnValue - Set the return value of the date in the appropiate format */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RTIME_PRIVATE_SetReturnValue( thisObject )   
//#else
//# function FP_RTIME_PRIVATE_SetReturnValue( thisObject:FP_RTIME_Object )
//#endif 
{
	var flagInputAMPM  = thisObject.uInputAmPmTime;
	var flagOutputAMPM = thisObject.uOutputAmPmTime;

	var strReturnTime  = " ";
	var strReturnHH    = thisObject.HH.value;

	if ( ( flagInputAMPM != flagOutputAMPM ) && ( flagInputAMPM ) )
   {
			strReturnHH = FP_RTIME_PRIVATE_ConvToUTC(thisObject.HH.value, thisObject.uTimeIsAmOrPm );
   }

	if ( ( flagInputAMPM != flagOutputAMPM ) && ( !flagInputAMPM ) )
    {
	   strReturnHH = FP_RTIME_PRIVATE_ConvToAP( thisObject, thisObject.HH.value );
    }

	strReturnTime = strReturnHH.toString() + thisObject.MM.value.toString();

    if ( FP_RTIME_PRIVATE_SetReturnFormat(thisObject) == "A" ) 
	{
			if ( thisObject.uInputFormat == "B" ) 
				{
					strReturnTime += "00";
				}
			else
            {
               strReturnTime += thisObject.SS.value.toString(); 
            }
		}
	
	VF_System.FP_SetNum(thisObject,"uNumericValue",1,parseInt(strReturnTime, 10),0,thisObject.intOccurrence);
	VF_System.FP_Set(thisObject,"uAlphaValue",1,strReturnTime,false,thisObject.intOccurrence);

	if ( thisObject.uSignalChanged ) VF_SY506_PRIVATE_HandleEvent(thisObject,"CHANGED");  

}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_ConvToUTC - Convert the Hour from AMPM to UTC time                         */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RTIME_PRIVATE_ConvToUTC( argstrHH, argstrAMPM )
//#else
//# function FP_RTIME_PRIVATE_ConvToUTC( argstrHH:String, argstrAMPM:String )
//#endif 
{

	var strReturnHH = argstrHH;
   
	switch ( argstrAMPM  )
 
   {
      case "AM":

			if ( argstrHH == "12" ) strReturnHH = "00"; 

         break;

      case "PM":

			if ( argstrHH != "12" ) strReturnHH = parseInt(argstrHH, 10) + 12; 

         break;
   }

   return(strReturnHH);
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RTIME_PRIVATE_ConvToAP - Convert the Hour from UTC to AMPM time                         */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RTIME_PRIVATE_ConvToAP( thisObject, argstrHHValue )
//#else
//# function FP_RTIME_PRIVATE_ConvToAP( thisObject:FP_RTIME_Object, argstrHHValue:String )
//#endif 
{
	var strReturnHH      = argstrHHValue;
	var flagHourGtTwelve = false;

	if ( parseInt(strReturnHH, 10) >= 12 ) flagHourGtTwelve = true;

	switch ( flagHourGtTwelve )

   {
      case true:

			thisObject.uOutputIsAmOrPm = "PM";
			if ( strReturnHH != "12" ) strReturnHH = parseInt(argstrHHValue, 10) - 12; 
         break;

      case false:

			thisObject.uOutputIsAmOrPm = "AM";
			if ( strReturnHH == "00" ) strReturnHH = "12"; 
         break;
   }

	VF_System.FP_Set(thisObject,"uOutputIsAmOrPm",1,thisObject.uOutputIsAmOrPm,false,thisObject.intOccurrence);

   return(strReturnHH);
}

//#ifscript
function FP_RTIME_PRIVATE_ZeroPadding(argintNumericTime)
//#else
//# function FP_RTIME_PRIVATE_ZeroPadding(argintNumericTime:int)
//#endif 
{
	var strTempAlpha = argintNumericTime.toString();
	var intStrLength = strTempAlpha.length;
	var intInd = 6 - intStrLength;

	for (var i = intInd; i > 0; i-- )
	{
		strTempAlpha = "0" + strTempAlpha;
	}

	return strTempAlpha;
}

/* -----------------------------------------------------------------*/
/* FP_RTIME_PRIVATE_Validate - Validate time                        */
/* -----------------------------------------------------------------*/ 

//#ifscript
function FP_RTIME_PRIVATE_Validate(thisObject)
//#else
//# function FP_RTIME_PRIVATE_Validate(thisObject:FP_RTIME_Object) : Boolean 
//#endif 
{
//#ifscript
	var intMaxValue = thisObject.INPUTOnFocus._MAXVALUE;
	var intMinValue = thisObject.INPUTOnFocus._MINVALUE;
//#else
//# var intMaxValue : int = parseInt(VF_System.GetAttribute(thisObject.INPUTOnFocus,"_MAXVALUE"),10);
//# var intMinValue : int = parseInt(VF_System.GetAttribute(thisObject.INPUTOnFocus,"_MINVALUE"),10);
//#endif 
	
   var intValue = parseInt(thisObject.INPUTOnFocus.value, 10);

   thisObject.flagTimeInError = false;

	if ( ( intValue > intMaxValue ) || ( intValue < intMinValue ) || ( isNaN(intValue )) )
      {
         thisObject.flagTimeInError               = true;
         thisObject.INPUTOnFocus.style.background = "#ff61a5"; 
      }
   else
      {
        thisObject.INPUTOnFocus.style.background  = "#ffffff"; 
      }
   
   return(thisObject.flagTimeInError);
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

/* --------------------------------------------------------------- */
/* FP_RTIME_EVENT_HANDLER_Time_onChange - Handle a change on the hours field */
/* --------------------------------------------------------------- */ 
  
function FP_RTIME_EVENT_HANDLER_Time_onChange( argobjEvent )   
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

	var objSourceINPUT = argobjEvent.srcElement;

//#ifscript	
	var thisObject     = objSourceINPUT.objFP_RXXXX;
//#else
//# var thisObject : FP_RTIME_Object = this;
//#endif 

	var strMessage     = " ";

	if ( FP_RTIME_PRIVATE_Validate(thisObject) )
		{
			objSourceINPUT.value = thisObject.KeepValue;
			
			strMessage =  VF_System.MString(44) + objSourceINPUT.name + VF_System.MString(45) + ".   "; 
			strMessage += VF_System.MString(44) + objSourceINPUT.name + VF_System.MString(46) + "."; 

			VF_System.SendClientMessage(strMessage, true, "R");
			window.alert(strMessage);
		}

	else

		{
			if ( ( parseInt(objSourceINPUT.value, 10) < 10 ) && ( objSourceINPUT.value.length < 2) )
            {
					objSourceINPUT.value = "0" + objSourceINPUT.value; 
            }

			FP_RTIME_PRIVATE_SetReturnValue(thisObject);
		}

	return; 
}

/* ------------------------------------------------------------------------- */
/* FP_RTIME_EVENT_HANDLER_Time_onFocus - Handle a onfocus on the hours field */
/* ------------------------------------------------------------------------- */ 
  
function FP_RTIME_EVENT_HANDLER_Time_onFocus( argobjEvent )
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

	var objSourceINPUT = argobjEvent.srcElement;
	
//#ifscript	
	var thisObject     = objSourceINPUT.objFP_RXXXX;
//#else
//# var thisObject : FP_RTIME_Object = this;
//#endif 

	thisObject.INPUTOnFocus = objSourceINPUT;
	thisObject.INPUTOnFocus.select();
	
	thisObject.KeepValue = objSourceINPUT.value;

	return; 
}

/* ----------------------------------------------------------------------------------- */
/* FP_RTIME_EVENT_HANDLER_UpDwButton_onClick - Handle onclick on the Up scrolling button */
/* ----------------------------------------------------------------------------------- */ 
  
function FP_RTIME_EVENT_HANDLER_UpDwButton_onClick( argobjEvent )
{

   argobjEvent.cancelBubble = true;

    if  ( VF_System.flagBusy ) return;

	var objButton  = argobjEvent.srcElement;

//#ifscript	
	var thisObject = objButton.objFP_RXXXX;
//#else
//# var thisObject : FP_RTIME_Object = this;
//#endif 
	
	if ( thisObject.INPUTOnFocus != null )
		{

//#ifscript
           var _MAXVALUE   = thisObject.INPUTOnFocus._MAXVALUE;
           var _MINVALUE   = thisObject.INPUTOnFocus._MINVALUE;
           var intNewValue = parseInt(thisObject.INPUTOnFocus.value, 10) + objButton._INCREMENT;
//#else
//#        var _MAXVALUE   : int = parseInt(VF_System.GetAttribute(thisObject.INPUTOnFocus,"_MAXVALUE"),10);
//#        var _MINVALUE   : int = parseInt(VF_System.GetAttribute(thisObject.INPUTOnFocus,"_MINVALUE"),10);
//#        var _INCREMENT  : int = parseInt(VF_System.GetAttribute(objButton,"_INCREMENT"),10);
//#        var intNewValue : int = parseInt(thisObject.INPUTOnFocus.value, 10) + _INCREMENT;
//#endif 	

         if ( intNewValue > _MAXVALUE) intNewValue = _MAXVALUE;

         if ( intNewValue < _MINVALUE) intNewValue = _MINVALUE;

         if ( intNewValue < 10 ) thisObject.INPUTOnFocus.value = "0" + intNewValue.toString();
         else                    thisObject.INPUTOnFocus.value = intNewValue.toString();

         thisObject.INPUTOnFocus.select();
		
         FP_RTIME_PRIVATE_SetReturnValue(thisObject);

		}
}

/* ----------------------------------------------------------------------------------- */
/* FP_RTIME_EVENT_HANDLER_AMPMButton_onClick - Handle onclick on the AMPM button       */
/* ----------------------------------------------------------------------------------- */ 
  
function FP_RTIME_EVENT_HANDLER_AMPMButton_onClick( argobjEvent )
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

	var objSrcElement = argobjEvent.srcElement;

//#ifscript	
	var thisObject    = objSrcElement.objFP_RXXXX;
//#else
//# var thisObject : FP_RTIME_Object = this;
//#endif 

	if (objSrcElement.innerText == "AM")
		{
			thisObject.uTimeIsAmOrPm = "PM";
		} 
	else
		{
			thisObject.uTimeIsAmOrPm = "AM";
		}

	objSrcElement.innerText = thisObject.uTimeIsAmOrPm;

   if ( ( typeof(thisObject.uOutputIsAmOrPm) != 'undefined' ) && ( thisObject.uOutputIsAmOrPm != null ) )
   {
      VF_System.FP_Set(thisObject,"uOutputIsAmOrPm",1,thisObject.uTimeIsAmOrPm,false,thisObject.intOccurrence);
      VF_System.FP_Set(thisObject,"uTimeIsAmOrPm",1,thisObject.uTimeIsAmOrPm,false,thisObject.intOccurrence);
   }

   if (!VF_System.usingExplorer) { argobjEvent.preventDefault(); }
   return; 
}
  

//#IFNET
//# } 
//#endif 