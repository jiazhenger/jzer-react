import e from"react";import{useHistory as a}from"react-router-dom";import{existHttp as t}from"../../utils/index.js";var n=window.$fn,l=function a(t){var l=t.data,r=t.index,c=void 0===r?0:r,s=t.paddingLeft,m=void 0===s?20:s,i=t.className,d=t.onOpen,o=t.onChange,u=t.onClick,p=c>0?{paddingLeft:m*c}:null;return e.createElement("menu",{className:i},n.hasArray(l)?l.map((function(t,l){var r=t.title,s=t.children,m=t.path,i=t.checked;return n.hasArray(s)?e.createElement("label",{key:l},e.createElement("input",{type:"checkbox",className:"abs_lt vh",value:m,defaultChecked:i}),e.createElement("h3",{className:"fxmj rel b tap",style:p,onClick:d},e.createElement("span",{className:"ex"},r),e.createElement("i",{className:"menu-arrow ease"})),e.createElement(a,{data:s,index:c+1,key:l,onChange:o,className:"parent",path:m})):e.createElement("label",{className:"child",key:l,id:i?"active":"",onClick:u},e.createElement("input",{type:"radio",className:"abs_lt vh",name:"child",value:m,onChange:o,defaultChecked:i}),e.createElement("span",{className:"db ease",style:p},r))})):e.createElement("div",{className:"ptb30 tc g9 f12"},"无菜单数据"))},r=function(n){var r,c=n.data,s=void 0===c?[]:c,m=a();return e.createElement(l,{className:"jzer-menu",key:null==s||null===(r=s[0])||void 0===r?void 0:r.path,data:s,onChange:function(e){var a=e.target.value;t(a)?window.open(a):m.push(a)}})};export{r as default};