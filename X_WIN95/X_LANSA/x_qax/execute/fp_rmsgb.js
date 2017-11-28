/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R M S G B ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* -------------------------  Message box      ------------------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#ifNET
//# class FP_RMSGB_Object extends FP_BASE_Object 
//# {
//#endif 

/* Register this class of object and it's creator with the system */

//#ifscript
arrayFP_RObjectConstructor["FP_RMSGB"] = FP_RMSGB_PUBLIC_Create;
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
function FP_RMSGB_PUBLIC_Create(thisObject) {
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RMSGB_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

   //#ifscript
   thisObject.Destroy = FP_RMSGB_PUBLIC_Destroy;
   thisObject.Visualize = FP_RMSGB_PUBLIC_Visualize;
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
function FP_RMSGB_PUBLIC_Destroy(thisObject) {
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RMSGB_Object = this;  
//#endif 


   return;
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RMSGB_PUBLIC_Visualize(thisObject) {
   var flagBtnClicked = false;
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RMSGB_Object = this;  
//#   var flagBtnClicked : Boolean; 
//#endif 

   var strMessage = VF_System.FP_Get(thisObject, "uMessageText", 1, VF_System.MString(226), false, thisObject.intOccurrence);
   var strEvent = "";

   if (VF_System.FP_GetBool(thisObject, "uVisible", 1, "TRUE", thisObject.intOccurrence)) {

      flagBtnClicked = VF_System.objMainWindow.confirm(strMessage);

      if (flagBtnClicked) strEvent = "CONFIRMED";
      else strEvent = "CANCELED";

      var QueuedObject = __new();
      QueuedObject.thisObject = thisObject;
      QueuedObject.strEvent = strEvent;

      QueuedObject.flaguSignalCanceled = VF_System.FP_GetBool(thisObject, "uSignalCanceled", 1, "FALSE", thisObject.intOccurrence);
      
      VF_System.QueueFunctionCall(FP_RMSGB_PRIVATE_Submit, "FP_RMSGB_WAIT_SYSTEM_BUSY", QueuedObject);
   }

   /* Finished */
   return;

}

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------  P R I V A T E   M E T H O D S  ---------------------- */
/* --------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------- */
/* FP_RMSGB_PRIVATE_Submit - Submit response to server if applicable                   */
/* ------------------------------------------------------------------------------------------- */

//#ifscript
function FP_RMSGB_PRIVATE_Submit(QueuedObject)
//#else
//# static function FP_RMSGB_PRIVATE_Submit ( QueuedObject )
//#endif 
{
   var thisObject = QueuedObject.thisObject;
   var strEvent = QueuedObject.strEvent;
   
   if ((strEvent == "CONFIRMED") || (QueuedObject.flaguSignalCanceled)) VF_SY506_PRIVATE_HandleEvent(thisObject, strEvent);
}

/* ------------------------------------------------------------------------------------------- */

//#ifNET
//# } 
//#endif 