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

/***/ "./src/_pub/common/utils/download.js":
/*!*******************************************!*\
  !*** ./src/_pub/common/utils/download.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// const dispatch = obj => {\n// \tconst ev = document.createEvent('MouseEvents')\n// \tev.initMouseEvent(\n// \t\t'click', \n// \t\ttrue, \n// \t\tfalse, \n// \t\twindow, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\tfalse, \n// \t\tfalse, \n// \t\tfalse, \n// \t\tfalse, \n// \t\t0, \n// \t\tnull\n// \t)\n// \tobj.dispatchEvent(ev)\n// }\n\nconst types = {\n  xlsx: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n  xls: 'vnd.ms-excel',\n  pdf: 'pdf',\n  word: 'vnd.openxmlformats-officedocument.wordprocessingml.document',\n  txt: 'text'\n};\nconst Index = {\n  // blobDispath(data, option) {\n  // \tconst {fileType = 'xlsx', fileName = 'download'} = option ?? {}\n\n  // \tconst urlObject = window.URL || window.webkitURL || window\n\n  // \tconst blob = new Blob([ data ],  { type: `application/${types[ fileType ]}; charset=utf-8`})\n\n  // \tconst link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')\n\n  // \tlink.href = urlObject.createObjectURL(blob)\n\n  // \tlink.download = fileName\n\n  // \tlink.style.display = 'none'\n\n  // \tdispatch(link)\n  // },\n  blob(data, option) {\n    const {\n      fileType = 'xlsx',\n      fileName = 'download'\n    } = option ?? {};\n    const urlObject = window.URL || window.webkitURL || window;\n    const blob = new Blob([data], {\n      type: `application/${types[fileType]}; charset=utf-8`\n    });\n    const link = document.createElement('a');\n    link.href = urlObject.createObjectURL(blob);\n    link.download = fileName;\n    link.style.display = 'none';\n    document.body.appendChild(link);\n    link.click();\n    document.body.removeChild(link);\n  },\n  // url 后台下载\n  form(url) {\n    const form = document.createElement('form');\n    form.method = 'post';\n    form.action = window.$config.api() + url;\n    form.target = '_blank';\n    // token 验证\n    const tokenInput = document.createElement('input');\n    tokenInput.type = 'hidden';\n    tokenInput.name = 'token';\n    tokenInput.value = window.$fn.getToken();\n    //\n    form.appendChild(tokenInput);\n    document.body.appendChild(form);\n    form.submit();\n    document.body.removeChild(form);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/download.js?");

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
/******/ 	__webpack_modules__["./src/_pub/common/utils/download.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;