LANSA.addComponent({id:"XGOOGLE01",nm:"xGooglePieChart",ot:"ww",tp:"Widget",de:"Google Pie Chart",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireItemGotSelection=function(pIndex,pCaption,pValue){var eP=l.ePs();eP.aI("INDEX",pIndex);eP.aS("CAPTION",pCaption);eP.aD("VALUE",pValue);l.fE(this,"ITEMGOTSELECTION",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'visualization', '1', { packages:["corechart"], callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_DataTable = new google.visualization.DataTable();
this.m_DataTable.addColumn( 'string', 'Caption' );
this.m_DataTable.addColumn( 'number', 'Value' );
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.m_Chart = new google.visualization.PieChart( parentDiv );
this.AttachEvents();
this.DrawChart();
}
PROTOTYPE.onSizeChanged = function()
{
this.DrawChart();
}
PROTOTYPE.getTitle = function()
{
return this.m_Title;
}
PROTOTYPE.setTitle = function( strTitle )
{
this.m_Title = strTitle;
this.DrawChart();
}
PROTOTYPE.Add = function( decValue, strCaption )
{
this.m_DataTable.addRow( [ strCaption, decValue, ] );
this.DrawChart();
}
PROTOTYPE.Clear = function()
{
this.m_DataTable.removeRows( 0, this.m_DataTable.getNumberOfRows() );
this.DrawChart();
}
PROTOTYPE.DrawChart = function()
{
if ( this.m_Chart )
{
this.m_Chart.draw( this.m_DataTable,
{
title          : this.m_Title,
legend         : 'none',
pieSliceText   : 'label',
backgroundColor: 'transparent'
});
}
}
PROTOTYPE.AttachEvents = function()
{
var pThis = this;
google.visualization.events.addListener( this.m_Chart, 'select', function()
{
var item = pThis.m_Chart.getSelection()[0];
if ( item )
{
pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
}
});
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE01",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setTITLE("");}});cO.getTITLE=function(){return l.tS(this.get("Title"));};cO.setTITLE=function(v){this.set("Title",l.tS(v));};cO.mthADD=function(P0,P1){this.invoke("Add",[l.tN(P0),l.tS(P1)]);};cO.mthCLEAR=function(){this.invoke("Clear");};},{rp:["PRIM_WDGT.Control"]});