LANSA.addComponent({id:"XDEMOW_86",nm:"xDemoWebGoogleIcon",ot:"ww",tp:"Widget",de:"Google Icon",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireClick=function(){l.fE(this,"CLICK");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.m_Span = document.createElement('span');
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
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
l.rWg({nm:"XDEMOW_86",st:["https://fonts.googleapis.com/icon?family=Material+Icons"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setICONNAME("");}});cO.getICONNAME=function(){return l.tS(this.get("IconName"));};cO.setICONNAME=function(v){this.set("IconName",l.tS(v));};},{rp:["PRIM_WDGT.Control"]});