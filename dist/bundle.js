(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,"#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    font-size: 10vmin;\n}\n\n.subHeader {\n    font-size: 5vmin;\n}\n\n.menu,\n.about,\n.contact,\nimg {\n    height: auto;\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.bolaniBro {\n    height: 70vmin;\n    width: 70vmin;\n    position: relative;\n    right: 5%;\n    z-index: 2;\n}\n\n.bolaniChef {\n    width: 60%;\n    bottom: 25%;\n}\n\n.bolaniChef:active {\n    bottom: 20%;\n}\n\n.rightBolani {\n    width: 70%;\n    left: -50%;\n    bottom: 1%;\n    z-index: 3;\n}\n\n.rightBolani:active {\n    padding: 5vmin;\n}\n\n.leftBolani {\n    width: 70%;\n    left: 65%;\n    bottom: 16%;\n    z-index: 4;\n}\n\n.leftBolani:active {\n    padding: 5vmin;\n}\n\n.rightSmoke {\n    width: 35%;\n    left: -50%;\n    bottom: 15%;\n    opacity: 75%;\n}\n\n.leftSmoke {\n    width: 40%;\n    left: 80%;\n    bottom: 30%;\n    opacity: 75%;\n}\n\n.menu {\n    width: fit-content;\n    display: none;\n    background-color: white;\n    font-size: 3vmin;\n    left: -50%;\n    bottom: 30%;\n    z-index: 6;\n}\n\n.about {\n    display: none;\n    font-size: 3vmin;\n    bottom: 85%;\n    left: 52%;\n}\n\n.contact {\n    width: fit-content;\n    background-color: white;\n    display: none;\n    font-size: 3vmin;\n    left: 92%;\n    bottom: 42%;\n    z-index: 7;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=t.p+"1d30b66b8aeabac8f7af.png",h=t.p+"cb6da68f5aa9c4f56ded.png",b=t.p+"7a1491e6706bb18e3097.png",y=t.p+"7fb6e31682efad587144.png",g=t.p+"76c173261ed9e8172a25.png",w=function(){const e=document.getElementById("content");window.addEventListener("load",(()=>{x.fadeIn(n,50),x.fadeIn(t,50),x.fadeIn(C.bolaniBroDiv,50)}));const n=document.createElement("div");n.textContent="BOLANI BROS",n.className="header",e.appendChild(n);const t=document.createElement("div");return t.textContent="Oven Fresh HOT Delicious",t.className="subHeader",e.appendChild(t),{content:e,header:n,subHeader:t}}(),C=function(){const e=document.createElement("div");e.className="bolaniBro";const n=new Image;n.className="bolaniChef",n.src=v;const t=new Image;t.className="rightBolani",t.src=h;const a=new Image;a.className="rightSmoke",a.src=y;const o=new Image;o.className="leftBolani",o.src=b;const r=new Image;r.className="leftSmoke",r.src=g,e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(o),e.appendChild(r),w.content.appendChild(e);const i=document.createElement("div");i.className="menu",i.textContent="Menu & Locations";const s=document.createElement("div");s.className="about",s.textContent="About";const c=document.createElement("div");return c.className="contact",c.textContent="Contact",e.appendChild(i),e.appendChild(s),e.appendChild(c),n.addEventListener("mouseenter",(()=>{n.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",n.style.cursor="pointer",x.fadeIn(s,20)})),n.addEventListener("mouseleave",(()=>{n.style.filter="none",x.fadeOut(s)})),t.addEventListener("mouseenter",(()=>{t.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",t.style.cursor="pointer",x.fadeOut(a),x.fadeIn(i,20)})),t.addEventListener("mouseleave",(()=>{t.style.filter="none",x.fadeIn(a,20),x.fadeOut(i)})),o.addEventListener("mouseenter",(()=>{o.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",o.style.cursor="pointer",x.fadeOut(r),x.fadeIn(c,20)})),o.addEventListener("mouseleave",(()=>{o.style.filter="none",x.fadeIn(r,20),x.fadeOut(c)})),{bolaniBroDiv:e}}(),x={fadeOut:function(e){let n=.75,t=setInterval((function(){n<=.1&&(clearInterval(t),e.style.display="none"),e.style.opacity=n,e.style.filter=`alpha(opacity = ${100*n})`,n-=.1*n}),20)},fadeIn:function(e,n){let t=.1;e.style.display="block";let a=setInterval((function(){t>=.75&&clearInterval(a),e.style.opacity=t,e.style.filter=`alpha(opacity = ${100*t})`,t+=.1*t}),n)}}})()})();