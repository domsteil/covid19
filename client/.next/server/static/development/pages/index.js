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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/polyfill.js":
/*!*************************!*\
  !*** ./lib/polyfill.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i);

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
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

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
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
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
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
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
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
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
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
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
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

    const newData = Object.assign(Object.assign({}, data), {
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


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
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

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
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
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
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

    if (method !== 'pushState' || utils_1.getURL() !== as) {
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
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

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
    this.notify(data);
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
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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
    return utils_1.loadGetInitialProps(App, {
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
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    const decode = decodeURIComponent;
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

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/components/OrganizationContext.js":
/*!***********************************************!*\
  !*** ./src/components/OrganizationContext.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OrganizationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (OrganizationContext);

/***/ }),

/***/ "./src/components/cases/CaseForm.js":
/*!******************************************!*\
  !*** ./src/components/cases/CaseForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CaseForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useFormInput */ "./src/components/useFormInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui/commonjs/typography/src/Text */ "evergreen-ui/commonjs/typography/src/Text");
/* harmony import */ var evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui/commonjs/buttons/src/Button */ "evergreen-ui/commonjs/buttons/src/Button");
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui/commonjs/layers/src/Card */ "evergreen-ui/commonjs/layers/src/Card");
/* harmony import */ var evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OrganizationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OrganizationContext */ "./src/components/OrganizationContext.js");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! evergreen-ui/commonjs/toaster/src */ "evergreen-ui/commonjs/toaster/src");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\covid19\\client\\src\\components\\cases\\CaseForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function CaseForm(props) {
  const caseId = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const caseNumber = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const summary = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const location = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const country = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const latitude = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const longitude = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const date = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const caseName = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const caseStatus = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const casePriority = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const resolver = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');

  let createCase = () => {
    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`https://stateset.network/api/stateset/createCase?`, querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
      caseId: caseId,
      caseName: caseName,
      caseNumber: caseNumber,
      summary: summary,
      country: country,
      location: location,
      latitude: latitude,
      longitude: longitude,
      date: date,
      caseStatus: caseStatus,
      casePriority: casePriority,
      resolver: resolver
    }), axiosConfig).then(res => {
      const caseId = res.data.caseId;
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default.a.success('Case ' + caseId + ' has been created.');
    }).catch(error => {
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default.a.danger(res.data);
    });
  };

  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
    elevation: 1,
    background: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-494372346" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-494372346" + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: createCase,
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 700,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Case Id"), __jsx("input", _extends({}, caseId, {
    className: "jsx-494372346" + " " + (caseId && caseId.className != null && caseId.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Case Name"), __jsx("input", _extends({}, caseName, {
    className: "jsx-494372346" + " " + (caseName && caseName.className != null && caseName.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Description"), __jsx("input", _extends({}, summary, {
    className: "jsx-494372346" + " " + (summary && summary.className != null && summary.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Country"), __jsx("input", _extends({}, country, {
    className: "jsx-494372346" + " " + (country && country.className != null && country.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Latitude"), __jsx("input", _extends({}, latitude, {
    className: "jsx-494372346" + " " + (latitude && latitude.className != null && latitude.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Longitude"), __jsx("input", _extends({}, longitude, {
    className: "jsx-494372346" + " " + (longitude && longitude.className != null && longitude.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Date"), __jsx("input", _extends({}, date, {
    className: "jsx-494372346" + " " + (date && date.className != null && date.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Case Number"), __jsx("input", _extends({}, caseNumber, {
    className: "jsx-494372346" + " " + (caseNumber && caseNumber.className != null && caseNumber.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Case Status"), __jsx("input", _extends({}, caseStatus, {
    className: "jsx-494372346" + " " + (caseStatus && caseStatus.className != null && caseStatus.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Case Priority"), __jsx("input", _extends({}, casePriority, {
    className: "jsx-494372346" + " " + (casePriority && casePriority.className != null && casePriority.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    appearance: "primary",
    type: "submit",
    invert: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Submit New Case"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "494372346",
    __self: this
  }, ".column.jsx-494372346{text-align:left;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.button.jsx-494372346{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.login.jsx-494372346{color:#FFF;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}h3.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:17px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}.case.jsx-494372346{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;margin-left:8px;}.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;text-align:center;}@media screen and (max-width:960px){.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-494372346{width:100%;padding:1.5rem 0;text-align:center;max-width:330px;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcY2FzZXNcXENhc2VGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHb0IsQUFHeUIsQUFTUSxBQStCYixBQUl5SCxBQVdBLEFBWXJILEFBWU8sQUFRRSxBQUlYLEFBTzJILFdBekQxSSxBQW1EcUIsSUF4QkMsQ0FuRUgsUUFTQyxJQW1GRSxLQTNGSixFQW1FQSxPQTFESyxJQW1GSCxHQTNGQyxFQW1FTCxXQXlCZCxDQW5Gc0IsRUEyREcsR0FuRVQsVUE0RUMsQUFRRSxNQW5GRCxDQVFPLEtBMkRQLEtBU0EsQUFRbEIsT0FuRkYsTUFtRW9CLEVBM0RBLEdBb0VwQixhQVJrQixFQTNERixJQThCQSxBQVdBLEFBMkNJLFVBbkZDLEFBMkRILElBN0JELEFBV0EsQUEyQ0ksWUF4QnJCLEdBM0RjLEFBOEJPLEFBV0EsQUEyQ0ksWUFuRlgsT0E4Qk0sQUFXQSxBQTJDSSxLQW5GTixhQThCQyxBQVdBLEFBMkNJLEdBbkZMLGNBOEJMLEFBV0EsQUEyQ0ksRUFuRkEsU0E4QkcsQUFXQSxBQTJDSSxNQW5GRyxZQThCM0IsQUFXQSxBQTJDSSxXQW5Ga0Msa0NBQ25CLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0Msa0JBQ0Esa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXGNvbXBvbmVudHNcXGNhc2VzXFxDYXNlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRm9ybUlucHV0IGZyb20gJy4uL3VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy90eXBvZ3JhcGh5L3NyYy9UZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9idXR0b25zL3NyYy9CdXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdldmVyZ3JlZW4tdWkvY29tbW9uanMvbGF5ZXJzL3NyYy9DYXJkJztcclxuaW1wb3J0IE9yZ2FuaXphdGlvbkNvbnRleHQgZnJvbSAnLi4vT3JnYW5pemF0aW9uQ29udGV4dCc7XHJcbmltcG9ydCB0b2FzdGVyIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy90b2FzdGVyL3NyYydcclxuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2VGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgY2FzZUlkID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VOdW1iZXIgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGxhdGl0dWRlID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGxvbmdpdHVkZSA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBkYXRlID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VOYW1lID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VTdGF0dXMgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgY2FzZVByaW9yaXR5ID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHJlc29sdmVyID0gdXNlRm9ybUlucHV0KCcnKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlQ2FzZSA9ICgpID0+IHtcclxuICBcclxuICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIlBPU1QsR0VULE9QVElPTlMsIFBVVCwgREVMRVRFXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vc3RhdGVzZXQubmV0d29yay9hcGkvc3RhdGVzZXQvY3JlYXRlQ2FzZT9gLCBcclxuICAgICAgcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgY2FzZUlkOiBjYXNlSWQsIFxyXG4gICAgICAgIGNhc2VOYW1lOiBjYXNlTmFtZSxcclxuICAgICAgICBjYXNlTnVtYmVyOiBjYXNlTnVtYmVyLFxyXG4gICAgICAgIHN1bW1hcnk6IHN1bW1hcnksXHJcbiAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlLFxyXG4gICAgICAgIGRhdGU6IGRhdGUsIFxyXG4gICAgICAgIGNhc2VTdGF0dXM6IGNhc2VTdGF0dXMsXHJcbiAgICAgICAgY2FzZVByaW9yaXR5OiBjYXNlUHJpb3JpdHksIFxyXG4gICAgICAgIHJlc29sdmVyOiByZXNvbHZlciB9KSwgIGF4aW9zQ29uZmlnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBjYXNlSWQgPSByZXMuZGF0YS5jYXNlSWQ7XHJcbiAgXHJcbiAgICAgICAgdG9hc3Rlci5zdWNjZXNzKFxyXG4gICAgICAgICAgJ0Nhc2UgJyArIGNhc2VJZCArICcgaGFzIGJlZW4gY3JlYXRlZC4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRvYXN0ZXIuZGFuZ2VyKHJlcy5kYXRhKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxDYXJkIGVsZXZhdGlvbj17MX0gYmFja2dyb3VuZD1cIndoaXRlXCIgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVDYXNlfT5cclxuICAgICAgICA8VGV4dCBzaXplPXs3MDB9PkNhc2UgSWQ8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uY2FzZUlkfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBOYW1lPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmNhc2VOYW1lfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+RGVzY3JpcHRpb248L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uc3VtbWFyeX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkNvdW50cnk8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uY291bnRyeX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkxhdGl0dWRlPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmxhdGl0dWRlfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+TG9uZ2l0dWRlPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmxvbmdpdHVkZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkRhdGU8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uZGF0ZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkNhc2UgTnVtYmVyPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmNhc2VOdW1iZXJ9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8VGV4dD5DYXNlIFN0YXR1czwvVGV4dD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlU3RhdHVzfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBQcmlvcml0eTwvVGV4dD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlUHJpb3JpdHl9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaW52ZXJ0PlN1Ym1pdCBOZXcgQ2FzZTwvQnV0dG9uPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAuY2FzZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjkxNjY3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMzZDQ2NGQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzRjOTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\cases\\\\CaseForm.js */")));
}

/***/ }),

/***/ "./src/components/container.js":
/*!*************************************!*\
  !*** ./src/components/container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\covid19\\client\\src\\components\\container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    center,
    vCenter,
    dark,
    gray,
    grey,
    wide,
    black,
    small,
    padding,
    overflow,
    minHeight,
    dotBackground,
    children,
    mobileStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["center", "vCenter", "dark", "gray", "grey", "wide", "black", "small", "padding", "overflow", "minHeight", "dotBackground", "children", "mobileStyle"]);

  return __jsx("div", _extends({}, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2868249317", [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', grey ? 'background-color: #FFFFFF' : '', dark ? 'background-image: linear-gradient(to bottom, #FFFFFF  0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', black ? 'background-color: #FFFFFF;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? `min-height: ${minHeight}px;` : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? `
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);
            background-size: 28px 28px;
          ` : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || '']]]) + " " + (props && props.className != null && props.className || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2868249317",
    dynamic: [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', grey ? 'background-color: #FFFFFF' : '', dark ? 'background-image: linear-gradient(to bottom, #FFFFFF  0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', black ? 'background-color: #FFFFFF;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? `min-height: ${minHeight}px;` : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? `
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);
            background-size: 28px 28px;
          ` : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || ''],
    __self: undefined
  }, `.__jsx-style-dynamic-selector{width:100%;margin:0 auto;padding:${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};${wide && !small ? '' : 'max-width: 1024px;'} ${small ? 'max-width: 682px;' : ''} ${center ? 'text-align: center;' : ''} ${grey ? 'background-color: #FFFFFF' : ''} ${dark ? 'background-image: linear-gradient(to bottom, #FFFFFF  0%, #323232 100%);' : ''} ${dark ? 'color: #f1f1f1;' : ''} ${black ? 'background-color: #FFFFFF;' : ''} ${gray ? 'background-color: #f6f6f6;' : ''} ${wide && !overflow ? 'overflow: hidden;' : ''} ${minHeight ? `min-height: ${minHeight}px;` : ''} ${vCenter ? 'display: flex; align-items: center;' : ''} ${dotBackground ? `
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);
            background-size: 28px 28px;
          ` : ''};}.__jsx-style-dynamic-selector:after{content:'';display:table;clear:both;}@media screen and (max-width:960px){div.__jsx-style-dynamic-selector{padding:${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};}}@media screen and (max-width:640px){div.__jsx-style-dynamic-selector{padding:${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};${mobileStyle || ''};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CUyxBQUdzQixBQWtCQSxBQVEyRCxBQU1BLFdBL0J4RCxBQWtCQSxjQWpCb0QsQUFrQnZELFdBQ2IsZ0NBTUUsQUFPRCx1QkFuQkYsT0FtQkcseVZBbkJGIiwiZmlsZSI6IkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHtcclxuICAgIGNlbnRlcixcclxuICAgIHZDZW50ZXIsXHJcbiAgICBkYXJrLFxyXG4gICAgZ3JheSxcclxuICAgIGdyZXksXHJcbiAgICB3aWRlLFxyXG4gICAgYmxhY2ssXHJcbiAgICBzbWFsbCxcclxuICAgIHBhZGRpbmcsXHJcbiAgICBvdmVyZmxvdyxcclxuICAgIG1pbkhlaWdodCxcclxuICAgIGRvdEJhY2tncm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIG1vYmlsZVN0eWxlLFxyXG4gICAgLi4ucHJvcHNcclxuICB9KSA9PiAoXHJcbiAgICA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzRyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMXJlbSd9O1xyXG4gICAgICAgICAgJHt3aWRlICYmICFzbWFsbCA/ICcnIDogJ21heC13aWR0aDogMTAyNHB4Oyd9XHJcbiAgICAgICAgICAke3NtYWxsID8gJ21heC13aWR0aDogNjgycHg7JyA6ICcnfVxyXG4gICAgICAgICAgJHtjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cclxuICAgICAgICAgICR7Z3JleSA/ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGJyA6ICcnfVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgZGFya1xyXG4gICAgICAgICAgICAgID8gJ2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgIDAlLCAjMzIzMjMyIDEwMCUpOydcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAke2RhcmsgPyAnY29sb3I6ICNmMWYxZjE7JyA6ICcnfVxyXG4gICAgICAgICAgJHtibGFjayA/ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOycgOiAnJ31cclxuICAgICAgICAgICR7Z3JheSA/ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2OycgOiAnJ31cclxuICAgICAgICAgICR7d2lkZSAmJiAhb3ZlcmZsb3cgPyAnb3ZlcmZsb3c6IGhpZGRlbjsnIDogJyd9XHJcbiAgICAgICAgICAke21pbkhlaWdodCA/IGBtaW4taGVpZ2h0OiAke21pbkhlaWdodH1weDtgIDogJyd9XHJcbiAgICAgICAgICAke3ZDZW50ZXIgPyAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsnIDogJyd9XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBkb3RCYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNEN0Q3RDcsICNEN0Q3RDcgLjhweCwgI0ZGRiAuOHB4LCAjRkZGKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4IDI4cHg7XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6YWZ0ZXIge1xyXG4gICAgICAgICAgLy8gQkZDXHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzRyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMnJlbSd9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7cGFkZGluZyA/ICc0cmVtJyA6ICcwJ30gJHt3aWRlID8gJzAnIDogJzFyZW0nfTtcclxuICAgICAgICAgICAgJHttb2JpbGVTdHlsZSB8fCAnJ31cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7Il19 */
/*@ sourceURL=C:\\covid19\\client\\src\\components\\container.js */`), children);
});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var evergreen_ui_commonjs_avatar_src_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui/commonjs/avatar/src/Avatar */ "evergreen-ui/commonjs/avatar/src/Avatar");
/* harmony import */ var evergreen_ui_commonjs_avatar_src_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_avatar_src_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui/commonjs/tabs/src/Tab */ "evergreen-ui/commonjs/tabs/src/Tab");
/* harmony import */ var evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui/commonjs/buttons/src/Button */ "evergreen-ui/commonjs/buttons/src/Button");
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var evergreen_ui_commonjs_icon_src_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui/commonjs/icon/src/Icon */ "evergreen-ui/commonjs/icon/src/Icon");
/* harmony import */ var evergreen_ui_commonjs_icon_src_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_icon_src_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var evergreen_ui_commonjs_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! evergreen-ui/commonjs/buttons */ "evergreen-ui/commonjs/buttons");
/* harmony import */ var evergreen_ui_commonjs_buttons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_buttons__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\covid19\\client\\src\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-3930741357" + " " + "headerItems",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx("br", {
  className: "jsx-3930741357",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/cases",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx(evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, "Cases")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/patients",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx(evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, "Patients")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/message",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx(evergreen_ui_commonjs_tabs_src_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, "Message")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3930741357",
  __self: undefined
}, "a.jsx-3930741357{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:11px;margin-right:30px;padding-right:70px;margin-right:8px;color:#999;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;}.signOut.jsx-3930741357{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.headerItems.jsx-3930741357{padding-bottom:50px;margin-bottom:40px;padding-right:200px;}@media screen and (max-width:960px){.row.jsx-3930741357{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3930741357{width:100%;padding:1.5rem 0;text-align:center;max-width:330px;}.list.jsx-3930741357{overflow-y:scroll;overflow-x:hidden;position:left;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);text-align:left;align:left;margin-left:-38px;padding-left:28px;padding-right:28px;background-color:#FFFFFF;width:390px;height:500px;}.headerItems.jsx-3930741357{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHNkksQUFXNUcsQUE2QkosQUFTSSxBQUlYLEFBT08sQUFnQkwsV0F0QkksRUF1Qm5CLEtBaEJvQixFQXBCRCxJQTdCRCxJQTJDRSxRQU9KLEdBcEJJLEdBN0JDLElBMkNILElBT0UsU0FwQnRCLEdBY0UsQ0EzQ3NCLEtBa0R3QixVQWQzQixPQW5DTSxVQW9DekIsZUFuQ2tCLEVBaURBLGdCQWhESixBQWlERCxJQWpFRSxPQWtFSyxHQWpERCxLQWhCRCxVQWtFRSxJQWpEUixJQWhCTyxRQWlCUCxFQWlEUyxTQWpFSixDQWlCRCxTQWlEVyxPQWpFaEIsQUFpQkksV0FoQlUsSUFpQkEsR0FnRFgsWUFDQyxNQWpFTSxFQWlCZSxLQWlEcEMsNkJBaERpQixjQWpCbkIsdUVBa0JpQixlQUNNLGtEQUNKLGlCQUNDLGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2pCIiwiZmlsZSI6IkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9hdmF0YXIvc3JjL0F2YXRhcidcclxuaW1wb3J0IFRhYiBmcm9tICdldmVyZ3JlZW4tdWkvY29tbW9uanMvdGFicy9zcmMvVGFiJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9idXR0b25zL3NyYy9CdXR0b24nXHJcbmltcG9ydCBJY29uIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9pY29uL3NyYy9JY29uJ1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnZXZlcmdyZWVuLXVpL2NvbW1vbmpzL2J1dHRvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVySXRlbXNcIj5cclxuXHJcbiAgICA8YnIvPlxyXG4gICAgXHJcbiAgICA8TGluayBocmVmPScvY2FzZXMnPlxyXG4gICAgPFRhYj5DYXNlczwvVGFiPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxMaW5rIGhyZWY9Jy9wYXRpZW50cyc+XHJcbiAgICA8VGFiPlBhdGllbnRzPC9UYWI+XHJcbiAgICA8L0xpbms+XHJcblxyXG4gICAgPExpbmsgaHJlZj0nL21lc3NhZ2UnPlxyXG4gICAgICA8VGFiPk1lc3NhZ2U8L1RhYj5cclxuICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lnbk91dCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgICAuaGVhZGVySXRlbXMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICBwb3NpdGlvbjogbGVmdDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zOHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICB3aWR0aDogMzkwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlckl0ZW1zIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuXHJcbilcclxuIl19 */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\header.js */")));

/***/ }),

/***/ "./src/components/media-query.js":
/*!***************************************!*\
  !*** ./src/components/media-query.js ***!
  \***************************************/
/*! exports provided: MediaQueryProvider, MediaQueryConsumer, withMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryProvider", function() { return MediaQueryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryConsumer", function() { return MediaQueryConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaQuery", function() { return withMediaQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\covid19\\client\\src\\components\\media-query.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  Provider: MediaQueryProvider,
  Consumer: MediaQueryConsumer
} = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isMobile: false,
  isTablet: false
});

const withMediaQuery = Comp => {
  var _temp;

  return _temp = class extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        isMobile: false,
        isTablet: false
      });

      _defineProperty(this, "onResize", () => {
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth < 960;

        if (isMobile !== this.state.isMobile) {
          this.setState({
            isMobile
          });
        }

        if (isTablet !== this.state.isTablet) {
          this.setState({
            isTablet
          });
        }
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      const {
        isMobile,
        isTablet
      } = this.state;
      return __jsx(MediaQueryProvider, {
        value: {
          isMobile,
          isTablet
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(Comp, _extends({
        isMobile: isMobile,
        isTablet: isTablet
      }, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      })));
    }

  }, _temp;
};



/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/polyfill */ "./lib/polyfill.js");
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-query */ "./src/components/media-query.js");
var _jsxFileName = "C:\\covid19\\client\\src\\components\\page.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (Object(_media_query__WEBPACK_IMPORTED_MODULE_4__["withMediaQuery"])(({
  title,
  description,
  children
}) => __jsx("div", {
  className: "jsx-3964585388",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("title", {
  className: "jsx-3964585388",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, title || 'Stateset - Unified Processes '), __jsx("meta", {
  name: "description",
  content: description || 'Stateset provides an Inter-firm Sales and Service Automation platform that accelerates sales cycles by distributing encrypted data, processes and business transactions.',
  className: "jsx-3964585388",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1164718727",
  __self: undefined
}, ".jsx-3964585388{overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xccGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQk8sQUFHNkIsa0JBQ3BCIiwiZmlsZSI6IkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xccGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgJy4uLy4uL2xpYi9wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IHdpdGhNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9tZWRpYS1xdWVyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTWVkaWFRdWVyeSgoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGUgfHwgJ1N0YXRlc2V0IC0gVW5pZmllZCBQcm9jZXNzZXMgJ308L3RpdGxlPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgJ1N0YXRlc2V0IHByb3ZpZGVzIGFuIEludGVyLWZpcm0gU2FsZXMgYW5kIFNlcnZpY2UgQXV0b21hdGlvbiBwbGF0Zm9ybSB0aGF0IGFjY2VsZXJhdGVzIHNhbGVzIGN5Y2xlcyBieSBkaXN0cmlidXRpbmcgZW5jcnlwdGVkIGRhdGEsIHByb2Nlc3NlcyBhbmQgYnVzaW5lc3MgdHJhbnNhY3Rpb25zLidcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YFxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAqLFxyXG4gICAgICAgICo6YmVmb3JlLFxyXG4gICAgICAgICo6YWZ0ZXIge1xyXG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcclxuICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcclxuICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcclxuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGODtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBbcm9sZT0nZ3JpZCddOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSxcclxuICAgICAgICBoMixcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMyMTk1ZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM2OGI1ZmI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2UsXHJcbiAgICAgICAgICAgIHNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlOmJlZm9yZSxcclxuICAgICAgICBjb2RlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdcXGAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmUgY29kZTpiZWZvcmUsXHJcbiAgICAgICAgcHJlIGNvZGU6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbW8tZm9vdGVyIC5ub3RlIGNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAuMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZi1yZXNldCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODAyMDMyNDcwNzAzMTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNjAxODA2NjQwNjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNDIzODI4MTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjY1NjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODg4ODg4ODg4ODg4OGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc5MDEyMzQ1Njc5MDEyMzRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZncyIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc1IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzYge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc4IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzkge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXV0ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRjIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCAtMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGVcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCxcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgYVtyb2xlPSdidXR0b24nXSB7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tdGFwLWhpZ2hsaWdodCxcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby10YXAtY2FsbG91dCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby1kcmFnIHtcclxuICAgICAgICAgIHVzZXItZHJhZzogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52aXN1YWxseS1oaWRkZW4ge1xyXG4gICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXHJcbiAgICAgICAgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICAgIHRhYi1zaXplOiA0O1xyXG4gICAgICAgICAgaHlwaGVuczogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmNvbW1lbnQsXHJcbiAgICAgICAgLnRva2VuLnByb2xvZyxcclxuICAgICAgICAudG9rZW4uZG9jdHlwZSxcclxuICAgICAgICAudG9rZW4uY2RhdGEge1xyXG4gICAgICAgICAgY29sb3I6ICMyZGI1MmQ7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5uYW1lc3BhY2Uge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXR0ci12YWx1ZSxcclxuICAgICAgICAudG9rZW4uc3RyaW5nIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjQTMxNTE1O1xyXG4gICAgICAgICAgY29sb3I6ICNjYTBlMGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5wdW5jdHVhdGlvbixcclxuICAgICAgICAudG9rZW4ub3BlcmF0b3Ige1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7IC8qIG5vIGhpZ2hsaWdodCAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4udXJsLFxyXG4gICAgICAgIC50b2tlbi5zeW1ib2wsXHJcbiAgICAgICAgLnRva2VuLm51bWJlcixcclxuICAgICAgICAudG9rZW4uYm9vbGVhbixcclxuICAgICAgICAudG9rZW4udmFyaWFibGUsXHJcbiAgICAgICAgLnRva2VuLmNvbnN0YW50LFxyXG4gICAgICAgIC50b2tlbi5pbnNlcnRlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzM2YWNhYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0cnVsZSxcclxuICAgICAgICAudG9rZW4ua2V5d29yZCxcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4uc2VsZWN0b3IsXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLmJvb2xlYW4sXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLm51bWJlcixcclxuICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtY3NzJ10ge1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMyNTI1Zjk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZnVuY3Rpb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5kZWxldGVkLFxyXG4gICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi50YWcge1xyXG4gICAgICAgICAgY29sb3I6ICM5YTA1MGY7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi5rZXl3b3JkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwMDlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uaW1wb3J0YW50LFxyXG4gICAgICAgIC50b2tlbi5ib2xkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uaXRhbGljIHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmNsYXNzLW5hbWUsXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLnByb3BlcnR5IHtcclxuICAgICAgICAgIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4udGFnLFxyXG4gICAgICAgIC50b2tlbi5zZWxlY3RvciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzgwMDAwMDtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjOWEwNTBmO1xyXG4gICAgICAgICAgY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHRyLW5hbWUsXHJcbiAgICAgICAgLnRva2VuLnByb3BlcnR5LFxyXG4gICAgICAgIC50b2tlbi5yZWdleCxcclxuICAgICAgICAudG9rZW4uZW50aXR5IHtcclxuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZGlyZWN0aXZlLnRhZyAudGFnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICBjb2xvcjogIzM5M2EzNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHBhdGgsXHJcbiAgICAgICAgc3ZnIGNpcmNsZSB7XHJcbiAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pKTsiXX0= */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\page.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2771777602",
  __self: undefined
}, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#F4F6F8;}::selection{background-color:#FFFFFF;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#2195ff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;}code:before,code:after{content:'\\`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#999;}.mute{color:#757575;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-mobile{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}html,body{background-color:#15202b;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#393a34;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:0.95em;line-height:1.4em;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#2db52d;font-style:italic;}.token.namespace{opacity:0.7;}.token.attr-value,.token.string{color:#ca0e0e;}.token.punctuation,.token.operator{color:#393a34;}.token.url,.token.symbol,.token.number,.token.boolean,.token.variable,.token.constant,.token.inserted{color:#36acaa;}.token.atrule,.token.keyword,.language-autohotkey .token.selector,.language-json .token.boolean,.language-json .token.number,code[class*='language-css']{font-weight:600;}.token.function{color:#393a34;}.token.deleted,.language-autohotkey .token.tag{color:#9a050f;}.token.selector,.language-autohotkey .token.keyword{color:#00009f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.class-name,.language-json .token.property{color:#2b91af;}.token.tag,.token.selector{color:#2b91af;}.token.attr-name,.token.property,.token.regex,.token.entity{color:#ff0000;}.token.directive.tag .tag{background:#ffff00;color:#393a34;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xccGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qk8sQUFHNEIsQUFRRSxBQUdELEFBb0JPLEFBSUEsQUFJWixBQUdxQixBQUt6QixBQUdLLEFBS0EsQUFHRSxBQU9ILEFBSUEsQUFHaUIsQUFNbkIsQUFLSSxBQUdlLEFBR0gsQUFHSCxBQUdILEFBR0gsQUFHYSxBQUdBLEFBR2YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0wsQUFHRyxBQUdJLEFBR0wsQUFLTixBQUlNLEFBS0csQUFLVyxBQUtGLEFBUUUsQUFNQSxBQUdaLEFBU0ksQUFXTCxBQWVBLEFBSUYsQUFLRSxBQUlBLEFBU0EsQUFTRSxBQUdGLEFBSUEsQUFLQSxBQUlHLEFBR0MsQUFJSixBQU1BLEFBTUEsQUFHSyxBQUlRLEFBSVEsU0F4UHJDLEVBK0JjLEFBd0RkLENBeUZBLENBeExBLEFBMEJBLEFBSUEsQUFtRkEsQ0F0R3VCLEFBS3ZCLEFBa0ZBLEFBb0JFLEFBK0NjLEFBZUksQUFTcEIsQUFJQSxBQVNBLEFBWUEsQUFLQSxBQUlBLEFBV0EsQUFNQSxBQU1BLENBMU1BLENBdkJTLEFBK0NULEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQXVIQSxDQTFQZ0MsQUEwUWhDLENBL1BrQixBQXVGbEIsQUEwQ0EsQUFpSUEsQ0FyUUEsQUF3UmdCLEVBak1oQixFQWhCYyxDQWFkLENBN0RBLEFBSWEsQUErSFgsQUFLc0IsRUEvRlAsQUFpQmpCLEFBc0Z5QixBQU16QixBQStHQSxDQXZGa0IsRUF2SGxCLENBZUEsQUFHQSxDQW9IQSxDQXhFbUIsQUE2SW5CLENBclJXLEFBOEJYLENBc0NBLEFBd05BLENBcFFBLE1BcUNrQixDQTVEQyxDQWlNRCxFQWJMLENBaE1DLEFBdUtTLEdBbkJ2QixBQTJCcUIsT0FrQlQsQ0F4SFEsQ0F4RUksQ0FjUSxBQStMVixJQTVKTyxHQWdKZixDQTFCWSxDQVFnQixLQWxDckIsRUFwRXJCLENBNkdtQixFQVlQLENBWVEsQ0E3TXBCLFFBa01XLEdBM0JRLE1BNEJELEFBV0MsV0EvQm5CLEtBcUJvQixDQVdBLFdBOUpwQixNQW9KQSxDQVdhLFdBdEpiLEFBdUplLGtCQTNCUyxLQXpDTCxVQTJCbkIsT0ExQkEsQUF5Q3lCLHVCQUNFLEdBMUtWLEdBb01qQixZQW5Na0IsT0EwS0ssU0F6S0wsWUEwS2xCLElBektnQixjQUNlLDZCQUNLLGtDQUNDLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXGNvbXBvbmVudHNcXHBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9saWIvcG9seWZpbGwnO1xyXG5pbXBvcnQgeyB3aXRoTWVkaWFRdWVyeSB9IGZyb20gJy4vbWVkaWEtcXVlcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aE1lZGlhUXVlcnkoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlIHx8ICdTdGF0ZXNldCAtIFVuaWZpZWQgUHJvY2Vzc2VzICd9PC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICdTdGF0ZXNldCBwcm92aWRlcyBhbiBJbnRlci1maXJtIFNhbGVzIGFuZCBTZXJ2aWNlIEF1dG9tYXRpb24gcGxhdGZvcm0gdGhhdCBhY2NlbGVyYXRlcyBzYWxlcyBjeWNsZXMgYnkgZGlzdHJpYnV0aW5nIGVuY3J5cHRlZCBkYXRhLCBwcm9jZXNzZXMgYW5kIGJ1c2luZXNzIHRyYW5zYWN0aW9ucy4nXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAge2BcclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKixcclxuICAgICAgICAqOmJlZm9yZSxcclxuICAgICAgICAqOmFmdGVyIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXHJcbiAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXHJcbiAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgW3JvbGU9J2dyaWQnXTpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjE5NWZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjhiNWZiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxyXG4gICAgICAgICAgICBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZTpiZWZvcmUsXHJcbiAgICAgICAgY29kZTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnXFxgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgIHByZSBjb2RlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZW1vLWZvb3RlciAubm90ZSBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwLjFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYtcmVzZXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjgwMjAzMjQ3MDcwMzEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjYwMTgwNjY0MDYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjQyMzgyODEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI2NTYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg4ODg4ODg4ODg4ODhlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmY2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43OTAxMjM0NTY3OTAxMjM0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnczIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc2IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzcge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3OCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc5IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm11dGUge1xyXG4gICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgLTEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFbcm9sZT0nYnV0dG9uJ10ge1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLXRhcC1oaWdobGlnaHQsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tdGFwLWNhbGxvdXQge1xyXG4gICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tZHJhZyB7XHJcbiAgICAgICAgICB1c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlzdWFsbHktaGlkZGVuIHtcclxuICAgICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxyXG4gICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgICB0YWItc2l6ZTogNDtcclxuICAgICAgICAgIGh5cGhlbnM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jb21tZW50LFxyXG4gICAgICAgIC50b2tlbi5wcm9sb2csXHJcbiAgICAgICAgLnRva2VuLmRvY3R5cGUsXHJcbiAgICAgICAgLnRva2VuLmNkYXRhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmRiNTJkO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ubmFtZXNwYWNlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0dHItdmFsdWUsXHJcbiAgICAgICAgLnRva2VuLnN0cmluZyB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogI0EzMTUxNTtcclxuICAgICAgICAgIGNvbG9yOiAjY2EwZTBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ucHVuY3R1YXRpb24sXHJcbiAgICAgICAgLnRva2VuLm9wZXJhdG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0OyAvKiBubyBoaWdobGlnaHQgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnVybCxcclxuICAgICAgICAudG9rZW4uc3ltYm9sLFxyXG4gICAgICAgIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgLnRva2VuLmJvb2xlYW4sXHJcbiAgICAgICAgLnRva2VuLnZhcmlhYmxlLFxyXG4gICAgICAgIC50b2tlbi5jb25zdGFudCxcclxuICAgICAgICAudG9rZW4uaW5zZXJ0ZWQge1xyXG4gICAgICAgICAgY29sb3I6ICMzNmFjYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHJ1bGUsXHJcbiAgICAgICAgLnRva2VuLmtleXdvcmQsXHJcbiAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5ib29sZWFuLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLWNzcyddIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjMjUyNWY5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmZ1bmN0aW9uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZGVsZXRlZCxcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4udGFnIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWEwNTBmO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5zZWxlY3RvcixcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4ua2V5d29yZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDA5ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmltcG9ydGFudCxcclxuICAgICAgICAudG9rZW4uYm9sZCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLml0YWxpYyB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jbGFzcy1uYW1lLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5wcm9wZXJ0eSB7XHJcbiAgICAgICAgICBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnRhZyxcclxuICAgICAgICAudG9rZW4uc2VsZWN0b3Ige1xyXG4gICAgICAgICAgLy8gY29sb3I6ICM4MDAwMDA7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzlhMDUwZjtcclxuICAgICAgICAgIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXR0ci1uYW1lLFxyXG4gICAgICAgIC50b2tlbi5wcm9wZXJ0eSxcclxuICAgICAgICAudG9rZW4ucmVnZXgsXHJcbiAgICAgICAgLnRva2VuLmVudGl0eSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmRpcmVjdGl2ZS50YWcgLnRhZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyBwYXRoLFxyXG4gICAgICAgIHN2ZyBjaXJjbGUge1xyXG4gICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKSk7Il19 */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\page.js */"), children)));

/***/ }),

/***/ "./src/components/useFormInput.js":
/*!****************************************!*\
  !*** ./src/components/useFormInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useFormInput(initialValue) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useFormInput);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container */ "./src/components/container.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_cases_CaseForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cases/CaseForm */ "./src/components/cases/CaseForm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\covid19\\client\\src\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











let easing = [0.175, 0.85, 0.42, 0.96];
const textVariants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: easing
    }
  }
};
_sentry_browser__WEBPACK_IMPORTED_MODULE_12__["init"]({
  dsn: "https://7416b02cda434763993225fee3e34c36@sentry.io/1860365"
});
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
  center: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }
}, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}), __jsx(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
  center: true,
  title: "Corona Virus Case Submission Network",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 2
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 2
  }
}, __jsx("title", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, "Corona Virus Case Submission Network"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
})), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
}, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
  variants: textVariants,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}, __jsx("h1", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 7
  }
}, "Corona Virus Case Submission Network"), __jsx("h2", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}, "The purpose of this network is for new case submission. The current process is dependent on CSV files and google sheets that are being used. This network serves as an alternative to Submit a New Case of the Corona Virus disease. Data being submitted can be scheduled to be exported into CSV format for statistical analytics and deep learning. "), __jsx("h1", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }
}, "To Submit a New Case use this form:"), __jsx("br", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
}), __jsx(_components_cases_CaseForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}))), __jsx("br", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}), __jsx("br", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }
}), __jsx("br", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 7
  }
}), __jsx("h2", {
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, "This web application and the covid case network is ", __jsx("a", {
  href: "https://github.com/domsteil/covid19",
  className: "jsx-3208219427",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 62
  }
}, "open-source"), " and distributed under the Apache 2.0 license."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3208219427",
  __self: undefined
}, "main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}b.jsx-3208219427{font-weight:normal;}h1.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}@-webkit-keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}ul.jsx-3208219427{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-3208219427{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-3208219427{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-3208219427{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.Page.jsx-3208219427{background-color:#F4F6F8;}main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}.column.jsx-3208219427{width:100%;text-align:center;max-width:330px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-3208219427{text-align:center;}.column2.jsx-3208219427{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EWSxBQUs4QixBQUtGLEFBS0UsQUFLSixBQUltSCxBQVd6SCxBQU9ILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFRekgsQUFNWSxBQU9oQixBQVVRLEFBTUcsQUFTRyxBQUtBLEFBS0YsQUFLRSxBQUtkLEFBU08sQUFJRixRQS9HSCxHQU5TLEFBT1IsQUF3Q1EsQUFhWixBQTZDUSxLQWFMLEVBSmYsQ0FqSUUsQUFxRkosQ0F6RDRCLENBd0NQLEFBUU4sSUEzRk8sQUFLQSxBQUtBLEFBZ0NnQixBQTBFcEMsQUFJb0IsQUFLQSxBQUtBLElBbkdsQixBQStDQSxBQTBEZ0IsQUFhbEIsR0FqRTBCLEFBUUgsV0EzRnZCLEFBS0EsQUFLRSxBQThHRixBQUtBLEFBS0UsRUFNZ0IsS0FwRFEsR0FRTCxRQTZDQSxPQXBEakIsSUFRaUIsTUFZRixFQWlDRSxXQTVDRixJQVlFLElBaUNyQixTQTVDRixNQVlvQixnQkFDRSxFQTFGQSxBQTZCQSxBQVdBLEFBVUYsWUFDRCxFQWxERyxBQTZCQyxBQVdBLEVBa0RyQixPQXZDcUIsS0FsREMsQ0E2QkcsQUFXRCxTQVdBLE1BbERBLEdBd0NELENBWEMsUUFzQnBCLE1BbERtQixFQXdDTixFQVhNLFNBWUMsSUF4Q1AsSUE2QkEsT0E1Qk8sR0F3Q3BCLENBWG9CLGNBNUJwQixJQTZCQSIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBDYXNlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Nhc2VzL0Nhc2VGb3JtJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcclxuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XHJcblxyXG5sZXQgZWFzaW5nID0gWzAuMTc1LCAwLjg1LCAwLjQyLCAwLjk2XTtcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICBleGl0OiB7IHk6IDEwMCwgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBlYXNpbmcgfSB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMSwgZHVyYXRpb246IDAuNSwgZWFzZTogZWFzaW5nIH1cclxuICB9XHJcbn07XHJcblxyXG5cclxuU2VudHJ5LmluaXQoe2RzbjogXCJodHRwczovLzc0MTZiMDJjZGE0MzQ3NjM5OTMyMjVmZWUzZTM0YzM2QHNlbnRyeS5pby8xODYwMzY1XCJ9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgPEhlYWRlci8+XHJcblx0PFBhZ2UgY2VudGVyIHRpdGxlPVwiQ29yb25hIFZpcnVzIENhc2UgU3VibWlzc2lvbiBOZXR3b3JrXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5Db3JvbmEgVmlydXMgQ2FzZSBTdWJtaXNzaW9uIE5ldHdvcms8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImV4aXRcIiBhbmltYXRlPVwiZW50ZXJcIiBleGl0PVwiZXhpdFwiPlxyXG4gICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17dGV4dFZhcmlhbnRzfT5cclxuICAgICAgPGgxPkNvcm9uYSBWaXJ1cyBDYXNlIFN1Ym1pc3Npb24gTmV0d29yazwvaDE+XHJcbiAgICAgIDxoMj5UaGUgcHVycG9zZSBvZiB0aGlzIG5ldHdvcmsgaXMgZm9yIG5ldyBjYXNlIHN1Ym1pc3Npb24uIFRoZSBjdXJyZW50IHByb2Nlc3MgaXMgZGVwZW5kZW50IG9uIENTViBmaWxlcyBhbmQgZ29vZ2xlIHNoZWV0cyB0aGF0IGFyZSBiZWluZyB1c2VkLiBcclxuICAgICAgICAgICAgVGhpcyBuZXR3b3JrIHNlcnZlcyBhcyBhbiBhbHRlcm5hdGl2ZSB0byBTdWJtaXQgYSBOZXcgQ2FzZSBvZiB0aGUgQ29yb25hIFZpcnVzIGRpc2Vhc2UuXHJcbiAgICAgICAgICAgIERhdGEgYmVpbmcgc3VibWl0dGVkIGNhbiBiZSBzY2hlZHVsZWQgdG8gYmUgZXhwb3J0ZWQgaW50byBDU1YgZm9ybWF0IGZvciBzdGF0aXN0aWNhbCBhbmFseXRpY3MgYW5kIGRlZXAgbGVhcm5pbmcuIDwvaDI+XHJcbiAgICAgIDxoMT5UbyBTdWJtaXQgYSBOZXcgQ2FzZSB1c2UgdGhpcyBmb3JtOjwvaDE+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxDYXNlRm9ybSAvPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGgyPlRoaXMgd2ViIGFwcGxpY2F0aW9uIGFuZCB0aGUgY292aWQgY2FzZSBuZXR3b3JrIGlzIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZG9tc3RlaWwvY292aWQxOVwiPm9wZW4tc291cmNlPC9hPiBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgbGljZW5zZS48L2gyPlxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbiAgbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblx0ZGl2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGIge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuXHRoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbiAgZnJvbSB7IHdpZHRoOiAwIH1cclxuICB0byB7IHdpZHRoOiAxMDAlIH1cclxufVxyXG5cclxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcclxuICBmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XHJcbn1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICAgdWwge1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29ubmVjdGVkIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLlBhZ2Uge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGODtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblx0ZGl2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cdDwvUGFnZT5cclxuICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG5cdClcclxuIl19 */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\pages\\\\index.js */"))));

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\covid19\client\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "@sentry/browser":
/*!**********************************!*\
  !*** external "@sentry/browser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "evergreen-ui/commonjs/avatar/src/Avatar":
/*!**********************************************************!*\
  !*** external "evergreen-ui/commonjs/avatar/src/Avatar" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/avatar/src/Avatar");

/***/ }),

/***/ "evergreen-ui/commonjs/buttons":
/*!************************************************!*\
  !*** external "evergreen-ui/commonjs/buttons" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/buttons");

/***/ }),

/***/ "evergreen-ui/commonjs/buttons/src/Button":
/*!***********************************************************!*\
  !*** external "evergreen-ui/commonjs/buttons/src/Button" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/buttons/src/Button");

/***/ }),

/***/ "evergreen-ui/commonjs/icon/src/Icon":
/*!******************************************************!*\
  !*** external "evergreen-ui/commonjs/icon/src/Icon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/icon/src/Icon");

/***/ }),

/***/ "evergreen-ui/commonjs/layers/src/Card":
/*!********************************************************!*\
  !*** external "evergreen-ui/commonjs/layers/src/Card" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/layers/src/Card");

/***/ }),

/***/ "evergreen-ui/commonjs/tabs/src/Tab":
/*!*****************************************************!*\
  !*** external "evergreen-ui/commonjs/tabs/src/Tab" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/tabs/src/Tab");

/***/ }),

/***/ "evergreen-ui/commonjs/toaster/src":
/*!****************************************************!*\
  !*** external "evergreen-ui/commonjs/toaster/src" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/toaster/src");

/***/ }),

/***/ "evergreen-ui/commonjs/typography/src/Text":
/*!************************************************************!*\
  !*** external "evergreen-ui/commonjs/typography/src/Text" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui/commonjs/typography/src/Text");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=index.js.map