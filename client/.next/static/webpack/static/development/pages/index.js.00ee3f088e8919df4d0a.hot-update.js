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
/* harmony import */ var evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! evergreen-ui/commonjs/layers/src/Card */ "./node_modules/evergreen-ui/commonjs/layers/src/Card.js");
/* harmony import */ var evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _OrganizationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OrganizationContext */ "./src/components/OrganizationContext.js");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! evergreen-ui/commonjs/toaster/src */ "./node_modules/evergreen-ui/commonjs/toaster/src/index.js");
/* harmony import */ var evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);

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
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://stateset.network/api/stateset/createCase?", querystring__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
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
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_9___default.a.success('Case ' + caseId + ' has been created.');
    })["catch"](function (error) {
      evergreen_ui_commonjs_toaster_src__WEBPACK_IMPORTED_MODULE_9___default.a.danger(res.data);
    });
  };

  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(evergreen_ui_commonjs_layers_src_Card__WEBPACK_IMPORTED_MODULE_7___default.a, {
    elevation: 1,
    backrgound: "white",
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
  }, __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: 700,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Case Id"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseId, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Case Name"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseName, {
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
  }, "Description"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, summary, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Country"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, country, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Latitude"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, latitude, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Longitude"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, longitude, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Date"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, date, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Case Number"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseNumber, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Case Status"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, caseStatus, {
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
  }), __jsx(evergreen_ui_commonjs_typography_src_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Case Priority"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, casePriority, {
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
  }), __jsx(evergreen_ui_commonjs_buttons_src_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "494372346",
    __self: this
  }, ".column.jsx-494372346{text-align:left;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.button.jsx-494372346{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.login.jsx-494372346{color:#FFF;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}h3.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:17px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}.case.jsx-494372346{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;margin-left:8px;}.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;text-align:center;}@media screen and (max-width:960px){.row.jsx-494372346{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-494372346{width:100%;padding:1.5rem 0;text-align:center;max-width:330px;}h2.jsx-494372346{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjb3ZpZDE5XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcY2FzZXNcXENhc2VGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHb0IsQUFHeUIsQUFTUSxBQStCYixBQUl5SCxBQVdBLEFBWXJILEFBWU8sQUFRRSxBQUlYLEFBTzJILFdBekQxSSxBQW1EcUIsSUF4QkMsQ0FuRUgsUUFTQyxJQW1GRSxLQTNGSixFQW1FQSxPQTFESyxJQW1GSCxHQTNGQyxFQW1FTCxXQXlCZCxDQW5Gc0IsRUEyREcsR0FuRVQsVUE0RUMsQUFRRSxNQW5GRCxDQVFPLEtBMkRQLEtBU0EsQUFRbEIsT0FuRkYsTUFtRW9CLEVBM0RBLEdBb0VwQixhQVJrQixFQTNERixJQThCQSxBQVdBLEFBMkNJLFVBbkZDLEFBMkRILElBN0JELEFBV0EsQUEyQ0ksWUF4QnJCLEdBM0RjLEFBOEJPLEFBV0EsQUEyQ0ksWUFuRlgsT0E4Qk0sQUFXQSxBQTJDSSxLQW5GTixhQThCQyxBQVdBLEFBMkNJLEdBbkZMLGNBOEJMLEFBV0EsQUEyQ0ksRUFuRkEsU0E4QkcsQUFXQSxBQTJDSSxNQW5GRyxZQThCM0IsQUFXQSxBQTJDSSxXQW5Ga0Msa0NBQ25CLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0Msa0JBQ0Esa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcY292aWQxOVxcY2xpZW50XFxzcmNcXGNvbXBvbmVudHNcXGNhc2VzXFxDYXNlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRm9ybUlucHV0IGZyb20gJy4uL3VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy90eXBvZ3JhcGh5L3NyYy9UZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy9idXR0b25zL3NyYy9CdXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdldmVyZ3JlZW4tdWkvY29tbW9uanMvbGF5ZXJzL3NyYy9DYXJkJztcclxuaW1wb3J0IE9yZ2FuaXphdGlvbkNvbnRleHQgZnJvbSAnLi4vT3JnYW5pemF0aW9uQ29udGV4dCc7XHJcbmltcG9ydCB0b2FzdGVyIGZyb20gJ2V2ZXJncmVlbi11aS9jb21tb25qcy90b2FzdGVyL3NyYydcclxuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2VGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgY2FzZUlkID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VOdW1iZXIgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGxhdGl0dWRlID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGxvbmdpdHVkZSA9IHVzZUZvcm1JbnB1dCgnJyk7XHJcbiAgICBjb25zdCBkYXRlID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VOYW1lID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGNhc2VTdGF0dXMgPSB1c2VGb3JtSW5wdXQoJycpO1xyXG4gICAgY29uc3QgY2FzZVByaW9yaXR5ID0gdXNlRm9ybUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHJlc29sdmVyID0gdXNlRm9ybUlucHV0KCcnKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlQ2FzZSA9ICgpID0+IHtcclxuICBcclxuICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIlBPU1QsR0VULE9QVElPTlMsIFBVVCwgREVMRVRFXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vc3RhdGVzZXQubmV0d29yay9hcGkvc3RhdGVzZXQvY3JlYXRlQ2FzZT9gLCBcclxuICAgICAgcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgY2FzZUlkOiBjYXNlSWQsIFxyXG4gICAgICAgIGNhc2VOYW1lOiBjYXNlTmFtZSxcclxuICAgICAgICBjYXNlTnVtYmVyOiBjYXNlTnVtYmVyLFxyXG4gICAgICAgIHN1bW1hcnk6IHN1bW1hcnksXHJcbiAgICAgICAgY291bnRyeTogY291bnRyeSxcclxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlLFxyXG4gICAgICAgIGRhdGU6IGRhdGUsIFxyXG4gICAgICAgIGNhc2VTdGF0dXM6IGNhc2VTdGF0dXMsXHJcbiAgICAgICAgY2FzZVByaW9yaXR5OiBjYXNlUHJpb3JpdHksIFxyXG4gICAgICAgIHJlc29sdmVyOiByZXNvbHZlciB9KSwgIGF4aW9zQ29uZmlnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBjYXNlSWQgPSByZXMuZGF0YS5jYXNlSWQ7XHJcbiAgXHJcbiAgICAgICAgdG9hc3Rlci5zdWNjZXNzKFxyXG4gICAgICAgICAgJ0Nhc2UgJyArIGNhc2VJZCArICcgaGFzIGJlZW4gY3JlYXRlZC4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRvYXN0ZXIuZGFuZ2VyKHJlcy5kYXRhKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxDYXJkIGVsZXZhdGlvbj17MX0gYmFja3Jnb3VuZD1cIndoaXRlXCIgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVDYXNlfT5cclxuICAgICAgICA8VGV4dCBzaXplPXs3MDB9PkNhc2UgSWQ8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uY2FzZUlkfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBOYW1lPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmNhc2VOYW1lfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+RGVzY3JpcHRpb248L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uc3VtbWFyeX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkNvdW50cnk8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uY291bnRyeX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkxhdGl0dWRlPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmxhdGl0dWRlfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+TG9uZ2l0dWRlPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmxvbmdpdHVkZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkRhdGU8L1RleHQ+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhc2VcIiB7Li4uZGF0ZX0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUZXh0PkNhc2UgTnVtYmVyPC9UZXh0PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXNlXCIgey4uLmNhc2VOdW1iZXJ9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8VGV4dD5DYXNlIFN0YXR1czwvVGV4dD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlU3RhdHVzfSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFRleHQ+Q2FzZSBQcmlvcml0eTwvVGV4dD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FzZVwiIHsuLi5jYXNlUHJpb3JpdHl9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaW52ZXJ0PlN1Ym1pdCBOZXcgQ2FzZTwvQnV0dG9uPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLmNhc2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\covid19\\\\client\\\\src\\\\components\\\\cases\\\\CaseForm.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.00ee3f088e8919df4d0a.hot-update.js.map