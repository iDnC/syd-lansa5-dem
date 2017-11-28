LANSA.addComponent({id:"XGOOGLE02",nm:"xGoogleGauge",ot:"ww",tp:"Widget",de:"Google Gauge",tl:14000101,cl:14020000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'visualization', '1', { packages:["gauge"], callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.m_ParentDiv = parentDiv;
this.m_Gauge = new google.visualization.Gauge( parentDiv );
this.DrawGauge();
}
PROTOTYPE.onSizeChanged = function()
{
this.DrawGauge();
}
PROTOTYPE.getValue = function()
{
return this.m_Value;
}
PROTOTYPE.setValue = function( iValue )
{
this.m_Value = iValue;
this.DrawGauge();
}
PROTOTYPE.getTitle = function()
{
return this.m_Title;
}
PROTOTYPE.setTitle = function( strValue )
{
this.m_Title = strValue;
this.DrawGauge();
}
PROTOTYPE.getMin = function()
{
return this.m_Min;
}
PROTOTYPE.setMin = function( iValue )
{
this.m_Min = iValue;
this.DrawGauge();
}
PROTOTYPE.getMax = function()
{
return this.m_Max;
}
PROTOTYPE.setMax = function( iValue )
{
this.m_Max = iValue;
this.DrawGauge();
}
PROTOTYPE.getShowRed = function()
{
return this.m_ShowRed;
}
PROTOTYPE.setShowRed = function( bValue )
{
this.m_ShowRed = bValue;
this.DrawGauge();
}
PROTOTYPE.getShowYellow = function()
{
return this.m_ShowYellow;
}
PROTOTYPE.setShowYellow = function( bValue )
{
this.m_ShowYellow = bValue;
this.DrawGauge();
}
PROTOTYPE.getRedStart = function()
{
return this.m_RedStart;
}
PROTOTYPE.setRedStart = function( iRedStart )
{
this.m_RedStart = iRedStart;
this.DrawGauge();
}
PROTOTYPE.getRedEnd = function()
{
return this.m_RedEnd;
}
PROTOTYPE.setRedEnd = function( iValue )
{
this.m_RedEnd = iValue;
this.DrawGauge();
}
PROTOTYPE.getYellowStart = function()
{
return this.m_YellowStart;
}
PROTOTYPE.setYellowStart = function( iValue )
{
this.m_YellowStart = iValue;
this.DrawGauge();
}
PROTOTYPE.getYellowEnd = function()
{
return this.m_YellowEnd;
}
PROTOTYPE.setYellowEnd = function( iValue )
{
this.m_YellowEnd = iValue;
this.DrawGauge();
}
PROTOTYPE.DrawGauge = function()
{
if ( this.m_Gauge )
{
var data = google.visualization.arrayToDataTable([
['Label', 'Value'],
[ this.m_Title, this.m_Value ]
]);
var options = {
width: this.m_ParentDiv.offsetWidth,
height: this.m_ParentDiv.offsetHeight,
min: this.m_Min,
max: this.m_Max,
minorTicks: 5
};
if ( this.m_ShowYellow )
{
options.yellowFrom = this.m_YellowStart;
options.yellowTo = this.m_YellowEnd;
}
if ( this.m_ShowRed )
{
options.redFrom = this.m_RedStart;
options.redTo = this.m_RedEnd;
}
this.m_Gauge.draw( data, options);
}
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE02",js:["https://www.google.com/jsapi"],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setVALUE(0);this.setTITLE("");this.setMIN(0);this.setMAX(100);this.setSHOWRED(true);this.setSHOWYELLOW(true);this.setREDSTART(90);this.setREDEND(100);this.setYELLOWSTART(75);this.setYELLOWEND(90);}});cO.getVALUE=function(){return l.tI(this.get("Value"));};cO.setVALUE=function(v){this.set("Value",l.tI(v));};cO.getTITLE=function(){return l.tS(this.get("Title"));
};cO.setTITLE=function(v){this.set("Title",l.tS(v));};cO.getMIN=function(){return l.tI(this.get("Min"));};cO.setMIN=function(v){this.set("Min",l.tI(v));};cO.getMAX=function(){return l.tI(this.get("Max"));};cO.setMAX=function(v){this.set("Max",l.tI(v));};cO.getSHOWRED=function(){return l.tB(this.get("ShowRed"));};cO.setSHOWRED=function(v){this.set("ShowRed",l.tB(v));};cO.getSHOWYELLOW=function(){return l.tB(this.get("ShowYellow"));};cO.setSHOWYELLOW=function(v){this.set("ShowYellow",l.tB(v));};cO.getREDSTART=function()
{return l.tI(this.get("RedStart"));};cO.setREDSTART=function(v){this.set("RedStart",l.tI(v));};cO.getREDEND=function(){return l.tI(this.get("RedEnd"));};cO.setREDEND=function(v){this.set("RedEnd",l.tI(v));};cO.getYELLOWSTART=function(){return l.tI(this.get("YellowStart"));};cO.setYELLOWSTART=function(v){this.set("YellowStart",l.tI(v));};cO.getYELLOWEND=function(){return l.tI(this.get("YellowEnd"));};cO.setYELLOWEND=function(v){this.set("YellowEnd",l.tI(v));};},{rp:["PRIM_WDGT.Control"]});