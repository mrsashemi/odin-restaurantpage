(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    font-size: 10vmin;\n}\n\n.subHeader {\n    font-size: 5vmin;\n}\n\nimg {\n    height: auto;\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.bolaniBro {\n    height: 70vmin;\n    width: 70vmin;\n    position: relative;\n    right: 5%\n}\n\n.bolaniChef {\n    width: 60%;\n    bottom: 25%;\n}\n\n.rightBolani {\n    width: 70%;\n    left: -50%;\n    bottom: 1%;\n    z-index: 3;\n}\n\n.leftBolani {\n    width: 70%;\n    left: 65%;\n    bottom: 16%;\n}\n\n.rightSmoke {\n    width: 35%;\n    right: 60%;\n    bottom: 15%;\n    opacity: 75%;\n}\n\n.leftSmoke {\n    width: 40%;\n    left: 80%;\n    bottom: 30%;\n    opacity: 75%;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),p=t.n(l),d=t(589),u=t.n(d),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"1d30b66b8aeabac8f7af.png",v=t.p+"cb6da68f5aa9c4f56ded.png",g=t.p+"7a1491e6706bb18e3097.png",b=t.p+"7fb6e31682efad587144.png",y=t.p+"76c173261ed9e8172a25.png";!function(){const e=document.getElementById("content"),n=document.createElement("div");n.textContent="BOLANI BROS",n.className="header",e.appendChild(n);const t=document.createElement("div");t.textContent="Oven Fresh HOT Delicious",t.className="subHeader",e.appendChild(t);const r=document.createElement("div");r.className="bolaniBro";const o=new Image;o.className="bolaniChef",o.src=h;const a=new Image;a.className="rightBolani",a.src=v;const i=new Image;i.className="rightSmoke",i.src=b;const c=new Image;c.className="leftBolani",c.src=g;const s=new Image;s.className="leftSmoke",s.src=y,r.appendChild(o),r.appendChild(a),r.appendChild(i),r.appendChild(c),r.appendChild(s),e.appendChild(r),a.addEventListener("mouseover",(()=>{a.style.bottom="10%",a.style.left="-75%",a.style.cursor="pointer",i.style.opacity="0"})),a.addEventListener("mouseleave",(()=>{a.style.bottom="1%",a.style.left="-50%",i.style.opacity="75%"}))}()})()})();