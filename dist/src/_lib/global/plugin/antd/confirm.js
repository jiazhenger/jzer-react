import{Modal as o}from"antd";var n=function(n){var e=n.title,t=void 0===e?"提示":e,i=n.msg,a=void 0===i?"确认删除？":i;n.okText;var c=n.cancelText,d=void 0===c?"取消":c,l=n.onOk,r=void 0===l?"确认":l,v=n.onCancel,f=n.type,m=void 0===f?"confirm":f,s=n.closable,w=void 0!==s&&s,u=n.width,x=o[m]({title:t,content:a,cancelText:d,onOk:r,centered:!1,closable:w,className:"confirm",width:u,onCancel:function(o){window.$fn.hasObject(o)||(v&&v(),o&&o())}});return window.modal=x,x};export{n as default};
