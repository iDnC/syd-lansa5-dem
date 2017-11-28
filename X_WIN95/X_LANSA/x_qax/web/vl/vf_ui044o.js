LANSA.addComponent({id:"VF_UI044O",ot:"ww",tp:"Widget",de:"\OC = Color Picker",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireChanged=function(){l.fE(this,"CHANGED");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.colorPicker = null;
this.parentDiv = null;
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
var pThis = this;
var colorPicker = document.createElement("input");
this.parentDiv = parentDiv;
this.colorPicker = colorPicker;
this.watchColorPicker = function (e) { pThis.fireChanged(); };
this.toHEX = function (i) { var h = i.toString(16); if (h.length < 2) h = "0" + h; return h; };
this.fromHEX = function (h) { return parseInt(h,16).toString(); };
this.VLColortoHEX = function (s)
{
var c = s.split(":");
var r = "#" + pThis.toHEX(parseInt(c[0],10)) + pThis.toHEX(parseInt(c[1],10)) + pThis.toHEX(parseInt(c[2],10));
return r;
};
this.HEXColortoVL = function (h)
{
var r = h.substr(1,2);
var g = h.substr(3,2);
var b = h.substr(5,2);
var s = pThis.fromHEX(r) + ":" + pThis.fromHEX(g) + ":" + pThis.fromHEX(b);
return s;
};
colorPicker.setAttribute("type","color");
colorPicker.style.height = "32px";
colorPicker.style.width  = "32px";
colorPicker.style.border = "none";
colorPicker.style.outline = "none";
colorPicker.value = this.VLColortoHEX(this.m_Color);
colorPicker.addEventListener("change", pThis.watchColorPicker, false);
parentDiv.appendChild( this.colorPicker );
}
PROTOTYPE.getColor = function()
{
if (this.colorPicker != null) this.m_Color = this.HEXColortoVL(this.colorPicker.value);
return this.m_Color;
}
PROTOTYPE.setColor = function( strValue )
{
this.m_Color = strValue;
if (this.colorPicker != null) this.colorPicker.value = this.VLColortoHEX(this.m_Color);
}
PROTOTYPE.uTerminate = function()
{
if (this.parentDiv != null)
{
this.colorPicker.removeEventListener("change", this.watchColorPicker);
this.parentDiv.removeChild( this.colorPicker );
}
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_UI044O",st:["https://fonts.googleapis.com/icon?family=Material+Icons"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setCOLOR("54:65:80");}});cO.getCOLOR=function(){return l.tS(this.get("Color"));};cO.setCOLOR=function(v){this.set("Color",l.tS(v));};cO.mthUTERMINATE=function(){this.invoke("uTerminate");};},{rp:["PRIM_WDGT.Control"]});