"use strict";(self.webpackChunkjzer_react_template=self.webpackChunkjzer_react_template||[]).push([[6439],{56439:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(67294),o=r(60883),i=r(7085),l=r(49101),a=function(e){return{img:{bool:"image/jpeg"===e||"image/png"===e||"image/jpg"===e,msg:"图片文件"},pdf:{bool:"application/pdf"===e,msg:"PDF 文件"},word:{bool:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e,msg:"word 文件"},excel:{bool:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e||"application/vnd.ms-excel"===e,msg:"Excel 文件"}}},u=function(e,n){return Array.isArray(e)?e.map((function(e,r){var t;return{uid:e,name:null!==(t=null==n?void 0:n.name)&&void 0!==t?t:e,status:"done",url:e}})):e?[{uid:e,status:"done",url:e,name:null!==(r=null==n?void 0:n.name)&&void 0!==r?r:e}]:[];var r};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!==c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;u=!1}else for(;!(u=(t=i.call(r)).done)&&(a.push(t.value),a.length!==n);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,n)||b(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){if(e){if("string"==typeof e)return y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,n):void 0}}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var v=window,h=v.$lazy,w=v.$fn,j=v.$config,O=h.load((function(){return Promise.all([r.e(490),r.e(2577),r.e(4448),r.e(1498),r.e(769),r.e(5817),r.e(1474)]).then(r.bind(r,41233))})),S=function(e,n){var r=e.className,c=e.name,f=e.label,b=(e.children,e.fileName),y=e.value,v=e.disabled,h=e.loading,S=e.onChange,E=e.onChanged,P=(e.out,e.fileType),x=void 0===P?"img":P,A=e.max,C=void 0===A?20:A,T=e.mul,k=e.showUploadList,z=void 0===k||k,N=e.api,I=void 0===N?"upload":N,L=e.param,$=e.btnText,D=void 0===$?"上传文件":$,_=e.size,G=e.listType,U=void 0===G?"picture-card":G,Z=e.antd,F=void 0===Z?{}:Z,M=e.btn,J=void 0===M?{}:M,R=g(t.useState([]),2),W=R[0],q=R[1],B=g(t.useState(h),2),H=B[0],K=B[1],Q=g(t.useState(),2),V=Q[0],X=Q[1],Y="picture-card"===U,ee=function(e){z&&q(e)};t.useEffect((function(){T?ee(u(y)):X(w.hasArray(y)?y[0]:y)}),[y]);var ne=function(){return h?t.createElement(i.Z,{className:"f30"}):t.createElement(l.Z,{className:"f30"})};return!T&&Y&&(z=!1),b||(b=T?"files[]":"file"),F=m({className:r,fileList:W,name:b,action:j.api()+I,listType:U,multiple:T,data:L,disabled:v||h,headers:{Authorization:w.getToken()},beforeUpload:function(e){var n=a(e.type);if(w.hasArray(x)){var r=[],t="";return x.forEach((function(e,o){t+=o===x.length-1?n[e].msg:n[e].msg+"、",n[e].bool&&r.push(0)})),0===r.length&&w.msg.warning("仅允许上传".concat(t,"!"),5),0!==r.length}if("excel"===x){var o=n.excel.bool;return o||w.msg.warning("仅允许上传".concat(n.excel.msg,"!"),5),o}if("img"===x){var i=n.img.bool;i||w.msg.warning("仅允许上传".concat(n.img.msg,"!"),5);var l=e.size/1024/1024<C;return l||w.msg.warning("图片必必须小于 20M!",5),i&&l}return"any"===x||(w.msg.warning("未允许的上传文件类型",5),!1)},showUploadList:z,onChange:function(e){var n=e.file,r=e.fileList,t=n.status,o=n.response;if("uploading"===t)q(r),K(!0);else if("done"===t){var i=null!=o?o:{},l=i.data,a=i.msg,s=i.code;if(200===s)if(w.msg.success("上传成功"),"img"===x){var g=null;ee((function(e){var r=[];if(T)l=u(l,n),r=(l=[].concat(d(e),d(l)).map((function(e,n){return m(m({},e),{},{uid:e.url})}))).filter((function(e){return e.url})),g=r.map((function(e){return e.url}));else if(l=u(l),r=Y?[]:l,w.hasArray(l)){var t=l[0].url;g=t}return r})),T||X(g);var b=c?{model:p({},c,g)}:null;null==E||E(m({value:g,label:f,name:c},b)),null==S||S(g)}else null==E||E(l),null==S||S(l),K(!1);else s===j.noLoginCode||s===j.LoginExpireCode?(w.msg.error(a),setTimeout((function(){return w.go("/login")}),200)):(w.msg.error(null!=a?a:"文件上传失败"),ee((function(e){return e.filter((function(e){return e.url}))})));K(!1)}else"removed"===t||"error"===t&&(w.msg.error("".concat(n.name," 文件上传失败!")),ee((function(e){return e.filter((function(e){return e.url}))})),K(!1))},onPreview:function(e){var n=e.url;/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG)$/.test(n)?window.$imageModalRef().open({src:n}):window.open(n)},onRemove:function(e){var n;ee((function(r){var t=r.indexOf(e),o=r.slice();o.splice(t,1),n=o.map((function(e){return e.url}))})),F.multiple||(n=null);var r=c?{model:p({},c,n)}:null;null==E||E(m({value:n,label:f,name:c},r)),null==S||S(n)}},F),t.createElement(o.Z,F,Y?F.multiple?t.createElement(ne,null):t.createElement(t.Fragment,null,V?t.createElement("img",{src:V,alt:"上传图片",style:{maxWidth:"100%",display:"inline-block"}}):t.createElement(ne,null),H&&V&&t.createElement("div",{className:"abs_lt i10 fxmc",style:{width:104,height:104,background:"rgba(0,0,0,.2)"}},t.createElement(i.Z,{style:{color:j.mainColor,fontSize:30}}))):t.createElement(O,s({stop:!1,loading:H,disabled:v,mode:"upload",size:_},J),t.createElement("span",null,D)))}}}]);