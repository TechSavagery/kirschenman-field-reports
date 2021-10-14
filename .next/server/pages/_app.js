(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageview": () => (/* binding */ pageview),
/* harmony export */   "event": () => (/* binding */ event)
/* harmony export */ });
const pageview = url => {
  if (window && window.gtag) {
    window.gtag('config', "G-ZQTGWSMZTN", {
      page_path: url
    });
  }
}; // log specific events happening.

const event = ({
  action,
  params
}) => {
  if (window && window.gtag) {
    window.gtag('event', action, params);
  }
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ga */ "./lib/ga/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\accou\\Desktop\\kirschenman-field-reports\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleRouteChange = url => {
      _lib_ga__WEBPACK_IMPORTED_MODULE_4__.pageview(url);
    };

    if (process.env.NEXT_PUBLIC_HOST === 'production') {
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on('routeChangeComplete', handleRouteChange); // If the component is unmounted, unsubscribe
      // from the event with the `off` method

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUMvQixNQUFJQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsSUFBckIsRUFBMkI7QUFDekJELElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JDLGNBQXRCLEVBQWdFO0FBQzlERyxNQUFBQSxTQUFTLEVBQUVOO0FBRG1ELEtBQWhFO0FBR0Q7QUFDRixDQU5NLEVBUVA7O0FBQ08sTUFBTU8sS0FBSyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVQyxFQUFBQTtBQUFWLENBQUQsS0FBd0I7QUFDM0MsTUFBSVIsTUFBTSxJQUFJQSxNQUFNLENBQUNDLElBQXJCLEVBQTJCO0FBQ3pCRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLEVBQXFCTSxNQUFyQixFQUE2QkMsTUFBN0I7QUFDRDtBQUNGLENBSk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTyxpQkFBaUIsR0FBSWxCLEdBQUQsSUFBUztBQUNqQ2EsTUFBQUEsNkNBQUEsQ0FBWWIsR0FBWjtBQUNELEtBRkQ7O0FBR0EsUUFBSUcsT0FBTyxDQUFDQyxHQUFSLENBQVllLGdCQUFaLEtBQWlDLFlBQXJDLEVBQW1EO0FBQ2pEO0FBQ0E7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDSCxpQkFBeEMsRUFIaUQsQ0FLakQ7QUFDQTs7QUFDQSxhQUFPLE1BQU07QUFDWEQsUUFBQUEsTUFBTSxDQUFDRyxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDSixpQkFBekM7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWZRLEVBZU4sQ0FBQ0QsTUFBTSxDQUFDRyxNQUFSLENBZk0sQ0FBVDtBQWdCQSxzQkFDRSw4REFBQyxzREFBRDtBQUFVLFdBQU8sRUFBRUosU0FBUyxDQUFDTyxPQUE3QjtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVQLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVoQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXMtc2FuaXR5Ly4vbGliL2dhL2luZGV4LmpzIiwid2VicGFjazovL2Ntcy1zYW5pdHkvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Ntcy1zYW5pdHkvLi9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2Ntcy1zYW5pdHkvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vY21zLXNhbml0eS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY21zLXNhbml0eS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY21zLXNhbml0eS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcclxuICBpZiAod2luZG93ICYmIHdpbmRvdy5ndGFnKSB7XHJcbiAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUywge1xyXG4gICAgICBwYWdlX3BhdGg6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGxvZyBzcGVjaWZpYyBldmVudHMgaGFwcGVuaW5nLlxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuZ3RhZykge1xyXG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2xpYi9nYSc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBnYS5wYWdldmlldyh1cmwpO1xyXG4gICAgfTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgLy9XaGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc3Vic2NyaWJlIHRvIHJvdXRlciBjaGFuZ2VzXHJcbiAgICAgIC8vYW5kIGxvZyB0aG9zZSBwYWdlIHZpZXdzXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gICAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdW5zdWJzY3JpYmVcclxuICAgICAgLy8gZnJvbSB0aGUgZXZlbnQgd2l0aCB0aGUgYG9mZmAgbWV0aG9kXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiLCJQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsIk5FWFRfUFVCTElDX0hPU1QiLCJldmVudHMiLCJvbiIsIm9mZiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9