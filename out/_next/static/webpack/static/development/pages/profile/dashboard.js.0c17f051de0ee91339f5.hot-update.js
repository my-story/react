webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./components/profile/ProductKitProfile.js":
/*!*************************************************!*\
  !*** ./components/profile/ProductKitProfile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/profile/ProductKitProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class ProductKitProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      product: "",
      size: "150px"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showMore", () => {
      if (this.state.size === "150px") {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, "Show more"), __jsx("img", {
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }));
      } else {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "Show less"), __jsx("img", {
          style: {
            transform: "rotate(-180deg)"
          },
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openCard", () => {
      let newSize = this.state.size === '150px' ? '300px' : '150px';
      this.setState({
        size: newSize
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (this.state.size === "150px") {
        if (length > 100) {
          return __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, p.substring(0, 100), " ...");
        } else {
          return __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, p, "...");
        }
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, p);
      }
    });
  }

  componentDidMount() {
    this.setState({
      product: this.props.product
    });
  }

  render() {
    const {
      product
    } = this.state;

    if (product === "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "waiting on product survival kit");
    } else {
      return __jsx("div", {
        style: {
          height: this.state.size
        },
        className: "survival-kit-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        className: "survival-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: product.images[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "kit-name-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("p", {
        id: "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, product.model)), __jsx("div", {
        className: "kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, product.category)))), __jsx("div", {
        className: "kit-description-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.shrinkParagraph(p.comment)), this.showMore()), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("div", {
        className: "survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("img", {
        onClick: this.addFavorite,
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx("p", {
        id: "survival-prize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "$", product.prize), __jsx("button", {
        className: "survival-kit-add-to-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Add to card")));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductKitProfile);

/***/ }),

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
/* harmony import */ var _ProductKitProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductKitProfile */ "./components/profile/ProductKitProfile.js");

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showMore", () => {
      if (this.state.size === "150px") {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Show more"), __jsx("img", {
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      } else {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Show less"), __jsx("img", {
          style: {
            transform: "rotate(-180deg)"
          },
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (length > 100) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
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
          lineNumber: 72
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("div", {
        className: "rectangle-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("img", {
        className: "rectangle-survival-title-picture",
        src: kit.influencer.profilePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("div", {
        className: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("h2", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, kit.title))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("h4", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, kit.influencer.name.firstName, " ", kit.influencer.name.lastName))), __jsx("img", {
        id: "survival-title-bookmark-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), kit.products.map((product, index) => {
        if (user.products.includes(product._id)) {
          return __jsx(_ProductKitProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
            product: product,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          });
        }
      }), kit.techniques.map((technique, index) => {
        if (user.techniques.includes(technique._id)) {
          return __jsx(_profile_TechniqueProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
            technique: technique,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
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
              lineNumber: 108
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
//# sourceMappingURL=dashboard.js.0c17f051de0ee91339f5.hot-update.js.map