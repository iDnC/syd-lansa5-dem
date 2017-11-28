LANSA.addComponent({id:"DF_T71O_P",nm:"DF_T71O_Pie_Chart",ot:"ww",tp:"Widget",de:"\OC=Pie chart using Chart.js",tl:14000101,cl:14015000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.getuVisualizeAs = function()
{
return this.m_uVisualizeAs;
}
PROTOTYPE.setuVisualizeAs = function( enumValue )
{
switch (enumValue)
{
case "P": { this.chartData.type = "pie"; break; }
case "D": { this.chartData.type = "doughnut"; break; }
case "A": { this.chartData.type = "polarArea"; break; }
}
this.m_uVisualizeAs = this.chartData.type;
}
PROTOTYPE.onCreateInstance = function()
{
this.PieChart = null;
this.chartData = null;
this.initChartData = function() {
this.chartData = {
type: "polarArea",
data: {
labels: [],
datasets: [ { label:"", data:[], backgroundColor:[] } ]
},
options: {
scale: { ticks: { beginAtZero: true } },
responsive : true,
legend     : { display:true, labels: { } },
title      : { padding:3 }
}
};
}
this.initChartData();
this.canvasContainer = document.createElement("canvas");
this.chartColors = {
red    : "rgb(255,99,132)",
orange : "rgb(255,159,64)",
yellow : "rgb(255,205,86)",
green  : "rgb(75,192,192)",
blue   : "rgb(54,162,235)",
purple : "rgb(153,102,255)",
cyan   : "rgb(0,255,255)",
magenta: "rgb(255,0,255)",
purple : "rgb(128,0,128)",
teal   : "rgb(0,128,128)",
navy   : "rgb(0,0,128)",
black  : "rgb(0,0,0)",
grey   : "rgb(231, 233, 237)"
};
this.getDatasetIndex = function (id)
{
if ( id != "" )
{
return id.replace( /\D+/g, '');
}
return 0;
};
this.getColor = function(strColor, opacity) {
if ( this.chartColors[strColor.toLowerCase()] )
{
return ( Chart.helpers.color(this.chartColors[strColor.toLowerCase()]).alpha(opacity).rgbString() );
}
if (strColor == "")
{
return Chart.defaults.global.defaultColor;
}
return ( "rgba(" + strColor + "," + opacity + ")" );
}
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
parentDiv.appendChild(this.canvasContainer);
this.parentDiv = parentDiv;
this.canvasContainer.style.width = "100%";
this.canvasContainer.style.height = "100%";
}
PROTOTYPE.uRefreshChart = function( )
{
try {
if ( ( this.PieChart == null ) || ( this.chartData.type != this.m_uVisualizeAs ) )
{
this.chartData.type = this.m_uVisualizeAs;
this.PieChart = new Chart(this.canvasContainer, this.chartData );
}
this.PieChart.update();
}
catch (oE) { return; }
}
PROTOTYPE.uAddPieSection = function( strDataSetId, strLabel, decData, strBackgroundColor, decOpacity )
{
this.chartData.data.labels.push(strLabel);
var dataset = this.chartData.data.datasets[this.getDatasetIndex(strDataSetId)];
dataset.data.push(decData);
try { dataset.backgroundColor.push(this.getColor(strBackgroundColor,decOpacity));  }
catch (oE) { }
}
PROTOTYPE.uShowTitle = function( strText, enumPosition, iFontSize, strFontColor, strFontFamily, enumFontStyle )
{
var title = this.chartData.options.title;
title.display = true;
title.text = strText;
if (enumPosition.toLowerCase() != "top")
{
title.position = enumPosition.toLowerCase();
}
if ( iFontSize > 0 )
{
title.fontSize = iFontSize;
}
if (strFontFamily != "")
{
title.fontFamily = strFontFamily;
}
try { title.fontColor = this.getColor(strFontColor, 1); }
catch (oE) { }
}
PROTOTYPE.uSetLegend = function( strDataSetId, bShow, strText, enumPosition, iFontSize, strFontFamily, strFontColor )
{
if ( !bShow ) return;
var legend = this.chartData.options.legend;
legend.display = true;
this.chartData.data.datasets[this.getDatasetIndex(strDataSetId)].label = strText;
if (enumPosition.toLowerCase() != "top")
{
legend.position = enumPosition.toLowerCase();
}
if ( iFontSize > 0 )
{
legend.labels.fontSize = iFontSize;
}
if (strFontFamily != "")
{
legend.labels.fontFamily = strFontFamily;
}
try { legend.labels.fontColor = this.getColor(strFontColor, 1); }
catch (oE) { }
}
PROTOTYPE.uClear = function( bTerminate )
{
try {
this.PieChart = null;
this.initChartData();
if ( bTerminate )
{
this.PieChart.destroy();
document.removeChild(this.canvasContainer);
}
}
catch(oE) { return; }
}
return WIDGET.Completed;
}
;
l.rWg({nm:"DF_T71O_P",js:["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js"],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setUVISUALIZEAS("P");}});cO.getUVISUALIZEAS=function(){return l.tS(this.get("uVisualizeAs")).toUpperCase();};cO.setUVISUALIZEAS=function(v){this.set("uVisualizeAs",l.tS(v).toUpperCase());};cO.mthUCLEAR=function(P0){this.invoke("uClear",[l.tB(P0)]);};cO.mthUSETLEGEND=function(P0,P1,P2,P3,P4,P5,P6){this.invoke("uSetLegend",[l.tS(P0),l.tB(P1),l.tS(P2),l.tS(P3).toUpperCase(),l.tI(P4),l.tS(P5),l.tS(P6)]);
};cO.mthUSHOWTITLE=function(P0,P1,P2,P3,P4,P5){this.invoke("uShowTitle",[l.tS(P0),l.tS(P1).toUpperCase(),l.tI(P2),l.tS(P3),l.tS(P4),l.tS(P5).toUpperCase()]);};cO.mthUREFRESHCHART=function(){this.invoke("uRefreshChart");};cO.mthUADDPIESECTION=function(P0,P1,P2,P3,P4){this.invoke("uAddPieSection",[l.tS(P0),l.tS(P1),l.tN(P2),l.tS(P3),l.tN(P4)]);};},{rp:["PRIM_WDGT.Control"]});