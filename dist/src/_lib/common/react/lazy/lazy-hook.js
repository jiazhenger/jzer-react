import e from"../../../_node/@babel/runtime/helpers/esm/extends.js";import t from"../../../_node/@babel/runtime/helpers/esm/asyncToGenerator.js";import r from"../../../_node/@babel/runtime/helpers/esm/classCallCheck.js";import n from"../../../_node/@babel/runtime/helpers/esm/createClass.js";import o from"../../../_node/@babel/runtime/helpers/esm/assertThisInitialized.js";import s from"../../../_node/@babel/runtime/helpers/esm/inherits.js";import u from"../../../_node/@babel/runtime/helpers/esm/possibleConstructorReturn.js";import i from"../../../_node/@babel/runtime/helpers/esm/getPrototypeOf.js";import l from"../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import m from"../../../_node/@babel/runtime/regenerator/index.js";import a,{Component as c}from"react";function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var p=function(u,i){var p=null!=i?i:{},d=p.m,h=p.d;return function(i){s(y,c);var p,b=f(y);function y(){var e;r(this,y);for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e=b.call.apply(b,[this].concat(n)),l(o(e),"state",{Component:null}),l(o(e),"myRef",a.createRef()),l(o(e),"setComponent",(function(t){t=a.forwardRef(t),t=0===d?t:a.memo(t),e.setState({Component:t},(function(){var t,r;null===(t=(r=e.props).onRef)||void 0===t||t.call(r,e.myRef.current),y.ref=e.myRef.current}))})),e}return n(y,[{key:"componentDidMount",value:(p=t(m.mark((function e(){var t,r,n=this;return m.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,r=t.default,h?this.clear=setTimeout((function(){return n.setComponent(r)}),500):this.setComponent(r);case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.clear&&clearTimeout(this.clear),this.setState=function(e,t){return!1}}},{key:"render",value:function(){var t=this.state.Component;return t?a.createElement(t,e({ref:this.myRef},this.props)):null}}]),y}()};export{p as default};
