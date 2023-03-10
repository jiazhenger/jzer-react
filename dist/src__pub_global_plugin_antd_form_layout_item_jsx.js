"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_form_layout_item_jsx"],{

/***/ "./src/_pub/global/plugin/antd/form/layout/item.jsx":
/*!**********************************************************!*\
  !*** ./src/_pub/global/plugin/antd/form/layout/item.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- FormItem -- */\nconst Index = ({\n  children,\n  /** @param {Compoennt}\t\t\t# Slot */\n  className,\n  /** @param {String}\t\t\t\t# 样式 className */\n  //\n  style,\n  /** @param {Object}\t\t\t\t# 样式 style */\n  mt,\n  /** @param {String}\t\t\t\t# 上边距 */\n  ml,\n  /** @param {String}\t\t\t\t# 左边距 */\n  mr,\n  /** @param {String}\t\t\t\t# 右边距 */\n  mb = 0,\n  /** @param {String}\t\t\t\t# 下边距 */\n  full,\n  /** @param {Boolean}\t\t\t# 宽度 100% */\n  half,\n  /** @param {Boolean}\t\t\t# 宽度 50% */\n  width,\n  /** @param {String}\t\t\t\t# 具体宽度 */\n  //\n  name,\n  /** @param {String}\t\t\t\t# 表单提交字段 */\n  label,\n  /** @param {String}\t\t\t\t# 标签名 */\n  colon,\n  /** @param {Boolean}\t\t\t# 是否有冒号 */\n  noStyle,\n  /** @param {Boolean}\t\t\t# 无样式 */\n  rules,\n  /** @param {Array, Object}\t\t# 校验规则 */\n  antd /** @param {Object}\t\t\t\t#  */\n}) => {\n  if (!width) {\n    if (full) {\n      width = '100%';\n    } else if (half) {\n      width = '50%';\n    }\n  }\n  style = {\n    width,\n    marginBottom: mb || 0,\n    marginTop: mt,\n    marginLeft: ml,\n    marginRight: mr,\n    ...style\n  };\n  antd = {\n    className,\n    name,\n    label,\n    colon,\n    noStyle,\n    rules,\n    style,\n    ...antd\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, antd, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/form/layout/item.jsx?");

/***/ })

}]);