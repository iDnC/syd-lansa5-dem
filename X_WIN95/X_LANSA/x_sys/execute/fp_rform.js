/* ---------------------------------------------------------- */
/* ------------------- F P _ R F O R M ---------------------- */
/* ---------------------------------------------------------- */
/* Register this class of object and it's creator with the system */   

//#IFNET
//# class FP_RFORM_Object extends FP_BASE_Object  
//# { 
//#endif 

//#ifscript
arrayFP_RObjectConstructor["FP_RFORM"] = FP_RFORM_PUBLIC_Create;
//#endif 

//#ifscript
function FP_RFORM_PUBLIC_Create( thisObject )  
//#else
//# override function Create()  
//#endif 
{

//#ifscript
   thisObject.Destroy   = FP_RFORM_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RFORM_PUBLIC_Visualize;
//#endif     

   return; 
}

//#ifscript
function FP_RFORM_PUBLIC_Destroy( argthisObject )  
//#else
//# override function Destroy()  
//#endif 
{

//#ifscript
     VF_SY001_FP_RFORM_PUBLIC_Destroy(argthisObject); 
//#else
//#  VF_System.VF_SY001_FP_RFORM_PUBLIC_Destroy(this); 
//#endif 

   return; 
}


//#ifscript
function FP_RFORM_PUBLIC_Visualize( argthisObject )  
//#else
//# override function Visualize()  
//#endif 
{

//#ifscript
   VF_SY001_FP_RFORM_PUBLIC_Visualize(argthisObject);
//#else
//# VF_System.VF_SY001_FP_RFORM_PUBLIC_Visualize(this);
//#endif 

   return;    
}  

//#IFNET
//# } 
//#endif 
