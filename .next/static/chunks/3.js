(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./container/Layout/Header/MobileMenu.js":
/*!***********************************************!*\
  !*** ./container/Layout/Header/MobileMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "../../node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\MobileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const MobileMenu = ({
  className
}) => {
  _s();

  // auth context
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
        loggedIn = _useContext.loggedIn,
        logOut = _useContext.logOut;

  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Trang Ch\u1EE7")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["TRAVEL_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Du L\u1ECBch")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["SIM_WIFI_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Sim & WIFI")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["SHOP_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Shop")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["VISA_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Visa")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["BLOG_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Blog")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Log Out")));
};

_s(MobileMenu, "RO4zPLhn3+7evf/JOYW0HyI0Rec=");

_c = MobileMenu;
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

var _c;

$RefreshReg$(_c, "MobileMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vY29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2VzbS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbWluaS1zdG9yZS9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvaG9va3MvdXNlQnVmZmVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9DU1NNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy91dGlsL21vdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL0RPTVdyYXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9EaXZpZGVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL01lbnVJdGVtLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudUl0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvdXRpbHMvaXNNb2JpbGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy91dGlscy9sZWdhY3lVdGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9saWIvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXBJbm5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2FsaWduVXRpbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MYXlvdXQvSGVhZGVyL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL2FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsImNsYXNzTmFtZSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImxvZ2dlZEluIiwibG9nT3V0IiwiSE9NRV9QQUdFIiwiVFJBVkVMX1BBR0UiLCJTSU1fV0lGSV9QQUdFIiwiU0hPUF9QQUdFIiwiVklTQV9QQUdFIiwiQkxPR19QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQWN0aXZlTGluayIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLFlBQVksbUJBQU8sQ0FBQyx5REFBUTs7QUFFNUIsc0dBQXNHOztBQUV0RztBQUNBO0FBQ0EsNEM7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9HQUFvRztBQUNwRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckYsK0ZBQStGO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7O0FDMVBhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRkFBMkI7O0FBRXJELHFCQUFxQixnREFBZ0QsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlLEdBQUcsd0NBQXdDOztBQUUzVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQSxLQUFLLHdCQUF3QjtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0MscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQywwREFBMEQ7O0FBRTFEO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTs7QUFFbkUsdUVBQXVFOztBQUV2RSxtQ0FBbUM7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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LENBQVlKLElBQVo7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBRyxhQUFTLEVBQUVmLFNBQWQ7QUFBeUIsUUFBSSxFQUFFZSxJQUEvQjtBQUFxQyxXQUFPLEVBQUVDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsUUFESCxDQURGO0FBS0QsQ0FYRDs7S0FBTUQsVTtBQWFTLHFFQUFBUSw4REFBVSxDQUFDUixVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QcmVzZXRDb2xvclR5cGVzID0gZXhwb3J0cy5QcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gdm9pZCAwO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi90eXBlXCIpO1xuXG52YXIgUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ3N1Y2Nlc3MnLCAncHJvY2Vzc2luZycsICdlcnJvcicsICdkZWZhdWx0JywgJ3dhcm5pbmcnKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcblxuZXhwb3J0cy5QcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gUHJlc2V0U3RhdHVzQ29sb3JUeXBlcztcbnZhciBQcmVzZXRDb2xvclR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgncGluaycsICdyZWQnLCAneWVsbG93JywgJ29yYW5nZScsICdjeWFuJywgJ2dyZWVuJywgJ2JsdWUnLCAncHVycGxlJywgJ2dlZWtibHVlJywgJ21hZ2VudGEnLCAndm9sY2FubycsICdnb2xkJywgJ2xpbWUnKTtcbmV4cG9ydHMuUHJlc2V0Q29sb3JUeXBlcyA9IFByZXNldENvbG9yVHlwZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLy8gPT09PT09PT09PT09PT09PT09IENvbGxhcHNlIE1vdGlvbiA9PT09PT09PT09PT09PT09PT1cbnZhciBnZXRDb2xsYXBzZWRIZWlnaHQgPSBmdW5jdGlvbiBnZXRDb2xsYXBzZWRIZWlnaHQoKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIG9wYWNpdHk6IDBcbiAgfTtcbn07XG5cbnZhciBnZXRSZWFsSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0UmVhbEhlaWdodChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBub2RlLnNjcm9sbEhlaWdodCxcbiAgICBvcGFjaXR5OiAxXG4gIH07XG59O1xuXG52YXIgZ2V0Q3VycmVudEhlaWdodCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRIZWlnaHQobm9kZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHRcbiAgfTtcbn07XG5cbnZhciBjb2xsYXBzZU1vdGlvbiA9IHtcbiAgbW90aW9uTmFtZTogJ2FudC1tb3Rpb24tY29sbGFwc2UnLFxuICBvbkFwcGVhclN0YXJ0OiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gIG9uRW50ZXJTdGFydDogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBvbkFwcGVhckFjdGl2ZTogZ2V0UmVhbEhlaWdodCxcbiAgb25FbnRlckFjdGl2ZTogZ2V0UmVhbEhlaWdodCxcbiAgb25MZWF2ZVN0YXJ0OiBnZXRDdXJyZW50SGVpZ2h0LFxuICBvbkxlYXZlQWN0aXZlOiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gIG1vdGlvbkRlYWRsaW5lOiA1MDBcbn07XG52YXIgX2RlZmF1bHQgPSBjb2xsYXBzZU1vdGlvbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIE1lbnVDb250ZXh0ID0gKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh7XG4gIGlubGluZUNvbGxhcHNlZDogZmFsc2Vcbn0pO1xudmFyIF9kZWZhdWx0ID0gTWVudUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNNZW51ID0gcmVxdWlyZShcInJjLW1lbnVcIik7XG5cbnZhciBfdG9BcnJheSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9NZW51Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbnRleHRcIikpO1xuXG52YXIgX3Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90b29sdGlwXCIpKTtcblxudmFyIF9TaWRlciA9IHJlcXVpcmUoXCIuLi9sYXlvdXQvU2lkZXJcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBNZW51SXRlbSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBNZW51SXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZW51SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnVJdGVtKTtcblxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5tZW51SXRlbS5vbktleURvd24oZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlTWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW0pIHtcbiAgICAgICAgX3RoaXMubWVudUl0ZW0gPSBtZW51SXRlbTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgc2lkZXJDb2xsYXBzZWQgPSBfcmVmLnNpZGVyQ29sbGFwc2VkO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzLnJvb3RQcmVmaXhDbHM7XG5cbiAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICB0aXRsZSA9IF9hLnRpdGxlLFxuICAgICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgICBkYW5nZXIgPSBfYS5kYW5nZXIsXG4gICAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJ0aXRsZVwiLCBcImljb25cIiwgXCJkYW5nZXJcIl0pO1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gX3JlZjIuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmMi5kaXJlY3Rpb247XG4gICAgICAgICAgdmFyIHRvb2x0aXBUaXRsZSA9IHRpdGxlO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IGxldmVsID09PSAxID8gY2hpbGRyZW4gOiAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpdGxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdG9vbHRpcFRpdGxlID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRvb2x0aXBQcm9wcyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0b29sdGlwVGl0bGVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKCFzaWRlckNvbGxhcHNlZCAmJiAhaW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0b29sdGlwUHJvcHMudGl0bGUgPSBudWxsOyAvLyBSZXNldCBgdmlzaWJsZWAgdG8gZml4IGNvbnRyb2wgbW9kZSB0b29sdGlwIGRpc3BsYXkgbm90IGNvcnJlY3RcbiAgICAgICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTY3NDJcblxuICAgICAgICAgICAgdG9vbHRpcFByb3BzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSAoMCwgX3RvQXJyYXlbXCJkZWZhdWx0XCJdKShjaGlsZHJlbikubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfdG9vbHRpcFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCB0b29sdGlwUHJvcHMsIHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLXRvb2x0aXBcIilcbiAgICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5JdGVtLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZGFuZ2VyXCIpLCBkYW5nZXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tb25seS1jaGlsZFwiKSwgKGljb24gPyBjaGlsZHJlbkxlbmd0aCArIDEgOiBjaGlsZHJlbkxlbmd0aCkgPT09IDEpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcmVmOiBfdGhpcy5zYXZlTWVudUl0ZW1cbiAgICAgICAgICB9KSwgaWNvbiwgX3RoaXMucmVuZGVySXRlbUNoaWxkcmVuKGlubGluZUNvbGxhcHNlZCkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbnVJdGVtLCBbe1xuICAgICAga2V5OiBcInJlbmRlckl0ZW1DaGlsZHJlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckl0ZW1DaGlsZHJlbihpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpY29uID0gX3RoaXMkcHJvcHMyLmljb24sXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMyLmxldmVsLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzMi5yb290UHJlZml4Q2xzOyAvLyBpbmxpbmUtY29sbGFwc2VkLm1kIGRlbW8g5L6d6LWWIHNwYW4g5p2l6ZqQ6JeP5paH5a2XLOaciSBpY29uIOWxnuaAp++8jOWImeWGhemDqOWMheijueS4gOS4qiBzcGFuXG4gICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9wdWxsLzIzNDU2XG5cbiAgICAgICAgaWYgKCFpY29uIHx8ICgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShjaGlsZHJlbikgJiYgY2hpbGRyZW4udHlwZSA9PT0gJ3NwYW4nKSB7XG4gICAgICAgICAgaWYgKGNoaWxkcmVuICYmIGlubGluZUNvbGxhcHNlZCAmJiBsZXZlbCA9PT0gMSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtbm9pY29uXCIpXG4gICAgICAgICAgICB9LCBjaGlsZHJlbi5jaGFyQXQoMCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2lkZXIuU2lkZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckl0ZW0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZW51SXRlbTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIE1lbnVJdGVtLmlzTWVudUl0ZW0gPSB0cnVlO1xuICByZXR1cm4gTWVudUl0ZW07XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IE1lbnVJdGVtO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IHJlcXVpcmUoXCJyYy1tZW51XCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgU3ViTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBTdWJNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN1Yk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdWJNZW51KTtcblxuICAgIGZ1bmN0aW9uIFN1Yk1lbnUoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJNZW51KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuc3ViTWVudS5vbktleURvd24oZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlU3ViTWVudSA9IGZ1bmN0aW9uIChzdWJNZW51KSB7XG4gICAgICAgIF90aGlzLnN1Yk1lbnUgPSBzdWJNZW51O1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdWJNZW51LCBbe1xuICAgICAga2V5OiBcInJlbmRlclRpdGxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpY29uID0gX3RoaXMkcHJvcHMuaWNvbixcbiAgICAgICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzLnJvb3RQcmVmaXhDbHM7XG5cbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZCAmJiBsZXZlbCA9PT0gMSAmJiB0aXRsZSAmJiB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLW5vaWNvblwiKVxuICAgICAgICAgIH0sIHRpdGxlLmNoYXJBdCgwKSkgOiB0aXRsZTtcbiAgICAgICAgfSAvLyBpbmxpbmUtY29sbGFwc2VkLm1kIGRlbW8g5L6d6LWWIHNwYW4g5p2l6ZqQ6JeP5paH5a2XLOaciSBpY29uIOWxnuaAp++8jOWImeWGhemDqOWMheijueS4gOS4qiBzcGFuXG4gICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9wdWxsLzIzNDU2XG5cblxuICAgICAgICB2YXIgdGl0bGVJc1NwYW4gPSAoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkodGl0bGUpICYmIHRpdGxlLnR5cGUgPT09ICdzcGFuJztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpY29uLCB0aXRsZUlzU3BhbiA/IHRpdGxlIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIHRpdGxlKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnJvb3RQcmVmaXhDbHMsXG4gICAgICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cENsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IF9yZWYuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgICAgICBhbnRkTWVudVRoZW1lID0gX3JlZi5hbnRkTWVudVRoZW1lO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51LlN1Yk1lbnUsIF9leHRlbmRzKHt9LCAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShfdGhpczIucHJvcHMsIFsnaWNvbiddKSwge1xuICAgICAgICAgICAgdGl0bGU6IF90aGlzMi5yZW5kZXJUaXRsZShpbmxpbmVDb2xsYXBzZWQpLFxuICAgICAgICAgICAgcmVmOiBfdGhpczIuc2F2ZVN1Yk1lbnUsXG4gICAgICAgICAgICBwb3B1cENsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocm9vdFByZWZpeENscywgXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItXCIpLmNvbmNhdChhbnRkTWVudVRoZW1lKSwgcG9wdXBDbGFzc05hbWUpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3ViTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFN1Yk1lbnUuY29udGV4dFR5cGUgPSBfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdOyAvLyBmaXggaXNzdWU6aHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODY2NlxuXG4gIFN1Yk1lbnUuaXNTdWJNZW51ID0gMTtcbiAgcmV0dXJuIFN1Yk1lbnU7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IFN1Yk1lbnU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNNZW51ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLW1lbnVcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfU3ViTWVudSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU3ViTWVudVwiKSk7XG5cbnZhciBfTWVudUl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVJdGVtXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9yYWZcIikpO1xuXG52YXIgX21vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL21vdGlvblwiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEludGVybmFsTWVudSA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBJbnRlcm5hbE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoSW50ZXJuYWxNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW50ZXJuYWxNZW51KTtcblxuICAgIGZ1bmN0aW9uIEludGVybmFsTWVudShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJuYWxNZW51KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7IC8vIFJlc3RvcmUgdmVydGljYWwgbW9kZSB3aGVuIG1lbnUgaXMgY29sbGFwc2VkIHJlc3BvbnNpdmVseSB3aGVuIG1vdW50ZWRcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEzMTA0XG4gICAgICAvLyBUT0RPOiBub3QgYSBwZXJmZWN0IHNvbHV0aW9uLCBsb29raW5nIGEgbmV3IHdheSB0byBhdm9pZCBzZXR0aW5nIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lIGluIHRoaXMgc2l0dWF0aW9uXG5cbiAgICAgIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5yZXN0b3JlTW9kZVZlcnRpY2FsRnJvbUlubGluZSgpO1xuXG4gICAgICAgIHZhciBvbk1vdXNlRW50ZXIgPSBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXI7XG5cbiAgICAgICAgaWYgKG9uTW91c2VFbnRlcikge1xuICAgICAgICAgIG9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHdoZW4gaW5saW5lQ29sbGFwc2VkIG1lbnUgd2lkdGggYW5pbWF0aW9uIGZpbmlzaGVkXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEyODY0XG4gICAgICAgIHZhciB3aWR0aENvbGxhcHNlZCA9IGUucHJvcGVydHlOYW1lID09PSAnd2lkdGgnICYmIGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQ7IC8vIEZpeCBTVkdFbGVtZW50IGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mIGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE1Njk5XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZTsgLy8gU1ZHQW5pbWF0ZWRTdHJpbmcuYW5pbVZhbCBzaG91bGQgYmUgaWRlbnRpY2FsIHRvIFNWR0FuaW1hdGVkU3RyaW5nLmJhc2VWYWwsIHVubGVzcyBkdXJpbmcgYW4gYW5pbWF0aW9uLlxuXG4gICAgICAgIHZhciBjbGFzc05hbWVWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjbGFzc05hbWUpID09PSAnW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ10nID8gY2xhc3NOYW1lLmFuaW1WYWwgOiBjbGFzc05hbWU7IC8vIEZpeCBmb3IgPE1lbnUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPiwgdGhlIHdpZHRoIHRyYW5zaXRpb24gd29uJ3QgdHJpZ2dlciB3aGVuIG1lbnUgaXMgY29sbGFwc2VkXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24tcHJvL2lzc3Vlcy8yNzgzXG5cbiAgICAgICAgdmFyIGljb25TY2FsZWQgPSBlLnByb3BlcnR5TmFtZSA9PT0gJ2ZvbnQtc2l6ZScgJiYgY2xhc3NOYW1lVmFsdWUuaW5kZXhPZignYW50aWNvbicpID49IDA7XG5cbiAgICAgICAgaWYgKHdpZHRoQ29sbGFwc2VkIHx8IGljb25TY2FsZWQpIHtcbiAgICAgICAgICBfdGhpcy5yZXN0b3JlTW9kZVZlcnRpY2FsRnJvbUlubGluZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmhhbmRsZU9wZW5DaGFuZ2UoW10pO1xuXG4gICAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZU9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAob3BlbktleXMpIHtcbiAgICAgICAgX3RoaXMuc2V0T3BlbktleXMob3BlbktleXMpO1xuXG4gICAgICAgIHZhciBvbk9wZW5DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2U7XG5cbiAgICAgICAgaWYgKG9uT3BlbkNoYW5nZSkge1xuICAgICAgICAgIG9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbmRlck1lbnUgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgZ2V0UG9wdXBDb250YWluZXIgPSBfcmVmLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lLFxuICAgICAgICAgICAgY29sbGFwc2VkV2lkdGggPSBfdGhpcyRwcm9wcy5jb2xsYXBzZWRXaWR0aDtcbiAgICAgICAgdmFyIG9wZW5LZXlzID0gX3RoaXMuc3RhdGUub3BlbktleXM7XG4gICAgICAgIHZhciBwYXNzUHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShfdGhpcy5wcm9wcywgWydjb2xsYXBzZWRXaWR0aCcsICdzaWRlckNvbGxhcHNlZCddKTtcblxuICAgICAgICB2YXIgbWVudU1vZGUgPSBfdGhpcy5nZXRSZWFsTWVudU1vZGUoKTtcblxuICAgICAgICB2YXIgbWVudU9wZW5Nb3Rpb24gPSBfdGhpcy5nZXRPcGVuTW90aW9uUHJvcHMobWVudU1vZGUpO1xuXG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ21lbnUnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICB2YXIgbWVudUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHRoZW1lKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWRcIiksIF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpKSk7XG5cbiAgICAgICAgdmFyIG1lbnVQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBvcGVuS2V5czogb3BlbktleXMsXG4gICAgICAgICAgb25PcGVuQ2hhbmdlOiBfdGhpcy5oYW5kbGVPcGVuQ2hhbmdlLFxuICAgICAgICAgIGNsYXNzTmFtZTogbWVudUNsYXNzTmFtZSxcbiAgICAgICAgICBtb2RlOiBtZW51TW9kZVxuICAgICAgICB9LCBtZW51T3Blbk1vdGlvbik7XG5cbiAgICAgICAgaWYgKG1lbnVNb2RlICE9PSAnaW5saW5lJykge1xuICAgICAgICAgIC8vIGNsb3NpbmcgdmVydGljYWwgcG9wdXAgc3VibWVudSBhZnRlciBjbGljayBpdFxuICAgICAgICAgIG1lbnVQcm9wcy5vbkNsaWNrID0gX3RoaXMuaGFuZGxlQ2xpY2s7XG4gICAgICAgIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODU4N1xuXG5cbiAgICAgICAgdmFyIGhpZGVNZW51ID0gX3RoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkgJiYgKGNvbGxhcHNlZFdpZHRoID09PSAwIHx8IGNvbGxhcHNlZFdpZHRoID09PSAnMCcgfHwgY29sbGFwc2VkV2lkdGggPT09ICcwcHgnKTtcblxuICAgICAgICBpZiAoaGlkZU1lbnUpIHtcbiAgICAgICAgICBtZW51UHJvcHMub3BlbktleXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZDogX3RoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkgfHwgZmFsc2UsXG4gICAgICAgICAgICBhbnRkTWVudVRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51W1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICAgICAgICB9LCBwYXNzUHJvcHMsIG1lbnVQcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogX3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IF90aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgfSkpKTtcbiAgICAgIH07XG5cbiAgICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCEoJ2lubGluZUNvbGxhcHNlZCcgaW4gcHJvcHMgJiYgcHJvcHMubW9kZSAhPT0gJ2lubGluZScpLCAnTWVudScsICdgaW5saW5lQ29sbGFwc2VkYCBzaG91bGQgb25seSBiZSB1c2VkIHdoZW4gYG1vZGVgIGlzIGlubGluZS4nKTtcbiAgICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCEocHJvcHMuc2lkZXJDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCAmJiAnaW5saW5lQ29sbGFwc2VkJyBpbiBwcm9wcyksICdNZW51JywgJ2BpbmxpbmVDb2xsYXBzZWRgIG5vdCBjb250cm9sIE1lbnUgdW5kZXIgU2lkZXIuIFNob3VsZCBzZXQgYGNvbGxhcHNlZGAgb24gU2lkZXIgaW5zdGVhZC4nKTtcbiAgICAgIHZhciBvcGVuS2V5cztcblxuICAgICAgaWYgKCdvcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgICAgb3BlbktleXMgPSBwcm9wcy5vcGVuS2V5cztcbiAgICAgIH0gZWxzZSBpZiAoJ2RlZmF1bHRPcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgICAgb3BlbktleXMgPSBwcm9wcy5kZWZhdWx0T3BlbktleXM7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBvcGVuS2V5czogb3BlbktleXMgfHwgW10sXG4gICAgICAgIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lOiBmYWxzZSxcbiAgICAgICAgaW5saW5lT3BlbktleXM6IFtdLFxuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJbnRlcm5hbE1lbnUsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgX3JhZltcImRlZmF1bHRcIl0uY2FuY2VsKHRoaXMubW91bnRSYWZJZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBzaWRlckNvbGxhcHNlZCA9IF90aGlzJHByb3BzMi5zaWRlckNvbGxhcHNlZCxcbiAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZCA9IF90aGlzJHByb3BzMi5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICBvbk9wZW5DaGFuZ2UgPSBfdGhpcyRwcm9wczIub25PcGVuQ2hhbmdlO1xuXG4gICAgICAgIGlmICghcHJldlByb3BzLmlubGluZUNvbGxhcHNlZCAmJiBpbmxpbmVDb2xsYXBzZWQgfHwgIXByZXZQcm9wcy5zaWRlckNvbGxhcHNlZCAmJiBzaWRlckNvbGxhcHNlZCkge1xuICAgICAgICAgIG9uT3BlbkNoYW5nZSA9PT0gbnVsbCB8fCBvbk9wZW5DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uT3BlbkNoYW5nZShbXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0T3BlbktleXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGVuS2V5cyhvcGVuS2V5cykge1xuICAgICAgICBpZiAoISgnb3BlbktleXMnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuS2V5czogb3BlbktleXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRSZWFsTWVudU1vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWFsTWVudU1vZGUoKSB7XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgICB2YXIgc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPSB0aGlzLnN0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lO1xuICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKTtcblxuICAgICAgICBpZiAoc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgJiYgaW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZCA/ICd2ZXJ0aWNhbCcgOiBtb2RlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbmxpbmVDb2xsYXBzZWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmxpbmVDb2xsYXBzZWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW5saW5lQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMzLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICAgIHNpZGVyQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMzLnNpZGVyQ29sbGFwc2VkO1xuXG4gICAgICAgIGlmIChzaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNpZGVyQ29sbGFwc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0T3Blbk1vdGlvblByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3Blbk1vdGlvblByb3BzKG1lbnVNb2RlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgb3BlblRyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHM0Lm9wZW5UcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgIG9wZW5BbmltYXRpb24gPSBfdGhpcyRwcm9wczQub3BlbkFuaW1hdGlvbixcbiAgICAgICAgICAgIG1vdGlvbiA9IF90aGlzJHByb3BzNC5tb3Rpb247XG4gICAgICAgIHZhciBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA9IHRoaXMuc3RhdGUuc3dpdGNoaW5nTW9kZUZyb21JbmxpbmU7IC8vIFByb3ZpZGVzIGJ5IHVzZXJcblxuICAgICAgICBpZiAobW90aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdGlvbjogbW90aW9uXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkodHlwZW9mIG9wZW5BbmltYXRpb24gPT09ICdzdHJpbmcnLCAnTWVudScsICdgb3BlbkFuaW1hdGlvbmAgZG8gbm90IHN1cHBvcnQgb2JqZWN0LiBQbGVhc2UgdXNlIGBtb3Rpb25gIGluc3RlYWQuJyk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW5BbmltYXRpb246IG9wZW5BbmltYXRpb25cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZW5UcmFuc2l0aW9uTmFtZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuVHJhbnNpdGlvbk5hbWU6IG9wZW5UcmFuc2l0aW9uTmFtZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gLy8gRGVmYXVsdCBsb2dpY1xuXG5cbiAgICAgICAgaWYgKG1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW90aW9uOiB7XG4gICAgICAgICAgICAgIG1vdGlvbk5hbWU6ICdzbGlkZS11cCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbnVNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3Rpb246IF9tb3Rpb25bXCJkZWZhdWx0XCJdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSAvLyBXaGVuIG1vZGUgc3dpdGNoIGZyb20gaW5saW5lXG4gICAgICAgIC8vIHN1Ym1lbnUgc2hvdWxkIGhpZGUgd2l0aG91dCBhbmltYXRpb25cblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW90aW9uOiB7XG4gICAgICAgICAgICBtb3Rpb25OYW1lOiBzd2l0Y2hpbmdNb2RlRnJvbUlubGluZSA/ICcnIDogJ3pvb20tYmlnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzdG9yZU1vZGVWZXJ0aWNhbEZyb21JbmxpbmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0b3JlTW9kZVZlcnRpY2FsRnJvbUlubGluZSgpIHtcbiAgICAgICAgdmFyIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdGhpcy5zdGF0ZS5zd2l0Y2hpbmdNb2RlRnJvbUlubGluZTtcblxuICAgICAgICBpZiAoc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN3aXRjaGluZ01vZGVGcm9tSW5saW5lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJNZW51KTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdmFyIHByZXZQcm9wcyA9IHByZXZTdGF0ZS5wcmV2UHJvcHM7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBwcmV2UHJvcHM6IG5leHRQcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcmV2UHJvcHMubW9kZSA9PT0gJ2lubGluZScgJiYgbmV4dFByb3BzLm1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3dpdGNoaW5nTW9kZUZyb21JbmxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdvcGVuS2V5cycgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgbmV3U3RhdGUub3BlbktleXMgPSBuZXh0UHJvcHMub3BlbktleXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gW0xlZ2FjeV0gT2xkIGNvZGUgd2lsbCByZXR1cm4gYWZ0ZXIgYG9wZW5LZXlzYCBjaGFuZ2VkLlxuICAgICAgICAgIC8vIE5vdCBzdXJlIHRoZSByZWFzb24sIHdlIHNob3VsZCBrZWVwIHRoaXMgbG9naWMgc3RpbGwuXG4gICAgICAgICAgaWYgKG5leHRQcm9wcy5pbmxpbmVDb2xsYXBzZWQgJiYgIXByZXZQcm9wcy5pbmxpbmVDb2xsYXBzZWQgfHwgbmV4dFByb3BzLnNpZGVyQ29sbGFwc2VkICYmICFwcmV2UHJvcHMuc2lkZXJDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN3aXRjaGluZ01vZGVGcm9tSW5saW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLmlubGluZU9wZW5LZXlzID0gcHJldlN0YXRlLm9wZW5LZXlzO1xuICAgICAgICAgICAgbmV3U3RhdGUub3BlbktleXMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW5leHRQcm9wcy5pbmxpbmVDb2xsYXBzZWQgJiYgcHJldlByb3BzLmlubGluZUNvbGxhcHNlZCB8fCAhbmV4dFByb3BzLnNpZGVyQ29sbGFwc2VkICYmIHByZXZQcm9wcy5zaWRlckNvbGxhcHNlZCkge1xuICAgICAgICAgICAgbmV3U3RhdGUub3BlbktleXMgPSBwcmV2U3RhdGUuaW5saW5lT3BlbktleXM7XG4gICAgICAgICAgICBuZXdTdGF0ZS5pbmxpbmVPcGVuS2V5cyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW50ZXJuYWxNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgSW50ZXJuYWxNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgIGZvY3VzYWJsZTogZmFsc2VcbiAgfTtcbiAgcmV0dXJuIEludGVybmFsTWVudTtcbn0oKTsgLy8gV2Ugc2hvdWxkIGtlZXAgdGhpcyBhcyByZWYtYWJsZVxuXG5cbnZhciBNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKE1lbnUsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgIHZhciBfc3VwZXIyID0gX2NyZWF0ZVN1cGVyKE1lbnUpO1xuXG4gICAgZnVuY3Rpb24gTWVudSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51KTtcblxuICAgICAgcmV0dXJuIF9zdXBlcjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVudSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2lkZXIuU2lkZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcm5hbE1lbnUsIF9leHRlbmRzKHt9LCBfdGhpczIucHJvcHMsIGNvbnRleHQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lbnU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBNZW51LkRpdmlkZXIgPSBfcmNNZW51LkRpdmlkZXI7XG4gIE1lbnUuSXRlbSA9IF9NZW51SXRlbVtcImRlZmF1bHRcIl07XG4gIE1lbnUuU3ViTWVudSA9IF9TdWJNZW51W1wiZGVmYXVsdFwiXTtcbiAgTWVudS5JdGVtR3JvdXAgPSBfcmNNZW51Lkl0ZW1Hcm91cDtcbiAgcmV0dXJuIE1lbnU7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IE1lbnU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY1Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy10b29sdGlwXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcGxhY2VtZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGxhY2VtZW50c1wiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfY29sb3JzID0gcmVxdWlyZShcIi4uL191dGlsL2NvbG9yc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBzcGxpdE9iamVjdCA9IGZ1bmN0aW9uIHNwbGl0T2JqZWN0KG9iaiwga2V5cykge1xuICB2YXIgcGlja2VkID0ge307XG5cbiAgdmFyIG9taXR0ZWQgPSBfZXh0ZW5kcyh7fSwgb2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvYmogJiYga2V5IGluIG9iaikge1xuICAgICAgcGlja2VkW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIGRlbGV0ZSBvbWl0dGVkW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwaWNrZWQ6IHBpY2tlZCxcbiAgICBvbWl0dGVkOiBvbWl0dGVkXG4gIH07XG59O1xuXG52YXIgUHJlc2V0Q29sb3JSZWdleCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChfY29sb3JzLlByZXNldENvbG9yVHlwZXMuam9pbignfCcpLCBcIikoLWludmVyc2UpPyRcIikpOyAvLyBGaXggVG9vbHRpcCB3b24ndCBoaWRlIGF0IGRpc2FibGVkIGJ1dHRvblxuLy8gbW91c2UgZXZlbnRzIGRvbid0IHRyaWdnZXIgYXQgZGlzYWJsZWQgYnV0dG9uIGluIENocm9tZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy8xOFxuXG5mdW5jdGlvbiBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbihlbGVtZW50LCBwcmVmaXhDbHMpIHtcbiAgdmFyIGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuXG4gIGlmICgoZWxlbWVudFR5cGUuX19BTlRfQlVUVE9OID09PSB0cnVlIHx8IGVsZW1lbnRUeXBlLl9fQU5UX1NXSVRDSCA9PT0gdHJ1ZSB8fCBlbGVtZW50VHlwZS5fX0FOVF9DSEVDS0JPWCA9PT0gdHJ1ZSB8fCBlbGVtZW50LnR5cGUgPT09ICdidXR0b24nKSAmJiBlbGVtZW50LnByb3BzLmRpc2FibGVkKSB7XG4gICAgLy8gUGljayBzb21lIGxheW91dCByZWxhdGVkIHN0eWxlIHByb3BlcnRpZXMgdXAgdG8gc3BhblxuICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgdmFyIF9zcGxpdE9iamVjdCA9IHNwbGl0T2JqZWN0KGVsZW1lbnQucHJvcHMuc3R5bGUsIFsncG9zaXRpb24nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJywgJ2Zsb2F0JywgJ2Rpc3BsYXknLCAnekluZGV4J10pLFxuICAgICAgICBwaWNrZWQgPSBfc3BsaXRPYmplY3QucGlja2VkLFxuICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICB2YXIgc3BhblN0eWxlID0gX2V4dGVuZHMoX2V4dGVuZHMoe1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LCBwaWNrZWQpLCB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICB3aWR0aDogZWxlbWVudC5wcm9wcy5ibG9jayA/ICcxMDAlJyA6IG51bGxcbiAgICB9KTtcblxuICAgIHZhciBidXR0b25TdHlsZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBvbWl0dGVkKSwge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSk7XG5cbiAgICB2YXIgY2hpbGQgPSAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgIHN0eWxlOiBidXR0b25TdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgc3R5bGU6IHNwYW5TdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWQtY29tcGF0aWJsZS13cmFwcGVyXCIpKVxuICAgIH0sIGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG52YXIgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoISFwcm9wcy52aXNpYmxlIHx8ICEhcHJvcHMuZGVmYXVsdFZpc2libGUpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICB2aXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFZpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCd2aXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgc2V0VmlzaWJsZShwcm9wcy52aXNpYmxlKTtcbiAgICB9XG4gIH0sIFtwcm9wcy52aXNpYmxlXSk7XG5cbiAgdmFyIGlzTm9UaXRsZSA9IGZ1bmN0aW9uIGlzTm9UaXRsZSgpIHtcbiAgICB2YXIgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG4gICAgcmV0dXJuICF0aXRsZSAmJiAhb3ZlcmxheSAmJiB0aXRsZSAhPT0gMDsgLy8gb3ZlcmxheSBmb3Igb2xkIHZlcnNpb24gY29tcGF0aWJpbGl0eVxuICB9O1xuXG4gIHZhciBvblZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiBvblZpc2libGVDaGFuZ2UodmlzKSB7XG4gICAgaWYgKCEoJ3Zpc2libGUnIGluIHByb3BzKSkge1xuICAgICAgc2V0VmlzaWJsZShpc05vVGl0bGUoKSA/IGZhbHNlIDogdmlzKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMub25WaXNpYmxlQ2hhbmdlICYmICFpc05vVGl0bGUoKSkge1xuICAgICAgcHJvcHMub25WaXNpYmxlQ2hhbmdlKHZpcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRUb29sdGlwUGxhY2VtZW50cyA9IGZ1bmN0aW9uIGdldFRvb2x0aXBQbGFjZW1lbnRzKCkge1xuICAgIHZhciBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICBhcnJvd1BvaW50QXRDZW50ZXIgPSBwcm9wcy5hcnJvd1BvaW50QXRDZW50ZXIsXG4gICAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHByb3BzLmF1dG9BZGp1c3RPdmVyZmxvdztcbiAgICByZXR1cm4gYnVpbHRpblBsYWNlbWVudHMgfHwgKDAsIF9wbGFjZW1lbnRzW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgYXJyb3dQb2ludEF0Q2VudGVyOiBhcnJvd1BvaW50QXRDZW50ZXIsXG4gICAgICBhdXRvQWRqdXN0T3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvd1xuICAgIH0pO1xuICB9OyAvLyDliqjmgIHorr7nva7liqjnlLvngrlcblxuXG4gIHZhciBvblBvcHVwQWxpZ24gPSBmdW5jdGlvbiBvblBvcHVwQWxpZ24oZG9tTm9kZSwgYWxpZ24pIHtcbiAgICB2YXIgcGxhY2VtZW50cyA9IGdldFRvb2x0aXBQbGFjZW1lbnRzKCk7IC8vIOW9k+WJjei/lOWbnueahOS9jee9rlxuXG4gICAgdmFyIHBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHBsYWNlbWVudHMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gcGxhY2VtZW50c1trZXldLnBvaW50c1swXSA9PT0gYWxpZ24ucG9pbnRzWzBdICYmIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMV0gPT09IGFsaWduLnBvaW50c1sxXTtcbiAgICB9KVswXTtcblxuICAgIGlmICghcGxhY2VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyDmoLnmja7lvZPliY3lnZDmoIforr7nva7liqjnlLvngrlcblxuXG4gICAgdmFyIHJlY3QgPSBkb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgbGVmdDogJzUwJSdcbiAgICB9O1xuXG4gICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdCb3R0b20nKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gXCJcIi5jb25jYXQocmVjdC5oZWlnaHQgLSBhbGlnbi5vZmZzZXRbMV0sIFwicHhcIik7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZignVG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMV0sIFwicHhcIik7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdsZWZ0JykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignUmlnaHQnKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KHJlY3Qud2lkdGggLSBhbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZigncmlnaHQnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdMZWZ0JykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSBcIlwiLmNvbmNhdCgtYWxpZ24ub2Zmc2V0WzBdLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGRvbU5vZGUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJcIi5jb25jYXQodHJhbnNmb3JtT3JpZ2luLmxlZnQsIFwiIFwiKS5jb25jYXQodHJhbnNmb3JtT3JpZ2luLnRvcCk7XG4gIH07XG5cbiAgdmFyIGdldE92ZXJsYXkgPSBmdW5jdGlvbiBnZXRPdmVybGF5KCkge1xuICAgIHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheTtcblxuICAgIGlmICh0aXRsZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiBvdmVybGF5IHx8IHRpdGxlIHx8ICcnO1xuICB9O1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBvcGVuQ2xhc3NOYW1lID0gcHJvcHMub3BlbkNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBwcm9wcy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGU7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCd0b29sdGlwJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIHRlbXBWaXNpYmxlID0gdmlzaWJsZTsgLy8gSGlkZSB0b29sdGlwIHdoZW4gdGhlcmUgaXMgbm8gdGl0bGVcblxuICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpICYmIGlzTm9UaXRsZSgpKSB7XG4gICAgdGVtcFZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IGdldERpc2FibGVkQ29tcGF0aWJsZUNoaWxkcmVuKCgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbiksIHByZWZpeENscyk7XG4gIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7XG4gIHZhciBjaGlsZENscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNoaWxkUHJvcHMuY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIG9wZW5DbGFzc05hbWUgfHwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpLCB0cnVlKSk7XG4gIHZhciBjdXN0b21PdmVybGF5Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkob3ZlcmxheUNsYXNzTmFtZSwgKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChjb2xvciksIGNvbG9yICYmIFByZXNldENvbG9yUmVnZXgudGVzdChjb2xvcikpLCBfY2xhc3NOYW1lczIpKTtcbiAgdmFyIGZvcm1hdHRlZE92ZXJsYXlJbm5lclN0eWxlO1xuICB2YXIgYXJyb3dDb250ZW50U3R5bGU7XG5cbiAgaWYgKGNvbG9yICYmICFQcmVzZXRDb2xvclJlZ2V4LnRlc3QoY29sb3IpKSB7XG4gICAgZm9ybWF0dGVkT3ZlcmxheUlubmVyU3R5bGUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgb3ZlcmxheUlubmVyU3R5bGUpLCB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvclxuICAgIH0pO1xuICAgIGFycm93Q29udGVudFN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3JcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1Rvb2x0aXBbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiBjdXN0b21PdmVybGF5Q2xhc3NOYW1lLFxuICAgIGdldFRvb2x0aXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldFRvb2x0aXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgIHJlZjogcmVmLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBnZXRUb29sdGlwUGxhY2VtZW50cygpLFxuICAgIG92ZXJsYXk6IGdldE92ZXJsYXkoKSxcbiAgICB2aXNpYmxlOiB0ZW1wVmlzaWJsZSxcbiAgICBvblZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICBvblBvcHVwQWxpZ246IG9uUG9wdXBBbGlnbixcbiAgICBvdmVybGF5SW5uZXJTdHlsZTogZm9ybWF0dGVkT3ZlcmxheUlubmVyU3R5bGUsXG4gICAgYXJyb3dDb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFycm93LWNvbnRlbnRcIiksXG4gICAgICBzdHlsZTogYXJyb3dDb250ZW50U3R5bGVcbiAgICB9KVxuICB9KSwgdGVtcFZpc2libGUgPyAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgY2xhc3NOYW1lOiBjaGlsZENsc1xuICB9KSA6IGNoaWxkKTtcbn0pO1xuVG9vbHRpcC5kaXNwbGF5TmFtZSA9ICdUb29sdGlwJztcblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB0cmFuc2l0aW9uTmFtZTogJ3pvb20tYmlnLWZhc3QnLFxuICBtb3VzZUVudGVyRGVsYXk6IDAuMSxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGFycm93UG9pbnRBdENlbnRlcjogZmFsc2UsXG4gIGF1dG9BZGp1c3RPdmVyZmxvdzogdHJ1ZVxufTtcbnZhciBfZGVmYXVsdCA9IFRvb2x0aXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPdmVyZmxvd09wdGlvbnMgPSBnZXRPdmVyZmxvd09wdGlvbnM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFBsYWNlbWVudHM7XG5cbnZhciBfcGxhY2VtZW50cyA9IHJlcXVpcmUoXCJyYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZCA9IHtcbiAgYWRqdXN0WDogMCxcbiAgYWRqdXN0WTogMFxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmZ1bmN0aW9uIGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpIHtcbiAgaWYgKHR5cGVvZiBhdXRvQWRqdXN0T3ZlcmZsb3cgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBhdXRvQWRqdXN0T3ZlcmZsb3cgPyBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkIDogYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoX2V4dGVuZHMoe30sIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkKSwgYXV0b0FkanVzdE92ZXJmbG93KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50cyhjb25maWcpIHtcbiAgdmFyIF9jb25maWckYXJyb3dXaWR0aCA9IGNvbmZpZy5hcnJvd1dpZHRoLFxuICAgICAgYXJyb3dXaWR0aCA9IF9jb25maWckYXJyb3dXaWR0aCA9PT0gdm9pZCAwID8gNSA6IF9jb25maWckYXJyb3dXaWR0aCxcbiAgICAgIF9jb25maWckaG9yaXpvbnRhbEFyciA9IGNvbmZpZy5ob3Jpem9udGFsQXJyb3dTaGlmdCxcbiAgICAgIGhvcml6b250YWxBcnJvd1NoaWZ0ID0gX2NvbmZpZyRob3Jpem9udGFsQXJyID09PSB2b2lkIDAgPyAxNiA6IF9jb25maWckaG9yaXpvbnRhbEFycixcbiAgICAgIF9jb25maWckdmVydGljYWxBcnJvdyA9IGNvbmZpZy52ZXJ0aWNhbEFycm93U2hpZnQsXG4gICAgICB2ZXJ0aWNhbEFycm93U2hpZnQgPSBfY29uZmlnJHZlcnRpY2FsQXJyb3cgPT09IHZvaWQgMCA/IDggOiBfY29uZmlnJHZlcnRpY2FsQXJyb3csXG4gICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBjb25maWcuYXV0b0FkanVzdE92ZXJmbG93O1xuICB2YXIgcGxhY2VtZW50TWFwID0ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIDBdXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAwXVxuICAgIH0sXG4gICAgdG9wOiB7XG4gICAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWzAsIC00XVxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWzAsIDRdXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgLTRdXG4gICAgfSxcbiAgICBsZWZ0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydicicsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCAtNF1cbiAgICB9LFxuICAgIHJpZ2h0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIDRdXG4gICAgfSxcbiAgICByaWdodEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH0sXG4gICAgYm90dG9tTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIDRdXG4gICAgfSxcbiAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH1cbiAgfTtcbiAgT2JqZWN0LmtleXMocGxhY2VtZW50TWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBwbGFjZW1lbnRNYXBba2V5XSA9IGNvbmZpZy5hcnJvd1BvaW50QXRDZW50ZXIgPyBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgcGxhY2VtZW50TWFwW2tleV0pLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdyksXG4gICAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICAgIH0pIDogX2V4dGVuZHMoX2V4dGVuZHMoe30sIF9wbGFjZW1lbnRzLnBsYWNlbWVudHNba2V5XSksIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KVxuICAgIH0pO1xuICAgIHBsYWNlbWVudE1hcFtrZXldLmlnbm9yZVNoYWtlID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBwbGFjZW1lbnRNYXA7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgdmVuZG9yUHJlZml4O1xudmFyIGpzQ3NzTWFwID0ge1xuICBXZWJraXQ6ICctd2Via2l0LScsXG4gIE1vejogJy1tb3otJyxcbiAgLy8gSUUgZGlkIGl0IHdyb25nIGFnYWluIC4uLlxuICBtczogJy1tcy0nLFxuICBPOiAnLW8tJ1xufTtcblxuZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4KCkge1xuICBpZiAodmVuZG9yUHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmVuZG9yUHJlZml4O1xuICB9XG5cbiAgdmVuZG9yUHJlZml4ID0gJyc7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZTtcbiAgdmFyIHRlc3RQcm9wID0gJ1RyYW5zZm9ybSc7XG5cbiAgZm9yICh2YXIga2V5IGluIGpzQ3NzTWFwKSB7XG4gICAgaWYgKGtleSArIHRlc3RQcm9wIGluIHN0eWxlKSB7XG4gICAgICB2ZW5kb3JQcmVmaXggPSBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlbmRvclByZWZpeDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IFwiXCIuY29uY2F0KGdldFZlbmRvclByZWZpeCgpLCBcIlRyYW5zaXRpb25Qcm9wZXJ0eVwiKSA6ICd0cmFuc2l0aW9uUHJvcGVydHknO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBcIlwiLmNvbmNhdChnZXRWZW5kb3JQcmVmaXgoKSwgXCJUcmFuc2Zvcm1cIikgOiAndHJhbnNmb3JtJztcbn1cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zaXRpb25OYW1lKCk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zaXRpb25Qcm9wZXJ0eScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zZm9ybU5hbWUoKTtcblxuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgIGlmIChuYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8IG5vZGUuc3R5bGVbZ2V0VHJhbnNpdGlvbk5hbWUoKV07XG59XG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1YWShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuXG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgbWF0cml4ID0gdHJhbnNmb3JtLnJlcGxhY2UoL1teMC05XFwtLixdL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwYXJzZUZsb2F0KG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdLCAwKSxcbiAgICAgIHk6IHBhcnNlRmxvYXQobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0sIDApXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59XG52YXIgbWF0cml4MmQgPSAvbWF0cml4XFwoKC4qKVxcKS87XG52YXIgbWF0cml4M2QgPSAvbWF0cml4M2RcXCgoLiopXFwpLztcbmZ1bmN0aW9uIHNldFRyYW5zZm9ybVhZKG5vZGUsIHh5KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuXG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgYXJyO1xuICAgIHZhciBtYXRjaDJkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDJkKTtcblxuICAgIGlmIChtYXRjaDJkKSB7XG4gICAgICBtYXRjaDJkID0gbWF0Y2gyZFsxXTtcbiAgICAgIGFyciA9IG1hdGNoMmQuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbNF0gPSB4eS54O1xuICAgICAgYXJyWzVdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCBcIm1hdHJpeChcIi5jb25jYXQoYXJyLmpvaW4oJywnKSwgXCIpXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoM2QgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4M2QpWzFdO1xuICAgICAgYXJyID0gbWF0Y2gzZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFyclsxMl0gPSB4eS54O1xuICAgICAgYXJyWzEzXSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJtYXRyaXgzZChcIi5jb25jYXQoYXJyLmpvaW4oJywnKSwgXCIpXCIpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwidHJhbnNsYXRlWChcIi5jb25jYXQoeHkueCwgXCJweCkgdHJhbnNsYXRlWShcIikuY29uY2F0KHh5LnksIFwicHgpIHRyYW5zbGF0ZVooMClcIikpO1xuICB9XG59XG5cbnZhciBSRV9OVU0gPSAvW1xcLStdPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdW1xcLStdP1xcZCt8KS8uc291cmNlO1xudmFyIGdldENvbXB1dGVkU3R5bGVYOyAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzQ4NTY1NC8zMDQwNjA1XG5cbmZ1bmN0aW9uIGZvcmNlUmVsYXlvdXQoZWxlbSkge1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBlbGVtLm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsU3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgbmFtZSwgdikge1xuICB2YXIgdmFsdWUgPSB2O1xuXG4gIGlmIChfdHlwZW9mKG5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGkgaW4gbmFtZSkge1xuICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgY3NzKGVsLCBpLCBuYW1lW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWwsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3g7XG4gIHZhciB4O1xuICB2YXIgeTtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDsgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG5cbiAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7IC8vIEluIElFLCBtb3N0IG9mIHRoZSB0aW1lLCAyIGV4dHJhIHBpeGVscyBhcmUgYWRkZWQgdG8gdGhlIHRvcCBhbmQgbGVmdFxuICAvLyBkdWUgdG8gdGhlIGltcGxpY2l0IDItcGl4ZWwgaW5zZXQgYm9yZGVyLiAgSW4gSUU2LzcgcXVpcmtzIG1vZGUgYW5kXG4gIC8vIElFNiBzdGFuZGFyZHMgbW9kZSwgdGhpcyBib3JkZXIgY2FuIGJlIG92ZXJyaWRkZW4gYnkgc2V0dGluZyB0aGVcbiAgLy8gZG9jdW1lbnQgZWxlbWVudCdzIGJvcmRlciB0byB6ZXJvIC0tIHRodXMsIHdlIGNhbm5vdCByZWx5IG9uIHRoZVxuICAvLyBvZmZzZXQgYWx3YXlzIGJlaW5nIDIgcGl4ZWxzLlxuICAvLyBJbiBxdWlya3MgbW9kZSwgdGhlIG9mZnNldCBjYW4gYmUgZGV0ZXJtaW5lZCBieSBxdWVyeWluZyB0aGUgYm9keSdzXG4gIC8vIGNsaWVudExlZnQvY2xpZW50VG9wLCBidXQgaW4gc3RhbmRhcmRzIG1vZGUsIGl0IGlzIGZvdW5kIGJ5IHF1ZXJ5aW5nXG4gIC8vIHRoZSBkb2N1bWVudCBlbGVtZW50J3MgY2xpZW50TGVmdC9jbGllbnRUb3AuICBTaW5jZSB3ZSBhbHJlYWR5IGNhbGxlZFxuICAvLyBnZXRDbGllbnRCb3VuZGluZ1JlY3Qgd2UgaGF2ZSBhbHJlYWR5IGZvcmNlZCBhIHJlZmxvdywgc28gaXQgaXMgbm90XG4gIC8vIHRvbyBleHBlbnNpdmUganVzdCB0byBxdWVyeSB0aGVtIGFsbC5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1tcInBhZ2VcIi5jb25jYXQodG9wID8gJ1knIDogJ1gnLCBcIk9mZnNldFwiKV07XG4gIHZhciBtZXRob2QgPSBcInNjcm9sbFwiLmNvbmNhdCh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG5cbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50OyAvLyBpZTYsNyw4IHN0YW5kYXJkIG1vZGVcblxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG5cbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIHZhciBwb3MgPSBnZXRDbGllbnRQb3NpdGlvbihlbCk7XG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICB2YXIgdyA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICBwb3MubGVmdCArPSBnZXRTY3JvbGxMZWZ0KHcpO1xuICBwb3MudG9wICs9IGdldFNjcm9sbFRvcCh3KTtcbiAgcmV0dXJuIHBvcztcbn1cbi8qKlxuICogQSBjcnVkZSB3YXkgb2YgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IGlzIGEgd2luZG93XG4gKiBAbWVtYmVyIHV0aWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG5cbiAgLyogZXNsaW50IGVxZXFlcTowICovXG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50KG5vZGUpIHtcbiAgaWYgKGlzV2luZG93KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUuZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSwgbmFtZSwgY3MpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBjcztcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgZCA9IGdldERvY3VtZW50KGVsZW0pO1xuICBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZSB8fCBkLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG5cbiAgaWYgKGNvbXB1dGVkU3R5bGUpIHtcbiAgICB2YWwgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRTdHlsZVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBfUkVfTlVNX05PX1BYID0gbmV3IFJlZ0V4cChcIl4oXCIuY29uY2F0KFJFX05VTSwgXCIpKD8hcHgpW2EteiVdKyRcIiksICdpJyk7XG5cbnZhciBSRV9QT1MgPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgQ1VSUkVOVF9TVFlMRSA9ICdjdXJyZW50U3R5bGUnO1xudmFyIFJVTlRJTUVfU1RZTEUgPSAncnVudGltZVN0eWxlJztcbnZhciBMRUZUID0gJ2xlZnQnO1xudmFyIFBYID0gJ3B4JztcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGVJRShlbGVtLCBuYW1lKSB7XG4gIC8vIGN1cnJlbnRTdHlsZSBtYXliZSBudWxsXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNTIzMS5hc3B4XG4gIHZhciByZXQgPSBlbGVtW0NVUlJFTlRfU1RZTEVdICYmIGVsZW1bQ1VSUkVOVF9TVFlMRV1bbmFtZV07IC8vIOW9kyB3aWR0aC9oZWlnaHQg6K6+572u5Li655m+5YiG5q+U5pe277yM6YCa6L+HIHBpeGVsTGVmdCDmlrnlvI/ovazmjaLnmoQgd2lkdGgvaGVpZ2h0IOWAvFxuICAvLyDkuIDlvIDlp4vlsLHlpITnkIbkuoYhIENVU1RPTV9TVFlMRS5oZWlnaHQsQ1VTVE9NX1NUWUxFLndpZHRoICxjc3NIb29rIOino+WGs0AyMDExLTA4LTE5XG4gIC8vIOWcqCBpZSDkuIvkuI3lr7nvvIzpnIDopoHnm7TmjqXnlKggb2Zmc2V0IOaWueW8j1xuICAvLyBib3JkZXJXaWR0aCDnrYnlgLzkuZ/mnInpl67popjvvIzkvYbogIPomZHliLAgYm9yZGVyV2lkdGgg6K6+5Li655m+5YiG5q+U55qE5qaC546H5b6I5bCP77yM6L+Z6YeM5bCx5LiN6ICD6JmR5LqGXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuXG4gIGlmIChfUkVfTlVNX05PX1BYLnRlc3QocmV0KSAmJiAhUkVfUE9TLnRlc3QobmFtZSkpIHtcbiAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICB2YXIgbGVmdCA9IHN0eWxlW0xFRlRdO1xuICAgIHZhciByc0xlZnQgPSBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdOyAvLyBwcmV2ZW50IGZsYXNoaW5nIG9mIGNvbnRlbnRcblxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdOyAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cbiAgICBzdHlsZVtMRUZUXSA9IG5hbWUgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IHJldCB8fCAwO1xuICAgIHJldCA9IHN0eWxlLnBpeGVsTGVmdCArIFBYOyAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cbiAgICBzdHlsZVtMRUZUXSA9IGxlZnQ7XG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuXG4gIHJldHVybiByZXQgPT09ICcnID8gJ2F1dG8nIDogcmV0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZVggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IF9nZXRDb21wdXRlZFN0eWxlIDogX2dldENvbXB1dGVkU3R5bGVJRTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0RGlyZWN0aW9uKGRpciwgb3B0aW9uKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiBvcHRpb24udXNlQ3NzUmlnaHQgPyAncmlnaHQnIDogZGlyO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbi51c2VDc3NCb3R0b20gPyAnYm90dG9tJyA6IGRpcjtcbn1cblxuZnVuY3Rpb24gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oZGlyKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiAncmlnaHQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiAnbGVmdCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAndG9wJykge1xuICAgIHJldHVybiAnYm90dG9tJztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuICd0b3AnO1xuICB9XG59IC8vIOiuvue9riBlbGVtIOebuOWvuSBlbGVtLm93bmVyRG9jdW1lbnQg55qE5Z2Q5qCHXG5cblxuZnVuY3Rpb24gc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICAvLyBzZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG4gIGlmIChjc3MoZWxlbSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIH1cblxuICB2YXIgcHJlc2V0SCA9IC05OTk7XG4gIHZhciBwcmVzZXRWID0gLTk5OTtcbiAgdmFyIGhvcml6b250YWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbignbGVmdCcsIG9wdGlvbik7XG4gIHZhciB2ZXJ0aWNhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCd0b3AnLCBvcHRpb24pO1xuICB2YXIgb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihob3Jpem9udGFsUHJvcGVydHkpO1xuICB2YXIgb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24odmVydGljYWxQcm9wZXJ0eSk7XG5cbiAgaWYgKGhvcml6b250YWxQcm9wZXJ0eSAhPT0gJ2xlZnQnKSB7XG4gICAgcHJlc2V0SCA9IDk5OTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFByb3BlcnR5ICE9PSAndG9wJykge1xuICAgIHByZXNldFYgPSA5OTk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uID0gJyc7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcblxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBvcmlnaW5hbFRyYW5zaXRpb24gPSBnZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSkgfHwgJyc7XG4gICAgc2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0sICdub25lJyk7XG4gIH1cblxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVtob3Jpem9udGFsUHJvcGVydHldID0gXCJcIi5jb25jYXQocHJlc2V0SCwgXCJweFwiKTtcbiAgfVxuXG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlVmVydGljYWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW3ZlcnRpY2FsUHJvcGVydHldID0gXCJcIi5jb25jYXQocHJlc2V0ViwgXCJweFwiKTtcbiAgfSAvLyBmb3JjZSByZWxheW91dFxuXG5cbiAgZm9yY2VSZWxheW91dChlbGVtKTtcbiAgdmFyIG9sZCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKGtleSwgb3B0aW9uKTtcbiAgICAgIHZhciBwcmVzZXQgPSBrZXkgPT09ICdsZWZ0JyA/IHByZXNldEggOiBwcmVzZXRWO1xuICAgICAgdmFyIG9mZiA9IG9yaWdpbmFsT2Zmc2V0W2tleV0gLSBvbGRba2V5XTtcblxuICAgICAgaWYgKGRpciA9PT0ga2V5KSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCArIG9mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCAtIG9mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjc3MoZWxlbSwgb3JpZ2luYWxTdHlsZSk7IC8vIGZvcmNlIHJlbGF5b3V0XG5cbiAgZm9yY2VSZWxheW91dChlbGVtKTtcblxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgb3JpZ2luYWxUcmFuc2l0aW9uKTtcbiAgfVxuXG4gIHZhciByZXQgPSB7fTtcblxuICBmb3IgKHZhciBfa2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgIHZhciBfZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKF9rZXksIG9wdGlvbik7XG5cbiAgICAgIHZhciBfb2ZmID0gb2Zmc2V0W19rZXldIC0gb3JpZ2luYWxPZmZzZXRbX2tleV07XG5cbiAgICAgIGlmIChfa2V5ID09PSBfZGlyKSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gKyBfb2ZmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSAtIF9vZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3NzKGVsZW0sIHJldCk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybSQxKGVsZW0sIG9mZnNldCkge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFhZID0gZ2V0VHJhbnNmb3JtWFkoZWxlbSk7XG4gIHZhciByZXN1bHRYWSA9IHtcbiAgICB4OiBvcmlnaW5hbFhZLngsXG4gICAgeTogb3JpZ2luYWxYWS55XG4gIH07XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS54ID0gb3JpZ2luYWxYWS54ICsgb2Zmc2V0LmxlZnQgLSBvcmlnaW5hbE9mZnNldC5sZWZ0O1xuICB9XG5cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnkgPSBvcmlnaW5hbFhZLnkgKyBvZmZzZXQudG9wIC0gb3JpZ2luYWxPZmZzZXQudG9wO1xuICB9XG5cbiAgc2V0VHJhbnNmb3JtWFkoZWxlbSwgcmVzdWx0WFkpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgaWYgKG9wdGlvbi5pZ25vcmVTaGFrZSkge1xuICAgIHZhciBvcmlPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gICAgdmFyIG9MZWZ0ID0gb3JpT2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgb1RvcCA9IG9yaU9mZnNldC50b3AudG9GaXhlZCgwKTtcbiAgICB2YXIgdExlZnQgPSBvZmZzZXQubGVmdC50b0ZpeGVkKDApO1xuICAgIHZhciB0VG9wID0gb2Zmc2V0LnRvcC50b0ZpeGVkKDApO1xuXG4gICAgaWYgKG9MZWZ0ID09PSB0TGVmdCAmJiBvVG9wID09PSB0VG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbi51c2VDc3NSaWdodCB8fCBvcHRpb24udXNlQ3NzQm90dG9tKSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH0gZWxzZSBpZiAob3B0aW9uLnVzZUNzc1RyYW5zZm9ybSAmJiBnZXRUcmFuc2Zvcm1OYW1lKCkgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSkge1xuICAgIHNldFRyYW5zZm9ybSQxKGVsZW0sIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaChhcnIsIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4oYXJyW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0JvcmRlckJveEZuKGVsZW0pIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsZW0sICdib3hTaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xufVxuXG52YXIgQk9YX01PREVMUyA9IFsnbWFyZ2luJywgJ2JvcmRlcicsICdwYWRkaW5nJ107XG52YXIgQ09OVEVOVF9JTkRFWCA9IC0xO1xudmFyIFBBRERJTkdfSU5ERVggPSAyO1xudmFyIEJPUkRFUl9JTkRFWCA9IDE7XG52YXIgTUFSR0lOX0lOREVYID0gMDtcblxuZnVuY3Rpb24gc3dhcChlbGVtLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgb2xkID0ge307XG4gIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gIHZhciBuYW1lOyAvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcblxuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBvbGRbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgIHN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjay5jYWxsKGVsZW0pOyAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblxuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBzdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UEJNV2lkdGgoZWxlbSwgcHJvcHMsIHdoaWNoKSB7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciBwcm9wO1xuICB2YXIgajtcbiAgdmFyIGk7XG5cbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IHZvaWQgMDtcblxuICAgICAgICBpZiAocHJvcCA9PT0gJ2JvcmRlcicpIHtcbiAgICAgICAgICBjc3NQcm9wID0gXCJcIi5jb25jYXQocHJvcCkuY29uY2F0KHdoaWNoW2ldLCBcIldpZHRoXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV07XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIGNzc1Byb3ApKSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIGRvbVV0aWxzID0ge1xuICBnZXRQYXJlbnQ6IGZ1bmN0aW9uIGdldFBhcmVudChlbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudCA9IGVsZW1lbnQ7XG5cbiAgICBkbyB7XG4gICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSAmJiBwYXJlbnQuaG9zdCkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDEgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSA5KTtcblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH1cbn07XG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzW1wiZG9jXCIuY29uY2F0KG5hbWUpXSA9IGZ1bmN0aW9uIChyZWZXaW4pIHtcbiAgICB2YXIgZCA9IHJlZldpbi5kb2N1bWVudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbXCJzY3JvbGxcIi5jb25jYXQobmFtZSldLCAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVtcInNjcm9sbFwiLmNvbmNhdChuYW1lKV0sIGRvbVV0aWxzW1widmlld3BvcnRcIi5jb25jYXQobmFtZSldKGQpKTtcbiAgfTtcblxuICBkb21VdGlsc1tcInZpZXdwb3J0XCIuY29uY2F0KG5hbWUpXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gXCJjbGllbnRcIi5jb25jYXQobmFtZSk7XG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnRQcm9wID0gZG9jdW1lbnRFbGVtZW50W3Byb3BdOyAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuXG4gICAgcmV0dXJuIGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jdW1lbnRFbGVtZW50UHJvcCB8fCBib2R5ICYmIGJvZHlbcHJvcF0gfHwgZG9jdW1lbnRFbGVtZW50UHJvcDtcbiAgfTtcbn0pO1xuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuXG5mdW5jdGlvbiBnZXRXSChlbGVtLCBuYW1lLCBleCkge1xuICB2YXIgZXh0cmEgPSBleDtcblxuICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLnZpZXdwb3J0V2lkdGgoZWxlbSkgOiBkb21VdGlscy52aWV3cG9ydEhlaWdodChlbGVtKTtcbiAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy5kb2NXaWR0aChlbGVtKSA6IGRvbVV0aWxzLmRvY0hlaWdodChlbGVtKTtcbiAgfVxuXG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuICB2YXIgYm9yZGVyQm94VmFsdWUgPSBuYW1lID09PSAnd2lkdGgnID8gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICB2YXIgY3NzQm94VmFsdWUgPSAwO1xuXG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PT0gbnVsbCB8fCBib3JkZXJCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDsgLy8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW4gY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuXG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcblxuICAgIGlmIChjc3NCb3hWYWx1ZSA9PT0gbnVsbCB8fCBjc3NCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IE51bWJlcihjc3NCb3hWYWx1ZSkgPCAwKSB7XG4gICAgICBjc3NCb3hWYWx1ZSA9IGVsZW0uc3R5bGVbbmFtZV0gfHwgMDtcbiAgICB9IC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG5cblxuICAgIGNzc0JveFZhbHVlID0gcGFyc2VGbG9hdChjc3NCb3hWYWx1ZSkgfHwgMDtcbiAgfVxuXG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cblxuICB2YXIgYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94ID0gYm9yZGVyQm94VmFsdWUgIT09IHVuZGVmaW5lZCB8fCBpc0JvcmRlckJveDtcbiAgdmFyIHZhbCA9IGJvcmRlckJveFZhbHVlIHx8IGNzc0JveFZhbHVlO1xuXG4gIGlmIChleHRyYSA9PT0gQ09OVEVOVF9JTkRFWCkge1xuICAgIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICAgIHJldHVybiB2YWwgLSBnZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlcicsICdwYWRkaW5nJ10sIHdoaWNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgaWYgKGV4dHJhID09PSBCT1JERVJfSU5ERVgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbCArIChleHRyYSA9PT0gUEFERElOR19JTkRFWCA/IC1nZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlciddLCB3aGljaCkgOiBnZXRQQk1XaWR0aChlbGVtLCBbJ21hcmdpbiddLCB3aGljaCkpO1xuICB9XG5cbiAgcmV0dXJuIGNzc0JveFZhbHVlICsgZ2V0UEJNV2lkdGgoZWxlbSwgQk9YX01PREVMUy5zbGljZShleHRyYSksIHdoaWNoKTtcbn1cblxudmFyIGNzc1Nob3cgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTsgLy8gZml4ICMxMTkgOiBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xMTlcblxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW47IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgdmFsO1xuICB2YXIgZWxlbSA9IGFyZ3NbMF07IC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG5cbiAgaWYgKGVsZW0ub2Zmc2V0V2lkdGggIT09IDApIHtcbiAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmVhY2goWyd3aWR0aCcsICdoZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGZpcnN0ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG5cbiAgZG9tVXRpbHNbXCJvdXRlclwiLmNvbmNhdChmaXJzdCldID0gZnVuY3Rpb24gKGVsLCBpbmNsdWRlTWFyZ2luKSB7XG4gICAgcmV0dXJuIGVsICYmIGdldFdISWdub3JlRGlzcGxheShlbCwgbmFtZSwgaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9JTkRFWCA6IEJPUkRFUl9JTkRFWCk7XG4gIH07XG5cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG5cbiAgZG9tVXRpbHNbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgdikge1xuICAgIHZhciB2YWwgPSB2O1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuXG4gICAgICAgIGlmIChpc0JvcmRlckJveCkge1xuICAgICAgICAgIHZhbCArPSBnZXRQQk1XaWR0aChlbGVtLCBbJ3BhZGRpbmcnLCAnYm9yZGVyJ10sIHdoaWNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjc3MoZWxlbSwgbmFtZSwgdmFsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbSAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSwgbmFtZSwgQ09OVEVOVF9JTkRFWCk7XG4gIH07XG59KTtcblxuZnVuY3Rpb24gbWl4KHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGkgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0b1tpXSA9IGZyb21baV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG52YXIgdXRpbHMgPSB7XG4gIGdldFdpbmRvdzogZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmRvY3VtZW50ICYmIG5vZGUuc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgfSxcbiAgZ2V0RG9jdW1lbnQ6IGdldERvY3VtZW50LFxuICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChlbCwgdmFsdWUsIG9wdGlvbikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRPZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24gfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0T2Zmc2V0KGVsKTtcbiAgICB9XG4gIH0sXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHJldFtpXSA9IG9ialtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG5cbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIG1peDogbWl4LFxuICBnZXRXaW5kb3dTY3JvbGxMZWZ0OiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxMZWZ0KHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgfSxcbiAgZ2V0V2luZG93U2Nyb2xsVG9wOiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxUb3Aodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gIH0sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdXRpbHMubWl4KHJldCwgaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICB2aWV3cG9ydFdpZHRoOiAwLFxuICB2aWV3cG9ydEhlaWdodDogMFxufTtcbm1peCh1dGlscywgZG9tVXRpbHMpO1xuXG4vKipcbiAqIOW+l+WIsOS8muWvvOiHtOWFg+e0oOaYvuekuuS4jeWFqOeahOelluWFiOWFg+e0oFxuICovXG5cbnZhciBnZXRQYXJlbnQgPSB1dGlscy5nZXRQYXJlbnQ7XG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICh1dGlscy5pc1dpbmRvdyhlbGVtZW50KSB8fCBlbGVtZW50Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gaWUg6L+Z5Liq5Lmf5LiN5piv5a6M5YWo5Y+v6KGMXG5cbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcblxuXG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudDtcbiAgdmFyIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gIHZhciBza2lwU3RhdGljID0gcG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJyB8fCBwb3NpdGlvblN0eWxlID09PSAnYWJzb2x1dGUnO1xuXG4gIGlmICghc2tpcFN0YXRpYykge1xuICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJyA/IG51bGwgOiBnZXRQYXJlbnQoZWxlbWVudCk7XG4gIH1cblxuICBmb3IgKHBhcmVudCA9IGdldFBhcmVudChlbGVtZW50KTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keSAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDk7IHBhcmVudCA9IGdldFBhcmVudChwYXJlbnQpKSB7XG4gICAgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgIT09ICdzdGF0aWMnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgZ2V0UGFyZW50JDEgPSB1dGlscy5nZXRQYXJlbnQ7XG5mdW5jdGlvbiBpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudCA9IG51bGw7XG5cbiAgZm9yIChwYXJlbnQgPSBnZXRQYXJlbnQkMShlbGVtZW50KTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gZ2V0UGFyZW50JDEocGFyZW50KSkge1xuICAgIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIOiOt+W+l+WFg+e0oOeahOaYvuekuumDqOWIhueahOWMuuWfn1xuICovXG5cbmZ1bmN0aW9uIGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChlbGVtZW50LCBhbHdheXNCeVZpZXdwb3J0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiBJbmZpbml0eSxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiBJbmZpbml0eVxuICB9O1xuICB2YXIgZWwgPSBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbGVtZW50KTtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDsgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIHRoZSB2aXNpYmxlIHJlY3QgYnkgY2xpbWJpbmcgdGhlIGRvbSBhY2NvdW50aW5nIGZvclxuICAvLyBhbGwgc2Nyb2xsYWJsZSBjb250YWluZXJzLlxuXG4gIHdoaWxlIChlbCkge1xuICAgIC8vIGNsaWVudFdpZHRoIGlzIHplcm8gZm9yIGlubGluZSBibG9jayBlbGVtZW50cyBpbiBpZS5cbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID09PSAtMSB8fCBlbC5jbGllbnRXaWR0aCAhPT0gMCkgJiYgLy8gYm9keSBtYXkgaGF2ZSBvdmVyZmxvdyBzZXQgb24gaXQsIHlldCB3ZSBzdGlsbCBnZXQgdGhlIGVudGlyZVxuICAgIC8vIHZpZXdwb3J0LiBJbiBzb21lIGJyb3dzZXJzLCBlbC5vZmZzZXRQYXJlbnQgbWF5IGJlXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzbyBjaGVjayBmb3IgdGhhdCB0b28uXG4gICAgZWwgIT09IGJvZHkgJiYgZWwgIT09IGRvY3VtZW50RWxlbWVudCAmJiB1dGlscy5jc3MoZWwsICdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcbiAgICAgIHZhciBwb3MgPSB1dGlscy5vZmZzZXQoZWwpOyAvLyBhZGQgYm9yZGVyXG5cbiAgICAgIHBvcy5sZWZ0ICs9IGVsLmNsaWVudExlZnQ7XG4gICAgICBwb3MudG9wICs9IGVsLmNsaWVudFRvcDtcbiAgICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgcG9zLnRvcCk7XG4gICAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCAvLyBjb25zaWRlciBhcmVhIHdpdGhvdXQgc2Nyb2xsQmFyXG4gICAgICBwb3MubGVmdCArIGVsLmNsaWVudFdpZHRoKTtcbiAgICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgcG9zLnRvcCArIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgcG9zLmxlZnQpO1xuICAgIH0gZWxzZSBpZiAoZWwgPT09IGJvZHkgfHwgZWwgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWwgPSBnZXRPZmZzZXRQYXJlbnQoZWwpO1xuICB9IC8vIFNldCBlbGVtZW50IHBvc2l0aW9uIHRvIGZpeGVkXG4gIC8vIG1ha2Ugc3VyZSBhYnNvbHV0ZSBlbGVtZW50IGl0c2VsZiBkb24ndCBhZmZlY3QgaXQncyB2aXNpYmxlIGFyZWFcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzYwMVxuXG5cbiAgdmFyIG9yaWdpbmFsUG9zaXRpb24gPSBudWxsO1xuXG4gIGlmICghdXRpbHMuaXNXaW5kb3coZWxlbWVudCkgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9yaWdpbmFsUG9zaXRpb24gPSBlbGVtZW50LnN0eWxlLnBvc2l0aW9uO1xuICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcm9sbFggPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbik7XG4gIHZhciBzY3JvbGxZID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZhciB2aWV3cG9ydFdpZHRoID0gdXRpbHMudmlld3BvcnRXaWR0aCh3aW4pO1xuICB2YXIgdmlld3BvcnRIZWlnaHQgPSB1dGlscy52aWV3cG9ydEhlaWdodCh3aW4pO1xuICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgdmFyIGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDsgLy8gc2Nyb2xsWFhYIG9uIGh0bWwgaXMgc3luYyB3aXRoIGJvZHkgd2hpY2ggbWVhbnMgb3ZlcmZsb3c6IGhpZGRlbiBvbiBib2R5IGdldHMgd3Jvbmcgc2Nyb2xsWFhYLlxuICAvLyBXZSBzaG91bGQgY3V0IHRoaXMgb3Vyc2VsZi5cblxuICB2YXIgYm9keVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm9keSk7XG5cbiAgaWYgKGJvZHlTdHlsZS5vdmVyZmxvd1ggPT09ICdoaWRkZW4nKSB7XG4gICAgZG9jdW1lbnRXaWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICB9XG5cbiAgaWYgKGJvZHlTdHlsZS5vdmVyZmxvd1kgPT09ICdoaWRkZW4nKSB7XG4gICAgZG9jdW1lbnRIZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gIH0gLy8gUmVzZXQgZWxlbWVudCBwb3NpdGlvbiBhZnRlciBjYWxjdWxhdGUgdGhlIHZpc2libGUgYXJlYVxuXG5cbiAgaWYgKGVsZW1lbnQuc3R5bGUpIHtcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gb3JpZ2luYWxQb3NpdGlvbjtcbiAgfVxuXG4gIGlmIChhbHdheXNCeVZpZXdwb3J0IHx8IGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSkge1xuICAgIC8vIENsaXAgYnkgdmlld3BvcnQncyBzaXplLlxuICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHNjcm9sbFkpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2xpcCBieSBkb2N1bWVudCdzIHNpemUuXG4gICAgdmFyIG1heFZpc2libGVXaWR0aCA9IE1hdGgubWF4KGRvY3VtZW50V2lkdGgsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBtYXhWaXNpYmxlV2lkdGgpO1xuICAgIHZhciBtYXhWaXNpYmxlSGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnRIZWlnaHQsIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBtYXhWaXNpYmxlSGVpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlUmVjdC50b3AgPj0gMCAmJiB2aXNpYmxlUmVjdC5sZWZ0ID49IDAgJiYgdmlzaWJsZVJlY3QuYm90dG9tID4gdmlzaWJsZVJlY3QudG9wICYmIHZpc2libGVSZWN0LnJpZ2h0ID4gdmlzaWJsZVJlY3QubGVmdCA/IHZpc2libGVSZWN0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgb3ZlcmZsb3cpIHtcbiAgdmFyIHBvcyA9IHV0aWxzLmNsb25lKGVsRnV0dXJlUG9zKTtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IGVsUmVnaW9uLndpZHRoLFxuICAgIGhlaWdodDogZWxSZWdpb24uaGVpZ2h0XG4gIH07XG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0KSB7XG4gICAgcG9zLmxlZnQgPSB2aXNpYmxlUmVjdC5sZWZ0O1xuICB9IC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVXaWR0aCAmJiBwb3MubGVmdCA+PSB2aXNpYmxlUmVjdC5sZWZ0ICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgc2l6ZS53aWR0aCAtPSBwb3MubGVmdCArIHNpemUud2lkdGggLSB2aXNpYmxlUmVjdC5yaWdodDtcbiAgfSAvLyBSaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH0gLy8gVG9wIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wKSB7XG4gICAgcG9zLnRvcCA9IHZpc2libGVSZWN0LnRvcDtcbiAgfSAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cucmVzaXplSGVpZ2h0ICYmIHBvcy50b3AgPj0gdmlzaWJsZVJlY3QudG9wICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIHNpemUuaGVpZ2h0IC09IHBvcy50b3AgKyBzaXplLmhlaWdodCAtIHZpc2libGVSZWN0LmJvdHRvbTtcbiAgfSAvLyBCb3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5taXgocG9zLCBzaXplKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVnaW9uKG5vZGUpIHtcbiAgdmFyIG9mZnNldDtcbiAgdmFyIHc7XG4gIHZhciBoO1xuXG4gIGlmICghdXRpbHMuaXNXaW5kb3cobm9kZSkgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9mZnNldCA9IHV0aWxzLm9mZnNldChub2RlKTtcbiAgICB3ID0gdXRpbHMub3V0ZXJXaWR0aChub2RlKTtcbiAgICBoID0gdXRpbHMub3V0ZXJIZWlnaHQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHdpbiA9IHV0aWxzLmdldFdpbmRvdyhub2RlKTtcbiAgICBvZmZzZXQgPSB7XG4gICAgICBsZWZ0OiB1dGlscy5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbiksXG4gICAgICB0b3A6IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pXG4gICAgfTtcbiAgICB3ID0gdXRpbHMudmlld3BvcnRXaWR0aCh3aW4pO1xuICAgIGggPSB1dGlscy52aWV3cG9ydEhlaWdodCh3aW4pO1xuICB9XG5cbiAgb2Zmc2V0LndpZHRoID0gdztcbiAgb2Zmc2V0LmhlaWdodCA9IGg7XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbi8qKlxuICog6I635Y+WIG5vZGUg5LiK55qEIGFsaWduIOWvuem9kOeCuSDnm7jlr7nkuo7pobXpnaLnmoTlnZDmoIdcbiAqL1xuZnVuY3Rpb24gZ2V0QWxpZ25PZmZzZXQocmVnaW9uLCBhbGlnbikge1xuICB2YXIgViA9IGFsaWduLmNoYXJBdCgwKTtcbiAgdmFyIEggPSBhbGlnbi5jaGFyQXQoMSk7XG4gIHZhciB3ID0gcmVnaW9uLndpZHRoO1xuICB2YXIgaCA9IHJlZ2lvbi5oZWlnaHQ7XG4gIHZhciB4ID0gcmVnaW9uLmxlZnQ7XG4gIHZhciB5ID0gcmVnaW9uLnRvcDtcblxuICBpZiAoViA9PT0gJ2MnKSB7XG4gICAgeSArPSBoIC8gMjtcbiAgfSBlbHNlIGlmIChWID09PSAnYicpIHtcbiAgICB5ICs9IGg7XG4gIH1cblxuICBpZiAoSCA9PT0gJ2MnKSB7XG4gICAgeCArPSB3IC8gMjtcbiAgfSBlbHNlIGlmIChIID09PSAncicpIHtcbiAgICB4ICs9IHc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KSB7XG4gIHZhciBwMSA9IGdldEFsaWduT2Zmc2V0KHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHZhciBwMiA9IGdldEFsaWduT2Zmc2V0KGVsUmVnaW9uLCBwb2ludHNbMF0pO1xuICB2YXIgZGlmZiA9IFtwMi5sZWZ0IC0gcDEubGVmdCwgcDIudG9wIC0gcDEudG9wXTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBNYXRoLnJvdW5kKGVsUmVnaW9uLmxlZnQgLSBkaWZmWzBdICsgb2Zmc2V0WzBdIC0gdGFyZ2V0T2Zmc2V0WzBdKSxcbiAgICB0b3A6IE1hdGgucm91bmQoZWxSZWdpb24udG9wIC0gZGlmZlsxXSArIG9mZnNldFsxXSAtIHRhcmdldE9mZnNldFsxXSlcbiAgfTtcbn1cblxuLyoqXG4gKiBhbGlnbiBkb20gbm9kZSBmbGV4aWJseVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5mdW5jdGlvbiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0ID4gdmlzaWJsZVJlY3QucmlnaHQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoIDwgdmlzaWJsZVJlY3QubGVmdDtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA+IHZpc2libGVSZWN0LmJvdHRvbSB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPCB2aXNpYmxlUmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGZsaXAocG9pbnRzLCByZWcsIG1hcCkge1xuICB2YXIgcmV0ID0gW107XG4gIHV0aWxzLmVhY2gocG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgIHJldC5wdXNoKHAucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbWFwW21dO1xuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0LCBpbmRleCkge1xuICBvZmZzZXRbaW5kZXhdID0gLW9mZnNldFtpbmRleF07XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoc3RyLCBvZmZzZXRMZW4pIHtcbiAgdmFyIG47XG5cbiAgaWYgKC8lJC8udGVzdChzdHIpKSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpLCAxMCkgLyAxMDAgKiBvZmZzZXRMZW47XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ciwgMTApO1xuICB9XG5cbiAgcmV0dXJuIG4gfHwgMDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2Zmc2V0KG9mZnNldCwgZWwpIHtcbiAgb2Zmc2V0WzBdID0gY29udmVydE9mZnNldChvZmZzZXRbMF0sIGVsLndpZHRoKTtcbiAgb2Zmc2V0WzFdID0gY29udmVydE9mZnNldChvZmZzZXRbMV0sIGVsLmhlaWdodCk7XG59XG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHBhcmFtIHRndFJlZ2lvbiDlj4LnhafoioLngrnmiYDljaDnmoTljLrln586IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH1cbiAqIEBwYXJhbSBhbGlnblxuICovXG5cblxuZnVuY3Rpb24gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBhbGlnbiwgaXNUZ3RSZWdpb25WaXNpYmxlKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIG92ZXJmbG93ID0gYWxpZ24ub3ZlcmZsb3c7XG4gIHZhciBzb3VyY2UgPSBhbGlnbi5zb3VyY2UgfHwgZWw7XG4gIG9mZnNldCA9IFtdLmNvbmNhdChvZmZzZXQpO1xuICB0YXJnZXRPZmZzZXQgPSBbXS5jb25jYXQodGFyZ2V0T2Zmc2V0KTtcbiAgb3ZlcmZsb3cgPSBvdmVyZmxvdyB8fCB7fTtcbiAgdmFyIG5ld092ZXJmbG93Q2ZnID0ge307XG4gIHZhciBmYWlsID0gMDtcbiAgdmFyIGFsd2F5c0J5Vmlld3BvcnQgPSAhIShvdmVyZmxvdyAmJiBvdmVyZmxvdy5hbHdheXNCeVZpZXdwb3J0KTsgLy8g5b2T5YmN6IqC54K55Y+v5Lul6KKr5pS+572u55qE5pi+56S65Yy65Z+fXG5cbiAgdmFyIHZpc2libGVSZWN0ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KHNvdXJjZSwgYWx3YXlzQnlWaWV3cG9ydCk7IC8vIOW9k+WJjeiKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG5cbiAgdmFyIGVsUmVnaW9uID0gZ2V0UmVnaW9uKHNvdXJjZSk7IC8vIOWwhiBvZmZzZXQg6L2s5o2i5oiQ5pWw5YC877yM5pSv5oyB55m+5YiG5q+UXG5cbiAgbm9ybWFsaXplT2Zmc2V0KG9mZnNldCwgZWxSZWdpb24pO1xuICBub3JtYWxpemVPZmZzZXQodGFyZ2V0T2Zmc2V0LCB0Z3RSZWdpb24pOyAvLyDlvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cblxuICB2YXIgZWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTsgLy8g5b2T5YmN6IqC54K55bCG6KaB5omA5aSE55qE5Yy65Z+fXG5cbiAgdmFyIG5ld0VsUmVnaW9uID0gdXRpbHMubWVyZ2UoZWxSZWdpb24sIGVsRnV0dXJlUG9zKTsgLy8g5aaC5p6c5Y+v6KeG5Yy65Z+f5LiN6IO95a6M5YWo5pS+572u5b2T5YmN6IqC54K55pe25YWB6K646LCD5pW0XG5cbiAgaWYgKHZpc2libGVSZWN0ICYmIChvdmVyZmxvdy5hZGp1c3RYIHx8IG92ZXJmbG93LmFkanVzdFkpICYmIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RYKSB7XG4gICAgICAvLyDlpoLmnpzmqKrlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bbHJdL2dpLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTsgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG5cbiAgICAgICAgdmFyIG5ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld0VsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgbmV3UG9pbnRzLCBuZXdPZmZzZXQsIG5ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFgobmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBuZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IG5ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RZKSB7XG4gICAgICAvLyDlpoLmnpznurXlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgX25ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW3RiXS9naSwge1xuICAgICAgICAgIHQ6ICdiJyxcbiAgICAgICAgICBiOiAndCdcbiAgICAgICAgfSk7IC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuXG5cbiAgICAgICAgdmFyIF9uZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMSk7XG5cbiAgICAgICAgdmFyIF9uZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMSk7XG5cbiAgICAgICAgdmFyIF9uZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIF9uZXdQb2ludHMsIF9uZXdPZmZzZXQsIF9uZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxZKF9uZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IF9uZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gX25ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBfbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyDlpoLmnpzlpLHotKXvvIzph43mlrDorqHnrpflvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cblxuXG4gICAgaWYgKGZhaWwpIHtcbiAgICAgIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gICAgICB1dGlscy5taXgobmV3RWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdGlsbEZhaWxYID0gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcbiAgICB2YXIgaXNTdGlsbEZhaWxZID0gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTsgLy8g5qOA5p+l5Y+N5LiL5ZCO55qE5L2N572u5piv5ZCm5Y+v5Lul5pS+5LiL5LqG77yM5aaC5p6c5LuN54S25pS+5LiN5LiL77yaXG4gICAgLy8gMS4g5aSN5Y6f5L+u5pS56L+H55qE5a6a5L2N5Y+C5pWwXG5cbiAgICBpZiAoaXNTdGlsbEZhaWxYIHx8IGlzU3RpbGxGYWlsWSkge1xuICAgICAgdmFyIF9uZXdQb2ludHMyID0gcG9pbnRzOyAvLyDph43nva7lr7nlupTpg6jliIbnmoTnv7vovazpgLvovpFcblxuICAgICAgaWYgKGlzU3RpbGxGYWlsWCkge1xuICAgICAgICBfbmV3UG9pbnRzMiA9IGZsaXAocG9pbnRzLCAvW2xyXS9naSwge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0aWxsRmFpbFkpIHtcbiAgICAgICAgX25ld1BvaW50czIgPSBmbGlwKHBvaW50cywgL1t0Yl0vZ2ksIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBwb2ludHMgPSBfbmV3UG9pbnRzMjtcbiAgICAgIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gICAgICB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICAgIH0gLy8gMi4g5Y+q5pyJ5oyH5a6a5LqG5Y+v5Lul6LCD5pW05b2T5YmN5pa55ZCR5omN6LCD5pW0XG5cblxuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFggPSBvdmVyZmxvdy5hZGp1c3RYICYmIGlzU3RpbGxGYWlsWDtcbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZID0gb3ZlcmZsb3cuYWRqdXN0WSAmJiBpc1N0aWxsRmFpbFk7IC8vIOehruWunuimgeiwg+aVtO+8jOeUmuiHs+WPr+iDveS8muiwg+aVtOmrmOW6puWuveW6plxuXG4gICAgaWYgKG5ld092ZXJmbG93Q2ZnLmFkanVzdFggfHwgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSkge1xuICAgICAgbmV3RWxSZWdpb24gPSBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBuZXdPdmVyZmxvd0NmZyk7XG4gICAgfVxuICB9IC8vIG5lZWQganVkZ2UgdG8gaW4gY2FzZSBzZXQgZml4ZWQgd2l0aCBpbiBjc3Mgb24gaGVpZ2h0IGF1dG8gZWxlbWVudFxuXG5cbiAgaWYgKG5ld0VsUmVnaW9uLndpZHRoICE9PSBlbFJlZ2lvbi53aWR0aCkge1xuICAgIHV0aWxzLmNzcyhzb3VyY2UsICd3aWR0aCcsIHV0aWxzLndpZHRoKHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi53aWR0aCAtIGVsUmVnaW9uLndpZHRoKTtcbiAgfVxuXG4gIGlmIChuZXdFbFJlZ2lvbi5oZWlnaHQgIT09IGVsUmVnaW9uLmhlaWdodCkge1xuICAgIHV0aWxzLmNzcyhzb3VyY2UsICdoZWlnaHQnLCB1dGlscy5oZWlnaHQoc291cmNlKSArIG5ld0VsUmVnaW9uLmhlaWdodCAtIGVsUmVnaW9uLmhlaWdodCk7XG4gIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTkwXG4gIC8vIOebuOWvueS6juWxj+W5leS9jee9ruayoeWPmO+8jOiAjCBsZWZ0L3RvcCDlj5jkuoZcbiAgLy8g5L6L5aaCIDxkaXYgJ3JlbGF0aXZlJz48ZWwgYWJzb2x1dGU+PC9kaXY+XG5cblxuICB1dGlscy5vZmZzZXQoc291cmNlLCB7XG4gICAgbGVmdDogbmV3RWxSZWdpb24ubGVmdCxcbiAgICB0b3A6IG5ld0VsUmVnaW9uLnRvcFxuICB9LCB7XG4gICAgdXNlQ3NzUmlnaHQ6IGFsaWduLnVzZUNzc1JpZ2h0LFxuICAgIHVzZUNzc0JvdHRvbTogYWxpZ24udXNlQ3NzQm90dG9tLFxuICAgIHVzZUNzc1RyYW5zZm9ybTogYWxpZ24udXNlQ3NzVHJhbnNmb3JtLFxuICAgIGlnbm9yZVNoYWtlOiBhbGlnbi5pZ25vcmVTaGFrZVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwb2ludHM6IHBvaW50cyxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldCxcbiAgICBvdmVyZmxvdzogbmV3T3ZlcmZsb3dDZmdcbiAgfTtcbn1cbi8qKlxuICogIDIwMTItMDQtMjYgeWltaW5naGVAZ21haWwuY29tXG4gKiAgIC0g5LyY5YyW5pm66IO95a+56b2Q566X5rOVXG4gKiAgIC0g5oWO55SoIHJlc2l6ZVhYXG4gKlxuICogIDIwMTEtMDctMTMgeWltaW5naGVAZ21haWwuY29tIG5vdGU6XG4gKiAgIC0g5aKe5Yqg5pm66IO95a+56b2Q77yM5Lul5Y+K5aSn5bCP6LCD5pW06YCJ6aG5XG4gKiovXG5cbmZ1bmN0aW9uIGlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQsIGFsd2F5c0J5Vmlld3BvcnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KHRhcmdldCwgYWx3YXlzQnlWaWV3cG9ydCk7XG4gIHZhciB0YXJnZXRSZWdpb24gPSBnZXRSZWdpb24odGFyZ2V0KTtcbiAgcmV0dXJuICF2aXNpYmxlUmVjdCB8fCB0YXJnZXRSZWdpb24ubGVmdCArIHRhcmdldFJlZ2lvbi53aWR0aCA8PSB2aXNpYmxlUmVjdC5sZWZ0IHx8IHRhcmdldFJlZ2lvbi50b3AgKyB0YXJnZXRSZWdpb24uaGVpZ2h0IDw9IHZpc2libGVSZWN0LnRvcCB8fCB0YXJnZXRSZWdpb24ubGVmdCA+PSB2aXNpYmxlUmVjdC5yaWdodCB8fCB0YXJnZXRSZWdpb24udG9wID49IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gYWxpZ25FbGVtZW50KGVsLCByZWZOb2RlLCBhbGlnbikge1xuICB2YXIgdGFyZ2V0ID0gYWxpZ24udGFyZ2V0IHx8IHJlZk5vZGU7XG4gIHZhciByZWZOb2RlUmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG4gIHZhciBpc1RhcmdldE5vdE91dE9mVmlzaWJsZSA9ICFpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0LCBhbGlnbi5vdmVyZmxvdyAmJiBhbGlnbi5vdmVyZmxvdy5hbHdheXNCeVZpZXdwb3J0KTtcbiAgcmV0dXJuIGRvQWxpZ24oZWwsIHJlZk5vZGVSZWdpb24sIGFsaWduLCBpc1RhcmdldE5vdE91dE9mVmlzaWJsZSk7XG59XG5cbmFsaWduRWxlbWVudC5fX2dldE9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudDtcbmFsaWduRWxlbWVudC5fX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudDtcblxuLyoqXG4gKiBgdGd0UG9pbnRgOiB7IHBhZ2VYLCBwYWdlWSB9IG9yIHsgY2xpZW50WCwgY2xpZW50WSB9LlxuICogSWYgY2xpZW50IHBvc2l0aW9uIHByb3ZpZGVkLCB3aWxsIGludGVybmFsIGNvbnZlcnQgdG8gcGFnZSBwb3NpdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBhbGlnblBvaW50KGVsLCB0Z3RQb2ludCwgYWxpZ24pIHtcbiAgdmFyIHBhZ2VYO1xuICB2YXIgcGFnZVk7XG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIHNjcm9sbFggPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbik7XG4gIHZhciBzY3JvbGxZID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZhciB2aWV3cG9ydFdpZHRoID0gdXRpbHMudmlld3BvcnRXaWR0aCh3aW4pO1xuICB2YXIgdmlld3BvcnRIZWlnaHQgPSB1dGlscy52aWV3cG9ydEhlaWdodCh3aW4pO1xuXG4gIGlmICgncGFnZVgnIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVggPSB0Z3RQb2ludC5wYWdlWDtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWCA9IHNjcm9sbFggKyB0Z3RQb2ludC5jbGllbnRYO1xuICB9XG5cbiAgaWYgKCdwYWdlWScgaW4gdGd0UG9pbnQpIHtcbiAgICBwYWdlWSA9IHRndFBvaW50LnBhZ2VZO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VZID0gc2Nyb2xsWSArIHRndFBvaW50LmNsaWVudFk7XG4gIH1cblxuICB2YXIgdGd0UmVnaW9uID0ge1xuICAgIGxlZnQ6IHBhZ2VYLFxuICAgIHRvcDogcGFnZVksXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG4gIHZhciBwb2ludEluVmlldyA9IHBhZ2VYID49IDAgJiYgcGFnZVggPD0gc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGggJiYgcGFnZVkgPj0gMCAmJiBwYWdlWSA8PSBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQ7IC8vIFByb3ZpZGUgZGVmYXVsdCB0YXJnZXQgcG9pbnRcblxuICB2YXIgcG9pbnRzID0gW2FsaWduLnBvaW50c1swXSwgJ2NjJ107XG4gIHJldHVybiBkb0FsaWduKGVsLCB0Z3RSZWdpb24sIF9vYmplY3RTcHJlYWQyKHt9LCBhbGlnbiwge1xuICAgIHBvaW50czogcG9pbnRzXG4gIH0pLCBwb2ludEluVmlldyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsaWduRWxlbWVudDtcbmV4cG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgTWluaVN0b3JlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgUHJvdmlkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb3ZpZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNaW5pU3RvcmVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0aGlzLnByb3BzLnN0b3JlIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBQcm92aWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnQgeyBQcm92aWRlciB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBNaW5pU3RvcmVDb250ZXh0IH0gZnJvbSAnLi9Qcm92aWRlcic7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxudmFyIGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe30pOyB9O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgc2hvdWxkU3Vic2NyaWJlID0gISFtYXBTdGF0ZVRvUHJvcHM7XG4gICAgdmFyIGZpbmFsTWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzIHx8IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBXaXRoQ29ubmVjdChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBDb25uZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICAgICAgX19leHRlbmRzKENvbm5lY3QsIF9zdXBlcik7XG4gICAgICAgICAgICBmdW5jdGlvbiBDb25uZWN0KHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSBmaW5hbE1hcFN0YXRlVG9Qcm9wcyhfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLCBfdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgc3Vic2NyaWJlZDogbmV4dFN0YXRlIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcmUgPSBfdGhpcy5jb250ZXh0O1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVkOiBmaW5hbE1hcFN0YXRlVG9Qcm9wcyhfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLCBwcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiBfdGhpcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ29ubmVjdC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIG93blByb3BzXG4gICAgICAgICAgICAgICAgaWYgKG1hcFN0YXRlVG9Qcm9wcyAmJiBtYXBTdGF0ZVRvUHJvcHMubGVuZ3RoID09PSAyICYmIHByb3BzICE9PSBwcmV2U3RhdGUucHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWQ6IGZpbmFsTWFwU3RhdGVUb1Byb3BzKHByZXZTdGF0ZS5zdG9yZS5nZXRTdGF0ZSgpLCBwcm9wcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHByb3BzOiBwcm9wcyB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5U3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8XG4gICAgICAgICAgICAgICAgICAgICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZS5zdWJzY3JpYmVkLCBuZXh0U3RhdGUuc3Vic2NyaWJlZCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5wcm9wcyksIHRoaXMuc3RhdGUuc3Vic2NyaWJlZCksIHsgc3RvcmU6IHRoaXMuc3RvcmUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX19hc3NpZ24oe30sIHByb3BzLCB7IHJlZjogdGhpcy5wcm9wcy5taW5pU3RvcmVGb3J3YXJkZWRSZWYgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBcIkNvbm5lY3QoXCIgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArIFwiKVwiO1xuICAgICAgICAgICAgQ29ubmVjdC5jb250ZXh0VHlwZSA9IE1pbmlTdG9yZUNvbnRleHQ7XG4gICAgICAgICAgICByZXR1cm4gQ29ubmVjdDtcbiAgICAgICAgfShSZWFjdC5Db21wb25lbnQpKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZm9yd2FyZFJlZikge1xuICAgICAgICAgICAgdmFyIGZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgbWluaVN0b3JlRm9yd2FyZGVkUmVmOiByZWYgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaG9pc3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9O1xufVxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXRTdGF0ZShwYXJ0aWFsKSB7XG4gICAgICAgIHN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlKSwgcGFydGlhbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIH07XG59XG4iLCJleHBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vUHJvdmlkZXInO1xuZXhwb3J0IHsgY29ubmVjdCB9IGZyb20gJy4vY29ubmVjdCc7XG5leHBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL2NyZWF0ZSc7XG4iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcblxuLyoqXG4gKiBSZW1vdmVkIHByb3BzOlxuICogIC0gY2hpbGRyZW5Qcm9wc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IHsgYWxpZ25FbGVtZW50LCBhbGlnblBvaW50IH0gZnJvbSAnZG9tLWFsaWduJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBpc1NhbWVQb2ludCwgcmVzdG9yZUZvY3VzLCBtb25pdG9yUmVzaXplIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB1c2VCdWZmZXIgZnJvbSAnLi9ob29rcy91c2VCdWZmZXInO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGZ1bmMpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZ1bmMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnQocG9pbnQpIHtcbiAgaWYgKF90eXBlb2YocG9pbnQpICE9PSAnb2JqZWN0JyB8fCAhcG9pbnQpIHJldHVybiBudWxsO1xuICByZXR1cm4gcG9pbnQ7XG59XG5cbnZhciBBbGlnbiA9IGZ1bmN0aW9uIEFsaWduKF9yZWYsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICBhbGlnbiA9IF9yZWYuYWxpZ24sXG4gICAgICBvbkFsaWduID0gX3JlZi5vbkFsaWduLFxuICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZSA9IF9yZWYubW9uaXRvcldpbmRvd1Jlc2l6ZSxcbiAgICAgIF9yZWYkbW9uaXRvckJ1ZmZlclRpbSA9IF9yZWYubW9uaXRvckJ1ZmZlclRpbWUsXG4gICAgICBtb25pdG9yQnVmZmVyVGltZSA9IF9yZWYkbW9uaXRvckJ1ZmZlclRpbSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkbW9uaXRvckJ1ZmZlclRpbTtcbiAgdmFyIGNhY2hlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGNoaWxkTm9kZSA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gQWxpZ24gPT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBXZSBzYXZlIHRoZSBwcm9wcyBoZXJlIHRvIGF2b2lkIGNsb3N1cmUgbWFrZXMgcHJvcHMgb29kXG5cbiAgdmFyIGZvcmNlQWxpZ25Qcm9wc1JlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50LnRhcmdldCA9IHRhcmdldDtcbiAgZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQub25BbGlnbiA9IG9uQWxpZ247XG5cbiAgdmFyIF91c2VCdWZmZXIgPSB1c2VCdWZmZXIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZm9yY2VBbGlnblByb3BzUmVmJGMgPSBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudCxcbiAgICAgICAgbGF0ZXN0RGlzYWJsZWQgPSBfZm9yY2VBbGlnblByb3BzUmVmJGMuZGlzYWJsZWQsXG4gICAgICAgIGxhdGVzdFRhcmdldCA9IF9mb3JjZUFsaWduUHJvcHNSZWYkYy50YXJnZXQ7XG5cbiAgICBpZiAoIWxhdGVzdERpc2FibGVkICYmIGxhdGVzdFRhcmdldCkge1xuICAgICAgdmFyIHNvdXJjZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQobGF0ZXN0VGFyZ2V0KTtcbiAgICAgIHZhciBwb2ludCA9IGdldFBvaW50KGxhdGVzdFRhcmdldCk7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY2FjaGVSZWYuY3VycmVudC5wb2ludCA9IHBvaW50OyAvLyBJRSBsb3NlIGZvY3VzIGFmdGVyIGVsZW1lbnQgcmVhbGlnblxuICAgICAgLy8gV2Ugc2hvdWxkIHJlY29yZCBhY3RpdmVFbGVtZW50IGFuZCByZXN0b3JlIGxhdGVyXG5cbiAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJlc3VsdCA9IGFsaWduRWxlbWVudChzb3VyY2UsIGVsZW1lbnQsIGFsaWduKTtcbiAgICAgIH0gZWxzZSBpZiAocG9pbnQpIHtcbiAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBzb3VyY2UpO1xuXG4gICAgICBpZiAob25BbGlnbikge1xuICAgICAgICBvbkFsaWduKHNvdXJjZSwgcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LCBtb25pdG9yQnVmZmVyVGltZSksXG4gICAgICBfdXNlQnVmZmVyMiA9IF9zbGljZWRUb0FycmF5KF91c2VCdWZmZXIsIDIpLFxuICAgICAgX2ZvcmNlQWxpZ24gPSBfdXNlQnVmZmVyMlswXSxcbiAgICAgIGNhbmNlbEZvcmNlQWxpZ24gPSBfdXNlQnVmZmVyMlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTGlzdGVuIGZvciB0YXJnZXQgdXBkYXRlZFxuXG5cbiAgdmFyIHJlc2l6ZU1vbml0b3IgPSBSZWFjdC51c2VSZWYoe1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge31cbiAgfSk7IC8vIExpc3RlbiBmb3Igc291cmNlIHVwZGF0ZWRcblxuICB2YXIgc291cmNlUmVzaXplTW9uaXRvciA9IFJlYWN0LnVzZVJlZih7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7fVxuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCh0YXJnZXQpO1xuXG4gICAgaWYgKG5vZGVSZWYuY3VycmVudCAhPT0gc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQpIHtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCA9IG1vbml0b3JSZXNpemUobm9kZVJlZi5jdXJyZW50LCBfZm9yY2VBbGlnbik7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQuZWxlbWVudCAhPT0gZWxlbWVudCB8fCAhaXNTYW1lUG9pbnQoY2FjaGVSZWYuY3VycmVudC5wb2ludCwgcG9pbnQpKSB7XG4gICAgICBfZm9yY2VBbGlnbigpOyAvLyBBZGQgcmVzaXplIG9ic2VydmVyXG5cblxuICAgICAgaWYgKHJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsID0gbW9uaXRvclJlc2l6ZShlbGVtZW50LCBfZm9yY2VBbGlnbik7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gTGlzdGVuIGZvciBkaXNhYmxlZCBjaGFuZ2VcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIF9mb3JjZUFsaWduKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEZvcmNlQWxpZ24oKTtcbiAgICB9XG4gIH0sIFtkaXNhYmxlZF0pOyAvLyBMaXN0ZW4gZm9yIHdpbmRvdyByZXNpemVcblxuICB2YXIgd2luUmVzaXplUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb25pdG9yV2luZG93UmVzaXplKSB7XG4gICAgICBpZiAoIXdpblJlc2l6ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50ID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBfZm9yY2VBbGlnbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aW5SZXNpemVSZWYuY3VycmVudCkge1xuICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICB3aW5SZXNpemVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9LCBbbW9uaXRvcldpbmRvd1Jlc2l6ZV0pOyAvLyBDbGVhciBhbGwgaWYgdW5tb3VudFxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIGlmICh3aW5SZXNpemVSZWYuY3VycmVudCkgd2luUmVzaXplUmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICBjYW5jZWxGb3JjZUFsaWduKCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmNlQWxpZ246IGZ1bmN0aW9uIGZvcmNlQWxpZ24oKSB7XG4gICAgICAgIHJldHVybiBfZm9yY2VBbGlnbih0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGROb2RlKSkge1xuICAgIGNoaWxkTm9kZSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUsIHtcbiAgICAgIHJlZjogY29tcG9zZVJlZihjaGlsZE5vZGUucmVmLCBub2RlUmVmKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTm9kZTtcbn07XG5cbnZhciBSZWZBbGlnbiA9IFJlYWN0LmZvcndhcmRSZWYoQWxpZ24pO1xuUmVmQWxpZ24uZGlzcGxheU5hbWUgPSAnQWxpZ24nO1xuZXhwb3J0IGRlZmF1bHQgUmVmQWxpZ247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoY2FsbGJhY2ssIGJ1ZmZlcikge1xuICB2YXIgY2FsbGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gY2FuY2VsVHJpZ2dlcigpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGZvcmNlKSB7XG4gICAgaWYgKCFjYWxsZWRSZWYuY3VycmVudCB8fCBmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIE5vdCBkZWxheSBzaW5jZSBjYWxsYmFjayBjYW5jZWxsZWQgc2VsZlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH0sIGJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgfSwgYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3RyaWdnZXIsIGZ1bmN0aW9uICgpIHtcbiAgICBjYWxsZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgfV07XG59KTsiLCIvLyBleHBvcnQgdGhpcyBwYWNrYWdlJ3MgYXBpXG5pbXBvcnQgQWxpZ24gZnJvbSAnLi9BbGlnbic7XG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jb250YWluc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVBvaW50KHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG5leHQpIHJldHVybiB0cnVlO1xuICBpZiAoIXByZXYgfHwgIW5leHQpIHJldHVybiBmYWxzZTtcblxuICBpZiAoJ3BhZ2VYJyBpbiBuZXh0ICYmICdwYWdlWScgaW4gbmV4dCkge1xuICAgIHJldHVybiBwcmV2LnBhZ2VYID09PSBuZXh0LnBhZ2VYICYmIHByZXYucGFnZVkgPT09IG5leHQucGFnZVk7XG4gIH1cblxuICBpZiAoJ2NsaWVudFgnIGluIG5leHQgJiYgJ2NsaWVudFknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5jbGllbnRYID09PSBuZXh0LmNsaWVudFggJiYgcHJldi5jbGllbnRZID09PSBuZXh0LmNsaWVudFk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZUZvY3VzKGFjdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAvLyBGb2N1cyBiYWNrIGlmIGlzIGluIHRoZSBjb250YWluZXJcbiAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgY29udGFpbnMoY29udGFpbmVyLCBhY3RpdmVFbGVtZW50KSkge1xuICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vbml0b3JSZXNpemUoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgdmFyIHByZXZXaWR0aCA9IG51bGw7XG4gIHZhciBwcmV2SGVpZ2h0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBvblJlc2l6ZShfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMSksXG4gICAgICAgIHRhcmdldCA9IF9yZWYyWzBdLnRhcmdldDtcblxuICAgIHZhciBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wuaGVpZ2h0O1xuXG4gICAgdmFyIGZpeGVkV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICB2YXIgZml4ZWRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XG5cbiAgICBpZiAocHJldldpZHRoICE9PSBmaXhlZFdpZHRoIHx8IHByZXZIZWlnaHQgIT09IGZpeGVkSGVpZ2h0KSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGZpeGVkSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2V2lkdGggPSBmaXhlZFdpZHRoO1xuICAgIHByZXZIZWlnaHQgPSBmaXhlZEhlaWdodDtcbiAgfVxuXG4gIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihvblJlc2l6ZSk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH07XG59IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZWZhdWx0LXByb3BzLW1hdGNoLXByb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAsIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSAncmMtdXRpbC9lcy9Eb20vZmluZERPTU5vZGUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9uTmFtZSwgYW5pbWF0aW9uRW5kTmFtZSwgdHJhbnNpdGlvbkVuZE5hbWUsIHN1cHBvcnRUcmFuc2l0aW9uIH0gZnJvbSAnLi91dGlsL21vdGlvbic7XG5cbnZhciBTVEFUVVNfTk9ORSA9ICdub25lJztcbnZhciBTVEFUVVNfQVBQRUFSID0gJ2FwcGVhcic7XG52YXIgU1RBVFVTX0VOVEVSID0gJ2VudGVyJztcbnZhciBTVEFUVVNfTEVBVkUgPSAnbGVhdmUnO1xuXG4vKipcbiAqIGB0cmFuc2l0aW9uU3VwcG9ydGAgaXMgdXNlZCBmb3Igbm9uZSB0cmFuc2l0aW9uIHRlc3QgY2FzZS5cbiAqIERlZmF1bHQgd2UgdXNlIGJyb3dzZXIgdHJhbnNpdGlvbiBldmVudCBzdXBwb3J0IGNoZWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuQ1NTTW90aW9uKGNvbmZpZykge1xuICB2YXIgdHJhbnNpdGlvblN1cHBvcnQgPSBjb25maWc7XG4gIHZhciBmb3J3YXJkUmVmID0gISFSZWFjdC5mb3J3YXJkUmVmO1xuXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHRyYW5zaXRpb25TdXBwb3J0ID0gY29uZmlnLnRyYW5zaXRpb25TdXBwb3J0O1xuICAgIGZvcndhcmRSZWYgPSAnZm9yd2FyZFJlZicgaW4gY29uZmlnID8gY29uZmlnLmZvcndhcmRSZWYgOiBmb3J3YXJkUmVmO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdXBwb3J0VHJhbnNpdGlvbihwcm9wcykge1xuICAgIHJldHVybiAhIShwcm9wcy5tb3Rpb25OYW1lICYmIHRyYW5zaXRpb25TdXBwb3J0KTtcbiAgfVxuXG4gIHZhciBDU1NNb3Rpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDU1NNb3Rpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ1NTTW90aW9uKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU01vdGlvbik7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDU1NNb3Rpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDU1NNb3Rpb24pKS5jYWxsKHRoaXMpKTtcblxuICAgICAgX3RoaXMub25Eb21VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgICAgc3RhdHVzID0gX3RoaXMkc3RhdGUuc3RhdHVzLFxuICAgICAgICAgICAgbmV3U3RhdHVzID0gX3RoaXMkc3RhdGUubmV3U3RhdHVzO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uQXBwZWFyU3RhcnQgPSBfdGhpcyRwcm9wcy5vbkFwcGVhclN0YXJ0LFxuICAgICAgICAgICAgb25FbnRlclN0YXJ0ID0gX3RoaXMkcHJvcHMub25FbnRlclN0YXJ0LFxuICAgICAgICAgICAgb25MZWF2ZVN0YXJ0ID0gX3RoaXMkcHJvcHMub25MZWF2ZVN0YXJ0LFxuICAgICAgICAgICAgb25BcHBlYXJBY3RpdmUgPSBfdGhpcyRwcm9wcy5vbkFwcGVhckFjdGl2ZSxcbiAgICAgICAgICAgIG9uRW50ZXJBY3RpdmUgPSBfdGhpcyRwcm9wcy5vbkVudGVyQWN0aXZlLFxuICAgICAgICAgICAgb25MZWF2ZUFjdGl2ZSA9IF90aGlzJHByb3BzLm9uTGVhdmVBY3RpdmUsXG4gICAgICAgICAgICBtb3Rpb25BcHBlYXIgPSBfdGhpcyRwcm9wcy5tb3Rpb25BcHBlYXIsXG4gICAgICAgICAgICBtb3Rpb25FbnRlciA9IF90aGlzJHByb3BzLm1vdGlvbkVudGVyLFxuICAgICAgICAgICAgbW90aW9uTGVhdmUgPSBfdGhpcyRwcm9wcy5tb3Rpb25MZWF2ZTtcblxuXG4gICAgICAgIGlmICghaXNTdXBwb3J0VHJhbnNpdGlvbihfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFdmVudCBpbmplY3Rpb25cbiAgICAgICAgdmFyICRlbGUgPSBfdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIGlmIChfdGhpcy4kY2FjaGVFbGUgIT09ICRlbGUpIHtcbiAgICAgICAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKF90aGlzLiRjYWNoZUVsZSk7XG4gICAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcigkZWxlKTtcbiAgICAgICAgICBfdGhpcy4kY2FjaGVFbGUgPSAkZWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBzdGF0dXNcbiAgICAgICAgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgbW90aW9uQXBwZWFyKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uQXBwZWFyU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkFwcGVhckFjdGl2ZSwgU1RBVFVTX0FQUEVBUik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdHVzICYmIHN0YXR1cyA9PT0gU1RBVFVTX0VOVEVSICYmIG1vdGlvbkVudGVyKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uRW50ZXJTdGFydCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQWN0aXZlU3RhdHVzKG9uRW50ZXJBY3RpdmUsIFNUQVRVU19FTlRFUik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdHVzICYmIHN0YXR1cyA9PT0gU1RBVFVTX0xFQVZFICYmIG1vdGlvbkxlYXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uTGVhdmVTdGFydCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQWN0aXZlU3RhdHVzKG9uTGVhdmVBY3RpdmUsIFNUQVRVU19MRUFWRSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW90aW9uRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlMi5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNBY3RpdmUgPSBfdGhpcyRzdGF0ZTIuc3RhdHVzQWN0aXZlO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkFwcGVhckVuZCA9IF90aGlzJHByb3BzMi5vbkFwcGVhckVuZCxcbiAgICAgICAgICAgIG9uRW50ZXJFbmQgPSBfdGhpcyRwcm9wczIub25FbnRlckVuZCxcbiAgICAgICAgICAgIG9uTGVhdmVFbmQgPSBfdGhpcyRwcm9wczIub25MZWF2ZUVuZDtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIHN0YXR1c0FjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkFwcGVhckVuZCwgeyBzdGF0dXM6IFNUQVRVU19OT05FIH0sIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiBzdGF0dXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25FbnRlckVuZCwgeyBzdGF0dXM6IFNUQVRVU19OT05FIH0sIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBzdGF0dXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25MZWF2ZUVuZCwgeyBzdGF0dXM6IFNUQVRVU19OT05FIH0sIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0Tm9kZVJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBpbnRlcm5hbFJlZiA9IF90aGlzLnByb3BzLmludGVybmFsUmVmO1xuXG4gICAgICAgIF90aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaW50ZXJuYWxSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlZihub2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcm5hbFJlZiAmJiAnY3VycmVudCcgaW4gaW50ZXJuYWxSZWYpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZmluZERPTU5vZGUoX3RoaXMubm9kZSB8fCBfdGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGYWxsYmFjayB0byBjYWNoZSBlbGVtZW50LlxuICAgICAgICAgICAqIFRoaXMgaXMgb25seSBoYXBwZW4gd2hlbiBgbW90aW9uRGVhZGxpbmVgIHRyaWdnZXIgYnV0IGVsZW1lbnQgcmVtb3ZlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gX3RoaXMuJGNhY2hlRWxlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCRlbGUpIHtcbiAgICAgICAgaWYgKCEkZWxlKSByZXR1cm47XG5cbiAgICAgICAgJGVsZS5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICAgICRlbGUuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCRlbGUpIHtcbiAgICAgICAgaWYgKCEkZWxlKSByZXR1cm47XG5cbiAgICAgICAgJGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICAgICRlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAoc3R5bGVGdW5jLCBhZGRpdGlvbmFsU3RhdGUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RhdHVzU3R5bGUgPSBzdHlsZUZ1bmMgPyBzdHlsZUZ1bmMoX3RoaXMuZ2V0RWxlbWVudCgpLCBldmVudCkgOiBudWxsO1xuXG4gICAgICAgIGlmIChzdGF0dXNTdHlsZSA9PT0gZmFsc2UgfHwgX3RoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBuZXh0U3RlcCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgbmV4dFN0ZXAgPSBmdW5jdGlvbiBuZXh0U3RlcCgpIHtcbiAgICAgICAgICAgIF90aGlzLm5leHRGcmFtZShjYWxsYmFjayk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBzdGF0dXNTdHlsZTogdHlwZW9mIHN0YXR1c1N0eWxlID09PSAnb2JqZWN0JyA/IHN0YXR1c1N0eWxlIDogbnVsbCxcbiAgICAgICAgICBuZXdTdGF0dXM6IGZhbHNlXG4gICAgICAgIH0sIGFkZGl0aW9uYWxTdGF0ZSksIG5leHRTdGVwKTsgLy8gVHJpZ2dlciBiZWZvcmUgbmV4dCBmcmFtZSAmIGFmdGVyIGBjb21wb25lbnREaWRNb3VudGBcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdHlsZUZ1bmMsIGN1cnJlbnRTdGF0dXMpIHtcbiAgICAgICAgLy8gYHNldFN0YXRlYCB1c2UgYHBvc3RNZXNzYWdlYCB0byB0cmlnZ2VyIGF0IHRoZSBlbmQgb2YgZnJhbWUuXG4gICAgICAgIC8vIExldCdzIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gdXBkYXRlIG5ldyBzdGF0ZSBpbiBuZXh0IGZyYW1lLlxuICAgICAgICBfdGhpcy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBfdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgICAgICBpZiAoc3RhdHVzICE9PSBjdXJyZW50U3RhdHVzKSByZXR1cm47XG5cbiAgICAgICAgICB2YXIgbW90aW9uRGVhZGxpbmUgPSBfdGhpcy5wcm9wcy5tb3Rpb25EZWFkbGluZTtcblxuXG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKHN0eWxlRnVuYywgeyBzdGF0dXNBY3RpdmU6IHRydWUgfSk7XG5cbiAgICAgICAgICBpZiAobW90aW9uRGVhZGxpbmUgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMub25Nb3Rpb25FbmQoe1xuICAgICAgICAgICAgICAgIGRlYWRsaW5lOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgbW90aW9uRGVhZGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5uZXh0RnJhbWUgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICBfdGhpcy5jYW5jZWxOZXh0RnJhbWUoKTtcbiAgICAgICAgX3RoaXMucmFmID0gcmFmKGZ1bmMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuY2FuY2VsTmV4dEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucmFmKSB7XG4gICAgICAgICAgcmFmLmNhbmNlbChfdGhpcy5yYWYpO1xuICAgICAgICAgIF90aGlzLnJhZiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBzdGF0dXM6IFNUQVRVU19OT05FLFxuICAgICAgICBzdGF0dXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBuZXdTdGF0dXM6IGZhbHNlLFxuICAgICAgICBzdGF0dXNTdHlsZTogbnVsbFxuICAgICAgfTtcbiAgICAgIF90aGlzLiRjYWNoZUVsZSA9IG51bGw7XG4gICAgICBfdGhpcy5ub2RlID0gbnVsbDtcbiAgICAgIF90aGlzLnJhZiA9IG51bGw7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENTU01vdGlvbiwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbkRvbVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9uRG9tVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy4kY2FjaGVFbGUpO1xuICAgICAgICB0aGlzLmNhbmNlbE5leHRGcmFtZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXMgPSBfc3RhdGUuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzQWN0aXZlID0gX3N0YXRlLnN0YXR1c0FjdGl2ZSxcbiAgICAgICAgICAgIHN0YXR1c1N0eWxlID0gX3N0YXRlLnN0YXR1c1N0eWxlO1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgbW90aW9uTmFtZSA9IF9wcm9wcy5tb3Rpb25OYW1lLFxuICAgICAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgcmVtb3ZlT25MZWF2ZSA9IF9wcm9wcy5yZW1vdmVPbkxlYXZlLFxuICAgICAgICAgICAgbGVhdmVkQ2xhc3NOYW1lID0gX3Byb3BzLmxlYXZlZENsYXNzTmFtZSxcbiAgICAgICAgICAgIGV2ZW50UHJvcHMgPSBfcHJvcHMuZXZlbnRQcm9wcztcblxuXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFNUQVRVU19OT05FIHx8ICFpc1N1cHBvcnRUcmFuc2l0aW9uKHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgZXZlbnRQcm9wcyksIHRoaXMuc2V0Tm9kZVJlZik7XG4gICAgICAgICAgfSBlbHNlIGlmICghcmVtb3ZlT25MZWF2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBldmVudFByb3BzLCB7IGNsYXNzTmFtZTogbGVhdmVkQ2xhc3NOYW1lIH0pLCB0aGlzLnNldE5vZGVSZWYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBldmVudFByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyksIHN0YXR1cyAhPT0gU1RBVFVTX05PTkUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyArICctYWN0aXZlJyksIHN0YXR1cyAhPT0gU1RBVFVTX05PTkUgJiYgc3RhdHVzQWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBtb3Rpb25OYW1lLCB0eXBlb2YgbW90aW9uTmFtZSA9PT0gJ3N0cmluZycpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHN0eWxlOiBzdGF0dXNTdHlsZVxuICAgICAgICB9KSwgdGhpcy5zZXROb2RlUmVmKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgICAgIHZhciBwcmV2UHJvcHMgPSBfcmVmLnByZXZQcm9wcyxcbiAgICAgICAgICAgIHByZXZTdGF0dXMgPSBfcmVmLnN0YXR1cztcblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gcHJvcHMubW90aW9uTGVhdmUsXG4gICAgICAgICAgICBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ID0gcHJvcHMubW90aW9uTGVhdmVJbW1lZGlhdGVseTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHN0YXR1cyBpZiBwcm9wIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAocHJldlN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiAhbW90aW9uQXBwZWFyIHx8IHByZXZTdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiAhbW90aW9uRW50ZXIgfHwgcHJldlN0YXR1cyA9PT0gU1RBVFVTX0xFQVZFICYmICFtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19OT05FO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZWFyXG4gICAgICAgIGlmICghcHJldlByb3BzICYmIHZpc2libGUgJiYgbW90aW9uQXBwZWFyKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX0FQUEVBUjtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW50ZXJcbiAgICAgICAgaWYgKHByZXZQcm9wcyAmJiAhcHJldlByb3BzLnZpc2libGUgJiYgdmlzaWJsZSAmJiBtb3Rpb25FbnRlcikge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19FTlRFUjtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGVhdmVcbiAgICAgICAgaWYgKHByZXZQcm9wcyAmJiBwcmV2UHJvcHMudmlzaWJsZSAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSB8fCAhcHJldlByb3BzICYmIG1vdGlvbkxlYXZlSW1tZWRpYXRlbHkgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfTEVBVkU7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ1NTTW90aW9uO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ1NTTW90aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIG1vdGlvbkVudGVyOiB0cnVlLFxuICAgIG1vdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICBtb3Rpb25MZWF2ZTogdHJ1ZSxcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlXG4gIH07XG5cblxuICBpZiAoIWZvcndhcmRSZWYpIHtcbiAgICByZXR1cm4gQ1NTTW90aW9uO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIF9leHRlbmRzKHsgaW50ZXJuYWxSZWY6IHJlZiB9LCBwcm9wcykpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuQ1NTTW90aW9uKHN1cHBvcnRUcmFuc2l0aW9uKTsiLCJ2YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLy8gPT09PT09PT09PT09PT09PT0gVHJhbnNpdGlvbiA9PT09PT09PT09PT09PT09PVxuLy8gRXZlbnQgd3JhcHBlci4gQ29weSBmcm9tIHJlYWN0IHNvdXJjZSBjb2RlXG5mdW5jdGlvbiBtYWtlUHJlZml4TWFwKHN0eWxlUHJvcCwgZXZlbnROYW1lKSB7XG4gIHZhciBwcmVmaXhlcyA9IHt9O1xuXG4gIHByZWZpeGVzW3N0eWxlUHJvcC50b0xvd2VyQ2FzZSgpXSA9IGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuICBwcmVmaXhlc1snV2Via2l0JyArIHN0eWxlUHJvcF0gPSAnd2Via2l0JyArIGV2ZW50TmFtZTtcbiAgcHJlZml4ZXNbJ01veicgKyBzdHlsZVByb3BdID0gJ21veicgKyBldmVudE5hbWU7XG4gIHByZWZpeGVzWydtcycgKyBzdHlsZVByb3BdID0gJ01TJyArIGV2ZW50TmFtZTtcbiAgcHJlZml4ZXNbJ08nICsgc3R5bGVQcm9wXSA9ICdvJyArIGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiBwcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVzKGRvbVN1cHBvcnQsIHdpbikge1xuICB2YXIgcHJlZml4ZXMgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiBtYWtlUHJlZml4TWFwKCdBbmltYXRpb24nLCAnQW5pbWF0aW9uRW5kJyksXG4gICAgdHJhbnNpdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnVHJhbnNpdGlvbicsICdUcmFuc2l0aW9uRW5kJylcbiAgfTtcblxuICBpZiAoZG9tU3VwcG9ydCkge1xuICAgIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luKSkge1xuICAgICAgZGVsZXRlIHByZWZpeGVzLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gICAgfVxuXG4gICAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luKSkge1xuICAgICAgZGVsZXRlIHByZWZpeGVzLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlZml4ZXM7XG59XG5cbnZhciB2ZW5kb3JQcmVmaXhlcyA9IGdldFZlbmRvclByZWZpeGVzKGNhblVzZURPTSwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fSk7XG5cbnZhciBzdHlsZSA9IHt9O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG59XG5cbnZhciBwcmVmaXhlZEV2ZW50TmFtZXMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICBpZiAocHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV0pIHtcbiAgICByZXR1cm4gcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gIH1cblxuICB2YXIgcHJlZml4TWFwID0gdmVuZG9yUHJlZml4ZXNbZXZlbnROYW1lXTtcblxuICBpZiAocHJlZml4TWFwKSB7XG4gICAgdmFyIHN0eWxlUHJvcExpc3QgPSBPYmplY3Qua2V5cyhwcmVmaXhNYXApO1xuICAgIHZhciBsZW4gPSBzdHlsZVByb3BMaXN0Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgc3R5bGVQcm9wID0gc3R5bGVQcm9wTGlzdFtpXTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJlZml4TWFwLCBzdHlsZVByb3ApICYmIHN0eWxlUHJvcCBpbiBzdHlsZSkge1xuICAgICAgICBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHByZWZpeE1hcFtzdHlsZVByb3BdO1xuICAgICAgICByZXR1cm4gcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgdmFyIGFuaW1hdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgnYW5pbWF0aW9uZW5kJyk7XG5leHBvcnQgdmFyIHRyYW5zaXRpb25FbmROYW1lID0gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoJ3RyYW5zaXRpb25lbmQnKTtcbmV4cG9ydCB2YXIgc3VwcG9ydFRyYW5zaXRpb24gPSAhIShhbmltYXRpb25FbmROYW1lICYmIHRyYW5zaXRpb25FbmROYW1lKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKHRyYW5zaXRpb25OYW1lLCB0cmFuc2l0aW9uVHlwZSkge1xuICBpZiAoIXRyYW5zaXRpb25OYW1lKSByZXR1cm4gbnVsbDtcblxuICBpZiAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAnb2JqZWN0Jykge1xuICAgIHZhciB0eXBlID0gdHJhbnNpdGlvblR5cGUucmVwbGFjZSgvLVxcdy9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZVt0eXBlXTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2l0aW9uTmFtZSArICctJyArIHRyYW5zaXRpb25UeXBlO1xufSIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IFN1Yk1lbnUgZnJvbSAnLi9TdWJNZW51JztcbmltcG9ydCB7IGdldFdpZHRoLCBzZXRTdHlsZSwgbWVudUFsbFByb3BzIH0gZnJvbSAnLi91dGlsJztcbnZhciBNRU5VSVRFTV9PVkVSRkxPV0VEX0NMQVNTTkFNRSA9ICdtZW51aXRlbS1vdmVyZmxvd2VkJztcbnZhciBGTE9BVF9QUkVDSVNJT05fQURKVVNUID0gMC41O1xuXG52YXIgRE9NV3JhcCA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBET01XcmFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERPTVdyYXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihET01XcmFwKTtcblxuICAgIGZ1bmN0aW9uIERPTVdyYXAoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET01XcmFwKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIF90aGlzLnJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICAgIF90aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsOyAvLyBvcmlnaW5hbCBzY3JvbGwgc2l6ZSBvZiB0aGUgbGlzdFxuXG4gICAgICBfdGhpcy5vcmlnaW5hbFRvdGFsV2lkdGggPSAwOyAvLyBjb3B5IG9mIG92ZXJmbG93ZWQgaXRlbXNcblxuICAgICAgX3RoaXMub3ZlcmZsb3dlZEl0ZW1zID0gW107IC8vIGNhY2hlIGl0ZW0gb2YgdGhlIG9yaWdpbmFsIGl0ZW1zIChzbyB3ZSBjYW4gdHJhY2sgdGhlIHNpemUgYW5kIG9yZGVyKVxuXG4gICAgICBfdGhpcy5tZW51SXRlbVNpemVzID0gW107XG4gICAgICBfdGhpcy5jYW5jZWxGcmFtZUlkID0gbnVsbDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBsYXN0VmlzaWJsZUluZGV4OiB1bmRlZmluZWRcbiAgICAgIH07IC8vIGdldCBhbGwgdmFsaWQgbWVudUl0ZW0gbm9kZXNcblxuICAgICAgX3RoaXMuZ2V0TWVudUl0ZW1Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByZWZpeENscyA9IF90aGlzLnByb3BzLnByZWZpeENscztcbiAgICAgICAgdmFyIHVsID0gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgICAgIGlmICghdWwpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gLy8gZmlsdGVyIG91dCBhbGwgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgcGxhY2Vob2xkZXJcblxuXG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHVsLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuc3BsaXQoJyAnKS5pbmRleE9mKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3ZlcmZsb3dlZC1zdWJtZW51XCIpKSA8IDA7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtID0gZnVuY3Rpb24gKGtleVByZWZpeCwgb3ZlcmZsb3dlZEl0ZW1zLCByZW5kZXJQbGFjZWhvbGRlcikge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG92ZXJmbG93ZWRJbmRpY2F0b3IgPSBfdGhpcyRwcm9wcy5vdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wcy5tb2RlLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcblxuICAgICAgICBpZiAobGV2ZWwgIT09IDEgfHwgbW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gLy8gcHV0IGFsbCB0aGUgb3ZlcmZsb3dlZCBpdGVtIGluc2lkZSBhIHN1Ym1lbnVcbiAgICAgICAgLy8gd2l0aCBhIHRpdGxlIG9mIG92ZXJmbG93IGluZGljYXRvciAoJy4uLicpXG5cblxuICAgICAgICB2YXIgY29weSA9IF90aGlzLnByb3BzLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHZhciBfY29weSRwcm9wcyA9IGNvcHkucHJvcHMsXG4gICAgICAgICAgICB0aHJvd0F3YXkgPSBfY29weSRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIHRpdGxlID0gX2NvcHkkcHJvcHMudGl0bGUsXG4gICAgICAgICAgICBwcm9wU3R5bGUgPSBfY29weSRwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NvcHkkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwidGl0bGVcIiwgXCJzdHlsZVwiXSk7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gX29iamVjdFNwcmVhZCh7fSwgcHJvcFN0eWxlKTtcblxuICAgICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoa2V5UHJlZml4LCBcIi1vdmVyZmxvd2VkLWluZGljYXRvclwiKTtcbiAgICAgICAgdmFyIGV2ZW50S2V5ID0gXCJcIi5jb25jYXQoa2V5UHJlZml4LCBcIi1vdmVyZmxvd2VkLWluZGljYXRvclwiKTtcblxuICAgICAgICBpZiAob3ZlcmZsb3dlZEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiByZW5kZXJQbGFjZWhvbGRlciAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZW5kZXJQbGFjZWhvbGRlcikge1xuICAgICAgICAgIHN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZnJvbSB0YWtpbmcgbm9ybWFsIGRvbSBzcGFjZVxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBrZXkgPSBcIlwiLmNvbmNhdChrZXksIFwiLXBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgIGV2ZW50S2V5ID0gXCJcIi5jb25jYXQoZXZlbnRLZXksIFwiLXBsYWNlaG9sZGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gdGhlbWUgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodGhlbWUpIDogJyc7XG4gICAgICAgIHZhciBwcm9wcyA9IHt9O1xuICAgICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIGlmIChyZXN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb3BzW2tdID0gcmVzdFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdWJNZW51LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICB0aXRsZTogb3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3ZlcmZsb3dlZC1zdWJtZW51XCIpLFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZVxuICAgICAgICB9LCBwcm9wcywge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgIH0pLCBvdmVyZmxvd2VkSXRlbXMpO1xuICAgICAgfTsgLy8gbWVtb3JpemUgcmVuZGVyZWQgbWVudVNpemVcblxuXG4gICAgICBfdGhpcy5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMubW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVsID0gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgICAgIGlmICghdWwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdWxDaGlsZHJlbk5vZGVzID0gdWwuY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKCF1bENoaWxkcmVuTm9kZXMgfHwgdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyID0gdWwuY2hpbGRyZW5bdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCAtIDFdOyAvLyBuZWVkIGxhc3Qgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZm9yIGNhbGN1bGF0aW5nIGxlbmd0aDtcblxuICAgICAgICBzZXRTdHlsZShsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcblxuICAgICAgICB2YXIgbWVudUl0ZW1Ob2RlcyA9IF90aGlzLmdldE1lbnVJdGVtTm9kZXMoKTsgLy8gcmVzZXQgZGlzcGxheSBhdHRyaWJ1dGUgZm9yIGFsbCBoaWRkZW4gZWxlbWVudHMgY2F1c2VkIGJ5IG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB1cGRhdGVkIHdpZHRoXG4gICAgICAgIC8vIGFuZCB0aGVuIHJlc2V0IHRvIG9yaWdpbmFsIHN0YXRlIGFmdGVyIHdpZHRoIGNhbGN1bGF0aW9uXG5cblxuICAgICAgICB2YXIgb3ZlcmZsb3dlZEl0ZW1zID0gbWVudUl0ZW1Ob2Rlcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5jbGFzc05hbWUuc3BsaXQoJyAnKS5pbmRleE9mKE1FTlVJVEVNX09WRVJGTE9XRURfQ0xBU1NOQU1FKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgb3ZlcmZsb3dlZEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBzZXRTdHlsZShjLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm1lbnVJdGVtU2l6ZXMgPSBtZW51SXRlbU5vZGVzLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBnZXRXaWR0aChjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG92ZXJmbG93ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgc2V0U3R5bGUoYywgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMub3ZlcmZsb3dlZEluZGljYXRvcldpZHRoID0gZ2V0V2lkdGgodWwuY2hpbGRyZW5bdWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xuICAgICAgICBfdGhpcy5vcmlnaW5hbFRvdGFsV2lkdGggPSBfdGhpcy5tZW51SXRlbVNpemVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXIpIHtcbiAgICAgICAgICByZXR1cm4gYWNjICsgY3VyO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVSZXNpemUoKTsgLy8gcHJldmVudCB0aGUgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZnJvbSB0YWtpbmcgc3BhY2U7XG5cblxuICAgICAgICBzZXRTdHlsZShsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5tb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICAgICAgaWYgKCF1bCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWR0aCA9IGdldFdpZHRoKHVsKTtcbiAgICAgICAgX3RoaXMub3ZlcmZsb3dlZEl0ZW1zID0gW107XG4gICAgICAgIHZhciBjdXJyZW50U3VtV2lkdGggPSAwOyAvLyBpbmRleCBmb3IgbGFzdCB2aXNpYmxlIGNoaWxkIGluIGhvcml6b250YWwgbW9kZVxuXG4gICAgICAgIHZhciBsYXN0VmlzaWJsZUluZGV4OyAvLyBmbG9hdCBudW1iZXIgY29tcGFyaXNvbiBjb3VsZCBiZSBwcm9ibGVtYXRpY1xuICAgICAgICAvLyBlLmcuIDAuMSArIDAuMiA+IDAuMyA9PT09PT4gdHJ1ZVxuICAgICAgICAvLyB0aHVzIHVzaW5nIEZMT0FUX1BSRUNJU0lPTl9BREpVU1QgYXMgYnVmZmVyIHRvIGhlbHAgdGhlIHNpdHVhdGlvblxuXG4gICAgICAgIGlmIChfdGhpcy5vcmlnaW5hbFRvdGFsV2lkdGggPiB3aWR0aCArIEZMT0FUX1BSRUNJU0lPTl9BREpVU1QpIHtcbiAgICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gLTE7XG5cbiAgICAgICAgICBfdGhpcy5tZW51SXRlbVNpemVzLmZvckVhY2goZnVuY3Rpb24gKGxpV2lkdGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdW1XaWR0aCArPSBsaVdpZHRoO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFN1bVdpZHRoICsgX3RoaXMub3ZlcmZsb3dlZEluZGljYXRvcldpZHRoIDw9IHdpZHRoKSB7XG4gICAgICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsYXN0VmlzaWJsZUluZGV4OiBsYXN0VmlzaWJsZUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhET01XcmFwLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2V0Q2hpbGRyZW5XaWR0aEFuZFJlc2l6ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxldmVsID09PSAxICYmIHRoaXMucHJvcHMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgdmFyIG1lbnVVbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICAgICAgaWYgKCFtZW51VWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgY2FuY2VsRnJhbWVJZCA9IF90aGlzMi5jYW5jZWxGcmFtZUlkO1xuICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjYW5jZWxGcmFtZUlkKTtcbiAgICAgICAgICAgICAgX3RoaXMyLmNhbmNlbEZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMyLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgW10uc2xpY2UuY2FsbChtZW51VWwuY2hpbGRyZW4pLmNvbmNhdChtZW51VWwpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBfdGhpczIucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAgICAgW10uc2xpY2UuY2FsbChtZW51VWwuY2hpbGRyZW4pLmNvbmNhdChtZW51VWwpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfdGhpczIuc2V0Q2hpbGRyZW5XaWR0aEFuZFJlc2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShtZW51VWwsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViVHJlZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmNhbmNlbEZyYW1lSWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJDaGlsZHJlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIC8vIG5lZWQgdG8gdGFrZSBjYXJlIG9mIG92ZXJmbG93ZWQgaXRlbXMgaW4gaG9yaXpvbnRhbCBtb2RlXG4gICAgICAgIHZhciBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5zdGF0ZS5sYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICByZXR1cm4gKGNoaWxkcmVuIHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2hpbGROb2RlLCBpbmRleCkge1xuICAgICAgICAgIHZhciBpdGVtID0gY2hpbGROb2RlO1xuXG4gICAgICAgICAgaWYgKF90aGlzMy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHZhciBvdmVyZmxvd2VkID0gX3RoaXMzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbShjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIFtdKTtcblxuICAgICAgICAgICAgaWYgKGxhc3RWaXNpYmxlSW5kZXggIT09IHVuZGVmaW5lZCAmJiBfdGhpczMucHJvcHMuY2xhc3NOYW1lLmluZGV4T2YoXCJcIi5jb25jYXQoX3RoaXMzLnByb3BzLnByZWZpeENscywgXCItcm9vdFwiKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA+IGxhc3RWaXNpYmxlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkTm9kZSwgLy8g6L+Z6YeM5L+u5pS5IGV2ZW50S2V5IOaYr+S4uuS6humYsuatoumakOiXj+eKtuaAgeS4i+i/mOS8muinpuWPkSBvcGVua2V5cyDkuovku7ZcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBldmVudEtleTogXCJcIi5jb25jYXQoY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBcIi1oaWRkZW5cIiksXG5cbiAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICogTGVnYWN5IGNvZGUuIEhlcmUgYGNsYXNzTmFtZWAgbmV2ZXIgdXNlZDpcbiAgICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvbWVudS9jb21taXQvNGNkNmI0OWZjZTlkMTE2NzI2ZjRlYTAwZGRhODUzMjVkNmYyNjUwMCNkaWZmLWUyZmE0OGY3NWMyZGQyMzE4Mjk1Y2RlNDI4NTU2YTc2UjI0MFxuICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KE1FTlVJVEVNX09WRVJGTE9XRURfQ0xBU1NOQU1FKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsYXN0VmlzaWJsZUluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5vdmVyZmxvd2VkSXRlbXMgPSBjaGlsZHJlbi5zbGljZShsYXN0VmlzaWJsZUluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIC8vIGNoaWxkcmVuW2luZGV4XS5rZXkgd2lsbCBiZWNvbWUgJy4ka2V5JyBpbiBjbG9uZSBieSBkZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBvdmVyd3JpdGUgd2l0aCB0aGUgY29ycmVjdCBrZXkgZXhwbGljaXRseVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGMucHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbC1sZWZ0J1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dlZCA9IF90aGlzMy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0oY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmV0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhY2MpLCBbb3ZlcmZsb3dlZCwgaXRlbV0pO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgLy8gbmVlZCBhIHBsYWNlaG9sZGVyIGZvciBjYWxjdWxhdGluZyBvdmVyZmxvd2VkIGluZGljYXRvciB3aWR0aFxuICAgICAgICAgICAgICByZXQucHVzaChfdGhpczMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtKGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgW10sIHRydWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhY2MpLCBbaXRlbV0pO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMyLnZpc2libGUsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF90aGlzJHByb3BzMi5vdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICAgICAgbW9kZSA9IF90aGlzJHByb3BzMi5tb2RlLFxuICAgICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczIubGV2ZWwsXG4gICAgICAgICAgICB0YWcgPSBfdGhpcyRwcm9wczIudGFnLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzMi50aGVtZSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJ2aXNpYmxlXCIsIFwicHJlZml4Q2xzXCIsIFwib3ZlcmZsb3dlZEluZGljYXRvclwiLCBcIm1vZGVcIiwgXCJsZXZlbFwiLCBcInRhZ1wiLCBcImNoaWxkcmVuXCIsIFwidGhlbWVcIl0pO1xuXG4gICAgICAgIHZhciBUYWcgPSB0YWc7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgT2JqZWN0LmFzc2lnbih7fSwgcmVzdCksIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRE9NV3JhcDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIERPTVdyYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnJ1xuICB9O1xuICByZXR1cm4gRE9NV3JhcDtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NV3JhcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgRGl2aWRlciA9IGZ1bmN0aW9uIERpdmlkZXIoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICByb290UHJlZml4Q2xzID0gX3JlZi5yb290UHJlZml4Q2xzLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLWRpdmlkZXJcIiksXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0pO1xufTtcblxuRGl2aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIC8vIFRvIGZpeCBrZXlib2FyZCBVWC5cbiAgZGlzYWJsZWQ6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlIH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgU3ViUG9wdXBNZW51LCB7IGdldEFjdGl2ZUtleSB9IGZyb20gJy4vU3ViUG9wdXBNZW51JztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZ2V0TW90aW9uIH0gZnJvbSAnLi91dGlscy9sZWdhY3lVdGlsJztcblxudmFyIE1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudSk7XG5cbiAgICBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICAgIF90aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAvLyByb290IG1lbnVcbiAgICAgICAgICB2YXIgX3RoaXMkc3RvcmUkZ2V0U3RhdGUgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICBfc2VsZWN0ZWRLZXlzID0gX3RoaXMkc3RvcmUkZ2V0U3RhdGUuc2VsZWN0ZWRLZXlzO1xuXG4gICAgICAgICAgdmFyIHNlbGVjdGVkS2V5ID0gc2VsZWN0SW5mby5rZXk7XG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIF9zZWxlY3RlZEtleXMgPSBfc2VsZWN0ZWRLZXlzLmNvbmNhdChbc2VsZWN0ZWRLZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3NlbGVjdGVkS2V5cyA9IFtzZWxlY3RlZEtleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkS2V5czogX3NlbGVjdGVkS2V5c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvcHMub25TZWxlY3QoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzZWxlY3RJbmZvKSwge30sIHtcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5czogX3NlbGVjdGVkS2V5c1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICB9OyAvLyBvbktleURvd24gbmVlZHMgdG8gYmUgZXhwb3NlZCBhcyBhIGluc3RhbmNlIG1ldGhvZFxuICAgICAgLy8gZS5nLiwgaW4gcmMtc2VsZWN0LCB3ZSBuZWVkIHRvIG5hdmlnYXRlIG1lbnUgaXRlbSB3aGlsZVxuICAgICAgLy8gY3VycmVudCBhY3RpdmUgaXRlbSBpcyByYy1zZWxlY3QgaW5wdXQgYm94IHJhdGhlciB0aGFuIHRoZSBtZW51IGl0c2VsZlxuXG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlLCBjYWxsYmFjaykge1xuICAgICAgICBfdGhpcy5pbm5lck1lbnUuZ2V0V3JhcHBlZEluc3RhbmNlKCkub25LZXlEb3duKGUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplMiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUyLnByb3BzO1xuXG4gICAgICAgIHZhciBvcGVuS2V5cyA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCkub3BlbktleXMuY29uY2F0KCk7XG5cbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgcHJvY2Vzc1NpbmdsZSA9IGZ1bmN0aW9uIHByb2Nlc3NTaW5nbGUoZSkge1xuICAgICAgICAgIHZhciBvbmVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZS5vcGVuKSB7XG4gICAgICAgICAgICBvbmVDaGFuZ2VkID0gb3BlbktleXMuaW5kZXhPZihlLmtleSkgPT09IC0xO1xuXG4gICAgICAgICAgICBpZiAob25lQ2hhbmdlZCkge1xuICAgICAgICAgICAgICBvcGVuS2V5cy5wdXNoKGUua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gb3BlbktleXMuaW5kZXhPZihlLmtleSk7XG4gICAgICAgICAgICBvbmVDaGFuZ2VkID0gaW5kZXggIT09IC0xO1xuXG4gICAgICAgICAgICBpZiAob25lQ2hhbmdlZCkge1xuICAgICAgICAgICAgICBvcGVuS2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWQgPSBjaGFuZ2VkIHx8IG9uZUNoYW5nZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gYmF0Y2ggY2hhbmdlIGNhbGxcbiAgICAgICAgICBldmVudC5mb3JFYWNoKHByb2Nlc3NTaW5nbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3NTaW5nbGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBpZiAoISgnb3BlbktleXMnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBvcGVuS2V5czogb3BlbktleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplMyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUzLnByb3BzO1xuXG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdmFyIF9zZWxlY3RlZEtleXMyID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZEtleXMuY29uY2F0KCk7XG5cbiAgICAgICAgICB2YXIgc2VsZWN0ZWRLZXkgPSBzZWxlY3RJbmZvLmtleTtcblxuICAgICAgICAgIHZhciBpbmRleCA9IF9zZWxlY3RlZEtleXMyLmluZGV4T2Yoc2VsZWN0ZWRLZXkpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgX3NlbGVjdGVkS2V5czIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISgnc2VsZWN0ZWRLZXlzJyBpbiBwcm9wcykpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBfc2VsZWN0ZWRLZXlzMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvcHMub25EZXNlbGVjdChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNlbGVjdEluZm8pLCB7fSwge1xuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBfc2VsZWN0ZWRLZXlzMlxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0T3BlblRyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplNCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemU0LnByb3BzO1xuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLm9wZW5UcmFuc2l0aW9uTmFtZTtcbiAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBwcm9wcy5vcGVuQW5pbWF0aW9uO1xuXG4gICAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgdHlwZW9mIGFuaW1hdGlvbk5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLW9wZW4tXCIpLmNvbmNhdChhbmltYXRpb25OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldElubmVyTWVudSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIF90aGlzLmlubmVyTWVudSA9IG5vZGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pc1Jvb3RNZW51ID0gdHJ1ZTtcbiAgICAgIHZhciBzZWxlY3RlZEtleXMgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWRLZXlzO1xuICAgICAgdmFyIG9wZW5LZXlzID0gcHJvcHMuZGVmYXVsdE9wZW5LZXlzO1xuXG4gICAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzID0gcHJvcHMuc2VsZWN0ZWRLZXlzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ29wZW5LZXlzJyBpbiBwcm9wcykge1xuICAgICAgICBvcGVuS2V5cyA9IHByb3BzLm9wZW5LZXlzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdG9yZSA9IGNyZWF0ZSh7XG4gICAgICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzLFxuICAgICAgICBvcGVuS2V5czogb3BlbktleXMsXG4gICAgICAgIGFjdGl2ZUtleToge1xuICAgICAgICAgICcwLW1lbnUtJzogZ2V0QWN0aXZlS2V5KHByb3BzLCBwcm9wcy5hY3RpdmVLZXkpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZW51LCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTWluaVN0b3JlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlTWluaVN0b3JlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTWluaVN0b3JlKCkge1xuICAgICAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiB0aGlzLnByb3BzLnNlbGVjdGVkS2V5cyB8fCBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdvcGVuS2V5cycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbktleXM6IHRoaXMucHJvcHMub3BlbktleXMgfHwgW11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSBcIiBcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1yb290XCIpO1xuXG4gICAgICAgIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9IFwiIFwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXJ0bFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICAgICAgb25EZXNlbGVjdDogdGhpcy5vbkRlc2VsZWN0LFxuICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLm9uU2VsZWN0LFxuICAgICAgICAgIHBhcmVudE1lbnU6IHRoaXMsXG4gICAgICAgICAgbW90aW9uOiBnZXRNb3Rpb24odGhpcy5wcm9wcylcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5vcGVuQW5pbWF0aW9uO1xuICAgICAgICBkZWxldGUgcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwge1xuICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViUG9wdXBNZW51LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlZjogdGhpcy5zZXRJbm5lck1lbnVcbiAgICAgICAgfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgb25DbGljazogbm9vcCxcbiAgICBvblNlbGVjdDogbm9vcCxcbiAgICBvbk9wZW5DaGFuZ2U6IG5vb3AsXG4gICAgb25EZXNlbGVjdDogbm9vcCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzOiBbXSxcbiAgICBkZWZhdWx0T3BlbktleXM6IFtdLFxuICAgIHN1Yk1lbnVPcGVuRGVsYXk6IDAuMSxcbiAgICBzdWJNZW51Q2xvc2VEZWxheTogMC4xLFxuICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uOiAnaG92ZXInLFxuICAgIHByZWZpeENsczogJ3JjLW1lbnUnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICBzdHlsZToge30sXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IHt9LFxuICAgIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiXFx4QjdcXHhCN1xceEI3XCIpXG4gIH07XG4gIHJldHVybiBNZW51O1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBub29wLCBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgTWVudUl0ZW0gPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgTWVudUl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWVudUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZW51SXRlbSk7XG5cbiAgICBmdW5jdGlvbiBNZW51SXRlbSgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVJdGVtKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRU5URVIpIHtcbiAgICAgICAgICBfdGhpcy5vbkNsaWNrKGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzLmV2ZW50S2V5LFxuICAgICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wcy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzLm9uTW91c2VMZWF2ZTtcbiAgICAgICAgb25JdGVtSG92ZXIoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBvbk1vdXNlTGVhdmUoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzMi5ldmVudEtleSxcbiAgICAgICAgICAgIG9uSXRlbUhvdmVyID0gX3RoaXMkcHJvcHMyLm9uSXRlbUhvdmVyLFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMyLm9uTW91c2VFbnRlcjtcbiAgICAgICAgb25JdGVtSG92ZXIoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgaG92ZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uTW91c2VFbnRlcih7XG4gICAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzMy5ldmVudEtleSxcbiAgICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMzLm11bHRpcGxlLFxuICAgICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzMy5vbkNsaWNrLFxuICAgICAgICAgICAgb25TZWxlY3QgPSBfdGhpcyRwcm9wczMub25TZWxlY3QsXG4gICAgICAgICAgICBvbkRlc2VsZWN0ID0gX3RoaXMkcHJvcHMzLm9uRGVzZWxlY3QsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gX3RoaXMkcHJvcHMzLmlzU2VsZWN0ZWQ7XG4gICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAga2V5UGF0aDogW2V2ZW50S2V5XSxcbiAgICAgICAgICBpdGVtOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9O1xuICAgICAgICBvbkNsaWNrKGluZm8pO1xuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICBvbkRlc2VsZWN0KGluZm8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBfdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWVudUl0ZW0sIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gaW52b2tlIGN1c3RvbWl6ZWQgcmVmIHRvIGV4cG9zZSBjb21wb25lbnQgdG8gbWl4aW5cbiAgICAgICAgdGhpcy5jYWxsUmVmKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jYWxsUmVmKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLm9uRGVzdHJveSkge1xuICAgICAgICAgIHByb3BzLm9uRGVzdHJveShwcm9wcy5ldmVudEtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UHJlZml4Q2xzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5wcm9wcy5yb290UHJlZml4Q2xzLCBcIi1pdGVtXCIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRBY3RpdmVDbGFzc05hbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVDbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLmdldFByZWZpeENscygpLCBcIi1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNlbGVjdGVkQ2xhc3NOYW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLmdldFByZWZpeENscygpLCBcIi1zZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0RGlzYWJsZWRDbGFzc05hbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREaXNhYmxlZENsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLWRpc2FibGVkXCIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYWxsUmVmXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbFJlZigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYW51YWxSZWYodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5nZXRQcmVmaXhDbHMoKSwgcHJvcHMuY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLmdldEFjdGl2ZUNsYXNzTmFtZSgpLCAhcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMuYWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLmdldFNlbGVjdGVkQ2xhc3NOYW1lKCksIHByb3BzLmlzU2VsZWN0ZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuZ2V0RGlzYWJsZWRDbGFzc05hbWUoKSwgcHJvcHMuZGlzYWJsZWQpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgICAgIHZhciBhdHRycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMuYXR0cmlidXRlKSwge30sIHtcbiAgICAgICAgICB0aXRsZTogdHlwZW9mIHByb3BzLnRpdGxlID09PSAnc3RyaW5nJyA/IHByb3BzLnRpdGxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIC8vIHNldCB0byBtZW51aXRlbSBieSBkZWZhdWx0XG4gICAgICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudWl0ZW0nLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BzLnJvbGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgLy8gb3ZlcndyaXRlIHRvIG9wdGlvblxuICAgICAgICAgIGF0dHJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhdHRycyksIHt9LCB7XG4gICAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogcHJvcHMuaXNTZWxlY3RlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnJvbGUgPT09IG51bGwgfHwgcHJvcHMucm9sZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgLy8gc29tZXRpbWVzIHdlIHdhbnQgdG8gc3BlY2lmeSByb2xlIGluc2lkZSA8bGkvPiBlbGVtZW50XG4gICAgICAgICAgLy8gPGxpPjxhIHJvbGU9J21lbnVpdGVtJz5MaW5rPC9hPjwvbGk+IHdvdWxkIGJlIGEgZ29vZCBleGFtcGxlXG4gICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSByb2xlIG9uIDxsaS8+IHNob3VsZCBiZSBcIm5vbmVcIiB0b1xuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgaW1wbGllZCBsaXN0aXRlbSByb2xlLlxuICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xL2V4YW1wbGVzL21lbnViYXIvbWVudWJhci0xL21lbnViYXItMS5odG1sXG4gICAgICAgICAgYXR0cnMucm9sZSA9ICdub25lJztcbiAgICAgICAgfSAvLyBJbiBjYXNlIHRoYXQgb25DbGljay9vbk1vdXNlTGVhdmUvb25Nb3VzZUVudGVyIGlzIHBhc3NlZCBkb3duIGZyb20gb3duZXJcblxuXG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMub25DbGljayxcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMuZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbk1vdXNlRW50ZXJcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcy5zdHlsZSk7XG5cbiAgICAgICAgaWYgKHByb3BzLm1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdSaWdodCA9IHByb3BzLmlubGluZUluZGVudCAqIHByb3BzLmxldmVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nTGVmdCA9IHByb3BzLmlubGluZUluZGVudCAqIHByb3BzLmxldmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICB2YXIgaWNvbiA9IHRoaXMucHJvcHMuaXRlbUljb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLml0ZW1JY29uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBhIGJ1ZyB3aGljaCBzaG91bGQgZml4ZWQgYWZ0ZXIgVFMgcmVmYWN0b3JcbiAgICAgICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLml0ZW1JY29uLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGF0dHJzLCBtb3VzZUV2ZW50LCB7XG4gICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlTm9kZVxuICAgICAgICB9KSwgcHJvcHMuY2hpbGRyZW4sIGljb24pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZW51SXRlbTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIE1lbnVJdGVtLmlzTWVudUl0ZW0gPSB0cnVlO1xuICBNZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb25Nb3VzZUVudGVyOiBub29wLFxuICAgIG9uTW91c2VMZWF2ZTogbm9vcCxcbiAgICBtYW51YWxSZWY6IG5vb3BcbiAgfTtcbiAgcmV0dXJuIE1lbnVJdGVtO1xufSgpO1xuXG5leHBvcnQgeyBNZW51SXRlbSB9O1xudmFyIGNvbm5lY3RlZCA9IGNvbm5lY3QoZnVuY3Rpb24gKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBhY3RpdmVLZXkgPSBfcmVmLmFjdGl2ZUtleSxcbiAgICAgIHNlbGVjdGVkS2V5cyA9IF9yZWYuc2VsZWN0ZWRLZXlzO1xuICB2YXIgZXZlbnRLZXkgPSBfcmVmMi5ldmVudEtleSxcbiAgICAgIHN1Yk1lbnVLZXkgPSBfcmVmMi5zdWJNZW51S2V5O1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogYWN0aXZlS2V5W3N1Yk1lbnVLZXldID09PSBldmVudEtleSxcbiAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZEtleXMuaW5kZXhPZihldmVudEtleSkgIT09IC0xXG4gIH07XG59KShNZW51SXRlbSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgTWVudUl0ZW1Hcm91cCA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBNZW51SXRlbUdyb3VwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1lbnVJdGVtR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZW51SXRlbUdyb3VwKTtcblxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtR3JvdXAoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbUdyb3VwKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgX3RoaXMucmVuZGVySW5uZXJNZW51SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcmVuZGVyTWVudUl0ZW0gPSBfdGhpcyRwcm9wcy5yZW5kZXJNZW51SXRlbSxcbiAgICAgICAgICAgIGluZGV4ID0gX3RoaXMkcHJvcHMuaW5kZXg7XG4gICAgICAgIHJldHVybiByZW5kZXJNZW51SXRlbShpdGVtLCBpbmRleCwgX3RoaXMucHJvcHMuc3ViTWVudUtleSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lbnVJdGVtR3JvdXAsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdmFyIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gcHJvcHMucm9vdFByZWZpeENscztcbiAgICAgICAgdmFyIHRpdGxlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1ncm91cC10aXRsZVwiKTtcbiAgICAgICAgdmFyIGxpc3RDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLWdyb3VwLWxpc3RcIik7XG4gICAgICAgIHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgbWVudUFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgfSk7IC8vIFNldCBvbkNsaWNrIHRvIG51bGwsIHRvIGlnbm9yZSBwcm9wYWdhdGVkIG9uQ2xpY2sgZXZlbnRcblxuICAgICAgICBkZWxldGUgcHJvcHMub25DbGljaztcbiAgICAgICAgZGVsZXRlIHByb3BzLmRpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZ3JvdXBcIilcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGl0bGVDbGFzc05hbWUsXG4gICAgICAgICAgdGl0bGU6IHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyB0aXRsZSA6IHVuZGVmaW5lZFxuICAgICAgICB9LCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3NOYW1lXG4gICAgICAgIH0sIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJJbm5lck1lbnVJdGVtKSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZW51SXRlbUdyb3VwO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgTWVudUl0ZW1Hcm91cC5pc01lbnVJdGVtR3JvdXAgPSB0cnVlO1xuICBNZW51SXRlbUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9O1xuICByZXR1cm4gTWVudUl0ZW1Hcm91cDtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW1Hcm91cDsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgQ1NTTW90aW9uIGZyb20gXCJyYy1hbmltYXRlL2VzL0NTU01vdGlvblwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgU3ViUG9wdXBNZW51IGZyb20gJy4vU3ViUG9wdXBNZW51JztcbmltcG9ydCB7IHBsYWNlbWVudHMsIHBsYWNlbWVudHNSdGwgfSBmcm9tICcuL3BsYWNlbWVudHMnO1xuaW1wb3J0IHsgbm9vcCwgbG9vcE1lbnVJdGVtUmVjdXJzaXZlbHksIGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXksIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG52YXIgZ3VpZCA9IDA7XG52YXIgcG9wdXBQbGFjZW1lbnRNYXAgPSB7XG4gIGhvcml6b250YWw6ICdib3R0b21MZWZ0JyxcbiAgdmVydGljYWw6ICdyaWdodFRvcCcsXG4gICd2ZXJ0aWNhbC1sZWZ0JzogJ3JpZ2h0VG9wJyxcbiAgJ3ZlcnRpY2FsLXJpZ2h0JzogJ2xlZnRUb3AnXG59O1xuXG52YXIgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0ID0gZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBldmVudEtleSwgZGVmYXVsdEFjdGl2ZUZpcnN0KSB7XG4gIHZhciBtZW51SWQgPSBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5KGV2ZW50S2V5KTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgc3RvcmUuc2V0U3RhdGUoe1xuICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5kZWZhdWx0QWN0aXZlRmlyc3QpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBtZW51SWQsIGRlZmF1bHRBY3RpdmVGaXJzdCkpXG4gIH0pO1xufTtcblxudmFyIFN1Yk1lbnUgPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgU3ViTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdWJNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3ViTWVudSk7XG5cbiAgICBmdW5jdGlvbiBTdWJNZW51KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJNZW51KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICAgIF90aGlzLm9uRGVzdHJveSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25EZXN0cm95KGtleSk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBub3RlOlxuICAgICAgICogIFRoaXMgbGVnYWN5IGNvZGUgdGhhdCBgb25LZXlEb3duYCBpcyBjYWxsZWQgYnkgcGFyZW50IGluc3RlYWQgb2YgZG9tIHNlbGYuXG4gICAgICAgKiAgd2hpY2ggbmVlZCByZXR1cm4gY29kZSB0byBjaGVjayBpZiB0aGlzIGV2ZW50IGlzIGhhbmRsZWRcbiAgICAgICAqL1xuXG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICB2YXIgbWVudSA9IF90aGlzLm1lbnVJbnN0YW5jZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgICAgICBzdG9yZSA9IF90aGlzJHByb3BzLnN0b3JlO1xuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICAgICAgX3RoaXMub25UaXRsZUNsaWNrKGUpO1xuXG4gICAgICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBfdGhpcy5wcm9wcy5ldmVudEtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5SSUdIVCkge1xuICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIG1lbnUub25LZXlEb3duKGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh0cnVlKTsgLy8gbmVlZCB0byB1cGRhdGUgY3VycmVudCBtZW51J3MgZGVmYXVsdEFjdGl2ZUZpcnN0IHZhbHVlXG5cblxuICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBfdGhpcy5wcm9wcy5ldmVudEtleSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5MRUZUKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZWQ7XG5cbiAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gbWVudS5vbktleURvd24oZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFoYW5kbGVkKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyT3BlbkNoYW5nZShmYWxzZSk7XG5cbiAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoYW5kbGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT3BlbiAmJiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pKSB7XG4gICAgICAgICAgcmV0dXJuIG1lbnUub25LZXlEb3duKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uT3BlbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uT3BlbkNoYW5nZShlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICAgICAgX3RoaXMudHJpZ2dlck9wZW5DaGFuZ2UodmlzaWJsZSwgdmlzaWJsZSA/ICdtb3VzZWVudGVyJyA6ICdtb3VzZWxlYXZlJyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBrZXkgPSBfdGhpcyRwcm9wczIuZXZlbnRLZXksXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczIub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgc3RvcmUgPSBfdGhpcyRwcm9wczIuc3RvcmU7XG4gICAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgX3RoaXMucHJvcHMuZXZlbnRLZXksIGZhbHNlKTtcbiAgICAgICAgb25Nb3VzZUVudGVyKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBkb21FdmVudDogZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHBhcmVudE1lbnUgPSBfdGhpcyRwcm9wczMucGFyZW50TWVudSxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMzLmV2ZW50S2V5LFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMzLm9uTW91c2VMZWF2ZTtcbiAgICAgICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICAgICAgb25Nb3VzZUxlYXZlKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25UaXRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZG9tRXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAga2V5ID0gX3RoaXMkcHJvcHM0LmV2ZW50S2V5LFxuICAgICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wczQub25JdGVtSG92ZXIsXG4gICAgICAgICAgICBvblRpdGxlTW91c2VFbnRlciA9IF90aGlzJHByb3BzNC5vblRpdGxlTW91c2VFbnRlcjtcbiAgICAgICAgb25JdGVtSG92ZXIoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBvblRpdGxlTW91c2VFbnRlcih7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGRvbUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25UaXRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwYXJlbnRNZW51ID0gX3RoaXMkcHJvcHM1LnBhcmVudE1lbnUsXG4gICAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzNS5ldmVudEtleSxcbiAgICAgICAgICAgIG9uSXRlbUhvdmVyID0gX3RoaXMkcHJvcHM1Lm9uSXRlbUhvdmVyLFxuICAgICAgICAgICAgb25UaXRsZU1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wczUub25UaXRsZU1vdXNlTGVhdmU7XG4gICAgICAgIHBhcmVudE1lbnUuc3ViTWVudUluc3RhbmNlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICAgIGhvdmVyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgb25UaXRsZU1vdXNlTGVhdmUoe1xuICAgICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRpdGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgICBwcm9wcy5vblRpdGxlQ2xpY2soe1xuICAgICAgICAgIGtleTogcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMudHJpZ2dlck9wZW5DaGFuZ2UoIXByb3BzLmlzT3BlbiwgJ2NsaWNrJyk7XG5cbiAgICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHByb3BzLnN0b3JlLCBfdGhpcy5wcm9wcy5ldmVudEtleSwgZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TdWJNZW51Q2xpY2sgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBvdmVyZmxvd2VkIHN1Ym1lbnVcbiAgICAgICAgLy8gb25DbGljayBpcyBub3QgY29waWVkIG92ZXJcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhfdGhpcy5hZGRLZXlQYXRoKGluZm8pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TZWxlY3QgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblNlbGVjdChpbmZvKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGluZm8pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0UHJlZml4Q2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMucHJvcHMucm9vdFByZWZpeENscywgXCItc3VibWVudVwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldEFjdGl2ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmdldFByZWZpeENscygpLCBcIi1hY3RpdmVcIik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmdldFByZWZpeENscygpLCBcIi1kaXNhYmxlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFNlbGVjdGVkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMuZ2V0UHJlZml4Q2xzKCksIFwiLXNlbGVjdGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0T3BlbkNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMsIFwiLXN1Ym1lbnUtb3BlblwiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVNZW51SW5zdGFuY2UgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvLyBjaGlsZHJlbiBtZW51IGluc3RhbmNlXG4gICAgICAgIF90aGlzLm1lbnVJbnN0YW5jZSA9IGM7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5hZGRLZXlQYXRoID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaW5mbyksIHt9LCB7XG4gICAgICAgICAga2V5UGF0aDogKGluZm8ua2V5UGF0aCB8fCBbXSkuY29uY2F0KF90aGlzLnByb3BzLmV2ZW50S2V5KVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnRyaWdnZXJPcGVuQ2hhbmdlID0gZnVuY3Rpb24gKG9wZW4sIHR5cGUpIHtcbiAgICAgICAgdmFyIGtleSA9IF90aGlzLnByb3BzLmV2ZW50S2V5O1xuXG4gICAgICAgIHZhciBvcGVuQ2hhbmdlID0gZnVuY3Rpb24gb3BlbkNoYW5nZSgpIHtcbiAgICAgICAgICBfdGhpcy5vbk9wZW5DaGFuZ2Uoe1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBpdGVtOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIHRyaWdnZXI6IHR5cGUsXG4gICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtb3VzZWVudGVyIGhhcHBlbiBhZnRlciBvdGhlciBtZW51IGl0ZW0ncyBtb3VzZWxlYXZlXG4gICAgICAgICAgX3RoaXMubW91c2VlbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wZW5DaGFuZ2UoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcGVuQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlzQ2hpbGRyZW5TZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICBmaW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShfdGhpcy5wcm9wcy5jaGlsZHJlbiwgX3RoaXMucHJvcHMuc2VsZWN0ZWRLZXlzLCByZXQpO1xuICAgICAgICByZXR1cm4gcmV0LmZpbmQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vcGVuS2V5cy5pbmRleE9mKF90aGlzLnByb3BzLmV2ZW50S2V5KSAhPT0gLTE7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5hZGp1c3RXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghX3RoaXMuc3ViTWVudVRpdGxlIHx8ICFfdGhpcy5tZW51SW5zdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9wdXBNZW51ID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMubWVudUluc3RhbmNlKTtcblxuICAgICAgICBpZiAocG9wdXBNZW51Lm9mZnNldFdpZHRoID49IF90aGlzLnN1Yk1lbnVUaXRsZS5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgICAgcG9wdXBNZW51LnN0eWxlLm1pbldpZHRoID0gXCJcIi5jb25jYXQoX3RoaXMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoLCBcInB4XCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZVN1Yk1lbnVUaXRsZSA9IGZ1bmN0aW9uIChzdWJNZW51VGl0bGUpIHtcbiAgICAgICAgX3RoaXMuc3ViTWVudVRpdGxlID0gc3ViTWVudVRpdGxlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0QmFzZVByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplMiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUyLnByb3BzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9kZTogcHJvcHMubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6IHByb3BzLm1vZGUsXG4gICAgICAgICAgdmlzaWJsZTogX3RoaXMucHJvcHMuaXNPcGVuLFxuICAgICAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCArIDEsXG4gICAgICAgICAgaW5saW5lSW5kZW50OiBwcm9wcy5pbmxpbmVJbmRlbnQsXG4gICAgICAgICAgZm9jdXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblN1Yk1lbnVDbGljayxcbiAgICAgICAgICBvblNlbGVjdDogX3RoaXMub25TZWxlY3QsXG4gICAgICAgICAgb25EZXNlbGVjdDogX3RoaXMub25EZXNlbGVjdCxcbiAgICAgICAgICBvbkRlc3Ryb3k6IF90aGlzLm9uRGVzdHJveSxcbiAgICAgICAgICBzZWxlY3RlZEtleXM6IHByb3BzLnNlbGVjdGVkS2V5cyxcbiAgICAgICAgICBldmVudEtleTogXCJcIi5jb25jYXQocHJvcHMuZXZlbnRLZXksIFwiLW1lbnUtXCIpLFxuICAgICAgICAgIG9wZW5LZXlzOiBwcm9wcy5vcGVuS2V5cyxcbiAgICAgICAgICBtb3Rpb246IHByb3BzLm1vdGlvbixcbiAgICAgICAgICBvbk9wZW5DaGFuZ2U6IF90aGlzLm9uT3BlbkNoYW5nZSxcbiAgICAgICAgICBzdWJNZW51T3BlbkRlbGF5OiBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICAgIHBhcmVudE1lbnU6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgIHN1Yk1lbnVDbG9zZURlbGF5OiBwcm9wcy5zdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI6IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0QWN0aXZlRmlyc3RbZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShwcm9wcy5ldmVudEtleSldLFxuICAgICAgICAgIG11bHRpcGxlOiBwcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBwcmVmaXhDbHM6IHByb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICAgICAgaWQ6IF90aGlzLmludGVybmFsTWVudUlkLFxuICAgICAgICAgIG1hbnVhbFJlZjogX3RoaXMuc2F2ZU1lbnVJbnN0YW5jZSxcbiAgICAgICAgICBpdGVtSWNvbjogcHJvcHMuaXRlbUljb24sXG4gICAgICAgICAgZXhwYW5kSWNvbjogcHJvcHMuZXhwYW5kSWNvbixcbiAgICAgICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvblxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0TW90aW9uID0gZnVuY3Rpb24gKG1vZGUsIHZpc2libGUpIHtcbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICAgIGhhdmVSZW5kZXJlZCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZTMuaGF2ZVJlbmRlcmVkO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG1vdGlvbiA9IF90aGlzJHByb3BzNi5tb3Rpb24sXG4gICAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHM2LnJvb3RQcmVmaXhDbHM7IC8vIGRvbid0IHNob3cgdHJhbnNpdGlvbiBvbiBmaXJzdCByZW5kZXJpbmcgKG5vIGFuaW1hdGlvbiBmb3Igb3BlbmVkIG1lbnUpXG4gICAgICAgIC8vIHNob3cgYXBwZWFyIHRyYW5zaXRpb24gaWYgaXQncyBub3QgdmlzaWJsZSAobm90IHN1cmUgd2h5KVxuICAgICAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IGlubGluZSBtb2RlXG5cbiAgICAgICAgdmFyIG1lcmdlZE1vdGlvbiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbW90aW9uKSwge30sIHtcbiAgICAgICAgICBsZWF2ZWRDbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWhpZGRlblwiKSxcbiAgICAgICAgICByZW1vdmVPbkxlYXZlOiBmYWxzZSxcbiAgICAgICAgICBtb3Rpb25BcHBlYXI6IGhhdmVSZW5kZXJlZCB8fCAhdmlzaWJsZSB8fCBtb2RlICE9PSAnaW5saW5lJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWVyZ2VkTW90aW9uO1xuICAgICAgfTtcblxuICAgICAgdmFyIHN0b3JlID0gcHJvcHMuc3RvcmUsXG4gICAgICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcblxuICAgICAgdmFyIF9zdG9yZSRnZXRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0ID0gX3N0b3JlJGdldFN0YXRlLmRlZmF1bHRBY3RpdmVGaXJzdDtcblxuICAgICAgX3RoaXMuaXNSb290TWVudSA9IGZhbHNlO1xuICAgICAgdmFyIHZhbHVlID0gZmFsc2U7XG5cbiAgICAgIGlmIChkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgICAgICAgdmFsdWUgPSBkZWZhdWx0QWN0aXZlRmlyc3RbZXZlbnRLZXldO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCB2YWx1ZSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN1Yk1lbnUsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wczcubW9kZSxcbiAgICAgICAgICAgIHBhcmVudE1lbnUgPSBfdGhpcyRwcm9wczcucGFyZW50TWVudSxcbiAgICAgICAgICAgIG1hbnVhbFJlZiA9IF90aGlzJHByb3BzNy5tYW51YWxSZWY7IC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG5cbiAgICAgICAgaWYgKG1hbnVhbFJlZikge1xuICAgICAgICAgIG1hbnVhbFJlZih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlICE9PSAnaG9yaXpvbnRhbCcgfHwgIXBhcmVudE1lbnUuaXNSb290TWVudSB8fCAhdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1pbldpZHRoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRqdXN0V2lkdGgoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgb25EZXN0cm95ID0gX3RoaXMkcHJvcHM4Lm9uRGVzdHJveSxcbiAgICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHM4LmV2ZW50S2V5O1xuXG4gICAgICAgIGlmIChvbkRlc3Ryb3kpIHtcbiAgICAgICAgICBvbkRlc3Ryb3koZXZlbnRLZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgICAgICAgaWYgKHRoaXMubWluV2lkdGhUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWluV2lkdGhUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuXG4gICAgICAgIGlmICh0aGlzLm1vdXNlZW50ZXJUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VlbnRlclRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckNoaWxkcmVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJhc2VQcm9wcyA9IHRoaXMuZ2V0QmFzZVByb3BzKCk7IC8vIFtMZWdhY3ldIGdldE1vdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYGhhdmVSZW5kZXJlZGBcblxuICAgICAgICB2YXIgbWVyZ2VkTW90aW9uID0gdGhpcy5nZXRNb3Rpb24oYmFzZVByb3BzLm1vZGUsIGJhc2VQcm9wcy52aXNpYmxlKTtcbiAgICAgICAgdGhpcy5oYXZlUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhdmVPcGVuZWQgPSB0aGlzLmhhdmVPcGVuZWQgfHwgYmFzZVByb3BzLnZpc2libGUgfHwgYmFzZVByb3BzLmZvcmNlU3ViTWVudVJlbmRlcjsgLy8gbmV2ZXIgcmVuZGVyZWQgbm90IHBsYW5uaW5nIHRvLCBkb24ndCByZW5kZXJcblxuICAgICAgICBpZiAoIXRoaXMuaGF2ZU9wZW5lZCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGJhc2VQcm9wcy5kaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgdmlzaWJsZTogYmFzZVByb3BzLnZpc2libGVcbiAgICAgICAgfSwgbWVyZ2VkTW90aW9uKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgICAgICAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChiYXNlUHJvcHMucHJlZml4Q2xzLCBcIi1zdWJcIiksIGNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChiYXNlUHJvcHMucHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdWJQb3B1cE1lbnUsIE9iamVjdC5hc3NpZ24oe30sIGJhc2VQcm9wcywge1xuICAgICAgICAgICAgaWQ6IF90aGlzMy5pbnRlcm5hbE1lbnVJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICB2YXIgaXNPcGVuID0gcHJvcHMuaXNPcGVuO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5nZXRQcmVmaXhDbHMoKTtcbiAgICAgICAgdmFyIGlzSW5saW5lTW9kZSA9IHByb3BzLm1vZGUgPT09ICdpbmxpbmUnO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChwcm9wcy5tb2RlKSwgKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcm9wcy5jbGFzc05hbWUsICEhcHJvcHMuY2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgdGhpcy5nZXRPcGVuQ2xhc3NOYW1lKCksIGlzT3BlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHRoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lKCksIHByb3BzLmFjdGl2ZSB8fCBpc09wZW4gJiYgIWlzSW5saW5lTW9kZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHRoaXMuZ2V0RGlzYWJsZWRDbGFzc05hbWUoKSwgcHJvcHMuZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCB0aGlzLmdldFNlbGVjdGVkQ2xhc3NOYW1lKCksIHRoaXMuaXNDaGlsZHJlblNlbGVjdGVkKCkpLCBfY2xhc3NOYW1lczIpKTtcblxuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxNZW51SWQpIHtcbiAgICAgICAgICBpZiAocHJvcHMuZXZlbnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxNZW51SWQgPSBcIlwiLmNvbmNhdChwcm9wcy5ldmVudEtleSwgXCIkTWVudVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3VpZCArPSAxO1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbE1lbnVJZCA9IFwiJF9fJFwiLmNvbmNhdChndWlkLCBcIiRNZW51XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtb3VzZUV2ZW50cyA9IHt9O1xuICAgICAgICB2YXIgdGl0bGVDbGlja0V2ZW50cyA9IHt9O1xuICAgICAgICB2YXIgdGl0bGVNb3VzZUV2ZW50cyA9IHt9O1xuXG4gICAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyXG4gICAgICAgICAgfTsgLy8gb25seSB3b3JrcyBpbiB0aXRsZSwgbm90IG91dGVyIGxpXG5cbiAgICAgICAgICB0aXRsZUNsaWNrRXZlbnRzID0ge1xuICAgICAgICAgICAgb25DbGljazogdGhpcy5vblRpdGxlQ2xpY2tcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRpdGxlTW91c2VFdmVudHMgPSB7XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25UaXRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25UaXRsZU1vdXNlTGVhdmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKGlzSW5saW5lTW9kZSkge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJpYU93bnMgPSB7fTsgLy8gb25seSBzZXQgYXJpYS1vd25zIHdoZW4gbWVudSBpcyBvcGVuXG4gICAgICAgIC8vIG90aGVyd2lzZSBpdCB3b3VsZCBiZSBhbiBpbnZhbGlkIGFyaWEtb3ducyB2YWx1ZVxuICAgICAgICAvLyBzaW5jZSBjb3JyZXNwb25kaW5nIG5vZGUgY2Fubm90IGJlIGZvdW5kXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgICAgYXJpYU93bnMgPSB7XG4gICAgICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5pbnRlcm5hbE1lbnVJZFxuICAgICAgICAgIH07XG4gICAgICAgIH0gLy8gZXhwYW5kIGN1c3RvbSBpY29uIHNob3VsZCBOT1QgYmUgZGlzcGxheWVkIGluIG1lbnUgd2l0aCBob3Jpem9udGFsIG1vZGUuXG5cblxuICAgICAgICB2YXIgaWNvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHByb3BzLm1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGljb24gPSB0aGlzLnByb3BzLmV4cGFuZEljb247IC8vIFJlYWN0Tm9kZVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmV4cGFuZEljb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuZXhwYW5kSWNvbiwgX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXRsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVTdWJNZW51VGl0bGUsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aXRsZVwiKSxcbiAgICAgICAgICByb2xlOiBcImJ1dHRvblwiXG4gICAgICAgIH0sIHRpdGxlTW91c2VFdmVudHMsIHRpdGxlQ2xpY2tFdmVudHMsIHtcbiAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogaXNPcGVuXG4gICAgICAgIH0sIGFyaWFPd25zLCB7XG4gICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIHRpdGxlOiB0eXBlb2YgcHJvcHMudGl0bGUgPT09ICdzdHJpbmcnID8gcHJvcHMudGl0bGUgOiB1bmRlZmluZWRcbiAgICAgICAgfSksIHByb3BzLnRpdGxlLCBpY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIilcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMucGFyZW50TWVudS5pc1Jvb3RNZW51ID8gcHJvcHMucGFyZW50TWVudS5wcm9wcy5nZXRQb3B1cENvbnRhaW5lciA6IGZ1bmN0aW9uICh0cmlnZ2VyTm9kZSkge1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyTm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwb3B1cFBsYWNlbWVudE1hcFtwcm9wcy5tb2RlXTtcbiAgICAgICAgdmFyIHBvcHVwQWxpZ24gPSBwcm9wcy5wb3B1cE9mZnNldCA/IHtcbiAgICAgICAgICBvZmZzZXQ6IHByb3BzLnBvcHVwT2Zmc2V0XG4gICAgICAgIH0gOiB7fTtcbiAgICAgICAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gcHJvcHMubW9kZSA9PT0gJ2lubGluZScgPyAnJyA6IHByb3BzLnBvcHVwQ2xhc3NOYW1lO1xuICAgICAgICBwb3B1cENsYXNzTmFtZSArPSBkaXJlY3Rpb24gPT09ICdydGwnID8gXCIgXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpIDogJyc7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb24gPSBwcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbixcbiAgICAgICAgICAgIHN1Yk1lbnVPcGVuRGVsYXkgPSBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICAgICAgZm9yY2VTdWJNZW51UmVuZGVyID0gcHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyLFxuICAgICAgICAgICAgc3ViTWVudUNsb3NlRGVsYXkgPSBwcm9wcy5zdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG4gICAgICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgIH0pOyAvLyBTZXQgb25DbGljayB0byBudWxsLCB0byBpZ25vcmUgcHJvcGFnYXRlZCBvbkNsaWNrIGV2ZW50XG5cbiAgICAgICAgZGVsZXRlIHByb3BzLm9uQ2xpY2s7XG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSBkaXJlY3Rpb24gPT09ICdydGwnID8gT2JqZWN0LmFzc2lnbih7fSwgcGxhY2VtZW50c1J0bCwgYnVpbHRpblBsYWNlbWVudHMpIDogT2JqZWN0LmFzc2lnbih7fSwgcGxhY2VtZW50cywgYnVpbHRpblBsYWNlbWVudHMpO1xuICAgICAgICBkZWxldGUgcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBtb3VzZUV2ZW50cywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHJvbGU6IFwibWVudWl0ZW1cIlxuICAgICAgICB9KSwgaXNJbmxpbmVNb2RlICYmIHRpdGxlLCBpc0lubGluZU1vZGUgJiYgY2hpbGRyZW4sICFpc0lubGluZU1vZGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgcG9wdXBDbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wb3B1cFwiKSwgcG9wdXBDbGFzc05hbWUpLFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICBidWlsdGluUGxhY2VtZW50czogcGxhY2VtZW50LFxuICAgICAgICAgIHBvcHVwUGxhY2VtZW50OiBwb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICBwb3B1cFZpc2libGU6IGlzT3BlbixcbiAgICAgICAgICBwb3B1cEFsaWduOiBwb3B1cEFsaWduLFxuICAgICAgICAgIHBvcHVwOiBjaGlsZHJlbixcbiAgICAgICAgICBhY3Rpb246IGRpc2FibGVkID8gW10gOiBbdHJpZ2dlclN1Yk1lbnVBY3Rpb25dLFxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IHN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiB0aGlzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgIGZvcmNlUmVuZGVyOiBmb3JjZVN1Yk1lbnVSZW5kZXJcbiAgICAgICAgfSwgdGl0bGUpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3ViTWVudTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFN1Yk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIG9uTW91c2VFbnRlcjogbm9vcCxcbiAgICBvbk1vdXNlTGVhdmU6IG5vb3AsXG4gICAgb25UaXRsZU1vdXNlRW50ZXI6IG5vb3AsXG4gICAgb25UaXRsZU1vdXNlTGVhdmU6IG5vb3AsXG4gICAgb25UaXRsZUNsaWNrOiBub29wLFxuICAgIG1hbnVhbFJlZjogbm9vcCxcbiAgICBtb2RlOiAndmVydGljYWwnLFxuICAgIHRpdGxlOiAnJ1xuICB9O1xuICByZXR1cm4gU3ViTWVudTtcbn0oKTtcblxuZXhwb3J0IHsgU3ViTWVudSB9O1xudmFyIGNvbm5lY3RlZCA9IGNvbm5lY3QoZnVuY3Rpb24gKF9yZWYyLCBfcmVmMykge1xuICB2YXIgb3BlbktleXMgPSBfcmVmMi5vcGVuS2V5cyxcbiAgICAgIGFjdGl2ZUtleSA9IF9yZWYyLmFjdGl2ZUtleSxcbiAgICAgIHNlbGVjdGVkS2V5cyA9IF9yZWYyLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjMuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjMuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBpc09wZW46IG9wZW5LZXlzLmluZGV4T2YoZXZlbnRLZXkpID4gLTEsXG4gICAgYWN0aXZlOiBhY3RpdmVLZXlbc3ViTWVudUtleV0gPT09IGV2ZW50S2V5LFxuICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gIH07XG59KShTdWJNZW51KTtcbmNvbm5lY3RlZC5pc1N1Yk1lbnUgPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gXCJyYy11dGlsL2VzL2NyZWF0ZUNoYWluZWRGdW5jdGlvblwiO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleCwgbG9vcE1lbnVJdGVtLCBub29wLCBtZW51QWxsUHJvcHMsIGlzTW9iaWxlRGV2aWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBET01XcmFwIGZyb20gJy4vRE9NV3JhcCc7XG5cbmZ1bmN0aW9uIGFsbERpc2FibGVkKGFycikge1xuICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnIuZXZlcnkoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gISFjLnByb3BzLmRpc2FibGVkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWN0aXZlS2V5KHN0b3JlLCBtZW51SWQsIGFjdGl2ZUtleSkge1xuICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5zZXRTdGF0ZSh7XG4gICAgYWN0aXZlS2V5OiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmFjdGl2ZUtleSksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIG1lbnVJZCwgYWN0aXZlS2V5KSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50S2V5KHByb3BzKSB7XG4gIC8vIHdoZW4gZXZlbnRLZXkgbm90IGF2YWlsYWJsZSAsaXQncyBtZW51IGFuZCByZXR1cm4gbWVudSBpZCAnMC1tZW51LSdcbiAgcmV0dXJuIHByb3BzLmV2ZW50S2V5IHx8ICcwLW1lbnUtJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZUtleShwcm9wcywgb3JpZ2luYWxBY3RpdmVLZXkpIHtcbiAgdmFyIGFjdGl2ZUtleSA9IG9yaWdpbmFsQWN0aXZlS2V5O1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGV2ZW50S2V5ID0gcHJvcHMuZXZlbnRLZXk7XG5cbiAgaWYgKGFjdGl2ZUtleSkge1xuICAgIHZhciBmb3VuZDtcbiAgICBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICBpZiAoYyAmJiBjLnByb3BzICYmICFjLnByb3BzLmRpc2FibGVkICYmIGFjdGl2ZUtleSA9PT0gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoYywgZXZlbnRLZXksIGkpKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVLZXkgPSBudWxsO1xuXG4gIGlmIChwcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgICBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICBpZiAoIWFjdGl2ZUtleSAmJiBjICYmICFjLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGFjdGl2ZUtleSA9IGdldEtleUZyb21DaGlsZHJlbkluZGV4KGMsIGV2ZW50S2V5LCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlS2V5O1xuICB9XG5cbiAgcmV0dXJuIGFjdGl2ZUtleTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUmVmKGMpIHtcbiAgaWYgKGMpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluc3RhbmNlQXJyYXkuaW5kZXhPZihjKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnQgaWYgaXQncyBhbHJlYWR5IGluc2lkZSBpbnN0YW5jZUFycmF5XG4gICAgICB0aGlzLmluc3RhbmNlQXJyYXlbaW5kZXhdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIGNvbXBvbmVudCBpZiBpdCdzIG5vdCBpbiBpbnN0YW5jZUFycmF5IHlldDtcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheS5wdXNoKGMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgU3ViUG9wdXBNZW51ID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIFN1YlBvcHVwTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdWJQb3B1cE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdWJQb3B1cE1lbnUpO1xuXG4gICAgZnVuY3Rpb24gU3ViUG9wdXBNZW51KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJQb3B1cE1lbnUpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgIC8qKlxuICAgICAgICogYWxsIGtleWJvYXJkIGV2ZW50cyBjYWxsYmFja3MgcnVuIGZyb20gaGVyZSBhdCBmaXJzdFxuICAgICAgICpcbiAgICAgICAqIG5vdGU6XG4gICAgICAgKiAgVGhpcyBsZWdhY3kgY29kZSB0aGF0IGBvbktleURvd25gIGlzIGNhbGxlZCBieSBwYXJlbnQgaW5zdGVhZCBvZiBkb20gc2VsZi5cbiAgICAgICAqICB3aGljaCBuZWVkIHJldHVybiBjb2RlIHRvIGNoZWNrIGlmIHRoaXMgZXZlbnQgaXMgaGFuZGxlZFxuICAgICAgICovXG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICAgICAgdmFyIGhhbmRsZWQ7XG5cbiAgICAgICAgX3RoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICBpZiAob2JqICYmIG9iai5wcm9wcy5hY3RpdmUgJiYgb2JqLm9uS2V5RG93bikge1xuICAgICAgICAgICAgaGFuZGxlZCA9IG9iai5vbktleURvd24oZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBudWxsO1xuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLlVQIHx8IGtleUNvZGUgPT09IEtleUNvZGUuRE9XTikge1xuICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBfdGhpcy5zdGVwKGtleUNvZGUgPT09IEtleUNvZGUuVVAgPyAtMSA6IDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdXBkYXRlQWN0aXZlS2V5KF90aGlzLnByb3BzLnN0b3JlLCBnZXRFdmVudEtleShfdGhpcy5wcm9wcyksIGFjdGl2ZUl0ZW0ucHJvcHMuZXZlbnRLZXkpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soYWN0aXZlSXRlbSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25JdGVtSG92ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIga2V5ID0gZS5rZXksXG4gICAgICAgICAgICBob3ZlciA9IGUuaG92ZXI7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUtleShfdGhpcy5wcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkoX3RoaXMucHJvcHMpLCBob3ZlciA/IGtleSA6IG51bGwpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25EZXNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RJbmZvKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRGVzZWxlY3Qoc2VsZWN0SW5mbyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RJbmZvKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdEluZm8pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIF90aGlzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbnN0YW5jZUFycmF5O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RlcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX3RoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKTtcblxuICAgICAgICB2YXIgYWN0aXZlS2V5ID0gX3RoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXlbZ2V0RXZlbnRLZXkoX3RoaXMucHJvcHMpXTtcblxuICAgICAgICB2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIGlmICghbGVuKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KCkucmV2ZXJzZSgpO1xuICAgICAgICB9IC8vIGZpbmQgY3VycmVudCBhY3RpdmVJbmRleFxuXG5cbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgIGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjLCBjaSkge1xuICAgICAgICAgIGlmIChjICYmIGMucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleSkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjaTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3QgJiYgYWN0aXZlSW5kZXggIT09IC0xICYmIGFsbERpc2FibGVkKGNoaWxkcmVuLnNsaWNlKGFjdGl2ZUluZGV4LCBsZW4gLSAxKSkpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gKGFjdGl2ZUluZGV4ICsgMSkgJSBsZW47XG4gICAgICAgIHZhciBpID0gc3RhcnQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgaWYgKCFjaGlsZCB8fCBjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaSA9IChpICsgMSkgJSBsZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGkgIT09IHN0YXJ0KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtID0gZnVuY3Rpb24gKGNoaWxkLCBpLCBleHRyYVByb3BzKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHM7XG5cbiAgICAgICAgdmFyIGtleSA9IGdldEtleUZyb21DaGlsZHJlbkluZGV4KGNoaWxkLCBwcm9wcy5ldmVudEtleSwgaSk7XG4gICAgICAgIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzExNTE3I2lzc3VlY29tbWVudC00Nzc0MDMwNTVcblxuICAgICAgICBpZiAoIWNoaWxkUHJvcHMgfHwgdHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzQWN0aXZlID0ga2V5ID09PSBzdGF0ZS5hY3RpdmVLZXk7XG5cbiAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgIG1vZGU6IGNoaWxkUHJvcHMubW9kZSB8fCBwcm9wcy5tb2RlLFxuICAgICAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCxcbiAgICAgICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgICAgICByZW5kZXJNZW51SXRlbTogX3RoaXMucmVuZGVyTWVudUl0ZW0sXG4gICAgICAgICAgcm9vdFByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIHBhcmVudE1lbnU6IHByb3BzLnBhcmVudE1lbnUsXG4gICAgICAgICAgLy8gY3VzdG9taXplZCByZWYgZnVuY3Rpb24sIG5lZWQgdG8gYmUgaW52b2tlZCBtYW51YWxseSBpbiBjaGlsZCdzIGNvbXBvbmVudERpZE1vdW50XG4gICAgICAgICAgbWFudWFsUmVmOiBjaGlsZFByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGNoaWxkLnJlZiwgc2F2ZVJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSksXG4gICAgICAgICAgZXZlbnRLZXk6IGtleSxcbiAgICAgICAgICBhY3RpdmU6ICFjaGlsZFByb3BzLmRpc2FibGVkICYmIGlzQWN0aXZlLFxuICAgICAgICAgIG11bHRpcGxlOiBwcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIChjaGlsZFByb3BzLm9uQ2xpY2sgfHwgbm9vcCkoZSk7XG5cbiAgICAgICAgICAgIF90aGlzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkl0ZW1Ib3ZlcjogX3RoaXMub25JdGVtSG92ZXIsXG4gICAgICAgICAgbW90aW9uOiBwcm9wcy5tb3Rpb24sXG4gICAgICAgICAgc3ViTWVudU9wZW5EZWxheTogcHJvcHMuc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBzdWJNZW51Q2xvc2VEZWxheTogcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgICAgZm9yY2VTdWJNZW51UmVuZGVyOiBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXIsXG4gICAgICAgICAgb25PcGVuQ2hhbmdlOiBfdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICAgICAgb25EZXNlbGVjdDogX3RoaXMub25EZXNlbGVjdCxcbiAgICAgICAgICBvblNlbGVjdDogX3RoaXMub25TZWxlY3QsXG4gICAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgIGl0ZW1JY29uOiBjaGlsZFByb3BzLml0ZW1JY29uIHx8IF90aGlzLnByb3BzLml0ZW1JY29uLFxuICAgICAgICAgIGV4cGFuZEljb246IGNoaWxkUHJvcHMuZXhwYW5kSWNvbiB8fCBfdGhpcy5wcm9wcy5leHBhbmRJY29uXG4gICAgICAgIH0sIGV4dHJhUHJvcHMpLCB7fSwge1xuICAgICAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uXG4gICAgICAgIH0pOyAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEzOTQzXG5cblxuICAgICAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScgfHwgaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24gPSAnY2xpY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3Q2hpbGRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW5kZXJNZW51SXRlbSA9IGZ1bmN0aW9uIChjLCBpLCBzdWJNZW51S2V5KSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdmFyIGV4dHJhUHJvcHMgPSB7XG4gICAgICAgICAgb3BlbktleXM6IHN0YXRlLm9wZW5LZXlzLFxuICAgICAgICAgIHNlbGVjdGVkS2V5czogc3RhdGUuc2VsZWN0ZWRLZXlzLFxuICAgICAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uOiBfdGhpcy5wcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbixcbiAgICAgICAgICBzdWJNZW51S2V5OiBzdWJNZW51S2V5XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW5kZXJDb21tb25NZW51SXRlbShjLCBpLCBleHRyYVByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHByb3BzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlS2V5OiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5KSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcHMuZXZlbnRLZXksIGdldEFjdGl2ZUtleShwcm9wcywgcHJvcHMuYWN0aXZlS2V5KSkpXG4gICAgICB9KTtcbiAgICAgIF90aGlzLmluc3RhbmNlQXJyYXkgPSBbXTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3ViUG9wdXBNZW51LCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hbnVhbFJlZikge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFudWFsUmVmKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMudmlzaWJsZSB8fCB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG9yaWdpbmFsQWN0aXZlS2V5ID0gJ2FjdGl2ZUtleScgaW4gcHJvcHMgPyBwcm9wcy5hY3RpdmVLZXkgOiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZUtleVtnZXRFdmVudEtleShwcm9wcyldO1xuICAgICAgICB2YXIgYWN0aXZlS2V5ID0gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUtleSAhPT0gb3JpZ2luYWxBY3RpdmVLZXkpIHtcbiAgICAgICAgICB1cGRhdGVBY3RpdmVLZXkocHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KHByb3BzKSwgYWN0aXZlS2V5KTtcbiAgICAgICAgfSBlbHNlIGlmICgnYWN0aXZlS2V5JyBpbiBwcmV2UHJvcHMpIHtcbiAgICAgICAgICAvLyBJZiBwcmV2IGFjdGl2ZUtleSBpcyBub3Qgc2FtZSBhcyBjdXJyZW50IGFjdGl2ZUtleSxcbiAgICAgICAgICAvLyB3ZSBzaG91bGQgc2V0IGl0LlxuICAgICAgICAgIHZhciBwcmV2QWN0aXZlS2V5ID0gZ2V0QWN0aXZlS2V5KHByZXZQcm9wcywgcHJldlByb3BzLmFjdGl2ZUtleSk7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlS2V5ICE9PSBwcmV2QWN0aXZlS2V5KSB7XG4gICAgICAgICAgICB1cGRhdGVBY3RpdmVLZXkocHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KHByb3BzKSwgYWN0aXZlS2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHByb3BzLnByZWZpeENscywgcHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocHJvcHMubW9kZSkpO1xuICAgICAgICB2YXIgZG9tUHJvcHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgLy8gcm9sZSBjb3VsZCBiZSAnc2VsZWN0JyBhbmQgYnkgZGVmYXVsdCBzZXQgdG8gbWVudVxuICAgICAgICAgIHJvbGU6IHByb3BzLnJvbGUgfHwgJ21lbnUnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICAgICAgZG9tUHJvcHMuaWQgPSBwcm9wcy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5mb2N1c2FibGUpIHtcbiAgICAgICAgICBkb21Qcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgZG9tUHJvcHMub25LZXlEb3duID0gdGhpcy5vbktleURvd247XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleSxcbiAgICAgICAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgbGV2ZWwgPSBwcm9wcy5sZXZlbCxcbiAgICAgICAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IHByb3BzLm92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgICB0aGVtZSA9IHByb3BzLnRoZW1lO1xuICAgICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9KTsgLy8gT3RoZXJ3aXNlLCB0aGUgcHJvcGFnYXRlZCBjbGljayBldmVudCB3aWxsIHRyaWdnZXIgYW5vdGhlciBvbkNsaWNrXG5cbiAgICAgICAgZGVsZXRlIHByb3BzLm9uQ2xpY2s7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERPTVdyYXAsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvcjogb3ZlcmZsb3dlZEluZGljYXRvclxuICAgICAgICB9LCBkb21Qcm9wcyksIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlck1lbnVJdGVtKGMsIGksIGV2ZW50S2V5IHx8ICcwLW1lbnUtJyk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3ViUG9wdXBNZW51O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgU3ViUG9wdXBNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdyYy1tZW51JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgbGV2ZWw6IDEsXG4gICAgaW5saW5lSW5kZW50OiAyNCxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvY3VzYWJsZTogdHJ1ZSxcbiAgICBzdHlsZToge30sXG4gICAgbWFudWFsUmVmOiBub29wXG4gIH07XG4gIHJldHVybiBTdWJQb3B1cE1lbnU7XG59KCk7XG5cbmV4cG9ydCB7IFN1YlBvcHVwTWVudSB9O1xudmFyIGNvbm5lY3RlZCA9IGNvbm5lY3QoKShTdWJQb3B1cE1lbnUpO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkOyIsImltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL1N1Yk1lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnVJdGVtR3JvdXAgZnJvbSAnLi9NZW51SXRlbUdyb3VwJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5leHBvcnQgeyBTdWJNZW51LCBNZW51SXRlbSBhcyBJdGVtLCBNZW51SXRlbSwgTWVudUl0ZW1Hcm91cCwgTWVudUl0ZW1Hcm91cCBhcyBJdGVtR3JvdXAsIERpdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwidmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IHtcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTddXG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDddXG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXVxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF1cbiAgfVxufTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50c1J0bCA9IHtcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTddXG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDddXG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF1cbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF1cbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc01vYmlsZSBmcm9tICcuL3V0aWxzL2lzTW9iaWxlJztcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgbWVudUV2ZW50S2V5LCBpbmRleCkge1xuICB2YXIgcHJlZml4ID0gbWVudUV2ZW50S2V5IHx8ICcnO1xuICByZXR1cm4gY2hpbGQua2V5IHx8IFwiXCIuY29uY2F0KHByZWZpeCwgXCJpdGVtX1wiKS5jb25jYXQoaW5kZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkoZXZlbnRLZXkpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KGV2ZW50S2V5LCBcIi1tZW51LVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGNiKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIGluZGV4ICs9IDE7XG5cbiAgICBpZiAoYyAmJiBjLnR5cGUgJiYgYy50eXBlLmlzTWVudUl0ZW1Hcm91cCkge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoYzIpIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgY2IoYzIsIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYihjLCBpbmRleCk7XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjaGlsZHJlbiwga2V5cywgcmV0KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkcmVuIHx8IHJldC5maW5kKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICBpZiAoYykge1xuICAgICAgdmFyIGNvbnN0cnVjdCA9IGMudHlwZTtcblxuICAgICAgaWYgKCFjb25zdHJ1Y3QgfHwgIShjb25zdHJ1Y3QuaXNTdWJNZW51IHx8IGNvbnN0cnVjdC5pc01lbnVJdGVtIHx8IGNvbnN0cnVjdC5pc01lbnVJdGVtR3JvdXApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleXMuaW5kZXhPZihjLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldC5maW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjLnByb3BzLmNoaWxkcmVuLCBrZXlzLCByZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgdmFyIG1lbnVBbGxQcm9wcyA9IFsnZGVmYXVsdFNlbGVjdGVkS2V5cycsICdzZWxlY3RlZEtleXMnLCAnZGVmYXVsdE9wZW5LZXlzJywgJ29wZW5LZXlzJywgJ21vZGUnLCAnZ2V0UG9wdXBDb250YWluZXInLCAnb25TZWxlY3QnLCAnb25EZXNlbGVjdCcsICdvbkRlc3Ryb3knLCAnb3BlblRyYW5zaXRpb25OYW1lJywgJ29wZW5BbmltYXRpb24nLCAnc3ViTWVudU9wZW5EZWxheScsICdzdWJNZW51Q2xvc2VEZWxheScsICdmb3JjZVN1Yk1lbnVSZW5kZXInLCAndHJpZ2dlclN1Yk1lbnVBY3Rpb24nLCAnbGV2ZWwnLCAnc2VsZWN0YWJsZScsICdtdWx0aXBsZScsICdvbk9wZW5DaGFuZ2UnLCAndmlzaWJsZScsICdmb2N1c2FibGUnLCAnZGVmYXVsdEFjdGl2ZUZpcnN0JywgJ3ByZWZpeENscycsICdpbmxpbmVJbmRlbnQnLCAncGFyZW50TWVudScsICd0aXRsZScsICdyb290UHJlZml4Q2xzJywgJ2V2ZW50S2V5JywgJ2FjdGl2ZScsICdvbkl0ZW1Ib3ZlcicsICdvblRpdGxlTW91c2VFbnRlcicsICdvblRpdGxlTW91c2VMZWF2ZScsICdvblRpdGxlQ2xpY2snLCAncG9wdXBBbGlnbicsICdwb3B1cE9mZnNldCcsICdpc09wZW4nLCAncmVuZGVyTWVudUl0ZW0nLCAnbWFudWFsUmVmJywgJ3N1Yk1lbnVLZXknLCAnZGlzYWJsZWQnLCAnaW5kZXgnLCAnaXNTZWxlY3RlZCcsICdzdG9yZScsICdhY3RpdmVLZXknLCAnYnVpbHRpblBsYWNlbWVudHMnLCAnb3ZlcmZsb3dlZEluZGljYXRvcicsICdtb3Rpb24nLCAvLyB0aGUgZm9sbG93aW5nIGtleXMgZm91bmQgbmVlZCB0byBiZSByZW1vdmVkIGZyb20gdGVzdCByZWdyZXNzaW9uXG4nYXR0cmlidXRlJywgJ3ZhbHVlJywgJ3BvcHVwQ2xhc3NOYW1lJywgJ2lubGluZUNvbGxhcHNlZCcsICdtZW51JywgJ3RoZW1lJywgJ2l0ZW1JY29uJywgJ2V4cGFuZEljb24nXTsgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNDAwN1xuLy8gcmVmOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNjA4ODlcbi8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCByZXR1cm4gdGhlIGZ1bGwgcHJlY2lzaW9uIHZhbHVlLCB3aGljaCBpc1xuLy8gbm90IHRoZSBzYW1lIGJlaGF2aW9yIGFzIG9uIGNocm9tZS4gU2V0IHRoZSBwcmVjaXNpb24gdG8gNiB0b1xuLy8gdW5pZnkgdGhlaXIgYmVoYXZpb3JcblxuZXhwb3J0IHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgdmFyIHdpZHRoID0gZWxlbSAmJiB0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicgJiYgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICBpZiAod2lkdGgpIHtcbiAgICB3aWR0aCA9ICt3aWR0aC50b0ZpeGVkKDYpO1xuICB9XG5cbiAgcmV0dXJuIHdpZHRoIHx8IDA7XG59O1xuZXhwb3J0IHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW0sIHN0eWxlUHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChlbGVtICYmIF90eXBlb2YoZWxlbS5zdHlsZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZWxlbS5zdHlsZVtzdHlsZVByb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59O1xuZXhwb3J0IHZhciBpc01vYmlsZURldmljZSA9IGZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICByZXR1cm4gaXNNb2JpbGUuYW55O1xufTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vLyBNSVQgTGljZW5zZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9rYWltYWxsZWEvaXNNb2JpbGVcbnZhciBhcHBsZVBob25lID0gL2lQaG9uZS9pO1xudmFyIGFwcGxlSXBvZCA9IC9pUG9kL2k7XG52YXIgYXBwbGVUYWJsZXQgPSAvaVBhZC9pO1xudmFyIGFuZHJvaWRQaG9uZSA9IC9cXGJBbmRyb2lkKD86LispTW9iaWxlXFxiL2k7IC8vIE1hdGNoICdBbmRyb2lkJyBBTkQgJ01vYmlsZSdcblxudmFyIGFuZHJvaWRUYWJsZXQgPSAvQW5kcm9pZC9pO1xudmFyIGFtYXpvblBob25lID0gL1xcYkFuZHJvaWQoPzouKylTRDQ5MzBVUlxcYi9pO1xudmFyIGFtYXpvblRhYmxldCA9IC9cXGJBbmRyb2lkKD86LispKD86S0ZbQS1aXXsyLDR9KVxcYi9pO1xudmFyIHdpbmRvd3NQaG9uZSA9IC9XaW5kb3dzIFBob25lL2k7XG52YXIgd2luZG93c1RhYmxldCA9IC9cXGJXaW5kb3dzKD86LispQVJNXFxiL2k7IC8vIE1hdGNoICdXaW5kb3dzJyBBTkQgJ0FSTSdcblxudmFyIG90aGVyQmxhY2tiZXJyeSA9IC9CbGFja0JlcnJ5L2k7XG52YXIgb3RoZXJCbGFja2JlcnJ5MTAgPSAvQkIxMC9pO1xudmFyIG90aGVyT3BlcmEgPSAvT3BlcmEgTWluaS9pO1xudmFyIG90aGVyQ2hyb21lID0gL1xcYihDcmlPU3xDaHJvbWUpKD86LispTW9iaWxlL2k7XG52YXIgb3RoZXJGaXJlZm94ID0gL01vYmlsZSg/Oi4rKUZpcmVmb3hcXGIvaTsgLy8gTWF0Y2ggJ01vYmlsZScgQU5EICdGaXJlZm94J1xuXG5mdW5jdGlvbiBtYXRjaChyZWdleCwgdXNlckFnZW50KSB7XG4gIHJldHVybiByZWdleC50ZXN0KHVzZXJBZ2VudCk7XG59XG5cbmZ1bmN0aW9uIGlzTW9iaWxlKHVzZXJBZ2VudCkge1xuICB2YXIgdWEgPSB1c2VyQWdlbnQgfHwgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnKTsgLy8gRmFjZWJvb2sgbW9iaWxlIGFwcCdzIGludGVncmF0ZWQgYnJvd3NlciBhZGRzIGEgYnVuY2ggb2Ygc3RyaW5ncyB0aGF0XG4gIC8vIG1hdGNoIGV2ZXJ5dGhpbmcuIFN0cmlwIGl0IG91dCBpZiBpdCBleGlzdHMuXG5cbiAgdmFyIHRtcCA9IHVhLnNwbGl0KCdbRkJBTicpO1xuXG4gIGlmICh0eXBlb2YgdG1wWzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfdG1wID0gdG1wO1xuXG4gICAgdmFyIF90bXAyID0gX3NsaWNlZFRvQXJyYXkoX3RtcCwgMSk7XG5cbiAgICB1YSA9IF90bXAyWzBdO1xuICB9IC8vIFR3aXR0ZXIgbW9iaWxlIGFwcCdzIGludGVncmF0ZWQgYnJvd3NlciBvbiBpUGFkIGFkZHMgYSBcIlR3aXR0ZXIgZm9yXG4gIC8vIGlQaG9uZVwiIHN0cmluZy4gU2FtZSBwcm9iYWJseSBoYXBwZW5zIG9uIG90aGVyIHRhYmxldCBwbGF0Zm9ybXMuXG4gIC8vIFRoaXMgd2lsbCBjb25mdXNlIGRldGVjdGlvbiBzbyBzdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuXG5cbiAgdG1wID0gdWEuc3BsaXQoJ1R3aXR0ZXInKTtcblxuICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgX3RtcDMgPSB0bXA7XG5cbiAgICB2YXIgX3RtcDQgPSBfc2xpY2VkVG9BcnJheShfdG1wMywgMSk7XG5cbiAgICB1YSA9IF90bXA0WzBdO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBhcHBsZToge1xuICAgICAgcGhvbmU6IG1hdGNoKGFwcGxlUGhvbmUsIHVhKSAmJiAhbWF0Y2god2luZG93c1Bob25lLCB1YSksXG4gICAgICBpcG9kOiBtYXRjaChhcHBsZUlwb2QsIHVhKSxcbiAgICAgIHRhYmxldDogIW1hdGNoKGFwcGxlUGhvbmUsIHVhKSAmJiBtYXRjaChhcHBsZVRhYmxldCwgdWEpICYmICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSxcbiAgICAgIGRldmljZTogKG1hdGNoKGFwcGxlUGhvbmUsIHVhKSB8fCBtYXRjaChhcHBsZUlwb2QsIHVhKSB8fCBtYXRjaChhcHBsZVRhYmxldCwgdWEpKSAmJiAhbWF0Y2god2luZG93c1Bob25lLCB1YSlcbiAgICB9LFxuICAgIGFtYXpvbjoge1xuICAgICAgcGhvbmU6IG1hdGNoKGFtYXpvblBob25lLCB1YSksXG4gICAgICB0YWJsZXQ6ICFtYXRjaChhbWF6b25QaG9uZSwgdWEpICYmIG1hdGNoKGFtYXpvblRhYmxldCwgdWEpLFxuICAgICAgZGV2aWNlOiBtYXRjaChhbWF6b25QaG9uZSwgdWEpIHx8IG1hdGNoKGFtYXpvblRhYmxldCwgdWEpXG4gICAgfSxcbiAgICBhbmRyb2lkOiB7XG4gICAgICBwaG9uZTogIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpICYmIG1hdGNoKGFtYXpvblBob25lLCB1YSkgfHwgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpICYmIG1hdGNoKGFuZHJvaWRQaG9uZSwgdWEpLFxuICAgICAgdGFibGV0OiAhbWF0Y2god2luZG93c1Bob25lLCB1YSkgJiYgIW1hdGNoKGFtYXpvblBob25lLCB1YSkgJiYgIW1hdGNoKGFuZHJvaWRQaG9uZSwgdWEpICYmIChtYXRjaChhbWF6b25UYWJsZXQsIHVhKSB8fCBtYXRjaChhbmRyb2lkVGFibGV0LCB1YSkpLFxuICAgICAgZGV2aWNlOiAhbWF0Y2god2luZG93c1Bob25lLCB1YSkgJiYgKG1hdGNoKGFtYXpvblBob25lLCB1YSkgfHwgbWF0Y2goYW1hem9uVGFibGV0LCB1YSkgfHwgbWF0Y2goYW5kcm9pZFBob25lLCB1YSkgfHwgbWF0Y2goYW5kcm9pZFRhYmxldCwgdWEpKSB8fCBtYXRjaCgvXFxib2todHRwXFxiL2ksIHVhKVxuICAgIH0sXG4gICAgd2luZG93czoge1xuICAgICAgcGhvbmU6IG1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpLFxuICAgICAgdGFibGV0OiBtYXRjaCh3aW5kb3dzVGFibGV0LCB1YSksXG4gICAgICBkZXZpY2U6IG1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpIHx8IG1hdGNoKHdpbmRvd3NUYWJsZXQsIHVhKVxuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGJsYWNrYmVycnk6IG1hdGNoKG90aGVyQmxhY2tiZXJyeSwgdWEpLFxuICAgICAgYmxhY2tiZXJyeTEwOiBtYXRjaChvdGhlckJsYWNrYmVycnkxMCwgdWEpLFxuICAgICAgb3BlcmE6IG1hdGNoKG90aGVyT3BlcmEsIHVhKSxcbiAgICAgIGZpcmVmb3g6IG1hdGNoKG90aGVyRmlyZWZveCwgdWEpLFxuICAgICAgY2hyb21lOiBtYXRjaChvdGhlckNocm9tZSwgdWEpLFxuICAgICAgZGV2aWNlOiBtYXRjaChvdGhlckJsYWNrYmVycnksIHVhKSB8fCBtYXRjaChvdGhlckJsYWNrYmVycnkxMCwgdWEpIHx8IG1hdGNoKG90aGVyT3BlcmEsIHVhKSB8fCBtYXRjaChvdGhlckZpcmVmb3gsIHVhKSB8fCBtYXRjaChvdGhlckNocm9tZSwgdWEpXG4gICAgfSxcbiAgICAvLyBBZGRpdGlvbmFsXG4gICAgYW55OiBudWxsLFxuICAgIHBob25lOiBudWxsLFxuICAgIHRhYmxldDogbnVsbFxuICB9O1xuICByZXN1bHQuYW55ID0gcmVzdWx0LmFwcGxlLmRldmljZSB8fCByZXN1bHQuYW5kcm9pZC5kZXZpY2UgfHwgcmVzdWx0LndpbmRvd3MuZGV2aWNlIHx8IHJlc3VsdC5vdGhlci5kZXZpY2U7IC8vIGV4Y2x1ZGVzICdvdGhlcicgZGV2aWNlcyBhbmQgaXBvZHMsIHRhcmdldGluZyB0b3VjaHNjcmVlbiBwaG9uZXNcblxuICByZXN1bHQucGhvbmUgPSByZXN1bHQuYXBwbGUucGhvbmUgfHwgcmVzdWx0LmFuZHJvaWQucGhvbmUgfHwgcmVzdWx0LndpbmRvd3MucGhvbmU7XG4gIHJlc3VsdC50YWJsZXQgPSByZXN1bHQuYXBwbGUudGFibGV0IHx8IHJlc3VsdC5hbmRyb2lkLnRhYmxldCB8fCByZXN1bHQud2luZG93cy50YWJsZXQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBkZWZhdWx0UmVzdWx0ID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpc01vYmlsZSgpKSwge30sIHtcbiAgaXNNb2JpbGU6IGlzTW9iaWxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFJlc3VsdDsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TW90aW9uKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgbW90aW9uID0gX3JlZi5tb3Rpb24sXG4gICAgICBvcGVuQW5pbWF0aW9uID0gX3JlZi5vcGVuQW5pbWF0aW9uLFxuICAgICAgb3BlblRyYW5zaXRpb25OYW1lID0gX3JlZi5vcGVuVHJhbnNpdGlvbk5hbWU7XG5cbiAgaWYgKG1vdGlvbikge1xuICAgIHJldHVybiBtb3Rpb247XG4gIH1cblxuICBpZiAoX3R5cGVvZihvcGVuQW5pbWF0aW9uKSA9PT0gJ29iamVjdCcgJiYgb3BlbkFuaW1hdGlvbikge1xuICAgIHdhcm5pbmcoZmFsc2UsICdPYmplY3QgdHlwZSBvZiBgb3BlbkFuaW1hdGlvbmAgaXMgcmVtb3ZlZC4gUGxlYXNlIHVzZSBgbW90aW9uYCBpbnN0ZWFkLicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcGVuQW5pbWF0aW9uID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW4tXCIpLmNvbmNhdChvcGVuQW5pbWF0aW9uKVxuICAgIH07XG4gIH1cblxuICBpZiAob3BlblRyYW5zaXRpb25OYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IG9wZW5UcmFuc2l0aW9uTmFtZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgQ29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcbiAgdmFyIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGU7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXJcIiksXG4gICAgaWQ6IGlkLFxuICAgIHJvbGU6IFwidG9vbHRpcFwiLFxuICAgIHN0eWxlOiBvdmVybGF5SW5uZXJTdHlsZVxuICB9LCB0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJyA/IG92ZXJsYXkoKSA6IG92ZXJsYXkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gVG9vbHRpcChwcm9wcywgcmVmKSB7XG4gIHZhciBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyR0cmlnZ2VyID0gcHJvcHMudHJpZ2dlcixcbiAgICAgIHRyaWdnZXIgPSBfcHJvcHMkdHJpZ2dlciA9PT0gdm9pZCAwID8gWydob3ZlciddIDogX3Byb3BzJHRyaWdnZXIsXG4gICAgICBfcHJvcHMkbW91c2VFbnRlckRlbGEgPSBwcm9wcy5tb3VzZUVudGVyRGVsYXksXG4gICAgICBtb3VzZUVudGVyRGVsYXkgPSBfcHJvcHMkbW91c2VFbnRlckRlbGEgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbW91c2VFbnRlckRlbGEsXG4gICAgICBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPSBwcm9wcy5tb3VzZUxlYXZlRGVsYXksXG4gICAgICBtb3VzZUxlYXZlRGVsYXkgPSBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPT09IHZvaWQgMCA/IDAuMSA6IF9wcm9wcyRtb3VzZUxlYXZlRGVsYSxcbiAgICAgIG92ZXJsYXlTdHlsZSA9IHByb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtdG9vbHRpcCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IHByb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICBfcHJvcHMkcGxhY2VtZW50ID0gcHJvcHMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ3JpZ2h0JyA6IF9wcm9wcyRwbGFjZW1lbnQsXG4gICAgICBfcHJvcHMkYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGFsaWduID0gX3Byb3BzJGFsaWduID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRhbGlnbixcbiAgICAgIF9wcm9wcyRkZXN0cm95VG9vbHRpcCA9IHByb3BzLmRlc3Ryb3lUb29sdGlwT25IaWRlLFxuICAgICAgZGVzdHJveVRvb2x0aXBPbkhpZGUgPSBfcHJvcHMkZGVzdHJveVRvb2x0aXAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRlc3Ryb3lUb29sdGlwLFxuICAgICAgZGVmYXVsdFZpc2libGUgPSBwcm9wcy5kZWZhdWx0VmlzaWJsZSxcbiAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wib3ZlcmxheUNsYXNzTmFtZVwiLCBcInRyaWdnZXJcIiwgXCJtb3VzZUVudGVyRGVsYXlcIiwgXCJtb3VzZUxlYXZlRGVsYXlcIiwgXCJvdmVybGF5U3R5bGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZVwiLCBcImFmdGVyVmlzaWJsZUNoYW5nZVwiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwiYW5pbWF0aW9uXCIsIFwicGxhY2VtZW50XCIsIFwiYWxpZ25cIiwgXCJkZXN0cm95VG9vbHRpcE9uSGlkZVwiLCBcImRlZmF1bHRWaXNpYmxlXCIsIFwiZ2V0VG9vbHRpcENvbnRhaW5lclwiLCBcIm92ZXJsYXlJbm5lclN0eWxlXCJdKTtcblxuICB2YXIgZG9tUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb21SZWYuY3VycmVudDtcbiAgfSk7XG5cbiAgdmFyIGV4dHJhUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICBleHRyYVByb3BzLnBvcHVwVmlzaWJsZSA9IHByb3BzLnZpc2libGU7XG4gIH1cblxuICB2YXIgZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfcHJvcHMkYXJyb3dDb250ZW50ID0gcHJvcHMuYXJyb3dDb250ZW50LFxuICAgICAgICBhcnJvd0NvbnRlbnQgPSBfcHJvcHMkYXJyb3dDb250ZW50ID09PSB2b2lkIDAgPyBudWxsIDogX3Byb3BzJGFycm93Q29udGVudCxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XG4gICAgcmV0dXJuIFtSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvd1wiKSxcbiAgICAgIGtleTogXCJhcnJvd1wiXG4gICAgfSwgYXJyb3dDb250ZW50KSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7XG4gICAgICBrZXk6IFwiY29udGVudFwiLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpZDogaWQsXG4gICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGU6IG92ZXJsYXlJbm5lclN0eWxlXG4gICAgfSldO1xuICB9O1xuXG4gIHZhciBkZXN0cm95VG9vbHRpcCA9IGZhbHNlO1xuICB2YXIgYXV0b0Rlc3Ryb3kgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIGRlc3Ryb3lUb29sdGlwT25IaWRlID09PSAnYm9vbGVhbicpIHtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGRlc3Ryb3lUb29sdGlwT25IaWRlO1xuICB9IGVsc2UgaWYgKGRlc3Ryb3lUb29sdGlwT25IaWRlICYmIF90eXBlb2YoZGVzdHJveVRvb2x0aXBPbkhpZGUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBrZWVwUGFyZW50ID0gZGVzdHJveVRvb2x0aXBPbkhpZGUua2VlcFBhcmVudDtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGtlZXBQYXJlbnQgPT09IHRydWU7XG4gICAgYXV0b0Rlc3Ryb3kgPSBrZWVwUGFyZW50ID09PSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHBvcHVwQ2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHBvcHVwOiBnZXRQb3B1cEVsZW1lbnQsXG4gICAgYWN0aW9uOiB0cmlnZ2VyLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcmVmOiBkb21SZWYsXG4gICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZGVmYXVsdFZpc2libGUsXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95VG9vbHRpcCxcbiAgICBhdXRvRGVzdHJveTogYXV0b0Rlc3Ryb3ksXG4gICAgbW91c2VMZWF2ZURlbGF5OiBtb3VzZUxlYXZlRGVsYXksXG4gICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgIG1vdXNlRW50ZXJEZWxheTogbW91c2VFbnRlckRlbGF5XG4gIH0sIGV4dHJhUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKFRvb2x0aXApOyIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMucGxhY2VtZW50cyA9IHZvaWQgMDtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xudmFyIHBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnRzLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xudmFyIF9kZWZhdWx0ID0gcGxhY2VtZW50cztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IHsgY29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmF3Q1NTTW90aW9uIGZyb20gXCJyYy1hbmltYXRlL2VzL0NTU01vdGlvblwiO1xuaW1wb3J0IFBvcHVwSW5uZXIgZnJvbSAnLi9Qb3B1cElubmVyJztcbmltcG9ydCB7IGdldE1vdGlvbiB9IGZyb20gJy4vdXRpbHMvbGVnYWN5VXRpbCc7XG52YXIgQ1NTTW90aW9uID0gUmF3Q1NTTW90aW9uO1xuXG5mdW5jdGlvbiBzdXBwb3J0TW90aW9uKG1vdGlvbikge1xuICByZXR1cm4gbW90aW9uICYmIG1vdGlvbi5tb3Rpb25OYW1lO1xufVxuXG52YXIgUG9wdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFBvcHVwKTtcblxuICBmdW5jdGlvbiBQb3B1cCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wdXApO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhcmdldFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICB0YXJnZXRIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgIHByZXZWaXNpYmxlOiBudWxsLFxuICAgICAgYWxpZ25DbGFzc05hbWU6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLnBvcHVwUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuYWxpZ25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5uZXh0RnJhbWVTdGF0ZSA9IG51bGw7XG4gICAgX3RoaXMubmV4dEZyYW1lSWQgPSBudWxsO1xuXG4gICAgX3RoaXMub25BbGlnbiA9IGZ1bmN0aW9uIChwb3B1cERvbU5vZGUsIGFsaWduKSB7XG4gICAgICB2YXIgc3RhdHVzID0gX3RoaXMuc3RhdGUuc3RhdHVzO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduID0gX3RoaXMkcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduLFxuICAgICAgICAgIG9uQWxpZ24gPSBfdGhpcyRwcm9wcy5vbkFsaWduO1xuICAgICAgdmFyIGFsaWduQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKTtcblxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FsaWduJykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWxpZ25DbGFzc05hbWU6IGFsaWduQ2xhc3NOYW1lLFxuICAgICAgICAgIHN0YXR1czogJ2FsaWduZWQnXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hbGlnblJlZi5jdXJyZW50LmZvcmNlQWxpZ24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2FsaWduZWQnKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbGlnbkNsYXNzTmFtZTogYWxpZ25DbGFzc05hbWUsXG4gICAgICAgICAgc3RhdHVzOiAnYWZ0ZXJBbGlnbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb25BbGlnbihwb3B1cERvbU5vZGUsIGFsaWduKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbGlnbkNsYXNzTmFtZTogYWxpZ25DbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTW90aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZpc2libGUgPSBfdGhpcy5wcm9wcy52aXNpYmxlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogdmlzaWJsZSA/ICdBZnRlck1vdGlvbicgOiAnc3RhYmxlJ1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFN0YXRlT25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIF90aGlzLmNhbmNlbEZyYW1lU3RhdGUoKTtcblxuICAgICAgX3RoaXMubmV4dEZyYW1lU3RhdGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLm5leHRGcmFtZVN0YXRlKSwgc3RhdGUpO1xuICAgICAgX3RoaXMubmV4dEZyYW1lSWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VibWl0U3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5uZXh0RnJhbWVTdGF0ZSk7XG5cbiAgICAgICAgX3RoaXMubmV4dEZyYW1lU3RhdGUgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHN1Ym1pdFN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRNb3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgZ2V0TW90aW9uKF90aGlzLnByb3BzKSk7XG4gICAgfTsgLy8gYHRhcmdldGAgb24gYHJjLWFsaWduYCBjYW4gYWNjZXB0IGFzIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBiaW5kIGVsZW1lbnQgb3IgYSBwb2ludC5cbiAgICAvLyByZWY6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLWFsaWduXG5cblxuICAgIF90aGlzLmdldEFsaWduVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHBvaW50ID0gX3RoaXMkcHJvcHMyLnBvaW50LFxuICAgICAgICAgIGdldFJvb3REb21Ob2RlID0gX3RoaXMkcHJvcHMyLmdldFJvb3REb21Ob2RlO1xuXG4gICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0Um9vdERvbU5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmNhbmNlbEZyYW1lU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByYWYuY2FuY2VsKF90aGlzLm5leHRGcmFtZUlkKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgc3RhdHVzID0gX3RoaXMkc3RhdGUuc3RhdHVzLFxuICAgICAgICAgIHRhcmdldEhlaWdodCA9IF90aGlzJHN0YXRlLnRhcmdldEhlaWdodCxcbiAgICAgICAgICB0YXJnZXRXaWR0aCA9IF90aGlzJHN0YXRlLnRhcmdldFdpZHRoLFxuICAgICAgICAgIGFsaWduQ2xhc3NOYW1lID0gX3RoaXMkc3RhdGUuYWxpZ25DbGFzc05hbWU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMzLnN0eWxlLFxuICAgICAgICAgIHN0cmV0Y2ggPSBfdGhpcyRwcm9wczMuc3RyZXRjaCxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMzLnZpc2libGUsXG4gICAgICAgICAgYWxpZ24gPSBfdGhpcyRwcm9wczMuYWxpZ24sXG4gICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3RoaXMkcHJvcHMzLmRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzMy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZURvd24gPSBfdGhpcyRwcm9wczMub25Nb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0ID0gX3RoaXMkcHJvcHMzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMy5jaGlsZHJlbjtcbiAgICAgIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lLCBhbGlnbkNsYXNzTmFtZSk7XG4gICAgICB2YXIgaGlkZGVuQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRkZW5cIik7IC8vID09PT09PT09PT09PT09PT09PSBTdHlsZSA9PT09PT09PT09PT09PT09PT1cblxuICAgICAgdmFyIHNpemVTdHlsZSA9IHt9O1xuXG4gICAgICBpZiAoc3RyZXRjaCkge1xuICAgICAgICAvLyBTdHJldGNoIHdpdGggdGFyZ2V0XG4gICAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ2hlaWdodCcpICE9PSAtMSkge1xuICAgICAgICAgIHNpemVTdHlsZS5oZWlnaHQgPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5IZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzaXplU3R5bGUubWluSGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmV0Y2guaW5kZXhPZignd2lkdGgnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzaXplU3R5bGUud2lkdGggPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbldpZHRoJykgIT09IC0xKSB7XG4gICAgICAgICAgc2l6ZVN0eWxlLm1pbldpZHRoID0gdGFyZ2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc2l6ZVN0eWxlKSwgX3RoaXMuZ2V0WkluZGV4U3R5bGUoKSksIHN0eWxlKSwge30sIHtcbiAgICAgICAgb3BhY2l0eTogc3RhdHVzID09PSAnc3RhYmxlJyB8fCAhdmlzaWJsZSA/IHVuZGVmaW5lZCA6IDBcbiAgICAgIH0pOyAvLyA9PT09PT09PT09PT09PT09PSBNb3Rpb25zID09PT09PT09PT09PT09PT09XG5cblxuICAgICAgdmFyIG1lcmdlZE1vdGlvbiA9IF90aGlzLmdldE1vdGlvbigpO1xuXG4gICAgICB2YXIgbWVyZ2VkTW90aW9uVmlzaWJsZSA9IHZpc2libGU7XG5cbiAgICAgIGlmICh2aXNpYmxlICYmIHN0YXR1cyAhPT0gJ2JlZm9yZU1vdGlvbicgJiYgc3RhdHVzICE9PSAnbW90aW9uJyAmJiBzdGF0dXMgIT09ICdzdGFibGUnKSB7XG4gICAgICAgIG1lcmdlZE1vdGlvbi5tb3Rpb25BcHBlYXIgPSBmYWxzZTtcbiAgICAgICAgbWVyZ2VkTW90aW9uLm1vdGlvbkVudGVyID0gZmFsc2U7XG4gICAgICAgIG1lcmdlZE1vdGlvbi5tb3Rpb25MZWF2ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdHVzID09PSAnYWZ0ZXJBbGlnbicgfHwgc3RhdHVzID09PSAnYmVmb3JlTW90aW9uJykge1xuICAgICAgICBtZXJnZWRNb3Rpb25WaXNpYmxlID0gZmFsc2U7XG4gICAgICB9IC8vID09PT09PT09PT09PT09PT09PSBBbGlnbiA9PT09PT09PT09PT09PT09PT1cblxuXG4gICAgICB2YXIgbWVyZ2VkQWxpZ25EaXNhYmxlZCA9ICF2aXNpYmxlIHx8IHN0YXR1cyAhPT0gJ2FsaWduJyAmJiBzdGF0dXMgIT09ICdhbGlnbmVkJyAmJiBzdGF0dXMgIT09ICdzdGFibGUnOyAvLyA9PT09PT09PT09PT09PT09PT0gUG9wdXAgPT09PT09PT09PT09PT09PT09XG5cbiAgICAgIHZhciBtZXJnZWRQb3B1cFZpc2libGUgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdHVzID09PSAnc3RhYmxlJykge1xuICAgICAgICBtZXJnZWRQb3B1cFZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgfSAvLyBPbmx5IHJlbW92ZSBwb3B1cCBzaW5jZSBtYXNrIG1heSBzdGlsbCBuZWVkIGFuaW1hdGlvblxuXG5cbiAgICAgIGlmIChkZXN0cm95UG9wdXBPbkhpZGUgJiYgIW1lcmdlZFBvcHVwVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdmlzaWJsZTogbWVyZ2VkTW90aW9uVmlzaWJsZVxuICAgICAgfSwgbWVyZ2VkTW90aW9uLCB7XG4gICAgICAgIHJlbW92ZU9uTGVhdmU6IGZhbHNlLFxuICAgICAgICBvbkVudGVyRW5kOiBfdGhpcy5vbk1vdGlvbkVuZCxcbiAgICAgICAgb25MZWF2ZUVuZDogX3RoaXMub25Nb3Rpb25FbmRcbiAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZiwgbW90aW9uUmVmKSB7XG4gICAgICAgIHZhciBtb3Rpb25TdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgICBtb3Rpb25DbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxpZ24sIHtcbiAgICAgICAgICB0YXJnZXQ6IF90aGlzLmdldEFsaWduVGFyZ2V0KCksXG4gICAgICAgICAga2V5OiBcInBvcHVwXCIsXG4gICAgICAgICAgcmVmOiBfdGhpcy5hbGlnblJlZixcbiAgICAgICAgICBtb25pdG9yV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVkOiBtZXJnZWRBbGlnbkRpc2FibGVkLFxuICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICBvbkFsaWduOiBfdGhpcy5vbkFsaWduXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBJbm5lciwge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHZpc2libGU6IG1lcmdlZFBvcHVwVmlzaWJsZSxcbiAgICAgICAgICBoaWRkZW5DbGFzc05hbWU6IGhpZGRlbkNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMobWVyZ2VkQ2xhc3NOYW1lLCBtb3Rpb25DbGFzc05hbWUpLFxuICAgICAgICAgIHJlZjogY29tcG9zZVJlZihtb3Rpb25SZWYsIF90aGlzLnBvcHVwUmVmKSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkU3R5bGUpLCBtb3Rpb25TdHlsZSlcbiAgICAgICAgfSwgY2hpbGRyZW4pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJNYXNrRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtYXNrID0gX3RoaXMkcHJvcHM0Lm1hc2ssXG4gICAgICAgICAgbWFza01vdGlvbiA9IF90aGlzJHByb3BzNC5tYXNrTW90aW9uLFxuICAgICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzNC5tYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbWFza0FuaW1hdGlvbiA9IF90aGlzJHByb3BzNC5tYXNrQW5pbWF0aW9uLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNC5wcmVmaXhDbHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzNC52aXNpYmxlO1xuXG4gICAgICBpZiAoIW1hc2spIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb3Rpb24gPSB7fTtcblxuICAgICAgaWYgKG1hc2tNb3Rpb24gJiYgbWFza01vdGlvbi5tb3Rpb25OYW1lKSB7XG4gICAgICAgIG1vdGlvbiA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgIG1vdGlvbkFwcGVhcjogdHJ1ZVxuICAgICAgICB9LCBnZXRNb3Rpb24oe1xuICAgICAgICAgIG1vdGlvbjogbWFza01vdGlvbixcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIGFuaW1hdGlvbjogbWFza0FuaW1hdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgT2JqZWN0LmFzc2lnbih7fSwgbW90aW9uLCB7XG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIHJlbW92ZU9uTGVhdmU6IHRydWVcbiAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIHN0eWxlOiBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLFxuICAgICAgICAgIGtleTogXCJtYXNrXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWFza1wiKSwgY2xhc3NOYW1lKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9wdXAsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGdldFJvb3REb21Ob2RlID0gX3RoaXMkcHJvcHM1LmdldFJvb3REb21Ob2RlLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczUudmlzaWJsZSxcbiAgICAgICAgICBzdHJldGNoID0gX3RoaXMkcHJvcHM1LnN0cmV0Y2g7IC8vIElmIHRoZXJlIGlzIGEgcGVuZGluZyBzdGF0ZSB1cGRhdGUsIGNhbmNlbCBpdCwgYSBuZXcgb25lIHdpbGwgYmUgc2V0IGlmIG5lY2Vzc2FyeVxuXG4gICAgICB0aGlzLmNhbmNlbEZyYW1lU3RhdGUoKTtcblxuICAgICAgaWYgKHZpc2libGUgJiYgc3RhdHVzICE9PSAnc3RhYmxlJykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0cmV0Y2ggPyAnbWVhc3VyZScgOiAnYWxpZ24nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2FmdGVyQWxpZ24nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlT25OZXh0RnJhbWUoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogc3VwcG9ydE1vdGlvbih0aGlzLmdldE1vdGlvbigpKSA/ICdiZWZvcmVNb3Rpb24nIDogJ3N0YWJsZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnQWZ0ZXJNb3Rpb24nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlT25OZXh0RnJhbWUoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N0YWJsZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gR28gdG8gbmV4dCBzdGF0dXNcbiAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gWydtZWFzdXJlJywgJ2FsaWduJywgbnVsbCwgJ2JlZm9yZU1vdGlvbicsICdtb3Rpb24nXTtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcXVldWUuaW5kZXhPZihzdGF0dXMpO1xuICAgICAgICAgICAgICB2YXIgbmV4dFN0YXR1cyA9IHF1ZXVlW2luZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSAmJiBuZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lKHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogbmV4dFN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTWVhc3VyZSBzdHJldGNoIHNpemVcblxuXG4gICAgICBpZiAoc3RhdHVzID09PSAnbWVhc3VyZScpIHtcbiAgICAgICAgdmFyICRlbGUgPSBnZXRSb290RG9tTm9kZSgpO1xuXG4gICAgICAgIGlmICgkZWxlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZU9uTmV4dEZyYW1lKHtcbiAgICAgICAgICAgIHRhcmdldEhlaWdodDogJGVsZS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICB0YXJnZXRXaWR0aDogJGVsZS5vZmZzZXRXaWR0aFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jYW5jZWxGcmFtZVN0YXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFpJbmRleFN0eWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFpJbmRleFN0eWxlKCkge1xuICAgICAgdmFyIHpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgekluZGV4OiB6SW5kZXhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLnJlbmRlck1hc2tFbGVtZW50KCksIHRoaXMucmVuZGVyUG9wdXBFbGVtZW50KCkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZjMsIF9yZWY0KSB7XG4gICAgICB2YXIgdmlzaWJsZSA9IF9yZWYzLnZpc2libGUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjMsIFtcInZpc2libGVcIl0pO1xuXG4gICAgICB2YXIgcHJldlZpc2libGUgPSBfcmVmNC5wcmV2VmlzaWJsZSxcbiAgICAgICAgICBzdGF0dXMgPSBfcmVmNC5zdGF0dXM7XG4gICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgIHByZXZWaXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgfTtcbiAgICAgIHZhciBtZXJnZWRNb3Rpb24gPSBnZXRNb3Rpb24ocHJvcHMpO1xuXG4gICAgICBpZiAocHJldlZpc2libGUgPT09IG51bGwgJiYgdmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gSW5pdCByZW5kZXIgc2hvdWxkIGFsd2F5cyBiZSBzdGFibGVcbiAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gJ3N0YWJsZSc7XG4gICAgICB9IGVsc2UgaWYgKHZpc2libGUgIT09IHByZXZWaXNpYmxlKSB7XG4gICAgICAgIGlmICh2aXNpYmxlIHx8IHN1cHBvcnRNb3Rpb24obWVyZ2VkTW90aW9uKSAmJiBbJ21vdGlvbicsICdBZnRlck1vdGlvbicsICdzdGFibGUnXS5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSAnc3RhYmxlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuYWxpZ25DbGFzc05hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9wdXA7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuLyogZXNsaW50LWVuYWJsZSAqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIFBvcHVwSW5uZXIgPSBmdW5jdGlvbiBQb3B1cElubmVyKHByb3BzLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvbk1vdXNlRW50ZXIgPSBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0ID0gcHJvcHMub25Ub3VjaFN0YXJ0O1xuICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47XG5cbiAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDEpIHtcbiAgICBjaGlsZE5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsICF2aXNpYmxlICYmIFwiXCIuY29uY2F0KHByb3BzLmhpZGRlbkNsYXNzTmFtZSkpLFxuICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICBvblRvdWNoU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGROb2RlKTtcbn07XG5cbnZhciBSZWZQb3B1cElubmVyID0gUmVhY3QuZm9yd2FyZFJlZihQb3B1cElubmVyKTtcblJlZlBvcHVwSW5uZXIuZGlzcGxheU5hbWUgPSAnUG9wdXBJbm5lcic7XG5leHBvcnQgZGVmYXVsdCBSZWZQb3B1cElubmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgVHJpZ2dlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlckNvbnRleHQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb250YWlucyBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY29udGFpbnNcIjtcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vZmluZERPTU5vZGVcIjtcbmltcG9ydCB7IGNvbXBvc2VSZWYsIHN1cHBvcnRSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgUG9ydGFsIGZyb20gXCJyYy11dGlsL2VzL1BvcnRhbFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRBbGlnbkZyb21QbGFjZW1lbnQsIGdldEFsaWduUG9wdXBDbGFzc05hbWUgfSBmcm9tICcuL3V0aWxzL2FsaWduVXRpbCc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgVHJpZ2dlckNvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIHJldHVybkVtcHR5U3RyaW5nKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRvY3VtZW50KCkge1xuICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xufVxuXG52YXIgQUxMX0hBTkRMRVJTID0gWydvbkNsaWNrJywgJ29uTW91c2VEb3duJywgJ29uVG91Y2hTdGFydCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uRm9jdXMnLCAnb25CbHVyJywgJ29uQ29udGV4dE1lbnUnXTtcbi8qKlxuICogSW50ZXJuYWwgdXNhZ2UuIERvIG5vdCB1c2UgaW4geW91ciBjb2RlIHNpbmNlIHRoaXMgd2lsbCBiZSByZW1vdmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXIoUG9ydGFsQ29tcG9uZW50KSB7XG4gIHZhciBUcmlnZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUcmlnZ2VyKTtcblxuICAgIGZ1bmN0aW9uIFRyaWdnZXIocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWdnZXIpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgIF90aGlzLnBvcHVwUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICBfdGhpcy50cmlnZ2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAgIF90aGlzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBtb3VzZUVudGVyRGVsYXkgPSBfdGhpcy5wcm9wcy5tb3VzZUVudGVyRGVsYXk7XG5cbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUVudGVyJywgZSk7XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgbW91c2VFbnRlckRlbGF5LCBtb3VzZUVudGVyRGVsYXkgPyBudWxsIDogZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VNb3ZlJywgZSk7XG5cbiAgICAgICAgX3RoaXMuc2V0UG9pbnQoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlTGVhdmUnLCBlKTtcblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL3B1bGwvMTNcbiAgICAgICAgLy8gcmVhY3QgYnVnP1xuICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiBfdGhpcy5wb3B1cFJlZi5jdXJyZW50ICYmIF90aGlzLnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudCAmJiBjb250YWlucyhfdGhpcy5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQsIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7IC8vIGluY2FzZSBmb2N1c2luIGFuZCBmb2N1c291dFxuXG5cbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzRm9jdXNUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLmZvY3VzVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBfdGhpcy5wcm9wcy5mb2N1c0RlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuXG4gICAgICAgIF90aGlzLnByZUNsaWNrVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvblRvdWNoU3RhcnQnLCBlKTtcblxuICAgICAgICBfdGhpcy5wcmVUb3VjaFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25CbHVyJywgZSk7XG5cbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLmJsdXJEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Db250ZXh0TWVudScsIGUpO1xuXG4gICAgICAgIF90aGlzLnNldFBvcHVwVmlzaWJsZSh0cnVlLCBlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ29udGV4dE1lbnVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25DbGljaycsIGV2ZW50KTsgLy8gZm9jdXMgd2lsbCB0cmlnZ2VyIGNsaWNrXG5cblxuICAgICAgICBpZiAoX3RoaXMuZm9jdXNUaW1lKSB7XG4gICAgICAgICAgdmFyIHByZVRpbWU7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJlQ2xpY2tUaW1lICYmIF90aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IE1hdGgubWluKF90aGlzLnByZUNsaWNrVGltZSwgX3RoaXMucHJlVG91Y2hUaW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZUNsaWNrVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IF90aGlzLnByZUNsaWNrVGltZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IF90aGlzLnByZVRvdWNoVGltZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIF90aGlzLmZvY3VzVGltZSkgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmZvY3VzVGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5wcmVDbGlja1RpbWUgPSAwO1xuICAgICAgICBfdGhpcy5wcmVUb3VjaFRpbWUgPSAwOyAvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCB3aGVuIGFsbCB0aGUgYWN0aW9uIGlzIGNsaWNrLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNzA0M1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNzI5MVxuXG4gICAgICAgIGlmIChfdGhpcy5pc0NsaWNrVG9TaG93KCkgJiYgKF90aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCBfdGhpcy5pc0JsdXJUb0hpZGUoKSkgJiYgZXZlbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRWaXNpYmxlID0gIV90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNDbGlja1RvSGlkZSgpICYmICFuZXh0VmlzaWJsZSB8fCBuZXh0VmlzaWJsZSAmJiBfdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRQb3B1cFZpc2libGUoIV90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5oYXNQb3B1cE1vdXNlRG93biA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICAgICAgX3RoaXMubW91c2VEb3duVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5oYXNQb3B1cE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBpZiAoX3RoaXMuY29udGV4dCkge1xuICAgICAgICAgIHZhciBfdGhpcyRjb250ZXh0O1xuXG4gICAgICAgICAgKF90aGlzJGNvbnRleHQgPSBfdGhpcy5jb250ZXh0KS5vblBvcHVwTW91c2VEb3duLmFwcGx5KF90aGlzJGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMubWFzayAmJiAhX3RoaXMucHJvcHMubWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB2YXIgcm9vdCA9IF90aGlzLmdldFJvb3REb21Ob2RlKCk7XG5cbiAgICAgICAgdmFyIHBvcHVwTm9kZSA9IF90aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuXG4gICAgICAgIGlmICghY29udGFpbnMocm9vdCwgdGFyZ2V0KSAmJiAhY29udGFpbnMocG9wdXBOb2RlLCB0YXJnZXQpICYmICFfdGhpcy5oYXNQb3B1cE1vdXNlRG93bikge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFJvb3REb21Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2V0VHJpZ2dlckRPTU5vZGUgPSBfdGhpcy5wcm9wcy5nZXRUcmlnZ2VyRE9NTm9kZTtcblxuICAgICAgICBpZiAoZ2V0VHJpZ2dlckRPTU5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0VHJpZ2dlckRPTU5vZGUoX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGRvbU5vZGUgPSBmaW5kRE9NTm9kZShfdGhpcy50cmlnZ2VyUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgICAgaWYgKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7Ly8gRG8gbm90aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gZnVuY3Rpb24gKGFsaWduKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwb3B1cFBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBfdGhpcyRwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wcy5hbGlnblBvaW50LFxuICAgICAgICAgICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gPSBfdGhpcyRwcm9wcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjtcblxuICAgICAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgICAgICBjbGFzc05hbWUucHVzaChnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBhbGlnblBvaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24pIHtcbiAgICAgICAgICBjbGFzc05hbWUucHVzaChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5qb2luKCcgJyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfdGhpcyRwcm9wczIuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICAgICAgcG9wdXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIucG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgICBvblBvcHVwQWxpZ24gPSBfdGhpcyRwcm9wczIub25Qb3B1cEFsaWduLFxuICAgICAgICAgICAgcG9wdXBNb3Rpb24gPSBfdGhpcyRwcm9wczIucG9wdXBNb3Rpb24sXG4gICAgICAgICAgICBwb3B1cEFuaW1hdGlvbiA9IF90aGlzJHByb3BzMi5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczIucG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgIHBvcHVwU3R5bGUgPSBfdGhpcyRwcm9wczIucG9wdXBTdHlsZSxcbiAgICAgICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wczIubWFzayxcbiAgICAgICAgICAgIG1hc2tBbmltYXRpb24gPSBfdGhpcyRwcm9wczIubWFza0FuaW1hdGlvbixcbiAgICAgICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzMi5tYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICBtYXNrTW90aW9uID0gX3RoaXMkcHJvcHMyLm1hc2tNb3Rpb24sXG4gICAgICAgICAgICB6SW5kZXggPSBfdGhpcyRwcm9wczIuekluZGV4LFxuICAgICAgICAgICAgcG9wdXAgPSBfdGhpcyRwcm9wczIucG9wdXAsXG4gICAgICAgICAgICBzdHJldGNoID0gX3RoaXMkcHJvcHMyLnN0cmV0Y2gsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMyLmFsaWduUG9pbnQ7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgICAgcG9wdXBWaXNpYmxlID0gX3RoaXMkc3RhdGUucG9wdXBWaXNpYmxlLFxuICAgICAgICAgICAgcG9pbnQgPSBfdGhpcyRzdGF0ZS5wb2ludDtcblxuICAgICAgICB2YXIgYWxpZ24gPSBfdGhpcy5nZXRQb3B1cEFsaWduKCk7XG5cbiAgICAgICAgdmFyIG1vdXNlUHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VFbnRlciA9IF90aGlzLm9uUG9wdXBNb3VzZUVudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlTGVhdmUgPSBfdGhpcy5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZURvd24gPSBfdGhpcy5vblBvcHVwTW91c2VEb3duO1xuICAgICAgICBtb3VzZVByb3BzLm9uVG91Y2hTdGFydCA9IF90aGlzLm9uUG9wdXBNb3VzZURvd247XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgcG9pbnQ6IGFsaWduUG9pbnQgJiYgcG9pbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgb25BbGlnbjogb25Qb3B1cEFsaWduLFxuICAgICAgICAgIGFuaW1hdGlvbjogcG9wdXBBbmltYXRpb24sXG4gICAgICAgICAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduOiBfdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgICB9LCBtb3VzZVByb3BzLCB7XG4gICAgICAgICAgc3RyZXRjaDogc3RyZXRjaCxcbiAgICAgICAgICBnZXRSb290RG9tTm9kZTogX3RoaXMuZ2V0Um9vdERvbU5vZGUsXG4gICAgICAgICAgc3R5bGU6IHBvcHVwU3R5bGUsXG4gICAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgICB6SW5kZXg6IHpJbmRleCxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogcG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBtYXNrQW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uLFxuICAgICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1hc2tNb3Rpb246IG1hc2tNb3Rpb24sXG4gICAgICAgICAgcmVmOiBfdGhpcy5wb3B1cFJlZixcbiAgICAgICAgICBtb3Rpb246IHBvcHVwTW90aW9uXG4gICAgICAgIH0pLCB0eXBlb2YgcG9wdXAgPT09ICdmdW5jdGlvbicgPyBwb3B1cCgpIDogcG9wdXApO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgICB2YXIgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gTWFrZSBzdXJlIGRlZmF1bHQgcG9wdXAgY29udGFpbmVyIHdpbGwgbmV2ZXIgY2F1c2Ugc2Nyb2xsYmFyIGFwcGVhcmluZ1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzQxXG5cbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB2YXIgbW91bnROb2RlID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIgPyBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcihfdGhpcy5nZXRSb290RG9tTm9kZSgpKSA6IHByb3BzLmdldERvY3VtZW50KCkuYm9keTtcbiAgICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHBvcHVwQ29udGFpbmVyO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0UG9pbnQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgdmFyIGFsaWduUG9pbnQgPSBfdGhpcy5wcm9wcy5hbGlnblBvaW50O1xuICAgICAgICBpZiAoIWFsaWduUG9pbnQgfHwgIXBvaW50KSByZXR1cm47XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICBwYWdlWDogcG9pbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogcG9pbnQucGFnZVlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlUG9ydGFsVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUucHJldlBvcHVwVmlzaWJsZSAhPT0gX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMuYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UoX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIHBvcHVwVmlzaWJsZTtcblxuICAgICAgaWYgKCdwb3B1cFZpc2libGUnIGluIHByb3BzKSB7XG4gICAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMucG9wdXBWaXNpYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5kZWZhdWx0UG9wdXBWaXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgcHJldlBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgICAgfTtcbiAgICAgIEFMTF9IQU5ETEVSUy5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIF90aGlzW1wiZmlyZVwiLmNvbmNhdChoKV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIF90aGlzLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVHJpZ2dlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7IC8vIFdlIG11c3QgbGlzdGVuIHRvIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCwgZWRnZSBjYXNlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81ODA0XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvY2FsZW5kYXIvaXNzdWVzLzI1MFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzUwXG5cbiAgICAgICAgaWYgKHN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgfSAvLyBhbHdheXMgaGlkZSBvbiBtb2JpbGVcblxuXG4gICAgICAgICAgaWYgKCF0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgIH0gLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCBkb2N1bWVudCBpcyBzY3JvbGxpbmcuXG5cblxuICAgICAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLm9uQ29udGV4dE1lbnVDbG9zZSk7XG4gICAgICAgICAgfSAvLyBjbG9zZSBwb3B1cCB3aGVuIHRyaWdnZXIgdHlwZSBjb250YWlucyAnb25Db250ZXh0TWVudScgYW5kIHdpbmRvdyBpcyBibHVyLlxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2JsdXInLCB0aGlzLm9uQ29udGV4dE1lbnVDbG9zZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UG9wdXBEb21Ob2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgICAvLyBmb3IgdGVzdFxuICAgICAgICBpZiAodGhpcy5wb3B1cFJlZi5jdXJyZW50ICYmIHRoaXMucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFBvcHVwQWxpZ25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cEFsaWduKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICAgIHBvcHVwQWxpZ24gPSBwcm9wcy5wb3B1cEFsaWduLFxuICAgICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgICAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwb3B1cFBsYWNlbWVudCwgcG9wdXBBbGlnbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHBvcHVwVmlzaWJsZSAgICBTaG93IG9yIG5vdCB0aGUgcG9wdXAgZWxlbWVudFxuICAgICAgICogQHBhcmFtIGV2ZW50ICAgICAgICAgICBTeW50aGV0aWNFdmVudCwgdXNlZCBmb3IgYHBvaW50QWxpZ25gXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRQb3B1cFZpc2libGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3B1cFZpc2libGUocG9wdXBWaXNpYmxlLCBldmVudCkge1xuICAgICAgICB2YXIgYWxpZ25Qb2ludCA9IHRoaXMucHJvcHMuYWxpZ25Qb2ludDtcbiAgICAgICAgdmFyIHByZXZQb3B1cFZpc2libGUgPSB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgICAgICBpZiAocHJldlBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgICAgICAgcHJldlBvcHVwVmlzaWJsZTogcHJldlBvcHVwVmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgICAgICB9IC8vIEFsd2F5cyByZWNvcmQgdGhlIHBvaW50IHBvc2l0aW9uIHNpbmNlIG1vdXNlRW50ZXJEZWxheSB3aWxsIGRlbGF5IHRoZSBzaG93XG5cblxuICAgICAgICBpZiAoYWxpZ25Qb2ludCAmJiBldmVudCkge1xuICAgICAgICAgIHRoaXMuc2V0UG9pbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlbGF5U2V0UG9wdXBWaXNpYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsYXlTZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZGVsYXlTLCBldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZGVsYXkgPSBkZWxheVMgKiAxMDAwO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgIHZhciBwb2ludCA9IGV2ZW50ID8ge1xuICAgICAgICAgICAgcGFnZVg6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBwb2ludCk7XG5cbiAgICAgICAgICAgIF90aGlzMi5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyRGVsYXlUaW1lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xlYXJPdXRzaWRlSGFuZGxlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyT3V0c2lkZUhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxKSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMS5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyKSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMi5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjcmVhdGVUd29DaGFpbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUd29DaGFpbnMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkUHJvcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbXCJmaXJlXCIuY29uY2F0KGV2ZW50KV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9zW2V2ZW50XSB8fCBwcm9wc1tldmVudF07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ2xpY2tUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsaWNrVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzMy5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHMzLnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDb250ZXh0TWVudVRvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM0LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczQuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NsaWNrVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGlja1RvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczUuYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzNS5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzTW91c2VFbnRlclRvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzTW91c2VFbnRlclRvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczYuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzNi5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignbW91c2VFbnRlcicpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNNb3VzZUxlYXZlVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb3VzZUxlYXZlVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNy5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHM3LmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdtb3VzZUxlYXZlJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0ZvY3VzVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGb2N1c1RvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczguYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzOC5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQmx1clRvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQmx1clRvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczkuYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzOS5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignYmx1cicpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZm9yY2VQb3B1cEFsaWduXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9yY2VQb3B1cEFsaWduKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgdGhpcy5wb3B1cFJlZi5jdXJyZW50ICYmIHRoaXMucG9wdXBSZWYuY3VycmVudC5hbGlnblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgdGhpcy5wb3B1cFJlZi5jdXJyZW50LmFsaWduUmVmLmN1cnJlbnQuZm9yY2VBbGlnbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZpcmVFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICAgICAgdmFyIGNoaWxkQ2FsbGJhY2sgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzW3R5cGVdO1xuXG4gICAgICAgIGlmIChjaGlsZENhbGxiYWNrKSB7XG4gICAgICAgICAgY2hpbGRDYWxsYmFjayhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwb3B1cFZpc2libGUgPSB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczEwLmNoaWxkcmVuLFxuICAgICAgICAgICAgZm9yY2VSZW5kZXIgPSBfdGhpcyRwcm9wczEwLmZvcmNlUmVuZGVyLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzMTAuYWxpZ25Qb2ludCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMTAuY2xhc3NOYW1lLFxuICAgICAgICAgICAgYXV0b0Rlc3Ryb3kgPSBfdGhpcyRwcm9wczEwLmF1dG9EZXN0cm95O1xuICAgICAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7XG4gICAgICAgICAga2V5OiAndHJpZ2dlcidcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ29udGV4dE1lbnUgPSB0aGlzLm9uQ29udGV4dE1lbnU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ29udGV4dE1lbnUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bjtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkNsaWNrJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRG93bicpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyO1xuXG4gICAgICAgICAgaWYgKGFsaWduUG9pbnQpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlTGVhdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRm9jdXNUb1Nob3coKSB8fCB0aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkJsdXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGQgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmIChjaGlsZHJlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMuY2xhc3NOYW1lID0gY2hpbGRyZW5DbGFzc05hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvbmVQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIG5ld0NoaWxkUHJvcHMpO1xuXG4gICAgICAgIGlmIChzdXBwb3J0UmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNsb25lUHJvcHMucmVmID0gY29tcG9zZVJlZih0aGlzLnRyaWdnZXJSZWYsIGNoaWxkLnJlZik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2xvbmVQcm9wcyk7XG4gICAgICAgIHZhciBwb3J0YWw7IC8vIHByZXZlbnQgdW5tb3VudGluZyBhZnRlciBpdCdzIHJlbmRlcmVkXG5cbiAgICAgICAgaWYgKHBvcHVwVmlzaWJsZSB8fCB0aGlzLnBvcHVwUmVmLmN1cnJlbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbENvbXBvbmVudCwge1xuICAgICAgICAgICAga2V5OiBcInBvcnRhbFwiLFxuICAgICAgICAgICAgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lcixcbiAgICAgICAgICAgIGRpZFVwZGF0ZTogdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGVcbiAgICAgICAgICB9LCB0aGlzLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9wdXBWaXNpYmxlICYmIGF1dG9EZXN0cm95KSB7XG4gICAgICAgICAgcG9ydGFsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIG9uUG9wdXBNb3VzZURvd246IHRoaXMub25Qb3B1cE1vdXNlRG93blxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJpZ2dlciwgcG9ydGFsKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgICAgIHZhciBwb3B1cFZpc2libGUgPSBfcmVmLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG5cbiAgICAgICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHByZXZTdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnBvcHVwVmlzaWJsZSA9IHBvcHVwVmlzaWJsZTtcbiAgICAgICAgICBuZXdTdGF0ZS5wcmV2UG9wdXBWaXNpYmxlID0gcHJldlN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVHJpZ2dlcjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFRyaWdnZXIuY29udGV4dFR5cGUgPSBUcmlnZ2VyQ29udGV4dDtcbiAgVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAncmMtdHJpZ2dlci1wb3B1cCcsXG4gICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICAgIGdldERvY3VtZW50OiByZXR1cm5Eb2N1bWVudCxcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblBvcHVwQWxpZ246IG5vb3AsXG4gICAgcG9wdXBDbGFzc05hbWU6ICcnLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICBmb2N1c0RlbGF5OiAwLFxuICAgIGJsdXJEZWxheTogMC4xNSxcbiAgICBwb3B1cFN0eWxlOiB7fSxcbiAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGZhbHNlLFxuICAgIHBvcHVwQWxpZ246IHt9LFxuICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGZhbHNlLFxuICAgIG1hc2s6IGZhbHNlLFxuICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICBhY3Rpb246IFtdLFxuICAgIHNob3dBY3Rpb246IFtdLFxuICAgIGhpZGVBY3Rpb246IFtdLFxuICAgIGF1dG9EZXN0cm95OiBmYWxzZVxuICB9O1xuICByZXR1cm4gVHJpZ2dlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVHJpZ2dlcihQb3J0YWwpOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBpc1BvaW50c0VxKGExLCBhMiwgaXNBbGlnblBvaW50KSB7XG4gIGlmIChpc0FsaWduUG9pbnQpIHtcbiAgICByZXR1cm4gYTFbMF0gPT09IGEyWzBdO1xuICB9XG5cbiAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBsYWNlbWVudFN0ciwgYWxpZ24pIHtcbiAgdmFyIGJhc2VBbGlnbiA9IGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudFN0cl0gfHwge307XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGJhc2VBbGlnbiksIGFsaWduKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBpc0FsaWduUG9pbnQpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIHBsYWNlbWVudHMgPSBPYmplY3Qua2V5cyhidWlsdGluUGxhY2VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICBpZiAoaXNQb2ludHNFcShidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRdLnBvaW50cywgcG9pbnRzLCBpc0FsaWduUG9pbnQpKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wbGFjZW1lbnQtXCIpLmNvbmNhdChwbGFjZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TW90aW9uKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgbW90aW9uID0gX3JlZi5tb3Rpb24sXG4gICAgICBhbmltYXRpb24gPSBfcmVmLmFuaW1hdGlvbixcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gX3JlZi50cmFuc2l0aW9uTmFtZTtcblxuICBpZiAobW90aW9uKSB7XG4gICAgcmV0dXJuIG1vdGlvbjtcbiAgfVxuXG4gIGlmIChhbmltYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFuaW1hdGlvbilcbiAgICB9O1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb25OYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiLCBvcHRpb24pIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAodGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuXG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0FycmF5O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0SXMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkIHx8IGNoaWxkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KHRvQXJyYXkoY2hpbGQpKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfcmVhY3RJcy5pc0ZyYWdtZW50KShjaGlsZCkgJiYgY2hpbGQucHJvcHMpIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQodG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmV0O1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnbGlicmFyeS9oZWxwZXJzL2FjdGl2ZUxpbmsnO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdjb250ZXh0L0F1dGhQcm92aWRlcic7XG5pbXBvcnQge1xuICBIT01FX1BBR0UsXG4gIFRSQVZFTF9QQUdFLFxuICBTSU1fV0lGSV9QQUdFLFxuICBTSE9QX1BBR0UsXG4gIFZJU0FfUEFHRSxcbiAgQkxPR19QQUdFLFxuICBBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UsXG59IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcblxuY29uc3QgTW9iaWxlTWVudSA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIC8vIGF1dGggY29udGV4dFxuICBjb25zdCB7IGxvZ2dlZEluLCBsb2dPdXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIwXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0hPTUVfUEFHRX0+VHJhbmcgQ2jhu6c8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxuICAgICAgICA8QWN0aXZlTGluayBocmVmPXtUUkFWRUxfUEFHRX0+RHUgTOG7i2NoPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj17U0lNX1dJRklfUEFHRX0+U2ltICYgV0lGSTwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e1NIT1BfUEFHRX0+U2hvcDwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCI0XCI+XG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e1ZJU0FfUEFHRX0+VmlzYTwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+XG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0JMT0dfUEFHRX0+QmxvZzwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAge2xvZ2dlZEluICYmIChcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj17QUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFfT5cbiAgICAgICAgICAgIEFjY291bnQgU2V0dGluZ3NcbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgKX1cbiAgICAgIHtsb2dnZWRJbiAmJiAoXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgKX1cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCByb3V0ZXIsIGhyZWYgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=