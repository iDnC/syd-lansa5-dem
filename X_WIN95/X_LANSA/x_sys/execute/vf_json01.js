/*!
	(c) 2011, 2014 LANSA
	JSON Handler Scripts (Standalone)
	UTC Date: 2014-07-10 02:03:24Z
*/
﻿/*
	String prototype extensions
	$Workfile:: string.extensions.js        $
	$UTCDate:: 2014-07-07 05:28:22Z         $
	$Revision:: 1                           $
*/

/**
 * Return the string padded with leading zeros
 * @param {Integer} Number of zeros
 * @returns {String}
 */
String.prototype.zeropad = function(l) {
	var s = '', i = this.length;
	while (i++ < l) { s += '0'; }
	return s + this;
}

/**
* Left pads the string
* @param {Integer} length The length of the result string.
* @param {String} padWith The character to pad the string with.  If longer than one character, only the first is used. If empty a space is used.
* @returns {String}
*/
String.prototype.lpad = function(len, pad) {
	pad = (!pad) ? " " : pad.substring(0,1);
	return (len -= this.length) > 0 ? (new Array(len + 1).join(pad) + this) : "" + this;
};

/**
* Right pads the string
* @param {Integer} length The length of the result string.
* @param {String} padWith The character to pad the string with.  If longer than one character, only the first is used. If empty a space is used.
* @returns {String}
*/
String.prototype.rpad = function(len, pad) {
	pad = (!pad) ? " " : pad.substring(0,1);
	return (len -= this.length) > 0 ? (this + new Array(len + 1).join(pad)) : "" + this;
};

String.prototype.ltrim = function() { return this.replace(/^\s+/g, ""); }
String.prototype.rtrim = function() { return this.replace(/\s+$/g, ""); }
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); }
﻿/*
	Number prototype extensions
	$Workfile:: number.extensions.js        $
	$UTCDate:: 2014-07-07 05:37:46Z         $
	$Revision:: 1                           $
*/

/**
 * Return the number as a string padded with leading zeros
 * @param {Integer} Number of zeros
 * @returns {String}
 */
// Requires string.extensions.js
Number.prototype.zeropad = function(l) { return this.toString().zeropad(l); }
/*
	Namespace definition
	$Workfile:: lstd.namespace.js           $
	$UTCDate:: 2014-06-25 23:59:19Z         $
	$Revision:: 4                           $
*/
/**
 * @namespace
 */
Lstd = window.Lstd || {};
/*
	Utils namespace definition
	$Workfile:: lstd.utils.namespace.js     $
	$UTCDate:: 2014-06-26 06:01:55Z         $
	$Revision:: 1                           $
*/
/**
 * @namespace
 */
Lstd.Utils = window.Lstd.Utils || {};
﻿/*
	Maps arguments to API options
	$Workfile:: lstd.utils.maparg2option.js $
	$UTCDate:: 2014-06-26 01:05:00Z         $
	$Revision:: 1                           $
*/
/**
	* Adds the options passed as arguments to weblets to the options map of jQuery widgets.
	* @param {Object} args An object hash
	* @param {Object} options An object hash
	* @param [String] names An array of property names to copy from arg to options.
	* @return {Object} The updated options object (The object is updated in place so you don't need to use this value)
	*/
Lstd.Utils.mapArg2Option = function(args, options, names) {
	for (i in names) {
		var nm = names[i];
		if (args[nm] != undefined) options[nm] = args[nm];
	}
};
﻿/*
	WAM context getters and setters
	$Workfile:: lstd.utils.context.js       $
	$UTCDate:: 2014-07-04 06:17:16Z         $
	$Revision:: 3                           $
*/

/*
 * This module is to be used only by Javascript files running outside LANSA.
 * This functions are available in the main Javascript files for each
 * Technology Service.
 */

/**
 * Gets the context item. Handles different Technology Services and non-LANSA pages
 * @param {string} The context item
 * @return {String} The context item or an empty string if not available.
 */
Lstd.Utils.getContext = function(item) {
	if (window.Lstd.Webroutine) return Lstd.Webroutine.getContext(item);

	if (window.jQuery && window.jQuery.mobile) {
		if (window.Lstd.wrContext && (Lstd.wrContext[item] != null)) {
			return Lstd.wrContext[item];
		}
		else {
			switch (item) {
				case "action-request": return "/cgi-bin/lansaweb";
				case "images-path": return "/images";
				case "session-key-name": return "_SESSIONKEY";
				case "technology-service": return "LANSA:JQMOBILE";
				default: return "";
			}
		}
	}
	else {
		switch (item) {
			case "action-request": return window.g_lxmlAR || "/cgi-bin/lansaweb";
			case "dec-separator": return window.g_lxmlDecSeparator || "";
			case "images-path": return window.g_lweb_images_path || "/images";
			case "iso-lang": return window.g_lxmlISOLang || "";
			case "language": return window.g_lxmlLang || "";
			case "partition": return window.g_lxmlPartition || "";
			case "service-name": return window.g_lxmlServiceName || "";
			case "session-key": return window.g_lxmlSK || "";
			case "session-key-name": return "_SESSIONKEY";
			case "session-key-method": return window.g_lmxlSKMethod || "";
			case "technology-service": return window.g_lxmlTs || "LANSA:XHTML";
			case "webapplication": return window.g_lxmlWAMName || "";
			case "webroutine": return window.g_lxmlWAMName || "";
			default: return "";
		}
	}
};
/**
 * Sets the context item. Handles different Technology Services and non-LANSA pages
 * @param {string} The context item
 * @param {string} The context item value
*/
Lstd.Utils.setContext = function(item, value) {
	if (window.jQuery && window.jQuery.mobile) {
		if (!window.Lstd.wrContext) window.Lstd.wrContext = {};
		window.Lstd.wrContext[item] = value;
	}
	else {
		switch (item) {
			case "action-request":
				window.g_lxmlAR = value;
				break;
			case "dec-separator":
				window.g_lxmlDecSeparator = value;
				break;
			case "images-path":
				window.g_lweb_images_path = value;
				break;
			case "iso-lang":
				window.g_lxmlISOLang = value;
				break;
			case "language":
				window.g_lxmlLang = value;
				break;
			case "partition":
				window.g_lxmlPartition = value;
				break;
			case "service-name":
				window.g_lxmlServiceName = value;
				break;
			case "session-key":
				window.g_lxmlSK = value;
				break;
			case "session-key-method":
				window.g_lmxlSKMethod = value;
				break;
			case "technology-service":
				window.g_lxmlTs = value;
				break;
			case "webapplication":
				window.g_lxmlWAMName = value;
				break;
			case "webroutine":
				window.g_lxmlWAMName = value;
				break;
		}
	}
};
﻿/*
	WAM options getters and setters
	$Workfile:: lstd.utils.option.js        $
	$UTCDate:: 2014-07-07 00:15:00Z         $
	$Revision:: 2                           $
*/

/*
 * This module is to be used only by Javascript files running outside LANSA.
 * This functions are available in the main Javascript files for each
 * Technology Service.
 */

/**
 * Gets the WAM option. Handles different Technology Services and non-LANSA pages
 * @param {string} The option
 * @return {string} The option value or an empty string if not available.
 */
Lstd.Utils.getOption = function(option) {
	if (window.Lstd.Webroutine) return Lstd.Webroutine.getOption(option);

	if (window.jQuery && window.jQuery.mobile) {
		if (window.Lstd.wrOptions && (Lstd.wrOptions[option] != null)) {
			return Lstd.wrOptions[option];
		}
		else {
			switch (option) {
				case "debug": return "false";
				case "trace": return "false";
				default: return "";
			}
		}
	}
	else {
		switch (option) {
			case "debug": return window.g_debug || "false";
			case "trace": return window.g_lw3Trace || "false";
			default: return "";
		}
	}
};
/**
 * Sets the option value. Handles different Technology Services and non-LANSA pages
 * @param {string} The option
 * @param {string} The option value
*/
Lstd.Utils.setOption = function(option, value) {
	if (window.jQuery && window.jQuery.mobile) {
		if (!window.Lstd.wrOptions) window.Lstd.wrOptions = {};
		window.Lstd.wrOptions[option] = value;
	}
	else {
		switch (option) {
			case "debug":
				window.g_debug = value;
				break;
			case "trace":
				window.g_lw3Trace = value;
				break;
		}
	}
};
﻿/*
	DOM related helper utilities
	$Workfile:: lstd.utils.dom.js           $
	$UTCDate:: 2014-07-04 05:44:53Z         $
	$Revision:: 1                           $
*/
/**
 * Creates a named element
 * @param {Object} The document
 * @param {String} The element type
 * @param [String] The element name attribute
 * @return {Object} The DOM element
 */
Lstd.Utils.createNamedElement = function(doc, type, name) {
	var elem = doc.createElement(type);
	elem.name = name;
	return elem;
};
/**
 * Inserts a hidden field in a form
 * @param {object} form The form to add the field to.
 * @param {String} fieldName The name of the field to add.
 * @param {String} fieldValue The value to place in the field.
 */
Lstd.Utils.insertHiddenField = function(form, fieldName, fieldValue) {
	if (form == null) return null;
	if (!fieldName) return null;
	if (!fieldValue) fieldValue = "";
	var field = form.elements[fieldName];
	if (field == null) {
		field = Lstd.Utils.createNamedElement(form.ownerDocument, 'input', fieldName);
		field.setAttribute("type", "hidden");
		field.setAttribute("value", fieldValue);
		form.appendChild(field);
	}
	else {
		field.value = fieldValue;
	}
	return field;
};
﻿/*
	HTTP module
	$Workfile:: lstd.http.js                $
	$UTCDate:: 2014-07-10 01:47:04Z         $
	$Revision:: 11                          $
*/

Lstd.VLF = {

   statusMessage : function (s) {
   
      VF_System.objVF_UM007.StatusMessage(s, "G");
   },

   extractJsonErrors : function (oError) {

      var msgs = oError.postErrors.messages();
      var msgText = oError.initString;
      
      msgs.each(function(m) { msgText += m; });
      
      if (oError.shutdown) 
      {
         VF_System.ShutDown( msgText, false, true);
      }
      else
      {
         return msgText;
      }
   },
   
   shutDown : function (s) {
   
      VF_System.ShutDown(s, false, true);
   },
   
   trace : function (s) {
   
      if (VF_TraceMode) 
      {
         VF_System.Trace( s ); 
      }
   }   

};

/**
 * Manages HTTP Requests for ajax and form posting
 * @namespace
 */
Lstd.HTTP = {
	/**
	 * Represents an HTTP request
	 * @class
	 * @property {String} wam
	 * @property {String} webroutine
	 * @property {String} partition
	 * @property {String} language
	 * @property {String} protocol
	 * @property {String} hostname
	 * @property {String} hostname
	 * @property {String} method
	 * @property {Boolean} cache
	 * @property {Boolean} async (for Ajax request)
	 */
	Request: function() {
		this.wam = Lstd.Utils.getContext("webapplication");
		this.webroutine = Lstd.Utils.getContext("webroutine");
		this.partition = Lstd.Utils.getContext("partition");
		this.language = Lstd.Utils.getContext("language");
		this.protocol = "";
		this.hostname = "";
		this.document = document;
		this.async = true;
		this.cache = false;
		this.tsp = Lstd.Utils.getContext("technology-service");
		this.sessionKeyMethod = Lstd.Utils.getContext("session-key-method");
		this.sessionKey = Lstd.Utils.getContext("session-key");
		this._fields = {
			"_SERVICENAME": Lstd.Utils.getContext("service-name"),
			"_WEBAPP": this.wam,
			"_WEBROUTINE": this.webroutine,
			"_PARTITION": this.partition,
			"_LANGUAGE": this.language,
			"_LW3TRCID": ""
		};
		this._lists = {};
		if (this.sessionKeyMethod == "hidden") this._fields["_SESSIONKEY"] = this.sessionKey;
		this.method = ((this.sessionKeyMethod != "hidden") || (this.sessionKey == "")) ? "GET" : "POST";

		this.getURL = function() {
			// Return the url to use (will have fields added to it if this.method == GET
			var url = "", params, fields, fName;
			if ((this.protocol != null) && (this.protocol.length > 0))
			{
				url += this.protocol + "//" + this.hostname;
				if (!this.hostname) {
					url += (this.document || document).location.host;
				}
			}
			url += (Lstd.Utils.getContext("action-request") || "/cgi-bin/lansaweb") + "?";
			
			var params = ["wam=" + this.wam, "webrtn=" + this.webroutine, "ml=" + this.tsp, "part=" + this.partition, "lang=" + this.language],
				debug = Lstd.Utils.getOption("debug");
			
			if ((debug != null) && (debug.length > 0)) params.push("debug=" + debug);
			if ((this.sessionKeyMethod == "url") && (this.sessionKey != "")) params.push("sid=" + this.sessionKey);
			
			if (this.method.toUpperCase() == "GET") {
				fields = this.getFieldsMap();
				for (fName in fields) {
					params.push("f%28" + fName + "%29=" + encodeURIComponent(fields[fName]));
				}
			}
			return url + params.join("&");
		}
		this.getFieldsMap = function() {
			// return a map of fields to be sent with an ajax POST.
			var retVal = {}, name, list, i, row, colName;
			for (name in this._fields) {
				retVal[name] = this._fields[name];
			}
			for (name in this._lists) {
				list = this._lists[name];
				retVal[name + ".."] = list.length;
				for (i = 0, row; row = list[i]; i++) {
					row = list[i];
					for (colName in row) {
						retVal[[name,(i + 1).zeropad(4),colName].join(".")] = row[colName];
					}
				}
			}
			return retVal;
		}
		this.addField = function(name, value) {
			this._fields[name] = value.toString();
		}
		this.addFields = function(fieldMapOrArray) {
			var i, field, fieldName;
			if (fieldMapOrArray.length) {
				for (i = 0; i < fieldMapOrArray.length; i++) {
					field = fieldMapOrArray[i];
					if (field) this._fields[field.name] = field.value.toString();
				}
			} else {
				for (fieldName in fieldMapOrArray) {
					this._fields[fieldName] = fieldMapOrArray[fieldName].toString();
				}
			}
		}
		this.addList = function(name, rows) {
			// add a list where rows is an array of maps: [{colname: "value", colname: "value"}, {...}]
			this._lists[name] = rows;
		}
	},
	/**
	 * Represents an HTML form used for posting data to the server
	 * @class
	 * @param {String|Form} The form or or name of the form to post. If a name is supplied and one doesn't exist, it will be created.
	 * @param {Object} doc
	 */
	Form: function(theForm, doc) {
		// Returns a modified version of Lstd.HTTP.Request
		var retVal = new Lstd.HTTP.Request();
		retVal.form = null;
		retVal.target = null;
		var formCreated = false;
		
		if (theForm) {
			if ((typeof(theForm) == "string") && (theForm.length > 0)) {
				doc = (doc && doc.forms) ? doc : document;
				retVal.document = doc;
				var f = doc.forms[theForm];
				if (f == null) {
					f = Lstd.Utils.createNamedElement(doc, 'form', theForm);
					f.style.display = "none";
					f.setAttribute("method", "POST");
					formCreated = true;
				}
				retVal.form = f;
			} else if (theForm.submit) {
				retVal.form = theForm;
				retVal.document = theForm.document || theForm.ownerDocument;
			}
		}

		retVal.submitForm = function() {
			// submit (and then restore) the previously prepared form.
			if (this._form == null) return;
			this.method = "POST";
			
			var i, name, colName, list, field, f = this.form, fields = this.getFieldsMap(), done = false;
			for (name in this._fields) {
				Lstd.Utils.insertHiddenField(f, name, fields[name]);
			}
			for (name in this._lists) {
				list = this._lists[name]
				Lstd.Utils.insertHiddenField(f, name + "..", list.length);
				for (i = 0, row; row = list[i]; i++) {
					row = list[i];
					for (colName in row) {
						Lstd.Utils.insertHiddenField(f,[name,(i + 1).zeropad(4),colName].join("."), row[colName]);
					}
				}
				// Now delete any extra rows that may be present from previous actions
				while (!done) {
					for (i = 0, row; row = list[i]; i++) {
						row = list[i];
						for (colName in row) {
							field = f.elements[colName]
							if (field) {
								field.parentNode.removeChild(field);
							} else {
								done = true;
								break;
							}
						}
						i++;
					}
				}
			}
			
			var backupAction = f.action;
			var backupTarget = f.target;
			f.action = this.getURL();
			f.target = this.target;
			if (window.Lstd.Messaging) Lstd.Messaging.sendMessage(f.name + ".submit"); // Inform listeners
			f.submit(); // Asynch in Chrome
			setTimeout(function() { 
				if (formCreated) {
					f.parentNode.removeChild(f);
				} else {
					f.action = backupAction;
					f.target = backupTarget;
				}
			}, 100);
		};
		return retVal;
	},
	/**
	 * Ajax request
	 * @param [object] options
	 */
	ajax: function(args) {
		if (window.jQuery) {
			var options = {};
			Lstd.Utils.mapArg2Option(args, options, ["url", "type", "cache", "async", "dataType", "data", "contentType", "scriptCharset", "success", "error"]);
			jQuery.ajax(options);
		}
		else {
			var xhr = new XMLHttpRequest(), type = (args.type || "GET"), async = (args.async == null ? true : args.async), url = args.url,
				doPost = (args.type === "POST"), isJSON = (args.dataType === "json");

			if (async) {
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							if (args.success) {
								try {
									var data = isJSON ? JSON.parse(xhr.responseText) : xhr.responseText;
									args.success(data);
								}
								catch (e) {

								   Lstd.VLF.shutDown("async Lstd.HTTP.ajax " + VF_System.MString(325) + e.message);
								}
							}
						}
						else {
							if (args.error) {
								try {
									args.error(xhr, (xhr.status + ": " + xhr.statusText), null);
								}
								catch (e) {

 								   Lstd.VLF.shutDown("async Lstd.HTTP.ajax " + VF_System.MString(326) + e.message);
								}
							}
							else {
 								   Lstd.VLF.shutDown("async Lstd.HTTP.ajax " + VF_System.MString(327) + xhr.status + ":" + xhr.statusText);
							}
						}
					}
				};
			}

			if (args.cache === false) {
				// Only add timestamp if not already present
				if (url.match(/&_=\d{13}/) == null) {
					url += ("&_=" + (new Date()).getTime());
				}
			}

			xhr.open(type, url, async);

			if (isJSON) {
				xhr.setRequestHeader("Accept", "application/json, text/javascript");
			}
			if (args.contentType) {
				xhr.setRequestHeader("Content-Type", args.contentType);
			}

			doPost ? xhr.send(args.data) : xhr.send();

			if (!async) {
				if (xhr.status == 200) {
					if (args.success) {
						try {
							var data = isJSON ? JSON.parse(xhr.responseText) : xhr.responseText;
							args.success(data);
						}
						catch (e) {
                     
                     Lstd.VLF.shutDown("sync Lstd.HTTP.ajax " + VF_System.MString(328) + e.message);
						}
					}
				}
				else {
					if (args.error) {
						try {
							args.error(xhr, (xhr.status + ": " + xhr.statusText), null);
						}
						catch (e) {
 							  Lstd.VLF.shutDown("sync Lstd.HTTP.ajax " + VF_System.MString(329) + e.message);
						}
					}
				}
			}
		}
	},
	/**
	 * Executes a webroutine
	 * @param {Lstd.HTTP.Request} request
	 * @param {Function} Success callback
	 * @param {Function} Error callback
	 */
	getWebroutine: function(request, successCB, errorCB) {
		Lstd.HTTP.ajax({
			url: request.getURL(),
			type: request.method,
			async: (request.async == null) ? true : request.async,
			cache: request.cache,
			dataType: "json",
			data: (request.method == "POST") ? request.getFieldsMap() : null,
			success: function(data) {
				if (typeof successCB == "function") {
					var wr = data;
					if (window.Lstd.Json && Lstd.Json.isWebroutine(data)) {
						wr = Lstd.Json.factory(data);
						Lstd.Utils.setContext("session-key", wr.context("session-key"));
						Lstd.Utils.setContext("session-key-method", wr.context("session-key-method"));
					}
					try {
						successCB(wr);
					}
					catch (e) {
					
                  Lstd.VLF.shutDown("Lstd.HTTP.getWebroutine " + VF_System.MString(325) + e.message);
					}
				}
				else
				{
				   Lstd.VLF.trace("Lstd.HTTP.getWebroutine - no success callback function specified");
				}
			},
			error: function(xhr, s, e) {
				if (errorCB && (typeof errorCB == "function")) {
					var er = null;
					if (window.Lstd.Json) {
						var responseText = xhr.responseText;
						if (responseText.length > 0) {
							try {
								var obj = JSON.parse(responseText);
								er = Lstd.Json.factory(obj);
							}
							catch (e2) {}
						}
					}
					if (er == null) {
						er = Lstd.Json.makeError(s);
						if (e) {
							var msgs = er.messages();
							msgs.add(e);
						}
					}
					try {
						errorCB(er);
					}
					catch (e) {
					
                  Lstd.VLF.shutDown("Lstd.HTTP.getWebroutine " + VF_System.MString(326) + e.message);					
					}
				}
				else {

                 Lstd.VLF.trace("Lstd.HTTP.getWebroutine - no error callback function specified");
				}
			}
		});
	}
};
﻿/*
	JSON Handler Scripts Main Module
	$Workfile:: lstd.json.main.js           $
	$UTCDate:: 2014-07-10 01:47:04Z         $
	$Revision:: 8                           $
*/
/**
 * @namespace JSON convenience functions
 */
Lstd.Json = {

	/**
	* @namespace internal methods. Not for public use.
	* @Internal
	*/
	Internal: {
		/**
		 * Returns the object's property name at a given index position
		 * @param {object} The object
		 * @param [number] The index position
		 * @return [string] the property name at the index position or null if not found
		 */
		getPropertyNameAtIndex: function(obj, index) {
			var i = 0;
			for (x in obj) if (i++ == index) return x;
			return null;	
		},

		/**
		 * Find subobject. Finds the object in the parent object (by name or index position)
		 * and returns it.
		 * @param (string or number) Subjobject name (string) or index position (number)
		 * @param (boolean) Log exception if not found?
		 * @returns (object) The object
		 */
		findSubobject: function (o, type, parent, log) {
			var subobj = { id: null, obj: null };
			try {
				switch (typeof o) {
					case "string":
						subobj.id = o;
						subobj.obj = parent[o];
						if (!subobj.obj && log) throw (type + " " + o + " not found.");
						break;
					case "number":
						subobj.id = Lstd.Json.Internal.getPropertyNameAtIndex(parent, o);
						if ((subobj.id == null) && log) throw type + " not found at index " + o + ".";
						subobj.obj = parent[subobj.id];
						break;
					default:
						throw "Argument of type " + (typeof o) + " not valid. Must be a name or index.";
						break;
				}
			}
			catch (e) {
				console.error(e);
			}
			return subobj;
		},

		/**
		* Creates a skeleton webroutine object
		* @returns (object) The webroutine object
		*/
		createWebroutine: function () {
			var obj = {"webroutine":{"messages":[],"fields":{},"lists":{}}};
			var lmxlSKMethod = Lstd.Utils.getContext("session-key-method");
			var lxmlSK = Lstd.Utils.getContext("session-key");

			if (lmxlSKMethod && lxmlSK && (lmxlSKMethod === "hidden") && (lxmlSK !== "") ) {
				obj.webroutine["context"] = {};
				obj.webroutine.context["session-key"] = lxmlSK;
				obj.webroutine.context["session-key-method"] = "hidden";
				obj.webroutine.context["session-key-name"] = Lstd.Utils.getContext("session-key-name");
			}
			return obj;
		}
	},

	/**
	* @class Lstd.Json.Messages
	* @param Array of messages
	*/
	Messages: function (args) {
		this.messages = args ? args : [];

		/**
		* Returns the number of messages
		*/
		this.count = function () {
			return this.messages.length;
		};

		/**
		* Calls the function for each message passing a string message as a parameter
		* @param (function) Callback function to call for each message.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var i = 0; i < this.messages.length; i++) func(this.messages[i]);
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};

		/**
		* Adds a message
		* @param (string) message
		*/
		this.add = function (s) {
			if (typeof s == "string") {
				this.messages.push(s);
			}
			else {
				this.messages.push("" + s);
			}
			return this;
		}
	},

	/**
	* @class Lstd.Json.Field
	* @param Map with keys:
	*		id: Field id
	*		obj: JSON response field object
	*/
	Field: function (args) {
		this.id = args.id;
		this.field = args.obj;

		/**
		* Returns the field name
		* @returns (string) The field name
		*/
		this.name = function () {
			return this.id;
		};

		/**
		* Returns the field label
		* @returns (string) The field label
		*/
		this.label = function () {
			return this.field.caption.label;
		};

		/**
		* Returns the field description
		* @returns (string) The field description
		*/
		this.description = function () {
			return this.field.caption.description;
		};

		/**
		* Returns the field column headings in an array of strings
		* @returns (string array) The field column headings in an array of strings
		*/
		this.headings = function () {
			var caption = this.field.caption;
			return [
				caption["heading-1"] ? caption["heading-1"] : "",
				caption["heading-2"] ? caption["heading-2"] : "",
				caption["heading-3"] ? caption["heading-3"] : "",
			];
		};

		/**
		* Returns the field value
		* @returns (string) The field value
		*/
		this.value = function () {
			return this.field.value;
		};
	},

	/**
	* @class Lstd.Json.Fields
	* Fields provides an iterator to go through each field in the webroutine response.
	* @param (object) Webroutine response fields
	*/
	Fields: function (fields) {
		this.fields = fields;

		/**
		* Calls the function for each field passing an instance of Lstd.Json.Field as a parameter
		* @param (function) Callback function to call for each field.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var fld in this.fields) func(new Lstd.Json.Field({ id: fld, obj: this.fields[fld] }));
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};
	},

	/**
	* @class Lstd.Json.ListHeader
	* Wrapper for a webroutine list column header
	* @param (object) Webroutine response list column header
	*/
	ListHeader: function (header) {
		this.header = header;

		/**
		* Returns the column name
		* @returns (string) The column value
		*/
		this.name = function () {
			return this.header.name;
		};

		/**
		* Returns the column headings in an array of strings (if included in the response)
		* @returns The column headings in an array of strings (if included in the response)
		*/
		this.headings = function () {
			var h = this.header;
			return [
				h["heading-1"] ? h["heading-1"] : "",
				h["heading-2"] ? h["heading-2"] : "",
				h["heading-3"] ? h["heading-3"] : "",
			];
		};
	},

	/**
	* @class Lstd.Json.ListHeaders
	* Wrapper for a webroutine list headers
	* @param (object) Map with list name (id) and Webroutine response list column headers (obj)
	*/
	ListHeaders: function (args) {
		this.id = args.id;
		this.headers = args.obj;

		this.findByName = {};
		for (var i = 0, hdr; hdr = this.headers[i]; i++) this.findByName[hdr.name] = i;

		/**
		* Returns the index position of the column name
		* @param (string) Column name
		* @returns (number) The index position of the column name
		*/
		this.indexOf = function (name) {
			var index = this.findByName[name];
			return index >= 0 ? index : -1;
		};

		/**
		* Returns a Lstd.Json.ListHeader for the requested column name
		* @param (string) Column name
		* @returns (object) a Lstd.Json.ListHeader for the requested column name
		*/
		this.col = function (name) {
			var index = this.indexOf(name);
			return index >= 0 ? new Lstd.Json.ListHeader(this.headers[index]) : null;
		};

		/**
		* Calls the function for each list passing it a Lstd.Json.ListHeader instance
		* @param (function) Callback function to call for each list.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var i = 0, hdr; hdr = this.headers[i]; i++) func(new Lstd.Json.ListHeader(hdr));
			}
			catch (e) {
				console.error(e);
				throw e;
			}
			return this;
		};
	},

	/**
	* @class Lstd.Json.ListEntry
	* Wrapper for a webroutine list entry
	* @param (object) Map with row number (rowNumber), this list's header wrapper (header) and webroutine response list entry (obj)
	*/
	ListEntry: function (args) {
		this.rowNumber = args.rowNumber;
		this.listHeader = args.header;
		this.entry = args.obj;

		/**
		* Returns the row number for this list entry
		* @returns (number) The row number for this list entry
		*/
		this.row = function () {
			return this.rowNumber;
		};

		/**
		* Returns the value of the column
		* @param (string) column name
		*/
		this.col = function (name) {
			var index = this.listHeader.indexOf(name);
			return index >= 0 ? this.entry[index] : null;
		};

		/**
		* Returns the column id (list.row.colname)
		* @param (string) column name
		*/
		this.columnId = function (name) {
			var index = this.listHeader.indexOf(name);
			return index >= 0 ? (this.listHeader.id + "." + this.rowNumber.zeropad(4) + "." + name) : null;
		};

		/**
		* Calls the function for each column passing it the column value (native type)
		* @param (function) Callback function to call for each column in the list entry.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var i = 0, col; col = this.entry[i]; i++) func(col);
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};
		return this;
	},

	/**
	* @class Lstd.Json.ListEntries
	* Provides an interator to go through each entry in the list.
	* @param (object) Map with this list's header wrapper (header) and webroutine response list entries (obj)
	*/
	ListEntries: function (args) {
		this.listHeader = args.header;
		this.entries = args.obj;

		/**
		* Returns the row count
		* @return [number] the row count
		*/
		this.rowCount = function () {
			return this.entries ? this.entries.length : 0;
		};

		/**
		* Returns the column count
		* @return [number] the column count
		*/
		this.columnCount = function () {
			return this.entries ? (this.entries.length > 0 ? this.entries[0].length : 0) : 0;
		};

		/**
		* Calls the function for each entry passing it a Lstd.Json.ListEntry instance
		* @param (function) Callback function to call for each list entry.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var i = 0, entry; entry = this.entries[i]; i++) func(new Lstd.Json.ListEntry({ rowNumber: i + 1, header: this.listHeader, obj: entry }));
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};

		/**
		* Calls the function for each entry passing it the raw entry (array of values)
		* @param (function) Callback function to call for each list entry.
		*/
		this.rawEach = function (func) {
			try {
				if (typeof func == "function") for (var i = 0, entry; entry = this.entries[i]; i++) func(i, entry);
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};

		/**
		* Creates a new ListEntries with rows and columns transposed
		* @return (Object) ListEntries with rows and columns transposed. Note: header of returned ListEntries is null.
		*/
		this.transpose = function () {
			var entries = [];
			var nCols = this.entries.length;
			var nRows = nCols > 0 ? this.entries[0].length : 0;
			if (nCols && nRows) {
				entries = new Array(nRows);
				for (var i = 0; i < nRows; i++) {
					entries[i] = new Array(nCols);
					for (var j = 0; j < nCols; j++) entries[i][j] = this.entries[j][i];
				}
			}
			return new Lstd.Json.ListEntries({ header: null, obj: entries });
		};

		/**
		* Adds a row to the list entries
		* @param (array) The row
		*/
		this.add = function (row) {
			this.entries.push(row);
		};
	},

	/**
	* @class Lstd.Json.List
	* Wrapper for a webroutine list
	* @param (object) Map with this list's name (id) and webroutine response list (obj)
	*/
	List: function (args) {
		this.id = args.id;
		this.list = args.obj;
		this.listHeader = new Lstd.Json.ListHeaders({ id: this.id, obj: this.list.header });
		this.listEntries = new Lstd.Json.ListEntries({ header: this.listHeader, obj: this.list.entries });

		/**
		* Returns the list name
		* @returns (string) The list name
		*/
		this.name = function () {
			return this.id;
		};

		/**
		* If no argument passed, returns the headers in an instance of Lstd.Json.ListHeaders. If array of names
		* passed, it sets the headers of the list.
		* IMPORTANT: If the headers are set, the list column entries are cleared.
		* @param (array) Optional array of column names
		* @returns (object) The list headers in a Lstd.Json.ListHeaders
		*/
		this.headers = function (cols) {
			if (cols == null) {
				return this.listHeader;
			}
			else {
				if (cols instanceof Array) {
					this.list.header = [];
					for (var i = 0; i < cols.length; i++) {
						this.list.header.push({ "name": cols[i] });
					}
					this.list.entries = [];
					this.listHeader = new Lstd.Json.ListHeaders({ id: this.id, obj: this.list.header });
					this.listEntries = new Lstd.Json.ListEntries({ header: this.listHeader, obj: this.list.entries });
				}
				else {
					throw "Argument is not array of column names.";
				}
			}
		};

		/**
		* Returns the entries in an instance of Lstd.Json.ListEntries
		* @returns (object) The list entries in a Lstd.Json.ListEntries
		*/
		this.entries = function () {
			return this.listEntries;
		};

		/**
		 * Returns the object to serialize
		 * @returns (string) The JSON string representation of this object
		 */
		this.toJSON = function () {
			var tmp = {"list": {}};
			tmp.list[this.id] = this.list;
			return tmp;
		}

		/**
		* Posts the list in JSON format.
		* It calls the supplied callback function passing it the Lstd.Json.Wr object
		* @param (map) {wam: "wam_name", webroutine: "webrtn_name", callback: function()}
		*/
		this.post = function (args) {
			var wr = Lstd.Json.Internal.createWebroutine();
			wr.webroutine.lists[this.id] = this.list;
			Lstd.Json.post(args, wr);
		}
	},

	/**
	* @class Lstd.Json.Lists
	* Lists provides an interator to go through each list in the webroutine response.
	* @param (object) Webroutine response lists object
	*/
	Lists: function (lists) {
		this.lists = lists;

		/**
		* Calls the function for each list passing it a Lstd.Json.List instance
		* @param (function) Callback function to call for each list.
		*/
		this.each = function (func) {
			try {
				if (typeof func == "function") for (var list in this.lists) func(new Lstd.Json.List({ id: list, obj: this.lists[list] }));
			}
			catch (e) {
				console.error(e);
				throw e;
			}
		};
	},

	/**
	 * @class Lstd.Json.Error
	 * Wraps the error response sent by the server.
	 * @param (object) The JSON error response
	 */
	Error: function(er) {
		this.error = er;
		/**
		* Returns a wrapper for the messages in the webroutine
		* @returns (object) The messages in a Lstd.Json.Messages
		*/
		this.messages = function () {
			return new Lstd.Json.Messages(this.error.messages);
		};
	},

	/**
	* @class Lstd.Json.Wr
	* Wraps the webroutine response sent by the server.
	* @param (object) The JSON webroutine response
	*/
	Wr: function (wr) {
		this.webroutine = wr;

		/**
		* Returns the value of the context item
		* @param (string) The name of the context item
		*/
		this.context = function (item) {
			return this.webroutine.context[item];
		};

		/**
		* Returns a wrapper for the messages in the webroutine
		* @returns (object) The messages in a Lstd.Json.Messages
		*/
		this.messages = function () {
			return new Lstd.Json.Messages(this.webroutine.messages);
		};

		/**
		* Returns a wrapper for the fields in the webroutine
		* @returns (object) The fields in a Lstd.Json.Fields
		*/
		this.fields = function () {
			return new Lstd.Json.Fields(this.webroutine.fields);
		};

		/**
		* Returns a wrapper for the lists in the webroutine
		* @returns (object) The fields in a Lstd.Json.Lists
		*/
		this.lists = function () {
			return new Lstd.Json.Lists(this.webroutine.lists);
		};

		/**
		* Returns the field
		* @param (string or number)  Name (string) or index position (number - zero based index). Only use string if value is provided
		* @param (string or number)  Value (optional)
		* @returns (object) Field in a Lstd.Json.Field (only for getter)
		*/
		this.field = function (o, v) {
			if (v == null) {
				var fld = Lstd.Json.Internal.findSubobject(o, "field", this.webroutine.fields, true);
				return fld.obj ? new Lstd.Json.Field(fld) : null;
			}
			else {
				if (typeof o != "string") throw "Field name required!";
				this.webroutine.fields[o] = {"value": v};
			}
		};

		/**
		* Returns the list
		* @param (string or number)  Name (string) or index position (number - zero based index)
		* @returns (object) List in a Lstd.Json.List
		*/
		this.list = function (o) {
			var lst = Lstd.Json.Internal.findSubobject(o, "list", this.webroutine.lists, true);
			return lst.obj ? new Lstd.Json.List(lst) : null;
		};
		/**
		* Adds a list to the webroutine
		* @param (string)  Name (string)
		* @returns (object) List in a Lstd.Json.List. If list exists, it is returned
		* exists
		*/
		this.addList = function (name) {
			var lst = Lstd.Json.Internal.findSubobject(name, "list", this.webroutine.lists, false);

			if (lst.obj) {
				return new Lstd.Json.List(lst);
			}
			else {
				this.webroutine.lists[name] = { "header": [], "entries": [] };
				return this.list(name);
			}
		};

		/**
		* Posts the webroutine in JSON format.
		* It calls the supplied callback function passing it the Lstd.Json.List object
		* @param (map) {wam: "wam_name", webroutine: "webrtn_name", callback: function()}
		*/
		this.post = function (args) {
			Lstd.Json.post(args, this);
		}
	},

	/**
	* Wrapper factory. It creates and returns a wrapper for the JSON object
	* It returns null if the object is not a valid JSON response object
	* @param (object) Can be: 1. Webroutine object from JSON response  2. JSON List 3. Error 4. Empty
	* If null, it returns an empty webroutine wrapper.
	* @returns One of: Lstd.Json.Wr, Lstd.Json.List, Lstd.Json.Error or null.
	*/
	factory: function (obj) {

		if (obj == null) obj = Lstd.Json.Internal.createWebroutine();
		var otype = Lstd.Json.Internal.getPropertyNameAtIndex(obj, 0);
		switch (otype) {
			case "webroutine":
				return new Lstd.Json.Wr(obj[otype]);
				break;
			case "list":
				var lst = Lstd.Json.Internal.findSubobject(0, "list", obj[otype], true);
				return lst ? new Lstd.Json.List(lst) : null;
				break;
			case "error":
				return new Lstd.Json.Error(obj[otype]);
				break;
		}
		return null;
	},
	/**
	* Returns an error message wrapped in an Lstd.Json.Error object
	* @param 
	* @returns A Lstd.Json.Error
	*/
	makeError: function(msg) {
		var er = {error:{messages:[]}};
		er.error.messages.push(msg);
		return new Lstd.Json.Error(er);
	},

	/**
	* Returns true if the obj is a JSON response webroutine
	* @param (object)
	*/
	isWebroutine: function (obj) {
		return (obj != null) ? ((Lstd.Json.Internal.getPropertyNameAtIndex(obj, 0) == "webroutine") ? true: false) : false;
	},

	/**
	* Returns true if the obj is a JSON response error
	* @param (object)
	*/
	isError: function (obj) {
		return (obj != null) ? ((Lstd.Json.Internal.getPropertyNameAtIndex(obj, 0) == "error") ? true: false) : false;
	},

	/**
	* Request JSON response Webroutine.
	* It calls the supplied callback function passing it the Lstd.Json.Wr object
	* @param [map] "{wam: "wam_name", webroutine: "webrtn_name", fields: {}, callback: function(), error: function()"}
	*/
	getWebroutine: function (args) {
		var request = new Lstd.HTTP.Request();
		if (args.wam) request.wam = args.wam;
		if (args.webroutine) request.webroutine = args.webroutine;
		if (args.partition) request.partition = args.partition;
		if (args.language) request.language = args.language;
		if (args.fields) request.addFields(args.fields);

		if (args.lists) {
			for (listName in args.lists) {
				request.addList(listName, args.lists[listName]);
			}
		}
		try {
			Lstd.HTTP.getWebroutine(request, args.callback, args.error);
		}
		catch (e) {
			console("Lstd.Json.getWebroutine(): " + e);
		}
	},

	/**
	* Returns the object to serialize
	* @returns (string) The JSON string representation of this object
	*/
	toJSON: function () {
		return this.webroutine;
	},

	/**
	* Posts the object in JSON format.
	* It calls the supplied callback function passing it the object
	* @param (map) {wam: "wam_name", webroutine: "webrtn_name", callback: function()}
	* @param (object) The webroutine or list to post
	*/
	post: function(args, o) {
		var request = new Lstd.HTTP.Request();
		request.method = "POST";
		if (args.wam) request.wam = args.wam;
		if (args.webroutine) request.webroutine = args.webroutine;
		if (args.partition) request.partition = args.partition;
		if (args.language) request.language = args.language;

		Lstd.HTTP.ajax({
			url: request.getURL(),
			type: request.method,
			async: (args.async == null) ? true : args.async,
			cache: request.cache,
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(o),
			scriptCharset: "utf-8",
			success: function(data) {
				var wr = data;
				if (Lstd.Json.isWebroutine(data)) {
					wr = Lstd.Json.factory(data);
					Lstd.Utils.setContext("session-key", wr.context("session-key"));
					Lstd.Utils.setContext("session-key-method", wr.context("session-key-method"));
				}
				if (typeof args.callback == "function") {
					try {
						args.callback(wr);
					}
					catch (e2) {
					
                  Lstd.VLF.shutDown("Lstd.Json.Wr.post " + VF_System.MString(325) + e2.message);					
					}
				}
				else
				{
               Lstd.VLF.trace("Lstd.Json.Wr.post  - no success callback function specified");
				}
			},
			error: function(xhr, s, e) {
				if (args.error && (typeof args.error == "function")) {
					var responseText = xhr.responseText, er = null;

					if (responseText.length > 0) {
						try {
							var obj = JSON.parse(responseText);
							er = Lstd.Json.factory(obj);
						}
						catch (e2) {}
					}
					if (er == null) {
						er = Lstd.Json.makeError(s);
						if (e) {
							var msgs = er.messages();
							msgs.add(e);
						}
					}
					try {
						args.error(er);
					}
					catch (e3) {

      				Lstd.VLF.shutDown("Lstd.Json.Wr.post " + VF_System.MString(326) + e3.message);					
					}
				}
				else
				{
                Lstd.VLF.trace("Lstd.Json.Wr.post  - no error callback function specified");
				}
			}
		});
	}
};
