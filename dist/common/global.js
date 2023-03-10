/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_pub/common/core/data-type.js":
/*!*******************************************!*\
  !*** ./src/_pub/common/core/data-type.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ====================================== 数据类型  ====================================== */\nconst D = (bool, success, fail) => {\n  bool ? success === null || success === void 0 ? void 0 : success() : fail === null || fail === void 0 ? void 0 : fail();\n  return bool;\n};\nconst $ = {\n  hasArray: (d, s, f) => D($.isArray(d) && d.length > 0, s, f),\n  hasObject: (d, s, f) => D($.isObject(d) && Object.keys(d).length > 0, s, f),\n  isEmpty: (d, s, f) => D(d === null || d === undefined || d === '', s, f),\n  isNotEmpty: (d, s, f) => D(!$.isEmpty(d), s, f),\n  getArray: d => $.isArray(d) ? d : [],\n  getObject: d => $.isObject(d) ? d : {}\n};\n['String', 'Number', 'Array', 'Object', 'Boolean', 'Function', 'Undefined', 'Null'].forEach(v => $['is' + v] = (d, s, f) => D({}.toString.call(d) === '[object ' + v + ']', s, f));\n/* harmony default export */ __webpack_exports__[\"default\"] = ($);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/data-type.js?");

/***/ }),

/***/ "./src/_pub/common/core/form-search.js":
/*!*********************************************!*\
  !*** ./src/_pub/common/core/form-search.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ======================================  表单提交方法  ====================================== */\nconst Index = {\n  // 处理提交的参数\n  getSubmitParam(data, param) {\n    if (this.hasArray(data)) {\n      data.forEach(({\n        name,\n        names\n      }) => {\n        if (this.hasArray(names) && names.length === 2 && param !== null && param !== void 0 && param[name]) {\n          param[names[0]] = param[name][0];\n          param[names[1]] = param[name][1];\n          delete param[name];\n        }\n      });\n    }\n    return param;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/form-search.js?");

/***/ }),

/***/ "./src/_pub/common/core/form-submit.js":
/*!*********************************************!*\
  !*** ./src/_pub/common/core/form-submit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ======================================  表单数据行操作  ====================================== */\nconst getTreeLabel = (data, idStr, nameStr) => {\n  const {\n    $fn\n  } = window;\n  let stack = [];\n  const deep = data => {\n    data.forEach(v => {\n      if ($fn.hasArray(v.children)) {\n        deep(v.children);\n      } else {\n        stack.push({\n          [nameStr]: v[nameStr],\n          [idStr]: v[idStr]\n        });\n      }\n    });\n  };\n  deep(data);\n  return stack;\n};\nconst Index = {\n  // 获取 form 数据的字段数据\n  getRow(config, name) {\n    let data = [];\n    if (this.isArray(config)) {\n      data = config;\n    } else if (this.isObject(config)) {\n      var _config$form;\n      data = config !== null && config !== void 0 && config.form ? config === null || config === void 0 ? void 0 : (_config$form = config.form) === null || _config$form === void 0 ? void 0 : _config$form.data : config.data;\n    }\n    const arr = this.hasArray(data) ? data.filter(v => this.hasObject(v) && v.name === name) : [];\n    if (this.hasArray(arr)) {\n      return arr[0];\n    } else {\n      console.log(name + '不存在');\n      return {};\n    }\n  },\n  getRows(config, name, target, value) {\n    let data = [];\n    if (this.isArray(config)) {\n      data = config;\n    } else if (this.isObject(config)) {\n      var _config$form2;\n      data = config !== null && config !== void 0 && config.form ? config === null || config === void 0 ? void 0 : (_config$form2 = config.form) === null || _config$form2 === void 0 ? void 0 : _config$form2.data : config.data;\n    }\n    if (this.hasArray(name)) {\n      data.forEach((v, i) => {\n        if (this.hasObject(v) && name.includes(v.name)) {\n          data[i][target] = value;\n        }\n      });\n    } else {\n      this.getRow(config, name)[target] = value;\n    }\n  },\n  hideRows(config, name, value) {\n    this.getRows(config, name, 'hide', value);\n  },\n  disabledRows(config, name, value) {\n    this.getRows(config, name, 'disabled', value);\n  },\n  getCurrentRow(data, value, idStr = window.$config.idStr) {\n    const arr = data.filter(v => this.hasObject(v) && v[idStr] === value);\n    return arr.length > 0 ? arr[0] : {};\n  },\n  // 获取不同格式的表单数据\n  getFormFormat({\n    label,\n    name,\n    value,\n    idStr,\n    nameStr,\n    data,\n    uploadData,\n    form,\n    submit,\n    sname,\n    formType\n  }) {\n    let backValue = {};\n    let labelValue = {};\n    let text = null;\n    let url = null;\n    let d = {};\n    let row;\n    let rowName = null;\n    if (this.hasArray(data) && ['select', 'radio'].includes(formType)) {\n      row = this.getCurrentRow(data, value, idStr, nameStr);\n      rowName = row[nameStr];\n      if (sname && submit) {\n        submit[sname] = rowName;\n      }\n    }\n    if (form) {\n      if (['select', 'radio'].includes(formType)) {\n        text = row[nameStr];\n      }\n      if (['tags', 'checkbox-group'].includes(formType)) {\n        if (this.hasArray(data)) {\n          text = data.map(v => v[nameStr]);\n        }\n      }\n      if (['tree-select'].includes(formType)) {\n        if (this.hasArray(data)) {\n          const d = getTreeLabel(data, idStr, nameStr);\n          text = [];\n          if (this.hasArray(value)) {\n            value.forEach(v => {\n              d.forEach(m => {\n                if (v === m[idStr]) {\n                  text.push(m[nameStr]);\n                }\n              });\n            });\n          } else {\n            d.forEach(m => {\n              if (value === m[idStr]) {\n                text = m[nameStr];\n              }\n            });\n          }\n        }\n      }\n      if (['text'].includes(formType)) {\n        text = value;\n      }\n      if (['upload'].includes(formType)) {\n        text = uploadData.fileName;\n        url = uploadData.url;\n        d = {\n          data: uploadData\n        };\n      }\n      if (label) {\n        label = label.includes('请') ? label.replace('请', '') : label;\n      }\n      backValue = url ? {\n        label,\n        text,\n        url\n      } : {\n        label,\n        text\n      };\n      labelValue = {\n        label: text,\n        value\n      };\n      if (this.isObject(form)) {\n        form[name] = backValue;\n      }\n      return {\n        value,\n        row,\n        name,\n        labelValue,\n        backValue,\n        model: name ? {\n          [name]: value\n        } : {},\n        ...d\n      };\n    } else {\n      return {\n        value,\n        row,\n        name,\n        rowName,\n        uploadData,\n        model: name ? {\n          [name]: value\n        } : {}\n      };\n    }\n  },\n  // 表单元素加载数据\n  async ajax({\n    setAjax,\n    setLoading,\n    data,\n    api,\n    cache,\n    my,\n    param,\n    setName,\n    paging\n  }) {\n    const {\n      $http\n    } = window;\n    let id;\n    let way = 'pull';\n    if (this.isString(param) || this.isNumber(param)) {\n      id = param;\n    } else {\n      if (paging) {\n        param = {\n          page: 1,\n          size: 10000,\n          ...param\n        };\n        way = 'paging';\n      }\n    }\n    if (api) {\n      var _d;\n      if (cache) {\n        let d = await this.indexDB(api);\n        if (this.hasArray(d)) {\n          if (setName) {\n            d = d.map((v, i) => setName(v, i));\n          }\n          setAjax(d);\n          return d;\n        }\n      }\n      const loading = setLoading ? {\n        onLoading: v => setLoading(v)\n      } : null;\n      let d = await $http[way](null, api, {\n        id,\n        param,\n        ...loading\n      });\n      d = (way === 'paging' ? (_d = d) === null || _d === void 0 ? void 0 : _d.data : d) ?? [];\n      if (cache) {\n        this.indexDB(api, d);\n      }\n      if (setName) {\n        d = d.map((v, i) => setName(v, i));\n      }\n      if (setAjax) {\n        setAjax(d);\n      }\n      return d;\n    } else {\n      return data;\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/form-submit.js?");

/***/ }),

/***/ "./src/_pub/common/core/inner.js":
/*!***************************************!*\
  !*** ./src/_pub/common/core/inner.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ======================================  内部特有方法  ====================================== */\nconst Index = {\n  // ======================================================================== dom\n  loading(bool, msg) {\n    let loading = document.querySelector('#jzer-loading');\n    if (loading) {\n      if (bool) {\n        loading.querySelector('.jzer-loading-msg').innerHTML = msg || '数据加载中';\n        loading.style.display = 'block';\n      } else {\n        loading.style.display = 'none';\n      }\n    }\n  },\n  async toast(msg, callback, delay) {\n    delay = delay || 1500;\n    const toast = document.querySelector('#jzer-toast');\n    if (toast) {\n      toast.style.display = 'block';\n      const $msg = toast.querySelector('.jzer-toast-msg');\n      $msg.innerHTML = msg;\n      if (typeof callback === 'function') {\n        const {\n          width,\n          align\n        } = callback() ?? {};\n        if (width) {\n          $msg.style.width = width + 'px';\n        }\n        if (align) {\n          $msg.style.textAlign = align;\n        }\n      }\n      if (delay !== 0) {\n        clearTimeout(window.toastClear);\n        window.toastClear = setTimeout(() => {\n          toast.style.display = 'none';\n        }, delay);\n      }\n    }\n  },\n  // ========================================================================  绑定值\n  val(v) {\n    return this.isNotEmpty(v) ? v : '--';\n  },\n  nan(v) {\n    return !isNaN(v) ? v : '--';\n  },\n  // ========================================================================  惰性加载文件\n  async lazy(file) {\n    return file().then(f => f.default);\n  },\n  // 执行字符串函数\n  func(name, arg1, arg2) {\n    if (typeof name === 'string') {\n      return new Function('return' + name)()(arg1, arg2); // eslint-disable-line\n    } else if (typeof name === 'function') {\n      var obj = {\n        f: name\n      };\n      return obj.f(arg1, arg2);\n    }\n  },\n  // 对象可为直接对象，或函数返回值\n  getResult(name, param) {\n    if (typeof name === 'function') {\n      return name(param);\n    } else if (typeof name === 'string') {\n      if (name.includes('=>') || name.includes('function') || name.includes('){')) {\n        return this.func(name, param);\n      } else if (name.includes('{') && name.includes('}') || name.includes('[') && name.includes(']')) {\n        return JSON.parse(name);\n      } else {\n        return name;\n      }\n    } else {\n      return name;\n    }\n  },\n  // 获取编辑时的参数\n  getEditParam(id, idStr, param) {\n    return id ? {\n      [idStr]: id,\n      ...param\n    } : param;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/inner.js?");

/***/ }),

/***/ "./src/_pub/common/core/query.js":
/*!***************************************!*\
  !*** ./src/_pub/common/core/query.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ====================================== 获取参数  ====================================== */\nconst Index = {\n  // 获取 url 参数\n  query(id) {\n    const hash = window.location.search || window.location.hash;\n    let stack = {};\n    if (hash.indexOf('?') !== -1) {\n      let search = hash.split('?');\n      search = search[1].split('&');\n      search.forEach(function (v, i) {\n        const s = v.split('=');\n        if (s[1] !== 'undefined' && s[1] !== 'null' && s[1] !== '') {\n          stack[s[0]] = s[1];\n        }\n      });\n    }\n    if (id) {\n      if (typeof id === 'function') {\n        if (Object.keys(stack).length > 0) id(stack);\n      } else {\n        return stack[id];\n      }\n    }\n    return stack;\n  },\n  // 获取地址栏与本地缓存的 token\n  getToken(obj) {\n    // const token = this.query('token');\n    const {\n      token\n    } = this.getUser();\n    return token;\n  },\n  // 将无效数据转为 ''\n  getEmptyParam(param) {\n    for (let i in param) {\n      const value = param[i];\n      param[i] = this.isNotEmpty(value) ? value : null;\n    }\n    return param;\n  },\n  // 获取有效参数\n  getValidParam(param) {\n    let stack = {};\n    for (let i in param) {\n      const value = param[i];\n      if (this.isNotEmpty(value)) {\n        stack[i] = value;\n      }\n    }\n    return stack;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/query.js?");

/***/ }),

/***/ "./src/_pub/common/core/rest.js":
/*!**************************************!*\
  !*** ./src/_pub/common/core/rest.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ======================================  其它方法  ====================================== */\nconst Index = {\n  // 设置浏览器 title\n  setTitle(text) {\n    window.document.title = text;\n  },\n  // 深拷贝\n  copy(data) {\n    return this.hasObject(data) ? JSON.parse(JSON.stringify(data)) : data;\n  },\n  //\n  deepCopy(obj) {\n    const deep = function (obj) {\n      let clone = Array.isArray(obj) ? [] : {};\n      if (obj && typeof obj === 'object') {\n        for (let i in obj) {\n          if (obj.hasOwnProperty(i)) {\n            if (obj[i] && typeof obj[i] === 'object') {\n              clone[i] = deep(obj[i]);\n            } else {\n              clone[i] = obj[i];\n            }\n          }\n        }\n      }\n      return clone;\n    };\n    return deep(obj);\n  },\n  // 惰性加载文件\n  async lazy(file) {\n    return file().then(f => f.default);\n  },\n  // 返回值\n  getValue(v) {\n    return this.isFunction(v) ? v(v) : v;\n  },\n  // 发布订阅\n  proxy: {\n    // 监听/订阅刷新\n    on(back, name = 'back') {\n      window.proxy[name] = back === null || back === void 0 ? void 0 : back();\n    },\n    // 发布\n    publish: name => window.proxy[name](),\n    // 移除\n    remove: (name = 'back') => {\n      if (window.proxy) {\n        window.proxy[name] = null;\n      }\n    }\n  },\n  // 全局监听开关变量\n  onHideShow(className, show, callback) {\n    document.addEventListener('mousedown', e => {\n      if (this.isString(e.target.className) && e.target.className.includes(className)) {\n        show = !show;\n      } else {\n        show = false;\n      }\n      callback === null || callback === void 0 ? void 0 : callback(show);\n    });\n  },\n  // 判断不为 false 或 0\n  isNoFalse: value => value !== false || value !== 0,\n  // 将字符串转为数据\n  strToNum(value) {\n    return this.isString(value) ? isNaN(value * 1) ? value : value * 1 : value;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/rest.js?");

/***/ }),

/***/ "./src/_pub/common/core/router.js":
/*!****************************************!*\
  !*** ./src/_pub/common/core/router.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ======================================  路由跳转  ====================================== */\nconst Index = {\n  // 记录跳转\n  recordSkip(flag) {\n    window.$fn.session('m-skip', encodeURIComponent(window.location.hash));\n  },\n  getSkipRecord() {\n    const url = window.$fn.session('m-skip');\n    let to = decodeURIComponent(url).replace('#', '');\n    if (to === '/login') {\n      to = '/';\n    }\n    setTimeout(() => window.$fn.sessionRemove('m-skip'), 200);\n    return window.$fn.session('m-skip') ? to : null;\n  },\n  // 刷新跳转\n  go(path) {\n    const route = path || '/login';\n    const {\n      port,\n      protocol,\n      hostname,\n      pathname\n    } = window.location;\n    const ports = port === 80 ? '' : ':' + port;\n    window.location.replace(protocol + '//' + hostname + ports + pathname + '#' + route);\n    // window.location.replace(protocol + '//' + hostname + ports + route)\n    // window.history.replaceState(protocol + '//' + hostname + ports + route)\n  },\n\n  // 返回\n  back() {\n    window.history.back();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/router.js?");

/***/ }),

/***/ "./src/_pub/common/core/storage.js":
/*!*****************************************!*\
  !*** ./src/_pub/common/core/storage.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/storage */ \"./src/_pub/common/store/storage.js\");\n/* harmony import */ var _store_indexdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/indexdb */ \"./src/_pub/common/store/indexdb.js\");\n/* ====================================== 本地存储配置  ====================================== */\n\n\nconst Storage = (0,_store_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(window.localStorage);\nconst Session = (0,_store_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(window.sessionStorage);\nconst Index = {\n  // 存储与获取数据\n  session(name, data) {\n    return arguments.length <= 1 ? Session.get(name) : Session.set(name, data);\n  },\n  // 移除数据\n  sessionRemove(name) {\n    Session.remove(name);\n  },\n  // 清除全部\n  sessionClear() {\n    Session.clear();\n  },\n  // 获取用户信息\n  getUser() {\n    const user = this.local('user');\n    return this.hasObject(user) ? user : {};\n  },\n  // localStorage 存储\n  local(name, data) {\n    return arguments.length <= 1 ? Storage.get(name) : Storage.set(name, data);\n  },\n  localRemove(name) {\n    Storage.remove(name);\n  },\n  localClear() {\n    Storage.clear();\n  },\n  // IndexDB\n  async indexDB(name, data) {\n    return arguments.length <= 1 ? await _store_indexdb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(name) : _store_indexdb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(name, data);\n  },\n  indexDBRemove(name) {\n    _store_indexdb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(name);\n  },\n  indexDBClear() {\n    _store_indexdb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/core/storage.js?");

/***/ }),

/***/ "./src/_pub/common/fn.js":
/*!*******************************!*\
  !*** ./src/_pub/common/fn.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/data-type */ \"./src/_pub/common/core/data-type.js\");\n/* harmony import */ var _core_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/storage */ \"./src/_pub/common/core/storage.js\");\n/* harmony import */ var _core_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/query */ \"./src/_pub/common/core/query.js\");\n/* harmony import */ var _core_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/rest */ \"./src/_pub/common/core/rest.js\");\n/* harmony import */ var _core_inner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/inner */ \"./src/_pub/common/core/inner.js\");\n/* harmony import */ var _core_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/router */ \"./src/_pub/common/core/router.js\");\n/* harmony import */ var _core_form_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/form-search */ \"./src/_pub/common/core/form-search.js\");\n/* harmony import */ var _core_form_submit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/form-submit */ \"./src/_pub/common/core/form-submit.js\");\n/* harmony import */ var $project_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! $project/fn */ \"./src/project/fn.js\");\n/* harmony import */ var _react_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./react/lazy */ \"./src/_pub/common/react/lazy/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst msg = _react_lazy__WEBPACK_IMPORTED_MODULE_9__[\"default\"].file(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_rc-field-form_es_index_js-node_modules_rc-field-form_es_useWatch_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_index_js-node_modules_antd_es_message_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_CloseOutlined_js-node_modules_antd_es_locale_d-2b169b\"), __webpack_require__.e(\"src__pub_global_plugin_antd_message_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/message */ \"./src/_pub/global/plugin/antd/message.js\")));\nconst confirm = _react_lazy__WEBPACK_IMPORTED_MODULE_9__[\"default\"].file(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_rc-field-form_es_index_js-node_modules_rc-field-form_es_useWatch_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_CloseOutlined_js-node_modules_antd_es_locale_d-2f2b66\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_index_js-node_modules_antd_es_message_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_motion_js-node_modules_rc-dialog_es_index_js-node_modules_-60d01b\"), __webpack_require__.e(\"vendors-node_modules_antd_es_modal_index_js\"), __webpack_require__.e(\"src__pub_global_plugin_antd_confirm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/confirm */ \"./src/_pub/global/plugin/antd/confirm.js\")));\n/* ====================================== 全局变量及方法  ====================================== */\nconst Index = {\n  ..._core_data_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ..._core_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  ..._core_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  ..._core_rest__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  ..._core_inner__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ..._core_router__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  ..._core_form_search__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  ..._core_form_submit__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  ...$project_fn__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  msg: {\n    success: (v, d) => msg.then(f => f.success(v, d)),\n    warning: (v, d) => msg.then(f => f.warning(v, d)),\n    error: (v, d) => msg.then(f => f.error(v, d))\n  },\n  confirm: v => confirm.then(f => f(v))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/fn.js?");

/***/ }),

/***/ "./src/_pub/common/global.js":
/*!***********************************!*\
  !*** ./src/_pub/common/global.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ \"./src/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn */ \"./src/_pub/common/fn.js\");\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ \"./src/_pub/common/http.js\");\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./react */ \"./src/_pub/common/react/index.js\");\n/* harmony import */ var _react_lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react/lazy */ \"./src/_pub/common/react/lazy/index.js\");\n/* ====================================== api 配置  ====================================== */\n\n\n\n\n\nwindow.$fn = _fn__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.$config = (_config__WEBPACK_IMPORTED_MODULE_0___default());\nwindow.$http = _http__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.$lazy = _react_lazy__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nwindow.$ = _react__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/global.js?");

/***/ }),

/***/ "./src/_pub/common/http.js":
/*!*********************************!*\
  !*** ./src/_pub/common/http.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ \"./src/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn */ \"./src/_pub/common/fn.js\");\n/* ====================================== http 请求  ====================================== */\n\n//import CryptoJS from '@utils/cryptojs'\n\n\n// import qs from 'qs'\n/* ====================================== 参数配置  ====================================== */\nconst {\n  isOnLyPostGet,\n  env,\n  contentType\n} = (_config__WEBPACK_IMPORTED_MODULE_1___default());\n/**\r\n *  错误提法信息\r\n *\r\n * */\nconst LogInfo = (method, api, param, data, index) => {\n  if (env) {\n    const colors = ['red', 'green', 'orange'];\n    console.log(`%c ==================================【 ${method} 】【 ${api} 】==================================`, 'color:' + colors[index]);\n    console.log(' 参数：', param || {});\n    console.log(' 数据：', data);\n    console.log(`%c ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— end `, 'color:' + colors[index]);\n  }\n};\n/**\r\n *  配置头信息\r\n *\r\n * */\nlet cancel = [];\nconst stop = () => {\n  cancel.forEach(v => v());\n  cancel = [];\n};\nconst setConfig = ({\n  type,\n  token,\n  api,\n  upload,\n  download\n}) => {\n  const content = ['application/json;charset=utf-8', 'application/x-www-form-urlencoded', 'multipart/form-data'];\n  const _contentType = content[_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNotEmpty(type) ? type : contentType];\n  // 签名验证\n  /*\r\n  let time = new Date().getTime();\r\n     let sign = {\r\n     \trest_timestamp:time.toString(),\r\n  \trest_sign:CryptoJS.DES.encrypt(time.toString(), CryptoJS.enc.Utf8.parse('__UWILLBE_'), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).toString()\r\n     }*/\n  const headerToken = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken();\n  const contentTypeConfig = {\n    'Content-Type': _contentType\n  };\n  const tokenConfig = headerToken ? {\n    'Authorization': _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken()\n  } : {};\n  const header = token === false ? contentTypeConfig : {\n    ...contentTypeConfig,\n    ...tokenConfig\n  };\n  const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken);\n  return {\n    baseURL: api,\n    headers: header,\n    timeout: 30000,\n    responseType: download ? 'blob' : null,\n    //withCredentials : true\t// 跨域请求想要带上cookies设置为 true\n    cancelToken: new CancelToken(function executor(c) {\n      cancel.push(c);\n    })\n  };\n};\n/**\r\n *  序列化参数 {a:1,b:2} to ?a=1&b=2\r\n *\r\n * */\nconst serializeParam = (body, allowEmpty) => {\n  if (!_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasObject(body)) return '';\n  let param = body;\n  let str = '';\n  for (var i in param) {\n    const value = param[i];\n    if (allowEmpty) {\n      str += i + '=' + (value === undefined ? '' : value) + '&';\n    } else {\n      if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNotEmpty(value)) {\n        str += i + '=' + value + '&';\n      }\n    }\n  }\n  if (str.charAt(str.length - 1) === '&') {\n    str = str.slice(0, str.length - 1);\n  }\n  if (str) {\n    str = '?' + str;\n  } else {\n    str = encodeURI(str); // encodeURI 不对 [:, /, ;,?] 进行编码\n  }\n\n  return str;\n};\n\n/**\r\n * 将 body 以函数形式处理\r\n *\r\n * */\nconst manageBody = (body, allowEmpty) => {\n  if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFunction(body)) {\n    body = body();\n  } else if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasObject(body)) {\n    for (let i in body) {\n      let v = body[i];\n      if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isEmpty(v)) {\n        if (allowEmpty === true) {\n          body[i] = '';\n        } else if (allowEmpty === null) {\n          body[i] = null;\n        } else {\n          delete body[i];\n        }\n      }\n    }\n  }\n  return body;\n};\n/**\r\n *  动态改变数据\r\n *\r\n * */\nconst setData = (_this, value) => {\n  if (_this) {\n    if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFunction(_this)) {\n      _this(data => {\n        for (let i in value) {\n          data[i] = value[i];\n        }\n        return {\n          ...data\n        };\n      });\n    } else if (_this !== null && _this !== void 0 && _this.setState) {\n      // 如果是 react 状态组件\n      _this.stateState(value);\n    } else {\n      for (let i in value) {\n        _this[i] = value[i];\n      }\n    }\n  }\n};\n/**\r\n * http 核心封装\r\n *\r\n * */\nconst HttpRequest = (url, param, action, defined) => {\n  var _UD$onStart;\n  let UD = defined || {};\n  if (!_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isString(url) || !_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNotEmpty(url)) {\n    Promise.reject();\n    return _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast('接口未传递正确');\n  }\n  let empty = action === 'get' ? false : true;\n  if (UD.empty !== undefined) {\n    empty = UD.empty;\n  }\n  // if( UD.type === 1) { body = qs?.stringify?.(body) }\n\n  const headerConfig = setConfig({\n    api: url.indexOf('http') !== -1 ? url : _config__WEBPACK_IMPORTED_MODULE_1___default().api(),\n    ...UD\n  });\n  UD === null || UD === void 0 ? void 0 : (_UD$onStart = UD.onStart) === null || _UD$onStart === void 0 ? void 0 : _UD$onStart.call(UD); // 一开始就调用\n  url = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isNotEmpty(UD.id) ? url + '/' + UD.id : url;\n  const m = {\n    'get': () => axios__WEBPACK_IMPORTED_MODULE_0___default().get(url + serializeParam(param, empty), headerConfig),\n    'delete': () => axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](url + serializeParam(param, empty), headerConfig),\n    'post': () => axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, manageBody(param, empty), headerConfig),\n    'put': () => axios__WEBPACK_IMPORTED_MODULE_0___default().put(url, manageBody(param, empty), headerConfig),\n    'patch': () => axios__WEBPACK_IMPORTED_MODULE_0___default().patch(url, manageBody(param, empty), headerConfig)\n  };\n  const promise = m[action]();\n  // 加载效果\n  return new Promise((resolve, reject) => {\n    promise.then(res => {\n      var _UD$onEnd, _UD$onSuccess;\n      const resData = res.data;\n      const {\n        code,\n        data,\n        msg\n      } = resData;\n      if (code === 200) {\n        resolve(data);\n        LogInfo(action, url, param, data, 1);\n      } else if (code === (_config__WEBPACK_IMPORTED_MODULE_1___default().noLoginCode) || code === (_config__WEBPACK_IMPORTED_MODULE_1___default().loginExpireCode)) {\n        var _$fn$login, _window, _window$$modalRef, _window$$modalRef$cal, _window$$modalRef$cal2, _window2, _window2$$formModalRe, _window2$$formModalRe2, _window2$$formModalRe3, _window3, _window3$$tableModalR, _window3$$tableModalR2, _window3$$tableModalR3, _window4, _window4$$imageModalR, _window4$$imageModalR2, _window4$$imageModalR3;\n        // 未登录\n        _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast(code === (_config__WEBPACK_IMPORTED_MODULE_1___default().noLoginCode) ? '请先登录' : '登录信息已过期，请重新登录!');\n        _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].localRemove('user');\n        _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].recordSkip();\n        LogInfo(action, url, param, data, 2);\n        _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login ? (_$fn$login = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login) === null || _$fn$login === void 0 ? void 0 : _$fn$login.call(_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) : setTimeout(() => _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].go('/login'), 200); // 跳转不同登录页\n        if (UD.pass) {\n          resolve(null);\n        } // 失败时，是否继续异步\n        //\n        (_window = window) === null || _window === void 0 ? void 0 : (_window$$modalRef = _window.$modalRef) === null || _window$$modalRef === void 0 ? void 0 : (_window$$modalRef$cal = _window$$modalRef.call(_window)) === null || _window$$modalRef$cal === void 0 ? void 0 : (_window$$modalRef$cal2 = _window$$modalRef$cal.close) === null || _window$$modalRef$cal2 === void 0 ? void 0 : _window$$modalRef$cal2.call(_window$$modalRef$cal);\n        (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$$formModalRe = _window2.$formModalRef) === null || _window2$$formModalRe === void 0 ? void 0 : (_window2$$formModalRe2 = _window2$$formModalRe.call(_window2)) === null || _window2$$formModalRe2 === void 0 ? void 0 : (_window2$$formModalRe3 = _window2$$formModalRe2.close) === null || _window2$$formModalRe3 === void 0 ? void 0 : _window2$$formModalRe3.call(_window2$$formModalRe2);\n        (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$$tableModalR = _window3.$tableModalRef) === null || _window3$$tableModalR === void 0 ? void 0 : (_window3$$tableModalR2 = _window3$$tableModalR.call(_window3)) === null || _window3$$tableModalR2 === void 0 ? void 0 : (_window3$$tableModalR3 = _window3$$tableModalR2.close) === null || _window3$$tableModalR3 === void 0 ? void 0 : _window3$$tableModalR3.call(_window3$$tableModalR2);\n        (_window4 = window) === null || _window4 === void 0 ? void 0 : (_window4$$imageModalR = _window4.$imageModalRef) === null || _window4$$imageModalR === void 0 ? void 0 : (_window4$$imageModalR2 = _window4$$imageModalR.call(_window4)) === null || _window4$$imageModalR2 === void 0 ? void 0 : (_window4$$imageModalR3 = _window4$$imageModalR2.close) === null || _window4$$imageModalR3 === void 0 ? void 0 : _window4$$imageModalR3.call(_window4$$imageModalR2);\n      } else {\n        var _UD$onFail;\n        // 数据请求成功但不符合规则\n        if (UD.download) {\n          _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(false);\n          resolve(resData);\n          LogInfo(action, url, param, data, 1);\n          return;\n        }\n        reject(data);\n        if (UD.onMsg) {\n          var _UD$onMsg, _UD$onError;\n          UD === null || UD === void 0 ? void 0 : (_UD$onMsg = UD.onMsg) === null || _UD$onMsg === void 0 ? void 0 : _UD$onMsg.call(UD, data); // 自定义提示\n          UD === null || UD === void 0 ? void 0 : (_UD$onError = UD.onError) === null || _UD$onError === void 0 ? void 0 : _UD$onError.call(UD, data);\n        } else {\n          _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast(msg, UD.onError, 30000); // 默认开启出错提示\n        }\n\n        UD === null || UD === void 0 ? void 0 : (_UD$onFail = UD.onFail) === null || _UD$onFail === void 0 ? void 0 : _UD$onFail.call(UD, resData); // 数据处理不满足条件时调用\n\n        LogInfo(action, url, param, data, 2);\n        if (UD.pass) {\n          resolve(null);\n        } // 失败时，是否继续异步\n      }\n\n      UD === null || UD === void 0 ? void 0 : (_UD$onEnd = UD.onEnd) === null || _UD$onEnd === void 0 ? void 0 : _UD$onEnd.call(UD, resData); // 只要调用接口就调用\n      UD === null || UD === void 0 ? void 0 : (_UD$onSuccess = UD.onSuccess) === null || _UD$onSuccess === void 0 ? void 0 : _UD$onSuccess.call(UD, resData); // 只要调用接口成功就调用\n    }, err => {\n      var _UD$onNet, _UD$onError2, _UD$onEnd2;\n      // 接口错误处理\n      if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(err)) {\n        return LogInfo(action, url + ' 接口请求被取消', param, '无', 0);\n      }\n      if (!UD.noError) {\n        _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast('服务器或网络出错');\n      }\n      UD === null || UD === void 0 ? void 0 : (_UD$onNet = UD.onNet) === null || _UD$onNet === void 0 ? void 0 : _UD$onNet.call(UD); // 服务器出错或无网络调用\n      UD === null || UD === void 0 ? void 0 : (_UD$onError2 = UD.onError) === null || _UD$onError2 === void 0 ? void 0 : _UD$onError2.call(UD); // 只要出错就调用\n      UD === null || UD === void 0 ? void 0 : (_UD$onEnd2 = UD.onEnd) === null || _UD$onEnd2 === void 0 ? void 0 : _UD$onEnd2.call(UD); // 只要调用接口就调用\n      LogInfo(action, url, param, '无', 0);\n      if (UD.pass) {\n        resolve(null);\n      } // 失败时，是否继续异步\n    });\n  });\n};\n/**\r\n * post 提交\r\n *\r\n * */\nconst post = (_this, api, option) => {\n  const opt = {\n    param: {},\n    loading: true,\n    loadingName: 'postLoading',\n    method: 'post',\n    type: contentType,\n    // Content-Type 类型\n    ...option\n  };\n  if (!api) {\n    Promise.reject();\n    return _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast('接口未传递正确');\n  }\n  setData(_this, {\n    [opt.loadingName]: true,\n    loading: true\n  });\n  if (opt.loading) {\n    const loadingText = opt.loadingText || '数据提交中';\n    _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(true, loadingText + '...');\n  }\n  const run = () => {\n    opt.onSuccess && opt.onSuccess();\n  };\n  return new Promise((resolve, reject) => {\n    const param = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFunction(opt.param) ? opt.param() : opt.param;\n    HttpRequest(api, opt.type === 2 ? param : {\n      ...(_this === null || _this === void 0 ? void 0 : _this.model),\n      ...param\n    }, opt.method, {\n      onStart: () => {\n        var _opt$onStart;\n        return opt === null || opt === void 0 ? void 0 : (_opt$onStart = opt.onStart) === null || _opt$onStart === void 0 ? void 0 : _opt$onStart.call(opt);\n      },\n      onEnd: () => {\n        var _opt$onEnd;\n        setData(_this, {\n          [opt.loadingName]: false,\n          loading: false\n        });\n        opt.loading && _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(false);\n        opt === null || opt === void 0 ? void 0 : (_opt$onEnd = opt.onEnd) === null || _opt$onEnd === void 0 ? void 0 : _opt$onEnd.call(opt);\n      },\n      onMsg: opt.onMsg && (data => {\n        var _opt$onMsg;\n        return opt === null || opt === void 0 ? void 0 : (_opt$onMsg = opt.onMsg) === null || _opt$onMsg === void 0 ? void 0 : _opt$onMsg.call(opt, data);\n      }),\n      noError: opt.noError,\n      onError: opt.onError,\n      onFail: opt.onFail,\n      token: opt.token,\n      type: opt.type,\n      id: opt.id,\n      empty: opt.empty // 是否允许空参数\n    }).then(data => {\n      resolve(data);\n      // 提示后执行\n      if (opt.successText) {\n        if (opt.runFirst) {\n          _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast(opt.successText);\n          run();\n        } else {\n          _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast(opt.successText, run);\n        }\n      } else {\n        // 直接执行\n        run();\n      }\n    }, data => {\n      reject(data);\n    });\n  });\n};\nconst del = (_this, api, option) => post(_this, api, {\n  method: isOnLyPostGet ? 'post' : 'delete',\n  loadingText: '数据删除中',\n  ...option\n});\nconst put = (_this, api, option) => post(_this, api, {\n  method: isOnLyPostGet ? 'post' : 'put',\n  loadingText: '数据修改中',\n  ...option\n});\nconst patch = (_this, api, option) => post(_this, api, {\n  method: isOnLyPostGet ? 'post' : 'patch',\n  loadingText: '数据修改中',\n  ...option\n});\nconst upload = (_this, api, option) => post(_this, api, {\n  method: option.way ?? 'post',\n  loadingText: '数据上传中',\n  type: 2,\n  ...option\n});\nconst download = (_this, api, option) => pull(_this, api, {\n  loadingText: '数据下载中',\n  loading: true,\n  download: true,\n  ...option\n});\n/**\r\n * get 获取数据\r\n *\r\n * */\nconst pull = (_this, api, option) => {\n  const opt = {\n    param: {},\n    // 参数\n    dataName: 'data',\n    loading: false,\n    // 如果有加载效果\n    loadingName: 'pullLoading',\n    ...option\n  };\n  if (!api) {\n    Promise.reject();\n    return _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast('接口未传递正确');\n  }\n  if (_this) {\n    var _opt$onLoading, _this$onLoading;\n    if (opt.first && !_this.first) {\n      setData(_this, {\n        [opt.loadingName]: true,\n        loading: true,\n        first: true\n      });\n    } else {\n      setData(_this, {\n        [opt.loadingName]: true,\n        loading: true\n      });\n    }\n    opt === null || opt === void 0 ? void 0 : (_opt$onLoading = opt.onLoading) === null || _opt$onLoading === void 0 ? void 0 : _opt$onLoading.call(opt, true);\n    _this === null || _this === void 0 ? void 0 : (_this$onLoading = _this.onLoading) === null || _this$onLoading === void 0 ? void 0 : _this$onLoading.call(_this, _this.loading);\n  }\n  if (opt.loading) {\n    const loadingText = opt.loadingText || '数据加载中';\n    _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(true, loadingText + '...');\n  }\n  return new Promise((resolve, reject) => {\n    let param = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFunction(opt.param) ? opt.param() : opt.param;\n    if (opt.setParam) {\n      param = {\n        ...param,\n        ...opt.setParam(param)\n      };\n    }\n    HttpRequest(api, param, 'get', {\n      id: opt.id,\n      onStart: () => {\n        var _opt$onStart2;\n        return opt === null || opt === void 0 ? void 0 : (_opt$onStart2 = opt.onStart) === null || _opt$onStart2 === void 0 ? void 0 : _opt$onStart2.call(opt);\n      },\n      onEnd: () => {\n        var _opt$onEnd2, _this$onLoading2, _opt$onLoading2;\n        setData(_this, {\n          [opt.loadingName]: false,\n          loading: false\n        });\n        opt.loading && _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(false);\n        (_opt$onEnd2 = opt.onEnd) === null || _opt$onEnd2 === void 0 ? void 0 : _opt$onEnd2.call(opt);\n        _this === null || _this === void 0 ? void 0 : (_this$onLoading2 = _this.onLoading) === null || _this$onLoading2 === void 0 ? void 0 : _this$onLoading2.call(_this, _this.loading);\n        opt === null || opt === void 0 ? void 0 : (_opt$onLoading2 = opt.onLoading) === null || _opt$onLoading2 === void 0 ? void 0 : _opt$onLoading2.call(opt, false);\n      },\n      onMsg: opt.onMsg && (data => {\n        var _opt$onMsg2;\n        return opt === null || opt === void 0 ? void 0 : (_opt$onMsg2 = opt.onMsg) === null || _opt$onMsg2 === void 0 ? void 0 : _opt$onMsg2.call(opt, data);\n      }),\n      noError: opt.noError,\n      onError: () => {\n        var _opt$onError;\n        opt === null || opt === void 0 ? void 0 : (_opt$onError = opt.onError) === null || _opt$onError === void 0 ? void 0 : _opt$onError.call(opt);\n        opt.loading && _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(false);\n      },\n      token: opt.token,\n      download: opt.download,\n      pass: opt.pass,\n      // 登录失败时，是否继续异步\n      empty: opt.empty // 是否允许空参数\n    }).then(data => {\n      let result = data !== null && data !== void 0 && data.rows ? data.rows : data;\n      if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFunction(opt.onSuccess)) {\n        result = opt.onSuccess(result);\n      }\n      if (!opt.paging) {\n        if (opt.setName) {\n          if (_fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasArray(result)) {\n            result = result.map((v, i) => ({\n              ...v,\n              ...opt.setName(v, i)\n            }));\n          } else {\n            result = {\n              ...result,\n              ...opt.setName(result)\n            };\n          }\n        } // 自定义数据字段\n        setData(_this, {\n          [opt.dataName]: result\n        });\n        resolve(result);\n      } else {\n        resolve(data);\n      }\n    });\n  });\n};\n/**\r\n * 分页获取数据\r\n *\r\n * */\nconst paging = (_this, api, option) => {\n  const opt = {\n    param: {},\n    // 参数\n    loading: false,\n    // 如果有加载效果\n    loadingName: 'pagingLoading',\n    dataName: 'data',\n    paging: true,\n    ...option\n  };\n  if (!api) {\n    Promise.reject();\n    return _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toast('接口未传递正确');\n  }\n  const {\n    dataName = 'data',\n    pageSizeName = 'size',\n    pageNumName = 'page',\n    totalItemsName = 'total_items',\n    totalPagesName = 'total_pages',\n    pageSize = 10\n  } = ((_config__WEBPACK_IMPORTED_MODULE_1___default()) === null || (_config__WEBPACK_IMPORTED_MODULE_1___default()) === void 0 ? void 0 : (_config__WEBPACK_IMPORTED_MODULE_1___default().paging)) || {};\n  const optParam = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResult(opt.param); // 搜索保留、重置不保留\n  const optQuery = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResult(opt.query); // 搜索保留、重置保留\n  const optArg = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResult(opt.arg); // 搜索不保留、重置不保留\n  let model = optParam;\n  if (opt.resetEmpty) opt.resetSearch = true; // 重置搜索\n  if (_this) {\n    const thisModel = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResult(_this.model);\n    const thisQuery = _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResult(_this.query);\n    _this.model = opt.resetSearch ? {} : {\n      ...thisModel,\n      ...optParam\n    };\n    _this.query = opt.resetSearch ? {} : {\n      ...thisQuery,\n      ...optQuery\n    };\n    model = _this === null || _this === void 0 ? void 0 : _this.model;\n  }\n  let param = model;\n\n  // 重置搜索为空数据\n  if (opt.resetEmpty) {\n    var _this$onLoading3, _opt$onEnd3, _opt$onLoading3;\n    opt.loading && _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(false);\n    _this === null || _this === void 0 ? void 0 : (_this$onLoading3 = _this.onLoading) === null || _this$onLoading3 === void 0 ? void 0 : _this$onLoading3.call(_this, _this.loading);\n    setData(_this, {\n      [opt.dataName]: [],\n      [opt.loadingName]: false,\n      loading: false\n    });\n    (_opt$onEnd3 = opt.onEnd) === null || _opt$onEnd3 === void 0 ? void 0 : _opt$onEnd3.call(opt);\n    opt === null || opt === void 0 ? void 0 : (_opt$onLoading3 = opt.onLoading) === null || _opt$onLoading3 === void 0 ? void 0 : _opt$onLoading3.call(opt, false);\n    return Promise.resolve({\n      data: []\n    });\n  }\n  if (opt.paging !== 0 && opt.paging !== false) {\n    const {\n      page,\n      size\n    } = param ?? {};\n    param = {\n      page: page || 1,\n      // 当前页\n      size: size || pageSize,\n      // 每页显示多少条数据\n      ...(_this === null || _this === void 0 ? void 0 : _this.query),\n      ...model,\n      ...optArg\n    };\n\n    // param[ pageNumName ] = param.page\n    // param[ pageSizeName ] = param.size\n    // if( pageNumName !== 'page' ){ delete param.page }\n    // if( pageSizeName !== 'size' ){ delete param.size }\n  } else {\n    param = {\n      ...(_this === null || _this === void 0 ? void 0 : _this.query),\n      ...optArg,\n      ...model\n    };\n  }\n  return new Promise(resolve => {\n    pull(_this, api, {\n      onStart: () => {\n        var _opt$onStart3;\n        opt === null || opt === void 0 ? void 0 : (_opt$onStart3 = opt.onStart) === null || _opt$onStart3 === void 0 ? void 0 : _opt$onStart3.call(opt);\n      },\n      onEnd: () => {\n        var _opt$onEnd4;\n        opt === null || opt === void 0 ? void 0 : (_opt$onEnd4 = opt.onEnd) === null || _opt$onEnd4 === void 0 ? void 0 : _opt$onEnd4.call(opt);\n      },\n      onError: () => {\n        var _opt$onError2;\n        opt === null || opt === void 0 ? void 0 : (_opt$onError2 = opt.onError) === null || _opt$onError2 === void 0 ? void 0 : _opt$onError2.call(opt);\n        setData(_this, {\n          [opt.dataName]: []\n        });\n      },\n      loading: opt.loading,\n      loadingName: opt.loadingName,\n      setParam: opt.setParam,\n      paging: true,\n      empty: true,\n      param,\n      id: opt.id\n    }).then(result => {\n      if (opt.paging !== 0 && opt.paging !== false) {\n        let data = (result === null || result === void 0 ? void 0 : result[dataName]) || (result === null || result === void 0 ? void 0 : result.rows);\n        if (!Array.isArray(data)) data = [];\n        if (opt.setName) {\n          data = data.map((v, i) => ({\n            ...v,\n            ...opt.setName(v, i)\n          }));\n        } // 自定义数据字段\n        const page = +result[pageNumName]; // 当前页码\n        const size = +result[pageSizeName]; // 每页多少条数据\n        const pages = +result[totalPagesName]; // 总共多少条数据\n        const total = +result[totalItemsName]; // 总共多少页\n        const pager = {\n          page,\n          size,\n          total,\n          pages,\n          data,\n          result,\n          param\n        };\n        setData(_this, {\n          pager,\n          [opt.dataName]: _fn__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasArray(data) ? [...data] : []\n        });\n        resolve({\n          data,\n          pager,\n          result\n        });\n      } else {\n        let data = Array.isArray(result) ? result : (result === null || result === void 0 ? void 0 : result[dataName]) || (result === null || result === void 0 ? void 0 : result.rows) || [];\n        if (opt.setName) {\n          data = data.map((v, i) => ({\n            ...v,\n            ...opt.setName(v, i)\n          }));\n        } // 自定义数据字段\n        // setData(_this,{ [opt.dataName]: $fn.hasArray(result) ? [...result] : [] })\n        setData(_this, {\n          [opt.dataName]: data\n        });\n        resolve({\n          data: result\n        });\n      }\n    });\n  });\n};\n/**\r\n * 暴露方法\r\n *\r\n * */\nconst Index = {\n  post,\n  del,\n  put,\n  upload,\n  download,\n  pull,\n  paging,\n  patch,\n  stop,\n  serializeParam\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/http.js?");

/***/ }),

/***/ "./src/_pub/common/react/index.js":
/*!****************************************!*\
  !*** ./src/_pub/common/react/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/_pub/common/react/router.js\");\n/* harmony import */ var _router_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router-dynamic */ \"./src/router-dynamic.js\");\n/* -------------------------------------------------------- 动态菜单配置页 -- */\n\n\n/**\r\n * React 特有方法\r\n * @param importComponent \t# 引入组件 () => import()\r\n * @param path \t\t\t\t# 路径\r\n */\nconst Index = {\n  /**\r\n   * 添加 className 中的某一项\r\n   * @param {String} name \t# className\r\n   * @param {Boolean} flag   \t# 判断条件\r\n   */\n  css() {\n    const {\n      length\n    } = arguments;\n    if (length === 1) {\n      const name = arguments[0];\n      return typeof name === 'string' ? name : '';\n    } else if (length === 2) {\n      return arguments[0] ? arguments[1] ?? '' : '';\n    } else {\n      return '';\n    }\n  },\n  /**\r\n   * 返回不同形式组件\r\n   * @param {Function, Component}\tcpt\t# 组件\t\r\n   */\n  cpt(component) {\n    if (typeof component === 'function') {\n      return component();\n    } else {\n      return component;\n    }\n  },\n  /**\r\n   * 获取 ref 上的方法\r\n   * @param {Function, Component}\tcpt\t# 组件\t\r\n   */\n  ref: ref => {\n    var _ref$current, _ref$current$myRef;\n    return ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$myRef = _ref$current.myRef) === null || _ref$current$myRef === void 0 ? void 0 : _ref$current$myRef.current;\n  },\n  ..._router__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ..._router_dynamic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/index.js?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/index.js":
/*!*********************************************!*\
  !*** ./src/_pub/common/react/lazy/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazy_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-load */ \"./src/_pub/common/react/lazy/lazy-load.jsx\");\n/* harmony import */ var _lazy_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-router */ \"./src/_pub/common/react/lazy/lazy-router.jsx\");\n/* harmony import */ var _lazy_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-file */ \"./src/_pub/common/react/lazy/lazy-file.jsx\");\n/* harmony import */ var _lazy_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-state */ \"./src/_pub/common/react/lazy/lazy-state.jsx\");\n/* harmony import */ var _lazy_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-hook */ \"./src/_pub/common/react/lazy/lazy-hook.jsx\");\n\n\n\n\n\nconst Index = {\n  load: _lazy_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  router: _lazy_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  file: _lazy_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  state: _lazy_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  hook: _lazy_hook__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/index.js?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/lazy-file.jsx":
/*!**************************************************!*\
  !*** ./src/_pub/common/react/lazy/lazy-file.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 直接加载文件，无任务处理，通用\r\n * @param {type=Function}\timportComponent \t# 引入组件 () => import()\r\n */\n\nconst Index = async importComponent => importComponent().then(f => f.default);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/lazy-file.jsx?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/lazy-hook.jsx":
/*!**************************************************!*\
  !*** ./src/_pub/common/react/lazy/lazy-hook.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n/**\r\n * 异步加载 Hooks 组件\r\n * @param {Function}\timportComponent \t# 引入组件 () => import()\r\n * @param {Integer} \tdelay\t\t\t\t# 延迟毫秒数\r\n */\nconst Index = (importComponent, option) => {\n  const {\n    m,\n    d\n  } = option ?? {};\n  return class My extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    state = {\n      Component: null\n    };\n    myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef();\n    setComponent = Component => {\n      Component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(Component);\n      Component = m === 0 ? Component : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(Component);\n      this.setState({\n        Component\n      }, () => {\n        var _this$props$onRef, _this$props;\n        (_this$props$onRef = (_this$props = this.props).onRef) === null || _this$props$onRef === void 0 ? void 0 : _this$props$onRef.call(_this$props, this.myRef.current);\n        My.ref = this.myRef.current;\n      });\n    };\n    async componentDidMount() {\n      // importComponent().then(f => this.setState({ Component: React.forwardRef(f.default) }, ()=> this.props.onRef?.(this.ref.current) ) )\n\n      const {\n        default: Component\n      } = await importComponent();\n      if (d) {\n        this.clear = setTimeout(() => this.setComponent(Component), 500);\n      } else {\n        this.setComponent(Component);\n      }\n    }\n    componentWillUnmount() {\n      if (this.clear) {\n        clearTimeout(this.clear);\n      }\n      // this.setState = (state, callback) => { return }\n      this.setState = (state, callback) => false;\n    }\n    render() {\n      const {\n        Component\n      } = this.state;\n      return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: this.myRef\n      }, this.props)) : null;\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/lazy-hook.jsx?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/lazy-load.jsx":
/*!**************************************************!*\
  !*** ./src/_pub/common/react/lazy/lazy-load.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n/**\r\n * 异步加载有状态组件\r\n * @param {Function}\timportComponent \t# 引入组件 () => import()\r\n */\nconst Index = (importComponent, option) => {\n  const {\n    m\n  } = option ?? {};\n  return class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    state = {\n      Component: null\n    };\n    async componentDidMount() {\n      // importComponent().then(f => this.setState({ Component: f.default } ) )\n\n      const {\n        default: Component\n      } = await importComponent();\n      this.setState({\n        Component: m === 0 ? Component : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Component)\n      });\n    }\n    componentWillUnmount() {\n      // this.setState = (state, callback) => { return }\n      this.setState = (state, callback) => false;\n    }\n    render() {\n      const {\n        Component\n      } = this.state;\n      return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, this.props) : null;\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/lazy-load.jsx?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/lazy-router.jsx":
/*!****************************************************!*\
  !*** ./src/_pub/common/react/lazy/lazy-router.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _tp_page_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tp/page-loading */ \"./src/_pub/global/template/page-loading.jsx\");\n/* harmony import */ var _com_react_lazy_lazy_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @com/react/lazy/lazy-load */ \"./src/_pub/common/react/lazy/lazy-load.jsx\");\n\n/* -------------------------------------------------------- Sync Component -- */\n\n\n/* -------------------------------------------------------- Async Component -- */\nconst NotFound = (0,_com_react_lazy_lazy_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_-6cfdaa\"), __webpack_require__.e(\"src__pub_common_react_lazy_404_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./404 */ \"./src/_pub/common/react/lazy/404.jsx\")));\n/**\r\n * 异步加载路由组件\r\n * @param {Function}\timportComponent \t# 引入组件 () => import()\r\n * @param {String}\t\tpath \t\t\t\t# 路径\r\n */\nconst Lazy = (importComponent, path) => {\n  return class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    state = {\n      Component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tp_page_loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n    };\n    async componentDidMount() {\n      try {\n        // importComponent().then(f => this.setState({ Component: f.default } ) )\n        const {\n          default: Component\n        } = await importComponent();\n        this.setState({\n          Component\n        });\n      } catch (e) {\n        console.error(`组件不存在: ${path}.jsx`);\n        this.setState({\n          Component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotFound, {\n            isComponent: true\n          })\n        });\n      }\n    }\n    componentWillUnmount() {\n      var _window$$http, _window$$http$stop;\n      // this.setState = (state, callback) => { return }\n      this.setState = (state, callback) => false;\n      (_window$$http = window.$http) === null || _window$$http === void 0 ? void 0 : (_window$$http$stop = _window$$http.stop) === null || _window$$http$stop === void 0 ? void 0 : _window$$http$stop.call(_window$$http);\n    }\n    render() {\n      const {\n        Component\n      } = this.state;\n      return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, this.props) : null;\n    }\n  };\n};\nconst Index = path => Lazy(() => __webpack_require__(\"./src/views lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + path), path);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/lazy-router.jsx?");

/***/ }),

/***/ "./src/_pub/common/react/lazy/lazy-state.jsx":
/*!***************************************************!*\
  !*** ./src/_pub/common/react/lazy/lazy-state.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n/**\r\n * 异步加载有状态组件\r\n * @param {Function}\timportComponent \t# 引入组件 () => import()\r\n * @param {Integer} \tdelay\t\t\t\t# 延迟毫秒数\r\n */\nconst Index = (importComponent, delay) => {\n  return class My extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    state = {\n      Component: null\n    };\n    myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef();\n    setComponent = Component => {\n      Component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(Component);\n      this.setState({\n        Component\n      }, () => {\n        var _this$props$onRef, _this$props;\n        (_this$props$onRef = (_this$props = this.props).onRef) === null || _this$props$onRef === void 0 ? void 0 : _this$props$onRef.call(_this$props, this.myRef.current);\n        My.ref = this.myRef.current;\n      });\n    };\n    async componentDidMount() {\n      // importComponent().then(f => this.setState({ Component: f.default }, ()=> this.props.onRef?.(this.myRef.current) ) )\n\n      const {\n        default: Component\n      } = await importComponent();\n      if (delay) {\n        this.clear = setTimeout(() => this.setComponent(Component), 500);\n      } else {\n        this.setComponent(Component);\n      }\n    }\n    componentWillUnmount() {\n      if (this.clear) {\n        clearTimeout(this.clear);\n      }\n      // this.setState = (state, callback) => { return }\n      this.setState = (state, callback) => false;\n    }\n    render() {\n      const {\n        Component\n      } = this.state;\n      return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: this.myRef\n      }, this.props)) : null;\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/lazy/lazy-state.jsx?");

/***/ }),

/***/ "./src/_pub/common/react/router.js":
/*!*****************************************!*\
  !*** ./src/_pub/common/react/router.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Index = {\n  /**\r\n   * 将参数格式化可识别参数\r\n   * @param {Object, Number, String }\t\tparam\t\t# 跳转参数，对象时为可选参数，其它为必选参数\r\n   * @param {Boolean} \t\t\t\t\tmust\t\t# 是否是格式化必选参数\r\n   * @return {String} \t'?a=1&b=2' or '/0/1'\r\n   */\n  format(param, must) {\n    if (!param) return '';\n    const {\n      $fn,\n      $http\n    } = window;\n    if ($fn.isObject(param)) {\n      if (must) {\n        let url = '';\n        for (let i in param) {\n          url += '/' + param[i];\n        }\n        return url;\n      } else {\n        return $http.serializeParam(param);\n      }\n    } else {\n      return '/' + param;\n    }\n  },\n  /**\r\n   * 路由跳转\r\n   * @param {Object}\t\t\t\t\t\thistory\t\t# history\r\n   * @param {path} \t\t\t\t\t\tapi\t\t\t# 路由\r\n   * @param {Object, Number, String }\t\tparam\t\t# 跳转参数，对象时为可选参数，其它为必选参数\r\n   */\n  push(history, path, param, must) {\n    history.push(path + this.format(param, must));\n  },\n  replace(history, path, param, must) {\n    history.replace(path + this.format(param, must));\n  },\n  /**\r\n   * 从当前路由跳转到子路由\r\n   * @param {Object}\t\t\t\t\t\thistory\t\t# history\r\n   * @param {path} \t\t\t\t\t\tapi\t\t\t# 路由 '/path' or 'path'\r\n   * @param {Object, Number, String }\t\tparam\t\t# 跳转参数，对象时为可选参数，其它为必选参数\r\n   */\n  pushNext(history, path, param) {\n    path = path.includes('/') ? path : '/' + path;\n    path = this.getRoot(path) + path;\n    this.push(history, path, param);\n  },\n  getRoot(n) {\n    let url = window.location.hash;\n    url = url.replace('#', '');\n    url = url.replace(/\\?.+/g, '');\n    return url;\n  },\n  /**\r\n   * 获取菜单\r\n   * @param {Boolean}\tisLogin\t\t# 否是登录处使用\r\n   * @param {String} \tapi\t\t\t# 菜单 api\r\n   * @param {Array}\tdata\t\t# 本地菜单数据，一般用于无后台数据时调试\r\n   * @param {Array}\tchildRouter\t# 子路由\t\t\t\t\t\r\n   */\n  async getDymaicMenu({\n    isLogin,\n    api,\n    data,\n    childRouter\n  }) {\n    const {\n      $fn\n    } = window;\n    let menu = $fn.session('menu');\n    if (isLogin || !$fn.hasArray(menu)) {\n      if ($fn.hasArray(data)) {\n        menu = data;\n      }\n      if (api) {\n        const token = $fn.getToken();\n        if (token || isLogin) {\n          menu = await window.$http.pull(null, api, {\n            loading: true,\n            pass: true\n          });\n        }\n        if (!token) {\n          $fn.go('/login');\n        }\n      }\n      if ($fn.hasArray(menu)) {\n        this.getChildRouter(menu, childRouter);\n        $fn.session('menu', menu);\n      } else {\n        menu = [];\n      }\n    }\n    return menu;\n  },\n  // 将 child 塞到对应菜单节点\n  getChildRouter(data, childRouter) {\n    const {\n      $fn\n    } = window;\n    if ($fn.hasArray(data)) {\n      data.forEach(v => {\n        const {\n          name,\n          children\n        } = v;\n        if ($fn.hasArray(children)) {\n          this.getChildRouter(children, childRouter);\n        } else {\n          if ($fn.hasObject(childRouter)) {\n            const child = childRouter[name];\n            if ($fn.hasArray(child)) {\n              v.child = child;\n            }\n          }\n        }\n      });\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/react/router.js?");

/***/ }),

/***/ "./src/_pub/common/store/indexdb.js":
/*!******************************************!*\
  !*** ./src/_pub/common/store/indexdb.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * indexdb 离线存储 \r\n * \r\n */\n// ======================================================================================= 创建表\nconst dbName = 'db';\nconst dbNameVersion = 1;\nconst DB = () => {\n  let req = window.indexedDB.open(dbName, dbNameVersion);\n  return new Promise((resolve, reject) => {\n    req.onsuccess = e => {\n      let db = e.target.result;\n      let transaction = db.transaction(dbName, 'readwrite');\n      let store = transaction.objectStore(dbName);\n      resolve(store);\n      req = null;\n    };\n    req.onerror = e => {\n      console.log(dbName + '数据库使用失败：' + e.srcElement.error.message);\n      reject(e.message);\n    };\n    req.onupgradeneeded = e => {\n      let db = e.target.result;\n      if (!db.objectStoreNames.contains(dbName)) {\n        db.createObjectStore(dbName);\n      }\n      console.log(dbName + ' 表创建成功');\n    };\n  });\n};\n// ======================================================================================= service\nconst Index = {\n  // ====================================== 保存数据，\n  // 如果不存在则添加，如果存在则覆盖，\n  // 即可添加字符串，也可添加对象\n  set(key, data) {\n    return DB().then(store => {\n      try {\n        let req = store.get(key);\n        req.onsuccess = e => {\n          store.put(data, key);\n        };\n        req.onerror = e => {\n          console.log('存储数据到 indexdb 失败');\n        };\n        return true;\n      } catch (e) {\n        return false;\n      }\n    });\n  },\n  // ====================================== 获取数据\n  get(key) {\n    return new Promise((resolve, reject) => {\n      DB().then(store => {\n        try {\n          let req = store.get(key);\n          req.onsuccess = e => {\n            resolve(e.target.result);\n          };\n          req.onerror = e => {\n            console.log('获取 indexdb 数据失败');\n          };\n        } catch (e) {\n          resolve(null);\n        }\n      });\n    });\n  },\n  // ====================================== 删除数据\n  remove(key) {\n    DB().then(store => {\n      let req = store.delete(key);\n      req.onsuccess = e => {\n        console.log('删除 indexdb 数据成功');\n      };\n      req.onerror = e => {\n        console.log('删除 indexdb 数据失败');\n      };\n    });\n  },\n  async clear() {\n    if (window.indexedDB.databases) {\n      const data = await window.indexedDB.databases();\n      if (data.length > 0) {\n        window.indexedDB.deleteDatabase(dbName);\n      }\n    } else {\n      window.indexedDB.deleteDatabase(dbName);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/store/indexdb.js?");

/***/ }),

/***/ "./src/_pub/common/store/storage.js":
/*!******************************************!*\
  !*** ./src/_pub/common/store/storage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* ====================================== 本地存储  ====================================== */\nconst Index = Storage => {\n  const isObject = d => {\n    const str = {}.toString.call(d);\n    return str === '[object Object]' || str === '[object Array]';\n  };\n  return {\n    // 存储值\n    set(key, value) {\n      if (isObject(value)) {\n        value = JSON.stringify(value);\n      }\n      Storage.setItem(key, value);\n    },\n    // 获取值\n    get(key) {\n      const value = Storage.getItem(key);\n      if (value === null || value === undefined || value === '') {\n        return false;\n      } else {\n        try {\n          return JSON.parse(value);\n        } catch (e) {\n          return value;\n        }\n      }\n    },\n    // 移出值\n    remove(key) {\n      if (typeof key === 'string') {\n        if (key.indexOf(',') > -1) {\n          const keys = key.split(',');\n          keys.forEach(v => {\n            Storage.removeItem(v);\n          });\n        } else {\n          Storage.removeItem(key);\n        }\n      }\n    },\n    // 删除全部\n    clear() {\n      Storage.clear();\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/store/storage.js?");

/***/ }),

/***/ "./src/_pub/global/component/teleport-17.jsx":
/*!***************************************************!*\
  !*** ./src/_pub/global/component/teleport-17.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  // 挂载时执行\n  componentDidMount() {\n    if (!this.props.isUpdate) {\n      this.renderSubtree();\n    }\n  }\n  // 获取指定 dom\n  getNode = () => {\n    const {\n      el\n    } = this.props;\n    return el ? document.querySelector(el) : document.body;\n  };\n  // 更新时执行\n  componentDidUpdate() {\n    if (this.props.isUpdate) {\n      this.renderSubtree();\n    }\n  }\n  // 将要销毁时执行\n  componentWillUnmount() {\n    this.el && this.getNode().removeChild(this.el); // 移出节点\n  }\n  // 添加节点\n  retContainer = () => {\n    if (!this.el) {\n      const node = document.createElement(this.props.tag || 'div');\n      node.setAttribute('name', this.props.name ?? 'global'); // 设置节点属性\n      this.el = node;\n      this.getNode().appendChild(this.el);\n    }\n    return this.el;\n  };\n  // 获取 children 内容\n  retContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.children);\n  // 渲染到节点\n  renderSubtree = () => {\n    react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer());\n  };\n  render() {\n    return null;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/component/teleport-17.jsx?");

/***/ }),

/***/ "./src/_pub/global/template/page-loading.jsx":
/*!***************************************************!*\
  !*** ./src/_pub/global/template/page-loading.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cpt_teleport_17__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cpt/teleport-17 */ \"./src/_pub/global/component/teleport-17.jsx\");\n/* ====================================== 页面加载效果  ====================================== */\n\n/* -------------------------------------------------------- Sync Component -- */\n\n/* -------------------------------------------------------- 页面加载组件 -- */\nconst Index = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cpt_teleport_17__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  name: \"page-loading\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"loading-wraper\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"dl\", {\n  className: \"loading-circle\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null))))));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/template/page-loading.jsx?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(module) {

eval("/* ====================================== api 配置  ====================================== */\nconst env = \"development\" === 'development'; // 是否为开发环境\n\n// const exist = str => window.location.host.indexOf(str) >= 0\n\nconst _api = {\n  dev: 'http://localhost:8083/api/',\n  // dev : 'http://api.jiazhenger.com:8083/api/',\n  release: 'http://localhost:8083/api/'\n};\nconst api = () => env ? _api.dev : _api.release;\n/* ====================================== 全局变量配置  ====================================== */\nconst Index = {\n  api,\n  env,\n  // 环境变量\n  contentType: 0,\n  // Content-type 数据传输类型\n  idStr: 'value',\n  nameStr: 'label',\n  mainColor: '#4da1ff',\n  // 主要颜色\n  // http\n  isOnLyPostGet: false,\n  // 是否只有 Post 、Get 两种请求\n  postIdName: 'id',\n  // 提交字段 id 名称\n  pullIdName: 'id',\n  // 读取字段 id 名称\n  noLoginCode: 201,\n  // 未登录时 code\n  loginExpireCode: 202,\n  // 登录过期 code\n\n  paging: {\n    pageSize: 10,\n    // 默认一页多少数据\n    dataName: 'data',\n    // 数据字段名\n    pageSizeName: 'size',\n    // 每页多少条数据\n    pageNumName: 'page',\n    // 当前页码\n    totalItemsName: 'total_items',\n    // 总共多少条数据\n    totalPagesName: 'total_pages',\n    // 总共多少页\n    pageSizeOptions: ['10', '20', '50', '100', '200', '500', '1000'] // 分页模式\n  },\n\n  cache: true,\n  // 是否开启数据缓存\n  delWay: 'del',\n  // 删除请求方式 del\n  confirmWay: 'post',\n  // 确认提交请求方式 put\n  modWay: 'put',\n  // 编辑提交请求方式 put\n  delMul: false,\n  // 表格删除是否为数组\n  //\n  pageMinWidth: 1000,\n  // 页面最小宽度\n  pageMinHeight: 300,\n  // 页面最小高度\n  //\n  btnSpace: 8,\n  // 按钮之间的空隙\n  // antd\n  antd: {\n    btnSize: {\n      // 按钮、表单高度\n      mini: {\n        height: 24\n      },\n      small: {\n        height: 28\n      },\n      search: {\n        height: 26\n      },\n      submit: {\n        height: 30\n      },\n      middle: {\n        height: 34,\n        fontSize: 14,\n        minWidth: 90\n      },\n      large: {\n        height: 40,\n        fontSize: 18,\n        minWidth: 120\n      }\n    },\n    table: {\n      bordered: true\n    }\n  },\n  // 自定义按钮名称\n  btnName: {\n    mod: '修改',\n    del: '删除',\n    delPop: '删除',\n    back: '返回',\n    add: '新建',\n    refresh: '刷新',\n    clear: '清空'\n  },\n  spaceX: 10 // 左右边距\n};\n\nmodule.exports = Index;\n\n//# sourceURL=webpack://jzer-react-template/./src/config.js?");

/***/ }),

/***/ "./src/project/fn.js":
/*!***************************!*\
  !*** ./src/project/fn.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Index = {\n  // 表格配置\n  table: {\n    time: {\n      width: 140,\n      align: 'center'\n    },\n    sex: {\n      width: 60,\n      align: 'center'\n    },\n    phone: {\n      width: 90,\n      align: 'center'\n    },\n    email: {\n      width: 100\n    },\n    name: {\n      width: 80\n    },\n    money: {\n      width: 90,\n      align: 'center',\n      slots: {\n        customRender: 'money'\n      }\n    },\n    // 金额\n    four: {\n      width: 68\n    },\n    five: {\n      width: 80\n    },\n    six: {\n      width: 90\n    },\n    controls: {\n      width: 120,\n      align: 'center',\n      fixed: 'right'\n    },\n    bool: {\n      width: 80,\n      align: 'center',\n      render: text => (typeof text === 'boolean' ? text : Boolean(+text)) ? '是' : '否'\n    },\n    state: (data, fields) => ({\n      render: text => window.$fn.getState(data, text, fields)\n    })\n  },\n  getState(data, value, fields) {\n    const {\n      nameStr = 'label',\n      idStr = 'value'\n    } = fields || {};\n    const arr = data.filter(item => String(item[idStr]) === String(value));\n    return arr.length === 1 ? arr[0][nameStr] : '--';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/project/fn.js?");

/***/ }),

/***/ "./src/router-dynamic.js":
/*!*******************************!*\
  !*** ./src/router-dynamic.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  title: '我的组件',\n  name: 'my',\n  children: [{\n    title: '标题',\n    path: '/my/title'\n  }, {\n    title: '页面',\n    name: 'page',\n    children: [{\n      title: '滚动',\n      url: '/my/page/scroll'\n    }, {\n      title: '不滚动',\n      path: '/my/page/no-scroll'\n    }]\n  }, {\n    title: '盒子',\n    name: 'box',\n    children: [{\n      title: '基本格式',\n      name: 'box-base'\n    }, {\n      title: '弹性布局',\n      name: 'box-flex'\n    }]\n  }, {\n    title: '缓存页面',\n    name: 'cache-router'\n  }, {\n    title: '子级目录',\n    name: 'child-router',\n    exact: false\n  }]\n}, {\n  title: 'Antd 组件',\n  name: 'antd',\n  children: [{\n    title: '按钮',\n    name: 'button',\n    children: [{\n      title: 'Button',\n      name: 'button'\n    }, {\n      title: 'Dropdown',\n      name: 'dropdown'\n    }]\n  }, {\n    title: 'Tabs',\n    name: 'tabs',\n    children: [{\n      title: 'Tabs 1',\n      name: 'tabs-1'\n    }, {\n      title: 'Tabs 2',\n      name: 'tabs-2'\n    }, {\n      title: 'Tabs 3',\n      name: 'tabs-3'\n    }]\n  }]\n}, {\n  title: '表单提交',\n  name: 'form-submit',\n  children: [{\n    title: '表单元素',\n    name: 'form'\n  }, {\n    title: '表单结构',\n    name: 'form-structure'\n  }, {\n    title: '加载模式',\n    name: 'form-loading'\n  }, {\n    title: '登录',\n    name: 'form-login'\n  }, {\n    title: '自定义',\n    name: 'my-form'\n  }, {\n    title: '横向表单',\n    name: 'form-x'\n  }]\n}, {\n  title: '搜索表单',\n  name: 'form-search',\n  children: [{\n    title: '搜索表单模式',\n    name: 'form',\n    children: [{\n      title: '基础模式',\n      name: 'base'\n    }, {\n      title: '页面模式',\n      name: 'page'\n    }, {\n      title: '盒子模式',\n      name: 'box'\n    }]\n  }, {\n    title: '选择框',\n    name: 'row',\n    children: [{\n      title: '多选联动',\n      name: 'checkbox'\n    }]\n  }, {\n    title: '自定义搜索表单',\n    name: 'my-form'\n  }, {\n    title: '菜单管理',\n    name: 'menu'\n  }]\n}, {\n  title: '按钮操作',\n  name: 'controls-button',\n  children: [{\n    title: '基本操作',\n    name: 'page'\n  }, {\n    title: '盒子上的按钮',\n    name: 'box'\n  }, {\n    title: '按钮权限',\n    name: 'permission',\n    meta: {\n      permissions: ['add']\n    }\n  }]\n}, {\n  title: '表格操作',\n  name: 'table',\n  children: [{\n    title: '编辑表格',\n    name: 'table-edit'\n  }, {\n    title: '嵌套表格',\n    name: 'table-nest'\n  }]\n}, {\n  title: '弹窗操作',\n  name: 'modal',\n  children: [{\n    title: '弹窗表单',\n    name: 'submit-modal',\n    children: [{\n      title: '表单全局弹窗',\n      name: 'global'\n    }, {\n      title: '表单局部弹窗',\n      name: 'local'\n    }]\n  }, {\n    title: '弹窗表格',\n    name: 'table-modal',\n    children: [{\n      title: '表格全局弹窗',\n      name: 'global',\n      url: '/modal/table-modal/global'\n    }, {\n      title: '表格局部弹窗',\n      name: 'local'\n    }]\n  }, {\n    title: '自定义弹窗',\n    name: 'my-modal',\n    children: [{\n      title: '全局弹窗',\n      name: 'global'\n    }, {\n      title: '局部弹窗',\n      name: 'local'\n    }]\n  }, {\n    title: '图片预览',\n    name: 'image-modal',\n    icon: 'icon-workbench',\n    children: [{\n      title: '全局弹窗',\n      name: 'global',\n      icon: 'icon-workbench'\n    }, {\n      title: '局部弹窗',\n      name: 'local',\n      icon: 'icon-workbench'\n    }]\n  }, {\n    title: '自定义弹窗头',\n    name: 'my-modal-header'\n  }]\n}, {\n  title: '创建模板',\n  name: 'create-template',\n  children: [{\n    title: 'SearchTable',\n    name: 'SearchTable'\n  }]\n}];\nconst childRouter = {\n  'cache-router': [{\n    title: '页面 a',\n    name: 'a',\n    child: [{\n      title: '页面 b',\n      name: 'b'\n    }, {\n      title: '页面 c',\n      name: 'c'\n    }]\n  }]\n};\nconst Index = {\n  async getMenu(isLogin) {\n    return await window.$.getDymaicMenu({\n      childRouter,\n      isLogin,\n      data\n      // api:'/menu',\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/router-dynamic.js?");

/***/ }),

/***/ "./src/views lazy recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./src/views/ lazy ^\.\/.*$ namespace object ***!
  \***************************************************/
/***/ (function(module) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./src/views lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://jzer-react-template/./src/views/_lazy_^\\.\\/.*$_namespace_object?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"common/global": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react_index_js","vendors-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js-node_modules_babel_runtime_helpers_esm_extends_js"], function() { return __webpack_require__("./src/_pub/common/global.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;