/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_pub/global/component/teleport-17.jsx":
/*!***************************************************!*\
  !*** ./src/_pub/global/component/teleport-17.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  // 挂载时执行\n  componentDidMount() {\n    if (!this.props.isUpdate) {\n      this.renderSubtree();\n    }\n  }\n  // 获取指定 dom\n  getNode = () => {\n    const {\n      el\n    } = this.props;\n    return el ? document.querySelector(el) : document.body;\n  };\n  // 更新时执行\n  componentDidUpdate() {\n    if (this.props.isUpdate) {\n      this.renderSubtree();\n    }\n  }\n  // 将要销毁时执行\n  componentWillUnmount() {\n    this.el && this.getNode().removeChild(this.el); // 移出节点\n  }\n  // 添加节点\n  retContainer = () => {\n    if (!this.el) {\n      const node = document.createElement(this.props.tag || 'div');\n      node.setAttribute('name', this.props.name ?? 'global'); // 设置节点属性\n      this.el = node;\n      this.getNode().appendChild(this.el);\n    }\n    return this.el;\n  };\n  // 获取 children 内容\n  retContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.children);\n  // 渲染到节点\n  renderSubtree = () => {\n    react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer());\n  };\n  render() {\n    return null;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/component/teleport-17.jsx?");

/***/ }),

/***/ "./src/_pub/global/template/data-loading.jsx":
/*!***************************************************!*\
  !*** ./src/_pub/global/template/data-loading.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cpt_teleport_17__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cpt/teleport-17 */ \"./src/_pub/global/component/teleport-17.jsx\");\n\n/* -------------------------------------------------------- Sync Component -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $config\n} = window;\n/* -------------------------------------------------------- SVG 动画图标 -- */\nconst Loading = ({\n  color,\n  size\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n  width: size,\n  height: size,\n  viewBox: \"0 0 100 100\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"circle\", {\n  fill: \"none\",\n  stroke: \"#fff\",\n  strokeWidth: \"4\",\n  cx: \"50\",\n  cy: \"50\",\n  r: \"44\",\n  style: {\n    opacity: 0.6\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"circle\", {\n  fill: \"#fff\",\n  stroke: color || $config.mainColor,\n  strokeWidth: \"3\",\n  cx: \"8\",\n  cy: \"54\",\n  r: \"6\",\n  transform: \"rotate(56.0809 50 48.6231)\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"animateTransform\", {\n  attributeName: \"transform\",\n  dur: \"2s\",\n  type: \"rotate\",\n  from: \"0 50 48\",\n  to: \"360 50 52\",\n  repeatCount: \"indefinite\"\n})));\n/* -------------------------------------------------------- 数据加载效果 -- */\nconst Index = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cpt_teleport_17__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  name: \"data-loading\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  id: \"jzer-loading\",\n  className: \"fix_lt wh tc dn\",\n  style: {\n    zIndex: 1999\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"fxmc wh\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"r8px\",\n  style: {\n    background: 'rgba(0,0,0,.8)',\n    minWidth: '90px',\n    padding: '8px 12px'\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"fxmc\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loading, {\n  size: \"60px\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"cf f12 lh20 mt5 jzer-loading-msg\"\n})))));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/data-loading.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"global/template/data-loading": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react_index_js","vendors-node_modules_react-dom_index_js"], function() { return __webpack_require__("./src/_pub/global/template/data-loading.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;