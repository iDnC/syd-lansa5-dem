/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R D A T E ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic Date       ---------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RDATE_Object extends FP_BASE_Object  
//# { 
//#     var Date    : Object = null;
//#     var flagReadOnly : Boolean = false; 
//#     var flagUseCalendar : Boolean = false; 
//#     var CalendarButton : Object = null;
//#     var uDateFormat : String = "";  
//#     var strReturnFormat : String = ""; 
//#     var strVisDateOutfmt : String = "";
//#     var strVisDateInpfmt : String = "";
//#  	var flagAllowNull : Boolean = false;
//#     var uSignalChanged : Boolean = false;
//#     var strDateHint : String = "";
//#     var flagNumericDate : Boolean = false; 
//#     var VisualInputDate : String = ""; 
//#     var VisualOutputDate : String = "";  
//#     var flagDateInError : Boolean = false; 
//#     var objWorkingDate : Date = null;   
//#     var KeepValue : String = ""; 
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RDATE"] = FP_RDATE_PUBLIC_Create;
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
function FP_RDATE_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#    var thisObject : FP_RDATE_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

//#ifscript
     thisObject.objWorkingDate = new Date();
//#else
//#  thisObject.objWorkingDate = VF_SY001_PRIVATE_MakeDate();
//#endif 
            
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RDATE_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RDATE_PUBLIC_Visualize;   
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
function FP_RDATE_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#    var thisObject : FP_RDATE_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 

   if ( thisObject.Date != null )
      {
         thisObject.Date.detachEvent("onchange", FP_RDATE_EVENT_HANDLER_Date_onChange);   
         thisObject.Date.detachEvent("onfocus", FP_RDATE_EVENT_HANDLER_Date_onFocus);
//#ifscript		        
         thisObject.Date.detachEvent("onblur", FP_RDATE_EVENT_HANDLER_Date_onBlur);
//#else
//#      thisObject.Date.detachEvent("ondeactivate", FP_RDATE_EVENT_HANDLER_Date_onBlur);
//#endif         
         if  ( ( !thisObject.objMainContainer.disabled ) && ( !thisObject.flagReadOnly )  && ( thisObject.flagUseCalendar ) )
            {
               thisObject.CalendarButton.detachEvent("onclick", FP_RDATE_EVENT_HANDLER_CalendarButton_onClick);
               thisObject.CalendarButton.detachEvent("onmouseenter", FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseenter); 
               thisObject.CalendarButton.detachEvent("onmouseleave", FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseleave); 
            }
       }

   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RDATE_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#    var thisObject : FP_RDATE_Object = this;  
//#endif 

   /* Declarations */ 

   var thisDocument = thisObject.objDocument; 

   VF_SY506_PRIVATE_SetupContainer(thisObject,null,null,null);

	var objCaptionContainer = thisObject.objCaptionContainer;

	thisObject.uDateFormat      = thisObject.strReturnFormat = FP_RDATE_PRIVATE_SetFormatLetter(thisObject, "uDateFormat", "H");
	thisObject.strVisDateOutfmt = FP_RDATE_PRIVATE_SetFormatLetter(thisObject, "uVisDateOutfmt", "Q");
	thisObject.strVisDateInpfmt = FP_RDATE_PRIVATE_SetFormatLetter(thisObject, "uVisDateInpfmt", "H");
    thisObject.flagReadOnly     = VF_System.FP_GetBool(thisObject,"uReadOnly",1,"FALSE",thisObject.intOccurrence);
	thisObject.flagAllowNull    = VF_System.FP_GetBool(thisObject,"uAllowNull",1, "FALSE",thisObject.intOccurrence);
	thisObject.flagUseCalendar  = VF_System.FP_GetBool(thisObject,"uUseCalendar",1, "TRUE",thisObject.intOccurrence);
    thisObject.uSignalChanged   = VF_System.FP_GetBool(thisObject,"uSignalChanged",1,"FALSE",thisObject.intOccurrence);
    thisObject.strDateHint      = VF_System.FP_Get(thisObject,"uHint", 1 , null, false,thisObject.intOccurrence);

    var intNumericValue = 0;
    var strAlphaValue = " ";
        
    thisObject.flagNumericDate = true;

//#ifscript
    var intNumericDate = VF_System.FP_GetVariant(thisObject, "uNumericValue",1,thisObject.intOccurrence);
//#else
//# // IN THE CODE BELOW:
//# // FP_GETVARIANTASSTRING IS USED INSTEAD OF FP_GETVARIANT TO GET AROUND THE BUG IN parseFloat
//# // DO NOT CHANGE BACK TO FP_GETVARIANT
//# //
//# var dateAsStr = VF_System.FP_GetVariantasString(thisObject, "uNumericValue",1,thisObject.intOccurrence);
//# var intNumericDate: Object = new Object();
//# intNumericDate.flagFound = false;
//# if(dateAsStr != null)
//# {
//#     intNumericDate.flagFound = true;
//#     intNumericDate.intNumericValue = parseInt(dateAsStr);
//# }
//#endif    

    if ( !intNumericDate.flagFound ) 
    {
       var strAlphaDate = VF_System.FP_GetVariant(thisObject, "uAlphaValue",1,thisObject.intOccurrence);

       if ( !strAlphaDate.flagFound ) 
       {
         if ( !thisObject.flagAllowNull ) 
         {
            strAlphaValue   = FP_RDATE_PRIVATE_GetDefaultAlphaDate(thisObject.uDateFormat);
            intNumericValue = FP_RDATE_PRIVATE_StripCharacters(strAlphaValue);
         }
       }
       else 
       {
          thisObject.flagNumericDate = false;
          strAlphaValue = strAlphaDate.strAlphaValue;
          if (!FP_RDATE_PRIVATE_IsAllBlankOrZero(strAlphaValue)) intNumericValue = FP_RDATE_PRIVATE_StripCharacters(strAlphaValue);
       }
    }
    else
    {
       intNumericValue = intNumericDate.intNumericValue;
       if (intNumericValue > 0 ) strAlphaValue = intNumericValue.toString();
    }

    /* Assume that it is a numeric day without leading zero */
    var intMaxLength = FP_RDATE_PRIVATE_SetMaxLength(thisObject.strVisDateInpfmt);

    if ( (FP_RDATE_PRIVATE_SetMaxLength(thisObject.uDateFormat) - strAlphaValue.length) == 1 ) strAlphaValue = "0" + strAlphaValue;

   thisObject.VisualInputDate  = FP_RDATE_PRIVATE_Convert(strAlphaValue, thisObject.uDateFormat, thisObject.strVisDateInpfmt, thisObject.flagAllowNull);
   thisObject.VisualOutputDate = FP_RDATE_PRIVATE_Convert(strAlphaValue, thisObject.uDateFormat, thisObject.strVisDateOutfmt, thisObject.flagAllowNull);

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

		 if ( ( objCaptionContainer != null ) && ( objCaptionContainer.style.display == "inline" ) && ( !thisObject.flagWAM ) )
			{
            var objCell = thisDocument.createElement("TD");
   			objCell.style.padding = "0px";
				objRow.appendChild( objCell );
				objCell.insertAdjacentElement("afterBegin", objCaptionContainer);
			}

	var objCell = thisDocument.createElement("TD");
		 objCell.style.padding = "0px";
	    objRow.appendChild( objCell ); 

		thisObject.Date                  = FP_RDATE_PRIVATE_CreateInput(thisObject, intMaxLength);
		objCell.appendChild( thisObject.Date);

      /* Create and append the Calendar button depending on property */

		if ( thisObject.flagUseCalendar )
		   {
			   objCell = thisDocument.createElement("TD");
			   objCell.style.padding = "0px";
			   objRow.appendChild( objCell );

			   thisObject.CalendarButton            = thisDocument.createElement("IMG");
			   thisObject.CalendarButton.className = "FP_RDATE_CalendarImg";
  			   thisObject.CalendarButton.src	    = VF_System.ReturnImgSource( VF_System.FP_Get(thisObject,"uCalendarImage",1, "fp_im3681", true, thisObject.intOccurrence) ) + ".gif";

				if  (( !thisObject.objMainContainer.disabled ) && ( !thisObject.flagReadOnly ) )
				{
//#ifscript				
 					     thisObject.CalendarButton.objFP_RXXXX = thisObject; 
//#endif 						  
						 thisObject.CalendarButton.title            = VF_System.MString(108);
						 thisObject.CalendarButton.attachEvent("onclick", FP_RDATE_EVENT_HANDLER_CalendarButton_onClick);
						 thisObject.CalendarButton.attachEvent("onmouseenter", FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseenter); 
						 thisObject.CalendarButton.attachEvent("onmouseleave", FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseleave);
				}

			   objCell.appendChild( thisObject.CalendarButton );
		   }

		if ( thisObject.objMainContainer.style.width == "auto" )	thisObject.objMainContainer.style.width = "45px"; 

		if ( objCaptionContainer == null ) { thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objTableContainer ); } 
      else if ( objCaptionContainer.style.display != "inline" ) 
			  {
               objCaptionContainer.align = "center";
				   objCaptionContainer.insertAdjacentElement("afterEnd", objTableContainer ); 
           }
		else
			{
				thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objTableContainer ); 
			}

      if (!VF_System.usingExplorer) thisObject.objMainContainer.style.display = "table-cell";
      
      /* Validate the date coming from the Server if the field is input capable. The validate routine will set the */
      /* background color and error flag */
      
      if ( !thisObject.flagReadOnly ) FP_RDATE_PRIVATE_Validate(thisObject); 

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
/* FP_RDATE_PRIVATE_CreateInput - Create an INPUT element for the date                   */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RDATE_PRIVATE_CreateInput ( thisObject, argintMaxLength)
//#else
//# function FP_RDATE_PRIVATE_CreateInput ( thisObject:FP_RDATE_Object, argintMaxLength:int):IHTMLElement
//#endif 
{
   var thisDocument = thisObject.objDocument;

   var objDate = thisDocument.createElement("INPUT");

		objDate.value            = thisObject.VisualOutputDate;

//#ifscript		
		objDate.objFP_RXXXX      = thisObject;
//#endif 						  
		
		objDate.name             = VF_System.MString(47);
		objDate.size             = FP_RDATE_PRIVATE_SetSize(thisObject.strVisDateOutfmt); 

		objDate.maxLength        = argintMaxLength;

	   if ( ( thisObject.flagReadOnly ) || ( thisObject.objMainContainer.disabled ) )
		{
         objDate.className       = "FP_RDATE_ReadOnly";
         objDate.contentEditable = false;
         objDate.unselectable    = "on";
		}

      else objDate.style.background = "white";

      objDate.attachEvent("onchange", FP_RDATE_EVENT_HANDLER_Date_onChange);   
      objDate.attachEvent("onfocus", FP_RDATE_EVENT_HANDLER_Date_onFocus);
//#ifscript		        
      objDate.attachEvent("onblur", FP_RDATE_EVENT_HANDLER_Date_onBlur);
//#else
//#   objDate.attachEvent("ondeactivate", FP_RDATE_EVENT_HANDLER_Date_onBlur);    
//#endif
   return(objDate);
}

/* -------------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_GetDefaultAlphaDate - Get the current alphanumeric Date to pass as default value  */
/* -------------------------------------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RDATE_PRIVATE_GetDefaultAlphaDate(arguDateFormat)
//#else
//# function FP_RDATE_PRIVATE_GetDefaultAlphaDate(arguDateFormat):String 
//#endif 
{
//#ifscript
   var objDate     = new Date();
//#else
//# var objDate: Date = VF_SY001_PRIVATE_MakeDate();
//#endif   
   var objDay      = objDate.getDate();
   var objMonth    = objDate.getMonth() + 1;
   var objFullYear = objDate.getFullYear();

   if ( objDay < 10 ) objDay = "0" + objDay.toString();
   
   if ( objMonth < 10 ) objMonth = "0" + objMonth.toString();

   var strAlphaDate = objDay.toString() + objMonth.toString() + objFullYear.toString();

   var strReturnAlphaDate = FP_RDATE_PRIVATE_Convert(strAlphaDate, "H", arguDateFormat, false);

   return(strReturnAlphaDate);
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_StripCharacters - Strip non numeric characters from date to use as numeric */
/* ------------------------------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RDATE_PRIVATE_StripCharacters( argstrDate )
//#else
//# function FP_RDATE_PRIVATE_StripCharacters( argstrDate:String ):int
//#endif 
{
	if (( argstrDate == "" ) || (argstrDate == " ")) return(0);

   var strValue       = argstrDate;
   var intValueLength = strValue.length;
   var intLoopIndex   = 0;
   var strKeepValue   = "";

   var strChar        = " ";

   for ( intLoopIndex = 0; intLoopIndex < intValueLength; intLoopIndex++ )
   {
      strChar = strValue.charAt(intLoopIndex);
      if ( !isNaN (strChar) ) strKeepValue += strChar;
   }

   return(parseInt(strKeepValue, 10));
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_IsAllBlankOrZero - Find out whether a string contains only blank characters     */
/* ------------------------------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RDATE_PRIVATE_IsAllBlankOrZero( argstrDate )
//#else
//# function FP_RDATE_PRIVATE_IsAllBlankOrZero( argstrDate:String ):Boolean
//#endif 
{

//#ifscript
   var strValue       = argstrDate;
   var intValueLength = strValue.length;
//#else
//# var strValue : String = argstrDate;
//# var intValueLength : int = strValue.length;
//#endif 

   if ( argstrDate == 0 ) return (true);

   for ( var intLoopIndex = 0; intLoopIndex < intValueLength; intLoopIndex++ )
   {
      if ( strValue.charAt(intLoopIndex) != " " ) return(false);
   }

   return(true);
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_Convert - Routine to return a converted date                               */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RDATE_PRIVATE_Convert( argstrValue, argstrFromFormat, argstrToFormat, argflagAllowNull )
//#else
//# function FP_RDATE_PRIVATE_Convert( argstrValue:String, argstrFromFormat:String, argstrToFormat:String, argflagAllowNull:Boolean )
//#endif 
{
   
   if ( ( argflagAllowNull ) && ( FP_RDATE_PRIVATE_IsAllBlankOrZero(argstrValue) ) )  return ( argstrValue );

   else return( VF_System.ConvertDate(argstrValue, argstrFromFormat, argstrToFormat) );
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_SetDateValues - Set changed Date values                                   */
/* ------------------------------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RDATE_PRIVATE_SetDateValues(thisObject, argstrDateValue)
//#else
//# function FP_RDATE_PRIVATE_SetDateValues(thisObject:FP_RDATE_Object, argstrDateValue:String)
//#endif 
{

//#ifscript  
   var strAlphaValue   = " ";
   var intNumericValue = 0;
//#else
//#   var strAlphaValue : String  = " ";
//#   var intNumericValue : int = 0;
//#endif 

   /* The input format becomes the return format */

   if ( !FP_RDATE_PRIVATE_IsAllBlankOrZero (argstrDateValue) )
   {
      strAlphaValue = FP_RDATE_PRIVATE_Convert(argstrDateValue, thisObject.strVisDateInpfmt, thisObject.strReturnFormat, thisObject.flagAllowNull); 
   }


   if ( !thisObject.flagNumericDate ) VF_System.FP_Set(thisObject,"uAlphaValue",1,strAlphaValue,false,thisObject.intOccurrence);

   else VF_System.FP_SetNum(thisObject,"uNumericValue",1,FP_RDATE_PRIVATE_StripCharacters( strAlphaValue ),0,thisObject.intOccurrence);

   VF_System.FP_SetBool(thisObject,"uChanged",1,"TRUE",thisObject.intOccurrence);

   if ( thisObject.uSignalChanged ) VF_SY506_PRIVATE_HandleEvent(thisObject,"CHANGED");

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

/* -----------------------------------------------------------------*/
/* FP_RDATE_PRIVATE_Validate - Validate date                        */
/* -----------------------------------------------------------------*/ 

//#ifscript  
function FP_RDATE_PRIVATE_Validate(thisObject)
//#else
//# function FP_RDATE_PRIVATE_Validate(thisObject:FP_RDATE_Object)
//#endif 
{

   if ( ( thisObject.flagAllowNull ) && ( FP_RDATE_PRIVATE_IsAllBlankOrZero(thisObject.VisualInputDate) ) ) 
   {   
      thisObject.Date.style.background  = "#fff"; 
      return(false);
   }

   var strAlphaValue = FP_RDATE_PRIVATE_Convert(thisObject.VisualInputDate, thisObject.strVisDateInpfmt, "H", false);

   var intDay   = parseInt(strAlphaValue.substr(0, 2), 10);
   var intMonth = parseInt(strAlphaValue.substr(2, 2), 10);
   var intYear  = parseInt(strAlphaValue.substr(4, 4), 10);

   var intMaxDay    = 0;

   intMaxDay = FP_RDATE_PRIVATE_Max_Day(intMonth, intYear);  

   if( isNaN(intDay) || (intDay <= 0) || (intDay > intMaxDay) )
      { 
         thisObject.flagDateInError       = true;
         thisObject.Date.style.background = "#ff61a5"; 
      }
   else if( isNaN(intMonth) || (intMonth <= 0) || (intMonth > 12))
      { 
         thisObject.Date.style.background = "#ff61a5"; 
         thisObject.flagDateInError = true;
      }
   else if( isNaN(intYear) || (intYear <= 0))
      { 
         thisObject.Date.style.background = "#ff61a5"; 
         thisObject.flagDateInError = true;
      } 
   else
      {
        thisObject.Date.style.background  = "#fff"; 
        thisObject.flagDateInError = false;
      }

   return(thisObject.flagDateInError);
}

/* --------------------------------------------------------------- */
/* FP_RDATE_EVENT_HANDLER_Date_onChange - Handle a change on the hours field */
/* --------------------------------------------------------------- */ 

function FP_RDATE_EVENT_HANDLER_Date_onChange( argobjEvent )   
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

   var objSourceINPUT = argobjEvent.srcElement;

//#ifscript
      var thisObject = objSourceINPUT.objFP_RXXXX;
//#else
//#   var thisObject : FP_RDATE_Object = this;
//#endif 

   if ( FP_RDATE_PRIVATE_IsAllBlankOrZero( objSourceINPUT.value ) ) 
   {
      if ( objSourceINPUT.value != 0 ) objSourceINPUT.value = " ";
   }

   thisObject.VisualInputDate = objSourceINPUT.value;

   if ( !FP_RDATE_PRIVATE_Validate(thisObject) )

		{
         thisObject.VisualOutputDate = FP_RDATE_PRIVATE_Convert(objSourceINPUT.value, thisObject.strVisDateInpfmt, thisObject.strVisDateOutfmt, thisObject.flagAllowNull);
         FP_RDATE_PRIVATE_SetDateValues(thisObject, objSourceINPUT.value);
		}

	else

		{
         objSourceINPUT.value = thisObject.KeepValue;
         objSourceINPUT.focus();
         objSourceINPUT.select();

			var strMessage =  VF_System.MString(44) + objSourceINPUT.name + VF_System.MString(45) + ".   "; 
			    strMessage += VF_System.MString(44) + objSourceINPUT.name + VF_System.MString(46) + "."; 
			VF_System.SendClientMessage(strMessage, true, "R");
		}

   return; 
}

/* ------------------------------------------------------------------------- */
/* FP_RDATE_EVENT_HANDLER_Date_onFocus - Handle a onfocus on the hours field */
/* ------------------------------------------------------------------------- */ 
  
function FP_RDATE_EVENT_HANDLER_Date_onFocus( argobjEvent )
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

   var objSourceINPUT = argobjEvent.srcElement;

//#ifscript   
   var thisObject     = objSourceINPUT.objFP_RXXXX;
//#else
//#   var thisObject : FP_RDATE_Object = this;
//#endif 

   if ( !thisObject.flagReadOnly ) 
      {
         objSourceINPUT.value = thisObject.VisualInputDate;
         objSourceINPUT.select();
      }
   
   thisObject.KeepValue = objSourceINPUT.value;

	return; 
}

/* ------------------------------------------------------------------------- */
/* FP_RDATE_EVENT_HANDLER_Date_onBlur - Handle onblur on the hours field */
/* ------------------------------------------------------------------------- */ 
  
function FP_RDATE_EVENT_HANDLER_Date_onBlur( argobjEvent )
{
   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

	var objSourceINPUT = argobjEvent.srcElement;

//#ifscript	
	var thisObject     = objSourceINPUT.objFP_RXXXX;
//#else
//#   var thisObject : FP_RDATE_Object = this;
//#endif 

   if ( thisObject.flagDateInError ) 
      {
         if ( FP_RDATE_PRIVATE_Validate(thisObject) ) thisObject.VisualInputDate = thisObject.KeepValue;
      }

   objSourceINPUT.value = thisObject.VisualOutputDate;

	return; 
}

/* ----------------------------------------------------------------------------------- */
/* FP_RDATE_EVENT_HANDLER_CalendarButton_onClick - Handle onclick on the Calendar button */
/* ----------------------------------------------------------------------------------- */ 
  
function FP_RDATE_EVENT_HANDLER_CalendarButton_onClick( argobjEvent )
{

   argobjEvent.cancelBubble = true;

   if  ( VF_System.flagBusy ) return;

   var objSourceINPUT =  argobjEvent.srcElement;
//#ifscript   
   var thisObject     = argobjEvent.srcElement.objFP_RXXXX;
//#else
//#   var thisObject : FP_RDATE_Object = this;
//#endif 
 
   var strDateValue   = " ";

   if ( ( thisObject.flagAllowNull ) && ( FP_RDATE_PRIVATE_IsAllBlankOrZero(thisObject.VisualInputDate) ) ) 
   {   
      strDateValue = FP_RDATE_PRIVATE_GetDefaultAlphaDate("J");
   }
   else
   {
      strDateValue = FP_RDATE_PRIVATE_Convert(thisObject.VisualInputDate, thisObject.strVisDateInpfmt, "J", false);
   }
    
   thisObject.objWorkingDate.setDate(strDateValue.substr(6, 2));
   thisObject.objWorkingDate.setMonth(strDateValue.substr(4 , 2) - 1);
   thisObject.objWorkingDate.setFullYear(strDateValue.substr(0 , 4));

//#ifscript
   var strCalendarCoordinates = " dialogLeft:" + argobjEvent.screenX + "px;" + " dialogTop:" + argobjEvent.screenY + "px;"; 
   var objDate = VF_System.objVF_UM036.ShowCalendar(thisObject.objWorkingDate, strCalendarCoordinates);

   /* Detect and fix an IE9 problem with dates that causes the FP_RDATE pop up to freeze.  */
   /* The error is: SCRIPT5011 -  Can't execute code from a freed script                   */
   /* IE9 regards the date object as corrupted after it has been passed as an object to vf_um036 and back */
   /* This method reconstitutes the date object from the original corrupt object, if necessary */
   objDate = FP_RDATE_PRIVATE_getValidDate(objDate);

//#else
//# var coordinate: Point = new Point(argobjEvent.screenX, argobjEvent.screenY);
//# var objDate = VF_System.objVF_UM036.ShowCalendar(thisObject.objWorkingDate, coordinate, this.DateSelectedHandler, objSourceINPUT);
//# }
//# function DateSelectedHandler(date: Object, parameters: Object)
//# {
//#   var objDate: Date = date;
//#   var thisObject: FP_RDATE_Object = this;
//#   var objSourceINPUT = parameters;
//#endif
   
   if (objDate == null) return;

   var objDay      = objDate.getDate();
   var objMonth    = objDate.getMonth() + 1;
   var objFullYear = objDate.getFullYear();

	if ( objDay < 10 ) objDay = "0" + objDay.toString();
	if ( objMonth < 10 ) objMonth = "0" + objMonth.toString();

	var strAlphaDate = objDay.toString() + objMonth.toString() + objFullYear.toString();

   thisObject.VisualInputDate  = FP_RDATE_PRIVATE_Convert(strAlphaDate, "H", thisObject.strVisDateInpfmt, false);
   thisObject.VisualOutputDate = FP_RDATE_PRIVATE_Convert(strAlphaDate, "H", thisObject.strVisDateOutfmt, false);
   objSourceINPUT.value        = thisObject.VisualOutputDate;

   FP_RDATE_PRIVATE_SetDateValues(thisObject, thisObject.VisualInputDate);

   thisObject.Date.focus();

   return; 
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_SetFormatLetter - Set the Input format as a letter                    */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RDATE_PRIVATE_SetFormatLetter ( thisObject, argstrFormat, argstrDefault )
//#else
//# function FP_RDATE_PRIVATE_SetFormatLetter ( thisObject:FP_RDATE_Object, argstrFormat:String, argstrDefault:String )
//#endif 
{
   var strFormat = VF_System.FP_Get(thisObject,argstrFormat,1, argstrDefault, true, thisObject.intOccurrence);

   if ( strFormat.length == 1 ) return(strFormat); 

   if ( ( strFormat == "SYSTEM" ) || ( strFormat == "SYSFMT" ) ) return("A");

	else if ( strFormat == "DDMMYY" ) return("B");

	else if ( strFormat == "DD/MM/YY" ) return("C");

	else if ( strFormat == "YYMMDD" ) return("D");

	else if ( strFormat == "YY/MM/DD" ) return("E");

	else if ( strFormat == "MMDDYY" ) return("F");

	else if ( strFormat == "MM/DD/YY" ) return("G");

	else if ( strFormat == "DDMMYYYY" ) return("H");

	else if ( strFormat == "DD/MM/YYYY" ) return("I");

	else if ( strFormat == "YYYYMMDD" )  return("J");

	else if ( strFormat == "YYYY/MM/DD" ) return("K");

	else if ( strFormat == "MMDDYYYY" )  return("L");

	else if ( strFormat == "MM/DD/YYYY" ) return("M");

	else if ( strFormat == "DDMMMYY" ) return("N");

	else if ( strFormat == "DDMMMYYYY" ) return("O");

	else if ( strFormat == "DDD" ) return("R");

	else if ( strFormat == "DDDDDDDDD" ) return("S");

	else if ( strFormat == "DDDDDDDDDD" ) return("T");

	else if ( strFormat == "MMMMMMMMMM" ) return("U");

	else if ( ( strFormat == "SYSTEM8" )  || ( strFormat == "SYSFMT8" ) ) return("V");

	else if ( strFormat == "YYMM" ) return("W");

	else if ( strFormat == "MMYY" ) return("X");

	else if ( strFormat == "YYYYMM" ) return("Y");

	else if ( strFormat == "MMYYYY" )  return("Z");

	else if (( strFormat == "ISO" ) || ( strFormat == "YYYY-MM-DD" )) return("ISO");

   else return("B");
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_SetSize - Set the Size of the INPUT date                                  */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RDATE_PRIVATE_SetSize( argstrFormat )
//#else
//# function FP_RDATE_PRIVATE_SetSize( argstrFormat:String ) : int
//#endif 
{

//#ifscript
	var strFormat = argstrFormat;
	var intSize = 6;
//#else
//# var strFormat:String = argstrFormat;
//# var intSize:int = 6;
//#endif 

   if ( ( strFormat == "P" ) || ( strFormat == "Q" ) || ( strFormat == "R" ) || ( strFormat == "S" ) || ( strFormat == "T" ) || ( strFormat == "U" ))
	{
		intSize = 26;
	}

	else if ( ( strFormat == "H" ) || ( strFormat == "I" ) || ( strFormat == "J" ) || ( strFormat == "ISO" ) 
											 || ( strFormat == "K" ) || ( strFormat == "L" ) || ( strFormat == "M" ) 
											 || ( strFormat == "V" ) || ( strFormat == "O" ) || ( strFormat == "V" ))

	{
		intSize = 10;
	
	}

   return(intSize); 
}

/* ------------------------------------------------------------------------------------------- */
/* FP_RDATE_PRIVATE_SetMaxLength - Set the Maxlength of the INPUT date                         */
/* ------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RDATE_PRIVATE_SetMaxLength( argstrFormat )
//#else
//# function FP_RDATE_PRIVATE_SetMaxLength( argstrFormat:String ) : int
//#endif 
{

	var intMaxLength = 8;
	var strFormat = argstrFormat;

   if ( ( strFormat == "A" ) || ( strFormat == "B" ) || ( strFormat == "D" ) || ( strFormat == "F" ) || ( strFormat == "Y" ) || ( strFormat == "Z" ))
	{
		intMaxLength = 6; 
	}

	else if ( ( strFormat == "I" ) || ( strFormat == "K" ) || ( strFormat == "M" ) )
	{
		intMaxLength = 10;
	}
	else if ( ( strFormat == "W" ) || ( strFormat == "X" ) )
	{
		intMaxLength = 4;
	}
   
   return(intMaxLength); 
}

/* -------------------------------------------------------------------------*/
/* FP_RDATE_EVENT_HANDLER_CalendarButton_onmousedown - Change image borders */
/* -------------------------------------------------------------------------*/ 

function FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseenter(argobjEvent)
{
	argobjEvent.srcElement.className = "FP_RDATE_CalendarImgEnter";
}

/* -------------------------------------------------------------------------*/
/* FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseleave - Change image borders */
/* -------------------------------------------------------------------------*/ 

function FP_RDATE_EVENT_HANDLER_CalendarButton_onmouseleave(argobjEvent)
{
   argobjEvent.srcElement.className = "FP_RDATE_CalendarImg";
}

/* -----------------------------------------------------------------*/
/* FP_RDATE_PRIVATE_Max_Day - Calculate Days in the month          */
/* -----------------------------------------------------------------*/ 

function FP_RDATE_PRIVATE_Max_Day(argintMonth, argintYear)
{
   var intMonth = argintMonth;
   var intYear  = argintYear;
   var intDaysInMonth;
   
   if((intMonth == 4) || (intMonth == 6) || (intMonth == 9) || (intMonth == 11)) intDaysInMonth = 30;

   else if(intMonth == 2) intDaysInMonth = FP_RDATE_PRIVATE_IsLeapYear(intYear) ? 29 : 28;

   else intDaysInMonth = 31;
   
   return intDaysInMonth; 
}

/* -----------------------------------------------------------------*/
/* FP_RDATE_PRIVATE_IsLeapYear - Determing whether year is a leap year */
/* -----------------------------------------------------------------*/ 

//#ifscript
function FP_RDATE_PRIVATE_IsLeapYear(argintYear)
//#else
//# function FP_RDATE_PRIVATE_IsLeapYear(argintYear:int):Boolean
//#endif 
{
   if ( ( ( argintYear % 4 ) == 0 ) && ( ( argintYear % 100 )!=0 ) || ( ( argintYear % 400) == 0 ) ) return (true);
   
   return false;
}

/* -----------------------------------------------------------------*/ 

//#IFNET
//# } 
//#endif 

/* -----------------------------------------------------------------*/
/* FP_RDATE_PRIVATE_getValidDate - detect and fix IE9 problem with the Date object */
/* -----------------------------------------------------------------*/ 

//#ifscript
function FP_RDATE_PRIVATE_getValidDate(argDate)
{
    try {
        argDate.getHours();
        return argDate;
    } catch (e) {
        return new Date(argDate);
    }
}
//#endif 

