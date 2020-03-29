webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container */ "./src/components/container.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var _components_cases_CaseForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cases/CaseForm */ "./src/components/cases/CaseForm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\covid19\\client\\src\\pages\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var easing = [0.175, 0.85, 0.42, 0.96];
var textVariants = {
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    center: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }
  }), __jsx(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true,
    title: "Corona Virus Case Submission Network",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 2
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 2
    }
  }, __jsx("title", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Corona Virus Case Submission Network"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    variants: textVariants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Corona Virus Case Submission Network"), __jsx("h2", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "The purpose of this network is for new case submission. The current process is dependent on CSV files and google sheets that are being used. This network serves as an alternative to Submit a New Case of the Corona Virus disease. Data being submitted can be scheduled to be exported into CSV format for statistical analytics and deep learning. "), __jsx("h2", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "New Nodes can join the network and start submitting cases by messaging the request to Stateset."), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "To Submit a New Case use this form:"), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_components_cases_CaseForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }))), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("h2", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "This web application and the covid case network is ", __jsx("a", {
    href: "https://github.com/domsteil/covid19",
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 62
    }
  }, "open-source"), " and distributed under the Apache 2.0 license."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3208219427",
    __self: _this
  }, "main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}b.jsx-3208219427{font-weight:normal;}h1.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}@-webkit-keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}ul.jsx-3208219427{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-3208219427{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-3208219427{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-3208219427{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.Page.jsx-3208219427{background-color:#F4F6F8;}main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}.column.jsx-3208219427{width:100%;text-align:center;max-width:330px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-3208219427{text-align:center;}.column2.jsx-3208219427{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEWSxBQUs4QixBQUtGLEFBS0UsQUFLSixBQUltSCxBQVd6SCxBQU9ILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFRekgsQUFNWSxBQU9oQixBQVVRLEFBTUcsQUFTRyxBQUtBLEFBS0YsQUFLRSxBQUtkLEFBU08sQUFJRixRQS9HSCxHQU5TLEFBT1IsQUF3Q1EsQUFhWixBQTZDUSxLQWFMLEVBSmYsQ0FqSUUsQUFxRkosQ0F6RDRCLENBd0NQLEFBUU4sSUEzRk8sQUFLQSxBQUtBLEFBZ0NnQixBQTBFcEMsQUFJb0IsQUFLQSxBQUtBLElBbkdsQixBQStDQSxBQTBEZ0IsQUFhbEIsR0FqRTBCLEFBUUgsV0EzRnZCLEFBS0EsQUFLRSxBQThHRixBQUtBLEFBS0UsRUFNZ0IsS0FwRFEsR0FRTCxRQTZDQSxPQXBEakIsSUFRaUIsTUFZRixFQWlDRSxXQTVDRixJQVlFLElBaUNyQixTQTVDRixNQVlvQixnQkFDRSxFQTFGQSxBQTZCQSxBQVdBLEFBVUYsWUFDRCxFQWxERyxBQTZCQyxBQVdBLEVBa0RyQixPQXZDcUIsS0FsREMsQ0E2QkcsQUFXRCxTQVdBLE1BbERBLEdBd0NELENBWEMsUUFzQnBCLE1BbERtQixFQXdDTixFQVhNLFNBWUMsSUF4Q1AsSUE2QkEsT0E1Qk8sR0F3Q3BCLENBWG9CLGNBNUJwQixJQTZCQSIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBDYXNlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Nhc2VzL0Nhc2VGb3JtJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcclxuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XHJcblxyXG5sZXQgZWFzaW5nID0gWzAuMTc1LCAwLjg1LCAwLjQyLCAwLjk2XTtcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICBleGl0OiB7IHk6IDEwMCwgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBlYXNpbmcgfSB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMSwgZHVyYXRpb246IDAuNSwgZWFzZTogZWFzaW5nIH1cclxuICB9XHJcbn07XHJcblxyXG5cclxuU2VudHJ5LmluaXQoe2RzbjogXCJodHRwczovLzc0MTZiMDJjZGE0MzQ3NjM5OTMyMjVmZWUzZTM0YzM2QHNlbnRyeS5pby8xODYwMzY1XCJ9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciBjZW50ZXI+XHJcblxyXG48SGVhZGVyLz5cclxuXHQ8UGFnZSBjZW50ZXIgdGl0bGU9XCJDb3JvbmEgVmlydXMgQ2FzZSBTdWJtaXNzaW9uIE5ldHdvcmtcIj5cclxuXHQ8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvcm9uYSBWaXJ1cyBDYXNlIFN1Ym1pc3Npb24gTmV0d29yazwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiZXhpdFwiIGFuaW1hdGU9XCJlbnRlclwiIGV4aXQ9XCJleGl0XCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXt0ZXh0VmFyaWFudHN9PlxyXG4gICAgICA8aDE+Q29yb25hIFZpcnVzIENhc2UgU3VibWlzc2lvbiBOZXR3b3JrPC9oMT5cclxuICAgICAgPGgyPlRoZSBwdXJwb3NlIG9mIHRoaXMgbmV0d29yayBpcyBmb3IgbmV3IGNhc2Ugc3VibWlzc2lvbi4gVGhlIGN1cnJlbnQgcHJvY2VzcyBpcyBkZXBlbmRlbnQgb24gQ1NWIGZpbGVzIGFuZCBnb29nbGUgc2hlZXRzIHRoYXQgYXJlIGJlaW5nIHVzZWQuIFxyXG4gICAgICAgICAgICBUaGlzIG5ldHdvcmsgc2VydmVzIGFzIGFuIGFsdGVybmF0aXZlIHRvIFN1Ym1pdCBhIE5ldyBDYXNlIG9mIHRoZSBDb3JvbmEgVmlydXMgZGlzZWFzZS5cclxuICAgICAgICAgICAgRGF0YSBiZWluZyBzdWJtaXR0ZWQgY2FuIGJlIHNjaGVkdWxlZCB0byBiZSBleHBvcnRlZCBpbnRvIENTViBmb3JtYXQgZm9yIHN0YXRpc3RpY2FsIGFuYWx5dGljcyBhbmQgZGVlcCBsZWFybmluZy4gPC9oMj5cclxuICAgICAgPGgyPk5ldyBOb2RlcyBjYW4gam9pbiB0aGUgbmV0d29yayBhbmQgc3RhcnQgc3VibWl0dGluZyBjYXNlcyBieSBtZXNzYWdpbmcgdGhlIHJlcXVlc3QgdG8gU3RhdGVzZXQuPC9oMj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGgxPlRvIFN1Ym1pdCBhIE5ldyBDYXNlIHVzZSB0aGlzIGZvcm06PC9oMT5cclxuICAgICAgPGJyLz5cclxuICAgICAgPENhc2VGb3JtIC8+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aDI+VGhpcyB3ZWIgYXBwbGljYXRpb24gYW5kIHRoZSBjb3ZpZCBjYXNlIG5ldHdvcmsgaXMgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb21zdGVpbC9jb3ZpZDE5XCI+b3Blbi1zb3VyY2U8L2E+IGFuZCBkaXN0cmlidXRlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBsaWNlbnNlLjwvaDI+XHJcblxyXG48c3R5bGUganN4PntgXHJcblxyXG5cclxuICBtYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHRkaXYge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG5cdGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICBmcm9tIHsgd2lkdGg6IDAgfVxyXG4gIHRvIHsgd2lkdGg6IDEwMCUgfVxyXG59XHJcblxyXG4vKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG4gIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbiAgNTAlIHsgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cclxufVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb25uZWN0ZWQge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuUGFnZSB7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBtYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHRkaXYge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4yIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblx0PC9QYWdlPlxyXG4gIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcblx0KVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\pages\\\\index.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.9e00aee6556a1389f2c2.hot-update.js.map