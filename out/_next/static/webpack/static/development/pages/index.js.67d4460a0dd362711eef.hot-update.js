webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/survivalKit/KitMap.js":
/*!******************************************!*\
  !*** ./components/survivalKit/KitMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var _components_survivalKit_KitCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/survivalKit/KitCard */ "./components/survivalKit/KitCard.js");

var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\components\\survivalKit\\KitMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class KitMap extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      kits: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchKits", () => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_2__["default"].getAll().then(kits => this.setState({
        kits
      })).catch(error => console.log(error));
    });
  }

  componentDidMount() {
    this.fetchKits();
  }

  render() {
    const {
      kits
    } = this.state;
    return __jsx("div", {
      className: "expert-card-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, kits.map((i, index) => {
      return __jsx("div", {
        className: "sage-outer-most-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, __jsx(_components_survivalKit_KitCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        kit: i,
        index: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (KitMap);

/***/ })

})
//# sourceMappingURL=index.js.67d4460a0dd362711eef.hot-update.js.map