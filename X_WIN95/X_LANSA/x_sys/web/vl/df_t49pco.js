LANSA.addComponent({id:"DF_T49PCO",ot:"ww",tp:"Widget",de:"\OC=Google Pie Chart",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireItemSelected=function(pIndex,pValue,pCaption){var eP=l.ePs();eP.aI("INDEX",pIndex);eP.aI("VALUE",pValue);eP.aS("CAPTION",pCaption);l.fE(this,"ITEMSELECTED",eP);};};var fW=
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
PROTOTYPE.Insert = function( iValue, strCaption )
{
var index = this.m_DataTable.addRow( [ strCaption, iValue ] );
this.DrawChart();
return index;
}
PROTOTYPE.Clear = function()
{
this.m_DataTable.removeRows( 0, this.m_DataTable.getNumberOfRows() );
this.DrawChart();
}
PROTOTYPE.Remove = function( index )
{
index -= 1;
if ( ( index >= 0 ) && ( index < this.m_DataTable.getNumberOfRows() ) )
{
this.m_DataTable.removeRow( index );
this.DrawChart();
}
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
var
selectedItem = pThis.m_Chart.getSelection()[0];
if ( selectedItem )
{
pThis.fireItemSelected( ( selectedItem.row + 1 ), pThis.m_DataTable.getValue( selectedItem.row, 1 ), pThis.m_DataTable.getValue( selectedItem.row, 0 ) );
}
});
}
return WIDGET.Loading;
}
;
l.rWg({nm:"DF_T49PCO",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setTITLE("");}});cO.getTITLE=function(){return l.tS(this.get("Title"));};cO.setTITLE=function(v){this.set("Title",l.tS(v));};cO.mthCLEAR=function(){this.invoke("Clear");};cO.mthINSERT=function(P0,P1){return l.tI(this.invoke("Insert",[l.tI(P0),l.tS(P1)]));};cO.mthREMOVE=function(P0){this.invoke("Remove",[l.tI(P0)]);};},{rp:["PRIM_WDGT.Control"]});