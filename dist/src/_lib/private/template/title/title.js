import e from"../../../_node/@babel/runtime/helpers/esm/extends.js";import r from"../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import t from"react";import o from"../../../common/utils/isColor.js";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var l=window,a=l.$,s=l.$lazy.load((function(){return import("../../component/temp/Controls.js")})),i=function(r){var n=r.children,l=r.prefix,i=r.className,m=r.style,p=r.titleMode,b=r.bgcolor,f=void 0===b?"bcf":b,d=r.title,u=r.subTitle,g=r.grayTitle,y=r.loading,h=r.back,O=r.refresh,j=r.disabled,w=r.table,x=r.controls,P=void 0===x?{}:x,v=r.keys,E="bbor1 plr10 f14";return o(f)&&(m=c({backgroundColor:f},m),f=""),1===p?E="r3px plr10 f14":2===p?E="bbor1 mlr10 f13":3===p&&(E="bbor1 plr10 f13"),t.createElement("header",{style:c({padding:"5px 10px",minHeight:36},m),className:"fxm ".concat(a.css(i)," ").concat(a.css(f)," ").concat(E)},d&&t.createElement("h2",{className:"fxm nowrap b nosel ".concat(2===p||3===p?"g6":"g3")},2===p||3===p?t.createElement("i",{className:"r10px mr5 rel",style:{width:6,height:6,backgroundColor:"#999"}}):t.createElement("i",{className:"bcm r10px mr5 rel",style:{width:4,height:12}}),d),(u||g)&&t.createElement("span",{className:"f13 ml5 ".concat(g?"g9":"c0")},"( ",u||g," )"),l,n,t.createElement(s,e({className:"ex",align:"end",loading:y,disabled:j,back:h,refresh:O,data:P,table:w,keys:v},P)))};export{i as default};
