import{getRedirect as r,hasPath as e}from"../../utils/index.js";var c=function(c,t){var n=r(c);return function r(c){return c.forEach((function(c){c.checked=!1,Array.isArray(c.children)?((t||e(n,c.path))&&(c.checked=!0),r(c.children,c.path)):n===c.path&&(c.checked=!0)})),c}(c)};export{c as default};
