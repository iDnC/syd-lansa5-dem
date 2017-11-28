LANSA.addComponent({id:"DF_T69RPO",ot:"ww",tp:"Widget",de:"\OC=Print a dynamically created report",tl:14000101,cl:14015000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.getuWidth = function()
{
return this.Report.canvasWidth;
}
PROTOTYPE.setuWidth = function( iValue )
{
this.m_uWidth = iValue;
}
PROTOTYPE.getuHeight = function()
{
return this.Report.canvasHeight;
}
PROTOTYPE.setuHeight = function( iValue )
{
this.m_uHeight = iValue;
}
PROTOTYPE.uInitialize = function( strTitle, iWidth, iHeight, strFontName, strFontSize, strFontColor )
{
this.Report = {
winWidth           : iWidth,
winHeight          : iHeight,
landscape          : false,
canvasWidth        : 198,
canvasHeight       : 285,
title              : strTitle,
uom                : 'mm',
printMargin        : 6,
printMarginFirefox : 2,
screenMarginTop    : 8,
screenMarginBottom : 8,
canvasMarginTop    : 5,
canvasMarginLeft   : 8,
canvasZoom         : 0.8,
printIcon          :[10,10], // top,left in pixels
fontName           : strFontName,
fontSize           : strFontSize,
fontColor          : strFontColor,
reportContainer    : null,
ReportPages        : [],
size               : "A4",
getCurrentPage     : function() { return this.ReportPages[(this.ReportPages.length - 1)]; }
};
this.winCounter = 0;
}
PROTOTYPE.uAddPage = function( )
{
var NewPage = { PageElements : [] } ;
this.Report.ReportPages.push(NewPage);
}
PROTOTYPE.uInsertImage = function( iFromLeft, iFromTop, iWidth, iHeight, strSource )
{
this.Report.getCurrentPage().PageElements.push( { image : { height:iHeight, width:iWidth, xPos:iFromLeft,  yPos:iFromTop, src:strSource } } );
}
PROTOTYPE.uDrawBarcode = function( strData, strFormat, iHeight, iFromLeft, iFromTop, strFontName, iFontSize, iLineWidth )
{
this.Report.getCurrentPage().PageElements.push( { barcode : { data:strData, format:strFormat, height:iHeight, xPos:iFromLeft,  yPos:iFromTop, lineWidth:iLineWidth, fontSize:iFontSize, font:strFontName } } );
}
PROTOTYPE.uInsertText = function( strText, strFontName, strFontSize, strFontColor, enumTextAlign, iFromLeft, iFromTop, bUnderline, bBold, bItalic )
{
if (strFontName != "") this.Report.fontName = strFontName;
if (strFontSize != "") this.Report.fontSize = strFontSize;
if (strFontColor != "") this.Report.fontColor = strFontColor;
this.Report.getCurrentPage().PageElements.push( { text : { FontName:this.Report.fontName, FontSize:this.Report.fontSize, FontColor:this.Report.fontColor , xPos:iFromLeft, yPos:iFromTop, value:strText, align:enumTextAlign, underline:bUnderline, bold:bBold, italic:bItalic } });
}
PROTOTYPE.uInsertLine = function( iFromLeft, iToLeft, iFromTop, iToTop, iThickness, strColor, iLength, iRepeat, iSpacing )
{
if (iLength > 0)
{
iToLeft = iFromLeft + iLength;
}
for (var i=0; i < iRepeat; i++)
{
this.Report.getCurrentPage().PageElements.push( { line : { thickness:iThickness, xPosFrom:iFromLeft, xPosTo:iToLeft, yPosFrom:iFromTop, yPosTo:iToTop ,color:strColor } } );
iFromTop += iSpacing;
if (iRepeat > 1) iToTop = iFromTop;
}
}
PROTOTYPE.uInsertRectangle = function( iFromLeft, iFromTop, iWidth, iHeight, iThickness, strColor, enumAlign, strBackColor )
{
this.Report.getCurrentPage().PageElements.push( { rect : { thickness:iThickness, xPosFrom:iFromLeft, width:iWidth, height:iHeight , yPosFrom:iFromTop, color:strColor, align:enumAlign, backColor:strBackColor } } );
}
PROTOTYPE.uShow = function( bPrintPreview )
{
Show(this.Report, bPrintPreview, ("Report_" + this.winCounter++));
}
PROTOTYPE.uClearPages = function()
{
this.Report.ReportPages = [];
}
PROTOTYPE.uTerminate = function()
{
this.Report = null;
}
return WIDGET.Completed;
}
;
l.rWg({nm:"DF_T69RPO",js:[l.cRc("DF_PrintWidget.js").get()],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setUHEIGHT(0);this.setUWIDTH(0);}});cO.getUHEIGHT=function(){return l.tI(this.get("uHeight"));};cO.setUHEIGHT=function(v){this.set("uHeight",l.tI(v));};cO.getUWIDTH=function(){return l.tI(this.get("uWidth"));};cO.setUWIDTH=function(v){this.set("uWidth",l.tI(v));};cO.mthUINITIALIZE=function(P0,P1,P2,P3,P4,P5){this.invoke("uInitialize",[l.tS(P0),l.tI(P1),l.tI(P2),l.tS(P3),l.tS(P4),l.tS(P5)]);
};cO.mthUADDPAGE=function(){this.invoke("uAddPage");};cO.mthUINSERTIMAGE=function(P0,P1,P2,P3,P4){this.invoke("uInsertImage",[l.tI(P0),l.tI(P1),l.tI(P2),l.tI(P3),l.tS(P4)]);};cO.mthUINSERTTEXT=function(P0,P1,P2,P3,P4,P5,P6,P7,P8,P9){this.invoke("uInsertText",[l.tS(P0),l.tS(P1),l.tS(P2),l.tS(P3),l.tS(P4).toUpperCase(),l.tI(P5),l.tI(P6),l.tB(P7),l.tB(P8),l.tB(P9)]);};cO.mthUINSERTLINE=function(P0,P1,P2,P3,P4,P5,P6,P7,P8){this.invoke("uInsertLine",[l.tI(P0),l.tI(P1),l.tI(P2),l.tI(P3),l.tI(P4),l.tS(P5),l.tI(P6),l.tI(P7),l.tI(P8)]);
};cO.mthUINSERTRECTANGLE=function(P0,P1,P2,P3,P4,P5,P6,P7){this.invoke("uInsertRectangle",[l.tI(P0),l.tI(P1),l.tI(P2),l.tI(P3),l.tI(P4),l.tS(P5),l.tS(P6).toUpperCase(),l.tS(P7)]);};cO.mthUSHOW=function(P0){this.invoke("uShow",[l.tB(P0)]);};cO.mthUTERMINATE=function(){this.invoke("uTerminate");};cO.mthUCLEARPAGES=function(){this.invoke("uClearPages");};cO.mthUDRAWBARCODE=function(P0,P1,P2,P3,P4,P5,P6,P7){this.invoke("uDrawBarcode",[l.tS(P0),l.tS(P1),l.tI(P2),l.tI(P3),l.tI(P4),l.tS(P5),l.tI(P6),l.tI(P7)]);
};},{rp:["PRIM_WDGT.Object"]});