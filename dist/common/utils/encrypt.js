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

/***/ "./src/_pub/common/utils/encrypt.js":
/*!******************************************!*\
  !*** ./src/_pub/common/utils/encrypt.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n * 字符串加密与解密\r\n * */\n\nconst _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n// private method for UTF-8 encoding  \nconst _utf8_encode = string => {\n  string = string.replace(/\\r\\n/g, '\\n');\n  var utftext = '';\n  for (var n = 0; n < string.length; n++) {\n    var c = string.charCodeAt(n);\n    if (c < 128) {\n      utftext += String.fromCharCode(c);\n    } else if (c > 127 && c < 2048) {\n      utftext += String.fromCharCode(c >> 6 | 192);\n      utftext += String.fromCharCode(c & 63 | 128);\n    } else {\n      utftext += String.fromCharCode(c >> 12 | 224);\n      utftext += String.fromCharCode(c >> 6 & 63 | 128);\n      utftext += String.fromCharCode(c & 63 | 128);\n    }\n  }\n  return utftext;\n};\nconst _utf8_decode = function (utftext) {\n  var string = '';\n  var i = 0;\n  var c = 0;\n  var c2 = 0;\n  var c3 = 0;\n  while (i < utftext.length) {\n    c = utftext.charCodeAt(i);\n    if (c < 128) {\n      string += String.fromCharCode(c);\n      i++;\n    } else if (c > 191 && c < 224) {\n      c2 = utftext.charCodeAt(i + 1);\n      string += String.fromCharCode((c & 31) << 6 | c2 & 63);\n      i += 2;\n    } else {\n      c2 = utftext.charCodeAt(i + 1);\n      c3 = utftext.charCodeAt(i + 2);\n      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n      i += 3;\n    }\n  }\n  return string;\n};\nconst Index = {\n  // 加密\n  encode(input) {\n    var output = '';\n    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;\n    var i = 0;\n    input = _utf8_encode(input);\n    while (i < input.length) {\n      chr1 = input.charCodeAt(i++);\n      chr2 = input.charCodeAt(i++);\n      chr3 = input.charCodeAt(i++);\n      enc1 = chr1 >> 2;\n      enc2 = (chr1 & 3) << 4 | chr2 >> 4;\n      enc3 = (chr2 & 15) << 2 | chr3 >> 6;\n      enc4 = chr3 & 63;\n      if (isNaN(chr2)) {\n        enc3 = enc4 = 64;\n      } else if (isNaN(chr3)) {\n        enc4 = 64;\n      }\n      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);\n    }\n    return output;\n  },\n  // 解密\n  decode(input) {\n    var output = '';\n    var chr1, chr2, chr3;\n    var enc1, enc2, enc3, enc4;\n    var i = 0;\n    // input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, '');\n    input = input.replace(/[^A-Za-z0-9+/=]/g, '');\n    while (i < input.length) {\n      enc1 = _keyStr.indexOf(input.charAt(i++));\n      enc2 = _keyStr.indexOf(input.charAt(i++));\n      enc3 = _keyStr.indexOf(input.charAt(i++));\n      enc4 = _keyStr.indexOf(input.charAt(i++));\n      chr1 = enc1 << 2 | enc2 >> 4;\n      chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n      chr3 = (enc3 & 3) << 6 | enc4;\n      output = output + String.fromCharCode(chr1);\n      if (enc3 !== 64) {\n        output = output + String.fromCharCode(chr2);\n      }\n      if (enc4 !== 64) {\n        output = output + String.fromCharCode(chr3);\n      }\n    }\n    output = _utf8_decode(output);\n    return output;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack://jzer-react-template/./src/_pub/common/utils/encrypt.js?");

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
/******/ 	__webpack_modules__["./src/_pub/common/utils/encrypt.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;