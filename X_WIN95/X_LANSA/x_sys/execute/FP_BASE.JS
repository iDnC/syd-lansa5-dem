//#IFNET

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------- FP_BASE_Object  ------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

class HTML_Extension
{
var sExtensionName:String = "";
}

class HTML_Extender
{
var iNextExtension : int = 0;
var aExtensions: Hashtable = new Hashtable;

function PutExtension(oHTMLElement:IHTMLElement,oExtension:HTML_Extension):void
{
this.iNextExtension++;
oExtension.sExtensionName = "E_" + this.iNextExtension.toString();
this.aExtensions.Add(oExtension.sExtensionName,oExtension);
oHTMLElement.setAttribute("__EXTENSION",oExtension.sExtensionName,0);
}

function GetExtension(oHTMLElement:IHTMLElement):HTML_Extension
{
if (oHTMLElement == null) return(null);
var oExtensionName : Object = oHTMLElement.getAttribute("__EXTENSION");
if (oExtensionName == null) return(null);
var oExtension : HTML_Extension = this.aExtensions[oExtensionName.toString()];
return ( oExtension );
}

function DropExtensions():void
{
this.aExtensions.Clear();
}

}

/* ----------------------------------------------------------------------- */
/* This object tracks individual HTML elements associated with a fast part */
/* ----------------------------------------------------------------------- */

class FP_BASE_Association
{
var objFP_RXXXX       : FP_BASE_Object;
var oAssociatedObject : Object;
var intItem           : int;
var intOccurrence     : int;
var struSelectShowValue : String;
var intUseHiddenKeyoccurrence : int;
}

/* --------------------------------------------------------------------- */
/* This object defines an occurence of a fast part                       */
/* --------------------------------------------------------------------- */

class FP_BASE_Object
{
var strFP_Class : String = "";
var strFP_Name  : String = ""
var intUHiddenKeyCount : int = -1;
var arraystrUSelectHiddenKey : Array = null;
var strFP_WebComponent : String = "";
var strFP_WebRoutine : String   = "";
var strFP_WEBRoutineUniqueInstanceID : String = "";
var flagWAM : Boolean = false;
var thisObject : FP_BASE_Object = null;
var thisObjectID : int = 0;
var objVF_Main_DIV : Object = null;
var objVF_Main_TABLE : Object = null;
var objArrivedListDIV : Object = null;
var  objFP_RXXXX : FP_BASE_Object = null;
var intOccurrence : int = 0;

var intthisObjectID : int = 0;  /* Not all fast parts use this option */

var objDocument   : Object = null; /* The raw IHTMLDocument element */
var IFrame        : VLF.VF_WB001_iframeinterface = null;

var objVF_SY503   : VLF.VF_SY503_Object = null;
var objMainContainer : Object    = null;
var objCaptionContainer : Object = null;
var objWorkContainer : Object    = null;
var objCurrentlySelectedElement : Object = null;
var flagAllowMultipleSelection : Boolean = false;
var flagCodeTableAvailable : Boolean = false;
var objVF_FP021 : VF_FP021_Object = null;
var flagTryCodeTable : Boolean = false;
var arrayAssociations : ArrayList = new ArrayList(); /* Array of associated FP_BASE_Association */

function Create() { }
function Visualize() { }
function Destroy() { }

function AddAssociatedObject(oForAssociatedObject:Object,iItem:int) : FP_BASE_Association
{
var oNew : FP_BASE_Association = this.GetAssociatedObjectInfo(oForAssociatedObject);
if (oNew == null)
{
oNew = new FP_BASE_Association();
oNew.objFP_RXXXX = this;
oNew.oAssociatedObject = oForAssociatedObject;
this.arrayAssociations.Add(oNew);
}
oNew.intItem = iItem;
return(oNew);
}

function DropAssociatedObjects():void
{
var oBaseAssociation : FP_BASE_Association = null;
var iLimit : int = this.arrayAssociations.Count;
var iIndex : int;
for (iIndex = 0; iIndex < iLimit; iIndex++) 
            {    
                   oBaseAssociation = this.arrayAssociations[iIndex]; 
                   oBaseAssociation.oAssociatedObject = null; 
                   oBaseAssociation.objFP_RXXXX = null; 
            }
            this.arrayAssociations.Clear();
            return;
        }

        function GetAssociatedObjectInfo (oLocateObject:Object) : FP_BASE_Association
        {
            var oBaseAssociation : FP_BASE_Association = null;
            var iLimit : int = this.arrayAssociations.Count;
            var iIndex : int;

            for (iIndex = 0; iIndex < iLimit; iIndex++) 
            {
               oBaseAssociation = this.arrayAssociations[iIndex];
               if (oBaseAssociation.oAssociatedObject == oLocateObject) return(oBaseAssociation);
            }
            return(null);
                                             
        }
                                  
/* --------------------------------------------------------------------- */

}

                                  
/* --------------------------------------------------------------------- */
                                
                                  
//#ENDIF