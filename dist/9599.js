/*! For license information please see 9599.js.LICENSE.txt */
"use strict";(self.webpackChunkjzer_react_template=self.webpackChunkjzer_react_template||[]).push([[9599,8406],{36595:function(e,t,r){r.r(t);var n=r(67294),o=r(9676);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t,r,c=e.className,i=(e.style,e.name),s=e.label,y=e.children,b=e.out,p=e.bool,m=e.value,d=e.disabled,S=e.onChange,v=e.onChanged,h=e.antd,g=void 0===h?{}:h,j=(t=n.useState(Boolean(m)),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,i=[],u=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),O=j[0],$=j[1];return g=u({className:c,disabled:d,checked:b?m:O},g),n.useEffect((function(){b||$(m)}),[m]),n.createElement(o.Z,a({onChange:function(e){var t=e.target.checked,r=p?t:t?1:0;b||$(r);var n=i?{model:l({},i,r)}:null;null==S||S(r),null==v||v(u({value:r,label:s},n))}},g),s,y)}},69921:function(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,b=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,S=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case s:case c:case i:case a:case b:return e;default:switch(e=e&&e.$$typeof){case l:case y:case d:case m:case u:return e;default:return t}}case o:return t}}}function O(e){return j(e)===s}t.AsyncMode=f,t.ConcurrentMode=s,t.ContextConsumer=l,t.ContextProvider=u,t.Element=n,t.ForwardRef=y,t.Fragment=c,t.Lazy=d,t.Memo=m,t.Portal=o,t.Profiler=i,t.StrictMode=a,t.Suspense=b,t.isAsyncMode=function(e){return O(e)||j(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return j(e)===l},t.isContextProvider=function(e){return j(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===y},t.isFragment=function(e){return j(e)===c},t.isLazy=function(e){return j(e)===d},t.isMemo=function(e){return j(e)===m},t.isPortal=function(e){return j(e)===o},t.isProfiler=function(e){return j(e)===i},t.isStrictMode=function(e){return j(e)===a},t.isSuspense=function(e){return j(e)===b},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===s||e===i||e===a||e===b||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===y||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S)},t.typeOf=j}}]);