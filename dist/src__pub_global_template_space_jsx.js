"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_template_space_jsx"],{

/***/ "./src/_pub/global/template/space.jsx":
/*!********************************************!*\
  !*** ./src/_pub/global/template/space.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $config,\n  $\n} = window;\n/* -------------------------------------------------------- 设置组件空隙 -- */\nconst obj = {\n  center: 'fxmc',\n  end: 'fxmr'\n};\nconst Index = ({\n  children,\n  className,\n  align = 'start',\n  style,\n  gap = $config.btnSpace\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `${$.css(className)} ${obj[align] ?? 'fxm'}`,\n    style: {\n      gap,\n      ...style\n    }\n  }, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/space.jsx?");

/***/ })

}]);