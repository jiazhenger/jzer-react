import e from"../../_node/@babel/runtime/helpers/esm/defineProperty.js";import t from"../../_node/@babel/runtime/helpers/esm/asyncToGenerator.js";import n from"../../_node/@babel/runtime/regenerator/index.js";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o={loading:function(e,t){var n=document.querySelector("#jzer-loading");n&&(e?(n.querySelector(".jzer-loading-msg").innerHTML=t||"数据加载中",n.style.display="block"):n.style.display="none")},toast:function(e,r,o){return t(n.mark((function t(){var i,u,c,s,a,l;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=o||1500,(i=document.querySelector("#jzer-toast"))&&(i.style.display="block",(u=i.querySelector(".jzer-toast-msg")).innerHTML=e,"function"==typeof r&&(s=null!==(c=r())&&void 0!==c?c:{},a=s.width,l=s.align,a&&(u.style.width=a+"px"),l&&(u.style.textAlign=l)),0!==o&&(clearTimeout(window.toastClear),window.toastClear=setTimeout((function(){i.style.display="none"}),o)));case 3:case"end":return t.stop()}}),t)})))()},val:function(e){return this.isNotEmpty(e)?e:"--"},nan:function(e){return isNaN(e)?"--":e},lazy:function(e){return t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e().then((function(e){return e.default})));case 1:case"end":return t.stop()}}),t)})))()},func:function(e,t,n){return"string"==typeof e?new Function("return"+e)()(t,n):"function"==typeof e?{f:e}.f(t,n):void 0},getResult:function(e,t){return"function"==typeof e?e(t):"string"==typeof e?e.includes("=>")||e.includes("function")||e.includes("){")?this.func(e,t):e.includes("{")&&e.includes("}")||e.includes("[")&&e.includes("]")?JSON.parse(e):e:e},getEditParam:function(t,n,o){return t?function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}(e({},n,t),o):o}};export{o as default};
