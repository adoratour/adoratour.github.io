(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "../../node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\MainMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const MainMenu = ({
  className,
  router
}) => {
  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Trang ch\u1EE7")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["TRAVEL_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["TRAVEL_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Du l\u1ECBch")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["SIM_WIFI_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["SIM_WIFI_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Sim & WIFI")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["SHOP_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["SHOP_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Shop")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["VISA_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["VISA_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Visa")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["BLOG_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["BLOG_PAGE"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Blog")));
};

_c = MainMenu;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MainMenu));

var _c, _c2;

$RefreshReg$(_c, "MainMenu");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vY29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2VzbS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvaG9va3MvdXNlQnVmZmVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9DU1NNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy91dGlsL21vdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL0RPTVdyYXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9EaXZpZGVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL01lbnVJdGVtLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudUl0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvdXRpbHMvaXNNb2JpbGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlscy9sZWdhY3lVdGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9saWIvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXBJbm5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2FsaWduVXRpbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MYXlvdXQvSGVhZGVyL01haW5NZW51LmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rLmpzIl0sIm5hbWVzIjpbIk1haW5NZW51IiwiY2xhc3NOYW1lIiwicm91dGVyIiwicGF0aG5hbWUiLCJIT01FX1BBR0UiLCJUUkFWRUxfUEFHRSIsIlNJTV9XSUZJX1BBR0UiLCJTSE9QX1BBR0UiLCJWSVNBX1BBR0UiLCJCTE9HX1BBR0UiLCJ3aXRoUm91dGVyIiwiQWN0aXZlTGluayIsImNoaWxkcmVuIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLHlEQUFROztBQUU1QixzR0FBc0c7O0FBRXRHO0FBQ0E7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsOEhBQThIOztBQUU5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCwwQ0FBMEM7QUFDMUM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRiwrRkFBK0Y7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7Ozs7Ozs7QUMxUGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLGtGQUEyQjs7QUFFckQscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRTNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQyxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDLDBEQUEwRDs7QUFFMUQ7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx1SEFBVSxTQUFTLEU7Ozs7Ozs7Ozs7OztBQzFHbEM7QUFBQTtBQUFnQztBQUNqQiwrR0FBTyxFOzs7Ozs7Ozs7Ozs7QUNEdEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQy9FWjs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFH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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBSztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztB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O0FBQUcsYUFBUyxFQUFFWixTQUFkO0FBQXlCLFFBQUksRUFBRVksSUFBL0I7QUFBcUMsV0FBTyxFQUFFQyxXQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERjtBQUtELENBWEQ7O0tBQU1ELFU7QUFhUyxxRUFBQUQsOERBQVUsQ0FBQ0MsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUHJlc2V0Q29sb3JUeXBlcyA9IGV4cG9ydHMuUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9IHZvaWQgMDtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4vdHlwZVwiKTtcblxudmFyIFByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWNjZXNzJywgJ3Byb2Nlc3NpbmcnLCAnZXJyb3InLCAnZGVmYXVsdCcsICd3YXJuaW5nJyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5cbmV4cG9ydHMuUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9IFByZXNldFN0YXR1c0NvbG9yVHlwZXM7XG52YXIgUHJlc2V0Q29sb3JUeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ3BpbmsnLCAncmVkJywgJ3llbGxvdycsICdvcmFuZ2UnLCAnY3lhbicsICdncmVlbicsICdibHVlJywgJ3B1cnBsZScsICdnZWVrYmx1ZScsICdtYWdlbnRhJywgJ3ZvbGNhbm8nLCAnZ29sZCcsICdsaW1lJyk7XG5leHBvcnRzLlByZXNldENvbG9yVHlwZXMgPSBQcmVzZXRDb2xvclR5cGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8vID09PT09PT09PT09PT09PT09PSBDb2xsYXBzZSBNb3Rpb24gPT09PT09PT09PT09PT09PT09XG52YXIgZ2V0Q29sbGFwc2VkSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0Q29sbGFwc2VkSGVpZ2h0KCkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMCxcbiAgICBvcGFjaXR5OiAwXG4gIH07XG59O1xuXG52YXIgZ2V0UmVhbEhlaWdodCA9IGZ1bmN0aW9uIGdldFJlYWxIZWlnaHQobm9kZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5zY3JvbGxIZWlnaHQsXG4gICAgb3BhY2l0eTogMVxuICB9O1xufTtcblxudmFyIGdldEN1cnJlbnRIZWlnaHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50SGVpZ2h0KG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG52YXIgY29sbGFwc2VNb3Rpb24gPSB7XG4gIG1vdGlvbk5hbWU6ICdhbnQtbW90aW9uLWNvbGxhcHNlJyxcbiAgb25BcHBlYXJTdGFydDogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBvbkVudGVyU3RhcnQ6IGdldENvbGxhcHNlZEhlaWdodCxcbiAgb25BcHBlYXJBY3RpdmU6IGdldFJlYWxIZWlnaHQsXG4gIG9uRW50ZXJBY3RpdmU6IGdldFJlYWxIZWlnaHQsXG4gIG9uTGVhdmVTdGFydDogZ2V0Q3VycmVudEhlaWdodCxcbiAgb25MZWF2ZUFjdGl2ZTogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBtb3Rpb25EZWFkbGluZTogNTAwXG59O1xudmFyIF9kZWZhdWx0ID0gY29sbGFwc2VNb3Rpb247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBNZW51Q29udGV4dCA9ICgwLCBfcmVhY3QuY3JlYXRlQ29udGV4dCkoe1xuICBpbmxpbmVDb2xsYXBzZWQ6IGZhbHNlXG59KTtcbnZhciBfZGVmYXVsdCA9IE1lbnVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IHJlcXVpcmUoXCJyYy1tZW51XCIpO1xuXG52YXIgX3RvQXJyYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxudmFyIF90b29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdG9vbHRpcFwiKSk7XG5cbnZhciBfU2lkZXIgPSByZXF1aXJlKFwiLi4vbGF5b3V0L1NpZGVyXCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTWVudUl0ZW0gPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgTWVudUl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWVudUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZW51SXRlbSk7XG5cbiAgICBmdW5jdGlvbiBNZW51SXRlbSgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVJdGVtKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMubWVudUl0ZW0ub25LZXlEb3duKGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZU1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG4gICAgICAgIF90aGlzLm1lbnVJdGVtID0gbWVudUl0ZW07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW5kZXJJdGVtID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHNpZGVyQ29sbGFwc2VkID0gX3JlZi5zaWRlckNvbGxhcHNlZDtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgICAgICAgIGljb24gPSBfYS5pY29uLFxuICAgICAgICAgICAgZGFuZ2VyID0gX2EuZGFuZ2VyLFxuICAgICAgICAgICAgcmVzdCA9IF9fcmVzdChfYSwgW1widGl0bGVcIiwgXCJpY29uXCIsIFwiZGFuZ2VyXCJdKTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IF9yZWYyLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uID0gX3JlZjIuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciB0b29sdGlwVGl0bGUgPSB0aXRsZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0b29sdGlwVGl0bGUgPSBsZXZlbCA9PT0gMSA/IGNoaWxkcmVuIDogJyc7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0b29sdGlwUHJvcHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogdG9vbHRpcFRpdGxlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghc2lkZXJDb2xsYXBzZWQgJiYgIWlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdG9vbHRpcFByb3BzLnRpdGxlID0gbnVsbDsgLy8gUmVzZXQgYHZpc2libGVgIHRvIGZpeCBjb250cm9sIG1vZGUgdG9vbHRpcCBkaXNwbGF5IG5vdCBjb3JyZWN0XG4gICAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NzQyXG5cbiAgICAgICAgICAgIHRvb2x0aXBQcm9wcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gKDAsIF90b0FycmF5W1wiZGVmYXVsdFwiXSkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Rvb2x0aXBbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgdG9vbHRpcFByb3BzLCB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZC10b29sdGlwXCIpXG4gICAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnUuSXRlbSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLWRhbmdlclwiKSwgZGFuZ2VyKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLW9ubHktY2hpbGRcIiksIChpY29uID8gY2hpbGRyZW5MZW5ndGggKyAxIDogY2hpbGRyZW5MZW5ndGgpID09PSAxKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHJlZjogX3RoaXMuc2F2ZU1lbnVJdGVtXG4gICAgICAgICAgfSksIGljb24sIF90aGlzLnJlbmRlckl0ZW1DaGlsZHJlbihpbmxpbmVDb2xsYXBzZWQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZW51SXRlbSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJJdGVtQ2hpbGRyZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJdGVtQ2hpbGRyZW4oaW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzMi5pY29uLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzMi5sZXZlbCxcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucm9vdFByZWZpeENsczsgLy8gaW5saW5lLWNvbGxhcHNlZC5tZCBkZW1vIOS+nei1liBzcGFuIOadpemakOiXj+aWh+WtlyzmnIkgaWNvbiDlsZ7mgKfvvIzliJnlhoXpg6jljIXoo7nkuIDkuKogc3BhblxuICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8yMzQ1NlxuXG4gICAgICAgIGlmICghaWNvbiB8fCAoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLnR5cGUgPT09ICdzcGFuJykge1xuICAgICAgICAgIGlmIChjaGlsZHJlbiAmJiBpbmxpbmVDb2xsYXBzZWQgJiYgbGV2ZWwgPT09IDEgJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLW5vaWNvblwiKVxuICAgICAgICAgICAgfSwgY2hpbGRyZW4uY2hhckF0KDApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpZGVyLlNpZGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJJdGVtKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVudUl0ZW07XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBNZW51SXRlbS5pc01lbnVJdGVtID0gdHJ1ZTtcbiAgcmV0dXJuIE1lbnVJdGVtO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBNZW51SXRlbTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01lbnUgPSByZXF1aXJlKFwicmMtbWVudVwiKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIFN1Yk1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgU3ViTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdWJNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3ViTWVudSk7XG5cbiAgICBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViTWVudSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnN1Yk1lbnUub25LZXlEb3duKGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZVN1Yk1lbnUgPSBmdW5jdGlvbiAoc3ViTWVudSkge1xuICAgICAgICBfdGhpcy5zdWJNZW51ID0gc3ViTWVudTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3ViTWVudSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJUaXRsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzLmljb24sXG4gICAgICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgIHJldHVybiBpbmxpbmVDb2xsYXBzZWQgJiYgbGV2ZWwgPT09IDEgJiYgdGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZC1ub2ljb25cIilcbiAgICAgICAgICB9LCB0aXRsZS5jaGFyQXQoMCkpIDogdGl0bGU7XG4gICAgICAgIH0gLy8gaW5saW5lLWNvbGxhcHNlZC5tZCBkZW1vIOS+nei1liBzcGFuIOadpemakOiXj+aWh+WtlyzmnIkgaWNvbiDlsZ7mgKfvvIzliJnlhoXpg6jljIXoo7nkuIDkuKogc3BhblxuICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8yMzQ1NlxuXG5cbiAgICAgICAgdmFyIHRpdGxlSXNTcGFuID0gKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKHRpdGxlKSAmJiB0aXRsZS50eXBlID09PSAnc3Bhbic7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaWNvbiwgdGl0bGVJc1NwYW4gPyB0aXRsZSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0aXRsZSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzMi5yb290UHJlZml4Q2xzLFxuICAgICAgICAgICAgcG9wdXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIucG9wdXBDbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBpbmxpbmVDb2xsYXBzZWQgPSBfcmVmLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgYW50ZE1lbnVUaGVtZSA9IF9yZWYuYW50ZE1lbnVUaGVtZTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5TdWJNZW51LCBfZXh0ZW5kcyh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkoX3RoaXMyLnByb3BzLCBbJ2ljb24nXSksIHtcbiAgICAgICAgICAgIHRpdGxlOiBfdGhpczIucmVuZGVyVGl0bGUoaW5saW5lQ29sbGFwc2VkKSxcbiAgICAgICAgICAgIHJlZjogX3RoaXMyLnNhdmVTdWJNZW51LFxuICAgICAgICAgICAgcG9wdXBDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHJvb3RQcmVmaXhDbHMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW50ZE1lbnVUaGVtZSksIHBvcHVwQ2xhc3NOYW1lKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN1Yk1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBTdWJNZW51LmNvbnRleHRUeXBlID0gX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXTsgLy8gZml4IGlzc3VlOmh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzg2NjZcblxuICBTdWJNZW51LmlzU3ViTWVudSA9IDE7XG4gIHJldHVybiBTdWJNZW51O1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBTdWJNZW51O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1tZW51XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX1N1Yk1lbnUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1N1Yk1lbnVcIikpO1xuXG52YXIgX01lbnVJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51SXRlbVwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9TaWRlciA9IHJlcXVpcmUoXCIuLi9sYXlvdXQvU2lkZXJcIik7XG5cbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvcmFmXCIpKTtcblxudmFyIF9tb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9tb3Rpb25cIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBJbnRlcm5hbE1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgSW50ZXJuYWxNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEludGVybmFsTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEludGVybmFsTWVudSk7XG5cbiAgICBmdW5jdGlvbiBJbnRlcm5hbE1lbnUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVybmFsTWVudSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpOyAvLyBSZXN0b3JlIHZlcnRpY2FsIG1vZGUgd2hlbiBtZW51IGlzIGNvbGxhcHNlZCByZXNwb25zaXZlbHkgd2hlbiBtb3VudGVkXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xMzEwNFxuICAgICAgLy8gVE9ETzogbm90IGEgcGVyZmVjdCBzb2x1dGlvbiwgbG9va2luZyBhIG5ldyB3YXkgdG8gYXZvaWQgc2V0dGluZyBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSBpbiB0aGlzIHNpdHVhdGlvblxuXG4gICAgICBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMucmVzdG9yZU1vZGVWZXJ0aWNhbEZyb21JbmxpbmUoKTtcblxuICAgICAgICB2YXIgb25Nb3VzZUVudGVyID0gX3RoaXMucHJvcHMub25Nb3VzZUVudGVyO1xuXG4gICAgICAgIGlmIChvbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgICBvbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyB3aGVuIGlubGluZUNvbGxhcHNlZCBtZW51IHdpZHRoIGFuaW1hdGlvbiBmaW5pc2hlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xMjg2NFxuICAgICAgICB2YXIgd2lkdGhDb2xsYXBzZWQgPSBlLnByb3BlcnR5TmFtZSA9PT0gJ3dpZHRoJyAmJiBlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0OyAvLyBGaXggU1ZHRWxlbWVudCBlLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZiBpcyBub3QgYSBmdW5jdGlvblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTY5OVxuXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWU7IC8vIFNWR0FuaW1hdGVkU3RyaW5nLmFuaW1WYWwgc2hvdWxkIGJlIGlkZW50aWNhbCB0byBTVkdBbmltYXRlZFN0cmluZy5iYXNlVmFsLCB1bmxlc3MgZHVyaW5nIGFuIGFuaW1hdGlvbi5cblxuICAgICAgICB2YXIgY2xhc3NOYW1lVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2xhc3NOYW1lKSA9PT0gJ1tvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddJyA/IGNsYXNzTmFtZS5hbmltVmFsIDogY2xhc3NOYW1lOyAvLyBGaXggZm9yIDxNZW51IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz4sIHRoZSB3aWR0aCB0cmFuc2l0aW9uIHdvbid0IHRyaWdnZXIgd2hlbiBtZW51IGlzIGNvbGxhcHNlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduLXByby9pc3N1ZXMvMjc4M1xuXG4gICAgICAgIHZhciBpY29uU2NhbGVkID0gZS5wcm9wZXJ0eU5hbWUgPT09ICdmb250LXNpemUnICYmIGNsYXNzTmFtZVZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+PSAwO1xuXG4gICAgICAgIGlmICh3aWR0aENvbGxhcHNlZCB8fCBpY29uU2NhbGVkKSB7XG4gICAgICAgICAgX3RoaXMucmVzdG9yZU1vZGVWZXJ0aWNhbEZyb21JbmxpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5oYW5kbGVPcGVuQ2hhbmdlKFtdKTtcblxuICAgICAgICB2YXIgb25DbGljayA9IF90aGlzLnByb3BzLm9uQ2xpY2s7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVPcGVuQ2hhbmdlID0gZnVuY3Rpb24gKG9wZW5LZXlzKSB7XG4gICAgICAgIF90aGlzLnNldE9wZW5LZXlzKG9wZW5LZXlzKTtcblxuICAgICAgICB2YXIgb25PcGVuQ2hhbmdlID0gX3RoaXMucHJvcHMub25PcGVuQ2hhbmdlO1xuXG4gICAgICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgICAgICBvbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW5kZXJNZW51ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gX3JlZi5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZSxcbiAgICAgICAgICAgIGNvbGxhcHNlZFdpZHRoID0gX3RoaXMkcHJvcHMuY29sbGFwc2VkV2lkdGg7XG4gICAgICAgIHZhciBvcGVuS2V5cyA9IF90aGlzLnN0YXRlLm9wZW5LZXlzO1xuICAgICAgICB2YXIgcGFzc1Byb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkoX3RoaXMucHJvcHMsIFsnY29sbGFwc2VkV2lkdGgnLCAnc2lkZXJDb2xsYXBzZWQnXSk7XG5cbiAgICAgICAgdmFyIG1lbnVNb2RlID0gX3RoaXMuZ2V0UmVhbE1lbnVNb2RlKCk7XG5cbiAgICAgICAgdmFyIG1lbnVPcGVuTW90aW9uID0gX3RoaXMuZ2V0T3Blbk1vdGlvblByb3BzKG1lbnVNb2RlKTtcblxuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdtZW51JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgICAgdmFyIG1lbnVDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0aGVtZSksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkXCIpLCBfdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKSkpO1xuXG4gICAgICAgIHZhciBtZW51UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzLFxuICAgICAgICAgIG9uT3BlbkNoYW5nZTogX3RoaXMuaGFuZGxlT3BlbkNoYW5nZSxcbiAgICAgICAgICBjbGFzc05hbWU6IG1lbnVDbGFzc05hbWUsXG4gICAgICAgICAgbW9kZTogbWVudU1vZGVcbiAgICAgICAgfSwgbWVudU9wZW5Nb3Rpb24pO1xuXG4gICAgICAgIGlmIChtZW51TW9kZSAhPT0gJ2lubGluZScpIHtcbiAgICAgICAgICAvLyBjbG9zaW5nIHZlcnRpY2FsIHBvcHVwIHN1Ym1lbnUgYWZ0ZXIgY2xpY2sgaXRcbiAgICAgICAgICBtZW51UHJvcHMub25DbGljayA9IF90aGlzLmhhbmRsZUNsaWNrO1xuICAgICAgICB9IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzg1ODdcblxuXG4gICAgICAgIHZhciBoaWRlTWVudSA9IF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpICYmIChjb2xsYXBzZWRXaWR0aCA9PT0gMCB8fCBjb2xsYXBzZWRXaWR0aCA9PT0gJzAnIHx8IGNvbGxhcHNlZFdpZHRoID09PSAnMHB4Jyk7XG5cbiAgICAgICAgaWYgKGhpZGVNZW51KSB7XG4gICAgICAgICAgbWVudVByb3BzLm9wZW5LZXlzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXS5Qcm92aWRlciwge1xuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQ6IF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpIHx8IGZhbHNlLFxuICAgICAgICAgICAgYW50ZE1lbnVUaGVtZTogdGhlbWUsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudVtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJcbiAgICAgICAgfSwgcGFzc1Byb3BzLCBtZW51UHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IF90aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBfdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0pKSk7XG4gICAgICB9O1xuXG4gICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzICYmIHByb3BzLm1vZGUgIT09ICdpbmxpbmUnKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIGBtb2RlYCBpcyBpbmxpbmUuJyk7XG4gICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKHByb3BzLnNpZGVyQ29sbGFwc2VkICE9PSB1bmRlZmluZWQgJiYgJ2lubGluZUNvbGxhcHNlZCcgaW4gcHJvcHMpLCAnTWVudScsICdgaW5saW5lQ29sbGFwc2VkYCBub3QgY29udHJvbCBNZW51IHVuZGVyIFNpZGVyLiBTaG91bGQgc2V0IGBjb2xsYXBzZWRgIG9uIFNpZGVyIGluc3RlYWQuJyk7XG4gICAgICB2YXIgb3BlbktleXM7XG5cbiAgICAgIGlmICgnb3BlbktleXMnIGluIHByb3BzKSB7XG4gICAgICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXM7XG4gICAgICB9IGVsc2UgaWYgKCdkZWZhdWx0T3BlbktleXMnIGluIHByb3BzKSB7XG4gICAgICAgIG9wZW5LZXlzID0gcHJvcHMuZGVmYXVsdE9wZW5LZXlzO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzIHx8IFtdLFxuICAgICAgICBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZTogZmFsc2UsXG4gICAgICAgIGlubGluZU9wZW5LZXlzOiBbXSxcbiAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSW50ZXJuYWxNZW51LCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbCh0aGlzLm1vdW50UmFmSWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgc2lkZXJDb2xsYXBzZWQgPSBfdGhpcyRwcm9wczIuc2lkZXJDb2xsYXBzZWQsXG4gICAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQgPSBfdGhpcyRwcm9wczIuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgICAgb25PcGVuQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uT3BlbkNoYW5nZTtcblxuICAgICAgICBpZiAoIXByZXZQcm9wcy5pbmxpbmVDb2xsYXBzZWQgJiYgaW5saW5lQ29sbGFwc2VkIHx8ICFwcmV2UHJvcHMuc2lkZXJDb2xsYXBzZWQgJiYgc2lkZXJDb2xsYXBzZWQpIHtcbiAgICAgICAgICBvbk9wZW5DaGFuZ2UgPT09IG51bGwgfHwgb25PcGVuQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbk9wZW5DaGFuZ2UoW10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldE9wZW5LZXlzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3BlbktleXMob3BlbktleXMpIHtcbiAgICAgICAgaWYgKCEoJ29wZW5LZXlzJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UmVhbE1lbnVNb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVhbE1lbnVNb2RlKCkge1xuICAgICAgICB2YXIgbW9kZSA9IHRoaXMucHJvcHMubW9kZTtcbiAgICAgICAgdmFyIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdGhpcy5zdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZTtcbiAgICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IHRoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCk7XG5cbiAgICAgICAgaWYgKHN3aXRjaGluZ01vZGVGcm9tSW5saW5lICYmIGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmxpbmVDb2xsYXBzZWQgPyAndmVydGljYWwnIDogbW9kZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5saW5lQ29sbGFwc2VkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5saW5lQ29sbGFwc2VkKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZCA9IF90aGlzJHByb3BzMy5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICBzaWRlckNvbGxhcHNlZCA9IF90aGlzJHByb3BzMy5zaWRlckNvbGxhcHNlZDtcblxuICAgICAgICBpZiAoc2lkZXJDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBzaWRlckNvbGxhcHNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmxpbmVDb2xsYXBzZWQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldE9wZW5Nb3Rpb25Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wZW5Nb3Rpb25Qcm9wcyhtZW51TW9kZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzNC5vcGVuVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICBvcGVuQW5pbWF0aW9uID0gX3RoaXMkcHJvcHM0Lm9wZW5BbmltYXRpb24sXG4gICAgICAgICAgICBtb3Rpb24gPSBfdGhpcyRwcm9wczQubW90aW9uO1xuICAgICAgICB2YXIgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPSB0aGlzLnN0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lOyAvLyBQcm92aWRlcyBieSB1c2VyXG5cbiAgICAgICAgaWYgKG1vdGlvbikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3Rpb246IG1vdGlvblxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlbkFuaW1hdGlvbikge1xuICAgICAgICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKHR5cGVvZiBvcGVuQW5pbWF0aW9uID09PSAnc3RyaW5nJywgJ01lbnUnLCAnYG9wZW5BbmltYXRpb25gIGRvIG5vdCBzdXBwb3J0IG9iamVjdC4gUGxlYXNlIHVzZSBgbW90aW9uYCBpbnN0ZWFkLicpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuQW5pbWF0aW9uOiBvcGVuQW5pbWF0aW9uXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuVHJhbnNpdGlvbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BlblRyYW5zaXRpb25OYW1lOiBvcGVuVHJhbnNpdGlvbk5hbWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIERlZmF1bHQgbG9naWNcblxuXG4gICAgICAgIGlmIChtZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdGlvbjoge1xuICAgICAgICAgICAgICBtb3Rpb25OYW1lOiAnc2xpZGUtdXAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW90aW9uOiBfbW90aW9uW1wiZGVmYXVsdFwiXVxuICAgICAgICAgIH07XG4gICAgICAgIH0gLy8gV2hlbiBtb2RlIHN3aXRjaCBmcm9tIGlubGluZVxuICAgICAgICAvLyBzdWJtZW51IHNob3VsZCBoaWRlIHdpdGhvdXQgYW5pbWF0aW9uXG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vdGlvbjoge1xuICAgICAgICAgICAgbW90aW9uTmFtZTogc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPyAnJyA6ICd6b29tLWJpZydcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlc3RvcmVNb2RlVmVydGljYWxGcm9tSW5saW5lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdG9yZU1vZGVWZXJ0aWNhbEZyb21JbmxpbmUoKSB7XG4gICAgICAgIHZhciBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRoaXMuc3RhdGUuc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU7XG5cbiAgICAgICAgaWYgKHN3aXRjaGluZ01vZGVGcm9tSW5saW5lKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyTWVudSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIHZhciBwcmV2UHJvcHMgPSBwcmV2U3RhdGUucHJldlByb3BzO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgcHJldlByb3BzOiBuZXh0UHJvcHNcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJldlByb3BzLm1vZGUgPT09ICdpbmxpbmUnICYmIG5leHRQcm9wcy5tb2RlICE9PSAnaW5saW5lJykge1xuICAgICAgICAgIG5ld1N0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb3BlbktleXMnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgIG5ld1N0YXRlLm9wZW5LZXlzID0gbmV4dFByb3BzLm9wZW5LZXlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFtMZWdhY3ldIE9sZCBjb2RlIHdpbGwgcmV0dXJuIGFmdGVyIGBvcGVuS2V5c2AgY2hhbmdlZC5cbiAgICAgICAgICAvLyBOb3Qgc3VyZSB0aGUgcmVhc29uLCB3ZSBzaG91bGQga2VlcCB0aGlzIGxvZ2ljIHN0aWxsLlxuICAgICAgICAgIGlmIChuZXh0UHJvcHMuaW5saW5lQ29sbGFwc2VkICYmICFwcmV2UHJvcHMuaW5saW5lQ29sbGFwc2VkIHx8IG5leHRQcm9wcy5zaWRlckNvbGxhcHNlZCAmJiAhcHJldlByb3BzLnNpZGVyQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRydWU7XG4gICAgICAgICAgICBuZXdTdGF0ZS5pbmxpbmVPcGVuS2V5cyA9IHByZXZTdGF0ZS5vcGVuS2V5cztcbiAgICAgICAgICAgIG5ld1N0YXRlLm9wZW5LZXlzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFuZXh0UHJvcHMuaW5saW5lQ29sbGFwc2VkICYmIHByZXZQcm9wcy5pbmxpbmVDb2xsYXBzZWQgfHwgIW5leHRQcm9wcy5zaWRlckNvbGxhcHNlZCAmJiBwcmV2UHJvcHMuc2lkZXJDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLm9wZW5LZXlzID0gcHJldlN0YXRlLmlubGluZU9wZW5LZXlzO1xuICAgICAgICAgICAgbmV3U3RhdGUuaW5saW5lT3BlbktleXMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEludGVybmFsTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIEludGVybmFsTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICBmb2N1c2FibGU6IGZhbHNlXG4gIH07XG4gIHJldHVybiBJbnRlcm5hbE1lbnU7XG59KCk7IC8vIFdlIHNob3VsZCBrZWVwIHRoaXMgYXMgcmVmLWFibGVcblxuXG52YXIgTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhNZW51LCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihNZW51KTtcblxuICAgIGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICAgIHJldHVybiBfc3VwZXIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbnUsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpZGVyLlNpZGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxNZW51LCBfZXh0ZW5kcyh7fSwgX3RoaXMyLnByb3BzLCBjb250ZXh0KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgTWVudS5EaXZpZGVyID0gX3JjTWVudS5EaXZpZGVyO1xuICBNZW51Lkl0ZW0gPSBfTWVudUl0ZW1bXCJkZWZhdWx0XCJdO1xuICBNZW51LlN1Yk1lbnUgPSBfU3ViTWVudVtcImRlZmF1bHRcIl07XG4gIE1lbnUuSXRlbUdyb3VwID0gX3JjTWVudS5JdGVtR3JvdXA7XG4gIHJldHVybiBNZW51O1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBNZW51O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNUb29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdG9vbHRpcFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3BsYWNlbWVudHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BsYWNlbWVudHNcIikpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoXCIuLi9fdXRpbC9jb2xvcnNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgc3BsaXRPYmplY3QgPSBmdW5jdGlvbiBzcGxpdE9iamVjdChvYmosIGtleXMpIHtcbiAgdmFyIHBpY2tlZCA9IHt9O1xuXG4gIHZhciBvbWl0dGVkID0gX2V4dGVuZHMoe30sIG9iaik7XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob2JqICYmIGtleSBpbiBvYmopIHtcbiAgICAgIHBpY2tlZFtrZXldID0gb2JqW2tleV07XG4gICAgICBkZWxldGUgb21pdHRlZFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGlja2VkOiBwaWNrZWQsXG4gICAgb21pdHRlZDogb21pdHRlZFxuICB9O1xufTtcblxudmFyIFByZXNldENvbG9yUmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQoX2NvbG9ycy5QcmVzZXRDb2xvclR5cGVzLmpvaW4oJ3wnKSwgXCIpKC1pbnZlcnNlKT8kXCIpKTsgLy8gRml4IFRvb2x0aXAgd29uJ3QgaGlkZSBhdCBkaXNhYmxlZCBidXR0b25cbi8vIG1vdXNlIGV2ZW50cyBkb24ndCB0cmlnZ2VyIGF0IGRpc2FibGVkIGJ1dHRvbiBpbiBDaHJvbWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdG9vbHRpcC9pc3N1ZXMvMThcblxuZnVuY3Rpb24gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oZWxlbWVudCwgcHJlZml4Q2xzKSB7XG4gIHZhciBlbGVtZW50VHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICBpZiAoKGVsZW1lbnRUeXBlLl9fQU5UX0JVVFRPTiA9PT0gdHJ1ZSB8fCBlbGVtZW50VHlwZS5fX0FOVF9TV0lUQ0ggPT09IHRydWUgfHwgZWxlbWVudFR5cGUuX19BTlRfQ0hFQ0tCT1ggPT09IHRydWUgfHwgZWxlbWVudC50eXBlID09PSAnYnV0dG9uJykgJiYgZWxlbWVudC5wcm9wcy5kaXNhYmxlZCkge1xuICAgIC8vIFBpY2sgc29tZSBsYXlvdXQgcmVsYXRlZCBzdHlsZSBwcm9wZXJ0aWVzIHVwIHRvIHNwYW5cbiAgICAvLyBQcmV2ZW50IGxheW91dCBidWdzIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNTI1NFxuICAgIHZhciBfc3BsaXRPYmplY3QgPSBzcGxpdE9iamVjdChlbGVtZW50LnByb3BzLnN0eWxlLCBbJ3Bvc2l0aW9uJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdmbG9hdCcsICdkaXNwbGF5JywgJ3pJbmRleCddKSxcbiAgICAgICAgcGlja2VkID0gX3NwbGl0T2JqZWN0LnBpY2tlZCxcbiAgICAgICAgb21pdHRlZCA9IF9zcGxpdE9iamVjdC5vbWl0dGVkO1xuXG4gICAgdmFyIHNwYW5TdHlsZSA9IF9leHRlbmRzKF9leHRlbmRzKHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSwgcGlja2VkKSwge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgd2lkdGg6IGVsZW1lbnQucHJvcHMuYmxvY2sgPyAnMTAwJScgOiBudWxsXG4gICAgfSk7XG5cbiAgICB2YXIgYnV0dG9uU3R5bGUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgb21pdHRlZCksIHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgdmFyIGNoaWxkID0gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgICBjbGFzc05hbWU6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIHN0eWxlOiBzcGFuU3R5bGUsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkLWNvbXBhdGlibGUtd3JhcHBlclwiKSlcbiAgICB9LCBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxudmFyIFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCEhcHJvcHMudmlzaWJsZSB8fCAhIXByb3BzLmRlZmF1bHRWaXNpYmxlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgdmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgIHNldFZpc2libGUocHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9LCBbcHJvcHMudmlzaWJsZV0pO1xuXG4gIHZhciBpc05vVGl0bGUgPSBmdW5jdGlvbiBpc05vVGl0bGUoKSB7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5O1xuICAgIHJldHVybiAhdGl0bGUgJiYgIW92ZXJsYXkgJiYgdGl0bGUgIT09IDA7IC8vIG92ZXJsYXkgZm9yIG9sZCB2ZXJzaW9uIGNvbXBhdGliaWxpdHlcbiAgfTtcblxuICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gb25WaXNpYmxlQ2hhbmdlKHZpcykge1xuICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykpIHtcbiAgICAgIHNldFZpc2libGUoaXNOb1RpdGxlKCkgPyBmYWxzZSA6IHZpcyk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm9uVmlzaWJsZUNoYW5nZSAmJiAhaXNOb1RpdGxlKCkpIHtcbiAgICAgIHByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0VG9vbHRpcFBsYWNlbWVudHMgPSBmdW5jdGlvbiBnZXRUb29sdGlwUGxhY2VtZW50cygpIHtcbiAgICB2YXIgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgYXJyb3dQb2ludEF0Q2VudGVyID0gcHJvcHMuYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBwcm9wcy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gICAgcmV0dXJuIGJ1aWx0aW5QbGFjZW1lbnRzIHx8ICgwLCBfcGxhY2VtZW50c1tcImRlZmF1bHRcIl0pKHtcbiAgICAgIGFycm93UG9pbnRBdENlbnRlcjogYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgYXV0b0FkanVzdE92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3dcbiAgICB9KTtcbiAgfTsgLy8g5Yqo5oCB6K6+572u5Yqo55S754K5XG5cblxuICB2YXIgb25Qb3B1cEFsaWduID0gZnVuY3Rpb24gb25Qb3B1cEFsaWduKGRvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHBsYWNlbWVudHMgPSBnZXRUb29sdGlwUGxhY2VtZW50cygpOyAvLyDlvZPliY3ov5Tlm57nmoTkvY3nva5cblxuICAgIHZhciBwbGFjZW1lbnQgPSBPYmplY3Qua2V5cyhwbGFjZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMF0gPT09IGFsaWduLnBvaW50c1swXSAmJiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzFdID09PSBhbGlnbi5wb2ludHNbMV07XG4gICAgfSlbMF07XG5cbiAgICBpZiAoIXBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8g5qC55o2u5b2T5YmN5Z2Q5qCH6K6+572u5Yqo55S754K5XG5cblxuICAgIHZhciByZWN0ID0gZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICc1MCUnXG4gICAgfTtcblxuICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZigndG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignQm90dG9tJykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KHJlY3QuaGVpZ2h0IC0gYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ1RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdCgtYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ1JpZ2h0JykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSBcIlwiLmNvbmNhdChyZWN0LndpZHRoIC0gYWxpZ24ub2Zmc2V0WzBdLCBcInB4XCIpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3JpZ2h0JykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignTGVmdCcpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBkb21Ob2RlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi5sZWZ0LCBcIiBcIikuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi50b3ApO1xuICB9O1xuXG4gIHZhciBnZXRPdmVybGF5ID0gZnVuY3Rpb24gZ2V0T3ZlcmxheSgpIHtcbiAgICB2YXIgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG5cbiAgICBpZiAodGl0bGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmxheSB8fCB0aXRsZSB8fCAnJztcbiAgfTtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgb3BlbkNsYXNzTmFtZSA9IHByb3BzLm9wZW5DbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlO1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndG9vbHRpcCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciB0ZW1wVmlzaWJsZSA9IHZpc2libGU7IC8vIEhpZGUgdG9vbHRpcCB3aGVuIHRoZXJlIGlzIG5vIHRpdGxlXG5cbiAgaWYgKCEoJ3Zpc2libGUnIGluIHByb3BzKSAmJiBpc05vVGl0bGUoKSkge1xuICAgIHRlbXBWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hpbGQgPSBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbigoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pLCBwcmVmaXhDbHMpO1xuICB2YXIgY2hpbGRQcm9wcyA9IGNoaWxkLnByb3BzO1xuICB2YXIgY2hpbGRDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjaGlsZFByb3BzLmNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBvcGVuQ2xhc3NOYW1lIHx8IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKSwgdHJ1ZSkpO1xuICB2YXIgY3VzdG9tT3ZlcmxheUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKG92ZXJsYXlDbGFzc05hbWUsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoY29sb3IpLCBjb2xvciAmJiBQcmVzZXRDb2xvclJlZ2V4LnRlc3QoY29sb3IpKSwgX2NsYXNzTmFtZXMyKSk7XG4gIHZhciBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZTtcbiAgdmFyIGFycm93Q29udGVudFN0eWxlO1xuXG4gIGlmIChjb2xvciAmJiAhUHJlc2V0Q29sb3JSZWdleC50ZXN0KGNvbG9yKSkge1xuICAgIGZvcm1hdHRlZE92ZXJsYXlJbm5lclN0eWxlID0gX2V4dGVuZHMoX2V4dGVuZHMoe30sIG92ZXJsYXlJbm5lclN0eWxlKSwge1xuICAgICAgYmFja2dyb3VuZDogY29sb3JcbiAgICB9KTtcbiAgICBhcnJvd0NvbnRlbnRTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNUb29sdGlwW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogY3VzdG9tT3ZlcmxheUNsYXNzTmFtZSxcbiAgICBnZXRUb29sdGlwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRUb29sdGlwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICByZWY6IHJlZixcbiAgICBidWlsdGluUGxhY2VtZW50czogZ2V0VG9vbHRpcFBsYWNlbWVudHMoKSxcbiAgICBvdmVybGF5OiBnZXRPdmVybGF5KCksXG4gICAgdmlzaWJsZTogdGVtcFZpc2libGUsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgb25Qb3B1cEFsaWduOiBvblBvcHVwQWxpZ24sXG4gICAgb3ZlcmxheUlubmVyU3R5bGU6IGZvcm1hdHRlZE92ZXJsYXlJbm5lclN0eWxlLFxuICAgIGFycm93Q29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1jb250ZW50XCIpLFxuICAgICAgc3R5bGU6IGFycm93Q29udGVudFN0eWxlXG4gICAgfSlcbiAgfSksIHRlbXBWaXNpYmxlID8gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgIGNsYXNzTmFtZTogY2hpbGRDbHNcbiAgfSkgOiBjaGlsZCk7XG59KTtcblRvb2x0aXAuZGlzcGxheU5hbWUgPSAnVG9vbHRpcCc7XG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZy1mYXN0JyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWVcbn07XG52YXIgX2RlZmF1bHQgPSBUb29sdGlwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0T3ZlcmZsb3dPcHRpb25zID0gZ2V0T3ZlcmZsb3dPcHRpb25zO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRQbGFjZW1lbnRzO1xuXG52YXIgX3BsYWNlbWVudHMgPSByZXF1aXJlKFwicmMtdG9vbHRpcC9saWIvcGxhY2VtZW50c1wiKTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQgPSB7XG4gIGFkanVzdFg6IDAsXG4gIGFkanVzdFk6IDBcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuXG5mdW5jdGlvbiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSB7XG4gIGlmICh0eXBlb2YgYXV0b0FkanVzdE92ZXJmbG93ID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gYXV0b0FkanVzdE92ZXJmbG93ID8gYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA6IGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKF9leHRlbmRzKHt9LCBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZCksIGF1dG9BZGp1c3RPdmVyZmxvdyk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudHMoY29uZmlnKSB7XG4gIHZhciBfY29uZmlnJGFycm93V2lkdGggPSBjb25maWcuYXJyb3dXaWR0aCxcbiAgICAgIGFycm93V2lkdGggPSBfY29uZmlnJGFycm93V2lkdGggPT09IHZvaWQgMCA/IDUgOiBfY29uZmlnJGFycm93V2lkdGgsXG4gICAgICBfY29uZmlnJGhvcml6b250YWxBcnIgPSBjb25maWcuaG9yaXpvbnRhbEFycm93U2hpZnQsXG4gICAgICBob3Jpem9udGFsQXJyb3dTaGlmdCA9IF9jb25maWckaG9yaXpvbnRhbEFyciA9PT0gdm9pZCAwID8gMTYgOiBfY29uZmlnJGhvcml6b250YWxBcnIsXG4gICAgICBfY29uZmlnJHZlcnRpY2FsQXJyb3cgPSBjb25maWcudmVydGljYWxBcnJvd1NoaWZ0LFxuICAgICAgdmVydGljYWxBcnJvd1NoaWZ0ID0gX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID09PSB2b2lkIDAgPyA4IDogX2NvbmZpZyR2ZXJ0aWNhbEFycm93LFxuICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gY29uZmlnLmF1dG9BZGp1c3RPdmVyZmxvdztcbiAgdmFyIHBsYWNlbWVudE1hcCA9IHtcbiAgICBsZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAwXVxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgMF1cbiAgICB9LFxuICAgIHRvcDoge1xuICAgICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFswLCAtNF1cbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFswLCA0XVxuICAgIH0sXG4gICAgdG9wTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIC00XVxuICAgIH0sXG4gICAgbGVmdFRvcDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgLSh2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKV1cbiAgICB9LFxuICAgIHRvcFJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAndGMnXSxcbiAgICAgIG9mZnNldDogW2hvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCwgLTRdXG4gICAgfSxcbiAgICByaWdodFRvcDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCA0XVxuICAgIH0sXG4gICAgcmlnaHRCb3R0b206IHtcbiAgICAgIHBvaW50czogWydibCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgdmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aF1cbiAgICB9LFxuICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbLShob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpLCA0XVxuICAgIH0sXG4gICAgbGVmdEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgdmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aF1cbiAgICB9XG4gIH07XG4gIE9iamVjdC5rZXlzKHBsYWNlbWVudE1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcGxhY2VtZW50TWFwW2tleV0gPSBjb25maWcuYXJyb3dQb2ludEF0Q2VudGVyID8gX2V4dGVuZHMoX2V4dGVuZHMoe30sIHBsYWNlbWVudE1hcFtrZXldKSwge1xuICAgICAgb3ZlcmZsb3c6IGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpLFxuICAgICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9KSA6IF9leHRlbmRzKF9leHRlbmRzKHt9LCBfcGxhY2VtZW50cy5wbGFjZW1lbnRzW2tleV0pLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdylcbiAgICB9KTtcbiAgICBwbGFjZW1lbnRNYXBba2V5XS5pZ25vcmVTaGFrZSA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcGxhY2VtZW50TWFwO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIHZlbmRvclByZWZpeDtcbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuXG4gIHZlbmRvclByZWZpeCA9ICcnO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGU7XG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBcIlwiLmNvbmNhdChnZXRWZW5kb3JQcmVmaXgoKSwgXCJUcmFuc2l0aW9uUHJvcGVydHlcIikgOiAndHJhbnNpdGlvblByb3BlcnR5Jztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gXCJcIi5jb25jYXQoZ2V0VmVuZG9yUHJlZml4KCksIFwiVHJhbnNmb3JtXCIpIDogJ3RyYW5zZm9ybSc7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtWFkobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcGFyc2VGbG9hdChtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSwgMCksXG4gICAgICB5OiBwYXJzZUZsb2F0KG1hdHJpeFsxM10gfHwgbWF0cml4WzVdLCAwKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxudmFyIG1hdHJpeDJkID0gL21hdHJpeFxcKCguKilcXCkvO1xudmFyIG1hdHJpeDNkID0gL21hdHJpeDNkXFwoKC4qKVxcKS87XG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFycjtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG5cbiAgICBpZiAobWF0Y2gyZCkge1xuICAgICAgbWF0Y2gyZCA9IG1hdGNoMmRbMV07XG4gICAgICBhcnIgPSBtYXRjaDJkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzRdID0geHkueDtcbiAgICAgIGFycls1XSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJtYXRyaXgoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaDNkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDNkKVsxXTtcbiAgICAgIGFyciA9IG1hdGNoM2Quc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbMTJdID0geHkueDtcbiAgICAgIGFyclsxM10gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwibWF0cml4M2QoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFRyYW5zZm9ybShub2RlLCBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHh5LngsIFwicHgpIHRyYW5zbGF0ZVkoXCIpLmNvbmNhdCh4eS55LCBcInB4KSB0cmFuc2xhdGVaKDApXCIpKTtcbiAgfVxufVxuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcbnZhciBnZXRDb21wdXRlZFN0eWxlWDsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0ODU2NTQvMzA0MDYwNVxuXG5mdW5jdGlvbiBmb3JjZVJlbGF5b3V0KGVsZW0pIHtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZWxlbS5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcblxuICBpZiAoX3R5cGVvZihuYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIik7XG4gICAgfVxuXG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94O1xuICB2YXIgeDtcbiAgdmFyIHk7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wOyAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbXCJwYWdlXCIuY29uY2F0KHRvcCA/ICdZJyA6ICdYJywgXCJPZmZzZXRcIildO1xuICB2YXIgbWV0aG9kID0gXCJzY3JvbGxcIi5jb25jYXQodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuXG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDsgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG5cbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuXG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuXG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudChub2RlKSB7XG4gIGlmIChpc1dpbmRvdyhub2RlKSkge1xuICAgIHJldHVybiBub2RlLmRvY3VtZW50O1xuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNzKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY3M7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBnZXREb2N1bWVudChlbGVtKTtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpOyAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChSRV9OVU0sIFwiKSg/IXB4KVthLXolXSskXCIpLCAnaScpO1xuXG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdOyAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcblxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTsgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTsgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDsgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cblxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuXG4gIHJldHVybiBvcHRpb24udXNlQ3NzQm90dG9tID8gJ2JvdHRvbScgOiBkaXI7XG59XG5cbmZ1bmN0aW9uIG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ3JpZ2h0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gJ2xlZnQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiAndG9wJztcbiAgfVxufSAvLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuXG5cbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG5cbiAgdmFyIHByZXNldEggPSAtOTk5O1xuICB2YXIgcHJlc2V0ViA9IC05OTk7XG4gIHZhciBob3Jpem9udGFsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ2xlZnQnLCBvcHRpb24pO1xuICB2YXIgdmVydGljYWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbigndG9wJywgb3B0aW9uKTtcbiAgdmFyIG9wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oaG9yaXpvbnRhbFByb3BlcnR5KTtcbiAgdmFyIG9wcG9zaXRlVmVydGljYWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKHZlcnRpY2FsUHJvcGVydHkpO1xuXG4gIGlmIChob3Jpem9udGFsUHJvcGVydHkgIT09ICdsZWZ0Jykge1xuICAgIHByZXNldEggPSA5OTk7XG4gIH1cblxuICBpZiAodmVydGljYWxQcm9wZXJ0eSAhPT0gJ3RvcCcpIHtcbiAgICBwcmVzZXRWID0gOTk5O1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICcnO1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0pIHx8ICcnO1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCAnbm9uZScpO1xuICB9XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbaG9yaXpvbnRhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldEgsIFwicHhcIik7XG4gIH1cblxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldFYsIFwicHhcIik7XG4gIH0gLy8gZm9yY2UgcmVsYXlvdXRcblxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRpciA9IGdldE9mZnNldERpcmVjdGlvbihrZXksIG9wdGlvbik7XG4gICAgICB2YXIgcHJlc2V0ID0ga2V5ID09PSAnbGVmdCcgPyBwcmVzZXRIIDogcHJlc2V0VjtcbiAgICAgIHZhciBvZmYgPSBvcmlnaW5hbE9mZnNldFtrZXldIC0gb2xkW2tleV07XG5cbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpOyAvLyBmb3JjZSByZWxheW91dFxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgc2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cblxuICB2YXIgcmV0ID0ge307XG5cbiAgZm9yICh2YXIgX2tleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICB2YXIgX2RpciA9IGdldE9mZnNldERpcmVjdGlvbihfa2V5LCBvcHRpb24pO1xuXG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuXG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9IGdldFRyYW5zZm9ybVhZKGVsZW0pO1xuICB2YXIgcmVzdWx0WFkgPSB7XG4gICAgeDogb3JpZ2luYWxYWS54LFxuICAgIHk6IG9yaWdpbmFsWFkueVxuICB9O1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueCA9IG9yaWdpbmFsWFkueCArIG9mZnNldC5sZWZ0IC0gb3JpZ2luYWxPZmZzZXQubGVmdDtcbiAgfVxuXG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuXG4gIHNldFRyYW5zZm9ybVhZKGVsZW0sIHJlc3VsdFhZKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIGlmIChvcHRpb24uaWdub3JlU2hha2UpIHtcbiAgICB2YXIgb3JpT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICAgIHZhciBvTGVmdCA9IG9yaU9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIG9Ub3AgPSBvcmlPZmZzZXQudG9wLnRvRml4ZWQoMCk7XG4gICAgdmFyIHRMZWZ0ID0gb2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgdFRvcCA9IG9mZnNldC50b3AudG9GaXhlZCgwKTtcblxuICAgIGlmIChvTGVmdCA9PT0gdExlZnQgJiYgb1RvcCA9PT0gdFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgZ2V0VHJhbnNmb3JtTmFtZSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZTsgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTsgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcDtcbiAgdmFyIGo7XG4gIHZhciBpO1xuXG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9IFwiXCIuY29uY2F0KHByb3ApLmNvbmNhdCh3aGljaFtpXSwgXCJXaWR0aFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBkb21VdGlscyA9IHtcbiAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50Lmhvc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gOSk7XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG59O1xuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1tcImRvY1wiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KCAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50W1wic2Nyb2xsXCIuY29uY2F0KG5hbWUpXSwgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbXCJzY3JvbGxcIi5jb25jYXQobmFtZSldLCBkb21VdGlsc1tcInZpZXdwb3J0XCIuY29uY2F0KG5hbWUpXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbXCJ2aWV3cG9ydFwiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9IFwiY2xpZW50XCIuY29uY2F0KG5hbWUpO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTsgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcblxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cblxuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG5cbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cblxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcblxuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7IC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcblxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG5cbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfSAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuXG5cbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cblxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG5cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcblxuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gpKTtcbiAgfVxuXG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07IC8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5cbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHZhbDtcbiAgdmFyIGVsZW0gPSBhcmdzWzBdOyAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG4gIGRvbVV0aWxzW1wib3V0ZXJcIi5jb25jYXQoZmlyc3QpXSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuXG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcblxuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG92ZXJmbG93ID0gb2JqLm92ZXJmbG93O1xuXG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG52YXIgZ2V0UGFyZW50ID0gdXRpbHMuZ2V0UGFyZW50O1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuXG4gIC8qXG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtvdmVyZmxvdzogaGlkZGVuXCI+XG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7XCIgaWQ9XCJkNlwiPlxuICAg5YWD57SgIDYg6auYIDEwMHB4IOWuvSA1MHB4PGJyLz5cbiAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAqL1xuICAvLyBlbGVtZW50Lm9mZnNldFBhcmVudCBkb2VzIHRoZSByaWdodCB0aGluZyBpbiBpZTcgYW5kIGJlbG93LiBSZXR1cm4gcGFyZW50IHdpdGggbGF5b3V0IVxuICAvLyAgSW4gb3RoZXIgYnJvd3NlcnMgaXQgb25seSBpbmNsdWRlcyBlbGVtZW50cyB3aXRoIHBvc2l0aW9uIGFic29sdXRlLCByZWxhdGl2ZSBvclxuICAvLyBmaXhlZCwgbm90IGVsZW1lbnRzIHdpdGggb3ZlcmZsb3cgc2V0IHRvIGF1dG8gb3Igc2Nyb2xsLlxuICAvLyAgICAgICAgaWYgKFVBLmllICYmIGllTW9kZSA8IDgpIHtcbiAgLy8gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gIC8vICAgICAgICB9XG4gIC8vIOe7n+S4gOeahCBvZmZzZXRQYXJlbnQg5pa55rOVXG5cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQ7XG4gIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgc2tpcFN0YXRpYyA9IHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcgfHwgcG9zaXRpb25TdHlsZSA9PT0gJ2Fic29sdXRlJztcblxuICBpZiAoIXNraXBTdGF0aWMpIHtcbiAgICByZXR1cm4gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyBudWxsIDogZ2V0UGFyZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgZm9yIChwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHkgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSA5OyBwYXJlbnQgPSBnZXRQYXJlbnQocGFyZW50KSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvblN0eWxlICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGdldFBhcmVudCQxID0gdXRpbHMuZ2V0UGFyZW50O1xuZnVuY3Rpb24gaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGZvciAocGFyZW50ID0gZ2V0UGFyZW50JDEoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IGdldFBhcmVudCQxKHBhcmVudCkpIHtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuXG5mdW5jdGlvbiBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoZWxlbWVudCwgYWx3YXlzQnlWaWV3cG9ydCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogSW5maW5pdHksXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogSW5maW5pdHlcbiAgfTtcbiAgdmFyIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cblxuICB3aGlsZSAoZWwpIHtcbiAgICAvLyBjbGllbnRXaWR0aCBpcyB6ZXJvIGZvciBpbmxpbmUgYmxvY2sgZWxlbWVudHMgaW4gaWUuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTEgfHwgZWwuY2xpZW50V2lkdGggIT09IDApICYmIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgdXRpbHMuY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTsgLy8gYWRkIGJvcmRlclxuXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsKTtcbiAgfSAvLyBTZXQgZWxlbWVudCBwb3NpdGlvbiB0byBmaXhlZFxuICAvLyBtYWtlIHN1cmUgYWJzb2x1dGUgZWxlbWVudCBpdHNlbGYgZG9uJ3QgYWZmZWN0IGl0J3MgdmlzaWJsZSBhcmVhXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc2MDFcblxuXG4gIHZhciBvcmlnaW5hbFBvc2l0aW9uID0gbnVsbDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7IC8vIHNjcm9sbFhYWCBvbiBodG1sIGlzIHN5bmMgd2l0aCBib2R5IHdoaWNoIG1lYW5zIG92ZXJmbG93OiBoaWRkZW4gb24gYm9keSBnZXRzIHdyb25nIHNjcm9sbFhYWC5cbiAgLy8gV2Ugc2hvdWxkIGN1dCB0aGlzIG91cnNlbGYuXG5cbiAgdmFyIGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvZHkpO1xuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dYID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50V2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICB9IC8vIFJlc2V0IGVsZW1lbnQgcG9zaXRpb24gYWZ0ZXIgY2FsY3VsYXRlIHRoZSB2aXNpYmxlIGFyZWFcblxuXG4gIGlmIChlbGVtZW50LnN0eWxlKSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IG9yaWdpbmFsUG9zaXRpb247XG4gIH1cblxuICBpZiAoYWx3YXlzQnlWaWV3cG9ydCB8fCBpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkpIHtcbiAgICAvLyBDbGlwIGJ5IHZpZXdwb3J0J3Mgc2l6ZS5cbiAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgc2Nyb2xsWCk7XG4gICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIENsaXAgYnkgZG9jdW1lbnQncyBzaXplLlxuICAgIHZhciBtYXhWaXNpYmxlV2lkdGggPSBNYXRoLm1heChkb2N1bWVudFdpZHRoLCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgbWF4VmlzaWJsZVdpZHRoKTtcbiAgICB2YXIgbWF4VmlzaWJsZUhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50SGVpZ2h0LCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgbWF4VmlzaWJsZUhlaWdodCk7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVJlY3QudG9wID49IDAgJiYgdmlzaWJsZVJlY3QubGVmdCA+PSAwICYmIHZpc2libGVSZWN0LmJvdHRvbSA+IHZpc2libGVSZWN0LnRvcCAmJiB2aXNpYmxlUmVjdC5yaWdodCA+IHZpc2libGVSZWN0LmxlZnQgPyB2aXNpYmxlUmVjdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSB1dGlscy5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfSAvLyBMZWZ0IGVkZ2UgaW5zaWRlIGFuZCByaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cucmVzaXplV2lkdGggJiYgcG9zLmxlZnQgPj0gdmlzaWJsZVJlY3QubGVmdCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIHNpemUud2lkdGggLT0gcG9zLmxlZnQgKyBzaXplLndpZHRoIC0gdmlzaWJsZVJlY3QucmlnaHQ7XG4gIH0gLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgLy8g5L+d6K+B5bem6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5bem6L6555WM5a+56b2QXG4gICAgcG9zLmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5yaWdodCAtIHNpemUud2lkdGgsIHZpc2libGVSZWN0LmxlZnQpO1xuICB9IC8vIFRvcCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH0gLy8gVG9wIGVkZ2UgaW5zaWRlIGFuZCBib3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZUhlaWdodCAmJiBwb3MudG9wID49IHZpc2libGVSZWN0LnRvcCAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICBzaXplLmhlaWdodCAtPSBwb3MudG9wICsgc2l6ZS5oZWlnaHQgLSB2aXNpYmxlUmVjdC5ib3R0b207XG4gIH0gLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICAvLyDkv53or4HkuIrovrnnlYzlkozlj6/op4bljLrln5/kuIrovrnnlYzlr7npvZBcbiAgICBwb3MudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQsIHZpc2libGVSZWN0LnRvcCk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMubWl4KHBvcywgc2l6ZSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlZ2lvbihub2RlKSB7XG4gIHZhciBvZmZzZXQ7XG4gIHZhciB3O1xuICB2YXIgaDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSB1dGlscy5vZmZzZXQobm9kZSk7XG4gICAgdyA9IHV0aWxzLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IHV0aWxzLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSB1dGlscy5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuXG4gIG9mZnNldC53aWR0aCA9IHc7XG4gIG9mZnNldC5oZWlnaHQgPSBoO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuICB2YXIgeCA9IHJlZ2lvbi5sZWZ0O1xuICB2YXIgeSA9IHJlZ2lvbi50b3A7XG5cbiAgaWYgKFYgPT09ICdjJykge1xuICAgIHkgKz0gaCAvIDI7XG4gIH0gZWxzZSBpZiAoViA9PT0gJ2InKSB7XG4gICAgeSArPSBoO1xuICB9XG5cbiAgaWYgKEggPT09ICdjJykge1xuICAgIHggKz0gdyAvIDI7XG4gIH0gZWxzZSBpZiAoSCA9PT0gJ3InKSB7XG4gICAgeCArPSB3O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCkge1xuICB2YXIgcDEgPSBnZXRBbGlnbk9mZnNldChyZWZOb2RlUmVnaW9uLCBwb2ludHNbMV0pO1xuICB2YXIgcDIgPSBnZXRBbGlnbk9mZnNldChlbFJlZ2lvbiwgcG9pbnRzWzBdKTtcbiAgdmFyIGRpZmYgPSBbcDIubGVmdCAtIHAxLmxlZnQsIHAyLnRvcCAtIHAxLnRvcF07XG4gIHJldHVybiB7XG4gICAgbGVmdDogTWF0aC5yb3VuZChlbFJlZ2lvbi5sZWZ0IC0gZGlmZlswXSArIG9mZnNldFswXSAtIHRhcmdldE9mZnNldFswXSksXG4gICAgdG9wOiBNYXRoLnJvdW5kKGVsUmVnaW9uLnRvcCAtIGRpZmZbMV0gKyBvZmZzZXRbMV0gLSB0YXJnZXRPZmZzZXRbMV0pXG4gIH07XG59XG5cbi8qKlxuICogYWxpZ24gZG9tIG5vZGUgZmxleGlibHlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuZnVuY3Rpb24gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3AgfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA+IHZpc2libGVSZWN0LnJpZ2h0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA8IHZpc2libGVSZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPiB2aXNpYmxlUmVjdC5ib3R0b20gfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0IDwgdmlzaWJsZVJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBmbGlwKHBvaW50cywgcmVnLCBtYXApIHtcbiAgdmFyIHJldCA9IFtdO1xuICB1dGlscy5lYWNoKHBvaW50cywgZnVuY3Rpb24gKHApIHtcbiAgICByZXQucHVzaChwLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG1hcFttXTtcbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmbGlwT2Zmc2V0KG9mZnNldCwgaW5kZXgpIHtcbiAgb2Zmc2V0W2luZGV4XSA9IC1vZmZzZXRbaW5kZXhdO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0KHN0ciwgb2Zmc2V0TGVuKSB7XG4gIHZhciBuO1xuXG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuXG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuLyoqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0Z3RSZWdpb24g5Y+C54Wn6IqC54K55omA5Y2g55qE5Yy65Z+fOiB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9XG4gKiBAcGFyYW0gYWxpZ25cbiAqL1xuXG5cbmZ1bmN0aW9uIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgYWxpZ24sIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gIHZhciBvdmVyZmxvdyA9IGFsaWduLm92ZXJmbG93O1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuICB2YXIgZmFpbCA9IDA7XG4gIHZhciBhbHdheXNCeVZpZXdwb3J0ID0gISEob3ZlcmZsb3cgJiYgb3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7IC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuXG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChzb3VyY2UsIGFsd2F5c0J5Vmlld3BvcnQpOyAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuXG4gIHZhciBlbFJlZ2lvbiA9IGdldFJlZ2lvbihzb3VyY2UpOyAvLyDlsIYgb2Zmc2V0IOi9rOaNouaIkOaVsOWAvO+8jOaUr+aMgeeZvuWIhuavlFxuXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgdGd0UmVnaW9uKTsgLy8g5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cbiAgdmFyIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7IC8vIOW9k+WJjeiKgueCueWwhuimgeaJgOWkhOeahOWMuuWfn1xuXG4gIHZhciBuZXdFbFJlZ2lvbiA9IHV0aWxzLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7IC8vIOWmguaenOWPr+inhuWMuuWfn+S4jeiDveWujOWFqOaUvue9ruW9k+WJjeiKgueCueaXtuWFgeiuuOiwg+aVtFxuXG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSAmJiBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WCkge1xuICAgICAgLy8g5aaC5p6c5qiq5ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW2xyXS9naSwge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7IC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxYKG5ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IG5ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBuZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WSkge1xuICAgICAgLy8g5aaC5p6c57q15ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIF9uZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1t0Yl0vZ2ksIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pOyAvLyDlgY/np7vph4/kuZ/lj43kuItcblxuXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBfbmV3UG9pbnRzLCBfbmV3T2Zmc2V0LCBfbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8g5aaC5p6c5aSx6LSl77yM6YeN5paw6K6h566X5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cblxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgdXRpbHMubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3RpbGxGYWlsWCA9IGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG4gICAgdmFyIGlzU3RpbGxGYWlsWSA9IGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7IC8vIOajgOafpeWPjeS4i+WQjueahOS9jee9ruaYr+WQpuWPr+S7peaUvuS4i+S6hu+8jOWmguaenOS7jeeEtuaUvuS4jeS4i++8mlxuICAgIC8vIDEuIOWkjeWOn+S/ruaUuei/h+eahOWumuS9jeWPguaVsFxuXG4gICAgaWYgKGlzU3RpbGxGYWlsWCB8fCBpc1N0aWxsRmFpbFkpIHtcbiAgICAgIHZhciBfbmV3UG9pbnRzMiA9IHBvaW50czsgLy8g6YeN572u5a+55bqU6YOo5YiG55qE57+76L2s6YC76L6RXG5cbiAgICAgIGlmIChpc1N0aWxsRmFpbFgpIHtcbiAgICAgICAgX25ld1BvaW50czIgPSBmbGlwKHBvaW50cywgL1tscl0vZ2ksIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGlsbEZhaWxZKSB7XG4gICAgICAgIF9uZXdQb2ludHMyID0gZmxpcChwb2ludHMsIC9bdGJdL2dpLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcG9pbnRzID0gX25ld1BvaW50czI7XG4gICAgICBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgICB9IC8vIDIuIOWPquacieaMh+WumuS6huWPr+S7peiwg+aVtOW9k+WJjeaWueWQkeaJjeiwg+aVtFxuXG5cbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc1N0aWxsRmFpbFg7XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNTdGlsbEZhaWxZOyAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcblxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfSAvLyBuZWVkIGp1ZGdlIHRvIGluIGNhc2Ugc2V0IGZpeGVkIHdpdGggaW4gY3NzIG9uIGhlaWdodCBhdXRvIGVsZW1lbnRcblxuXG4gIGlmIChuZXdFbFJlZ2lvbi53aWR0aCAhPT0gZWxSZWdpb24ud2lkdGgpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnd2lkdGgnLCB1dGlscy53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnaGVpZ2h0JywgdXRpbHMuaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuXG5cbiAgdXRpbHMub2Zmc2V0KHNvdXJjZSwge1xuICAgIGxlZnQ6IG5ld0VsUmVnaW9uLmxlZnQsXG4gICAgdG9wOiBuZXdFbFJlZ2lvbi50b3BcbiAgfSwge1xuICAgIHVzZUNzc1JpZ2h0OiBhbGlnbi51c2VDc3NSaWdodCxcbiAgICB1c2VDc3NCb3R0b206IGFsaWduLnVzZUNzc0JvdHRvbSxcbiAgICB1c2VDc3NUcmFuc2Zvcm06IGFsaWduLnVzZUNzc1RyYW5zZm9ybSxcbiAgICBpZ25vcmVTaGFrZTogYWxpZ24uaWdub3JlU2hha2VcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG4vKipcbiAqICAyMDEyLTA0LTI2IHlpbWluZ2hlQGdtYWlsLmNvbVxuICogICAtIOS8mOWMluaZuuiDveWvuem9kOeul+azlVxuICogICAtIOaFjueUqCByZXNpemVYWFxuICpcbiAqICAyMDExLTA3LTEzIHlpbWluZ2hlQGdtYWlsLmNvbSBub3RlOlxuICogICAtIOWinuWKoOaZuuiDveWvuem9kO+8jOS7peWPiuWkp+Wwj+iwg+aVtOmAiemhuVxuICoqL1xuXG5mdW5jdGlvbiBpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0LCBhbHdheXNCeVZpZXdwb3J0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCh0YXJnZXQsIGFsd2F5c0J5Vmlld3BvcnQpO1xuICB2YXIgdGFyZ2V0UmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG4gIHJldHVybiAhdmlzaWJsZVJlY3QgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgKyB0YXJnZXRSZWdpb24ud2lkdGggPD0gdmlzaWJsZVJlY3QubGVmdCB8fCB0YXJnZXRSZWdpb24udG9wICsgdGFyZ2V0UmVnaW9uLmhlaWdodCA8PSB2aXNpYmxlUmVjdC50b3AgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgPj0gdmlzaWJsZVJlY3QucmlnaHQgfHwgdGFyZ2V0UmVnaW9uLnRvcCA+PSB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGFsaWduRWxlbWVudChlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgcmVmTm9kZVJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuICB2YXIgaXNUYXJnZXROb3RPdXRPZlZpc2libGUgPSAhaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCwgYWxpZ24ub3ZlcmZsb3cgJiYgYWxpZ24ub3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7XG4gIHJldHVybiBkb0FsaWduKGVsLCByZWZOb2RlUmVnaW9uLCBhbGlnbiwgaXNUYXJnZXROb3RPdXRPZlZpc2libGUpO1xufVxuXG5hbGlnbkVsZW1lbnQuX19nZXRPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQ7XG5hbGlnbkVsZW1lbnQuX19nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5cbi8qKlxuICogYHRndFBvaW50YDogeyBwYWdlWCwgcGFnZVkgfSBvciB7IGNsaWVudFgsIGNsaWVudFkgfS5cbiAqIElmIGNsaWVudCBwb3NpdGlvbiBwcm92aWRlZCwgd2lsbCBpbnRlcm5hbCBjb252ZXJ0IHRvIHBhZ2UgcG9zaXRpb24uXG4gKi9cblxuZnVuY3Rpb24gYWxpZ25Qb2ludChlbCwgdGd0UG9pbnQsIGFsaWduKSB7XG4gIHZhciBwYWdlWDtcbiAgdmFyIHBhZ2VZO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWwpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcblxuICBpZiAoJ3BhZ2VYJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VYID0gdGd0UG9pbnQucGFnZVg7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVggPSBzY3JvbGxYICsgdGd0UG9pbnQuY2xpZW50WDtcbiAgfVxuXG4gIGlmICgncGFnZVknIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVkgPSB0Z3RQb2ludC5wYWdlWTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWSA9IHNjcm9sbFkgKyB0Z3RQb2ludC5jbGllbnRZO1xuICB9XG5cbiAgdmFyIHRndFJlZ2lvbiA9IHtcbiAgICBsZWZ0OiBwYWdlWCxcbiAgICB0b3A6IHBhZ2VZLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICB2YXIgcG9pbnRJblZpZXcgPSBwYWdlWCA+PSAwICYmIHBhZ2VYIDw9IHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoICYmIHBhZ2VZID49IDAgJiYgcGFnZVkgPD0gc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0OyAvLyBQcm92aWRlIGRlZmF1bHQgdGFyZ2V0IHBvaW50XG5cbiAgdmFyIHBvaW50cyA9IFthbGlnbi5wb2ludHNbMF0sICdjYyddO1xuICByZXR1cm4gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBfb2JqZWN0U3ByZWFkMih7fSwgYWxpZ24sIHtcbiAgICBwb2ludHM6IHBvaW50c1xuICB9KSwgcG9pbnRJblZpZXcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGlnbkVsZW1lbnQ7XG5leHBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIE1pbmlTdG9yZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm92aWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWluaVN0b3JlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdGhpcy5wcm9wcy5zdG9yZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0IHsgUHJvdmlkZXIgfTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgTWluaVN0b3JlQ29udGV4dCB9IGZyb20gJy4vUHJvdmlkZXInO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cbnZhciBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHt9KTsgfTtcbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHNob3VsZFN1YnNjcmliZSA9ICEhbWFwU3RhdGVUb1Byb3BzO1xuICAgIHZhciBmaW5hbE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyB8fCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgICAgICB2YXIgQ29ubmVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgICAgIF9fZXh0ZW5kcyhDb25uZWN0LCBfc3VwZXIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQ29ubmVjdChwcm9wcywgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gZmluYWxNYXBTdGF0ZVRvUHJvcHMoX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKSwgX3RoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHN1YnNjcmliZWQ6IG5leHRTdGF0ZSB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnN0b3JlID0gX3RoaXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlZDogZmluYWxNYXBTdGF0ZVRvUHJvcHMoX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3RoaXMuc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENvbm5lY3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gKHByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBvd25Qcm9wc1xuICAgICAgICAgICAgICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMgJiYgbWFwU3RhdGVUb1Byb3BzLmxlbmd0aCA9PT0gMiAmJiBwcm9wcyAhPT0gcHJldlN0YXRlLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVkOiBmaW5hbE1hcFN0YXRlVG9Qcm9wcyhwcmV2U3RhdGUuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9wczogcHJvcHMgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fFxuICAgICAgICAgICAgICAgICAgICAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUuc3Vic2NyaWJlZCwgbmV4dFN0YXRlLnN1YnNjcmliZWQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS50cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMucHJvcHMpLCB0aGlzLnN0YXRlLnN1YnNjcmliZWQpLCB7IHN0b3JlOiB0aGlzLnN0b3JlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcywgeyByZWY6IHRoaXMucHJvcHMubWluaVN0b3JlRm9yd2FyZGVkUmVmIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gXCJDb25uZWN0KFwiICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyBcIilcIjtcbiAgICAgICAgICAgIENvbm5lY3QuY29udGV4dFR5cGUgPSBNaW5pU3RvcmVDb250ZXh0O1xuICAgICAgICAgICAgcmV0dXJuIENvbm5lY3Q7XG4gICAgICAgIH0oUmVhY3QuQ29tcG9uZW50KSk7XG4gICAgICAgIGlmIChvcHRpb25zLmZvcndhcmRSZWYpIHtcbiAgICAgICAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgX19hc3NpZ24oe30sIHByb3BzLCB7IG1pbmlTdG9yZUZvcndhcmRlZFJlZjogcmVmIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0U3RhdGUocGFydGlhbCkge1xuICAgICAgICBzdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHBhcnRpYWwpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFN0YXRlOiBzZXRTdGF0ZSxcbiAgICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuL1Byb3ZpZGVyJztcbmV4cG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuL2Nvbm5lY3QnO1xuZXhwb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUnO1xuIiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5cbi8qKlxuICogUmVtb3ZlZCBwcm9wczpcbiAqICAtIGNoaWxkcmVuUHJvcHNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9IGZyb20gJ2RvbS1hbGlnbic7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgaXNTYW1lUG9pbnQsIHJlc3RvcmVGb2N1cywgbW9uaXRvclJlc2l6ZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdXNlQnVmZmVyIGZyb20gJy4vaG9va3MvdXNlQnVmZmVyJztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmdW5jKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50KHBvaW50KSB7XG4gIGlmIChfdHlwZW9mKHBvaW50KSAhPT0gJ29iamVjdCcgfHwgIXBvaW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBvaW50O1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiBBbGlnbihfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgYWxpZ24gPSBfcmVmLmFsaWduLFxuICAgICAgb25BbGlnbiA9IF9yZWYub25BbGlnbixcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemUgPSBfcmVmLm1vbml0b3JXaW5kb3dSZXNpemUsXG4gICAgICBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPSBfcmVmLm1vbml0b3JCdWZmZXJUaW1lLFxuICAgICAgbW9uaXRvckJ1ZmZlclRpbWUgPSBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPT09IHZvaWQgMCA/IDAgOiBfcmVmJG1vbml0b3JCdWZmZXJUaW07XG4gIHZhciBjYWNoZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBjaGlsZE5vZGUgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEFsaWduID09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gV2Ugc2F2ZSB0aGUgcHJvcHMgaGVyZSB0byBhdm9pZCBjbG9zdXJlIG1ha2VzIHByb3BzIG9vZFxuXG4gIHZhciBmb3JjZUFsaWduUHJvcHNSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC50YXJnZXQgPSB0YXJnZXQ7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50Lm9uQWxpZ24gPSBvbkFsaWduO1xuXG4gIHZhciBfdXNlQnVmZmVyID0gdXNlQnVmZmVyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjID0gZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQsXG4gICAgICAgIGxhdGVzdERpc2FibGVkID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLmRpc2FibGVkLFxuICAgICAgICBsYXRlc3RUYXJnZXQgPSBfZm9yY2VBbGlnblByb3BzUmVmJGMudGFyZ2V0O1xuXG4gICAgaWYgKCFsYXRlc3REaXNhYmxlZCAmJiBsYXRlc3RUYXJnZXQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50KGxhdGVzdFRhcmdldCk7XG4gICAgICB2YXIgcG9pbnQgPSBnZXRQb2ludChsYXRlc3RUYXJnZXQpO1xuICAgICAgY2FjaGVSZWYuY3VycmVudC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGNhY2hlUmVmLmN1cnJlbnQucG9pbnQgPSBwb2ludDsgLy8gSUUgbG9zZSBmb2N1cyBhZnRlciBlbGVtZW50IHJlYWxpZ25cbiAgICAgIC8vIFdlIHNob3VsZCByZWNvcmQgYWN0aXZlRWxlbWVudCBhbmQgcmVzdG9yZSBsYXRlclxuXG4gICAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IF9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICByZXN1bHQgPSBhbGlnbkVsZW1lbnQoc291cmNlLCBlbGVtZW50LCBhbGlnbik7XG4gICAgICB9IGVsc2UgaWYgKHBvaW50KSB7XG4gICAgICAgIHJlc3VsdCA9IGFsaWduUG9pbnQoc291cmNlLCBwb2ludCwgYWxpZ24pO1xuICAgICAgfVxuXG4gICAgICByZXN0b3JlRm9jdXMoYWN0aXZlRWxlbWVudCwgc291cmNlKTtcblxuICAgICAgaWYgKG9uQWxpZ24pIHtcbiAgICAgICAgb25BbGlnbihzb3VyY2UsIHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgbW9uaXRvckJ1ZmZlclRpbWUpLFxuICAgICAgX3VzZUJ1ZmZlcjIgPSBfc2xpY2VkVG9BcnJheShfdXNlQnVmZmVyLCAyKSxcbiAgICAgIF9mb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMF0sXG4gICAgICBjYW5jZWxGb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMV07IC8vID09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09XG4gIC8vIExpc3RlbiBmb3IgdGFyZ2V0IHVwZGF0ZWRcblxuXG4gIHZhciByZXNpemVNb25pdG9yID0gUmVhY3QudXNlUmVmKHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHt9XG4gIH0pOyAvLyBMaXN0ZW4gZm9yIHNvdXJjZSB1cGRhdGVkXG5cbiAgdmFyIHNvdXJjZVJlc2l6ZU1vbml0b3IgPSBSZWFjdC51c2VSZWYoe1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge31cbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50KHRhcmdldCk7XG4gICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQodGFyZ2V0KTtcblxuICAgIGlmIChub2RlUmVmLmN1cnJlbnQgIT09IHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50KSB7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwgPSBtb25pdG9yUmVzaXplKG5vZGVSZWYuY3VycmVudCwgX2ZvcmNlQWxpZ24pO1xuICAgIH1cblxuICAgIGlmIChjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgIT09IGVsZW1lbnQgfHwgIWlzU2FtZVBvaW50KGNhY2hlUmVmLmN1cnJlbnQucG9pbnQsIHBvaW50KSkge1xuICAgICAgX2ZvcmNlQWxpZ24oKTsgLy8gQWRkIHJlc2l6ZSBvYnNlcnZlclxuXG5cbiAgICAgIGlmIChyZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCA9IG1vbml0b3JSZXNpemUoZWxlbWVudCwgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIExpc3RlbiBmb3IgZGlzYWJsZWQgY2hhbmdlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBfZm9yY2VBbGlnbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxGb3JjZUFsaWduKCk7XG4gICAgfVxuICB9LCBbZGlzYWJsZWRdKTsgLy8gTGlzdGVuIGZvciB3aW5kb3cgcmVzaXplXG5cbiAgdmFyIHdpblJlc2l6ZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgaWYgKCF3aW5SZXNpemVSZWYuY3VycmVudCkge1xuICAgICAgICB3aW5SZXNpemVSZWYuY3VycmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHtcbiAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW21vbml0b3JXaW5kb3dSZXNpemVdKTsgLy8gQ2xlYXIgYWxsIGlmIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgY2FuY2VsRm9yY2VBbGlnbigpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgICAgICByZXR1cm4gX2ZvcmNlQWxpZ24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGROb2RlLCB7XG4gICAgICByZWY6IGNvbXBvc2VSZWYoY2hpbGROb2RlLnJlZiwgbm9kZVJlZilcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE5vZGU7XG59O1xuXG52YXIgUmVmQWxpZ24gPSBSZWFjdC5mb3J3YXJkUmVmKEFsaWduKTtcblJlZkFsaWduLmRpc3BsYXlOYW1lID0gJ0FsaWduJztcbmV4cG9ydCBkZWZhdWx0IFJlZkFsaWduOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNhbGxiYWNrLCBidWZmZXIpIHtcbiAgdmFyIGNhbGxlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbFRyaWdnZXIoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihmb3JjZSkge1xuICAgIGlmICghY2FsbGVkUmVmLmN1cnJlbnQgfHwgZm9yY2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaygpID09PSBmYWxzZSkge1xuICAgICAgICAvLyBOb3QgZGVsYXkgc2luY2UgY2FsbGJhY2sgY2FuY2VsbGVkIHNlbGZcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9LCBidWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgIH0sIGJ1ZmZlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0cmlnZ2VyLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gIH1dO1xufSk7IiwiLy8gZXhwb3J0IHRoaXMgcGFja2FnZSdzIGFwaVxuaW1wb3J0IEFsaWduIGZyb20gJy4vQWxpZ24nO1xuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBjb250YWlucyBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY29udGFpbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVQb2ludChwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBuZXh0KSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFwcmV2IHx8ICFuZXh0KSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCdwYWdlWCcgaW4gbmV4dCAmJiAncGFnZVknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5wYWdlWCA9PT0gbmV4dC5wYWdlWCAmJiBwcmV2LnBhZ2VZID09PSBuZXh0LnBhZ2VZO1xuICB9XG5cbiAgaWYgKCdjbGllbnRYJyBpbiBuZXh0ICYmICdjbGllbnRZJyBpbiBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXYuY2xpZW50WCA9PT0gbmV4dC5jbGllbnRYICYmIHByZXYuY2xpZW50WSA9PT0gbmV4dC5jbGllbnRZO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBjb250YWluZXIpIHtcbiAgLy8gRm9jdXMgYmFjayBpZiBpcyBpbiB0aGUgY29udGFpbmVyXG4gIGlmIChhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGNvbnRhaW5zKGNvbnRhaW5lciwgYWN0aXZlRWxlbWVudCkpIHtcbiAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb25pdG9yUmVzaXplKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmV2V2lkdGggPSBudWxsO1xuICB2YXIgcHJldkhlaWdodCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gb25SZXNpemUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDEpLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMlswXS50YXJnZXQ7XG5cbiAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLmhlaWdodDtcblxuICAgIHZhciBmaXhlZFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgdmFyIGZpeGVkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuXG4gICAgaWYgKHByZXZXaWR0aCAhPT0gZml4ZWRXaWR0aCB8fCBwcmV2SGVpZ2h0ICE9PSBmaXhlZEhlaWdodCkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICB3aWR0aDogZml4ZWRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBmaXhlZEhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldldpZHRoID0gZml4ZWRXaWR0aDtcbiAgICBwcmV2SGVpZ2h0ID0gZml4ZWRIZWlnaHQ7XG4gIH1cblxuICB2YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob25SZXNpemUpO1xuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9O1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVmYXVsdC1wcm9wcy1tYXRjaC1wcm9wLXR5cGVzLCByZWFjdC9uby1tdWx0aS1jb21wLCByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuaW1wb3J0IHsgZ2V0VHJhbnNpdGlvbk5hbWUsIGFuaW1hdGlvbkVuZE5hbWUsIHRyYW5zaXRpb25FbmROYW1lLCBzdXBwb3J0VHJhbnNpdGlvbiB9IGZyb20gJy4vdXRpbC9tb3Rpb24nO1xuXG52YXIgU1RBVFVTX05PTkUgPSAnbm9uZSc7XG52YXIgU1RBVFVTX0FQUEVBUiA9ICdhcHBlYXInO1xudmFyIFNUQVRVU19FTlRFUiA9ICdlbnRlcic7XG52YXIgU1RBVFVTX0xFQVZFID0gJ2xlYXZlJztcblxuLyoqXG4gKiBgdHJhbnNpdGlvblN1cHBvcnRgIGlzIHVzZWQgZm9yIG5vbmUgdHJhbnNpdGlvbiB0ZXN0IGNhc2UuXG4gKiBEZWZhdWx0IHdlIHVzZSBicm93c2VyIHRyYW5zaXRpb24gZXZlbnQgc3VwcG9ydCBjaGVjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbkNTU01vdGlvbihjb25maWcpIHtcbiAgdmFyIHRyYW5zaXRpb25TdXBwb3J0ID0gY29uZmlnO1xuICB2YXIgZm9yd2FyZFJlZiA9ICEhUmVhY3QuZm9yd2FyZFJlZjtcblxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZy50cmFuc2l0aW9uU3VwcG9ydDtcbiAgICBmb3J3YXJkUmVmID0gJ2ZvcndhcmRSZWYnIGluIGNvbmZpZyA/IGNvbmZpZy5mb3J3YXJkUmVmIDogZm9yd2FyZFJlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gISEocHJvcHMubW90aW9uTmFtZSAmJiB0cmFuc2l0aW9uU3VwcG9ydCk7XG4gIH1cblxuICB2YXIgQ1NTTW90aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ1NTTW90aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENTU01vdGlvbigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NNb3Rpb24pO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ1NTTW90aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ1NTTW90aW9uKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgIF90aGlzLm9uRG9tVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgIG5ld1N0YXR1cyA9IF90aGlzJHN0YXRlLm5ld1N0YXR1cztcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkFwcGVhclN0YXJ0ID0gX3RoaXMkcHJvcHMub25BcHBlYXJTdGFydCxcbiAgICAgICAgICAgIG9uRW50ZXJTdGFydCA9IF90aGlzJHByb3BzLm9uRW50ZXJTdGFydCxcbiAgICAgICAgICAgIG9uTGVhdmVTdGFydCA9IF90aGlzJHByb3BzLm9uTGVhdmVTdGFydCxcbiAgICAgICAgICAgIG9uQXBwZWFyQWN0aXZlID0gX3RoaXMkcHJvcHMub25BcHBlYXJBY3RpdmUsXG4gICAgICAgICAgICBvbkVudGVyQWN0aXZlID0gX3RoaXMkcHJvcHMub25FbnRlckFjdGl2ZSxcbiAgICAgICAgICAgIG9uTGVhdmVBY3RpdmUgPSBfdGhpcyRwcm9wcy5vbkxlYXZlQWN0aXZlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gX3RoaXMkcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBfdGhpcyRwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gX3RoaXMkcHJvcHMubW90aW9uTGVhdmU7XG5cblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24oX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXZlbnQgaW5qZWN0aW9uXG4gICAgICAgIHZhciAkZWxlID0gX3RoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoX3RoaXMuJGNhY2hlRWxlICE9PSAkZWxlKSB7XG4gICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdGhpcy4kY2FjaGVFbGUpO1xuICAgICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoJGVsZSk7XG4gICAgICAgICAgX3RoaXMuJGNhY2hlRWxlID0gJGVsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgc3RhdHVzXG4gICAgICAgIGlmIChuZXdTdGF0dXMgJiYgc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkFwcGVhclN0YXJ0LCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMob25BcHBlYXJBY3RpdmUsIFNUQVRVU19BUFBFQVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiBtb3Rpb25FbnRlcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkVudGVyU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkVudGVyQWN0aXZlLCBTVEFUVVNfRU5URVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkxlYXZlU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkxlYXZlQWN0aXZlLCBTVEFUVVNfTEVBVkUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdGlvbkVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZTIuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzQWN0aXZlID0gX3RoaXMkc3RhdGUyLnN0YXR1c0FjdGl2ZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25BcHBlYXJFbmQgPSBfdGhpcyRwcm9wczIub25BcHBlYXJFbmQsXG4gICAgICAgICAgICBvbkVudGVyRW5kID0gX3RoaXMkcHJvcHMyLm9uRW50ZXJFbmQsXG4gICAgICAgICAgICBvbkxlYXZlRW5kID0gX3RoaXMkcHJvcHMyLm9uTGVhdmVFbmQ7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiBzdGF0dXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25BcHBlYXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uRW50ZXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uTGVhdmVFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldE5vZGVSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgaW50ZXJuYWxSZWYgPSBfdGhpcy5wcm9wcy5pbnRlcm5hbFJlZjtcblxuICAgICAgICBfdGhpcy5ub2RlID0gbm9kZTtcblxuICAgICAgICBpZiAodHlwZW9mIGludGVybmFsUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWYobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJuYWxSZWYgJiYgJ2N1cnJlbnQnIGluIGludGVybmFsUmVmKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKF90aGlzLm5vZGUgfHwgX3RoaXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmFsbGJhY2sgdG8gY2FjaGUgZWxlbWVudC5cbiAgICAgICAgICAgKiBUaGlzIGlzIG9ubHkgaGFwcGVuIHdoZW4gYG1vdGlvbkRlYWRsaW5lYCB0cmlnZ2VyIGJ1dCBlbGVtZW50IHJlbW92ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIF90aGlzLiRjYWNoZUVsZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgkZWxlKSB7XG4gICAgICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgICAgICRlbGUuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kTmFtZSwgX3RoaXMub25Nb3Rpb25FbmQpO1xuICAgICAgICAkZWxlLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kTmFtZSwgX3RoaXMub25Nb3Rpb25FbmQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgkZWxlKSB7XG4gICAgICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgICAgICRlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kTmFtZSwgX3RoaXMub25Nb3Rpb25FbmQpO1xuICAgICAgICAkZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kTmFtZSwgX3RoaXMub25Nb3Rpb25FbmQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMudXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gKHN0eWxlRnVuYywgYWRkaXRpb25hbFN0YXRlLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0YXR1c1N0eWxlID0gc3R5bGVGdW5jID8gc3R5bGVGdW5jKF90aGlzLmdldEVsZW1lbnQoKSwgZXZlbnQpIDogbnVsbDtcblxuICAgICAgICBpZiAoc3RhdHVzU3R5bGUgPT09IGZhbHNlIHx8IF90aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgICB2YXIgbmV4dFN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIG5leHRTdGVwID0gZnVuY3Rpb24gbmV4dFN0ZXAoKSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0RnJhbWUoY2FsbGJhY2spO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgICAgc3RhdHVzU3R5bGU6IHR5cGVvZiBzdGF0dXNTdHlsZSA9PT0gJ29iamVjdCcgPyBzdGF0dXNTdHlsZSA6IG51bGwsXG4gICAgICAgICAgbmV3U3RhdHVzOiBmYWxzZVxuICAgICAgICB9LCBhZGRpdGlvbmFsU3RhdGUpLCBuZXh0U3RlcCk7IC8vIFRyaWdnZXIgYmVmb3JlIG5leHQgZnJhbWUgJiBhZnRlciBgY29tcG9uZW50RGlkTW91bnRgXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMgPSBmdW5jdGlvbiAoc3R5bGVGdW5jLCBjdXJyZW50U3RhdHVzKSB7XG4gICAgICAgIC8vIGBzZXRTdGF0ZWAgdXNlIGBwb3N0TWVzc2FnZWAgdG8gdHJpZ2dlciBhdCB0aGUgZW5kIG9mIGZyYW1lLlxuICAgICAgICAvLyBMZXQncyB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIHVwZGF0ZSBuZXcgc3RhdGUgaW4gbmV4dCBmcmFtZS5cbiAgICAgICAgX3RoaXMubmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gX3RoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICAgICAgaWYgKHN0YXR1cyAhPT0gY3VycmVudFN0YXR1cykgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIG1vdGlvbkRlYWRsaW5lID0gX3RoaXMucHJvcHMubW90aW9uRGVhZGxpbmU7XG5cblxuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhzdHlsZUZ1bmMsIHsgc3RhdHVzQWN0aXZlOiB0cnVlIH0pO1xuXG4gICAgICAgICAgaWYgKG1vdGlvbkRlYWRsaW5lID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLm9uTW90aW9uRW5kKHtcbiAgICAgICAgICAgICAgICBkZWFkbGluZTogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG1vdGlvbkRlYWRsaW5lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMubmV4dEZyYW1lID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgX3RoaXMuY2FuY2VsTmV4dEZyYW1lKCk7XG4gICAgICAgIF90aGlzLnJhZiA9IHJhZihmdW5jKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmNhbmNlbE5leHRGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnJhZikge1xuICAgICAgICAgIHJhZi5jYW5jZWwoX3RoaXMucmFmKTtcbiAgICAgICAgICBfdGhpcy5yYWYgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RhdHVzOiBTVEFUVVNfTk9ORSxcbiAgICAgICAgc3RhdHVzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbmV3U3RhdHVzOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzU3R5bGU6IG51bGxcbiAgICAgIH07XG4gICAgICBfdGhpcy4kY2FjaGVFbGUgPSBudWxsO1xuICAgICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgICBfdGhpcy5yYWYgPSBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDU1NNb3Rpb24sIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Eb21VcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vbkRvbVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuJGNhY2hlRWxlKTtcbiAgICAgICAgdGhpcy5jYW5jZWxOZXh0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc3RhdHVzID0gX3N0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c0FjdGl2ZSA9IF9zdGF0ZS5zdGF0dXNBY3RpdmUsXG4gICAgICAgICAgICBzdGF0dXNTdHlsZSA9IF9zdGF0ZS5zdGF0dXNTdHlsZTtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIG1vdGlvbk5hbWUgPSBfcHJvcHMubW90aW9uTmFtZSxcbiAgICAgICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIHJlbW92ZU9uTGVhdmUgPSBfcHJvcHMucmVtb3ZlT25MZWF2ZSxcbiAgICAgICAgICAgIGxlYXZlZENsYXNzTmFtZSA9IF9wcm9wcy5sZWF2ZWRDbGFzc05hbWUsXG4gICAgICAgICAgICBldmVudFByb3BzID0gX3Byb3BzLmV2ZW50UHJvcHM7XG5cblxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfTk9ORSB8fCAhaXNTdXBwb3J0VHJhbnNpdGlvbih0aGlzLnByb3BzKSkge1xuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIGV2ZW50UHJvcHMpLCB0aGlzLnNldE5vZGVSZWYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlbW92ZU9uTGVhdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgZXZlbnRQcm9wcywgeyBjbGFzc05hbWU6IGxlYXZlZENsYXNzTmFtZSB9KSwgdGhpcy5zZXROb2RlUmVmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgZXZlbnRQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBnZXRUcmFuc2l0aW9uTmFtZShtb3Rpb25OYW1lLCBzdGF0dXMpLCBzdGF0dXMgIT09IFNUQVRVU19OT05FKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBnZXRUcmFuc2l0aW9uTmFtZShtb3Rpb25OYW1lLCBzdGF0dXMgKyAnLWFjdGl2ZScpLCBzdGF0dXMgIT09IFNUQVRVU19OT05FICYmIHN0YXR1c0FjdGl2ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgbW90aW9uTmFtZSwgdHlwZW9mIG1vdGlvbk5hbWUgPT09ICdzdHJpbmcnKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICBzdHlsZTogc3RhdHVzU3R5bGVcbiAgICAgICAgfSksIHRoaXMuc2V0Tm9kZVJlZik7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgX3JlZikge1xuICAgICAgICB2YXIgcHJldlByb3BzID0gX3JlZi5wcmV2UHJvcHMsXG4gICAgICAgICAgICBwcmV2U3RhdHVzID0gX3JlZi5zdGF0dXM7XG5cbiAgICAgICAgaWYgKCFpc1N1cHBvcnRUcmFuc2l0aW9uKHByb3BzKSkgcmV0dXJuIHt9O1xuXG4gICAgICAgIHZhciB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIG1vdGlvbkFwcGVhciA9IHByb3BzLm1vdGlvbkFwcGVhcixcbiAgICAgICAgICAgIG1vdGlvbkVudGVyID0gcHJvcHMubW90aW9uRW50ZXIsXG4gICAgICAgICAgICBtb3Rpb25MZWF2ZSA9IHByb3BzLm1vdGlvbkxlYXZlLFxuICAgICAgICAgICAgbW90aW9uTGVhdmVJbW1lZGlhdGVseSA9IHByb3BzLm1vdGlvbkxlYXZlSW1tZWRpYXRlbHk7XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgIHByZXZQcm9wczogcHJvcHNcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDbGVhbiB1cCBzdGF0dXMgaWYgcHJvcCBzZXQgdG8gZmFsc2VcbiAgICAgICAgaWYgKHByZXZTdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgIW1vdGlvbkFwcGVhciB8fCBwcmV2U3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgIW1vdGlvbkVudGVyIHx8IHByZXZTdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiAhbW90aW9uTGVhdmUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfTk9ORTtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGVhclxuICAgICAgICBpZiAoIXByZXZQcm9wcyAmJiB2aXNpYmxlICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19BUFBFQVI7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVudGVyXG4gICAgICAgIGlmIChwcmV2UHJvcHMgJiYgIXByZXZQcm9wcy52aXNpYmxlICYmIHZpc2libGUgJiYgbW90aW9uRW50ZXIpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfRU5URVI7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExlYXZlXG4gICAgICAgIGlmIChwcmV2UHJvcHMgJiYgcHJldlByb3BzLnZpc2libGUgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUgfHwgIXByZXZQcm9wcyAmJiBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ICYmICF2aXNpYmxlICYmIG1vdGlvbkxlYXZlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX0xFQVZFO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENTU01vdGlvbjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIENTU01vdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBtb3Rpb25FbnRlcjogdHJ1ZSxcbiAgICBtb3Rpb25BcHBlYXI6IHRydWUsXG4gICAgbW90aW9uTGVhdmU6IHRydWUsXG4gICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZVxuICB9O1xuXG5cbiAgaWYgKCFmb3J3YXJkUmVmKSB7XG4gICAgcmV0dXJuIENTU01vdGlvbjtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7IGludGVybmFsUmVmOiByZWYgfSwgcHJvcHMpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbkNTU01vdGlvbihzdXBwb3J0VHJhbnNpdGlvbik7IiwidmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09IFRyYW5zaXRpb24gPT09PT09PT09PT09PT09PT1cbi8vIEV2ZW50IHdyYXBwZXIuIENvcHkgZnJvbSByZWFjdCBzb3VyY2UgY29kZVxuZnVuY3Rpb24gbWFrZVByZWZpeE1hcChzdHlsZVByb3AsIGV2ZW50TmFtZSkge1xuICB2YXIgcHJlZml4ZXMgPSB7fTtcblxuICBwcmVmaXhlc1tzdHlsZVByb3AudG9Mb3dlckNhc2UoKV0gPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgcHJlZml4ZXNbJ1dlYmtpdCcgKyBzdHlsZVByb3BdID0gJ3dlYmtpdCcgKyBldmVudE5hbWU7XG4gIHByZWZpeGVzWydNb3onICsgc3R5bGVQcm9wXSA9ICdtb3onICsgZXZlbnROYW1lO1xuICBwcmVmaXhlc1snbXMnICsgc3R5bGVQcm9wXSA9ICdNUycgKyBldmVudE5hbWU7XG4gIHByZWZpeGVzWydPJyArIHN0eWxlUHJvcF0gPSAnbycgKyBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gcHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlcyhkb21TdXBwb3J0LCB3aW4pIHtcbiAgdmFyIHByZWZpeGVzID0ge1xuICAgIGFuaW1hdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnQW5pbWF0aW9uJywgJ0FuaW1hdGlvbkVuZCcpLFxuICAgIHRyYW5zaXRpb25lbmQ6IG1ha2VQcmVmaXhNYXAoJ1RyYW5zaXRpb24nLCAnVHJhbnNpdGlvbkVuZCcpXG4gIH07XG5cbiAgaWYgKGRvbVN1cHBvcnQpIHtcbiAgICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxuXG52YXIgdmVuZG9yUHJlZml4ZXMgPSBnZXRWZW5kb3JQcmVmaXhlcyhjYW5Vc2VET00sIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge30pO1xuXG52YXIgc3R5bGUgPSB7fTtcblxuaWYgKGNhblVzZURPTSkge1xuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xufVxuXG52YXIgcHJlZml4ZWRFdmVudE5hbWVzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgaWYgKHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICB9XG5cbiAgdmFyIHByZWZpeE1hcCA9IHZlbmRvclByZWZpeGVzW2V2ZW50TmFtZV07XG5cbiAgaWYgKHByZWZpeE1hcCkge1xuICAgIHZhciBzdHlsZVByb3BMaXN0ID0gT2JqZWN0LmtleXMocHJlZml4TWFwKTtcbiAgICB2YXIgbGVuID0gc3R5bGVQcm9wTGlzdC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdmFyIHN0eWxlUHJvcCA9IHN0eWxlUHJvcExpc3RbaV07XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZWZpeE1hcCwgc3R5bGVQcm9wKSAmJiBzdHlsZVByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSBwcmVmaXhNYXBbc3R5bGVQcm9wXTtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IHZhciBhbmltYXRpb25FbmROYW1lID0gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoJ2FuaW1hdGlvbmVuZCcpO1xuZXhwb3J0IHZhciB0cmFuc2l0aW9uRW5kTmFtZSA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKCd0cmFuc2l0aW9uZW5kJyk7XG5leHBvcnQgdmFyIHN1cHBvcnRUcmFuc2l0aW9uID0gISEoYW5pbWF0aW9uRW5kTmFtZSAmJiB0cmFuc2l0aW9uRW5kTmFtZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSh0cmFuc2l0aW9uTmFtZSwgdHJhbnNpdGlvblR5cGUpIHtcbiAgaWYgKCF0cmFuc2l0aW9uTmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgdHlwZSA9IHRyYW5zaXRpb25UeXBlLnJlcGxhY2UoLy1cXHcvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWVbdHlwZV07XG4gIH1cblxuICByZXR1cm4gdHJhbnNpdGlvbk5hbWUgKyAnLScgKyB0cmFuc2l0aW9uVHlwZTtcbn0iLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vU3ViTWVudSc7XG5pbXBvcnQgeyBnZXRXaWR0aCwgc2V0U3R5bGUsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG52YXIgTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUUgPSAnbWVudWl0ZW0tb3ZlcmZsb3dlZCc7XG52YXIgRkxPQVRfUFJFQ0lTSU9OX0FESlVTVCA9IDAuNTtcblxudmFyIERPTVdyYXAgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgRE9NV3JhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhET01XcmFwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRE9NV3JhcCk7XG5cbiAgICBmdW5jdGlvbiBET01XcmFwKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRE9NV3JhcCk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBfdGhpcy5yZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgICBfdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbDsgLy8gb3JpZ2luYWwgc2Nyb2xsIHNpemUgb2YgdGhlIGxpc3RcblxuICAgICAgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gMDsgLy8gY29weSBvZiBvdmVyZmxvd2VkIGl0ZW1zXG5cbiAgICAgIF90aGlzLm92ZXJmbG93ZWRJdGVtcyA9IFtdOyAvLyBjYWNoZSBpdGVtIG9mIHRoZSBvcmlnaW5hbCBpdGVtcyAoc28gd2UgY2FuIHRyYWNrIHRoZSBzaXplIGFuZCBvcmRlcilcblxuICAgICAgX3RoaXMubWVudUl0ZW1TaXplcyA9IFtdO1xuICAgICAgX3RoaXMuY2FuY2VsRnJhbWVJZCA9IG51bGw7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbGFzdFZpc2libGVJbmRleDogdW5kZWZpbmVkXG4gICAgICB9OyAvLyBnZXQgYWxsIHZhbGlkIG1lbnVJdGVtIG5vZGVzXG5cbiAgICAgIF90aGlzLmdldE1lbnVJdGVtTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgICBpZiAoIXVsKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IC8vIGZpbHRlciBvdXQgYWxsIG92ZXJmbG93ZWQgaW5kaWNhdG9yIHBsYWNlaG9sZGVyXG5cblxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh1bC5jaGlsZHJlbikuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NOYW1lLnNwbGl0KCcgJykuaW5kZXhPZihcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW92ZXJmbG93ZWQtc3VibWVudVwiKSkgPCAwO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbSA9IGZ1bmN0aW9uIChrZXlQcmVmaXgsIG92ZXJmbG93ZWRJdGVtcywgcmVuZGVyUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yID0gX3RoaXMkcHJvcHMub3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMubW9kZSxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWU7XG5cbiAgICAgICAgaWYgKGxldmVsICE9PSAxIHx8IG1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IC8vIHB1dCBhbGwgdGhlIG92ZXJmbG93ZWQgaXRlbSBpbnNpZGUgYSBzdWJtZW51XG4gICAgICAgIC8vIHdpdGggYSB0aXRsZSBvZiBvdmVyZmxvdyBpbmRpY2F0b3IgKCcuLi4nKVxuXG5cbiAgICAgICAgdmFyIGNvcHkgPSBfdGhpcy5wcm9wcy5jaGlsZHJlblswXTtcblxuICAgICAgICB2YXIgX2NvcHkkcHJvcHMgPSBjb3B5LnByb3BzLFxuICAgICAgICAgICAgdGhyb3dBd2F5ID0gX2NvcHkkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICB0aXRsZSA9IF9jb3B5JHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgcHJvcFN0eWxlID0gX2NvcHkkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jb3B5JHByb3BzLCBbXCJjaGlsZHJlblwiLCBcInRpdGxlXCIsIFwic3R5bGVcIl0pO1xuXG4gICAgICAgIHZhciBzdHlsZSA9IF9vYmplY3RTcHJlYWQoe30sIHByb3BTdHlsZSk7XG5cbiAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KGtleVByZWZpeCwgXCItb3ZlcmZsb3dlZC1pbmRpY2F0b3JcIik7XG4gICAgICAgIHZhciBldmVudEtleSA9IFwiXCIuY29uY2F0KGtleVByZWZpeCwgXCItb3ZlcmZsb3dlZC1pbmRpY2F0b3JcIik7XG5cbiAgICAgICAgaWYgKG92ZXJmbG93ZWRJdGVtcy5sZW5ndGggPT09IDAgJiYgcmVuZGVyUGxhY2Vob2xkZXIgIT09IHRydWUpIHtcbiAgICAgICAgICBzdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVuZGVyUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBzdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGZyb20gdGFraW5nIG5vcm1hbCBkb20gc3BhY2VcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAga2V5ID0gXCJcIi5jb25jYXQoa2V5LCBcIi1wbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICBldmVudEtleSA9IFwiXCIuY29uY2F0KGV2ZW50S2V5LCBcIi1wbGFjZWhvbGRlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3B1cENsYXNzTmFtZSA9IHRoZW1lID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHRoZW1lKSA6ICcnO1xuICAgICAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICAgICAgbWVudUFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICBpZiAocmVzdFtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wc1trXSA9IHJlc3Rba107XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViTWVudSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgdGl0bGU6IG92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW92ZXJmbG93ZWQtc3VibWVudVwiKSxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogcG9wdXBDbGFzc05hbWVcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBldmVudEtleTogZXZlbnRLZXksXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KSwgb3ZlcmZsb3dlZEl0ZW1zKTtcbiAgICAgIH07IC8vIG1lbW9yaXplIHJlbmRlcmVkIG1lbnVTaXplXG5cblxuICAgICAgX3RoaXMuc2V0Q2hpbGRyZW5XaWR0aEFuZFJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgICBpZiAoIXVsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVsQ2hpbGRyZW5Ob2RlcyA9IHVsLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmICghdWxDaGlsZHJlbk5vZGVzIHx8IHVsQ2hpbGRyZW5Ob2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGFzdE92ZXJmbG93ZWRJbmRpY2F0b3JQbGFjZWhvbGRlciA9IHVsLmNoaWxkcmVuW3VsQ2hpbGRyZW5Ob2Rlcy5sZW5ndGggLSAxXTsgLy8gbmVlZCBsYXN0IG92ZXJmbG93ZWQgaW5kaWNhdG9yIGZvciBjYWxjdWxhdGluZyBsZW5ndGg7XG5cbiAgICAgICAgc2V0U3R5bGUobGFzdE92ZXJmbG93ZWRJbmRpY2F0b3JQbGFjZWhvbGRlciwgJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cbiAgICAgICAgdmFyIG1lbnVJdGVtTm9kZXMgPSBfdGhpcy5nZXRNZW51SXRlbU5vZGVzKCk7IC8vIHJlc2V0IGRpc3BsYXkgYXR0cmlidXRlIGZvciBhbGwgaGlkZGVuIGVsZW1lbnRzIGNhdXNlZCBieSBvdmVyZmxvdyB0byBjYWxjdWxhdGUgdXBkYXRlZCB3aWR0aFxuICAgICAgICAvLyBhbmQgdGhlbiByZXNldCB0byBvcmlnaW5hbCBzdGF0ZSBhZnRlciB3aWR0aCBjYWxjdWxhdGlvblxuXG5cbiAgICAgICAgdmFyIG92ZXJmbG93ZWRJdGVtcyA9IG1lbnVJdGVtTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuY2xhc3NOYW1lLnNwbGl0KCcgJykuaW5kZXhPZihNRU5VSVRFTV9PVkVSRkxPV0VEX0NMQVNTTkFNRSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIG92ZXJmbG93ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgc2V0U3R5bGUoYywgJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5tZW51SXRlbVNpemVzID0gbWVudUl0ZW1Ob2Rlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0V2lkdGgoYyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvdmVyZmxvd2VkSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHNldFN0eWxlKGMsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm92ZXJmbG93ZWRJbmRpY2F0b3JXaWR0aCA9IGdldFdpZHRoKHVsLmNoaWxkcmVuW3VsLmNoaWxkcmVuLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gX3RoaXMubWVudUl0ZW1TaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYyArIGN1cjtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlUmVzaXplKCk7IC8vIHByZXZlbnQgdGhlIG92ZXJmbG93ZWQgaW5kaWNhdG9yIGZyb20gdGFraW5nIHNwYWNlO1xuXG5cbiAgICAgICAgc2V0U3R5bGUobGFzdE92ZXJmbG93ZWRJbmRpY2F0b3JQbGFjZWhvbGRlciwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMubW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVsID0gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgICAgIGlmICghdWwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGggPSBnZXRXaWR0aCh1bCk7XG4gICAgICAgIF90aGlzLm92ZXJmbG93ZWRJdGVtcyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFN1bVdpZHRoID0gMDsgLy8gaW5kZXggZm9yIGxhc3QgdmlzaWJsZSBjaGlsZCBpbiBob3Jpem9udGFsIG1vZGVcblxuICAgICAgICB2YXIgbGFzdFZpc2libGVJbmRleDsgLy8gZmxvYXQgbnVtYmVyIGNvbXBhcmlzb24gY291bGQgYmUgcHJvYmxlbWF0aWNcbiAgICAgICAgLy8gZS5nLiAwLjEgKyAwLjIgPiAwLjMgPT09PT0+IHRydWVcbiAgICAgICAgLy8gdGh1cyB1c2luZyBGTE9BVF9QUkVDSVNJT05fQURKVVNUIGFzIGJ1ZmZlciB0byBoZWxwIHRoZSBzaXR1YXRpb25cblxuICAgICAgICBpZiAoX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID4gd2lkdGggKyBGTE9BVF9QUkVDSVNJT05fQURKVVNUKSB7XG4gICAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IC0xO1xuXG4gICAgICAgICAgX3RoaXMubWVudUl0ZW1TaXplcy5mb3JFYWNoKGZ1bmN0aW9uIChsaVdpZHRoKSB7XG4gICAgICAgICAgICBjdXJyZW50U3VtV2lkdGggKz0gbGlXaWR0aDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdW1XaWR0aCArIF90aGlzLm92ZXJmbG93ZWRJbmRpY2F0b3JXaWR0aCA8PSB3aWR0aCkge1xuICAgICAgICAgICAgICBsYXN0VmlzaWJsZUluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGFzdFZpc2libGVJbmRleDogbGFzdFZpc2libGVJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRE9NV3JhcCwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUoKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sZXZlbCA9PT0gMSAmJiB0aGlzLnByb3BzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHZhciBtZW51VWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgICAgIGlmICghbWVudVVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGNhbmNlbEZyYW1lSWQgPSBfdGhpczIuY2FuY2VsRnJhbWVJZDtcbiAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY2FuY2VsRnJhbWVJZCk7XG4gICAgICAgICAgICAgIF90aGlzMi5jYW5jZWxGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzMi5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFtdLnNsaWNlLmNhbGwobWVudVVsLmNoaWxkcmVuKS5jb25jYXQobWVudVVsKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgX3RoaXMyLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczIucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwobWVudVVsLmNoaWxkcmVuKS5jb25jYXQobWVudVVsKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX3RoaXMyLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUobWVudVVsLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgIHN1YlRyZWU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jYW5jZWxGcmFtZUlkKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyQ2hpbGRyZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihjaGlsZHJlbikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAvLyBuZWVkIHRvIHRha2UgY2FyZSBvZiBvdmVyZmxvd2VkIGl0ZW1zIGluIGhvcml6b250YWwgbW9kZVxuICAgICAgICB2YXIgbGFzdFZpc2libGVJbmRleCA9IHRoaXMuc3RhdGUubGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgcmV0dXJuIChjaGlsZHJlbiB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNoaWxkTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGNoaWxkTm9kZTtcblxuICAgICAgICAgIGlmIChfdGhpczMucHJvcHMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB2YXIgb3ZlcmZsb3dlZCA9IF90aGlzMy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0oY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBbXSk7XG5cbiAgICAgICAgICAgIGlmIChsYXN0VmlzaWJsZUluZGV4ICE9PSB1bmRlZmluZWQgJiYgX3RoaXMzLnByb3BzLmNsYXNzTmFtZS5pbmRleE9mKFwiXCIuY29uY2F0KF90aGlzMy5wcm9wcy5wcmVmaXhDbHMsIFwiLXJvb3RcIikpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0VmlzaWJsZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUsIC8vIOi/memHjOS/ruaUuSBldmVudEtleSDmmK/kuLrkuobpmLLmraLpmpDol4/nirbmgIHkuIvov5jkvJrop6blj5Egb3BlbmtleXMg5LqL5Lu2XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXZlbnRLZXk6IFwiXCIuY29uY2F0KGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgXCItaGlkZGVuXCIpLFxuXG4gICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAqIExlZ2FjeSBjb2RlLiBIZXJlIGBjbGFzc05hbWVgIG5ldmVyIHVzZWQ6XG4gICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L21lbnUvY29tbWl0LzRjZDZiNDlmY2U5ZDExNjcyNmY0ZWEwMGRkYTg1MzI1ZDZmMjY1MDAjZGlmZi1lMmZhNDhmNzVjMmRkMjMxODI5NWNkZTQyODU1NmE3NlIyNDBcbiAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChNRU5VSVRFTV9PVkVSRkxPV0VEX0NMQVNTTkFNRSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbGFzdFZpc2libGVJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zID0gY2hpbGRyZW4uc2xpY2UobGFzdFZpc2libGVJbmRleCArIDEpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCAvLyBjaGlsZHJlbltpbmRleF0ua2V5IHdpbGwgYmVjb21lICcuJGtleScgaW4gY2xvbmUgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gb3ZlcndyaXRlIHdpdGggdGhlIGNvcnJlY3Qga2V5IGV4cGxpY2l0bHlcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBjLnByb3BzLmV2ZW50S2V5LFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAndmVydGljYWwtbGVmdCdcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ZWQgPSBfdGhpczMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtKGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgX3RoaXMzLm92ZXJmbG93ZWRJdGVtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJldCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYWNjKSwgW292ZXJmbG93ZWQsIGl0ZW1dKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIC8vIG5lZWQgYSBwbGFjZWhvbGRlciBmb3IgY2FsY3VsYXRpbmcgb3ZlcmZsb3dlZCBpbmRpY2F0b3Igd2lkdGhcbiAgICAgICAgICAgICAgcmV0LnB1c2goX3RoaXMzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbShjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIFtdLCB0cnVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYWNjKSwgW2l0ZW1dKTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMi52aXNpYmxlLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICAgIG92ZXJmbG93ZWRJbmRpY2F0b3IgPSBfdGhpcyRwcm9wczIub3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wczIubW9kZSxcbiAgICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMyLmxldmVsLFxuICAgICAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMyLnRhZyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wczIudGhlbWUsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1widmlzaWJsZVwiLCBcInByZWZpeENsc1wiLCBcIm92ZXJmbG93ZWRJbmRpY2F0b3JcIiwgXCJtb2RlXCIsIFwibGV2ZWxcIiwgXCJ0YWdcIiwgXCJjaGlsZHJlblwiLCBcInRoZW1lXCJdKTtcblxuICAgICAgICB2YXIgVGFnID0gdGFnO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIE9iamVjdC5hc3NpZ24oe30sIHJlc3QpLCB0aGlzLnJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERPTVdyYXA7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBET01XcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJydcbiAgfTtcbiAgcmV0dXJuIERPTVdyYXA7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTVdyYXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIERpdmlkZXIgPSBmdW5jdGlvbiBEaXZpZGVyKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgcm9vdFByZWZpeENscyA9IF9yZWYucm9vdFByZWZpeENscyxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1kaXZpZGVyXCIpLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9KTtcbn07XG5cbkRpdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICAvLyBUbyBmaXgga2V5Ym9hcmQgVVguXG4gIGRpc2FibGVkOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge31cbn07XG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZSB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IFN1YlBvcHVwTWVudSwgeyBnZXRBY3RpdmVLZXkgfSBmcm9tICcuL1N1YlBvcHVwTWVudSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGdldE1vdGlvbiB9IGZyb20gJy4vdXRpbHMvbGVnYWN5VXRpbCc7XG5cbnZhciBNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnUpO1xuXG4gICAgZnVuY3Rpb24gTWVudShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgICBfdGhpcy5vblNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RJbmZvKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzO1xuXG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgLy8gcm9vdCBtZW51XG4gICAgICAgICAgdmFyIF90aGlzJHN0b3JlJGdldFN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgICAgX3NlbGVjdGVkS2V5cyA9IF90aGlzJHN0b3JlJGdldFN0YXRlLnNlbGVjdGVkS2V5cztcblxuICAgICAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuXG4gICAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRLZXlzID0gX3NlbGVjdGVkS2V5cy5jb25jYXQoW3NlbGVjdGVkS2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zZWxlY3RlZEtleXMgPSBbc2VsZWN0ZWRLZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzZWxlY3RlZEtleXM6IF9zZWxlY3RlZEtleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BzLm9uU2VsZWN0KF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc2VsZWN0SW5mbyksIHt9LCB7XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM6IF9zZWxlY3RlZEtleXNcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgfTsgLy8gb25LZXlEb3duIG5lZWRzIHRvIGJlIGV4cG9zZWQgYXMgYSBpbnN0YW5jZSBtZXRob2RcbiAgICAgIC8vIGUuZy4sIGluIHJjLXNlbGVjdCwgd2UgbmVlZCB0byBuYXZpZ2F0ZSBtZW51IGl0ZW0gd2hpbGVcbiAgICAgIC8vIGN1cnJlbnQgYWN0aXZlIGl0ZW0gaXMgcmMtc2VsZWN0IGlucHV0IGJveCByYXRoZXIgdGhhbiB0aGUgbWVudSBpdHNlbGZcblxuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSwgY2FsbGJhY2spIHtcbiAgICAgICAgX3RoaXMuaW5uZXJNZW51LmdldFdyYXBwZWRJbnN0YW5jZSgpLm9uS2V5RG93bihlLCBjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMi5wcm9wcztcblxuICAgICAgICB2YXIgb3BlbktleXMgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLm9wZW5LZXlzLmNvbmNhdCgpO1xuXG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHByb2Nlc3NTaW5nbGUgPSBmdW5jdGlvbiBwcm9jZXNzU2luZ2xlKGUpIHtcbiAgICAgICAgICB2YXIgb25lQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGUub3Blbikge1xuICAgICAgICAgICAgb25lQ2hhbmdlZCA9IG9wZW5LZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMTtcblxuICAgICAgICAgICAgaWYgKG9uZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgb3BlbktleXMucHVzaChlLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IG9wZW5LZXlzLmluZGV4T2YoZS5rZXkpO1xuICAgICAgICAgICAgb25lQ2hhbmdlZCA9IGluZGV4ICE9PSAtMTtcblxuICAgICAgICAgICAgaWYgKG9uZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgb3BlbktleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VkID0gY2hhbmdlZCB8fCBvbmVDaGFuZ2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgICAgIC8vIGJhdGNoIGNoYW5nZSBjYWxsXG4gICAgICAgICAgZXZlbnQuZm9yRWFjaChwcm9jZXNzU2luZ2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzU2luZ2xlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgaWYgKCEoJ29wZW5LZXlzJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRlc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMy5wcm9wcztcblxuICAgICAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHZhciBfc2VsZWN0ZWRLZXlzMiA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWRLZXlzLmNvbmNhdCgpO1xuXG4gICAgICAgICAgdmFyIHNlbGVjdGVkS2V5ID0gc2VsZWN0SW5mby5rZXk7XG5cbiAgICAgICAgICB2YXIgaW5kZXggPSBfc2VsZWN0ZWRLZXlzMi5pbmRleE9mKHNlbGVjdGVkS2V5KTtcblxuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIF9zZWxlY3RlZEtleXMyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkS2V5czogX3NlbGVjdGVkS2V5czJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BzLm9uRGVzZWxlY3QoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzZWxlY3RJbmZvKSwge30sIHtcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5czogX3NlbGVjdGVkS2V5czJcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE9wZW5UcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTQgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplNC5wcm9wcztcblxuICAgICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5vcGVuVHJhbnNpdGlvbk5hbWU7XG4gICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gcHJvcHMub3BlbkFuaW1hdGlvbjtcblxuICAgICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHR5cGVvZiBhbmltYXRpb25OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1vcGVuLVwiKS5jb25jYXQoYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRJbm5lck1lbnUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBfdGhpcy5pbm5lck1lbnUgPSBub2RlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaXNSb290TWVudSA9IHRydWU7XG4gICAgICB2YXIgc2VsZWN0ZWRLZXlzID0gcHJvcHMuZGVmYXVsdFNlbGVjdGVkS2V5cztcbiAgICAgIHZhciBvcGVuS2V5cyA9IHByb3BzLmRlZmF1bHRPcGVuS2V5cztcblxuICAgICAgaWYgKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cyA9IHByb3BzLnNlbGVjdGVkS2V5cyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdvcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgICAgb3BlbktleXMgPSBwcm9wcy5vcGVuS2V5cyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RvcmUgPSBjcmVhdGUoe1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5cyxcbiAgICAgICAgb3BlbktleXM6IG9wZW5LZXlzLFxuICAgICAgICBhY3RpdmVLZXk6IHtcbiAgICAgICAgICAnMC1tZW51LSc6IGdldEFjdGl2ZUtleShwcm9wcywgcHJvcHMuYWN0aXZlS2V5KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVudSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1pbmlTdG9yZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTWluaVN0b3JlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZU1pbmlTdG9yZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU1pbmlTdG9yZSgpIHtcbiAgICAgICAgaWYgKCdzZWxlY3RlZEtleXMnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5czogdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMgfHwgW11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb3BlbktleXMnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW5LZXlzOiB0aGlzLnByb3BzLm9wZW5LZXlzIHx8IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICBwcm9wcy5jbGFzc05hbWUgKz0gXCIgXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItcm9vdFwiKTtcblxuICAgICAgICBpZiAocHJvcHMuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSBcIiBcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1ydGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBvbk9wZW5DaGFuZ2U6IHRoaXMub25PcGVuQ2hhbmdlLFxuICAgICAgICAgIG9uRGVzZWxlY3Q6IHRoaXMub25EZXNlbGVjdCxcbiAgICAgICAgICBvblNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgICAgICBwYXJlbnRNZW51OiB0aGlzLFxuICAgICAgICAgIG1vdGlvbjogZ2V0TW90aW9uKHRoaXMucHJvcHMpXG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMub3BlbkFuaW1hdGlvbjtcbiAgICAgICAgZGVsZXRlIHByb3BzLm9wZW5UcmFuc2l0aW9uTmFtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHtcbiAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlBvcHVwTWVudSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWY6IHRoaXMuc2V0SW5uZXJNZW51XG4gICAgICAgIH0pLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIG9uQ2xpY2s6IG5vb3AsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb25PcGVuQ2hhbmdlOiBub29wLFxuICAgIG9uRGVzZWxlY3Q6IG5vb3AsXG4gICAgZGVmYXVsdFNlbGVjdGVkS2V5czogW10sXG4gICAgZGVmYXVsdE9wZW5LZXlzOiBbXSxcbiAgICBzdWJNZW51T3BlbkRlbGF5OiAwLjEsXG4gICAgc3ViTWVudUNsb3NlRGVsYXk6IDAuMSxcbiAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogJ2hvdmVyJyxcbiAgICBwcmVmaXhDbHM6ICdyYy1tZW51JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgc3R5bGU6IHt9LFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiB7fSxcbiAgICBvdmVyZmxvd2VkSW5kaWNhdG9yOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlxceEI3XFx4QjdcXHhCN1wiKVxuICB9O1xuICByZXR1cm4gTWVudTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IHsgbm9vcCwgbWVudUFsbFByb3BzIH0gZnJvbSAnLi91dGlsJztcblxudmFyIE1lbnVJdGVtID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIE1lbnVJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1lbnVJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudUl0ZW0pO1xuXG4gICAgZnVuY3Rpb24gTWVudUl0ZW0oKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICAgICAgX3RoaXMub25DbGljayhlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wcy5ldmVudEtleSxcbiAgICAgICAgICAgIG9uSXRlbUhvdmVyID0gX3RoaXMkcHJvcHMub25JdGVtSG92ZXIsXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wcy5vbk1vdXNlTGVhdmU7XG4gICAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGhvdmVyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgb25Nb3VzZUxlYXZlKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczIuZXZlbnRLZXksXG4gICAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzMi5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzMi5vbk1vdXNlRW50ZXI7XG4gICAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBvbk1vdXNlRW50ZXIoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczMuZXZlbnRLZXksXG4gICAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczMub25DbGljayxcbiAgICAgICAgICAgIG9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLm9uU2VsZWN0LFxuICAgICAgICAgICAgb25EZXNlbGVjdCA9IF90aGlzJHByb3BzMy5vbkRlc2VsZWN0LFxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IF90aGlzJHByb3BzMy5pc1NlbGVjdGVkO1xuICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGtleVBhdGg6IFtldmVudEtleV0sXG4gICAgICAgICAgaXRlbTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfTtcbiAgICAgICAgb25DbGljayhpbmZvKTtcblxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgb25EZXNlbGVjdChpbmZvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25TZWxlY3QoaW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgb25TZWxlY3QoaW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgX3RoaXMubm9kZSA9IG5vZGU7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbnVJdGVtLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgICAgIHRoaXMuY2FsbFJlZigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2FsbFJlZigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChwcm9wcy5vbkRlc3Ryb3kpIHtcbiAgICAgICAgICBwcm9wcy5vbkRlc3Ryb3kocHJvcHMuZXZlbnRLZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFByZWZpeENsc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWZpeENscygpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMucHJvcHMucm9vdFByZWZpeENscywgXCItaXRlbVwiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0QWN0aXZlQ2xhc3NOYW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTZWxlY3RlZENsYXNzTmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItc2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldERpc2FibGVkQ2xhc3NOYW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlzYWJsZWRDbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLmdldFByZWZpeENscygpLCBcIi1kaXNhYmxlZFwiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FsbFJlZlwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGxSZWYoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hbnVhbFJlZikge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFudWFsUmVmKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHRoaXMuZ2V0UHJlZml4Q2xzKCksIHByb3BzLmNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUoKSwgIXByb3BzLmRpc2FibGVkICYmIHByb3BzLmFjdGl2ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSgpLCBwcm9wcy5pc1NlbGVjdGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCksIHByb3BzLmRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcblxuICAgICAgICB2YXIgYXR0cnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzLmF0dHJpYnV0ZSksIHt9LCB7XG4gICAgICAgICAgdGl0bGU6IHR5cGVvZiBwcm9wcy50aXRsZSA9PT0gJ3N0cmluZycgPyBwcm9wcy50aXRsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICAvLyBzZXQgdG8gbWVudWl0ZW0gYnkgZGVmYXVsdFxuICAgICAgICAgIHJvbGU6IHByb3BzLnJvbGUgfHwgJ21lbnVpdGVtJyxcbiAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wcy5yb2xlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgIC8vIG92ZXJ3cml0ZSB0byBvcHRpb25cbiAgICAgICAgICBhdHRycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYXR0cnMpLCB7fSwge1xuICAgICAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IHByb3BzLmlzU2VsZWN0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5yb2xlID09PSBudWxsIHx8IHByb3BzLnJvbGUgPT09ICdub25lJykge1xuICAgICAgICAgIC8vIHNvbWV0aW1lcyB3ZSB3YW50IHRvIHNwZWNpZnkgcm9sZSBpbnNpZGUgPGxpLz4gZWxlbWVudFxuICAgICAgICAgIC8vIDxsaT48YSByb2xlPSdtZW51aXRlbSc+TGluazwvYT48L2xpPiB3b3VsZCBiZSBhIGdvb2QgZXhhbXBsZVxuICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgcm9sZSBvbiA8bGkvPiBzaG91bGQgYmUgXCJub25lXCIgdG9cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGltcGxpZWQgbGlzdGl0ZW0gcm9sZS5cbiAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMS9leGFtcGxlcy9tZW51YmFyL21lbnViYXItMS9tZW51YmFyLTEuaHRtbFxuICAgICAgICAgIGF0dHJzLnJvbGUgPSAnbm9uZSc7XG4gICAgICAgIH0gLy8gSW4gY2FzZSB0aGF0IG9uQ2xpY2svb25Nb3VzZUxlYXZlL29uTW91c2VFbnRlciBpcyBwYXNzZWQgZG93biBmcm9tIG93bmVyXG5cblxuICAgICAgICB2YXIgbW91c2VFdmVudCA9IHtcbiAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMub25Nb3VzZUVudGVyXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHN0eWxlID0gX29iamVjdFNwcmVhZCh7fSwgcHJvcHMuc3R5bGUpO1xuXG4gICAgICAgIGlmIChwcm9wcy5tb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmRpcmVjdGlvbjtcbiAgICAgICAgdmFyIGljb24gPSB0aGlzLnByb3BzLml0ZW1JY29uO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5pdGVtSWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIFRPRE86IFRoaXMgaXMgYSBidWcgd2hpY2ggc2hvdWxkIGZpeGVkIGFmdGVyIFRTIHJlZmFjdG9yXG4gICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5pdGVtSWNvbiwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBhdHRycywgbW91c2VFdmVudCwge1xuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICByZWY6IHRoaXMuc2F2ZU5vZGVcbiAgICAgICAgfSksIHByb3BzLmNoaWxkcmVuLCBpY29uKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVudUl0ZW07XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBNZW51SXRlbS5pc01lbnVJdGVtID0gdHJ1ZTtcbiAgTWVudUl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9uTW91c2VFbnRlcjogbm9vcCxcbiAgICBvbk1vdXNlTGVhdmU6IG5vb3AsXG4gICAgbWFudWFsUmVmOiBub29wXG4gIH07XG4gIHJldHVybiBNZW51SXRlbTtcbn0oKTtcblxuZXhwb3J0IHsgTWVudUl0ZW0gfTtcbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjIuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjIuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IGFjdGl2ZUtleVtzdWJNZW51S2V5XSA9PT0gZXZlbnRLZXksXG4gICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRLZXlzLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMVxuICB9O1xufSkoTWVudUl0ZW0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWVudUFsbFByb3BzIH0gZnJvbSAnLi91dGlsJztcblxudmFyIE1lbnVJdGVtR3JvdXAgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgTWVudUl0ZW1Hcm91cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZW51SXRlbUdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudUl0ZW1Hcm91cCk7XG5cbiAgICBmdW5jdGlvbiBNZW51SXRlbUdyb3VwKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudUl0ZW1Hcm91cCk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIF90aGlzLnJlbmRlcklubmVyTWVudUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHJlbmRlck1lbnVJdGVtID0gX3RoaXMkcHJvcHMucmVuZGVyTWVudUl0ZW0sXG4gICAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzLmluZGV4O1xuICAgICAgICByZXR1cm4gcmVuZGVyTWVudUl0ZW0oaXRlbSwgaW5kZXgsIF90aGlzLnByb3BzLnN1Yk1lbnVLZXkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZW51SXRlbUdyb3VwLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHZhciBfcHJvcHMkY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IHByb3BzLnJvb3RQcmVmaXhDbHM7XG4gICAgICAgIHZhciB0aXRsZUNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZ3JvdXAtdGl0bGVcIik7XG4gICAgICAgIHZhciBsaXN0Q2xhc3NOYW1lID0gXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1ncm91cC1saXN0XCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgIH0pOyAvLyBTZXQgb25DbGljayB0byBudWxsLCB0byBpZ25vcmUgcHJvcGFnYXRlZCBvbkNsaWNrIGV2ZW50XG5cbiAgICAgICAgZGVsZXRlIHByb3BzLm9uQ2xpY2s7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5kaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLWdyb3VwXCIpXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lLFxuICAgICAgICAgIHRpdGxlOiB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnID8gdGl0bGUgOiB1bmRlZmluZWRcbiAgICAgICAgfSwgdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogbGlzdENsYXNzTmFtZVxuICAgICAgICB9LCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVySW5uZXJNZW51SXRlbSkpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVudUl0ZW1Hcm91cDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIE1lbnVJdGVtR3JvdXAuaXNNZW51SXRlbUdyb3VwID0gdHJ1ZTtcbiAgTWVudUl0ZW1Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfTtcbiAgcmV0dXJuIE1lbnVJdGVtR3JvdXA7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtR3JvdXA7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IENTU01vdGlvbiBmcm9tIFwicmMtYW5pbWF0ZS9lcy9DU1NNb3Rpb25cIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IFN1YlBvcHVwTWVudSBmcm9tICcuL1N1YlBvcHVwTWVudSc7XG5pbXBvcnQgeyBwbGFjZW1lbnRzLCBwbGFjZW1lbnRzUnRsIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCB7IG5vb3AsIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5LCBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5LCBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xudmFyIGd1aWQgPSAwO1xudmFyIHBvcHVwUGxhY2VtZW50TWFwID0ge1xuICBob3Jpem9udGFsOiAnYm90dG9tTGVmdCcsXG4gIHZlcnRpY2FsOiAncmlnaHRUb3AnLFxuICAndmVydGljYWwtbGVmdCc6ICdyaWdodFRvcCcsXG4gICd2ZXJ0aWNhbC1yaWdodCc6ICdsZWZ0VG9wJ1xufTtcblxudmFyIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdCA9IGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgZXZlbnRLZXksIGRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICB2YXIgbWVudUlkID0gZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShldmVudEtleSk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHN0b3JlLnNldFN0YXRlKHtcbiAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuZGVmYXVsdEFjdGl2ZUZpcnN0KSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbWVudUlkLCBkZWZhdWx0QWN0aXZlRmlyc3QpKVxuICB9KTtcbn07XG5cbnZhciBTdWJNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIFN1Yk1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3ViTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN1Yk1lbnUpO1xuXG4gICAgZnVuY3Rpb24gU3ViTWVudShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViTWVudSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgICBfdGhpcy5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogbm90ZTpcbiAgICAgICAqICBUaGlzIGxlZ2FjeSBjb2RlIHRoYXQgYG9uS2V5RG93bmAgaXMgY2FsbGVkIGJ5IHBhcmVudCBpbnN0ZWFkIG9mIGRvbSBzZWxmLlxuICAgICAgICogIHdoaWNoIG5lZWQgcmV0dXJuIGNvZGUgdG8gY2hlY2sgaWYgdGhpcyBldmVudCBpcyBoYW5kbGVkXG4gICAgICAgKi9cblxuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICAgICAgdmFyIG1lbnUgPSBfdGhpcy5tZW51SW5zdGFuY2U7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICAgICAgc3RvcmUgPSBfdGhpcyRwcm9wcy5zdG9yZTtcblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUikge1xuICAgICAgICAgIF90aGlzLm9uVGl0bGVDbGljayhlKTtcblxuICAgICAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgX3RoaXMucHJvcHMuZXZlbnRLZXksIHRydWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlck9wZW5DaGFuZ2UodHJ1ZSk7IC8vIG5lZWQgdG8gdXBkYXRlIGN1cnJlbnQgbWVudSdzIGRlZmF1bHRBY3RpdmVGaXJzdCB2YWx1ZVxuXG5cbiAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgX3RoaXMucHJvcHMuZXZlbnRLZXksIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuTEVGVCkge1xuICAgICAgICAgIHZhciBoYW5kbGVkO1xuXG4gICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgaGFuZGxlZCA9IG1lbnUub25LZXlEb3duKGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlck9wZW5DaGFuZ2UoZmFsc2UpO1xuXG4gICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09wZW4gJiYgKGtleUNvZGUgPT09IEtleUNvZGUuVVAgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5ET1dOKSkge1xuICAgICAgICAgIHJldHVybiBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgICAgIF90aGlzLnRyaWdnZXJPcGVuQ2hhbmdlKHZpc2libGUsIHZpc2libGUgPyAnbW91c2VlbnRlcicgOiAnbW91c2VsZWF2ZScpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAga2V5ID0gX3RoaXMkcHJvcHMyLmV2ZW50S2V5LFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMyLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIHN0b3JlID0gX3RoaXMkcHJvcHMyLnN0b3JlO1xuICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIF90aGlzLnByb3BzLmV2ZW50S2V5LCBmYWxzZSk7XG4gICAgICAgIG9uTW91c2VFbnRlcih7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwYXJlbnRNZW51ID0gX3RoaXMkcHJvcHMzLnBhcmVudE1lbnUsXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzMy5ldmVudEtleSxcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzMy5vbk1vdXNlTGVhdmU7XG4gICAgICAgIHBhcmVudE1lbnUuc3ViTWVudUluc3RhbmNlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgICAgIG9uTW91c2VMZWF2ZSh7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVGl0bGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGRvbUV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGtleSA9IF90aGlzJHByb3BzNC5ldmVudEtleSxcbiAgICAgICAgICAgIG9uSXRlbUhvdmVyID0gX3RoaXMkcHJvcHM0Lm9uSXRlbUhvdmVyLFxuICAgICAgICAgICAgb25UaXRsZU1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczQub25UaXRsZU1vdXNlRW50ZXI7XG4gICAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBob3ZlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgb25UaXRsZU1vdXNlRW50ZXIoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBkb21FdmVudFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVGl0bGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcGFyZW50TWVudSA9IF90aGlzJHByb3BzNS5wYXJlbnRNZW51LFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczUuZXZlbnRLZXksXG4gICAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzNS5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICAgIG9uVGl0bGVNb3VzZUxlYXZlID0gX3RoaXMkcHJvcHM1Lm9uVGl0bGVNb3VzZUxlYXZlO1xuICAgICAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIG9uVGl0bGVNb3VzZUxlYXZlKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25UaXRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHM7XG5cbiAgICAgICAgcHJvcHMub25UaXRsZUNsaWNrKHtcbiAgICAgICAgICBrZXk6IHByb3BzLmV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbiA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnRyaWdnZXJPcGVuQ2hhbmdlKCFwcm9wcy5pc09wZW4sICdjbGljaycpO1xuXG4gICAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChwcm9wcy5zdG9yZSwgX3RoaXMucHJvcHMuZXZlbnRLZXksIGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uU3ViTWVudUNsaWNrID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2Ygb3ZlcmZsb3dlZCBzdWJtZW51XG4gICAgICAgIC8vIG9uQ2xpY2sgaXMgbm90IGNvcGllZCBvdmVyXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soX3RoaXMuYWRkS2V5UGF0aChpbmZvKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3QoaW5mbyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRlc2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25EZXNlbGVjdChpbmZvKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFByZWZpeENscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMsIFwiLXN1Ym1lbnVcIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItYWN0aXZlXCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0RGlzYWJsZWRDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5nZXRQcmVmaXhDbHMoKSwgXCItZGlzYWJsZWRcIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmdldFByZWZpeENscygpLCBcIi1zZWxlY3RlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE9wZW5DbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wcm9wcy5yb290UHJlZml4Q2xzLCBcIi1zdWJtZW51LW9wZW5cIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlTWVudUluc3RhbmNlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gY2hpbGRyZW4gbWVudSBpbnN0YW5jZVxuICAgICAgICBfdGhpcy5tZW51SW5zdGFuY2UgPSBjO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuYWRkS2V5UGF0aCA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGluZm8pLCB7fSwge1xuICAgICAgICAgIGtleVBhdGg6IChpbmZvLmtleVBhdGggfHwgW10pLmNvbmNhdChfdGhpcy5wcm9wcy5ldmVudEtleSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuLCB0eXBlKSB7XG4gICAgICAgIHZhciBrZXkgPSBfdGhpcy5wcm9wcy5ldmVudEtleTtcblxuICAgICAgICB2YXIgb3BlbkNoYW5nZSA9IGZ1bmN0aW9uIG9wZW5DaGFuZ2UoKSB7XG4gICAgICAgICAgX3RoaXMub25PcGVuQ2hhbmdlKHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgaXRlbTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICB0cmlnZ2VyOiB0eXBlLFxuICAgICAgICAgICAgb3Blbjogb3BlblxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgbW91c2VlbnRlciBoYXBwZW4gYWZ0ZXIgb3RoZXIgbWVudSBpdGVtJ3MgbW91c2VsZWF2ZVxuICAgICAgICAgIF90aGlzLm1vdXNlZW50ZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcGVuQ2hhbmdlKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3BlbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pc0NoaWxkcmVuU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgZmluZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbG9vcE1lbnVJdGVtUmVjdXJzaXZlbHkoX3RoaXMucHJvcHMuY2hpbGRyZW4sIF90aGlzLnByb3BzLnNlbGVjdGVkS2V5cywgcmV0KTtcbiAgICAgICAgcmV0dXJuIHJldC5maW5kO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub3BlbktleXMuaW5kZXhPZihfdGhpcy5wcm9wcy5ldmVudEtleSkgIT09IC0xO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuYWRqdXN0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIV90aGlzLnN1Yk1lbnVUaXRsZSB8fCAhX3RoaXMubWVudUluc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvcHVwTWVudSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzLm1lbnVJbnN0YW5jZSk7XG5cbiAgICAgICAgaWYgKHBvcHVwTWVudS5vZmZzZXRXaWR0aCA+PSBfdGhpcy5zdWJNZW51VGl0bGUub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICAgIHBvcHVwTWVudS5zdHlsZS5taW5XaWR0aCA9IFwiXCIuY29uY2F0KF90aGlzLnN1Yk1lbnVUaXRsZS5vZmZzZXRXaWR0aCwgXCJweFwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVTdWJNZW51VGl0bGUgPSBmdW5jdGlvbiAoc3ViTWVudVRpdGxlKSB7XG4gICAgICAgIF90aGlzLnN1Yk1lbnVUaXRsZSA9IHN1Yk1lbnVUaXRsZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldEJhc2VQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTIgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMi5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiBwcm9wcy5tb2RlLFxuICAgICAgICAgIHZpc2libGU6IF90aGlzLnByb3BzLmlzT3BlbixcbiAgICAgICAgICBsZXZlbDogcHJvcHMubGV2ZWwgKyAxLFxuICAgICAgICAgIGlubGluZUluZGVudDogcHJvcHMuaW5saW5lSW5kZW50LFxuICAgICAgICAgIGZvY3VzYWJsZTogZmFsc2UsXG4gICAgICAgICAgb25DbGljazogX3RoaXMub25TdWJNZW51Q2xpY2ssXG4gICAgICAgICAgb25TZWxlY3Q6IF90aGlzLm9uU2VsZWN0LFxuICAgICAgICAgIG9uRGVzZWxlY3Q6IF90aGlzLm9uRGVzZWxlY3QsXG4gICAgICAgICAgb25EZXN0cm95OiBfdGhpcy5vbkRlc3Ryb3ksXG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICAgICAgZXZlbnRLZXk6IFwiXCIuY29uY2F0KHByb3BzLmV2ZW50S2V5LCBcIi1tZW51LVwiKSxcbiAgICAgICAgICBvcGVuS2V5czogcHJvcHMub3BlbktleXMsXG4gICAgICAgICAgbW90aW9uOiBwcm9wcy5tb3Rpb24sXG4gICAgICAgICAgb25PcGVuQ2hhbmdlOiBfdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICAgICAgc3ViTWVudU9wZW5EZWxheTogcHJvcHMuc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBwYXJlbnRNZW51OiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBzdWJNZW51Q2xvc2VEZWxheTogcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgICAgZm9yY2VTdWJNZW51UmVuZGVyOiBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXIsXG4gICAgICAgICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IHByb3BzLnN0b3JlLmdldFN0YXRlKCkuZGVmYXVsdEFjdGl2ZUZpcnN0W2dldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkocHJvcHMuZXZlbnRLZXkpXSxcbiAgICAgICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcm9wcy5yb290UHJlZml4Q2xzLFxuICAgICAgICAgIGlkOiBfdGhpcy5pbnRlcm5hbE1lbnVJZCxcbiAgICAgICAgICBtYW51YWxSZWY6IF90aGlzLnNhdmVNZW51SW5zdGFuY2UsXG4gICAgICAgICAgaXRlbUljb246IHByb3BzLml0ZW1JY29uLFxuICAgICAgICAgIGV4cGFuZEljb246IHByb3BzLmV4cGFuZEljb24sXG4gICAgICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb25cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE1vdGlvbiA9IGZ1bmN0aW9uIChtb2RlLCB2aXNpYmxlKSB7XG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBoYXZlUmVuZGVyZWQgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUzLmhhdmVSZW5kZXJlZDtcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBtb3Rpb24gPSBfdGhpcyRwcm9wczYubW90aW9uLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzNi5yb290UHJlZml4Q2xzOyAvLyBkb24ndCBzaG93IHRyYW5zaXRpb24gb24gZmlyc3QgcmVuZGVyaW5nIChubyBhbmltYXRpb24gZm9yIG9wZW5lZCBtZW51KVxuICAgICAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IHZpc2libGUgKG5vdCBzdXJlIHdoeSlcbiAgICAgICAgLy8gc2hvdyBhcHBlYXIgdHJhbnNpdGlvbiBpZiBpdCdzIG5vdCBpbmxpbmUgbW9kZVxuXG4gICAgICAgIHZhciBtZXJnZWRNb3Rpb24gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1vdGlvbiksIHt9LCB7XG4gICAgICAgICAgbGVhdmVkQ2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1oaWRkZW5cIiksXG4gICAgICAgICAgcmVtb3ZlT25MZWF2ZTogZmFsc2UsXG4gICAgICAgICAgbW90aW9uQXBwZWFyOiBoYXZlUmVuZGVyZWQgfHwgIXZpc2libGUgfHwgbW9kZSAhPT0gJ2lubGluZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlZE1vdGlvbjtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzdG9yZSA9IHByb3BzLnN0b3JlLFxuICAgICAgICAgIGV2ZW50S2V5ID0gcHJvcHMuZXZlbnRLZXk7XG5cbiAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdCA9IF9zdG9yZSRnZXRTdGF0ZS5kZWZhdWx0QWN0aXZlRmlyc3Q7XG5cbiAgICAgIF90aGlzLmlzUm9vdE1lbnUgPSBmYWxzZTtcbiAgICAgIHZhciB2YWx1ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoZGVmYXVsdEFjdGl2ZUZpcnN0KSB7XG4gICAgICAgIHZhbHVlID0gZGVmYXVsdEFjdGl2ZUZpcnN0W2V2ZW50S2V5XTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBldmVudEtleSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdWJNZW51LCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHM3Lm1vZGUsXG4gICAgICAgICAgICBwYXJlbnRNZW51ID0gX3RoaXMkcHJvcHM3LnBhcmVudE1lbnUsXG4gICAgICAgICAgICBtYW51YWxSZWYgPSBfdGhpcyRwcm9wczcubWFudWFsUmVmOyAvLyBpbnZva2UgY3VzdG9taXplZCByZWYgdG8gZXhwb3NlIGNvbXBvbmVudCB0byBtaXhpblxuXG4gICAgICAgIGlmIChtYW51YWxSZWYpIHtcbiAgICAgICAgICBtYW51YWxSZWYodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZSAhPT0gJ2hvcml6b250YWwnIHx8ICFwYXJlbnRNZW51LmlzUm9vdE1lbnUgfHwgIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5taW5XaWR0aFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmFkanVzdFdpZHRoKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uRGVzdHJveSA9IF90aGlzJHByb3BzOC5vbkRlc3Ryb3ksXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzOC5ldmVudEtleTtcblxuICAgICAgICBpZiAob25EZXN0cm95KSB7XG4gICAgICAgICAgb25EZXN0cm95KGV2ZW50S2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuXG4gICAgICAgIGlmICh0aGlzLm1pbldpZHRoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1pbldpZHRoVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cblxuICAgICAgICBpZiAodGhpcy5tb3VzZWVudGVyVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlZW50ZXJUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJDaGlsZHJlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBiYXNlUHJvcHMgPSB0aGlzLmdldEJhc2VQcm9wcygpOyAvLyBbTGVnYWN5XSBnZXRNb3Rpb24gbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGBoYXZlUmVuZGVyZWRgXG5cbiAgICAgICAgdmFyIG1lcmdlZE1vdGlvbiA9IHRoaXMuZ2V0TW90aW9uKGJhc2VQcm9wcy5tb2RlLCBiYXNlUHJvcHMudmlzaWJsZSk7XG4gICAgICAgIHRoaXMuaGF2ZVJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXZlT3BlbmVkID0gdGhpcy5oYXZlT3BlbmVkIHx8IGJhc2VQcm9wcy52aXNpYmxlIHx8IGJhc2VQcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXI7IC8vIG5ldmVyIHJlbmRlcmVkIG5vdCBwbGFubmluZyB0bywgZG9uJ3QgcmVuZGVyXG5cbiAgICAgICAgaWYgKCF0aGlzLmhhdmVPcGVuZWQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBiYXNlUHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHZpc2libGU6IGJhc2VQcm9wcy52aXNpYmxlXG4gICAgICAgIH0sIG1lcmdlZE1vdGlvbiksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gICAgICAgICAgdmFyIG1lcmdlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQoYmFzZVByb3BzLnByZWZpeENscywgXCItc3ViXCIpLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoYmFzZVByb3BzLnByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSk7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViUG9wdXBNZW51LCBPYmplY3QuYXNzaWduKHt9LCBiYXNlUHJvcHMsIHtcbiAgICAgICAgICAgIGlkOiBfdGhpczMuaW50ZXJuYWxNZW51SWQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdmFyIGlzT3BlbiA9IHByb3BzLmlzT3BlbjtcbiAgICAgICAgdmFyIHByZWZpeENscyA9IHRoaXMuZ2V0UHJlZml4Q2xzKCk7XG4gICAgICAgIHZhciBpc0lubGluZU1vZGUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJztcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocHJvcHMubW9kZSksIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJvcHMuY2xhc3NOYW1lLCAhIXByb3BzLmNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHRoaXMuZ2V0T3BlbkNsYXNzTmFtZSgpLCBpc09wZW4pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCB0aGlzLmdldEFjdGl2ZUNsYXNzTmFtZSgpLCBwcm9wcy5hY3RpdmUgfHwgaXNPcGVuICYmICFpc0lubGluZU1vZGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCB0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCksIHByb3BzLmRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSgpLCB0aGlzLmlzQ2hpbGRyZW5TZWxlY3RlZCgpKSwgX2NsYXNzTmFtZXMyKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsTWVudUlkKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmV2ZW50S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsTWVudUlkID0gXCJcIi5jb25jYXQocHJvcHMuZXZlbnRLZXksIFwiJE1lbnVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGd1aWQgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxNZW51SWQgPSBcIiRfXyRcIi5jb25jYXQoZ3VpZCwgXCIkTWVudVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbW91c2VFdmVudHMgPSB7fTtcbiAgICAgICAgdmFyIHRpdGxlQ2xpY2tFdmVudHMgPSB7fTtcbiAgICAgICAgdmFyIHRpdGxlTW91c2VFdmVudHMgPSB7fTtcblxuICAgICAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgbW91c2VFdmVudHMgPSB7XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgICAgIH07IC8vIG9ubHkgd29ya3MgaW4gdGl0bGUsIG5vdCBvdXRlciBsaVxuXG4gICAgICAgICAgdGl0bGVDbGlja0V2ZW50cyA9IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25UaXRsZUNsaWNrXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aXRsZU1vdXNlRXZlbnRzID0ge1xuICAgICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uVGl0bGVNb3VzZUVudGVyLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uVGl0bGVNb3VzZUxlYXZlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChpc0lubGluZU1vZGUpIHtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFyaWFPd25zID0ge307IC8vIG9ubHkgc2V0IGFyaWEtb3ducyB3aGVuIG1lbnUgaXMgb3BlblxuICAgICAgICAvLyBvdGhlcndpc2UgaXQgd291bGQgYmUgYW4gaW52YWxpZCBhcmlhLW93bnMgdmFsdWVcbiAgICAgICAgLy8gc2luY2UgY29ycmVzcG9uZGluZyBub2RlIGNhbm5vdCBiZSBmb3VuZFxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICAgIGFyaWFPd25zID0ge1xuICAgICAgICAgICAgJ2FyaWEtb3ducyc6IHRoaXMuaW50ZXJuYWxNZW51SWRcbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIGV4cGFuZCBjdXN0b20gaWNvbiBzaG91bGQgTk9UIGJlIGRpc3BsYXllZCBpbiBtZW51IHdpdGggaG9yaXpvbnRhbCBtb2RlLlxuXG5cbiAgICAgICAgdmFyIGljb24gPSBudWxsO1xuXG4gICAgICAgIGlmIChwcm9wcy5tb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBpY29uID0gdGhpcy5wcm9wcy5leHBhbmRJY29uOyAvLyBSZWFjdE5vZGVcblxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5leHBhbmRJY29uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmV4cGFuZEljb24sIF9vYmplY3RTcHJlYWQoe30sIHRoaXMucHJvcHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGl0bGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHJlZjogdGhpcy5zYXZlU3ViTWVudVRpdGxlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGl0bGVcIiksXG4gICAgICAgICAgcm9sZTogXCJidXR0b25cIlxuICAgICAgICB9LCB0aXRsZU1vdXNlRXZlbnRzLCB0aXRsZUNsaWNrRXZlbnRzLCB7XG4gICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IGlzT3BlblxuICAgICAgICB9LCBhcmlhT3ducywge1xuICAgICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgICB0aXRsZTogdHlwZW9mIHByb3BzLnRpdGxlID09PSAnc3RyaW5nJyA/IHByb3BzLnRpdGxlIDogdW5kZWZpbmVkXG4gICAgICAgIH0pLCBwcm9wcy50aXRsZSwgaWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFycm93XCIpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIHZhciBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLnBhcmVudE1lbnUuaXNSb290TWVudSA/IHByb3BzLnBhcmVudE1lbnUucHJvcHMuZ2V0UG9wdXBDb250YWluZXIgOiBmdW5jdGlvbiAodHJpZ2dlck5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJpZ2dlck5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcG9wdXBQbGFjZW1lbnRNYXBbcHJvcHMubW9kZV07XG4gICAgICAgIHZhciBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBPZmZzZXQgPyB7XG4gICAgICAgICAgb2Zmc2V0OiBwcm9wcy5wb3B1cE9mZnNldFxuICAgICAgICB9IDoge307XG4gICAgICAgIHZhciBwb3B1cENsYXNzTmFtZSA9IHByb3BzLm1vZGUgPT09ICdpbmxpbmUnID8gJycgOiBwcm9wcy5wb3B1cENsYXNzTmFtZTtcbiAgICAgICAgcG9wdXBDbGFzc05hbWUgKz0gZGlyZWN0aW9uID09PSAncnRsJyA/IFwiIFwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSA6ICcnO1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uID0gcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICAgICAgICBzdWJNZW51T3BlbkRlbGF5ID0gcHJvcHMuc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICAgIGZvcmNlU3ViTWVudVJlbmRlciA9IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgICAgICAgIHN1Yk1lbnVDbG9zZURlbGF5ID0gcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzO1xuICAgICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9KTsgLy8gU2V0IG9uQ2xpY2sgdG8gbnVsbCwgdG8gaWdub3JlIHByb3BhZ2F0ZWQgb25DbGljayBldmVudFxuXG4gICAgICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuICAgICAgICB2YXIgcGxhY2VtZW50ID0gZGlyZWN0aW9uID09PSAncnRsJyA/IE9iamVjdC5hc3NpZ24oe30sIHBsYWNlbWVudHNSdGwsIGJ1aWx0aW5QbGFjZW1lbnRzKSA6IE9iamVjdC5hc3NpZ24oe30sIHBsYWNlbWVudHMsIGJ1aWx0aW5QbGFjZW1lbnRzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmRpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgbW91c2VFdmVudHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICByb2xlOiBcIm1lbnVpdGVtXCJcbiAgICAgICAgfSksIGlzSW5saW5lTW9kZSAmJiB0aXRsZSwgaXNJbmxpbmVNb2RlICYmIGNoaWxkcmVuLCAhaXNJbmxpbmVNb2RlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcG9wdXBcIiksIHBvcHVwQ2xhc3NOYW1lKSxcbiAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudCxcbiAgICAgICAgICBwb3B1cFBsYWNlbWVudDogcG9wdXBQbGFjZW1lbnQsXG4gICAgICAgICAgcG9wdXBWaXNpYmxlOiBpc09wZW4sXG4gICAgICAgICAgcG9wdXBBbGlnbjogcG9wdXBBbGlnbixcbiAgICAgICAgICBwb3B1cDogY2hpbGRyZW4sXG4gICAgICAgICAgYWN0aW9uOiBkaXNhYmxlZCA/IFtdIDogW3RyaWdnZXJTdWJNZW51QWN0aW9uXSxcbiAgICAgICAgICBtb3VzZUVudGVyRGVsYXk6IHN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICAgICAgbW91c2VMZWF2ZURlbGF5OiBzdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogdGhpcy5vblBvcHVwVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICBmb3JjZVJlbmRlcjogZm9yY2VTdWJNZW51UmVuZGVyXG4gICAgICAgIH0sIHRpdGxlKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN1Yk1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBTdWJNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbk1vdXNlRW50ZXI6IG5vb3AsXG4gICAgb25Nb3VzZUxlYXZlOiBub29wLFxuICAgIG9uVGl0bGVNb3VzZUVudGVyOiBub29wLFxuICAgIG9uVGl0bGVNb3VzZUxlYXZlOiBub29wLFxuICAgIG9uVGl0bGVDbGljazogbm9vcCxcbiAgICBtYW51YWxSZWY6IG5vb3AsXG4gICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICB0aXRsZTogJydcbiAgfTtcbiAgcmV0dXJuIFN1Yk1lbnU7XG59KCk7XG5cbmV4cG9ydCB7IFN1Yk1lbnUgfTtcbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmMiwgX3JlZjMpIHtcbiAgdmFyIG9wZW5LZXlzID0gX3JlZjIub3BlbktleXMsXG4gICAgICBhY3RpdmVLZXkgPSBfcmVmMi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmMi5zZWxlY3RlZEtleXM7XG4gIHZhciBldmVudEtleSA9IF9yZWYzLmV2ZW50S2V5LFxuICAgICAgc3ViTWVudUtleSA9IF9yZWYzLnN1Yk1lbnVLZXk7XG4gIHJldHVybiB7XG4gICAgaXNPcGVuOiBvcGVuS2V5cy5pbmRleE9mKGV2ZW50S2V5KSA+IC0xLFxuICAgIGFjdGl2ZTogYWN0aXZlS2V5W3N1Yk1lbnVLZXldID09PSBldmVudEtleSxcbiAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICB9O1xufSkoU3ViTWVudSk7XG5jb25uZWN0ZWQuaXNTdWJNZW51ID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tIFwicmMtdXRpbC9lcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb25cIjtcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgsIGxvb3BNZW51SXRlbSwgbm9vcCwgbWVudUFsbFByb3BzLCBpc01vYmlsZURldmljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgRE9NV3JhcCBmcm9tICcuL0RPTVdyYXAnO1xuXG5mdW5jdGlvbiBhbGxEaXNhYmxlZChhcnIpIHtcbiAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICEhYy5wcm9wcy5kaXNhYmxlZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUtleShzdG9yZSwgbWVudUlkLCBhY3RpdmVLZXkpIHtcbiAgdmFyIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgc3RvcmUuc2V0U3RhdGUoe1xuICAgIGFjdGl2ZUtleTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5hY3RpdmVLZXkpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBtZW51SWQsIGFjdGl2ZUtleSkpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudEtleShwcm9wcykge1xuICAvLyB3aGVuIGV2ZW50S2V5IG5vdCBhdmFpbGFibGUgLGl0J3MgbWVudSBhbmQgcmV0dXJuIG1lbnUgaWQgJzAtbWVudS0nXG4gIHJldHVybiBwcm9wcy5ldmVudEtleSB8fCAnMC1tZW51LSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVLZXkocHJvcHMsIG9yaWdpbmFsQWN0aXZlS2V5KSB7XG4gIHZhciBhY3RpdmVLZXkgPSBvcmlnaW5hbEFjdGl2ZUtleTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuXG4gIGlmIChhY3RpdmVLZXkpIHtcbiAgICB2YXIgZm91bmQ7XG4gICAgbG9vcE1lbnVJdGVtKGNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgaWYgKGMgJiYgYy5wcm9wcyAmJiAhYy5wcm9wcy5kaXNhYmxlZCAmJiBhY3RpdmVLZXkgPT09IGdldEtleUZyb21DaGlsZHJlbkluZGV4KGMsIGV2ZW50S2V5LCBpKSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiBhY3RpdmVLZXk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlS2V5ID0gbnVsbDtcblxuICBpZiAocHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0KSB7XG4gICAgbG9vcE1lbnVJdGVtKGNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgaWYgKCFhY3RpdmVLZXkgJiYgYyAmJiAhYy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBhY3RpdmVLZXkgPSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjLCBldmVudEtleSwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgfVxuXG4gIHJldHVybiBhY3RpdmVLZXk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZVJlZihjKSB7XG4gIGlmIChjKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbnN0YW5jZUFycmF5LmluZGV4T2YoYyk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAvLyB1cGRhdGUgY29tcG9uZW50IGlmIGl0J3MgYWxyZWFkeSBpbnNpZGUgaW5zdGFuY2VBcnJheVxuICAgICAgdGhpcy5pbnN0YW5jZUFycmF5W2luZGV4XSA9IGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZCBjb21wb25lbnQgaWYgaXQncyBub3QgaW4gaW5zdGFuY2VBcnJheSB5ZXQ7XG4gICAgICB0aGlzLmluc3RhbmNlQXJyYXkucHVzaChjKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFN1YlBvcHVwTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBTdWJQb3B1cE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3ViUG9wdXBNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3ViUG9wdXBNZW51KTtcblxuICAgIGZ1bmN0aW9uIFN1YlBvcHVwTWVudShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViUG9wdXBNZW51KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAvKipcbiAgICAgICAqIGFsbCBrZXlib2FyZCBldmVudHMgY2FsbGJhY2tzIHJ1biBmcm9tIGhlcmUgYXQgZmlyc3RcbiAgICAgICAqXG4gICAgICAgKiBub3RlOlxuICAgICAgICogIFRoaXMgbGVnYWN5IGNvZGUgdGhhdCBgb25LZXlEb3duYCBpcyBjYWxsZWQgYnkgcGFyZW50IGluc3RlYWQgb2YgZG9tIHNlbGYuXG4gICAgICAgKiAgd2hpY2ggbmVlZCByZXR1cm4gY29kZSB0byBjaGVjayBpZiB0aGlzIGV2ZW50IGlzIGhhbmRsZWRcbiAgICAgICAqL1xuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgIHZhciBoYW5kbGVkO1xuXG4gICAgICAgIF90aGlzLmdldEZsYXRJbnN0YW5jZUFycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgaWYgKG9iaiAmJiBvYmoucHJvcHMuYWN0aXZlICYmIG9iai5vbktleURvd24pIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBvYmoub25LZXlEb3duKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3RpdmVJdGVtID0gbnVsbDtcblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgICBhY3RpdmVJdGVtID0gX3RoaXMuc3RlcChrZXlDb2RlID09PSBLZXlDb2RlLlVQID8gLTEgOiAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHVwZGF0ZUFjdGl2ZUtleShfdGhpcy5wcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkoX3RoaXMucHJvcHMpLCBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5KTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGFjdGl2ZUl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uSXRlbUhvdmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGtleSA9IGUua2V5LFxuICAgICAgICAgICAgaG92ZXIgPSBlLmhvdmVyO1xuICAgICAgICB1cGRhdGVBY3RpdmVLZXkoX3RoaXMucHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KF90aGlzLnByb3BzKSwgaG92ZXIgPyBrZXkgOiBudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRlc2VsZWN0KHNlbGVjdEluZm8pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RJbmZvKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25PcGVuQ2hhbmdlKGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25EZXN0cm95ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRlc3Ryb3koa2V5KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldEZsYXRJbnN0YW5jZUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaW5zdGFuY2VBcnJheTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnN0ZXAgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLmdldEZsYXRJbnN0YW5jZUFycmF5KCk7XG5cbiAgICAgICAgdmFyIGFjdGl2ZUtleSA9IF90aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5W2dldEV2ZW50S2V5KF90aGlzLnByb3BzKV07XG5cbiAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBpZiAoIWxlbikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdCgpLnJldmVyc2UoKTtcbiAgICAgICAgfSAvLyBmaW5kIGN1cnJlbnQgYWN0aXZlSW5kZXhcblxuXG4gICAgICAgIHZhciBhY3RpdmVJbmRleCA9IC0xO1xuICAgICAgICBjaGlsZHJlbi5ldmVyeShmdW5jdGlvbiAoYywgY2kpIHtcbiAgICAgICAgICBpZiAoYyAmJiBjLnByb3BzLmV2ZW50S2V5ID09PSBhY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gY2k7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghX3RoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0ICYmIGFjdGl2ZUluZGV4ICE9PSAtMSAmJiBhbGxEaXNhYmxlZChjaGlsZHJlbi5zbGljZShhY3RpdmVJbmRleCwgbGVuIC0gMSkpKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFydCA9IChhY3RpdmVJbmRleCArIDEpICUgbGVuO1xuICAgICAgICB2YXIgaSA9IHN0YXJ0O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICAgIGlmICghY2hpbGQgfHwgY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGkgPSAoaSArIDEpICUgbGVuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChpICE9PSBzdGFydCk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW5kZXJDb21tb25NZW51SXRlbSA9IGZ1bmN0aW9uIChjaGlsZCwgaSwgZXh0cmFQcm9wcykge1xuICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzO1xuXG4gICAgICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgcHJvcHMuZXZlbnRLZXksIGkpO1xuICAgICAgICB2YXIgY2hpbGRQcm9wcyA9IGNoaWxkLnByb3BzOyAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xMTUxNyNpc3N1ZWNvbW1lbnQtNDc3NDAzMDU1XG5cbiAgICAgICAgaWYgKCFjaGlsZFByb3BzIHx8IHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGtleSA9PT0gc3RhdGUuYWN0aXZlS2V5O1xuXG4gICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBtb2RlOiBjaGlsZFByb3BzLm1vZGUgfHwgcHJvcHMubW9kZSxcbiAgICAgICAgICBsZXZlbDogcHJvcHMubGV2ZWwsXG4gICAgICAgICAgaW5saW5lSW5kZW50OiBwcm9wcy5pbmxpbmVJbmRlbnQsXG4gICAgICAgICAgcmVuZGVyTWVudUl0ZW06IF90aGlzLnJlbmRlck1lbnVJdGVtLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHM6IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBwYXJlbnRNZW51OiBwcm9wcy5wYXJlbnRNZW51LFxuICAgICAgICAgIC8vIGN1c3RvbWl6ZWQgcmVmIGZ1bmN0aW9uLCBuZWVkIHRvIGJlIGludm9rZWQgbWFudWFsbHkgaW4gY2hpbGQncyBjb21wb25lbnREaWRNb3VudFxuICAgICAgICAgIG1hbnVhbFJlZjogY2hpbGRQcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihjaGlsZC5yZWYsIHNhdmVSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpLFxuICAgICAgICAgIGV2ZW50S2V5OiBrZXksXG4gICAgICAgICAgYWN0aXZlOiAhY2hpbGRQcm9wcy5kaXNhYmxlZCAmJiBpc0FjdGl2ZSxcbiAgICAgICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAoY2hpbGRQcm9wcy5vbkNsaWNrIHx8IG5vb3ApKGUpO1xuXG4gICAgICAgICAgICBfdGhpcy5vbkNsaWNrKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25JdGVtSG92ZXI6IF90aGlzLm9uSXRlbUhvdmVyLFxuICAgICAgICAgIG1vdGlvbjogcHJvcHMubW90aW9uLFxuICAgICAgICAgIHN1Yk1lbnVPcGVuRGVsYXk6IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICAgICAgc3ViTWVudUNsb3NlRGVsYXk6IHByb3BzLnN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIGZvcmNlU3ViTWVudVJlbmRlcjogcHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyLFxuICAgICAgICAgIG9uT3BlbkNoYW5nZTogX3RoaXMub25PcGVuQ2hhbmdlLFxuICAgICAgICAgIG9uRGVzZWxlY3Q6IF90aGlzLm9uRGVzZWxlY3QsXG4gICAgICAgICAgb25TZWxlY3Q6IF90aGlzLm9uU2VsZWN0LFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgICBpdGVtSWNvbjogY2hpbGRQcm9wcy5pdGVtSWNvbiB8fCBfdGhpcy5wcm9wcy5pdGVtSWNvbixcbiAgICAgICAgICBleHBhbmRJY29uOiBjaGlsZFByb3BzLmV4cGFuZEljb24gfHwgX3RoaXMucHJvcHMuZXhwYW5kSWNvblxuICAgICAgICB9LCBleHRyYVByb3BzKSwge30sIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvblxuICAgICAgICB9KTsgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xMzk0M1xuXG5cbiAgICAgICAgaWYgKHByb3BzLm1vZGUgPT09ICdpbmxpbmUnIHx8IGlzTW9iaWxlRGV2aWNlKCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uID0gJ2NsaWNrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVuZGVyTWVudUl0ZW0gPSBmdW5jdGlvbiAoYywgaSwgc3ViTWVudUtleSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHZhciBleHRyYVByb3BzID0ge1xuICAgICAgICAgIG9wZW5LZXlzOiBzdGF0ZS5vcGVuS2V5cyxcbiAgICAgICAgICBzZWxlY3RlZEtleXM6IHN0YXRlLnNlbGVjdGVkS2V5cyxcbiAgICAgICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogX3RoaXMucHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICAgICAgc3ViTWVudUtleTogc3ViTWVudUtleVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXMucmVuZGVyQ29tbW9uTWVudUl0ZW0oYywgaSwgZXh0cmFQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBwcm9wcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZUtleTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZUtleSksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BzLmV2ZW50S2V5LCBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSkpKVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN1YlBvcHVwTWVudSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBpbnZva2UgY3VzdG9taXplZCByZWYgdG8gZXhwb3NlIGNvbXBvbmVudCB0byBtaXhpblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYW51YWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZpc2libGUgfHwgbmV4dFByb3BzLnZpc2libGUgfHwgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBvcmlnaW5hbEFjdGl2ZUtleSA9ICdhY3RpdmVLZXknIGluIHByb3BzID8gcHJvcHMuYWN0aXZlS2V5IDogcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXlbZ2V0RXZlbnRLZXkocHJvcHMpXTtcbiAgICAgICAgdmFyIGFjdGl2ZUtleSA9IGdldEFjdGl2ZUtleShwcm9wcywgb3JpZ2luYWxBY3RpdmVLZXkpO1xuXG4gICAgICAgIGlmIChhY3RpdmVLZXkgIT09IG9yaWdpbmFsQWN0aXZlS2V5KSB7XG4gICAgICAgICAgdXBkYXRlQWN0aXZlS2V5KHByb3BzLnN0b3JlLCBnZXRFdmVudEtleShwcm9wcyksIGFjdGl2ZUtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2FjdGl2ZUtleScgaW4gcHJldlByb3BzKSB7XG4gICAgICAgICAgLy8gSWYgcHJldiBhY3RpdmVLZXkgaXMgbm90IHNhbWUgYXMgY3VycmVudCBhY3RpdmVLZXksXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHNldCBpdC5cbiAgICAgICAgICB2YXIgcHJldkFjdGl2ZUtleSA9IGdldEFjdGl2ZUtleShwcmV2UHJvcHMsIHByZXZQcm9wcy5hY3RpdmVLZXkpO1xuXG4gICAgICAgICAgaWYgKGFjdGl2ZUtleSAhPT0gcHJldkFjdGl2ZUtleSkge1xuICAgICAgICAgICAgdXBkYXRlQWN0aXZlS2V5KHByb3BzLnN0b3JlLCBnZXRFdmVudEtleShwcm9wcyksIGFjdGl2ZUtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VBcnJheSA9IFtdO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcm9wcy5wcmVmaXhDbHMsIHByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHByb3BzLm1vZGUpKTtcbiAgICAgICAgdmFyIGRvbVByb3BzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIC8vIHJvbGUgY291bGQgYmUgJ3NlbGVjdCcgYW5kIGJ5IGRlZmF1bHQgc2V0IHRvIG1lbnVcbiAgICAgICAgICByb2xlOiBwcm9wcy5yb2xlIHx8ICdtZW51J1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgICAgIGRvbVByb3BzLmlkID0gcHJvcHMuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuZm9jdXNhYmxlKSB7XG4gICAgICAgICAgZG9tUHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgIGRvbVByb3BzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIGxldmVsID0gcHJvcHMubGV2ZWwsXG4gICAgICAgICAgICBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgICAgICAgIG92ZXJmbG93ZWRJbmRpY2F0b3IgPSBwcm9wcy5vdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgICAgICAgbWVudUFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgfSk7IC8vIE90aGVyd2lzZSwgdGhlIHByb3BhZ2F0ZWQgY2xpY2sgZXZlbnQgd2lsbCB0cmlnZ2VyIGFub3RoZXIgb25DbGlja1xuXG4gICAgICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChET01XcmFwLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgdGFnOiBcInVsXCIsXG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICAgIG92ZXJmbG93ZWRJbmRpY2F0b3I6IG92ZXJmbG93ZWRJbmRpY2F0b3JcbiAgICAgICAgfSwgZG9tUHJvcHMpLCBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJNZW51SXRlbShjLCBpLCBldmVudEtleSB8fCAnMC1tZW51LScpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN1YlBvcHVwTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFN1YlBvcHVwTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAncmMtbWVudScsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtb2RlOiAndmVydGljYWwnLFxuICAgIGxldmVsOiAxLFxuICAgIGlubGluZUluZGVudDogMjQsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb2N1c2FibGU6IHRydWUsXG4gICAgc3R5bGU6IHt9LFxuICAgIG1hbnVhbFJlZjogbm9vcFxuICB9O1xuICByZXR1cm4gU3ViUG9wdXBNZW51O1xufSgpO1xuXG5leHBvcnQgeyBTdWJQb3B1cE1lbnUgfTtcbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KCkoU3ViUG9wdXBNZW51KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZDsiLCJpbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFN1Yk1lbnUgZnJvbSAnLi9TdWJNZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcbmltcG9ydCBNZW51SXRlbUdyb3VwIGZyb20gJy4vTWVudUl0ZW1Hcm91cCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuZXhwb3J0IHsgU3ViTWVudSwgTWVudUl0ZW0gYXMgSXRlbSwgTWVudUl0ZW0sIE1lbnVJdGVtR3JvdXAsIE1lbnVJdGVtR3JvdXAgYXMgSXRlbUdyb3VwLCBEaXZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBNZW51OyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC03XVxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA3XVxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF1cbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdXG4gIH1cbn07XG5leHBvcnQgdmFyIHBsYWNlbWVudHNSdGwgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC03XVxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA3XVxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdXG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSAnLi91dGlscy9pc01vYmlsZSc7XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoY2hpbGQsIG1lbnVFdmVudEtleSwgaW5kZXgpIHtcbiAgdmFyIHByZWZpeCA9IG1lbnVFdmVudEtleSB8fCAnJztcbiAgcmV0dXJuIGNoaWxkLmtleSB8fCBcIlwiLmNvbmNhdChwcmVmaXgsIFwiaXRlbV9cIikuY29uY2F0KGluZGV4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5KGV2ZW50S2V5KSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChldmVudEtleSwgXCItbWVudS1cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9vcE1lbnVJdGVtKGNoaWxkcmVuLCBjYikge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICBpbmRleCArPSAxO1xuXG4gICAgaWYgKGMgJiYgYy50eXBlICYmIGMudHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goYy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMyKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGNiKGMyLCBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoYywgaW5kZXgpO1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9vcE1lbnVJdGVtUmVjdXJzaXZlbHkoY2hpbGRyZW4sIGtleXMsIHJldCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZHJlbiB8fCByZXQuZmluZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciBjb25zdHJ1Y3QgPSBjLnR5cGU7XG5cbiAgICAgIGlmICghY29uc3RydWN0IHx8ICEoY29uc3RydWN0LmlzU3ViTWVudSB8fCBjb25zdHJ1Y3QuaXNNZW51SXRlbSB8fCBjb25zdHJ1Y3QuaXNNZW51SXRlbUdyb3VwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlzLmluZGV4T2YoYy5rZXkpICE9PSAtMSkge1xuICAgICAgICByZXQuZmluZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgbG9vcE1lbnVJdGVtUmVjdXJzaXZlbHkoYy5wcm9wcy5jaGlsZHJlbiwga2V5cywgcmV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IHZhciBtZW51QWxsUHJvcHMgPSBbJ2RlZmF1bHRTZWxlY3RlZEtleXMnLCAnc2VsZWN0ZWRLZXlzJywgJ2RlZmF1bHRPcGVuS2V5cycsICdvcGVuS2V5cycsICdtb2RlJywgJ2dldFBvcHVwQ29udGFpbmVyJywgJ29uU2VsZWN0JywgJ29uRGVzZWxlY3QnLCAnb25EZXN0cm95JywgJ29wZW5UcmFuc2l0aW9uTmFtZScsICdvcGVuQW5pbWF0aW9uJywgJ3N1Yk1lbnVPcGVuRGVsYXknLCAnc3ViTWVudUNsb3NlRGVsYXknLCAnZm9yY2VTdWJNZW51UmVuZGVyJywgJ3RyaWdnZXJTdWJNZW51QWN0aW9uJywgJ2xldmVsJywgJ3NlbGVjdGFibGUnLCAnbXVsdGlwbGUnLCAnb25PcGVuQ2hhbmdlJywgJ3Zpc2libGUnLCAnZm9jdXNhYmxlJywgJ2RlZmF1bHRBY3RpdmVGaXJzdCcsICdwcmVmaXhDbHMnLCAnaW5saW5lSW5kZW50JywgJ3BhcmVudE1lbnUnLCAndGl0bGUnLCAncm9vdFByZWZpeENscycsICdldmVudEtleScsICdhY3RpdmUnLCAnb25JdGVtSG92ZXInLCAnb25UaXRsZU1vdXNlRW50ZXInLCAnb25UaXRsZU1vdXNlTGVhdmUnLCAnb25UaXRsZUNsaWNrJywgJ3BvcHVwQWxpZ24nLCAncG9wdXBPZmZzZXQnLCAnaXNPcGVuJywgJ3JlbmRlck1lbnVJdGVtJywgJ21hbnVhbFJlZicsICdzdWJNZW51S2V5JywgJ2Rpc2FibGVkJywgJ2luZGV4JywgJ2lzU2VsZWN0ZWQnLCAnc3RvcmUnLCAnYWN0aXZlS2V5JywgJ2J1aWx0aW5QbGFjZW1lbnRzJywgJ292ZXJmbG93ZWRJbmRpY2F0b3InLCAnbW90aW9uJywgLy8gdGhlIGZvbGxvd2luZyBrZXlzIGZvdW5kIG5lZWQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRlc3QgcmVncmVzc2lvblxuJ2F0dHJpYnV0ZScsICd2YWx1ZScsICdwb3B1cENsYXNzTmFtZScsICdpbmxpbmVDb2xsYXBzZWQnLCAnbWVudScsICd0aGVtZScsICdpdGVtSWNvbicsICdleHBhbmRJY29uJ107IC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQwMDdcbi8vIHJlZjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzYwODg5XG4vLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcmV0dXJuIHRoZSBmdWxsIHByZWNpc2lvbiB2YWx1ZSwgd2hpY2ggaXNcbi8vIG5vdCB0aGUgc2FtZSBiZWhhdmlvciBhcyBvbiBjaHJvbWUuIFNldCB0aGUgcHJlY2lzaW9uIHRvIDYgdG9cbi8vIHVuaWZ5IHRoZWlyIGJlaGF2aW9yXG5cbmV4cG9ydCB2YXIgZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aChlbGVtKSB7XG4gIHZhciB3aWR0aCA9IGVsZW0gJiYgdHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nICYmIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cbiAgaWYgKHdpZHRoKSB7XG4gICAgd2lkdGggPSArd2lkdGgudG9GaXhlZCg2KTtcbiAgfVxuXG4gIHJldHVybiB3aWR0aCB8fCAwO1xufTtcbmV4cG9ydCB2YXIgc2V0U3R5bGUgPSBmdW5jdGlvbiBzZXRTdHlsZShlbGVtLCBzdHlsZVByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAoZWxlbSAmJiBfdHlwZW9mKGVsZW0uc3R5bGUpID09PSAnb2JqZWN0Jykge1xuICAgIGVsZW0uc3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcbmV4cG9ydCB2YXIgaXNNb2JpbGVEZXZpY2UgPSBmdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgcmV0dXJuIGlzTW9iaWxlLmFueTtcbn07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuLy8gTUlUIExpY2Vuc2UgZnJvbSBodHRwczovL2dpdGh1Yi5jb20va2FpbWFsbGVhL2lzTW9iaWxlXG52YXIgYXBwbGVQaG9uZSA9IC9pUGhvbmUvaTtcbnZhciBhcHBsZUlwb2QgPSAvaVBvZC9pO1xudmFyIGFwcGxlVGFibGV0ID0gL2lQYWQvaTtcbnZhciBhbmRyb2lkUGhvbmUgPSAvXFxiQW5kcm9pZCg/Oi4rKU1vYmlsZVxcYi9pOyAvLyBNYXRjaCAnQW5kcm9pZCcgQU5EICdNb2JpbGUnXG5cbnZhciBhbmRyb2lkVGFibGV0ID0gL0FuZHJvaWQvaTtcbnZhciBhbWF6b25QaG9uZSA9IC9cXGJBbmRyb2lkKD86LispU0Q0OTMwVVJcXGIvaTtcbnZhciBhbWF6b25UYWJsZXQgPSAvXFxiQW5kcm9pZCg/Oi4rKSg/OktGW0EtWl17Miw0fSlcXGIvaTtcbnZhciB3aW5kb3dzUGhvbmUgPSAvV2luZG93cyBQaG9uZS9pO1xudmFyIHdpbmRvd3NUYWJsZXQgPSAvXFxiV2luZG93cyg/Oi4rKUFSTVxcYi9pOyAvLyBNYXRjaCAnV2luZG93cycgQU5EICdBUk0nXG5cbnZhciBvdGhlckJsYWNrYmVycnkgPSAvQmxhY2tCZXJyeS9pO1xudmFyIG90aGVyQmxhY2tiZXJyeTEwID0gL0JCMTAvaTtcbnZhciBvdGhlck9wZXJhID0gL09wZXJhIE1pbmkvaTtcbnZhciBvdGhlckNocm9tZSA9IC9cXGIoQ3JpT1N8Q2hyb21lKSg/Oi4rKU1vYmlsZS9pO1xudmFyIG90aGVyRmlyZWZveCA9IC9Nb2JpbGUoPzouKylGaXJlZm94XFxiL2k7IC8vIE1hdGNoICdNb2JpbGUnIEFORCAnRmlyZWZveCdcblxuZnVuY3Rpb24gbWF0Y2gocmVnZXgsIHVzZXJBZ2VudCkge1xuICByZXR1cm4gcmVnZXgudGVzdCh1c2VyQWdlbnQpO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZSh1c2VyQWdlbnQpIHtcbiAgdmFyIHVhID0gdXNlckFnZW50IHx8ICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiAnJyk7IC8vIEZhY2Vib29rIG1vYmlsZSBhcHAncyBpbnRlZ3JhdGVkIGJyb3dzZXIgYWRkcyBhIGJ1bmNoIG9mIHN0cmluZ3MgdGhhdFxuICAvLyBtYXRjaCBldmVyeXRoaW5nLiBTdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuXG4gIHZhciB0bXAgPSB1YS5zcGxpdCgnW0ZCQU4nKTtcblxuICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgX3RtcCA9IHRtcDtcblxuICAgIHZhciBfdG1wMiA9IF9zbGljZWRUb0FycmF5KF90bXAsIDEpO1xuXG4gICAgdWEgPSBfdG1wMlswXTtcbiAgfSAvLyBUd2l0dGVyIG1vYmlsZSBhcHAncyBpbnRlZ3JhdGVkIGJyb3dzZXIgb24gaVBhZCBhZGRzIGEgXCJUd2l0dGVyIGZvclxuICAvLyBpUGhvbmVcIiBzdHJpbmcuIFNhbWUgcHJvYmFibHkgaGFwcGVucyBvbiBvdGhlciB0YWJsZXQgcGxhdGZvcm1zLlxuICAvLyBUaGlzIHdpbGwgY29uZnVzZSBkZXRlY3Rpb24gc28gc3RyaXAgaXQgb3V0IGlmIGl0IGV4aXN0cy5cblxuXG4gIHRtcCA9IHVhLnNwbGl0KCdUd2l0dGVyJyk7XG5cbiAgaWYgKHR5cGVvZiB0bXBbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIF90bXAzID0gdG1wO1xuXG4gICAgdmFyIF90bXA0ID0gX3NsaWNlZFRvQXJyYXkoX3RtcDMsIDEpO1xuXG4gICAgdWEgPSBfdG1wNFswXTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgYXBwbGU6IHtcbiAgICAgIHBob25lOiBtYXRjaChhcHBsZVBob25lLCB1YSkgJiYgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpLFxuICAgICAgaXBvZDogbWF0Y2goYXBwbGVJcG9kLCB1YSksXG4gICAgICB0YWJsZXQ6ICFtYXRjaChhcHBsZVBob25lLCB1YSkgJiYgbWF0Y2goYXBwbGVUYWJsZXQsIHVhKSAmJiAhbWF0Y2god2luZG93c1Bob25lLCB1YSksXG4gICAgICBkZXZpY2U6IChtYXRjaChhcHBsZVBob25lLCB1YSkgfHwgbWF0Y2goYXBwbGVJcG9kLCB1YSkgfHwgbWF0Y2goYXBwbGVUYWJsZXQsIHVhKSkgJiYgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpXG4gICAgfSxcbiAgICBhbWF6b246IHtcbiAgICAgIHBob25lOiBtYXRjaChhbWF6b25QaG9uZSwgdWEpLFxuICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uUGhvbmUsIHVhKSAmJiBtYXRjaChhbWF6b25UYWJsZXQsIHVhKSxcbiAgICAgIGRldmljZTogbWF0Y2goYW1hem9uUGhvbmUsIHVhKSB8fCBtYXRjaChhbWF6b25UYWJsZXQsIHVhKVxuICAgIH0sXG4gICAgYW5kcm9pZDoge1xuICAgICAgcGhvbmU6ICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJiBtYXRjaChhbWF6b25QaG9uZSwgdWEpIHx8ICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJiBtYXRjaChhbmRyb2lkUGhvbmUsIHVhKSxcbiAgICAgIHRhYmxldDogIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpICYmICFtYXRjaChhbWF6b25QaG9uZSwgdWEpICYmICFtYXRjaChhbmRyb2lkUGhvbmUsIHVhKSAmJiAobWF0Y2goYW1hem9uVGFibGV0LCB1YSkgfHwgbWF0Y2goYW5kcm9pZFRhYmxldCwgdWEpKSxcbiAgICAgIGRldmljZTogIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpICYmIChtYXRjaChhbWF6b25QaG9uZSwgdWEpIHx8IG1hdGNoKGFtYXpvblRhYmxldCwgdWEpIHx8IG1hdGNoKGFuZHJvaWRQaG9uZSwgdWEpIHx8IG1hdGNoKGFuZHJvaWRUYWJsZXQsIHVhKSkgfHwgbWF0Y2goL1xcYm9raHR0cFxcYi9pLCB1YSlcbiAgICB9LFxuICAgIHdpbmRvd3M6IHtcbiAgICAgIHBob25lOiBtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSxcbiAgICAgIHRhYmxldDogbWF0Y2god2luZG93c1RhYmxldCwgdWEpLFxuICAgICAgZGV2aWNlOiBtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSB8fCBtYXRjaCh3aW5kb3dzVGFibGV0LCB1YSlcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBibGFja2JlcnJ5OiBtYXRjaChvdGhlckJsYWNrYmVycnksIHVhKSxcbiAgICAgIGJsYWNrYmVycnkxMDogbWF0Y2gob3RoZXJCbGFja2JlcnJ5MTAsIHVhKSxcbiAgICAgIG9wZXJhOiBtYXRjaChvdGhlck9wZXJhLCB1YSksXG4gICAgICBmaXJlZm94OiBtYXRjaChvdGhlckZpcmVmb3gsIHVhKSxcbiAgICAgIGNocm9tZTogbWF0Y2gob3RoZXJDaHJvbWUsIHVhKSxcbiAgICAgIGRldmljZTogbWF0Y2gob3RoZXJCbGFja2JlcnJ5LCB1YSkgfHwgbWF0Y2gob3RoZXJCbGFja2JlcnJ5MTAsIHVhKSB8fCBtYXRjaChvdGhlck9wZXJhLCB1YSkgfHwgbWF0Y2gob3RoZXJGaXJlZm94LCB1YSkgfHwgbWF0Y2gob3RoZXJDaHJvbWUsIHVhKVxuICAgIH0sXG4gICAgLy8gQWRkaXRpb25hbFxuICAgIGFueTogbnVsbCxcbiAgICBwaG9uZTogbnVsbCxcbiAgICB0YWJsZXQ6IG51bGxcbiAgfTtcbiAgcmVzdWx0LmFueSA9IHJlc3VsdC5hcHBsZS5kZXZpY2UgfHwgcmVzdWx0LmFuZHJvaWQuZGV2aWNlIHx8IHJlc3VsdC53aW5kb3dzLmRldmljZSB8fCByZXN1bHQub3RoZXIuZGV2aWNlOyAvLyBleGNsdWRlcyAnb3RoZXInIGRldmljZXMgYW5kIGlwb2RzLCB0YXJnZXRpbmcgdG91Y2hzY3JlZW4gcGhvbmVzXG5cbiAgcmVzdWx0LnBob25lID0gcmVzdWx0LmFwcGxlLnBob25lIHx8IHJlc3VsdC5hbmRyb2lkLnBob25lIHx8IHJlc3VsdC53aW5kb3dzLnBob25lO1xuICByZXN1bHQudGFibGV0ID0gcmVzdWx0LmFwcGxlLnRhYmxldCB8fCByZXN1bHQuYW5kcm9pZC50YWJsZXQgfHwgcmVzdWx0LndpbmRvd3MudGFibGV0O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgZGVmYXVsdFJlc3VsdCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXNNb2JpbGUoKSksIHt9LCB7XG4gIGlzTW9iaWxlOiBpc01vYmlsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRSZXN1bHQ7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdGlvbihfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIG1vdGlvbiA9IF9yZWYubW90aW9uLFxuICAgICAgb3BlbkFuaW1hdGlvbiA9IF9yZWYub3BlbkFuaW1hdGlvbixcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZSA9IF9yZWYub3BlblRyYW5zaXRpb25OYW1lO1xuXG4gIGlmIChtb3Rpb24pIHtcbiAgICByZXR1cm4gbW90aW9uO1xuICB9XG5cbiAgaWYgKF90eXBlb2Yob3BlbkFuaW1hdGlvbikgPT09ICdvYmplY3QnICYmIG9wZW5BbmltYXRpb24pIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnT2JqZWN0IHR5cGUgb2YgYG9wZW5BbmltYXRpb25gIGlzIHJlbW92ZWQuIFBsZWFzZSB1c2UgYG1vdGlvbmAgaW5zdGVhZC4nKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3BlbkFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuLVwiKS5jb25jYXQob3BlbkFuaW1hdGlvbilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wZW5UcmFuc2l0aW9uTmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiBvcGVuVHJhbnNpdGlvbk5hbWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIENvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XG4gIHZhciBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLFxuICAgIGlkOiBpZCxcbiAgICByb2xlOiBcInRvb2x0aXBcIixcbiAgICBzdHlsZTogb3ZlcmxheUlubmVyU3R5bGVcbiAgfSwgdHlwZW9mIG92ZXJsYXkgPT09ICdmdW5jdGlvbicgPyBvdmVybGF5KCkgOiBvdmVybGF5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMsIHJlZikge1xuICB2YXIgb3ZlcmxheUNsYXNzTmFtZSA9IHByb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBfcHJvcHMkdHJpZ2dlciA9IHByb3BzLnRyaWdnZXIsXG4gICAgICB0cmlnZ2VyID0gX3Byb3BzJHRyaWdnZXIgPT09IHZvaWQgMCA/IFsnaG92ZXInXSA6IF9wcm9wcyR0cmlnZ2VyLFxuICAgICAgX3Byb3BzJG1vdXNlRW50ZXJEZWxhID0gcHJvcHMubW91c2VFbnRlckRlbGF5LFxuICAgICAgbW91c2VFbnRlckRlbGF5ID0gX3Byb3BzJG1vdXNlRW50ZXJEZWxhID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJG1vdXNlRW50ZXJEZWxhLFxuICAgICAgX3Byb3BzJG1vdXNlTGVhdmVEZWxhID0gcHJvcHMubW91c2VMZWF2ZURlbGF5LFxuICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3Byb3BzJG1vdXNlTGVhdmVEZWxhID09PSB2b2lkIDAgPyAwLjEgOiBfcHJvcHMkbW91c2VMZWF2ZURlbGEsXG4gICAgICBvdmVybGF5U3R5bGUgPSBwcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgICBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXRvb2x0aXAnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvblZpc2libGVDaGFuZ2UgPSBwcm9wcy5vblZpc2libGVDaGFuZ2UsXG4gICAgICBhZnRlclZpc2libGVDaGFuZ2UgPSBwcm9wcy5hZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgX3Byb3BzJHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9wcm9wcyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/ICdyaWdodCcgOiBfcHJvcHMkcGxhY2VtZW50LFxuICAgICAgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkYWxpZ24sXG4gICAgICBfcHJvcHMkZGVzdHJveVRvb2x0aXAgPSBwcm9wcy5kZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgIGRlc3Ryb3lUb29sdGlwT25IaWRlID0gX3Byb3BzJGRlc3Ryb3lUb29sdGlwID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZXN0cm95VG9vbHRpcCxcbiAgICAgIGRlZmF1bHRWaXNpYmxlID0gcHJvcHMuZGVmYXVsdFZpc2libGUsXG4gICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm92ZXJsYXlDbGFzc05hbWVcIiwgXCJ0cmlnZ2VyXCIsIFwibW91c2VFbnRlckRlbGF5XCIsIFwibW91c2VMZWF2ZURlbGF5XCIsIFwib3ZlcmxheVN0eWxlXCIsIFwicHJlZml4Q2xzXCIsIFwiY2hpbGRyZW5cIiwgXCJvblZpc2libGVDaGFuZ2VcIiwgXCJhZnRlclZpc2libGVDaGFuZ2VcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiLCBcImFuaW1hdGlvblwiLCBcInBsYWNlbWVudFwiLCBcImFsaWduXCIsIFwiZGVzdHJveVRvb2x0aXBPbkhpZGVcIiwgXCJkZWZhdWx0VmlzaWJsZVwiLCBcImdldFRvb2x0aXBDb250YWluZXJcIiwgXCJvdmVybGF5SW5uZXJTdHlsZVwiXSk7XG5cbiAgdmFyIGRvbVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9tUmVmLmN1cnJlbnQ7XG4gIH0pO1xuXG4gIHZhciBleHRyYVByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKTtcblxuICBpZiAoJ3Zpc2libGUnIGluIHByb3BzKSB7XG4gICAgZXh0cmFQcm9wcy5wb3B1cFZpc2libGUgPSBwcm9wcy52aXNpYmxlO1xuICB9XG5cbiAgdmFyIGdldFBvcHVwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFBvcHVwRWxlbWVudCgpIHtcbiAgICB2YXIgX3Byb3BzJGFycm93Q29udGVudCA9IHByb3BzLmFycm93Q29udGVudCxcbiAgICAgICAgYXJyb3dDb250ZW50ID0gX3Byb3BzJGFycm93Q29udGVudCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wcm9wcyRhcnJvd0NvbnRlbnQsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgICBpZCA9IHByb3BzLmlkO1xuICAgIHJldHVybiBbUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIiksXG4gICAgICBrZXk6IFwiYXJyb3dcIlxuICAgIH0sIGFycm93Q29udGVudCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge1xuICAgICAga2V5OiBcImNvbnRlbnRcIixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaWQ6IGlkLFxuICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlOiBvdmVybGF5SW5uZXJTdHlsZVxuICAgIH0pXTtcbiAgfTtcblxuICB2YXIgZGVzdHJveVRvb2x0aXAgPSBmYWxzZTtcbiAgdmFyIGF1dG9EZXN0cm95ID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBkZXN0cm95VG9vbHRpcE9uSGlkZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgZGVzdHJveVRvb2x0aXAgPSBkZXN0cm95VG9vbHRpcE9uSGlkZTtcbiAgfSBlbHNlIGlmIChkZXN0cm95VG9vbHRpcE9uSGlkZSAmJiBfdHlwZW9mKGRlc3Ryb3lUb29sdGlwT25IaWRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIga2VlcFBhcmVudCA9IGRlc3Ryb3lUb29sdGlwT25IaWRlLmtlZXBQYXJlbnQ7XG4gICAgZGVzdHJveVRvb2x0aXAgPSBrZWVwUGFyZW50ID09PSB0cnVlO1xuICAgIGF1dG9EZXN0cm95ID0ga2VlcFBhcmVudCA9PT0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyLCBPYmplY3QuYXNzaWduKHtcbiAgICBwb3B1cENsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBwb3B1cDogZ2V0UG9wdXBFbGVtZW50LFxuICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICBidWlsdGluUGxhY2VtZW50czogcGxhY2VtZW50cyxcbiAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgIHJlZjogZG9tUmVmLFxuICAgIHBvcHVwQWxpZ246IGFsaWduLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRUb29sdGlwQ29udGFpbmVyLFxuICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IGFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICBwb3B1cFRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBwb3B1cEFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGRlZmF1bHRWaXNpYmxlLFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZGVzdHJveVRvb2x0aXAsXG4gICAgYXV0b0Rlc3Ryb3k6IGF1dG9EZXN0cm95LFxuICAgIG1vdXNlTGVhdmVEZWxheTogbW91c2VMZWF2ZURlbGF5LFxuICAgIHBvcHVwU3R5bGU6IG92ZXJsYXlTdHlsZSxcbiAgICBtb3VzZUVudGVyRGVsYXk6IG1vdXNlRW50ZXJEZWxheVxuICB9LCBleHRyYVByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihUb29sdGlwKTsiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnO1xuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDsiLCJ2YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLnBsYWNlbWVudHMgPSB2b2lkIDA7XG52YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcbnZhciBwbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuZXhwb3J0cy5wbGFjZW1lbnRzID0gcGxhY2VtZW50cztcbnZhciBfZGVmYXVsdCA9IHBsYWNlbWVudHM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuaW1wb3J0IEFsaWduIGZyb20gJ3JjLWFsaWduJztcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJhd0NTU01vdGlvbiBmcm9tIFwicmMtYW5pbWF0ZS9lcy9DU1NNb3Rpb25cIjtcbmltcG9ydCBQb3B1cElubmVyIGZyb20gJy4vUG9wdXBJbm5lcic7XG5pbXBvcnQgeyBnZXRNb3Rpb24gfSBmcm9tICcuL3V0aWxzL2xlZ2FjeVV0aWwnO1xudmFyIENTU01vdGlvbiA9IFJhd0NTU01vdGlvbjtcblxuZnVuY3Rpb24gc3VwcG9ydE1vdGlvbihtb3Rpb24pIHtcbiAgcmV0dXJuIG1vdGlvbiAmJiBtb3Rpb24ubW90aW9uTmFtZTtcbn1cblxudmFyIFBvcHVwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3B1cCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQb3B1cCk7XG5cbiAgZnVuY3Rpb24gUG9wdXAoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0YXJnZXRXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgdGFyZ2V0SGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICBzdGF0dXM6IG51bGwsXG4gICAgICBwcmV2VmlzaWJsZTogbnVsbCxcbiAgICAgIGFsaWduQ2xhc3NOYW1lOiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5wb3B1cFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLmFsaWduUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMubmV4dEZyYW1lU3RhdGUgPSBudWxsO1xuICAgIF90aGlzLm5leHRGcmFtZUlkID0gbnVsbDtcblxuICAgIF90aGlzLm9uQWxpZ24gPSBmdW5jdGlvbiAocG9wdXBEb21Ob2RlLCBhbGlnbikge1xuICAgICAgdmFyIHN0YXR1cyA9IF90aGlzLnN0YXRlLnN0YXR1cztcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbiA9IF90aGlzJHByb3BzLmdldENsYXNzTmFtZUZyb21BbGlnbixcbiAgICAgICAgICBvbkFsaWduID0gX3RoaXMkcHJvcHMub25BbGlnbjtcbiAgICAgIHZhciBhbGlnbkNsYXNzTmFtZSA9IGdldENsYXNzTmFtZUZyb21BbGlnbihhbGlnbik7XG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICdhbGlnbicpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFsaWduQ2xhc3NOYW1lOiBhbGlnbkNsYXNzTmFtZSxcbiAgICAgICAgICBzdGF0dXM6ICdhbGlnbmVkJ1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuYWxpZ25SZWYuY3VycmVudC5mb3JjZUFsaWduKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdhbGlnbmVkJykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWxpZ25DbGFzc05hbWU6IGFsaWduQ2xhc3NOYW1lLFxuICAgICAgICAgIHN0YXR1czogJ2FmdGVyQWxpZ24nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9uQWxpZ24ocG9wdXBEb21Ob2RlLCBhbGlnbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWxpZ25DbGFzc05hbWU6IGFsaWduQ2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2aXNpYmxlID0gX3RoaXMucHJvcHMudmlzaWJsZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IHZpc2libGUgPyAnQWZ0ZXJNb3Rpb24nIDogJ3N0YWJsZSdcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBfdGhpcy5jYW5jZWxGcmFtZVN0YXRlKCk7XG5cbiAgICAgIF90aGlzLm5leHRGcmFtZVN0YXRlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5uZXh0RnJhbWVTdGF0ZSksIHN0YXRlKTtcbiAgICAgIF90aGlzLm5leHRGcmFtZUlkID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Ym1pdFN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMubmV4dEZyYW1lU3RhdGUpO1xuXG4gICAgICAgIF90aGlzLm5leHRGcmFtZVN0YXRlID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdWJtaXRTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TW90aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGdldE1vdGlvbihfdGhpcy5wcm9wcykpO1xuICAgIH07IC8vIGB0YXJnZXRgIG9uIGByYy1hbGlnbmAgY2FuIGFjY2VwdCBhcyBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgYmluZCBlbGVtZW50IG9yIGEgcG9pbnQuXG4gICAgLy8gcmVmOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy1hbGlnblxuXG5cbiAgICBfdGhpcy5nZXRBbGlnblRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBwb2ludCA9IF90aGlzJHByb3BzMi5wb2ludCxcbiAgICAgICAgICBnZXRSb290RG9tTm9kZSA9IF90aGlzJHByb3BzMi5nZXRSb290RG9tTm9kZTtcblxuICAgICAgaWYgKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFJvb3REb21Ob2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5jYW5jZWxGcmFtZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmFmLmNhbmNlbChfdGhpcy5uZXh0RnJhbWVJZCk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclBvcHVwRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgICB0YXJnZXRIZWlnaHQgPSBfdGhpcyRzdGF0ZS50YXJnZXRIZWlnaHQsXG4gICAgICAgICAgdGFyZ2V0V2lkdGggPSBfdGhpcyRzdGF0ZS50YXJnZXRXaWR0aCxcbiAgICAgICAgICBhbGlnbkNsYXNzTmFtZSA9IF90aGlzJHN0YXRlLmFsaWduQ2xhc3NOYW1lO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMy5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMy5zdHlsZSxcbiAgICAgICAgICBzdHJldGNoID0gX3RoaXMkcHJvcHMzLnN0cmV0Y2gsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMy52aXNpYmxlLFxuICAgICAgICAgIGFsaWduID0gX3RoaXMkcHJvcHMzLmFsaWduLFxuICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IF90aGlzJHByb3BzMy5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wczMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTW91c2VEb3duID0gX3RoaXMkcHJvcHMzLm9uTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hTdGFydCA9IF90aGlzJHByb3BzMy5vblRvdWNoU3RhcnQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczMuY2hpbGRyZW47XG4gICAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgYWxpZ25DbGFzc05hbWUpO1xuICAgICAgdmFyIGhpZGRlbkNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGlkZGVuXCIpOyAvLyA9PT09PT09PT09PT09PT09PT0gU3R5bGUgPT09PT09PT09PT09PT09PT09XG5cbiAgICAgIHZhciBzaXplU3R5bGUgPSB7fTtcblxuICAgICAgaWYgKHN0cmV0Y2gpIHtcbiAgICAgICAgLy8gU3RyZXRjaCB3aXRoIHRhcmdldFxuICAgICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCdoZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzaXplU3R5bGUuaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmV0Y2guaW5kZXhPZignbWluSGVpZ2h0JykgIT09IC0xKSB7XG4gICAgICAgICAgc2l6ZVN0eWxlLm1pbkhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ3dpZHRoJykgIT09IC0xKSB7XG4gICAgICAgICAgc2l6ZVN0eWxlLndpZHRoID0gdGFyZ2V0V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5XaWR0aCcpICE9PSAtMSkge1xuICAgICAgICAgIHNpemVTdHlsZS5taW5XaWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXJnZWRTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNpemVTdHlsZSksIF90aGlzLmdldFpJbmRleFN0eWxlKCkpLCBzdHlsZSksIHt9LCB7XG4gICAgICAgIG9wYWNpdHk6IHN0YXR1cyA9PT0gJ3N0YWJsZScgfHwgIXZpc2libGUgPyB1bmRlZmluZWQgOiAwXG4gICAgICB9KTsgLy8gPT09PT09PT09PT09PT09PT0gTW90aW9ucyA9PT09PT09PT09PT09PT09PVxuXG5cbiAgICAgIHZhciBtZXJnZWRNb3Rpb24gPSBfdGhpcy5nZXRNb3Rpb24oKTtcblxuICAgICAgdmFyIG1lcmdlZE1vdGlvblZpc2libGUgPSB2aXNpYmxlO1xuXG4gICAgICBpZiAodmlzaWJsZSAmJiBzdGF0dXMgIT09ICdiZWZvcmVNb3Rpb24nICYmIHN0YXR1cyAhPT0gJ21vdGlvbicgJiYgc3RhdHVzICE9PSAnc3RhYmxlJykge1xuICAgICAgICBtZXJnZWRNb3Rpb24ubW90aW9uQXBwZWFyID0gZmFsc2U7XG4gICAgICAgIG1lcmdlZE1vdGlvbi5tb3Rpb25FbnRlciA9IGZhbHNlO1xuICAgICAgICBtZXJnZWRNb3Rpb24ubW90aW9uTGVhdmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FmdGVyQWxpZ24nIHx8IHN0YXR1cyA9PT0gJ2JlZm9yZU1vdGlvbicpIHtcbiAgICAgICAgbWVyZ2VkTW90aW9uVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSAvLyA9PT09PT09PT09PT09PT09PT0gQWxpZ24gPT09PT09PT09PT09PT09PT09XG5cblxuICAgICAgdmFyIG1lcmdlZEFsaWduRGlzYWJsZWQgPSAhdmlzaWJsZSB8fCBzdGF0dXMgIT09ICdhbGlnbicgJiYgc3RhdHVzICE9PSAnYWxpZ25lZCcgJiYgc3RhdHVzICE9PSAnc3RhYmxlJzsgLy8gPT09PT09PT09PT09PT09PT09IFBvcHVwID09PT09PT09PT09PT09PT09PVxuXG4gICAgICB2YXIgbWVyZ2VkUG9wdXBWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ3N0YWJsZScpIHtcbiAgICAgICAgbWVyZ2VkUG9wdXBWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIH0gLy8gT25seSByZW1vdmUgcG9wdXAgc2luY2UgbWFzayBtYXkgc3RpbGwgbmVlZCBhbmltYXRpb25cblxuXG4gICAgICBpZiAoZGVzdHJveVBvcHVwT25IaWRlICYmICFtZXJnZWRQb3B1cFZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHZpc2libGU6IG1lcmdlZE1vdGlvblZpc2libGVcbiAgICAgIH0sIG1lcmdlZE1vdGlvbiwge1xuICAgICAgICByZW1vdmVPbkxlYXZlOiBmYWxzZSxcbiAgICAgICAgb25FbnRlckVuZDogX3RoaXMub25Nb3Rpb25FbmQsXG4gICAgICAgIG9uTGVhdmVFbmQ6IF90aGlzLm9uTW90aW9uRW5kXG4gICAgICB9KSwgZnVuY3Rpb24gKF9yZWYsIG1vdGlvblJlZikge1xuICAgICAgICB2YXIgbW90aW9uU3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgICAgbW90aW9uQ2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFsaWduLCB7XG4gICAgICAgICAgdGFyZ2V0OiBfdGhpcy5nZXRBbGlnblRhcmdldCgpLFxuICAgICAgICAgIGtleTogXCJwb3B1cFwiLFxuICAgICAgICAgIHJlZjogX3RoaXMuYWxpZ25SZWYsXG4gICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlZDogbWVyZ2VkQWxpZ25EaXNhYmxlZCxcbiAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgb25BbGlnbjogX3RoaXMub25BbGlnblxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwSW5uZXIsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICB2aXNpYmxlOiBtZXJnZWRQb3B1cFZpc2libGUsXG4gICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBoaWRkZW5DbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKG1lcmdlZENsYXNzTmFtZSwgbW90aW9uQ2xhc3NOYW1lKSxcbiAgICAgICAgICByZWY6IGNvbXBvc2VSZWYobW90aW9uUmVmLCBfdGhpcy5wb3B1cFJlZiksXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogb25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZFN0eWxlKSwgbW90aW9uU3R5bGUpXG4gICAgICAgIH0sIGNoaWxkcmVuKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTWFza0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbWFzayA9IF90aGlzJHByb3BzNC5tYXNrLFxuICAgICAgICAgIG1hc2tNb3Rpb24gPSBfdGhpcyRwcm9wczQubWFza01vdGlvbixcbiAgICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczQubWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1hc2tBbmltYXRpb24gPSBfdGhpcyRwcm9wczQubWFza0FuaW1hdGlvbixcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczQucHJlZml4Q2xzLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczQudmlzaWJsZTtcblxuICAgICAgaWYgKCFtYXNrKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW90aW9uID0ge307XG5cbiAgICAgIGlmIChtYXNrTW90aW9uICYmIG1hc2tNb3Rpb24ubW90aW9uTmFtZSkge1xuICAgICAgICBtb3Rpb24gPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBtb3Rpb25BcHBlYXI6IHRydWVcbiAgICAgICAgfSwgZ2V0TW90aW9uKHtcbiAgICAgICAgICBtb3Rpb246IG1hc2tNb3Rpb24sXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBhbmltYXRpb246IG1hc2tBbmltYXRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIE9iamVjdC5hc3NpZ24oe30sIG1vdGlvbiwge1xuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICByZW1vdmVPbkxlYXZlOiB0cnVlXG4gICAgICB9KSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBzdHlsZTogX3RoaXMuZ2V0WkluZGV4U3R5bGUoKSxcbiAgICAgICAgICBrZXk6IFwibWFza1wiLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1hc2tcIiksIGNsYXNzTmFtZSlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcHVwLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBnZXRSb290RG9tTm9kZSA9IF90aGlzJHByb3BzNS5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHM1LnZpc2libGUsXG4gICAgICAgICAgc3RyZXRjaCA9IF90aGlzJHByb3BzNS5zdHJldGNoOyAvLyBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgc3RhdGUgdXBkYXRlLCBjYW5jZWwgaXQsIGEgbmV3IG9uZSB3aWxsIGJlIHNldCBpZiBuZWNlc3NhcnlcblxuICAgICAgdGhpcy5jYW5jZWxGcmFtZVN0YXRlKCk7XG5cbiAgICAgIGlmICh2aXNpYmxlICYmIHN0YXR1cyAhPT0gJ3N0YWJsZScpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdHJldGNoID8gJ21lYXN1cmUnIDogJ2FsaWduJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdhZnRlckFsaWduJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN1cHBvcnRNb3Rpb24odGhpcy5nZXRNb3Rpb24oKSkgPyAnYmVmb3JlTW90aW9uJyA6ICdzdGFibGUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ0FmdGVyTW90aW9uJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdGFibGUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgc3RhdHVzXG4gICAgICAgICAgICAgIHZhciBxdWV1ZSA9IFsnbWVhc3VyZScsICdhbGlnbicsIG51bGwsICdiZWZvcmVNb3Rpb24nLCAnbW90aW9uJ107XG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IHF1ZXVlLmluZGV4T2Yoc3RhdHVzKTtcbiAgICAgICAgICAgICAgdmFyIG5leHRTdGF0dXMgPSBxdWV1ZVtpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgbmV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSh7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IG5leHRTdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIE1lYXN1cmUgc3RyZXRjaCBzaXplXG5cblxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ21lYXN1cmUnKSB7XG4gICAgICAgIHZhciAkZWxlID0gZ2V0Um9vdERvbU5vZGUoKTtcblxuICAgICAgICBpZiAoJGVsZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGVPbk5leHRGcmFtZSh7XG4gICAgICAgICAgICB0YXJnZXRIZWlnaHQ6ICRlbGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgdGFyZ2V0V2lkdGg6ICRlbGUub2Zmc2V0V2lkdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2FuY2VsRnJhbWVTdGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRaSW5kZXhTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRaSW5kZXhTdHlsZSgpIHtcbiAgICAgIHZhciB6SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHpJbmRleDogekluZGV4XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgdGhpcy5yZW5kZXJNYXNrRWxlbWVudCgpLCB0aGlzLnJlbmRlclBvcHVwRWxlbWVudCgpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYzLCBfcmVmNCkge1xuICAgICAgdmFyIHZpc2libGUgPSBfcmVmMy52aXNpYmxlLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbXCJ2aXNpYmxlXCJdKTtcblxuICAgICAgdmFyIHByZXZWaXNpYmxlID0gX3JlZjQucHJldlZpc2libGUsXG4gICAgICAgICAgc3RhdHVzID0gX3JlZjQuc3RhdHVzO1xuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBwcmV2VmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgIH07XG4gICAgICB2YXIgbWVyZ2VkTW90aW9uID0gZ2V0TW90aW9uKHByb3BzKTtcblxuICAgICAgaWYgKHByZXZWaXNpYmxlID09PSBudWxsICYmIHZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEluaXQgcmVuZGVyIHNob3VsZCBhbHdheXMgYmUgc3RhYmxlXG4gICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9ICdzdGFibGUnO1xuICAgICAgfSBlbHNlIGlmICh2aXNpYmxlICE9PSBwcmV2VmlzaWJsZSkge1xuICAgICAgICBpZiAodmlzaWJsZSB8fCBzdXBwb3J0TW90aW9uKG1lcmdlZE1vdGlvbikgJiYgWydtb3Rpb24nLCAnQWZ0ZXJNb3Rpb24nLCAnc3RhYmxlJ10uaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gJ3N0YWJsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIG5ld1N0YXRlLmFsaWduQ2xhc3NOYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcHVwO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbi8qIGVzbGludC1lbmFibGUgKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gUG9wdXBJbm5lcihwcm9wcywgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bixcbiAgICAgIG9uVG91Y2hTdGFydCA9IHByb3BzLm9uVG91Y2hTdGFydDtcbiAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuO1xuXG4gIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxKSB7XG4gICAgY2hpbGROb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCAhdmlzaWJsZSAmJiBcIlwiLmNvbmNhdChwcm9wcy5oaWRkZW5DbGFzc05hbWUpKSxcbiAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkTm9kZSk7XG59O1xuXG52YXIgUmVmUG9wdXBJbm5lciA9IFJlYWN0LmZvcndhcmRSZWYoUG9wdXBJbm5lcik7XG5SZWZQb3B1cElubmVyLmRpc3BsYXlOYW1lID0gJ1BvcHVwSW5uZXInO1xuZXhwb3J0IGRlZmF1bHQgUmVmUG9wdXBJbm5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIFRyaWdnZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXJDb250ZXh0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NvbnRhaW5zXCI7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgeyBjb21wb3NlUmVmLCBzdXBwb3J0UmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IFBvcnRhbCBmcm9tIFwicmMtdXRpbC9lcy9Qb3J0YWxcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlscy9hbGlnblV0aWwnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IFRyaWdnZXJDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNvbnRleHRNZW51J107XG4vKipcbiAqIEludGVybmFsIHVzYWdlLiBEbyBub3QgdXNlIGluIHlvdXIgY29kZSBzaW5jZSB0aGlzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUcmlnZ2VyKFBvcnRhbENvbXBvbmVudCkge1xuICB2YXIgVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUcmlnZ2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVHJpZ2dlcik7XG5cbiAgICBmdW5jdGlvbiBUcmlnZ2VyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmlnZ2VyKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICBfdGhpcy5wb3B1cFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgX3RoaXMudHJpZ2dlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbW91c2VFbnRlckRlbGF5ID0gX3RoaXMucHJvcHMubW91c2VFbnRlckRlbGF5O1xuXG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VFbnRlcicsIGUpO1xuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIG1vdXNlRW50ZXJEZWxheSwgbW91c2VFbnRlckRlbGF5ID8gbnVsbCA6IGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlTW92ZScsIGUpO1xuXG4gICAgICAgIF90aGlzLnNldFBvaW50KGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9wdWxsLzEzXG4gICAgICAgIC8vIHJlYWN0IGJ1Zz9cbiAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldCAmJiAhZS5yZWxhdGVkVGFyZ2V0LnNldFRpbWVvdXQgJiYgX3RoaXMucG9wdXBSZWYuY3VycmVudCAmJiBfdGhpcy5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQgJiYgY29udGFpbnMoX3RoaXMucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50LCBlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Gb2N1cycsIGUpOyAvLyBpbmNhc2UgZm9jdXNpbiBhbmQgZm9jdXNvdXRcblxuXG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0ZvY3VzVG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5mb2N1c1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgX3RoaXMucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZURvd24nLCBlKTtcblxuICAgICAgICBfdGhpcy5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG5cbiAgICAgICAgX3RoaXMucHJlVG91Y2hUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQmx1cicsIGUpO1xuXG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5ibHVyRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQ29udGV4dE1lbnUnLCBlKTtcblxuICAgICAgICBfdGhpcy5zZXRQb3B1cFZpc2libGUodHJ1ZSwgZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7IC8vIGZvY3VzIHdpbGwgdHJpZ2dlciBjbGlja1xuXG5cbiAgICAgICAgaWYgKF90aGlzLmZvY3VzVGltZSkge1xuICAgICAgICAgIHZhciBwcmVUaW1lO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByZUNsaWNrVGltZSAmJiBfdGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBNYXRoLm1pbihfdGhpcy5wcmVDbGlja1RpbWUsIF90aGlzLnByZVRvdWNoVGltZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBfdGhpcy5wcmVDbGlja1RpbWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBfdGhpcy5wcmVUb3VjaFRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE1hdGguYWJzKHByZVRpbWUgLSBfdGhpcy5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c1RpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucHJlQ2xpY2tUaW1lID0gMDtcbiAgICAgICAgX3RoaXMucHJlVG91Y2hUaW1lID0gMDsgLy8gT25seSBwcmV2ZW50IGRlZmF1bHQgd2hlbiBhbGwgdGhlIGFjdGlvbiBpcyBjbGljay5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTcwNDNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTcyOTFcblxuICAgICAgICBpZiAoX3RoaXMuaXNDbGlja1RvU2hvdygpICYmIChfdGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgX3RoaXMuaXNCbHVyVG9IaWRlKCkpICYmIGV2ZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0VmlzaWJsZSA9ICFfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzQ2xpY2tUb0hpZGUoKSAmJiAhbmV4dFZpc2libGUgfHwgbmV4dFZpc2libGUgJiYgX3RoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuc2V0UG9wdXBWaXNpYmxlKCFfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaGFzUG9wdXBNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgICAgIF90aGlzLm1vdXNlRG93blRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuaGFzUG9wdXBNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkY29udGV4dDtcblxuICAgICAgICAgIChfdGhpcyRjb250ZXh0ID0gX3RoaXMuY29udGV4dCkub25Qb3B1cE1vdXNlRG93bi5hcHBseShfdGhpcyRjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm1hc2sgJiYgIV90aGlzLnByb3BzLm1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBfdGhpcy5nZXRSb290RG9tTm9kZSgpO1xuXG4gICAgICAgIHZhciBwb3B1cE5vZGUgPSBfdGhpcy5nZXRQb3B1cERvbU5vZGUoKTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIWNvbnRhaW5zKHBvcHVwTm9kZSwgdGFyZ2V0KSAmJiAhX3RoaXMuaGFzUG9wdXBNb3VzZURvd24pIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRSb290RG9tTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdldFRyaWdnZXJET01Ob2RlID0gX3RoaXMucHJvcHMuZ2V0VHJpZ2dlckRPTU5vZGU7XG5cbiAgICAgICAgaWYgKGdldFRyaWdnZXJET01Ob2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFRyaWdnZXJET01Ob2RlKF90aGlzLnRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBkb21Ob2RlID0gZmluZERPTU5vZGUoX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50KTtcblxuICAgICAgICAgIGlmIChkb21Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikgey8vIERvIG5vdGhpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IGZ1bmN0aW9uIChhbGlnbikge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gW107XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMuYWxpZ25Qb2ludCxcbiAgICAgICAgICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gX3RoaXMkcHJvcHMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ247XG5cbiAgICAgICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICAgICAgY2xhc3NOYW1lLnB1c2goZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgYWxpZ25Qb2ludCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICAgICAgY2xhc3NOYW1lLnB1c2goZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc05hbWUuam9pbignICcpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3RoaXMkcHJvcHMyLmRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgICAgb25Qb3B1cEFsaWduID0gX3RoaXMkcHJvcHMyLm9uUG9wdXBBbGlnbixcbiAgICAgICAgICAgIHBvcHVwTW90aW9uID0gX3RoaXMkcHJvcHMyLnBvcHVwTW90aW9uLFxuICAgICAgICAgICAgcG9wdXBBbmltYXRpb24gPSBfdGhpcyRwcm9wczIucG9wdXBBbmltYXRpb24sXG4gICAgICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICBwb3B1cFN0eWxlID0gX3RoaXMkcHJvcHMyLnBvcHVwU3R5bGUsXG4gICAgICAgICAgICBtYXNrID0gX3RoaXMkcHJvcHMyLm1hc2ssXG4gICAgICAgICAgICBtYXNrQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMyLm1hc2tBbmltYXRpb24sXG4gICAgICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczIubWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgbWFza01vdGlvbiA9IF90aGlzJHByb3BzMi5tYXNrTW90aW9uLFxuICAgICAgICAgICAgekluZGV4ID0gX3RoaXMkcHJvcHMyLnpJbmRleCxcbiAgICAgICAgICAgIHBvcHVwID0gX3RoaXMkcHJvcHMyLnBvcHVwLFxuICAgICAgICAgICAgc3RyZXRjaCA9IF90aGlzJHByb3BzMi5zdHJldGNoLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzMi5hbGlnblBvaW50O1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHBvcHVwVmlzaWJsZSA9IF90aGlzJHN0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgICAgIHBvaW50ID0gX3RoaXMkc3RhdGUucG9pbnQ7XG5cbiAgICAgICAgdmFyIGFsaWduID0gX3RoaXMuZ2V0UG9wdXBBbGlnbigpO1xuXG4gICAgICAgIHZhciBtb3VzZVByb3BzID0ge307XG5cbiAgICAgICAgaWYgKF90aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRW50ZXIgPSBfdGhpcy5vblBvcHVwTW91c2VFbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUxlYXZlID0gX3RoaXMub25Qb3B1cE1vdXNlTGVhdmU7XG4gICAgICAgIH1cblxuICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VEb3duID0gX3RoaXMub25Qb3B1cE1vdXNlRG93bjtcbiAgICAgICAgbW91c2VQcm9wcy5vblRvdWNoU3RhcnQgPSBfdGhpcy5vblBvcHVwTW91c2VEb3duO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQb3B1cCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgICAgdmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICAgIHBvaW50OiBhbGlnblBvaW50ICYmIHBvaW50LFxuICAgICAgICAgIGNsYXNzTmFtZTogcG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IG9uUG9wdXBBbGlnbixcbiAgICAgICAgICBhbmltYXRpb246IHBvcHVwQW5pbWF0aW9uLFxuICAgICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbjogX3RoaXMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ25cbiAgICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICAgIHN0cmV0Y2g6IHN0cmV0Y2gsXG4gICAgICAgICAgZ2V0Um9vdERvbU5vZGU6IF90aGlzLmdldFJvb3REb21Ob2RlLFxuICAgICAgICAgIHN0eWxlOiBwb3B1cFN0eWxlLFxuICAgICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbWFza0FuaW1hdGlvbjogbWFza0FuaW1hdGlvbixcbiAgICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBtYXNrTW90aW9uOiBtYXNrTW90aW9uLFxuICAgICAgICAgIHJlZjogX3RoaXMucG9wdXBSZWYsXG4gICAgICAgICAgbW90aW9uOiBwb3B1cE1vdGlvblxuICAgICAgICB9KSwgdHlwZW9mIHBvcHVwID09PSAnZnVuY3Rpb24nID8gcG9wdXAoKSA6IHBvcHVwKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHM7XG5cbiAgICAgICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIE1ha2Ugc3VyZSBkZWZhdWx0IHBvcHVwIGNvbnRhaW5lciB3aWxsIG5ldmVyIGNhdXNlIHNjcm9sbGJhciBhcHBlYXJpbmdcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy80MVxuXG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdmFyIG1vdW50Tm9kZSA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyID8gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIoX3RoaXMuZ2V0Um9vdERvbU5vZGUoKSkgOiBwcm9wcy5nZXREb2N1bWVudCgpLmJvZHk7XG4gICAgICAgIG1vdW50Tm9kZS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldFBvaW50ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHZhciBhbGlnblBvaW50ID0gX3RoaXMucHJvcHMuYWxpZ25Qb2ludDtcbiAgICAgICAgaWYgKCFhbGlnblBvaW50IHx8ICFwb2ludCkgcmV0dXJuO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgcGFnZVg6IHBvaW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IHBvaW50LnBhZ2VZXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLnByZXZQb3B1cFZpc2libGUgIT09IF90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKF90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBwb3B1cFZpc2libGU7XG5cbiAgICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLnBvcHVwVmlzaWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHByZXZQb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH07XG4gICAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgICBfdGhpc1tcImZpcmVcIi5jb25jYXQoaCldID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBfdGhpcy5maXJlRXZlbnRzKGgsIGUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRyaWdnZXIsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBXZSBtdXN0IGxpc3RlbiB0byBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAsIGVkZ2UgY2FzZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNTgwNFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2NhbGVuZGFyL2lzc3Vlcy8yNTBcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81MFxuXG4gICAgICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICB2YXIgY3VycmVudERvY3VtZW50O1xuXG4gICAgICAgICAgaWYgKCF0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgJiYgKHRoaXMuaXNDbGlja1RvSGlkZSgpIHx8IHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSkge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgIH0gLy8gYWx3YXlzIGhpZGUgb24gbW9iaWxlXG5cblxuICAgICAgICAgIGlmICghdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAndG91Y2hzdGFydCcsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICB9IC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgZG9jdW1lbnQgaXMgc2Nyb2xsaW5nLlxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgICAgIH0gLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCB3aW5kb3cgaXMgYmx1ci5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyICYmIHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdibHVyJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFBvcHVwRG9tTm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgICAgLy8gZm9yIHRlc3RcbiAgICAgICAgaWYgKHRoaXMucG9wdXBSZWYuY3VycmVudCAmJiB0aGlzLnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRQb3B1cEFsaWduXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG5cbiAgICAgICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHVwQWxpZ247XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSBwb3B1cFZpc2libGUgICAgU2hvdyBvciBub3QgdGhlIHBvcHVwIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSBldmVudCAgICAgICAgICAgU3ludGhldGljRXZlbnQsIHVzZWQgZm9yIGBwb2ludEFsaWduYFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0UG9wdXBWaXNpYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9wdXBWaXNpYmxlKHBvcHVwVmlzaWJsZSwgZXZlbnQpIHtcbiAgICAgICAgdmFyIGFsaWduUG9pbnQgPSB0aGlzLnByb3BzLmFsaWduUG9pbnQ7XG4gICAgICAgIHZhciBwcmV2UG9wdXBWaXNpYmxlID0gdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKHByZXZQb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIGlmICghKCdwb3B1cFZpc2libGUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgICAgIHByZXZQb3B1cFZpc2libGU6IHByZXZQb3B1cFZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucHJvcHMub25Qb3B1cFZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKTtcbiAgICAgICAgfSAvLyBBbHdheXMgcmVjb3JkIHRoZSBwb2ludCBwb3NpdGlvbiBzaW5jZSBtb3VzZUVudGVyRGVsYXkgd2lsbCBkZWxheSB0aGUgc2hvd1xuXG5cbiAgICAgICAgaWYgKGFsaWduUG9pbnQgJiYgZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnNldFBvaW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWxheVNldFBvcHVwVmlzaWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5UywgZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGRlbGF5ID0gZGVsYXlTICogMTAwMDtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICB2YXIgcG9pbnQgPSBldmVudCA/IHtcbiAgICAgICAgICAgIHBhZ2VYOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBldmVudC5wYWdlWVxuICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRQb3B1cFZpc2libGUodmlzaWJsZSwgcG9pbnQpO1xuXG4gICAgICAgICAgICBfdGhpczIuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGVhckRlbGF5VGltZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckRlbGF5VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyT3V0c2lkZUhhbmRsZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSkge1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMikge1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY3JlYXRlVHdvQ2hhaW5zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVHdvQ2hhaW5zKGV2ZW50KSB7XG4gICAgICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChjaGlsZFByb3NbZXZlbnRdICYmIHByb3BzW2V2ZW50XSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW1wiZmlyZVwiLmNvbmNhdChldmVudCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkUHJvc1tldmVudF0gfHwgcHJvcHNbZXZlbnRdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NsaWNrVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczMuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzMy5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ29udGV4dE1lbnVUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NvbnRleHRNZW51VG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNC5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM0LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDbGlja1RvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM1LmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczUuaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc01vdXNlRW50ZXJUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM2LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczYuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ21vdXNlRW50ZXInKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzTW91c2VMZWF2ZVRvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczcuYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzNy5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignbW91c2VMZWF2ZScpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNGb2N1c1RvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM4LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczguc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0JsdXJUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM5LmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczkuaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2JsdXInKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZvcmNlUG9wdXBBbGlnblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlICYmIHRoaXMucG9wdXBSZWYuY3VycmVudCAmJiB0aGlzLnBvcHVwUmVmLmN1cnJlbnQuYWxpZ25SZWYuY3VycmVudCkge1xuICAgICAgICAgIHRoaXMucG9wdXBSZWYuY3VycmVudC5hbGlnblJlZi5jdXJyZW50LmZvcmNlQWxpZ24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmaXJlRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZUV2ZW50cyh0eXBlLCBlKSB7XG4gICAgICAgIHZhciBjaGlsZENhbGxiYWNrID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wc1t0eXBlXTtcblxuICAgICAgICBpZiAoY2hpbGRDYWxsYmFjaykge1xuICAgICAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLnByb3BzW3R5cGVdO1xuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcG9wdXBWaXNpYmxlID0gdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMxMC5jaGlsZHJlbixcbiAgICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMxMC5mb3JjZVJlbmRlcixcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wczEwLmFsaWduUG9pbnQsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczEwLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGF1dG9EZXN0cm95ID0gX3RoaXMkcHJvcHMxMC5hdXRvRGVzdHJveTtcbiAgICAgICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge1xuICAgICAgICAgIGtleTogJ3RyaWdnZXInXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5vbkNvbnRleHRNZW51O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkNvbnRleHRNZW51Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2s7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd247XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25DbGljaycpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvblRvdWNoU3RhcnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjtcblxuICAgICAgICAgIGlmIChhbGlnblBvaW50KSB7XG4gICAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUVudGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUxlYXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMub25Gb2N1cztcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkZvY3VzJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25CbHVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRyZW5DbGFzc05hbWUgPSBjbGFzc05hbWVzKGNoaWxkICYmIGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAoY2hpbGRyZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLmNsYXNzTmFtZSA9IGNoaWxkcmVuQ2xhc3NOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb25lUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBuZXdDaGlsZFByb3BzKTtcblxuICAgICAgICBpZiAoc3VwcG9ydFJlZihjaGlsZCkpIHtcbiAgICAgICAgICBjbG9uZVByb3BzLnJlZiA9IGNvbXBvc2VSZWYodGhpcy50cmlnZ2VyUmVmLCBjaGlsZC5yZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNsb25lUHJvcHMpO1xuICAgICAgICB2YXIgcG9ydGFsOyAvLyBwcmV2ZW50IHVubW91bnRpbmcgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gICAgICAgIGlmIChwb3B1cFZpc2libGUgfHwgdGhpcy5wb3B1cFJlZi5jdXJyZW50IHx8IGZvcmNlUmVuZGVyKSB7XG4gICAgICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxcIixcbiAgICAgICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgICAgICBkaWRVcGRhdGU6IHRoaXMuaGFuZGxlUG9ydGFsVXBkYXRlXG4gICAgICAgICAgfSwgdGhpcy5nZXRDb21wb25lbnQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvcHVwVmlzaWJsZSAmJiBhdXRvRGVzdHJveSkge1xuICAgICAgICAgIHBvcnRhbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBvblBvcHVwTW91c2VEb3duOiB0aGlzLm9uUG9wdXBNb3VzZURvd25cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRyaWdnZXIsIHBvcnRhbCk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgICAgICB2YXIgcG9wdXBWaXNpYmxlID0gX3JlZi5wb3B1cFZpc2libGU7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgICAgIGlmIChwb3B1cFZpc2libGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2U3RhdGUucG9wdXBWaXNpYmxlICE9PSBwb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5wb3B1cFZpc2libGUgPSBwb3B1cFZpc2libGU7XG4gICAgICAgICAgbmV3U3RhdGUucHJldlBvcHVwVmlzaWJsZSA9IHByZXZTdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyaWdnZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBUcmlnZ2VyLmNvbnRleHRUeXBlID0gVHJpZ2dlckNvbnRleHQ7XG4gIFRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ3JjLXRyaWdnZXItcG9wdXAnLFxuICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiByZXR1cm5FbXB0eVN0cmluZyxcbiAgICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25Qb3B1cEFsaWduOiBub29wLFxuICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gICAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gICAgZm9jdXNEZWxheTogMCxcbiAgICBibHVyRGVsYXk6IDAuMTUsXG4gICAgcG9wdXBTdHlsZToge30sXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBmYWxzZSxcbiAgICBwb3B1cEFsaWduOiB7fSxcbiAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgICBtYXNrOiBmYWxzZSxcbiAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgYWN0aW9uOiBbXSxcbiAgICBzaG93QWN0aW9uOiBbXSxcbiAgICBoaWRlQWN0aW9uOiBbXSxcbiAgICBhdXRvRGVzdHJveTogZmFsc2VcbiAgfTtcbiAgcmV0dXJuIFRyaWdnZXI7XG59XG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRyaWdnZXIoUG9ydGFsKTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gaXNQb2ludHNFcShhMSwgYTIsIGlzQWxpZ25Qb2ludCkge1xuICBpZiAoaXNBbGlnblBvaW50KSB7XG4gICAgcmV0dXJuIGExWzBdID09PSBhMlswXTtcbiAgfVxuXG4gIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwbGFjZW1lbnRTdHIsIGFsaWduKSB7XG4gIHZhciBiYXNlQWxpZ24gPSBidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRTdHJdIHx8IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBiYXNlQWxpZ24pLCBhbGlnbik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgaXNBbGlnblBvaW50KSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBwbGFjZW1lbnRzID0gT2JqZWN0LmtleXMoYnVpbHRpblBsYWNlbWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzUG9pbnRzRXEoYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50XS5wb2ludHMsIHBvaW50cywgaXNBbGlnblBvaW50KSkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGxhY2VtZW50LVwiKS5jb25jYXQocGxhY2VtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE1vdGlvbihfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIG1vdGlvbiA9IF9yZWYubW90aW9uLFxuICAgICAgYW5pbWF0aW9uID0gX3JlZi5hbmltYXRpb24sXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IF9yZWYudHJhbnNpdGlvbk5hbWU7XG5cbiAgaWYgKG1vdGlvbikge1xuICAgIHJldHVybiBtb3Rpb247XG4gIH1cblxuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhbmltYXRpb24pXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0cmFuc2l0aW9uTmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiB0cmFuc2l0aW9uTmFtZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYiwgb3B0aW9uKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuXG4gIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhyb290LCBuKSB7XG4gIHZhciBub2RlID0gbjtcblxuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9BcnJheTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdElzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcblxuICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCB8fCBjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0b0FycmF5KGNoaWxkKSk7XG4gICAgfSBlbHNlIGlmICgoMCwgX3JlYWN0SXMuaXNGcmFnbWVudCkoY2hpbGQpICYmIGNoaWxkLnByb3BzKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KHRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJldDtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJ2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rJztcblxuaW1wb3J0IHtcbiAgSE9NRV9QQUdFLFxuICBUUkFWRUxfUEFHRSxcbiAgU0lNX1dJRklfUEFHRSxcbiAgU0hPUF9QQUdFLFxuICBWSVNBX1BBR0UsXG4gIEJMT0dfUEFHRVxufSBmcm9tICdzZXR0aW5ncy9jb25zdGFudCc7XG5cbmNvbnN0IE1haW5NZW51ID0gKHsgY2xhc3NOYW1lLCByb3V0ZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMFwiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBIT01FX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake0hPTUVfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgVHJhbmcgY2jhu6dcbiAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cbiAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gVFJBVkVMX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake1RSQVZFTF9QQUdFfWB9XG4gICAgICAgID5cbiAgICAgICAgICBEdSBs4buLY2hcbiAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cbiAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gU0lNX1dJRklfUEFHRSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgaHJlZj17YCR7U0lNX1dJRklfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgU2ltICYgV0lGSVxuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBTSE9QX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake1NIT1BfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgU2hvcFxuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBWSVNBX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake1ZJU0FfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgVmlzYVxuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBCTE9HX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake0JMT0dfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgQmxvZ1xuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE1haW5NZW51KTtcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5jb25zdCBBY3RpdmVMaW5rID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goaHJlZik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7XG4iXSwic291cmNlUm9vdCI6IiJ9