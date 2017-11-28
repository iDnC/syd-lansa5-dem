LANSA.addComponent({id:"DF_T70O_1",nm:"DF_T70O_CSV_Widget",ot:"ww",tp:"Widget",de:"\OC=Generate  client CSV document",tl:14000101,cl:14015000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.CSV_Lines = [];
this.m_parentDiv = parentDiv;
var downloadAnchor = document.createElement("a");
downloadAnchor.id = "download";
this.finalVal = "";
parentDiv.appendChild(downloadAnchor);
}
PROTOTYPE.uAddCell = function( bNewLine, strText )
{
if ( bNewLine || ( this.CSV_Lines.length <= 0 ) )
{
this.CSV_Lines.push( [ strText ] );
}
else
{
this.CSV_Lines[this.CSV_Lines.length - 1].push( strText  );
}
}
PROTOTYPE.uClearCells = function()
{
this.CSV_Lines = [];
}
PROTOTYPE.uConcatenateString = function( strFileName )
{
var numberOfLines = this.CSV_Lines.length;
var finalVal = '';
var currentValue = '';
for (var i = 0; i < numberOfLines; i++)
{
currentValue = this.CSV_Lines[i];
for (var j = 0; j < currentValue.length; j++)
{
var innerValue =  currentValue[j]===null ? '' : currentValue[j].toString();
var result = innerValue.replace(/"/g, '""');
if (result.search(/("|,|\n)/g) >= 0)
{
result = '"' + result + '"';
}
if (j > 0) finalVal += ',';
finalVal += result;
}
finalVal += '\n';
}
console.log(finalVal);
this.finalVal = finalVal;
this.uDownload ( strFileName );
}
PROTOTYPE.uDownload = function( strFileName )
{
if ( strFileName.toUpperCase().search(".CSV") < 0 )
{
strFileName += ".csv"
}
var anchor = document.getElementById("download");
if (typeof anchor.download != "undefined")
{
anchor.href = "data:text/csv;charset=utf-8," + encodeURIComponent(this.finalVal);
anchor.text = "Click to download " + strFileName;
anchor.download = strFileName;
}
else
{
var csvContent=this.finalVal; //here we load our csv data
var blob = new Blob([csvContent],{ type: "text/csv;charset=utf-8;", });
navigator.msSaveBlob(blob, strFileName);
}
}
PROTOTYPE.uTerminate = function()
{
try {
this.m_parentDiv.removeChild(this.m_parentDiv.childNodes[0]);
}
catch (oE) { }
}
PROTOTYPE.uTestIE = function()
{
return (typeof document.getElementById("download").download == "undefined");
}
return WIDGET.Completed;
}
;
l.rWg({nm:"DF_T70O_1",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthUTESTIE=function(){return l.tB(this.invoke("uTestIE"));};cO.mthUADDCELL=function(P0,P1){this.invoke("uAddCell",[l.tB(P0),l.tS(P1)]);};cO.mthUCONCATENATESTRING=function(P0){this.invoke("uConcatenateString",[l.tS(P0)]);};cO.mthUDOWNLOAD=function(P0){this.invoke("uDownload",[l.tS(P0)]);};cO.mthUTERMINATE=function(){this.invoke("uTerminate");};cO.mthUCLEARCELLS=function(){this.invoke("uClearCells");
};},{rp:["PRIM_WDGT.Control"]});