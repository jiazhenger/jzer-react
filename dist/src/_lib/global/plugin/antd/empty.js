import e from"react";import{Empty as t}from"antd";var a=function(a){var r=a.data;a.text;var l=a.image,i=a.loading,m=a.className,o=a.simple,n=a.style,s=a.loadingText,E=void 0===s?"数据加载中":s,c=a.msg,d=void 0===c?"暂无数据":c;return l=o?t.PRESENTED_IMAGE_SIMPLE:t.PRESENTED_IMAGE_DEFAULT,Array.isArray(r)&&0===r.length?e.createElement("div",{className:"fxmc abs_full pt30 jzer-empty ".concat(m||""),style:n},e.createElement(t,{image:l,description:i?E+"...":d,style:{margin:0,color:"#999",fontSize:"12px"}})):null};export{a as default};
