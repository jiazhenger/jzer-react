"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_pagination_jsx"],{

/***/ "./src/_pub/global/plugin/antd/pagination.jsx":
/*!****************************************************!*\
  !*** ./src/_pub/global/plugin/antd/pagination.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/pagination/index.js\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $config,\n  $\n} = window;\n/* -------------------------------------------------------- 分页 -- */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t# 盒子 style */\n  pager,\n  /** @param {Object}\t\t\t# ajax.pager */\n  pag = {},\n  /** @param {Object}\t\t\t# 分页配置 */\n  align = 'fxr',\n  /** @param {Object}\t\t\t# ajax.pager */\n  onChange /** @param {Event}\t\t\t# 分页改变时执行*/\n}) => {\n  var _pager$data, _$config$paging, _$config$paging2;\n  return pager && (pager === null || pager === void 0 ? void 0 : (_pager$data = pager.data) === null || _pager$data === void 0 ? void 0 : _pager$data.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: `nowrap ${$.css(align)} ${$.css(className)}`,\n    style: {\n      style\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    size: \"small\",\n    current: pager.page ?? 1,\n    total: pager.total,\n    pageSize: pager.size,\n    onChange: (current, pageSize) => onChange === null || onChange === void 0 ? void 0 : onChange(current, pageSize),\n    showQuickJumper: true,\n    showSizeChanger: true,\n    hideOnSinglePage: pager.data.length === 0 || pager.total / (($config === null || $config === void 0 ? void 0 : (_$config$paging = $config.paging) === null || _$config$paging === void 0 ? void 0 : _$config$paging.pageSize) || 10) <= 1,\n    pageSizeOptions: $config === null || $config === void 0 ? void 0 : (_$config$paging2 = $config.paging) === null || _$config$paging2 === void 0 ? void 0 : _$config$paging2.pageSizeOptions\n  }, pag))) : null;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/pagination.jsx?");

/***/ })

}]);