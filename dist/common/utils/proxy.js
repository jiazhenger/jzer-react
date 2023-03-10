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

/***/ "./src/_pub/common/utils/proxy.js":
/*!****************************************!*\
  !*** ./src/_pub/common/utils/proxy.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// eventProxy.js\n//'use strict';\nconst _ = {\n  Class: {},\n  on(key, fn) {\n    if (this.Class[key] === undefined) {\n      this.Class[key] = [];\n    }\n    this.Class[key].push(fn);\n  },\n  off(key) {\n    this.Class[key] = [];\n  },\n  publish() {\n    if (arguments.length === 0) {\n      return false;\n    }\n    setTimeout(() => {\n      let key = arguments[0]; // key 为事件句柄\n      let args = [].concat(Array.prototype.slice.call(arguments, 1));\n      if (this.Class[key] !== undefined && this.Class[key].length > 0) {\n        for (var i in this.Class[key]) {\n          this.Class[key][i].apply(null, args);\n        }\n      }\n    });\n  },\n  listen() {\n    _.publish('refresh', this.state.key);\n    // 监听/订阅  事件\n    _.on('refresh', v => {\n      this.setState({\n        key: this.state.key++\n      });\n    });\n  },\n  refresh() {\n    this.publish('refresh');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/proxy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/_pub/common/utils/proxy.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;