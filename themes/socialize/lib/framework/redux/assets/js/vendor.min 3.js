!function(e){"function"==typeof define&&define.amd?jQueryCookie.define(["jquery"],e):e(jQuery)}(function(h){var t=/\+/g;function d(e){return e}function v(e){return decodeURIComponent(e.replace(t," "))}function m(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return g.json?JSON.parse(e):e}catch(e){}}var g=h.cookie=function(e,t,n){if(void 0!==t){if("number"==typeof(n=h.extend({},g.defaults,n)).expires){var r=n.expires,a=n.expires=new Date;a.setDate(a.getDate()+r)}return t=g.json?JSON.stringify(t):String(t),document.cookie=[g.raw?e:encodeURIComponent(e),"=",g.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}for(var o=g.raw?d:v,i=document.cookie.split("; "),l=e?void 0:{},c=0,u=i.length;c<u;c++){var s=i[c].split("="),f=o(s.shift()),p=o(s.join("="));if(e&&e===f){l=m(p);break}e||(l[f]=m(p))}return l};g.defaults={},h.removeCookie=function(e,t){return void 0!==h.cookie(e)&&(h.cookie(e,"",h.extend({},t,{expires:-1})),!0)}}),function(i){i.fn.serializeForm=function(){if(this.length<1)return!1;var a={},o=a,e=':input[type!="checkbox"][type!="radio"], input:checked',t=function(){if(!this.disabled){var e=this.name.replace(/\[([^\]]+)?\]/g,",$1").split(","),t=e.length-1,n=i(this);if(e[0]){for(var r=0;r<t;r++)o=o[e[r]]=o[e[r]]||(""===e[r+1]||"0"===e[r+1]?[]:{});void 0!==o.length?o.push(n.val()):o[e[t]]=n.val(),o=a}}};return this.filter(e).each(t),this.find(e).each(t),a}}(jQuery),function(i){i.fn.typeWatch=function(e){var o=i.extend({wait:750,callback:function(){},highlight:!0,captureLength:2,inputTypes:["TEXT","TEXTAREA","PASSWORD","TEL","SEARCH","URL","EMAIL","DATETIME","DATE","MONTH","WEEK","TIME","DATETIME-LOCAL","NUMBER","RANGE"]},e);function t(e){var t=e.type.toUpperCase();if(0<=i.inArray(t,o.inputTypes)){var a={timer:null,text:i(e).val().toUpperCase(),cb:o.callback,el:e,wait:o.wait};o.highlight&&i(e).focus(function(){this.select()});i(e).on("keydown paste cut input",function(e){var t=a.wait,r=!1,n=this.type.toUpperCase();void 0!==e.keyCode&&13==e.keyCode&&"TEXTAREA"!=n&&0<=i.inArray(n,o.inputTypes)&&(t=1,r=!0);clearTimeout(a.timer),a.timer=setTimeout(function(){var e,t,n;t=r,((n=i((e=a).el).val()).length>=o.captureLength&&n.toUpperCase()!=e.text||t&&n.length>=o.captureLength)&&(e.text=n.toUpperCase(),e.cb.call(e.el,n))},t)})}}return this.each(function(){t(this)})}}(jQuery),function(c){c.fn.alphanum=function(e){return n(this,m,i(e)),this},c.fn.alpha=function(e){return n(this,m,i(e,i("alpha"))),this},c.fn.numeric=function(e){return n(this,S,h(e)),this.blur(function(){!function(e,t){var n=parseFloat(c(e).val()),r=c(e);if(isNaN(n))return r.val("");o(t.min)&&n<t.min&&r.val("");o(t.max)&&n>t.max&&r.val("")}(this,e)}),this};var e,t,u={allow:"",disallow:"",allowSpace:!0,allowNumeric:!0,allowUpper:!0,allowLower:!0,allowCaseless:!0,allowLatin:!0,allowOtherCharSets:!0,maxLength:NaN},r={allowPlus:!1,allowMinus:!0,allowThouSep:!0,allowDecSep:!0,allowLeadingSpaces:!1,maxDigits:NaN,maxDecimalPlaces:NaN,maxPreDecimalPlaces:NaN,max:NaN,min:NaN},s={alpha:{allowNumeric:!1},upper:{allowNumeric:!1,allowUpper:!0,allowLower:!1,allowCaseless:!0},lower:{allowNumeric:!1,allowUpper:!1,allowLower:!0,allowCaseless:!0}},a={integer:{allowPlus:!1,allowMinus:!0,allowThouSep:!1,allowDecSep:!1},positiveInteger:{allowPlus:!1,allowMinus:!1,allowThouSep:!1,allowDecSep:!1}},f="!@#$%^&*()+=[]\\';,/{}|\":<>?~`.-_ ¬€£¦",l=",",p=".",g=function(){var e,t="0123456789".split(""),n={},r=0;for(r=0;r<t.length;r++)e=t[r],n[e]=!0;return n}(),w=(t=(e="abcdefghijklmnopqrstuvwxyz").toUpperCase(),new T(e+t));function n(e,s,f){e.each(function(){var u=c(this);u.bind("keyup change paste",function(e){var t="";e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.getData&&(t=e.originalEvent.clipboardData.getData("text/plain")),setTimeout(function(){!function(e,t,n,r){var a=e.val();""==a&&0<r.length&&(a=r);var o=t(a,n);if(a==o)return;var i=e.alphanum_caret();e.val(o),a.length==o.length+1?e.alphanum_caret(i-1):e.alphanum_caret(i)}(u,s,f,t)},0)}),u.bind("keypress",function(e){var t=e.charCode?e.charCode:e.which;if((32<=(n=t)||10==n||13==n)&&!e.ctrlKey&&!e.metaKey){var n,r=String.fromCharCode(t),a=u.selection(),o=a.start,i=a.end,l=u.val(),c=l.substring(0,o)+r+l.substring(i);s(c,f)!=c&&e.preventDefault()}})})}function o(e){return!isNaN(e)}function i(e,t){void 0===t&&(t=u);var n,r,a,o,i,l={};return n="string"==typeof e?s[e]:void 0===e?{}:e,c.extend(l,t,n),void 0===l.blacklist&&(l.blacklistSet=(r=l.allow,a=l.disallow,o=new T(f+a),i=new T(r),o.subtract(i))),l}function h(e){var t,n={};return t="string"==typeof e?a[e]:void 0===e?{}:e,c.extend(n,r,t),n}function d(e,t,n){if(g[t])return!function(e,t){var n=t.maxDigits;if(""==n||isNaN(n))return!1;var r=v(e);return n<=r}(e,n)&&(!function(e,t){var n=t.maxPreDecimalPlaces;if(""==n||isNaN(n))return!1;if(0<=e.indexOf(p))return!1;var r=v(e);return n<=r}(e,n)&&(!function(e,t){var n=t.maxDecimalPlaces;if(""==n||isNaN(n))return!1;var r=e.indexOf(p);if(-1==r)return!1;var a=v(e.substring(r));return n<=a}(e,n)&&(o=e+t,(!(i=n).max||i.max<0||!(parseFloat(o)>i.max))&&(r=e+t,!(a=n).min||0<a.min||!(parseFloat(r)<a.min)))));var r,a,o,i;if(n.allowPlus&&"+"==t&&""==e)return!0;if(n.allowMinus&&"-"==t&&""==e)return!0;if(t==l&&n.allowThouSep&&function(e,t){if(0==e.length)return!1;if(0<=e.indexOf(p))return!1;var n=e.indexOf(l);if(n<0)return!0;var r=e.lastIndexOf(l);return!(e.length-r-1<3||0<v(e.substring(n))%3)}(e))return!0;if(t==p){if(0<=e.indexOf(p))return!1;if(n.allowDecSep)return!0}return!1}function v(e){return(e+="").replace(/[^0-9]/g,"").length}function m(e,t){if("string"!=typeof e)return e;var n,r,a,o,i,l,c,u,s,f,p,h=e.split(""),d=[],v=0;for(v=0;v<h.length;v++){n=h[v];var m=d.join("");r=m,a=n,p=f=s=u=c=l=i=void 0,(o=t).maxLength&&r.length>=o.maxLength||!(0<=o.allow.indexOf(a)||o.allowSpace&&" "==a)&&(o.blacklistSet.contains(a)||!o.allowNumeric&&g[a]||!o.allowUpper&&(l=(i=a).toUpperCase(),c=i.toLowerCase(),i==l&&l!=c)||!o.allowLower&&(s=(u=a).toUpperCase(),f=u.toLowerCase(),u==f&&s!=f)||!o.allowCaseless&&(p=a).toUpperCase()==p.toLowerCase()||!o.allowLatin&&w.contains(a)||!(o.allowOtherCharSets||g[a]||w.contains(a)))||d.push(n)}return d.join("")}function S(e,t){if("string"!=typeof e)return e;var n,r=e.split(""),a=[],o=0;for(o=0;o<r.length;o++){n=r[o],d(a.join(""),n,t)&&a.push(n)}return a.join("")}function T(e){this.map="string"==typeof e?function(e){var t,n={},r=e.split(""),a=0;for(a=0;a<r.length;a++)t=r[a],n[t]=!0;return n}(e):{}}T.prototype.add=function(e){var t=this.clone();for(var n in e.map)t.map[n]=!0;return t},T.prototype.subtract=function(e){var t=this.clone();for(var n in e.map)delete t.map[n];return t},T.prototype.contains=function(e){return!!this.map[e]},T.prototype.clone=function(){var e=new T;for(var t in this.map)e.map[t]=!0;return e},c.fn.alphanum.backdoorAlphaNum=function(e,t){return m(e,i(t))},c.fn.alphanum.backdoorNumeric=function(e,t){return S(e,h(t))},c.fn.alphanum.setNumericSeparators=function(e){1==e.thousandsSeparator.length&&1==e.decimalSeparator.length&&(l=e.thousandsSeparator,p=e.decimalSeparator)}}(jQuery),function(a){function o(e,t){if(e.createTextRange){var n=e.createTextRange();n.move("character",t),n.select()}else null!=e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}a.fn.alphanum_caret=function(n,r){return void 0===n?function(e){if("selection"in document){var t=e.createTextRange();try{t.setEndPoint("EndToStart",document.selection.createRange())}catch(e){return 0}return t.text.length}if(null!=e.selectionStart)return e.selectionStart}(this.get(0)):this.queue(function(e){if(isNaN(n)){var t=a(this).val().indexOf(n);!0===r?t+=n.length:void 0!==r&&(t+=r),o(this,t)}else o(this,n);e()})}}(jQuery),function(u){var s=function(e){return e?e.ownerDocument.defaultView||e.ownerDocument.parentWindow:window},f=function(e,t){var n=u.Range.current(e).clone(),r=u.Range(e).select(e);return n.overlaps(r)?(n.compare("START_TO_START",r)<1?(startPos=0,n.move("START_TO_START",r)):(fromElementToCurrent=r.clone(),fromElementToCurrent.move("END_TO_START",n),startPos=fromElementToCurrent.toString().length),0<=n.compare("END_TO_END",r)?endPos=r.toString().length:endPos=startPos+n.toString().length,{start:startPos,end:endPos}):null},p=function(e,t,n){var r,a,o,i,l,c;n=n||0;for(var u=0;e[u];u++)3===(r=e[u]).nodeType||4===r.nodeType?(a=n,n+=r.nodeValue.length,o=a,i=n,c=r,"number"==typeof(l=t)[0]&&l[0]<i&&(l[0]={el:c,count:l[0]-o}),"number"==typeof l[1]&&l[1]<=i&&(l[1]={el:c,count:l[1]-o})):8!==r.nodeType&&(n=p(r.childNodes,t,n));return n};jQuery.fn.selection=function(e,t){return void 0!==e?this.each(function(){!function(e,t,n){var r=s(e);if(e.setSelectionRange)void 0===n?(e.focus(),e.setSelectionRange(t,t)):(e.select(),e.selectionStart=t,e.selectionEnd=n);else if(e.createTextRange){var a=e.createTextRange();a.moveStart("character",t),n=n||t,a.moveEnd("character",n-e.value.length),a.select()}else if(r.getSelection){var o=r.document,i=r.getSelection(),l=o.createRange(),c=[t,void 0!==n?n:t];p([e],c),l.setStart(c[0].el,c[0].count),l.setEnd(c[1].el,c[1].count),i.removeAllRanges(),i.addRange(l)}else r.document.body.createTextRange&&((l=document.body.createTextRange()).moveToElementText(e),l.collapse(),l.moveStart("character",t),l.moveEnd("character",void 0!==n?n:t),l.select())}(this,e,t)}):function(t){var e=s(t);if(void 0!==t.selectionStart)return document.activeElement&&document.activeElement!=t&&t.selectionStart==t.selectionEnd&&0==t.selectionStart?{start:t.value.length,end:t.value.length}:{start:t.selectionStart,end:t.selectionEnd};if(e.getSelection)return f(t);try{if("input"==t.nodeName.toLowerCase()){var n=s(t).document.selection.createRange(),r=t.createTextRange();r.setEndPoint("EndToStart",n);var a=r.text.length;return{start:a,end:a+n.text.length}}var o=f(t);if(!o)return o;var i=u.Range.current().clone(),l=i.clone().collapse().range,c=i.clone().collapse(!1).range;return l.moveStart("character",-1),c.moveStart("character",-1),0!=o.startPos&&""==l.text&&(o.startPos+=2),0!=o.endPos&&""==c.text&&(o.endPos+=2),o}catch(e){return{start:t.value.length,end:t.value.length}}}(this[0])},u.fn.selection.getCharElement=p}(jQuery);