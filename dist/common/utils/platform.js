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

/***/ "./src/_pub/common/utils/platform.js":
/*!*******************************************!*\
  !*** ./src/_pub/common/utils/platform.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// �ж�ƽ̨\nconst Index = (androidCallback, iosCallback, pcCallback) => {\n  const u = navigator.userAgent;\n  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;\n  const isIos = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);\n  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);\n  androidCallback && androidCallback();\n  iosCallback && iosCallback();\n  pcCallback && pcCallback();\n  return {\n    isAndroid,\n    isIos,\n    isPc: !isMobile\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/platform.js?");

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
/******/ 	__webpack_modules__["./src/_pub/common/utils/platform.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;