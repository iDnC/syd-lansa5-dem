/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */
/* NOTE: THE FIRST SECTION OF THIS FILE CONTAINS THE CROSS BROWSER EXTENSIONS. THEY START RIGHT AFTER THIS COMMENT AND END WHERE IT SAYS END CROSS BROWSER */
/* ANY CHANGE MADE TO THE CROSS BROWSER EXTENSIONS PART MUST BE REPLICATED INTO VF_XBROWSER.JS */
/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "WinXP";
		this.TouchDevice = this.touch();
		this.DesktopBrowser = ( this.OS != "Android" ) && ( this.OS != "iPad" ) && ( this.OS != "WinPhone" );
	},

   touch: function()
   { 
      return ( (this.OS == "Android") || (this.OS == "iPad") ); 
   },
   
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox",
         versionSearch: "Firefox"			
		},
		{
			string: navigator.userAgent,
			subString: "MSIE 10.0",
			identity: "IE10",
			versionSearch: "MSIE 10.0"
		},
      {
			string: navigator.userAgent,
			subString: "rv:11.0",
			identity: "IE11",
			versionSearch: "rv:11.0"
		},			
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},		
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Chrome",
			versionSearch: "rv"
		}
	],
	dataOS : [
      {
         string: navigator.userAgent,
         subString: "Windows NT 5.2",
         identity: "Win2003"
      },		
      {		
         string: navigator.userAgent,
         subString: "Windows NT 6.0",
         identity: "VISTA"
      },
      {		
         string: navigator.userAgent,
         subString: "Windows NT 6.1",
         identity: "Win7"
      },      
      {		
         string: navigator.userAgent,
         subString: "Windows NT 6.2",
         identity: "Win8"
      },            
      {		
         string: navigator.userAgent,
         subString: "Windows NT 6.3",
         identity: "Win8.1"
      },                        
      {
         string: navigator.platform,
         subString: "Mac",
         identity: "Mac"
      },
      {
		   string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
      {
         string: navigator.userAgent,
         subString: "Android",
         identity: "Android"
      },
      {
		   string: navigator.userAgent,
         subString: "iPad",
         identity: "iPad"
      },      
      {
		   string: navigator.userAgent,
         subString: "Windows Phone 8",
         identity: "WinPhone"
      }
	]

};

BrowserDetect.init();

if ( (BrowserDetect.browser != "Explorer") && (BrowserDetect.browser != "IE10") )
{
  HTMLElement.prototype.__defineGetter__("innerText", function () { return(this.textContent); });
  HTMLElement.prototype.__defineSetter__("innerText", function (txt) { this.textContent = txt; });

  HTMLElement.prototype.insertAdjacentElement = function (sWhere, oElement)
  {
	    switch (String(sWhere).toLowerCase()) 
	    {
          case "beforebegin":
              this.parentNode.insertBefore (oElement, this);
              break;
          case "afterbegin":
              this.insertBefore (oElement, this.firstChild);
              break;
          case "beforeend":
              this.appendChild (oElement);
              break;
          case "afterend":
              this.parentNode.insertBefore (oElement, this.nextSibling);
              break;
       }
  };
  
  HTMLElement.prototype.insertAdjacentHTML = function (sWhere, sHTML) {
	   var df;	
	   var r = this.ownerDocument.createRange();

	   switch (String(sWhere).toLowerCase()) {
		   case "beforebegin":
			   r.setStartBefore(this);
			   df = r.createContextualFragment(sHTML);
			   this.parentNode.insertBefore(df, this);
			   break;

		   case "afterbegin":
			   r.selectNodeContents(this);
			   r.collapse(true);
			   df = r.createContextualFragment(sHTML);
			   this.insertBefore(df, this.firstChild);
			   break;

		   case "beforeend":
			   r.selectNodeContents(this);
			   r.collapse(false);
			   df = r.createContextualFragment(sHTML);
			   this.appendChild(df);
			   break;

		   case "afterend":
			   r.setStartAfter(this);
			   df = r.createContextualFragment(sHTML);
			   this.parentNode.insertBefore(df, this.nextSibling);
			   break;
	   }
   };


	HTMLElement.prototype.__defineGetter__("children", function () {
		var tmp = [];
		var j = 0;
		var n;
		for (var i = 0; i < this.childNodes.length; i++) {
			n = this.childNodes[i];
			if (n.nodeType == 1) {
				tmp[j++] = n;
				if (n.name) {	
					if (!tmp[n.name])
						tmp[n.name] = [];
					tmp[n.name][tmp[n.name].length] = n;
				}
				if (n.id)		
					tmp[n.id] = n
			}
		}
		return tmp;
	});

  HTMLElement.prototype.__defineGetter__("parentElement", function () 
  { 
      var parentEle = this.parentNode;
      while ( (parentEle != null) && (parentEle.nodeType != 1)) parentEle = parentEle.parentNode;      
      return parentEle; 
  });
  
  HTMLElement.prototype.__defineGetter__("previousSibling", function () { return(this.previousElementSibling); });

  HTMLElement.prototype.__defineGetter__("XMLDocument", function () { 
    return ((new DOMParser()).parseFromString(this.innerHTML, "text/xml"));
  });

   var _emptyTags = {
      "IMG":   true,
      "BR":    true,
      "INPUT": true,
      "META":  true,
      "LINK":  true,
      "PARAM": true,
      "HR":    true
   };

   HTMLElement.prototype.__defineGetter__("outerHTML", function () {
      var attrs = this.attributes;
      var str = "<" + this.tagName;

      for (var i = 0; i < attrs.length; i++) str += " " + attrs[i].name + "=\"" + attrs[i].value + "\"";

      if (_emptyTags[this.tagName])
         return str + ">";

      return str + ">" + this.innerHTML + "</" + this.tagName + ">";
   });

   HTMLElement.prototype.__defineSetter__("outerHTML", function (sHTML) {
      var r = this.ownerDocument.createRange();
      r.setStartBefore(this);
      var df = r.createContextualFragment(sHTML);
      this.parentNode.replaceChild(df, this);
   });

  HTMLElement.prototype.removeNode = function () 
  {
      var parent = this.parentNode;
      if (parent != null) parent.removeChild(this);
  };

  Event.prototype.__defineGetter__("offsetX", function () { return this.layerX; });

  Event.prototype.__defineGetter__("offsetY", function () { return this.layerY; });

  HTMLElement.prototype.__defineGetter__("firstChild", function ()  { return (this.firstElementChild);} );
  
  Error.prototype.__defineGetter__("description", function () {
    var sCRLF = "\x0D\x0A\x0D\x0A"; 
    var sDescription = sCRLF;
    sDescription += ((typeof this.message != "undefined") ? "Description: " + this.message : "") + sCRLF;
    sDescription += ((typeof this.fileName != "undefined") ? "File Name: " + this.fileName : "") + sCRLF;
    sDescription += ((typeof this.lineNumber != "undefined") ? "Line Number: " + this.lineNumber : "") + sCRLF;
    sDescription += ((typeof this.stack != "undefined") ? "Stack: " + this.stack : "") + sCRLF;
    sDescription += ((typeof this.name != "undefined") ? "Name: " + this.name : "") + sCRLF;
    return sDescription;
  });


  
  HTMLElement.prototype.attachEvent = function(eventName, fHandler) {
      fHandler._wrapHandler = function(e) {
      window.event = e;
          fHandler(e);
          return (e.returnValue);
      };

      this.addEventListener(eventName.substr(2), fHandler._wrapHandler, false);
  };

  HTMLElement.prototype.detachEvent = function (eventName, fHandler) {
    if (fHandler._wrapHandler != null)
      this.removeEventListener(eventName.substr(2), fHandler._wrapHandler, false);
  };

  Document.prototype.attachEvent = function(eventName, fHandler) {
      fHandler._wrapHandler = function(e) {
      window.event = e;
          fHandler(e);
          return (e.returnValue);
      };

      this.addEventListener(eventName.substr(2), fHandler._wrapHandler, false);
  };

  Document.prototype.detachEvent = function (eventName, fHandler) {
    if (fHandler._wrapHandler != null)
      this.removeEventListener(eventName.substr(2), fHandler._wrapHandler, false);
  };

  Document.prototype.__defineGetter__("parentWindow", function () {
        return this.defaultView;
  });
      
   Event.prototype.__defineGetter__("srcElement", function () {
   var node = this.target;
   while (node.nodeType != 1) { node = node.parentElement; }
   if (node != this.target) alert("Unexpected event.target!") 
   return node;
  });

	Event.prototype.__defineGetter__("fromElement", function () {
		var node;
		if (this.type == "mouseover")
			node = this.relatedTarget;
		else if (this.type == "mouseout")
			node = this.target;
		if (!node) return;
		while (node.nodeType != 1) node = node.parentElement;
		return node;
	});

	Event.prototype.__defineGetter__("toElement", function () {
		var node;
		if (this.type == "mouseout") node = this.relatedTarget;
		else if (this.type == "mouseover") node = this.target;
		if (!node) return;
		while (node.nodeType != 1) node = node.parentElement;
		return node;
	});
    
  
  Event.prototype.__defineSetter__("cancelBubble", function (b) {
    if (b) this.stopPropagation();
  });


  Event.prototype.__defineSetter__("returnValue", function (b) {
    if (!b) this.preventDefault();
    this._returnValue = b;
    return(b);
  });

  Event.prototype.__defineGetter__("returnValue", function () {
    return (this._returnValue);
  });

  XMLDocument.prototype.selectSingleNode = function(xPath) {
    var doc = this;
    if (doc.nodeType != 9)
      doc = doc.ownerDocument;
    if (doc.nsResolver == null) doc.nsResolver = function(prefix) { return(null); };
    var node = doc.evaluate(xPath, this, doc.nsResolver, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    if (node != null) node = node.singleNodeValue;
    return(node);
  }; 

  Node.prototype.__defineGetter__("text", function () {
    return(this.textContent);
  }); 
};

/* END CROSS BROWSER EXTENSIONS */
/* END CROSS BROWSER EXTENSIONS */
/* END CROSS BROWSER EXTENSIONS */
/* END CROSS BROWSER EXTENSIONS */

var __NET_ExternalContainer = false; /* Indicates .NET external container exists */     

function __NET_SetExternalContainer() { __NET_ExternalContainer = true; };
    
function pathOnly(InString)
{
   LastSlash=InString.lastIndexOf('/',InString.length-1);
   OutString=InString.substring(0,LastSlash+1);
   return(OutString);
}

function SetSelect(HTMLName, Name,Row,Column,Select)
{
   var objSourceObject = document.getElementsByName(HTMLName);

   if ( ( objSourceObject != null ) && (objSourceObject[0] != null ) ) objSourceObject[0].select();

   document.LANSA._SELECT.value=Select;
   SetNameLocation(Name,Row,Column);
   document.LANSA._CALFLD.value=HTMLName;
}
function SetNameLocation(Name,Row,Column)
{
   var objSourceObject = document.getElementsByName(Name);

   if ( ( objSourceObject != null ) && (objSourceObject[0] != null ) ) objSourceObject[0].select();
                
   document.LANSA._NAME.value=Name;
   document.LANSA._ROW.value=Row;
   document.LANSA._COLUMN.value=Column;
   document.LANSA._CALFLD.value=Name;
}

function WEBEVENT_HandleEvent(Proc,Func,oArg3,oArg4,oArg5)
{
   if ( __NET_ExternalContainer ) 
   {
      var uArg3 = ""; var uArg4 = ""; var uArg5 = "";  
      if (oArg3 != null) uArg3 = oArg3;
      if (oArg4 != null) uArg4 = oArg4;
      if (oArg5 != null) uArg5 = oArg5;
      window.external.__NET_HandleEvent(Proc,Func,uArg3,uArg4,uArg5);  
      return;   
   } 

   if ( !UF_DebugMode ) document.LANSA.action += "+BDEBUG+" + UF_Device + UF_MsgQ;

   if ( !UF_UseTaskId ) document.LANSA.action+="+TASK_ID+" + UF_TaskId;

   document.LANSA._PROCESS.value=Proc;
   document.LANSA._FUNCTION.value=Func;
   document.LANSA.submit();
}

function isValidNumeric(theObj, integers,decimals,decimalPoint)
{
   var FieldValue = theObj.value;
   var returnString = "";
   var befdecCount = 0;
   var PastDec = false;
   var aftdecCount = 0;
   for (var i = 0; i < FieldValue.length; i++)
   {
      if (isDigit(FieldValue.charAt(i)))
      {
         if (PastDec)
         {
            aftdecCount++
            if (aftdecCount <= decimals)
               returnString += FieldValue.charAt(i)
         }
         else
         {
            befdecCount++
            if (befdecCount <= integers)
               returnString += FieldValue.charAt(i)
         }
      }
      else
      {
         if (FieldValue.charAt(i) == decimalPoint)
            PastDec = true
         returnString += FieldValue.charAt(i);
      }
   }
   if ((befdecCount > integers) || (aftdecCount > decimals))
   {
      alert("Allowable digits before decimal point = " + integers +
              "\nAllowable digits after decimal point = " + decimals +
              "\nData will be truncated accordingly.")
      theObj.value = returnString
         return false
   }
   return true
}
function isDigit(theDigit)
{
   digitArray = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
   for (var j = 0; j < digitArray.length; j++)
      if (theDigit == digitArray[j])
         return true
   return false
}

function isValidDBCS(theObj,KeybdShift,EBCDICLength)
{
   var FieldValue = theObj.value;
   var returnString = "";
   var totalDBCS = 0;
   var totalSBCS = 0;
   var totalLength = 0;
   var inDBCS = false;
   for (var i = 0; i < FieldValue.length; i++)
   {
      if (isDBCSChar(FieldValue.charAt(i)))
      {
         if (!inDBCS)
         {
            inDBCS = true
            totalLength+=2
         }
            totalLength += 2;
            if ((totalLength <= EBCDICLength) && (KeybdShift != 'A'))
            {
               returnString += FieldValue.charAt(i)
               returnString += FieldValue.charAt(i+1)
            }
            totalDBCS++
            i++
         }
         else
         {
            totalLength += 1;
            if ((totalLength <= EBCDICLength) && (KeybdShift != 'J'))
               returnString += FieldValue.charAt(i)
            if (inDBCS) inDBCS = false
            totalSBCS++
         }
      }
      if (totalLength > EBCDICLength)
      {
         alert("Converted length of characters entered is " + totalLength +
                 "\nwhich exceeds the maximum allowable length of " + EBCDICLength +
                 "\nData will be truncated accordingly.")
         theObj.value = returnString
         return false
      }
      if ((KeybdShift == 'J') && (totalSBCS > 0))
      {
         alert("Only DBCS characters are allowed in this field.\n" +
                 totalSBCS + " SBCS characters have been entered.\n" +
                 "SBCS characters will be removed.")
         theObj.value = returnString
         return false
      }
      if ((KeybdShift == 'E') && (totalSBCS > 0) && (totalDBCS > 0))
      {
         alert("Either all DBCS characters or all SBCS characters " +
                 "are allowed in this field.\n" +
                 totalSBCS + " SBCS characters have been entered.\n" +
                 totalDBCS + " DBCS characters have been entered.\n" +
                 "Please modify field data accordingly.")
         return false
      }
      if ((KeybdShift == 'A') && (totalDBCS > 0))
      {
         alert("Only SBCS characters are allowed in this field.\n" +
                 totalDBCS + " DBCS characters have been entered.\n" +
                 "DBCS characters will be removed.")
         theObj.value = returnString
         return false
      }
      return true
}
function isDBCSChar(theChar)
{
   if (((theChar >= '\x81') && (theChar <= '\x9F')) ||
       ((theChar >= '\xE0') && (theChar <= '\xFC')))
      return true
   return false
}

function SetFocus()
{
   var NumElements=document.LANSA.elements.length;

   for (i=0; i<NumElements;i++)
   {
      if (document.LANSA.elements[i].type=="select-one" ||
          document.LANSA.elements[i].type=="checkbox" ||
          document.LANSA.elements[i].type=="textarea" ||
          document.LANSA.elements[i].type=='text')
      {
         if (document.LANSA.elements[i].value!="")
            document.LANSA.elements[i].select();
         document.LANSA.elements[i].focus();
         break;
      }
   }
}
function preload(imgObj,imgSrc)
{
   if (document.images)
   {
      eval(imgObj+' = new Image()');
      eval(imgObj+'.src = "'+imgSrc+'"');
   }
}
function changeImage(layer,imgObj, imgName)
{
   if (document.images)
   {
      if (document.layers && layer!=null)
         eval('document.'+layer+'.document.images["'+imgName+'"].src = '+imgObj+'.src');
      else
         document.images[imgName].src = eval(imgObj+".src");
   }
}
function CheckNUpdate(Fld, Value)
{
   var NumElements=document.LANSA.elements.length;

   for (i=0; i<NumElements;i++)
   {
      if (document.LANSA.elements[i].name==Fld)
      {
         document.LANSA.elements[i].value=Value;
         break;
      }
   }
}
function FieldExists(Fld)
{
   var NumElements=document.LANSA.elements.length;

   for (i=0; i<NumElements;i++)
   {
      if (document.LANSA.elements[i].name==Fld)
         return true;
   }
  return false;
}
function SetState(obj, RFld, chkValue, unchkValue)
{
  var NumElements=document.LANSA.elements.length;

  for (i=0; i<NumElements;i++)
  {
    if (document.LANSA.elements[i].name==RFld)
    {
      if (obj.checked)
         document.LANSA.elements[i].value=chkValue;
      else
         document.LANSA.elements[i].value=unchkValue;
      break;
    }
  }
}
function GetFieldValue(RFld)
{
  var NumElements=document.LANSA.elements.length;

  for (i=0; i<NumElements;i++)
  {
    if (document.LANSA.elements[i].name==RFld)
         return document.LANSA.elements[i].value;
  }
  return null;
}

function SetCBState(obj, RFld, CY, CN)
{
   var NumElements=document.LANSA.elements.length;

   for (i=0; i<NumElements;i++)
   {
      if (document.LANSA.elements[i].name==RFld)
      {
         if (obj.checked)
            document.LANSA.elements[i].value=CY;
         else
            document.LANSA.elements[i].value=CN;
         break;
      }
   }
}
function StartFunction(URL)
{
  var win;
  win=window.open("","TESTFNC");
  if (win != null)
    win.location=URL;
  win.focus();
}
function ECSelect(proc,fun,ECparm)
{
  document.LANSA.action += '+FUNCPARMS+ECPARM(A0500):' + ECparm;
  WEBEVENT_HandleEvent(proc, fun);
}
