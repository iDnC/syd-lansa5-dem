/* -------------------------------------------------------------------------------- */
/*	TO EXECUTE THE VISUAL LANSA FRAMEWORK BROWSER EXTENSION IN LANGUAGE CODE ENG    */
/*	YOU DO NOT NEED TO CHANGE OR DEPLOY THIS FILE.               			        */
/* -------------------------------------------------------------------------------- */
/* This file contains the English multilingual text strings used in the browser     */
/*	extension of the Visual LANSA Framework.										*/
/*																					*/
/* To translate the text strings into a different language:							*/
/*																					*/
/*	1. Modify the name of the function VF_MULTI_LoadTextStrings_ENG() to			*/
/*		replace the ENG language code string with the desired language code.		*/
/*		For example, to use language code FRA, change to:							*/
/*																					*/
/*		VF_MULTI_LoadTextStrings_FRA()											    */
/*																					*/
/*		To use language code TCHI, change to:										*/
/*																					*/
/*		VF_MULTI_LoadTextStrings_TCHI()												*/
/*																					*/
/*		To use language code NAT, change to:										*/
/*																				    */
/*		VF_MULTI_LoadTextStrings_NAT()												*/
/*																			    	*/
/*	2. Do not translate things that are not in double quotes         				*/ 
/*																				    */
/*	3. Do not translate lines marked as "Do not translate"                          */ 
/*		                                                                        	*/
/*	4. Translate the text strings enclosed in double quotes           	            */
/*                                                                                  */
/*  5. Always save this file as a UTF8 encoded text file                            */
/* -------------------------------------------------------------------------------- */

function VF_MULTI_LoadTextStrings_ENG()
{
    
   /* Dereference the system array for easier and faster access */

//#ifscript
     var arraystrText = VF_System.arraystrMultilingualText; 
//#else
//#  var arraystrText : String[] = VF_System.arraystrMultilingualText; 
//#endif   
  
   /* ================== */ 
   /* Define the strings */   
   /* ================== */ 

   /* arraystrText[nnn] = "Text string"  */

      arraystrText[0]  = "Technical Support...";       
      arraystrText[1]  = "Visual LANSA Framework";   
      arraystrText[2]  = "could not be loaded because";   
      arraystrText[3]  = "could not be loaded for an unknown reason";   
      arraystrText[4]  = "Fatal Errors Window"; 
      arraystrText[5]  = "Tree View"; 
      arraystrText[6]  = "List View"; 
      arraystrText[7]  = "Unable to connect to server system during system startup"; 
      arraystrText[8]  = "Busy"; 
      arraystrText[9]  = "Ready"; 
      arraystrText[10] = "FATAL ERROR"; 
      arraystrText[11] = "A fatal error has been detected by function "; 
      arraystrText[12] = "The error details are :"; 
      arraystrText[13] = ""; 
      arraystrText[14] = "The system has been closed by your 'Exit' or 'Signoff' request."; 
      arraystrText[15] = "The system was closed by closing the main window or by you moving to another web site. Please use the 'Exit' menu option instead (when possible)."; 
      arraystrText[16] = "The system has terminated because it could not connect to the server system"; 
      arraystrText[17] = "Restart System"; 
      arraystrText[18] = "Close this Window"; 
      arraystrText[19] = "Loading system definition details from server"; 
      arraystrText[20] = "Establishing initial connection with server system"; 
      arraystrText[21] = "Creating user interface"; 
      arraystrText[22] = "Initializing system"; 
      arraystrText[23] = "Initialization completed successfully"; 
      arraystrText[24] = "Executing your request at the server system"; 
      arraystrText[25] = "Request sent to server system"; 
      arraystrText[26] = "The system has been closed because you did not sign on to the remote server system."; 
      arraystrText[27] = "Attempt to sign on to the remote server system failed. User profile and/or password specified are not valid."; 
      arraystrText[28] = "The system has been closed because you did not sign on."; 
      arraystrText[29] = "Signing on to remote server system."; 
      arraystrText[30] = "Signed on to remote server system as"; 
      arraystrText[31] = "User"; 
      arraystrText[32] = "Password"; 
      arraystrText[33] = "Sign On"; 
      arraystrText[34] = "Cancel"; 
      arraystrText[35] = "A problem has been detected with the current WEBEVENT Filter or Command Handler. There can be many causes for this problem.\r(1). The filter or command handler failed to execute properly and terminated abnormally on the web server.\r(2). The filter or command handler has not been set up correctly.\rPlease refer to the Troubleshooting section in the online guide for more information and complete problem resolution checklists.\rA quick checklist you should complete right now is:\r=> The function uses options *DIRECT and *WEBEVENT.\r=> First command is Include Process(*Direct) Function(VFSTART).\r=> Penultimate command is Include Process(*Direct) Function(VFEND).\r=> Last command executed is DISPLAY or REQUEST. \r=> There is only one DISPLAY or REQUEST command.\r=> Include Process(*Direct) Function(VFSTART) is executed only once.\r=> Include Process(*Direct) Function(VFEND) is executed only once.\r=> All VF_ and FP_ Built-In function executions occur between Include Process(*Direct) Function(VFSTART) and Include Process(*Direct) Function(VFEND), not before or after.\r=> Fields on DISPLAY or REQUEST commands are only identified by their labels or by their descriptions, not column headings. \r=> Fields on DISPLAY or REQUEST commands use DESIGN(*DOWN).\r=> The process to which the command handler or filter belongs has been set up correctly via the Developer's Console (ie: a LANSA for the Web skeleton has been correctly created for the owner process). \r=> All object allocations and locks have been freed at completion of the function. \r=> All database changes have been committed at completion of the function. \r=>Have you have tried executing the filter or command handler with trace mode on, possibly with additional user trace details being output by using the VF_TRACEAVALUE and VF_TRACENVALUE Built-In functions."; 
      arraystrText[36] = "Clear"; 
      arraystrText[37] = "Client Side"; 
      arraystrText[38] = "Server Side"; 
      arraystrText[39] = "Message"; 
      arraystrText[40] = "Time"; 
      arraystrText[41] = "Hours"; 
      arraystrText[42] = "Minutes"; 
      arraystrText[43] = "Seconds"; 
      arraystrText[44] = "The value "; 
      arraystrText[45] = " is invalid"; 
      arraystrText[46] = " has been reset"; 
      arraystrText[47] = "Date"; 
      arraystrText[48] = "January"; 
      arraystrText[49] = "February"; 
      arraystrText[50] = "March"; 
      arraystrText[51] = "April"; 
      arraystrText[52] = "May"; 
      arraystrText[53] = "June"; 
      arraystrText[54] = "July"; 
      arraystrText[55] = "August"; 
      arraystrText[56] = "September"; 
      arraystrText[57] = "October"; 
      arraystrText[58] = "November"; 
      arraystrText[59] = "December";

/* These strings are used as the Day headers in Modal Calendar. You could use only one letter, eg M T W, etc */
      
      arraystrText[60] = "Mon"; 
      arraystrText[61] = "Tue"; 
      arraystrText[62] = "Wed"; 
      arraystrText[63] = "Thu"; 
      arraystrText[64] = "Fri"; 
      arraystrText[65] = "Sat"; 
      arraystrText[66] = "Sun";

/*                                    */
      arraystrText[67] = "There are no messages available";
      arraystrText[68] = "Messages";

      arraystrText[69] = "On Tool Bar";

      arraystrText[70] = "**SPARE**";
 
      arraystrText[71] = "JAN"; /* Do not Translate */
      arraystrText[72] = "FEB"; /* Do not Translate */
      arraystrText[73] = "MAR"; /* Do not Translate */
      arraystrText[74] = "APR"; /* Do not Translate */
      arraystrText[75] = "MAY"; /* Do not Translate */
      arraystrText[76] = "JUN"; /* Do not Translate */
      arraystrText[77] = "JUL"; /* Do not Translate */
      arraystrText[78] = "AUG"; /* Do not Translate */
      arraystrText[79] = "SEP"; /* Do not Translate */
      arraystrText[80] = "OCT"; /* Do not Translate */
      arraystrText[81] = "NOV"; /* Do not Translate */
      arraystrText[82] = "DEC"; /* Do not Translate */

      arraystrText[83] = "MONDAY"; 
      arraystrText[84] = "TUESDAY"; 
      arraystrText[85] = "WEDNESDAY"; 
      arraystrText[86] = "THURSDAY"; 
      arraystrText[87] = "FRIDAY"; 
      arraystrText[88] = "SATURDAY"; 
      arraystrText[89] = "SUNDAY"; 

      arraystrText[90] = "MON"; 
      arraystrText[91] = "TUE"; 
      arraystrText[92] = "WED"; 
      arraystrText[93] = "THU"; 
      arraystrText[94] = "FRI"; 
      arraystrText[95] = "SAT"; 
      arraystrText[96] = "SUN"; 

      arraystrText[97]  = "The server system has refused to allow you access at this time."; 
      arraystrText[98]  = "The framework you are using is not enabled for browser based applications."; 
      arraystrText[99]  = "Attempt to sign on to the remote server system failed. The password specified is not correct."; 
      arraystrText[100] = "Attempt to sign on to the remote server system failed. You are not authorized to use this application framework. Contact your administrator for more information."; 
      arraystrText[101] = "Attempt to sign on to the remote server system failed. Application framework security is enabled but the user profile your used is not defined in the application framework security system."; 

      arraystrText[102] = "Use of back or forward key has been ignored."; 
      arraystrText[103] = "Print"; 
      arraystrText[104] = "Time"; 
      arraystrText[105] = "Event"; 

      arraystrText[106] = "Up"; 
      arraystrText[107] = "Down"; 
      arraystrText[108] = "Calendar"; 
      arraystrText[109] = "XML data island (or script equivalent) not found or invalid. There are many potential causes of this problem.  Some of the causes include be: (1). Invalid or non-existent real and/or virtual temporary directory names have been specified in the Administrators Console. (2). Web server not configured to support server side include correctly. (3). Code page conversion issues causing invalid XML to be produced. (4). Other causes: refer to the product documentation for more details."; 

      arraystrText[110] = "Input value truncated to specified length"; 
      arraystrText[111] = "Length, value or number of decimals is invalid"; 

      arraystrText[112] = "Copy"; 
      arraystrText[113] = "Paste"; 

      arraystrText[114] = "Download";   
      arraystrText[115] = "Upload"; 
      arraystrText[116] = "File size is greater than the maximum allowed of"; 
      arraystrText[117] = "File not uploaded"; 
      arraystrText[118] = "File not found"; 

      arraystrText[119] = "WARNING: The server software and the client software downloaded (or previously cached) from the server have different build numbers. The server software build number is "; 
      arraystrText[120] = ". The downloaded client software build number is "; 
      arraystrText[121] = ". You may be able to prevent this warning message by clearing your Internet Browser's file cache and then restarting this application. If this warning still appears you should contact your application provider and report this warning message to them."; 

      arraystrText[122] = "This application is in use and has been locked. "; 
      arraystrText[123] = "Only "; 
      arraystrText[124] = " can unlock this application. "; 
      arraystrText[125] = "If you are user "; 
      arraystrText[126] = " re-enter your password and click resume to continue using this application. "; 
      arraystrText[127] = "Click Cancel to terminate this application."; 
      arraystrText[128] = "Resume"; 
      arraystrText[129] = "The system has been closed automatically because of an inactivity timeout."; 

      arraystrText[130] = "WARNING: Form layout changes were NOT saved.";
      arraystrText[131] = "Do you want to save form layout changes made to ";
      arraystrText[132] = "Click OK to save form layout changes now, click Cancel to avoid saving the changes now";
      arraystrText[133] = "The form layout changes will be saved in file ";
      arraystrText[134] = "Unable to create an instance of the file system object.";
      arraystrText[135] = "Unable to save form layout changes because of an error when attempting to open file";

      arraystrText[136] = "UB_XXXXX Push Button";
      arraystrText[137] = "Entire Buttons Area <TD>";
      arraystrText[138] = "Property not available";
      arraystrText[139] = "Form Name";
      arraystrText[140] = "Element Name";
      arraystrText[141] = "Element Type";
      arraystrText[142] = "Description Not Available";
      arraystrText[143] = "Save";
      arraystrText[144] = "Entire Fields Area <TD>";
      arraystrText[145] = "Entire Browse List Area <TD>";
      arraystrText[146] = "Absolute Positioning";
      arraystrText[147] = "Input field";
      arraystrText[148] = "Field Label";
      arraystrText[149] = "Output field";
      arraystrText[150] = "Field and label table row <TR>";
      arraystrText[151] = "Form Title";
      arraystrText[152] = "Instruction Line";
      arraystrText[153] = "Note Line";
      arraystrText[154] = "Divider";
      arraystrText[155] = "Fast Part";
      arraystrText[156] = "Fast Part Label";
      arraystrText[157] = "Refresh";

      arraystrText[158] = "Entire Browse List <TABLE>";
      arraystrText[159] = "Entire Column Heading Row <TR>";
      arraystrText[160] = "Individual Column Heading <TH>";
      arraystrText[161] = "Entire Data Row <TR>";
      arraystrText[162] = "Indiviudal Data Row Cell/Column <TD>";
      arraystrText[163] = "Input Field <INPUT>";
      arraystrText[164] = "Output Field or Other DHTML Element";

      arraystrText[165] = "DHTML Tag Type";
      arraystrText[166] = "** undefined **";
      arraystrText[167] = "Whole Form <TABLE>";
      arraystrText[168] = "Whole Form <DIV>";
      arraystrText[169] = "Entire Buttons Area <TR>";
      arraystrText[170] = "Entire Fields Area <TR>";
      arraystrText[171] = "Entire Browse List Area <TR>";
      arraystrText[172] = "All Properties";
      arraystrText[173] = "Other DHTML Element or Web Component";
      arraystrText[174] = "Show HTML";
      arraystrText[175] = "Outer HTML";
      arraystrText[176] = "You should avoid closing this window as it will normally just open again later when you click on a form.";
      arraystrText[177] = "Color Table";
      arraystrText[178] = "DHTML Property Help";
      arraystrText[179] = "Go";
      arraystrText[180] = "Attempt to use a FileSystemObject method failed with error";

      arraystrText[181] = "The filter or command handler ";
      arraystrText[182] = " has failed to respond for ";

      arraystrText[183] = "Wait";
      arraystrText[184] = "Shutdown";
      arraystrText[185] = "Check";

      arraystrText[186] = " seconds more for a response.";
      arraystrText[187] = "and signoff from the framework.";
      arraystrText[188] = "for error information on the Web Server.";

      arraystrText[189] = "A problem has been detected with the current WAM (Web Application Module) Filter or Command Handler. There can be many causes for this problem. (1). The filter or command handler failed to execute properly and terminated abnormally on the web server. (2). The filter or command handler has not been set up correctly. Please refer to the Troubleshooting section in the online guide for more information about this type of problem.";
      arraystrText[190] = "The system was forced to shutdown by you due to a non-responsive filter or command handler."; 

      arraystrText[191] = "Whole Form <BODY>";

      arraystrText[192] = "Code table name reference is invalid because the code table is not defined in this framework. The code table name is ";

      arraystrText[193] = "Calculator";

		/* These are the postfixes for the day in the date that appears in the status bar. */
		/* For example, in English, the first of the month will would be 1 followed by arraystrText[194] */
		/* resulting in 1st. Note that your language might only use one postfix in which case you must */
		/* still modify the four strings. */
		/* If you don't want postfixes at all then use a blank space between the quotes */

      arraystrText[194] = "st"; /* used for the first day of the month, 21 and 31 */
		arraystrText[195] = "nd"; /* used for the second day of the month and 22 */
      arraystrText[196] = "rd"; /* used for the thrid day of the month and 23 */
      arraystrText[197] = "th"; /* used for all the rest of the days of the month  */
      arraystrText[198] = "Visit our Web Site for More Information"; /* default for IntroUrlCaption */

      arraystrText[199] = "Auto Select"; 
      
      /* FP_RCALC - Calculator Buttons */
      arraystrText[200] = "Bksp";	
      arraystrText[201] = "CE";		
      arraystrText[202] = "C";	
      arraystrText[203] = "Sqrt";	
      arraystrText[204] = "MC";		
      arraystrText[205] = "MR";		
      arraystrText[206] = "MS";		
      arraystrText[207] = "M+";
      
      /* Stats */

      arraystrText[208] = "OVERALL";		
      arraystrText[209] = "CLIENT-SIDE";		
      arraystrText[210] = "SERVER-SIDE";		
      arraystrText[211] = "Executed";		
      arraystrText[212] = "Avg (secs)";		
      arraystrText[213] = "Min (secs)";		
      arraystrText[214] = "Max (secs)";		  
      arraystrText[215] = "ACTIVITY";		
      arraystrText[216] = "EVENT";		
      arraystrText[217] = "Displayed Value <TD>";
      arraystrText[218] = " seconds. What would do you want to do now ?";

      arraystrText[219] = "Maximize";
      arraystrText[220] = "Restore Down";
      
      /* More FLA texts */
      arraystrText[221] = "The problem usually occurs because your Internet Explorer security settings will not allow an Active-X control that is required to write the layout changes back to the server to be created.";
      arraystrText[222] = "The recommended solution to this problem is to add your development server's IP address or host name into the Internet Explorer's trusted site list.";
      arraystrText[223] = "Close";

      arraystrText[224] = "Too many unsuccessful sign on attempts: This user has been disabled";
      arraystrText[225] = "Attempt to look for any additional error information available on the server system";
      arraystrText[226] = "Click OK to Continue";
      
      arraystrText[227] = "Invalid value entered into cell. Previous value will be restored.";
      arraystrText[228] = "RAMP"; 
      arraystrText[229] = "Not connected to server system";       
      arraystrText[230] = "You have reached the maximum number of ";
      arraystrText[231] = " RAMP sessions allowed in the browser";
      arraystrText[232] = "The user information returned is corrupt - please send this message to your product vendor";
      arraystrText[233] = "Initializing";
      arraystrText[234] = "Creating Framework";
      arraystrText[235] = "Initiating Session Allocation";
      arraystrText[236] = "Continuing Framework Creation";
      arraystrText[237] = "Creating Code Tables";
      arraystrText[238] = "Removing Initialization Material";
      arraystrText[239] = "Creating User Interface";
      arraystrText[240] = "Waiting for Session Allocation response from Web Server";
      arraystrText[241] = "Session Allocated by Web Server - Signing on to Web Server";
      arraystrText[242] = "Signon to Web Server Completed";
      arraystrText[243] = "Establishing Execution Environment";
      arraystrText[244] = "Switching to start up application";
      arraystrText[245] = "System Available";
      arraystrText[246] = "The XML definitions of your RAMP nodes and scripts stored in ";
      arraystrText[247] = " were last saved on ";      
      arraystrText[248] = " at ";      
      arraystrText[249] = " (the XML based definition controls RAMP sessions when working as an application designer). The execution time JavaScript being used in this RAMP session was generated from an XML file that was saved on ";
      arraystrText[250] = " (the execution time JavaScript controls RAMP sessions when working as an application end user). This message means that the execution time JavaScript session may be out of date and may need to be regenerated from the latest XML.";      

/* Following MTXTs are used for the User Details */

      arraystrText[251] = "Caption";      
      arraystrText[252] = "Save";      
      arraystrText[253] = "Group this user belongs to";
      arraystrText[254] = "Click OK to delete the selected User Profile";
      arraystrText[255] = "User Profile";
      arraystrText[256] = "New Password";
      arraystrText[257] = "Temp Directory on PC";
      arraystrText[258] = "e-mail Address";
      arraystrText[259] = "Inactivity LogOn timeout"; 
      arraystrText[260] = "Confirm New Password";
      arraystrText[261] = "(minutes)";
      arraystrText[262] = "Settings";
      arraystrText[263] = "Inactivity LogOff timeout";
      arraystrText[264] = "Administrative User";
      arraystrText[265] = "User is Disabled";
      arraystrText[266] = "RAMP User";
      arraystrText[267] = "RAMP Password";
      arraystrText[268] = "Only use when the User details for RAMP sessions need to be different";
      arraystrText[269] = "Groups this user belongs to";
      arraystrText[270] = "Internal Identifier";
      arraystrText[271] = "New Password and Confirm New Password are not equal";
      arraystrText[272] = "There are currently no defined groups";
      arraystrText[273] = "Select all";
      arraystrText[274] = "Unselect all";
      arraystrText[275] = "This group cannot be deleted as it is used by one or more users";      
      arraystrText[276] = "User Profile length error";      
      arraystrText[277] = "You must (re) specify a password";
      arraystrText[278] = "Warning: Password will have to be re-entered ";            
      arraystrText[279] = "User properties for ";  
      arraystrText[280] = " (No instance caption specified)";  
      arraystrText[281] = "Invalid numeric value in";  
      arraystrText[282] = "Click to select/unselect";        
      arraystrText[283] = "No custom properties exist";        
      arraystrText[284] = "Save and Close";      
      arraystrText[285] = "Save and Create another";      
            
/* END MTXTs for User Details */

      arraystrText[286] = "An error has been detected in a response made by your web server.\r\rDo you want to display detailed problem analysis information before your application is closed?";      
      arraystrText[287] = "A server session allocation error has occurred. The most likely causes of this type of problem are that the server is not currently available, or, that a server configuration problem is preventing it from allocating a session at this time.";      
      arraystrText[288] = "An internal error was detected when exchanging information with the server. The most likely causes of this type of problem are that the server has become not available, or, that a program failed to execute correctly on the server.";      

      arraystrText[289] = "Save Password";

      arraystrText[290] = "Local Time";
      arraystrText[291] = "GMT Time";
      arraystrText[292] = "Applications";
      arraystrText[293] = "<BUSOBJ> Search";
      arraystrText[294] = "The system is currently busy processing your request, please try again later";
      arraystrText[295] = "Loading ...";
      arraystrText[296] = "There are more messages to view - press the 'Messages' button to view all messages";
      arraystrText[297] = "Reset User Settings to Default";
      arraystrText[298] = "When you start the application next time user settings will be reset to default";

      arraystrText[299] = "An error has been detected in a response made by your web server.";
      arraystrText[300] = "Show Details";
      arraystrText[301] = "The system has encountered a fatal error and needs to shutdown. You can view the details of the error before closing this window.";

      arraystrText[302] = "Quick find ...";
      arraystrText[303] = "Type search string";
      arraystrText[304] = "Recently used";
      arraystrText[305] = "Your search found";     
      arraystrText[306] = "Clear List";
      arraystrText[307] = "Change the navigation pane to display as a list";
      arraystrText[308] = "Change the navigation pane to display as a tree";
      
      arraystrText[309] = "Create Shared Templates Package";
      arraystrText[310] = "Select All";
      arraystrText[311] = "Unselect All";
      arraystrText[312] = "Package Name:";
      arraystrText[313] = "Output Folder:";
      arraystrText[314] = "Create Package";
      arraystrText[315] = "Cancel";
      arraystrText[316] = "There is no entries in the list";
      arraystrText[317] = "The package has been generated successfully.\nPlease upload the package to:\n";
      arraystrText[318] = "Error detected when trying to create child window from ";
      arraystrText[319] = ". Your pop up window blocker may need to be turned off for this site, or, define this web server as a trusted site. This error will not prevent you from working. Click OK to proceed.";
      arraystrText[320] = "Change IBM i Password";
      arraystrText[321] = "Old Password";      
      arraystrText[322] = "Change";            
      arraystrText[323] = "IBM i password successfully changed";                  
      arraystrText[324] = "Error changing IBM i password";                
      arraystrText[325] = "Execution ended successfully. A fatal error occurred calling success callback function. The error is: ";                
      arraystrText[326] = "Execution ended in error. Additionally, a fatal error occurred calling error callback function. The error is: ";                
      arraystrText[327] = "Execution ended in error but no callback function was provided. ";                
      arraystrText[328] = " ended in error: ";                      
      arraystrText[329] = "Execution ended successfully but no callback function was provided.";                
      
//#ifnet
//#   // ======================================= 
//#   // Update the maximum text number assigned  
//#   // ======================================= 
//#   //
//#          VF_System.iMultilingualTextHighestIndex = 329;
//#   //
//#endif       
      
   /* Finished */  

//#ifnet
//# return "en-US";
//#endif    
}

