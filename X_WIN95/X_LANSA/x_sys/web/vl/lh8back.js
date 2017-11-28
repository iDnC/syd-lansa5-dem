// ----------------------------
// -- Reusable Part: LH8BACK --
// ----------------------------
LANSA.addComponent(
{
   id: "LH8BACK", 
   nm: "LH8BackgroundPanel", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Background Panel", 
   tl: 14020000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "lh8img01.jpg" );

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
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) DisplayPosition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) DisplayPosition(1) Parent(#Layout1) Height(640) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) DisplayPosition(2) Parent(#Layout1) Height(2000) Units(Pixels)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Image1) Parent(#Layout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Manage(#Panel1) Parent(#Layout1) Row(#Row2)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image1) DisplayPosition(1) Height(640) Image(#LH8BackgroundImage) Left(0) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Top(0) Width(828) ImageAlignment(BottomCenter) ImageSizing(Cropped)
         //
         var IMAGE1 = this.createReference( "IMAGE1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) DisplayPosition(2) Left(0) Parent(#COM_OWNER) TabPosition(2) TabStop(False) Top(640) Height(2000) Width(828)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

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
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( LAYOUT1 );
         ROW1.setHeight( 640 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( LAYOUT1 );
         ROW2.setHeight( 2000 );
         ROW2.setUnits( "PIXELS" );
         ROW2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( IMAGE1 );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( PANEL1 );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.initialize();

         // ------------------------
         // -- Initialize #IMAGE1 --
         // ------------------------
         IMAGE1.setDisplayPosition( 1 );
         IMAGE1.setHeight( 640 );
         IMAGE1.setImage( resource1 );
         IMAGE1.setLeft( 0 );
         IMAGE1.setParent( this );
         IMAGE1.setTabPosition( 1 );
         IMAGE1.setTabStop( false );
         IMAGE1.setTop( 0 );
         IMAGE1.setWidth( 828 );
         IMAGE1.setImageAlignment( "BOTTOMCENTER" );
         IMAGE1.setImageSizing( "CROPPED" );
         IMAGE1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 2 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 2 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 640 );
         PANEL1.setHeight( 2000 );
         PANEL1.setWidth( 828 );
         PANEL1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 3000 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 828 );
         this.setLayoutManager( LAYOUT1 );
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
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowMobile", 13 );

      //
      // MTHROUTINE Name(ShowMobile)
      //
      rtn.Line( 13 );
      {

         //
         // #Row1.Height := 300 + 140
         //
         rtn.Line( 15 );
         ref.ROW1.setHeight( Lansa.add( 300, 140 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 17 );
      rtn.end();
   };

   //
   // mthSHOWTABLET - ShowTablet
   //
   COM_OWNER.mthSHOWTABLET = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowTablet", 19 );

      //
      // MTHROUTINE Name(ShowTablet)
      //
      rtn.Line( 19 );
      {

         //
         // #Row1.Height := 450 + 140
         //
         rtn.Line( 21 );
         ref.ROW1.setHeight( Lansa.add( 450, 140 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 23 );
      rtn.end();
   };

   //
   // mthSHOWDESKTOP - ShowDesktop
   //
   COM_OWNER.mthSHOWDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowDesktop", 25 );

      //
      // MTHROUTINE Name(ShowDesktop)
      //
      rtn.Line( 25 );
      {

         //
         // #Row1.Height := 500 + 140
         //
         rtn.Line( 27 );
         ref.ROW1.setHeight( Lansa.add( 500, 140 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 29 );
      rtn.end();
   };

   //
   // mthSHOWLARGEDESKTOP - ShowLargeDesktop
   //
   COM_OWNER.mthSHOWLARGEDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowLargeDesktop", 31 );

      //
      // MTHROUTINE Name(ShowLargeDesktop)
      //
      rtn.Line( 31 );
      {

         //
         // #Row1.Height := 550 + 140
         //
         rtn.Line( 33 );
         ref.ROW1.setHeight( Lansa.add( 550, 140 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_IMAG" ]
});

//# sourceURL=lh8back.js
