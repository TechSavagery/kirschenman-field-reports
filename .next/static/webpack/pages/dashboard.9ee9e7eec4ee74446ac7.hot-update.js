"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/password-protect.js":
/*!****************************************!*\
  !*** ./components/password-protect.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PasswordProtect; }
/* harmony export */ });
/* harmony import */ var C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ga */ "./lib/ga/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\accou\\Desktop\\kirschenman-field-reports\\components\\password-protect.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var navigation = [{
  name: 'Features',
  href: '#features'
}, {
  name: 'Contact',
  href: '#'
}, {
  name: 'Reports',
  href: '/dashboard'
}];
var footerNavigation = {
  reports: [{
    name: 'Grapes',
    href: '/dashboard/grapes'
  }, {
    name: 'Potato',
    href: ''
  }, {
    name: 'Watermelon',
    href: '#'
  }, {
    name: 'Stone Fruits',
    href: '#'
  }],
  company: [{
    name: 'About Us',
    href: 'https://www.kirschenman.com/about'
  }, {
    name: 'Website',
    href: 'https://www.kirschenman.com/'
  }, {
    name: 'Blog',
    href: 'https://www.kirschenman.com/category/current-trends/'
  }, {
    name: 'Email: info@keiproduce.com',
    href: 'mailto:info@keiproduce.com'
  }, {
    name: 'Phone: (661)201-7744',
    href: 'tel:661-201-7744'
  }, {
    name: 'Locations',
    href: 'https://www.kirschenman.com/contact/'
  }],
  produceInfo: [{
    name: 'Grapes',
    href: 'https://www.kirschenman.com/products/grapes/'
  }, {
    name: 'Stone Fruits',
    href: 'https://www.kirschenman.com/products/stone-fruits/'
  }, {
    name: 'Watermelon',
    href: 'https://www.kirschenman.com/products/watermelons/'
  }, {
    name: 'Potato',
    href: 'https://www.kirschenman.com/products/potatoes/'
  }],
  social: [{
    name: 'Facebook',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this);
    }
  }, {
    name: 'Instagram',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this);
    }
  }]
};
function PasswordProtect(_ref) {
  var _this2 = this;

  var allPosts = _ref.allPosts,
      preview = _ref.preview;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover, {
        as: "header",
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "bg-gray-900 pt-6 pb-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
            className: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6",
            "aria-label": "Global",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "flex items-center flex-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "flex items-center justify-between w-full md:w-auto",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                  href: "/",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "sr-only",
                    children: "Workflow"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    className: "",
                    src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                    alt: "",
                    style: {
                      height: '100px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "-mr-2 flex items-center md:hidden",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Button, {
                    className: "bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                      className: "sr-only",
                      children: "Open main menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "hidden space-x-8 md:flex md:ml-10",
                children: navigation.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                    href: item.href,
                    className: "text-base font-medium text-white hover:text-gray-300",
                    children: item.name
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "hidden md:flex md:items-center md:space-x-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                href: "#",
                className: "text-base font-medium text-white hover:text-gray-300",
                children: "Contact Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                href: "/dashboard",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
          as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "duration-100 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Panel, {
            focus: true,
            className: "z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "px-5 pt-4 flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    className: "",
                    src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                    alt: "",
                    style: {
                      height: '100px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "-mr-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Button, {
                    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                      className: "sr-only",
                      children: "Close menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "pt-5 pb-6",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "px-2 space-y-1",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                      href: item.href,
                      className: "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50",
                      children: item.name
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "mt-6 px-5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                    href: "/dashboard",
                    className: "block text-center w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium",
                    children: "Dashboard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "relative py-16 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "lg:grid lg:grid-cols-12",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      className: "object-cover object-center rounded-3xl shadow-2xl",
                      src: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "relative bg-gray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "hidden absolute inset-0 overflow-hidden rounded-3xl lg:block",
                  "aria-hidden": "true",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
                    className: "absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0",
                    width: 404,
                    height: 384,
                    fill: "none",
                    viewBox: "0 0 404 384",
                    "aria-hidden": "true",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("defs", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("pattern", {
                        id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20,
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("rect", {
                          x: 0,
                          y: 0,
                          width: 4,
                          height: 4,
                          className: "text-gray-900",
                          fill: "currentColor"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("rect", {
                      width: 404,
                      height: 384,
                      fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
                    className: "absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2",
                    width: 404,
                    height: 384,
                    fill: "none",
                    viewBox: "0 0 404 384",
                    "aria-hidden": "true",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("defs", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("pattern", {
                        id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20,
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("rect", {
                          x: 0,
                          y: 0,
                          width: 4,
                          height: 4,
                          className: "text-gray-900",
                          fill: "currentColor"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 280,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("rect", {
                      width: 404,
                      height: 384,
                      fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
                    className: "text-3xl font-extrabold text-white",
                    id: "join-heading",
                    children: "Explore our Field Data"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                    className: "text-lg text-white",
                    children: "If you have been granted access, please click the \"Login\" button to enter your info. If you would like to be granted access to our report data, please click the \"Join\" button below!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    "class": "flex space-x-4",
                    children: [' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                      id: "login-button",
                      href: "#",
                      className: "block w-full py-3 lg:px-20 sm:px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto",
                      onClick: function onClick(e) {
                        e.preventDefault();
                        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)();
                      },
                      children: "Login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                      onClick: function onClick() {
                        _lib_ga__WEBPACK_IMPORTED_MODULE_4__.event({
                          action: 'join-request',
                          params: {}
                        });
                      },
                      className: "block w-full py-3 lg:px-20 sm:px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto",
                      href: "mailto:info@keiproduce.com?subject=Request%20for%20KEI%20Field%20Report%20Access&body=Hello%20KEI%20Staff%2C%0A%0AI%20would%20like%20access%20to%20the%20KEI%20Field%20Report%20Data.%20Here%20is%20my%20info%20below%3A%0A%0AName%3A%20%0ACompany%3A%0AEmail%3A%0APhone%3A%0A",
                      children: "Join"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
        className: "bg-gray-50",
        "aria-labelledby": "footer-heading",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
          id: "footer-heading",
          className: "sr-only",
          children: "Footer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "xl:grid xl:grid-cols-3 xl:gap-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "space-y-8 xl:col-span-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                className: "",
                src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                alt: "",
                style: {
                  height: '75px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                className: "text-gray-500 text-base",
                children: "Leverage our daily produce data to empower your business decision."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "flex space-x-6",
                children: footerNavigation.social.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                    href: item.href,
                    className: "text-gray-400 hover:text-gray-500",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                      className: "sr-only",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 366,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(item.icon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 367,
                      columnNumber: 23
                    }, _this2)]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "md:grid md:grid-cols-2 md:gap-8",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Reports"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.reports.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 381,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 380,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "mt-12 md:mt-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 392,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.company.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 398,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 397,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "md:grid md:grid-cols-2 md:gap-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Produce Info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 411,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.produceInfo.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 417,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 416,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 414,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mt-12 border-t border-gray-200 py-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "text-base text-gray-400 xl:text-center",
              children: ["\xA9 ", new Date().getFullYear(), " Kirschenman Enterprises, Inc."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
_c = PasswordProtect;

var _c;

$RefreshReg$(_c, "PasswordProtect");

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

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjllZTllN2VlYzRlZTc0NDQ2YWM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBOztBQUVBLElBQU1jLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUUsVUFBUjtBQUFvQkMsRUFBQUEsSUFBSSxFQUFFO0FBQTFCLENBRGlCLEVBRWpCO0FBQUVELEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FGaUIsRUFHakI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLEVBQUFBLElBQUksRUFBRTtBQUF6QixDQUhpQixDQUFuQjtBQU1BLElBQU1DLGdCQUFnQixHQUFHO0FBQ3ZCQyxFQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFSCxJQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsSUFBQUEsSUFBSSxFQUFFO0FBQXhCLEdBRE8sRUFFUDtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsSUFBQUEsSUFBSSxFQUFFO0FBQXhCLEdBRk8sRUFHUDtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsWUFBUjtBQUFzQkMsSUFBQUEsSUFBSSxFQUFFO0FBQTVCLEdBSE8sRUFJUDtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsY0FBUjtBQUF3QkMsSUFBQUEsSUFBSSxFQUFFO0FBQTlCLEdBSk8sQ0FEYztBQU92QkcsRUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFBRUosSUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0JDLElBQUFBLElBQUksRUFBRTtBQUExQixHQURPLEVBRVA7QUFBRUQsSUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLElBQUFBLElBQUksRUFBRTtBQUF6QixHQUZPLEVBR1A7QUFDRUQsSUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUMsSUFBQUEsSUFBSSxFQUFFO0FBRlIsR0FITyxFQU9QO0FBQUVELElBQUFBLElBQUksRUFBRSw0QkFBUjtBQUFzQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQTVDLEdBUE8sRUFRUDtBQUFFRCxJQUFBQSxJQUFJLEVBQUUsc0JBQVI7QUFBZ0NDLElBQUFBLElBQUksRUFBRTtBQUF0QyxHQVJPLEVBU1A7QUFBRUQsSUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUJDLElBQUFBLElBQUksRUFBRTtBQUEzQixHQVRPLENBUGM7QUFrQnZCSSxFQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFTCxJQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxJQUFBQSxJQUFJLEVBQUU7QUFGUixHQURXLEVBS1g7QUFDRUQsSUFBQUEsSUFBSSxFQUFFLGNBRFI7QUFFRUMsSUFBQUEsSUFBSSxFQUFFO0FBRlIsR0FMVyxFQVNYO0FBQ0VELElBQUFBLElBQUksRUFBRSxZQURSO0FBRUVDLElBQUFBLElBQUksRUFBRTtBQUZSLEdBVFcsRUFhWDtBQUNFRCxJQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxJQUFBQSxJQUFJLEVBQUU7QUFGUixHQWJXLENBbEJVO0FBb0N2QkssRUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRU4sSUFBQUEsSUFBSSxFQUFFLFVBRFI7QUFFRUMsSUFBQUEsSUFBSSxFQUFFLEdBRlI7QUFHRU0sSUFBQUEsSUFBSSxFQUFFLGNBQUNDLEtBQUQ7QUFBQSwwQkFDSjtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGVBQU8sRUFBQztBQUFqQyxTQUFpREEsS0FBakQ7QUFBQSwrQkFDRTtBQUNFLGtCQUFRLEVBQUMsU0FEWDtBQUVFLFdBQUMsRUFBQyx3UUFGSjtBQUdFLGtCQUFRLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJO0FBQUE7QUFIUixHQURNLEVBY047QUFDRVIsSUFBQUEsSUFBSSxFQUFFLFdBRFI7QUFFRUMsSUFBQUEsSUFBSSxFQUFFLEdBRlI7QUFHRU0sSUFBQUEsSUFBSSxFQUFFLGNBQUNDLEtBQUQ7QUFBQSwwQkFDSjtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGVBQU8sRUFBQztBQUFqQyxTQUFpREEsS0FBakQ7QUFBQSwrQkFDRTtBQUNFLGtCQUFRLEVBQUMsU0FEWDtBQUVFLFdBQUMsRUFBQyw2akRBRko7QUFHRSxrQkFBUSxFQUFDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESTtBQUFBO0FBSFIsR0FkTTtBQXBDZSxDQUF6QjtBQWtFZSxTQUFTQyxlQUFULE9BQWdEO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM3RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFTLFVBQUUsRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsVUFBL0I7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUMsMkVBRFo7QUFFRSwwQkFBVyxRQUZiO0FBQUEsb0NBSUU7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLG9EQUFmO0FBQUEsd0NBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSwwQ0FDRTtBQUFNLDZCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUNFLDZCQUFTLEVBQUMsRUFEWjtBQUVFLHVCQUFHLEVBQUMsMkVBRk47QUFHRSx1QkFBRyxFQUFDLEVBSE47QUFJRSx5QkFBSyxFQUFFO0FBQUVDLHNCQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBVUU7QUFBSywyQkFBUyxFQUFDLG1DQUFmO0FBQUEseUNBQ0UsOERBQUMsNkRBQUQ7QUFBZ0IsNkJBQVMsRUFBQyxzS0FBMUI7QUFBQSw0Q0FDRTtBQUFNLCtCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRSw4REFBQyw4REFBRDtBQUFVLCtCQUFTLEVBQUMsU0FBcEI7QUFBOEIscUNBQVk7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQWtCRTtBQUFLLHlCQUFTLEVBQUMsbUNBQWY7QUFBQSwwQkFDR2IsVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLHNDQUNkO0FBRUUsd0JBQUksRUFBRUEsSUFBSSxDQUFDYixJQUZiO0FBR0UsNkJBQVMsRUFBQyxzREFIWjtBQUFBLDhCQUtHYSxJQUFJLENBQUNkO0FBTFIscUJBQ09jLElBQUksQ0FBQ2QsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURjO0FBQUEsaUJBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFrQ0U7QUFBSyx1QkFBUyxFQUFDLDZDQUFmO0FBQUEsc0NBQ0U7QUFDRSxvQkFBSSxFQUFDLEdBRFA7QUFFRSx5QkFBUyxFQUFDLHNEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBT0U7QUFDRSxvQkFBSSxFQUFDLFlBRFA7QUFFRSx5QkFBUyxFQUFDLHdJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQXFERSw4REFBQyx5REFBRDtBQUNFLFlBQUUsRUFBRWYsMkNBRE47QUFFRSxlQUFLLEVBQUMsdUJBRlI7QUFHRSxtQkFBUyxFQUFDLG9CQUhaO0FBSUUsaUJBQU8sRUFBQyx1QkFKVjtBQUtFLGVBQUssRUFBQyxzQkFMUjtBQU1FLG1CQUFTLEVBQUMsdUJBTlo7QUFPRSxpQkFBTyxFQUFDLG9CQVBWO0FBQUEsaUNBU0UsOERBQUMsNERBQUQ7QUFDRSxpQkFBSyxNQURQO0FBRUUscUJBQVMsRUFBQyw2RUFGWjtBQUFBLG1DQUlFO0FBQUssdUJBQVMsRUFBQyxnRkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHdDQUNFO0FBQUEseUNBQ0U7QUFDRSw2QkFBUyxFQUFDLEVBRFo7QUFFRSx1QkFBRyxFQUFDLDJFQUZOO0FBR0UsdUJBQUcsRUFBQyxFQUhOO0FBSUUseUJBQUssRUFBRTtBQUFFMkIsc0JBQUFBLE1BQU0sRUFBRTtBQUFWO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFTRTtBQUFLLDJCQUFTLEVBQUMsT0FBZjtBQUFBLHlDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLDZCQUFTLEVBQUMsa0tBQTFCO0FBQUEsNENBQ0U7QUFBTSwrQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBTywrQkFBUyxFQUFDLFNBQWpCO0FBQTJCLHFDQUFZO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFpQkU7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDR2IsVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLHdDQUNkO0FBRUUsMEJBQUksRUFBRUEsSUFBSSxDQUFDYixJQUZiO0FBR0UsK0JBQVMsRUFBQyxpRkFIWjtBQUFBLGdDQUtHYSxJQUFJLENBQUNkO0FBTFIsdUJBQ09jLElBQUksQ0FBQ2QsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURjO0FBQUEsbUJBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBWUU7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSx5Q0FDRTtBQUNFLHdCQUFJLEVBQUMsWUFEUDtBQUVFLDZCQUFTLEVBQUMscUZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBNkdFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsa0NBQ0U7QUFDRSxxQkFBUyxFQUFDLDJEQURaO0FBRUUsMkJBQVk7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFDLHlEQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHlCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLHNGQUFmO0FBQUEsd0NBQ0U7QUFDRSwyQkFBUyxFQUFDLCtDQURaO0FBRUUsaUNBQVk7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBS0U7QUFBSywyQkFBUyxFQUFDLGlFQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLGtFQUFmO0FBQUEsMkNBQ0U7QUFDRSwrQkFBUyxFQUFDLG1EQURaO0FBRUUseUJBQUcsRUFBQywrR0FGTjtBQUdFLHlCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBaUJFO0FBQUsseUJBQVMsRUFBQywwSEFBZjtBQUFBLHdDQUNFO0FBQ0UsMkJBQVMsRUFBQyw4REFEWjtBQUVFLGlDQUFZLE1BRmQ7QUFBQSwwQ0FJRTtBQUNFLDZCQUFTLEVBQUMsb0hBRFo7QUFFRSx5QkFBSyxFQUFFLEdBRlQ7QUFHRSwwQkFBTSxFQUFFLEdBSFY7QUFJRSx3QkFBSSxFQUFDLE1BSlA7QUFLRSwyQkFBTyxFQUFDLGFBTFY7QUFNRSxtQ0FBWSxNQU5kO0FBQUEsNENBUUU7QUFBQSw2Q0FDRTtBQUNFLDBCQUFFLEVBQUMsc0NBREw7QUFFRSx5QkFBQyxFQUFFLENBRkw7QUFHRSx5QkFBQyxFQUFFLENBSEw7QUFJRSw2QkFBSyxFQUFFLEVBSlQ7QUFLRSw4QkFBTSxFQUFFLEVBTFY7QUFNRSxvQ0FBWSxFQUFDLGdCQU5mO0FBQUEsK0NBUUU7QUFDRSwyQkFBQyxFQUFFLENBREw7QUFFRSwyQkFBQyxFQUFFLENBRkw7QUFHRSwrQkFBSyxFQUFFLENBSFQ7QUFJRSxnQ0FBTSxFQUFFLENBSlY7QUFLRSxtQ0FBUyxFQUFDLGVBTFo7QUFNRSw4QkFBSSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVJGLGVBMkJFO0FBQ0UsMkJBQUssRUFBRSxHQURUO0FBRUUsNEJBQU0sRUFBRSxHQUZWO0FBR0UsMEJBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixlQXFDRTtBQUNFLDZCQUFTLEVBQUMsbUZBRFo7QUFFRSx5QkFBSyxFQUFFLEdBRlQ7QUFHRSwwQkFBTSxFQUFFLEdBSFY7QUFJRSx3QkFBSSxFQUFDLE1BSlA7QUFLRSwyQkFBTyxFQUFDLGFBTFY7QUFNRSxtQ0FBWSxNQU5kO0FBQUEsNENBUUU7QUFBQSw2Q0FDRTtBQUNFLDBCQUFFLEVBQUMsc0NBREw7QUFFRSx5QkFBQyxFQUFFLENBRkw7QUFHRSx5QkFBQyxFQUFFLENBSEw7QUFJRSw2QkFBSyxFQUFFLEVBSlQ7QUFLRSw4QkFBTSxFQUFFLEVBTFY7QUFNRSxvQ0FBWSxFQUFDLGdCQU5mO0FBQUEsK0NBUUU7QUFDRSwyQkFBQyxFQUFFLENBREw7QUFFRSwyQkFBQyxFQUFFLENBRkw7QUFHRSwrQkFBSyxFQUFFLENBSFQ7QUFJRSxnQ0FBTSxFQUFFLENBSlY7QUFLRSxtQ0FBUyxFQUFDLGVBTFo7QUFNRSw4QkFBSSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVJGLGVBMkJFO0FBQ0UsMkJBQUssRUFBRSxHQURUO0FBRUUsNEJBQU0sRUFBRSxHQUZWO0FBR0UsMEJBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBd0VFO0FBQUssMkJBQVMsRUFBQyxnSUFBZjtBQUFBLDBDQUNFO0FBQ0UsNkJBQVMsRUFBQyxvQ0FEWjtBQUVFLHNCQUFFLEVBQUMsY0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQU9FO0FBQUcsNkJBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQRixlQWFFO0FBQUssNkJBQU0sZ0JBQVg7QUFBQSwrQkFDRyxHQURILGVBRUU7QUFDRSx3QkFBRSxFQUFDLGNBREw7QUFFRSwwQkFBSSxFQUFDLEdBRlA7QUFHRSwrQkFBUyxFQUFDLHVMQUhaO0FBSUUsNkJBQU8sRUFBRSxpQkFBQ2UsQ0FBRCxFQUFPO0FBQ2RBLHdCQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQW5CLHdCQUFBQSx3REFBTTtBQUNQLHVCQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLGVBYUU7QUFDRSw2QkFBTyxFQUFFLG1CQUFNO0FBQ2JDLHdCQUFBQSwwQ0FBQSxDQUFTO0FBQ1BvQiwwQkFBQUEsTUFBTSxFQUFFLGNBREQ7QUFFUEMsMEJBQUFBLE1BQU0sRUFBRTtBQUZELHlCQUFUO0FBSUQsdUJBTkg7QUFPRSwrQkFBUyxFQUFDLHVMQVBaO0FBUUUsMEJBQUksRUFBQyxnUkFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdHRixlQTBQRTtBQUFRLGlCQUFTLEVBQUMsWUFBbEI7QUFBK0IsMkJBQWdCLGdCQUEvQztBQUFBLGdDQUNFO0FBQUksWUFBRSxFQUFDLGdCQUFQO0FBQXdCLG1CQUFTLEVBQUMsU0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsbUVBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUNBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMseUJBQWY7QUFBQSxzQ0FDRTtBQUNFLHlCQUFTLEVBQUMsRUFEWjtBQUVFLG1CQUFHLEVBQUMsMkVBRk47QUFHRSxtQkFBRyxFQUFDLEVBSE47QUFJRSxxQkFBSyxFQUFFO0FBQUVQLGtCQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFPRTtBQUFHLHlCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwwQkFDR1YsZ0JBQWdCLENBQUNJLE1BQWpCLENBQXdCTyxHQUF4QixDQUE0QixVQUFDQyxJQUFEO0FBQUEsc0NBQzNCO0FBRUUsd0JBQUksRUFBRUEsSUFBSSxDQUFDYixJQUZiO0FBR0UsNkJBQVMsRUFBQyxtQ0FIWjtBQUFBLDRDQUtFO0FBQU0sK0JBQVMsRUFBQyxTQUFoQjtBQUFBLGdDQUEyQmEsSUFBSSxDQUFDZDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUxGLGVBTUUsOERBQUMsSUFBRCxDQUFNLElBQU47QUFBVywrQkFBUyxFQUFDLFNBQXJCO0FBQStCLHFDQUFZO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkY7QUFBQSxxQkFDT2MsSUFBSSxDQUFDZCxJQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRDJCO0FBQUEsaUJBQTVCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUF5QkU7QUFBSyx1QkFBUyxFQUFDLG9EQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLGlDQUFmO0FBQUEsd0NBQ0U7QUFBQSwwQ0FDRTtBQUFJLDZCQUFTLEVBQUMsOERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFJRTtBQUFJLHdCQUFJLEVBQUMsTUFBVDtBQUFnQiw2QkFBUyxFQUFDLGdCQUExQjtBQUFBLDhCQUNHRSxnQkFBZ0IsQ0FBQ0MsT0FBakIsQ0FBeUJVLEdBQXpCLENBQTZCLFVBQUNDLElBQUQ7QUFBQSwwQ0FDNUI7QUFBQSwrQ0FDRTtBQUNFLDhCQUFJLEVBQUVBLElBQUksQ0FBQ2IsSUFEYjtBQUVFLG1DQUFTLEVBQUMsNkNBRlo7QUFBQSxvQ0FJR2EsSUFBSSxDQUFDZDtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFBU2MsSUFBSSxDQUFDZCxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRDRCO0FBQUEscUJBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFrQkU7QUFBSywyQkFBUyxFQUFDLGVBQWY7QUFBQSwwQ0FDRTtBQUFJLDZCQUFTLEVBQUMsOERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFJRTtBQUFJLHdCQUFJLEVBQUMsTUFBVDtBQUFnQiw2QkFBUyxFQUFDLGdCQUExQjtBQUFBLDhCQUNHRSxnQkFBZ0IsQ0FBQ0UsT0FBakIsQ0FBeUJTLEdBQXpCLENBQTZCLFVBQUNDLElBQUQ7QUFBQSwwQ0FDNUI7QUFBQSwrQ0FDRTtBQUNFLDhCQUFJLEVBQUVBLElBQUksQ0FBQ2IsSUFEYjtBQUVFLG1DQUFTLEVBQUMsNkNBRlo7QUFBQSxvQ0FJR2EsSUFBSSxDQUFDZDtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFBU2MsSUFBSSxDQUFDZCxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRDRCO0FBQUEscUJBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQXFDRTtBQUFLLHlCQUFTLEVBQUMsaUNBQWY7QUFBQSx1Q0FDRTtBQUFBLDBDQUNFO0FBQUksNkJBQVMsRUFBQyw4REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUlFO0FBQUksd0JBQUksRUFBQyxNQUFUO0FBQWdCLDZCQUFTLEVBQUMsZ0JBQTFCO0FBQUEsOEJBQ0dFLGdCQUFnQixDQUFDRyxXQUFqQixDQUE2QlEsR0FBN0IsQ0FBaUMsVUFBQ0MsSUFBRDtBQUFBLDBDQUNoQztBQUFBLCtDQUNFO0FBQ0UsOEJBQUksRUFBRUEsSUFBSSxDQUFDYixJQURiO0FBRUUsbUNBQVMsRUFBQyw2Q0FGWjtBQUFBLG9DQUlHYSxJQUFJLENBQUNkO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQUFTYyxJQUFJLENBQUNkLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FEZ0M7QUFBQSxxQkFBakM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBb0ZFO0FBQUsscUJBQVMsRUFBQyxxQ0FBZjtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3Q0FBYjtBQUFBLGtDQUNVLElBQUlvQixJQUFKLEdBQVdDLFdBQVgsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThWRDtLQS9WdUJaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZqQixJQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFDL0IsTUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLElBQXJCLEVBQTJCO0FBQ3pCRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCQyxjQUF0QixFQUFnRTtBQUM5REcsTUFBQUEsU0FBUyxFQUFFTjtBQURtRCxLQUFoRTtBQUdEO0FBQ0YsQ0FOTSxFQVFQOztBQUNPLElBQU1OLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXdCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDM0MsTUFBSUssTUFBTSxJQUFJQSxNQUFNLENBQUNDLElBQXJCLEVBQTJCO0FBQ3pCRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLEVBQXFCUCxNQUFyQixFQUE2QkMsTUFBN0I7QUFDRDtBQUNGLENBSk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXNzd29yZC1wcm90ZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvZ2EvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2xvdWRVcGxvYWRJY29uLFxyXG4gIENvZ0ljb24sXHJcbiAgTG9ja0Nsb3NlZEljb24sXHJcbiAgTWVudUljb24sXHJcbiAgUmVmcmVzaEljb24sXHJcbiAgU2VydmVySWNvbixcclxuICBTaGllbGRDaGVja0ljb24sXHJcbiAgWEljb24sXHJcbiAgUGhvbmVJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgKiBhcyBnYSBmcm9tICcuLi9saWIvZ2EnO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICB7IG5hbWU6ICdGZWF0dXJlcycsIGhyZWY6ICcjZmVhdHVyZXMnIH0sXHJcbiAgeyBuYW1lOiAnQ29udGFjdCcsIGhyZWY6ICcjJyB9LFxyXG4gIHsgbmFtZTogJ1JlcG9ydHMnLCBocmVmOiAnL2Rhc2hib2FyZCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IGZvb3Rlck5hdmlnYXRpb24gPSB7XHJcbiAgcmVwb3J0czogW1xyXG4gICAgeyBuYW1lOiAnR3JhcGVzJywgaHJlZjogJy9kYXNoYm9hcmQvZ3JhcGVzJyB9LFxyXG4gICAgeyBuYW1lOiAnUG90YXRvJywgaHJlZjogJycgfSxcclxuICAgIHsgbmFtZTogJ1dhdGVybWVsb24nLCBocmVmOiAnIycgfSxcclxuICAgIHsgbmFtZTogJ1N0b25lIEZydWl0cycsIGhyZWY6ICcjJyB9LFxyXG4gIF0sXHJcbiAgY29tcGFueTogW1xyXG4gICAgeyBuYW1lOiAnQWJvdXQgVXMnLCBocmVmOiAnaHR0cHM6Ly93d3cua2lyc2NoZW5tYW4uY29tL2Fib3V0JyB9LFxyXG4gICAgeyBuYW1lOiAnV2Vic2l0ZScsIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vJyB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQmxvZycsXHJcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vY2F0ZWdvcnkvY3VycmVudC10cmVuZHMvJyxcclxuICAgIH0sXHJcbiAgICB7IG5hbWU6ICdFbWFpbDogaW5mb0BrZWlwcm9kdWNlLmNvbScsIGhyZWY6ICdtYWlsdG86aW5mb0BrZWlwcm9kdWNlLmNvbScgfSxcclxuICAgIHsgbmFtZTogJ1Bob25lOiAoNjYxKTIwMS03NzQ0JywgaHJlZjogJ3RlbDo2NjEtMjAxLTc3NDQnIH0sXHJcbiAgICB7IG5hbWU6ICdMb2NhdGlvbnMnLCBocmVmOiAnaHR0cHM6Ly93d3cua2lyc2NoZW5tYW4uY29tL2NvbnRhY3QvJyB9LFxyXG4gIF0sXHJcbiAgcHJvZHVjZUluZm86IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0dyYXBlcycsXHJcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vcHJvZHVjdHMvZ3JhcGVzLycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnU3RvbmUgRnJ1aXRzJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS9wcm9kdWN0cy9zdG9uZS1mcnVpdHMvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXYXRlcm1lbG9uJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS9wcm9kdWN0cy93YXRlcm1lbG9ucy8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1BvdGF0bycsXHJcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vcHJvZHVjdHMvcG90YXRvZXMvJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzb2NpYWw6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0ZhY2Vib29rJyxcclxuICAgICAgaHJlZjogJyMnLFxyXG4gICAgICBpY29uOiAocHJvcHMpID0+IChcclxuICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6XCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSW5zdGFncmFtJyxcclxuICAgICAgaHJlZjogJyMnLFxyXG4gICAgICBpY29uOiAocHJvcHMpID0+IChcclxuICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTIuMzE1IDJjMi40MyAwIDIuNzg0LjAxMyAzLjgwOC4wNiAxLjA2NC4wNDkgMS43OTEuMjE4IDIuNDI3LjQ2NWE0LjkwMiA0LjkwMiAwIDAxMS43NzIgMS4xNTMgNC45MDIgNC45MDIgMCAwMTEuMTUzIDEuNzcyYy4yNDcuNjM2LjQxNiAxLjM2My40NjUgMi40MjcuMDQ4IDEuMDY3LjA2IDEuNDA3LjA2IDQuMTIzdi4wOGMwIDIuNjQzLS4wMTIgMi45ODctLjA2IDQuMDQzLS4wNDkgMS4wNjQtLjIxOCAxLjc5MS0uNDY1IDIuNDI3YTQuOTAyIDQuOTAyIDAgMDEtMS4xNTMgMS43NzIgNC45MDIgNC45MDIgMCAwMS0xLjc3MiAxLjE1M2MtLjYzNi4yNDctMS4zNjMuNDE2LTIuNDI3LjQ2NS0xLjA2Ny4wNDgtMS40MDcuMDYtNC4xMjMuMDZoLS4wOGMtMi42NDMgMC0yLjk4Ny0uMDEyLTQuMDQzLS4wNi0xLjA2NC0uMDQ5LTEuNzkxLS4yMTgtMi40MjctLjQ2NWE0LjkwMiA0LjkwMiAwIDAxLTEuNzcyLTEuMTUzIDQuOTAyIDQuOTAyIDAgMDEtMS4xNTMtMS43NzJjLS4yNDctLjYzNi0uNDE2LTEuMzYzLS40NjUtMi40MjctLjA0Ny0xLjAyNC0uMDYtMS4zNzktLjA2LTMuODA4di0uNjNjMC0yLjQzLjAxMy0yLjc4NC4wNi0zLjgwOC4wNDktMS4wNjQuMjE4LTEuNzkxLjQ2NS0yLjQyN2E0LjkwMiA0LjkwMiAwIDAxMS4xNTMtMS43NzJBNC45MDIgNC45MDIgMCAwMTUuNDUgMi41MjVjLjYzNi0uMjQ3IDEuMzYzLS40MTYgMi40MjctLjQ2NUM4LjkwMSAyLjAxMyA5LjI1NiAyIDExLjY4NSAyaC42M3ptLS4wODEgMS44MDJoLS40NjhjLTIuNDU2IDAtMi43ODQuMDExLTMuODA3LjA1OC0uOTc1LjA0NS0xLjUwNC4yMDctMS44NTcuMzQ0LS40NjcuMTgyLS44LjM5OC0xLjE1Ljc0OC0uMzUuMzUtLjU2Ni42ODMtLjc0OCAxLjE1LS4xMzcuMzUzLS4zLjg4Mi0uMzQ0IDEuODU3LS4wNDcgMS4wMjMtLjA1OCAxLjM1MS0uMDU4IDMuODA3di40NjhjMCAyLjQ1Ni4wMTEgMi43ODQuMDU4IDMuODA3LjA0NS45NzUuMjA3IDEuNTA0LjM0NCAxLjg1Ny4xODIuNDY2LjM5OS44Ljc0OCAxLjE1LjM1LjM1LjY4My41NjYgMS4xNS43NDguMzUzLjEzNy44ODIuMyAxLjg1Ny4zNDQgMS4wNTQuMDQ4IDEuMzcuMDU4IDQuMDQxLjA1OGguMDhjMi41OTcgMCAyLjkxNy0uMDEgMy45Ni0uMDU4Ljk3Ni0uMDQ1IDEuNTA1LS4yMDcgMS44NTgtLjM0NC40NjYtLjE4Mi44LS4zOTggMS4xNS0uNzQ4LjM1LS4zNS41NjYtLjY4My43NDgtMS4xNS4xMzctLjM1My4zLS44ODIuMzQ0LTEuODU3LjA0OC0xLjA1NS4wNTgtMS4zNy4wNTgtNC4wNDF2LS4wOGMwLTIuNTk3LS4wMS0yLjkxNy0uMDU4LTMuOTYtLjA0NS0uOTc2LS4yMDctMS41MDUtLjM0NC0xLjg1OGEzLjA5NyAzLjA5NyAwIDAwLS43NDgtMS4xNSAzLjA5OCAzLjA5OCAwIDAwLTEuMTUtLjc0OGMtLjM1My0uMTM3LS44ODItLjMtMS44NTctLjM0NC0xLjAyMy0uMDQ3LTEuMzUxLS4wNTgtMy44MDctLjA1OHpNMTIgNi44NjVhNS4xMzUgNS4xMzUgMCAxMTAgMTAuMjcgNS4xMzUgNS4xMzUgMCAwMTAtMTAuMjd6bTAgMS44MDJhMy4zMzMgMy4zMzMgMCAxMDAgNi42NjYgMy4zMzMgMy4zMzMgMCAwMDAtNi42NjZ6bTUuMzM4LTMuMjA1YTEuMiAxLjIgMCAxMTAgMi40IDEuMiAxLjIgMCAwMTAtMi40elwiXHJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc3dvcmRQcm90ZWN0KHsgYWxsUG9zdHMsIHByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPFBvcG92ZXIgYXM9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBwdC02IHBiLTZcIj5cclxuICAgICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHNtOnB4LTZcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHbG9iYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtZDp3LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+V29ya2Zsb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8va2lyc2NoZW5tYW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA3L2xvZ29fc2hhZG93cmVtb3ZlZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS04MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1cy1yaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC04IG1kOmZsZXggbWQ6bWwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWdyYXktNjAwIGhvdmVyOmJnLWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICBlbnRlcj1cImR1cmF0aW9uLTE1MCBlYXNlLW91dFwiXHJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZT1cImR1cmF0aW9uLTEwMCBlYXNlLWluXCJcclxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLlBhbmVsXHJcbiAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTQwIGFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBwLTIgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gb3JpZ2luLXRvcCBtZDpoaWRkZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2tpcnNjaGVubWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9sb2dvX3NoYWRvd3JlbW92ZWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1saW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2UgbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciB3LWZ1bGwgcHktMyBweC00IHJvdW5kZWQtbWQgc2hhZG93IGJnLWxpbWUgdGV4dC13aGl0ZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XHJcbiAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBoLTEvMiBiZy1ncmF5LTUwIGxnOmJsb2NrXCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGJnLWdyYXktOTAwIGxnOmJnLXRyYW5zcGFyZW50IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmdyaWQgbGc6Z3JpZC1jb2xzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbGc6Y29sLXN0YXJ0LTEgbGc6cm93LXN0YXJ0LTEgbGc6Y29sLXNwYW4tNCBsZzpweS0xNiBsZzpiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGgtMS8yIGJnLWdyYXktNTAgbGc6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gcHgtNCBzbTptYXgtdy0zeGwgc206cHgtNiBsZzptYXgtdy1ub25lIGxnOnAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMTAgYXNwZWN0LWgtNiBzbTphc3BlY3Qtdy0yIHNtOmFzcGVjdC1oLTEgbGc6YXNwZWN0LXctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkLTN4bCBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzYwMjgxL3BleGVscy1waG90by03NjAyODEuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS05MDAgbGc6Y29sLXN0YXJ0LTMgbGc6cm93LXN0YXJ0LTEgbGc6Y29sLXNwYW4tMTAgbGc6cm91bmRlZC0zeGwgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMTAgbGc6aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgbGc6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tZnVsbCBsZWZ0LWZ1bGwgdHJhbnNmb3JtIHRyYW5zbGF0ZS15LTEvMyAtdHJhbnNsYXRlLXgtMi8zIHhsOmJvdHRvbS1hdXRvIHhsOnRvcC0wIHhsOnRyYW5zbGF0ZS15LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mzg0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgMzg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCI2NGU2NDNhZC0yMTc2LTRmODYtYjNkNy1mMmM1ZGEzYjZhNmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszODR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoIzY0ZTY0M2FkLTIxNzYtNGY4Ni1iM2Q3LWYyYzVkYTNiNmE2ZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMyAtdHJhbnNsYXRlLXgtMS8zIHhsOi10cmFuc2xhdGUteS0xLzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mzg0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgMzg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCI2NGU2NDNhZC0yMTc2LTRmODYtYjNkNy1mMmM1ZGEzYjZhNmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszODR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoIzY0ZTY0M2FkLTIxNzYtNGY4Ni1iM2Q3LWYyYzVkYTNiNmE2ZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbWQgbXgtYXV0byBweS0xMiBweC00IHNwYWNlLXktNiBzbTptYXgtdy0zeGwgc206cHktMTYgc206cHgtNiBsZzptYXgtdy1ub25lIGxnOnAtMCBsZzpjb2wtc3RhcnQtNCBsZzpjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiam9pbi1oZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFeHBsb3JlIG91ciBGaWVsZCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGJlZW4gZ3JhbnRlZCBhY2Nlc3MsIHBsZWFzZSBjbGljayB0aGUgXCJMb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b24gdG8gZW50ZXIgeW91ciBpbmZvLiBJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBncmFudGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgdG8gb3VyIHJlcG9ydCBkYXRhLCBwbGVhc2UgY2xpY2sgdGhlIFwiSm9pblwiIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVsb3chXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9naW4tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBsZzpweC0yMCBzbTpweC01IHRleHQtY2VudGVyIGJnLXdoaXRlIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBzbTppbmxpbmUtYmxvY2sgc206dy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2EuZXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnam9pbi1yZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIGxnOnB4LTIwIHNtOnB4LTUgdGV4dC1jZW50ZXIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIHNtOmlubGluZS1ibG9jayBzbTp3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Aa2VpcHJvZHVjZS5jb20/c3ViamVjdD1SZXF1ZXN0JTIwZm9yJTIwS0VJJTIwRmllbGQlMjBSZXBvcnQlMjBBY2Nlc3MmYm9keT1IZWxsbyUyMEtFSSUyMFN0YWZmJTJDJTBBJTBBSSUyMHdvdWxkJTIwbGlrZSUyMGFjY2VzcyUyMHRvJTIwdGhlJTIwS0VJJTIwRmllbGQlMjBSZXBvcnQlMjBEYXRhLiUyMEhlcmUlMjBpcyUyMG15JTIwaW5mbyUyMGJlbG93JTNBJTBBJTBBTmFtZSUzQSUyMCUwQUNvbXBhbnklM0ElMEFFbWFpbCUzQSUwQVBob25lJTNBJTBBXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSm9pblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJmb290ZXItaGVhZGluZ1wiPlxyXG4gICAgICAgICAgPGgyIGlkPVwiZm9vdGVyLWhlYWRpbmdcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgIEZvb3RlclxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBwdC0xMiBweC00IHNtOm1heC13LTd4bCBzbTpweC02IGxnOnB0LTE2IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpncmlkIHhsOmdyaWQtY29scy0zIHhsOmdhcC04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggeGw6Y29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2tpcnNjaGVubWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9sb2dvX3NoYWRvd3JlbW92ZWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNzVweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICBMZXZlcmFnZSBvdXIgZGFpbHkgcHJvZHVjZSBkYXRhIHRvIGVtcG93ZXIgeW91ciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICBkZWNpc2lvbi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgICAgICAge2Zvb3Rlck5hdmlnYXRpb24uc29jaWFsLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBncmlkIGdyaWQtY29scy0yIGdhcC04IHhsOm10LTAgeGw6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXJOYXZpZ2F0aW9uLnJlcG9ydHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5jb21wYW55Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWNlIEluZm9cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5wcm9kdWNlSW5mby5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHktOFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNDAwIHhsOnRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gS2lyc2NoZW5tYW4gRW50ZXJwcmlzZXMsIEluYy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XHJcbiAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuZ3RhZykge1xyXG4gICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MsIHtcclxuICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cclxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xyXG4gIGlmICh3aW5kb3cgJiYgd2luZG93Lmd0YWcpIHtcclxuICAgIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwgcGFyYW1zKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIlBvcG92ZXIiLCJUcmFuc2l0aW9uIiwiQ2xvdWRVcGxvYWRJY29uIiwiQ29nSWNvbiIsIkxvY2tDbG9zZWRJY29uIiwiTWVudUljb24iLCJSZWZyZXNoSWNvbiIsIlNlcnZlckljb24iLCJTaGllbGRDaGVja0ljb24iLCJYSWNvbiIsIlBob25lSWNvbiIsInNpZ25JbiIsImdhIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiZm9vdGVyTmF2aWdhdGlvbiIsInJlcG9ydHMiLCJjb21wYW55IiwicHJvZHVjZUluZm8iLCJzb2NpYWwiLCJpY29uIiwicHJvcHMiLCJQYXNzd29yZFByb3RlY3QiLCJhbGxQb3N0cyIsInByZXZpZXciLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCJdLCJzb3VyY2VSb290IjoiIn0=