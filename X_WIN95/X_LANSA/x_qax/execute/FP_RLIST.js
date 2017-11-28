/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R L I S T  ---------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------------  Create and manage Lists  --------------------  */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_ItemNode - Create a Node object                      */
/* --------------------------------------------------------------------- */ 

//#ifNET
//# class FP_RLIST_HTML_Extension extends HTML_Extension    
//# {
//#   var objCellBeingEdited : Object = null;  /* Checked */
//#   var SelectArea : Object = null;          /* Checked */
//#   var strAlternateColor : String = "";     /* Checked */ 
//#   var thisObject : FP_RLIST_Object = null; /* Checked */ 
//#   var intItemLevel : int;                  /* Checked */ 
//#   var intRowItemNumber : int;              /* Checked */  
//#   var strToggleStatus : String = "";       /* Checked */   
//#   var arrayCellDIVs : Array = null;        /* Checked */ 
//#   var intRowStoredNumber : int;            /* Checked */
//#   var DivType : String = "";               /* Checked */ 
//#   var ReadOnly : Boolean = true;           /* Checked */    
//#   var AlphaValue : Boolean;                /* Checked */    
//#   var BlankZero : Boolean;                 /* Checked */ 
//#   var _INPUTATTRS : String = "";           /* Checked */  
//#   var uInError : Boolean;                  /* Checked */  
//#   var arraySortImages : Array = null;      /* Checked */ 
//#   var flagBusy = false;                    /* Checked */
//#   var objPlusImage : Object = null; 
//#   var objMinusImage : Object = null;  
//# }
//#endif  

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_Cell  - a cell                                       */
/* --------------------------------------------------------------------- */ 

//#ifNET
//# class FP_RLIST_PRIVATE_Cell  
//# {
//#   var ReadOnly : Boolean;                   
//#   var AlphaValue : Boolean; 
//#   var BlankZero : Boolean; 
//#   var SpecifiedType : String; 
//#   var Value : String; 
//#   var tabIndex : int; 
//# } 
//#endif  


/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_ItemNode - Create a Node object                      */
/* --------------------------------------------------------------------- */ 

//#ifNET
//# class FP_RLIST_PRIVATE_ItemNode  
//# {
//#    var arrayChildNodes : Array = null; 
//#    var arrayCells : Array = null; 
//#    var intItemNumber : int; 
//#    var intRowStoredNumber : int; 
//#    var Changed : Boolean; 
//#    var strSmallImage : String;
//#    var intParentItem : int; 
//#    var strSiblingType : String;
//#endif  

//#ifscript  
function FP_RLIST_PRIVATE_ItemNode( thisObject, argintItem )
//#else
//# function FP_RLIST_PRIVATE_ItemNode( thisObject:FP_RLIST_Object, argintItem:int )
//#endif 
{

   this.arrayChildNodes = new Array();
   this.arrayCells      = new Array();
   this.arrayCells[0]   = null;
   this.intItemNumber   = argintItem;
   this.intRowStoredNumber = argintItem;   
   this.Changed         = false; 
   this.strSmallImage   = VF_System.FP_Get(thisObject,"uItem.SmallImage",argintItem + 1," ",false,thisObject.intOccurrence);
   this.intParentItem   = VF_System.FP_GetNum(thisObject,"uItem.ParentItem",argintItem + 1,true, 0,thisObject.intOccurrence);

   /* If there is a small image for the item (row), set a thisObject property to retrieve in other parts of the code */
   /* The presence of the image has an impact on the sizing of the list and cell as well as row styles, and column sorting */

   if ( this.strSmallImage != " " ) thisObject.flagItemSmallImage = true; 
}

//#ifNET
//# }
//#endif  


/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_Column - Create a Column object                      */
/* --------------------------------------------------------------------- */ 
//#ifNET
//# class FP_RLIST_PRIVATE_Column  
//# {
//#    var strCaption : String = "";  
//#    var strImage : String = "";  
//#    var flagSortOnClick : Boolean = false;  
//#    var strCaptionAlign : String = "";  
//#    var strAlign : String = "";  
//#    var intPrecision : int = 0;  
//#    var strInputAttributes : String = "";  
//#    var flagCheckboxes : Boolean = false;  
//#    var flagShowThousands : Boolean = false;  
//#    var flagShowCurrency : Boolean = false;  
//#    var strCurrencyChar : String = "";  
//#    var strColumnWidth : String = "";  
//#endif 

//#ifscript
function FP_RLIST_PRIVATE_Column(thisObject, argintColumn)
//#else
//# function FP_RLIST_PRIVATE_Column(thisObject:FP_RLIST_Object, argintColumn:int)
//#endif 
{
   var strColumn  = "Column" + argintColumn.toString() + ".";

   this.strCaption         = VF_System.FP_Get(thisObject,strColumn + "uCaption",1," ", false,thisObject.intOccurrence);
   this.strImage           = VF_System.FP_Get(thisObject,strColumn + "uImage",1," ", true, thisObject.intOccurrence);
   this.flagSortOnClick    = VF_System.FP_GetBool(thisObject,strColumn + "uSortOnClick",1,"FALSE",thisObject.intOccurrence);
   this.strCaptionAlign    = VF_System.FP_Get(thisObject,strColumn + "uCaptionAlign",1,"LEFT", true, thisObject.intOccurrence);
   this.strAlign           = VF_System.FP_Get(thisObject,strColumn + "uAlign",1,"left", false, thisObject.intOccurrence);
   this.intPrecision       = VF_System.FP_GetNum(thisObject,strColumn + "uPrecision",1,true, 0, thisObject.intOccurrence);
   this.strInputAttributes = VF_System.FP_Get(thisObject,strColumn + "uInputAttributes",1,"",false, thisObject.intOccurrence);
   this.flagCheckboxes     = VF_System.FP_GetBool(thisObject,strColumn + "uCheckboxes",1,"FALSE",thisObject.intOccurrence);
   this.flagShowThousands  = VF_System.FP_GetBool(thisObject,strColumn + "uShowThousands",1,"FALSE",thisObject.intOccurrence);
   this.flagShowCurrency   = VF_System.FP_GetBool(thisObject,strColumn + "uShowCurrency",1,"FALSE",thisObject.intOccurrence);
   this.strCurrencyChar    = VF_System.FP_Get(thisObject,strColumn + "uCurrencyChar",1,"$", false, thisObject.intOccurrence);
   
   /* Indicates whether the numeric values of this column need to be added and shown in cell with SpecifiedType = "T" */
   /* this.flagSUM           = VF_System.FP_GetBool(thisObject,strColumn + "uSum",1,"FALSE"); */
   
   /* get the units ("px" or "%" ) in which the width of the columns is specified */

   var strColumnWidthUnit = thisObject.strColumnWidthUnit;

   var strListWidth       = thisObject.strListWidth;

   if ( thisObject.intColumnCount == 1 ) this.strColumnWidth = strListWidth;
   else if ( strColumnWidthUnit == "px" ) this.strColumnWidth = VF_System.FP_GetNum(thisObject, strColumn + "uColumnWidth",1,true,120,thisObject.intOccurrence).toString() + "px";
   else
   {
      var intPercentageWidth = VF_System.FP_GetNum(thisObject, strColumn + "uColumnWidth",1,true,0,thisObject.intOccurrence);
//#ifscript      
      this.strColumnWidth    = FP_RLIST_PRIVATE_CalculatePercemtWidth(intPercentageWidth , strListWidth).toString() + "px";
//#else
//#   this.strColumnWidth    = FP_RLIST_Object.FP_RLIST_PRIVATE_CalculatePercemtWidth(intPercentageWidth , strListWidth).toString() + "px";
//#endif       
   }
   
}


//#ifNET
//# }
//#endif 



//#ifNET
//# class FP_RLIST_Object extends FP_BASE_Object 
//# {
//#     var arrayAllItems : Array = null;
//#     var strVisualizeListAs : String;   
//#     var flagSignalSelection : Object;  
//#     var intImageWidth : int;  
//#     var objListContainer : Object;  
//#     var flagItemSmallImage : Boolean;  
//#     var uEnabled : Boolean;  
//#     var arrayColumns : Array = null;  
//#     var intItemCount : int;  
//#     var objSelectedItemDIV : Object;  
//#     var intColumnCount : int;  
//#     var intTopLevelParents : int;  
//#     var intColWidthRemainder : int;  
//#     var strColumnWidthUnit : String;  
//#     var strRowPixelHeight : String;  
//#     var flagShowLines : Boolean;  
//#     var objColumnClicked : Object;  
//#     var objCurrentSortImg : Object;  
//#     var arraySelectedRows : Array = null;  
//#     var arraySelectedRowsByNumber : Array = null;  
//#     var objCurrentSelectedRow : Object;  
//#     var uShowExpanded : Boolean;  
//#     var arrayTotalCells : Array = null;  
//#     var strSelectionStyle : String;  
//#     var intScrollBarWidth : int;  
//#     var strCurrentSortOrder : String; 
//#     var strListHeight : String; 
//#     var strListWidth  : String; 
//#     var intLevelSignalSelection : int; 
//#     var flagColumnHeaders : Boolean; 
//#     var arrayColumnHeaders : Array = null; 
//#     var strColumnHeaderHeight : String; 
//#     var intTotColWidth : int; 
//#     var strKeyPressed : String; 
//#     var oHTMLExtender : HTML_Extender = new HTML_Extender(); 
//#     var intCurrentLevel : int = 0; 
//#     var arrayLevelImages : Array  = null;
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RLIST"] = FP_RLIST_PUBLIC_Create;
//#endif 

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --  C O N S T R U C T O R,  D E S T R U C T O R  &  V I S U A L I Z E R --- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */


//#ifscript
function FP_RLIST_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RLIST_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */
   
   /* Create store to hold every single List items */
   
   thisObject.arrayAllItems   = new Array();
   thisObject.intCurrentLevel = 0; 

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RLIST_PUBLIC_Destroy;   
   thisObject.Visualize = FP_RLIST_PUBLIC_Visualize;   
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
function FP_RLIST_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RLIST_Object = this;  
//#endif 

   /* Destroy any details and free any resources */ 
   
   switch ( thisObject.strCurrentSortOrder )
   {
      case "ASCENDING":
      VF_System.FP_Set(thisObject, "uSortColumnOrder", 1, "DESCENDING", false, thisObject.intOccurrence); 
      break;

      case "DESCENDING":
      VF_System.FP_Set(thisObject, "uSortColumnOrder", 1, "ASCENDING", false, thisObject.intOccurrence); 
      break;
   }

   thisObject.arrayAllItems = null;  

//#ifnet
//#   this.oHTMLExtender.DropExtensions(); 
//#endif


   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript 
function FP_RLIST_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RLIST_Object = this;  
//#endif 

   /* Declarations */ 

   var thisDocument = thisObject.objDocument;
   var objList = null;  

   /* Set up the container */
   
   VF_SY506_PRIVATE_SetupContainer (thisObject,"NONE",null,null);

   FP_RLIST_PRIVATE_SetThisObjectProperties(thisObject);

   /* Build the node structure of the list */

   FP_RLIST_PRIVATE_BuildNodeStructure(thisObject);

   switch (thisObject.strVisualizeListAs)
   {

      case "LARGEICON":

            objList = FP_RLIST_PRIVATE_BuildLargeIcon(thisObject);
            break;

      case "TREE":

            thisObject.intLevelSignalSelection = 0;

            if ( typeof thisObject.flagSignalSelection == "number" ) 
            {
               thisObject.intLevelSignalSelection = thisObject.flagSignalSelection;
               thisObject.flagSignalSelection     = true;
            }
            
            objList = FP_RLIST_PRIVATE_BuildTree(thisObject);
            break;

      default:

            if ( typeof thisObject.flagSignalSelection == "number" ) thisObject.flagSignalSelection = false;

            objList = FP_RLIST_PRIVATE_BuildReport(thisObject);
            break;
   }

   /* Append the List to the document */

   thisObject.objWorkContainer.insertAdjacentElement("afterBegin", objList); 

   return;

}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  P R I V A T E   M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SetThisObjectProperties - Set properties of thisObject                 */
/* --------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_SetThisObjectProperties(thisObject)
//#else
//# function FP_RLIST_PRIVATE_SetThisObjectProperties(thisObject:FP_RLIST_Object)
//#endif 
{

   thisObject.strVisualizeListAs  = VF_System.FP_Get(thisObject,"uVisualizeListAs",1,"REPORT", true,thisObject.intOccurrence); 
   thisObject.intImageWidth       = 16;
   thisObject.objListContainer    = null;
   thisObject.flagItemSmallImage    = false;
   thisObject.uEnabled			   = VF_System.FP_GetBool(thisObject,"uEnabled",1,"TRUE",thisObject.intOccurrence);
   thisObject.arrayColumns         = new Array();
   thisObject.intItemCount         = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence); 
   thisObject.objSelectedItemDIV	  = null; 
   thisObject.intColumnCount       = VF_System.FP_GetNum(thisObject,"uColumnCount",1,true, 1, thisObject.intOccurrence);
   thisObject.intTopLevelParents   = 0;
   thisObject.intColWidthRemainder = 0;   
   thisObject.strColumnWidthUnit   = VF_System.FP_Get(thisObject,"uColumnWidthUnit",1,"px",false,thisObject.intOccurrence);
   thisObject.strRowPixelHeight    = VF_System.FP_GetNum(thisObject,"uRowPixelHeight",1,true, 16, thisObject.intOccurrence).toString() + "px";
   thisObject.flagShowLines        = VF_System.FP_GetBool(thisObject,"uShowLines",1,"FALSE",thisObject.intOccurrence);
   thisObject.objColumnClicked     = null;
   thisObject.objCurrentSortImg    = null;
   thisObject.arraySelectedRows    = new Array();
   thisObject.arraySelectedRowsByNumber = new Array();
   thisObject.objCurrentSelectedRow = null;
   thisObject.uShowExpanded			= VF_System.FP_GetBool(thisObject,"uShowExpanded",1,"FALSE",thisObject.intOccurrence);
   thisObject.arrayTotalCells       = new Array();
   thisObject.strSelectionStyle = thisObject.uEnabled ? VF_System.FP_Get(thisObject,"uSelectionStyle",1,"SINGLE", true,thisObject.intOccurrence) : "NONE";
   thisObject.intScrollBarWidth = 18;

   /* Disable teh signal of a selection for selection style "MULTIPLE" */
   if ( thisObject.strSelectionStyle == "MULTIPLE" ) 
   {
      thisObject.flagAllowMultipleSelection = true;
      thisObject.flagSignalSelection = false;
   }
   else thisObject.flagSignalSelection = FP_RLIST_PRIVATE_GetSignalSelectionValue(thisObject);

//#ifscript
   var strListWidthUnit      = thisObject.objMainContainer.strWidthUnit;
//#else
//#  var strListWidthUnit = VF_System.GetAttribute(thisObject.objMainContainer,"strWidthUnit");
//#endif

   thisObject.strListWidth = (strListWidthUnit == "px") ? thisObject.objMainContainer.style.width : thisObject.strListWidth = "300px";

//#ifscript
   var strListHeightUnit = thisObject.objMainContainer.strHeightUnit;
//#else
//#  var strListHeightUnit = VF_System.GetAttribute(thisObject.objMainContainer,"strHeightUnit");
//#endif

   thisObject.strListHeight = (strListHeightUnit == "px") ? thisObject.objMainContainer.style.height : thisObject.strListHeight = "180px";

   thisObject.flagColumnHeaders    = VF_System.FP_GetBool(thisObject,"uColumnHeaders",1,"TRUE",thisObject.intOccurrence);

   /* If column headers are required, create an array of them  and set their height */

   if ( thisObject.flagColumnHeaders ) thisObject.strColumnHeaderHeight = VF_System.FP_GetNum(thisObject,"uColumnHeaderHeight",1,true, 22, thisObject.intOccurrence).toString() + "px";

}

/* --------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_GetSignalSelectionValue - Get the value of the uSignalSeletionProperty */
/* --------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_GetSignalSelectionValue( thisObject )   
//#else
//# function FP_RLIST_PRIVATE_GetSignalSelectionValue( thisObject:FP_RLIST_Object )   
//#endif 
{

//#ifscript
    var variantSignalSelection = VF_System.FP_GetVariant(thisObject, "USIGNALSELECTION",1,thisObject.intOccurrence);
//#else
//# var variantSignalSelection : VF_SY501_VariantInfo = VF_System.FP_GetVariant(thisObject, "USIGNALSELECTION",1,thisObject.intOccurrence);
//#endif 

   if ( !(variantSignalSelection.flagFound) ) return(false);
   
   if ( variantSignalSelection.strType == "A" )
   {
      if (variantSignalSelection.strAlphaValue.toUpperCase() == "TRUE") return(true);
      else return(false);
   }
   else
   {
      if ( variantSignalSelection.intNumericValue < 1 ) return(false);
      else return(variantSignalSelection.intNumericValue);
   }
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_BuildNodeStructure - Build the structure of the data   */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_BuildNodeStructure( thisObject )   
//#else
//# function FP_RLIST_PRIVATE_BuildNodeStructure( thisObject : FP_RLIST_Object)   
//#endif 
{
   var arrayAllItems   = thisObject.arrayAllItems;
   var intItem         = 0; 
   var intColumn       = 0;
   var intTotColLength = 0;
   var objParent       = null;
   
//#ifscript   
   var objNode         = null;
    var objColumn       = null;
//#else
//# var objNode   : FP_RLIST_PRIVATE_ItemNode = null;
//# var objColumn : FP_RLIST_PRIVATE_Column = null;
//#endif    
      
   var objCellValue    = null; 
   var objLastParent   = null; 
   var objFirstParent  = null; 
   var intTotColWidth  = 0;

   /* Get Item Count (number of rows) and Column Count (number of columns) */ 
   var intItemCount   = thisObject.intItemCount;
   var intColumnCount = thisObject.intColumnCount;

   /* Create Column objects. Accumulate the sum of the widths of the columns in  intTotColWidth to later adjust the width*/
   /* of the list or of the last column */
   
   for (intColumn = 1; intColumn <= intColumnCount; intColumn++ )
   {
      objColumn = new FP_RLIST_PRIVATE_Column(thisObject, intColumn);
      thisObject.arrayColumns[intColumn] = objColumn;
      intTotColWidth = intTotColWidth + parseInt(objColumn.strColumnWidth, 10);
   }
   
   thisObject.intTotColWidth = intTotColWidth;

   /* Traverse all Items (rows) building the object tree (not tree as the TreeView but as a tree structure)  */
   for (intItem = 0; intItem < intItemCount; intItem++)
   {
      /* Create a new Item Node (row) */
      
      objNode = new FP_RLIST_PRIVATE_ItemNode(thisObject, intItem);

      /* Add Item Node to the array of all the items */
      
      arrayAllItems[intItem] = objNode;

      /* Traverse the columns to access the Cell properties */

      for (intColumn = 1; intColumn <= intColumnCount; intColumn++ )
      {
         objNode.arrayCells[intColumn] = FP_RLIST_PRIVATE_CreateCell(thisObject, intColumn, intItem);
      }

      /* If the node has a parent, add a child to it. There is a parent if there exists a Node in the AllItems array */
      /* with an index equal to the ParentItem property of the node */

      if ( objNode.intParentItem > 0 ) FP_RLIST_PRIVATE_AddChildNode( thisObject, objNode );

      else thisObject.intTopLevelParents++;

      /* Set Hidden Keys for the item */
      
      VF_SY506_PRIVATE_InsertItemDetails(thisObject, objNode, (intItem + 1),thisObject.intOccurrence,"",false); 
      
   }

   return; 
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  T R E E  -----  M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_BuildTree - Build a tree view                        */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_BuildTree ( thisObject )
//#else
//# function FP_RLIST_PRIVATE_BuildTree ( thisObject:FP_RLIST_Object )
//#endif 
{
   var thisDocument   = thisObject.objDocument;
   var objColHdg      = null;
   var intItemCount   = thisObject.intItemCount;
   var intColumnCount = thisObject.intColumnCount;
   var intColumn      = 0;

   /* Override multi selection in case it was set */
   thisObject.strSelectionStyle       = "SINGLE";

   /* Create the outer container encapsulating the Tree View*/

   var objTreeContainer = FP_RLIST_PRIVATE_CreateTreeContainer( thisObject );

   /* Create all the rows */

   FP_RLIST_PRIVATE_CreateTreeItems( thisObject, objTreeContainer );

   return(objTreeContainer);
}

/*-----------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_CreateTreeContainer - Create the Tree View container */
/*-----------------------------------------------------------------------------*/

//#ifscript
function FP_RLIST_PRIVATE_CreateTreeContainer(thisObject)
//#else
//# function FP_RLIST_PRIVATE_CreateTreeContainer( thisObject:FP_RLIST_Object )
//#endif 
{
     var objTreeContainer = thisObject.objDocument.createElement("DIV");

//#ifscript
     var objTreeContainerEXT = objTreeContainer;
//#else
//#  var objTreeContainerEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objTreeContainer,objTreeContainerEXT);
//#endif 

   objTreeContainer.style.height       = thisObject.strListHeight;
   objTreeContainer.style.width        = thisObject.strListWidth;
   objTreeContainer.className          = "FP_RLIST_TreeContainer";
   objTreeContainer.unselectable       = "on";
   objTreeContainer.noWrap             = true;

   objTreeContainerEXT.objCellBeingEdited = null;

   return(objTreeContainer);
}

/*-----------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_CreateTreeItems - Create the Tree View items              */
/*-----------------------------------------------------------------------------*/

//#ifscript
function FP_RLIST_PRIVATE_CreateTreeItems( thisObject, argobjTreeContainer )
//#else
//# function FP_RLIST_PRIVATE_CreateTreeItems( thisObject:FP_RLIST_Object, argobjTreeContainer:Object )
//#endif 
{
   var objTreeContainer  = argobjTreeContainer;
   var thisDocument      = thisObject.objDocument;
   
//#ifscript   
   var objCurrentItem    = null;
   var arrayAllItems     = thisObject.arrayAllItems;
   var intItemCount      = thisObject.intItemCount;
   var intItem           = 0;
   var intChild          = 0;
//#else
//#   var objCurrentItem : FP_RLIST_PRIVATE_ItemNode = null; 
//#   var arrayAllItems : Array      = thisObject.arrayAllItems;
//#   var intItemCount : int  = thisObject.intItemCount;
//#   var intItem : int       = 0;
//#   var intChild :int       = 0;
//#endif    
   
   var objParentDIV      = null;
   var objLevelContainer = null;
   var arrayChildItems   = null;

   thisObject.objSelectedItemDIV = null;

   if (thisObject.arrayLevelImages == null) thisObject.arrayLevelImages   = new Array();

   for (intItem = 0; intItem < intItemCount; intItem++)
   {
      objCurrentItem = arrayAllItems[intItem];

      /* Process only the level 0 items. If the item has a parent it will be processed as a child of an item 0 */
      
      if ( objCurrentItem.intParentItem > 0 ) continue;

      thisObject.intCurrentLevel = 1;

      objCurrentItem.strSiblingType = FP_RLIST_PRIVATE_SetSiblingType(intChild, thisObject.intTopLevelParents);
      objParentDIV = objTreeContainer.appendChild(FP_RLIST_PRIVATE_CreateItemAtLevel ( thisObject, objCurrentItem, null));

      FP_RLIST_PRIVATE_BuildBranch(thisObject, objCurrentItem, objParentDIV);

      /* thisObject.arrayLevelImages = null;  */
      /* thisObject.arrayLevelImages = new Array(); */
      
      intChild++;

      if ( objCurrentItem.strSiblingType == "LastChild" ) break;
   }

   /* thisObject.arrayLevelImages = null; */

   if ( (intItemCount > 0 ) && ( thisObject.objSelectedItemDIV != null )) FP_RLIST_PRIVATE_ProgramaticExpand(thisObject);

}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_BuildBranch - Traverse and build an entire branch    */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_BuildBranch ( thisObject, argobjCurrentItem, argobjParentDIV )
//#else
//# function FP_RLIST_PRIVATE_BuildBranch ( thisObject:FP_RLIST_Object, argobjCurrentItem:FP_RLIST_PRIVATE_ItemNode, argobjParentDIV:Object )
//#endif 
{
   var thisDocument          = thisObject.objDocument;

//#ifscript   
   var objCurrentItem        = argobjCurrentItem;
//#else
//# var objCurrentItem : FP_RLIST_PRIVATE_ItemNode = argobjCurrentItem;
//#endif       
      
   var arrayChildItems       = objCurrentItem.arrayChildNodes;
   var intNumberOfChildItems = arrayChildItems.length;
   var intChild              = 0;
   var objParentDIV          = null;

   if (( objCurrentItem.strSiblingType == "LastChild" ) || ( objCurrentItem.strSiblingType == "OnlyChild" ) ) thisObject.arrayLevelImages[thisObject.intCurrentLevel] = "fp_im015.gif";
   else thisObject.arrayLevelImages[thisObject.intCurrentLevel] = "fp_im009.gif";

   thisObject.intCurrentLevel++;

   var objLevelContainer = FP_RLIST_PRIVATE_CreateLevelContainer(thisObject, thisDocument, thisObject.uShowExpanded );
   argobjParentDIV.appendChild(objLevelContainer);

   for (intChild = 0; intChild < intNumberOfChildItems; intChild++)
   {
      objCurrentItem = arrayChildItems[intChild];

      objCurrentItem.strSiblingType = FP_RLIST_PRIVATE_SetSiblingType(intChild, intNumberOfChildItems);

      objParentDIV   = objLevelContainer.appendChild(FP_RLIST_PRIVATE_CreateItemAtLevel ( thisObject, objCurrentItem, argobjCurrentItem));

      FP_RLIST_PRIVATE_BuildBranch(thisObject, objCurrentItem, objParentDIV);
   }  

   thisObject.intCurrentLevel--;

}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateItemAtLevel - Create a DIV at the current level*/
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateItemAtLevel( thisObject, argobjCurrentItem, argobjParentItem)
//#else
//# function FP_RLIST_PRIVATE_CreateItemAtLevel( thisObject:FP_RLIST_Object, argobjCurrentItem:FP_RLIST_PRIVATE_ItemNode, argobjParentItem)
//#endif 
{
   var thisDocument          = thisObject.objDocument;
   
//#ifscript   
    var objCurrentItem        = argobjCurrentItem;
//#else
//# var objCurrentItem : FP_RLIST_PRIVATE_ItemNode = argobjCurrentItem;
//#endif 
  
   var arrayChildItems       = objCurrentItem.arrayChildNodes;
   var intNumberOfChildItems = arrayChildItems.length;
   var objParentItem         = argobjParentItem;
   var intCurrentLevel       = thisObject.intCurrentLevel;
   var intLevel              = 0;
   var strIMGsrc             = " ";
   var objImage              = null;
   var arrayLevelImages      = thisObject.arrayLevelImages;

   var objItemDIV = thisDocument.createElement("DIV");
   
//#ifscript
     var objItemDIVEXT = objItemDIV;
//#else
//#  var objItemDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objItemDIV,objItemDIVEXT);
//#endif 
   
       objItemDIV.unselectable      = "on";

       objItemDIVEXT.intItemLevel      = intCurrentLevel;
       objItemDIVEXT.intRowItemNumber  = objCurrentItem.intItemNumber;
       objItemDIVEXT.strAlternateColor = "window";
       objItemDIVEXT.thisObject        = thisObject;
       
       objItemDIV.noWrap            = true;

   /* Add an image to the current level DIV*/
   for ( intLevel = 1; intLevel < intCurrentLevel; intLevel++ )
   {
      objItemDIV.appendChild(FP_RLIST_PRIVATE_CreateIMG( thisDocument, arrayLevelImages[intLevel], "inline"));
   }

   /* Add the plus and minus images a property of the DIV to point to the plus and minus image objects */
   
   FP_RLIST_PRIVATE_SetPlusMinusImg(thisObject, objCurrentItem, intNumberOfChildItems, objItemDIV, objItemDIVEXT, thisObject.uShowExpanded);

   /* Now append them to the div */
   
   objItemDIV.appendChild(objItemDIVEXT.objPlusImage);
   objItemDIV.appendChild(objItemDIVEXT.objMinusImage);

   /* If the there are images set for the item, default to blank image to occupy the space of a normal image */
   
   if ( ( thisObject.flagItemSmallImage ) && (  objCurrentItem.strSmallImage != " ") )
   {
      objImage = objItemDIV.appendChild(FP_RLIST_PRIVATE_CreateIMG( thisDocument, objCurrentItem.strSmallImage , "inline"));
      if (thisObject.uEnabled) objImage.attachEvent("ondblclick", FP_RLIST_EVENT_HANDLER_ExpandCollapse);
   }

   var objSpan = objItemDIV.appendChild(FP_RLIST_PRIVATE_CreateSPAN( thisObject, objCurrentItem.arrayCells[1].Value ));

	if (thisObject.uEnabled)
	{
		objItemDIVEXT.SelectArea = objSpan;
		objItemDIV.attachEvent("onclick", FP_RLIST_EVENT_HANDLER_SelectTreeItem);
	}

   if ( VF_SY506_PRIVATE_IsSelectedItem ( objCurrentItem, true, thisObject ) ) 
   {
       thisObject.objSelectedItemDIV  = objItemDIV;
   }

   return(objItemDIV);
}

/* ----------------------------------------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_ProgramaticExpand - Programatically expand the tree and select the Row                      */
/* ----------------------------------------------------------------------------------------------------------*/

//#ifscript
function FP_RLIST_PRIVATE_ProgramaticExpand(thisObject)
//#else
//# function FP_RLIST_PRIVATE_ProgramaticExpand(thisObject:FP_RLIST_Object)
//#endif 
{
   var objSelectedItemDIV = thisObject.objSelectedItemDIV;
//#ifscript  
     var objSelectedItemDIVEXT = objSelectedItemDIV; 
//#else
//#  var objSelectedItemDIVEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objSelectedItemDIV));  
//#endif 
   
   
   var objStoreSelected   = objSelectedItemDIV;
   var intLevel			  = 0;

   for ( intLevel = objSelectedItemDIVEXT.intItemLevel; intLevel > 1; intLevel--)
   {
      FP_RLIST_EVENT_HANDLER_ExpandCollapse( objSelectedItemDIV.parentElement, thisObject.uShowExpanded );
      
      objSelectedItemDIV = objSelectedItemDIV.parentElement.parentElement;
    
//#ifscript  
      objSelectedItemDIVEXT = objSelectedItemDIV; 
//#else
//#   objSelectedItemDIVEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objSelectedItemDIV));  
//#endif 
            
   }

   FP_RLIST_PRIVATE_RowSelection(thisObject, objStoreSelected, "Initialize");
   
}

/* ----------------------------------------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_SetPlusMinusImg - Set the plus and minus icons                                           */
/* ----------------------------------------------------------------------------------------------------------*/

//#ifscript
function FP_RLIST_PRIVATE_SetPlusMinusImg(thisObject, argobjCurrentItem, argintNumberOfChildItems, argobjItemDiv, argobjItemDivEXT, argflagShowExpanded)
//#else
//# function FP_RLIST_PRIVATE_SetPlusMinusImg(thisObject:FP_RLIST_Object, argobjCurrentItem, argintNumberOfChildItems, argobjItemDiv, argobjItemDivEXT:FP_RLIST_HTML_Extension, argflagShowExpanded:Boolean)
//#endif 
{
   var thisDocument    = thisObject.objDocument;
   var intCurrentLevel  = thisObject.intCurrentLevel;
   var strPlusImageSrc  = "fp_im013.gif";
   var strMinusImageSrc = "fp_im011.gif";

   var strSiblingType  = argobjCurrentItem.strSiblingType;

   /* If this item has children argintNumberOfChildItems is greater than 0 */

   if ( argintNumberOfChildItems == 0 ) 
   {
      switch ( strSiblingType )
      {
         case "FirstChild":

              if ( intCurrentLevel == 1 )
              {
                 strPlusImageSrc = "fp_im020.gif";
                 strMinusImageSrc = "fp_im020.gif";
              }
              else
              {
                 strPlusImageSrc = "fp_im014.gif";
                 strMinusImageSrc = "fp_im014.gif";
              }

              break;

         case "MiddleChild":

              strPlusImageSrc = "fp_im014.gif";
              strMinusImageSrc = "fp_im014.gif";
              break;

         default:

              strPlusImageSrc = "fp_im012.gif";
              strMinusImageSrc = "fp_im012.gif";
              break;
      }
   }
   else
   {
      switch ( strSiblingType )
      {
         case "LastChild":

              strPlusImageSrc = "fp_im008.gif";
              strMinusImageSrc = "fp_im010.gif";
              break;

         case "OnlyChild":
              
              if ( intCurrentLevel == 1 )
              {
                 strPlusImageSrc = "fp_im018.gif";
                 strMinusImageSrc = "fp_im019.gif";
              }
              else
              {
                 strPlusImageSrc = "fp_im008.gif";
                 strMinusImageSrc = "fp_im010.gif";
              }
              
              break;
         
         case "FirstChild":

              if ( intCurrentLevel == 1 )
              {
                 strPlusImageSrc = "fp_im017.gif";
                 strMinusImageSrc = "fp_im016.gif";
              }
              
              break;
      }
   }

	if ( argflagShowExpanded )
	{
		var strPlusDisplay = "none";
		var strMinusDisplay = "inline";
	}
	else
	{
		var strPlusDisplay = "inline";
		var strMinusDisplay = "none";
	}

   argobjItemDivEXT.objPlusImage  = FP_RLIST_PRIVATE_CreateIMG(thisDocument, strPlusImageSrc, strPlusDisplay);
   if (thisObject.uEnabled) argobjItemDivEXT.objPlusImage.attachEvent("onclick", FP_RLIST_EVENT_HANDLER_ExpandCollapse);

   argobjItemDivEXT.objMinusImage = FP_RLIST_PRIVATE_CreateIMG(thisDocument, strMinusImageSrc, strMinusDisplay);
   if (thisObject.uEnabled) argobjItemDivEXT.objMinusImage.attachEvent("onclick", FP_RLIST_EVENT_HANDLER_ExpandCollapse);

   return;
}

/* ----------------------------------------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_SetSiblingType - Set a current Item property specifying its position within the siblings */
/* ----------------------------------------------------------------------------------------------------------*/

//#ifscript
function FP_RLIST_PRIVATE_SetSiblingType(argintChild, argintNumberOfChildItems)
//#else
//# function FP_RLIST_PRIVATE_SetSiblingType(argintChild:int, argintNumberOfChildItems:int)
//#endif 
{
   var strSiblingType = "OnlyChild";

   argintChild++;

   if ( argintChild > 1 ) 
   {
      if ( argintChild == argintNumberOfChildItems ) strSiblingType = "LastChild";
      else strSiblingType = "MiddleChild";
   }
   else if ( argintNumberOfChildItems > argintChild ) strSiblingType = "FirstChild";

   return(strSiblingType);
}

/* ----------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateIMG - Create an IMG element         */
/* --------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateIMG( argthisDocument, argstrIMGsrc, argstrDisplay)
//#else
//# function FP_RLIST_PRIVATE_CreateIMG( argthisDocument, argstrIMGsrc:String, argstrDisplay:String)
//#endif 
{
	/* Add a DIV with white background instead of an blank image like fp_im015.gif) */

	if ( argstrIMGsrc == "fp_im015.gif" )
	{		
		   var objBlankDIV          = argthisDocument.createElement("DIV");

//#ifscript
          var objBlankDIVEXT = objBlankDIV;
//#else
//#       var objBlankDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#           this.oHTMLExtender.PutExtension(objBlankDIV,objBlankDIVEXT);
//#endif 
         /* Another situation where the 3px padding from class .FP_RLIST_TreeContainer is not included in teh width*/
         if (VF_System.usingExplorer)
         {
		      objBlankDIV.style.width = "16px";         
		      objBlankDIV.style.display = "inline";		      
         }
         else
         {
		      objBlankDIV.style.width = "19px";         
		      objBlankDIV.style.display = "inline-block";		      
         }

		   objBlankDIV.style.height = "1px";
		   objBlankDIV.style.background = "#ffffff";

		   
  		   return(objBlankDIV);
	}

   var objItemIMG = argthisDocument.createElement("IMG");

//#ifscript
      var objItemIMGEXT = objItemIMG;
//#else
//#   var objItemIMGEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objItemIMG,objItemIMGEXT);
//#endif 

   objItemIMG.src                 = VF_System.ReturnImgSource(argstrIMGsrc);
   objItemIMG.unselectable        = "on";
   objItemIMG.style.verticalAlign = "middle";
   objItemIMG.style.display       = argstrDisplay;

   return(objItemIMG);
}

/* ----------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateSPAN - Create a SPAN element         */
/* --------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateSPAN( thisObject, argstrText )
//#else
//# function FP_RLIST_PRIVATE_CreateSPAN( thisObject:FP_RLIST_Object, argstrText:String ): Object 
//#endif 
{
	var thisDocument				 = thisObject.objDocument;
    var objItemSPAN                  = thisDocument.createElement("SPAN");
    
//#ifscript
      var objItemSPANEXT = objItemSPAN;
//#else
//#   var objItemSPANEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objItemSPAN,objItemSPANEXT);
//#endif 
       
    objItemSPAN.unselectable      = "on";
    objItemSPAN.innerText         = argstrText;
    objItemSPAN.style.paddingLeft = "3px";
    
    if (thisObject.uEnabled) objItemSPAN.attachEvent("ondblclick", FP_RLIST_EVENT_HANDLER_ExpandCollapse);

    return(objItemSPAN);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateLevelContainer - Create a DIV at a specified level*/
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateLevelContainer( thisObject, argthisDocument, argflagShowExpanded)
//#else
//# function FP_RLIST_PRIVATE_CreateLevelContainer( thisObject:FP_RLIST_Object, argthisDocument:Object, argflagShowExpanded:Boolean)
//#endif 
{
   var objLevelContainer = argthisDocument.createElement("DIV");
       
//#ifscript
     var objLevelContainerEXT = objLevelContainer;
//#else
//#  var objLevelContainerEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objLevelContainer,objLevelContainerEXT);
//#endif 
       
    objLevelContainerEXT.intItemLevel = thisObject.intCurrentLevel; 
    objLevelContainer.unselectable    = "on";
    objLevelContainer.noWrap          = true;

	/* if they want the tree all expanded */
	
	if ( argflagShowExpanded )  
	{
		objLevelContainerEXT.strToggleStatus = "expanded";
        objLevelContainer.style.display      = "block"; 
	}
	else
	{
		objLevelContainer.style.display      = "none";  
		objLevelContainerEXT.strToggleStatus = "collapsed"; 
	}

   return(objLevelContainer);
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  L A R G E  I C O N ----  M E T H O D S  ------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_BuildLargeIcon - Build large icon list              */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_BuildLargeIcon( thisObject )
//#else
//# function FP_RLIST_PRIVATE_BuildLargeIcon( thisObject:FP_RLIST_Object )
//#endif 
{
   var thisDocument   = thisObject.objDocument;

   /* Override selection style property */
   thisObject.strSelectionStyle = "SINGLE";

   /* Create the outer container encapsulating the List and append it to the outer most container */

   var objOuterContainer = FP_RLIST_PRIVATE_CreateOuterContainer( thisObject, false );
   
   /* Create the List Container */

   var objListContainer     = FP_RLIST_PRIVATE_CreateListContainer(thisObject);
       objOuterContainer.appendChild(objListContainer);

   FP_RLIST_PRIVATE_CreateLargeIconRows( thisObject, objListContainer ); 

   var intOuterContainerWidth = parseInt(objOuterContainer.style.width, 10) + thisObject.intScrollBarWidth;
   objOuterContainer.style.width = FP_RLIST_PRIVATE_ReturnInPixels(intOuterContainerWidth);

   return(objOuterContainer);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateLargeIconRows - Build a Large Icon style List View */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateLargeIconRows ( thisObject, argobjListContainer )
//#else
//# function FP_RLIST_PRIVATE_CreateLargeIconRows ( thisObject:FP_RLIST_Object, argobjListContainer )
//#endif 
{
   var thisDocument    = thisObject.objDocument;
   var objList         = argobjListContainer;
   var intItemCount    = thisObject.intItemCount;
   var intImagesPerRow = VF_System.FP_GetNum(thisObject,"uImagesPerRow",1, true, 1, thisObject.intOccurrence);
   var intImageNumber  = 0;
   var arrayAllItems   = thisObject.arrayAllItems;
   var intWidthPerImage = 0; 
   var intItem = 0; 
//#ifscript   
   var objCurrentItem = null; 
//#else
//# var objCurrentItem : FP_RLIST_PRIVATE_ItemNode = null; 
//#endif    
   var objImgDIV = null; 

   if ( (intWidthPerImage = parseInt(thisObject.strListWidth, 10) / intImagesPerRow ) < 40 ) intWidthPerImage = 40;
   
   /* Because IE seems to include the padding in the width, subtract padding for non IE */
   intWidthPerImage -= 3;

   var objRowDIV = FP_RLIST_PRIVATE_CreateRow(thisDocument);

   for (intItem = 0; intItem < intItemCount; intItem++)
   {
      intImageNumber++;

      objCurrentItem = arrayAllItems[intItem];

      objImgDIV = FP_RLIST_PRIVATE_AddImageDIV(thisObject, intItem, FP_RLIST_PRIVATE_ReturnInPixels(intWidthPerImage) );

      if ( intImageNumber > intImagesPerRow ) 
      {
         objList.appendChild(objRowDIV);
         objRowDIV = FP_RLIST_PRIVATE_CreateRow(thisDocument);  
         intImageNumber  = 1;
      }

      objRowDIV.appendChild(objImgDIV);
      
      if (VF_SY506_PRIVATE_IsSelectedItem (objCurrentItem, true, thisObject)) FP_RLIST_EVENT_HANDLER_LargeImgOnClick("Initialize", objImgDIV);

   }
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateRow - Create a row */
/* --------------------------------------------------------------------- */ 

function FP_RLIST_PRIVATE_CreateRow( argthisDocument )
{
   var objRowDIV = null;

   objRowDIV                  = argthisDocument.createElement("DIV");
   
//#ifscript
      var objRowDIVEXT = objRowDIV;
//#else
//#   var objRowDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objRowDIV,objRowDIVEXT);
//#endif 
   
   objRowDIV.noWrap           = true;
   objRowDIV.style.overflowX  = "hidden";
   objRowDIV.style.display    = "block";
   objRowDIV.unselectable     = "on";

   return(objRowDIV);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_AddImage - Build a Large Icon style List View */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_AddImageDIV( thisObject, argintItem, argstrWidth )
//#else
//# function FP_RLIST_PRIVATE_AddImageDIV( thisObject:FP_RLIST_Object, argintItem:int, argstrWidth:String )
//#endif 
{
   var thisDocument   = thisObject.objDocument;
   var intItem        = argintItem + 1;

   var objImageDiv                = thisDocument.createElement("DIV");

//#ifscript
     var objImageDivEXT = objImageDiv;
//#else
//#  var objImageDivEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objImageDiv,objImageDivEXT);
//#endif 
   objImageDiv.className          = "FP_RLIST_LargeImageContainer";
   objImageDiv.align              = "center";
   objImageDiv.title              = VF_System.FP_Get(thisObject,"uItem.Caption",intItem," ",false,thisObject.intOccurrence);
   objImageDiv.style.width        = argstrWidth;
   objImageDiv.noWrap             = true;
   objImageDivEXT.intRowItemNumber   = argintItem;
   objImageDiv.selected           = false;
   objImageDiv.unselectable       = "on";
   objImageDivEXT.SelectArea         = objImageDiv;
   objImageDivEXT.strAlternateColor  = "window";
   objImageDivEXT.thisObject         = thisObject;
   
   if (!VF_System.usingExplorer) objImageDiv.style.display = "inline-block";

   if (thisObject.uEnabled) objImageDiv.attachEvent("onclick", FP_RLIST_EVENT_HANDLER_LargeImgOnClick);

   var objImage = thisDocument.createElement("IMG");
   
//#ifscript
      var objImageEXT = objImage;
//#else
//#   var objImageEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objImage,objImageEXT);
//#endif 

   objImage.src  = VF_System.ReturnImgSource(VF_System.FP_Get(thisObject,"uItem.Image",intItem,"vf_ic0003.gif",false,thisObject.intOccurrence));
   objImage.style.display = "block";
   objImage.style.unselectable = "on";
   
   objImageDiv.appendChild(objImage);

   var objCaptionDiv = thisDocument.createElement("SPAN");

//#ifscript
      var objCaptionDivEXT = objCaptionDiv;
//#else
//#   var objCaptionDivEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objCaptionDiv,objCaptionDivEXT);
//#endif 
   
   objCaptionDiv.innerText = objImageDiv.title;
   objCaptionDiv.style.font = "menu";
   
   objCaptionDiv.unselectable       = "on";

   objImageDiv.appendChild(objCaptionDiv);

   return(objImageDiv);

}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  R E P O R T ----  M E T H O D S  -------------------- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_BuildReport - Build a report style List View         */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_BuildReport ( thisObject )
//#else
//# function FP_RLIST_PRIVATE_BuildReport ( thisObject:FP_RLIST_Object)
//#endif 
{
   var thisDocument   = thisObject.objDocument;
   var objColHdg      = null;
   var intItemCount   = thisObject.intItemCount;
   var intColumnCount = thisObject.intColumnCount;
   var intColumn      = 0;

   var oCoverForResize = thisDocument.createElement("div");
       oCoverForResize.className = "FP_RLIST_ResizeColCover";
       oCoverForResize.id = "FPLIST_CoverForResize";
   
   thisDocument.body.appendChild(oCoverForResize);
   
   /* Create the outer most container. This is a DIV without attributes or class to encapsulate the column headings. */
   /* The column headings which MUST be outside the container where the list view is otherwise there are problems with. */
   /* how the overflow works */

   var objOuterMostContainer = FP_RLIST_PRIVATE_CreateOuterMostContainer(thisDocument);

   /* Make a guess as to there will be a scroll bar by comparing aggregated height of each row with the list height. */  
   thisObject.intScrollBarWidth = (parseInt(thisObject.strRowPixelHeight, 10) * intItemCount) > parseInt(thisObject.strListHeight,10) ? 16 : 0;
   
   /* Create the column heading DIVs if required. Add a reference to each DIV column with the outer most container */

   if ( thisObject.flagColumnHeaders ) 
   {
      FP_RLIST_PRIVATE_CreateColumnHeadings (thisObject, objOuterMostContainer ); 

      var intSortColumn       = VF_System.FP_GetNum(thisObject,"uSortColumn",1,true, 0,thisObject.intOccurrence);
      thisObject.strCurrentSortOrder = VF_System.FP_Get(thisObject,"uSortColumnOrder",1,"NOTSET",true,thisObject.intOccurrence);

      if ( intSortColumn > 0) 
      {
         VF_System.VF_Global_intItemSortCell = intSortColumn;
         intSortColumn--;
         thisObject.objColumnClicked = thisObject.arrayColumnHeaders[intSortColumn];         
         FP_RLIST_EVENT_HANDLER_SortColumn(thisObject);
      }
   }

   /* Create the outer container encapsulating the List and append it to the outer most container */

   var objOuterContainer    = FP_RLIST_PRIVATE_CreateOuterContainer( thisObject, thisObject.flagColumnHeaders );
   var objAppendedOuterCont = objOuterMostContainer.appendChild(objOuterContainer);

   /* Create the List Container */

   var objListContainer     = FP_RLIST_PRIVATE_CreateListContainer(thisObject);
       objOuterContainer.appendChild(objListContainer);

   /* Create all the rows if there are Items */
   
   if ( intItemCount > 0 ) 
   {      
      FP_RLIST_PRIVATE_CreateRows(thisObject, objListContainer);

      var intOuterContainerWidth = parseInt(objAppendedOuterCont.style.width, 10) + thisObject.intScrollBarWidth;
      
      if ( thisObject.flagItemSmallImage ) intOuterContainerWidth = intOuterContainerWidth + thisObject.intImageWidth;

      objAppendedOuterCont.style.width = intOuterContainerWidth.toString() + "px";
   }

   return(objOuterMostContainer);
}

/*-----------------------------------------------------------------------------*/
/* FP_RLIST_PRIVATE_CreateOuterMostContainer - Create the outer most container */
/*-----------------------------------------------------------------------------*/

function FP_RLIST_PRIVATE_CreateOuterMostContainer(argThisDocument)
{
   var objOuterMostContainer = argThisDocument.createElement("DIV");
   
//#ifscript
      var objOuterMostContainerEXT = objOuterMostContainer;
//#else
//#   var objOuterMostContainerEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objOuterMostContainer,objOuterMostContainerEXT);
//#endif 
   
   objOuterMostContainer.unselectable    = "on";
   /* objOuterMostContainer.style.overflowX = "hidden";  */
   objOuterMostContainer.noWrap          = true;
   objOuterMostContainer.style.whiteSpace = "nowrap";

   return(objOuterMostContainer);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateRows - Create rows and cells                                            */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateRows( thisObject, argobjListContainer )
//#else
//# function FP_RLIST_PRIVATE_CreateRows( thisObject:FP_RLIST_Object, argobjListContainer )
//#endif 
{
   var thisDocument        = thisObject.objDocument;
   var arrayAllItems       = thisObject.arrayAllItems;
   var intItemCount        = thisObject.intItemCount;
   var intColumnCount      = thisObject.intColumnCount;
   var intItem             = 0; 
   var intColumn           = 0;
   var objRowDIV           = null;
   var objCellDIV          = null;
//#ifscript   
    var objCurrentItem      = null;
//#else
//# var objCurrentItem: FP_RLIST_PRIVATE_ItemNode = null;
//#endif  
   var objAppendedCell     = null;
   var intSeparatorWidth   = intColumnCount - 1;
   var objCellSep          = null;  
//#ifscript
   var objRowDIVEXT = null;
//#else
//#  var objRowDIVEXT : FP_RLIST_HTML_Extension = null;
//#endif 

   /* force single selection to select the selected items */
   var flagStoreSelectionStyle  = thisObject.strSelectionStyle;

	if (flagStoreSelectionStyle != "NONE") thisObject.strSelectionStyle = "SINGLE";

   if ( thisObject.flagShowLines ) 
   {
      var strCellBorderBottom = "1px solid Highlight";
      var strColDividerClass  = "FP_RLIST_ColDivider";
   }  
   else
   {
      var strCellBorderBottom = "none";
      var strColDividerClass  = "FP_RLIST_ColDivider_NoLines";
   }

   /* do the first row only to make the calculations for the last column only once */

   objCurrentItem = arrayAllItems[intItem];

   objRowDIV = FP_RLIST_PRIVATE_CreateRowDIV(thisObject, objCurrentItem, strCellBorderBottom, intItem);

//#ifscript
     objRowDIVEXT = objRowDIV;
//#else
//#  objRowDIVEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objRowDIV));
//#endif 

   for (intColumn = 1; intColumn <= intColumnCount; intColumn++ )
   {
      objCellDIV                         = FP_RLIST_PRIVATE_CreateCellDIV(thisObject, objCurrentItem, strCellBorderBottom, intColumn);
      objAppendedCell                    = objRowDIV.appendChild(objCellDIV);
      objRowDIVEXT.arrayCellDIVs[intColumn] = objAppendedCell;
      /* there is no separator after the last column */
      if ( intColumn != intColumnCount ) 
      {
         objCellSep = FP_RLIST_PRIVATE_CreateCellSeparator(thisObject, strColDividerClass, thisObject.flagShowLines); 
         objRowDIV.appendChild(objCellSep);
      }    
   }

   var strLastColumnWidth = objAppendedCell.style.width = FP_RLIST_PRIVATE_SetLastColumnWidth(thisObject, parseInt(objAppendedCell.style.width, 10), intSeparatorWidth);

   argobjListContainer.appendChild(objRowDIV);
   
   if ( VF_SY506_PRIVATE_IsSelectedItem ( objCurrentItem, true, thisObject ) ) 
   {
      FP_RLIST_PRIVATE_RowSelection(thisObject, objRowDIV, "Initialize");
   }


   /* Now do the rest of the rows */
   for (intItem = 1; intItem < intItemCount; intItem++)
   {
      objCurrentItem = arrayAllItems[intItem];

      objRowDIV = FP_RLIST_PRIVATE_CreateRowDIV(thisObject, objCurrentItem, strCellBorderBottom, intItem);

//#ifscript
     objRowDIVEXT = objRowDIV;
//#else
//#  objRowDIVEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objRowDIV));
//#endif 

      for (intColumn = 1; intColumn <= intColumnCount; intColumn++ )
      {
         objCellDIV                         = FP_RLIST_PRIVATE_CreateCellDIV(thisObject, objCurrentItem, strCellBorderBottom, intColumn);
         objAppendedCell                    = objRowDIV.appendChild(objCellDIV);
         objRowDIVEXT.arrayCellDIVs[intColumn] = objAppendedCell;
    
         if ( intColumn != intColumnCount ) 
         {  
            objCellSep = FP_RLIST_PRIVATE_CreateCellSeparator(thisObject, strColDividerClass, thisObject.flagShowLines); 
            objRowDIV.appendChild(objCellSep);
         }
      }
 
      objAppendedCell.style.width = strLastColumnWidth;

      if (objAppendedCell.style.background != null) objAppendedCell.style.borderBottom = objAppendedCell.style.background;

      argobjListContainer.appendChild(objRowDIV);

      if ( VF_SY506_PRIVATE_IsSelectedItem ( objCurrentItem, true, thisObject ) ) FP_RLIST_PRIVATE_RowSelection(thisObject, objRowDIV, "Initialize");
		
   }

   thisObject.strSelectionStyle = flagStoreSelectionStyle;
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateRowDIV - Create row <DIV> */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateRowDIV( thisObject, argobjCurrentItem, argstrCellBorderBottom, argintItem)
//#else
//# function FP_RLIST_PRIVATE_CreateRowDIV( thisObject:FP_RLIST_Object, argobjCurrentItem, argstrCellBorderBottom:String, argintItem:int)
//#endif 
{
   var thisDocument  = thisObject.objDocument; 
   var objRowDIV     = thisDocument.createElement("DIV");

//#ifscript
     var objRowDIVEXT = objRowDIV;
//#else
//#  var objRowDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objRowDIV,objRowDIVEXT);
//#endif 

   objRowDIV.unselectable       = "on";
   objRowDIVEXT.intRowItemNumber   = argintItem;
   objRowDIVEXT.arrayCellDIVs      = new Array();
   objRowDIVEXT.thisObject         = thisObject;
   objRowDIV.selected           = false;
   objRowDIV.style.borderBottom = argstrCellBorderBottom;
   objRowDIV.style.height       = thisObject.strRowPixelHeight;
   objRowDIVEXT.intRowStoredNumber = argobjCurrentItem.intRowStoredNumber;
   objRowDIV.noWrap             = true;
   objRowDIVEXT.DivType            = "row";
   objRowDIVEXT.SelectArea         = objRowDIV;
   
   var strRowHint = VF_System.FP_Get(thisObject,"uItem.Hint",argintItem + 1,VF_Global_NO_PROPERTY_VALUE,false,thisObject.intOccurrence); 
   
   if ( strRowHint != VF_Global_NO_PROPERTY_VALUE ) objRowDIV.title = strRowHint;

	if (thisObject.strSelectionStyle != "NONE") 
	{
		objRowDIV.attachEvent("onclick", FP_RLIST_EVENT_HANDLER_RowOnClick);
	}

   objRowDIV.style.backgroundColor = "window";

   objRowDIVEXT.strAlternateColor = objRowDIV.style.backgroundColor;

   if ( thisObject.flagItemSmallImage )
   {
      var objSmallImage = thisDocument.createElement("IMG");
      
//#ifscript
       var objSmallImageEXT = objSmallImage;
//#else
//#    var objSmallImageEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#        this.oHTMLExtender.PutExtension(objSmallImage,objSmallImageEXT);
//#endif 
      
       objSmallImage.src = VF_System.ReturnImgSource(argobjCurrentItem.strSmallImage);
       objSmallImage.style.verticalAlign = "bottom";
          
       objSmallImageEXT.ReadOnly = true;
          
       objRowDIV.appendChild(objSmallImage);
   }

   return(objRowDIV);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateCellDIV - Create row <DIV> */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateCellDIV( thisObject, argobjCurrentItem, argstrCellBorderBottom, argintColumn)
//#else
//# function FP_RLIST_PRIVATE_CreateCellDIV( thisObject:FP_RLIST_Object, argobjCurrentItem:FP_RLIST_PRIVATE_ItemNode, argstrCellBorderBottom:String, argintColumn:int)
//#endif 
{
   var thisDocument   = thisObject.objDocument;
   
//#ifscript   
    var intColumnCount = thisObject.intColumnCount;
    var objColumn = thisObject.arrayColumns[argintColumn];
    var objCell = argobjCurrentItem.arrayCells[argintColumn];
//#else
//# var intColumnCount : int = thisObject.intColumnCount;
//# var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[argintColumn];
//# var objCell : FP_RLIST_PRIVATE_Cell = argobjCurrentItem.arrayCells[argintColumn];
//#endif    
  
   var objCellDIV = thisDocument.createElement("DIV");

//#ifscript
     var objCellDIVEXT = objCellDIV;
//#else
//#  var objCellDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objCellDIV,objCellDIVEXT);
//#endif 

   objCellDIVEXT.ReadOnly    = objCell.ReadOnly;
   objCellDIV.className      = "FP_RLIST_Cell";
   objCellDIV.unselectable   = "on";
   
   var intColumnWidth = parseInt(objColumn.strColumnWidth, 10);

   if (VF_System.usingExplorer) objCellDIV.style.display = "inline";
   /* First and last columns have to be 1 pixel less in width to account for the container list border */
   if ( ( argintColumn == 1 ) || ( argintColumn == intColumnCount ) ) 
   {
      intColumnWidth--;
   }
   
   /* Chrome and Safari - when there is one column I couldn't make it align properly except if I do this ... */
   if ( (VF_System.usingWebkit) && ( intColumnCount > 1) )
   {
      objCellDIV.style.position = "relative";
      objCellDIV.style.top = "-3px";      
   }
   
   objCellDIV.style.width = intColumnWidth.toString() + "px";
   objCellDIV.setAttribute("name", argintColumn.toString() + "_Cell");
   objCellDIVEXT.AlphaValue     = objCell.AlphaValue;
   objCellDIVEXT.BlankZero      = objCell.BlankZero;

	if (objColumn.flagCheckboxes)
	{
      /* CCS 147476. It's actually IE, if you don't set the type in the createELement, setting it to checked is ignored. */
      var objCellChkBox;
      (VF_System.usingExplorer) ? objCellChkBox = thisDocument.createElement("<input type=checkbox />") : objCellChkBox = thisDocument.createElement("input");

       objCellDIV.insertAdjacentElement("afterBegin",objCellChkBox);    
       objCellChkBox.type = "checkbox";
       objCellChkBox.checked = (objCell.Value.toUpperCase() == "CHECKED");

       objCellDIV.align = objColumn.strAlign.toLowerCase();
	}
	else
	{
		objCellDIV.innerText         = objCellDIV.strPreviousContent = objCell.Value;
		objCellDIV.noWrap            = true;
		objCellDIVEXT.DivType           = "Cell";
		objCellDIV.style.textAlign   = objColumn.strAlign.toLowerCase();

      /* if the cell is flagged as a cell to display totals, store a reference in an array */
      if (objCell.SpecifiedType == "T") thisObject.arrayTotalCells[argintColumn] = objCellDIV;
	}

   if ( !(objCellDIVEXT.ReadOnly) && (objCell.SpecifiedType != "T") )
   {
   
//#ifscript   
      objCellDIV.tabIndex = argobjCurrentItem.intRowStoredNumber + argintColumn;
//#else
//#   objCellDIV.tabIndex = int(argobjCurrentItem.intRowStoredNumber + argintColumn);
//#endif 
      objCellDIVEXT._INPUTATTRS = objColumn.strInputAttributes;   
      objCellDIV.attachEvent("onkeyup", FP_RLIST_EVENT_HANDLER_CellOnKeyUp);
      objCellDIV.attachEvent("onkeydown", function(evt) {evt.cancelBubble = true;});
      objCellDIV.attachEvent("onblur", FP_RLIST_CellOnDeActivate); 
      objCellDIVEXT.uInError = false;
      objCellDIV.contentEditable = true;      
      objCellDIV.unselectable   = "off";      
   }
   else objCellDIV.tabIndex = -1;

   /* set a tabIndex pty to the current item's cell to interchange it during column sorting */
   
   objCell.tabIndex = objCellDIV.tabIndex; 

   return(objCellDIV);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SetLastColumnWidth - Set the width of the last column                       */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_SetLastColumnWidth( thisObject, argintLastColumnWidth, argintSeparatorWidth)
//#else
//# function FP_RLIST_PRIVATE_SetLastColumnWidth( thisObject:FP_RLIST_Object, argintLastColumnWidth:int, argintSeparatorWidth:int)
//#endif 
{
   var intLastColumnWidth   = argintLastColumnWidth;
   var intColWidthRemainder = parseInt(thisObject.strListWidth, 10) - thisObject.intTotColWidth; 

   if ( intColWidthRemainder > 0 ) 
   {
      intLastColumnWidth = (argintLastColumnWidth + intColWidthRemainder ) - argintSeparatorWidth;
   }
   else 
   {      
      thisObject.strListWidth = (parseInt(thisObject.strListWidth, 10) - intColWidthRemainder + argintSeparatorWidth).toString() + "px";

      if (thisObject.objListContainer != null) thisObject.objListContainer.parentElement.style.width = thisObject.strListWidth;
   }

   /* intLastColumnWidth = intLastColumnWidth + thisObject.intScrollBarWidth; */
   return( intLastColumnWidth.toString() + "px");
}

/* -------------------------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateCellSeparator - Create a DIV to insert between cells                                    */
/* -------------------------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateCellSeparator( thisObject, argstrColDividerClass, argflagShowLines )
//#else
//# function FP_RLIST_PRIVATE_CreateCellSeparator( thisObject:FP_RLIST_Object, argstrColDividerClass:String, argflagShowLines:Boolean ) : Object 
//#endif 
{
   var thisDocument              = thisObject.objDocument;
   var flagColumnHeaders         = thisObject.flagColumnHeaders;
   var intRowPixelHeight         = parseInt(thisObject.strRowPixelHeight, 10) ;

   var objSeparatorDIV              = thisDocument.createElement("DIV");

//#ifscript
       var objSeparatorDIVEXT = objSeparatorDIV;
//#else
//#    var objSeparatorDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#        this.oHTMLExtender.PutExtension(objSeparatorDIV,objSeparatorDIVEXT);
//#endif 

    objSeparatorDIV.className    = argstrColDividerClass;
    objSeparatorDIV.style.height = intRowPixelHeight.toString() + "px";
    objSeparatorDIVEXT.ReadOnly  = true;
   
   if (VF_System.usingExplorer) 
   {
      objSeparatorDIV.style.display = "inline";
      objSeparatorDIV.style.borderTop = "solid 1px Highlight";
   }
   
   return(objSeparatorDIV);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateColumnHeadings - Create and set dhtml properties to the Column Headings */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateColumnHeadings ( thisObject, argobjOuterMostContainer )
//#else
//# function FP_RLIST_PRIVATE_CreateColumnHeadings ( thisObject:FP_RLIST_Object, argobjOuterMostContainer )
//#endif 
{
   var thisDocument         = thisObject.objDocument;
   var intColumnCount       = thisObject.intColumnCount;
   var objAppendedColHdg    = null;
   var objAppendedSeparator = null;
   var objColHdg            = null;
   var intColumn            = 0;  
   
   /* Create an array of Column Header DIV objects to access the column clicked using the uSortColumn number */
   thisObject.arrayColumnHeaders = new Array();

   /* Create and append the first column and column sep */

   objColHdg = FP_RLIST_PRIVATE_SetDhtmlPtys(thisObject, 1, 1);
   
	objColHdg.style.borderLeft = "1px solid Highlight";

   objAppendedColHdg             = argobjOuterMostContainer.appendChild(objColHdg);
   
   /* Add the column header DIV to the array */
   thisObject.arrayColumnHeaders[thisObject.arrayColumnHeaders.length] = objAppendedColHdg;

   if ( thisObject.flagItemSmallImage ) objAppendedColHdg.style.width = FP_RLIST_PRIVATE_AdjustConvertWidth(objAppendedColHdg.style.width, 16);

   for (intColumn = 2; intColumn <= intColumnCount; intColumn++ )
   {
      objAppendedSeparator = argobjOuterMostContainer.appendChild(FP_RLIST_PRIVATE_CreateColHdgSeparator(thisDocument, thisObject.strColumnHeaderHeight, "FP_RLIST_ColDivider")); 
      objColHdg            = FP_RLIST_PRIVATE_SetDhtmlPtys(thisObject, intColumn, intColumnCount);
      objAppendedColHdg    = argobjOuterMostContainer.appendChild(objColHdg);
      thisObject.arrayColumnHeaders[thisObject.arrayColumnHeaders.length] = objAppendedColHdg;
   }
  
	objAppendedColHdg.style.borderRight = "1px solid Highlight";

}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SetDhtmlPtys - Set properties for column header  */
/* --------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_SetDhtmlPtys( thisObject, argintCurrentColumn, argintColumnCount )
//#else
//# function FP_RLIST_PRIVATE_SetDhtmlPtys( thisObject:FP_RLIST_Object, argintCurrentColumn:int, argintColumnCount:int )
//#endif 
{
   var thisDocument   = thisObject.objDocument;

//#ifscript
    var objColumn      = thisObject.arrayColumns[argintCurrentColumn];
//#else
//# var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[argintCurrentColumn];
//#endif

   var objColumnHeaderDIV = thisDocument.createElement("DIV");
    
//#ifscript
       var objColumnHeaderDIVEXT = objColumnHeaderDIV;
//#else
//#    var objColumnHeaderDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#        this.oHTMLExtender.PutExtension(objColumnHeaderDIV,objColumnHeaderDIVEXT);
//#endif 
     
    objColumnHeaderDIVEXT.thisObject      = thisObject;

   /* Set the DHTML properties of the visualized object */

   objColumnHeaderDIV.innerText       = objColumn.strCaption;
   objColumnHeaderDIV.style.textAlign = objColumn.strCaptionAlign;
   objColumnHeaderDIV.style.width     = objColumn.strColumnWidth;
   objColumnHeaderDIV.style.height    = thisObject.strColumnHeaderHeight;
   objColumnHeaderDIV.setAttribute("name", argintCurrentColumn.toString() + "_ColHdg");
   objColumnHeaderDIV.noWrap          = true;
   objColumnHeaderDIV.unselectable    = "on";
   objColumnHeaderDIV.className       = "FP_RLIST_Colhdg";

   if (VF_System.usingExplorer) 
   {
      objColumnHeaderDIV.style.paddingTop = "2px";
      objColumnHeaderDIV.style.paddingLeft = "2px";
      objColumnHeaderDIV.style.display = "inline";
   }
   else if (argintCurrentColumn == 1)
   {
      objColumnHeaderDIV.style.width = parseInt(objColumn.strColumnWidth, 10) - 1 + "px";
   }
   
   objColumnHeaderDIVEXT.DivType         = "ColHdg";

   if ( ( objColumn.flagSortOnClick == true ) && (thisObject.uEnabled) )
   {
      objColumnHeaderDIV.attachEvent("onclick" , FP_RLIST_EVENT_HANDLER_ColumnOnClick);
      objColumnHeaderDIV.setAttribute("acceptonclick", "true");

      objColumnHeaderDIVEXT.arraySortImages = new Array();

      var objAppendedAscImg  = objColumnHeaderDIV.appendChild(FP_RLIST_PRIVATE_CreateSortImage(thisDocument, "fp_im006.gif"));
      var objAppendedDescImg = objColumnHeaderDIV.appendChild(FP_RLIST_PRIVATE_CreateSortImage(thisDocument, "fp_im007.gif"));

      objColumnHeaderDIVEXT.arraySortImages["ASCENDING"]  = objAppendedAscImg;
      objColumnHeaderDIVEXT.arraySortImages["DESCENDING"] = objAppendedDescImg;
      objColumnHeaderDIVEXT.arraySortImages["CurrentImage"] = null;
   }

   return(objColumnHeaderDIV);
}

/* ------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_AdjustConvertWidth - Adjust a width by a given amount in pixels      */
/* ------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_AdjustConvertWidth(argstrWidth, intPixels)
//#else
//# function FP_RLIST_PRIVATE_AdjustConvertWidth(argstrWidth:String, intPixels:int):String
//#endif 
{
   var intNewWidth = parseInt(argstrWidth, 10) + intPixels;
   return(intNewWidth.toString() + "px");
}

/* --------------------------------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateSortImage - Create the sort arrow images, append them and add an array to the column header */
/* -------------------------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateSortImage( argthisDocument, argstrImageGif )
//#else
//# function FP_RLIST_PRIVATE_CreateSortImage( argthisDocument, argstrImageGif:String ):Object 
//#endif 
{
   var objImage                = argthisDocument.createElement("IMG");
   
//#ifscript
      var objImageEXT = objImage;
//#else
//#   var objImageEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objImage,objImageEXT);
//#endif 
      
       objImage.src            = VF_System.ReturnImgSource(argstrImageGif);
       objImage.style.display  = "none";
       objImage.style.position = "relative";
       objImage.style.left     = "5px";
          
   return(objImage);
}

/* -------------------------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateColHdgSeparator - Create a DIV to insert between the column heading to do the resizing  */
/* -------------------------------------------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CreateColHdgSeparator( argthisDocument, argstrHeight, argstrColDividerClass )
//#else
//# function FP_RLIST_PRIVATE_CreateColHdgSeparator( argthisDocument, argstrHeight:String, argstrColDividerClass:String ):Object 
//#endif 
{
   var objSeparatorDIV              = argthisDocument.createElement("DIV");
   
//#ifscript
      var objSeparatorDIVEXT = objSeparatorDIV;
//#else
//#   var objSeparatorDIVEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objSeparatorDIV,objSeparatorDIVEXT);
//#endif 
     
      objSeparatorDIV.className    = argstrColDividerClass;
      	   
	   objSeparatorDIV.style.height    = argstrHeight;
      objSeparatorDIV.attachEvent("onmousedown", FP_RLIST_EVENT_HANDLER_StartColumnResize);
      objSeparatorDIV.style.MozUserSelect = "none";

      if (VF_System.usingExplorer) 
      {
         objSeparatorDIV.style.borderBottom = "solid 1px Highlight";
         objSeparatorDIV.style.display = "inline";
      }
  	   else 
  	   {
  	      objSeparatorDIV.style.borderTop = "solid 1px Highlight";
         
         if (VF_System.usingWebkit) 
         {
            objSeparatorDIV.style.position = "relative";
            objSeparatorDIV.style.top = "10px";
         }
         
  	   }

      return(objSeparatorDIV);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateOuterContainer - Create the DIV container for the rows           */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateOuterContainer( thisObject, argflagColumnHeaders )
//#else
//# function FP_RLIST_PRIVATE_CreateOuterContainer( thisObject:FP_RLIST_Object, argflagColumnHeaders:Boolean ):Object 
//#endif 
{
   var thisDocument  = thisObject.objDocument;
   var objOuterContainer = thisDocument.createElement("DIV");
   
//#ifscript
      var objOuterContainerEXT = objOuterContainer;
//#else
//#   var objOuterContainerEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#       this.oHTMLExtender.PutExtension(objOuterContainer,objOuterContainerEXT);
//#endif 
         
   objOuterContainer.style.height = thisObject.strListHeight;
   objOuterContainer.style.width  = thisObject.strListWidth;
   objOuterContainer.className    = "FP_RLIST_OuterContainer";
   objOuterContainer.unselectable = "on";

   /* if ( argflagColumnHeaders ) objOuterContainer.style.borderTop = ""; */

   return(objOuterContainer);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateListContainer - Create container for the rows                           */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_CreateListContainer( thisObject )
//#else
//# function FP_RLIST_PRIVATE_CreateListContainer( thisObject:FP_RLIST_Object )
//#endif 
{
   var thisDocument = thisObject.objDocument;

   objListContainer                   = thisDocument.createElement("DIV");
   
//#ifscript
     var objListContainerEXT = objListContainer;
//#else
//#  var objListContainerEXT : FP_RLIST_HTML_Extension = new FP_RLIST_HTML_Extension();
//#      this.oHTMLExtender.PutExtension(objListContainer,objListContainerEXT);
//#endif 
 
   objListContainer.className         = "FP_RLIST_ListContainer";
   
   /* Pointer to a cell when it is being changed */
   
   objListContainerEXT.objCellBeingEdited      = null;
  
   objListContainer.tabIndex      = 1;

   thisObject.objListContainer = objListContainer;

   objListContainerEXT.thisObject = thisObject;
   
   return(objListContainer);
}



/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CreateCell - Creat a Cell object                     */
/* --------------------------------------------------------------------- */ 

//#ifscript  
function FP_RLIST_PRIVATE_CreateCell(thisObject, argintColumn, argintItem)
//#else
//# function FP_RLIST_PRIVATE_CreateCell(thisObject:FP_RLIST_Object, argintColumn:int, argintItem:int): FP_RLIST_PRIVATE_Cell 
//#endif 
{
//#ifscript    
   var intColumn    = argintColumn;
   var intItem      = argintItem + 1;
   var strColumn    = "Column" + intColumn.toString() + ".Cell";
   var objCell      = null; 
   var  objColumn   = thisObject.arrayColumns[intColumn];
//#else
//#   var intColumn:int    = argintColumn;
//#   var intItem:int      = argintItem + 1;
//#   var strColumn:String = "Column" + intColumn.toString() + ".Cell";
//#   var objCell : FP_RLIST_PRIVATE_Cell = null; 
//#   var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[intColumn];
//#endif    

//#ifscript
    objCell = new Object();
//#else
//# objCell = new FP_RLIST_PRIVATE_Cell();
//#endif 

   objCell.AlphaValue = true;
   objCell.ReadOnly   = VF_System.FP_GetBool(thisObject, strColumn + ".ReadOnly",intItem,"TRUE",thisObject.intOccurrence);
   objCell.BlankZero  = VF_System.FP_GetBool(thisObject, strColumn + ".BlankZero",intItem,"FALSE",thisObject.intOccurrence);
   
/* Start changes to allow change of cell type from numeric to alpha */
   
   objCell.SpecifiedType   = VF_System.FP_Get(thisObject, strColumn + ".Type",intItem," ", true, thisObject.intOccurrence );

   if (objCell.SpecifiedType == "A")
   {
      objCell.Value = VF_System.FP_Get(thisObject, strColumn + ".Value",intItem," ", false,thisObject.intOccurrence);
   }  
   else
   {
      /* End changes to allow change of cell type from numeric to alpha */

//#ifscript      
      var objCellValue = VF_System.FP_GetVariant(thisObject, strColumn + ".Value", intItem, thisObject.intOccurrence);
//#else
//#   var objCellValue : VF_SY501_VariantInfo = VF_System.FP_GetVariant(thisObject, strColumn + ".Value", intItem, thisObject.intOccurrence);
//#endif 

      if ( !objCellValue.flagFound ) objCellValue.value = " "; 
      else if ( objCellValue.strType == "A" ) objCellValue.value = objCellValue.strAlphaValue; 
      else 
      {
         if ( ( objCell.BlankZero ) && ( objCellValue.floatNumericValue == 0 ) ) objCellValue.value = "";
         else
         {
            objCellValue.value = VF_System.MakeNumericString(objCellValue.floatNumericValue, objColumn.intPrecision, true);

            /* Apply any requested formatting to numeric values */
            if (objColumn.flagShowThousands) objCellValue.value = FP_RLIST_PRIVATE_DelimitNumber(objCellValue.value);
            if (objColumn.flagShowCurrency)  objCellValue.value = objColumn.strCurrencyChar + objCellValue.value;
         }

         objCell.AlphaValue = false;

         /* Cell type Total indicates that this cell will receive a value equal to the sum of the cells in the column it belongs to */
         
         if (objCell.SpecifiedType == "T") objCell.ReadOnly = true;      
      
      }
      
      objCell.Value = objCellValue.value;      
   }

   return(objCell);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_AddChildNode - Add a child Node                      */
/* --------------------------------------------------------------------- */ 
  
//#ifscript  
function FP_RLIST_PRIVATE_AddChildNode( thisObject, argobjNode )
//#else
//# function FP_RLIST_PRIVATE_AddChildNode( thisObject:FP_RLIST_Object, argobjNode:FP_RLIST_PRIVATE_ItemNode )
//#endif 
{
   argobjNode.intParentItem--;

//#ifscript
    var objParent = thisObject.arrayAllItems[argobjNode.intParentItem];
//#else
//# var objParent : FP_RLIST_PRIVATE_ItemNode = thisObject.arrayAllItems[argobjNode.intParentItem];
//#endif 

   argobjNode.intParentItem++;

   objParent.arrayChildNodes[objParent.arrayChildNodes.length] = argobjNode;
}


/* ------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_ReturnInPixels - Return an integer + "px" */
/* ------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_ReturnInPixels ( argintNumber )
//#else
//# function FP_RLIST_PRIVATE_ReturnInPixels ( argintNumber:int ):String 
//#endif 
{
   return(argintNumber.toString() + "px");
}

/* ------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_CalculatePercemtWidth - Calculate the width of the column */
/* ------------------------------------------------------------------------- */ 

//#ifscript
function FP_RLIST_PRIVATE_CalculatePercemtWidth ( argintPercentageWidth, argstrListWidth )
//#else
//# static function FP_RLIST_PRIVATE_CalculatePercemtWidth ( argintPercentageWidth:int, argstrListWidth:String ):int
//#endif 
{
   var intListWidth = parseInt(argstrListWidth ,10);
   return argintPercentageWidth == 0 ? 120 : (Math.round((intListWidth * argintPercentageWidth) / 100));
}

/* -------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_RowSelection - Handle the selection of a row                          */
/* --------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_RowSelection(thisObject, argobjRow, argobjEvent)
//#else
//# function FP_RLIST_PRIVATE_RowSelection(thisObject:FP_RLIST_Object, argobjRow, argobjEvent)
//#endif 
{
   var strSelectionStyle     = thisObject.strSelectionStyle;
   var objClickedRow         = argobjRow;
   var objCurrentSelectedRow = thisObject.objCurrentSelectedRow;

   if ( typeof argobjEvent != "object" ) FP_RLIST_PRIVATE_SelectRow( objClickedRow, true );
   else 
   {
      if ( strSelectionStyle == "SINGLE" ) thisObject.strKeyPressed = "Single";
      else 
      {
         if      (argobjEvent.shiftKey) thisObject.strKeyPressed = "Shift";
         else if (argobjEvent.ctrlKey)  thisObject.strKeyPressed = "Ctrl";
         else                           thisObject.strKeyPressed = "Single";
      }

      FP_RLIST_PRIVATE_MultipleRowSelection(objClickedRow);
   }

   thisObject.objCurrentSelectedRow = objClickedRow;
}

/* --------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_MultipleRowSelection - Select multiple rows                            */
/* --------------------------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_MultipleRowSelection(argobjRow)
{
   var objClickedRow  = argobjRow;

//#ifscript   
      var thisObject     = objClickedRow.thisObject;
//#else
//#   var thisObject : FP_RLIST_Object = this;
//#endif    
      
   var arraySelectedRows     = thisObject.arraySelectedRows;
   var intLength             = arraySelectedRows.length;
   var strKeyPressed         = thisObject.strKeyPressed;
   var objCurrentSelectedRow = thisObject.objCurrentSelectedRow;

   if ( ( objCurrentSelectedRow == null ) || ( strKeyPressed == "Single" ) )
   {
      FP_RLIST_PRIVATE_UnSelectAll(arraySelectedRows, true);

      /* Recreate the arrays at once instead of entry by entry in the UnselectRow invocation of UnSelectAll */
      thisObject.arraySelectedRows = null;
      thisObject.arraySelectedRows = new Array();
      thisObject.arraySelectedRowsByNumber = null;
      thisObject.arraySelectedRowsByNumber = new Array();

      FP_RLIST_PRIVATE_SelectRow(objClickedRow, true);
   }
   else if ( strKeyPressed == "Shift" ) 
   {
      FP_RLIST_PRIVATE_SelectBlock(thisObject.objListContainer.childNodes, arraySelectedRows, objClickedRow, objCurrentSelectedRow);
   }
   else if (strKeyPressed == "Ctrl")  
   {
      if ( objClickedRow.selected ) FP_RLIST_PRIVATE_UnSelectRow(objClickedRow, true, true);
      else                          FP_RLIST_PRIVATE_SelectRow(objClickedRow, true);
   }		

}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SelectBlock - Select a block of rows                 */
/* --------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_SelectBlock(argListChildNodes, argarraySelectedRows, argobjClickedRow, argobjCurrentSelectedRow)
{
   var arrayListNodes    = argListChildNodes;
   var arraySelectedRows = argarraySelectedRows;
   var intStartInd = 0; 
   var intStopInd = 0; 
   
//#ifscript   
   var argobjClickedRowEXT = argobjClickedRow;
   var argobjCurrentSelectedRowEXT = argobjCurrentSelectedRow;
//#else
//#  var argobjClickedRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(argobjClickedRow) );      
//#  var argobjCurrentSelectedRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(argobjCurrentSelectedRow) );      
//#endif 	       
   
   if ( argobjClickedRowEXT.intRowItemNumber > argobjCurrentSelectedRowEXT.intRowItemNumber )
   {
      intStartInd = argobjCurrentSelectedRowEXT.intRowItemNumber + 1;
      intStopInd  = argobjClickedRowEXT.intRowItemNumber;
   }
   else if ( argobjClickedRowEXT.intRowItemNumber < argobjCurrentSelectedRowEXT.intRowItemNumber )
   {
      intStartInd = argobjClickedRowEXT.intRowItemNumber;
      intStopInd  = argobjCurrentSelectedRowEXT.intRowItemNumber - 1;;
   }
   else return;

	for ( var i = intStartInd; i <= intStopInd; i++ )
	{
      if ( !arrayListNodes[i].selected )   FP_RLIST_PRIVATE_SelectRow(arrayListNodes[i], true);
	}	
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_UnSelectAll - Unselect all selected rows             */
/* --------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_UnSelectAll(argarraySelectedRows, argflagDeSelectItem)
{
   var arraySelectedRows = argarraySelectedRows;
   var intLength         = argarraySelectedRows.length;

   for (var i = 0; i < intLength; i++)
   {
      if ( arraySelectedRows[i] != null ) FP_RLIST_PRIVATE_UnSelectRow(arraySelectedRows[i], false, argflagDeSelectItem);
   }
   
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SelectRow - Change the style of a row                */
/* --------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_SelectRow( argobjRow, argflagSelectItem )
{
   var objSelectedRow = argobjRow;
//#ifscript   
   var objSelectedRowEXT = objSelectedRow;
   var thisObject = objSelectedRow.thisObject;
//#else
//#  var objSelectedRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objSelectedRow) );      
//#  var thisObject : FP_RLIST_Object = this;
//#endif 	       

   objSelectedRowEXT.SelectArea.style.background = "Highlight";
   objSelectedRowEXT.SelectArea.style.color      = "HighlightText";
   objSelectedRow.selected                    =  true;

   FP_RLIST_PRIVATE_AddRow(thisObject.arraySelectedRows, objSelectedRow, thisObject.arraySelectedRowsByNumber);

   if ( argflagSelectItem ) FP_RLIST_PRIVATE_SelectItem(thisObject, thisObject.arrayAllItems[objSelectedRowEXT.intRowItemNumber]);
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_AddRow - Add a row to the array of selected rows                              */
/* ---------------------------------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_AddRow( argarraySelectedRows, argobjRow, argarraySelectedRowsByNumber )
{
   argarraySelectedRows[argarraySelectedRows.length] = argobjRow;
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_UnSelectRow - Change the style of a row and unselect it                       */
/* ---------------------------------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_UnSelectRow( argobjRow, argflagRemoveFromArray, argflagDeSelectItem )
{
   var objUnSelectedRow = argobjRow;

//#ifscript   
   var objUnSelectedRowEXT = objUnSelectedRow;
   var thisObject = argobjRow.thisObject;
//#else
//#  var objUnSelectedRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objUnSelectedRow) );      
//#  var thisObject : FP_RLIST_Object = this;
//#endif 	       

    objUnSelectedRowEXT.SelectArea.style.backgroundColor = objUnSelectedRowEXT.strAlternateColor;
	objUnSelectedRowEXT.SelectArea.style.color           = "#000"; 
	objUnSelectedRow.selected                         = false;

   /* if multiple selection, when a single click occurs there is no point on removing each element from the array */
   /* because the array has to be recreated anyway */

   if ( argflagRemoveFromArray ) FP_RLIST_PRIVATE_RmvRow(thisObject.arraySelectedRows, objUnSelectedRow, objUnSelectedRowEXT, thisObject.arraySelectedRowsByNumber);

   /* If the list supports multi entry selection, deselect the item, otherwise VF_SY506 does it automatically */
   
   if ( ( thisObject.strSelectionStyle == "MULTIPLE" ) && ( argflagDeSelectItem ) )
   {   
      VF_SY506_PRIVATE_DeSelectItem(thisObject.arrayAllItems[objUnSelectedRowEXT.intRowItemNumber],thisObject);
   } 
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_RmvRow - Remove a row from the array of selected rows        */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_RmvRow( argarraySelectedRows, argobjRow, argobjRowEXT, argarraySelectedRowsByNumber )
//#else
//# function FP_RLIST_PRIVATE_RmvRow( argarraySelectedRows:Array, argobjRow:IHTMLElement, argobjRowEXT:FP_RLIST_HTML_Extension, argarraySelectedRowsByNumber:Array )
//#endif 
{
   var intArrayLength = argarraySelectedRows.length;

   for (var i = 0; i < intArrayLength; i++)
   {
      if ( argarraySelectedRows[i] == argobjRow )
      {
         argarraySelectedRows[i] = null;
         argarraySelectedRowsByNumber[argobjRowEXT.intRowStoredNumber] = null;
         break;
      }
   }

}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_AscendingSort - Ascending sort colum                 */
/* --------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_AscendingSort(argobjRowA, argobjRowB)
{
   var intSortCell = VF_System.VF_Global_intItemSortCell;
//#else
//# function FP_RLIST_PRIVATE_AscendingSort(argobjRowA:FP_RLIST_PRIVATE_ItemNode, argobjRowB:FP_RLIST_PRIVATE_ItemNode)
//# {
//#    var intSortCell : int = VF_System.VF_Global_intItemSortCell;
//#endif 

   if (argobjRowA.arrayCells[intSortCell].Value > argobjRowB.arrayCells[intSortCell].Value) return(1); 
   else if (argobjRowA.arrayCells[intSortCell].Value < argobjRowB.arrayCells[intSortCell].Value) return(-1);
   
   return(0);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_DescendingSort - Descending sort colum                */
/* --------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_DescendingSort(argobjRowA, argobjRowB)
{
   var intSortCell = VF_System.VF_Global_intItemSortCell;
//#else
//# function FP_RLIST_PRIVATE_DescendingSort(argobjRowA:FP_RLIST_PRIVATE_ItemNode, argobjRowB:FP_RLIST_PRIVATE_ItemNode)
//# {
//#    var intSortCell : int = VF_System.VF_Global_intItemSortCell;
//#endif 

   if (argobjRowA.arrayCells[intSortCell].Value > argobjRowB.arrayCells[intSortCell].Value) return(-1); 
   else if (argobjRowA.arrayCells[intSortCell].Value < argobjRowB.arrayCells[intSortCell].Value) return(1);
   
   return(0);
}

/* --------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SelectItem - Select an Item and if required, signal selection */
/* --------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_SelectItem(thisObject, argobjItem)
//#else
//# function FP_RLIST_PRIVATE_SelectItem(thisObject:FP_RLIST_Object, argobjItem:FP_RLIST_PRIVATE_ItemNode)
//#endif 
{
   VF_SY506_PRIVATE_SelectItem(argobjItem,thisObject);

   if ( thisObject.flagSignalSelection ) VF_SY506_PRIVATE_HandleEvent(thisObject,"SELECTED");  

}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------  T R E E  V I E W  E V E N T   H A N D L E R S  ----- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_ExpandCollapse - Handle onclick on a plus/minus image  */
/* ---------------------------------------------------------------------------- */ 
function FP_RLIST_EVENT_HANDLER_ExpandCollapse( argobjEvent, argShowExpanded )
{
//#ifscript   
    var objParentRow       = null;
    var objParentRowEXT    = null; 
    var objShowHideArea    = null;
    var objShowHideAreaEXT = null; 
//#else
//#   var objParentRow:Object    = null;
//#   var objParentRowEXT : FP_RLIST_HTML_Extension = null; 
//#   var objShowHideArea:Object = null;
//#   var objShowHideAreaEXT : FP_RLIST_HTML_Extension = null; 
//#endif    

   /* If the received parameter has not a srcElement property, this routine has been called to programatically expand */
   /* the tree as opposed to being called as the event handler for the onclick image. When programatically expanding, */
   /* the received argument is a DIV                                                                                 */
	
   if ( argobjEvent.srcElement == null ) 
	{
		objParentRow    = argobjEvent.parentElement;
		objShowHideArea = objParentRow.lastChild;
//#ifscript
        objParentRowEXT    = objParentRow;   
        objShowHideAreaEXT = objShowHideArea;   
//#else
//#     objParentRowEXT    = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objParentRow)); 
//#     objShowHideAreaEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objShowHideArea)); 
//#endif 

		if ( argShowExpanded ) objShowHideAreaEXT.strToggleStatus = "collapsed";
	}
   else 
	{
		objParentRow    = argobjEvent.srcElement.parentElement;
		objShowHideArea = objParentRow.lastChild;
//#ifscript
        objParentRowEXT    = objParentRow;   
        objShowHideAreaEXT = objShowHideArea;   
//#else
//#     objParentRowEXT    = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objParentRow)); 
//#     objShowHideAreaEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objShowHideArea)); 
//#endif 
	}


   if ( objShowHideAreaEXT.strToggleStatus == "collapsed" ) 
   {
      objShowHideArea.style.display               = "block";
      objShowHideAreaEXT.strToggleStatus          = "expanded";
      objParentRowEXT.objPlusImage.style.display  = "none";
      objParentRowEXT.objMinusImage.style.display = "inline";
   }
   else if ( objShowHideAreaEXT.strToggleStatus == "expanded" ) 
   {
      objShowHideArea.style.display               = "none";
      objShowHideAreaEXT.strToggleStatus          = "collapsed";
      objParentRowEXT.objPlusImage.style.display  = "inline";
      objParentRowEXT.objMinusImage.style.display = "none";
   }

   argobjEvent.cancelBubble = true;

   return; 
}

/* ------------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_SelectTreeItem - Handle Item Selection                      */
/* ---------------------------------------------------------------------------- */ 

function FP_RLIST_EVENT_HANDLER_SelectTreeItem( argobjEvent )
{
   if (VF_System.flagBusy) return;  

   var objParentRow = argobjEvent.srcElement.parentElement;
  
//#ifscript  
     var objParentRowEXT = objParentRow; 
     var thisObject = objParentRow.thisObject;
//#else
//#   var objParentRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objParentRow));  
//#   var thisObject : FP_RLIST_Object = this;
//#endif 

   if (thisObject == null ) 
   {
      argobjEvent.cancelBubble = true;
      return;
   }

   var flagStoreSignalSelection = thisObject.flagSignalSelection;
   var intLevelSignalSelection  = thisObject.intLevelSignalSelection;

   if ( thisObject.flagSignalSelection ) 
   {
      if ( ( ( intLevelSignalSelection > 0 ) && ( objParentRowEXT.intItemLevel == intLevelSignalSelection) ) || ( intLevelSignalSelection == 0 ) ) 
      {   
         thisObject.flagSignalSelection = true;
      }  
      else 
      {
         thisObject.flagSignalSelection = false;
      } 
   }

   FP_RLIST_PRIVATE_RowSelection(thisObject, objParentRow, argobjEvent);

   thisObject.flagSignalSelection = flagStoreSignalSelection;
         
   argobjEvent.cancelBubble = true;
}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---------------  L I S T / G R I D  E V E N T   H A N D L E R S  ---- */
/* --------------------------------------------------------------------- */ 
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_ColumnOnClick - Handle a click on the column heading */
/* ------------------------------------------------------------------------ */ 
  
function FP_RLIST_EVENT_HANDLER_ColumnOnClick( argobjEvent )
{
   var objColumnClicked = null; 

   if (VF_System.flagBusy) return;  
  
   /* Set the column DIV as the active one. This will trigger the current Cell's ondeactivate to fire */
   
//#ifscript
   objColumnClicked = VF_System.getSrcElement(argobjEvent, "acceptonclick", null);
   if (objColumnClicked == null) return; 
   var thisObject = objColumnClicked.thisObject;
//#else
//# var thisObject : FP_RLIST_Object = this;
//# /* CCS 147477 */
//# objColumnClicked = argobjEvent.srcElement;
//# if (objColumnClicked == null) return; 
//#endif    

   thisObject.objColumnClicked = objColumnClicked;

   /* Disable signal selection because sorting involves unselecting and reselecting the row in its new location */

   var flagStoredSignalSelection    = thisObject.flagSignalSelection;

   thisObject.flagSignalSelection   = false;
   VF_System.VF_Global_intItemSortCell = parseInt(objColumnClicked.getAttribute("name"), 10);
   FP_RLIST_PRIVATE_UnSelectAll(thisObject.arraySelectedRows, false);
   
   /* Before sorting the columns, destroy the array with rows by stored item number */
   
   thisObject.arraySelectedRowsByNumber = null;
   thisObject.arraySelectedRowsByNumber = new Array();

   /* Populate the array of rows by stored item number. The elements are created with the stored number of the selected */
   /* row so that when resetting the row DIVs it can be directly accessed instead having to loop each time through the */
   /* selected rows array to see if the current DIV is selected */
      
   var intStoredNumber = 0;
   var arraySelectedRows = thisObject.arraySelectedRows;
   var intSelRowsLength  = arraySelectedRows.length;
   var objTempRow = null;
//#ifscript   
   var objTempRowEXT = null;
//#else
//#  var objTempRowEXT : FP_RLIST_HTML_Extension = null;      
//#endif 	       
  
   for (var i=0; i < intSelRowsLength; i++ )
   {
      if ( arraySelectedRows[i] != null ) 
      { 
         objTempRow = arraySelectedRows[i];
//#ifscript
         objTempRowEXT = objTempRow;
//#else
//#      objTempRowEXT = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objTempRow) );      
//#endif          
         intStoredNumber = objTempRowEXT.intRowStoredNumber;
         thisObject.arraySelectedRowsByNumber[intStoredNumber] = objTempRow; 

      }
   }

   /* Now destroy the selected rows array which will be recreated during the resetting of the DIVs */   
   
   thisObject.arraySelectedRows = null;
   thisObject.arraySelectedRows = new Array();

   FP_RLIST_EVENT_HANDLER_SortColumn(thisObject);

   FP_RLIST_EVENT_HANDLER_ResetDIVs(thisObject);
return;   
   thisObject.flagSignalSelection = flagStoredSignalSelection;
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_SortColumn - Sort the column                     */
/* ------------------------------------------------------------------------ */ 

//#ifscript
function FP_RLIST_EVENT_HANDLER_SortColumn(thisObject)
//#else
//# function FP_RLIST_EVENT_HANDLER_SortColumn(thisObject:FP_RLIST_Object)
//#endif 
{
   var objList             = thisObject.objListContainer;
   var arrayAllItems       = thisObject.arrayAllItems;
  
   var objColumnClicked    = thisObject.objColumnClicked;

//#ifscript
     var objColumnClickedEXT = objColumnClicked;
     var arraySortImages     = objColumnClickedEXT.arraySortImages;
//#else
//#  var objColumnClickedEXT = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objColumnClicked) );      
//#  var arraySortImages : Array = objColumnClickedEXT.arraySortImages;
//#endif          
     
   VF_System.FP_SetNum(thisObject,"uSortColumn",1,VF_System.VF_Global_intItemSortCell,0,thisObject.intOccurrence);

   if ( thisObject.objCurrentSortImg != null ) thisObject.objCurrentSortImg.style.display = "none";

   var strCurrentSortOrder = thisObject.strCurrentSortOrder;

   if ( strCurrentSortOrder != "NOTSET" ) arraySortImages[strCurrentSortOrder].style.display = "none";

   switch ( strCurrentSortOrder )
   {
      case "ASCENDING":

      arraySortImages["DESCENDING"].style.display = "inline";
      arrayAllItems.sort(FP_RLIST_PRIVATE_DescendingSort);
      thisObject.strCurrentSortOrder = "DESCENDING"; 
      break;

      case "DESCENDING":
      case "NOTSET":
      arraySortImages["ASCENDING"].style.display = "inline";
      arrayAllItems.sort(FP_RLIST_PRIVATE_AscendingSort);
      thisObject.strCurrentSortOrder = "ASCENDING";
      break;
   }

   thisObject.objCurrentSortImg = arraySortImages[thisObject.strCurrentSortOrder];
}

/* ------------------------------------------------------------------------------------------------- */
/* FP_RLIST_EVENT_HANDLER_ResetDIVs - Change the inner Text of the DIVs so that they appear as sorted */
/* ------------------------------------------------------------------------------------------------- */ 

//#ifscript  
function FP_RLIST_EVENT_HANDLER_ResetDIVs( thisObject )
//#else
//# function FP_RLIST_EVENT_HANDLER_ResetDIVs( thisObject : FP_RLIST_Object )
//#endif 
{
   var arrayAllItems       = thisObject.arrayAllItems;
   var intItemCount        = thisObject.intItemCount;
   var intColumnCount      = thisObject.intColumnCount;
   var arrayListChildNodes = thisObject.objListContainer.childNodes;
   var intListLength       = arrayListChildNodes.length;
//#ifscript   
   var arrayCellDIVs       = null;
   var objCell             = null;
   var objCurrentItem      = null;
   var intItem             = 0;
   var intNumber           = 0;
//#else
//#   var arrayCellDIVs : Array = null;
//#   var objCell: FP_RLIST_PRIVATE_Cell = null;
//#   var objCurrentItem : FP_RLIST_PRIVATE_ItemNode = null;
//#   var intItem : int       = 0;
//#   var intNumber : int      = 0;
//#endif    
   var arraySelectedRowsByNumber = thisObject.arraySelectedRowsByNumber;
   var objCurrentSelectedRow = thisObject.objCurrentSelectedRow;
   var objRowDiv = null; 
   var objImage = null; 
   var intColumn = 0; 
   var intCurrentRowStoredNumber = 0; 
   var objTempRow = null;

//#ifscript   
   var objTempRowEXT = null;
//#else
//#  var objTempRowEXT : FP_RLIST_HTML_Extension = null;      
//#endif 	       

   
   if (objCurrentSelectedRow != null) 
   {
//#ifscript
         objTempRowEXT = objCurrentSelectedRow;
//#else
//#      objTempRowEXT = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objCurrentSelectedRow) );      
//#endif          
         intCurrentRowStoredNumber = objTempRowEXT.intRowStoredNumber;
   }    
      

   for (intItem = 0; intItem < intListLength; intItem++)
   {
      objRowDiv      = arrayListChildNodes[intItem];
//#ifscript   
   var objRowDivEXT = objRowDiv;
//#else
//#  var objRowDivEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objRowDiv) );      
//#endif 	       
           
      arrayCellDIVs  = objRowDivEXT.arrayCellDIVs;
      
      objCurrentItem = arrayAllItems[intItem];

      /* If the row has an image, swap it */
      
      if ( thisObject.flagItemSmallImage )
      {
         objImage = objRowDiv.childNodes[0];
         if ( ( objImage != null ) && ( objImage.tagName == "IMG" ) ) objImage.src = VF_System.ReturnImgSource(objCurrentItem.strSmallImage);
      }

      var objCellChkBox;
      
      for (intColumn = 1; intColumn <= intColumnCount; intColumn++ )
      {
//#ifscript
         var objTempDIV    = arrayCellDIVs[intColumn]; 
         var objTempDIVEXT = objTempDIV;
         var objColumn = thisObject.arrayColumns[intColumn];         
//#else
//#      var objTempDIV    = arrayCellDIVs[intColumn]; 
//#      var objTempDIVEXT = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objTempDIV) );      
//#      var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[intColumn];
//#endif          

        objCell = objCurrentItem.arrayCells[intColumn];
        
	    if (objColumn.flagCheckboxes)
	    {
            objCellChkBox = objTempDIV.children[0];
            objCellChkBox.checked = (objCell.Value.toUpperCase() == "CHECKED");
        }
        else
        {
            objTempDIV.innerText    = objCell.Value;
            objTempDIVEXT.ReadOnly  = objCell.ReadOnly;
            objTempDIV.tabIndex     = objCell.tabIndex; 
        }                
      }

      if ( objCurrentSelectedRow != null )
      {
         intNumber = objCurrentItem.intRowStoredNumber;

         if ( ( typeof arraySelectedRowsByNumber[intNumber] != "undefined" ) && (arraySelectedRowsByNumber[intNumber] != null ) )
         {
            FP_RLIST_PRIVATE_SelectRow(objRowDiv, false);

            if ( intNumber == intCurrentRowStoredNumber) thisObject.objCurrentSelectedRow = objRowDiv;
         }
      }

      objRowDivEXT.intRowStoredNumber = objCurrentItem.intRowStoredNumber;
      objRowDivEXT.intRowItemNumber   = intItem;
   } 
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_RowOnClick - Select the row                    */
/* ------------------------------------------------------------------------ */ 
  
function FP_RLIST_EVENT_HANDLER_RowOnClick( argobjEvent )   
{
   var objSrcElement = argobjEvent.srcElement;
//#ifscript	        
    var objSrcElementEXT = objSrcElement; 
//#else
//# var objSrcElementEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension( this.oHTMLExtender.GetExtension( objSrcElement ) );  
//#endif 
    var objParentRow = null;
//#ifscript	        
    var objParentRowEXT = null; 
//#else
//# var objParentRowEXT : FP_RLIST_HTML_Extension = null;  
//#endif 

   /* assign the parent row depending on the whether the event fired on a cell or on the row. The event will only */
   /* fire on the row when clicking exactly on the row border. Otherwise it will fire on the cell on click */

   argobjEvent.cancelBubble = true;

   if ( VF_System.flagBusy ) return;

   if ( objSrcElement.tagName == "INPUT" ) 
   {

//#ifscript	
        FP_RLIST_PRIVATE_SetCellValue(objSrcElement.parentElement.parentElement.thisObject, objSrcElement.parentElement.parentElement, objSrcElement.parentElement);
//#else
//#     FP_RLIST_PRIVATE_SetCellValue(this, objSrcElement.parentElement.parentElement, objSrcElement.parentElement);
//#endif 		

   }
   else 
   {   

	   /* set a temporary flag to avoid firing the onactivate event */

		objSrcElementEXT.flagBusy = true;
		
		if ( objSrcElementEXT.DivType == "row" ) 
		{
		   objParentRow = objSrcElement;
		}    
		else 
		{
	        objParentRow = objSrcElement.parentElement;
//#ifscript	        
            objParentRowEXT = objParentRow; 
//#else
//#         objParentRowEXT = FP_RLIST_HTML_Extension( this.oHTMLExtender.GetExtension( objParentRow ) );  
//#endif 

	      if ( !(objSrcElementEXT.ReadOnly) ) 
	      {
//#ifscript	   
             var objParentParent    = objParentRow.parentElement;
             var objParentParentEXT = objParentParent;       
//#else
//#          var objParentParent                              = objParentRow.parentElement;
//#          var objParentParentEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objParentParent) );      
//#endif 	       
	         objParentParentEXT.objCellBeingEdited = FP_RLIST_PRIVATE_EditCell(objSrcElement); 
	      }   
         /* IE doesn't fire the onblur when clicking on a row I think because divs don't have a focus event even though the other browsers do. By setting the focus */
         /* we force the blur to fire on an edited cell if there was one. Otherwise, clicking on an editable cell and then clicking on a different row wouldn't change */         
         /* the cell that was being edited. */         
	      else if (VF_System.usingExplorer)
	      {
	         objSrcElement.ownerDocument.body.focus();
	      }     
		}

//#ifscript
		 FP_RLIST_PRIVATE_RowSelection(objParentRow.parentElement.thisObject, objParentRow, argobjEvent); 
//#else
//#     FP_RLIST_PRIVATE_RowSelection(this, objParentRow, argobjEvent);
//#endif 

	   objSrcElementEXT.flagBusy = false;

   }

   /* Finished */ 

   return; 

}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_EditCell - Edit a cell                                                        */
/* ---------------------------------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_EditCell(argobjCell)
{
   var objParentRow = argobjCell.parentElement;
   var intColumn    = parseInt(argobjCell.getAttribute("name"), 10);
   
//#ifscript   
    var thisObject = objParentRow.parentElement.thisObject;
//#else
//# var thisObject : FP_RLIST_Object = this;
//#endif 

//#ifscript    
   var objColumn = thisObject.arrayColumns[intColumn];
//#else
//# var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[intColumn];
//#endif    

   var intPrecision = objColumn.intPrecision;

   var objCellBeingEdited = argobjCell; 
   
//#ifscript   
   var objCellBeingEditedEXT = objCellBeingEdited; 
//#else
//#  var objCellBeingEditedEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objCellBeingEdited) );      
//#endif    
    
   objCellBeingEdited.className = "FP_RLIST_InputCell FP_RLIST_Cell";
         
   /* If cell cotains a number..... but it can contain "" if BlankZero is true */
   if ( !(objCellBeingEditedEXT.AlphaValue) )
   {
      if ( (objCellBeingEditedEXT.BlankZero) && (objCellBeingEdited.innerText == "") )
      {
         objCellBeingEdited.innerText = objCellBeingEdited.strPreviousContent = VF_System.MakeNumericString(0, objColumn.intPrecision, true);
      }
      /* Strip off the currency symbol if one is being used */
      else if ((objColumn.flagShowCurrency) && (objCellBeingEdited.innerText.substr(0, 1) == objColumn.strCurrencyChar)) 
      {
         objCellBeingEdited.innerText = objCellBeingEdited.innerText.substr(1, objCellBeingEdited.innerText.length  - 1);
      }
   }

   return(objCellBeingEdited);
}


/* -------------------------------------------------------------------- */
/* FP_RLIST_CellOnDeActivate - Handle input on a cell     */
/* -------------------------------------------------------------------- */ 
function FP_RLIST_CellOnDeActivate( argobjEvent )
{

   var objCellDIV         = argobjEvent.srcElement;
//#ifscript	   
     var objCellDIVEXT    = objCellDIV;      
//#else
//#  var objCellDIVEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objCellDIV) );      
//#endif 	       
 
   var objParentRow       = objCellDIV.parentElement;
//#ifscript	   
     var oPE = objParentRow.parentElement;      
//#else
//#  var oPE : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objParentRow.parentElement) );      
//#endif 	      

   var objCellBeingEdited = oPE.objCellBeingEdited;
      
   var intColumn          = parseInt(objCellDIV.getAttribute("name"), 10);
    
//#ifscript   
    var thisObject		  = objParentRow.parentElement.thisObject;
    var objColumn          = thisObject.arrayColumns[intColumn];
//#else
//# var thisObject : FP_RLIST_Object = this;
//# var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[intColumn];
//#endif   
  
   var objCell            = null; 

   if ( objCellDIV.strPreviousContent != objCellDIV.innerText )
   {
      if ( objCellDIVEXT.uInError )
      {
	     /* Tell user invalid value has been entered and previous value will be restored. */
	     window.alert(VF_System.MString(227));
	     
         objCellDIV.innerText = objCellDIV.strPreviousContent;
         objCellDIVEXT.uInError  = false;
      }
      else
      {  
         /* If cell cotains a number..... */
	     if ( !(objCellDIVEXT.AlphaValue) )
	     {
	        var strUseValue = objCellDIV.innerText;

           if (strUseValue.length == 0) 
           {
              strUseValue = VF_System.MakeNumericString(0, objColumn.intPrecision, true);
           }
           else 
           {   /* Remove the decimal point if it's the last character */           
              if ( strUseValue.charAt(strUseValue.length - 1) == VF_System.strDecimalSeparator ) strUseValue = strUseValue.substr(0, objCellDIV.innerText.length  - 1);

              /* Apply any precision settings */    
              strUseValue = VF_System.MakeNumericString(VF_System.ParseFloat(strUseValue,VF_System.strThousandSeparator), objColumn.intPrecision, true);              
           }
            
           /* If there is a total cell for this colum adjust the value and update the total cell */
           var objTotalCell = thisObject.arrayTotalCells[intColumn];
           if (objTotalCell != null)
		     {
		        var numPrevContent = VF_System.MakeNumericString(VF_System.ParseFloat(objCellDIV.strPreviousContent,VF_System.strThousandSeparator), objColumn.intPrecision, true);
		        var numCurrentContent = VF_System.MakeNumericString(VF_System.ParseFloat(strUseValue,VF_System.strThousandSeparator), objColumn.intPrecision, true);
              var numDiffValue = numPrevContent - numCurrentContent; 
              if (objTotalCell.innerText.length == 0) objTotalCell.innerText = VF_System.MakeNumericString(0, objColumn.intPrecision, true); 
              var numCurrentTotal = VF_System.ParseFloat(objTotalCell.innerText,VF_System.strThousandSeparator);
              objTotalCell.innerText = VF_System.MakeNumericString((numCurrentTotal - numDiffValue), objColumn.intPrecision, true);
              
              FP_RLIST_PRIVATE_SetCellValue(thisObject, objTotalCell.parentElement, objTotalCell);	               
		    
		     }
		      
            /* Apply any requested formatting to numeric values */
            if (objColumn.flagShowThousands) strUseValue = FP_RLIST_PRIVATE_DelimitNumber(strUseValue);
            objCellDIV.innerText = strUseValue;
		   }

         FP_RLIST_PRIVATE_SetCellValue(thisObject, objParentRow, objCellDIV);	
         objCellBeingEdited.strPreviousContent = objCellDIV.innerText;
      }
   }
   else if ( !(objCellDIVEXT.AlphaValue)  && (objCellDIVEXT.BlankZero) && (VF_System.MakeNumericString(objCellDIV.innerText, objColumn.intPrecision, true) == 0) )
   {
      objCellDIV.innerText = objCellDIV.strPreviousContent = "";
   }
   
   /* Apply the currency symbol if there should be one */
   if (objColumn.flagShowCurrency) objCell.innerText = objColumn.strCurrencyChar + objCell.innerText;

   if ( ( objCellBeingEdited != null ) && ( objCellBeingEdited == objCellDIV ) ) 
   {
      objCellBeingEdited.className = "FP_RLIST_Cell";
      objCellBeingEdited                  = null;
   }   
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_SetCellValue - Set the value for a cell                                       */
/* ---------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RLIST_PRIVATE_SetCellValue(thisObject, argobjParentRow, argobjCellDiv)
//#else
//# function FP_RLIST_PRIVATE_SetCellValue(thisObject:FP_RLIST_Object, argobjParentRow, argobjCellDiv)
//#endif 
{
   var objParentRow = argobjParentRow;
   
//#ifscript   
   var objParentRowEXT = objParentRow;
//#else
//#  var objParentRowEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objParentRow) );      
//#endif 	       
  
   var objCellDiv	  = argobjCellDiv;

//#ifscript   
   var objCellDivEXT = objCellDiv;
//#else
//#  var objCellDivEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension ( this.oHTMLExtender.GetExtension(objCellDiv) );      
//#endif 	       

//#ifscript   
    var objItem      = thisObject.arrayAllItems[objParentRowEXT.intRowItemNumber];
//#else
//# var objItem : FP_RLIST_PRIVATE_ItemNode = thisObject.arrayAllItems[objParentRowEXT.intRowItemNumber];
//#endif    
         
   var intItem      = objParentRowEXT.intRowStoredNumber + 1;
   var intColumn    = parseInt(objCellDiv.getAttribute("name"), 10);
 
//#ifscript   
   var objColumn	  = thisObject.arrayColumns[intColumn];
   var objCell		  = objItem.arrayCells[intColumn];
//#else
//# var objColumn : FP_RLIST_PRIVATE_Column = thisObject.arrayColumns[intColumn];
//# var objCell :FP_RLIST_PRIVATE_Cell = objItem.arrayCells[intColumn];
//#endif    

   if (objColumn.flagCheckboxes)
   {
	   if (objCellDiv.firstChild.checked) objCell.Value = "CHECKED";
	   else objCell.Value = "";
   }
   else
   {
	   /* Change the item's value to reflect the new Cell value */
	   objCell.Value = objCellDiv.innerText;
   }

   /* Set the Item's uChanged property to true to detect the changed item in the RDML */
   VF_System.FP_SetBool(thisObject,"uItem.Changed", intItem ,"TRUE",thisObject.intOccurrence);

   /* Set the Cell's CoulumnN.Cell.Value property for the item */
   var strCell      = "Column" + intColumn.toString() + ".Cell.Value";

   /* Set the Alpha or Numeric value */

   if ( objCellDivEXT.AlphaValue ) VF_System.FP_Set(thisObject, strCell, intItem, objCell.Value, false, thisObject.intOccurrence);
   else if (objCell.Value == "") VF_System.FP_SetNum(thisObject, strCell, intItem, 0, 0, thisObject.intOccurrence);
   else 
   {
      if ((thisObject.arrayColumns[intColumn].flagShowCurrency) && (objCell.Value.substr(0, 1) == thisObject.arrayColumns[intColumn].strCurrencyChar))
      {
        objCell.Value = objCell.Value.substr(1, objCell.Value.length  - 1);
      }

      VF_System.FP_SetNum(thisObject, strCell, intItem, VF_System.ParseFloat(objCell.Value,VF_System.strThousandSeparator), thisObject.arrayColumns[intColumn].intPrecision, thisObject.intOccurrence);
    }
}

/* ---------------------------------------------------------------------------------------------- */
/* FP_RLIST_PRIVATE_DelimitNumber - Applies a thousands seperator if requested for a cell                                       */
/* ---------------------------------------------------------------------------------------------- */

function FP_RLIST_PRIVATE_DelimitNumber(argstrNumber)
{
	var strNumber   = argstrNumber;
	var strInteger, strDecemal, strIntegerOut;
	var strSeperator = VF_System.strThousandSeparator;
	var arrayNumber;
	var intOffSet = 1;
	
	/* Split the number at the decimal point */
	arrayNumber = strNumber.split(VF_System.strDecimalSeparator);
	
	/* Get the integer part of the number */
	strInteger = arrayNumber[0];

	/* Get the decimal part of the number */
	strDecemal = ( arrayNumber[1] == null ? '' : VF_System.strDecimalSeparator + arrayNumber[1] );

	strIntegerOut = '';
	
	/* Check if there is a minus sign and handle it first */
	if(strInteger.charAt ( 0 ) == '-')
	{
		strIntegerOut += strInteger.charAt ( 0 );
		intOffSet = 2;
	}
	
	/* Count backwards from the lenghth of the interger part minus 1 */
	for ( var i = strInteger.length-intOffSet ; i >= 0; i -- ) 
	{
		/* Copy the digit */
		strIntegerOut += strInteger.charAt ( strInteger.length - i - 1 );
		
		/* Put the thousands seperator every third digit */
		if ( i % 3 == 0 && i != 0 ) strIntegerOut += strSeperator;
	}

	return strIntegerOut + strDecemal;

}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_CellOnKeyUp - Trap the key pressed to validate length and case */
/* ------------------------------------------------------------------------ */ 

function FP_RLIST_EVENT_HANDLER_CellOnKeyUp( argobjEvent )
{
   var objCell             = argobjEvent.srcElement;

//#ifscript	        
    var objCellEXT = objCell; 
    var sAttributes = null; 
//#else
//# var objCellEXT : FP_RLIST_HTML_Extension = FP_RLIST_HTML_Extension( this.oHTMLExtender.GetExtension( objCell ) );  
//# var sAttributes : String = null; 
//#endif 
           
   if (objCellEXT != null) sAttributes = objCellEXT._INPUTATTRS;  
     
   if (sAttributes == null) sAttributes = "";  

   var objValidationResult = VF_System.ValidationRules(sAttributes, objCell.innerText.toString());

   if ( !objValidationResult.flagValid )
   {
      objCellEXT.uInError = true;

      if ( objValidationResult.arrayErrorMsgs != null )
      {
         var arrayMsgs = objValidationResult.arrayErrorMsgs;

         /* send first message and clear the queue */
         VF_System.SendClientMessage(arrayMsgs[0], true, "R");
         
         var intMsgLength = arrayMsgs.length;

         for ( var intInd = 1; intInd < intMsgLength; intInd++)
         {
            VF_System.SendClientMessage(arrayMsgs[intInd], false, "R");
         }
      }
   }
   else 
   {
      VF_System.SendClientMessage(" ", true, "R");
      objCellEXT.uInError = false;
   }

   if ( objValidationResult.flagAdjusted ) objCell.innerText = objValidationResult.strAdjustedValue;
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_StartColumnResize - Start Resizing the column    */
/* ------------------------------------------------------------------------ */ 
  
function FP_RLIST_EVENT_HANDLER_StartColumnResize( argobjEvent )
{
    var objElement = null;
    var objManagedElement = null;
    var objAdjacentElement = null; 
//#ifscript	        
    var objManagedElementEXT = null; 
//#else
//# var objManagedElementEXT : FP_RLIST_HTML_Extension = null;  
//#endif 

   argobjEvent.cancelBubble = true;

   objElement         = argobjEvent.srcElement;

   objManagedElement  = objElement.previousSibling;
      
//#ifscript	        
    objManagedElementEXT = objManagedElement; 
//#else
//# objManagedElementEXT = FP_RLIST_HTML_Extension( this.oHTMLExtender.GetExtension( objManagedElement ) );  
//#endif 

   objAdjacentElement = objElement.nextSibling;   
   var oDoc = objElement.ownerDocument;
   
   if (VF_System.usingExplorer) objElement.setCapture();
   else oDoc.getElementById("FPLIST_CoverForResize").style.display = "inline";
   
   VF_Global_objSplit                         = new Object();
   VF_Global_objSplit.objSplitElement         = objElement;
   VF_Global_objSplit.objManagedElement       = objManagedElement;
   VF_Global_objSplit.objAdjacentElement      = objAdjacentElement;
   VF_Global_objSplit.intSnapshotX            = argobjEvent.clientX;  
   VF_Global_objSplit.intSnapshotManagedWidth = objManagedElement.offsetWidth;  
   VF_Global_objSplit.intNewWidth             = 0;

   oDoc.attachEvent('onmousemove',FP_RLIST_EVENT_HANDLER_ColumnResize);
   oDoc.attachEvent('onmouseup',FP_RLIST_EVENT_HANDLER_EndColumnResize);     
   
   return;    
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_ColumnResize - Resize the column                  */
/* ------------------------------------------------------------------------ */ 
  
function FP_RLIST_EVENT_HANDLER_ColumnResize( argobjEvent )
{
  argobjEvent.cancelBubble = true;
  
  if ( VF_Global_objSplit != null )
  {
   var intOffsetX                 = argobjEvent.clientX - VF_Global_objSplit.intSnapshotX;
   VF_Global_objSplit.intNewWidth = VF_Global_objSplit.intSnapshotManagedWidth + intOffsetX;
  }

  return;
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_EndColumnResize - End Resizing the column    */
/* ------------------------------------------------------------------------ */ 
  
function FP_RLIST_EVENT_HANDLER_EndColumnResize(evt)
{
  if ( VF_Global_objSplit == null ) return;
  
  evt.cancelBubble = true;
  var intNewWidth             = VF_Global_objSplit.intNewWidth;

//#ifscript
    var thisObject              = VF_Global_objSplit.objManagedElement.thisObject;
//#else
//# var thisObject : FP_RLIST_Object = this;
//#endif   
    
  var objList                 = thisObject.objListContainer;
  var arrayListChildNodes     = objList.childNodes;
  var intListLength           = arrayListChildNodes.length;
  var arrayCellDIVs           = null;
  var intColumnCount          = thisObject.intColumnCount;
  var intCurrentWidth         = VF_Global_objSplit.objManagedElement.offsetWidth;
  var intManagedColNumber     = parseInt(VF_Global_objSplit.objManagedElement.getAttribute("name"), 10);
  var intAdjacentColNumber    = parseInt(VF_Global_objSplit.objAdjacentElement.getAttribute("name"), 10);
  var intAdjacentElementWidth = 0;
  var intItem                 = 0; 
  var objCurrentRow           = null;
//#ifscript
  var objCurrentRowEXT        = null;   
//#else
//# var objCurrentRowEXT : FP_RLIST_HTML_Extension = null; 
//#endif 

  var flagColumnHeaders       = thisObject.flagColumnHeaders;

  if (intNewWidth < 3 ) intNewWidth = 3;

  intAdjacentElementWidth = VF_Global_objSplit.objAdjacentElement.offsetWidth + (intCurrentWidth - intNewWidth);

  /* the first and last cell columns are 1 pixel narrower if there are column headings */
  /* if the row has an image, subtract 16 pixels to account for the image width */

  if ( flagColumnHeaders )
  {   
     if ( ( intManagedColNumber == 1 ) && ( intNewWidth > 0 ) )
     {
         intNewWidth--;

         if ( thisObject.flagItemSmallImage ) intNewWidth = intNewWidth - 16;
     }

     if ( intAdjacentColNumber == intColumnCount ) intAdjacentElementWidth--;
  }

  if ( intAdjacentElementWidth < 0 ) 
  {
      intNewWidth = intNewWidth - (intAdjacentElementWidth * -1);
      intAdjacentElementWidth = 0;
  }

  var strNewWidth             = intNewWidth.toString() + "px";
  var strAdjacentElementWidth = intAdjacentElementWidth.toString() + "px";

  for (intItem = 0; intItem < intListLength; intItem++)
  {
     objCurrentRow = arrayListChildNodes[intItem];

//#ifscript
     objCurrentRowEXT = objCurrentRow;
//#else
//#  var objCurrentRowEXT = FP_RLIST_HTML_Extension(this.oHTMLExtender.GetExtension(objCurrentRow));  
//#endif      
          
     objCurrentRowEXT.arrayCellDIVs[intManagedColNumber].style.width = strNewWidth;
     objCurrentRowEXT.arrayCellDIVs[intAdjacentColNumber].style.width = strAdjacentElementWidth;
  } 

  /* If there are column headings, restore the widths originally calculated for the column heading and update its widths */
   
  if ( flagColumnHeaders )
  {
     if ( ( intManagedColNumber == 1 ) && ( intNewWidth > 0 ) )
     {
         if (VF_System.usingExplorer) intNewWidth++;
         
         if ( thisObject.flagItemSmallImage ) intNewWidth = intNewWidth + thisObject.intImageWidth;
     }
     
     if ( intAdjacentColNumber == intColumnCount ) intAdjacentElementWidth++;

     VF_Global_objSplit.objManagedElement.style.width = intNewWidth.toString() + "px";
     
     VF_Global_objSplit.objAdjacentElement.style.width = intAdjacentElementWidth.toString() + "px";
  }
  
  var oDoc = VF_Global_objSplit.objAdjacentElement.ownerDocument;
  
  if (VF_System.usingExplorer) VF_Global_objSplit.objSplitElement.releaseCapture();
  else oDoc.getElementById("FPLIST_CoverForResize").style.display = "none";
    
  oDoc.detachEvent('onmousemove',FP_RLIST_EVENT_HANDLER_ColumnResize);
  oDoc.detachEvent('onmouseup',FP_RLIST_EVENT_HANDLER_EndColumnResize);     

  VF_Global_objSplit = null; 
  
  return;
}

/* ------------------------------------------------------------------------ */
/* FP_RLIST_EVENT_HANDLER_LargeImgOnClick - Handle onclick on image or caption */
/* ------------------------------------------------------------------------ */ 

function FP_RLIST_EVENT_HANDLER_LargeImgOnClick(argobjEvent, argobjContainer)
{
   if ( typeof argobjEvent == "object" )
   {
      if (VF_System.flagBusy) return;  

      var objSrcElement = argobjEvent.srcElement;

      if ( objSrcElement.tagName == "DIV" ) return;

      var objContainer  = objSrcElement.parentElement;

      argobjEvent.cancelBubble = true;
   }
   else
   {
      var objContainer  = argobjContainer;
   }

//#ifscript
    var thisObject = objContainer.thisObject;
//#else
//# var thisObject : FP_RLIST_Object = this;
//# var objContainerAsNode: IHTMLDOMNode = IHTMLDOMNode(objContainer); 
//#endif    
   
//#ifscript   
   var objImage   = objContainer.childNodes[0];
   var objCaption = objContainer.childNodes[1];
//#else
//# var objImage: IHTMLElement = objContainerAsNode.childNodes[0];
//# var objCaption: IHTMLElement = objContainerAsNode.childNodes[1];
//#endif   

   if ( thisObject.objCurrentSelectedRow != null )
   {
      var objSelectedRowChildren = thisObject.objCurrentSelectedRow.childNodes;
//#ifscript      
      var objSelectedImage       = objSelectedRowChildren[0];
      var objSelectedCaption     = objSelectedRowChildren[1];
//#else
//#   var objSelectedImage: IHTMLElement = objSelectedRowChildren[0];
//#   var objSelectedCaption: IHTMLElement = objSelectedRowChildren[1];
//#endif      
      
      objSelectedImage.style.background   = "window";
      objSelectedCaption.style.background = "window";
      objSelectedCaption.style.color      = "#000";
   }

   FP_RLIST_PRIVATE_RowSelection(thisObject, objContainer, argobjEvent);

   objContainer.style.background = "window";

   objImage.style.background = "Highlight";
	objImage.style.color      = "HighlightText";

   objCaption.style.background = "Highlight";
   objCaption.style.color      = "HighlightText"; 
   
}

/* ------------------------------------------------------------------------ */ 

//#ifNET
//# } 
//#endif 
