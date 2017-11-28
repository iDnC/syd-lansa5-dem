
/* ================================================================================== */
/* Note that this function is used when using newlook as the RAMP 5250 server         */
/* When using RAMP-TS you should use file uf_sy420_rts.js instead                     */  
/* ================================================================================== */

/* This file is for JavaScript functions that you want RAMP scripts to be able to use */
/* Always name your functions beginning with UF_                                      */ 
/* Define any variables within your functions                                         */

/* ---------------------------------------------------------------------------------- */
/* UF_MY_FUNCTION - My JavaScript Function (Accessible form RAMP Scripts)             */
/* ---------------------------------------------------------------------------------- */

function UF_MY_FUNCTION(argstrMyString1, argstrMyString2)
{

   var strMyString = argstrMyString1 + " - " + argstrMyString2;

   alert("My function was called. It added two strings together.");

   return(strMyString); 
}
