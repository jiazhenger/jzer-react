"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_form_switch_jsx"],{

/***/ "./src/_pub/global/plugin/antd/form/switch.jsx":
/*!*****************************************************!*\
  !*** ./src/_pub/global/plugin/antd/form/switch.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/switch/index.js\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- 回到顶部 -- */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t\t# 盒子 className */\n  name,\n  /** @param {String}\t\t\t\t# name */\n  label,\n  /** @param {String}\t\t\t\t# 标签名 */\n  children,\n  /** @param {Component}\t\t\t# slot */\n  out,\n  /** @param {Number}\t\t\t\t# 在外部设置 value 值 */\n  //\n  value,\n  /** @param {Number}\t\t\t\t# 值 */\n  disabled,\n  /** @param {Boolan}\t\t\t\t# 禁用 */\n  // 获取值\n  onChange,\n  /** @param {Event}\t\t\t\t# 有 Form 时值改变时执行 */\n  onChanged,\n  /** @param {Event}\t\t\t\t# 值改变时执行 */\n  // 自定义扩展\n  antd = {} /** @param {Object}\t\t\t\t# antd */\n}) => {\n  const [model, setModel] = react__WEBPACK_IMPORTED_MODULE_1__.useState(Boolean(value));\n  antd = {\n    className,\n    disabled,\n    checked: out ? value : model,\n    ...antd\n  };\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    if (!out) {\n      setModel(value);\n    }\n  }, [value]); // eslint-disable-line\n\n  const _onChange = value => {\n    value = value ? 1 : 0;\n    if (!out) {\n      setModel(value);\n    }\n    const result = name ? {\n      model: {\n        [name]: value\n      }\n    } : null;\n    onChange === null || onChange === void 0 ? void 0 : onChange(value);\n    onChanged === null || onChanged === void 0 ? void 0 : onChanged({\n      value,\n      label,\n      ...result\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onChange: _onChange\n  }, antd));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/form/switch.jsx?");

/***/ })

}]);