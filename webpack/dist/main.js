/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/css/count.css":
/*!*************************************!*\
  !*** ./public/assets/css/count.css ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .box{\\n|     width: 100px;\\n|     height: 100px;\");\n\n//# sourceURL=webpack://abc/./public/assets/css/count.css?");

/***/ }),

/***/ "./public/assets/less/count.less":
/*!***************************************!*\
  !*** ./public/assets/less/count.less ***!
  \***************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .wrap{\\n|     width: 100px;\\n|     height: 100px;\");\n\n//# sourceURL=webpack://abc/./public/assets/less/count.less?");

/***/ }),

/***/ "./public/assets/stylus/index.styl":
/*!*****************************************!*\
  !*** ./public/assets/stylus/index.styl ***!
  \*****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .box1\\n|     color blue\\n|     background url(\\\"./a.gif\\\")\");\n\n//# sourceURL=webpack://abc/./public/assets/stylus/index.styl?");

/***/ }),

/***/ "./src/js/count.js":
/*!*************************!*\
  !*** ./src/js/count.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ count)\n/* harmony export */ });\nfunction count(x,y){\r\n    return x+y;\r\n}\n\n//# sourceURL=webpack://abc/./src/js/count.js?");

/***/ }),

/***/ "./src/js/sum.js":
/*!***********************!*\
  !*** ./src/js/sum.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.count=function (...arg){\r\n    var res=arg.reduce((p,c)=>{\r\n        return p+c;\r\n    },0);\r\n    return res;\r\n}\n\n//# sourceURL=webpack://abc/./src/js/sum.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/count */ \"./src/js/count.js\");\n/* harmony import */ var _js_sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/sum */ \"./src/js/sum.js\");\n/* harmony import */ var _public_assets_css_count_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/css/count.css */ \"./public/assets/css/count.css\");\n/* harmony import */ var _public_assets_css_count_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_count_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_less_count_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/less/count.less */ \"./public/assets/less/count.less\");\n/* harmony import */ var _public_assets_less_count_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_less_count_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_stylus_index_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/stylus/index.styl */ \"./public/assets/stylus/index.styl\");\n/* harmony import */ var _public_assets_stylus_index_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_stylus_index_styl__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"count\",_js_count__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nconsole.log(\"sum\",_js_sum__WEBPACK_IMPORTED_MODULE_1__);\r\nconsole.log((0,_js_count__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10,20));\r\nconsole.log(_js_sum__WEBPACK_IMPORTED_MODULE_1__.count(10,21,32));\r\nconsole.log(123);\r\n\r\n\r\n\n\n//# sourceURL=webpack://abc/./src/main.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;