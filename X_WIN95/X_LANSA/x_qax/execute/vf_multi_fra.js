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
/*	2. Do not translate thingd that are not in double quotes         				*/
/*																				    */
/*	3. Do not translate lines marked as "Do not translate"                          */
/*		                                                                        	*/
/*	4. Translate the text strings enclosed in double quotes           	            */
/*                                                                                  */
/*  5. Always save this file as a UTF8 encoded text file                            */
/* -------------------------------------------------------------------------------- */
  
function VF_MULTI_LoadTextStrings_FRA()
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

      arraystrText[0]  = "Support technique...";       
      arraystrText[1]  = "Cadre d'application Visual LANSA";   
      arraystrText[2]  = "non chargé parce que";   
      arraystrText[3]  = "non chargé pour une raison inconnue";   
      arraystrText[4]  = "Erreurs fatales"; 
      arraystrText[5]  = "Arborescence"; 
      arraystrText[6]  = "Vue en liste"; 
      arraystrText[7]  = "Connexion au serveur impossible pendant le démarrage"; 
      arraystrText[8]  = "Occupé"; 
      arraystrText[9]  = "Prêt"; 
      arraystrText[10] = "ERREUR FATALE"; 
      arraystrText[11] = "Erreur fatale détectée par la fonction "; 
      arraystrText[12] = "Détails de l'erreur :"; 
      arraystrText[13] = ""; 
      arraystrText[14] = "Le système a été fermé suite à la demande de fermeture ou de déconnexion."; 
      arraystrText[15] = "Le système a été fermé par fermeture de la fenêtre principale ou par votre accès à un autre site Web. Utilisez plutôt l'option de menu 'Quitter' (si possible)."; 
      arraystrText[16] = "Le système a été fermé car il n'a pas pu se connecter au serveur"; 
      arraystrText[17] = "Redémarrer le système"; 
      arraystrText[18] = "Fermer cette fenêtre"; 
      arraystrText[19] = "Chargement des définitions système à partir du serveur"; 
      arraystrText[20] = "Etablissement ce la connexion initiale au système serveur"; 
      arraystrText[21] = "Création de l'interface utilisateur"; 
      arraystrText[22] = "Initialisation du système"; 
      arraystrText[23] = "Initialisation terminée"; 
      arraystrText[24] = "Exécution de la demande sur le système serveur"; 
      arraystrText[25] = "Demande envoyée au système serveur"; 
      arraystrText[26] = "Le système a été fermé car vous ne vous êtes pas authentifié sur le système serveur distant."; 
      arraystrText[27] = "Echec de la connexion au système serveur distant. Profil utilisateur ou mot de passe incorrects."; 
      arraystrText[28] = "Le système a été fermé car vous ne vous êtes pas authentifié."; 
      arraystrText[29] = "Connexion au système serveur distant."; 
      arraystrText[30] = "Connexion au système serveur distant en tant que"; 
      arraystrText[31] = "Utilisateur"; 
      arraystrText[32] = "Mot de passe"; 
      arraystrText[33] = "Connexion"; 
      arraystrText[34] = "Annuler"; 
      arraystrText[35] = "Un problème a été détecté avec le filtre webevent ou le gestionnaire d'action actuels. Il peut y avoir de nombreuses causes à ce problème.\r(1). Le filtre de recherche ou le gestionnaire d'action ne se sont pas exécutés correctement et se sont terminés sur le serveur web.\r(2). Le filtre de recherche ou le gestionnaire d'action ont été configurés incorrectement.\rReportez vous à la section Troubleshooting du guide en ligne pour plus d'informations et des listes de contrôle pour la résolution des problèmes.\rVous pouvez vérifier rapidement les points suivants:\r=> La fonction utilise les options *DIRECT et *WEBEVENT.\r=> La première commande est Include Process(*Direct) Function(VFSTART).\r=> L'avant-dernière commande est Include Process(*Direct) Function(VFEND).\r=> La dernière commande exécutée est DISPLAY ou REQUEST. \r=> Il n'y a qu'une seule commande DISPLAY ou REQUEST.\r=> Include Process(*Direct) Function(VFSTART) est exécuté une seule fois.\r=> Include Process(*Direct) Function(VFEND) est exécuté une seule fois.\r=> Toutes les exécutions des fonctions intégrées VF_ et FP_ se passent entre Include Process(*Direct) Function(VFSTART) et Include Process(*Direct) Function(VFEND), ni avant ni après.\r=> Les zones des commandes DISPLAY ou REQUEST sont identifiées par leur labels ou leurs descriptions seulement, pas par entêtes de colonnes. \r=> Les zones des commandes  DISPLAY ou REQUEST utilisent DESIGN(*DOWN).\r=> Le process d'appartenance des gestionnaires d'action ou des filtres de recherche a été configuré correctement via la console du développeur (ie: un squelette LANSA for the Web a été créé correctement pour le process propriétaire). \r=> Toutes les allocations d'objet et tous les verrouillages ont été libérés en fin d'exécution de la fonction. \r=> Toutes les modifications apportées à la base de données ont été enregistrées avant la fin de la fonction. \r=>Avez-vous essayé d'exécuter le filtre ou le gestionnaire d'action en mode trace, éventuellement avec sortie des détails de trace utilisateur avec les fonctions intégrées VF_TRACEAVALUE et VF_TRACENVALUE.";  
      arraystrText[36] = "Vider les infos de trace"; 
      arraystrText[37] = "Trace Client = bleu."; 
      arraystrText[38] = "Trace Serveur = rouge."; 
      arraystrText[39] = "Messages = vert."; 
      arraystrText[40] = "Heure"; 
      arraystrText[41] = "Heures"; 
      arraystrText[42] = "Minutes"; 
      arraystrText[43] = "Secondes"; 
      arraystrText[44] = "La valeur "; 
      arraystrText[45] = " est incorrecte"; 
      arraystrText[46] = " a été réinitialisée";
      arraystrText[47] = "Date"; 
      arraystrText[48] = "Janvier"; 
      arraystrText[49] = "Février"; 
      arraystrText[50] = "Mars"; 
      arraystrText[51] = "Avril"; 
      arraystrText[52] = "Mai"; 
      arraystrText[53] = "Juin"; 
      arraystrText[54] = "Juillet"; 
      arraystrText[55] = "Août"; 
      arraystrText[56] = "Septembre"; 
      arraystrText[57] = "Octobre"; 
      arraystrText[58] = "Novembre"; 
      arraystrText[59] = "Décembre";

/* These strings are used as the Day headers in Modal Calendar. You could use only one letter, eg M T W, etc */
      
      arraystrText[60] = "Lun"; 
      arraystrText[61] = "Mar"; 
      arraystrText[62] = "Mer"; 
      arraystrText[63] = "Jeu"; 
      arraystrText[64] = "Ven"; 
      arraystrText[65] = "Sam"; 
      arraystrText[66] = "Dim";

/*                                    */
      arraystrText[67] = "Il n'y a pas de messages disponibles";
      arraystrText[68] = "Messages";

      arraystrText[69] = "Barre d'outils";

      arraystrText[70] = "**DISPONIBLE**";
 
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

      arraystrText[83] = "LUNDI"; 
      arraystrText[84] = "MARDI"; 
      arraystrText[85] = "MERCREDI"; 
      arraystrText[86] = "JEUDI"; 
      arraystrText[87] = "VENDREDI"; 
      arraystrText[88] = "SAMEDI"; 
      arraystrText[89] = "DIMANCHE"; 

      arraystrText[90] = "LUN"; 
      arraystrText[91] = "MAR"; 
      arraystrText[92] = "MER"; 
      arraystrText[93] = "JEU"; 
      arraystrText[94] = "VEN"; 
      arraystrText[95] = "SAM"; 
      arraystrText[96] = "DIM"; 

      arraystrText[97]  = "Le système serveur a refusé de vous autoriser l'accès actuellement."; 
      arraystrText[98]  = "Le cadre d'application que vous utilisez n'est pas configuré pour les applications via navigateur Web."; 
      arraystrText[99]  = "Erreur de connexion au système serveur. Le mot de passe précisé est incorrect."; 
      arraystrText[100] = "Erreur de connexion au système serveur. Vous n'avez pas l'autorisation d'utiliser ce cadre d'application. Contactez votre administrateur pour plus d'informations."; 
      arraystrText[101] = "Erreur de connexion au système serveur. La sécurité du cadre d'application est activée mais le profil utilisateur utilisé n'est pas défini dans le système de sécurité du cadre d'application."; 

      arraystrText[102] = "L'utilisation des touches précédent ou suivant a été ignorée."; 
      arraystrText[103] = " Imprimer les infos de trace "; 
      arraystrText[104] = "Heure"; 
      arraystrText[105] = "Evénement de trace"; 

      arraystrText[106] = "Haut"; 
      arraystrText[107] = "Bas"; 
      arraystrText[108] = "Calendrier"; 
      arraystrText[109] = "Ilot de données XML (ou script équivalent) non trouvé ou incorrect. Il y a beaucoup de causes potentielles à ce problème. Voici quelques causes possibles : (1). Les répertoires temporaires réels ou virtuels précisés dans la console d'administration sont inexistants ou incorrects. (2). Le serveur Web n'a pas été configuré pour supporter les inclusions côté serveur (SSI). (3). Une conversion de pages de code incorrecte a généré du source XML invalide. (4). Autres causes: reportez vous à la documentation produit pour plus d'informations."; 

      arraystrText[110] = "Valeur saisie tronquée à la longueur précisée"; 
      arraystrText[111] = "Longueur, valeur ou nombre de décimales incorrects"; 

      arraystrText[112] = "Copier"; 
      arraystrText[113] = "Coller"; 

      arraystrText[114] = "Téléchargement";   
      arraystrText[115] = "Chargement sur le serveur"; 
      arraystrText[116] = "La taille du fichier est supérieure au maximum autorisé"; 
      arraystrText[117] = "Fichier non chargé sur le serveur"; 
      arraystrText[118] = "Fichier non trouvé"; 

      arraystrText[119] = "ATTENTION : Le logiciel serveur et le logiciel client téléchargé (ou mis en cache précédemment) à partir du serveur ont des numéros de version différents. Le numéro de version du logiciel serveur est "; 
      arraystrText[120] = ". Le numéro de version du logiciel client téléchargé est "; 
      arraystrText[121] = ". Vous pouvez éviter ce message en vidant le fichier cache de votre navigateur Internet et en relançant l'application. Si le message apparaît encore, contacter le responsable de l'application et reportez-lui ce problème."; 

      arraystrText[122] = "Cette application est en cours d'utilisation et a été verrouillée. "; 
      arraystrText[123] = "Seulement "; 
      arraystrText[124] = " peut déverrouiller cette application. "; 
      arraystrText[125] = "Si vous êtes "; 
      arraystrText[126] = " entrez à nouveau le mot de passe et actualisez pour continuer à utiliser cette application. "; 
      arraystrText[127] = "Cliquez annuler pour terminer cette application."; 
      arraystrText[128] = "Actualiser"; 
      arraystrText[129] = "Le système a été fermé automatiquement en raison du délai d'inactivité."; 

      arraystrText[130] = "ATTENTION: les modifications de présentation du formulaire N'ONT PAS ETE enregistrées.";
      arraystrText[131] = "Voulez-vous enregistrer les modifications de présentation du formulaire apportés à ";
      arraystrText[132] = "Cliquez OK pour enregistrer les modifications de présentation du formulaire maintenant, cliquez Annuler pour ne pas le faire maintenant";
      arraystrText[133] = "les modifications de présentation du formulaire seront enregistrées dans le fichier ";
      arraystrText[134] = "Création d'une instance du fichier objet système.";
      arraystrText[135] = "Sauvegarde des modifications de présentation du formulaire impossible en raison d'une erreur d'ouverture du fichier";

      arraystrText[136] = "Bouton poussoir UB_XXXXX";
      arraystrText[137] = "Zone des boutons en entier <TD>";
      arraystrText[138] = "Propriété non disponible";
      arraystrText[139] = "Nom du formulaire";
      arraystrText[140] = "Nom d'élément";
      arraystrText[141] = "Type d'élément";
      arraystrText[142] = "Description non disponible";
      arraystrText[143] = "Enregistrer";
      arraystrText[144] = "Zone des zones en entier <TD>";
      arraystrText[145] = "Zone de liste en entier <TD>";
      arraystrText[146] = "Positionnement absolu";
      arraystrText[147] = "Zone de saisie";
      arraystrText[148] = "Label de zone";
      arraystrText[149] = "Zone d'affichage";
      arraystrText[150] = "Ligne de table zone et label <TR>";
      arraystrText[151] = "Titre de formulaire";
      arraystrText[152] = "Ligne d'instruction";
      arraystrText[153] = "Ligne de note";
      arraystrText[154] = "Séparateur";
      arraystrText[155] = "Elément express";
      arraystrText[156] = "Label d'élément express";
      arraystrText[157] = "Actualiser";

      arraystrText[158] = "Liste entière <TABLE>";
      arraystrText[159] = "Ligne entière d'entête de colonne<TR>";
      arraystrText[160] = "Entête de colonne individuelle <TH>";
      arraystrText[161] = "Ligne entière de données <TR>";
      arraystrText[162] = "Cellule/colonne spécifiques de ligne de données <TD>";
      arraystrText[163] = "Zone de saisie <INPUT>";
      arraystrText[164] = "Zone d'affichage ou autre élément DHTML";

      arraystrText[165] = "Type de balise DHTML";
      arraystrText[166] = "** indéterminé **";
      arraystrText[167] = "Formulaire entier <TABLE>";
      arraystrText[168] = "Formulaire entier <DIV>";
      arraystrText[169] = "Zone des boutons<TR>";
      arraystrText[170] = "Zone des zones<TR>";
      arraystrText[171] = "Zone de liste<TR>";
      arraystrText[172] = "Toutes les propriétés";
      arraystrText[173] = "Autres éléments DHTML ou composant Web";
      arraystrText[174] = "Afficher HTML";
      arraystrText[175] = "Hors HTML";
      arraystrText[176] = "Vous devriez éviter de fermer cette fenêtre car elle sera à nouveau ouverte plus tard quand vous cliquerez sur un formulaire.";
      arraystrText[177] = "Table de couleurs";
      arraystrText[178] = "Aide des propriétés DHTML";
      arraystrText[179] = "Go";
      arraystrText[180] = "Erreur d'utilisation de la méthode FileSystemObject";

      arraystrText[181] = "Le filtre de recherche ou le gestionnaire d'action ";
      arraystrText[182] = " n a pas pu répondre pour ";

      arraystrText[183] = "Patientez";
      arraystrText[184] = "Arrêt";
      arraystrText[185] = "Contrôle";

      arraystrText[186] = " secondes encore pour la réponse.";
      arraystrText[187] = "et déconnexion du cadre d'application.";
      arraystrText[188] = "pour informations concernant les erreurs sur le serveur Web.";

      arraystrText[189] = "Un problème a été détecté avec le WAM (Web Application Module) actuel filtre de recherche ou gestionnaire d'action. Il peut y avoir de nombreuses causes pour ce problème. (1). Le filtre de recherche ou le gestionnaire d'action ne se sont pas exécutés correctement et se sont terminés sur le serveur web. (2). Le filtre de recherche ou le gestionnaire d'action ont été configurés incorrectement. Reportez vous à la section Troubleshooting du guide en ligne pour plus d'informations sur ces problèmes.";
      arraystrText[190] = "Le système a du s'arrêter en raison de la non réponse d'un filtre de recherche ou d'un gestionnaire d'action."; 

      arraystrText[191] = "Formulaire entier <BODY>";

      arraystrText[192] = "La référence du nom de la table de code est incorrecte car la table de codes n'est pas définie dans ce cadre d'application. Le nom de la table de code est ";

      arraystrText[193] = "Calculette";

		/* These are the postfixes for the day in the date that appears in the status bar. */
		/* For example, in English, the first of the month will would be 1 followed by arraystrText[194] */
		/* resulting in 1st. Note that your language might only use one postfix in which case you must */
		/* still modify the four strings. */
		/* If you don't want postfixes at all then use a blank space between the quotes */

      arraystrText[194] = ""; /* used for the first day of the month, 21 and 31 */
		arraystrText[195] = ""; /* used for the second day of the month and 22 */
      arraystrText[196] = ""; /* used for the thrid day of the month and 23 */
      arraystrText[197] = ""; /* used for all the rest of the days of the month  */
      arraystrText[198] = "Visitez notre site Web pour plus d'informations"; /* default for IntroUrlCaption */

      arraystrText[199] = "Sélection automatique"; 
      
      /* FP_RCALC - Calculator Buttons */
      arraystrText[200] = "Arrière";	
      arraystrText[201] = "CE";		
      arraystrText[202] = "C";	
      arraystrText[203] = "Racine";	
      arraystrText[204] = "MC";		
      arraystrText[205] = "MR";		
      arraystrText[206] = "MS";		
      arraystrText[207] = "M+";
      
      /* Stats */

      arraystrText[208] = "GLOBAL";		
      arraystrText[209] = "COTE-CLIENT";		
      arraystrText[210] = "COTE-SERVEUR";		
      arraystrText[211] = "Exécutés";		
      arraystrText[212] = "Moy (secs)";		
      arraystrText[213] = "Min (secs)";		
      arraystrText[214] = "Max (secs)";		
      arraystrText[215] = "FONCTION";		
      arraystrText[216] = "EVENEMENT";		
      arraystrText[217] = "Valeur affichée <TD>";
      arraystrText[218] = " secondes. Que voulez-vous faire maintenant ?";

      arraystrText[219] = "Maximiser";
      arraystrText[220] = "Restaurer";
      
      /* More FLA texts */
      arraystrText[221] = "Le problème existe en général parce que les paramètres de sécurité de votre navigateur Internet Explorer ne permettent pas l'utilisation d'un contrôle Active-X nécessaire pour enregistrer les modifications de présentation sur le serveur.";
      arraystrText[222] = "La solution recommandée à ce problème est d'ajouter l'adresse IP ou le nom d'hôte de votre serveur de développement à la liste des sites de confiance d'Internet Explorer.";
      arraystrText[223] = "Fermer";

      arraystrText[224] = "Trop de tentatives de connexion infructueuses : l'utilisateur a été désactivé";
      arraystrText[225] = "Consultez les informations complémentaires disponibles concernant cette erreur sur le système serveur";
      arraystrText[226] = "Cliquer OK pour Continuer";
      
      arraystrText[227] = "Valeur incorrecte saisie dans la cellule. Valeur précédente restaurée.";
      arraystrText[228] = "Ramp = noir."; 
      arraystrText[229] = "Non connecté au système serveur";       
      arraystrText[230] = "Vous avez atteint le nombre maximum de sessions RAMP autorisées dans le navigateur";
      arraystrText[231] = " sessions RAMP autorisées dans le navigateur";
      arraystrText[232] = "Les informations utilisateur retournées sont corrompues - envoyez ce message au support produit";
      arraystrText[233] = "Initialisation";
      arraystrText[234] = "Création du cadre d'application";
      arraystrText[235] = "Début d'allocation de session";
      arraystrText[236] = "Suite de la création du cadre d'application";
      arraystrText[237] = "Création des tables de codes";
      arraystrText[238] = "Suppression des éléments d'initialisation";
      arraystrText[239] = "Création de l'interface utilisateur";
      arraystrText[240] = "Attente de la réponse d'allocation de session du serveur Web";
      arraystrText[241] = "Session allouée par le serveur Web - Connexion au serveur Web";
      arraystrText[242] = "Connexion au serveur Web terminée";
      arraystrText[243] = "Etablissement de l'environnement d'exécution";
      arraystrText[244] = "Basculement pour démarrer l'application";
      arraystrText[245] = "Système disponible";
      arraystrText[246] = "La définition XML de vos noeuds et scripts RAMP stockés dans ";
      arraystrText[247] = " a été enregistrée le ";      
      arraystrText[248] = " à ";      
      arraystrText[249] = " (La définition XML contrôle les sessions RAMP lorsque vous exécutez les applications en tant que développeur). A l'exécution le JavaScript utilisé dans cette session RAMP a été généré à partir d'un fichier XML file enregistré le ";
      arraystrText[250] = " (Le JavaScript contrôle les sessions RAMP lorsque vous exécutez les applications en tant qu'utilisateur). Ce message signifie que le JavaScript d'exécution de la session est peut être trop ancien et devrait être régénéré à partir du dernier XML.";      

/* Following MTXTs are used for the User Details */

      arraystrText[251] = "Libellé";      
      arraystrText[252] = "Enregistrer";      
      arraystrText[253] = "Groupe auquel appartient l'utilisateur";
      arraystrText[254] = "Cliquer OK pour supprimer le profil utilisateur sélectionné";
      arraystrText[255] = "Profil utilisateur";
      arraystrText[256] = "Nouveau mot de passe";
      arraystrText[257] = "Répertoire temporaire sur le PC";
      arraystrText[258] = "Adresse e-mail";
      arraystrText[259] = "Délai d'inactivité de connexion"; 
      arraystrText[260] = "Confirmer le nouveau mot de passe";
      arraystrText[261] = "(minutes)";
      arraystrText[262] = "Paramétrages";
      arraystrText[263] = "Délai d'inactivité de déconnexion";
      arraystrText[264] = "Utilisateur administrateur";
      arraystrText[265] = "Utilisateur désactivé";
      arraystrText[266] = "Utilisateur newlook";
      arraystrText[267] = "Mot de passe newlook(optionnel, peu utilisé)";
      arraystrText[268] = "N'utiliser que si les infos utilisateur des session newlook doivent être différents";
      arraystrText[269] = "Groupes auxquels appartient l'utilisateur";
      arraystrText[270] = "Identifiant interne";
      arraystrText[271] = "Les deux mots de passe saisis sont différents";
      arraystrText[272] = "Il n'y a actuellement aucun groupe défini";
      arraystrText[273] = "Tout sélectionner";
      arraystrText[274] = "Tout désélectionner";
      arraystrText[275] = "Ce groupe ne peut pas être supprimé car il est utilisé par un ou plusieurs utilisateurs";      
      arraystrText[276] = "Erreur de longueur du profil utilisateur";      
      arraystrText[277] = "Vous devez préciser à nouveau un mot de passe";
      arraystrText[278] = "Attention : le mot de passe devra être ressaisi";            
      arraystrText[279] = "Propriétés utilisateur pour ";  
      arraystrText[280] = " (Aucun libellé d'instance précisé)";  
      arraystrText[281] = "Valeur numérique incorrecte saisie";  
      arraystrText[282] = "Cliquer pour (dé)sélectionner";        
      arraystrText[283] = "Il n'existe aucune propriété personnalisée";        
      arraystrText[284] = "Enregistrer et fermer";      
      arraystrText[285] = "Enregistrer et créer un autre";      
            
/* END MTXTs for User Details */

      arraystrText[286] = "Une erreur a été détectée dans une réponse de votre serveur web.\r\rVoulez-vous afficher les informations détaillées d'analyse du problème avant que votre application ne soit fermé ?";      
      arraystrText[287] = "Une erreur d'allocation de session sur le serveur a été rencontrée. La cause la plus probable de ce type de problème est que le serveur n'est pas actuellement disponible, ou, qu'un problème de configuration du serveur empêche d'allouer une session actuellement.";      
      arraystrText[288] = "Une erreur interne a été détectée lors de l'échange d'information avec le serveur. La cause la plus probable de ce type de problème est que le serveur devenu indisponible, ou, qu'un programme ne s'est pas exécuté correctement sur le serveur.";      

      arraystrText[289] = "Enregistrer le mot de passe";

      arraystrText[290] = "Heure locale";
      arraystrText[291] = "Heure GMT";
      arraystrText[292] = "Applications";
      arraystrText[293] = "Recherche <BUSOBJ>";
      arraystrText[294] = "Le système est actuellement occupé … traiter votre demande, réessayez plus tard";
      arraystrText[295] = "Chargement en cours ...";
      arraystrText[296] = "Il y a plus de messages … visualiser - cliquer le bouton 'Messages' pour visualiser tous les messages";
      arraystrText[297] = "Réinitialiser les paramètres utilisateur aux valeurs par défaut";
      arraystrText[298] = "Quand vous  démarrerez … nouveau, l'application les paramètres utilisateur seront réinitialisés aux valeurs par défaut";
      
      arraystrText[299] = "Une erreur a été détectée dans la réponse faite par votre serveur web.";
      arraystrText[300] = "Afficher le détail";
      arraystrText[301] = "Le système a rencontré une erreur fatale et doit être fermé. Vous pouvez afficher le détail de l'erreur avant de fermer cette fenêtre.";

      arraystrText[302] = "Recherche rapide ...";
      arraystrText[303] = "Entrer le chaîne de recherche";
      arraystrText[304] = "Utilisé récemment";
      arraystrText[305] = "Résultat de recherche";     
      arraystrText[306] = "Vider la liste";
      arraystrText[307] = "Modifier le panneau de navigation pour afficher en liste";
      arraystrText[308] = "Modifier le panneau de navigation pour afficher en arborescence";

      arraystrText[309] = "Créer le package des modèles partagés";
      arraystrText[310] = "Tout sélectionner";
      arraystrText[311] = "Tout désélectionner";
      arraystrText[312] = "Nom du package :";
      arraystrText[313] = "Dossier de sortie :";
      arraystrText[314] = "Créer le package";
      arraystrText[315] = "Annuler";
      arraystrText[316] = "Il n'y a pas d'entrées dans la liste";
      arraystrText[317] = "Le package a été correctement généré.\nEnvoyer le package vers :\n";
      arraystrText[318] = "Erreur pendant la création de la fenêtre enfant à partir de ";
      arraystrText[319] = ". Votre bloqueur de fenêtres doit peut-être désactivé pour ce site, ou, définissez ce serveur web comme site de confiance. Cette erreur ne vous empêchera pas de travailler. Cliquez OK pour continuer.";
      arraystrText[320] = "Modifier le mot de passe IBM i";
      arraystrText[321] = "Ancien mot de passe"; 
      arraystrText[322] = "Modifier"; 
      arraystrText[323] = "Mot de passe IBM i modifié"; 
      arraystrText[324] = "Erreur de modification du mot de passe IBM i"; 
      arraystrText[325] = "Exécution achevée avec succès. Une erreur fatale s’est produite dans l’appel de la fonction de rappel signifiant le bon achèvement. Erreur : "; 
      arraystrText[326] = "Exécution achevée en erreur. De plus, une erreur fatale s’est produite lors de l’appel de la fonction de rappel signalant les erreurs. Erreur : "; 
      arraystrText[327] = "Exécution achevée en erreur mais aucune fonction de rappel n’a été fournie. "; 
      arraystrText[328] = " terminée en erreur: "; 
      arraystrText[329] = "Exécution achevée avec succès mais aucune fonction rappel n’a été fournie.";

      
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
//# return "fr-FR";
//#endif    
}
