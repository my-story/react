(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"9ONQ":function(e,t,n){"use strict";var i=n("iVi/");function r(){return!function(){if("object"!==typeof navigator||"string"!==typeof navigator.userAgent)return!1;return navigator.userAgent.indexOf("Node.js")>=0||navigator.userAgent.indexOf("jsdom")>=0}()&&("object"===typeof document&&"string"===typeof document.cookie)}function o(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(i){}return e}var a=n("MgzW"),s=function(){function e(e){var t=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e){return"string"===typeof e?i.parse(e):"object"===typeof e&&null!==e?e:{}}(e),new Promise(function(){t.HAS_DOCUMENT_COOKIE=r()}).catch(function(){})}return e.prototype._updateBrowserValues=function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.parse(document.cookie))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this._updateBrowserValues(),o(this.cookies[e],t)},e.prototype.getAll=function(e){void 0===e&&(e={}),this._updateBrowserValues();var t={};for(var n in this.cookies)t[n]=o(this.cookies[n],e);return t},e.prototype.set=function(e,t,n){var r;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=a({},this.cookies,((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=a({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=s},UGV3:function(e,t,n){"use strict";n.r(t);var i=n("0iUn"),r=n("sLSF"),o=n("MI3g"),a=n("a7VT"),s=n("Tit0"),c=n("q1tI"),u=n.n(c),p=n("AT/M"),f=n("vYYK"),h=n("9ONQ"),d=(n("VTUY"),u.a.createElement),l=new h.a,m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(s))),Object(f.a)(Object(p.a)(n),"state",{products:l.get("Products")}),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.state),d("div",{className:"order-summary-container"},d("div",{className:"order-title"},d("h2",null,"Order Summary"),d("p",null,d("b",null,"Edit"))))}}]),t}(c.Component),v=u.a.createElement,g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return v("div",{className:"terms-page"},v(m,null))}}]),t}(c.Component);t.default=g},VTUY:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var i=n("q1tI"),r=n.n(i).a.createContext(),o=r.Provider,a=r.Consumer;t.c=r},"iVi/":function(e,t,n){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},a=e.split(o),c=r.decode||i,u=0;u<a.length;u++){var p=a[u],f=p.indexOf("=");if(!(f<0)){var h=p.substr(0,f).trim(),d=p.substr(++f,p.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==n[h]&&(n[h]=s(d,c))}}return n},t.serialize=function(e,t,n){var i=n||{},o=i.encode||r;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=i.maxAge){var u=i.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(u)}if(i.domain){if(!a.test(i.domain))throw new TypeError("option domain is invalid");c+="; Domain="+i.domain}if(i.path){if(!a.test(i.path))throw new TypeError("option path is invalid");c+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(c+="; HttpOnly");i.secure&&(c+="; Secure");if(i.sameSite){var p="string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite;switch(p){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var i=decodeURIComponent,r=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(n){return e}}},tky0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test_test",function(){return n("UGV3")}])}},[["tky0",1,0]]]);