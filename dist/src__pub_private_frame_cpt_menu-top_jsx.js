"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_private_frame_cpt_menu-top_jsx"],{

/***/ "./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// This icon file is generated automatically.\nvar HomeOutlined = { \"icon\": { \"tag\": \"svg\", \"attrs\": { \"viewBox\": \"64 64 896 896\", \"focusable\": \"false\" }, \"children\": [{ \"tag\": \"path\", \"attrs\": { \"d\": \"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z\" } }] }, \"name\": \"home\", \"theme\": \"outlined\" };\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeOutlined);\n\n\n//# sourceURL=webpack://jzer-react-template/./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js?");

/***/ }),

/***/ "./node_modules/@ant-design/icons/es/icons/HomeOutlined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ant_design_icons_svg_es_asn_HomeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-svg/es/asn/HomeOutlined */ \"./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js\");\n/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AntdIcon */ \"./node_modules/@ant-design/icons/es/components/AntdIcon.js\");\n\n// GENERATE BY ./scripts/generate.ts\n// DON NOT EDIT IT MANUALLY\n\n\n\nvar HomeOutlined = function HomeOutlined(props, ref) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props), {}, {\n    ref: ref,\n    icon: _ant_design_icons_svg_es_asn_HomeOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }));\n};\nHomeOutlined.displayName = 'HomeOutlined';\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(HomeOutlined));\n\n//# sourceURL=webpack://jzer-react-template/./node_modules/@ant-design/icons/es/icons/HomeOutlined.js?");

/***/ }),

/***/ "./src/_pub/private/frame/cpt/menu-top.jsx":
/*!*************************************************!*\
  !*** ./src/_pub/private/frame/cpt/menu-top.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/HomeOutlined.js\");\n/* harmony import */ var _frame_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #frame/utils */ \"./src/_pub/private/frame/utils/index.js\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn\n} = window;\n/**\r\n * 顶部菜单\r\n * @param {Array} \tdata\t\t# 菜单数据\r\n * @param {String}\trootPath\t# 根目录，如： /main\r\n * @param {Event} \tonClick\t\t# 点击菜单选项时触发\r\n * @return {Component} 菜单组件\r\n */\nconst Index = ({\n  data,\n  onClick,\n  rootPath\n}) => {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n  const [current, setCurrent] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    const path = window.location.hash.replace('#', '');\n    if (rootPath !== path) {\n      setCurrent(path);\n    } else {\n      setCurrent((0,_frame_utils__WEBPACK_IMPORTED_MODULE_1__.getRedirect)(data));\n    }\n  }, [data, rootPath]);\n  const onMenuClick = ({\n    path,\n    children = []\n  }) => {\n    setCurrent(path);\n    if ($fn.hasArray(children)) {\n      history.push((0,_frame_utils__WEBPACK_IMPORTED_MODULE_1__.getRedirect)(children));\n    } else {\n      $fn.msg.warning('子级不存在');\n    }\n    onClick === null || onClick === void 0 ? void 0 : onClick(children);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"ex h lh fx tc nav-top-list\"\n  }, $fn.hasArray(data) && data.map((v, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    key: i,\n    className: `fxmc h rel cp tap ${(0,_frame_utils__WEBPACK_IMPORTED_MODULE_1__.hasPath)(current, v.path) ? 'active' : ''}`,\n    style: {\n      width: 80\n    },\n    onClick: onMenuClick.bind(null, v)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"h24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"f12\"\n  }, v.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    hidden: !(0,_frame_utils__WEBPACK_IMPORTED_MODULE_1__.hasPath)(current, v.path),\n    className: \"abs_lb w fxc\",\n    style: {\n      height: 2\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"bcm db h\",\n    style: {\n      width: '80%'\n    }\n  })))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/cpt/menu-top.jsx?");

/***/ })

}]);