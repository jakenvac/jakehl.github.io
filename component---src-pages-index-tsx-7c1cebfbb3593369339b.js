(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{QeBL:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),t.raw=e,t}r.r(e),r.d(e,"default",(function(){return B}));var o=r("q1tI"),a=r.n(o),i=r("aNv/"),l=r("vOnD"),c=r("7O5W"),f=r("17x9"),s=r.n(f);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function d(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function v(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=O(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var h=!1;try{h=!0}catch(L){}function g(t){return null===t?null:"object"===u(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function w(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?p({},t,e):{}}function x(t){var e=t.forwardedRef,r=m(t,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,i=r.className,l=r.title,f=g(n),s=w("classes",[].concat(d(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,l=t.listItem,c=t.flip,f=t.size,s=t.rotation,u=t.pull,y=(p(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),p(e,"fa-rotate-".concat(s),null!=s&&0!==s),p(e,"fa-pull-".concat(u),null!=u),p(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(r)),d(i.split(" ")))),u=w("transform","string"==typeof r.transform?c.parse.transform(r.transform):r.transform),y=w("mask",g(o)),O=Object(c.icon)(f,b({},s,{},u,{},y,{symbol:a,title:l}));if(!O)return function(){var t;!h&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",f),null;var v=O.abstract,E={ref:e};return Object.keys(r).forEach((function(t){x.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),j(v[0],E)}x.displayName="FontAwesomeIcon",x.propTypes={border:s.a.bool,className:s.a.string,mask:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),fixedWidth:s.a.bool,inverse:s.a.bool,flip:s.a.oneOf(["horizontal","vertical","both"]),icon:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),listItem:s.a.bool,pull:s.a.oneOf(["right","left"]),pulse:s.a.bool,rotation:s.a.oneOf([0,90,180,270]),size:s.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s.a.bool,symbol:s.a.oneOfType([s.a.bool,s.a.string]),title:s.a.string,transform:s.a.oneOfType([s.a.string,s.a.object]),swapOpacity:s.a.bool},x.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=v(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[O(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=m(n,["style"]);return a.attrs.style=b({},a.attrs.style,{},l),e.apply(void 0,[r.tag,b({},a.attrs,{},c)].concat(d(o)))}.bind(null,a.a.createElement),E=l.a.div.withConfig({displayName:"toolbar__ToolBarItemStyled",componentId:"i5yi10-0"})(["display:flex;"]),k=function(t){var e=t.text,r=t.href;t.icon;return a.a.createElement(E,null,a.a.createElement(x,{icon:["fas","coffee"]}),a.a.createElement("a",{href:r},e))},P=l.a.div.withConfig({displayName:"toolbar__ToolBarOuter",componentId:"i5yi10-1"})(["margin:20px;padding:15px;border-radius:10px;background:",";color:",";"],i.a.Colors.mainYellow,i.a.Colors.black),A=function(t){var e=t.children;return a.a.createElement(P,null,e)},S=r("a9W1");function N(){var t=n([""]);return N=function(){return t},t}function I(){var t=n(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return t},t}function C(){var t=n(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"]);return C=function(){return t},t}function T(){var t=n(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return T=function(){return t},t}var z=i.b.div(T()),W=i.b.div(C()),D=i.b.div(I()),_=i.b.div(N());function B(){return a.a.createElement(z,null,a.a.createElement(W,null,a.a.createElement(A,null,a.a.createElement(k,{text:"Github",href:"#",icon:"coffee"}))),a.a.createElement(D,null,a.a.createElement(S.default,null)),a.a.createElement(_,null,"1"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7c1cebfbb3593369339b.js.map