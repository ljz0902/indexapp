(function(e){function t(t){for(var r,i,o=t[0],u=t[1],s=t[2],l=0,f=[];l<o.length;l++)i=o[l],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},a={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2897bd0c":"7a2da66a","chunk-2d0e5bdf":"7d4f0009","chunk-2d230c43":"7a919754","chunk-6a76d591":"b9c7d37c","chunk-729fc7cf":"0bc1ea1c","chunk-7ac2647a":"d5e19a90"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2897bd0c":1,"chunk-6a76d591":1,"chunk-729fc7cf":1,"chunk-7ac2647a":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2897bd0c":"6791dd90","chunk-2d0e5bdf":"31d6cfe0","chunk-2d230c43":"31d6cfe0","chunk-6a76d591":"bf67c427","chunk-729fc7cf":"6f255bf4","chunk-7ac2647a":"ac645c27"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete i[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){i[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");c.type=r,c.request=i,n[1](c)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0087":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85da"),i=n.n(r);i.a},"097e":function(e,t){(function(e){var t,n=e.document,r=n.documentElement;function i(){var e=r.getBoundingClientRect().width,t=e/6.4;r.style.fontSize=t+"px"}e.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(i,10)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(i,10))},!1),i()})(window)},"56d7":function(e,t,n){"use strict";n.r(t);n("dac5"),n("6e26"),n("9604"),n("df67");var r=n("6e6d"),i=n("2427"),a=n.n(i),c={},o=a.a.create(c);o.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},r["default"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navgation",{attrs:{activeObj:e.initActive}}),n("router-view",{on:{changeActive:e.thisActive}})],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.activeClass,"nav-container"]},[n("header",[n("p",[e._v("首页")]),n("span",[e._v(e._s(e.activeTitle))])]),n("nav",[n("ul",e._l(e.navList,function(t,r){return n("li",{key:r,on:{click:function(n){return e.clickHandle(t)}}},[e._v(e._s(t.title))])}),0)])])},f=[],d={props:["activeObj"],computed:{activeObj2:function(){return this.activeObj.title}},watch:{activeObj2:function(){this.activeClass=this.activeObj.navName,this.activeTitle=this.activeObj.title}},methods:{clickHandle:function(e){this.$router.push(e.pathName),this.activeClass=e.navClass,this.activeTitle=e.title}},data:function(){return{activeClass:"movie",activeTitle:"电影",navList:[{title:"电影",pathName:"/",navClass:"movie"},{title:"书籍",pathName:"/book",navClass:"book"},{title:"音乐",pathName:"/music",navClass:"music"},{title:"聊天",pathName:"/talk",navClass:"talk"}]}}},h=d,p=(n("eeb0"),n("6691")),v=Object(p["a"])(h,l,f,!1,null,"2660cb35",null),m=v.exports,b={data:function(){return{initActive:{title:"电影",navName:"movie"}}},methods:{thisActive:function(e){this.initActive=e}},components:{Navgation:m}},k=b,g=(n("034f"),Object(p["a"])(k,u,s,!1,null,null,null)),y=g.exports,w=n("3bc2");r["default"].use(w["a"]);var j=new w["a"]({mode:"hash",base:"",routes:[{path:"/",name:"movie",component:function(){return n.e("chunk-729fc7cf").then(n.bind(null,"948e"))}},{path:"/music",name:"music",component:function(){return n.e("chunk-2897bd0c").then(n.bind(null,"2b17"))}},{path:"/book",name:"book",component:function(){return n.e("chunk-7ac2647a").then(n.bind(null,"f6e6"))}},{path:"/talk",name:"talk",component:function(){return n.e("chunk-6a76d591").then(n.bind(null,"c592"))}},{path:"/movie/detail",name:"moviedetail",component:function(){return n.e("chunk-2d0e5bdf").then(n.bind(null,"967c"))}},{path:"/book/detail",name:"bookdetail",component:function(){return n.e("chunk-2d230c43").then(n.bind(null,"ee4a"))}}]});n("097e");r["default"].config.productionTip=!1,new r["default"]({router:j,render:function(e){return e(y)}}).$mount("#app")},"85da":function(e,t,n){},eeb0:function(e,t,n){"use strict";var r=n("0087"),i=n.n(r);i.a}});
//# sourceMappingURL=app.2ceb0c73.js.map