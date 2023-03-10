"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_template_image_jsx"],{

/***/ "./src/_pub/global/template/image.jsx":
/*!********************************************!*\
  !*** ./src/_pub/global/template/image.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _svg_def_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/def-img */ \"./src/_pub/global/template/svg/def-img.jsx\");\n\n/* -------------------------------------------------------- Image -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $\n} = window;\n/* -------------------------------------------------------- 自定义图片组件 -- */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t# 盒子 style */\n  src,\n  /** @param {String}\t\t\t# src */\n  width = '100%',\n  /** @param {String, Number}\t# 宽 */\n  height,\n  /** @param {String, Number}\t# 高 */\n  size,\n  /** @param {String, Number}\t# 高宽 */\n  alt,\n  /** @param {String, Number}\t# alt */\n  round,\n  /** @param {String, Boolan}\t# 圆角 */\n  onClick /** @param {Event}  }\t\t# 点击事件 */\n}) => {\n  const imgSizeStyle = size ? {\n    width: size,\n    height: size\n  } : {\n    width,\n    height\n  };\n  const imgStyle = {\n    maxWidith: '100%',\n    ...imgSizeStyle,\n    ...style\n  };\n  let img = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    draggable: false,\n    onClick: onClick,\n    className: `${$.css(className)} ${$.css(round, 'r100px')}`,\n    style: imgStyle,\n    src: src,\n    alt: alt\n  });\n  return src ? img : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"fxmc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_def_img__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/image.jsx?");

/***/ }),

/***/ "./src/_pub/global/template/svg/def-img.jsx":
/*!**************************************************!*\
  !*** ./src/_pub/global/template/svg/def-img.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nconst dSize = '50px';\nconst dColor = '#bfbfbf';\n// ===================================================================== public component\nconst Index = ({\n  size,\n  color\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n  viewBox: \"0 0 1024 1024\",\n  width: size || dSize,\n  height: size || dSize,\n  style: {\n    background: '#fff',\n    borderRadius: '100%'\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n  fill: color || dColor,\n  d: \"M511.99999999999983 1023.9999999999999C229.24799999999982 1023.9999999999994-1.1368683772161603e-13 794.7519999999995 0 511.99999999999994S229.2480000000004-1.1368683772161603e-13 512.0000000000001 0s511.9999999999999 229.24800000000036 511.99999999999955 512.0000000000003-229.24800000000036 511.9999999999999-512.0000000000003 511.99999999999955z m6.252776074688882e-13-938.666667C276.352 85.33333299999993 85.33333300000004 276.3519999999998 85.33333299999998 511.9999999999997s191.01866699999982 426.6666670000001 426.66666699999973 426.66666700000025 426.6666670000001-191.01866699999982 426.66666700000025-426.66666699999973S747.6480000000004 85.3333330000001 512.0000000000002 85.33333300000004z m309.8879999999996 627.7973340000001a42.666667 42.666667 0 0 1-58.28266699999999-15.616000000000035l-21.33333299999998-36.94933400000002-258.64533300000005 149.3333339999998a42.666667 42.666667 0 0 1-58.28266699999999-15.616000000000035l-63.99999999999993-110.84800000000001-73.89866700000005 42.66666599999995a42.666667 42.666667 0 0 1-42.66666599999995-73.89866600000006l110.84800000000001-63.99999999999993a42.666667 42.666667 0 0 1 58.28266599999999 15.616000000000039l63.99999999999993 110.84800000000001 258.64533400000005-149.3333339999998a42.666667 42.666667 0 0 1 58.28266599999999 15.616000000000039l42.66666699999996 73.89866700000002a42.666667 42.666667 0 0 1-15.616000000000035 58.28266699999999zM362.66666699999996 512a149.333333 149.333333 0 1 1 1.7053025658242404e-13-298.66666699999996 149.333333 149.333333 0 0 1-1.7053025658242404e-13 298.66666699999996z\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/svg/def-img.jsx?");

/***/ })

}]);