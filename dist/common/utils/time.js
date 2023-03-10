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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/_pub/common/utils/time.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;