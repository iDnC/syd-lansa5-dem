/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R W E B P ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ---  Create and manage a window to display a web page or resource  -- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#IFNET
//# class FP_RWEBP_Object extends FP_BASE_Object  
//# { 
//#   var arrayobjItems : Array = null;  
//#endif 

/* Register this class of object and it's creator with the system */   
//#ifscript
arrayFP_RObjectConstructor["FP_RWEBP"] = FP_RWEBP_PUBLIC_Create;
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
function FP_RWEBP_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RWEBP_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

 
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RWEBP_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RWEBP_PUBLIC_Visualize; 
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
function FP_RWEBP_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RWEBP_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 
 
 
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript 
function FP_RWEBP_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RWEBP_Object = this;  
//#endif 

   /* Declarations */ 
   
   var thisDocument  = thisObject.objDocument; 
   var objNewElement; 
   /* String for innerHTML */
   var strHTML			= "";  
   /* String for IFrame HTML fragment*/
   var strIframeHTML	= "";  
	
   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer (thisObject,"LEFT", null, null);

   /* Create an IFrame element */

   strHTML += FP_RWEBP_PRIVATE_CreateIFrame(thisObject);
     
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

function FP_RWEBP_PRIVATE_CreateIFrame(thisObject) 
{

	/* String for IFrame HTML fragment*/
	var strIframeHTML	= "";  
	/* Generate a unique ID for the Iframe*/
	var strID			= VF_System.GenerateUniqueName(); 
	var booluBorder   = VF_System.FP_GetBool(thisObject,"uBorder",1,"TRUE", thisObject.intOccurrence); 

	/* Get the page URL */
   
	var struWebPageSourceURL = VF_System.FP_Get(thisObject,"uWebPageSourceURL",1, "", false, thisObject.intOccurrence); 
   
	/* Create a Div to contian the Iframe and brake for a line*/ 

	strIframeHTML += "<div><br>";
	
	/* Create a new "IFrame" element */ 

	strIframeHTML += "<iframe ID='" + strID + "'";
	
	/* Remove the border if requested */
	
	if (!booluBorder)
	{
		strIframeHTML +=  " frameborder=No";
	}
	
	/* Set Height and Width to use all available space*/
	
	strIframeHTML +=  " style='height:100%;width:100%'"; 
	
	/* Add the source URL */
	
	strIframeHTML +=  " src='" + struWebPageSourceURL + "'";
   
	/* End Iframe tag and give a message if Iframes are not supported*/
	
	strIframeHTML +=  ">This fast part can not be displayed because your browser does not support Iframes!</iframe>";
	
	/* Add another line break and close the Div*/ 

	strIframeHTML += "<br></div>";
	
	/* Pass back resulting HTML */
	
	return(strIframeHTML);
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

//#IFNET
//# } 
//#endif 
