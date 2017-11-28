// -----------------------
// -- Web Page: LH2MAIN --
// -----------------------
LANSA.addComponent(
{
   id: "LH2MAIN", 
   nm: "LH2Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Holidays", 
   tl: 14020000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDecimal( ".7" );

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
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#BackgroundPanel) Parent(#Layout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Manage(#ForegroundPanel) Parent(#Layout1) Row(#Row1)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#LH2BackgroundPanel) Name(#BackgroundPanel) Parent(#COM_OWNER) TabStop(False) Height(800) Width(745) DisplayPosition(2)
         //
         var BACKGROUNDPANEL = this.createReference( "BACKGROUNDPANEL", "LH2BACK" );

         //
         // DEFINE_COM Class(#LH2ForegroundPanel) Name(#ForegroundPanel) Parent(#COM_OWNER) TabStop(False) Height(800) Width(745) TabPosition(2)
         //
         var FOREGROUNDPANEL = this.createReference( "FOREGROUNDPANEL", "LH2FORE" );

         //
         // DEFINE_COM Class(#PRIM_DESN) Name(#Design1)
         //
         var DESIGN1 = this.createReference( "DESIGN1", "PRIM_DESN" );

         //
         // DEFINE_COM Class(#PRIM_DESN.Design) Name(#Mobile) DesignManager(#Design1) Width(600)
         //
         var MOBILE = this.createReference( "MOBILE", "PRIM_DESN", "Design" );

         //
         // DEFINE_COM Class(#PRIM_DESN.Design) Name(#Tablet) DesignManager(#Design1) Width(1000)
         //
         var TABLET = this.createReference( "TABLET", "PRIM_DESN", "Design" );

         //
         // DEFINE_COM Class(#PRIM_DESN.Design) Name(#Desktop) DesignManager(#Design1) Width(1800)
         //
         var DESKTOP = this.createReference( "DESKTOP", "PRIM_DESN", "Design" );

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
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( BACKGROUNDPANEL );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( FOREGROUNDPANEL );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDPANEL --
         // ---------------------------------
         BACKGROUNDPANEL.setParent( this );
         BACKGROUNDPANEL.setTabStop( false );
         BACKGROUNDPANEL.setHeight( 800 );
         BACKGROUNDPANEL.setWidth( 745 );
         BACKGROUNDPANEL.setDisplayPosition( 2 );
         BACKGROUNDPANEL.initialize();

         // ---------------------------------
         // -- Initialize #FOREGROUNDPANEL --
         // ---------------------------------
         FOREGROUNDPANEL.setParent( this );
         FOREGROUNDPANEL.setTabStop( false );
         FOREGROUNDPANEL.setHeight( 800 );
         FOREGROUNDPANEL.setWidth( 745 );
         FOREGROUNDPANEL.setTabPosition( 2 );
         FOREGROUNDPANEL.initialize();

         // -------------------------
         // -- Initialize #DESIGN1 --
         // -------------------------
         DESIGN1.initialize();

         // ------------------------
         // -- Initialize #MOBILE --
         // ------------------------
         MOBILE.setDesignManager( DESIGN1 );
         MOBILE.setWidth( 600 );
         MOBILE.initialize();

         // ------------------------
         // -- Initialize #TABLET --
         // ------------------------
         TABLET.setDesignManager( DESIGN1 );
         TABLET.setWidth( 1000 );
         TABLET.initialize();

         // -------------------------
         // -- Initialize #DESKTOP --
         // -------------------------
         DESKTOP.setDesignManager( DESIGN1 );
         DESKTOP.setWidth( 1800 );
         DESKTOP.initialize();

         // ---------------------------------------------
         // -- Add Event Handlers for #FOREGROUNDPANEL --
         // ---------------------------------------------
         FOREGROUNDPANEL.addEventHandler( "SCROLLCHANGED", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( LAYOUT1 );
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNPINK" ) );
         this.setWidth( 745 );
         this.setDesignManager( DESIGN1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "DESIGNCHANGED", this, evtRoutine2 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #ForegroundPanel.ScrollChanged
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ForegroundPanel.ScrollChanged", 21 );

      //
      // EVTROUTINE Handling(#ForegroundPanel.ScrollChanged)
      //
      rtn.Line( 21 );
      {

         //
         // #BackgroundPanel.VerticalScrollPos := 0.7 * #ForegroundPanel.VerticalScrollPos
         //
         rtn.Line( 23 );
         ref.BACKGROUNDPANEL.setVerticalScrollPos( Lansa.mul( const1, ref.FOREGROUNDPANEL.getVerticalScrollPos() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 25 );
      rtn.end();
   };

   //
   // evtRoutine2 - #COM_OWNER.DesignChanged
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.DesignChanged", 27 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var DESIGN = parms.ref( "DESIGN" );

      //
      // EVTROUTINE Handling(#COM_OWNER.DesignChanged) Design(#Design)
      //
      rtn.Line( 27 );
      {

         //
         // IF (#Design *IsEqualTo #Mobile)
         //
         rtn.Line( 29 );
         if ( ( DESIGN === ref.MOBILE ) )
         {

            //
            // #BackgroundPanel.ShowMobile
            //
            rtn.Line( 31 );
            ref.BACKGROUNDPANEL.mthSHOWMOBILE();

            //
            // #ForegroundPanel.ShowMobile
            //
            rtn.Line( 32 );
            ref.FOREGROUNDPANEL.mthSHOWMOBILE();

         //
         // ELSE 
         //
         }
         else
         {

            //
            // IF (#Design *IsEqualTo #Tablet)
            //
            rtn.Line( 36 );
            if ( ( DESIGN === ref.TABLET ) )
            {

               //
               // #BackgroundPanel.ShowTablet
               //
               rtn.Line( 38 );
               ref.BACKGROUNDPANEL.mthSHOWTABLET();

               //
               // #ForegroundPanel.ShowTablet
               //
               rtn.Line( 39 );
               ref.FOREGROUNDPANEL.mthSHOWTABLET();

            //
            // ELSE 
            //
            }
            else
            {

               //
               // IF (#Design *IsEqualTo #Desktop)
               //
               rtn.Line( 43 );
               if ( ( DESIGN === ref.DESKTOP ) )
               {

                  //
                  // #BackgroundPanel.ShowDesktop
                  //
                  rtn.Line( 45 );
                  ref.BACKGROUNDPANEL.mthSHOWDESKTOP();

                  //
                  // #ForegroundPanel.ShowDesktop
                  //
                  rtn.Line( 46 );
                  ref.FOREGROUNDPANEL.mthSHOWDESKTOP();

               //
               // ELSE 
               //
               }
               else
               {

                  //
                  // #BackgroundPanel.ShowLargeDesktop
                  //
                  rtn.Line( 50 );
                  ref.BACKGROUNDPANEL.mthSHOWLARGEDESKTOP();

                  //
                  // #ForegroundPanel.ShowLargeDesktop
                  //
                  rtn.Line( 51 );
                  ref.FOREGROUNDPANEL.mthSHOWLARGEDESKTOP();

               //
               // ENDIF 
               //
               }

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "LH2BACK", "LH2FORE" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_DESN", "PRIM_DESN.Design" ]
});

//# sourceURL=lh2main.js
