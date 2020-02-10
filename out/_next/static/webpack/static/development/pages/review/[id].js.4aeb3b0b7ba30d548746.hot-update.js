webpackHotUpdate("static/development/pages/review/[id].js",{

/***/ "./components/reviews/ProductKit.js":
/*!******************************************!*\
  !*** ./components/reviews/ProductKit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/reviews/ProductKit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class ProductKit extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_2__["default"].getKit(this.props.id).then(kit => {
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
            lineNumber: 35
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, p, "...");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "learnMore", e => {
      const clase = e.target.className;

      if (clase !== "open") {}
    });
  }

  static getInitialProps({
    query: {
      id
    }
  }) {
    return {
      id
    };
  }

  render() {
    const {
      kit
    } = this.state || {};
    console.log(kit);

    if (kit === undefined || kit.products === undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, kit.products.map((p, index) => {
        let product = p.product;
        return __jsx("div", {
          key: index,
          className: "survival-kit-card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("div", {
          className: "survival-card-image-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx("img", {
          id: "survival-image",
          src: product.images,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        })), __jsx("div", {
          className: "kit-description-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("p", {
          id: "product-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, product.model)), __jsx("div", {
          className: "kit-category-bubble",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("img", {
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, product.category))), __jsx("div", {
          className: "kit-description-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, this.shrinkParagraph(product.description)), __jsx("div", {
          className: "learn-more-survival",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Learn more"), __jsx("img", {
          id: "arrow-down-kit",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }))), __jsx("div", {
          className: "line-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), __jsx("div", {
          className: "survival-prize-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("div", {
          className: "survival-save-favorite",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("img", {
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
          alt: "bookmark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
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
      }), __jsx("div", {
        className: " open survival-kit-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        className: "survival-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: "https://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Manduka"), __jsx("p", {
        id: "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Pro Yoga Mat")), __jsx("div", {
        className: "kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Category")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Category"))), __jsx("div", {
        className: "learn-more-survival",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Learn more"), __jsx("img", {
        id: "arrow-down-kit",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
        alt: "laern more arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx("div", {
        className: "survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), __jsx("p", {
        id: "survival-prize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "$150"), __jsx("button", {
        className: "survival-kit-add-to-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Add to card"))), __jsx("div", {
        onClick: this.learnMore,
        className: "open survival-kit-card tips-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("div", {
        className: "tip-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1576256025/cloud.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: "#F66C4F"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Technique"), __jsx("p", {
        id: "tip-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "This is the name of the technique")), __jsx("div", {
        className: "kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Category")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Category"))), __jsx("p", {
        id: "tip-intro-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Brief descriptin, yea yea , jajajaj esta tecnica es para energitarse despues de la siesta."), __jsx("div", {
        className: "learn-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        className: "learn-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Learn more"), __jsx("img", {
        id: "arrow-down-kit",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
        alt: "laern more arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), __jsx("div", {
        className: "learn-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("div", {
        className: "learn-technique",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("p", {
        id: "follow-these-steps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Follow these steps:")), __jsx("ol", {
        style: {
          paddingLeft: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Drink 8 water drinks"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Workout"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Do it for the vine")))))), __jsx("div", {
        className: "tip-save-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite technique",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "save to favorites")))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductKit);

/***/ })

})
//# sourceMappingURL=[id].js.4aeb3b0b7ba30d548746.hot-update.js.map