(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../node_modules/antd/lib/_util/colors.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/_util/colors.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetColorTypes = exports.PresetStatusColorTypes = void 0;

var _type = __webpack_require__(/*! ./type */ "../../node_modules/antd/lib/_util/type.js");

var PresetStatusColorTypes = (0, _type.tuple)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

exports.PresetStatusColorTypes = PresetStatusColorTypes;
var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
exports.PresetColorTypes = PresetColorTypes;

/***/ }),

/***/ "../../node_modules/antd/lib/_util/motion.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/_util/motion.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  motionDeadline: 500
};
var _default = collapseMotion;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/menu/MenuContext.js":
/*!***********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/menu/MenuContext.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var MenuContext = (0, _react.createContext)({
  inlineCollapsed: false
});
var _default = MenuContext;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/menu/MenuItem.js":
/*!********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/menu/MenuItem.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "../../node_modules/rc-menu/es/index.js");

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "../../node_modules/rc-util/lib/Children/toArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "../../node_modules/antd/lib/menu/MenuContext.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "../../node_modules/antd/lib/tooltip/index.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "../../node_modules/antd/lib/layout/Sider.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "../../node_modules/antd/lib/_util/reactNode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem =
/** @class */
function () {
  var MenuItem = /*#__PURE__*/function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    var _super = _createSuper(MenuItem);

    function MenuItem() {
      var _this;

      _classCallCheck(this, MenuItem);

      _this = _super.apply(this, arguments);

      _this.onKeyDown = function (e) {
        _this.menuItem.onKeyDown(e);
      };

      _this.saveMenuItem = function (menuItem) {
        _this.menuItem = menuItem;
      };

      _this.renderItem = function (_ref) {
        var siderCollapsed = _ref.siderCollapsed;
        var _this$props = _this.props,
            level = _this$props.level,
            className = _this$props.className,
            children = _this$props.children,
            rootPrefixCls = _this$props.rootPrefixCls;

        var _a = _this.props,
            title = _a.title,
            icon = _a.icon,
            danger = _a.danger,
            rest = __rest(_a, ["title", "icon", "danger"]);

        return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
          var _classNames;

          var inlineCollapsed = _ref2.inlineCollapsed,
              direction = _ref2.direction;
          var tooltipTitle = title;

          if (typeof title === 'undefined') {
            tooltipTitle = level === 1 ? children : '';
          } else if (title === false) {
            tooltipTitle = '';
          }

          var tooltipProps = {
            title: tooltipTitle
          };

          if (!siderCollapsed && !inlineCollapsed) {
            tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
            // ref: https://github.com/ant-design/ant-design/issues/16742

            tooltipProps.visible = false;
          }

          var childrenLength = (0, _toArray["default"])(children).length;
          return /*#__PURE__*/React.createElement(_tooltip["default"], _extends({}, tooltipProps, {
            placement: direction === 'rtl' ? 'left' : 'right',
            overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
          }), /*#__PURE__*/React.createElement(_rcMenu.Item, _extends({}, rest, {
            className: (0, _classnames["default"])(className, (_classNames = {}, _defineProperty(_classNames, "".concat(rootPrefixCls, "-item-danger"), danger), _defineProperty(_classNames, "".concat(rootPrefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames)),
            title: title,
            ref: _this.saveMenuItem
          }), icon, _this.renderItemChildren(inlineCollapsed)));
        });
      };

      return _this;
    }

    _createClass(MenuItem, [{
      key: "renderItemChildren",
      value: function renderItemChildren(inlineCollapsed) {
        var _this$props2 = this.props,
            icon = _this$props2.icon,
            children = _this$props2.children,
            level = _this$props2.level,
            rootPrefixCls = _this$props2.rootPrefixCls; // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456

        if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
          if (children && inlineCollapsed && level === 1 && typeof children === 'string') {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
            }, children.charAt(0));
          }

          return children;
        }

        return /*#__PURE__*/React.createElement("span", null, children);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
      }
    }]);

    return MenuItem;
  }(React.Component);

  MenuItem.isMenuItem = true;
  return MenuItem;
}();

var _default = MenuItem;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/menu/SubMenu.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/menu/SubMenu.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "../../node_modules/rc-menu/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "../../node_modules/antd/lib/menu/MenuContext.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "../../node_modules/antd/lib/_util/reactNode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SubMenu =
/** @class */
function () {
  var SubMenu = /*#__PURE__*/function (_React$Component) {
    _inherits(SubMenu, _React$Component);

    var _super = _createSuper(SubMenu);

    function SubMenu() {
      var _this;

      _classCallCheck(this, SubMenu);

      _this = _super.apply(this, arguments);

      _this.onKeyDown = function (e) {
        _this.subMenu.onKeyDown(e);
      };

      _this.saveSubMenu = function (subMenu) {
        _this.subMenu = subMenu;
      };

      return _this;
    }

    _createClass(SubMenu, [{
      key: "renderTitle",
      value: function renderTitle(inlineCollapsed) {
        var _this$props = this.props,
            icon = _this$props.icon,
            title = _this$props.title,
            level = _this$props.level,
            rootPrefixCls = _this$props.rootPrefixCls;

        if (!icon) {
          return inlineCollapsed && level === 1 && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
          }, title.charAt(0)) : title;
        } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456


        var titleIsSpan = (0, _reactNode.isValidElement)(title) && title.type === 'span';
        return /*#__PURE__*/React.createElement(React.Fragment, null, icon, titleIsSpan ? title : /*#__PURE__*/React.createElement("span", null, title));
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            rootPrefixCls = _this$props2.rootPrefixCls,
            popupClassName = _this$props2.popupClassName;
        return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref) {
          var inlineCollapsed = _ref.inlineCollapsed,
              antdMenuTheme = _ref.antdMenuTheme;
          return /*#__PURE__*/React.createElement(_rcMenu.SubMenu, _extends({}, (0, _omit["default"])(_this2.props, ['icon']), {
            title: _this2.renderTitle(inlineCollapsed),
            ref: _this2.saveSubMenu,
            popupClassName: (0, _classnames["default"])(rootPrefixCls, "".concat(rootPrefixCls, "-").concat(antdMenuTheme), popupClassName)
          }));
        });
      }
    }]);

    return SubMenu;
  }(React.Component);

  SubMenu.contextType = _MenuContext["default"]; // fix issue:https://github.com/ant-design/ant-design/issues/8666

  SubMenu.isSubMenu = 1;
  return SubMenu;
}();

var _default = SubMenu;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/menu/index.js":
/*!*****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/menu/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _rcMenu = _interopRequireWildcard(__webpack_require__(/*! rc-menu */ "../../node_modules/rc-menu/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js"));

var _SubMenu = _interopRequireDefault(__webpack_require__(/*! ./SubMenu */ "../../node_modules/antd/lib/menu/SubMenu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "../../node_modules/antd/lib/menu/MenuItem.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "../../node_modules/antd/lib/_util/devWarning.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "../../node_modules/antd/lib/layout/Sider.js");

var _raf = _interopRequireDefault(__webpack_require__(/*! ../_util/raf */ "../../node_modules/antd/lib/_util/raf.js"));

var _motion = _interopRequireDefault(__webpack_require__(/*! ../_util/motion */ "../../node_modules/antd/lib/_util/motion.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "../../node_modules/antd/lib/menu/MenuContext.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InternalMenu =
/** @class */
function () {
  var InternalMenu = /*#__PURE__*/function (_React$Component) {
    _inherits(InternalMenu, _React$Component);

    var _super = _createSuper(InternalMenu);

    function InternalMenu(props) {
      var _this;

      _classCallCheck(this, InternalMenu);

      _this = _super.call(this, props); // Restore vertical mode when menu is collapsed responsively when mounted
      // https://github.com/ant-design/ant-design/issues/13104
      // TODO: not a perfect solution, looking a new way to avoid setting switchingModeFromInline in this situation

      _this.handleMouseEnter = function (e) {
        _this.restoreModeVerticalFromInline();

        var onMouseEnter = _this.props.onMouseEnter;

        if (onMouseEnter) {
          onMouseEnter(e);
        }
      };

      _this.handleTransitionEnd = function (e) {
        // when inlineCollapsed menu width animation finished
        // https://github.com/ant-design/ant-design/issues/12864
        var widthCollapsed = e.propertyName === 'width' && e.target === e.currentTarget; // Fix SVGElement e.target.className.indexOf is not a function
        // https://github.com/ant-design/ant-design/issues/15699

        var className = e.target.className; // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during an animation.

        var classNameValue = Object.prototype.toString.call(className) === '[object SVGAnimatedString]' ? className.animVal : className; // Fix for <Menu style={{ width: '100%' }} />, the width transition won't trigger when menu is collapsed
        // https://github.com/ant-design/ant-design-pro/issues/2783

        var iconScaled = e.propertyName === 'font-size' && classNameValue.indexOf('anticon') >= 0;

        if (widthCollapsed || iconScaled) {
          _this.restoreModeVerticalFromInline();
        }
      };

      _this.handleClick = function (e) {
        _this.handleOpenChange([]);

        var onClick = _this.props.onClick;

        if (onClick) {
          onClick(e);
        }
      };

      _this.handleOpenChange = function (openKeys) {
        _this.setOpenKeys(openKeys);

        var onOpenChange = _this.props.onOpenChange;

        if (onOpenChange) {
          onOpenChange(openKeys);
        }
      };

      _this.renderMenu = function (_ref) {
        var getPopupContainer = _ref.getPopupContainer,
            getPrefixCls = _ref.getPrefixCls,
            direction = _ref.direction;
        var _this$props = _this.props,
            customizePrefixCls = _this$props.prefixCls,
            className = _this$props.className,
            theme = _this$props.theme,
            collapsedWidth = _this$props.collapsedWidth;
        var openKeys = _this.state.openKeys;
        var passProps = (0, _omit["default"])(_this.props, ['collapsedWidth', 'siderCollapsed']);

        var menuMode = _this.getRealMenuMode();

        var menuOpenMotion = _this.getOpenMotionProps(menuMode);

        var prefixCls = getPrefixCls('menu', customizePrefixCls);
        var menuClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-").concat(theme), _defineProperty({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));

        var menuProps = _extends({
          openKeys: openKeys,
          onOpenChange: _this.handleOpenChange,
          className: menuClassName,
          mode: menuMode
        }, menuOpenMotion);

        if (menuMode !== 'inline') {
          // closing vertical popup submenu after click it
          menuProps.onClick = _this.handleClick;
        } // https://github.com/ant-design/ant-design/issues/8587


        var hideMenu = _this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px');

        if (hideMenu) {
          menuProps.openKeys = [];
        }

        return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
          value: {
            inlineCollapsed: _this.getInlineCollapsed() || false,
            antdMenuTheme: theme,
            direction: direction
          }
        }, /*#__PURE__*/React.createElement(_rcMenu["default"], _extends({
          getPopupContainer: getPopupContainer
        }, passProps, menuProps, {
          prefixCls: prefixCls,
          onTransitionEnd: _this.handleTransitionEnd,
          onMouseEnter: _this.handleMouseEnter,
          direction: direction
        })));
      };

      (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
      (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
      var openKeys;

      if ('openKeys' in props) {
        openKeys = props.openKeys;
      } else if ('defaultOpenKeys' in props) {
        openKeys = props.defaultOpenKeys;
      }

      _this.state = {
        openKeys: openKeys || [],
        switchingModeFromInline: false,
        inlineOpenKeys: [],
        prevProps: props
      };
      return _this;
    }

    _createClass(InternalMenu, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _raf["default"].cancel(this.mountRafId);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
            siderCollapsed = _this$props2.siderCollapsed,
            inlineCollapsed = _this$props2.inlineCollapsed,
            onOpenChange = _this$props2.onOpenChange;

        if (!prevProps.inlineCollapsed && inlineCollapsed || !prevProps.siderCollapsed && siderCollapsed) {
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange([]);
        }
      }
    }, {
      key: "setOpenKeys",
      value: function setOpenKeys(openKeys) {
        if (!('openKeys' in this.props)) {
          this.setState({
            openKeys: openKeys
          });
        }
      }
    }, {
      key: "getRealMenuMode",
      value: function getRealMenuMode() {
        var mode = this.props.mode;
        var switchingModeFromInline = this.state.switchingModeFromInline;
        var inlineCollapsed = this.getInlineCollapsed();

        if (switchingModeFromInline && inlineCollapsed) {
          return 'inline';
        }

        return inlineCollapsed ? 'vertical' : mode;
      }
    }, {
      key: "getInlineCollapsed",
      value: function getInlineCollapsed() {
        var _this$props3 = this.props,
            inlineCollapsed = _this$props3.inlineCollapsed,
            siderCollapsed = _this$props3.siderCollapsed;

        if (siderCollapsed !== undefined) {
          return siderCollapsed;
        }

        return inlineCollapsed;
      }
    }, {
      key: "getOpenMotionProps",
      value: function getOpenMotionProps(menuMode) {
        var _this$props4 = this.props,
            openTransitionName = _this$props4.openTransitionName,
            openAnimation = _this$props4.openAnimation,
            motion = _this$props4.motion;
        var switchingModeFromInline = this.state.switchingModeFromInline; // Provides by user

        if (motion) {
          return {
            motion: motion
          };
        }

        if (openAnimation) {
          (0, _devWarning["default"])(typeof openAnimation === 'string', 'Menu', '`openAnimation` do not support object. Please use `motion` instead.');
          return {
            openAnimation: openAnimation
          };
        }

        if (openTransitionName) {
          return {
            openTransitionName: openTransitionName
          };
        } // Default logic


        if (menuMode === 'horizontal') {
          return {
            motion: {
              motionName: 'slide-up'
            }
          };
        }

        if (menuMode === 'inline') {
          return {
            motion: _motion["default"]
          };
        } // When mode switch from inline
        // submenu should hide without animation


        return {
          motion: {
            motionName: switchingModeFromInline ? '' : 'zoom-big'
          }
        };
      }
    }, {
      key: "restoreModeVerticalFromInline",
      value: function restoreModeVerticalFromInline() {
        var switchingModeFromInline = this.state.switchingModeFromInline;

        if (switchingModeFromInline) {
          this.setState({
            switchingModeFromInline: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var prevProps = prevState.prevProps;
        var newState = {
          prevProps: nextProps
        };

        if (prevProps.mode === 'inline' && nextProps.mode !== 'inline') {
          newState.switchingModeFromInline = true;
        }

        if ('openKeys' in nextProps) {
          newState.openKeys = nextProps.openKeys;
        } else {
          // [Legacy] Old code will return after `openKeys` changed.
          // Not sure the reason, we should keep this logic still.
          if (nextProps.inlineCollapsed && !prevProps.inlineCollapsed || nextProps.siderCollapsed && !prevProps.siderCollapsed) {
            newState.switchingModeFromInline = true;
            newState.inlineOpenKeys = prevState.openKeys;
            newState.openKeys = [];
          }

          if (!nextProps.inlineCollapsed && prevProps.inlineCollapsed || !nextProps.siderCollapsed && prevProps.siderCollapsed) {
            newState.openKeys = prevState.inlineOpenKeys;
            newState.inlineOpenKeys = [];
          }
        }

        return newState;
      }
    }]);

    return InternalMenu;
  }(React.Component);

  InternalMenu.defaultProps = {
    className: '',
    theme: 'light',
    focusable: false
  };
  return InternalMenu;
}(); // We should keep this as ref-able


var Menu =
/** @class */
function () {
  var Menu = /*#__PURE__*/function (_React$Component2) {
    _inherits(Menu, _React$Component2);

    var _super2 = _createSuper(Menu);

    function Menu() {
      _classCallCheck(this, Menu);

      return _super2.apply(this, arguments);
    }

    _createClass(Menu, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
          return /*#__PURE__*/React.createElement(InternalMenu, _extends({}, _this2.props, context));
        });
      }
    }]);

    return Menu;
  }(React.Component);

  Menu.Divider = _rcMenu.Divider;
  Menu.Item = _MenuItem["default"];
  Menu.SubMenu = _SubMenu["default"];
  Menu.ItemGroup = _rcMenu.ItemGroup;
  return Menu;
}();

var _default = Menu;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/tooltip/index.js":
/*!********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/tooltip/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _rcTooltip = _interopRequireDefault(__webpack_require__(/*! rc-tooltip */ "../../node_modules/rc-tooltip/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js"));

var _placements = _interopRequireDefault(__webpack_require__(/*! ./placements */ "../../node_modules/antd/lib/tooltip/placements.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "../../node_modules/antd/lib/_util/reactNode.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/lib/config-provider/index.js");

var _colors = __webpack_require__(/*! ../_util/colors */ "../../node_modules/antd/lib/_util/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = _extends(_extends({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });

    var buttonStyle = _extends(_extends({}, omitted), {
      pointerEvents: 'none'
    });

    var child = (0, _reactNode.cloneElement)(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: (0, _classnames["default"])(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(!!props.visible || !!props.defaultVisible),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onVisibleChange = function onVisibleChange(vis) {
    if (!('visible' in props)) {
      setVisible(isNoTitle() ? false : vis);
    }

    if (props.onVisibleChange && !isNoTitle()) {
      props.onVisibleChange(vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || (0, _placements["default"])({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).filter(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    })[0];

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getPopupContainer = props.getPopupContainer,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle;
  var children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var tempVisible = visible; // Hide tooltip when there is no title

  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false;
  }

  var child = getDisabledCompatibleChildren((0, _reactNode.isValidElement)(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = (0, _classnames["default"])(childProps.className, _defineProperty({}, openClassName || "".concat(prefixCls, "-open"), true));
  var customOverlayClassName = (0, _classnames["default"])(overlayClassName, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = _extends(_extends({}, overlayInnerStyle), {
      background: color
    });
    arrowContentStyle = {
      background: color
    };
  }

  return /*#__PURE__*/React.createElement(_rcTooltip["default"], _extends({}, props, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempVisible,
    onVisibleChange: onVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    })
  }), tempVisible ? (0, _reactNode.cloneElement)(child, {
    className: childCls
  }) : child);
});
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/antd/lib/tooltip/placements.js":
/*!*************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/tooltip/placements.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;

var _placements = __webpack_require__(/*! rc-tooltip/lib/placements */ "../../node_modules/rc-tooltip/lib/placements.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}

function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
      autoAdjustOverflow = config.autoAdjustOverflow;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends(_extends({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : _extends(_extends({}, _placements.placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

/***/ }),

/***/ "../../node_modules/dom-align/dist-web/index.js":
/*!**********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/dom-align/dist-web/index.js ***!
  \**********************************************************************************/
/*! exports provided: default, alignElement, alignPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return alignElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return alignPoint; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../node_modules/mini-store/esm/Provider.js":
/*!*********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/mini-store/esm/Provider.js ***!
  \*********************************************************************************/
/*! exports provided: MiniStoreContext, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStoreContext", function() { return MiniStoreContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MiniStoreContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MiniStoreContext.Provider, { value: this.props.store }, this.props.children));
    };
    return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "../../node_modules/mini-store/esm/connect.js":
/*!********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/mini-store/esm/connect.js ***!
  \********************************************************************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shallowequal */ "../../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Provider */ "../../node_modules/mini-store/esm/Provider.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
var defaultMapStateToProps = function () { return ({}); };
function connect(mapStateToProps, options) {
    if (options === void 0) { options = {}; }
    var shouldSubscribe = !!mapStateToProps;
    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
    return function wrapWithConnect(WrappedComponent) {
        var Connect = /** @class */ (function (_super) {
            __extends(Connect, _super);
            function Connect(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.unsubscribe = null;
                _this.handleChange = function () {
                    if (!_this.unsubscribe) {
                        return;
                    }
                    var nextState = finalMapStateToProps(_this.store.getState(), _this.props);
                    _this.setState({ subscribed: nextState });
                };
                _this.store = _this.context;
                _this.state = {
                    subscribed: finalMapStateToProps(_this.store.getState(), props),
                    store: _this.store,
                    props: props,
                };
                return _this;
            }
            Connect.getDerivedStateFromProps = function (props, prevState) {
                // using ownProps
                if (mapStateToProps && mapStateToProps.length === 2 && props !== prevState.props) {
                    return {
                        subscribed: finalMapStateToProps(prevState.store.getState(), props),
                        props: props,
                    };
                }
                return { props: props };
            };
            Connect.prototype.componentDidMount = function () {
                this.trySubscribe();
            };
            Connect.prototype.componentWillUnmount = function () {
                this.tryUnsubscribe();
            };
            Connect.prototype.shouldComponentUpdate = function (nextProps, nextState) {
                return (!shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(this.props, nextProps) ||
                    !shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(this.state.subscribed, nextState.subscribed));
            };
            Connect.prototype.trySubscribe = function () {
                if (shouldSubscribe) {
                    this.unsubscribe = this.store.subscribe(this.handleChange);
                    this.handleChange();
                }
            };
            Connect.prototype.tryUnsubscribe = function () {
                if (this.unsubscribe) {
                    this.unsubscribe();
                    this.unsubscribe = null;
                }
            };
            Connect.prototype.render = function () {
                var props = __assign(__assign(__assign({}, this.props), this.state.subscribed), { store: this.store });
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, __assign({}, props, { ref: this.props.miniStoreForwardedRef }));
            };
            Connect.displayName = "Connect(" + getDisplayName(WrappedComponent) + ")";
            Connect.contextType = _Provider__WEBPACK_IMPORTED_MODULE_3__["MiniStoreContext"];
            return Connect;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
        if (options.forwardRef) {
            var forwarded = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Connect, __assign({}, props, { miniStoreForwardedRef: ref }));
            });
            return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
        }
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
    };
}


/***/ }),

/***/ "../../node_modules/mini-store/esm/create.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/mini-store/esm/create.js ***!
  \*******************************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function create(initialState) {
    var state = initialState;
    var listeners = [];
    function setState(partial) {
        state = __assign(__assign({}, state), partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }
    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe,
    };
}


/***/ }),

/***/ "../../node_modules/mini-store/esm/index.js":
/*!******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/mini-store/esm/index.js ***!
  \******************************************************************************/
/*! exports provided: Provider, connect, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Provider */ "../../node_modules/mini-store/esm/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _Provider__WEBPACK_IMPORTED_MODULE_0__["Provider"]; });

/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ "../../node_modules/mini-store/esm/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect__WEBPACK_IMPORTED_MODULE_1__["connect"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create */ "../../node_modules/mini-store/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_2__["create"]; });






/***/ }),

/***/ "../../node_modules/rc-align/es/Align.js":
/*!***************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-align/es/Align.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "../../node_modules/rc-util/es/ref.js");
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-align */ "../../node_modules/dom-align/dist-web/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-align/es/util.js");
/* harmony import */ var _hooks_useBuffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useBuffer */ "../../node_modules/rc-align/es/hooks/useBuffer.js");



/**
 * Removed props:
 *  - childrenProps
 */







function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = Object(_hooks_useBuffer__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement;

      if (element) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_4__["alignElement"])(source, element, align);
      } else if (point) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_4__["alignPoint"])(source, point, align);
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_6__["restoreFocus"])(activeElement, source);

      if (onAlign) {
        onAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  });
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_6__["monitorResize"])(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isSamePoint"])(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_6__["monitorResize"])(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_5__["default"])(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(childNode)) {
    childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(childNode, {
      ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Align);
RefAlign.displayName = 'Align';
/* harmony default export */ __webpack_exports__["default"] = (RefAlign);

/***/ }),

/***/ "../../node_modules/rc-align/es/hooks/useBuffer.js":
/*!*************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-align/es/hooks/useBuffer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (callback, buffer) {
  var calledRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

/***/ }),

/***/ "../../node_modules/rc-align/es/index.js":
/*!***************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-align/es/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "../../node_modules/rc-align/es/Align.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-align/es/util.js":
/*!**************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-align/es/util.js ***!
  \**************************************************************************/
/*! exports provided: isSamePoint, restoreFocus, monitorResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFocus", function() { return restoreFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorResize", function() { return monitorResize; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "../../node_modules/rc-util/es/Dom/contains.js");



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__["default"])(container, activeElement)) {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
        target = _ref2[0].target;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      callback({
        width: fixedWidth,
        height: fixedHeight
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

/***/ }),

/***/ "../../node_modules/rc-animate/es/CSSMotion.js":
/*!*********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-animate/es/CSSMotion.js ***!
  \*********************************************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "../../node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raf */ "../../node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/motion */ "../../node_modules/rc-animate/es/util/motion.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */






var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  var forwardRef = !!react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef;

  if (typeof config === 'object') {
    transitionSupport = config.transitionSupport;
    forwardRef = 'forwardRef' in config ? config.forwardRef : forwardRef;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = function (_React$Component) {
    _inherits(CSSMotion, _React$Component);

    function CSSMotion() {
      _classCallCheck(this, CSSMotion);

      var _this = _possibleConstructorReturn(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

      _this.onDomUpdate = function () {
        var _this$state = _this.state,
            status = _this$state.status,
            newStatus = _this$state.newStatus;
        var _this$props = _this.props,
            onAppearStart = _this$props.onAppearStart,
            onEnterStart = _this$props.onEnterStart,
            onLeaveStart = _this$props.onLeaveStart,
            onAppearActive = _this$props.onAppearActive,
            onEnterActive = _this$props.onEnterActive,
            onLeaveActive = _this$props.onLeaveActive,
            motionAppear = _this$props.motionAppear,
            motionEnter = _this$props.motionEnter,
            motionLeave = _this$props.motionLeave;


        if (!isSupportTransition(_this.props)) {
          return;
        }

        // Event injection
        var $ele = _this.getElement();
        if (_this.$cacheEle !== $ele) {
          _this.removeEventListener(_this.$cacheEle);
          _this.addEventListener($ele);
          _this.$cacheEle = $ele;
        }

        // Init status
        if (newStatus && status === STATUS_APPEAR && motionAppear) {
          _this.updateStatus(onAppearStart, null, null, function () {
            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
          });
        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
          _this.updateStatus(onEnterStart, null, null, function () {
            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
          });
        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
          _this.updateStatus(onLeaveStart, null, null, function () {
            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
          });
        }
      };

      _this.onMotionEnd = function (event) {
        var _this$state2 = _this.state,
            status = _this$state2.status,
            statusActive = _this$state2.statusActive;
        var _this$props2 = _this.props,
            onAppearEnd = _this$props2.onAppearEnd,
            onEnterEnd = _this$props2.onEnterEnd,
            onLeaveEnd = _this$props2.onLeaveEnd;

        if (status === STATUS_APPEAR && statusActive) {
          _this.updateStatus(onAppearEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_ENTER && statusActive) {
          _this.updateStatus(onEnterEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_LEAVE && statusActive) {
          _this.updateStatus(onLeaveEnd, { status: STATUS_NONE }, event);
        }
      };

      _this.setNodeRef = function (node) {
        var internalRef = _this.props.internalRef;

        _this.node = node;

        if (typeof internalRef === 'function') {
          internalRef(node);
        } else if (internalRef && 'current' in internalRef) {
          internalRef.current = node;
        }
      };

      _this.getElement = function () {
        try {
          return Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.node || _this);
        } catch (e) {
          /**
           * Fallback to cache element.
           * This is only happen when `motionDeadline` trigger but element removed.
           */
          return _this.$cacheEle;
        }
      };

      _this.addEventListener = function ($ele) {
        if (!$ele) return;

        $ele.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_4__["transitionEndName"], _this.onMotionEnd);
        $ele.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_4__["animationEndName"], _this.onMotionEnd);
      };

      _this.removeEventListener = function ($ele) {
        if (!$ele) return;

        $ele.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_4__["transitionEndName"], _this.onMotionEnd);
        $ele.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_4__["animationEndName"], _this.onMotionEnd);
      };

      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
        var statusStyle = styleFunc ? styleFunc(_this.getElement(), event) : null;

        if (statusStyle === false || _this._destroyed) return;

        var nextStep = void 0;
        if (callback) {
          nextStep = function nextStep() {
            _this.nextFrame(callback);
          };
        }

        _this.setState(_extends({
          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
          newStatus: false
        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`
      };

      _this.updateActiveStatus = function (styleFunc, currentStatus) {
        // `setState` use `postMessage` to trigger at the end of frame.
        // Let's use requestAnimationFrame to update new state in next frame.
        _this.nextFrame(function () {
          var status = _this.state.status;

          if (status !== currentStatus) return;

          var motionDeadline = _this.props.motionDeadline;


          _this.updateStatus(styleFunc, { statusActive: true });

          if (motionDeadline > 0) {
            setTimeout(function () {
              _this.onMotionEnd({
                deadline: true
              });
            }, motionDeadline);
          }
        });
      };

      _this.nextFrame = function (func) {
        _this.cancelNextFrame();
        _this.raf = raf__WEBPACK_IMPORTED_MODULE_3___default()(func);
      };

      _this.cancelNextFrame = function () {
        if (_this.raf) {
          raf__WEBPACK_IMPORTED_MODULE_3___default.a.cancel(_this.raf);
          _this.raf = null;
        }
      };

      _this.state = {
        status: STATUS_NONE,
        statusActive: false,
        newStatus: false,
        statusStyle: null
      };
      _this.$cacheEle = null;
      _this.node = null;
      _this.raf = null;
      return _this;
    }

    _createClass(CSSMotion, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyed = true;
        this.removeEventListener(this.$cacheEle);
        this.cancelNextFrame();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _state = this.state,
            status = _state.status,
            statusActive = _state.statusActive,
            statusStyle = _state.statusStyle;
        var _props = this.props,
            children = _props.children,
            motionName = _props.motionName,
            visible = _props.visible,
            removeOnLeave = _props.removeOnLeave,
            leavedClassName = _props.leavedClassName,
            eventProps = _props.eventProps;


        if (!children) return null;

        if (status === STATUS_NONE || !isSupportTransition(this.props)) {
          if (visible) {
            return children(_extends({}, eventProps), this.setNodeRef);
          } else if (!removeOnLeave) {
            return children(_extends({}, eventProps, { className: leavedClassName }), this.setNodeRef);
          }

          return null;
        }

        return children(_extends({}, eventProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_4__["getTransitionName"])(motionName, status), status !== STATUS_NONE), _defineProperty(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_4__["getTransitionName"])(motionName, status + '-active'), status !== STATUS_NONE && statusActive), _defineProperty(_classNames, motionName, typeof motionName === 'string'), _classNames)),
          style: statusStyle
        }), this.setNodeRef);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, _ref) {
        var prevProps = _ref.prevProps,
            prevStatus = _ref.status;

        if (!isSupportTransition(props)) return {};

        var visible = props.visible,
            motionAppear = props.motionAppear,
            motionEnter = props.motionEnter,
            motionLeave = props.motionLeave,
            motionLeaveImmediately = props.motionLeaveImmediately;

        var newState = {
          prevProps: props
        };

        // Clean up status if prop set to false
        if (prevStatus === STATUS_APPEAR && !motionAppear || prevStatus === STATUS_ENTER && !motionEnter || prevStatus === STATUS_LEAVE && !motionLeave) {
          newState.status = STATUS_NONE;
          newState.statusActive = false;
          newState.newStatus = false;
        }

        // Appear
        if (!prevProps && visible && motionAppear) {
          newState.status = STATUS_APPEAR;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Enter
        if (prevProps && !prevProps.visible && visible && motionEnter) {
          newState.status = STATUS_ENTER;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Leave
        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
          newState.status = STATUS_LEAVE;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        return newState;
      }
    }]);

    return CSSMotion;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  CSSMotion.defaultProps = {
    visible: true,
    motionEnter: true,
    motionAppear: true,
    motionLeave: true,
    removeOnLeave: true
  };


  if (!forwardRef) {
    return CSSMotion;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CSSMotion, _extends({ internalRef: ref }, props));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_4__["supportTransition"]));

/***/ }),

/***/ "../../node_modules/rc-animate/es/util/motion.js":
/*!***********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-animate/es/util/motion.js ***!
  \***********************************************************************************/
/*! exports provided: getVendorPrefixes, getVendorPrefixedEventName, animationEndName, transitionEndName, supportTransition, getTransitionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixes", function() { return getVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedEventName", function() { return getVendorPrefixedEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndName", function() { return animationEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEndName", function() { return transitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportTransition", function() { return supportTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionName", function() { return getTransitionName; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}

var vendorPrefixes = getVendorPrefixes(canUseDOM, typeof window !== 'undefined' ? window : {});

var style = {};

if (canUseDOM) {
  style = document.createElement('div').style;
}

var prefixedEventNames = {};

function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}

var animationEndName = getVendorPrefixedEventName('animationend');
var transitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(animationEndName && transitionEndName);

function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (typeof transitionName === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return transitionName + '-' + transitionType;
}

/***/ }),

/***/ "../../node_modules/rc-menu/es/DOMWrap.js":
/*!****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/DOMWrap.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! resize-observer-polyfill */ "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubMenu */ "../../node_modules/rc-menu/es/SubMenu.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5;

var DOMWrap =
/** @class */
function () {
  var DOMWrap = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DOMWrap, _React$Component);

    var _super = _createSuper(DOMWrap);

    function DOMWrap() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DOMWrap);

      _this = _super.apply(this, arguments);
      _this.resizeObserver = null;
      _this.mutationObserver = null; // original scroll size of the list

      _this.originalTotalWidth = 0; // copy of overflowed items

      _this.overflowedItems = []; // cache item of the original items (so we can track the size and order)

      _this.menuItemSizes = [];
      _this.cancelFrameId = null;
      _this.state = {
        lastVisibleIndex: undefined
      }; // get all valid menuItem nodes

      _this.getMenuItemNodes = function () {
        var prefixCls = _this.props.prefixCls;
        var ul = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

        if (!ul) {
          return [];
        } // filter out all overflowed indicator placeholder


        return [].slice.call(ul.children).filter(function (node) {
          return node.className.split(' ').indexOf("".concat(prefixCls, "-overflowed-submenu")) < 0;
        });
      };

      _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
        var _this$props = _this.props,
            overflowedIndicator = _this$props.overflowedIndicator,
            level = _this$props.level,
            mode = _this$props.mode,
            prefixCls = _this$props.prefixCls,
            theme = _this$props.theme;

        if (level !== 1 || mode !== 'horizontal') {
          return null;
        } // put all the overflowed item inside a submenu
        // with a title of overflow indicator ('...')


        var copy = _this.props.children[0];

        var _copy$props = copy.props,
            throwAway = _copy$props.children,
            title = _copy$props.title,
            propStyle = _copy$props.style,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_copy$props, ["children", "title", "style"]);

        var style = _objectSpread({}, propStyle);

        var key = "".concat(keyPrefix, "-overflowed-indicator");
        var eventKey = "".concat(keyPrefix, "-overflowed-indicator");

        if (overflowedItems.length === 0 && renderPlaceholder !== true) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            display: 'none'
          });
        } else if (renderPlaceholder) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            visibility: 'hidden',
            // prevent from taking normal dom space
            position: 'absolute'
          });
          key = "".concat(key, "-placeholder");
          eventKey = "".concat(eventKey, "-placeholder");
        }

        var popupClassName = theme ? "".concat(prefixCls, "-").concat(theme) : '';
        var props = {};
        _util__WEBPACK_IMPORTED_MODULE_13__["menuAllProps"].forEach(function (k) {
          if (rest[k] !== undefined) {
            props[k] = rest[k];
          }
        });
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SubMenu__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({
          title: overflowedIndicator,
          className: "".concat(prefixCls, "-overflowed-submenu"),
          popupClassName: popupClassName
        }, props, {
          key: key,
          eventKey: eventKey,
          disabled: false,
          style: style
        }), overflowedItems);
      }; // memorize rendered menuSize


      _this.setChildrenWidthAndResize = function () {
        if (_this.props.mode !== 'horizontal') {
          return;
        }

        var ul = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

        if (!ul) {
          return;
        }

        var ulChildrenNodes = ul.children;

        if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
          return;
        }

        var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1]; // need last overflowed indicator for calculating length;

        Object(_util__WEBPACK_IMPORTED_MODULE_13__["setStyle"])(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

        var menuItemNodes = _this.getMenuItemNodes(); // reset display attribute for all hidden elements caused by overflow to calculate updated width
        // and then reset to original state after width calculation


        var overflowedItems = menuItemNodes.filter(function (c) {
          return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
        });
        overflowedItems.forEach(function (c) {
          Object(_util__WEBPACK_IMPORTED_MODULE_13__["setStyle"])(c, 'display', 'inline-block');
        });
        _this.menuItemSizes = menuItemNodes.map(function (c) {
          return Object(_util__WEBPACK_IMPORTED_MODULE_13__["getWidth"])(c);
        });
        overflowedItems.forEach(function (c) {
          Object(_util__WEBPACK_IMPORTED_MODULE_13__["setStyle"])(c, 'display', 'none');
        });
        _this.overflowedIndicatorWidth = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getWidth"])(ul.children[ul.children.length - 1]);
        _this.originalTotalWidth = _this.menuItemSizes.reduce(function (acc, cur) {
          return acc + cur;
        }, 0);

        _this.handleResize(); // prevent the overflowed indicator from taking space;


        Object(_util__WEBPACK_IMPORTED_MODULE_13__["setStyle"])(lastOverflowedIndicatorPlaceholder, 'display', 'none');
      };

      _this.handleResize = function () {
        if (_this.props.mode !== 'horizontal') {
          return;
        }

        var ul = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

        if (!ul) {
          return;
        }

        var width = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getWidth"])(ul);
        _this.overflowedItems = [];
        var currentSumWidth = 0; // index for last visible child in horizontal mode

        var lastVisibleIndex; // float number comparison could be problematic
        // e.g. 0.1 + 0.2 > 0.3 =====> true
        // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation

        if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
          lastVisibleIndex = -1;

          _this.menuItemSizes.forEach(function (liWidth) {
            currentSumWidth += liWidth;

            if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
              lastVisibleIndex += 1;
            }
          });
        }

        _this.setState({
          lastVisibleIndex: lastVisibleIndex
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DOMWrap, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.setChildrenWidthAndResize();

        if (this.props.level === 1 && this.props.mode === 'horizontal') {
          var menuUl = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(this);

          if (!menuUl) {
            return;
          }

          this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_11__["default"](function (entries) {
            entries.forEach(function () {
              var cancelFrameId = _this2.cancelFrameId;
              cancelAnimationFrame(cancelFrameId);
              _this2.cancelFrameId = requestAnimationFrame(_this2.setChildrenWidthAndResize);
            });
          });
          [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
            _this2.resizeObserver.observe(el);
          });

          if (typeof MutationObserver !== 'undefined') {
            this.mutationObserver = new MutationObserver(function () {
              _this2.resizeObserver.disconnect();

              [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
                _this2.resizeObserver.observe(el);
              });

              _this2.setChildrenWidthAndResize();
            });
            this.mutationObserver.observe(menuUl, {
              attributes: false,
              childList: true,
              subTree: false
            });
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }

        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }

        cancelAnimationFrame(this.cancelFrameId);
      }
    }, {
      key: "renderChildren",
      value: function renderChildren(children) {
        var _this3 = this;

        // need to take care of overflowed items in horizontal mode
        var lastVisibleIndex = this.state.lastVisibleIndex;
        return (children || []).reduce(function (acc, childNode, index) {
          var item = childNode;

          if (_this3.props.mode === 'horizontal') {
            var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);

            if (lastVisibleIndex !== undefined && _this3.props.className.indexOf("".concat(_this3.props.prefixCls, "-root")) !== -1) {
              if (index > lastVisibleIndex) {
                item = react__WEBPACK_IMPORTED_MODULE_9___default.a.cloneElement(childNode, // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
                {
                  style: {
                    display: 'none'
                  },
                  eventKey: "".concat(childNode.props.eventKey, "-hidden"),

                  /**
                   * Legacy code. Here `className` never used:
                   * https://github.com/react-component/menu/commit/4cd6b49fce9d116726f4ea00dda85325d6f26500#diff-e2fa48f75c2dd2318295cde428556a76R240
                   */
                  className: "".concat(MENUITEM_OVERFLOWED_CLASSNAME)
                });
              }

              if (index === lastVisibleIndex + 1) {
                _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
                  return react__WEBPACK_IMPORTED_MODULE_9___default.a.cloneElement(c, // children[index].key will become '.$key' in clone by default,
                  // we have to overwrite with the correct key explicitly
                  {
                    key: c.props.eventKey,
                    mode: 'vertical-left'
                  });
                });
                overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
              }
            }

            var ret = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), [overflowed, item]);

            if (index === children.length - 1) {
              // need a placeholder for calculating overflowed indicator width
              ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
            }

            return ret;
          }

          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), [item]);
        }, []);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            visible = _this$props2.visible,
            prefixCls = _this$props2.prefixCls,
            overflowedIndicator = _this$props2.overflowedIndicator,
            mode = _this$props2.mode,
            level = _this$props2.level,
            tag = _this$props2.tag,
            children = _this$props2.children,
            theme = _this$props2.theme,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["visible", "prefixCls", "overflowedIndicator", "mode", "level", "tag", "children", "theme"]);

        var Tag = tag;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Tag, Object.assign({}, rest), this.renderChildren(children));
      }
    }]);

    return DOMWrap;
  }(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

  DOMWrap.defaultProps = {
    tag: 'div',
    className: ''
  };
  return DOMWrap;
}();

/* harmony default export */ __webpack_exports__["default"] = (DOMWrap);

/***/ }),

/***/ "../../node_modules/rc-menu/es/Divider.js":
/*!****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/Divider.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Divider = function Divider(_ref) {
  var className = _ref.className,
      rootPrefixCls = _ref.rootPrefixCls,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(className, " ").concat(rootPrefixCls, "-item-divider"),
    style: style
  });
};

Divider.defaultProps = {
  // To fix keyboard UX.
  disabled: true,
  className: '',
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "../../node_modules/rc-menu/es/Menu.js":
/*!*************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/Menu.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mini-store */ "../../node_modules/mini-store/esm/index.js");
/* harmony import */ var _SubPopupMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubPopupMenu */ "../../node_modules/rc-menu/es/SubPopupMenu.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/legacyUtil */ "../../node_modules/rc-menu/es/utils/legacyUtil.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Menu =
/** @class */
function () {
  var Menu = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, _React$Component);

    var _super = _createSuper(Menu);

    function Menu(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Menu);

      _this = _super.call(this, props);

      _this.onSelect = function (selectInfo) {
        var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize.props;

        if (props.selectable) {
          // root menu
          var _this$store$getState = _this.store.getState(),
              _selectedKeys = _this$store$getState.selectedKeys;

          var selectedKey = selectInfo.key;

          if (props.multiple) {
            _selectedKeys = _selectedKeys.concat([selectedKey]);
          } else {
            _selectedKeys = [selectedKey];
          }

          if (!('selectedKeys' in props)) {
            _this.store.setState({
              selectedKeys: _selectedKeys
            });
          }

          props.onSelect(_objectSpread(_objectSpread({}, selectInfo), {}, {
            selectedKeys: _selectedKeys
          }));
        }
      };

      _this.onClick = function (e) {
        _this.props.onClick(e);
      }; // onKeyDown needs to be exposed as a instance method
      // e.g., in rc-select, we need to navigate menu item while
      // current active item is rc-select input box rather than the menu itself


      _this.onKeyDown = function (e, callback) {
        _this.innerMenu.getWrappedInstance().onKeyDown(e, callback);
      };

      _this.onOpenChange = function (event) {
        var _assertThisInitialize2 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize2.props;

        var openKeys = _this.store.getState().openKeys.concat();

        var changed = false;

        var processSingle = function processSingle(e) {
          var oneChanged = false;

          if (e.open) {
            oneChanged = openKeys.indexOf(e.key) === -1;

            if (oneChanged) {
              openKeys.push(e.key);
            }
          } else {
            var index = openKeys.indexOf(e.key);
            oneChanged = index !== -1;

            if (oneChanged) {
              openKeys.splice(index, 1);
            }
          }

          changed = changed || oneChanged;
        };

        if (Array.isArray(event)) {
          // batch change call
          event.forEach(processSingle);
        } else {
          processSingle(event);
        }

        if (changed) {
          if (!('openKeys' in _this.props)) {
            _this.store.setState({
              openKeys: openKeys
            });
          }

          props.onOpenChange(openKeys);
        }
      };

      _this.onDeselect = function (selectInfo) {
        var _assertThisInitialize3 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize3.props;

        if (props.selectable) {
          var _selectedKeys2 = _this.store.getState().selectedKeys.concat();

          var selectedKey = selectInfo.key;

          var index = _selectedKeys2.indexOf(selectedKey);

          if (index !== -1) {
            _selectedKeys2.splice(index, 1);
          }

          if (!('selectedKeys' in props)) {
            _this.store.setState({
              selectedKeys: _selectedKeys2
            });
          }

          props.onDeselect(_objectSpread(_objectSpread({}, selectInfo), {}, {
            selectedKeys: _selectedKeys2
          }));
        }
      };

      _this.getOpenTransitionName = function () {
        var _assertThisInitialize4 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize4.props;

        var transitionName = props.openTransitionName;
        var animationName = props.openAnimation;

        if (!transitionName && typeof animationName === 'string') {
          transitionName = "".concat(props.prefixCls, "-open-").concat(animationName);
        }

        return transitionName;
      };

      _this.setInnerMenu = function (node) {
        _this.innerMenu = node;
      };

      _this.isRootMenu = true;
      var selectedKeys = props.defaultSelectedKeys;
      var openKeys = props.defaultOpenKeys;

      if ('selectedKeys' in props) {
        selectedKeys = props.selectedKeys || [];
      }

      if ('openKeys' in props) {
        openKeys = props.openKeys || [];
      }

      _this.store = Object(mini_store__WEBPACK_IMPORTED_MODULE_8__["create"])({
        selectedKeys: selectedKeys,
        openKeys: openKeys,
        activeKey: {
          '0-menu-': Object(_SubPopupMenu__WEBPACK_IMPORTED_MODULE_9__["getActiveKey"])(props, props.activeKey)
        }
      });
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateMiniStore();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateMiniStore();
      }
    }, {
      key: "updateMiniStore",
      value: function updateMiniStore() {
        if ('selectedKeys' in this.props) {
          this.store.setState({
            selectedKeys: this.props.selectedKeys || []
          });
        }

        if ('openKeys' in this.props) {
          this.store.setState({
            openKeys: this.props.openKeys || []
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var props = _objectSpread({}, this.props);

        props.className += " ".concat(props.prefixCls, "-root");

        if (props.direction === 'rtl') {
          props.className += " ".concat(props.prefixCls, "-rtl");
        }

        props = _objectSpread(_objectSpread({}, props), {}, {
          onClick: this.onClick,
          onOpenChange: this.onOpenChange,
          onDeselect: this.onDeselect,
          onSelect: this.onSelect,
          parentMenu: this,
          motion: Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_11__["getMotion"])(this.props)
        });
        delete props.openAnimation;
        delete props.openTransitionName;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(mini_store__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
          store: this.store
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SubPopupMenu__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
          ref: this.setInnerMenu
        }), this.props.children));
      }
    }]);

    return Menu;
  }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

  Menu.defaultProps = {
    selectable: true,
    onClick: _util__WEBPACK_IMPORTED_MODULE_10__["noop"],
    onSelect: _util__WEBPACK_IMPORTED_MODULE_10__["noop"],
    onOpenChange: _util__WEBPACK_IMPORTED_MODULE_10__["noop"],
    onDeselect: _util__WEBPACK_IMPORTED_MODULE_10__["noop"],
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
    subMenuOpenDelay: 0.1,
    subMenuCloseDelay: 0.1,
    triggerSubMenuAction: 'hover',
    prefixCls: 'rc-menu',
    className: '',
    mode: 'vertical',
    style: {},
    builtinPlacements: {},
    overflowedIndicator: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "\xB7\xB7\xB7")
  };
  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "../../node_modules/rc-menu/es/MenuItem.js":
/*!*****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/MenuItem.js ***!
  \*****************************************************************************/
/*! exports provided: MenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mini-store */ "../../node_modules/mini-store/esm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var MenuItem =
/** @class */
function () {
  var MenuItem = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuItem, _React$Component);

    var _super = _createSuper(MenuItem);

    function MenuItem() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuItem);

      _this = _super.apply(this, arguments);

      _this.onKeyDown = function (e) {
        var keyCode = e.keyCode;

        if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ENTER) {
          _this.onClick(e);

          return true;
        }

        return undefined;
      };

      _this.onMouseLeave = function (e) {
        var _this$props = _this.props,
            eventKey = _this$props.eventKey,
            onItemHover = _this$props.onItemHover,
            onMouseLeave = _this$props.onMouseLeave;
        onItemHover({
          key: eventKey,
          hover: false
        });
        onMouseLeave({
          key: eventKey,
          domEvent: e
        });
      };

      _this.onMouseEnter = function (e) {
        var _this$props2 = _this.props,
            eventKey = _this$props2.eventKey,
            onItemHover = _this$props2.onItemHover,
            onMouseEnter = _this$props2.onMouseEnter;
        onItemHover({
          key: eventKey,
          hover: true
        });
        onMouseEnter({
          key: eventKey,
          domEvent: e
        });
      };

      _this.onClick = function (e) {
        var _this$props3 = _this.props,
            eventKey = _this$props3.eventKey,
            multiple = _this$props3.multiple,
            onClick = _this$props3.onClick,
            onSelect = _this$props3.onSelect,
            onDeselect = _this$props3.onDeselect,
            isSelected = _this$props3.isSelected;
        var info = {
          key: eventKey,
          keyPath: [eventKey],
          item: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          domEvent: e
        };
        onClick(info);

        if (multiple) {
          if (isSelected) {
            onDeselect(info);
          } else {
            onSelect(info);
          }
        } else if (!isSelected) {
          onSelect(info);
        }
      };

      _this.saveNode = function (node) {
        _this.node = node;
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // invoke customized ref to expose component to mixin
        this.callRef();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.callRef();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var props = this.props;

        if (props.onDestroy) {
          props.onDestroy(props.eventKey);
        }
      }
    }, {
      key: "getPrefixCls",
      value: function getPrefixCls() {
        return "".concat(this.props.rootPrefixCls, "-item");
      }
    }, {
      key: "getActiveClassName",
      value: function getActiveClassName() {
        return "".concat(this.getPrefixCls(), "-active");
      }
    }, {
      key: "getSelectedClassName",
      value: function getSelectedClassName() {
        return "".concat(this.getPrefixCls(), "-selected");
      }
    }, {
      key: "getDisabledClassName",
      value: function getDisabledClassName() {
        return "".concat(this.getPrefixCls(), "-disabled");
      }
    }, {
      key: "callRef",
      value: function callRef() {
        if (this.props.manualRef) {
          this.props.manualRef(this);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var props = _objectSpread({}, this.props);

        var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.getPrefixCls(), props.className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, this.getActiveClassName(), !props.disabled && props.active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, this.getSelectedClassName(), props.isSelected), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, this.getDisabledClassName(), props.disabled), _classNames));

        var attrs = _objectSpread(_objectSpread({}, props.attribute), {}, {
          title: typeof props.title === 'string' ? props.title : undefined,
          className: className,
          // set to menuitem by default
          role: props.role || 'menuitem',
          'aria-disabled': props.disabled
        });

        if (props.role === 'option') {
          // overwrite to option
          attrs = _objectSpread(_objectSpread({}, attrs), {}, {
            role: 'option',
            'aria-selected': props.isSelected
          });
        } else if (props.role === null || props.role === 'none') {
          // sometimes we want to specify role inside <li/> element
          // <li><a role='menuitem'>Link</a></li> would be a good example
          // in this case the role on <li/> should be "none" to
          // remove the implied listitem role.
          // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
          attrs.role = 'none';
        } // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner


        var mouseEvent = {
          onClick: props.disabled ? null : this.onClick,
          onMouseLeave: props.disabled ? null : this.onMouseLeave,
          onMouseEnter: props.disabled ? null : this.onMouseEnter
        };

        var style = _objectSpread({}, props.style);

        if (props.mode === 'inline') {
          if (props.direction === 'rtl') {
            style.paddingRight = props.inlineIndent * props.level;
          } else {
            style.paddingLeft = props.inlineIndent * props.level;
          }
        }

        _util__WEBPACK_IMPORTED_MODULE_11__["menuAllProps"].forEach(function (key) {
          return delete props[key];
        });
        delete props.direction;
        var icon = this.props.itemIcon;

        if (typeof this.props.itemIcon === 'function') {
          // TODO: This is a bug which should fixed after TS refactor
          icon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.props.itemIcon, this.props);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", Object.assign({}, props, attrs, mouseEvent, {
          style: style,
          ref: this.saveNode
        }), props.children, icon);
      }
    }]);

    return MenuItem;
  }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

  MenuItem.isMenuItem = true;
  MenuItem.defaultProps = {
    onSelect: _util__WEBPACK_IMPORTED_MODULE_11__["noop"],
    onMouseEnter: _util__WEBPACK_IMPORTED_MODULE_11__["noop"],
    onMouseLeave: _util__WEBPACK_IMPORTED_MODULE_11__["noop"],
    manualRef: _util__WEBPACK_IMPORTED_MODULE_11__["noop"]
  };
  return MenuItem;
}();


var connected = Object(mini_store__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);
/* harmony default export */ __webpack_exports__["default"] = (connected);

/***/ }),

/***/ "../../node_modules/rc-menu/es/MenuItemGroup.js":
/*!**********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/MenuItemGroup.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MenuItemGroup =
/** @class */
function () {
  var MenuItemGroup = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuItemGroup, _React$Component);

    var _super = _createSuper(MenuItemGroup);

    function MenuItemGroup() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuItemGroup);

      _this = _super.apply(this, arguments);

      _this.renderInnerMenuItem = function (item) {
        var _this$props = _this.props,
            renderMenuItem = _this$props.renderMenuItem,
            index = _this$props.index;
        return renderMenuItem(item, index, _this.props.subMenuKey);
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuItemGroup, [{
      key: "render",
      value: function render() {
        var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

        var _props$className = props.className,
            className = _props$className === void 0 ? '' : _props$className,
            rootPrefixCls = props.rootPrefixCls;
        var titleClassName = "".concat(rootPrefixCls, "-item-group-title");
        var listClassName = "".concat(rootPrefixCls, "-item-group-list");
        var title = props.title,
            children = props.children;
        _util__WEBPACK_IMPORTED_MODULE_7__["menuAllProps"].forEach(function (key) {
          return delete props[key];
        }); // Set onClick to null, to ignore propagated onClick event

        delete props.onClick;
        delete props.direction;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", Object.assign({}, props, {
          className: "".concat(className, " ").concat(rootPrefixCls, "-item-group")
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: titleClassName,
          title: typeof title === 'string' ? title : undefined
        }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
          className: listClassName
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children, this.renderInnerMenuItem)));
      }
    }]);

    return MenuItemGroup;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

  MenuItemGroup.isMenuItemGroup = true;
  MenuItemGroup.defaultProps = {
    disabled: true
  };
  return MenuItemGroup;
}();

/* harmony default export */ __webpack_exports__["default"] = (MenuItemGroup);

/***/ }),

/***/ "../../node_modules/rc-menu/es/SubMenu.js":
/*!****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/SubMenu.js ***!
  \****************************************************************************/
/*! exports provided: SubMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return SubMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-trigger */ "../../node_modules/rc-trigger/es/index.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-animate/es/CSSMotion */ "../../node_modules/rc-animate/es/CSSMotion.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mini-store */ "../../node_modules/mini-store/esm/index.js");
/* harmony import */ var _SubPopupMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SubPopupMenu */ "../../node_modules/rc-menu/es/SubPopupMenu.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./placements */ "../../node_modules/rc-menu/es/placements.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var guid = 0;
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var menuId = Object(_util__WEBPACK_IMPORTED_MODULE_16__["getMenuIdFromSubMenuEventKey"])(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: _objectSpread(_objectSpread({}, state.defaultActiveFirst), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, menuId, defaultActiveFirst))
  });
};

var SubMenu =
/** @class */
function () {
  var SubMenu = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SubMenu, _React$Component);

    var _super = _createSuper(SubMenu);

    function SubMenu(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubMenu);

      _this = _super.call(this, props);

      _this.onDestroy = function (key) {
        _this.props.onDestroy(key);
      };
      /**
       * note:
       *  This legacy code that `onKeyDown` is called by parent instead of dom self.
       *  which need return code to check if this event is handled
       */


      _this.onKeyDown = function (e) {
        var keyCode = e.keyCode;
        var menu = _this.menuInstance;
        var _this$props = _this.props,
            isOpen = _this$props.isOpen,
            store = _this$props.store;

        if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].ENTER) {
          _this.onTitleClick(e);

          updateDefaultActiveFirst(store, _this.props.eventKey, true);
          return true;
        }

        if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].RIGHT) {
          if (isOpen) {
            menu.onKeyDown(e);
          } else {
            _this.triggerOpenChange(true); // need to update current menu's defaultActiveFirst value


            updateDefaultActiveFirst(store, _this.props.eventKey, true);
          }

          return true;
        }

        if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].LEFT) {
          var handled;

          if (isOpen) {
            handled = menu.onKeyDown(e);
          } else {
            return undefined;
          }

          if (!handled) {
            _this.triggerOpenChange(false);

            handled = true;
          }

          return handled;
        }

        if (isOpen && (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].UP || keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].DOWN)) {
          return menu.onKeyDown(e);
        }

        return undefined;
      };

      _this.onOpenChange = function (e) {
        _this.props.onOpenChange(e);
      };

      _this.onPopupVisibleChange = function (visible) {
        _this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
      };

      _this.onMouseEnter = function (e) {
        var _this$props2 = _this.props,
            key = _this$props2.eventKey,
            onMouseEnter = _this$props2.onMouseEnter,
            store = _this$props2.store;
        updateDefaultActiveFirst(store, _this.props.eventKey, false);
        onMouseEnter({
          key: key,
          domEvent: e
        });
      };

      _this.onMouseLeave = function (e) {
        var _this$props3 = _this.props,
            parentMenu = _this$props3.parentMenu,
            eventKey = _this$props3.eventKey,
            onMouseLeave = _this$props3.onMouseLeave;
        parentMenu.subMenuInstance = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
        onMouseLeave({
          key: eventKey,
          domEvent: e
        });
      };

      _this.onTitleMouseEnter = function (domEvent) {
        var _this$props4 = _this.props,
            key = _this$props4.eventKey,
            onItemHover = _this$props4.onItemHover,
            onTitleMouseEnter = _this$props4.onTitleMouseEnter;
        onItemHover({
          key: key,
          hover: true
        });
        onTitleMouseEnter({
          key: key,
          domEvent: domEvent
        });
      };

      _this.onTitleMouseLeave = function (e) {
        var _this$props5 = _this.props,
            parentMenu = _this$props5.parentMenu,
            eventKey = _this$props5.eventKey,
            onItemHover = _this$props5.onItemHover,
            onTitleMouseLeave = _this$props5.onTitleMouseLeave;
        parentMenu.subMenuInstance = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
        onItemHover({
          key: eventKey,
          hover: false
        });
        onTitleMouseLeave({
          key: eventKey,
          domEvent: e
        });
      };

      _this.onTitleClick = function (e) {
        var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            props = _assertThisInitialize.props;

        props.onTitleClick({
          key: props.eventKey,
          domEvent: e
        });

        if (props.triggerSubMenuAction === 'hover') {
          return;
        }

        _this.triggerOpenChange(!props.isOpen, 'click');

        updateDefaultActiveFirst(props.store, _this.props.eventKey, false);
      };

      _this.onSubMenuClick = function (info) {
        // in the case of overflowed submenu
        // onClick is not copied over
        if (typeof _this.props.onClick === 'function') {
          _this.props.onClick(_this.addKeyPath(info));
        }
      };

      _this.onSelect = function (info) {
        _this.props.onSelect(info);
      };

      _this.onDeselect = function (info) {
        _this.props.onDeselect(info);
      };

      _this.getPrefixCls = function () {
        return "".concat(_this.props.rootPrefixCls, "-submenu");
      };

      _this.getActiveClassName = function () {
        return "".concat(_this.getPrefixCls(), "-active");
      };

      _this.getDisabledClassName = function () {
        return "".concat(_this.getPrefixCls(), "-disabled");
      };

      _this.getSelectedClassName = function () {
        return "".concat(_this.getPrefixCls(), "-selected");
      };

      _this.getOpenClassName = function () {
        return "".concat(_this.props.rootPrefixCls, "-submenu-open");
      };

      _this.saveMenuInstance = function (c) {
        // children menu instance
        _this.menuInstance = c;
      };

      _this.addKeyPath = function (info) {
        return _objectSpread(_objectSpread({}, info), {}, {
          keyPath: (info.keyPath || []).concat(_this.props.eventKey)
        });
      };

      _this.triggerOpenChange = function (open, type) {
        var key = _this.props.eventKey;

        var openChange = function openChange() {
          _this.onOpenChange({
            key: key,
            item: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            trigger: type,
            open: open
          });
        };

        if (type === 'mouseenter') {
          // make sure mouseenter happen after other menu item's mouseleave
          _this.mouseenterTimeout = setTimeout(function () {
            openChange();
          }, 0);
        } else {
          openChange();
        }
      };

      _this.isChildrenSelected = function () {
        var ret = {
          find: false
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_16__["loopMenuItemRecursively"])(_this.props.children, _this.props.selectedKeys, ret);
        return ret.find;
      };

      _this.isOpen = function () {
        return _this.props.openKeys.indexOf(_this.props.eventKey) !== -1;
      };

      _this.adjustWidth = function () {
        /* istanbul ignore if */
        if (!_this.subMenuTitle || !_this.menuInstance) {
          return;
        }

        var popupMenu = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(_this.menuInstance);

        if (popupMenu.offsetWidth >= _this.subMenuTitle.offsetWidth) {
          return;
        }
        /* istanbul ignore next */


        popupMenu.style.minWidth = "".concat(_this.subMenuTitle.offsetWidth, "px");
      };

      _this.saveSubMenuTitle = function (subMenuTitle) {
        _this.subMenuTitle = subMenuTitle;
      };

      _this.getBaseProps = function () {
        var _assertThisInitialize2 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            props = _assertThisInitialize2.props;

        return {
          mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
          visible: _this.props.isOpen,
          level: props.level + 1,
          inlineIndent: props.inlineIndent,
          focusable: false,
          onClick: _this.onSubMenuClick,
          onSelect: _this.onSelect,
          onDeselect: _this.onDeselect,
          onDestroy: _this.onDestroy,
          selectedKeys: props.selectedKeys,
          eventKey: "".concat(props.eventKey, "-menu-"),
          openKeys: props.openKeys,
          motion: props.motion,
          onOpenChange: _this.onOpenChange,
          subMenuOpenDelay: props.subMenuOpenDelay,
          parentMenu: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          triggerSubMenuAction: props.triggerSubMenuAction,
          builtinPlacements: props.builtinPlacements,
          defaultActiveFirst: props.store.getState().defaultActiveFirst[Object(_util__WEBPACK_IMPORTED_MODULE_16__["getMenuIdFromSubMenuEventKey"])(props.eventKey)],
          multiple: props.multiple,
          prefixCls: props.rootPrefixCls,
          id: _this.internalMenuId,
          manualRef: _this.saveMenuInstance,
          itemIcon: props.itemIcon,
          expandIcon: props.expandIcon,
          direction: props.direction
        };
      };

      _this.getMotion = function (mode, visible) {
        var _assertThisInitialize3 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            haveRendered = _assertThisInitialize3.haveRendered;

        var _this$props6 = _this.props,
            motion = _this$props6.motion,
            rootPrefixCls = _this$props6.rootPrefixCls; // don't show transition on first rendering (no animation for opened menu)
        // show appear transition if it's not visible (not sure why)
        // show appear transition if it's not inline mode

        var mergedMotion = _objectSpread(_objectSpread({}, motion), {}, {
          leavedClassName: "".concat(rootPrefixCls, "-hidden"),
          removeOnLeave: false,
          motionAppear: haveRendered || !visible || mode !== 'inline'
        });

        return mergedMotion;
      };

      var store = props.store,
          eventKey = props.eventKey;

      var _store$getState = store.getState(),
          defaultActiveFirst = _store$getState.defaultActiveFirst;

      _this.isRootMenu = false;
      var value = false;

      if (defaultActiveFirst) {
        value = defaultActiveFirst[eventKey];
      }

      updateDefaultActiveFirst(store, eventKey, value);
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubMenu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this2 = this;

        var _this$props7 = this.props,
            mode = _this$props7.mode,
            parentMenu = _this$props7.parentMenu,
            manualRef = _this$props7.manualRef; // invoke customized ref to expose component to mixin

        if (manualRef) {
          manualRef(this);
        }

        if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
          return;
        }

        this.minWidthTimeout = setTimeout(function () {
          return _this2.adjustWidth();
        }, 0);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this$props8 = this.props,
            onDestroy = _this$props8.onDestroy,
            eventKey = _this$props8.eventKey;

        if (onDestroy) {
          onDestroy(eventKey);
        }
        /* istanbul ignore if */


        if (this.minWidthTimeout) {
          clearTimeout(this.minWidthTimeout);
        }
        /* istanbul ignore if */


        if (this.mouseenterTimeout) {
          clearTimeout(this.mouseenterTimeout);
        }
      }
    }, {
      key: "renderChildren",
      value: function renderChildren(children) {
        var _this3 = this;

        var baseProps = this.getBaseProps(); // [Legacy] getMotion must be called before `haveRendered`

        var mergedMotion = this.getMotion(baseProps.mode, baseProps.visible);
        this.haveRendered = true;
        this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender; // never rendered not planning to, don't render

        if (!this.haveOpened) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
        }

        var direction = baseProps.direction;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({
          visible: baseProps.visible
        }, mergedMotion), function (_ref) {
          var className = _ref.className,
              style = _ref.style;
          var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_12___default()("".concat(baseProps.prefixCls, "-sub"), className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, "".concat(baseProps.prefixCls, "-rtl"), direction === 'rtl'));
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SubPopupMenu__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, baseProps, {
            id: _this3.internalMenuId,
            className: mergedClassName,
            style: style
          }), children);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames2;

        var props = _objectSpread({}, this.props);

        var isOpen = props.isOpen;
        var prefixCls = this.getPrefixCls();
        var isInlineMode = props.mode === 'inline';
        var className = classnames__WEBPACK_IMPORTED_MODULE_12___default()(prefixCls, "".concat(prefixCls, "-").concat(props.mode), (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, props.className, !!props.className), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, this.getOpenClassName(), isOpen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, this.getActiveClassName(), props.active || isOpen && !isInlineMode), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, this.getDisabledClassName(), props.disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames2, this.getSelectedClassName(), this.isChildrenSelected()), _classNames2));

        if (!this.internalMenuId) {
          if (props.eventKey) {
            this.internalMenuId = "".concat(props.eventKey, "$Menu");
          } else {
            guid += 1;
            this.internalMenuId = "$__$".concat(guid, "$Menu");
          }
        }

        var mouseEvents = {};
        var titleClickEvents = {};
        var titleMouseEvents = {};

        if (!props.disabled) {
          mouseEvents = {
            onMouseLeave: this.onMouseLeave,
            onMouseEnter: this.onMouseEnter
          }; // only works in title, not outer li

          titleClickEvents = {
            onClick: this.onTitleClick
          };
          titleMouseEvents = {
            onMouseEnter: this.onTitleMouseEnter,
            onMouseLeave: this.onTitleMouseLeave
          };
        }

        var style = {};
        var direction = props.direction;

        if (isInlineMode) {
          if (direction === 'rtl') {
            style.paddingRight = props.inlineIndent * props.level;
          } else {
            style.paddingLeft = props.inlineIndent * props.level;
          }
        }

        var ariaOwns = {}; // only set aria-owns when menu is open
        // otherwise it would be an invalid aria-owns value
        // since corresponding node cannot be found

        if (this.props.isOpen) {
          ariaOwns = {
            'aria-owns': this.internalMenuId
          };
        } // expand custom icon should NOT be displayed in menu with horizontal mode.


        var icon = null;

        if (props.mode !== 'horizontal') {
          icon = this.props.expandIcon; // ReactNode

          if (typeof this.props.expandIcon === 'function') {
            icon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.props.expandIcon, _objectSpread({}, this.props));
          }
        }

        var title = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({
          ref: this.saveSubMenuTitle,
          style: style,
          className: "".concat(prefixCls, "-title"),
          role: "button"
        }, titleMouseEvents, titleClickEvents, {
          "aria-expanded": isOpen
        }, ariaOwns, {
          "aria-haspopup": "true",
          title: typeof props.title === 'string' ? props.title : undefined
        }), props.title, icon || react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "".concat(prefixCls, "-arrow")
        }));
        var children = this.renderChildren(props.children);
        var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
          return triggerNode.parentNode;
        };
        var popupPlacement = popupPlacementMap[props.mode];
        var popupAlign = props.popupOffset ? {
          offset: props.popupOffset
        } : {};
        var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
        popupClassName += direction === 'rtl' ? " ".concat(prefixCls, "-rtl") : '';
        var disabled = props.disabled,
            triggerSubMenuAction = props.triggerSubMenuAction,
            subMenuOpenDelay = props.subMenuOpenDelay,
            forceSubMenuRender = props.forceSubMenuRender,
            subMenuCloseDelay = props.subMenuCloseDelay,
            builtinPlacements = props.builtinPlacements;
        _util__WEBPACK_IMPORTED_MODULE_16__["menuAllProps"].forEach(function (key) {
          return delete props[key];
        }); // Set onClick to null, to ignore propagated onClick event

        delete props.onClick;
        var placement = direction === 'rtl' ? Object.assign({}, _placements__WEBPACK_IMPORTED_MODULE_15__["placementsRtl"], builtinPlacements) : Object.assign({}, _placements__WEBPACK_IMPORTED_MODULE_15__["placements"], builtinPlacements);
        delete props.direction;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", Object.assign({}, props, mouseEvents, {
          className: className,
          role: "menuitem"
        }), isInlineMode && title, isInlineMode && children, !isInlineMode && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_trigger__WEBPACK_IMPORTED_MODULE_9__["default"], {
          prefixCls: prefixCls,
          popupClassName: classnames__WEBPACK_IMPORTED_MODULE_12___default()("".concat(prefixCls, "-popup"), popupClassName),
          getPopupContainer: getPopupContainer,
          builtinPlacements: placement,
          popupPlacement: popupPlacement,
          popupVisible: isOpen,
          popupAlign: popupAlign,
          popup: children,
          action: disabled ? [] : [triggerSubMenuAction],
          mouseEnterDelay: subMenuOpenDelay,
          mouseLeaveDelay: subMenuCloseDelay,
          onPopupVisibleChange: this.onPopupVisibleChange,
          forceRender: forceSubMenuRender
        }, title));
      }
    }]);

    return SubMenu;
  }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

  SubMenu.defaultProps = {
    onMouseEnter: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    onMouseLeave: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    onTitleMouseEnter: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    onTitleMouseLeave: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    onTitleClick: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    manualRef: _util__WEBPACK_IMPORTED_MODULE_16__["noop"],
    mode: 'vertical',
    title: ''
  };
  return SubMenu;
}();


var connected = Object(mini_store__WEBPACK_IMPORTED_MODULE_13__["connect"])(function (_ref2, _ref3) {
  var openKeys = _ref2.openKeys,
      activeKey = _ref2.activeKey,
      selectedKeys = _ref2.selectedKeys;
  var eventKey = _ref3.eventKey,
      subMenuKey = _ref3.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu);
connected.isSubMenu = true;
/* harmony default export */ __webpack_exports__["default"] = (connected);

/***/ }),

/***/ "../../node_modules/rc-menu/es/SubPopupMenu.js":
/*!*********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/SubPopupMenu.js ***!
  \*********************************************************************************/
/*! exports provided: getActiveKey, saveRef, SubPopupMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveKey", function() { return getActiveKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPopupMenu", function() { return SubPopupMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mini-store */ "../../node_modules/mini-store/esm/index.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/createChainedFunction */ "../../node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shallowequal */ "../../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-menu/es/util.js");
/* harmony import */ var _DOMWrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DOMWrap */ "../../node_modules/rc-menu/es/DOMWrap.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }

  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var state = store.getState();
  store.setState({
    activeKey: _objectSpread(_objectSpread({}, state.activeKey), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, menuId, activeKey))
  });
}

function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found;
    Object(_util__WEBPACK_IMPORTED_MODULE_14__["loopMenuItem"])(children, function (c, i) {
      if (c && c.props && !c.props.disabled && activeKey === Object(_util__WEBPACK_IMPORTED_MODULE_14__["getKeyFromChildrenIndex"])(c, eventKey, i)) {
        found = true;
      }
    });

    if (found) {
      return activeKey;
    }
  }

  activeKey = null;

  if (props.defaultActiveFirst) {
    Object(_util__WEBPACK_IMPORTED_MODULE_14__["loopMenuItem"])(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getKeyFromChildrenIndex"])(c, eventKey, i);
      }
    });
    return activeKey;
  }

  return activeKey;
}
function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);

    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}

var SubPopupMenu =
/** @class */
function () {
  var SubPopupMenu = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubPopupMenu, _React$Component);

    var _super = _createSuper(SubPopupMenu);

    function SubPopupMenu(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SubPopupMenu);

      _this = _super.call(this, props);
      /**
       * all keyboard events callbacks run from here at first
       *
       * note:
       *  This legacy code that `onKeyDown` is called by parent instead of dom self.
       *  which need return code to check if this event is handled
       */

      _this.onKeyDown = function (e, callback) {
        var keyCode = e.keyCode;
        var handled;

        _this.getFlatInstanceArray().forEach(function (obj) {
          if (obj && obj.props.active && obj.onKeyDown) {
            handled = obj.onKeyDown(e);
          }
        });

        if (handled) {
          return 1;
        }

        var activeItem = null;

        if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].UP || keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].DOWN) {
          activeItem = _this.step(keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].UP ? -1 : 1);
        }

        if (activeItem) {
          e.preventDefault();
          updateActiveKey(_this.props.store, getEventKey(_this.props), activeItem.props.eventKey);

          if (typeof callback === 'function') {
            callback(activeItem);
          }

          return 1;
        }

        return undefined;
      };

      _this.onItemHover = function (e) {
        var key = e.key,
            hover = e.hover;
        updateActiveKey(_this.props.store, getEventKey(_this.props), hover ? key : null);
      };

      _this.onDeselect = function (selectInfo) {
        _this.props.onDeselect(selectInfo);
      };

      _this.onSelect = function (selectInfo) {
        _this.props.onSelect(selectInfo);
      };

      _this.onClick = function (e) {
        _this.props.onClick(e);
      };

      _this.onOpenChange = function (e) {
        _this.props.onOpenChange(e);
      };

      _this.onDestroy = function (key) {
        /* istanbul ignore next */
        _this.props.onDestroy(key);
      };

      _this.getFlatInstanceArray = function () {
        return _this.instanceArray;
      };

      _this.step = function (direction) {
        var children = _this.getFlatInstanceArray();

        var activeKey = _this.props.store.getState().activeKey[getEventKey(_this.props)];

        var len = children.length;

        if (!len) {
          return null;
        }

        if (direction < 0) {
          children = children.concat().reverse();
        } // find current activeIndex


        var activeIndex = -1;
        children.every(function (c, ci) {
          if (c && c.props.eventKey === activeKey) {
            activeIndex = ci;
            return false;
          }

          return true;
        });

        if (!_this.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
          return undefined;
        }

        var start = (activeIndex + 1) % len;
        var i = start;

        do {
          var child = children[i];

          if (!child || child.props.disabled) {
            i = (i + 1) % len;
          } else {
            return child;
          }
        } while (i !== start);

        return null;
      };

      _this.renderCommonMenuItem = function (child, i, extraProps) {
        var state = _this.props.store.getState();

        var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize.props;

        var key = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getKeyFromChildrenIndex"])(child, props.eventKey, i);
        var childProps = child.props; // https://github.com/ant-design/ant-design/issues/11517#issuecomment-477403055

        if (!childProps || typeof child.type === 'string') {
          return child;
        }

        var isActive = key === state.activeKey;

        var newChildProps = _objectSpread(_objectSpread({
          mode: childProps.mode || props.mode,
          level: props.level,
          inlineIndent: props.inlineIndent,
          renderMenuItem: _this.renderMenuItem,
          rootPrefixCls: props.prefixCls,
          index: i,
          parentMenu: props.parentMenu,
          // customized ref function, need to be invoked manually in child's componentDidMount
          manualRef: childProps.disabled ? undefined : Object(rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__["default"])(child.ref, saveRef.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this))),
          eventKey: key,
          active: !childProps.disabled && isActive,
          multiple: props.multiple,
          onClick: function onClick(e) {
            (childProps.onClick || _util__WEBPACK_IMPORTED_MODULE_14__["noop"])(e);

            _this.onClick(e);
          },
          onItemHover: _this.onItemHover,
          motion: props.motion,
          subMenuOpenDelay: props.subMenuOpenDelay,
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          onOpenChange: _this.onOpenChange,
          onDeselect: _this.onDeselect,
          onSelect: _this.onSelect,
          builtinPlacements: props.builtinPlacements,
          itemIcon: childProps.itemIcon || _this.props.itemIcon,
          expandIcon: childProps.expandIcon || _this.props.expandIcon
        }, extraProps), {}, {
          direction: props.direction
        }); // ref: https://github.com/ant-design/ant-design/issues/13943


        if (props.mode === 'inline' || Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMobileDevice"])()) {
          newChildProps.triggerSubMenuAction = 'click';
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(child, newChildProps);
      };

      _this.renderMenuItem = function (c, i, subMenuKey) {
        /* istanbul ignore if */
        if (!c) {
          return null;
        }

        var state = _this.props.store.getState();

        var extraProps = {
          openKeys: state.openKeys,
          selectedKeys: state.selectedKeys,
          triggerSubMenuAction: _this.props.triggerSubMenuAction,
          subMenuKey: subMenuKey
        };
        return _this.renderCommonMenuItem(c, i, extraProps);
      };

      props.store.setState({
        activeKey: _objectSpread(_objectSpread({}, props.store.getState().activeKey), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props.eventKey, getActiveKey(props, props.activeKey)))
      });
      _this.instanceArray = [];
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SubPopupMenu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // invoke customized ref to expose component to mixin
        if (this.props.manualRef) {
          this.props.manualRef(this);
        }
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return this.props.visible || nextProps.visible || this.props.className !== nextProps.className || !shallowequal__WEBPACK_IMPORTED_MODULE_12___default()(this.props.style, nextProps.style);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var props = this.props;
        var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
        var activeKey = getActiveKey(props, originalActiveKey);

        if (activeKey !== originalActiveKey) {
          updateActiveKey(props.store, getEventKey(props), activeKey);
        } else if ('activeKey' in prevProps) {
          // If prev activeKey is not same as current activeKey,
          // we should set it.
          var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);

          if (activeKey !== prevActiveKey) {
            updateActiveKey(props.store, getEventKey(props), activeKey);
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

        this.instanceArray = [];
        var className = classnames__WEBPACK_IMPORTED_MODULE_13___default()(props.prefixCls, props.className, "".concat(props.prefixCls, "-").concat(props.mode));
        var domProps = {
          className: className,
          // role could be 'select' and by default set to menu
          role: props.role || 'menu'
        };

        if (props.id) {
          domProps.id = props.id;
        }

        if (props.focusable) {
          domProps.tabIndex = 0;
          domProps.onKeyDown = this.onKeyDown;
        }

        var prefixCls = props.prefixCls,
            eventKey = props.eventKey,
            visible = props.visible,
            level = props.level,
            mode = props.mode,
            overflowedIndicator = props.overflowedIndicator,
            theme = props.theme;
        _util__WEBPACK_IMPORTED_MODULE_14__["menuAllProps"].forEach(function (key) {
          return delete props[key];
        }); // Otherwise, the propagated click event will trigger another onClick

        delete props.onClick;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DOMWrap__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({}, props, {
          prefixCls: prefixCls,
          mode: mode,
          tag: "ul",
          level: level,
          theme: theme,
          visible: visible,
          overflowedIndicator: overflowedIndicator
        }, domProps), react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(props.children, function (c, i) {
          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
        }));
      }
    }]);

    return SubPopupMenu;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

  SubPopupMenu.defaultProps = {
    prefixCls: 'rc-menu',
    className: '',
    mode: 'vertical',
    level: 1,
    inlineIndent: 24,
    visible: true,
    focusable: true,
    style: {},
    manualRef: _util__WEBPACK_IMPORTED_MODULE_14__["noop"]
  };
  return SubPopupMenu;
}();


var connected = Object(mini_store__WEBPACK_IMPORTED_MODULE_9__["connect"])()(SubPopupMenu);
/* harmony default export */ __webpack_exports__["default"] = (connected);

/***/ }),

/***/ "../../node_modules/rc-menu/es/index.js":
/*!**************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/index.js ***!
  \**************************************************************************/
/*! exports provided: SubMenu, Item, MenuItem, MenuItemGroup, ItemGroup, Divider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "../../node_modules/rc-menu/es/Menu.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubMenu */ "../../node_modules/rc-menu/es/SubMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return _SubMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "../../node_modules/rc-menu/es/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItemGroup */ "../../node_modules/rc-menu/es/MenuItemGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItemGroup", function() { return _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemGroup", function() { return _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Divider */ "../../node_modules/rc-menu/es/Divider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _Divider__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Menu__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-menu/es/placements.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/placements.js ***!
  \*******************************************************************************/
/*! exports provided: placements, placementsRtl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placementsRtl", function() { return placementsRtl; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "../../node_modules/rc-menu/es/util.js":
/*!*************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/util.js ***!
  \*************************************************************************/
/*! exports provided: noop, getKeyFromChildrenIndex, getMenuIdFromSubMenuEventKey, loopMenuItem, loopMenuItemRecursively, menuAllProps, getWidth, setStyle, isMobileDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyFromChildrenIndex", function() { return getKeyFromChildrenIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuIdFromSubMenuEventKey", function() { return getMenuIdFromSubMenuEventKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopMenuItem", function() { return loopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopMenuItemRecursively", function() { return loopMenuItemRecursively; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuAllProps", function() { return menuAllProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isMobile */ "../../node_modules/rc-menu/es/utils/isMobile.js");



function noop() {}
function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || "".concat(prefix, "item_").concat(index);
}
function getMenuIdFromSubMenuEventKey(eventKey) {
  return "".concat(eventKey, "-menu-");
}
function loopMenuItem(children, cb) {
  var index = -1;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (c) {
    index += 1;

    if (c && c.type && c.type.isMenuItemGroup) {
      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(c.props.children, function (c2) {
        index += 1;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}
function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (c) {
    if (c) {
      var construct = c.type;

      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }

      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}
var menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator', 'motion', // the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon']; // ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior

var getWidth = function getWidth(elem) {
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;

  if (width) {
    width = +width.toFixed(6);
  }

  return width || 0;
};
var setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(elem.style) === 'object') {
    elem.style[styleProperty] = value;
  }
};
var isMobileDevice = function isMobileDevice() {
  return _utils_isMobile__WEBPACK_IMPORTED_MODULE_2__["default"].any;
};

/***/ }),

/***/ "../../node_modules/rc-menu/es/utils/isMobile.js":
/*!***********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/utils/isMobile.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// MIT License from https://github.com/kaimallea/isMobile
var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'

var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'

var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function match(regex, userAgent) {
  return regex.test(userAgent);
}

function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : ''); // Facebook mobile app's integrated browser adds a bunch of strings that
  // match everything. Strip it out if it exists.

  var tmp = ua.split('[FBAN');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp = tmp;

    var _tmp2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_tmp, 1);

    ua = _tmp2[0];
  } // Twitter mobile app's integrated browser on iPad adds a "Twitter for
  // iPhone" string. Same probably happens on other tablet platforms.
  // This will confuse detection so strip it out if it exists.


  tmp = ua.split('Twitter');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp3 = tmp;

    var _tmp4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_tmp3, 1);

    ua = _tmp4[0];
  }

  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device; // excludes 'other' devices and ipods, targeting touchscreen phones

  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}

var defaultResult = _objectSpread(_objectSpread({}, isMobile()), {}, {
  isMobile: isMobile
});

/* harmony default export */ __webpack_exports__["default"] = (defaultResult);

/***/ }),

/***/ "../../node_modules/rc-menu/es/utils/legacyUtil.js":
/*!*************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-menu/es/utils/legacyUtil.js ***!
  \*************************************************************************************/
/*! exports provided: getMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotion", function() { return getMotion; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/warning */ "../../node_modules/rc-util/es/warning.js");


function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      openAnimation = _ref.openAnimation,
      openTransitionName = _ref.openTransitionName;

  if (motion) {
    return motion;
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(openAnimation) === 'object' && openAnimation) {
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Object type of `openAnimation` is removed. Please use `motion` instead.');
  } else if (typeof openAnimation === 'string') {
    return {
      motionName: "".concat(prefixCls, "-open-").concat(openAnimation)
    };
  }

  if (openTransitionName) {
    return {
      motionName: openTransitionName
    };
  }

  return null;
}

/***/ }),

/***/ "../../node_modules/rc-tooltip/es/Content.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-tooltip/es/Content.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "../../node_modules/rc-tooltip/es/Tooltip.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-tooltip/es/Tooltip.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-trigger */ "../../node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placements */ "../../node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "../../node_modules/rc-tooltip/es/Content.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = _objectWithoutProperties(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && _typeof(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_trigger__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_2__["placements"],
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Tooltip));

/***/ }),

/***/ "../../node_modules/rc-tooltip/es/index.js":
/*!*****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-tooltip/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "../../node_modules/rc-tooltip/es/Tooltip.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-tooltip/es/placements.js":
/*!**********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-tooltip/es/placements.js ***!
  \**********************************************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "../../node_modules/rc-tooltip/lib/placements.js":
/*!***********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-tooltip/lib/placements.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.placements = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
exports.placements = placements;
var _default = placements;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/rc-trigger/es/Popup.js":
/*!*****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/Popup.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! raf */ "../../node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-align */ "../../node_modules/rc-align/es/index.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/ref */ "../../node_modules/rc-util/es/ref.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-animate/es/CSSMotion */ "../../node_modules/rc-animate/es/CSSMotion.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PopupInner */ "../../node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/legacyUtil */ "../../node_modules/rc-trigger/es/utils/legacyUtil.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-param-reassign */








var CSSMotion = rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_12__["default"];

function supportMotion(motion) {
  return motion && motion.motionName;
}

var Popup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Popup);

    _this = _super.apply(this, arguments);
    _this.state = {
      targetWidth: undefined,
      targetHeight: undefined,
      status: null,
      prevVisible: null,
      alignClassName: null
    };
    _this.popupRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.alignRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.nextFrameState = null;
    _this.nextFrameId = null;

    _this.onAlign = function (popupDomNode, align) {
      var status = _this.state.status;
      var _this$props = _this.props,
          getClassNameFromAlign = _this$props.getClassNameFromAlign,
          onAlign = _this$props.onAlign;
      var alignClassName = getClassNameFromAlign(align);

      if (status === 'align') {
        _this.setState({
          alignClassName: alignClassName,
          status: 'aligned'
        }, function () {
          _this.alignRef.current.forceAlign();
        });
      } else if (status === 'aligned') {
        _this.setState({
          alignClassName: alignClassName,
          status: 'afterAlign'
        });

        onAlign(popupDomNode, align);
      } else {
        _this.setState({
          alignClassName: alignClassName
        });
      }
    };

    _this.onMotionEnd = function () {
      var visible = _this.props.visible;

      _this.setState({
        status: visible ? 'AfterMotion' : 'stable'
      });
    };

    _this.setStateOnNextFrame = function (state) {
      _this.cancelFrameState();

      _this.nextFrameState = _objectSpread(_objectSpread({}, _this.nextFrameState), state);
      _this.nextFrameId = raf__WEBPACK_IMPORTED_MODULE_8___default()(function () {
        var submitState = _objectSpread({}, _this.nextFrameState);

        _this.nextFrameState = null;

        _this.setState(submitState);
      });
    };

    _this.getMotion = function () {
      return _objectSpread({}, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_14__["getMotion"])(_this.props));
    }; // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align


    _this.getAlignTarget = function () {
      var _this$props2 = _this.props,
          point = _this$props2.point,
          getRootDomNode = _this$props2.getRootDomNode;

      if (point) {
        return point;
      }

      return getRootDomNode;
    };

    _this.cancelFrameState = function () {
      raf__WEBPACK_IMPORTED_MODULE_8___default.a.cancel(_this.nextFrameId);
    };

    _this.renderPopupElement = function () {
      var _this$state = _this.state,
          status = _this$state.status,
          targetHeight = _this$state.targetHeight,
          targetWidth = _this$state.targetWidth,
          alignClassName = _this$state.alignClassName;
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          style = _this$props3.style,
          stretch = _this$props3.stretch,
          visible = _this$props3.visible,
          align = _this$props3.align,
          destroyPopupOnHide = _this$props3.destroyPopupOnHide,
          onMouseEnter = _this$props3.onMouseEnter,
          onMouseLeave = _this$props3.onMouseLeave,
          onMouseDown = _this$props3.onMouseDown,
          onTouchStart = _this$props3.onTouchStart,
          children = _this$props3.children;
      var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls, className, alignClassName);
      var hiddenClassName = "".concat(prefixCls, "-hidden"); // ================== Style ==================

      var sizeStyle = {};

      if (stretch) {
        // Stretch with target
        if (stretch.indexOf('height') !== -1) {
          sizeStyle.height = targetHeight;
        } else if (stretch.indexOf('minHeight') !== -1) {
          sizeStyle.minHeight = targetHeight;
        }

        if (stretch.indexOf('width') !== -1) {
          sizeStyle.width = targetWidth;
        } else if (stretch.indexOf('minWidth') !== -1) {
          sizeStyle.minWidth = targetWidth;
        }
      }

      var mergedStyle = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, sizeStyle), _this.getZIndexStyle()), style), {}, {
        opacity: status === 'stable' || !visible ? undefined : 0
      }); // ================= Motions =================


      var mergedMotion = _this.getMotion();

      var mergedMotionVisible = visible;

      if (visible && status !== 'beforeMotion' && status !== 'motion' && status !== 'stable') {
        mergedMotion.motionAppear = false;
        mergedMotion.motionEnter = false;
        mergedMotion.motionLeave = false;
      }

      if (status === 'afterAlign' || status === 'beforeMotion') {
        mergedMotionVisible = false;
      } // ================== Align ==================


      var mergedAlignDisabled = !visible || status !== 'align' && status !== 'aligned' && status !== 'stable'; // ================== Popup ==================

      var mergedPopupVisible = true;

      if (status === 'stable') {
        mergedPopupVisible = visible;
      } // Only remove popup since mask may still need animation


      if (destroyPopupOnHide && !mergedPopupVisible) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CSSMotion, Object.assign({
        visible: mergedMotionVisible
      }, mergedMotion, {
        removeOnLeave: false,
        onEnterEnd: _this.onMotionEnd,
        onLeaveEnd: _this.onMotionEnd
      }), function (_ref, motionRef) {
        var motionStyle = _ref.style,
            motionClassName = _ref.className;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_align__WEBPACK_IMPORTED_MODULE_9__["default"], {
          target: _this.getAlignTarget(),
          key: "popup",
          ref: _this.alignRef,
          monitorWindowResize: true,
          disabled: mergedAlignDisabled,
          align: align,
          onAlign: _this.onAlign
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PopupInner__WEBPACK_IMPORTED_MODULE_13__["default"], {
          prefixCls: prefixCls,
          visible: mergedPopupVisible,
          hiddenClassName: hiddenClassName,
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(mergedClassName, motionClassName),
          ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_10__["composeRef"])(motionRef, _this.popupRef),
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onMouseDown: onMouseDown,
          onTouchStart: onTouchStart,
          style: _objectSpread(_objectSpread({}, mergedStyle), motionStyle)
        }, children));
      });
    };

    _this.renderMaskElement = function () {
      var _this$props4 = _this.props,
          mask = _this$props4.mask,
          maskMotion = _this$props4.maskMotion,
          maskTransitionName = _this$props4.maskTransitionName,
          maskAnimation = _this$props4.maskAnimation,
          prefixCls = _this$props4.prefixCls,
          visible = _this$props4.visible;

      if (!mask) {
        return null;
      }

      var motion = {};

      if (maskMotion && maskMotion.motionName) {
        motion = _objectSpread({
          motionAppear: true
        }, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_14__["getMotion"])({
          motion: maskMotion,
          prefixCls: prefixCls,
          transitionName: maskTransitionName,
          animation: maskAnimation
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CSSMotion, Object.assign({}, motion, {
        visible: visible,
        removeOnLeave: true
      }), function (_ref2) {
        var className = _ref2.className;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: _this.getZIndexStyle(),
          key: "mask",
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("".concat(prefixCls, "-mask"), className)
        });
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var status = this.state.status;
      var _this$props5 = this.props,
          getRootDomNode = _this$props5.getRootDomNode,
          visible = _this$props5.visible,
          stretch = _this$props5.stretch; // If there is a pending state update, cancel it, a new one will be set if necessary

      this.cancelFrameState();

      if (visible && status !== 'stable') {
        switch (status) {
          case null:
            {
              this.setStateOnNextFrame({
                status: stretch ? 'measure' : 'align'
              });
              break;
            }

          case 'afterAlign':
            {
              this.setStateOnNextFrame({
                status: supportMotion(this.getMotion()) ? 'beforeMotion' : 'stable'
              });
              break;
            }

          case 'AfterMotion':
            {
              this.setStateOnNextFrame({
                status: 'stable'
              });
              break;
            }

          default:
            {
              // Go to next status
              var queue = ['measure', 'align', null, 'beforeMotion', 'motion'];
              var index = queue.indexOf(status);
              var nextStatus = queue[index + 1];

              if (index !== -1 && nextStatus) {
                this.setStateOnNextFrame({
                  status: nextStatus
                });
              }
            }
        }
      } // Measure stretch size


      if (status === 'measure') {
        var $ele = getRootDomNode();

        if ($ele) {
          this.setStateOnNextFrame({
            targetHeight: $ele.offsetHeight,
            targetWidth: $ele.offsetWidth
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelFrameState();
    }
  }, {
    key: "getZIndexStyle",
    value: function getZIndexStyle() {
      var zIndex = this.props.zIndex;
      return {
        zIndex: zIndex
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, this.renderMaskElement(), this.renderPopupElement());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3, _ref4) {
      var visible = _ref3.visible,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["visible"]);

      var prevVisible = _ref4.prevVisible,
          status = _ref4.status;
      var newState = {
        prevVisible: visible,
        status: status
      };
      var mergedMotion = Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_14__["getMotion"])(props);

      if (prevVisible === null && visible === false) {
        // Init render should always be stable
        newState.status = 'stable';
      } else if (visible !== prevVisible) {
        if (visible || supportMotion(mergedMotion) && ['motion', 'AfterMotion', 'stable'].includes(status)) {
          newState.status = null;
        } else {
          newState.status = 'stable';
        }

        if (visible) {
          newState.alignClassName = null;
        }
      }

      return newState;
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Popup);
/* eslint-enable */

/***/ }),

/***/ "../../node_modules/rc-trigger/es/PopupInner.js":
/*!**********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/PopupInner.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var PopupInner = function PopupInner(props, ref) {
  var prefixCls = props.prefixCls,
      className = props.className,
      visible = props.visible,
      style = props.style,
      children = props.children,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var childNode = children;

  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) > 1) {
    childNode = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, !visible && "".concat(props.hiddenClassName)),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onMouseDown,
    onTouchStart: onTouchStart,
    style: style
  }, childNode);
};

var RefPopupInner = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(PopupInner);
RefPopupInner.displayName = 'PopupInner';
/* harmony default export */ __webpack_exports__["default"] = (RefPopupInner);

/***/ }),

/***/ "../../node_modules/rc-trigger/es/context.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/context.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TriggerContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TriggerContext);

/***/ }),

/***/ "../../node_modules/rc-trigger/es/index.js":
/*!*****************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: generateTrigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrigger", function() { return generateTrigger; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "../../node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "../../node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/ref */ "../../node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/Portal */ "../../node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_alignUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/alignUtil */ "../../node_modules/rc-trigger/es/utils/alignUtil.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Popup */ "../../node_modules/rc-trigger/es/Popup.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./context */ "../../node_modules/rc-trigger/es/context.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Trigger, _React$Component);

    var _super = _createSuper(Trigger);

    function Trigger(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
      _this.triggerRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && _this.popupRef.current && _this.popupRef.current.popupRef.current && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.popupRef.current.popupRef.current, e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_9__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_9__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_15__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.getContainer = function () {
        var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
            props = _assertThisInitialize.props;

        var popupContainer = document.createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        var mountNode = props.getPopupContainer ? props.getPopupContainer(_this.getRootDomNode()) : props.getDocument().body;
        mountNode.appendChild(popupContainer);
        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument();
            this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument();
            this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument();
            this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        // for test
        if (this.popupRef.current && this.popupRef.current.popupRef.current) {
          return this.popupRef.current.popupRef.current;
        }

        return null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_15__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props3 = this.props,
            action = _this$props3.action,
            showAction = _this$props3.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            hideAction = _this$props5.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            showAction = _this$props6.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            hideAction = _this$props7.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            showAction = _this$props8.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            hideAction = _this$props9.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible && this.popupRef.current && this.popupRef.current.alignRef.current) {
          this.popupRef.current.alignRef.current.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props10 = this.props,
            children = _this$props10.children,
            forceRender = _this$props10.forceRender,
            alignPoint = _this$props10.alignPoint,
            className = _this$props10.className,
            autoDestroy = _this$props10.autoDestroy;
        var child = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        };

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        }

        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        }

        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter;

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        }

        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        }

        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        }

        var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_14___default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = _objectSpread({}, newChildProps);

        if (Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_11__["supportRef"])(child)) {
          cloneProps.ref = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_11__["composeRef"])(this.triggerRef, child.ref);
        }

        var trigger = react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_17__["default"].Provider, {
          value: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

  Trigger.contextType = _context__WEBPACK_IMPORTED_MODULE_17__["default"];
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
/* harmony default export */ __webpack_exports__["default"] = (generateTrigger(rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_13__["default"]));

/***/ }),

/***/ "../../node_modules/rc-trigger/es/utils/alignUtil.js":
/*!***************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/utils/alignUtil.js ***!
  \***************************************************************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread(_objectSpread({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

/***/ }),

/***/ "../../node_modules/rc-trigger/es/utils/legacyUtil.js":
/*!****************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-trigger/es/utils/legacyUtil.js ***!
  \****************************************************************************************/
/*! exports provided: getMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotion", function() { return getMotion; });
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

/***/ }),

/***/ "../../node_modules/rc-util/es/Dom/addEventListener.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerWrap; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/***/ }),

/***/ "../../node_modules/rc-util/es/Dom/contains.js":
/*!*********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-util/es/Dom/contains.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ "../../node_modules/rc-util/lib/Children/toArray.js":
/*!**************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/rc-util/lib/Children/toArray.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArray(children) {
  var ret = [];

  _react.default.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });

  return ret;
}

/***/ }),

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "../../node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/hooks/useOnClickOutside */ "./library/hooks/useOnClickOutside.js");
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\ProfileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ProfileMenu = ({
  avatar
}) => {
  _s();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        logOut = _useContext.logOut;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        state = _useState[0],
        setState = _useState[1];

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, () => setState(false));
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, avatar), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "dropdown-menu ".concat(state ? 'active' : 'hide'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "View Profile")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Add Hotel")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Log Out"))));
};

_s(ProfileMenu, "t4Dvi0A244Vd06FFO1Zz9rJI0W0=", false, function () {
  return [library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = ProfileMenu;
/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

var _c;

$RefreshReg$(_c, "ProfileMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./library/helpers/activeLink.js":
/*!***************************************!*\
  !*** ./library/helpers/activeLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\library\\helpers\\activeLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ActiveLink = ({
  className,
  children,
  router,
  href
}) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

_c = ActiveLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

var _c, _c2;

$RefreshReg$(_c, "ActiveLink");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./library/hooks/useOnClickOutside.js":
/*!********************************************!*\
  !*** ./library/hooks/useOnClickOutside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useOnClickOutside(ref, handler) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vY29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2VzbS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvaG9va3MvdXNlQnVmZmVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9DU1NNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy91dGlsL21vdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL0RPTVdyYXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9EaXZpZGVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL01lbnVJdGVtLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudUl0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvdXRpbHMvaXNNb2JpbGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlscy9sZWdhY3lVdGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9saWIvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXBJbm5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2FsaWduVXRpbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MYXlvdXQvSGVhZGVyL1Byb2ZpbGVNZW51LmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaG9va3MvdXNlT25DbGlja091dHNpZGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZU1lbnUiLCJhdmF0YXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJsb2dPdXQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVEcm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJkcm9wZG93blJlZiIsInVzZVJlZiIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiQUdFTlRfUFJPRklMRV9QQUdFIiwiQUREX0hPVEVMX1BBR0UiLCJBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UiLCJBY3RpdmVMaW5rIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwid2l0aFJvdXRlciIsInJlZiIsImhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVt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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsK0VBQXFCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LG1CQUFULENBQTZCLFlBQTdCLEVBQTJDUCxRQUEzQztBQUNELEtBSEQ7QUFJRCxHQWZRLEVBZU4sQ0FBQ0gsR0FBRCxFQUFNQyxPQUFOLENBZk0sQ0FBVDtBQWdCRDs7R0FqQlFmLGlCOztBQW1CTUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlByZXNldENvbG9yVHlwZXMgPSBleHBvcnRzLlByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSB2b2lkIDA7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuL3R5cGVcIik7XG5cbnZhciBQcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgnc3VjY2VzcycsICdwcm9jZXNzaW5nJywgJ2Vycm9yJywgJ2RlZmF1bHQnLCAnd2FybmluZycpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuXG5leHBvcnRzLlByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSBQcmVzZXRTdGF0dXNDb2xvclR5cGVzO1xudmFyIFByZXNldENvbG9yVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdwaW5rJywgJ3JlZCcsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ2N5YW4nLCAnZ3JlZW4nLCAnYmx1ZScsICdwdXJwbGUnLCAnZ2Vla2JsdWUnLCAnbWFnZW50YScsICd2b2xjYW5vJywgJ2dvbGQnLCAnbGltZScpO1xuZXhwb3J0cy5QcmVzZXRDb2xvclR5cGVzID0gUHJlc2V0Q29sb3JUeXBlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vLyA9PT09PT09PT09PT09PT09PT0gQ29sbGFwc2UgTW90aW9uID09PT09PT09PT09PT09PT09PVxudmFyIGdldENvbGxhcHNlZEhlaWdodCA9IGZ1bmN0aW9uIGdldENvbGxhcHNlZEhlaWdodCgpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgb3BhY2l0eTogMFxuICB9O1xufTtcblxudmFyIGdldFJlYWxIZWlnaHQgPSBmdW5jdGlvbiBnZXRSZWFsSGVpZ2h0KG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IG5vZGUuc2Nyb2xsSGVpZ2h0LFxuICAgIG9wYWNpdHk6IDFcbiAgfTtcbn07XG5cbnZhciBnZXRDdXJyZW50SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudEhlaWdodChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBub2RlLm9mZnNldEhlaWdodFxuICB9O1xufTtcblxudmFyIGNvbGxhcHNlTW90aW9uID0ge1xuICBtb3Rpb25OYW1lOiAnYW50LW1vdGlvbi1jb2xsYXBzZScsXG4gIG9uQXBwZWFyU3RhcnQ6IGdldENvbGxhcHNlZEhlaWdodCxcbiAgb25FbnRlclN0YXJ0OiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gIG9uQXBwZWFyQWN0aXZlOiBnZXRSZWFsSGVpZ2h0LFxuICBvbkVudGVyQWN0aXZlOiBnZXRSZWFsSGVpZ2h0LFxuICBvbkxlYXZlU3RhcnQ6IGdldEN1cnJlbnRIZWlnaHQsXG4gIG9uTGVhdmVBY3RpdmU6IGdldENvbGxhcHNlZEhlaWdodCxcbiAgbW90aW9uRGVhZGxpbmU6IDUwMFxufTtcbnZhciBfZGVmYXVsdCA9IGNvbGxhcHNlTW90aW9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTWVudUNvbnRleHQgPSAoMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHtcbiAgaW5saW5lQ29sbGFwc2VkOiBmYWxzZVxufSk7XG52YXIgX2RlZmF1bHQgPSBNZW51Q29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01lbnUgPSByZXF1aXJlKFwicmMtbWVudVwiKTtcblxudmFyIF90b0FycmF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBfdG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2x0aXBcIikpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIE1lbnVJdGVtID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIE1lbnVJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1lbnVJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudUl0ZW0pO1xuXG4gICAgZnVuY3Rpb24gTWVudUl0ZW0oKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLm1lbnVJdGVtLm9uS2V5RG93bihlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVNZW51SXRlbSA9IGZ1bmN0aW9uIChtZW51SXRlbSkge1xuICAgICAgICBfdGhpcy5tZW51SXRlbSA9IG1lbnVJdGVtO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVuZGVySXRlbSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBzaWRlckNvbGxhcHNlZCA9IF9yZWYuc2lkZXJDb2xsYXBzZWQ7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucm9vdFByZWZpeENscztcblxuICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHRpdGxlID0gX2EudGl0bGUsXG4gICAgICAgICAgICBpY29uID0gX2EuaWNvbixcbiAgICAgICAgICAgIGRhbmdlciA9IF9hLmRhbmdlcixcbiAgICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInRpdGxlXCIsIFwiaWNvblwiLCBcImRhbmdlclwiXSk7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgIHZhciBpbmxpbmVDb2xsYXBzZWQgPSBfcmVmMi5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IF9yZWYyLmRpcmVjdGlvbjtcbiAgICAgICAgICB2YXIgdG9vbHRpcFRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gbGV2ZWwgPT09IDEgPyBjaGlsZHJlbiA6ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0b29sdGlwVGl0bGUgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG9vbHRpcFByb3BzID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRvb2x0aXBUaXRsZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoIXNpZGVyQ29sbGFwc2VkICYmICFpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRvb2x0aXBQcm9wcy50aXRsZSA9IG51bGw7IC8vIFJlc2V0IGB2aXNpYmxlYCB0byBmaXggY29udHJvbCBtb2RlIHRvb2x0aXAgZGlzcGxheSBub3QgY29ycmVjdFxuICAgICAgICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNjc0MlxuXG4gICAgICAgICAgICB0b29sdGlwUHJvcHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9ICgwLCBfdG9BcnJheVtcImRlZmF1bHRcIl0pKGNoaWxkcmVuKS5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF90b29sdGlwW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHRvb2x0aXBQcm9wcywge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBkaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtdG9vbHRpcFwiKVxuICAgICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51Lkl0ZW0sIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1kYW5nZXJcIiksIGRhbmdlciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1vbmx5LWNoaWxkXCIpLCAoaWNvbiA/IGNoaWxkcmVuTGVuZ3RoICsgMSA6IGNoaWxkcmVuTGVuZ3RoKSA9PT0gMSksIF9jbGFzc05hbWVzKSksXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICByZWY6IF90aGlzLnNhdmVNZW51SXRlbVxuICAgICAgICAgIH0pLCBpY29uLCBfdGhpcy5yZW5kZXJJdGVtQ2hpbGRyZW4oaW5saW5lQ29sbGFwc2VkKSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVudUl0ZW0sIFt7XG4gICAgICBrZXk6IFwicmVuZGVySXRlbUNoaWxkcmVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbUNoaWxkcmVuKGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGljb24gPSBfdGhpcyRwcm9wczIuaWNvbixcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczIubGV2ZWwsXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnJvb3RQcmVmaXhDbHM7IC8vIGlubGluZS1jb2xsYXBzZWQubWQgZGVtbyDkvp3otZYgc3BhbiDmnaXpmpDol4/mloflrZcs5pyJIGljb24g5bGe5oCn77yM5YiZ5YaF6YOo5YyF6KO55LiA5LiqIHNwYW5cbiAgICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMjM0NTZcblxuICAgICAgICBpZiAoIWljb24gfHwgKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGNoaWxkcmVuKSAmJiBjaGlsZHJlbi50eXBlID09PSAnc3BhbicpIHtcbiAgICAgICAgICBpZiAoY2hpbGRyZW4gJiYgaW5saW5lQ29sbGFwc2VkICYmIGxldmVsID09PSAxICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZC1ub2ljb25cIilcbiAgICAgICAgICAgIH0sIGNoaWxkcmVuLmNoYXJBdCgwKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaWRlci5TaWRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVySXRlbSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7XG4gIHJldHVybiBNZW51SXRlbTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gTWVudUl0ZW07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNNZW51ID0gcmVxdWlyZShcInJjLW1lbnVcIik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9NZW51Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbnRleHRcIikpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBTdWJNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIFN1Yk1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3ViTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN1Yk1lbnUpO1xuXG4gICAgZnVuY3Rpb24gU3ViTWVudSgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1Yk1lbnUpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5zdWJNZW51Lm9uS2V5RG93bihlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVTdWJNZW51ID0gZnVuY3Rpb24gKHN1Yk1lbnUpIHtcbiAgICAgICAgX3RoaXMuc3ViTWVudSA9IHN1Yk1lbnU7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN1Yk1lbnUsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyVGl0bGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUaXRsZShpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGljb24gPSBfdGhpcyRwcm9wcy5pY29uLFxuICAgICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wcy50aXRsZSxcbiAgICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucm9vdFByZWZpeENscztcblxuICAgICAgICBpZiAoIWljb24pIHtcbiAgICAgICAgICByZXR1cm4gaW5saW5lQ29sbGFwc2VkICYmIGxldmVsID09PSAxICYmIHRpdGxlICYmIHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtbm9pY29uXCIpXG4gICAgICAgICAgfSwgdGl0bGUuY2hhckF0KDApKSA6IHRpdGxlO1xuICAgICAgICB9IC8vIGlubGluZS1jb2xsYXBzZWQubWQgZGVtbyDkvp3otZYgc3BhbiDmnaXpmpDol4/mloflrZcs5pyJIGljb24g5bGe5oCn77yM5YiZ5YaF6YOo5YyF6KO55LiA5LiqIHNwYW5cbiAgICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMjM0NTZcblxuXG4gICAgICAgIHZhciB0aXRsZUlzU3BhbiA9ICgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KSh0aXRsZSkgJiYgdGl0bGUudHlwZSA9PT0gJ3NwYW4nO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGljb24sIHRpdGxlSXNTcGFuID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgdGl0bGUpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucm9vdFByZWZpeENscyxcbiAgICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwQ2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gX3JlZi5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICAgIGFudGRNZW51VGhlbWUgPSBfcmVmLmFudGRNZW51VGhlbWU7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnUuU3ViTWVudSwgX2V4dGVuZHMoe30sICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKF90aGlzMi5wcm9wcywgWydpY29uJ10pLCB7XG4gICAgICAgICAgICB0aXRsZTogX3RoaXMyLnJlbmRlclRpdGxlKGlubGluZUNvbGxhcHNlZCksXG4gICAgICAgICAgICByZWY6IF90aGlzMi5zYXZlU3ViTWVudSxcbiAgICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShyb290UHJlZml4Q2xzLCBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFudGRNZW51VGhlbWUpLCBwb3B1cENsYXNzTmFtZSlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdWJNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgU3ViTWVudS5jb250ZXh0VHlwZSA9IF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl07IC8vIGZpeCBpc3N1ZTpodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy84NjY2XG5cbiAgU3ViTWVudS5pc1N1Yk1lbnUgPSAxO1xuICByZXR1cm4gU3ViTWVudTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gU3ViTWVudTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01lbnUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtbWVudVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9TdWJNZW51ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TdWJNZW51XCIpKTtcblxudmFyIF9NZW51SXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUl0ZW1cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfU2lkZXIgPSByZXF1aXJlKFwiLi4vbGF5b3V0L1NpZGVyXCIpO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3JhZlwiKSk7XG5cbnZhciBfbW90aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvbW90aW9uXCIpKTtcblxudmFyIF9NZW51Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbnRleHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgSW50ZXJuYWxNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIEludGVybmFsTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhJbnRlcm5hbE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJbnRlcm5hbE1lbnUpO1xuXG4gICAgZnVuY3Rpb24gSW50ZXJuYWxNZW51KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnRlcm5hbE1lbnUpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTsgLy8gUmVzdG9yZSB2ZXJ0aWNhbCBtb2RlIHdoZW4gbWVudSBpcyBjb2xsYXBzZWQgcmVzcG9uc2l2ZWx5IHdoZW4gbW91bnRlZFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTMxMDRcbiAgICAgIC8vIFRPRE86IG5vdCBhIHBlcmZlY3Qgc29sdXRpb24sIGxvb2tpbmcgYSBuZXcgd2F5IHRvIGF2b2lkIHNldHRpbmcgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgaW4gdGhpcyBzaXR1YXRpb25cblxuICAgICAgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lKCk7XG5cbiAgICAgICAgdmFyIG9uTW91c2VFbnRlciA9IF90aGlzLnByb3BzLm9uTW91c2VFbnRlcjtcblxuICAgICAgICBpZiAob25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgb25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gd2hlbiBpbmxpbmVDb2xsYXBzZWQgbWVudSB3aWR0aCBhbmltYXRpb24gZmluaXNoZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTI4NjRcbiAgICAgICAgdmFyIHdpZHRoQ29sbGFwc2VkID0gZS5wcm9wZXJ0eU5hbWUgPT09ICd3aWR0aCcgJiYgZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldDsgLy8gRml4IFNWR0VsZW1lbnQgZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YgaXMgbm90IGEgZnVuY3Rpb25cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTU2OTlcblxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lOyAvLyBTVkdBbmltYXRlZFN0cmluZy5hbmltVmFsIHNob3VsZCBiZSBpZGVudGljYWwgdG8gU1ZHQW5pbWF0ZWRTdHJpbmcuYmFzZVZhbCwgdW5sZXNzIGR1cmluZyBhbiBhbmltYXRpb24uXG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZVZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNsYXNzTmFtZSkgPT09ICdbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXScgPyBjbGFzc05hbWUuYW5pbVZhbCA6IGNsYXNzTmFtZTsgLy8gRml4IGZvciA8TWVudSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+LCB0aGUgd2lkdGggdHJhbnNpdGlvbiB3b24ndCB0cmlnZ2VyIHdoZW4gbWVudSBpcyBjb2xsYXBzZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1wcm8vaXNzdWVzLzI3ODNcblxuICAgICAgICB2YXIgaWNvblNjYWxlZCA9IGUucHJvcGVydHlOYW1lID09PSAnZm9udC1zaXplJyAmJiBjbGFzc05hbWVWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPj0gMDtcblxuICAgICAgICBpZiAod2lkdGhDb2xsYXBzZWQgfHwgaWNvblNjYWxlZCkge1xuICAgICAgICAgIF90aGlzLnJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlT3BlbkNoYW5nZShbXSk7XG5cbiAgICAgICAgdmFyIG9uQ2xpY2sgPSBfdGhpcy5wcm9wcy5vbkNsaWNrO1xuXG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuS2V5cykge1xuICAgICAgICBfdGhpcy5zZXRPcGVuS2V5cyhvcGVuS2V5cyk7XG5cbiAgICAgICAgdmFyIG9uT3BlbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uT3BlbkNoYW5nZTtcblxuICAgICAgICBpZiAob25PcGVuQ2hhbmdlKSB7XG4gICAgICAgICAgb25PcGVuQ2hhbmdlKG9wZW5LZXlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVuZGVyTWVudSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBnZXRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWUsXG4gICAgICAgICAgICBjb2xsYXBzZWRXaWR0aCA9IF90aGlzJHByb3BzLmNvbGxhcHNlZFdpZHRoO1xuICAgICAgICB2YXIgb3BlbktleXMgPSBfdGhpcy5zdGF0ZS5vcGVuS2V5cztcbiAgICAgICAgdmFyIHBhc3NQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKF90aGlzLnByb3BzLCBbJ2NvbGxhcHNlZFdpZHRoJywgJ3NpZGVyQ29sbGFwc2VkJ10pO1xuXG4gICAgICAgIHZhciBtZW51TW9kZSA9IF90aGlzLmdldFJlYWxNZW51TW9kZSgpO1xuXG4gICAgICAgIHZhciBtZW51T3Blbk1vdGlvbiA9IF90aGlzLmdldE9wZW5Nb3Rpb25Qcm9wcyhtZW51TW9kZSk7XG5cbiAgICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbWVudScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgIHZhciBtZW51Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodGhlbWUpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZFwiKSwgX3RoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkpKTtcblxuICAgICAgICB2YXIgbWVudVByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIG9wZW5LZXlzOiBvcGVuS2V5cyxcbiAgICAgICAgICBvbk9wZW5DaGFuZ2U6IF90aGlzLmhhbmRsZU9wZW5DaGFuZ2UsXG4gICAgICAgICAgY2xhc3NOYW1lOiBtZW51Q2xhc3NOYW1lLFxuICAgICAgICAgIG1vZGU6IG1lbnVNb2RlXG4gICAgICAgIH0sIG1lbnVPcGVuTW90aW9uKTtcblxuICAgICAgICBpZiAobWVudU1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgLy8gY2xvc2luZyB2ZXJ0aWNhbCBwb3B1cCBzdWJtZW51IGFmdGVyIGNsaWNrIGl0XG4gICAgICAgICAgbWVudVByb3BzLm9uQ2xpY2sgPSBfdGhpcy5oYW5kbGVDbGljaztcbiAgICAgICAgfSAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy84NTg3XG5cblxuICAgICAgICB2YXIgaGlkZU1lbnUgPSBfdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKSAmJiAoY29sbGFwc2VkV2lkdGggPT09IDAgfHwgY29sbGFwc2VkV2lkdGggPT09ICcwJyB8fCBjb2xsYXBzZWRXaWR0aCA9PT0gJzBweCcpO1xuXG4gICAgICAgIGlmIChoaWRlTWVudSkge1xuICAgICAgICAgIG1lbnVQcm9wcy5vcGVuS2V5cyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgaW5saW5lQ29sbGFwc2VkOiBfdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIGFudGRNZW51VGhlbWU6IHRoZW1lLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnVbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gICAgICAgIH0sIHBhc3NQcm9wcywgbWVudVByb3BzLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogX3RoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9KSkpO1xuICAgICAgfTtcblxuICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnaW5saW5lQ29sbGFwc2VkJyBpbiBwcm9wcyAmJiBwcm9wcy5tb2RlICE9PSAnaW5saW5lJyksICdNZW51JywgJ2BpbmxpbmVDb2xsYXBzZWRgIHNob3VsZCBvbmx5IGJlIHVzZWQgd2hlbiBgbW9kZWAgaXMgaW5saW5lLicpO1xuICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoIShwcm9wcy5zaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkICYmICdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgbm90IGNvbnRyb2wgTWVudSB1bmRlciBTaWRlci4gU2hvdWxkIHNldCBgY29sbGFwc2VkYCBvbiBTaWRlciBpbnN0ZWFkLicpO1xuICAgICAgdmFyIG9wZW5LZXlzO1xuXG4gICAgICBpZiAoJ29wZW5LZXlzJyBpbiBwcm9wcykge1xuICAgICAgICBvcGVuS2V5cyA9IHByb3BzLm9wZW5LZXlzO1xuICAgICAgfSBlbHNlIGlmICgnZGVmYXVsdE9wZW5LZXlzJyBpbiBwcm9wcykge1xuICAgICAgICBvcGVuS2V5cyA9IHByb3BzLmRlZmF1bHRPcGVuS2V5cztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIG9wZW5LZXlzOiBvcGVuS2V5cyB8fCBbXSxcbiAgICAgICAgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU6IGZhbHNlLFxuICAgICAgICBpbmxpbmVPcGVuS2V5czogW10sXG4gICAgICAgIHByZXZQcm9wczogcHJvcHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEludGVybmFsTWVudSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwodGhpcy5tb3VudFJhZklkKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHNpZGVyQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMyLnNpZGVyQ29sbGFwc2VkLFxuICAgICAgICAgICAgaW5saW5lQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMyLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICAgIG9uT3BlbkNoYW5nZSA9IF90aGlzJHByb3BzMi5vbk9wZW5DaGFuZ2U7XG5cbiAgICAgICAgaWYgKCFwcmV2UHJvcHMuaW5saW5lQ29sbGFwc2VkICYmIGlubGluZUNvbGxhcHNlZCB8fCAhcHJldlByb3BzLnNpZGVyQ29sbGFwc2VkICYmIHNpZGVyQ29sbGFwc2VkKSB7XG4gICAgICAgICAgb25PcGVuQ2hhbmdlID09PSBudWxsIHx8IG9uT3BlbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25PcGVuQ2hhbmdlKFtdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRPcGVuS2V5c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wZW5LZXlzKG9wZW5LZXlzKSB7XG4gICAgICAgIGlmICghKCdvcGVuS2V5cycgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW5LZXlzOiBvcGVuS2V5c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFJlYWxNZW51TW9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlYWxNZW51TW9kZSgpIHtcbiAgICAgICAgdmFyIG1vZGUgPSB0aGlzLnByb3BzLm1vZGU7XG4gICAgICAgIHZhciBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRoaXMuc3RhdGUuc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU7XG4gICAgICAgIHZhciBpbmxpbmVDb2xsYXBzZWQgPSB0aGlzLmdldElubGluZUNvbGxhcHNlZCgpO1xuXG4gICAgICAgIGlmIChzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSAmJiBpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5saW5lQ29sbGFwc2VkID8gJ3ZlcnRpY2FsJyA6IG1vZGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldElubGluZUNvbGxhcHNlZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldElubGluZUNvbGxhcHNlZCgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQgPSBfdGhpcyRwcm9wczMuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgICAgc2lkZXJDb2xsYXBzZWQgPSBfdGhpcyRwcm9wczMuc2lkZXJDb2xsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHNpZGVyQ29sbGFwc2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2lkZXJDb2xsYXBzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5saW5lQ29sbGFwc2VkO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRPcGVuTW90aW9uUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcGVuTW90aW9uUHJvcHMobWVudU1vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBvcGVuVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczQub3BlblRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgb3BlbkFuaW1hdGlvbiA9IF90aGlzJHByb3BzNC5vcGVuQW5pbWF0aW9uLFxuICAgICAgICAgICAgbW90aW9uID0gX3RoaXMkcHJvcHM0Lm1vdGlvbjtcbiAgICAgICAgdmFyIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdGhpcy5zdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZTsgLy8gUHJvdmlkZXMgYnkgdXNlclxuXG4gICAgICAgIGlmIChtb3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW90aW9uOiBtb3Rpb25cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSh0eXBlb2Ygb3BlbkFuaW1hdGlvbiA9PT0gJ3N0cmluZycsICdNZW51JywgJ2BvcGVuQW5pbWF0aW9uYCBkbyBub3Qgc3VwcG9ydCBvYmplY3QuIFBsZWFzZSB1c2UgYG1vdGlvbmAgaW5zdGVhZC4nKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BlbkFuaW1hdGlvbjogb3BlbkFuaW1hdGlvblxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlblRyYW5zaXRpb25OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogb3BlblRyYW5zaXRpb25OYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgfSAvLyBEZWZhdWx0IGxvZ2ljXG5cblxuICAgICAgICBpZiAobWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3Rpb246IHtcbiAgICAgICAgICAgICAgbW90aW9uTmFtZTogJ3NsaWRlLXVwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVudU1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdGlvbjogX21vdGlvbltcImRlZmF1bHRcIl1cbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIFdoZW4gbW9kZSBzd2l0Y2ggZnJvbSBpbmxpbmVcbiAgICAgICAgLy8gc3VibWVudSBzaG91bGQgaGlkZSB3aXRob3V0IGFuaW1hdGlvblxuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb3Rpb246IHtcbiAgICAgICAgICAgIG1vdGlvbk5hbWU6IHN3aXRjaGluZ01vZGVGcm9tSW5saW5lID8gJycgOiAnem9vbS1iaWcnXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXN0b3JlTW9kZVZlcnRpY2FsRnJvbUlubGluZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lKCkge1xuICAgICAgICB2YXIgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPSB0aGlzLnN0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lO1xuXG4gICAgICAgIGlmIChzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlck1lbnUpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICB2YXIgcHJldlByb3BzID0gcHJldlN0YXRlLnByZXZQcm9wcztcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgIHByZXZQcm9wczogbmV4dFByb3BzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByZXZQcm9wcy5tb2RlID09PSAnaW5saW5lJyAmJiBuZXh0UHJvcHMubW9kZSAhPT0gJ2lubGluZScpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ29wZW5LZXlzJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5vcGVuS2V5cyA9IG5leHRQcm9wcy5vcGVuS2V5cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBbTGVnYWN5XSBPbGQgY29kZSB3aWxsIHJldHVybiBhZnRlciBgb3BlbktleXNgIGNoYW5nZWQuXG4gICAgICAgICAgLy8gTm90IHN1cmUgdGhlIHJlYXNvbiwgd2Ugc2hvdWxkIGtlZXAgdGhpcyBsb2dpYyBzdGlsbC5cbiAgICAgICAgICBpZiAobmV4dFByb3BzLmlubGluZUNvbGxhcHNlZCAmJiAhcHJldlByb3BzLmlubGluZUNvbGxhcHNlZCB8fCBuZXh0UHJvcHMuc2lkZXJDb2xsYXBzZWQgJiYgIXByZXZQcm9wcy5zaWRlckNvbGxhcHNlZCkge1xuICAgICAgICAgICAgbmV3U3RhdGUuc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV3U3RhdGUuaW5saW5lT3BlbktleXMgPSBwcmV2U3RhdGUub3BlbktleXM7XG4gICAgICAgICAgICBuZXdTdGF0ZS5vcGVuS2V5cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbmV4dFByb3BzLmlubGluZUNvbGxhcHNlZCAmJiBwcmV2UHJvcHMuaW5saW5lQ29sbGFwc2VkIHx8ICFuZXh0UHJvcHMuc2lkZXJDb2xsYXBzZWQgJiYgcHJldlByb3BzLnNpZGVyQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5vcGVuS2V5cyA9IHByZXZTdGF0ZS5pbmxpbmVPcGVuS2V5cztcbiAgICAgICAgICAgIG5ld1N0YXRlLmlubGluZU9wZW5LZXlzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbnRlcm5hbE1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBJbnRlcm5hbE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdGhlbWU6ICdsaWdodCcsXG4gICAgZm9jdXNhYmxlOiBmYWxzZVxuICB9O1xuICByZXR1cm4gSW50ZXJuYWxNZW51O1xufSgpOyAvLyBXZSBzaG91bGQga2VlcCB0aGlzIGFzIHJlZi1hYmxlXG5cblxudmFyIE1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHMoTWVudSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gICAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoTWVudSk7XG5cbiAgICBmdW5jdGlvbiBNZW51KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnUpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZW51LCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaWRlci5TaWRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEludGVybmFsTWVudSwgX2V4dGVuZHMoe30sIF90aGlzMi5wcm9wcywgY29udGV4dCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIE1lbnUuRGl2aWRlciA9IF9yY01lbnUuRGl2aWRlcjtcbiAgTWVudS5JdGVtID0gX01lbnVJdGVtW1wiZGVmYXVsdFwiXTtcbiAgTWVudS5TdWJNZW51ID0gX1N1Yk1lbnVbXCJkZWZhdWx0XCJdO1xuICBNZW51Lkl0ZW1Hcm91cCA9IF9yY01lbnUuSXRlbUdyb3VwO1xuICByZXR1cm4gTWVudTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gTWVudTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjVG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXRvb2x0aXBcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9wbGFjZW1lbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wbGFjZW1lbnRzXCIpKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiLi4vX3V0aWwvY29sb3JzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHNwbGl0T2JqZWN0ID0gZnVuY3Rpb24gc3BsaXRPYmplY3Qob2JqLCBrZXlzKSB7XG4gIHZhciBwaWNrZWQgPSB7fTtcblxuICB2YXIgb21pdHRlZCA9IF9leHRlbmRzKHt9LCBvYmopO1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKG9iaiAmJiBrZXkgaW4gb2JqKSB7XG4gICAgICBwaWNrZWRba2V5XSA9IG9ialtrZXldO1xuICAgICAgZGVsZXRlIG9taXR0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBpY2tlZDogcGlja2VkLFxuICAgIG9taXR0ZWQ6IG9taXR0ZWRcbiAgfTtcbn07XG5cbnZhciBQcmVzZXRDb2xvclJlZ2V4ID0gbmV3IFJlZ0V4cChcIl4oXCIuY29uY2F0KF9jb2xvcnMuUHJlc2V0Q29sb3JUeXBlcy5qb2luKCd8JyksIFwiKSgtaW52ZXJzZSk/JFwiKSk7IC8vIEZpeCBUb29sdGlwIHdvbid0IGhpZGUgYXQgZGlzYWJsZWQgYnV0dG9uXG4vLyBtb3VzZSBldmVudHMgZG9uJ3QgdHJpZ2dlciBhdCBkaXNhYmxlZCBidXR0b24gaW4gQ2hyb21lXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3Rvb2x0aXAvaXNzdWVzLzE4XG5cbmZ1bmN0aW9uIGdldERpc2FibGVkQ29tcGF0aWJsZUNoaWxkcmVuKGVsZW1lbnQsIHByZWZpeENscykge1xuICB2YXIgZWxlbWVudFR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgaWYgKChlbGVtZW50VHlwZS5fX0FOVF9CVVRUT04gPT09IHRydWUgfHwgZWxlbWVudFR5cGUuX19BTlRfU1dJVENIID09PSB0cnVlIHx8IGVsZW1lbnRUeXBlLl9fQU5UX0NIRUNLQk9YID09PSB0cnVlIHx8IGVsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicpICYmIGVsZW1lbnQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAvLyBQaWNrIHNvbWUgbGF5b3V0IHJlbGF0ZWQgc3R5bGUgcHJvcGVydGllcyB1cCB0byBzcGFuXG4gICAgLy8gUHJldmVudCBsYXlvdXQgYnVncyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzUyNTRcbiAgICB2YXIgX3NwbGl0T2JqZWN0ID0gc3BsaXRPYmplY3QoZWxlbWVudC5wcm9wcy5zdHlsZSwgWydwb3NpdGlvbicsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nLCAnZmxvYXQnLCAnZGlzcGxheScsICd6SW5kZXgnXSksXG4gICAgICAgIHBpY2tlZCA9IF9zcGxpdE9iamVjdC5waWNrZWQsXG4gICAgICAgIG9taXR0ZWQgPSBfc3BsaXRPYmplY3Qub21pdHRlZDtcblxuICAgIHZhciBzcGFuU3R5bGUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sIHBpY2tlZCksIHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIHdpZHRoOiBlbGVtZW50LnByb3BzLmJsb2NrID8gJzEwMCUnIDogbnVsbFxuICAgIH0pO1xuXG4gICAgdmFyIGJ1dHRvblN0eWxlID0gX2V4dGVuZHMoX2V4dGVuZHMoe30sIG9taXR0ZWQpLCB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9KTtcblxuICAgIHZhciBjaGlsZCA9ICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgICAgc3R5bGU6IGJ1dHRvblN0eWxlLFxuICAgICAgY2xhc3NOYW1lOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBzdHlsZTogc3BhblN0eWxlLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShlbGVtZW50LnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZC1jb21wYXRpYmxlLXdyYXBwZXJcIikpXG4gICAgfSwgY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbnZhciBUb29sdGlwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzMjtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSghIXByb3BzLnZpc2libGUgfHwgISFwcm9wcy5kZWZhdWx0VmlzaWJsZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHZpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ3Zpc2libGUnIGluIHByb3BzKSB7XG4gICAgICBzZXRWaXNpYmxlKHByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnZpc2libGVdKTtcblxuICB2YXIgaXNOb1RpdGxlID0gZnVuY3Rpb24gaXNOb1RpdGxlKCkge1xuICAgIHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheTtcbiAgICByZXR1cm4gIXRpdGxlICYmICFvdmVybGF5ICYmIHRpdGxlICE9PSAwOyAvLyBvdmVybGF5IGZvciBvbGQgdmVyc2lvbiBjb21wYXRpYmlsaXR5XG4gIH07XG5cbiAgdmFyIG9uVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIG9uVmlzaWJsZUNoYW5nZSh2aXMpIHtcbiAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpKSB7XG4gICAgICBzZXRWaXNpYmxlKGlzTm9UaXRsZSgpID8gZmFsc2UgOiB2aXMpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vblZpc2libGVDaGFuZ2UgJiYgIWlzTm9UaXRsZSgpKSB7XG4gICAgICBwcm9wcy5vblZpc2libGVDaGFuZ2UodmlzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFRvb2x0aXBQbGFjZW1lbnRzID0gZnVuY3Rpb24gZ2V0VG9vbHRpcFBsYWNlbWVudHMoKSB7XG4gICAgdmFyIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIGFycm93UG9pbnRBdENlbnRlciA9IHByb3BzLmFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gcHJvcHMuYXV0b0FkanVzdE92ZXJmbG93O1xuICAgIHJldHVybiBidWlsdGluUGxhY2VtZW50cyB8fCAoMCwgX3BsYWNlbWVudHNbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBhcnJvd1BvaW50QXRDZW50ZXI6IGFycm93UG9pbnRBdENlbnRlcixcbiAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93XG4gICAgfSk7XG4gIH07IC8vIOWKqOaAgeiuvue9ruWKqOeUu+eCuVxuXG5cbiAgdmFyIG9uUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIG9uUG9wdXBBbGlnbihkb21Ob2RlLCBhbGlnbikge1xuICAgIHZhciBwbGFjZW1lbnRzID0gZ2V0VG9vbHRpcFBsYWNlbWVudHMoKTsgLy8g5b2T5YmN6L+U5Zue55qE5L2N572uXG5cbiAgICB2YXIgcGxhY2VtZW50ID0gT2JqZWN0LmtleXMocGxhY2VtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzBdID09PSBhbGlnbi5wb2ludHNbMF0gJiYgcGxhY2VtZW50c1trZXldLnBvaW50c1sxXSA9PT0gYWxpZ24ucG9pbnRzWzFdO1xuICAgIH0pWzBdO1xuXG4gICAgaWYgKCFwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIOagueaNruW9k+WJjeWdkOagh+iuvue9ruWKqOeUu+eCuVxuXG5cbiAgICB2YXIgcmVjdCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJ1xuICAgIH07XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0JvdHRvbScpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdChyZWN0LmhlaWdodCAtIGFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdUb3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2xlZnQnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdSaWdodCcpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQocmVjdC53aWR0aCAtIGFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdyaWdodCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0xlZnQnKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgfVxuXG4gICAgZG9tTm9kZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4ubGVmdCwgXCIgXCIpLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4udG9wKTtcbiAgfTtcblxuICB2YXIgZ2V0T3ZlcmxheSA9IGZ1bmN0aW9uIGdldE92ZXJsYXkoKSB7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5O1xuXG4gICAgaWYgKHRpdGxlID09PSAwKSB7XG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJsYXkgfHwgdGl0bGUgfHwgJyc7XG4gIH07XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IHByb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Rvb2x0aXAnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgdGVtcFZpc2libGUgPSB2aXNpYmxlOyAvLyBIaWRlIHRvb2x0aXAgd2hlbiB0aGVyZSBpcyBubyB0aXRsZVxuXG4gIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykgJiYgaXNOb1RpdGxlKCkpIHtcbiAgICB0ZW1wVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSwgcHJlZml4Q2xzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgdmFyIGNoaWxkQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2hpbGRQcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3BlbkNsYXNzTmFtZSB8fCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIHRydWUpKTtcbiAgdmFyIGN1c3RvbU92ZXJsYXlDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShvdmVybGF5Q2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGNvbG9yKSwgY29sb3IgJiYgUHJlc2V0Q29sb3JSZWdleC50ZXN0KGNvbG9yKSksIF9jbGFzc05hbWVzMikpO1xuICB2YXIgZm9ybWF0dGVkT3ZlcmxheUlubmVyU3R5bGU7XG4gIHZhciBhcnJvd0NvbnRlbnRTdHlsZTtcblxuICBpZiAoY29sb3IgJiYgIVByZXNldENvbG9yUmVnZXgudGVzdChjb2xvcikpIHtcbiAgICBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBvdmVybGF5SW5uZXJTdHlsZSksIHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yXG4gICAgfSk7XG4gICAgYXJyb3dDb250ZW50U3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvclxuICAgIH07XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjVG9vbHRpcFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IGN1c3RvbU92ZXJsYXlDbGFzc05hbWUsXG4gICAgZ2V0VG9vbHRpcENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0VG9vbHRpcENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgcmVmOiByZWYsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IGdldFRvb2x0aXBQbGFjZW1lbnRzKCksXG4gICAgb3ZlcmxheTogZ2V0T3ZlcmxheSgpLFxuICAgIHZpc2libGU6IHRlbXBWaXNpYmxlLFxuICAgIG9uVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgIG9uUG9wdXBBbGlnbjogb25Qb3B1cEFsaWduLFxuICAgIG92ZXJsYXlJbm5lclN0eWxlOiBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZSxcbiAgICBhcnJvd0NvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3ctY29udGVudFwiKSxcbiAgICAgIHN0eWxlOiBhcnJvd0NvbnRlbnRTdHlsZVxuICAgIH0pXG4gIH0pLCB0ZW1wVmlzaWJsZSA/ICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICBjbGFzc05hbWU6IGNoaWxkQ2xzXG4gIH0pIDogY2hpbGQpO1xufSk7XG5Ub29sdGlwLmRpc3BsYXlOYW1lID0gJ1Rvb2x0aXAnO1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHRyYW5zaXRpb25OYW1lOiAnem9vbS1iaWctZmFzdCcsXG4gIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgYXJyb3dQb2ludEF0Q2VudGVyOiBmYWxzZSxcbiAgYXV0b0FkanVzdE92ZXJmbG93OiB0cnVlXG59O1xudmFyIF9kZWZhdWx0ID0gVG9vbHRpcDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE92ZXJmbG93T3B0aW9ucyA9IGdldE92ZXJmbG93T3B0aW9ucztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0UGxhY2VtZW50cztcblxudmFyIF9wbGFjZW1lbnRzID0gcmVxdWlyZShcInJjLXRvb2x0aXAvbGliL3BsYWNlbWVudHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkID0ge1xuICBhZGp1c3RYOiAwLFxuICBhZGp1c3RZOiAwXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdykge1xuICBpZiAodHlwZW9mIGF1dG9BZGp1c3RPdmVyZmxvdyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGF1dG9BZGp1c3RPdmVyZmxvdyA/IGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgOiBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZDtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQpLCBhdXRvQWRqdXN0T3ZlcmZsb3cpO1xufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRzKGNvbmZpZykge1xuICB2YXIgX2NvbmZpZyRhcnJvd1dpZHRoID0gY29uZmlnLmFycm93V2lkdGgsXG4gICAgICBhcnJvd1dpZHRoID0gX2NvbmZpZyRhcnJvd1dpZHRoID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRhcnJvd1dpZHRoLFxuICAgICAgX2NvbmZpZyRob3Jpem9udGFsQXJyID0gY29uZmlnLmhvcml6b250YWxBcnJvd1NoaWZ0LFxuICAgICAgaG9yaXpvbnRhbEFycm93U2hpZnQgPSBfY29uZmlnJGhvcml6b250YWxBcnIgPT09IHZvaWQgMCA/IDE2IDogX2NvbmZpZyRob3Jpem9udGFsQXJyLFxuICAgICAgX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID0gY29uZmlnLnZlcnRpY2FsQXJyb3dTaGlmdCxcbiAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdCA9IF9jb25maWckdmVydGljYWxBcnJvdyA9PT0gdm9pZCAwID8gOCA6IF9jb25maWckdmVydGljYWxBcnJvdyxcbiAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdyA9IGNvbmZpZy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gIHZhciBwbGFjZW1lbnRNYXAgPSB7XG4gICAgbGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgMF1cbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIDBdXG4gICAgfSxcbiAgICB0b3A6IHtcbiAgICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbMCwgLTRdXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbMCwgNF1cbiAgICB9LFxuICAgIHRvcExlZnQ6IHtcbiAgICAgIHBvaW50czogWydibCcsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbLShob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpLCAtNF1cbiAgICB9LFxuICAgIGxlZnRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICB0b3BSaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2JyJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIC00XVxuICAgIH0sXG4gICAgcmlnaHRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgLSh2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKV1cbiAgICB9LFxuICAgIGJvdHRvbVJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnYmMnXSxcbiAgICAgIG9mZnNldDogW2hvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCwgNF1cbiAgICB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfSxcbiAgICBib3R0b21MZWZ0OiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgNF1cbiAgICB9LFxuICAgIGxlZnRCb3R0b206IHtcbiAgICAgIHBvaW50czogWydicicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfVxuICB9O1xuICBPYmplY3Qua2V5cyhwbGFjZW1lbnRNYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHBsYWNlbWVudE1hcFtrZXldID0gY29uZmlnLmFycm93UG9pbnRBdENlbnRlciA/IF9leHRlbmRzKF9leHRlbmRzKHt9LCBwbGFjZW1lbnRNYXBba2V5XSksIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSxcbiAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gICAgfSkgOiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgX3BsYWNlbWVudHMucGxhY2VtZW50c1trZXldKSwge1xuICAgICAgb3ZlcmZsb3c6IGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpXG4gICAgfSk7XG4gICAgcGxhY2VtZW50TWFwW2tleV0uaWdub3JlU2hha2UgPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHBsYWNlbWVudE1hcDtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciB2ZW5kb3JQcmVmaXg7XG52YXIganNDc3NNYXAgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICAvLyBJRSBkaWQgaXQgd3JvbmcgYWdhaW4gLi4uXG4gIG1zOiAnLW1zLScsXG4gIE86ICctby0nXG59O1xuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXgoKSB7XG4gIGlmICh2ZW5kb3JQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZW5kb3JQcmVmaXg7XG4gIH1cblxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcblxuICBmb3IgKHZhciBrZXkgaW4ganNDc3NNYXApIHtcbiAgICBpZiAoa2V5ICsgdGVzdFByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZlbmRvclByZWZpeCA9IGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVuZG9yUHJlZml4O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gXCJcIi5jb25jYXQoZ2V0VmVuZG9yUHJlZml4KCksIFwiVHJhbnNpdGlvblByb3BlcnR5XCIpIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IFwiXCIuY29uY2F0KGdldFZlbmRvclByZWZpeCgpLCBcIlRyYW5zZm9ybVwiKSA6ICd0cmFuc2Zvcm0nO1xufVxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNpdGlvbk5hbWUoKTtcblxuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgIGlmIChuYW1lICE9PSAndHJhbnNpdGlvblByb3BlcnR5Jykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNmb3JtTmFtZSgpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgfHwgbm9kZS5zdHlsZVtnZXRUcmFuc2l0aW9uTmFtZSgpXTtcbn1cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVhZKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG5cbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBtYXRyaXggPSB0cmFuc2Zvcm0ucmVwbGFjZSgvW14wLTlcXC0uLF0vZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBhcnNlRmxvYXQobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0sIDApLFxuICAgICAgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cbnZhciBtYXRyaXgyZCA9IC9tYXRyaXhcXCgoLiopXFwpLztcbnZhciBtYXRyaXgzZCA9IC9tYXRyaXgzZFxcKCguKilcXCkvO1xuZnVuY3Rpb24gc2V0VHJhbnNmb3JtWFkobm9kZSwgeHkpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG5cbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBhcnI7XG4gICAgdmFyIG1hdGNoMmQgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4MmQpO1xuXG4gICAgaWYgKG1hdGNoMmQpIHtcbiAgICAgIG1hdGNoMmQgPSBtYXRjaDJkWzFdO1xuICAgICAgYXJyID0gbWF0Y2gyZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFycls0XSA9IHh5Lng7XG4gICAgICBhcnJbNV0gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwibWF0cml4KFwiLmNvbmNhdChhcnIuam9pbignLCcpLCBcIilcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gzZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgzZClbMV07XG4gICAgICBhcnIgPSBtYXRjaDNkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzEyXSA9IHh5Lng7XG4gICAgICBhcnJbMTNdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCBcIm1hdHJpeDNkKFwiLmNvbmNhdChhcnIuam9pbignLCcpLCBcIilcIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh4eS54LCBcInB4KSB0cmFuc2xhdGVZKFwiKS5jb25jYXQoeHkueSwgXCJweCkgdHJhbnNsYXRlWigwKVwiKSk7XG4gIH1cbn1cblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG52YXIgZ2V0Q29tcHV0ZWRTdHlsZVg7IC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNDg1NjU0LzMwNDA2MDVcblxuZnVuY3Rpb24gZm9yY2VSZWxheW91dChlbGVtKSB7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGVsZW0ub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxTdHlsZTtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG5cbiAgaWYgKF90eXBlb2YobmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIGJveDtcbiAgdmFyIHg7XG4gIHZhciB5O1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyDmoLnmja4gR0JTIOacgOaWsOaVsOaNru+8jEEtR3JhZGUgQnJvd3NlcnMg6YO95bey5pSv5oyBIGdldEJvdW5kaW5nQ2xpZW50UmVjdCDmlrnms5XvvIzkuI3nlKjlho3ogIPomZHkvKDnu5/nmoTlrp7njrDmlrnlvI9cblxuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDms6jvvJpqUXVlcnkg6L+Y6ICD6JmR5YeP5Y67IGRvY0VsZW0uY2xpZW50TGVmdC9jbGllbnRUb3BcbiAgLy8g5L2G5rWL6K+V5Y+R546w77yM6L+Z5qC35Y+N6ICM5Lya5a+86Ie05b2TIGh0bWwg5ZKMIGJvZHkg5pyJ6L656LedL+i+ueahhuagt+W8j+aXtu+8jOiOt+WPlueahOWAvOS4jeato+ehrlxuICAvLyDmraTlpJbvvIxpZTYg5Lya5b+955WlIGh0bWwg55qEIG1hcmdpbiDlgLzvvIzlubjov5DlnLDmmK/msqHmnInosIHkvJrljrvorr7nva4gaHRtbCDnmoQgbWFyZ2luXG5cbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDsgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuICAvLyBpZSDkuIvlupTor6Xlh4/ljrvnqpflj6PnmoTovrnmoYblkKfvvIzmr5Xnq5/pu5jorqQgYWJzb2x1dGUg6YO95piv55u45a+556qX5Y+j5a6a5L2N55qEXG4gIC8vIOeql+WPo+i+ueahhuagh+WHhuaYr+iuviBkb2N1bWVudEVsZW1lbnQgLHF1aXJrcyDml7borr7nva4gYm9keVxuICAvLyDmnIDlpb3npoHmraLlnKggYm9keSDlkowgaHRtbCDkuIrovrnmoYYg77yM5L2GIGllIDwgOSBodG1sIOm7mOiupOaciSAycHgg77yM5YeP5Y67XG4gIC8vIOS9huaYr+mdniBpZSDkuI3lj6/og73orr7nva7nqpflj6PovrnmoYbvvIxib2R5IGh0bWwg5Lmf5LiN5piv56qX5Y+jICxpZSDlj6/ku6XpgJrov4cgaHRtbCxib2R5IOiuvue9rlxuICAvLyDmoIflh4YgaWUg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOWwseaYryBib3JkZXItdG9wXG4gIC8vIGllNyBodG1sIOWNs+eql+WPo+i+ueahhuaUueWPmOS4jeS6huOAguawuOi/nOS4uiAyXG4gIC8vIOS9huagh+WHhiBmaXJlZm94L2Nocm9tZS9pZTkg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOaYr+eql+WPo+i+ueahhu+8jOWNs+S9v+iuvuS6hiBib3JkZXItdG9wIOS5n+S4uiAwXG5cbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3W1wicGFnZVwiLmNvbmNhdCh0b3AgPyAnWScgOiAnWCcsIFwiT2Zmc2V0XCIpXTtcbiAgdmFyIG1ldGhvZCA9IFwic2Nyb2xsXCIuY29uY2F0KHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcblxuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7IC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcblxuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuLyoqXG4gKiBBIGNydWRlIHdheSBvZiBkZXRlcm1pbmluZyBpZiBhbiBvYmplY3QgaXMgYSB3aW5kb3dcbiAqIEBtZW1iZXIgdXRpbFxuICovXG5cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcblxuICAvKiBlc2xpbnQgZXFlcWVxOjAgKi9cbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogPT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnQobm9kZSkge1xuICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5kb2N1bWVudDtcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjcykge1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNzO1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZ2V0RG9jdW1lbnQoZWxlbSk7XG4gIGNvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvNjFcblxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQoUkVfTlVNLCBcIikoPyFweClbYS16JV0rJFwiKSwgJ2knKTtcblxudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTsgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcbiAgLy8gRnJvbSB0aGUgYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1xuICAvLyBodHRwOi8vZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDcvMDcvMjcvMTguNTQuMTUvI2NvbW1lbnQtMTAyMjkxXG4gIC8vIElmIHdlJ3JlIG5vdCBkZWFsaW5nIHdpdGggYSByZWd1bGFyIHBpeGVsIG51bWJlclxuICAvLyBidXQgYSBudW1iZXIgdGhhdCBoYXMgYSB3ZWlyZCBlbmRpbmcsIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBwaXhlbHNcbiAgLy8gZXhjbHVkZSBsZWZ0IHJpZ2h0IGZvciByZWxhdGl2aXR5XG5cbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07IC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IGVsZW1bQ1VSUkVOVF9TVFlMRV1bTEVGVF07IC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7IC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcblxuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gcnNMZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXREaXJlY3Rpb24oZGlyLCBvcHRpb24pIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIG9wdGlvbi51c2VDc3NSaWdodCA/ICdyaWdodCcgOiBkaXI7XG4gIH1cblxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn0gLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcblxuXG5mdW5jdGlvbiBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuXG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbFRyYW5zaXRpb24gPSAnJztcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIG9yaWdpbmFsVHJhbnNpdGlvbiA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtKSB8fCAnJztcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgJ25vbmUnKTtcbiAgfVxuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBcIlwiLmNvbmNhdChwcmVzZXRILCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbdmVydGljYWxQcm9wZXJ0eV0gPSBcIlwiLmNvbmNhdChwcmVzZXRWLCBcInB4XCIpO1xuICB9IC8vIGZvcmNlIHJlbGF5b3V0XG5cblxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuXG4gICAgICBpZiAoZGlyID09PSBrZXkpIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0ICsgb2ZmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0IC0gb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNzcyhlbGVtLCBvcmlnaW5hbFN0eWxlKTsgLy8gZm9yY2UgcmVsYXlvdXRcblxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCBvcmlnaW5hbFRyYW5zaXRpb24pO1xuICB9XG5cbiAgdmFyIHJldCA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcblxuICAgICAgdmFyIF9vZmYgPSBvZmZzZXRbX2tleV0gLSBvcmlnaW5hbE9mZnNldFtfa2V5XTtcblxuICAgICAgaWYgKF9rZXkgPT09IF9kaXIpIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSArIF9vZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdIC0gX29mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtJDEoZWxlbSwgb2Zmc2V0KSB7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIG9yaWdpbmFsWFkgPSBnZXRUcmFuc2Zvcm1YWShlbGVtKTtcbiAgdmFyIHJlc3VsdFhZID0ge1xuICAgIHg6IG9yaWdpbmFsWFkueCxcbiAgICB5OiBvcmlnaW5hbFhZLnlcbiAgfTtcblxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnggPSBvcmlnaW5hbFhZLnggKyBvZmZzZXQubGVmdCAtIG9yaWdpbmFsT2Zmc2V0LmxlZnQ7XG4gIH1cblxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueSA9IG9yaWdpbmFsWFkueSArIG9mZnNldC50b3AgLSBvcmlnaW5hbE9mZnNldC50b3A7XG4gIH1cblxuICBzZXRUcmFuc2Zvcm1YWShlbGVtLCByZXN1bHRYWSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICBpZiAob3B0aW9uLmlnbm9yZVNoYWtlKSB7XG4gICAgdmFyIG9yaU9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgICB2YXIgb0xlZnQgPSBvcmlPZmZzZXQubGVmdC50b0ZpeGVkKDApO1xuICAgIHZhciBvVG9wID0gb3JpT2Zmc2V0LnRvcC50b0ZpeGVkKDApO1xuICAgIHZhciB0TGVmdCA9IG9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIHRUb3AgPSBvZmZzZXQudG9wLnRvRml4ZWQoMCk7XG5cbiAgICBpZiAob0xlZnQgPT09IHRMZWZ0ICYmIG9Ub3AgPT09IHRUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9uLnVzZUNzc1JpZ2h0IHx8IG9wdGlvbi51c2VDc3NCb3R0b20pIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIGlmIChvcHRpb24udXNlQ3NzVHJhbnNmb3JtICYmIGdldFRyYW5zZm9ybU5hbWUoKSBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKSB7XG4gICAgc2V0VHJhbnNmb3JtJDEoZWxlbSwgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWU7IC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7IC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3A7XG4gIHZhciBqO1xuICB2YXIgaTtcblxuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHdoaWNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjc3NQcm9wID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSBcIlwiLmNvbmNhdChwcm9wKS5jb25jYXQod2hpY2hbaV0sIFwiV2lkdGhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgZG9tVXRpbHMgPSB7XG4gIGdldFBhcmVudDogZnVuY3Rpb24gZ2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gZWxlbWVudDtcblxuICAgIGRvIHtcbiAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5ob3N0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMSAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDkpO1xuXG4gICAgcmV0dXJuIHBhcmVudDtcbiAgfVxufTtcbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbXCJkb2NcIi5jb25jYXQobmFtZSldID0gZnVuY3Rpb24gKHJlZldpbikge1xuICAgIHZhciBkID0gcmVmV2luLmRvY3VtZW50O1xuICAgIHJldHVybiBNYXRoLm1heCggLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFtcInNjcm9sbFwiLmNvbmNhdChuYW1lKV0sIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5W1wic2Nyb2xsXCIuY29uY2F0KG5hbWUpXSwgZG9tVXRpbHNbXCJ2aWV3cG9ydFwiLmNvbmNhdChuYW1lKV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzW1widmlld3BvcnRcIi5jb25jYXQobmFtZSldID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSBcImNsaWVudFwiLmNvbmNhdChuYW1lKTtcbiAgICB2YXIgZG9jID0gd2luLmRvY3VtZW50O1xuICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudFByb3AgPSBkb2N1bWVudEVsZW1lbnRbcHJvcF07IC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG5cbiAgICByZXR1cm4gZG9jLmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyAmJiBkb2N1bWVudEVsZW1lbnRQcm9wIHx8IGJvZHkgJiYgYm9keVtwcm9wXSB8fCBkb2N1bWVudEVsZW1lbnRQcm9wO1xuICB9O1xufSk7XG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5cbmZ1bmN0aW9uIGdldFdIKGVsZW0sIG5hbWUsIGV4KSB7XG4gIHZhciBleHRyYSA9IGV4O1xuXG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG5cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG5cbiAgaWYgKGJvcmRlckJveFZhbHVlID09PSBudWxsIHx8IGJvcmRlckJveFZhbHVlID09PSB1bmRlZmluZWQgfHwgYm9yZGVyQm94VmFsdWUgPD0gMCkge1xuICAgIGJvcmRlckJveFZhbHVlID0gdW5kZWZpbmVkOyAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG5cbiAgICBjc3NCb3hWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIG5hbWUpO1xuXG4gICAgaWYgKGNzc0JveFZhbHVlID09PSBudWxsIHx8IGNzc0JveFZhbHVlID09PSB1bmRlZmluZWQgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH0gLy8gTm9ybWFsaXplICcnLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcblxuXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG5cbiAgaWYgKGV4dHJhID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYSA9IGlzQm9yZGVyQm94ID8gQk9SREVSX0lOREVYIDogQ09OVEVOVF9JTkRFWDtcbiAgfVxuXG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG5cbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NCb3hWYWx1ZTtcbiAgfSBlbHNlIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICBpZiAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoKSk7XG4gIH1cblxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59OyAvLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuXG5mdW5jdGlvbiBnZXRXSElnbm9yZURpc3BsYXkoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB2YWw7XG4gIHZhciBlbGVtID0gYXJnc1swXTsgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcblxuICBpZiAoZWxlbS5vZmZzZXRXaWR0aCAhPT0gMCkge1xuICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcblxuICBkb21VdGlsc1tcIm91dGVyXCIuY29uY2F0KGZpcnN0KV0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcblxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2KSB7XG4gICAgdmFyIHZhbCA9IHY7XG5cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG5cbiAgICAgICAgaWYgKGlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgdmFsICs9IGdldFBCTVdpZHRoKGVsZW0sIFsncGFkZGluZycsICdib3JkZXInXSwgd2hpY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtICYmIGdldFdISWdub3JlRGlzcGxheShlbGVtLCBuYW1lLCBDT05URU5UX0lOREVYKTtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtaXgodG8sIGZyb20pIHtcbiAgZm9yICh2YXIgaSBpbiBmcm9tKSB7XG4gICAgaWYgKGZyb20uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRvW2ldID0gZnJvbVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbnZhciB1dGlscyA9IHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZG9jdW1lbnQgJiYgbm9kZS5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuICBnZXREb2N1bWVudDogZ2V0RG9jdW1lbnQsXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxuICBlYWNoOiBlYWNoLFxuICBjc3M6IGNzcyxcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHZhciBpO1xuICAgIHZhciByZXQgPSB7fTtcblxuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcblxuICAgIGlmIChvdmVyZmxvdykge1xuICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgcmV0Lm92ZXJmbG93W2ldID0gb2JqLm92ZXJmbG93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgbWl4OiBtaXgsXG4gIGdldFdpbmRvd1Njcm9sbExlZnQ6IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbExlZnQodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxMZWZ0KHcpO1xuICB9LFxuICBnZXRXaW5kb3dTY3JvbGxUb3A6IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFRvcCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbFRvcCh3KTtcbiAgfSxcbiAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciByZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1dGlscy5taXgocmV0LCBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xubWl4KHV0aWxzLCBkb21VdGlscyk7XG5cbi8qKlxuICog5b6X5Yiw5Lya5a+86Ie05YWD57Sg5pi+56S65LiN5YWo55qE56WW5YWI5YWD57SgXG4gKi9cblxudmFyIGdldFBhcmVudCA9IHV0aWxzLmdldFBhcmVudDtcblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcblxuICAvKlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7b3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiIGlkPVwiZDZcIj5cbiAgIOWFg+e0oCA2IOmrmCAxMDBweCDlrr0gNTBweDxici8+XG4gICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgKi9cbiAgLy8gZWxlbWVudC5vZmZzZXRQYXJlbnQgZG9lcyB0aGUgcmlnaHQgdGhpbmcgaW4gaWU3IGFuZCBiZWxvdy4gUmV0dXJuIHBhcmVudCB3aXRoIGxheW91dCFcbiAgLy8gIEluIG90aGVyIGJyb3dzZXJzIGl0IG9ubHkgaW5jbHVkZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbiBhYnNvbHV0ZSwgcmVsYXRpdmUgb3JcbiAgLy8gZml4ZWQsIG5vdCBlbGVtZW50cyB3aXRoIG92ZXJmbG93IHNldCB0byBhdXRvIG9yIHNjcm9sbC5cbiAgLy8gICAgICAgIGlmIChVQS5pZSAmJiBpZU1vZGUgPCA4KSB7XG4gIC8vICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyAgICAgICAgfVxuICAvLyDnu5/kuIDnmoQgb2Zmc2V0UGFyZW50IOaWueazlVxuXG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50O1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgdmFyIHNraXBTdGF0aWMgPSBwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnIHx8IHBvc2l0aW9uU3R5bGUgPT09ICdhYnNvbHV0ZSc7XG5cbiAgaWYgKCFza2lwU3RhdGljKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnID8gbnVsbCA6IGdldFBhcmVudChlbGVtZW50KTtcbiAgfVxuXG4gIGZvciAocGFyZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gOTsgcGFyZW50ID0gZ2V0UGFyZW50KHBhcmVudCkpIHtcbiAgICBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBnZXRQYXJlbnQkMSA9IHV0aWxzLmdldFBhcmVudDtcbmZ1bmN0aW9uIGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSB7XG4gIGlmICh1dGlscy5pc1dpbmRvdyhlbGVtZW50KSB8fCBlbGVtZW50Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICBmb3IgKHBhcmVudCA9IGdldFBhcmVudCQxKGVsZW1lbnQpOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBnZXRQYXJlbnQkMShwYXJlbnQpKSB7XG4gICAgdmFyIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICog6I635b6X5YWD57Sg55qE5pi+56S66YOo5YiG55qE5Yy65Z+fXG4gKi9cblxuZnVuY3Rpb24gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KGVsZW1lbnQsIGFsd2F5c0J5Vmlld3BvcnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IEluZmluaXR5LFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5XG4gIH07XG4gIHZhciBlbCA9IGdldE9mZnNldFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgdGhlIHZpc2libGUgcmVjdCBieSBjbGltYmluZyB0aGUgZG9tIGFjY291bnRpbmcgZm9yXG4gIC8vIGFsbCBzY3JvbGxhYmxlIGNvbnRhaW5lcnMuXG5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJiAvLyBib2R5IG1heSBoYXZlIG92ZXJmbG93IHNldCBvbiBpdCwgeWV0IHdlIHN0aWxsIGdldCB0aGUgZW50aXJlXG4gICAgLy8gdmlld3BvcnQuIEluIHNvbWUgYnJvd3NlcnMsIGVsLm9mZnNldFBhcmVudCBtYXkgYmVcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHNvIGNoZWNrIGZvciB0aGF0IHRvby5cbiAgICBlbCAhPT0gYm9keSAmJiBlbCAhPT0gZG9jdW1lbnRFbGVtZW50ICYmIHV0aWxzLmNzcyhlbCwgJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgdmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7IC8vIGFkZCBib3JkZXJcblxuICAgICAgcG9zLmxlZnQgKz0gZWwuY2xpZW50TGVmdDtcbiAgICAgIHBvcy50b3AgKz0gZWwuY2xpZW50VG9wO1xuICAgICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBwb3MudG9wKTtcbiAgICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIC8vIGNvbnNpZGVyIGFyZWEgd2l0aG91dCBzY3JvbGxCYXJcbiAgICAgIHBvcy5sZWZ0ICsgZWwuY2xpZW50V2lkdGgpO1xuICAgICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBwb3MudG9wICsgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBwb3MubGVmdCk7XG4gICAgfSBlbHNlIGlmIChlbCA9PT0gYm9keSB8fCBlbCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbCA9IGdldE9mZnNldFBhcmVudChlbCk7XG4gIH0gLy8gU2V0IGVsZW1lbnQgcG9zaXRpb24gdG8gZml4ZWRcbiAgLy8gbWFrZSBzdXJlIGFic29sdXRlIGVsZW1lbnQgaXRzZWxmIGRvbid0IGFmZmVjdCBpdCdzIHZpc2libGUgYXJlYVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83NjAxXG5cblxuICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IG51bGw7XG5cbiAgaWYgKCF1dGlscy5pc1dpbmRvdyhlbGVtZW50KSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb3JpZ2luYWxQb3NpdGlvbiA9IGVsZW1lbnQuc3R5bGUucG9zaXRpb247XG4gICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9XG4gIH1cblxuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0OyAvLyBzY3JvbGxYWFggb24gaHRtbCBpcyBzeW5jIHdpdGggYm9keSB3aGljaCBtZWFucyBvdmVyZmxvdzogaGlkZGVuIG9uIGJvZHkgZ2V0cyB3cm9uZyBzY3JvbGxYWFguXG4gIC8vIFdlIHNob3VsZCBjdXQgdGhpcyBvdXJzZWxmLlxuXG4gIHZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KTtcblxuICBpZiAoYm9keVN0eWxlLm92ZXJmbG93WCA9PT0gJ2hpZGRlbicpIHtcbiAgICBkb2N1bWVudFdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAoYm9keVN0eWxlLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicpIHtcbiAgICBkb2N1bWVudEhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgfSAvLyBSZXNldCBlbGVtZW50IHBvc2l0aW9uIGFmdGVyIGNhbGN1bGF0ZSB0aGUgdmlzaWJsZSBhcmVhXG5cblxuICBpZiAoZWxlbWVudC5zdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBvcmlnaW5hbFBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKGFsd2F5c0J5Vmlld3BvcnQgfHwgaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpKSB7XG4gICAgLy8gQ2xpcCBieSB2aWV3cG9ydCdzIHNpemUuXG4gICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHNjcm9sbFgpO1xuICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgc2Nyb2xsWSk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGgpO1xuICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDbGlwIGJ5IGRvY3VtZW50J3Mgc2l6ZS5cbiAgICB2YXIgbWF4VmlzaWJsZVdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnRXaWR0aCwgc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGgpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIG1heFZpc2libGVXaWR0aCk7XG4gICAgdmFyIG1heFZpc2libGVIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudEhlaWdodCwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIG1heFZpc2libGVIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBvdmVyZmxvdykge1xuICB2YXIgcG9zID0gdXRpbHMuY2xvbmUoZWxGdXR1cmVQb3MpO1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogZWxSZWdpb24ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbFJlZ2lvbi5oZWlnaHRcbiAgfTtcblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQpIHtcbiAgICBwb3MubGVmdCA9IHZpc2libGVSZWN0LmxlZnQ7XG4gIH0gLy8gTGVmdCBlZGdlIGluc2lkZSBhbmQgcmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9IC8vIFJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIC8vIOS/neivgeW3pui+ueeVjOWSjOWPr+inhuWMuuWfn+W3pui+ueeVjOWvuem9kFxuICAgIHBvcy5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QucmlnaHQgLSBzaXplLndpZHRoLCB2aXNpYmxlUmVjdC5sZWZ0KTtcbiAgfSAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3ApIHtcbiAgICBwb3MudG9wID0gdmlzaWJsZVJlY3QudG9wO1xuICB9IC8vIFRvcCBlZGdlIGluc2lkZSBhbmQgYm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9IC8vIEJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgLy8g5L+d6K+B5LiK6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5LiK6L6555WM5a+56b2QXG4gICAgcG9zLnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmJvdHRvbSAtIHNpemUuaGVpZ2h0LCB2aXNpYmxlUmVjdC50b3ApO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLm1peChwb3MsIHNpemUpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWdpb24obm9kZSkge1xuICB2YXIgb2Zmc2V0O1xuICB2YXIgdztcbiAgdmFyIGg7XG5cbiAgaWYgKCF1dGlscy5pc1dpbmRvdyhub2RlKSAmJiBub2RlLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb2Zmc2V0ID0gdXRpbHMub2Zmc2V0KG5vZGUpO1xuICAgIHcgPSB1dGlscy5vdXRlcldpZHRoKG5vZGUpO1xuICAgIGggPSB1dGlscy5vdXRlckhlaWdodChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgd2luID0gdXRpbHMuZ2V0V2luZG93KG5vZGUpO1xuICAgIG9mZnNldCA9IHtcbiAgICAgIGxlZnQ6IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbilcbiAgICB9O1xuICAgIHcgPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gICAgaCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIH1cblxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuLyoqXG4gKiDojrflj5Ygbm9kZSDkuIrnmoQgYWxpZ24g5a+56b2Q54K5IOebuOWvueS6jumhtemdoueahOWdkOagh1xuICovXG5mdW5jdGlvbiBnZXRBbGlnbk9mZnNldChyZWdpb24sIGFsaWduKSB7XG4gIHZhciBWID0gYWxpZ24uY2hhckF0KDApO1xuICB2YXIgSCA9IGFsaWduLmNoYXJBdCgxKTtcbiAgdmFyIHcgPSByZWdpb24ud2lkdGg7XG4gIHZhciBoID0gcmVnaW9uLmhlaWdodDtcbiAgdmFyIHggPSByZWdpb24ubGVmdDtcbiAgdmFyIHkgPSByZWdpb24udG9wO1xuXG4gIGlmIChWID09PSAnYycpIHtcbiAgICB5ICs9IGggLyAyO1xuICB9IGVsc2UgaWYgKFYgPT09ICdiJykge1xuICAgIHkgKz0gaDtcbiAgfVxuXG4gIGlmIChIID09PSAnYycpIHtcbiAgICB4ICs9IHcgLyAyO1xuICB9IGVsc2UgaWYgKEggPT09ICdyJykge1xuICAgIHggKz0gdztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpIHtcbiAgdmFyIHAxID0gZ2V0QWxpZ25PZmZzZXQocmVmTm9kZVJlZ2lvbiwgcG9pbnRzWzFdKTtcbiAgdmFyIHAyID0gZ2V0QWxpZ25PZmZzZXQoZWxSZWdpb24sIHBvaW50c1swXSk7XG4gIHZhciBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IE1hdGgucm91bmQoZWxSZWdpb24ubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0pLFxuICAgIHRvcDogTWF0aC5yb3VuZChlbFJlZ2lvbi50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdKVxuICB9O1xufVxuXG4vKipcbiAqIGFsaWduIGRvbSBub2RlIGZsZXhpYmx5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmZ1bmN0aW9uIGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPiB2aXNpYmxlUmVjdC5yaWdodCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPCB2aXNpYmxlUmVjdC5sZWZ0O1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wID4gdmlzaWJsZVJlY3QuYm90dG9tIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA8IHZpc2libGVSZWN0LnRvcDtcbn1cblxuZnVuY3Rpb24gZmxpcChwb2ludHMsIHJlZywgbWFwKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgdXRpbHMuZWFjaChwb2ludHMsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0LnB1c2gocC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtYXBbbV07XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmxpcE9mZnNldChvZmZzZXQsIGluZGV4KSB7XG4gIG9mZnNldFtpbmRleF0gPSAtb2Zmc2V0W2luZGV4XTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldChzdHIsIG9mZnNldExlbikge1xuICB2YXIgbjtcblxuICBpZiAoLyUkLy50ZXN0KHN0cikpIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSksIDEwKSAvIDEwMCAqIG9mZnNldExlbjtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIH1cblxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cbi8qKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGd0UmVnaW9uIOWPgueFp+iKgueCueaJgOWNoOeahOWMuuWfnzogeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfVxuICogQHBhcmFtIGFsaWduXG4gKi9cblxuXG5mdW5jdGlvbiBkb0FsaWduKGVsLCB0Z3RSZWdpb24sIGFsaWduLCBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gIHZhciB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgb3ZlcmZsb3cgPSBhbGlnbi5vdmVyZmxvdztcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcbiAgdmFyIGZhaWwgPSAwO1xuICB2YXIgYWx3YXlzQnlWaWV3cG9ydCA9ICEhKG92ZXJmbG93ICYmIG92ZXJmbG93LmFsd2F5c0J5Vmlld3BvcnQpOyAvLyDlvZPliY3oioLngrnlj6/ku6XooqvmlL7nva7nmoTmmL7npLrljLrln59cblxuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoc291cmNlLCBhbHdheXNCeVZpZXdwb3J0KTsgLy8g5b2T5YmN6IqC54K55omA5Y2g55qE5Yy65Z+fLCBsZWZ0L3RvcC93aWR0aC9oZWlnaHRcblxuICB2YXIgZWxSZWdpb24gPSBnZXRSZWdpb24oc291cmNlKTsgLy8g5bCGIG9mZnNldCDovazmjaLmiJDmlbDlgLzvvIzmlK/mjIHnmb7liIbmr5RcblxuICBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbFJlZ2lvbik7XG4gIG5vcm1hbGl6ZU9mZnNldCh0YXJnZXRPZmZzZXQsIHRndFJlZ2lvbik7IC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuXG4gIHZhciBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpOyAvLyDlvZPliY3oioLngrnlsIbopoHmiYDlpITnmoTljLrln59cblxuICB2YXIgbmV3RWxSZWdpb24gPSB1dGlscy5tZXJnZShlbFJlZ2lvbiwgZWxGdXR1cmVQb3MpOyAvLyDlpoLmnpzlj6/op4bljLrln5/kuI3og73lrozlhajmlL7nva7lvZPliY3oioLngrnml7blhYHorrjosIPmlbRcblxuICBpZiAodmlzaWJsZVJlY3QgJiYgKG92ZXJmbG93LmFkanVzdFggfHwgb3ZlcmZsb3cuYWRqdXN0WSkgJiYgaXNUZ3RSZWdpb25WaXNpYmxlKSB7XG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFgpIHtcbiAgICAgIC8vIOWmguaenOaoquWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1tscl0vZ2ksIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pOyAvLyDlgY/np7vph4/kuZ/lj43kuItcblxuICAgICAgICB2YXIgbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBuZXdQb2ludHMsIG5ld09mZnNldCwgbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2dpLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTsgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG5cblxuICAgICAgICB2YXIgX25ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAxKTtcblxuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcblxuICAgICAgICB2YXIgX25ld0VsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgX25ld1BvaW50cywgX25ld09mZnNldCwgX25ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFkoX25ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gX25ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBfbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IF9uZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuXG5cbiAgICBpZiAoZmFpbCkge1xuICAgICAgZWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgICAgIHV0aWxzLm1peChuZXdFbFJlZ2lvbiwgZWxGdXR1cmVQb3MpO1xuICAgIH1cblxuICAgIHZhciBpc1N0aWxsRmFpbFggPSBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuICAgIHZhciBpc1N0aWxsRmFpbFkgPSBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpOyAvLyDmo4Dmn6Xlj43kuIvlkI7nmoTkvY3nva7mmK/lkKblj6/ku6XmlL7kuIvkuobvvIzlpoLmnpzku43nhLbmlL7kuI3kuIvvvJpcbiAgICAvLyAxLiDlpI3ljp/kv67mlLnov4fnmoTlrprkvY3lj4LmlbBcblxuICAgIGlmIChpc1N0aWxsRmFpbFggfHwgaXNTdGlsbEZhaWxZKSB7XG4gICAgICB2YXIgX25ld1BvaW50czIgPSBwb2ludHM7IC8vIOmHjee9ruWvueW6lOmDqOWIhueahOe/u+i9rOmAu+i+kVxuXG4gICAgICBpZiAoaXNTdGlsbEZhaWxYKSB7XG4gICAgICAgIF9uZXdQb2ludHMyID0gZmxpcChwb2ludHMsIC9bbHJdL2dpLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RpbGxGYWlsWSkge1xuICAgICAgICBfbmV3UG9pbnRzMiA9IGZsaXAocG9pbnRzLCAvW3RiXS9naSwge1xuICAgICAgICAgIHQ6ICdiJyxcbiAgICAgICAgICBiOiAndCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHBvaW50cyA9IF9uZXdQb2ludHMyO1xuICAgICAgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gICAgfSAvLyAyLiDlj6rmnInmjIflrprkuoblj6/ku6XosIPmlbTlvZPliY3mlrnlkJHmiY3osIPmlbRcblxuXG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNTdGlsbEZhaWxYO1xuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzU3RpbGxGYWlsWTsgLy8g56Gu5a6e6KaB6LCD5pW077yM55Sa6Iez5Y+v6IO95Lya6LCD5pW06auY5bqm5a695bqmXG5cbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9IGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG5ld092ZXJmbG93Q2ZnKTtcbiAgICB9XG4gIH0gLy8gbmVlZCBqdWRnZSB0byBpbiBjYXNlIHNldCBmaXhlZCB3aXRoIGluIGNzcyBvbiBoZWlnaHQgYXV0byBlbGVtZW50XG5cblxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ3dpZHRoJywgdXRpbHMud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ2hlaWdodCcsIHV0aWxzLmhlaWdodChzb3VyY2UpICsgbmV3RWxSZWdpb24uaGVpZ2h0IC0gZWxSZWdpb24uaGVpZ2h0KTtcbiAgfSAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xOTBcbiAgLy8g55u45a+55LqO5bGP5bmV5L2N572u5rKh5Y+Y77yM6ICMIGxlZnQvdG9wIOWPmOS6hlxuICAvLyDkvovlpoIgPGRpdiAncmVsYXRpdmUnPjxlbCBhYnNvbHV0ZT48L2Rpdj5cblxuXG4gIHV0aWxzLm9mZnNldChzb3VyY2UsIHtcbiAgICBsZWZ0OiBuZXdFbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogbmV3RWxSZWdpb24udG9wXG4gIH0sIHtcbiAgICB1c2VDc3NSaWdodDogYWxpZ24udXNlQ3NzUmlnaHQsXG4gICAgdXNlQ3NzQm90dG9tOiBhbGlnbi51c2VDc3NCb3R0b20sXG4gICAgdXNlQ3NzVHJhbnNmb3JtOiBhbGlnbi51c2VDc3NUcmFuc2Zvcm0sXG4gICAgaWdub3JlU2hha2U6IGFsaWduLmlnbm9yZVNoYWtlXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBvaW50czogcG9pbnRzLFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0LFxuICAgIG92ZXJmbG93OiBuZXdPdmVyZmxvd0NmZ1xuICB9O1xufVxuLyoqXG4gKiAgMjAxMi0wNC0yNiB5aW1pbmdoZUBnbWFpbC5jb21cbiAqICAgLSDkvJjljJbmmbrog73lr7npvZDnrpfms5VcbiAqICAgLSDmhY7nlKggcmVzaXplWFhcbiAqXG4gKiAgMjAxMS0wNy0xMyB5aW1pbmdoZUBnbWFpbC5jb20gbm90ZTpcbiAqICAgLSDlop7liqDmmbrog73lr7npvZDvvIzku6Xlj4rlpKflsI/osIPmlbTpgInpoblcbiAqKi9cblxuZnVuY3Rpb24gaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCwgYWx3YXlzQnlWaWV3cG9ydCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQodGFyZ2V0LCBhbHdheXNCeVZpZXdwb3J0KTtcbiAgdmFyIHRhcmdldFJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuICByZXR1cm4gIXZpc2libGVSZWN0IHx8IHRhcmdldFJlZ2lvbi5sZWZ0ICsgdGFyZ2V0UmVnaW9uLndpZHRoIDw9IHZpc2libGVSZWN0LmxlZnQgfHwgdGFyZ2V0UmVnaW9uLnRvcCArIHRhcmdldFJlZ2lvbi5oZWlnaHQgPD0gdmlzaWJsZVJlY3QudG9wIHx8IHRhcmdldFJlZ2lvbi5sZWZ0ID49IHZpc2libGVSZWN0LnJpZ2h0IHx8IHRhcmdldFJlZ2lvbi50b3AgPj0gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBhbGlnbkVsZW1lbnQoZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHJlZk5vZGVSZWdpb24gPSBnZXRSZWdpb24odGFyZ2V0KTtcbiAgdmFyIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlID0gIWlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQsIGFsaWduLm92ZXJmbG93ICYmIGFsaWduLm92ZXJmbG93LmFsd2F5c0J5Vmlld3BvcnQpO1xuICByZXR1cm4gZG9BbGlnbihlbCwgcmVmTm9kZVJlZ2lvbiwgYWxpZ24sIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlKTtcbn1cblxuYWxpZ25FbGVtZW50Ll9fZ2V0T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50O1xuYWxpZ25FbGVtZW50Ll9fZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50O1xuXG4vKipcbiAqIGB0Z3RQb2ludGA6IHsgcGFnZVgsIHBhZ2VZIH0gb3IgeyBjbGllbnRYLCBjbGllbnRZIH0uXG4gKiBJZiBjbGllbnQgcG9zaXRpb24gcHJvdmlkZWQsIHdpbGwgaW50ZXJuYWwgY29udmVydCB0byBwYWdlIHBvc2l0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGFsaWduUG9pbnQoZWwsIHRndFBvaW50LCBhbGlnbikge1xuICB2YXIgcGFnZVg7XG4gIHZhciBwYWdlWTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsKTtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG5cbiAgaWYgKCdwYWdlWCcgaW4gdGd0UG9pbnQpIHtcbiAgICBwYWdlWCA9IHRndFBvaW50LnBhZ2VYO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VYID0gc2Nyb2xsWCArIHRndFBvaW50LmNsaWVudFg7XG4gIH1cblxuICBpZiAoJ3BhZ2VZJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VZID0gdGd0UG9pbnQucGFnZVk7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVkgPSBzY3JvbGxZICsgdGd0UG9pbnQuY2xpZW50WTtcbiAgfVxuXG4gIHZhciB0Z3RSZWdpb24gPSB7XG4gICAgbGVmdDogcGFnZVgsXG4gICAgdG9wOiBwYWdlWSxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbiAgdmFyIHBvaW50SW5WaWV3ID0gcGFnZVggPj0gMCAmJiBwYWdlWCA8PSBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCAmJiBwYWdlWSA+PSAwICYmIHBhZ2VZIDw9IHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodDsgLy8gUHJvdmlkZSBkZWZhdWx0IHRhcmdldCBwb2ludFxuXG4gIHZhciBwb2ludHMgPSBbYWxpZ24ucG9pbnRzWzBdLCAnY2MnXTtcbiAgcmV0dXJuIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgX29iamVjdFNwcmVhZDIoe30sIGFsaWduLCB7XG4gICAgcG9pbnRzOiBwb2ludHNcbiAgfSksIHBvaW50SW5WaWV3KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxpZ25FbGVtZW50O1xuZXhwb3J0IHsgYWxpZ25FbGVtZW50LCBhbGlnblBvaW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBNaW5pU3RvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbnZhciBQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvdmlkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1pbmlTdG9yZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHRoaXMucHJvcHMuc3RvcmUgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIFByb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydCB7IFByb3ZpZGVyIH07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ3NoYWxsb3dlcXVhbCc7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IE1pbmlTdG9yZUNvbnRleHQgfSBmcm9tICcuL1Byb3ZpZGVyJztcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG52YXIgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7fSk7IH07XG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBzaG91bGRTdWJzY3JpYmUgPSAhIW1hcFN0YXRlVG9Qcm9wcztcbiAgICB2YXIgZmluYWxNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMgfHwgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIENvbm5lY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoQ29ubmVjdCwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgICAgICAgICBfdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IGZpbmFsTWFwU3RhdGVUb1Byb3BzKF90aGlzLnN0b3JlLmdldFN0YXRlKCksIF90aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzdWJzY3JpYmVkOiBuZXh0U3RhdGUgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9yZSA9IF90aGlzLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWQ6IGZpbmFsTWFwU3RhdGVUb1Byb3BzKF90aGlzLnN0b3JlLmdldFN0YXRlKCksIHByb3BzKSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF90aGlzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb25uZWN0LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgb3duUHJvcHNcbiAgICAgICAgICAgICAgICBpZiAobWFwU3RhdGVUb1Byb3BzICYmIG1hcFN0YXRlVG9Qcm9wcy5sZW5ndGggPT09IDIgJiYgcHJvcHMgIT09IHByZXZTdGF0ZS5wcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlZDogZmluYWxNYXBTdGF0ZVRvUHJvcHMocHJldlN0YXRlLnN0b3JlLmdldFN0YXRlKCksIHByb3BzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHByb3BzIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICghc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHxcbiAgICAgICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLnN1YnNjcmliZWQsIG5leHRTdGF0ZS5zdWJzY3JpYmVkKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUudHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMuc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUudHJ5VW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgdGhpcy5zdGF0ZS5zdWJzY3JpYmVkKSwgeyBzdG9yZTogdGhpcy5zdG9yZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgcmVmOiB0aGlzLnByb3BzLm1pbmlTdG9yZUZvcndhcmRlZFJlZiB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IFwiQ29ubmVjdChcIiArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgXCIpXCI7XG4gICAgICAgICAgICBDb25uZWN0LmNvbnRleHRUeXBlID0gTWluaVN0b3JlQ29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiBDb25uZWN0O1xuICAgICAgICB9KFJlYWN0LkNvbXBvbmVudCkpO1xuICAgICAgICBpZiAob3B0aW9ucy5mb3J3YXJkUmVmKSB7XG4gICAgICAgICAgICB2YXIgZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIF9fYXNzaWduKHt9LCBwcm9wcywgeyBtaW5pU3RvcmVGb3J3YXJkZWRSZWY6IHJlZiB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH07XG59XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHBhcnRpYWwpIHtcbiAgICAgICAgc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCBwYXJ0aWFsKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgfTtcbn1cbiIsImV4cG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9Qcm92aWRlcic7XG5leHBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25uZWN0JztcbmV4cG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4vY3JlYXRlJztcbiIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG4vKipcbiAqIFJlbW92ZWQgcHJvcHM6XG4gKiAgLSBjaGlsZHJlblByb3BzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfSBmcm9tICdkb20tYWxpZ24nO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7IGlzU2FtZVBvaW50LCByZXN0b3JlRm9jdXMsIG1vbml0b3JSZXNpemUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHVzZUJ1ZmZlciBmcm9tICcuL2hvb2tzL3VzZUJ1ZmZlcic7XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnQoZnVuYykge1xuICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHJldHVybiBudWxsO1xuICByZXR1cm4gZnVuYygpO1xufVxuXG5mdW5jdGlvbiBnZXRQb2ludChwb2ludCkge1xuICBpZiAoX3R5cGVvZihwb2ludCkgIT09ICdvYmplY3QnIHx8ICFwb2ludCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwb2ludDtcbn1cblxudmFyIEFsaWduID0gZnVuY3Rpb24gQWxpZ24oX3JlZiwgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIGFsaWduID0gX3JlZi5hbGlnbixcbiAgICAgIG9uQWxpZ24gPSBfcmVmLm9uQWxpZ24sXG4gICAgICBtb25pdG9yV2luZG93UmVzaXplID0gX3JlZi5tb25pdG9yV2luZG93UmVzaXplLFxuICAgICAgX3JlZiRtb25pdG9yQnVmZmVyVGltID0gX3JlZi5tb25pdG9yQnVmZmVyVGltZSxcbiAgICAgIG1vbml0b3JCdWZmZXJUaW1lID0gX3JlZiRtb25pdG9yQnVmZmVyVGltID09PSB2b2lkIDAgPyAwIDogX3JlZiRtb25pdG9yQnVmZmVyVGltO1xuICB2YXIgY2FjaGVSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICB2YXIgbm9kZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgY2hpbGROb2RlID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7IC8vID09PT09PT09PT09PT09PT09PT09PSBBbGlnbiA9PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFdlIHNhdmUgdGhlIHByb3BzIGhlcmUgdG8gYXZvaWQgY2xvc3VyZSBtYWtlcyBwcm9wcyBvb2RcblxuICB2YXIgZm9yY2VBbGlnblByb3BzUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQudGFyZ2V0ID0gdGFyZ2V0O1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC5vbkFsaWduID0gb25BbGlnbjtcblxuICB2YXIgX3VzZUJ1ZmZlciA9IHVzZUJ1ZmZlcihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9mb3JjZUFsaWduUHJvcHNSZWYkYyA9IGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50LFxuICAgICAgICBsYXRlc3REaXNhYmxlZCA9IF9mb3JjZUFsaWduUHJvcHNSZWYkYy5kaXNhYmxlZCxcbiAgICAgICAgbGF0ZXN0VGFyZ2V0ID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLnRhcmdldDtcblxuICAgIGlmICghbGF0ZXN0RGlzYWJsZWQgJiYgbGF0ZXN0VGFyZ2V0KSB7XG4gICAgICB2YXIgc291cmNlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudChsYXRlc3RUYXJnZXQpO1xuICAgICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQobGF0ZXN0VGFyZ2V0KTtcbiAgICAgIGNhY2hlUmVmLmN1cnJlbnQuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50LnBvaW50ID0gcG9pbnQ7IC8vIElFIGxvc2UgZm9jdXMgYWZ0ZXIgZWxlbWVudCByZWFsaWduXG4gICAgICAvLyBXZSBzaG91bGQgcmVjb3JkIGFjdGl2ZUVsZW1lbnQgYW5kIHJlc3RvcmUgbGF0ZXJcblxuICAgICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBfZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcmVzdWx0ID0gYWxpZ25FbGVtZW50KHNvdXJjZSwgZWxlbWVudCwgYWxpZ24pO1xuICAgICAgfSBlbHNlIGlmIChwb2ludCkge1xuICAgICAgICByZXN1bHQgPSBhbGlnblBvaW50KHNvdXJjZSwgcG9pbnQsIGFsaWduKTtcbiAgICAgIH1cblxuICAgICAgcmVzdG9yZUZvY3VzKGFjdGl2ZUVsZW1lbnQsIHNvdXJjZSk7XG5cbiAgICAgIGlmIChvbkFsaWduKSB7XG4gICAgICAgIG9uQWxpZ24oc291cmNlLCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sIG1vbml0b3JCdWZmZXJUaW1lKSxcbiAgICAgIF91c2VCdWZmZXIyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUJ1ZmZlciwgMiksXG4gICAgICBfZm9yY2VBbGlnbiA9IF91c2VCdWZmZXIyWzBdLFxuICAgICAgY2FuY2VsRm9yY2VBbGlnbiA9IF91c2VCdWZmZXIyWzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PVxuICAvLyBMaXN0ZW4gZm9yIHRhcmdldCB1cGRhdGVkXG5cblxuICB2YXIgcmVzaXplTW9uaXRvciA9IFJlYWN0LnVzZVJlZih7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7fVxuICB9KTsgLy8gTGlzdGVuIGZvciBzb3VyY2UgdXBkYXRlZFxuXG4gIHZhciBzb3VyY2VSZXNpemVNb25pdG9yID0gUmVhY3QudXNlUmVmKHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHt9XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgIHZhciBwb2ludCA9IGdldFBvaW50KHRhcmdldCk7XG5cbiAgICBpZiAobm9kZVJlZi5jdXJyZW50ICE9PSBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCkge1xuICAgICAgc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCgpO1xuICAgICAgc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsID0gbW9uaXRvclJlc2l6ZShub2RlUmVmLmN1cnJlbnQsIF9mb3JjZUFsaWduKTtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGVSZWYuY3VycmVudC5lbGVtZW50ICE9PSBlbGVtZW50IHx8ICFpc1NhbWVQb2ludChjYWNoZVJlZi5jdXJyZW50LnBvaW50LCBwb2ludCkpIHtcbiAgICAgIF9mb3JjZUFsaWduKCk7IC8vIEFkZCByZXNpemUgb2JzZXJ2ZXJcblxuXG4gICAgICBpZiAocmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCgpO1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwgPSBtb25pdG9yUmVzaXplKGVsZW1lbnQsIF9mb3JjZUFsaWduKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBMaXN0ZW4gZm9yIGRpc2FibGVkIGNoYW5nZVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgX2ZvcmNlQWxpZ24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsRm9yY2VBbGlnbigpO1xuICAgIH1cbiAgfSwgW2Rpc2FibGVkXSk7IC8vIExpc3RlbiBmb3Igd2luZG93IHJlc2l6ZVxuXG4gIHZhciB3aW5SZXNpemVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1vbml0b3JXaW5kb3dSZXNpemUpIHtcbiAgICAgIGlmICghd2luUmVzaXplUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQgPSBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIF9mb3JjZUFsaWduKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdpblJlc2l6ZVJlZi5jdXJyZW50KSB7XG4gICAgICB3aW5SZXNpemVSZWYuY3VycmVudC5yZW1vdmUoKTtcbiAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIFttb25pdG9yV2luZG93UmVzaXplXSk7IC8vIENsZWFyIGFsbCBpZiB1bm1vdW50XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCgpO1xuICAgICAgc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCgpO1xuICAgICAgaWYgKHdpblJlc2l6ZVJlZi5jdXJyZW50KSB3aW5SZXNpemVSZWYuY3VycmVudC5yZW1vdmUoKTtcbiAgICAgIGNhbmNlbEZvcmNlQWxpZ24oKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT0gUmVmID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9yY2VBbGlnbjogZnVuY3Rpb24gZm9yY2VBbGlnbigpIHtcbiAgICAgICAgcmV0dXJuIF9mb3JjZUFsaWduKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PVxuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZE5vZGUpKSB7XG4gICAgY2hpbGROb2RlID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkTm9kZSwge1xuICAgICAgcmVmOiBjb21wb3NlUmVmKGNoaWxkTm9kZS5yZWYsIG5vZGVSZWYpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGROb2RlO1xufTtcblxudmFyIFJlZkFsaWduID0gUmVhY3QuZm9yd2FyZFJlZihBbGlnbik7XG5SZWZBbGlnbi5kaXNwbGF5TmFtZSA9ICdBbGlnbic7XG5leHBvcnQgZGVmYXVsdCBSZWZBbGlnbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChjYWxsYmFjaywgYnVmZmVyKSB7XG4gIHZhciBjYWxsZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBjYW5jZWxUcmlnZ2VyKCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoZm9yY2UpIHtcbiAgICBpZiAoIWNhbGxlZFJlZi5jdXJyZW50IHx8IGZvcmNlID09PSB0cnVlKSB7XG4gICAgICBpZiAoY2FsbGJhY2soKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gTm90IGRlbGF5IHNpbmNlIGNhbGxiYWNrIGNhbmNlbGxlZCBzZWxmXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgY2FuY2VsVHJpZ2dlcigpO1xuICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgfSwgYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsVHJpZ2dlcigpO1xuICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICB9LCBidWZmZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbdHJpZ2dlciwgZnVuY3Rpb24gKCkge1xuICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgY2FuY2VsVHJpZ2dlcigpO1xuICB9XTtcbn0pOyIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBBbGlnbiBmcm9tICcuL0FsaWduJztcbmV4cG9ydCBkZWZhdWx0IEFsaWduOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NvbnRhaW5zXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lUG9pbnQocHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbmV4dCkgcmV0dXJuIHRydWU7XG4gIGlmICghcHJldiB8fCAhbmV4dCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICgncGFnZVgnIGluIG5leHQgJiYgJ3BhZ2VZJyBpbiBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXYucGFnZVggPT09IG5leHQucGFnZVggJiYgcHJldi5wYWdlWSA9PT0gbmV4dC5wYWdlWTtcbiAgfVxuXG4gIGlmICgnY2xpZW50WCcgaW4gbmV4dCAmJiAnY2xpZW50WScgaW4gbmV4dCkge1xuICAgIHJldHVybiBwcmV2LmNsaWVudFggPT09IG5leHQuY2xpZW50WCAmJiBwcmV2LmNsaWVudFkgPT09IG5leHQuY2xpZW50WTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlRm9jdXMoYWN0aXZlRWxlbWVudCwgY29udGFpbmVyKSB7XG4gIC8vIEZvY3VzIGJhY2sgaWYgaXMgaW4gdGhlIGNvbnRhaW5lclxuICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBjb250YWlucyhjb250YWluZXIsIGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW9uaXRvclJlc2l6ZShlbGVtZW50LCBjYWxsYmFjaykge1xuICB2YXIgcHJldldpZHRoID0gbnVsbDtcbiAgdmFyIHByZXZIZWlnaHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG9uUmVzaXplKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAxKSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjJbMF0udGFyZ2V0O1xuXG4gICAgdmFyIF90YXJnZXQkZ2V0Qm91bmRpbmdDbCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC5oZWlnaHQ7XG5cbiAgICB2YXIgZml4ZWRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xuICAgIHZhciBmaXhlZEhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcblxuICAgIGlmIChwcmV2V2lkdGggIT09IGZpeGVkV2lkdGggfHwgcHJldkhlaWdodCAhPT0gZml4ZWRIZWlnaHQpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgd2lkdGg6IGZpeGVkV2lkdGgsXG4gICAgICAgIGhlaWdodDogZml4ZWRIZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZXaWR0aCA9IGZpeGVkV2lkdGg7XG4gICAgcHJldkhlaWdodCA9IGZpeGVkSGVpZ2h0O1xuICB9XG5cbiAgdmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG9uUmVzaXplKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfTtcbn0iLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2RlZmF1bHQtcHJvcHMtbWF0Y2gtcHJvcC10eXBlcywgcmVhY3Qvbm8tbXVsdGktY29tcCwgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tICdyYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCB7IGdldFRyYW5zaXRpb25OYW1lLCBhbmltYXRpb25FbmROYW1lLCB0cmFuc2l0aW9uRW5kTmFtZSwgc3VwcG9ydFRyYW5zaXRpb24gfSBmcm9tICcuL3V0aWwvbW90aW9uJztcblxudmFyIFNUQVRVU19OT05FID0gJ25vbmUnO1xudmFyIFNUQVRVU19BUFBFQVIgPSAnYXBwZWFyJztcbnZhciBTVEFUVVNfRU5URVIgPSAnZW50ZXInO1xudmFyIFNUQVRVU19MRUFWRSA9ICdsZWF2ZSc7XG5cbi8qKlxuICogYHRyYW5zaXRpb25TdXBwb3J0YCBpcyB1c2VkIGZvciBub25lIHRyYW5zaXRpb24gdGVzdCBjYXNlLlxuICogRGVmYXVsdCB3ZSB1c2UgYnJvd3NlciB0cmFuc2l0aW9uIGV2ZW50IHN1cHBvcnQgY2hlY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5DU1NNb3Rpb24oY29uZmlnKSB7XG4gIHZhciB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZztcbiAgdmFyIGZvcndhcmRSZWYgPSAhIVJlYWN0LmZvcndhcmRSZWY7XG5cbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgdHJhbnNpdGlvblN1cHBvcnQgPSBjb25maWcudHJhbnNpdGlvblN1cHBvcnQ7XG4gICAgZm9yd2FyZFJlZiA9ICdmb3J3YXJkUmVmJyBpbiBjb25maWcgPyBjb25maWcuZm9yd2FyZFJlZiA6IGZvcndhcmRSZWY7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1cHBvcnRUcmFuc2l0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuICEhKHByb3BzLm1vdGlvbk5hbWUgJiYgdHJhbnNpdGlvblN1cHBvcnQpO1xuICB9XG5cbiAgdmFyIENTU01vdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENTU01vdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDU1NNb3Rpb24oKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTTW90aW9uKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENTU01vdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENTU01vdGlvbikpLmNhbGwodGhpcykpO1xuXG4gICAgICBfdGhpcy5vbkRvbVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZS5zdGF0dXMsXG4gICAgICAgICAgICBuZXdTdGF0dXMgPSBfdGhpcyRzdGF0ZS5uZXdTdGF0dXM7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25BcHBlYXJTdGFydCA9IF90aGlzJHByb3BzLm9uQXBwZWFyU3RhcnQsXG4gICAgICAgICAgICBvbkVudGVyU3RhcnQgPSBfdGhpcyRwcm9wcy5vbkVudGVyU3RhcnQsXG4gICAgICAgICAgICBvbkxlYXZlU3RhcnQgPSBfdGhpcyRwcm9wcy5vbkxlYXZlU3RhcnQsXG4gICAgICAgICAgICBvbkFwcGVhckFjdGl2ZSA9IF90aGlzJHByb3BzLm9uQXBwZWFyQWN0aXZlLFxuICAgICAgICAgICAgb25FbnRlckFjdGl2ZSA9IF90aGlzJHByb3BzLm9uRW50ZXJBY3RpdmUsXG4gICAgICAgICAgICBvbkxlYXZlQWN0aXZlID0gX3RoaXMkcHJvcHMub25MZWF2ZUFjdGl2ZSxcbiAgICAgICAgICAgIG1vdGlvbkFwcGVhciA9IF90aGlzJHByb3BzLm1vdGlvbkFwcGVhcixcbiAgICAgICAgICAgIG1vdGlvbkVudGVyID0gX3RoaXMkcHJvcHMubW90aW9uRW50ZXIsXG4gICAgICAgICAgICBtb3Rpb25MZWF2ZSA9IF90aGlzJHByb3BzLm1vdGlvbkxlYXZlO1xuXG5cbiAgICAgICAgaWYgKCFpc1N1cHBvcnRUcmFuc2l0aW9uKF90aGlzLnByb3BzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV2ZW50IGluamVjdGlvblxuICAgICAgICB2YXIgJGVsZSA9IF90aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKF90aGlzLiRjYWNoZUVsZSAhPT0gJGVsZSkge1xuICAgICAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoX3RoaXMuJGNhY2hlRWxlKTtcbiAgICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKCRlbGUpO1xuICAgICAgICAgIF90aGlzLiRjYWNoZUVsZSA9ICRlbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IHN0YXR1c1xuICAgICAgICBpZiAobmV3U3RhdHVzICYmIHN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiBtb3Rpb25BcHBlYXIpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25BcHBlYXJTdGFydCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQWN0aXZlU3RhdHVzKG9uQXBwZWFyQWN0aXZlLCBTVEFUVVNfQVBQRUFSKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgJiYgc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgbW90aW9uRW50ZXIpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25FbnRlclN0YXJ0LCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMob25FbnRlckFjdGl2ZSwgU1RBVFVTX0VOVEVSKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgJiYgc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgbW90aW9uTGVhdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25MZWF2ZVN0YXJ0LCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMob25MZWF2ZUFjdGl2ZSwgU1RBVFVTX0xFQVZFKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3Rpb25FbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgICAgc3RhdHVzID0gX3RoaXMkc3RhdGUyLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c0FjdGl2ZSA9IF90aGlzJHN0YXRlMi5zdGF0dXNBY3RpdmU7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uQXBwZWFyRW5kID0gX3RoaXMkcHJvcHMyLm9uQXBwZWFyRW5kLFxuICAgICAgICAgICAgb25FbnRlckVuZCA9IF90aGlzJHByb3BzMi5vbkVudGVyRW5kLFxuICAgICAgICAgICAgb25MZWF2ZUVuZCA9IF90aGlzJHByb3BzMi5vbkxlYXZlRW5kO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uQXBwZWFyRW5kLCB7IHN0YXR1czogU1RBVFVTX05PTkUgfSwgZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0VOVEVSICYmIHN0YXR1c0FjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkVudGVyRW5kLCB7IHN0YXR1czogU1RBVFVTX05PTkUgfSwgZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0xFQVZFICYmIHN0YXR1c0FjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkxlYXZlRW5kLCB7IHN0YXR1czogU1RBVFVTX05PTkUgfSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXROb2RlUmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGludGVybmFsUmVmID0gX3RoaXMucHJvcHMuaW50ZXJuYWxSZWY7XG5cbiAgICAgICAgX3RoaXMubm9kZSA9IG5vZGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnRlcm5hbFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGludGVybmFsUmVmKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGludGVybmFsUmVmICYmICdjdXJyZW50JyBpbiBpbnRlcm5hbFJlZikge1xuICAgICAgICAgIGludGVybmFsUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmaW5kRE9NTm9kZShfdGhpcy5ub2RlIHx8IF90aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZhbGxiYWNrIHRvIGNhY2hlIGVsZW1lbnQuXG4gICAgICAgICAgICogVGhpcyBpcyBvbmx5IGhhcHBlbiB3aGVuIGBtb3Rpb25EZWFkbGluZWAgdHJpZ2dlciBidXQgZWxlbWVudCByZW1vdmVkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiBfdGhpcy4kY2FjaGVFbGU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoJGVsZSkge1xuICAgICAgICBpZiAoISRlbGUpIHJldHVybjtcblxuICAgICAgICAkZWxlLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgICAgJGVsZS5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoJGVsZSkge1xuICAgICAgICBpZiAoISRlbGUpIHJldHVybjtcblxuICAgICAgICAkZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgICAgJGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdHlsZUZ1bmMsIGFkZGl0aW9uYWxTdGF0ZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGF0dXNTdHlsZSA9IHN0eWxlRnVuYyA/IHN0eWxlRnVuYyhfdGhpcy5nZXRFbGVtZW50KCksIGV2ZW50KSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1c1N0eWxlID09PSBmYWxzZSB8fCBfdGhpcy5fZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG5leHRTdGVwID0gdm9pZCAwO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBuZXh0U3RlcCA9IGZ1bmN0aW9uIG5leHRTdGVwKCkge1xuICAgICAgICAgICAgX3RoaXMubmV4dEZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICAgIHN0YXR1c1N0eWxlOiB0eXBlb2Ygc3RhdHVzU3R5bGUgPT09ICdvYmplY3QnID8gc3RhdHVzU3R5bGUgOiBudWxsLFxuICAgICAgICAgIG5ld1N0YXR1czogZmFsc2VcbiAgICAgICAgfSwgYWRkaXRpb25hbFN0YXRlKSwgbmV4dFN0ZXApOyAvLyBUcmlnZ2VyIGJlZm9yZSBuZXh0IGZyYW1lICYgYWZ0ZXIgYGNvbXBvbmVudERpZE1vdW50YFxuICAgICAgfTtcblxuICAgICAgX3RoaXMudXBkYXRlQWN0aXZlU3RhdHVzID0gZnVuY3Rpb24gKHN0eWxlRnVuYywgY3VycmVudFN0YXR1cykge1xuICAgICAgICAvLyBgc2V0U3RhdGVgIHVzZSBgcG9zdE1lc3NhZ2VgIHRvIHRyaWdnZXIgYXQgdGhlIGVuZCBvZiBmcmFtZS5cbiAgICAgICAgLy8gTGV0J3MgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB1cGRhdGUgbmV3IHN0YXRlIGluIG5leHQgZnJhbWUuXG4gICAgICAgIF90aGlzLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IF90aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgICAgIGlmIChzdGF0dXMgIT09IGN1cnJlbnRTdGF0dXMpIHJldHVybjtcblxuICAgICAgICAgIHZhciBtb3Rpb25EZWFkbGluZSA9IF90aGlzLnByb3BzLm1vdGlvbkRlYWRsaW5lO1xuXG5cbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMoc3R5bGVGdW5jLCB7IHN0YXR1c0FjdGl2ZTogdHJ1ZSB9KTtcblxuICAgICAgICAgIGlmIChtb3Rpb25EZWFkbGluZSA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpcy5vbk1vdGlvbkVuZCh7XG4gICAgICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBtb3Rpb25EZWFkbGluZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm5leHRGcmFtZSA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIF90aGlzLmNhbmNlbE5leHRGcmFtZSgpO1xuICAgICAgICBfdGhpcy5yYWYgPSByYWYoZnVuYyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jYW5jZWxOZXh0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5yYWYpIHtcbiAgICAgICAgICByYWYuY2FuY2VsKF90aGlzLnJhZik7XG4gICAgICAgICAgX3RoaXMucmFmID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHN0YXR1czogU1RBVFVTX05PTkUsXG4gICAgICAgIHN0YXR1c0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIG5ld1N0YXR1czogZmFsc2UsXG4gICAgICAgIHN0YXR1c1N0eWxlOiBudWxsXG4gICAgICB9O1xuICAgICAgX3RoaXMuJGNhY2hlRWxlID0gbnVsbDtcbiAgICAgIF90aGlzLm5vZGUgPSBudWxsO1xuICAgICAgX3RoaXMucmFmID0gbnVsbDtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ1NTTW90aW9uLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm9uRG9tVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMub25Eb21VcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLiRjYWNoZUVsZSk7XG4gICAgICAgIHRoaXMuY2FuY2VsTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF9zdGF0ZS5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNBY3RpdmUgPSBfc3RhdGUuc3RhdHVzQWN0aXZlLFxuICAgICAgICAgICAgc3RhdHVzU3R5bGUgPSBfc3RhdGUuc3RhdHVzU3R5bGU7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBtb3Rpb25OYW1lID0gX3Byb3BzLm1vdGlvbk5hbWUsXG4gICAgICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgICAgICByZW1vdmVPbkxlYXZlID0gX3Byb3BzLnJlbW92ZU9uTGVhdmUsXG4gICAgICAgICAgICBsZWF2ZWRDbGFzc05hbWUgPSBfcHJvcHMubGVhdmVkQ2xhc3NOYW1lLFxuICAgICAgICAgICAgZXZlbnRQcm9wcyA9IF9wcm9wcy5ldmVudFByb3BzO1xuXG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX05PTkUgfHwgIWlzU3VwcG9ydFRyYW5zaXRpb24odGhpcy5wcm9wcykpIHtcbiAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBldmVudFByb3BzKSwgdGhpcy5zZXROb2RlUmVmKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZW1vdmVPbkxlYXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIGV2ZW50UHJvcHMsIHsgY2xhc3NOYW1lOiBsZWF2ZWRDbGFzc05hbWUgfSksIHRoaXMuc2V0Tm9kZVJlZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIGV2ZW50UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgZ2V0VHJhbnNpdGlvbk5hbWUobW90aW9uTmFtZSwgc3RhdHVzKSwgc3RhdHVzICE9PSBTVEFUVVNfTk9ORSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgZ2V0VHJhbnNpdGlvbk5hbWUobW90aW9uTmFtZSwgc3RhdHVzICsgJy1hY3RpdmUnKSwgc3RhdHVzICE9PSBTVEFUVVNfTk9ORSAmJiBzdGF0dXNBY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIG1vdGlvbk5hbWUsIHR5cGVvZiBtb3Rpb25OYW1lID09PSAnc3RyaW5nJyksIF9jbGFzc05hbWVzKSksXG4gICAgICAgICAgc3R5bGU6IHN0YXR1c1N0eWxlXG4gICAgICAgIH0pLCB0aGlzLnNldE5vZGVSZWYpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICAgICAgdmFyIHByZXZQcm9wcyA9IF9yZWYucHJldlByb3BzLFxuICAgICAgICAgICAgcHJldlN0YXR1cyA9IF9yZWYuc3RhdHVzO1xuXG4gICAgICAgIGlmICghaXNTdXBwb3J0VHJhbnNpdGlvbihwcm9wcykpIHJldHVybiB7fTtcblxuICAgICAgICB2YXIgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgICAgICBtb3Rpb25BcHBlYXIgPSBwcm9wcy5tb3Rpb25BcHBlYXIsXG4gICAgICAgICAgICBtb3Rpb25FbnRlciA9IHByb3BzLm1vdGlvbkVudGVyLFxuICAgICAgICAgICAgbW90aW9uTGVhdmUgPSBwcm9wcy5tb3Rpb25MZWF2ZSxcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlSW1tZWRpYXRlbHkgPSBwcm9wcy5tb3Rpb25MZWF2ZUltbWVkaWF0ZWx5O1xuXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgc3RhdHVzIGlmIHByb3Agc2V0IHRvIGZhbHNlXG4gICAgICAgIGlmIChwcmV2U3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmICFtb3Rpb25BcHBlYXIgfHwgcHJldlN0YXR1cyA9PT0gU1RBVFVTX0VOVEVSICYmICFtb3Rpb25FbnRlciB8fCBwcmV2U3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgIW1vdGlvbkxlYXZlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX05PTkU7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBlYXJcbiAgICAgICAgaWYgKCFwcmV2UHJvcHMgJiYgdmlzaWJsZSAmJiBtb3Rpb25BcHBlYXIpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfQVBQRUFSO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnRlclxuICAgICAgICBpZiAocHJldlByb3BzICYmICFwcmV2UHJvcHMudmlzaWJsZSAmJiB2aXNpYmxlICYmIG1vdGlvbkVudGVyKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX0VOVEVSO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZWF2ZVxuICAgICAgICBpZiAocHJldlByb3BzICYmIHByZXZQcm9wcy52aXNpYmxlICYmICF2aXNpYmxlICYmIG1vdGlvbkxlYXZlIHx8ICFwcmV2UHJvcHMgJiYgbW90aW9uTGVhdmVJbW1lZGlhdGVseSAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19MRUFWRTtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDU1NNb3Rpb247XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBDU1NNb3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgbW90aW9uRW50ZXI6IHRydWUsXG4gICAgbW90aW9uQXBwZWFyOiB0cnVlLFxuICAgIG1vdGlvbkxlYXZlOiB0cnVlLFxuICAgIHJlbW92ZU9uTGVhdmU6IHRydWVcbiAgfTtcblxuXG4gIGlmICghZm9yd2FyZFJlZikge1xuICAgIHJldHVybiBDU1NNb3Rpb247XG4gIH1cblxuICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoeyBpbnRlcm5hbFJlZjogcmVmIH0sIHByb3BzKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5DU1NNb3Rpb24oc3VwcG9ydFRyYW5zaXRpb24pOyIsInZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vLyA9PT09PT09PT09PT09PT09PSBUcmFuc2l0aW9uID09PT09PT09PT09PT09PT09XG4vLyBFdmVudCB3cmFwcGVyLiBDb3B5IGZyb20gcmVhY3Qgc291cmNlIGNvZGVcbmZ1bmN0aW9uIG1ha2VQcmVmaXhNYXAoc3R5bGVQcm9wLCBldmVudE5hbWUpIHtcbiAgdmFyIHByZWZpeGVzID0ge307XG5cbiAgcHJlZml4ZXNbc3R5bGVQcm9wLnRvTG93ZXJDYXNlKCldID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHByZWZpeGVzWydXZWJraXQnICsgc3R5bGVQcm9wXSA9ICd3ZWJraXQnICsgZXZlbnROYW1lO1xuICBwcmVmaXhlc1snTW96JyArIHN0eWxlUHJvcF0gPSAnbW96JyArIGV2ZW50TmFtZTtcbiAgcHJlZml4ZXNbJ21zJyArIHN0eWxlUHJvcF0gPSAnTVMnICsgZXZlbnROYW1lO1xuICBwcmVmaXhlc1snTycgKyBzdHlsZVByb3BdID0gJ28nICsgZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZXMoZG9tU3VwcG9ydCwgd2luKSB7XG4gIHZhciBwcmVmaXhlcyA9IHtcbiAgICBhbmltYXRpb25lbmQ6IG1ha2VQcmVmaXhNYXAoJ0FuaW1hdGlvbicsICdBbmltYXRpb25FbmQnKSxcbiAgICB0cmFuc2l0aW9uZW5kOiBtYWtlUHJlZml4TWFwKCdUcmFuc2l0aW9uJywgJ1RyYW5zaXRpb25FbmQnKVxuICB9O1xuXG4gIGlmIChkb21TdXBwb3J0KSB7XG4gICAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW4pKSB7XG4gICAgICBkZWxldGUgcHJlZml4ZXMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW4pKSB7XG4gICAgICBkZWxldGUgcHJlZml4ZXMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVmaXhlcztcbn1cblxudmFyIHZlbmRvclByZWZpeGVzID0gZ2V0VmVuZG9yUHJlZml4ZXMoY2FuVXNlRE9NLCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9KTtcblxudmFyIHN0eWxlID0ge307XG5cbmlmIChjYW5Vc2VET00pIHtcbiAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcbn1cblxudmFyIHByZWZpeGVkRXZlbnROYW1lcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoZXZlbnROYW1lKSB7XG4gIGlmIChwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXSkge1xuICAgIHJldHVybiBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgfVxuXG4gIHZhciBwcmVmaXhNYXAgPSB2ZW5kb3JQcmVmaXhlc1tldmVudE5hbWVdO1xuXG4gIGlmIChwcmVmaXhNYXApIHtcbiAgICB2YXIgc3R5bGVQcm9wTGlzdCA9IE9iamVjdC5rZXlzKHByZWZpeE1hcCk7XG4gICAgdmFyIGxlbiA9IHN0eWxlUHJvcExpc3QubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBzdHlsZVByb3AgPSBzdHlsZVByb3BMaXN0W2ldO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcmVmaXhNYXAsIHN0eWxlUHJvcCkgJiYgc3R5bGVQcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdID0gcHJlZml4TWFwW3N0eWxlUHJvcF07XG4gICAgICAgIHJldHVybiBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCB2YXIgYW5pbWF0aW9uRW5kTmFtZSA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKCdhbmltYXRpb25lbmQnKTtcbmV4cG9ydCB2YXIgdHJhbnNpdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgndHJhbnNpdGlvbmVuZCcpO1xuZXhwb3J0IHZhciBzdXBwb3J0VHJhbnNpdGlvbiA9ICEhKGFuaW1hdGlvbkVuZE5hbWUgJiYgdHJhbnNpdGlvbkVuZE5hbWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUodHJhbnNpdGlvbk5hbWUsIHRyYW5zaXRpb25UeXBlKSB7XG4gIGlmICghdHJhbnNpdGlvbk5hbWUpIHJldHVybiBudWxsO1xuXG4gIGlmICh0eXBlb2YgdHJhbnNpdGlvbk5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHR5cGUgPSB0cmFuc2l0aW9uVHlwZS5yZXBsYWNlKC8tXFx3L2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lW3R5cGVdO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zaXRpb25OYW1lICsgJy0nICsgdHJhbnNpdGlvblR5cGU7XG59IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL1N1Yk1lbnUnO1xuaW1wb3J0IHsgZ2V0V2lkdGgsIHNldFN0eWxlLCBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xudmFyIE1FTlVJVEVNX09WRVJGTE9XRURfQ0xBU1NOQU1FID0gJ21lbnVpdGVtLW92ZXJmbG93ZWQnO1xudmFyIEZMT0FUX1BSRUNJU0lPTl9BREpVU1QgPSAwLjU7XG5cbnZhciBET01XcmFwID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIERPTVdyYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRE9NV3JhcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERPTVdyYXApO1xuXG4gICAgZnVuY3Rpb24gRE9NV3JhcCgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVdyYXApO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgX3RoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgX3RoaXMubXV0YXRpb25PYnNlcnZlciA9IG51bGw7IC8vIG9yaWdpbmFsIHNjcm9sbCBzaXplIG9mIHRoZSBsaXN0XG5cbiAgICAgIF90aGlzLm9yaWdpbmFsVG90YWxXaWR0aCA9IDA7IC8vIGNvcHkgb2Ygb3ZlcmZsb3dlZCBpdGVtc1xuXG4gICAgICBfdGhpcy5vdmVyZmxvd2VkSXRlbXMgPSBbXTsgLy8gY2FjaGUgaXRlbSBvZiB0aGUgb3JpZ2luYWwgaXRlbXMgKHNvIHdlIGNhbiB0cmFjayB0aGUgc2l6ZSBhbmQgb3JkZXIpXG5cbiAgICAgIF90aGlzLm1lbnVJdGVtU2l6ZXMgPSBbXTtcbiAgICAgIF90aGlzLmNhbmNlbEZyYW1lSWQgPSBudWxsO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXg6IHVuZGVmaW5lZFxuICAgICAgfTsgLy8gZ2V0IGFsbCB2YWxpZCBtZW51SXRlbSBub2Rlc1xuXG4gICAgICBfdGhpcy5nZXRNZW51SXRlbU5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gX3RoaXMucHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgdWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICAgICAgaWYgKCF1bCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSAvLyBmaWx0ZXIgb3V0IGFsbCBvdmVyZmxvd2VkIGluZGljYXRvciBwbGFjZWhvbGRlclxuXG5cbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodWwuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlLmNsYXNzTmFtZS5zcGxpdCgnICcpLmluZGV4T2YoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vdmVyZmxvd2VkLXN1Ym1lbnVcIikpIDwgMDtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0gPSBmdW5jdGlvbiAoa2V5UHJlZml4LCBvdmVyZmxvd2VkSXRlbXMsIHJlbmRlclBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF90aGlzJHByb3BzLm92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgICAgbW9kZSA9IF90aGlzJHByb3BzLm1vZGUsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lO1xuXG4gICAgICAgIGlmIChsZXZlbCAhPT0gMSB8fCBtb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAvLyBwdXQgYWxsIHRoZSBvdmVyZmxvd2VkIGl0ZW0gaW5zaWRlIGEgc3VibWVudVxuICAgICAgICAvLyB3aXRoIGEgdGl0bGUgb2Ygb3ZlcmZsb3cgaW5kaWNhdG9yICgnLi4uJylcblxuXG4gICAgICAgIHZhciBjb3B5ID0gX3RoaXMucHJvcHMuY2hpbGRyZW5bMF07XG5cbiAgICAgICAgdmFyIF9jb3B5JHByb3BzID0gY29weS5wcm9wcyxcbiAgICAgICAgICAgIHRocm93QXdheSA9IF9jb3B5JHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgdGl0bGUgPSBfY29weSRwcm9wcy50aXRsZSxcbiAgICAgICAgICAgIHByb3BTdHlsZSA9IF9jb3B5JHByb3BzLnN0eWxlLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY29weSRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJ0aXRsZVwiLCBcInN0eWxlXCJdKTtcblxuICAgICAgICB2YXIgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBwcm9wU3R5bGUpO1xuXG4gICAgICAgIHZhciBrZXkgPSBcIlwiLmNvbmNhdChrZXlQcmVmaXgsIFwiLW92ZXJmbG93ZWQtaW5kaWNhdG9yXCIpO1xuICAgICAgICB2YXIgZXZlbnRLZXkgPSBcIlwiLmNvbmNhdChrZXlQcmVmaXgsIFwiLW92ZXJmbG93ZWQtaW5kaWNhdG9yXCIpO1xuXG4gICAgICAgIGlmIChvdmVyZmxvd2VkSXRlbXMubGVuZ3RoID09PSAwICYmIHJlbmRlclBsYWNlaG9sZGVyICE9PSB0cnVlKSB7XG4gICAgICAgICAgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwge30sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlbmRlclBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwge30sIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgLy8gcHJldmVudCBmcm9tIHRha2luZyBub3JtYWwgZG9tIHNwYWNlXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGtleSA9IFwiXCIuY29uY2F0KGtleSwgXCItcGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgZXZlbnRLZXkgPSBcIlwiLmNvbmNhdChldmVudEtleSwgXCItcGxhY2Vob2xkZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSB0aGVtZSA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0aGVtZSkgOiAnJztcbiAgICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgaWYgKHJlc3Rba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvcHNba10gPSByZXN0W2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Yk1lbnUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHRpdGxlOiBvdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vdmVyZmxvd2VkLXN1Ym1lbnVcIiksXG4gICAgICAgICAgcG9wdXBDbGFzc05hbWU6IHBvcHVwQ2xhc3NOYW1lXG4gICAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgZXZlbnRLZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSksIG92ZXJmbG93ZWRJdGVtcyk7XG4gICAgICB9OyAvLyBtZW1vcml6ZSByZW5kZXJlZCBtZW51U2l6ZVxuXG5cbiAgICAgIF90aGlzLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5tb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICAgICAgaWYgKCF1bCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1bENoaWxkcmVuTm9kZXMgPSB1bC5jaGlsZHJlbjtcblxuICAgICAgICBpZiAoIXVsQ2hpbGRyZW5Ob2RlcyB8fCB1bENoaWxkcmVuTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RPdmVyZmxvd2VkSW5kaWNhdG9yUGxhY2Vob2xkZXIgPSB1bC5jaGlsZHJlblt1bENoaWxkcmVuTm9kZXMubGVuZ3RoIC0gMV07IC8vIG5lZWQgbGFzdCBvdmVyZmxvd2VkIGluZGljYXRvciBmb3IgY2FsY3VsYXRpbmcgbGVuZ3RoO1xuXG4gICAgICAgIHNldFN0eWxlKGxhc3RPdmVyZmxvd2VkSW5kaWNhdG9yUGxhY2Vob2xkZXIsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICAgIHZhciBtZW51SXRlbU5vZGVzID0gX3RoaXMuZ2V0TWVudUl0ZW1Ob2RlcygpOyAvLyByZXNldCBkaXNwbGF5IGF0dHJpYnV0ZSBmb3IgYWxsIGhpZGRlbiBlbGVtZW50cyBjYXVzZWQgYnkgb3ZlcmZsb3cgdG8gY2FsY3VsYXRlIHVwZGF0ZWQgd2lkdGhcbiAgICAgICAgLy8gYW5kIHRoZW4gcmVzZXQgdG8gb3JpZ2luYWwgc3RhdGUgYWZ0ZXIgd2lkdGggY2FsY3VsYXRpb25cblxuXG4gICAgICAgIHZhciBvdmVyZmxvd2VkSXRlbXMgPSBtZW51SXRlbU5vZGVzLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLmNsYXNzTmFtZS5zcGxpdCgnICcpLmluZGV4T2YoTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUUpID49IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBvdmVyZmxvd2VkSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHNldFN0eWxlKGMsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMubWVudUl0ZW1TaXplcyA9IG1lbnVJdGVtTm9kZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFdpZHRoKGMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3ZlcmZsb3dlZEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBzZXRTdHlsZShjLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5vdmVyZmxvd2VkSW5kaWNhdG9yV2lkdGggPSBnZXRXaWR0aCh1bC5jaGlsZHJlblt1bC5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XG4gICAgICAgIF90aGlzLm9yaWdpbmFsVG90YWxXaWR0aCA9IF90aGlzLm1lbnVJdGVtU2l6ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cikge1xuICAgICAgICAgIHJldHVybiBhY2MgKyBjdXI7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZVJlc2l6ZSgpOyAvLyBwcmV2ZW50IHRoZSBvdmVyZmxvd2VkIGluZGljYXRvciBmcm9tIHRha2luZyBzcGFjZTtcblxuXG4gICAgICAgIHNldFN0eWxlKGxhc3RPdmVyZmxvd2VkSW5kaWNhdG9yUGxhY2Vob2xkZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgICBpZiAoIXVsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZHRoID0gZ2V0V2lkdGgodWwpO1xuICAgICAgICBfdGhpcy5vdmVyZmxvd2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRTdW1XaWR0aCA9IDA7IC8vIGluZGV4IGZvciBsYXN0IHZpc2libGUgY2hpbGQgaW4gaG9yaXpvbnRhbCBtb2RlXG5cbiAgICAgICAgdmFyIGxhc3RWaXNpYmxlSW5kZXg7IC8vIGZsb2F0IG51bWJlciBjb21wYXJpc29uIGNvdWxkIGJlIHByb2JsZW1hdGljXG4gICAgICAgIC8vIGUuZy4gMC4xICsgMC4yID4gMC4zID09PT09PiB0cnVlXG4gICAgICAgIC8vIHRodXMgdXNpbmcgRkxPQVRfUFJFQ0lTSU9OX0FESlVTVCBhcyBidWZmZXIgdG8gaGVscCB0aGUgc2l0dWF0aW9uXG5cbiAgICAgICAgaWYgKF90aGlzLm9yaWdpbmFsVG90YWxXaWR0aCA+IHdpZHRoICsgRkxPQVRfUFJFQ0lTSU9OX0FESlVTVCkge1xuICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSAtMTtcblxuICAgICAgICAgIF90aGlzLm1lbnVJdGVtU2l6ZXMuZm9yRWFjaChmdW5jdGlvbiAobGlXaWR0aCkge1xuICAgICAgICAgICAgY3VycmVudFN1bVdpZHRoICs9IGxpV2lkdGg7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U3VtV2lkdGggKyBfdGhpcy5vdmVyZmxvd2VkSW5kaWNhdG9yV2lkdGggPD0gd2lkdGgpIHtcbiAgICAgICAgICAgICAgbGFzdFZpc2libGVJbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXg6IGxhc3RWaXNpYmxlSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERPTVdyYXAsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGV2ZWwgPT09IDEgJiYgdGhpcy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB2YXIgbWVudVVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgICAgICBpZiAoIW1lbnVVbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBjYW5jZWxGcmFtZUlkID0gX3RoaXMyLmNhbmNlbEZyYW1lSWQ7XG4gICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNhbmNlbEZyYW1lSWQpO1xuICAgICAgICAgICAgICBfdGhpczIuY2FuY2VsRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpczIuc2V0Q2hpbGRyZW5XaWR0aEFuZFJlc2l6ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBbXS5zbGljZS5jYWxsKG1lbnVVbC5jaGlsZHJlbikuY29uY2F0KG1lbnVVbCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIF90aGlzMi5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKG1lbnVVbC5jaGlsZHJlbikuY29uY2F0KG1lbnVVbCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF90aGlzMi5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG1lbnVVbCwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICBzdWJUcmVlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY2FuY2VsRnJhbWVJZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckNoaWxkcmVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgLy8gbmVlZCB0byB0YWtlIGNhcmUgb2Ygb3ZlcmZsb3dlZCBpdGVtcyBpbiBob3Jpem9udGFsIG1vZGVcbiAgICAgICAgdmFyIGxhc3RWaXNpYmxlSW5kZXggPSB0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIHJldHVybiAoY2hpbGRyZW4gfHwgW10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjaGlsZE5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBjaGlsZE5vZGU7XG5cbiAgICAgICAgICBpZiAoX3RoaXMzLnByb3BzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdmFyIG92ZXJmbG93ZWQgPSBfdGhpczMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtKGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgW10pO1xuXG4gICAgICAgICAgICBpZiAobGFzdFZpc2libGVJbmRleCAhPT0gdW5kZWZpbmVkICYmIF90aGlzMy5wcm9wcy5jbGFzc05hbWUuaW5kZXhPZihcIlwiLmNvbmNhdChfdGhpczMucHJvcHMucHJlZml4Q2xzLCBcIi1yb290XCIpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGFzdFZpc2libGVJbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGROb2RlLCAvLyDov5nph4zkv67mlLkgZXZlbnRLZXkg5piv5Li65LqG6Ziy5q2i6ZqQ6JeP54q25oCB5LiL6L+Y5Lya6Kem5Y+RIG9wZW5rZXlzIOS6i+S7tlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV2ZW50S2V5OiBcIlwiLmNvbmNhdChjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIFwiLWhpZGRlblwiKSxcblxuICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgKiBMZWdhY3kgY29kZS4gSGVyZSBgY2xhc3NOYW1lYCBuZXZlciB1c2VkOlxuICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51L2NvbW1pdC80Y2Q2YjQ5ZmNlOWQxMTY3MjZmNGVhMDBkZGE4NTMyNWQ2ZjI2NTAwI2RpZmYtZTJmYTQ4Zjc1YzJkZDIzMTgyOTVjZGU0Mjg1NTZhNzZSMjQwXG4gICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxhc3RWaXNpYmxlSW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLm92ZXJmbG93ZWRJdGVtcyA9IGNoaWxkcmVuLnNsaWNlKGxhc3RWaXNpYmxlSW5kZXggKyAxKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgLy8gY2hpbGRyZW5baW5kZXhdLmtleSB3aWxsIGJlY29tZSAnLiRrZXknIGluIGNsb25lIGJ5IGRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG92ZXJ3cml0ZSB3aXRoIHRoZSBjb3JyZWN0IGtleSBleHBsaWNpdGx5XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYy5wcm9wcy5ldmVudEtleSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsLWxlZnQnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd2VkID0gX3RoaXMzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbShjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIF90aGlzMy5vdmVyZmxvd2VkSXRlbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZXQgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFjYyksIFtvdmVyZmxvd2VkLCBpdGVtXSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAvLyBuZWVkIGEgcGxhY2Vob2xkZXIgZm9yIGNhbGN1bGF0aW5nIG92ZXJmbG93ZWQgaW5kaWNhdG9yIHdpZHRoXG4gICAgICAgICAgICAgIHJldC5wdXNoKF90aGlzMy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0oY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBbXSwgdHJ1ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFjYyksIFtpdGVtXSk7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczIudmlzaWJsZSxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yID0gX3RoaXMkcHJvcHMyLm92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMyLm1vZGUsXG4gICAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzMi5sZXZlbCxcbiAgICAgICAgICAgIHRhZyA9IF90aGlzJHByb3BzMi50YWcsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMyLnRoZW1lLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczIsIFtcInZpc2libGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJvdmVyZmxvd2VkSW5kaWNhdG9yXCIsIFwibW9kZVwiLCBcImxldmVsXCIsIFwidGFnXCIsIFwiY2hpbGRyZW5cIiwgXCJ0aGVtZVwiXSk7XG5cbiAgICAgICAgdmFyIFRhZyA9IHRhZztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCBPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgdGhpcy5yZW5kZXJDaGlsZHJlbihjaGlsZHJlbikpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBET01XcmFwO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgRE9NV3JhcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICcnXG4gIH07XG4gIHJldHVybiBET01XcmFwO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01XcmFwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBEaXZpZGVyID0gZnVuY3Rpb24gRGl2aWRlcihfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHJvb3RQcmVmaXhDbHMgPSBfcmVmLnJvb3RQcmVmaXhDbHMsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZGl2aWRlclwiKSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSk7XG59O1xuXG5EaXZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgLy8gVG8gZml4IGtleWJvYXJkIFVYLlxuICBkaXNhYmxlZDogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGl2aWRlcjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyLCBjcmVhdGUgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCBTdWJQb3B1cE1lbnUsIHsgZ2V0QWN0aXZlS2V5IH0gZnJvbSAnLi9TdWJQb3B1cE1lbnUnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBnZXRNb3Rpb24gfSBmcm9tICcuL3V0aWxzL2xlZ2FjeVV0aWwnO1xuXG52YXIgTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZW51KTtcblxuICAgIGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnUpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgX3RoaXMub25TZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIC8vIHJvb3QgbWVudVxuICAgICAgICAgIHZhciBfdGhpcyRzdG9yZSRnZXRTdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIF9zZWxlY3RlZEtleXMgPSBfdGhpcyRzdG9yZSRnZXRTdGF0ZS5zZWxlY3RlZEtleXM7XG5cbiAgICAgICAgICB2YXIgc2VsZWN0ZWRLZXkgPSBzZWxlY3RJbmZvLmtleTtcblxuICAgICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgX3NlbGVjdGVkS2V5cyA9IF9zZWxlY3RlZEtleXMuY29uY2F0KFtzZWxlY3RlZEtleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRLZXlzID0gW3NlbGVjdGVkS2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISgnc2VsZWN0ZWRLZXlzJyBpbiBwcm9wcykpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBfc2VsZWN0ZWRLZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wcy5vblNlbGVjdChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNlbGVjdEluZm8pLCB7fSwge1xuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBfc2VsZWN0ZWRLZXlzXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgIH07IC8vIG9uS2V5RG93biBuZWVkcyB0byBiZSBleHBvc2VkIGFzIGEgaW5zdGFuY2UgbWV0aG9kXG4gICAgICAvLyBlLmcuLCBpbiByYy1zZWxlY3QsIHdlIG5lZWQgdG8gbmF2aWdhdGUgbWVudSBpdGVtIHdoaWxlXG4gICAgICAvLyBjdXJyZW50IGFjdGl2ZSBpdGVtIGlzIHJjLXNlbGVjdCBpbnB1dCBib3ggcmF0aGVyIHRoYW4gdGhlIG1lbnUgaXRzZWxmXG5cblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIF90aGlzLmlubmVyTWVudS5nZXRXcmFwcGVkSW5zdGFuY2UoKS5vbktleURvd24oZSwgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIucHJvcHM7XG5cbiAgICAgICAgdmFyIG9wZW5LZXlzID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5vcGVuS2V5cy5jb25jYXQoKTtcblxuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBwcm9jZXNzU2luZ2xlID0gZnVuY3Rpb24gcHJvY2Vzc1NpbmdsZShlKSB7XG4gICAgICAgICAgdmFyIG9uZUNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChlLm9wZW4pIHtcbiAgICAgICAgICAgIG9uZUNoYW5nZWQgPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTE7XG5cbiAgICAgICAgICAgIGlmIChvbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIG9wZW5LZXlzLnB1c2goZS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KTtcbiAgICAgICAgICAgIG9uZUNoYW5nZWQgPSBpbmRleCAhPT0gLTE7XG5cbiAgICAgICAgICAgIGlmIChvbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIG9wZW5LZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZCA9IGNoYW5nZWQgfHwgb25lQ2hhbmdlZDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgICAvLyBiYXRjaCBjaGFuZ2UgY2FsbFxuICAgICAgICAgIGV2ZW50LmZvckVhY2gocHJvY2Vzc1NpbmdsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzc1NpbmdsZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIGlmICghKCdvcGVuS2V5cycgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG9wZW5LZXlzOiBvcGVuS2V5c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvcHMub25PcGVuQ2hhbmdlKG9wZW5LZXlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25EZXNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RJbmZvKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMucHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICB2YXIgX3NlbGVjdGVkS2V5czIgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cy5jb25jYXQoKTtcblxuICAgICAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gX3NlbGVjdGVkS2V5czIuaW5kZXhPZihzZWxlY3RlZEtleSk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRLZXlzMi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzZWxlY3RlZEtleXM6IF9zZWxlY3RlZEtleXMyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wcy5vbkRlc2VsZWN0KF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc2VsZWN0SW5mbyksIHt9LCB7XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM6IF9zZWxlY3RlZEtleXMyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRPcGVuVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemU0ID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTQucHJvcHM7XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHByb3BzLm9wZW5BbmltYXRpb247XG5cbiAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiB0eXBlb2YgYW5pbWF0aW9uTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IFwiXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItb3Blbi1cIikuY29uY2F0KGFuaW1hdGlvbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0SW5uZXJNZW51ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgX3RoaXMuaW5uZXJNZW51ID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlzUm9vdE1lbnUgPSB0cnVlO1xuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IHByb3BzLmRlZmF1bHRTZWxlY3RlZEtleXM7XG4gICAgICB2YXIgb3BlbktleXMgPSBwcm9wcy5kZWZhdWx0T3BlbktleXM7XG5cbiAgICAgIGlmICgnc2VsZWN0ZWRLZXlzJyBpbiBwcm9wcykge1xuICAgICAgICBzZWxlY3RlZEtleXMgPSBwcm9wcy5zZWxlY3RlZEtleXMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIGlmICgnb3BlbktleXMnIGluIHByb3BzKSB7XG4gICAgICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0b3JlID0gY3JlYXRlKHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICAgIG9wZW5LZXlzOiBvcGVuS2V5cyxcbiAgICAgICAgYWN0aXZlS2V5OiB7XG4gICAgICAgICAgJzAtbWVudS0nOiBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbnUsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1pbmlTdG9yZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVNaW5pU3RvcmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVNaW5pU3RvcmUoKSB7XG4gICAgICAgIGlmICgnc2VsZWN0ZWRLZXlzJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRLZXlzIHx8IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ29wZW5LZXlzJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuS2V5czogdGhpcy5wcm9wcy5vcGVuS2V5cyB8fCBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9IFwiIFwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXJvb3RcIik7XG5cbiAgICAgICAgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgKz0gXCIgXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItcnRsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgb25PcGVuQ2hhbmdlOiB0aGlzLm9uT3BlbkNoYW5nZSxcbiAgICAgICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICAgICAgcGFyZW50TWVudTogdGhpcyxcbiAgICAgICAgICBtb3Rpb246IGdldE1vdGlvbih0aGlzLnByb3BzKVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIHByb3BzLm9wZW5BbmltYXRpb247XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5vcGVuVHJhbnNpdGlvbk5hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7XG4gICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJQb3B1cE1lbnUsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNldElubmVyTWVudVxuICAgICAgICB9KSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBvbkNsaWNrOiBub29wLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9uT3BlbkNoYW5nZTogbm9vcCxcbiAgICBvbkRlc2VsZWN0OiBub29wLFxuICAgIGRlZmF1bHRTZWxlY3RlZEtleXM6IFtdLFxuICAgIGRlZmF1bHRPcGVuS2V5czogW10sXG4gICAgc3ViTWVudU9wZW5EZWxheTogMC4xLFxuICAgIHN1Yk1lbnVDbG9zZURlbGF5OiAwLjEsXG4gICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246ICdob3ZlcicsXG4gICAgcHJlZml4Q2xzOiAncmMtbWVudScsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtb2RlOiAndmVydGljYWwnLFxuICAgIHN0eWxlOiB7fSxcbiAgICBidWlsdGluUGxhY2VtZW50czoge30sXG4gICAgb3ZlcmZsb3dlZEluZGljYXRvcjogUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJcXHhCN1xceEI3XFx4QjdcIilcbiAgfTtcbiAgcmV0dXJuIE1lbnU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCB7IG5vb3AsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51SXRlbSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBNZW51SXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZW51SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnVJdGVtKTtcblxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUikge1xuICAgICAgICAgIF90aGlzLm9uQ2xpY2soZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzLm9uSXRlbUhvdmVyLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMub25Nb3VzZUxlYXZlO1xuICAgICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIG9uTW91c2VMZWF2ZSh7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMyLmV2ZW50S2V5LFxuICAgICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wczIub25JdGVtSG92ZXIsXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczIub25Nb3VzZUVudGVyO1xuICAgICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBob3ZlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgb25Nb3VzZUVudGVyKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMzLmV2ZW50S2V5LFxuICAgICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczMubXVsdGlwbGUsXG4gICAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMzLm9uQ2xpY2ssXG4gICAgICAgICAgICBvblNlbGVjdCA9IF90aGlzJHByb3BzMy5vblNlbGVjdCxcbiAgICAgICAgICAgIG9uRGVzZWxlY3QgPSBfdGhpcyRwcm9wczMub25EZXNlbGVjdCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBfdGhpcyRwcm9wczMuaXNTZWxlY3RlZDtcbiAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBrZXlQYXRoOiBbZXZlbnRLZXldLFxuICAgICAgICAgIGl0ZW06IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH07XG4gICAgICAgIG9uQ2xpY2soaW5mbyk7XG5cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIG9uRGVzZWxlY3QoaW5mbyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uU2VsZWN0KGluZm8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICAgIG9uU2VsZWN0KGluZm8pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIF90aGlzLm5vZGUgPSBub2RlO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZW51SXRlbSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBpbnZva2UgY3VzdG9taXplZCByZWYgdG8gZXhwb3NlIGNvbXBvbmVudCB0byBtaXhpblxuICAgICAgICB0aGlzLmNhbGxSZWYoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNhbGxSZWYoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAocHJvcHMub25EZXN0cm95KSB7XG4gICAgICAgICAgcHJvcHMub25EZXN0cm95KHByb3BzLmV2ZW50S2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRQcmVmaXhDbHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMsIFwiLWl0ZW1cIik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEFjdGl2ZUNsYXNzTmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGl2ZUNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0U2VsZWN0ZWRDbGFzc05hbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZENsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLXNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXREaXNhYmxlZENsYXNzTmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERpc2FibGVkQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItZGlzYWJsZWRcIik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGxSZWZcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsUmVmKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYW51YWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLmdldFByZWZpeENscygpLCBwcm9wcy5jbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lKCksICFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5hY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSwgcHJvcHMuaXNTZWxlY3RlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSgpLCBwcm9wcy5kaXNhYmxlZCksIF9jbGFzc05hbWVzKSk7XG5cbiAgICAgICAgdmFyIGF0dHJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcy5hdHRyaWJ1dGUpLCB7fSwge1xuICAgICAgICAgIHRpdGxlOiB0eXBlb2YgcHJvcHMudGl0bGUgPT09ICdzdHJpbmcnID8gcHJvcHMudGl0bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgLy8gc2V0IHRvIG1lbnVpdGVtIGJ5IGRlZmF1bHRcbiAgICAgICAgICByb2xlOiBwcm9wcy5yb2xlIHx8ICdtZW51aXRlbScsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMucm9sZSA9PT0gJ29wdGlvbicpIHtcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgdG8gb3B0aW9uXG4gICAgICAgICAgYXR0cnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGF0dHJzKSwge30sIHtcbiAgICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBwcm9wcy5pc1NlbGVjdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMucm9sZSA9PT0gbnVsbCB8fCBwcm9wcy5yb2xlID09PSAnbm9uZScpIHtcbiAgICAgICAgICAvLyBzb21ldGltZXMgd2Ugd2FudCB0byBzcGVjaWZ5IHJvbGUgaW5zaWRlIDxsaS8+IGVsZW1lbnRcbiAgICAgICAgICAvLyA8bGk+PGEgcm9sZT0nbWVudWl0ZW0nPkxpbms8L2E+PC9saT4gd291bGQgYmUgYSBnb29kIGV4YW1wbGVcbiAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHJvbGUgb24gPGxpLz4gc2hvdWxkIGJlIFwibm9uZVwiIHRvXG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBpbXBsaWVkIGxpc3RpdGVtIHJvbGUuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvZXhhbXBsZXMvbWVudWJhci9tZW51YmFyLTEvbWVudWJhci0xLmh0bWxcbiAgICAgICAgICBhdHRycy5yb2xlID0gJ25vbmUnO1xuICAgICAgICB9IC8vIEluIGNhc2UgdGhhdCBvbkNsaWNrL29uTW91c2VMZWF2ZS9vbk1vdXNlRW50ZXIgaXMgcGFzc2VkIGRvd24gZnJvbSBvd25lclxuXG5cbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSB7XG4gICAgICAgICAgb25DbGljazogcHJvcHMuZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMuZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzdHlsZSA9IF9vYmplY3RTcHJlYWQoe30sIHByb3BzLnN0eWxlKTtcblxuICAgICAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBpZiAocHJvcHMuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVudUFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5kaXJlY3Rpb247XG4gICAgICAgIHZhciBpY29uID0gdGhpcy5wcm9wcy5pdGVtSWNvbjtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuaXRlbUljb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIGEgYnVnIHdoaWNoIHNob3VsZCBmaXhlZCBhZnRlciBUUyByZWZhY3RvclxuICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuaXRlbUljb24sIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgYXR0cnMsIG1vdXNlRXZlbnQsIHtcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVOb2RlXG4gICAgICAgIH0pLCBwcm9wcy5jaGlsZHJlbiwgaWNvbik7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7XG4gIE1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdDogbm9vcCxcbiAgICBvbk1vdXNlRW50ZXI6IG5vb3AsXG4gICAgb25Nb3VzZUxlYXZlOiBub29wLFxuICAgIG1hbnVhbFJlZjogbm9vcFxuICB9O1xuICByZXR1cm4gTWVudUl0ZW07XG59KCk7XG5cbmV4cG9ydCB7IE1lbnVJdGVtIH07XG52YXIgY29ubmVjdGVkID0gY29ubmVjdChmdW5jdGlvbiAoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGFjdGl2ZUtleSA9IF9yZWYuYWN0aXZlS2V5LFxuICAgICAgc2VsZWN0ZWRLZXlzID0gX3JlZi5zZWxlY3RlZEtleXM7XG4gIHZhciBldmVudEtleSA9IF9yZWYyLmV2ZW50S2V5LFxuICAgICAgc3ViTWVudUtleSA9IF9yZWYyLnN1Yk1lbnVLZXk7XG4gIHJldHVybiB7XG4gICAgYWN0aXZlOiBhY3RpdmVLZXlbc3ViTWVudUtleV0gPT09IGV2ZW50S2V5LFxuICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkS2V5cy5pbmRleE9mKGV2ZW50S2V5KSAhPT0gLTFcbiAgfTtcbn0pKE1lbnVJdGVtKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51SXRlbUdyb3VwID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIE1lbnVJdGVtR3JvdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWVudUl0ZW1Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnVJdGVtR3JvdXApO1xuXG4gICAgZnVuY3Rpb24gTWVudUl0ZW1Hcm91cCgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVJdGVtR3JvdXApO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBfdGhpcy5yZW5kZXJJbm5lck1lbnVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICByZW5kZXJNZW51SXRlbSA9IF90aGlzJHByb3BzLnJlbmRlck1lbnVJdGVtLFxuICAgICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wcy5pbmRleDtcbiAgICAgICAgcmV0dXJuIHJlbmRlck1lbnVJdGVtKGl0ZW0sIGluZGV4LCBfdGhpcy5wcm9wcy5zdWJNZW51S2V5KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVudUl0ZW1Hcm91cCwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICB2YXIgX3Byb3BzJGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBwcm9wcy5yb290UHJlZml4Q2xzO1xuICAgICAgICB2YXIgdGl0bGVDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLWdyb3VwLXRpdGxlXCIpO1xuICAgICAgICB2YXIgbGlzdENsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZ3JvdXAtbGlzdFwiKTtcbiAgICAgICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9KTsgLy8gU2V0IG9uQ2xpY2sgdG8gbnVsbCwgdG8gaWdub3JlIHByb3BhZ2F0ZWQgb25DbGljayBldmVudFxuXG4gICAgICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuICAgICAgICBkZWxldGUgcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1ncm91cFwiKVxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aXRsZTogdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHRpdGxlIDogdW5kZWZpbmVkXG4gICAgICAgIH0sIHRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGxpc3RDbGFzc05hbWVcbiAgICAgICAgfSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlcklubmVyTWVudUl0ZW0pKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbnVJdGVtR3JvdXA7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBNZW51SXRlbUdyb3VwLmlzTWVudUl0ZW1Hcm91cCA9IHRydWU7XG4gIE1lbnVJdGVtR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiB0cnVlXG4gIH07XG4gIHJldHVybiBNZW51SXRlbUdyb3VwO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbUdyb3VwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSBcInJjLWFuaW1hdGUvZXMvQ1NTTW90aW9uXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCBTdWJQb3B1cE1lbnUgZnJvbSAnLi9TdWJQb3B1cE1lbnUnO1xuaW1wb3J0IHsgcGxhY2VtZW50cywgcGxhY2VtZW50c1J0bCB9IGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgeyBub29wLCBsb29wTWVudUl0ZW1SZWN1cnNpdmVseSwgZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleSwgbWVudUFsbFByb3BzIH0gZnJvbSAnLi91dGlsJztcbnZhciBndWlkID0gMDtcbnZhciBwb3B1cFBsYWNlbWVudE1hcCA9IHtcbiAgaG9yaXpvbnRhbDogJ2JvdHRvbUxlZnQnLFxuICB2ZXJ0aWNhbDogJ3JpZ2h0VG9wJyxcbiAgJ3ZlcnRpY2FsLWxlZnQnOiAncmlnaHRUb3AnLFxuICAndmVydGljYWwtcmlnaHQnOiAnbGVmdFRvcCdcbn07XG5cbnZhciB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QgPSBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCBkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgdmFyIG1lbnVJZCA9IGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkoZXZlbnRLZXkpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5zZXRTdGF0ZSh7XG4gICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmRlZmF1bHRBY3RpdmVGaXJzdCksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIG1lbnVJZCwgZGVmYXVsdEFjdGl2ZUZpcnN0KSlcbiAgfSk7XG59O1xuXG52YXIgU3ViTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBTdWJNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN1Yk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdWJNZW51KTtcblxuICAgIGZ1bmN0aW9uIFN1Yk1lbnUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1Yk1lbnUpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgX3RoaXMub25EZXN0cm95ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRlc3Ryb3koa2V5KTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIG5vdGU6XG4gICAgICAgKiAgVGhpcyBsZWdhY3kgY29kZSB0aGF0IGBvbktleURvd25gIGlzIGNhbGxlZCBieSBwYXJlbnQgaW5zdGVhZCBvZiBkb20gc2VsZi5cbiAgICAgICAqICB3aGljaCBuZWVkIHJldHVybiBjb2RlIHRvIGNoZWNrIGlmIHRoaXMgZXZlbnQgaXMgaGFuZGxlZFxuICAgICAgICovXG5cblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgIHZhciBtZW51ID0gX3RoaXMubWVudUluc3RhbmNlO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgICAgIHN0b3JlID0gX3RoaXMkcHJvcHMuc3RvcmU7XG5cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRU5URVIpIHtcbiAgICAgICAgICBfdGhpcy5vblRpdGxlQ2xpY2soZSk7XG5cbiAgICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIF90aGlzLnByb3BzLmV2ZW50S2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgbWVudS5vbktleURvd24oZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJPcGVuQ2hhbmdlKHRydWUpOyAvLyBuZWVkIHRvIHVwZGF0ZSBjdXJyZW50IG1lbnUncyBkZWZhdWx0QWN0aXZlRmlyc3QgdmFsdWVcblxuXG4gICAgICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIF90aGlzLnByb3BzLmV2ZW50S2V5LCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkxFRlQpIHtcbiAgICAgICAgICB2YXIgaGFuZGxlZDtcblxuICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJPcGVuQ2hhbmdlKGZhbHNlKTtcblxuICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPcGVuICYmIChrZXlDb2RlID09PSBLZXlDb2RlLlVQIHx8IGtleUNvZGUgPT09IEtleUNvZGUuRE9XTikpIHtcbiAgICAgICAgICByZXR1cm4gbWVudS5vbktleURvd24oZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25PcGVuQ2hhbmdlKGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cFZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xuICAgICAgICBfdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh2aXNpYmxlLCB2aXNpYmxlID8gJ21vdXNlZW50ZXInIDogJ21vdXNlbGVhdmUnKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGtleSA9IF90aGlzJHByb3BzMi5ldmVudEtleSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzMi5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBzdG9yZSA9IF90aGlzJHByb3BzMi5zdG9yZTtcbiAgICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBfdGhpcy5wcm9wcy5ldmVudEtleSwgZmFsc2UpO1xuICAgICAgICBvbk1vdXNlRW50ZXIoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcGFyZW50TWVudSA9IF90aGlzJHByb3BzMy5wYXJlbnRNZW51LFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczMuZXZlbnRLZXksXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wczMub25Nb3VzZUxlYXZlO1xuICAgICAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgICAgICBvbk1vdXNlTGVhdmUoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRpdGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChkb21FdmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBrZXkgPSBfdGhpcyRwcm9wczQuZXZlbnRLZXksXG4gICAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzNC5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICAgIG9uVGl0bGVNb3VzZUVudGVyID0gX3RoaXMkcHJvcHM0Lm9uVGl0bGVNb3VzZUVudGVyO1xuICAgICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgaG92ZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uVGl0bGVNb3VzZUVudGVyKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBkb21FdmVudDogZG9tRXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRpdGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHBhcmVudE1lbnUgPSBfdGhpcyRwcm9wczUucGFyZW50TWVudSxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHM1LmV2ZW50S2V5LFxuICAgICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wczUub25JdGVtSG92ZXIsXG4gICAgICAgICAgICBvblRpdGxlTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzNS5vblRpdGxlTW91c2VMZWF2ZTtcbiAgICAgICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICAgICAgb25JdGVtSG92ZXIoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBvblRpdGxlTW91c2VMZWF2ZSh7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVGl0bGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzO1xuXG4gICAgICAgIHByb3BzLm9uVGl0bGVDbGljayh7XG4gICAgICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24gPT09ICdob3ZlcicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSghcHJvcHMuaXNPcGVuLCAnY2xpY2snKTtcblxuICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QocHJvcHMuc3RvcmUsIF90aGlzLnByb3BzLmV2ZW50S2V5LCBmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblN1Yk1lbnVDbGljayA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG92ZXJmbG93ZWQgc3VibWVudVxuICAgICAgICAvLyBvbkNsaWNrIGlzIG5vdCBjb3BpZWQgb3ZlclxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKF90aGlzLmFkZEtleVBhdGgoaW5mbykpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNlbGVjdCA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uU2VsZWN0KGluZm8pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25EZXNlbGVjdCA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRGVzZWxlY3QoaW5mbyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRQcmVmaXhDbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wcm9wcy5yb290UHJlZml4Q2xzLCBcIi1zdWJtZW51XCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLWFjdGl2ZVwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLWRpc2FibGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItc2VsZWN0ZWRcIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRPcGVuQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMucHJvcHMucm9vdFByZWZpeENscywgXCItc3VibWVudS1vcGVuXCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZU1lbnVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIC8vIGNoaWxkcmVuIG1lbnUgaW5zdGFuY2VcbiAgICAgICAgX3RoaXMubWVudUluc3RhbmNlID0gYztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmFkZEtleVBhdGggPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbmZvKSwge30sIHtcbiAgICAgICAgICBrZXlQYXRoOiAoaW5mby5rZXlQYXRoIHx8IFtdKS5jb25jYXQoX3RoaXMucHJvcHMuZXZlbnRLZXkpXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMudHJpZ2dlck9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAob3BlbiwgdHlwZSkge1xuICAgICAgICB2YXIga2V5ID0gX3RoaXMucHJvcHMuZXZlbnRLZXk7XG5cbiAgICAgICAgdmFyIG9wZW5DaGFuZ2UgPSBmdW5jdGlvbiBvcGVuQ2hhbmdlKCkge1xuICAgICAgICAgIF90aGlzLm9uT3BlbkNoYW5nZSh7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGl0ZW06IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgdHJpZ2dlcjogdHlwZSxcbiAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIG1vdXNlZW50ZXIgaGFwcGVuIGFmdGVyIG90aGVyIG1lbnUgaXRlbSdzIG1vdXNlbGVhdmVcbiAgICAgICAgICBfdGhpcy5tb3VzZWVudGVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNoYW5nZSgpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wZW5DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaXNDaGlsZHJlblNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIGZpbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5KF90aGlzLnByb3BzLmNoaWxkcmVuLCBfdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMsIHJldCk7XG4gICAgICAgIHJldHVybiByZXQuZmluZDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9wZW5LZXlzLmluZGV4T2YoX3RoaXMucHJvcHMuZXZlbnRLZXkpICE9PSAtMTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmFkanVzdFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFfdGhpcy5zdWJNZW51VGl0bGUgfHwgIV90aGlzLm1lbnVJbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3B1cE1lbnUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcy5tZW51SW5zdGFuY2UpO1xuXG4gICAgICAgIGlmIChwb3B1cE1lbnUub2Zmc2V0V2lkdGggPj0gX3RoaXMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICAgICAgICBwb3B1cE1lbnUuc3R5bGUubWluV2lkdGggPSBcIlwiLmNvbmNhdChfdGhpcy5zdWJNZW51VGl0bGUub2Zmc2V0V2lkdGgsIFwicHhcIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlU3ViTWVudVRpdGxlID0gZnVuY3Rpb24gKHN1Yk1lbnVUaXRsZSkge1xuICAgICAgICBfdGhpcy5zdWJNZW51VGl0bGUgPSBzdWJNZW51VGl0bGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRCYXNlUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb2RlOiBwcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogcHJvcHMubW9kZSxcbiAgICAgICAgICB2aXNpYmxlOiBfdGhpcy5wcm9wcy5pc09wZW4sXG4gICAgICAgICAgbGV2ZWw6IHByb3BzLmxldmVsICsgMSxcbiAgICAgICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgICAgICBmb2N1c2FibGU6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzLm9uU3ViTWVudUNsaWNrLFxuICAgICAgICAgIG9uU2VsZWN0OiBfdGhpcy5vblNlbGVjdCxcbiAgICAgICAgICBvbkRlc2VsZWN0OiBfdGhpcy5vbkRlc2VsZWN0LFxuICAgICAgICAgIG9uRGVzdHJveTogX3RoaXMub25EZXN0cm95LFxuICAgICAgICAgIHNlbGVjdGVkS2V5czogcHJvcHMuc2VsZWN0ZWRLZXlzLFxuICAgICAgICAgIGV2ZW50S2V5OiBcIlwiLmNvbmNhdChwcm9wcy5ldmVudEtleSwgXCItbWVudS1cIiksXG4gICAgICAgICAgb3BlbktleXM6IHByb3BzLm9wZW5LZXlzLFxuICAgICAgICAgIG1vdGlvbjogcHJvcHMubW90aW9uLFxuICAgICAgICAgIG9uT3BlbkNoYW5nZTogX3RoaXMub25PcGVuQ2hhbmdlLFxuICAgICAgICAgIHN1Yk1lbnVPcGVuRGVsYXk6IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICAgICAgcGFyZW50TWVudTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgc3ViTWVudUNsb3NlRGVsYXk6IHByb3BzLnN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIGZvcmNlU3ViTWVudVJlbmRlcjogcHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyLFxuICAgICAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uOiBwcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbixcbiAgICAgICAgICBidWlsdGluUGxhY2VtZW50czogcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRBY3RpdmVGaXJzdFtnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5KV0sXG4gICAgICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIHByZWZpeENsczogcHJvcHMucm9vdFByZWZpeENscyxcbiAgICAgICAgICBpZDogX3RoaXMuaW50ZXJuYWxNZW51SWQsXG4gICAgICAgICAgbWFudWFsUmVmOiBfdGhpcy5zYXZlTWVudUluc3RhbmNlLFxuICAgICAgICAgIGl0ZW1JY29uOiBwcm9wcy5pdGVtSWNvbixcbiAgICAgICAgICBleHBhbmRJY29uOiBwcm9wcy5leHBhbmRJY29uLFxuICAgICAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRNb3Rpb24gPSBmdW5jdGlvbiAobW9kZSwgdmlzaWJsZSkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplMyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgaGF2ZVJlbmRlcmVkID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMy5oYXZlUmVuZGVyZWQ7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgbW90aW9uID0gX3RoaXMkcHJvcHM2Lm1vdGlvbixcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczYucm9vdFByZWZpeENsczsgLy8gZG9uJ3Qgc2hvdyB0cmFuc2l0aW9uIG9uIGZpcnN0IHJlbmRlcmluZyAobm8gYW5pbWF0aW9uIGZvciBvcGVuZWQgbWVudSlcbiAgICAgICAgLy8gc2hvdyBhcHBlYXIgdHJhbnNpdGlvbiBpZiBpdCdzIG5vdCB2aXNpYmxlIChub3Qgc3VyZSB3aHkpXG4gICAgICAgIC8vIHNob3cgYXBwZWFyIHRyYW5zaXRpb24gaWYgaXQncyBub3QgaW5saW5lIG1vZGVcblxuICAgICAgICB2YXIgbWVyZ2VkTW90aW9uID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtb3Rpb24pLCB7fSwge1xuICAgICAgICAgIGxlYXZlZENsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaGlkZGVuXCIpLFxuICAgICAgICAgIHJlbW92ZU9uTGVhdmU6IGZhbHNlLFxuICAgICAgICAgIG1vdGlvbkFwcGVhcjogaGF2ZVJlbmRlcmVkIHx8ICF2aXNpYmxlIHx8IG1vZGUgIT09ICdpbmxpbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtZXJnZWRNb3Rpb247XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZSxcbiAgICAgICAgICBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuXG4gICAgICB2YXIgX3N0b3JlJGdldFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3QgPSBfc3RvcmUkZ2V0U3RhdGUuZGVmYXVsdEFjdGl2ZUZpcnN0O1xuXG4gICAgICBfdGhpcy5pc1Jvb3RNZW51ID0gZmFsc2U7XG4gICAgICB2YXIgdmFsdWUgPSBmYWxzZTtcblxuICAgICAgaWYgKGRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICAgICAgICB2YWx1ZSA9IGRlZmF1bHRBY3RpdmVGaXJzdFtldmVudEtleV07XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgZXZlbnRLZXksIHZhbHVlKTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3ViTWVudSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbW9kZSA9IF90aGlzJHByb3BzNy5tb2RlLFxuICAgICAgICAgICAgcGFyZW50TWVudSA9IF90aGlzJHByb3BzNy5wYXJlbnRNZW51LFxuICAgICAgICAgICAgbWFudWFsUmVmID0gX3RoaXMkcHJvcHM3Lm1hbnVhbFJlZjsgLy8gaW52b2tlIGN1c3RvbWl6ZWQgcmVmIHRvIGV4cG9zZSBjb21wb25lbnQgdG8gbWl4aW5cblxuICAgICAgICBpZiAobWFudWFsUmVmKSB7XG4gICAgICAgICAgbWFudWFsUmVmKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUgIT09ICdob3Jpem9udGFsJyB8fCAhcGFyZW50TWVudS5pc1Jvb3RNZW51IHx8ICF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWluV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5hZGp1c3RXaWR0aCgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkRlc3Ryb3kgPSBfdGhpcyRwcm9wczgub25EZXN0cm95LFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczguZXZlbnRLZXk7XG5cbiAgICAgICAgaWYgKG9uRGVzdHJveSkge1xuICAgICAgICAgIG9uRGVzdHJveShldmVudEtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cblxuICAgICAgICBpZiAodGhpcy5taW5XaWR0aFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5taW5XaWR0aFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgICAgICAgaWYgKHRoaXMubW91c2VlbnRlclRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZWVudGVyVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyQ2hpbGRyZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihjaGlsZHJlbikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgYmFzZVByb3BzID0gdGhpcy5nZXRCYXNlUHJvcHMoKTsgLy8gW0xlZ2FjeV0gZ2V0TW90aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBgaGF2ZVJlbmRlcmVkYFxuXG4gICAgICAgIHZhciBtZXJnZWRNb3Rpb24gPSB0aGlzLmdldE1vdGlvbihiYXNlUHJvcHMubW9kZSwgYmFzZVByb3BzLnZpc2libGUpO1xuICAgICAgICB0aGlzLmhhdmVSZW5kZXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGF2ZU9wZW5lZCA9IHRoaXMuaGF2ZU9wZW5lZCB8fCBiYXNlUHJvcHMudmlzaWJsZSB8fCBiYXNlUHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyOyAvLyBuZXZlciByZW5kZXJlZCBub3QgcGxhbm5pbmcgdG8sIGRvbid0IHJlbmRlclxuXG4gICAgICAgIGlmICghdGhpcy5oYXZlT3BlbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gYmFzZVByb3BzLmRpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICB2aXNpYmxlOiBiYXNlUHJvcHMudmlzaWJsZVxuICAgICAgICB9LCBtZXJnZWRNb3Rpb24pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICAgICAgICAgIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KGJhc2VQcm9wcy5wcmVmaXhDbHMsIFwiLXN1YlwiKSwgY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGJhc2VQcm9wcy5wcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJykpO1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlBvcHVwTWVudSwgT2JqZWN0LmFzc2lnbih7fSwgYmFzZVByb3BzLCB7XG4gICAgICAgICAgICBpZDogX3RoaXMzLmludGVybmFsTWVudUlkLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgICB9KSwgY2hpbGRyZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHZhciBpc09wZW4gPSBwcm9wcy5pc09wZW47XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLmdldFByZWZpeENscygpO1xuICAgICAgICB2YXIgaXNJbmxpbmVNb2RlID0gcHJvcHMubW9kZSA9PT0gJ2lubGluZSc7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHByb3BzLm1vZGUpLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByb3BzLmNsYXNzTmFtZSwgISFwcm9wcy5jbGFzc05hbWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCB0aGlzLmdldE9wZW5DbGFzc05hbWUoKSwgaXNPcGVuKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUoKSwgcHJvcHMuYWN0aXZlIHx8IGlzT3BlbiAmJiAhaXNJbmxpbmVNb2RlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSgpLCBwcm9wcy5kaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHRoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSwgdGhpcy5pc0NoaWxkcmVuU2VsZWN0ZWQoKSksIF9jbGFzc05hbWVzMikpO1xuXG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbE1lbnVJZCkge1xuICAgICAgICAgIGlmIChwcm9wcy5ldmVudEtleSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbE1lbnVJZCA9IFwiXCIuY29uY2F0KHByb3BzLmV2ZW50S2V5LCBcIiRNZW51XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndWlkICs9IDE7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsTWVudUlkID0gXCIkX18kXCIuY29uY2F0KGd1aWQsIFwiJE1lbnVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vdXNlRXZlbnRzID0ge307XG4gICAgICAgIHZhciB0aXRsZUNsaWNrRXZlbnRzID0ge307XG4gICAgICAgIHZhciB0aXRsZU1vdXNlRXZlbnRzID0ge307XG5cbiAgICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0ge1xuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXJcbiAgICAgICAgICB9OyAvLyBvbmx5IHdvcmtzIGluIHRpdGxlLCBub3Qgb3V0ZXIgbGlcblxuICAgICAgICAgIHRpdGxlQ2xpY2tFdmVudHMgPSB7XG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uVGl0bGVDbGlja1xuICAgICAgICAgIH07XG4gICAgICAgICAgdGl0bGVNb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vblRpdGxlTW91c2VFbnRlcixcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vblRpdGxlTW91c2VMZWF2ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbjtcblxuICAgICAgICBpZiAoaXNJbmxpbmVNb2RlKSB7XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdSaWdodCA9IHByb3BzLmlubGluZUluZGVudCAqIHByb3BzLmxldmVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IHByb3BzLmlubGluZUluZGVudCAqIHByb3BzLmxldmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmlhT3ducyA9IHt9OyAvLyBvbmx5IHNldCBhcmlhLW93bnMgd2hlbiBtZW51IGlzIG9wZW5cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGl0IHdvdWxkIGJlIGFuIGludmFsaWQgYXJpYS1vd25zIHZhbHVlXG4gICAgICAgIC8vIHNpbmNlIGNvcnJlc3BvbmRpbmcgbm9kZSBjYW5ub3QgYmUgZm91bmRcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgICBhcmlhT3ducyA9IHtcbiAgICAgICAgICAgICdhcmlhLW93bnMnOiB0aGlzLmludGVybmFsTWVudUlkXG4gICAgICAgICAgfTtcbiAgICAgICAgfSAvLyBleHBhbmQgY3VzdG9tIGljb24gc2hvdWxkIE5PVCBiZSBkaXNwbGF5ZWQgaW4gbWVudSB3aXRoIGhvcml6b250YWwgbW9kZS5cblxuXG4gICAgICAgIHZhciBpY29uID0gbnVsbDtcblxuICAgICAgICBpZiAocHJvcHMubW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgaWNvbiA9IHRoaXMucHJvcHMuZXhwYW5kSWNvbjsgLy8gUmVhY3ROb2RlXG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZXhwYW5kSWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5leHBhbmRJY29uLCBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRpdGxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICByZWY6IHRoaXMuc2F2ZVN1Yk1lbnVUaXRsZSxcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRpdGxlXCIpLFxuICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfSwgdGl0bGVNb3VzZUV2ZW50cywgdGl0bGVDbGlja0V2ZW50cywge1xuICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBpc09wZW5cbiAgICAgICAgfSwgYXJpYU93bnMsIHtcbiAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgdGl0bGU6IHR5cGVvZiBwcm9wcy50aXRsZSA9PT0gJ3N0cmluZycgPyBwcm9wcy50aXRsZSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSwgcHJvcHMudGl0bGUsIGljb24gfHwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvd1wiKVxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5wYXJlbnRNZW51LmlzUm9vdE1lbnUgPyBwcm9wcy5wYXJlbnRNZW51LnByb3BzLmdldFBvcHVwQ29udGFpbmVyIDogZnVuY3Rpb24gKHRyaWdnZXJOb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHBvcHVwUGxhY2VtZW50TWFwW3Byb3BzLm1vZGVdO1xuICAgICAgICB2YXIgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwT2Zmc2V0ID8ge1xuICAgICAgICAgIG9mZnNldDogcHJvcHMucG9wdXBPZmZzZXRcbiAgICAgICAgfSA6IHt9O1xuICAgICAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJyA/ICcnIDogcHJvcHMucG9wdXBDbGFzc05hbWU7XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lICs9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBcIiBcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIikgOiAnJztcbiAgICAgICAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbiA9IHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgICAgICAgc3ViTWVudU9wZW5EZWxheSA9IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXIgPSBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXIsXG4gICAgICAgICAgICBzdWJNZW51Q2xvc2VEZWxheSA9IHByb3BzLnN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcbiAgICAgICAgbWVudUFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgfSk7IC8vIFNldCBvbkNsaWNrIHRvIG51bGwsIHRvIGlnbm9yZSBwcm9wYWdhdGVkIG9uQ2xpY2sgZXZlbnRcblxuICAgICAgICBkZWxldGUgcHJvcHMub25DbGljaztcbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBPYmplY3QuYXNzaWduKHt9LCBwbGFjZW1lbnRzUnRsLCBidWlsdGluUGxhY2VtZW50cykgOiBPYmplY3QuYXNzaWduKHt9LCBwbGFjZW1lbnRzLCBidWlsdGluUGxhY2VtZW50cyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5kaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIG1vdXNlRXZlbnRzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgcm9sZTogXCJtZW51aXRlbVwiXG4gICAgICAgIH0pLCBpc0lubGluZU1vZGUgJiYgdGl0bGUsIGlzSW5saW5lTW9kZSAmJiBjaGlsZHJlbiwgIWlzSW5saW5lTW9kZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBvcHVwXCIpLCBwb3B1cENsYXNzTmFtZSksXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnQsXG4gICAgICAgICAgcG9wdXBQbGFjZW1lbnQ6IHBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgIHBvcHVwVmlzaWJsZTogaXNPcGVuLFxuICAgICAgICAgIHBvcHVwQWxpZ246IHBvcHVwQWxpZ24sXG4gICAgICAgICAgcG9wdXA6IGNoaWxkcmVuLFxuICAgICAgICAgIGFjdGlvbjogZGlzYWJsZWQgPyBbXSA6IFt0cmlnZ2VyU3ViTWVudUFjdGlvbl0sXG4gICAgICAgICAgbW91c2VFbnRlckRlbGF5OiBzdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICAgIG1vdXNlTGVhdmVEZWxheTogc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IHRoaXMub25Qb3B1cFZpc2libGVDaGFuZ2UsXG4gICAgICAgICAgZm9yY2VSZW5kZXI6IGZvcmNlU3ViTWVudVJlbmRlclxuICAgICAgICB9LCB0aXRsZSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdWJNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25Nb3VzZUVudGVyOiBub29wLFxuICAgIG9uTW91c2VMZWF2ZTogbm9vcCxcbiAgICBvblRpdGxlTW91c2VFbnRlcjogbm9vcCxcbiAgICBvblRpdGxlTW91c2VMZWF2ZTogbm9vcCxcbiAgICBvblRpdGxlQ2xpY2s6IG5vb3AsXG4gICAgbWFudWFsUmVmOiBub29wLFxuICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgdGl0bGU6ICcnXG4gIH07XG4gIHJldHVybiBTdWJNZW51O1xufSgpO1xuXG5leHBvcnQgeyBTdWJNZW51IH07XG52YXIgY29ubmVjdGVkID0gY29ubmVjdChmdW5jdGlvbiAoX3JlZjIsIF9yZWYzKSB7XG4gIHZhciBvcGVuS2V5cyA9IF9yZWYyLm9wZW5LZXlzLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZjIuYWN0aXZlS2V5LFxuICAgICAgc2VsZWN0ZWRLZXlzID0gX3JlZjIuc2VsZWN0ZWRLZXlzO1xuICB2YXIgZXZlbnRLZXkgPSBfcmVmMy5ldmVudEtleSxcbiAgICAgIHN1Yk1lbnVLZXkgPSBfcmVmMy5zdWJNZW51S2V5O1xuICByZXR1cm4ge1xuICAgIGlzT3Blbjogb3BlbktleXMuaW5kZXhPZihldmVudEtleSkgPiAtMSxcbiAgICBhY3RpdmU6IGFjdGl2ZUtleVtzdWJNZW51S2V5XSA9PT0gZXZlbnRLZXksXG4gICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgfTtcbn0pKFN1Yk1lbnUpO1xuY29ubmVjdGVkLmlzU3ViTWVudSA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSBcInJjLXV0aWwvZXMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uXCI7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ3NoYWxsb3dlcXVhbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldEtleUZyb21DaGlsZHJlbkluZGV4LCBsb29wTWVudUl0ZW0sIG5vb3AsIG1lbnVBbGxQcm9wcywgaXNNb2JpbGVEZXZpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERPTVdyYXAgZnJvbSAnLi9ET01XcmFwJztcblxuZnVuY3Rpb24gYWxsRGlzYWJsZWQoYXJyKSB7XG4gIGlmICghYXJyLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGFyci5ldmVyeShmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAhIWMucHJvcHMuZGlzYWJsZWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVLZXkoc3RvcmUsIG1lbnVJZCwgYWN0aXZlS2V5KSB7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHN0b3JlLnNldFN0YXRlKHtcbiAgICBhY3RpdmVLZXk6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuYWN0aXZlS2V5KSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbWVudUlkLCBhY3RpdmVLZXkpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRLZXkocHJvcHMpIHtcbiAgLy8gd2hlbiBldmVudEtleSBub3QgYXZhaWxhYmxlICxpdCdzIG1lbnUgYW5kIHJldHVybiBtZW51IGlkICcwLW1lbnUtJ1xuICByZXR1cm4gcHJvcHMuZXZlbnRLZXkgfHwgJzAtbWVudS0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSkge1xuICB2YXIgYWN0aXZlS2V5ID0gb3JpZ2luYWxBY3RpdmVLZXk7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcblxuICBpZiAoYWN0aXZlS2V5KSB7XG4gICAgdmFyIGZvdW5kO1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmIChjICYmIGMucHJvcHMgJiYgIWMucHJvcHMuZGlzYWJsZWQgJiYgYWN0aXZlS2V5ID09PSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjLCBldmVudEtleSwgaSkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gYWN0aXZlS2V5O1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUtleSA9IG51bGw7XG5cbiAgaWYgKHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmICghYWN0aXZlS2V5ICYmIGMgJiYgIWMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgYWN0aXZlS2V5ID0gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoYywgZXZlbnRLZXksIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhY3RpdmVLZXk7XG4gIH1cblxuICByZXR1cm4gYWN0aXZlS2V5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoYykge1xuICBpZiAoYykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5zdGFuY2VBcnJheS5pbmRleE9mKGMpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudCBpZiBpdCdzIGFscmVhZHkgaW5zaWRlIGluc3RhbmNlQXJyYXlcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheVtpbmRleF0gPSBjO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgY29tcG9uZW50IGlmIGl0J3Mgbm90IGluIGluc3RhbmNlQXJyYXkgeWV0O1xuICAgICAgdGhpcy5pbnN0YW5jZUFycmF5LnB1c2goYyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBTdWJQb3B1cE1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgU3ViUG9wdXBNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN1YlBvcHVwTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN1YlBvcHVwTWVudSk7XG5cbiAgICBmdW5jdGlvbiBTdWJQb3B1cE1lbnUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1YlBvcHVwTWVudSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgLyoqXG4gICAgICAgKiBhbGwga2V5Ym9hcmQgZXZlbnRzIGNhbGxiYWNrcyBydW4gZnJvbSBoZXJlIGF0IGZpcnN0XG4gICAgICAgKlxuICAgICAgICogbm90ZTpcbiAgICAgICAqICBUaGlzIGxlZ2FjeSBjb2RlIHRoYXQgYG9uS2V5RG93bmAgaXMgY2FsbGVkIGJ5IHBhcmVudCBpbnN0ZWFkIG9mIGRvbSBzZWxmLlxuICAgICAgICogIHdoaWNoIG5lZWQgcmV0dXJuIGNvZGUgdG8gY2hlY2sgaWYgdGhpcyBldmVudCBpcyBoYW5kbGVkXG4gICAgICAgKi9cblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICB2YXIgaGFuZGxlZDtcblxuICAgICAgICBfdGhpcy5nZXRGbGF0SW5zdGFuY2VBcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIGlmIChvYmogJiYgb2JqLnByb3BzLmFjdGl2ZSAmJiBvYmoub25LZXlEb3duKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gb2JqLm9uS2V5RG93bihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aXZlSXRlbSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuVVAgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5ET1dOKSB7XG4gICAgICAgICAgYWN0aXZlSXRlbSA9IF90aGlzLnN0ZXAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCA/IC0xIDogMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlSXRlbSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB1cGRhdGVBY3RpdmVLZXkoX3RoaXMucHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KF90aGlzLnByb3BzKSwgYWN0aXZlSXRlbS5wcm9wcy5ldmVudEtleSk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhhY3RpdmVJdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkl0ZW1Ib3ZlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBrZXkgPSBlLmtleSxcbiAgICAgICAgICAgIGhvdmVyID0gZS5ob3ZlcjtcbiAgICAgICAgdXBkYXRlQWN0aXZlS2V5KF90aGlzLnByb3BzLnN0b3JlLCBnZXRFdmVudEtleShfdGhpcy5wcm9wcyksIGhvdmVyID8ga2V5IDogbnVsbCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRlc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25EZXNlbGVjdChzZWxlY3RJbmZvKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0SW5mbyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uT3BlbkNoYW5nZShlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRGVzdHJveSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgX3RoaXMucHJvcHMub25EZXN0cm95KGtleSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRGbGF0SW5zdGFuY2VBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmluc3RhbmNlQXJyYXk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zdGVwID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy5nZXRGbGF0SW5zdGFuY2VBcnJheSgpO1xuXG4gICAgICAgIHZhciBhY3RpdmVLZXkgPSBfdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZUtleVtnZXRFdmVudEtleShfdGhpcy5wcm9wcyldO1xuXG4gICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoKS5yZXZlcnNlKCk7XG4gICAgICAgIH0gLy8gZmluZCBjdXJyZW50IGFjdGl2ZUluZGV4XG5cblxuICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGMsIGNpKSB7XG4gICAgICAgICAgaWYgKGMgJiYgYy5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5KSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IGNpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIV90aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCAmJiBhY3RpdmVJbmRleCAhPT0gLTEgJiYgYWxsRGlzYWJsZWQoY2hpbGRyZW4uc2xpY2UoYWN0aXZlSW5kZXgsIGxlbiAtIDEpKSkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAoYWN0aXZlSW5kZXggKyAxKSAlIGxlbjtcbiAgICAgICAgdmFyIGkgPSBzdGFydDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgICBpZiAoIWNoaWxkIHx8IGNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpID0gKGkgKyAxKSAlIGxlbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoaSAhPT0gc3RhcnQpO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVuZGVyQ29tbW9uTWVudUl0ZW0gPSBmdW5jdGlvbiAoY2hpbGQsIGksIGV4dHJhUHJvcHMpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoY2hpbGQsIHByb3BzLmV2ZW50S2V5LCBpKTtcbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBjaGlsZC5wcm9wczsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTE1MTcjaXNzdWVjb21tZW50LTQ3NzQwMzA1NVxuXG4gICAgICAgIGlmICghY2hpbGRQcm9wcyB8fCB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNBY3RpdmUgPSBrZXkgPT09IHN0YXRlLmFjdGl2ZUtleTtcblxuICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgbW9kZTogY2hpbGRQcm9wcy5tb2RlIHx8IHByb3BzLm1vZGUsXG4gICAgICAgICAgbGV2ZWw6IHByb3BzLmxldmVsLFxuICAgICAgICAgIGlubGluZUluZGVudDogcHJvcHMuaW5saW5lSW5kZW50LFxuICAgICAgICAgIHJlbmRlck1lbnVJdGVtOiBfdGhpcy5yZW5kZXJNZW51SXRlbSxcbiAgICAgICAgICByb290UHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgcGFyZW50TWVudTogcHJvcHMucGFyZW50TWVudSxcbiAgICAgICAgICAvLyBjdXN0b21pemVkIHJlZiBmdW5jdGlvbiwgbmVlZCB0byBiZSBpbnZva2VkIG1hbnVhbGx5IGluIGNoaWxkJ3MgY29tcG9uZW50RGlkTW91bnRcbiAgICAgICAgICBtYW51YWxSZWY6IGNoaWxkUHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oY2hpbGQucmVmLCBzYXZlUmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKSxcbiAgICAgICAgICBldmVudEtleToga2V5LFxuICAgICAgICAgIGFjdGl2ZTogIWNoaWxkUHJvcHMuZGlzYWJsZWQgJiYgaXNBY3RpdmUsXG4gICAgICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgKGNoaWxkUHJvcHMub25DbGljayB8fCBub29wKShlKTtcblxuICAgICAgICAgICAgX3RoaXMub25DbGljayhlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uSXRlbUhvdmVyOiBfdGhpcy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICBtb3Rpb246IHByb3BzLm1vdGlvbixcbiAgICAgICAgICBzdWJNZW51T3BlbkRlbGF5OiBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICAgIHN1Yk1lbnVDbG9zZURlbGF5OiBwcm9wcy5zdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI6IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgICAgICBvbk9wZW5DaGFuZ2U6IF90aGlzLm9uT3BlbkNoYW5nZSxcbiAgICAgICAgICBvbkRlc2VsZWN0OiBfdGhpcy5vbkRlc2VsZWN0LFxuICAgICAgICAgIG9uU2VsZWN0OiBfdGhpcy5vblNlbGVjdCxcbiAgICAgICAgICBidWlsdGluUGxhY2VtZW50czogcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgICAgaXRlbUljb246IGNoaWxkUHJvcHMuaXRlbUljb24gfHwgX3RoaXMucHJvcHMuaXRlbUljb24sXG4gICAgICAgICAgZXhwYW5kSWNvbjogY2hpbGRQcm9wcy5leHBhbmRJY29uIHx8IF90aGlzLnByb3BzLmV4cGFuZEljb25cbiAgICAgICAgfSwgZXh0cmFQcm9wcyksIHt9LCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb25cbiAgICAgICAgfSk7IC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTM5NDNcblxuXG4gICAgICAgIGlmIChwcm9wcy5tb2RlID09PSAnaW5saW5lJyB8fCBpc01vYmlsZURldmljZSgpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbiA9ICdjbGljayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdDaGlsZFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbmRlck1lbnVJdGVtID0gZnVuY3Rpb24gKGMsIGksIHN1Yk1lbnVLZXkpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghYykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgICAgICBvcGVuS2V5czogc3RhdGUub3BlbktleXMsXG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzdGF0ZS5zZWxlY3RlZEtleXMsXG4gICAgICAgICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IF90aGlzLnByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgICAgIHN1Yk1lbnVLZXk6IHN1Yk1lbnVLZXlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtKGMsIGksIGV4dHJhUHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcHJvcHMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVLZXk6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXkpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wcy5ldmVudEtleSwgZ2V0QWN0aXZlS2V5KHByb3BzLCBwcm9wcy5hY3RpdmVLZXkpKSlcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuaW5zdGFuY2VBcnJheSA9IFtdO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdWJQb3B1cE1lbnUsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gaW52b2tlIGN1c3RvbWl6ZWQgcmVmIHRvIGV4cG9zZSBjb21wb25lbnQgdG8gbWl4aW5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYW51YWxSZWYodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXNpYmxlIHx8IG5leHRQcm9wcy52aXNpYmxlIHx8IHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lIHx8ICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcy5zdHlsZSwgbmV4dFByb3BzLnN0eWxlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgb3JpZ2luYWxBY3RpdmVLZXkgPSAnYWN0aXZlS2V5JyBpbiBwcm9wcyA/IHByb3BzLmFjdGl2ZUtleSA6IHByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5W2dldEV2ZW50S2V5KHByb3BzKV07XG4gICAgICAgIHZhciBhY3RpdmVLZXkgPSBnZXRBY3RpdmVLZXkocHJvcHMsIG9yaWdpbmFsQWN0aXZlS2V5KTtcblxuICAgICAgICBpZiAoYWN0aXZlS2V5ICE9PSBvcmlnaW5hbEFjdGl2ZUtleSkge1xuICAgICAgICAgIHVwZGF0ZUFjdGl2ZUtleShwcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkocHJvcHMpLCBhY3RpdmVLZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdhY3RpdmVLZXknIGluIHByZXZQcm9wcykge1xuICAgICAgICAgIC8vIElmIHByZXYgYWN0aXZlS2V5IGlzIG5vdCBzYW1lIGFzIGN1cnJlbnQgYWN0aXZlS2V5LFxuICAgICAgICAgIC8vIHdlIHNob3VsZCBzZXQgaXQuXG4gICAgICAgICAgdmFyIHByZXZBY3RpdmVLZXkgPSBnZXRBY3RpdmVLZXkocHJldlByb3BzLCBwcmV2UHJvcHMuYWN0aXZlS2V5KTtcblxuICAgICAgICAgIGlmIChhY3RpdmVLZXkgIT09IHByZXZBY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIHVwZGF0ZUFjdGl2ZUtleShwcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkocHJvcHMpLCBhY3RpdmVLZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlQXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMucHJlZml4Q2xzLCBwcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItXCIpLmNvbmNhdChwcm9wcy5tb2RlKSk7XG4gICAgICAgIHZhciBkb21Qcm9wcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICAvLyByb2xlIGNvdWxkIGJlICdzZWxlY3QnIGFuZCBieSBkZWZhdWx0IHNldCB0byBtZW51XG4gICAgICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudSdcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvcHMuaWQpIHtcbiAgICAgICAgICBkb21Qcm9wcy5pZCA9IHByb3BzLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLmZvY3VzYWJsZSkge1xuICAgICAgICAgIGRvbVByb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICBkb21Qcm9wcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5LFxuICAgICAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgICAgICBsZXZlbCA9IHByb3BzLmxldmVsLFxuICAgICAgICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yID0gcHJvcHMub3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICAgIHRoZW1lID0gcHJvcHMudGhlbWU7XG4gICAgICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgIH0pOyAvLyBPdGhlcndpc2UsIHRoZSBwcm9wYWdhdGVkIGNsaWNrIGV2ZW50IHdpbGwgdHJpZ2dlciBhbm90aGVyIG9uQ2xpY2tcblxuICAgICAgICBkZWxldGUgcHJvcHMub25DbGljaztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRE9NV3JhcCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yOiBvdmVyZmxvd2VkSW5kaWNhdG9yXG4gICAgICAgIH0sIGRvbVByb3BzKSwgUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucmVuZGVyTWVudUl0ZW0oYywgaSwgZXZlbnRLZXkgfHwgJzAtbWVudS0nKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdWJQb3B1cE1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBTdWJQb3B1cE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ3JjLW1lbnUnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICBsZXZlbDogMSxcbiAgICBpbmxpbmVJbmRlbnQ6IDI0LFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9jdXNhYmxlOiB0cnVlLFxuICAgIHN0eWxlOiB7fSxcbiAgICBtYW51YWxSZWY6IG5vb3BcbiAgfTtcbiAgcmV0dXJuIFN1YlBvcHVwTWVudTtcbn0oKTtcblxuZXhwb3J0IHsgU3ViUG9wdXBNZW51IH07XG52YXIgY29ubmVjdGVkID0gY29ubmVjdCgpKFN1YlBvcHVwTWVudSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWQ7IiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vU3ViTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSc7XG5pbXBvcnQgTWVudUl0ZW1Hcm91cCBmcm9tICcuL01lbnVJdGVtR3JvdXAnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmV4cG9ydCB7IFN1Yk1lbnUsIE1lbnVJdGVtIGFzIEl0ZW0sIE1lbnVJdGVtLCBNZW51SXRlbUdyb3VwLCBNZW51SXRlbUdyb3VwIGFzIEl0ZW1Hcm91cCwgRGl2aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJ2YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtN11cbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgN11cbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdXG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXVxuICB9XG59O1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzUnRsID0ge1xuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtN11cbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgN11cbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXVxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzTW9iaWxlIGZyb20gJy4vdXRpbHMvaXNNb2JpbGUnO1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUZyb21DaGlsZHJlbkluZGV4KGNoaWxkLCBtZW51RXZlbnRLZXksIGluZGV4KSB7XG4gIHZhciBwcmVmaXggPSBtZW51RXZlbnRLZXkgfHwgJyc7XG4gIHJldHVybiBjaGlsZC5rZXkgfHwgXCJcIi5jb25jYXQocHJlZml4LCBcIml0ZW1fXCIpLmNvbmNhdChpbmRleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShldmVudEtleSkge1xuICByZXR1cm4gXCJcIi5jb25jYXQoZXZlbnRLZXksIFwiLW1lbnUtXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgY2IpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgaW5kZXggKz0gMTtcblxuICAgIGlmIChjICYmIGMudHlwZSAmJiBjLnR5cGUuaXNNZW51SXRlbUdyb3VwKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjMikge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBjYihjMiwgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKGMsIGluZGV4KTtcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5KGNoaWxkcmVuLCBrZXlzLCByZXQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRyZW4gfHwgcmV0LmZpbmQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIGlmIChjKSB7XG4gICAgICB2YXIgY29uc3RydWN0ID0gYy50eXBlO1xuXG4gICAgICBpZiAoIWNvbnN0cnVjdCB8fCAhKGNvbnN0cnVjdC5pc1N1Yk1lbnUgfHwgY29uc3RydWN0LmlzTWVudUl0ZW0gfHwgY29uc3RydWN0LmlzTWVudUl0ZW1Hcm91cCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGMua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0LmZpbmQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChjLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5KGMucHJvcHMuY2hpbGRyZW4sIGtleXMsIHJldCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB2YXIgbWVudUFsbFByb3BzID0gWydkZWZhdWx0U2VsZWN0ZWRLZXlzJywgJ3NlbGVjdGVkS2V5cycsICdkZWZhdWx0T3BlbktleXMnLCAnb3BlbktleXMnLCAnbW9kZScsICdnZXRQb3B1cENvbnRhaW5lcicsICdvblNlbGVjdCcsICdvbkRlc2VsZWN0JywgJ29uRGVzdHJveScsICdvcGVuVHJhbnNpdGlvbk5hbWUnLCAnb3BlbkFuaW1hdGlvbicsICdzdWJNZW51T3BlbkRlbGF5JywgJ3N1Yk1lbnVDbG9zZURlbGF5JywgJ2ZvcmNlU3ViTWVudVJlbmRlcicsICd0cmlnZ2VyU3ViTWVudUFjdGlvbicsICdsZXZlbCcsICdzZWxlY3RhYmxlJywgJ211bHRpcGxlJywgJ29uT3BlbkNoYW5nZScsICd2aXNpYmxlJywgJ2ZvY3VzYWJsZScsICdkZWZhdWx0QWN0aXZlRmlyc3QnLCAncHJlZml4Q2xzJywgJ2lubGluZUluZGVudCcsICdwYXJlbnRNZW51JywgJ3RpdGxlJywgJ3Jvb3RQcmVmaXhDbHMnLCAnZXZlbnRLZXknLCAnYWN0aXZlJywgJ29uSXRlbUhvdmVyJywgJ29uVGl0bGVNb3VzZUVudGVyJywgJ29uVGl0bGVNb3VzZUxlYXZlJywgJ29uVGl0bGVDbGljaycsICdwb3B1cEFsaWduJywgJ3BvcHVwT2Zmc2V0JywgJ2lzT3BlbicsICdyZW5kZXJNZW51SXRlbScsICdtYW51YWxSZWYnLCAnc3ViTWVudUtleScsICdkaXNhYmxlZCcsICdpbmRleCcsICdpc1NlbGVjdGVkJywgJ3N0b3JlJywgJ2FjdGl2ZUtleScsICdidWlsdGluUGxhY2VtZW50cycsICdvdmVyZmxvd2VkSW5kaWNhdG9yJywgJ21vdGlvbicsIC8vIHRoZSBmb2xsb3dpbmcga2V5cyBmb3VuZCBuZWVkIHRvIGJlIHJlbW92ZWQgZnJvbSB0ZXN0IHJlZ3Jlc3Npb25cbidhdHRyaWJ1dGUnLCAndmFsdWUnLCAncG9wdXBDbGFzc05hbWUnLCAnaW5saW5lQ29sbGFwc2VkJywgJ21lbnUnLCAndGhlbWUnLCAnaXRlbUljb24nLCAnZXhwYW5kSWNvbiddOyAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0MDA3XG4vLyByZWY6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM2MDg4OVxuLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHJldHVybiB0aGUgZnVsbCBwcmVjaXNpb24gdmFsdWUsIHdoaWNoIGlzXG4vLyBub3QgdGhlIHNhbWUgYmVoYXZpb3IgYXMgb24gY2hyb21lLiBTZXQgdGhlIHByZWNpc2lvbiB0byA2IHRvXG4vLyB1bmlmeSB0aGVpciBiZWhhdmlvclxuXG5leHBvcnQgdmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICB2YXIgd2lkdGggPSBlbGVtICYmIHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXG4gIGlmICh3aWR0aCkge1xuICAgIHdpZHRoID0gK3dpZHRoLnRvRml4ZWQoNik7XG4gIH1cblxuICByZXR1cm4gd2lkdGggfHwgMDtcbn07XG5leHBvcnQgdmFyIHNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUoZWxlbSwgc3R5bGVQcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKGVsZW0gJiYgX3R5cGVvZihlbGVtLnN0eWxlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBlbGVtLnN0eWxlW3N0eWxlUHJvcGVydHldID0gdmFsdWU7XG4gIH1cbn07XG5leHBvcnQgdmFyIGlzTW9iaWxlRGV2aWNlID0gZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gIHJldHVybiBpc01vYmlsZS5hbnk7XG59OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8vIE1JVCBMaWNlbnNlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2thaW1hbGxlYS9pc01vYmlsZVxudmFyIGFwcGxlUGhvbmUgPSAvaVBob25lL2k7XG52YXIgYXBwbGVJcG9kID0gL2lQb2QvaTtcbnZhciBhcHBsZVRhYmxldCA9IC9pUGFkL2k7XG52YXIgYW5kcm9pZFBob25lID0gL1xcYkFuZHJvaWQoPzouKylNb2JpbGVcXGIvaTsgLy8gTWF0Y2ggJ0FuZHJvaWQnIEFORCAnTW9iaWxlJ1xuXG52YXIgYW5kcm9pZFRhYmxldCA9IC9BbmRyb2lkL2k7XG52YXIgYW1hem9uUGhvbmUgPSAvXFxiQW5kcm9pZCg/Oi4rKVNENDkzMFVSXFxiL2k7XG52YXIgYW1hem9uVGFibGV0ID0gL1xcYkFuZHJvaWQoPzouKykoPzpLRltBLVpdezIsNH0pXFxiL2k7XG52YXIgd2luZG93c1Bob25lID0gL1dpbmRvd3MgUGhvbmUvaTtcbnZhciB3aW5kb3dzVGFibGV0ID0gL1xcYldpbmRvd3MoPzouKylBUk1cXGIvaTsgLy8gTWF0Y2ggJ1dpbmRvd3MnIEFORCAnQVJNJ1xuXG52YXIgb3RoZXJCbGFja2JlcnJ5ID0gL0JsYWNrQmVycnkvaTtcbnZhciBvdGhlckJsYWNrYmVycnkxMCA9IC9CQjEwL2k7XG52YXIgb3RoZXJPcGVyYSA9IC9PcGVyYSBNaW5pL2k7XG52YXIgb3RoZXJDaHJvbWUgPSAvXFxiKENyaU9TfENocm9tZSkoPzouKylNb2JpbGUvaTtcbnZhciBvdGhlckZpcmVmb3ggPSAvTW9iaWxlKD86LispRmlyZWZveFxcYi9pOyAvLyBNYXRjaCAnTW9iaWxlJyBBTkQgJ0ZpcmVmb3gnXG5cbmZ1bmN0aW9uIG1hdGNoKHJlZ2V4LCB1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXNlckFnZW50KTtcbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUodXNlckFnZW50KSB7XG4gIHZhciB1YSA9IHVzZXJBZ2VudCB8fCAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogJycpOyAvLyBGYWNlYm9vayBtb2JpbGUgYXBwJ3MgaW50ZWdyYXRlZCBicm93c2VyIGFkZHMgYSBidW5jaCBvZiBzdHJpbmdzIHRoYXRcbiAgLy8gbWF0Y2ggZXZlcnl0aGluZy4gU3RyaXAgaXQgb3V0IGlmIGl0IGV4aXN0cy5cblxuICB2YXIgdG1wID0gdWEuc3BsaXQoJ1tGQkFOJyk7XG5cbiAgaWYgKHR5cGVvZiB0bXBbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIF90bXAgPSB0bXA7XG5cbiAgICB2YXIgX3RtcDIgPSBfc2xpY2VkVG9BcnJheShfdG1wLCAxKTtcblxuICAgIHVhID0gX3RtcDJbMF07XG4gIH0gLy8gVHdpdHRlciBtb2JpbGUgYXBwJ3MgaW50ZWdyYXRlZCBicm93c2VyIG9uIGlQYWQgYWRkcyBhIFwiVHdpdHRlciBmb3JcbiAgLy8gaVBob25lXCIgc3RyaW5nLiBTYW1lIHByb2JhYmx5IGhhcHBlbnMgb24gb3RoZXIgdGFibGV0IHBsYXRmb3Jtcy5cbiAgLy8gVGhpcyB3aWxsIGNvbmZ1c2UgZGV0ZWN0aW9uIHNvIHN0cmlwIGl0IG91dCBpZiBpdCBleGlzdHMuXG5cblxuICB0bXAgPSB1YS5zcGxpdCgnVHdpdHRlcicpO1xuXG4gIGlmICh0eXBlb2YgdG1wWzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfdG1wMyA9IHRtcDtcblxuICAgIHZhciBfdG1wNCA9IF9zbGljZWRUb0FycmF5KF90bXAzLCAxKTtcblxuICAgIHVhID0gX3RtcDRbMF07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGFwcGxlOiB7XG4gICAgICBwaG9uZTogbWF0Y2goYXBwbGVQaG9uZSwgdWEpICYmICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSxcbiAgICAgIGlwb2Q6IG1hdGNoKGFwcGxlSXBvZCwgdWEpLFxuICAgICAgdGFibGV0OiAhbWF0Y2goYXBwbGVQaG9uZSwgdWEpICYmIG1hdGNoKGFwcGxlVGFibGV0LCB1YSkgJiYgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpLFxuICAgICAgZGV2aWNlOiAobWF0Y2goYXBwbGVQaG9uZSwgdWEpIHx8IG1hdGNoKGFwcGxlSXBvZCwgdWEpIHx8IG1hdGNoKGFwcGxlVGFibGV0LCB1YSkpICYmICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKVxuICAgIH0sXG4gICAgYW1hem9uOiB7XG4gICAgICBwaG9uZTogbWF0Y2goYW1hem9uUGhvbmUsIHVhKSxcbiAgICAgIHRhYmxldDogIW1hdGNoKGFtYXpvblBob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uVGFibGV0LCB1YSksXG4gICAgICBkZXZpY2U6IG1hdGNoKGFtYXpvblBob25lLCB1YSkgfHwgbWF0Y2goYW1hem9uVGFibGV0LCB1YSlcbiAgICB9LFxuICAgIGFuZHJvaWQ6IHtcbiAgICAgIHBob25lOiAhbWF0Y2god2luZG93c1Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uUGhvbmUsIHVhKSB8fCAhbWF0Y2god2luZG93c1Bob25lLCB1YSkgJiYgbWF0Y2goYW5kcm9pZFBob25lLCB1YSksXG4gICAgICB0YWJsZXQ6ICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJiAhbWF0Y2goYW1hem9uUGhvbmUsIHVhKSAmJiAhbWF0Y2goYW5kcm9pZFBob25lLCB1YSkgJiYgKG1hdGNoKGFtYXpvblRhYmxldCwgdWEpIHx8IG1hdGNoKGFuZHJvaWRUYWJsZXQsIHVhKSksXG4gICAgICBkZXZpY2U6ICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJiAobWF0Y2goYW1hem9uUGhvbmUsIHVhKSB8fCBtYXRjaChhbWF6b25UYWJsZXQsIHVhKSB8fCBtYXRjaChhbmRyb2lkUGhvbmUsIHVhKSB8fCBtYXRjaChhbmRyb2lkVGFibGV0LCB1YSkpIHx8IG1hdGNoKC9cXGJva2h0dHBcXGIvaSwgdWEpXG4gICAgfSxcbiAgICB3aW5kb3dzOiB7XG4gICAgICBwaG9uZTogbWF0Y2god2luZG93c1Bob25lLCB1YSksXG4gICAgICB0YWJsZXQ6IG1hdGNoKHdpbmRvd3NUYWJsZXQsIHVhKSxcbiAgICAgIGRldmljZTogbWF0Y2god2luZG93c1Bob25lLCB1YSkgfHwgbWF0Y2god2luZG93c1RhYmxldCwgdWEpXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgYmxhY2tiZXJyeTogbWF0Y2gob3RoZXJCbGFja2JlcnJ5LCB1YSksXG4gICAgICBibGFja2JlcnJ5MTA6IG1hdGNoKG90aGVyQmxhY2tiZXJyeTEwLCB1YSksXG4gICAgICBvcGVyYTogbWF0Y2gob3RoZXJPcGVyYSwgdWEpLFxuICAgICAgZmlyZWZveDogbWF0Y2gob3RoZXJGaXJlZm94LCB1YSksXG4gICAgICBjaHJvbWU6IG1hdGNoKG90aGVyQ2hyb21lLCB1YSksXG4gICAgICBkZXZpY2U6IG1hdGNoKG90aGVyQmxhY2tiZXJyeSwgdWEpIHx8IG1hdGNoKG90aGVyQmxhY2tiZXJyeTEwLCB1YSkgfHwgbWF0Y2gob3RoZXJPcGVyYSwgdWEpIHx8IG1hdGNoKG90aGVyRmlyZWZveCwgdWEpIHx8IG1hdGNoKG90aGVyQ2hyb21lLCB1YSlcbiAgICB9LFxuICAgIC8vIEFkZGl0aW9uYWxcbiAgICBhbnk6IG51bGwsXG4gICAgcGhvbmU6IG51bGwsXG4gICAgdGFibGV0OiBudWxsXG4gIH07XG4gIHJlc3VsdC5hbnkgPSByZXN1bHQuYXBwbGUuZGV2aWNlIHx8IHJlc3VsdC5hbmRyb2lkLmRldmljZSB8fCByZXN1bHQud2luZG93cy5kZXZpY2UgfHwgcmVzdWx0Lm90aGVyLmRldmljZTsgLy8gZXhjbHVkZXMgJ290aGVyJyBkZXZpY2VzIGFuZCBpcG9kcywgdGFyZ2V0aW5nIHRvdWNoc2NyZWVuIHBob25lc1xuXG4gIHJlc3VsdC5waG9uZSA9IHJlc3VsdC5hcHBsZS5waG9uZSB8fCByZXN1bHQuYW5kcm9pZC5waG9uZSB8fCByZXN1bHQud2luZG93cy5waG9uZTtcbiAgcmVzdWx0LnRhYmxldCA9IHJlc3VsdC5hcHBsZS50YWJsZXQgfHwgcmVzdWx0LmFuZHJvaWQudGFibGV0IHx8IHJlc3VsdC53aW5kb3dzLnRhYmxldDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGRlZmF1bHRSZXN1bHQgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGlzTW9iaWxlKCkpLCB7fSwge1xuICBpc01vYmlsZTogaXNNb2JpbGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UmVzdWx0OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3Rpb24oX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBtb3Rpb24gPSBfcmVmLm1vdGlvbixcbiAgICAgIG9wZW5BbmltYXRpb24gPSBfcmVmLm9wZW5BbmltYXRpb24sXG4gICAgICBvcGVuVHJhbnNpdGlvbk5hbWUgPSBfcmVmLm9wZW5UcmFuc2l0aW9uTmFtZTtcblxuICBpZiAobW90aW9uKSB7XG4gICAgcmV0dXJuIG1vdGlvbjtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKG9wZW5BbmltYXRpb24pID09PSAnb2JqZWN0JyAmJiBvcGVuQW5pbWF0aW9uKSB7XG4gICAgd2FybmluZyhmYWxzZSwgJ09iamVjdCB0eXBlIG9mIGBvcGVuQW5pbWF0aW9uYCBpcyByZW1vdmVkLiBQbGVhc2UgdXNlIGBtb3Rpb25gIGluc3RlYWQuJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wZW5BbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3Blbi1cIikuY29uY2F0KG9wZW5BbmltYXRpb24pXG4gICAgfTtcbiAgfVxuXG4gIGlmIChvcGVuVHJhbnNpdGlvbk5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogb3BlblRyYW5zaXRpb25OYW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBDb250ZW50ID0gZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xuICB2YXIgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lclwiKSxcbiAgICBpZDogaWQsXG4gICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgc3R5bGU6IG92ZXJsYXlJbm5lclN0eWxlXG4gIH0sIHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nID8gb3ZlcmxheSgpIDogb3ZlcmxheSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL3BsYWNlbWVudHMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcblxudmFyIFRvb2x0aXAgPSBmdW5jdGlvbiBUb29sdGlwKHByb3BzLCByZWYpIHtcbiAgdmFyIG92ZXJsYXlDbGFzc05hbWUgPSBwcm9wcy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgICAgdHJpZ2dlciA9IF9wcm9wcyR0cmlnZ2VyID09PSB2b2lkIDAgPyBbJ2hvdmVyJ10gOiBfcHJvcHMkdHJpZ2dlcixcbiAgICAgIF9wcm9wcyRtb3VzZUVudGVyRGVsYSA9IHByb3BzLm1vdXNlRW50ZXJEZWxheSxcbiAgICAgIG1vdXNlRW50ZXJEZWxheSA9IF9wcm9wcyRtb3VzZUVudGVyRGVsYSA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRtb3VzZUVudGVyRGVsYSxcbiAgICAgIF9wcm9wcyRtb3VzZUxlYXZlRGVsYSA9IHByb3BzLm1vdXNlTGVhdmVEZWxheSxcbiAgICAgIG1vdXNlTGVhdmVEZWxheSA9IF9wcm9wcyRtb3VzZUxlYXZlRGVsYSA9PT0gdm9pZCAwID8gMC4xIDogX3Byb3BzJG1vdXNlTGVhdmVEZWxhLFxuICAgICAgb3ZlcmxheVN0eWxlID0gcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy10b29sdGlwJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlLFxuICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gcHJvcHMuYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcHJvcHMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyAncmlnaHQnIDogX3Byb3BzJHBsYWNlbWVudCxcbiAgICAgIF9wcm9wcyRhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgYWxpZ24gPSBfcHJvcHMkYWxpZ24gPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJGFsaWduLFxuICAgICAgX3Byb3BzJGRlc3Ryb3lUb29sdGlwID0gcHJvcHMuZGVzdHJveVRvb2x0aXBPbkhpZGUsXG4gICAgICBkZXN0cm95VG9vbHRpcE9uSGlkZSA9IF9wcm9wcyRkZXN0cm95VG9vbHRpcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGVzdHJveVRvb2x0aXAsXG4gICAgICBkZWZhdWx0VmlzaWJsZSA9IHByb3BzLmRlZmF1bHRWaXNpYmxlLFxuICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvdmVybGF5Q2xhc3NOYW1lXCIsIFwidHJpZ2dlclwiLCBcIm1vdXNlRW50ZXJEZWxheVwiLCBcIm1vdXNlTGVhdmVEZWxheVwiLCBcIm92ZXJsYXlTdHlsZVwiLCBcInByZWZpeENsc1wiLCBcImNoaWxkcmVuXCIsIFwib25WaXNpYmxlQ2hhbmdlXCIsIFwiYWZ0ZXJWaXNpYmxlQ2hhbmdlXCIsIFwidHJhbnNpdGlvbk5hbWVcIiwgXCJhbmltYXRpb25cIiwgXCJwbGFjZW1lbnRcIiwgXCJhbGlnblwiLCBcImRlc3Ryb3lUb29sdGlwT25IaWRlXCIsIFwiZGVmYXVsdFZpc2libGVcIiwgXCJnZXRUb29sdGlwQ29udGFpbmVyXCIsIFwib3ZlcmxheUlubmVyU3R5bGVcIl0pO1xuXG4gIHZhciBkb21SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvbVJlZi5jdXJyZW50O1xuICB9KTtcblxuICB2YXIgZXh0cmFQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHJlc3RQcm9wcyk7XG5cbiAgaWYgKCd2aXNpYmxlJyBpbiBwcm9wcykge1xuICAgIGV4dHJhUHJvcHMucG9wdXBWaXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgfVxuXG4gIHZhciBnZXRQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRQb3B1cEVsZW1lbnQoKSB7XG4gICAgdmFyIF9wcm9wcyRhcnJvd0NvbnRlbnQgPSBwcm9wcy5hcnJvd0NvbnRlbnQsXG4gICAgICAgIGFycm93Q29udGVudCA9IF9wcm9wcyRhcnJvd0NvbnRlbnQgPT09IHZvaWQgMCA/IG51bGwgOiBfcHJvcHMkYXJyb3dDb250ZW50LFxuICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcbiAgICByZXR1cm4gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFycm93XCIpLFxuICAgICAga2V5OiBcImFycm93XCJcbiAgICB9LCBhcnJvd0NvbnRlbnQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHtcbiAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZTogb3ZlcmxheUlubmVyU3R5bGVcbiAgICB9KV07XG4gIH07XG5cbiAgdmFyIGRlc3Ryb3lUb29sdGlwID0gZmFsc2U7XG4gIHZhciBhdXRvRGVzdHJveSA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgZGVzdHJveVRvb2x0aXBPbkhpZGUgPT09ICdib29sZWFuJykge1xuICAgIGRlc3Ryb3lUb29sdGlwID0gZGVzdHJveVRvb2x0aXBPbkhpZGU7XG4gIH0gZWxzZSBpZiAoZGVzdHJveVRvb2x0aXBPbkhpZGUgJiYgX3R5cGVvZihkZXN0cm95VG9vbHRpcE9uSGlkZSkgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGtlZXBQYXJlbnQgPSBkZXN0cm95VG9vbHRpcE9uSGlkZS5rZWVwUGFyZW50O1xuICAgIGRlc3Ryb3lUb29sdGlwID0ga2VlcFBhcmVudCA9PT0gdHJ1ZTtcbiAgICBhdXRvRGVzdHJveSA9IGtlZXBQYXJlbnQgPT09IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwgT2JqZWN0LmFzc2lnbih7XG4gICAgcG9wdXBDbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgcG9wdXA6IGdldFBvcHVwRWxlbWVudCxcbiAgICBhY3Rpb246IHRyaWdnZXIsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudHMsXG4gICAgcG9wdXBQbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICByZWY6IGRvbVJlZixcbiAgICBwb3B1cEFsaWduOiBhbGlnbixcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBhZnRlclZpc2libGVDaGFuZ2UsXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXBBbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBkZWZhdWx0VmlzaWJsZSxcbiAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lUb29sdGlwLFxuICAgIGF1dG9EZXN0cm95OiBhdXRvRGVzdHJveSxcbiAgICBtb3VzZUxlYXZlRGVsYXk6IG1vdXNlTGVhdmVEZWxheSxcbiAgICBwb3B1cFN0eWxlOiBvdmVybGF5U3R5bGUsXG4gICAgbW91c2VFbnRlckRlbGF5OiBtb3VzZUVudGVyRGVsYXlcbiAgfSwgZXh0cmFQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoVG9vbHRpcCk7IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJztcbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7IiwidmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5wbGFjZW1lbnRzID0gdm9pZCAwO1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG52YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcbmV4cG9ydHMucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG52YXIgX2RlZmF1bHQgPSBwbGFjZW1lbnRzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBBbGlnbiBmcm9tICdyYy1hbGlnbic7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSYXdDU1NNb3Rpb24gZnJvbSBcInJjLWFuaW1hdGUvZXMvQ1NTTW90aW9uXCI7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IHsgZ2V0TW90aW9uIH0gZnJvbSAnLi91dGlscy9sZWdhY3lVdGlsJztcbnZhciBDU1NNb3Rpb24gPSBSYXdDU1NNb3Rpb247XG5cbmZ1bmN0aW9uIHN1cHBvcnRNb3Rpb24obW90aW9uKSB7XG4gIHJldHVybiBtb3Rpb24gJiYgbW90aW9uLm1vdGlvbk5hbWU7XG59XG5cbnZhciBQb3B1cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9wdXAsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUG9wdXApO1xuXG4gIGZ1bmN0aW9uIFBvcHVwKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdGFyZ2V0V2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgIHRhcmdldEhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgcHJldlZpc2libGU6IG51bGwsXG4gICAgICBhbGlnbkNsYXNzTmFtZTogbnVsbFxuICAgIH07XG4gICAgX3RoaXMucG9wdXBSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5hbGlnblJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLm5leHRGcmFtZVN0YXRlID0gbnVsbDtcbiAgICBfdGhpcy5uZXh0RnJhbWVJZCA9IG51bGw7XG5cbiAgICBfdGhpcy5vbkFsaWduID0gZnVuY3Rpb24gKHBvcHVwRG9tTm9kZSwgYWxpZ24pIHtcbiAgICAgIHZhciBzdGF0dXMgPSBfdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ24gPSBfdGhpcyRwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24sXG4gICAgICAgICAgb25BbGlnbiA9IF90aGlzJHByb3BzLm9uQWxpZ247XG4gICAgICB2YXIgYWxpZ25DbGFzc05hbWUgPSBnZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pO1xuXG4gICAgICBpZiAoc3RhdHVzID09PSAnYWxpZ24nKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbGlnbkNsYXNzTmFtZTogYWxpZ25DbGFzc05hbWUsXG4gICAgICAgICAgc3RhdHVzOiAnYWxpZ25lZCdcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmFsaWduUmVmLmN1cnJlbnQuZm9yY2VBbGlnbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnYWxpZ25lZCcpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFsaWduQ2xhc3NOYW1lOiBhbGlnbkNsYXNzTmFtZSxcbiAgICAgICAgICBzdGF0dXM6ICdhZnRlckFsaWduJ1xuICAgICAgICB9KTtcblxuICAgICAgICBvbkFsaWduKHBvcHVwRG9tTm9kZSwgYWxpZ24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFsaWduQ2xhc3NOYW1lOiBhbGlnbkNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3Rpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmlzaWJsZSA9IF90aGlzLnByb3BzLnZpc2libGU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiB2aXNpYmxlID8gJ0FmdGVyTW90aW9uJyA6ICdzdGFibGUnXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgX3RoaXMuY2FuY2VsRnJhbWVTdGF0ZSgpO1xuXG4gICAgICBfdGhpcy5uZXh0RnJhbWVTdGF0ZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMubmV4dEZyYW1lU3RhdGUpLCBzdGF0ZSk7XG4gICAgICBfdGhpcy5uZXh0RnJhbWVJZCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJtaXRTdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIF90aGlzLm5leHRGcmFtZVN0YXRlKTtcblxuICAgICAgICBfdGhpcy5uZXh0RnJhbWVTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3VibWl0U3RhdGUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE1vdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBnZXRNb3Rpb24oX3RoaXMucHJvcHMpKTtcbiAgICB9OyAvLyBgdGFyZ2V0YCBvbiBgcmMtYWxpZ25gIGNhbiBhY2NlcHQgYXMgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGJpbmQgZWxlbWVudCBvciBhIHBvaW50LlxuICAgIC8vIHJlZjogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtYWxpZ25cblxuXG4gICAgX3RoaXMuZ2V0QWxpZ25UYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcG9pbnQgPSBfdGhpcyRwcm9wczIucG9pbnQsXG4gICAgICAgICAgZ2V0Um9vdERvbU5vZGUgPSBfdGhpcyRwcm9wczIuZ2V0Um9vdERvbU5vZGU7XG5cbiAgICAgIGlmIChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRSb290RG9tTm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2FuY2VsRnJhbWVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJhZi5jYW5jZWwoX3RoaXMubmV4dEZyYW1lSWQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZS5zdGF0dXMsXG4gICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gX3RoaXMkc3RhdGUudGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgIHRhcmdldFdpZHRoID0gX3RoaXMkc3RhdGUudGFyZ2V0V2lkdGgsXG4gICAgICAgICAgYWxpZ25DbGFzc05hbWUgPSBfdGhpcyRzdGF0ZS5hbGlnbkNsYXNzTmFtZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGUsXG4gICAgICAgICAgc3RyZXRjaCA9IF90aGlzJHByb3BzMy5zdHJldGNoLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczMudmlzaWJsZSxcbiAgICAgICAgICBhbGlnbiA9IF90aGlzJHByb3BzMy5hbGlnbixcbiAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfdGhpcyRwcm9wczMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzMy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRG93biA9IF90aGlzJHByb3BzMy5vbk1vdXNlRG93bixcbiAgICAgICAgICBvblRvdWNoU3RhcnQgPSBfdGhpcyRwcm9wczMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMzLmNoaWxkcmVuO1xuICAgICAgdmFyIG1lcmdlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIGFsaWduQ2xhc3NOYW1lKTtcbiAgICAgIHZhciBoaWRkZW5DbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhpZGRlblwiKTsgLy8gPT09PT09PT09PT09PT09PT09IFN0eWxlID09PT09PT09PT09PT09PT09PVxuXG4gICAgICB2YXIgc2l6ZVN0eWxlID0ge307XG5cbiAgICAgIGlmIChzdHJldGNoKSB7XG4gICAgICAgIC8vIFN0cmV0Y2ggd2l0aCB0YXJnZXRcbiAgICAgICAgaWYgKHN0cmV0Y2guaW5kZXhPZignaGVpZ2h0JykgIT09IC0xKSB7XG4gICAgICAgICAgc2l6ZVN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbkhlaWdodCcpICE9PSAtMSkge1xuICAgICAgICAgIHNpemVTdHlsZS5taW5IZWlnaHQgPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCd3aWR0aCcpICE9PSAtMSkge1xuICAgICAgICAgIHNpemVTdHlsZS53aWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmV0Y2guaW5kZXhPZignbWluV2lkdGgnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzaXplU3R5bGUubWluV2lkdGggPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWVyZ2VkU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzaXplU3R5bGUpLCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpKSwgc3R5bGUpLCB7fSwge1xuICAgICAgICBvcGFjaXR5OiBzdGF0dXMgPT09ICdzdGFibGUnIHx8ICF2aXNpYmxlID8gdW5kZWZpbmVkIDogMFxuICAgICAgfSk7IC8vID09PT09PT09PT09PT09PT09IE1vdGlvbnMgPT09PT09PT09PT09PT09PT1cblxuXG4gICAgICB2YXIgbWVyZ2VkTW90aW9uID0gX3RoaXMuZ2V0TW90aW9uKCk7XG5cbiAgICAgIHZhciBtZXJnZWRNb3Rpb25WaXNpYmxlID0gdmlzaWJsZTtcblxuICAgICAgaWYgKHZpc2libGUgJiYgc3RhdHVzICE9PSAnYmVmb3JlTW90aW9uJyAmJiBzdGF0dXMgIT09ICdtb3Rpb24nICYmIHN0YXR1cyAhPT0gJ3N0YWJsZScpIHtcbiAgICAgICAgbWVyZ2VkTW90aW9uLm1vdGlvbkFwcGVhciA9IGZhbHNlO1xuICAgICAgICBtZXJnZWRNb3Rpb24ubW90aW9uRW50ZXIgPSBmYWxzZTtcbiAgICAgICAgbWVyZ2VkTW90aW9uLm1vdGlvbkxlYXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICdhZnRlckFsaWduJyB8fCBzdGF0dXMgPT09ICdiZWZvcmVNb3Rpb24nKSB7XG4gICAgICAgIG1lcmdlZE1vdGlvblZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0gLy8gPT09PT09PT09PT09PT09PT09IEFsaWduID09PT09PT09PT09PT09PT09PVxuXG5cbiAgICAgIHZhciBtZXJnZWRBbGlnbkRpc2FibGVkID0gIXZpc2libGUgfHwgc3RhdHVzICE9PSAnYWxpZ24nICYmIHN0YXR1cyAhPT0gJ2FsaWduZWQnICYmIHN0YXR1cyAhPT0gJ3N0YWJsZSc7IC8vID09PT09PT09PT09PT09PT09PSBQb3B1cCA9PT09PT09PT09PT09PT09PT1cblxuICAgICAgdmFyIG1lcmdlZFBvcHVwVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICdzdGFibGUnKSB7XG4gICAgICAgIG1lcmdlZFBvcHVwVmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB9IC8vIE9ubHkgcmVtb3ZlIHBvcHVwIHNpbmNlIG1hc2sgbWF5IHN0aWxsIG5lZWQgYW5pbWF0aW9uXG5cblxuICAgICAgaWYgKGRlc3Ryb3lQb3B1cE9uSGlkZSAmJiAhbWVyZ2VkUG9wdXBWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB2aXNpYmxlOiBtZXJnZWRNb3Rpb25WaXNpYmxlXG4gICAgICB9LCBtZXJnZWRNb3Rpb24sIHtcbiAgICAgICAgcmVtb3ZlT25MZWF2ZTogZmFsc2UsXG4gICAgICAgIG9uRW50ZXJFbmQ6IF90aGlzLm9uTW90aW9uRW5kLFxuICAgICAgICBvbkxlYXZlRW5kOiBfdGhpcy5vbk1vdGlvbkVuZFxuICAgICAgfSksIGZ1bmN0aW9uIChfcmVmLCBtb3Rpb25SZWYpIHtcbiAgICAgICAgdmFyIG1vdGlvblN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgICAgICAgIG1vdGlvbkNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBbGlnbiwge1xuICAgICAgICAgIHRhcmdldDogX3RoaXMuZ2V0QWxpZ25UYXJnZXQoKSxcbiAgICAgICAgICBrZXk6IFwicG9wdXBcIixcbiAgICAgICAgICByZWY6IF90aGlzLmFsaWduUmVmLFxuICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IG1lcmdlZEFsaWduRGlzYWJsZWQsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IF90aGlzLm9uQWxpZ25cbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChQb3B1cElubmVyLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgdmlzaWJsZTogbWVyZ2VkUG9wdXBWaXNpYmxlLFxuICAgICAgICAgIGhpZGRlbkNsYXNzTmFtZTogaGlkZGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhtZXJnZWRDbGFzc05hbWUsIG1vdGlvbkNsYXNzTmFtZSksXG4gICAgICAgICAgcmVmOiBjb21wb3NlUmVmKG1vdGlvblJlZiwgX3RoaXMucG9wdXBSZWYpLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZXJnZWRTdHlsZSksIG1vdGlvblN0eWxlKVxuICAgICAgICB9LCBjaGlsZHJlbikpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlck1hc2tFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wczQubWFzayxcbiAgICAgICAgICBtYXNrTW90aW9uID0gX3RoaXMkcHJvcHM0Lm1hc2tNb3Rpb24sXG4gICAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHM0Lm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBtYXNrQW5pbWF0aW9uID0gX3RoaXMkcHJvcHM0Lm1hc2tBbmltYXRpb24sXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHM0LnByZWZpeENscyxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHM0LnZpc2libGU7XG5cbiAgICAgIGlmICghbWFzaykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1vdGlvbiA9IHt9O1xuXG4gICAgICBpZiAobWFza01vdGlvbiAmJiBtYXNrTW90aW9uLm1vdGlvbk5hbWUpIHtcbiAgICAgICAgbW90aW9uID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgbW90aW9uQXBwZWFyOiB0cnVlXG4gICAgICAgIH0sIGdldE1vdGlvbih7XG4gICAgICAgICAgbW90aW9uOiBtYXNrTW90aW9uLFxuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgYW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBPYmplY3QuYXNzaWduKHt9LCBtb3Rpb24sIHtcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZVxuICAgICAgfSksIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgc3R5bGU6IF90aGlzLmdldFpJbmRleFN0eWxlKCksXG4gICAgICAgICAga2V5OiBcIm1hc2tcIixcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tYXNrXCIpLCBjbGFzc05hbWUpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3B1cCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZ2V0Um9vdERvbU5vZGUgPSBfdGhpcyRwcm9wczUuZ2V0Um9vdERvbU5vZGUsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzNS52aXNpYmxlLFxuICAgICAgICAgIHN0cmV0Y2ggPSBfdGhpcyRwcm9wczUuc3RyZXRjaDsgLy8gSWYgdGhlcmUgaXMgYSBwZW5kaW5nIHN0YXRlIHVwZGF0ZSwgY2FuY2VsIGl0LCBhIG5ldyBvbmUgd2lsbCBiZSBzZXQgaWYgbmVjZXNzYXJ5XG5cbiAgICAgIHRoaXMuY2FuY2VsRnJhbWVTdGF0ZSgpO1xuXG4gICAgICBpZiAodmlzaWJsZSAmJiBzdGF0dXMgIT09ICdzdGFibGUnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlT25OZXh0RnJhbWUoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogc3RyZXRjaCA/ICdtZWFzdXJlJyA6ICdhbGlnbidcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnYWZ0ZXJBbGlnbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdXBwb3J0TW90aW9uKHRoaXMuZ2V0TW90aW9uKCkpID8gJ2JlZm9yZU1vdGlvbicgOiAnc3RhYmxlJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdBZnRlck1vdGlvbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3RhYmxlJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBHbyB0byBuZXh0IHN0YXR1c1xuICAgICAgICAgICAgICB2YXIgcXVldWUgPSBbJ21lYXN1cmUnLCAnYWxpZ24nLCBudWxsLCAnYmVmb3JlTW90aW9uJywgJ21vdGlvbiddO1xuICAgICAgICAgICAgICB2YXIgaW5kZXggPSBxdWV1ZS5pbmRleE9mKHN0YXR1cyk7XG4gICAgICAgICAgICAgIHZhciBuZXh0U3RhdHVzID0gcXVldWVbaW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xICYmIG5leHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlT25OZXh0RnJhbWUoe1xuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBuZXh0U3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBNZWFzdXJlIHN0cmV0Y2ggc2l6ZVxuXG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICdtZWFzdXJlJykge1xuICAgICAgICB2YXIgJGVsZSA9IGdldFJvb3REb21Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCRlbGUpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlT25OZXh0RnJhbWUoe1xuICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0OiAkZWxlLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIHRhcmdldFdpZHRoOiAkZWxlLm9mZnNldFdpZHRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNhbmNlbEZyYW1lU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0WkluZGV4U3R5bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0WkluZGV4U3R5bGUoKSB7XG4gICAgICB2YXIgekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB6SW5kZXg6IHpJbmRleFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucmVuZGVyTWFza0VsZW1lbnQoKSwgdGhpcy5yZW5kZXJQb3B1cEVsZW1lbnQoKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmMywgX3JlZjQpIHtcbiAgICAgIHZhciB2aXNpYmxlID0gX3JlZjMudmlzaWJsZSxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgW1widmlzaWJsZVwiXSk7XG5cbiAgICAgIHZhciBwcmV2VmlzaWJsZSA9IF9yZWY0LnByZXZWaXNpYmxlLFxuICAgICAgICAgIHN0YXR1cyA9IF9yZWY0LnN0YXR1cztcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgcHJldlZpc2libGU6IHZpc2libGUsXG4gICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICB9O1xuICAgICAgdmFyIG1lcmdlZE1vdGlvbiA9IGdldE1vdGlvbihwcm9wcyk7XG5cbiAgICAgIGlmIChwcmV2VmlzaWJsZSA9PT0gbnVsbCAmJiB2aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAvLyBJbml0IHJlbmRlciBzaG91bGQgYWx3YXlzIGJlIHN0YWJsZVxuICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSAnc3RhYmxlJztcbiAgICAgIH0gZWxzZSBpZiAodmlzaWJsZSAhPT0gcHJldlZpc2libGUpIHtcbiAgICAgICAgaWYgKHZpc2libGUgfHwgc3VwcG9ydE1vdGlvbihtZXJnZWRNb3Rpb24pICYmIFsnbW90aW9uJywgJ0FmdGVyTW90aW9uJywgJ3N0YWJsZSddLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9ICdzdGFibGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5hbGlnbkNsYXNzTmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3B1cDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4vKiBlc2xpbnQtZW5hYmxlICovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgUG9wdXBJbm5lciA9IGZ1bmN0aW9uIFBvcHVwSW5uZXIocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvblRvdWNoU3RhcnQgPSBwcm9wcy5vblRvdWNoU3RhcnQ7XG4gIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjtcblxuICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMSkge1xuICAgIGNoaWxkTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgICB9LCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgIXZpc2libGUgJiYgXCJcIi5jb25jYXQocHJvcHMuaGlkZGVuQ2xhc3NOYW1lKSksXG4gICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgIG9uVG91Y2hTdGFydDogb25Ub3VjaFN0YXJ0LFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZE5vZGUpO1xufTtcblxudmFyIFJlZlBvcHVwSW5uZXIgPSBSZWFjdC5mb3J3YXJkUmVmKFBvcHVwSW5uZXIpO1xuUmVmUG9wdXBJbm5lci5kaXNwbGF5TmFtZSA9ICdQb3B1cElubmVyJztcbmV4cG9ydCBkZWZhdWx0IFJlZlBvcHVwSW5uZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBUcmlnZ2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZGVmYXVsdCBUcmlnZ2VyQ29udGV4dDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jb250YWluc1wiO1xuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gXCJyYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZVwiO1xuaW1wb3J0IHsgY29tcG9zZVJlZiwgc3VwcG9ydFJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCBQb3J0YWwgZnJvbSBcInJjLXV0aWwvZXMvUG9ydGFsXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldEFsaWduRnJvbVBsYWNlbWVudCwgZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZSB9IGZyb20gJy4vdXRpbHMvYWxpZ25VdGlsJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBUcmlnZ2VyQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gcmV0dXJuRW1wdHlTdHJpbmcoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmV0dXJuRG9jdW1lbnQoKSB7XG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG59XG5cbnZhciBBTExfSEFORExFUlMgPSBbJ29uQ2xpY2snLCAnb25Nb3VzZURvd24nLCAnb25Ub3VjaFN0YXJ0JywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlTGVhdmUnLCAnb25Gb2N1cycsICdvbkJsdXInLCAnb25Db250ZXh0TWVudSddO1xuLyoqXG4gKiBJbnRlcm5hbCB1c2FnZS4gRG8gbm90IHVzZSBpbiB5b3VyIGNvZGUgc2luY2UgdGhpcyB3aWxsIGJlIHJlbW92ZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlcihQb3J0YWxDb21wb25lbnQpIHtcbiAgdmFyIFRyaWdnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVHJpZ2dlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRyaWdnZXIpO1xuXG4gICAgZnVuY3Rpb24gVHJpZ2dlcihwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcik7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgX3RoaXMucG9wdXBSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgIF90aGlzLnRyaWdnZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG1vdXNlRW50ZXJEZWxheSA9IF90aGlzLnByb3BzLm1vdXNlRW50ZXJEZWxheTtcblxuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBtb3VzZUVudGVyRGVsYXksIG1vdXNlRW50ZXJEZWxheSA/IG51bGwgOiBlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZU1vdmUnLCBlKTtcblxuICAgICAgICBfdGhpcy5zZXRQb2ludChlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VMZWF2ZScsIGUpO1xuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvcHVsbC8xM1xuICAgICAgICAvLyByZWFjdCBidWc/XG4gICAgICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgJiYgIWUucmVsYXRlZFRhcmdldC5zZXRUaW1lb3V0ICYmIF90aGlzLnBvcHVwUmVmLmN1cnJlbnQgJiYgX3RoaXMucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50ICYmIGNvbnRhaW5zKF90aGlzLnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudCwgZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uRm9jdXMnLCBlKTsgLy8gaW5jYXNlIGZvY3VzaW4gYW5kIGZvY3Vzb3V0XG5cblxuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIF90aGlzLnByb3BzLmZvY3VzRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VEb3duJywgZSk7XG5cbiAgICAgICAgX3RoaXMucHJlQ2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uVG91Y2hTdGFydCcsIGUpO1xuXG4gICAgICAgIF90aGlzLnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcblxuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMuYmx1ckRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Db250ZXh0TWVudSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkNvbnRleHRNZW51JywgZSk7XG5cbiAgICAgICAgX3RoaXMuc2V0UG9wdXBWaXNpYmxlKHRydWUsIGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Db250ZXh0TWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkNsaWNrJywgZXZlbnQpOyAvLyBmb2N1cyB3aWxsIHRyaWdnZXIgY2xpY2tcblxuXG4gICAgICAgIGlmIChfdGhpcy5mb2N1c1RpbWUpIHtcbiAgICAgICAgICB2YXIgcHJlVGltZTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcmVDbGlja1RpbWUgJiYgX3RoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4oX3RoaXMucHJlQ2xpY2tUaW1lLCBfdGhpcy5wcmVUb3VjaFRpbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlQ2xpY2tUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gX3RoaXMucHJlQ2xpY2tUaW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgICAgICBwcmVUaW1lID0gX3RoaXMucHJlVG91Y2hUaW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChNYXRoLmFicyhwcmVUaW1lIC0gX3RoaXMuZm9jdXNUaW1lKSA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuZm9jdXNUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnByZUNsaWNrVGltZSA9IDA7XG4gICAgICAgIF90aGlzLnByZVRvdWNoVGltZSA9IDA7IC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IHdoZW4gYWxsIHRoZSBhY3Rpb24gaXMgY2xpY2suXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE3MDQzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE3MjkxXG5cbiAgICAgICAgaWYgKF90aGlzLmlzQ2xpY2tUb1Nob3coKSAmJiAoX3RoaXMuaXNDbGlja1RvSGlkZSgpIHx8IF90aGlzLmlzQmx1clRvSGlkZSgpKSAmJiBldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFZpc2libGUgPSAhX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIF90aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLnNldFBvcHVwVmlzaWJsZSghX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmhhc1BvcHVwTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgICAgICBfdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmhhc1BvcHVwTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIGlmIChfdGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgdmFyIF90aGlzJGNvbnRleHQ7XG5cbiAgICAgICAgICAoX3RoaXMkY29udGV4dCA9IF90aGlzLmNvbnRleHQpLm9uUG9wdXBNb3VzZURvd24uYXBwbHkoX3RoaXMkY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Eb2N1bWVudENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5tYXNrICYmICFfdGhpcy5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHZhciByb290ID0gX3RoaXMuZ2V0Um9vdERvbU5vZGUoKTtcblxuICAgICAgICB2YXIgcG9wdXBOb2RlID0gX3RoaXMuZ2V0UG9wdXBEb21Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCFjb250YWlucyhyb290LCB0YXJnZXQpICYmICFjb250YWlucyhwb3B1cE5vZGUsIHRhcmdldCkgJiYgIV90aGlzLmhhc1BvcHVwTW91c2VEb3duKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Um9vdERvbU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZXRUcmlnZ2VyRE9NTm9kZSA9IF90aGlzLnByb3BzLmdldFRyaWdnZXJET01Ob2RlO1xuXG4gICAgICAgIGlmIChnZXRUcmlnZ2VyRE9NTm9kZSkge1xuICAgICAgICAgIHJldHVybiBnZXRUcmlnZ2VyRE9NTm9kZShfdGhpcy50cmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZG9tTm9kZSA9IGZpbmRET01Ob2RlKF90aGlzLnRyaWdnZXJSZWYuY3VycmVudCk7XG5cbiAgICAgICAgICBpZiAoZG9tTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHsvLyBEbyBub3RoaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gPSBmdW5jdGlvbiAoYWxpZ24pIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHBvcHVwUGxhY2VtZW50ID0gX3RoaXMkcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF90aGlzJHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzLmFsaWduUG9pbnQsXG4gICAgICAgICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IF90aGlzJHByb3BzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduO1xuXG4gICAgICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGFsaWduUG9pbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbikge1xuICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IF90aGlzJHByb3BzMi5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICAgIG9uUG9wdXBBbGlnbiA9IF90aGlzJHByb3BzMi5vblBvcHVwQWxpZ24sXG4gICAgICAgICAgICBwb3B1cE1vdGlvbiA9IF90aGlzJHByb3BzMi5wb3B1cE1vdGlvbixcbiAgICAgICAgICAgIHBvcHVwQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMyLnBvcHVwQW5pbWF0aW9uLFxuICAgICAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgcG9wdXBTdHlsZSA9IF90aGlzJHByb3BzMi5wb3B1cFN0eWxlLFxuICAgICAgICAgICAgbWFzayA9IF90aGlzJHByb3BzMi5tYXNrLFxuICAgICAgICAgICAgbWFza0FuaW1hdGlvbiA9IF90aGlzJHByb3BzMi5tYXNrQW5pbWF0aW9uLFxuICAgICAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHMyLm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgIG1hc2tNb3Rpb24gPSBfdGhpcyRwcm9wczIubWFza01vdGlvbixcbiAgICAgICAgICAgIHpJbmRleCA9IF90aGlzJHByb3BzMi56SW5kZXgsXG4gICAgICAgICAgICBwb3B1cCA9IF90aGlzJHByb3BzMi5wb3B1cCxcbiAgICAgICAgICAgIHN0cmV0Y2ggPSBfdGhpcyRwcm9wczIuc3RyZXRjaCxcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wczIuYWxpZ25Qb2ludDtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBwb3B1cFZpc2libGUgPSBfdGhpcyRzdGF0ZS5wb3B1cFZpc2libGUsXG4gICAgICAgICAgICBwb2ludCA9IF90aGlzJHN0YXRlLnBvaW50O1xuXG4gICAgICAgIHZhciBhbGlnbiA9IF90aGlzLmdldFBvcHVwQWxpZ24oKTtcblxuICAgICAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmIChfdGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gX3RoaXMub25Qb3B1cE1vdXNlRW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IF90aGlzLm9uUG9wdXBNb3VzZUxlYXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRG93biA9IF90aGlzLm9uUG9wdXBNb3VzZURvd247XG4gICAgICAgIG1vdXNlUHJvcHMub25Ub3VjaFN0YXJ0ID0gX3RoaXMub25Qb3B1cE1vdXNlRG93bjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICAgIHZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgICBwb2ludDogYWxpZ25Qb2ludCAmJiBwb2ludCxcbiAgICAgICAgICBjbGFzc05hbWU6IHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICBvbkFsaWduOiBvblBvcHVwQWxpZ24sXG4gICAgICAgICAgYW5pbWF0aW9uOiBwb3B1cEFuaW1hdGlvbixcbiAgICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IF90aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduXG4gICAgICAgIH0sIG1vdXNlUHJvcHMsIHtcbiAgICAgICAgICBzdHJldGNoOiBzdHJldGNoLFxuICAgICAgICAgIGdldFJvb3REb21Ob2RlOiBfdGhpcy5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgICBzdHlsZTogcG9wdXBTdHlsZSxcbiAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgIHpJbmRleDogekluZGV4LFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1hc2tBbmltYXRpb246IG1hc2tBbmltYXRpb24sXG4gICAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbWFza01vdGlvbjogbWFza01vdGlvbixcbiAgICAgICAgICByZWY6IF90aGlzLnBvcHVwUmVmLFxuICAgICAgICAgIG1vdGlvbjogcG9wdXBNb3Rpb25cbiAgICAgICAgfSksIHR5cGVvZiBwb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHBvcHVwKCkgOiBwb3B1cCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzO1xuXG4gICAgICAgIHZhciBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBNYWtlIHN1cmUgZGVmYXVsdCBwb3B1cCBjb250YWluZXIgd2lsbCBuZXZlciBjYXVzZSBzY3JvbGxiYXIgYXBwZWFyaW5nXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNDFcblxuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHZhciBtb3VudE5vZGUgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lciA/IHByb3BzLmdldFBvcHVwQ29udGFpbmVyKF90aGlzLmdldFJvb3REb21Ob2RlKCkpIDogcHJvcHMuZ2V0RG9jdW1lbnQoKS5ib2R5O1xuICAgICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICB2YXIgYWxpZ25Qb2ludCA9IF90aGlzLnByb3BzLmFsaWduUG9pbnQ7XG4gICAgICAgIGlmICghYWxpZ25Qb2ludCB8fCAhcG9pbnQpIHJldHVybjtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIHBhZ2VYOiBwb2ludC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBwb2ludC5wYWdlWVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5wcmV2UG9wdXBWaXNpYmxlICE9PSBfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgcG9wdXBWaXNpYmxlO1xuXG4gICAgICBpZiAoJ3BvcHVwVmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLmRlZmF1bHRQb3B1cFZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBwcmV2UG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgICB9O1xuICAgICAgQUxMX0hBTkRMRVJTLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgX3RoaXNbXCJmaXJlXCIuY29uY2F0KGgpXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgX3RoaXMuZmlyZUV2ZW50cyhoLCBlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUcmlnZ2VyLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTsgLy8gV2UgbXVzdCBsaXN0ZW4gdG8gYG1vdXNlZG93bmAgb3IgYHRvdWNoc3RhcnRgLCBlZGdlIGNhc2U6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzU4MDRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9jYWxlbmRhci9pc3N1ZXMvMjUwXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNTBcblxuICAgICAgICBpZiAoc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnREb2N1bWVudDtcblxuICAgICAgICAgIGlmICghdGhpcy5jbGlja091dHNpZGVIYW5kbGVyICYmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICB9IC8vIGFsd2F5cyBoaWRlIG9uIG1vYmlsZVxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgfSAvLyBjbG9zZSBwb3B1cCB3aGVuIHRyaWdnZXIgdHlwZSBjb250YWlucyAnb25Db250ZXh0TWVudScgYW5kIGRvY3VtZW50IGlzIHNjcm9sbGluZy5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxICYmIHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgICAgICB9IC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgd2luZG93IGlzIGJsdXIuXG5cblxuICAgICAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnYmx1cicsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICAgIC8vIGZvciB0ZXN0XG4gICAgICAgIGlmICh0aGlzLnBvcHVwUmVmLmN1cnJlbnQgJiYgdGhpcy5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UG9wdXBBbGlnblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwQWxpZ24oKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgICAgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwQWxpZ24sXG4gICAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzO1xuXG4gICAgICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgICAgIHJldHVybiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBvcHVwUGxhY2VtZW50LCBwb3B1cEFsaWduKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3B1cEFsaWduO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0gcG9wdXBWaXNpYmxlICAgIFNob3cgb3Igbm90IHRoZSBwb3B1cCBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0gZXZlbnQgICAgICAgICAgIFN5bnRoZXRpY0V2ZW50LCB1c2VkIGZvciBgcG9pbnRBbGlnbmBcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldFBvcHVwVmlzaWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUsIGV2ZW50KSB7XG4gICAgICAgIHZhciBhbGlnblBvaW50ID0gdGhpcy5wcm9wcy5hbGlnblBvaW50O1xuICAgICAgICB2YXIgcHJldlBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChwcmV2UG9wdXBWaXNpYmxlICE9PSBwb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBpZiAoISgncG9wdXBWaXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICAgICAgICBwcmV2UG9wdXBWaXNpYmxlOiBwcmV2UG9wdXBWaXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnByb3BzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlKHBvcHVwVmlzaWJsZSk7XG4gICAgICAgIH0gLy8gQWx3YXlzIHJlY29yZCB0aGUgcG9pbnQgcG9zaXRpb24gc2luY2UgbW91c2VFbnRlckRlbGF5IHdpbGwgZGVsYXkgdGhlIHNob3dcblxuXG4gICAgICAgIGlmIChhbGlnblBvaW50ICYmIGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRQb2ludChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVsYXlTZXRQb3B1cFZpc2libGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxheVNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBkZWxheVMsIGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQgPyB7XG4gICAgICAgICAgICBwYWdlWDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogZXZlbnQucGFnZVlcbiAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIHBvaW50KTtcblxuICAgICAgICAgICAgX3RoaXMyLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xlYXJEZWxheVRpbWVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGVhck91dHNpZGVIYW5kbGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJPdXRzaWRlSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNyZWF0ZVR3b0NoYWluc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgICAgICB2YXIgY2hpbGRQcm9zID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcztcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoY2hpbGRQcm9zW2V2ZW50XSAmJiBwcm9wc1tldmVudF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tcImZpcmVcIi5jb25jYXQoZXZlbnQpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDbGlja1RvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xpY2tUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHMzLmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczMuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NvbnRleHRNZW51VG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb250ZXh0TWVudVRvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczQuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzNC5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ2xpY2tUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsaWNrVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNS5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHM1LmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNNb3VzZUVudGVyVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb3VzZUVudGVyVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNi5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM2LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc01vdXNlTGVhdmVUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vdXNlTGVhdmVUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM3LmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczcuaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzRm9jdXNUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZvY3VzVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzOC5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM4LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNCbHVyVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNCbHVyVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzOS5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHM5LmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmb3JjZVBvcHVwQWxpZ25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JjZVBvcHVwQWxpZ24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAmJiB0aGlzLnBvcHVwUmVmLmN1cnJlbnQgJiYgdGhpcy5wb3B1cFJlZi5jdXJyZW50LmFsaWduUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwUmVmLmN1cnJlbnQuYWxpZ25SZWYuY3VycmVudC5mb3JjZUFsaWduKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmlyZUV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpcmVFdmVudHModHlwZSwgZSkge1xuICAgICAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG5cbiAgICAgICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgICAgICBjaGlsZENhbGxiYWNrKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5wcm9wc1t0eXBlXTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMTAuY2hpbGRyZW4sXG4gICAgICAgICAgICBmb3JjZVJlbmRlciA9IF90aGlzJHByb3BzMTAuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMxMC5hbGlnblBvaW50LFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMxMC5jbGFzc05hbWUsXG4gICAgICAgICAgICBhdXRvRGVzdHJveSA9IF90aGlzJHByb3BzMTAuYXV0b0Rlc3Ryb3k7XG4gICAgICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9IHtcbiAgICAgICAgICBrZXk6ICd0cmlnZ2VyJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMub25Db250ZXh0TWVudTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ29udGV4dE1lbnUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Db250ZXh0TWVudScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja1RvSGlkZSgpIHx8IHRoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VEb3duJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Ub3VjaFN0YXJ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5vbk1vdXNlRW50ZXI7XG5cbiAgICAgICAgICBpZiAoYWxpZ25Qb2ludCkge1xuICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VFbnRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c1RvU2hvdygpIHx8IHRoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXM7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Gb2N1cycpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjaGlsZCAmJiBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkcmVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5jbGFzc05hbWUgPSBjaGlsZHJlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbG9uZVByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgbmV3Q2hpbGRQcm9wcyk7XG5cbiAgICAgICAgaWYgKHN1cHBvcnRSZWYoY2hpbGQpKSB7XG4gICAgICAgICAgY2xvbmVQcm9wcy5yZWYgPSBjb21wb3NlUmVmKHRoaXMudHJpZ2dlclJlZiwgY2hpbGQucmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjbG9uZVByb3BzKTtcbiAgICAgICAgdmFyIHBvcnRhbDsgLy8gcHJldmVudCB1bm1vdW50aW5nIGFmdGVyIGl0J3MgcmVuZGVyZWRcblxuICAgICAgICBpZiAocG9wdXBWaXNpYmxlIHx8IHRoaXMucG9wdXBSZWYuY3VycmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgICAgIHBvcnRhbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsXCIsXG4gICAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgICAgZGlkVXBkYXRlOiB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZVxuICAgICAgICAgIH0sIHRoaXMuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3B1cFZpc2libGUgJiYgYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICBwb3J0YWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgb25Qb3B1cE1vdXNlRG93bjogdGhpcy5vblBvcHVwTW91c2VEb3duXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cmlnZ2VyLCBwb3J0YWwpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcblxuICAgICAgICBpZiAocG9wdXBWaXNpYmxlICE9PSB1bmRlZmluZWQgJiYgcHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgbmV3U3RhdGUucG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlO1xuICAgICAgICAgIG5ld1N0YXRlLnByZXZQb3B1cFZpc2libGUgPSBwcmV2U3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUcmlnZ2VyO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgVHJpZ2dlci5jb250ZXh0VHlwZSA9IFRyaWdnZXJDb250ZXh0O1xuICBUcmlnZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogcmV0dXJuRW1wdHlTdHJpbmcsXG4gICAgZ2V0RG9jdW1lbnQ6IHJldHVybkRvY3VtZW50LFxuICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uUG9wdXBBbGlnbjogbm9vcCxcbiAgICBwb3B1cENsYXNzTmFtZTogJycsXG4gICAgbW91c2VFbnRlckRlbGF5OiAwLFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgIGZvY3VzRGVsYXk6IDAsXG4gICAgYmx1ckRlbGF5OiAwLjE1LFxuICAgIHBvcHVwU3R5bGU6IHt9LFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gICAgcG9wdXBBbGlnbjoge30sXG4gICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZmFsc2UsXG4gICAgbWFzazogZmFsc2UsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGFjdGlvbjogW10sXG4gICAgc2hvd0FjdGlvbjogW10sXG4gICAgaGlkZUFjdGlvbjogW10sXG4gICAgYXV0b0Rlc3Ryb3k6IGZhbHNlXG4gIH07XG4gIHJldHVybiBUcmlnZ2VyO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVUcmlnZ2VyKFBvcnRhbCk7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGlzUG9pbnRzRXEoYTEsIGEyLCBpc0FsaWduUG9pbnQpIHtcbiAgaWYgKGlzQWxpZ25Qb2ludCkge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF07XG4gIH1cblxuICByZXR1cm4gYTFbMF0gPT09IGEyWzBdICYmIGExWzFdID09PSBhMlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcGxhY2VtZW50U3RyLCBhbGlnbikge1xuICB2YXIgYmFzZUFsaWduID0gYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50U3RyXSB8fCB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYmFzZUFsaWduKSwgYWxpZ24pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGlzQWxpZ25Qb2ludCkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgcGxhY2VtZW50cyA9IE9iamVjdC5rZXlzKGJ1aWx0aW5QbGFjZW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIGlmIChpc1BvaW50c0VxKGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudF0ucG9pbnRzLCBwb2ludHMsIGlzQWxpZ25Qb2ludCkpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBsYWNlbWVudC1cIikuY29uY2F0KHBsYWNlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRNb3Rpb24oX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBtb3Rpb24gPSBfcmVmLm1vdGlvbixcbiAgICAgIGFuaW1hdGlvbiA9IF9yZWYuYW5pbWF0aW9uLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcmVmLnRyYW5zaXRpb25OYW1lO1xuXG4gIGlmIChtb3Rpb24pIHtcbiAgICByZXR1cm4gbW90aW9uO1xuICB9XG5cbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW5pbWF0aW9uKVxuICAgIH07XG4gIH1cblxuICBpZiAodHJhbnNpdGlvbk5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogdHJhbnNpdGlvbk5hbWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IsIG9wdGlvbikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICh0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocm9vdCwgbikge1xuICB2YXIgbm9kZSA9IG47XG5cbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQXJyYXk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RJcyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG5cbiAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQgfHwgY2hpbGQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQodG9BcnJheShjaGlsZCkpO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9yZWFjdElzLmlzRnJhZ21lbnQpKGNoaWxkKSAmJiBjaGlsZC5wcm9wcykge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXQ7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnbGlicmFyeS9ob29rcy91c2VPbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluayc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvQXV0aFByb3ZpZGVyJztcbmltcG9ydCB7XG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcbiAgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFLFxuICBBRERfSE9URUxfUEFHRSxcbn0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xuXG5jb25zdCBQcm9maWxlTWVudSA9ICh7IGF2YXRhciB9KSA9PiB7XG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIXN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT25DbGlja091dHNpZGUoZHJvcGRvd25SZWYsICgpID0+IHNldFN0YXRlKGZhbHNlKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1kcm9wZG93blwiIHJlZj17ZHJvcGRvd25SZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oYW5kbGVyXCIgb25DbGljaz17aGFuZGxlRHJvcGRvd259PlxuICAgICAgICB7YXZhdGFyfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNZW51IGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUgJHtzdGF0ZSA/ICdhY3RpdmUnIDogJ2hpZGUnfWB9PlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjBcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9QUk9GSUxFX1BBR0V9PlZpZXcgUHJvZmlsZTwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17Y2xvc2VEcm9wZG93bn0ga2V5PVwiMVwiPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FERF9IT1RFTF9QQUdFfT5BZGQgSG90ZWw8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjJcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0V9PlxuICAgICAgICAgICAgQWNjb3VudCBTZXR0aW5nc1xuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgQWN0aXZlTGluayA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbcmVmLCBoYW5kbGVyXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU9uQ2xpY2tPdXRzaWRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==