module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\_app.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!*************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/dist/antd.css":
/*!*************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/dist/antd.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/date-picker/style/index.css":
/*!*******************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/antd/lib/date-picker/style/index.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!*******************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/client/link.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*********************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/client/router.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!**************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/client/with-router.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!****************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/mitt.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/dist/next-server/lib/utils.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!*******************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/link.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/react-dates/lib/css/_datepicker.css":
/*!******************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/react-dates/lib/css/_datepicker.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!*******************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/styles.css":
/*!******************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/TripFinder/node_modules/react-multi-carousel/lib/styles.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/images/icons/facebook.svg":
/*!******************************************!*\
  !*** ./assets/images/icons/facebook.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./assets/images/icons/instagram.svg":
/*!*******************************************!*\
  !*** ./assets/images/icons/instagram.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/instagram-15bc5470aea6d2d05200dff45c14e92b.svg";

/***/ }),

/***/ "./assets/images/icons/twitter.svg":
/*!*****************************************!*\
  !*** ./assets/images/icons/twitter.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMi4wMDAzOCIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTY5Ljk5NDAwMTA4MzQiIHgyPSIyOTkuNDkzNDEzNTkwNCIgeTE9IjcxLjk4NjIyNzAxIiB5Mj0iMzQ5LjA1NDg0NDg4NjQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYzNmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYjBlZCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGIwZWQiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYTJjZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2NC4yODI1MjM3ODI0IiB4Mj0iLTM3OS41ODY0MzI3MTE0IiB4bGluazpocmVmPSIjYiIgeTE9IjMxNC4wODY4MzYxMzU2IiB5Mj0iLTg0Ljk1MjE4MDgxNjYiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2LjAwMDMiIHgyPSIyNTYuMDAwMyIgeGxpbms6aHJlZj0iI2IiIHkxPSI0MzcuMzgzMjE1Mzg5IiB5Mj0iNTA0LjQ3MjAwOTcwNjQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDg5LjQyMDk5OTUxMzYiIHgyPSIyMzkuMjkzNzMyODIxNCIgeGxpbms6aHJlZj0iI2IiIHkxPSI0ODIuMDcyNDAxNjUwMiIgeTI9IjIzMS45NDUxMzQ5NTgiLz48cGF0aCBkPSJtNDIwLjQyMTg3NSA1MDMuMjM0Mzc1Yy0xMDkuNTAzOTA2IDExLjY4NzUtMjE5LjMzOTg0NCAxMS42ODc1LTMyOC44NDM3NSAwLTQzLjY2NDA2My00LjY2MDE1Ni03OC4xNTIzNDQtMzkuMTQ4NDM3LTgyLjgxMjUtODIuODE2NDA2LTExLjY4NzUtMTA5LjUwMzkwNy0xMS42ODc1LTIxOS4zMzU5MzggMC0zMjguODM5ODQ0IDQuNjYwMTU2LTQzLjY2NDA2MyAzOS4xNDg0MzctNzguMTUyMzQ0IDgyLjgxMjUtODIuODEyNSAxMDkuNTAzOTA2LTExLjY4NzUgMjE5LjMzNTkzNy0xMS42ODc1IDMyOC44Mzk4NDQgMCA0My42Njc5NjkgNC42NjAxNTYgNzguMTU2MjUgMzkuMTQ4NDM3IDgyLjgxNjQwNiA4Mi44MTI1IDExLjY4NzUgMTA5LjUwMzkwNiAxMS42ODc1IDIxOS4zMzU5MzcgMCAzMjguODM5ODQ0LTQuNjYwMTU2IDQzLjY2Nzk2OS0zOS4xNDQ1MzEgNzguMTU2MjUtODIuODEyNSA4Mi44MTY0MDZ6bTAgMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im00NzUuMzg2NzE5IDExMC4wOTc2NTZjLTQuMTMyODEzLTM4Ljc0NjA5NC0zNC43MzQzNzUtNjkuMzUxNTYyLTczLjQ4NDM3NS03My40ODgyODEtOTcuMTcxODc1LTEwLjM2NzE4Ny0xOTQuNjMyODEzLTEwLjM2NzE4Ny0yOTEuODA0Njg4IDAtMzguNzQ2MDk0IDQuMTM2NzE5LTY5LjM1MTU2MiAzNC43NDIxODctNzMuNDg4MjgxIDczLjQ4ODI4MS0xMC4zNjcxODcgOTcuMTcxODc1LTEwLjM2NzE4NyAxOTQuNjMyODEzIDAgMjkxLjgwMDc4MiA0LjEzNjcxOSAzOC43NSAzNC43NDIxODcgNjkuMzU1NDY4IDczLjQ4ODI4MSA3My40ODgyODEgOTcuMTcxODc1IDEwLjM3MTA5MyAxOTQuNjMyODEzIDEwLjM3MTA5MyAyOTEuODAwNzgyIDAgMzguNzUtNC4xMzI4MTMgNjkuMzU1NDY4LTM0LjczODI4MSA3My40ODgyODEtNzMuNDg4MjgxIDEwLjM3MTA5My05Ny4xNjc5NjkgMTAuMzcxMDkzLTE5NC42Mjg5MDcgMC0yOTEuODAwNzgyem0wIDAiIGZpbGw9InVybCgjYykiLz48cGF0aCBkPSJtNy42NzE4NzUgNDA5LjgwNDY4OGMuMzUxNTYzIDMuNTM5MDYyLjcxNDg0NCA3LjA3ODEyNCAxLjA5Mzc1IDEwLjYxNzE4NyA0LjY2MDE1NiA0My42NjQwNjMgMzkuMTQ4NDM3IDc4LjE1MjM0NCA4Mi44MTY0MDYgODIuODEyNSAxMDkuNTAzOTA3IDExLjY4NzUgMjE5LjMzNTkzOCAxMS42ODc1IDMyOC44Mzk4NDQgMCA0My42Njc5NjktNC42NjAxNTYgNzguMTUyMzQ0LTM5LjE0ODQzNyA4Mi44MTI1LTgyLjgxMjUuMzc4OTA2LTMuNTM5MDYzLjc0MjE4Ny03LjA3ODEyNSAxLjA5NzY1Ni0xMC42MTcxODd6bTAgMCIgZmlsbD0idXJsKCNkKSIvPjxwYXRoIGQ9Im01MTEuODkwNjI1IDIzOC4wMDc4MTItMTA2LjI3NzM0NC0xMDYuMjczNDM3Yy0xMS45MTAxNTYgNi44MDg1OTQtMjIuNDA2MjUgMTAuNTg1OTM3LTMwLjMxMjUgMTIuNjc5Njg3LTQuNDQ1MzEyIDEuMTkxNDA3LTguMDc0MjE5IDEuODM5ODQ0LTEwLjY4MzU5MyAyLjE5NTMxMy0xMS45ODQzNzYtMTIuMjg1MTU2LTI4LjcxODc1LTE5LjkxNDA2My00Ny4yNDIxODgtMTkuOTE0MDYzLTM2LjQ0NTMxMiAwLTY1Ljk5NjA5NCAyOS41NDY4NzYtNjUuOTk2MDk0IDY2IDAgMS4zMTY0MDcuMDM1MTU2IDIuNjE3MTg4LjEyMTA5NCAzLjkxNDA2My4xNzU3ODEgMy4xNjAxNTYuNTc4MTI1IDYuMjY1NjI1IDEuMTk5MjE5IDkuMjg1MTU2LTE1LjIxNDg0NC0uMjI2NTYyLTY0LjY2Nzk2OS00LjI4OTA2Mi0xMTEuODMyMDMxLTQ0LjcxODc1LS4wMDM5MDcgMC0uMDAzOTA3LS4wMDM5MDYtLjAwMzkwNy0uMDAzOTA2aC0uMDAzOTA2bC0yMi4yNDIxODctMjIuMjQ2MDk0cy0yNi4wOTM3NSA0NS41NDI5NjkgMTIuMjY5NTMxIDgwLjEwMTU2M2MxLjY4MzU5MyAxLjg3ODkwNiAzLjUzNTE1NiAzLjczNDM3NSA1LjU2MjUgNS41NTg1OTQuMTYwMTU2LjE3OTY4Ny4zMjgxMjUuMzU1NDY4LjQ4ODI4MS41MzUxNTYtNS4wMzUxNTYtLjMzOTg0NC0yMC4xNzk2ODgtMS44NDc2NTYtMjguOTQ1MzEyLTguMDM5MDYzIDAgMC0xLjc2MTcxOSAyNy44MzU5MzggMjEuNDI5Njg3IDQ4LjMyODEyNWwxOC43MjY1NjMgMTguODg2NzE5Yy01LjcwMzEyNi40NzI2NTYtMTIuMDExNzE5LjM1OTM3NS0xNi4zOTg0MzgtMS41NjI1IDAgMCAzLjg4MjgxMiAxNi40ODgyODEgMTguODkwNjI1IDI5LjY4MzU5NGwyNi4yMzQzNzUgMjYuMzcxMDkzYy0xNS43MzgyODEgOS4xNjc5NjktNDMuMjg5MDYyIDIwLjY0MDYyNi03OS41NTQ2ODggMTcuNzEwOTM4bDE1OS4xNDQ1MzIgMTU1LjVjNTQuNjc5Njg3LS4wMTU2MjUgMTA5LjM1OTM3NS0yLjkzNzUgMTYzLjk1NzAzMS04Ljc2NTYyNSA0My42Njc5NjktNC42NjAxNTYgNzguMTU2MjUtMzkuMTQ4NDM3IDgyLjgxNjQwNi04Mi44MTI1IDYuNDgwNDY5LTYwLjc0MjE4NyA5LjM1OTM3NS0xMjEuNTg1OTM3IDguNjUyMzQ0LTE4Mi40MTQwNjN6bTAgMCIgZmlsbD0idXJsKCNlKSIvPjxwYXRoIGQ9Im00MTQuNjgzNTk0IDE1Ny4zNjcxODhjLTExLjMyODEyNSA1LjkyNTc4MS0yOC4zOTA2MjUgOC42NjQwNjItMzQuMDQ2ODc1IDkuNDUzMTI0LS4wNDY4NzUtLjI3MzQzNy0uMDkzNzUtLjUzNTE1Ni0uMTQwNjI1LS43OTY4NzQgMTkuMjMwNDY4LTExLjg5NDUzMiAyNS4xMTcxODctMzQuMjg5MDYzIDI1LjExNzE4Ny0zNC4yODkwNjMtMTEuOTEwMTU2IDYuODA4NTk0LTIyLjQwNjI1IDEwLjU4NTkzNy0zMC4zMTI1IDEyLjY3OTY4Ny00LjQ0NTMxMiAxLjE5MTQwNy04LjA3NDIxOSAxLjgzNTkzOC0xMC42ODM1OTMgMi4xOTUzMTMtMTEuOTg0Mzc2LTEyLjI4OTA2My0yOC43MTg3NS0xOS45MTQwNjMtNDcuMjQyMTg4LTE5LjkxNDA2My0zNi40NDUzMTIgMC02NS45OTYwOTQgMjkuNTQyOTY5LTY1Ljk5NjA5NCA2NiAwIDEuMzEyNS4wMzUxNTYgMi42MTcxODguMTIxMDk0IDMuOTEwMTU3LjE3NTc4MSAzLjE2MDE1Ni41NzgxMjUgNi4yNjU2MjUgMS4xOTkyMTkgOS4yODUxNTYtMTcuNjQwNjI1LS4yNjE3MTktODEuMzE2NDA3LTUuNjcxODc1LTEzNC4wODIwMzEtNjYuOTY0ODQ0IDAgMC0yOS4zODI4MTMgNTEuMjY1NjI1IDIwLjAxNTYyNCA4Ni4yODUxNTcgMCAwLTIwLjAxNTYyNC0uNjI1LTMwLjY0MDYyNC04LjEyODkwNyAwIDAtMy4xMjUgNDkuMzk4NDM4IDUzLjc2OTUzMSA2NS4wMjM0MzggMCAwLTIwLjAwMzkwNyA1LjAwNzgxMi0zMC4wMTU2MjUuNjI4OTA2IDAgMCAxMC4wMDc4MTIgNDIuNTE1NjI1IDYwLjAyNzM0NCA0NS42NDg0MzcgMCAwLTM1Ljg3NSAzMi44NDM3NS05NC40NTcwMzIgMjguMTE3MTg4IDI4LjgxMjUgMTguMjQyMTg4IDYyLjk3MjY1NiAyOC44MDA3ODEgOTkuNTk3NjU2IDI4LjgwMDc4MSAxMDIuOTgwNDY5IDAgMTg2LjQ2NDg0NC04My40ODA0NjkgMTg2LjQ2NDg0NC0xODYuNDYwOTM3IDAtMS4yODUxNTYtLjAxMTcxOC0yLjU3MDMxMy0uMDM5MDYyLTMuODU1NDY5LjAyNzM0NC0uNzYxNzE5LjAzOTA2Mi0xLjUxOTUzMS4wMzkwNjItMi4yODkwNjMgMC0uNTM1MTU2LS4wMTE3MTgtMS4wNzAzMTItLjAxOTUzMS0xLjYwNTQ2OCAxOS4wMzkwNjMtMTIuNjg3NSAzMS4zMjQyMTktMzMuNzIyNjU2IDMxLjMyNDIxOS0zMy43MjI2NTZ6bTAgMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./assets/images/icons/youtube.svg":
/*!*****************************************!*\
  !*** ./assets/images/icons/youtube.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MTIgMzAuOTA2MjV2NDUwLjE4NzVjMCAxNy4wNzAzMTItMTMuODM1OTM4IDMwLjkwNjI1LTMwLjkwNjI1IDMwLjkwNjI1aC00NTAuMTg3NWMtMTcuMDcwMzEyIDAtMzAuOTA2MjUtMTMuODM1OTM4LTMwLjkwNjI1LTMwLjkwNjI1di00NTAuMTg3NWMwLTE3LjA3MDMxMiAxMy44MzU5MzgtMzAuOTA2MjUgMzAuOTA2MjUtMzAuOTA2MjVoNDUwLjE4NzVjMTcuMDcwMzEyIDAgMzAuOTA2MjUgMTMuODM1OTM4IDMwLjkwNjI1IDMwLjkwNjI1em0wIDAiIGZpbGw9IiNmNzU4MjAiLz48cGF0aCBkPSJtNjQuMjIyNjU2IDUxMmgtMzMuMzE2NDA2Yy0xNy4wNzAzMTIgMC0zMC45MDYyNS0xMy44MzU5MzgtMzAuOTA2MjUtMzAuOTA2MjV2LTQ1MC4xODc1YzAtMTcuMDcwMzEyIDEzLjgzNTkzOC0zMC45MDYyNSAzMC45MDYyNS0zMC45MDYyNWgzMy4zMTY0MDZjLTE3LjA3MDMxMiAwLTMwLjkwNjI1IDEzLjgzNTkzOC0zMC45MDYyNSAzMC45MDYyNXY0NTAuMTg3NWMwIDE3LjA3MDMxMiAxMy44MzU5MzggMzAuOTA2MjUgMzAuOTA2MjUgMzAuOTA2MjV6bTAgMCIgZmlsbD0iI2Y4ODIyNCIvPjxwYXRoIGQ9Im01MTIgMzAuOTA2MjV2NDUwLjE4NzVjMCAxNy4wNzAzMTItMTMuODM1OTM4IDMwLjkwNjI1LTMwLjkwNjI1IDMwLjkwNjI1aC0xOTkuMDMxMjVjMTUyLjU4MjAzMS0xNzUuNzg5MDYyIDE2OS45Njg3NS00MjAuOTkyMTg4IDE3MC44MjQyMTktNTEyaDI4LjIwNzAzMWMxNy4wNzAzMTIgMCAzMC45MDYyNSAxMy44MzU5MzggMzAuOTA2MjUgMzAuOTA2MjV6bTAgMCIgZmlsbD0iI2Y5MzIxMiIvPjxwYXRoIGQ9Im0xMzcuNjI1IDE0Ni4zMDg1OTR2MjE5LjM4MjgxMmMwIDcuMDU4NTk0IDcuNDQxNDA2IDExLjY0NDUzMiAxMy43NDYwOTQgOC40NjQ4NDRsMjE3Ljc4OTA2Mi0xMDkuNjg3NWM2Ljk1MzEyNS0zLjUwMzkwNiA2Ljk1MzEyNS0xMy40MzM1OTQgMC0xNi45Mzc1bC0yMTcuNzg5MDYyLTEwOS42ODc1Yy02LjMwNDY4OC0zLjE3NTc4MS0xMy43NDYwOTQgMS40MDYyNS0xMy43NDYwOTQgOC40NjQ4NDR6bTAgMCIgZmlsbD0iI2RlZWZmZiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./assets/images/logo-alt.svg":
/*!************************************!*\
  !*** ./assets/images/logo-alt.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNSAyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUgMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGOTg1MDY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDF7ZmlsbDojRjk3RjA2O3N0cm9rZTojRjk4NTA2O3N0cm9rZS13aWR0aDowLjc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxMi41IiBjeT0iMTIuMiIgcj0iMTEuMiIvPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTcuMSwxOC41VjkuNmgtM1Y4aDcuNnYxLjZoLTN2OC45SDcuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMuNywxOC41VjhoNi44djEuNmgtNS4ydjIuOWg0LjVWMTRoLTQuNXY0LjVIMTMuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./assets/images/payment_1.svg":
/*!*************************************!*\
  !*** ./assets/images/payment_1.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgNTQgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4xICgzNTM3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Qjc2N0I1MEItRDREMy00REVDLThGOTgtMjY2QjJBMjJFM0U0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NCIgaGVpZ2h0PSIzMyIgcng9IjQiPjwvcmVjdD4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJmb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzMuMDAwMDAwLCAtNjQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJzdXBwb3J0LWNvbm5lY3QtYXBwZG93bmxvYWQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImljX3Zpc2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkzMy4wMDAwMDAsIDY0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlLTE0LUNvcHktMiIgc3Ryb2tlPSIjRTRFNEU0IiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI0YzRjNGMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iVmlzYV8yMDE0X2xvZ29fZGV0YWlsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IiMyNDM4ODFmZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4yMjMxODExLDAuMjA4Njk1NjUyIEMyNS4yMTE2NDA3LC0wLjAxNjM5NzUxNTUgMjYuMjQ1ODYwNSwtMC4wNTM0NzgyNjA5IDI3LjI1Mzc4ODMsMC4wNjkxMzA0MzQ4IEMyNy45MDM4NjM1LDAuMTQ5NDQwOTk0IDI4LjU0MTY5NTksMC4zMDU3NzYzOTggMjkuMTU3MjUwNCwwLjUxNTAzMTA1NiBDMjguOTY3OTg4LDEuMzM0MzQ3ODMgMjguNzc5NTI4MywyLjE1MzY2NDYgMjguNTg5MDYxNywyLjk3MjYwODcgQzI3LjgxMjU0MzksMi42NDE2NzcwMiAyNi45NjU1Nzk1LDIuNDQ5NTY1MjIgMjYuMTEwOTg4NSwyLjQyNjA4Njk2IEMyNS42ODE0ODUyLDIuNDE2OTU2NTIgMjUuMjQxOTQ2OCwyLjQ0MTczOTEzIDI0LjgzNTkyNTcsMi41ODIyMzYwMiBDMjQuNTkxMjY5NCwyLjY2NzM5MTMgMjQuMzU3MjUwNCwyLjgwMDA2MjExIDI0LjE5OTQ5ODIsMi45OTcyMDQ5NyBDMjQuMDY3MDM0NiwzLjE2MDgwNzQ1IDIzLjk5OTc5OTMsMy4zNzY1ODM4NSAyNC4wNTA3Nzc3LDMuNTc4OTQ0MSBDMjQuMDk1NTM0NCwzLjc2MTM2NjQ2IDI0LjIyNTc5MDMsMy45MTM5NzUxNiAyNC4zNzIzMDMxLDQuMDM3NzAxODYgQzI0LjYzMzAxNTYsNC4yNTMyOTE5MyAyNC45NDAyOTEsNC40MTIwNDk2OSAyNS4yNDQ3NTY2LDQuNTY3NjM5NzUgQzI1LjkyODc1MDYsNC45MDg0NDcyIDI2LjYzNjAyNjEsNS4yMjI2MDg3IDI3LjI0OTE3MjEsNS42NzA1NTkwMSBDMjcuNzcyODA0OCw2LjA0NTgzODUxIDI4LjIxODU2NSw2LjU0MTg2MzM1IDI4LjQxODg2Niw3LjEzNDk2ODk0IEMyOC41ODI0Mzg1LDcuNjAzNzg4ODIgMjguNTg5ODY0NSw4LjEwODAxMjQyIDI4LjUxMzc5ODMsOC41OTIyOTgxNCBDMjguNDIyODgwMSw5LjE2OTc1MTU1IDI4LjE3NjgxODksOS43MjY3MDgwNyAyNy43OTQyOCwxMC4xOTA0OTY5IEMyNy4zNDQ5MDcyLDEwLjc0MTg2MzQgMjYuNzIxNzI2LDExLjE1NTE1NTMgMjYuMDQ1MzU4OCwxMS40MzQ2NTg0IEMyNS4yNjM0MjIsMTEuNzU5MDY4MyAyNC40MTEwMzg2LDExLjkxNTQwMzcgMjMuNTU5NjU4OCwxMS45Njc1Nzc2IEMyMi41OTk2OTg5LDEyLjAyMjU0NjYgMjEuNjMzNzE4LDExLjkzOTQ0MSAyMC42OTI4MjQ5LDExLjc1ODg4MiBDMjAuMjMyODE0OSwxMS42NjQ5Njg5IDE5Ljc3NDQxMDQsMTEuNTUwOTMxNyAxOS4zNDQzMDUxLDExLjM2OTgxMzcgQzE5LjUzOTU4ODYsMTAuNTIzNjY0NiAxOS43MzM4Njg1LDkuNjc3NTE1NTMgMTkuOTI4NzUwNiw4LjgzMTM2NjQ2IEMyMC4zMjQzMzUyLDkuMDAzMTY3NyAyMC43MjI3Mjk2LDkuMTcyNzMyOTIgMjEuMTQwMzkxNCw5LjI5MzI5MTkzIEMyMS42MTkwNjY3LDkuNDM0MzQ3ODMgMjIuMTE2ODA4OCw5LjUxNzQ1MzQyIDIyLjYxNzc2MjIsOS41NDgwMTI0MiBDMjMuMDc1OTY1OSw5LjU3Mjc5NTAzIDIzLjU0Mjc5OTgsOS41ODA2MjExMiAyMy45OTE1NzA1LDkuNDc3MzkxMyBDMjQuMzQ1MjA4Miw5LjM5NzI2NzA4IDI0LjcwMjg2LDkuMjU5MDA2MjEgMjQuOTQ3MTE0OSw4Ljk5OTA2ODMyIEMyNS4xODI5NDAzLDguNzUyNTQ2NTggMjUuMjQ5MTcyMSw4LjM3NjE0OTA3IDI1LjA5OTg0OTUsOC4wNzU1OTAwNiBDMjQuOTc4ODI1OSw3Ljg0MDYyMTEyIDI0Ljc1NjY0ODMsNy42NjkzNzg4OCAyNC41MzE4NjE1LDcuNTIyMzYwMjUgQzI0LjE5MTI2OTQsNy4zMDM5NzUxNiAyMy44MTk5Njk5LDcuMTMxOTg3NTggMjMuNDQ5ODc0Niw2Ljk2MTg2MzM1IEMyMi43MTczMTA2LDYuNjI0NTk2MjcgMjEuOTk2OTg5NSw2LjIyNTY1MjE3IDIxLjQ0NjI2MTksNS42NTUwOTMxNyBDMjEuMDM4MDMzMSw1LjIzNTA5MzE3IDIwLjc0OTgyNDQsNC43MDM4NTA5MyAyMC42OTIwMjIxLDQuMTM2NDU5NjMgQzIwLjYzMzIxNjMsMy41MzQwMzcyNyAyMC43NTMwMzU2LDIuOTE2MzM1NCAyMS4wMzg2MzUyLDIuMzcyMjM2MDIgQzIxLjI1MjU4NCwxLjk2MTczOTEzIDIxLjU2MDg2MywxLjU5NjMzNTQgMjEuOTI2MTQxNSwxLjI5MjIzNjAyIEMyMi41NzI4MDQ4LDAuNzUxNjc3MDE5IDIzLjM4NDQ0NTYsMC40MDQ3MjA0OTcgMjQuMjIzMTgxMSwwLjIwODY5NTY1MiBaIiBpZD0iU2hhcGUiIGZpbGw9IiMyNDM4ODEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuMDc2ODY5MDQxNiwwLjIxMjYwODY5NiBDMS44OTEwMTg1NiwwLjIxMTMwNDM0OCAzLjcwNDk2NzM5LDAuMjEyMjM2MDI1IDUuNTE4OTE2MjEsMC4yMTE4NjMzNTQgQzUuNjc1MDYyNzIsMC4yMTExMTgwMTIgNS44MzIwMTIwNCwwLjIyNDE2MTQ5MSA1Ljk4MjUzODg5LDAuMjY0MjIzNjAyIEM2LjMwMzI2MTQxLDAuMzQ0OTA2ODMyIDYuNTkwNjY3MzQsMC41MzE4MDEyNDIgNi43ODM1NDI0LDAuNzgzMTY3NzAyIEM2LjkyODA0ODE3LDAuOTY5MTMwNDM1IDcuMDIxOTc2OTIsMS4xODY3NzAxOSA3LjA2NzEzNDk3LDEuNDExNjc3MDIgQzcuMzYzNTcyNSwyLjg3Mzg1MDkzIDcuNjU5ODA5MzMsNC4zMzYwMjQ4NCA3Ljk1NjI0Njg2LDUuNzk4MTk4NzYgQzguMTEzMTk2MTksNi41NjQ5Njg5NCA4LjI2MzkyMzczLDcuMzMzMDQzNDggOC40MjUyODg1MSw4LjA5OTA2ODMyIEM5LjU0NzIxNTI1LDUuNDcwOTkzNzkgMTAuNjY3MTM1LDIuODQxOTg3NTggMTEuNzg1NjQ5OCwwLjIxMjYwODY5NiBDMTIuOTE2ODA4OCwwLjIxMDM3MjY3MSAxNC4wNDc5Njc5LDAuMjExNjc3MDE5IDE1LjE3OTEyNjksMC4yMTE4NjMzNTQgQzEzLjQzNDAxOTEsNC4wNzY0NTk2MyAxMS42ODk3MTQsNy45NDE2MTQ5MSA5Ljk0MzgwMzMxLDExLjgwNjAyNDggQzguODA3MjI1MjksMTEuODA2MDI0OCA3LjY3MDY0NzI3LDExLjgwMzQxNjEgNi41MzQwNjkyNCwxMS44MDczMjkyIEM1LjY4MjY4OTQxLDguNzY2ODk0NDEgNC44Mzk1MzgzOCw1LjcyNDU5NjI3IDMuOTkxNTcwNSwyLjY4MzYwMjQ4IEMzLjkxNTMwMzU2LDIuNDIyMzYwMjUgMy44NTU4OTU2MywyLjE0ODI2MDg3IDMuNjkwOTE4MjEsMS45MiBDMy41MTk5MTk3MiwxLjY4NDY1ODM5IDMuMjM3OTMyNzYsMS41NTQwMzcyNyAyLjk3MjAwMjAxLDEuNDMxNDI4NTcgQzIuMzE4MzE0MSwxLjE0MjQyMjM2IDEuNjI1ODkwNjIsMC45MzcyNjcwODEgMC45MjkyNTIzODMsMC43NTg3NTc3NjQgQzAuNjIxNzc2MjE3LDAuNjgxOTg3NTc4IDAuMzEyNDkzNzI4LDAuNjExNTUyNzk1IDAuMDAxNDA0OTE3MjEsMC41NDgwMTI0MjIgQzAuMDI1NDg5MjEyMiwwLjQzNjAyNDg0NSAwLjA1MzE4NjE1MTUsMC4zMjQ3ODI2MDkgMC4wNzY4NjkwNDE2LDAuMjEyNjA4Njk2IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzE5MjE2NCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDA0NjE2MiwwLjkxMjQ4NDQ3MiBDMTYuNDU5NjA4NiwwLjY3ODQ0NzIwNSAxNi41MTA1ODcxLDAuNDQzNDc4MjYxIDE2LjU2ODE4ODcsMC4yMSBDMTcuNjQzOTUzOCwwLjIxMzM1NDAzNyAxOC43MTk5MTk3LDAuMjA5ODEzNjY1IDE5Ljc5NTY4NDksMC4yMTE2NzcwMTkgQzE4LjkwNDc2NjcsNC4wNzYwODY5NiAxOC4wMTQ0NTA2LDcuOTQwODY5NTcgMTcuMTI0MTM0NSwxMS44MDU0NjU4IEMxNi4wNDczNjU4LDExLjgwNjM5NzUgMTQuOTcwNTk3MSwxMS44MDU0NjU4IDEzLjg5MzgyODQsMTEuODA1ODM4NSBDMTQuNzMxMzU5OCw4LjE3NDcyMDUgMTUuNTY3Njg2OSw0LjU0MzYwMjQ4IDE2LjQwNDYxNjIsMC45MTI0ODQ0NzIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMjgzMjdCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMy4yNDM5NTM4LDEuMDUxMzA0MzUgQzMzLjQ1ODcwNTUsMC41NjQ3ODI2MDkgMzMuOTk0MTc5NiwwLjIxOTY4OTQ0MSAzNC41NjE5NjY5LDAuMjEyNjA4Njk2IEMzNS40OTg4NDYsMC4yMDc5NTAzMTEgMzYuNDM1NzI1LDAuMjExMzA0MzQ4IDM3LjM3MjQwMzQsMC4yMTA3NDUzNDIgQzM4LjI0MjQ0ODYsNC4wNzU5MDA2MiAzOS4xMTEyODk1LDcuOTQxMjQyMjQgMzkuOTgwNTMxOSwxMS44MDY1ODM5IEMzOC45ODQ0NDU2LDExLjgwNzMyOTIgMzcuOTg4MzU5MywxMS44MDYzOTc1IDM2Ljk5MjQ3MzcsMTEuODA2NzcwMiBDMzYuODYwMDEsMTEuMjMwMDYyMSAzNi43MzExNTkxLDEwLjY1MjQyMjQgMzYuNjAwMTAwNCwxMC4wNzUzNDE2IEMzNS4yMTk0NjgxLDEwLjA3NDU5NjMgMzMuODM5MDM2NiwxMC4wNzU1MjggMzIuNDU4NjA1MSwxMC4wNzQ1OTYzIEMzMi4yMzMwMTU2LDEwLjY1MTExOCAzMi4wMDcwMjQ2LDExLjIyNzYzOTggMzEuNzg0NDQ1NiwxMS44MDUwOTMyIEMzMC42NTM4ODg2LDExLjgwNzg4ODIgMjkuNTIzMTMxLDExLjgwNjM5NzUgMjguMzkyNTc0LDExLjgwNTY1MjIgQzMwLjAwOTQzMyw4LjIyMDc0NTM0IDMxLjYyNTg5MDYsNC42MzU2NTIxNyAzMy4yNDM5NTM4LDEuMDUxMzA0MzUgTDMzLjI0Mzk1MzgsMS4wNTEzMDQzNSBaIE0zMy4zODc4NTc1LDcuNjk1ODM4NTEgQzM0LjI4MDM4MTMsNy42OTY1ODM4NSAzNS4xNzMxMDU5LDcuNjk2MDI0ODQgMzYuMDY1NjI5Nyw3LjY5NjAyNDg0IEMzNS43Mzk0ODgyLDYuMjQ2ODk0NDEgMzUuNDE0MzUwMiw0Ljc5Nzc2Mzk4IDM1LjA4ODIwODcsMy4zNDg2MzM1NCBDMzQuNTE4NDE0NSw0Ljc5NjY0NTk2IDMzLjk1NDY0MTIsNi4yNDY4OTQ0MSAzMy4zODc4NTc1LDcuNjk1ODM4NTEgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMzQ0NDkwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./assets/images/payment_2.svg":
/*!*************************************!*\
  !*** ./assets/images/payment_2.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgNTQgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4xICgzNTM3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RTBBMTAwMTAtQjIyQy00MjRELUI4NUQtMkYxN0I5REMwMTYyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NCIgaGVpZ2h0PSIzMyIgcng9IjQiPjwvcmVjdD4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJmb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTcuMDAwMDAwLCAtNjQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJzdXBwb3J0LWNvbm5lY3QtYXBwZG93bmxvYWQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImljX21hc3RlcmNhcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5Ny4wMDAwMDAsIDY0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlLTE0LUNvcHktMyIgc3Ryb2tlPSIjRTRFNEU0IiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWFzdGVyY2FyZC1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImczMTI1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImczMTE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJnMzExMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLjA2NzE3OTksMTAuMjQ0MTc3MSBDMzMuMDY3MTc5OSwxNS45MDA2NTQzIDI4LjQ5MDM2NjksMjAuNDg2MTM1OSAyMi44NDQ1ODA5LDIwLjQ4NjEzNTkgQzE3LjE5ODc5NDksMjAuNDg2MTM1OSAxMi42MjE5ODA1LDE1LjkwMDY1NDMgMTIuNjIxOTgwNSwxMC4yNDQxNzcxIEMxMi42MjE5ODA1LDQuNTg3Njk4OTQgMTcuMTk4Nzk0OSwwLjAwMjIxNzY4ODU1IDIyLjg0NDU4MDksMC4wMDIyMTc2ODg1NSBDMjguNDkwMzY2OSwwLjAwMjIxNzY4ODU1IDMzLjA2NzE3OTksNC41ODc2OTg5NCAzMy4wNjcxNzk5LDEwLjI0NDE3NzEgTDMzLjA2NzE3OTksMTAuMjQ0MTc3MSBaIiBpZD0icGF0aDI5OTciIGZpbGw9IiNGNzlGMUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNDU2MDUyMywxMC4yNDQxNzcxIEMyMC40NTYwNTIzLDE1LjkwMDY1NDMgMTUuODc5MjM5MywyMC40ODYxMzU5IDEwLjIzMzQ1MzMsMjAuNDg2MTM1OSBDNC41ODc2NjczLDIwLjQ4NjEzNTkgMC4wMTA4NTI5MzQsMTUuOTAwNjU0MyAwLjAxMDg1MjkzNCwxMC4yNDQxNzcxIEMwLjAxMDg1MjkzNCw0LjU4NzY5ODk0IDQuNTg3NjY3MywwLjAwMjIxNzY4ODU1IDEwLjIzMzQ1MzMsMC4wMDIyMTc2ODg1NSBDMTUuODc5MjM5MywwLjAwMjIxNzY4ODU1IDIwLjQ1NjA1MjMsNC41ODc2OTg5NCAyMC40NTYwNTIzLDEwLjI0NDE3NzEgTDIwLjQ1NjA1MjMsMTAuMjQ0MTc3MSBaIiBpZD0icGF0aDI5OTUiIGZpbGw9IiNFQTAwMUIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNTM5MDM3OCwyLjE4MTYzMTg1IEMxNC4xNTM4NDY3LDQuMDU2NjAxNDYgMTIuNjIyNzc1MSw2Ljk3MDE5MDczIDEyLjYyMjc3NTEsMTAuMjQzMjE3NCBDMTIuNjIyNzc1MSwxMy41MTYyNDQxIDE0LjE1Mzg0NjcsMTYuNDMyMDU3MSAxNi41MzkwMzc4LDE4LjMwNzAyNjkgQzE4LjkyNDIyODgsMTYuNDMyMDU3MSAyMC40NTUzMDA1LDEzLjUxNjI0NDEgMjAuNDU1MzAwNSwxMC4yNDMyMTc0IEMyMC40NTUzMDA1LDYuOTcwMTkwNzMgMTguOTI0MjI4OCw0LjA1NjYwMTQ2IDE2LjUzOTAzNzgsMi4xODE2MzE4NSBMMTYuNTM5MDM3OCwyLjE4MTYzMTg1IFoiIGlkPSJwYXRoMjk5OSIgZmlsbD0iI0ZGNUYwMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImczMDQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4yMDQwMzcsIDE1LjI4NTAyMCkiIGZpbGw9IiNGNzlGMUEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJ0ZXh0MzA0NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjg0NDAxNDgxLDAuNTMwOTczODIgTDAuODQ0MDE0ODEsMC4wMzA5NzM4MiBMMC43NDg1NzE4OTUsMC4wMzA5NzM4MiBMMC42Mzg3ODEzNDksMC4zNzQ4MzA0NyBMMC41Mjg5OTA4MDIsMC4wMzA5NzM4MiBMMC40MzM1NDc4ODgsMC4wMzA5NzM4MiBMMC40MzM1NDc4ODgsMC41MzA5NzM4MiBMMC41MDA5MTkzNTcsMC41MzA5NzM4MiBMMC41MDA5MTkzNTcsMC4xNTM4NDA3MTEgTDAuNjAzODQ3OTk2LDAuNDc4OTI2MDM3IEwwLjY3MzcxNDcxLDAuNDc4OTI2MDM3IEwwLjc3NjY0MzM0MSwwLjE1Mjk4NzQ3MSBMMC43NzY2NDMzNDEsMC41MzA5NzM4MiBMMC44NDQwMTQ4MSwwLjUzMDk3MzgyIFogTTAuMjM5NTQzMDA1LDAuNTMwOTczODIgTDAuMjM5NTQzMDA1LDAuMTE2Mjk4MDQ5IEwwLjM2MTgwOTc0NywwLjExNjI5ODA0OSBMMC4zNjE4MDk3NDcsMC4wMzE4MjcwNjA5IEwwLjA1MDUyODYwMjgsMC4wMzE4MjcwNjA5IEwwLjA1MDUyODYwMjgsMC4xMTYyOTgwNDkgTDAuMTcyNzk1MzQ0LDAuMTE2Mjk4MDQ5IEwwLjE3Mjc5NTM0NCwwLjUzMDk3MzgyIEwwLjIzOTU0MzAwNSwwLjUzMDk3MzgyIFoiIGlkPSJwYXRoMzA1NyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./assets/images/payment_3.svg":
/*!*************************************!*\
  !*** ./assets/images/payment_3.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/payment_3-8d04e944857caa39f8ff583765cd8808.svg";

/***/ }),

/***/ "./assets/images/payment_4.svg":
/*!*************************************!*\
  !*** ./assets/images/payment_4.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgNTQgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4xICgzNTM3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QThFNjJBNEMtNTBFQy00N0UyLThFNkQtRkVFRkI3NDcyMEU3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NCIgaGVpZ2h0PSIzMyIgcng9IjQiPjwvcmVjdD4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJmb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTcuMDAwMDAwLCAtMTA3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ic3VwcG9ydC1jb25uZWN0LWFwcGRvd25sb2FkIj4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY19pbnRlcm5ldC1iYW5raW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OTcuMDAwMDAwLCAxMDcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJSZWN0YW5nbGUtMTQtQ29weS02IiBzdHJva2U9IiNFNEU0RTQiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSIjRjNGM0YzIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIGZpbGw9IiNENEQ0RDQiIHg9IjEiIHk9IjYiIHdpZHRoPSI1MiIgaGVpZ2h0PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0iSU5URVJORVQtQkFOS0lORy1Db3B5LTMiIGZvbnQtZmFtaWx5PSIuU0ZOU1RleHQsIC5TRiBOUyBUZXh0IiBmb250LXNpemU9IjguNSIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgbGluZS1zcGFjaW5nPSI4LjUiIGZpbGw9IiMzMzMzMzMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSI0LjcyODc1OTc3IiB5PSIxOC44NDgzODg3Ij5JTlRFUk5FVCA8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSI2LjMyNjY2MDE2IiB5PSIyNy4zNDgzODg3Ij5CQU5LSU5HPC90c3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./assets/style/Global.style.js":
/*!**************************************!*\
  !*** ./assets/style/Global.style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ::selection {
    background: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')};
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #__next {
    > .ant-layout {
      min-height: 100vh;
      overflow: hidden;
      background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')};

      /* hotel submission style  */ 
      .hotel-submission-form {
        .ant-progress-outer {
          position: fixed;
          z-index: 9;
          left: 0;
          top: auto;
        }
        .gm-style {
          > input[type="text"] {
            left: 9px !important;
            top: 46px !important;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .hotel-form-location {
          .ant-card-head-title {
            font-size: 15px;
            line-height: 18px;
            font-weight: 700;
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
          }
          .ant-card-body p {
            display: flex;
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.2', '#777777')};
            justify-content: flex-start;
            strong {
              color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
              width: 30%;
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for navbar profile / account menu
  /*------------------------------------------*/
  .ant-popover {
    &.profile_menu {
      z-index: 9999;
    }
    .ant-popover-content {
      .ant-popover-inner {
        .ant-popover-inner-content {
          ul.ant-menu  {
            border: 0;
            &.account_menu {
              li {
                color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
                font-size: 15px;
                line-height: 18px;
                font-weight: 400;
                height: auto;
                transition: color 0.2s ease-in-out;
                &.ant-menu-item-selected,
                &.ant-menu-item-active {
                  background-color: transparent;
                }
                a {
                  padding: 8px 0;
                  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
                  }
                  &.active {
                    font-weight: 700;
                    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
                  }
                }
                button {
                  padding: 0;
                  border: 0;
                  cursor: pointer;
                  padding: 8px 0;
                  background-color: transparent;
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
                  }
                  &:focus {
                    outline: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for date range picker
  /*------------------------------------------*/
  .DateRangePicker {
    .DateRangePickerInput {
      .DateRangePicker_picker {
        .DayPicker_weekHeader {
          .DayPicker_weekHeader_ul {
            .DayPicker_weekHeader_li {
              color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
              small {
                font-size: 13px;
              }
            }
          }
        }
        .DayPicker_focusRegion {
          .CalendarMonthGrid {
            .CalendarMonth {
              .CalendarMonth_caption {
                font-size: 16px;
                color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
              }
            }
          }
        }
        .DayPickerNavigation {
          .DayPickerNavigation_button {
            &:focus {
              outline: none;
            }
          }
        }
        .DayPickerKeyboardShortcuts_buttonReset {
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for ant tooltip
  /*------------------------------------------*/
  .ant-tooltip {
    font-size: 13px;
    font-weight: 700;
    .ant-tooltip-inner {
      box-shadow: none;
      text-align: center;
      border-radius: 3px;
      min-height: 26px;
      padding: 4px 10px;
    }
  }

  /*------------------------------------------*/ 
  // style for dropdown
  /*------------------------------------------*/
  .ant-select-dropdown {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 12px 12px;
        line-height: 1;
        &.ant-select-dropdown-menu-item-active {
          background-color: rgba(0, 132, 137, 0.1);
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // here fix height issue for RoomGuest 
  /*------------------------------------------*/
  .view_with__popup {
    &.room_guest__component {
      &.active {
        min-height: 54px;
      }
      &.alt {
        .popup_container {
          #popup {
            > div {
              > div {
                padding: 0;
              }
            }
          }
        }
        &.active {
          min-height: inherit;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant dropdown and social share menu style 
  /*------------------------------------------*/
  .ant-dropdown {
    &.social_share_menu {
      z-index: 9999 !important;
      
      .ant-menu {
        padding: 7px 0;
        min-width: 150px;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    
        .ant-menu-item {
          margin: 0;
          padding: 0;
          height: inherit;
          line-height: inherit;
          > div {
            padding: 15px 20px;
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
            svg {
              margin-right: 8px;
            }
          }

          &:hover {
            background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7')};
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant modal and drawer style 
  /*------------------------------------------*/
  .ant-drawer,
  .ant-modal-mask,
  .ant-modal-wrap  {
    z-index: 99999 !important;
  }
  .ant-drawer {
    &.filter_drawer {
      pointer-events: none;
      .ant-drawer-mask {
        display: none;
      }
      &.ant-drawer-bottom {
        &.ant-drawer-open {
          .ant-drawer-content-wrapper {
            box-shadow: none;
          }
        }
      }
      .ant-drawer-content-wrapper {
        height: calc(100vh - 152px) !important;
        pointer-events: all;
        .ant-drawer-wrapper-body {
          height: 100%;
          .ant-drawer-body {
            height: 100%;
            padding-top: 0;
            overflow: hidden;
          }
        }
      }
    }
  }

  .ant-modal-wrap {
    .ant-modal-content {
      box-shadow: 0 1px 10px rgba(0,0,0,0.16);
    }
    &.review_modal {
      .ant-modal {
        max-width: 1170px;
        box-sizing: border-box;
        @media only screen and (max-width: 1260px) {
          padding-left: 30px;
          padding-right: 30px;
        }
        @media only screen and (max-width: 767px) {
          top: 0;
          padding: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
        .ant-modal-body {
          padding-left: 60px;
          padding-right: 60px;
          padding-bottom: 60px;
          padding-top: 30px;
          @media only screen and (max-width: 1260px) {
            padding: 40px 30px;
          }
        }
      }
      .image_uploader{
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        @media only screen and (max-width: 667px) {
          flex-wrap: wrap;
        }
        .ant-upload{
          @media only screen and (max-width: 667px) {
            margin-bottom: 10px;
          }
          &.ant-upload-drag{
            border: 0;
            border-radius: 0;
            background: transparent;
            .ant-upload{
              padding: 0;
              display: block;
              width: auto;
              height:auto;
            }
          }
          &.ant-upload-drag-hover{
            .image-drag-area{
              border-color: #48bdc1;
            }
          }
        }
        .ant-upload-list{
          float: none;
          display: flex;
          .ant-upload-list-item{
            width: 125px;
            height: 125px;
            border-radius: 3px;
          }
        }
        .ant-upload-drag-container{
          display: block;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // map info window style 
  /*------------------------------------------*/
  .gm-style-iw-c {
    box-shadow: none !important;
  }
  .gm-style-iw {
    padding: 0 !important;
    border-radius: 3px !important;
    width: 270px !important;
    z-index: 1;
    .gm-style-iw-d {
      overflow-y: auto !important;
      overflow-x: hidden !important;
      max-width: 100% !important;
    }
    .info_window_card {
      width: 270px;
      margin-bottom: 0;
      > div {
        > img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      .content_wrapper {
        > div + div {
          margin-top: 2px;
          margin-bottom: 4px;
        }
        .meta_wrapper {
          .rating {
            margin-top: 5px;
          }
        }
      }
    }
    button[title="Close"].gm-ui-hover-effect {
      width: 26px !important;
      height: 26px !important;
      padding: 6px !important;
      border-radius: 50%;
      margin: 0 !important;
      top: 14px !important;
      right: 11px !important;
      opacity: 1;
      align-items: center;
      display: inline-flex !important;
      background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')} !important;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16);
      > img {
        margin: 0 !important;
      }
    }
  }

/*------------------------------------------*/
// Image Gallery Modal style
/*------------------------------------------*/
.ant-modal-wrap {
  &.image_gallery_modal {
    .ant-modal {
      top: 50px;
      .ant-modal-content{
        box-shadow: none;
        padding: 0 30px;
        background: transparent;
        @media only screen and (max-width: 480px) {
          padding: 0 20px;
        }
        .ant-modal-body {
          max-width: 1170px;
          padding: 0;
          margin: 0 auto; 
          @media only screen and (max-width: 1440px) {
            position: relative;
          }
        }
      }
      .image_gallery_close {
        background: transparent;
        border: 0;
        width: 60px;
        height: 60px;
        position: absolute;
        top: -20px;
        right: 40px;
        &:focus,
        &:hover {
          outline: none;
        }
        @media only screen and (max-width: 1440px) {
          top: 0;
          right: 0;
          svg {
            path {
              opacity: 0.8;
              fill: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')};
              transition: all 0.3s ease;
            }
          }
          &:hover {
            svg {
              path {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for Increment Decrement Component
/*------------------------------------------*/
.quantity {
  button.btn {
    border: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
    svg {
      fill: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
    }
    &:hover {
      background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
      svg {
        fill: #ffffff;
      }
    }
  }
  input[type="number"],
  input[type="number"].qnt-input {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
  }
}

/*------------------------------------------*/ 
// style for mobile Header Component
/*------------------------------------------*/
.mobile-header {
  &.ant-drawer {
    z-index: 10000;
  }
  .ant-drawer-body {
    padding: 0;
    .auth-menu {
      border: 0;
      display: flex;
      margin: 0 0 30px;
      padding: 25px 20px;
      align-items: center;
      background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7')};
      li {
        height: auto;
        line-height: 1;
        padding: 0;
        margin: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 15px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 700;
          color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
        }
        &:last-child {
          a {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')};
            background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
            transition: opacity 0.2s ease;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
    .main-menu {
      border: 0;
      padding-top: 30px;
      li {
        padding: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          font-size: 15px;
          padding: 0 31px;
          border-left: 4px solid transparent;
          color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
          &.active {
            font-weight: 700;
            border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
          }
        }
        button {
          display: block;
          text-align: left;
          width: 100%;
          border: 0;
          padding: 0 32px;
          cursor: pointer;
          background-color: transparent;
          color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
          transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          &:hover {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
          }
          &focus {
            outline: 0;
          }
        }
        &:hover {
          a {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for google map dropdown
/*------------------------------------------*/
.pac-container {
  border: 0;
  z-index: 99999;
  padding: 5px 0;
  margin-top: 0;
  border-radius: 3px;
  box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
  @media only screen and (max-width: 991px) {
    margin-top: 0;
  }
  &::after {
    display: none;
  }
  .pac-item {
    border-top: 0;
    line-height: 30px;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 13px;
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090')};
    .pac-icon {
      margin-top: 6px;
    }
    .pac-item-query {
      font-size: 15px;
      font-weight: 600;
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};  
      .pac-matched {
        font-weight: 700;
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.0', '#000000')};
      }
    } 
    &:hover {
      background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7')};
    }
  }
}

/*------------------------------------------*/ 
// style for reservation form
/*------------------------------------------*/
.reservation_modal {
  .ant-modal {
    width: 100% !important;
    max-width: 450px;
    padding: 0 15px;
  }
  .ant-modal-content {
    box-shadow: none;
    .ant-modal-body {
      padding: 0;
      position: relative;
      .reservation_sidebar {
        box-shadow: 0 1px 10px rgba(0,0,0,0.16);
        header {
          padding-top: 50px;
          padding-bottom: 20px;
          border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB')};
          @media only screen and (max-width: 375px) {
            padding-top: 30px;
          }
        }
        .DateInput__small {
          width: 112px;
        }
        input,
        .DateRangePickerInput {
          padding: 0 9px;
        }
        footer {
          border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB')};
        }
      }
      > button.close {
        border: 0;
        padding: 0;
        top: 15px;
        right: 15px;
        height: auto;
        line-height: 1;
        position: absolute;
        font-size: 32px;
        background-color: transparent;
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090')};
        transition: all 0.3s ease;
        @media only screen and (max-width: 375px) {
          top: 10px;
          right: 10px;
          font-size: 25px;
        }
        &:hover,
        &:focus {
          outline: none;
          color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
        }
        &::after {
          display: none;
        }
      }
    }
  }
}

.reservation_sidebar {
  padding: 0 !important;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff')};
  header {
    padding-bottom: 27px;
    margin-bottom: 29px;
    padding: 25px 30px 26px 30px;
    border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 25px 15px 26px 15px;
    }
    a {
      &:hover {
        color: #31b8bd;
      }
    }
  }

  p {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C')};
    font-size: 15px;
    font-weight: 400;
    a {
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')};
      font-weight: 700;
      &:hover,
      &:focus {
        outline: 0;
        color: #008489d1;
        text-decoration: underline;
      }
    }
  }

  footer {
    padding: 25px 30px 28px 30px;
    margin-top: 29px;
    border-top: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 20px 15px 25px 15px;
    }

    p {
      margin-bottom: 0;
    }
  }
}

.grid_column .placeholder {
  max-width: 100%;
}

.ant-input-affix-wrapper {
  border-radius: 3px;
  border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6')};
}

.ant-input-search-icon::before {
  border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6')};
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner, 
.ant-checkbox:hover .ant-checkbox-inner, 
.ant-checkbox-input:focus + .ant-checkbox-inner,
.ant-checkbox-checked::after {
  border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489')} !important;
}
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/back-top */ "antd/lib/back-top");
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer.style */ "./components/Footer/Footer.style.js");






var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




const Footer = ({
  logo,
  menu,
  copyright,
  className,
  path,
  address,
  email,
  phone,
  license,
  images,
  guide,
  about,
  agent,
  term,
  social
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "footer",
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["SubcribeArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    justify: "space-around",
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xs: {
      span: 32
    },
    sm: {
      span: 24
    },
    md: {
      span: 24
    },
    lg: {
      span: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["SocialArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, social && social))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xs: {
      span: 32
    },
    lg: {
      span: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "\u0110\u0102NG K\xDD NH\u1EACN TIN"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "C\xE1c deal du l\u1ECBch gi\u1EA3m gi\xE1 \u0111\u1EBFn 60% s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn b\u1EA1n"))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    lg: {
      span: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    layout: "inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    wrapperCol: {
      sm: 24
    },
    style: {
      width: "60%",
      marginRight: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 Email",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "\u0110\u0103ng k\xFD"))))))), __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["MainFooterArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["RowArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["GrayFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    justify: "space-around",
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, logo && logo))), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, "\u0110\u1ECBa ch\u1EC9 : "), address && address), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, "Email : "), email && email, " "), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, "\u0110i\u1EC7n tho\u1EA1i : "), phone && phone), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }, license && license))), __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["FooterPayment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, " ", images && images))), __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["NotGayFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    justify: "space-around",
    align: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "gutter-row",
    xs: {
      span: 12
    },
    sm: {
      span: 10
    },
    md: {
      span: 6
    },
    lg: {
      span: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "V\u1EC0 TRIP FINDER"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, about && about)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "gutter-row",
    xs: {
      span: 12
    },
    sm: {
      span: 10
    },
    md: {
      span: 6
    },
    lg: {
      span: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "\u0110\u1ED0I T\xC1C"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, agent && agent)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "gutter-row",
    xs: {
      span: 12
    },
    sm: {
      span: 10
    },
    md: {
      span: 6
    },
    lg: {
      span: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "\u0110I\u1EC0U KHO\u1EA2N S\u1EEC D\u1EE4NG"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, term && term)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "gutter-row",
    xs: {
      span: 12
    },
    sm: {
      span: 10
    },
    md: {
      span: 6
    },
    lg: {
      span: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "H\u01AF\u1EDANG D\u1EAAN"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, guide && guide)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, copyright && __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["CopyrightArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 48
    }
  }, copyright))), __jsx(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  })))))), !!path && __jsx(_Footer_style__WEBPACK_IMPORTED_MODULE_8__["SecondaryFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 18
    }
  }));
};

Footer.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
  bgSrc: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  copyright: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element])
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/Footer.style.js":
/*!*******************************************!*\
  !*** ./components/Footer/Footer.style.js ***!
  \*******************************************/
/*! exports provided: SubcribeArea, MainFooterArea, SocialArea, LogoWrapper, Container, RowArea, GrayFooter, NotGayFooter, FooterPayment, MenuWrapper, CopyrightArea, SecondaryFooter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcribeArea", function() { return SubcribeArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterArea", function() { return MainFooterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialArea", function() { return SocialArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowArea", function() { return RowArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrayFooter", function() { return GrayFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGayFooter", function() { return NotGayFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPayment", function() { return FooterPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightArea", function() { return CopyrightArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryFooter", function() { return SecondaryFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Footerstyle__FooterWrapper",
  componentId: "eqt0z6-0"
})(["background-color:", ";padding-top:20px;display:block;color:#888;@media only screen and (max-width:480px){padding:60px 0 50px;}button[type='submit'].ant-btn{", " ", " color:", ";background-color:", ";border-radius:0 3px 3px 0;border:0;box-shadow:none;font-size:15px;font-weight:700;text-shadow:none;@media only screen and (max-width:991px){min-width:100%;border-radius:0 0 3px 3px;}@media only screen and (max-width:480px){height:47px;}&::after{display:none;}&:hover{opacity:0.85;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.17', '#333'), ''
/* min-width: 157px; */
, ''
/* height: 60px; */
, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const SubcribeArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__SubcribeArea",
  componentId: "eqt0z6-1"
})(["padding-bottom:15px;border-bottom:0.5px dashed rgba(255,255,255,0.2);border-width:100%;h2{margin-bottom:0;color:#888;font-size:18px;font-weight:500;text-transform:uppercase;@media only screen and (max-width:768px){text-align:center;}}"]);
const MainFooterArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__MainFooterArea",
  componentId: "eqt0z6-2"
})([""]);
const SocialArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__SocialArea",
  componentId: "eqt0z6-3"
})(["img{height:35px;width:35px;}ul{justify-content:center;display:flex;}li{display:inline;margin:5px;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__LogoWrapper",
  componentId: "eqt0z6-4"
})(["display:block;margin-bottom:15px;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__Container",
  componentId: "eqt0z6-5"
})(["padding-left:30px;padding-right:30px;"]);
const RowArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__RowArea",
  componentId: "eqt0z6-6"
})(["display:flex;flex-wrap:wrap;"]);
const GrayFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__GrayFooter",
  componentId: "eqt0z6-7"
})(["background-color:rgba(0,0,0,0.2);padding-top:15px;padding-bottom:15px;padding-left:15px;padding-right:15px;max-width:25%;position:relative;li{margin-top:5px;font-size:14px;};@media only screen and (max-width:992px){max-width:100%;flex:0 0 100%;}@media only screen and (max-width:768px){max-width:100%;flex:0 0 100%;}@media only screen and (max-width:480px){flex:0 0 100%;max-width:100%;}"]);
const NotGayFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__NotGayFooter",
  componentId: "eqt0z6-8"
})(["padding-top:15px;padding-left:10px;padding-right:10px;width:75%;@media only screen and (max-width:992px){flex:0 0 100%;max-width:100%;}@media only screen and (max-width:768px){flex:0 0 100%;max-width:100%;}@media only screen and (max-width:480px){flex:0 0 100%;max-width:100%;}h3{margin-bottom:15px;color:#fff;font-weight:500;font-size:14px;line-height:20px;}"]);
const FooterPayment = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__FooterPayment",
  componentId: "eqt0z6-9"
})(["padding-top:15px;img{margin-right:5px;}li{display:inline}"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__MenuWrapper",
  componentId: "eqt0z6-10"
})(["margin-top:51px;padding-left:10px;@media only screen and (max-width:480px){margin-top:29px;padding-left:0;}ul,.ant-menu,ul.ant-menu{display:flex;align-items:center;border:0;background-color:transparent;@media only screen and (max-width:480px){flex-wrap:wrap;}li{margin:0 30px;padding:0;height:auto;margin-bottom:0 !important;@media only screen and (max-width:480px){margin:0 7px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}&.ant-menu-item-selected{background-color:transparent;}color:", ";font-size:15px;line-height:18px;font-weight:700;transition:color 0.2s ease-in-out;a{color:", ";transition:color 0.2s ease-in-out;&:hover{color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const CopyrightArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__CopyrightArea",
  componentId: "eqt0z6-11"
})(["color:", ";font-size:13px;line-height:18px;font-weight:400;text-align:center!important;margin-top:59px;border-top:1px solid rgba(255,255,255,0.1);padding:10px 0;@media only screen and (max-width:480px){margin-top:14px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
const SecondaryFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyle__SecondaryFooter",
  componentId: "eqt0z6-12"
})(["@media only screen and (max-width:1200px){height:74px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.style */ "./components/Navbar/Navbar.style.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\components\\Navbar\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navbar = ({
  className,
  logo,
  avatar,
  navMenu,
  authMenu,
  profileMenu,
  isLogin,
  headerType,
  searchComponent,
  location,
  searchVisibility
}) => {
  const addAllClasses = ['navbar'];

  if (className) {
    addAllClasses.push(className);
  }

  if (headerType) {
    addAllClasses.push(`is_${headerType}`);
  }

  return __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, logo || searchVisibility ? __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["LogoArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, logo, !searchVisibility && location.pathname === '/' ? null : searchComponent) : null, __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["MenuArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, navMenu && __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["MenuWrapper"], {
    className: "main_menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, navMenu), isLogin && avatar ? __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["AvatarWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, profileMenu) : authMenu && __jsx(_Navbar_style__WEBPACK_IMPORTED_MODULE_2__["AuthWrapper"], {
    className: "auth_menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, authMenu))));
};

Navbar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  navMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  authMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  isLogin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  headerType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['transparent', 'default'])
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/Navbar.style.js":
/*!*******************************************!*\
  !*** ./components/Navbar/Navbar.style.js ***!
  \*******************************************/
/*! exports provided: Container, LogoArea, MenuArea, AvatarWrapper, MenuWrapper, AuthWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoArea", function() { return LogoArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuArea", function() { return MenuArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarWrapper", function() { return AvatarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapper", function() { return AuthWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "Navbarstyle__NavbarWrapper",
  componentId: "u86sc9-0"
})(["display:none;width:100%;padding:0 25px;min-height:82px;align-items:center;justify-content:space-between;border-bottom:1px solid ", ";background-color:", ";@media only screen and (min-width:991px){display:flex;}&.is_transparent{background:transparent;position:fixed;width:100%;left:0;top:0;z-index:999;border-bottom:0;background-color:transparent;transition:all 0.3s ease-out;.ant-menu{li{&.ant-menu-item-selected{background-color:transparent;}a{color:", ";&.active{border-bottom:0;}}}&.dropdown-menu{li{a{color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__Container",
  componentId: "u86sc9-1"
})(["max-width:1920px;width:100%;margin:0 auto;@media only screen and (min-width:991px){display:flex;justify-content:space-between;align-items:center;}"]);
const LogoArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__LogoArea",
  componentId: "u86sc9-2"
})(["display:flex;align-items:center;max-width:650px;width:100%;> a{margin-right:27px;}"]);
const MenuArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__MenuArea",
  componentId: "u86sc9-3"
})(["display:flex;align-items:center;"]);
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__AvatarWrapper",
  componentId: "u86sc9-4"
})(["margin-left:46px;.avatar-dropdown{position:relative;.dropdown-handler{width:40px;height:40px;overflow:hidden;border-radius:50%;cursor:pointer;img{width:100%;height:100%;object-fit:cover;}}.dropdown-menu{min-width:180px;border-right:0;position:absolute;right:0;top:45px;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,0.15);transition:all 0.3s ease;&.hide{opacity:0;visibility:hidden;}&.active{opacity:1;visibility:visible;}li{color:", ";font-size:15px;line-height:18px;font-weight:400;height:auto;padding:0;transition:color 0.2s ease-in-out;&.ant-menu-item-selected,&.ant-menu-item-active{background-color:transparent;}a{display:block;padding:8px 16px;color:", ";transition:color 0.2s ease-in-out;&:hover{color:", ";}&.active{font-weight:700;color:", ";}}button{padding:0;border:0;cursor:pointer;padding:8px 16px;width:100%;text-align:left;background-color:transparent;transition:color 0.2s ease-in-out;&:hover{color:", ";}&:focus{outline:none;}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__MenuWrapper",
  componentId: "u86sc9-5"
})(["ul,.ant-menu,ul.ant-menu{display:flex;align-items:center;border:0;background-color:transparent;li{margin:0 14px;padding:0;height:auto;margin-bottom:0 !important;color:", ";font-size:15px;line-height:18px;font-weight:400;transition:color 0.2s ease-in-out;@media only screen and (max-width:1200px){margin:0 10px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}&.ant-menu-item-selected,&.ant-menu-item-active{background-color:transparent;}a{display:block;padding:30px 16px;color:", ";transition:color 0.2s ease-in-out;@media only screen and (max-width:1200px){padding:30px 10px;}&:hover{color:", ";}&.active{font-weight:700;color:", ";border-bottom:3px solid ", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const AuthWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyle__AuthWrapper",
  componentId: "u86sc9-6"
})(["margin-left:74px;ul,.ant-menu,ul.ant-menu{display:flex;align-items:center;border:0;background-color:transparent;li{margin:0;padding:0;height:auto;margin-bottom:0 !important;color:", ";font-size:15px;line-height:18px;font-weight:400;transition:color 0.2s ease-in-out;&.ant-menu-item-selected{background-color:transparent;}a{display:flex;align-items:center;justify-content:center;min-width:78px;min-height:38px;border-radius:3px;color:", ";transition:color 0.2s ease-in-out;&:hover{color:", ";}}&:last-child{a{color:", ";background-color:", ";transition:opacity 0.2s ease;&:hover{opacity:0.9;}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (NavbarWrapper);

/***/ }),

/***/ "./components/UI/Base.js":
/*!*******************************!*\
  !*** ./components/UI/Base.js ***!
  \*******************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This is our base component every components must be extend it. */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "./components/UI/Logo/Logo.js":
/*!************************************!*\
  !*** ./components/UI/Logo/Logo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.style */ "./components/UI/Logo/Logo.style.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\components\\UI\\Logo\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LogoNext = ({
  className,
  withLink,
  linkTo,
  title,
  src
}) => {
  return __jsx(_Logo_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, withLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: linkTo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, src && __jsx("img", {
    src: src,
    alt: "TripFinder.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), title && __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }
  }, title))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, src && __jsx("img", {
    src: src,
    alt: "TripFinder.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }), title && __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, title)));
};

LogoNext.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  withLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  linkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (LogoNext);

/***/ }),

/***/ "./components/UI/Logo/Logo.style.js":
/*!******************************************!*\
  !*** ./components/UI/Logo/Logo.style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const LogoArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Logostyle__LogoArea",
  componentId: "sc-1rrdtsu-0"
})(["display:flex;align-items:center;a{display:flex;align-items:center;}img{width:20px;}h3{color:", ";text-transform:capitalize;font-size:20px;font-weight:700;margin:0 0 0 10px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (LogoArea);

/***/ }),

/***/ "./components/UI/Text/Text.js":
/*!************************************!*\
  !*** ./components/UI/Text/Text.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\components\\UI\\Text\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "t69qtu-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

Text.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  m: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./container/Layout/Footer/Footer.js":
/*!*******************************************!*\
  !*** ./container/Layout/Footer/Footer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Logo/Logo */ "./components/UI/Logo/Logo.js");
/* harmony import */ var components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/logo-alt.svg */ "./assets/images/logo-alt.svg");
/* harmony import */ var assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_payment_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/payment_1.svg */ "./assets/images/payment_1.svg");
/* harmony import */ var assets_images_payment_1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_payment_1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_payment_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/payment_2.svg */ "./assets/images/payment_2.svg");
/* harmony import */ var assets_images_payment_2_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_payment_2_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_payment_3_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/payment_3.svg */ "./assets/images/payment_3.svg");
/* harmony import */ var assets_images_payment_3_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_payment_3_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_payment_4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/payment_4.svg */ "./assets/images/payment_4.svg");
/* harmony import */ var assets_images_payment_4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_payment_4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/icons/facebook.svg */ "./assets/images/icons/facebook.svg");
/* harmony import */ var assets_images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/icons/twitter.svg */ "./assets/images/icons/twitter.svg");
/* harmony import */ var assets_images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/icons/instagram.svg */ "./assets/images/icons/instagram.svg");
/* harmony import */ var assets_images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/images/icons/youtube.svg */ "./assets/images/icons/youtube.svg");
/* harmony import */ var assets_images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const payment = [__jsx("img", {
  src: assets_images_payment_1_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "visa_payment",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_payment_2_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "mastercard_payment",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_payment_3_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: "cash_payment",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_payment_4_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  alt: "internetbanking_payment",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
})];
const social = [__jsx("img", {
  src: assets_images_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  alt: "Facebook",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  alt: "Twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  alt: "Instagram",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
}), __jsx("img", {
  src: assets_images_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  alt: "Youtube",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }
})];
const about = ['Giới thiệu', 'Tuyển dụng', 'Blog'];
const agent = ['Đối tác đăng nhập', 'Đối tác liên kết', 'Chương trình dành cho đại lý', 'Hợp tác cùng chúng tôi'];
const term = ['Chính sách bảo mật', 'Điều khoản sử dụng', 'Quyền riêng tư', 'Chính sách Cookie', 'Quy chế hoạt động của Website'];
const guide = ['Hướng dẫn thanh toán trực tuyến', 'Hướng dẫn sử dụng mã giảm giá'];

const Footer = ({
  path
}) => {
  return __jsx(components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: path,
    logo: __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
      withLink: true,
      linkTo: "/",
      src: assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      title: "TripFinder.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }),
    address: `188 Đông Bắc, P. TCH, Q.12`,
    email: `info@tripfinder.vn`,
    phone: `10939 10 7711`,
    license: `Giấy phép kinh doanh số : 0315136043 do sở KH&ĐT cấp ngày 28/06/2018`,
    images: payment.map((item, index) => __jsx("li", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 44
      }
    }, item)),
    about: about.map(item => __jsx("li", {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }
    }, item)),
    agent: agent.map(item => __jsx("li", {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 32
      }
    }, item)),
    term: term.map(item => __jsx("li", {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 30
      }
    }, item)),
    guide: guide.map(item => __jsx("li", {
      key: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 32
      }
    }, item)),
    social: social.map((item, index) => __jsx("li", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 43
      }
    }, item)),
    copyright: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 18
      }
    }, "\xA9 B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 ", __jsx("b", {
      style: {
        color: '#FF8000'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 42
      }
    }, "Trip Finder"), " | Cung c\u1EA5p b\u1EDFi ", __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 105
      }
    }, "Adora Tour")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./container/Layout/Header/Header.js":
/*!*******************************************!*\
  !*** ./container/Layout/Header/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Logo/Logo */ "./components/UI/Logo/Logo.js");
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var context_LayoutProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context/LayoutProvider */ "./context/LayoutProvider.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header.style */ "./container/Layout/Header/Header.style.js");
/* harmony import */ var assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/images/logo-alt.svg */ "./assets/images/logo-alt.svg");
/* harmony import */ var assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












 // dummy images



const LogoIcon = () => __jsx("svg", {
  width: "25",
  height: "27.984",
  viewBox: "0 0 25 27.984",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, __jsx("g", {
  transform: "translate(0 0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M25.45,2.767a34.5,34.5,0,0,0-4,1.143,35.262,35.262,0,0,0-3.771,1.545,26.069,26.069,0,0,0-3.179,1.8,26.068,26.068,0,0,0-3.191-1.8A35.262,35.262,0,0,0,7.54,3.909,34.5,34.5,0,0,0,3.55,2.767L2,2.45V17.94a12.5,12.5,0,1,0,25,0V2.45ZM14.5,10.492c2.339,1.96,3.522,4.19,3.512,6.608a3.512,3.512,0,1,1-7.024,0h0C10.98,14.66,12.162,12.442,14.5,10.492Zm9.913,7.448a9.915,9.915,0,0,1-19.831,0V5.69a31.8,31.8,0,0,1,7.748,3.259,13.43,13.43,0,0,0-2.344,2.737A9.929,9.929,0,0,0,8.4,17.095a6.1,6.1,0,1,0,12.2,0,9.932,9.932,0,0,0-1.587-5.412,13.427,13.427,0,0,0-2.346-2.742,29.737,29.737,0,0,1,5.586-2.577c.819-.284,1.559-.51,2.158-.675Z",
  transform: "translate(-2 -2.45)",
  fill: "#fff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})));

const AuthMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./AuthMenu */ "./container/Layout/Header/AuthMenu.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./AuthMenu */ "./container/Layout/Header/AuthMenu.js")],
    modules: ['./AuthMenu']
  }
});
const MainMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./MainMenu */ "./container/Layout/Header/MainMenu.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./MainMenu */ "./container/Layout/Header/MainMenu.js")],
    modules: ['./MainMenu']
  }
});
const MobileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./MobileMenu */ "./container/Layout/Header/MobileMenu.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./MobileMenu */ "./container/Layout/Header/MobileMenu.js")],
    modules: ['./MobileMenu']
  }
});
const ProfileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./ProfileMenu */ "./container/Layout/Header/ProfileMenu.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./ProfileMenu */ "./container/Layout/Header/ProfileMenu.js")],
    modules: ['./ProfileMenu']
  }
});
const NavbarSearch = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./NavbarSearch */ "./container/Layout/Header/NavbarSearch.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./NavbarSearch */ "./container/Layout/Header/NavbarSearch.js")],
    modules: ['./NavbarSearch']
  }
});

const Header = ({
  router
}) => {
  const {
    loggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_12__["AuthContext"]);
  const {
    0: {
      searchVisibility
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(context_LayoutProvider__WEBPACK_IMPORTED_MODULE_11__["LayoutContext"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const sidebarHandler = () => {
    setState(state => !state);
  };

  const headerType = router.pathname === '/' ? 'transparent' : 'default';
  const AvatarImg = 'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png';
  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: 0,
    innerZ: 1001,
    activeClass: "isHeaderSticky",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    logo: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, headerType === 'transparent' && __jsx(LogoIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 48
      }
    }), __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      withLink: true,
      linkTo: "/",
      src: assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
      title: "TripFinder.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    })),
    navMenu: __jsx(MainMenu, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 20
      }
    }),
    authMenu: __jsx(AuthMenu, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }),
    isLogin: loggedIn,
    avatar: __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: AvatarImg,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }),
    profileMenu: __jsx(ProfileMenu, {
      avatar: __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: AvatarImg,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 45
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 24
      }
    }),
    headerType: headerType,
    searchComponent: __jsx(NavbarSearch, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 28
      }
    }),
    location: router,
    searchVisibility: searchVisibility,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["MobileNavbar"], {
    className: headerType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["LogoArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, headerType === 'transparent' && __jsx(LogoIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 48
    }
  }), __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    withLink: true,
    linkTo: "/",
    src: assets_images_logo_alt_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "TripFinder.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  })), __jsx(NavbarSearch, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: `hamburg-btn ${state ? 'active' : ''}`,
    onClick: sidebarHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
    placement: "right",
    closable: false,
    onClose: sidebarHandler,
    width: "285px",
    className: "mobile-header",
    visible: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["CloseDrawer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: sidebarHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }))), loggedIn ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["AvatarWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["AvatarImage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: AvatarImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["AvatarInfo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
    as: "h3",
    content: "Nova Scotia",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_13__["AGENT_PROFILE_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "View Profile")))) : __jsx(AuthMenu, {
    className: "auth-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }), __jsx(MobileMenu, {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Header));

/***/ }),

/***/ "./container/Layout/Header/Header.style.js":
/*!*************************************************!*\
  !*** ./container/Layout/Header/Header.style.js ***!
  \*************************************************/
/*! exports provided: MobileNavbar, LogoArea, CloseDrawer, AvatarWrapper, AvatarImage, AvatarInfo, NavbarSearchWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavbar", function() { return MobileNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoArea", function() { return LogoArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseDrawer", function() { return CloseDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarWrapper", function() { return AvatarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarImage", function() { return AvatarImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarInfo", function() { return AvatarInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarSearchWrapper", function() { return NavbarSearchWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Headerstyle__HeaderWrapper",
  componentId: "zsc248-0"
})(["width:100%;@media only screen and (max-width:991px){.transparent{.navbar_search{display:none;}}}@media only screen and (max-width:667px){nav{&:not(.transparent){a{> h3{display:none;}}}}}.sticky-outer-wrapper{nav{&.is_transparent{> div > div{> svg{width:20px;position:absolute;}a{img{opacity:0;}h3{color:", ";}}}.ant-menu:not(.active){li{a{&.active{color:", ";}&:hover{color:", ";}}}}}&.transparent{> div > div{> svg{width:20px;position:absolute;}a{img{opacity:0;}h3{color:", ";}}}}}&.isHeaderSticky{nav{&.is_transparent{background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);> div > div{> svg{display:none;}a{img{opacity:1;}h3{color:", ";}}}.ant-menu{li{a{color:", ";&:hover{color:", ";}&.active{color:", ";border-bottom:3px solid ", ";}}}}.auth_menu{.ant-menu{li{&:last-child{a{color:", ";}}}}}}&.transparent{background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);> div > div{> svg{display:none;}a{img{opacity:1;}h3{color:", ";}}}.hamburg-btn{> span{background-color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const MobileNavbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "Headerstyle__MobileNavbar",
  componentId: "zsc248-1"
})(["display:none;padding:0 25px;align-items:center;justify-content:space-between;min-height:82px;width:100%;@media only screen and (max-width:990px){display:flex;}&.default{border-bottom:1px solid ", ";background-color:", ";}.hamburg-btn{border:0;padding:0;width:auto;height:auto;background-color:transparent;> span{display:block;width:20px;height:2px;margin:4px 0;border-radius:5px;background-color:", ";transition:all 0.3s ease;}&:hover,&.active{background-color:transparent;> span{width:23px;background-color:", ";}}&::after{display:none;}}&.transparent{position:fixed;z-index:9999;.hamburg-btn{> span{background-color:", ";}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const LogoArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__LogoArea",
  componentId: "zsc248-2"
})(["display:flex;align-items:center;> a{flex-shrink:0;margin-right:27px;@media only screen and (max-width:480px){margin-right:20px;}img{height:28px;max-width:inherit;}}"]);
const CloseDrawer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__CloseDrawer",
  componentId: "zsc248-3"
})(["display:flex;justify-content:flex-end;padding:20px 15px 12px;> button{border:0;padding:0;background-color:transparent;font-size:38px;line-height:1;height:auto;display:inline-flex;align-items:center;cursor:pointer;color:", ";transition:all 0.3s ease;&:hover,&:focus{outline:0;color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__AvatarWrapper",
  componentId: "zsc248-4"
})(["display:flex;padding:25px 35px;align-items:center;background-color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'));
const AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__AvatarImage",
  componentId: "zsc248-5"
})(["flex-shrink:0;margin-right:15px;img{width:45px;height:45px;overflow:hidden;border-radius:50%;object-fit:cover;}"]);
const AvatarInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__AvatarInfo",
  componentId: "zsc248-6"
})(["h3{color:", ";font-size:15px;line-height:18px;font-weight:700;margin-bottom:5px;}a{color:", ";font-size:13px;line-height:16px;font-weight:400;&:hover,&:focus{text-decoration:none;outline:0;color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const NavbarSearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__NavbarSearchWrapper",
  componentId: "zsc248-7"
})(["display:flex;align-items:center;position:relative;max-width:430px;width:100%;margin-left:30px;@media only screen and (max-width:1200px){max-width:320px;}@media only screen and (max-width:480px){padding-right:15px;box-sizing:border-box;}.map_autocomplete{width:100%;}input{font-size:17px;font-weight:700;padding-left:15px;padding-right:30px;border-radius:4px;color:", ";border:1px solid ", ";background-color:", ";height:50px;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:all 0.3s ease;@media only screen and (max-width:1200px){height:48px;}&::placeholder{color:rgb(72,72,72);}&:hover,&:focus{border-color:", ";}}> svg{position:absolute;z-index:1;top:auto;right:15px;width:20px;height:20px;@media only screen and (max-width:480px){right:25px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (HeaderWrapper);

/***/ }),

/***/ "./container/Layout/Layout.js":
/*!************************************!*\
  !*** ./container/Layout/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/Header */ "./container/Layout/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/Footer */ "./container/Layout/Footer/Footer.js");
/* harmony import */ var context_LayoutProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/LayoutProvider */ "./context/LayoutProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\container\\Layout\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const {
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a;

const Layout = ({
  children,
  router
}) => {
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(context_LayoutProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["LOGIN_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["CHANGE_PASSWORD_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["FORGET_PASSWORD_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_PAGE"] ? __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, children) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, children), router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["LISTING_POSTS_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["PRICING_PLAN_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["ADD_HOTEL_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_PROFILE_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["CHANGE_PASSWORD_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["FORGET_PASSWORD_PAGE"] || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["PRIVACY_PAGE"] || router.pathname === `${settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_ACCOUNT_SETTINGS_PAGE"] + settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_IMAGE_EDIT_PAGE"]}` || router.pathname === `${settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_ACCOUNT_SETTINGS_PAGE"] + settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_PASSWORD_CHANGE_PAGE"]}` || router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["AGENT_ACCOUNT_SETTINGS_PAGE"] ? __jsx("div", {
    style: {
      height: '33px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }) : __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_6__["SINGLE_POST_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Layout));

/***/ }),

/***/ "./context/AuthProvider.js":
/*!*********************************!*\
  !*** ./context/AuthProvider.js ***!
  \*********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\context\\AuthProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const fakeUserData = {
  id: 1,
  name: 'Jhon Doe',
  avatar: 'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  roles: ['USER', 'ADMIN']
};

const AuthProvider = props => {
  const {
    0: loggedIn,
    1: setLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const signIn = params => {
    console.log(params, 'sign in form Props');
    setUser(fakeUserData);
    setLoggedIn(true);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/`);
  };

  const signUp = params => {
    console.log(params, 'sign up form Props');
    setUser(fakeUserData);
    setLoggedIn(true);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/`);
  };

  const logOut = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return __jsx(AuthContext.Provider, {
    value: {
      loggedIn,
      logOut,
      signIn,
      signUp,
      user
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);

/***/ }),

/***/ "./context/LayoutProvider.js":
/*!***********************************!*\
  !*** ./context/LayoutProvider.js ***!
  \***********************************/
/*! exports provided: LayoutContext, default, useStateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContext", function() { return LayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\context\\LayoutProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const LayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const initialState = {
  searchVisibility: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_TOP_SEARCHBAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchVisibility: true
      });

    case 'HIDE_TOP_SEARCHBAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchVisibility: false
      });

    default:
      return state;
  }
}

function LayoutProvider({
  children
}) {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(LayoutContext.Provider, {
    value: [state, dispatch],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, children);
}
const useStateValue = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LayoutContext);

/***/ }),

/***/ "./context/SearchProvider.js":
/*!***********************************!*\
  !*** ./context/SearchProvider.js ***!
  \***********************************/
/*! exports provided: SearchContext, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\context\\SearchProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, query);
  return __jsx(SearchContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "../../node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "../../node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "../../node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_date_picker_style_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/date-picker/style/index.css */ "../../node_modules/antd/lib/date-picker/style/index.css");
/* harmony import */ var antd_lib_date_picker_style_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_default_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/default.theme */ "./themes/default.theme.js");
/* harmony import */ var assets_style_Global_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/style/Global.style */ "./assets/style/Global.style.js");
/* harmony import */ var container_Layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! container/Layout/Layout */ "./container/Layout/Layout.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "../../node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TripFinder\\packages\\hotel-next\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














function App({
  Component,
  router,
  pageProps
}) {
  const {
    query
  } = router;
  return __jsx(context_AuthProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(context_SearchProvider__WEBPACK_IMPORTED_MODULE_11__["SearchProvider"], {
    query: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: themes_default_theme__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(container_Layout_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(assets_style_Global_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./settings/constant.js":
/*!******************************!*\
  !*** ./settings/constant.js ***!
  \******************************/
/*! exports provided: HOME_PAGE, AGENTS_PAGE, TRAVEL_PAGE, SIM_WIFI_PAGE, SHOP_PAGE, VISA_PAGE, BLOG_PAGE, CHECK_VISA, LISTING_POSTS_PAGE, SINGLE_POST_PAGE, FLIGHT_SEARCH_PAGE, AGENT_PROFILE_PAGE, AGENT_ACCOUNT_SETTINGS_PAGE, AGENT_PROFILE_EDIT_PAGE, AGENT_IMAGE_EDIT_PAGE, AGENT_PASSWORD_CHANGE_PAGE, AGENT_PROFILE_DELETE, AGENT_PROFILE_FAVOURITE, AGENT_PROFILE_CONTACT, ADD_HOTEL_PAGE, PRICING_PLAN_PAGE, PRIVACY_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, CHANGE_PASSWORD_PAGE, FORGET_PASSWORD_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENTS_PAGE", function() { return AGENTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVEL_PAGE", function() { return TRAVEL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIM_WIFI_PAGE", function() { return SIM_WIFI_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_PAGE", function() { return SHOP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISA_PAGE", function() { return VISA_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_PAGE", function() { return BLOG_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_VISA", function() { return CHECK_VISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_POSTS_PAGE", function() { return LISTING_POSTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_POST_PAGE", function() { return SINGLE_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_SEARCH_PAGE", function() { return FLIGHT_SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_PAGE", function() { return AGENT_PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_ACCOUNT_SETTINGS_PAGE", function() { return AGENT_ACCOUNT_SETTINGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_EDIT_PAGE", function() { return AGENT_PROFILE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_IMAGE_EDIT_PAGE", function() { return AGENT_IMAGE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PASSWORD_CHANGE_PAGE", function() { return AGENT_PASSWORD_CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_DELETE", function() { return AGENT_PROFILE_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_FAVOURITE", function() { return AGENT_PROFILE_FAVOURITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_CONTACT", function() { return AGENT_PROFILE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HOTEL_PAGE", function() { return ADD_HOTEL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICING_PLAN_PAGE", function() { return PRICING_PLAN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVACY_PAGE", function() { return PRIVACY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_PAGE", function() { return REGISTRATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_PAGE", function() { return CHANGE_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD_PAGE", function() { return FORGET_PASSWORD_PAGE; });
// General Page Section
const HOME_PAGE = '/';
const AGENTS_PAGE = '/agents';
const TRAVEL_PAGE = '/travel';
const SIM_WIFI_PAGE = '/sim-wifi';
const SHOP_PAGE = '/shop';
const VISA_PAGE = '/visa';
const BLOG_PAGE = '/blog';
const CHECK_VISA = '/check-visa'; // Listing Single Page Section

const LISTING_POSTS_PAGE = '/listing';
const SINGLE_POST_PAGE = '/post'; // Flight Page Section

const FLIGHT_SEARCH_PAGE = '/flight-result'; // Agent Profile Page Section

const AGENT_PROFILE_PAGE = '/profile';
const AGENT_ACCOUNT_SETTINGS_PAGE = '/account-settings';
const AGENT_PROFILE_EDIT_PAGE = '/edit';
const AGENT_IMAGE_EDIT_PAGE = '/change-image';
const AGENT_PASSWORD_CHANGE_PAGE = '/change-password';
const AGENT_PROFILE_DELETE = '/delete';
const AGENT_PROFILE_FAVOURITE = '/favourite-post';
const AGENT_PROFILE_CONTACT = '/contact';
const ADD_HOTEL_PAGE = '/add-hotel'; // Other Pages

const PRICING_PLAN_PAGE = '/pricing-plan';
const PRIVACY_PAGE = '/privacy'; // Login / Registation Page

const LOGIN_PAGE = '/sign-in';
const REGISTRATION_PAGE = '/sign-up';
const CHANGE_PASSWORD_PAGE = '/change-password';
const FORGET_PASSWORD_PAGE = '/forget-password';

/***/ }),

/***/ "./themes/default.theme.js":
/*!*********************************!*\
  !*** ./themes/default.theme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultTheme = {
  breakpoints: ['481px', '768px', '992px', '1201px', '1441px'],
  primary: ['#008489', // 0: Default
  '#399C9F' // 1: Chart
  ],
  color: ['#000000', // 0: Black
  '#ffffff', // 1: White
  '#F7F7F7', // 2: Dropdown Hover
  '#E9E8E8', // 3: Bullet bg
  '#FC5C63', // 4: Active Favorite
  'rgba(0, 0, 0, 0.25)', // 5: Inactive Favorite
  '#273343', // 6: Agent Social Icon
  '#3b5998', // 7: Facebook
  '#55ADEE', // 8: Twitter
  '#FFF900', // 9: Snapchat
  '#dd4b39', // 10: Google Plus
  '#F61C0D', // 11: Youtube
  '#e4405f', // 12: Instagram
  '#E2E2E2', // 13: Range Color
  '#00ACEE', // 14: Github Color
  '#FFCB2B', // 15: Firebase Color
  '#484848' // 16: Link button
  ],
  warning: ['#F29100' // 0: Warning
  ],
  success: ['#00BB5D' // 0: Success
  ],
  error: ['#F9503D', // 0: Error
  'rgba(249, 80, 61, 0.08)' // 0: Error Light Bg
  ],
  text: ['#2C2C2C', // 0: Heading
  '#909090', // 1: Meta Text
  '#777777' // 2: Text Info
  ],
  border: ['#EBEBEB', // 0: Light border
  '#E8E8E8', // 1: Default Border
  'rgba(57, 151, 247, 0.35)', // 2: Active Light Border
  '#E6E6E6' // 3: Pricing Border
  ],
  boxShadow: ['rgba(26, 68, 116, 0.16)', // 0: Card hover
  'rgba(0, 0, 0, 0.16)' // 1: Carousel Button shadow
  ],
  fonts: {
    primary: 'Roboto, sans-serif'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "antd/lib/back-top":
/*!************************************!*\
  !*** external "antd/lib/back-top" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-maps/lib/components/places/StandaloneSearchBox":
/*!******************************************************************************!*\
  !*** external "react-google-maps/lib/components/places/StandaloneSearchBox" ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wL1RyaXBGaW5kZXIvbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9UcmlwRmluZGVyL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvVHJpcEZpbmRlci9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ZhY2Vib29rLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9pY29ucy90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ljb25zL3lvdXR1YmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbG9nby1hbHQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvcGF5bWVudF8xLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3BheW1lbnRfMi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9wYXltZW50XzMuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvcGF5bWVudF80LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUvR2xvYmFsLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2dvL0xvZ28uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9UZXh0L1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0xheW91dC9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MYXlvdXQvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9IZWFkZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9MYXlvdXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3MvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2RlZmF1bHQudGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvYmFjay10b3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9tZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvcm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY29tcG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lR2V0IiwiRm9vdGVyIiwibG9nbyIsIm1lbnUiLCJjb3B5cmlnaHQiLCJjbGFzc05hbWUiLCJhZGRyZXNzIiwiZW1haWwiLCJwaG9uZSIsImxpY2Vuc2UiLCJpbWFnZXMiLCJndWlkZSIsImFib3V0IiwiYWdlbnQiLCJ0ZXJtIiwic29jaWFsIiwieHMiLCJzbSIsIm1kIiwibGciLCJzcGFuIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsInN0cmluZyIsImVsZW1lbnQiLCJiZ1NyYyIsIm9uZU9mVHlwZSIsIkZvb3RlcldyYXBwZXIiLCJzdHlsZWQiLCJmb290ZXIiLCJTdWJjcmliZUFyZWEiLCJkaXYiLCJNYWluRm9vdGVyQXJlYSIsIlNvY2lhbEFyZWEiLCJMb2dvV3JhcHBlciIsIkNvbnRhaW5lciIsIlJvd0FyZWEiLCJHcmF5Rm9vdGVyIiwiTm90R2F5Rm9vdGVyIiwiRm9vdGVyUGF5bWVudCIsIk1lbnVXcmFwcGVyIiwiQ29weXJpZ2h0QXJlYSIsIlNlY29uZGFyeUZvb3RlciIsIk5hdmJhciIsImF2YXRhciIsIm5hdk1lbnUiLCJhdXRoTWVudSIsInByb2ZpbGVNZW51IiwiaXNMb2dpbiIsImhlYWRlclR5cGUiLCJzZWFyY2hDb21wb25lbnQiLCJsb2NhdGlvbiIsInNlYXJjaFZpc2liaWxpdHkiLCJhZGRBbGxDbGFzc2VzIiwiam9pbiIsImJvb2wiLCJvbmVPZiIsIk5hdmJhcldyYXBwZXIiLCJuYXYiLCJMb2dvQXJlYSIsIk1lbnVBcmVhIiwiQXZhdGFyV3JhcHBlciIsIkF1dGhXcmFwcGVyIiwidGhlbWVkIiwidGhlbWUiLCJiYXNlIiwiY29tcG9zZSIsImJveFNpemluZyIsInNwYWNlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmbGV4Iiwib3JkZXIiLCJhbGlnblNlbGYiLCJib3JkZXJzIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwiTG9nb05leHQiLCJ3aXRoTGluayIsImxpbmtUbyIsInRpdGxlIiwic3JjIiwiVGV4dFdyYXBwZXIiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiVGV4dCIsImNvbnRlbnQiLCJudW1iZXIiLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIiwicGF5bWVudCIsIlZpc2FQYXltZW50IiwiTWFzdGVyQ2FyZFBheW1lbnQiLCJDYXNoUGF5bWVudCIsIkludGVybmV0QmFua2luZ1BheW1lbnQiLCJGYWNlYm9va0ljb24iLCJUd2l0dGVySWNvbiIsIkluc3RhZ3JhbUljb24iLCJZb3V0dWJlSWNvbiIsIkxvZ29JbWFnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkxvZ29JY29uIiwiQXV0aE1lbnUiLCJkeW5hbWljIiwiTWFpbk1lbnUiLCJNb2JpbGVNZW51IiwiUHJvZmlsZU1lbnUiLCJOYXZiYXJTZWFyY2giLCJIZWFkZXIiLCJsb2dnZWRJbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkxheW91dENvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJzaWRlYmFySGFuZGxlciIsIkF2YXRhckltZyIsInRyaXBGaW5kZXIiLCJBR0VOVF9QUk9GSUxFX1BBR0UiLCJ3aXRoUm91dGVyIiwiSGVhZGVyV3JhcHBlciIsImhlYWRlciIsIk1vYmlsZU5hdmJhciIsIkNsb3NlRHJhd2VyIiwiQXZhdGFySW1hZ2UiLCJBdmF0YXJJbmZvIiwiTmF2YmFyU2VhcmNoV3JhcHBlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJMT0dJTl9QQUdFIiwiQ0hBTkdFX1BBU1NXT1JEX1BBR0UiLCJGT1JHRVRfUEFTU1dPUkRfUEFHRSIsIlJFR0lTVFJBVElPTl9QQUdFIiwiTElTVElOR19QT1NUU19QQUdFIiwiUFJJQ0lOR19QTEFOX1BBR0UiLCJBRERfSE9URUxfUEFHRSIsIlBSSVZBQ1lfUEFHRSIsIkFHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSIsIkFHRU5UX0lNQUdFX0VESVRfUEFHRSIsIkFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFIiwiU0lOR0xFX1BPU1RfUEFHRSIsImNyZWF0ZUNvbnRleHQiLCJmYWtlVXNlckRhdGEiLCJpZCIsInJvbGVzIiwiQXV0aFByb3ZpZGVyIiwic2V0TG9nZ2VkSW4iLCJ1c2VyIiwic2V0VXNlciIsInNpZ25JbiIsImxvZyIsInNpZ25VcCIsImxvZ091dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGF5b3V0UHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZVZhbHVlIiwiU2VhcmNoQ29udGV4dCIsInBheWxvYWQiLCJTZWFyY2hQcm92aWRlciIsIkhPTUVfUEFHRSIsIkFHRU5UU19QQUdFIiwiVFJBVkVMX1BBR0UiLCJTSU1fV0lGSV9QQUdFIiwiU0hPUF9QQUdFIiwiVklTQV9QQUdFIiwiQkxPR19QQUdFIiwiQ0hFQ0tfVklTQSIsIkZMSUdIVF9TRUFSQ0hfUEFHRSIsIkFHRU5UX1BST0ZJTEVfRURJVF9QQUdFIiwiQUdFTlRfUFJPRklMRV9ERUxFVEUiLCJBR0VOVF9QUk9GSUxFX0ZBVk9VUklURSIsIkFHRU5UX1BST0ZJTEVfQ09OVEFDVCIsImRlZmF1bHRUaGVtZSIsImJyZWFrcG9pbnRzIiwicHJpbWFyeSIsIndhcm5pbmciLCJ0ZXh0IiwiYm9yZGVyIiwiYm94U2hhZG93IiwiZm9udHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EseUNBQXlDO1FBQ3pDO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtRQUNKOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBOztBQUNBOztB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Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInN0YXRpY1xcXFxkZXZlbG9wbWVudFxcXFxwYWdlc1xcXFxfYXBwLmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdOVEV5SURVeE1pSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ05URXlJRFV4TWpzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpFNU56WkVNanNpSUdROUlrMDBORGdzTUVnMk5FTXlPQzQzTURRc01Dd3dMREk0TGpjd05Dd3dMRFkwZGpNNE5HTXdMRE0xTGpJNU5pd3lPQzQzTURRc05qUXNOalFzTmpSb016ZzBZek0xTGpJNU5pd3dMRFkwTFRJNExqY3dOQ3cyTkMwMk5GWTJOQTBLQ1VNMU1USXNNamd1TnpBMExEUTRNeTR5T1RZc01DdzBORGdzTUhvaUx6NE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HUVVaQlJrRTdJaUJrUFNKTk5ETXlMREkxTm1ndE9EQjJMVFkwWXpBdE1UY3VOalkwTERFMExqTXpOaTB4Tml3ek1pMHhObWd6TWxZNU5tZ3ROalJzTUN3d1l5MDFNeTR3TWpRc01DMDVOaXcwTWk0NU56WXRPVFlzT1RaMk5qUm9MVFkwZGpnd2FEWTBEUW9KZGpFM05tZzVObFl6TXpab05EaE1ORE15TERJMU5ub2lMejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS0xNWJjNTQ3MGFlYTZkMmQwNTIwMGRmZjQ1YzE0ZTkyYi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCb1pXbG5hSFE5SWpVeE1uQjBJaUIyYVdWM1FtOTRQU0l3SURBZ05URXlJRFV4TWk0d01EQXpPQ0lnZDJsa2RHZzlJalV4TW5CMElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltRWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNE1UMGlNVFk1TGprNU5EQXdNVEE0TXpRaUlIZ3lQU0l5T1RrdU5Ea3pOREV6TlRrd05DSWdlVEU5SWpjeExqazROakl5TnpBeElpQjVNajBpTXpRNUxqQTFORGcwTkRnNE5qUWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DSWdjM1J2Y0MxamIyeHZjajBpSXpBd1l6Tm1aaUl2UGp4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUl6QXdZakJsWkNJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmlJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlNd01HSXdaV1FpSUhOMGIzQXRiM0JoWTJsMGVUMGlNQ0l2UGp4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUl6QXdZVEpqWlNJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmpJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJak0yTkM0eU9ESTFNak0zT0RJMElpQjRNajBpTFRNM09TNDFPRFkwTXpJM01URTBJaUI0YkdsdWF6cG9jbVZtUFNJallpSWdlVEU5SWpNeE5DNHdPRFk0TXpZeE16VTJJaUI1TWowaUxUZzBMamsxTWpFNE1EZ3hOallpTHo0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltUWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNE1UMGlNalUyTGpBd01ETWlJSGd5UFNJeU5UWXVNREF3TXlJZ2VHeHBibXM2YUhKbFpqMGlJMklpSUhreFBTSTBNemN1TXpnek1qRTFNemc1SWlCNU1qMGlOVEEwTGpRM01qQXdPVGN3TmpRaUx6NDhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbVVpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjRNVDBpTkRnNUxqUXlNRGs1T1RVeE16WWlJSGd5UFNJeU16a3VNamt6TnpNeU9ESXhOQ0lnZUd4cGJtczZhSEpsWmowaUkySWlJSGt4UFNJME9ESXVNRGN5TkRBeE5qVXdNaUlnZVRJOUlqSXpNUzQ1TkRVeE16UTVOVGdpTHo0OGNHRjBhQ0JrUFNKdE5ESXdMalF5TVRnM05TQTFNRE11TWpNME16YzFZeTB4TURrdU5UQXpPVEEySURFeExqWTROelV0TWpFNUxqTXpPVGcwTkNBeE1TNDJPRGMxTFRNeU9DNDRORE0zTlNBd0xUUXpMalkyTkRBMk15MDBMalkyTURFMU5pMDNPQzR4TlRJek5EUXRNemt1TVRRNE5ETTNMVGd5TGpneE1qVXRPREl1T0RFMk5EQTJMVEV4TGpZNE56VXRNVEE1TGpVd016a3dOeTB4TVM0Mk9EYzFMVEl4T1M0ek16VTVNemdnTUMwek1qZ3VPRE01T0RRMElEUXVOall3TVRVMkxUUXpMalkyTkRBMk15QXpPUzR4TkRnME16Y3ROemd1TVRVeU16UTBJRGd5TGpneE1qVXRPREl1T0RFeU5TQXhNRGt1TlRBek9UQTJMVEV4TGpZNE56VWdNakU1TGpNek5Ua3pOeTB4TVM0Mk9EYzFJRE15T0M0NE16azRORFFnTUNBME15NDJOamM1TmprZ05DNDJOakF4TlRZZ056Z3VNVFUyTWpVZ016a3VNVFE0TkRNM0lEZ3lMamd4TmpRd05pQTRNaTQ0TVRJMUlERXhMalk0TnpVZ01UQTVMalV3TXprd05pQXhNUzQyT0RjMUlESXhPUzR6TXpVNU16Y2dNQ0F6TWpndU9ETTVPRFEwTFRRdU5qWXdNVFUySURRekxqWTJOemsyT1Mwek9TNHhORFExTXpFZ056Z3VNVFUyTWpVdE9ESXVPREV5TlNBNE1pNDRNVFkwTURaNmJUQWdNQ0lnWm1sc2JEMGlkWEpzS0NOaEtTSXZQanh3WVhSb0lHUTlJbTAwTnpVdU16ZzJOekU1SURFeE1DNHdPVGMyTlRaakxUUXVNVE15T0RFekxUTTRMamMwTmpBNU5DMHpOQzQzTXpRek56VXROamt1TXpVeE5UWXlMVGN6TGpRNE5ETTNOUzAzTXk0ME9EZ3lPREV0T1RjdU1UY3hPRGMxTFRFd0xqTTJOekU0TnkweE9UUXVOak15T0RFekxURXdMak0yTnpFNE55MHlPVEV1T0RBME5qZzRJREF0TXpndU56UTJNRGswSURRdU1UTTJOekU1TFRZNUxqTTFNVFUyTWlBek5DNDNOREl4T0RjdE56TXVORGc0TWpneElEY3pMalE0T0RJNE1TMHhNQzR6TmpjeE9EY2dPVGN1TVRjeE9EYzFMVEV3TGpNMk56RTROeUF4T1RRdU5qTXlPREV6SURBZ01qa3hMamd3TURjNE1pQTBMakV6TmpjeE9TQXpPQzQzTlNBek5DNDNOREl4T0RjZ05qa3VNelUxTkRZNElEY3pMalE0T0RJNE1TQTNNeTQwT0RneU9ERWdPVGN1TVRjeE9EYzFJREV3TGpNM01UQTVNeUF4T1RRdU5qTXlPREV6SURFd0xqTTNNVEE1TXlBeU9URXVPREF3TnpneUlEQWdNemd1TnpVdE5DNHhNekk0TVRNZ05qa3VNelUxTkRZNExUTTBMamN6T0RJNE1TQTNNeTQwT0RneU9ERXROek11TkRnNE1qZ3hJREV3TGpNM01UQTVNeTA1Tnk0eE5qYzVOamtnTVRBdU16Y3hNRGt6TFRFNU5DNDJNamc1TURjZ01DMHlPVEV1T0RBd056Z3llbTB3SURBaUlHWnBiR3c5SW5WeWJDZ2pZeWtpTHo0OGNHRjBhQ0JrUFNKdE55NDJOekU0TnpVZ05EQTVMamd3TkRZNE9HTXVNelV4TlRZeklETXVOVE01TURZeUxqY3hORGcwTkNBM0xqQTNPREV5TkNBeExqQTVNemMxSURFd0xqWXhOekU0TnlBMExqWTJNREUxTmlBME15NDJOalF3TmpNZ016a3VNVFE0TkRNM0lEYzRMakUxTWpNME5DQTRNaTQ0TVRZME1EWWdPREl1T0RFeU5TQXhNRGt1TlRBek9UQTNJREV4TGpZNE56VWdNakU1TGpNek5Ua3pPQ0F4TVM0Mk9EYzFJRE15T0M0NE16azRORFFnTUNBME15NDJOamM1TmprdE5DNDJOakF4TlRZZ056Z3VNVFV5TXpRMExUTTVMakUwT0RRek55QTRNaTQ0TVRJMUxUZ3lMamd4TWpVdU16YzRPVEEyTFRNdU5UTTVNRFl6TGpjME1qRTROeTAzTGpBM09ERXlOU0F4TGpBNU56WTFOaTB4TUM0Mk1UY3hPRGQ2YlRBZ01DSWdabWxzYkQwaWRYSnNLQ05rS1NJdlBqeHdZWFJvSUdROUltMDFNVEV1T0Rrd05qSTFJREl6T0M0d01EYzRNVEl0TVRBMkxqSTNOek0wTkMweE1EWXVNamN6TkRNM1l5MHhNUzQ1TVRBeE5UWWdOaTQ0TURnMU9UUXRNakl1TkRBMk1qVWdNVEF1TlRnMU9UTTNMVE13TGpNeE1qVWdNVEl1TmpjNU5qZzNMVFF1TkRRMU16RXlJREV1TVRreE5EQTNMVGd1TURjME1qRTVJREV1T0RNNU9EUTBMVEV3TGpZNE16VTVNeUF5TGpFNU5UTXhNeTB4TVM0NU9EUXpOell0TVRJdU1qZzFNVFUyTFRJNExqY3hPRGMxTFRFNUxqa3hOREEyTXkwME55NHlOREl4T0RndE1Ua3VPVEUwTURZekxUTTJMalEwTlRNeE1pQXdMVFkxTGprNU5qQTVOQ0F5T1M0MU5EWTROell0TmpVdU9UazJNRGswSURZMklEQWdNUzR6TVRZME1EY3VNRE0xTVRVMklESXVOakUzTVRnNExqRXlNVEE1TkNBekxqa3hOREEyTXk0eE56VTNPREVnTXk0eE5qQXhOVFl1TlRjNE1USTFJRFl1TWpZMU5qSTFJREV1TVRrNU1qRTVJRGt1TWpnMU1UVTJMVEUxTGpJeE5EZzBOQzB1TWpJMk5UWXlMVFkwTGpZMk56azJPUzAwTGpJNE9UQTJNaTB4TVRFdU9ETXlNRE14TFRRMExqY3hPRGMxTFM0d01ETTVNRGNnTUMwdU1EQXpPVEEzTFM0d01ETTVNRFl0TGpBd016a3dOeTB1TURBek9UQTJhQzB1TURBek9UQTJiQzB5TWk0eU5ESXhPRGN0TWpJdU1qUTJNRGswY3kweU5pNHdPVE0zTlNBME5TNDFOREk1TmprZ01USXVNalk1TlRNeElEZ3dMakV3TVRVMk0yTXhMalk0TXpVNU15QXhMamczT0Rrd05pQXpMalV6TlRFMU5pQXpMamN6TkRNM05TQTFMalUyTWpVZ05TNDFOVGcxT1RRdU1UWXdNVFUyTGpFM09UWTROeTR6TWpneE1qVXVNelUxTkRZNExqUTRPREk0TVM0MU16VXhOVFl0TlM0d016VXhOVFl0TGpNek9UZzBOQzB5TUM0eE56azJPRGd0TVM0NE5EYzJOVFl0TWpndU9UUTFNekV5TFRndU1ETTVNRFl6SURBZ01DMHhMamMyTVRjeE9TQXlOeTQ0TXpVNU16Z2dNakV1TkRJNU5qZzNJRFE0TGpNeU9ERXlOV3d4T0M0M01qWTFOak1nTVRndU9EZzJOekU1WXkwMUxqY3dNekV5Tmk0ME56STJOVFl0TVRJdU1ERXhOekU1TGpNMU9UTTNOUzB4Tmk0ek9UZzBNemd0TVM0MU5qSTFJREFnTUNBekxqZzRNamd4TWlBeE5pNDBPRGd5T0RFZ01UZ3VPRGt3TmpJMUlESTVMalk0TXpVNU5Hd3lOaTR5TXpRek56VWdNall1TXpjeE1Ea3pZeTB4TlM0M016Z3lPREVnT1M0eE5qYzVOamt0TkRNdU1qZzVNRFl5SURJd0xqWTBNRFl5TmkwM09TNDFOVFEyT0RnZ01UY3VOekV3T1RNNGJERTFPUzR4TkRRMU16SWdNVFUxTGpWak5UUXVOamM1TmpnM0xTNHdNVFUyTWpVZ01UQTVMak0xT1RNM05TMHlMamt6TnpVZ01UWXpMamsxTnpBek1TMDRMamMyTlRZeU5TQTBNeTQyTmpjNU5qa3ROQzQyTmpBeE5UWWdOemd1TVRVMk1qVXRNemt1TVRRNE5ETTNJRGd5TGpneE5qUXdOaTA0TWk0NE1USTFJRFl1TkRnd05EWTVMVFl3TGpjME1qRTROeUE1TGpNMU9UTTNOUzB4TWpFdU5UZzFPVE0zSURndU5qVXlNelEwTFRFNE1pNDBNVFF3TmpONmJUQWdNQ0lnWm1sc2JEMGlkWEpzS0NObEtTSXZQanh3WVhSb0lHUTlJbTAwTVRRdU5qZ3pOVGswSURFMU55NHpOamN4T0RoakxURXhMak15T0RFeU5TQTFMamt5TlRjNE1TMHlPQzR6T1RBMk1qVWdPQzQyTmpRd05qSXRNelF1TURRMk9EYzFJRGt1TkRVek1USTBMUzR3TkRZNE56VXRMakkzTXpRek55MHVNRGt6TnpVdExqVXpOVEUxTmkwdU1UUXdOakkxTFM0M09UWTROelFnTVRrdU1qTXdORFk0TFRFeExqZzVORFV6TWlBeU5TNHhNVGN4T0RjdE16UXVNamc1TURZeklESTFMakV4TnpFNE55MHpOQzR5T0Rrd05qTXRNVEV1T1RFd01UVTJJRFl1T0RBNE5UazBMVEl5TGpRd05qSTFJREV3TGpVNE5Ua3pOeTB6TUM0ek1USTFJREV5TGpZM09UWTROeTAwTGpRME5UTXhNaUF4TGpFNU1UUXdOeTA0TGpBM05ESXhPU0F4TGpnek5Ua3pPQzB4TUM0Mk9ETTFPVE1nTWk0eE9UVXpNVE10TVRFdU9UZzBNemMyTFRFeUxqSTRPVEEyTXkweU9DNDNNVGczTlMweE9TNDVNVFF3TmpNdE5EY3VNalF5TVRnNExURTVMamt4TkRBMk15MHpOaTQwTkRVek1USWdNQzAyTlM0NU9UWXdPVFFnTWprdU5UUXlPVFk1TFRZMUxqazVOakE1TkNBMk5pQXdJREV1TXpFeU5TNHdNelV4TlRZZ01pNDJNVGN4T0RndU1USXhNRGswSURNdU9URXdNVFUzTGpFM05UYzRNU0F6TGpFMk1ERTFOaTQxTnpneE1qVWdOaTR5TmpVMk1qVWdNUzR4T1RreU1Ua2dPUzR5T0RVeE5UWXRNVGN1TmpRd05qSTFMUzR5TmpFM01Ua3RPREV1TXpFMk5EQTNMVFV1TmpjeE9EYzFMVEV6TkM0d09ESXdNekV0TmpZdU9UWTBPRFEwSURBZ01DMHlPUzR6T0RJNE1UTWdOVEV1TWpZMU5qSTFJREl3TGpBeE5UWXlOQ0E0Tmk0eU9EVXhOVGNnTUNBd0xUSXdMakF4TlRZeU5DMHVOakkxTFRNd0xqWTBNRFl5TkMwNExqRXlPRGt3TnlBd0lEQXRNeTR4TWpVZ05Ea3VNems0TkRNNElEVXpMamMyT1RVek1TQTJOUzR3TWpNME16Z2dNQ0F3TFRJd0xqQXdNemt3TnlBMUxqQXdOemd4TWkwek1DNHdNVFUyTWpVdU5qSTRPVEEySURBZ01DQXhNQzR3TURjNE1USWdOREl1TlRFMU5qSTFJRFl3TGpBeU56TTBOQ0EwTlM0Mk5EZzBNemNnTUNBd0xUTTFMamczTlNBek1pNDRORE0zTlMwNU5DNDBOVGN3TXpJZ01qZ3VNVEUzTVRnNElESTRMamd4TWpVZ01UZ3VNalF5TVRnNElEWXlMamszTWpZMU5pQXlPQzQ0TURBM09ERWdPVGt1TlRrM05qVTJJREk0TGpnd01EYzRNU0F4TURJdU9UZ3dORFk1SURBZ01UZzJMalEyTkRnME5DMDRNeTQwT0RBME5qa2dNVGcyTGpRMk5EZzBOQzB4T0RZdU5EWXdPVE0zSURBdE1TNHlPRFV4TlRZdExqQXhNVGN4T0MweUxqVTNNRE14TXkwdU1ETTVNRFl5TFRNdU9EVTFORFk1TGpBeU56TTBOQzB1TnpZeE56RTVMakF6T1RBMk1pMHhMalV4T1RVek1TNHdNemt3TmpJdE1pNHlPRGt3TmpNZ01DMHVOVE0xTVRVMkxTNHdNVEUzTVRndE1TNHdOekF6TVRJdExqQXhPVFV6TVMweExqWXdOVFEyT0NBeE9TNHdNemt3TmpNdE1USXVOamczTlNBek1TNHpNalF5TVRrdE16TXVOekl5TmpVMklETXhMak15TkRJeE9TMHpNeTQzTWpJMk5UWjZiVEFnTUNJZ1ptbHNiRDBpSTJabVppSXZQand2YzNablBnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJvWldsbmFIUTlJalV4TW5CMElpQjJhV1YzUW05NFBTSXdJREFnTlRFeUlEVXhNaUlnZDJsa2RHZzlJalV4TW5CMElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBqeHdZWFJvSUdROUltMDFNVElnTXpBdU9UQTJNalYyTkRVd0xqRTROelZqTUNBeE55NHdOekF6TVRJdE1UTXVPRE0xT1RNNElETXdMamt3TmpJMUxUTXdMamt3TmpJMUlETXdMamt3TmpJMWFDMDBOVEF1TVRnM05XTXRNVGN1TURjd016RXlJREF0TXpBdU9UQTJNalV0TVRNdU9ETTFPVE00TFRNd0xqa3dOakkxTFRNd0xqa3dOakkxZGkwME5UQXVNVGczTldNd0xURTNMakEzTURNeE1pQXhNeTQ0TXpVNU16Z3RNekF1T1RBMk1qVWdNekF1T1RBMk1qVXRNekF1T1RBMk1qVm9ORFV3TGpFNE56VmpNVGN1TURjd016RXlJREFnTXpBdU9UQTJNalVnTVRNdU9ETTFPVE00SURNd0xqa3dOakkxSURNd0xqa3dOakkxZW0wd0lEQWlJR1pwYkd3OUlpTm1OelU0TWpBaUx6NDhjR0YwYUNCa1BTSnROalF1TWpJeU5qVTJJRFV4TW1ndE16TXVNekUyTkRBMll5MHhOeTR3TnpBek1USWdNQzB6TUM0NU1EWXlOUzB4TXk0NE16VTVNemd0TXpBdU9UQTJNalV0TXpBdU9UQTJNalYyTFRRMU1DNHhPRGMxWXpBdE1UY3VNRGN3TXpFeUlERXpMamd6TlRrek9DMHpNQzQ1TURZeU5TQXpNQzQ1TURZeU5TMHpNQzQ1TURZeU5XZ3pNeTR6TVRZME1EWmpMVEUzTGpBM01ETXhNaUF3TFRNd0xqa3dOakkxSURFekxqZ3pOVGt6T0Mwek1DNDVNRFl5TlNBek1DNDVNRFl5TlhZME5UQXVNVGczTldNd0lERTNMakEzTURNeE1pQXhNeTQ0TXpVNU16Z2dNekF1T1RBMk1qVWdNekF1T1RBMk1qVWdNekF1T1RBMk1qVjZiVEFnTUNJZ1ptbHNiRDBpSTJZNE9ESXlOQ0l2UGp4d1lYUm9JR1E5SW0wMU1USWdNekF1T1RBMk1qVjJORFV3TGpFNE56VmpNQ0F4Tnk0d056QXpNVEl0TVRNdU9ETTFPVE00SURNd0xqa3dOakkxTFRNd0xqa3dOakkxSURNd0xqa3dOakkxYUMweE9Ua3VNRE14TWpWak1UVXlMalU0TWpBek1TMHhOelV1TnpnNU1EWXlJREUyT1M0NU5qZzNOUzAwTWpBdU9Ua3lNVGc0SURFM01DNDRNalF5TVRrdE5URXlhREk0TGpJd056QXpNV014Tnk0d056QXpNVElnTUNBek1DNDVNRFl5TlNBeE15NDRNelU1TXpnZ016QXVPVEEyTWpVZ016QXVPVEEyTWpWNmJUQWdNQ0lnWm1sc2JEMGlJMlk1TXpJeE1pSXZQanh3WVhSb0lHUTlJbTB4TXpjdU5qSTFJREUwTmk0ek1EZzFPVFIyTWpFNUxqTTRNamd4TW1Nd0lEY3VNRFU0TlRrMElEY3VORFF4TkRBMklERXhMalkwTkRVek1pQXhNeTQzTkRZd09UUWdPQzQwTmpRNE5EUnNNakUzTGpjNE9UQTJNaTB4TURrdU5qZzNOV00yTGprMU16RXlOUzB6TGpVd016a3dOaUEyTGprMU16RXlOUzB4TXk0ME16TTFPVFFnTUMweE5pNDVNemMxYkMweU1UY3VOemc1TURZeUxURXdPUzQyT0RjMVl5MDJMak13TkRZNE9DMHpMakUzTlRjNE1TMHhNeTQzTkRZd09UUWdNUzQwTURZeU5TMHhNeTQzTkRZd09UUWdPQzQwTmpRNE5EUjZiVEFnTUNJZ1ptbHNiRDBpSTJSbFpXWm1aaUl2UGp3dmMzWm5QZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF5TkM0eExqSXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5Danh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhacFpYZENiM2c5SWpBZ01DQXlOU0F5TlNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWpVZ01qVTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrRFFvSkxuTjBNSHRtYVd4c09tNXZibVU3YzNSeWIydGxPaU5HT1RnMU1EWTdjM1J5YjJ0bExYZHBaSFJvT2pJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdmUTBLQ1M1emRERjdabWxzYkRvalJqazNSakEyTzNOMGNtOXJaVG9qUmprNE5UQTJPM04wY205clpTMTNhV1IwYURvd0xqYzFPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwTkNqd3ZjM1I1YkdVK0RRbzhZMmx5WTJ4bElHTnNZWE56UFNKemREQWlJR040UFNJeE1pNDFJaUJqZVQwaU1USXVNaUlnY2owaU1URXVNaUl2UGcwS1BHYytEUW9KUEhCaGRHZ2dZMnhoYzNNOUluTjBNU0lnWkQwaVRUY3VNU3d4T0M0MVZqa3VObWd0TTFZNGFEY3VObll4TGpab0xUTjJPQzQ1U0RjdU1Yb2lMejROQ2drOGNHRjBhQ0JqYkdGemN6MGljM1F4SWlCa1BTSk5NVE11Tnl3eE9DNDFWamhvTmk0NGRqRXVObWd0TlM0eWRqSXVPV2cwTGpWV01UUm9MVFF1TlhZMExqVklNVE11TjNvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlOVFJ3ZUNJZ2FHVnBaMmgwUFNJek0zQjRJaUIyYVdWM1FtOTRQU0l3SURBZ05UUWdNek1pSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4SVMwdElFZGxibVZ5WVhSdmNqb2djMnRsZEdOb2RHOXZiQ0EwTVM0eElDZ3pOVE0zTmlrZ0xTQm9kSFJ3T2k4dmQzZDNMbUp2YUdWdGFXRnVZMjlrYVc1bkxtTnZiUzl6YTJWMFkyZ2dMUzArQ2lBZ0lDQThkR2wwYkdVK1FqYzJOMEkxTUVJdFJEUkVNeTAwUkVWRExUaEdPVGd0TWpZMlFqSkJNakpGTTBVMFBDOTBhWFJzWlQ0S0lDQWdJRHhrWlhOalBrTnlaV0YwWldRZ2QybDBhQ0J6YTJWMFkyaDBiMjlzTGp3dlpHVnpZejRLSUNBZ0lEeGtaV1p6UGdvZ0lDQWdJQ0FnSUR4eVpXTjBJR2xrUFNKd1lYUm9MVEVpSUhnOUlqQWlJSGs5SWpBaUlIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNeUlnY25nOUlqUWlQand2Y21WamRENEtJQ0FnSUNBZ0lDQThiV0Z6YXlCcFpEMGliV0Z6YXkweUlpQnRZWE5yUTI5dWRHVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2JXRnphMVZ1YVhSelBTSnZZbXBsWTNSQ2IzVnVaR2x1WjBKdmVDSWdlRDBpTUNJZ2VUMGlNQ0lnZDJsa2RHZzlJalUwSWlCb1pXbG5hSFE5SWpNeklpQm1hV3hzUFNKM2FHbDBaU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lEeDFjMlVnZUd4cGJtczZhSEpsWmowaUkzQmhkR2d0TVNJK1BDOTFjMlUrQ2lBZ0lDQWdJQ0FnUEM5dFlYTnJQZ29nSUNBZ1BDOWtaV1p6UGdvZ0lDQWdQR2NnYVdROUlsTjViV0p2YkhNaUlITjBjbTlyWlQwaWJtOXVaU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhJaUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBnb2dJQ0FnSUNBZ0lEeG5JR2xrUFNKbWIyOTBaWElpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMDVNek11TURBd01EQXdMQ0F0TmpRdU1EQXdNREF3S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJRHhuSUdsa1BTSnpkWEJ3YjNKMExXTnZibTVsWTNRdFlYQndaRzkzYm14dllXUWlQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2MrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dhV1E5SWtkeWIzVndMVEkwSWo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJbWxqWDNacGMyRWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0Rrek15NHdNREF3TURBc0lEWTBMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWelpTQnBaRDBpVW1WamRHRnVaMnhsTFRFMExVTnZjSGt0TWlJZ2MzUnliMnRsUFNJalJUUkZORVUwSWlCdFlYTnJQU0oxY213b0kyMWhjMnN0TWlraUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ1ptbHNiRDBpSTBZelJqTkdNeUlnZUd4cGJtczZhSEpsWmowaUkzQmhkR2d0TVNJK1BDOTFjMlUrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpVm1sellWOHlNREUwWDJ4dloyOWZaR1YwWVdsc0lpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2czTGpBd01EQXdNQ3dnTVRBdU1EQXdNREF3S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJaU15TkRNNE9ERm1aaUkrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU5DNHlNak14T0RFeExEQXVNakE0TmprMU5qVXlJRU15TlM0eU1URTJOREEzTEMwd0xqQXhOak01TnpVeE5UVWdNall1TWpRMU9EWXdOU3d0TUM0d05UTTBOemd5TmpBNUlESTNMakkxTXpjNE9ETXNNQzR3TmpreE16QTBNelE0SUVNeU55NDVNRE00TmpNMUxEQXVNVFE1TkRRd09UazBJREk0TGpVME1UWTVOVGtzTUM0ek1EVTNOell6T1RnZ01qa3VNVFUzTWpVd05Dd3dMalV4TlRBek1UQTFOaUJETWpndU9UWTNPVGc0TERFdU16TTBNelEzT0RNZ01qZ3VOemM1TlRJNE15d3lMakUxTXpZMk5EWWdNamd1TlRnNU1EWXhOeXd5TGprM01qWXdPRGNnUXpJM0xqZ3hNalUwTXprc01pNDJOREUyTnpjd01pQXlOaTQ1TmpVMU56azFMREl1TkRRNU5UWTFNaklnTWpZdU1URXdPVGc0TlN3eUxqUXlOakE0TmprMklFTXlOUzQyT0RFME9EVXlMREl1TkRFMk9UVTJOVElnTWpVdU1qUXhPVFEyT0N3eUxqUTBNVGN6T1RFeklESTBMamd6TlRreU5UY3NNaTQxT0RJeU16WXdNaUJETWpRdU5Ua3hNalk1TkN3eUxqWTJOek01TVRNZ01qUXVNelUzTWpVd05Dd3lMamd3TURBMk1qRXhJREkwTGpFNU9UUTVPRElzTWk0NU9UY3lNRFE1TnlCRE1qUXVNRFkzTURNME5pd3pMakUyTURnd056UTFJREl6TGprNU9UYzVPVE1zTXk0ek56WTFPRE00TlNBeU5DNHdOVEEzTnpjM0xETXVOVGM0T1RRME1TQkRNalF1TURrMU5UTTBOQ3d6TGpjMk1UTTJOalEySURJMExqSXlOVGM1TURNc015NDVNVE01TnpVeE5pQXlOQzR6TnpJek1ETXhMRFF1TURNM056QXhPRFlnUXpJMExqWXpNekF4TlRZc05DNHlOVE15T1RFNU15QXlOQzQ1TkRBeU9URXNOQzQwTVRJd05EazJPU0F5TlM0eU5EUTNOVFkyTERRdU5UWTNOak01TnpVZ1F6STFMamt5T0RjMU1EWXNOQzQ1TURnME5EY3lJREkyTGpZek5qQXlOakVzTlM0eU1qSTJNRGczSURJM0xqSTBPVEUzTWpFc05TNDJOekExTlRrd01TQkRNamN1TnpjeU9EQTBPQ3cyTGpBME5UZ3pPRFV4SURJNExqSXhPRFUyTlN3MkxqVTBNVGcyTXpNMUlESTRMalF4T0RnMk5pdzNMakV6TkRrMk9EazBJRU15T0M0MU9ESTBNemcxTERjdU5qQXpOemc0T0RJZ01qZ3VOVGc1T0RZME5TdzRMakV3T0RBeE1qUXlJREk0TGpVeE16YzVPRE1zT0M0MU9USXlPVGd4TkNCRE1qZ3VOREl5T0Rnd01TdzVMakUyT1RjMU1UVTFJREk0TGpFM05qZ3hPRGtzT1M0M01qWTNNRGd3TnlBeU55NDNPVFF5T0N3eE1DNHhPVEEwT1RZNUlFTXlOeTR6TkRRNU1EY3lMREV3TGpjME1UZzJNelFnTWpZdU56SXhOekkyTERFeExqRTFOVEUxTlRNZ01qWXVNRFExTXpVNE9Dd3hNUzQwTXpRMk5UZzBJRU15TlM0eU5qTTBNaklzTVRFdU56VTVNRFk0TXlBeU5DNDBNVEV3TXpnMkxERXhMamt4TlRRd016Y2dNak11TlRVNU5qVTRPQ3d4TVM0NU5qYzFOemMySUVNeU1pNDFPVGsyT1RnNUxERXlMakF5TWpVME5qWWdNakV1TmpNek56RTRMREV4TGprek9UUTBNU0F5TUM0Mk9USTRNalE1TERFeExqYzFPRGc0TWlCRE1qQXVNak15T0RFME9Td3hNUzQyTmpRNU5qZzVJREU1TGpjM05EUXhNRFFzTVRFdU5UVXdPVE14TnlBeE9TNHpORFF6TURVeExERXhMak0yT1RneE16Y2dRekU1TGpVek9UVTRPRFlzTVRBdU5USXpOalkwTmlBeE9TNDNNek00TmpnMUxEa3VOamMzTlRFMU5UTWdNVGt1T1RJNE56VXdOaXc0TGpnek1UTTJOalEySUVNeU1DNHpNalF6TXpVeUxEa3VNREF6TVRZM055QXlNQzQzTWpJM01qazJMRGt1TVRjeU56TXlPVElnTWpFdU1UUXdNemt4TkN3NUxqSTVNekk1TVRreklFTXlNUzQyTVRrd05qWTNMRGt1TkRNME16UTNPRE1nTWpJdU1URTJPREE0T0N3NUxqVXhOelExTXpReUlESXlMall4TnpjMk1qSXNPUzQxTkRnd01USTBNaUJETWpNdU1EYzFPVFkxT1N3NUxqVTNNamM1TlRBeklESXpMalUwTWpjNU9UZ3NPUzQxT0RBMk1qRXhNaUF5TXk0NU9URTFOekExTERrdU5EYzNNemt4TXlCRE1qUXVNelExTWpBNE1pdzVMak01TnpJMk56QTRJREkwTGpjd01qZzJMRGt1TWpVNU1EQTJNakVnTWpRdU9UUTNNVEUwT1N3NExqazVPVEEyT0RNeUlFTXlOUzR4T0RJNU5EQXpMRGd1TnpVeU5UUTJOVGdnTWpVdU1qUTVNVGN5TVN3NExqTTNOakUwT1RBM0lESTFMakE1T1RnME9UVXNPQzR3TnpVMU9UQXdOaUJETWpRdU9UYzRPREkxT1N3M0xqZzBNRFl5TVRFeUlESTBMamMxTmpZME9ETXNOeTQyTmprek56ZzRPQ0F5TkM0MU16RTROakUxTERjdU5USXlNell3TWpVZ1F6STBMakU1TVRJMk9UUXNOeTR6TURNNU56VXhOaUF5TXk0NE1UazVOams1TERjdU1UTXhPVGczTlRnZ01qTXVORFE1T0RjME5pdzJMamsyTVRnMk16TTFJRU15TWk0M01UY3pNVEEyTERZdU5qSTBOVGsyTWpjZ01qRXVPVGsyT1RnNU5TdzJMakl5TlRZMU1qRTNJREl4TGpRME5qSTJNVGtzTlM0Mk5UVXdPVE14TnlCRE1qRXVNRE00TURNek1TdzFMakl6TlRBNU16RTNJREl3TGpjME9UZ3lORFFzTkM0M01ETTROVEE1TXlBeU1DNDJPVEl3TWpJeExEUXVNVE0yTkRVNU5qTWdRekl3TGpZek16SXhOak1zTXk0MU16UXdNemN5TnlBeU1DNDNOVE13TXpVMkxESXVPVEUyTXpNMU5DQXlNUzR3TXpnMk16VXlMREl1TXpjeU1qTTJNRElnUXpJeExqSTFNalU0TkN3eExqazJNVGN6T1RFeklESXhMalUyTURnMk15d3hMalU1TmpNek5UUWdNakV1T1RJMk1UUXhOU3d4TGpJNU1qSXpOakF5SUVNeU1pNDFOekk0TURRNExEQXVOelV4TmpjM01ERTVJREl6TGpNNE5EUTBOVFlzTUM0ME1EUTNNakEwT1RjZ01qUXVNakl6TVRneE1Td3dMakl3T0RZNU5UWTFNaUJhSWlCcFpEMGlVMmhoY0dVaUlHWnBiR3c5SWlNeU5ETTRPREVpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRBdU1EYzJPRFk1TURReE5pd3dMakl4TWpZd09EWTVOaUJETVM0NE9URXdNVGcxTml3d0xqSXhNVE13TkRNME9DQXpMamN3TkRrMk56TTVMREF1TWpFeU1qTTJNREkxSURVdU5URTRPVEUyTWpFc01DNHlNVEU0TmpNek5UUWdRelV1TmpjMU1EWXlOeklzTUM0eU1URXhNVGd3TVRJZ05TNDRNekl3TVRJd05Dd3dMakl5TkRFMk1UUTVNU0ExTGprNE1qVXpPRGc1TERBdU1qWTBNakl6TmpBeUlFTTJMak13TXpJMk1UUXhMREF1TXpRME9UQTJPRE15SURZdU5Ua3dOalkzTXpRc01DNDFNekU0TURFeU5ESWdOaTQzT0RNMU5ESTBMREF1Tnpnek1UWTNOekF5SUVNMkxqa3lPREEwT0RFM0xEQXVPVFk1TVRNd05ETTFJRGN1TURJeE9UYzJPVElzTVM0eE9EWTNOekF4T1NBM0xqQTJOekV6TkRrM0xERXVOREV4TmpjM01ESWdRemN1TXpZek5UY3lOU3d5TGpnM016ZzFNRGt6SURjdU5qVTVPREE1TXpNc05DNHpNell3TWpRNE5DQTNMamsxTmpJME5qZzJMRFV1TnprNE1UazROellnUXpndU1URXpNVGsyTVRrc05pNDFOalE1TmpnNU5DQTRMakkyTXpreU16Y3pMRGN1TXpNek1EUXpORGdnT0M0ME1qVXlPRGcxTVN3NExqQTVPVEEyT0RNeUlFTTVMalUwTnpJeE5USTFMRFV1TkRjd09Ua3pOemtnTVRBdU5qWTNNVE0xTERJdU9EUXhPVGczTlRnZ01URXVOemcxTmpRNU9Dd3dMakl4TWpZd09EWTVOaUJETVRJdU9URTJPREE0T0N3d0xqSXhNRE0zTWpZM01TQXhOQzR3TkRjNU5qYzVMREF1TWpFeE5qYzNNREU1SURFMUxqRTNPVEV5Tmprc01DNHlNVEU0TmpNek5UUWdRekV6TGpRek5EQXhPVEVzTkM0d056WTBOVGsyTXlBeE1TNDJPRGszTVRRc055NDVOREUyTVRRNU1TQTVMamswTXpnd016TXhMREV4TGpnd05qQXlORGdnUXpndU9EQTNNakkxTWprc01URXVPREEyTURJME9DQTNMalkzTURZME56STNMREV4TGpnd016UXhOakVnTmk0MU16UXdOamt5TkN3eE1TNDRNRGN6TWpreUlFTTFMalk0TWpZNE9UUXhMRGd1TnpZMk9EazBOREVnTkM0NE16azFNemd6T0N3MUxqY3lORFU1TmpJM0lETXVPVGt4TlRjd05Td3lMalk0TXpZd01qUTRJRU16TGpreE5UTXdNelUyTERJdU5ESXlNell3TWpVZ015NDROVFU0T1RVMk15d3lMakUwT0RJMk1EZzNJRE11Tmprd09URTRNakVzTVM0NU1pQkRNeTQxTVRrNU1UazNNaXd4TGpZNE5EWTFPRE01SURNdU1qTTNPVE15TnpZc01TNDFOVFF3TXpjeU55QXlMamszTWpBd01qQXhMREV1TkRNeE5ESTROVGNnUXpJdU16RTRNekUwTVN3eExqRTBNalF5TWpNMklERXVOakkxT0Rrd05qSXNNQzQ1TXpjeU5qY3dPREVnTUM0NU1qa3lOVEl6T0RNc01DNDNOVGczTlRjM05qUWdRekF1TmpJeE56YzJNakUzTERBdU5qZ3hPVGczTlRjNElEQXVNekV5TkRrek56STRMREF1TmpFeE5UVXlOemsxSURBdU1EQXhOREEwT1RFM01qRXNNQzQxTkRnd01USTBNaklnUXpBdU1ESTFORGc1TWpFeU1pd3dMalF6TmpBeU5EZzBOU0F3TGpBMU16RTROakUxTVRVc01DNHpNalEzT0RJMk1Ea2dNQzR3TnpZNE5qa3dOREUyTERBdU1qRXlOakE0TmprMklGb2lJR2xrUFNKVGFHRndaU0lnWm1sc2JEMGlJekU1TWpFMk5DSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVFl1TkRBME5qRTJNaXd3TGpreE1qUTRORFEzTWlCRE1UWXVORFU1TmpBNE5pd3dMalkzT0RRME56SXdOU0F4Tmk0MU1UQTFPRGN4TERBdU5EUXpORGM0TWpZeElERTJMalUyT0RFNE9EY3NNQzR5TVNCRE1UY3VOalF6T1RVek9Dd3dMakl4TXpNMU5EQXpOeUF4T0M0M01UazVNVGszTERBdU1qQTVPREV6TmpZMUlERTVMamM1TlRZNE5Ea3NNQzR5TVRFMk56Y3dNVGtnUXpFNExqa3dORGMyTmpjc05DNHdOell3T0RZNU5pQXhPQzR3TVRRME5UQTJMRGN1T1RRd09EWTVOVGNnTVRjdU1USTBNVE0wTlN3eE1TNDRNRFUwTmpVNElFTXhOaTR3TkRjek5qVTRMREV4TGpnd05qTTVOelVnTVRRdU9UY3dOVGszTVN3eE1TNDRNRFUwTmpVNElERXpMamc1TXpneU9EUXNNVEV1T0RBMU9ETTROU0JETVRRdU56TXhNelU1T0N3NExqRTNORGN5TURVZ01UVXVOVFkzTmpnMk9TdzBMalUwTXpZd01qUTRJREUyTGpRd05EWXhOaklzTUM0NU1USTBPRFEwTnpJZ1dpSWdhV1E5SWxOb1lYQmxJaUJtYVd4c1BTSWpNamd6TWpkQ0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHpNeTR5TkRNNU5UTTRMREV1TURVeE16QTBNelVnUXpNekxqUTFPRGN3TlRVc01DNDFOalEzT0RJMk1Ea2dNek11T1RrME1UYzVOaXd3TGpJeE9UWTRPVFEwTVNBek5DNDFOakU1TmpZNUxEQXVNakV5TmpBNE5qazJJRU16TlM0ME9UZzRORFlzTUM0eU1EYzVOVEF6TVRFZ016WXVORE0xTnpJMUxEQXVNakV4TXpBME16UTRJRE0zTGpNM01qUXdNelFzTUM0eU1UQTNORFV6TkRJZ1F6TTRMakkwTWpRME9EWXNOQzR3TnpVNU1EQTJNaUF6T1M0eE1URXlPRGsxTERjdU9UUXhNalF5TWpRZ016a3VPVGd3TlRNeE9Td3hNUzQ0TURZMU9ETTVJRU16T0M0NU9EUTBORFUyTERFeExqZ3dOek15T1RJZ016Y3VPVGc0TXpVNU15d3hNUzQ0TURZek9UYzFJRE0yTGprNU1qUTNNemNzTVRFdU9EQTJOemN3TWlCRE16WXVPRFl3TURFc01URXVNak13TURZeU1TQXpOaTQzTXpFeE5Ua3hMREV3TGpZMU1qUXlNalFnTXpZdU5qQXdNVEF3TkN3eE1DNHdOelV6TkRFMklFTXpOUzR5TVRrME5qZ3hMREV3TGpBM05EVTVOak1nTXpNdU9ETTVNRE0yTml3eE1DNHdOelUxTWpnZ016SXVORFU0TmpBMU1Td3hNQzR3TnpRMU9UWXpJRU16TWk0eU16TXdNVFUyTERFd0xqWTFNVEV4T0NBek1pNHdNRGN3TWpRMkxERXhMakl5TnpZek9UZ2dNekV1TnpnME5EUTFOaXd4TVM0NE1EVXdPVE15SUVNek1DNDJOVE00T0RnMkxERXhMamd3TnpnNE9ESWdNamt1TlRJek1UTXhMREV4TGpnd05qTTVOelVnTWpndU16a3lOVGMwTERFeExqZ3dOVFkxTWpJZ1F6TXdMakF3T1RRek15dzRMakl5TURjME5UTTBJRE14TGpZeU5UZzVNRFlzTkM0Mk16VTJOVEl4TnlBek15NHlORE01TlRNNExERXVNRFV4TXpBME16VWdURE16TGpJME16azFNemdzTVM0d05URXpNRFF6TlNCYUlFMHpNeTR6T0RjNE5UYzFMRGN1TmprMU9ETTROVEVnUXpNMExqSTRNRE00TVRNc055NDJPVFkxT0RNNE5TQXpOUzR4TnpNeE1EVTVMRGN1TmprMk1ESTBPRFFnTXpZdU1EWTFOakk1Tnl3M0xqWTVOakF5TkRnMElFTXpOUzQzTXprME9EZ3lMRFl1TWpRMk9EazBOREVnTXpVdU5ERTBNelV3TWl3MExqYzVOemMyTXprNElETTFMakE0T0RJd09EY3NNeTR6TkRnMk16TTFOQ0JETXpRdU5URTROREUwTlN3MExqYzVOalkwTlRrMklETXpMamsxTkRZME1USXNOaTR5TkRZNE9UUTBNU0F6TXk0ek9EYzROVGMxTERjdU5qazFPRE00TlRFZ1dpSWdhV1E5SWxOb1lYQmxJaUJtYVd4c1BTSWpNelEwTkRrd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ1BDOW5QZ284TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTlRSd2VDSWdhR1ZwWjJoMFBTSXpNM0I0SWlCMmFXVjNRbTk0UFNJd0lEQWdOVFFnTXpNaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nYzJ0bGRHTm9kRzl2YkNBME1TNHhJQ2d6TlRNM05pa2dMU0JvZEhSd09pOHZkM2QzTG1KdmFHVnRhV0Z1WTI5a2FXNW5MbU52YlM5emEyVjBZMmdnTFMwK0NpQWdJQ0E4ZEdsMGJHVStSVEJCTVRBd01UQXRRakl5UXkwME1qUkVMVUk0TlVRdE1rWXhOMEk1UkVNd01UWXlQQzkwYVhSc1pUNEtJQ0FnSUR4a1pYTmpQa055WldGMFpXUWdkMmwwYUNCemEyVjBZMmgwYjI5c0xqd3ZaR1Z6WXo0S0lDQWdJRHhrWldaelBnb2dJQ0FnSUNBZ0lEeHlaV04wSUdsa1BTSndZWFJvTFRFaUlIZzlJakFpSUhrOUlqQWlJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TXlJZ2NuZzlJalFpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0E4YldGemF5QnBaRDBpYldGemF5MHlJaUJ0WVhOclEyOXVkR1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdiV0Z6YTFWdWFYUnpQU0p2WW1wbFkzUkNiM1Z1WkdsdVowSnZlQ0lnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXpJaUJtYVd4c1BTSjNhR2wwWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJRHgxYzJVZ2VHeHBibXM2YUhKbFpqMGlJM0JoZEdndE1TSStQQzkxYzJVK0NpQWdJQ0FnSUNBZ1BDOXRZWE5yUGdvZ0lDQWdQQzlrWldaelBnb2dJQ0FnUEdjZ2FXUTlJbE41YldKdmJITWlJSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUdsa1BTSm1iMjkwWlhJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzA1T1RjdU1EQXdNREF3TENBdE5qUXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0p6ZFhCd2IzSjBMV052Ym01bFkzUXRZWEJ3Wkc5M2JteHZZV1FpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2NnYVdROUlrZHliM1Z3TFRJMElqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dhV1E5SW1salgyMWhjM1JsY21OaGNtUWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RrNU55NHdNREF3TURBc0lEWTBMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWelpTQnBaRDBpVW1WamRHRnVaMnhsTFRFMExVTnZjSGt0TXlJZ2MzUnliMnRsUFNJalJUUkZORVUwSWlCdFlYTnJQU0oxY213b0kyMWhjMnN0TWlraUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ1ptbHNiRDBpSTBZeVJqSkdNaUlnZUd4cGJtczZhSEpsWmowaUkzQmhkR2d0TVNJK1BDOTFjMlUrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpVFdGemRHVnlZMkZ5WkMxc2IyZHZJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE1DNHdNREF3TURBc0lEWXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dhV1E5SW1jek1USTFJajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJbWN6TVRFMUlqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0puTXpFeE1DSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVE16TGpBMk56RTNPVGtzTVRBdU1qUTBNVGMzTVNCRE16TXVNRFkzTVRjNU9Td3hOUzQ1TURBMk5UUXpJREk0TGpRNU1ETTJOamtzTWpBdU5EZzJNVE0xT1NBeU1pNDRORFExT0RBNUxESXdMalE0TmpFek5Ua2dRekUzTGpFNU9EYzVORGtzTWpBdU5EZzJNVE0xT1NBeE1pNDJNakU1T0RBMUxERTFMamt3TURZMU5ETWdNVEl1TmpJeE9UZ3dOU3d4TUM0eU5EUXhOemN4SUVNeE1pNDJNakU1T0RBMUxEUXVOVGczTmprNE9UUWdNVGN1TVRrNE56azBPU3d3TGpBd01qSXhOelk0T0RVMUlESXlMamcwTkRVNE1Ea3NNQzR3TURJeU1UYzJPRGcxTlNCRE1qZ3VORGt3TXpZMk9Td3dMakF3TWpJeE56WTRPRFUxSURNekxqQTJOekUzT1Rrc05DNDFPRGMyT1RnNU5DQXpNeTR3TmpjeE56azVMREV3TGpJME5ERTNOekVnVERNekxqQTJOekUzT1Rrc01UQXVNalEwTVRjM01TQmFJaUJwWkQwaWNHRjBhREk1T1RjaUlHWnBiR3c5SWlOR056bEdNVUVpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpBdU5EVTJNRFV5TXl3eE1DNHlORFF4TnpjeElFTXlNQzQwTlRZd05USXpMREUxTGprd01EWTFORE1nTVRVdU9EYzVNak01TXl3eU1DNDBPRFl4TXpVNUlERXdMakl6TXpRMU16TXNNakF1TkRnMk1UTTFPU0JETkM0MU9EYzJOamN6TERJd0xqUTROakV6TlRrZ01DNHdNVEE0TlRJNU16UXNNVFV1T1RBd05qVTBNeUF3TGpBeE1EZzFNamt6TkN3eE1DNHlORFF4TnpjeElFTXdMakF4TURnMU1qa3pOQ3cwTGpVNE56WTVPRGswSURRdU5UZzNOalkzTXl3d0xqQXdNakl4TnpZNE9EVTFJREV3TGpJek16UTFNek1zTUM0d01ESXlNVGMyT0RnMU5TQkRNVFV1T0RjNU1qTTVNeXd3TGpBd01qSXhOelk0T0RVMUlESXdMalExTmpBMU1qTXNOQzQxT0RjMk9UZzVOQ0F5TUM0ME5UWXdOVEl6TERFd0xqSTBOREUzTnpFZ1RESXdMalExTmpBMU1qTXNNVEF1TWpRME1UYzNNU0JhSWlCcFpEMGljR0YwYURJNU9UVWlJR1pwYkd3OUlpTkZRVEF3TVVJaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1UWXVOVE01TURNM09Dd3lMakU0TVRZek1UZzFJRU14TkM0eE5UTTRORFkzTERRdU1EVTJOakF4TkRZZ01USXVOakl5TnpjMU1TdzJMamszTURFNU1EY3pJREV5TGpZeU1qYzNOVEVzTVRBdU1qUXpNakUzTkNCRE1USXVOakl5TnpjMU1Td3hNeTQxTVRZeU5EUXhJREUwTGpFMU16ZzBOamNzTVRZdU5ETXlNRFUzTVNBeE5pNDFNemt3TXpjNExERTRMak13TnpBeU5qa2dRekU0TGpreU5ESXlPRGdzTVRZdU5ETXlNRFUzTVNBeU1DNDBOVFV6TURBMUxERXpMalV4TmpJME5ERWdNakF1TkRVMU16QXdOU3d4TUM0eU5ETXlNVGMwSUVNeU1DNDBOVFV6TURBMUxEWXVPVGN3TVRrd056TWdNVGd1T1RJME1qSTRPQ3cwTGpBMU5qWXdNVFEySURFMkxqVXpPVEF6Tnpnc01pNHhPREUyTXpFNE5TQk1NVFl1TlRNNU1ETTNPQ3d5TGpFNE1UWXpNVGcxSUZvaUlHbGtQU0p3WVhSb01qazVPU0lnWm1sc2JEMGlJMFpHTlVZd01TSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJbWN6TURReklpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d6TWk0eU1EUXdNemNzSURFMUxqSTROVEF5TUNraUlHWnBiR3c5SWlOR056bEdNVUVpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0owWlhoME16QTBOU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHdMamcwTkRBeE5EZ3hMREF1TlRNd09UY3pPRElnVERBdU9EUTBNREUwT0RFc01DNHdNekE1TnpNNE1pQk1NQzQzTkRnMU56RTRPVFVzTUM0d016QTVOek00TWlCTU1DNDJNemczT0RFek5Ea3NNQzR6TnpRNE16QTBOeUJNTUM0MU1qZzVPVEE0TURJc01DNHdNekE1TnpNNE1pQk1NQzQwTXpNMU5EYzRPRGdzTUM0d016QTVOek00TWlCTU1DNDBNek0xTkRjNE9EZ3NNQzQxTXpBNU56TTRNaUJNTUM0MU1EQTVNVGt6TlRjc01DNDFNekE1TnpNNE1pQk1NQzQxTURBNU1Ua3pOVGNzTUM0eE5UTTROREEzTVRFZ1REQXVOakF6T0RRM09UazJMREF1TkRjNE9USTJNRE0zSUV3d0xqWTNNemN4TkRjeExEQXVORGM0T1RJMk1ETTNJRXd3TGpjM05qWTBNek0wTVN3d0xqRTFNams0TnpRM01TQk1NQzQzTnpZMk5ETXpOREVzTUM0MU16QTVOek00TWlCTU1DNDRORFF3TVRRNE1Td3dMalV6TURrM016Z3lJRm9nVFRBdU1qTTVOVFF6TURBMUxEQXVOVE13T1Rjek9ESWdUREF1TWpNNU5UUXpNREExTERBdU1URTJNams0TURRNUlFd3dMak0yTVRnd09UYzBOeXd3TGpFeE5qSTVPREEwT1NCTU1DNHpOakU0TURrM05EY3NNQzR3TXpFNE1qY3dOakE1SUV3d0xqQTFNRFV5T0RZd01qZ3NNQzR3TXpFNE1qY3dOakE1SUV3d0xqQTFNRFV5T0RZd01qZ3NNQzR4TVRZeU9UZ3dORGtnVERBdU1UY3lOemsxTXpRMExEQXVNVEUyTWprNE1EUTVJRXd3TGpFM01qYzVOVE0wTkN3d0xqVXpNRGszTXpneUlFd3dMakl6T1RVME16QXdOU3d3TGpVek1EazNNemd5SUZvaUlHbGtQU0p3WVhSb016QTFOeUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGF5bWVudF8zLThkMDRlOTQ0ODU3Y2FhMzlmOGZmNTgzNzY1Y2Q4ODA4LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTlRSd2VDSWdhR1ZwWjJoMFBTSXpNM0I0SWlCMmFXVjNRbTk0UFNJd0lEQWdOVFFnTXpNaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nYzJ0bGRHTm9kRzl2YkNBME1TNHhJQ2d6TlRNM05pa2dMU0JvZEhSd09pOHZkM2QzTG1KdmFHVnRhV0Z1WTI5a2FXNW5MbU52YlM5emEyVjBZMmdnTFMwK0NpQWdJQ0E4ZEdsMGJHVStRVGhGTmpKQk5FTXROVEJGUXkwME4wVXlMVGhGTmtRdFJrVkZSa0kzTkRjeU1FVTNQQzkwYVhSc1pUNEtJQ0FnSUR4a1pYTmpQa055WldGMFpXUWdkMmwwYUNCemEyVjBZMmgwYjI5c0xqd3ZaR1Z6WXo0S0lDQWdJRHhrWldaelBnb2dJQ0FnSUNBZ0lEeHlaV04wSUdsa1BTSndZWFJvTFRFaUlIZzlJakFpSUhrOUlqQWlJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TXlJZ2NuZzlJalFpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0E4YldGemF5QnBaRDBpYldGemF5MHlJaUJ0WVhOclEyOXVkR1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdiV0Z6YTFWdWFYUnpQU0p2WW1wbFkzUkNiM1Z1WkdsdVowSnZlQ0lnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXpJaUJtYVd4c1BTSjNhR2wwWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJRHgxYzJVZ2VHeHBibXM2YUhKbFpqMGlJM0JoZEdndE1TSStQQzkxYzJVK0NpQWdJQ0FnSUNBZ1BDOXRZWE5yUGdvZ0lDQWdQQzlrWldaelBnb2dJQ0FnUEdjZ2FXUTlJbE41YldKdmJITWlJSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUdsa1BTSm1iMjkwWlhJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzA1T1RjdU1EQXdNREF3TENBdE1UQTNMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpYzNWd2NHOXlkQzFqYjI1dVpXTjBMV0Z3Y0dSdmQyNXNiMkZrSWo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhuSUdsa1BTSkhjbTkxY0MweU5DSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG5JR2xrUFNKcFkxOXBiblJsY201bGRDMWlZVzVyYVc1bklpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2c1T1RjdU1EQXdNREF3TENBeE1EY3VNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFhObElHbGtQU0pTWldOMFlXNW5iR1V0TVRRdFEyOXdlUzAySWlCemRISnZhMlU5SWlORk5FVTBSVFFpSUcxaGMyczlJblZ5YkNnamJXRnpheTB5S1NJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCbWFXeHNQU0lqUmpOR00wWXpJaUI0YkdsdWF6cG9jbVZtUFNJamNHRjBhQzB4SWo0OEwzVnpaVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4eVpXTjBJR2xrUFNKU1pXTjBZVzVuYkdVdE1UUWlJR1pwYkd3OUlpTkVORVEwUkRRaUlIZzlJakVpSUhrOUlqWWlJSGRwWkhSb1BTSTFNaUlnYUdWcFoyaDBQU0kwSWo0OEwzSmxZM1ErQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGRHVjRkQ0JwWkQwaVNVNVVSVkpPUlZRdFFrRk9TMGxPUnkxRGIzQjVMVE1pSUdadmJuUXRabUZ0YVd4NVBTSXVVMFpPVTFSbGVIUXNJQzVUUmlCT1V5QlVaWGgwSWlCbWIyNTBMWE5wZW1VOUlqZ3VOU0lnWm05dWRDMTNaV2xuYUhROUltNXZjbTFoYkNJZ2JHbHVaUzF6Y0dGamFXNW5QU0k0TGpVaUlHWnBiR3c5SWlNek16TXpNek1pUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHgwYzNCaGJpQjRQU0kwTGpjeU9EYzFPVGMzSWlCNVBTSXhPQzQ0TkRnek9EZzNJajVKVGxSRlVrNUZWQ0E4TDNSemNHRnVQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDBjM0JoYmlCNFBTSTJMak15TmpZMk1ERTJJaUI1UFNJeU55NHpORGd6T0RnM0lqNUNRVTVMU1U1SFBDOTBjM0JoYmo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkR1Y0ZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLUEM5emRtYytcIiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gIH1cblxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xuICB9XG5cbiAgaHRtbCxcbiAgaHRtbCBhLFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2LFxuICBhLFxuICBwLFxuICBsaSxcbiAgZGwsXG4gIHRoLFxuICBkdCxcbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzcGFuLFxuICBkaXYge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAwNCk7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gICNfX25leHQge1xuICAgID4gLmFudC1sYXlvdXQge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuXG4gICAgICAvKiBob3RlbCBzdWJtaXNzaW9uIHN0eWxlICAqLyBcbiAgICAgIC5ob3RlbC1zdWJtaXNzaW9uLWZvcm0ge1xuICAgICAgICAuYW50LXByb2dyZXNzLW91dGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZ20tc3R5bGUge1xuICAgICAgICAgID4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgbGVmdDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDQ2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ob3RlbC1mb3JtLWxvY2F0aW9uIHtcbiAgICAgICAgICAuYW50LWNhcmQtaGVhZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtY2FyZC1ib2R5IHAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjInLCAnIzc3Nzc3NycpfTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuICAvLyBzdHlsZSBmb3IgbmF2YmFyIHByb2ZpbGUgLyBhY2NvdW50IG1lbnVcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuYW50LXBvcG92ZXIge1xuICAgICYucHJvZmlsZV9tZW51IHtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgfVxuICAgIC5hbnQtcG9wb3Zlci1jb250ZW50IHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lciB7XG4gICAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgICB1bC5hbnQtbWVudSAge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgJi5hY2NvdW50X21lbnUge1xuICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICYuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAmLmFudC1tZW51LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuICAvLyBzdHlsZSBmb3IgZGF0ZSByYW5nZSBwaWNrZXJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuRGF0ZVJhbmdlUGlja2VyIHtcbiAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgLkRhdGVSYW5nZVBpY2tlcl9waWNrZXIge1xuICAgICAgICAuRGF5UGlja2VyX3dlZWtIZWFkZXIge1xuICAgICAgICAgIC5EYXlQaWNrZXJfd2Vla0hlYWRlcl91bCB7XG4gICAgICAgICAgICAuRGF5UGlja2VyX3dlZWtIZWFkZXJfbGkge1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLkRheVBpY2tlcl9mb2N1c1JlZ2lvbiB7XG4gICAgICAgICAgLkNhbGVuZGFyTW9udGhHcmlkIHtcbiAgICAgICAgICAgIC5DYWxlbmRhck1vbnRoIHtcbiAgICAgICAgICAgICAgLkNhbGVuZGFyTW9udGhfY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbiB7XG4gICAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fYnV0dG9uIHtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuRGF5UGlja2VyS2V5Ym9hcmRTaG9ydGN1dHNfYnV0dG9uUmVzZXQge1xuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuICAvLyBzdHlsZSBmb3IgYW50IHRvb2x0aXBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuYW50LXRvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC5hbnQtdG9vbHRpcC1pbm5lciB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgbWluLWhlaWdodDogMjZweDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG4gIC8vIHN0eWxlIGZvciBkcm9wZG93blxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51IHtcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICYuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzMiwgMTM3LCAwLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBcbiAgLy8gaGVyZSBmaXggaGVpZ2h0IGlzc3VlIGZvciBSb29tR3Vlc3QgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLnZpZXdfd2l0aF9fcG9wdXAge1xuICAgICYucm9vbV9ndWVzdF9fY29tcG9uZW50IHtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgbWluLWhlaWdodDogNTRweDtcbiAgICAgIH1cbiAgICAgICYuYWx0IHtcbiAgICAgICAgLnBvcHVwX2NvbnRhaW5lciB7XG4gICAgICAgICAgI3BvcHVwIHtcbiAgICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuICAvLyBhbnQgZHJvcGRvd24gYW5kIHNvY2lhbCBzaGFyZSBtZW51IHN0eWxlIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC5hbnQtZHJvcGRvd24ge1xuICAgICYuc29jaWFsX3NoYXJlX21lbnUge1xuICAgICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICAgICAgXG4gICAgICAuYW50LW1lbnUge1xuICAgICAgICBwYWRkaW5nOiA3cHggMDtcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgIFxuICAgICAgICAuYW50LW1lbnUtaXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMicsICcjRjdGN0Y3Jyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG4gIC8vIGFudCBtb2RhbCBhbmQgZHJhd2VyIHN0eWxlIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC5hbnQtZHJhd2VyLFxuICAuYW50LW1vZGFsLW1hc2ssXG4gIC5hbnQtbW9kYWwtd3JhcCAge1xuICAgIHotaW5kZXg6IDk5OTk5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC1kcmF3ZXIge1xuICAgICYuZmlsdGVyX2RyYXdlciB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIC5hbnQtZHJhd2VyLW1hc2sge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgJi5hbnQtZHJhd2VyLWJvdHRvbSB7XG4gICAgICAgICYuYW50LWRyYXdlci1vcGVuIHtcbiAgICAgICAgICAuYW50LWRyYXdlci1jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hbnQtZHJhd2VyLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MnB4KSAhaW1wb3J0YW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAuYW50LWRyYXdlci13cmFwcGVyLWJvZHkge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAuYW50LWRyYXdlci1ib2R5IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYW50LW1vZGFsLXdyYXAge1xuICAgIC5hbnQtbW9kYWwtY29udGVudCB7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgfVxuICAgICYucmV2aWV3X21vZGFsIHtcbiAgICAgIC5hbnQtbW9kYWwge1xuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbW9kYWwtYm9keSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWFnZV91cGxvYWRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtdXBsb2Fke1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuYW50LXVwbG9hZC1kcmFne1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLmFudC11cGxvYWR7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYuYW50LXVwbG9hZC1kcmFnLWhvdmVye1xuICAgICAgICAgICAgLmltYWdlLWRyYWctYXJlYXtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDhiZGMxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYW50LXVwbG9hZC1saXN0e1xuICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLmFudC11cGxvYWQtbGlzdC1pdGVte1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFudC11cGxvYWQtZHJhZy1jb250YWluZXJ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuICAvLyBtYXAgaW5mbyB3aW5kb3cgc3R5bGUgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmdtLXN0eWxlLWl3LWMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZ20tc3R5bGUtaXcge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC5nbS1zdHlsZS1pdy1kIHtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbmZvX3dpbmRvd19jYXJkIHtcbiAgICAgIHdpZHRoOiAyNzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICA+IGRpdiB7XG4gICAgICAgID4gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb250ZW50X3dyYXBwZXIge1xuICAgICAgICA+IGRpdiArIGRpdiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAubWV0YV93cmFwcGVyIHtcbiAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0uZ20tdWktaG92ZXItZWZmZWN0IHtcbiAgICAgIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX0gIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgICAgPiBpbWcge1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gSW1hZ2UgR2FsbGVyeSBNb2RhbCBzdHlsZVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmFudC1tb2RhbC13cmFwIHtcbiAgJi5pbWFnZV9nYWxsZXJ5X21vZGFsIHtcbiAgICAuYW50LW1vZGFsIHtcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIC5hbnQtbW9kYWwtY29udGVudHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYW50LW1vZGFsLWJvZHkge1xuICAgICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW1hZ2VfZ2FsbGVyeV9jbG9zZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgIGZpbGw6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG4vLyBzdHlsZSBmb3IgSW5jcmVtZW50IERlY3JlbWVudCBDb21wb25lbnRcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5xdWFudGl0eSB7XG4gIGJ1dHRvbi5idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIHN2ZyB7XG4gICAgICBmaWxsOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ucW50LWlucHV0IHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBcbi8vIHN0eWxlIGZvciBtb2JpbGUgSGVhZGVyIENvbXBvbmVudFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLm1vYmlsZS1oZWFkZXIge1xuICAmLmFudC1kcmF3ZXIge1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICB9XG4gIC5hbnQtZHJhd2VyLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLmF1dGgtbWVudSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG4gICAgICBsaSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgJi5hbnQtbWVudS1pdGVtLXNlbGVjdGVkLFxuICAgICAgICAmLmFudC1tZW51LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5tYWluLW1lbnUge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICYuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCxcbiAgICAgICAgJi5hbnQtbWVudS1pdGVtLWFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMzFweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDMycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuLy8gc3R5bGUgZm9yIGdvb2dsZSBtYXAgZHJvcGRvd25cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5wYWMtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAwO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDQ2cHggLTEwcHggcmdiYSgyNiwgMjYsIDI5LCAwLjMpO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGFjLWl0ZW0ge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgIC5wYWMtaWNvbiB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICAgIC5wYWMtaXRlbS1xdWVyeSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9OyAgXG4gICAgICAucGFjLW1hdGNoZWQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMCcsICcjMDAwMDAwJyl9O1xuICAgICAgfVxuICAgIH0gXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG4gICAgfVxuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG4vLyBzdHlsZSBmb3IgcmVzZXJ2YXRpb24gZm9ybVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnJlc2VydmF0aW9uX21vZGFsIHtcbiAgLmFudC1tb2RhbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAuYW50LW1vZGFsLWNvbnRlbnQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAucmVzZXJ2YXRpb25fc2lkZWJhciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLDAsMCwwLjE2KTtcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4wJywgJyNFQkVCRUInKX07XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5EYXRlSW5wdXRfX3NtYWxsIHtcbiAgICAgICAgICB3aWR0aDogMTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMCA5cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4wJywgJyNFQkVCRUInKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgID4gYnV0dG9uLmNsb3NlIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgIH1cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnJlc2VydmF0aW9uX3NpZGViYXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOXB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzBweCAyNnB4IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2JvcmRlci4wJywgJyNFQkVCRUInKX07XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgcGFkZGluZzogMjVweCAxNXB4IDI2cHggMTVweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzMWI4YmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGEge1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgY29sb3I6ICMwMDg0ODlkMTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggMjhweCAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2JvcmRlci4wJywgJyNFQkVCRUInKX07XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgcGFkZGluZzogMjBweCAxNXB4IDI1cHggMTVweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbi5ncmlkX2NvbHVtbiAucGxhY2Vob2xkZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xufVxuXG4uYW50LWlucHV0LXNlYXJjaC1pY29uOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG59XG5cbi5hbnQtY2hlY2tib3gtd3JhcHBlcjpob3ZlciAuYW50LWNoZWNrYm94LWlubmVyLCBcbi5hbnQtY2hlY2tib3g6aG92ZXIgLmFudC1jaGVja2JveC1pbm5lciwgXG4uYW50LWNoZWNrYm94LWlucHV0OmZvY3VzICsgLmFudC1jaGVja2JveC1pbm5lcixcbi5hbnQtY2hlY2tib3gtY2hlY2tlZDo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9ICFpbXBvcnRhbnQ7XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvb3RlcldyYXBwZXIsIHtcbiAgU3ViY3JpYmVBcmVhLFxuICBNYWluRm9vdGVyQXJlYSxcbiAgTWVudVdyYXBwZXIsXG4gIFNvY2lhbEFyZWEsXG4gIExvZ29XcmFwcGVyLFxuICBSb3dBcmVhLFxuICBHcmF5Rm9vdGVyLFxuICBGb290ZXJQYXltZW50LFxuICBDb250YWluZXIsXG4gIE5vdEdheUZvb3RlcixcbiAgQ29weXJpZ2h0QXJlYSxcbiAgU2Vjb25kYXJ5Rm9vdGVyLFxufSBmcm9tICcuL0Zvb3Rlci5zdHlsZSc7XG5pbXBvcnQgeyBSb3csIENvbCwgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQmFja1RvcCAgfSBmcm9tICdhbnRkJztcblxuY29uc3QgRm9vdGVyID0gKHsgbG9nbywgbWVudSwgY29weXJpZ2h0LCBjbGFzc05hbWUsIHBhdGgsXG4gIGFkZHJlc3MsIGVtYWlsLCBwaG9uZSwgbGljZW5zZSwgaW1hZ2VzLCBndWlkZSwgYWJvdXQsIGFnZW50LCB0ZXJtLCBzb2NpYWxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvb3RlcldyYXBwZXIgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxTdWJjcmliZUFyZWE+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXt7IHhzOiA4LCBzbTogMTYsIG1kOiAyNCwgbGc6IDMyIH19IGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIiBhbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDMyIH19IHNtPXt7IHNwYW46IDI0IH19IG1kPXt7IHNwYW46IDI0IH19IGxnPXt7IHNwYW46IDYgfX0gPlxuICAgICAgICAgICAgICAgIDxTb2NpYWxBcmVhPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c29jaWFsICYmIHNvY2lhbH1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Tb2NpYWxBcmVhPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiAzMiB9fSBsZz17eyBzcGFuOiA4IH19ID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPsSQxIJORyBLw50gTkjhuqxOIFRJTjwvaDI+XG4gICAgICAgICAgICAgICAgICA8cD5Dw6FjIGRlYWwgZHUgbOG7i2NoIGdp4bqjbSBnacOhIMSR4bq/biA2MCUgc+G6vSDEkcaw4bujYyBn4butaSDEkeG6v24gYuG6oW48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIGxnPXt7IHNwYW46IDEwIH19ID5cbiAgICAgICAgICAgICAgICA8Rm9ybSBsYXlvdXQ9XCJpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gd3JhcHBlckNvbD17eyBzbTogMjQgfX0gc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOaOG6rXAgxJHhu4thIGNo4buJIEVtYWlsXCIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgxJDEg25nIGvDvVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L1N1YmNyaWJlQXJlYT5cbiAgICAgICAgPE1haW5Gb290ZXJBcmVhPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93QXJlYT5cbiAgICAgICAgICAgICAgPEdyYXlGb290ZXI+XG4gICAgICAgICAgICAgICAgPExvZ29XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPFJvdyBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnIGFsaWduPVwibWlkZGxlXCIgPlxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2dvICYmIGxvZ299XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Mb2dvV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+PGI+xJDhu4thIGNo4buJIDogPC9iPnthZGRyZXNzICYmIGFkZHJlc3N9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48Yj5FbWFpbCA6IDwvYj57ZW1haWwgJiYgZW1haWx9IDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGI+xJBp4buHbiB0aG/huqFpIDogPC9iPntwaG9uZSAmJiBwaG9uZX08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxpPntsaWNlbnNlICYmIGxpY2Vuc2V9PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyUGF5bWVudD5cbiAgICAgICAgICAgICAgICAgIDx1bD4ge2ltYWdlcyAmJiBpbWFnZXN9PC91bD5cbiAgICAgICAgICAgICAgICA8L0Zvb3RlclBheW1lbnQ+XG4gICAgICAgICAgICAgIDwvR3JheUZvb3Rlcj5cbiAgICAgICAgICAgICAgPE5vdEdheUZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17eyB4czogOCwgc206IDE2LCBtZDogMjQsIGxnOiAzMiB9fSBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgYWxpZ249XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHhzPXt7IHNwYW46IDEyIH19IHNtPXt7IHNwYW46IDEwIH19IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlbhu4AgVFJJUCBGSU5ERVI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAge2Fib3V0ICYmIGFib3V0fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiB4cz17eyBzcGFuOiAxMiB9fSBzbT17eyBzcGFuOiAxMCB9fSBtZD17eyBzcGFuOiA2IH19IGxnPXt7IHNwYW46IDYgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz7EkOG7kEkgVMOBQzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7YWdlbnQgJiYgYWdlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHhzPXt7IHNwYW46IDEyIH19IHNtPXt7IHNwYW46IDEwIH19IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPsSQSeG7gFUgS0hP4bqiTiBT4busIEThu6RORzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7dGVybSAmJiB0ZXJtfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiB4cz17eyBzcGFuOiAxMiB9fSBzbT17eyBzcGFuOiAxMCB9fSBtZD17eyBzcGFuOiA2IH19IGxnPXt7IHNwYW46IDYgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ixq/hu5pORyBE4bqqTjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7Z3VpZGUgJiYgZ3VpZGV9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9Pntjb3B5cmlnaHQgJiYgPENvcHlyaWdodEFyZWE+e2NvcHlyaWdodH08L0NvcHlyaWdodEFyZWE+fTwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxCYWNrVG9wIC8+XG4gICAgICAgICAgICAgIDwvTm90R2F5Rm9vdGVyPlxuICAgICAgICAgICAgPC9Sb3dBcmVhPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L01haW5Gb290ZXJBcmVhPlxuICAgICAgPC9Gb290ZXJXcmFwcGVyPlxuICAgICAgeyEhcGF0aCAmJiA8U2Vjb25kYXJ5Rm9vdGVyIC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2dvOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGJnU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb3B5cmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjE3JywgJyMzMzMnKX07XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4ODg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHBhZGRpbmc6IDYwcHggMCA1MHB4O1xuICB9XG5cbiAgIC8qIHN1Ym1pdCBidXR0b24gc3R5bGUgKi9cbiAgIGJ1dHRvblt0eXBlPSdzdWJtaXQnXS5hbnQtYnRuIHtcbiAgICAkeycnIC8qIG1pbi13aWR0aDogMTU3cHg7ICovfVxuICAgICR7JycgLyogaGVpZ2h0OiA2MHB4OyAqL31cbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1YmNyaWJlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBkYXNoZWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICBib3JkZXItd2lkdGg6IDEwMCU7XG4gIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBNYWluRm9vdGVyQXJlYSA9IHN0eWxlZC5kaXZgXG5gO1xuZXhwb3J0IGNvbnN0IFNvY2lhbEFyZWEgPSBzdHlsZWQuZGl2YFxuICBpbWcge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxuICB1bCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvd0FyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5gO1xuZXhwb3J0IGNvbnN0IEdyYXlGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaSB7XG4gICAgbWFyZ2luLXRvcCA6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE5vdEdheUZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOjc1JTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRm9vdGVyUGF5bWVudCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gIH1cbiAgbGkge1xuICAgIGRpc3BsYXkgOmlubGluZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA1MXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgdWwsXG4gIC5hbnQtbWVudSxcbiAgdWwuYW50LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAwIDMwcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIG1hcmdpbjogMCA3cHg7XG4gICAgICB9XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29weXJpZ2h0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNTlweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgcGFkZGluZzogMTBweCAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5Rm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBoZWlnaHQ6IDc0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXZiYXJXcmFwcGVyLCB7XG4gIENvbnRhaW5lcixcbiAgTG9nb0FyZWEsXG4gIE1lbnVBcmVhLFxuICBBdmF0YXJXcmFwcGVyLFxuICBBdXRoV3JhcHBlcixcbiAgTWVudVdyYXBwZXIsXG59IGZyb20gJy4vTmF2YmFyLnN0eWxlJztcblxuY29uc3QgTmF2YmFyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBsb2dvLFxuICBhdmF0YXIsXG4gIG5hdk1lbnUsXG4gIGF1dGhNZW51LFxuICBwcm9maWxlTWVudSxcbiAgaXNMb2dpbixcbiAgaGVhZGVyVHlwZSxcbiAgc2VhcmNoQ29tcG9uZW50LFxuICBsb2NhdGlvbixcbiAgc2VhcmNoVmlzaWJpbGl0eSxcbn0pID0+IHtcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnbmF2YmFyJ107XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuICBpZiAoaGVhZGVyVHlwZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChgaXNfJHtoZWFkZXJUeXBlfWApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtsb2dvIHx8IHNlYXJjaFZpc2liaWxpdHkgPyAoXG4gICAgICAgICAgPExvZ29BcmVhPlxuICAgICAgICAgICAge2xvZ299XG4gICAgICAgICAgICB7IXNlYXJjaFZpc2liaWxpdHkgJiYgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJ1xuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiBzZWFyY2hDb21wb25lbnR9XG4gICAgICAgICAgPC9Mb2dvQXJlYT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxNZW51QXJlYT5cbiAgICAgICAgICB7bmF2TWVudSAmJiAoXG4gICAgICAgICAgICA8TWVudVdyYXBwZXIgY2xhc3NOYW1lPVwibWFpbl9tZW51XCI+e25hdk1lbnV9PC9NZW51V3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0xvZ2luICYmIGF2YXRhciA/IChcbiAgICAgICAgICAgIDxBdmF0YXJXcmFwcGVyPntwcm9maWxlTWVudX08L0F2YXRhcldyYXBwZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGF1dGhNZW51ICYmIChcbiAgICAgICAgICAgICAgPEF1dGhXcmFwcGVyIGNsYXNzTmFtZT1cImF1dGhfbWVudVwiPnthdXRoTWVudX08L0F1dGhXcmFwcGVyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvTWVudUFyZWE+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcldyYXBwZXI+XG4gICk7XG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hdk1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBhdmF0YXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBhdXRoTWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGlzTG9naW46IFByb3BUeXBlcy5ib29sLFxuICBoZWFkZXJUeXBlOiBQcm9wVHlwZXMub25lT2YoWyd0cmFuc3BhcmVudCcsICdkZWZhdWx0J10pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IE5hdmJhcldyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBtaW4taGVpZ2h0OiA4MnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJi5pc190cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuXG4gICAgLmFudC1tZW51IHtcbiAgICAgIGxpIHtcbiAgICAgICAgJi5hbnQtbWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICA+IGEge1xuICAgIG1hcmdpbi1yaWdodDogMjdweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBBdmF0YXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDQ2cHg7XG5cbiAgLmF2YXRhci1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmRyb3Bkb3duLWhhbmRsZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiA0NXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgJi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgJi5hbnQtbWVudS1pdGVtLXNlbGVjdGVkLFxuICAgICAgICAmLmFudC1tZW51LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB1bCxcbiAgLmFudC1tZW51LFxuICB1bC5hbnQtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDAgMTRweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB9XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAmLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQsXG4gICAgICAmLmFudC1tZW51LWl0ZW0tYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMzBweCAxNnB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXV0aFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogNzRweDtcblxuICB1bCxcbiAgLmFudC1tZW51LFxuICB1bC5hbnQtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgJi5hbnQtbWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiA3OHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcldyYXBwZXI7XG4iLCIvKiogVGhpcyBpcyBvdXIgYmFzZSBjb21wb25lbnQgZXZlcnkgY29tcG9uZW50cyBtdXN0IGJlIGV4dGVuZCBpdC4gKi9cbmltcG9ydCB7XG4gIHNwYWNlLFxuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIG1pbldpZHRoLFxuICBtYXhXaWR0aCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIGZsZXgsXG4gIG9yZGVyLFxuICBhbGlnblNlbGYsXG4gIGNvbG9yLFxuICBjb21wb3NlLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lZCA9IGtleSA9PiBwcm9wcyA9PiBwcm9wcy50aGVtZVtrZXldO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGNvbXBvc2UoXG4gICgpID0+ICh7IGJveFNpemluZzogJ2JvcmRlci1ib3gnIH0pLFxuICBzcGFjZSxcbiAgd2lkdGgsXG4gIG1pbldpZHRoLFxuICBtYXhXaWR0aCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgZm9udFNpemUsXG4gIGNvbG9yLFxuICBmbGV4LFxuICBvcmRlcixcbiAgYWxpZ25TZWxmLFxuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgZGlzcGxheVxuKTtcblxuYmFzZS5wcm9wVHlwZXMgPSB7XG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlcnMucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJDb2xvci5wcm9wVHlwZXMsXG4gIC4uLndpZHRoLnByb3BUeXBlcyxcbiAgLi4uaGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZsZXgucHJvcFR5cGVzLFxuICAuLi5vcmRlci5wcm9wVHlwZXMsXG4gIC4uLmFsaWduU2VsZi5wcm9wVHlwZXMsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9nb0FyZWEgZnJvbSAnLi9Mb2dvLnN0eWxlJztcblxuY29uc3QgTG9nb05leHQgPSAoeyBjbGFzc05hbWUsIHdpdGhMaW5rLCBsaW5rVG8sIHRpdGxlLCBzcmMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2dvQXJlYSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7d2l0aExpbmsgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmtUb30+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICB7c3JjICYmIDxpbWcgc3JjPXtzcmN9IGFsdD1cIlRyaXBGaW5kZXIuXCIgLz59XG4gICAgICAgICAgICB7dGl0bGUgJiYgPGgzPnt0aXRsZX08L2gzPn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICB7c3JjICYmIDxpbWcgc3JjPXtzcmN9IGFsdD1cIlRyaXBGaW5kZXIuXCIgLz59XG4gICAgICAgICAge3RpdGxlICYmIDxoMz57dGl0bGV9PC9oMz59XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvTG9nb0FyZWE+XG4gICk7XG59O1xuXG5Mb2dvTmV4dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2l0aExpbms6IFByb3BUeXBlcy5ib29sLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvTmV4dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBMb2dvQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvQXJlYTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdUZXh0Jylcbik7XG5cbmNvbnN0IFRleHQgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUZXh0V3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvVGV4dFdyYXBwZXI+XG4pO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ3AnLFxuICBtOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL1VJL0xvZ28vTG9nbyc7XG5pbXBvcnQgRm9vdGVycyBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IExvZ29JbWFnZSBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28tYWx0LnN2Zyc7XG5pbXBvcnQgVmlzYVBheW1lbnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9wYXltZW50XzEuc3ZnJztcbmltcG9ydCBNYXN0ZXJDYXJkUGF5bWVudCBmcm9tICdhc3NldHMvaW1hZ2VzL3BheW1lbnRfMi5zdmcnO1xuaW1wb3J0IENhc2hQYXltZW50IGZyb20gJ2Fzc2V0cy9pbWFnZXMvcGF5bWVudF8zLnN2Zyc7XG5pbXBvcnQgSW50ZXJuZXRCYW5raW5nUGF5bWVudCBmcm9tICdhc3NldHMvaW1hZ2VzL3BheW1lbnRfNC5zdmcnO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2ZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy90d2l0dGVyLnN2Zyc7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IFlvdXR1YmVJY29uIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMveW91dHViZS5zdmcnO1xuXG5jb25zdCBwYXltZW50ID0gW1xuICA8aW1nIHNyYz17VmlzYVBheW1lbnR9IGFsdD1cInZpc2FfcGF5bWVudFwiIC8+LFxuICA8aW1nIHNyYz17TWFzdGVyQ2FyZFBheW1lbnR9IGFsdD1cIm1hc3RlcmNhcmRfcGF5bWVudFwiIC8+LFxuICA8aW1nIHNyYz17Q2FzaFBheW1lbnR9IGFsdD1cImNhc2hfcGF5bWVudFwiIC8+LFxuICA8aW1nIHNyYz17SW50ZXJuZXRCYW5raW5nUGF5bWVudH0gYWx0PVwiaW50ZXJuZXRiYW5raW5nX3BheW1lbnRcIiAvPlxuXTtcbmNvbnN0IHNvY2lhbCA9IFtcbiAgPGltZyBzcmM9e0ZhY2Vib29rSWNvbn0gYWx0PSdGYWNlYm9vaycgLz4sXG4gIDxpbWcgc3JjPXtUd2l0dGVySWNvbn0gYWx0PSdUd2l0dGVyJyAvPixcbiAgPGltZyBzcmM9e0luc3RhZ3JhbUljb259IGFsdD0nSW5zdGFncmFtJyAvPixcbiAgPGltZyBzcmM9e1lvdXR1YmVJY29ufSBhbHQ9J1lvdXR1YmUnIC8+LFxuXTtcblxuY29uc3QgYWJvdXQgPSBbJ0dp4bubaSB0aGnhu4d1JywgJ1R1eeG7g24gZOG7pW5nJywgJ0Jsb2cnXTtcbmNvbnN0IGFnZW50ID0gWyfEkOG7kWkgdMOhYyDEkcSDbmcgbmjhuq1wJywgJ8SQ4buRaSB0w6FjIGxpw6puIGvhur90JywgJ0NoxrDGoW5nIHRyw6xuaCBkw6BuaCBjaG8gxJHhuqFpIGzDvScsICdI4bujcCB0w6FjIGPDuW5nIGNow7puZyB0w7RpJ107XG5jb25zdCB0ZXJtID0gWydDaMOtbmggc8OhY2ggYuG6o28gbeG6rXQnLCAnxJBp4buBdSBraG/huqNuIHPhu60gZOG7pW5nJywgJ1F1eeG7gW4gcmnDqm5nIHTGsCcsICdDaMOtbmggc8OhY2ggQ29va2llJywgJ1F1eSBjaOG6vyBob+G6oXQgxJHhu5luZyBj4bunYSBXZWJzaXRlJ107XG5jb25zdCBndWlkZSA9IFsnSMaw4bubbmcgZOG6q24gdGhhbmggdG/DoW4gdHLhu7FjIHR1eeG6v24nLCAnSMaw4bubbmcgZOG6q24gc+G7rSBk4bulbmcgbcOjIGdp4bqjbSBnacOhJ107XG5cbmNvbnN0IEZvb3RlciA9ICh7IHBhdGggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb290ZXJzXG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgbG9nbz17PExvZ28gd2l0aExpbmsgbGlua1RvPVwiL1wiIHNyYz17TG9nb0ltYWdlfSB0aXRsZT1cIlRyaXBGaW5kZXIuXCIgLz59XG4gICAgICBhZGRyZXNzPXtgMTg4IMSQw7RuZyBC4bqvYywgUC4gVENILCBRLjEyYH1cbiAgICAgIGVtYWlsPXtgaW5mb0B0cmlwZmluZGVyLnZuYH1cbiAgICAgIHBob25lPXtgMTA5MzkgMTAgNzcxMWB9XG4gICAgICBsaWNlbnNlPXtgR2nhuqV5IHBow6lwIGtpbmggZG9hbmggc+G7kSA6IDAzMTUxMzYwNDMgZG8gc+G7nyBLSCbEkFQgY+G6pXAgbmfDoHkgMjgvMDYvMjAxOGB9XG4gICAgICBpbWFnZXM9e3BheW1lbnQubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+KX1cbiAgICAgIGFib3V0PXthYm91dC5tYXAoaXRlbSA9PiA8bGkga2V5PXtpdGVtfT57aXRlbX08L2xpPil9XG4gICAgICBhZ2VudD17YWdlbnQubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbX0+e2l0ZW19PC9saT4pfVxuICAgICAgdGVybT17dGVybS5tYXAoaXRlbSA9PiA8bGkga2V5PXtpdGVtfT57aXRlbX08L2xpPil9XG4gICAgICBndWlkZT17Z3VpZGUubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbX0+e2l0ZW19PC9saT4pfVxuICAgICAgc29jaWFsPXtzb2NpYWwubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+KX1cbiAgICAgIGNvcHlyaWdodD17PHA+wqkgQuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4EgPGIgc3R5bGU9e3sgY29sb3I6ICcjRkY4MDAwJyB9fT5UcmlwIEZpbmRlcjwvYj4gfCBDdW5nIGPhuqVwIGLhu59pIDxiPkFkb3JhIFRvdXI8L2I+PC9wPn1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCB7IElvSW9zQ2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL1VJL0xvZ28vTG9nbyc7XG5pbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1VJL1RleHQvVGV4dCc7XG5pbXBvcnQgeyBCdXR0b24sIERyYXdlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdjb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gJ2NvbnRleHQvTGF5b3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdjb250ZXh0L0F1dGhQcm92aWRlcic7XG5pbXBvcnQgeyBBR0VOVF9QUk9GSUxFX1BBR0UgfSBmcm9tICdzZXR0aW5ncy9jb25zdGFudCc7XG5pbXBvcnQgSGVhZGVyV3JhcHBlciwge1xuICBNb2JpbGVOYXZiYXIsXG4gIENsb3NlRHJhd2VyLFxuICBBdmF0YXJXcmFwcGVyLFxuICBBdmF0YXJJbWFnZSxcbiAgQXZhdGFySW5mbyxcbiAgTG9nb0FyZWEsXG59IGZyb20gJy4vSGVhZGVyLnN0eWxlJztcbi8vIGR1bW15IGltYWdlc1xuaW1wb3J0IHRyaXBGaW5kZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLWFsdC5zdmcnO1xuXG5jb25zdCBMb2dvSWNvbiA9ICgpID0+IChcbiAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjcuOTg0XCIgdmlld0JveD1cIjAgMCAyNSAyNy45ODRcIj5cbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNS40NSwyLjc2N2EzNC41LDM0LjUsMCwwLDAtNCwxLjE0MywzNS4yNjIsMzUuMjYyLDAsMCwwLTMuNzcxLDEuNTQ1LDI2LjA2OSwyNi4wNjksMCwwLDAtMy4xNzksMS44LDI2LjA2OCwyNi4wNjgsMCwwLDAtMy4xOTEtMS44QTM1LjI2MiwzNS4yNjIsMCwwLDAsNy41NCwzLjkwOSwzNC41LDM0LjUsMCwwLDAsMy41NSwyLjc2N0wyLDIuNDVWMTcuOTRhMTIuNSwxMi41LDAsMSwwLDI1LDBWMi40NVpNMTQuNSwxMC40OTJjMi4zMzksMS45NiwzLjUyMiw0LjE5LDMuNTEyLDYuNjA4YTMuNTEyLDMuNTEyLDAsMSwxLTcuMDI0LDBoMEMxMC45OCwxNC42NiwxMi4xNjIsMTIuNDQyLDE0LjUsMTAuNDkyWm05LjkxMyw3LjQ0OGE5LjkxNSw5LjkxNSwwLDAsMS0xOS44MzEsMFY1LjY5YTMxLjgsMzEuOCwwLDAsMSw3Ljc0OCwzLjI1OSwxMy40MywxMy40MywwLDAsMC0yLjM0NCwyLjczN0E5LjkyOSw5LjkyOSwwLDAsMCw4LjQsMTcuMDk1YTYuMSw2LjEsMCwxLDAsMTIuMiwwLDkuOTMyLDkuOTMyLDAsMCwwLTEuNTg3LTUuNDEyLDEzLjQyNywxMy40MjcsMCwwLDAtMi4zNDYtMi43NDIsMjkuNzM3LDI5LjczNywwLDAsMSw1LjU4Ni0yLjU3N2MuODE5LS4yODQsMS41NTktLjUxLDIuMTU4LS42NzVaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yIC0yLjQ1KVwiXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEF1dGhNZW51ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vQXV0aE1lbnUnKSk7XG5jb25zdCBNYWluTWVudSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL01haW5NZW51JykpO1xuY29uc3QgTW9iaWxlTWVudSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL01vYmlsZU1lbnUnKSk7XG5jb25zdCBQcm9maWxlTWVudSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL1Byb2ZpbGVNZW51JykpO1xuY29uc3QgTmF2YmFyU2VhcmNoID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTmF2YmFyU2VhcmNoJykpO1xuXG5jb25zdCBIZWFkZXIgPSAoeyByb3V0ZXIgfSkgPT4ge1xuICBjb25zdCB7IGxvZ2dlZEluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW3sgc2VhcmNoVmlzaWJpbGl0eSB9XSA9IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaWRlYmFySGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyVHlwZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gJ3RyYW5zcGFyZW50JyA6ICdkZWZhdWx0JztcbiAgY29uc3QgQXZhdGFySW1nID1cbiAgICAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vcmVkcXRlYW0uY29tL2lzb21vcnBoaWMtcmVsb2FkZWQtaW1hZ2UvcHJvZmlsZXBpYy5wbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlcldyYXBwZXI+XG4gICAgICA8U3RpY2t5IHRvcD17MH0gaW5uZXJaPXsxMDAxfSBhY3RpdmVDbGFzcz1cImlzSGVhZGVyU3RpY2t5XCI+XG4gICAgICAgIDxOYXZiYXJcbiAgICAgICAgICBsb2dvPXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtoZWFkZXJUeXBlID09PSAndHJhbnNwYXJlbnQnICYmIDxMb2dvSWNvbiAvPn1cbiAgICAgICAgICAgICAgPExvZ28gd2l0aExpbmsgbGlua1RvPVwiL1wiIHNyYz17dHJpcEZpbmRlcn0gdGl0bGU9XCJUcmlwRmluZGVyLlwiIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2TWVudT17PE1haW5NZW51IC8+fVxuICAgICAgICAgIGF1dGhNZW51PXs8QXV0aE1lbnUgLz59XG4gICAgICAgICAgaXNMb2dpbj17bG9nZ2VkSW59XG4gICAgICAgICAgYXZhdGFyPXs8TG9nbyBzcmM9e0F2YXRhckltZ30gLz59XG4gICAgICAgICAgcHJvZmlsZU1lbnU9ezxQcm9maWxlTWVudSBhdmF0YXI9ezxMb2dvIHNyYz17QXZhdGFySW1nfSAvPn0gLz59XG4gICAgICAgICAgaGVhZGVyVHlwZT17aGVhZGVyVHlwZX1cbiAgICAgICAgICBzZWFyY2hDb21wb25lbnQ9ezxOYXZiYXJTZWFyY2ggLz59XG4gICAgICAgICAgbG9jYXRpb249e3JvdXRlcn1cbiAgICAgICAgICBzZWFyY2hWaXNpYmlsaXR5PXtzZWFyY2hWaXNpYmlsaXR5fVxuICAgICAgICAvPlxuICAgICAgICA8TW9iaWxlTmF2YmFyIGNsYXNzTmFtZT17aGVhZGVyVHlwZX0+XG4gICAgICAgICAgPExvZ29BcmVhPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAge2hlYWRlclR5cGUgPT09ICd0cmFuc3BhcmVudCcgJiYgPExvZ29JY29uIC8+fVxuICAgICAgICAgICAgICA8TG9nbyB3aXRoTGluayBsaW5rVG89XCIvXCIgc3JjPXt0cmlwRmluZGVyfSB0aXRsZT1cIlRyaXBGaW5kZXIuXCIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPE5hdmJhclNlYXJjaCAvPlxuICAgICAgICAgIDwvTG9nb0FyZWE+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZy1idG4gJHtzdGF0ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3NpZGViYXJIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNsb3NlPXtzaWRlYmFySGFuZGxlcn1cbiAgICAgICAgICAgIHdpZHRoPVwiMjg1cHhcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLWhlYWRlclwiXG4gICAgICAgICAgICB2aXNpYmxlPXtzdGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2xvc2VEcmF3ZXI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lkZWJhckhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxJb0lvc0Nsb3NlIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9DbG9zZURyYXdlcj5cbiAgICAgICAgICAgIHtsb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgPEF2YXRhcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhckltYWdlPlxuICAgICAgICAgICAgICAgICAgPExvZ28gc3JjPXtBdmF0YXJJbWd9IC8+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXJJbWFnZT5cbiAgICAgICAgICAgICAgICA8QXZhdGFySW5mbz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDNcIiBjb250ZW50PVwiTm92YSBTY290aWFcIiAvPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17QUdFTlRfUFJPRklMRV9QQUdFfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBQcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFySW5mbz5cbiAgICAgICAgICAgICAgPC9BdmF0YXJXcmFwcGVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEF1dGhNZW51IGNsYXNzTmFtZT1cImF1dGgtbWVudVwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPE1vYmlsZU1lbnUgY2xhc3NOYW1lPVwibWFpbi1tZW51XCIgLz5cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgPC9Nb2JpbGVOYXZiYXI+XG4gICAgICA8L1N0aWNreT5cbiAgICA8L0hlYWRlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAudHJhbnNwYXJlbnQge1xuICAgICAgLm5hdmJhcl9zZWFyY2gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICBuYXYge1xuICAgICAgJjpub3QoLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGEge1xuICAgICAgICAgID4gaDMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3RpY2t5LW91dGVyLXdyYXBwZXIge1xuICAgIG5hdiB7XG4gICAgICAmLmlzX3RyYW5zcGFyZW50IHtcbiAgICAgICAgPiBkaXYgPiBkaXYge1xuICAgICAgICAgID4gc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtbWVudTpub3QoLmFjdGl2ZSkge1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudHJhbnNwYXJlbnQge1xuICAgICAgICA+IGRpdiA+IGRpdiB7XG4gICAgICAgICAgPiBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pc0hlYWRlclN0aWNreSB7XG4gICAgICBuYXYge1xuICAgICAgICAmLmlzX3RyYW5zcGFyZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICAgPiBkaXYgPiBkaXYge1xuICAgICAgICAgICAgPiBzdmcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbnQtbWVudSB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRoX21lbnUge1xuICAgICAgICAgICAgLmFudC1tZW51IHtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnRyYW5zcGFyZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICAgPiBkaXYgPiBkaXYge1xuICAgICAgICAgICAgPiBzdmcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oYW1idXJnLWJ0biB7XG4gICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb2JpbGVOYXZiYXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogODJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJi5kZWZhdWx0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gIH1cblxuICAuaGFtYnVyZy1idG4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgID4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXIsXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgID4gc3BhbiB7XG4gICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYudHJhbnNwYXJlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xuXG4gICAgLmhhbWJ1cmctYnRuIHtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgPiBhIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZURyYXdlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAxMnB4O1xuXG4gID4gYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXZhdGFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMicsICcjRjdGN0Y3Jyl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEF2YXRhckltYWdlID0gc3R5bGVkLmRpdmBcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEF2YXRhckluZm8gPSBzdHlsZWQuZGl2YFxuICBoMyB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdmJhclNlYXJjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMzBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIG1heC13aWR0aDogMzIwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLm1hcF9hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjAnLCAnI0VCRUJFQicpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYig3MiwgNzIsIDcyKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG4gIH1cblxuICA+IHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0IGFzIExheW91dFdyYXBwZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBMYXlvdXRQcm92aWRlciBmcm9tICdjb250ZXh0L0xheW91dFByb3ZpZGVyJztcbmltcG9ydCB7XG4gIExJU1RJTkdfUE9TVFNfUEFHRSxcbiAgTE9HSU5fUEFHRSxcbiAgUkVHSVNUUkFUSU9OX1BBR0UsXG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcbiAgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFLFxuICBBRERfSE9URUxfUEFHRSxcbiAgUFJJQ0lOR19QTEFOX1BBR0UsXG4gIFNJTkdMRV9QT1NUX1BBR0UsXG4gIFBSSVZBQ1lfUEFHRSxcbiAgQ0hBTkdFX1BBU1NXT1JEX1BBR0UsXG4gIEZPUkdFVF9QQVNTV09SRF9QQUdFLFxuICBBR0VOVF9JTUFHRV9FRElUX1BBR0UsXG4gIEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFLFxufSBmcm9tICdzZXR0aW5ncy9jb25zdGFudCc7XG5cbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0V3JhcHBlcjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHJvdXRlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dFdyYXBwZXI+XG4gICAgICA8TGF5b3V0UHJvdmlkZXI+XG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IExPR0lOX1BBR0UgfHxcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBDSEFOR0VfUEFTU1dPUkRfUEFHRSB8fFxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IEZPUkdFVF9QQVNTV09SRF9QQUdFIHx8XG4gICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gUkVHSVNUUkFUSU9OX1BBR0UgPyAoXG4gICAgICAgICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IExJU1RJTkdfUE9TVFNfUEFHRSB8fFxuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBQUklDSU5HX1BMQU5fUEFHRSB8fFxuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBBRERfSE9URUxfUEFHRSB8fFxuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBBR0VOVF9QUk9GSUxFX1BBR0UgfHxcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gQ0hBTkdFX1BBU1NXT1JEX1BBR0UgfHxcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gRk9SR0VUX1BBU1NXT1JEX1BBR0UgfHxcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gUFJJVkFDWV9QQUdFIHx8XG4gICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09XG4gICAgICAgICAgICAgIGAke0FHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSArIEFHRU5UX0lNQUdFX0VESVRfUEFHRX1gIHx8XG4gICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09XG4gICAgICAgICAgICAgIGAke0FHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSArIEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFfWAgfHxcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFID8gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMzcHgnIH19IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Rm9vdGVyIHBhdGg9e3JvdXRlci5wYXRobmFtZSA9PT0gU0lOR0xFX1BPU1RfUEFHRX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dFByb3ZpZGVyPlxuICAgIDwvTGF5b3V0V3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGF5b3V0KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGZha2VVc2VyRGF0YSA9IHtcbiAgaWQ6IDEsXG4gIG5hbWU6ICdKaG9uIERvZScsXG4gIGF2YXRhcjpcbiAgICAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vcmVkcXRlYW0uY29tL2lzb21vcnBoaWMtcmVsb2FkZWQtaW1hZ2UvcHJvZmlsZXBpYy5wbmcnLFxuICByb2xlczogWydVU0VSJywgJ0FETUlOJ10sXG59O1xuXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBzaWduSW4gPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLCAnc2lnbiBpbiBmb3JtIFByb3BzJyk7XG4gICAgc2V0VXNlcihmYWtlVXNlckRhdGEpO1xuICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgIFJvdXRlci5wdXNoKGAvYCk7XG4gIH07XG5cbiAgY29uc3Qgc2lnblVwID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcywgJ3NpZ24gdXAgZm9ybSBQcm9wcycpO1xuICAgIHNldFVzZXIoZmFrZVVzZXJEYXRhKTtcbiAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICBSb3V0ZXIucHVzaChgL2ApO1xuICB9O1xuXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIHNldExvZ2dlZEluKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbG9nZ2VkSW4sXG4gICAgICAgIGxvZ091dCxcbiAgICAgICAgc2lnbkluLFxuICAgICAgICBzaWduVXAsXG4gICAgICAgIHVzZXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDw+e3Byb3BzLmNoaWxkcmVufTwvPlxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBMYXlvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNlYXJjaFZpc2liaWxpdHk6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX1RPUF9TRUFSQ0hCQVInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZpc2liaWxpdHk6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ0hJREVfVE9QX1NFQVJDSEJBUic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MYXlvdXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlU3RhdGVWYWx1ZSA9ICgpID0+IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVBEQVRFJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaFByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHF1ZXJ5KTtcbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCAncmVhY3QtaW1hZ2UtZ2FsbGVyeS9zdHlsZXMvY3NzL2ltYWdlLWdhbGxlcnkuY3NzJztcbmltcG9ydCAncmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3MnO1xuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XG5pbXBvcnQgJ0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLmNvcmUubWluLmNzcyc7XG5pbXBvcnQgJ2FudGQvbGliL2RhdGUtcGlja2VyL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lcy9kZWZhdWx0LnRoZW1lJztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnYXNzZXRzL3N0eWxlL0dsb2JhbC5zdHlsZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbnRhaW5lci9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSAnY29udGV4dC9BdXRoUHJvdmlkZXInO1xuaW1wb3J0IHsgU2VhcmNoUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0L1NlYXJjaFByb3ZpZGVyJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCByb3V0ZXIsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8U2VhcmNoUHJvdmlkZXIgcXVlcnk9e3F1ZXJ5fT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBHZW5lcmFsIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRSA9ICcvJztcbmV4cG9ydCBjb25zdCBBR0VOVFNfUEFHRSA9ICcvYWdlbnRzJztcbmV4cG9ydCBjb25zdCBUUkFWRUxfUEFHRSA9ICcvdHJhdmVsJztcbmV4cG9ydCBjb25zdCBTSU1fV0lGSV9QQUdFID0gJy9zaW0td2lmaSc7XG5leHBvcnQgY29uc3QgU0hPUF9QQUdFID0gJy9zaG9wJztcbmV4cG9ydCBjb25zdCBWSVNBX1BBR0UgPSAnL3Zpc2EnO1xuZXhwb3J0IGNvbnN0IEJMT0dfUEFHRSA9ICcvYmxvZyc7XG5leHBvcnQgY29uc3QgQ0hFQ0tfVklTQSA9ICcvY2hlY2stdmlzYSc7XG5cbi8vIExpc3RpbmcgU2luZ2xlIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IExJU1RJTkdfUE9TVFNfUEFHRSA9ICcvbGlzdGluZyc7XG5leHBvcnQgY29uc3QgU0lOR0xFX1BPU1RfUEFHRSA9ICcvcG9zdCc7XG5cbi8vIEZsaWdodCBQYWdlIFNlY3Rpb25cbmV4cG9ydCBjb25zdCBGTElHSFRfU0VBUkNIX1BBR0UgPSAnL2ZsaWdodC1yZXN1bHQnO1xuXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfUEFHRSA9ICcvcHJvZmlsZSc7XG5leHBvcnQgY29uc3QgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFID0gJy9hY2NvdW50LXNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfSU1BR0VfRURJVF9QQUdFID0gJy9jaGFuZ2UtaW1hZ2UnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFID0gJy9jaGFuZ2UtcGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFID0gJy9mYXZvdXJpdGUtcG9zdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9DT05UQUNUID0gJy9jb250YWN0JztcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcblxuLy8gT3RoZXIgUGFnZXNcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcbmV4cG9ydCBjb25zdCBQUklWQUNZX1BBR0UgPSAnL3ByaXZhY3knO1xuXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcbmV4cG9ydCBjb25zdCBMT0dJTl9QQUdFID0gJy9zaWduLWluJztcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fUEFHRSA9ICcvc2lnbi11cCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXT1JEX1BBR0UgPSAnL2ZvcmdldC1wYXNzd29yZCc7XG4iLCJjb25zdCBkZWZhdWx0VGhlbWUgPSB7XG4gIGJyZWFrcG9pbnRzOiBbJzQ4MXB4JywgJzc2OHB4JywgJzk5MnB4JywgJzEyMDFweCcsICcxNDQxcHgnXSxcbiAgcHJpbWFyeTogW1xuICAgICcjMDA4NDg5JywgLy8gMDogRGVmYXVsdFxuICAgICcjMzk5QzlGJywgLy8gMTogQ2hhcnRcbiAgXSxcbiAgY29sb3I6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IEJsYWNrXG4gICAgJyNmZmZmZmYnLCAvLyAxOiBXaGl0ZVxuICAgICcjRjdGN0Y3JywgLy8gMjogRHJvcGRvd24gSG92ZXJcbiAgICAnI0U5RThFOCcsIC8vIDM6IEJ1bGxldCBiZ1xuICAgICcjRkM1QzYzJywgLy8gNDogQWN0aXZlIEZhdm9yaXRlXG4gICAgJ3JnYmEoMCwgMCwgMCwgMC4yNSknLCAvLyA1OiBJbmFjdGl2ZSBGYXZvcml0ZVxuICAgICcjMjczMzQzJywgLy8gNjogQWdlbnQgU29jaWFsIEljb25cbiAgICAnIzNiNTk5OCcsIC8vIDc6IEZhY2Vib29rXG4gICAgJyM1NUFERUUnLCAvLyA4OiBUd2l0dGVyXG4gICAgJyNGRkY5MDAnLCAvLyA5OiBTbmFwY2hhdFxuICAgICcjZGQ0YjM5JywgLy8gMTA6IEdvb2dsZSBQbHVzXG4gICAgJyNGNjFDMEQnLCAvLyAxMTogWW91dHViZVxuICAgICcjZTQ0MDVmJywgLy8gMTI6IEluc3RhZ3JhbVxuICAgICcjRTJFMkUyJywgLy8gMTM6IFJhbmdlIENvbG9yXG4gICAgJyMwMEFDRUUnLCAvLyAxNDogR2l0aHViIENvbG9yXG4gICAgJyNGRkNCMkInLCAvLyAxNTogRmlyZWJhc2UgQ29sb3JcbiAgICAnIzQ4NDg0OCcsIC8vIDE2OiBMaW5rIGJ1dHRvblxuICBdLFxuICB3YXJuaW5nOiBbXG4gICAgJyNGMjkxMDAnLCAvLyAwOiBXYXJuaW5nXG4gIF0sXG4gIHN1Y2Nlc3M6IFtcbiAgICAnIzAwQkI1RCcsIC8vIDA6IFN1Y2Nlc3NcbiAgXSxcbiAgZXJyb3I6IFtcbiAgICAnI0Y5NTAzRCcsIC8vIDA6IEVycm9yXG4gICAgJ3JnYmEoMjQ5LCA4MCwgNjEsIDAuMDgpJywgLy8gMDogRXJyb3IgTGlnaHQgQmdcbiAgXSxcbiAgdGV4dDogW1xuICAgICcjMkMyQzJDJywgLy8gMDogSGVhZGluZ1xuICAgICcjOTA5MDkwJywgLy8gMTogTWV0YSBUZXh0XG4gICAgJyM3Nzc3NzcnLCAvLyAyOiBUZXh0IEluZm9cbiAgXSxcbiAgYm9yZGVyOiBbXG4gICAgJyNFQkVCRUInLCAvLyAwOiBMaWdodCBib3JkZXJcbiAgICAnI0U4RThFOCcsIC8vIDE6IERlZmF1bHQgQm9yZGVyXG4gICAgJ3JnYmEoNTcsIDE1MSwgMjQ3LCAwLjM1KScsIC8vIDI6IEFjdGl2ZSBMaWdodCBCb3JkZXJcbiAgICAnI0U2RTZFNicsIC8vIDM6IFByaWNpbmcgQm9yZGVyXG4gIF0sXG4gIGJveFNoYWRvdzogW1xuICAgICdyZ2JhKDI2LCA2OCwgMTE2LCAwLjE2KScsIC8vIDA6IENhcmQgaG92ZXJcbiAgICAncmdiYSgwLCAwLCAwLCAwLjE2KScsIC8vIDE6IENhcm91c2VsIEJ1dHRvbiBzaGFkb3dcbiAgXSxcbiAgZm9udHM6IHtcbiAgICBwcmltYXJ5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUaGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9iYWNrLXRvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb21wb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=