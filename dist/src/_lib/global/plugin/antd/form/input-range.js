import e from"../../../../_node/@babel/runtime/helpers/esm/extends.js";import t from"../../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import r from"../../../../_node/@babel/runtime/helpers/esm/slicedToArray.js";import n from"react";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=window,i=l.$fn,u=l.$lazy.load((function(){return import("./input.js")})),s=function(t){var o=t.style,l=t.name,s=t.label,c=t.p,m=void 0===c?["开始","结束"]:c,f=t.hint,d=void 0===f?"":f,p=t.width;t.out;var b=t.value,v=void 0===b?[]:b,y=t.disabled,O=t.allowClear,h=void 0===O||O,g=t.onChange,j=t.onChanged,w=t.form,C=t.antd,P=void 0===C?{}:C,E=n.useState(v),k=r(E,2),x=k[0],D=k[1];m=i.isString(m)?m.split(","):m;var S={disabled:y,allowClear:h,width:"100%"};n.useEffect((function(){return i.hasArray(v)&&D(v)}),[v]);var _=n.useCallback((function(e){if(null==g||g(e),j||w){var t=i.getFormFormat({label:s,name:l,value:e,form:w,formType:"text"});null==j||j(t)}}),[]),A=n.useCallback((function(e){D((function(t){return t[0]=e,_(t),t}))}),[_]),F=n.useCallback((function(e){D((function(t){return t[1]=e,_(t),t}))}),[_]);return n.createElement("div",{style:a({width:p,gap:5},o),className:"fxm"},n.createElement(u,e({value:null==x?void 0:x[0],p:d+m[0],antd:P,onChange:A},S)),n.createElement("span",{className:"g9"},"~"),n.createElement(u,e({value:null==x?void 0:x[1],p:d+m[1],onChange:F,antd:P},S)))};export{s as default};