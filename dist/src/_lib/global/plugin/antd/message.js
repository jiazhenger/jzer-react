import{message as n}from"antd";var t;n.config({top:"40%",duration:1}),window.addEventListener("mousedown",(function(t){var o=t.target.className;"string"!=typeof o||o.includes("ant-message-notice-content")||n.destroy()}));var o=function(n){clearTimeout(t),t=setTimeout(n)},r={success:function(t,r){o((function(){return n.success(t,r)}))},error:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;o((function(){return n.error(t,r)}))},info:function(t,r){o((function(){return n.info(t,r)}))},warning:function(t,r){o((function(){return n.warning(t,r)}))},warn:function(t,r){o((function(){return n.warn(t,r)}))},loading:function(t,r){o((function(){return n.loading(t,r)}))}};export{r as default};