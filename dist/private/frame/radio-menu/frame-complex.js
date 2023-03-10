/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_pub/common/login/clearCache.js":
/*!*********************************************!*\
  !*** ./src/_pub/common/login/clearCache.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// 清除缓存\nconst Index = () => {\n  const {\n    $fn\n  } = window;\n  $fn.msg.success('清除缓存成功');\n  $fn.indexDBClear();\n  $fn.sessionClear();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/login/clearCache.js?");

/***/ }),

/***/ "./src/_pub/common/login/logout.js":
/*!*****************************************!*\
  !*** ./src/_pub/common/login/logout.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// 退出登录\nconst Index = ({\n  api,\n  history,\n  msg = '确认退出登录？',\n  onSuccess\n}) => {\n  const {\n    $fn,\n    $http\n  } = window;\n  $fn.confirm({\n    msg,\n    onOk: () => new Promise((resolve, reject) => {\n      $http.post(null, api, {\n        loadingText: '退出登录中',\n        onError: reject\n      }).then(data => {\n        resolve();\n        $fn.msg.success('退出登录成功');\n        $fn.localRemove('user');\n        history.replace('/login');\n        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);\n      });\n    })\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/login/logout.js?");

/***/ }),

/***/ "./src/_pub/private/frame/cpt/user-control.jsx":
/*!*****************************************************!*\
  !*** ./src/_pub/private/frame/cpt/user-control.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _com_login_logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @com/login/logout */ \"./src/_pub/common/login/logout.js\");\n/* harmony import */ var _com_login_clearCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @com/login/clearCache */ \"./src/_pub/common/login/clearCache.js\");\n\n\n/* -------------------------------------------------------- Sync Function -- */\n\n\n/**\r\n * 用户操作控制组件\r\n * @return {Component} \r\n */\nconst Index = ({\n  api = 'logout'\n}) => {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();\n  const onLogout = () => (0,_com_login_logout__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    api,\n    history\n  });\n  const onClear = () => (0,_com_login_clearCache__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"ex pr20 f12 fxmr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"cp g6 hover tap db plr10\",\n    onClick: onLogout\n  }, \"\\u9000\\u51FA\\u767B\\u5F55\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"cp g6 hover tap db plr10\",\n    onClick: onClear\n  }, \"\\u6E05\\u9664\\u7F13\\u5B58\"));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/cpt/user-control.jsx?");

/***/ }),

/***/ "./src/_pub/private/frame/radio-menu/cpt/menu.jsx":
/*!********************************************************!*\
  !*** ./src/_pub/private/frame/radio-menu/cpt/menu.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _frame_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #frame/utils */ \"./src/_pub/private/frame/utils/index.js\");\n\n\n/* -------------------------------------------------------- Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn\n} = window;\n/**\r\n * 递归菜单\r\n * @param {Array} \t\tdata \t\t# 菜单数据\r\n * @param {String} \t\tclassName\t# 菜单 className\r\n * @param {Event} \t\tonOpen \t\t# 点击父级菜单时触发\r\n * @param {Event} \t\tonChange \t# 子级菜单切换时触发\r\n * @param {Event} \t\tonClick \t# 点击子级菜单时触发\r\n * @return {Component} \r\n */\nconst Menu = ({\n  data,\n  index = 0,\n  paddingLeft = 20,\n  className,\n  onOpen,\n  onChange,\n  onClick\n}) => {\n  const paddingStyle = index > 0 ? {\n    paddingLeft: paddingLeft * index\n  } : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"menu\", {\n    className: className\n  }, $fn.hasArray(data) ? data.map(({\n    title,\n    children,\n    path,\n    checked\n  }, i) => {\n    if ($fn.hasArray(children)) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n        key: i\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"checkbox\",\n        className: \"abs_lt vh\",\n        value: path,\n        defaultChecked: checked\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n        className: \"fxmj rel b tap\",\n        style: paddingStyle,\n        onClick: onOpen\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"ex\"\n      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n        className: \"menu-arrow ease\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, {\n        data: children,\n        index: index + 1,\n        key: i,\n        onChange: onChange,\n        className: \"parent\",\n        path: path\n      }));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n        className: \"child\",\n        key: i,\n        id: checked ? 'active' : '',\n        onClick: onClick\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"radio\",\n        className: \"abs_lt vh\",\n        name: \"child\",\n        value: path,\n        onChange: onChange,\n        defaultChecked: checked\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"db ease\",\n        style: paddingStyle\n      }, title));\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"ptb30 tc g9 f12\"\n  }, \"\\u65E0\\u83DC\\u5355\\u6570\\u636E\"));\n};\n/**\r\n * 菜单组件\r\n * @param {Array} \t\tdata \t\t# 菜单数据\r\n * @param {Boolean} \teasy \t\t# 是否是简单菜单\r\n * @param {Boolean} \topenAll \t# 是否展开全部菜单\r\n * @return {Component} 菜单组件\r\n */\nconst Index = ({\n  data = []\n}) => {\n  var _data$;\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n  const onChange = e => {\n    const {\n      value\n    } = e.target;\n    if ((0,_frame_utils__WEBPACK_IMPORTED_MODULE_1__.existHttp)(value)) {\n      window.open(value);\n    } else {\n      history.push(value);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, {\n    className: \"jzer-menu\",\n    key: data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.path,\n    data: data,\n    onChange: onChange\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/radio-menu/cpt/menu.jsx?");

/***/ }),

/***/ "./src/_pub/private/frame/radio-menu/frame-complex.jsx":
/*!*************************************************************!*\
  !*** ./src/_pub/private/frame/radio-menu/frame-complex.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js\");\n/* harmony import */ var _frame_radio_menu_utils_setComplexFirstRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #frame/radio-menu/utils/setComplexFirstRouter */ \"./src/_pub/private/frame/radio-menu/utils/setComplexFirstRouter.js\");\n/* harmony import */ var _frame_radio_menu_utils_getRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #frame/radio-menu/utils/getRouter */ \"./src/_pub/private/frame/radio-menu/utils/getRouter.js\");\n/* harmony import */ var _frame_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #frame/utils */ \"./src/_pub/private/frame/utils/index.js\");\n/* harmony import */ var _frame_radio_menu_cpt_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #frame/radio-menu/cpt/menu */ \"./src/_pub/private/frame/radio-menu/cpt/menu.jsx\");\n/* harmony import */ var _frame_cpt_user_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #frame/cpt/user-control */ \"./src/_pub/private/frame/cpt/user-control.jsx\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- Function -- */\n\n\n\n/* -------------------------------------------------------- Sync Component -- */\n\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $lazy,\n  $,\n  $fn\n} = window;\n/* -------------------------------------------------------- Async Component -- */\nconst Scroll = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_global_template_scroll_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @tp/scroll */ \"./src/_pub/global/template/scroll.jsx\")));\nconst Router = $lazy.load(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-dom_index_js\"), __webpack_require__.e(\"vendors-node_modules_react-cache-router_index_js\"), __webpack_require__.e(\"src__pub_private_frame_router_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! #frame/router */ \"./src/_pub/private/frame/router.jsx\")));\nconst MenuTop = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_private_frame_cpt_menu-top_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! #frame/cpt/menu-top */ \"./src/_pub/private/frame/cpt/menu-top.jsx\")));\n/* -------------------------------------------------------- Config -- */\nconst width = 200;\nconst space = 1;\n/**\r\n * 有顶部菜单和左侧菜单的后台模板框架\r\n * @param {Boolean} openAll \t\t# 是否展开全部，默认不展开\r\n */\nconst Index = ({\n  openAll\n}) => {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [rootPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_frame_utils__WEBPACK_IMPORTED_MODULE_3__.getRootPath)());\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // if(!$fn.getToken()){ return history.push('/login') }\n    $.getMenu().then(data => {\n      data = (0,_frame_radio_menu_utils_getRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_frame_utils__WEBPACK_IMPORTED_MODULE_3__.getChildren)(data, rootPath), rootPath, openAll);\n      setData(data, rootPath);\n      // 设置默认显示左侧菜单, 以及当前选中项\n      setMenuData(() => {\n        const path = window.location.hash.replace('#', '');\n        let d = [];\n        if (rootPath !== path) {\n          const arr = data.filter(v => (0,_frame_utils__WEBPACK_IMPORTED_MODULE_3__.hasPath)(path, v.path));\n          d = $fn.hasArray(arr) ? arr[0].children ?? [] : [];\n        } else {\n          d = $fn.hasArray(data) ? data[0].children ?? [] : [];\n        }\n        return d;\n      });\n    });\n  }, [history, rootPath, openAll]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setTimeout(() => {\n      const $active = document.querySelector('#active');\n      if ($active) {\n        document.querySelector('#scroll').scrollTop = $active.offsetTop;\n      }\n    }, 300);\n    window.refreshRouter = () => setKey(key => key + 1);\n  }, []);\n  const onMenuTopChange = data => setMenuData((0,_frame_radio_menu_utils_setComplexFirstRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, openAll));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"fix_full fv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", {\n    className: \"h50 bcf fx\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      width,\n      fontSize: 26\n    },\n    className: \"h fxmc cp tap c0\",\n    onClick: () => history.replace('/index')\n  }, \"logo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"cp c0 f18 tap h fxmc\",\n    style: {\n      width: 50\n    },\n    onClick: () => setShow(value => !value)\n  }, show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuTop, {\n    data: data,\n    rootPath: rootPath,\n    onClick: data => onMenuTopChange(data)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_frame_cpt_user_control__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    api: \"user/logout\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"ex fx\",\n    style: {\n      marginTop: space\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"h rel bcf\",\n    style: {\n      width\n    },\n    hidden: show\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scroll, {\n    id: \"scroll\",\n    scroll: \"oys\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_frame_radio_menu_cpt_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: menuData,\n    openAll: openAll\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"ex rel\",\n    style: {\n      margin: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {\n    data: menuData,\n    rootPath: rootPath,\n    hasFolder: false,\n    key: key\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/radio-menu/frame-complex.jsx?");

/***/ }),

/***/ "./src/_pub/private/frame/radio-menu/utils/getRouter.js":
/*!**************************************************************!*\
  !*** ./src/_pub/private/frame/radio-menu/utils/getRouter.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frame_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #frame/utils */ \"./src/_pub/private/frame/utils/index.js\");\n/* -------------------------------------------------------- Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn\n} = window;\n/**\r\n * 简单模式下，默认选中第一个\r\n * @param {Array} data\t# 菜单数据\r\n * @return {Array} \t\t# 新的菜单数据\r\n */\nconst setEasyFirstRouter = data => {\n  const deep = data => {\n    if ($fn.hasArray(data)) {\n      let {\n        children\n      } = data[0];\n      data[0].checked = true;\n      if ($fn.hasArray(children)) {\n        return setEasyFirstRouter(children);\n      }\n    }\n  };\n  deep(data);\n  return data;\n};\n/**\r\n * 将菜单数据中的 path 拼合成有效 path，并默认选中\r\n * @param {Array} \tdata\t\t# 菜单数据\r\n * @param {String} \trootPath\t# 根路由，如: /main\r\n * @param {Boolean} openAll \t# 是否展开全部\r\n * @return {Array} \t\t\t\t# 新的菜单数据\r\n */\nconst Index = (data, rootPath, openAll) => {\n  let hash = window.location.hash.replace('#', '');\n  const deep = (data, path, isChild) => {\n    if (path.substr(-1) === '/') path = path.substr(0, path.length - 1);\n    data.forEach(v => {\n      const {\n        url,\n        name,\n        children,\n        child,\n        title\n      } = v;\n      if (url) {\n        if ((0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.existHttp)(url)) {\n          v.path = url;\n        } else {\n          v.path = (0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.existMain)(url) ? url : rootPath + url;\n        }\n      } else {\n        if (v.path) {\n          if (!(0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.existMain)(v.path) && !(0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.existHttp)(v.path)) {\n            v.path = v.path.includes(rootPath) ? v.path : rootPath + v.path;\n          }\n        } else {\n          if (name) {\n            v.path = path + '/' + name;\n          }\n        }\n      }\n      if ($fn.isArray(children)) {\n        if (openAll) {\n          v.checked = true;\n        } else {\n          if ((0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.hasPath)(hash, v.path)) {\n            v.checked = true;\n          }\n        }\n        deep(children, v.path);\n      } else {\n        if (hash === v.path || hash.includes(v.path)) {\n          v.checked = true;\n        }\n        if (isChild && !v.child) {\n          v.cache = v.cache ?? true; // 如果是 child 的子级，默认带缓存\n        }\n\n        if ($fn.isArray(child)) {\n          const component = v.component ? {\n            component: v.component\n          } : null;\n          v.child.unshift({\n            title,\n            name,\n            path: v.path,\n            ...component,\n            cache: true\n          });\n          deep(child, v.path, true);\n        }\n      }\n    });\n    return data;\n  };\n  data = deep(data, rootPath);\n  if (hash === rootPath) {\n    data = setEasyFirstRouter(data);\n  }\n  return data;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/radio-menu/utils/getRouter.js?");

/***/ }),

/***/ "./src/_pub/private/frame/radio-menu/utils/setComplexFirstRouter.js":
/*!**************************************************************************!*\
  !*** ./src/_pub/private/frame/radio-menu/utils/setComplexFirstRouter.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frame_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #frame/utils */ \"./src/_pub/private/frame/utils/index.js\");\n/* -------------------------------------------------------- Function -- */\n\n/**\r\n * 复杂模式下，默认选中第一个\r\n * @param {Array} data\t# 菜单数据\r\n * @param {Boolean} openAll \t# 是否展开全部\r\n * @return {Array} \t\t# 新的菜单数据\r\n */\nconst Index = (data, openAll) => {\n  const hash = (0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.getRedirect)(data);\n  const deep = data => {\n    data.forEach(v => {\n      v.checked = false;\n      if (Array.isArray(v.children)) {\n        if (openAll) {\n          v.checked = true;\n        } else {\n          if ((0,_frame_utils__WEBPACK_IMPORTED_MODULE_0__.hasPath)(hash, v.path)) {\n            v.checked = true;\n          }\n        }\n        deep(v.children, v.path);\n      } else {\n        if (hash === v.path) {\n          v.checked = true;\n        }\n      }\n    });\n    return data;\n  };\n  return deep(data);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/radio-menu/utils/setComplexFirstRouter.js?");

/***/ }),

/***/ "./src/_pub/private/frame/utils/index.js":
/*!***********************************************!*\
  !*** ./src/_pub/private/frame/utils/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"existHttp\": function() { return /* binding */ existHttp; },\n/* harmony export */   \"existMain\": function() { return /* binding */ existMain; },\n/* harmony export */   \"getChildren\": function() { return /* binding */ getChildren; },\n/* harmony export */   \"getRedirect\": function() { return /* binding */ getRedirect; },\n/* harmony export */   \"getRootPath\": function() { return /* binding */ getRootPath; },\n/* harmony export */   \"getRootUrl\": function() { return /* binding */ getRootUrl; },\n/* harmony export */   \"hasPath\": function() { return /* binding */ hasPath; }\n/* harmony export */ });\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn\n} = window;\n/**\r\n * 获取目录第一个可跳转的路径\r\n * @param {Array} data\t# 菜单数据\r\n * @return {String}\r\n */\nconst getRedirect = data => {\n  if ($fn.hasArray(data)) {\n    let {\n      children,\n      path\n    } = data[0];\n    if ($fn.hasArray(children)) {\n      return getRedirect(children);\n    }\n    return path;\n  }\n};\n/**\r\n * 获取根路径 /main\r\n * @return {String}\r\n */\nconst getRootPath = () => {\n  let hash = window.location.hash;\n  hash = hash.replace('/', '');\n  hash = hash.replace(/\\?[\\S]*/g, '');\n  hash = hash.split('/');\n  hash = hash[0].replace('#', '/');\n  return hash === '/' ? '/main' : hash;\n};\n/**\r\n * 判断当前路径是否存在检测路径\r\n * @param {String} current\t# 当前路由\r\n * @param {String} path  \t# 对比路由\r\n * @return {Boolean} \t\t# 存在返回 true, 反之 false\r\n */\nconst hasPath = (current, path) => new RegExp(`^${path}/.*`).test(current + '/');\n/**\r\n * 判断是否存在 http\r\n * @param {String} value\t# 判断内容\r\n * @return {Boolean} \t\t# 存在返回 true, 反之 false\r\n */\nconst existHttp = value => /(http|https):\\/\\/\\S*/.test(value);\n/**\r\n * 判断字符串是否以 /main 头\r\n * @param {String} value\t# 判断内容\r\n * @return {Boolean} \t\t# 存在返回 true, 反之 false\r\n */\nconst existMain = value => /\\/main\\.*/.test(value);\n/**\r\n * 获取子级菜单\r\n * @param {Array} \tdata\t\t# 菜单数据\r\n * @param {String} \trootPath\t# 根路由，如: /main\r\n * @return {Array} \t\t\t\t# 新的菜单数据\r\n */\nconst getChildren = (data, rootPath) => {\n  // 如果 /main 不存在时，为多目录结构\n  if (!existMain(rootPath)) {\n    data = data.filter(v => '/' + v.name === rootPath);\n    if ($fn.hasArray(data)) {\n      data = data[0].children ?? [];\n    }\n  }\n  return data;\n};\n/**\r\n * 路由的第个节点\r\n * @param {String} \turl\t\t# 路由，如: /main/style/color\r\n * @return {String} \t\t# /main\r\n */\nconst getRootUrl = url => url.substring(0, url.substr(1).indexOf('/') + 1);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/frame/utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "jzer-react-template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"private/frame/radio-menu/frame-complex": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react_index_js","vendors-node_modules_ant-design_icons_es_components_AntdIcon_js","vendors-node_modules_prop-types_index_js","vendors-node_modules_react-router_esm_react-router_js","vendors-node_modules_ant-design_icons_es_icons_MenuFoldOutlined_js-node_modules_ant-design_ic-6fba4a"], function() { return __webpack_require__("./src/_pub/private/frame/radio-menu/frame-complex.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;