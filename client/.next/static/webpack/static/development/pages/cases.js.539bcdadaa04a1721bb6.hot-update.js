webpackHotUpdate("static\\development\\pages\\cases.js",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: db, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var prodConfig = {
  apiKey: "AIzaSyDTRUdu2HzX0OZL3Z2aF8ZAl96VjUHEjhA",
  authDomain: "carmen-network.firebaseapp.com",
  databaseURL: "https://carmen-network.firebaseio.com",
  projectId: "carmen-network",
  storageBucket: "carmen-network.appspot.com",
  messagingSenderId: "922225052268"
};
var devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};
var config = prodConfig;

if (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config);
}

var db = firebase__WEBPACK_IMPORTED_MODULE_0__["database"]();
var auth = firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=cases.js.539bcdadaa04a1721bb6.hot-update.js.map