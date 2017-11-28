// ------------------------------
// -- Reusable Part: LH2DSTITM --
// ------------------------------
LANSA.addComponent(
{
   id: "LH2DSTITM", 
   nm: "LH2DestinationItem", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Destination Item", 
   tl: 14020000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "ximagei_2.png" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XDESTID:
      {
         nm: "XDESTID",
         an: "xDestinationId",
         ft: "I",
         ln: 4,
         dc: 0,
         lb: "Identification",
         h1: "Identification",
         h2: " ",
         h3: " ",
         de: "Destination Identification",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XDESTNAME:
      {
         nm: "XDESTNAME",
         an: "xDestinationName",
         ft: "N",
         ln: 50,
         dc: 0,
         lb: "Name",
         h1: "Name",
         h2: " ",
         h3: " ",
         de: "Destination Name",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XDESTDESC:
      {
         nm: "XDESTDESC",
         an: "xDestinationDescription",
         ft: "N",
         ln: 256,
         dc: 0,
         lb: "Description",
         h1: "Description",
         h2: " ",
         h3: " ",
         de: "Destination Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XDESTIMG:
      {
         nm: "XDESTIMG",
         an: "xDestinationImage",
         ft: "BL",
         ln: 0,
         dc: 0,
         lb: "Image",
         h1: "Destination",
         h2: "Image",
         h3: " ",
         de: "Destination Image",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         DestinationImage: 
         {
            da: "na"
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

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "LH2DSTITM", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StylePanel) NormBackColor(245:245:245) CornerBottomLeft(0) CornerBottomRight(0) CornerTopLeft(0) CornerTopRight(0) BorderBottom(1) BorderLeft(1) BorderRight(1) BorderTop(1) BorderColor(Transparent) Cursor(Hand) Effect(#DropShadow1)
         //
         var STYLEPANEL = this.createReference( "STYLEPANEL", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.DropShadow) Name(#DropShadow1) ShadowDepth(2)
         //
         var DROPSHADOW1 = this.createReference( "DROPSHADOW1", "PRIM_VS", "DropShadow" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StylePanelMouse) BorderColor(Theme200)
         //
         var STYLEPANELMOUSE = this.createReference( "STYLEPANELMOUSE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleName) ForegroundBrush(#Brush2) FontSize(120) FontUnits(Percent)
         //
         var STYLENAME = this.createReference( "STYLENAME", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(97:97:97)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleDesc) ForegroundBrush(#Brush3)
         //
         var STYLEDESC = this.createReference( "STYLEDESC", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush3) Color(150:150:150)
         //
         var BRUSH3 = this.createReference( "BRUSH3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1) Sizing(ContentHeight) MarginBottom(25) MarginLeft(10) MarginRight(10) MarginTop(10)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) DisplayPosition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) DisplayPosition(1) Parent(#Layout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Flow(Down) Manage(#ImageControl) Parent(#Layout1) Row(#Row1) Sizing(ContentHeightFitToWidth) Alignment(TopCenter)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Flow(Down) Manage(#LabelTitle) Parent(#Layout1) Row(#Row1) Sizing(ContentHeightFitToWidth) Alignment(TopCenter) MarginTop(10) MarginLeft(5) MarginRight(5) MarginBottom(5)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column1) Flow(Down) Manage(#LabelDescription) Parent(#Layout1) Row(#Row1) Sizing(ContentHeightFitToWidth) Alignment(TopCenter) MarginLeft(5) MarginRight(5) MarginTop(5)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#ImageControl) DisplayPosition(1) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Height(291) Width(291) ImageSizing(BestFit) Image(#xImageImage256)
         //
         var IMAGECONTROL = this.createReference( "IMAGECONTROL", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LabelTitle) Caption('Title') DisplayPosition(2) Ellipses(Word) Height(19) Left(15) Parent(#COM_OWNER) TabPosition(2) TabStop(False) Top(311) VerticalAlignment(Center) Width(281) Style(#StyleName)
         //
         var LABELTITLE = this.createReference( "LABELTITLE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LabelDescription) Caption('Lorem ipsum dolor. Sit amet curabitur placerat amet lectus habitant amet purus convallis accumsan suspendisse rutrum accumsan adipiscing. Sit fugiat condimentum. Pulvinar pretium non. Dignissim taciti placerat. Mollis quam ullamcorper molestie urna at felis aenean amet. Conubia commodo porttitor quam nulla tellus. At pede ad. Vivamus cras voluptates nisl turpis.') DisplayPosition(3) Ellipses(Word) Height(129) Left(15) Parent(#COM_OWNER) TabPosition(3) TabStop(False) Top(340) VerticalAlignment(Center) Width(281) Style(#StyleDesc)
         //
         var LABELDESCRIPTION = this.createReference( "LABELDESCRIPTION", "PRIM_LABL" );

         // ----------------------------
         // -- Initialize #STYLEPANEL --
         // ----------------------------
         STYLEPANEL.setNormBackColor( "245:245:245" );
         STYLEPANEL.setCornerBottomLeft( 0 );
         STYLEPANEL.setCornerBottomRight( 0 );
         STYLEPANEL.setCornerTopLeft( 0 );
         STYLEPANEL.setCornerTopRight( 0 );
         STYLEPANEL.setBorderBottom( 1 );
         STYLEPANEL.setBorderLeft( 1 );
         STYLEPANEL.setBorderRight( 1 );
         STYLEPANEL.setBorderTop( 1 );
         STYLEPANEL.setBorderColor( "TRANSPARENT" );
         STYLEPANEL.setCursor( "HAND" );
         STYLEPANEL.setEffect( DROPSHADOW1 );
         STYLEPANEL.initialize();

         // -----------------------------
         // -- Initialize #DROPSHADOW1 --
         // -----------------------------
         DROPSHADOW1.setShadowDepth( 2 );
         DROPSHADOW1.initialize();

         // ---------------------------------
         // -- Initialize #STYLEPANELMOUSE --
         // ---------------------------------
         STYLEPANELMOUSE.setBorderColor( "THEME200" );
         STYLEPANELMOUSE.initialize();

         // ---------------------------
         // -- Initialize #STYLENAME --
         // ---------------------------
         STYLENAME.setForegroundBrush( BRUSH2 );
         STYLENAME.setFontSize( 120 );
         STYLENAME.setFontUnits( "PERCENT" );
         STYLENAME.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "97:97:97" );
         BRUSH2.initialize();

         // ---------------------------
         // -- Initialize #STYLEDESC --
         // ---------------------------
         STYLEDESC.setForegroundBrush( BRUSH3 );
         STYLEDESC.initialize();

         // ------------------------
         // -- Initialize #BRUSH3 --
         // ------------------------
         BRUSH3.setColor( "150:150:150" );
         BRUSH3.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.setSizing( "CONTENTHEIGHT" );
         LAYOUT1.setMarginBottom( 25 );
         LAYOUT1.setMarginLeft( 10 );
         LAYOUT1.setMarginRight( 10 );
         LAYOUT1.setMarginTop( 10 );
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
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( LAYOUT1 );
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( IMAGECONTROL );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( LABELTITLE );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.setMarginTop( 10 );
         LAYOUTITEM2.setMarginLeft( 5 );
         LAYOUTITEM2.setMarginRight( 5 );
         LAYOUTITEM2.setMarginBottom( 5 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( LABELDESCRIPTION );
         LAYOUTITEM3.setParent( LAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM3.setAlignment( "TOPCENTER" );
         LAYOUTITEM3.setMarginLeft( 5 );
         LAYOUTITEM3.setMarginRight( 5 );
         LAYOUTITEM3.setMarginTop( 5 );
         LAYOUTITEM3.initialize();

         // ------------------------------
         // -- Initialize #IMAGECONTROL --
         // ------------------------------
         IMAGECONTROL.setDisplayPosition( 1 );
         IMAGECONTROL.setParent( this );
         IMAGECONTROL.setTabPosition( 1 );
         IMAGECONTROL.setTabStop( false );
         IMAGECONTROL.setHeight( 291 );
         IMAGECONTROL.setWidth( 291 );
         IMAGECONTROL.setImageSizing( "BESTFIT" );
         IMAGECONTROL.setImage( resource1 );
         IMAGECONTROL.initialize();

         // ----------------------------
         // -- Initialize #LABELTITLE --
         // ----------------------------
         LABELTITLE.setCaption( "Title" );
         LABELTITLE.setDisplayPosition( 2 );
         LABELTITLE.setEllipses( "WORD" );
         LABELTITLE.setHeight( 19 );
         LABELTITLE.setLeft( 15 );
         LABELTITLE.setParent( this );
         LABELTITLE.setTabPosition( 2 );
         LABELTITLE.setTabStop( false );
         LABELTITLE.setTop( 311 );
         LABELTITLE.setVerticalAlignment( "CENTER" );
         LABELTITLE.setWidth( 281 );
         LABELTITLE.setStyle( STYLENAME );
         LABELTITLE.initialize();

         // ----------------------------------
         // -- Initialize #LABELDESCRIPTION --
         // ----------------------------------
         LABELDESCRIPTION.setCaption( "Lorem ipsum dolor. Sit amet curabitur placerat amet lectus habitant amet purus convallis accumsan suspendisse rutrum accumsan adipiscing. Sit fugiat condimentum. Pulvinar pretium non. Dignissim taciti placerat. Mollis quam ullamcorper molestie urna at felis aenean amet. Conubia commodo porttitor quam nulla tellus. At pede ad. Vivamus cras voluptates nisl turpis." );
         LABELDESCRIPTION.setDisplayPosition( 3 );
         LABELDESCRIPTION.setEllipses( "WORD" );
         LABELDESCRIPTION.setHeight( 129 );
         LABELDESCRIPTION.setLeft( 15 );
         LABELDESCRIPTION.setParent( this );
         LABELDESCRIPTION.setTabPosition( 3 );
         LABELDESCRIPTION.setTabStop( false );
         LABELDESCRIPTION.setTop( 340 );
         LABELDESCRIPTION.setVerticalAlignment( "CENTER" );
         LABELDESCRIPTION.setWidth( 281 );
         LABELDESCRIPTION.setStyle( STYLEDESC );
         LABELDESCRIPTION.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 496 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 313 );
         this.setStyle( STYLEPANEL );
         this.setMouseOverStyle( STYLEPANELMOUSE );
         this.setLayoutManager( LAYOUT1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "XDESTID": fld.XDESTID, "XDESTNAME": fld.XDESTNAME, "XDESTDESC": fld.XDESTDESC, "XDESTIMG": fld.XDESTIMG } );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthGETDESTINATIONIMAGE - GetDestinationImage
   //
   COM_OWNER.mthGETDESTINATIONIMAGE = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetDestinationImage", 30 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_BMP) Name(#Image) Pass(*BY_REFERENCE)
      //
      var IMAGE = rtn.createDynamicParameter( "IMAGE" );

      //
      // PTYROUTINE Name(GetDestinationImage)
      //
      rtn.Line( 30 );
      {

         //
         // #Image <= #ImageControl.Image
         //
         rtn.Line( 33 );
         IMAGE = rtn.setref( "IMAGE", ref.IMAGECONTROL.getImage() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      return rtn.retRef( IMAGE );
   };

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.LH2DSTITM, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 37 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 37 );
      {

         //
         // #LabelTitle := #xDestinationName
         //
         rtn.Line( 39 );
         ref.LABELTITLE.set( fld.XDESTNAME.get() );

         //
         // #LabelDescription := #xDestinationDescription
         //
         rtn.Line( 40 );
         ref.LABELDESCRIPTION.set( fld.XDESTDESC.get() );

         //
         // #ImageControl.Image <= #SYS_APPLN.CreateBitmap( #xDestinationImage )
         //
         rtn.Line( 41 );
         ref.IMAGECONTROL.setImage( Lansa.APPL().mthCREATEBITMAP( fld.XDESTIMG.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(DestinationImage) Get(GetDestinationImage)
   //
   COM_OWNER.getDESTINATIONIMAGE = function()
   {
      return this.mthGETDESTINATIONIMAGE();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.DropShadow", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_IMAG", "PRIM_LABL" ]
});

//# sourceURL=lh2dstitm.js
