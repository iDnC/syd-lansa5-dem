// -----------------------
// -- Web Page: LN1MAIN --
// -----------------------
LANSA.addComponent(
{
   id: "LN1MAIN", 
   nm: "LN1Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Left Navigation", 
   tl: 14020000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn1) DisplayPosition(1) Parent(#LayoutMain) Units(Content) Width(220)
         //
         var LAYOUTMAINCOLUMN1 = this.createReference( "LAYOUTMAINCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn2) DisplayPosition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINCOLUMN2 = this.createReference( "LAYOUTMAINCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) DisplayPosition(1) Parent(#LayoutMain) Height(56) Units(Pixels)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) DisplayPosition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#AppBar) Parent(#LayoutMain) Row(#LayoutMainRow1) ColumnSpan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToHeight)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn2) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow2)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWER = this.createReference( "LAYOUTAPPDRAWER", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppDrawerColumn1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERCOLUMN1 = this.createReference( "LAYOUTAPPDRAWERCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppDrawerRow1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERROW1 = this.createReference( "LAYOUTAPPDRAWERROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem1) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton1) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM1 = this.createReference( "LAYOUTAPPDRAWERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem2) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton2) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM2 = this.createReference( "LAYOUTAPPDRAWERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem3) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton3) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM3 = this.createReference( "LAYOUTAPPDRAWERITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem4) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton4) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM4 = this.createReference( "LAYOUTAPPDRAWERITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem5) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#NavButton5) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM5 = this.createReference( "LAYOUTAPPDRAWERITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#AppBar) DisplayPosition(1) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Width(1200) ThemeDrawStyle('Heading1') CaptionMarginLeft(15) Caption('TITLE') CaptionMarginBottom(0) CaptionMarginRight(0) CaptionMarginTop(0) Icon("menu")
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) DisplayPosition(2) Parent(#COM_OWNER) TabPosition(2) TabStop(False) Top(56) Height(744) LayoutManager(#LayoutAppDrawer) ThemeDrawStyle('MediumTitle') Width(220)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) DisplayPosition(3) Left(220) Parent(#COM_OWNER) TabPosition(3) TabStop(False) Top(56) Height(744) Width(980)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton1) Caption('View 1') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(1) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(1) TabStop(False) Top(0) Width(219) Manage(#View1) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON1 = this.createReference( "NAVBUTTON1", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton2) Caption('View 2') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(2) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(5) TabStop(False) Top(48) Width(219) Manage(#View2) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON2 = this.createReference( "NAVBUTTON2", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton3) Caption('View 3') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(3) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(4) TabStop(False) Top(96) Width(219) Manage(#View3) Height(48) Icon('view_quilt')
         //
         var NAVBUTTON3 = this.createReference( "NAVBUTTON3", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#LN1VIEW1) Name(#View1) Height(744) Left(326) Parent(#ViewContainer) TabStop(False) Width(980) DisplayPosition(5)
         //
         var VIEW1 = this.createReference( "VIEW1", "LN1VIEW1" );

         //
         // DEFINE_COM Class(#LN1VIEW2) Name(#View2) DisplayPosition(6) Height(744) Left(652) Parent(#ViewContainer) TabPosition(2) TabStop(False) Width(980)
         //
         var VIEW2 = this.createReference( "VIEW2", "LN1VIEW2" );

         //
         // DEFINE_COM Class(#LN1VIEW3) Name(#View3) Height(744) Parent(#ViewContainer) TabPosition(3) TabStop(False) Top(244) Width(980) DisplayPosition(7)
         //
         var VIEW3 = this.createReference( "VIEW3", "LN1VIEW3" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton4) Caption('Help') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(4) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(3) TabStop(False) Top(144) Width(219) Height(48) Icon('help_outline') ThemeDrawStyle('TopDivider')
         //
         var NAVBUTTON4 = this.createReference( "NAVBUTTON4", "PRIM_MD", "NavButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.NavButton) Name(#NavButton5) Caption('Settings') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(5) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(2) TabStop(False) Top(192) Width(219) Height(48) Icon('settings')
         //
         var NAVBUTTON5 = this.createReference( "NAVBUTTON5", "PRIM_MD", "NavButton" );

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN1 --
         // -----------------------------------
         LAYOUTMAINCOLUMN1.setDisplayPosition( 1 );
         LAYOUTMAINCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN1.setUnits( "CONTENT" );
         LAYOUTMAINCOLUMN1.setWidth( 220 );
         LAYOUTMAINCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN2 --
         // -----------------------------------
         LAYOUTMAINCOLUMN2.setDisplayPosition( 2 );
         LAYOUTMAINCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setHeight( 56 );
         LAYOUTMAINROW1.setUnits( "PIXELS" );
         LAYOUTMAINROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW2 --
         // --------------------------------
         LAYOUTMAINROW2.setDisplayPosition( 2 );
         LAYOUTMAINROW2.setParent( LAYOUTMAIN );
         LAYOUTMAINROW2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM1 --
         // ---------------------------------
         LAYOUTMAINITEM1.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM1.setManage( APPBAR );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM1.setColumnSpan( 2 );
         LAYOUTMAINITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM2 --
         // ---------------------------------
         LAYOUTMAINITEM2.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM2.setManage( APPDRAWER );
         LAYOUTMAINITEM2.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM2.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM2.setSizing( "FITTOHEIGHT" );
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM3.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTAPPDRAWER --
         // ---------------------------------
         LAYOUTAPPDRAWER.initialize();

         // ----------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERCOLUMN1 --
         // ----------------------------------------
         LAYOUTAPPDRAWERCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERCOLUMN1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERCOLUMN1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERROW1 --
         // -------------------------------------
         LAYOUTAPPDRAWERROW1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERROW1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERROW1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM1 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM1.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM1.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM1.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM1.setManage( NAVBUTTON1 );
         LAYOUTAPPDRAWERITEM1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM1.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM2 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM2.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM2.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM2.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM2.setManage( NAVBUTTON2 );
         LAYOUTAPPDRAWERITEM2.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM2.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM2.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM3 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM3.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM3.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM3.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM3.setManage( NAVBUTTON3 );
         LAYOUTAPPDRAWERITEM3.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM3.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM3.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM4 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM4.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM4.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM4.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM4.setManage( NAVBUTTON4 );
         LAYOUTAPPDRAWERITEM4.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM4.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM4.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM5 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM5.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM5.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM5.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM5.setManage( NAVBUTTON5 );
         LAYOUTAPPDRAWERITEM5.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM5.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM5.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 1 );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setTabStop( false );
         APPBAR.setWidth( 1200 );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaptionMarginLeft( 15 );
         APPBAR.setCaption( "TITLE" );
         APPBAR.setCaptionMarginBottom( 0 );
         APPBAR.setCaptionMarginRight( 0 );
         APPBAR.setCaptionMarginTop( 0 );
         APPBAR.setIcon( "menu" );
         APPBAR.initialize();

         // ---------------------------
         // -- Initialize #APPDRAWER --
         // ---------------------------
         APPDRAWER.setDisplayPosition( 2 );
         APPDRAWER.setParent( this );
         APPDRAWER.setTabPosition( 2 );
         APPDRAWER.setTabStop( false );
         APPDRAWER.setTop( 56 );
         APPDRAWER.setHeight( 744 );
         APPDRAWER.setLayoutManager( LAYOUTAPPDRAWER );
         APPDRAWER.setThemeDrawStyle( "MediumTitle" );
         APPDRAWER.setWidth( 220 );
         APPDRAWER.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 3 );
         VIEWCONTAINER.setLeft( 220 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 3 );
         VIEWCONTAINER.setTabStop( false );
         VIEWCONTAINER.setTop( 56 );
         VIEWCONTAINER.setHeight( 744 );
         VIEWCONTAINER.setWidth( 980 );
         VIEWCONTAINER.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON1 --
         // ----------------------------
         NAVBUTTON1.setCaption( "View 1" );
         NAVBUTTON1.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON1.setCaptionMarginLeft( 16 );
         NAVBUTTON1.setDisplayPosition( 1 );
         NAVBUTTON1.setIconMarginLeft( 16 );
         NAVBUTTON1.setLeft( 0 );
         NAVBUTTON1.setParent( APPDRAWER );
         NAVBUTTON1.setTabPosition( 1 );
         NAVBUTTON1.setTabStop( false );
         NAVBUTTON1.setTop( 0 );
         NAVBUTTON1.setWidth( 219 );
         NAVBUTTON1.setManage( VIEW1 );
         NAVBUTTON1.setHeight( 48 );
         NAVBUTTON1.setIcon( "view_quilt" );
         NAVBUTTON1.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON2 --
         // ----------------------------
         NAVBUTTON2.setCaption( "View 2" );
         NAVBUTTON2.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON2.setCaptionMarginLeft( 16 );
         NAVBUTTON2.setDisplayPosition( 2 );
         NAVBUTTON2.setIconMarginLeft( 16 );
         NAVBUTTON2.setLeft( 0 );
         NAVBUTTON2.setParent( APPDRAWER );
         NAVBUTTON2.setTabPosition( 5 );
         NAVBUTTON2.setTabStop( false );
         NAVBUTTON2.setTop( 48 );
         NAVBUTTON2.setWidth( 219 );
         NAVBUTTON2.setManage( VIEW2 );
         NAVBUTTON2.setHeight( 48 );
         NAVBUTTON2.setIcon( "view_quilt" );
         NAVBUTTON2.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON3 --
         // ----------------------------
         NAVBUTTON3.setCaption( "View 3" );
         NAVBUTTON3.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON3.setCaptionMarginLeft( 16 );
         NAVBUTTON3.setDisplayPosition( 3 );
         NAVBUTTON3.setIconMarginLeft( 16 );
         NAVBUTTON3.setLeft( 0 );
         NAVBUTTON3.setParent( APPDRAWER );
         NAVBUTTON3.setTabPosition( 4 );
         NAVBUTTON3.setTabStop( false );
         NAVBUTTON3.setTop( 96 );
         NAVBUTTON3.setWidth( 219 );
         NAVBUTTON3.setManage( VIEW3 );
         NAVBUTTON3.setHeight( 48 );
         NAVBUTTON3.setIcon( "view_quilt" );
         NAVBUTTON3.initialize();

         // -----------------------
         // -- Initialize #VIEW1 --
         // -----------------------
         VIEW1.setHeight( 744 );
         VIEW1.setLeft( 326 );
         VIEW1.setParent( VIEWCONTAINER );
         VIEW1.setTabStop( false );
         VIEW1.setWidth( 980 );
         VIEW1.setDisplayPosition( 5 );
         VIEW1.initialize();

         // -----------------------
         // -- Initialize #VIEW2 --
         // -----------------------
         VIEW2.setDisplayPosition( 6 );
         VIEW2.setHeight( 744 );
         VIEW2.setLeft( 652 );
         VIEW2.setParent( VIEWCONTAINER );
         VIEW2.setTabPosition( 2 );
         VIEW2.setTabStop( false );
         VIEW2.setWidth( 980 );
         VIEW2.initialize();

         // -----------------------
         // -- Initialize #VIEW3 --
         // -----------------------
         VIEW3.setHeight( 744 );
         VIEW3.setParent( VIEWCONTAINER );
         VIEW3.setTabPosition( 3 );
         VIEW3.setTabStop( false );
         VIEW3.setTop( 244 );
         VIEW3.setWidth( 980 );
         VIEW3.setDisplayPosition( 7 );
         VIEW3.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON4 --
         // ----------------------------
         NAVBUTTON4.setCaption( "Help" );
         NAVBUTTON4.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON4.setCaptionMarginLeft( 16 );
         NAVBUTTON4.setDisplayPosition( 4 );
         NAVBUTTON4.setIconMarginLeft( 16 );
         NAVBUTTON4.setLeft( 0 );
         NAVBUTTON4.setParent( APPDRAWER );
         NAVBUTTON4.setTabPosition( 3 );
         NAVBUTTON4.setTabStop( false );
         NAVBUTTON4.setTop( 144 );
         NAVBUTTON4.setWidth( 219 );
         NAVBUTTON4.setHeight( 48 );
         NAVBUTTON4.setIcon( "help_outline" );
         NAVBUTTON4.setThemeDrawStyle( "TopDivider" );
         NAVBUTTON4.initialize();

         // ----------------------------
         // -- Initialize #NAVBUTTON5 --
         // ----------------------------
         NAVBUTTON5.setCaption( "Settings" );
         NAVBUTTON5.setCaptionAlignment( "CENTERLEFT" );
         NAVBUTTON5.setCaptionMarginLeft( 16 );
         NAVBUTTON5.setDisplayPosition( 5 );
         NAVBUTTON5.setIconMarginLeft( 16 );
         NAVBUTTON5.setLeft( 0 );
         NAVBUTTON5.setParent( APPDRAWER );
         NAVBUTTON5.setTabPosition( 2 );
         NAVBUTTON5.setTabStop( false );
         NAVBUTTON5.setTop( 192 );
         NAVBUTTON5.setWidth( 219 );
         NAVBUTTON5.setHeight( 48 );
         NAVBUTTON5.setIcon( "settings" );
         NAVBUTTON5.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine2 );

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNBLUE" ) );
         this.setLayoutManager( LAYOUTMAIN );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #AppBar.IconClick
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AppBar.IconClick", 45 );

      //
      // EVTROUTINE Handling(#AppBar.IconClick)
      //
      rtn.Line( 45 );
      {

         //
         // #AppDrawer.ToggleDrawer
         //
         rtn.Line( 47 );
         ref.APPDRAWER.mthTOGGLEDRAWER();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 49 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Sys_Web.DeviceChanged
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sys_Web.DeviceChanged", 51 );

      //
      // EVTROUTINE Handling(#Sys_Web.DeviceChanged)
      //
      rtn.Line( 51 );
      {

         //
         // IF (#Sys_Web.Device = Mobile)
         //
         rtn.Line( 53 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 55 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AppDrawer.DrawerStyle := Permanent
            //
            rtn.Line( 59 );
            ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 63 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "LN1VIEW1", "LN1VIEW2", "LN1VIEW3" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.AppBar", "PRIM_MD.AppDrawer", "PRIM_MD.ViewContainer", "PRIM_MD.NavButton" ]
});

//# sourceURL=ln1main.js
