// ------------------------------
// -- Reusable Part: LH2DSTLST --
// ------------------------------
LANSA.addComponent(
{
   id: "LH2DSTLST", 
   nm: "LH2Destinations", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Destinations", 
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
         },

         Load: 
         {
         },

         AssignColumns: 
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

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "LH2DSTLST", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleShroud) BackgroundBrush(#BrushShroud)
         //
         var STYLESHROUD = this.createReference( "STYLESHROUD", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#BrushShroud) Color(0:0:0) Opacity(80)
         //
         var BRUSHSHROUD = this.createReference( "BRUSHSHROUD", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StylePopup) BackgroundBrush(#BrushPopup) Effect(*NULL)
         //
         var STYLEPOPUP = this.createReference( "STYLEPOPUP", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#BrushPopup) Color(White)
         //
         var BRUSHPOPUP = this.createReference( "BRUSHPOPUP", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#PageLayout)
         //
         var PAGELAYOUT = this.createReference( "PAGELAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) DisplayPosition(2) Parent(#PageLayout)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) DisplayPosition(3) Parent(#PageLayout)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) DisplayPosition(4) Parent(#PageLayout)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) DisplayPosition(5) Parent(#PageLayout)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) DisplayPosition(6) Parent(#PageLayout)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) DisplayPosition(7) Parent(#PageLayout)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) DisplayPosition(8) Parent(#PageLayout)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) DisplayPosition(1) Parent(#PageLayout) Units(Pixels) Width(20)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) DisplayPosition(9) Parent(#PageLayout) Units(Pixels) Width(20)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) DisplayPosition(1) Parent(#PageLayout)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#PRIM_TBLO.Column>) Name(#DisplayColumns)
         //
         var DISPLAYCOLUMNS = this.createReference( "DISPLAYCOLUMNS", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_NMBR) Name(#MaxColumnsForDesign) Value(5)
         //
         var MAXCOLUMNSFORDESIGN = this.createReference( "MAXCOLUMNSFORDESIGN", "PRIM_NMBR" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#LH2DestinationItem>) Name(#DestinationItems)
         //
         var DESTINATIONITEMS = this.createReference( "DESTINATIONITEMS", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_DCOL<#PRIM_TBLO.Item #LH2DestinationItem>) Name(#LayoutItems)
         //
         var LAYOUTITEMS = this.createReference( "LAYOUTITEMS", "PRIM_DCOL" );

         // -----------------------------
         // -- Initialize #STYLESHROUD --
         // -----------------------------
         STYLESHROUD.setBackgroundBrush( BRUSHSHROUD );
         STYLESHROUD.initialize();

         // -----------------------------
         // -- Initialize #BRUSHSHROUD --
         // -----------------------------
         BRUSHSHROUD.setColor( "0:0:0" );
         BRUSHSHROUD.setOpacity( 80 );
         BRUSHSHROUD.initialize();

         // ----------------------------
         // -- Initialize #STYLEPOPUP --
         // ----------------------------
         STYLEPOPUP.setBackgroundBrush( BRUSHPOPUP );
         STYLEPOPUP.setEffect( null );
         STYLEPOPUP.initialize();

         // ----------------------------
         // -- Initialize #BRUSHPOPUP --
         // ----------------------------
         BRUSHPOPUP.setColor( "WHITE" );
         BRUSHPOPUP.initialize();

         // ----------------------------
         // -- Initialize #PAGELAYOUT --
         // ----------------------------
         PAGELAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 2 );
         COLUMN1.setParent( PAGELAYOUT );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 3 );
         COLUMN2.setParent( PAGELAYOUT );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 4 );
         COLUMN3.setParent( PAGELAYOUT );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 5 );
         COLUMN4.setParent( PAGELAYOUT );
         COLUMN4.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 6 );
         COLUMN5.setParent( PAGELAYOUT );
         COLUMN5.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 7 );
         COLUMN6.setParent( PAGELAYOUT );
         COLUMN6.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 8 );
         COLUMN7.setParent( PAGELAYOUT );
         COLUMN7.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 1 );
         COLUMN8.setParent( PAGELAYOUT );
         COLUMN8.setUnits( "PIXELS" );
         COLUMN8.setWidth( 20 );
         COLUMN8.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 9 );
         COLUMN9.setParent( PAGELAYOUT );
         COLUMN9.setUnits( "PIXELS" );
         COLUMN9.setWidth( 20 );
         COLUMN9.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( PAGELAYOUT );
         ROW1.initialize();

         // --------------------------------
         // -- Initialize #DISPLAYCOLUMNS --
         // --------------------------------
         DISPLAYCOLUMNS.setCollects( "PRIM_TBLO.Column" );
         DISPLAYCOLUMNS.initialize();

         // -------------------------------------
         // -- Initialize #MAXCOLUMNSFORDESIGN --
         // -------------------------------------
         MAXCOLUMNSFORDESIGN.setValue( 5 );
         MAXCOLUMNSFORDESIGN.initialize();

         // ----------------------------------
         // -- Initialize #DESTINATIONITEMS --
         // ----------------------------------
         DESTINATIONITEMS.setCollects( "LH2DSTITM" );
         DESTINATIONITEMS.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEMS --
         // -----------------------------
         LAYOUTITEMS.setCollects( "PRIM_TBLO.Item" );
         LAYOUTITEMS.setKeyedBy( "LH2DSTITM" );
         LAYOUTITEMS.initialize();

         // ------------------------------------------------------
         // -- Define the UDC information for #DESTINATIONITEMS --
         // ------------------------------------------------------
         DESTINATIONITEMS.addListFields( { "XDESTID": fld.XDESTID, "XDESTNAME": fld.XDESTNAME, "XDESTDESC": fld.XDESTDESC, "XDESTIMG": fld.XDESTIMG } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setHeight( 700 );
         this.setWidth( 800 );
         this.setLayoutManager( PAGELAYOUT );
         this.setVerticalScroll( true );
         this.setHorizontalScroll( true );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 34 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 34 );
      {

         //
         // #DisplayColumns.Insert( #Column2 )
         //
         rtn.Line( 36 );
         ref.DISPLAYCOLUMNS.mthINSERT( ref.COLUMN2 );

         //
         // #DisplayColumns.Insert( #Column3 )
         //
         rtn.Line( 37 );
         ref.DISPLAYCOLUMNS.mthINSERT( ref.COLUMN3 );

         //
         // #DisplayColumns.Insert( #Column4 )
         //
         rtn.Line( 38 );
         ref.DISPLAYCOLUMNS.mthINSERT( ref.COLUMN4 );

         //
         // #DisplayColumns.Insert( #Column5 )
         //
         rtn.Line( 39 );
         ref.DISPLAYCOLUMNS.mthINSERT( ref.COLUMN5 );

         //
         // #DisplayColumns.Insert( #Column6 )
         //
         rtn.Line( 40 );
         ref.DISPLAYCOLUMNS.mthINSERT( ref.COLUMN6 );

         //
         // #COM_OWNER.Load
         //
         rtn.Line( 42 );
         this.mthLOAD();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 44 );
      rtn.end();
   };

   //
   // mthSHOWMOBILE - ShowMobile
   //
   COM_OWNER.mthSHOWMOBILE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowMobile", 46 );

      //
      // MTHROUTINE Name(ShowMobile)
      //
      rtn.Line( 46 );
      {

         //
         // #MaxColumnsForDesign := 1
         //
         rtn.Line( 48 );
         ref.MAXCOLUMNSFORDESIGN.set( 1 );

         //
         // #COM_OWNER.AssignColumns
         //
         rtn.Line( 50 );
         this.mthASSIGNCOLUMNS();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      rtn.end();
   };

   //
   // mthSHOWTABLET - ShowTablet
   //
   COM_OWNER.mthSHOWTABLET = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowTablet", 54 );

      //
      // MTHROUTINE Name(ShowTablet)
      //
      rtn.Line( 54 );
      {

         //
         // #MaxColumnsForDesign := 2
         //
         rtn.Line( 56 );
         ref.MAXCOLUMNSFORDESIGN.set( 2 );

         //
         // #COM_OWNER.AssignColumns
         //
         rtn.Line( 58 );
         this.mthASSIGNCOLUMNS();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // mthSHOWDESKTOP - ShowDesktop
   //
   COM_OWNER.mthSHOWDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowDesktop", 62 );

      //
      // MTHROUTINE Name(ShowDesktop)
      //
      rtn.Line( 62 );
      {

         //
         // #MaxColumnsForDesign := 4
         //
         rtn.Line( 64 );
         ref.MAXCOLUMNSFORDESIGN.set( 4 );

         //
         // #COM_OWNER.AssignColumns
         //
         rtn.Line( 66 );
         this.mthASSIGNCOLUMNS();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 68 );
      rtn.end();
   };

   //
   // mthSHOWLARGEDESKTOP - ShowLargeDesktop
   //
   COM_OWNER.mthSHOWLARGEDESKTOP = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowLargeDesktop", 70 );

      //
      // MTHROUTINE Name(ShowLargeDesktop)
      //
      rtn.Line( 70 );
      {

         //
         // #MaxColumnsForDesign := 5
         //
         rtn.Line( 72 );
         ref.MAXCOLUMNSFORDESIGN.set( 5 );

         //
         // #COM_OWNER.AssignColumns
         //
         rtn.Line( 74 );
         this.mthASSIGNCOLUMNS();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      rtn.end();
   };

   //
   // mthLOAD - Load
   //
   COM_OWNER.mthLOAD = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Load", 78 ), mth = rtn;

      //
      // DEFINE_COM Class(#LH2SERVER.LoadDestinations) Name(#LoadDestinations)
      //
      var LOADDESTINATIONS = rtn.createDataRequest( "LOADDESTINATIONS", "LH2SERVER", "LOADDESTINATIONS" );

      // ----------------------------------
      // -- Initialize #LOADDESTINATIONS --
      // ----------------------------------
      LOADDESTINATIONS.initialize();

      // ----------------------------------------------
      // -- Add Event Handlers for #LOADDESTINATIONS --
      // ----------------------------------------------
      LOADDESTINATIONS.addEventHandler( "COMPLETED", this, evtRoutine2 );

      //
      // MTHROUTINE Name(Load) Access(*PRIVATE)
      //
      rtn.Line( 78 );
      {

         //
         // IF (#DestinationItems.ItemCount = 0)
         //
         rtn.Line( 82 );
         if ( Lansa.Number.eq( ref.DESTINATIONITEMS.getItemCount(), 0 ) )
         {

            //
            // #LoadDestinations.ExecuteAsync( #DestinationItems )
            //
            rtn.Line( 84 );
            LOADDESTINATIONS.mthEXECUTEASYNC( {  }, { LIST: { "XDESTINATIONLIST": ref.DESTINATIONITEMS } } );

            //
            // #COM_OWNER.Image <= #SYS_WEB.LoadingImage
            //
            rtn.Line( 86 );
            this.setImage( Lansa.WEB().getLoadingImage() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 98 );
      rtn.end();

      //
      // evtRoutine2 - #LoadDestinations.Completed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadDestinations.Completed", 90, mth );

         //
         // EVTROUTINE Handling(#LoadDestinations.Completed)
         //
         rtn.Line( 90 );
         {

            //
            // #COM_OWNER.AssignColumns
            //
            rtn.Line( 92 );
            this.mthASSIGNCOLUMNS();

            //
            // #COM_OWNER.Image <= *NULL
            //
            rtn.Line( 94 );
            this.setImage( null );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 96 );
         rtn.end();
      }
   };

   //
   // mthASSIGNCOLUMNS - AssignColumns
   //
   COM_OWNER.mthASSIGNCOLUMNS = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AssignColumns", 100 );

      //
      // DEFINE_COM Class(#PRIM_NMBR) Name(#ColumnIndex) Value(1)
      //
      var COLUMNINDEX = rtn.createReference( "COLUMNINDEX", "PRIM_NMBR" );

      // -----------------------------
      // -- Initialize #COLUMNINDEX --
      // -----------------------------
      COLUMNINDEX.setValue( 1 );
      COLUMNINDEX.initialize();

      //
      // MTHROUTINE Name(AssignColumns) Access(*PRIVATE)
      //
      rtn.Line( 100 );
      {

         //
         // BEGIN_LOOP Using(#ColumnIndex) To(#DisplayColumns.ItemCount)
         //
         rtn.Line( 104 );
         for( var i1 = 1, step1 = 1, to1 = Lansa.toInt( ref.DISPLAYCOLUMNS.getItemCount() ); COLUMNINDEX.set( i1 ), ( ( ( step1 >= 0 ) && ( i1 <= to1 ) ) || ( ( step1 < 0 ) && ( i1 >= to1 ) ) ); i1 += step1 )
         {

            //
            // IF (#ColumnIndex <= #MaxColumnsForDesign)
            //
            rtn.Line( 106 );
            if ( Lansa.toBool( Lansa.Number.le( COLUMNINDEX.get(), ref.MAXCOLUMNSFORDESIGN.get() ) ) )
            {

               //
               // #DisplayColumns<#ColumnIndex>.Width := 10
               //
               rtn.Line( 108 );
               ref.DISPLAYCOLUMNS.get( COLUMNINDEX.get() ).setWidth( 10 );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #DisplayColumns<#ColumnIndex>.Width := 0
               //
               rtn.Line( 112 );
               ref.DISPLAYCOLUMNS.get( COLUMNINDEX.get() ).setWidth( 0 );

            //
            // ENDIF 
            //
            }

         //
         // END_LOOP 
         //
         }

         //
         // #ColumnIndex := 1
         //
         rtn.Line( 118 );
         COLUMNINDEX.set( 1 );

         //
         // FOR Each(#DestinationItem) In(#DestinationItems) Key(#ItemIndex)
         //
         rtn.Line( 120 );
         {
            var l1 = ref.DESTINATIONITEMS.createIterator();

            while( l1.step() )
            {
               var DESTINATIONITEM = rtn.setref( "DESTINATIONITEM", l1.item() );
               var ITEMINDEX = rtn.setref( "ITEMINDEX", l1.key() );

               //
               // IF (#LayoutItems<#DestinationItem> *Is *NULL)
               //
               rtn.Line( 122 );
               if ( ( ref.LAYOUTITEMS.get( DESTINATIONITEM ) == null ) )
               {

                  //
                  // #LayoutItems<#DestinationItem> <= *New #PRIM_TBLO.Item
                  //
                  rtn.Line( 125 );
                  ref.LAYOUTITEMS.set( DESTINATIONITEM, Lansa.createComponent( "PRIM_TBLO", "Item" ) );

                  //
                  // SET Com(#LayoutItems<#DestinationItem>) Manage(#DestinationItem) MarginTop(15) MarginBottom(25) MarginLeft(15) MarginRight(15) Alignment(TopCenter) Flow(Down) Sizing(ContentHeightFitToWidth) Row(#Row1) Parent(#PageLayout)
                  //
                  rtn.Line( 127 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setManage( DESTINATIONITEM );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setMarginTop( 15 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setMarginBottom( 25 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setMarginLeft( 15 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setMarginRight( 15 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setAlignment( "TOPCENTER" );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setFlow( "DOWN" );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setSizing( "CONTENTHEIGHTFITTOWIDTH" );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setRow( ref.ROW1 );
                  ref.LAYOUTITEMS.get( DESTINATIONITEM ).setParent( ref.PAGELAYOUT );

               //
               // ENDIF 
               //
               }

               //
               // #LayoutItems<#DestinationItem>.Column <= #DisplayColumns<#ColumnIndex>
               //
               rtn.Line( 132 );
               ref.LAYOUTITEMS.get( DESTINATIONITEM ).setColumn( ref.DISPLAYCOLUMNS.get( COLUMNINDEX.get() ) );

               //
               // IF (#DestinationItem.Parent *Is *null)
               //
               rtn.Line( 134 );
               if ( ( DESTINATIONITEM.getParent() == null ) )
               {

                  //
                  // SET Com(#DestinationItem) Parent(#COM_OWNER) DisplayPosition(#ItemIndex)
                  //
                  rtn.Line( 137 );
                  DESTINATIONITEM.setParent( this );
                  DESTINATIONITEM.setDisplayPosition( ITEMINDEX.get() );

               //
               // ENDIF 
               //
               }

               //
               // #ColumnIndex += 1
               //
               rtn.Line( 142 );
               COLUMNINDEX.set( Lansa.add( COLUMNINDEX.get(), 1 ) );

               //
               // IF (#ColumnIndex > #MaxColumnsForDesign)
               //
               rtn.Line( 144 );
               if ( Lansa.toBool( Lansa.Number.gt( COLUMNINDEX.get(), ref.MAXCOLUMNSFORDESIGN.get() ) ) )
               {

                  //
                  // #ColumnIndex := 1
                  //
                  rtn.Line( 146 );
                  COLUMNINDEX.set( 1 );

               //
               // ENDIF 
               //
               }

            //
            // ENDFOR 
            //
            rtn.Line( 150 );
            }

            l1.end();
            rtn.deleteReference( "DESTINATIONITEM" );
            rtn.deleteReference( "ITEMINDEX" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 152 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_LCOL", "PRIM_NMBR", "PRIM_DCOL", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_NMBR" ]
});

//# sourceURL=lh2dstlst.js
