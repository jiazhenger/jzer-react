import e from"../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import r from"react";import{Spin as t}from"antd";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var c=function(e){var n=e.loading,c=e.size,i=e.tip,a=e.style;return n?r.createElement("div",{className:"abs_full fxmc",style:o({background:"rgba(255,255,255,.5)",zIndex:10},a)},r.createElement(t,{size:c||"large",tip:i})):null};export{c as default};