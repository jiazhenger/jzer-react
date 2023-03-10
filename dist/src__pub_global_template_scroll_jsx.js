"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_template_scroll_jsx"],{

/***/ "./src/_pub/common/utils/isColor.js":
/*!******************************************!*\
  !*** ./src/_pub/common/utils/isColor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 设置背景颜色\r\n * @param {String} bgcolor # 可以是 calssName, 或是具体颜色值\r\n */\nconst Index = bgcolor => /^#/.test(bgcolor) || /^rgb/.test(bgcolor);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/isColor.js?");

/***/ }),

/***/ "./src/_pub/global/template/scroll.jsx":
/*!*********************************************!*\
  !*** ./src/_pub/global/template/scroll.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_isColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/isColor */ \"./src/_pub/common/utils/isColor.js\");\n\n/* -------------------------------------------------------- Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $\n} = window;\n/* -------------------------------------------------------- 滚动盒子 -- */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t\t# 盒子 style */\n  children,\n  /** @param {Component}\t\t\t# 默认 Slot */\n  bgcolor,\n  /** @param {String}\t\t\t\t# 背景颜色 */\n  scroll = 'oxys',\n  /** @param {String}\t\t\t\t# 滚动样式 */\n  scrollbar = 'scrollbar',\n  /** @param {String}\t\t\t\t# 滚动条样式 */\n  id /** @param {String}\t\t\t\t# 滚动盒子 id */\n}) => {\n  if ((0,_utils_isColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bgcolor)) {\n    style = {\n      backgroundColor: bgcolor\n    };\n    bgcolor = '';\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    id: id,\n    className: `abs_full ${$.css(bgcolor)} ${$.css(scroll)} ${$.css(!scroll, 'fv')} ${$.css(scroll, scrollbar)} ${$.css(className)}`,\n    style: style\n  }, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/scroll.jsx?");

/***/ })

}]);