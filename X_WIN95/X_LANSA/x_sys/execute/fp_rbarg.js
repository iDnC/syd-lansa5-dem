/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ----------------------- F P _ R B A R G ----------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* ------------  Create and manage a dynamic bar graph  ---------------  */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

//#IFNET
//# class FP_RBARG_Object extends FP_BASE_Object  
//# { 
//#    var arrayobjAttachedElements : Array = null; 
//#    var flagSignalClick : Boolean; 
//#endif 

/* Register this class of object and it's creator with the system */   

//#ifscript
arrayFP_RObjectConstructor["FP_RBARG"] = FP_RBARG_PUBLIC_Create;
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
function FP_RBARG_PUBLIC_Create( thisObject )  
{
//#else
//# override function Create()  
//# {
//#   var thisObject : FP_RBARG_Object = this;  
//#endif 

   /* -------------------------------------------- */
   /* ---- Defined Publicly Published Methods ---- */
   /* -------------------------------------------- */

//#ifscript
   thisObject.Destroy   = FP_RBARG_PUBLIC_Destroy; 
   thisObject.Visualize = FP_RBARG_PUBLIC_Visualize; 
//#endif 
    
   /* HTML elements with attached events */
   
   thisObject.arrayobjAttachedElements = new Array();  

   /* -------- */ 
   /* Finished */
   /* -------- */ 

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RBARG_PUBLIC_Destroy( thisObject )  
{
//#else
//# override function Destroy()  
//# {
//#   var thisObject : FP_RBARG_Object = this;  
//#endif 

   /* Destroy any details an free any resources */ 
   
   {
      var i; 

      for (i in thisObject.arrayobjAttachedElements)
      {
         var objAttachedElement = thisObject.arrayobjAttachedElements[i];

         objAttachedElement.detachEvent("onclick",     FP_RBARG_EVENT_HANDLER_001);   
         objAttachedElement.detachEvent("onmouseover", FP_RBARG_EVENT_HANDLER_002);   
         objAttachedElement.detachEvent("onmouseout",  FP_RBARG_EVENT_HANDLER_003);   
      }

      thisObject.arrayobjAttachedElements = null; 
   }

   /* Finished */         

   return; 
}

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

//#ifscript
function FP_RBARG_PUBLIC_Visualize( thisObject )  
{
//#else
//# override function Visualize()  
//# {
//#   var thisObject : FP_RBARG_Object = this;  
//#endif 

   /* Declarations */ 
   
   var thisDocument      = thisObject.objDocument; 

   var intItem           = 0; 
   var intItemCount      = VF_System.FP_GetNum(thisObject,"uItemCount",1,true,0,thisObject.intOccurrence);   

   var intValue          = 0; 
   var intValueCount     = VF_System.FP_GetNum(thisObject,"uValueCount",1,true,1,thisObject.intOccurrence);   
   var flagStackedValues = (intValueCount > 1);

   var flagVertical      = (VF_System.FP_Get(thisObject,"uArrange",1,"VERTICAL",true,thisObject.intOccurrence) == "VERTICAL");   
   var flagVerticalCap   = (VF_System.FP_Get(thisObject,"uArrangeCaptions",1,"HORIZONTAL",true,thisObject.intOccurrence) == "VERTICAL");   
   var flagVerticalVal   = (VF_System.FP_Get(thisObject,"uArrangeValues" ,1,"HORIZONTAL",true,thisObject.intOccurrence) == "VERTICAL"); 
   var numZoomFactor     = VF_System.FP_GetNum(thisObject,"uZoomFactor",1,false,1.0,thisObject.intOccurrence);   
   var intMargin         = VF_System.FP_GetNum(thisObject,"uMarginWidth",1,true,8,thisObject.intOccurrence);   
   var intBorder         = VF_System.FP_GetNum(thisObject,"uBorderWidth",1,true,1,thisObject.intOccurrence);   
   var intPadding        = VF_System.FP_GetNum(thisObject,"uPaddingWidth",1,true,8,thisObject.intOccurrence);   
   var flagStackTable    = (VF_System.FP_Get(thisObject,"uStackTableShow",1,"TRUE",true,thisObject.intOccurrence) == "TRUE"); 
   var flagStackTableTop = (VF_System.FP_Get(thisObject,"uStackTableLocation",1,"BOTTOM",true,thisObject.intOccurrence) == "TOP"); 

   var objDIV            = null; 
   var objTABLE          = null; 
   var objTBODY          = null;
   var objSTACKTABLE     = null;  
  
   var arrayItemCaption     = new Array();
   var arrayarrayItemValue  = new Array();
   var arrayItemColor       = new Array();
   var arrayValueColor      = new Array();

   var flagMinSet       = false;
   var numMinValue      = 0;
   var flagMaxSet       = false;
   var numMaxValue      = 0; 

   var objTRCaption     = new Array();  
   var arrayAutoColor   = new Array();  
   var intNextAutoColor      = 0; 

   /* Insert some details into this object */

   thisObject.flagSignalClick = (VF_System.FP_Get(thisObject,"uSignalSelection",1,"FALSE",true,thisObject.intOccurrence) == "TRUE"); 

   /* Set up the auto colors */

   arrayAutoColor[0]  = "salmon";
   arrayAutoColor[1]  = "blueviolet";
   arrayAutoColor[2]  = "gold";
   arrayAutoColor[3]  = "purple";
   arrayAutoColor[4]  = "tomato";
   arrayAutoColor[5]  = "mediumslateblue";
   arrayAutoColor[6]  = "mediumspringgreen";

   arrayAutoColor[7]  = "lightcoral";
   arrayAutoColor[8]  = "darkviolet";
   arrayAutoColor[9]  = "khaki";
   arrayAutoColor[10] = "magenta";
   arrayAutoColor[11] = "lightsalmon";
   arrayAutoColor[12] = "royalblue";
   arrayAutoColor[13] = "greenyellow";

   arrayAutoColor[14] = "red";
   arrayAutoColor[15] = "violet";
   arrayAutoColor[16] = "orange";
   arrayAutoColor[17] = "indigo";
   arrayAutoColor[18] = "yellow";
   arrayAutoColor[19] = "blue";
   arrayAutoColor[20] = "green";

   /* Set up the container */

   VF_SY506_PRIVATE_SetupContainer (thisObject,"NONE",null,null);

   /* Set up the default value based colors */  

   for (intValue = 1; intValue <= intValueCount; intValue++)
   {
      arrayValueColor[arrayValueColor.length] = VF_System.FP_Get(thisObject,("uValueColor" + intValue.toString()),1,arrayAutoColor[intNextAutoColor],false,thisObject.intOccurrence);
      intNextAutoColor++; 
      if (intNextAutoColor >= arrayAutoColor.length) intNextAutoColor = 0; 
   } 
 
   /* Reset the auto color assignment values */  

   intNextAutoColor = 0; 

   /* Extract the captions and values in arrays and track the minimum and maximums encountered */

   for (intItem = 1; intItem <= intItemCount; intItem++)
   {
      var numValue = 0.0; 

      arrayItemColor[arrayItemColor.length] = VF_System.FP_Get(thisObject,"uItemColor",intItem,arrayAutoColor[intNextAutoColor],false,thisObject.intOccurrence);
      
      arrayItemCaption[arrayItemCaption.length] = VF_System.FP_Get(thisObject,"uItemCaption",intItem,"",false,thisObject.intOccurrence);
      
      arrayarrayItemValue[arrayarrayItemValue.length] = new Array();
      
      for (intValue = 1; intValue <= intValueCount; intValue++)
      {
         var arrayValues = arrayarrayItemValue[arrayarrayItemValue.length - 1];
         arrayValues[arrayValues.length] = VF_System.FP_GetNum(thisObject,("uItemValue" + intValue.toString()),intItem,false,0,thisObject.intOccurrence);
         numValue += arrayValues[arrayValues.length - 1];

      }
 
      if ( (!(flagMinSet)) || (numValue < numMinValue) ) numMinValue = numValue;
      flagMinSet = true;   

      if ( (!(flagMaxSet)) || (numValue > numMaxValue) ) numMaxValue = numValue;
      flagMaxSet = true;   

      intNextAutoColor++; 
      if (intNextAutoColor >= arrayAutoColor.length) intNextAutoColor = 0; 
   } 
   
   /* Create the table and set it's properties */

   objDIV = thisDocument.createElement("DIV");

   objTABLE = thisDocument.createElement("TABLE");
   objTABLE.cellPadding = 0; 
   objTABLE.cellSpacing = 0; 

   if (numZoomFactor != 1.0) objTABLE.style.zoom = numZoomFactor;

   if (intMargin > 0)
   {
      var strMargin = intMargin.toString() + "px"; 

      objDIV.style.marginTop     = strMargin; 
      objDIV.style.marginBottom  = strMargin; 
      objDIV.style.marginLeft    = strMargin; 
      objDIV.style.marginRight   = strMargin; 
   } 

   if (intBorder > 0)
   {
      var strBorder = intBorder.toString() + "px solid black"; 

      objDIV.style.borderTop     = strBorder; 
      objDIV.style.borderBottom  = strBorder; 
      objDIV.style.borderLeft    = strBorder; 
      objDIV.style.borderRight   = strBorder; 
   } 


   if (intPadding > 0)
   {
      var strPadding = intPadding.toString() + "px"; 

      objDIV.style.paddingTop     = strPadding; 
      objDIV.style.paddingBottom  = strPadding; 
      objDIV.style.paddingLeft    = strPadding; 
      objDIV.style.paddingRight   = strPadding; 
   } 
   
   objTBODY = thisDocument.createElement("TBODY");
   objTABLE.appendChild(objTBODY); 

   /* Create the caption(s) for the whole table */

   {
      var intCaption = 1;
      var strCaption = VF_System.FP_Get(thisObject,"uCaption",intCaption,VF_Global_NO_PROPERTY_VALUE,false,thisObject.intOccurrence);
      var objLastTD  = null;  
	    
	  while ( strCaption != VF_Global_NO_PROPERTY_VALUE )
      {
         var objNewTR = thisDocument.createElement("TR");
         var objNewTD = thisDocument.createElement("TD");
         
         objLastTD = objNewTD;
          
         objNewTD.innerText           = strCaption; 
         objNewTD.align               = "center";
          
         if (flagVertical) 
         {
            if (intItemCount > 0) objNewTD.colSpan = intItemCount; 
         }
         else
         {
            objNewTD.colSpan = 4;  
         }    

         objNewTR.appendChild(objNewTD);
         objTRCaption[objTRCaption.length] = objNewTR;
         
         intCaption++;                  
         strCaption = VF_System.FP_Get(thisObject,"uCaption",intCaption,VF_Global_NO_PROPERTY_VALUE,false,thisObject.intOccurrence);
       }
       
       if (objLastTD != null) objLastTD.style.paddingBottom = "8px";
       
    }

    /* Now start creating the graph data */
    
   {
      var i = 0; 
      var numRange = Math.abs(numMaxValue) + Math.abs(numMinValue); 

      /* -------------- */
      /* VERTICAL GRAPH */
      /* -------------- */

      if (flagVertical)  
      {
        var intBarHeight   = VF_System.FP_GetNum(thisObject,"uBarHeight",1,true,200,thisObject.intOccurrence);  
        var numPixelFactor = intBarHeight/numRange; 
        var strBarWidth = VF_System.FP_GetNum(thisObject,"uBarWidth",1,true,30,thisObject.intOccurrence) + "px"; 
        var objTR = null;
        var intVisibles = 0; 


        /* Do the positive values */
         
         objTR = thisDocument.createElement("TR");

         for (i = 0; i < intItemCount; i++)
         {
            var objTD = thisDocument.createElement("TD");

            intVisibles = 0; 

            objTD.align  = "center";
            objTD.vAlign = "bottom";
            objTD.style.borderBottom = "1px solid black"; 

            objTR.appendChild(objTD);

            {
               var arrayValues = arrayarrayItemValue[i];
               var j = 0; 

               for (j = 0; j < intValueCount; j++)
               {
                  var numValue   = arrayValues[j]; 
                  var objTempDIV = objTempDIV = thisDocument.createElement("DIV");

                  if (flagStackedValues) objTempDIV.style.backgroundColor = arrayValueColor[j];  
                  else                   objTempDIV.style.backgroundColor = arrayItemColor[i];
                   
                  objTempDIV.style.width  = strBarWidth; 
                  objTempDIV.style.textAlign = "center"; 
                  objTempDIV.style.overflow  = "hidden"; 

                  if (numValue <= 0) 
                  {
                     objTempDIV.style.height     = "1px";
                     objTempDIV.style.visibility = "hidden";
                     objTempDIV.style.display    = "none";  
                  }
                  else
                  {
                     intVisibles++;  
                     objTempDIV.style.height = FP_RBARG_PRIVATE_pxMinimum( Math.floor(numValue * numPixelFactor) ).toString() + "px";
                     FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),(j+1));   
                  }  

                  objTD.insertAdjacentElement("afterBegin",objTempDIV);       
                  
               }
 
            }

            if (intVisibles == 0) objTD.innerText = " "; 

         }

         objTBODY.appendChild(objTR);

        /* Do the negative values */
         
         objTR = thisDocument.createElement("TR");

         for (i = 0; i < intItemCount; i++)
         {
            var objTD    = thisDocument.createElement("TD");

            objTR.appendChild(objTD);

            objTD.align  = "center";
            objTD.vAlign = "top";
   

            {
               var arrayValues = arrayarrayItemValue[i];
               var j = 0; 

               for (j = 0; j < intValueCount; j++)
               {
                  var numValue   = arrayValues[j]; 
                  var objTempDIV = objTempDIV = thisDocument.createElement("DIV");
                 
                  if (flagStackedValues) objTempDIV.style.backgroundColor = arrayValueColor[j];  
                  else                objTempDIV.style.backgroundColor = arrayItemColor[i];
                   
                  objTempDIV.style.width  = strBarWidth; 
                  objTempDIV.style.textAlign = "center"; 
                  objTempDIV.style.overflow  = "hidden"; 

                  if (numValue >= 0) 
                  {
                     objTempDIV.style.height     = "1px";
                     objTempDIV.style.visibility = "hidden";
                     objTempDIV.style.display    = "none";  
                  }
                  else
                  {
                     objTempDIV.style.height = FP_RBARG_PRIVATE_pxMinimum( Math.abs( Math.ceil(numValue * numPixelFactor) ) ).toString() + "px";
                     FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),(j+1));   
                  }  

                  objTD.insertAdjacentElement("beforeEnd",objTempDIV);         

              }
 
            }

         }
  
         objTBODY.appendChild(objTR);

        /* Do the captions */
         
         objTR = thisDocument.createElement("TR");

         for (i = 0; i < intItemCount; i++)
         {
            var objTD    = thisDocument.createElement("TD");
            var objTempDIV     = thisDocument.createElement("DIV"); 

            objTD.appendChild(objTempDIV);
            objTR.appendChild(objTD);

            objTempDIV.innerText        = arrayItemCaption[i];
            objTempDIV.style.fontWeight = "bold";  

            if (flagVerticalCap) 
            {
               objTD.vAlign = "top"; 
               objTempDIV.style.writingMode = "tb-rl";  
               objTempDIV.style.paddingTop    = "4px"; 
               objTempDIV.style.paddingBottom = "4px"; 
            }
            else
            {
               objTempDIV.align = "center";
               objTempDIV.style.paddingLeft  = "4px"; 
               objTempDIV.style.paddingRight = "4px";
               if (flagVertical) objTempDIV.style.paddingTop = "4px"; 
            }

            FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),0);   

         }

         objTBODY.appendChild(objTR);

         /* Do the values */ 

         objTR = thisDocument.createElement("TR");

         for (i = 0; i < intItemCount; i++)
         {
            var objTD = thisDocument.createElement("TD");
            var objTempDIV  = thisDocument.createElement("DIV"); 
            var numValue = FP_RBARG_PRIVATE_SumArray(arrayarrayItemValue[i]);  

            objTempDIV.innerText = "(" +  numValue.toString() + ")";

            objTD.appendChild(objTempDIV);
            objTR.appendChild(objTD);

            if (flagVerticalVal) 
            {
               objTD.vAlign = "top"; 
               objTempDIV.style.writingMode = "tb-rl";  
               objTempDIV.style.paddingTop    = "4px"; 
               objTempDIV.style.paddingBottom = "4px"; 
            }
            else
            {
               objTempDIV.align = "center";
               objTempDIV.style.paddingLeft  = "4px"; 
               objTempDIV.style.paddingRight = "4px"; 
            }

            FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),0);   
        }

        objTBODY.appendChild(objTR);

      }

      /* -------------------- */
      /* HORIZONTAL BAR GRAPH */
      /* -------------------- */

      else
      {
        var intBarHeight   = VF_System.FP_GetNum(thisObject,"uBarHeight",1,true,400,thisObject.intOccurrence);  
        var numPixelFactor = intBarHeight/numRange; 
        var strBarWidth = VF_System.FP_GetNum(thisObject,"uBarWidth",1,true,15,thisObject.intOccurrence) + "px"; 

         for (i = 0; i < intItemCount; i++)
         {
            var objTR    = thisDocument.createElement("TR");
            var objTDCap = thisDocument.createElement("TD");
            var objTDVal = thisDocument.createElement("TD");
            var objTDNeg = thisDocument.createElement("TD");
            var objTDPos = thisDocument.createElement("TD");
            var objTempDIV     = null; 
            
            /* Insert the 4 columns */               
  
            objTR.appendChild(objTDCap);
            objTR.appendChild(objTDVal);
            objTR.appendChild(objTDNeg);
            objTR.appendChild(objTDPos);

            /* Set up the caption */
            
            objTempDIV = thisDocument.createElement("DIV"); 
            objTDCap.appendChild(objTempDIV); 
            objTempDIV.innerText = arrayItemCaption[i];  
            objTempDIV.style.fontWeight   = "bold";  
            FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),0);   

            if (flagVerticalCap) objTempDIV.style.writingMode = "tb-rl";  
 
            /* Set up the value */

            objTDVal.align = "right"; 
            objTDVal.style.paddingLeft = "10px"; 
            objTempDIV = thisDocument.createElement("DIV"); 
            objTDVal.appendChild(objTempDIV);
            objTempDIV.align = "right";  
            objTempDIV.innerText = "(" + FP_RBARG_PRIVATE_SumArray(arrayarrayItemValue[i]).toString() + ")";
            if (flagVerticalVal) objTempDIV.style.writingMode = "tb-rl";  
            FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),0);   
      
            /* Negative Value */
            
            objTDNeg.align = "right"; 
            objTDNeg.style.paddingLeft = "10px"; 
            objTDNeg.style.borderRight = "1px solid black"; 

            {
               var arrayValues = arrayarrayItemValue[i];
               var j = 0; 

               intVisibles = 0; 

               for (j = 0; j < intValueCount; j++)
               {
                  var numValue = arrayValues[j]; 
                  var objTempDIV     = thisDocument.createElement("SPAN"); 

                  if (flagStackedValues) objTempDIV.style.backgroundColor = arrayValueColor[j]; 
                  else                objTempDIV.style.backgroundColor = arrayItemColor[i];

                  if (i > 0) objTempDIV.style.borderTop = "1px solid buttonface"; 
                   
                  objTempDIV.align = "right";
                  objTempDIV.style.height = strBarWidth; 

                  if (numValue >= 0) 
                  {
                     objTempDIV.style.width      = "1px";
                     objTempDIV.style.visibility = "hidden";
                     objTempDIV.style.display    = "none";  
                  }
                  else
                  {
                     intVisibles++; 
                     objTempDIV.style.width = FP_RBARG_PRIVATE_pxMinimum( Math.abs( Math.ceil(numValue * numPixelFactor) ) ).toString() + "px";
                     FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),(j+1));   
                  }  

                  if (intVisibles == 0) objTDNeg.innerText = " ";  

                  objTDNeg.appendChild(objTempDIV);

              }
 
            }



            /* Positive Value */
           
            {
               var arrayValues = arrayarrayItemValue[i];
               var j = 0; 

               for (j = 0; j < intValueCount; j++)
               {
                  var numValue = arrayValues[j]; 
                  var objTempDIV     = thisDocument.createElement("SPAN"); 

                  if (flagStackedValues) objTempDIV.style.backgroundColor = arrayValueColor[j];  
                  else                objTempDIV.style.backgroundColor = arrayItemColor[i];

                  if (i > 0) objTempDIV.style.borderTop = "1px solid buttonface"; 
                   
                  objTempDIV.align = "left";
                  objTempDIV.style.height = strBarWidth; 

                  if (numValue <= 0) 
                  {
                     objTempDIV.style.width      = "1px";
                     objTempDIV.style.visibility = "hidden";
                     objTempDIV.style.display    = "none";  
                  }
                  else
                  {
                     objTempDIV.style.width = objTempDIV.style.width = FP_RBARG_PRIVATE_pxMinimum( Math.floor(numValue * numPixelFactor) ).toString() + "px";
                     FP_RBARG_PRIVATE_AttachClick(thisObject,objTempDIV,(i+1),(j+1));   
                  }  

                  objTDPos.appendChild(objTempDIV);

               }
 
            }


            /* Insert the whole row into the table */
 
            objTBODY.appendChild(objTR);

         }
      }
   } 

   /* ----------------------------------------- */
   /* Create and insert the stacked value table */
   /* ----------------------------------------- */

   if ((flagStackedValues) && (flagStackTable))
   {
      var objSTACKTBODY = null;
      var objTR         = null;
      var objTD         = null;
      var i = 0; 
      var j = 0; 
      var objTempSPAN = null; 
 
      /* Table and body */
 
      objSTACKTABLE = thisDocument.createElement("TABLE");
      objSTACKTBODY = thisDocument.createElement("TBODY");
      objSTACKTABLE.appendChild(objSTACKTBODY); 
      objSTACKTABLE.border = 1; 
      objSTACKTABLE.cellPadding = "4"; 

      if (intMargin > 0) objSTACKTABLE.style.marginTop = intMargin.toString() + "px";

      if ((flagStackTableTop) && (intMargin > 0)) objSTACKTABLE.style.marginBottom = intMargin.toString() + "px";
 
      /* Headings */
     
      objTR = thisDocument.createElement("TR");
      objSTACKTBODY.appendChild(objTR);
      objTR.vAlign = "center"; 

      objTD = thisDocument.createElement("TH"); 
      objTD.innerText = " ";
      objTR.appendChild(objTD);
      
      for (j = 0; j < intValueCount; j++)
      {
         objTD = thisDocument.createElement("TH"); 
         objTR.appendChild(objTD);
         objTD.vAlign = "center"; 

         objTempSPAN = thisDocument.createElement("SPAN"); 
         objTD.appendChild(objTempSPAN);
         objTempSPAN.style.backgroundColor = arrayValueColor[j];  
         objTempSPAN.style.width    = "16px";
         objTempSPAN.style.height   = "16px";
         objTempSPAN.style.overflow = "hidden"; 
         objTempSPAN.style.border   = "1px solid black";
         objTempSPAN.style.marginRight = "4px"; 
 
         objTempSPAN = thisDocument.createElement("SPAN"); 
         objTD.appendChild(objTempSPAN);
         objTempSPAN.innerText = VF_System.FP_Get(thisObject,("uValueCaption" + (j + 1).toString()),1,"",false,thisObject.intOccurrence); 
      }
     
      objTD = thisDocument.createElement("TH"); 
      objTR.appendChild(objTD);

      objTempSPAN = thisDocument.createElement("SPAN"); 
      objTD.appendChild(objTempSPAN);
      objTempSPAN.style.width    = "16px";
      objTempSPAN.style.height   = "16px";
      objTempSPAN.style.overflow = "hidden"; 
      objTempSPAN.style.border   = "1px solid black";
      objTempSPAN.style.marginRight = "4px"; 
 
      objTempSPAN = thisDocument.createElement("SPAN"); 
      objTD.appendChild(objTempSPAN);
      objTempSPAN.innerText = "Total"; 

      /* Value Rows */ 

      for (i = 0; i < intItemCount; i++)
      {
         objTR = thisDocument.createElement("TR");
         objSTACKTBODY.appendChild(objTR);
      
         objTD = thisDocument.createElement("TD"); 
         objTR.appendChild(objTD);
         objTD.innerText = arrayItemCaption[i]; 
         objTD.style.fontWeight = "bold";  

         FP_RBARG_PRIVATE_AttachClick(thisObject,objTD,(i+1),0);   

         for (j = 0; j < intValueCount; j++)
         {
            var arrayValues = arrayarrayItemValue[i];
            objTD = thisDocument.createElement("TD"); 
            objTR.appendChild(objTD);
            objTD.innerText = arrayValues[j].toString();
            objTD.align = "right"; 
         }
         
         objTD = thisDocument.createElement("TD"); 
         objTR.appendChild(objTD);
         objTD.innerText = FP_RBARG_PRIVATE_SumArray(arrayarrayItemValue[i]).toString(); 
         objTD.align = "right"; 
      } 

      /* Insert the stached values table into the main table as a spanning row */

      objTR = thisDocument.createElement("TR");
      objTD = thisDocument.createElement("TD");
     
      if (flagStackTableTop) objTD.align = "center";  
      else                   objTD.align = "left";
             
      if (flagVertical) 
      {
         if (intItemCount > 0) objTD.colSpan = intItemCount; 
      }
      else
      {
         objTD.colSpan = 4;  
      }    

      objTD.appendChild(objSTACKTABLE);
      objTR.appendChild(objTD);

      if (flagStackTableTop) objTBODY.insertAdjacentElement("afterBegin",objTR);
      else                   objTBODY.insertAdjacentElement("beforeEnd",objTR);

      /* Stacked values table completed */
      
   }

   /* ---------------------------------------------------------------------- */
   /* Finally insert any caption details created into the table at the start */
   /* ---------------------------------------------------------------------- */
   
   {
      var i;
      
      for (i = (objTRCaption.length - 1); i >= 0 ; i--)
      {
         objTBODY.insertAdjacentElement("afterBegin",objTRCaption[i]);
      }    

   }



   /* Insert the table into the DIV and the DIV into whole visualization container */ 

   objDIV.appendChild(objTABLE); 

   thisObject.objWorkContainer.appendChild(objDIV);
    
   /* Kill off consumed resources */
   
   arrayItemCaption    = null;
   arrayarrayItemValue = null;
   arrayItemColor      = null;
   arrayValueColor     = null;
   objTRCaption        = null; 
   arrayAutoColor      = null;    
   
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
function FP_RBARG_PRIVATE_SumArray(argArray)  
//#else
//# function FP_RBARG_PRIVATE_SumArray(argArray : Array) : String  
//#endif 
{

//#ifscript
   var j = 0;
   var numValue = 0;
//#else
//#   var j : int = 0;
//#   var numValue : Number = 0;
//#endif 
   
   for (j in argArray)
   {
      numValue = numValue + argArray[j]; 
   }
 
   return( VF_System.MakeNumericString(numValue, 1, true));
}

//#ifscript
function FP_RBARG_PRIVATE_pxMinimum(argnumValue)  
//#else
//# function FP_RBARG_PRIVATE_pxMinimum(argnumValue:Number):Number   
//#endif 
{
   if (argnumValue < 1) return(1);
   else                 return(argnumValue); 
}

//#ifscript
function FP_RBARG_PRIVATE_AttachClick(thisObject,argobjHTMLElement,argintItem,argintStackNumber)  
//#else
//# function FP_RBARG_PRIVATE_AttachClick(thisObject:FP_RBARG_Object,argobjHTMLElement,argintItem:int,argintStackNumber:int)  
//#endif 
{
   if (thisObject.flagSignalClick)
   {

      /* Let VF_SY506 insert the item identification details */

      VF_SY506_PRIVATE_InsertItemDetails(thisObject,argobjHTMLElement,argintItem,false,null,false); 

      /* Attach the events */ 

      argobjHTMLElement.attachEvent("onclick",     FP_RBARG_EVENT_HANDLER_001);   
      argobjHTMLElement.attachEvent("onmouseover", FP_RBARG_EVENT_HANDLER_002);   
      argobjHTMLElement.attachEvent("onmouseout",  FP_RBARG_EVENT_HANDLER_003);   

      /* Record this object so that the events can be removed during object destruction */  

      thisObject.arrayobjAttachedElements[thisObject.arrayobjAttachedElements.length] = argobjHTMLElement;
       
   }

   /* Finished */

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

/* ------------------------------------------------------- */
/* FP_RBARG_EVENT_HANDLER_001 - Handle a the graph element */
/* ------------------------------------------------------- */ 
  
function FP_RBARG_EVENT_HANDLER_001( argobjEvent )   
{
   argobjEvent.cancelBubble = true;

   if  ( !(VF_System.flagBusy) )
   {
      var thisObject;
//#ifscript   
	  thisObject = argobjEvent.srcElement.objFP_RXXXX;
      VF_SY506_PRIVATE_SelectItem(argobjEvent.srcElement);
//#else
//#   thisObject = this;
//#   VF_SY506_PRIVATE_SelectItem(argobjEvent.srcElement,this);
//#endif         
      VF_SY506_PRIVATE_HandleEvent(thisObject,"SELECTED");  
   }
 
   return; 
}

/* -------------------------------------------------------- */
/* FP_RBARG_EVENT_HANDLER_002 - Handle onmouseover          */
/* -------------------------------------------------------- */ 
  
function FP_RBARG_EVENT_HANDLER_002( argobjEvent )   
{
   argobjEvent.cancelBubble = true;

   if  ( !(VF_System.flagBusy) )
   {
      var thisHTMLElement = argobjEvent.srcElement; 

      thisHTMLElement.strSaveCursor = thisHTMLElement.style.cursor;   
      thisHTMLElement.style.cursor  = "hand";
   }

   return; 
}


/* -------------------------------------------------------- */
/* FP_RBARG_EVENT_HANDLER_003 - Handle onmouseout           */
/* -------------------------------------------------------- */ 
  
function FP_RBARG_EVENT_HANDLER_003( argobjEvent )   
{
   var thisHTMLElement  = argobjEvent.srcElement; 
   
   argobjEvent.cancelBubble = true;

   if  ( !(VF_System.flagBusy) && (typeof(thisHTMLElement.strSaveCursor) != "undefined") )
   {
      thisHTMLElement.style.cursor = thisHTMLElement.strSaveCursor;
   }

   return; 
}


//#IFNET
//# } 
//#endif 
