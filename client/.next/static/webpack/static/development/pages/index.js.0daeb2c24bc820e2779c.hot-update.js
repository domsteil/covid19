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
      lineNumber: 30,
      columnNumber: 3
    }
  }), __jsx(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true,
    title: "Corona Virus Case Submission Network",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 2
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 2
    }
  }, __jsx("title", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Corona Virus Case Submission Network"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    variants: textVariants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Corona Virus Case Submission Network"), __jsx("h2", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "The purpose of this network is for new case submission. The current process is dependent on CSV files and google sheets that are being used. This network serves as an alternative to Submit a New Case of the Corona Virus disease. Data being submitted can be scheduled to be exported into CSV format for statistical analytics and deep learning. "), __jsx("h1", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "To Submit a New Case use this form:"), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_components_cases_CaseForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }))), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("br", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("h2", {
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "This web application and the covid case network is ", __jsx("a", {
    href: "https://github.com/domsteil/covid19",
    className: "jsx-3208219427",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 62
    }
  }, "open-source"), " and distributed under the Apache 2.0 license."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3208219427",
    __self: _this
  }, "main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}b.jsx-3208219427{font-weight:normal;}h1.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}@-webkit-keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@keyframes typing-jsx-3208219427{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-3208219427{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-3208219427{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}hr.jsx-3208219427{clear:both;visibility:hidden;}ul.jsx-3208219427{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-3208219427{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-3208219427{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-3208219427{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.Page.jsx-3208219427{background-color:#F4F6F8;}main.jsx-3208219427{background-color:#F4F6F8;text-align:center;}div.jsx-3208219427{background-color:#F4F6F8;text-align:center;}body.jsx-3208219427{background-color:#F4F6F8;text-align:center;}.column.jsx-3208219427{width:100%;text-align:center;max-width:330px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-3208219427{text-align:center;}.column2.jsx-3208219427{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EWSxBQUs4QixBQUtGLEFBS0UsQUFLSixBQUltSCxBQVd6SCxBQU9ILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFRekgsQUFNWSxBQU9oQixBQVVRLEFBTUcsQUFTRyxBQUtBLEFBS0YsQUFLRSxBQUtkLEFBU08sQUFJRixRQS9HSCxHQU5TLEFBT1IsQUF3Q1EsQUFhWixBQTZDUSxLQWFMLEVBSmYsQ0FqSUUsQUFxRkosQ0F6RDRCLENBd0NQLEFBUU4sSUEzRk8sQUFLQSxBQUtBLEFBZ0NnQixBQTBFcEMsQUFJb0IsQUFLQSxBQUtBLElBbkdsQixBQStDQSxBQTBEZ0IsQUFhbEIsR0FqRTBCLEFBUUgsV0EzRnZCLEFBS0EsQUFLRSxBQThHRixBQUtBLEFBS0UsRUFNZ0IsS0FwRFEsR0FRTCxRQTZDQSxPQXBEakIsSUFRaUIsTUFZRixFQWlDRSxXQTVDRixJQVlFLElBaUNyQixTQTVDRixNQVlvQixnQkFDRSxFQTFGQSxBQTZCQSxBQVdBLEFBVUYsWUFDRCxFQWxERyxBQTZCQyxBQVdBLEVBa0RyQixPQXZDcUIsS0FsREMsQ0E2QkcsQUFXRCxTQVdBLE1BbERBLEdBd0NELENBWEMsUUFzQnBCLE1BbERtQixFQXdDTixFQVhNLFNBWUMsSUF4Q1AsSUE2QkEsT0E1Qk8sR0F3Q3BCLENBWG9CLGNBNUJwQixJQTZCQSIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBDYXNlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Nhc2VzL0Nhc2VGb3JtJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcclxuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XHJcblxyXG5sZXQgZWFzaW5nID0gWzAuMTc1LCAwLjg1LCAwLjQyLCAwLjk2XTtcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICBleGl0OiB7IHk6IDEwMCwgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBlYXNpbmcgfSB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMSwgZHVyYXRpb246IDAuNSwgZWFzZTogZWFzaW5nIH1cclxuICB9XHJcbn07XHJcblxyXG5cclxuU2VudHJ5LmluaXQoe2RzbjogXCJodHRwczovLzc0MTZiMDJjZGE0MzQ3NjM5OTMyMjVmZWUzZTM0YzM2QHNlbnRyeS5pby8xODYwMzY1XCJ9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgPEhlYWRlci8+XHJcblx0PFBhZ2UgY2VudGVyIHRpdGxlPVwiQ29yb25hIFZpcnVzIENhc2UgU3VibWlzc2lvbiBOZXR3b3JrXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5Db3JvbmEgVmlydXMgQ2FzZSBTdWJtaXNzaW9uIE5ldHdvcms8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImV4aXRcIiBhbmltYXRlPVwiZW50ZXJcIiBleGl0PVwiZXhpdFwiPlxyXG4gICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17dGV4dFZhcmlhbnRzfT5cclxuICAgICAgPGgxPkNvcm9uYSBWaXJ1cyBDYXNlIFN1Ym1pc3Npb24gTmV0d29yazwvaDE+XHJcbiAgICAgIDxoMj5UaGUgcHVycG9zZSBvZiB0aGlzIG5ldHdvcmsgaXMgZm9yIG5ldyBjYXNlIHN1Ym1pc3Npb24uIFRoZSBjdXJyZW50IHByb2Nlc3MgaXMgZGVwZW5kZW50IG9uIENTViBmaWxlcyBhbmQgZ29vZ2xlIHNoZWV0cyB0aGF0IGFyZSBiZWluZyB1c2VkLiBcclxuICAgICAgICAgICAgVGhpcyBuZXR3b3JrIHNlcnZlcyBhcyBhbiBhbHRlcm5hdGl2ZSB0byBTdWJtaXQgYSBOZXcgQ2FzZSBvZiB0aGUgQ29yb25hIFZpcnVzIGRpc2Vhc2UuXHJcbiAgICAgICAgICAgIERhdGEgYmVpbmcgc3VibWl0dGVkIGNhbiBiZSBzY2hlZHVsZWQgdG8gYmUgZXhwb3J0ZWQgaW50byBDU1YgZm9ybWF0IGZvciBzdGF0aXN0aWNhbCBhbmFseXRpY3MgYW5kIGRlZXAgbGVhcm5pbmcuIDwvaDI+XHJcbiAgICAgIDxoMT5UbyBTdWJtaXQgYSBOZXcgQ2FzZSB1c2UgdGhpcyBmb3JtOjwvaDE+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxDYXNlRm9ybSAvPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGgyPlRoaXMgd2ViIGFwcGxpY2F0aW9uIGFuZCB0aGUgY292aWQgY2FzZSBuZXR3b3JrIGlzIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZG9tc3RlaWwvY292aWQxOVwiPm9wZW4tc291cmNlPC9hPiBhbmQgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgbGljZW5zZS48L2gyPlxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbiAgbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblx0ZGl2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGIge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuXHRoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbiAgZnJvbSB7IHdpZHRoOiAwIH1cclxuICB0byB7IHdpZHRoOiAxMDAlIH1cclxufVxyXG5cclxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcclxuICBmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XHJcbn1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICAgdWwge1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29ubmVjdGVkIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLlBhZ2Uge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGODtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblx0ZGl2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cdDwvUGFnZT5cclxuICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG5cdClcclxuIl19 */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\pages\\\\index.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.0daeb2c24bc820e2779c.hot-update.js.map