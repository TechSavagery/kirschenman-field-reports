"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Example; }
/* harmony export */ });
/* harmony import */ var C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/sanity */ "./lib/sanity.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/markdown-styles.module.css */ "./components/markdown-styles.module.css");
/* harmony import */ var _components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/faq */ "./components/faq.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_newsletter_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/newsletter-form */ "./components/newsletter-form.js");
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/ga */ "./lib/ga/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\accou\\Desktop\\kirschenman-field-reports\\pages\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_accou_Desktop_kirschenman_field_reports_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/












var navigation = [{
  name: 'Features',
  href: '#features'
}, {
  name: 'FAQ',
  href: '#faq'
}, {
  name: 'Reports',
  href: '/dashboard'
}];
var features = [{
  name: 'All Produce. All Locations.',
  description: 'Get field data for any of our produce at any of our locations in one place instantly as our team submits daily quality reports',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.CloudUploadIcon
}, {
  name: 'Real Time Quality Assesment',
  description: 'All of our locations are leveraged on a unified data entry system to ensure you receive reports as soon as they are submitted.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.LockClosedIcon
}, {
  name: 'Daily Reports',
  description: 'Our reports will bring you specific data for each produce such as size, taste, appearance, as well as supporting images and reporter comments.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.RefreshIcon
}, {
  name: 'Quick Contact',
  description: 'Leave messages directly on the report to start a conversation with our sales team. We will reach out and ensure your team has all the info you need.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ShieldCheckIcon
}];
var blogPosts = [{
  id: 1,
  title: 'Boost your conversion rate',
  href: '#',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  category: {
    name: 'Article',
    href: '#'
  },
  imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  author: {
    name: 'Roel Aufderehar',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#'
  },
  readingLength: '6 min'
}, {
  id: 2,
  title: 'How to use search engine optimization to drive sales',
  href: '#',
  date: 'Mar 10, 2020',
  datetime: '2020-03-10',
  category: {
    name: 'Video',
    href: '#'
  },
  imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  author: {
    name: 'Brenna Goyette',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#'
  },
  readingLength: '4 min'
}, {
  id: 3,
  title: 'Improve your customer experience',
  href: '#',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  category: {
    name: 'Case Study',
    href: '#'
  },
  imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  author: {
    name: 'Daniela Metz',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#'
  },
  readingLength: '11 min'
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this);
    }
  }, {
    name: 'Instagram',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, _this);
    }
  }]
};
var __N_SSG = true;
function Example(_ref) {
  var _this2 = this;

  var allPosts = _ref.allPosts,
      preview = _ref.preview;
  var posts = allPosts.slice(0, 3);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "bg-white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "description",
        content: "Field Report Data from Kirschenman Enterprises Inc."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Kirschenman Field Reports"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Popover, {
        as: "header",
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "bg-gray-900 pt-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("nav", {
            className: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6",
            "aria-label": "Global",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "flex items-center flex-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "flex items-center justify-between w-full md:w-auto",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  href: "#",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "sr-only",
                    children: "Workflow"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                    className: "",
                    src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                    alt: "",
                    style: {
                      height: '100px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "-mr-2 flex items-center md:hidden",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Popover.Button, {
                    className: "bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "sr-only",
                      children: "Open main menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "hidden space-x-8 md:flex md:ml-10",
                children: navigation.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    href: item.href,
                    className: "text-base font-medium text-white hover:text-gray-300",
                    children: item.name
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "hidden md:flex md:items-center md:space-x-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                href: "mailto:info@keiproduce.com",
                className: "text-base font-medium text-white hover:text-gray-300",
                children: "Contact Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                href: "/dashboard",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Transition, {
          as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "duration-100 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Popover.Panel, {
            focus: true,
            className: "absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "px-5 pt-4 flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                    className: "",
                    src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                    alt: "",
                    style: {
                      height: '100px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "-mr-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Popover.Button, {
                    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "sr-only",
                      children: "Close menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "pt-5 pb-6",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "px-2 space-y-1",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      href: item.href,
                      className: "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50",
                      children: item.name
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 306,
                      columnNumber: 23
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "mt-6 px-5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    href: "/dashboard",
                    className: "block text-center w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium",
                    children: "Dashboard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "mx-auto max-w-7xl lg:px-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "lg:grid lg:grid-cols-2 lg:gap-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "lg:py-24",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    href: "/dashboard/grapes",
                    className: "inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-lime rounded-full",
                      children: "Live Data!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 338,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "ml-4 text-sm",
                      children: "Visit our grapes report dashboard!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {
                      className: "ml-2 w-5 h-5 text-gray-500",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 334,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
                    className: "mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "block",
                      children: "Kirschenman Field Reports"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "pb-3 block bg-clip-text text-transparent bg-lime sm:pb-5",
                      children: "Live Produce Data"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 351,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                    className: "text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl",
                    children: "Quality reports that capture the key details of the produce from the team at KEI. Data from field-to-phone to keep you up to date with our current offerings."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "mt-10 sm:mt-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_newsletter_form__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "mt-12 -mb-10 sm:-mb-24 lg:-mb-80",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    id: "desktop-screenshot",
                    href: "/reports/".concat(posts[0].slug),
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                      className: "rounded-lg shadow-xl ring-1 ring-black ring-opacity-5",
                      src: "/kei-reports-desktop.png",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 371,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "relative bg-transparent pt-16 sm:pt-24 lg:pt-32",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                className: "text-base font-semibold tracking-wider text-lime uppercase",
                children: "Live Field Data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",
                children: "From our Fields to your Hands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "mt-5 max-w-prose mx-auto text-xl text-gray-500",
                children: "Access data from any device and stay informed of current trends and availability for our produce. Send reports to colleagues seamlessly and create communications."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "justify-items-center mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                className: "rounded-lg",
                src: "https://www.kirschenman.com/wp-content/uploads/2021/10/kei-reports-mobile-detail.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                className: "rounded-lg",
                src: "https://www.kirschenman.com/wp-content/uploads/2021/10/mobile-report-list.png.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          id: "features",
          className: "relative bg-white py-16 sm:py-24 lg:py-32",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "mt-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2",
                children: features.map(function (feature) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "pt-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "flow-root bg-gray-50 rounded-lg px-6 pb-8",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "-mt-6",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                            className: "inline-flex items-center justify-center p-3 bg-lime rounded-md shadow-lg",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(feature.icon, {
                              className: "h-6 w-6 text-white",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 428,
                              columnNumber: 31
                            }, _this2)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 427,
                            columnNumber: 29
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 426,
                          columnNumber: 27
                        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                          className: "mt-8 text-lg font-medium text-gray-900 tracking-tight",
                          children: feature.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 434,
                          columnNumber: 27
                        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                          className: "mt-5 text-base text-gray-500",
                          children: feature.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 437,
                          columnNumber: 27
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 425,
                        columnNumber: 25
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 424,
                      columnNumber: 23
                    }, _this2)
                  }, feature.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 421,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "pb-16 bg-lime lg:pb-0 lg:z-10 lg:relative",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "relative lg:-my-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 453,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                    className: "object-cover lg:h-full lg:w-full",
                    src: "https://www.kirschenman.com/wp-content/uploads/2017/03/IMG_8033-scaled.jpg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 457,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "mt-12 lg:m-0 lg:col-span-2 lg:pl-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("blockquote", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", {
                      className: "h-12 w-12 text-white opacity-25",
                      fill: "currentColor",
                      viewBox: "0 0 32 32",
                      "aria-hidden": "true",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
                        d: "M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 477,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 471,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                      className: "mt-6 text-2xl font-medium text-white",
                      children: "We want to take you with us directly to the produce! Each report will have plenty of images and key data to easily measure the quality of the batch."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 479,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 470,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
                    className: "mt-6",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                      className: "text-base font-medium text-white",
                      children: "Reporting Staff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 486,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                      className: "text-base font-medium text-cyan-100",
                      children: ["Kirschenman Enterprises Inc", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 489,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 485,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 468,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 451,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "relative bg-gray-50 py-16 sm:py-24 lg:py-32",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                className: "text-base font-semibold tracking-wider text-lime uppercase",
                children: "Just In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",
                children: "Latest Reports"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "mt-5 mx-auto max-w-prose text-xl text-gray-500",
                children: "We are busy collecting data! Take a look at some of the fruit we are packaging up today. Get in touch with our sales department for more info!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 502,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl",
              children: posts.map(function (post) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "flex flex-col rounded-lg shadow-lg overflow-hidden",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      href: "/reports/".concat(post.slug),
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                        className: "h-48 w-full object-cover",
                        src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_4__.imageBuilder)(post.coverImage).width(384).height(192).url(),
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 523,
                        columnNumber: 25
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 522,
                      columnNumber: 23
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 521,
                    columnNumber: 21
                  }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "flex-1 bg-white p-6 flex flex-col justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "flex-1",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        className: "text-sm font-medium text-lime",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                          href: "/reports/".concat(post.slug),
                          className: "hover:underline",
                          children: post.label.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 536,
                          columnNumber: 27
                        }, _this2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 535,
                        columnNumber: 25
                      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                        href: "/reports/".concat(post.slug),
                        className: "block mt-2",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                          className: "text-xl font-semibold text-gray-900",
                          children: [post.lot ? post.lot.name : 'N/A', ' - ', post.variety ? post.variety.name : 'N/A', ' - ', post.week ? post.week.toUpperCase().replace('EEK-', '') : 'N/A', ' - ', new Date(post.date).getFullYear()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 547,
                          columnNumber: 27
                        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                          className: "mt-3 text-md text-gray-500 sm:mt-4",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/reports/".concat(post.slug),
                            blocks: post.body,
                            projectId: "t3p5d5xy",
                            dataset: "production",
                            className: (_components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_12___default().markdown)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 559,
                            columnNumber: 29
                          }, _this2), ' ']
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 558,
                          columnNumber: 27
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 543,
                        columnNumber: 25
                      }, _this2)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 534,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "mt-6 flex items-center",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                          href: post.reporter.slug,
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                            className: "h-10 w-10 rounded-full",
                            src: post.reporter.picture,
                            alt: post.reporter.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 574,
                            columnNumber: 29
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 573,
                          columnNumber: 27
                        }, _this2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 572,
                        columnNumber: 25
                      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "ml-3",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                          className: "text-sm font-medium text-gray-900",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                            href: post.reporter.slug,
                            className: "hover:underline",
                            children: post.reporter.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 583,
                            columnNumber: 29
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 582,
                          columnNumber: 27
                        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "flex space-x-1 text-sm text-gray-500",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                            children: new Date(post.date).toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                              year: 'numeric'
                            })
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 591,
                            columnNumber: 29
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 590,
                          columnNumber: 27
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 581,
                        columnNumber: 25
                      }, _this2)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 571,
                      columnNumber: 23
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 533,
                    columnNumber: 21
                  }, _this2)]
                }, post._id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 517,
                  columnNumber: 19
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          "class": "pb-5",
          id: "faq",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_faq__WEBPACK_IMPORTED_MODULE_6__.default, {
            id: "faq"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 608,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "relative bg-gray-900",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              className: "w-full h-full object-cover",
              src: "https://www.kirschenman.com/wp-content/uploads/2020/07/covid-farmingguidelines.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 614,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              "aria-hidden": "true",
              className: "absolute inset-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 613,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "md:ml-auto md:w-1/2 md:pl-10",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                className: "mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl",
                children: "We\u2019re here to help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 623,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "mt-3 text-lg text-gray-300",
                children: "Our team is dedicated to providing you with up to date information about our products to make your purchasing decision and process as seamless as possible. If you have any questions fell free to reach out to our team!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 626,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mt-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "inline-flex rounded-md shadow",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    href: "tel:661-201-7744",
                    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50",
                    children: ["Give Us a Call!", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon, {
                      className: "-mr-1 ml-3 h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 639,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 634,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 633,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 632,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
        className: "bg-gray-50",
        "aria-labelledby": "footer-heading",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          id: "footer-heading",
          className: "sr-only",
          children: "Footer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "xl:grid xl:grid-cols-3 xl:gap-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "space-y-8 xl:col-span-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                className: "",
                src: "https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png",
                alt: "",
                style: {
                  height: '75px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 657,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "text-gray-500 text-base",
                children: "Leverage our daily produce data to empower your business decision."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 663,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "flex space-x-6",
                children: footerNavigation.social.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    href: item.href,
                    className: "text-gray-400 hover:text-gray-500",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "sr-only",
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 674,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(item.icon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 675,
                      columnNumber: 23
                    }, _this2)]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 669,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 667,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "md:grid md:grid-cols-2 md:gap-8",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Reports"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 683,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.reports.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 689,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 688,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 686,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 682,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "mt-12 md:mt-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 700,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.company.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 706,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 705,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 703,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 699,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 681,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "md:grid md:grid-cols-2 md:gap-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                    children: "Produce Info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 719,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                    role: "list",
                    className: "mt-4 space-y-4",
                    children: footerNavigation.produceInfo.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                          href: item.href,
                          className: "text-base text-gray-500 hover:text-gray-900",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 725,
                          columnNumber: 27
                        }, _this2)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 724,
                        columnNumber: 25
                      }, _this2);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 722,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 718,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 717,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 680,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "mt-12 border-t border-gray-200 py-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              className: "text-base text-gray-400 xl:text-center",
              children: ["\xA9 ", new Date().getFullYear(), " Kirschenman Enterprises, Inc."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 739,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 738,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 5
  }, this);
}
_c = Example;

var _c;

$RefreshReg$(_c, "Example");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWMzNGVjNGFhNTg3ZWVlMzFkZDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1xQixVQUFVLEdBQUcsQ0FDakI7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0JDLEVBQUFBLElBQUksRUFBRTtBQUExQixDQURpQixFQUVqQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxFQUFBQSxJQUFJLEVBQUU7QUFBckIsQ0FGaUIsRUFHakI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLEVBQUFBLElBQUksRUFBRTtBQUF6QixDQUhpQixDQUFuQjtBQUtBLElBQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VGLEVBQUFBLElBQUksRUFBRSw2QkFEUjtBQUVFRyxFQUFBQSxXQUFXLEVBQ1QsZ0lBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFdkIscUVBQWVBO0FBSnZCLENBRGUsRUFPZjtBQUNFbUIsRUFBQUEsSUFBSSxFQUFFLDZCQURSO0FBRUVHLEVBQUFBLFdBQVcsRUFDVCxnSUFISjtBQUlFQyxFQUFBQSxJQUFJLEVBQUVyQixvRUFBY0E7QUFKdEIsQ0FQZSxFQWFmO0FBQ0VpQixFQUFBQSxJQUFJLEVBQUUsZUFEUjtBQUVFRyxFQUFBQSxXQUFXLEVBQ1QsZ0pBSEo7QUFJRUMsRUFBQUEsSUFBSSxFQUFFbkIsaUVBQVdBO0FBSm5CLENBYmUsRUFtQmY7QUFD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Qyw2Q0FGWjtBQUFBLG9DQUlHMEIsSUFBSSxDQUFDM0I7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBQVMyQixJQUFJLENBQUMzQixJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRGdDO0FBQUEscUJBQWpDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQW9GRTtBQUFLLHFCQUFTLEVBQUMscUNBQWY7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsd0NBQWI7QUFBQSxrQ0FDVSxJQUFJd0MsSUFBSixHQUFXQyxXQUFYLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9hRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJoQkQ7S0E3aEJ1QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyBcclxuICBcclxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxyXG4gIFxyXG4gIGBgYFxyXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xyXG4gIGNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoJ3RhaWx3aW5kY3NzL2NvbG9ycycpXHJcbiAgXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAvLyAuLi5cclxuICAgIHRoZW1lOiB7XHJcbiAgICAgIGV4dGVuZDoge1xyXG4gICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgICAgdGVhbDogY29sb3JzLnRlYWwsXHJcbiAgICAgICAgICBjeWFuOiBjb2xvcnMuY3lhbixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgLy8gLi4uXHJcbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy9mb3JtcycpLFxyXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvYXNwZWN0LXJhdGlvJyksXHJcbiAgICBdLFxyXG4gIH1cclxuICBgYGBcclxuKi9cclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2xvdWRVcGxvYWRJY29uLFxyXG4gIENvZ0ljb24sXHJcbiAgTG9ja0Nsb3NlZEljb24sXHJcbiAgTWVudUljb24sXHJcbiAgUmVmcmVzaEljb24sXHJcbiAgU2VydmVySWNvbixcclxuICBTaGllbGRDaGVja0ljb24sXHJcbiAgWEljb24sXHJcbiAgUGhvbmVJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcbmltcG9ydCB7IENoZXZyb25SaWdodEljb24sIEV4dGVybmFsTGlua0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHNGb3JIb21lIH0gZnJvbSAnLi4vbGliL2FwaSc7XHJcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uL2xpYi9zYW5pdHknO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCc7XHJcbmltcG9ydCBtYXJrZG93blN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL21hcmtkb3duLXN0eWxlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9jb21wb25lbnRzL2ZhcSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOZXdzbGV0dGVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL25ld3NsZXR0ZXItZm9ybSc7XHJcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2xpYi9nYSc7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gIHsgbmFtZTogJ0ZlYXR1cmVzJywgaHJlZjogJyNmZWF0dXJlcycgfSxcclxuICB7IG5hbWU6ICdGQVEnLCBocmVmOiAnI2ZhcScgfSxcclxuICB7IG5hbWU6ICdSZXBvcnRzJywgaHJlZjogJy9kYXNoYm9hcmQnIH0sXHJcbl07XHJcbmNvbnN0IGZlYXR1cmVzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdBbGwgUHJvZHVjZS4gQWxsIExvY2F0aW9ucy4nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgZmllbGQgZGF0YSBmb3IgYW55IG9mIG91ciBwcm9kdWNlIGF0IGFueSBvZiBvdXIgbG9jYXRpb25zIGluIG9uZSBwbGFjZSBpbnN0YW50bHkgYXMgb3VyIHRlYW0gc3VibWl0cyBkYWlseSBxdWFsaXR5IHJlcG9ydHMnLFxyXG4gICAgaWNvbjogQ2xvdWRVcGxvYWRJY29uLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1JlYWwgVGltZSBRdWFsaXR5IEFzc2VzbWVudCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0FsbCBvZiBvdXIgbG9jYXRpb25zIGFyZSBsZXZlcmFnZWQgb24gYSB1bmlmaWVkIGRhdGEgZW50cnkgc3lzdGVtIHRvIGVuc3VyZSB5b3UgcmVjZWl2ZSByZXBvcnRzIGFzIHNvb24gYXMgdGhleSBhcmUgc3VibWl0dGVkLicsXHJcbiAgICBpY29uOiBMb2NrQ2xvc2VkSWNvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEYWlseSBSZXBvcnRzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnT3VyIHJlcG9ydHMgd2lsbCBicmluZyB5b3Ugc3BlY2lmaWMgZGF0YSBmb3IgZWFjaCBwcm9kdWNlIHN1Y2ggYXMgc2l6ZSwgdGFzdGUsIGFwcGVhcmFuY2UsIGFzIHdlbGwgYXMgc3VwcG9ydGluZyBpbWFnZXMgYW5kIHJlcG9ydGVyIGNvbW1lbnRzLicsXHJcbiAgICBpY29uOiBSZWZyZXNoSWNvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdRdWljayBDb250YWN0JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnTGVhdmUgbWVzc2FnZXMgZGlyZWN0bHkgb24gdGhlIHJlcG9ydCB0byBzdGFydCBhIGNvbnZlcnNhdGlvbiB3aXRoIG91ciBzYWxlcyB0ZWFtLiBXZSB3aWxsIHJlYWNoIG91dCBhbmQgZW5zdXJlIHlvdXIgdGVhbSBoYXMgYWxsIHRoZSBpbmZvIHlvdSBuZWVkLicsXHJcbiAgICBpY29uOiBTaGllbGRDaGVja0ljb24sXHJcbiAgfSxcclxuXTtcclxuY29uc3QgYmxvZ1Bvc3RzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdCb29zdCB5b3VyIGNvbnZlcnNpb24gcmF0ZScsXHJcbiAgICBocmVmOiAnIycsXHJcbiAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgIGRhdGV0aW1lOiAnMjAyMC0wMy0xNicsXHJcbiAgICBjYXRlZ29yeTogeyBuYW1lOiAnQXJ0aWNsZScsIGhyZWY6ICcjJyB9LFxyXG4gICAgaW1hZ2VVcmw6XHJcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NjEyODg1ODQxMy1iMzYyMTdjMmNlMzY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NzkmcT04MCcsXHJcbiAgICBwcmV2aWV3OlxyXG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXJjaGl0ZWN0byBhY2N1c2FudGl1bSBwcmFlc2VudGl1bSBlaXVzLCB1dCBhdHF1ZSBmdWdhIGN1bHBhLCBzaW1pbGlxdWUgc2VxdWkgY3VtIGVvcyBxdWlzIGRvbG9ydW0uJyxcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICBuYW1lOiAnUm9lbCBBdWZkZXJlaGFyJyxcclxuICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgIGhyZWY6ICcjJyxcclxuICAgIH0sXHJcbiAgICByZWFkaW5nTGVuZ3RoOiAnNiBtaW4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0hvdyB0byB1c2Ugc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gdG8gZHJpdmUgc2FsZXMnLFxyXG4gICAgaHJlZjogJyMnLFxyXG4gICAgZGF0ZTogJ01hciAxMCwgMjAyMCcsXHJcbiAgICBkYXRldGltZTogJzIwMjAtMDMtMTAnLFxyXG4gICAgY2F0ZWdvcnk6IHsgbmFtZTogJ1ZpZGVvJywgaHJlZjogJyMnIH0sXHJcbiAgICBpbWFnZVVybDpcclxuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ3NTg2Njk2LWVhMjJiNGQ0MjM1ZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY3OSZxPTgwJyxcclxuICAgIHByZXZpZXc6XHJcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWZWxpdCBmYWNpbGlzIGFzcGVyaW9yZXMgcG9ycm8gcXVhZXJhdCBkb2xvcmlidXMsIGV2ZW5pZXQgZG9sb3JlLiBBZGlwaXNjaSB0ZW1wb3JhIGF1dCBpbnZlbnRvcmUgb3B0aW8gYW5pbWkuLCB0ZW1wb3JlIHRlbXBvcmlidXMgcXVvIGxhdWRhbnRpdW0uJyxcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICBuYW1lOiAnQnJlbm5hIEdveWV0dGUnLFxyXG4gICAgICBpbWFnZVVybDpcclxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTA1MjU4MTEtZTU4NjlkZDAzMDMyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgaHJlZjogJyMnLFxyXG4gICAgfSxcclxuICAgIHJlYWRpbmdMZW5ndGg6ICc0IG1pbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnSW1wcm92ZSB5b3VyIGN1c3RvbWVyIGV4cGVyaWVuY2UnLFxyXG4gICAgaHJlZjogJyMnLFxyXG4gICAgZGF0ZTogJ0ZlYiAxMiwgMjAyMCcsXHJcbiAgICBkYXRldGltZTogJzIwMjAtMDItMTInLFxyXG4gICAgY2F0ZWdvcnk6IHsgbmFtZTogJ0Nhc2UgU3R1ZHknLCBocmVmOiAnIycgfSxcclxuICAgIGltYWdlVXJsOlxyXG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTI3MjQ0NDE5OTctNWRjODY1MzA1ZGE3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjc5JnE9ODAnLFxyXG4gICAgcHJldmlldzpcclxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgaGFydW0gcmVydW0gdm9sdXB0YXRlbSBxdW8gcmVjdXNhbmRhZSBtYWduaSBwbGFjZWF0IHNhZXBlIG1vbGVzdGlhZSwgc2VkIGV4Y2VwdHVyaSBjdW1xdWUgY29ycG9yaXMgcGVyZmVyZW5kaXMgaGljLicsXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgbmFtZTogJ0RhbmllbGEgTWV0eicsXHJcbiAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NzQxMjcyMDUwNy1lN2FiMzc2MDNjNmY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICBocmVmOiAnIycsXHJcbiAgICB9LFxyXG4gICAgcmVhZGluZ0xlbmd0aDogJzExIG1pbicsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgZm9vdGVyTmF2aWdhdGlvbiA9IHtcclxuICByZXBvcnRzOiBbXHJcbiAgICB7IG5hbWU6ICdHcmFwZXMnLCBocmVmOiAnL2Rhc2hib2FyZC9ncmFwZXMnIH0sXHJcbiAgICB7IG5hbWU6ICdQb3RhdG8nLCBocmVmOiAnJyB9LFxyXG4gICAgeyBuYW1lOiAnV2F0ZXJtZWxvbicsIGhyZWY6ICcjJyB9LFxyXG4gICAgeyBuYW1lOiAnU3RvbmUgRnJ1aXRzJywgaHJlZjogJyMnIH0sXHJcbiAgXSxcclxuICBjb21wYW55OiBbXHJcbiAgICB7IG5hbWU6ICdBYm91dCBVcycsIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vYWJvdXQnIH0sXHJcbiAgICB7IG5hbWU6ICdXZWJzaXRlJywgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS8nIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdCbG9nJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS9jYXRlZ29yeS9jdXJyZW50LXRyZW5kcy8nLFxyXG4gICAgfSxcclxuICAgIHsgbmFtZTogJ0VtYWlsOiBpbmZvQGtlaXByb2R1Y2UuY29tJywgaHJlZjogJ21haWx0bzppbmZvQGtlaXByb2R1Y2UuY29tJyB9LFxyXG4gICAgeyBuYW1lOiAnUGhvbmU6ICg2NjEpMjAxLTc3NDQnLCBocmVmOiAndGVsOjY2MS0yMDEtNzc0NCcgfSxcclxuICAgIHsgbmFtZTogJ0xvY2F0aW9ucycsIGhyZWY6ICdodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vY29udGFjdC8nIH0sXHJcbiAgXSxcclxuICBwcm9kdWNlSW5mbzogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR3JhcGVzJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS9wcm9kdWN0cy9ncmFwZXMvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTdG9uZSBGcnVpdHMnLFxyXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cua2lyc2NoZW5tYW4uY29tL3Byb2R1Y3RzL3N0b25lLWZydWl0cy8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1dhdGVybWVsb24nLFxyXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cua2lyc2NoZW5tYW4uY29tL3Byb2R1Y3RzL3dhdGVybWVsb25zLycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUG90YXRvJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS9wcm9kdWN0cy9wb3RhdG9lcy8nLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHNvY2lhbDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRmFjZWJvb2snLFxyXG4gICAgICBocmVmOiAnIycsXHJcbiAgICAgIGljb246IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0yMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMmgyLjU0VjkuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTJoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxOC4zNDMgMjEuMTI4IDIyIDE2Ljk5MSAyMiAxMnpcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdJbnN0YWdyYW0nLFxyXG4gICAgICBocmVmOiAnIycsXHJcbiAgICAgIGljb246IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0xMi4zMTUgMmMyLjQzIDAgMi43ODQuMDEzIDMuODA4LjA2IDEuMDY0LjA0OSAxLjc5MS4yMTggMi40MjcuNDY1YTQuOTAyIDQuOTAyIDAgMDExLjc3MiAxLjE1MyA0LjkwMiA0LjkwMiAwIDAxMS4xNTMgMS43NzJjLjI0Ny42MzYuNDE2IDEuMzYzLjQ2NSAyLjQyNy4wNDggMS4wNjcuMDYgMS40MDcuMDYgNC4xMjN2LjA4YzAgMi42NDMtLjAxMiAyLjk4Ny0uMDYgNC4wNDMtLjA0OSAxLjA2NC0uMjE4IDEuNzkxLS40NjUgMi40MjdhNC45MDIgNC45MDIgMCAwMS0xLjE1MyAxLjc3MiA0LjkwMiA0LjkwMiAwIDAxLTEuNzcyIDEuMTUzYy0uNjM2LjI0Ny0xLjM2My40MTYtMi40MjcuNDY1LTEuMDY3LjA0OC0xLjQwNy4wNi00LjEyMy4wNmgtLjA4Yy0yLjY0MyAwLTIuOTg3LS4wMTItNC4wNDMtLjA2LTEuMDY0LS4wNDktMS43OTEtLjIxOC0yLjQyNy0uNDY1YTQuOTAyIDQuOTAyIDAgMDEtMS43NzItMS4xNTMgNC45MDIgNC45MDIgMCAwMS0xLjE1My0xLjc3MmMtLjI0Ny0uNjM2LS40MTYtMS4zNjMtLjQ2NS0yLjQyNy0uMDQ3LTEuMDI0LS4wNi0xLjM3OS0uMDYtMy44MDh2LS42M2MwLTIuNDMuMDEzLTIuNzg0LjA2LTMuODA4LjA0OS0xLjA2NC4yMTgtMS43OTEuNDY1LTIuNDI3YTQuOTAyIDQuOTAyIDAgMDExLjE1My0xLjc3MkE0LjkwMiA0LjkwMiAwIDAxNS40NSAyLjUyNWMuNjM2LS4yNDcgMS4zNjMtLjQxNiAyLjQyNy0uNDY1QzguOTAxIDIuMDEzIDkuMjU2IDIgMTEuNjg1IDJoLjYzem0tLjA4MSAxLjgwMmgtLjQ2OGMtMi40NTYgMC0yLjc4NC4wMTEtMy44MDcuMDU4LS45NzUuMDQ1LTEuNTA0LjIwNy0xLjg1Ny4zNDQtLjQ2Ny4xODItLjguMzk4LTEuMTUuNzQ4LS4zNS4zNS0uNTY2LjY4My0uNzQ4IDEuMTUtLjEzNy4zNTMtLjMuODgyLS4zNDQgMS44NTctLjA0NyAxLjAyMy0uMDU4IDEuMzUxLS4wNTggMy44MDd2LjQ2OGMwIDIuNDU2LjAxMSAyLjc4NC4wNTggMy44MDcuMDQ1Ljk3NS4yMDcgMS41MDQuMzQ0IDEuODU3LjE4Mi40NjYuMzk5LjguNzQ4IDEuMTUuMzUuMzUuNjgzLjU2NiAxLjE1Ljc0OC4zNTMuMTM3Ljg4Mi4zIDEuODU3LjM0NCAxLjA1NC4wNDggMS4zNy4wNTggNC4wNDEuMDU4aC4wOGMyLjU5NyAwIDIuOTE3LS4wMSAzLjk2LS4wNTguOTc2LS4wNDUgMS41MDUtLjIwNyAxLjg1OC0uMzQ0LjQ2Ni0uMTgyLjgtLjM5OCAxLjE1LS43NDguMzUtLjM1LjU2Ni0uNjgzLjc0OC0xLjE1LjEzNy0uMzUzLjMtLjg4Mi4zNDQtMS44NTcuMDQ4LTEuMDU1LjA1OC0xLjM3LjA1OC00LjA0MXYtLjA4YzAtMi41OTctLjAxLTIuOTE3LS4wNTgtMy45Ni0uMDQ1LS45NzYtLjIwNy0xLjUwNS0uMzQ0LTEuODU4YTMuMDk3IDMuMDk3IDAgMDAtLjc0OC0xLjE1IDMuMDk4IDMuMDk4IDAgMDAtMS4xNS0uNzQ4Yy0uMzUzLS4xMzctLjg4Mi0uMy0xLjg1Ny0uMzQ0LTEuMDIzLS4wNDctMS4zNTEtLjA1OC0zLjgwNy0uMDU4ek0xMiA2Ljg2NWE1LjEzNSA1LjEzNSAwIDExMCAxMC4yNyA1LjEzNSA1LjEzNSAwIDAxMC0xMC4yN3ptMCAxLjgwMmEzLjMzMyAzLjMzMyAwIDEwMCA2LjY2NiAzLjMzMyAzLjMzMyAwIDAwMC02LjY2NnptNS4zMzgtMy4yMDVhMS4yIDEuMiAwIDExMCAyLjQgMS4yIDEuMiAwIDAxMC0yLjR6XCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKHsgYWxsUG9zdHMsIHByZXZpZXcgfSkge1xyXG4gIGNvbnN0IHBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMCwgMyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXtgRmllbGQgUmVwb3J0IERhdGEgZnJvbSBLaXJzY2hlbm1hbiBFbnRlcnByaXNlcyBJbmMuYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5LaXJzY2hlbm1hbiBGaWVsZCBSZXBvcnRzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8UG9wb3ZlciBhcz1cImhlYWRlclwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHB0LTZcIj5cclxuICAgICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHNtOnB4LTZcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHbG9iYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtZDp3LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+V29ya2Zsb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8va2lyc2NoZW5tYW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA3L2xvZ29fc2hhZG93cmVtb3ZlZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS04MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1cy1yaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC04IG1kOmZsZXggbWQ6bWwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Aa2VpcHJvZHVjZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgZW50ZXI9XCJkdXJhdGlvbi0xNTAgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgbGVhdmU9XCJkdXJhdGlvbi0xMDAgZWFzZS1pblwiXHJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5QYW5lbFxyXG4gICAgICAgICAgICAgIGZvY3VzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgaW5zZXQteC0wIHAtMiB0cmFuc2l0aW9uIHRyYW5zZm9ybSBvcmlnaW4tdG9wIG1kOmhpZGRlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB0LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8va2lyc2NoZW5tYW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA3L2xvZ29fc2hhZG93cmVtb3ZlZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWxpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHctZnVsbCBweS0zIHB4LTQgcm91bmRlZC1tZCBzaGFkb3cgYmctbGltZSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5QYW5lbD5cclxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIGJnLWdyYXktOTAwIHNtOnB0LTE2IGxnOnB0LTggbGc6cGItMTQgbGc6b3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LW1kIHB4LTQgc206bWF4LXctMnhsIHNtOnB4LTYgc206dGV4dC1jZW50ZXIgbGc6cHgtMCBsZzp0ZXh0LWxlZnQgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpweS0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZC9ncmFwZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1mdWxsIHAtMSBwci0yIHNtOnRleHQtYmFzZSBsZzp0ZXh0LXNtIHhsOnRleHQtYmFzZSBob3Zlcjp0ZXh0LWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0zIHB5LTAuNSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgYmctbGltZSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGl2ZSBEYXRhIVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0IG91ciBncmFwZXMgcmVwb3J0IGRhc2hib2FyZCFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgdy01IGgtNSB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgc206bXQtNSBzbTp0ZXh0LTZ4bCBsZzptdC02IHhsOnRleHQtNnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiPktpcnNjaGVubWFuIEZpZWxkIFJlcG9ydHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYi0zIGJsb2NrIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWxpbWUgc206cGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXZlIFByb2R1Y2UgRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS0zMDAgc206dGV4dC14bCBsZzp0ZXh0LWxnIHhsOnRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFF1YWxpdHkgcmVwb3J0cyB0aGF0IGNhcHR1cmUgdGhlIGtleSBkZXRhaWxzIG9mIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZSBmcm9tIHRoZSB0ZWFtIGF0IEtFSS4gRGF0YSBmcm9tIGZpZWxkLXRvLXBob25lIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZWVwIHlvdSB1cCB0byBkYXRlIHdpdGggb3VyIGN1cnJlbnQgb2ZmZXJpbmdzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHNtOm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmV3c2xldHRlckZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgLW1iLTE2IHNtOi1tYi00OCBsZzptLTAgbGc6cmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiAtbWItMTAgc206LW1iLTI0IGxnOi1tYi04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2t0b3Atc2NyZWVuc2hvdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3JlcG9ydHMvJHtwb3N0c1swXS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy14bCByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9rZWktcmVwb3J0cy1kZXNrdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRmVhdHVyZSBzZWN0aW9uIHdpdGggc2NyZWVuc2hvdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctdHJhbnNwYXJlbnQgcHQtMTYgc206cHQtMjQgbGc6cHQtMzJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LW1kIHB4LTQgdGV4dC1jZW50ZXIgc206cHgtNiBzbTptYXgtdy0zeGwgbGc6cHgtOCBsZzptYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVyIHRleHQtbGltZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgTGl2ZSBGaWVsZCBEYXRhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtNHhsXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZyb20gb3VyIEZpZWxkcyB0byB5b3VyIEhhbmRzXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1heC13LXByb3NlIG14LWF1dG8gdGV4dC14bCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFjY2VzcyBkYXRhIGZyb20gYW55IGRldmljZSBhbmQgc3RheSBpbmZvcm1lZCBvZiBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgIHRyZW5kcyBhbmQgYXZhaWxhYmlsaXR5IGZvciBvdXIgcHJvZHVjZS4gU2VuZCByZXBvcnRzIHRvXHJcbiAgICAgICAgICAgICAgICAgIGNvbGxlYWd1ZXMgc2VhbWxlc3NseSBhbmQgY3JlYXRlIGNvbW11bmljYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1pdGVtcy1jZW50ZXIgbXQtMTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xNiBsZzpncmlkLWNvbHMtMiBsZzpnYXAteC04XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMTAva2VpLXJlcG9ydHMtbW9iaWxlLWRldGFpbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8xMC9tb2JpbGUtcmVwb3J0LWxpc3QucG5nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBGZWF0dXJlIHNlY3Rpb24gd2l0aCBncmlkICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cImZlYXR1cmVzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcHktMTYgc206cHktMjQgbGc6cHktMzJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctbWQgcHgtNCB0ZXh0LWNlbnRlciBzbTptYXgtdy0zeGwgc206cHgtNiBsZzpweC04IGxnOm1heC13LTd4bFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtOCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZlYXR1cmUubmFtZX0gY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93LXJvb3QgYmctZ3JheS01MCByb3VuZGVkLWxnIHB4LTYgcGItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMgYmctbGltZSByb3VuZGVkLW1kIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVhdHVyZS5pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC04IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogVGVzdGltb25pYWwgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTYgYmctbGltZSBsZzpwYi0wIGxnOnotMTAgbGc6cmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpteC1hdXRvIGxnOm1heC13LTd4bCBsZzpweC04IGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTMgbGc6Z2FwLThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGxnOi1teS04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtMCBoLTEvMiBiZy13aGl0ZSBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1tZCBweC00IHNtOm1heC13LTN4bCBzbTpweC02IGxnOnAtMCBsZzpoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xMCBhc3BlY3QtaC02IHJvdW5kZWQteGwgc2hhZG93LXhsIG92ZXJmbG93LWhpZGRlbiBzbTphc3BlY3Qtdy0xNiBzbTphc3BlY3QtaC03IGxnOmFzcGVjdC1ub25lIGxnOmgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBsZzpoLWZ1bGwgbGc6dy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmtpcnNjaGVubWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9JTUdfODAzMy1zY2FsZWQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGxnOm0tMCBsZzpjb2wtc3Bhbi0yIGxnOnBsLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1tZCBweC00IHNtOm1heC13LTJ4bCBzbTpweC02IGxnOnB4LTAgbGc6cHktMjAgbGc6bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC13aGl0ZSBvcGFjaXR5LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkuMzUyIDRDNC40NTYgNy40NTYgMSAxMy4xMiAxIDE5LjM2YzAgNS4wODggMy4wNzIgOC4wNjQgNi42MjQgOC4wNjQgMy4zNiAwIDUuODU2LTIuNjg4IDUuODU2LTUuODU2IDAtMy4xNjgtMi4yMDgtNS40NzItNS4wODgtNS40NzItLjU3NiAwLTEuMzQ0LjA5Ni0xLjUzNi4xOTIuNDgtMy4yNjQgMy41NTItNy4xMDQgNi42MjQtOS4wMjRMOS4zNTIgNHptMTYuNTEyIDBjLTQuOCAzLjQ1Ni04LjI1NiA5LjEyLTguMjU2IDE1LjM2IDAgNS4wODggMy4wNzIgOC4wNjQgNi42MjQgOC4wNjQgMy4yNjQgMCA1Ljg1Ni0yLjY4OCA1Ljg1Ni01Ljg1NiAwLTMuMTY4LTIuMzA0LTUuNDcyLTUuMTg0LTUuNDcyLS41NzYgMC0xLjI0OC4wOTYtMS40NC4xOTIuNDgtMy4yNjQgMy40NTYtNy4xMDQgNi41MjgtOS4wMjRMMjUuODY0IDR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHdhbnQgdG8gdGFrZSB5b3Ugd2l0aCB1cyBkaXJlY3RseSB0byB0aGUgcHJvZHVjZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCByZXBvcnQgd2lsbCBoYXZlIHBsZW50eSBvZiBpbWFnZXMgYW5kIGtleSBkYXRhIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2lseSBtZWFzdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBiYXRjaC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydGluZyBTdGFmZlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtY3lhbi0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2lyc2NoZW5tYW4gRW50ZXJwcmlzZXMgSW5jeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEJsb2cgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS01MCBweS0xNiBzbTpweS0yNCBsZzpweS0zMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteC1hdXRvIG1heC13LW1kIHB4LTQgc206bWF4LXctM3hsIHNtOnB4LTYgbGc6cHgtOCBsZzptYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LWxpbWUgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEp1c3QgSW5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgdHJhY2tpbmctdGlnaHQgc206dGV4dC00eGxcIj5cclxuICAgICAgICAgICAgICAgICAgTGF0ZXN0IFJlcG9ydHNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbXgtYXV0byBtYXgtdy1wcm9zZSB0ZXh0LXhsIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgV2UgYXJlIGJ1c3kgY29sbGVjdGluZyBkYXRhISBUYWtlIGEgbG9vayBhdCBzb21lIG9mIHRoZSBmcnVpdFxyXG4gICAgICAgICAgICAgICAgICB3ZSBhcmUgcGFja2FnaW5nIHVwIHRvZGF5LiBHZXQgaW4gdG91Y2ggd2l0aCBvdXIgc2FsZXNcclxuICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCBmb3IgbW9yZSBpbmZvIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbXgtYXV0byBtYXgtdy1tZCBweC00IGdyaWQgZ2FwLTggc206bWF4LXctbGcgc206cHgtNiBsZzpweC04IGxnOmdyaWQtY29scy0zIGxnOm1heC13LTd4bFwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcmVwb3J0cy8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZUJ1aWxkZXIocG9zdC5jb3ZlckltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpZHRoKDM4NClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWlnaHQoMTkyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctd2hpdGUgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3JlcG9ydHMvJHtwb3N0LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubGFiZWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3JlcG9ydHMvJHtwb3N0LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5sb3QgPyBwb3N0LmxvdC5uYW1lIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAtICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC52YXJpZXR5ID8gcG9zdC52YXJpZXR5Lm5hbWUgOiAnTi9BJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnIC0gJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LndlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3N0LndlZWsudG9VcHBlckNhc2UoKS5yZXBsYWNlKCdFRUstJywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ04vQSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAtICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocG9zdC5kYXRlKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtbWQgdGV4dC1ncmF5LTUwMCBzbTptdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcmVwb3J0cy8ke3Bvc3Quc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3Bvc3QuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21hcmtkb3duU3R5bGVzLm1hcmtkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5yZXBvcnRlci5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5yZXBvcnRlci5waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QucmVwb3J0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LnJlcG9ydGVyLnNsdWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnJlcG9ydGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItNVwiIGlkPVwiZmFxXCI+XHJcbiAgICAgICAgICAgIDxGQVEgaWQ9XCJmYXFcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIENUQSBTZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNTYgYmctaW5kaWdvLTYwMCBzbTpoLTcyIG1kOmFic29sdXRlIG1kOmxlZnQtMCBtZDpoLWZ1bGwgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5raXJzY2hlbm1hbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvY292aWQtZmFybWluZ2d1aWRlbGluZXMuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LW1kIHB4LTQgcHktMTIgc206bWF4LXctN3hsIHNtOnB4LTYgc206cHktMjAgbWQ6cHktMjggbGc6cHgtOCBsZzpweS0zMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWwtYXV0byBtZDp3LTEvMiBtZDpwbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTIgdGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgICBXZeKAmXJlIGhlcmUgdG8gaGVscFxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1sZyB0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIE91ciB0ZWFtIGlzIGRlZGljYXRlZCB0byBwcm92aWRpbmcgeW91IHdpdGggdXAgdG8gZGF0ZVxyXG4gICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBhYm91dCBvdXIgcHJvZHVjdHMgdG8gbWFrZSB5b3VyIHB1cmNoYXNpbmdcclxuICAgICAgICAgICAgICAgICAgZGVjaXNpb24gYW5kIHByb2Nlc3MgYXMgc2VhbWxlc3MgYXMgcG9zc2libGUuIElmIHlvdSBoYXZlIGFueVxyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnMgZmVsbCBmcmVlIHRvIHJlYWNoIG91dCB0byBvdXIgdGVhbSFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHJvdW5kZWQtbWQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6NjYxLTIwMS03NzQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktOTAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdpdmUgVXMgYSBDYWxsIVxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBob25lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbXItMSBtbC0zIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZm9vdGVyLWhlYWRpbmdcIj5cclxuICAgICAgICAgIDxoMiBpZD1cImZvb3Rlci1oZWFkaW5nXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICBGb290ZXJcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gcHQtMTIgcHgtNCBzbTptYXgtdy03eGwgc206cHgtNiBsZzpwdC0xNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6Z3JpZCB4bDpncmlkLWNvbHMtMyB4bDpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04IHhsOmNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXJzY2hlbm1hbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvbG9nb19zaGFkb3dyZW1vdmVkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzc1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgTGV2ZXJhZ2Ugb3VyIGRhaWx5IHByb2R1Y2UgZGF0YSB0byBlbXBvd2VyIHlvdXIgYnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgZGVjaXNpb24uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtmb290ZXJOYXZpZ2F0aW9uLnNvY2lhbC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgZ3JpZCBncmlkLWNvbHMtMiBnYXAtOCB4bDptdC0wIHhsOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydHNcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5yZXBvcnRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvb3Rlck5hdmlnYXRpb24uY29tcGFueS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZSBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvb3Rlck5hdmlnYXRpb24ucHJvZHVjZUluZm8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB5LThcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTQwMCB4bDp0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEtpcnNjaGVubWFuIEVudGVycHJpc2VzLCBJbmMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFsbFBvc3RzLCBwcmV2aWV3IH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiUG9wb3ZlciIsIlRyYW5zaXRpb24iLCJDbG91ZFVwbG9hZEljb24iLCJDb2dJY29uIiwiTG9ja0Nsb3NlZEljb24iLCJNZW51SWNvbiIsIlJlZnJlc2hJY29uIiwiU2VydmVySWNvbiIsIlNoaWVsZENoZWNrSWNvbiIsIlhJY29uIiwiUGhvbmVJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkV4dGVybmFsTGlua0ljb24iLCJpbWFnZUJ1aWxkZXIiLCJCbG9ja0NvbnRlbnQiLCJtYXJrZG93blN0eWxlcyIsIkZBUSIsIkhlYWQiLCJOZXdzbGV0dGVyRm9ybSIsImdhIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiZmVhdHVyZXMiLCJkZXNjcmlwdGlvbiIsImljb24iLCJibG9nUG9zdHMiLCJpZCIsInRpdGxlIiwiZGF0ZSIsImRhdGV0aW1lIiwiY2F0ZWdvcnkiLCJpbWFnZVVybCIsInByZXZpZXciLCJhdXRob3IiLCJyZWFkaW5nTGVuZ3RoIiwiZm9vdGVyTmF2aWdhdGlvbiIsInJlcG9ydHMiLCJjb21wYW55IiwicHJvZHVjZUluZm8iLCJzb2NpYWwiLCJwcm9wcyIsIkV4YW1wbGUiLCJhbGxQb3N0cyIsInBvc3RzIiwic2xpY2UiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwic2x1ZyIsImZlYXR1cmUiLCJwb3N0IiwiY292ZXJJbWFnZSIsIndpZHRoIiwidXJsIiwibGFiZWwiLCJsb3QiLCJ2YXJpZXR5Iiwid2VlayIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImJvZHkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsIm1hcmtkb3duIiwicmVwb3J0ZXIiLCJwaWN0dXJlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==