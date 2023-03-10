"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_message_js"],{

/***/ "./src/_pub/global/plugin/antd/message.js":
/*!************************************************!*\
  !*** ./src/_pub/global/plugin/antd/message.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- 全局配置 -- */\nantd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config({\n  top: '40%',\n  duration: 1\n});\n/* -------------------------------------------------------- 销毁 -- */\nwindow.addEventListener('mousedown', e => {\n  const {\n    className\n  } = e.target;\n  if (typeof className === 'string' && !className.includes('ant-message-notice-content')) {\n    antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].destroy();\n  }\n});\nlet clear;\nconst timeout = f => {\n  clearTimeout(clear);\n  clear = setTimeout(f);\n};\n/* -------------------------------------------------------- 消息提示 -- */\nconst Index = {\n  success(msg, delay) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].success(msg, delay));\n  },\n  error(msg, delay = 3) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(msg, delay));\n  },\n  info(msg, delay) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].info(msg, delay));\n  },\n  warning(msg, delay) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].warning(msg, delay));\n  },\n  warn(msg, delay) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].warn(msg, delay));\n  },\n  loading(msg, delay) {\n    timeout(() => antd__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loading(msg, delay));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/message.js?");

/***/ })

}]);