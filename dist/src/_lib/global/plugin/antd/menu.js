import e from"react";import{Menu as n}from"antd";var t=window.$fn,r=function(r){var l=r.data,a=r.onSelect,o=r.onClick;return t.hasArray(l)?e.createElement(n,{onSelect:a},l.map((function(t,r){return e.createElement(n.Item,{key:r,onClick:null==o?void 0:o.bind(null,t)},t.label)}))):null};export{r as default};
