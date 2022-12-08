((function(){function o(n){var i=e;n&&(e[n]||(e[n]={}),i=e[n]);if(!i.define||!i.define.packaged)t.original=i.define,i.define=t,i.define.packaged=!0;if(!i.require||!i.require.packaged)r.original=i.require,i.require=r,i.require.packaged=!0;}var ACE_NAMESPACE = "ace",e=function(){return this}();!e&&typeof window!="undefined"&&(e=window);var t=function(e,n,r){if(typeof e!="string"){t.original?t.original.apply(this,arguments):(console.error("dropping module because define wasn't a string."),console.trace());return}arguments.length==2&&(r=n),t.modules[e]||(t.payloads[e]=r,t.modules[e]=null);};t.modules={},t.payloads={};var n=function(e,t,n){if(typeof t=="string"){var i=s(e,t);if(i!=undefined)return n&&n(),i}else if(Object.prototype.toString.call(t)==="[object Array]"){var o=[];for(var u=0,a=t.length;u<a;++u){var f=s(e,t[u]);if(f==undefined&&r.original)return;o.push(f);}return n&&n.apply(null,o)||!0}},r=function(e,t){var i=n("",e,t);return i==undefined&&r.original?r.original.apply(this,arguments):i},i=function(e,t){if(t.indexOf("!")!==-1){var n=t.split("!");return i(e,n[0])+"!"+i(e,n[1])}if(t.charAt(0)=="."){var r=e.split("/").slice(0,-1).join("/");t=r+"/"+t;while(t.indexOf(".")!==-1&&s!=t){var s=t;t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"");}}return t},s=function(e,r){r=i(e,r);var s=t.modules[r];if(!s){s=t.payloads[r];if(typeof s=="function"){var o={},u={id:r,uri:"",exports:o,packaged:!0},a=function(e,t){return n(r,e,t)},f=s(a,o,u);o=f||u.exports,t.modules[r]=o,delete t.payloads[r];}s=t.modules[r]=o||s;}return s};o(ACE_NAMESPACE);}))(),ace.define("ace/lib/es6-shim",["require","exports","module"],function(e,t,n){function r(e,t,n){Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0});}String.prototype.startsWith||r(String.prototype,"startsWith",function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||r(String.prototype,"endsWith",function(e,t){var n=this;if(t===undefined||t>n.length)t=n.length;t-=e.length;var r=n.indexOf(e,t);return r!==-1&&r===t}),String.prototype.repeat||r(String.prototype,"repeat",function(e){var t="",n=this;while(e>0){e&1&&(t+=n);if(e>>=1)n+=n;}return t}),String.prototype.includes||r(String.prototype,"includes",function(e,t){return this.indexOf(e,t)!=-1}),Object.assign||(Object.assign=function(e){if(e===undefined||e===null)throw new TypeError("Cannot convert undefined or null to object");var t=Object(e);for(var n=1;n<arguments.length;n++){var r=arguments[n];r!==undefined&&r!==null&&Object.keys(r).forEach(function(e){t[e]=r[e];});}return t}),Object.values||(Object.values=function(e){return Object.keys(e).map(function(t){return e[t]})}),Array.prototype.find||r(Array.prototype,"find",function(e){var t=this.length,n=arguments[1];for(var r=0;r<t;r++){var i=this[r];if(e.call(n,i,r,this))return i}}),Array.prototype.findIndex||r(Array.prototype,"findIndex",function(e){var t=this.length,n=arguments[1];for(var r=0;r<t;r++){var i=this[r];if(e.call(n,i,r,this))return r}}),Array.prototype.includes||r(Array.prototype,"includes",function(e,t){return this.indexOf(e,t)!=-1}),Array.prototype.fill||r(Array.prototype,"fill",function(e){var t=this,n=t.length>>>0,r=arguments[1],i=r>>0,s=i<0?Math.max(n+i,0):Math.min(i,n),o=arguments[2],u=o===undefined?n:o>>0,a=u<0?Math.max(n+u,0):Math.min(u,n);while(s<a)t[s]=e,s++;return t}),Array.of||r(Array,"of",function(){return Array.prototype.slice.call(arguments)});}),ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/es6-shim"],function(e,t,n){e("./es6-shim");}),ace.define("ace/lib/lang",["require","exports","module"],function(e,t,n){t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){var n="";while(t>0){t&1&&(n+=e);if(t>>=1)e+=e;}return n};var r=/^\s\s*/,i=/\s\s*$/;t.stringTrimLeft=function(e){return e.replace(r,"")},t.stringTrimRight=function(e){return e.replace(i,"")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)e[n]&&typeof e[n]=="object"?t[n]=this.copyObject(e[n]):t[n]=e[n];return t},t.deepCopy=function s(e){if(typeof e!="object"||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=s(e[n]);return t}if(Object.prototype.toString.call(e)!=="[object Object]")return e;t={};for(var n in e)t[n]=s(e[n]);return t},t.arrayToMap=function(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1);},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return (""+e).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length});}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e();},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r.isPending=function(){return t},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e();},i=function(e){n==null&&(n=setTimeout(r,e||t));};return i.delay=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t);},i.schedule=i,i.call=function(){this.cancel(),e();},i.cancel=function(){n&&clearTimeout(n),n=null;},i.isPending=function(){return n},i};}),ace.define("ace/lib/oop",["require","exports","module"],function(e,t,n){t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});},t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n);};}),ace.define("ace/lib/useragent",["require","exports","module"],function(e,t,n){t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS};var r=typeof navigator=="object"?navigator:{},i=(/mac|win|linux/i.exec(r.platform)||["other"])[0].toLowerCase(),s=r.userAgent||"",o=r.appName||"";t.isWin=i=="win",t.isMac=i=="mac",t.isLinux=i=="linux",t.isIE=o=="Microsoft Internet Explorer"||o.indexOf("MSAppHost")>=0?parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=s.match(/ Gecko\/\d+/),t.isOpera=typeof opera=="object"&&Object.prototype.toString.call(window.opera)=="[object Opera]",t.isWebKit=parseFloat(s.split("WebKit/")[1])||undefined,t.isChrome=parseFloat(s.split(" Chrome/")[1])||undefined,t.isEdge=parseFloat(s.split(" Edge/")[1])||undefined,t.isAIR=s.indexOf("AdobeAIR")>=0,t.isAndroid=s.indexOf("Android")>=0,t.isChromeOS=s.indexOf(" CrOS ")>=0,t.isIOS=/iPad|iPhone|iPod/.test(s)&&!window.MSStream,t.isIOS&&(t.isMac=!0),t.isMobile=t.isIOS||t.isAndroid;}),ace.define("ace/lib/dom",["require","exports","module","ace/lib/useragent"],function(e,t,n){function u(){var e=o;o=null,e&&e.forEach(function(e){a(e[0],e[1]);});}function a(e,n,r){if(typeof document=="undefined")return;if(o)if(r)u();else if(r===!1)return o.push([e,n]);if(s)return;var i=r;if(!r||!r.getRootNode)i=document;else {i=r.getRootNode();if(!i||i==r)i=document;}var a=i.ownerDocument||i;if(n&&t.hasCssString(n,i))return null;n&&(e+="\n/*# sourceURL=ace/css/"+n+" */");var f=t.createElement("style");f.appendChild(a.createTextNode(e)),n&&(f.id=n),i==a&&(i=t.getDocumentHead(a)),i.insertBefore(f,i.firstChild);}var r=e("./useragent"),i="http://www.w3.org/1999/xhtml";t.buildDom=function l(e,t,n){if(typeof e=="string"&&e){var r=document.createTextNode(e);return t&&t.appendChild(r),r}if(!Array.isArray(e))return e&&e.appendChild&&t&&t.appendChild(e),e;if(typeof e[0]!="string"||!e[0]){var i=[];for(var s=0;s<e.length;s++){var o=l(e[s],t,n);o&&i.push(o);}return i}var u=document.createElement(e[0]),a=e[1],f=1;a&&typeof a=="object"&&!Array.isArray(a)&&(f=2);for(var s=f;s<e.length;s++)l(e[s],u,n);return f==2&&Object.keys(a).forEach(function(e){var t=a[e];e==="class"?u.className=Array.isArray(t)?t.join(" "):t:typeof t=="function"||e=="value"||e[0]=="$"?u[e]=t:e==="ref"?n&&(n[t]=u):e==="style"?typeof t=="string"&&(u.style.cssText=t):t!=null&&u.setAttribute(e,t);}),t&&t.appendChild(u),u},t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||i,e):document.createElement(e)},t.removeChildren=function(e){e.innerHTML="";},t.createTextNode=function(e,t){var n=t?t.ownerDocument:document;return n.createTextNode(e)},t.createFragment=function(e){var t=e?e.ownerDocument:document;return t.createDocumentFragment()},t.hasCssClass=function(e,t){var n=(e.className+"").split(/\s+/g);return n.indexOf(t)!==-1},t.addCssClass=function(e,n){t.hasCssClass(e,n)||(e.className+=" "+n);},t.removeCssClass=function(e,t){var n=e.className.split(/\s+/g);for(;;){var r=n.indexOf(t);if(r==-1)break;n.splice(r,1);}e.className=n.join(" ");},t.toggleCssClass=function(e,t){var n=e.className.split(/\s+/g),r=!0;for(;;){var i=n.indexOf(t);if(i==-1)break;r=!1,n.splice(i,1);}return r&&n.push(t),e.className=n.join(" "),r},t.setCssClass=function(e,n,r){r?t.addCssClass(e,n):t.removeCssClass(e,n);},t.hasCssString=function(e,t){var n=0,r;t=t||document;if(r=t.querySelectorAll("style"))while(n<r.length)if(r[n++].id===e)return !0},t.removeElementById=function(e,t){t=t||document,t.getElementById(e)&&t.getElementById(e).remove();};var s,o=[];t.useStrictCSP=function(e){s=e,e==0?u():o||(o=[]);},t.importCssString=a,t.importCssStylsheet=function(e,n){t.buildDom(["link",{rel:"stylesheet",href:e}],t.getDocumentHead(n));},t.scrollbarWidth=function(e){var n=t.createElement("ace_inner");n.style.width="100%",n.style.minWidth="0px",n.style.height="200px",n.style.display="block";var r=t.createElement("ace_outer"),i=r.style;i.position="absolute",i.left="-10000px",i.overflow="hidden",i.width="200px",i.minWidth="0px",i.height="150px",i.display="block",r.appendChild(n);var s=e&&e.documentElement||document&&document.documentElement;if(!s)return 0;s.appendChild(r);var o=n.offsetWidth;i.overflow="scroll";var u=n.offsetWidth;return o===u&&(u=r.clientWidth),s.removeChild(r),o-u},t.computedStyle=function(e,t){return window.getComputedStyle(e,"")||{}},t.setStyle=function(e,t,n){e[t]!==n&&(e[t]=n);},t.HAS_CSS_ANIMATION=!1,t.HAS_CSS_TRANSFORMS=!1,t.HI_DPI=r.isWin?typeof window!="undefined"&&window.devicePixelRatio>=1.5:!0,r.isChromeOS&&(t.HI_DPI=!1);if(typeof document!="undefined"){var f=document.createElement("div");t.HI_DPI&&f.style.transform!==undefined&&(t.HAS_CSS_TRANSFORMS=!0),!r.isEdge&&typeof f.style.animationName!="undefined"&&(t.HAS_CSS_ANIMATION=!0),f=null;}t.HAS_CSS_TRANSFORMS?t.translate=function(e,t,n){e.style.transform="translate("+Math.round(t)+"px, "+Math.round(n)+"px)";}:t.translate=function(e,t,n){e.style.top=Math.round(n)+"px",e.style.left=Math.round(t)+"px";};}),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(e,t,n){var r=e("./dom");t.get=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&t(n.responseText);},n.send(null);},t.loadScript=function(e,t){var n=r.getDocumentHead(),i=document.createElement("script");i.src=e,n.appendChild(i),i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||i.readyState=="loaded"||i.readyState=="complete")i=i.onload=i.onreadystatechange=null,n||t();};},t.qualifyURL=function(e){var t=document.createElement("a");return t.href=e,t.href};}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,n){var r={},i=function(){this.propagationStopped=!0;},s=function(){this.defaultPrevented=!0;};r._emit=r._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],r=this._defaultHandlers[e];if(!n.length&&!r)return;if(typeof t!="object"||!t)t={};t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=i),t.preventDefault||(t.preventDefault=s),n=n.slice();for(var o=0;o<n.length;o++){n[o](t,this);if(t.propagationStopped)break}if(r&&!t.defaultPrevented)return r(t,this)},r._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(!n)return;n=n.slice();for(var r=0;r<n.length;r++)n[r](t,this);},r.once=function(e,t){var n=this;this.on(e,function r(){n.off(e,r),t.apply(null,arguments);});if(!t)return new Promise(function(e){t=e;})},r.setDefaultHandler=function(e,t){var n=this._defaultHandlers;n||(n=this._defaultHandlers={_disabled_:{}});if(n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var s=i.indexOf(t);s!=-1&&i.splice(s,1);}n[e]=t;},r.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(!n)return;var r=n._disabled_[e];if(n[e]==t)r&&this.setDefaultHandler(e,r.pop());else if(r){var i=r.indexOf(t);i!=-1&&r.splice(i,1);}},r.on=r.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),r.indexOf(t)==-1&&r[n?"unshift":"push"](t),t},r.off=r.removeListener=r.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(!n)return;var r=n.indexOf(t);r!==-1&&n.splice(r,1);},r.removeAllListeners=function(e){e||(this._eventRegistry=this._defaultHandlers=undefined),this._eventRegistry&&(this._eventRegistry[e]=undefined),this._defaultHandlers&&(this._defaultHandlers[e]=undefined);},t.EventEmitter=r;}),ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"no use strict";function o(e){typeof console!="undefined"&&console.warn&&console.warn.apply(console,arguments);}function u(e,t){var n=new Error(e);n.data=t,typeof console=="object"&&console.error&&console.error(n),setTimeout(function(){throw n});}var r=e("./oop"),i=e("./event_emitter").EventEmitter,s={setOptions:function(e){Object.keys(e).forEach(function(t){this.setOption(t,e[t]);},this);},getOptions:function(e){var t={};if(!e){var n=this.$options;e=Object.keys(n).filter(function(e){return !n[e].hidden});}else Array.isArray(e)||(t=e,e=Object.keys(t));return e.forEach(function(e){t[e]=this.getOption(e);},this),t},setOption:function(e,t){if(this["$"+e]===t)return;var n=this.$options[e];if(!n)return o('misspelled option "'+e+'"');if(n.forwardTo)return this[n.forwardTo]&&this[n.forwardTo].setOption(e,t);n.handlesSet||(this["$"+e]=t),n&&n.set&&n.set.call(this,t);},getOption:function(e){var t=this.$options[e];return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:o('misspelled option "'+e+'"')}},a=function(){this.$defaultOptions={};};((function(){r.implement(this,i),this.defineOptions=function(e,t,n){return e.$options||(this.$defaultOptions[t]=e.$options={}),Object.keys(n).forEach(function(t){var r=n[t];typeof r=="string"&&(r={forwardTo:r}),r.name||(r.name=t),e.$options[r.name]=r,"initialValue"in r&&(e["$"+r.name]=r.initialValue);}),r.implement(e,s),this},this.resetOptions=function(e){Object.keys(e.$options).forEach(function(t){var n=e.$options[t];"value"in n&&e.setOption(t,n.value);});},this.setDefaultValue=function(e,t,n){if(!e){for(e in this.$defaultOptions)if(this.$defaultOptions[e][t])break;if(!this.$defaultOptions[e][t])return !1}var r=this.$defaultOptions[e]||(this.$defaultOptions[e]={});r[t]&&(r.forwardTo?this.setDefaultValue(r.forwardTo,t,n):r[t].value=n);},this.setDefaultValues=function(e,t){Object.keys(t).forEach(function(n){this.setDefaultValue(e,n,t[n]);},this);},this.warn=o,this.reportError=u;})).call(a.prototype),t.AppConfig=a;}),ace.define("ace/theme/textmate.css",["require","exports","module"],function(e,t,n){n.exports='.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n';}),ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate.css","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-tm",t.cssText=e("./textmate.css"),t.$id="ace/theme/textmate";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass,!1);}),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/dom","ace/lib/app_config","ace/theme/textmate"],function(e,t,n){"no use strict";var r=e("./lib/lang");e("./lib/oop");var s=e("./lib/net"),o=e("./lib/dom"),u=e("./lib/app_config").AppConfig;n.exports=t=new u;var a={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{},loadWorkerFromBlob:!0,sharedPopups:!1,useStrictCSP:null};t.get=function(e){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e);return a[e]},t.set=function(e,t){if(a.hasOwnProperty(e))a[e]=t;else if(this.setDefaultValue("",e,t)==0)throw new Error("Unknown config key: "+e);e=="useStrictCSP"&&o.useStrictCSP(t);},t.all=function(){return r.copyObject(a)},t.$modes={},t.moduleUrl=function(e,t){if(a.$moduleUrls[e])return a.$moduleUrls[e];var n=e.split("/");t=t||n[n.length-2]||"";var r=t=="snippets"?"/":"-",i=n[n.length-1];if(t=="worker"&&r=="-"){var s=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g");i=i.replace(s,"");}(!i||i==t)&&n.length>1&&(i=n[n.length-2]);var o=a[t+"Path"];return o==null?o=a.basePath:r=="/"&&(t=r=""),o&&o.slice(-1)!="/"&&(o+="/"),o+t+r+i+this.get("suffix")},t.setModuleUrl=function(e,t){return a.$moduleUrls[e]=t};var f=function(t,n){return t=="ace/theme/textmate"?n(null,e("./theme/textmate")):console.error("loader is not configured")};t.setLoader=function(e){f=e;},t.$loading={},t.loadModule=function(n,r){var i,o;Array.isArray(n)&&(o=n[0],n=n[1]);try{i=e(n);}catch(u){}if(i&&!t.$loading[n])return r&&r(i);t.$loading[n]||(t.$loading[n]=[]),t.$loading[n].push(r);if(t.$loading[n].length>1)return;var a=function(){f(n,function(e,r){t._emit("load.module",{name:n,module:r});var i=t.$loading[n];t.$loading[n]=null,i.forEach(function(e){e&&e(r);});});};if(!t.get("packaged"))return a();s.loadScript(t.moduleUrl(n,o),a),l();};var l=function(){!a.basePath&&!a.workerPath&&!a.modePath&&!a.themePath&&!Object.keys(a.$moduleUrls).length&&(console.error("Unable to infer path to ace from script src,","use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes","or with webpack use ace/webpack-resolver"),l=function(){});};t.version="1.13.1";}),ace.define("ace/loader_build",["require","exports","module","ace/lib/fixoldbrowsers","ace/config"],function(e,t,n){function s(t){if(!i||!i.document)return;r.set("packaged",t||e.packaged||n.packaged||i.define&&define.packaged);var s={},u="",a=document.currentScript||document._currentScript,f=a&&a.ownerDocument||document,l=f.getElementsByTagName("script");for(var c=0;c<l.length;c++){var h=l[c],p=h.src||h.getAttribute("src");if(!p)continue;var d=h.attributes;for(var v=0,m=d.length;v<m;v++){var g=d[v];g.name.indexOf("data-ace-")===0&&(s[o(g.name.replace(/^data-ace-/,""))]=g.value);}var y=p.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);y&&(u=y[1]);}u&&(s.base=s.base||u,s.packaged=!0),s.basePath=s.base,s.workerPath=s.workerPath||s.base,s.modePath=s.modePath||s.base,s.themePath=s.themePath||s.base,delete s.base;for(var b in s)typeof s[b]!="undefined"&&r.set(b,s[b]);}function o(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}e("./lib/fixoldbrowsers");var r=e("./config");r.setLoader(function(t,n){e([t],function(e){n(null,e);});});var i=function(){return this||typeof window!="undefined"&&window}();n.exports=function(t){r.init=s,t.require=e,typeof define=="function"&&(t.define=define);};}),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(e,t,n){var r=e("./oop"),i=function(){var e={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta",91:"MetaLeft",92:"MetaRight",93:"ContextMenu"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,"super":8,meta:8,command:8,cmd:8,control:1},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*"}};e.PRINTABLE_KEYS[173]="-";var t,n;for(n in e.FUNCTION_KEYS)t=e.FUNCTION_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);for(n in e.PRINTABLE_KEYS)t=e.PRINTABLE_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);return r.mixin(e,e.MODIFIER_KEYS),r.mixin(e,e.PRINTABLE_KEYS),r.mixin(e,e.FUNCTION_KEYS),e.enter=e["return"],e.escape=e.esc,e.del=e["delete"],function(){var t=["cmd","ctrl","alt","shift"];for(var n=Math.pow(2,t.length);n--;)e.KEY_MODS[n]=t.filter(function(t){return n&e.KEY_MODS[t]}).join("-")+"-";}(),e.KEY_MODS[0]="",e.KEY_MODS[-1]="input-",e}();r.mixin(t,i),t.keyCodeToString=function(e){var t=i[e];return typeof t!="string"&&(t=String.fromCharCode(e)),t.toLowerCase()};}),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){function a(){u=!1;try{document.createComment("").addEventListener("test",function(){},{get passive(){u={passive:!1};}});}catch(e){}}function f(){return u==undefined&&a(),u}function l(e,t,n){this.elem=e,this.type=t,this.callback=n;}function d(e,t,n){var u=p(t);if(!i.isMac&&s){t.getModifierState&&(t.getModifierState("OS")||t.getModifierState("Win"))&&(u|=8);if(s.altGr){if((3&u)==3)return;s.altGr=0;}if(n===18||n===17){var a="location"in t?t.location:t.keyLocation;if(n===17&&a===1)s[n]==1&&(o=t.timeStamp);else if(n===18&&u===3&&a===2){var f=t.timeStamp-o;f<50&&(s.altGr=!0);}}}n in r.MODIFIER_KEYS&&(n=-1);if(!u&&n===13){var a="location"in t?t.location:t.keyLocation;if(a===3){e(t,u,-n);if(t.defaultPrevented)return}}if(i.isChromeOS&&u&8){e(t,u,n);if(t.defaultPrevented)return;u&=-9;}return !!u||n in r.FUNCTION_KEYS||n in r.PRINTABLE_KEYS?e(t,u,n):!1}function v(){s=Object.create(null);}var r=e("./keys"),i=e("./useragent"),s=null,o=0,u;l.prototype.destroy=function(){h(this.elem,this.type,this.callback),this.elem=this.type=this.callback=undefined;};var c=t.addListener=function(e,t,n,r){e.addEventListener(t,n,f()),r&&r.$toDestroy.push(new l(e,t,n));},h=t.removeListener=function(e,t,n){e.removeEventListener(t,n,f());};t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation();},t.preventDefault=function(e){e.preventDefault&&e.preventDefault();},t.getButton=function(e){return e.type=="dblclick"?0:e.type=="contextmenu"||i.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey?2:e.button},t.capture=function(e,t,n){function i(e){t&&t(e),n&&n(e),h(r,"mousemove",t),h(r,"mouseup",i),h(r,"dragstart",i);}var r=e&&e.ownerDocument||document;return c(r,"mousemove",t),c(r,"mouseup",i),c(r,"dragstart",i),i},t.addMouseWheelListener=function(e,t,n){c(e,"wheel",function(e){var n=.15,r=e.deltaX||0,i=e.deltaY||0;switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=r*n,e.wheelY=i*n;break;case e.DOM_DELTA_LINE:var s=15;e.wheelX=r*s,e.wheelY=i*s;break;case e.DOM_DELTA_PAGE:var o=150;e.wheelX=r*o,e.wheelY=i*o;}t(e);},n);},t.addMultiMouseDownListener=function(e,n,r,s,o){function p(e){t.getButton(e)!==0?u=0:e.detail>1?(u++,u>4&&(u=1)):u=1;if(i.isIE){var o=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-f)>5;if(!l||o)u=1;l&&clearTimeout(l),l=setTimeout(function(){l=null;},n[u-1]||600),u==1&&(a=e.clientX,f=e.clientY);}e._clicks=u,r[s]("mousedown",e);if(u>4)u=0;else if(u>1)return r[s](h[u],e)}var u=0,a,f,l,h={2:"dblclick",3:"tripleclick",4:"quadclick"};Array.isArray(e)||(e=[e]),e.forEach(function(e){c(e,"mousedown",p,o);});};var p=function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0)};t.getModifierString=function(e){return r.KEY_MODS[p(e)]},t.addCommandKeyListener=function(e,n,r){if(i.isOldGecko||i.isOpera&&!("KeyboardEvent"in window)){var o=null;c(e,"keydown",function(e){o=e.keyCode;},r),c(e,"keypress",function(e){return d(n,e,o)},r);}else {var u=null;c(e,"keydown",function(e){s[e.keyCode]=(s[e.keyCode]||0)+1;var t=d(n,e,e.keyCode);return u=e.defaultPrevented,t},r),c(e,"keypress",function(e){u&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),u=null);},r),c(e,"keyup",function(e){s[e.keyCode]=null;},r),s||(v(),c(window,"focus",v));}};if(typeof window=="object"&&window.postMessage&&!i.isOldIE){var m=1;t.nextTick=function(e,n){n=n||window;var r="zero-timeout-message-"+m++,i=function(s){s.data==r&&(t.stopPropagation(s),h(n,"message",i),e());};c(n,"message",i),n.postMessage(r,"*");};}t.$idleBlocked=!1,t.onIdle=function(e,n){return setTimeout(function r(){t.$idleBlocked?setTimeout(r,100):e();},n)},t.$idleBlockId=null,t.blockIdle=function(e){t.$idleBlockId&&clearTimeout(t.$idleBlockId),t.$idleBlocked=!0,t.$idleBlockId=setTimeout(function(){t.$idleBlocked=!1;},e||100);},t.nextFrame=typeof window=="object"&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17);};}),ace.define("ace/range",["require","exports","module"],function(e,t,n){var r=function(e,t){return e.row-t.row||e.column-t.column},i=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r};};((function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return "Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return this.compare(e,t)==0},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),t==1?(t=this.compare(r.row,r.column),t==1?2:t==0?1:0):t==-1?-2:(t=this.compare(r.row,r.column),t==-1?-1:t==1?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0},this.intersects=function(e){var t=this.compareRange(e);return t==-1||t==0||t==1},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){typeof e=="object"?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t);},this.setEnd=function(e,t){typeof e=="object"?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t);},this.inside=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return this.compare(e,t)==0?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return !this.isMultiLine()&&e===this.start.row?t<this.start.column?-1:t>this.end.column?1:0:e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(this.end.row<e)var n={row:e,column:0};if(this.start.row>t)var r={row:t+1,column:0};else if(this.start.row<e)var r={row:e,column:0};return i.fromPoints(r||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(n==0)return this;if(n==-1)var r={row:e,column:t};else var s={row:e,column:t};return i.fromPoints(r||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return i.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new i(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new i(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new i(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t;};})).call(i.prototype),i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=r,i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i;}),ace.define("ace/clipboard",["require","exports","module"],function(e,t,n){var r;n.exports={lineMode:!1,pasteCancelled:function(){return r&&r>Date.now()-50?!0:r=!1},cancel:function(){r=Date.now();}};}),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang","ace/clipboard","ace/lib/keys"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=e("../lib/dom"),o=e("../lib/lang"),u=e("../clipboard"),a=i.isChrome<18,f=i.isIE,l=i.isChrome>63,c=400,h=e("../lib/keys"),p=h.KEY_MODS,d=i.isIOS,v=d?/\s/:/\n/,m=i.isMobile,g=function(e,t){function X(){x=!0,n.blur(),n.focus(),x=!1;}function $(e){e.keyCode==27&&n.value.length<n.selectionStart&&(b||(T=n.value),N=C=-1,O()),V();}function K(){clearTimeout(J),J=setTimeout(function(){E&&(n.style.cssText=E,E=""),t.renderer.$isMousePressed=!1,t.renderer.$keepTextAreaAtCursor&&t.renderer.$moveTextAreaToCursor();},0);}function G(e,t,n){var r=null,i=!1;n.addEventListener("keydown",function(e){r&&clearTimeout(r),i=!0;},!0),n.addEventListener("keyup",function(e){r=setTimeout(function(){i=!1;},100);},!0);var s=function(e){if(document.activeElement!==n)return;if(i||b||t.$mouseHandler.isMousePressed)return;if(g)return;var r=n.selectionStart,s=n.selectionEnd,o=null,u=0;if(r==0)o=h.up;else if(r==1)o=h.home;else if(s>C&&T[s]=="\n")o=h.end;else if(r<N&&T[r-1]==" ")o=h.left,u=p.option;else if(r<N||r==N&&C!=N&&r==s)o=h.left;else if(s>C&&T.slice(0,s).split("\n").length>2)o=h.down;else if(s>C&&T[s-1]==" ")o=h.right,u=p.option;else if(s>C||s==C&&C!=N&&r==s)o=h.right;r!==s&&(u|=p.shift);if(o){var a=t.onCommandKey({},u,o);if(!a&&t.commands){o=h.keyCodeToString(o);var f=t.commands.findKeyCommand(u,o);f&&t.execCommand(f);}N=r,C=s,O("");}};document.addEventListener("selectionchange",s),t.on("destroy",function(){document.removeEventListener("selectionchange",s);});}var n=s.createElement("textarea");n.className="ace_text-input",n.setAttribute("wrap","off"),n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.setAttribute("spellcheck",!1),n.style.opacity="0",e.insertBefore(n,e.firstChild);var g=!1,y=!1,b=!1,w=!1,E="";m||(n.style.fontSize="1px");var S=!1,x=!1,T="",N=0,C=0,k=0;try{var L=document.activeElement===n;}catch(A){}r.addListener(n,"blur",function(e){if(x)return;t.onBlur(e),L=!1;},t),r.addListener(n,"focus",function(e){if(x)return;L=!0;if(i.isEdge)try{if(!document.hasFocus())return}catch(e){}t.onFocus(e),i.isEdge?setTimeout(O):O();},t),this.$focusScroll=!1,this.focus=function(){if(E||l||this.$focusScroll=="browser")return n.focus({preventScroll:!0});var e=n.style.top;n.style.position="fixed",n.style.top="0px";try{var t=n.getBoundingClientRect().top!=0;}catch(r){return}var i=[];if(t){var s=n.parentElement;while(s&&s.nodeType==1)i.push(s),s.setAttribute("ace_nocontext",!0),!s.parentElement&&s.getRootNode?s=s.getRootNode().host:s=s.parentElement;}n.focus({preventScroll:!0}),t&&i.forEach(function(e){e.removeAttribute("ace_nocontext");}),setTimeout(function(){n.style.position="",n.style.top=="0px"&&(n.style.top=e);},0);},this.blur=function(){n.blur();},this.isFocused=function(){return L},t.on("beforeEndOperation",function(){var e=t.curOp,r=e&&e.command&&e.command.name;if(r=="insertstring")return;var i=r&&(e.docChanged||e.selectionChanged);b&&i&&(T=n.value="",W()),O();});var O=d?function(e){if(!L||g&&!e||w)return;e||(e="");var r="\n ab"+e+"cde fg\n";r!=n.value&&(n.value=T=r);var i=4,s=4+(e.length||(t.selection.isEmpty()?0:1));(N!=i||C!=s)&&n.setSelectionRange(i,s),N=i,C=s;}:function(){if(b||w)return;if(!L&&!P)return;b=!0;var e=0,r=0,i="";if(t.session){var s=t.selection,o=s.getRange(),u=s.cursor.row;e=o.start.column,r=o.end.column,i=t.session.getLine(u);if(o.start.row!=u){var a=t.session.getLine(u-1);e=o.start.row<u-1?0:e,r+=a.length+1,i=a+"\n"+i;}else if(o.end.row!=u){var f=t.session.getLine(u+1);r=o.end.row>u+1?f.length:r,r+=i.length+1,i=i+"\n"+f;}else m&&u>0&&(i="\n"+i,r+=1,e+=1);i.length>c&&(e<c&&r<c?i=i.slice(0,c):(i="\n",e==r?e=r=0:(e=0,r=1)));}var l=i+"\n\n";l!=T&&(n.value=T=l,N=C=l.length),P&&(N=n.selectionStart,C=n.selectionEnd);if(C!=r||N!=e||n.selectionEnd!=C)try{n.setSelectionRange(e,r),N=e,C=r;}catch(h){}b=!1;};this.resetSelection=O,L&&t.onFocus();var M=function(e){return e.selectionStart===0&&e.selectionEnd>=T.length&&e.value===T&&T&&e.selectionEnd!==C},_=function(e){if(b)return;g?g=!1:M(n)?(t.selectAll(),O()):m&&n.selectionStart!=N&&O();},D=null;this.setInputHandler=function(e){D=e;},this.getInputHandler=function(){return D};var P=!1,H=function(e,r){P&&(P=!1);if(y)return O(),e&&t.onPaste(e),y=!1,"";var s=n.selectionStart,o=n.selectionEnd,u=N,a=T.length-C,f=e,l=e.length-s,c=e.length-o,h=0;while(u>0&&T[h]==e[h])h++,u--;f=f.slice(h),h=1;while(a>0&&T.length-h>N-1&&T[T.length-h]==e[e.length-h])h++,a--;l-=h-1,c-=h-1;var p=f.length-h+1;p<0&&(u=-p,p=0),f=f.slice(0,p);if(!r&&!f&&!l&&!u&&!a&&!c)return "";w=!0;var d=!1;return i.isAndroid&&f==". "&&(f="  ",d=!0),f&&!u&&!a&&!l&&!c||S?t.onTextInput(f):t.onTextInput(f,{extendLeft:u,extendRight:a,restoreStart:l,restoreEnd:c}),w=!1,T=e,N=s,C=o,k=c,d?"\n":f},B=function(e){if(b)return z();if(e&&e.inputType){if(e.inputType=="historyUndo")return t.execCommand("undo");if(e.inputType=="historyRedo")return t.execCommand("redo")}var r=n.value,i=H(r,!0);(r.length>c+100||v.test(i)||m&&N<1&&N==C)&&O();},j=function(e,t,n){var r=e.clipboardData||window.clipboardData;if(!r||a)return;var i=f||n?"Text":"text/plain";try{return t?r.setData(i,t)!==!1:r.getData(i)}catch(e){if(!n)return j(e,t,!0)}},F=function(e,i){var s=t.getCopyText();if(!s)return r.preventDefault(e);j(e,s)?(d&&(O(s),g=s,setTimeout(function(){g=!1;},10)),i?t.onCut():t.onCopy(),r.preventDefault(e)):(g=!0,n.value=s,n.select(),setTimeout(function(){g=!1,O(),i?t.onCut():t.onCopy();}));},I=function(e){F(e,!0);},q=function(e){F(e,!1);},R=function(e){var s=j(e);if(u.pasteCancelled())return;typeof s=="string"?(s&&t.onPaste(s,e),i.isIE&&setTimeout(O),r.preventDefault(e)):(n.value="",y=!0);};r.addCommandKeyListener(n,t.onCommandKey.bind(t),t),r.addListener(n,"select",_,t),r.addListener(n,"input",B,t),r.addListener(n,"cut",I,t),r.addListener(n,"copy",q,t),r.addListener(n,"paste",R,t),(!("oncut"in n)||!("oncopy"in n)||!("onpaste"in n))&&r.addListener(e,"keydown",function(e){if(i.isMac&&!e.metaKey||!e.ctrlKey)return;switch(e.keyCode){case 67:q(e);break;case 86:R(e);break;case 88:I(e);}},t);var U=function(e){if(b||!t.onCompositionStart||t.$readOnly)return;b={};if(S)return;e.data&&(b.useTextareaForIME=!1),setTimeout(z,0),t._signal("compositionStart"),t.on("mousedown",X);var r=t.getSelectionRange();r.end.row=r.start.row,r.end.column=r.start.column,b.markerRange=r,b.selectionStart=N,t.onCompositionStart(b),b.useTextareaForIME?(T=n.value="",N=0,C=0):(n.msGetInputContext&&(b.context=n.msGetInputContext()),n.getInputContext&&(b.context=n.getInputContext()));},z=function(){if(!b||!t.onCompositionUpdate||t.$readOnly)return;if(S)return X();if(b.useTextareaForIME)t.onCompositionUpdate(n.value);else {var e=n.value;H(e),b.markerRange&&(b.context&&(b.markerRange.start.column=b.selectionStart=b.context.compositionStartOffset),b.markerRange.end.column=b.markerRange.start.column+C-b.selectionStart+k);}},W=function(e){if(!t.onCompositionEnd||t.$readOnly)return;b=!1,t.onCompositionEnd(),t.off("mousedown",X),e&&B();},V=o.delayedCall(z,50).schedule.bind(null,null);r.addListener(n,"compositionstart",U,t),r.addListener(n,"compositionupdate",z,t),r.addListener(n,"keyup",$,t),r.addListener(n,"keydown",V,t),r.addListener(n,"compositionend",W,t),this.getElement=function(){return n},this.setCommandMode=function(e){S=e,n.readOnly=!1;},this.setReadOnly=function(e){S||(n.readOnly=e);},this.setCopyWithEmptySelection=function(e){},this.onContextMenu=function(e){P=!0,O(),t._emit("nativecontextmenu",{target:t,domEvent:e}),this.moveToMouse(e,!0);},this.moveToMouse=function(e,o){E||(E=n.style.cssText),n.style.cssText=(o?"z-index:100000;":"")+(i.isIE?"opacity:0.1;":"")+"text-indent: -"+(N+C)*t.renderer.characterWidth*.5+"px;";var u=t.container.getBoundingClientRect(),a=s.computedStyle(t.container),f=u.top+(parseInt(a.borderTopWidth)||0),l=u.left+(parseInt(u.borderLeftWidth)||0),c=u.bottom-f-n.clientHeight-2,h=function(e){s.translate(n,e.clientX-l-2,Math.min(e.clientY-f-2,c));};h(e);if(e.type!="mousedown")return;t.renderer.$isMousePressed=!0,clearTimeout(J),i.isWin&&r.capture(t.container,h,K);},this.onContextMenuClose=K;var J,Q=function(e){t.textInput.onContextMenu(e),K();};r.addListener(n,"mouseup",Q,t),r.addListener(n,"mousedown",function(e){e.preventDefault(),K();},t),r.addListener(t.renderer.scroller,"contextmenu",Q,t),r.addListener(n,"contextmenu",Q,t),d&&G(e,t,n),this.destroy=function(){n.parentElement&&n.parentElement.removeChild(n);};};t.TextInput=g,t.$setUserAgentForTests=function(e,t){m=e,d=t;};}),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/useragent"],function(e,t,n){function o(e){e.$clickSelection=null;var t=e.editor;t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e));var n=["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"];n.forEach(function(t){e[t]=this[t];},this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange");}function u(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}function a(e,t){if(e.start.row==e.end.row)var n=2*t.column-e.start.column-e.end.column;else if(e.start.row==e.end.row-1&&!e.start.column&&!e.end.column)var n=t.column-4;else var n=2*t.row-e.start.row-e.end.row;return n<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}var r=e("../lib/useragent"),i=0,s=550;((function(){this.onMouseDown=function(e){var t=e.inSelection(),n=e.getDocumentPosition();this.mousedownEvent=e;var i=this.editor,s=e.getButton();if(s!==0){var o=i.getSelectionRange(),u=o.isEmpty();(u||s==1)&&i.selection.moveToPosition(n),s==2&&(i.textInput.onContextMenu(e.domEvent),r.isMozilla||e.preventDefault());return}this.mousedownEvent.time=Date.now();if(t&&!i.isFocused()){i.focus();if(this.$focusTimeout&&!this.$clickSelection&&!i.inMultiSelectMode){this.setState("focusWait"),this.captureMouse(e);return}}return this.captureMouse(e),this.startSelect(n,e.domEvent._clicks>1),e.preventDefault()},this.startSelect=function(e,t){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y);var n=this.editor;if(!this.mousedownEvent)return;this.mousedownEvent.getShiftKey()?n.selection.selectToPosition(e):t||n.selection.moveToPosition(e),t||this.select(),n.renderer.scroller.setCapture&&n.renderer.scroller.setCapture(),n.setStyle("ace_selecting"),this.setState("select");},this.select=function(){var e,t=this.editor,n=t.renderer.screenToTextCoordinates(this.x,this.y);if(this.$clickSelection){var r=this.$clickSelection.comparePoint(n);if(r==-1)e=this.$clickSelection.end;else if(r==1)e=this.$clickSelection.start;else {var i=a(this.$clickSelection,n);n=i.cursor,e=i.anchor;}t.selection.setSelectionAnchor(e.row,e.column);}t.selection.selectToPosition(n),t.renderer.scrollCursorIntoView();},this.extendSelectionBy=function(e){var t,n=this.editor,r=n.renderer.screenToTextCoordinates(this.x,this.y),i=n.selection[e](r.row,r.column);if(this.$clickSelection){var s=this.$clickSelection.comparePoint(i.start),o=this.$clickSelection.comparePoint(i.end);if(s==-1&&o<=0){t=this.$clickSelection.end;if(i.end.row!=r.row||i.end.column!=r.column)r=i.start;}else if(o==1&&s>=0){t=this.$clickSelection.start;if(i.start.row!=r.row||i.start.column!=r.column)r=i.end;}else if(s==-1&&o==1)r=i.end,t=i.start;else {var u=a(this.$clickSelection,r);r=u.cursor,t=u.anchor;}n.selection.setSelectionAnchor(t.row,t.column);}n.selection.selectToPosition(r),n.renderer.scrollCursorIntoView();},this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.$clickSelection=null,this.editor.unsetStyle("ace_selecting"),this.editor.renderer.scroller.releaseCapture&&this.editor.renderer.scroller.releaseCapture();},this.focusWait=function(){var e=u(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),t=Date.now();(e>i||t-this.mousedownEvent.time>this.$focusTimeout)&&this.startSelect(this.mousedownEvent.getDocumentPosition());},this.onDoubleClick=function(e){var t=e.getDocumentPosition(),n=this.editor,r=n.session,i=r.getBracketRange(t);i?(i.isEmpty()&&(i.start.column--,i.end.column++),this.setState("select")):(i=n.selection.getWordRange(t.row,t.column),this.setState("selectByWords")),this.$clickSelection=i,this.select();},this.onTripleClick=function(e){var t=e.getDocumentPosition(),n=this.editor;this.setState("selectByLines");var r=n.getSelectionRange();r.isMultiLine()&&r.contains(t.row,t.column)?(this.$clickSelection=n.selection.getLineRange(r.start.row),this.$clickSelection.end=n.selection.getLineRange(r.end.row).end):this.$clickSelection=n.selection.getLineRange(t.row),this.select();},this.onQuadClick=function(e){var t=this.editor;t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("selectAll");},this.onMouseWheel=function(e){if(e.getAccelKey())return;e.getShiftKey()&&e.wheelY&&!e.wheelX&&(e.wheelX=e.wheelY,e.wheelY=0);var t=this.editor;this.$lastScroll||(this.$lastScroll={t:0,vx:0,vy:0,allowed:0});var n=this.$lastScroll,r=e.domEvent.timeStamp,i=r-n.t,o=i?e.wheelX/i:n.vx,u=i?e.wheelY/i:n.vy;i<s&&(o=(o+n.vx)/2,u=(u+n.vy)/2);var a=Math.abs(o/u),f=!1;a>=1&&t.renderer.isScrollableBy(e.wheelX*e.speed,0)&&(f=!0),a<=1&&t.renderer.isScrollableBy(0,e.wheelY*e.speed)&&(f=!0);if(f)n.allowed=r;else if(r-n.allowed<s){var l=Math.abs(o)<=1.5*Math.abs(n.vx)&&Math.abs(u)<=1.5*Math.abs(n.vy);l?(f=!0,n.allowed=r):n.allowed=0;}n.t=r,n.vx=o,n.vy=u;if(f)return t.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()};})).call(o.prototype),t.DefaultHandlers=o;}),ace.define("ace/tooltip",["require","exports","module","ace/lib/oop","ace/lib/dom"],function(e,t,n){function o(e){this.isOpen=!1,this.$element=null,this.$parentNode=e;}e("./lib/oop");var i=e("./lib/dom"),s="ace_tooltip";((function(){this.$init=function(){return this.$element=i.createElement("div"),this.$element.className=s,this.$element.style.display="none",this.$parentNode.appendChild(this.$element),this.$element},this.getElement=function(){return this.$element||this.$init()},this.setText=function(e){this.getElement().textContent=e;},this.setHtml=function(e){this.getElement().innerHTML=e;},this.setPosition=function(e,t){this.getElement().style.left=e+"px",this.getElement().style.top=t+"px";},this.setClassName=function(e){i.addCssClass(this.getElement(),e);},this.show=function(e,t,n){e!=null&&this.setText(e),t!=null&&n!=null&&this.setPosition(t,n),this.isOpen||(this.getElement().style.display="block",this.isOpen=!0);},this.hide=function(){this.isOpen&&(this.getElement().style.display="none",this.getElement().className=s,this.isOpen=!1);},this.getHeight=function(){return this.getElement().offsetHeight},this.getWidth=function(){return this.getElement().offsetWidth},this.destroy=function(){this.isOpen=!1,this.$element&&this.$element.parentNode&&this.$element.parentNode.removeChild(this.$element);};})).call(o.prototype),t.Tooltip=o;}),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event","ace/tooltip"],function(e,t,n){function u(e){function l(){var r=u.getDocumentPosition().row,s=n.$annotations[r];if(!s)return c();var o=t.session.getLength();if(r==o){var a=t.renderer.pixelToScreenCoordinates(0,u.y).row,l=u.$pos;if(a>t.session.documentToScreenRow(l.row,l.column))return c()}if(f==s)return;f=s.text.join("<br/>"),i.setHtml(f);var p=s.className;p&&i.setClassName(p.trim()),i.show(),t._signal("showGutterTooltip",i),t.on("mousewheel",c);if(e.$tooltipFollowsMouse)h(u);else {var d=u.domEvent.target,v=d.getBoundingClientRect(),m=i.getElement().style;m.left=v.right+"px",m.top=v.bottom+"px";}}function c(){o&&(o=clearTimeout(o)),f&&(i.hide(),f=null,t._signal("hideGutterTooltip",i),t.off("mousewheel",c));}function h(e){i.setPosition(e.x,e.y);}var t=e.editor,n=t.renderer.$gutterLayer,i=new a(t.container);e.editor.setDefaultHandler("guttermousedown",function(r){if(!t.isFocused()||r.getButton()!=0)return;var i=n.getRegion(r);if(i=="foldWidgets")return;var s=r.getDocumentPosition().row,o=t.session.selection;if(r.getShiftKey())o.selectTo(s,0);else {if(r.domEvent.detail==2)return t.selectAll(),r.preventDefault();e.$clickSelection=t.selection.getLineRange(s);}return e.setState("selectByLines"),e.captureMouse(r),r.preventDefault()});var o,u,f;e.editor.setDefaultHandler("guttermousemove",function(t){var n=t.domEvent.target||t.domEvent.srcElement;if(r.hasCssClass(n,"ace_fold-widget"))return c();f&&e.$tooltipFollowsMouse&&h(t),u=t;if(o)return;o=setTimeout(function(){o=null,u&&!e.isMousePressed?l():c();},50);}),s.addListener(t.renderer.$gutter,"mouseout",function(e){u=null;if(!f||o)return;o=setTimeout(function(){o=null,c();},50);},t),t.on("changeSession",c);}function a(e){o.call(this,e);}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event"),o=e("../tooltip").Tooltip;i.inherits(a,o),function(){this.setPosition=function(e,t){var n=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,i=this.getWidth(),s=this.getHeight();e+=15,t+=15,e+i>n&&(e-=e+i-n),t+s>r&&(t-=20+s),o.prototype.setPosition.call(this,e,t);};}.call(a.prototype),t.GutterHandler=u;}),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=t.MouseEvent=function(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1;};(function(){this.stopPropagation=function(){r.stopPropagation(this.domEvent),this.propagationStopped=!0;},this.preventDefault=function(){r.preventDefault(this.domEvent),this.defaultPrevented=!0;},this.stop=function(){this.stopPropagation(),this.preventDefault();},this.getDocumentPosition=function(){return this.$pos?this.$pos:(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY),this.$pos)},this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var e=this.editor,t=e.getSelectionRange();if(t.isEmpty())this.$inSelection=!1;else {var n=this.getDocumentPosition();this.$inSelection=t.contains(n.row,n.column);}return this.$inSelection},this.getButton=function(){return r.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=i.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey};}).call(s.prototype);}),ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(e,t,n){function f(e){function T(e,n){var r=Date.now(),i=!n||e.row!=n.row,s=!n||e.column!=n.column;if(!S||i||s)t.moveCursorToPosition(e),S=r,x={x:p,y:d};else {var o=l(x.x,x.y,p,d);o>a?S=null:r-S>=u&&(t.renderer.scrollCursorIntoView(),S=null);}}function N(e,n){var r=Date.now(),i=t.renderer.layerConfig.lineHeight,s=t.renderer.layerConfig.characterWidth,u=t.renderer.scroller.getBoundingClientRect(),a={x:{left:p-u.left,right:u.right-p},y:{top:d-u.top,bottom:u.bottom-d}},f=Math.min(a.x.left,a.x.right),l=Math.min(a.y.top,a.y.bottom),c={row:e.row,column:e.column};f/s<=2&&(c.column+=a.x.left<a.x.right?-3:2),l/i<=1&&(c.row+=a.y.top<a.y.bottom?-1:1);var h=e.row!=c.row,v=e.column!=c.column,m=!n||e.row!=n.row;h||v&&!m?E?r-E>=o&&t.renderer.scrollCursorIntoView(c):E=r:E=null;}function C(){var e=g;g=t.renderer.screenToTextCoordinates(p,d),T(g,e),N(g,e);}function k(){m=t.selection.toOrientedRange(),h=t.session.addMarker(m,"ace_selection",t.getSelectionStyle()),t.clearSelection(),t.isFocused()&&t.renderer.$cursorLayer.setBlinking(!1),clearInterval(v),C(),v=setInterval(C,20),y=0,i.addListener(document,"mousemove",O);}function L(){clearInterval(v),t.session.removeMarker(h),h=null,t.selection.fromOrientedRange(m),t.isFocused()&&!w&&t.$resetCursorStyle(),m=null,g=null,y=0,E=null,S=null,i.removeListener(document,"mousemove",O);}function O(){A==null&&(A=setTimeout(function(){A!=null&&h&&L();},20));}function M(e){var t=e.types;return !t||Array.prototype.some.call(t,function(e){return e=="text/plain"||e=="Text"})}function _(e){var t=["copy","copymove","all","uninitialized"],n=["move","copymove","linkmove","all","uninitialized"],r=s.isMac?e.altKey:e.ctrlKey,i="uninitialized";try{i=e.dataTransfer.effectAllowed.toLowerCase();}catch(e){}var o="none";return r&&t.indexOf(i)>=0?o="copy":n.indexOf(i)>=0?o="move":t.indexOf(i)>=0&&(o="copy"),o}var t=e.editor,n=r.createElement("div");n.style.cssText="top:-100px;position:absolute;z-index:2147483647;opacity:0.5",n.textContent="\u00a0";var f=["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"];f.forEach(function(t){e[t]=this[t];},this),t.on("mousedown",this.onMouseDown.bind(e));var c=t.container,h,p,d,v,m,g,y=0,b,w,E,S,x;this.onDragStart=function(e){if(this.cancelDrag||!c.draggable){var r=this;return setTimeout(function(){r.startSelect(),r.captureMouse(e);},0),e.preventDefault()}m=t.getSelectionRange();var i=e.dataTransfer;i.effectAllowed=t.getReadOnly()?"copy":"copyMove",t.container.appendChild(n),i.setDragImage&&i.setDragImage(n,0,0),setTimeout(function(){t.container.removeChild(n);}),i.clearData(),i.setData("Text",t.session.getTextRange()),w=!0,this.setState("drag");},this.onDragEnd=function(e){c.draggable=!1,w=!1,this.setState(null);if(!t.getReadOnly()){var n=e.dataTransfer.dropEffect;!b&&n=="move"&&t.session.remove(t.getSelectionRange()),t.$resetCursorStyle();}this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle("");},this.onDragEnter=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||k(),y++,e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragOver=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||(k(),y++),A!==null&&(A=null),e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragLeave=function(e){y--;if(y<=0&&h)return L(),b=null,i.preventDefault(e)},this.onDrop=function(e){if(!g)return;var n=e.dataTransfer;if(w)switch(b){case"move":m.contains(g.row,g.column)?m={start:g,end:g}:m=t.moveText(m,g);break;case"copy":m=t.moveText(m,g,!0);}else {var r=n.getData("Text");m={start:g,end:t.session.insert(g,r)},t.focus(),b=null;}return L(),i.preventDefault(e)},i.addListener(c,"dragstart",this.onDragStart.bind(e),t),i.addListener(c,"dragend",this.onDragEnd.bind(e),t),i.addListener(c,"dragenter",this.onDragEnter.bind(e),t),i.addListener(c,"dragover",this.onDragOver.bind(e),t),i.addListener(c,"dragleave",this.onDragLeave.bind(e),t),i.addListener(c,"drop",this.onDrop.bind(e),t);var A=null;}function l(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}var r=e("../lib/dom"),i=e("../lib/event"),s=e("../lib/useragent"),o=200,u=200,a=5;((function(){this.dragWait=function(){var e=Date.now()-this.mousedownEvent.time;e>this.editor.getDragDelay()&&this.startDrag();},this.dragWaitEnd=function(){var e=this.editor.container;e.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()),this.selectEnd();},this.dragReadyEnd=function(e){this.editor.$resetCursorStyle(),this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle(""),this.dragWaitEnd();},this.startDrag=function(){this.cancelDrag=!1;var e=this.editor,t=e.container;t.draggable=!0,e.renderer.$cursorLayer.setBlinking(!1),e.setStyle("ace_dragging");var n=s.isWin?"default":"move";e.renderer.setCursorStyle(n),this.setState("dragReady");},this.onMouseDrag=function(e){var t=this.editor.container;if(s.isIE&&this.state=="dragReady"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>3&&t.dragDrop();}if(this.state==="dragWait"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>0&&(t.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()));}},this.onMouseDown=function(e){if(!this.$dragEnabled)return;this.mousedownEvent=e;var t=this.editor,n=e.inSelection(),r=e.getButton(),i=e.domEvent.detail||1;if(i===1&&r===0&&n){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return;this.mousedownEvent.time=Date.now();var o=e.domEvent.target||e.domEvent.srcElement;"unselectable"in o&&(o.unselectable="on");if(t.getDragDelay()){if(s.isWebKit){this.cancelDrag=!0;var u=t.container;u.draggable=!0;}this.setState("dragWait");}else this.startDrag();this.captureMouse(e,this.onMouseDrag.bind(this)),e.defaultPrevented=!0;}};})).call(f.prototype),t.DragdropHandler=f;}),ace.define("ace/mouse/touch_handler",["require","exports","module","ace/mouse/mouse_event","ace/lib/event","ace/lib/dom"],function(e,t,n){var r=e("./mouse_event").MouseEvent,i=e("../lib/event"),s=e("../lib/dom");t.addTouchListeners=function(e,t){function b(){var e=window.navigator&&window.navigator.clipboard,r=!1,i=function(){var n=t.getCopyText(),i=t.session.getUndoManager().hasUndo();y.replaceChild(s.buildDom(r?["span",!n&&["span",{"class":"ace_mobile-button",action:"selectall"},"Select All"],n&&["span",{"class":"ace_mobile-button",action:"copy"},"Copy"],n&&["span",{"class":"ace_mobile-button",action:"cut"},"Cut"],e&&["span",{"class":"ace_mobile-button",action:"paste"},"Paste"],i&&["span",{"class":"ace_mobile-button",action:"undo"},"Undo"],["span",{"class":"ace_mobile-button",action:"find"},"Find"],["span",{"class":"ace_mobile-button",action:"openCommandPallete"},"Palette"]]:["span"]),y.firstChild);},o=function(n){var s=n.target.getAttribute("action");if(s=="more"||!r)return r=!r,i();if(s=="paste")e.readText().then(function(e){t.execCommand(s,e);});else if(s){if(s=="cut"||s=="copy")e?e.writeText(t.getCopyText()):document.execCommand("copy");t.execCommand(s);}y.firstChild.style.display="none",r=!1,s!="openCommandPallete"&&t.focus();};y=s.buildDom(["div",{"class":"ace_mobile-menu",ontouchstart:function(e){n="menu",e.stopPropagation(),e.preventDefault(),t.textInput.focus();},ontouchend:function(e){e.stopPropagation(),e.preventDefault(),o(e);},onclick:o},["span"],["span",{"class":"ace_mobile-button",action:"more"},"..."]],t.container);}function w(){y||b();var e=t.selection.cursor,n=t.renderer.textToScreenCoordinates(e.row,e.column),r=t.renderer.textToScreenCoordinates(0,0).pageX,i=t.renderer.scrollLeft,s=t.container.getBoundingClientRect();y.style.top=n.pageY-s.top-3+"px",n.pageX-s.left<s.width-70?(y.style.left="",y.style.right="10px"):(y.style.right="",y.style.left=r+i-s.left+"px"),y.style.display="",y.firstChild.style.display="none",t.on("input",E);}function E(e){y&&(y.style.display="none"),t.off("input",E);}function S(){l=null,clearTimeout(l);var e=t.selection.getRange(),r=e.contains(p.row,p.column);if(e.isEmpty()||!r)t.selection.moveToPosition(p),t.selection.selectWord();n="wait",w();}function x(){l=null,clearTimeout(l),t.selection.moveToPosition(p);var e=d>=2?t.selection.getLineRange(p.row):t.session.getBracketRange(p);e&&!e.isEmpty()?t.selection.setRange(e):t.selection.selectWord(),n="wait";}function T(){h+=60,c=setInterval(function(){h--<=0&&(clearInterval(c),c=null),Math.abs(v)<.01&&(v=0),Math.abs(m)<.01&&(m=0),h<20&&(v=.9*v),h<20&&(m=.9*m);var e=t.session.getScrollTop();t.renderer.scrollBy(10*v,10*m),e==t.session.getScrollTop()&&(h=0);},10);}var n="scroll",o,u,a,f,l,c,h=0,p,d=0,v=0,m=0,g,y;i.addListener(e,"contextmenu",function(e){if(!g)return;var n=t.textInput.getElement();n.focus();},t),i.addListener(e,"touchstart",function(e){var i=e.touches;if(l||i.length>1){clearTimeout(l),l=null,a=-1,n="zoom";return}g=t.$mouseHandler.isMousePressed=!0;var s=t.renderer.layerConfig.lineHeight,c=t.renderer.layerConfig.lineHeight,y=e.timeStamp;f=y;var b=i[0],w=b.clientX,E=b.clientY;Math.abs(o-w)+Math.abs(u-E)>s&&(a=-1),o=e.clientX=w,u=e.clientY=E,v=m=0;var T=new r(e,t);p=T.getDocumentPosition();if(y-a<500&&i.length==1&&!h)d++,e.preventDefault(),e.button=0,x();else {d=0;var N=t.selection.cursor,C=t.selection.isEmpty()?N:t.selection.anchor,k=t.renderer.$cursorLayer.getPixelPosition(N,!0),L=t.renderer.$cursorLayer.getPixelPosition(C,!0),A=t.renderer.scroller.getBoundingClientRect(),O=t.renderer.layerConfig.offset,M=t.renderer.scrollLeft,_=function(e,t){return e/=c,t=t/s-.75,e*e+t*t};if(e.clientX<A.left){n="zoom";return}var D=_(e.clientX-A.left-k.left+M,e.clientY-A.top-k.top+O),P=_(e.clientX-A.left-L.left+M,e.clientY-A.top-L.top+O);D<3.5&&P<3.5&&(n=D>P?"cursor":"anchor"),P<3.5?n="anchor":D<3.5?n="cursor":n="scroll",l=setTimeout(S,450);}a=y;},t),i.addListener(e,"touchend",function(e){g=t.$mouseHandler.isMousePressed=!1,c&&clearInterval(c),n=="zoom"?(n="",h=0):l?(t.selection.moveToPosition(p),h=0,w()):n=="scroll"?(T(),E()):w(),clearTimeout(l),l=null;},t),i.addListener(e,"touchmove",function(e){l&&(clearTimeout(l),l=null);var i=e.touches;if(i.length>1||n=="zoom")return;var s=i[0],a=o-s.clientX,c=u-s.clientY;if(n=="wait"){if(!(a*a+c*c>4))return e.preventDefault();n="cursor";}o=s.clientX,u=s.clientY,e.clientX=s.clientX,e.clientY=s.clientY;var h=e.timeStamp,p=h-f;f=h;if(n=="scroll"){var d=new r(e,t);d.speed=1,d.wheelX=a,d.wheelY=c,10*Math.abs(a)<Math.abs(c)&&(a=0),10*Math.abs(c)<Math.abs(a)&&(c=0),p!=0&&(v=a/p,m=c/p),t._emit("mousewheel",d),d.propagationStopped||(v=m=0);}else {var g=new r(e,t),y=g.getDocumentPosition();n=="cursor"?t.selection.moveCursorToPosition(y):n=="anchor"&&t.selection.setSelectionAnchor(y.row,y.column),t.renderer.scrollCursorIntoView(y),e.preventDefault();}},t);};}),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/mouse/touch_handler","ace/config"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=e("./default_handlers").DefaultHandlers,o=e("./default_gutter_handler").GutterHandler,u=e("./mouse_event").MouseEvent,a=e("./dragdrop_handler").DragdropHandler,f=e("./touch_handler").addTouchListeners,l=e("../config"),c=function(e){var t=this;this.editor=e,new s(this),new o(this),new a(this);var n=function(t){var n=!document.hasFocus||!document.hasFocus()||!e.isFocused()&&document.activeElement==(e.textInput&&e.textInput.getElement());n&&window.focus(),e.focus(),setTimeout(function(){e.isFocused()||e.focus();});},u=e.renderer.getMouseEventTarget();r.addListener(u,"click",this.onMouseEvent.bind(this,"click"),e),r.addListener(u,"mousemove",this.onMouseMove.bind(this,"mousemove"),e),r.addMultiMouseDownListener([u,e.renderer.scrollBarV&&e.renderer.scrollBarV.inner,e.renderer.scrollBarH&&e.renderer.scrollBarH.inner,e.textInput&&e.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent",e),r.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"),e),f(e.container,e);var l=e.renderer.$gutter;r.addListener(l,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"),e),r.addListener(l,"click",this.onMouseEvent.bind(this,"gutterclick"),e),r.addListener(l,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"),e),r.addListener(l,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"),e),r.addListener(u,"mousedown",n,e),r.addListener(l,"mousedown",n,e),i.isIE&&e.renderer.scrollBarV&&(r.addListener(e.renderer.scrollBarV.element,"mousedown",n,e),r.addListener(e.renderer.scrollBarH.element,"mousedown",n,e)),e.on("mousemove",function(n){if(t.state||t.$dragDelay||!t.$dragEnabled)return;var r=e.renderer.screenToTextCoordinates(n.x,n.y),i=e.session.selection.getRange(),s=e.renderer;!i.isEmpty()&&i.insideStart(r.row,r.column)?s.setCursorStyle("default"):s.setCursorStyle("");},e);};((function(){this.onMouseEvent=function(e,t){if(!this.editor.session)return;this.editor._emit(e,new u(t,this.editor));},this.onMouseMove=function(e,t){var n=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!n||!n.length)return;this.editor._emit(e,new u(t,this.editor));},this.onMouseWheel=function(e,t){var n=new u(t,this.editor);n.speed=this.$scrollSpeed*2,n.wheelX=t.wheelX,n.wheelY=t.wheelY,this.editor._emit(e,n);},this.setState=function(e){this.state=e;},this.captureMouse=function(e,t){this.x=e.x,this.y=e.y,this.isMousePressed=!0;var n=this.editor,s=this.editor.renderer;s.$isMousePressed=!0;var o=this,a=function(e){if(!e)return;if(i.isWebKit&&!e.which&&o.releaseMouse)return o.releaseMouse();o.x=e.clientX,o.y=e.clientY,t&&t(e),o.mouseEvent=new u(e,o.editor),o.$mouseMoved=!0;},f=function(e){n.off("beforeEndOperation",c),clearInterval(h),n.session&&l(),o[o.state+"End"]&&o[o.state+"End"](e),o.state="",o.isMousePressed=s.$isMousePressed=!1,s.$keepTextAreaAtCursor&&s.$moveTextAreaToCursor(),o.$onCaptureMouseMove=o.releaseMouse=null,e&&o.onMouseEvent("mouseup",e),n.endOperation();},l=function(){o[o.state]&&o[o.state](),o.$mouseMoved=!1;};if(i.isOldIE&&e.domEvent.type=="dblclick")return setTimeout(function(){f(e);});var c=function(e){if(!o.releaseMouse)return;n.curOp.command.name&&n.curOp.selectionChanged&&(o[o.state+"End"]&&o[o.state+"End"](),o.state="",o.releaseMouse());};n.on("beforeEndOperation",c),n.startOperation({command:{name:"mouse"}}),o.$onCaptureMouseMove=a,o.releaseMouse=r.capture(this.editor.container,a,f);var h=setInterval(l,20);},this.releaseMouse=null,this.cancelContextMenu=function(){var e=function(t){if(t&&t.domEvent&&t.domEvent.type!="contextmenu")return;this.editor.off("nativecontextmenu",e),t&&t.domEvent&&r.stopEvent(t.domEvent);}.bind(this);setTimeout(e,10),this.editor.on("nativecontextmenu",e);},this.destroy=function(){this.releaseMouse&&this.releaseMouse();};})).call(c.prototype),l.defineOptions(c.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:i.isMac?150:0},dragEnabled:{initialValue:!0},focusTimeout:{initialValue:0},tooltipFollowsMouse:{initialValue:!0}}),t.MouseHandler=c;}),ace.define("ace/mouse/fold_handler",["require","exports","module","ace/lib/dom"],function(e,t,n){function i(e){e.on("click",function(t){var n=t.getDocumentPosition(),i=e.session,s=i.getFoldAt(n.row,n.column,1);s&&(t.getAccelKey()?i.removeFold(s):i.expandFold(s),t.stop());var o=t.domEvent&&t.domEvent.target;o&&r.hasCssClass(o,"ace_inline_button")&&r.hasCssClass(o,"ace_toggle_wrap")&&(i.setOption("wrap",!i.getUseWrapMode()),e.renderer.scrollCursorIntoView());}),e.on("gutterclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session;i.foldWidgets&&i.foldWidgets[r]&&e.session.onFoldWidgetClick(r,t),e.isFocused()||e.focus(),t.stop();}}),e.on("gutterdblclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session,s=i.getParentFoldRangeData(r,!0),o=s.range||s.firstRange;if(o){r=o.start.row;var u=i.getFoldAt(r,i.getLine(r).length,1);u?i.removeFold(u):(i.addFold("...",o),e.renderer.scrollCursorIntoView({row:o.start.row,column:0}));}t.stop();}});}var r=e("../lib/dom");t.FoldHandler=i;}),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(e,t,n){var r=e("../lib/keys"),i=e("../lib/event"),s=function(e){this.$editor=e,this.$data={editor:e},this.$handlers=[],this.setDefaultHandler(e.commands);};((function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0);},this.setKeyboardHandler=function(e){var t=this.$handlers;if(t[t.length-1]==e)return;while(t[t.length-1]&&t[t.length-1]!=this.$defaultHandler)this.removeKeyboardHandler(t[t.length-1]);this.addKeyboardHandler(e,1);},this.addKeyboardHandler=function(e,t){if(!e)return;typeof e=="function"&&!e.handleKeyboard&&(e.handleKeyboard=e);var n=this.$handlers.indexOf(e);n!=-1&&this.$handlers.splice(n,1),t==undefined?this.$handlers.push(e):this.$handlers.splice(t,0,e),n==-1&&e.attach&&e.attach(this.$editor);},this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e);return t==-1?!1:(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.getStatusText=function(){var e=this.$data,t=e.editor;return this.$handlers.map(function(n){return n.getStatusText&&n.getStatusText(t,e)||""}).filter(Boolean).join(" ")},this.$callKeyboardHandlers=function(e,t,n,r){var s,o=!1,u=this.$editor.commands;for(var a=this.$handlers.length;a--;){s=this.$handlers[a].handleKeyboard(this.$data,e,t,n,r);if(!s||!s.command)continue;s.command=="null"?o=!0:o=u.exec(s.command,this.$editor,s.args,r),o&&r&&e!=-1&&s.passEvent!=1&&s.command.passEvent!=1&&i.stopEvent(r);if(o)break}return !o&&e==-1&&(s={command:"insertstring"},o=u.exec("insertstring",this.$editor,t)),o&&this.$editor._signal&&this.$editor._signal("keyboardActivity",s),o},this.onCommandKey=function(e,t,n){var i=r.keyCodeToString(n);return this.$callKeyboardHandlers(t,i,n,e)},this.onTextInput=function(e){return this.$callKeyboardHandlers(-1,e)};})).call(s.prototype),t.KeyBinding=s;}),ace.define("ace/lib/bidiutil",["require","exports","module"],function(e,t,n){function F(e,t,n,r){var i=s?d:p,c=null,h=null,v=null,m=0,g=null,y=null,b=-1,w=null,E=null,T=[];if(!r)for(w=0,r=[];w<n;w++)r[w]=R(e[w]);o=s,u=!1,f=!1,l=!1;for(E=0;E<n;E++){c=m,T[E]=h=q(e,r,T,E),m=i[c][h],g=m&240,m&=15,t[E]=v=i[m][5];if(g>0)if(g==16){for(w=b;w<E;w++)t[w]=1;b=-1;}else b=-1;y=i[m][6];if(y)b==-1&&(b=E);else if(b>-1){for(w=b;w<E;w++)t[w]=v;b=-1;}r[E]==S&&(t[E]=0),o|=v;}if(l)for(w=0;w<n;w++)if(r[w]==x){t[w]=s;for(var C=w-1;C>=0;C--){if(r[C]!=N)break;t[C]=s;}}}function I(e,t,n){if(o<e)return;if(e==1&&s==m&&!f){n.reverse();return}var r=n.length,i=0,u,a,l,c;while(i<r){if(t[i]>=e){u=i+1;while(u<r&&t[u]>=e)u++;for(a=i,l=u-1;a<l;a++,l--)c=n[a],n[a]=n[l],n[l]=c;i=u;}i++;}}function q(e,t,n,r){var i=t[r],o,c,h,p;switch(i){case g:case y:u=!1;case E:case w:return i;case b:return u?w:b;case T:return u=!0,y;case N:return E;case C:if(r<1||r+1>=t.length||(o=n[r-1])!=b&&o!=w||(c=t[r+1])!=b&&c!=w)return E;return u&&(c=w),c==o?c:E;case k:o=r>0?n[r-1]:S;if(o==b&&r+1<t.length&&t[r+1]==b)return b;return E;case L:if(r>0&&n[r-1]==b)return b;if(u)return E;p=r+1,h=t.length;while(p<h&&t[p]==L)p++;if(p<h&&t[p]==b)return b;return E;case A:h=t.length,p=r+1;while(p<h&&t[p]==A)p++;if(p<h){var d=e[r],v=d>=1425&&d<=2303||d==64286;o=t[p];if(v&&(o==y||o==T))return y}if(r<1||(o=t[r-1])==S)return E;return n[r-1];case S:return u=!1,f=!0,s;case x:return l=!0,E;case O:case M:case D:case P:case _:u=!1;case H:return E}}function R(e){var t=e.charCodeAt(0),n=t>>8;return n==0?t>191?g:B[t]:n==5?/[\u0591-\u05f4]/.test(e)?y:g:n==6?/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)?A:/[\u0660-\u0669\u066b-\u066c]/.test(e)?w:t==1642?L:/[\u06f0-\u06f9]/.test(e)?b:T:n==32&&t<=8287?j[t&255]:n==254?t>=65136?T:E:E}var s=0,o=0,u=!1,f=!1,l=!1,p=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],v=0,m=1,g=0,y=1,b=2,w=3,E=4,S=5,x=6,T=7,N=8,C=9,k=10,L=11,A=12,O=13,M=14,_=15,D=16,P=17,H=18,B=[H,H,H,H,H,H,H,H,H,x,S,x,N,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,S,S,S,x,N,E,E,L,L,L,E,E,E,E,E,k,C,k,C,C,b,b,b,b,b,b,b,b,b,b,C,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,H,H,H,H,H,H,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,C,E,L,L,L,L,E,E,E,E,g,E,E,H,E,E,L,L,b,b,E,g,E,E,E,b,g,E,E,E,E,E],j=[N,N,N,N,N,N,N,N,N,N,N,H,H,H,g,y,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N,S,O,M,_,D,P,C,L,L,L,L,L,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,C,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N];t.L=g,t.R=y,t.EN=b,t.ON_R=3,t.AN=4,t.R_H=5,t.B=6,t.RLE=7,t.DOT="\u00b7",t.doBidiReorder=function(e,n,r){if(e.length<2)return {};var i=e.split(""),o=new Array(i.length),u=new Array(i.length),a=[];s=r?m:v,F(i,a,i.length,n);for(var f=0;f<o.length;o[f]=f,f++);I(2,a,o),I(1,a,o);for(var f=0;f<o.length-1;f++)n[f]===w?a[f]=t.AN:a[f]===y&&(n[f]>T&&n[f]<O||n[f]===E||n[f]===H)?a[f]=t.ON_R:f>0&&i[f-1]==="\u0644"&&/\u0622|\u0623|\u0625|\u0627/.test(i[f])&&(a[f-1]=a[f]=t.R_H,f++);i[i.length-1]===t.DOT&&(a[i.length-1]=t.B),i[0]==="\u202b"&&(a[0]=t.RLE);for(var f=0;f<o.length;f++)u[f]=a[o[f]];return {logicalFromVisual:o,bidiLevels:u}},t.hasBidiCharacters=function(e,t){var n=!1;for(var r=0;r<e.length;r++)t[r]=R(e.charAt(r)),!n&&(t[r]==y||t[r]==T||t[r]==w)&&(n=!0);return n},t.getVisualFromLogicalIdx=function(e,t){for(var n=0;n<t.logicalFromVisual.length;n++)if(t.logicalFromVisual[n]==e)return n;return 0};}),ace.define("ace/bidihandler",["require","exports","module","ace/lib/bidiutil","ace/lib/lang"],function(e,t,n){var r=e("./lib/bidiutil"),i=e("./lib/lang"),s=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,o=function(e){this.session=e,this.bidiMap={},this.currentRow=null,this.bidiUtil=r,this.charWidths=[],this.EOL="\u00ac",this.showInvisibles=!0,this.isRtlDir=!1,this.$isRtl=!1,this.line="",this.wrapIndent=0,this.EOF="\u00b6",this.RLE="\u202b",this.contentWidth=0,this.fontMetrics=null,this.rtlLineOffset=0,this.wrapOffset=0,this.isMoveLeftOperation=!1,this.seenBidi=s.test(e.getValue());};((function(){this.isBidiRow=function(e,t,n){return this.seenBidi?(e!==this.currentRow&&(this.currentRow=e,this.updateRowLine(t,n),this.updateBidiMap()),this.bidiMap.bidiLevels):!1},this.onChange=function(e){this.seenBidi?this.currentRow=null:e.action=="insert"&&s.test(e.lines.join("\n"))&&(this.seenBidi=!0,this.currentRow=null);},this.getDocumentRow=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n=this.session.$getRowCacheIndex(t,this.currentRow);n>=0&&(e=this.session.$docRowCache[n]);}return e},this.getSplitIndex=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n,r=this.session.$getRowCacheIndex(t,this.currentRow);while(this.currentRow-e>0){n=this.session.$getRowCacheIndex(t,this.currentRow-e-1);if(n!==r)break;r=n,e++;}}else e=this.currentRow;return e},this.updateRowLine=function(e,t){e===undefined&&(e=this.getDocumentRow());var n=e===this.session.getLength()-1,s=n?this.EOF:this.EOL;this.wrapIndent=0,this.line=this.session.getLine(e),this.isRtlDir=this.$isRtl||this.line.charAt(0)===this.RLE;if(this.session.$useWrapMode){var o=this.session.$wrapData[e];o&&(t===undefined&&(t=this.getSplitIndex()),t>0&&o.length?(this.wrapIndent=o.indent,this.wrapOffset=this.wrapIndent*this.charWidths[r.L],this.line=t<o.length?this.line.substring(o[t-1],o[t]):this.line.substring(o[o.length-1])):this.line=this.line.substring(0,o[t]),t==o.length&&(this.line+=this.showInvisibles?s:r.DOT));}else this.line+=this.showInvisibles?s:r.DOT;var u=this.session,a=0,f;this.line=this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g,function(e,t){return e==="	"||u.isFullWidth(e.charCodeAt(0))?(f=e==="	"?u.getScreenTabSize(t+a):2,a+=f-1,i.stringRepeat(r.DOT,f)):e}),this.isRtlDir&&(this.fontMetrics.$main.textContent=this.line.charAt(this.line.length-1)==r.DOT?this.line.substr(0,this.line.length-1):this.line,this.rtlLineOffset=this.contentWidth-this.fontMetrics.$main.getBoundingClientRect().width);},this.updateBidiMap=function(){var e=[];r.hasBidiCharacters(this.line,e)||this.isRtlDir?this.bidiMap=r.doBidiReorder(this.line,e,this.isRtlDir):this.bidiMap={};},this.markAsDirty=function(){this.currentRow=null;},this.updateCharacterWidths=function(e){if(this.characterWidth===e.$characterSize.width)return;this.fontMetrics=e;var t=this.characterWidth=e.$characterSize.width,n=e.$measureCharWidth("\u05d4");this.charWidths[r.L]=this.charWidths[r.EN]=this.charWidths[r.ON_R]=t,this.charWidths[r.R]=this.charWidths[r.AN]=n,this.charWidths[r.R_H]=n*.45,this.charWidths[r.B]=this.charWidths[r.RLE]=0,this.currentRow=null;},this.setShowInvisibles=function(e){this.showInvisibles=e,this.currentRow=null;},this.setEolChar=function(e){this.EOL=e;},this.setContentWidth=function(e){this.contentWidth=e;},this.isRtlLine=function(e){return this.$isRtl?!0:e!=undefined?this.session.getLine(e).charAt(0)==this.RLE:this.isRtlDir},this.setRtlDirection=function(e,t){var n=e.getCursorPosition();for(var r=e.selection.getSelectionAnchor().row;r<=n.row;r++)!t&&e.session.getLine(r).charAt(0)===e.session.$bidiHandler.RLE?e.session.doc.removeInLine(r,0,1):t&&e.session.getLine(r).charAt(0)!==e.session.$bidiHandler.RLE&&e.session.doc.insert({column:0,row:r},e.session.$bidiHandler.RLE);},this.getPosLeft=function(e){e-=this.wrapIndent;var t=this.line.charAt(0)===this.RLE?1:0,n=e>t?this.session.getOverwrite()?e:e-1:t,i=r.getVisualFromLogicalIdx(n,this.bidiMap),s=this.bidiMap.bidiLevels,o=0;!this.session.getOverwrite()&&e<=t&&s[i]%2!==0&&i++;for(var u=0;u<i;u++)o+=this.charWidths[s[u]];return !this.session.getOverwrite()&&e>t&&s[i]%2===0&&(o+=this.charWidths[s[i]]),this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset),this.isRtlDir&&(o+=this.rtlLineOffset),o},this.getSelections=function(e,t){var n=this.bidiMap,r=n.bidiLevels,i,s=[],o=0,u=Math.min(e,t)-this.wrapIndent,a=Math.max(e,t)-this.wrapIndent,f=!1,l=!1,c=0;this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);for(var h,p=0;p<r.length;p++)h=n.logicalFromVisual[p],i=r[p],f=h>=u&&h<a,f&&!l?c=o:!f&&l&&s.push({left:c,width:o-c}),o+=this.charWidths[i],l=f;f&&p===r.length&&s.push({left:c,width:o-c});if(this.isRtlDir)for(var d=0;d<s.length;d++)s[d].left+=this.rtlLineOffset;return s},this.offsetToCol=function(e){this.isRtlDir&&(e-=this.rtlLineOffset);var t=0,e=Math.max(e,0),n=0,r=0,i=this.bidiMap.bidiLevels,s=this.charWidths[i[r]];this.wrapIndent&&(e-=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);while(e>n+s/2){n+=s;if(r===i.length-1){s=0;break}s=this.charWidths[i[++r]];}return r>0&&i[r-1]%2!==0&&i[r]%2===0?(e<n&&r--,t=this.bidiMap.logicalFromVisual[r]):r>0&&i[r-1]%2===0&&i[r]%2!==0?t=1+(e>n?this.bidiMap.logicalFromVisual[r]:this.bidiMap.logicalFromVisual[r-1]):this.isRtlDir&&r===i.length-1&&s===0&&i[r-1]%2===0||!this.isRtlDir&&r===0&&i[r]%2!==0?t=1+this.bidiMap.logicalFromVisual[r]:(r>0&&i[r-1]%2!==0&&s!==0&&r--,t=this.bidiMap.logicalFromVisual[r]),t===0&&this.isRtlDir&&t++,t+this.wrapIndent};})).call(o.prototype),t.BidiHandler=o;}),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1;var t=this;this.cursor.on("change",function(e){t.$cursorChanged=!0,t.$silent||t._emit("changeCursor"),!t.$isEmpty&&!t.$silent&&t._emit("changeSelection"),!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column&&(t.$desiredColumn=null);}),this.anchor.on("change",function(){t.$anchorChanged=!0,!t.$isEmpty&&!t.$silent&&t._emit("changeSelection");});};((function(){r.implement(this,s),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return !this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(e,t){this.$isEmpty=!1,this.anchor.setPosition(e,t);},this.getAnchor=this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var e=this.anchor,t=this.lead;return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead;return this.$isEmpty?o.fromPoints(t,t):this.isBackwards()?o.fromPoints(t,e):o.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"));},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE);},this.setRange=this.setSelectionRange=function(e,t){var n=t?e.end:e.start,r=t?e.start:e.end;this.$setSelection(n.row,n.column,r.row,r.column);},this.$setSelection=function(e,t,n,r){if(this.$silent)return;var i=this.$isEmpty,s=this.inMultiSelectMode;this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(e,t),this.cursor.setPosition(n,r),this.$isEmpty=!o.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||i!=this.$isEmpty||s)&&this._emit("changeSelection");},this.$moveSelection=function(e){var t=this.lead;this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this);},this.selectTo=function(e,t){this.$moveSelection(function(){this.moveCursorTo(e,t);});},this.selectToPosition=function(e){this.$moveSelection(function(){this.moveCursorToPosition(e);});},this.moveTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t);},this.moveToPosition=function(e){this.clearSelection(),this.moveCursorToPosition(e);},this.selectUp=function(){this.$moveSelection(this.moveCursorUp);},this.selectDown=function(){this.$moveSelection(this.moveCursorDown);},this.selectRight=function(){this.$moveSelection(this.moveCursorRight);},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft);},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart);},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd);},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd);},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart);},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight);},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft);},this.getWordRange=function(e,t){if(typeof t=="undefined"){var n=e||this.lead;e=n.row,t=n.column;}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange());},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column);this.setSelectionRange(t);},this.getLineRange=function(e,t){var n=typeof e=="number"?e:this.lead.row,r,i=this.session.getFoldLine(n);return i?(n=i.start.row,r=i.end.row):r=n,t===!0?new o(n,0,r,this.session.getLine(r).length):new o(n,0,r+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange());},this.moveCursorUp=function(){this.moveCursorBy(-1,0);},this.moveCursorDown=function(){this.moveCursorBy(1,0);},this.wouldMoveIntoSoftTab=function(e,t,n){var r=e.column,i=e.column+t;return n<0&&(r=e.column-t,i=e.column),this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(r,i).split(" ").length-1==t},this.moveCursorLeft=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,-1))this.moveCursorTo(t.start.row,t.start.column);else if(e.column===0)e.row>0&&this.moveCursorTo(e.row-1,this.doc.getLine(e.row-1).length);else {var n=this.session.getTabSize();this.wouldMoveIntoSoftTab(e,n,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-n):this.moveCursorBy(0,-1);}},this.moveCursorRight=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,1))this.moveCursorTo(t.end.row,t.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else {var n=this.session.getTabSize(),e=this.lead;this.wouldMoveIntoSoftTab(e,n,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,n):this.moveCursorBy(0,1);}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,n=this.session.documentToScreenRow(e,t),r=this.session.screenToDocumentPosition(n,0),i=this.session.getDisplayLine(e,null,r.row,r.column),s=i.match(/^\s*/);s[0].length!=t&&!this.session.$useEmacsStyleLineStart&&(r.column+=s[0].length),this.moveCursorToPosition(r);},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column);if(this.lead.column==t.column){var n=this.session.getLine(t.row);if(t.column==n.length){var r=n.search(/\s+$/);r>0&&(t.column=r);}}this.moveCursorTo(t.row,t.column);},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length;this.moveCursorTo(e,t);},this.moveCursorFileStart=function(){this.moveCursorTo(0,0);},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var i=this.session.getFoldAt(e,t,1);if(i){this.moveCursorTo(i.end.row,i.end.column);return}this.session.nonTokenRe.exec(r)&&(t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,r=n.substring(t));if(t>=n.length){this.moveCursorTo(e,n.length),this.moveCursorRight(),e<this.doc.getLength()-1&&this.moveCursorWordRight();return}this.session.tokenRe.exec(r)&&(t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t);},this.moveCursorLongWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1)){this.moveCursorTo(n.start.row,n.start.column);return}var r=this.session.getFoldStringAt(e,t,-1);r==null&&(r=this.doc.getLine(e).substring(0,t));var s=i.stringReverse(r);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(s)&&(t-=this.session.nonTokenRe.lastIndex,s=s.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0);if(t<=0){this.moveCursorTo(e,0),this.moveCursorLeft(),e>0&&this.moveCursorWordLeft();return}this.session.tokenRe.exec(s)&&(t-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t);},this.$shortWordEndIndex=function(e){var t=0,n,r=/\s/,i=this.session.tokenRe;i.lastIndex=0;if(this.session.tokenRe.exec(e))t=this.session.tokenRe.lastIndex;else {while((n=e[t])&&r.test(n))t++;if(t<1){i.lastIndex=0;while((n=e[t])&&!i.test(n)){i.lastIndex=0,t++;if(r.test(n)){if(t>2){t--;break}while((n=e[t])&&r.test(n))t++;if(t>2)break}}}}return i.lastIndex=0,t},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t),i=this.session.getFoldAt(e,t,1);if(i)return this.moveCursorTo(i.end.row,i.end.column);if(t==n.length){var s=this.doc.getLength();do e++,r=this.doc.getLine(e);while(e<s&&/^\s*$/.test(r));/^\s+/.test(r)||(r=""),t=0;}var o=this.$shortWordEndIndex(r);this.moveCursorTo(e,t+o);},this.moveCursorShortWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1))return this.moveCursorTo(n.start.row,n.start.column);var r=this.session.getLine(e).substring(0,t);if(t===0){do e--,r=this.doc.getLine(e);while(e>0&&/^\s*$/.test(r));t=r.length,/\s+$/.test(r)||(r="");}var s=i.stringReverse(r),o=this.$shortWordEndIndex(s);return this.moveCursorTo(e,t-o)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight();},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft();},this.moveCursorBy=function(e,t){var n=this.session.documentToScreenPosition(this.lead.row,this.lead.column),r;t===0&&(e!==0&&(this.session.$bidiHandler.isBidiRow(n.row,this.lead.row)?(r=this.session.$bidiHandler.getPosLeft(n.column),n.column=Math.round(r/this.session.$bidiHandler.charWidths[0])):r=n.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?n.column=this.$desiredColumn:this.$desiredColumn=n.column);if(e!=0&&this.session.lineWidgets&&this.session.lineWidgets[this.lead.row]){var i=this.session.lineWidgets[this.lead.row];e<0?e-=i.rowsAbove||0:e>0&&(e+=i.rowCount-(i.rowsAbove||0));}var s=this.session.screenToDocumentPosition(n.row+e,n.column,r);e!==0&&t===0&&s.row===this.lead.row&&s.column===this.lead.column,this.moveCursorTo(s.row,s.column+t,t===0);},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column);},this.moveCursorTo=function(e,t,n){var r=this.session.getFoldAt(e,t,1);r&&(e=r.start.row,t=r.start.column),this.$keepDesiredColumnOnChange=!0;var i=this.session.getLine(e);/[\uDC00-\uDFFF]/.test(i.charAt(t))&&i.charAt(t-1)&&(this.lead.row==e&&this.lead.column==t+1?t-=1:t+=1),this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,n||(this.$desiredColumn=null);},this.moveCursorToScreen=function(e,t,n){var r=this.session.screenToDocumentPosition(e,t);this.moveCursorTo(r.row,r.column,n);},this.detach=function(){this.lead.detach(),this.anchor.detach();},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn;},this.toOrientedRange=function(e){var t=this.getRange();return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e},this.getRangeOfMovements=function(e){var t=this.getCursor();try{e(this);var n=this.getCursor();return o.fromPoints(t,n)}catch(r){return o.fromPoints(t,t)}finally{this.moveCursorToPosition(t);}},this.toJSON=function(){if(this.rangeCount)var e=this.ranges.map(function(e){var t=e.clone();return t.isBackwards=e.cursor==e.start,t});else {var e=this.getRange();e.isBackwards=this.isBackwards();}return e},this.fromJSON=function(e){if(e.start==undefined){if(this.rangeList&&e.length>1){this.toSingleRange(e[0]);for(var t=e.length;t--;){var n=o.fromPoints(e[t].start,e[t].end);e[t].isBackwards&&(n.cursor=n.start),this.addRange(n,!0);}return}e=e[0];}this.rangeList&&this.toSingleRange(e),this.setSelectionRange(e,e.isBackwards);},this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return !1;if(!e.length||!this.ranges)return this.getRange().isEqual(e);for(var t=this.ranges.length;t--;)if(!this.ranges[t].isEqual(e[t]))return !1;return !0};})).call(u.prototype),t.Selection=u;}),ace.define("ace/tokenizer",["require","exports","module","ace/config"],function(e,t,n){var r=e("./config"),i=2e3,s=function(e){this.states=e,this.regExps={},this.matchMappings={};for(var t in this.states){var n=this.states[t],r=[],i=0,s=this.matchMappings[t]={defaultToken:"text"},o="g",u=[];for(var a=0;a<n.length;a++){var f=n[a];f.defaultToken&&(s.defaultToken=f.defaultToken),f.caseInsensitive&&o.indexOf("i")===-1&&(o+="i"),f.unicode&&o.indexOf("u")===-1&&(o+="u");if(f.regex==null)continue;f.regex instanceof RegExp&&(f.regex=f.regex.toString().slice(1,-1));var l=f.regex,c=(new RegExp("(?:("+l+")|(.))")).exec("a").length-2;Array.isArray(f.token)?f.token.length==1||c==1?f.token=f.token[0]:c-1!=f.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:f,groupCount:c-1}),f.token=f.token[0]):(f.tokenArray=f.token,f.token=null,f.onMatch=this.$arrayTokens):typeof f.token=="function"&&!f.onMatch&&(c>1?f.onMatch=this.$applyToken:f.onMatch=f.token),c>1&&(/\\\d/.test(f.regex)?l=f.regex.replace(/\\([0-9]+)/g,function(e,t){return "\\"+(parseInt(t,10)+i+1)}):(c=1,l=this.removeCapturingGroups(f.regex)),!f.splitRegex&&typeof f.token!="string"&&u.push(f)),s[i]=a,i+=c,r.push(l),f.onMatch||(f.onMatch=null);}r.length||(s[0]=0,r.push("$")),u.forEach(function(e){e.splitRegex=this.createSplitterRegexp(e.regex,o);},this),this.regExps[t]=new RegExp("("+r.join(")|(")+")|($)",o);}};((function(){this.$setMaxTokenCount=function(e){i=e|0;},this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t);if(typeof n=="string")return [{type:n,value:e}];var r=[];for(var i=0,s=n.length;i<s;i++)t[i]&&(r[r.length]={type:n[i],value:t[i]});return r},this.$arrayTokens=function(e){if(!e)return [];var t=this.splitRegex.exec(e);if(!t)return "text";var n=[],r=this.tokenArray;for(var i=0,s=r.length;i<s;i++)t[i+1]&&(n[n.length]={type:r[i],value:t[i+1]});return n},this.removeCapturingGroups=function(e){var t=e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,function(e,t){return t?"(?:":e});return t},this.createSplitterRegexp=function(e,t){if(e.indexOf("(?=")!=-1){var n=0,r=!1,i={};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(e,t,s,o,u,a){return r?r=u!="]":u?r=!0:o?(n==i.stack&&(i.end=a+1,i.stack=-1),n--):s&&(n++,s.length!=1&&(i.stack=n,i.start=a)),e}),i.end!=null&&/^\)*$/.test(e.substr(i.end))&&(e=e.substring(0,i.start)+e.substr(i.end));}return e.charAt(0)!="^"&&(e="^"+e),e.charAt(e.length-1)!="$"&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&typeof t!="string"){var n=t.slice(0);t=n[0],t==="#tmp"&&(n.shift(),t=n.shift());}else var n=[];var r=t||"start",s=this.states[r];s||(r="start",s=this.states[r]);var o=this.matchMappings[r],u=this.regExps[r];u.lastIndex=0;var a,f=[],l=0,c=0,h={type:null,value:""};while(a=u.exec(e)){var p=o.defaultToken,d=null,v=a[0],m=u.lastIndex;if(m-v.length>l){var g=e.substring(l,m-v.length);h.type==p?h.value+=g:(h.type&&f.push(h),h={type:p,value:g});}for(var y=0;y<a.length-2;y++){if(a[y+1]===undefined)continue;d=s[o[y]],d.onMatch?p=d.onMatch(v,r,n,e):p=d.token,d.next&&(typeof d.next=="string"?r=d.next:r=d.next(r,n),s=this.states[r],s||(this.reportError("state doesn't exist",r),r="start",s=this.states[r]),o=this.matchMappings[r],l=m,u=this.regExps[r],u.lastIndex=m),d.consumeLineEnd&&(l=m);break}if(v)if(typeof p=="string")!!d&&d.merge===!1||h.type!==p?(h.type&&f.push(h),h={type:p,value:v}):h.value+=v;else if(p){h.type&&f.push(h),h={type:null,value:""};for(var y=0;y<p.length;y++)f.push(p[y]);}if(l==e.length)break;l=m;if(c++>i){c>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});while(l<e.length)h.type&&f.push(h),h={value:e.substring(l,l+=500),type:"overflow"};r="start",n=[];break}}return h.type&&f.push(h),n.length>1&&n[0]!==r&&n.unshift("#tmp",r),{tokens:f,state:n.length?n:r}},this.reportError=r.reportError;})).call(s.prototype),t.Tokenizer=s;}),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(e,t,n){var r=e("../lib/lang"),i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]};};((function(){this.addRules=function(e,t){if(!t){for(var n in e)this.$rules[n]=e[n];return}for(var n in e){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i];if(s.next||s.onMatch)typeof s.next=="string"&&s.next.indexOf(t)!==0&&(s.next=t+s.next),s.nextState&&s.nextState.indexOf(t)!==0&&(s.nextState=t+s.nextState);}this.$rules[t+n]=r;}},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,i,s){var o=typeof e=="function"?(new e).getRules():e;if(i)for(var u=0;u<i.length;u++)i[u]=t+i[u];else {i=[];for(var a in o)i.push(t+a);}this.addRules(o,t);if(n){var f=Array.prototype[s?"push":"unshift"];for(var u=0;u<i.length;u++)f.apply(this.$rules[i[u]],r.deepCopy(n));}this.$embeds||(this.$embeds=[]),this.$embeds.push(t);},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return (e!="start"||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){function i(s){var o=r[s];o.processed=!0;for(var u=0;u<o.length;u++){var a=o[u],f=null;Array.isArray(a)&&(f=a,a={}),!a.regex&&a.start&&(a.regex=a.start,a.next||(a.next=[]),a.next.push({defaultToken:a.token},{token:a.token+".end",regex:a.end||a.start,next:"pop"}),a.token=a.token+".start",a.push=!0);var l=a.next||a.push;if(l&&Array.isArray(l)){var c=a.stateName;c||(c=a.token,typeof c!="string"&&(c=c[0]||""),r[c]&&(c+=n++)),r[c]=l,a.next=c,i(c);}else l=="pop"&&(a.next=t);a.push&&(a.nextState=a.next||a.push,a.next=e,delete a.push);if(a.rules)for(var h in a.rules)r[h]?r[h].push&&r[h].push.apply(r[h],a.rules[h]):r[h]=a.rules[h];var p=typeof a=="string"?a:a.include;p&&(Array.isArray(p)?f=p.map(function(e){return r[e]}):f=r[p]);if(f){var d=[u,1].concat(f);a.noEscape&&(d=d.filter(function(e){return !e.next})),o.splice.apply(o,d),u--;}a.keywordMap&&(a.token=this.createKeywordMapper(a.keywordMap,a.defaultToken||"text",a.caseInsensitive),delete a.defaultToken);}}var n=0,r=this.$rules;Object.keys(r).forEach(i,this);},this.createKeywordMapper=function(e,t,n,r){var i=Object.create(null);return this.$keywordList=[],Object.keys(e).forEach(function(t){var s=e[t],o=s.split(r||"|");for(var u=o.length;u--;){var a=o[u];this.$keywordList.push(a),n&&(a=a.toLowerCase()),i[a]=t;}},this),e=null,n?function(e){return i[e.toLowerCase()]||t}:function(e){return i[e]||t}},this.getKeywords=function(){return this.$keywords};})).call(i.prototype),t.TextHighlightRules=i;}),ace.define("ace/mode/behaviour",["require","exports","module"],function(e,t,n){var r=function(){this.$behaviours={};};((function(){this.add=function(e,t,n){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[e]:this.$behaviours[e]={};}this.$behaviours[e][t]=n;},this.addBehaviours=function(e){for(var t in e)for(var n in e[t])this.add(t,n,e[t][n]);},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e];},this.inherit=function(e,t){if(typeof e=="function")var n=(new e).getBehaviours(t);else var n=e.getBehaviours(t);this.addBehaviours(n);},this.getBehaviours=function(e){if(!e)return this.$behaviours;var t={};for(var n=0;n<e.length;n++)this.$behaviours[e[n]]&&(t[e[n]]=this.$behaviours[e[n]]);return t};})).call(r.prototype),t.Behaviour=r;}),ace.define("ace/token_iterator",["require","exports","module","ace/range"],function(e,t,n){var r=e("./range").Range,i=function(e,t,n){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t);var r=e.getTokenAt(t,n);this.$tokenIndex=r?r.index:-1;};((function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0)return this.$row=0,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1;}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){this.$tokenIndex+=1;var e;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1,e||(e=this.$session.getLength());if(this.$row>=e)return this.$row=e-1,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0;}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,n=e[t].start;if(n!==undefined)return n;n=0;while(t>0)t-=1,n+=e[t].value.length;return n},this.getCurrentTokenPosition=function(){return {row:this.$row,column:this.getCurrentTokenColumn()}},this.getCurrentTokenRange=function(){var e=this.$rowTokens[this.$tokenIndex],t=this.getCurrentTokenColumn();return new r(this.$row,t,this.$row,t+e.value.length)};})).call(i.prototype),t.TokenIterator=i;}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t,n){var r=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),u=["text","paren.rparen","rparen","paren","punctuation.operator"],a=["text","paren.rparen","rparen","paren","punctuation.operator","comment"],f,l={},c={'"':'"',"'":"'"},h=function(e){var t=-1;e.multiSelect&&(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount}));if(l[t])return f=l[t];f=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""};},p=function(e,t,n,r){var i=e.end.row-e.start.row;return {text:n+t+r,selection:[0,e.start.column+1,i,e.end.column+(i?0:1)]}},d=function(e){this.add("braces","insertion",function(t,n,r,i,s){var u=r.getCursorPosition(),a=i.doc.getLine(u.row);if(s=="{"){h(r);var l=r.getSelectionRange(),c=i.doc.getTextRange(l);if(c!==""&&c!=="{"&&r.getWrapBehavioursEnabled())return p(l,c,"{","}");if(d.isSaneInsertion(r,i))return /[\]\}\)]/.test(a[u.column])||r.inMultiSelectMode||e&&e.braces?(d.recordAutoInsert(r,i,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(r,i,"{"),{text:"{",selection:[1,1]})}else if(s=="}"){h(r);var v=a.substring(u.column,u.column+1);if(v=="}"){var m=i.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(m!==null&&d.isAutoInsertedClosing(u,a,s))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else {if(s=="\n"||s=="\r\n"){h(r);var g="";d.isMaybeInsertedClosing(u,a)&&(g=o.stringRepeat("}",f.maybeInsertedBrackets),d.clearMaybeInsertedClosing());var v=a.substring(u.column,u.column+1);if(v==="}"){var y=i.findMatchingBracket({row:u.row,column:u.column+1},"}");if(!y)return null;var b=this.$getIndent(i.getLine(y.row));}else {if(!g){d.clearMaybeInsertedClosing();return}var b=this.$getIndent(a);}var w=b+i.getTabString();return {text:"\n"+w+"\n"+b+g,selection:[1,w.length,1,w.length]}}d.clearMaybeInsertedClosing();}}),this.add("braces","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="{"){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u=="}")return i.end.column++,i;f.maybeInsertedBrackets--;}}),this.add("parens","insertion",function(e,t,n,r,i){if(i=="("){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"(",")");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(i==")"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==")"){var l=r.$findOpeningBracket(")",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="("){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==")")return i.end.column++,i}}),this.add("brackets","insertion",function(e,t,n,r,i){if(i=="["){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"[","]");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if(i=="]"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f=="]"){var l=r.$findOpeningBracket("]",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="["){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=="]")return i.end.column++,i}}),this.add("string_dquotes","insertion",function(e,t,n,r,i){var s=r.$mode.$quotes||c;if(i.length==1&&s[i]){if(this.lineCommentStart&&this.lineCommentStart.indexOf(i)!=-1)return;h(n);var o=i,u=n.getSelectionRange(),a=r.doc.getTextRange(u);if(a!==""&&(a.length!=1||!s[a])&&n.getWrapBehavioursEnabled())return p(u,a,o,o);if(!a){var f=n.getCursorPosition(),l=r.doc.getLine(f.row),d=l.substring(f.column-1,f.column),v=l.substring(f.column,f.column+1),m=r.getTokenAt(f.row,f.column),g=r.getTokenAt(f.row,f.column+1);if(d=="\\"&&m&&/escape/.test(m.type))return null;var y=m&&/string|escape/.test(m.type),b=!g||/string|escape/.test(g.type),w;if(v==o)w=y!==b,w&&/string\.end/.test(g.type)&&(w=!1);else {if(y&&!b)return null;if(y&&b)return null;var E=r.$mode.tokenRe;E.lastIndex=0;var S=E.test(d);E.lastIndex=0;var x=E.test(d);if(S||x)return null;if(v&&!/[\s;,.})\]\\]/.test(v))return null;var T=l[f.column-2];if(!(d!=o||T!=o&&!E.test(T)))return null;w=!0;}return {text:w?o+o:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,i){var s=r.$mode.$quotes||c,o=r.doc.getTextRange(i);if(!i.isMultiLine()&&s.hasOwnProperty(o)){h(n);var u=r.doc.getLine(i.start.row),a=u.substring(i.start.column+1,i.start.column+2);if(a==o)return i.end.column++,i}});};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){if(/[)}\]]/.test(e.session.getLine(n.row)[n.column]))return !0;var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",u))return !1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",a)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,f.autoInsertedLineEnd[0])||(f.autoInsertedBrackets=0),f.autoInsertedRow=r.row,f.autoInsertedLineEnd=n+i.substr(r.column),f.autoInsertedBrackets++;},d.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(f.maybeInsertedBrackets=0),f.maybeInsertedRow=r.row,f.maybeInsertedLineStart=i.substr(0,r.column)+n,f.maybeInsertedLineEnd=i.substr(r.column),f.maybeInsertedBrackets++;},d.isAutoInsertedClosing=function(e,t,n){return f.autoInsertedBrackets>0&&e.row===f.autoInsertedRow&&n===f.autoInsertedLineEnd[0]&&t.substr(e.column)===f.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return f.maybeInsertedBrackets>0&&e.row===f.maybeInsertedRow&&t.substr(e.column)===f.maybeInsertedLineEnd&&t.substr(0,e.column)==f.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){f.autoInsertedLineEnd=f.autoInsertedLineEnd.substr(1),f.autoInsertedBrackets--;},d.clearMaybeInsertedClosing=function(){f&&(f.maybeInsertedBrackets=0,f.maybeInsertedRow=-1);},r.inherits(d,i),t.CstyleBehaviour=d;}),ace.define("ace/unicode",["require","exports","module"],function(e,t,n){var r=[48,9,8,25,5,0,2,25,48,0,11,0,5,0,6,22,2,30,2,457,5,11,15,4,8,0,2,0,18,116,2,1,3,3,9,0,2,2,2,0,2,19,2,82,2,138,2,4,3,155,12,37,3,0,8,38,10,44,2,0,2,1,2,1,2,0,9,26,6,2,30,10,7,61,2,9,5,101,2,7,3,9,2,18,3,0,17,58,3,100,15,53,5,0,6,45,211,57,3,18,2,5,3,11,3,9,2,1,7,6,2,2,2,7,3,1,3,21,2,6,2,0,4,3,3,8,3,1,3,3,9,0,5,1,2,4,3,11,16,2,2,5,5,1,3,21,2,6,2,1,2,1,2,1,3,0,2,4,5,1,3,2,4,0,8,3,2,0,8,15,12,2,2,8,2,2,2,21,2,6,2,1,2,4,3,9,2,2,2,2,3,0,16,3,3,9,18,2,2,7,3,1,3,21,2,6,2,1,2,4,3,8,3,1,3,2,9,1,5,1,2,4,3,9,2,0,17,1,2,5,4,2,2,3,4,1,2,0,2,1,4,1,4,2,4,11,5,4,4,2,2,3,3,0,7,0,15,9,18,2,2,7,2,2,2,22,2,9,2,4,4,7,2,2,2,3,8,1,2,1,7,3,3,9,19,1,2,7,2,2,2,22,2,9,2,4,3,8,2,2,2,3,8,1,8,0,2,3,3,9,19,1,2,7,2,2,2,22,2,15,4,7,2,2,2,3,10,0,9,3,3,9,11,5,3,1,2,17,4,23,2,8,2,0,3,6,4,0,5,5,2,0,2,7,19,1,14,57,6,14,2,9,40,1,2,0,3,1,2,0,3,0,7,3,2,6,2,2,2,0,2,0,3,1,2,12,2,2,3,4,2,0,2,5,3,9,3,1,35,0,24,1,7,9,12,0,2,0,2,0,5,9,2,35,5,19,2,5,5,7,2,35,10,0,58,73,7,77,3,37,11,42,2,0,4,328,2,3,3,6,2,0,2,3,3,40,2,3,3,32,2,3,3,6,2,0,2,3,3,14,2,56,2,3,3,66,5,0,33,15,17,84,13,619,3,16,2,25,6,74,22,12,2,6,12,20,12,19,13,12,2,2,2,1,13,51,3,29,4,0,5,1,3,9,34,2,3,9,7,87,9,42,6,69,11,28,4,11,5,11,11,39,3,4,12,43,5,25,7,10,38,27,5,62,2,28,3,10,7,9,14,0,89,75,5,9,18,8,13,42,4,11,71,55,9,9,4,48,83,2,2,30,14,230,23,280,3,5,3,37,3,5,3,7,2,0,2,0,2,0,2,30,3,52,2,6,2,0,4,2,2,6,4,3,3,5,5,12,6,2,2,6,67,1,20,0,29,0,14,0,17,4,60,12,5,0,4,11,18,0,5,0,3,9,2,0,4,4,7,0,2,0,2,0,2,3,2,10,3,3,6,4,5,0,53,1,2684,46,2,46,2,132,7,6,15,37,11,53,10,0,17,22,10,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,31,48,0,470,1,36,5,2,4,6,1,5,85,3,1,3,2,2,89,2,3,6,40,4,93,18,23,57,15,513,6581,75,20939,53,1164,68,45,3,268,4,27,21,31,3,13,13,1,2,24,9,69,11,1,38,8,3,102,3,1,111,44,25,51,13,68,12,9,7,23,4,0,5,45,3,35,13,28,4,64,15,10,39,54,10,13,3,9,7,22,4,1,5,66,25,2,227,42,2,1,3,9,7,11171,13,22,5,48,8453,301,3,61,3,105,39,6,13,4,6,11,2,12,2,4,2,0,2,1,2,1,2,107,34,362,19,63,3,53,41,11,5,15,17,6,13,1,25,2,33,4,2,134,20,9,8,25,5,0,2,25,12,88,4,5,3,5,3,5,3,2],i=0,s=[];for(var o=0;o<r.length;o+=2)s.push(i+=r[o]),r[o+1]&&s.push(45,i+=r[o+1]);t.wordChars=String.fromCharCode.apply(null,s);}),ace.define("ace/mode/text",["require","exports","module","ace/config","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(e,t,n){var r=e("../config"),i=e("../tokenizer").Tokenizer,s=e("./text_highlight_rules").TextHighlightRules,o=e("./behaviour/cstyle").CstyleBehaviour,u=e("../unicode"),a=e("../lib/lang"),f=e("../token_iterator").TokenIterator,l=e("../range").Range,c=function(){this.HighlightRules=s;};((function(){this.$defaultBehaviour=new o,this.tokenRe=new RegExp("^["+u.wordChars+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+u.wordChars+"\\$_]|\\s])+","g"),this.getTokenizer=function(){return this.$tokenizer||(this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig),this.$tokenizer=new i(this.$highlightRules.getRules())),this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,n,r){function w(e){for(var t=n;t<=r;t++)e(i.getLine(t),t);}var i=t.doc,s=!0,o=!0,u=Infinity,f=t.getTabSize(),l=!1;if(!this.lineCommentStart){if(!this.blockComment)return !1;var c=this.blockComment.start,h=this.blockComment.end,p=new RegExp("^(\\s*)(?:"+a.escapeRegExp(c)+")"),d=new RegExp("(?:"+a.escapeRegExp(h)+")\\s*$"),v=function(e,t){if(g(e,t))return;if(!s||/\S/.test(e))i.insertInLine({row:t,column:e.length},h),i.insertInLine({row:t,column:u},c);},m=function(e,t){var n;(n=e.match(d))&&i.removeInLine(t,e.length-n[0].length,e.length),(n=e.match(p))&&i.removeInLine(t,n[1].length,n[0].length);},g=function(e,n){if(p.test(e))return !0;var r=t.getTokens(n);for(var i=0;i<r.length;i++)if(r[i].type==="comment")return !0};}else {if(Array.isArray(this.lineCommentStart))var p=this.lineCommentStart.map(a.escapeRegExp).join("|"),c=this.lineCommentStart[0];else var p=a.escapeRegExp(this.lineCommentStart),c=this.lineCommentStart;p=new RegExp("^(\\s*)(?:"+p+") ?"),l=t.getUseSoftTabs();var m=function(e,t){var n=e.match(p);if(!n)return;var r=n[1].length,s=n[0].length;!b(e,r,s)&&n[0][s-1]==" "&&s--,i.removeInLine(t,r,s);},y=c+" ",v=function(e,t){if(!s||/\S/.test(e))b(e,u,u)?i.insertInLine({row:t,column:u},y):i.insertInLine({row:t,column:u},c);},g=function(e,t){return p.test(e)},b=function(e,t,n){var r=0;while(t--&&e.charAt(t)==" ")r++;if(r%f!=0)return !1;var r=0;while(e.charAt(n++)==" ")r++;return f>2?r%f!=f-1:r%f==0};}var E=Infinity;w(function(e,t){var n=e.search(/\S/);n!==-1?(n<u&&(u=n),o&&!g(e,t)&&(o=!1)):E>e.length&&(E=e.length);}),u==Infinity&&(u=E,s=!1,o=!1),l&&u%f!=0&&(u=Math.floor(u/f)*f),w(o?m:v);},this.toggleBlockComment=function(e,t,n,r){var i=this.blockComment;if(!i)return;!i.start&&i[0]&&(i=i[0]);var s=new f(t,r.row,r.column),o=s.getCurrentToken();t.selection;var a=t.selection.toOrientedRange(),c,h;if(o&&/comment/.test(o.type)){var p,d;while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.start);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;p=new l(m,g,m,g+i.start.length);break}o=s.stepBackward();}var s=new f(t,r.row,r.column),o=s.getCurrentToken();while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.end);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;d=new l(m,g,m,g+i.end.length);break}o=s.stepForward();}d&&t.remove(d),p&&(t.remove(p),c=p.start.row,h=-i.start.length);}else h=i.start.length,c=n.start.row,t.insert(n.end,i.end),t.insert(n.start,i.start);a.start.row==c&&(a.start.column+=h),a.end.row==c&&(a.end.column+=h),t.selection.fromOrientedRange(a);},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return !1},this.autoOutdent=function(e,t,n){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){this.$embeds=[],this.$modes={};for(var t in e)if(e[t]){var n=e[t],i=n.prototype.$id,s=r.$modes[i];s||(r.$modes[i]=s=new n),r.$modes[t]||(r.$modes[t]=s),this.$embeds.push(t),this.$modes[t]=s;}var o=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"];for(var t=0;t<o.length;t++)(function(e){var n=o[t],r=e[n];e[o[t]]=function(){return this.$delegator(n,arguments,r)};})(this);},this.$delegator=function(e,t,n){var r=t[0]||"start";if(typeof r!="string"){if(Array.isArray(r[2])){var i=r[2][r[2].length-1],s=this.$modes[i];if(s)return s[e].apply(s,[r[1]].concat([].slice.call(t,1)))}r=r[0]||"start";}for(var o=0;o<this.$embeds.length;o++){if(!this.$modes[this.$embeds[o]])continue;var u=r.split(this.$embeds[o]);if(!u[0]&&u[1]){t[0]=u[1];var s=this.$modes[this.$embeds[o]];return s[e].apply(s,t)}}var a=n.apply(this,t);return n?a:undefined},this.transformAction=function(e,t,n,r,i){if(this.$behaviour){var s=this.$behaviour.getBehaviours();for(var o in s)if(s[o][t]){var u=s[o][t].apply(this,arguments);if(u)return u}}},this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules,n=[];for(var r in t){var i=t[r];for(var s=0,o=i.length;s<o;s++)if(typeof i[s].token=="string")/keyword|support|storage/.test(i[s].token)&&n.push(i[s].regex);else if(typeof i[s].token=="object")for(var u=0,a=i[s].token.length;u<a;u++)if(/keyword|support|storage/.test(i[s].token[u])){var r=i[s].regex.match(/\(.+?\)/g)[u];n.push(r.substr(1,r.length-2));}}this.completionKeywords=n;}return e?n.concat(this.$keywordList||[]):this.$keywordList},this.$createKeywordList=function(){return this.$highlightRules||this.getTokenizer(),this.$keywordList=this.$highlightRules.$keywordList||[]},this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return {name:e,value:e,score:0,meta:"keyword"}})},this.$id="ace/mode/text";})).call(c.prototype),t.Mode=c;}),ace.define("ace/apply_delta",["require","exports","module"],function(e,t,n){t.applyDelta=function(e,t,n){var r=t.start.row,i=t.start.column,s=e[r]||"";switch(t.action){case"insert":var o=t.lines;if(o.length===1)e[r]=s.substring(0,i)+t.lines[0]+s.substring(i);else {var u=[r,1].concat(t.lines);e.splice.apply(e,u),e[r]=s.substring(0,i)+e[r],e[r+t.lines.length-1]+=s.substring(i);}break;case"remove":var a=t.end.column,f=t.end.row;r===f?e[r]=s.substring(0,i)+s.substring(a):e.splice(r,f-r+1,s.substring(0,i)+e[f].substring(a));}};}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=t.Anchor=function(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),typeof n=="undefined"?this.setPosition(t.row,t.column):this.setPosition(t,n);};(function(){function e(e,t,n){var r=n?e.column<=t.column:e.column<t.column;return e.row<t.row||e.row==t.row&&r}function t(t,n,r){var i=t.action=="insert",s=(i?1:-1)*(t.end.row-t.start.row),o=(i?1:-1)*(t.end.column-t.start.column),u=t.start,a=i?u:t.end;return e(n,u,r)?{row:n.row,column:n.column}:e(a,n,!r)?{row:n.row+s,column:n.column+(n.row==a.row?o:0)}:{row:u.row,column:u.column}}r.implement(this,i),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(e.start.row==e.end.row&&e.start.row!=this.row)return;if(e.start.row>this.row)return;var n=t(e,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0);},this.setPosition=function(e,t,n){var r;n?r={row:e,column:t}:r=this.$clipPositionToDocument(e,t);if(this.row==r.row&&this.column==r.column)return;var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal("change",{old:i,value:r});},this.detach=function(){this.document.off("change",this.$onChange);},this.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange);},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n};}).call(s.prototype);}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,n){var r=e("./lib/oop"),i=e("./apply_delta").applyDelta,s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=e("./anchor").Anchor,a=function(e){this.$lines=[""],e.length===0?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e);};((function(){r.implement(this,s),this.setValue=function(e){var t=this.getLength()-1;this.remove(new o(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e||"");},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new u(this,e,t)},"aaa".split(/a/).length===0?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode");},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return "\r\n";case"unix":return "\n";default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(e){if(this.$newLineMode===e)return;this.$newLineMode=e,this._signal("changeNewLineMode");},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t;if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)];else {t=this.getLines(e.start.row,e.end.row),t[0]=(t[0]||"").substring(e.start.column);var n=t.length-1;e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column));}return t},this.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},this.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),r=this.pos(e.row,e.column+t.length);return this.applyDelta({start:n,end:r,action:"insert",lines:[t]},!0),this.clonePos(r)},this.clippedPos=function(e,t){var n=this.getLength();e===undefined?e=n:e<0?e=0:e>=n&&(e=n-1,t=undefined);var r=this.getLine(e);return t==undefined&&(t=r.length),t=Math.min(Math.max(t,0),r.length),{row:e,column:t}},this.clonePos=function(e){return {row:e.row,column:e.column}},this.pos=function(e,t){return {row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){e=Math.min(Math.max(e,0),this.getLength());var n=0;e<this.getLength()?(t=t.concat([""]),n=0):(t=[""].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t);},this.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),r={row:n.row+t.length-1,column:(t.length==1?n.column:0)+t[t.length-1].length};return this.applyDelta({start:n,end:r,action:"insert",lines:t}),this.clonePos(r)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column);return this.applyDelta({start:t,end:n,action:"remove",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},this.removeInLine=function(e,t,n){var r=this.clippedPos(e,t),i=this.clippedPos(e,n);return this.applyDelta({start:r,end:i,action:"remove",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1),t=Math.min(Math.max(0,t),this.getLength()-1);var n=t==this.getLength()-1&&e>0,r=t<this.getLength()-1,i=n?e-1:e,s=n?this.getLine(i).length:0,u=r?t+1:t,a=r?0:this.getLine(u).length,f=new o(i,s,u,a),l=this.$lines.slice(e,t+1);return this.applyDelta({start:f.start,end:f.end,action:"remove",lines:this.getLinesForRange(f)}),l},this.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]});},this.replace=function(e,t){e instanceof o||(e=o.fromPoints(e.start,e.end));if(t.length===0&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);var n;return t?n=this.insert(e.start,t):n=e.start,n},this.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t]);},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t]);},this.applyDelta=function(e,t){var n=e.action=="insert";if(n?e.lines.length<=1&&!e.lines[0]:!o.comparePoints(e.start,e.end))return;n&&e.lines.length>2e4?this.$splitAndapplyLargeDelta(e,2e4):(i(this.$lines,e,t),this._signal("change",e));},this.$safeApplyDelta=function(e){var t=this.$lines.length;(e.action=="remove"&&e.start.row<t&&e.end.row<t||e.action=="insert"&&e.start.row<=t)&&this.applyDelta(e);},this.$splitAndapplyLargeDelta=function(e,t){var n=e.lines,r=n.length-t+1,i=e.start.row,s=e.start.column;for(var o=0,u=0;o<r;o=u){u+=t-1;var a=n.slice(o,u);a.push(""),this.applyDelta({start:this.pos(i+o,s),end:this.pos(i+u,s=0),action:e.action,lines:a},!0);}e.lines=n.slice(o),e.start.row=i+o,e.start.column=s,this.applyDelta(e,!0);},this.revertDelta=function(e){this.$safeApplyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:e.action=="insert"?"remove":"insert",lines:e.lines.slice()});},this.indexToPosition=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length;for(var i=t||0,s=n.length;i<s;i++){e-=n[i].length+r;if(e<0)return {row:i,column:e+n[i].length+r}}return {row:s-1,column:e+n[s-1].length+r}},this.positionToIndex=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,s=Math.min(e.row,n.length);for(var o=t||0;o<s;++o)i+=n[o].length+r;return i+e.column};})).call(a.prototype),t.Document=a;}),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=function(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e;var n=this;this.$worker=function(){if(!n.running)return;var e=new Date,t=n.currentLine,r=-1,i=n.doc,s=t;while(n.lines[t])t++;var o=i.getLength(),u=0;n.running=!1;while(t<o){n.$tokenizeRow(t),r=t;do t++;while(n.lines[t]);u++;if(u%5===0&&new Date-e>20){n.running=setTimeout(n.$worker,20);break}}n.currentLine=t,r==-1&&(r=t),s<=r&&n.fireUpdateEvent(s,r);};};((function(){r.implement(this,i),this.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0);},this.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop();},this.fireUpdateEvent=function(e,t){var n={first:e,last:t};this._signal("update",{data:n});},this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700);},this.scheduleStart=function(){this.running||(this.running=setTimeout(this.$worker,700));},this.$updateOnChange=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.lines[t]=null;else if(e.action=="remove")this.lines.splice(t,n+1,null),this.states.splice(t,n+1,null);else {var r=Array(n+1);r.unshift(t,1),this.lines.splice.apply(this.lines,r),this.states.splice.apply(this.states,r);}this.currentLine=Math.min(t,this.currentLine,this.doc.getLength()),this.stop();},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1;},this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},this.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},this.$tokenizeRow=function(e){var t=this.doc.getLine(e),n=this.states[e-1],r=this.tokenizer.getLineTokens(t,n,e);return this.states[e]+""!=r.state+""?(this.states[e]=r.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=r.tokens},this.cleanup=function(){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.removeAllListeners();};})).call(s.prototype),t.BackgroundTokenizer=s;}),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){var r=e("./lib/lang");e("./lib/oop");var s=e("./range").Range,o=function(e,t,n){this.setRegexp(e),this.clazz=t,this.type=n||"text";};((function(){this.MAX_RANGES=500,this.setRegexp=function(e){if(this.regExp+""==e+"")return;this.regExp=e,this.cache=[];},this.update=function(e,t,n,i){if(!this.regExp)return;var o=i.firstRow,u=i.lastRow,a={};for(var f=o;f<=u;f++){var l=this.cache[f];l==null&&(l=r.getMatchOffsets(n.getLine(f),this.regExp),l.length>this.MAX_RANGES&&(l=l.slice(0,this.MAX_RANGES)),l=l.map(function(e){return new s(f,e.offset,f,e.offset+e.length)}),this.cache[f]=l.length?l:"");for(var c=l.length;c--;){var h=l[c].toScreenRange(n),p=h.toString();if(a[p])continue;a[p]=!0,t.drawSingleLineMarker(e,h,this.clazz,i);}}};})).call(o.prototype),t.SearchHighlight=o;}),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(e,t,n){function i(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t];var n=t[t.length-1];this.range=new r(t[0].start.row,t[0].start.column,n.end.row,n.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach(function(e){e.setFoldLine(this);},this);}var r=e("../range").Range;((function(){this.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach(function(t){t.start.row+=e,t.end.row+=e;});},this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection");this.folds.push(e),this.folds.sort(function(e,t){return -e.range.compareEnd(t.start.row,t.start.column)}),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column);}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column;else {if(e.end.row!=this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column;}e.foldLine=this;},this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},this.walk=function(e,t,n){var r=0,i=this.folds,s,o,u,a=!0;t==null&&(t=this.end.row,n=this.end.column);for(var f=0;f<i.length;f++){s=i[f],o=s.range.compareStart(t,n);if(o==-1){e(null,t,n,r,a);return}u=e(null,s.start.row,s.start.column,r,a),u=!u&&e(s.placeholder,s.start.row,s.start.column,r);if(u||o===0)return;a=!s.sameRow,r=s.end.column;}e(null,t,n,r,a);},this.getNextFoldTo=function(e,t){var n,r;for(var i=0;i<this.folds.length;i++){n=this.folds[i],r=n.range.compareEnd(e,t);if(r==-1)return {fold:n,kind:"after"};if(r===0)return {fold:n,kind:"inside"}}return null},this.addRemoveChars=function(e,t,n){var r=this.getNextFoldTo(e,t),i,s;if(r){i=r.fold;if(r.kind=="inside"&&i.start.column!=t&&i.start.row!=e)window.console&&window.console.log(e,t,i);else if(i.start.row==e){s=this.folds;var o=s.indexOf(i);o===0&&(this.start.column+=n);for(o;o<s.length;o++){i=s[o],i.start.column+=n;if(!i.sameRow)return;i.end.column+=n;}this.end.column+=n;}}},this.split=function(e,t){var n=this.getNextFoldTo(e,t);if(!n||n.kind=="inside")return null;var r=n.fold,s=this.folds,o=this.foldData,u=s.indexOf(r),a=s[u-1];this.end.row=a.end.row,this.end.column=a.end.column,s=s.splice(u,s.length-u);var f=new i(o,s);return o.splice(o.indexOf(this)+1,0,f),f},this.merge=function(e){var t=e.folds;for(var n=0;n<t.length;n++)this.addFold(t[n]);var r=this.foldData;r.splice(r.indexOf(e),1);},this.toString=function(){var e=[this.range.toString()+": ["];return this.folds.forEach(function(t){e.push("  "+t.toString());}),e.push("]"),e.join("\n")},this.idxToPosition=function(e){var t=0;for(var n=0;n<this.folds.length;n++){var r=this.folds[n];e-=r.start.column-t;if(e<0)return {row:r.start.row,column:r.start.column+e};e-=r.placeholder.length;if(e<0)return r.start;t=r.end.column;}return {row:this.end.row,column:this.end.column+e}};})).call(i.prototype),t.FoldLine=i;}),ace.define("ace/range_list",["require","exports","module","ace/range"],function(e,t,n){var r=e("./range").Range,i=r.comparePoints,s=function(){this.ranges=[],this.$bias=1;};((function(){this.comparePoints=i,this.pointIndex=function(e,t,n){var r=this.ranges;for(var s=n||0;s<r.length;s++){var o=r[s],u=i(e,o.end);if(u>0)continue;var a=i(e,o.start);return u===0?t&&a!==0?-s-2:s:a>0||a===0&&!t?s:-s-1}return -s-1},this.add=function(e){var t=!e.isEmpty(),n=this.pointIndex(e.start,t);n<0&&(n=-n-1);var r=this.pointIndex(e.end,t,n);return r<0?r=-r-1:r++,this.ranges.splice(n,r-n,e)},this.addList=function(e){var t=[];for(var n=e.length;n--;)t.push.apply(t,this.add(e[n]));return t},this.substractPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges.splice(t,1)},this.merge=function(){var e=[],t=this.ranges;t=t.sort(function(e,t){return i(e.start,t.start)});var n=t[0],r;for(var s=1;s<t.length;s++){r=n,n=t[s];var o=i(r.end,n.start);if(o<0)continue;if(o==0&&!r.isEmpty()&&!n.isEmpty())continue;i(r.end,n.end)<0&&(r.end.row=n.end.row,r.end.column=n.end.column),t.splice(s,1),e.push(n),n=r,s--;}return this.ranges=t,e},this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},this.containsPoint=function(e){return this.pointIndex(e)>=0},this.rangeAtPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges[t]},this.clipRows=function(e,t){var n=this.ranges;if(n[0].start.row>t||n[n.length-1].start.row<e)return [];var r=this.pointIndex({row:e,column:0});r<0&&(r=-r-1);var i=this.pointIndex({row:t,column:0},r);i<0&&(i=-i-1);var s=[];for(var o=r;o<i;o++)s.push(n[o]);return s},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange);},this.detach=function(){if(!this.session)return;this.session.removeListener("change",this.onChange),this.session=null;},this.$onChange=function(e){var t=e.start,n=e.end,r=t.row,i=n.row,s=this.ranges;for(var o=0,u=s.length;o<u;o++){var a=s[o];if(a.end.row>=r)break}if(e.action=="insert"){var f=i-r,l=-t.column+n.column;for(;o<u;o++){var a=s[o];if(a.start.row>r)break;a.start.row==r&&a.start.column>=t.column&&(a.start.column==t.column&&this.$bias<=0||(a.start.column+=l,a.start.row+=f));if(a.end.row==r&&a.end.column>=t.column){if(a.end.column==t.column&&this.$bias<0)continue;a.end.column==t.column&&l>0&&o<u-1&&a.end.column>a.start.column&&a.end.column==s[o+1].start.column&&(a.end.column-=l),a.end.column+=l,a.end.row+=f;}}}else {var f=r-i,l=t.column-n.column;for(;o<u;o++){var a=s[o];if(a.start.row>i)break;if(a.end.row<i&&(r<a.end.row||r==a.end.row&&t.column<a.end.column))a.end.row=r,a.end.column=t.column;else if(a.end.row==i)if(a.end.column<=n.column){if(f||a.end.column>t.column)a.end.column=t.column,a.end.row=t.row;}else a.end.column+=l,a.end.row+=f;else a.end.row>i&&(a.end.row+=f);if(a.start.row<i&&(r<a.start.row||r==a.start.row&&t.column<a.start.column))a.start.row=r,a.start.column=t.column;else if(a.start.row==i)if(a.start.column<=n.column){if(f||a.start.column>t.column)a.start.column=t.column,a.start.row=t.row;}else a.start.column+=l,a.start.row+=f;else a.start.row>i&&(a.start.row+=f);}}if(f!=0&&o<u)for(;o<u;o++){var a=s[o];a.start.row+=f,a.end.row+=f;}};})).call(s.prototype),t.RangeList=s;}),ace.define("ace/edit_session/fold",["require","exports","module","ace/range_list","ace/lib/oop"],function(e,t,n){function o(e,t){e.row-=t.row,e.row==0&&(e.column-=t.column);}function u(e,t){o(e.start,t),o(e.end,t);}function a(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row;}function f(e,t){a(e.start,t),a(e.end,t);}var r=e("../range_list").RangeList,i=e("../lib/oop"),s=t.Fold=function(e,t){this.foldLine=null,this.placeholder=t,this.range=e,this.start=e.start,this.end=e.end,this.sameRow=e.start.row==e.end.row,this.subFolds=this.ranges=[];};i.inherits(s,r),function(){this.toString=function(){return '"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach(function(t){t.setFoldLine(e);});},this.clone=function(){var e=this.range.clone(),t=new s(e,this.placeholder);return this.subFolds.forEach(function(e){t.subFolds.push(e.clone());}),t.collapseChildren=this.collapseChildren,t},this.addSubFold=function(e){if(this.range.isEqual(e))return;u(e,this.start);var t=e.start.row,n=e.start.column;for(var r=0,i=-1;r<this.subFolds.length;r++){i=this.subFolds[r].range.compare(t,n);if(i!=1)break}var s=this.subFolds[r],o=0;if(i==0){if(s.range.containsRange(e))return s.addSubFold(e);o=1;}var t=e.range.end.row,n=e.range.end.column;for(var a=r,i=-1;a<this.subFolds.length;a++){i=this.subFolds[a].range.compare(t,n);if(i!=1)break}i==0&&a++;var f=this.subFolds.splice(r,a-r,e),l=i==0?f.length-1:f.length;for(var c=o;c<l;c++)e.addSubFold(f[c]);return e.setFoldLine(this.foldLine),e},this.restoreRange=function(e){return f(e,this.start)};}.call(s.prototype);}),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(e,t,n){function u(){this.getFoldAt=function(e,t,n){var r=this.getFoldLine(e);if(!r)return null;var i=r.folds;for(var s=0;s<i.length;s++){var o=i[s].range;if(o.contains(e,t)){if(n==1&&o.isEnd(e,t)&&!o.isEmpty())continue;if(n==-1&&o.isStart(e,t)&&!o.isEmpty())continue;return i[s]}}},this.getFoldsInRange=function(e){var t=e.start,n=e.end,r=this.$foldData,i=[];t.column+=1,n.column-=1;for(var s=0;s<r.length;s++){var o=r[s].range.compareRange(e);if(o==2)continue;if(o==-2)break;var u=r[s].folds;for(var a=0;a<u.length;a++){var f=u[a];o=f.range.compareRange(e);if(o==-2)break;if(o==2)continue;if(o==42)break;i.push(f);}}return t.column-=1,n.column+=1,i},this.getFoldsInRangeList=function(e){if(Array.isArray(e)){var t=[];e.forEach(function(e){t=t.concat(this.getFoldsInRange(e));},this);}else var t=this.getFoldsInRange(e);return t},this.getAllFolds=function(){var e=[],t=this.$foldData;for(var n=0;n<t.length;n++)for(var r=0;r<t[n].folds.length;r++)e.push(t[n].folds[r]);return e},this.getFoldStringAt=function(e,t,n,r){r=r||this.getFoldLine(e);if(!r)return null;var i={end:{column:0}},s,o;for(var u=0;u<r.folds.length;u++){o=r.folds[u];var a=o.range.compareEnd(e,t);if(a==-1){s=this.getLine(o.start.row).substring(i.end.column,o.start.column);break}if(a===0)return null;i=o;}return s||(s=this.getLine(o.start.row).substring(i.end.column)),n==-1?s.substring(0,t-i.end.column):n==1?s.substring(t-i.end.column):s},this.getFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.start.row<=e&&i.end.row>=e)return i;if(i.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.end.row>=e)return i}return null},this.getFoldedRowCount=function(e,t){var n=this.$foldData,r=t-e+1;for(var i=0;i<n.length;i++){var s=n[i],o=s.end.row,u=s.start.row;if(o>=t){u<t&&(u>=e?r-=t-u:r=0);break}o>=e&&(u>=e?r-=o-u:r-=o-e+1);}return r},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort(function(e,t){return e.start.row-t.start.row}),e},this.addFold=function(e,t){var n=this.$foldData,r=!1,o;e instanceof s?o=e:(o=new s(t,e),o.collapseChildren=t.collapseChildren),this.$clipRangeToDocument(o.range);var u=o.start.row,a=o.start.column,f=o.end.row,l=o.end.column,c=this.getFoldAt(u,a,1),h=this.getFoldAt(f,l,-1);if(c&&h==c)return c.addSubFold(o);c&&!c.range.isStart(u,a)&&this.removeFold(c),h&&!h.range.isEnd(f,l)&&this.removeFold(h);var p=this.getFoldsInRange(o.range);p.length>0&&(this.removeFolds(p),o.collapseChildren||p.forEach(function(e){o.addSubFold(e);}));for(var d=0;d<n.length;d++){var v=n[d];if(f==v.start.row){v.addFold(o),r=!0;break}if(u==v.end.row){v.addFold(o),r=!0;if(!o.sameRow){var m=n[d+1];if(m&&m.start.row==f){v.merge(m);break}}break}if(f<=v.start.row)break}return r||(v=this.$addFoldLine(new i(this.$foldData,o))),this.$useWrapMode?this.$updateWrapData(v.start.row,v.start.row):this.$updateRowLengthCache(v.start.row,v.start.row),this.$modified=!0,this._signal("changeFold",{data:o,action:"add"}),o},this.addFolds=function(e){e.forEach(function(e){this.addFold(e);},this);},this.removeFold=function(e){var t=e.foldLine,n=t.start.row,r=t.end.row,i=this.$foldData,s=t.folds;if(s.length==1)i.splice(i.indexOf(t),1);else if(t.range.isEnd(e.end.row,e.end.column))s.pop(),t.end.row=s[s.length-1].end.row,t.end.column=s[s.length-1].end.column;else if(t.range.isStart(e.start.row,e.start.column))s.shift(),t.start.row=s[0].start.row,t.start.column=s[0].start.column;else if(e.sameRow)s.splice(s.indexOf(e),1);else {var o=t.split(e.start.row,e.start.column);s=o.folds,s.shift(),o.start.row=s[0].start.row,o.start.column=s[0].start.column;}this.$updating||(this.$useWrapMode?this.$updateWrapData(n,r):this.$updateRowLengthCache(n,r)),this.$modified=!0,this._signal("changeFold",{data:e,action:"remove"});},this.removeFolds=function(e){var t=[];for(var n=0;n<e.length;n++)t.push(e[n]);t.forEach(function(e){this.removeFold(e);},this),this.$modified=!0;},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach(function(t){e.restoreRange(t),this.addFold(t);},this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[];},this.expandFolds=function(e){e.forEach(function(e){this.expandFold(e);},this);},this.unfold=function(e,t){var n,i;if(e==null)n=new r(0,0,this.getLength(),0),t==null&&(t=!0);else if(typeof e=="number")n=new r(e,0,e,this.getLine(e).length);else if("row"in e)n=r.fromPoints(e,e);else {if(Array.isArray(e))return i=[],e.forEach(function(e){i=i.concat(this.unfold(e));},this),i;n=e;}i=this.getFoldsInRangeList(n);var s=i;while(i.length==1&&r.comparePoints(i[0].start,n.start)<0&&r.comparePoints(i[0].end,n.end)>0)this.expandFolds(i),i=this.getFoldsInRangeList(n);t!=0?this.removeFolds(i):this.expandFolds(i);if(s.length)return s},this.isRowFolded=function(e,t){return !!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var n=this.getFoldLine(e,t);return n?n.end.row:e},this.getRowFoldStart=function(e,t){var n=this.getFoldLine(e,t);return n?n.start.row:e},this.getFoldDisplayLine=function(e,t,n,r,i){r==null&&(r=e.start.row),i==null&&(i=0),t==null&&(t=e.end.row),n==null&&(n=this.getLine(t).length);var s=this.doc,o="";return e.walk(function(e,t,n,u){if(t<r)return;if(t==r){if(n<i)return;u=Math.max(i,u);}e!=null?o+=e:o+=s.getLine(t).substring(u,n);},t,n),o},this.getDisplayLine=function(e,t,n,r){var i=this.getFoldLine(e);if(!i){var s;return s=this.doc.getLine(e),s.substring(r||0,t||s.length)}return this.getFoldDisplayLine(i,e,t,n,r)},this.$cloneFoldData=function(){var e=[];return e=this.$foldData.map(function(t){var n=t.folds.map(function(e){return e.clone()});return new i(e,n)}),e},this.toggleFold=function(e){var t=this.selection,n=t.getRange(),r,i;if(n.isEmpty()){var s=n.start;r=this.getFoldAt(s.row,s.column);if(r){this.expandFold(r);return}(i=this.findMatchingBracket(s))?n.comparePoint(i)==1?n.end=i:(n.start=i,n.start.column++,n.end.column--):(i=this.findMatchingBracket({row:s.row,column:s.column+1}))?(n.comparePoint(i)==1?n.end=i:n.start=i,n.start.column++):n=this.getCommentFoldRange(s.row,s.column)||n;}else {var o=this.getFoldsInRange(n);if(e&&o.length){this.expandFolds(o);return}o.length==1&&(r=o[0]);}r||(r=this.getFoldAt(n.start.row,n.start.column));if(r&&r.range.toString()==n.toString()){this.expandFold(r);return}var u="...";if(!n.isMultiLine()){u=this.getTextRange(n);if(u.length<4)return;u=u.trim().substring(0,2)+"..";}this.addFold(u,n);},this.getCommentFoldRange=function(e,t,n){var i=new o(this,e,t),s=i.getCurrentToken(),u=s&&s.type;if(s&&/^comment|string/.test(u)){u=u.match(/comment|string/)[0],u=="comment"&&(u+="|doc-start");var a=new RegExp(u),f=new r;if(n!=1){do s=i.stepBackward();while(s&&a.test(s.type)&&!/^comment.end/.test(s.type));s=i.stepForward();}f.start.row=i.getCurrentTokenRow(),f.start.column=i.getCurrentTokenColumn()+(/^comment.start/.test(s.type)?s.value.length:2),i=new o(this,e,t);if(n!=-1){var l=-1;do{s=i.stepForward();if(l==-1){var c=this.getState(i.$row);a.test(c)||(l=i.$row);}else if(i.$row>l)break}while(s&&a.test(s.type)&&!/^comment.start/.test(s.type));s=i.stepBackward();}else s=i.getCurrentToken();return f.end.row=i.getCurrentTokenRow(),f.end.column=i.getCurrentTokenColumn(),/^comment.end/.test(s.type)||(f.end.column+=s.value.length-2),f}},this.foldAll=function(e,t,n,r){n==undefined&&(n=1e5);var i=this.foldWidgets;if(!i)return;t=t||this.getLength(),e=e||0;for(var s=e;s<t;s++){i[s]==null&&(i[s]=this.getFoldWidget(s));if(i[s]!="start")continue;if(r&&!r(s))continue;var o=this.getFoldWidgetRange(s);o&&o.isMultiLine()&&o.end.row<=t&&o.start.row>=e&&(s=o.end.row,o.collapseChildren=n,this.addFold("...",o));}},this.foldToLevel=function(e){this.foldAll();while(e-->0)this.unfold(null,!1);},this.foldAllComments=function(){var e=this;this.foldAll(null,null,null,function(t){var n=e.getTokens(t);for(var r=0;r<n.length;r++){var i=n[r];if(i.type=="text"&&/^\s+$/.test(i.value))continue;return /comment/.test(i.type)?!0:!1}});},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==e)return;this.$foldStyle=e,e=="manual"&&this.unfold();var t=this.$foldMode;this.$setFolding(null),this.$setFolding(t);},this.$setFolding=function(e){if(this.$foldMode==e)return;this.$foldMode=e,this.off("change",this.$updateFoldWidgets),this.off("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets),this._signal("changeAnnotation");if(!e||this.$foldStyle=="manual"){this.foldWidgets=null;return}this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets),this.on("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets);},this.getParentFoldRangeData=function(e,t){var n=this.foldWidgets;if(!n||t&&n[e])return {};var r=e-1,i;while(r>=0){var s=n[r];s==null&&(s=n[r]=this.getFoldWidget(r));if(s=="start"){var o=this.getFoldWidgetRange(r);i||(i=o);if(o&&o.end.row>=e)break}r--;}return {range:r!==-1&&o,firstRange:i}},this.onFoldWidgetClick=function(e,t){t=t.domEvent;var n={children:t.shiftKey,all:t.ctrlKey||t.metaKey,siblings:t.altKey},r=this.$toggleFoldWidget(e,n);if(!r){var i=t.target||t.srcElement;i&&/ace_fold-widget/.test(i.className)&&(i.className+=" ace_invalid");}},this.$toggleFoldWidget=function(e,t){if(!this.getFoldWidget)return;var n=this.getFoldWidget(e),r=this.getLine(e),i=n==="end"?-1:1,s=this.getFoldAt(e,i===-1?0:r.length,i);if(s)return t.children||t.all?this.removeFold(s):this.expandFold(s),s;var o=this.getFoldWidgetRange(e,!0);if(o&&!o.isMultiLine()){s=this.getFoldAt(o.start.row,o.start.column,1);if(s&&o.isEqual(s.range))return this.removeFold(s),s}if(t.siblings){var u=this.getParentFoldRangeData(e);if(u.range)var a=u.range.start.row+1,f=u.range.end.row;this.foldAll(a,f,t.all?1e4:0);}else t.children?(f=o?o.end.row:this.getLength(),this.foldAll(e+1,f,t.all?1e4:0)):o&&(t.all&&(o.collapseChildren=1e4),this.addFold("...",o));return o},this.toggleFoldWidget=function(e){var t=this.selection.getCursor().row;t=this.getRowFoldStart(t);var n=this.$toggleFoldWidget(t,{});if(n)return;var r=this.getParentFoldRangeData(t,!0);n=r.range||r.firstRange;if(n){t=n.start.row;var i=this.getFoldAt(t,this.getLine(t).length,1);i?this.removeFold(i):this.addFold("...",n);}},this.updateFoldWidgets=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.foldWidgets[t]=null;else if(e.action=="remove")this.foldWidgets.splice(t,n+1,null);else {var r=Array(n+1);r.unshift(t,1),this.foldWidgets.splice.apply(this.foldWidgets,r);}},this.tokenizerUpdateFoldWidgets=function(e){var t=e.data;t.first!=t.last&&this.foldWidgets.length>t.first&&this.foldWidgets.splice(t.first,this.foldWidgets.length);};}var r=e("../range").Range,i=e("./fold_line").FoldLine,s=e("./fold").Fold,o=e("../token_iterator").TokenIterator;t.Folding=u;}),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(e,t,n){function s(){this.findMatchingBracket=function(e,t){if(e.column==0)return null;var n=t||this.getLine(e.row).charAt(e.column-1);if(n=="")return null;var r=n.match(/([\(\[\{])|([\)\]\}])/);return r?r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e):null},this.getBracketRange=function(e){var t=this.getLine(e.row),n=!0,r,s=t.charAt(e.column-1),o=s&&s.match(/([\(\[\{])|([\)\]\}])/);o||(s=t.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(/([\(\[\{])|([\)\]\}])/),n=!1);if(!o)return null;if(o[1]){var u=this.$findClosingBracket(o[1],e);if(!u)return null;r=i.fromPoints(e,u),n||(r.end.column++,r.start.column--),r.cursor=r.end;}else {var u=this.$findOpeningBracket(o[2],e);if(!u)return null;r=i.fromPoints(u,e),n||(r.start.column++,r.end.column--),r.cursor=r.start;}return r},this.getMatchingBracketRanges=function(e,t){var n=this.getLine(e.row),r=/([\(\[\{])|([\)\]\}])/,s=!t&&n.charAt(e.column-1),o=s&&s.match(r);o||(s=(t===undefined||t)&&n.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(r));if(!o)return null;var u=new i(e.row,e.column-1,e.row,e.column),a=o[1]?this.$findClosingBracket(o[1],e):this.$findOpeningBracket(o[2],e);if(!a)return [u];var f=new i(a.row,a.column,a.row,a.column+1);return [u,f]},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{","<":">",">":"<"},this.$findOpeningBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn()-2,f=u.value;for(;;){while(a>=0){var l=f.charAt(a);if(l==i){s-=1;if(s==0)return {row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else l==e&&(s+=1);a-=1;}do u=o.stepBackward();while(u&&!n.test(u.type));if(u==null)break;f=u.value,a=f.length-1;}return null},this.$findClosingBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn();for(;;){var f=u.value,l=f.length;while(a<l){var c=f.charAt(a);if(c==i){s-=1;if(s==0)return {row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else c==e&&(s+=1);a+=1;}do u=o.stepForward();while(u&&!n.test(u.type));if(u==null)break;a=0;}return null},this.getMatchingTags=function(e){var t=new r(this,e.row,e.column),n=this.$findTagName(t);if(!n)return;var i=t.stepBackward();return i.value==="<"?this.$findClosingTag(t,n):this.$findOpeningTag(t,n)},this.$findTagName=function(e){var t=e.getCurrentToken(),n=!1,r=!1;if(t&&t.type.indexOf("tag-name")===-1)do r?t=e.stepBackward():t=e.stepForward(),t&&(t.value==="/>"?r=!0:t.type.indexOf("tag-name")!==-1&&(n=!0));while(t&&!n);return t},this.$findClosingTag=function(e,t){var n,r=t.value,s=t.value,o=0,u=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);t=e.stepForward();var a=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length),f=!1;do{n=t,t=e.stepForward();if(t){if(t.value===">"&&!f){var l=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);f=!0;}if(t.type.indexOf("tag-name")!==-1){r=t.value;if(s===r)if(n.value==="<")o++;else if(n.value==="</"){o--;if(o<0){e.stepBackward();var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2);t=e.stepForward();var h=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length);t=e.stepForward();if(!t||t.value!==">")return;var p=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);}}}else if(s===r&&t.value==="/>"){o--;if(o<0)var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2),h=c,p=h,l=new i(a.end.row,a.end.column,a.end.row,a.end.column+1);}}}while(t&&o>=0);if(u&&l&&c&&p&&a&&h)return {openTag:new i(u.start.row,u.start.column,l.end.row,l.end.column),closeTag:new i(c.start.row,c.start.column,p.end.row,p.end.column),openTagName:a,closeTagName:h}},this.$findOpeningTag=function(e,t){var n=e.getCurrentToken(),r=t.value,s=0,o=e.getCurrentTokenRow(),u=e.getCurrentTokenColumn(),a=u+2,f=new i(o,u,o,a);e.stepForward();var l=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length);t=e.stepForward();if(!t||t.value!==">")return;var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);e.stepBackward(),e.stepBackward();do{t=n,o=e.getCurrentTokenRow(),u=e.getCurrentTokenColumn(),a=u+t.value.length,n=e.stepBackward();if(t)if(t.type.indexOf("tag-name")!==-1){if(r===t.value)if(n.value==="<"){s++;if(s>0){var h=new i(o,u,o,a),p=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);do t=e.stepForward();while(t&&t.value!==">");var d=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);}}else n.value==="</"&&s--;}else if(t.value==="/>"){var v=0,m=n;while(m){if(m.type.indexOf("tag-name")!==-1&&m.value===r){s--;break}if(m.value==="<")break;m=e.stepBackward(),v++;}for(var g=0;g<v;g++)e.stepForward();}}while(n&&s<=0);if(p&&d&&f&&c&&h&&l)return {openTag:new i(p.start.row,p.start.column,d.end.row,d.end.column),closeTag:new i(f.start.row,f.start.column,c.end.row,c.end.column),openTagName:h,closeTagName:l}};}var r=e("../token_iterator").TokenIterator,i=e("../range").Range;t.BracketMatch=s;}),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/bidihandler","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./bidihandler").BidiHandler,o=e("./config"),u=e("./lib/event_emitter").EventEmitter,a=e("./selection").Selection,f=e("./mode/text").Mode,l=e("./range").Range,c=e("./document").Document,h=e("./background_tokenizer").BackgroundTokenizer,p=e("./search_highlight").SearchHighlight,d=function(e,t){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.id="session"+ ++d.$uid,this.$foldData.toString=function(){return this.join("\n")},this.bgTokenizer=new h((new f).getTokenizer(),this);var n=this;this.bgTokenizer.on("update",function(e){n._signal("tokenizerUpdate",e);}),this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this);if(typeof e!="object"||!e.getLine)e=new c(e);this.setDocument(e),this.selection=new a(this),this.$bidiHandler=new s(this),o.resetOptions(this),this.setMode(t),o._signal("session",this),this.destroyed=!1;};d.$uid=0,function(){function v(e){return e<4352?!1:e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510}r.implement(this,u),this.setDocument=function(e){this.doc&&this.doc.off("change",this.$onChange),this.doc=e,e.on("change",this.$onChange,!0),this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches();},this.getDocument=function(){return this.doc},this.$resetRowCache=function(e){if(!e){this.$docRowCache=[],this.$screenRowCache=[];return}var t=this.$docRowCache.length,n=this.$getRowCacheIndex(this.$docRowCache,e)+1;t>n&&(this.$docRowCache.splice(n,t),this.$screenRowCache.splice(n,t));},this.$getRowCacheIndex=function(e,t){var n=0,r=e.length-1;while(n<=r){var i=n+r>>1,s=e[i];if(t>s)n=i+1;else {if(!(t<s))return i;r=i-1;}}return n-1},this.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.destroyed||this.bgTokenizer.start(0);},this.onChangeFold=function(e){var t=e.data;this.$resetRowCache(t.start.row);},this.onChange=function(e){this.$modified=!0,this.$bidiHandler.onChange(e),this.$resetRowCache(e.start.row);var t=this.$updateInternalDataOnChange(e);!this.$fromUndo&&this.$undoManager&&(t&&t.length&&(this.$undoManager.add({action:"removeFolds",folds:t},this.mergeUndoDeltas),this.mergeUndoDeltas=!0),this.$undoManager.add(e,this.mergeUndoDeltas),this.mergeUndoDeltas=!0,this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(e),this._signal("change",e);},this.setValue=function(e){this.doc.setValue(e),this.selection.moveTo(0,0),this.$resetRowCache(0),this.setUndoManager(this.$undoManager),this.getUndoManager().reset();},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(e){return this.bgTokenizer.getState(e)},this.getTokens=function(e){return this.bgTokenizer.getTokens(e)},this.getTokenAt=function(e,t){var n=this.bgTokenizer.getTokens(e),r,i=0;if(t==null){var s=n.length-1;i=this.getLine(e).length;}else for(var s=0;s<n.length;s++){i+=n[s].value.length;if(i>=t)break}return r=n[s],r?(r.index=s,r.start=i-r.value.length,r):null},this.setUndoManager=function(e){this.$undoManager=e,this.$informUndoManager&&this.$informUndoManager.cancel();if(e){var t=this;e.addSession(this),this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.mergeUndoDeltas=!1;},this.$informUndoManager=i.delayedCall(this.$syncInformUndoManager);}else this.$syncInformUndoManager=function(){};},this.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager();},this.$defaultUndoManager={undo:function(){},redo:function(){},hasUndo:function(){},hasRedo:function(){},reset:function(){},add:function(){},addSelection:function(){},startNewGroup:function(){},addSession:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?i.stringRepeat(" ",this.getTabSize()):"	"},this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e);},this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs},this.setTabSize=function(e){this.setOption("tabSize",e);},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize===0},this.setNavigateWithinSoftTabs=function(e){this.setOption("navigateWithinSoftTabs",e);},this.getNavigateWithinSoftTabs=function(){return this.$navigateWithinSoftTabs},this.$overwrite=!1,this.setOverwrite=function(e){this.setOption("overwrite",e);},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite);},this.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._signal("changeBreakpoint",{});},this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._signal("changeBreakpoint",{});},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(e){this.$breakpoints=[];for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint";this._signal("changeBreakpoint",{});},this.clearBreakpoints=function(){this.$breakpoints=[],this._signal("changeBreakpoint",{});},this.setBreakpoint=function(e,t){t===undefined&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._signal("changeBreakpoint",{});},this.clearBreakpoint=function(e){delete this.$breakpoints[e],this._signal("changeBreakpoint",{});},this.addMarker=function(e,t,n,r){var i=this.$markerId++,s={range:e,type:n||"line",renderer:typeof n=="function"?n:null,clazz:t,inFront:!!r,id:i};return r?(this.$frontMarkers[i]=s,this._signal("changeFrontMarker")):(this.$backMarkers[i]=s,this._signal("changeBackMarker")),i},this.addDynamicMarker=function(e,t){if(!e.update)return;var n=this.$markerId++;return e.id=n,e.inFront=!!t,t?(this.$frontMarkers[n]=e,this._signal("changeFrontMarker")):(this.$backMarkers[n]=e,this._signal("changeBackMarker")),e},this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e];if(!t)return;var n=t.inFront?this.$frontMarkers:this.$backMarkers;delete n[e],this._signal(t.inFront?"changeFrontMarker":"changeBackMarker");},this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},this.highlight=function(e){if(!this.$searchHighlight){var t=new p(null,"ace_selected-word","text");this.$searchHighlight=this.addDynamicMarker(t);}this.$searchHighlight.setRegexp(e);},this.highlightLines=function(e,t,n,r){typeof t!="number"&&(n=t,t=e),n||(n="ace_step");var i=new l(e,0,t,Infinity);return i.id=this.addMarker(i,n,"fullLine",r),i},this.setAnnotations=function(e){this.$annotations=e,this._signal("changeAnnotation",{});},this.getAnnotations=function(){return this.$annotations||[]},this.clearAnnotations=function(){this.setAnnotations([]);},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m);t?this.$autoNewLine=t[1]:this.$autoNewLine="\n";},this.getWordRange=function(e,t){var n=this.getLine(e),r=!1;t>0&&(r=!!n.charAt(t-1).match(this.tokenRe)),r||(r=!!n.charAt(t).match(this.tokenRe));if(r)var i=this.tokenRe;else if(/^\s+$/.test(n.slice(t-1,t+1)))var i=/\s/;else var i=this.nonTokenRe;var s=t;if(s>0){do s--;while(s>=0&&n.charAt(s).match(i));s++;}var o=t;while(o<n.length&&n.charAt(o).match(i))o++;return new l(e,s,e,o)},this.getAWordRange=function(e,t){var n=this.getWordRange(e,t),r=this.getLine(n.end.row);while(r.charAt(n.end.column).match(/[ \t]/))n.end.column+=1;return n},this.setNewLineMode=function(e){this.doc.setNewLineMode(e);},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.setUseWorker=function(e){this.setOption("useWorker",e);},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(e){var t=e.data;this.bgTokenizer.start(t.first),this._signal("tokenizerUpdate",e);},this.$modes=o.$modes,this.$mode=null,this.$modeId=null,this.setMode=function(e,t){if(e&&typeof e=="object"){if(e.getTokenizer)return this.$onChangeMode(e);var n=e,r=n.path;}else r=e||"ace/mode/text";this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new f);if(this.$modes[r]&&!n){this.$onChangeMode(this.$modes[r]),t&&t();return}this.$modeId=r,o.loadModule(["mode",r],function(e){if(this.$modeId!==r)return t&&t();this.$modes[r]&&!n?this.$onChangeMode(this.$modes[r]):e&&e.Mode&&(e=new e.Mode(n),n||(this.$modes[r]=e,e.$id=r),this.$onChangeMode(e)),t&&t();}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0);},this.$onChangeMode=function(e,t){t||(this.$modeId=e.$id);if(this.$mode===e)return;var n=this.$mode;this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker();var r=e.getTokenizer();if(r.on!==undefined){var i=this.onReloadTokenizer.bind(this);r.on("update",i);}this.bgTokenizer.setTokenizer(r),this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(e.attachToSession&&e.attachToSession(this),this.$options.wrapMethod.set.call(this,this.$wrapMethod),this.$setFolding(e.foldingRules),this.bgTokenizer.start(0),this._emit("changeMode",{oldMode:n,mode:e}));},this.$stopWorker=function(){this.$worker&&(this.$worker.terminate(),this.$worker=null);},this.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this);}catch(e){o.warn("Could not load worker",e),this.$worker=null;}},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(e){if(this.$scrollTop===e||isNaN(e))return;this.$scrollTop=e,this._signal("changeScrollTop",e);},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(e){if(this.$scrollLeft===e||isNaN(e))return;this.$scrollLeft=e,this._signal("changeScrollLeft",e);},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.lineWidgets?Math.max(this.getLineWidgetMaxWidth(),this.screenWidth):this.screenWidth},this.getLineWidgetMaxWidth=function(){if(this.lineWidgetsWidth!=null)return this.lineWidgetsWidth;var e=0;return this.lineWidgets.forEach(function(t){t&&t.screenWidth>e&&(e=t.screenWidth);}),this.lineWidgetWidth=e},this.$computeWidth=function(e){if(this.$modified||e){this.$modified=!1;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var t=this.doc.getAllLines(),n=this.$rowLengthCache,r=0,i=0,s=this.$foldData[i],o=s?s.start.row:Infinity,u=t.length;for(var a=0;a<u;a++){if(a>o){a=s.end.row+1;if(a>=u)break;s=this.$foldData[i++],o=s?s.start.row:Infinity;}n[a]==null&&(n[a]=this.$getStringScreenWidth(t[a])[0]),n[a]>r&&(r=n[a]);}this.screenWidth=r;}},this.getLine=function(e){return this.doc.getLine(e)},this.getLines=function(e,t){return this.doc.getLines(e,t)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},this.insert=function(e,t){return this.doc.insert(e,t)},this.remove=function(e){return this.doc.remove(e)},this.removeFullLines=function(e,t){return this.doc.removeFullLines(e,t)},this.undoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=e.length-1;n!=-1;n--){var r=e[n];r.action=="insert"||r.action=="remove"?this.doc.revertDelta(r):r.folds&&this.addFolds(r.folds);}!t&&this.$undoSelect&&(e.selectionBefore?this.selection.fromJSON(e.selectionBefore):this.selection.setRange(this.$getUndoSelection(e,!0))),this.$fromUndo=!1;},this.redoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=0;n<e.length;n++){var r=e[n];(r.action=="insert"||r.action=="remove")&&this.doc.$safeApplyDelta(r);}!t&&this.$undoSelect&&(e.selectionAfter?this.selection.fromJSON(e.selectionAfter):this.selection.setRange(this.$getUndoSelection(e,!1))),this.$fromUndo=!1;},this.setUndoSelect=function(e){this.$undoSelect=e;},this.$getUndoSelection=function(e,t){function n(e){return t?e.action!=="insert":e.action==="insert"}var r,i;for(var s=0;s<e.length;s++){var o=e[s];if(!o.start)continue;if(!r){n(o)?r=l.fromPoints(o.start,o.end):r=l.fromPoints(o.start,o.start);continue}n(o)?(i=o.start,r.compare(i.row,i.column)==-1&&r.setStart(i),i=o.end,r.compare(i.row,i.column)==1&&r.setEnd(i)):(i=o.start,r.compare(i.row,i.column)==-1&&(r=l.fromPoints(o.start,o.start)));}return r},this.replace=function(e,t){return this.doc.replace(e,t)},this.moveText=function(e,t,n){var r=this.getTextRange(e),i=this.getFoldsInRange(e),s=l.fromPoints(t,t);if(!n){this.remove(e);var o=e.start.row-e.end.row,u=o?-e.end.column:e.start.column-e.end.column;u&&(s.start.row==e.end.row&&s.start.column>e.end.column&&(s.start.column+=u),s.end.row==e.end.row&&s.end.column>e.end.column&&(s.end.column+=u)),o&&s.start.row>=e.end.row&&(s.start.row+=o,s.end.row+=o);}s.end=this.insert(s.start,r);if(i.length){var a=e.start,f=s.start,o=f.row-a.row,u=f.column-a.column;this.addFolds(i.map(function(e){return e=e.clone(),e.start.row==a.row&&(e.start.column+=u),e.end.row==a.row&&(e.end.column+=u),e.start.row+=o,e.end.row+=o,e}));}return s},this.indentRows=function(e,t,n){n=n.replace(/\t/g,this.getTabString());for(var r=e;r<=t;r++)this.doc.insertInLine({row:r,column:0},n);},this.outdentRows=function(e){var t=e.collapseRows(),n=new l(0,0,0,0),r=this.getTabSize();for(var i=t.start.row;i<=t.end.row;++i){var s=this.getLine(i);n.start.row=i,n.end.row=i;for(var o=0;o<r;++o)if(s.charAt(o)!=" ")break;o<r&&s.charAt(o)=="	"?(n.start.column=o,n.end.column=o+1):(n.start.column=0,n.end.column=o),this.remove(n);}},this.$moveLines=function(e,t,n){e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t);if(n<0){var r=this.getRowFoldStart(e+n);if(r<0)return 0;var i=r-e;}else if(n>0){var r=this.getRowFoldEnd(t+n);if(r>this.doc.getLength()-1)return 0;var i=r-t;}else {e=this.$clipRowToDocument(e),t=this.$clipRowToDocument(t);var i=t-e+1;}var s=new l(e,0,t,Number.MAX_VALUE),o=this.getFoldsInRange(s).map(function(e){return e=e.clone(),e.start.row+=i,e.end.row+=i,e}),u=n==0?this.doc.getLines(e,t):this.doc.removeFullLines(e,t);return this.doc.insertFullLines(e+i,u),o.length&&this.addFolds(o),i},this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},this.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},this.$clipPositionToDocument=function(e,t){t=Math.max(0,t);if(e<0)e=0,t=0;else {var n=this.doc.getLength();e>=n?(e=n-1,t=this.doc.getLine(n-1).length):t=Math.min(this.doc.getLine(e).length,t);}return {row:e,column:t}},this.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column);var t=this.doc.getLength()-1;return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0);if(e){var t=this.getLength();this.$wrapData=Array(t),this.$updateWrapData(0,t-1);}this._signal("changeWrapMode");}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(e,t){if(this.$wrapLimitRange.min!==e||this.$wrapLimitRange.max!==t)this.$wrapLimitRange={min:e,max:t},this.$modified=!0,this.$bidiHandler.markAsDirty(),this.$useWrapMode&&this._signal("changeWrapMode");},this.adjustWrapLimit=function(e,t){var n=this.$wrapLimitRange;n.max<0&&(n={min:t,max:t});var r=this.$constrainWrapLimit(e,n.min,n.max);return r!=this.$wrapLimit&&r>1?(this.$wrapLimit=r,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._signal("changeWrapLimit")),!0):!1},this.$constrainWrapLimit=function(e,t,n){return t&&(e=Math.max(t,e)),n&&(e=Math.min(n,e)),e},this.getWrapLimit=function(){return this.$wrapLimit},this.setWrapLimit=function(e){this.setWrapLimitRange(e,e);},this.getWrapLimitRange=function(){return {min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,n=e.action,r=e.start,i=e.end,s=r.row,o=i.row,u=o-s,a=null;this.$updating=!0;if(u!=0)if(n==="remove"){this[t?"$wrapData":"$rowLengthCache"].splice(s,u);var f=this.$foldData;a=this.getFoldsInRange(e),this.removeFolds(a);var l=this.getFoldLine(i.row),c=0;if(l){l.addRemoveChars(i.row,i.column,r.column-i.column),l.shiftRow(-u);var h=this.getFoldLine(s);h&&h!==l&&(h.merge(l),l=h),c=f.indexOf(l)+1;}for(c;c<f.length;c++){var l=f[c];l.start.row>=i.row&&l.shiftRow(-u);}o=s;}else {var p=Array(u);p.unshift(s,0);var d=t?this.$wrapData:this.$rowLengthCache;d.splice.apply(d,p);var f=this.$foldData,l=this.getFoldLine(s),c=0;if(l){var v=l.range.compareInside(r.row,r.column);v==0?(l=l.split(r.row,r.column),l&&(l.shiftRow(u),l.addRemoveChars(o,0,i.column-r.column))):v==-1&&(l.addRemoveChars(s,0,i.column-r.column),l.shiftRow(u)),c=f.indexOf(l)+1;}for(c;c<f.length;c++){var l=f[c];l.start.row>=s&&l.shiftRow(u);}}else {u=Math.abs(e.start.column-e.end.column),n==="remove"&&(a=this.getFoldsInRange(e),this.removeFolds(a),u=-u);var l=this.getFoldLine(s);l&&l.addRemoveChars(s,r.column,u);}return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(s,o):this.$updateRowLengthCache(s,o),a},this.$updateRowLengthCache=function(e,t,n){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null;},this.$updateWrapData=function(e,t){var r=this.doc.getAllLines(),i=this.getTabSize(),o=this.$wrapData,u=this.$wrapLimit,a,f,l=e;t=Math.min(t,r.length-1);while(l<=t)f=this.getFoldLine(l,f),f?(a=[],f.walk(function(e,t,i,o){var u;if(e!=null){u=this.$getDisplayTokens(e,a.length),u[0]=n;for(var f=1;f<u.length;f++)u[f]=s;}else u=this.$getDisplayTokens(r[t].substring(o,i),a.length);a=a.concat(u);}.bind(this),f.end.row,r[f.end.row].length+1),o[f.start.row]=this.$computeWrapSplits(a,u,i),l=f.end.row+1):(a=this.$getDisplayTokens(r[l]),o[l]=this.$computeWrapSplits(a,u,i),l++);};var e=1,t=2,n=3,s=4,a=9,c=10,h=11,d=12;this.$computeWrapSplits=function(e,r,i){function g(){var t=0;if(m===0)return t;if(v)for(var n=0;n<e.length;n++){var r=e[n];if(r==c)t+=1;else {if(r!=h){if(r==d)continue;break}t+=i;}}return p&&v!==!1&&(t+=i),Math.min(t,m)}function y(t){var n=t-f;for(var r=f;r<t;r++){var i=e[r];if(i===12||i===2)n-=1;}o.length||(b=g(),o.indent=b),l+=n,o.push(l),f=t;}if(e.length==0)return [];var o=[],u=e.length,f=0,l=0,p=this.$wrapAsCode,v=this.$indentedSoftWrap,m=r<=Math.max(2*i,8)||v===!1?0:Math.floor(r/2),b=0;while(u-f>r-b){var w=f+r-b;if(e[w-1]>=c&&e[w]>=c){y(w);continue}if(e[w]==n||e[w]==s){for(w;w!=f-1;w--)if(e[w]==n)break;if(w>f){y(w);continue}w=f+r;for(w;w<e.length;w++)if(e[w]!=s)break;if(w==e.length)break;y(w);continue}var E=Math.max(w-(r-(r>>2)),f-1);while(w>E&&e[w]<n)w--;if(p){while(w>E&&e[w]<n)w--;while(w>E&&e[w]==a)w--;}else while(w>E&&e[w]<c)w--;if(w>E){y(++w);continue}w=f+r,e[w]==t&&w--,y(w-b);}return o},this.$getDisplayTokens=function(n,r){var i=[],s;r=r||0;for(var o=0;o<n.length;o++){var u=n.charCodeAt(o);if(u==9){s=this.getScreenTabSize(i.length+r),i.push(h);for(var f=1;f<s;f++)i.push(d);}else u==32?i.push(c):u>39&&u<48||u>57&&u<64?i.push(a):u>=4352&&v(u)?i.push(e,t):i.push(e);}return i},this.$getStringScreenWidth=function(e,t,n){if(t==0)return [0,0];t==null&&(t=Infinity),n=n||0;var r,i;for(i=0;i<e.length;i++){r=e.charCodeAt(i),r==9?n+=this.getScreenTabSize(n):r>=4352&&v(r)?n+=2:n+=1;if(n>t)break}return [n,i]},this.lineWidgets=null,this.getRowLength=function(e){var t=1;return this.lineWidgets&&(t+=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0),!this.$useWrapMode||!this.$wrapData[e]?t:this.$wrapData[e].length+t},this.getRowLineCount=function(e){return !this.$useWrapMode||!this.$wrapData[e]?1:this.$wrapData[e].length+1},this.getRowWrapIndent=function(e){if(this.$useWrapMode){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE),n=this.$wrapData[t.row];return n.length&&n[0]<t.column?n.indent:0}return 0},this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE);return this.documentToScreenColumn(t.row,t.column)},this.getDocumentLastRowColumn=function(e,t){var n=this.documentToScreenRow(e,t);return this.getScreenLastRowColumn(n)},this.getDocumentLastRowColumnPosition=function(e,t){var n=this.documentToScreenRow(e,t);return this.screenToDocumentPosition(n,Number.MAX_VALUE/10)},this.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:undefined},this.getScreenTabSize=function(e){return this.$tabSize-(e%this.$tabSize|0)},this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},this.screenToDocumentPosition=function(e,t,n){if(e<0)return {row:0,column:0};var r,i=0,s=0,o,u=0,a=0,f=this.$screenRowCache,l=this.$getRowCacheIndex(f,e),c=f.length;if(c&&l>=0)var u=f[l],i=this.$docRowCache[l],h=e>f[c-1];else var h=!c;var p=this.getLength()-1,d=this.getNextFoldLine(i),v=d?d.start.row:Infinity;while(u<=e){a=this.getRowLength(i);if(u+a>e||i>=p)break;u+=a,i++,i>v&&(i=d.end.row+1,d=this.getNextFoldLine(i,d),v=d?d.start.row:Infinity),h&&(this.$docRowCache.push(i),this.$screenRowCache.push(u));}if(d&&d.start.row<=i)r=this.getFoldDisplayLine(d),i=d.start.row;else {if(u+a<=e||i>p)return {row:p,column:this.getLine(p).length};r=this.getLine(i),d=null;}var m=0,g=Math.floor(e-u);if(this.$useWrapMode){var y=this.$wrapData[i];y&&(o=y[g],g>0&&y.length&&(m=y.indent,s=y[g-1]||y[y.length-1],r=r.substring(s)));}return n!==undefined&&this.$bidiHandler.isBidiRow(u+g,i,g)&&(t=this.$bidiHandler.offsetToCol(n)),s+=this.$getStringScreenWidth(r,t-m)[1],this.$useWrapMode&&s>=o&&(s=o-1),d?d.idxToPosition(s):{row:i,column:s}},this.documentToScreenPosition=function(e,t){if(typeof t=="undefined")var n=this.$clipPositionToDocument(e.row,e.column);else n=this.$clipPositionToDocument(e,t);e=n.row,t=n.column;var r=0,i=null,s=null;s=this.getFoldAt(e,t,1),s&&(e=s.start.row,t=s.start.column);var o,u=0,a=this.$docRowCache,f=this.$getRowCacheIndex(a,e),l=a.length;if(l&&f>=0)var u=a[f],r=this.$screenRowCache[f],c=e>a[l-1];else var c=!l;var h=this.getNextFoldLine(u),p=h?h.start.row:Infinity;while(u<e){if(u>=p){o=h.end.row+1;if(o>e)break;h=this.getNextFoldLine(o,h),p=h?h.start.row:Infinity;}else o=u+1;r+=this.getRowLength(u),u=o,c&&(this.$docRowCache.push(u),this.$screenRowCache.push(r));}var d="";h&&u>=p?(d=this.getFoldDisplayLine(h,e,t),i=h.start.row):(d=this.getLine(e).substring(0,t),i=e);var v=0;if(this.$useWrapMode){var m=this.$wrapData[i];if(m){var g=0;while(d.length>=m[g])r++,g++;d=d.substring(m[g-1]||0,d.length),v=g>0?m.indent:0;}}return this.lineWidgets&&this.lineWidgets[u]&&this.lineWidgets[u].rowsAbove&&(r+=this.lineWidgets[u].rowsAbove),{row:r,column:v+this.$getStringScreenWidth(d)[0]}},this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},this.getScreenLength=function(){var e=0,t=null;if(!this.$useWrapMode){e=this.getLength();var n=this.$foldData;for(var r=0;r<n.length;r++)t=n[r],e-=t.end.row-t.start.row;}else {var i=this.$wrapData.length,s=0,r=0,t=this.$foldData[r++],o=t?t.start.row:Infinity;while(s<i){var u=this.$wrapData[s];e+=u?u.length+1:1,s++,s>o&&(s=t.end.row+1,t=this.$foldData[r++],o=t?t.start.row:Infinity);}}return this.lineWidgets&&(e+=this.$getWidgetScreenLength()),e},this.$setFontMetrics=function(e){if(!this.$enableVarChar)return;this.$getStringScreenWidth=function(t,n,r){if(n===0)return [0,0];n||(n=Infinity),r=r||0;var i,s;for(s=0;s<t.length;s++){i=t.charAt(s),i==="	"?r+=this.getScreenTabSize(r):r+=e.getCharacterWidth(i);if(r>n)break}return [r,s]};},this.destroy=function(){this.destroyed||(this.bgTokenizer.setDocument(null),this.bgTokenizer.cleanup(),this.destroyed=!0),this.$stopWorker(),this.removeAllListeners(),this.doc&&this.doc.off("change",this.$onChange),this.selection.detach();},this.isFullWidth=v;}.call(d.prototype),e("./edit_session/folding").Folding.call(d.prototype),e("./edit_session/bracket_match").BracketMatch.call(d.prototype),o.defineOptions(d.prototype,"session",{wrap:{set:function(e){!e||e=="off"?e=!1:e=="free"?e=!0:e=="printMargin"?e=-1:typeof e=="string"&&(e=parseInt(e,10)||!1);if(this.$wrap==e)return;this.$wrap=e;if(!e)this.setUseWrapMode(!1);else {var t=typeof e=="number"?e:null;this.setWrapLimitRange(t,t),this.setUseWrapMode(!0);}},get:function(){return this.getUseWrapMode()?this.$wrap==-1?"printMargin":this.getWrapLimitRange().min?this.$wrap:"free":"off"},handlesSet:!0},wrapMethod:{set:function(e){e=e=="auto"?this.$mode.type!="text":e!="text",e!=this.$wrapAsCode&&(this.$wrapAsCode=e,this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0)));},initialValue:"auto"},indentedSoftWrap:{set:function(){this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0));},initialValue:!0},firstLineNumber:{set:function(){this._signal("changeBreakpoint");},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker();},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){e=parseInt(e),e>0&&this.$tabSize!==e&&(this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._signal("changeTabSize"));},initialValue:4,handlesSet:!0},navigateWithinSoftTabs:{initialValue:!1},foldStyle:{set:function(e){this.setFoldStyle(e);},handlesSet:!0},overwrite:{set:function(e){this._signal("changeOverwrite");},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e);},get:function(){return this.doc.getNewLineMode()},handlesSet:!0},mode:{set:function(e){this.setMode(e);},get:function(){return this.$modeId},handlesSet:!0}}),t.EditSession=d;}),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){function u(e,t){function n(e){return /\w/.test(e)||t.regExp?"\\b":""}return n(e[0])+e+n(e[e.length-1])}var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(){this.$options={};};((function(){this.set=function(e){return i.mixin(this.$options,e),this},this.getOptions=function(){return r.copyObject(this.$options)},this.setOptions=function(e){this.$options=e;},this.find=function(e){var t=this.$options,n=this.$matchIterator(e,t);if(!n)return !1;var r=null;return n.forEach(function(e,n,i,o){return r=new s(e,n,i,o),n==o&&t.start&&t.start.start&&t.skipCurrent!=0&&r.isEqual(t.start)?(r=null,!1):!0}),r},this.findAll=function(e){var t=this.$options;if(!t.needle)return [];this.$assembleRegExp(t);var n=t.range,i=n?e.getLines(n.start.row,n.end.row):e.doc.getAllLines(),o=[],u=t.re;if(t.$isMultiLine){var a=u.length,f=i.length-a,l;e:for(var c=u.offset||0;c<=f;c++){for(var h=0;h<a;h++)if(i[c+h].search(u[h])==-1)continue e;var p=i[c],d=i[c+a-1],v=p.length-p.match(u[0])[0].length,m=d.match(u[a-1])[0].length;if(l&&l.end.row===c&&l.end.column>v)continue;o.push(l=new s(c,v,c+a-1,m)),a>2&&(c=c+a-2);}}else for(var g=0;g<i.length;g++){var y=r.getMatchOffsets(i[g],u);for(var h=0;h<y.length;h++){var b=y[h];o.push(new s(g,b.offset,g,b.offset+b.length));}}if(n){var w=n.start.column,E=n.end.column,g=0,h=o.length-1;while(g<h&&o[g].start.column<w&&o[g].start.row==0)g++;var S=n.end.row-n.start.row;while(g<h&&o[h].end.column>E&&o[h].end.row==S)h--;o=o.slice(g,h+1);for(g=0,h=o.length;g<h;g++)o[g].start.row+=n.start.row,o[g].end.row+=n.start.row;}return o},this.replace=function(e,t){var n=this.$options,r=this.$assembleRegExp(n);if(n.$isMultiLine)return t;if(!r)return;var i=r.exec(e);if(!i||i[0].length!=e.length)return null;t=e.replace(r,t);if(n.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var o=e[s];o&&o.toLowerCase()!=o?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase();}t=t.join("");}return t},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle;var n=e.needle;if(!e.needle)return e.re=!1;e.regExp||(n=r.escapeRegExp(n)),e.wholeWord&&(n=u(n,e));var i=e.caseSensitive?"gm":"gmi";e.$isMultiLine=!t&&/[\n\r]/.test(n);if(e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(n,i);try{var s=new RegExp(n,i);}catch(o){s=!1;}return e.re=s},this.$assembleMultilineRegExp=function(e,t){var n=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),r=[];for(var i=0;i<n.length;i++)try{r.push(new RegExp(n[i],t));}catch(s){return !1}return r},this.$matchIterator=function(e,t){var n=this.$assembleRegExp(t);if(!n)return !1;var r=t.backwards==1,i=t.skipCurrent!=0,s=t.range,o=t.start;o||(o=s?s[r?"end":"start"]:e.selection.getRange()),o.start&&(o=o[i!=r?"end":"start"]);var u=s?s.start.row:0,a=s?s.end.row:e.getLength()-1;if(r)var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n--;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return;if(t.wrap==0)return;for(n=a,u=o.row;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return};else var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n+=1;n<=a;n++)if(c(n,0,e))return;if(t.wrap==0)return;for(n=u,a=o.row;n<=a;n++)if(c(n,0,e))return};if(t.$isMultiLine)var l=n.length,c=function(t,i,s){var o=r?t-l+1:t;if(o<0||o+l>e.getLength())return;var u=e.getLine(o),a=u.search(n[0]);if(!r&&a<i||a===-1)return;for(var f=1;f<l;f++){u=e.getLine(o+f);if(u.search(n[f])==-1)return}var c=u.match(n[l-1])[0].length;if(r&&c>i)return;if(s(o,a,o+l-1,c))return !0};else if(r)var c=function(t,r,i){var s=e.getLine(t),o=[],u,a=0;n.lastIndex=0;while(u=n.exec(s)){var f=u[0].length;a=u.index;if(!f){if(a>=s.length)break;n.lastIndex=a+=1;}if(u.index+f>r)break;o.push(u.index,f);}for(var l=o.length-1;l>=0;l-=2){var c=o[l-1],f=o[l];if(i(t,c,t,c+f))return !0}};else var c=function(t,r,i){var s=e.getLine(t),o,u;n.lastIndex=r;while(u=n.exec(s)){var a=u[0].length;o=u.index;if(i(t,o,t,o+a))return !0;if(!a){n.lastIndex=o+=1;if(o>=s.length)return !1}}};return {forEach:f}};})).call(o.prototype),t.Search=o;}),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){function o(e,t){this.platform=t||(i.isMac?"mac":"win"),this.commands={},this.commandKeyBinding={},this.addCommands(e),this.$singleCommand=!0;}function u(e,t){o.call(this,e,t),this.$singleCommand=!1;}var r=e("../lib/keys"),i=e("../lib/useragent"),s=r.KEY_MODS;u.prototype=o.prototype,function(){function e(e){return typeof e=="object"&&e.bindKey&&e.bindKey.position||(e.isDefault?-100:0)}this.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e);},this.removeCommand=function(e,t){var n=e&&(typeof e=="string"?e:e.name);e=this.commands[n],t||delete this.commands[n];var r=this.commandKeyBinding;for(var i in r){var s=r[i];if(s==e)delete r[i];else if(Array.isArray(s)){var o=s.indexOf(e);o!=-1&&(s.splice(o,1),s.length==1&&(r[i]=s[0]));}}},this.bindKey=function(e,t,n){typeof e=="object"&&e&&(n==undefined&&(n=e.position),e=e[this.platform]);if(!e)return;if(typeof t=="function")return this.addCommand({exec:t,bindKey:e,name:t.name||e});e.split("|").forEach(function(e){var r="";if(e.indexOf(" ")!=-1){var i=e.split(/\s+/);e=i.pop(),i.forEach(function(e){var t=this.parseKeys(e),n=s[t.hashId]+t.key;r+=(r?" ":"")+n,this._addCommandToBinding(r,"chainKeys");},this),r+=" ";}var o=this.parseKeys(e),u=s[o.hashId]+o.key;this._addCommandToBinding(r+u,t,n);},this);},this._addCommandToBinding=function(t,n,r){var i=this.commandKeyBinding,s;if(!n)delete i[t];else if(!i[t]||this.$singleCommand)i[t]=n;else {Array.isArray(i[t])?(s=i[t].indexOf(n))!=-1&&i[t].splice(s,1):i[t]=[i[t]],typeof r!="number"&&(r=e(n));var o=i[t];for(s=0;s<o.length;s++){var u=o[s],a=e(u);if(a>r)break}o.splice(s,0,n);}},this.addCommands=function(e){e&&Object.keys(e).forEach(function(t){var n=e[t];if(!n)return;if(typeof n=="string")return this.bindKey(n,t);typeof n=="function"&&(n={exec:n});if(typeof n!="object")return;n.name||(n.name=t),this.addCommand(n);},this);},this.removeCommands=function(e){Object.keys(e).forEach(function(t){this.removeCommand(e[t]);},this);},this.bindKeys=function(e){Object.keys(e).forEach(function(t){this.bindKey(t,e[t]);},this);},this._buildKeyHash=function(e){this.bindKey(e.bindKey,e);},this.parseKeys=function(e){var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e){return e}),n=t.pop(),i=r[n];if(r.FUNCTION_KEYS[i])n=r.FUNCTION_KEYS[i].toLowerCase();else {if(!t.length)return {key:n,hashId:-1};if(t.length==1&&t[0]=="shift")return {key:n.toUpperCase(),hashId:-1}}var s=0;for(var o=t.length;o--;){var u=r.KEY_MODS[t[o]];if(u==null)return typeof console!="undefined"&&console.error("invalid modifier "+t[o]+" in "+e),!1;s|=u;}return {key:n,hashId:s}},this.findKeyCommand=function(t,n){var r=s[t]+n;return this.commandKeyBinding[r]},this.handleKeyboard=function(e,t,n,r){if(r<0)return;var i=s[t]+n,o=this.commandKeyBinding[i];e.$keyChain&&(e.$keyChain+=" "+i,o=this.commandKeyBinding[e.$keyChain]||o);if(o)if(o=="chainKeys"||o[o.length-1]=="chainKeys")return e.$keyChain=e.$keyChain||i,{command:"null"};if(e.$keyChain)if(!!t&&t!=4||n.length!=1){if(t==-1||r>0)e.$keyChain="";}else e.$keyChain=e.$keyChain.slice(0,-i.length-1);return {command:o}},this.getStatusText=function(e,t){return t.$keyChain||""};}.call(o.prototype),t.HashHandler=o,t.MultiHashHandler=u;}),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../keyboard/hash_handler").MultiHashHandler,s=e("../lib/event_emitter").EventEmitter,o=function(e,t){i.call(this,t,e),this.byName=this.commands,this.setDefaultHandler("exec",function(e){return e.args?e.command.exec(e.editor,e.args,e.event,!1):e.command.exec(e.editor,{},e.event,!0)});};r.inherits(o,i),function(){r.implement(this,s),this.exec=function(e,t,n){if(Array.isArray(e)){for(var r=e.length;r--;)if(this.exec(e[r],t,n))return !0;return !1}typeof e=="string"&&(e=this.commands[e]);if(!e)return !1;if(t&&t.$readOnly&&!e.readOnly)return !1;if(this.$checkCommandState!=0&&e.isAvailable&&!e.isAvailable(t))return !1;var i={editor:t,command:e,args:n};return i.returnValue=this._emit("exec",i),this._signal("afterExec",i),i.returnValue===!1?!1:!0},this.toggleRecording=function(e){if(this.$inReplay)return;return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.off("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args]);}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(e){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(e);try{this.$inReplay=!0,this.macro.forEach(function(t){typeof t=="string"?this.exec(t,e):this.exec(t[0],e,t[1]);},this);}finally{this.$inReplay=!1;}},this.trimMacro=function(e){return e.map(function(e){return typeof e[0]!="string"&&(e[0]=e[0].name),e[1]||(e=e[0]),e})};}.call(o.prototype),t.CommandManager=o;}),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],function(e,t,n){function o(e,t){return {win:e,mac:t}}var r=e("../lib/lang"),i=e("../config"),s=e("../range").Range;t.commands=[{name:"showSettingsMenu",description:"Show settings menu",bindKey:o("Ctrl-,","Command-,"),exec:function(e){i.loadModule("ace/ext/settings_menu",function(t){t.init(e),e.showSettingsMenu();});},readOnly:!0},{name:"goToNextError",description:"Go to next error",bindKey:o("Alt-E","F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,1);});},scrollIntoView:"animate",readOnly:!0},{name:"goToPreviousError",description:"Go to previous error",bindKey:o("Alt-Shift-E","Shift-F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,-1);});},scrollIntoView:"animate",readOnly:!0},{name:"selectall",description:"Select all",bindKey:o("Ctrl-A","Command-A"),exec:function(e){e.selectAll();},readOnly:!0},{name:"centerselection",description:"Center selection",bindKey:o(null,"Ctrl-L"),exec:function(e){e.centerSelection();},readOnly:!0},{name:"gotoline",description:"Go to line...",bindKey:o("Ctrl-L","Command-L"),exec:function(e,t){typeof t=="number"&&!isNaN(t)&&e.gotoLine(t),e.prompt({$type:"gotoLine"});},readOnly:!0},{name:"fold",bindKey:o("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"unfold",bindKey:o("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleFoldWidget",description:"Toggle fold widget",bindKey:o("F2","F2"),exec:function(e){e.session.toggleFoldWidget();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleParentFoldWidget",description:"Toggle parent fold widget",bindKey:o("Alt-F2","Alt-F2"),exec:function(e){e.session.toggleFoldWidget(!0);},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"foldall",description:"Fold all",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAll();},scrollIntoView:"center",readOnly:!0},{name:"foldAllComments",description:"Fold all comments",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAllComments();},scrollIntoView:"center",readOnly:!0},{name:"foldOther",description:"Fold other",bindKey:o("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll(),e.session.unfold(e.selection.getAllRanges());},scrollIntoView:"center",readOnly:!0},{name:"unfoldall",description:"Unfold all",bindKey:o("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold();},scrollIntoView:"center",readOnly:!0},{name:"findnext",description:"Find next",bindKey:o("Ctrl-K","Command-G"),exec:function(e){e.findNext();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"findprevious",description:"Find previous",bindKey:o("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious();},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"selectOrFindNext",description:"Select or find next",bindKey:o("Alt-K","Ctrl-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findNext();},readOnly:!0},{name:"selectOrFindPrevious",description:"Select or find previous",bindKey:o("Alt-Shift-K","Ctrl-Shift-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findPrevious();},readOnly:!0},{name:"find",description:"Find",bindKey:o("Ctrl-F","Command-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e);});},readOnly:!0},{name:"overwrite",description:"Overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite();},readOnly:!0},{name:"selecttostart",description:"Select to start",bindKey:o("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart();},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",description:"Go to start",bindKey:o("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart();},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",description:"Select up",bindKey:o("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function(e){e.getSelection().selectUp();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golineup",description:"Go line up",bindKey:o("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttoend",description:"Select to end",bindKey:o("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd();},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",description:"Go to end",bindKey:o("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd();},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",description:"Select down",bindKey:o("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function(e){e.getSelection().selectDown();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golinedown",description:"Go line down",bindKey:o("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordleft",description:"Select word left",bindKey:o("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordleft",description:"Go to word left",bindKey:o("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolinestart",description:"Select to line start",bindKey:o("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function(e){e.getSelection().selectLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolinestart",description:"Go to line start",bindKey:o("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectleft",description:"Select left",bindKey:o("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function(e){e.getSelection().selectLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoleft",description:"Go to left",bindKey:o("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordright",description:"Select word right",bindKey:o("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordright",description:"Go to word right",bindKey:o("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolineend",description:"Select to line end",bindKey:o("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function(e){e.getSelection().selectLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolineend",description:"Go to line end",bindKey:o("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectright",description:"Select right",bindKey:o("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoright",description:"Go to right",bindKey:o("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectpagedown",description:"Select page down",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown();},readOnly:!0},{name:"pagedown",description:"Page down",bindKey:o(null,"Option-PageDown"),exec:function(e){e.scrollPageDown();},readOnly:!0},{name:"gotopagedown",description:"Go to page down",bindKey:o("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown();},readOnly:!0},{name:"selectpageup",description:"Select page up",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp();},readOnly:!0},{name:"pageup",description:"Page up",bindKey:o(null,"Option-PageUp"),exec:function(e){e.scrollPageUp();},readOnly:!0},{name:"gotopageup",description:"Go to page up",bindKey:"PageUp",exec:function(e){e.gotoPageUp();},readOnly:!0},{name:"scrollup",description:"Scroll up",bindKey:o("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight);},readOnly:!0},{name:"scrolldown",description:"Scroll down",bindKey:o("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight);},readOnly:!0},{name:"selectlinestart",description:"Select line start",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectlineend",description:"Select line end",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"togglerecording",description:"Toggle recording",bindKey:o("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e);},readOnly:!0},{name:"replaymacro",description:"Replay macro",bindKey:o("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e);},readOnly:!0},{name:"jumptomatching",description:"Jump to matching",bindKey:o("Ctrl-\\|Ctrl-P","Command-\\"),exec:function(e){e.jumpToMatching();},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"selecttomatching",description:"Select to matching",bindKey:o("Ctrl-Shift-\\|Ctrl-Shift-P","Command-Shift-\\"),exec:function(e){e.jumpToMatching(!0);},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"expandToMatching",description:"Expand to matching",bindKey:o("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function(e){e.jumpToMatching(!0,!0);},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"passKeysToBrowser",description:"Pass keys to browser",bindKey:o(null,null),exec:function(){},passEvent:!0,readOnly:!0},{name:"copy",description:"Copy",exec:function(e){},readOnly:!0},{name:"cut",description:"Cut",exec:function(e){var t=e.$copyWithEmptySelection&&e.selection.isEmpty(),n=t?e.selection.getLineRange():e.selection.getRange();e._emit("cut",n),n.isEmpty()||e.session.remove(n),e.clearSelection();},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",description:"Paste",exec:function(e,t){e.$handlePaste(t);},scrollIntoView:"cursor"},{name:"removeline",description:"Remove line",bindKey:o("Ctrl-D","Command-D"),exec:function(e){e.removeLines();},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",description:"Duplicate selection",bindKey:o("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection();},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",description:"Sort lines",bindKey:o("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines();},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",description:"Toggle comment",bindKey:o("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",description:"Toggle block comment",bindKey:o("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",description:"Modify number up",bindKey:o("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1);},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",description:"Modify number down",bindKey:o("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1);},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",description:"Replace",bindKey:o("Ctrl-H","Command-Option-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e,!0);});}},{name:"undo",description:"Undo",bindKey:o("Ctrl-Z","Command-Z"),exec:function(e){e.undo();}},{name:"redo",description:"Redo",bindKey:o("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo();}},{name:"copylinesup",description:"Copy lines up",bindKey:o("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp();},scrollIntoView:"cursor"},{name:"movelinesup",description:"Move lines up",bindKey:o("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp();},scrollIntoView:"cursor"},{name:"copylinesdown",description:"Copy lines down",bindKey:o("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown();},scrollIntoView:"cursor"},{name:"movelinesdown",description:"Move lines down",bindKey:o("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown();},scrollIntoView:"cursor"},{name:"del",description:"Delete",bindKey:o("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",description:"Backspace",bindKey:o("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",description:"Cut or delete",bindKey:o("Shift-Delete",null),exec:function(e){if(!e.selection.isEmpty())return !1;e.remove("left");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",description:"Remove to line start",bindKey:o("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",description:"Remove to line end",bindKey:o("Alt-Delete","Ctrl-K|Command-Delete"),exec:function(e){e.removeToLineEnd();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestarthard",description:"Remove to line start hard",bindKey:o("Ctrl-Shift-Backspace",null),exec:function(e){var t=e.selection.getRange();t.start.column=0,e.session.remove(t);},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineendhard",description:"Remove to line end hard",bindKey:o("Ctrl-Shift-Delete",null),exec:function(e){var t=e.selection.getRange();t.end.column=Number.MAX_VALUE,e.session.remove(t);},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",description:"Remove word left",bindKey:o("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",description:"Remove word right",bindKey:o("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",description:"Outdent",bindKey:o("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",description:"Indent",bindKey:o("Tab","Tab"),exec:function(e){e.indent();},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",description:"Block outdent",bindKey:o("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",description:"Block indent",bindKey:o("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent();},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",description:"Insert string",exec:function(e,t){e.insert(t);},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",description:"Insert text",exec:function(e,t){e.insert(r.stringRepeat(t.text||"",t.times||1));},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",description:"Split line",bindKey:o(null,"Ctrl-O"),exec:function(e){e.splitLine();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",description:"Transpose letters",bindKey:o("Alt-Shift-X","Ctrl-T"),exec:function(e){e.transposeLetters();},multiSelectAction:function(e){e.transposeSelections(1);},scrollIntoView:"cursor"},{name:"touppercase",description:"To uppercase",bindKey:o("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",description:"To lowercase",bindKey:o("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"autoindent",description:"Auto Indent",bindKey:o(null,null),exec:function(e){e.autoIndent();},multiSelectAction:"forEachLine",scrollIntoView:"animate"},{name:"expandtoline",description:"Expand to line",bindKey:o("Ctrl-Shift-L","Command-Shift-L"),exec:function(e){var t=e.selection.getRange();t.start.column=t.end.column=0,t.end.row++,e.selection.setRange(t,!1);},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"openlink",bindKey:o("Ctrl+F3","F3"),exec:function(e){e.openLink();}},{name:"joinlines",description:"Join lines",bindKey:o(null,null),exec:function(e){var t=e.selection.isBackwards(),n=t?e.selection.getSelectionLead():e.selection.getSelectionAnchor(),i=t?e.selection.getSelectionAnchor():e.selection.getSelectionLead(),o=e.session.doc.getLine(n.row).length,u=e.session.doc.getTextRange(e.selection.getRange()),a=u.replace(/\n\s*/," ").length,f=e.session.doc.getLine(n.row);for(var l=n.row+1;l<=i.row+1;l++){var c=r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));c.length!==0&&(c=" "+c),f+=c;}i.row+1<e.session.doc.getLength()-1&&(f+=e.session.doc.getNewLineCharacter()),e.clearSelection(),e.session.doc.replace(new s(n.row,0,i.row+2,0),f),a>0?(e.selection.moveCursorTo(n.row,n.column),e.selection.selectTo(n.row,n.column+a)):(o=e.session.doc.getLine(n.row).length>o?o+1:o,e.selection.moveCursorTo(n.row,o));},multiSelectAction:"forEach",readOnly:!0},{name:"invertSelection",description:"Invert selection",bindKey:o(null,null),exec:function(e){var t=e.session.doc.getLength()-1,n=e.session.doc.getLine(t).length,r=e.selection.rangeList.ranges,i=[];r.length<1&&(r=[e.selection.getRange()]);for(var o=0;o<r.length;o++)o==r.length-1&&(r[o].end.row!==t||r[o].end.column!==n)&&i.push(new s(r[o].end.row,r[o].end.column,t,n)),o===0?(r[o].start.row!==0||r[o].start.column!==0)&&i.push(new s(0,0,r[o].start.row,r[o].start.column)):i.push(new s(r[o-1].end.row,r[o-1].end.column,r[o].start.row,r[o].start.column));e.exitMultiSelectMode(),e.clearSelection();for(var o=0;o<i.length;o++)e.selection.addRange(i[o],!1);},readOnly:!0,scrollIntoView:"none"},{name:"addLineAfter",description:"Add new line after the current line",exec:function(e){e.selection.clearSelection(),e.navigateLineEnd(),e.insert("\n");},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"addLineBefore",description:"Add new line before the current line",exec:function(e){e.selection.clearSelection();var t=e.getCursorPosition();e.selection.moveTo(t.row-1,Number.MAX_VALUE),e.insert("\n"),t.row===0&&e.navigateUp();},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"openCommandPallete",description:"Open command palette",bindKey:o("F1","F1"),exec:function(e){e.prompt({$type:"commands"});},readOnly:!0},{name:"modeSelect",description:"Change language mode...",bindKey:o(null,null),exec:function(e){e.prompt({$type:"modes"});},readOnly:!0}];for(var u=1;u<9;u++)t.commands.push({name:"foldToLevel"+u,description:"Fold To Level "+u,level:u,exec:function(e){e.session.foldToLevel(this.level);},scrollIntoView:"center",readOnly:!0});}),ace.define("ace/editor",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator","ace/clipboard"],function(e,t,n){var r=this&&this.__values||function(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return {next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=e("./lib/oop"),s=e("./lib/dom"),o=e("./lib/lang"),u=e("./lib/useragent"),a=e("./keyboard/textinput").TextInput,f=e("./mouse/mouse_handler").MouseHandler,l=e("./mouse/fold_handler").FoldHandler,c=e("./keyboard/keybinding").KeyBinding,h=e("./edit_session").EditSession,p=e("./search").Search,d=e("./range").Range,v=e("./lib/event_emitter").EventEmitter,m=e("./commands/command_manager").CommandManager,g=e("./commands/default_commands").commands,y=e("./config"),b=e("./token_iterator").TokenIterator,w=e("./clipboard"),E=function(e,t,n){this.$toDestroy=[];var r=e.getContainerElement();this.container=r,this.renderer=e,this.id="editor"+ ++E.$uid,this.commands=new m(u.isMac?"mac":"win",g),typeof document=="object"&&(this.textInput=new a(e.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.$mouseHandler=new f(this),new l(this)),this.keyBinding=new c(this),this.$search=(new p).set({wrap:!0}),this.$historyTracker=this.$historyTracker.bind(this),this.commands.on("exec",this.$historyTracker),this.$initOperationListeners(),this._$emitInputEvent=o.delayedCall(function(){this._signal("input",{}),this.session&&!this.session.destroyed&&this.session.bgTokenizer.scheduleStart();}.bind(this)),this.on("change",function(e,t){t._$emitInputEvent.schedule(31);}),this.setSession(t||n&&n.session||new h("")),y.resetOptions(this),n&&this.setOptions(n),y._signal("editor",this);};E.$uid=0,function(){i.implement(this,v),this.$initOperationListeners=function(){this.commands.on("exec",this.startOperation.bind(this),!0),this.commands.on("afterExec",this.endOperation.bind(this),!0),this.$opResetTimer=o.delayedCall(this.endOperation.bind(this,!0)),this.on("change",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.docChanged=!0;}.bind(this),!0),this.on("changeSelection",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.selectionChanged=!0;}.bind(this),!0);},this.curOp=null,this.prevOp={},this.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return;this.prevOp=this.curOp;}e||(this.previousCommand=null,e={}),this.$opResetTimer.schedule(),this.curOp=this.session.curOp={command:e.command||{},args:e.args,scrollTop:this.renderer.scrollTop},this.curOp.selectionBefore=this.selection.toJSON();},this.endOperation=function(e){if(this.curOp&&this.session){if(e&&e.returnValue===!1||!this.session)return this.curOp=null;if(e==1&&this.curOp.command&&this.curOp.command.name=="mouse")return;this._signal("beforeEndOperation");if(!this.curOp)return;var t=this.curOp.command,n=t&&t.scrollIntoView;if(n){switch(n){case"center-animate":n="animate";case"center":this.renderer.scrollCursorIntoView(null,.5);break;case"animate":case"cursor":this.renderer.scrollCursorIntoView();break;case"selectionPart":var r=this.selection.getRange(),i=this.renderer.layerConfig;(r.start.row>=i.lastRow||r.end.row<=i.firstRow)&&this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead);break;}n=="animate"&&this.renderer.animateScrolling(this.curOp.scrollTop);}var s=this.selection.toJSON();this.curOp.selectionAfter=s,this.$lastSel=this.selection.toJSON(),this.session.getUndoManager().addSelection(s),this.prevOp=this.curOp,this.curOp=null;}},this.$mergeableCommands=["backspace","del","insertstring"],this.$historyTracker=function(e){if(!this.$mergeUndoDeltas)return;var t=this.prevOp,n=this.$mergeableCommands,r=t.command&&e.command.name==t.command.name;if(e.command.name=="insertstring"){var i=e.args;this.mergeNextCommand===undefined&&(this.mergeNextCommand=!0),r=r&&this.mergeNextCommand&&(!/\s/.test(i)||/\s/.test(t.args)),this.mergeNextCommand=!0;}else r=r&&n.indexOf(e.command.name)!==-1;this.$mergeUndoDeltas!="always"&&Date.now()-this.sequenceStartTime>2e3&&(r=!1),r?this.session.mergeUndoDeltas=!0:n.indexOf(e.command.name)!==-1&&(this.sequenceStartTime=Date.now());},this.setKeyboardHandler=function(e,t){if(e&&typeof e=="string"&&e!="ace"){this.$keybindingId=e;var n=this;y.loadModule(["keybinding",e],function(r){n.$keybindingId==e&&n.keyBinding.setKeyboardHandler(r&&r.handler),t&&t();});}else this.$keybindingId=null,this.keyBinding.setKeyboardHandler(e),t&&t();},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(e){if(this.session==e)return;this.curOp&&this.endOperation(),this.curOp={};var t=this.session;if(t){this.session.off("change",this.$onDocumentChange),this.session.off("changeMode",this.$onChangeMode),this.session.off("tokenizerUpdate",this.$onTokenizerUpdate),this.session.off("changeTabSize",this.$onChangeTabSize),this.session.off("changeWrapLimit",this.$onChangeWrapLimit),this.session.off("changeWrapMode",this.$onChangeWrapMode),this.session.off("changeFold",this.$onChangeFold),this.session.off("changeFrontMarker",this.$onChangeFrontMarker),this.session.off("changeBackMarker",this.$onChangeBackMarker),this.session.off("changeBreakpoint",this.$onChangeBreakpoint),this.session.off("changeAnnotation",this.$onChangeAnnotation),this.session.off("changeOverwrite",this.$onCursorChange),this.session.off("changeScrollTop",this.$onScrollTopChange),this.session.off("changeScrollLeft",this.$onScrollLeftChange);var n=this.session.getSelection();n.off("changeCursor",this.$onCursorChange),n.off("changeSelection",this.$onSelectionChange);}this.session=e,e?(this.$onDocumentChange=this.onDocumentChange.bind(this),e.on("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.on("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.on("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.on("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.on("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.on("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.on("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.on("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.on("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.on("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.on("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.on("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.on("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.on("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.on("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.on("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.onCursorChange(),this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull()):(this.selection=null,this.renderer.setSession(e)),this._signal("changeSession",{session:e,oldSession:t}),this.curOp=null,t&&t._signal("changeEditor",{oldEditor:this}),e&&e._signal("changeEditor",{editor:this}),e&&!e.destroyed&&e.bgTokenizer.scheduleStart();},this.getSession=function(){return this.session},this.setValue=function(e,t){return this.session.doc.setValue(e),t?t==1?this.navigateFileEnd():t==-1&&this.navigateFileStart():this.selectAll(),e},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(e){this.renderer.onResize(e);},this.setTheme=function(e,t){this.renderer.setTheme(e,t);},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(e){this.renderer.setStyle(e);},this.unsetStyle=function(e){this.renderer.unsetStyle(e);},this.getFontSize=function(){return this.getOption("fontSize")||s.computedStyle(this.container).fontSize},this.setFontSize=function(e){this.setOption("fontSize",e);},this.$highlightBrackets=function(){if(this.$highlightPending)return;var e=this;this.$highlightPending=!0,setTimeout(function(){e.$highlightPending=!1;var t=e.session;if(!t||t.destroyed)return;t.$bracketHighlight&&(t.$bracketHighlight.markerIds.forEach(function(e){t.removeMarker(e);}),t.$bracketHighlight=null);var n=e.getCursorPosition(),r=e.getKeyboardHandler(),i=r&&r.$getDirectionForHighlight&&r.$getDirectionForHighlight(e),s=t.getMatchingBracketRanges(n,i);if(!s){var o=new b(t,n.row,n.column),u=o.getCurrentToken();if(u&&/\b(?:tag-open|tag-name)/.test(u.type)){var a=t.getMatchingTags(n);a&&(s=[a.openTagName,a.closeTagName]);}}!s&&t.$mode.getMatching&&(s=t.$mode.getMatching(e.session));if(!s){e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide();return}var f="ace_bracket";Array.isArray(s)?s.length==1&&(f="ace_error_bracket"):s=[s],s.length==2&&(d.comparePoints(s[0].end,s[1].start)==0?s=[d.fromPoints(s[0].start,s[1].end)]:d.comparePoints(s[0].start,s[1].end)==0&&(s=[d.fromPoints(s[1].start,s[0].end)])),t.$bracketHighlight={ranges:s,markerIds:s.map(function(e){return t.addMarker(e,f,"text")})},e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide();},50);},this.focus=function(){this.textInput.focus();},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur();},this.onFocus=function(e){if(this.$isFocused)return;this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus",e);},this.onBlur=function(e){if(!this.$isFocused)return;this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur",e);},this.$cursorChange=function(){this.renderer.updateCursor(),this.$highlightBrackets(),this.$updateHighlightActiveLine();},this.onDocumentChange=function(e){var t=this.session.$useWrapMode,n=e.start.row==e.end.row?e.end.row:Infinity;this.renderer.updateLines(e.start.row,n,t),this._signal("change",e),this.$cursorChange();},this.onTokenizerUpdate=function(e){var t=e.data;this.renderer.updateLines(t.first,t.last);},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop());},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft());},this.onCursorChange=function(){this.$cursorChange(),this._signal("changeSelection");},this.$updateHighlightActiveLine=function(){var e=this.getSession(),t;if(this.$highlightActiveLine){if(this.$selectionStyle!="line"||!this.selection.isMultiLine())t=this.getCursorPosition();this.renderer.theme&&this.renderer.theme.$selectionColorConflict&&!this.selection.isEmpty()&&(t=!1),this.renderer.$maxLines&&this.session.getLength()===1&&!(this.renderer.$minLines>1)&&(t=!1);}if(e.$highlightLineMarker&&!t)e.removeMarker(e.$highlightLineMarker.id),e.$highlightLineMarker=null;else if(!e.$highlightLineMarker&&t){var n=new d(t.row,t.column,t.row,Infinity);n.id=e.addMarker(n,"ace_active-line","screenLine"),e.$highlightLineMarker=n;}else t&&(e.$highlightLineMarker.start.row=t.row,e.$highlightLineMarker.end.row=t.row,e.$highlightLineMarker.start.column=t.column,e._signal("changeBackMarker"));},this.onSelectionChange=function(e){var t=this.session;t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null;if(!this.selection.isEmpty()){var n=this.selection.getRange(),r=this.getSelectionStyle();t.$selectionMarker=t.addMarker(n,"ace_selection",r);}else this.$updateHighlightActiveLine();var i=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(i),this._signal("changeSelection");},this.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange();if(t.isEmpty()||t.isMultiLine())return;var n=t.start.column,r=t.end.column,i=e.getLine(t.start.row),s=i.substring(n,r);if(s.length>5e3||!/[\w\d]/.test(s))return;var o=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:s}),u=i.substring(n-1,r+1);if(!o.test(u))return;return o},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers();},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers();},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints();},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations());},this.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e);},this.onChangeWrapLimit=function(){this.renderer.updateFull();},this.onChangeWrapMode=function(){this.renderer.onResize(!0);},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull();},this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())},this.getCopyText=function(){var e=this.getSelectedText(),t=this.session.doc.getNewLineCharacter(),n=!1;if(!e&&this.$copyWithEmptySelection){n=!0;var r=this.selection.getAllRanges();for(var i=0;i<r.length;i++){var s=r[i];if(i&&r[i-1].start.row==s.start.row)continue;e+=this.session.getLine(s.start.row)+t;}}var o={text:e};return this._signal("copy",o),w.lineMode=n?o.text:!1,o.text},this.onCopy=function(){this.commands.exec("copy",this);},this.onCut=function(){this.commands.exec("cut",this);},this.onPaste=function(e,t){var n={text:e,event:t};this.commands.exec("paste",this,n);},this.$handlePaste=function(e){typeof e=="string"&&(e={text:e}),this._signal("paste",e);var t=e.text,n=t===w.lineMode,r=this.session;if(!this.inMultiSelectMode||this.inVirtualSelectionMode)n?r.insert({row:this.selection.lead.row,column:0},t):this.insert(t);else if(n)this.selection.rangeList.ranges.forEach(function(e){r.insert({row:e.start.row,column:0},t);});else {var i=t.split(/\r\n|\r|\n/),s=this.selection.rangeList.ranges,o=i.length==2&&(!i[0]||!i[1]);if(i.length!=s.length||o)return this.commands.exec("insertstring",this,t);for(var u=s.length;u--;){var a=s[u];a.isEmpty()||r.remove(a),r.insert(a.start,i[u]);}}},this.execCommand=function(e,t){return this.commands.exec(e,this,t)},this.insert=function(e,t){var n=this.session,r=n.getMode(),i=this.getCursorPosition();if(this.getBehavioursEnabled()&&!t){var s=r.transformAction(n.getState(i.row),"insertion",this,n,e);s&&(e!==s.text&&(this.inVirtualSelectionMode||(this.session.mergeUndoDeltas=!1,this.mergeNextCommand=!1)),e=s.text);}e=="	"&&(e=this.session.getTabString());if(!this.selection.isEmpty()){var o=this.getSelectionRange();i=this.session.remove(o),this.clearSelection();}else if(this.session.getOverwrite()&&e.indexOf("\n")==-1){var o=new d.fromPoints(i,i);o.end.column+=e.length,this.session.remove(o);}if(e=="\n"||e=="\r\n"){var u=n.getLine(i.row);if(i.column>u.search(/\S|$/)){var a=u.substr(i.column).search(/\S|$/);n.doc.removeInLine(i.row,i.column,i.column+a);}}this.clearSelection();var f=i.column,l=n.getState(i.row),u=n.getLine(i.row),c=r.checkOutdent(l,u,e);n.insert(i,e),s&&s.selection&&(s.selection.length==2?this.selection.setSelectionRange(new d(i.row,f+s.selection[0],i.row,f+s.selection[1])):this.selection.setSelectionRange(new d(i.row+s.selection[0],s.selection[1],i.row+s.selection[2],s.selection[3])));if(this.$enableAutoIndent){if(n.getDocument().isNewLine(e)){var h=r.getNextLineIndent(l,u.slice(0,i.column),n.getTabString());n.insert({row:i.row+1,column:0},h);}c&&r.autoOutdent(l,n,i.row);}},this.autoIndent=function(){var e=this.session,t=e.getMode(),n,r;if(this.selection.isEmpty())n=0,r=e.doc.getLength()-1;else {var i=this.getSelectionRange();n=i.start.row,r=i.end.row;}var s="",o="",u="",a,f,l,c=e.getTabString();for(var h=n;h<=r;h++)h>0&&(s=e.getState(h-1),o=e.getLine(h-1),u=t.getNextLineIndent(s,o,c)),a=e.getLine(h),f=t.$getIndent(a),u!==f&&(f.length>0&&(l=new d(h,0,h,f.length),e.remove(l)),u.length>0&&e.insert({row:h,column:0},u)),t.autoOutdent(s,e,h);},this.onTextInput=function(e,t){if(!t)return this.keyBinding.onTextInput(e);this.startOperation({command:{name:"insertstring"}});var n=this.applyComposition.bind(this,e,t);this.selection.rangeCount?this.forEachSelection(n):n(),this.endOperation();},this.applyComposition=function(e,t){if(t.extendLeft||t.extendRight){var n=this.selection.getRange();n.start.column-=t.extendLeft,n.end.column+=t.extendRight,n.start.column<0&&(n.start.row--,n.start.column+=this.session.getLine(n.start.row).length+1),this.selection.setRange(n),!e&&!n.isEmpty()&&this.remove();}(e||!this.selection.isEmpty())&&this.insert(e,!0);if(t.restoreStart||t.restoreEnd){var n=this.selection.getRange();n.start.column-=t.restoreStart,n.end.column-=t.restoreEnd,this.selection.setRange(n);}},this.onCommandKey=function(e,t,n){return this.keyBinding.onCommandKey(e,t,n)},this.setOverwrite=function(e){this.session.setOverwrite(e);},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite();},this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e);},this.getScrollSpeed=function(){return this.getOption("scrollSpeed")},this.setDragDelay=function(e){this.setOption("dragDelay",e);},this.getDragDelay=function(){return this.getOption("dragDelay")},this.setSelectionStyle=function(e){this.setOption("selectionStyle",e);},this.getSelectionStyle=function(){return this.getOption("selectionStyle")},this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e);},this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e);},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e);},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e);},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e);},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e);},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setHighlightIndentGuides=function(e){this.renderer.setHighlightIndentGuides(e);},this.getHighlightIndentGuides=function(){return this.renderer.getHighlightIndentGuides()},this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e);},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e);},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.setReadOnly=function(e){this.setOption("readOnly",e);},this.getReadOnly=function(){return this.getOption("readOnly")},this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e);},this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e);},this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e);},this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e);},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.remove=function(e){this.selection.isEmpty()&&(e=="left"?this.selection.selectLeft():this.selection.selectRight());var t=this.getSelectionRange();if(this.getBehavioursEnabled()){var n=this.session,r=n.getState(t.start.row),i=n.getMode().transformAction(r,"deletion",this,n,t);if(t.end.column===0){var s=n.getTextRange(t);if(s[s.length-1]=="\n"){var o=n.getLine(t.end.row);/^\s+$/.test(o)&&(t.end.column=o.length);}}i&&(t=i);}this.session.remove(t),this.clearSelection();},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection();},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection();},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.selection.isEmpty()&&this.selection.selectLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection();},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd();var e=this.getSelectionRange();e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection();},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection());var e=this.getCursorPosition();this.insert("\n"),this.moveCursorToPosition(e);},this.transposeLetters=function(){if(!this.selection.isEmpty())return;var e=this.getCursorPosition(),t=e.column;if(t===0)return;var n=this.session.getLine(e.row),r,i;t<n.length?(r=n.charAt(t)+n.charAt(t-1),i=new d(e.row,t-1,e.row,t+1)):(r=n.charAt(t-1)+n.charAt(t-2),i=new d(e.row,t-2,e.row,t)),this.session.replace(i,r),this.session.selection.moveToPosition(i.end);},this.toLowerCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toLowerCase()),this.selection.setSelectionRange(e);},this.toUpperCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toUpperCase()),this.selection.setSelectionRange(e);},this.indent=function(){var e=this.session,t=this.getSelectionRange();if(t.start.row<t.end.row){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}if(t.start.column<t.end.column){var r=e.getTextRange(t);if(!/^\s+$/.test(r)){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}}var i=e.getLine(t.start.row),s=t.start,u=e.getTabSize(),a=e.documentToScreenColumn(s.row,s.column);if(this.session.getUseSoftTabs())var f=u-a%u,l=o.stringRepeat(" ",f);else {var f=a%u;while(i[t.start.column-1]==" "&&f)t.start.column--,f--;this.selection.setSelectionRange(t),l="	";}return this.insert(l)},this.blockIndent=function(){var e=this.$getSelectedRows();this.session.indentRows(e.first,e.last,"	");},this.blockOutdent=function(){var e=this.session.getSelection();this.session.outdentRows(e.getRange());},this.sortLines=function(){var e=this.$getSelectedRows(),t=this.session,n=[];for(var r=e.first;r<=e.last;r++)n.push(t.getLine(r));n.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0});var i=new d(0,0,0,0);for(var r=e.first;r<=e.last;r++){var s=t.getLine(r);i.start.row=r,i.end.row=r,i.end.column=s.length,t.replace(i,n[r-e.first]);}},this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows();this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last);},this.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),n=this.getSelectionRange();this.session.getMode().toggleBlockComment(t,this.session,n,e);},this.getNumberAt=function(e,t){var n=/[\-]?[0-9]+(?:\.[0-9]+)?/g;n.lastIndex=0;var r=this.session.getLine(e);while(n.lastIndex<t){var i=n.exec(r);if(i.index<=t&&i.index+i[0].length>=t){var s={value:i[0],start:i.index,end:i.index+i[0].length};return s}}return null},this.modifyNumber=function(e){var t=this.selection.getCursor().row,n=this.selection.getCursor().column,r=new d(t,n-1,t,n),i=this.session.getTextRange(r);if(!isNaN(parseFloat(i))&&isFinite(i)){var s=this.getNumberAt(t,n);if(s){var o=s.value.indexOf(".")>=0?s.start+s.value.indexOf(".")+1:s.end,u=s.start+s.value.length-o,a=parseFloat(s.value);a*=Math.pow(10,u),o!==s.end&&n<o?e*=Math.pow(10,s.end-n-1):e*=Math.pow(10,s.end-n),a+=e,a/=Math.pow(10,u);var f=a.toFixed(u),l=new d(t,s.start,t,s.end);this.session.replace(l,f),this.moveCursorTo(t,Math.max(s.start+1,n+f.length-s.value.length));}}else this.toggleWord();},this.$toggleWordPairs=[["first","last"],["true","false"],["yes","no"],["width","height"],["top","bottom"],["right","left"],["on","off"],["x","y"],["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["in","out"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"],["&&","||"],["==","!="]],this.toggleWord=function(){var e=this.selection.getCursor().row,t=this.selection.getCursor().column;this.selection.selectWord();var n=this.getSelectedText(),r=this.selection.getWordRange().start.column,i=n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g,"$1 ").split(/\s/),s=t-r-1;s<0&&(s=0);var u=0,a=0,f=this;n.match(/[A-Za-z0-9_]+/)&&i.forEach(function(t,i){a=u+t.length,s>=u&&s<=a&&(n=t,f.selection.clearSelection(),f.moveCursorTo(e,u+r),f.selection.selectTo(e,a+r)),u=a;});var l=this.$toggleWordPairs,c;for(var h=0;h<l.length;h++){var p=l[h];for(var d=0;d<=1;d++){var v=+!d,m=n.match(new RegExp("^\\s?_?("+o.escapeRegExp(p[d])+")\\s?$","i"));if(m){var g=n.match(new RegExp("([_]|^|\\s)("+o.escapeRegExp(m[1])+")($|\\s)","g"));g&&(c=n.replace(new RegExp(o.escapeRegExp(p[d]),"i"),function(e){var t=p[v];return e.toUpperCase()==e?t=t.toUpperCase():e.charAt(0).toUpperCase()==e.charAt(0)&&(t=t.substr(0,0)+p[v].charAt(0).toUpperCase()+t.substr(1)),t}),this.insert(c),c="");}}}},this.findLinkAt=function(e,t){var n,i,s=this.session.getLine(e),o=s.split(/((?:https?|ftp):\/\/[\S]+)/),u=t;u<0&&(u=0);var a=0,f=0,l;try{for(var c=r(o),h=c.next();!h.done;h=c.next()){var p=h.value;f=a+p.length;if(u>=a&&u<=f&&p.match(/((?:https?|ftp):\/\/[\S]+)/)){l=p.replace(/[\s:.,'";}\]]+$/,"");break}a=f;}}catch(d){n={error:d};}finally{try{h&&!h.done&&(i=c.return)&&i.call(c);}finally{if(n)throw n.error}}return l},this.openLink=function(){var e=this.selection.getCursor(),t=this.findLinkAt(e.row,e.column);return t&&window.open(t,"_blank"),t!=null},this.removeLines=function(){var e=this.$getSelectedRows();this.session.removeFullLines(e.first,e.last),this.clearSelection();},this.duplicateSelection=function(){var e=this.selection,t=this.session,n=e.getRange(),r=e.isBackwards();if(n.isEmpty()){var i=n.start.row;t.duplicateLines(i,i);}else {var s=r?n.start:n.end,o=t.insert(s,t.getTextRange(n),!1);n.start=s,n.end=o,e.setSelectionRange(n,r);}},this.moveLinesDown=function(){this.$moveLines(1,!1);},this.moveLinesUp=function(){this.$moveLines(-1,!1);},this.moveText=function(e,t,n){return this.session.moveText(e,t,n)},this.copyLinesUp=function(){this.$moveLines(-1,!0);},this.copyLinesDown=function(){this.$moveLines(1,!0);},this.$moveLines=function(e,t){var n,r,i=this.selection;if(!i.inMultiSelectMode||this.inVirtualSelectionMode){var s=i.toOrientedRange();n=this.$getSelectedRows(s),r=this.session.$moveLines(n.first,n.last,t?0:e),t&&e==-1&&(r=0),s.moveBy(r,0),i.fromOrientedRange(s);}else {var o=i.rangeList.ranges;i.rangeList.detach(this.session),this.inVirtualSelectionMode=!0;var u=0,a=0,f=o.length;for(var l=0;l<f;l++){var c=l;o[l].moveBy(u,0),n=this.$getSelectedRows(o[l]);var h=n.first,p=n.last;while(++l<f){a&&o[l].moveBy(a,0);var d=this.$getSelectedRows(o[l]);if(t&&d.first!=p)break;if(!t&&d.first>p+1)break;p=d.last;}l--,u=this.session.$moveLines(h,p,t?0:e),t&&e==-1&&(c=l+1);while(c<=l)o[c].moveBy(u,0),c++;t||(u=0),a+=u;}i.fromOrientedRange(i.ranges[0]),i.rangeList.attach(this.session),this.inVirtualSelectionMode=!1;}},this.$getSelectedRows=function(e){return e=(e||this.getSelectionRange()).collapseRows(),{first:this.session.getRowFoldStart(e.start.row),last:this.session.getRowFoldEnd(e.end.row)}},this.onCompositionStart=function(e){this.renderer.showComposition(e);},this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e);},this.onCompositionEnd=function(){this.renderer.hideComposition();},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(e,t){var n=this.renderer,r=this.renderer.layerConfig,i=e*Math.floor(r.height/r.lineHeight);t===!0?this.selection.$moveSelection(function(){this.moveCursorBy(i,0);}):t===!1&&(this.selection.moveCursorBy(i,0),this.selection.clearSelection());var s=n.scrollTop;n.scrollBy(0,i*r.lineHeight),t!=null&&n.scrollCursorIntoView(null,.5),n.animateScrolling(s);},this.selectPageDown=function(){this.$moveByPage(1,!0);},this.selectPageUp=function(){this.$moveByPage(-1,!0);},this.gotoPageDown=function(){this.$moveByPage(1,!1);},this.gotoPageUp=function(){this.$moveByPage(-1,!1);},this.scrollPageDown=function(){this.$moveByPage(1);},this.scrollPageUp=function(){this.$moveByPage(-1);},this.scrollToRow=function(e){this.renderer.scrollToRow(e);},this.scrollToLine=function(e,t,n,r){this.renderer.scrollToLine(e,t,n,r);},this.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)};this.renderer.alignCursor(t,.5);},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.selection.selectAll();},this.clearSelection=function(){this.selection.clearSelection();},this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t);},this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e);},this.jumpToMatching=function(e,t){var n=this.getCursorPosition(),r=new b(this.session,n.row,n.column),i=r.getCurrentToken(),s=0;i&&i.type.indexOf("tag-name")!==-1&&(i=r.stepBackward());var o=i||r.stepForward();if(!o)return;var u,a=!1,f={},l=n.column-o.start,c,h={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"};do{if(o.value.match(/[{}()\[\]]/g))for(;l<o.value.length&&!a;l++){if(!h[o.value[l]])continue;c=h[o.value[l]]+"."+o.type.replace("rparen","lparen"),isNaN(f[c])&&(f[c]=0);switch(o.value[l]){case"(":case"[":case"{":f[c]++;break;case")":case"]":case"}":f[c]--,f[c]===-1&&(u="bracket",a=!0);}}else o.type.indexOf("tag-name")!==-1&&(isNaN(f[o.value])&&(f[o.value]=0),i.value==="<"&&s>1?f[o.value]++:i.value==="</"&&f[o.value]--,f[o.value]===-1&&(u="tag",a=!0));a||(i=o,s++,o=r.stepForward(),l=0);}while(o&&!a);if(!u)return;var p,v;if(u==="bracket"){p=this.session.getBracketRange(n);if(!p){p=new d(r.getCurrentTokenRow(),r.getCurrentTokenColumn()+l-1,r.getCurrentTokenRow(),r.getCurrentTokenColumn()+l-1),v=p.start;if(t||v.row===n.row&&Math.abs(v.column-n.column)<2)p=this.session.getBracketRange(v);}}else if(u==="tag"){if(!o||o.type.indexOf("tag-name")===-1)return;p=new d(r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2,r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2);if(p.compare(n.row,n.column)===0){var m=this.session.getMatchingTags(n);m&&(m.openTag.contains(n.row,n.column)?(p=m.closeTag,v=p.start):(p=m.openTag,m.closeTag.start.row===n.row&&m.closeTag.start.column===n.column?v=p.end:v=p.start));}v=v||p.start;}v=p&&p.cursor||v,v&&(e?p&&t?this.selection.setRange(p):p&&p.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(v.row,v.column):this.selection.moveTo(v.row,v.column));},this.gotoLine=function(e,t,n){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,n);},this.navigateTo=function(e,t){this.selection.moveTo(e,t);},this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(-e||-1,0);},this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(e||1,0);},this.navigateLeft=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().start;this.moveCursorToPosition(t);}else {e=e||1;while(e--)this.selection.moveCursorLeft();}this.clearSelection();},this.navigateRight=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().end;this.moveCursorToPosition(t);}else {e=e||1;while(e--)this.selection.moveCursorRight();}this.clearSelection();},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection();},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection();},this.navigateFileEnd=function(){this.selection.moveCursorFileEnd(),this.clearSelection();},this.navigateFileStart=function(){this.selection.moveCursorFileStart(),this.clearSelection();},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection();},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection();},this.replace=function(e,t){t&&this.$search.set(t);var n=this.$search.find(this.session),r=0;return n?(this.$tryReplace(n,e)&&(r=1),this.selection.setSelectionRange(n),this.renderer.scrollSelectionIntoView(n.start,n.end),r):r},this.replaceAll=function(e,t){t&&this.$search.set(t);var n=this.$search.findAll(this.session),r=0;if(!n.length)return r;var i=this.getSelectionRange();this.selection.moveTo(0,0);for(var s=n.length-1;s>=0;--s)this.$tryReplace(n[s],e)&&r++;return this.selection.setSelectionRange(i),r},this.$tryReplace=function(e,t){var n=this.session.getTextRange(e);return t=this.$search.replace(n,t),t!==null?(e.end=this.session.replace(e,t),e):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(e,t,n){t||(t={}),typeof e=="string"||e instanceof RegExp?t.needle=e:typeof e=="object"&&i.mixin(t,e);var r=this.selection.getRange();t.needle==null&&(e=this.session.getTextRange(r)||this.$search.$options.needle,e||(r=this.session.getWordRange(r.start.row,r.start.column),e=this.session.getTextRange(r)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:r});var s=this.$search.find(this.session);if(t.preventScroll)return s;if(s)return this.revealRange(s,n),s;t.backwards?r.start=r.end:r.end=r.start,this.selection.setRange(r);},this.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t);},this.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t);},this.revealRange=function(e,t){this.session.unfold(e),this.selection.setSelectionRange(e);var n=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(e.start,e.end,.5),t!==!1&&this.renderer.animateScrolling(n);},this.undo=function(){this.session.getUndoManager().undo(this.session),this.renderer.scrollCursorIntoView(null,.5);},this.redo=function(){this.session.getUndoManager().redo(this.session),this.renderer.scrollCursorIntoView(null,.5);},this.destroy=function(){this.$toDestroy&&(this.$toDestroy.forEach(function(e){e.destroy();}),this.$toDestroy=null),this.$mouseHandler&&this.$mouseHandler.destroy(),this.renderer.destroy(),this._signal("destroy",this),this.session&&this.session.destroy(),this._$emitInputEvent&&this._$emitInputEvent.cancel(),this.removeAllListeners();},this.setAutoScrollEditorIntoView=function(e){if(!e)return;var t,n=this,r=!1;this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"));var i=this.$scrollAnchor;i.style.cssText="position:absolute",this.container.insertBefore(i,this.container.firstChild);var s=this.on("changeSelection",function(){r=!0;}),o=this.renderer.on("beforeRender",function(){r&&(t=n.renderer.container.getBoundingClientRect());}),u=this.renderer.on("afterRender",function(){if(r&&t&&(n.isFocused()||n.searchBox&&n.searchBox.isFocused())){var e=n.renderer,s=e.$cursorLayer.$pixelPos,o=e.layerConfig,u=s.top-o.offset;s.top>=0&&u+t.top<0?r=!0:s.top<o.height&&s.top+t.top+o.lineHeight>window.innerHeight?r=!1:r=null,r!=null&&(i.style.top=u+"px",i.style.left=s.left+"px",i.style.height=o.lineHeight+"px",i.scrollIntoView(r)),r=t=null;}});this.setAutoScrollEditorIntoView=function(e){if(e)return;delete this.setAutoScrollEditorIntoView,this.off("changeSelection",s),this.renderer.off("afterRender",u),this.renderer.off("beforeRender",o);};},this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer;if(!t)return;t.setSmoothBlinking(/smooth/.test(e)),t.isBlinking=!this.$readOnly&&e!="wide",s.setCssClass(t.element,"ace_slim-cursors",/slim/.test(e));},this.prompt=function(e,t,n){var r=this;y.loadModule("./ext/prompt",function(i){i.prompt(r,e,t,n);});};}.call(E.prototype),y.defineOptions(E.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._signal("changeSelectionStyle",{data:e});},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine();},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange();},initialValue:!0},readOnly:{set:function(e){this.textInput.setReadOnly(e),this.$resetCursorStyle();},initialValue:!1},copyWithEmptySelection:{set:function(e){this.textInput.setCopyWithEmptySelection(e);},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle();},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[!1,!0,"always"],initialValue:!0},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},enableAutoIndent:{initialValue:!0},autoScrollEditorIntoView:{set:function(e){this.setAutoScrollEditorIntoView(e);}},keyboardHandler:{set:function(e){this.setKeyboardHandler(e);},get:function(){return this.$keybindingId},handlesSet:!0},value:{set:function(e){this.session.setValue(e);},get:function(){return this.getValue()},handlesSet:!0,hidden:!0},session:{set:function(e){this.setSession(e);},get:function(){return this.session},handlesSet:!0,hidden:!0},showLineNumbers:{set:function(e){this.renderer.$gutterLayer.setShowLineNumbers(e),this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),e&&this.$relativeLineNumbers?S.attach(this):S.detach(this);},initialValue:!0},relativeLineNumbers:{set:function(e){this.$showLineNumbers&&e?S.attach(this):S.detach(this);}},placeholder:{set:function(e){this.$updatePlaceholder||(this.$updatePlaceholder=function(){var e=this.session&&(this.renderer.$composition||this.getValue());if(e&&this.renderer.placeholderNode)this.renderer.off("afterRender",this.$updatePlaceholder),s.removeCssClass(this.container,"ace_hasPlaceholder"),this.renderer.placeholderNode.remove(),this.renderer.placeholderNode=null;else if(!e&&!this.renderer.placeholderNode){this.renderer.on("afterRender",this.$updatePlaceholder),s.addCssClass(this.container,"ace_hasPlaceholder");var t=s.createElement("div");t.className="ace_placeholder",t.textContent=this.$placeholder||"",this.renderer.placeholderNode=t,this.renderer.content.appendChild(this.renderer.placeholderNode);}else !e&&this.renderer.placeholderNode&&(this.renderer.placeholderNode.textContent=this.$placeholder||"");}.bind(this),this.on("input",this.$updatePlaceholder)),this.$updatePlaceholder();}},customScrollbar:"renderer",hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",displayIndentGuides:"renderer",highlightIndentGuides:"renderer",showGutter:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",hasCssTransforms:"renderer",maxPixelHeight:"renderer",useTextareaForIME:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimeout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",navigateWithinSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"});var S={getText:function(e,t){return (Math.abs(e.selection.lead.row-t)||t+1+(t<9?"\u00b7":""))+""},getWidth:function(e,t,n){return Math.max(t.toString().length,(n.lastRow+1).toString().length,2)*n.characterWidth},update:function(e,t){t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER);},attach:function(e){e.renderer.$gutterLayer.$renderer=this,e.on("changeSelection",this.update),this.update(null,e);},detach:function(e){e.renderer.$gutterLayer.$renderer==this&&(e.renderer.$gutterLayer.$renderer=null),e.off("changeSelection",this.update),this.update(null,e);}};t.Editor=E;}),ace.define("ace/undomanager",["require","exports","module","ace/range"],function(e,t,n){function i(e,t){for(var n=t;n--;){var r=e[n];if(r&&!r[0].ignore){while(n<t-1){var i=d(e[n],e[n+1]);e[n]=i[0],e[n+1]=i[1],n++;}return !0}}}function f(e){return {row:e.row,column:e.column}}function l(e){return {start:f(e.start),end:f(e.end),action:e.action,lines:e.lines.slice()}}function c(e){e=e||this;if(Array.isArray(e))return e.map(c).join("\n");var t="";e.action?(t=e.action=="insert"?"+":"-",t+="["+e.lines+"]"):e.value&&(Array.isArray(e.value)?t=e.value.map(h).join("\n"):t=h(e.value)),e.start&&(t+=h(e));if(e.id||e.rev)t+="	("+(e.id||e.rev)+")";return t}function h(e){return e.start.row+":"+e.start.column+"=>"+e.end.row+":"+e.end.column}function p(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)if(o(t.start,e.end)>=0)m(t,e,-1);else {if(!(o(t.start,e.start)<=0))return null;m(e,t,1);}else if(n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else {if(!(o(t.end,e.start)<=0))return null;m(e,t,-1);}else if(!n&&r)if(o(t.start,e.start)>=0)m(t,e,1);else {if(!(o(t.start,e.start)<=0))return null;m(e,t,1);}else if(!n&&!r)if(o(t.start,e.start)>=0)m(t,e,1);else {if(!(o(t.end,e.start)<=0))return null;m(e,t,-1);}return [t,e]}function d(e,t){for(var n=e.length;n--;)for(var r=0;r<t.length;r++)if(!p(e[n],t[r])){while(n<e.length){while(r--)p(t[r],e[n]);r=t.length,n++;}return [e,t]}return e.selectionBefore=t.selectionBefore=e.selectionAfter=t.selectionAfter=null,[t,e]}function v(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)o(e.start,t.start)<0?m(t,e,1):m(e,t,1);else if(n&&!r)o(e.start,t.end)>=0?m(e,t,-1):o(e.start,t.start)<=0?m(t,e,1):(m(e,s.fromPoints(t.start,e.start),-1),m(t,e,1));else if(!n&&r)o(t.start,e.end)>=0?m(t,e,-1):o(t.start,e.start)<=0?m(e,t,1):(m(t,s.fromPoints(e.start,t.start),-1),m(e,t,1));else if(!n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else {if(!(o(t.end,e.start)<=0)){var i,u;return o(e.start,t.start)<0&&(i=e,e=y(e,t.start)),o(e.end,t.end)>0&&(u=y(e,t.end)),g(t.end,e.start,e.end,-1),u&&!i&&(e.lines=u.lines,e.start=u.start,e.end=u.end,u=e),[t,i,u].filter(Boolean)}m(e,t,-1);}return [t,e]}function m(e,t,n){g(e.start,t.start,t.end,n),g(e.end,t.start,t.end,n);}function g(e,t,n,r){e.row==(r==1?t:n).row&&(e.column+=r*(n.column-t.column)),e.row+=r*(n.row-t.row);}function y(e,t){var n=e.lines,r=e.end;e.end=f(t);var i=e.end.row-e.start.row,s=n.splice(i,n.length),o=i?t.column:t.column-e.start.column;n.push(s[0].substring(0,o)),s[0]=s[0].substr(o);var u={start:f(t),end:r,lines:s,action:e.action};return u}function b(e,t){t=l(t);for(var n=e.length;n--;){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i],o=v(s,t);t=o[0],o.length!=2&&(o[2]?(r.splice(i+1,1,o[1],o[2]),i++):o[1]||(r.splice(i,1),i--));}r.length||e.splice(n,1);}return e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];for(var i=0;i<r.length;i++)b(e,r[i]);}}var r=function(){this.$maxRev=0,this.$fromUndo=!1,this.$undoDepth=Infinity,this.reset();};(function(){this.addSession=function(e){this.$session=e;},this.add=function(e,t,n){if(this.$fromUndo)return;if(e==this.$lastDelta)return;this.$keepRedoStack||(this.$redoStack.length=0);if(t===!1||!this.lastDeltas){this.lastDeltas=[];var r=this.$undoStack.length;r>this.$undoDepth-1&&this.$undoStack.splice(0,r-this.$undoDepth+1),this.$undoStack.push(this.lastDeltas),e.id=this.$rev=++this.$maxRev;}if(e.action=="remove"||e.action=="insert")this.$lastDelta=e;this.lastDeltas.push(e);},this.addSelection=function(e,t){this.selections.push({value:e,rev:t||this.$rev});},this.startNewGroup=function(){return this.lastDeltas=null,this.$rev},this.markIgnored=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack;for(var r=n.length;r--;){var i=n[r][0];if(i.id<=e)break;i.id<t&&(i.ignore=!0);}this.lastDeltas=null;},this.getSelection=function(e,t){var n=this.selections;for(var r=n.length;r--;){var i=n[r];if(i.rev<e)return t&&(i=n[r+1]),i}},this.getRevision=function(){return this.$rev},this.getDeltas=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack,r=null,i=0;for(var s=n.length;s--;){var o=n[s][0];o.id<t&&!r&&(r=s+1);if(o.id<=e){i=s+1;break}}return n.slice(i,r)},this.getChangedRanges=function(e,t){t==null&&(t=this.$rev+1);},this.getChangedLines=function(e,t){t==null&&(t=this.$rev+1);},this.undo=function(e,t){this.lastDeltas=null;var n=this.$undoStack;if(!i(n,n.length))return;e||(e=this.$session),this.$redoStackBaseRev!==this.$rev&&this.$redoStack.length&&(this.$redoStack=[]),this.$fromUndo=!0;var r=n.pop(),s=null;return r&&(s=e.undoChanges(r,t),this.$redoStack.push(r),this.$syncRev()),this.$fromUndo=!1,s},this.redo=function(e,t){this.lastDeltas=null,e||(e=this.$session),this.$fromUndo=!0;if(this.$redoStackBaseRev!=this.$rev){var n=this.getDeltas(this.$redoStackBaseRev,this.$rev+1);w(this.$redoStack,n),this.$redoStackBaseRev=this.$rev,this.$redoStack.forEach(function(e){e[0].id=++this.$maxRev;},this);}var r=this.$redoStack.pop(),i=null;return r&&(i=e.redoChanges(r,t),this.$undoStack.push(r),this.$syncRev()),this.$fromUndo=!1,i},this.$syncRev=function(){var e=this.$undoStack,t=e[e.length-1],n=t&&t[0].id||0;this.$redoStackBaseRev=n,this.$rev=n;},this.reset=function(){this.lastDeltas=null,this.$lastDelta=null,this.$undoStack=[],this.$redoStack=[],this.$rev=0,this.mark=0,this.$redoStackBaseRev=this.$rev,this.selections=[];},this.canUndo=function(){return this.$undoStack.length>0},this.canRedo=function(){return this.$redoStack.length>0},this.bookmark=function(e){e==undefined&&(e=this.$rev),this.mark=e;},this.isAtBookmark=function(){return this.$rev===this.mark},this.toJSON=function(){},this.fromJSON=function(){},this.hasUndo=this.canUndo,this.hasRedo=this.canRedo,this.isClean=this.isAtBookmark,this.markClean=this.bookmark,this.$prettyPrint=function(e){return e?c(e):c(this.$undoStack)+"\n---\n"+c(this.$redoStack)};}).call(r.prototype);var s=e("./range").Range,o=s.comparePoints;s.comparePoints;t.UndoManager=r;}),ace.define("ace/layer/lines",["require","exports","module","ace/lib/dom"],function(e,t,n){var r=e("../lib/dom"),i=function(e,t){this.element=e,this.canvasHeight=t||5e5,this.element.style.height=this.canvasHeight*2+"px",this.cells=[],this.cellCache=[],this.$offsetCoefficient=0;};((function(){this.moveContainer=function(e){r.translate(this.element,0,-(e.firstRowScreen*e.lineHeight%this.canvasHeight)-e.offset*this.$offsetCoefficient);},this.pageChanged=function(e,t){return Math.floor(e.firstRowScreen*e.lineHeight/this.canvasHeight)!==Math.floor(t.firstRowScreen*t.lineHeight/this.canvasHeight)},this.computeLineTop=function(e,t,n){var r=t.firstRowScreen*t.lineHeight,i=Math.floor(r/this.canvasHeight),s=n.documentToScreenRow(e,0)*t.lineHeight;return s-i*this.canvasHeight},this.computeLineHeight=function(e,t,n){return t.lineHeight*n.getRowLineCount(e)},this.getLength=function(){return this.cells.length},this.get=function(e){return this.cells[e]},this.shift=function(){this.$cacheCell(this.cells.shift());},this.pop=function(){this.$cacheCell(this.cells.pop());},this.push=function(e){if(Array.isArray(e)){this.cells.push.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.appendChild(t);}else this.cells.push(e),this.element.appendChild(e.element);},this.unshift=function(e){if(Array.isArray(e)){this.cells.unshift.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.firstChild?this.element.insertBefore(t,this.element.firstChild):this.element.appendChild(t);}else this.cells.unshift(e),this.element.insertAdjacentElement("afterbegin",e.element);},this.last=function(){return this.cells.length?this.cells[this.cells.length-1]:null},this.$cacheCell=function(e){if(!e)return;e.element.remove(),this.cellCache.push(e);},this.createCell=function(e,t,n,i){var s=this.cellCache.pop();if(!s){var o=r.createElement("div");i&&i(o),this.element.appendChild(o),s={element:o,text:"",row:e};}return s.row=e,s};})).call(i.prototype),t.Lines=i;}),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/layer/lines"],function(e,t,n){function f(e){var t=document.createTextNode("");e.appendChild(t);var n=r.createElement("span");return e.appendChild(n),e}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/lang"),o=e("../lib/event_emitter").EventEmitter,u=e("./lines").Lines,a=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this),this.$lines=new u(this.element),this.$lines.$offsetCoefficient=1;};((function(){i.implement(this,o),this.setSession=function(e){this.session&&this.session.off("change",this.$updateAnnotations),this.session=e,e&&e.on("change",this.$updateAnnotations);},this.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t);},this.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t);},this.setAnnotations=function(e){this.$annotations=[];for(var t=0;t<e.length;t++){var n=e[t],r=n.row,i=this.$annotations[r];i||(i=this.$annotations[r]={text:[]});var o=n.text;o=o?s.escapeHTML(o):n.html||"",i.text.indexOf(o)===-1&&i.text.push(o);var u=n.type,a=n.className;a?i.className=a:u=="error"?i.className=" ace_error":u=="warning"&&i.className!=" ace_error"?i.className=" ace_warning":u=="info"&&!i.className&&(i.className=" ace_info");}},this.$updateAnnotations=function(e){if(!this.$annotations.length)return;var t=e.start.row,n=e.end.row-t;if(n!==0)if(e.action=="remove")this.$annotations.splice(t,n+1,null);else {var r=new Array(n+1);r.unshift(t,1),this.$annotations.splice.apply(this.$annotations,r);}},this.update=function(e){this.config=e;var t=this.session,n=e.firstRow,r=Math.min(e.lastRow+e.gutterOffset,t.getLength()-1);this.oldLastRow=r,this.config=e,this.$lines.moveContainer(e),this.$updateCursorRow();var i=t.getNextFoldLine(n),s=i?i.start.row:Infinity,o=null,u=-1,a=n;for(;;){a>s&&(a=i.end.row+1,i=t.getNextFoldLine(a,i),s=i?i.start.row:Infinity);if(a>r){while(this.$lines.getLength()>u+1)this.$lines.pop();break}o=this.$lines.get(++u),o?o.row=a:(o=this.$lines.createCell(a,e,this.session,f),this.$lines.push(o)),this.$renderCell(o,e,i,a),a++;}this._signal("afterRender"),this.$updateGutterWidth(e);},this.$updateGutterWidth=function(e){var t=this.session,n=t.gutterRenderer||this.$renderer,r=t.$firstLineNumber,i=this.$lines.last()?this.$lines.last().text:"";if(this.$fixedWidth||t.$useWrapMode)i=t.getLength()+r-1;var s=n?n.getWidth(t,i,e):i.toString().length*e.characterWidth,o=this.$padding||this.$computePadding();s+=o.left+o.right,s!==this.gutterWidth&&!isNaN(s)&&(this.gutterWidth=s,this.element.parentNode.style.width=this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._signal("changeGutterWidth",s));},this.$updateCursorRow=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.getCursor();if(this.$cursorRow===e.row)return;this.$cursorRow=e.row;},this.updateLineHighlight=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.cursor.row;this.$cursorRow=e;if(this.$cursorCell&&this.$cursorCell.row==e)return;this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ",""));var t=this.$lines.cells;this.$cursorCell=null;for(var n=0;n<t.length;n++){var r=t[n];if(r.row>=this.$cursorRow){if(r.row>this.$cursorRow){var i=this.session.getFoldLine(this.$cursorRow);if(!(n>0&&i&&i.start.row==t[n-1].row))break;r=t[n-1];}r.element.className="ace_gutter-active-line "+r.element.className,this.$cursorCell=r;break}}},this.scrollLines=function(e){var t=this.config;this.config=e,this.$updateCursorRow();if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=Math.min(e.lastRow+e.gutterOffset,this.session.getLength()-1),r=this.oldLastRow;this.oldLastRow=n;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(r>n)for(var i=this.session.getFoldedRowCount(n+1,r);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLines(e,e.firstRow,t.firstRow-1)),n>r&&this.$lines.push(this.$renderLines(e,r+1,n)),this.updateLineHighlight(),this._signal("afterRender"),this.$updateGutterWidth(e);},this.$renderLines=function(e,t,n){var r=[],i=t,s=this.session.getNextFoldLine(i),o=s?s.start.row:Infinity;for(;;){i>o&&(i=s.end.row+1,s=this.session.getNextFoldLine(i,s),o=s?s.start.row:Infinity);if(i>n)break;var u=this.$lines.createCell(i,e,this.session,f);this.$renderCell(u,e,s,i),r.push(u),i++;}return r},this.$renderCell=function(e,t,n,i){var s=e.element,o=this.session,u=s.childNodes[0],a=s.childNodes[1],f=o.$firstLineNumber,l=o.$breakpoints,c=o.$decorations,h=o.gutterRenderer||this.$renderer,p=this.$showFoldWidgets&&o.foldWidgets,d=n?n.start.row:Number.MAX_VALUE,v="ace_gutter-cell ";this.$highlightGutterLine&&(i==this.$cursorRow||n&&i<this.$cursorRow&&i>=d&&this.$cursorRow<=n.end.row)&&(v+="ace_gutter-active-line ",this.$cursorCell!=e&&(this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ","")),this.$cursorCell=e)),l[i]&&(v+=l[i]),c[i]&&(v+=c[i]),this.$annotations[i]&&(v+=this.$annotations[i].className),s.className!=v&&(s.className=v);if(p){var m=p[i];m==null&&(m=p[i]=o.getFoldWidget(i));}if(m){var v="ace_fold-widget ace_"+m;m=="start"&&i==d&&i<n.end.row?v+=" ace_closed":v+=" ace_open",a.className!=v&&(a.className=v);var g=t.lineHeight+"px";r.setStyle(a.style,"height",g),r.setStyle(a.style,"display","inline-block");}else a&&r.setStyle(a.style,"display","none");var y=(h?h.getText(o,i):i+f).toString();return y!==u.data&&(u.data=y),r.setStyle(e.element.style,"height",this.$lines.computeLineHeight(i,t,o)+"px"),r.setStyle(e.element.style,"top",this.$lines.computeLineTop(i,t,o)+"px"),e.text=y,e},this.$fixedWidth=!1,this.$highlightGutterLine=!0,this.$renderer="",this.setHighlightGutterLine=function(e){this.$highlightGutterLine=e;},this.$showLineNumbers=!0,this.$renderer="",this.setShowLineNumbers=function(e){this.$renderer=!e&&{getWidth:function(){return 0},getText:function(){return ""}};},this.getShowLineNumbers=function(){return this.$showLineNumbers},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(e){e?r.addCssClass(this.element,"ace_folding-enabled"):r.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null;},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return {left:0,right:0};var e=r.computedStyle(this.element.firstChild);return this.$padding={},this.$padding.left=(parseInt(e.borderLeftWidth)||0)+(parseInt(e.paddingLeft)||0)+1,this.$padding.right=(parseInt(e.borderRightWidth)||0)+(parseInt(e.paddingRight)||0),this.$padding},this.getRegion=function(e){var t=this.$padding||this.$computePadding(),n=this.element.getBoundingClientRect();if(e.x<t.left+n.left)return "markers";if(this.$showFoldWidgets&&e.x>n.right-t.right)return "foldWidgets"};})).call(a.prototype),t.Gutter=a;}),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(e,t,n){var r=e("../range").Range,i=e("../lib/dom"),s=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element);};((function(){function e(e,t,n,r){return (e?1:0)|(t?2:0)|(n?4:0)|(r?8:0)}this.$padding=0,this.setPadding=function(e){this.$padding=e;},this.setSession=function(e){this.session=e;},this.setMarkers=function(e){this.markers=e;},this.elt=function(e,t){var n=this.i!=-1&&this.element.childNodes[this.i];n?this.i++:(n=document.createElement("div"),this.element.appendChild(n),this.i=-1),n.style.cssText=t,n.className=e;},this.update=function(e){if(!e)return;this.config=e,this.i=0;var t;for(var n in this.markers){var r=this.markers[n];if(!r.range){r.update(t,this,this.session,e);continue}var i=r.range.clipRows(e.firstRow,e.lastRow);if(i.isEmpty())continue;i=i.toScreenRange(this.session);if(r.renderer){var s=this.$getTop(i.start.row,e),o=this.$padding+i.start.column*e.characterWidth;r.renderer(t,i,o,s,e);}else r.type=="fullLine"?this.drawFullLineMarker(t,i,r.clazz,e):r.type=="screenLine"?this.drawScreenLineMarker(t,i,r.clazz,e):i.isMultiLine()?r.type=="text"?this.drawTextMarker(t,i,r.clazz,e):this.drawMultiLineMarker(t,i,r.clazz,e):this.drawSingleLineMarker(t,i,r.clazz+" ace_start"+" ace_br15",e);}if(this.i!=-1)while(this.i<this.element.childElementCount)this.element.removeChild(this.element.lastChild);},this.$getTop=function(e,t){return (e-t.firstRowScreen)*t.lineHeight},this.drawTextMarker=function(t,n,i,s,o){var u=this.session,a=n.start.row,f=n.end.row,l=a,c=0,h=0,p=u.getScreenLastRowColumn(l),d=new r(l,n.start.column,l,h);for(;l<=f;l++)d.start.row=d.end.row=l,d.start.column=l==a?n.start.column:u.getRowWrapIndent(l),d.end.column=p,c=h,h=p,p=l+1<f?u.getScreenLastRowColumn(l+1):l==f?0:n.end.column,this.drawSingleLineMarker(t,d,i+(l==a?" ace_start":"")+" ace_br"+e(l==a||l==a+1&&n.start.column,c<h,h>p,l==f),s,l==f?0:1,o);},this.drawMultiLineMarker=function(e,t,n,r,i){var s=this.$padding,o=r.lineHeight,u=this.$getTop(t.start.row,r),a=s+t.start.column*r.characterWidth;i=i||"";if(this.session.$bidiHandler.isBidiRow(t.start.row)){var f=t.clone();f.end.row=f.start.row,f.end.column=this.session.getLine(f.start.row).length,this.drawBidiSingleLineMarker(e,f,n+" ace_br1 ace_start",r,null,i);}else this.elt(n+" ace_br1 ace_start","height:"+o+"px;"+"right:0;"+"top:"+u+"px;left:"+a+"px;"+(i||""));if(this.session.$bidiHandler.isBidiRow(t.end.row)){var f=t.clone();f.start.row=f.end.row,f.start.column=0,this.drawBidiSingleLineMarker(e,f,n+" ace_br12",r,null,i);}else {u=this.$getTop(t.end.row,r);var l=t.end.column*r.characterWidth;this.elt(n+" ace_br12","height:"+o+"px;"+"width:"+l+"px;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""));}o=(t.end.row-t.start.row-1)*r.lineHeight;if(o<=0)return;u=this.$getTop(t.start.row+1,r);var c=(t.start.column?1:0)|(t.end.column?0:8);this.elt(n+(c?" ace_br"+c:""),"height:"+o+"px;"+"right:0;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""));},this.drawSingleLineMarker=function(e,t,n,r,i,s){if(this.session.$bidiHandler.isBidiRow(t.start.row))return this.drawBidiSingleLineMarker(e,t,n,r,i,s);var o=r.lineHeight,u=(t.end.column+(i||0)-t.start.column)*r.characterWidth,a=this.$getTop(t.start.row,r),f=this.$padding+t.start.column*r.characterWidth;this.elt(n,"height:"+o+"px;"+"width:"+u+"px;"+"top:"+a+"px;"+"left:"+f+"px;"+(s||""));},this.drawBidiSingleLineMarker=function(e,t,n,r,i,s){var o=r.lineHeight,u=this.$getTop(t.start.row,r),a=this.$padding,f=this.session.$bidiHandler.getSelections(t.start.column,t.end.column);f.forEach(function(e){this.elt(n,"height:"+o+"px;"+"width:"+e.width+(i||0)+"px;"+"top:"+u+"px;"+"left:"+(a+e.left)+"px;"+(s||""));},this);},this.drawFullLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;t.start.row!=t.end.row&&(o+=this.$getTop(t.end.row,r)-s),this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""));},this.drawScreenLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""));};})).call(s.prototype),t.Marker=s;}),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/layer/lines","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("./lines").Lines,u=e("../lib/event_emitter").EventEmitter,a=function(e){this.dom=i,this.element=this.dom.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$updateEolChar=this.$updateEolChar.bind(this),this.$lines=new o(this.element);};((function(){r.implement(this,u),this.EOF_CHAR="\u00b6",this.EOL_CHAR_LF="\u00ac",this.EOL_CHAR_CRLF="\u00a4",this.EOL_CHAR=this.EOL_CHAR_LF,this.TAB_CHAR="\u2014",this.SPACE_CHAR="\u00b7",this.$padding=0,this.MAX_LINE_LENGTH=1e4,this.MAX_CHUNK_LENGTH=250,this.$updateEolChar=function(){var e=this.session.doc,t=e.getNewLineCharacter()=="\n"&&e.getNewLineMode()!="windows",n=t?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF;if(this.EOL_CHAR!=n)return this.EOL_CHAR=n,!0},this.setPadding=function(e){this.$padding=e,this.element.style.margin="0 "+e+"px";},this.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0},this.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0},this.$setFontMetrics=function(e){this.$fontMetrics=e,this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e);}.bind(this)),this.$pollSizeChanges();},this.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges();},this.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges()},this.setSession=function(e){this.session=e,e&&this.$computeTabString();},this.showInvisibles=!1,this.showSpaces=!1,this.showTabs=!1,this.showEOL=!1,this.setShowInvisibles=function(e){return this.showInvisibles==e?!1:(this.showInvisibles=e,typeof e=="string"?(this.showSpaces=/tab/i.test(e),this.showTabs=/space/i.test(e),this.showEOL=/eol/i.test(e)):this.showSpaces=this.showTabs=this.showEOL=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides==e?!1:(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$highlightIndentGuides=!0,this.setHighlightIndentGuides=function(e){return this.$highlightIndentGuides===e?!1:(this.$highlightIndentGuides=e,e)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize();this.tabSize=e;var t=this.$tabStrings=[0];for(var n=1;n<e+1;n++)if(this.showTabs){var r=this.dom.createElement("span");r.className="ace_invisible ace_invisible_tab",r.textContent=s.stringRepeat(this.TAB_CHAR,n),t.push(r);}else t.push(this.dom.createTextNode(s.stringRepeat(" ",n),this.element));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var i="ace_indent-guide",o=this.showSpaces?" ace_invisible ace_invisible_space":"",u=this.showSpaces?s.stringRepeat(this.SPACE_CHAR,this.tabSize):s.stringRepeat(" ",this.tabSize),a=this.showTabs?" ace_invisible ace_invisible_tab":"",f=this.showTabs?s.stringRepeat(this.TAB_CHAR,this.tabSize):u,r=this.dom.createElement("span");r.className=i+o,r.textContent=u,this.$tabStrings[" "]=r;var r=this.dom.createElement("span");r.className=i+a,r.textContent=f,this.$tabStrings["	"]=r;}},this.updateLines=function(e,t,n){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)return this.update(e);this.config=e;var r=Math.max(t,e.firstRow),i=Math.min(n,e.lastRow),s=this.element.childNodes,o=0;for(var u=e.firstRow;u<r;u++){var a=this.session.getFoldLine(u);if(a){if(a.containsRow(r)){r=a.start.row;break}u=a.end.row;}o++;}var f=!1,u=r,a=this.session.getNextFoldLine(u),l=a?a.start.row:Infinity;for(;;){u>l&&(u=a.end.row+1,a=this.session.getNextFoldLine(u,a),l=a?a.start.row:Infinity);if(u>i)break;var c=s[o++];if(c){this.dom.removeChildren(c),this.$renderLine(c,u,u==l?a:!1),f&&(c.style.top=this.$lines.computeLineTop(u,e,this.session)+"px");var h=e.lineHeight*this.session.getRowLength(u)+"px";c.style.height!=h&&(f=!0,c.style.height=h);}u++;}if(f)while(o<this.$lines.cells.length){var p=this.$lines.cells[o++];p.element.style.top=this.$lines.computeLineTop(p.row,e,this.session)+"px";}},this.scrollLines=function(e){var t=this.config;this.config=e;if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=e.lastRow,r=t?t.lastRow:-1;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(!t||t.lastRow<e.firstRow)return this.update(e);if(e.lastRow<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(t.lastRow>e.lastRow)for(var i=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)),e.lastRow>t.lastRow&&this.$lines.push(this.$renderLinesFragment(e,t.lastRow+1,e.lastRow)),this.$highlightIndentGuide();},this.$renderLinesFragment=function(e,t,n){var r=[],s=t,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>n)break;var a=this.$lines.createCell(s,e,this.session),f=a.element;this.dom.removeChildren(f),i.setStyle(f.style,"height",this.$lines.computeLineHeight(s,e,this.session)+"px"),i.setStyle(f.style,"top",this.$lines.computeLineTop(s,e,this.session)+"px"),this.$renderLine(f,s,s==u?o:!1),this.$useLineGroups()?f.className="ace_line_group":f.className="ace_line",r.push(a),s++;}return r},this.update=function(e){this.$lines.moveContainer(e),this.config=e;var t=e.firstRow,n=e.lastRow,r=this.$lines;while(r.getLength())r.pop();r.push(this.$renderLinesFragment(e,t,n));},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderTokenInChunks=function(e,t,n,r){var i;for(var s=0;s<r.length;s+=this.MAX_CHUNK_LENGTH){var o=r.substring(s,s+this.MAX_CHUNK_LENGTH),u={type:n.type,value:o};i=this.$renderToken(e,t+s,u,o);}return i},this.$renderToken=function(e,t,n,r){var i=this,o=/(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,u=this.dom.createFragment(this.element),a,f=0;while(a=o.exec(r)){var l=a[1],c=a[2],h=a[3],p=a[4],d=a[5];if(!i.showSpaces&&c)continue;var v=f!=a.index?r.slice(f,a.index):"";f=a.index+a[0].length,v&&u.appendChild(this.dom.createTextNode(v,this.element));if(l){var m=i.session.getScreenTabSize(t+a.index);u.appendChild(i.$tabStrings[m].cloneNode(!0)),t+=m-1;}else if(c)if(i.showSpaces){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space",g.textContent=s.stringRepeat(i.SPACE_CHAR,c.length),u.appendChild(g);}else u.appendChild(this.com.createTextNode(c,this.element));else if(h){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space ace_invalid",g.textContent=s.stringRepeat(i.SPACE_CHAR,h.length),u.appendChild(g);}else if(p){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className=i.showSpaces?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk",g.textContent=i.showSpaces?i.SPACE_CHAR:p,u.appendChild(g);}else if(d){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className="ace_cjk",g.textContent=d,u.appendChild(g);}}u.appendChild(this.dom.createTextNode(f?r.slice(f):r,this.element));var g=this.dom.createElement("span");if(!this.$textToken[n.type]){var y="ace_"+n.type.replace(/\./g," ace_");n.type=="fold"&&(g.style.width=n.value.length*this.config.characterWidth+"px"),g.className=y;}return g.appendChild(u),e.appendChild(g),t+r.length},this.renderIndentGuide=function(e,t,n){var r=t.search(this.$indentGuideRe);if(r<=0||r>=n)return t;if(t[0]==" "){r-=r%this.tabSize;var i=r/this.tabSize;for(var s=0;s<i;s++)e.appendChild(this.$tabStrings[" "].cloneNode(!0));return this.$highlightIndentGuide(),t.substr(r)}if(t[0]=="	"){for(var s=0;s<r;s++)e.appendChild(this.$tabStrings["	"].cloneNode(!0));return this.$highlightIndentGuide(),t.substr(r)}return this.$highlightIndentGuide(),t},this.$highlightIndentGuide=function(){if(!this.$highlightIndentGuides||!this.displayIndentGuides)return;this.$highlightIndentGuideMarker={indentLevel:undefined,start:undefined,end:undefined,dir:undefined};var e=this.session.doc.$lines;if(!e)return;var t=this.session.selection.getCursor(),n=/^\s*/.exec(this.session.doc.getLine(t.row))[0].length,r=Math.floor(n/this.tabSize);this.$highlightIndentGuideMarker={indentLevel:r,start:t.row};var i=this.session.$bracketHighlight;if(i){var s=this.session.$bracketHighlight.ranges;for(var o=0;o<s.length;o++)if(t.row!==s[o].start.row){this.$highlightIndentGuideMarker.end=s[o].start.row,t.row>s[o].start.row?this.$highlightIndentGuideMarker.dir=-1:this.$highlightIndentGuideMarker.dir=1;break}}if(!this.$highlightIndentGuideMarker.end&&e[t.row]!==""&&t.column===e[t.row].length){this.$highlightIndentGuideMarker.dir=1;for(var o=t.row+1;o<e.length;o++){var u=e[o],a=/^\s*/.exec(u)[0].length;if(u!==""){this.$highlightIndentGuideMarker.end=o;if(a<=n)break}}}this.$renderHighlightIndentGuide();},this.$clearActiveIndentGuide=function(){var e=this.$lines.cells;for(var t=0;t<e.length;t++){var n=e[t],r=n.element.childNodes;if(r.length>0)for(var i=0;i<r.length;i++)if(r[i].classList&&r[i].classList.contains("ace_indent-guide-active")){r[i].classList.remove("ace_indent-guide-active");break}}},this.$setIndentGuideActive=function(e,t){var n=this.session.doc.getLine(e.row);if(n!==""){var r=e.element.childNodes;if(r){var i=r[t-1];i&&i.classList&&i.classList.contains("ace_indent-guide")&&i.classList.add("ace_indent-guide-active");}}},this.$renderHighlightIndentGuide=function(){if(!this.$lines)return;var e=this.$lines.cells;this.$clearActiveIndentGuide();var t=this.$highlightIndentGuideMarker.indentLevel;if(t!==0)if(this.$highlightIndentGuideMarker.dir===1)for(var n=0;n<e.length;n++){var r=e[n];if(this.$highlightIndentGuideMarker.end&&r.row>=this.$highlightIndentGuideMarker.start+1){if(r.row>=this.$highlightIndentGuideMarker.end)break;this.$setIndentGuideActive(r,t);}}else for(var n=e.length-1;n>=0;n--){var r=e[n];if(this.$highlightIndentGuideMarker.end&&r.row<this.$highlightIndentGuideMarker.start){if(r.row<=this.$highlightIndentGuideMarker.end)break;this.$setIndentGuideActive(r,t);}}},this.$createLineElement=function(e){var t=this.dom.createElement("div");return t.className="ace_line",t.style.height=this.config.lineHeight+"px",t},this.$renderWrappedLine=function(e,t,n){var r=0,i=0,o=n[0],u=0,a=this.$createLineElement();e.appendChild(a);for(var f=0;f<t.length;f++){var l=t[f],c=l.value;if(f==0&&this.displayIndentGuides){r=c.length,c=this.renderIndentGuide(a,c,o);if(!c)continue;r-=c.length;}if(r+c.length<o)u=this.$renderTokenInChunks(a,u,l,c),r+=c.length;else {while(r+c.length>=o)u=this.$renderTokenInChunks(a,u,l,c.substring(0,o-r)),c=c.substring(o-r),r=o,a=this.$createLineElement(),e.appendChild(a),a.appendChild(this.dom.createTextNode(s.stringRepeat("\u00a0",n.indent),this.element)),i++,u=0,o=n[i]||Number.MAX_VALUE;c.length!=0&&(r+=c.length,u=this.$renderTokenInChunks(a,u,l,c));}}n[n.length-1]>this.MAX_LINE_LENGTH&&this.$renderOverflowMessage(a,u,null,"",!0);},this.$renderSimpleLine=function(e,t){var n=0;for(var r=0;r<t.length;r++){var i=t[r],s=i.value;if(r==0&&this.displayIndentGuides){s=this.renderIndentGuide(e,s);if(!s)continue}if(n+s.length>this.MAX_LINE_LENGTH){this.$renderOverflowMessage(e,n,i,s);return}n=this.$renderTokenInChunks(e,n,i,s);}},this.$renderOverflowMessage=function(e,t,n,r,i){n&&this.$renderTokenInChunks(e,t,n,r.slice(0,this.MAX_LINE_LENGTH-t));var s=this.dom.createElement("span");s.className="ace_inline_button ace_keyword ace_toggle_wrap",s.textContent=i?"<hide>":"<click to see more...>",e.appendChild(s);},this.$renderLine=function(e,t,n){!n&&n!=0&&(n=this.session.getFoldLine(t));if(n)var r=this.$getFoldLineTokens(t,n);else var r=this.session.getTokens(t);var i=e;if(r.length){var s=this.session.getRowSplitData(t);if(s&&s.length){this.$renderWrappedLine(e,r,s);var i=e.lastChild;}else {var i=e;this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i)),this.$renderSimpleLine(i,r);}}else this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i));if(this.showEOL&&i){n&&(t=n.end.row);var o=this.dom.createElement("span");o.className="ace_invisible ace_invisible_eol",o.textContent=t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,i.appendChild(o);}},this.$getFoldLineTokens=function(e,t){function i(e,t,n){var i=0,s=0;while(s+e[i].value.length<t){s+=e[i].value.length,i++;if(i==e.length)return}if(s!=t){var o=e[i].value.substring(t-s);o.length>n-t&&(o=o.substring(0,n-t)),r.push({type:e[i].type,value:o}),s=t+o.length,i+=1;}while(s<n&&i<e.length){var o=e[i].value;o.length+s>n?r.push({type:e[i].type,value:o.substring(0,n-s)}):r.push(e[i]),s+=o.length,i+=1;}}var n=this.session,r=[],s=n.getTokens(e);return t.walk(function(e,t,o,u,a){e!=null?r.push({type:"fold",value:e}):(a&&(s=n.getTokens(t)),s.length&&i(s,u,o));},t.end.row,this.session.getLine(t.end.row).length),r},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){};})).call(a.prototype),t.Text=a;}),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(e,t,n){var r=e("../lib/dom"),i=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),r.addCssClass(this.element,"ace_hidden-cursors"),this.$updateCursors=this.$updateOpacity.bind(this);};((function(){this.$updateOpacity=function(e){var t=this.cursors;for(var n=t.length;n--;)r.setStyle(t[n].style,"opacity",e?"":"0");},this.$startCssAnimation=function(){var e=this.cursors;for(var t=e.length;t--;)e[t].style.animationDuration=this.blinkInterval+"ms";this.$isAnimating=!0,setTimeout(function(){this.$isAnimating&&r.addCssClass(this.element,"ace_animate-blinking");}.bind(this));},this.$stopCssAnimation=function(){this.$isAnimating=!1,r.removeCssClass(this.element,"ace_animate-blinking");},this.$padding=0,this.setPadding=function(e){this.$padding=e;},this.setSession=function(e){this.session=e;},this.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer());},this.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer());},this.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,r.setCssClass(this.element,"ace_smooth-blinking",e),this.$updateCursors(!0),this.restartTimer());},this.addCursor=function(){var e=r.createElement("div");return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop();return e.parentNode.removeChild(e),e}},this.hideCursor=function(){this.isVisible=!1,r.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer();},this.showCursor=function(){this.isVisible=!0,r.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer();},this.restartTimer=function(){var e=this.$updateCursors;clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.$stopCssAnimation(),this.smoothBlinking&&(this.$isSmoothBlinking=!1,r.removeCssClass(this.element,"ace_smooth-blinking")),e(!0);if(!this.isBlinking||!this.blinkInterval||!this.isVisible){this.$stopCssAnimation();return}this.smoothBlinking&&(this.$isSmoothBlinking=!0,setTimeout(function(){this.$isSmoothBlinking&&r.addCssClass(this.element,"ace_smooth-blinking");}.bind(this)));if(r.HAS_CSS_ANIMATION)this.$startCssAnimation();else {var t=function(){this.timeoutId=setTimeout(function(){e(!1);},.6*this.blinkInterval);}.bind(this);this.intervalId=setInterval(function(){e(!0),t();},this.blinkInterval),t();}},this.getPixelPosition=function(e,t){if(!this.config||!this.session)return {left:0,top:0};e||(e=this.session.selection.getCursor());var n=this.session.documentToScreenPosition(e),r=this.$padding+(this.session.$bidiHandler.isBidiRow(n.row,e.row)?this.session.$bidiHandler.getPosLeft(n.column):n.column*this.config.characterWidth),i=(n.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight;return {left:r,top:i}},this.isCursorInView=function(e,t){return e.top>=0&&e.top<t.maxHeight},this.update=function(e){this.config=e;var t=this.session.$selectionMarkers,n=0,i=0;if(t===undefined||t.length===0)t=[{cursor:null}];for(var n=0,s=t.length;n<s;n++){var o=this.getPixelPosition(t[n].cursor,!0);if((o.top>e.height+e.offset||o.top<0)&&n>1)continue;var u=this.cursors[i++]||this.addCursor(),a=u.style;this.drawCursor?this.drawCursor(u,o,e,t[n],this.session):this.isCursorInView(o,e)?(r.setStyle(a,"display","block"),r.translate(u,o.left,o.top),r.setStyle(a,"width",Math.round(e.characterWidth)+"px"),r.setStyle(a,"height",e.lineHeight+"px")):r.setStyle(a,"display","none");}while(this.cursors.length>i)this.removeCursor();var f=this.session.getOverwrite();this.$setOverwrite(f),this.$pixelPos=o,this.restartTimer();},this.drawCursor=null,this.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?r.addCssClass(this.element,"ace_overwrite-cursors"):r.removeCssClass(this.element,"ace_overwrite-cursors"));},this.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId);};})).call(i.prototype),t.Cursor=i;}),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter,u=32768,a=function(e){this.element=i.createElement("div"),this.element.className="ace_scrollbar ace_scrollbar"+this.classSuffix,this.inner=i.createElement("div"),this.inner.className="ace_scrollbar-inner",this.inner.textContent="\u00a0",this.element.appendChild(this.inner),e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,s.addListener(this.element,"scroll",this.onScroll.bind(this)),s.addListener(this.element,"mousedown",s.preventDefault);};(function(){r.implement(this,o),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1;};}).call(a.prototype);var f=function(e,t){a.call(this,e),this.scrollTop=0,this.scrollHeight=0,t.$scrollbarWidth=this.width=i.scrollbarWidth(e.ownerDocument),this.inner.style.width=this.element.style.width=(this.width||15)+5+"px",this.$minWidth=0;};r.inherits(f,a),function(){this.classSuffix="-v",this.onScroll=function(){if(!this.skipEvent){this.scrollTop=this.element.scrollTop;if(this.coeff!=1){var e=this.element.clientHeight/this.scrollHeight;this.scrollTop=this.scrollTop*(1-e)/(this.coeff-e);}this._emit("scroll",{data:this.scrollTop});}this.skipEvent=!1;},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.element.style.height=e+"px";},this.setInnerHeight=this.setScrollHeight=function(e){this.scrollHeight=e,e>u?(this.coeff=u/e,e=u):this.coeff!=1&&(this.coeff=1),this.inner.style.height=e+"px";},this.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=e,this.element.scrollTop=e*this.coeff);};}.call(f.prototype);var l=function(e,t){a.call(this,e),this.scrollLeft=0,this.height=t.$scrollbarWidth,this.inner.style.height=this.element.style.height=(this.height||15)+5+"px";};r.inherits(l,a),function(){this.classSuffix="-h",this.onScroll=function(){this.skipEvent||(this.scrollLeft=this.element.scrollLeft,this._emit("scroll",{data:this.scrollLeft})),this.skipEvent=!1;},this.getHeight=function(){return this.isVisible?this.height:0},this.setWidth=function(e){this.element.style.width=e+"px";},this.setInnerWidth=function(e){this.inner.style.width=e+"px";},this.setScrollWidth=function(e){this.inner.style.width=e+"px";},this.setScrollLeft=function(e){this.scrollLeft!=e&&(this.skipEvent=!0,this.scrollLeft=this.element.scrollLeft=e);};}.call(l.prototype),t.ScrollBar=f,t.ScrollBarV=f,t.ScrollBarH=l,t.VScrollBar=f,t.HScrollBar=l;}),ace.define("ace/scrollbar_custom",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter;i.importCssString(".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}","ace_scrollbar.css",!1);var u=function(e){this.element=i.createElement("div"),this.element.className="ace_sb"+this.classSuffix,this.inner=i.createElement("div"),this.inner.className="",this.element.appendChild(this.inner),this.VScrollWidth=12,this.HScrollHeight=12,e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,s.addMultiMouseDownListener(this.element,[500,300,300],this,"onMouseDown");};(function(){r.implement(this,o),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1;};}).call(u.prototype);var a=function(e,t){u.call(this,e),this.scrollTop=0,this.scrollHeight=0,this.parent=e,this.width=this.VScrollWidth,this.renderer=t,this.inner.style.width=this.element.style.width=(this.width||15)+"px",this.$minWidth=0;};r.inherits(a,u),function(){this.classSuffix="-v",r.implement(this,o),this.onMouseDown=function(e,t){if(e!=="mousedown")return;if(s.getButton(t)!==0||t.detail===2)return;if(t.target===this.inner){var n=this,r=t.clientY,i=function(e){r=e.clientY;},o=function(){clearInterval(l);},u=t.clientY,a=this.thumbTop,f=function(){if(r===undefined)return;var e=n.scrollTopFromThumbTop(a+r-u);if(e===n.scrollTop)return;n._emit("scroll",{data:e});};s.capture(this.inner,i,o);var l=setInterval(f,20);return s.preventDefault(t)}var c=t.clientY-this.element.getBoundingClientRect().top-this.thumbHeight/2;return this._emit("scroll",{data:this.scrollTopFromThumbTop(c)}),s.preventDefault(t)},this.getHeight=function(){return this.height},this.scrollTopFromThumbTop=function(e){var t=e*(this.pageHeight-this.viewHeight)/(this.slideHeight-this.thumbHeight);return t>>=0,t<0?t=0:t>this.pageHeight-this.viewHeight&&(t=this.pageHeight-this.viewHeight),t},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.height=Math.max(0,e),this.slideHeight=this.height,this.viewHeight=this.height,this.setScrollHeight(this.pageHeight,!0);},this.setInnerHeight=this.setScrollHeight=function(e,t){if(this.pageHeight===e&&!t)return;this.pageHeight=e,this.thumbHeight=this.slideHeight*this.viewHeight/this.pageHeight,this.thumbHeight>this.slideHeight&&(this.thumbHeight=this.slideHeight),this.thumbHeight<15&&(this.thumbHeight=15),this.inner.style.height=this.thumbHeight+"px",this.scrollTop>this.pageHeight-this.viewHeight&&(this.scrollTop=this.pageHeight-this.viewHeight,this.scrollTop<0&&(this.scrollTop=0),this._emit("scroll",{data:this.scrollTop}));},this.setScrollTop=function(e){this.scrollTop=e,e<0&&(e=0),this.thumbTop=e*(this.slideHeight-this.thumbHeight)/(this.pageHeight-this.viewHeight),this.inner.style.top=this.thumbTop+"px";};}.call(a.prototype);var f=function(e,t){u.call(this,e),this.scrollLeft=0,this.scrollWidth=0,this.height=this.HScrollHeight,this.inner.style.height=this.element.style.height=(this.height||12)+"px",this.renderer=t;};r.inherits(f,u),function(){this.classSuffix="-h",r.implement(this,o),this.onMouseDown=function(e,t){if(e!=="mousedown")return;if(s.getButton(t)!==0||t.detail===2)return;if(t.target===this.inner){var n=this,r=t.clientX,i=function(e){r=e.clientX;},o=function(){clearInterval(l);},u=t.clientX,a=this.thumbLeft,f=function(){if(r===undefined)return;var e=n.scrollLeftFromThumbLeft(a+r-u);if(e===n.scrollLeft)return;n._emit("scroll",{data:e});};s.capture(this.inner,i,o);var l=setInterval(f,20);return s.preventDefault(t)}var c=t.clientX-this.element.getBoundingClientRect().left-this.thumbWidth/2;return this._emit("scroll",{data:this.scrollLeftFromThumbLeft(c)}),s.preventDefault(t)},this.getHeight=function(){return this.isVisible?this.height:0},this.scrollLeftFromThumbLeft=function(e){var t=e*(this.pageWidth-this.viewWidth)/(this.slideWidth-this.thumbWidth);return t>>=0,t<0?t=0:t>this.pageWidth-this.viewWidth&&(t=this.pageWidth-this.viewWidth),t},this.setWidth=function(e){this.width=Math.max(0,e),this.element.style.width=this.width+"px",this.slideWidth=this.width,this.viewWidth=this.width,this.setScrollWidth(this.pageWidth,!0);},this.setInnerWidth=this.setScrollWidth=function(e,t){if(this.pageWidth===e&&!t)return;this.pageWidth=e,this.thumbWidth=this.slideWidth*this.viewWidth/this.pageWidth,this.thumbWidth>this.slideWidth&&(this.thumbWidth=this.slideWidth),this.thumbWidth<15&&(this.thumbWidth=15),this.inner.style.width=this.thumbWidth+"px",this.scrollLeft>this.pageWidth-this.viewWidth&&(this.scrollLeft=this.pageWidth-this.viewWidth,this.scrollLeft<0&&(this.scrollLeft=0),this._emit("scroll",{data:this.scrollLeft}));},this.setScrollLeft=function(e){this.scrollLeft=e,e<0&&(e=0),this.thumbLeft=e*(this.slideWidth-this.thumbWidth)/(this.pageWidth-this.viewWidth),this.inner.style.left=this.thumbLeft+"px";};}.call(f.prototype),t.ScrollBar=a,t.ScrollBarV=a,t.ScrollBarH=f,t.VScrollBar=a,t.HScrollBar=f;}),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(e,t,n){var r=e("./lib/event"),i=function(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.$recursionLimit=2,this.window=t||window;var n=this;this._flush=function(e){n.pending=!1;var t=n.changes;t&&(r.blockIdle(100),n.changes=0,n.onRender(t));if(n.changes){if(n.$recursionLimit--<0)return;n.schedule();}else n.$recursionLimit=2;};};((function(){this.schedule=function(e){this.changes=this.changes|e,this.changes&&!this.pending&&(r.nextFrame(this._flush),this.pending=!0);},this.clear=function(e){var t=this.changes;return this.changes=0,t};})).call(i.prototype),t.RenderLoop=i;}),ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/lib/useragent","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("../lib/event"),u=e("../lib/useragent"),a=e("../lib/event_emitter").EventEmitter,f=250,l=typeof ResizeObserver=="function",c=200,h=t.FontMetrics=function(e,t){this.charCount=t||f,this.el=i.createElement("div"),this.$setMeasureNodeStyles(this.el.style,!0),this.$main=i.createElement("div"),this.$setMeasureNodeStyles(this.$main.style),this.$measureNode=i.createElement("div"),this.$setMeasureNodeStyles(this.$measureNode.style),this.el.appendChild(this.$main),this.el.appendChild(this.$measureNode),e.appendChild(this.el),this.$measureNode.textContent=s.stringRepeat("X",this.charCount),this.$characterSize={width:0,height:0},l?this.$addObserver():this.checkForSizeChanges();};(function(){r.implement(this,a),this.$characterSize={width:0,height:0},this.$setMeasureNodeStyles=function(e,t){e.width=e.height="auto",e.left=e.top="0px",e.visibility="hidden",e.position="absolute",e.whiteSpace="pre",u.isIE<8?e["font-family"]="inherit":e.font="inherit",e.overflow=t?"hidden":"visible";},this.checkForSizeChanges=function(e){e===undefined&&(e=this.$measureSizes());if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold";var t=this.$measureSizes();this.$measureNode.style.fontWeight="",this.$characterSize=e,this.charSizes=Object.create(null),this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e});}},this.$addObserver=function(){var e=this;this.$observer=new window.ResizeObserver(function(t){e.checkForSizeChanges();}),this.$observer.observe(this.$measureNode);},this.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer||this.$observer)return this.$pollSizeChangesTimer;var e=this;return this.$pollSizeChangesTimer=o.onIdle(function t(){e.checkForSizeChanges(),o.onIdle(t,500);},500)},this.setPolling=function(e){e?this.$pollSizeChanges():this.$pollSizeChangesTimer&&(clearInterval(this.$pollSizeChangesTimer),this.$pollSizeChangesTimer=0);},this.$measureSizes=function(e){e=e||this.$measureNode;var t=e.getBoundingClientRect(),n={height:t.height,width:t.width/this.charCount};return n.width===0||n.height===0?null:n},this.$measureCharWidth=function(e){this.$main.textContent=s.stringRepeat(e,this.charCount);var t=this.$main.getBoundingClientRect();return t.width/this.charCount},this.getCharacterWidth=function(e){var t=this.charSizes[e];return t===undefined&&(t=this.charSizes[e]=this.$measureCharWidth(e)/this.$characterSize.width),t},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$observer&&this.$observer.disconnect(),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el);},this.$getZoom=function e(t){return !t||!t.parentElement?1:(window.getComputedStyle(t).zoom||1)*e(t.parentElement)},this.$initTransformMeasureNodes=function(){var e=function(e,t){return ["div",{style:"position: absolute;top:"+e+"px;left:"+t+"px;"}]};this.els=i.buildDom([e(0,0),e(c,0),e(0,c),e(c,c)],this.el);},this.transformCoordinates=function(e,t){function r(e,t,n){var r=e[1]*t[0]-e[0]*t[1];return [(-t[1]*n[0]+t[0]*n[1])/r,(+e[1]*n[0]-e[0]*n[1])/r]}function i(e,t){return [e[0]-t[0],e[1]-t[1]]}function s(e,t){return [e[0]+t[0],e[1]+t[1]]}function o(e,t){return [e*t[0],e*t[1]]}function u(e){var t=e.getBoundingClientRect();return [t.left,t.top]}if(e){var n=this.$getZoom(this.el);e=o(1/n,e);}this.els||this.$initTransformMeasureNodes();var a=u(this.els[0]),f=u(this.els[1]),l=u(this.els[2]),h=u(this.els[3]),p=r(i(h,f),i(h,l),i(s(f,l),s(h,a))),d=o(1+p[0],i(f,a)),v=o(1+p[1],i(l,a));if(t){var m=t,g=p[0]*m[0]/c+p[1]*m[1]/c+1,y=s(o(m[0],d),o(m[1],v));return s(o(1/g/c,y),a)}var b=i(e,a),w=r(i(d,o(p[0],b)),i(v,o(p[1],b)),b);return o(c,w)};}).call(h.prototype);}),ace.define("ace/css/editor.css",["require","exports","module"],function(e,t,n){n.exports='/*\nstyles = []\nfor (var i = 1; i < 16; i++) {\n    styles.push(".ace_br" + i + "{" + (\n        ["top-left", "top-right", "bottom-right", "bottom-left"]\n    ).map(function(x, j) {\n        return i & (1<<j) ? "border-" + x + "-radius: 3px;" : "" \n    }).filter(Boolean).join(" ") + "}")\n}\nstyles.join("\\n")\n*/\n.ace_br1 {border-top-left-radius    : 3px;}\n.ace_br2 {border-top-right-radius   : 3px;}\n.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\n.ace_br4 {border-bottom-right-radius: 3px;}\n.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\n.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\n.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\n.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\n.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\n.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\n.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left {\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n}\n\n.ace_gutter-cell {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell.ace_error {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\n}\n\n.ace_scrollbar {\n    contain: strict;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 6;\n}\n\n.ace_scrollbar-inner {\n    position: absolute;\n    cursor: text;\n    left: 0;\n    top: 0;\n}\n\n.ace_scrollbar-v{\n    overflow-x: hidden;\n    overflow-y: scroll;\n    top: 0;\n}\n\n.ace_scrollbar-h {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    left: 0;\n}\n\n.ace_print-margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_text-input {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    font: inherit;\n    padding: 0 1px;\n    margin: 0 -1px;\n    contain: strict;\n    -ms-user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    user-select: text;\n    /*with `pre-line` chrome inserts &nbsp; instead of space*/\n    white-space: pre!important;\n}\n.ace_text-input.ace_composition {\n    background: transparent;\n    color: inherit;\n    z-index: 1000;\n    opacity: 1;\n}\n.ace_composition_placeholder { color: transparent }\n.ace_composition_marker { \n    border-bottom: 1px solid;\n    position: absolute;\n    border-radius: 0;\n    margin-top: 1px;\n}\n\n[ace_nocontext=true] {\n    transform: none!important;\n    filter: none!important;\n    clip-path: none!important;\n    mask : none!important;\n    contain: none!important;\n    perspective: none!important;\n    mix-blend-mode: initial!important;\n    z-index: auto;\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/\n    word-wrap: normal;\n    white-space: pre;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter-layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n    height: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer {\n    font: inherit !important;\n    position: absolute;\n    height: 1000000px;\n    width: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {\n    contain: style size layout;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.ace_hidpi .ace_text-layer,\n.ace_hidpi .ace_gutter-layer,\n.ace_hidpi .ace_content,\n.ace_hidpi .ace_gutter {\n    contain: strict;\n    will-change: transform;\n}\n.ace_hidpi .ace_text-layer > .ace_line, \n.ace_hidpi .ace_text-layer > .ace_line_group {\n    contain: strict;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n    box-sizing: border-box;\n    border-left: 2px solid;\n    /* workaround for smooth cursor repaintng whole screen in chrome */\n    transform: translatez(0);\n}\n\n.ace_multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_slim-cursors .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_overwrite-cursors .ace_cursor {\n    border-left-width: 0;\n    border-bottom: 1px solid;\n}\n\n.ace_hidden-cursors .ace_cursor {\n    opacity: 0.2;\n}\n\n.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {\n    opacity: 0;\n}\n\n.ace_smooth-blinking .ace_cursor {\n    transition: opacity 0.18s;\n}\n\n.ace_animate-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: step-end;\n    animation-name: blink-ace-animate;\n    animation-iteration-count: infinite;\n}\n\n.ace_animate-blinking.ace_smooth-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\n}\n\n.ace_tooltip {\n    background-color: #FFF;\n    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_folding-enabled > .ace_gutter-cell {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}';}),ace.define("ace/layer/decorators",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event_emitter").EventEmitter,o=function(e,t){this.canvas=r.createElement("canvas"),this.renderer=t,this.pixelRatio=1,this.maxHeight=t.layerConfig.maxHeight,this.lineHeight=t.layerConfig.lineHeight,this.canvasHeight=e.parent.scrollHeight,this.heightRatio=this.canvasHeight/this.maxHeight,this.canvasWidth=e.width,this.minDecorationHeight=2*this.pixelRatio|0,this.halfMinDecorationHeight=this.minDecorationHeight/2|0,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvas.style.top="0px",this.canvas.style.right="0px",this.canvas.style.zIndex="7px",this.canvas.style.position="absolute",this.colors={},this.colors.dark={error:"rgba(255, 18, 18, 1)",warning:"rgba(18, 136, 18, 1)",info:"rgba(18, 18, 136, 1)"},this.colors.light={error:"rgb(255,51,51)",warning:"rgb(32,133,72)",info:"rgb(35,68,138)"},e.element.appendChild(this.canvas);};((function(){i.implement(this,s),this.$updateDecorators=function(e){function i(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}var t=this.renderer.theme.isDark===!0?this.colors.dark:this.colors.light;if(e){this.maxHeight=e.maxHeight,this.lineHeight=e.lineHeight,this.canvasHeight=e.height;var n=(e.lastRow+1)*this.lineHeight;n<this.canvasHeight?this.heightRatio=1:this.heightRatio=this.canvasHeight/this.maxHeight;}var r=this.canvas.getContext("2d"),s=this.renderer.session.$annotations;r.clearRect(0,0,this.canvas.width,this.canvas.height);if(s){var o={info:1,warning:2,error:3};s.forEach(function(e){e.priority=o[e.type]||null;}),s=s.sort(i);var u=this.renderer.session.$foldData;for(var a=0;a<s.length;a++){var f=s[a].row,l=this.compensateFoldRows(f,u),c=Math.round((f-l)*this.lineHeight*this.heightRatio),h=Math.round((f-l)*this.lineHeight*this.heightRatio),p=Math.round(((f-l)*this.lineHeight+this.lineHeight)*this.heightRatio),d=p-h;if(d<this.minDecorationHeight){var v=(h+p)/2|0;v<this.halfMinDecorationHeight?v=this.halfMinDecorationHeight:v+this.halfMinDecorationHeight>this.canvasHeight&&(v=this.canvasHeight-this.halfMinDecorationHeight),h=Math.round(v-this.halfMinDecorationHeight),p=Math.round(v+this.halfMinDecorationHeight);}r.fillStyle=t[s[a].type]||null,r.fillRect(0,c,this.canvasWidth,p-h);}}var m=this.renderer.session.selection.getCursor();if(m){var l=this.compensateFoldRows(m.row,u),c=Math.round((m.row-l)*this.lineHeight*this.heightRatio);r.fillStyle="rgba(0, 0, 0, 0.5)",r.fillRect(0,c,this.canvasWidth,2);}},this.compensateFoldRows=function(e,t){var n=0;if(t&&t.length>0)for(var r=0;r<t.length;r++)e>t[r].start.row&&e<t[r].end.row?n+=e-t[r].start.row:e>=t[r].end.row&&(n+=t[r].end.row-t[r].start.row);return n};})).call(o.prototype),t.Decorator=o;}),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/scrollbar_custom","ace/scrollbar_custom","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter","ace/css/editor.css","ace/layer/decorators","ace/lib/useragent"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./config"),o=e("./layer/gutter").Gutter,u=e("./layer/marker").Marker,a=e("./layer/text").Text,f=e("./layer/cursor").Cursor,l=e("./scrollbar").HScrollBar,c=e("./scrollbar").VScrollBar,h=e("./scrollbar_custom").HScrollBar,p=e("./scrollbar_custom").VScrollBar,d=e("./renderloop").RenderLoop,v=e("./layer/font_metrics").FontMetrics,m=e("./lib/event_emitter").EventEmitter,g=e("./css/editor.css"),y=e("./layer/decorators").Decorator,b=e("./lib/useragent"),w=b.isIE;i.importCssString(g,"ace_editor.css",!1);var E=function(e,t){var n=this;this.container=e||i.createElement("div"),i.addCssClass(this.container,"ace_editor"),i.HI_DPI&&i.addCssClass(this.container,"ace_hidpi"),this.setTheme(t),s.get("useStrictCSP")==null&&s.set("useStrictCSP",!1),this.$gutter=i.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.$gutter.setAttribute("aria-hidden",!0),this.scroller=i.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=i.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new o(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new u(this.content);var r=this.$textLayer=new a(this.content);this.canvas=r.element,this.$markerFront=new u(this.content),this.$cursorLayer=new f(this.content),this.$horizScroll=!1,this.$vScroll=!1,this.scrollBar=this.scrollBarV=new c(this.container,this),this.scrollBarH=new l(this.container,this),this.scrollBarV.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollTop(e.data-n.scrollMargin.top);}),this.scrollBarH.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollLeft(e.data-n.scrollMargin.left);}),this.scrollTop=0,this.scrollLeft=0,this.cursorPos={row:0,column:0},this.$fontMetrics=new v(this.container,this.$textLayer.MAX_CHUNK_LENGTH),this.$textLayer.$setFontMetrics(this.$fontMetrics),this.$textLayer.on("changeCharacterSize",function(e){n.updateCharacterSize(),n.onResize(!0,n.gutterWidth,n.$size.width,n.$size.height),n._signal("changeCharacterSize",e);}),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:!0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1},this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.margin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.$keepTextAreaAtCursor=!b.isIOS,this.$loop=new d(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),s.resetOptions(this),s._signal("renderer",this);};((function(){this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,r.implement(this,m),this.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth(),this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin(),i.setStyle(this.scroller.style,"line-height",this.lineHeight+"px");},this.setSession=function(e){this.session&&this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode),this.session=e,e&&this.scrollMargin.top&&e.getScrollTop()<=0&&e.setScrollTop(-this.scrollMargin.top),this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e);if(!e)return;this.$loop.schedule(this.CHANGE_FULL),this.session.$setFontMetrics(this.$fontMetrics),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this),this.onChangeNewLineMode(),this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode);},this.updateLines=function(e,t,n){t===undefined&&(t=Infinity),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t};if(this.$changedLines.lastRow<this.layerConfig.firstRow){if(!n)return;this.$changedLines.lastRow=this.layerConfig.lastRow;}if(this.$changedLines.firstRow>this.layerConfig.lastRow)return;this.$loop.schedule(this.CHANGE_LINES);},this.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT),this.$textLayer.$updateEolChar(),this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize();},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT);},this.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL);},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges();},this.$changes=0,this.$updateSizeAsync=function(){this.$loop.pending?this.$size.$dirty=!0:this.onResize();},this.onResize=function(e,t,n,r){if(this.resizing>2)return;this.resizing>0?this.resizing++:this.resizing=e?1:0;var i=this.container;r||(r=i.clientHeight||i.scrollHeight),n||(n=i.clientWidth||i.scrollWidth);var s=this.$updateCachedSize(e,t,n,r);if(!this.$size.scrollerHeight||!n&&!r)return this.resizing=0;e&&(this.$gutterLayer.$padding=null),e?this.$renderChanges(s|this.$changes,!0):this.$loop.schedule(s|this.$changes),this.resizing&&(this.resizing=0),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.$customScrollbar&&this.$updateCustomScrollbar(!0);},this.$updateCachedSize=function(e,t,n,r){r-=this.$extraHeight||0;var s=0,o=this.$size,u={width:o.width,height:o.height,scrollerHeight:o.scrollerHeight,scrollerWidth:o.scrollerWidth};r&&(e||o.height!=r)&&(o.height=r,s|=this.CHANGE_SIZE,o.scrollerHeight=o.height,this.$horizScroll&&(o.scrollerHeight-=this.scrollBarH.getHeight()),this.scrollBarV.setHeight(o.scrollerHeight),this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px",s|=this.CHANGE_SCROLL);if(n&&(e||o.width!=n)){s|=this.CHANGE_SIZE,o.width=n,t==null&&(t=this.$showGutter?this.$gutter.offsetWidth:0),this.gutterWidth=t,i.setStyle(this.scrollBarH.element.style,"left",t+"px"),i.setStyle(this.scroller.style,"left",t+this.margin.left+"px"),o.scrollerWidth=Math.max(0,n-t-this.scrollBarV.getWidth()-this.margin.h),i.setStyle(this.$gutter.style,"left",this.margin.left+"px");var a=this.scrollBarV.getWidth()+"px";i.setStyle(this.scrollBarH.element.style,"right",a),i.setStyle(this.scroller.style,"right",a),i.setStyle(this.scroller.style,"bottom",this.scrollBarH.getHeight()),this.scrollBarH.setWidth(o.scrollerWidth);if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)s|=this.CHANGE_FULL;}return o.$dirty=!n||!r,s&&this._signal("resize",u),s},this.onGutterResize=function(e){var t=this.$showGutter?e:0;t!=this.gutterWidth&&(this.$changes|=this.$updateCachedSize(!0,t,this.$size.width,this.$size.height)),this.session.getUseWrapMode()&&this.adjustWrapLimit()?this.$loop.schedule(this.CHANGE_FULL):this.$size.$dirty?this.$loop.schedule(this.CHANGE_FULL):this.$computeLayerConfig();},this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-this.$padding*2,t=Math.floor(e/this.characterWidth);return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e);},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(e){this.setOption("showInvisibles",e),this.session.$bidiHandler.setShowInvisibles(e);},this.getShowInvisibles=function(){return this.getOption("showInvisibles")},this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")},this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e);},this.getHighlightIndentGuides=function(){return this.getOption("highlightIndentGuides")},this.setHighlightIndentGuides=function(e){this.setOption("highlightIndentGuides",e);},this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e);},this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e);},this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},this.getShowGutter=function(){return this.getOption("showGutter")},this.setShowGutter=function(e){return this.setOption("showGutter",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e);},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e);},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return;if(!this.$printMarginEl){var e=i.createElement("div");e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=i.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild);}var t=this.$printMarginEl.style;t.left=Math.round(this.characterWidth*this.$printMarginColumn+this.$padding)+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&this.session.$wrap==-1&&this.adjustWrapLimit();},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.scroller},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(this.$isMousePressed)return;var e=this.textarea.style,t=this.$composition;if(!this.$keepTextAreaAtCursor&&!t){i.translate(this.textarea,-100,0);return}var n=this.$cursorLayer.$pixelPos;if(!n)return;t&&t.markerRange&&(n=this.$cursorLayer.getPixelPosition(t.markerRange.start,!0));var r=this.layerConfig,s=n.top,o=n.left;s-=r.offset;var u=t&&t.useTextareaForIME?this.lineHeight:w?0:1;if(s<0||s>r.height-u){i.translate(this.textarea,0,0);return}var a=1,f=this.$size.height-u;if(!t)s+=this.lineHeight;else if(t.useTextareaForIME){var l=this.textarea.value;a=this.characterWidth*this.session.$getStringScreenWidth(l)[0];}else s+=this.lineHeight+2;o-=this.scrollLeft,o>this.$size.scrollerWidth-a&&(o=this.$size.scrollerWidth-a),o+=this.gutterWidth+this.margin.left,i.setStyle(e,"height",u+"px"),i.setStyle(e,"width",a+"px"),i.translate(this.textarea,Math.min(o,this.$size.scrollerWidth-a),Math.min(s,f));},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)},this.getLastFullyVisibleRow=function(){var e=this.layerConfig,t=e.lastRow,n=this.session.documentToScreenRow(t,0)*e.lineHeight;return n-this.session.getScrollTop()>e.height-e.lineHeight?t-1:t},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin();},this.setScrollMargin=function(e,t,n,r){var i=this.scrollMargin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,i.top&&this.scrollTop<=0&&this.session&&this.session.setScrollTop(-i.top),this.updateFull();},this.setMargin=function(e,t,n,r){var i=this.margin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,this.$updateCachedSize(!0,this.gutterWidth,this.$size.width,this.$size.height),this.updateFull();},this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e);},this.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible},this.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e);},this.$updateScrollBarV=function(){var e=this.layerConfig.maxHeight,t=this.$size.scrollerHeight;!this.$maxLines&&this.$scrollPastEnd&&(e-=(t-this.lineHeight)*this.$scrollPastEnd,this.scrollTop>e-t&&(e=this.scrollTop+t,this.scrollBarV.scrollTop=null)),this.scrollBarV.setScrollHeight(e+this.scrollMargin.v),this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top);},this.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h),this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left);},this.$frozen=!1,this.freeze=function(){this.$frozen=!0;},this.unfreeze=function(){this.$frozen=!1;},this.$renderChanges=function(e,t){this.$changes&&(e|=this.$changes,this.$changes=0);if(!this.session||!this.container.offsetWidth||this.$frozen||!e&&!t){this.$changes|=e;return}if(this.$size.$dirty)return this.$changes|=e,this.onResize(!0);this.lineHeight||this.$textLayer.checkForSizeChanges(),this._signal("beforeRender",e),this.session&&this.session.$bidiHandler&&this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);var n=this.layerConfig;if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL){e|=this.$computeLayerConfig()|this.$loop.clear();if(n.firstRow!=this.layerConfig.firstRow&&n.firstRowScreen==this.layerConfig.firstRowScreen){var r=this.scrollTop+(n.firstRow-this.layerConfig.firstRow)*this.lineHeight;r>0&&(this.scrollTop=r,e|=this.CHANGE_SCROLL,e|=this.$computeLayerConfig()|this.$loop.clear());}n=this.layerConfig,this.$updateScrollBarV(),e&this.CHANGE_H_SCROLL&&this.$updateScrollBarH(),i.translate(this.content,-this.scrollLeft,-n.offset);var s=n.width+2*this.$padding+"px",o=n.minHeight+"px";i.setStyle(this.content.style,"width",s),i.setStyle(this.content.style,"height",o);}e&this.CHANGE_H_SCROLL&&(i.translate(this.content,-this.scrollLeft,-n.offset),this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left");if(e&this.CHANGE_FULL){this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}if(e&this.CHANGE_SCROLL){this.$changedLines=null,e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(n):this.$textLayer.scrollLines(n),this.$showGutter&&(e&this.CHANGE_GUTTER||e&this.CHANGE_LINES?this.$gutterLayer.update(n):this.$gutterLayer.scrollLines(n)),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}e&this.CHANGE_TEXT?(this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_LINES?((this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER?(this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_CURSOR&&(this.$highlightGutterLine&&this.$gutterLayer.updateLineHighlight(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(n),this.$moveTextAreaToCursor()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(n),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(n),this._signal("afterRender",e);},this.$autosize=function(){var e=this.session.getScreenLength()*this.lineHeight,t=this.$maxLines*this.lineHeight,n=Math.min(t,Math.max((this.$minLines||1)*this.lineHeight,e))+this.scrollMargin.v+(this.$extraHeight||0);this.$horizScroll&&(n+=this.scrollBarH.getHeight()),this.$maxPixelHeight&&n>this.$maxPixelHeight&&(n=this.$maxPixelHeight);var r=n<=2*this.lineHeight,i=!r&&e>t;if(n!=this.desiredHeight||this.$size.height!=this.desiredHeight||i!=this.$vScroll){i!=this.$vScroll&&(this.$vScroll=i,this.scrollBarV.setVisible(i));var s=this.container.clientWidth;this.container.style.height=n+"px",this.$updateCachedSize(!0,this.$gutterWidth,s,n),this.desiredHeight=n,this._signal("autosize");}},this.$computeLayerConfig=function(){var e=this.session,t=this.$size,n=t.height<=2*this.lineHeight,r=this.session.getScreenLength(),i=r*this.lineHeight,s=this.$getLongestLine(),o=!n&&(this.$hScrollBarAlwaysVisible||t.scrollerWidth-s-2*this.$padding<0),u=this.$horizScroll!==o;u&&(this.$horizScroll=o,this.scrollBarH.setVisible(o));var a=this.$vScroll;this.$maxLines&&this.lineHeight>1&&this.$autosize();var f=t.scrollerHeight+this.lineHeight,l=!this.$maxLines&&this.$scrollPastEnd?(t.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0;i+=l;var c=this.scrollMargin;this.session.setScrollTop(Math.max(-c.top,Math.min(this.scrollTop,i-t.scrollerHeight+c.bottom))),this.session.setScrollLeft(Math.max(-c.left,Math.min(this.scrollLeft,s+2*this.$padding-t.scrollerWidth+c.right)));var h=!n&&(this.$vScrollBarAlwaysVisible||t.scrollerHeight-i+l<0||this.scrollTop>c.top),p=a!==h;p&&(this.$vScroll=h,this.scrollBarV.setVisible(h));var d=this.scrollTop%this.lineHeight,v=Math.ceil(f/this.lineHeight)-1,m=Math.max(0,Math.round((this.scrollTop-d)/this.lineHeight)),g=m+v,y,b,w=this.lineHeight;m=e.screenToDocumentRow(m,0);var E=e.getFoldLine(m);E&&(m=E.start.row),y=e.documentToScreenRow(m,0),b=e.getRowLength(m)*w,g=Math.min(e.screenToDocumentRow(g,0),e.getLength()-1),f=t.scrollerHeight+e.getRowLength(g)*w+b,d=this.scrollTop-y*w;var S=0;if(this.layerConfig.width!=s||u)S=this.CHANGE_H_SCROLL;if(u||p)S|=this.$updateCachedSize(!0,this.gutterWidth,t.width,t.height),this._signal("scrollbarVisibilityChanged"),p&&(s=this.$getLongestLine());return this.layerConfig={width:s,padding:this.$padding,firstRow:m,firstRowScreen:y,lastRow:g,lineHeight:w,characterWidth:this.characterWidth,minHeight:f,maxHeight:i,offset:d,gutterOffset:w?Math.max(0,Math.ceil((d+t.height-t.scrollerHeight)/w)):0,height:this.$size.scrollerHeight},this.session.$bidiHandler&&this.session.$bidiHandler.setContentWidth(s-this.$padding),S},this.$updateLines=function(){if(!this.$changedLines)return;var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow;this.$changedLines=null;var n=this.layerConfig;if(e>n.lastRow+1)return;if(t<n.firstRow)return;if(t===Infinity){this.$showGutter&&this.$gutterLayer.update(n),this.$textLayer.update(n);return}return this.$textLayer.updateLines(n,e,t),!0},this.$getLongestLine=function(){var e=this.session.getScreenWidth();return this.showInvisibles&&!this.session.$useWrapMode&&(e+=1),this.$textLayer&&e>this.$textLayer.MAX_LINE_LENGTH&&(e=this.$textLayer.MAX_LINE_LENGTH+30),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT);},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK);},this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t);},this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t);},this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER);},this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER);},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR);},this.hideCursor=function(){this.$cursorLayer.hideCursor();},this.showCursor=function(){this.$cursorLayer.showCursor();},this.scrollSelectionIntoView=function(e,t,n){this.scrollCursorIntoView(e,n),this.scrollCursorIntoView(t,n);},this.scrollCursorIntoView=function(e,t,n){if(this.$size.scrollerHeight===0)return;var r=this.$cursorLayer.getPixelPosition(e),i=r.left,s=r.top,o=n&&n.top||0,u=n&&n.bottom||0;this.$scrollAnimation&&(this.$stopAnimation=!0);var a=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop;a+o>s?(t&&a+o>s+this.lineHeight&&(s-=t*this.$size.scrollerHeight),s===0&&(s=-this.scrollMargin.top),this.session.setScrollTop(s)):a+this.$size.scrollerHeight-u<s+this.lineHeight&&(t&&a+this.$size.scrollerHeight-u<s-this.lineHeight&&(s+=t*this.$size.scrollerHeight),this.session.setScrollTop(s+this.lineHeight+u-this.$size.scrollerHeight));var f=this.scrollLeft;f>i?(i<this.$padding+2*this.layerConfig.characterWidth&&(i=-this.scrollMargin.left),this.session.setScrollLeft(i)):f+this.$size.scrollerWidth<i+this.characterWidth?this.session.setScrollLeft(Math.round(i+this.characterWidth-this.$size.scrollerWidth)):f<=this.$padding&&i-f<this.characterWidth&&this.session.setScrollLeft(0);},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight);},this.alignCursor=function(e,t){typeof e=="number"&&(e={row:e,column:0});var n=this.$cursorLayer.getPixelPosition(e),r=this.$size.scrollerHeight-this.lineHeight,i=n.top-r*(t||0);return this.session.setScrollTop(i),i},this.STEPS=8,this.$calcSteps=function(e,t){var n=0,r=this.STEPS,i=[],s=function(e,t,n){return n*(Math.pow(e-1,3)+1)+t};for(n=0;n<r;++n)i.push(s(n/this.STEPS,e,t-e));return i},this.scrollToLine=function(e,t,n,r){var i=this.$cursorLayer.getPixelPosition({row:e,column:0}),s=i.top;t&&(s-=this.$size.scrollerHeight/2);var o=this.scrollTop;this.session.setScrollTop(s),n!==!1&&this.animateScrolling(o,r);},this.animateScrolling=function(e,t){function o(){r.$timer=clearInterval(r.$timer),r.$scrollAnimation=null,r.$stopAnimation=!1,t&&t();}var n=this.scrollTop;if(!this.$animatedScroll)return;var r=this;if(e==n)return;if(this.$scrollAnimation){var i=this.$scrollAnimation.steps;if(i.length){e=i[0];if(e==n)return}}var s=r.$calcSteps(e,n);this.$scrollAnimation={from:e,to:n,steps:s},clearInterval(this.$timer),r.session.setScrollTop(s.shift()),r.session.$scrollTop=n,this.$timer=setInterval(function(){if(r.$stopAnimation){o();return}if(!r.session)return clearInterval(r.$timer);s.length?(r.session.setScrollTop(s.shift()),r.session.$scrollTop=n):n!=null?(r.session.$scrollTop=-1,r.session.setScrollTop(n),n=null):o();},10);},this.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e);},this.scrollToX=function(e){this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL);},this.scrollTo=function(e,t){this.session.setScrollTop(t),this.session.setScrollLeft(e);},this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e);},this.isScrollableBy=function(e,t){if(t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top)return !0;if(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom)return !0;if(e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left)return !0;if(e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right)return !0},this.pixelToScreenCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0];}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=Math.floor((t+this.scrollTop-n.top)/this.lineHeight),u=this.$blockCursor?Math.floor(s):Math.round(s);return {row:o,column:u,side:s-u>0?1:-1,offsetX:i}},this.screenToTextCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0];}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=this.$blockCursor?Math.floor(s):Math.round(s),u=Math.floor((t+this.scrollTop-n.top)/this.lineHeight);return this.session.screenToDocumentPosition(u,Math.max(o,0),i)},this.textToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=this.session.documentToScreenPosition(e,t),i=this.$padding+(this.session.$bidiHandler.isBidiRow(r.row,e)?this.session.$bidiHandler.getPosLeft(r.column):Math.round(r.column*this.characterWidth)),s=r.row*this.lineHeight;return {pageX:n.left+i-this.scrollLeft,pageY:n.top+s-this.scrollTop}},this.visualizeFocus=function(){i.addCssClass(this.container,"ace_focus");},this.visualizeBlur=function(){i.removeCssClass(this.container,"ace_focus");},this.showComposition=function(e){this.$composition=e,e.cssText||(e.cssText=this.textarea.style.cssText),e.useTextareaForIME==undefined&&(e.useTextareaForIME=this.$useTextareaForIME),this.$useTextareaForIME?(i.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor(),this.$cursorLayer.element.style.display="none"):e.markerId=this.session.addMarker(e.markerRange,"ace_composition_marker","text");},this.setCompositionText=function(e){var t=this.session.selection.cursor;this.addToken(e,"composition_placeholder",t.row,t.column),this.$moveTextAreaToCursor();},this.hideComposition=function(){if(!this.$composition)return;this.$composition.markerId&&this.session.removeMarker(this.$composition.markerId),i.removeCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText=this.$composition.cssText;var e=this.session.selection.cursor;this.removeExtraToken(e.row,e.column),this.$composition=null,this.$cursorLayer.element.style.display="";},this.addToken=function(e,t,n,r){var i=this.session;i.bgTokenizer.lines[n]=null;var s={type:t,value:e},o=i.getTokens(n);if(r==null)o.push(s);else {var u=0;for(var a=0;a<o.length;a++){var f=o[a];u+=f.value.length;if(r<=u){var l=f.value.length-(u-r),c=f.value.slice(0,l),h=f.value.slice(l);o.splice(a,1,{type:f.type,value:c},s,{type:f.type,value:h});break}}}this.updateLines(n,n);},this.removeExtraToken=function(e,t){this.updateLines(e,e);},this.setTheme=function(e,t){function o(r){if(n.$themeId!=e)return t&&t();if(!r||!r.cssClass)throw new Error("couldn't load module "+e+" or it didn't call define");r.$id&&(n.$themeId=r.$id),i.importCssString(r.cssText,r.cssClass,n.container),n.theme&&i.removeCssClass(n.container,n.theme.cssClass);var s="padding"in r?r.padding:"padding"in(n.theme||{})?4:n.$padding;n.$padding&&s!=n.$padding&&n.setPadding(s),n.$theme=r.cssClass,n.theme=r,i.addCssClass(n.container,r.cssClass),i.setCssClass(n.container,"ace_dark",r.isDark),n.$size&&(n.$size.width=0,n.$updateSizeAsync()),n._dispatchEvent("themeLoaded",{theme:r}),t&&t();}var n=this;this.$themeId=e,n._dispatchEvent("themeChange",{theme:e});if(!e||typeof e=="string"){var r=e||this.$options.theme.initialValue;s.loadModule(["theme",r],o);}else o(e);},this.getTheme=function(){return this.$themeId},this.setStyle=function(e,t){i.setCssClass(this.container,e,t!==!1);},this.unsetStyle=function(e){i.removeCssClass(this.container,e);},this.setCursorStyle=function(e){i.setStyle(this.scroller.style,"cursor",e);},this.setMouseCursor=function(e){i.setStyle(this.scroller.style,"cursor",e);},this.attachToShadowRoot=function(){i.importCssString(g,"ace_editor.css",this.container);},this.destroy=function(){this.freeze(),this.$fontMetrics.destroy(),this.$cursorLayer.destroy(),this.removeAllListeners(),this.container.textContent="";},this.$updateCustomScrollbar=function(e){var t=this;this.$horizScroll=this.$vScroll=null,this.scrollBarV.element.remove(),this.scrollBarH.element.remove(),this.$scrollDecorator&&delete this.$scrollDecorator,e===!0?(this.scrollBarV=new p(this.container,this),this.scrollBarH=new h(this.container,this),this.scrollBarV.setHeight(this.$size.scrollerHeight),this.scrollBarH.setWidth(this.$size.scrollerWidth),this.scrollBarV.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top);}),this.scrollBarH.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left);}),this.$scrollDecorator=new y(this.scrollBarV,this),this.$scrollDecorator.$updateDecorators()):(this.scrollBarV=new c(this.container,this),this.scrollBarH=new l(this.container,this),this.scrollBarV.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top);}),this.scrollBarH.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left);}));};})).call(E.prototype),s.defineOptions(E.prototype,"renderer",{animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT);},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin();},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin();},initialValue:80},printMargin:{set:function(e){typeof e=="number"&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin();},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.$loop.schedule(this.CHANGE_FULL),this.onGutterResize();},initialValue:!0},fadeFoldWidgets:{set:function(e){i.setCssClass(this.$gutter,"ace_fade-fold-widgets",e);},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e),this.$loop.schedule(this.CHANGE_GUTTER);},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT);},initialValue:!0},highlightIndentGuides:{set:function(e){this.$textLayer.setHighlightIndentGuides(e)==1?this.$textLayer.$highlightIndentGuide():this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells);},initialValue:!0},highlightGutterLine:{set:function(e){this.$gutterLayer.setHighlightGutterLine(e),this.$loop.schedule(this.CHANGE_GUTTER);},initialValue:!0},hScrollBarAlwaysVisible:{set:function(e){(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:!1},vScrollBarAlwaysVisible:{set:function(e){(!this.$vScrollBarAlwaysVisible||!this.$vScroll)&&this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:!1},fontSize:{set:function(e){typeof e=="number"&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize();},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize();}},maxLines:{set:function(e){this.updateFull();}},minLines:{set:function(e){this.$minLines<562949953421311||(this.$minLines=0),this.updateFull();}},maxPixelHeight:{set:function(e){this.updateFull();},initialValue:0},scrollPastEnd:{set:function(e){e=+e||0;if(this.$scrollPastEnd==e)return;this.$scrollPastEnd=e,this.$loop.schedule(this.CHANGE_SCROLL);},initialValue:0,handlesSet:!0},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e,this.$loop.schedule(this.CHANGE_GUTTER);}},customScrollbar:{set:function(e){this.$updateCustomScrollbar(e);},initialValue:!1},theme:{set:function(e){this.setTheme(e);},get:function(){return this.$themeId||this.theme},initialValue:"./theme/textmate",handlesSet:!0},hasCssTransforms:{},useTextareaForIME:{initialValue:!b.isMobile&&!b.isIE}}),t.VirtualRenderer=E;}),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],function(e,t,n){function u(e){var t="importScripts('"+i.qualifyURL(e)+"');";try{return new Blob([t],{type:"application/javascript"})}catch(n){var r=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,s=new r;return s.append(t),s.getBlob("application/javascript")}}function a(e){if(typeof Worker=="undefined")return {postMessage:function(){},terminate:function(){}};if(o.get("loadWorkerFromBlob")){var t=u(e),n=window.URL||window.webkitURL,r=n.createObjectURL(t);return new Worker(r)}return new Worker(e)}var r=e("../lib/oop"),i=e("../lib/net"),s=e("../lib/event_emitter").EventEmitter,o=e("../config"),f=function(e){e.postMessage||(e=this.$createWorkerFromOldConfig.apply(this,arguments)),this.$worker=e,this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.callbackId=1,this.callbacks={},this.$worker.onmessage=this.onMessage;};(function(){r.implement(this,s),this.$createWorkerFromOldConfig=function(t,n,r,i,s){e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl);if(o.get("packaged")||!e.toUrl)i=i||o.moduleUrl(n,"worker");else {var u=this.$normalizePath;i=i||u(e.toUrl("ace/worker/worker.js",null,"_"));var f={};t.forEach(function(t){f[t]=u(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""));});}return this.$worker=a(i),s&&this.send("importScripts",s),this.$worker.postMessage({init:!0,tlns:f,module:n,classname:r}),this.$worker},this.onMessage=function(e){var t=e.data;switch(t.type){case"event":this._signal(t.name,{data:t.data});break;case"call":var n=this.callbacks[t.id];n&&(n(t.data),delete this.callbacks[t.id]);break;case"error":this.reportError(t.data);break;case"log":window.console&&console.log&&console.log.apply(console,t.data);}},this.reportError=function(e){window.console&&console.error&&console.error(e);},this.$normalizePath=function(e){return i.qualifyURL(e)},this.terminate=function(){this._signal("terminate",{}),this.deltaQueue=null,this.$worker.terminate(),this.$worker=null,this.$doc&&this.$doc.off("change",this.changeListener),this.$doc=null;},this.send=function(e,t){this.$worker.postMessage({command:e,args:t});},this.call=function(e,t,n){if(n){var r=this.callbackId++;this.callbacks[r]=n,t.push(r);}this.send(e,t);},this.emit=function(e,t){try{t.data&&t.data.err&&(t.data.err={message:t.data.err.message,stack:t.data.err.stack,code:t.data.err.code}),this.$worker&&this.$worker.postMessage({event:e,data:{data:t.data}});}catch(n){console.error(n.stack);}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener,!0);},this.changeListener=function(e){this.deltaQueue||(this.deltaQueue=[],setTimeout(this.$sendDeltaQueue,0)),e.action=="insert"?this.deltaQueue.push(e.start,e.lines):this.deltaQueue.push(e.start,e.end);},this.$sendDeltaQueue=function(){var e=this.deltaQueue;if(!e)return;this.deltaQueue=null,e.length>50&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e});};}).call(f.prototype);var l=function(e,t,n){var r=null,i=!1,u=Object.create(s),a=[],l=new f({messageBuffer:a,terminate:function(){},postMessage:function(e){a.push(e);if(!r)return;i?setTimeout(c):c();}});l.setEmitSync=function(e){i=e;};var c=function(){var e=a.shift();e.command?r[e.command].apply(r,e.args):e.event&&u._signal(e.event,e.data);};return u.postMessage=function(e){l.onMessage({data:e});},u.callback=function(e,t){this.postMessage({type:"call",id:t,data:e});},u.emit=function(e,t){this.postMessage({type:"event",name:e,data:t});},o.loadModule(["worker",t],function(e){r=new e[n](u);while(a.length)c();}),l};t.UIWorkerClient=l,t.WorkerClient=f,t.createWorker=a;}),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(e,t,n){var r=e("./range").Range,i=e("./lib/event_emitter").EventEmitter,s=e("./lib/oop"),o=function(e,t,n,r,i,s){var o=this;this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=i,this.othersClass=s,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate,!0),this.$others=r,this.$onCursorChange=function(){setTimeout(function(){o.onCursorChange();});},this.$pos=n;var u=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=u.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange);};((function(){s.implement(this,i),this.setup=function(){var e=this,t=this.doc,n=this.session;this.selectionBefore=n.selection.toJSON(),n.selection.inMultiSelectMode&&n.selection.toSingleRange(),this.pos=t.createAnchor(this.$pos.row,this.$pos.column);var i=this.pos;i.$insertRight=!0,i.detach(),i.markerId=n.addMarker(new r(i.row,i.column,i.row,i.column+this.length),this.mainClass,null,!1),this.others=[],this.$others.forEach(function(n){var r=t.createAnchor(n.row,n.column);r.$insertRight=!0,r.detach(),e.others.push(r);}),n.setUndoSelect(!1);},this.showOtherMarkers=function(){if(this.othersActive)return;var e=this.session,t=this;this.othersActive=!0,this.others.forEach(function(n){n.markerId=e.addMarker(new r(n.row,n.column,n.row,n.column+t.length),t.othersClass,null,!1);});},this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=!1;for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId);},this.onUpdate=function(e){if(this.$updating)return this.updateAnchors(e);var t=e;if(t.start.row!==t.end.row)return;if(t.start.row!==this.pos.row)return;this.$updating=!0;var n=e.action==="insert"?t.end.column-t.start.column:t.start.column-t.end.column,i=t.start.column>=this.pos.column&&t.start.column<=this.pos.column+this.length+1,s=t.start.column-this.pos.column;this.updateAnchors(e),i&&(this.length+=n);if(i&&!this.session.$fromUndo)if(e.action==="insert")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.insertMergedLines(a,e.lines);}else if(e.action==="remove")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.remove(new r(a.row,a.column,a.row,a.column-n));}this.$updating=!1,this.updateMarkers();},this.updateAnchors=function(e){this.pos.onChange(e);for(var t=this.others.length;t--;)this.others[t].onChange(e);this.updateMarkers();},this.updateMarkers=function(){if(this.$updating)return;var e=this,t=this.session,n=function(n,i){t.removeMarker(n.markerId),n.markerId=t.addMarker(new r(n.row,n.column,n.row,n.column+e.length),i,null,!1);};n(this.pos,this.mainClass);for(var i=this.others.length;i--;)n(this.others[i],this.othersClass);},this.onCursorChange=function(e){if(this.$updating||!this.session)return;var t=this.session.selection.getCursor();t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e));},this.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId),this.hideOtherMarkers(),this.doc.off("change",this.$onUpdate),this.session.selection.off("changeCursor",this.$onCursorChange),this.session.setUndoSelect(!0),this.session=null;},this.cancel=function(){if(this.$undoStackDepth===-1)return;var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth;for(var n=0;n<t;n++)e.undo(this.session,!0);this.selectionBefore&&this.session.selection.fromJSON(this.selectionBefore);};})).call(o.prototype),t.PlaceHolder=o;}),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){function s(e,t){return e.row==t.row&&e.column==t.column}function o(e){var t=e.domEvent,n=t.altKey,o=t.shiftKey,u=t.ctrlKey,a=e.getAccelKey(),f=e.getButton();u&&i.isMac&&(f=t.button);if(e.editor.inMultiSelectMode&&f==2){e.editor.textInput.onContextMenu(e.domEvent);return}if(!u&&!n&&!a){f===0&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode();return}if(f!==0)return;var l=e.editor,c=l.selection,h=l.inMultiSelectMode,p=e.getDocumentPosition(),d=c.getCursor(),v=e.inSelection()||c.isEmpty()&&s(p,d),m=e.x,g=e.y,y=function(e){m=e.clientX,g=e.clientY;},b=l.session,w=l.renderer.pixelToScreenCoordinates(m,g),E=w,S;if(l.$mouseHandler.$enableJumpToDef)u&&n||a&&n?S=o?"block":"add":n&&l.$blockSelectEnabled&&(S="block");else if(a&&!n){S="add";if(!h&&o)return}else n&&l.$blockSelectEnabled&&(S="block");S&&i.isMac&&t.ctrlKey&&l.$mouseHandler.cancelContextMenu();if(S=="add"){if(!h&&v)return;if(!h){var x=c.toOrientedRange();l.addSelectionMarker(x);}var T=c.rangeList.rangeAtPoint(p);l.inVirtualSelectionMode=!0,o&&(T=null,x=c.ranges[0]||x,l.removeSelectionMarker(x)),l.once("mouseup",function(){var e=c.toOrientedRange();T&&e.isEmpty()&&s(T.cursor,e.cursor)?c.substractPoint(e.cursor):(o?c.substractPoint(x.cursor):x&&(l.removeSelectionMarker(x),c.addRange(x)),c.addRange(e)),l.inVirtualSelectionMode=!1;});}else if(S=="block"){e.stop(),l.inVirtualSelectionMode=!0;var N,C=[],k=function(){var e=l.renderer.pixelToScreenCoordinates(m,g),t=b.screenToDocumentPosition(e.row,e.column,e.offsetX);if(s(E,e)&&s(t,c.lead))return;E=e,l.selection.moveToPosition(t),l.renderer.scrollCursorIntoView(),l.removeSelectionMarkers(C),C=c.rectangularRangeBlock(E,w),l.$mouseHandler.$clickSelection&&C.length==1&&C[0].isEmpty()&&(C[0]=l.$mouseHandler.$clickSelection.clone()),C.forEach(l.addSelectionMarker,l),l.updateSelectionMarkers();};h&&!a?c.toSingleRange():!h&&a&&(N=c.toOrientedRange(),l.addSelectionMarker(N)),o?w=b.documentToScreenPosition(c.lead):c.moveToPosition(p),E={row:-1,column:-1};var L=function(e){k(),clearInterval(O),l.removeSelectionMarkers(C),C.length||(C=[c.toOrientedRange()]),N&&(l.removeSelectionMarker(N),c.toSingleRange(N));for(var t=0;t<C.length;t++)c.addRange(C[t]);l.inVirtualSelectionMode=!1,l.$mouseHandler.$clickSelection=null;},A=k;r.capture(l.container,y,L);var O=setInterval(function(){A();},20);return e.preventDefault()}}var r=e("../lib/event"),i=e("../lib/useragent");t.onMouseDown=o;}),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(e,t,n){t.defaultCommands=[{name:"addCursorAbove",description:"Add cursor above",exec:function(e){e.selectMoreLines(-1);},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelow",description:"Add cursor below",exec:function(e){e.selectMoreLines(1);},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorAboveSkipCurrent",description:"Add cursor above (skip current)",exec:function(e){e.selectMoreLines(-1,!0);},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelowSkipCurrent",description:"Add cursor below (skip current)",exec:function(e){e.selectMoreLines(1,!0);},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreBefore",description:"Select more before",exec:function(e){e.selectMore(-1);},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreAfter",description:"Select more after",exec:function(e){e.selectMore(1);},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextBefore",description:"Select next before",exec:function(e){e.selectMore(-1,!0);},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextAfter",description:"Select next after",exec:function(e){e.selectMore(1,!0);},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"toggleSplitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.rangeCount>1?e.multiSelect.joinSelections():e.multiSelect.splitIntoLines();},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:!0},{name:"splitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.splitIntoLines();},readOnly:!0},{name:"alignCursors",description:"Align cursors",exec:function(e){e.alignCursors();},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",description:"Find all",exec:function(e){e.findAll();},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:!0}],t.multiSelectCommands=[{name:"singleSelection",description:"Single selection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode();},scrollIntoView:"cursor",readOnly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}];var r=e("../keyboard/hash_handler").HashHandler;t.keyboardHandler=new r(t.multiSelectCommands);}),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],function(e,t,n){function h(e,t,n){return c.$options.wrap=!0,c.$options.needle=t,c.$options.backwards=n==-1,c.find(e)}function v(e,t){return e.row==t.row&&e.column==t.column}function m(e){if(e.$multiselectOnSessionChange)return;e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),e.$multiselectOnSessionChange=t.onSessionChange.bind(e),e.$checkMultiselectChange=e.$checkMultiselectChange.bind(e),e.$multiselectOnSessionChange(e),e.on("changeSession",e.$multiselectOnSessionChange),e.on("mousedown",o),e.commands.addCommands(f.defaultCommands),g(e);}function g(e){function r(t){n&&(e.renderer.setMouseCursor(""),n=!1);}if(!e.textInput)return;var t=e.textInput.getElement(),n=!1;u.addListener(t,"keydown",function(t){var i=t.keyCode==18&&!(t.ctrlKey||t.shiftKey||t.metaKey);e.$blockSelectEnabled&&i?n||(e.renderer.setMouseCursor("crosshair"),n=!0):n&&r();},e),u.addListener(t,"keyup",r,e),u.addListener(t,"blur",r,e);}var r=e("./range_list").RangeList,i=e("./range").Range,s=e("./selection").Selection,o=e("./mouse/multi_select_handler").onMouseDown,u=e("./lib/event"),a=e("./lib/lang"),f=e("./commands/multi_select_commands");t.commands=f.defaultCommands.concat(f.multiSelectCommands);var l=e("./search").Search,c=new l,p=e("./edit_session").EditSession;((function(){this.getSelectionMarkers=function(){return this.$selectionMarkers};})).call(p.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(!e)return;if(!this.inMultiSelectMode&&this.rangeCount===0){var n=this.toOrientedRange();this.rangeList.add(n),this.rangeList.add(e);if(this.rangeList.ranges.length!=2)return this.rangeList.removeAll(),t||this.fromOrientedRange(e);this.rangeList.removeAll(),this.rangeList.add(n),this.$onAddRange(n);}e.cursor||(e.cursor=e.end);var r=this.rangeList.add(e);return this.$onAddRange(e),r.length&&this.$onRemoveRange(r),this.rangeCount>1&&!this.inMultiSelectMode&&(this._signal("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)},this.toSingleRange=function(e){e=e||this.ranges[0];var t=this.rangeList.removeAll();t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e);},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e);if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge();e.length&&this.$onRemoveRange(e);},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._signal("addRange",{range:e});},this.$onRemoveRange=function(e){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop();e.push(t),this.rangeCount=0;}for(var n=e.length;n--;){var r=this.ranges.indexOf(e[n]);this.ranges.splice(r,1);}this._signal("removeRange",{ranges:e}),this.rangeCount===0&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._signal("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),t=t||this.ranges[0],t&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t);},this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new r,this.ranges=[],this.rangeCount=0;},this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]},this.splitIntoLines=function(){var e=this.ranges.length?this.ranges:[this.getRange()],t=[];for(var n=0;n<e.length;n++){var r=e[n],s=r.start.row,o=r.end.row;if(s===o)t.push(r.clone());else {t.push(new i(s,r.start.column,s,this.session.getLine(s).length));while(++s<o)t.push(this.getLineRange(s,!0));t.push(new i(o,0,o,r.end.column));}n==0&&!this.isBackwards()&&(t=t.reverse());}this.toSingleRange();for(var n=t.length;n--;)this.addRange(t[n]);},this.joinSelections=function(){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start);},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start);}else {var r=this.session.documentToScreenPosition(this.cursor),s=this.session.documentToScreenPosition(this.anchor),o=this.rectangularRangeBlock(r,s);o.forEach(this.addRange,this);}},this.rectangularRangeBlock=function(e,t,n){var r=[],s=e.column<t.column;if(s)var o=e.column,u=t.column,a=e.offsetX,f=t.offsetX;else var o=t.column,u=e.column,a=t.offsetX,f=e.offsetX;var l=e.row<t.row;if(l)var c=e.row,h=t.row;else var c=t.row,h=e.row;o<0&&(o=0),c<0&&(c=0),c==h&&(n=!0);var p;for(var d=c;d<=h;d++){var m=i.fromPoints(this.session.screenToDocumentPosition(d,o,a),this.session.screenToDocumentPosition(d,u,f));if(m.isEmpty()){if(p&&v(m.end,p))break;p=m.end;}m.cursor=s?m.start:m.end,r.push(m);}l&&r.reverse();if(!n){var g=r.length-1;while(r[g].isEmpty()&&g>0)g--;if(g>0){var y=0;while(r[y].isEmpty())y++;}for(var b=g;b>=y;b--)r[b].isEmpty()&&r.splice(b,1);}return r};}.call(s.prototype);var d=e("./editor").Editor;((function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers();},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end);var t=this.getSelectionStyle();return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(!e.marker)return;this.session.removeMarker(e.marker);var t=this.session.$selectionMarkers.indexOf(e);t!=-1&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length;},this.removeSelectionMarkers=function(e){var t=this.session.$selectionMarkers;for(var n=e.length;n--;){var r=e[n];if(!r.marker)continue;this.session.removeMarker(r.marker);var i=t.indexOf(r);i!=-1&&t.splice(i,1);}this.session.selectionMarkerCount=t.length;},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers();},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers();},this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return;this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(f.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers();},this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(f.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers(),this._emit("changeSelection");},this.$onMultiSelectExec=function(e){var t=e.command,n=e.editor;if(!n.multiSelect)return;if(!t.multiSelectAction){var r=t.exec(n,e.args||{});n.multiSelect.addRange(n.multiSelect.toOrientedRange()),n.multiSelect.mergeOverlappingRanges();}else t.multiSelectAction=="forEach"?r=n.forEachSelection(t,e.args):t.multiSelectAction=="forEachLine"?r=n.forEachSelection(t,e.args,!0):t.multiSelectAction=="single"?(n.exitMultiSelectMode(),r=t.exec(n,e.args||{})):r=t.multiSelectAction(n,e.args||{});return r},this.forEachSelection=function(e,t,n){if(this.inVirtualSelectionMode)return;var r=n&&n.keepOrder,i=n==1||n&&n.$byLines,o=this.session,u=this.selection,a=u.rangeList,f=(r?u:a).ranges,l;if(!f.length)return e.exec?e.exec(this,t||{}):e(this,t||{});var c=u._eventRegistry;u._eventRegistry={};var h=new s(o);this.inVirtualSelectionMode=!0;for(var p=f.length;p--;){if(i)while(p>0&&f[p].start.row==f[p-1].end.row)p--;h.fromOrientedRange(f[p]),h.index=p,this.selection=o.selection=h;var d=e.exec?e.exec(this,t||{}):e(this,t||{});!l&&d!==undefined&&(l=d),h.toOrientedRange(f[p]);}h.detach(),this.selection=o.selection=u,this.inVirtualSelectionMode=!1,u._eventRegistry=c,u.mergeOverlappingRanges(),u.ranges[0]&&u.fromOrientedRange(u.ranges[0]);var v=this.renderer.$scrollAnimation;return this.onCursorChange(),this.onSelectionChange(),v&&v.from==v.to&&this.renderer.animateScrolling(v.from),l},this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange();},this.getSelectedText=function(){var e="";if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var t=this.multiSelect.rangeList.ranges,n=[];for(var r=0;r<t.length;r++)n.push(this.session.getTextRange(t[r]));var i=this.session.getDocument().getNewLineCharacter();e=n.join(i),e.length==(n.length-1)*i.length&&(e="");}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()));return e},this.$checkMultiselectChange=function(e,t){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var n=this.multiSelect.ranges[0];if(this.multiSelect.isEmpty()&&t==this.multiSelect.anchor)return;var r=t==this.multiSelect.anchor?n.cursor==n.start?n.end:n.start:n.cursor;r.row!=t.row||this.session.$clipPositionToDocument(r.row,r.column).column!=t.column?this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()):this.multiSelect.mergeOverlappingRanges();}},this.findAll=function(e,t,n){t=t||{},t.needle=e||t.needle;if(t.needle==undefined){var r=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange();t.needle=this.session.getTextRange(r);}this.$search.set(t);var i=this.$search.findAll(this.session);if(!i.length)return 0;var s=this.multiSelect;n||s.toSingleRange(i[0]);for(var o=i.length;o--;)s.addRange(i[o],!0);return r&&s.rangeList.rangeAtPoint(r.start)&&s.addRange(r,!0),i.length},this.selectMoreLines=function(e,t){var n=this.selection.toOrientedRange(),r=n.cursor==n.end,s=this.session.documentToScreenPosition(n.cursor);this.selection.$desiredColumn&&(s.column=this.selection.$desiredColumn);var o=this.session.screenToDocumentPosition(s.row+e,s.column);if(!n.isEmpty())var u=this.session.documentToScreenPosition(r?n.end:n.start),a=this.session.screenToDocumentPosition(u.row+e,u.column);else var a=o;if(r){var f=i.fromPoints(o,a);f.cursor=f.start;}else {var f=i.fromPoints(a,o);f.cursor=f.end;}f.desiredColumn=s.column;if(!this.selection.inMultiSelectMode)this.selection.addRange(n);else if(t)var l=n.cursor;this.selection.addRange(f),l&&this.selection.substractPoint(l);},this.transposeSelections=function(e){var t=this.session,n=t.multiSelect,r=n.ranges;for(var i=r.length;i--;){var s=r[i];if(s.isEmpty()){var o=t.getWordRange(s.start.row,s.start.column);s.start.row=o.start.row,s.start.column=o.start.column,s.end.row=o.end.row,s.end.column=o.end.column;}}n.mergeOverlappingRanges();var u=[];for(var i=r.length;i--;){var s=r[i];u.unshift(t.getTextRange(s));}e<0?u.unshift(u.pop()):u.push(u.shift());for(var i=r.length;i--;){var s=r[i],o=s.clone();t.replace(s,u[i]),s.start.row=o.start.row,s.start.column=o.start.column;}n.fromOrientedRange(n.ranges[0]);},this.selectMore=function(e,t,n){var r=this.session,i=r.multiSelect,s=i.toOrientedRange();if(s.isEmpty()){s=r.getWordRange(s.start.row,s.start.column),s.cursor=e==-1?s.start:s.end,this.multiSelect.addRange(s);if(n)return}var o=r.getTextRange(s),u=h(r,o,e);u&&(u.cursor=e==-1?u.start:u.end,this.session.unfold(u),this.multiSelect.addRange(u),this.renderer.scrollCursorIntoView(null,.5)),t&&this.multiSelect.substractPoint(s.cursor);},this.alignCursors=function(){var e=this.session,t=e.multiSelect,n=t.ranges,r=-1,s=n.filter(function(e){if(e.cursor.row==r)return !0;r=e.cursor.row;});if(!n.length||s.length==n.length-1){var o=this.selection.getRange(),u=o.start.row,f=o.end.row,l=u==f;if(l){var c=this.session.getLength(),h;do h=this.session.getLine(f);while(/[=:]/.test(h)&&++f<c);do h=this.session.getLine(u);while(/[=:]/.test(h)&&--u>0);u<0&&(u=0),f>=c&&(f=c-1);}var p=this.session.removeFullLines(u,f);p=this.$reAlignText(p,l),this.session.insert({row:u,column:0},p.join("\n")+"\n"),l||(o.start.column=0,o.end.column=p[p.length-1].length),this.selection.setRange(o);}else {s.forEach(function(e){t.substractPoint(e.cursor);});var d=0,v=Infinity,m=n.map(function(t){var n=t.cursor,r=e.getLine(n.row),i=r.substr(n.column).search(/\S/g);return i==-1&&(i=0),n.column>d&&(d=n.column),i<v&&(v=i),i});n.forEach(function(t,n){var r=t.cursor,s=d-r.column,o=m[n]-v;s>o?e.insert(r,a.stringRepeat(" ",s-o)):e.remove(new i(r.row,r.column,r.row,r.column-s+o)),t.start.column=t.end.column=d,t.start.row=t.end.row=r.row,t.cursor=t.end;}),t.fromOrientedRange(n[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers();}},this.$reAlignText=function(e,t){function u(e){return a.stringRepeat(" ",e)}function f(e){return e[2]?u(i)+e[2]+u(s-e[2].length+o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function l(e){return e[2]?u(i+s-e[2].length)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function c(e){return e[2]?u(i)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}var n=!0,r=!0,i,s,o;return e.map(function(e){var t=e.match(/(\s*)(.*?)(\s*)([=:].*)/);return t?i==null?(i=t[1].length,s=t[2].length,o=t[3].length,t):(i+s+o!=t[1].length+t[2].length+t[3].length&&(r=!1),i!=t[1].length&&(n=!1),i>t[1].length&&(i=t[1].length),s<t[2].length&&(s=t[2].length),o>t[3].length&&(o=t[3].length),t):[e]}).map(t?f:n?r?l:f:c)};})).call(d.prototype),t.onSessionChange=function(e){var t=e.session;t&&!t.multiSelect&&(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t&&t.multiSelect;var n=e.oldSession;n&&(n.multiSelect.off("addRange",this.$onAddRange),n.multiSelect.off("removeRange",this.$onRemoveRange),n.multiSelect.off("multiSelect",this.$onMultiSelect),n.multiSelect.off("singleSelect",this.$onSingleSelect),n.multiSelect.lead.off("change",this.$checkMultiselectChange),n.multiSelect.anchor.off("change",this.$checkMultiselectChange)),t&&(t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),t.multiSelect.lead.on("change",this.$checkMultiselectChange),t.multiSelect.anchor.on("change",this.$checkMultiselectChange)),t&&this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect());},t.MultiSelect=m,e("./config").defineOptions(d.prototype,"editor",{enableMultiselect:{set:function(e){m(this),e?(this.on("changeSession",this.$multiselectOnSessionChange),this.on("mousedown",o)):(this.off("changeSession",this.$multiselectOnSessionChange),this.off("mousedown",o));},value:!0},enableBlockSelect:{set:function(e){this.$blockSelectEnabled=e;},value:!0}});}),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,t,n){var r=e("../../range").Range,i=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?"start":t=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(r)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,t,n){var i=/\S/,s=e.getLine(t),o=s.search(i);if(o==-1)return;var u=n||s.length,a=e.getLength(),f=t,l=t;while(++t<a){var c=e.getLine(t).search(i);if(c==-1)continue;if(c<=o){var h=e.getTokenAt(t,0);if(!h||h.type!=="string")break}l=t;}if(l>f){var p=e.getLine(l).length;return new r(f,u,l,p)}},this.openingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i+1},u=e.$findClosingBracket(t,o,s);if(!u)return;var a=e.foldWidgets[u.row];return a==null&&(a=e.getFoldWidget(u.row)),a=="start"&&u.row>o.row&&(u.row--,u.column=e.getLine(u.row).length),r.fromPoints(o,u)},this.closingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i},u=e.$findOpeningBracket(t,o);if(!u)return;return u.column++,o.column--,r.fromPoints(u,o)};}).call(i.prototype);}),ace.define("ace/line_widgets",["require","exports","module","ace/lib/dom"],function(e,t,n){function i(e){this.session=e,this.session.widgetManager=this,this.session.getRowLength=this.getRowLength,this.session.$getWidgetScreenLength=this.$getWidgetScreenLength,this.updateOnChange=this.updateOnChange.bind(this),this.renderWidgets=this.renderWidgets.bind(this),this.measureWidgets=this.measureWidgets.bind(this),this.session._changedWidgets=[],this.$onChangeEditor=this.$onChangeEditor.bind(this),this.session.on("change",this.updateOnChange),this.session.on("changeFold",this.updateOnFold),this.session.on("changeEditor",this.$onChangeEditor);}var r=e("./lib/dom");((function(){this.getRowLength=function(e){var t;return this.lineWidgets?t=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0:t=0,!this.$useWrapMode||!this.$wrapData[e]?1+t:this.$wrapData[e].length+1+t},this.$getWidgetScreenLength=function(){var e=0;return this.lineWidgets.forEach(function(t){t&&t.rowCount&&!t.hidden&&(e+=t.rowCount);}),e},this.$onChangeEditor=function(e){this.attach(e.editor);},this.attach=function(e){e&&e.widgetManager&&e.widgetManager!=this&&e.widgetManager.detach();if(this.editor==e)return;this.detach(),this.editor=e,e&&(e.widgetManager=this,e.renderer.on("beforeRender",this.measureWidgets),e.renderer.on("afterRender",this.renderWidgets));},this.detach=function(e){var t=this.editor;if(!t)return;this.editor=null,t.widgetManager=null,t.renderer.off("beforeRender",this.measureWidgets),t.renderer.off("afterRender",this.renderWidgets);var n=this.session.lineWidgets;n&&n.forEach(function(e){e&&e.el&&e.el.parentNode&&(e._inDocument=!1,e.el.parentNode.removeChild(e.el));});},this.updateOnFold=function(e,t){var n=t.lineWidgets;if(!n||!e.action)return;var r=e.data,i=r.start.row,s=r.end.row,o=e.action=="add";for(var u=i+1;u<s;u++)n[u]&&(n[u].hidden=o);n[s]&&(o?n[i]?n[s].hidden=o:n[i]=n[s]:(n[i]==n[s]&&(n[i]=undefined),n[s].hidden=o));},this.updateOnChange=function(e){var t=this.session.lineWidgets;if(!t)return;var n=e.start.row,r=e.end.row-n;if(r!==0)if(e.action=="remove"){var i=t.splice(n+1,r);!t[n]&&i[i.length-1]&&(t[n]=i.pop()),i.forEach(function(e){e&&this.removeLineWidget(e);},this),this.$updateRows();}else {var s=new Array(r);t[n]&&t[n].column!=null&&e.start.column>t[n].column&&n++,s.unshift(n,0),t.splice.apply(t,s),this.$updateRows();}},this.$updateRows=function(){var e=this.session.lineWidgets;if(!e)return;var t=!0;e.forEach(function(e,n){if(e){t=!1,e.row=n;while(e.$oldWidget)e.$oldWidget.row=n,e=e.$oldWidget;}}),t&&(this.session.lineWidgets=null);},this.$registerLineWidget=function(e){this.session.lineWidgets||(this.session.lineWidgets=new Array(this.session.getLength()));var t=this.session.lineWidgets[e.row];return t&&(e.$oldWidget=t,t.el&&t.el.parentNode&&(t.el.parentNode.removeChild(t.el),t._inDocument=!1)),this.session.lineWidgets[e.row]=e,e},this.addLineWidget=function(e){this.$registerLineWidget(e),e.session=this.session;if(!this.editor)return e;var t=this.editor.renderer;e.html&&!e.el&&(e.el=r.createElement("div"),e.el.innerHTML=e.html),e.el&&(r.addCssClass(e.el,"ace_lineWidgetContainer"),e.el.style.position="absolute",e.el.style.zIndex=5,t.container.appendChild(e.el),e._inDocument=!0,e.coverGutter||(e.el.style.zIndex=3),e.pixelHeight==null&&(e.pixelHeight=e.el.offsetHeight)),e.rowCount==null&&(e.rowCount=e.pixelHeight/t.layerConfig.lineHeight);var n=this.session.getFoldAt(e.row,0);e.$fold=n;if(n){var i=this.session.lineWidgets;e.row==n.end.row&&!i[n.start.row]?i[n.start.row]=e:e.hidden=!0;}return this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows(),this.renderWidgets(null,t),this.onWidgetChanged(e),e},this.removeLineWidget=function(e){e._inDocument=!1,e.session=null,e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el);if(e.editor&&e.editor.destroy)try{e.editor.destroy();}catch(t){}if(this.session.lineWidgets){var n=this.session.lineWidgets[e.row];if(n==e)this.session.lineWidgets[e.row]=e.$oldWidget,e.$oldWidget&&this.onWidgetChanged(e.$oldWidget);else while(n){if(n.$oldWidget==e){n.$oldWidget=e.$oldWidget;break}n=n.$oldWidget;}}this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows();},this.getWidgetsAtRow=function(e){var t=this.session.lineWidgets,n=t&&t[e],r=[];while(n)r.push(n),n=n.$oldWidget;return r},this.onWidgetChanged=function(e){this.session._changedWidgets.push(e),this.editor&&this.editor.renderer.updateFull();},this.measureWidgets=function(e,t){var n=this.session._changedWidgets,r=t.layerConfig;if(!n||!n.length)return;var i=Infinity;for(var s=0;s<n.length;s++){var o=n[s];if(!o||!o.el)continue;if(o.session!=this.session)continue;if(!o._inDocument){if(this.session.lineWidgets[o.row]!=o)continue;o._inDocument=!0,t.container.appendChild(o.el);}o.h=o.el.offsetHeight,o.fixedWidth||(o.w=o.el.offsetWidth,o.screenWidth=Math.ceil(o.w/r.characterWidth));var u=o.h/r.lineHeight;o.coverLine&&(u-=this.session.getRowLineCount(o.row),u<0&&(u=0)),o.rowCount!=u&&(o.rowCount=u,o.row<i&&(i=o.row));}i!=Infinity&&(this.session._emit("changeFold",{data:{start:{row:i}}}),this.session.lineWidgetWidth=null),this.session._changedWidgets=[];},this.renderWidgets=function(e,t){var n=t.layerConfig,r=this.session.lineWidgets;if(!r)return;var i=Math.min(this.firstRow,n.firstRow),s=Math.max(this.lastRow,n.lastRow,r.length);while(i>0&&!r[i])i--;this.firstRow=n.firstRow,this.lastRow=n.lastRow,t.$cursorLayer.config=n;for(var o=i;o<=s;o++){var u=r[o];if(!u||!u.el)continue;if(u.hidden){u.el.style.top=-100-(u.pixelHeight||0)+"px";continue}u._inDocument||(u._inDocument=!0,t.container.appendChild(u.el));var a=t.$cursorLayer.getPixelPosition({row:o,column:0},!0).top;u.coverLine||(a+=n.lineHeight*this.session.getRowLineCount(u.row)),u.el.style.top=a-n.offset+"px";var f=u.coverGutter?0:t.gutterWidth;u.fixedWidth||(f-=t.scrollLeft),u.el.style.left=f+"px",u.fullWidth&&u.screenWidth&&(u.el.style.minWidth=n.width+2*n.padding+"px"),u.fixedWidth?u.el.style.right=t.scrollBar.getWidth()+"px":u.el.style.right="";}};})).call(i.prototype),t.LineWidgets=i;}),ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range"],function(e,t,n){function o(e,t,n){var r=0,i=e.length-1;while(r<=i){var s=r+i>>1,o=n(t,e[s]);if(o>0)r=s+1;else {if(!(o<0))return s;i=s-1;}}return -(r+1)}function u(e,t,n){var r=e.getAnnotations().sort(s.comparePoints);if(!r.length)return;var i=o(r,{row:t,column:-1},s.comparePoints);i<0&&(i=-i-1),i>=r.length?i=n>0?0:r.length-1:i===0&&n<0&&(i=r.length-1);var u=r[i];if(!u||!n)return;if(u.row===t){do u=r[i+=n];while(u&&u.row===t);if(!u)return r.slice()}var a=[];t=u.row;do a[n<0?"unshift":"push"](u),u=r[i+=n];while(u&&u.row==t);return a.length&&a}var r=e("../line_widgets").LineWidgets,i=e("../lib/dom"),s=e("../range").Range;t.showErrorMarker=function(e,t){var n=e.session;n.widgetManager||(n.widgetManager=new r(n),n.widgetManager.attach(e));var s=e.getCursorPosition(),o=s.row,a=n.widgetManager.getWidgetsAtRow(o).filter(function(e){return e.type=="errorMarker"})[0];a?a.destroy():o-=t;var f=u(n,o,t),l;if(f){var c=f[0];s.column=(c.pos&&typeof c.column!="number"?c.pos.sc:c.column)||0,s.row=c.row,l=e.renderer.$gutterLayer.$annotations[s.row];}else {if(a)return;l={text:["Looks good!"],className:"ace_ok"};}e.session.unfold(s.row),e.selection.moveToPosition(s);var h={row:s.row,fixedWidth:!0,coverGutter:!0,el:i.createElement("div"),type:"errorMarker"},p=h.el.appendChild(i.createElement("div")),d=h.el.appendChild(i.createElement("div"));d.className="error_widget_arrow "+l.className;var v=e.renderer.$cursorLayer.getPixelPosition(s).left;d.style.left=v+e.renderer.gutterWidth-5+"px",h.el.className="error_widget_wrapper",p.className="error_widget "+l.className,p.innerHTML=l.text.join("<br>"),p.appendChild(i.createElement("div"));var m=function(e,t,n){if(t===0&&(n==="esc"||n==="return"))return h.destroy(),{command:"null"}};h.destroy=function(){if(e.$mouseHandler.isMousePressed)return;e.keyBinding.removeKeyboardHandler(m),n.widgetManager.removeLineWidget(h),e.off("changeSelection",h.destroy),e.off("changeSession",h.destroy),e.off("mouseup",h.destroy),e.off("change",h.destroy);},e.keyBinding.addKeyboardHandler(m),e.on("changeSelection",h.destroy),e.on("changeSession",h.destroy),e.on("mouseup",h.destroy),e.on("change",h.destroy),e.session.widgetManager.addLineWidget(h),h.el.onmousedown=e.focus.bind(e),e.renderer.scrollCursorIntoView(null,.5,{bottom:h.el.offsetHeight});},i.importCssString("\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n","error_marker.css",!1);}),ace.define("ace/ace",["require","exports","module","ace/lib/dom","ace/lib/event","ace/range","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config","ace/loader_build"],function(e,t,n){e("./loader_build")(t);var r=e("./lib/dom"),i=e("./lib/event"),s=e("./range").Range,o=e("./editor").Editor,u=e("./edit_session").EditSession,a=e("./undomanager").UndoManager,f=e("./virtual_renderer").VirtualRenderer;e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.edit=function(e,n){if(typeof e=="string"){var s=e;e=document.getElementById(s);if(!e)throw new Error("ace.edit can't find div #"+s)}if(e&&e.env&&e.env.editor instanceof o)return e.env.editor;var u="";if(e&&/input|textarea/i.test(e.tagName)){var a=e;u=a.value,e=r.createElement("pre"),a.parentNode.replaceChild(e,a);}else e&&(u=e.textContent,e.innerHTML="");var l=t.createEditSession(u),c=new o(new f(e),l,n),h={document:l,editor:c,onResize:c.resize.bind(c,null)};return a&&(h.textarea=a),i.addListener(window,"resize",h.onResize),c.on("destroy",function(){i.removeListener(window,"resize",h.onResize),h.editor.container.env=null;}),c.container.env=c.env=h,c},t.createEditSession=function(e,t){var n=new u(e,t);return n.setUndoManager(new a),n},t.Range=s,t.Editor=o,t.EditSession=u,t.UndoManager=a,t.VirtualRenderer=f,t.version=t.config.version;});            (function() {
                ace.require(["ace/ace"], function(a) {
                    if (a) {
                        a.config.init(true);
                        a.define = ace.define;
                    }
                    if (!window.ace)
                        window.ace = a;
                    for (var key in a) if (a.hasOwnProperty(key))
                        window.ace[key] = a[key];
                    window.ace["default"] = window.ace;
                    if (typeof module == "object" && typeof exports == "object" && module) {
                        module.exports = window.ace;
                    }
                });
            })();

ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop");e("../lib/lang");var s=e("./text_highlight_rules").TextHighlightRules,o=t.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",u=t.supportFunction="rgb|rgba|url|attr|counter|counters",a=t.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",f=t.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",l=t.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",c=t.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",h=t.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",p=t.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",d=function(){var e=this.createKeywordMapper({"support.function":u,"support.constant":a,"support.type":o,"support.constant.color":f,"support.constant.fonts":l},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:c},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+c+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:c},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:h},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:p},{include:"url"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules();};r.inherits(d,s),t.CssHighlightRules=d;}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){var r=e("../range").Range,i=function(){};((function(){this.checkOutdent=function(e,t){return /^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u);},this.$getIndent=function(e){return e.match(/^\s*/)[0]};})).call(i.prototype),t.MatchingBraceOutdent=i;}),ace.define("ace/mode/css_completions",["require","exports","module"],function(e,t,n){var r={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,"double":2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{"default":1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},"float":{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,"static":1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},i=function(){};((function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var e=document.createElement("c").style;for(var t in e){if(typeof e[t]!="string")continue;var n=t.replace(/[A-Z]/g,function(e){return "-"+e.toLowerCase()});r.hasOwnProperty(n)||(r[n]=1);}}this.completionsDefined=!0;},this.getCompletions=function(e,t,n,r){this.completionsDefined||this.defineCompletions();if(e==="ruleset"||t.$mode.$id=="ace/mode/scss"){var i=t.getLine(n.row).substr(0,n.column),s=/\([^)]*$/.test(i);return s&&(i=i.substr(i.lastIndexOf("(")+1)),/:[^;]+$/.test(i)?(/([\w\-]+):[^:]*$/.test(i),this.getPropertyValueCompletions(e,t,n,r)):this.getPropertyCompletions(e,t,n,r,s)}return []},this.getPropertyCompletions=function(e,t,n,i,s){s=s||!1;var o=Object.keys(r);return o.map(function(e){return {caption:e,snippet:e+": $0"+(s?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(e,t,n,i){var s=t.getLine(n.row).substr(0,n.column),o=(/([\w\-]+):[^:]*$/.exec(s)||{})[1];if(!o)return [];var u=[];return o in r&&typeof r[o]=="object"&&(u=Object.keys(r[o])),u.map(function(e){return {caption:e,snippet:e,meta:"property value",score:1e6}})};})).call(i.prototype),t.CssCompletions=i;}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(e,t,n){var r=e("../../lib/oop");e("../behaviour").Behaviour;var s=e("./cstyle").CstyleBehaviour,o=e("../../token_iterator").TokenIterator,u=function(){this.inherit(s),this.add("colon","insertion",function(e,t,n,r,i){if(i===":"&&n.selection.isEmpty()){var s=n.getCursorPosition(),u=new o(r,s.row,s.column),a=u.getCurrentToken();a&&a.value.match(/\s+/)&&(a=u.stepBackward());if(a&&a.type==="support.type"){var f=r.doc.getLine(s.row),l=f.substring(s.column,s.column+1);if(l===":")return {text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(f.substring(s.column)))return {text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s===":"){var u=n.getCursorPosition(),a=new o(r,u.row,u.column),f=a.getCurrentToken();f&&f.value.match(/\s+/)&&(f=a.stepBackward());if(f&&f.type==="support.type"){var l=r.doc.getLine(i.start.row),c=l.substring(i.end.column,i.end.column+1);if(c===";")return i.end.column++,i}}}),this.add("semicolon","insertion",function(e,t,n,r,i){if(i===";"&&n.selection.isEmpty()){var s=n.getCursorPosition(),o=r.doc.getLine(s.row),u=o.substring(s.column,s.column+1);if(u===";")return {text:"",selection:[1,1]}}}),this.add("!important","insertion",function(e,t,n,r,i){if(i==="!"&&n.selection.isEmpty()){var s=n.getCursorPosition(),o=r.doc.getLine(s.row);if(/^\s*(;|}|$)/.test(o.substring(s.column)))return {text:"!important",selection:[10,10]}}});};r.inherits(u,s),t.CssBehaviour=u;}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)));};r.inherits(o,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return "";var i=this._getFoldWidgetBase(e,t,n);return !i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t;}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)};}.call(o.prototype);}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./css_highlight_rules").CssHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("../worker/worker_client").WorkerClient,a=e("./css_completions").CssCompletions,f=e("./behaviour/css").CssBehaviour,l=e("./folding/cstyle").FoldMode,c=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new f,this.$completer=new a,this.foldingRules=new l;};r.inherits(c,i),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;if(i.length&&i[i.length-1].type=="comment")return r;var s=t.match(/^.*\{\s*$/);return s&&(r+=n),r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n);},this.getCompletions=function(e,t,n,r){return this.$completer.getCompletions(e,t,n,r)},this.createWorker=function(e){var t=new u(["ace"],"ace/mode/css_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("annotate",function(t){e.setAnnotations(t.data);}),t.on("terminate",function(){e.clearAnnotations();}),t},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css";}.call(c.prototype),t.Mode=c;});                (function() {
    ace.require(["ace/mode/css"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();

ace.define("ace/theme/dreamweaver.css",["require","exports","module"],function(e,t,n){n.exports='.ace-dreamweaver .ace_gutter {\n  background: #e8e8e8;\n  color: #333;\n}\n\n.ace-dreamweaver .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-dreamweaver {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-dreamweaver .ace_fold {\n    background-color: #757AD8;\n}\n\n.ace-dreamweaver .ace_cursor {\n  color: black;\n}\n        \n.ace-dreamweaver .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-dreamweaver .ace_storage,\n.ace-dreamweaver .ace_keyword {\n  color: blue;\n}\n\n.ace-dreamweaver .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_invalid {\n  background-color: rgb(153, 0, 0);\n  color: white;\n}\n\n.ace-dreamweaver .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-dreamweaver .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_support.ace_type,\n.ace-dreamweaver .ace_support.ace_class {\n  color: #009;\n}\n\n.ace-dreamweaver .ace_support.ace_php_tag {\n  color: #f00;\n}\n\n.ace-dreamweaver .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-dreamweaver .ace_string {\n  color: #00F;\n}\n\n.ace-dreamweaver .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-dreamweaver .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-dreamweaver .ace_variable {\n  color: #06F\n}\n\n.ace-dreamweaver .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-dreamweaver .ace_entity.ace_name.ace_function {\n  color: #00F;\n}\n\n\n.ace-dreamweaver .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-dreamweaver .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-dreamweaver .ace_gutter-active-line {\n  background-color : #DCDCDC;\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-dreamweaver .ace_meta.ace_tag {\n  color:#009;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {\n  color:#060;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_form {\n  color:#F90;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_image {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_script {\n  color:#900;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_style {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_table {\n  color:#099;\n}\n\n.ace-dreamweaver .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-dreamweaver .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-dreamweaver .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n';}),ace.define("ace/theme/dreamweaver",["require","exports","module","ace/theme/dreamweaver.css","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-dreamweaver",t.cssText=e("./dreamweaver.css");var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass,!1);});                (function() {
                    ace.require(["ace/theme/dreamweaver"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();

var factory = function () {

  /**
   * @method format
   *
   * convert color to format string
   *
   *     // hex
   *     color.format({ r : 255, g : 255, b : 255, a: 1 }, 'hex')  // #FFFFFFFF
   *
   *     // rgb
   *     color.format({ r : 255, g : 255, b : 255 }, 'rgb') // rgba(255, 255, 255, 0.5);
   *
   *     // rgba
   *     color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb') // rgba(255, 255, 255, 0.5);
   *
   * @param {Object} obj  obj has r, g, b and a attributes
   * @param {"hex"/"rgb"} type  format string type
   * @returns {*}
   */
  function format(obj, type) {
    var defaultColor =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : "rgba(0, 0, 0, 0)";

    if (Array.isArray(obj)) {
      obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
    }

    if (type == "hex") {
      return hex(obj);
    } else if (type == "rgb") {
      return rgb(obj, defaultColor);
    } else if (type == "hsl") {
      return hsl(obj);
    }

    return obj;
  }

  function hex(obj) {
    if (Array.isArray(obj)) {
      obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
    }

    var r = obj.r.toString(16);
    if (obj.r < 16) r = "0" + r;

    var g = obj.g.toString(16);
    if (obj.g < 16) g = "0" + g;

    var b = obj.b.toString(16);
    if (obj.b < 16) b = "0" + b;

    var alphaValue = "";
    if (obj.a < 1) {
      var alpha = Math.floor(obj.a * 255);
      var alphaValue = alpha.toString(16);
      if (alpha < 16) alphaValue = "0" + alphaValue;
    }

    return "#" + r + g + b + alphaValue;
  }

  function rgb(obj) {
    var defaultColor =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "rgba(0, 0, 0, 0)";

    if (Array.isArray(obj)) {
      obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
    }

    if (typeof obj == "undefined") {
      return undefined;
    }

    if (obj.a == 1 || typeof obj.a == "undefined") {
      if (isNaN(obj.r)) {
        return defaultColor;
      }
      return "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")";
    } else {
      return "rgba(" + obj.r + "," + obj.g + "," + obj.b + "," + obj.a + ")";
    }
  }

  function hsl(obj) {
    if (Array.isArray(obj)) {
      obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
    }

    if (obj.a == 1 || typeof obj.a == "undefined") {
      return "hsl(" + obj.h + "," + obj.s + "%," + obj.l + "%)";
    } else {
      return "hsla(" + obj.h + "," + obj.s + "%," + obj.l + "%," + obj.a + ")";
    }
  }

  var formatter = {
    format: format,
    rgb: rgb,
    hsl: hsl,
    hex: hex,
  };

  function round(n, k) {
    k = typeof k == "undefined" ? 1 : k;
    return Math.round(n * k) / k;
  }

  function degreeToRadian(angle) {
    return (angle * Math.PI) / 180;
  }

  /**
   *
   * convert radian to degree
   *
   * @param {*} radian
   * @returns {Number} 0..360
   */
  function radianToDegree(radian) {
    var angle = (radian * 180) / Math.PI;

    if (angle < 0) {
      // 각도가 0보다 작으면 360 에서 반전시킨다.
      angle = 360 + angle;
    }

    return angle;
  }

  function getXInCircle(angle, radius) {
    var centerX =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return centerX + radius * Math.cos(degreeToRadian(angle));
  }

  function getYInCircle(angle, radius) {
    var centerY =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return centerY + radius * Math.sin(degreeToRadian(angle));
  }

  function getXYInCircle(angle, radius) {
    var centerX =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var centerY =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    return {
      x: getXInCircle(angle, radius, centerX),
      y: getYInCircle(angle, radius, centerY),
    };
  }

  function caculateAngle(rx, ry) {
    return radianToDegree(Math.atan2(ry, rx));
  }

  var math = {
    round: round,
    radianToDegree: radianToDegree,
    degreeToRadian: degreeToRadian,
    getXInCircle: getXInCircle,
    getYInCircle: getYInCircle,
    caculateAngle: caculateAngle,
  };

  var color_names = {
    aliceblue: "rgb(240, 248, 255)",
    antiquewhite: "rgb(250, 235, 215)",
    aqua: "rgb(0, 255, 255)",
    aquamarine: "rgb(127, 255, 212)",
    azure: "rgb(240, 255, 255)",
    beige: "rgb(245, 245, 220)",
    bisque: "rgb(255, 228, 196)",
    black: "rgb(0, 0, 0)",
    blanchedalmond: "rgb(255, 235, 205)",
    blue: "rgb(0, 0, 255)",
    blueviolet: "rgb(138, 43, 226)",
    brown: "rgb(165, 42, 42)",
    burlywood: "rgb(222, 184, 135)",
    cadetblue: "rgb(95, 158, 160)",
    chartreuse: "rgb(127, 255, 0)",
    chocolate: "rgb(210, 105, 30)",
    coral: "rgb(255, 127, 80)",
    cornflowerblue: "rgb(100, 149, 237)",
    cornsilk: "rgb(255, 248, 220)",
    crimson: "rgb(237, 20, 61)",
    cyan: "rgb(0, 255, 255)",
    darkblue: "rgb(0, 0, 139)",
    darkcyan: "rgb(0, 139, 139)",
    darkgoldenrod: "rgb(184, 134, 11)",
    darkgray: "rgb(169, 169, 169)",
    darkgrey: "rgb(169, 169, 169)",
    darkgreen: "rgb(0, 100, 0)",
    darkkhaki: "rgb(189, 183, 107)",
    darkmagenta: "rgb(139, 0, 139)",
    darkolivegreen: "rgb(85, 107, 47)",
    darkorange: "rgb(255, 140, 0)",
    darkorchid: "rgb(153, 50, 204)",
    darkred: "rgb(139, 0, 0)",
    darksalmon: "rgb(233, 150, 122)",
    darkseagreen: "rgb(143, 188, 143)",
    darkslateblue: "rgb(72, 61, 139)",
    darkslategray: "rgb(47, 79, 79)",
    darkslategrey: "rgb(47, 79, 79)",
    darkturquoise: "rgb(0, 206, 209)",
    darkviolet: "rgb(148, 0, 211)",
    deeppink: "rgb(255, 20, 147)",
    deepskyblue: "rgb(0, 191, 255)",
    dimgray: "rgb(105, 105, 105)",
    dimgrey: "rgb(105, 105, 105)",
    dodgerblue: "rgb(30, 144, 255)",
    firebrick: "rgb(178, 34, 34)",
    floralwhite: "rgb(255, 250, 240)",
    forestgreen: "rgb(34, 139, 34)",
    fuchsia: "rgb(255, 0, 255)",
    gainsboro: "rgb(220, 220, 220)",
    ghostwhite: "rgb(248, 248, 255)",
    gold: "rgb(255, 215, 0)",
    goldenrod: "rgb(218, 165, 32)",
    gray: "rgb(128, 128, 128)",
    grey: "rgb(128, 128, 128)",
    green: "rgb(0, 128, 0)",
    greenyellow: "rgb(173, 255, 47)",
    honeydew: "rgb(240, 255, 240)",
    hotpink: "rgb(255, 105, 180)",
    indianred: "rgb(205, 92, 92)",
    indigo: "rgb(75, 0, 130)",
    ivory: "rgb(255, 255, 240)",
    khaki: "rgb(240, 230, 140)",
    lavender: "rgb(230, 230, 250)",
    lavenderblush: "rgb(255, 240, 245)",
    lawngreen: "rgb(124, 252, 0)",
    lemonchiffon: "rgb(255, 250, 205)",
    lightblue: "rgb(173, 216, 230)",
    lightcoral: "rgb(240, 128, 128)",
    lightcyan: "rgb(224, 255, 255)",
    lightgoldenrodyellow: "rgb(250, 250, 210)",
    lightgreen: "rgb(144, 238, 144)",
    lightgray: "rgb(211, 211, 211)",
    lightgrey: "rgb(211, 211, 211)",
    lightpink: "rgb(255, 182, 193)",
    lightsalmon: "rgb(255, 160, 122)",
    lightseagreen: "rgb(32, 178, 170)",
    lightskyblue: "rgb(135, 206, 250)",
    lightslategray: "rgb(119, 136, 153)",
    lightslategrey: "rgb(119, 136, 153)",
    lightsteelblue: "rgb(176, 196, 222)",
    lightyellow: "rgb(255, 255, 224)",
    lime: "rgb(0, 255, 0)",
    limegreen: "rgb(50, 205, 50)",
    linen: "rgb(250, 240, 230)",
    magenta: "rgb(255, 0, 255)",
    maroon: "rgb(128, 0, 0)",
    mediumaquamarine: "rgb(102, 205, 170)",
    mediumblue: "rgb(0, 0, 205)",
    mediumorchid: "rgb(186, 85, 211)",
    mediumpurple: "rgb(147, 112, 219)",
    mediumseagreen: "rgb(60, 179, 113)",
    mediumslateblue: "rgb(123, 104, 238)",
    mediumspringgreen: "rgb(0, 250, 154)",
    mediumturquoise: "rgb(72, 209, 204)",
    mediumvioletred: "rgb(199, 21, 133)",
    midnightblue: "rgb(25, 25, 112)",
    mintcream: "rgb(245, 255, 250)",
    mistyrose: "rgb(255, 228, 225)",
    moccasin: "rgb(255, 228, 181)",
    navajowhite: "rgb(255, 222, 173)",
    navy: "rgb(0, 0, 128)",
    oldlace: "rgb(253, 245, 230)",
    olive: "rgb(128, 128, 0)",
    olivedrab: "rgb(107, 142, 35)",
    orange: "rgb(255, 165, 0)",
    orangered: "rgb(255, 69, 0)",
    orchid: "rgb(218, 112, 214)",
    palegoldenrod: "rgb(238, 232, 170)",
    palegreen: "rgb(152, 251, 152)",
    paleturquoise: "rgb(175, 238, 238)",
    palevioletred: "rgb(219, 112, 147)",
    papayawhip: "rgb(255, 239, 213)",
    peachpuff: "rgb(255, 218, 185)",
    peru: "rgb(205, 133, 63)",
    pink: "rgb(255, 192, 203)",
    plum: "rgb(221, 160, 221)",
    powderblue: "rgb(176, 224, 230)",
    purple: "rgb(128, 0, 128)",
    rebeccapurple: "rgb(102, 51, 153)",
    red: "rgb(255, 0, 0)",
    rosybrown: "rgb(188, 143, 143)",
    royalblue: "rgb(65, 105, 225)",
    saddlebrown: "rgb(139, 69, 19)",
    salmon: "rgb(250, 128, 114)",
    sandybrown: "rgb(244, 164, 96)",
    seagreen: "rgb(46, 139, 87)",
    seashell: "rgb(255, 245, 238)",
    sienna: "rgb(160, 82, 45)",
    silver: "rgb(192, 192, 192)",
    skyblue: "rgb(135, 206, 235)",
    slateblue: "rgb(106, 90, 205)",
    slategray: "rgb(112, 128, 144)",
    slategrey: "rgb(112, 128, 144)",
    snow: "rgb(255, 250, 250)",
    springgreen: "rgb(0, 255, 127)",
    steelblue: "rgb(70, 130, 180)",
    tan: "rgb(210, 180, 140)",
    teal: "rgb(0, 128, 128)",
    thistle: "rgb(216, 191, 216)",
    tomato: "rgb(255, 99, 71)",
    turquoise: "rgb(64, 224, 208)",
    violet: "rgb(238, 130, 238)",
    wheat: "rgb(245, 222, 179)",
    white: "rgb(255, 255, 255)",
    whitesmoke: "rgb(245, 245, 245)",
    yellow: "rgb(255, 255, 0)",
    yellowgreen: "rgb(154, 205, 50)",
    transparent: "rgba(0, 0, 0, 0)",
  };

  function isColorName(name) {
    return !!color_names[name];
  }

  function getColorByName(name) {
    return color_names[name];
  }

  var ColorNames = {
    isColorName: isColorName,
    getColorByName: getColorByName,
  };

  function HUEtoRGB(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function HSLtoHSV(h, s, l) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        h = _arguments$.h,
        s = _arguments$.s,
        l = _arguments$.l;
    }
    var rgb = HSLtoRGB(h, s, l);

    return RGBtoHSV(rgb.r, rgb.g, rgb.b);
  }

  function HSLtoRGB(h, s, l) {
    if (arguments.length == 1) {
      var _arguments$2 = arguments[0],
        h = _arguments$2.h,
        s = _arguments$2.s,
        l = _arguments$2.l;
    }

    var r, g, b;

    h /= 360;
    s /= 100;
    l /= 100;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = HUEtoRGB(p, q, h + 1 / 3);
      g = HUEtoRGB(p, q, h);
      b = HUEtoRGB(p, q, h - 1 / 3);
    }

    return { r: round(r * 255), g: round(g * 255), b: round(b * 255) };
  }

  var fromHSL = {
    HUEtoRGB: HUEtoRGB,
    HSLtoHSV: HSLtoHSV,
    HSLtoRGB: HSLtoRGB,
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return call && (typeof call === "object" || typeof call === "function")
      ? call
      : self;
  };

  var slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (
          var _i = arr[Symbol.iterator](), _s;
          !(_n = (_s = _i.next()).done);
          _n = true
        ) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
    };
  })();

  var toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var color_regexp =
    /(#(?:[\da-f]{8})|#(?:[\da-f]{3}){1,2}|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;
  var color_split = ",";

  function matches(str) {
    var matches = str.match(color_regexp);
    var result = [];

    if (!matches) {
      return result;
    }

    for (var i = 0, len = matches.length; i < len; i++) {
      if (
        matches[i].indexOf("#") > -1 ||
        matches[i].indexOf("rgb") > -1 ||
        matches[i].indexOf("hsl") > -1
      ) {
        result.push({ color: matches[i] });
      } else {
        var nameColor = ColorNames.getColorByName(matches[i]);

        if (nameColor) {
          result.push({ color: matches[i], nameColor: nameColor });
        }
      }
    }

    var pos = { next: 0 };
    result.forEach(function (item) {
      var startIndex = str.indexOf(item.color, pos.next);

      item.startIndex = startIndex;
      item.endIndex = startIndex + item.color.length;

      pos.next = item.endIndex;
    });

    return result;
  }

  function convertMatches(str) {
    var m = matches(str);

    m.forEach(function (it, index) {
      str = str.replace(it.color, "@" + index);
    });

    return { str: str, matches: m };
  }

  function convertMatchesArray(str) {
    var splitStr =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";

    var ret = convertMatches(str);
    return ret.str.split(splitStr).map(function (it, index) {
      it = trim(it);

      if (ret.matches[index]) {
        it = it.replace("@" + index, ret.matches[index].color);
      }

      return it;
    });
  }

  function reverseMatches(str, matches) {
    matches.forEach(function (it, index) {
      str = str.replace("@" + index, it.color);
    });

    return str;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }

  /**
   * @method rgb
   *
   * parse string to rgb color
   *
   * 		color.parse("#FF0000") === { r : 255, g : 0, b : 0 }
   *
   * 		color.parse("rgb(255, 0, 0)") == { r : 255, g : 0, b :0 }
   * 		color.parse(0xff0000) == { r : 255, g : 0, b : 0 }
   * 		color.parse(0xff000000) == { r : 255, g : 0, b : 0, a: 0 }
   *
   * @param {String} str color string
   * @returns {Object}  rgb object
   */
  function parse(str) {
    if (typeof str == "string") {
      if (ColorNames.isColorName(str)) {
        str = ColorNames.getColorByName(str);
      }

      if (str.indexOf("rgb(") > -1) {
        var arr = str.replace("rgb(", "").replace(")", "").split(",");

        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i] = parseInt(trim(arr[i]), 10);
        }

        var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: 1 };

        obj = Object.assign(obj, RGBtoHSL(obj));

        return obj;
      } else if (str.indexOf("rgba(") > -1) {
        var arr = str.replace("rgba(", "").replace(")", "").split(",");

        for (var i = 0, len = arr.length; i < len; i++) {
          if (len - 1 == i) {
            arr[i] = parseFloat(trim(arr[i]));
          } else {
            arr[i] = parseInt(trim(arr[i]), 10);
          }
        }

        var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: arr[3] };

        obj = Object.assign(obj, RGBtoHSL(obj));

        return obj;
      } else if (str.indexOf("hsl(") > -1) {
        var arr = str.replace("hsl(", "").replace(")", "").split(",");

        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i] = parseFloat(trim(arr[i]));
        }

        var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: 1 };

        obj = Object.assign(obj, HSLtoRGB(obj));

        return obj;
      } else if (str.indexOf("hsla(") > -1) {
        var arr = str.replace("hsla(", "").replace(")", "").split(",");

        for (var i = 0, len = arr.length; i < len; i++) {
          if (len - 1 == i) {
            arr[i] = parseFloat(trim(arr[i]));
          } else {
            arr[i] = parseInt(trim(arr[i]), 10);
          }
        }

        var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: arr[3] };

        obj = Object.assign(obj, HSLtoRGB(obj));

        return obj;
      } else if (str.indexOf("#") == 0) {
        str = str.replace("#", "");

        var arr = [];
        var a = 1;
        if (str.length == 3) {
          for (var i = 0, len = str.length; i < len; i++) {
            var char = str.substr(i, 1);
            arr.push(parseInt(char + char, 16));
          }
        } else if (str.length === 8) {
          for (var i = 0, len = str.length; i < len; i += 2) {
            arr.push(parseInt(str.substr(i, 2), 16));
          }

          a = arr.pop() / 255;
        } else {
          for (var i = 0, len = str.length; i < len; i += 2) {
            arr.push(parseInt(str.substr(i, 2), 16));
          }
        }

        var obj = { type: "hex", r: arr[0], g: arr[1], b: arr[2], a: a };

        obj = Object.assign(obj, RGBtoHSL(obj));

        return obj;
      }
    } else if (typeof str == "number") {
      if (0x000000 <= str && str <= 0xffffff) {
        var r = (str & 0xff0000) >> 16;
        var g = (str & 0x00ff00) >> 8;
        var b = (str & 0x0000ff) >> 0;

        var obj = { type: "hex", r: r, g: g, b: b, a: 1 };
        obj = Object.assign(obj, RGBtoHSL(obj));
        return obj;
      } else if (0x00000000 <= str && str <= 0xffffffff) {
        var _r = (str & 0xff000000) >> 24;
        var _g = (str & 0x00ff0000) >> 16;
        var _b = (str & 0x0000ff00) >> 8;
        var _a = (str & 0x000000ff) / 255;

        var obj = { type: "hex", r: _r, g: _g, b: _b, a: _a };
        obj = Object.assign(obj, RGBtoHSL(obj));

        return obj;
      }
    }

    return str;
  }

  function parseGradient(colors) {
    if (typeof colors == "string") {
      colors = convertMatchesArray(colors);
    }

    colors = colors.map(function (it) {
      if (typeof it == "string") {
        var ret = convertMatches(it);
        var arr = trim(ret.str).split(" ");

        if (arr[1]) {
          if (arr[1].includes("%")) {
            arr[1] = parseFloat(arr[1].replace(/%/, "")) / 100;
          } else {
            arr[1] = parseFloat(arr[1]);
          }
        } else {
          arr[1] = "*";
        }

        arr[0] = reverseMatches(arr[0], ret.matches);

        return arr;
      } else if (Array.isArray(it)) {
        if (!it[1]) {
          it[1] = "*";
        } else if (typeof it[1] == "string") {
          if (it[1].includes("%")) {
            it[1] = parseFloat(it[1].replace(/%/, "")) / 100;
          } else {
            it[1] = +it[1];
          }
        }

        return [].concat(toConsumableArray(it));
      }
    });

    var count = colors.filter(function (it) {
      return it[1] === "*";
    }).length;

    if (count > 0) {
      var sum = colors
        .filter(function (it) {
          return it[1] != "*" && it[1] != 1;
        })
        .map(function (it) {
          return it[1];
        })
        .reduce(function (total, cur) {
          return total + cur;
        }, 0);

      var dist = (1 - sum) / count;
      colors.forEach(function (it, index) {
        if (it[1] == "*" && index > 0) {
          if (colors.length - 1 == index) ; else {
            it[1] = dist;
          }
        }
      });
    }

    return colors;
  }

  var parser = {
    matches: matches,
    convertMatches: convertMatches,
    convertMatchesArray: convertMatchesArray,
    reverseMatches: reverseMatches,
    parse: parse,
    parseGradient: parseGradient,
    trim: trim,
    color_regexp: color_regexp,
    color_split: color_split,
  };

  /**
   * @method RGBtoHSV
   *
   * convert rgb to hsv
   *
   * 		color.RGBtoHSV(0, 0, 255) === { h : 240, s : 1, v : 1 } === '#FFFF00'
   *
   * @param {Number} R  red color value
   * @param {Number} G  green color value
   * @param {Number} B  blue color value
   * @return {Object}  hsv color code
   */
  function RGBtoHSV(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        r = _arguments$.r,
        g = _arguments$.g,
        b = _arguments$.b;
    }

    var R1 = r / 255;
    var G1 = g / 255;
    var B1 = b / 255;

    var MaxC = Math.max(R1, G1, B1);
    var MinC = Math.min(R1, G1, B1);

    var DeltaC = MaxC - MinC;

    var H = 0;

    if (DeltaC == 0) {
      H = 0;
    } else if (MaxC == R1) {
      H = 60 * (((G1 - B1) / DeltaC) % 6);
    } else if (MaxC == G1) {
      H = 60 * ((B1 - R1) / DeltaC + 2);
    } else if (MaxC == B1) {
      H = 60 * ((R1 - G1) / DeltaC + 4);
    }

    if (H < 0) {
      H = 360 + H;
    }

    var S = 0;

    if (MaxC == 0) S = 0;
    else S = DeltaC / MaxC;

    var V = MaxC;

    return { h: H, s: S, v: V };
  }

  function RGBtoCMYK(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$2 = arguments[0],
        r = _arguments$2.r,
        g = _arguments$2.g,
        b = _arguments$2.b;
    }

    var R1 = r / 255;
    var G1 = g / 255;
    var B1 = b / 255;

    var K = 1 - Math.max(R1, G1, B1);
    var C = (1 - R1 - K) / (1 - K);
    var M = (1 - G1 - K) / (1 - K);
    var Y = (1 - B1 - K) / (1 - K);

    return { c: C, m: M, y: Y, k: K };
  }

  function RGBtoHSL(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$3 = arguments[0],
        r = _arguments$3.r,
        g = _arguments$3.g,
        b = _arguments$3.b;
    }

    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return { h: round(h * 360), s: round(s * 100), l: round(l * 100) };
  }

  function c(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$4 = arguments[0],
        r = _arguments$4.r,
        g = _arguments$4.g,
        b = _arguments$4.b;
    }
    return gray((r + g + b) / 3 > 90 ? 0 : 255);
  }

  function gray(gray) {
    return { r: gray, g: gray, b: gray };
  }

  function RGBtoSimpleGray(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$5 = arguments[0],
        r = _arguments$5.r,
        g = _arguments$5.g,
        b = _arguments$5.b;
    }
    return gray(Math.ceil((r + g + b) / 3));
  }

  function RGBtoGray(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$6 = arguments[0],
        r = _arguments$6.r,
        g = _arguments$6.g,
        b = _arguments$6.b;
    }
    return gray(RGBtoYCrCb(r, g, b).y);
  }

  function brightness(r, g, b) {
    return Math.ceil(r * 0.2126 + g * 0.7152 + b * 0.0722);
  }

  function RGBtoYCrCb(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$7 = arguments[0],
        r = _arguments$7.r,
        g = _arguments$7.g,
        b = _arguments$7.b;
    }
    var Y = brightness(r, g, b);
    var Cb = 0.564 * (b - Y);
    var Cr = 0.713 * (r - Y);

    return { y: Y, cr: Cr, cb: Cb };
  }

  function PivotRGB(n) {
    var point =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : 0.04045;

    return (n > point ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) * 100;
  }

  function RGBtoXYZ(r, g, b) {
    //sR, sG and sB (Standard RGB) input range = 0 ÷ 255
    //X, Y and Z output refer to a D65/2° standard illuminant.
    if (arguments.length == 1) {
      var _arguments$8 = arguments[0],
        r = _arguments$8.r,
        g = _arguments$8.g,
        b = _arguments$8.b;
    }

    var R = r / 255;
    var G = g / 255;
    var B = b / 255;

    R = PivotRGB(R);
    G = PivotRGB(G);
    B = PivotRGB(B);

    var x = R * 0.4124 + G * 0.3576 + B * 0.1805;
    var y = R * 0.2126 + G * 0.7152 + B * 0.0722;
    var z = R * 0.0193 + G * 0.1192 + B * 0.9505;

    return { x: x, y: y, z: z };
  }

  function RGBtoLAB(r, g, b) {
    if (arguments.length == 1) {
      var _arguments$9 = arguments[0],
        r = _arguments$9.r,
        g = _arguments$9.g,
        b = _arguments$9.b;
    }
    return XYZtoLAB(RGBtoXYZ(r, g, b));
  }

  var fromRGB = {
    RGBtoCMYK: RGBtoCMYK,
    RGBtoGray: RGBtoGray,
    RGBtoHSL: RGBtoHSL,
    RGBtoHSV: RGBtoHSV,
    RGBtoLAB: RGBtoLAB,
    RGBtoSimpleGray: RGBtoSimpleGray,
    RGBtoXYZ: RGBtoXYZ,
    RGBtoYCrCb: RGBtoYCrCb,
    c: c,
    brightness: brightness,
    gray: gray,
  };

  function CMYKtoRGB(c, m, y, k) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        c = _arguments$.c,
        m = _arguments$.m,
        y = _arguments$.y,
        k = _arguments$.k;
    }

    var R = 255 * (1 - c) * (1 - k);
    var G = 255 * (1 - m) * (1 - k);
    var B = 255 * (1 - y) * (1 - k);

    return { r: R, g: G, b: B };
  }

  var fromCMYK = {
    CMYKtoRGB: CMYKtoRGB,
  };

  function ReverseXyz(n) {
    return Math.pow(n, 3) > 0.008856 ? Math.pow(n, 3) : (n - 16 / 116) / 7.787;
  }

  function ReverseRGB(n) {
    return n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n;
  }

  function XYZtoRGB(x, y, z) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        x = _arguments$.x,
        y = _arguments$.y,
        z = _arguments$.z;
    }
    //X, Y and Z input refer to a D65/2° standard illuminant.
    //sR, sG and sB (standard RGB) output range = 0 ÷ 255

    var X = x / 100.0;
    var Y = y / 100.0;
    var Z = z / 100.0;

    var R = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
    var G = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
    var B = X * 0.0557 + Y * -0.204 + Z * 1.057;

    R = ReverseRGB(R);
    G = ReverseRGB(G);
    B = ReverseRGB(B);

    var r = round(R * 255);
    var g = round(G * 255);
    var b = round(B * 255);

    return { r: r, g: g, b: b };
  }

  function LABtoXYZ(l, a, b) {
    if (arguments.length == 1) {
      var _arguments$2 = arguments[0],
        l = _arguments$2.l,
        a = _arguments$2.a,
        b = _arguments$2.b;
    }
    //Reference-X, Y and Z refer to specific illuminants and observers.
    //Common reference values are available below in this same page.

    var Y = (l + 16) / 116;
    var X = a / 500 + Y;
    var Z = Y - b / 200;

    Y = ReverseXyz(Y);
    X = ReverseXyz(X);
    Z = ReverseXyz(Z);

    var x = X * 95.047;
    var y = Y * 100.0;
    var z = Z * 108.883;

    return { x: x, y: y, z: z };
  }

  function LABtoRGB(l, a, b) {
    if (arguments.length == 1) {
      var _arguments$4 = arguments[0],
        l = _arguments$4.l,
        a = _arguments$4.a,
        b = _arguments$4.b;
    }
    return XYZtoRGB(LABtoXYZ(l, a, b));
  }

  var fromLAB = {
    XYZtoRGB: XYZtoRGB,
    LABtoRGB: LABtoRGB,
    LABtoXYZ: LABtoXYZ,
  };

  /**
   * @method HSVtoRGB
   *
   * convert hsv to rgb
   *
   * 		color.HSVtoRGB(0,0,1) === #FFFFF === { r : 255, g : 0, b : 0 }
   *
   * @param {Number} H  hue color number  (min : 0, max : 360)
   * @param {Number} S  Saturation number  (min : 0, max : 1)
   * @param {Number} V  Value number 		(min : 0, max : 1 )
   * @returns {Object}
   */
  function HSVtoRGB(h, s, v) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        h = _arguments$.h,
        s = _arguments$.s,
        v = _arguments$.v;
    }

    var H = h;
    var S = s;
    var V = v;

    if (H >= 360) {
      H = 0;
    }

    var C = S * V;
    var X = C * (1 - Math.abs(((H / 60) % 2) - 1));
    var m = V - C;

    var temp = [];

    if (0 <= H && H < 60) {
      temp = [C, X, 0];
    } else if (60 <= H && H < 120) {
      temp = [X, C, 0];
    } else if (120 <= H && H < 180) {
      temp = [0, C, X];
    } else if (180 <= H && H < 240) {
      temp = [0, X, C];
    } else if (240 <= H && H < 300) {
      temp = [X, 0, C];
    } else if (300 <= H && H < 360) {
      temp = [C, 0, X];
    }

    return {
      r: round((temp[0] + m) * 255),
      g: round((temp[1] + m) * 255),
      b: round((temp[2] + m) * 255),
    };
  }

  function HSVtoHSL(h, s, v) {
    if (arguments.length == 1) {
      var _arguments$2 = arguments[0],
        h = _arguments$2.h,
        s = _arguments$2.s,
        v = _arguments$2.v;
    }

    var rgb = HSVtoRGB(h, s, v);

    return RGBtoHSL(rgb.r, rgb.g, rgb.b);
  }

  var fromHSV = {
    HSVtoHSL: HSVtoHSL,
    HSVtoRGB: HSVtoRGB,
  };

  function YCrCbtoRGB(y, cr, cb, bit) {
    if (arguments.length == 1) {
      var _arguments$ = arguments[0],
        y = _arguments$.y,
        cr = _arguments$.cr,
        cb = _arguments$.cb,
        bit = _arguments$.bit;

      bit = bit || 0;
    }
    var R = y + 1.402 * (cr - bit);
    var G = y - 0.344 * (cb - bit) - 0.714 * (cr - bit);
    var B = y + 1.772 * (cb - bit);

    return { r: Math.ceil(R), g: Math.ceil(G), b: Math.ceil(B) };
  }

  var fromYCrCb = {
    YCrCbtoRGB: YCrCbtoRGB,
  };

  /**
   * @deprecated
   *
   * instead of this,  use blend function
   *
   * @param {*} startColor
   * @param {*} endColor
   * @param {*} t
   */
  function interpolateRGB(startColor, endColor) {
    var t =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
    var exportFormat =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hex";

    var obj = {
      r: round(startColor.r + (endColor.r - startColor.r) * t),
      g: round(startColor.g + (endColor.g - startColor.g) * t),
      b: round(startColor.b + (endColor.b - startColor.b) * t),
      a: round(startColor.a + (endColor.a - startColor.a) * t, 100),
    };

    return format(obj, obj.a < 1 ? "rgb" : exportFormat);
  }

  function scale(scale) {
    var count =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    if (!scale) return [];

    if (typeof scale === "string") {
      scale = convertMatchesArray(scale);
    }

    scale = scale || [];
    var len = scale.length;

    var colors = [];
    for (var i = 0; i < len - 1; i++) {
      for (var index = 0; index < count; index++) {
        colors.push(blend(scale[i], scale[i + 1], index / count));
      }
    }
    return colors;
  }

  function blend(startColor, endColor) {
    var ratio =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
    var format$$1 =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hex";

    var s = parse(startColor);
    var e = parse(endColor);

    return interpolateRGB(s, e, ratio, format$$1);
  }

  function mix(startcolor, endColor) {
    var ratio =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
    var format$$1 =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hex";

    return blend(startcolor, endColor, ratio, format$$1);
  }

  /**
   *
   * @param {Color|String} c
   */
  function contrast(c$$1) {
    c$$1 = parse(c$$1);
    return (
      (Math.round(c$$1.r * 299) +
        Math.round(c$$1.g * 587) +
        Math.round(c$$1.b * 114)) /
      1000
    );
  }

  function contrastColor(c$$1) {
    return contrast(c$$1) >= 128 ? "black" : "white";
  }

  function gradient(colors) {
    var count =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    colors = parseGradient(colors);

    var newColors = [];
    var maxCount = count - (colors.length - 1);
    var allCount = maxCount;

    for (var i = 1, len = colors.length; i < len; i++) {
      var startColor = colors[i - 1][0];
      var endColor = colors[i][0];

      // if it is second color
      var rate = i == 1 ? colors[i][1] : colors[i][1] - colors[i - 1][1];

      // if it is last color
      var colorCount =
        i == colors.length - 1 ? allCount : Math.floor(rate * maxCount);

      newColors = newColors.concat(scale([startColor, endColor], colorCount), [
        endColor,
      ]);

      allCount -= colorCount;
    }
    return newColors;
  }

  function scaleHSV(color) {
    var target =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "h";
    var count =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9;
    var exportFormat =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rgb";
    var min =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var max =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var dist =
      arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 100;

    var colorObj = parse(color);
    var hsv = RGBtoHSV(colorObj);
    var unit = ((max - min) * dist) / count;

    var results = [];
    for (var i = 1; i <= count; i++) {
      hsv[target] = Math.abs((dist - unit * i) / dist);
      results.push(format(HSVtoRGB(hsv), exportFormat));
    }

    return results;
  }

  function scaleH(color) {
    var count =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
    var exportFormat =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgb";
    var min =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var max =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 360;

    return scaleHSV(color, "h", count, exportFormat, min, max, 1);
  }

  function scaleS(color) {
    var count =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
    var exportFormat =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgb";
    var min =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var max =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

    return scaleHSV(color, "s", count, exportFormat, min, max, 100);
  }

  function scaleV(color) {
    var count =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
    var exportFormat =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgb";
    var min =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var max =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

    return scaleHSV(color, "v", count, exportFormat, min, max, 100);
  }

  /* predefined scale colors */
  scale.parula = function (count) {
    return scale(
      ["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"],
      count
    );
  };

  scale.jet = function (count) {
    return scale(
      [
        "#00008f",
        "#0020ff",
        "#00ffff",
        "#51ff77",
        "#fdff00",
        "#ff0000",
        "#800000",
      ],
      count
    );
  };

  scale.hsv = function (count) {
    return scale(
      [
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",
        "#ff00ff",
        "#ff0000",
      ],
      count
    );
  };

  scale.hot = function (count) {
    return scale(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], count);
  };
  scale.pink = function (count) {
    return scale(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], count);
  };

  scale.bone = function (count) {
    return scale(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], count);
  };

  scale.copper = function (count) {
    return scale(
      ["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"],
      count
    );
  };

  var mixin = {
    interpolateRGB: interpolateRGB,
    blend: blend,
    mix: mix,
    scale: scale,
    contrast: contrast,
    contrastColor: contrastColor,
    gradient: gradient,
    scaleHSV: scaleHSV,
    scaleH: scaleH,
    scaleS: scaleS,
    scaleV: scaleV,
  };

  function array_equals(v1, v2) {
    if (v1.length !== v2.length) return false;
    for (var i = 0, len = v1.length; i < len; ++i) {
      if (v1[i] !== v2[i]) return false;
    }
    return true;
  }

  function euclidean(v1, v2) {
    var total = 0;

    for (var i = 0, len = v1.length; i < len; i++) {
      total += Math.pow(v2[i] - v1[i], 2);
    }

    return Math.sqrt(total);
  }

  function manhattan(v1, v2) {
    var total = 0;

    for (var i = 0, len = v1.length; i < len; i++) {
      total += Math.abs(v2[i] - v1[i]);
    }

    return total;
  }

  function max(v1, v2) {
    var max = 0;
    for (var i = 0, len = v1.length; i < len; i++) {
      max = Math.max(max, Math.abs(v2[i] - v1[i]));
    }

    return max;
  }

  var distances = {
    euclidean: euclidean,
    manhattan: manhattan,
    max: max,
  };

  var create_random_number = {
    linear: function linear(num, count) {
      var centeroids = [];
      var start = Math.round(Math.random() * num);
      var dist = Math.floor(num / count);

      do {
        centeroids.push(start);

        start = (start + dist) % num;
      } while (centeroids.length < count);

      return centeroids;
    },

    shuffle: function shuffle(num, count) {
      var centeroids = [];

      while (centeroids.length < count) {
        var index = Math.round(Math.random() * num);

        if (centeroids.indexOf(index) == -1) {
          centeroids.push(index);
        }
      }

      return centeroids;
    },
  };

  function randomCentroids(points, k) {
    var method =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : "linear";

    var centeroids = create_random_number[method](points.length, k);

    return centeroids.map(function (i) {
      return points[i];
    });

    // var centeroids = points.slice(0);

    // centeroids.sort(function () {
    //     return (Math.round(Math.random()) - 0.5);
    // })

    // return centeroids.slice(0, k);
  }

  function closestCenteroid(point, centeroids, distance) {
    var min = Infinity,
      kIndex = 0;

    centeroids.forEach(function (center, i) {
      var dist = distance(point, center);

      if (dist < min) {
        min = dist;
        kIndex = i;
      }
    });

    return kIndex;
  }

  function getCenteroid(assigned) {
    if (!assigned.length) return [];

    // initialize centeroid list
    var centeroid = new Array(assigned[0].length);
    for (var i = 0, len = centeroid.length; i < len; i++) {
      centeroid[i] = 0;
    }

    for (var index = 0, len = assigned.length; index < len; index++) {
      var it = assigned[index];

      var last = index + 1;

      for (var j = 0, jLen = it.length; j < jLen; j++) {
        centeroid[j] += (it[j] - centeroid[j]) / last;
      }
    }

    centeroid = centeroid.map(function (it) {
      return Math.floor(it);
    });

    return centeroid;
  }

  function unique_array(arrays) {
    return arrays;
  }

  function splitK(k, points, centeroids, distance) {
    var assignment = new Array(k);

    for (var i = 0; i < k; i++) {
      assignment[i] = [];
    }

    for (var idx = 0, pointLength = points.length; idx < pointLength; idx++) {
      var point = points[idx];
      var index = closestCenteroid(point, centeroids, distance);
      assignment[index].push(point);
    }

    return assignment;
  }

  function setNewCenteroid(
    k,
    points,
    assignment,
    centeroids,
    movement,
    randomFunction
  ) {
    for (var i = 0; i < k; i++) {
      var assigned = assignment[i];

      var centeroid = centeroids[i];
      var newCenteroid = new Array(centeroid.length);

      if (assigned.length > 0) {
        newCenteroid = getCenteroid(assigned);
      } else {
        var idx = Math.floor(randomFunction() * points.length);
        newCenteroid = points[idx];
      }

      if (array_equals(newCenteroid, centeroid)) {
        movement = false;
      } else {
        movement = true;
      }

      centeroids[i] = newCenteroid;
    }

    return movement;
  }

  function kmeans(points, k, distanceFunction) {
    var period =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
    var initialRandom =
      arguments.length > 4 && arguments[4] !== undefined
        ? arguments[4]
        : "linear";

    points = unique_array(points);

    k = k || Math.max(2, Math.ceil(Math.sqrt(points.length / 2)));

    var distance = distanceFunction || "euclidean";
    if (typeof distance == "string") {
      distance = distances[distance];
    }

    var rng_seed = 0;
    var random = function random() {
      rng_seed = (rng_seed * 9301 + 49297) % 233280;
      return rng_seed / 233280;
    };

    var centeroids = randomCentroids(points, k, initialRandom);

    var movement = true;
    var iterations = 0;
    while (movement) {
      var assignment = splitK(k, points, centeroids, distance);

      movement = setNewCenteroid(
        k,
        points,
        assignment,
        centeroids,
        false,
        random
      );

      iterations++;

      if (iterations % period == 0) {
        break;
      }
    }

    return centeroids;
  }

  function each(len, callback) {
    for (var i = 0; i < len; i += 4) {
      callback(i);
    }
  }

  function pack(bitmap, callback) {
    each(bitmap.pixels.length, function (i) {
      callback(bitmap.pixels, i);
    });
  }

  var Canvas = {
    create: function create(width, height) {
      var canvas = document.createElement("canvas");
      canvas.width = width || 0;
      canvas.height = height || 0;

      return canvas;
    },
    drawPixels: function drawPixels(bitmap) {
      var canvas = this.create(bitmap.width, bitmap.height);

      var context = canvas.getContext("2d");
      var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

      imagedata.data.set(bitmap.pixels);

      context.putImageData(imagedata, 0, 0);

      return canvas;
    },
    createHistogram: function createHistogram(
      width,
      height,
      histogram,
      callback
    ) {
      var opt =
        arguments.length > 4 && arguments[4] !== undefined
          ? arguments[4]
          : { black: true, red: false, green: false, blue: false };

      var canvas = this.create(width, height);
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, width, height);
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);
      context.globalAlpha = 0.7;

      var omit = { black: false };
      if (opt.black) {
        omit.black = false;
      } else {
        omit.black = true;
      }
      if (opt.red) {
        omit.red = false;
      } else {
        omit.red = true;
      }
      if (opt.green) {
        omit.green = false;
      } else {
        omit.green = true;
      }
      if (opt.blue) {
        omit.blue = false;
      } else {
        omit.blue = true;
      }

      Object.keys(histogram).forEach(function (color) {
        if (!omit[color]) {
          var array = histogram[color];
          var ymax = Math.max.apply(Math, array);
          var unitWith = width / array.length;

          context.fillStyle = color;
          array.forEach(function (it, index) {
            var currentHeight = height * (it / ymax);
            var x = index * unitWith;

            context.fillRect(
              x,
              height - currentHeight,
              unitWith,
              currentHeight
            );
          });
        }
      });

      if (typeof callback == "function") callback(canvas);
    },
    getHistogram: function getHistogram(bitmap) {
      var black = new Array(256);
      var red = new Array(256);
      var green = new Array(256);
      var blue = new Array(256);
      for (var i = 0; i < 256; i++) {
        black[i] = 0;
        red[i] = 0;
        green[i] = 0;
        blue[i] = 0;
      }

      pack(bitmap, function (pixels, i) {
        // gray scale
        var grayIndex = Math.round(
          Color$1.brightness(pixels[i], pixels[i + 1], pixels[i + 2])
        );
        black[grayIndex]++;

        red[pixels[i]]++;
        green[pixels[i + 1]]++;
        blue[pixels[i + 2]]++;
      });

      return { black: black, red: red, green: green, blue: blue };
    },
    getBitmap: function getBitmap(bitmap, area) {
      var canvas = this.drawPixels(bitmap);

      var context = canvas.getContext("2d");
      var pixels = context.getImageData(
        area.x || 0,
        area.y || 0,
        area.width || canvas.width,
        area.height || canvas.height
      ).data;

      return { pixels: pixels, width: area.width, height: area.height };
    },
    putBitmap: function putBitmap(bitmap, subBitmap, area) {
      var canvas = this.drawPixels(bitmap);
      var subCanvas = this.drawPixels(subBitmap);

      var context = canvas.getContext("2d");
      context.drawImage(subCanvas, area.x, area.y);

      bitmap.pixels = context.getImageData(
        0,
        0,
        bitmap.width,
        bitmap.height
      ).data;

      return bitmap;
    },
  };

  var ImageLoader = (function () {
    function ImageLoader(url) {
      var opt =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, ImageLoader);

      this.isLoaded = false;
      this.imageUrl = url;
      this.opt = opt;
      this.initialize();
    }

    createClass(ImageLoader, [
      {
        key: "initialize",
        value: function initialize() {
          this.canvas = this.createCanvas();
          this.context = this.canvas.getContext("2d");
        },
      },
      {
        key: "createCanvas",
        value: function createCanvas() {
          return document.createElement("canvas");
        },
      },
      {
        key: "load",
        value: function load(callback) {
          this.loadImage(callback);
        },
      },
      {
        key: "loadImage",
        value: function loadImage(callback) {
          var _this = this;

          var ctx = this.context;
          this.newImage = new Image();
          var img = this.newImage;
          img.onload = function () {
            var ratio = img.height / img.width;

            if (_this.opt.canvasWidth && _this.opt.canvasHeight) {
              _this.canvas.width = _this.opt.canvasWidth;
              _this.canvas.height = _this.opt.canvasHeight;
            } else {
              _this.canvas.width = _this.opt.maxWidth
                ? _this.opt.maxWidth
                : img.width;
              _this.canvas.height = _this.canvas.width * ratio;
            }

            ctx.drawImage(
              img,
              0,
              0,
              img.width,
              img.height,
              0,
              0,
              _this.canvas.width,
              _this.canvas.height
            );
            _this.isLoaded = true;
            callback && callback();
          };

          this.getImageUrl(function (url) {
            img.src = url;
          });
        },
      },
      {
        key: "load",
        value: function load(callback) {
          var _this2 = this;

          this.newImage = new Image();
          var img = this.newImage;
          img.onload = function () {
            _this2.isLoaded = true;
            callback && callback();
          };

          this.getImageUrl(function (url) {
            img.src = url;
          });
        },
      },
      {
        key: "getImageUrl",
        value: function getImageUrl(callback) {
          if (typeof this.imageUrl == "string") {
            return callback(this.imageUrl);
          } else if (this.imageUrl instanceof Blob) {
            var reader = new FileReader();

            reader.onload = function (ev) {
              callback(ev.target.result);
            };

            reader.readAsDataURL(this.imageUrl);
          }
        },
      },
      {
        key: "getRGBA",
        value: function getRGBA(r, g, b, a) {
          return [r, g, b, a];
        },
      },
      {
        key: "toArray",
        value: function toArray$$1(filter, callback) {
          var opt =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};

          var imagedata = this.context.getImageData(
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
          var width = imagedata.width;
          var height = imagedata.height;

          var pixels = new Uint8ClampedArray(imagedata.data);

          var bitmap = { pixels: pixels, width: width, height: height };

          if (!filter) {
            filter = (function () {
              return function (bitmap, done) {
                done(bitmap);
              };
            })();
          }

          filter(
            bitmap,
            function (newBitmap) {
              var tmpCanvas = Canvas.drawPixels(newBitmap);

              if (opt.returnTo == "canvas") {
                callback(tmpCanvas);
              } else {
                callback(tmpCanvas.toDataURL(opt.outputFormat || "image/png"));
              }
            },
            opt
          );
        },
      },
      {
        key: "toHistogram",
        value: function toHistogram(opt) {
          var imagedata = this.context.getImageData(
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
          var width = imagedata.width;
          var height = imagedata.height;

          var pixels = new Uint8ClampedArray(imagedata.data);

          var bitmap = { pixels: pixels, width: width, height: height };

          return Canvas.getHistogram(bitmap);
        },
      },
      {
        key: "toRGB",
        value: function toRGB() {
          var imagedata = this.context.getImageData(
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );

          var rgba = imagedata.data;
          var results = [];
          for (var i = 0, len = rgba.length; i < len; i += 4) {
            results[results.length] = [
              rgba[i + 0],
              rgba[i + 1],
              rgba[i + 2],
              rgba[i + 3],
            ];
          }

          return results;
        },
      },
    ]);
    return ImageLoader;
  })();

  var CONSTANT = {
    identity: function identity() {
      return [1, 0, 0, 0, 1, 0, 0, 0, 1];
    },
    stretching: function stretching(k) {
      return [k, 0, 0, 0, 1, 0, 0, 0, 1];
    },
    squeezing: function squeezing(k) {
      return [k, 0, 0, 0, 1 / k, 0, 0, 0, 1];
    },
    scale: function scale() {
      var sx =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var sy =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      sx = sx || sx === 0 ? sx : 1;
      sy = sy || sy === 0 ? sy : 1;
      return [sx, 0, 0, 0, sy, 0, 0, 0, 1];
    },
    scaleX: function scaleX(sx) {
      return this.scale(sx);
    },
    scaleY: function scaleY(sy) {
      return this.scale(1, sy);
    },
    translate: function translate(tx, ty) {
      return [1, 0, tx, 0, 1, ty, 0, 0, 1];
    },
    rotate: function rotate(angle) {
      var r = this.radian(angle);
      return [
        Math.cos(r),
        -Math.sin(r),
        0,
        Math.sin(r),
        Math.cos(r),
        0,
        0,
        0,
        1,
      ];
    },
    rotate90: function rotate90() {
      return [0, -1, 0, 1, 0, 0, 0, 0, 1];
    },
    rotate180: function rotate180() {
      return [-1, 0, 0, 0, -1, 0, 0, 0, 1];
    },
    rotate270: function rotate270() {
      return [0, 1, 0, -1, 0, 0, 0, 0, 1];
    },
    radian: function radian(degree) {
      return (degree * Math.PI) / 180;
    },
    skew: function skew(degreeX, degreeY) {
      var radianX = this.radian(degreeX);
      var radianY = this.radian(degreeY);
      return [1, Math.tan(radianX), 0, Math.tan(radianY), 1, 0, 0, 0, 1];
    },
    skewX: function skewX(degreeX) {
      var radianX = this.radian(degreeX);

      return [1, Math.tan(radianX), 0, 0, 1, 0, 0, 0, 1];
    },
    skewY: function skewY(degreeY) {
      var radianY = this.radian(degreeY);

      return [1, 0, 0, Math.tan(radianY), 1, 0, 0, 0, 1];
    },
    shear1: function shear1(angle) {
      return [1, -Math.tan(this.radian(angle) / 2), 0, 0, 1, 0, 0, 0, 1];
    },
    shear2: function shear2(angle) {
      return [1, 0, 0, Math.sin(this.radian(angle)), 1, 0, 0, 0, 1];
    },
  };

  var Matrix = {
    CONSTANT: CONSTANT,

    radian: function radian(angle) {
      return CONSTANT.radian(angle);
    },
    multiply: function multiply(A, C) {
      // console.log(JSON.stringify(A), JSON.stringify(C))
      return [
        A[0] * C[0] + A[1] * C[1] + A[2] * C[2],
        A[3] * C[0] + A[4] * C[1] + A[5] * C[2],
        A[6] * C[0] + A[7] * C[1] + A[8] * C[2],
      ];
    },
    identity: function identity(B) {
      return this.multiply(CONSTANT.identity(), B);
    },
    translate: function translate(x, y, B) {
      return this.multiply(CONSTANT.translate(x, y), B);
    },
    rotate: function rotate(angle, B) {
      return this.multiply(CONSTANT.rotate(angle), B);
    },
    shear1: function shear1(angle, B) {
      return this.multiply(CONSTANT.shear1(angle), B);
    },
    shear2: function shear2(angle, B) {
      return this.multiply(CONSTANT.shear2(angle), B);
    },
    rotateShear: function rotateShear(angle, B) {
      var arr = B;

      arr = this.shear1(angle, arr);
      arr = this.shear2(angle, arr);
      arr = this.shear1(angle, arr);

      return arr;
    },
  };

  function crop() {
    var startX =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var startY =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments[2];
    var height = arguments[3];

    var newBitmap = createBitmap(width * height * 4, width, height);

    return function (bitmap, done) {
      for (var y = startY, realY = 0; y < height; y++, realY++) {
        for (var x = startX, realX = 0; x < width; x++, realX++) {
          newBitmap.pixels[realY * width * realX] =
            bitmap.pixels[y * width * x];
        }
      }

      done(newBitmap);
    };
  }

  // Image manupulate
  function resize(dstWidth, dstHeight) {
    return function (bitmap, done) {
      var c = Canvas.drawPixels(bitmap);
      var context = c.getContext("2d");

      c.width = dstWidth;
      c.height = dstHeight;

      done({
        pixels: new Uint8ClampedArray(
          context.getImageData(0, 0, dstWidth, dstHeight).data
        ),
        width: dstWidth,
        height: dstHeight,
      });
    };
  }

  function flipV() {
    return function (bitmap, done) {
      var width = bitmap.width;
      var height = bitmap.height;
      var isCenter = height % 2 == 1 ? 1 : 0;

      var halfHeight = isCenter ? Math.floor(height / 2) : height / 2;

      for (var y = 0; y < halfHeight; y++) {
        for (var x = 0; x < width; x++) {
          var startIndex = (y * width + x) << 2;
          var endIndex = ((height - 1 - y) * width + x) << 2;
          swapColor(bitmap.pixels, startIndex, endIndex);
        }
      }

      done(bitmap);
    };
  }

  function flipH() {
    return function (bitmap, done) {
      var width = bitmap.width;
      var height = bitmap.height;
      var isCenter = width % 2 == 1 ? 1 : 0;

      var halfWidth = isCenter ? Math.floor(width / 2) : width / 2;

      for (var y = 0; y < height; y++) {
        for (var x = 0; x < halfWidth; x++) {
          var startIndex = (y * width + x) << 2;
          var endIndex = (y * width + (width - 1 - x)) << 2;
          swapColor(bitmap.pixels, startIndex, endIndex);
        }
      }

      done(bitmap);
    };
  }

  function rotateDegree(angle) {
    var cx =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "center";
    var cy =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : "center";

    // const r = F.radian(angle)

    return function (bitmap, done) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var newBitmap = createBitmap(
        bitmap.pixels.length,
        bitmap.width,
        bitmap.height
      );
      var width = bitmap.width;
      var height = bitmap.height;

      if (cx == "center") {
        cx = Math.floor(width / 2);
      }

      if (cy == "center") {
        cy = Math.floor(height / 2);
      }

      var translateMatrix = Matrix.CONSTANT.translate(-cx, -cy);
      var translateMatrix2 = Matrix.CONSTANT.translate(cx, cy);
      var shear1Matrix = Matrix.CONSTANT.shear1(angle);
      var shear2Matrix = Matrix.CONSTANT.shear2(angle);

      packXY(function (pixels, i, x, y) {
        // console.log(x, y, i)
        var arr = Matrix.multiply(translateMatrix, [x, y, 1]);

        arr = Matrix.multiply(shear1Matrix, arr).map(Math.round);
        arr = Matrix.multiply(shear2Matrix, arr).map(Math.round);
        arr = Matrix.multiply(shear1Matrix, arr).map(Math.round);
        arr = Matrix.multiply(translateMatrix2, arr);

        var _arr = arr,
          _arr2 = slicedToArray(_arr, 2),
          x1 = _arr2[0],
          y1 = _arr2[1];

        if (x1 < 0) return;
        if (y1 < 0) return;
        if (x1 > width - 1) return;
        if (y1 > height - 1) return;

        var endIndex = (y1 * width + x1) << 2; //  bit 2 shift is  * 4

        fillPixelColor(pixels, endIndex, bitmap.pixels, i);
      })(
        newBitmap,
        function () {
          done(newBitmap);
        },
        opt
      );
    };
  }

  function rotate() {
    var degree =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    degree = parseParamNumber(degree);
    degree = degree % 360;
    return function (bitmap, done) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (degree == 0) return bitmap;

      if (degree == 90 || degree == 270) {
        var newBitmap = createBitmap(
          bitmap.pixels.length,
          bitmap.height,
          bitmap.width
        );
      } else if (degree == 180) {
        var newBitmap = createBitmap(
          bitmap.pixels.length,
          bitmap.width,
          bitmap.height
        );
      } else {
        return rotateDegree(degree)(bitmap, done, opt);
      }
      packXY(function (pixels, i, x, y) {
        if (degree == 90) {
          var endIndex = (x * newBitmap.width + (newBitmap.width - 1 - y)) << 2; //  << 2 is equals to (multiply)* 4
        } else if (degree == 270) {
          var endIndex =
            ((newBitmap.height - 1 - x) * newBitmap.width + y) << 2;
        } else if (degree == 180) {
          var endIndex =
            ((newBitmap.height - 1 - y) * newBitmap.width +
              (newBitmap.width - 1 - x)) <<
            2;
        }

        fillPixelColor(newBitmap.pixels, endIndex, bitmap.pixels, i);
      })(
        bitmap,
        function () {
          done(newBitmap);
        },
        opt
      );
    };
  }

  function histogram$1() {
    var type =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "gray";
    var points =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var $realPoints = [];

    for (var i = 0; i < points.length - 1; i++) {
      var sp = points[i];
      var ep = points[i + 1];

      var distX = ep[0] - sp[0];
      var distY = ep[1] - sp[1];

      var rate = distY / distX;

      for (
        var realIndex = 0, start = sp[0];
        realIndex < distX;
        realIndex++, start++
      ) {
        $realPoints[start] = sp[1] + realIndex * rate;
      }
    }

    $realPoints[255] = 255;

    if (type === "red") {
      return pixel(
        function () {
          $r = $realPoints[$r];
        },
        {},
        { $realPoints: $realPoints }
      );
    } else if (type === "green") {
      return pixel(
        function () {
          $g = $realPoints[$g];
        },
        {},
        { $realPoints: $realPoints }
      );
    } else if (type === "blue") {
      return pixel(
        function () {
          $b = $realPoints[$b];
        },
        {},
        { $realPoints: $realPoints }
      );
    } else {
      return pixel(
        function () {
          var l = Color.RGBtoYCrCb($r, $g, $b);
          var c = Color.YCrCbtoRGB(
            clamp($realPoints[clamp(l.y)]),
            l.cr,
            l.cb,
            0
          );
          $r = c.r;
          $g = c.g;
          $b = c.b;
        },
        {},
        { $realPoints: $realPoints }
      );
    }
  }

  var image$1 = {
    crop: crop,
    resize: resize,
    flipH: flipH,
    flipV: flipV,
    rotate: rotate,
    rotateDegree: rotateDegree,
    histogram: histogram$1,
    "rotate-degree": rotateDegree,
  };

  function bitonal(darkColor, lightColor) {
    var threshold =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

    var $darkColor = Color$1.parse(darkColor);
    var $lightColor = Color$1.parse(lightColor);
    var $threshold = threshold;

    return pixel(
      "\n        const thresholdColor = ( $r + $g + $b ) <= $threshold ? $darkColor : $lightColor\n\n        $r = thresholdColor.r\n        $g = thresholdColor.g \n        $b = thresholdColor.b \n    ",
      {
        $threshold: $threshold,
      },
      {
        $darkColor: $darkColor,
        $lightColor: $lightColor,
      }
    );
  }

  /*
   * @param {Number} amount  -100..100  ,  value < 0  is darken, value > 0 is brighten
   */
  function brightness$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    amount = parseParamNumber(amount);
    var $C = Math.floor(255 * (amount / 100));

    return pixel(
      "\n        $r += $C \n        $g += $C \n        $b += $C \n    ",
      { $C: $C }
    );
  }

  function brownie() {
    var $matrix = [
      0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
      -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0,
      0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, 0, 0,
      0, 1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /**
   *
   * @param {Number} amount from 0 to 100
   */
  function clip() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    amount = parseParamNumber(amount);
    var $C = Math.abs(amount) * 2.55;

    return pixel(
      "\n\n        $r = ($r > 255 - $C) ? 255 : 0\n        $g = ($g > 255 - $C) ? 255 : 0\n        $b = ($b > 255 - $C) ? 255 : 0\n\n    ",
      { $C: $C }
    );
  }

  /**
   *
   * @param {*} amount   min = -128, max = 128
   */
  function contrast$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    amount = parseParamNumber(amount);
    var $C = Math.max((128 + amount) / 128, 0);

    return pixel(
      "\n        $r *= $C\n        $g *= $C\n        $b *= $C\n    ",
      { $C: $C }
    );
  }

  function gamma() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var $C = parseParamNumber(amount);
    return pixel(
      "\n        $r = Math.pow($r / 255, $C) * 255\n        $g = Math.pow($g / 255, $C) * 255\n        $b = Math.pow($b / 255, $C) * 255\n    ",
      { $C: $C }
    );
  }

  /**
   * F.gradient('red', 'blue', 'yellow', 'white', 10)
   * F.gradient('red, blue, yellow, white, 10')
   */
  function gradient$1() {
    // 전체 매개변수 기준으로 파싱
    // 색이 아닌 것 기준으로 scale 변수로 인식

    var params = [].concat(Array.prototype.slice.call(arguments));

    if (params.length === 1 && typeof params[0] === "string") {
      params = Color$1.convertMatchesArray(params[0]);
    }

    params = params.map(function (arg) {
      var res = Color$1.matches(arg);

      if (!res.length) {
        return { type: "scale", value: arg };
      }

      return { type: "param", value: arg };
    });

    var $scale = params.filter(function (it) {
      return it.type == "scale";
    })[0];
    $scale = $scale ? +$scale.value : 256;

    params = params
      .filter(function (it) {
        return it.type == "param";
      })
      .map(function (it) {
        return it.value;
      })
      .join(",");

    var $colors = Color$1.gradient(params, $scale).map(function (c) {
      var _Color$parse = Color$1.parse(c),
        r = _Color$parse.r,
        g = _Color$parse.g,
        b = _Color$parse.b,
        a = _Color$parse.a;

      return { r: r, g: g, b: b, a: a };
    });

    return pixel(
      "\n        const colorIndex = clamp(Math.ceil($r * 0.2126 + $g * 0.7152 + $b * 0.0722))\n        const newColorIndex = clamp(Math.floor(colorIndex * ($scale / 256)))\n        const color = $colors[newColorIndex]\n\n        $r = color.r \n        $g = color.g \n        $b = color.b \n        $a = clamp(Math.floor(color.a * 256))\n    ",
      {},
      { $colors: $colors, $scale: $scale }
    );
  }

  function grayscale(amount) {
    amount = parseParamNumber(amount);
    var C = amount / 100;

    if (C > 1) C = 1;

    var $matrix = [
      0.2126 + 0.7874 * (1 - C),
      0.7152 - 0.7152 * (1 - C),
      0.0722 - 0.0722 * (1 - C),
      0,
      0.2126 - 0.2126 * (1 - C),
      0.7152 + 0.2848 * (1 - C),
      0.0722 - 0.0722 * (1 - C),
      0,
      0.2126 - 0.2126 * (1 - C),
      0.7152 - 0.7152 * (1 - C),
      0.0722 + 0.9278 * (1 - C),
      0,
      0,
      0,
      0,
      1,
    ];

    return pixel(
      /*javascript*/ "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a\n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /*
   * @param {Number} amount   0..360
   */
  function hue() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;

    var $C = parseParamNumber(amount);
    return pixel(
      "\n        var hsv = Color.RGBtoHSV($r, $g, $b);\n\n        // 0 ~ 360 \n        var h = hsv.h;\n        h += Math.abs($C)\n        h = h % 360\n        hsv.h = h\n\n        var rgb = Color.HSVtoRGB(hsv);\n\n        $r = rgb.r\n        $g = rgb.g\n        $b = rgb.b\n    ",
      {
        $C: $C,
      }
    );
  }

  function invert() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    var $C = amount / 100;

    return pixel(
      "\n        $r = (255 - $r) * $C\n        $g = (255 - $g) * $C\n        $b = (255 - $b) * $C\n    ",
      {
        $C: $C,
      }
    );
  }

  function kodachrome() {
    var $matrix = [
      1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
      -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0,
      -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 0, 0, 0,
      1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  function matrix() {
    var $a =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var $b =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var $c =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var $d =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var $e =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var $f =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var $g =
      arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var $h =
      arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var $i =
      arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var $j =
      arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var $k =
      arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var $l =
      arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
    var $m =
      arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
    var $n =
      arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var $o =
      arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var $p =
      arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;

    var $matrix = [
      $a,
      $b,
      $c,
      $d,
      $e,
      $f,
      $g,
      $h,
      $i,
      $j,
      $k,
      $l,
      $m,
      $n,
      $o,
      $p,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /**
   *
   * @param {Number} amount 1..100
   */
  function noise() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var $C = parseParamNumber(amount);
    return pixel(
      "\n        const C = Math.abs($C) * 5\n        const min = -C\n        const max = C \n        const noiseValue = Math.round(min + (Math.random() * (max - min)))\n\n        $r += noiseValue\n        $g += noiseValue\n        $b += noiseValue\n    ",
      {
        $C: $C,
      }
    );
  }

  function opacity() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    var $C = amount / 100;

    return pixel("\n        $a *= $C \n    ", { $C: $C });
  }

  function polaroid() {
    var $matrix = [
      1.438, -0.062, -0.062, 0, -0.122, 1.378, -0.122, 0, -0.016, -0.016, 1.483,
      0, 0, 0, 0, 1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /*
   * @param {Number} amount  -100..100
   */
  function saturation() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    var C = amount / 100;
    var L = 1 - Math.abs(C);

    var $matrix = [L, 0, 0, 0, 0, L, 0, 0, 0, 0, L, 0, 0, 0, 0, L];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /*
   * @param {Number} amount  0..1
   */
  function sepia() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = parseParamNumber(amount);
    if (C > 1) C = 1;

    var $matrix = [
      0.393 + 0.607 * (1 - C),
      0.769 - 0.769 * (1 - C),
      0.189 - 0.189 * (1 - C),
      0,
      0.349 - 0.349 * (1 - C),
      0.686 + 0.314 * (1 - C),
      0.168 - 0.168 * (1 - C),
      0,
      0.272 - 0.272 * (1 - C),
      0.534 - 0.534 * (1 - C),
      0.131 + 0.869 * (1 - C),
      0,
      0,
      0,
      0,
      1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  function shade() {
    var redValue =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var greenValue =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var blueValue =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var $redValue = parseParamNumber(redValue);
    var $greenValue = parseParamNumber(greenValue);
    var $blueValue = parseParamNumber(blueValue);

    return pixel(
      "\n        $r *= $redValue\n        $g *= $greenValue\n        $b *= $blueValue\n    ",
      {
        $redValue: $redValue,
        $greenValue: $greenValue,
        $blueValue: $blueValue,
      }
    );
  }

  function shift() {
    var $matrix = [
      1.438, -0.062, -0.062, 0, -0.122, 1.378, -0.122, 0, -0.016, -0.016, 1.483,
      0, 0, 0, 0, 1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  /**
   * change the relative darkness of (a part of an image) by overexposure to light.
   * @param {*} r
   * @param {*} g
   * @param {*} b
   */
  function solarize(redValue, greenValue, blueValue) {
    var $redValue = parseParamNumber(redValue);
    var $greenValue = parseParamNumber(greenValue);
    var $blueValue = parseParamNumber(blueValue);
    return pixel(
      "\n        $r = ($r < $redValue) ? 255 - $r: $r\n        $g = ($g < $greenValue) ? 255 - $g: $g\n        $b = ($b < $blueValue) ? 255 - $b: $b\n    ",
      {
        $redValue: $redValue,
        $greenValue: $greenValue,
        $blueValue: $blueValue,
      }
    );
  }

  function technicolor() {
    var $matrix = [
      1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
      -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0,
      -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 0, 0, 0, 1,
    ];

    return pixel(
      "\n        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a\n        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a\n        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a\n        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a        \n    ",
      {
        $matrix: $matrix,
      }
    );
  }

  function thresholdColor() {
    var scale =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
    var amount =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var hasColor =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var $scale = parseParamNumber(scale);
    amount = parseParamNumber(amount);
    var $C = amount / 100;
    var $hasColor = hasColor;

    return pixel(
      "\n        // refer to Color.brightness \n        const v = ($C * Math.ceil($r * 0.2126 + $g * 0.7152 + $b * 0.0722) ) >= $scale ? 255 : 0;\n\n        if ($hasColor) {\n\n            if (v == 0) {\n                $r = 0 \n                $g = 0 \n                $b = 0\n            }\n            \n        } else {\n            const value = Math.round(v)\n            $r = value \n            $g = value \n            $b = value \n        }\n        \n    ",
      {
        $C: $C,
        $scale: $scale,
        $hasColor: $hasColor,
      }
    );
  }

  /*
   * @param {Number} amount  0..100
   */
  function threshold() {
    var scale =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
    var amount =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return thresholdColor(scale, amount, false);
  }

  function tint() {
    var redTint =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var greenTint =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var blueTint =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var $redTint = parseParamNumber(redTint);
    var $greenTint = parseParamNumber(greenTint);
    var $blueTint = parseParamNumber(blueTint);
    return pixel(
      "\n\n        $r += (255 - $r) * $redTint\n        $g += (255 - $g) * $greenTint\n        $b += (255 - $b) * $blueTint\n\n    ",
      {
        $redTint: $redTint,
        $greenTint: $greenTint,
        $blueTint: $blueTint,
      }
    );
  }

  var pixel$1 = {
    bitonal: bitonal,
    brightness: brightness$1,
    brownie: brownie,
    clip: clip,
    contrast: contrast$1,
    gamma: gamma,
    gradient: gradient$1,
    grayscale: grayscale,
    hue: hue,
    invert: invert,
    kodachrome: kodachrome,
    matrix: matrix,
    noise: noise,
    opacity: opacity,
    polaroid: polaroid,
    saturation: saturation,
    sepia: sepia,
    shade: shade,
    shift: shift,
    solarize: solarize,
    technicolor: technicolor,
    threshold: threshold,
    "threshold-color": thresholdColor,
    tint: tint,
  };

  function blur() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    amount = parseParamNumber(amount);

    return convolution(createBlurMatrix(amount));
  }

  /*
   * carve, mold, or stamp a design on (a surface) so that it stands out in relief.
   *
   * @param {Number} amount   0.0 .. 4.0
   */
  function emboss() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

    amount = parseParamNumber(amount);
    return convolution([
      amount * -2.0,
      -amount,
      0.0,
      -amount,
      1.0,
      amount,
      0.0,
      amount,
      amount * 2.0,
    ]);
  }

  function gaussianBlur() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    var C = amount / 100;

    return convolution(weight([1, 2, 1, 2, 4, 2, 1, 2, 1], (1 / 16) * C));
  }

  function gaussianBlur5x() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    var C = amount / 100;
    return convolution(
      weight(
        [
          1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4,
          1, 4, 6, 4, 1,
        ],
        (1 / 256) * C
      )
    );
  }

  function grayscale2() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          0.3, 0.3, 0.3, 0, 0, 0.59, 0.59, 0.59, 0, 0, 0.11, 0.11, 0.11, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        amount / 100
      )
    );
  }

  function identity() {
    return convolution([0, 0, 0, 0, 1, 0, 0, 0, 0]);
  }

  function kirschHorizontal() {
    var count =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    count = parseParamNumber(count);
    return convolution([5, 5, 5, -3, 0, -3, -3, -3, -3]);
  }

  function kirschVertical() {
    var count =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    count = parseParamNumber(count);
    return convolution([5, -3, -3, 5, 0, -3, 5, -3, -3]);
  }

  function laplacian() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight([-1, -1, -1, -1, 8, -1, -1, -1, -1], amount / 100)
    );
  }

  function laplacian5x() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, -1, -1, -1, -1,
          -1, -1, -1, -1, -1, -1, -1, -1,
        ],
        amount / 100
      )
    );
  }

  function motionBlur() {
    return convolution(
      weight(
        [
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        ],
        1 / 9
      )
    );
  }

  function motionBlur2() {
    return convolution(
      weight(
        [
          1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
          0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
          0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        ],
        1 / 9
      )
    );
  }

  function motionBlur3() {
    return convolution(
      weight(
        [
          1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1,
          0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
          0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
          0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
        ],
        1 / 9
      )
    );
  }

  function negative() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 1,
          1, 1, 1,
        ],
        amount / 100
      )
    );
  }

  function sepia2() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          0.393, 0.349, 0.272, 0, 0, 0.769, 0.686, 0.534, 0, 0, 0.189, 0.168,
          0.131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        amount / 100
      )
    );
  }

  function sharpen() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(weight([0, -1, 0, -1, 5, -1, 0, -1, 0], amount / 100));
  }

  function sobelHorizontal() {
    return convolution([-1, -2, -1, 0, 0, 0, 1, 2, 1]);
  }

  function sobelVertical() {
    return convolution([-1, 0, 1, -2, 0, 2, -1, 0, 1]);
  }

  /*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

  var mul_table = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ];

  var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];

  function BlurStack() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
  }

  function stackBlurImage(bitmap, radius, blurAlphaChannel) {
    if (blurAlphaChannel) return stackBlurCanvasRGBA(bitmap, 0, 0, radius);
    else return stackBlurCanvasRGB(bitmap, 0, 0, radius);
  }

  function stackBlurCanvasRGBA(bitmap, top_x, top_y, radius) {
    if (isNaN(radius) || radius < 1) return bitmap;
    radius |= 0;

    var pixels = bitmap.pixels,
      width = bitmap.width,
      height = bitmap.height;

    var x,
      y,
      i,
      p,
      yp,
      yi,
      yw,
      r_sum,
      g_sum,
      b_sum,
      a_sum,
      r_out_sum,
      g_out_sum,
      b_out_sum,
      a_out_sum,
      r_in_sum,
      g_in_sum,
      b_in_sum,
      a_in_sum,
      pr,
      pg,
      pb,
      pa,
      rbs;

    var div = radius + radius + 1;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = (radiusPlus1 * (radiusPlus1 + 1)) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++) {
      stack = stack.next = new BlurStack();
      if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++) {
      r_in_sum =
        g_in_sum =
        b_in_sum =
        a_in_sum =
        r_sum =
        g_sum =
        b_sum =
        a_sum =
          0;

      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
      a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;
      a_sum += sumFactor * pa;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack.a = pa;
        stack = stack.next;
      }

      for (i = 1; i < radiusPlus1; i++) {
        p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
        r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
        a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;
        a_in_sum += pa;

        stack = stack.next;
      }

      stackIn = stackStart;
      stackOut = stackEnd;
      for (x = 0; x < width; x++) {
        pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
        if (pa != 0) {
          pa = 255 / pa;
          pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
          pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
          pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
        } else {
          pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
        }

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;
        a_sum -= a_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;
        a_out_sum -= stackIn.a;

        p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

        r_in_sum += stackIn.r = pixels[p];
        g_in_sum += stackIn.g = pixels[p + 1];
        b_in_sum += stackIn.b = pixels[p + 2];
        a_in_sum += stackIn.a = pixels[p + 3];

        r_sum += r_in_sum;
        g_sum += g_in_sum;
        b_sum += b_in_sum;
        a_sum += a_in_sum;

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;
        a_out_sum += pa = stackOut.a;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;
        a_in_sum -= pa;

        stackOut = stackOut.next;

        yi += 4;
      }
      yw += width;
    }

    for (x = 0; x < width; x++) {
      g_in_sum =
        b_in_sum =
        a_in_sum =
        r_in_sum =
        g_sum =
        b_sum =
        a_sum =
        r_sum =
          0;

      yi = x << 2;
      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
      a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;
      a_sum += sumFactor * pa;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack.a = pa;
        stack = stack.next;
      }

      yp = width;

      for (i = 1; i <= radius; i++) {
        yi = (yp + x) << 2;

        r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
        a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;
        a_in_sum += pa;

        stack = stack.next;

        if (i < heightMinus1) {
          yp += width;
        }
      }

      yi = x;
      stackIn = stackStart;
      stackOut = stackEnd;
      for (y = 0; y < height; y++) {
        p = yi << 2;
        pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
        if (pa > 0) {
          pa = 255 / pa;
          pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
          pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
          pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
        } else {
          pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
        }

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;
        a_sum -= a_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;
        a_out_sum -= stackIn.a;

        p =
          (x +
            ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) *
              width) <<
          2;

        r_sum += r_in_sum += stackIn.r = pixels[p];
        g_sum += g_in_sum += stackIn.g = pixels[p + 1];
        b_sum += b_in_sum += stackIn.b = pixels[p + 2];
        a_sum += a_in_sum += stackIn.a = pixels[p + 3];

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;
        a_out_sum += pa = stackOut.a;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;
        a_in_sum -= pa;

        stackOut = stackOut.next;

        yi += width;
      }
    }

    return bitmap;
  }

  function stackBlurCanvasRGBA(bitmap, top_x, top_y, radius) {
    if (isNaN(radius) || radius < 1) return bitmap;
    radius |= 0;

    var pixels = bitmap.pixels,
      width = bitmap.width,
      height = bitmap.height;

    var x,
      y,
      i,
      p,
      yp,
      yi,
      yw,
      r_sum,
      g_sum,
      b_sum,
      r_out_sum,
      g_out_sum,
      b_out_sum,
      r_in_sum,
      g_in_sum,
      b_in_sum,
      pr,
      pg,
      pb,
      rbs;

    var div = radius + radius + 1;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = (radiusPlus1 * (radiusPlus1 + 1)) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++) {
      stack = stack.next = new BlurStack();
      if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++) {
      r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack = stack.next;
      }

      for (i = 1; i < radiusPlus1; i++) {
        p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
        r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[p + 2]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;

        stack = stack.next;
      }

      stackIn = stackStart;
      stackOut = stackEnd;
      for (x = 0; x < width; x++) {
        pixels[yi] = (r_sum * mul_sum) >> shg_sum;
        pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum;
        pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum;

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;

        p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

        r_in_sum += stackIn.r = pixels[p];
        g_in_sum += stackIn.g = pixels[p + 1];
        b_in_sum += stackIn.b = pixels[p + 2];

        r_sum += r_in_sum;
        g_sum += g_in_sum;
        b_sum += b_in_sum;

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;

        stackOut = stackOut.next;

        yi += 4;
      }
      yw += width;
    }

    for (x = 0; x < width; x++) {
      g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

      yi = x << 2;
      r_out_sum = radiusPlus1 * (pr = pixels[yi]);
      g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
      b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

      r_sum += sumFactor * pr;
      g_sum += sumFactor * pg;
      b_sum += sumFactor * pb;

      stack = stackStart;

      for (i = 0; i < radiusPlus1; i++) {
        stack.r = pr;
        stack.g = pg;
        stack.b = pb;
        stack = stack.next;
      }

      yp = width;

      for (i = 1; i <= radius; i++) {
        yi = (yp + x) << 2;

        r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
        g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
        b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;

        r_in_sum += pr;
        g_in_sum += pg;
        b_in_sum += pb;

        stack = stack.next;

        if (i < heightMinus1) {
          yp += width;
        }
      }

      yi = x;
      stackIn = stackStart;
      stackOut = stackEnd;
      for (y = 0; y < height; y++) {
        p = yi << 2;
        pixels[p] = (r_sum * mul_sum) >> shg_sum;
        pixels[p + 1] = (g_sum * mul_sum) >> shg_sum;
        pixels[p + 2] = (b_sum * mul_sum) >> shg_sum;

        r_sum -= r_out_sum;
        g_sum -= g_out_sum;
        b_sum -= b_out_sum;

        r_out_sum -= stackIn.r;
        g_out_sum -= stackIn.g;
        b_out_sum -= stackIn.b;

        p =
          (x +
            ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) *
              width) <<
          2;

        r_sum += r_in_sum += stackIn.r = pixels[p];
        g_sum += g_in_sum += stackIn.g = pixels[p + 1];
        b_sum += b_in_sum += stackIn.b = pixels[p + 2];

        stackIn = stackIn.next;

        r_out_sum += pr = stackOut.r;
        g_out_sum += pg = stackOut.g;
        b_out_sum += pb = stackOut.b;

        r_in_sum -= pr;
        g_in_sum -= pg;
        b_in_sum -= pb;

        stackOut = stackOut.next;

        yi += width;
      }
    }

    return bitmap;
  }

  function stackBlur() {
    var radius =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var hasAlphaChannel =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    radius = parseParamNumber(radius);

    return function (bitmap, done) {
      var newBitmap = stackBlurImage(bitmap, radius, hasAlphaChannel);

      done(newBitmap);
    };
  }

  function transparency() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0,
          0, 1,
        ],
        amount / 100
      )
    );
  }

  function unsharpMasking() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 256;

    amount = parseParamNumber(amount);
    return convolution(
      weight(
        [
          1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, -476, 24, 6, 4, 16, 24, 16, 4,
          1, 4, 6, 4, 1,
        ],
        -1 / amount
      )
    );
  }

  var matrix$1 = {
    blur: blur,
    emboss: emboss,
    gaussianBlur: gaussianBlur,
    "gaussian-blur": gaussianBlur,
    gaussianBlur5x: gaussianBlur5x,
    "gaussian-blur-5x": gaussianBlur5x,
    grayscale2: grayscale2,
    normal: identity,
    kirschHorizontal: kirschHorizontal,
    "kirsch-horizontal": kirschHorizontal,
    kirschVertical: kirschVertical,
    "kirsch-vertical": kirschVertical,
    laplacian: laplacian,
    laplacian5x: laplacian5x,
    "laplacian-5x": laplacian5x,
    motionBlur: motionBlur,
    "motion-blur": motionBlur,
    motionBlur2: motionBlur2,
    "motion-blur-2": motionBlur2,
    motionBlur3: motionBlur3,
    "motion-blur-3": motionBlur3,
    negative: negative,
    sepia2: sepia2,
    sharpen: sharpen,
    sobelHorizontal: sobelHorizontal,
    "sobel-horizontal": sobelHorizontal,
    sobelVertical: sobelVertical,
    "sobel-vertical": sobelVertical,
    stackBlur: stackBlur,
    "stack-blur": stackBlur,
    transparency: transparency,
    unsharpMasking: unsharpMasking,
    "unsharp-masking": unsharpMasking,
  };

  function kirsch() {
    return filter$1("kirsch-horizontal kirsch-vertical");
  }

  function sobel() {
    return filter$1("sobel-horizontal sobel-vertical");
  }

  function vintage() {
    return filter$1("brightness(15) saturation(-20) gamma(1.8)");
  }

  var multi$2 = {
    kirsch: kirsch,
    sobel: sobel,
    vintage: vintage,
  };

  var FilterList = _extends({}, image$1, pixel$1, matrix$1, multi$2);

  var _functions;

  var makeId = 0;

  var functions$1 =
    ((_functions = {
      partial: partial,
      multi: multi$1,
      merge: merge$1,
      weight: weight,
      repeat: repeat,
      colorMatrix: colorMatrix,
      each: each$1,
      eachXY: eachXY,
      createRandomCount: createRandomCount,
      createRandRange: createRandRange,
      createBitmap: createBitmap,
      createBlurMatrix: createBlurMatrix,
      pack: pack$1,
      packXY: packXY,
      pixel: pixel,
      getBitmap: getBitmap,
      putBitmap: putBitmap,
      radian: radian,
      convolution: convolution,
      parseParamNumber: parseParamNumber,
      filter: filter$1,
      clamp: clamp$1,
      fillColor: fillColor,
      fillPixelColor: fillPixelColor,
    }),
    defineProperty(_functions, "multi", multi$1),
    defineProperty(_functions, "merge", merge$1),
    defineProperty(_functions, "matches", matches$1),
    defineProperty(_functions, "parseFilter", parseFilter),
    defineProperty(_functions, "partial", partial),
    _functions);

  var LocalFilter = functions$1;

  function weight(arr) {
    var num =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return arr.map(function (i) {
      return i * num;
    });
  }

  function repeat(value, num) {
    var arr = new Array(num);
    for (var i = 0; i < num; i++) {
      arr[i] = value;
    }
    return arr;
  }

  function colorMatrix(pixels, i, matrix) {
    var r = pixels[i],
      g = pixels[i + 1],
      b = pixels[i + 2],
      a = pixels[i + 3];

    fillColor(
      pixels,
      i,
      matrix[0] * r + matrix[1] * g + matrix[2] * b + matrix[3] * a,
      matrix[4] * r + matrix[5] * g + matrix[6] * b + matrix[7] * a,
      matrix[8] * r + matrix[9] * g + matrix[10] * b + matrix[11] * a,
      matrix[12] * r + matrix[13] * g + matrix[14] * b + matrix[15] * a
    );
  }

  function makeFilter$1(filter) {
    if (typeof filter == "function") {
      return filter;
    }

    if (typeof filter == "string") {
      filter = [filter];
    }

    filter = filter.slice(0);
    var filterName = filter.shift();

    if (typeof filterName == "function") {
      return filterName;
    }

    var params = filter;

    var filterFunction = FilterList[filterName] || LocalFilter[filterName];

    if (!filterFunction) {
      throw new Error(filterName + " is not filter. please check filter name.");
    }
    return filterFunction.apply(filterFunction, params);
  }

  function forLoop(max) {
    var index =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var step =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var callback = arguments[3];
    var done = arguments[4];
    var functionDumpCount =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10000;
    var frameTimer =
      arguments.length > 6 && arguments[6] !== undefined
        ? arguments[6]
        : "full";
    var loopCount =
      arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 50;

    var runIndex = index;
    var timer = function timer(callback) {
      setTimeout(callback, 0);
    };

    if (frameTimer == "requestAnimationFrame") {
      timer = requestAnimationFrame;
      functionDumpCount = 1000;
    }

    if (frameTimer == "full") {
      /* only for loop  */
      timer = null;
      functionDumpCount = max;
    }

    function makeFunction() {
      var count =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

      var arr = [].concat(toConsumableArray(Array(count)));

      var functionStrings = arr
        .map(function (countIndex) {
          return "cri = ri + i * s; if (cri >= mx) return {currentRunIndex: cri, i: null}; c(cri); i++;";
        })
        .join("\n");

      var smallLoopFunction = new Function(
        "ri",
        "i",
        "s",
        "mx",
        "c",
        "\n            let cri = ri;\n            \n            " +
          functionStrings +
          "\n            \n            return {currentRunIndex: cri, i: i} \n        "
      );

      return smallLoopFunction;
    }

    function runCallback() {
      var smallLoopFunction = makeFunction(loopCount); // loop is call  20 callbacks at once

      var currentRunIndex = runIndex;
      var ret = {};
      var i = 0;
      while (i < functionDumpCount) {
        ret = smallLoopFunction(runIndex, i, step, max, callback);

        if (ret.i == null) {
          currentRunIndex = ret.currentRunIndex;
          break;
        }

        i = ret.i;
        currentRunIndex = ret.currentRunIndex;
      }

      nextCallback(currentRunIndex);
    }

    function nextCallback(currentRunIndex) {
      if (currentRunIndex) {
        runIndex = currentRunIndex;
      } else {
        runIndex += step;
      }

      if (runIndex >= max) {
        done();
        return;
      }

      if (timer) timer(runCallback);
      else runCallback();
    }

    runCallback();
  }

  function each$1(len, callback, done) {
    var opt =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    forLoop(
      len,
      0,
      4,
      function (i) {
        callback(i, i >> 2 /* xyIndex */);
      },
      function () {
        done();
      },
      opt.functionDumpCount,
      opt.frameTimer,
      opt.loopCount
    );
  }

  function eachXY(len, width, callback, done) {
    var opt =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    forLoop(
      len,
      0,
      4,
      function (i) {
        var xyIndex = i >> 2;
        callback(i, xyIndex % width, Math.floor(xyIndex / width));
      },
      function () {
        done();
      },
      opt.functionDumpCount,
      opt.frameTimer,
      opt.loopCount
    );
  }

  function createRandRange(min, max, count) {
    var result = [];

    for (var i = 1; i <= count; i++) {
      var num = Math.random() * (max - min) + min;
      var sign = Math.floor(Math.random() * 10) % 2 == 0 ? -1 : 1;
      result.push(sign * num);
    }

    result.sort();

    var centerIndex = Math.floor(count >> 1);
    var a = result[centerIndex];
    result[centerIndex] = result[0];
    result[0] = a;

    return result;
  }

  function createRandomCount() {
    return [3 * 3, 4 * 4, 5 * 5, 6 * 6, 7 * 7, 8 * 8, 9 * 9, 10 * 10].sort(
      function (a, b) {
        return 0.5 - Math.random();
      }
    )[0];
  }

  function createBitmap(length, width, height) {
    return {
      pixels: new Uint8ClampedArray(length),
      width: width,
      height: height,
    };
  }

  function putPixel(dstBitmap, srcBitmap, startX, startY) {
    var len = srcBitmap.pixels.length / 4;
    var dstX = 0,
      dstY = 0,
      x = 0,
      y = 0,
      srcIndex = 0,
      dstIndex = 0;
    for (var i = 0; i < len; i++) {
      (x = i % srcBitmap.width), (y = Math.floor(i / srcBitmap.width));

      dstX = startX + x;
      dstY = startY + y;

      if (dstX > dstBitmap.width) continue;
      if (dstY > dstBitmap.height) continue;

      srcIndex = (y * srcBitmap.width + x) << 2;
      dstIndex = (dstY * dstBitmap.width + dstX) << 2;

      dstBitmap.pixels[dstIndex] = srcBitmap.pixels[srcIndex];
      dstBitmap.pixels[dstIndex + 1] = srcBitmap.pixels[srcIndex + 1];
      dstBitmap.pixels[dstIndex + 2] = srcBitmap.pixels[srcIndex + 2];
      dstBitmap.pixels[dstIndex + 3] = srcBitmap.pixels[srcIndex + 3];
    }
  }

  function getPixel(srcBitmap, dstBitmap, startX, startY) {
    var len = dstBitmap.pixels.length >> 2;
    var srcX = 0,
      srcY = 0,
      x = 0,
      y = 0,
      srcIndex = 0,
      dstIndex = 0;
    for (var i = 0; i < len; i++) {
      var x = i % dstBitmap.width,
        y = Math.floor(i / dstBitmap.width);

      srcX = startX + x;
      srcY = startY + y;

      if (srcX > srcBitmap.width) continue;
      if (srcY > srcBitmap.height) continue;

      srcIndex = (srcY * srcBitmap.width + srcX) << 2;
      dstIndex = (y * dstBitmap.width + x) << 2;

      dstBitmap.pixels[dstIndex] = srcBitmap.pixels[srcIndex];
      dstBitmap.pixels[dstIndex + 1] = srcBitmap.pixels[srcIndex + 1];
      dstBitmap.pixels[dstIndex + 2] = srcBitmap.pixels[srcIndex + 2];
      dstBitmap.pixels[dstIndex + 3] = srcBitmap.pixels[srcIndex + 3];
    }
  }

  function cloneBitmap(bitmap) {
    var padding =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var width = bitmap.width + padding;
    var height = bitmap.height + padding;

    var newBitmap = {
      pixels: new Uint8ClampedArray(width * height * 4),
      width: width,
      height: height,
    };

    return newBitmap;
  }

  function getBitmap(bitmap, area) {
    return Canvas.getBitmap(bitmap, area);
  }

  function putBitmap(bitmap, subBitmap, area) {
    return Canvas.putBitmap(bitmap, subBitmap, area);
  }

  function parseParamNumber(param) {
    if (typeof param === "string") {
      param = param.replace(/deg/, "");
      param = param.replace(/px/, "");
    }
    return +param;
  }

  var filter_regexp = /(([\w_\-]+)(\(([^\)]*)\))?)+/gi;
  function pack$1(callback) {
    return function (bitmap, done) {
      each$1(
        bitmap.pixels.length,
        function (i, xyIndex) {
          callback(
            bitmap.pixels,
            i,
            xyIndex,
            bitmap.pixels[i],
            bitmap.pixels[i + 1],
            bitmap.pixels[i + 2],
            bitmap.pixels[i + 3]
          );
        },
        function () {
          done(bitmap);
        }
      );
    };
  }

  function makePrebuildUserFilterList(arr) {
    var codeString = arr
      .map(function (it) {
        return (
          " \n            " +
          it.userFunction.$preContext +
          "\n\n            " +
          it.userFunction.$preCallbackString +
          "\n\n            $r = clamp($r); $g = clamp($g); $b = clamp($b); $a = clamp($a);\n        "
        );
      })
      .join("\n\n");

    var rootContextObject = { clamp: clamp$1, Color: Color$1 };
    arr.forEach(function (it) {
      Object.assign(rootContextObject, it.userFunction.rootContextObject);
    });

    var rootContextDefine =
      "const " +
      Object.keys(rootContextObject)
        .map(function (key) {
          return " " + key + " = $rc." + key + " ";
        })
        .join(",");

    var FunctionCode =
      " \n    let $r = $p[$pi], $g = $p[$pi+1], $b = $p[$pi+2], $a = $p[$pi+3];\n    \n    " +
      rootContextDefine +
      "\n\n    " +
      codeString +
      "\n    \n    $p[$pi] = $r; $p[$pi+1] = $g; $p[$pi+2] = $b; $p[$pi+3] = $a;\n    ";

    var userFunction = new Function("$p", "$pi", "$rc", FunctionCode);

    return function ($pixels, $pixelIndex) {
      userFunction($pixels, $pixelIndex, rootContextObject);
    };
  }

  function makeUserFilterFunctionList(arr) {
    var rootContextObject = {};
    var list = arr.map(function (it) {
      var newKeys = [];

      Object.keys(it.context).forEach(function (key, i) {
        newKeys[key] = "n$" + makeId++ + key + "$";
      });

      Object.keys(it.rootContext).forEach(function (key, i) {
        newKeys[key] = "r$" + makeId++ + key + "$";

        rootContextObject[newKeys[key]] = it.rootContext[key];
      });

      var preContext = Object.keys(it.context)
        .filter(function (key) {
          if (
            typeof it.context[key] === "number" ||
            typeof it.context[key] === "string"
          ) {
            return false;
          } else if (Array.isArray(it.context[key])) {
            if (
              typeof it.context[key][0] == "number" ||
              typeof it.context[key][0] == "string"
            ) {
              return false;
            }
          }

          return true;
        })
        .map(function (key, i) {
          return [newKeys[key], JSON.stringify(it.context[key])].join(" = ");
        });

      var preCallbackString = it.callback;

      if (typeof it.callback === "function") {
        preCallbackString = it.callback.toString().split("{");

        preCallbackString.shift();
        preCallbackString = preCallbackString.join("{");
        preCallbackString = preCallbackString.split("}");
        preCallbackString.pop();
        preCallbackString = preCallbackString.join("}");
      }

      Object.keys(newKeys).forEach(function (key) {
        var newKey = newKeys[key];

        if (
          typeof it.context[key] === "number" ||
          typeof it.context[key] === "string"
        ) {
          preCallbackString = preCallbackString.replace(
            new RegExp("\\" + key, "g"),
            it.context[key]
          );
        } else if (Array.isArray(it.context[key])) {
          if (
            typeof it.context[key][0] == "number" ||
            typeof it.context[key][0] == "string"
          ) {
            it.context[key].forEach(function (item, index) {
              preCallbackString = preCallbackString.replace(
                new RegExp("\\" + key + "\\[" + index + "\\]", "g"),
                item
              );
            });
          } else {
            preCallbackString = preCallbackString.replace(
              new RegExp("\\" + key, "g"),
              newKey
            );
          }
        } else {
          preCallbackString = preCallbackString.replace(
            new RegExp("\\" + key, "g"),
            newKey
          );
        }
      });

      return { preCallbackString: preCallbackString, preContext: preContext };
    });

    var preContext = list
      .map(function (it, i) {
        return it.preContext.length ? "const " + it.preContext + ";" : "";
      })
      .join("\n\n");

    var preCallbackString = list
      .map(function (it) {
        return it.preCallbackString;
      })
      .join("\n\n");

    var FunctionCode =
      " \n    let $r = $pixels[$pixelIndex], $g = $pixels[$pixelIndex+1], $b = $pixels[$pixelIndex+2], $a = $pixels[$pixelIndex+3];\n\n    " +
      preContext +
      "\n\n    " +
      preCallbackString +
      "\n    \n    $pixels[$pixelIndex] = $r\n    $pixels[$pixelIndex+1] = $g \n    $pixels[$pixelIndex+2] = $b   \n    $pixels[$pixelIndex+3] = $a   \n    ";

    var userFunction = new Function(
      "$pixels",
      "$pixelIndex",
      "$clamp",
      "$Color",
      FunctionCode
    );

    userFunction.$preCallbackString = preCallbackString;
    userFunction.$preContext = preContext;
    userFunction.rootContextObject = rootContextObject;

    return userFunction;
  }

  function makeUserFilterFunction(callback) {
    var context =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rootContext =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return makeUserFilterFunctionList([
      { callback: callback, context: context, rootContext: rootContext },
    ]);
  }

  function pixel(callback) {
    var context =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rootContext =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var userFunction = makeUserFilterFunction(callback, context, rootContext);

    var returnCallback = function returnCallback(bitmap, done) {};

    returnCallback.userFunction = userFunction;

    return returnCallback;
  }

  var ColorListIndex = [0, 1, 2, 3];

  function swapColor(pixels, startIndex, endIndex) {
    ColorListIndex.forEach(function (i) {
      var temp = pixels[startIndex + i];
      pixels[startIndex + i] = pixels[endIndex + i];
      pixels[endIndex + i] = temp;
    });
  }

  function packXY(callback) {
    return function (bitmap, done) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      eachXY(
        bitmap.pixels.length,
        bitmap.width,
        function (i, x, y) {
          callback(bitmap.pixels, i, x, y);
        },
        function () {
          done(bitmap);
        },
        opt
      );
    };
  }

  function radian(degree) {
    return Matrix.CONSTANT.radian(degree);
  }

  function createBlurMatrix() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

    var count = Math.pow(amount, 2);
    var value = 1 / count;
    return repeat(value, count);
  }

  function fillColor(pixels, i, r, g, b, a) {
    if (arguments.length == 3) {
      var _arguments$ = arguments[2],
        r = _arguments$.r,
        g = _arguments$.g,
        b = _arguments$.b,
        a = _arguments$.a;
    }

    if (typeof r == "number") {
      pixels[i] = r;
    }
    if (typeof g == "number") {
      pixels[i + 1] = g;
    }
    if (typeof b == "number") {
      pixels[i + 2] = b;
    }
    if (typeof a == "number") {
      pixels[i + 3] = a;
    }
  }

  function fillPixelColor(
    targetPixels,
    targetIndex,
    sourcePixels,
    sourceIndex
  ) {
    fillColor(
      targetPixels,
      targetIndex,
      sourcePixels[sourceIndex],
      sourcePixels[sourceIndex + 1],
      sourcePixels[sourceIndex + 2],
      sourcePixels[sourceIndex + 3]
    );
  }

  function createWeightTable(weights) {
    var min =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;

    var weightTable = [];

    weightTable = weights.map(function (w, i) {
      return [];
    });

    weights.forEach(function (w, i) {
      if (w != 0) {
        var data = weightTable[i];

        for (var i = min; i <= max; i++) {
          data[i] = w * i;
        }
      }
    });

    return weightTable;
  }

  function createSubPixelWeightFunction(
    weights,
    weightTable,
    width,
    height,
    opaque
  ) {
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var alphaFac = opaque ? 1 : 0;

    var FunctionCode =
      "let r = 0, g = 0, b = 0, a = 0, scy = 0, scx =0, si = 0; ";
    var R = [];
    var G = [];
    var B = [];
    var A = [];
    weights.forEach(function (wt, index) {
      var cy = Math.floor(index / side);
      var cx = index % side;
      var distY = cy - halfSide;
      var distX = cx - halfSide;

      if (wt == 0) {
        return;
      }

      R.push(
        "$t[" +
          index +
          "][$sp[(($sy + (" +
          distY +
          ")) * " +
          width +
          " + ($sx + (" +
          distX +
          "))) * 4]]"
      );
      G.push(
        "$t[" +
          index +
          "][$sp[(($sy + (" +
          distY +
          ")) * " +
          width +
          " + ($sx + (" +
          distX +
          "))) * 4 + 1]]"
      );
      B.push(
        "$t[" +
          index +
          "][$sp[(($sy + (" +
          distY +
          ")) * " +
          width +
          " + ($sx + (" +
          distX +
          "))) * 4 + 2]]"
      );
      A.push(
        "$t[" +
          index +
          "][$sp[(($sy + (" +
          distY +
          ")) * " +
          width +
          " + ($sx + (" +
          distX +
          "))) * 4 + 3]]"
      );
    });

    FunctionCode +=
      "r = " +
      R.join(" + ") +
      "; g = " +
      G.join(" + ") +
      "; b = " +
      B.join(" + ") +
      "; a = " +
      A.join(" + ") +
      ";";
    FunctionCode +=
      "$dp[$di] = r; $dp[$di+1] = g;$dp[$di+2] = b;$dp[$di+3] = a + (" +
      alphaFac +
      ")*(255-a); ";

    // console.log(FunctionCode)

    var subPixelFunction = new Function(
      "$dp",
      "$sp",
      "$di",
      "$sx",
      "$sy",
      "$t",
      FunctionCode
    );

    return function ($dp, $sp, $di, $sx, $sy) {
      subPixelFunction($dp, $sp, $di, $sx, $sy, weightTable);
    };
  }

  function convolution(weights) {
    var opaque =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var weightTable = createWeightTable(weights);
    return function (bitmap, done) {
      var side = Math.round(Math.sqrt(weights.length));
      var padding = side * 2;

      // 원본 크기를 늘림
      var sourceBitmap = cloneBitmap(bitmap, padding);

      // 원본 데이타 복사
      putPixel(sourceBitmap, bitmap, side, side);

      // 최종 아웃풋
      var newBitmap = createBitmap(
        sourceBitmap.pixels.length,
        sourceBitmap.width,
        sourceBitmap.height
      );

      // 마지막 원본 아웃풋
      var returnBitmap = createBitmap(
        bitmap.pixels.length,
        bitmap.width,
        bitmap.height
      );

      var subPixelWeightFunction = createSubPixelWeightFunction(
        weights,
        weightTable,
        sourceBitmap.width,
        sourceBitmap.height,
        opaque
      );

      var len = bitmap.pixels.length / 4;
      for (var i = 0; i < len; i++) {
        var xyIndex = i,
          x = (xyIndex % bitmap.width) + side,
          y = Math.floor(xyIndex / bitmap.width) + side;

        subPixelWeightFunction(
          newBitmap.pixels,
          sourceBitmap.pixels,
          (y * sourceBitmap.width + x) * 4,
          x,
          y
        );
      }

      getPixel(newBitmap, returnBitmap, side, side);
      done(returnBitmap);
    };
  }

  function matches$1(str) {
    var ret = Color$1.convertMatches(str);
    var matches = ret.str.match(filter_regexp);
    var result = [];

    if (!matches) {
      return result;
    }

    result = matches.map(function (it) {
      return { filter: it, origin: Color$1.reverseMatches(it, ret.matches) };
    });

    var pos = { next: 0 };
    result = result
      .map(function (item) {
        var startIndex = str.indexOf(item.origin, pos.next);

        item.startIndex = startIndex;
        item.endIndex = startIndex + item.origin.length;

        item.arr = parseFilter(item.origin);

        pos.next = item.endIndex;

        return item;
      })
      .filter(function (it) {
        if (!it.arr.length) return false;
        return true;
      });

    return result;
  }

  /**
   * Filter Parser
   *
   * F.parseFilter('blur(30)') == ['blue', '30']
   * F.parseFilter('gradient(white, black, 3)') == ['gradient', 'white', 'black', '3']
   *
   * @param {String} filterString
   */
  function parseFilter(filterString) {
    var ret = Color$1.convertMatches(filterString);
    var matches = ret.str.match(filter_regexp);

    if (!matches[0]) {
      return [];
    }

    var arr = matches[0].split("(");

    var filterName = arr.shift();
    var filterParams = [];

    if (arr.length) {
      filterParams = arr
        .shift()
        .split(")")[0]
        .split(",")
        .map(function (f) {
          return Color$1.reverseMatches(f, ret.matches);
        });
    }

    var result = [filterName]
      .concat(toConsumableArray(filterParams))
      .map(Color$1.trim);

    return result;
  }

  function clamp$1(num) {
    return Math.min(255, num);
  }

  function filter$1(str) {
    return merge$1(
      matches$1(str).map(function (it) {
        return it.arr;
      })
    );
  }

  function makeGroupedFilter$1() {
    var filters =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var groupedFilter = [];
    var group = [];
    for (var i = 0, len = filters.length; i < len; i++) {
      var f = filters[i];

      if (f.userFunction) {
        group.push(f);
      } else {
        if (group.length) {
          groupedFilter.push([].concat(toConsumableArray(group)));
        }
        groupedFilter.push(f);
        group = [];
      }
    }

    if (group.length) {
      groupedFilter.push([].concat(toConsumableArray(group)));
    }

    groupedFilter.forEach(function (filter, index) {
      if (Array.isArray(filter)) {
        groupedFilter[index] = (function () {
          var userFunction = makePrebuildUserFilterList(filter);
          // console.log(userFunction)
          return function (bitmap, done) {
            for (var i = 0, len = bitmap.pixels.length; i < len; i += 4) {
              userFunction(bitmap.pixels, i);
            }

            done(bitmap);
            // forLoop(bitmap.pixels.length, 0, 4, function (i) {
            //     userFunction(bitmap.pixels, i)
            // }, function () {
            //     done(bitmap)
            // })
          };
        })();
      }
    });

    return groupedFilter;
  }

  /**
   *
   * multiply filters
   *
   * ImageFilter.multi('blur', 'grayscale', 'sharpen', ['blur', 3], function (bitmap) {  return bitmap });
   *
   */
  function multi$1() {
    for (
      var _len = arguments.length, filters = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      filters[_key] = arguments[_key];
    }

    filters = filters
      .map(function (filter) {
        return makeFilter$1(filter);
      })
      .filter(function (f) {
        return f;
      });

    filters = makeGroupedFilter$1(filters);

    var max = filters.length;

    return function (bitmap, done) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var currentBitmap = bitmap;
      var index = 0;

      function runFilter() {
        filters[index].call(
          null,
          currentBitmap,
          function (nextBitmap) {
            currentBitmap = nextBitmap;

            nextFilter();
          },
          opt
        );
      }

      function nextFilter() {
        index++;

        if (index >= max) {
          done(currentBitmap);
          return;
        }

        runFilter();
      }

      runFilter();
    };
  }

  function merge$1(filters) {
    return multi$1.apply(undefined, toConsumableArray(filters));
  }

  /**
   * apply filter into special area
   *
   * F.partial({x,y,width,height}, filter, filter, filter )
   * F.partial({x,y,width,height}, 'filter' )
   *
   * @param {{x, y, width, height}} area
   * @param {*} filters
   */
  function partial(area) {
    var allFilter = null;

    for (
      var _len2 = arguments.length,
        filters = Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1;
      _key2 < _len2;
      _key2++
    ) {
      filters[_key2 - 1] = arguments[_key2];
    }

    if (filters.length == 1 && typeof filters[0] === "string") {
      allFilter = filter$1(filters[0]);
    } else {
      allFilter = merge$1(filters);
    }

    return function (bitmap, done) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      allFilter(
        getBitmap(bitmap, area),
        function (newBitmap) {
          done(putBitmap(bitmap, newBitmap, area));
        },
        opt
      );
    };
  }

  function parseParamNumber$1(param) {
    if (typeof param === "string") {
      param = param.replace(/deg/, "");
      param = param.replace(/px/, "");
    }
    return +param;
  }

  function weight$1(arr) {
    var num =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return arr.map(function (i) {
      return i * num;
    });
  }

  var SHADER_INDEX = 0;

  function convolutionString(count) {
    var width = Math.sqrt(count);
    var half = Math.floor(width / 2);

    return []
      .concat(toConsumableArray(Array(count)))
      .map(function (it, index) {
        var y = Math.floor(index / width) - half;
        var x = (index % width) - half;

        return (
          "texture(u_image, v_texCoord + onePixel * vec2(" +
          x +
          ", " +
          y +
          ")) * u_kernel" +
          count +
          "[" +
          index +
          "]"
        );
      })
      .join(" + \n");
  }

  function multi$3(str) {
    return [].concat(Array.prototype.slice.call(arguments));
  }

  function convolution$1(arr) {
    return {
      type: "convolution",
      length: arr.length,
      content: arr,
    };
  }

  function makeShader(str, index) {
    return (
      "\n        if (u_filterIndex == " +
      index +
      ".0) {\n            " +
      str +
      "\n        }\n    "
    );
  }

  function shader(str, options) {
    return {
      type: "shader",
      index: SHADER_INDEX,
      options: options,
      content: makeShader(str, SHADER_INDEX++),
    };
  }

  function makeVertexShaderSource() {
    return "#version 300 es \n\n        in vec2 a_position;\n        in vec2 a_texCoord; \n\n        uniform vec2 u_resolution;\n        uniform float u_flipY;\n\n        out vec2 v_texCoord; \n\n        void main() {\n            vec2 zeroToOne = a_position / u_resolution;\n\n            vec2 zeroToTwo = zeroToOne * 2.0;\n\n            vec2 clipSpace = zeroToTwo - 1.0;\n\n            gl_Position = vec4(clipSpace * vec2(1, u_flipY), 0, 1);\n\n            v_texCoord = a_texCoord;\n\n        }\n    ";
  }

  function makeConvolution(count) {
    return (
      "\n    \n    if (u_kernelSelect == " +
      count +
      ".0) {\n        vec4 colorSum = " +
      convolutionString(count) +
      "; \n\n        outColor = vec4((colorSum / u_kernel" +
      count +
      "Weight).rgb, 1);\n        \n    }\n    "
    );
  }

  function makeFragmentShaderSource(filterShaderList) {
    var filterContent = filterShaderList
      .filter(function (f) {
        return f.type == "shader";
      })
      .map(function (f) {
        return f.content;
      })
      .join("\n\n");

    var weightTable = { 9: true };

    filterShaderList
      .filter(function (f) {
        return f.type == "convolution";
      })
      .forEach(function (f) {
        weightTable[f.length] = true;
      });

    var convolutionString = Object.keys(weightTable)
      .map(function (len) {
        return makeConvolution(+len);
      })
      .join("\n");

    return (
      "#version 300 es\n\n    precision highp int;\n    precision mediump float;\n    \n    uniform sampler2D u_image;\n\n    // 3 is 3x3 matrix kernel \n    uniform float u_kernelSelect;\n    uniform float u_filterIndex;\n\n    uniform float u_kernel9[9];\n    uniform float u_kernel9Weight;\n    uniform float u_kernel25[25];\n    uniform float u_kernel25Weight;\n    uniform float u_kernel49[49];\n    uniform float u_kernel49Weight;\n    uniform float u_kernel81[81];\n    uniform float u_kernel81Weight;    \n\n    in vec2 v_texCoord;\n    \n    out vec4 outColor;\n\n    float random (vec2 st) {\n        return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n    } \n\n    // \n    vec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n        vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n    \n    void main() {\n        vec4 pixelColor = texture(u_image, v_texCoord);\n        vec2 onePixel = vec2(1) / vec2(textureSize(u_image, 0));                \n\n        " +
      filterContent +
      "\n\n        " +
      convolutionString +
      "\n\n    }"
    );
  }

  function colorToVec4(color) {
    color = [color.r / 255, color.g / 255, color.b / 255, color.a || 0].map(
      toFloatString
    );
    return "vec4(" + color + ")";
  }

  function toFloatString(number) {
    if (number == Math.floor(number)) {
      return number + ".0";
    }

    return number;
  }

  function blur$1() {
    return convolution$1([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  }

  function normal() {
    return convolution$1([0, 0, 0, 0, 1, 0, 0, 0, 0]);
  }

  /*
   * carve, mold, or stamp a design on (a surface) so that it stands out in relief.
   *
   * @param {Number} amount   0.0 .. 4.0
   */
  function emboss$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

    amount = parseParamNumber$1(amount);
    return convolution$1([
      amount * -2.0,
      -amount,
      0.0,
      -amount,
      1.0,
      amount,
      0.0,
      amount,
      amount * 2.0,
    ]);
  }

  /**
   *
   * @param {Number} amount 0..1
   */
  function gaussianBlur$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = parseParamNumber$1(amount) * (1 / 16);

    return convolution$1(weight$1([1, 2, 1, 2, 4, 2, 1, 2, 1], C));
  }

  function gaussianBlur5x$1() {
    return convolution$1([
      1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4,
      6, 4, 1,
    ]);
  }

  function grayscale2$1() {
    return convolution$1([
      0.3, 0.3, 0.3, 0, 0, 0.59, 0.59, 0.59, 0, 0, 0.11, 0.11, 0.11, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  }

  function kirschHorizontal$1() {
    return convolution$1([5, 5, 5, -3, 0, -3, -3, -3, -3]);
  }

  function kirschVertical$1() {
    return convolution$1([5, -3, -3, 5, 0, -3, 5, -3, -3]);
  }

  function laplacian$1() {
    return convolution$1([-1, -1, -1, -1, 8, -1, -1, -1, -1]);
  }

  function laplacian5x$1() {
    return convolution$1([
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1,
    ]);
  }

  function motionBlur$1() {
    return convolution$1([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1,
    ]);
  }

  function motionBlur2$1() {
    return convolution$1([
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 1,
    ]);
  }

  function motionBlur3$1() {
    return convolution$1([
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
      0, 1, 0, 0, 0, 1,
    ]);
  }

  function negative$1() {
    return convolution$1([
      -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,
      1,
    ]);
  }

  function sepia2$1() {
    return convolution$1([
      0.393, 0.349, 0.272, 0, 0, 0.769, 0.686, 0.534, 0, 0, 0.189, 0.168, 0.131,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  }

  function sharpen$1() {
    return convolution$1([0, -1, 0, -1, 5, -1, 0, -1, 0]);
  }

  function sobelHorizontal$1() {
    return convolution$1([-1, -2, -1, 0, 0, 0, 1, 2, 1]);
  }

  function sobelVertical$1() {
    return convolution$1([-1, 0, 1, -2, 0, 2, -1, 0, 1]);
  }

  function transparency$1() {
    return convolution$1([
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0,
      1,
    ]);
  }

  function unsharpMasking$1() {
    return convolution$1(
      weight$1(
        [
          1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, -476, 24, 6, 4, 16, 24, 16, 4,
          1, 4, 6, 4, 1,
        ],
        -1 / 256
      )
    );
  }

  var matrix$2 = {
    blur: blur$1,
    normal: normal,
    emboss: emboss$1,
    gaussianBlur: gaussianBlur$1,
    "gaussian-blur": gaussianBlur$1,
    gaussianBlur5x: gaussianBlur5x$1,
    "gaussian-blur-5x": gaussianBlur5x$1,
    grayscale2: grayscale2$1,
    kirschHorizontal: kirschHorizontal$1,
    "kirsch-horizontal": kirschHorizontal$1,
    kirschVertical: kirschVertical$1,
    "kirsch-vertical": kirschVertical$1,
    laplacian: laplacian$1,
    laplacian5x: laplacian5x$1,
    "laplacian-5x": laplacian5x$1,
    motionBlur: motionBlur$1,
    "motion-blur": motionBlur$1,
    motionBlur2: motionBlur2$1,
    "motion-blur-2": motionBlur2$1,
    motionBlur3: motionBlur3$1,
    "motion-blur-3": motionBlur3$1,
    negative: negative$1,
    sepia2: sepia2$1,
    sharpen: sharpen$1,
    sobelHorizontal: sobelHorizontal$1,
    "sobel-horizontal": sobelHorizontal$1,
    sobelVertical: sobelVertical$1,
    "sobel-vertical": sobelVertical$1,
    transparency: transparency$1,
    unsharpMasking: unsharpMasking$1,
    "unsharp-masking": unsharpMasking$1,
  };

  function bitonal$1(darkColor, lightColor) {
    var threshold =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

    var checkVlue = toFloatString(threshold);
    var darkColorString = colorToVec4(Color$1.parse(darkColor));
    var lightColorString = colorToVec4(Color$1.parse(lightColor));

    return shader(
      "\n        if ((pixelColor.r + pixelColor.g + pixelColor.b) > " +
        checkVlue +
        ") {\n            outColor = vec4(" +
        lightColorString +
        ".rgb, pixelColor.a);\n        } else {\n            outColor = vec4(" +
        darkColorString +
        ".rgb, pixelColor.a);\n        }\n    "
    );
  }

  /*
   * @param {Number} amount  -1..1  ,  value < 0  is darken, value > 0 is brighten
   */
  function brightness$2() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader("\n        outColor = pixelColor + (" + C + ");\n    ");
  }

  function matrix$3() {
    var $a =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var $b =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var $c =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var $d =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var $e =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var $f =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var $g =
      arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var $h =
      arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var $i =
      arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var $j =
      arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var $k =
      arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var $l =
      arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
    var $m =
      arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
    var $n =
      arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var $o =
      arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var $p =
      arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;

    var matrix = [
      $a,
      $b,
      $c,
      $d,
      $e,
      $f,
      $g,
      $h,
      $i,
      $j,
      $k,
      $l,
      $m,
      $n,
      $o,
      $p,
    ].map(toFloatString);

    return shader(
      "\n\n        outColor = vec4(\n            " +
        matrix[0] +
        " * pixelColor.r + " +
        matrix[1] +
        " * pixelColor.g + " +
        matrix[2] +
        " * pixelColor.b + " +
        matrix[3] +
        " * pixelColor.a,\n            " +
        matrix[4] +
        " * pixelColor.r + " +
        matrix[5] +
        " * pixelColor.g + " +
        matrix[6] +
        " * pixelColor.b + " +
        matrix[7] +
        " * pixelColor.a,\n            " +
        matrix[8] +
        " * pixelColor.r + " +
        matrix[9] +
        " * pixelColor.g + " +
        matrix[10] +
        " * pixelColor.b + " +
        matrix[11] +
        " * pixelColor.a,\n            " +
        matrix[12] +
        " * pixelColor.r + " +
        matrix[13] +
        " * pixelColor.g + " +
        matrix[14] +
        " * pixelColor.b + " +
        matrix[15] +
        " * pixelColor.a\n        ); \n    "
    );
  }

  function brownie$1() {
    return matrix$3(
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      0,
      0,
      0,
      1
    );
  }

  /*
   * @param {Number} amount 0..1
   */
  function clip$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        outColor = vec4(\n            (pixelColor.r > 1.0 - " +
        C +
        ") ? 1.0 : 0.0,\n            (pixelColor.g > 1.0 - " +
        C +
        ") ? 1.0 : 0.0,\n            (pixelColor.b > 1.0 - " +
        C +
        ") ? 1.0 : 0.0,\n            pixelColor.a \n        );\n    "
    );
  }

  function chaos() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        vec2 st = pixelColor.st;\n        st *= " +
        C +
        ";\n        \n        vec2 ipos = floor(st);  // get the integer coords\n\n        vec3 color = vec3(random( ipos ));\n\n        outColor = vec4(color, pixelColor.a);\n    "
    );
  }

  /*
   * @param {Number} amount  0..1
   */
  function contrast$2() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader("\n        outColor = pixelColor * " + C + ";\n    ");
  }

  /*
   * @param {Number} amount  -1..1  ,  value < 0  is darken, value > 0 is brighten
   */
  function gamma$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        outColor = vec4(pow(pixelColor.r, " +
        C +
        "), pow(pixelColor.g, " +
        C +
        "), pow(pixelColor.b, " +
        C +
        "), pixelColor.a );\n    "
    );
  }

  /**
   * F.gradient('red', 'blue', 'yellow', 'white', 10)
   * F.gradient('red, blue, yellow, white, 10')
   */
  function gradient$2() {
    // 전체 매개변수 기준으로 파싱
    // 색이 아닌 것 기준으로 scale 변수로 인식

    var params = [].concat(Array.prototype.slice.call(arguments));

    if (params.length === 1 && typeof params[0] === "string") {
      params = Color$1.convertMatchesArray(params[0]);
    }

    params = params
      .map(function (arg) {
        return arg;
      })
      .join(", ");

    var colors = Color$1.parseGradient(params);

    colors[0][1] = 0;
    colors[colors.length - 1][1] = 1;

    colors = colors.map(function (c) {
      var _Color$parse = Color$1.parse(c[0]),
        r = _Color$parse.r,
        g = _Color$parse.g,
        b = _Color$parse.b,
        a = _Color$parse.a;

      return [{ r: r, g: g, b: b, a: a }, c[1]];
    });

    var temp = [];

    for (var i = 0, len = colors.length; i < len - 1; i++) {
      var start = colors[i];
      var end = colors[i + 1];

      var startColor = colorToVec4(start[0]);
      var endColor = colorToVec4(end[0]);

      var startRate = toFloatString(start[1]);
      var endRate = toFloatString(end[1]);

      temp.push(
        "\n            if (" +
          startRate +
          " <= rate && rate < " +
          endRate +
          ") {\n                outColor = mix(" +
          startColor +
          ", " +
          endColor +
          ", (rate - " +
          startRate +
          ")/(" +
          endRate +
          " - " +
          startRate +
          "));\n            }\n        "
      );
    }

    return shader(
      "\n        float rate = (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722); \n\n        " +
        temp.join("\n") +
        "        \n    "
    );
  }

  /**
   *
   * @param {Number} amount 0..1
   */
  function grayscale$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = parseParamNumber$1(amount);

    if (C > 1) C = 1;

    return matrix$3(
      0.2126 + 0.7874 * (1 - C),
      0.7152 - 0.7152 * (1 - C),
      0.0722 - 0.0722 * (1 - C),
      0,
      0.2126 - 0.2126 * (1 - C),
      0.7152 + 0.2848 * (1 - C),
      0.0722 - 0.0722 * (1 - C),
      0,
      0.2126 - 0.2126 * (1 - C),
      0.7152 - 0.7152 * (1 - C),
      0.0722 + 0.9278 * (1 - C),
      0,
      0,
      0,
      0,
      1
    );
  }

  //http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
  /*
   * @param {Number} amount  0..1  ,  (real value 0..360)
   */
  function hue$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        vec3 hsv = rgb2hsv(pixelColor.rgb);\n        hsv.x += " +
        C +
        ";\n        outColor = vec4(hsv2rgb(hsv).rgb, pixelColor.a);\n    "
    );
  }

  function invert$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        outColor = vec4(\n            (1.0 - pixelColor.r) * " +
        C +
        ",\n            (1.0 - pixelColor.g) * " +
        C +
        ",\n            (1.0 - pixelColor.b) * " +
        C +
        ",\n            pixelColor.a\n        );\n    "
    );
  }

  function kodachrome$1() {
    return matrix$3(
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      0,
      0,
      0,
      1
    );
  }

  /**
   *
   * @param {Number} amount 0..1
   */
  function noise$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = Math.abs(parseParamNumber$1(amount));
    var min = toFloatString(-C);
    var max = toFloatString(C);
    return shader(
      "\n        float rnd = " +
        min +
        " + random( pixelColor.st ) * (" +
        max +
        " - " +
        min +
        ");\n\n        outColor = vec4(pixelColor.rgb + rnd, 1.0);\n    "
    );
  }

  /**
   *
   * @param {Number} amount 0..1
   */
  function opacity$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = toFloatString(parseParamNumber$1(amount));

    return shader(
      "\n        outColor = vec4(pixelColor.rgb, pixelColor.a * " +
        C +
        ");\n    "
    );
  }

  function polaroid$1() {
    return matrix$3(
      1.438,
      -0.062,
      -0.062,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      1
    );
  }

  /*
   * @param {Number} amount  0..1
   */
  function saturation$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var L = 1 - Math.abs(parseParamNumber$1(amount));

    return matrix$3(L, 0, 0, 0, 0, L, 0, 0, 0, 0, L, 0, 0, 0, 0, L);
  }

  /*
   * @param {Number} amount  0..100
   */
  function sepia$1() {
    var amount =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var C = parseParamNumber$1(amount);
    if (C > 1) C = 1;

    return matrix$3(
      0.393 + 0.607 * (1 - C),
      0.769 - 0.769 * (1 - C),
      0.189 - 0.189 * (1 - C),
      0,
      0.349 - 0.349 * (1 - C),
      0.686 + 0.314 * (1 - C),
      0.168 - 0.168 * (1 - C),
      0,
      0.272 - 0.272 * (1 - C),
      0.534 - 0.534 * (1 - C),
      0.131 + 0.869 * (1 - C),
      0,
      0,
      0,
      0,
      1
    );
  }

  function shade$1() {
    var redValue =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var greenValue =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var blueValue =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var r = toFloatString(parseParamNumber$1(redValue) / 255);
    var g = toFloatString(parseParamNumber$1(greenValue) / 255);
    var b = toFloatString(parseParamNumber$1(blueValue) / 255);

    return shader(
      "\n        outColor = vec4(\n            pixelColor.r * " +
        r +
        ",\n            pixelColor.g * " +
        g +
        ",\n            pixelColor.b * " +
        b +
        ",\n            pixelColor.a\n        );\n    "
    );
  }

  function shift$1() {
    return matrix$3(
      1.438,
      -0.062,
      -0.062,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      1
    );
  }

  function solarize$1(redValue, greenValue, blueValue) {
    var r = toFloatString(parseParamNumber$1(redValue));
    var g = toFloatString(parseParamNumber$1(greenValue));
    var b = toFloatString(parseParamNumber$1(blueValue));

    return shader(
      "\n        outColor = vec4(\n            (pixelColor.r < " +
        r +
        ") ? 1.0 - pixelColor.r: pixelColor.r,\n            (pixelColor.g < " +
        g +
        ") ? 1.0 - pixelColor.g: pixelColor.g,\n            (pixelColor.b < " +
        b +
        ") ? 1.0 - pixelColor.b: pixelColor.b,\n            pixelColor.a\n        );\n    "
    );
  }

  function technicolor$1() {
    return matrix$3(
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      0,
      0,
      0,
      1
    );
  }

  function thresholdColor$1() {
    var scale =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    scale = toFloatString(parseParamNumber$1(scale));

    return shader(
      "\n        float c = ( (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722) ) >= " +
        scale +
        " ? 1.0 : 0.0;\n\n        outColor = vec4(c, c, c, pixelColor.a);\n    "
    );
  }

  /*
   * @param {Number} amount  0..100
   */
  function threshold$1() {
    var scale =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
    var amount =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return thresholdColor$1(scale, amount, false);
  }

  /**
   *
   * @param {*} redTint  0..1
   * @param {*} greenTint 0..1
   * @param {*} blueTint 0..1
   */
  function tint$1() {
    var redTint =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var greenTint =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var blueTint =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var r = parseParamNumber$1(redTint);
    var g = parseParamNumber$1(greenTint);
    var b = parseParamNumber$1(blueTint);

    return shader(
      "\n        outColor = vec4(\n            pixelColor.r += (1 - pixelColor.r) * " +
        r +
        ",\n            pixelColor.g += (1 - pixelColor.g) * " +
        g +
        ",\n            pixelColor.b += (1 - pixelColor.b) * " +
        b +
        ",\n            pixelColor.a\n        );\n    "
    );
  }

  var pixel$2 = {
    bitonal: bitonal$1,
    brightness: brightness$2,
    brownie: brownie$1,
    clip: clip$1,
    chaos: chaos,
    contrast: contrast$2,
    gamma: gamma$1,
    gradient: gradient$2,
    grayscale: grayscale$1,
    hue: hue$1,
    invert: invert$1,
    kodachrome: kodachrome$1,
    matrix: matrix$3,
    noise: noise$1,
    opacity: opacity$1,
    polaroid: polaroid$1,
    saturation: saturation$1,
    sepia: sepia$1,
    shade: shade$1,
    shift: shift$1,
    solarize: solarize$1,
    technicolor: technicolor$1,
    threshold: threshold$1,
    "threshold-color": thresholdColor$1,
    tint: tint$1,
  };

  function kirsch$1() {
    return multi$3("kirsch-horizontal kirsch-vertical");
  }

  function sobel$1() {
    return multi$3("sobel-horizontal sobel-vertical");
  }

  function vintage$1() {
    return multi$3("brightness(0.15) saturation(-0.2) gamma(1.8)");
  }

  var multi$4 = {
    kirsch: kirsch$1,
    sobel: sobel$1,
    vintage: vintage$1,
  };

  var GLFilter = _extends({}, matrix$2, pixel$2, multi$4);

  var TEXTURE_INDEX = 0;

  var GLCanvas = (function () {
    function GLCanvas() {
      var opt =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : {
              width: "400px",
              height: "300px",
            };
      classCallCheck(this, GLCanvas);

      this.img = opt.img;
      this.width = parseFloat(this.img.width || opt.width || "400px");
      this.height = parseFloat(this.img.height || opt.height || "300px");
      this.init();
    }

    createClass(GLCanvas, [
      {
        key: "resize",
        value: function resize() {
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          this.canvas.style.width = this.width + "px";
          this.canvas.style.height = this.height + "px";

          this.viewport();
        },

        /* Canvas 비우기, 비울 때 색 지정하기  */
      },
      {
        key: "clear",
        value: function clear() {
          var r =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var g =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          var b =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          var a =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 0;

          var gl = this.gl;

          gl.clearColor(r, g, b, a);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        },

        /* viewport 설정, 기본적으로 canvas 의 크기로 고정  */
      },
      {
        key: "viewport",
        value: function viewport(x, y, width, height) {
          var gl = this.gl;

          gl.viewport(
            x || 0,
            y || 0,
            width || gl.canvas.width,
            height || gl.canvas.height
          );
        },

        // canvas 초기화
        // gl context 구하기
      },
      {
        key: "initCanvas",
        value: function initCanvas(vertexSource, fragmentSource) {
          this.canvas = document.createElement("canvas");

          this.gl = this.canvas.getContext("webgl2");

          if (!this.gl) {
            throw new Error("you need webgl2 support");
          }

          // program 생성
          this.program = this.createProgram(vertexSource, fragmentSource);

          // this.clear()
          this.resize();

          // buffer 설정
          this.initBuffer();
        },
      },
      {
        key: "draw",
        value: function draw() {
          var primitiveType =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : "TRIANGLES";
          var offset =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          var count =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 6;

          var gl = this.gl;

          gl.drawArrays(gl[primitiveType], offset, count);
        },
      },
      {
        key: "triangles",
        value: function triangles() {
          var offset =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var count =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 6;

          this.draw("TRIANGLES", offset, count);
        },
      },
      {
        key: "uniform2f",
        value: function uniform2f() {
          var _gl;

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          var key = args.shift();

          (_gl = this.gl).uniform2f.apply(
            _gl,
            [this.locations[key]].concat(args)
          );
        },
      },
      {
        key: "uniform1f",
        value: function uniform1f() {
          var _gl2;

          for (
            var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }

          var key = args.shift();

          (_gl2 = this.gl).uniform1f.apply(
            _gl2,
            [this.locations[key]].concat(args)
          );
        },
      },
      {
        key: "uniform1fv",
        value: function uniform1fv() {
          var _gl3;

          for (
            var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            args[_key3] = arguments[_key3];
          }

          var key = args.shift();

          (_gl3 = this.gl).uniform1fv.apply(
            _gl3,
            [this.locations[key]].concat(args)
          );
        },
      },
      {
        key: "uniform1i",
        value: function uniform1i() {
          var _gl4;

          for (
            var _len4 = arguments.length, args = Array(_len4), _key4 = 0;
            _key4 < _len4;
            _key4++
          ) {
            args[_key4] = arguments[_key4];
          }

          var key = args.shift();

          (_gl4 = this.gl).uniform1i.apply(
            _gl4,
            [this.locations[key]].concat(args)
          );
        },
      },
      {
        key: "useProgram",
        value: function useProgram() {
          var gl = this.gl;

          gl.useProgram(this.program);
        },
      },
      {
        key: "bindBuffer",
        value: function bindBuffer(key, data) {
          var drawType =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "STATIC_DRAW";

          var gl = this.gl;

          if (!this.buffers[key]) {
            this.buffers[key] = gl.createBuffer();
          }

          gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers[key]);

          if (data) {
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array(data),
              gl[drawType]
            );
          }
        },
      },
      {
        key: "enable",
        value: function enable(key) {
          var gl = this.gl;

          // array attribute 를 활성화 시킴
          gl.enableVertexAttribArray(this.locations[key]);
        },
      },
      {
        key: "location",
        value: function location(key) {
          var type =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "attribute";

          if (type === "attribute") {
            this.locations[key] = this.gl.getAttribLocation(this.program, key);
          } else if (type === "uniform") {
            this.locations[key] = this.gl.getUniformLocation(this.program, key);
          }
        },
      },
      {
        key: "a",
        value: function a(key) {
          return this.location(key);
        },
      },
      {
        key: "u",
        value: function u(key) {
          return this.location(key, "uniform");
        },
      },
      {
        key: "pointer",
        value: function pointer(key) {
          var type =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "FLOAT";
          var size =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 2;
          var normalize =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : false;
          var stride =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : 0;
          var offset =
            arguments.length > 5 && arguments[5] !== undefined
              ? arguments[5]
              : 0;

          var gl = this.gl;

          gl.vertexAttribPointer(
            this.locations[key],
            size,
            gl[type],
            normalize,
            stride,
            offset
          );
        },
      },
      {
        key: "bufferData",
        value: function bufferData() {
          var data =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];

          var gl = this.gl;
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(data),
            gl.STATIC_DRAW
          );
        },
      },
      {
        key: "isPowerOf2",
        value: function isPowerOf2(value) {
          return (value & (value - 1)) == 0;
        },
      },
      {
        key: "bindTexture",
        value: function bindTexture(key) {
          var img =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : undefined;
          var mipLevel =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          var internalFormat =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : "RGBA";
          var srcFormat =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : "RGBA";
          var srcType =
            arguments.length > 5 && arguments[5] !== undefined
              ? arguments[5]
              : "UNSIGNED_BYTE";

          var gl = this.gl;

          if (arguments.length == 1) {
            gl.bindTexture(gl.TEXTURE_2D, this.textures[key]);
            return;
          }

          if (!this.textures[key]) {
            this.textures[key] = gl.createTexture();
          }

          this.textureIndex[key] = TEXTURE_INDEX++;
          // this.activeTexture(key)
          gl.bindTexture(gl.TEXTURE_2D, this.textures[key]);

          this.setTextureParameter();

          gl.texImage2D(
            gl.TEXTURE_2D,
            mipLevel,
            gl[internalFormat],
            gl[srcFormat],
            gl[srcType],
            img.newImage || img
          );
        },
      },
      {
        key: "bindColorTexture",
        value: function bindColorTexture(key, data) {
          var width =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 256;
          var height =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 1;
          var mipLevel =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : 0;
          var internalFormat =
            arguments.length > 5 && arguments[5] !== undefined
              ? arguments[5]
              : "RGBA";
          var srcFormat =
            arguments.length > 6 && arguments[6] !== undefined
              ? arguments[6]
              : "RGBA";
          var srcType =
            arguments.length > 7 && arguments[7] !== undefined
              ? arguments[7]
              : "UNSIGNED_BYTE";

          var gl = this.gl;

          if (!this.textures[key]) {
            this.textures[key] = gl.createTexture();
          }

          this.textureIndex[key] = TEXTURE_INDEX++;
          gl.bindTexture(gl.TEXTURE_2D, this.textures[key]);

          this.setTextureParameter();

          gl.texImage2D(
            gl.TEXTURE_2D,
            mipLevel,
            gl[internalFormat],
            width,
            height,
            0,
            gl[srcFormat],
            gl[srcType],
            new Uint8Array(data)
          );
        },
      },
      {
        key: "bindEmptyTexture",
        value: function bindEmptyTexture(key, width, height) {
          var mipLevel =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 0;
          var internalFormat =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : "RGBA";
          var srcFormat =
            arguments.length > 5 && arguments[5] !== undefined
              ? arguments[5]
              : "RGBA";
          var srcType =
            arguments.length > 6 && arguments[6] !== undefined
              ? arguments[6]
              : "UNSIGNED_BYTE";

          var gl = this.gl;

          if (!this.textures[key]) {
            this.textures[key] = gl.createTexture();
          }

          this.textureIndex[key] = TEXTURE_INDEX++;
          gl.bindTexture(gl.TEXTURE_2D, this.textures[key]);

          this.setTextureParameter();

          var border = 0;
          var data = null;

          gl.texImage2D(
            gl.TEXTURE_2D,
            mipLevel,
            gl[internalFormat],
            width,
            height,
            border,
            gl[srcFormat],
            gl[srcType],
            data
          );
        },
      },
      {
        key: "setTextureParameter",
        value: function setTextureParameter() {
          var gl = this.gl;

          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        },
      },
      {
        key: "bindFrameBufferWithTexture",
        value: function bindFrameBufferWithTexture(
          key,
          textureKey,
          width,
          height
        ) {
          this.bindEmptyTexture(textureKey, width, height);
          this.bindFrameBuffer(key, textureKey);
        },
      },
      {
        key: "enumToString",
        value: function enumToString(value) {
          var gl = this.gl;

          if (value === 0) {
            return "NONE";
          }
          for (var key in gl) {
            if (gl[key] === value) {
              return key;
            }
          }
          return "0x" + value.toString(16);
        },
      },
      {
        key: "bindFrameBuffer",
        value: function bindFrameBuffer(key) {
          var textureKey =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;

          var gl = this.gl;

          if (arguments.length === 1) {
            gl.bindFramebuffer(
              gl.FRAMEBUFFER,
              key == null ? null : this.framebuffers[key]
            );
            return;
          }

          if (!this.framebuffers[key]) {
            // 프레임버퍼 생성하기
            this.framebuffers[key] = gl.createFramebuffer();
          }

          gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[key]);

          // framebuffer 에 texture2d 연결
          var mipLevel = 0;
          var attachmentPoint = gl.COLOR_ATTACHMENT0; // framebuffer 를 attachmentPoint 에 연결한다.
          // framebuffer 는 데이타를 가지고 있지 않고 연결 고리만 가지고 있다.
          gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            attachmentPoint,
            gl.TEXTURE_2D,
            this.textures[textureKey],
            mipLevel
          );

          // framebuffer 상태 체크 하기
          // framebuffer 를 더 이상 할당 못할 수도 있음.
          var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

          // console.log(this.enumToString(attachmentPoint), this.enumToString(status), key, this.textures[textureKey]);

          if (status !== gl.FRAMEBUFFER_COMPLETE) {
            return;
          }
        },
      },
      {
        key: "bindVA",
        value: function bindVA() {
          var gl = this.gl;

          if (!this.vao) {
            this.vao = gl.createVertexArray();
          }

          gl.bindVertexArray(this.vao);
        },
      },
      {
        key: "bindAttr",
        value: function bindAttr(key, data) {
          var drawType =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "STATIC_DRAW";
          var size =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 2;

          // 버퍼를 만들고 데이타를 연결한다.
          this.bindBuffer(key, data, drawType);

          //array 변수를 사용할 수 있도록 활성화 시킨다.
          this.enable(key);

          // 포인터를 지정한다.
          // array 변수가 어떻게 iteration 될지 지정한다. size 는 한번에 연산될 요소 개수
          // size 가 2 라고 했을 때 2개씩 하나의 iteration 에 들어간다.
          // 즉, (x, y) 가 한번에 들어감
          this.pointer(key, "FLOAT", size);
        },

        /* 
            shader 에서 사용하는 Attribute, Uniform 변수 설정 
            변수 설정을 간소화 할 필요도 있을 듯 하다. 
        */
      },
      {
        key: "initBuffer",
        value: function initBuffer() {
          var _canvas = this.canvas,
            width = _canvas.width,
            height = _canvas.height;

          // console.log(width, height)

          // 선언된 변수 location 지정 하기
          // location 을 지정해야 GLSL 에서 해당 변수와 연결할 수 있다. 언제?

          this.a("a_position");
          this.a("a_texCoord");
          this.u("u_resolution");
          this.u("u_image");
          this.u("u_flipY");

          this.u("u_kernelSelect");
          this.u("u_filterIndex");

          this.u("u_kernel9[0]");
          this.u("u_kernel9Weight");
          this.u("u_kernel25[0]");
          this.u("u_kernel25Weight");
          this.u("u_kernel49[0]");
          this.u("u_kernel49Weight");
          this.u("u_kernel81[0]");
          this.u("u_kernel81Weight");

          this.bindVA();

          // 단순 변수를 초기화 하고
          this.bindAttr(
            "a_position",
            [0, 0, width, 0, 0, height, 0, height, width, 0, width, height],
            "STATIC_DRAW",
            2 /* components for iteration */
          );

          // 변수에 데이타를 연결할다.
          this.bindAttr(
            "a_texCoord",
            [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0],
            "STATIC_DRAW",
            2 /* components for iteration */
          );

          // texture 는 img 로 할 수도 있고
          this.bindTexture("u_image", this.img);

          // 비어있는 texture 도 만들 수 있다.
          // 객체로 제어할까?
          // texture 를 framebuffer 로 바로 대응시킨다.
          // 이후 framebuffer 가 변경되면 img_texture 가 바뀐다.
          this.bindFrameBufferWithTexture(
            "frame_buffer_0",
            "img_texture_0",
            width,
            height
          );
          this.bindFrameBufferWithTexture(
            "frame_buffer_1",
            "img_texture_1",
            width,
            height
          );
        },
      },
      {
        key: "activeTexture",
        value: function activeTexture() {
          var index =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;

          var gl = this.gl;

          gl.activeTexture(gl.TEXTURE0 + index);
        },
      },
      {
        key: "drawFilter",
        value: function drawFilter() {
          var _this = this;

          var gl = this.gl;

          this.resize();
          this.clear();

          this.useProgram();

          this.bindVA();

          this.activeTexture(0);
          this.bindTexture("u_image");

          this.uniform1i("u_image", 0);
          this.uniform1f("u_flipY", 1);

          var _gl$canvas = gl.canvas,
            width = _gl$canvas.width,
            height = _gl$canvas.height;

          this.eachFilter(function (f, index) {
            _this.bindFrameBuffer("frame_buffer_" + (index % 2));
            _this.uniform2f("u_resolution", width, height);
            _this.viewport(0, 0, width, height);

            _this.effectFilter(f);

            // 다음 드로잉을 위해 방금 렌더링 한 텍스처를 사용합니다.
            _this.bindTexture("img_texture_" + (index % 2));
          });

          this.uniform1f("u_flipY", -1);
          this.bindFrameBuffer(null);
          this.uniform2f("u_resolution", width, height);
          this.viewport(0, 0, width, height);

          // clear 가 있는 이유는?
          this.clear();

          this.effectFilter("normal");
        },
      },
      {
        key: "effectFilter",
        value: function effectFilter(filterFunction) {
          if (typeof filterFunction == "string") {
            filterFunction = (GLFilter[filterFunction] || GLFilter.normal).call(
              GLFilter
            );
          }

          if (filterFunction.type == "convolution") {
            this.uniform1f("u_kernelSelect", filterFunction.length);
            this.uniform1f("u_filterIndex", -1.0);
            this.uniform1fv(
              "u_kernel" + filterFunction.length + "[0]",
              filterFunction.content
            );
            this.uniform1f(
              "u_kernel" + filterFunction.length + "Weight",
              this.computeKernelWeight(filterFunction.content)
            );
          } else {
            this.uniform1f("u_kernelSelect", -1.0);
            this.uniform1f("u_filterIndex", filterFunction.index);
          }

          this.triangles(0 /* 시작 지점 */, 6 /* 좌표(vertex, 꼭지점) 개수 */); // 총 6개를 도는데 , triangles 니깐 3개씩 묶어서 2번 돈다.
        },
      },
      {
        key: "computeKernelWeight",
        value: function computeKernelWeight(kernel) {
          var weight = kernel.reduce(function (prev, curr) {
            return prev + curr;
          });
          return weight <= 0 ? 1 : weight;
        },
      },
      {
        key: "createProgram",
        value: function createProgram(vertexSource, fragmentSource) {
          var gl = this.gl;

          var program = gl.createProgram();

          this.vertexShader = this.createVertexShader(vertexSource);
          this.fragmentShader = this.createFragmentShader(fragmentSource);

          // console.log(fragmentSource)

          gl.attachShader(program, this.vertexShader);
          gl.attachShader(program, this.fragmentShader);

          gl.linkProgram(program);

          var success = gl.getProgramParameter(program, gl.LINK_STATUS);
          if (success) {
            return program;
          }

          console.error(gl.getProgramInfoLog(program));
          gl.deleteProgram(program);
        },
      },
      {
        key: "createShader",
        value: function createShader(type, source) {
          var gl = this.gl;

          var shader$$1 = gl.createShader(type);
          gl.shaderSource(shader$$1, source);
          gl.compileShader(shader$$1);

          var success = gl.getShaderParameter(shader$$1, gl.COMPILE_STATUS);

          if (success) {
            return shader$$1;
          }

          console.error(gl.getShaderInfoLog(shader$$1));
          gl.deleteShader(shader$$1);
        },
      },
      {
        key: "createVertexShader",
        value: function createVertexShader(vertexSource) {
          var gl = this.gl;

          return this.createShader(gl.VERTEX_SHADER, vertexSource);
        },
      },
      {
        key: "createFragmentShader",
        value: function createFragmentShader(fragmentSource) {
          var gl = this.gl;

          return this.createShader(gl.FRAGMENT_SHADER, fragmentSource);
        },
      },
      {
        key: "eachFilter",
        value: function eachFilter(callback) {
          this.filterList.forEach(callback);
        },
      },
      {
        key: "init",
        value: function init() {
          this.locations = {};
          this.buffers = {};
          this.framebuffers = {};
          this.textures = {};
          this.textureIndex = {};
          this.hasTexParameter = {};
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          var gl = this.gl;

          this.init();

          gl.deleteProgram(this.program);
        },
      },
      {
        key: "filter",
        value: function filter(filterList, doneCallback) {
          this.filterList = filterList;

          this.initCanvas(
            makeVertexShaderSource(),
            makeFragmentShaderSource(this.filterList)
          );

          this.drawFilter();

          if (typeof doneCallback == "function") {
            doneCallback(this);
          }
        },
      },
    ]);
    return GLCanvas;
  })();

  var GL$1 = {
    GLCanvas: GLCanvas,
  };

  var functions = {
    filter: filter,
  };

  function makeFilterFunction(filterObj) {
    var filterName = filterObj.arr[0];
    var f = GLFilter[filterName];

    var arr = filterObj.arr;
    arr.shift();

    var result = f.apply(this, arr);

    return result;
  }

  /**
   * 겹쳐져 있는 Filter 함수를 1차원으로 나열한다.
   * ex)  ['sobel'] => ['sobel-horizontal', 'sobel-vertial']
   *
   * @param {String|Array} filterString
   */
  function flatFilter(filterString) {
    var filter_list = [];

    if (typeof filterString == "string") {
      filter_list = matches$1(filterString);
    } else if (Array.isArray(filterString)) {
      filter_list = filterString;
    }

    var allFilter = [];

    filter_list.forEach(function (filterObj) {
      var filterName = filterObj.arr[0];

      if (GLFilter[filterName]) {
        var f = makeFilterFunction(filterObj);

        if (f.type == "convolution" || f.type == "shader") {
          allFilter.push(f);
        } else {
          f.forEach(function (subFilter) {
            allFilter = allFilter.concat(flatFilter(subFilter));
          });
        }
      }
    });

    // console.log(filter_list, allFilter)

    return allFilter;
  }

  function filter(img, filterString, callback, opt) {
    var canvas = new GL$1.GLCanvas({
      width: opt.width || img.width,
      height: opt.height || img.height,
      img: img,
    });

    canvas.filter(flatFilter(filterString), function done() {
      if (typeof callback == "function") {
        callback(canvas);
      }
    });
  }

  var GL = _extends({}, GL$1, functions);

  function palette(colors) {
    var k =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var exportFormat =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "hex";

    if (colors.length > k) {
      colors = kmeans(colors, k);
    }

    return colors.map(function (c) {
      return format(c, exportFormat);
    });
  }

  function ImageToRGB(url) {
    var callbackOrOption =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments[2];

    if (!callback) {
      var img = new ImageLoader(url);
      img.loadImage(function () {
        if (typeof callbackOrOption == "function") {
          callbackOrOption(img.toRGB());
        }
      });
    } else if (callback) {
      var img = new ImageLoader(url, callbackOrOption);
      img.loadImage(function () {
        if (typeof callback == "function") {
          callback(img.toRGB());
        }
      });
    }
  }

  function ImageToCanvas(url, filter, callback) {
    var opt =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : { frameTimer: "full" };

    ImageToURL(
      url,
      filter,
      callback,
      Object.assign(
        {
          returnTo: "canvas",
        },
        opt
      )
    );
  }

  function ImageToURL(url, filter, callback) {
    var opt =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : { frameTimer: "full" };

    var img = new ImageLoader(url);
    img.loadImage(function () {
      img.toArray(
        filter,
        function (datauri) {
          if (typeof callback == "function") {
            callback(datauri);
          }
        },
        opt
      );
    });
  }

  function GLToCanvas(url, filter, callback) {
    var opt =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var img = new ImageLoader(url);
    img.load(function () {
      GL.filter(
        img.newImage,
        filter,
        function done(datauri) {
          if (typeof callback == "function") {
            callback(datauri);
          }
        },
        opt
      );
    });
  }

  function histogram(url, callback) {
    var opt =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var img = new ImageLoader(url);
    img.loadImage(function () {
      if (typeof callback == "function") {
        callback(img.toHistogram(opt));
      }
    });
  }

  function histogramToPoints(points) {
    var tension =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;

    var controlPoints = [];
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      if (i == 0) {
        controlPoints[i] = [];
        continue;
      }

      if (i == points.length - 1) {
        controlPoints[i] = [];
        continue;
      }

      var prevPoint = points[i - 1];
      var nextPoint = points[i + 1];

      // 기울기
      (nextPoint[1] - prevPoint[1]) / (nextPoint[0] - prevPoint[0]);

      var newControlPoint = [
        prevPoint[0] + (nextPoint[0] - prevPoint[0]) * tension,
        prevPoint[1] + (nextPoint[1] - prevPoint[1]) * tension,
      ];

      var controlPoint = [
        [].concat(toConsumableArray(prevPoint)) /* start */,
        [].concat(newControlPoint) /* end */,
      ];

      var P = Math.sqrt(
        Math.pow(p[0] - prevPoint[0], 2) + Math.pow(p[1] - prevPoint[1], 2)
      );
      var N = Math.sqrt(
        Math.pow(nextPoint[0] - p[0], 2) + Math.pow(nextPoint[1] - p[1], 2)
      );

      var rate = P / N;

      var dx =
        controlPoint[0][0] + (controlPoint[1][0] - controlPoint[0][0]) * rate;
      var dy =
        controlPoint[0][1] + (controlPoint[1][1] - controlPoint[0][1]) * rate;

      controlPoint[0][0] += p[0] - dx;
      controlPoint[0][1] += p[1] - dy;
      controlPoint[1][0] += p[0] - dx;
      controlPoint[1][1] += p[1] - dy;

      controlPoints[i] = controlPoint;
    }

    return controlPoints;
  }

  function ImageToHistogram(url, callback) {
    var opt =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : { width: 200, height: 100 };

    var img = new ImageLoader(url);
    img.loadImage(function () {
      Canvas.createHistogram(
        opt.width || 200,
        opt.height || 100,
        img.toHistogram(opt),
        function (canvas) {
          if (typeof callback == "function")
            callback(canvas.toDataURL("image/png"));
        },
        opt
      );
    });
  }

  var image = {
    palette: palette,
    ImageToCanvas: ImageToCanvas,
    ImageToHistogram: ImageToHistogram,
    ImageToRGB: ImageToRGB,
    ImageToURL: ImageToURL,
    GLToCanvas: GLToCanvas,
    histogram: histogram,
    histogramToPoints: histogramToPoints,
  };

  var Color$1 = _extends(
    {},
    formatter,
    math,
    mixin,
    parser,
    fromYCrCb,
    fromRGB,
    fromCMYK,
    fromHSV,
    fromHSL,
    fromLAB,
    image
  );

  var hue_color = [
    { rgb: "#ff0000", start: 0.0 },
    { rgb: "#ffff00", start: 0.17 },
    { rgb: "#00ff00", start: 0.33 },
    { rgb: "#00ffff", start: 0.5 },
    { rgb: "#0000ff", start: 0.67 },
    { rgb: "#ff00ff", start: 0.83 },
    { rgb: "#ff0000", start: 1 },
  ];

  function checkHueColor(p) {
    var startColor, endColor;

    for (var i = 0; i < hue_color.length; i++) {
      if (hue_color[i].start >= p) {
        startColor = hue_color[i - 1];
        endColor = hue_color[i];
        break;
      }
    }

    if (startColor && endColor) {
      return Color$1.interpolateRGB(
        startColor,
        endColor,
        (p - startColor.start) / (endColor.start - startColor.start)
      );
    }

    return hue_color[0].rgb;
  }

  function initHueColors() {
    for (var i = 0, len = hue_color.length; i < len; i++) {
      var hue = hue_color[i];

      var obj = Color$1.parse(hue.rgb);

      hue.r = obj.r;
      hue.g = obj.g;
      hue.b = obj.b;
    }
  }

  initHueColors();

  var HueColor = {
    colors: hue_color,
    checkHueColor: checkHueColor,
  };

  // TODO: worker run
  var ImageFilter = _extends({}, FilterList, functions$1);

  var Util = {
    Color: Color$1,
    HueColor: HueColor,
    ColorNames: ColorNames,
    ImageFilter: ImageFilter,
    GL: GL,
    Canvas: Canvas,
    ImageLoader: ImageLoader,
  };

  Color$1.color;

  var counter = 0;
  var cached = [];

  var Dom = (function () {
    function Dom(tag, className, attr) {
      classCallCheck(this, Dom);

      if (typeof tag != "string") {
        this.el = tag;
      } else {
        var el = document.createElement(tag);
        this.uniqId = counter++;

        if (className) {
          el.className = className;
        }

        attr = attr || {};

        for (var k in attr) {
          el.setAttribute(k, attr[k]);
        }

        this.el = el;
      }
    }

    createClass(
      Dom,
      [
        {
          key: "attr",
          value: function attr(key, value) {
            if (arguments.length == 1) {
              return this.el.getAttribute(key);
            }

            this.el.setAttribute(key, value);

            return this;
          },
        },
        {
          key: "closest",
          value: function closest(cls) {
            var temp = this;
            var checkCls = false;

            while (!(checkCls = temp.hasClass(cls))) {
              if (temp.el.parentNode) {
                temp = new Dom(temp.el.parentNode);
              } else {
                return null;
              }
            }

            if (checkCls) {
              return temp;
            }

            return null;
          },
        },
        {
          key: "checked",
          value: function checked() {
            return this.el.checked;
          },
        },
        {
          key: "removeClass",
          value: function removeClass(cls) {
            this.el.className = (" " + this.el.className + " ")
              .replace(" " + cls + " ", " ")
              .trim();

            return this;
          },
        },
        {
          key: "hasClass",
          value: function hasClass(cls) {
            if (!this.el.className) {
              return false;
            } else {
              var newClass = " " + this.el.className + " ";
              return newClass.indexOf(" " + cls + " ") > -1;
            }
          },
        },
        {
          key: "addClass",
          value: function addClass(cls) {
            if (!this.hasClass(cls)) {
              this.el.className = this.el.className + " " + cls;
            }

            return this;
          },
        },
        {
          key: "toggleClass",
          value: function toggleClass(cls) {
            if (this.hasClass(cls)) {
              this.removeClass(cls);
            } else {
              this.addClass(cls);
            }
          },
        },
        {
          key: "html",
          value: function html(_html) {
            try {
              if (typeof _html == "string") {
                this.el.innerHTML = _html;
              } else {
                this.empty().append(_html);
              }
            } catch (e) {
              console.log(_html);
            }

            return this;
          },
        },
        {
          key: "find",
          value: function find(selector) {
            return this.el.querySelector(selector);
          },
        },
        {
          key: "$",
          value: function $(selector) {
            return new Dom(this.find(selector));
          },
        },
        {
          key: "findAll",
          value: function findAll(selector) {
            return this.el.querySelectorAll(selector);
          },
        },
        {
          key: "$$",
          value: function $$(selector) {
            return []
              .concat(toConsumableArray(this.findAll(selector)))
              .map(function (el) {
                return new Dom(el);
              });
          },
        },
        {
          key: "empty",
          value: function empty() {
            return this.html("");
          },
        },
        {
          key: "append",
          value: function append(el) {
            if (typeof el == "string") {
              this.el.appendChild(document.createTextNode(el));
            } else {
              this.el.appendChild(el.el || el);
            }

            return this;
          },
        },
        {
          key: "appendTo",
          value: function appendTo(target) {
            var t = target.el ? target.el : target;

            t.appendChild(this.el);

            return this;
          },
        },
        {
          key: "remove",
          value: function remove() {
            if (this.el.parentNode) {
              this.el.parentNode.removeChild(this.el);
            }

            return this;
          },
        },
        {
          key: "text",
          value: function text() {
            return this.el.textContent;
          },
        },
        {
          key: "css",
          value: function css(key, value) {
            var _this = this;

            if (arguments.length == 2) {
              this.el.style[key] = value;
            } else if (arguments.length == 1) {
              if (typeof key == "string") {
                return getComputedStyle(this.el)[key];
              } else {
                var keys = key || {};
                Object.keys(keys).forEach(function (k) {
                  _this.el.style[k] = keys[k];
                });
              }
            }

            return this;
          },
        },
        {
          key: "cssFloat",
          value: function cssFloat(key) {
            return parseFloat(this.css(key));
          },
        },
        {
          key: "cssInt",
          value: function cssInt(key) {
            return parseInt(this.css(key));
          },
        },
        {
          key: "offset",
          value: function offset() {
            var rect = this.el.getBoundingClientRect();

            return {
              top: rect.top + Dom.getScrollTop(),
              left: rect.left + Dom.getScrollLeft(),
            };
          },
        },
        {
          key: "rect",
          value: function rect() {
            return this.el.getBoundingClientRect();
          },
        },
        {
          key: "position",
          value: function position() {
            if (this.el.style.top) {
              return {
                top: parseFloat(this.css("top")),
                left: parseFloat(this.css("left")),
              };
            } else {
              return this.el.getBoundingClientRect();
            }
          },
        },
        {
          key: "size",
          value: function size() {
            return [this.width(), this.height()];
          },
        },
        {
          key: "width",
          value: function width() {
            return this.el.offsetWidth || this.el.getBoundingClientRect().width;
          },
        },
        {
          key: "contentWidth",
          value: function contentWidth() {
            return (
              this.width() -
              this.cssFloat("padding-left") -
              this.cssFloat("padding-right")
            );
          },
        },
        {
          key: "height",
          value: function height() {
            return (
              this.el.offsetHeight || this.el.getBoundingClientRect().height
            );
          },
        },
        {
          key: "contentHeight",
          value: function contentHeight() {
            return (
              this.height() -
              this.cssFloat("padding-top") -
              this.cssFloat("padding-bottom")
            );
          },
        },
        {
          key: "dataKey",
          value: function dataKey(key) {
            return this.uniqId + "." + key;
          },
        },
        {
          key: "data",
          value: function data(key, value) {
            if (arguments.length == 2) {
              cached[this.dataKey(key)] = value;
            } else if (arguments.length == 1) {
              return cached[this.dataKey(key)];
            } else {
              var keys = Object.keys(cached);

              var uniqId = this.uniqId + ".";
              return keys
                .filter(function (key) {
                  if (key.indexOf(uniqId) == 0) {
                    return true;
                  }

                  return false;
                })
                .map(function (value) {
                  return cached[value];
                });
            }

            return this;
          },
        },
        {
          key: "val",
          value: function val(value) {
            if (arguments.length == 0) {
              return this.el.value;
            } else if (arguments.length == 1) {
              this.el.value = value;
            }

            return this;
          },
        },
        {
          key: "int",
          value: function int() {
            return parseInt(this.val(), 10);
          },
        },
        {
          key: "float",
          value: function float() {
            return parseFloat(this.val());
          },
        },
        {
          key: "show",
          value: function show() {
            return this.css("display", "block");
          },
        },
        {
          key: "hide",
          value: function hide() {
            return this.css("display", "none");
          },
        },
        {
          key: "toggle",
          value: function toggle() {
            if (this.css("display") == "none") {
              return this.show();
            } else {
              return this.hide();
            }
          },
        },
        {
          key: "scrollTop",
          value: function scrollTop() {
            if (this.el === document.body) {
              return Dom.getScrollTop();
            }

            return this.el.scrollTop;
          },
        },
        {
          key: "scrollLeft",
          value: function scrollLeft() {
            if (this.el === document.body) {
              return Dom.getScrollLeft();
            }

            return this.el.scrollLeft;
          },
        },
        {
          key: "on",
          value: function on(eventName, callback, opt1, opt2) {
            this.el.addEventListener(eventName, callback, opt1, opt2);

            return this;
          },
        },
        {
          key: "off",
          value: function off(eventName, callback) {
            this.el.removeEventListener(eventName, callback);

            return this;
          },
        },
        {
          key: "getElement",
          value: function getElement() {
            return this.el;
          },
        },
        {
          key: "createChild",
          value: function createChild(tag) {
            var className =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : "";
            var attrs =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : {};
            var css =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : {};

            var $element = new Dom(tag, className, attrs);
            $element.css(css);

            this.append($element);

            return $element;
          },
        },
        {
          key: "firstChild",
          value: function firstChild() {
            return new Dom(this.el.firstElementChild);
          },
        },
        {
          key: "replace",
          value: function replace(oldElement, newElement) {
            this.el.replaceChild(newElement, oldElement);

            return this;
          },
        },
      ],
      [
        {
          key: "getScrollTop",
          value: function getScrollTop() {
            return Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            );
          },
        },
        {
          key: "getScrollLeft",
          value: function getScrollLeft() {
            return Math.max(
              window.pageXOffset,
              document.documentElement.scrollLeft,
              document.body.scrollLeft
            );
          },
        },
      ]
    );
    return Dom;
  })();

  var BaseModule = (function () {
    function BaseModule($store) {
      classCallCheck(this, BaseModule);

      this.$store = $store;
      this.initialize();
    }

    createClass(BaseModule, [
      {
        key: "initialize",
        value: function initialize() {
          var _this = this;

          this.filterProps().forEach(function (key) {
            _this.$store.action(key, _this);
          });
        },
      },
      {
        key: "filterProps",
        value: function filterProps() {
          var pattern =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : "/";

          return Object.getOwnPropertyNames(this.__proto__).filter(function (
            key
          ) {
            return key.startsWith(pattern);
          });
        },
      },
    ]);
    return BaseModule;
  })();

  var ColorSetsList = (function (_BaseModule) {
    inherits(ColorSetsList, _BaseModule);

    function ColorSetsList() {
      classCallCheck(this, ColorSetsList);
      return possibleConstructorReturn(
        this,
        (ColorSetsList.__proto__ || Object.getPrototypeOf(ColorSetsList)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorSetsList, [
      {
        key: "initialize",
        value: function initialize() {
          get(
            ColorSetsList.prototype.__proto__ ||
              Object.getPrototypeOf(ColorSetsList.prototype),
            "initialize",
            this
          ).call(this);

          // set property
          this.$store.colorSetsList = [
            {
              name: "Material",
              colors: [
                "#F44336",
                "#E91E63",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548",
                "#9E9E9E",
                "#607D8B",
              ],
            },
            { name: "Custom", edit: true, colors: [] },
            {
              name: "Color Scale",
              scale: ["red", "yellow", "black"],
              count: 5,
            },
          ];
          this.$store.currentColorSets = {};
        },
      },
      {
        key: "/list",
        value: function list($store) {
          return Array.isArray($store.userList) && $store.userList.length
            ? $store.userList
            : $store.colorSetsList;
        },
      },
      {
        key: "/setUserPalette",
        value: function setUserPalette($store, list) {
          $store.userList = list;

          $store.dispatch("/resetUserPalette");
          $store.dispatch("/setCurrentColorSets");
        },
      },
      {
        key: "/resetUserPalette",
        value: function resetUserPalette($store) {
          if ($store.userList && $store.userList.length) {
            $store.userList = $store.userList.map(function (element, index) {
              if (typeof element.colors == "function") {
                var makeCallback = element.colors;

                element.colors = makeCallback($store);
                element._colors = makeCallback;
              }

              return Object.assign(
                {
                  name: "color-" + index,
                  colors: [],
                },
                element
              );
            });

            $store.emit("changeUserList");
          }
        },
      },
      {
        key: "/setCurrentColorSets",
        value: function setCurrentColorSets($store, nameOrIndex) {
          var _list = $store.dispatch("/list");

          if (typeof nameOrIndex == "undefined") {
            $store.currentColorSets = _list[0];
          } else if (typeof nameOrIndex == "number") {
            $store.currentColorSets = _list[nameOrIndex];
          } else {
            $store.currentColorSets = _list.filter(function (obj) {
              return obj.name == nameOrIndex;
            })[0];
          }

          $store.emit("changeCurrentColorSets");
        },
      },
      {
        key: "/getCurrentColorSets",
        value: function getCurrentColorSets($store) {
          return $store.currentColorSets;
        },
      },
      {
        key: "/addCurrentColor",
        value: function addCurrentColor($store, color) {
          if (Array.isArray($store.currentColorSets.colors)) {
            $store.currentColorSets.colors.push(color);
            $store.emit("changeCurrentColorSets");
          }
        },
      },
      {
        key: "/setCurrentColorAll",
        value: function setCurrentColorAll($store) {
          var colors =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];

          $store.currentColorSets.colors = colors;
          $store.emit("changeCurrentColorSets");
        },
      },
      {
        key: "/removeCurrentColor",
        value: function removeCurrentColor($store, index) {
          if ($store.currentColorSets.colors[index]) {
            $store.currentColorSets.colors.splice(index, 1);
            $store.emit("changeCurrentColorSets");
          }
        },
      },
      {
        key: "/removeCurrentColorToTheRight",
        value: function removeCurrentColorToTheRight($store, index) {
          if ($store.currentColorSets.colors[index]) {
            $store.currentColorSets.colors.splice(index, Number.MAX_VALUE);
            $store.emit("changeCurrentColorSets");
          }
        },
      },
      {
        key: "/clearPalette",
        value: function clearPalette($store) {
          if ($store.currentColorSets.colors) {
            $store.currentColorSets.colors = [];
            $store.emit("changeCurrentColorSets");
          }
        },
      },
      {
        key: "/getCurrentColors",
        value: function getCurrentColors($store) {
          return $store.dispatch("/getColors", $store.currentColorSets);
        },
      },
      {
        key: "/getColors",
        value: function getColors($store, element) {
          if (element.scale) {
            return Color$1.scale(element.scale, element.count);
          }

          return element.colors || [];
        },
      },
      {
        key: "/getColorSetsList",
        value: function getColorSetsList($store) {
          return $store.dispatch("/list").map(function (element) {
            return {
              name: element.name,
              edit: element.edit,
              colors: $store.dispatch("/getColors", element),
            };
          });
        },
      },
    ]);
    return ColorSetsList;
  })(BaseModule);

  var Event = {
    addEvent: function addEvent(dom, eventName, callback, options) {
      if (dom) {
        dom.addEventListener(eventName, callback, options);
      }
    },
    removeEvent: function removeEvent(dom, eventName, callback) {
      if (dom) {
        dom.removeEventListener(eventName, callback);
      }
    },
    pos: function pos(e) {
      if (e.touches && e.touches[0]) {
        return e.touches[0];
      }

      return e;
    },
    posXY: function posXY(e) {
      var pos = this.pos(e);
      return {
        x: pos.pageX,
        y: pos.pageY,
      };
    },
  };

  var DELEGATE_SPLIT = ".";

  var State = (function () {
    function State(masterObj) {
      var settingObj =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, State);

      this.masterObj = masterObj;
      this.settingObj = settingObj;
    }

    createClass(State, [
      {
        key: "set",
        value: function set$$1(key, value) {
          var defaultValue =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : undefined;

          this.settingObj[key] = value || defaultValue;
        },
      },
      {
        key: "init",
        value: function init(key) {
          if (!this.has(key)) {
            var arr = key.split(DELEGATE_SPLIT);

            var obj =
              this.masterObj.refs[arr[0]] ||
              this.masterObj[arr[0]] ||
              this.masterObj;
            var method = arr.pop();

            if (obj[method]) {
              for (
                var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key];
              }

              var value = obj[method].apply(obj, args);

              this.set(key, value);
            }
          }
        },
      },
      {
        key: "get",
        value: function get$$1(key) {
          var defaultValue =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";

          this.init(key, defaultValue);

          return this.settingObj[key] || defaultValue;
        },
      },
      {
        key: "has",
        value: function has(key) {
          return !!this.settingObj[key];
        },
      },
    ]);
    return State;
  })();

  var CHECK_EVENT_PATTERN =
    /^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/gi;
  var CHECK_LOAD_PATTERN = /^load (.*)/gi;
  var EVENT_SAPARATOR = " ";
  var META_KEYS = ["Control", "Shift", "Alt", "Meta"];

  var EventMachin = (function () {
    function EventMachin() {
      classCallCheck(this, EventMachin);

      this.state = new State(this);
      this.refs = {};

      this.childComponents = this.components();
    }

    /**
     * 자식으로 사용할 컴포넌트를 생성해준다.
     * 생성 시점에 $store 객체가 자동으로 공유된다.
     * 모든 데이타는 $store 기준으로 작성한다.
     */

    createClass(EventMachin, [
      {
        key: "newChildComponents",
        value: function newChildComponents() {
          var _this = this;

          var childKeys = Object.keys(this.childComponents);
          childKeys.forEach(function (key) {
            var Component = _this.childComponents[key];

            _this[key] = new Component(_this);
          });
        },

        /**
         * 부모가 정의한 template 과  그 안에서 동작하는 자식 컴포넌트들을 다 합쳐서
         * 최종 element 를 만들어준다.
         *
         * 그리고 자동으로 load 되어질게 있으면 로드 해준다.
         */
      },
      {
        key: "render",
        value: function render() {
          // 1. 나의 template 을 만들어내고
          this.$el = this.parseTemplate(this.template());
          this.refs.$el = this.$el;

          // 개별 객체 셋팅하고
          this.parseTarget();

          // 데이타 로드 하고
          this.load();

          this.afterRender();
        },
      },
      {
        key: "afterRender",
        value: function afterRender() {},

        /**
         * 자식 컴포넌트로 사용될 객체 정의
         */
      },
      {
        key: "components",
        value: function components() {
          return {};
        },

        /**
         * Class 기반으로 $el 을 생성하기 위해서
         * 선언형으로 html 템플릿을 정의한다.
         *
         * @param {*} html
         */
      },
      {
        key: "parseTemplate",
        value: function parseTemplate(html) {
          var _this2 = this;

          var $el = new Dom("div").html(html).firstChild();

          // ref element 정리
          var refs = $el.findAll("[ref]");

          [].concat(toConsumableArray(refs)).forEach(function (node) {
            var name = node.getAttribute("ref");
            _this2.refs[name] = new Dom(node);
          });

          return $el;
        },

        /**
         * target 으로 지정된 자식 컴포넌트를 대체해준다.
         */
      },
      {
        key: "parseTarget",
        value: function parseTarget() {
          var _this3 = this;

          var $el = this.$el;
          var targets = $el.findAll("[target]");

          [].concat(toConsumableArray(targets)).forEach(function (node) {
            var targetComponentName = node.getAttribute("target");
            var refName = node.getAttribute("ref") || targetComponentName;

            var Component = _this3.childComponents[targetComponentName];
            var instance = new Component(_this3);
            _this3[refName] = instance;
            _this3.refs[refName] = instance.$el;

            if (instance) {
              instance.render();
              var $parent = new Dom(node.parentNode);
              $parent.replace(node, instance.$el.el);
            }
          });
        },

        // load function이 정의된 객체는 load 를 실행해준다.
      },
      {
        key: "load",
        value: function load() {
          var _this4 = this;

          this.filterProps(CHECK_LOAD_PATTERN).forEach(function (callbackName) {
            var elName = callbackName.split("load ")[1];

            if (_this4.refs[elName]) {
              _this4.refs[elName].html(
                _this4.parseTemplate(_this4[callbackName].call(_this4))
              );
            }
          });
        },

        // 기본 템플릿 지정
      },
      {
        key: "template",
        value: function template() {
          return "<div></div>";
        },
      },
      {
        key: "initialize",
        value: function initialize() {},

        /**
         * 이벤트를 초기화한다.
         */
      },
      {
        key: "initializeEvent",
        value: function initializeEvent() {
          var _this5 = this;

          this.initializeEventMachin();

          // 자식 이벤트도 같이 초기화 한다.
          // 그래서 이 메소드는 부모에서 한번만 불려도 된다.
          Object.keys(this.childComponents).forEach(function (key) {
            if (_this5[key]) _this5[key].initializeEvent();
          });
        },

        /**
         * 자원을 해제한다.
         * 이것도 역시 자식 컴포넌트까지 제어하기 때문에 가장 최상위 부모에서 한번만 호출되도 된다.
         */
      },
      {
        key: "destroy",
        value: function destroy() {
          var _this6 = this;

          this.destroyEventMachin();
          // this.refs = {}

          Object.keys(this.childComponents).forEach(function (key) {
            if (_this6[key]) _this6[key].destroy();
          });
        },
      },
      {
        key: "destroyEventMachin",
        value: function destroyEventMachin() {
          this.removeEventAll();
        },
      },
      {
        key: "initializeEventMachin",
        value: function initializeEventMachin() {
          this.filterProps(CHECK_EVENT_PATTERN).forEach(
            this.parseEvent.bind(this)
          );
        },

        /**
         * property 수집하기
         * 상위 클래스의 모든 property 를 수집해서 리턴한다.
         */
      },
      {
        key: "collectProps",
        value: function collectProps() {
          if (!this.collapsedProps) {
            var p = this.__proto__;
            var results = [];
            do {
              results.push.apply(
                results,
                toConsumableArray(Object.getOwnPropertyNames(p))
              );
              p = p.__proto__;
            } while (p);

            this.collapsedProps = results;
          }

          return this.collapsedProps;
        },
      },
      {
        key: "filterProps",
        value: function filterProps(pattern) {
          return this.collectProps().filter(function (key) {
            return key.match(pattern);
          });
        },
      },
      {
        key: "parseEvent",
        value: function parseEvent(key) {
          var arr = key.split(EVENT_SAPARATOR);

          this.bindingEvent(arr, this[key].bind(this));
        },
      },
      {
        key: "getDefaultDomElement",
        value: function getDefaultDomElement(dom) {
          var el = void 0;

          if (dom) {
            el = this.refs[dom] || this[dom] || window[dom];
          } else {
            el = this.el || this.$el || this.$root;
          }

          if (el instanceof Dom) {
            return el.getElement();
          }

          return el;
        },
      },
      {
        key: "getDefaultEventObject",
        value: function getDefaultEventObject(eventName) {
          var _this7 = this;

          var arr = eventName.split(".");
          var realEventName = arr.shift();

          var isControl = arr.includes("Control");
          var isShift = arr.includes("Shift");
          var isAlt = arr.includes("Alt");
          var isMeta = arr.includes("Meta");

          arr = arr.filter(function (code) {
            return META_KEYS.includes(code) === false;
          });

          var checkMethodList = arr.filter(function (code) {
            return !!_this7[code];
          });

          arr = arr
            .filter(function (code) {
              return checkMethodList.includes(code) === false;
            })
            .map(function (code) {
              return code.toLowerCase();
            });

          return {
            eventName: realEventName,
            isControl: isControl,
            isShift: isShift,
            isAlt: isAlt,
            isMeta: isMeta,
            codes: arr,
            checkMethodList: checkMethodList,
          };
        },
      },
      {
        key: "bindingEvent",
        value: function bindingEvent(_ref, callback) {
          var _ref2 = toArray(_ref),
            eventName = _ref2[0],
            dom = _ref2[1],
            delegate = _ref2.slice(2);

          dom = this.getDefaultDomElement(dom);
          var eventObject = this.getDefaultEventObject(eventName);

          eventObject.dom = dom;
          eventObject.delegate = delegate.join(EVENT_SAPARATOR);

          this.addEvent(eventObject, callback);
        },
      },
      {
        key: "matchPath",
        value: function matchPath(el, selector) {
          if (el) {
            if (el.matches(selector)) {
              return el;
            }
            return this.matchPath(el.parentElement, selector);
          }
          return null;
        },
      },
      {
        key: "getBindings",
        value: function getBindings() {
          if (!this._bindings) {
            this.initBindings();
          }

          return this._bindings;
        },
      },
      {
        key: "addBinding",
        value: function addBinding(obj) {
          this.getBindings().push(obj);
        },
      },
      {
        key: "initBindings",
        value: function initBindings() {
          this._bindings = [];
        },
      },
      {
        key: "checkEventType",
        value: function checkEventType(e, eventObject) {
          var _this8 = this;

          var onlyControl = eventObject.isControl ? e.ctrlKey : true;
          var onlyShift = eventObject.isShift ? e.shiftKey : true;
          var onlyAlt = eventObject.isAlt ? e.altKey : true;
          var onlyMeta = eventObject.isMeta ? e.metaKey : true;

          var hasKeyCode = true;
          if (eventObject.codes.length) {
            hasKeyCode =
              eventObject.codes.includes(e.code.toLowerCase()) ||
              eventObject.codes.includes(e.key.toLowerCase());
          }

          var isAllCheck = true;
          if (eventObject.checkMethodList.length) {
            // 체크 메소드들은 모든 메소드를 다 적용해야한다.
            isAllCheck = eventObject.checkMethodList.every(function (method) {
              return _this8[method].call(_this8, e);
            });
          }

          return (
            onlyControl &&
            onlyAlt &&
            onlyShift &&
            onlyMeta &&
            hasKeyCode &&
            isAllCheck
          );
        },
      },
      {
        key: "makeCallback",
        value: function makeCallback(eventObject, callback) {
          var _this9 = this;

          if (eventObject.delegate) {
            return function (e) {
              e.xy = Event.posXY(e);
              if (_this9.checkEventType(e, eventObject)) {
                var delegateTarget = _this9.matchPath(
                  e.target || e.srcElement,
                  eventObject.delegate
                );

                if (delegateTarget) {
                  // delegate target 이 있는 경우만 callback 실행
                  e.delegateTarget = delegateTarget;
                  e.$delegateTarget = new Dom(delegateTarget);
                  return callback(e);
                }
              }
            };
          } else {
            return function (e) {
              e.xy = Event.posXY(e);
              if (_this9.checkEventType(e, eventObject)) {
                return callback(e);
              }
            };
          }
        },
      },
      {
        key: "addEvent",
        value: function addEvent(eventObject, callback) {
          eventObject.callback = this.makeCallback(eventObject, callback);
          this.addBinding(eventObject);

          var options = true;
          if (eventObject.eventName === "touchstart") {
            options = { passive: true };
          }

          Event.addEvent(
            eventObject.dom,
            eventObject.eventName,
            eventObject.callback,
            options
          );
        },
      },
      {
        key: "removeEventAll",
        value: function removeEventAll() {
          var _this10 = this;

          this.getBindings().forEach(function (obj) {
            _this10.removeEvent(obj);
          });
          this.initBindings();
        },
      },
      {
        key: "removeEvent",
        value: function removeEvent(_ref3) {
          var eventName = _ref3.eventName,
            dom = _ref3.dom,
            callback = _ref3.callback;

          Event.removeEvent(dom, eventName, callback);
        },
      },
    ]);
    return EventMachin;
  })();

  var CHECK_STORE_EVENT_PATTERN = /^@/;

  var UIElement = (function (_EventMachin) {
    inherits(UIElement, _EventMachin);

    function UIElement(opt) {
      classCallCheck(this, UIElement);

      var _this = possibleConstructorReturn(
        this,
        (UIElement.__proto__ || Object.getPrototypeOf(UIElement)).call(
          this,
          opt
        )
      );

      _this.opt = opt || {};

      if (opt && opt.$store) {
        _this.$store = opt.$store;
      }

      _this.initialize();

      _this.initializeStoreEvent();
      return _this;
    }

    /**
     * initialize store event
     *
     * you can define '@xxx' method(event) in UIElement
     *
     *
     */

    createClass(UIElement, [
      {
        key: "initializeStoreEvent",
        value: function initializeStoreEvent() {
          var _this2 = this;

          this.storeEvents = {};
          this.filterProps(CHECK_STORE_EVENT_PATTERN).forEach(function (key) {
            var arr = key.split("@");
            arr.shift();
            var event = arr.join("@");

            _this2.storeEvents[event] = _this2[key].bind(_this2);
            _this2.$store.on(event, _this2.storeEvents[event]);
          });
        },
      },
      {
        key: "destoryStoreEvent",
        value: function destoryStoreEvent() {
          var _this3 = this;

          Object.keys(this.storeEvents).forEach(function (event) {
            _this3.$store.off(event, _this3.storeEvents[event]);
          });
        },
      },
    ]);
    return UIElement;
  })(EventMachin);

  function isUndefined(v) {
    return typeof v == "undefined" || v == null;
  }

  var ColorManager = (function (_BaseModule) {
    inherits(ColorManager, _BaseModule);

    function ColorManager() {
      classCallCheck(this, ColorManager);
      return possibleConstructorReturn(
        this,
        (ColorManager.__proto__ || Object.getPrototypeOf(ColorManager)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorManager, [
      {
        key: "initialize",
        value: function initialize() {
          get(
            ColorManager.prototype.__proto__ ||
              Object.getPrototypeOf(ColorManager.prototype),
            "initialize",
            this
          ).call(this);

          this.$store.rgb = {};
          this.$store.hsl = {};
          this.$store.hsv = {};
          this.$store.alpha = 1;
          this.$store.format = "hex";

          // this.$store.dispatch('/changeColor');
        },
      },
      {
        key: "/changeFormat",
        value: function changeFormat($store, format) {
          $store.format = format;

          $store.emit("changeFormat");
        },
      },
      {
        key: "/initColor",
        value: function initColor($store, colorObj, source) {
          $store.dispatch("/changeColor", colorObj, source, true);
          $store.emit("initColor");
        },
      },
      {
        key: "/changeColor",
        value: function changeColor($store, colorObj, source, isNotEmit) {
          colorObj = colorObj || "#FF0000";

          if (typeof colorObj == "string") {
            colorObj = Color$1.parse(colorObj);
          }

          colorObj.source = colorObj.source || source;

          $store.alpha = isUndefined(colorObj.a) ? $store.alpha : colorObj.a;
          $store.format =
            colorObj.type != "hsv"
              ? colorObj.type || $store.format
              : $store.format;

          if (colorObj.type == "hsl") {
            $store.hsl = Object.assign($store.hsl, colorObj);
            $store.rgb = Color$1.HSLtoRGB($store.hsl);
            $store.hsv = Color$1.HSLtoHSV(colorObj);
          } else if (colorObj.type == "hex") {
            $store.rgb = Object.assign($store.rgb, colorObj);
            $store.hsl = Color$1.RGBtoHSL($store.rgb);
            $store.hsv = Color$1.RGBtoHSV(colorObj);
          } else if (colorObj.type == "rgb") {
            $store.rgb = Object.assign($store.rgb, colorObj);
            $store.hsl = Color$1.RGBtoHSL($store.rgb);
            $store.hsv = Color$1.RGBtoHSV(colorObj);
          } else if (colorObj.type == "hsv") {
            $store.hsv = Object.assign($store.hsv, colorObj);
            $store.rgb = Color$1.HSVtoRGB($store.hsv);
            $store.hsl = Color$1.HSVtoHSL($store.hsv);
          }

          if (!isNotEmit) {
            $store.emit("changeColor", colorObj.source);
          }
        },
      },
      {
        key: "/getHueColor",
        value: function getHueColor($store) {
          return HueColor.checkHueColor($store.hsv.h / 360);
        },
      },
      {
        key: "/toString",
        value: function toString($store, type) {
          type = type || $store.format;
          var colorObj = $store[type] || $store.rgb;
          return Color$1.format(
            _extends({}, colorObj, {
              a: $store.alpha,
            }),
            type
          );
        },
      },
      {
        key: "/toColor",
        value: function toColor($store, type) {
          type = type || $store.format;

          if (type == "rgb") {
            return $store.dispatch("/toRGB");
          } else if (type == "hsl") {
            return $store.dispatch("/toHSL");
          } else if (type == "hex") {
            return $store.dispatch("/toHEX");
          }

          return $store.dispatch("/toString", type);
        },
      },
      {
        key: "/toRGB",
        value: function toRGB($store) {
          return $store.dispatch("/toString", "rgb");
        },
      },
      {
        key: "/toHSL",
        value: function toHSL($store) {
          return $store.dispatch("/toString", "hsl");
        },
      },
      {
        key: "/toHEX",
        value: function toHEX($store) {
          return $store.dispatch("/toString", "hex").toUpperCase();
        },
      },
    ]);
    return ColorManager;
  })(BaseModule);

  var BaseStore = (function () {
    function BaseStore(opt) {
      classCallCheck(this, BaseStore);

      this.callbacks = [];
      this.actions = [];
      this.modules = opt.modules || [];

      this.initialize();
    }

    createClass(BaseStore, [
      {
        key: "initialize",
        value: function initialize() {
          this.initializeModule();
        },
      },
      {
        key: "initializeModule",
        value: function initializeModule() {
          var _this = this;

          this.modules.forEach(function (Module) {
            new Module(_this);
          });
        },
      },
      {
        key: "action",
        value: function action(_action, context) {
          this.actions[_action] = {
            context: context,
            callback: context[_action],
          };
        },
      },
      {
        key: "dispatch",
        value: function dispatch(action) {
          var args = [].concat(Array.prototype.slice.call(arguments));
          var action = args.shift();

          var m = this.actions[action];

          if (m) {
            return m.callback.apply(
              m.context,
              [this].concat(toConsumableArray(args))
            );
          }
        },
      },
      {
        key: "module",
        value: function module(ModuleObject) {
          // this.action()
        },
      },
      {
        key: "on",
        value: function on(event, callback) {
          this.callbacks.push({ event: event, callback: callback });
        },
      },
      {
        key: "off",
        value: function off(event, callback) {
          if (arguments.length == 0) {
            this.callbacks = [];
          } else if (arguments.length == 1) {
            this.callbacks = this.callbacks.filter(function (f) {
              return f.event != event;
            });
          } else if (arguments.length == 2) {
            this.callbacks = this.callbacks.filter(function (f) {
              return f.event != event && f.callback != callback;
            });
          }
        },
      },
      {
        key: "emit",
        value: function emit() {
          var args = [].concat(Array.prototype.slice.call(arguments));
          var event = args.shift();

          this.callbacks
            .filter(function (f) {
              return f.event == event;
            })
            .forEach(function (f) {
              if (f && typeof f.callback == "function") {
                f.callback.apply(f, toConsumableArray(args));
              }
            });
        },
      },
    ]);
    return BaseStore;
  })();

  var BaseColorPicker = (function (_UIElement) {
    inherits(BaseColorPicker, _UIElement);

    function BaseColorPicker(opt) {
      classCallCheck(this, BaseColorPicker);

      var _this = possibleConstructorReturn(
        this,
        (
          BaseColorPicker.__proto__ || Object.getPrototypeOf(BaseColorPicker)
        ).call(this, opt)
      );

      _this.isColorPickerShow = false;
      _this.isShortCut = false;
      _this.hideDelay = +(typeof _this.opt.hideDeplay == "undefined"
        ? 2000
        : _this.opt.hideDelay);
      _this.timerCloseColorPicker;
      _this.autoHide = _this.opt.autoHide || true;
      _this.outputFormat = _this.opt.outputFormat;
      _this.$checkColorPickerClass = _this.checkColorPickerClass.bind(_this);

      return _this;
    }

    createClass(BaseColorPicker, [
      {
        key: "initialize",
        value: function initialize() {
          var _this2 = this;

          this.$body = null;
          this.$root = null;

          this.$store = new BaseStore({
            modules: [ColorManager, ColorSetsList],
          });

          this.callbackChange = function () {
            _this2.callbackColorValue();
          };

          this.callbackLastUpdate = function () {
            _this2.callbackLastUpdateColorValue();
          };

          this.colorpickerShowCallback = function () {};
          this.colorpickerHideCallback = function () {};
          this.colorpickerLastUpdateCallback = function () {};

          this.$body = new Dom(this.getContainer());
          this.$root = new Dom("div", this.opt.containerClass);

          //  append colorpicker to container (ex : body)
          if (this.opt.position == "inline") {
            this.$body.append(this.$root);
          }

          if (this.opt.type) {
            // to change css style
            this.$root.addClass(this.opt.type);
          }

          if (this.opt.hideInformation) {
            this.$root.addClass("hide-information");
          }

          if (this.opt.hideColorsets) {
            this.$root.addClass("hide-colorsets");
          }

          this.$arrow = new Dom("div", "arrow");

          this.$root.append(this.$arrow);

          this.$store.dispatch("/setUserPalette", this.opt.colorSets);

          this.render();

          this.$root.append(this.$el);

          this.initColorWithoutChangeEvent(this.opt.color);

          // 이벤트 연결
          this.initializeEvent();
        },
      },
      {
        key: "initColorWithoutChangeEvent",
        value: function initColorWithoutChangeEvent(color) {
          this.$store.dispatch("/initColor", color);
        },

        /**
         * public method
         *
         */

        /**
         *
         * show colorpicker with position
         *
         * @param {{left, top, hideDelay, isShortCut}} opt
         * @param {String|Object} color
         * @param {Function} showCallback  it is called when colorpicker is shown
         * @param {Function} hideCallback  it is called once when colorpicker is hidden
         */
      },
      {
        key: "show",
        value: function show(
          opt,
          color,
          showCallback,
          hideCallback,
          lastUpdateCallback
        ) {
          // 매번 이벤트를 지우고 다시 생성할 필요가 없어서 초기화 코드는 지움.
          // this.destroy();
          // this.initializeEvent();
          // define colorpicker callback
          this.colorpickerShowCallback = showCallback;
          this.colorpickerHideCallback = hideCallback;
          this.colorpickerLastUpdateCallback = lastUpdateCallback;
          this.$root.css(this.getInitalizePosition()).show();

          this.isColorPickerShow = true;
          this.isShortCut = opt.isShortCut || false;
          this.outputFormat = opt.outputFormat;

          // define hide delay
          this.hideDelay = +(typeof opt.hideDelay == "undefined"
            ? 2000
            : opt.hideDelay);
          if (this.hideDelay > 0) {
            this.setHideDelay(this.hideDelay);
          }

          this.$root.appendTo(this.$body);
          this.definePosition(opt);
          this.initColorWithoutChangeEvent(color);
        },

        /**
         *
         * initialize color for colorpicker
         *
         * @param {String|Object} newColor
         * @param {String} format  hex, rgb, hsl
         */
      },
      {
        key: "initColor",
        value: function initColor(newColor, format) {
          this.$store.dispatch("/changeColor", newColor, format);
        },

        /**
         * hide colorpicker
         *
         */
      },
      {
        key: "hide",
        value: function hide() {
          if (this.isColorPickerShow) {
            // this.destroy();
            this.$root.hide();
            this.$root.remove(); // not empty
            this.isColorPickerShow = false;

            this.callbackHideColorValue();
          }
        },

        /**
         * set to colors in current sets that you see
         * @param {Array} colors
         */
      },
      {
        key: "setColorsInPalette",
        value: function setColorsInPalette() {
          var colors =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];

          this.$store.dispatch("/setCurrentColorAll", colors);
        },

        /**
         * refresh all color palette
         *
         * @param {*} list
         */
      },
      {
        key: "setUserPalette",
        value: function setUserPalette() {
          var list =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];

          this.$store.dispatch("/setUserPalette", list);
        },

        /**
         * private method
         */
      },
      {
        key: "getOption",
        value: function getOption(key) {
          return this.opt[key];
        },
      },
      {
        key: "setOption",
        value: function setOption(key, value) {
          this.opt[key] = value;
        },
      },
      {
        key: "isType",
        value: function isType(key) {
          return this.getOption("type") == key;
        },
      },
      {
        key: "isPaletteType",
        value: function isPaletteType() {
          return this.isType("palette");
        },
      },
      {
        key: "isSketchType",
        value: function isSketchType() {
          return this.isType("sketch");
        },
      },
      {
        key: "getContainer",
        value: function getContainer() {
          return this.opt.container || document.body;
        },
      },
      {
        key: "getColor",
        value: function getColor(type) {
          return this.$store.dispatch("/toColor", type);
        },
      },
      {
        key: "definePositionForArrow",
        value: function definePositionForArrow(
          opt,
          elementScreenLeft,
          elementScreenTop
        ) {
          // console.log(arguments)
        },
      },
      {
        key: "definePosition",
        value: function definePosition(opt) {
          var width = this.$root.width();
          var height = this.$root.height();

          // set left position for color picker
          var elementScreenLeft = opt.left - this.$body.scrollLeft();
          if (width + elementScreenLeft > window.innerWidth) {
            elementScreenLeft -= width + elementScreenLeft - window.innerWidth;
          }
          if (elementScreenLeft < 0) {
            elementScreenLeft = 0;
          }

          // set top position for color picker
          var elementScreenTop = opt.top - this.$body.scrollTop();
          var elementScreenBottom = opt.bottom - this.$body.scrollTop();
          if (height / 2 + elementScreenBottom > window.innerHeight) {
            elementScreenTop =
              elementScreenTop - height + this.$body.scrollTop();
          } else {
            elementScreenTop = elementScreenBottom + this.$body.scrollTop() + 1;
          }
          if (elementScreenTop < 0) {
            elementScreenTop = 0;
          }

          // set position
          this.$root.css({
            left: elementScreenLeft + "px",
            top: elementScreenTop + "px",
          });

          // this.definePositionForArrow(opt, elementScreenLeft, elementScreenTop);
        },
      },
      {
        key: "getInitalizePosition",
        value: function getInitalizePosition() {
          if (this.opt.position == "inline") {
            return {
              position: "relative",
              left: "auto",
              top: "auto",
              display: "inline-block",
            };
          } else {
            return {
              position: "absolute", // color picker has fixed position
              left: "-10000px",
              top: "-10000px",
            };
          }
        },
      },
      {
        key: "isAbsolute",
        value: function isAbsolute() {
          return this.opt.position !== "inline";
        },

        // Event Bindings
      },
      {
        key: "mouseup.isAbsolute document",
        value: function mouseupIsAbsoluteDocument(e) {
          this.__isMouseDown = false;
          // when color picker clicked in outside
          if (this.checkInHtml(e.target)) ; else if (this.checkColorPickerClass(e.target) == false) {
            this.hide();
          } else {
            if (!this.__isMouseIn) {
              clearTimeout(this.timerCloseColorPicker);
              this.timerCloseColorPicker = setTimeout(
                this.hide.bind(this),
                this.delayTime || this.hideDelay
              );
            }
          }
        },
      },
      {
        key: "keyup.isAbsolute.escape $root",
        value: function keyupIsAbsoluteEscape$root(e) {
          this.hide();
        },
      },
      {
        key: "mouseover.isAbsolute $root",
        value: function mouseoverIsAbsolute$root(e) {
          clearTimeout(this.timerCloseColorPicker);
          // this.__isMouseDown = true;
        },
      },
      {
        key: "mousemove.isAbsolute $root",
        value: function mousemoveIsAbsolute$root(e) {
          clearTimeout(this.timerCloseColorPicker);
        },
      },
      {
        key: "mouseenter.isAbsolute $root",
        value: function mouseenterIsAbsolute$root(e) {
          clearTimeout(this.timerCloseColorPicker);
          this.__isMouseIn = true;
        },
      },
      {
        key: "mouseleave.isAbsolute $root",
        value: function mouseleaveIsAbsolute$root(e) {
          this.__isMouseIn = false;
          if (!this.__isMouseDown) {
            clearTimeout(this.timerCloseColorPicker);
            this.timerCloseColorPicker = setTimeout(
              this.hide.bind(this),
              this.delayTime || this.hideDelay
            );
          }
        },
      },
      {
        key: "mousedown.isAbsolute $root",
        value: function mousedownIsAbsolute$root(e) {
          this.__isMouseDown = true;
        },
      },
      {
        key: "setHideDelay",
        value: function setHideDelay(delayTime) {
          this.delayTime = delayTime || 0;
        },
      },
      {
        key: "runHideDelay",
        value: function runHideDelay() {
          if (this.isColorPickerShow) {
            this.setHideDelay();
            // const hideCallback = this.setHideDelay(delayTime);

            // this.timerCloseColorPicker = setTimeout(hideCallback, delayTime);
          }
        },
      },
      {
        key: "callbackColorValue",
        value: function callbackColorValue(color) {
          color = color || this.getCurrentColor();

          if (typeof this.opt.onChange == "function") {
            this.opt.onChange.call(this, color);
          }

          if (typeof this.colorpickerShowCallback == "function") {
            this.colorpickerShowCallback(color);
          }
        },
      },
      {
        key: "callbackLastUpdateColorValue",
        value: function callbackLastUpdateColorValue(color) {
          color = color || this.getCurrentColor();

          if (typeof this.opt.onLastUpdate == "function") {
            this.opt.onLastUpdate.call(this, color);
          }

          if (typeof this.colorpickerLastUpdateCallback == "function") {
            this.colorpickerLastUpdateCallback(color);
          }
        },
      },
      {
        key: "callbackHideColorValue",
        value: function callbackHideColorValue(color) {
          color = color || this.getCurrentColor();
          if (typeof this.opt.onHide == "function") {
            this.opt.onHide.call(this, color);
          }

          if (typeof this.colorpickerHideCallback == "function") {
            this.colorpickerHideCallback(color);
          }
        },
      },
      {
        key: "getCurrentColor",
        value: function getCurrentColor() {
          return this.$store.dispatch("/toColor", this.outputFormat);
        },
      },
      {
        key: "checkColorPickerClass",
        value: function checkColorPickerClass(el) {
          var hasColorView = new Dom(el).closest("ace-colorview");
          var hasColorPicker = new Dom(el).closest("ace-colorpicker");

          return !!(hasColorPicker || hasColorView);
        },
      },
      {
        key: "checkInHtml",
        value: function checkInHtml(el) {
          var IsInHtml = el.nodeName == "HTML";

          return IsInHtml;
        },
      },
      {
        key: "initializeStoreEvent",
        value: function initializeStoreEvent() {
          get(
            BaseColorPicker.prototype.__proto__ ||
              Object.getPrototypeOf(BaseColorPicker.prototype),
            "initializeStoreEvent",
            this
          ).call(this);

          this.$store.on("changeColor", this.callbackChange);
          this.$store.on("lastUpdateColor", this.callbackLastUpdate);
          this.$store.on("changeFormat", this.callbackChange);
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          get(
            BaseColorPicker.prototype.__proto__ ||
              Object.getPrototypeOf(BaseColorPicker.prototype),
            "destroy",
            this
          ).call(this);

          this.$store.off("changeColor", this.callbackChange);
          this.$store.off("lastUpdateColor", this.callbackLastUpdate);
          this.$store.off("changeFormat", this.callbackChange);

          this.callbackChange = undefined;
          this.callbackLastUpdate = undefined;

          // remove color picker callback
          this.colorpickerShowCallback = undefined;
          this.colorpickerHideCallback = undefined;
        },
      },
    ]);
    return BaseColorPicker;
  })(UIElement);

  var BaseBox = (function (_UIElement) {
    inherits(BaseBox, _UIElement);

    function BaseBox(opt) {
      classCallCheck(this, BaseBox);

      var _this = possibleConstructorReturn(
        this,
        (BaseBox.__proto__ || Object.getPrototypeOf(BaseBox)).call(this, opt)
      );

      _this.source = "base-box";
      return _this;
    }

    createClass(BaseBox, [
      {
        key: "refresh",
        value: function refresh() {},
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {},

        /** push change event  */
      },
      {
        key: "changeColor",
        value: function changeColor(opt) {
          this.$store.dispatch(
            "/changeColor",
            Object.assign(
              {
                source: this.source,
              },
              opt || {}
            )
          );
        },

        // Event Bindings
      },
      {
        key: "mouseup document",
        value: function mouseupDocument(e) {
          this.onDragEnd(e);
        },
      },
      {
        key: "mousemove document",
        value: function mousemoveDocument(e) {
          this.onDragMove(e);
        },
      },
      {
        key: "mousedown $bar",
        value: function mousedown$bar(e) {
          e.preventDefault();
          this.isDown = true;
        },
      },
      {
        key: "mousedown $container",
        value: function mousedown$container(e) {
          this.isDown = true;
          this.onDragStart(e);
        },
      },
      {
        key: "touchend document",
        value: function touchendDocument(e) {
          this.onDragEnd(e);
        },
      },
      {
        key: "touchmove document",
        value: function touchmoveDocument(e) {
          this.onDragMove(e);
        },
      },
      {
        key: "touchstart $bar",
        value: function touchstart$bar(e) {
          e.preventDefault();
          this.isDown = true;
        },
      },
      {
        key: "touchstart $container",
        value: function touchstart$container(e) {
          this.onDragStart(e);
        },
      },
      {
        key: "onDragStart",
        value: function onDragStart(e) {
          this.isDown = true;
          this.refreshColorUI(e);
        },
      },
      {
        key: "onDragMove",
        value: function onDragMove(e) {
          if (this.isDown) {
            this.refreshColorUI(e);
          }
        },

        /* called when mouse is ended move  */
      },
      {
        key: "onDragEnd",
        value: function onDragEnd(e) {
          if (this.isDown) {
            this.$store.emit("lastUpdateColor");
            this.isDown = false;
          }
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (this.source != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return BaseBox;
  })(UIElement);

  var BaseSlider = (function (_BaseBox) {
    inherits(BaseSlider, _BaseBox);

    function BaseSlider(opt) {
      classCallCheck(this, BaseSlider);

      var _this = possibleConstructorReturn(
        this,
        (BaseSlider.__proto__ || Object.getPrototypeOf(BaseSlider)).call(
          this,
          opt
        )
      );

      _this.minValue = 0; // min domain value
      _this.maxValue = 1; // max domain value
      _this.source = "base-slider";
      return _this;
    }

    /* slider container's min and max position */

    createClass(BaseSlider, [
      {
        key: "getMinMaxPosition",
        value: function getMinMaxPosition() {
          var min = this.getMinPosition();
          var width = this.getMaxDist();
          var max = min + width;

          return { min: min, max: max, width: width };
        },

        /** get current position on page  */
      },
      {
        key: "getCurrent",
        value: function getCurrent(value) {
          return min + this.getMaxDist() * value;
        },

        /** get min position on slider container  */
      },
      {
        key: "getMinPosition",
        value: function getMinPosition() {
          return this.refs.$container.offset().left;
        },
      },
      {
        key: "getMaxDist",
        value: function getMaxDist() {
          return this.state.get("$container.width");
        },

        /** get dist for position value */
      },
      {
        key: "getDist",
        value: function getDist(current) {
          var _getMinMaxPosition = this.getMinMaxPosition(),
            min = _getMinMaxPosition.min,
            max = _getMinMaxPosition.max;

          var dist;
          if (current < min) {
            dist = 0;
          } else if (current > max) {
            dist = 100;
          } else {
            dist = ((current - min) / (max - min)) * 100;
          }

          return dist;
        },

        /** get caculated dist for domain value   */
      },
      {
        key: "getCaculatedDist",
        value: function getCaculatedDist(e) {
          var current = e
            ? this.getMousePosition(e)
            : this.getCurrent(this.getDefaultValue() / this.maxValue);
          var dist = this.getDist(current);

          return dist;
        },

        /** get default value used in slider container */
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        },

        /** set mosue position */
      },
      {
        key: "setMousePosition",
        value: function setMousePosition(x) {
          this.refs.$bar.css({ left: x + "px" });
        },

        /** set mouse position in page */
      },
      {
        key: "getMousePosition",
        value: function getMousePosition(e) {
          return Event.pos(e).pageX;
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },

        /** set drag bar position  */
      },
      {
        key: "setColorUI",
        value: function setColorUI(v) {
          v = v || this.getDefaultValue();

          if (v <= this.minValue) {
            this.refs.$bar.addClass("first").removeClass("last");
          } else if (v >= this.maxValue) {
            this.refs.$bar.addClass("last").removeClass("first");
          } else {
            this.refs.$bar.removeClass("last").removeClass("first");
          }

          this.setMousePosition(this.getMaxDist() * ((v || 0) / this.maxValue));
        },
      },
    ]);
    return BaseSlider;
  })(BaseBox);

  var Value = (function (_BaseSlider) {
    inherits(Value, _BaseSlider);

    function Value(opt) {
      classCallCheck(this, Value);

      var _this = possibleConstructorReturn(
        this,
        (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, opt)
      );

      _this.minValue = 0;
      _this.maxValue = 1;
      _this.source = "value-control";
      return _this;
    }

    createClass(Value, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class="value">\n                <div ref="$container" class="value-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        ';
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor() {
          this.refs.$container.css(
            "background-color",
            this.$store.dispatch("/toRGB")
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          get(
            Value.prototype.__proto__ || Object.getPrototypeOf(Value.prototype),
            "refresh",
            this
          ).call(this);
          this.setBackgroundColor();
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.hsv.v;
        },
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {
          var dist = this.getCaculatedDist(e);

          this.setColorUI((dist / 100) * this.maxValue);

          this.changeColor({
            type: "hsv",
            v: (dist / 100) * this.maxValue,
          });
        },
      },
    ]);
    return Value;
  })(BaseSlider);

  var Opacity = (function (_BaseSlider) {
    inherits(Opacity, _BaseSlider);

    function Opacity(opt) {
      classCallCheck(this, Opacity);

      var _this = possibleConstructorReturn(
        this,
        (Opacity.__proto__ || Object.getPrototypeOf(Opacity)).call(this, opt)
      );

      _this.minValue = 0;
      _this.maxValue = 1;
      _this.source = "opacity-control";
      return _this;
    }

    createClass(Opacity, [
      {
        key: "template",
        value: function template() {
          return '\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar"></div>\n            </div>\n        </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          get(
            Opacity.prototype.__proto__ ||
              Object.getPrototypeOf(Opacity.prototype),
            "refresh",
            this
          ).call(this);
          this.setOpacityColorBar();
        },
      },
      {
        key: "setOpacityColorBar",
        value: function setOpacityColorBar() {
          var rgb = Object.assign({}, this.$store.rgb);

          rgb.a = 0;
          var start = Color$1.format(rgb, "rgb");

          rgb.a = 1;
          var end = Color$1.format(rgb, "rgb");

          this.setOpacityColorBarBackground(start, end);
        },
      },
      {
        key: "setOpacityColorBarBackground",
        value: function setOpacityColorBarBackground(start, end) {
          this.refs.$colorbar.css(
            "background",
            "linear-gradient(to right, " + start + ", " + end + ")"
          );
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.alpha;
        },
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {
          var dist = this.getCaculatedDist(e);

          this.setColorUI((dist / 100) * this.maxValue);

          this.changeColor({
            a: (Math.floor(dist) / 100) * this.maxValue,
          });
        },
      },
    ]);
    return Opacity;
  })(BaseSlider);

  var source = "macos-control";

  var ColorControl = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Value: Value, Opacity: Opacity };
        },
      },
      {
        key: "template",
        value: function template() {
          return '\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        ';
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor() {
          this.refs.$controlColor.css(
            "background-color",
            this.$store.dispatch("/toRGB")
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
          this.setBackgroundColor();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Value.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var ColorWheel = (function (_UIElement) {
    inherits(ColorWheel, _UIElement);

    function ColorWheel(opt) {
      classCallCheck(this, ColorWheel);

      var _this = possibleConstructorReturn(
        this,
        (ColorWheel.__proto__ || Object.getPrototypeOf(ColorWheel)).call(
          this,
          opt
        )
      );

      _this.width = 214;
      _this.height = 214;
      _this.thinkness = 0;
      _this.half_thinkness = 0;
      _this.source = "colorwheel";
      return _this;
    }

    createClass(ColorWheel, [
      {
        key: "template",
        value: function template() {
          return '\n        <div class="wheel">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="wheel-canvas" ref="$valuewheel" ></div>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh(isEvent) {
          this.setColorUI(isEvent);
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI(isEvent) {
          this.renderCanvas();
          this.renderValue();
          this.setHueColor(null, isEvent);
        },
      },
      {
        key: "renderValue",
        value: function renderValue() {
          var value = 1 - this.$store.hsv.v;
          this.refs.$valuewheel.css({
            "background-color": "rgba(0, 0, 0, " + value + ")",
          });
        },
      },
      {
        key: "renderWheel",
        value: function renderWheel(width, height) {
          if (this.width && !width) width = this.width;
          if (this.height && !height) height = this.height;

          var $canvas = new Dom("canvas");
          var context = $canvas.el.getContext("2d");
          $canvas.el.width = width;
          $canvas.el.height = height;
          $canvas.css({ width: width + "px", height: height + "px" });

          var img = context.getImageData(0, 0, width, height);
          var pixels = img.data;
          var half_width = Math.floor(width / 2);
          var half_height = Math.floor(height / 2);

          var radius = width > height ? half_height : half_width;
          var cx = half_width;
          var cy = half_height;

          for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              var rx = x - cx + 1,
                ry = y - cy + 1,
                d = rx * rx + ry * ry,
                hue = caculateAngle(rx, ry);

              var rgb = Color$1.HSVtoRGB(
                hue, // 0~360 hue
                Math.min(Math.sqrt(d) / radius, 1), // 0..1 Saturation
                1 //  0..1 Value
              );

              var index = (y * width + x) * 4;
              pixels[index] = rgb.r;
              pixels[index + 1] = rgb.g;
              pixels[index + 2] = rgb.b;
              pixels[index + 3] = 255;
            }
          }

          context.putImageData(img, 0, 0);

          if (this.thinkness > 0) {
            context.globalCompositeOperation = "destination-out"; // destination-out 은 그리는 영역이 지워진다.
            context.fillStyle = "black";
            context.beginPath();
            context.arc(cx, cy, radius - this.thinkness, 0, Math.PI * 2);
            context.closePath();
            context.fill();
          }

          return $canvas;
        },
      },
      {
        key: "renderCanvas",
        value: function renderCanvas() {
          // only once rendering
          if (this.$store.createdWheelCanvas) return;

          var $canvas = this.refs.$colorwheel;
          // console.log($canvas);
          var context = $canvas.el.getContext("2d");

          var _$canvas$size = $canvas.size(),
            _$canvas$size2 = slicedToArray(_$canvas$size, 2),
            width = _$canvas$size2[0],
            height = _$canvas$size2[1];

          if (this.width && !width) width = this.width;
          if (this.height && !height) height = this.height;

          $canvas.el.width = width;
          $canvas.el.height = height;
          $canvas.css({ width: width + "px", height: height + "px" });

          var $wheelCanvas = this.renderWheel(width, height);

          context.drawImage($wheelCanvas.el, 0, 0);

          this.$store.createdWheelCanvas = true;
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.hsv.h;
        },
      },
      {
        key: "getDefaultSaturation",
        value: function getDefaultSaturation() {
          return this.$store.hsv.s;
        },
      },
      {
        key: "getCurrentXY",
        value: function getCurrentXY(e, angle, radius, centerX, centerY) {
          return e
            ? Event.posXY(e)
            : getXYInCircle(angle, radius, centerX, centerY);
        },
      },
      {
        key: "getRectangle",
        value: function getRectangle() {
          var width = this.state.get("$el.width");
          var height = this.state.get("$el.height");
          var radius = this.state.get("$colorwheel.width") / 2;

          var minX = this.refs.$el.offset().left;
          var centerX = minX + width / 2;

          var minY = this.refs.$el.offset().top;
          var centerY = minY + height / 2;

          return {
            minX: minX,
            minY: minY,
            width: width,
            height: height,
            radius: radius,
            centerX: centerX,
            centerY: centerY,
          };
        },
      },
      {
        key: "setHueColor",
        value: function setHueColor(e, isEvent) {
          if (!this.state.get("$el.width")) return;

          var _getRectangle = this.getRectangle(),
            minX = _getRectangle.minX,
            minY = _getRectangle.minY,
            radius = _getRectangle.radius,
            centerX = _getRectangle.centerX,
            centerY = _getRectangle.centerY;

          var _getCurrentXY = this.getCurrentXY(
              e,
              this.getDefaultValue(),
              this.getDefaultSaturation() * radius,
              centerX,
              centerY
            ),
            x = _getCurrentXY.x,
            y = _getCurrentXY.y;

          var rx = x - centerX,
            ry = y - centerY,
            d = rx * rx + ry * ry,
            hue = caculateAngle(rx, ry);

          if (d > radius * radius) {
            var _getCurrentXY2 = this.getCurrentXY(
                null,
                hue,
                radius,
                centerX,
                centerY
              ),
              x = _getCurrentXY2.x,
              y = _getCurrentXY2.y;
          }

          // saturation 을
          var saturation = Math.min(Math.sqrt(d) / radius, 1);

          // set drag pointer position
          this.refs.$drag_pointer.css({
            left: x - minX + "px",
            top: y - minY + "px",
          });

          if (!isEvent) {
            this.changeColor({
              type: "hsv",
              h: hue,
              s: saturation,
            });
          }
        },
      },
      {
        key: "changeColor",
        value: function changeColor(opt) {
          this.$store.dispatch(
            "/changeColor",
            Object.assign(
              {
                source: this.source,
              },
              opt || {}
            )
          );
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (this.source != sourceType) {
            this.refresh(true);
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh(true);
        },

        // Event Bindings
      },
      {
        key: "mouseup document",
        value: function mouseupDocument(e) {
          if (this.isDown) {
            this.isDown = false;
            this.$store.emit("lastUpdateColor");
          }
        },
      },
      {
        key: "mousemove document",
        value: function mousemoveDocument(e) {
          if (this.isDown) {
            this.setHueColor(e);
          }
        },
      },
      {
        key: "mousedown $drag_pointer",
        value: function mousedown$drag_pointer(e) {
          e.preventDefault();
          this.isDown = true;
        },
      },
      {
        key: "mousedown $el",
        value: function mousedown$el(e) {
          this.isDown = true;
          this.setHueColor(e);
        },
      },
      {
        key: "touchend document",
        value: function touchendDocument(e) {
          if (this.isDown) {
            this.isDown = false;
            this.$store.emit("lastUpdateColor");
          }
        },
      },
      {
        key: "touchmove document",
        value: function touchmoveDocument(e) {
          if (this.isDown) {
            this.setHueColor(e);
          }
        },
      },
      {
        key: "touchstart $drag_pointer",
        value: function touchstart$drag_pointer(e) {
          e.preventDefault();
          this.isDown = true;
        },
      },
      {
        key: "touchstart $el",
        value: function touchstart$el(e) {
          e.preventDefault();
          this.isDown = true;
          this.setHueColor(e);
        },
      },
    ]);
    return ColorWheel;
  })(UIElement);

  var source$2 = "chromedevtool-information";

  var ColorInformation = (function (_UIElement) {
    inherits(ColorInformation, _UIElement);

    function ColorInformation() {
      classCallCheck(this, ColorInformation);
      return possibleConstructorReturn(
        this,
        (
          ColorInformation.__proto__ || Object.getPrototypeOf(ColorInformation)
        ).apply(this, arguments)
      );
    }

    createClass(ColorInformation, [
      {
        key: "template",
        value: function template() {
          return /*html*/ '\n        <div class="information hex">\n            <div ref="$informationChange" class="information-change">\n                <button ref="$formatChangeButton" type="button" class="format-change-button arrow-button"></button>\n            </div>\n            <div class="information-item hex">\n                <div class="input-field hex">\n                    <input ref="$hexCode" class="input" type="text" />\n                    <div class="title">HEX</div>\n                </div>\n            </div>\n            <div class="information-item rgb">\n                <div class="input-field rgb-r">\n                    <input ref="$rgb_r" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">R</div>\n                </div>\n                <div class="input-field rgb-g">\n                    <input ref="$rgb_g" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">G</div>\n                </div>\n                <div class="input-field rgb-b">\n                    <input ref="$rgb_b" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">B</div>\n                </div>          \n                <div class="input-field rgb-a">\n                    <input ref="$rgb_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>                                                            \n            </div>\n            <div class="information-item hsl">\n                <div class="input-field hsl-h">\n                    <input ref="$hsl_h" class="input" type="number" step="1" min="0" max="360" />\n                    <div class="title">H</div>\n                </div>\n                <div class="input-field hsl-s">\n                    <input ref="$hsl_s" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>\n                    <div class="title">S</div>\n                </div>\n                <div class="input-field hsl-l">\n                    <input ref="$hsl_l" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>                        \n                    <div class="title">L</div>\n                </div>\n                <div class="input-field hsl-a">\n                    <input ref="$hsl_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>\n            </div>\n        </div>\n        ';
        },
      },
      {
        key: "setCurrentFormat",
        value: function setCurrentFormat(format) {
          this.format = format;

          this.initFormat();
        },
      },
      {
        key: "initFormat",
        value: function initFormat() {
          var _this2 = this;

          var current_format = this.format || "hex";

          ["hex", "rgb", "hsl"]
            .filter(function (it) {
              return it !== current_format;
            })
            .forEach(function (formatString) {
              _this2.$el.removeClass(formatString);
            });

          this.$el.addClass(current_format);
        },
      },
      {
        key: "nextFormat",
        value: function nextFormat() {
          var current_format = this.$store.format || "hex";

          var next_format = "hex";
          if (current_format == "hex") {
            next_format = "rgb";
          } else if (current_format == "rgb") {
            next_format = "hsl";
          } else if (current_format == "hsl") {
            next_format = "hex";
          }

          this.format = next_format;
          this.$store.dispatch("/changeFormat", next_format);
          this.$store.emit("lastUpdateColor");
          this.initFormat();
        },
      },
      {
        key: "goToFormat",
        value: function goToFormat(to_format) {
          this.format = to_format;
          this.$store.dispatch("/changeFormat", this.format);
          this.$store.emit("lastUpdateColor");
          this.initFormat();
        },
      },
      {
        key: "getFormat",
        value: function getFormat() {
          return this.format || "hex";
        },
      },
      {
        key: "checkNumberKey",
        value: function checkNumberKey(e) {
          var code = e.which,
            isExcept = false;

          if (code == 37 || code == 39 || code == 8 || code == 46 || code == 9)
            isExcept = true;

          if (!isExcept && (code < 48 || code > 57)) return false;

          return true;
        },
      },
      {
        key: "checkNotNumberKey",
        value: function checkNotNumberKey(e) {
          return !this.checkNumberKey(e);
        },
      },
      {
        key: "changeRgbColor",
        value: function changeRgbColor() {
          this.$store.dispatch("/changeColor", {
            type: "rgb",
            r: this.refs.$rgb_r.int(),
            g: this.refs.$rgb_g.int(),
            b: this.refs.$rgb_b.int(),
            a: this.refs.$rgb_a.float(),
            source: source$2,
          });
          this.$store.emit("lastUpdateColor");
        },
      },
      {
        key: "changeHslColor",
        value: function changeHslColor() {
          this.$store.dispatch("/changeColor", {
            type: "hsl",
            h: this.refs.$hsl_h.int(),
            s: this.refs.$hsl_s.int(),
            l: this.refs.$hsl_l.int(),
            a: this.refs.$hsl_a.float(),
            source: source$2,
          });
          this.$store.emit("lastUpdateColor");
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$2 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
      {
        key: "input $rgb_r",
        value: function input$rgb_r(e) {
          this.changeRgbColor();
        },
      },
      {
        key: "input $rgb_g",
        value: function input$rgb_g(e) {
          this.changeRgbColor();
        },
      },
      {
        key: "input $rgb_b",
        value: function input$rgb_b(e) {
          this.changeRgbColor();
        },
      },
      {
        key: "input $rgb_a",
        value: function input$rgb_a(e) {
          this.changeRgbColor();
        },
      },
      {
        key: "input $hsl_h",
        value: function input$hsl_h(e) {
          this.changeHslColor();
        },
      },
      {
        key: "input $hsl_s",
        value: function input$hsl_s(e) {
          this.changeHslColor();
        },
      },
      {
        key: "input $hsl_l",
        value: function input$hsl_l(e) {
          this.changeHslColor();
        },
      },
      {
        key: "input $hsl_a",
        value: function input$hsl_a(e) {
          this.changeHslColor();
        },
      },
      {
        key: "keyup $hexCode",
        value: function keyup$hexCode(e) {
          var code = this.refs.$hexCode.val();

          if (
            code.charAt(0) == "#" &&
            (code.length == 7 || code.length === 9)
          ) {
            this.$store.dispatch("/changeColor", code, source$2);
            this.$store.emit("lastUpdateColor");
          }
        },
      },
      {
        key: "click $formatChangeButton",
        value: function click$formatChangeButton(e) {
          this.nextFormat();
        },
      },
      {
        key: "click $el .information-item.hex .input-field .title",
        value: function click$elInformationItemHexInputFieldTitle(e) {
          this.goToFormat("rgb");
        },
      },
      {
        key: "click $el .information-item.rgb .input-field .title",
        value: function click$elInformationItemRgbInputFieldTitle(e) {
          this.goToFormat("hsl");
        },
      },
      {
        key: "click $el .information-item.hsl .input-field .title",
        value: function click$elInformationItemHslInputFieldTitle(e) {
          this.goToFormat("hex");
        },
      },
      {
        key: "setRGBInput",
        value: function setRGBInput() {
          this.refs.$rgb_r.val(this.$store.rgb.r);
          this.refs.$rgb_g.val(this.$store.rgb.g);
          this.refs.$rgb_b.val(this.$store.rgb.b);
          this.refs.$rgb_a.val(this.$store.alpha);
        },
      },
      {
        key: "setHSLInput",
        value: function setHSLInput() {
          this.refs.$hsl_h.val(this.$store.hsl.h);
          this.refs.$hsl_s.val(this.$store.hsl.s);
          this.refs.$hsl_l.val(this.$store.hsl.l);
          this.refs.$hsl_a.val(this.$store.alpha);
        },
      },
      {
        key: "setHexInput",
        value: function setHexInput() {
          this.refs.$hexCode.val(this.$store.dispatch("/toHEX"));
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setCurrentFormat(this.$store.format);
          this.setRGBInput();
          this.setHSLInput();
          this.setHexInput();
        },
      },
    ]);
    return ColorInformation;
  })(UIElement);

  var DATA_COLORSETS_INDEX = "data-colorsets-index";

  var ColorSetsChooser = (function (_UIElement) {
    inherits(ColorSetsChooser, _UIElement);

    function ColorSetsChooser() {
      classCallCheck(this, ColorSetsChooser);
      return possibleConstructorReturn(
        this,
        (
          ColorSetsChooser.__proto__ || Object.getPrototypeOf(ColorSetsChooser)
        ).apply(this, arguments)
      );
    }

    createClass(ColorSetsChooser, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class="color-chooser">\n                <div class="color-chooser-container">\n                    <div class="colorsets-item colorsets-item-header">\n                        <h1 class="title">Color Palettes</h1>\n                        <span ref="$toggleButton" class="items">&times;</span>\n                    </div>\n                    <div ref="$colorsetsList" class="colorsets-list"></div>\n                </div>\n            </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.load();
        },
      },
      {
        key: "@changeCurrentColorSets",
        value: function changeCurrentColorSets() {
          this.refresh();
        },
      },
      {
        key: "@toggleColorChooser",
        value: function toggleColorChooser() {
          this.toggle();
        },

        // loadable
      },
      {
        key: "load $colorsetsList",
        value: function load$colorsetsList() {
          // colorsets
          var colorSets = this.$store.dispatch("/getColorSetsList");

          return (
            "\n            <div>\n                " +
            colorSets
              .map(function (element, index) {
                return (
                  '\n                        <div class="colorsets-item" data-colorsets-index="' +
                  index +
                  '" >\n                            <h1 class="title">' +
                  element.name +
                  '</h1>\n                            <div class="items">\n                                <div>\n                                    ' +
                  element.colors
                    .filter(function (color, i) {
                      return i < 5;
                    })
                    .map(function (color) {
                      color = color || "rgba(255, 255, 255, 1)";
                      return (
                        '<div class="color-item" title="' +
                        color +
                        '">\n                                                <div class="color-view" style="background-color: ' +
                        color +
                        '"></div>\n                                            </div>'
                      );
                    })
                    .join("") +
                  "\n                                </div>\n                            </div>\n                        </div>"
                );
              })
              .join("") +
            "\n            </div>\n        "
          );
        },
      },
      {
        key: "show",
        value: function show() {
          this.$el.addClass("open");
        },
      },
      {
        key: "hide",
        value: function hide() {
          this.$el.removeClass("open");
        },
      },
      {
        key: "toggle",
        value: function toggle() {
          this.$el.toggleClass("open");
        },
      },
      {
        key: "click $toggleButton",
        value: function click$toggleButton(e) {
          this.toggle();
        },
      },
      {
        key: "click $colorsetsList .colorsets-item",
        value: function click$colorsetsListColorsetsItem(e) {
          var $item = e.$delegateTarget;

          if ($item) {
            var index = parseInt($item.attr(DATA_COLORSETS_INDEX));

            this.$store.dispatch("/setCurrentColorSets", index);

            this.hide();
          }
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          get(
            ColorSetsChooser.prototype.__proto__ ||
              Object.getPrototypeOf(ColorSetsChooser.prototype),
            "destroy",
            this
          ).call(this);

          this.hide();
        },
      },
    ]);
    return ColorSetsChooser;
  })(UIElement);

  var CurrentColorSets = (function (_UIElement) {
    inherits(CurrentColorSets, _UIElement);

    function CurrentColorSets() {
      classCallCheck(this, CurrentColorSets);
      return possibleConstructorReturn(
        this,
        (
          CurrentColorSets.__proto__ || Object.getPrototypeOf(CurrentColorSets)
        ).apply(this, arguments)
      );
    }

    createClass(CurrentColorSets, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class="colorsets">\n                <div class="menu" title="Open Color Palettes">\n                    <button ref="$colorSetsChooseButton" type="button" class="color-sets-choose-btn arrow-button"></button>\n                </div>\n                <div ref="$colorSetsColorList" class="color-list"></div>\n            </div>\n        ';
        },
      },
      {
        key: "load $colorSetsColorList",
        value: function load$colorSetsColorList() {
          var currentColorSets = this.$store.dispatch("/getCurrentColorSets");
          var colors = this.$store.dispatch("/getCurrentColors");

          return (
            '\n            <div class="current-color-sets">\n            ' +
            colors
              .map(function (color, i) {
                return (
                  '<div class="color-item" title="' +
                  color +
                  '" data-index="' +
                  i +
                  '" data-color="' +
                  color +
                  '">\n                    <div class="empty"></div>\n                    <div class="color-view" style="background-color: ' +
                  color +
                  '"></div>\n                </div>'
                );
              })
              .join("") +
            "   \n            " +
            (currentColorSets.edit
              ? '<div class="add-color-item">+</div>'
              : "") +
            "         \n            </div>\n        "
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.load();
        },
      },
      {
        key: "addColor",
        value: function addColor(color) {
          this.$store.dispatch("/addCurrentColor", color);
        },
      },
      {
        key: "@changeCurrentColorSets",
        value: function changeCurrentColorSets() {
          this.refresh();
        },
      },
      {
        key: "click $colorSetsChooseButton",
        value: function click$colorSetsChooseButton(e) {
          this.$store.emit("toggleColorChooser");
        },
      },
      {
        key: "contextmenu $colorSetsColorList",
        value: function contextmenu$colorSetsColorList(e) {
          e.preventDefault();
          var currentColorSets = this.$store.dispatch("/getCurrentColorSets");

          if (!currentColorSets.edit) {
            return;
          }

          var $target = new Dom(e.target);

          var $item = $target.closest("color-item");

          if ($item) {
            var index = parseInt($item.attr("data-index"));

            this.$store.emit("showContextMenu", e, index);
          } else {
            this.$store.emit("showContextMenu", e);
          }
        },
      },
      {
        key: "click $colorSetsColorList .add-color-item",
        value: function click$colorSetsColorListAddColorItem(e) {
          this.addColor(this.$store.dispatch("/toColor"));
        },
      },
      {
        key: "click $colorSetsColorList .color-item",
        value: function click$colorSetsColorListColorItem(e) {
          this.$store.dispatch(
            "/changeColor",
            e.$delegateTarget.attr("data-color")
          );
          this.$store.emit("lastUpdateColor");
        },
      },
    ]);
    return CurrentColorSets;
  })(UIElement);

  var CurrentColorSetsContextMenu = (function (_UIElement) {
    inherits(CurrentColorSetsContextMenu, _UIElement);

    function CurrentColorSetsContextMenu() {
      classCallCheck(this, CurrentColorSetsContextMenu);
      return possibleConstructorReturn(
        this,
        (
          CurrentColorSetsContextMenu.__proto__ ||
          Object.getPrototypeOf(CurrentColorSetsContextMenu)
        ).apply(this, arguments)
      );
    }

    createClass(CurrentColorSetsContextMenu, [
      {
        key: "template",
        value: function template() {
          return '\n            <ul class="colorsets-contextmenu">\n                <li class="menu-item small-hide" data-type="remove-color">Remove color</li>\n                <li class="menu-item small-hide" data-type="remove-all-to-the-right">Remove all to the right</li>\n                <li class="menu-item" data-type="clear-palette">Clear palette</li>\n            </ul>\n        ';
        },
      },
      {
        key: "show",
        value: function show(e, index) {
          var $event = Event.pos(e);

          this.$el.css({
            top: $event.clientY - 10 + "px",
            left: $event.clientX + "px",
          });
          this.$el.addClass("show");
          this.selectedColorIndex = index;

          if (typeof this.selectedColorIndex == "undefined") {
            this.$el.addClass("small");
          } else {
            this.$el.removeClass("small");
          }
        },
      },
      {
        key: "hide",
        value: function hide() {
          this.$el.removeClass("show");
        },
      },
      {
        key: "runCommand",
        value: function runCommand(command) {
          switch (command) {
            case "remove-color":
              this.$store.dispatch(
                "/removeCurrentColor",
                this.selectedColorIndex
              );
              break;
            case "remove-all-to-the-right":
              this.$store.dispatch(
                "/removeCurrentColorToTheRight",
                this.selectedColorIndex
              );
              break;
            case "clear-palette":
              this.$store.dispatch("/clearPalette");
              break;
          }
        },
      },
      {
        key: "@showContextMenu",
        value: function showContextMenu(e, index) {
          this.show(e, index);
        },
      },
      {
        key: "click $el .menu-item",
        value: function click$elMenuItem(e) {
          e.preventDefault();

          this.runCommand(e.$delegateTarget.attr("data-type"));
          this.hide();
        },
      },
    ]);
    return CurrentColorSetsContextMenu;
  })(UIElement);

  var MacOSColorPicker = (function (_BaseColorPicker) {
    inherits(MacOSColorPicker, _BaseColorPicker);

    function MacOSColorPicker() {
      classCallCheck(this, MacOSColorPicker);
      return possibleConstructorReturn(
        this,
        (
          MacOSColorPicker.__proto__ || Object.getPrototypeOf(MacOSColorPicker)
        ).apply(this, arguments)
      );
    }

    createClass(MacOSColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="colorwheel"></div>\n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>                \n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            colorwheel: ColorWheel,
            control: ColorControl,
            information: ColorInformation,
            currentColorSets: CurrentColorSets,
            colorSetsChooser: ColorSetsChooser,
            contextMenu: CurrentColorSetsContextMenu,
          };
        },
      },
    ]);
    return MacOSColorPicker;
  })(BaseColorPicker);

  var Hue = (function (_BaseSlider) {
    inherits(Hue, _BaseSlider);

    function Hue(opt) {
      classCallCheck(this, Hue);

      var _this = possibleConstructorReturn(
        this,
        (Hue.__proto__ || Object.getPrototypeOf(Hue)).call(this, opt)
      );

      _this.minValue = 0;
      _this.maxValue = 360;
      _this.source = "hue-control";
      return _this;
    }

    createClass(Hue, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        ';
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.hsv.h;
        },
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {
          var dist = this.getCaculatedDist(e);

          this.setColorUI((dist / 100) * this.maxValue);

          this.changeColor({
            h: (dist / 100) * this.maxValue,
            type: "hsv",
          });
        },
      },
    ]);
    return Hue;
  })(BaseSlider);

  var source$3 = "chromedevtool-control";

  var ColorControl$2 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Hue: Hue, Opacity: Opacity };
        },
      },
      {
        key: "template",
        value: function template() {
          return '\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        ';
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor() {
          this.refs.$controlColor.css(
            "background-color",
            this.$store.dispatch("/toRGB")
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
          this.setBackgroundColor();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Hue.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$3 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var source$4 = "chromedevtool-palette";

  var ColorPalette = (function (_UIElement) {
    inherits(ColorPalette, _UIElement);

    function ColorPalette() {
      classCallCheck(this, ColorPalette);
      return possibleConstructorReturn(
        this,
        (ColorPalette.__proto__ || Object.getPrototypeOf(ColorPalette)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorPalette, [
      {
        key: "template",
        value: function template() {
          return '\n        <div class="color">\n            <div ref="$saturation" class="saturation">\n                <div ref="$value" class="value">\n                    <div ref="$drag_pointer" class="drag-pointer"></div>\n                </div>\n            </div>        \n        </div>        \n        ';
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor(color) {
          this.$el.css("background-color", color);
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },
      },
      {
        key: "caculateSV",
        value: function caculateSV() {
          var pos = this.drag_pointer_pos || { x: 0, y: 0 };

          var width = this.state.get("$el.width");
          var height = this.state.get("$el.height");

          var s = pos.x / width;
          var v = (height - pos.y) / height;

          this.$store.dispatch("/changeColor", {
            type: "hsv",
            s: s,
            v: v,
            source: source$4,
          });
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          var x = this.state.get("$el.width") * this.$store.hsv.s,
            y = this.state.get("$el.height") * (1 - this.$store.hsv.v);

          this.refs.$drag_pointer.css({
            left: x + "px",
            top: y + "px",
          });

          this.drag_pointer_pos = { x: x, y: y };

          this.setBackgroundColor(this.$store.dispatch("/getHueColor"));
        },
      },
      {
        key: "setMainColor",
        value: function setMainColor(e) {
          // e.preventDefault();
          var pos = this.$el.offset(); // position for screen
          var w = this.state.get("$el.contentWidth");
          var h = this.state.get("$el.contentHeight");

          var x = Event.pos(e).pageX - pos.left;
          var y = Event.pos(e).pageY - pos.top;

          if (x < 0) x = 0;
          else if (x > w) x = w;

          if (y < 0) y = 0;
          else if (y > h) y = h;

          this.refs.$drag_pointer.css({
            left: x + "px",
            top: y + "px",
          });

          this.drag_pointer_pos = { x: x, y: y };

          this.caculateSV();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$4 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
      {
        key: "mouseup document",
        value: function mouseupDocument(e) {
          if (this.isDown) {
            this.isDown = false;
            this.$store.emit("lastUpdateColor");
          }
        },
      },
      {
        key: "mousemove document",
        value: function mousemoveDocument(e) {
          if (this.isDown) {
            this.setMainColor(e);
          }
        },
      },
      {
        key: "mousedown",
        value: function mousedown(e) {
          this.isDown = true;
          this.setMainColor(e);
        },
      },
      {
        key: "touchend document",
        value: function touchendDocument(e) {
          if (this.isDown) {
            this.isDown = false;
            this.$store.emit("lastUpdateColor");
          }
        },
      },
      {
        key: "touchmove document",
        value: function touchmoveDocument(e) {
          if (this.isDown) {
            this.setMainColor(e);
          }
        },
      },
      {
        key: "touchstart",
        value: function touchstart(e) {
          e.preventDefault();
          this.isDown = true;
          this.setMainColor(e);
        },
      },
    ]);
    return ColorPalette;
  })(UIElement);

  var ChromeDevToolColorPicker = (function (_BaseColorPicker) {
    inherits(ChromeDevToolColorPicker, _BaseColorPicker);

    function ChromeDevToolColorPicker() {
      classCallCheck(this, ChromeDevToolColorPicker);
      return possibleConstructorReturn(
        this,
        (
          ChromeDevToolColorPicker.__proto__ ||
          Object.getPrototypeOf(ChromeDevToolColorPicker)
        ).apply(this, arguments)
      );
    }

    createClass(ChromeDevToolColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            palette: ColorPalette,
            control: ColorControl$2,
            information: ColorInformation,
            currentColorSets: CurrentColorSets,
            colorSetsChooser: ColorSetsChooser,
            contextMenu: CurrentColorSetsContextMenu,
          };
        },
      },
    ]);
    return ChromeDevToolColorPicker;
  })(BaseColorPicker);

  var source$5 = "mini-control";

  var ColorControl$4 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Hue: Hue, Opacity: Opacity };
        },
      },
      {
        key: "template",
        value: function template() {
          return '\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Hue.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$5 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var MiniColorPicker = (function (_BaseColorPicker) {
    inherits(MiniColorPicker, _BaseColorPicker);

    function MiniColorPicker() {
      classCallCheck(this, MiniColorPicker);
      return possibleConstructorReturn(
        this,
        (
          MiniColorPicker.__proto__ || Object.getPrototypeOf(MiniColorPicker)
        ).apply(this, arguments)
      );
    }

    createClass(MiniColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div>\n                <div target="control"></div>\n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            palette: ColorPalette,
            control: ColorControl$4,
          };
        },
      },
    ]);
    return MiniColorPicker;
  })(BaseColorPicker);

  var VerticalSlider = (function (_BaseSlider) {
    inherits(VerticalSlider, _BaseSlider);

    function VerticalSlider(opt) {
      classCallCheck(this, VerticalSlider);

      var _this = possibleConstructorReturn(
        this,
        (
          VerticalSlider.__proto__ || Object.getPrototypeOf(VerticalSlider)
        ).call(this, opt)
      );

      _this.source = "vertical-slider";
      return _this;
    }

    /** get max height for vertical slider */

    createClass(VerticalSlider, [
      {
        key: "getMaxDist",
        value: function getMaxDist() {
          return this.state.get("$container.height");
        },

        /** set mouse pointer for vertical slider */
      },
      {
        key: "setMousePosition",
        value: function setMousePosition(y) {
          this.refs.$bar.css({ top: y + "px" });
        },

        /** get mouse position by pageY for vertical slider */
      },
      {
        key: "getMousePosition",
        value: function getMousePosition(e) {
          return Event.pos(e).pageY;
        },

        /** get min position for vertial slider */
      },
      {
        key: "getMinPosition",
        value: function getMinPosition() {
          return this.refs.$container.offset().top;
        },

        /** get caculated dist for domain value   */
      },
      {
        key: "getCaculatedDist",
        value: function getCaculatedDist(e) {
          var current = e
            ? this.getMousePosition(e)
            : this.getCurrent(this.getDefaultValue() / this.maxValue);
          var dist = 100 - this.getDist(current);

          return dist;
        },

        /** set drag bar position  */
      },
      {
        key: "setColorUI",
        value: function setColorUI(v) {
          v = v || this.getDefaultValue();

          if (v <= this.minValue) {
            this.refs.$bar.addClass("first").removeClass("last");
          } else if (v >= this.maxValue) {
            this.refs.$bar.addClass("last").removeClass("first");
          } else {
            this.refs.$bar.removeClass("last").removeClass("first");
          }

          var per = 1 - (v || 0) / this.maxValue;

          this.setMousePosition(this.getMaxDist() * per);
        },
      },
    ]);
    return VerticalSlider;
  })(BaseSlider);

  var VerticalHue = (function (_VerticalSlider) {
    inherits(VerticalHue, _VerticalSlider);

    function VerticalHue(opt) {
      classCallCheck(this, VerticalHue);

      var _this = possibleConstructorReturn(
        this,
        (VerticalHue.__proto__ || Object.getPrototypeOf(VerticalHue)).call(
          this,
          opt
        )
      );

      _this.minValue = 0;
      _this.maxValue = 360;
      _this.source = "vertical-hue-control";
      return _this;
    }

    createClass(VerticalHue, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        ';
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.hsv.h;
        },
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {
          var dist = this.getCaculatedDist(e);

          this.setColorUI((dist / 100) * this.maxValue);

          this.changeColor({
            h: (dist / 100) * this.maxValue,
            type: "hsv",
          });
        },
      },
    ]);
    return VerticalHue;
  })(VerticalSlider);

  var Opacity$2 = (function (_VerticalSlider) {
    inherits(Opacity, _VerticalSlider);

    function Opacity(opt) {
      classCallCheck(this, Opacity);

      var _this = possibleConstructorReturn(
        this,
        (Opacity.__proto__ || Object.getPrototypeOf(Opacity)).call(this, opt)
      );

      _this.source = "vertical-opacity-control";
      return _this;
    }

    createClass(Opacity, [
      {
        key: "template",
        value: function template() {
          return '\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar2"></div>\n            </div>\n        </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          get(
            Opacity.prototype.__proto__ ||
              Object.getPrototypeOf(Opacity.prototype),
            "refresh",
            this
          ).call(this);
          this.setOpacityColorBar();
        },
      },
      {
        key: "setOpacityColorBar",
        value: function setOpacityColorBar() {
          var rgb = Object.assign({}, this.$store.rgb);

          rgb.a = 0;
          var start = Color$1.format(rgb, "rgb");

          rgb.a = 1;
          var end = Color$1.format(rgb, "rgb");

          this.refs.$colorbar.css(
            "background",
            "linear-gradient(to top, " + start + ", " + end + ")"
          );
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.alpha;
        },
      },
      {
        key: "refreshColorUI",
        value: function refreshColorUI(e) {
          var dist = this.getCaculatedDist(e);

          this.setColorUI((dist / 100) * this.maxValue);

          this.changeColor({
            a: (Math.floor(dist) / 100) * this.maxValue,
          });
        },
      },
    ]);
    return Opacity;
  })(VerticalSlider);

  var source$6 = "mini-control";

  var ColorControl$6 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Hue: VerticalHue, Opacity: Opacity$2 };
        },
      },
      {
        key: "template",
        value: function template() {
          return '<div class="control"><div target="Hue" ></div><div target="Opacity" ></div></div>';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Hue.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$6 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var MiniColorPicker$2 = (function (_BaseColorPicker) {
    inherits(MiniColorPicker, _BaseColorPicker);

    function MiniColorPicker() {
      classCallCheck(this, MiniColorPicker);
      return possibleConstructorReturn(
        this,
        (
          MiniColorPicker.__proto__ || Object.getPrototypeOf(MiniColorPicker)
        ).apply(this, arguments)
      );
    }

    createClass(MiniColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div><div target="control"></div>\n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            palette: ColorPalette,
            control: ColorControl$6,
          };
        },
      },
    ]);
    return MiniColorPicker;
  })(BaseColorPicker);

  var source$7 = "macos-control";

  var ColorControl$8 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Value: Value, Opacity: Opacity };
        },
      },
      {
        key: "template",
        value: function template() {
          return '\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        ';
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor() {
          this.refs.$controlColor.css(
            "background-color",
            this.$store.dispatch("/toRGB")
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
          this.setBackgroundColor();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Value.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$7 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var ColorRing = (function (_ColorWheel) {
    inherits(ColorRing, _ColorWheel);

    function ColorRing(opt) {
      classCallCheck(this, ColorRing);

      var _this = possibleConstructorReturn(
        this,
        (ColorRing.__proto__ || Object.getPrototypeOf(ColorRing)).call(
          this,
          opt
        )
      );

      _this.width = 214;
      _this.height = 214;
      _this.thinkness = 16;
      _this.half_thinkness = _this.thinkness / 2;
      _this.source = "colorring";
      return _this;
    }

    createClass(ColorRing, [
      {
        key: "template",
        value: function template() {
          return '\n        <div class="wheel" data-type="ring">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        ';
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI(isEvent) {
          this.renderCanvas();
          this.setHueColor(null, isEvent);
        },
      },
      {
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return this.$store.hsv.h;
        },
      },
      {
        key: "setHueColor",
        value: function setHueColor(e, isEvent) {
          if (!this.state.get("$el.width")) return;

          var _getRectangle = this.getRectangle(),
            minX = _getRectangle.minX,
            minY = _getRectangle.minY,
            radius = _getRectangle.radius,
            centerX = _getRectangle.centerX,
            centerY = _getRectangle.centerY;

          var _getCurrentXY = this.getCurrentXY(
              e,
              this.getDefaultValue(),
              radius,
              centerX,
              centerY
            ),
            x = _getCurrentXY.x,
            y = _getCurrentXY.y;

          var rx = x - centerX,
            ry = y - centerY,
            hue = caculateAngle(rx, ry);

          {
            var _getCurrentXY2 = this.getCurrentXY(
                null,
                hue,
                radius - this.half_thinkness,
                centerX,
                centerY
              ),
              x = _getCurrentXY2.x,
              y = _getCurrentXY2.y;
          }

          // set drag pointer position
          this.refs.$drag_pointer.css({
            left: x - minX + "px",
            top: y - minY + "px",
          });

          if (!isEvent) {
            this.changeColor({
              type: "hsv",
              h: hue,
            });
          }
        },
      },
    ]);
    return ColorRing;
  })(ColorWheel);

  // import ColorWheel from '../ui/ColorWheel'
  var RingColorPicker = (function (_BaseColorPicker) {
    inherits(RingColorPicker, _BaseColorPicker);

    function RingColorPicker() {
      classCallCheck(this, RingColorPicker);
      return possibleConstructorReturn(
        this,
        (
          RingColorPicker.__proto__ || Object.getPrototypeOf(RingColorPicker)
        ).apply(this, arguments)
      );
    }

    createClass(RingColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="colorring"></div>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            colorring: ColorRing,
            palette: ColorPalette,
            control: ColorControl$8,
            information: ColorInformation,
            currentColorSets: CurrentColorSets,
            colorSetsChooser: ColorSetsChooser,
            contextMenu: CurrentColorSetsContextMenu,
          };
        },
      },
    ]);
    return RingColorPicker;
  })(BaseColorPicker);

  var ColorControl$10 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Hue: VerticalHue, Opacity: Opacity$2 };
        },
      },
      {
        key: "template",
        value: function template() {
          return '\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Hue.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor() {
          this.refresh();
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var XDColorPicker = (function (_BaseColorPicker) {
    inherits(XDColorPicker, _BaseColorPicker);

    function XDColorPicker() {
      classCallCheck(this, XDColorPicker);
      return possibleConstructorReturn(
        this,
        (XDColorPicker.__proto__ || Object.getPrototypeOf(XDColorPicker)).apply(
          this,
          arguments
        )
      );
    }

    createClass(XDColorPicker, [
      {
        key: "template",
        value: function template() {
          return '\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        ';
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            palette: ColorPalette,
            control: ColorControl$10,
            information: ColorInformation,
            currentColorSets: CurrentColorSets,
            colorSetsChooser: ColorSetsChooser,
            contextMenu: CurrentColorSetsContextMenu,
          };
        },
      },
    ]);
    return XDColorPicker;
  })(BaseColorPicker);

  var source$8 = "mini-control";

  var ColorControl$12 = (function (_UIElement) {
    inherits(ColorControl, _UIElement);

    function ColorControl() {
      classCallCheck(this, ColorControl);
      return possibleConstructorReturn(
        this,
        (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).apply(
          this,
          arguments
        )
      );
    }

    createClass(ColorControl, [
      {
        key: "components",
        value: function components() {
          return { Hue: VerticalHue, Opacity: Opacity$2 };
        },
      },
      {
        key: "template",
        value: function template() {
          return /*html*/ '\n            <div class="control">\n                <div target="Opacity" ></div>            \n                <div target="Hue" ></div>\n            </div>\n        ';
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setColorUI();
        },
      },
      {
        key: "setColorUI",
        value: function setColorUI() {
          this.Hue.setColorUI();
          this.Opacity.setColorUI();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor(sourceType) {
          if (source$8 != sourceType) {
            this.refresh();
          }
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return ColorControl;
  })(UIElement);

  var VSCodePicker = (function (_BaseColorPicker) {
    inherits(VSCodePicker, _BaseColorPicker);

    function VSCodePicker() {
      classCallCheck(this, VSCodePicker);
      return possibleConstructorReturn(
        this,
        (VSCodePicker.__proto__ || Object.getPrototypeOf(VSCodePicker)).apply(
          this,
          arguments
        )
      );
    }

    createClass(VSCodePicker, [
      {
        key: "template",
        value: function template() {
          return /*html*/ "\n            <div class='colorpicker-body'>\n                <div class='color-view'>\n                    <div class='color-view-container'  ref=\"$colorview\"></div>\n                </div>\n                <div class='color-tool'>\n                    <div target=\"palette\"></div>\n                    <div target=\"control\"></div>\n                </div>\n            </div>\n        ";
        },
      },
      {
        key: "components",
        value: function components() {
          return {
            palette: ColorPalette,
            control: ColorControl$12,
          };
        },
      },
      {
        key: "initColorWithoutChangeEvent",
        value: function initColorWithoutChangeEvent(color) {
          this.$store.dispatch("/initColor", color);
          this.refresh();
        },
      },
      {
        key: "setBackgroundColor",
        value: function setBackgroundColor() {
          var color = this.$store.dispatch("/toColor");
          var rgb = this.$store.rgb;
          var bValue = Color$1.brightness(rgb.r, rgb.g, rgb.b);

          this.refs.$colorview.css({
            "background-color": color,
            color: bValue > 127 ? "black" : "white",
          });
          this.refs.$colorview.html(color);
        },
      },
      {
        key: "click $colorview",
        value: function click$colorview(e) {
          this.nextFormat();
        },
      },
      {
        key: "nextFormat",
        value: function nextFormat() {
          var current_format = this.$store.format || "hex";

          var next_format = "hex";
          if (current_format == "hex") {
            next_format = "rgb";
          } else if (current_format == "rgb") {
            next_format = "hsl";
          } else if (current_format == "hsl") {
            next_format = "hex";
          }

          this.$store.dispatch("/changeFormat", next_format);
          this.$store.emit("lastUpdateColor");
          this.refresh();
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          this.setBackgroundColor();
        },
      },
      {
        key: "@changeColor",
        value: function changeColor() {
          this.refresh();
        },
      },
      {
        key: "@initColor",
        value: function initColor() {
          this.refresh();
        },
      },
    ]);
    return VSCodePicker;
  })(BaseColorPicker);

  var ColorPicker = {
    create: function create(opts) {
      switch (opts.type) {
        case "macos":
          return new MacOSColorPicker(opts);
        case "xd":
          return new XDColorPicker(opts);
        case "ring":
          return new RingColorPicker(opts);
        case "mini":
          return new MiniColorPicker(opts);
        case "vscode":
          return new VSCodePicker(opts);
        case "mini-vertical":
          return new MiniColorPicker$2(opts);
        case "sketch":
        case "palette":
        default:
          return new ChromeDevToolColorPicker(opts);
      }
    },

    ColorPicker: ChromeDevToolColorPicker,
    ChromeDevToolColorPicker: ChromeDevToolColorPicker,
    MacOSColorPicker: MacOSColorPicker,
    RingColorPicker: RingColorPicker,
    MiniColorPicker: MiniColorPicker,
    VSCodePicker: VSCodePicker,
    MiniVerticalColorPicker: MiniColorPicker$2,
  };

  function debounce(callback, delay) {
    var t = undefined;

    return function ($1, $2, $3, $4, $5) {
      if (t) {
        clearTimeout(t);
      }

      t = setTimeout(function () {
        callback($1, $2, $3, $4, $5);
      }, delay || 300);
    };
  }

  var colorpicker_token_class = "ace_color";
  var colorpicker_container_class = "ace-colorpicker";

  var ColorView = (function () {
    function ColorView(ace, editor) {
      var opt =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : {
              type: "chromedevtool",
              showDelay: 0,
              containerClass: colorpicker_container_class,
            };
      classCallCheck(this, ColorView);

      this.opt = opt;
      this.ace = ace;
      this.editor = editor;

      this.colorpicker = ColorPicker.create(this.opt);
      this.init_event();
    }

    createClass(ColorView, [
      {
        key: "get_brightness",
        value: function get_brightness(colorString) {
          var colorObj = Color$1.parse(colorString);
          var fontColorString =
            brightness(colorObj.r, colorObj.g, colorObj.b) > 127
              ? "#000"
              : "#fff";

          return fontColorString;
        },
      },
      {
        key: "mouse_over",
        value: function mouse_over(evt) {
          var $colorElement = new Dom(evt.target);
          this.__colorview_check_target = evt.target;

          if ($colorElement.hasClass(colorpicker_token_class)) {
            this.openDebouncedColorPicker(evt);
          }
        },
      },
      {
        key: "init_mouse_event",
        value: function init_mouse_event() {
          var renderer = this.editor.renderer;
          var content = renderer.content;

          this.openDebouncedColorPicker = debounce(
            this.open_color_picker.bind(this),
            this.opt.showDelay
          );

          this.onMouseOver = this.mouse_over.bind(this);

          // content.addEventListener('mouseover', this.onMouseOver);
          content.addEventListener("mousemove", this.onMouseOver);
        },
      },
      {
        key: "init_event",
        value: function init_event() {
          var _this = this;

          var _editor = this.editor;
          var renderer = _editor.renderer;
          var session = _editor.session;
          console.log(_editor);
          var content = renderer.content;

          this.init_mouse_event();

          var rules = session.$mode.$highlightRules.getRules();
          for (var stateName in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, stateName)) {
              rules[stateName].unshift({
                token: "color",
                regex:
                  "#(?:[\\da-f]{8})|#(?:[\\da-f]{3}){1,2}|rgb\\((?:\\s*\\d{1,3},\\s*){2}\\d{1,3}\\s*\\)|rgba\\((?:\\s*\\d{1,3},\\s*){3}\\d*\\.?\\d+\\s*\\)|hsl\\(\\s*\\d{1,3}(?:,\\s*\\d{1,3}%){2}\\s*\\)|hsla\\(\\s*\\d{1,3}(?:,\\s*\\d{1,3}%){2},\\s*\\d*\\.?\\d+\\s*\\)",
              });

              // FIXME: Exception handling when the highlight does not turn into color due to the scss function name
              // LINK : https://github.com/ajaxorg/ace/blob/cbcb78c3a7c5e642d615a9f5665a44dbb94d3e92/lib/ace/mode/scss_highlight_rules.js#L43-L48
              rules[stateName].unshift({
                token: "color",
                regex: "blue|green|red",
              });
            }
          }
          // force recreation of tokenizer
          session.$mode.$tokenizer = null;
          session.bgTokenizer.setTokenizer(_editor.session.$mode.getTokenizer());
          // force re-highlight whole document
          session.bgTokenizer.start(0);

          // each editor render update, update all displayed colors
          renderer.on("afterRender", function () {
            // each time renderer updates, get all elements with ace_color class
            var colors = content.getElementsByClassName(
              colorpicker_token_class
            );

            // iterate through them and set their background color and font color accordingly
            for (var i = 0, len = colors.length; i < len; i++) {
              var colorString = colors[i].textContent;

              if (colors[i].getAttribute("data-color") === colorString) {
                // dont rerender the same color
                continue;
              }

              var fontColorString = _this.get_brightness(colorString);

              colors[i].setAttribute("data-color", colorString);
              colors[i].style.cssText =
                "\n                    background-color: " +
                colorString +
                ";\n                    color: " +
                fontColorString +
                ";\n                    pointer-events: all;\n                ";
            }
          });
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          var renderer = this.editor.renderer;
          var content = renderer.content;

          // content.removeEventListener('mouseover', this.onMouseOver);

          content.removeEventListener("mousemove", this.onMouseOver);
        },
      },
      {
        key: "open_color_picker",
        value: function open_color_picker(evt) {
          var _this2 = this;

          // check wheather event.target is equals this.__colorview_check_target
          if (evt.target !== this.__colorview_check_target) {
            this.close_color_picker();
            return;
          }

          var Range = this.ace.Range;
          var _editor2 = this.editor,
            renderer = _editor2.renderer,
            session = _editor2.session;
          var layerConfig = renderer.layerConfig;

          var screenPosition = renderer.screenToTextCoordinates(
            evt.clientX - layerConfig.padding,
            evt.clientY
          );
          var token = session.getTokenAt(
            screenPosition.row,
            screenPosition.column
          );

          if (!token || token.type.includes("color") === false) {
            return;
          }

          var row = screenPosition.row;
          var startColumn = token.start;
          var colorString = token.value;

          var prevColor = colorString;
          var pos = renderer.textToScreenCoordinates(row, startColumn);

          // support scrollTop
          var scrollTop = Dom.getScrollTop();

          this.colorpicker.show(
            {
              left: pos.pageX,
              top: pos.pageY + scrollTop,
              bottom: pos.pageY + scrollTop + layerConfig.lineHeight,
              hideDelay: this.opt.hideDelay || 10,
            },
            colorString,
            function (newColor) {
              _this2.editor.session.replace(
                new Range(
                  row,
                  startColumn,
                  row,
                  startColumn + prevColor.length
                ),
                newColor
              );
              prevColor = newColor;
            }
          );
        },
      },
      {
        key: "close_color_picker",
        value: function close_color_picker() {
          if (this.colorpicker) {
            this.colorpicker.hide();
          }
        },
      },
      {
        key: "hide_delay_color_picker",
        value: function hide_delay_color_picker() {
          if (this.colorpicker) {
            this.colorpicker.runHideDelay();
          }
        },
      },
      {
        key: "key",
        value: function key(lineNo, ch) {
          return [lineNo, ch].join(":");
        },
      },
      {
        key: "keyup",
        value: function keyup(evt) {
          if (this.colorpicker) {
            if (evt.key == "Escape") {
              this.colorpicker.hide();
            } else if (this.colorpicker.isShortCut == false) {
              this.colorpicker.hide();
            }
          }
        },
      },
    ]);
    return ColorView;
  })();

  function LOAD_ACE_COLORPICKER(ace, editor, opt) {
    return new ColorView(ace, editor, opt);
  }

  var AceExtension = {
    load: LOAD_ACE_COLORPICKER,
  };

  var index = _extends({}, Util, ColorPicker, AceExtension);

  return index;
};

const AceColorPicker = factory();

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/ace-colorpicker@0.0.12/addon/ace-colorpicker.css');
document.head.appendChild(link);

const applyStyle = (elem, style) => {
  Object.entries(style).forEach(([key, value]) => {
    elem.style[key] = value;
  });
};

const styles = (isDarkMode) => ({
  editUserThemeBtn: {
    color: isDarkMode ? "white" : "black",
    fontFamily: "TwitterChirp",
    fontWeight: 700,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    border: "none",
    fontSize: "17px",
    marginRight: "8px",
  }
});

const editThemeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
`;

const editorWindow = `
  <div class="header title-bar">
    <div class="title-bar-text">CSS Editor</div>
    <div class="title-bar-controls">
      <button aria-label="Close">
        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1H2V1H3V2H4H5V1H6V0H7H8V1H7V2H6V3H5V4H6V5H7V6H8V7H7H6V6H5V5H4H3V6H2V7H1H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z" fill="black"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="window-body">
    <div class="editor-content field-row-stacked">
      <textarea id="css-editor" style="resize: none;"></textarea>
    </div>
    <div class="status-bar">
      <p class="status-bar-field position">Line 0, Col 0</p>
      <p class="status-bar-field char-count">0 characters</p>
      <p class="status-bar-field">Press F1 for help</p>
    </div>
    <section class="field-row actions">
      <button aria-label="Cancel">Cancel</button>
      <button aria-label="Publish">Publish</button>
    </section>
  </div>
`;

const alertModal = `
<div class="header title-bar">
  <div class="title-bar-text"></div>
  <div class="title-bar-controls">
    <button aria-label="Close"></button>
  </div>
</div>
<div class="window-body">
  <p class="message"></p>
  <section class="field-row" style="justify-content: flex-end">
    <button aria-label="OK">OK</button>
  </section>
</div>
`;

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(window, args); }, timeout);
  };
};

document.addEventListener("mousedown", () => window.mousedown = true);
document.addEventListener("mouseup", () => window.mousedown = false);
document.addEventListener("mouseup", (e) => {
  window.dragTarget = null;
  window.offsetX = 0;
  window.offsetY = 0;
});

document.addEventListener("mousemove", (e) => {
  if (window.dragTarget) {
    const dx = e.clientX - window.offsetX;
    const dy = e.clientY - window.offsetY;
    window.dragTarget.style.left = dx + "px";
    window.dragTarget.style.top = dy + "px";
  }
});

const launchAlert = (title, contents) => {
  const newAlert = document.createElement('div');
  newAlert.classList.add('window');
  newAlert.style.width = "300px";
  newAlert.style.left = "calc(50% - 150px)";
  newAlert.style.top = "calc(50% - 150px)";

  newAlert.innerHTML = alertModal;

  const titleBar = newAlert.querySelector('.title-bar-text');
  titleBar.textContent = title;

  const message = newAlert.querySelector('.message');
  message.textContent = contents;

  const header = newAlert.querySelector(".header");
  header.addEventListener("mousedown", (e) => {
    window.dragTarget = newAlert;
    window.offsetX = e.offsetX;
    window.offsetY = e.offsetY;
  });

  const buttons = newAlert.querySelectorAll('button[aria-label="Close"], button[aria-label="OK"]');
  buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', () => {
      console.log("clicked");
      newAlert.remove();
    });
  });

  document.body.appendChild(newAlert);
};

const fetchUserFromURL = () => {
  const parser = document.createElement('a');
  parser.href = window.location.href;
  const pathname = parser.pathname;

  // Split the pathname into parts, and return the second part (the user)
  const pathnameParts = pathname.split('/');
  return pathnameParts[1];
};

const setStyleTagContents = (contents) => {
  const styleTag = document.querySelector("#user-style");
  styleTag.innerHTML = contents;
};

const launchEditor = () => {
  const editor = document.createElement("div");
  editor.id = "editor";
  editor.className = "window";
  editor.innerHTML = editorWindow.trim();
  editor.style.left = "50px";
  editor.style.top = "50px";

  // append to html
  document.querySelector("body").appendChild(editor);

  const closeBtn = editor.querySelector(`.title-bar-controls [aria-label="Close"]`);
  closeBtn.addEventListener("click" , () => {
    editor.remove();
  });
  closeBtn.addEventListener("mousedown", (e) => e.stopPropagation());

  const editorInstance = ace.edit("css-editor");
  editorInstance.setTheme("ace/theme/dreamweaver");
  editorInstance.session.setMode("ace/mode/css", () => {
    AceColorPicker.load(ace, editorInstance);
  });

  editorInstance.session.selection.on('changeCursor', () => {
    const { row, column } = editorInstance.getCursorPosition();
    const positionDiv = editor.querySelector("p.position");
    positionDiv.innerText = `Line ${row}, Col ${column}`;
  });
  
  const debouncedSave = debounce(setStyleTagContents, 1000);

  editorInstance.session.on('change', () => {
    const contents = editorInstance.getValue();
    const charCountDiv = editor.querySelector("p.char-count");
    charCountDiv.innerText = `${contents.length} characters`;

    // persist in localstorage
    localStorage.setItem("css-contents", contents);
    debouncedSave(contents);
  });
  editorInstance.setValue(localStorage.getItem("css-contents"), "");

  const cssEditor = editor.querySelector(".ace_editor");
  cssEditor.style.height = "300px";
  cssEditor.style.width = "400px";
  cssEditor.style.overscrollBehaviour = "none";

  let observer = new ResizeObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (window.mousedown) {
        const newHeight = mutation.contentRect.height;
        const newWidth = mutation.contentRect.width;

        cssEditor.style.height = newHeight - 110 + "px";
        cssEditor.style.width = newWidth - 32 + "px";
        editorInstance.resize();
      }
    });
  });

  observer.observe(editor, { attributes: true });

  const header = editor.querySelector(".header");
  header.addEventListener("mousedown", (e) => {
    window.dragTarget = editor;
    window.offsetX = e.offsetX;
    window.offsetY = e.offsetY;
  });

  const cancelButton = editor.querySelector(`[aria-label="Cancel"]`);
  cancelButton.addEventListener("click", () => {
    editor.remove();
  });

  const publishButton = editor.querySelector(`[aria-label="Publish"]`);
  publishButton.addEventListener("click", () => {
    const user = fetchUserFromURL();

    const contents = editorInstance.getValue();

    chrome.runtime.sendMessage({
      type: "publish",
      data: { user, contents }
    }, function (response) {
      if (response && response.status) {
        const { status } = response;
        if (status === "success") {
          launchAlert("Theme updated", "Theme published successfully! Anyone with the extension that visits your page will now see your custom theme. Huzzah!");
        } else {
          launchAlert("Failed to update theme", response.data);
        }
      }
    });
  });
};

const initialize = () => {
    const user = fetchUserFromURL();

    // also accounts for dimmed mode
    const isDarkMode = document.querySelector("body").style["background-color"] !== "rgb(255, 255, 255)";

    if (!document.querySelector("#user-style")) {
      var styleTag = document.createElement('style');
      styleTag.id = "user-style";
      document.head.appendChild(styleTag);
    }

    chrome.runtime.sendMessage({
      type: "fetch",
      data: { user }
    }, function (response) {
      if (response && response.status) {
        const { status, data } = response;
        if (status === "success") {
          setStyleTagContents(data);
        } else {
          console.log(`Could not fetch CSS for user ${user}`);
        }
      }
    });

    // insert edit theme btn if it doesn't already exist
    if (!document.querySelector("#edit-theme")) {
      const settingsLink = document.querySelector('[href="/settings/profile"]');
      const editUserThemeBtn = document.createElement("a");
      editUserThemeBtn.id = "edit-theme";
      editUserThemeBtn.innerHTML = `${editThemeIcon} Edit Theme`;
      editUserThemeBtn.className = settingsLink.className;
      applyStyle(editUserThemeBtn, styles(isDarkMode).editUserThemeBtn);

      editUserThemeBtn.addEventListener("click", () => {
        const curEditor = document.querySelector("#editor");
        if (curEditor) {
          curEditor.remove();
        } else {
          launchEditor();
        }
      });

      const parent = settingsLink.parentNode;
      parent.insertBefore(editUserThemeBtn, settingsLink);
    }

};

var oldHref = document.location.href;

window.onload = function() {
  var bodyList = document.querySelector("body");

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function() {
      if (oldHref != document.location.href) {
          oldHref = document.location.href;
          initialize();
      }
    });
  });
  
  var config = {
    childList: true,
    subtree: true
  };
  
  observer.observe(bodyList, config);
  waitForLoadFinish();
};

function waitForLoadFinish() {
  var loadingDiv = document.querySelector('[aria-label^="Loading"]');

  if (!loadingDiv) {
    initialize();
  } else {
    setTimeout(waitForLoadFinish, 100);
  }
}
