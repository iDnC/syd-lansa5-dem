LANSA.addComponent({id:"DF_T71O_B",nm:"DF_T71O_Bar_Chart",ot:"ww",tp:"Widget",de:"\OC=Bar chart using Chart.js",tl:14000101,cl:14015000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.BarChart = null;
this.chartData = null;
this.CurrentDatasetBackground = Chart.defaults.global.defaultColor;
this.initChartData = function() {
this.chartData = {
type: "bar",
data: { labels: [], datasets: [ { label:"", data:[], backgroundColor:[] } ] },
options: {
responsive : true,
legend     : { display:true, labels: { } },
title      : { padding:3 },
scales: { xAxes: [ { ticks: {  } } ] }
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
grey   : "rgb(231,233,237)"
};
this.getDatasetIndex = function (id)
{
if ( id != "" )
{
return id.replace( /\D+/g, '');
}
return 0;
}
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
PROTOTYPE.onSizeChanged = function()
{
}
PROTOTYPE.uRefreshChart = function( iPercentageWidth, enumAlign )
{
try {
if ( this.BarChart == null )
{
this.BarChart = new Chart(this.canvasContainer, this.chartData );
}
this.parentDiv.parentElement.align = enumAlign.toLowerCase();
this.BarChart.update();
}
catch (oE) { return; }
}
PROTOTYPE.uAddBar = function( strDataSetId, strLabel, decData, strSetBackgroundColor, decSetOpacity )
{
if (strLabel != "")
{
this.chartData.data.labels.push(strLabel);
}
var dataset = this.chartData.data.datasets[this.getDatasetIndex(strDataSetId)];
if ( strSetBackgroundColor == "" )
{
strSetBackgroundColor = this.CurrentDatasetBackground;
}
else
{
strSetBackgroundColor = this.getColor(strSetBackgroundColor,decSetOpacity);
}
dataset.backgroundColor[dataset.data.length] = strSetBackgroundColor;
dataset.data.push(decData);
}
PROTOTYPE.uAddDataSet = function( strUseId, strUseLabel )
{
var newDataset = { label : strUseLabel, data: [], backgroundColor:[] };
if ( strUseId == "" )
{
strUseId = "Dataset_" + this.chartData.data.datasets.length.toString();
}
this.chartData.data.datasets.push(newDataset);
return strUseId;
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
try {
title.fontColor = this.getColor(strFontColor,1);
}
catch (oE) { }
}
PROTOTYPE.uSetLegend = function( strDataSetId, bShow, strText, enumPosition, iFontSize, strFontFamily, strFontColor, iBoxWidth )
{
if ( !bShow ) return;
var legend = this.chartData.options.legend;
legend.display = true;
legend.labels.boxWidth = iBoxWidth;
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
try {
legend.labels.fontColor = this.getColor(strFontColor,1);
}
catch (oE) { }
}
PROTOTYPE.uSetBarStyles = function( strDataSetId, iLabelFontSize, strLabelFontFamily, strLabelFontColor, strBackgroundColor, decOpacity, iBorderWidth, strBorderColor )
{
var ticks = this.chartData.options.scales.xAxes[0].ticks;
if ( iLabelFontSize > 0 )
{
ticks.fontSize = iLabelFontSize;
}
if (strLabelFontFamily != "")
{
ticks.fontFamily = strLabelFontFamily;
}
if (strLabelFontColor != "")
{
ticks.fontFamily = ticks.fontColor = this.getColor(strLabelFontColor,1);
}
var datasetIndex = this.getDatasetIndex(strDataSetId);
var dataset = this.chartData.data.datasets[datasetIndex];
try {
var setColor = this.getColor(strBackgroundColor,decOpacity);
dataset.backgroundColor.push(setColor);
this.CurrentDatasetBackground = setColor;
}
catch (oE) { }
try { dataset.borderColor = this.getColor(strBorderColor,decOpacity); }
catch (oE) { }
if ( iBorderWidth > 0 )
{
dataset.borderWidth = iBorderWidth;
}
}
PROTOTYPE.uClear = function( bTerminate )
{
try {
this.BarChart = null;
this.initChartData();
if ( bTerminate )
{
this.BarChart.destroy();
document.removeChild(this.canvasContainer);
}
}
catch(oE) { return; }
}
return WIDGET.Completed;
}
;
l.rWg({nm:"DF_T71O_B",js:["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js"],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthUCLEAR=function(P0){this.invoke("uClear",[l.tB(P0)]);};cO.mthUADDBAR=function(P0,P1,P2,P3,P4){this.invoke("uAddBar",[l.tS(P0),l.tS(P1),l.tN(P2),l.tS(P3),l.tN(P4)]);};cO.mthUSETLEGEND=function(P0,P1,P2,P3,P4,P5,P6,P7){this.invoke("uSetLegend",[l.tS(P0),l.tB(P1),l.tS(P2),l.tS(P3).toUpperCase(),l.tI(P4),l.tS(P5),l.tS(P6),l.tI(P7)]);
};cO.mthUSHOWTITLE=function(P0,P1,P2,P3,P4,P5){this.invoke("uShowTitle",[l.tS(P0),l.tS(P1).toUpperCase(),l.tI(P2),l.tS(P3),l.tS(P4),l.tS(P5).toUpperCase()]);};cO.mthUADDDATASET=function(P0,P1){return l.tS(this.invoke("uAddDataSet",[l.tS(P0),l.tS(P1)]));};cO.mthUSETBARSTYLES=function(P0,P1,P2,P3,P4,P5,P6,P7){this.invoke("uSetBarStyles",[l.tS(P0),l.tI(P1),l.tS(P2),l.tS(P3),l.tS(P4),l.tN(P5),l.tI(P6),l.tS(P7)]);};cO.mthUREFRESHCHART=function(){this.invoke("uRefreshChart");};},{rp:["PRIM_WDGT.Control"]
});