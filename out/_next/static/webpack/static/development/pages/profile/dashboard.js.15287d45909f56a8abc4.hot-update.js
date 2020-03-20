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
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");

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
            lineNumber: 22
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Show more"), __jsx("img", {
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }));
      } else {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
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
            lineNumber: 31
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
              lineNumber: 48
            },
            __self: this
          }, p.substring(0, 100), " ...");
        } else {
          return __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, p, "...");
        }
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, p);
      }
    });
  }

  componentDidMount() {
    const id = this.props.product._id;
    _services_KitServices__WEBPACK_IMPORTED_MODULE_2__["default"].getProductSurvival(id).then(product => this.setState({
      product
    })).catch(err => console.log(err));
  }

  render() {
    const {
      product
    } = this.state;
    console.log(this.state);

    if (product === "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        className: "survival-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: product.product.images[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("div", {
        className: "kit-name-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("p", {
        id: "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, product.product.model)), __jsx("div", {
        className: "kit-category-bubble",
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
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, product.category)))), __jsx("div", {
        className: "kit-description-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.shrinkParagraph(product.comment)), this.showMore()), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx("div", {
        className: "survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("img", {
        onClick: this.addFavorite,
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx("p", {
        id: "survival-prize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "$", product.prize), __jsx("button", {
        className: "survival-kit-add-to-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Add to card")));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductKitProfile);

/***/ })

})
//# sourceMappingURL=dashboard.js.15287d45909f56a8abc4.hot-update.js.map