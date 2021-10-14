"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./lib/sanity-auth.js":
/*!****************************!*\
  !*** ./lib/sanity-auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "t3p5d5xy",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: 'v1',
  useCdn: false
});

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth-sanity */ "next-auth-sanity");
/* harmony import */ var next_auth_sanity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_sanity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_sanity_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/sanity-auth */ "./lib/sanity-auth.js");





const options = {
  providers: [(0,next_auth_sanity__WEBPACK_IMPORTED_MODULE_3__.SanityCredentials)(_lib_sanity_auth__WEBPACK_IMPORTED_MODULE_4__.client) // only if you use sign in with credentials
  ],
  session: {
    jwt: true
  },
  adapter: (0,next_auth_sanity__WEBPACK_IMPORTED_MODULE_3__.SanityAdapter)(_lib_sanity_auth__WEBPACK_IMPORTED_MODULE_4__.client),
  pages: {
    error: '/login-failed',
    // Error code passed in query string as ?error=
    signIn: '/login'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth-sanity":
/*!***********************************!*\
  !*** external "next-auth-sanity" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth-sanity");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxNQUFNLEdBQUdELHFEQUFZLENBQUM7QUFDakNFLEVBQUFBLFNBQVMsRUFBRUMsVUFEc0I7QUFFakNHLEVBQUFBLE9BQU8sRUFBRUgsWUFGd0I7QUFHakNLLEVBQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLGdCQUhjO0FBSWpDQyxFQUFBQSxVQUFVLEVBQUUsSUFKcUI7QUFLakNDLEVBQUFBLE1BQU07QUFMMkIsQ0FBRCxDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTVEsT0FBTyxHQUFHO0FBQ2RDLEVBQUFBLFNBQVMsRUFBRSxDQUNURixtRUFBaUIsQ0FBQ2pCLG9EQUFELENBRFIsQ0FDa0I7QUFEbEIsR0FERztBQUlkb0IsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEdBQUcsRUFBRTtBQURFLEdBSks7QUFPZEMsRUFBQUEsT0FBTyxFQUFFTiwrREFBYSxDQUFDaEIsb0RBQUQsQ0FQUjtBQVFkdUIsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRSxlQURGO0FBQ21CO0FBQ3hCQyxJQUFBQSxNQUFNLEVBQUU7QUFGSDtBQVJPLENBQWhCO0FBY0EsaUVBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNoQixnREFBUSxDQUFDZSxHQUFELEVBQU1DLEdBQU4sRUFBV1QsT0FBWCxDQUFyQzs7Ozs7Ozs7OztBQ3BCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY21zLXNhbml0eS8uL2xpYi9zYW5pdHktYXV0aC5qcyIsIndlYnBhY2s6Ly9jbXMtc2FuaXR5Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly9jbXMtc2FuaXR5L2V4dGVybmFsIFwiQHNhbml0eS9jbGllbnRcIiIsIndlYnBhY2s6Ly9jbXMtc2FuaXR5L2V4dGVybmFsIFwibmV4dFwiIiwid2VicGFjazovL2Ntcy1zYW5pdHkvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly9jbXMtc2FuaXR5L2V4dGVybmFsIFwibmV4dC1hdXRoLXNhbml0eVwiIiwid2VicGFjazovL2Ntcy1zYW5pdHkvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VULFxyXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxyXG4gIGFwaVZlcnNpb246ICd2MScsXHJcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn0pOyIsImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IFNhbml0eUFkYXB0ZXIsIFNhbml0eUNyZWRlbnRpYWxzIH0gZnJvbSAnbmV4dC1hdXRoLXNhbml0eSc7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zYW5pdHktYXV0aCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU2FuaXR5Q3JlZGVudGlhbHMoY2xpZW50KSwgLy8gb25seSBpZiB5b3UgdXNlIHNpZ24gaW4gd2l0aCBjcmVkZW50aWFsc1xyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgand0OiB0cnVlLFxyXG4gIH0sXHJcbiAgYWRhcHRlcjogU2FuaXR5QWRhcHRlcihjbGllbnQpLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBlcnJvcjogJy9sb2dpbi1mYWlsZWQnLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxyXG4gICAgc2lnbkluOiAnL2xvZ2luJyxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoLXNhbml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJkYXRhc2V0IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJ0b2tlbiIsIlNBTklUWV9BUElfVE9LRU4iLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwiTmV4dEF1dGgiLCJOZXh0QXV0aE9wdGlvbnMiLCJQcm92aWRlcnMiLCJOZXh0QXBpUmVxdWVzdCIsIk5leHRBcGlSZXNwb25zZSIsIlNhbml0eUFkYXB0ZXIiLCJTYW5pdHlDcmVkZW50aWFscyIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJzZXNzaW9uIiwiand0IiwiYWRhcHRlciIsInBhZ2VzIiwiZXJyb3IiLCJzaWduSW4iLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9