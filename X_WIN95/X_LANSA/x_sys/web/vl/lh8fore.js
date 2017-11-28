// ----------------------------
// -- Reusable Part: LH8FORE --
// ----------------------------
LANSA.addComponent(
{
   id: "LH8FORE", 
   nm: "LH8ForegroundPanel", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Foreground Panel", 
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
      an: "PRIM_PANL", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ShowMobile: 
         {
         },

         ShowTablet: 
         {
         },

         ShowDesktop: 
         {
         },

         ShowLargeDesktop: 
         {
         }
      },

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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) BackgroundBrush(#Brush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(250:250:250)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) FontSize(26) FontUnits(Pixel)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style5) ForegroundBrush(#Brush3)
         //
         var STYLE5 = this.createReference( "STYLE5", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush3) Color(Theme50)
         //
         var BRUSH3 = this.createReference( "BRUSH3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) DisplayPosition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) DisplayPosition(2) Parent(#Layout1) Units(Pixels) Height(100)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#RowImage) DisplayPosition(3) Parent(#Layout1) Height(400) Units(Pixels)
         //
         var ROWIMAGE = this.createReference( "ROWIMAGE", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) DisplayPosition(5) Parent(#Layout1) Units(Content) Height(50)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) DisplayPosition(1) Parent(#Layout1) Height(40) Units(Pixels)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) DisplayPosition(4) Parent(#Layout1) Units(Pixels) Height(120)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) DisplayPosition(7) Parent(#Layout1) Height(30) Units(Pixels)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) DisplayPosition(6) Parent(#Layout1) Height(60) Units(Pixels)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Panel1) Parent(#Layout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column1) Manage(#Panel3) Parent(#Layout1) Row(#Row4)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Manage(#Destinations) Parent(#Layout1) Row(#Row3) Sizing(ContentHeightFitToWidth) Alignment(TopCenter)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Column(#Column1) Manage(#Panel2) Parent(#Layout1) Row(#Row5)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem13) Column(#Column1) Manage(#Panel4) Parent(#Layout1) Row(#Row6)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem15) Column(#Column1) Manage(#Panel5) Parent(#Layout1) Row(#Row7)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout2)
         //
         var LAYOUT2 = this.createReference( "LAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow1) DisplayPosition(1) Parent(#Layout2)
         //
         var LAYOUTROW1 = this.createReference( "LAYOUTROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn1) DisplayPosition(1) Parent(#Layout2)
         //
         var LAYOUTCOLUMN1 = this.createReference( "LAYOUTCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(CenterLeft) Column(#LayoutColumn1) Manage(#Icon) Parent(#Layout2) Row(#LayoutRow1) Sizing(FitToWidth) Flow(Right)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout3)
         //
         var LAYOUT3 = this.createReference( "LAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow2) DisplayPosition(1) Parent(#Layout3)
         //
         var LAYOUTROW2 = this.createReference( "LAYOUTROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn2) DisplayPosition(1) Parent(#Layout3)
         //
         var LAYOUTCOLUMN2 = this.createReference( "LAYOUTCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(CenterLeft) Column(#LayoutColumn2) Manage(#Icon1) Parent(#Layout3) Row(#LayoutRow2) Sizing(None) Flow(Right)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout4)
         //
         var LAYOUT4 = this.createReference( "LAYOUT4", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow3) DisplayPosition(1) Parent(#Layout4)
         //
         var LAYOUTROW3 = this.createReference( "LAYOUTROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn3) DisplayPosition(1) Parent(#Layout4)
         //
         var LAYOUTCOLUMN3 = this.createReference( "LAYOUTCOLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Alignment(BottomLeft) Column(#LayoutColumn3) Manage(#Label4) Parent(#Layout4) Row(#LayoutRow3) Sizing(ContentWidthAndHeight) MarginBottom(20) MarginLeft(60)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout5)
         //
         var LAYOUT5 = this.createReference( "LAYOUT5", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow4) DisplayPosition(1) Parent(#Layout5)
         //
         var LAYOUTROW4 = this.createReference( "LAYOUTROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn4) DisplayPosition(1) Parent(#Layout5)
         //
         var LAYOUTCOLUMN4 = this.createReference( "LAYOUTCOLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem14) Column(#LayoutColumn4) Manage(#Label5) Parent(#Layout5) Row(#LayoutRow4) Sizing(ContentWidthAndHeight)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) DisplayPosition(1) Left(0) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Top(40) Height(100) Width(636) ThemeDrawStyle('MediumTitle') LayoutManager(#Layout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel3) DisplayPosition(2) Left(0) Parent(#COM_OWNER) TabPosition(2) TabStop(False) Top(0) Height(40) Width(636) ThemeDrawStyle('DarkTitle') LayoutManager(#Layout3)
         //
         var PANEL3 = this.createReference( "PANEL3", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#Icon) DisplayPosition(1) Icon('flight_takeoff') Left(0) Parent(#Panel1) TabPosition(1) TabStop(False) Top(20) IconHeight(0) Height(60) Width(636) Caption('Holidays') ThemeDrawStyle('Title') IconOpacity(90) IconAlignment(CenterLeft) IconMarginLeft(24) CaptionAlignment(CenterLeft) CaptionMarginLeft(24) CaptionMarginRight(0) CaptionMarginBottom(0) CaptionMarginTop(0)
         //
         var ICON = this.createReference( "ICON", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#Icon1) DisplayPosition(1) Icon('mail') IconOpacity(80) Parent(#Panel3) TabPosition(1) TabStop(False) Top(2) IconHeight(22) Caption('info@holidays.com') Width(223) Left(0) IconAlignment(CenterLeft) IconMarginLeft(24) IconMarginTop(0) IconMarginRight(0) IconMarginBottom(0) CaptionAlignment(CenterLeft) CaptionMarginLeft(10)
         //
         var ICON1 = this.createReference( "ICON1", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#LH8Destinations) Name(#Destinations) DisplayPosition(4) Parent(#COM_OWNER) TabPosition(3) TabStop(False) Top(660) Height(50) Width(636) Style(#Style1)
         //
         var DESTINATIONS = this.createReference( "DESTINATIONS", "LH8DSTLST" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel2) DisplayPosition(3) Left(0) Parent(#COM_OWNER) TabPosition(4) TabStop(False) Top(540) Height(120) Width(636) Style(#Style1) LayoutManager(#Layout4)
         //
         var PANEL2 = this.createReference( "PANEL2", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('Popular Destinations') DisplayPosition(1) Ellipses(Word) Height(33) Parent(#Panel2) TabPosition(1) TabStop(False) Top(67) VerticalAlignment(Center) Width(242) Style(#Style4) Opacity(90) Left(60)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel4) DisplayPosition(5) Left(0) Parent(#COM_OWNER) TabPosition(5) TabStop(False) Top(770) Width(636) ThemeDrawStyle('MediumTitle') LayoutManager(#Layout5) Height(30)
         //
         var PANEL4 = this.createReference( "PANEL4", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label5) Caption('Powered by LANSA') DisplayPosition(1) Ellipses(Word) Height(18) Left(257) Parent(#Panel4) TabPosition(1) TabStop(False) Top(6) VerticalAlignment(Center) Width(122) Style(#Style5)
         //
         var LABEL5 = this.createReference( "LABEL5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel5) DisplayPosition(6) Left(0) Parent(#COM_OWNER) TabPosition(6) TabStop(False) Top(710) Height(60) Width(636) Style(#Style1)
         //
         var PANEL5 = this.createReference( "PANEL5", "PRIM_PANL" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBackgroundBrush( BRUSH1 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "250:250:250" );
         BRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setFontSize( 26 );
         STYLE4.setFontUnits( "PIXEL" );
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #STYLE5 --
         // ------------------------
         STYLE5.setForegroundBrush( BRUSH3 );
         STYLE5.initialize();

         // ------------------------
         // -- Initialize #BRUSH3 --
         // ------------------------
         BRUSH3.setColor( "THEME50" );
         BRUSH3.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( LAYOUT1 );
         COLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 2 );
         ROW1.setParent( LAYOUT1 );
         ROW1.setUnits( "PIXELS" );
         ROW1.setHeight( 100 );
         ROW1.initialize();

         // --------------------------
         // -- Initialize #ROWIMAGE --
         // --------------------------
         ROWIMAGE.setDisplayPosition( 3 );
         ROWIMAGE.setParent( LAYOUT1 );
         ROWIMAGE.setHeight( 400 );
         ROWIMAGE.setUnits( "PIXELS" );
         ROWIMAGE.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 5 );
         ROW3.setParent( LAYOUT1 );
         ROW3.setUnits( "CONTENT" );
         ROW3.setHeight( 50 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 1 );
         ROW4.setParent( LAYOUT1 );
         ROW4.setHeight( 40 );
         ROW4.setUnits( "PIXELS" );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 4 );
         ROW5.setParent( LAYOUT1 );
         ROW5.setUnits( "PIXELS" );
         ROW5.setHeight( 120 );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 7 );
         ROW6.setParent( LAYOUT1 );
         ROW6.setHeight( 30 );
         ROW6.setUnits( "PIXELS" );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 6 );
         ROW7.setParent( LAYOUT1 );
         ROW7.setHeight( 60 );
         ROW7.setUnits( "PIXELS" );
         ROW7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( PANEL1 );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setManage( PANEL3 );
         LAYOUTITEM3.setParent( LAYOUT1 );
         LAYOUTITEM3.setRow( ROW4 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( DESTINATIONS );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( ROW3 );
         LAYOUTITEM2.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setColumn( COLUMN1 );
         LAYOUTITEM11.setManage( PANEL2 );
         LAYOUTITEM11.setParent( LAYOUT1 );
         LAYOUTITEM11.setRow( ROW5 );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setColumn( COLUMN1 );
         LAYOUTITEM13.setManage( PANEL4 );
         LAYOUTITEM13.setParent( LAYOUT1 );
         LAYOUTITEM13.setRow( ROW6 );
         LAYOUTITEM13.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setColumn( COLUMN1 );
         LAYOUTITEM15.setManage( PANEL5 );
         LAYOUTITEM15.setParent( LAYOUT1 );
         LAYOUTITEM15.setRow( ROW7 );
         LAYOUTITEM15.initialize();

         // -------------------------
         // -- Initialize #LAYOUT2 --
         // -------------------------
         LAYOUT2.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW1 --
         // ----------------------------
         LAYOUTROW1.setDisplayPosition( 1 );
         LAYOUTROW1.setParent( LAYOUT2 );
         LAYOUTROW1.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN1 --
         // -------------------------------
         LAYOUTCOLUMN1.setDisplayPosition( 1 );
         LAYOUTCOLUMN1.setParent( LAYOUT2 );
         LAYOUTCOLUMN1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "CENTERLEFT" );
         LAYOUTITEM7.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM7.setManage( ICON );
         LAYOUTITEM7.setParent( LAYOUT2 );
         LAYOUTITEM7.setRow( LAYOUTROW1 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.setFlow( "RIGHT" );
         LAYOUTITEM7.initialize();

         // -------------------------
         // -- Initialize #LAYOUT3 --
         // -------------------------
         LAYOUT3.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW2 --
         // ----------------------------
         LAYOUTROW2.setDisplayPosition( 1 );
         LAYOUTROW2.setParent( LAYOUT3 );
         LAYOUTROW2.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN2 --
         // -------------------------------
         LAYOUTCOLUMN2.setDisplayPosition( 1 );
         LAYOUTCOLUMN2.setParent( LAYOUT3 );
         LAYOUTCOLUMN2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "CENTERLEFT" );
         LAYOUTITEM8.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM8.setManage( ICON1 );
         LAYOUTITEM8.setParent( LAYOUT3 );
         LAYOUTITEM8.setRow( LAYOUTROW2 );
         LAYOUTITEM8.setSizing( "NONE" );
         LAYOUTITEM8.setFlow( "RIGHT" );
         LAYOUTITEM8.initialize();

         // -------------------------
         // -- Initialize #LAYOUT4 --
         // -------------------------
         LAYOUT4.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW3 --
         // ----------------------------
         LAYOUTROW3.setDisplayPosition( 1 );
         LAYOUTROW3.setParent( LAYOUT4 );
         LAYOUTROW3.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN3 --
         // -------------------------------
         LAYOUTCOLUMN3.setDisplayPosition( 1 );
         LAYOUTCOLUMN3.setParent( LAYOUT4 );
         LAYOUTCOLUMN3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setAlignment( "BOTTOMLEFT" );
         LAYOUTITEM12.setColumn( LAYOUTCOLUMN3 );
         LAYOUTITEM12.setManage( LABEL4 );
         LAYOUTITEM12.setParent( LAYOUT4 );
         LAYOUTITEM12.setRow( LAYOUTROW3 );
         LAYOUTITEM12.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM12.setMarginBottom( 20 );
         LAYOUTITEM12.setMarginLeft( 60 );
         LAYOUTITEM12.initialize();

         // -------------------------
         // -- Initialize #LAYOUT5 --
         // -------------------------
         LAYOUT5.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW4 --
         // ----------------------------
         LAYOUTROW4.setDisplayPosition( 1 );
         LAYOUTROW4.setParent( LAYOUT5 );
         LAYOUTROW4.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN4 --
         // -------------------------------
         LAYOUTCOLUMN4.setDisplayPosition( 1 );
         LAYOUTCOLUMN4.setParent( LAYOUT5 );
         LAYOUTCOLUMN4.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setColumn( LAYOUTCOLUMN4 );
         LAYOUTITEM14.setManage( LABEL5 );
         LAYOUTITEM14.setParent( LAYOUT5 );
         LAYOUTITEM14.setRow( LAYOUTROW4 );
         LAYOUTITEM14.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM14.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 40 );
         PANEL1.setHeight( 100 );
         PANEL1.setWidth( 636 );
         PANEL1.setThemeDrawStyle( "MediumTitle" );
         PANEL1.setLayoutManager( LAYOUT2 );
         PANEL1.initialize();

         // ------------------------
         // -- Initialize #PANEL3 --
         // ------------------------
         PANEL3.setDisplayPosition( 2 );
         PANEL3.setLeft( 0 );
         PANEL3.setParent( this );
         PANEL3.setTabPosition( 2 );
         PANEL3.setTabStop( false );
         PANEL3.setTop( 0 );
         PANEL3.setHeight( 40 );
         PANEL3.setWidth( 636 );
         PANEL3.setThemeDrawStyle( "DarkTitle" );
         PANEL3.setLayoutManager( LAYOUT3 );
         PANEL3.initialize();

         // ----------------------
         // -- Initialize #ICON --
         // ----------------------
         ICON.setDisplayPosition( 1 );
         ICON.setIcon( "flight_takeoff" );
         ICON.setLeft( 0 );
         ICON.setParent( PANEL1 );
         ICON.setTabPosition( 1 );
         ICON.setTabStop( false );
         ICON.setTop( 20 );
         ICON.setIconHeight( 0 );
         ICON.setHeight( 60 );
         ICON.setWidth( 636 );
         ICON.setCaption( "Holidays" );
         ICON.setThemeDrawStyle( "Title" );
         ICON.setIconOpacity( 90 );
         ICON.setIconAlignment( "CENTERLEFT" );
         ICON.setIconMarginLeft( 24 );
         ICON.setCaptionAlignment( "CENTERLEFT" );
         ICON.setCaptionMarginLeft( 24 );
         ICON.setCaptionMarginRight( 0 );
         ICON.setCaptionMarginBottom( 0 );
         ICON.setCaptionMarginTop( 0 );
         ICON.initialize();

         // -----------------------
         // -- Initialize #ICON1 --
         // -----------------------
         ICON1.setDisplayPosition( 1 );
         ICON1.setIcon( "mail" );
         ICON1.setIconOpacity( 80 );
         ICON1.setParent( PANEL3 );
         ICON1.setTabPosition( 1 );
         ICON1.setTabStop( false );
         ICON1.setTop( 2 );
         ICON1.setIconHeight( 22 );
         ICON1.setCaption( "info@holidays.com" );
         ICON1.setWidth( 223 );
         ICON1.setLeft( 0 );
         ICON1.setIconAlignment( "CENTERLEFT" );
         ICON1.setIconMarginLeft( 24 );
         ICON1.setIconMarginTop( 0 );
         ICON1.setIconMarginRight( 0 );
         ICON1.setIconMarginBottom( 0 );
         ICON1.setCaptionAlignment( "CENTERLEFT" );
         ICON1.setCaptionMarginLeft( 10 );
         ICON1.initialize();

         // ------------------------------
         // -- Initialize #DESTINATIONS --
         // ------------------------------
         DESTINATIONS.setDisplayPosition( 4 );
         DESTINATIONS.setParent( this );
         DESTINATIONS.setTabPosition( 3 );
         DESTINATIONS.setTabStop( false );
         DESTINATIONS.setTop( 660 );
         DESTINATIONS.setHeight( 50 );
         DESTINATIONS.setWidth( 636 );
         DESTINATIONS.setStyle( STYLE1 );
         DESTINATIONS.initialize();

         // ------------------------
         // -- Initialize #PANEL2 --
         // ------------------------
         PANEL2.setDisplayPosition( 3 );
         PANEL2.setLeft( 0 );
         PANEL2.setParent( this );
         PANEL2.setTabPosition( 4 );
         PANEL2.setTabStop( false );
         PANEL2.setTop( 540 );
         PANEL2.setHeight( 120 );
         PANEL2.setWidth( 636 );
         PANEL2.setStyle( STYLE1 );
         PANEL2.setLayoutManager( LAYOUT4 );
         PANEL2.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "Popular Destinations" );
         LABEL4.setDisplayPosition( 1 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 33 );
         LABEL4.setParent( PANEL2 );
         LABEL4.setTabPosition( 1 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 67 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 242 );
         LABEL4.setStyle( STYLE4 );
         LABEL4.setOpacity( 90 );
         LABEL4.setLeft( 60 );
         LABEL4.initialize();

         // ------------------------
         // -- Initialize #PANEL4 --
         // ------------------------
         PANEL4.setDisplayPosition( 5 );
         PANEL4.setLeft( 0 );
         PANEL4.setParent( this );
         PANEL4.setTabPosition( 5 );
         PANEL4.setTabStop( false );
         PANEL4.setTop( 770 );
         PANEL4.setWidth( 636 );
         PANEL4.setThemeDrawStyle( "MediumTitle" );
         PANEL4.setLayoutManager( LAYOUT5 );
         PANEL4.setHeight( 30 );
         PANEL4.initialize();

         // ------------------------
         // -- Initialize #LABEL5 --
         // ------------------------
         LABEL5.setCaption( "Powered by LANSA" );
         LABEL5.setDisplayPosition( 1 );
         LABEL5.setEllipses( "WORD" );
         LABEL5.setHeight( 18 );
         LABEL5.setLeft( 257 );
         LABEL5.setParent( PANEL4 );
         LABEL5.setTabPosition( 1 );
         LABEL5.setTabStop( false );
         LABEL5.setTop( 6 );
         LABEL5.setVerticalAlignment( "CENTER" );
         LABEL5.setWidth( 122 );
         LABEL5.setStyle( STYLE5 );
         LABEL5.initialize();

         // ------------------------
         // -- Initialize #PANEL5 --
         // ------------------------
         PANEL5.setDisplayPosition( 6 );
         PANEL5.setLeft( 0 );
         PANEL5.setParent( this );
         PANEL5.setTabPosition( 6 );
         PANEL5.setTabStop( false );
         PANEL5.setTop( 710 );
         PANEL5.setHeight( 60 );
         PANEL5.setWidth( 636 );
         PANEL5.setStyle( STYLE1 );
         PANEL5.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 1000 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 636 );
         this.setLayoutManager( LAYOUT1 );
         this.setVerticalScroll( true );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthSHOWMOBILE - ShowMobile
   //
   COM_OWNER.mthSHOWMOBILE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowMobile", 58 );

      //
      // MTHROUTINE Name(ShowMobile)
      //
      rtn.Line( 58 );
      {

         //
         // #RowImage.Height := 300
         //
         rtn.Line( 60 );
         ref.ROWIMAGE.setHeight( 300 );

         //
         // #Destinations.ShowMobile
         //
         rtn.Line( 62 );
         ref.DESTINATIONS.mthSHOWMOBILE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 64 );
      rtn.end();
   };

   //
   // mthSHOWTABLET - ShowTablet
   //
   COM_OWNER.mthSHOWTABLET = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowTablet", 66 );

      //
      // MTHROUTINE Name(ShowTablet)
      //
      rtn.Line( 66 );
      {

         //
         // #RowImage.Height := 450
         //
         rtn.Line( 68 );
         ref.ROWIMAGE.setHeight( 450 );

         //
         // #Destinations.ShowTablet
         //
         rtn.Line( 70 );
         ref.DESTINATIONS.mthSHOWTABLET();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 72 );
      rtn.end();
   };

   //
   // mthSHOWDESKTOP - ShowDesktop
   //
   COM_OWNER.mthSHOWDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowDesktop", 74 );

      //
      // MTHROUTINE Name(ShowDesktop)
      //
      rtn.Line( 74 );
      {

         //
         // #RowImage.Height := 500
         //
         rtn.Line( 76 );
         ref.ROWIMAGE.setHeight( 500 );

         //
         // #Destinations.ShowDesktop
         //
         rtn.Line( 78 );
         ref.DESTINATIONS.mthSHOWDESKTOP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 80 );
      rtn.end();
   };

   //
   // mthSHOWLARGEDESKTOP - ShowLargeDesktop
   //
   COM_OWNER.mthSHOWLARGEDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowLargeDesktop", 82 );

      //
      // MTHROUTINE Name(ShowLargeDesktop)
      //
      rtn.Line( 82 );
      {

         //
         // #RowImage.Height := 550
         //
         rtn.Line( 84 );
         ref.ROWIMAGE.setHeight( 550 );

         //
         // #Destinations.ShowLargeDesktop
         //
         rtn.Line( 86 );
         ref.DESTINATIONS.mthSHOWLARGEDESKTOP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 88 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "LH8DSTLST" ],
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.Label", "PRIM_LABL" ]
});

//# sourceURL=lh8fore.js
