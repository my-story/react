webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./components/survivalKit/SurvivalKitProfile.js":
/*!******************************************************!*\
  !*** ./components/survivalKit/SurvivalKitProfile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var _ProductKit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductKit */ "./components/survivalKit/ProductKit.js");
/* harmony import */ var _TechniqueKit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TechniqueKit */ "./components/survivalKit/TechniqueKit.js");
/* harmony import */ var _TipKit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TipKit */ "./components/survivalKit/TipKit.js");

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/survivalKit/SurvivalKitProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class SurvivalKitProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      user: "",
      kit: "",
      tips: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      this.setState({
        user: this.props.user
      });
      _services_KitServices__WEBPACK_IMPORTED_MODULE_3__["default"].getKitProfile(this.props.kit).then(kit => {
        this.setState({
          kit
        });
      }).catch(err => console.log(err));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getTipsList", () => {
      const {
        user,
        kit
      } = this.state;

      if (kit) {
        if (user.tips.length > 0) {
          kit.tips.map((tip, index) => {
            if (user.tips.includes(tip._id)) {
              console.log(tip);
            }
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getTechniquesList", () => {
      const {
        kit,
        user
      } = this.state; //    console.log(kit.tips.some(x => user.tips.includes(x._id)));

      if (kit) {
        if (user.techniques.length > 0) {
          kit.techniques.map((technique, index) => {
            if (user.techniques.includes(technique._id)) {
              console.log(technique);
            }
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getProductsList", () => {
      const {
        kit,
        user
      } = this.state;

      if (kit) {
        if (user.products.length > 0) {
          kit.products.map((product, index) => {
            if (user.products.includes(product._id)) {
              console.log(product);
            }
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (length > 100) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, p, "...");
      }
    });
  }

  render() {
    const {
      kit
    } = this.state || {};
    console.log(this.state);

    if (kit === undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.getTechniquesList(), this.getTipsList(), this.getProductsList());
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SurvivalKitProfile);

/***/ })

})
//# sourceMappingURL=dashboard.js.42bdb852db3c70cbaa91.hot-update.js.map