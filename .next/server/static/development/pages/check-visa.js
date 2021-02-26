module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CheckVisa/CheckVisa.js":
/*!*******************************************!*\
  !*** ./components/CheckVisa/CheckVisa.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckVisa_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckVisa.style */ "./components/CheckVisa/CheckVisa.style.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\components\\CheckVisa\\CheckVisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CheckVisaItem = ({
  question,
  children
}) => {
  return __jsx(_CheckVisa_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_CheckVisa_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, " ", question, " "), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, " ", children, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckVisaItem);

/***/ }),

/***/ "./components/CheckVisa/CheckVisa.style.js":
/*!*************************************************!*\
  !*** ./components/CheckVisa/CheckVisa.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CheckVisaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CheckVisastyle__CheckVisaWrapper",
  componentId: "xp5gom-0"
})(["margin-bottom:20px;.title{font-weight:600;font-size:17px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CheckVisaWrapper);

/***/ }),

/***/ "./container/Listing/Listing.style.js":
/*!********************************************!*\
  !*** ./container/Listing/Listing.style.js ***!
  \********************************************/
/*! exports provided: ShowMapCheckbox, PostsWrapper, SearchWrapper, BreadcrumbWrapper, FixedMap, Label, FilterArea, FilterElementsWrapper, CheckVisaWrapper, ButtonGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMapCheckbox", function() { return ShowMapCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsWrapper", function() { return PostsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbWrapper", function() { return BreadcrumbWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedMap", function() { return FixedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArea", function() { return FilterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElementsWrapper", function() { return FilterElementsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckVisaWrapper", function() { return CheckVisaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const ListingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ListingWrapper",
  componentId: "sc-1c13aqm-0"
})(["position:relative;.ant-checkbox-group{.ant-checkbox-group-item{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.DateRangePicker{.DateRangePickerInput{.DateInput{.DateInput_input{&.DateInput_input__focused{border-bottom:0;}}.DateInput_fang{top:40px !important;}}}}.ant-slider{.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}.toolbar{padding-left:30px;padding-right:30px;border-bottom:1px solid ", ";@media only screen and (min-width:1441px){min-height:78px;}}.loadmore_wrapper{margin-top:30px;> button{border:0;min-width:115px;height:40px;display:inline-flex;align-items:center;justify-content:center;padding:0 15px;font-size:15px;font-weight:700;border-radius:3px;color:", ";border-color:", ";background-color:", ";transition:all 0.3s ease;&:hover{outline:none;opacity:0.8;}&:focus{outline:none;}&::after{content:none;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const ShowMapCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ShowMapCheckbox",
  componentId: "sc-1c13aqm-1"
})([".ant-checkbox-wrapper{display:flex;align-items:center;flex-direction:row-reverse;}.ant-checkbox{top:0;+ span{font-size:14px;font-weight:700;color:", ";}}.ant-checkbox-inner{width:20px;height:20px;border-color:", ";}.ant-checkbox-wrapper{.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";&::after{transform:rotate(45deg) scale(1) translate(-50%,-70%);}}}}.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const PostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__PostsWrapper",
  componentId: "sc-1c13aqm-2"
})(["max-width:1920px;padding:30px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__SearchWrapper",
  componentId: "sc-1c13aqm-3"
})(["max-width:1920px;padding:0 30px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const BreadcrumbWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__BreadcrumbWrapper",
  componentId: "sc-1c13aqm-4"
})(["max-width:1920px;padding:15px 30px;background:'#f3f5f7';&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const FixedMap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FixedMap",
  componentId: "sc-1c13aqm-5"
})(["position:fixed;background-color:", ";right:0;width:40%;height:calc(100% - 152px);top:152px;z-index:9;@media only screen and (max-width:767px){width:100%;}> div{position:absolute;width:100%;height:100% !important;> div{height:100% !important;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'));
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__Label",
  componentId: "sc-1c13aqm-6"
})(["color:", ";font-size:15px;margin-right:15px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterArea",
  componentId: "sc-1c13aqm-7"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const FilterElementsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterElementsWrapper",
  componentId: "sc-1c13aqm-8"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const CheckVisaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__CheckVisaWrapper",
  componentId: "sc-1c13aqm-9"
})(["max-width:1920px;padding-left:100px;padding-right:100px;margin-bottom:20px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ButtonGroup",
  componentId: "sc-1c13aqm-10"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (ListingWrapper);

/***/ }),

/***/ "./pages/check-visa.js":
/*!*****************************!*\
  !*** ./pages/check-visa.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckVisa; });
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/steps */ "antd/lib/steps");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! container/Listing/Listing.style */ "./container/Listing/Listing.style.js");
/* harmony import */ var components_CheckVisa_CheckVisa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CheckVisa/CheckVisa */ "./components/CheckVisa/CheckVisa.js");




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\pages\\check-visa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a;
const {
  Step
} = antd_lib_steps__WEBPACK_IMPORTED_MODULE_2___default.a;
function CheckVisa() {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1);

  function onChange(value) {
    console.log(`selected ${value}`);
    setSelected(prev => prev + 1);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  const question = [{
    key: 1,
    content: 'Chọn quốc gia bạn muốn xin visa',
    select: [{
      name: 'Hàn Quốc (Korea)'
    }, {
      name: 'Nhật Bản (Janpan)'
    }, {
      name: 'Đài Loan (Taiwan)'
    }, {
      name: 'Trung Quốc (China)'
    }, {
      name: 'Hồng Kông (Hongkong)'
    }, {
      name: 'Ma Cao (Macau)'
    }, {
      name: 'Nga (Russia)'
    }, {
      name: 'Châu âu (Schengen)'
    }, {
      name: 'Úc (Australia)'
    }, {
      name: 'New Zealand'
    }, {
      name: 'Canada'
    }, {
      name: 'Mỹ (America)'
    }, {
      name: 'Ấn độ (India)'
    }, {
      name: 'Dubai AUE'
    }]
  }, {
    key: 2,
    content: 'Mục đích xin visa',
    select: [{
      name: 'Du Lịch'
    }, {
      name: 'Công tác'
    }, {
      name: 'Du học'
    }, {
      name: 'Thăm thân'
    }, {
      name: 'Lao động'
    }, {
      name: 'Hội chợ - Triển lãm'
    }, {
      name: 'Định cư'
    }]
  }, {
    key: 3,
    content: 'Thông tin về công việc',
    select: [{
      name: 'Không có việc làm / Thất nghiệp'
    }, {
      name: 'Kinh doanh tự do có chứng minh thu nhập'
    }, {
      name: 'Kinh doanh tự do không có chứng minh thu nhập'
    }, {
      name: 'Nội trợ / Làm việc tự do'
    }, {
      name: 'Lao động có HĐ - Không có BHXH'
    }, {
      name: 'Lao động có HĐ - Có BHXH'
    }, {
      name: 'Nhân viên Nhà Nước'
    }, {
      name: 'Giáo viên / Bác sĩ / Bằng cấp chuyên môn cao'
    }, {
      name: 'Chủ doanh nghiệp có khai thuế'
    }, {
      name: 'Chủ doanh nghiệp Không khai thuế'
    }, {
      name: 'Học sinh / Sinh viên'
    }]
  }, {
    key: 4,
    content: 'Tình trạng hôn nhân',
    select: [{
      name: 'Đã kết hôn'
    }, {
      name: 'Đã ly hôn'
    }, {
      name: 'Ly hôn có nuôi con nhỏ'
    }, {
      name: 'Cha / mẹ đơn thân'
    }, {
      name: 'Góa chồng / vợ'
    }, {
      name: 'Về hưu - Có lương hưu'
    }, {
      name: 'Về hưu - không có lương hưu'
    }, {
      name: 'Độc thân'
    }, {
      name: 'Độc thân trên 40 tuổi'
    }, {
      name: 'Độc thân từ 30 tuổi đến 40 tuổi'
    }, {
      name: 'Độc thân từ 22 tuổi đến 29 tuổi'
    }, {
      name: 'Độc thân từ 18 tuổi đến 21 tuổi'
    }, {
      name: 'Độc thân tcòn nhỏ'
    }]
  }, {
    key: 5,
    content: 'Thông tin về khả năng tài chính',
    select: [{
      name: 'Sổ tiết kiệm và bảng kê nguồn gốc thu nhập'
    }, {
      name: 'Có sổ tiết kiệm không có bảng kê thu nhập'
    }, {
      name: 'Sổ tiết kiệm trên 500 triệu'
    }, {
      name: 'Sổ tiết kiệm dưới 500 triệu'
    }, {
      name: 'Không có sổ tiết kiệm'
    }]
  }, {
    key: 6,
    content: 'Thông tin về tài sản cố định',
    select: [{
      name: 'Giấy tờ nhà đất để ở'
    }, {
      name: 'Giấy tờ sở hữu xe'
    }, {
      name: 'Không có tài sản cố định'
    }]
  }];
  return __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Ki\u1EC3m tra t\u1EC9 l\u1EC7 \u0111\u1EADu visa")), __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "Trang ch\u1EE7")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, "Ki\u1EC3m tra t\u1EC9 l\u1EC7 \u0111\u1EADu visa"))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  })), __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_6__["CheckVisaWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(antd_lib_steps__WEBPACK_IMPORTED_MODULE_2___default.a, {
    current: 0,
    percent: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx(Step, {
    title: "H\u1ED3 s\u01A1",
    description: "Ki\u1EC3m tra h\u1ED3 s\u01A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }), __jsx(Step, {
    title: "T\xECnh tr\u1EA1ng",
    description: "Xem x\xE9t h\u1ED3 s\u01A1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }), __jsx(Step, {
    title: "K\u1EBFt qu\u1EA3",
    description: "Xem t\u1EF7 l\u1EC7 \u0111\u1EADu visa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }))), __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_6__["CheckVisaWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, question.map(q => {
    if (q.key <= selected) {
      return __jsx(components_CheckVisa_CheckVisa__WEBPACK_IMPORTED_MODULE_7__["default"], {
        question: q.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
        showSearch: true,
        style: {
          width: 350
        },
        placeholder: q.content,
        optionFilterProp: "children",
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onSearch: onSearch,
        filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 33
        }
      }, q.select.map((item, i) => __jsx(Option, {
        value: item.name,
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 65
        }
      }, item.name))));
    }
  })));
}

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/check-visa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\TripFinder\packages\hotel-next\pages\check-visa.js */"./pages/check-visa.js");


/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/steps":
/*!*********************************!*\
  !*** external "antd/lib/steps" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/steps");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja1Zpc2EvQ2hlY2tWaXNhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hlY2tWaXNhL0NoZWNrVmlzYS5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGlzdGluZy9MaXN0aW5nLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoZWNrLXZpc2EuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvYnJlYWRjcnVtYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9zZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9zdGVwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDaGVja1Zpc2FJdGVtIiwicXVlc3Rpb24iLCJjaGlsZHJlbiIsIkNoZWNrVmlzYVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJMaXN0aW5nV3JhcHBlciIsInRoZW1lR2V0IiwiU2hvd01hcENoZWNrYm94IiwiUG9zdHNXcmFwcGVyIiwiU2VhcmNoV3JhcHBlciIsIkJyZWFkY3J1bWJXcmFwcGVyIiwiRml4ZWRNYXAiLCJMYWJlbCIsIkZpbHRlckFyZWEiLCJGaWx0ZXJFbGVtZW50c1dyYXBwZXIiLCJCdXR0b25Hcm91cCIsIk9wdGlvbiIsIlN0ZXAiLCJDaGVja1Zpc2EiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXYiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TZWFyY2giLCJ2YWwiLCJrZXkiLCJjb250ZW50Iiwic2VsZWN0IiwibmFtZSIsIm1hcCIsInEiLCJ3aWR0aCIsImlucHV0Iiwib3B0aW9uIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUNuQkMsVUFEbUI7QUFFbkJDO0FBRm1CLENBQUQsS0FHakI7QUFDRCxTQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUF5QkQsUUFBekIsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBT0MsUUFBUCxNQUZKLENBREosQ0FESjtBQVFILENBWkQ7O0FBY2VGLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1HLGdCQUFnQixHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUF0QjtBQVFlRiwrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUcsTUFBTSxHQUFHQyxtRUFBSCxvQ0FBWjtBQVNBLE1BQU1DLGNBQWMsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1a0RBUU1JLHlFQUFRLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FSZCxFQVlRQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBWmhCLEVBYVlBLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FicEIsRUFxQkhBLHlFQUFRLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FyQkwsRUEyQlFBLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0EzQmhCLEVBdURNQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBdkRkLEVBMERNQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBMURkLEVBaUVJQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBakVaLEVBa0VRQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBbEVoQixFQXVFTUEseUVBQVEsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQXZFZCxFQTZFUUEseUVBQVEsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQTdFaEIsRUFnRklBLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FoRlosRUF1Rk1BLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0F2RmQsRUF3RlVBLHlFQUFRLENBQUMsU0FBRCxFQUFZLHFCQUFaLENBeEZsQixFQWlHSEEseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQWpHTCxFQTBHV0EseUVBQVEsQ0FBQyxVQUFELEVBQWEsU0FBYixDQTFHbkIsRUE4SExBLHlFQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0E5SEgsRUErSEVBLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0EvSFYsRUFnSU1BLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FoSWQsQ0FBcEI7QUFnSk8sTUFBTUMsZUFBZSxHQUFHTix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNpQkFZYkkseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQVpLLEVBbUJSQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBbkJBLEVBeUJKQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBekJKLEVBMEJBQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBMUJSLEVBcUNSQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBckNBLENBQXJCO0FBeUNBLE1BQU1FLFlBQVksR0FBR1Asd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5TkFBbEI7QUFrQkEsTUFBTU8sYUFBYSxHQUFHUix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJOQUFuQjtBQWtCQSxNQUFNUSxpQkFBaUIsR0FBR1Qsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtUEFBdkI7QUFtQkEsTUFBTVMsUUFBUSxHQUFHVix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRQQUVDSSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRlQsQ0FBZDtBQXNCQSxNQUFNTSxLQUFLLEdBQUdYLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscURBQ1BJLHlFQUFRLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FERCxDQUFYO0FBTUEsTUFBTU8sVUFBVSxHQUFHWix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlQQUlWSSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBSkUsRUFRQ0EseUVBQVEsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVJULEVBZUdBLHlFQUFRLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FmWCxFQW1CUkEseUVBQVEsQ0FBQyxTQUFELEVBQVksU0FBWixDQW5CQSxFQW9CREEseUVBQVEsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQXBCUCxFQXFCR0EseUVBQVEsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQXJCWCxDQUFoQjtBQTBCQSxNQUFNUSxxQkFBcUIsR0FBR2Isd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1eERBY0RJLHlFQUFRLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FkUCxFQWlDYkEseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQWpDSyxFQTBDUEgsTUExQ08sRUE0Q0xBLE1BNUNLLEVBb0RKRyx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBcERKLEVBMERQQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBMURELEVBNEVGQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBNUVOLEVBZ0ZBQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBaEZSLEVBaUZJQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBakZaLEVBeUZYQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBekZHLEVBK0ZBQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBL0ZSLEVBNkdGQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBN0dOLEVBZ0hGQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBaEhOLEVBdUhKQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBdkhKLEVBd0hBQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBeEhSLEVBNkhGQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBN0hOLEVBbUlBQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBbklSLEVBc0lKQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBdElKLEVBNklGQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBN0lOLEVBOElFQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxxQkFBWixDQTlJVixFQXVKWEEseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQXZKRyxDQUEzQjtBQWdLQSxNQUFNTixnQkFBZ0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUUFBdEI7QUFvQkEsTUFBTWEsV0FBVyxHQUFHZCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRUQVVYSSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBVkcsRUFjQUEseUVBQVEsQ0FBQyxVQUFELEVBQWEsU0FBYixDQWRSLEVBZ0JUQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBaEJDLEVBaUJGQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBakJOLEVBa0JFQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBbEJWLENBQWpCO0FBMkJRRCw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamdCQTtBQUNBO0FBQ0E7QUFLQTtBQUVBLE1BQU07QUFBRVc7QUFBRiwwREFBTjtBQUNBLE1BQU07QUFBRUM7QUFBRix5REFBTjtBQUVlLFNBQVNDLFNBQVQsR0FBcUI7QUFFaEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLENBQUQsQ0FBeEM7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFlBQVdGLEtBQU0sRUFBOUI7QUFDQUgsZUFBVyxDQUFDTSxJQUFJLElBQUlBLElBQUksR0FBRyxDQUFoQixDQUFYO0FBQ0g7O0FBRUQsV0FBU0MsTUFBVCxHQUFrQjtBQUNkSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7O0FBRUQsV0FBU0csT0FBVCxHQUFtQjtBQUNmSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7O0FBRUQsV0FBU0ksUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkJOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJLLEdBQXZCO0FBQ0g7O0FBRUQsUUFBTWhDLFFBQVEsR0FBRyxDQUNiO0FBQ0lpQyxPQUFHLEVBQUUsQ0FEVDtBQUVJQyxXQUFPLEVBQUUsaUNBRmI7QUFHSUMsVUFBTSxFQUFHLENBQ0w7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FESyxFQUVMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBRkssRUFHTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUhLLEVBSUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FKSyxFQUtMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBTEssRUFNTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQU5LLEVBT0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FQSyxFQVFMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBUkssRUFTTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVRLLEVBVUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FWSyxFQVdMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBWEssRUFZTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVpLLEVBYUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FiSyxFQWNMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBZEs7QUFIYixHQURhLEVBc0JiO0FBQ0lILE9BQUcsRUFBRSxDQURUO0FBRUlDLFdBQU8sRUFBRSxtQkFGYjtBQUdJQyxVQUFNLEVBQUcsQ0FDTDtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQURLLEVBRUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FGSyxFQUdMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBSEssRUFJTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUpLLEVBS0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FMSyxFQU1MO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBTkssRUFPTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVBLO0FBSGIsR0F0QmEsRUFtQ2I7QUFDSUgsT0FBRyxFQUFFLENBRFQ7QUFFSUMsV0FBTyxFQUFFLHdCQUZiO0FBR0lDLFVBQU0sRUFBRyxDQUNMO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBREssRUFFTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUZLLEVBR0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FISyxFQUlMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBSkssRUFLTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUxLLEVBTUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FOSyxFQU9MO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBUEssRUFRTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVJLLEVBU0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FUSyxFQVVMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBVkssRUFXTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVhLO0FBSGIsR0FuQ2EsRUFvRGI7QUFDSUgsT0FBRyxFQUFFLENBRFQ7QUFFSUMsV0FBTyxFQUFFLHFCQUZiO0FBR0lDLFVBQU0sRUFBRyxDQUNMO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBREssRUFFTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUZLLEVBR0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FISyxFQUlMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBSkssRUFLTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUxLLEVBTUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FOSyxFQU9MO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBUEssRUFRTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVJLLEVBU0w7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FUSyxFQVVMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBVkssRUFXTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQVhLLEVBWUw7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FaSyxFQWFMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBYks7QUFIYixHQXBEYSxFQXVFYjtBQUNJSCxPQUFHLEVBQUUsQ0FEVDtBQUVJQyxXQUFPLEVBQUUsaUNBRmI7QUFHSUMsVUFBTSxFQUFFLENBQ0o7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FESSxFQUVKO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBRkksRUFHSjtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUhJLEVBSUo7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FKSSxFQUtKO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBTEk7QUFIWixHQXZFYSxFQWtGYjtBQUNJSCxPQUFHLEVBQUUsQ0FEVDtBQUVJQyxXQUFPLEVBQUUsOEJBRmI7QUFHSUMsVUFBTSxFQUFHLENBQ0w7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FESyxFQUVMO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBRkssRUFHTDtBQUFFQSxVQUFJLEVBQUU7QUFBUixLQUhLO0FBSGIsR0FsRmEsQ0FBakI7QUE2RkEsU0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURKLENBREosRUFJSSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksaUVBQVksSUFBWjtBQUFpQixRQUFJLEVBQUMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FESixFQUlJLGlFQUFZLElBQVo7QUFBaUIsUUFBSSxFQUFDLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURKLENBSkosQ0FESixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQUpKLEVBZUksTUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUUsQ0FBaEI7QUFBbUIsV0FBTyxFQUFFLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUMsaUJBQVo7QUFBb0IsZUFBVyxFQUFDLCtCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUMsb0JBQVo7QUFBeUIsZUFBVyxFQUFDLDRCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUMsbUJBQVo7QUFBc0IsZUFBVyxFQUFDLHdDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQWZKLEVBc0JJLE1BQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLcEMsUUFBUSxDQUFDcUMsR0FBVCxDQUFhQyxDQUFDLElBQUk7QUFDZixRQUFJQSxDQUFDLENBQUNMLEdBQUYsSUFBU1osUUFBYixFQUF1QjtBQUNuQixhQUNJLE1BQUMsc0VBQUQ7QUFDSSxnQkFBUSxFQUFFaUIsQ0FBQyxDQUFDSixPQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0k7QUFDSSxrQkFBVSxNQURkO0FBRUksYUFBSyxFQUFFO0FBQUVLLGVBQUssRUFBRTtBQUFULFNBRlg7QUFHSSxtQkFBVyxFQUFFRCxDQUFDLENBQUNKLE9BSG5CO0FBSUksd0JBQWdCLEVBQUMsVUFKckI7QUFLSSxnQkFBUSxFQUFFVixRQUxkO0FBTUksZUFBTyxFQUFFTSxPQU5iO0FBT0ksY0FBTSxFQUFFRCxNQVBaO0FBUUksZ0JBQVEsRUFBRUUsUUFSZDtBQVNJLG9CQUFZLEVBQUUsQ0FBQ1MsS0FBRCxFQUFRQyxNQUFSLEtBQ1ZBLE1BQU0sQ0FBQ3hDLFFBQVAsQ0FBZ0J5QyxXQUFoQixHQUE4QkMsT0FBOUIsQ0FBc0NILEtBQUssQ0FBQ0UsV0FBTixFQUF0QyxLQUE4RCxDQVZ0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYUtKLENBQUMsQ0FBQ0gsTUFBRixDQUFTRSxHQUFULENBQWEsQ0FBQ08sSUFBRCxFQUFPQyxDQUFQLEtBQWMsTUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFRCxJQUFJLENBQUNSLElBQXBCO0FBQTBCLFdBQUcsRUFBRVMsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQ0QsSUFBSSxDQUFDUixJQUF4QyxDQUEzQixDQWJMLENBSEosQ0FESjtBQXFCSDtBQUNKLEdBeEJBLENBREwsQ0F0QkosQ0FESjtBQW9ESCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMRCxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2stdmlzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja1Zpc2FXcmFwcGVyIGZyb20gJy4vQ2hlY2tWaXNhLnN0eWxlJztcclxuXHJcbmNvbnN0IENoZWNrVmlzYUl0ZW0gPSAoe1xyXG4gICAgcXVlc3Rpb24sXHJcbiAgICBjaGlsZHJlblxyXG59KSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoZWNrVmlzYVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDaGVja1Zpc2FXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz4ge3F1ZXN0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+IHtjaGlsZHJlbn0gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2hlY2tWaXNhV3JhcHBlcj5cclxuICAgICAgICA8L0NoZWNrVmlzYVdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVmlzYUl0ZW07IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDaGVja1Zpc2FXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tWaXNhV3JhcHBlcjsiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBMaXN0aW5nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvKiBjaGVja2JveCBncm91cCBjb21wb25lbnQgc3R5bGUgKi9cbiAgLmFudC1jaGVja2JveC1ncm91cCB7XG4gICAgLmFudC1jaGVja2JveC1ncm91cC1pdGVtIHtcbiAgICAgIC5hbnQtY2hlY2tib3gge1xuICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgICAgICB9XG4gICAgICAgICYuYW50LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5hbnQtY2hlY2tib3gge1xuICAgICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBkYXRlIHBpY2tlciBjb21wb25lbnQgc3R5bGUgKi9cbiAgLkRhdGVSYW5nZVBpY2tlciB7XG4gICAgLkRhdGVSYW5nZVBpY2tlcklucHV0IHtcbiAgICAgIC5EYXRlSW5wdXQge1xuICAgICAgICAuRGF0ZUlucHV0X2lucHV0IHtcbiAgICAgICAgICAmLkRhdGVJbnB1dF9pbnB1dF9fZm9jdXNlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuRGF0ZUlucHV0X2Zhbmcge1xuICAgICAgICAgIHRvcDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogcHJpY2UgcmFuZ2UgY29tcG9uZW50IHN0eWxlICovXG4gIC5hbnQtc2xpZGVyIHtcbiAgICAuYW50LXNsaWRlci1yYWlsIHtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICB9XG4gICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICAgIC5hbnQtc2xpZGVyLXN0ZXAge1xuICAgICAgLmFudC1zbGlkZXItZG90IHtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICAmLmFudC1zbGlkZXItZG90LWFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICB9XG4gICAgICAuYW50LXNsaWRlci1oYW5kbGU6bm90KC5hbnQtdG9vbHRpcC1vcGVuKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICB9XG4gICAgfVxuICAgIC5hbnQtc2xpZGVyLWhhbmRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDZweCBzb2xpZCAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAke3RoZW1lR2V0KCdjb2xvci41JywgJ3JnYmEoMCwgMCwgMCwgMC4yNSknKX07XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFudC1zbGlkZXItbWFyayB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLmFudC1zbGlkZXItbWFyay10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogdG9vbGJhciBhcmVhIHN0eWxlICovXG4gIC50b29sYmFyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xuICAgICAgbWluLWhlaWdodDogNzhweDtcbiAgICB9XG4gIH1cblxuICAvKiBsb2FkIG1vcmUgd3JhcHBlciBzdHlsZSAqL1xuICAubG9hZG1vcmVfd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICA+IGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBtaW4td2lkdGg6IDExNXB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2hvd01hcENoZWNrYm94ID0gc3R5bGVkLmRpdmBcbiAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgLmFudC1jaGVja2JveCB7XG4gICAgdG9wOiAwO1xuICAgICsgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIH1cbiAgfVxuXG4gIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gIH1cblxuICAuYW50LWNoZWNrYm94LXdyYXBwZXIge1xuICAgIC5hbnQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC03MCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFudC1jaGVja2JveC13cmFwcGVyOmhvdmVyIC5hbnQtY2hlY2tib3gtaW5uZXIsXG4gIC5hbnQtY2hlY2tib3g6aG92ZXIgLmFudC1jaGVja2JveC1pbm5lcixcbiAgLmFudC1jaGVja2JveC1pbnB1dDpmb2N1cyArIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgJi5jb2wtMjQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAmLmNvbC0xMiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjFweCkge1xuICAgICAgd2lkdGg6IGNhbGMoNjAlIC0gMTIwcHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICAmLmNvbC0yNCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gICYuY29sLTEyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMXB4KSB7XG4gICAgICB3aWR0aDogY2FsYyg2MCUgLSAxMjBweCk7XG4gICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOicjZjNmNWY3JztcbiAgJi5jb2wtMjQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAmLmNvbC0xMiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjFweCkge1xuICAgICAgd2lkdGg6IGNhbGMoNjAlIC0gMTIwcHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZpeGVkTWFwID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MnB4KTtcbiAgdG9wOiAxNTJweDtcbiAgei1pbmRleDogOTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICA+IGRpdiB7XG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyQXJlYSA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJ1dHRvbixcbiAgYnV0dG9uLmFudC1idG4ge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJFbGVtZW50c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuYWNjb3JkaW9uIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcblxuICAgIC8qIGFjY29yZGlvbiBpdGVtIHN0eWxlICovXG4gICAgLmFjY29yZGlvbl9faXRlbSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGFjY29yZGlvbiBoZWFkaW5nIGFyZWEgc3R5bGUgKi9cbiAgICAgIC5hY2NvcmRpb25fX2hlYWRpbmcge1xuICAgICAgICAuYWNjb3JkaW9uX19idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI5cHggMDtcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMmMyYzJjJyl9O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIGFjY29yZGlvbiBwYW5lbCBhcmVhIHN0eWxlICovXG4gICAgICAuYWNjb3JkaW9uX19wYW5lbCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOXB4O1xuICAgICAgICBhbmltYXRpb246IDAuMjVzICR7ZmFkZUlufSBlYXNlO1xuICAgICAgICAmW2hpZGRlbl0ge1xuICAgICAgICAgIGFuaW1hdGlvbjogMC4yNXMgJHtmYWRlSW59IGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBkYXRlIHBpY2tlciBjb21wb25lbnQgc3R5bGUgKi9cbiAgICAgICAgLmRhdGVfcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXIge1xuICAgICAgICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICAgICAgICAgICAgICAuRGF0ZUlucHV0X19zbWFsbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMnB4O1xuICAgICAgICAgICAgICAgIC5EYXRlSW5wdXRfaW5wdXRfX3NtYWxsIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJfcGlja2VyIHtcbiAgICAgICAgICAgICAgbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogY2hlY2tib3ggZ3JvdXAgc3R5bGUgKi9cbiAgICAgICAgLmFudC1jaGVja2JveC1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgLmFudC1jaGVja2JveCB7XG4gICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5hbnQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgLmFudC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIHByaWNlIHJhbmdlIGNvbXBvbmVudCBzdHlsZSAqL1xuICAgICAgICAuYW50LXNsaWRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgIC5hbnQtc2xpZGVyLXJhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXNsaWRlci10cmFjayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1zbGlkZXItc3RlcCB7XG4gICAgICAgICAgICAuYW50LXNsaWRlci1kb3Qge1xuICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEzJywgJyNFMkUyRTInKX07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEzJywgJyNFMkUyRTInKX07XG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICYuYW50LXNsaWRlci1kb3QtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLWhhbmRsZTpub3QoLmFudC10b29sdGlwLW9wZW4pIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1zbGlkZXItaGFuZGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4ICR7dGhlbWVHZXQoJ2NvbG9yLjUnLCAncmdiYSgwLCAwLCAwLCAwLjI1KScpfTtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXNsaWRlci1tYXJrIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAuYW50LXNsaWRlci1tYXJrLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja1Zpc2FXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6MTAwcHg7XG4gIG1hcmdpbi1ib3R0b20gOjIwcHg7XG4gICYuY29sLTI0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgJi5jb2wtMTIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDYwJSAtIDEyMHB4KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYnV0dG9uLmFudC1idG4ge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICAgICYuYW50LWJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaXN0aW5nV3JhcHBlciwge1xyXG4gICAgQ2hlY2tWaXNhV3JhcHBlcixcclxuICAgIEJyZWFkY3J1bWJXcmFwcGVyXHJcbn0gZnJvbSAnY29udGFpbmVyL0xpc3RpbmcvTGlzdGluZy5zdHlsZSc7XHJcbmltcG9ydCB7IFNlbGVjdCwgQnJlYWRjcnVtYiwgRGl2aWRlciwgU3RlcHMgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENoZWNrVmlzYUl0ZW0gZnJvbSAnY29tcG9uZW50cy9DaGVja1Zpc2EvQ2hlY2tWaXNhJztcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgU3RlcCB9ID0gU3RlcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja1Zpc2EoKSB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdibHVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Gb2N1cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9jdXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNlYXJjaCh2YWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoOicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBbXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAgIGtleTogMSwgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDaOG7jW4gcXXhu5FjIGdpYSBi4bqhbiBtdeG7kW4geGluIHZpc2EnLCAgXHJcbiAgICAgICAgICAgIHNlbGVjdCA6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0jDoG4gUXXhu5FjIChLb3JlYSknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOaOG6rXQgQuG6o24gKEphbnBhbiknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfEkMOgaSBMb2FuIChUYWl3YW4pJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVHJ1bmcgUXXhu5FjIChDaGluYSknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdI4buTbmcgS8O0bmcgKEhvbmdrb25nKScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01hIENhbyAoTWFjYXUpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTmdhIChSdXNzaWEpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2jDonUgw6J1IChTY2hlbmdlbiknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfDmmMgKEF1c3RyYWxpYSknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOZXcgWmVhbGFuZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NhbmFkYScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ03hu7kgKEFtZXJpY2EpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn4bqkbiDEkeG7mSAoSW5kaWEpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRHViYWkgQVVFJyB9XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBrZXk6IDIsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnTeG7pWMgxJHDrWNoIHhpbiB2aXNhJyAsXHJcbiAgICAgICAgICAgIHNlbGVjdCA6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0R1IEzhu4tjaCcgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0PDtG5nIHTDoWMnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdEdSBo4buNYycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1RoxINtIHRow6JuJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFvIMSR4buZbmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdI4buZaSBjaOG7oyAtIFRyaeG7g24gbMOjbScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ8SQ4buLbmggY8awJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGtleTogMyxcclxuICAgICAgICAgICAgY29udGVudDogJ1Row7RuZyB0aW4gduG7gSBjw7RuZyB2aeG7h2MnICxcclxuICAgICAgICAgICAgc2VsZWN0IDogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnS2jDtG5nIGPDsyB2aeG7h2MgbMOgbSAvIFRo4bqldCBuZ2hp4buHcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0tpbmggZG9hbmggdOG7sSBkbyBjw7MgY2jhu6luZyBtaW5oIHRodSBuaOG6rXAnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdLaW5oIGRvYW5oIHThu7EgZG8ga2jDtG5nIGPDsyBjaOG7qW5nIG1pbmggdGh1IG5o4bqtcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ07hu5lpIHRy4bujIC8gTMOgbSB2aeG7h2MgdOG7sSBkbycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xhbyDEkeG7mW5nIGPDsyBIxJAgLSBLaMO0bmcgY8OzIEJIWEgnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYW8gxJHhu5luZyBjw7MgSMSQIC0gQ8OzIEJIWEgnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOaMOibiB2acOqbiBOaMOgIE7GsOG7m2MnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdHacOhbyB2acOqbiAvIELDoWMgc8SpIC8gQuG6sW5nIGPhuqVwIGNodXnDqm4gbcO0biBjYW8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDaOG7pyBkb2FuaCBuZ2hp4buHcCBjw7Mga2hhaSB0aHXhur8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDaOG7pyBkb2FuaCBuZ2hp4buHcCBLaMO0bmcga2hhaSB0aHXhur8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdI4buNYyBzaW5oIC8gU2luaCB2acOqbicgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBrZXk6IDQsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnVMOsbmggdHLhuqFuZyBow7RuIG5ow6JuJyAsXHJcbiAgICAgICAgICAgIHNlbGVjdCA6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ8SQw6Mga+G6v3QgaMO0bicgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ8SQw6MgbHkgaMO0bicgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0x5IGjDtG4gY8OzIG51w7RpIGNvbiBuaOG7jycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NoYSAvIG3hurkgxJHGoW4gdGjDom4nIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdHw7NhIGNo4buTbmcgLyB24bujJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVuG7gSBoxrB1IC0gQ8OzIGzGsMahbmcgaMawdScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1bhu4EgaMawdSAtIGtow7RuZyBjw7MgbMawxqFuZyBoxrB1JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnxJDhu5ljIHRow6JuJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnxJDhu5ljIHRow6JuIHRyw6puIDQwIHR14buVaScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ8SQ4buZYyB0aMOibiB04burIDMwIHR14buVaSDEkeG6v24gNDAgdHXhu5VpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnxJDhu5ljIHRow6JuIHThu6sgMjIgdHXhu5VpIMSR4bq/biAyOSB0deG7lWknIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfEkOG7mWMgdGjDom4gdOG7qyAxOCB0deG7lWkgxJHhur9uIDIxIHR14buVaScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ8SQ4buZYyB0aMOibiB0Y8OybiBuaOG7jycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAga2V5OiA1LCBcclxuICAgICAgICAgICAgY29udGVudDogJ1Row7RuZyB0aW4gduG7gSBraOG6oyBuxINuZyB0w6BpIGNow61uaCcgLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Phu5UgdGnhur90IGtp4buHbSB2w6AgYuG6o25nIGvDqiBuZ3Xhu5NuIGfhu5FjIHRodSBuaOG6rXAnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDw7Mgc+G7lSB0aeG6v3Qga2nhu4dtIGtow7RuZyBjw7MgYuG6o25nIGvDqiB0aHUgbmjhuq1wJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnU+G7lSB0aeG6v3Qga2nhu4dtIHRyw6puIDUwMCB0cmnhu4d1JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnU+G7lSB0aeG6v3Qga2nhu4dtIGTGsOG7m2kgNTAwIHRyaeG7h3UnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdLaMO0bmcgY8OzIHPhu5UgdGnhur90IGtp4buHbScgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBrZXk6IDYsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnVGjDtG5nIHRpbiB24buBIHTDoGkgc+G6o24gY+G7kSDEkeG7i25oJyxcclxuICAgICAgICAgICAgc2VsZWN0IDogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2nhuqV5IHThu50gbmjDoCDEkeG6pXQgxJHhu4Mg4bufJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2nhuqV5IHThu50gc+G7nyBo4buvdSB4ZScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0tow7RuZyBjw7MgdMOgaSBz4bqjbiBj4buRIMSR4buLbmgnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdGluZ1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPktp4buDbSB0cmEgdOG7iSBs4buHIMSR4bqtdSB2aXNhPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRyYW5nIGNo4bunPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPktp4buDbSB0cmEgdOG7iSBs4buHIMSR4bqtdSB2aXNhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iV3JhcHBlcj5cclxuICAgICAgICAgICAgPENoZWNrVmlzYVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8U3RlcHMgY3VycmVudD17MH0gcGVyY2VudD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJI4buTIHPGoVwiIGRlc2NyaXB0aW9uPVwiS2nhu4NtIHRyYSBo4buTIHPGoVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJUw6xuaCB0cuG6oW5nXCIgZGVzY3JpcHRpb249XCJYZW0geMOpdCBo4buTIHPGoVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJL4bq/dCBxdeG6o1wiIGRlc2NyaXB0aW9uPVwiWGVtIHThu7cgbOG7hyDEkeG6rXUgdmlzYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0ZXBzPlxyXG4gICAgICAgICAgICA8L0NoZWNrVmlzYVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDaGVja1Zpc2FXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAge3F1ZXN0aW9uLm1hcChxID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocS5rZXkgPD0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja1Zpc2FJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3EuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDM1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2hpbGRyZW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Euc2VsZWN0Lm1hcCgoaXRlbSwgaSkgPT4gIDxPcHRpb24gdmFsdWU9e2l0ZW0ubmFtZX0ga2V5PXtpfT57aXRlbS5uYW1lfTwvT3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrVmlzYUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9DaGVja1Zpc2FXcmFwcGVyPlxyXG4gICAgICAgIDwvTGlzdGluZ1dyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9icmVhZGNydW1iXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3N0ZXBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9