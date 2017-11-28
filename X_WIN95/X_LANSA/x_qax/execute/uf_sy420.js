/* ================================================================================== */
/*                                                                                    */
/*     #     #       #       ######     #     #    ###    #     #     #####           */
/*     #  #  #      # #      #     #    ##    #     #     ##    #    #     #          */
/*     #  #  #     #   #     #     #    # #   #     #     # #   #    #                */
/*     #  #  #    #     #    ######     #  #  #     #     #  #  #    #  ####          */
/*     #  #  #    #######    #   #      #   # #     #     #   # #    #     #          */ 
/*     #  #  #    #     #    #    #     #    ##     #     #    ##    #     #          */ 
/*      ## ##     #     #    #     #    #     #    ###    #     #     #####           */
/*                                                                                    */
/*                                                                                    */
/*     YOU NEED TO BACKUP ALL CHANGES YOU MAKE TO THIS FILE TO PREVENT LOSS           */
/*           WHEN YOU UPGRADE VERSIONS OR NEED TO REINSTALL SOFTWARE                  */
/*                                                                                    */
/* ================================================================================== */ 
/*   Note that this file is used when using RAMP-TS as the RAMP 5250 server           */
/* ================================================================================== */
/* This file is for common JavaScript properties and functions you want to access     */
/* from all your 5250 screen scripts. To provide an unlimited name space your         */ 
/* properties and functions MUST be encapsulated inside an object named SHARED        */
/* Typically is reside in the \aXes\ts\skins folder                                   */

/* ---------------------------------------------------------------------------------- */
/* The SHARED object contains all customer defined shared scripts and properties      */
/* ---------------------------------------------------------------------------------- */
    
var SHARED = 
{

   /* ----------------------------------------------- */ 
   /* Properties defined as part of the shared object */  
   /* ----------------------------------------------- */ 

   myProperty1 : "a",
   myProperty2 : 42, 

   /* ----------------------------------------------- */ 
   /* Functions defined as part of the shared object  */  
   /* ----------------------------------------------- */ 

   /* myFunction1 is a test function */

   myFunction1 : function(a,b,c)  
   {
      window.alert("myFunction1 executed with parameters " + a.toString() + " " + b.toString() + " " +  c.toString() );
      return;
   }, /* <======= Note the comma =========== */ 

   /* myFunction2 is another test function */
   
   myFunction2 : function(a,b)
   {
      var sResult = "myFunction2 was executed with parameters " + a.toString() + " " + b.toString();  
      return(sResult);
   }, /* <======= Note the comma =========== */ 

   /* Dummy last property that does not have a comma, leave here so all preceeding definitions have to use a comma */
   
   myEndProperty : true          

}; /* End of SHARED object definition */
