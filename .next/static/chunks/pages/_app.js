(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var pageview = function pageview(url) {
  if (window && window.gtag) {
    window.gtag('config', "G-ZQTGWSMZTN", {
      page_path: url
    });
  }
}; // log specific events happening.

var event = function event(_ref) {
  var action = _ref.action,
      params = _ref.params;

  if (window && window.gtag) {
    window.gtag('event', action, params);
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/ga */ "./lib/ga/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _jsxFileName = "C:\\Users\\accou\\Desktop\\kirschenman-field-reports\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var handleRouteChange = function handleRouteChange(url) {
      _lib_ga__WEBPACK_IMPORTED_MODULE_5__.pageview(url);
    };

    if (process.env.NEXT_PUBLIC_HOST === 'production') {
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on('routeChangeComplete', handleRouteChange); // If the component is unmounted, unsubscribe
      // from the event with the `off` method

      return function () {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(MyApp, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./node_modules/next-auth/dist/client/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-auth/dist/client/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSession = useSession;
exports.session = exports.getSession = getSession;
exports.csrfToken = exports.getCsrfToken = getCsrfToken;
exports.providers = exports.getProviders = getProviders;
exports.signin = exports.signIn = signIn;
exports.signout = exports.signOut = signOut;
exports.options = exports.setOptions = setOptions;
exports.Provider = Provider;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _logger2 = _interopRequireWildcard(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/dist/lib/logger.js"));

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/parse-url */ "./node_modules/next-auth/dist/lib/parse-url.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)(process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).basePath,
  baseUrlServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePathServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL).basePath,
  keepAlive: 0,
  clientMaxAge: 0,
  _clientLastSync: 0,
  _clientSyncTimer: null,
  _eventListenersAdded: false,
  _clientSession: undefined,
  _getSession: function _getSession() {}
};
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
var broadcast = BroadcastChannel();

if (typeof window !== "undefined" && !__NEXTAUTH._eventListenersAdded) {
  __NEXTAUTH._eventListenersAdded = true;
  broadcast.receive(function () {
    return __NEXTAUTH._getSession({
      event: "storage"
    });
  });
  document.addEventListener("visibilitychange", function () {
    !document.hidden && __NEXTAUTH._getSession({
      event: "visibilitychange"
    });
  }, false);
}

var SessionContext = (0, _react.createContext)();

function useSession(session) {
  var context = (0, _react.useContext)(SessionContext);
  if (context) return context;
  return _useSessionHook(session);
}

function _useSessionHook(session) {
  var _useState = (0, _react.useState)(session),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(!data),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0, _react.useEffect)(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref2,
          _ref2$event,
          event,
          triggredByEvent,
          triggeredByStorageEvent,
          clientMaxAge,
          clientLastSync,
          currentTime,
          clientSession,
          newClientSessionData,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$event = _ref2.event, event = _ref2$event === void 0 ? null : _ref2$event;
              _context.prev = 1;
              triggredByEvent = event !== null;
              triggeredByStorageEvent = event === "storage";
              clientMaxAge = __NEXTAUTH.clientMaxAge;
              clientLastSync = parseInt(__NEXTAUTH._clientLastSync);
              currentTime = _now();
              clientSession = __NEXTAUTH._clientSession;

              if (!(!triggeredByStorageEvent && clientSession !== undefined)) {
                _context.next = 19;
                break;
              }

              if (!(clientMaxAge === 0 && triggredByEvent !== true)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              if (!(clientMaxAge > 0 && clientSession === null)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              if (!(clientMaxAge > 0 && currentTime < clientLastSync + clientMaxAge)) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return");

            case 19:
              if (clientSession === undefined) {
                __NEXTAUTH._clientSession = null;
              }

              __NEXTAUTH._clientLastSync = _now();
              _context.next = 23;
              return getSession({
                triggerEvent: !triggeredByStorageEvent
              });

            case 23:
              newClientSessionData = _context.sent;
              __NEXTAUTH._clientSession = newClientSessionData;
              setData(newClientSessionData);
              setLoading(false);
              _context.next = 33;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](1);
              logger.error("CLIENT_USE_SESSION_ERROR", _context.t0);
              setLoading(false);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 29]]);
    }));

    __NEXTAUTH._getSession();
  });
  return [data, loading];
}

function getSession(_x) {
  return _getSession2.apply(this, arguments);
}

function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(ctx) {
    var _ctx$triggerEvent;

    var session;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _fetchData("session", ctx);

          case 2:
            session = _context4.sent;

            if ((_ctx$triggerEvent = ctx === null || ctx === void 0 ? void 0 : ctx.triggerEvent) !== null && _ctx$triggerEvent !== void 0 ? _ctx$triggerEvent : true) {
              broadcast.post({
                event: "session",
                data: {
                  trigger: "getSession"
                }
              });
            }

            return _context4.abrupt("return", session);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSession2.apply(this, arguments);
}

function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}

function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5(ctx) {
    var _yield$_fetchData;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _fetchData("csrf", ctx);

          case 2:
            _context5.t1 = _yield$_fetchData = _context5.sent;
            _context5.t0 = _context5.t1 === null;

            if (_context5.t0) {
              _context5.next = 6;
              break;
            }

            _context5.t0 = _yield$_fetchData === void 0;

          case 6:
            if (!_context5.t0) {
              _context5.next = 10;
              break;
            }

            _context5.t2 = void 0;
            _context5.next = 11;
            break;

          case 10:
            _context5.t2 = _yield$_fetchData.csrfToken;

          case 11:
            return _context5.abrupt("return", _context5.t2);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getCsrfToken.apply(this, arguments);
}

function getProviders() {
  return _getProviders.apply(this, arguments);
}

function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _fetchData("providers");

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getProviders.apply(this, arguments);
}

function signIn(_x3) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(provider) {
    var options,
        authorizationParams,
        _options$callbackUrl,
        callbackUrl,
        _options$redirect,
        redirect,
        baseUrl,
        providers,
        isCredentials,
        isEmail,
        isSupportingReturn,
        signInUrl,
        _signInUrl,
        res,
        data,
        _data$url,
        url,
        error,
        _args7 = arguments;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            authorizationParams = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
            _options$callbackUrl = options.callbackUrl, callbackUrl = _options$callbackUrl === void 0 ? window.location.href : _options$callbackUrl, _options$redirect = options.redirect, redirect = _options$redirect === void 0 ? true : _options$redirect;
            baseUrl = _apiBaseUrl();
            _context7.next = 6;
            return getProviders();

          case 6:
            providers = _context7.sent;

            if (providers) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/error")));

          case 9:
            if (provider in providers) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/signin?callbackUrl=").concat(encodeURIComponent(callbackUrl))));

          case 11:
            isCredentials = providers[provider].type === "credentials";
            isEmail = providers[provider].type === "email";
            isSupportingReturn = isCredentials || isEmail;
            signInUrl = isCredentials ? "".concat(baseUrl, "/callback/").concat(provider) : "".concat(baseUrl, "/signin/").concat(provider);
            _signInUrl = "".concat(signInUrl, "?").concat(new URLSearchParams(authorizationParams));
            _context7.t0 = fetch;
            _context7.t1 = _signInUrl;
            _context7.t2 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context7.t3 = URLSearchParams;
            _context7.t4 = _objectSpread;
            _context7.t5 = _objectSpread({}, options);
            _context7.t6 = {};
            _context7.next = 25;
            return getCsrfToken();

          case 25:
            _context7.t7 = _context7.sent;
            _context7.t8 = callbackUrl;
            _context7.t9 = {
              csrfToken: _context7.t7,
              callbackUrl: _context7.t8,
              json: true
            };
            _context7.t10 = (0, _context7.t4)(_context7.t5, _context7.t6, _context7.t9);
            _context7.t11 = new _context7.t3(_context7.t10);
            _context7.t12 = {
              method: "post",
              headers: _context7.t2,
              body: _context7.t11
            };
            _context7.next = 33;
            return (0, _context7.t0)(_context7.t1, _context7.t12);

          case 33:
            res = _context7.sent;
            _context7.next = 36;
            return res.json();

          case 36:
            data = _context7.sent;

            if (!(redirect || !isSupportingReturn)) {
              _context7.next = 42;
              break;
            }

            url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context7.abrupt("return");

          case 42:
            error = new URL(data.url).searchParams.get("error");

            if (!res.ok) {
              _context7.next = 46;
              break;
            }

            _context7.next = 46;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 46:
            return _context7.abrupt("return", {
              error: error,
              status: res.status,
              ok: res.ok,
              url: error ? null : data.url
            });

          case 47:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _signIn.apply(this, arguments);
}

function signOut() {
  return _signOut.apply(this, arguments);
}

function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee8() {
    var options,
        _options$callbackUrl2,
        callbackUrl,
        _options$redirect2,
        redirect,
        baseUrl,
        fetchOptions,
        res,
        data,
        _data$url2,
        url,
        _args8 = arguments;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            _options$callbackUrl2 = options.callbackUrl, callbackUrl = _options$callbackUrl2 === void 0 ? window.location.href : _options$callbackUrl2, _options$redirect2 = options.redirect, redirect = _options$redirect2 === void 0 ? true : _options$redirect2;
            baseUrl = _apiBaseUrl();
            _context8.t0 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context8.t1 = URLSearchParams;
            _context8.next = 7;
            return getCsrfToken();

          case 7:
            _context8.t2 = _context8.sent;
            _context8.t3 = callbackUrl;
            _context8.t4 = {
              csrfToken: _context8.t2,
              callbackUrl: _context8.t3,
              json: true
            };
            _context8.t5 = new _context8.t1(_context8.t4);
            fetchOptions = {
              method: "post",
              headers: _context8.t0,
              body: _context8.t5
            };
            _context8.next = 14;
            return fetch("".concat(baseUrl, "/signout"), fetchOptions);

          case 14:
            res = _context8.sent;
            _context8.next = 17;
            return res.json();

          case 17:
            data = _context8.sent;
            broadcast.post({
              event: "session",
              data: {
                trigger: "signout"
              }
            });

            if (!redirect) {
              _context8.next = 24;
              break;
            }

            url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context8.abrupt("return");

          case 24:
            _context8.next = 26;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 26:
            return _context8.abrupt("return", data);

          case 27:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _signOut.apply(this, arguments);
}

function setOptions() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      baseUrl = _ref3.baseUrl,
      basePath = _ref3.basePath,
      clientMaxAge = _ref3.clientMaxAge,
      keepAlive = _ref3.keepAlive;

  if (baseUrl) __NEXTAUTH.baseUrl = baseUrl;
  if (basePath) __NEXTAUTH.basePath = basePath;
  if (clientMaxAge) __NEXTAUTH.clientMaxAge = clientMaxAge;

  if (keepAlive) {
    __NEXTAUTH.keepAlive = keepAlive;
    if (typeof window === "undefined") return;

    if (__NEXTAUTH._clientSyncTimer !== null) {
      clearTimeout(__NEXTAUTH._clientSyncTimer);
    }

    __NEXTAUTH._clientSyncTimer = setTimeout((0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (__NEXTAUTH._clientSession) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return __NEXTAUTH._getSession({
                event: "timer"
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), keepAlive * 1000);
  }
}

function Provider(_ref5) {
  var children = _ref5.children,
      session = _ref5.session,
      options = _ref5.options;
  setOptions(options);
  return (0, _react.createElement)(SessionContext.Provider, {
    value: useSession(session)
  }, children);
}

function _fetchData(_x4) {
  return _fetchData2.apply(this, arguments);
}

function _fetchData2() {
  _fetchData2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee9(path) {
    var _ref7,
        ctx,
        _ref7$req,
        req,
        baseUrl,
        options,
        res,
        data,
        _args9 = arguments;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _ref7 = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {}, ctx = _ref7.ctx, _ref7$req = _ref7.req, req = _ref7$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref7$req;
            _context9.prev = 1;
            _context9.next = 4;
            return _apiBaseUrl();

          case 4:
            baseUrl = _context9.sent;
            options = req ? {
              headers: {
                cookie: req.headers.cookie
              }
            } : {};
            _context9.next = 8;
            return fetch("".concat(baseUrl, "/").concat(path), options);

          case 8:
            res = _context9.sent;
            _context9.next = 11;
            return res.json();

          case 11:
            data = _context9.sent;

            if (res.ok) {
              _context9.next = 14;
              break;
            }

            throw data;

          case 14:
            return _context9.abrupt("return", Object.keys(data).length > 0 ? data : null);

          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](1);
            logger.error("CLIENT_FETCH_ERROR", path, _context9.t0);
            return _context9.abrupt("return", null);

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 17]]);
  }));
  return _fetchData2.apply(this, arguments);
}

function _apiBaseUrl() {
  if (typeof window === "undefined") {
    if (!process.env.NEXTAUTH_URL) {
      logger.warn("NEXTAUTH_URL", "NEXTAUTH_URL environment variable not set");
    }

    return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
  }

  return __NEXTAUTH.basePath;
}

function _now() {
  return Math.floor(Date.now() / 1000);
}

function BroadcastChannel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
  return {
    receive: function receive(onReceive) {
      if (typeof window === "undefined") return;
      window.addEventListener("storage", function () {
        var _ref6 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(event) {
          var message;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(event.key !== name)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  message = JSON.parse(event.newValue);

                  if (!((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data))) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  onReceive(message);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    },
    post: function post(message) {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
        timestamp: _now()
      })));
    }
  };
}

var _default = {
  getSession: getSession,
  getCsrfToken: getCsrfToken,
  getProviders: getProviders,
  useSession: useSession,
  signIn: signIn,
  signOut: signOut,
  Provider: Provider,
  setOptions: setOptions,
  options: setOptions,
  session: getSession,
  providers: getProviders,
  csrfToken: getCsrfToken,
  signin: signIn,
  signout: signOut
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/logger.js":
/*!***************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/logger.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLogger = setLogger;
exports.proxyLogger = proxyLogger;
exports.default = void 0;
const _logger = {
  error(code, ...message) {
    console.error(`[next-auth][error][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/errors#${code.toLowerCase()}`, ...message);
  },

  warn(code, ...message) {
    console.warn(`[next-auth][warn][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/warnings#${code.toLowerCase()}`, ...message);
  },

  debug(code, ...message) {
    var _process, _process$env;

    if (!((_process = process) !== null && process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env._NEXTAUTH_DEBUG)) return;
    console.log(`[next-auth][debug][${code.toLowerCase()}]`, ...message);
  }

};

function setLogger(newLogger = {}) {
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}

var _default = _logger;
exports.default = _default;

function proxyLogger(logger = _logger, basePath) {
  try {
    if (typeof window === "undefined") {
      return logger;
    }

    const clientLogger = {};

    for (const level in logger) {
      clientLogger[level] = (code, ...message) => {
        _logger[level](code, ...message);

        const url = `${basePath}/_log`;
        const body = new URLSearchParams({
          level,
          code,
          message: JSON.stringify(message.map(m => {
            if (m instanceof Error) {
              return {
                name: m.name,
                message: m.message,
                stack: m.stack
              };
            }

            return m;
          }))
        });

        if (navigator.sendBeacon) {
          return navigator.sendBeacon(url, body);
        }

        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        });
      };
    }

    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/parse-url.js":
/*!******************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/parse-url.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseUrl;

function parseUrl(url) {
  const defaultHost = 'http://localhost:3000';
  const defaultPath = '/api/auth';

  if (!url) {
    url = `${defaultHost}${defaultPath}`;
  }

  const protocol = url.startsWith('http:') ? 'http' : 'https';
  url = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const [_host, ..._path] = url.split('/');
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost;
  const basePath = _path.length > 0 ? `/${_path.join('/')}` : defaultPath;
  return {
    baseUrl,
    basePath
  };
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/index.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/index.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/index.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* purgecss start ignore */\r\n/* ! tailwindcss v2.2.16 | MIT License | https://tailwindcss.com */\r\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n/*\nDocument\n========\n*/\r\n/**\nUse a better box model (opinionated).\n*/\r\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\r\n/**\nUse a more readable tab size (opinionated).\n*/\r\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\r\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\r\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\r\n/*\nSections\n========\n*/\r\n/**\nRemove the margin in all browsers.\n*/\r\nbody {\n\tmargin: 0;\n}\r\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\r\nbody {\n\tfont-family:\n\t\tsystem-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, \n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\r\n/*\nGrouping content\n================\n*/\r\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\r\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\r\n/*\nText-level semantics\n====================\n*/\r\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\r\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\r\n/**\nAdd the correct font weight in Edge and Safari.\n*/\r\nb,\nstrong {\n\tfont-weight: bolder;\n}\r\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\r\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\r\n/**\nAdd the correct font size in all browsers.\n*/\r\nsmall {\n\tfont-size: 80%;\n}\r\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\r\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\r\nsub {\n\tbottom: -0.25em;\n}\r\nsup {\n\ttop: -0.5em;\n}\r\n/*\nTabular data\n============\n*/\r\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\r\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\r\n/*\nForms\n=====\n*/\r\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\r\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\r\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\r\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\r\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\r\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\r\n/**\nRemove the inner border and padding in Firefox.\n*/\r\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\r\n/**\nRestore the focus styles unset by the previous rule.\n*/\r\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\r\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\r\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\r\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\r\nlegend {\n\tpadding: 0;\n}\r\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\r\nprogress {\n\tvertical-align: baseline;\n}\r\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\r\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\r\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\r\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\r\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\r\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\r\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\r\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\r\n/*\nInteractive\n===========\n*/\r\n/*\nAdd the correct display in Chrome and Safari.\n*/\r\nsummary {\n\tdisplay: list-item;\n}\r\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\r\n/**\n * Removes the default spacing and border for appropriate elements.\n */\r\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\r\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\r\nfieldset {\n  margin: 0;\n  padding: 0;\n}\r\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\r\n/**\n * Tailwind custom reset styles\n */\r\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\r\nhtml {\n  font-family: Inter var, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\r\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\r\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\r\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\r\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\r\n/*\n * Ensure horizontal rules are visible by default\n */\r\nhr {\n  border-top-width: 1px;\n}\r\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\r\nimg {\n  border-style: solid;\n}\r\ntextarea {\n  resize: vertical;\n}\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\r\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\r\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\r\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\r\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\r\n:-moz-focusring {\n\toutline: auto;\n}\r\ntable {\n  border-collapse: collapse;\n}\r\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\r\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\r\na {\n  color: inherit;\n  text-decoration: inherit;\n}\r\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\r\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\r\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\r\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\r\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\r\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\r\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\r\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\r\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\r\n[hidden] {\n  display: none;\n}\r\n*, ::before, ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-ring-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-ring-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-shadow: 0 0 rgba(0,0,0,0);\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\tborder-radius: 0px;\n\tpadding-top: 0.5rem;\n\tpadding-right: 0.75rem;\n\tpadding-bottom: 0.5rem;\n\tpadding-left: 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t--tw-shadow: 0 0 rgba(0,0,0,0);\n}\r\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n\tborder-color: #2563eb;\n}\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\r\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\r\ninput::placeholder,textarea::placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\r\n::-webkit-datetime-edit-fields-wrapper {\n\tpadding: 0;\n}\r\n::-webkit-date-and-time-value {\n\tmin-height: 1.5em;\n}\r\nselect {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n\tbackground-position: right 0.5rem center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 1.5em 1.5em;\n\tpadding-right: 2.5rem;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n}\r\n[multiple] {\n\tbackground-image: none;\n\tbackground-image: initial;\n\tbackground-position: 0 0;\n\tbackground-position: initial;\n\tbackground-repeat: unset;\n\tbackground-size: auto auto;\n\tbackground-size: initial;\n\tpadding-right: 0.75rem;\n\t-webkit-print-color-adjust: unset;\n\t        color-adjust: unset;\n}\r\n[type='checkbox'],[type='radio'] {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding: 0;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-origin: border-box;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\tflex-shrink: 0;\n\theight: 1rem;\n\twidth: 1rem;\n\tcolor: #2563eb;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\t--tw-shadow: 0 0 rgba(0,0,0,0);\n}\r\n[type='checkbox'] {\n\tborder-radius: 0px;\n}\r\n[type='radio'] {\n\tborder-radius: 100%;\n}\r\n[type='checkbox']:focus,[type='radio']:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 2px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\r\n[type='checkbox']:checked,[type='radio']:checked {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\r\n[type='checkbox']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\r\n[type='radio']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\r\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\r\n[type='checkbox']:indeterminate {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\r\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\r\n[type='file'] {\n\tbackground: unset;\n\tborder-color: inherit;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-size: unset;\n\tline-height: inherit;\n}\r\n[type='file']:focus {\n\toutline: 1px auto -webkit-focus-ring-color;\n}\r\n.container {\n\twidth: 100%;\n}\r\n@media (min-width: 640px) {\r\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\r\n@media (min-width: 768px) {\r\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\r\n@media (min-width: 1024px) {\r\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\r\n@media (min-width: 1280px) {\r\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\r\n@media (min-width: 1536px) {\r\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\r\n.aspect-w-1,\n.aspect-w-2,\n.aspect-w-3,\n.aspect-w-4,\n.aspect-w-5,\n.aspect-w-6,\n.aspect-w-7,\n.aspect-w-8,\n.aspect-w-9,\n.aspect-w-10,\n.aspect-w-11,\n.aspect-w-12,\n.aspect-w-13,\n.aspect-w-14,\n.aspect-w-15,\n.aspect-w-16 {\n\tposition: relative;\n\tpadding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n}\r\n.aspect-w-1 > *,\n.aspect-w-2 > *,\n.aspect-w-3 > *,\n.aspect-w-4 > *,\n.aspect-w-5 > *,\n.aspect-w-6 > *,\n.aspect-w-7 > *,\n.aspect-w-8 > *,\n.aspect-w-9 > *,\n.aspect-w-10 > *,\n.aspect-w-11 > *,\n.aspect-w-12 > *,\n.aspect-w-13 > *,\n.aspect-w-14 > *,\n.aspect-w-15 > *,\n.aspect-w-16 > * {\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\r\n.aspect-w-1 {\n\t--tw-aspect-w: 1;\n}\r\n.aspect-w-3 {\n\t--tw-aspect-w: 3;\n}\r\n.aspect-w-10 {\n\t--tw-aspect-w: 10;\n}\r\n.aspect-h-1 {\n\t--tw-aspect-h: 1;\n}\r\n.aspect-h-2 {\n\t--tw-aspect-h: 2;\n}\r\n.aspect-h-6 {\n\t--tw-aspect-h: 6;\n}\r\narticle a {\r\n  color: rgb(49, 49, 182);\r\n  text-decoration: underline;\r\n}\r\n/* purgecss end ignore */\r\n.sr-only {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\tmargin: -1px;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tborder-width: 0;\n}\r\n.pointer-events-none {\n\tpointer-events: none;\n}\r\n.fixed {\n\tposition: fixed;\n}\r\n.absolute {\n\tposition: absolute;\n}\r\n.relative {\n\tposition: relative;\n}\r\n.inset-0 {\n\ttop: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n}\r\n.-inset-px {\n\ttop: -1px;\n\tright: -1px;\n\tbottom: -1px;\n\tleft: -1px;\n}\r\n.inset-x-0 {\n\tleft: 0px;\n\tright: 0px;\n}\r\n.inset-y-0 {\n\ttop: 0px;\n\tbottom: 0px;\n}\r\n.top-full {\n\ttop: 100%;\n}\r\n.top-1\\/2 {\n\ttop: 50%;\n}\r\n.top-0 {\n\ttop: 0px;\n}\r\n.left-0 {\n\tleft: 0px;\n}\r\n.right-0 {\n\tright: 0px;\n}\r\n.bottom-full {\n\tbottom: 100%;\n}\r\n.left-full {\n\tleft: 100%;\n}\r\n.z-40 {\n\tz-index: 40;\n}\r\n.z-10 {\n\tz-index: 10;\n}\r\n.order-2 {\n\torder: 2;\n}\r\n.order-1 {\n\torder: 1;\n}\r\n.col-span-1 {\n\tgrid-column: span 1 / span 1;\n}\r\n.col-span-6 {\n\tgrid-column: span 6 / span 6;\n}\r\n.col-start-2 {\n\tgrid-column-start: 2;\n}\r\n.row-start-1 {\n\tgrid-row-start: 1;\n}\r\n.-m-2 {\n\tmargin: -0.5rem;\n}\r\n.-m-3 {\n\tmargin: -0.75rem;\n}\r\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\r\n.-my-2 {\n\tmargin-top: -0.5rem;\n\tmargin-bottom: -0.5rem;\n}\r\n.my-4 {\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\r\n.-mx-5 {\n\tmargin-left: -1.25rem;\n\tmargin-right: -1.25rem;\n}\r\n.mx-3 {\n\tmargin-left: 0.75rem;\n\tmargin-right: 0.75rem;\n}\r\n.-mx-2 {\n\tmargin-left: -0.5rem;\n\tmargin-right: -0.5rem;\n}\r\n.-my-3 {\n\tmargin-top: -0.75rem;\n\tmargin-bottom: -0.75rem;\n}\r\n.-mx-8 {\n\tmargin-left: -2rem;\n\tmargin-right: -2rem;\n}\r\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\r\n.-mb-px {\n\tmargin-bottom: -1px;\n}\r\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\r\n.ml-4 {\n\tmargin-left: 1rem;\n}\r\n.mr-4 {\n\tmargin-right: 1rem;\n}\r\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\r\n.mt-12 {\n\tmargin-top: 3rem;\n}\r\n.-mr-2 {\n\tmargin-right: -0.5rem;\n}\r\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\r\n.mt-4 {\n\tmargin-top: 1rem;\n}\r\n.-mb-16 {\n\tmargin-bottom: -4rem;\n}\r\n.-mb-10 {\n\tmargin-bottom: -2.5rem;\n}\r\n.mt-5 {\n\tmargin-top: 1.25rem;\n}\r\n.mt-16 {\n\tmargin-top: 4rem;\n}\r\n.-mt-6 {\n\tmargin-top: -1.5rem;\n}\r\n.mt-8 {\n\tmargin-top: 2rem;\n}\r\n.mt-3 {\n\tmargin-top: 0.75rem;\n}\r\n.ml-3 {\n\tmargin-left: 0.75rem;\n}\r\n.-mr-1 {\n\tmargin-right: -0.25rem;\n}\r\n.ml-8 {\n\tmargin-left: 2rem;\n}\r\n.mt-1 {\n\tmargin-top: 0.25rem;\n}\r\n.ml-auto {\n\tmargin-left: auto;\n}\r\n.ml-6 {\n\tmargin-left: 1.5rem;\n}\r\n.ml-1 {\n\tmargin-left: 0.25rem;\n}\r\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\r\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\r\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\r\n.-ml-1 {\n\tmargin-left: -0.25rem;\n}\r\n.mr-2 {\n\tmargin-right: 0.5rem;\n}\r\n.mr-1\\.5 {\n\tmargin-right: 0.375rem;\n}\r\n.mr-1 {\n\tmargin-right: 0.25rem;\n}\r\n.mb-10 {\n\tmargin-bottom: 2.5rem;\n}\r\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\r\n.mb-8 {\n\tmargin-bottom: 2rem;\n}\r\n.mb-3 {\n\tmargin-bottom: 0.75rem;\n}\r\n.mb-12 {\n\tmargin-bottom: 3rem;\n}\r\n.mb-20 {\n\tmargin-bottom: 5rem;\n}\r\n.ml-16 {\n\tmargin-left: 4rem;\n}\r\n.mb-16 {\n\tmargin-bottom: 4rem;\n}\r\n.mb-32 {\n\tmargin-bottom: 8rem;\n}\r\n.-ml-4 {\n\tmargin-left: -1rem;\n}\r\n.ml-5 {\n\tmargin-left: 1.25rem;\n}\r\n.-mt-8 {\n\tmargin-top: -2rem;\n}\r\n.mt-28 {\n\tmargin-top: 7rem;\n}\r\n.mb-24 {\n\tmargin-bottom: 6rem;\n}\r\n.block {\n\tdisplay: block;\n}\r\n.\\!block {\n\tdisplay: block !important;\n}\r\n.inline-block {\n\tdisplay: inline-block;\n}\r\n.flex {\n\tdisplay: flex;\n}\r\n.inline-flex {\n\tdisplay: inline-flex;\n}\r\n.table {\n\tdisplay: table;\n}\r\n.flow-root {\n\tdisplay: flow-root;\n}\r\n.grid {\n\tdisplay: grid;\n}\r\n.contents {\n\tdisplay: contents;\n}\r\n.hidden {\n\tdisplay: none;\n}\r\n.h-6 {\n\theight: 1.5rem;\n}\r\n.h-10 {\n\theight: 2.5rem;\n}\r\n.h-16 {\n\theight: 4rem;\n}\r\n.h-\\[100px\\] {\n\theight: 100px;\n}\r\n.h-full {\n\theight: 100%;\n}\r\n.h-5 {\n\theight: 1.25rem;\n}\r\n.h-1\\/2 {\n\theight: 50%;\n}\r\n.h-12 {\n\theight: 3rem;\n}\r\n.h-48 {\n\theight: 12rem;\n}\r\n.h-56 {\n\theight: 14rem;\n}\r\n.h-7 {\n\theight: 1.75rem;\n}\r\n.h-4 {\n\theight: 1rem;\n}\r\n.h-8 {\n\theight: 2rem;\n}\r\n.h-64 {\n\theight: 16rem;\n}\r\n.min-h-screen {\n\tmin-height: 100vh;\n}\r\n.w-full {\n\twidth: 100%;\n}\r\n.w-6 {\n\twidth: 1.5rem;\n}\r\n.w-auto {\n\twidth: auto;\n}\r\n.w-5 {\n\twidth: 1.25rem;\n}\r\n.w-12 {\n\twidth: 3rem;\n}\r\n.w-10 {\n\twidth: 2.5rem;\n}\r\n.w-24 {\n\twidth: 6rem;\n}\r\n.w-4 {\n\twidth: 1rem;\n}\r\n.w-48 {\n\twidth: 12rem;\n}\r\n.w-screen {\n\twidth: 100vw;\n}\r\n.w-40 {\n\twidth: 10rem;\n}\r\n.min-w-0 {\n\tmin-width: 0px;\n}\r\n.min-w-full {\n\tmin-width: 100%;\n}\r\n.max-w-xs {\n\tmax-width: 20rem;\n}\r\n.max-w-7xl {\n\tmax-width: 80rem;\n}\r\n.max-w-md {\n\tmax-width: 28rem;\n}\r\n.max-w-prose {\n\tmax-width: 65ch;\n}\r\n.max-w-max {\n\tmax-width: -webkit-max-content;\n\tmax-width: -moz-max-content;\n\tmax-width: max-content;\n}\r\n.max-w-2xl {\n\tmax-width: 42rem;\n}\r\n.max-w-full {\n\tmax-width: 100%;\n}\r\n.max-w-3xl {\n\tmax-width: 48rem;\n}\r\n.max-w-lg {\n\tmax-width: 32rem;\n}\r\n.max-w-xl {\n\tmax-width: 36rem;\n}\r\n.max-w-4xl {\n\tmax-width: 56rem;\n}\r\n.flex-1 {\n\tflex: 1 1 0%;\n}\r\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\r\n.flex-grow {\n\tflex-grow: 1;\n}\r\n.origin-top {\n\ttransform-origin: top;\n}\r\n.origin-top-right {\n\ttransform-origin: top right;\n}\r\n.-translate-x-full {\n\t--tw-translate-x: -100%;\n\ttransform: var(--tw-transform);\n}\r\n.translate-x-0 {\n\t--tw-translate-x: 0px;\n\ttransform: var(--tw-transform);\n}\r\n.translate-x-full {\n\t--tw-translate-x: 100%;\n\ttransform: var(--tw-transform);\n}\r\n.translate-y-4 {\n\t--tw-translate-y: 1rem;\n\ttransform: var(--tw-transform);\n}\r\n.translate-y-0 {\n\t--tw-translate-y: 0px;\n\ttransform: var(--tw-transform);\n}\r\n.translate-x-1\\/2 {\n\t--tw-translate-x: 50%;\n\ttransform: var(--tw-transform);\n}\r\n.translate-y-1 {\n\t--tw-translate-y: 0.25rem;\n\ttransform: var(--tw-transform);\n}\r\n.translate-y-1\\/3 {\n\t--tw-translate-y: 33.333333%;\n\ttransform: var(--tw-transform);\n}\r\n.-translate-x-2\\/3 {\n\t--tw-translate-x: -66.666667%;\n\ttransform: var(--tw-transform);\n}\r\n.-translate-y-1\\/3 {\n\t--tw-translate-y: -33.333333%;\n\ttransform: var(--tw-transform);\n}\r\n.-translate-x-1\\/3 {\n\t--tw-translate-x: -33.333333%;\n\ttransform: var(--tw-transform);\n}\r\n.-rotate-180 {\n\t--tw-rotate: -180deg;\n\ttransform: var(--tw-transform);\n}\r\n.rotate-0 {\n\t--tw-rotate: 0deg;\n\ttransform: var(--tw-transform);\n}\r\n.scale-95 {\n\t--tw-scale-x: .95;\n\t--tw-scale-y: .95;\n\ttransform: var(--tw-transform);\n}\r\n.scale-100 {\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\ttransform: var(--tw-transform);\n}\r\n.transform {\n\ttransform: var(--tw-transform);\n}\r\n.cursor-pointer {\n\tcursor: pointer;\n}\r\n.appearance-none {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n}\r\n.grid-cols-2 {\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n}\r\n.grid-cols-3 {\n\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n}\r\n.grid-cols-1 {\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.grid-rows-2 {\n\tgrid-template-rows: repeat(2, minmax(0, 1fr));\n}\r\n.flex-col {\n\tflex-direction: column;\n}\r\n.flex-wrap {\n\tflex-wrap: wrap;\n}\r\n.items-start {\n\talign-items: flex-start;\n}\r\n.items-end {\n\talign-items: flex-end;\n}\r\n.items-center {\n\talign-items: center;\n}\r\n.items-baseline {\n\talign-items: baseline;\n}\r\n.justify-start {\n\tjustify-content: flex-start;\n}\r\n.justify-end {\n\tjustify-content: flex-end;\n}\r\n.justify-center {\n\tjustify-content: center;\n}\r\n.justify-between {\n\tjustify-content: space-between;\n}\r\n.justify-items-center {\n\tjustify-items: center;\n}\r\n.gap-8 {\n\tgrid-gap: 2rem;\n\tgap: 2rem;\n}\r\n.gap-4 {\n\tgrid-gap: 1rem;\n\tgap: 1rem;\n}\r\n.gap-6 {\n\tgrid-gap: 1.5rem;\n\tgap: 1.5rem;\n}\r\n.gap-x-4 {\n\tgrid-column-gap: 1rem;\n\t-moz-column-gap: 1rem;\n\t     column-gap: 1rem;\n}\r\n.gap-y-10 {\n\tgrid-row-gap: 2.5rem;\n\trow-gap: 2.5rem;\n}\r\n.gap-x-8 {\n\tgrid-column-gap: 2rem;\n\t-moz-column-gap: 2rem;\n\t     column-gap: 2rem;\n}\r\n.gap-y-12 {\n\tgrid-row-gap: 3rem;\n\trow-gap: 3rem;\n}\r\n.gap-y-16 {\n\tgrid-row-gap: 4rem;\n\trow-gap: 4rem;\n}\r\n.gap-y-4 {\n\tgrid-row-gap: 1rem;\n\trow-gap: 1rem;\n}\r\n.gap-y-6 {\n\tgrid-row-gap: 1.5rem;\n\trow-gap: 1.5rem;\n}\r\n.gap-x-6 {\n\tgrid-column-gap: 1.5rem;\n\t-moz-column-gap: 1.5rem;\n\t     column-gap: 1.5rem;\n}\r\n.gap-y-20 {\n\tgrid-row-gap: 5rem;\n\trow-gap: 5rem;\n}\r\n.gap-y-8 {\n\tgrid-row-gap: 2rem;\n\trow-gap: 2rem;\n}\r\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(2rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-10 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n}\r\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\r\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\r\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.25rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\r\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\r\n.space-x-10 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(2.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.75rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.-space-y-px > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(-1px * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(-1px * var(--tw-space-y-reverse));\n}\r\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n\t--tw-divide-y-reverse: 0;\n\tborder-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n\tborder-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\r\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-divide-y-reverse: 0;\n\tborder-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n\tborder-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\r\n.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-divide-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-divide-opacity));\n}\r\n.divide-gray-50 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-divide-opacity: 1;\n\tborder-color: rgba(249, 250, 251, var(--tw-divide-opacity));\n}\r\n.overflow-hidden {\n\toverflow: hidden;\n}\r\n.overflow-y-auto {\n\toverflow-y: auto;\n}\r\n.whitespace-nowrap {\n\twhite-space: nowrap;\n}\r\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\r\n.rounded-lg {\n\tborder-radius: 0.5rem;\n}\r\n.rounded-full {\n\tborder-radius: 9999px;\n}\r\n.rounded-xl {\n\tborder-radius: 0.75rem;\n}\r\n.rounded-none {\n\tborder-radius: 0px;\n}\r\n.rounded {\n\tborder-radius: 0.25rem;\n}\r\n.rounded-3xl {\n\tborder-radius: 1.5rem;\n}\r\n.rounded-t-md {\n\tborder-top-left-radius: 0.375rem;\n\tborder-top-right-radius: 0.375rem;\n}\r\n.rounded-b-md {\n\tborder-bottom-right-radius: 0.375rem;\n\tborder-bottom-left-radius: 0.375rem;\n}\r\n.border {\n\tborder-width: 1px;\n}\r\n.border-0 {\n\tborder-width: 0px;\n}\r\n.border-b {\n\tborder-bottom-width: 1px;\n}\r\n.border-b-2 {\n\tborder-bottom-width: 2px;\n}\r\n.border-t {\n\tborder-top-width: 1px;\n}\r\n.border-gray-200 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\r\n.border-lime {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(132, 204, 22, var(--tw-border-opacity));\n}\r\n.border-transparent {\n\tborder-color: transparent;\n}\r\n.border-gray-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\r\n.border-gray-100 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(243, 244, 246, var(--tw-border-opacity));\n}\r\n.border-accent-7 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(51, 51, 51, var(--tw-border-opacity));\n}\r\n.border-accent-2 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(234, 234, 234, var(--tw-border-opacity));\n}\r\n.border-black {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\r\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\r\n.bg-black {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\r\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\r\n.bg-lime {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(132, 204, 22, var(--tw-bg-opacity));\n}\r\n.bg-gray-900 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\r\n.bg-gray-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n\tbackground-color: transparent;\n}\r\n.bg-gray-50 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\r\n.bg-indigo-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\r\n.bg-indigo-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\r\n.bg-gray-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\r\n.bg-accent-7 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\r\n.bg-accent-1 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(250, 250, 250, var(--tw-bg-opacity));\n}\r\n.bg-purple-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(139, 92, 246, var(--tw-bg-opacity));\n}\r\n.bg-green-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(209, 250, 229, var(--tw-bg-opacity));\n}\r\n.bg-opacity-25 {\n\t--tw-bg-opacity: 0.25;\n}\r\n.bg-opacity-75 {\n\t--tw-bg-opacity: 0.75;\n}\r\n.bg-clip-text {\n\t-webkit-background-clip: text;\n\t        background-clip: text;\n}\r\n.object-cover {\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\r\n.object-center {\n\t-o-object-position: center;\n\t   object-position: center;\n}\r\n.p-2 {\n\tpadding: 0.5rem;\n}\r\n.p-1 {\n\tpadding: 0.25rem;\n}\r\n.p-3 {\n\tpadding: 0.75rem;\n}\r\n.p-6 {\n\tpadding: 1.5rem;\n}\r\n.p-4 {\n\tpadding: 1rem;\n}\r\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\r\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\r\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\r\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\r\n.py-16 {\n\tpadding-top: 4rem;\n\tpadding-bottom: 4rem;\n}\r\n.py-20 {\n\tpadding-top: 5rem;\n\tpadding-bottom: 5rem;\n}\r\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\r\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\r\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\r\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\r\n.px-3 {\n\tpadding-left: 0.75rem;\n\tpadding-right: 0.75rem;\n}\r\n.py-3 {\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\r\n.py-0\\.5 {\n\tpadding-top: 0.125rem;\n\tpadding-bottom: 0.125rem;\n}\r\n.py-0 {\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\r\n.px-6 {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\r\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\r\n.py-8 {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\r\n.py-\\[20px\\] {\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n}\r\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\r\n.px-\\[30\\] {\n\tpadding-left: 30;\n\tpadding-right: 30;\n}\r\n.py-24 {\n\tpadding-top: 6rem;\n\tpadding-bottom: 6rem;\n}\r\n.px-12 {\n\tpadding-left: 3rem;\n\tpadding-right: 3rem;\n}\r\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\r\n.pb-12 {\n\tpadding-bottom: 3rem;\n}\r\n.pt-5 {\n\tpadding-top: 1.25rem;\n}\r\n.pb-2 {\n\tpadding-bottom: 0.5rem;\n}\r\n.pt-10 {\n\tpadding-top: 2.5rem;\n}\r\n.pb-8 {\n\tpadding-bottom: 2rem;\n}\r\n.pt-px {\n\tpadding-top: 1px;\n}\r\n.pt-\\[10px\\] {\n\tpadding-top: 10px;\n}\r\n.pt-6 {\n\tpadding-top: 1.5rem;\n}\r\n.pt-4 {\n\tpadding-top: 1rem;\n}\r\n.pb-6 {\n\tpadding-bottom: 1.5rem;\n}\r\n.pr-2 {\n\tpadding-right: 0.5rem;\n}\r\n.pb-3 {\n\tpadding-bottom: 0.75rem;\n}\r\n.pt-16 {\n\tpadding-top: 4rem;\n}\r\n.pb-16 {\n\tpadding-bottom: 4rem;\n}\r\n.pb-5 {\n\tpadding-bottom: 1.25rem;\n}\r\n.pt-12 {\n\tpadding-top: 3rem;\n}\r\n.pl-3 {\n\tpadding-left: 0.75rem;\n}\r\n.pl-1 {\n\tpadding-left: 0.25rem;\n}\r\n.pb-4 {\n\tpadding-bottom: 1rem;\n}\r\n.pt-24 {\n\tpadding-top: 6rem;\n}\r\n.pb-10 {\n\tpadding-bottom: 2.5rem;\n}\r\n.pb-24 {\n\tpadding-bottom: 6rem;\n}\r\n.pb-20 {\n\tpadding-bottom: 5rem;\n}\r\n.pr-12 {\n\tpadding-right: 3rem;\n}\r\n.pl-4 {\n\tpadding-left: 1rem;\n}\r\n.pr-8 {\n\tpadding-right: 2rem;\n}\r\n.pl-20 {\n\tpadding-left: 5rem;\n}\r\n.pt-2 {\n\tpadding-top: 0.5rem;\n}\r\n.pt-8 {\n\tpadding-top: 2rem;\n}\r\n.text-left {\n\ttext-align: left;\n}\r\n.text-center {\n\ttext-align: center;\n}\r\n.align-top {\n\tvertical-align: top;\n}\r\n.align-bottom {\n\tvertical-align: bottom;\n}\r\n.text-base {\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\r\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\r\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\r\n.text-4xl {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\r\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\r\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\r\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\r\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\r\n.text-6xl {\n\tfont-size: 2.75rem;\n}\r\n.text-5xl {\n\tfont-size: 2.5rem;\n}\r\n.font-medium {\n\tfont-weight: 500;\n}\r\n.font-semibold {\n\tfont-weight: 600;\n}\r\n.font-extrabold {\n\tfont-weight: 800;\n}\r\n.font-bold {\n\tfont-weight: 700;\n}\r\n.uppercase {\n\ttext-transform: uppercase;\n}\r\n.leading-5 {\n\tline-height: 1.25rem;\n}\r\n.leading-6 {\n\tline-height: 1.5rem;\n}\r\n.leading-tight {\n\tline-height: 1.2;\n}\r\n.leading-7 {\n\tline-height: 1.75rem;\n}\r\n.leading-snug {\n\tline-height: 1.375;\n}\r\n.leading-relaxed {\n\tline-height: 1.625;\n}\r\n.leading-8 {\n\tline-height: 2rem;\n}\r\n.tracking-wide {\n\tletter-spacing: 0.025em;\n}\r\n.tracking-tight {\n\tletter-spacing: -0.025em;\n}\r\n.tracking-wider {\n\tletter-spacing: 0.05em;\n}\r\n.tracking-tighter {\n\tletter-spacing: -.04em;\n}\r\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\r\n.text-lime {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(132, 204, 22, var(--tw-text-opacity));\n}\r\n.text-gray-900 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\r\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\r\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\r\n.text-gray-300 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\n}\r\n.text-transparent {\n\tcolor: transparent;\n}\r\n.text-cyan-100 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(207, 250, 254, var(--tw-text-opacity));\n}\r\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\r\n.underline {\n\ttext-decoration: underline;\n}\r\n.placeholder-gray-500::-moz-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-500:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\r\n.placeholder-gray-500::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\r\n.opacity-0 {\n\topacity: 0;\n}\r\n.opacity-100 {\n\topacity: 1;\n}\r\n.opacity-25 {\n\topacity: 0.25;\n}\r\n.shadow-xl {\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow {\n\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-sm {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-small {\n\t--tw-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.ring-1 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\r\n.ring-2 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\r\n.ring-black {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\r\n.ring-lime {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(132, 204, 22, var(--tw-ring-opacity));\n}\r\n.ring-opacity-5 {\n\t--tw-ring-opacity: 0.05;\n}\r\n.filter {\n\tfilter: var(--tw-filter);\n}\r\n.transition-opacity {\n\ttransition-property: opacity;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.transition-colors {\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.transition-all {\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.transition-shadow {\n\ttransition-property: box-shadow;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.duration-300 {\n\ttransition-duration: 300ms;\n}\r\n.duration-200 {\n\ttransition-duration: 200ms;\n}\r\n.duration-150 {\n\ttransition-duration: 150ms;\n}\r\n.duration-100 {\n\ttransition-duration: 100ms;\n}\r\n.duration-75 {\n\ttransition-duration: 75ms;\n}\r\n.ease-linear {\n\ttransition-timing-function: linear;\n}\r\n.ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.ease-out {\n\ttransition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\r\n.ease-in {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\r\n.hover\\:bg-lime:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(132, 204, 22, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-800:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-700:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-100:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-gray-50:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-indigo-700:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-indigo-200:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(199, 210, 254, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-white:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-purple-400:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(167, 139, 250, var(--tw-bg-opacity));\n}\r\n.hover\\:bg-indigo-50:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\r\n.hover\\:from-teal-600:hover {\n\t--tw-gradient-from: #0d9488;\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(13, 148, 136, 0));\n}\r\n.hover\\:to-cyan-700:hover {\n\t--tw-gradient-to: #0e7490;\n}\r\n.hover\\:text-gray-800:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-600:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-300:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-200:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(229, 231, 235, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-500:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-900:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\r\n.hover\\:text-gray-700:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\r\n.hover\\:text-success:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 112, 243, var(--tw-text-opacity));\n}\r\n.hover\\:text-black:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\n}\r\n.hover\\:underline:hover {\n\ttext-decoration: underline;\n}\r\n.hover\\:shadow-medium:hover {\n\t--tw-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n\tbox-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.focus\\:z-10:focus {\n\tz-index: 10;\n}\r\n.focus\\:border-lime:focus {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(132, 204, 22, var(--tw-border-opacity));\n}\r\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\r\n.focus\\:ring-1:focus {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\r\n.focus\\:ring-2:focus {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\r\n.focus\\:ring-inset:focus {\n\t--tw-ring-inset: inset;\n}\r\n.focus\\:ring-lime:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(132, 204, 22, var(--tw-ring-opacity));\n}\r\n.focus\\:ring-white:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));\n}\r\n.focus\\:ring-indigo-500:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity));\n}\r\n.focus\\:ring-indigo-600:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(79, 70, 229, var(--tw-ring-opacity));\n}\r\n.focus\\:ring-cyan-400:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(34, 211, 238, var(--tw-ring-opacity));\n}\r\n.focus\\:ring-offset-2:focus {\n\t--tw-ring-offset-width: 2px;\n}\r\n.focus\\:ring-offset-gray-50:focus {\n\t--tw-ring-offset-color: #f9fafb;\n}\r\n.focus\\:ring-offset-gray-900:focus {\n\t--tw-ring-offset-color: #111827;\n}\r\n.group:hover .group-hover\\:text-lime {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(132, 204, 22, var(--tw-text-opacity));\n}\r\n.group:hover .group-hover\\:text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\r\n.group:hover .group-hover\\:opacity-75 {\n\topacity: 0.75;\n}\r\n@media (min-width: 640px) {\r\n\t.sm\\:aspect-w-1,\n.sm\\:aspect-w-2,\n.sm\\:aspect-w-3,\n.sm\\:aspect-w-4,\n.sm\\:aspect-w-5,\n.sm\\:aspect-w-6,\n.sm\\:aspect-w-7,\n.sm\\:aspect-w-8,\n.sm\\:aspect-w-9,\n.sm\\:aspect-w-10,\n.sm\\:aspect-w-11,\n.sm\\:aspect-w-12,\n.sm\\:aspect-w-13,\n.sm\\:aspect-w-14,\n.sm\\:aspect-w-15,\n.sm\\:aspect-w-16 {\n\t\tposition: relative;\n\t\tpadding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n\t}\r\n\t.sm\\:aspect-w-1,\n.sm\\:aspect-w-2,\n.sm\\:aspect-w-3,\n.sm\\:aspect-w-4,\n.sm\\:aspect-w-5,\n.sm\\:aspect-w-6,\n.sm\\:aspect-w-7,\n.sm\\:aspect-w-8,\n.sm\\:aspect-w-9,\n.sm\\:aspect-w-10,\n.sm\\:aspect-w-11,\n.sm\\:aspect-w-12,\n.sm\\:aspect-w-13,\n.sm\\:aspect-w-14,\n.sm\\:aspect-w-15,\n.sm\\:aspect-w-16 {\n\t\tposition: relative;\n\t\tpadding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n\t}\r\n\t.sm\\:aspect-w-1 > *,\n.sm\\:aspect-w-2 > *,\n.sm\\:aspect-w-3 > *,\n.sm\\:aspect-w-4 > *,\n.sm\\:aspect-w-5 > *,\n.sm\\:aspect-w-6 > *,\n.sm\\:aspect-w-7 > *,\n.sm\\:aspect-w-8 > *,\n.sm\\:aspect-w-9 > *,\n.sm\\:aspect-w-10 > *,\n.sm\\:aspect-w-11 > *,\n.sm\\:aspect-w-12 > *,\n.sm\\:aspect-w-13 > *,\n.sm\\:aspect-w-14 > *,\n.sm\\:aspect-w-15 > *,\n.sm\\:aspect-w-16 > * {\n\t\tposition: absolute;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t}\r\n\t.sm\\:aspect-w-1 > *,\n.sm\\:aspect-w-2 > *,\n.sm\\:aspect-w-3 > *,\n.sm\\:aspect-w-4 > *,\n.sm\\:aspect-w-5 > *,\n.sm\\:aspect-w-6 > *,\n.sm\\:aspect-w-7 > *,\n.sm\\:aspect-w-8 > *,\n.sm\\:aspect-w-9 > *,\n.sm\\:aspect-w-10 > *,\n.sm\\:aspect-w-11 > *,\n.sm\\:aspect-w-12 > *,\n.sm\\:aspect-w-13 > *,\n.sm\\:aspect-w-14 > *,\n.sm\\:aspect-w-15 > *,\n.sm\\:aspect-w-16 > * {\n\t\tposition: absolute;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t}\r\n\t.sm\\:aspect-w-2 {\n\t\t--tw-aspect-w: 2;\n\t}\r\n\t.sm\\:aspect-w-16 {\n\t\t--tw-aspect-w: 16;\n\t}\r\n\t.sm\\:aspect-h-1 {\n\t\t--tw-aspect-h: 1;\n\t}\r\n\t.sm\\:aspect-h-7 {\n\t\t--tw-aspect-h: 7;\n\t}\r\n\t.sm\\:col-span-2 {\n\t\tgrid-column: span 2 / span 2;\n\t}\r\n\t.sm\\:my-8 {\n\t\tmargin-top: 2rem;\n\t\tmargin-bottom: 2rem;\n\t}\r\n\t.sm\\:mx-0 {\n\t\tmargin-left: 0px;\n\t\tmargin-right: 0px;\n\t}\r\n\t.sm\\:mx-auto {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\r\n\t.sm\\:mt-4 {\n\t\tmargin-top: 1rem;\n\t}\r\n\t.sm\\:mt-5 {\n\t\tmargin-top: 1.25rem;\n\t}\r\n\t.sm\\:mt-12 {\n\t\tmargin-top: 3rem;\n\t}\r\n\t.sm\\:-mb-48 {\n\t\tmargin-bottom: -12rem;\n\t}\r\n\t.sm\\:-mb-24 {\n\t\tmargin-bottom: -6rem;\n\t}\r\n\t.sm\\:ml-6 {\n\t\tmargin-left: 1.5rem;\n\t}\r\n\t.sm\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\r\n\t.sm\\:ml-4 {\n\t\tmargin-left: 1rem;\n\t}\r\n\t.sm\\:mt-6 {\n\t\tmargin-top: 1.5rem;\n\t}\r\n\t.sm\\:ml-3 {\n\t\tmargin-left: 0.75rem;\n\t}\r\n\t.sm\\:mt-8 {\n\t\tmargin-top: 2rem;\n\t}\r\n\t.sm\\:ml-7 {\n\t\tmargin-left: 1.75rem;\n\t}\r\n\t.sm\\:block {\n\t\tdisplay: block;\n\t}\r\n\t.sm\\:inline-block {\n\t\tdisplay: inline-block;\n\t}\r\n\t.sm\\:flex {\n\t\tdisplay: flex;\n\t}\r\n\t.sm\\:grid {\n\t\tdisplay: grid;\n\t}\r\n\t.sm\\:h-72 {\n\t\theight: 18rem;\n\t}\r\n\t.sm\\:h-screen {\n\t\theight: 100vh;\n\t}\r\n\t.sm\\:h-10 {\n\t\theight: 2.5rem;\n\t}\r\n\t.sm\\:w-full {\n\t\twidth: 100%;\n\t}\r\n\t.sm\\:w-auto {\n\t\twidth: auto;\n\t}\r\n\t.sm\\:max-w-md {\n\t\tmax-width: 28rem;\n\t}\r\n\t.sm\\:max-w-2xl {\n\t\tmax-width: 42rem;\n\t}\r\n\t.sm\\:max-w-3xl {\n\t\tmax-width: 48rem;\n\t}\r\n\t.sm\\:max-w-lg {\n\t\tmax-width: 32rem;\n\t}\r\n\t.sm\\:max-w-7xl {\n\t\tmax-width: 80rem;\n\t}\r\n\t.sm\\:max-w-sm {\n\t\tmax-width: 24rem;\n\t}\r\n\t.sm\\:max-w-xl {\n\t\tmax-width: 36rem;\n\t}\r\n\t.sm\\:translate-y-0 {\n\t\t--tw-translate-y: 0px;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.sm\\:scale-95 {\n\t\t--tw-scale-x: .95;\n\t\t--tw-scale-y: .95;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.sm\\:scale-100 {\n\t\t--tw-scale-x: 1;\n\t\t--tw-scale-y: 1;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.sm\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\r\n\t.sm\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\r\n\t.sm\\:flex-row {\n\t\tflex-direction: row;\n\t}\r\n\t.sm\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\r\n\t.sm\\:items-center {\n\t\talign-items: center;\n\t}\r\n\t.sm\\:justify-center {\n\t\tjustify-content: center;\n\t}\r\n\t.sm\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\r\n\t.sm\\:gap-8 {\n\t\tgrid-gap: 2rem;\n\t\tgap: 2rem;\n\t}\r\n\t.sm\\:gap-6 {\n\t\tgrid-gap: 1.5rem;\n\t\tgap: 1.5rem;\n\t}\r\n\t.sm\\:gap-x-8 {\n\t\tgrid-column-gap: 2rem;\n\t\t-moz-column-gap: 2rem;\n\t\t     column-gap: 2rem;\n\t}\r\n\t.sm\\:gap-x-6 {\n\t\tgrid-column-gap: 1.5rem;\n\t\t-moz-column-gap: 1.5rem;\n\t\t     column-gap: 1.5rem;\n\t}\r\n\t.sm\\:gap-y-10 {\n\t\tgrid-row-gap: 2.5rem;\n\t\trow-gap: 2.5rem;\n\t}\r\n\t.sm\\:gap-y-16 {\n\t\tgrid-row-gap: 4rem;\n\t\trow-gap: 4rem;\n\t}\r\n\t.sm\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-y-reverse: 0;\n\t\tmargin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n\t\tmargin-bottom: calc(1rem * var(--tw-space-y-reverse));\n\t}\r\n\t.sm\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-x-reverse: 0;\n\t\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\n\t\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n\t}\r\n\t.sm\\:truncate {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\r\n\t.sm\\:border-0 {\n\t\tborder-width: 0px;\n\t}\r\n\t.sm\\:border-l {\n\t\tborder-left-width: 1px;\n\t}\r\n\t.sm\\:border-r {\n\t\tborder-right-width: 1px;\n\t}\r\n\t.sm\\:border-gray-200 {\n\t\t--tw-border-opacity: 1;\n\t\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t}\r\n\t.sm\\:border-transparent {\n\t\tborder-color: transparent;\n\t}\r\n\t.sm\\:p-0 {\n\t\tpadding: 0px;\n\t}\r\n\t.sm\\:p-6 {\n\t\tpadding: 1.5rem;\n\t}\r\n\t.sm\\:p-8 {\n\t\tpadding: 2rem;\n\t}\r\n\t.sm\\:px-6 {\n\t\tpadding-left: 1.5rem;\n\t\tpadding-right: 1.5rem;\n\t}\r\n\t.sm\\:py-24 {\n\t\tpadding-top: 6rem;\n\t\tpadding-bottom: 6rem;\n\t}\r\n\t.sm\\:py-20 {\n\t\tpadding-top: 5rem;\n\t\tpadding-bottom: 5rem;\n\t}\r\n\t.sm\\:py-32 {\n\t\tpadding-top: 8rem;\n\t\tpadding-bottom: 8rem;\n\t}\r\n\t.sm\\:py-16 {\n\t\tpadding-top: 4rem;\n\t\tpadding-bottom: 4rem;\n\t}\r\n\t.sm\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\r\n\t.sm\\:px-5 {\n\t\tpadding-left: 1.25rem;\n\t\tpadding-right: 1.25rem;\n\t}\r\n\t.sm\\:py-12 {\n\t\tpadding-top: 3rem;\n\t\tpadding-bottom: 3rem;\n\t}\r\n\t.sm\\:px-8 {\n\t\tpadding-left: 2rem;\n\t\tpadding-right: 2rem;\n\t}\r\n\t.sm\\:pt-16 {\n\t\tpadding-top: 4rem;\n\t}\r\n\t.sm\\:pb-5 {\n\t\tpadding-bottom: 1.25rem;\n\t}\r\n\t.sm\\:pt-24 {\n\t\tpadding-top: 6rem;\n\t}\r\n\t.sm\\:pl-6 {\n\t\tpadding-left: 1.5rem;\n\t}\r\n\t.sm\\:pb-32 {\n\t\tpadding-bottom: 8rem;\n\t}\r\n\t.sm\\:pb-16 {\n\t\tpadding-bottom: 4rem;\n\t}\r\n\t.sm\\:text-center {\n\t\ttext-align: center;\n\t}\r\n\t.sm\\:align-top {\n\t\tvertical-align: top;\n\t}\r\n\t.sm\\:align-middle {\n\t\tvertical-align: middle;\n\t}\r\n\t.sm\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\r\n\t.sm\\:text-base {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t}\r\n\t.sm\\:text-6xl {\n\t\tfont-size: 2.75rem;\n\t}\r\n\t.sm\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\r\n\t.sm\\:text-4xl {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\r\n\t.sm\\:text-5xl {\n\t\tfont-size: 2.5rem;\n\t}\r\n\t.sm\\:text-3xl {\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\r\n\t.sm\\:text-lg {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\n}\r\n@media (min-width: 768px) {\r\n\t.md\\:absolute {\n\t\tposition: absolute;\n\t}\r\n\t.md\\:left-0 {\n\t\tleft: 0px;\n\t}\r\n\t.md\\:col-span-2 {\n\t\tgrid-column: span 2 / span 2;\n\t}\r\n\t.md\\:col-span-8 {\n\t\tgrid-column: span 8 / span 8;\n\t}\r\n\t.md\\:col-start-3 {\n\t\tgrid-column-start: 3;\n\t}\r\n\t.md\\:row-start-1 {\n\t\tgrid-row-start: 1;\n\t}\r\n\t.md\\:row-start-2 {\n\t\tgrid-row-start: 2;\n\t}\r\n\t.md\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\r\n\t.md\\:ml-10 {\n\t\tmargin-left: 2.5rem;\n\t}\r\n\t.md\\:ml-auto {\n\t\tmargin-left: auto;\n\t}\r\n\t.md\\:mb-12 {\n\t\tmargin-bottom: 3rem;\n\t}\r\n\t.md\\:mb-16 {\n\t\tmargin-bottom: 4rem;\n\t}\r\n\t.md\\:mb-28 {\n\t\tmargin-bottom: 7rem;\n\t}\r\n\t.md\\:mb-0 {\n\t\tmargin-bottom: 0px;\n\t}\r\n\t.md\\:mt-16 {\n\t\tmargin-top: 4rem;\n\t}\r\n\t.md\\:mt-5 {\n\t\tmargin-top: 1.25rem;\n\t}\r\n\t.md\\:block {\n\t\tdisplay: block;\n\t}\r\n\t.md\\:flex {\n\t\tdisplay: flex;\n\t}\r\n\t.md\\:grid {\n\t\tdisplay: grid;\n\t}\r\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\r\n\t.md\\:h-full {\n\t\theight: 100%;\n\t}\r\n\t.md\\:h-96 {\n\t\theight: 24rem;\n\t}\r\n\t.md\\:w-auto {\n\t\twidth: auto;\n\t}\r\n\t.md\\:w-1\\/2 {\n\t\twidth: 50%;\n\t}\r\n\t.md\\:max-w-3xl {\n\t\tmax-width: 48rem;\n\t}\r\n\t.md\\:flex-1 {\n\t\tflex: 1 1 0%;\n\t}\r\n\t.md\\:grid-flow-col {\n\t\tgrid-auto-flow: column;\n\t}\r\n\t.md\\:auto-rows-min {\n\t\tgrid-auto-rows: -webkit-min-content;\n\t\tgrid-auto-rows: min-content;\n\t}\r\n\t.md\\:grid-cols-12 {\n\t\tgrid-template-columns: repeat(12, minmax(0, 1fr));\n\t}\r\n\t.md\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\r\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\r\n\t.md\\:place-items-center {\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t\tplace-items: center;\n\t}\r\n\t.md\\:items-center {\n\t\talign-items: center;\n\t}\r\n\t.md\\:justify-start {\n\t\tjustify-content: flex-start;\n\t}\r\n\t.md\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\r\n\t.md\\:gap-8 {\n\t\tgrid-gap: 2rem;\n\t\tgap: 2rem;\n\t}\r\n\t.md\\:gap-x-8 {\n\t\tgrid-column-gap: 2rem;\n\t\t-moz-column-gap: 2rem;\n\t\t     column-gap: 2rem;\n\t}\r\n\t.md\\:gap-y-16 {\n\t\tgrid-row-gap: 4rem;\n\t\trow-gap: 4rem;\n\t}\r\n\t.md\\:gap-y-10 {\n\t\tgrid-row-gap: 2.5rem;\n\t\trow-gap: 2.5rem;\n\t}\r\n\t.md\\:gap-x-16 {\n\t\tgrid-column-gap: 4rem;\n\t\t-moz-column-gap: 4rem;\n\t\t     column-gap: 4rem;\n\t}\r\n\t.md\\:gap-y-32 {\n\t\tgrid-row-gap: 8rem;\n\t\trow-gap: 8rem;\n\t}\r\n\t.md\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-x-reverse: 0;\n\t\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\n\t\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n\t}\r\n\t.md\\:space-x-10 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-x-reverse: 0;\n\t\tmargin-right: calc(2.5rem * var(--tw-space-x-reverse));\n\t\tmargin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n\t}\r\n\t.md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-x-reverse: 0;\n\t\tmargin-right: calc(2rem * var(--tw-space-x-reverse));\n\t\tmargin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n\t}\r\n\t.md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n\t\t--tw-space-y-reverse: 0;\n\t\tmargin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n\t\tmargin-bottom: calc(0px * var(--tw-space-y-reverse));\n\t}\r\n\t.md\\:py-28 {\n\t\tpadding-top: 7rem;\n\t\tpadding-bottom: 7rem;\n\t}\r\n\t.md\\:py-4 {\n\t\tpadding-top: 1rem;\n\t\tpadding-bottom: 1rem;\n\t}\r\n\t.md\\:px-10 {\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\r\n\t.md\\:pl-10 {\n\t\tpadding-left: 2.5rem;\n\t}\r\n\t.md\\:pb-20 {\n\t\tpadding-bottom: 5rem;\n\t}\r\n\t.md\\:pr-4 {\n\t\tpadding-right: 1rem;\n\t}\r\n\t.md\\:pr-8 {\n\t\tpadding-right: 2rem;\n\t}\r\n\t.md\\:pl-8 {\n\t\tpadding-left: 2rem;\n\t}\r\n\t.md\\:text-left {\n\t\ttext-align: left;\n\t}\r\n\t.md\\:text-7xl {\n\t\tfont-size: 4.5rem;\n\t}\r\n\t.md\\:text-4xl {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\r\n\t.md\\:text-6xl {\n\t\tfont-size: 2.75rem;\n\t}\r\n\t.md\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\r\n\t.md\\:text-lg {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\r\n\t.md\\:leading-none {\n\t\tline-height: 1;\n\t}\r\n\t.md\\:tracking-tighter {\n\t\tletter-spacing: -.04em;\n\t}\n}\r\n@media (min-width: 1024px) {\r\n\t.lg\\:aspect-w-1,\n.lg\\:aspect-w-2,\n.lg\\:aspect-w-3,\n.lg\\:aspect-w-4,\n.lg\\:aspect-w-5,\n.lg\\:aspect-w-6,\n.lg\\:aspect-w-7,\n.lg\\:aspect-w-8,\n.lg\\:aspect-w-9,\n.lg\\:aspect-w-10,\n.lg\\:aspect-w-11,\n.lg\\:aspect-w-12,\n.lg\\:aspect-w-13,\n.lg\\:aspect-w-14,\n.lg\\:aspect-w-15,\n.lg\\:aspect-w-16 {\n\t\tposition: relative;\n\t\tpadding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n\t}\r\n\t.lg\\:aspect-w-1 > *,\n.lg\\:aspect-w-2 > *,\n.lg\\:aspect-w-3 > *,\n.lg\\:aspect-w-4 > *,\n.lg\\:aspect-w-5 > *,\n.lg\\:aspect-w-6 > *,\n.lg\\:aspect-w-7 > *,\n.lg\\:aspect-w-8 > *,\n.lg\\:aspect-w-9 > *,\n.lg\\:aspect-w-10 > *,\n.lg\\:aspect-w-11 > *,\n.lg\\:aspect-w-12 > *,\n.lg\\:aspect-w-13 > *,\n.lg\\:aspect-w-14 > *,\n.lg\\:aspect-w-15 > *,\n.lg\\:aspect-w-16 > * {\n\t\tposition: absolute;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t}\r\n\t.lg\\:aspect-none {\n\t\tposition: static;\n\t\tpadding-bottom: 0;\n\t}\r\n\t.lg\\:aspect-none > * {\n\t\tposition: static;\n\t\theight: auto;\n\t\twidth: auto;\n\t\ttop: auto;\n\t\tright: auto;\n\t\tbottom: auto;\n\t\tleft: auto;\n\t}\r\n\t.lg\\:aspect-w-1 {\n\t\t--tw-aspect-w: 1;\n\t}\r\n\t.lg\\:absolute {\n\t\tposition: absolute;\n\t}\r\n\t.lg\\:relative {\n\t\tposition: relative;\n\t}\r\n\t.lg\\:inset-y-0 {\n\t\ttop: 0px;\n\t\tbottom: 0px;\n\t}\r\n\t.lg\\:right-0 {\n\t\tright: 0px;\n\t}\r\n\t.lg\\:left-1\\/2 {\n\t\tleft: 50%;\n\t}\r\n\t.lg\\:left-0 {\n\t\tleft: 0px;\n\t}\r\n\t.lg\\:z-10 {\n\t\tz-index: 10;\n\t}\r\n\t.lg\\:col-span-6 {\n\t\tgrid-column: span 6 / span 6;\n\t}\r\n\t.lg\\:col-span-4 {\n\t\tgrid-column: span 4 / span 4;\n\t}\r\n\t.lg\\:col-span-2 {\n\t\tgrid-column: span 2 / span 2;\n\t}\r\n\t.lg\\:col-span-10 {\n\t\tgrid-column: span 10 / span 10;\n\t}\r\n\t.lg\\:col-span-3 {\n\t\tgrid-column: span 3 / span 3;\n\t}\r\n\t.lg\\:col-start-1 {\n\t\tgrid-column-start: 1;\n\t}\r\n\t.lg\\:col-start-2 {\n\t\tgrid-column-start: 2;\n\t}\r\n\t.lg\\:col-start-9 {\n\t\tgrid-column-start: 9;\n\t}\r\n\t.lg\\:col-start-3 {\n\t\tgrid-column-start: 3;\n\t}\r\n\t.lg\\:col-start-4 {\n\t\tgrid-column-start: 4;\n\t}\r\n\t.lg\\:row-span-2 {\n\t\tgrid-row: span 2 / span 2;\n\t}\r\n\t.lg\\:row-start-1 {\n\t\tgrid-row-start: 1;\n\t}\r\n\t.lg\\:row-start-2 {\n\t\tgrid-row-start: 2;\n\t}\r\n\t.lg\\:m-0 {\n\t\tmargin: 0px;\n\t}\r\n\t.lg\\:mx-auto {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\r\n\t.lg\\:-my-8 {\n\t\tmargin-top: -2rem;\n\t\tmargin-bottom: -2rem;\n\t}\r\n\t.lg\\:mx-0 {\n\t\tmargin-left: 0px;\n\t\tmargin-right: 0px;\n\t}\r\n\t.lg\\:ml-0 {\n\t\tmargin-left: 0px;\n\t}\r\n\t.lg\\:ml-8 {\n\t\tmargin-left: 2rem;\n\t}\r\n\t.lg\\:mt-6 {\n\t\tmargin-top: 1.5rem;\n\t}\r\n\t.lg\\:-mb-80 {\n\t\tmargin-bottom: -20rem;\n\t}\r\n\t.lg\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\r\n\t.lg\\:ml-6 {\n\t\tmargin-left: 1.5rem;\n\t}\r\n\t.lg\\:ml-4 {\n\t\tmargin-left: 1rem;\n\t}\r\n\t.lg\\:mb-0 {\n\t\tmargin-bottom: 0px;\n\t}\r\n\t.lg\\:mt-20 {\n\t\tmargin-top: 5rem;\n\t}\r\n\t.lg\\:mr-0 {\n\t\tmargin-right: 0px;\n\t}\r\n\t.lg\\:ml-auto {\n\t\tmargin-left: auto;\n\t}\r\n\t.lg\\:block {\n\t\tdisplay: block;\n\t}\r\n\t.lg\\:flex {\n\t\tdisplay: flex;\n\t}\r\n\t.lg\\:grid {\n\t\tdisplay: grid;\n\t}\r\n\t.lg\\:hidden {\n\t\tdisplay: none;\n\t}\r\n\t.lg\\:h-full {\n\t\theight: 100%;\n\t}\r\n\t.lg\\:w-full {\n\t\twidth: 100%;\n\t}\r\n\t.lg\\:w-0 {\n\t\twidth: 0px;\n\t}\r\n\t.lg\\:w-1\\/2 {\n\t\twidth: 50%;\n\t}\r\n\t.lg\\:max-w-7xl {\n\t\tmax-width: 80rem;\n\t}\r\n\t.lg\\:max-w-none {\n\t\tmax-width: none;\n\t}\r\n\t.lg\\:max-w-lg {\n\t\tmax-width: 32rem;\n\t}\r\n\t.lg\\:max-w-3xl {\n\t\tmax-width: 48rem;\n\t}\r\n\t.lg\\:flex-1 {\n\t\tflex: 1 1 0%;\n\t}\r\n\t.lg\\:flex-shrink-0 {\n\t\tflex-shrink: 0;\n\t}\r\n\t.lg\\:flex-grow-0 {\n\t\tflex-grow: 0;\n\t}\r\n\t.lg\\:-translate-x-1\\/2 {\n\t\t--tw-translate-x: -50%;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.lg\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\r\n\t.lg\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\r\n\t.lg\\:grid-cols-12 {\n\t\tgrid-template-columns: repeat(12, minmax(0, 1fr));\n\t}\r\n\t.lg\\:grid-cols-10 {\n\t\tgrid-template-columns: repeat(10, minmax(0, 1fr));\n\t}\r\n\t.lg\\:grid-cols-4 {\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\r\n\t.lg\\:flex-row {\n\t\tflex-direction: row;\n\t}\r\n\t.lg\\:items-center {\n\t\talign-items: center;\n\t}\r\n\t.lg\\:justify-start {\n\t\tjustify-content: flex-start;\n\t}\r\n\t.lg\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\r\n\t.lg\\:gap-8 {\n\t\tgrid-gap: 2rem;\n\t\tgap: 2rem;\n\t}\r\n\t.lg\\:gap-x-8 {\n\t\tgrid-column-gap: 2rem;\n\t\t-moz-column-gap: 2rem;\n\t\t     column-gap: 2rem;\n\t}\r\n\t.lg\\:gap-x-32 {\n\t\tgrid-column-gap: 8rem;\n\t\t-moz-column-gap: 8rem;\n\t\t     column-gap: 8rem;\n\t}\r\n\t.lg\\:self-start {\n\t\talign-self: flex-start;\n\t}\r\n\t.lg\\:self-end {\n\t\talign-self: flex-end;\n\t}\r\n\t.lg\\:self-center {\n\t\talign-self: center;\n\t}\r\n\t.lg\\:self-stretch {\n\t\talign-self: stretch;\n\t}\r\n\t.lg\\:overflow-hidden {\n\t\toverflow: hidden;\n\t}\r\n\t.lg\\:rounded-3xl {\n\t\tborder-radius: 1.5rem;\n\t}\r\n\t.lg\\:bg-transparent {\n\t\tbackground-color: transparent;\n\t}\r\n\t.lg\\:p-0 {\n\t\tpadding: 0px;\n\t}\r\n\t.lg\\:px-8 {\n\t\tpadding-left: 2rem;\n\t\tpadding-right: 2rem;\n\t}\r\n\t.lg\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\r\n\t.lg\\:py-24 {\n\t\tpadding-top: 6rem;\n\t\tpadding-bottom: 6rem;\n\t}\r\n\t.lg\\:py-32 {\n\t\tpadding-top: 8rem;\n\t\tpadding-bottom: 8rem;\n\t}\r\n\t.lg\\:py-20 {\n\t\tpadding-top: 5rem;\n\t\tpadding-bottom: 5rem;\n\t}\r\n\t.lg\\:py-16 {\n\t\tpadding-top: 4rem;\n\t\tpadding-bottom: 4rem;\n\t}\r\n\t.lg\\:px-20 {\n\t\tpadding-left: 5rem;\n\t\tpadding-right: 5rem;\n\t}\r\n\t.lg\\:py-48 {\n\t\tpadding-top: 12rem;\n\t\tpadding-bottom: 12rem;\n\t}\r\n\t.lg\\:pt-8 {\n\t\tpadding-top: 2rem;\n\t}\r\n\t.lg\\:pb-14 {\n\t\tpadding-bottom: 3.5rem;\n\t}\r\n\t.lg\\:pt-32 {\n\t\tpadding-top: 8rem;\n\t}\r\n\t.lg\\:pb-0 {\n\t\tpadding-bottom: 0px;\n\t}\r\n\t.lg\\:pl-8 {\n\t\tpadding-left: 2rem;\n\t}\r\n\t.lg\\:pt-16 {\n\t\tpadding-top: 4rem;\n\t}\r\n\t.lg\\:pr-4 {\n\t\tpadding-right: 1rem;\n\t}\r\n\t.lg\\:pl-4 {\n\t\tpadding-left: 1rem;\n\t}\r\n\t.lg\\:pb-28 {\n\t\tpadding-bottom: 7rem;\n\t}\r\n\t.lg\\:pl-10 {\n\t\tpadding-left: 2.5rem;\n\t}\r\n\t.lg\\:text-left {\n\t\ttext-align: left;\n\t}\r\n\t.lg\\:text-center {\n\t\ttext-align: center;\n\t}\r\n\t.lg\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\r\n\t.lg\\:text-lg {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\r\n\t.lg\\:text-6xl {\n\t\tfont-size: 2.75rem;\n\t}\r\n\t.lg\\:text-5xl {\n\t\tfont-size: 2.5rem;\n\t}\r\n\t.lg\\:text-8xl {\n\t\tfont-size: 6.25rem;\n\t}\n}\r\n@media (min-width: 1280px) {\r\n\t.xl\\:bottom-auto {\n\t\tbottom: auto;\n\t}\r\n\t.xl\\:top-0 {\n\t\ttop: 0px;\n\t}\r\n\t.xl\\:col-span-1 {\n\t\tgrid-column: span 1 / span 1;\n\t}\r\n\t.xl\\:col-span-2 {\n\t\tgrid-column: span 2 / span 2;\n\t}\r\n\t.xl\\:col-span-3 {\n\t\tgrid-column: span 3 / span 3;\n\t}\r\n\t.xl\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\r\n\t.xl\\:mt-28 {\n\t\tmargin-top: 7rem;\n\t}\r\n\t.xl\\:inline {\n\t\tdisplay: inline;\n\t}\r\n\t.xl\\:grid {\n\t\tdisplay: grid;\n\t}\r\n\t.xl\\:translate-y-0 {\n\t\t--tw-translate-y: 0px;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.xl\\:-translate-y-1\\/2 {\n\t\t--tw-translate-y: -50%;\n\t\ttransform: var(--tw-transform);\n\t}\r\n\t.xl\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\r\n\t.xl\\:grid-cols-4 {\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\r\n\t.xl\\:gap-8 {\n\t\tgrid-gap: 2rem;\n\t\tgap: 2rem;\n\t}\r\n\t.xl\\:gap-x-8 {\n\t\tgrid-column-gap: 2rem;\n\t\t-moz-column-gap: 2rem;\n\t\t     column-gap: 2rem;\n\t}\r\n\t.xl\\:pb-32 {\n\t\tpadding-bottom: 8rem;\n\t}\r\n\t.xl\\:pr-16 {\n\t\tpadding-right: 4rem;\n\t}\r\n\t.xl\\:text-center {\n\t\ttext-align: center;\n\t}\r\n\t.xl\\:text-base {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t}\r\n\t.xl\\:text-6xl {\n\t\tfont-size: 2.75rem;\n\t}\r\n\t.xl\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n}\r\n", "",{"version":3,"sources":["webpack://styles/index.css","webpack://styles/%3Cinput%20css%20OZVkj_%3E","webpack://styles/%3Cinput%20css%204wzHWb%3E","<no source>"],"names":[],"mappings":"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,oBAAA;AHQmB;AAAnB;CGRA,sBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,gBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,gBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,oBAAA;AHQmB;AAAnB;CGRA,sBAAA;AHQmB;AAAnB;CGRA,iBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,iBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,oBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,sBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,oBAAA;AHQmB;AAAnB;CGRA,sBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,sBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,iBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,kBAAA;AHQmB;AAAnB;CGRA,oBAAA;AHQmB;AAAnB;CGRA,iBAAA;AHQmB;AAAnB;CGRA,gBAAA;AHQmB;AAAnB;CGRA,mBAAA;AHQmB;AAAnB;CGRA,cAAA;AHQmB;AAAnB;CGRA,yBAAA;AHQmB;AAAnB;CGRA,qBAAA;AHQmB;AAAnB;CGRA,aAAA;AHQmB;AAAnB;CGRA,oBAAA;AHQmB;AAAnB;CGRA,cAAA;AHQmB;AAAnB;CGRA,kBAAA;AHQmB;AAAnB;CGRA,aAAA;AHQmB;AAAnB;CGRA,iBAAA;AHQmB;AAAnB;CGRA,aAAA;AHQmB;AAAnB;CGRA,cAAA;AHQmB;AAAnB;CGRA,cAAA;AHQmB;AAAnB;CGRA,YAAA;AHQmB;AAAnB;CGRA,aAAA;AHQmB;AAAnB;CGRA,YAAA;AHQmB;AAAnB;CGRA,eAAA;AHQmB;AAAnB;CGRA,WAAA;AHQmB;AAAnB;CGRA,YAAA;AHQmB;AAAn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","sourcesContent":["/* purgecss start ignore */\r\n@tailwind base;\r\n@tailwind components;\r\narticle a {\r\n  color: rgb(49, 49, 182);\r\n  text-decoration: underline;\r\n}\r\n/* purgecss end ignore */\r\n@tailwind utilities;\r\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLGFBQWEsT0FBTyxNQUFNLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxPQUFPLEtBQUssUUFBUSxXQUFXLGVBQWUscUJBQXFCLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUsscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sS0FBSyxPQUFPLEtBQUssU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsTUFBTSxPQUFPLEtBQUssS0FBSyxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssUUFBUSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxPQUFPLEtBQUssS0FBSyx1QkFBdUIsdUJBQXVCLE1BQU0sTUFBTSxLQUFLLEtBQUssYUFBYSxNQUFNLE9BQU8sS0FBSyxLQUFLLHVCQUF1QixxQkFBcUIsTUFBTSxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUssYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLEtBQUssaUJBQWlCLFdBQVcsTUFBTSxLQUFLLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxTQUFTLEtBQUssS0FBSyx1QkFBdUIsdUJBQXVCLE1BQU0sT0FBTyxLQUFLLEtBQUssYUFBYSxhQUFhLE1BQU0sNEJBQTRCLEtBQUssT0FBTyx1QkFBdUIscUJBQXFCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLEtBQUssS0FBSyxhQUFhLE1BQU0sWUFBWSxLQUFLLEtBQUssYUFBYSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLGFBQWEsTUFBTSxVQUFVLGFBQWEsYUFBYSxNQUFNLE9BQU8sS0FBSyxLQUFLLFdBQVcsWUFBWSxNQUFNLFVBQVUsS0FBSyxTQUFTLFdBQVcsWUFBWSxXQUFXLE1BQU0sU0FBUyxLQUFLLFFBQVEsYUFBYSxPQUFPLG1CQUFtQixLQUFLLFlBQVkscUJBQXFCLHVCQUF1QixPQUFPLFNBQVMsS0FBSyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLFdBQVcsT0FBTyxRQUFRLHFCQUFxQixXQUFXLFdBQVcsTUFBTSxxQkFBcUIsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sb0JBQW9CLFdBQVcsV0FBVyxPQUFPLHNCQUFzQixXQUFXLFdBQVcsT0FBTyxzQkFBc0IsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLHNCQUFzQixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxvQkFBb0IsV0FBVyxXQUFXLE9BQU8sc0JBQXNCLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7QUFHbEI7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFF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QUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsdUpBQXNFO0FBQ3hFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9nYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9kaXN0L2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9kaXN0L2xpYi9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvZGlzdC9saWIvcGFyc2UtdXJsLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvaW5kZXguY3NzP2FjNTMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gIGlmICh3aW5kb3cgJiYgd2luZG93Lmd0YWcpIHtcclxuICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTLCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXHJcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgcGFyYW1zIH0pID0+IHtcclxuICBpZiAod2luZG93ICYmIHdpbmRvdy5ndGFnKSB7XHJcbiAgICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcyk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZ2EgZnJvbSAnLi4vbGliL2dhJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIGdhLnBhZ2V2aWV3KHVybCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1QgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAvL1doZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCBzdWJzY3JpYmUgdG8gcm91dGVyIGNoYW5nZXNcclxuICAgICAgLy9hbmQgbG9nIHRob3NlIHBhZ2Ugdmlld3NcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLCB1bnN1YnNjcmliZVxyXG4gICAgICAvLyBmcm9tIHRoZSBldmVudCB3aXRoIHRoZSBgb2ZmYCBtZXRob2RcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VTZXNzaW9uID0gdXNlU2Vzc2lvbjtcbmV4cG9ydHMuc2Vzc2lvbiA9IGV4cG9ydHMuZ2V0U2Vzc2lvbiA9IGdldFNlc3Npb247XG5leHBvcnRzLmNzcmZUb2tlbiA9IGV4cG9ydHMuZ2V0Q3NyZlRva2VuID0gZ2V0Q3NyZlRva2VuO1xuZXhwb3J0cy5wcm92aWRlcnMgPSBleHBvcnRzLmdldFByb3ZpZGVycyA9IGdldFByb3ZpZGVycztcbmV4cG9ydHMuc2lnbmluID0gZXhwb3J0cy5zaWduSW4gPSBzaWduSW47XG5leHBvcnRzLnNpZ25vdXQgPSBleHBvcnRzLnNpZ25PdXQgPSBzaWduT3V0O1xuZXhwb3J0cy5vcHRpb25zID0gZXhwb3J0cy5zZXRPcHRpb25zID0gc2V0T3B0aW9ucztcbmV4cG9ydHMuUHJvdmlkZXIgPSBQcm92aWRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2xvZ2dlclwiKSk7XG5cbnZhciBfcGFyc2VVcmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvcGFyc2UtdXJsXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9fTkVYVEFVVEggPSB7XG4gIGJhc2VVcmw6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkocHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMIHx8IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkuYmFzZVBhdGgsXG4gIGJhc2VVcmxTZXJ2ZXI6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkocHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMX0lOVEVSTkFMIHx8IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCB8fCBwcm9jZXNzLmVudi5WRVJDRUxfVVJMKS5iYXNlVXJsLFxuICBiYXNlUGF0aFNlcnZlcjogKDAsIF9wYXJzZVVybC5kZWZhdWx0KShwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkxfSU5URVJOQUwgfHwgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKS5iYXNlUGF0aCxcbiAga2VlcEFsaXZlOiAwLFxuICBjbGllbnRNYXhBZ2U6IDAsXG4gIF9jbGllbnRMYXN0U3luYzogMCxcbiAgX2NsaWVudFN5bmNUaW1lcjogbnVsbCxcbiAgX2V2ZW50TGlzdGVuZXJzQWRkZWQ6IGZhbHNlLFxuICBfY2xpZW50U2Vzc2lvbjogdW5kZWZpbmVkLFxuICBfZ2V0U2Vzc2lvbjogZnVuY3Rpb24gX2dldFNlc3Npb24oKSB7fVxufTtcbnZhciBsb2dnZXIgPSAoMCwgX2xvZ2dlcjIucHJveHlMb2dnZXIpKF9sb2dnZXIyLmRlZmF1bHQsIF9fTkVYVEFVVEguYmFzZVBhdGgpO1xudmFyIGJyb2FkY2FzdCA9IEJyb2FkY2FzdENoYW5uZWwoKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgIV9fTkVYVEFVVEguX2V2ZW50TGlzdGVuZXJzQWRkZWQpIHtcbiAgX19ORVhUQVVUSC5fZXZlbnRMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XG4gIGJyb2FkY2FzdC5yZWNlaXZlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAhZG9jdW1lbnQuaGlkZGVuICYmIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgZXZlbnQ6IFwidmlzaWJpbGl0eWNoYW5nZVwiXG4gICAgfSk7XG4gIH0sIGZhbHNlKTtcbn1cblxudmFyIFNlc3Npb25Db250ZXh0ID0gKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSgpO1xuXG5mdW5jdGlvbiB1c2VTZXNzaW9uKHNlc3Npb24pIHtcbiAgdmFyIGNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKFNlc3Npb25Db250ZXh0KTtcbiAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICByZXR1cm4gX3VzZVNlc3Npb25Ib29rKHNlc3Npb24pO1xufVxuXG5mdW5jdGlvbiBfdXNlU2Vzc2lvbkhvb2soc2Vzc2lvbikge1xuICB2YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoc2Vzc2lvbiksXG4gICAgICBfdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfdXNlU3RhdGUsIDIpLFxuICAgICAgZGF0YSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXREYXRhID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9ICgwLCBfcmVhY3QudXNlU3RhdGUpKCFkYXRhKSxcbiAgICAgIF91c2VTdGF0ZTQgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF91c2VTdGF0ZTMsIDIpLFxuICAgICAgbG9hZGluZyA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRMb2FkaW5nID0gX3VzZVN0YXRlNFsxXTtcblxuICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciBfcmVmMixcbiAgICAgICAgICBfcmVmMiRldmVudCxcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICB0cmlnZ3JlZEJ5RXZlbnQsXG4gICAgICAgICAgdHJpZ2dlcmVkQnlTdG9yYWdlRXZlbnQsXG4gICAgICAgICAgY2xpZW50TWF4QWdlLFxuICAgICAgICAgIGNsaWVudExhc3RTeW5jLFxuICAgICAgICAgIGN1cnJlbnRUaW1lLFxuICAgICAgICAgIGNsaWVudFNlc3Npb24sXG4gICAgICAgICAgbmV3Q2xpZW50U2Vzc2lvbkRhdGEsXG4gICAgICAgICAgX2FyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfcmVmMiA9IF9hcmdzLmxlbmd0aCA+IDAgJiYgX2FyZ3NbMF0gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzBdIDoge30sIF9yZWYyJGV2ZW50ID0gX3JlZjIuZXZlbnQsIGV2ZW50ID0gX3JlZjIkZXZlbnQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRldmVudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE7XG4gICAgICAgICAgICAgIHRyaWdncmVkQnlFdmVudCA9IGV2ZW50ICE9PSBudWxsO1xuICAgICAgICAgICAgICB0cmlnZ2VyZWRCeVN0b3JhZ2VFdmVudCA9IGV2ZW50ID09PSBcInN0b3JhZ2VcIjtcbiAgICAgICAgICAgICAgY2xpZW50TWF4QWdlID0gX19ORVhUQVVUSC5jbGllbnRNYXhBZ2U7XG4gICAgICAgICAgICAgIGNsaWVudExhc3RTeW5jID0gcGFyc2VJbnQoX19ORVhUQVVUSC5fY2xpZW50TGFzdFN5bmMpO1xuICAgICAgICAgICAgICBjdXJyZW50VGltZSA9IF9ub3coKTtcbiAgICAgICAgICAgICAgY2xpZW50U2Vzc2lvbiA9IF9fTkVYVEFVVEguX2NsaWVudFNlc3Npb247XG5cbiAgICAgICAgICAgICAgaWYgKCEoIXRyaWdnZXJlZEJ5U3RvcmFnZUV2ZW50ICYmIGNsaWVudFNlc3Npb24gIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIShjbGllbnRNYXhBZ2UgPT09IDAgJiYgdHJpZ2dyZWRCeUV2ZW50ICE9PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGlmICghKGNsaWVudE1heEFnZSA+IDAgJiYgY2xpZW50U2Vzc2lvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICBpZiAoIShjbGllbnRNYXhBZ2UgPiAwICYmIGN1cnJlbnRUaW1lIDwgY2xpZW50TGFzdFN5bmMgKyBjbGllbnRNYXhBZ2UpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgaWYgKGNsaWVudFNlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIF9fTkVYVEFVVEguX2NsaWVudFNlc3Npb24gPSBudWxsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fY2xpZW50TGFzdFN5bmMgPSBfbm93KCk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMztcbiAgICAgICAgICAgICAgcmV0dXJuIGdldFNlc3Npb24oe1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudDogIXRyaWdnZXJlZEJ5U3RvcmFnZUV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICBuZXdDbGllbnRTZXNzaW9uRGF0YSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX2NsaWVudFNlc3Npb24gPSBuZXdDbGllbnRTZXNzaW9uRGF0YTtcbiAgICAgICAgICAgICAgc2V0RGF0YShuZXdDbGllbnRTZXNzaW9uRGF0YSk7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjk7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX1VTRV9TRVNTSU9OX0VSUk9SXCIsIF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzEsIDI5XV0pO1xuICAgIH0pKTtcblxuICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24oKTtcbiAgfSk7XG4gIHJldHVybiBbZGF0YSwgbG9hZGluZ107XG59XG5cbmZ1bmN0aW9uIGdldFNlc3Npb24oX3gpIHtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0U2Vzc2lvbjIoKSB7XG4gIF9nZXRTZXNzaW9uMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNChjdHgpIHtcbiAgICB2YXIgX2N0eCR0cmlnZ2VyRXZlbnQ7XG5cbiAgICB2YXIgc2Vzc2lvbjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gX2ZldGNoRGF0YShcInNlc3Npb25cIiwgY3R4KTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNlc3Npb24gPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgaWYgKChfY3R4JHRyaWdnZXJFdmVudCA9IGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC50cmlnZ2VyRXZlbnQpICE9PSBudWxsICYmIF9jdHgkdHJpZ2dlckV2ZW50ICE9PSB2b2lkIDAgPyBfY3R4JHRyaWdnZXJFdmVudCA6IHRydWUpIHtcbiAgICAgICAgICAgICAgYnJvYWRjYXN0LnBvc3Qoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcInNlc3Npb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcImdldFNlc3Npb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KFwicmV0dXJuXCIsIHNlc3Npb24pO1xuXG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQpO1xuICB9KSk7XG4gIHJldHVybiBfZ2V0U2Vzc2lvbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3NyZlRva2VuKF94Mikge1xuICByZXR1cm4gX2dldENzcmZUb2tlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Q3NyZlRva2VuKCkge1xuICBfZ2V0Q3NyZlRva2VuID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1KGN0eCkge1xuICAgIHZhciBfeWllbGQkX2ZldGNoRGF0YTtcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBfZmV0Y2hEYXRhKFwiY3NyZlwiLCBjdHgpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2NvbnRleHQ1LnQxID0gX3lpZWxkJF9mZXRjaERhdGEgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MCA9IF9jb250ZXh0NS50MSA9PT0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF9jb250ZXh0NS50MCkge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dDUudDAgPSBfeWllbGQkX2ZldGNoRGF0YSA9PT0gdm9pZCAwO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgaWYgKCFfY29udGV4dDUudDApIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0NS50MiA9IHZvaWQgMDtcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBfY29udGV4dDUudDIgPSBfeWllbGQkX2ZldGNoRGF0YS5jc3JmVG9rZW47XG5cbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1LnQyKTtcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNSk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRDc3JmVG9rZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXJzKCkge1xuICByZXR1cm4gX2dldFByb3ZpZGVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdmlkZXJzKCkge1xuICBfZ2V0UHJvdmlkZXJzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KCkge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2LnByZXYgPSBfY29udGV4dDYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBfZmV0Y2hEYXRhKFwicHJvdmlkZXJzXCIpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ2LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTYpO1xuICB9KSk7XG4gIHJldHVybiBfZ2V0UHJvdmlkZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25JbihfeDMpIHtcbiAgcmV0dXJuIF9zaWduSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3NpZ25JbigpIHtcbiAgX3NpZ25JbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhwcm92aWRlcikge1xuICAgIHZhciBvcHRpb25zLFxuICAgICAgICBhdXRob3JpemF0aW9uUGFyYW1zLFxuICAgICAgICBfb3B0aW9ucyRjYWxsYmFja1VybCxcbiAgICAgICAgY2FsbGJhY2tVcmwsXG4gICAgICAgIF9vcHRpb25zJHJlZGlyZWN0LFxuICAgICAgICByZWRpcmVjdCxcbiAgICAgICAgYmFzZVVybCxcbiAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICBpc0NyZWRlbnRpYWxzLFxuICAgICAgICBpc0VtYWlsLFxuICAgICAgICBpc1N1cHBvcnRpbmdSZXR1cm4sXG4gICAgICAgIHNpZ25JblVybCxcbiAgICAgICAgX3NpZ25JblVybCxcbiAgICAgICAgcmVzLFxuICAgICAgICBkYXRhLFxuICAgICAgICBfZGF0YSR1cmwsXG4gICAgICAgIHVybCxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIF9hcmdzNyA9IGFyZ3VtZW50cztcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU3JChfY29udGV4dDcpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfYXJnczcubGVuZ3RoID4gMSAmJiBfYXJnczdbMV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzN1sxXSA6IHt9O1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvblBhcmFtcyA9IF9hcmdzNy5sZW5ndGggPiAyICYmIF9hcmdzN1syXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M3WzJdIDoge307XG4gICAgICAgICAgICBfb3B0aW9ucyRjYWxsYmFja1VybCA9IG9wdGlvbnMuY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsID0gX29wdGlvbnMkY2FsbGJhY2tVcmwgPT09IHZvaWQgMCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogX29wdGlvbnMkY2FsbGJhY2tVcmwsIF9vcHRpb25zJHJlZGlyZWN0ID0gb3B0aW9ucy5yZWRpcmVjdCwgcmVkaXJlY3QgPSBfb3B0aW9ucyRyZWRpcmVjdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlZGlyZWN0O1xuICAgICAgICAgICAgYmFzZVVybCA9IF9hcGlCYXNlVXJsKCk7XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDY7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJvdmlkZXJzKCk7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBwcm92aWRlcnMgPSBfY29udGV4dDcuc2VudDtcblxuICAgICAgICAgICAgaWYgKHByb3ZpZGVycykge1xuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9lcnJvclwiKSkpO1xuXG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgaWYgKHByb3ZpZGVyIGluIHByb3ZpZGVycykge1xuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDExO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvc2lnbmluP2NhbGxiYWNrVXJsPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGNhbGxiYWNrVXJsKSkpKTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBpc0NyZWRlbnRpYWxzID0gcHJvdmlkZXJzW3Byb3ZpZGVyXS50eXBlID09PSBcImNyZWRlbnRpYWxzXCI7XG4gICAgICAgICAgICBpc0VtYWlsID0gcHJvdmlkZXJzW3Byb3ZpZGVyXS50eXBlID09PSBcImVtYWlsXCI7XG4gICAgICAgICAgICBpc1N1cHBvcnRpbmdSZXR1cm4gPSBpc0NyZWRlbnRpYWxzIHx8IGlzRW1haWw7XG4gICAgICAgICAgICBzaWduSW5VcmwgPSBpc0NyZWRlbnRpYWxzID8gXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvY2FsbGJhY2svXCIpLmNvbmNhdChwcm92aWRlcikgOiBcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9zaWduaW4vXCIpLmNvbmNhdChwcm92aWRlcik7XG4gICAgICAgICAgICBfc2lnbkluVXJsID0gXCJcIi5jb25jYXQoc2lnbkluVXJsLCBcIj9cIikuY29uY2F0KG5ldyBVUkxTZWFyY2hQYXJhbXMoYXV0aG9yaXphdGlvblBhcmFtcykpO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQwID0gZmV0Y2g7XG4gICAgICAgICAgICBfY29udGV4dDcudDEgPSBfc2lnbkluVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQyID0ge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQzID0gVVJMU2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQ0ID0gX29iamVjdFNwcmVhZDtcbiAgICAgICAgICAgIF9jb250ZXh0Ny50NSA9IF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQ2ID0ge307XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDI1O1xuICAgICAgICAgICAgcmV0dXJuIGdldENzcmZUb2tlbigpO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIF9jb250ZXh0Ny50NyA9IF9jb250ZXh0Ny5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQ4ID0gY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICBfY29udGV4dDcudDkgPSB7XG4gICAgICAgICAgICAgIGNzcmZUb2tlbjogX2NvbnRleHQ3LnQ3LFxuICAgICAgICAgICAgICBjYWxsYmFja1VybDogX2NvbnRleHQ3LnQ4LFxuICAgICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQxMCA9ICgwLCBfY29udGV4dDcudDQpKF9jb250ZXh0Ny50NSwgX2NvbnRleHQ3LnQ2LCBfY29udGV4dDcudDkpO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQxMSA9IG5ldyBfY29udGV4dDcudDMoX2NvbnRleHQ3LnQxMCk7XG4gICAgICAgICAgICBfY29udGV4dDcudDEyID0ge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBfY29udGV4dDcudDIsXG4gICAgICAgICAgICAgIGJvZHk6IF9jb250ZXh0Ny50MTFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDMzO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfY29udGV4dDcudDApKF9jb250ZXh0Ny50MSwgX2NvbnRleHQ3LnQxMik7XG5cbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ3LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDM2O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0Ny5zZW50O1xuXG4gICAgICAgICAgICBpZiAoIShyZWRpcmVjdCB8fCAhaXNTdXBwb3J0aW5nUmV0dXJuKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDQyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gKF9kYXRhJHVybCA9IGRhdGEudXJsKSAhPT0gbnVsbCAmJiBfZGF0YSR1cmwgIT09IHZvaWQgMCA/IF9kYXRhJHVybCA6IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCIjXCIpKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBVUkwoZGF0YS51cmwpLnNlYXJjaFBhcmFtcy5nZXQoXCJlcnJvclwiKTtcblxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSA0NjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gNDY7XG4gICAgICAgICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgb2s6IHJlcy5vayxcbiAgICAgICAgICAgICAgdXJsOiBlcnJvciA/IG51bGwgOiBkYXRhLnVybFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTcpO1xuICB9KSk7XG4gIHJldHVybiBfc2lnbkluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIHJldHVybiBfc2lnbk91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfc2lnbk91dCgpIHtcbiAgX3NpZ25PdXQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTgoKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGNhbGxiYWNrVXJsMixcbiAgICAgICAgY2FsbGJhY2tVcmwsXG4gICAgICAgIF9vcHRpb25zJHJlZGlyZWN0MixcbiAgICAgICAgcmVkaXJlY3QsXG4gICAgICAgIGJhc2VVcmwsXG4gICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgcmVzLFxuICAgICAgICBkYXRhLFxuICAgICAgICBfZGF0YSR1cmwyLFxuICAgICAgICB1cmwsXG4gICAgICAgIF9hcmdzOCA9IGFyZ3VtZW50cztcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU4JChfY29udGV4dDgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ4LnByZXYgPSBfY29udGV4dDgubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfYXJnczgubGVuZ3RoID4gMCAmJiBfYXJnczhbMF0gIT09IHVuZGVmaW5lZCA/IF9hcmdzOFswXSA6IHt9O1xuICAgICAgICAgICAgX29wdGlvbnMkY2FsbGJhY2tVcmwyID0gb3B0aW9ucy5jYWxsYmFja1VybCwgY2FsbGJhY2tVcmwgPSBfb3B0aW9ucyRjYWxsYmFja1VybDIgPT09IHZvaWQgMCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogX29wdGlvbnMkY2FsbGJhY2tVcmwyLCBfb3B0aW9ucyRyZWRpcmVjdDIgPSBvcHRpb25zLnJlZGlyZWN0LCByZWRpcmVjdCA9IF9vcHRpb25zJHJlZGlyZWN0MiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlZGlyZWN0MjtcbiAgICAgICAgICAgIGJhc2VVcmwgPSBfYXBpQmFzZVVybCgpO1xuICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0ge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ4LnQxID0gVVJMU2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA3O1xuICAgICAgICAgICAgcmV0dXJuIGdldENzcmZUb2tlbigpO1xuXG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgX2NvbnRleHQ4LnQyID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDgudDMgPSBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIF9jb250ZXh0OC50NCA9IHtcbiAgICAgICAgICAgICAgY3NyZlRva2VuOiBfY29udGV4dDgudDIsXG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBfY29udGV4dDgudDMsXG4gICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDgudDUgPSBuZXcgX2NvbnRleHQ4LnQxKF9jb250ZXh0OC50NCk7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IF9jb250ZXh0OC50MCxcbiAgICAgICAgICAgICAgYm9keTogX2NvbnRleHQ4LnQ1XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxNDtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9zaWdub3V0XCIpLCBmZXRjaE9wdGlvbnMpO1xuXG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJlcyA9IF9jb250ZXh0OC5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxNztcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuXG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgIGJyb2FkY2FzdC5wb3N0KHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvblwiLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCJzaWdub3V0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghcmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybCA9IChfZGF0YSR1cmwyID0gZGF0YS51cmwpICE9PSBudWxsICYmIF9kYXRhJHVybDIgIT09IHZvaWQgMCA/IF9kYXRhJHVybDIgOiBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKFwiI1wiKSkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyNjtcbiAgICAgICAgICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic3RvcmFnZVwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCBkYXRhKTtcblxuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlOCk7XG4gIH0pKTtcbiAgcmV0dXJuIF9zaWduT3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldE9wdGlvbnMoKSB7XG4gIHZhciBfcmVmMyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBiYXNlVXJsID0gX3JlZjMuYmFzZVVybCxcbiAgICAgIGJhc2VQYXRoID0gX3JlZjMuYmFzZVBhdGgsXG4gICAgICBjbGllbnRNYXhBZ2UgPSBfcmVmMy5jbGllbnRNYXhBZ2UsXG4gICAgICBrZWVwQWxpdmUgPSBfcmVmMy5rZWVwQWxpdmU7XG5cbiAgaWYgKGJhc2VVcmwpIF9fTkVYVEFVVEguYmFzZVVybCA9IGJhc2VVcmw7XG4gIGlmIChiYXNlUGF0aCkgX19ORVhUQVVUSC5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICBpZiAoY2xpZW50TWF4QWdlKSBfX05FWFRBVVRILmNsaWVudE1heEFnZSA9IGNsaWVudE1heEFnZTtcblxuICBpZiAoa2VlcEFsaXZlKSB7XG4gICAgX19ORVhUQVVUSC5rZWVwQWxpdmUgPSBrZWVwQWxpdmU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblxuICAgIGlmIChfX05FWFRBVVRILl9jbGllbnRTeW5jVGltZXIgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dChfX05FWFRBVVRILl9jbGllbnRTeW5jVGltZXIpO1xuICAgIH1cblxuICAgIF9fTkVYVEFVVEguX2NsaWVudFN5bmNUaW1lciA9IHNldFRpbWVvdXQoKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCkge1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAoX19ORVhUQVVUSC5fY2xpZW50U2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVyXCJcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlMik7XG4gICAgfSkpLCBrZWVwQWxpdmUgKiAxMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIHNlc3Npb24gPSBfcmVmNS5zZXNzaW9uLFxuICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gIHNldE9wdGlvbnMob3B0aW9ucyk7XG4gIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKFNlc3Npb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHVzZVNlc3Npb24oc2Vzc2lvbilcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBfZmV0Y2hEYXRhKF94NCkge1xuICByZXR1cm4gX2ZldGNoRGF0YTIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2ZldGNoRGF0YTIoKSB7XG4gIF9mZXRjaERhdGEyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU5KHBhdGgpIHtcbiAgICB2YXIgX3JlZjcsXG4gICAgICAgIGN0eCxcbiAgICAgICAgX3JlZjckcmVxLFxuICAgICAgICByZXEsXG4gICAgICAgIGJhc2VVcmwsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHJlcyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgX2FyZ3M5ID0gYXJndW1lbnRzO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDkucHJldiA9IF9jb250ZXh0OS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX3JlZjcgPSBfYXJnczkubGVuZ3RoID4gMSAmJiBfYXJnczlbMV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzOVsxXSA6IHt9LCBjdHggPSBfcmVmNy5jdHgsIF9yZWY3JHJlcSA9IF9yZWY3LnJlcSwgcmVxID0gX3JlZjckcmVxID09PSB2b2lkIDAgPyBjdHggPT09IG51bGwgfHwgY3R4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdHgucmVxIDogX3JlZjckcmVxO1xuICAgICAgICAgICAgX2NvbnRleHQ5LnByZXYgPSAxO1xuICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIF9hcGlCYXNlVXJsKCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBiYXNlVXJsID0gX2NvbnRleHQ5LnNlbnQ7XG4gICAgICAgICAgICBvcHRpb25zID0gcmVxID8ge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSA6IHt9O1xuICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSA4O1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL1wiKS5jb25jYXQocGF0aCksIG9wdGlvbnMpO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ5LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDExO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0OS5zZW50O1xuXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBkYXRhO1xuXG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KFwicmV0dXJuXCIsIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDAgPyBkYXRhIDogbnVsbCk7XG5cbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgX2NvbnRleHQ5LnByZXYgPSAxNztcbiAgICAgICAgICAgIF9jb250ZXh0OS50MCA9IF9jb250ZXh0OVtcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX0ZFVENIX0VSUk9SXCIsIHBhdGgsIF9jb250ZXh0OS50MCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ5LmFicnVwdChcInJldHVyblwiLCBudWxsKTtcblxuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlOSwgbnVsbCwgW1sxLCAxN11dKTtcbiAgfSkpO1xuICByZXR1cm4gX2ZldGNoRGF0YTIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2FwaUJhc2VVcmwoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpIHtcbiAgICAgIGxvZ2dlci53YXJuKFwiTkVYVEFVVEhfVVJMXCIsIFwiTkVYVEFVVEhfVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIG5vdCBzZXRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KF9fTkVYVEFVVEguYmFzZVVybFNlcnZlcikuY29uY2F0KF9fTkVYVEFVVEguYmFzZVBhdGhTZXJ2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9fTkVYVEFVVEguYmFzZVBhdGg7XG59XG5cbmZ1bmN0aW9uIF9ub3coKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbn1cblxuZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbCgpIHtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFwibmV4dGF1dGgubWVzc2FnZVwiO1xuICByZXR1cm4ge1xuICAgIHJlY2VpdmU6IGZ1bmN0aW9uIHJlY2VpdmUob25SZWNlaXZlKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWY2ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5ICE9PSBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50Lm5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCEoKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5ldmVudCkgIT09IFwic2Vzc2lvblwiIHx8ICEobWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgJiYgbWVzc2FnZS5kYXRhKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICBvblJlY2VpdmUobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlMyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94NSkge1xuICAgICAgICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICB9LFxuICAgIHBvc3Q6IGZ1bmN0aW9uIHBvc3QobWVzc2FnZSkge1xuICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVzc2FnZSksIHt9LCB7XG4gICAgICAgIHRpbWVzdGFtcDogX25vdygpXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBnZXRTZXNzaW9uOiBnZXRTZXNzaW9uLFxuICBnZXRDc3JmVG9rZW46IGdldENzcmZUb2tlbixcbiAgZ2V0UHJvdmlkZXJzOiBnZXRQcm92aWRlcnMsXG4gIHVzZVNlc3Npb246IHVzZVNlc3Npb24sXG4gIHNpZ25Jbjogc2lnbkluLFxuICBzaWduT3V0OiBzaWduT3V0LFxuICBQcm92aWRlcjogUHJvdmlkZXIsXG4gIHNldE9wdGlvbnM6IHNldE9wdGlvbnMsXG4gIG9wdGlvbnM6IHNldE9wdGlvbnMsXG4gIHNlc3Npb246IGdldFNlc3Npb24sXG4gIHByb3ZpZGVyczogZ2V0UHJvdmlkZXJzLFxuICBjc3JmVG9rZW46IGdldENzcmZUb2tlbixcbiAgc2lnbmluOiBzaWduSW4sXG4gIHNpZ25vdXQ6IHNpZ25PdXRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0TG9nZ2VyID0gc2V0TG9nZ2VyO1xuZXhwb3J0cy5wcm94eUxvZ2dlciA9IHByb3h5TG9nZ2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgX2xvZ2dlciA9IHtcbiAgZXJyb3IoY29kZSwgLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtuZXh0LWF1dGhdW2Vycm9yXVske2NvZGUudG9Mb3dlckNhc2UoKX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9lcnJvcnMjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCwgLi4ubWVzc2FnZSk7XG4gIH0sXG5cbiAgd2Fybihjb2RlLCAuLi5tZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKGBbbmV4dC1hdXRoXVt3YXJuXVske2NvZGUudG9Mb3dlckNhc2UoKX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy93YXJuaW5ncyMke2NvZGUudG9Mb3dlckNhc2UoKX1gLCAuLi5tZXNzYWdlKTtcbiAgfSxcblxuICBkZWJ1Zyhjb2RlLCAuLi5tZXNzYWdlKSB7XG4gICAgdmFyIF9wcm9jZXNzLCBfcHJvY2VzcyRlbnY7XG5cbiAgICBpZiAoISgoX3Byb2Nlc3MgPSBwcm9jZXNzKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyAhPT0gdm9pZCAwICYmIChfcHJvY2VzcyRlbnYgPSBfcHJvY2Vzcy5lbnYpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiAhPT0gdm9pZCAwICYmIF9wcm9jZXNzJGVudi5fTkVYVEFVVEhfREVCVUcpKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coYFtuZXh0LWF1dGhdW2RlYnVnXVske2NvZGUudG9Mb3dlckNhc2UoKX1dYCwgLi4ubWVzc2FnZSk7XG4gIH1cblxufTtcblxuZnVuY3Rpb24gc2V0TG9nZ2VyKG5ld0xvZ2dlciA9IHt9KSB7XG4gIGlmIChuZXdMb2dnZXIuZXJyb3IpIF9sb2dnZXIuZXJyb3IgPSBuZXdMb2dnZXIuZXJyb3I7XG4gIGlmIChuZXdMb2dnZXIud2FybikgX2xvZ2dlci53YXJuID0gbmV3TG9nZ2VyLndhcm47XG4gIGlmIChuZXdMb2dnZXIuZGVidWcpIF9sb2dnZXIuZGVidWcgPSBuZXdMb2dnZXIuZGVidWc7XG59XG5cbnZhciBfZGVmYXVsdCA9IF9sb2dnZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuZnVuY3Rpb24gcHJveHlMb2dnZXIobG9nZ2VyID0gX2xvZ2dlciwgYmFzZVBhdGgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGllbnRMb2dnZXIgPSB7fTtcblxuICAgIGZvciAoY29uc3QgbGV2ZWwgaW4gbG9nZ2VyKSB7XG4gICAgICBjbGllbnRMb2dnZXJbbGV2ZWxdID0gKGNvZGUsIC4uLm1lc3NhZ2UpID0+IHtcbiAgICAgICAgX2xvZ2dlcltsZXZlbF0oY29kZSwgLi4ubWVzc2FnZSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVBhdGh9L19sb2dgO1xuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICBtZXNzYWdlOiBKU09OLnN0cmluZ2lmeShtZXNzYWdlLm1hcChtID0+IHtcbiAgICAgICAgICAgIGlmIChtIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtLm5hbWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHN0YWNrOiBtLnN0YWNrXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLnNlbmRCZWFjb24pIHtcbiAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xpZW50TG9nZ2VyO1xuICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgcmV0dXJuIF9sb2dnZXI7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlVXJsO1xuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgY29uc3QgZGVmYXVsdEhvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbiAgY29uc3QgZGVmYXVsdFBhdGggPSAnL2FwaS9hdXRoJztcblxuICBpZiAoIXVybCkge1xuICAgIHVybCA9IGAke2RlZmF1bHRIb3N0fSR7ZGVmYXVsdFBhdGh9YDtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gdXJsLnN0YXJ0c1dpdGgoJ2h0dHA6JykgPyAnaHR0cCcgOiAnaHR0cHMnO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgY29uc3QgW19ob3N0LCAuLi5fcGF0aF0gPSB1cmwuc3BsaXQoJy8nKTtcbiAgY29uc3QgYmFzZVVybCA9IF9ob3N0ID8gYCR7cHJvdG9jb2x9Oi8vJHtfaG9zdH1gIDogZGVmYXVsdEhvc3Q7XG4gIGNvbnN0IGJhc2VQYXRoID0gX3BhdGgubGVuZ3RoID4gMCA/IGAvJHtfcGF0aC5qb2luKCcvJyl9YCA6IGRlZmF1bHRQYXRoO1xuICByZXR1cm4ge1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGhcbiAgfTtcbn0iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vaW5kZXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcHVyZ2Vjc3Mgc3RhcnQgaWdub3JlICovXFxyXFxuLyogISB0YWlsd2luZGNzcyB2Mi4yLjE2IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xcclxcbi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxyXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXHJcXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXHJcXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcclxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcclxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0ICAgdGFiLXNpemU6IDQ7XFxufVxcclxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcclxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcclxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxyXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxyXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXHJcXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxyXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcclxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcclxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcclxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXHJcXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcclxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxyXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXHJcXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxyXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcclxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxyXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXHJcXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcclxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxyXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcclxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcclxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXHJcXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXHJcXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxyXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXHJcXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxyXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXHJcXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXHJcXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcclxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXHJcXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXHJcXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxyXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXHJcXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxyXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxyXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcclxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcclxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcclxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXHJcXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcclxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxyXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxyXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxyXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXHJcXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXHJcXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXHJcXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxyXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxyXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXHJcXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxyXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXHJcXG4vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxyXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcclxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxyXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxyXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxyXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcclxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXHJcXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcclxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEludGVyIHZhciwgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcclxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcclxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxyXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcclxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcclxcbi8qXFxuICogRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxcbiAqL1xcclxcbmhyIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxyXFxuLyoqXFxuICogVW5kbyB0aGUgYGJvcmRlci1zdHlsZTogbm9uZWAgcmVzZXQgdGhhdCBOb3JtYWxpemUgYXBwbGllcyB0byBpbWFnZXMgc28gdGhhdFxcbiAqIG91ciBgYm9yZGVyLXt3aWR0aH1gIHV0aWxpdGllcyBoYXZlIHRoZSBleHBlY3RlZCBlZmZlY3QuXFxuICpcXG4gKiBUaGUgTm9ybWFsaXplIHJlc2V0IGlzIHVubmVjZXNzYXJ5IGZvciB1cyBzaW5jZSB3ZSBkZWZhdWx0IHRoZSBib3JkZXItd2lkdGhcXG4gKiB0byAwIG9uIGFsbCBlbGVtZW50cy5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9pc3N1ZXMvMzYyXFxuICovXFxyXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcclxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcclxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogIzljYTNhZjtcXG59XFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcclxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXHJcXG4vKipcXG4gKiBPdmVycmlkZSBsZWdhY3kgZm9jdXMgcmVzZXQgZnJvbSBOb3JtYWxpemUgd2l0aCBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZXMuXFxuICpcXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxcbiAqIGFzIGl0IHRyaWdnZXJzIHRoZSBiZXR0ZXIgZm9jdXMgc3R5bGVzIGV2ZW4gZm9yIGxpbmtzLCB3aGljaCBzdGlsbCB1c2UgYSBkb3R0ZWRcXG4gKiBvdXRsaW5lIGluIEZpcmVmb3ggYnkgZGVmYXVsdC5cXG4gKi9cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IGF1dG87XFxufVxcclxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcclxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXHJcXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxyXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxyXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXHJcXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXHJcXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXHJcXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcclxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXHJcXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcclxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxyXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxyXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXHJcXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXHJcXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuXFx0LS10dy10cmFuc2xhdGUteDogMDtcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwO1xcblxcdC0tdHctcm90YXRlOiAwO1xcblxcdC0tdHctc2tldy14OiAwO1xcblxcdC0tdHctc2tldy15OiAwO1xcblxcdC0tdHctc2NhbGUteDogMTtcXG5cXHQtLXR3LXNjYWxlLXk6IDE7XFxuXFx0LS10dy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tdHctdHJhbnNsYXRlLXgpKSB0cmFuc2xhdGVZKHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG5cXHQtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcblxcdC0tdHctYmx1cjogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcblxcdC0tdHctYnJpZ2h0bmVzczogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcblxcdC0tdHctY29udHJhc3Q6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG5cXHQtLXR3LWdyYXlzY2FsZTogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcblxcdC0tdHctaHVlLXJvdGF0ZTogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcblxcdC0tdHctaW52ZXJ0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1zYXR1cmF0ZTogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcblxcdC0tdHctc2VwaWE6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG5cXHQtLXR3LWRyb3Atc2hhZG93OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1maWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcclxcblt0eXBlPSd0ZXh0J10sW3R5cGU9J2VtYWlsJ10sW3R5cGU9J3VybCddLFt0eXBlPSdwYXNzd29yZCddLFt0eXBlPSdudW1iZXInXSxbdHlwZT0nZGF0ZSddLFt0eXBlPSdkYXRldGltZS1sb2NhbCddLFt0eXBlPSdtb250aCddLFt0eXBlPSdzZWFyY2gnXSxbdHlwZT0ndGVsJ10sW3R5cGU9J3RpbWUnXSxbdHlwZT0nd2VlayddLFttdWx0aXBsZV0sdGV4dGFyZWEsc2VsZWN0IHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1jb2xvcjogIzZiNzI4MDtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG5cXHRib3JkZXItcmFkaXVzOiAwcHg7XFxuXFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcblxcdC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG59XFxyXFxuW3R5cGU9J3RleHQnXTpmb2N1cywgW3R5cGU9J2VtYWlsJ106Zm9jdXMsIFt0eXBlPSd1cmwnXTpmb2N1cywgW3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsIFt0eXBlPSdudW1iZXInXTpmb2N1cywgW3R5cGU9J2RhdGUnXTpmb2N1cywgW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ106Zm9jdXMsIFt0eXBlPSdtb250aCddOmZvY3VzLCBbdHlwZT0nc2VhcmNoJ106Zm9jdXMsIFt0eXBlPSd0ZWwnXTpmb2N1cywgW3R5cGU9J3RpbWUnXTpmb2N1cywgW3R5cGU9J3dlZWsnXTpmb2N1cywgW211bHRpcGxlXTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiAjMjU2M2ViO1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjMjU2M2ViO1xcbn1cXHJcXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjNmI3MjgwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcclxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIsdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXHJcXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1maWVsZHMtd3JhcHBlciB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxyXFxuOjotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xcblxcdG1pbi1oZWlnaHQ6IDEuNWVtO1xcbn1cXHJcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J25vbmUnIHZpZXdCb3g9JzAgMCAyMCAyMCclM2UlM2NwYXRoIHN0cm9rZT0nJTIzNmI3MjgwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMS41JyBkPSdNNiA4bDQgNCA0LTQnLyUzZSUzYy9zdmclM2VcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjVyZW0gY2VudGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxLjVlbSAxLjVlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxuXFx0LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcblxcdCAgICAgICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG59XFxyXFxuW211bHRpcGxlXSB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbml0aWFsO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiB1bnNldDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGF1dG8gYXV0bztcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XFxuXFx0cGFkZGluZy1yaWdodDogMC43NXJlbTtcXG5cXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogdW5zZXQ7XFxuXFx0ICAgICAgICBjb2xvci1hZGp1c3Q6IHVuc2V0O1xcbn1cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxbdHlwZT0ncmFkaW8nXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuXFx0ICAgICAgICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGNvbG9yOiAjMjU2M2ViO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjNmI3MjgwO1xcblxcdGJvcmRlci13aWR0aDogMXB4O1xcblxcdC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG59XFxyXFxuW3R5cGU9J2NoZWNrYm94J10ge1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcclxcblt0eXBlPSdjaGVja2JveCddOmZvY3VzLFt0eXBlPSdyYWRpbyddOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG5cXHQtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAycHg7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG5cXHQtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxyXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCxbdHlwZT0ncmFkaW8nXTpjaGVja2VkIHtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxyXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nd2hpdGUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIGQ9J00xMi4yMDcgNC43OTNhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtMi0yYTEgMSAwIDAxMS40MTQtMS40MTRMNi41IDkuMDg2bDQuMjkzLTQuMjkzYTEgMSAwIDAxMS40MTQgMHonLyUzZSUzYy9zdmclM2VcXFwiKTtcXG59XFxyXFxuW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nd2hpdGUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NjaXJjbGUgY3g9JzgnIGN5PSc4JyByPSczJy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxufVxcclxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpmb2N1cyxbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmhvdmVyLFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6Zm9jdXMge1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXHJcXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdub25lJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBzdHJva2U9J3doaXRlJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgOGg4Jy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcclxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106aW5kZXRlcm1pbmF0ZTpmb2N1cyB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcclxcblt0eXBlPSdmaWxlJ10ge1xcblxcdGJhY2tncm91bmQ6IHVuc2V0O1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXItd2lkdGg6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtc2l6ZTogdW5zZXQ7XFxuXFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcclxcblt0eXBlPSdmaWxlJ106Zm9jdXMge1xcblxcdG91dGxpbmU6IDFweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogNjQwcHg7XFxuXFx0fVxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDc2OHB4O1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTAyNHB4O1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTI4MHB4O1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcclxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTUzNnB4O1xcblxcdH1cXG59XFxyXFxuLmFzcGVjdC13LTEsXFxuLmFzcGVjdC13LTIsXFxuLmFzcGVjdC13LTMsXFxuLmFzcGVjdC13LTQsXFxuLmFzcGVjdC13LTUsXFxuLmFzcGVjdC13LTYsXFxuLmFzcGVjdC13LTcsXFxuLmFzcGVjdC13LTgsXFxuLmFzcGVjdC13LTksXFxuLmFzcGVjdC13LTEwLFxcbi5hc3BlY3Qtdy0xMSxcXG4uYXNwZWN0LXctMTIsXFxuLmFzcGVjdC13LTEzLFxcbi5hc3BlY3Qtdy0xNCxcXG4uYXNwZWN0LXctMTUsXFxuLmFzcGVjdC13LTE2IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tdHctYXNwZWN0LWgpIC8gdmFyKC0tdHctYXNwZWN0LXcpICogMTAwJSk7XFxufVxcclxcbi5hc3BlY3Qtdy0xID4gKixcXG4uYXNwZWN0LXctMiA+ICosXFxuLmFzcGVjdC13LTMgPiAqLFxcbi5hc3BlY3Qtdy00ID4gKixcXG4uYXNwZWN0LXctNSA+ICosXFxuLmFzcGVjdC13LTYgPiAqLFxcbi5hc3BlY3Qtdy03ID4gKixcXG4uYXNwZWN0LXctOCA+ICosXFxuLmFzcGVjdC13LTkgPiAqLFxcbi5hc3BlY3Qtdy0xMCA+ICosXFxuLmFzcGVjdC13LTExID4gKixcXG4uYXNwZWN0LXctMTIgPiAqLFxcbi5hc3BlY3Qtdy0xMyA+ICosXFxuLmFzcGVjdC13LTE0ID4gKixcXG4uYXNwZWN0LXctMTUgPiAqLFxcbi5hc3BlY3Qtdy0xNiA+ICoge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXHJcXG4uYXNwZWN0LXctMSB7XFxuXFx0LS10dy1hc3BlY3QtdzogMTtcXG59XFxyXFxuLmFzcGVjdC13LTMge1xcblxcdC0tdHctYXNwZWN0LXc6IDM7XFxufVxcclxcbi5hc3BlY3Qtdy0xMCB7XFxuXFx0LS10dy1hc3BlY3QtdzogMTA7XFxufVxcclxcbi5hc3BlY3QtaC0xIHtcXG5cXHQtLXR3LWFzcGVjdC1oOiAxO1xcbn1cXHJcXG4uYXNwZWN0LWgtMiB7XFxuXFx0LS10dy1hc3BlY3QtaDogMjtcXG59XFxyXFxuLmFzcGVjdC1oLTYge1xcblxcdC0tdHctYXNwZWN0LWg6IDY7XFxufVxcclxcbmFydGljbGUgYSB7XFxyXFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgMTgyKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4vKiBwdXJnZWNzcyBlbmQgaWdub3JlICovXFxyXFxuLnNyLW9ubHkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMXB4O1xcblxcdGhlaWdodDogMXB4O1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAtMXB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Y2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdGJvcmRlci13aWR0aDogMDtcXG59XFxyXFxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXHJcXG4uZml4ZWQge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG59XFxyXFxuLmFic29sdXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcclxcbi5yZWxhdGl2ZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXHJcXG4uaW5zZXQtMCB7XFxuXFx0dG9wOiAwcHg7XFxuXFx0cmlnaHQ6IDBweDtcXG5cXHRib3R0b206IDBweDtcXG5cXHRsZWZ0OiAwcHg7XFxufVxcclxcbi4taW5zZXQtcHgge1xcblxcdHRvcDogLTFweDtcXG5cXHRyaWdodDogLTFweDtcXG5cXHRib3R0b206IC0xcHg7XFxuXFx0bGVmdDogLTFweDtcXG59XFxyXFxuLmluc2V0LXgtMCB7XFxuXFx0bGVmdDogMHB4O1xcblxcdHJpZ2h0OiAwcHg7XFxufVxcclxcbi5pbnNldC15LTAge1xcblxcdHRvcDogMHB4O1xcblxcdGJvdHRvbTogMHB4O1xcbn1cXHJcXG4udG9wLWZ1bGwge1xcblxcdHRvcDogMTAwJTtcXG59XFxyXFxuLnRvcC0xXFxcXC8yIHtcXG5cXHR0b3A6IDUwJTtcXG59XFxyXFxuLnRvcC0wIHtcXG5cXHR0b3A6IDBweDtcXG59XFxyXFxuLmxlZnQtMCB7XFxuXFx0bGVmdDogMHB4O1xcbn1cXHJcXG4ucmlnaHQtMCB7XFxuXFx0cmlnaHQ6IDBweDtcXG59XFxyXFxuLmJvdHRvbS1mdWxsIHtcXG5cXHRib3R0b206IDEwMCU7XFxufVxcclxcbi5sZWZ0LWZ1bGwge1xcblxcdGxlZnQ6IDEwMCU7XFxufVxcclxcbi56LTQwIHtcXG5cXHR6LWluZGV4OiA0MDtcXG59XFxyXFxuLnotMTAge1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXHJcXG4ub3JkZXItMiB7XFxuXFx0b3JkZXI6IDI7XFxufVxcclxcbi5vcmRlci0xIHtcXG5cXHRvcmRlcjogMTtcXG59XFxyXFxuLmNvbC1zcGFuLTEge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDEgLyBzcGFuIDE7XFxufVxcclxcbi5jb2wtc3Bhbi02IHtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiA2IC8gc3BhbiA2O1xcbn1cXHJcXG4uY29sLXN0YXJ0LTIge1xcblxcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXHJcXG4ucm93LXN0YXJ0LTEge1xcblxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcbn1cXHJcXG4uLW0tMiB7XFxuXFx0bWFyZ2luOiAtMC41cmVtO1xcbn1cXHJcXG4uLW0tMyB7XFxuXFx0bWFyZ2luOiAtMC43NXJlbTtcXG59XFxyXFxuLm14LWF1dG8ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxyXFxuLi1teS0yIHtcXG5cXHRtYXJnaW4tdG9wOiAtMC41cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IC0wLjVyZW07XFxufVxcclxcbi5teS00IHtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcclxcbi4tbXgtNSB7XFxuXFx0bWFyZ2luLWxlZnQ6IC0xLjI1cmVtO1xcblxcdG1hcmdpbi1yaWdodDogLTEuMjVyZW07XFxufVxcclxcbi5teC0zIHtcXG5cXHRtYXJnaW4tbGVmdDogMC43NXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcclxcbi4tbXgtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbn1cXHJcXG4uLW15LTMge1xcblxcdG1hcmdpbi10b3A6IC0wLjc1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xcbn1cXHJcXG4uLW14LTgge1xcblxcdG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IC0ycmVtO1xcbn1cXHJcXG4ubXQtMiB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXHJcXG4uLW1iLXB4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXHJcXG4ubXQtNiB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXHJcXG4ubWwtNCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcclxcbi5tci00IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcclxcbi5tdC0xMCB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXHJcXG4ubXQtMTIge1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxufVxcclxcbi4tbXItMiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbn1cXHJcXG4ubWwtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxyXFxuLm10LTQge1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxufVxcclxcbi4tbWItMTYge1xcblxcdG1hcmdpbi1ib3R0b206IC00cmVtO1xcbn1cXHJcXG4uLW1iLTEwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xcbn1cXHJcXG4ubXQtNSB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxyXFxuLm10LTE2IHtcXG5cXHRtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXHJcXG4uLW10LTYge1xcblxcdG1hcmdpbi10b3A6IC0xLjVyZW07XFxufVxcclxcbi5tdC04IHtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcbn1cXHJcXG4ubXQtMyB7XFxuXFx0bWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxyXFxuLm1sLTMge1xcblxcdG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbn1cXHJcXG4uLW1yLTEge1xcblxcdG1hcmdpbi1yaWdodDogLTAuMjVyZW07XFxufVxcclxcbi5tbC04IHtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxyXFxuLm10LTEge1xcblxcdG1hcmdpbi10b3A6IDAuMjVyZW07XFxufVxcclxcbi5tbC1hdXRvIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxyXFxuLm1sLTYge1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcclxcbi5tbC0xIHtcXG5cXHRtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxyXFxuLm1iLTQge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcclxcbi5tYi01IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXHJcXG4ubWItMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4uLW1sLTEge1xcblxcdG1hcmdpbi1sZWZ0OiAtMC4yNXJlbTtcXG59XFxyXFxuLm1yLTIge1xcblxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ubXItMVxcXFwuNSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjM3NXJlbTtcXG59XFxyXFxuLm1yLTEge1xcblxcdG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxyXFxuLm1iLTEwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcclxcbi5tYi02IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcclxcbi5tYi04IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXHJcXG4ubWItMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxyXFxuLm1iLTEyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXHJcXG4ubWItMjAge1xcblxcdG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcclxcbi5tbC0xNiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDRyZW07XFxufVxcclxcbi5tYi0xNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxyXFxuLm1iLTMyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA4cmVtO1xcbn1cXHJcXG4uLW1sLTQge1xcblxcdG1hcmdpbi1sZWZ0OiAtMXJlbTtcXG59XFxyXFxuLm1sLTUge1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbn1cXHJcXG4uLW10LTgge1xcblxcdG1hcmdpbi10b3A6IC0ycmVtO1xcbn1cXHJcXG4ubXQtMjgge1xcblxcdG1hcmdpbi10b3A6IDdyZW07XFxufVxcclxcbi5tYi0yNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnJlbTtcXG59XFxyXFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxyXFxuLlxcXFwhYmxvY2sge1xcblxcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcclxcbi5pbmxpbmUtYmxvY2sge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxyXFxuLmZsZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcclxcbi5pbmxpbmUtZmxleCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcclxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcclxcbi5mbG93LXJvb3Qge1xcblxcdGRpc3BsYXk6IGZsb3ctcm9vdDtcXG59XFxyXFxuLmdyaWQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcclxcbi5jb250ZW50cyB7XFxuXFx0ZGlzcGxheTogY29udGVudHM7XFxufVxcclxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcclxcbi5oLTYge1xcblxcdGhlaWdodDogMS41cmVtO1xcbn1cXHJcXG4uaC0xMCB7XFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxufVxcclxcbi5oLTE2IHtcXG5cXHRoZWlnaHQ6IDRyZW07XFxufVxcclxcbi5oLVxcXFxbMTAwcHhcXFxcXSB7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG59XFxyXFxuLmgtZnVsbCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXHJcXG4uaC01IHtcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxufVxcclxcbi5oLTFcXFxcLzIge1xcblxcdGhlaWdodDogNTAlO1xcbn1cXHJcXG4uaC0xMiB7XFxuXFx0aGVpZ2h0OiAzcmVtO1xcbn1cXHJcXG4uaC00OCB7XFxuXFx0aGVpZ2h0OiAxMnJlbTtcXG59XFxyXFxuLmgtNTYge1xcblxcdGhlaWdodDogMTRyZW07XFxufVxcclxcbi5oLTcge1xcblxcdGhlaWdodDogMS43NXJlbTtcXG59XFxyXFxuLmgtNCB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXHJcXG4uaC04IHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxufVxcclxcbi5oLTY0IHtcXG5cXHRoZWlnaHQ6IDE2cmVtO1xcbn1cXHJcXG4ubWluLWgtc2NyZWVuIHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxyXFxuLnctZnVsbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcclxcbi53LTYge1xcblxcdHdpZHRoOiAxLjVyZW07XFxufVxcclxcbi53LWF1dG8ge1xcblxcdHdpZHRoOiBhdXRvO1xcbn1cXHJcXG4udy01IHtcXG5cXHR3aWR0aDogMS4yNXJlbTtcXG59XFxyXFxuLnctMTIge1xcblxcdHdpZHRoOiAzcmVtO1xcbn1cXHJcXG4udy0xMCB7XFxuXFx0d2lkdGg6IDIuNXJlbTtcXG59XFxyXFxuLnctMjQge1xcblxcdHdpZHRoOiA2cmVtO1xcbn1cXHJcXG4udy00IHtcXG5cXHR3aWR0aDogMXJlbTtcXG59XFxyXFxuLnctNDgge1xcblxcdHdpZHRoOiAxMnJlbTtcXG59XFxyXFxuLnctc2NyZWVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcclxcbi53LTQwIHtcXG5cXHR3aWR0aDogMTByZW07XFxufVxcclxcbi5taW4tdy0wIHtcXG5cXHRtaW4td2lkdGg6IDBweDtcXG59XFxyXFxuLm1pbi13LWZ1bGwge1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG59XFxyXFxuLm1heC13LXhzIHtcXG5cXHRtYXgtd2lkdGg6IDIwcmVtO1xcbn1cXHJcXG4ubWF4LXctN3hsIHtcXG5cXHRtYXgtd2lkdGg6IDgwcmVtO1xcbn1cXHJcXG4ubWF4LXctbWQge1xcblxcdG1heC13aWR0aDogMjhyZW07XFxufVxcclxcbi5tYXgtdy1wcm9zZSB7XFxuXFx0bWF4LXdpZHRoOiA2NWNoO1xcbn1cXHJcXG4ubWF4LXctbWF4IHtcXG5cXHRtYXgtd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XFxuXFx0bWF4LXdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcblxcdG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcclxcbi5tYXgtdy0yeGwge1xcblxcdG1heC13aWR0aDogNDJyZW07XFxufVxcclxcbi5tYXgtdy1mdWxsIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcclxcbi5tYXgtdy0zeGwge1xcblxcdG1heC13aWR0aDogNDhyZW07XFxufVxcclxcbi5tYXgtdy1sZyB7XFxuXFx0bWF4LXdpZHRoOiAzMnJlbTtcXG59XFxyXFxuLm1heC13LXhsIHtcXG5cXHRtYXgtd2lkdGg6IDM2cmVtO1xcbn1cXHJcXG4ubWF4LXctNHhsIHtcXG5cXHRtYXgtd2lkdGg6IDU2cmVtO1xcbn1cXHJcXG4uZmxleC0xIHtcXG5cXHRmbGV4OiAxIDEgMCU7XFxufVxcclxcbi5mbGV4LXNocmluay0wIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG59XFxyXFxuLmZsZXgtZ3JvdyB7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXHJcXG4ub3JpZ2luLXRvcCB7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXHJcXG4ub3JpZ2luLXRvcC1yaWdodCB7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXHJcXG4uLXRyYW5zbGF0ZS14LWZ1bGwge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IC0xMDAlO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnRyYW5zbGF0ZS14LTAge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IDBweDtcXG5cXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcclxcbi50cmFuc2xhdGUteC1mdWxsIHtcXG5cXHQtLXR3LXRyYW5zbGF0ZS14OiAxMDAlO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnRyYW5zbGF0ZS15LTQge1xcblxcdC0tdHctdHJhbnNsYXRlLXk6IDFyZW07XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXHJcXG4udHJhbnNsYXRlLXktMCB7XFxuXFx0LS10dy10cmFuc2xhdGUteTogMHB4O1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnRyYW5zbGF0ZS14LTFcXFxcLzIge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcclxcbi50cmFuc2xhdGUteS0xIHtcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwLjI1cmVtO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnRyYW5zbGF0ZS15LTFcXFxcLzMge1xcblxcdC0tdHctdHJhbnNsYXRlLXk6IDMzLjMzMzMzMyU7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXHJcXG4uLXRyYW5zbGF0ZS14LTJcXFxcLzMge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IC02Ni42NjY2NjclO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLi10cmFuc2xhdGUteS0xXFxcXC8zIHtcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAtMzMuMzMzMzMzJTtcXG5cXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcclxcbi4tdHJhbnNsYXRlLXgtMVxcXFwvMyB7XFxuXFx0LS10dy10cmFuc2xhdGUteDogLTMzLjMzMzMzMyU7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXHJcXG4uLXJvdGF0ZS0xODAge1xcblxcdC0tdHctcm90YXRlOiAtMTgwZGVnO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnJvdGF0ZS0wIHtcXG5cXHQtLXR3LXJvdGF0ZTogMGRlZztcXG5cXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcclxcbi5zY2FsZS05NSB7XFxuXFx0LS10dy1zY2FsZS14OiAuOTU7XFxuXFx0LS10dy1zY2FsZS15OiAuOTU7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXHJcXG4uc2NhbGUtMTAwIHtcXG5cXHQtLXR3LXNjYWxlLXg6IDE7XFxuXFx0LS10dy1zY2FsZS15OiAxO1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxyXFxuLnRyYW5zZm9ybSB7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXHJcXG4uY3Vyc29yLXBvaW50ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxyXFxuLmFwcGVhcmFuY2Utbm9uZSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcclxcbi5ncmlkLWNvbHMtMiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXHJcXG4uZ3JpZC1jb2xzLTMge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxyXFxuLmdyaWQtY29scy0xIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcclxcbi5ncmlkLXJvd3MtMiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXHJcXG4uZmxleC1jb2wge1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcclxcbi5mbGV4LXdyYXAge1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxyXFxuLml0ZW1zLXN0YXJ0IHtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxyXFxuLml0ZW1zLWVuZCB7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXHJcXG4uaXRlbXMtY2VudGVyIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uaXRlbXMtYmFzZWxpbmUge1xcblxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxyXFxuLmp1c3RpZnktc3RhcnQge1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxyXFxuLmp1c3RpZnktZW5kIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXHJcXG4uanVzdGlmeS1jZW50ZXIge1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcclxcbi5qdXN0aWZ5LWl0ZW1zLWNlbnRlciB7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uZ2FwLTgge1xcblxcdGdyaWQtZ2FwOiAycmVtO1xcblxcdGdhcDogMnJlbTtcXG59XFxyXFxuLmdhcC00IHtcXG5cXHRncmlkLWdhcDogMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxufVxcclxcbi5nYXAtNiB7XFxuXFx0Z3JpZC1nYXA6IDEuNXJlbTtcXG5cXHRnYXA6IDEuNXJlbTtcXG59XFxyXFxuLmdhcC14LTQge1xcblxcdGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG5cXHQtbW96LWNvbHVtbi1nYXA6IDFyZW07XFxuXFx0ICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXHJcXG4uZ2FwLXktMTAge1xcblxcdGdyaWQtcm93LWdhcDogMi41cmVtO1xcblxcdHJvdy1nYXA6IDIuNXJlbTtcXG59XFxyXFxuLmdhcC14LTgge1xcblxcdGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXG5cXHQtbW96LWNvbHVtbi1nYXA6IDJyZW07XFxuXFx0ICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbn1cXHJcXG4uZ2FwLXktMTIge1xcblxcdGdyaWQtcm93LWdhcDogM3JlbTtcXG5cXHRyb3ctZ2FwOiAzcmVtO1xcbn1cXHJcXG4uZ2FwLXktMTYge1xcblxcdGdyaWQtcm93LWdhcDogNHJlbTtcXG5cXHRyb3ctZ2FwOiA0cmVtO1xcbn1cXHJcXG4uZ2FwLXktNCB7XFxuXFx0Z3JpZC1yb3ctZ2FwOiAxcmVtO1xcblxcdHJvdy1nYXA6IDFyZW07XFxufVxcclxcbi5nYXAteS02IHtcXG5cXHRncmlkLXJvdy1nYXA6IDEuNXJlbTtcXG5cXHRyb3ctZ2FwOiAxLjVyZW07XFxufVxcclxcbi5nYXAteC02IHtcXG5cXHRncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcXG5cXHQtbW96LWNvbHVtbi1nYXA6IDEuNXJlbTtcXG5cXHQgICAgIGNvbHVtbi1nYXA6IDEuNXJlbTtcXG59XFxyXFxuLmdhcC15LTIwIHtcXG5cXHRncmlkLXJvdy1nYXA6IDVyZW07XFxuXFx0cm93LWdhcDogNXJlbTtcXG59XFxyXFxuLmdhcC15LTgge1xcblxcdGdyaWQtcm93LWdhcDogMnJlbTtcXG5cXHRyb3ctZ2FwOiAycmVtO1xcbn1cXHJcXG4uc3BhY2UteC04ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDJyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygycmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uc3BhY2UteS0xMCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi10b3A6IGNhbGMoMi41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxufVxcclxcbi5zcGFjZS15LTYgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tdG9wOiBjYWxjKDEuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDEuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXHJcXG4uc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uc3BhY2UteS0xID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS15LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXRvcDogY2FsYygwLjI1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4yNXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXHJcXG4uc3BhY2UteC0xID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuMjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjI1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uc3BhY2UteS04ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS15LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXRvcDogY2FsYygycmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMnJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXHJcXG4uc3BhY2UteC02ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDEuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDEuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXG59XFxyXFxuLnNwYWNlLXktNCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXG59XFxyXFxuLnNwYWNlLXgtMTAgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMi41cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMi41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uc3BhY2UteC0zID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuNzVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjc1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uLXNwYWNlLXktcHggPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tdG9wOiBjYWxjKC0xcHggKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygtMXB4ICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxufVxcclxcbi5zcGFjZS15LTMgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tdG9wOiBjYWxjKDAuNzVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjc1cmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxufVxcclxcbi5zcGFjZS14LTIgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMC41cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMC41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXHJcXG4uZGl2aWRlLXkgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LWRpdmlkZS15LXJldmVyc2U6IDA7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogY2FsYygxcHggKiBjYWxjKDEgLSB2YXIoLS10dy1kaXZpZGUteS1yZXZlcnNlKSkpO1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMXB4ICogdmFyKC0tdHctZGl2aWRlLXktcmV2ZXJzZSkpO1xcbn1cXHJcXG4uZGl2aWRlLXktMiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctZGl2aWRlLXktcmV2ZXJzZTogMDtcXG5cXHRib3JkZXItdG9wLXdpZHRoOiBjYWxjKDJweCAqIGNhbGMoMSAtIHZhcigtLXR3LWRpdmlkZS15LXJldmVyc2UpKSk7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygycHggKiB2YXIoLS10dy1kaXZpZGUteS1yZXZlcnNlKSk7XFxufVxcclxcbi5kaXZpZGUtZ3JheS0yMDAgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LWRpdmlkZS1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1kaXZpZGUtb3BhY2l0eSkpO1xcbn1cXHJcXG4uZGl2aWRlLWdyYXktNTAgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LWRpdmlkZS1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDI1MCwgMjUxLCB2YXIoLS10dy1kaXZpZGUtb3BhY2l0eSkpO1xcbn1cXHJcXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXHJcXG4ub3ZlcmZsb3cteS1hdXRvIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXHJcXG4ud2hpdGVzcGFjZS1ub3dyYXAge1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcclxcbi5yb3VuZGVkLW1kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxyXFxuLnJvdW5kZWQtbGcge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxyXFxuLnJvdW5kZWQtZnVsbCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXHJcXG4ucm91bmRlZC14bCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXG59XFxyXFxuLnJvdW5kZWQtbm9uZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcbn1cXHJcXG4ucm91bmRlZCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxyXFxuLnJvdW5kZWQtM3hsIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxLjVyZW07XFxufVxcclxcbi5yb3VuZGVkLXQtbWQge1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxyXFxuLnJvdW5kZWQtYi1tZCB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMzc1cmVtO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXHJcXG4uYm9yZGVyIHtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG59XFxyXFxuLmJvcmRlci0wIHtcXG5cXHRib3JkZXItd2lkdGg6IDBweDtcXG59XFxyXFxuLmJvcmRlci1iIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcclxcbi5ib3JkZXItYi0yIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcclxcbi5ib3JkZXItdCB7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXHJcXG4uYm9yZGVyLWdyYXktMjAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLWxpbWUge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDEzMiwgMjA0LCAyMiwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci10cmFuc3BhcmVudCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxyXFxuLmJvcmRlci1ncmF5LTMwMCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1ncmF5LTEwMCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1hY2NlbnQtNyB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1hY2NlbnQtMiB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjM0LCAyMzQsIDIzNCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1ibGFjayB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLXdoaXRlIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1ibGFjayB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctZ3JheS0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWxpbWUge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMiwgMjA0LCAyMiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctZ3JheS05MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWdyYXktNjAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcclxcbi5iZy1ncmF5LTUwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI1MCwgMjUxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1pbmRpZ28tNjAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctaW5kaWdvLTEwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMzEsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctZ3JheS01MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNywgMTE0LCAxMjgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWFjY2VudC03IHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1hY2NlbnQtMSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctcHVycGxlLTUwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1ncmVlbi0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjUwLCAyMjksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLW9wYWNpdHktMjUge1xcblxcdC0tdHctYmctb3BhY2l0eTogMC4yNTtcXG59XFxyXFxuLmJnLW9wYWNpdHktNzUge1xcblxcdC0tdHctYmctb3BhY2l0eTogMC43NTtcXG59XFxyXFxuLmJnLWNsaXAtdGV4dCB7XFxuXFx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFx0ICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcclxcbi5vYmplY3QtY292ZXIge1xcblxcdC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcblxcdCAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXHJcXG4ub2JqZWN0LWNlbnRlciB7XFxuXFx0LW8tb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcclxcbi5wLTIge1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxyXFxuLnAtMSB7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxyXFxuLnAtMyB7XFxuXFx0cGFkZGluZzogMC43NXJlbTtcXG59XFxyXFxuLnAtNiB7XFxuXFx0cGFkZGluZzogMS41cmVtO1xcbn1cXHJcXG4ucC00IHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXHJcXG4ucHgtNCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcclxcbi5weS00IHtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxyXFxuLnB4LTEge1xcblxcdHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXHJcXG4ucHktNiB7XFxuXFx0cGFkZGluZy10b3A6IDEuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXHJcXG4ucHktMTYge1xcblxcdHBhZGRpbmctdG9wOiA0cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXHJcXG4ucHktMjAge1xcblxcdHBhZGRpbmctdG9wOiA1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbn1cXHJcXG4ucHktMiB7XFxuXFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4ucHktMTAge1xcblxcdHBhZGRpbmctdG9wOiAyLjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxyXFxuLnB4LTUge1xcblxcdHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4ucHgtMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ucHgtMyB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcclxcbi5weS0zIHtcXG5cXHRwYWRkaW5nLXRvcDogMC43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxyXFxuLnB5LTBcXFxcLjUge1xcblxcdHBhZGRpbmctdG9wOiAwLjEyNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC4xMjVyZW07XFxufVxcclxcbi5weS0wIHtcXG5cXHRwYWRkaW5nLXRvcDogMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcclxcbi5weC02IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxufVxcclxcbi5weS0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcclxcbi5weS04IHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxyXFxuLnB5LVxcXFxbMjBweFxcXFxdIHtcXG5cXHRwYWRkaW5nLXRvcDogMjBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxyXFxuLnB4LTgge1xcblxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXHJcXG4ucHgtXFxcXFszMFxcXFxdIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMwO1xcblxcdHBhZGRpbmctcmlnaHQ6IDMwO1xcbn1cXHJcXG4ucHktMjQge1xcblxcdHBhZGRpbmctdG9wOiA2cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA2cmVtO1xcbn1cXHJcXG4ucHgtMTIge1xcblxcdHBhZGRpbmctbGVmdDogM3JlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbn1cXHJcXG4ucHktMSB7XFxuXFx0cGFkZGluZy10b3A6IDAuMjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcclxcbi5wYi0xMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcclxcbi5wdC01IHtcXG5cXHRwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG59XFxyXFxuLnBiLTIge1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcclxcbi5wdC0xMCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG59XFxyXFxuLnBiLTgge1xcblxcdHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXHJcXG4ucHQtcHgge1xcblxcdHBhZGRpbmctdG9wOiAxcHg7XFxufVxcclxcbi5wdC1cXFxcWzEwcHhcXFxcXSB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxufVxcclxcbi5wdC02IHtcXG5cXHRwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXHJcXG4ucHQtNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxufVxcclxcbi5wYi02IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXHJcXG4ucHItMiB7XFxuXFx0cGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ucGItMyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxufVxcclxcbi5wdC0xNiB7XFxuXFx0cGFkZGluZy10b3A6IDRyZW07XFxufVxcclxcbi5wYi0xNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcclxcbi5wYi01IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcXG59XFxyXFxuLnB0LTEyIHtcXG5cXHRwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxyXFxuLnBsLTMge1xcblxcdHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG59XFxyXFxuLnBsLTEge1xcblxcdHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG59XFxyXFxuLnBiLTQge1xcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXHJcXG4ucHQtMjQge1xcblxcdHBhZGRpbmctdG9wOiA2cmVtO1xcbn1cXHJcXG4ucGItMTAge1xcblxcdHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcclxcbi5wYi0yNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcclxcbi5wYi0yMCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDVyZW07XFxufVxcclxcbi5wci0xMiB7XFxuXFx0cGFkZGluZy1yaWdodDogM3JlbTtcXG59XFxyXFxuLnBsLTQge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxyXFxuLnByLTgge1xcblxcdHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcclxcbi5wbC0yMCB7XFxuXFx0cGFkZGluZy1sZWZ0OiA1cmVtO1xcbn1cXHJcXG4ucHQtMiB7XFxuXFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxyXFxuLnB0LTgge1xcblxcdHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXHJcXG4udGV4dC1sZWZ0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXHJcXG4udGV4dC1jZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuLmFsaWduLXRvcCB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxyXFxuLmFsaWduLWJvdHRvbSB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxyXFxuLnRleHQtYmFzZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcclxcbi50ZXh0LXNtIHtcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4udGV4dC14cyB7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXHJcXG4udGV4dC00eGwge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXHJcXG4udGV4dC0zeGwge1xcblxcdGZvbnQtc2l6ZTogMS44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcclxcbi50ZXh0LXhsIHtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcclxcbi50ZXh0LWxnIHtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXHJcXG4udGV4dC0yeGwge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXHJcXG4udGV4dC02eGwge1xcblxcdGZvbnQtc2l6ZTogMi43NXJlbTtcXG59XFxyXFxuLnRleHQtNXhsIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG59XFxyXFxuLmZvbnQtbWVkaXVtIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXHJcXG4uZm9udC1zZW1pYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxyXFxuLmZvbnQtZXh0cmFib2xkIHtcXG5cXHRmb250LXdlaWdodDogODAwO1xcbn1cXHJcXG4uZm9udC1ib2xkIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXHJcXG4udXBwZXJjYXNlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXHJcXG4ubGVhZGluZy01IHtcXG5cXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLmxlYWRpbmctNiB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxyXFxuLmxlYWRpbmctdGlnaHQge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcclxcbi5sZWFkaW5nLTcge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXHJcXG4ubGVhZGluZy1zbnVnIHtcXG5cXHRsaW5lLWhlaWdodDogMS4zNzU7XFxufVxcclxcbi5sZWFkaW5nLXJlbGF4ZWQge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjYyNTtcXG59XFxyXFxuLmxlYWRpbmctOCB7XFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxufVxcclxcbi50cmFja2luZy13aWRlIHtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcXG59XFxyXFxuLnRyYWNraW5nLXRpZ2h0IHtcXG5cXHRsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW07XFxufVxcclxcbi50cmFja2luZy13aWRlciB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG59XFxyXFxuLnRyYWNraW5nLXRpZ2h0ZXIge1xcblxcdGxldHRlci1zcGFjaW5nOiAtLjA0ZW07XFxufVxcclxcbi50ZXh0LWdyYXktNDAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtbGltZSB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTMyLCAyMDQsIDIyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtZ3JheS05MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1ncmF5LTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXdoaXRlIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtZ3JheS03MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1ncmF5LTMwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXRyYW5zcGFyZW50IHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcclxcbi50ZXh0LWN5YW4tMTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMDcsIDI1MCwgMjU0LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtZ3JheS02MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDc1LCA4NSwgOTksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udW5kZXJsaW5lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxyXFxuLnBsYWNlaG9sZGVyLWdyYXktNTAwOjotbW96LXBsYWNlaG9sZGVyIHtcXG5cXHQtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4ucGxhY2Vob2xkZXItZ3JheS01MDA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHQtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4ucGxhY2Vob2xkZXItZ3JheS01MDA6OnBsYWNlaG9sZGVyIHtcXG5cXHQtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4ub3BhY2l0eS0wIHtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXHJcXG4ub3BhY2l0eS0xMDAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcclxcbi5vcGFjaXR5LTI1IHtcXG5cXHRvcGFjaXR5OiAwLjI1O1xcbn1cXHJcXG4uc2hhZG93LXhsIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG5cXHRib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcclxcbi5zaGFkb3cge1xcblxcdC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXHJcXG4uc2hhZG93LXNtIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXHRib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcclxcbi5zaGFkb3ctbWQge1xcblxcdC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXHJcXG4uc2hhZG93LWxnIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXHJcXG4uc2hhZG93LXNtYWxsIHtcXG5cXHQtLXR3LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcblxcdGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxyXFxuLnNoYWRvdy0yeGwge1xcblxcdC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxyXFxuLnJpbmctMSB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgMCAwIHJnYmEoMCwwLDAsMCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKTtcXG59XFxyXFxuLnJpbmctMiB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgMCAwIHJnYmEoMCwwLDAsMCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKTtcXG59XFxyXFxuLnJpbmctYmxhY2sge1xcblxcdC0tdHctcmluZy1vcGFjaXR5OiAxO1xcblxcdC0tdHctcmluZy1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxyXFxuLnJpbmctbGltZSB7XFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDEzMiwgMjA0LCAyMiwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XFxufVxcclxcbi5yaW5nLW9wYWNpdHktNSB7XFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDAuMDU7XFxufVxcclxcbi5maWx0ZXIge1xcblxcdGZpbHRlcjogdmFyKC0tdHctZmlsdGVyKTtcXG59XFxyXFxuLnRyYW5zaXRpb24tb3BhY2l0eSB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxyXFxuLnRyYW5zaXRpb24ge1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXHJcXG4udHJhbnNpdGlvbi1jb2xvcnMge1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZTtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxyXFxuLnRyYW5zaXRpb24tYWxsIHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcbi50cmFuc2l0aW9uLXNoYWRvdyB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxyXFxuLmR1cmF0aW9uLTMwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcclxcbi5kdXJhdGlvbi0yMDAge1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXHJcXG4uZHVyYXRpb24tMTUwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxyXFxuLmR1cmF0aW9uLTEwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxufVxcclxcbi5kdXJhdGlvbi03NSB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG59XFxyXFxuLmVhc2UtbGluZWFyIHtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbn1cXHJcXG4uZWFzZS1pbi1vdXQge1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXHJcXG4uZWFzZS1vdXQge1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG59XFxyXFxuLmVhc2UtaW4ge1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1saW1lOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzIsIDIwNCwgMjIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1ncmF5LTgwMDpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uaG92ZXJcXFxcOmJnLWdyYXktNzAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6YmctZ3JheS0xMDA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1ncmF5LTUwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI1MCwgMjUxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6YmctaW5kaWdvLTcwMDpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDU2LCAyMDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1pbmRpZ28tMjAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDIxMCwgMjU0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6Ymctd2hpdGU6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1wdXJwbGUtNDAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDEzOSwgMjUwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6YmctaW5kaWdvLTUwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDI0MiwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6ZnJvbS10ZWFsLTYwMDpob3ZlciB7XFxuXFx0LS10dy1ncmFkaWVudC1mcm9tOiAjMGQ5NDg4O1xcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSgxMywgMTQ4LCAxMzYsIDApKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0by1jeWFuLTcwMDpob3ZlciB7XFxuXFx0LS10dy1ncmFkaWVudC10bzogIzBlNzQ5MDtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktODAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgzMSwgNDEsIDU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktNjAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktMzAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktMjAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktNTAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktOTAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktNzAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LXN1Y2Nlc3M6aG92ZXIge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDAsIDExMiwgMjQzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp0ZXh0LWJsYWNrOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDp1bmRlcmxpbmU6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXHJcXG4uaG92ZXJcXFxcOnNoYWRvdy1tZWRpdW06aG92ZXIge1xcblxcdC0tdHctc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXHJcXG4uZm9jdXNcXFxcOnotMTA6Zm9jdXMge1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXHJcXG4uZm9jdXNcXFxcOmJvcmRlci1saW1lOmZvY3VzIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxMzIsIDIwNCwgMjIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxyXFxuLmZvY3VzXFxcXDpyaW5nLTE6Zm9jdXMge1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIDAgMCByZ2JhKDAsMCwwLDApO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSk7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy0yOmZvY3VzIHtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDJweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCAwIDAgcmdiYSgwLDAsMCwwKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpO1xcbn1cXHJcXG4uZm9jdXNcXFxcOnJpbmctaW5zZXQ6Zm9jdXMge1xcblxcdC0tdHctcmluZy1pbnNldDogaW5zZXQ7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy1saW1lOmZvY3VzIHtcXG5cXHQtLXR3LXJpbmctb3BhY2l0eTogMTtcXG5cXHQtLXR3LXJpbmctY29sb3I6IHJnYmEoMTMyLCAyMDQsIDIyLCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxyXFxuLmZvY3VzXFxcXDpyaW5nLXdoaXRlOmZvY3VzIHtcXG5cXHQtLXR3LXJpbmctb3BhY2l0eTogMTtcXG5cXHQtLXR3LXJpbmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy1pbmRpZ28tNTAwOmZvY3VzIHtcXG5cXHQtLXR3LXJpbmctb3BhY2l0eTogMTtcXG5cXHQtLXR3LXJpbmctY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxyXFxuLmZvY3VzXFxcXDpyaW5nLWluZGlnby02MDA6Zm9jdXMge1xcblxcdC0tdHctcmluZy1vcGFjaXR5OiAxO1xcblxcdC0tdHctcmluZy1jb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy1jeWFuLTQwMDpmb2N1cyB7XFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDM0LCAyMTEsIDIzOCwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy1vZmZzZXQtMjpmb2N1cyB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMnB4O1xcbn1cXHJcXG4uZm9jdXNcXFxcOnJpbmctb2Zmc2V0LWdyYXktNTA6Zm9jdXMge1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmOWZhZmI7XFxufVxcclxcbi5mb2N1c1xcXFw6cmluZy1vZmZzZXQtZ3JheS05MDA6Zm9jdXMge1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICMxMTE4Mjc7XFxufVxcclxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOnRleHQtbGltZSB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTMyLCAyMDQsIDIyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6dGV4dC1ncmF5LTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOm9wYWNpdHktNzUge1xcblxcdG9wYWNpdHk6IDAuNzU7XFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcblxcdC5zbVxcXFw6YXNwZWN0LXctMSxcXG4uc21cXFxcOmFzcGVjdC13LTIsXFxuLnNtXFxcXDphc3BlY3Qtdy0zLFxcbi5zbVxcXFw6YXNwZWN0LXctNCxcXG4uc21cXFxcOmFzcGVjdC13LTUsXFxuLnNtXFxcXDphc3BlY3Qtdy02LFxcbi5zbVxcXFw6YXNwZWN0LXctNyxcXG4uc21cXFxcOmFzcGVjdC13LTgsXFxuLnNtXFxcXDphc3BlY3Qtdy05LFxcbi5zbVxcXFw6YXNwZWN0LXctMTAsXFxuLnNtXFxcXDphc3BlY3Qtdy0xMSxcXG4uc21cXFxcOmFzcGVjdC13LTEyLFxcbi5zbVxcXFw6YXNwZWN0LXctMTMsXFxuLnNtXFxcXDphc3BlY3Qtdy0xNCxcXG4uc21cXFxcOmFzcGVjdC13LTE1LFxcbi5zbVxcXFw6YXNwZWN0LXctMTYge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS10dy1hc3BlY3QtaCkgLyB2YXIoLS10dy1hc3BlY3QtdykgKiAxMDAlKTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDphc3BlY3Qtdy0xLFxcbi5zbVxcXFw6YXNwZWN0LXctMixcXG4uc21cXFxcOmFzcGVjdC13LTMsXFxuLnNtXFxcXDphc3BlY3Qtdy00LFxcbi5zbVxcXFw6YXNwZWN0LXctNSxcXG4uc21cXFxcOmFzcGVjdC13LTYsXFxuLnNtXFxcXDphc3BlY3Qtdy03LFxcbi5zbVxcXFw6YXNwZWN0LXctOCxcXG4uc21cXFxcOmFzcGVjdC13LTksXFxuLnNtXFxcXDphc3BlY3Qtdy0xMCxcXG4uc21cXFxcOmFzcGVjdC13LTExLFxcbi5zbVxcXFw6YXNwZWN0LXctMTIsXFxuLnNtXFxcXDphc3BlY3Qtdy0xMyxcXG4uc21cXFxcOmFzcGVjdC13LTE0LFxcbi5zbVxcXFw6YXNwZWN0LXctMTUsXFxuLnNtXFxcXDphc3BlY3Qtdy0xNiB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXR3LWFzcGVjdC1oKSAvIHZhcigtLXR3LWFzcGVjdC13KSAqIDEwMCUpO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmFzcGVjdC13LTEgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMiA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy0zID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTQgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctNSA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy02ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTcgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctOCA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy05ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTEwID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTExID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTEyID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTEzID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTE0ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTE1ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTE2ID4gKiB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0Ym90dG9tOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6YXNwZWN0LXctMSA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy0yID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTMgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctNCA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy01ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTYgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctNyA+ICosXFxuLnNtXFxcXDphc3BlY3Qtdy04ID4gKixcXG4uc21cXFxcOmFzcGVjdC13LTkgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTAgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTEgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTIgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTMgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTQgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTUgPiAqLFxcbi5zbVxcXFw6YXNwZWN0LXctMTYgPiAqIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDphc3BlY3Qtdy0yIHtcXG5cXHRcXHQtLXR3LWFzcGVjdC13OiAyO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmFzcGVjdC13LTE2IHtcXG5cXHRcXHQtLXR3LWFzcGVjdC13OiAxNjtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDphc3BlY3QtaC0xIHtcXG5cXHRcXHQtLXR3LWFzcGVjdC1oOiAxO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmFzcGVjdC1oLTcge1xcblxcdFxcdC0tdHctYXNwZWN0LWg6IDc7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6Y29sLXNwYW4tMiB7XFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpteS04IHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bXgtMCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpteC1hdXRvIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bXQtNCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptdC01IHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOm10LTEyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzcmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOi1tYi00OCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLTEycmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOi1tYi0yNCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLTZyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bWwtNiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptdC0wIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bWwtNCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bXQtNiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOm1sLTMge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOm10LTgge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bWwtNyB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDEuNzVyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6YmxvY2sge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmlubGluZS1ibG9jayB7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmZsZXgge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6Z3JpZCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpoLTcyIHtcXG5cXHRcXHRoZWlnaHQ6IDE4cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmgtc2NyZWVuIHtcXG5cXHRcXHRoZWlnaHQ6IDEwMHZoO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmgtMTAge1xcblxcdFxcdGhlaWdodDogMi41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnctZnVsbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6dy1hdXRvIHtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptYXgtdy1tZCB7XFxuXFx0XFx0bWF4LXdpZHRoOiAyOHJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptYXgtdy0yeGwge1xcblxcdFxcdG1heC13aWR0aDogNDJyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6bWF4LXctM3hsIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDQ4cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOm1heC13LWxnIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDMycmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOm1heC13LTd4bCB7XFxuXFx0XFx0bWF4LXdpZHRoOiA4MHJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptYXgtdy1zbSB7XFxuXFx0XFx0bWF4LXdpZHRoOiAyNHJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDptYXgtdy14bCB7XFxuXFx0XFx0bWF4LXdpZHRoOiAzNnJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDp0cmFuc2xhdGUteS0wIHtcXG5cXHRcXHQtLXR3LXRyYW5zbGF0ZS15OiAwcHg7XFxuXFx0XFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnNjYWxlLTk1IHtcXG5cXHRcXHQtLXR3LXNjYWxlLXg6IC45NTtcXG5cXHRcXHQtLXR3LXNjYWxlLXk6IC45NTtcXG5cXHRcXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6c2NhbGUtMTAwIHtcXG5cXHRcXHQtLXR3LXNjYWxlLXg6IDE7XFxuXFx0XFx0LS10dy1zY2FsZS15OiAxO1xcblxcdFxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpncmlkLWNvbHMtMyB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmdyaWQtY29scy0yIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6ZmxleC13cmFwIHtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6aXRlbXMtY2VudGVyIHtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmp1c3RpZnktY2VudGVyIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpqdXN0aWZ5LWJldHdlZW4ge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpnYXAtOCB7XFxuXFx0XFx0Z3JpZC1nYXA6IDJyZW07XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmdhcC02IHtcXG5cXHRcXHRncmlkLWdhcDogMS41cmVtO1xcblxcdFxcdGdhcDogMS41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmdhcC14LTgge1xcblxcdFxcdGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXG5cXHRcXHQtbW96LWNvbHVtbi1nYXA6IDJyZW07XFxuXFx0XFx0ICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmdhcC14LTYge1xcblxcdFxcdGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xcblxcdFxcdC1tb3otY29sdW1uLWdhcDogMS41cmVtO1xcblxcdFxcdCAgICAgY29sdW1uLWdhcDogMS41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmdhcC15LTEwIHtcXG5cXHRcXHRncmlkLXJvdy1nYXA6IDIuNXJlbTtcXG5cXHRcXHRyb3ctZ2FwOiAyLjVyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6Z2FwLXktMTYge1xcblxcdFxcdGdyaWQtcm93LWdhcDogNHJlbTtcXG5cXHRcXHRyb3ctZ2FwOiA0cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnNwYWNlLXktNCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdFxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdFxcdG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpzcGFjZS14LTYgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHRcXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMS41cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGNhbGMoMS41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnRydW5jYXRlIHtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6Ym9yZGVyLTAge1xcblxcdFxcdGJvcmRlci13aWR0aDogMHB4O1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmJvcmRlci1sIHtcXG5cXHRcXHRib3JkZXItbGVmdC13aWR0aDogMXB4O1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmJvcmRlci1yIHtcXG5cXHRcXHRib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpib3JkZXItZ3JheS0yMDAge1xcblxcdFxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6Ym9yZGVyLXRyYW5zcGFyZW50IHtcXG5cXHRcXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnAtMCB7XFxuXFx0XFx0cGFkZGluZzogMHB4O1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnAtNiB7XFxuXFx0XFx0cGFkZGluZzogMS41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnAtOCB7XFxuXFx0XFx0cGFkZGluZzogMnJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpweC02IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6cHktMjQge1xcblxcdFxcdHBhZGRpbmctdG9wOiA2cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA2cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnB5LTIwIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogNXJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpweS0zMiB7XFxuXFx0XFx0cGFkZGluZy10b3A6IDhyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDhyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6cHktMTYge1xcblxcdFxcdHBhZGRpbmctdG9wOiA0cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnB4LTAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMHB4O1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpweC01IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpweS0xMiB7XFxuXFx0XFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6cHgtOCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAycmVtO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6cHQtMTYge1xcblxcdFxcdHBhZGRpbmctdG9wOiA0cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnBiLTUge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnB0LTI0IHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogNnJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpwbC02IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDpwYi0zMiB7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDhyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6cGItMTYge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnRleHQtY2VudGVyIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6YWxpZ24tdG9wIHtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOmFsaWduLW1pZGRsZSB7XFxuXFx0XFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDp0ZXh0LXNtIHtcXG5cXHRcXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnRleHQtYmFzZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6dGV4dC02eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogMi43NXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDp0ZXh0LXhsIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcclxcblxcdC5zbVxcXFw6dGV4dC00eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMi41cmVtO1xcblxcdH1cXHJcXG5cXHQuc21cXFxcOnRleHQtNXhsIHtcXG5cXHRcXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDp0ZXh0LTN4bCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjg3NXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMi4yNXJlbTtcXG5cXHR9XFxyXFxuXFx0LnNtXFxcXDp0ZXh0LWxnIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFx0Lm1kXFxcXDphYnNvbHV0ZSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOmxlZnQtMCB7XFxuXFx0XFx0bGVmdDogMHB4O1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOmNvbC1zcGFuLTIge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDIgLyBzcGFuIDI7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Y29sLXNwYW4tOCB7XFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gOCAvIHNwYW4gODtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpjb2wtc3RhcnQtMyB7XFxuXFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6cm93LXN0YXJ0LTEge1xcblxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnJvdy1zdGFydC0yIHtcXG5cXHRcXHRncmlkLXJvdy1zdGFydDogMjtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDptdC0wIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWwtMTAge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWwtYXV0byB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWItMTIge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWItMTYge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWItMjgge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDdyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bWItMCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOm10LTE2IHtcXG5cXHRcXHRtYXJnaW4tdG9wOiA0cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOm10LTUge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuMjVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6YmxvY2sge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOmZsZXgge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z3JpZCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpoaWRkZW4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6aC1mdWxsIHtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6aC05NiB7XFxuXFx0XFx0aGVpZ2h0OiAyNHJlbTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDp3LWF1dG8ge1xcblxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnctMVxcXFwvMiB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDptYXgtdy0zeGwge1xcblxcdFxcdG1heC13aWR0aDogNDhyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6ZmxleC0xIHtcXG5cXHRcXHRmbGV4OiAxIDEgMCU7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z3JpZC1mbG93LWNvbCB7XFxuXFx0XFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDphdXRvLXJvd3MtbWluIHtcXG5cXHRcXHRncmlkLWF1dG8tcm93czogLXdlYmtpdC1taW4tY29udGVudDtcXG5cXHRcXHRncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z3JpZC1jb2xzLTEyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOmdyaWQtY29scy0yIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6cGxhY2UtaXRlbXMtY2VudGVyIHtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOml0ZW1zLWNlbnRlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpqdXN0aWZ5LXN0YXJ0IHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6anVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z2FwLTgge1xcblxcdFxcdGdyaWQtZ2FwOiAycmVtO1xcblxcdFxcdGdhcDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpnYXAteC04IHtcXG5cXHRcXHRncmlkLWNvbHVtbi1nYXA6IDJyZW07XFxuXFx0XFx0LW1vei1jb2x1bW4tZ2FwOiAycmVtO1xcblxcdFxcdCAgICAgY29sdW1uLWdhcDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpnYXAteS0xNiB7XFxuXFx0XFx0Z3JpZC1yb3ctZ2FwOiA0cmVtO1xcblxcdFxcdHJvdy1nYXA6IDRyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z2FwLXktMTAge1xcblxcdFxcdGdyaWQtcm93LWdhcDogMi41cmVtO1xcblxcdFxcdHJvdy1nYXA6IDIuNXJlbTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpnYXAteC0xNiB7XFxuXFx0XFx0Z3JpZC1jb2x1bW4tZ2FwOiA0cmVtO1xcblxcdFxcdC1tb3otY29sdW1uLWdhcDogNHJlbTtcXG5cXHRcXHQgICAgIGNvbHVtbi1nYXA6IDRyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6Z2FwLXktMzIge1xcblxcdFxcdGdyaWQtcm93LWdhcDogOHJlbTtcXG5cXHRcXHRyb3ctZ2FwOiA4cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnNwYWNlLXgtNiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdFxcdC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcblxcdFxcdG1hcmdpbi1yaWdodDogY2FsYygxLjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6c3BhY2UteC0xMCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdFxcdC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcblxcdFxcdG1hcmdpbi1yaWdodDogY2FsYygyLjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogY2FsYygyLjVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6c3BhY2UteC04ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0XFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDJyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogY2FsYygycmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnNwYWNlLXktMCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdFxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdFxcdG1hcmdpbi10b3A6IGNhbGMoMHB4ICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGMoMHB4ICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6cHktMjgge1xcblxcdFxcdHBhZGRpbmctdG9wOiA3cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA3cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnB5LTQge1xcblxcdFxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnB4LTEwIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6cGwtMTAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnBiLTIwIHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDpwci00IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnByLTgge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6cGwtOCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAycmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnRleHQtbGVmdCB7XFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDp0ZXh0LTd4bCB7XFxuXFx0XFx0Zm9udC1zaXplOiA0LjVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6dGV4dC00eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMi41cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnRleHQtNnhsIHtcXG5cXHRcXHRmb250LXNpemU6IDIuNzVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6dGV4dC14bCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdH1cXHJcXG5cXHQubWRcXFxcOnRleHQtbGcge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcclxcblxcdC5tZFxcXFw6bGVhZGluZy1ub25lIHtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTtcXG5cXHR9XFxyXFxuXFx0Lm1kXFxcXDp0cmFja2luZy10aWdodGVyIHtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdC5sZ1xcXFw6YXNwZWN0LXctMSxcXG4ubGdcXFxcOmFzcGVjdC13LTIsXFxuLmxnXFxcXDphc3BlY3Qtdy0zLFxcbi5sZ1xcXFw6YXNwZWN0LXctNCxcXG4ubGdcXFxcOmFzcGVjdC13LTUsXFxuLmxnXFxcXDphc3BlY3Qtdy02LFxcbi5sZ1xcXFw6YXNwZWN0LXctNyxcXG4ubGdcXFxcOmFzcGVjdC13LTgsXFxuLmxnXFxcXDphc3BlY3Qtdy05LFxcbi5sZ1xcXFw6YXNwZWN0LXctMTAsXFxuLmxnXFxcXDphc3BlY3Qtdy0xMSxcXG4ubGdcXFxcOmFzcGVjdC13LTEyLFxcbi5sZ1xcXFw6YXNwZWN0LXctMTMsXFxuLmxnXFxcXDphc3BlY3Qtdy0xNCxcXG4ubGdcXFxcOmFzcGVjdC13LTE1LFxcbi5sZ1xcXFw6YXNwZWN0LXctMTYge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS10dy1hc3BlY3QtaCkgLyB2YXIoLS10dy1hc3BlY3QtdykgKiAxMDAlKTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDphc3BlY3Qtdy0xID4gKixcXG4ubGdcXFxcOmFzcGVjdC13LTIgPiAqLFxcbi5sZ1xcXFw6YXNwZWN0LXctMyA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy00ID4gKixcXG4ubGdcXFxcOmFzcGVjdC13LTUgPiAqLFxcbi5sZ1xcXFw6YXNwZWN0LXctNiA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy03ID4gKixcXG4ubGdcXFxcOmFzcGVjdC13LTggPiAqLFxcbi5sZ1xcXFw6YXNwZWN0LXctOSA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xMCA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xMSA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xMiA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xMyA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xNCA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xNSA+ICosXFxuLmxnXFxcXDphc3BlY3Qtdy0xNiA+ICoge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmFzcGVjdC1ub25lIHtcXG5cXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmFzcGVjdC1ub25lID4gKiB7XFxuXFx0XFx0cG9zaXRpb246IHN0YXRpYztcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0XFx0dG9wOiBhdXRvO1xcblxcdFxcdHJpZ2h0OiBhdXRvO1xcblxcdFxcdGJvdHRvbTogYXV0bztcXG5cXHRcXHRsZWZ0OiBhdXRvO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmFzcGVjdC13LTEge1xcblxcdFxcdC0tdHctYXNwZWN0LXc6IDE7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6YWJzb2x1dGUge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpyZWxhdGl2ZSB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmluc2V0LXktMCB7XFxuXFx0XFx0dG9wOiAwcHg7XFxuXFx0XFx0Ym90dG9tOiAwcHg7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6cmlnaHQtMCB7XFxuXFx0XFx0cmlnaHQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpsZWZ0LTFcXFxcLzIge1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpsZWZ0LTAge1xcblxcdFxcdGxlZnQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDp6LTEwIHtcXG5cXHRcXHR6LWluZGV4OiAxMDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpjb2wtc3Bhbi02IHtcXG5cXHRcXHRncmlkLWNvbHVtbjogc3BhbiA2IC8gc3BhbiA2O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmNvbC1zcGFuLTQge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDQgLyBzcGFuIDQ7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6Y29sLXNwYW4tMiB7XFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpjb2wtc3Bhbi0xMCB7XFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMTAgLyBzcGFuIDEwO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmNvbC1zcGFuLTMge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDMgLyBzcGFuIDM7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6Y29sLXN0YXJ0LTEge1xcblxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmNvbC1zdGFydC0yIHtcXG5cXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMjtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpjb2wtc3RhcnQtOSB7XFxuXFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDk7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6Y29sLXN0YXJ0LTMge1xcblxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmNvbC1zdGFydC00IHtcXG5cXHRcXHRncmlkLWNvbHVtbi1zdGFydDogNDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpyb3ctc3Bhbi0yIHtcXG5cXHRcXHRncmlkLXJvdzogc3BhbiAyIC8gc3BhbiAyO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnJvdy1zdGFydC0xIHtcXG5cXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpyb3ctc3RhcnQtMiB7XFxuXFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bS0wIHtcXG5cXHRcXHRtYXJnaW46IDBweDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpteC1hdXRvIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6LW15LTgge1xcblxcdFxcdG1hcmdpbi10b3A6IC0ycmVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IC0ycmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm14LTAge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwcHg7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bWwtMCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDptbC04IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDptdC02IHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6LW1iLTgwIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAtMjByZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bXQtMCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm1sLTYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bWwtNCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bWItMCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm10LTIwIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiA1cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm1yLTAge1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm1sLWF1dG8ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmJsb2NrIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpmbGV4IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmdyaWQge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6aGlkZGVuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmgtZnVsbCB7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnctZnVsbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6dy0wIHtcXG5cXHRcXHR3aWR0aDogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnctMVxcXFwvMiB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDptYXgtdy03eGwge1xcblxcdFxcdG1heC13aWR0aDogODByZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6bWF4LXctbm9uZSB7XFxuXFx0XFx0bWF4LXdpZHRoOiBub25lO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm1heC13LWxnIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDMycmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOm1heC13LTN4bCB7XFxuXFx0XFx0bWF4LXdpZHRoOiA0OHJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpmbGV4LTEge1xcblxcdFxcdGZsZXg6IDEgMSAwJTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpmbGV4LXNocmluay0wIHtcXG5cXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpmbGV4LWdyb3ctMCB7XFxuXFx0XFx0ZmxleC1ncm93OiAwO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOi10cmFuc2xhdGUteC0xXFxcXC8yIHtcXG5cXHRcXHQtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xcblxcdFxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpncmlkLWNvbHMtMiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmdyaWQtY29scy0zIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6Z3JpZC1jb2xzLTEyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmdyaWQtY29scy0xMCB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpncmlkLWNvbHMtNCB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOml0ZW1zLWNlbnRlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpqdXN0aWZ5LXN0YXJ0IHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6anVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6Z2FwLTgge1xcblxcdFxcdGdyaWQtZ2FwOiAycmVtO1xcblxcdFxcdGdhcDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpnYXAteC04IHtcXG5cXHRcXHRncmlkLWNvbHVtbi1nYXA6IDJyZW07XFxuXFx0XFx0LW1vei1jb2x1bW4tZ2FwOiAycmVtO1xcblxcdFxcdCAgICAgY29sdW1uLWdhcDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpnYXAteC0zMiB7XFxuXFx0XFx0Z3JpZC1jb2x1bW4tZ2FwOiA4cmVtO1xcblxcdFxcdC1tb3otY29sdW1uLWdhcDogOHJlbTtcXG5cXHRcXHQgICAgIGNvbHVtbi1nYXA6IDhyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6c2VsZi1zdGFydCB7XFxuXFx0XFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpzZWxmLWVuZCB7XFxuXFx0XFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6c2VsZi1jZW50ZXIge1xcblxcdFxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpzZWxmLXN0cmV0Y2gge1xcblxcdFxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6b3ZlcmZsb3ctaGlkZGVuIHtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnJvdW5kZWQtM3hsIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6YmctdHJhbnNwYXJlbnQge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnAtMCB7XFxuXFx0XFx0cGFkZGluZzogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB4LTgge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB4LTAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMHB4O1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDBweDtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpweS0yNCB7XFxuXFx0XFx0cGFkZGluZy10b3A6IDZyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDZyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6cHktMzIge1xcblxcdFxcdHBhZGRpbmctdG9wOiA4cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA4cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB5LTIwIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogNXJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpweS0xNiB7XFxuXFx0XFx0cGFkZGluZy10b3A6IDRyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6cHgtMjAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogNXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB5LTQ4IHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMTJyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDEycmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB0LTgge1xcblxcdFxcdHBhZGRpbmctdG9wOiAycmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnBiLTE0IHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnB0LTMyIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogOHJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpwYi0wIHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnBsLTgge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpwdC0xNiB7XFxuXFx0XFx0cGFkZGluZy10b3A6IDRyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6cHItNCB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDpwbC00IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6cGItMjgge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA3cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnBsLTEwIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDp0ZXh0LWxlZnQge1xcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6dGV4dC1jZW50ZXIge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDp0ZXh0LXNtIHtcXG5cXHRcXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXHJcXG5cXHQubGdcXFxcOnRleHQtbGcge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6dGV4dC02eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogMi43NXJlbTtcXG5cXHR9XFxyXFxuXFx0LmxnXFxcXDp0ZXh0LTV4bCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0fVxcclxcblxcdC5sZ1xcXFw6dGV4dC04eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogNi4yNXJlbTtcXG5cXHR9XFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG5cXHQueGxcXFxcOmJvdHRvbS1hdXRvIHtcXG5cXHRcXHRib3R0b206IGF1dG87XFxuXFx0fVxcclxcblxcdC54bFxcXFw6dG9wLTAge1xcblxcdFxcdHRvcDogMHB4O1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOmNvbC1zcGFuLTEge1xcblxcdFxcdGdyaWQtY29sdW1uOiBzcGFuIDEgLyBzcGFuIDE7XFxuXFx0fVxcclxcblxcdC54bFxcXFw6Y29sLXNwYW4tMiB7XFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDpjb2wtc3Bhbi0zIHtcXG5cXHRcXHRncmlkLWNvbHVtbjogc3BhbiAzIC8gc3BhbiAzO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOm10LTAge1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDptdC0yOCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogN3JlbTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDppbmxpbmUge1xcblxcdFxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDpncmlkIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOnRyYW5zbGF0ZS15LTAge1xcblxcdFxcdC0tdHctdHJhbnNsYXRlLXk6IDBweDtcXG5cXHRcXHR0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxuXFx0fVxcclxcblxcdC54bFxcXFw6LXRyYW5zbGF0ZS15LTFcXFxcLzIge1xcblxcdFxcdC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XFxuXFx0XFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOmdyaWQtY29scy0zIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuXFx0fVxcclxcblxcdC54bFxcXFw6Z3JpZC1jb2xzLTQge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDpnYXAtOCB7XFxuXFx0XFx0Z3JpZC1nYXA6IDJyZW07XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOmdhcC14LTgge1xcblxcdFxcdGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXG5cXHRcXHQtbW96LWNvbHVtbi1nYXA6IDJyZW07XFxuXFx0XFx0ICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOnBiLTMyIHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogOHJlbTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDpwci0xNiB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogNHJlbTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDp0ZXh0LWNlbnRlciB7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXHJcXG5cXHQueGxcXFxcOnRleHQtYmFzZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuXFx0fVxcclxcblxcdC54bFxcXFw6dGV4dC02eGwge1xcblxcdFxcdGZvbnQtc2l6ZTogMi43NXJlbTtcXG5cXHR9XFxyXFxuXFx0LnhsXFxcXDp0ZXh0LXhsIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2luZGV4LmNzc1wiLFwid2VicGFjazovL3N0eWxlcy8lM0NpbnB1dCUyMGNzcyUyME9aVmtqXyUzRVwiLFwid2VicGFjazovL3N0eWxlcy8lM0NpbnB1dCUyMGNzcyUyMDR3ekhXYiUzRVwiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQTBCO0FBQzFCLGtFQUFjO0FBQWQsOEZBQWM7QUFBZDs7O0NBQWM7QUFBZDs7Q0FBYztBQUFkOzs7Q0NhQyxzQkFBc0I7QURiVDtBQUFkOztDQUFjO0FBQWQ7Q0NxQkMsZ0JBQWdCO0NBQ2hCLGNBQVc7SUFBWCxXQUFXO0FEdEJFO0FBQWQ7OztDQUFjO0FBQWQ7Q0MrQkMsaUJBQWlCLEVBQUUsTUFBTTtDQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FEaEN6QjtBQUFkOzs7Q0FBYztBQUFkOztDQUFjO0FBQWQ7Q0M2Q0MsU0FBUztBRDdDSTtBQUFkOztDQUFjO0FBQWQ7Q0NxREM7Ozs7Ozs7O2tCQVNpQjtBRDlESjtBQUFkOzs7Q0FBYztBQUFkOzs7Q0FBYztBQUFkO0NDNEVDLFNBQVMsRUFBRSxNQUFNO0NBQ2pC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QUFBO0FIUW1CO0FBQW5CO0NHUkEsa0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxtQkFBQTtBSFFtQjtBQUFuQjtDR1JBLGtCQUFBO0FIUW1CO0FBQW5CO0NHUkEsaUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxrQkFBQTtBSFFtQjtBQUFuQjtDR1JBLGtCQUFBO0FIUW1CO0FBQW5CO0NHUkEsZ0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxxQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsZ0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxvQkFBQTtBSFFtQjtBQUFuQjtDR1JBLHNCQUFBO0FIUW1CO0FBQW5CO0NHUkEsbUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxnQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsZ0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxtQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG9CQUFBO0FIUW1CO0FBQW5CO0NHUkEsc0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxpQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsaUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxtQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG9CQUFBO0FIUW1CO0FBQW5CO0NHUkEsbUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxzQkFBQTtBSFFtQjtBQUFuQjtDR1JBLHFCQUFBO0FIUW1CO0FBQW5CO0NHUkEscUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxvQkFBQTtBSFFtQjtBQUFuQjtDR1JBLHNCQUFBO0FIUW1CO0FBQW5CO0NHUkEscUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxxQkFBQTtBSFFtQjtBQUFuQjtDR1JBLHFCQUFBO0FIUW1CO0FBQW5CO0NHUkEsbUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxzQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsbUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxpQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsbUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxrQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG9CQUFBO0FIUW1CO0FBQW5CO0NHUkEsaUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxnQkFBQTtBSFFtQjtBQUFuQjtDR1JBLG1CQUFBO0FIUW1CO0FBQW5CO0NHUkEsY0FBQTtBSFFtQjtBQUFuQjtDR1JBLHlCQUFBO0FIUW1CO0FBQW5CO0NHUkEscUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxhQUFBO0FIUW1CO0FBQW5CO0NHUkEsb0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxjQUFBO0FIUW1CO0FBQW5CO0NHUkEsa0JBQUE7QUhRbUI7QUFBbkI7Q0dSQSxhQUFBO0FIUW1CO0FBQW5CO0NHUkEsaUJBQUE7QUhRbUI7QUFBbkI7Q0dSQSxhQUFBO0FIUW1CO0FBQW5CO0NHUkEsY0FBQTtBSFFtQjtBQUFuQjtDR1JBLGNBQUE7QUhRbUI7QUFBbkI7Q0dSQSxZQUFBO0FIUW1CO0FBQW5CO0NHUkEsYUFBQTtBSFFtQjtBQUFuQjtDR1JBLFlBQUE7QUhRbUI7QUFBbkI7Q0dSQSxlQUFBO0FIUW1CO0FBQW5CO0NHUkEsV0FBQTtBSFFtQjtBQUFuQjtDR1JBLFlBQUE7QUhRbUI7QUFBbkI7Q0dSQSxhQUFBO0FIUW1CO0FBQW5CO0NHUkEsYUFBQTtBSFFtQjtBQUFuQjtDR1JBLGVBQUE7QUhRbUI7QUFBbkI7Q0dSQSxZQUFBO0FIUW1CO0FBQW5CO0NHUkEsWUFBQTtBSFFtQjtBQUFuQjtDR1JBLGFBQUE7QUhRbUI7QUFBbkI7Q0dSQSxpQkFBQTtBSFFtQjtBQUFuQjtDR1JBLFdBQUE7QUhRbUI7QUFBbkI7Q0dSQSxhQUFBO0FIUW1CO0FBQW5CO0NHUkEsV0FBQTtBSFFtQjtBQUFuQjtDR1JBLGNBQUE7QUhRbUI7QUFBbkI7Q0dSQSxXQUFBO0FIUW1CO0FBQW5CO0NHUkEsYUFBQTtBSFFtQjtBQUFuQjtDR1JBLFdBQUE7QUhRbUI7QUFBbkI7Q0dSQSxXQUFBO0FIUW1CO0FBQW5CO0NHUkEsWUFBQTtBSFFtQjtB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cEdEO0VBQUEsYUFBQTtDSG9wR0M7Q0dwcEdEO0VBQUEscUJBQUE7RUFBQSw4QkFBQTtDSHdwR0M7Q0d4cEdEO0VBQUEsc0JBQUE7RUFBQSw4QkFBQTtDSDRwR0M7Q0c1cEdEO0VBQUEsZ0RBQUE7Q0grcEdDO0NHL3BHRDtFQUFBLGdEQUFBO0NIa3FHQztDR2xxR0Q7RUFBQSxjQUFBO0VBQUEsU0FBQTtDSHNxR0M7Q0d0cUdEO0VBQUEscUJBQUE7RUFBQSxxQkFBQTtPQUFBLGdCQUFBO0NIMnFHQztDRzNxR0Q7RUFBQSxvQkFBQTtDSDhxR0M7Q0c5cUdEO0VBQUEsbUJBQUE7Q0hpckdDO0NHanJHRDtFQUFBLGtCQUFBO0NIb3JHQztDR3ByR0Q7RUFBQSxlQUFBO0VBQUEsbUJBQUE7Q0h3ckdDO0NHeHJHRDtFQUFBLGtCQUFBO0NIMnJHQztDRzNyR0Q7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0NIK3JHQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHB1cmdlY3NzIHN0YXJ0IGlnbm9yZSAqL1xcclxcbkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbmFydGljbGUgYSB7XFxyXFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgMTgyKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4vKiBwdXJnZWNzcyBlbmQgaWdub3JlICovXFxyXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXHJcXG5cIixcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIixcIi8qKlxcbiAqIE1hbnVhbGx5IGZvcmtlZCBmcm9tIFNVSVQgQ1NTIEJhc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2VcXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcXG4gKiBzdWl0YWJsZSBmb3Igd2ViIGFwcGxpY2F0aW9ucy5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuICovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5ICh3aXRoIFRhaWx3aW5kJ3MgZGVmYXVsdFxcbiAqICAgIHNhbnMtc2VyaWYgZm9udCBzdGFjayBhcyBhIGZhbGxiYWNrKSBhcyBhIHNhbmUgZGVmYXVsdC5cXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFxcXCJub3JtYWxcXFwiIGxpbmUtaGVpZ2h0IHNvIHRoZSB1c2VyIGlzbid0IGZvcmNlZFxcbiAqICAgIHRvIG92ZXJyaWRlIGl0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBldmVuIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgdGhlbWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjYTFhMWFhKTtcXG59XFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKlxcbiAqIE92ZXJyaWRlIGxlZ2FjeSBmb2N1cyByZXNldCBmcm9tIE5vcm1hbGl6ZSB3aXRoIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlcy5cXG4gKlxcbiAqIFRoaXMgaXMgYWN0dWFsbHkgYW4gaW1wcm92ZW1lbnQgb3ZlciB0aGUgbmV3IGRlZmF1bHRzIGluIEZpcmVmb3ggaW4gb3VyIHRlc3RpbmcsXFxuICogYXMgaXQgdHJpZ2dlcnMgdGhlIGJldHRlciBmb2N1cyBzdHlsZXMgZXZlbiBmb3IgbGlua3MsIHdoaWNoIHN0aWxsIHVzZSBhIGRvdHRlZFxcbiAqIG91dGxpbmUgaW4gRmlyZWZveCBieSBkZWZhdWx0LlxcbiAqL1xcbiBcXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IGF1dG87XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXG5cXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59Il0sIm5hbWVzIjpbInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiLCJQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsIk5FWFRfUFVCTElDX0hPU1QiLCJldmVudHMiLCJvbiIsIm9mZiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9