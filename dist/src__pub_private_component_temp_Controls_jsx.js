"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_private_component_temp_Controls_jsx"],{

/***/ "./src/_pub/common/utils/download.js":
/*!*******************************************!*\
  !*** ./src/_pub/common/utils/download.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// const dispatch = obj => {\n// \tconst ev = document.createEvent('MouseEvents')\n// \tev.initMouseEvent(\n// \t\t'click', \n// \t\ttrue, \n// \t\tfalse, \n// \t\twindow, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\t0, \n// \t\tfalse, \n// \t\tfalse, \n// \t\tfalse, \n// \t\tfalse, \n// \t\t0, \n// \t\tnull\n// \t)\n// \tobj.dispatchEvent(ev)\n// }\n\nconst types = {\n  xlsx: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n  xls: 'vnd.ms-excel',\n  pdf: 'pdf',\n  word: 'vnd.openxmlformats-officedocument.wordprocessingml.document',\n  txt: 'text'\n};\nconst Index = {\n  // blobDispath(data, option) {\n  // \tconst {fileType = 'xlsx', fileName = 'download'} = option ?? {}\n\n  // \tconst urlObject = window.URL || window.webkitURL || window\n\n  // \tconst blob = new Blob([ data ],  { type: `application/${types[ fileType ]}; charset=utf-8`})\n\n  // \tconst link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')\n\n  // \tlink.href = urlObject.createObjectURL(blob)\n\n  // \tlink.download = fileName\n\n  // \tlink.style.display = 'none'\n\n  // \tdispatch(link)\n  // },\n  blob(data, option) {\n    const {\n      fileType = 'xlsx',\n      fileName = 'download'\n    } = option ?? {};\n    const urlObject = window.URL || window.webkitURL || window;\n    const blob = new Blob([data], {\n      type: `application/${types[fileType]}; charset=utf-8`\n    });\n    const link = document.createElement('a');\n    link.href = urlObject.createObjectURL(blob);\n    link.download = fileName;\n    link.style.display = 'none';\n    document.body.appendChild(link);\n    link.click();\n    document.body.removeChild(link);\n  },\n  // url 后台下载\n  form(url) {\n    const form = document.createElement('form');\n    form.method = 'post';\n    form.action = window.$config.api() + url;\n    form.target = '_blank';\n    // token 验证\n    const tokenInput = document.createElement('input');\n    tokenInput.type = 'hidden';\n    tokenInput.name = 'token';\n    tokenInput.value = window.$fn.getToken();\n    //\n    form.appendChild(tokenInput);\n    document.body.appendChild(form);\n    form.submit();\n    document.body.removeChild(form);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/download.js?");

/***/ }),

/***/ "./src/_pub/common/utils/upload.js":
/*!*****************************************!*\
  !*** ./src/_pub/common/utils/upload.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormDataUploader\": function() { return /* binding */ FormDataUploader; },\n/* harmony export */   \"getUpload\": function() { return /* binding */ getUpload; },\n/* harmony export */   \"upload\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* ====================================== 上传图片  ====================================== */\nconst {\n  $fn,\n  $http\n} = window;\nconst imageType = ['jpg', 'png', 'jpeg', 'gif'];\nconst maxMB = 2;\nconst maxKB = 1024 * 1024 * maxMB;\n\n// FormData 上传\nconst FormDataUploader = (name, files, param) => {\n  let fd = new FormData();\n  for (let i = 0; i < files.length; i++) {\n    fd.append(name, files[i]);\n  }\n  if (fd.get(name) === null) {\n    return;\n  }\n  if (param) {\n    for (var i in param) {\n      if (param.hasOwnProperty(i)) {\n        fd.append(i, param[i]);\n      }\n    }\n  }\n  return fd; // 相当于 { 'name':, ...param }\n};\n\nconst upload = ({\n  api,\n  change,\n  param,\n  way,\n  mul\n}) => {\n  let $upload = document.querySelector('#jz-upload');\n  if (!$upload) {\n    $upload = document.createElement('input');\n    if (mul) {\n      $upload.setAttribute('multiple', 'multiple');\n    }\n    $upload.setAttribute('type', 'file');\n  }\n  $upload.click();\n  $upload.onchange = e => {\n    const fd = FormDataUploader('file', e.target.files, param);\n    $http.upload(null, api, {\n      param: fd,\n      way\n    }).then(data => {\n      change === null || change === void 0 ? void 0 : change(data);\n    });\n    $upload.value = '';\n  };\n};\nconst getUpload = async (e, option) => {\n  const opt = {\n    name: 'file',\n    param: {},\n    ...option\n  };\n  if (!$fn.hasObject(e) || !e.target) {\n    return $fn.toast('未选择要上传的图片');\n  }\n  const files = e.target.files;\n  let yes = true;\n  for (var i = 0; i < files.length; i++) {\n    const file = files[i];\n    // 判断上传文件格式\n    const suffix = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();\n    if (imageType.indexOf(suffix) === -1) {\n      $fn.toast(file.name + '的格式必须为png、jpg、jpeg！');\n      yes = false;\n      break;\n    }\n    // 限制图片上传大小\n    if (file.size > maxKB) {\n      $fn.toast(file.name + '文件尺寸超过最大限制' + maxMB + 'M');\n      yes = false;\n      break;\n    }\n  }\n  if (!yes) return;\n  const fd = FormDataUploader(opt.name, files, opt.param);\n  return fd;\n};\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/upload.js?");

/***/ }),

/***/ "./src/_pub/private/component/temp/Controls.jsx":
/*!******************************************************!*\
  !*** ./src/_pub/private/component/temp/Controls.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _cpt_utils_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #cpt/utils/controls */ \"./src/_pub/private/component/utils/controls.js\");\n\n\n\n/* -------------------------------------------------------- Sync Function -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $lazy,\n  $fn,\n  $,\n  $config\n} = window;\n/* -------------------------------------------------------- Async Component -- */\nconst Button = $lazy.load(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-dom_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_ClearOutlined_js-node_modules_ant-design_icons-b5ba03\"), __webpack_require__.e(\"node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_type_js--92a4cb\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/button */ \"./src/_pub/global/plugin/antd/button.jsx\")));\nconst Dropdown = $lazy.load(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-dom_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_-d6e2e1\"), __webpack_require__.e(\"vendors-node_modules_rc-trigger_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_tooltip_index_js\"), __webpack_require__.e(\"vendors-node_modules_rc-overflow_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_dropdown_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_CaretDownOutlined_js-node_modules_rc-resize-ob-fe449d\"), __webpack_require__.e(\"src__pub_global_plugin_antd_dropdown_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/dropdown */ \"./src/_pub/global/plugin/antd/dropdown.jsx\")));\nconst Popconfirm = $lazy.load(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-dom_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_-d6e2e1\"), __webpack_require__.e(\"vendors-node_modules_rc-trigger_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_tooltip_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_popconfirm_index_js\"), __webpack_require__.e(\"src__pub_global_plugin_antd_popconfirm_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/popconfirm */ \"./src/_pub/global/plugin/antd/popconfirm.jsx\")));\nconst Upload = $lazy.hook(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-dom_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_components_AntdIcon_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es__util_warning_js-node_modules_antd_es_config-provider_DisabledCo-bef5e4\"), __webpack_require__.e(\"vendors-node_modules_antd_es_config-provider_context_js-node_modules_rc-motion_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_LoadingOutlined_js-node_modules_antd_es__util_-d6e2e1\"), __webpack_require__.e(\"vendors-node_modules_rc-trigger_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_button_index_js\"), __webpack_require__.e(\"vendors-node_modules_antd_es_tooltip_index_js\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_CloseOutlined_js-node_modules_antd_es_locale_d-2f2b66\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_PlusOutlined_js-node_modules_antd_es_upload_index_js\"), __webpack_require__.e(\"src__pub_global_plugin_antd_form_upload_index_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! @antd/form/upload */ \"./src/_pub/global/plugin/antd/form/upload/index.jsx\")));\nconst Space = $lazy.load(() => __webpack_require__.e(/*! import() */ \"src__pub_global_template_space_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @tp/space */ \"./src/_pub/global/template/space.jsx\")));\n/* -------------------------------------------------------- 按钮组配置 -- */\nconst Index = props => {\n  let {\n    data,\n    className,\n    style,\n    size = 'small',\n    align = 'end',\n    loading,\n    refresh,\n    back,\n    table,\n    isTable,\n    keys\n  } = props;\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();\n  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setResult(data), [data]); // eslint-disable-line\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setResult(data => {\n      if (refresh) {\n        data = [...data, {\n          mode: 'refresh'\n        }];\n      } // 刷新\n      if (back) {\n        data = [...data, {\n          mode: 'back'\n        }];\n      } // 返回\n      return data;\n    });\n  }, []); // eslint-disable-line\n\n  const onClick = option => (0,_cpt_utils_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    option,\n    history,\n    tableConfig: table\n  });\n  const setDisabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({\n    mode,\n    disabled,\n    isKeys\n  }) => {\n    if ($fn.getResult(props.disabled)) {\n      return true;\n    } else {\n      if (['del', 'delPop'].includes(mode) && !isTable) {\n        isKeys = 1;\n      }\n      if (isKeys && table !== null && table !== void 0 && table.row) {\n        let {\n          tableRef\n        } = table;\n        if (tableRef) {\n          if ((keys === null || keys === void 0 ? void 0 : keys.length) === 0) {\n            return true;\n          } else {\n            return $fn.getResult(disabled, {\n              keys,\n              rows: tableRef().rows\n            });\n          }\n        }\n      } else {\n        return $fn.getResult(disabled);\n      }\n    }\n  }, [keys]); // eslint-disable-line\n\n  return $fn.hasArray(result) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Space, {\n    align: align,\n    className: className,\n    style: style\n  }, result.map((v, i) => {\n    if (!$fn.hasObject(v)) return null;\n    let {\n      hide,\n      mode,\n      label,\n      ghost,\n      show\n    } = v;\n    v.label = label ? label : $config.btnName[mode];\n    if (isTable) {\n      v.ghost = ghost ?? true;\n    } else {\n      v.ghost = $fn.isBoolean(ghost) ? ghost : ['del', 'delPop', 'back', 'refresh', 'clear'].includes(mode) ? true : ghost;\n    }\n    const disabled = setDisabled(v);\n\n    // hide = $fn.getResult(hide)\n    // show = $fn.getResult(show)\n\n    if (hide) return null;\n    if (show === false) {\n      return null;\n    }\n    if (mode === 'delPop') {\n      const title = v.msg ?? `确认${v.label}此数据？`;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Popconfirm, {\n        title: title,\n        onConfirm: onClick.bind(null, v),\n        key: i\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        size: size,\n        loading: loading\n      }, v, {\n        disabled: disabled\n      })));\n    } else if (mode === 'dropdown') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Dropdown, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        size: size,\n        loading: loading\n      }, v, {\n        disabled: disabled,\n        key: i,\n        onClick: onClick\n      }));\n    } else if (mode === 'upload' && v.api) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Upload, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        listType: \"button\",\n        showUploadList: false,\n        loading: loading\n      }, v, {\n        key: i\n      }));\n    } else if (mode === 'div') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, v, {\n        key: i\n      }), $.cpt(v.slot));\n    } else if (mode === 'ex') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"ex\"\n      }, v, {\n        key: i\n      }), $.cpt(v.slot));\n    } else {\n      if (v.slot) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n          key: i\n        }, $.cpt(v.slot));\n      }\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        size: size,\n        loading: loading\n      }, v, {\n        disabled: disabled,\n        key: i,\n        onClick: onClick.bind(null, v)\n      }));\n    }\n  })) : null;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/component/temp/Controls.jsx?");

/***/ }),

/***/ "./src/_pub/private/component/utils/controls.js":
/*!******************************************************!*\
  !*** ./src/_pub/private/component/utils/controls.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _com_utils_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @com/utils/upload */ \"./src/_pub/common/utils/upload.js\");\n/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/download */ \"./src/_pub/common/utils/download.js\");\n\n\nconst {\n  $fn,\n  $,\n  $config,\n  $http\n} = window;\n/**\r\n * 操作按钮\r\n */\nconst Index = ({\n  index,\n  /** @param {String}\t\t\t\t# 表单行索引 */\n  option,\n  /** @param {String}\t\t\t\t# 按钮配置选项 */\n  tableConfig = {},\n  /** @param {String}\t\t\t\t# 总配置 */\n  history /** @param {String}\t\t\t\t# 路由跳转句柄 rouer.push() */\n}) => {\n  // 按钮 config\n  let {\n    // option 专有\n    label,\n    /** @param {String}\t\t\t\t# 按钮名称 */\n    mode,\n    /** @param {String}\t\t\t\t# 按钮模式 */\n    click,\n    /** @param {Event}\t\t\t\t# 点击按钮 */\n    to,\n    /** @param {String}\t\t\t\t# 跳转按钮 */\n    toNext,\n    /** @param {String}\t\t\t\t# 下级页面跳转 */\n    link,\n    /** @param {String}\t\t\t\t# 三方链接跳转 */\n    // download\n    fileType,\n    /** @param {String}\t\t\t\t# 文件类型 */\n    fileName,\n    /** @param {String}\t\t\t\t# 文件名称 */\n    downway = 'blob',\n    /** @param {String}\t\t\t\t# 下载方式 */\n    // mode === comfirm\n    msg,\n    /** @param {String}\t\t\t\t# 自定义提示消息*/\n    successText,\n    /** @param {String}\t\t\t\t# 自定义成功提示消息*/\n    // 混用\n    api,\n    /** @param {String}\t\t\t\t# */\n    infoApi,\n    /** @param {String}\t\t\t\t# 回显接口 */\n    onSuccess,\n    /** @param {Event}\t\t\t\t# 提交成功后执行 */\n    way,\n    /** @param {String}\t\t\t\t# 请求方式 */\n    param,\n    /** @param {Object}\t\t\t\t# 提交可选参数 */\n    id,\n    /** @param {String}\t\t\t\t# id 值 */\n    r,\n    /** @param {String}\t\t\t\t# 刷新表格 */\n    c,\n    /** @param {String}\t\t\t\t# 清除表格 */\n    rs,\n    /** @param {Boolean}\t\t\t# 刷新后滚动是否回到顶部*/\n    rc,\n    /** @param {String}\t\t\t\t# 刷新并清空 keys */\n    mul,\n    /** @param {Boolan,Number}\t\t# 是否多个 */\n    abs,\n    /** @param {Boolan,Number}\t\t# 参数是否是绝对参数 */\n    must,\n    /** @param {Boolan,Number}\t\t# 提交参数是否是绝对参数 */\n    // 弹窗\n    backData,\n    /** @param {Object, Event}\t\t# 有 infoApi 时二次回显参数， 无 infoApi 回显参数 */\n    backInfo,\n    /** @param {Object, Event}\t\t# 编辑无接口时回显参数 */\n    backParam,\n    /** @param {Object, Event}\t\t# 回显时接口参数 */\n    onBack,\n    /** @param { Event}\t\t\t\t# 返回后执行 */\n    // mode === upload\n    change,\n    /** @param {Event}\t\t\t\t# 改变时执行 */\n    // 弹窗配置\n    config /** @param {Object}\t\t\t\t# 弹窗配置 */\n  } = option ?? {};\n  const optionConfig = $fn.getResult(config);\n  param = $fn.getResult(param) || $fn.getResult(optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.param);\n  rc = $fn.getResult(rc);\n  r = $fn.getResult(r);\n  c = $fn.getResult(c);\n  id = $fn.getResult(id);\n  // 表格配置\n  let {\n    ctrApi,\n    row,\n    clearApi,\n    delApi,\n    modApi,\n    addApi,\n    record\n  } = tableConfig ?? {};\n  const isTable = record;\n  ctrApi = ctrApi || (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.ctrApi);\n  const idStr = (tableConfig === null || tableConfig === void 0 ? void 0 : tableConfig.idStr) ?? $config.pullIdName; // 从 table 上拿读取字段 id 名称\n  const sidStr = ((option === null || option === void 0 ? void 0 : option.sidStr) || (option === null || option === void 0 ? void 0 : option.idStr) || (tableConfig === null || tableConfig === void 0 ? void 0 : tableConfig.idStr)) ?? $config.postIdName; // 提交 id 的参数名\n  const bidStr = ((option === null || option === void 0 ? void 0 : option.bidStr) || (option === null || option === void 0 ? void 0 : option.idStr) || (tableConfig === null || tableConfig === void 0 ? void 0 : tableConfig.idStr)) ?? $config.pullIdName; // 回显 id 的参数名\n  const uidStr = (option === null || option === void 0 ? void 0 : option.idStr) ?? $config.postIdName; // 无回显模式，提交 id 的参数名\n  if (isTable && !id) {\n    id = record[idStr];\n  }\n  // 清除 api\n  clearApi = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.clearApi) || (option === null || option === void 0 ? void 0 : option.clearApi) || clearApi; // 依次从按钮上的 config、按钮、table 上获取\n  if (clearApi) {\n    clearApi = $fn.isString(clearApi) ? clearApi : tableConfig.api;\n  }\n  // 拿刷新 ref\n  const tableRef = $fn.getResult((tableConfig === null || tableConfig === void 0 ? void 0 : tableConfig.tableRef) || option.tableRef);\n  const searchRef = $fn.getResult((tableConfig === null || tableConfig === void 0 ? void 0 : tableConfig.searchRef) || option.searchRef);\n  let keys = [];\n  let rows = null;\n  if (row) {\n    var _tableRef$keys;\n    keys = tableRef === null || tableRef === void 0 ? void 0 : (_tableRef$keys = tableRef.keys) === null || _tableRef$keys === void 0 ? void 0 : _tableRef$keys.call(tableRef);\n    rows = $fn.isArray(keys) ? tableRef.rows : () => [];\n  }\n  if (click) {\n    $fn.func(click, isTable ? {\n      tableRef,\n      searchRef,\n      index,\n      row: record\n    } : {\n      keys,\n      rows,\n      searchRef,\n      tableRef,\n      label\n    });\n  } else if (to) {\n    $.push(history, to, param);\n  } else if (toNext) {\n    $.pushNext(history, toNext, param);\n  } else if (link) {\n    window.open(link);\n  } else if (mode === 'img') {\n    if (api) {\n      if (!abs) {\n        param = {\n          [uidStr]: id,\n          ...param\n        };\n      }\n      id = param ? null : String(id);\n      $http.pull(null, api, {\n        id,\n        param\n      }).then(data => {\n        data = `data:image/jpg;base64,${data}`.replace(/[\\r\\n]/g, '');\n        window.$imageModalRef().open({\n          data,\n          preview: false,\n          title: option.title || label\n        });\n      });\n    } else {\n      if (optionConfig) {\n        window.$imageModalRef().open(optionConfig);\n      }\n    }\n  } else if (mode === 'download') {\n    if (downway === 'url') {\n      $http[way ?? 'pull'](null, api, {\n        param,\n        loading: true,\n        loadingText: label + '中'\n      }).then(data => {\n        const url = backData ? backData(data) : data;\n        window.open(url);\n        $fn.msg.success('文件下载成功');\n      });\n    } else if (downway === 'form') {\n      _utils_download__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form($config.api() + api);\n    } else {\n      $http[way ?? 'download'](null, api, {\n        param,\n        loading: true,\n        loadingText: label + '中'\n      }).then(data => {\n        _utils_download__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blob(data, {\n          fileName: $fn.getResult(fileName),\n          fileType\n        });\n        $fn.msg.success('文件下载成功');\n      });\n    }\n  } else if (mode === 'upload') {\n    (0,_com_utils_upload__WEBPACK_IMPORTED_MODULE_0__.upload)({\n      api,\n      change,\n      param,\n      way: way ?? 'post',\n      mul\n    });\n  } else if (mode === 'submit') {\n    way = way ?? 'post';\n    $http[way](null, api, {\n      param\n    }).then(() => {\n      $fn.msg.success(successText ? successText : `${label}成功`);\n      if (tableRef) {\n        if (r) {\n          tableRef.refresh();\n        }\n        if (c) {\n          tableRef.clearKeys();\n        }\n        if (rc && !r && !c) {\n          tableRef.refreshClear();\n        }\n      }\n      if (clearApi) {\n        $fn.indexDBRemove(clearApi);\n      }\n      onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess({\n        tableRef\n      });\n    });\n  } else if (['confirm', 'del', 'delPop', 'clear'].includes(mode)) {\n    const {\n      setParam,\n      setNewParam,\n      isStr\n    } = option;\n    if (mode.includes('del')) {\n      api = option.api || delApi || ctrApi || tableConfig.api;\n    }\n    // 删除参数是否为数组\n    mul = mul ?? $config.delMul;\n    let ids = isTable ? mul ? [id] : id : keys;\n    if (!ids) {\n      ids = mul ? [id] : id;\n    }\n    param = $fn.getResult(param, {\n      param,\n      keys,\n      rows,\n      ids\n    });\n\n    // 默认参数\n    if (mode === 'clear') {\n      rc = 1;\n    }\n    if (['del', 'delPop'].includes(mode)) {\n      way = way ?? ($config === null || $config === void 0 ? void 0 : $config.delWay) ?? 'post';\n      label = $config.btnName[mode];\n      rc = 1;\n      rs = 0;\n    } else if (mode === 'confirm') {\n      way = way ?? ($config === null || $config === void 0 ? void 0 : $config.confirmWay) ?? 'post';\n    }\n    const onDel = () => new Promise((resolve, reject) => {\n      if (!abs) {\n        param = {\n          [uidStr]: isStr ? String(ids) : ids,\n          ...param\n        };\n        param = setParam ? {\n          ...param,\n          ...setParam(param)\n        } : param; // 处理参数\n        if (setNewParam) {\n          param = setNewParam(param);\n        } // 重新组合参数\n      }\n\n      if ($fn.isEmpty(id)) id = param ? null : String(ids);\n      $http[way ?? 'post'](null, api, {\n        id,\n        param,\n        loading: mode === 'delPop',\n        onError: reject\n      }).then(data => {\n        resolve();\n        $fn.msg.success(successText ? successText : `${label}成功`);\n        if (tableRef) {\n          if (r) {\n            tableRef.refresh(rs);\n          }\n          if (c) {\n            tableRef.clearKeys();\n          }\n          if (rc && !r && !c) {\n            tableRef.refreshClear(rs);\n          }\n        }\n        if (clearApi) {\n          $fn.indexDBRemove(clearApi);\n        }\n        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);\n      });\n    });\n    if (mode === 'delPop') {\n      onDel();\n    } else {\n      $fn.confirm({\n        msg: msg || `确认${label}此数据？`,\n        onOk: onDel\n      });\n    }\n  } else if (mode === 'formModal' || mode === 'mod' || mode === 'list') {\n    const modalConfig = {\n      idStr,\n      sidStr,\n      bidStr,\n      id,\n      param,\n      abs,\n      tableRef,\n      mode,\n      label,\n      ...optionConfig\n    };\n    const formConfig = (modalConfig === null || modalConfig === void 0 ? void 0 : modalConfig.form) ?? {};\n    modalConfig.form = {\n      id,\n      way,\n      must,\n      tableRef,\n      clearApi,\n      param,\n      mode,\n      label,\n      api: formConfig.api || ctrApi,\n      // 获取提交 api\n      r: optionConfig.r ?? r,\n      c: optionConfig.c ?? c,\n      rc: optionConfig.rc ?? rc,\n      rs: optionConfig.rs ?? rs,\n      ...formConfig\n    };\n    if (mode === 'mod') {\n      if (tableConfig.addConfig) {\n        tableConfig.addConfig.mod = true;\n        tableConfig.addConfig.add = false;\n      }\n      modalConfig.form.r = 1;\n      modalConfig.form.mod = true;\n      modalConfig.form.add = false;\n      modalConfig.backInfo = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.backInfo) || backInfo; // 编辑特有回显数据\n    }\n\n    const {\n      form\n    } = optionConfig;\n    modalConfig.modal = optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.modal; // 弹窗标题\n    modalConfig.backData = (form === null || form === void 0 ? void 0 : form.backData) || (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.backData) || backData; // 回显数据\n    modalConfig.backParam = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.backParam) || backParam; // 回显参数\n    modalConfig.form.clearApi = clearApi;\n    modalConfig.form.api = (form === null || form === void 0 ? void 0 : form.api) || api || modApi || ctrApi || tableConfig.api; // 从弹窗配置拿提交 api\n    modalConfig.form.refApi = tableConfig.api; // 表格的 api，用于清缓存\n    modalConfig.form.mode = mode;\n    if (infoApi === false || (form === null || form === void 0 ? void 0 : form.infoApi) === false) {\n      modalConfig.form.infoApi = false;\n    } else if (infoApi === true || (form === null || form === void 0 ? void 0 : form.infoApi) === true) {\n      modalConfig.form.infoApi = (form === null || form === void 0 ? void 0 : form.api) || api;\n    } else {\n      modalConfig.form.infoApi = (form === null || form === void 0 ? void 0 : form.infoApi) || infoApi || tableConfig.infoApi || ctrApi || tableConfig.api; // 从按钮配置拿回显 infoApi\n    }\n\n    window.$formModalRef().open(modalConfig);\n  } else if (mode === 'tableModal') {\n    const modalConfig = {\n      idStr,\n      sidStr,\n      bidStr,\n      id,\n      param,\n      r,\n      c,\n      rs,\n      rc,\n      abs,\n      must,\n      way,\n      tableRef,\n      label,\n      clearApi,\n      ...optionConfig\n    };\n    modalConfig.api = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.api) || api; // 从弹窗配置拿提交 api\n    modalConfig.infoApi = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.infoApi) || infoApi; // 从按钮配置拿回显 infoApi\n    modalConfig.refApi = tableConfig.api; // 表格的 api，用于清缓存\n    modalConfig.backData = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.backData) || backData; // 回显数据\n    modalConfig.backParam = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.backParam) || backParam; // 回显参数\n    modalConfig.keyStr = (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.keyStr) || (option === null || option === void 0 ? void 0 : option.keyStr); // 回显数据\n\n    window.$tableModalRef().open(modalConfig);\n  } else if (mode === 'modal') {\n    window.$modalRef().open(optionConfig);\n  } else if (mode === 'back') {\n    $fn.back();\n    onBack === null || onBack === void 0 ? void 0 : onBack();\n  } else if (mode === 'refresh') {\n    var _window, _window$refreshRouter;\n    (_window = window) === null || _window === void 0 ? void 0 : (_window$refreshRouter = _window.refreshRouter) === null || _window$refreshRouter === void 0 ? void 0 : _window$refreshRouter.call(_window);\n  } else if (mode === 'add') {\n    if (tableConfig.addConfig) {\n      tableConfig.addConfig.mod = false;\n      tableConfig.addConfig.add = true;\n    }\n    let modalConfig = {\n      mode,\n      backData,\n      tableRef,\n      ...optionConfig,\n      ...tableConfig.addConfig\n    };\n    const formConfig = modalConfig.form ?? {};\n    modalConfig.form = {\n      r: !Boolean(row),\n      rc: Boolean(row),\n      rs: (optionConfig === null || optionConfig === void 0 ? void 0 : optionConfig.rs) ?? rs,\n      api: formConfig.api || api || addApi || ctrApi || tableConfig.api,\n      // 获取提交 api\n      refApi: tableConfig.api,\n      clearApi,\n      infoApi,\n      mode,\n      label,\n      param,\n      add: true,\n      mod: false,\n      ...formConfig\n    };\n    window.$formModalRef().open({\n      ...modalConfig,\n      table: tableConfig\n    });\n  }\n  if (mode !== 'mod' && mode !== 'add') {\n    if (tableConfig !== null && tableConfig !== void 0 && tableConfig.addConfig) {\n      tableConfig.addConfig.mod = false;\n      tableConfig.addConfig.add = false;\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/private/component/utils/controls.js?");

/***/ })

}]);