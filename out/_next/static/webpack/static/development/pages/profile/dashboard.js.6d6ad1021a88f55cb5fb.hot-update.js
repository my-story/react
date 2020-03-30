webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./components/profile/SurvivalKitProfile.js":
/*!**************************************************!*\
  !*** ./components/profile/SurvivalKitProfile.js ***!
  \**************************************************/
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
/* harmony import */ var _profile_TechniqueProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/TechniqueProfile */ "./components/profile/TechniqueProfile.js");
/* harmony import */ var _TipProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TipProfile */ "./components/profile/TipProfile.js");

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/profile/SurvivalKitProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import ProductKit from '../survivalKit/ProductKit';


 // import TipKit from '../survivalKit/TipKit';

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (length > 100) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, p, "...");
      }
    });
  }

  render() {
    const {
      kit,
      user
    } = this.state || {};
    console.log(this.state);

    if (kit === undefined || kit.influencer === undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "rectangle-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("img", {
        className: "rectangle-survival-title-picture",
        src: kit.influencer.profilePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("div", {
        className: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("h2", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, kit.title))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("h4", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, kit.influencer.name.firstName, " ", kit.influencer.name.lastName))), __jsx("img", {
        id: "survival-title-bookmark-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), kit.products.map((product, index) => {
        if (user.products.includes(product._id)) {// console.log(product)
        }
      }), kit.techniques.map((technique, index) => {
        if (user.techniques.includes(technique._id)) {
          return __jsx(_profile_TechniqueProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
            technique: technique,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          });
        }
      }), kit.tips.map((tip, index) => {
        if (user.tips.includes(tip._id)) {
          return __jsx(_TipProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
            tip: tip,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          });
        }
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SurvivalKitProfile);

/***/ })

})
//# sourceMappingURL=dashboard.js.6d6ad1021a88f55cb5fb.hot-update.js.map