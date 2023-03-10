"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_private_template_box_box_jsx"],{

/***/ "./src/_pub/common/utils/isColor.js":
/*!******************************************!*\
  !*** ./src/_pub/common/utils/isColor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 设置背景颜色\r\n * @param {String} bgcolor # 可以是 calssName, 或是具体颜色值\r\n */\nconst Index = bgcolor => /^#/.test(bgcolor) || /^rgb/.test(bgcolor);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/isColor.js?");

/***/ }),

/***/ "./src/_pub/private/template/box/box.jsx":
/*!***********************************************!*\
  !*** ./src/_pub/private/template/box/box.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_isColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/isColor */ \"./src/_pub/common/utils/isColor.js\");\n\n\n/* -------------------------------------------------------- Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $,\n  $fn,\n  $lazy\n} = window;\n/* -------------------------------------------------------- Async Component -- */\nconst Title = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_private_template_title_title_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! #tp/title/title */ \"./src/_pub/private/template/title/title.jsx\")));\nconst Loading = $lazy.load(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_antd_es_spin_index_js\"), __webpack_require__.e(\"node_modules_antd_es__util_reactNode_js-node_modules_antd_es__util_type_js-node_modules_antd_-781c07\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/loading */ \"./src/_pub/global/plugin/antd/loading.jsx\")));\nconst Empty = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_global_plugin_antd_empty_jsx-_6f6d1\").then(__webpack_require__.bind(__webpack_require__, /*! @antd/empty */ \"./src/_pub/global/plugin/antd/empty.jsx\")));\n/**\r\n * 公共页面组件\r\n * @return {Component} 菜单组件\r\n */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t\t# 盒子 style */\n  scroll = false,\n  /** @param {Boolean}\t\t\t# 是否滚动 */\n  header,\n  /** @param {Component}\t\t\t# 头部 */\n  footer,\n  /** @param {Component}\t\t\t# 页脚 */\n  children,\n  /** @param {Component}\t\t\t# 默认 Slot */\n  width,\n  /** @param {}\t\t\t\t\t# 宽度 */\n  height,\n  /** @param {int}\t\t\t\t# 高度 */\n  bgcolor = 'bcf',\n  /** @param {String, Boolean}\t# 背景颜色 */\n  contentClass,\n  /** @param {String}\t\t\t\t# 内容样式 */\n  scrollClass,\n  /** @param {String}\t\t\t\t# 滚动内容样式 */\n  paddingClass,\n  /** @param {String}\t\t\t\t# 内容补白 */\n  auto,\n  /** @param {Boolean}\t\t\t# 自动高度 */\n  minHeight = 100,\n  /** @param {String, Number}\t\t# 最小高度 */\n  //\n  data,\n  /** @param {Array}\t\t\t\t# 数据 */\n  loading,\n  /** @param {Boolean}\t\t\t# 加载 */\n  loadingSize = 'large',\n  /** @param {Boolean}\t\t\t# 加载大小 */\n  disabled,\n  /** @param {Boolean}\t\t\t# 禁用 */\n  // 标题\n  title,\n  /** @param {String}\t\t\t\t# 标题 */\n  subTitle,\n  /** @param {String}\t\t\t\t# 副标题 */\n  titleSlot,\n  /** @param {Component}\t\t\t# 标题 Slot */\n  controls = [],\n  /** @param {Array}\t\t\t\t# 头部操作按钮 */\n  titleClassName,\n  /** @param {String}\t\t\t\t# 标题 class */\n  //\n  table /** @param {Object}\t\t\t\t# table 配置 */\n}) => {\n  if ((0,_utils_isColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bgcolor)) {\n    style = {\n      backgroundColor: bgcolor\n    };\n    bgcolor = '';\n  }\n  style = {\n    width,\n    height,\n    ...style\n  };\n  title = $fn.isObject(title) ? title : title ? {\n    title,\n    controls,\n    subTitle\n  } : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"section\", {\n    className: `r5px ${$.css(!auto, 'fv ex')} ${$.css(bgcolor)} ${$.css(className)}`,\n    style: style\n  }, $fn.hasObject(title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Title, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    table: table,\n    loading: loading,\n    disabled: disabled,\n    className: titleClassName\n  }, title), titleSlot), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: `rel ${$.css(!auto, 'fv ex')} ${$.css(contentClass)} ${$.css(!scroll, paddingClass)}`,\n    style: {\n      minHeight\n    }\n  }, $fn.hasArray(data) || !data ? scroll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: `oxys abs_full scrollbar ${$.css(scrollClass)} ${$.css(paddingClass)}`\n  }, children) : children : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Empty, {\n    data: data,\n    simple: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Loading, {\n    size: loadingSize,\n    loading: loading\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/template/box/box.jsx?");

/***/ })

}]);