"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_empty_jsx-_6f6d0"],{

/***/ "./src/_pub/global/plugin/antd/empty.jsx":
/*!***********************************************!*\
  !*** ./src/_pub/global/plugin/antd/empty.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/empty/index.js\");\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- 空 -- */\nconst Index = ({\n  data,\n  text,\n  image,\n  loading,\n  className,\n  simple,\n  style,\n  loadingText = '数据加载中',\n  msg = '暂无数据'\n}) => {\n  image = simple ? antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PRESENTED_IMAGE_SIMPLE : antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PRESENTED_IMAGE_DEFAULT;\n  return Array.isArray(data) && data.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `fxmc abs_full pt30 jzer-empty ${className || ''}`,\n    style: style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    image: image,\n    description: loading ? loadingText + '...' : msg,\n    style: {\n      margin: 0,\n      color: '#999',\n      fontSize: '12px'\n    }\n  })) : null;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/empty.jsx?");

/***/ })

}]);