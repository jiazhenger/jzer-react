"use strict";(self.webpackChunkjzer_react_template=self.webpackChunkjzer_react_template||[]).push([[557],{84173:function(e,t,n){var o=n(87462),i=n(45987),r=n(1413),u=n(15671),a=n(43144),s=n(97326),c=n(60136),l=n(98557),f=n(4942),p=n(67294),d=n(15407),h=n(94159),v=n(52378),m=["component","children","onVisibleChanged","onAllRemoved"],g=["status"],y=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Z,n=function(e){(0,c.Z)(d,e);var n=(0,l.Z)(d);function d(){var e;(0,u.Z)(this,d);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),(0,f.Z)((0,s.Z)(e),"state",{keyEntities:[]}),(0,f.Z)((0,s.Z)(e),"removeKey",(function(t){var n=e.state.keyEntities.map((function(e){return e.key!==t?e:(0,r.Z)((0,r.Z)({},e),{},{status:v.Td})}));return e.setState({keyEntities:n}),n.filter((function(e){return e.status!==v.Td})).length})),e}return(0,a.Z)(d,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,r=this.props,u=r.component,a=r.children,s=r.onVisibleChanged,c=r.onAllRemoved,l=(0,i.Z)(r,m),f=u||p.Fragment,d={};return y.forEach((function(e){d[e]=l[e],delete l[e]})),delete l.keys,p.createElement(f,l,n.map((function(n){var r=n.status,u=(0,i.Z)(n,g),l=r===v.zM||r===v.ff;return p.createElement(t,(0,o.Z)({},d,{key:u.key,visible:l,eventProps:u,onVisibleChanged:function(t){null==s||s(t,{key:u.key}),t||0===e.removeKey(u.key)&&c&&c()}}),a)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,o=t.keyEntities,i=(0,v.l4)(n);return{keyEntities:(0,v.uz)(o,i).filter((function(e){var t=o.find((function(t){var n=t.key;return e.key===n}));return!t||t.status!==v.Td||e.status!==v.p4}))}}}]),d}(p.Component);return(0,f.Z)(n,"defaultProps",{component:"div"}),n}(h.Cq)},2306:function(e,t,n){n.d(t,{Z:function(){return ut}});var o=n(1413),i=n(87462),r=n(15671),u=n(43144),a=n(97326),s=n(60136),c=n(98557),l=n(4942),f=n(67294),p=n(73935),d=n(75164),h=n(94999),v=n(34203),m=n(42550),g=n(64019),y=n(98924),w=(0,f.forwardRef)((function(e,t){var n=e.didUpdate,o=e.getContainer,i=e.children,r=(0,f.useRef)(),u=(0,f.useRef)();(0,f.useImperativeHandle)(t,(function(){return{}}));var a=(0,f.useRef)(!1);return!a.current&&(0,y.Z)()&&(u.current=o(),r.current=u.current.parentNode,a.current=!0),(0,f.useEffect)((function(){null==n||n(e)})),(0,f.useEffect)((function(){return null===u.current.parentNode&&null!==r.current&&r.current.appendChild(u.current),function(){var e,t;null===(e=u.current)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(u.current)}}),[]),u.current?p.createPortal(i,u.current):null})),b=n(94184),Z=n.n(b);function C(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}var T=n(29439),M=n(45987),x=n(31131),P=n(93587);function k(e){var t=e.prefixCls,n=e.motion,o=e.animation,i=e.transitionName;return n||(o?{motionName:"".concat(t,"-").concat(o)}:i?{motionName:i}:null)}function E(e){var t=e.prefixCls,n=e.visible,r=e.zIndex,u=e.mask,a=e.maskMotion,s=e.maskAnimation,c=e.maskTransitionName;if(!u)return null;var l={};return(a||c||s)&&(l=(0,o.Z)({motionAppear:!0},k({motion:a,prefixCls:t,transitionName:c,animation:s}))),f.createElement(P.Z,(0,i.Z)({},l,{visible:n,removeOnLeave:!0}),(function(e){var n=e.className;return f.createElement("div",{style:{zIndex:r},className:Z()("".concat(t,"-mask"),n)})}))}var O,D=n(71002);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function V(){if(void 0!==O)return O;O="";var e=document.createElement("p").style;for(var t in N)t+"Transform"in e&&(O=t);return O}function L(){return V()?"".concat(V(),"TransitionProperty"):"transitionProperty"}function W(){return V()?"".concat(V(),"Transform"):"transform"}function j(e,t){var n=L();n&&(e.style[n]=t,"transitionProperty"!==n&&(e.style.transitionProperty=t))}function F(e,t){var n=W();n&&(e.style[n]=t,"transform"!==n&&(e.style.transform=t))}var B,Y=/matrix\((.*)\)/,X=/matrix3d\((.*)\)/;function z(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function I(e,t,n){var o=n;if("object"!==H(t))return void 0!==o?("number"==typeof o&&(o="".concat(o,"px")),void(e.style[t]=o)):B(e,t);for(var i in t)t.hasOwnProperty(i)&&I(e,i,t[i])}function U(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var i=e.document;"number"!=typeof(n=i.documentElement[o])&&(n=i.body[o])}return n}function _(e){return U(e)}function q(e){return U(e,!0)}function K(e){var t=function(e){var t,n,o,i=e.ownerDocument,r=i.body,u=i&&i.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),o=Math.floor(t.top),{left:n-=u.clientLeft||r.clientLeft||0,top:o-=u.clientTop||r.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=_(o),t.top+=q(o),t}function $(e){return null!=e&&e==e.window}function G(e){return $(e)?e.document:9===e.nodeType?e:e.ownerDocument}var Q=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),J=/^(top|right|bottom|left)$/,ee="currentStyle",te="runtimeStyle",ne="left";function oe(e,t){return"left"===e?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function ie(e){return"left"===e?"right":"right"===e?"left":"top"===e?"bottom":"bottom"===e?"top":void 0}function re(e,t,n){"static"===I(e,"position")&&(e.style.position="relative");var o=-999,i=-999,r=oe("left",n),u=oe("top",n),a=ie(r),s=ie(u);"left"!==r&&(o=999),"top"!==u&&(i=999);var c,l="",f=K(e);("left"in t||"top"in t)&&(l=(c=e).style.transitionProperty||c.style[L()]||"",j(e,"none")),"left"in t&&(e.style[a]="",e.style[r]="".concat(o,"px")),"top"in t&&(e.style[s]="",e.style[u]="".concat(i,"px")),z(e);var p=K(e),d={};for(var h in t)if(t.hasOwnProperty(h)){var v=oe(h,n),m="left"===h?o:i,g=f[h]-p[h];d[v]=v===h?m+g:m-g}I(e,d),z(e),("left"in t||"top"in t)&&j(e,l);var y={};for(var w in t)if(t.hasOwnProperty(w)){var b=oe(w,n),Z=t[w]-f[w];y[b]=w===b?d[b]+Z:d[b]-Z}I(e,y)}function ue(e,t){for(var n=0;n<e.length;n++)t(e[n])}function ae(e){return"border-box"===B(e,"boxSizing")}"undefined"!=typeof window&&(B=window.getComputedStyle?function(e,t,n){var o=n,i="",r=G(e);return(o=o||r.defaultView.getComputedStyle(e,null))&&(i=o.getPropertyValue(t)||o[t]),i}:function(e,t){var n=e[ee]&&e[ee][t];if(Q.test(n)&&!J.test(t)){var o=e.style,i=o[ne],r=e[te][ne];e[te][ne]=e[ee][ne],o[ne]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[ne]=i,e[te][ne]=r}return""===n?"auto":n});var se=["margin","border","padding"],ce=-1,le=2,fe=1;function pe(e,t,n){var o,i,r,u=0;for(i=0;i<t.length;i++)if(o=t[i])for(r=0;r<n.length;r++){var a;a="border"===o?"".concat(o).concat(n[r],"Width"):o+n[r],u+=parseFloat(B(e,a))||0}return u}var de={getParent:function(e){var t=e;do{t=11===t.nodeType&&t.host?t.host:t.parentNode}while(t&&1!==t.nodeType&&9!==t.nodeType);return t}};function he(e,t,n){var o=n;if($(e))return"width"===t?de.viewportWidth(e):de.viewportHeight(e);if(9===e.nodeType)return"width"===t?de.docWidth(e):de.docHeight(e);var i="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?Math.floor(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().height),u=ae(e),a=0;(null==r||r<=0)&&(r=void 0,(null==(a=B(e,t))||Number(a)<0)&&(a=e.style[t]||0),a=Math.floor(parseFloat(a))||0),void 0===o&&(o=u?fe:ce);var s=void 0!==r||u,c=r||a;return o===ce?s?c-pe(e,["border","padding"],i):a:s?o===fe?c:c+(o===le?-pe(e,["border"],i):pe(e,["margin"],i)):a+pe(e,se.slice(o),i)}ue(["Width","Height"],(function(e){de["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],de["viewport".concat(e)](n))},de["viewport".concat(e)]=function(t){var n="client".concat(e),o=t.document,i=o.body,r=o.documentElement[n];return"CSS1Compat"===o.compatMode&&r||i&&i[n]||r}}));var ve={position:"absolute",visibility:"hidden",display:"block"};function me(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o,i=t[0];return 0!==i.offsetWidth?o=he.apply(void 0,t):function(e,n,i){var r,u={},a=e.style;for(r in n)n.hasOwnProperty(r)&&(u[r]=a[r],a[r]=n[r]);for(r in function(){o=he.apply(void 0,t)}.call(e),n)n.hasOwnProperty(r)&&(a[r]=u[r])}(i,ve),o}function ge(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}ue(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);de["outer".concat(t)]=function(t,n){return t&&me(t,e,n?0:fe)};var n="width"===e?["Left","Right"]:["Top","Bottom"];de[e]=function(t,o){var i=o;return void 0!==i?t?(ae(t)&&(i+=pe(t,["padding","border"],n)),I(t,e,i)):void 0:t&&me(t,e,ce)}}));var ye={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:G,offset:function(e,t,n){if(void 0===t)return K(e);!function(e,t,n){if(n.ignoreShake){var o=K(e),i=o.left.toFixed(0),r=o.top.toFixed(0),u=t.left.toFixed(0),a=t.top.toFixed(0);if(i===u&&r===a)return}n.useCssRight||n.useCssBottom?re(e,t,n):n.useCssTransform&&W()in document.body.style?function(e,t){var n=K(e),o=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(W());if(n&&"none"!==n){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return{x:0,y:0}}(e),i={x:o.x,y:o.y};"left"in t&&(i.x=o.x+t.left-n.left),"top"in t&&(i.y=o.y+t.top-n.top),function(e,t){var n=window.getComputedStyle(e,null),o=n.getPropertyValue("transform")||n.getPropertyValue(W());if(o&&"none"!==o){var i,r=o.match(Y);r?((i=(r=r[1]).split(",").map((function(e){return parseFloat(e,10)})))[4]=t.x,i[5]=t.y,F(e,"matrix(".concat(i.join(","),")"))):((i=o.match(X)[1].split(",").map((function(e){return parseFloat(e,10)})))[12]=t.x,i[13]=t.y,F(e,"matrix3d(".concat(i.join(","),")")))}else F(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}(e,i)}(e,t):re(e,t,n)}(e,t,n||{})},isWindow:$,each:ue,css:I,clone:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);if(e.overflow)for(t in e)e.hasOwnProperty(t)&&(n.overflow[t]=e.overflow[t]);return n},mix:ge,getWindowScrollLeft:function(e){return _(e)},getWindowScrollTop:function(e){return q(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)ye.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};ge(ye,de);var we=ye.getParent;function be(e){if(ye.isWindow(e)||9===e.nodeType)return null;var t,n=ye.getDocument(e).body,o=ye.css(e,"position");if("fixed"!==o&&"absolute"!==o)return"html"===e.nodeName.toLowerCase()?null:we(e);for(t=we(e);t&&t!==n&&9!==t.nodeType;t=we(t))if("static"!==(o=ye.css(t,"position")))return t;return null}var Ze=ye.getParent;function Ce(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=be(e),i=ye.getDocument(e),r=i.defaultView||i.parentWindow,u=i.body,a=i.documentElement;o;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===o.clientWidth||o===u||o===a||"visible"===ye.css(o,"overflow")){if(o===u||o===a)break}else{var s=ye.offset(o);s.left+=o.clientLeft,s.top+=o.clientTop,n.top=Math.max(n.top,s.top),n.right=Math.min(n.right,s.left+o.clientWidth),n.bottom=Math.min(n.bottom,s.top+o.clientHeight),n.left=Math.max(n.left,s.left)}o=be(o)}var c=null;ye.isWindow(e)||9===e.nodeType||(c=e.style.position,"absolute"===ye.css(e,"position")&&(e.style.position="fixed"));var l=ye.getWindowScrollLeft(r),f=ye.getWindowScrollTop(r),p=ye.viewportWidth(r),d=ye.viewportHeight(r),h=a.scrollWidth,v=a.scrollHeight,m=window.getComputedStyle(u);if("hidden"===m.overflowX&&(h=r.innerWidth),"hidden"===m.overflowY&&(v=r.innerHeight),e.style&&(e.style.position=c),t||function(e){if(ye.isWindow(e)||9===e.nodeType)return!1;var t=ye.getDocument(e),n=t.body,o=null;for(o=Ze(e);o&&o!==n&&o!==t;o=Ze(o))if("fixed"===ye.css(o,"position"))return!0;return!1}(e))n.left=Math.max(n.left,l),n.top=Math.max(n.top,f),n.right=Math.min(n.right,l+p),n.bottom=Math.min(n.bottom,f+d);else{var g=Math.max(h,l+p);n.right=Math.min(n.right,g);var y=Math.max(v,f+d);n.bottom=Math.min(n.bottom,y)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Te(e){var t,n,o;if(ye.isWindow(e)||9===e.nodeType){var i=ye.getWindow(e);t={left:ye.getWindowScrollLeft(i),top:ye.getWindowScrollTop(i)},n=ye.viewportWidth(i),o=ye.viewportHeight(i)}else t=ye.offset(e),n=ye.outerWidth(e),o=ye.outerHeight(e);return t.width=n,t.height=o,t}function Me(e,t){var n=t.charAt(0),o=t.charAt(1),i=e.width,r=e.height,u=e.left,a=e.top;return"c"===n?a+=r/2:"b"===n&&(a+=r),"c"===o?u+=i/2:"r"===o&&(u+=i),{left:u,top:a}}function xe(e,t,n,o,i){var r=Me(t,n[1]),u=Me(e,n[0]),a=[u.left-r.left,u.top-r.top];return{left:Math.round(e.left-a[0]+o[0]-i[0]),top:Math.round(e.top-a[1]+o[1]-i[1])}}function Pe(e,t,n){return e.left<n.left||e.left+t.width>n.right}function ke(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Ee(e,t,n){var o=[];return ye.each(e,(function(e){o.push(e.replace(t,(function(e){return n[e]})))})),o}function Oe(e,t){return e[t]=-e[t],e}function De(e,t){return(/%$/.test(e)?parseInt(e.substring(0,e.length-1),10)/100*t:parseInt(e,10))||0}function Se(e,t){e[0]=De(e[0],t.width),e[1]=De(e[1],t.height)}function Re(e,t,n,o){var i=n.points,r=n.offset||[0,0],u=n.targetOffset||[0,0],a=n.overflow,s=n.source||e;r=[].concat(r),u=[].concat(u);var c={},l=0,f=Ce(s,!(!(a=a||{})||!a.alwaysByViewport)),p=Te(s);Se(r,p),Se(u,t);var d=xe(p,t,i,r,u),h=ye.merge(p,d);if(f&&(a.adjustX||a.adjustY)&&o){if(a.adjustX&&Pe(d,p,f)){var v=Ee(i,/[lr]/gi,{l:"r",r:"l"}),m=Oe(r,0),g=Oe(u,0);(function(e,t,n){return e.left>n.right||e.left+t.width<n.left})(xe(p,t,v,m,g),p,f)||(l=1,i=v,r=m,u=g)}if(a.adjustY&&ke(d,p,f)){var y=Ee(i,/[tb]/gi,{t:"b",b:"t"}),w=Oe(r,1),b=Oe(u,1);(function(e,t,n){return e.top>n.bottom||e.top+t.height<n.top})(xe(p,t,y,w,b),p,f)||(l=1,i=y,r=w,u=b)}l&&(d=xe(p,t,i,r,u),ye.mix(h,d));var Z=Pe(d,p,f),C=ke(d,p,f);if(Z||C){var T=i;Z&&(T=Ee(i,/[lr]/gi,{l:"r",r:"l"})),C&&(T=Ee(i,/[tb]/gi,{t:"b",b:"t"})),i=T,r=n.offset||[0,0],u=n.targetOffset||[0,0]}c.adjustX=a.adjustX&&Z,c.adjustY=a.adjustY&&C,(c.adjustX||c.adjustY)&&(h=function(e,t,n,o){var i=ye.clone(e),r={width:t.width,height:t.height};return o.adjustX&&i.left<n.left&&(i.left=n.left),o.resizeWidth&&i.left>=n.left&&i.left+r.width>n.right&&(r.width-=i.left+r.width-n.right),o.adjustX&&i.left+r.width>n.right&&(i.left=Math.max(n.right-r.width,n.left)),o.adjustY&&i.top<n.top&&(i.top=n.top),o.resizeHeight&&i.top>=n.top&&i.top+r.height>n.bottom&&(r.height-=i.top+r.height-n.bottom),o.adjustY&&i.top+r.height>n.bottom&&(i.top=Math.max(n.bottom-r.height,n.top)),ye.mix(i,r)}(d,p,f,c))}return h.width!==p.width&&ye.css(s,"width",ye.width(s)+h.width-p.width),h.height!==p.height&&ye.css(s,"height",ye.height(s)+h.height-p.height),ye.offset(s,{left:h.left,top:h.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:i,offset:r,targetOffset:u,overflow:c}}function He(e,t,n){var o=n.target||t,i=Te(o),r=!function(e,t){var n=Ce(e,t),o=Te(e);return!n||o.left+o.width<=n.left||o.top+o.height<=n.top||o.left>=n.right||o.top>=n.bottom}(o,n.overflow&&n.overflow.alwaysByViewport);return Re(e,i,n,r)}He.__getOffsetParent=be,He.__getVisibleRectForElement=Ce;var Ae=n(91881),Ne=n(5110),Ve=n(8410),Le=n(91033);function We(e,t){var n=null,o=null,i=new Le.Z((function(e){var i=(0,T.Z)(e,1)[0].target;if(document.documentElement.contains(i)){var r=i.getBoundingClientRect(),u=r.width,a=r.height,s=Math.floor(u),c=Math.floor(a);n===s&&o===c||Promise.resolve().then((function(){t({width:s,height:c})})),n=s,o=c}}));return e&&i.observe(e),function(){i.disconnect()}}function je(e){return"function"!=typeof e?null:e()}function Fe(e){return"object"===(0,D.Z)(e)&&e?e:null}var Be=function(e,t){var n=e.children,o=e.disabled,i=e.target,r=e.align,u=e.onAlign,a=e.monitorWindowResize,s=e.monitorBufferTime,c=void 0===s?0:s,l=f.useRef({}),p=f.useRef(),d=f.Children.only(n),v=f.useRef({});v.current.disabled=o,v.current.target=i,v.current.align=r,v.current.onAlign=u;var y=function(e,t){var n=f.useRef(!1),o=f.useRef(null);function i(){window.clearTimeout(o.current)}return[function e(r){if(i(),n.current&&!0!==r)o.current=window.setTimeout((function(){n.current=!1,e()}),t);else{if(!1===function(){var e=v.current,t=e.disabled,n=e.target,o=e.align,i=e.onAlign,r=p.current;if(!t&&n&&r){var u,a=je(n),s=Fe(n);l.current.element=a,l.current.point=s,l.current.align=o;var c=document.activeElement;return a&&(0,Ne.Z)(a)?u=He(r,a,o):s&&(u=function(e,t,n){var o,i,r=ye.getDocument(e),u=r.defaultView||r.parentWindow,a=ye.getWindowScrollLeft(u),s=ye.getWindowScrollTop(u),c=ye.viewportWidth(u),l=ye.viewportHeight(u),f={left:o="pageX"in t?t.pageX:a+t.clientX,top:i="pageY"in t?t.pageY:s+t.clientY,width:0,height:0},p=o>=0&&o<=a+c&&i>=0&&i<=s+l,d=[n.points[0],"cc"];return Re(e,f,R(R({},n),{},{points:d}),p)}(r,s,o)),function(e,t){e!==document.activeElement&&(0,h.Z)(t,e)&&"function"==typeof e.focus&&e.focus()}(c,r),i&&u&&i(r,u),!0}return!1}())return;n.current=!0,o.current=window.setTimeout((function(){n.current=!1}),t)}},function(){n.current=!1,i()}]}(0,c),w=(0,T.Z)(y,2),b=w[0],Z=w[1],C=f.useState(),M=(0,T.Z)(C,2),x=M[0],P=M[1],k=f.useState(),E=(0,T.Z)(k,2),O=E[0],D=E[1];return(0,Ve.Z)((function(){P(je(i)),D(Fe(i))})),f.useEffect((function(){var e,t;l.current.element===x&&((e=l.current.point)===(t=O)||e&&t&&("pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t&&e.clientX===t.clientX&&e.clientY===t.clientY))&&(0,Ae.Z)(l.current.align,r)||b()})),f.useEffect((function(){return We(p.current,b)}),[p.current]),f.useEffect((function(){return We(x,b)}),[x]),f.useEffect((function(){o?Z():b()}),[o]),f.useEffect((function(){if(a)return(0,g.Z)(window,"resize",b).remove}),[a]),f.useEffect((function(){return function(){Z()}}),[]),f.useImperativeHandle(t,(function(){return{forceAlign:function(){return b(!0)}}})),f.isValidElement(d)&&(d=f.cloneElement(d,{ref:(0,m.sQ)(d.ref,p)})),d},Ye=f.forwardRef(Be);Ye.displayName="Align";var Xe=Ye,ze=n(74165),Ie=n(15861),Ue=n(30470),_e=["measure","alignPre","align",null,"motion"],qe=f.forwardRef((function(e,t){var n=e.visible,r=e.prefixCls,u=e.className,a=e.style,s=e.children,c=e.zIndex,l=e.stretch,p=e.destroyPopupOnHide,h=e.forceRender,v=e.align,m=e.point,g=e.getRootDomNode,y=e.getClassNameFromAlign,w=e.onAlign,b=e.onMouseEnter,C=e.onMouseLeave,M=e.onMouseDown,x=e.onTouchStart,E=e.onClick,O=(0,f.useRef)(),D=(0,f.useRef)(),S=(0,f.useState)(),R=(0,T.Z)(S,2),H=R[0],A=R[1],N=function(e){var t=f.useState({width:0,height:0}),n=(0,T.Z)(t,2),o=n[0],i=n[1];return[f.useMemo((function(){var t={};if(e){var n=o.width,i=o.height;-1!==e.indexOf("height")&&i?t.height=i:-1!==e.indexOf("minHeight")&&i&&(t.minHeight=i),-1!==e.indexOf("width")&&n?t.width=n:-1!==e.indexOf("minWidth")&&n&&(t.minWidth=n)}return t}),[e,o]),function(e){var t=e.offsetWidth,n=e.offsetHeight,o=e.getBoundingClientRect(),r=o.width,u=o.height;Math.abs(t-r)<1&&Math.abs(n-u)<1&&(t=r,n=u),i({width:t,height:n})}]}(l),V=(0,T.Z)(N,2),L=V[0],W=V[1],j=function(e,t){var n=(0,Ue.Z)(null),o=(0,T.Z)(n,2),i=o[0],r=o[1],u=(0,f.useRef)();function a(e){r(e,!0)}function s(){d.Z.cancel(u.current)}return(0,f.useEffect)((function(){a("measure")}),[e]),(0,f.useEffect)((function(){"measure"===i&&(l&&W(g())),i&&(u.current=(0,d.Z)((0,Ie.Z)((0,ze.Z)().mark((function e(){var t,n;return(0,ze.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=_e.indexOf(i),(n=_e[t+1])&&-1!==t&&a(n);case 3:case"end":return e.stop()}}),e)})))))}),[i]),(0,f.useEffect)((function(){return function(){s()}}),[]),[i,function(e){s(),u.current=(0,d.Z)((function(){a((function(e){switch(i){case"align":return"motion";case"motion":return"stable"}return e})),null==e||e()}))}]}(n),F=(0,T.Z)(j,2),B=F[0],Y=F[1],X=(0,f.useState)(0),z=(0,T.Z)(X,2),I=z[0],U=z[1],_=(0,f.useRef)();function q(){var e;null===(e=O.current)||void 0===e||e.forceAlign()}function K(e,t){var n=y(t);H!==n&&A(n),U((function(e){return e+1})),"align"===B&&(null==w||w(e,t))}(0,Ve.Z)((function(){"alignPre"===B&&U(0)}),[B]),(0,Ve.Z)((function(){"align"===B&&(I<3?q():Y((function(){var e;null===(e=_.current)||void 0===e||e.call(_)})))}),[I]);var $=(0,o.Z)({},k(e));function G(){return new Promise((function(e){_.current=e}))}["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach((function(e){var t=$[e];$[e]=function(e,n){return Y(),null==t?void 0:t(e,n)}})),f.useEffect((function(){$.motionName||"motion"!==B||Y()}),[$.motionName,B]),f.useImperativeHandle(t,(function(){return{forceAlign:q,getElement:function(){return D.current}}}));var Q=(0,o.Z)((0,o.Z)({},L),{},{zIndex:c,opacity:"motion"!==B&&"stable"!==B&&n?0:void 0,pointerEvents:n||"stable"===B?void 0:"none"},a),J=!0;null==v||!v.points||"align"!==B&&"stable"!==B||(J=!1);var ee=s;return f.Children.count(s)>1&&(ee=f.createElement("div",{className:"".concat(r,"-content")},s)),f.createElement(P.Z,(0,i.Z)({visible:n,ref:D,leavedClassName:"".concat(r,"-hidden")},$,{onAppearPrepare:G,onEnterPrepare:G,removeOnLeave:p,forceRender:h}),(function(e,t){var n=e.className,i=e.style,a=Z()(r,u,H,n);return f.createElement(Xe,{target:m||g,key:"popup",ref:O,monitorWindowResize:!0,disabled:J,align:v,onAlign:K},f.createElement("div",{ref:t,className:a,onMouseEnter:b,onMouseLeave:C,onMouseDownCapture:M,onTouchStartCapture:x,onClick:E,style:(0,o.Z)((0,o.Z)({},i),Q)},ee))}))}));qe.displayName="PopupInner";var Ke=qe,$e=f.forwardRef((function(e,t){var n=e.prefixCls,r=e.visible,u=e.zIndex,a=e.children,s=e.mobile,c=(s=void 0===s?{}:s).popupClassName,l=s.popupStyle,p=s.popupMotion,d=void 0===p?{}:p,h=s.popupRender,v=e.onClick,m=f.useRef();f.useImperativeHandle(t,(function(){return{forceAlign:function(){},getElement:function(){return m.current}}}));var g=(0,o.Z)({zIndex:u},l),y=a;return f.Children.count(a)>1&&(y=f.createElement("div",{className:"".concat(n,"-content")},a)),h&&(y=h(y)),f.createElement(P.Z,(0,i.Z)({visible:r,ref:m,removeOnLeave:!0},d),(function(e,t){var i=e.className,r=e.style,u=Z()(n,c,i);return f.createElement("div",{ref:t,className:u,onClick:v,style:(0,o.Z)((0,o.Z)({},r),g)},y)}))}));$e.displayName="MobilePopupInner";var Ge=$e,Qe=["visible","mobile"],Je=f.forwardRef((function(e,t){var n=e.visible,r=e.mobile,u=(0,M.Z)(e,Qe),a=(0,f.useState)(n),s=(0,T.Z)(a,2),c=s[0],l=s[1],p=(0,f.useState)(!1),d=(0,T.Z)(p,2),h=d[0],v=d[1],m=(0,o.Z)((0,o.Z)({},u),{},{visible:c});(0,f.useEffect)((function(){l(n),n&&r&&v((0,x.Z)())}),[n,r]);var g=h?f.createElement(Ge,(0,i.Z)({},m,{mobile:r,ref:t})):f.createElement(Ke,(0,i.Z)({},m,{ref:t}));return f.createElement("div",null,f.createElement(E,m),g)}));Je.displayName="Popup";var et=Je,tt=f.createContext(null);function nt(){}var ot,it,rt=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],ut=(ot=w,it=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e){var o,u;return(0,r.Z)(this,n),o=t.call(this,e),(0,l.Z)((0,a.Z)(o),"popupRef",f.createRef()),(0,l.Z)((0,a.Z)(o),"triggerRef",f.createRef()),(0,l.Z)((0,a.Z)(o),"portalContainer",void 0),(0,l.Z)((0,a.Z)(o),"attachId",void 0),(0,l.Z)((0,a.Z)(o),"clickOutsideHandler",void 0),(0,l.Z)((0,a.Z)(o),"touchOutsideHandler",void 0),(0,l.Z)((0,a.Z)(o),"contextMenuOutsideHandler1",void 0),(0,l.Z)((0,a.Z)(o),"contextMenuOutsideHandler2",void 0),(0,l.Z)((0,a.Z)(o),"mouseDownTimeout",void 0),(0,l.Z)((0,a.Z)(o),"focusTime",void 0),(0,l.Z)((0,a.Z)(o),"preClickTime",void 0),(0,l.Z)((0,a.Z)(o),"preTouchTime",void 0),(0,l.Z)((0,a.Z)(o),"delayTimer",void 0),(0,l.Z)((0,a.Z)(o),"hasPopupMouseDown",void 0),(0,l.Z)((0,a.Z)(o),"onMouseEnter",(function(e){var t=o.props.mouseEnterDelay;o.fireEvents("onMouseEnter",e),o.delaySetPopupVisible(!0,t,t?null:e)})),(0,l.Z)((0,a.Z)(o),"onMouseMove",(function(e){o.fireEvents("onMouseMove",e),o.setPoint(e)})),(0,l.Z)((0,a.Z)(o),"onMouseLeave",(function(e){o.fireEvents("onMouseLeave",e),o.delaySetPopupVisible(!1,o.props.mouseLeaveDelay)})),(0,l.Z)((0,a.Z)(o),"onPopupMouseEnter",(function(){o.clearDelayTimer()})),(0,l.Z)((0,a.Z)(o),"onPopupMouseLeave",(function(e){var t;e.relatedTarget&&!e.relatedTarget.setTimeout&&(0,h.Z)(null===(t=o.popupRef.current)||void 0===t?void 0:t.getElement(),e.relatedTarget)||o.delaySetPopupVisible(!1,o.props.mouseLeaveDelay)})),(0,l.Z)((0,a.Z)(o),"onFocus",(function(e){o.fireEvents("onFocus",e),o.clearDelayTimer(),o.isFocusToShow()&&(o.focusTime=Date.now(),o.delaySetPopupVisible(!0,o.props.focusDelay))})),(0,l.Z)((0,a.Z)(o),"onMouseDown",(function(e){o.fireEvents("onMouseDown",e),o.preClickTime=Date.now()})),(0,l.Z)((0,a.Z)(o),"onTouchStart",(function(e){o.fireEvents("onTouchStart",e),o.preTouchTime=Date.now()})),(0,l.Z)((0,a.Z)(o),"onBlur",(function(e){o.fireEvents("onBlur",e),o.clearDelayTimer(),o.isBlurToHide()&&o.delaySetPopupVisible(!1,o.props.blurDelay)})),(0,l.Z)((0,a.Z)(o),"onContextMenu",(function(e){e.preventDefault(),o.fireEvents("onContextMenu",e),o.setPopupVisible(!0,e)})),(0,l.Z)((0,a.Z)(o),"onContextMenuClose",(function(){o.isContextMenuToShow()&&o.close()})),(0,l.Z)((0,a.Z)(o),"onClick",(function(e){if(o.fireEvents("onClick",e),o.focusTime){var t;if(o.preClickTime&&o.preTouchTime?t=Math.min(o.preClickTime,o.preTouchTime):o.preClickTime?t=o.preClickTime:o.preTouchTime&&(t=o.preTouchTime),Math.abs(t-o.focusTime)<20)return;o.focusTime=0}o.preClickTime=0,o.preTouchTime=0,o.isClickToShow()&&(o.isClickToHide()||o.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var n=!o.state.popupVisible;(o.isClickToHide()&&!n||n&&o.isClickToShow())&&o.setPopupVisible(!o.state.popupVisible,e)})),(0,l.Z)((0,a.Z)(o),"onPopupMouseDown",(function(){var e;o.hasPopupMouseDown=!0,clearTimeout(o.mouseDownTimeout),o.mouseDownTimeout=window.setTimeout((function(){o.hasPopupMouseDown=!1}),0),o.context&&(e=o.context).onPopupMouseDown.apply(e,arguments)})),(0,l.Z)((0,a.Z)(o),"onDocumentClick",(function(e){if(!o.props.mask||o.props.maskClosable){var t=e.target,n=o.getRootDomNode(),i=o.getPopupDomNode();(0,h.Z)(n,t)&&!o.isContextMenuOnly()||(0,h.Z)(i,t)||o.hasPopupMouseDown||o.close()}})),(0,l.Z)((0,a.Z)(o),"getRootDomNode",(function(){var e=o.props.getTriggerDOMNode;if(e)return e(o.triggerRef.current);try{var t=(0,v.Z)(o.triggerRef.current);if(t)return t}catch(e){}return p.findDOMNode((0,a.Z)(o))})),(0,l.Z)((0,a.Z)(o),"getPopupClassNameFromAlign",(function(e){var t=[],n=o.props,i=n.popupPlacement,r=n.builtinPlacements,u=n.prefixCls,a=n.alignPoint,s=n.getPopupClassNameFromAlign;return i&&r&&t.push(function(e,t,n,o){for(var i=n.points,r=Object.keys(e),u=0;u<r.length;u+=1){var a=r[u];if(C(e[a].points,i,o))return"".concat(t,"-placement-").concat(a)}return""}(r,u,e,a)),s&&t.push(s(e)),t.join(" ")})),(0,l.Z)((0,a.Z)(o),"getComponent",(function(){var e=o.props,t=e.prefixCls,n=e.destroyPopupOnHide,r=e.popupClassName,u=e.onPopupAlign,a=e.popupMotion,s=e.popupAnimation,c=e.popupTransitionName,l=e.popupStyle,p=e.mask,d=e.maskAnimation,h=e.maskTransitionName,v=e.maskMotion,m=e.zIndex,g=e.popup,y=e.stretch,w=e.alignPoint,b=e.mobile,Z=e.forceRender,C=e.onPopupClick,T=o.state,M=T.popupVisible,x=T.point,P=o.getPopupAlign(),k={};return o.isMouseEnterToShow()&&(k.onMouseEnter=o.onPopupMouseEnter),o.isMouseLeaveToHide()&&(k.onMouseLeave=o.onPopupMouseLeave),k.onMouseDown=o.onPopupMouseDown,k.onTouchStart=o.onPopupMouseDown,f.createElement(et,(0,i.Z)({prefixCls:t,destroyPopupOnHide:n,visible:M,point:w&&x,className:r,align:P,onAlign:u,animation:s,getClassNameFromAlign:o.getPopupClassNameFromAlign},k,{stretch:y,getRootDomNode:o.getRootDomNode,style:l,mask:p,zIndex:m,transitionName:c,maskAnimation:d,maskTransitionName:h,maskMotion:v,ref:o.popupRef,motion:a,mobile:b,forceRender:Z,onClick:C}),"function"==typeof g?g():g)})),(0,l.Z)((0,a.Z)(o),"attachParent",(function(e){d.Z.cancel(o.attachId);var t,n=o.props,i=n.getPopupContainer,r=n.getDocument,u=o.getRootDomNode();i?(u||0===i.length)&&(t=i(u)):t=r(o.getRootDomNode()).body,t?t.appendChild(e):o.attachId=(0,d.Z)((function(){o.attachParent(e)}))})),(0,l.Z)((0,a.Z)(o),"getContainer",(function(){if(!o.portalContainer){var e=(0,o.props.getDocument)(o.getRootDomNode()).createElement("div");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",o.portalContainer=e}return o.attachParent(o.portalContainer),o.portalContainer})),(0,l.Z)((0,a.Z)(o),"setPoint",(function(e){o.props.alignPoint&&e&&o.setState({point:{pageX:e.pageX,pageY:e.pageY}})})),(0,l.Z)((0,a.Z)(o),"handlePortalUpdate",(function(){o.state.prevPopupVisible!==o.state.popupVisible&&o.props.afterPopupVisibleChange(o.state.popupVisible)})),(0,l.Z)((0,a.Z)(o),"triggerContextValue",{onPopupMouseDown:o.onPopupMouseDown}),u="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,o.state={prevPopupVisible:u,popupVisible:u},rt.forEach((function(e){o["fire".concat(e)]=function(t){o.fireEvents(e,t)}})),o}return(0,u.Z)(n,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,t=this.props;if(this.state.popupVisible)return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(e=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,g.Z)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,g.Z)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||t.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,g.Z)(e,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,g.Z)(window,"blur",this.onContextMenuClose)));this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),d.Z.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return(null===(e=this.popupRef.current)||void 0===e?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,t=e.popupPlacement,n=e.popupAlign,i=e.builtinPlacements;return t&&i?function(e,t,n){var i=e[t]||{};return(0,o.Z)((0,o.Z)({},i),n)}(i,t,n):n}},{key:"setPopupVisible",value:function(e,t){var n=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),n&&t&&e&&this.setPoint(t)}},{key:"delaySetPopupVisible",value:function(e,t,n){var o=this,i=1e3*t;if(this.clearDelayTimer(),i){var r=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=window.setTimeout((function(){o.setPopupVisible(e,r),o.clearDelayTimer()}),i)}else this.setPopupVisible(e,n)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire".concat(e)]:t[e]||n[e]}},{key:"isClickToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return"contextMenu"===e||1===e.length&&"contextMenu"===e[0]}},{key:"isContextMenuToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("blur")}},{key:"forcePopupAlign",value:function(){var e;this.state.popupVisible&&(null===(e=this.popupRef.current)||void 0===e||e.forceAlign())}},{key:"fireEvents",value:function(e,t){var n=this.props.children.props[e];n&&n(t);var o=this.props[e];o&&o(t)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,t=this.props,n=t.children,i=t.forceRender,r=t.alignPoint,u=t.className,a=t.autoDestroy,s=f.Children.only(n),c={key:"trigger"};this.isContextMenuToShow()?c.onContextMenu=this.onContextMenu:c.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(c.onClick=this.onClick,c.onMouseDown=this.onMouseDown,c.onTouchStart=this.onTouchStart):(c.onClick=this.createTwoChains("onClick"),c.onMouseDown=this.createTwoChains("onMouseDown"),c.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(c.onMouseEnter=this.onMouseEnter,r&&(c.onMouseMove=this.onMouseMove)):c.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?c.onMouseLeave=this.onMouseLeave:c.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(c.onFocus=this.onFocus,c.onBlur=this.onBlur):(c.onFocus=this.createTwoChains("onFocus"),c.onBlur=this.createTwoChains("onBlur"));var l=Z()(s&&s.props&&s.props.className,u);l&&(c.className=l);var p=(0,o.Z)({},c);(0,m.Yr)(s)&&(p.ref=(0,m.sQ)(this.triggerRef,s.ref));var d,h=f.cloneElement(s,p);return(e||this.popupRef.current||i)&&(d=f.createElement(ot,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&a&&(d=null),f.createElement(tt.Provider,{value:this.triggerContextValue},h,d)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.popupVisible,o={};return void 0!==n&&t.popupVisible!==n&&(o.popupVisible=n,o.prevPopupVisible=t.popupVisible),o}}]),n}(f.Component),(0,l.Z)(it,"contextType",tt),(0,l.Z)(it,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return""},getDocument:function(e){return e?e.ownerDocument:window.document},onPopupVisibleChange:nt,afterPopupVisibleChange:nt,onPopupAlign:nt,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),it)},64019:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(73935);function i(e,t,n,i){var r=o.unstable_batchedUpdates?function(e){o.unstable_batchedUpdates(n,e)}:n;return e.addEventListener&&e.addEventListener(t,r,i),{remove:function(){e.removeEventListener&&e.removeEventListener(t,r,i)}}}},5110:function(e,t){t.Z=function(e){if(!e)return!1;if(e instanceof HTMLElement&&e.offsetParent)return!0;if(e instanceof SVGGraphicsElement&&e.getBBox){var t=e.getBBox(),n=t.width,o=t.height;if(n||o)return!0}if(e instanceof HTMLElement&&e.getBoundingClientRect){var i=e.getBoundingClientRect(),r=i.width,u=i.height;if(r||u)return!0}return!1}},56982:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294);function i(e,t,n){var i=o.useRef({});return"value"in i.current&&!n(i.current.condition,t)||(i.current.value=e(),i.current.condition=t),i.current.value}},91881:function(e,t,n){var o=n(71002),i=n(80334);t.Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;return function e(t,u){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=r.has(t);if((0,i.ZP)(!s,"Warning: There may be circular references"),s)return!1;if(t===u)return!0;if(n&&a>1)return!1;r.add(t);var c=a+1;if(Array.isArray(t)){if(!Array.isArray(u)||t.length!==u.length)return!1;for(var l=0;l<t.length;l++)if(!e(t[l],u[l],c))return!1;return!0}if(t&&u&&"object"===(0,o.Z)(t)&&"object"===(0,o.Z)(u)){var f=Object.keys(t);return f.length===Object.keys(u).length&&f.every((function(n){return e(t[n],u[n],c)}))}return!1}(e,t)}},75164:function(e,t){var n=function(e){return+setTimeout(e,16)},o=function(e){return clearTimeout(e)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(n=function(e){return window.requestAnimationFrame(e)},o=function(e){return window.cancelAnimationFrame(e)});var i=0,r=new Map;function u(e){r.delete(e)}var a=function(e){var t=i+=1;return function o(i){if(0===i)u(t),e();else{var a=n((function(){o(i-1)}));r.set(t,a)}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),t};a.cancel=function(e){var t=r.get(e);return u(t),o(t)},t.Z=a},80334:function(e,t,n){n.d(t,{ET:function(){return a},Kp:function(){return i}});var o={};function i(e,t){}function r(e,t){}function u(e,t,n){t||o[n]||(e(!1,n),o[n]=!0)}function a(e,t){u(r,e,t)}t.ZP=function(e,t){u(i,e,t)}}}]);