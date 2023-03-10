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

/***/ "./src/_pub/common/utils/upload.js":
/*!*****************************************!*\
  !*** ./src/_pub/common/utils/upload.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormDataUploader\": function() { return /* binding */ FormDataUploader; },\n/* harmony export */   \"getUpload\": function() { return /* binding */ getUpload; },\n/* harmony export */   \"upload\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* ====================================== 上传图片  ====================================== */\nconst {\n  $fn,\n  $http\n} = window;\nconst imageType = ['jpg', 'png', 'jpeg', 'gif'];\nconst maxMB = 2;\nconst maxKB = 1024 * 1024 * maxMB;\n\n// FormData 上传\nconst FormDataUploader = (name, files, param) => {\n  let fd = new FormData();\n  for (let i = 0; i < files.length; i++) {\n    fd.append(name, files[i]);\n  }\n  if (fd.get(name) === null) {\n    return;\n  }\n  if (param) {\n    for (var i in param) {\n      if (param.hasOwnProperty(i)) {\n        fd.append(i, param[i]);\n      }\n    }\n  }\n  return fd; // 相当于 { 'name':, ...param }\n};\n\nconst upload = ({\n  api,\n  change,\n  param,\n  way,\n  mul\n}) => {\n  let $upload = document.querySelector('#jz-upload');\n  if (!$upload) {\n    $upload = document.createElement('input');\n    if (mul) {\n      $upload.setAttribute('multiple', 'multiple');\n    }\n    $upload.setAttribute('type', 'file');\n  }\n  $upload.click();\n  $upload.onchange = e => {\n    const fd = FormDataUploader('file', e.target.files, param);\n    $http.upload(null, api, {\n      param: fd,\n      way\n    }).then(data => {\n      change === null || change === void 0 ? void 0 : change(data);\n    });\n    $upload.value = '';\n  };\n};\nconst getUpload = async (e, option) => {\n  const opt = {\n    name: 'file',\n    param: {},\n    ...option\n  };\n  if (!$fn.hasObject(e) || !e.target) {\n    return $fn.toast('未选择要上传的图片');\n  }\n  const files = e.target.files;\n  let yes = true;\n  for (var i = 0; i < files.length; i++) {\n    const file = files[i];\n    // 判断上传文件格式\n    const suffix = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();\n    if (imageType.indexOf(suffix) === -1) {\n      $fn.toast(file.name + '的格式必须为png、jpg、jpeg！');\n      yes = false;\n      break;\n    }\n    // 限制图片上传大小\n    if (file.size > maxKB) {\n      $fn.toast(file.name + '文件尺寸超过最大限制' + maxMB + 'M');\n      yes = false;\n      break;\n    }\n  }\n  if (!yes) return;\n  const fd = FormDataUploader(opt.name, files, opt.param);\n  return fd;\n};\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/upload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/_pub/common/utils/upload.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;