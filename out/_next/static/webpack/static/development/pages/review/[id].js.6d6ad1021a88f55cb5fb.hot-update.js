webpackHotUpdate("static/development/pages/review/[id].js",{

/***/ "./components/survivalKit/ProductKit.js":
/*!**********************************************!*\
  !*** ./components/survivalKit/ProductKit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_AuthServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/AuthServices */ "./services/AuthServices.js");
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/contexts/UserContext */ "./components/contexts/UserContext.js");

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/survivalKit/ProductKit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class ProductKit extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      size: "150px",
      product: {},
      products: [],
      kit: ""
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
              lineNumber: 37
            },
            __self: this
          }, p.substring(0, 100), " ...");
        } else {
          return __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, p, "...");
        }
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, p);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkSurvivalKit", () => {
      const user = this.context.user;

      if (user.kits.includes(this.props.kit._id) || this.state.kit === this.props.kit._id) {
        return;
      } else {
        _services_AuthServices__WEBPACK_IMPORTED_MODULE_3__["default"].favoriteKit(user._id, this.props.kit._id).then(() => this.setState({
          kit: this.props.kit._id
        })).catch(error => console.log(error));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showMore", () => {
      if (this.state.size === "150px") {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Show more"), __jsx("img", {
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }));
      } else {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
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
            lineNumber: 75
          },
          __self: this
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkSurvivalKit", () => {
      const user = this.context.user;

      if (user.kits.includes(this.props.kit._id) || this.state.kit === this.props.kit._id) {
        return;
      } else {
        _services_AuthServices__WEBPACK_IMPORTED_MODULE_3__["default"].favoriteKit(user._id, this.props.kit._id).then(() => this.setState({
          kit: this.props.kit._id
        })).catch(error => console.log(error));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addFavorite", () => {
      const user = this.context.user;
      const {
        products
      } = this.state;

      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_2__["info"]('Log in to favorite');
      } else {
        if (user.products.includes(this.props.p._id || products.includes(this.props.p._id))) {
          return toastr__WEBPACK_IMPORTED_MODULE_2__["error"]("Product is already favorited!");
        } else {
          this.checkSurvivalKit();
          _services_AuthServices__WEBPACK_IMPORTED_MODULE_3__["default"].favoriteProduct(user._id, this.props.p._id).then(() => {
            toastr__WEBPACK_IMPORTED_MODULE_2__["info"]("Product was favorited!");
            var joined = this.state.products.concat(this.props.p._id);
            this.setState({
              products: joined
            });
          }).catch(error => console.log(error));
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addFavorite", () => {
      const user = this.context.user;

      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_2__["info"]('Log in to favorite');
      } else {
        if (user.products.includes(this.props.p._id) || this.state.products.includes(this.props.p._id)) {
          return toastr__WEBPACK_IMPORTED_MODULE_2__["error"]('Product recommendation has already been favorited :)');
        } else {
          this.checkSurvivalKit();
          _services_AuthServices__WEBPACK_IMPORTED_MODULE_3__["default"].favoriteProduct(user._id, this.props.p._id).then(() => {
            toastr__WEBPACK_IMPORTED_MODULE_2__["info"]("Product recommendation was favorited!");
          }).catch(error => console.log(error));
        }
      }
    });
  }

  componentDidMount() {
    const id = this.props.p._id;
    _services_KitServices__WEBPACK_IMPORTED_MODULE_4__["default"].getProductSurvival(id).then(product => this.setState({
      product
    })).catch(err => console.log(err));
  }

  render() {
    const product = this.props.product;
    const productMain = this.state.product.product;
    const p = this.props.p;

    if (productMain === undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "survival-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: productMain.images[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("div", {
        className: "kit-name-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("p", {
        id: "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, productMain.model)), __jsx("div", {
        className: "kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, productMain.category)))), __jsx("div", {
        className: "kit-description-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.shrinkParagraph(p.comment)), this.showMore()), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), __jsx("div", {
        className: "survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("img", {
        onClick: this.addFavorite,
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), __jsx("p", {
        id: "survival-prize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "$", productMain.prize), __jsx("button", {
        className: "survival-kit-add-to-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Add to card")));
    }
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ProductKit, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductKit);

/***/ })

})
//# sourceMappingURL=[id].js.6d6ad1021a88f55cb5fb.hot-update.js.map