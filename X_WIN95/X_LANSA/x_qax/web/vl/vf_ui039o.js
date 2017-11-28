LANSA.addComponent({id:"VF_UI039O",ot:"ww",tp:"Widget",de:"\OC = Google Icon",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireClick=function(){l.fE(this,"CLICK");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.m_Span = document.createElement('span');
this.parentDiv = null;
}
PROTOTYPE.uTerminate = function()
{
if ( this.parentDiv != null )
{
this.parentDiv.removeChild( this.m_Span );
this.m_Span = null ;
this.parentDiv = null ;
}
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.parentDiv = parentDiv ;
parentDiv.style.display = "flex";
var
pThis = this;
this.m_Span.setAttribute( 'class', "material-icons" );
this.m_Span.style.margin = "auto";
this.m_Span.style.fontSize = "inherit";
parentDiv.appendChild( this.m_Span );
}
PROTOTYPE.onSizeChanged = function()
{
}
PROTOTYPE.getIconName = function()
{
return this.m_Span.innerHTML;
}
PROTOTYPE.setIconName = function( strValue )
{
this.m_Span.innerHTML = strValue;
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_UI039O",st:["https://fonts.googleapis.com/icon?family=Material+Icons"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setICONNAME("");}});cO.getICONNAME=function(){return l.tS(this.get("IconName"));};cO.setICONNAME=function(v){this.set("IconName",l.tS(v));};cO.mthUTERMINATE=function(){this.invoke("uTerminate");};},{rp:["PRIM_WDGT.Control"]});