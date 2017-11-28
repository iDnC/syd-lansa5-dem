LANSA.addComponent({id:"DF_NOTE_Q",nm:"DF_Note_QuillInterface",ot:"ww",tp:"Widget",de:"\OC=Quill Rich Text Editor used in notes",tl:14000101,cl:14015000},function(l,oI,u){var fF=function(wP){wP.fireChanged=function(){l.fE(this,"CHANGED");};};var fW=
function( PROTOTYPE, WIDGET ) {
PROTOTYPE.onCreateInstance = function() { this.editor = null; };
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.editor    = document.createElement("div");
this.parentDiv = parentDiv;
this.parentDiv.id = "divContainer";
this.editor.setAttribute("class", "editor");
this.parentDiv.appendChild(this.editor);
this.parentDiv.style.height = "80%";
};
PROTOTYPE.onSizeChanged = function() {};
PROTOTYPE.uTerminate = function()
{
if (this.editor != null)
{
this.parentDiv.removeChild(this.editor);
this.editor = null;
this.parentDiv = null;
}
};
PROTOTYPE.uInitialize = function()
{
this.parentDiv.parentNode.style.overflow = "visible";
var localthis = this;
var toolbarOptions = [
[{ 'font': [] }],
['bold', 'italic', 'underline'],
[{ 'list': 'ordered'}, { 'list': 'bullet' }],
[{ 'color': [] }, { 'background': [] }],
[{ 'align': [] }]
];
var quill = new Quill('.editor', {
modules: {
toolbar: toolbarOptions
},
theme: 'snow'
});
this.quill = quill;
quill.on('text-change', function(delta, oldDelta, source) {
if (source == 'user') localthis.fireChanged();
} );
} /* PROTOTYPE.uInitialize */
PROTOTYPE.getContent = function()
{
var delta = this.quill.getContents();
return  JSON.stringify(delta);
}
PROTOTYPE.setContent = function(strinput)
{
var delta = JSON.parse(strinput);
this.quill.setContents(delta);
}
PROTOTYPE.getHtml = function()
{
var html = document.querySelector('.editor').firstChild.innerHTML;
return html;
}
return WIDGET.Completed;
};
;
l.rWg({nm:"DF_NOTE_Q",js:["https://cdn.quilljs.com/1.1.5/quill.js"],st:["https://cdn.quilljs.com/1.1.5/quill.snow.css"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthGETCONTENT=function(){return l.tS(this.invoke("getContent"));};cO.mthSETCONTENT=function(P0){this.invoke("setContent",[l.tS(P0)]);};cO.mthGETHTML=function(){return l.tS(this.invoke("getHtml"));};cO.mthUINITIALIZE=function(){this.invoke("uInitialize");};cO.mthUTERMINATE=function(){this.invoke("uTerminate");
};},{rp:["PRIM_WDGT.Control"]});