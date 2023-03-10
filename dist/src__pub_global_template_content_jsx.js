"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_template_content_jsx"],{

/***/ "./src/_pub/global/template/content.jsx":
/*!**********************************************!*\
  !*** ./src/_pub/global/template/content.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $config,\n  $lazy,\n  $\n} = window;\n/* -------------------------------------------------------- Async Component -- */\nconst Scrolll = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_global_template_scroll_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @tp/scroll */ \"./src/_pub/global/template/scroll.jsx\")));\n/* -------------------------------------------------------- 滚动盒子 -- */\nconst Index = ({\n  children,\n  /** @param {Component}\t\t\t# 默认 Slot */\n  contentClass,\n  /** @param {String}\t\t\t\t# 内容 className */\n  paddingClass,\n  /** @param {String}\t\t\t\t# 内容 padding */\n  contentStyle,\n  /** @param {Object}\t\t\t\t# 内容 style */\n  minWidth = $config.pageMinWidth,\n  /** @param {int}\t\t\t\t# 最小宽度 */\n  minHeight = $config.pageMinHeight,\n  /** @param {int}\t\t\t\t# 最小高度 */\n  header,\n  /** @param {Component}\t\t\t# 头部 */\n  footer,\n  /** @param {Component}\t\t\t# 页脚 */\n  // Scroll\n  className,\n  /** @param {String}\t\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t\t# 盒子 style */\n  bgcolor = 'bcf',\n  /** @param {String}\t\t\t\t# 背景颜色 */\n  scroll = 'oxys',\n  /** @param {String}\t\t\t\t# 滚动样式 */\n  scrollbar = 'scrollbar',\n  /** @param {String}\t\t\t\t# 滚动条样式 */\n  id = 'pageScroll' /** @param {String}\t\t\t\t# 滚动盒子 id */\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scrolll, {\n    className: className,\n    style: style,\n    id: id,\n    bgcolor: bgcolor,\n    scroll: scroll,\n    scrollbar: scrollbar\n  }, header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `${$.css(contentClass)} ${$.css(paddingClass)}`,\n    style: {\n      minWidth,\n      minHeight,\n      ...contentStyle\n    }\n  }, children), footer);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/content.jsx?");

/***/ })

}]);