/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */
/* ======================================================================================================================================================= */
/* NOTE: THE FIRST SECTION OF THIS FILE CONTAINS THE CROSS BROWSER EXTENSIONS.                                                                             */
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
