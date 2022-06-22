(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"#content {\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    font-size: 10vmin;\n}\n\n.subHeader {\n    font-size: 5vmin;\n}\n\n.menu,\n.about,\n.contact,\nimg {\n    height: auto;\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.bolaniBro {\n    height: 70vmin;\n    width: 70vmin;\n    position: relative;\n    right: 5%;\n    z-index: 2;\n}\n\n.bolaniChef {\n    width: 60%;\n    bottom: 25%;\n}\n\n.bolaniChef:active {\n    bottom: 20%;\n}\n\n.rightBolani {\n    width: 70%;\n    left: -50%;\n    bottom: 1%;\n    z-index: 3;\n}\n\n.rightBolani:active {\n    padding: 5vmin;\n}\n\n.leftBolani {\n    width: 70%;\n    left: 65%;\n    bottom: 16%;\n    z-index: 4;\n}\n\n.leftBolani:active {\n    padding: 5vmin;\n}\n\n.rightSmoke {\n    width: 35%;\n    left: -50%;\n    bottom: 15%;\n    opacity: 75%;\n}\n\n.leftSmoke {\n    width: 40%;\n    left: 80%;\n    bottom: 30%;\n    opacity: 75%;\n}\n\n.menu {\n    width: fit-content;\n    display: none;\n    background-color: white;\n    font-size: 3vmin;\n    left: -50%;\n    bottom: 30%;\n    z-index: 6;\n}\n\n.about {\n    display: none;\n    font-size: 3vmin;\n    bottom: 85%;\n    left: 52%;\n}\n\n.contact {\n    width: fit-content;\n    background-color: white;\n    display: none;\n    font-size: 3vmin;\n    left: 92%;\n    bottom: 42%;\n    z-index: 7;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=t.p+"1d30b66b8aeabac8f7af.png",h=t.p+"cb6da68f5aa9c4f56ded.png",b=t.p+"7a1491e6706bb18e3097.png",y=t.p+"7fb6e31682efad587144.png",g=t.p+"76c173261ed9e8172a25.png",w=document.getElementById("content");window.addEventListener("load",(()=>{setTimeout((()=>{I(w,5,"flex")}),500)}));const C=document.createElement("div");C.textContent="BOLANI BROS",C.className="header",w.appendChild(C);const x=document.createElement("div");function E(e){let n=.75,t=setInterval((function(){n<=.1&&(clearInterval(t),e.style.display="none"),e.style.opacity=n,e.style.filter=`alpha(opacity = ${100*n})`,n-=.1*n}),20)}function I(e,n,t){let o=.1;e.style.display=t;let r=setInterval((function(){o>=.75&&clearInterval(r),e.style.opacity=o,e.style.filter=`alpha(opacity = ${100*o})`,o+=.1*o}),n)}x.textContent="Oven Fresh HOT Delicious",x.className="subHeader",w.appendChild(x),function(){const e=document.createElement("div");e.className="bolaniBro";const n=new Image;n.className="bolaniChef",n.src=v;const t=new Image;t.className="rightBolani",t.src=h;const o=new Image;o.className="rightSmoke",o.src=y;const r=new Image;r.className="leftBolani",r.src=b;const a=new Image;a.className="leftSmoke",a.src=g,e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a),w.appendChild(e);const i=document.createElement("div");i.className="menu",i.textContent="Menu & Locations";const s=document.createElement("div");s.className="about",s.textContent="About";const c=document.createElement("div");c.className="contact",c.textContent="Contact",e.appendChild(i),e.appendChild(s),e.appendChild(c),n.addEventListener("mouseenter",(()=>{n.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",n.style.cursor="pointer",I(s,20,"block")})),n.addEventListener("mouseleave",(()=>{n.style.filter="none",E(s)})),t.addEventListener("mouseenter",(()=>{t.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",t.style.cursor="pointer",E(o),I(i,20,"block")})),t.addEventListener("mouseleave",(()=>{t.style.filter="none",I(o,20,"block"),E(i)})),r.addEventListener("mouseenter",(()=>{r.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",r.style.cursor="pointer",E(a),I(c,20,"block")})),r.addEventListener("mouseleave",(()=>{r.style.filter="none",I(a,20,"block"),E(c)}))}()})()})();