"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjzer_react_template"] = self["webpackChunkjzer_react_template"] || []).push([["src__pub_global_plugin_antd_tree_tree-select_jsx"],{

/***/ "./src/_pub/global/plugin/antd/tree/tree-select.jsx":
/*!**********************************************************!*\
  !*** ./src/_pub/global/plugin/antd/tree/tree-select.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/tree-select/index.js\");\n\n\n/* -------------------------------------------------------- antd -- */\n\n/* -------------------------------------------------------- Declare -- */\nconst {\n  $fn,\n  $config\n} = window;\n/* -------------------------------------------------------- 回到顶部 -- */\nconst Index = ({\n  className,\n  /** @param {String}\t\t\t\t# 盒子 className */\n  style,\n  /** @param {String}\t\t\t\t# 盒子 style */\n  size = 'small',\n  /** @param {String}\t\t\t\t# 大小 */\n  name,\n  /** @param {String}\t\t\t\t# name */\n  p,\n  /** @param {String}\t\t\t\t# 提示语 */\n  hint = '请选择',\n  /** @param {String}\t\t\t\t# 提示语 */\n  label = '',\n  /** @param {String}\t\t\t\t# 标签名 */\n  width,\n  /** @param {String}\t\t\t\t# 宽度 */\n  //\n  value,\n  /** @param {String}\t\t\t\t# 值 */\n  disabled,\n  /** @param {Boolan}\t\t\t\t# 禁用 */\n  readOnly,\n  /** @param {Boolan}\t\t\t\t# 只读 */\n  allowClear = true,\n  /** @param {Boolan}\t\t\t\t# 显示清除按钮 */\n  // 获取值\n  onChange,\n  /** @param {Event}\t\t\t\t# 有 Form 时值改变时执行 */\n  onChanged,\n  /** @param {Event}\t\t\t\t# 值改变时执行 */\n  // 自定义扩展\n  antd = {},\n  /** @param {Object}\t\t\t\t# antd */\n  // data\n  api,\n  /** @param {String}\t\t\t\t# 获取数据的 api */\n  param,\n  /** @param {Object}\t\t\t\t# api 参数 */\n  paging,\n  /** @param {Object}\t\t\t\t# 是否分页*/\n  data,\n  /** @param {Array}\t\t\t\t# 数据 */\n  idStr = $config.idStr,\n  /** @param {String}\t\t\t\t# 提交字段名 */\n  nameStr = $config.nameStr,\n  /** @param {String}\t\t\t\t# 显示字段名 */\n  cache /** @param {Boolan}\t\t\t\t# 是否缓存 */\n}) => {\n  let [model, setModel] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value ?? '');\n  let [ajax, setAjax] = react__WEBPACK_IMPORTED_MODULE_1__.useState(data);\n  p = p ? p : hint + label;\n\n  // className = `jzer-select-${size} ${$.css(className)}`\n\n  antd = {\n    className,\n    disabled,\n    readOnly,\n    allowClear,\n    value: model,\n    placeholder: p,\n    showSearch: true,\n    // treeDefaultExpandAll:true,\t\t\t\t\t//默认展开所有树节\n    treeNodeFilterProp: 'title',\n    // 输入项过滤对应的 treeNode 属性\n    treeNodeLabelProp: nameStr,\n    // 要显示的字段名\n    fieldNames: {\n      value: idStr,\n      title: nameStr\n    },\n    // 自定义字段\n    treeData: ajax,\n    virtual: (ajax === null || ajax === void 0 ? void 0 : ajax.length) > 20,\n    style: {\n      minWidth: width,\n      ...style\n    },\n    ...antd\n  };\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => setModel(value), [value]);\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => $fn.ajax({\n    setAjax,\n    data: ajax,\n    api,\n    cache,\n    paging,\n    param\n  }), []); // eslint-disable-line\n\n  const _onChange = (value, label) => {\n    setModel(value);\n    let result = name ? {\n      model: {\n        [name]: value\n      }\n    } : null;\n    onChange === null || onChange === void 0 ? void 0 : onChange(value);\n    onChanged === null || onChanged === void 0 ? void 0 : onChanged({\n      value,\n      label,\n      ...result\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onChange: _onChange\n  }, antd));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/global/plugin/antd/tree/tree-select.jsx?");

/***/ })

}]);