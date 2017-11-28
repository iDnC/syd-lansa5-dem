/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R T I M R ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic event timer --------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#IFNET
//# class FP_RTIMR_Object extends FP_BASE_Object  
//# { 
//#   var objEventTimer     : Object = null;
//#   var objUpdateTimer    : Object = null;
//#   var intThisObjectID   : int;  
//#   var intEventInterval  : int;
//#   var intUpdateInterval : int;
//#   var intUpdateTicks    : int;  
//#   var objUpdateField    : Object = null; 
//#endif 

/* Register this class of object and it's creator with the system */   
//#ifscript
arrayFP_RObjectConstructor["FP_RTIMR"] = FP_RTIMR_PUBLIC_Create;
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
function FP_RTIMR_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RTIMR_Object = this;  
//#endif 

   /* ------------------------------------------ */
   /* ---- Define and Initialize Properties ---- */
   /* ------------------------------------------ */

   thisObject.objEventTimer     = null;
   thisObject.objUpdateTimer    = null;
   thisObject.intThisObjectID   = VF_System.GetThisObjectID(thisObject);  
   thisObject.intEventInterval  = 0;   
   thisObject.intUpdateInterval = 0;
   thisObject.intUpdateTicks    = 0;    
   thisObject.objUpdateField    = null; 
  
   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */
//#ifscript
   thisObject.Destroy   = FP_RTIMR_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RTIMR_PUBLIC_Visualize; 
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
function FP_RTIMR_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RTIMR_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 

   FP_RTIMR_PRIVATE_KillTimers(thisObject);     

   VF_System.DeleteThisObjectID(thisObject.intThisObjectID);
  
   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
//#ifscript
function FP_RTIMR_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RTIMR_Object = this;  
//#endif 

   /* Declarations */ 
   
   var thisDocument = thisObject.objDocument; 

   /* Extract the intervals */

   thisObject.intEventInterval  = VF_System.FP_GetNum(thisObject,"uEventInterval",1,true,0,thisObject.intOccurrence);   
   thisObject.intUpdateInterval = VF_System.FP_GetNum(thisObject,"uUpdateInterval",1,true,0,thisObject.intOccurrence);

   /* If either time is zero then hide this object */ 
   
   if ((thisObject.intEventInterval > 0) && (thisObject.intUpdateInterval > 0))
   {
      VF_System.FP_SetBool(thisObject,"UVISIBLE",1,"TRUE", thisObject.intOccurrence); 
   }
   else
   {
      VF_System.FP_SetBool(thisObject,"UVISIBLE",1,"FALSE", thisObject.intOccurrence); 
   }
       
   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer(thisObject,"LEFT", null, null);
 
   /* If an interval has been specified */

   if (thisObject.intEventInterval > 0)
   {
      var strHandler = ""; 
       
      /* Start the main interval timer */ 

//#ifscript
      strHandler = "FP_RTIMR_EVENT_HANDLER_002(" + thisObject.intThisObjectID.toString() + ")";
//#else
//#  strHandler = "window.external.NET_RTIMR_EVENT_HANDLER_002(" + thisObject.intThisObjectID.toString() + ")";
//#endif

      thisObject.objEventTimer = VF_System.objMainWindow.setInterval(strHandler,(thisObject.intEventInterval * 1000));      
      
      /* If a count down field is to be shown and updated */

      if (thisObject.intUpdateInterval > 0)
      {
         thisObject.objUpdateField = thisDocument.createElement("P"); 
         thisObject.objWorkContainer.appendChild(thisObject.objUpdateField);
         FP_RTIMR_PRIVATE_UpdateVisibleField(thisObject); 
//#ifscript         
         strHandler = "FP_RTIMR_EVENT_HANDLER_001(" + thisObject.intThisObjectID.toString() + ")";
//#else
//#      strHandler = "window.external.NET_RTIMR_EVENT_HANDLER_001(" + thisObject.intThisObjectID.toString() + ")";
//#endif         
         thisObject.objUpdateTimer = VF_System.objMainWindow.setInterval(strHandler,(thisObject.intUpdateInterval * 1000));      
      }
   
   }
 
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
//#ifscript
function FP_RTIMR_PRIVATE_UpdateVisibleField( thisObject )   
//#else
//# static function FP_RTIMR_PRIVATE_UpdateVisibleField(thisObject:FP_RTIMR_Object)   
//#endif
{

   var numTimeLeft = thisObject.intEventInterval - (thisObject.intUpdateInterval * thisObject.intUpdateTicks); 

   if (numTimeLeft < 0) numTimeLeft = 0; 

   if (thisObject.objUpdateField != null) thisObject.objUpdateField.innerText = numTimeLeft.toString();    

   thisObject.intUpdateTicks++;
   
   return;
}

/* --------------------------------------------------------------------------- */
//#ifscript
function FP_RTIMR_PRIVATE_KillTimers( thisObject )   
//#else
//# static function FP_RTIMR_PRIVATE_KillTimers(thisObject:FP_RTIMR_Object)   
//#endif
{
   if (thisObject.objEventTimer != null) 
   {
      VF_System.objMainWindow.clearInterval(thisObject.objEventTimer);
      thisObject.objEventTimer = null; 
   }    

   if (thisObject.objUpdateTimer != null) 
   {
      VF_System.objMainWindow.clearInterval(thisObject.objUpdateTimer);
      thisObject.objUpdateTimer = null; 
   }     
   
   return;
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

/* ------------------------------------------------------------ */
/* FP_RTIMR_EVENT_HANDLER_001 - Handle tick of the update timer */
/* ------------------------------------------------------------ */ 
//#ifscript
function FP_RTIMR_EVENT_HANDLER_001( argintThisObjectID )   
//#else
//# static function FP_RTIMR_EVENT_HANDLER_001( argstrthisObjectID:String)   
//#endif 
{
//#ifnet
//# var argintThisObjectID : int = parseInt(argstrthisObjectID,10);
//#endif

   if  ( !(VF_System.flagBusy) )
   {
//#ifscript
      var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID);  
//#else
//#   var thisObject : FP_RTIMR_Object = VF_System.ConvertThisObjectID(argintThisObjectID);  
//#endif
      if (thisObject != null) FP_RTIMR_PRIVATE_UpdateVisibleField(thisObject);
   }

   return; 
}

/* ----------------------------------------------------------- */
/* FP_RTIMR_EVENT_HANDLER_002 - Handle tick of the event timer */
/* ----------------------------------------------------------- */ 
//#ifscript  
function FP_RTIMR_EVENT_HANDLER_002( argintThisObjectID )   
//#else
//# static function FP_RTIMR_EVENT_HANDLER_002( argstrthisObjectID:String)   
//#endif 
{
//#ifnet
//# var argintThisObjectID : int = parseInt(argstrthisObjectID,10);
//#endif

   if  ( !(VF_System.flagBusy) )
   {
//#ifscript
      var thisObject = VF_System.ConvertThisObjectID(argintThisObjectID);  
//#else
//#   var thisObject : FP_RTIMR_Object = VF_System.ConvertThisObjectID(argintThisObjectID);  
//#endif
  
     if (thisObject != null)
     {
        FP_RTIMR_PRIVATE_KillTimers(thisObject); 
            
        VF_SY506_PRIVATE_HandleEvent(thisObject,"TICK");
     }
   }

   return; 
}

//#IFNET
//# } 
//#endif 
