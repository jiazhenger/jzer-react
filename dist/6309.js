"use strict";(self.webpackChunkjzer_react_template=self.webpackChunkjzer_react_template||[]).push([[6309,1120],{21700:function(e,t){t.Z=function(e){return/^#/.test(e)||/^rgb/.test(e)}},96309:function(e,t,r){r.r(t);var n=r(67294),o=r(21700);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=window,u=b.$,f=b.$lazy.load((function(){return Promise.all([r.e(6550),r.e(9733),r.e(6308)]).then(r.bind(r,79733))}));t.default=function(e){var t=e.children,r=e.prefix,c=e.className,i=e.style,s=e.titleMode,b=e.bgcolor,p=void 0===b?"bcf":b,m=e.title,y=e.subTitle,g=e.grayTitle,d=e.loading,h=e.back,O=e.refresh,v=e.disabled,j=e.table,w=e.controls,P=void 0===w?{}:w,k=e.keys,S="bbor1 plr10 f14";return(0,o.Z)(p)&&(i=l({backgroundColor:p},i),p=""),1===s?S="r3px plr10 f14":2===s?S="bbor1 mlr10 f13":3===s&&(S="bbor1 plr10 f13"),n.createElement("header",{style:l({padding:"5px 10px",minHeight:36},i),className:"fxm ".concat(u.css(c)," ").concat(u.css(p)," ").concat(S)},m&&n.createElement("h2",{className:"fxm nowrap b nosel ".concat(2===s||3===s?"g6":"g3")},2===s||3===s?n.createElement("i",{className:"r10px mr5 rel",style:{width:6,height:6,backgroundColor:"#999"}}):n.createElement("i",{className:"bcm r10px mr5 rel",style:{width:4,height:12}}),m),(y||g)&&n.createElement("span",{className:"f13 ml5 ".concat(g?"g9":"c0")},"( ",y||g," )"),r,t,n.createElement(f,a({className:"ex",align:"end",loading:d,disabled:v,back:h,refresh:O,data:P,table:j,keys:k},P)))}}}]);