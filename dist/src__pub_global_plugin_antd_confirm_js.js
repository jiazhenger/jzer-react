"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_confirm_js"],{

/***/ "./src/_pub/global/plugin/antd/confirm.js":
/*!************************************************!*\
  !*** ./src/_pub/global/plugin/antd/confirm.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/modal/index.js\");\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- 确认弹窗 -- */\nconst Index = ({\n  title = '提示',\n  msg = '确认删除？',\n  okText,\n  cancelText = '取消',\n  onOk = '确认',\n  onCancel,\n  type = 'confirm',\n  closable = false,\n  width\n}) => {\n  const modal = antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"][type]({\n    title,\n    content: msg,\n    cancelText,\n    onOk,\n    centered: false,\n    closable,\n    className: 'confirm',\n    width,\n    onCancel: close => {\n      if (window.$fn.hasObject(close)) return;\n      onCancel && onCancel();\n      close && close();\n    }\n  });\n  window.modal = modal;\n  return modal;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/confirm.js?");

/***/ })

}]);