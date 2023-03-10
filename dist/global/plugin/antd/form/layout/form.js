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

/***/ "./src/_pub/common/utils/time.js":
/*!***************************************!*\
  !*** ./src/_pub/common/utils/time.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst formatNumber = function (n) {\n  n = n.toString();\n  return n[1] ? n : '0' + n;\n};\nconst join = function (arr, split) {\n  return arr.map(formatNumber).join(split);\n};\nconst _ = {\n  full: function (time) {\n    var date = new Date(time);\n    return {\n      year: date.getFullYear(),\n      month: date.getMonth() + 1,\n      day: date.getDate(),\n      h: date.getHours(),\n      m: date.getMinutes(),\n      s: date.getSeconds()\n    };\n  },\n  format: function (time, option) {\n    var opt = {\n      s: '-',\n      l: 'en',\n      t: 'ymd',\n      ...option\n    };\n    var str = null;\n    var date = null;\n    if (typeof time === 'string') {\n      date = this.getTime(time);\n    } else if (time instanceof Date) {\n      date = time.getTime();\n    } else {\n      date = time;\n    }\n    if (date) {\n      var t = this.full(date);\n      switch (opt.t) {\n        case 'full':\n          str = join([t.year, t.month, t.day], opt.s) + ' ' + join([t.h, t.m, t.s], ':');\n          break;\n        case 'ymd-last':\n          const hm = opt.custom ? join([t.h, t.m, t.s], ':') : '23:59:59';\n          str = join([t.year, t.month, t.day], opt.s) + ' ' + hm;\n          break;\n        case 'ymd-hm':\n          str = join([t.year, t.month, t.day], opt.s) + ' ' + join([t.h, t.m], ':');\n          break;\n        case 'ymd':\n          str = opt.l === 'zh' ? t.year + '年' + t.month + '月' + t.day + '日' : join([t.year, t.month, t.day], opt.s);\n          break;\n        case 'hms':\n          str = join([t.h, t.m, t.s], ':');\n          break;\n        case 'hm':\n          str = join([t.h, t.m], ':');\n          break;\n        default:\n          break;\n      }\n    }\n    return str;\n  },\n  getTime(time) {\n    return time ? new Date(time).getTime() : new Date().getTime();\n  },\n  // 获取当前时间\n  getNow() {\n    return this.format(this.getTime(), {\n      t: 'full'\n    });\n  },\n  // 获取时间段\n  duration: {\n    // 时长 1 天，当天 0 点， 到晚上 12 点\n    '1-0-12': () => {\n      const dur = 1000 * 60 * 60 * 24;\n      const now = _.getTime();\n      return [_.format(now) + ' 00:00:00', _.format(now + dur) + ' 23:59:59'];\n    },\n    // 前两天\n    '-2-09-12': () => {\n      const dur = 1000 * 60 * 60 * 24 * 2;\n      const now = _.getTime();\n      return [_.format(now - dur) + ' 09:00:00', _.format(now) + ' 23:59:59'];\n    },\n    // 时长 7 天，当天 0 点， 到晚上 12 点\n    '7-0-12': () => {\n      const dur = 1000 * 60 * 60 * 24 * 7;\n      const now = _.getTime();\n      return [_.format(now) + ' 00:00:00', _.format(now + dur) + ' 23:59:59'];\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/time.js?");

/***/ }),

/***/ "./src/_pub/global/plugin/antd/form/layout/form.jsx":
/*!**********************************************************!*\
  !*** ./src/_pub/global/plugin/antd/form/layout/form.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/time */ \"./src/_pub/common/utils/time.js\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn,\n  $\n} = window;\n/* -------------------------------------------------------- Form -- */\nconst Index = ({\n  children,\n  /** @param {Compoennt}\t\t\t# Slot */\n  className,\n  /** @param {String}\t\t\t\t# 样式 className */\n  style,\n  /** @param {String}\t\t\t\t# 样式 style */\n  data,\n  /** @param {Array}\t\t\t\t# 数据 */\n  param,\n  /** @param {Object}\t\t\t\t# 参数 */\n  hideErrorText,\n  /** @param {Object}\t\t\t\t# 是否隐藏提示文字 */\n  //\n  name,\n  /** @param {String}\t\t\t\t# 表单名称 */\n  dir,\n  /** @param {String}\t\t\t\t# 表单排版 */\n  labelAlign,\n  /** @param {String}\t\t\t\t# 标签对齐 */\n  onSubmit,\n  /** @param {Event}\t\t\t\t# 提交时执行 */\n  onChange,\n  /** @param {Event}\t\t\t\t# 值改变时执行 */\n  onNameChange,\n  /** @param {Event}\t\t\t\t# 字段更新时执行 */\n  antd /** @param {Object}\t\t\t\t#  */\n}, ref) => {\n  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useForm();\n  antd = {\n    className: `${$.css(className)} ${$.css(hideErrorText, 'hideErrorText')}`,\n    name,\n    form,\n    style,\n    labelAlign,\n    layout: dir === 'x' ? 'horizontal' : 'vertical',\n    ...antd\n  };\n\n  // 回显默认值: 格式 { value: 100 }\n  const setDefaultValue = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (rows, param) {\n    let stack = param ?? {};\n    rows = arguments.length === 0 ? data : $fn.getResult(rows);\n    if ($fn.hasArray(rows)) {\n      rows.forEach(v => {\n        if ($fn.hasObject(v) && ($fn.isNotEmpty(v.value) || $fn.isNotEmpty(v.defaultValue))) {\n          stack[v.name] = $fn.isString(v.type) && v.type.includes('date-range') && v.defaultValue ? _utils_time__WEBPACK_IMPORTED_MODULE_2__[\"default\"].duration[v.defaultValue]() : v.value;\n        }\n      });\n    }\n    if ($fn.hasObject(stack)) {\n      form.setFieldsValue(stack);\n    }\n    return stack;\n  }, [data, form]);\n  react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(ref, () => ({\n    // 提交表单\n    submit: () => form.submit(),\n    // 回显表单\n    setValue() {\n      if (arguments.length === 1) {\n        const value = arguments[0];\n        if ($fn.hasObject(value)) {\n          form.setFieldsValue(value);\n        } else {\n          let stack = {};\n          if ($fn.hasArray(data)) {\n            data.forEach(({\n              name,\n              value\n            }) => {\n              stack[name] = '';\n            });\n          }\n          form.setFieldsValue(stack);\n        }\n      } else if (arguments.length === 2) {\n        form.setFieldsValue({\n          [arguments[0]]: arguments[1]\n        });\n      } else {\n        form.setFieldsValue({});\n      }\n    },\n    // 回显指定数据，其它字段为空\n    setEmptyValue(value) {\n      let stack = {};\n      if ($fn.hasArray(data)) {\n        data.forEach(({\n          name\n        }) => {\n          if (value[name]) {\n            stack[name] = value[name];\n          } else {\n            stack[name] = '';\n          }\n        });\n      }\n      form.setFieldsValue(stack);\n    },\n    // 重置表单\n    reset: names => {\n      form.resetFields(names);\n      setDefaultValue(data, param);\n    },\n    // 获取 name 字段的值\n    getValue: name => $fn.isString(name) ? form.getFieldValue(name) : form.getFieldsValue(),\n    getName: name => $fn.isString(name) ? {\n      [name]: form.getFieldValue(name)\n    } : form.getFieldsValue(),\n    setDefaultValue,\n    validate: () => form.validateFields()\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  /* 提交表单且数据验证失败后执行 */, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onFinishFailed: ({\n      errorFields\n    }) => {\n      if ($fn.hasArray(errorFields)) {\n        var _errorFields$, _errorFields$$errors;\n        $fn.msg.warning((_errorFields$ = errorFields[0]) === null || _errorFields$ === void 0 ? void 0 : (_errorFields$$errors = _errorFields$.errors) === null || _errorFields$$errors === void 0 ? void 0 : _errorFields$$errors[0]);\n        form.scrollToField(name);\n      }\n    }\n    /* 提交表单且数据验证成功后执行 */,\n    onFinish: param => form.validateFields().then(values => onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(param))\n    /* 提交表单且数据验证成功后执行 */,\n    onValuesChange: (changedValues, allValues) => onChange === null || onChange === void 0 ? void 0 : onChange({\n      value: changedValues,\n      values: allValues\n    })\n    /* 字段更新时触发 */,\n    onFieldsChange: (changedFields, allFields) => onNameChange === null || onNameChange === void 0 ? void 0 : onNameChange({\n      name: changedFields,\n      names: allFields\n    })\n  }, antd), children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/form/layout/form.jsx?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _extends; }\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://jzer-react-template/./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectWithoutPropertiesLoose; }\n/* harmony export */ });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\n\n//# sourceURL=webpack://jzer-react-template/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"global/plugin/antd/form/layout/form": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react_index_js","vendors-node_modules_react-dom_index_js","vendors-node_modules_ant-design_icons_es_components_AntdIcon_js","vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4","vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js","vendors-node_modules_rc-field-form_es_index_js-node_modules_rc-field-form_es_useWatch_js","vendors-node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_-d6e2e1","vendors-node_modules_rc-trigger_es_index_js","vendors-node_modules_antd_es_tooltip_index_js","vendors-node_modules_antd_es_form_index_js-node_modules_react-is_index_js-node_modules_babel_-fe546a"], function() { return __webpack_require__("./src/_pub/global/plugin/antd/form/layout/form.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;