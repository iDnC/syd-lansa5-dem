// ------------------------
// -- Web Page: UF_OEXEC --
// ------------------------
LANSA.addComponent(
{
   id: "UF_OEXEC", 
   ot: "wp", 
   tp: "Web Page", 
   de: "\\OC=VLF-ONE Execution Entry point", 
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
         // DEFINE_COM Class(#PRIM_ATLM) Name(#WebFormLayoutManager)
         //
         var WEBFORMLAYOUTMANAGER = this.createReference( "WEBFORMLAYOUTMANAGER", "PRIM_ATLM" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#VLF_One_AttachItem) Parent(#WebFormLayoutManager) Attachment(Center) Manage(#VLF_ONE)
         //
         var VLF_ONE_ATTACHITEM = this.createReference( "VLF_ONE_ATTACHITEM", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#VF_AC006O) Name(#VLF_ONE) Parent(#COM_OWNER) Height(800) Width(1200)
         //
         var VLF_ONE = this.createReference( "VLF_ONE", "VF_AC006O" );

         // --------------------------------------
         // -- Initialize #WEBFORMLAYOUTMANAGER --
         // --------------------------------------
         WEBFORMLAYOUTMANAGER.initialize();

         // ------------------------------------
         // -- Initialize #VLF_ONE_ATTACHITEM --
         // ------------------------------------
         VLF_ONE_ATTACHITEM.setParent( WEBFORMLAYOUTMANAGER );
         VLF_ONE_ATTACHITEM.setAttachment( "CENTER" );
         VLF_ONE_ATTACHITEM.setManage( VLF_ONE );
         VLF_ONE_ATTACHITEM.initialize();

         // -------------------------
         // -- Initialize #VLF_ONE --
         // -------------------------
         VLF_ONE.setParent( this );
         VLF_ONE.setHeight( 800 );
         VLF_ONE.setWidth( 1200 );
         VLF_ONE.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "CLOSEQUERY", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( WEBFORMLAYOUTMANAGER );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 47 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 47 );
      {

         //
         // #VLF_ONE.uInitialize Frameworkidentifer("") Logonhandlerid(VF_AC026O) Passwordchangerid("") Mtxtloaderid(UF_OMULTI) Themecustomizerid("") Logonexpiry(90) Logonheaderpanelid(UF_OHEADP) Logontrailerpanelid(UF_OTRALP)
         //
         rtn.Line( 87 );
         ref.VLF_ONE.mthUINITIALIZE( "", "VF_AC026O", "", "UF_OMULTI", "", 90, "UF_OHEADP", "UF_OTRALP" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 89 );
      rtn.end();
   };

   //
   // evtRoutine2 - #SYS_WEB.CloseQuery
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SYS_WEB.CloseQuery", 93 );

      //
      // EVTROUTINE Handling(#SYS_WEB.CloseQuery)
      //
      rtn.Line( 93 );
      {

         //
         // IF (#VLF_ONE *IsNot *null)
         //
         rtn.Line( 95 );
         if ( ( ref.VLF_ONE != null ) )
         {

            //
            // #VLF_ONE.uTerminate Possibletocancel(False) Browserisclosing(True)
            //
            rtn.Line( 97 );
            ref.VLF_ONE.mthUTERMINATE( false, true, undefined );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 100 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC006O" ],
   rp: [ "PRIM_WEB", "PRIM_ATLM", "PRIM_ATLI" ]
});

//# sourceURL=uf_oexec.js
