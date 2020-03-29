webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/cases/CaseForm.js":
/*!******************************************!*\
  !*** ./src/components/cases/CaseForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CaseForm; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useFormInput */ "./src/components/useFormInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui/commonjs/typography/src/Text */ "./node_modules/evergreen-ui/commonjs/typography/src/Text.js");
/* harmony import */ var evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui/commonjs/buttons/src/Button */ "./node_modules/evergreen-ui/commonjs/buttons/src/Button.js");
/* harmony import */ var evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OrganizationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OrganizationContext */ "./src/components/OrganizationContext.js");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! evergreen-ui/commonjs/toaster/src */ "./node_modules/evergreen-ui/commonjs/toaster/src/index.js");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\covid19\\client\\src\\components\\cases\\CaseForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function CaseForm(props) {
  var caseId = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var caseNumber = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var summary = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var location = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var country = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var latitude = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var longitude = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var date = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var caseName = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var caseStatus = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var casePriority = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var resolver = Object(_useFormInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');

  var createCase = function createCase() {
    var axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://stateset.network/api/stateset/createCase?", querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
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
    }), axiosConfig).then(function (res) {
      var caseId = res.data.caseId;
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default.a.success('Case ' + caseId + ' has been created.');
    })["catch"](function (error) {
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_8___default.a.danger(res.data);
    });
  };

  return __jsx("section", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-494372346" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-494372346" + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: createCase,
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Case Id"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseId, {
    className: "jsx-494372346" + " " + (caseId && caseId.className != null && caseId.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Case Name"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseName, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Description"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, summary, {
    className: "jsx-494372346" + " " + (summary && summary.className != null && summary.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "Country"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, country, {
    className: "jsx-494372346" + " " + (country && country.className != null && country.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Latitude"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, latitude, {
    className: "jsx-494372346" + " " + (latitude && latitude.className != null && latitude.className || "case"),
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Longitude"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, longitude, {
    className: "jsx-494372346" + " " + (longitude && longitude.className != null && longitude.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Date"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, date, {
    className: "jsx-494372346" + " " + (date && date.className != null && date.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Case Number"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseNumber, {
    className: "jsx-494372346" + " " + (caseNumber && caseNumber.className != null && caseNumber.className || "case"),
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Case Status"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseStatus, {
    className: "jsx-494372346" + " " + (caseStatus && caseStatus.className != null && caseStatus.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Case Priority"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, casePriority, {
    className: "jsx-494372346" + " " + (casePriority && casePriority.className != null && casePriority.className || "case"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "submit",
    invert: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Submit New Case"), __jsx("br", {
    className: "jsx-494372346",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "494372346",
    __self: this
  }, ".column.jsx-494372346{text-align:left;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.button.jsx-494372346{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.login.jsx-494372346{color:#FFF;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}h3.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:17px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}.case.jsx-494372346{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;margin-left:8px;}.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;text-align:center;}@media screen and (max-width:960px){.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-494372346{width:100%;padding:1.5rem 0;text-align:center;max-width:330px;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcY2FzZXNcXENhc2VGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHb0IsQUFHeUIsQUFTUSxBQStCYixBQUl5SCxBQVdBLEFBWXJILEFBWU8sQUFRRSxBQUlYLEFBTzJILFdBekQxSSxBQW1EcUIsSUF4QkMsQ0FuRUgsUUFTQyxJQW1GRSxLQTNGSixFQW1FQSxPQTFESyxJQW1GSCxHQTNGQyxFQW1FTCxXQXlCZCxDQW5Gc0IsRUEyREcsR0FuRVQsVUE0RUMsQUFRRSxNQW5GRCxDQVFPLEtBMkRQLEtBU0EsQUFRbEIsT0FuRkYsTUFtRW9CLEVBM0RBLEdBb0VwQixhQVJrQixFQTNERixJQThCQSxBQVdBLEFBMkNJLFVBbkZDLEFBMkRILElBN0JELEFBV0EsQUEyQ0ksWUF4QnJCLEdBM0RjLEFBOEJPLEFBV0EsQUEyQ0ksWUFuRlgsT0E4Qk0sQUFXQSxBQTJDSSxLQW5GTixhQThCQyxBQVdBLEFBMkNJLEdBbkZMLGNBOEJMLEFBV0EsQUEyQ0ksRUFuRkEsU0E4QkcsQUFXQSxBQTJDSSxNQW5GRyxZQThCM0IsQUFXQSxBQTJDSSxXQW5Ga0Msa0NBQ25CLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0Msa0JBQ0Esa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXGNvbXBvbmVudHNcXGNhc2VzXFxDYXNlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRm9ybUlucHV0IGZyb20gJy4uL3VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy90eXBvZ3JhcGh5L3NyYy9UZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9idXR0b25zL3NyYy9CdXR0b24nO1xyXG5pbXBvcnQgT3JnYW5pemF0aW9uQ29udGV4dCBmcm9tICcuLi9Pcmdhbml6YXRpb25Db250ZXh0JztcclxuaW1wb3J0IHRvYXN0ZXIgZnJvbSAnZXZlcmdyZWVuLXVpL2NvbW1vbmpzL3RvYXN0ZXIvc3JjJ1xyXG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZUZvcm0ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBjYXNlSWQgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgY2FzZU51bWJlciA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNvdW50cnkgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgbGF0aXR1ZGUgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgbG9uZ2l0dWRlID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGRhdGUgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgY2FzZU5hbWUgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgY2FzZVN0YXR1cyA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBjYXNlUHJpb3JpdHkgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgcmVzb2x2ZXIgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG5cclxuICAgIGxldCBjcmVhdGVDYXNlID0gKCkgPT4ge1xyXG4gIFxyXG4gICAgICBsZXQgYXhpb3NDb25maWcgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiUE9TVCxHRVQsT1BUSU9OUywgUFVULCBERUxFVEVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICBcclxuICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9zdGF0ZXNldC5uZXR3b3JrL2FwaS9zdGF0ZXNldC9jcmVhdGVDYXNlP2AsIFxyXG4gICAgICBxdWVyeXN0cmluZy5zdHJpbmdpZnkoeyBcclxuICAgICAgICBjYXNlSWQ6IGNhc2VJZCwgXHJcbiAgICAgICAgY2FzZU5hbWU6IGNhc2VOYW1lLFxyXG4gICAgICAgIGNhc2VOdW1iZXI6IGNhc2VOdW1iZXIsXHJcbiAgICAgICAgc3VtbWFyeTogc3VtbWFyeSxcclxuICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcclxuICAgICAgICBsYXRpdHVkZTogbGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBsb25naXR1ZGUsXHJcbiAgICAgICAgZGF0ZTogZGF0ZSwgXHJcbiAgICAgICAgY2FzZVN0YXR1czogY2FzZVN0YXR1cyxcclxuICAgICAgICBjYXNlUHJpb3JpdHk6IGNhc2VQcmlvcml0eSwgXHJcbiAgICAgICAgcmVzb2x2ZXI6IHJlc29sdmVyIH0pLCAgYXhpb3NDb25maWcpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhc2VJZCA9IHJlcy5kYXRhLmNhc2VJZDtcclxuICBcclxuICAgICAgICB0b2FzdGVyLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAnQ2FzZSAnICsgY2FzZUlkICsgJyBoYXMgYmVlbiBjcmVhdGVkLicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdG9hc3Rlci5kYW5nZXIocmVzLmRhdGEpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxucmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVDYXNlfT5cclxuICAgICAgICA8VGV4dCBzaXplPXs4MDB9PkNhc2UgSWQ8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlSWR9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8VGV4dD5DYXNlIE5hbWU8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlTmFtZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkRlc2NyaXB0aW9uPC9UZXh0PlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uc3VtbWFyeX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkNvdW50cnk8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jb3VudHJ5fSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+TGF0aXR1ZGU8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5sYXRpdHVkZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkxvbmdpdHVkZTwvVGV4dD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmxvbmdpdHVkZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkRhdGU8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5kYXRlfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBOdW1iZXI8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlTnVtYmVyfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBTdGF0dXM8L1RleHQ+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlU3RhdHVzfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBQcmlvcml0eTwvVGV4dD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmNhc2VQcmlvcml0eX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaW52ZXJ0PlN1Ym1pdCBOZXcgQ2FzZTwvQnV0dG9uPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLmNhc2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59Il19 */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\cases\\\\CaseForm.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.178a09d37004b252954b.hot-update.js.map