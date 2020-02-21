webpackHotUpdate("static/development/pages/review/[id].js",{

/***/ "./components/survivalKit/SurvivalKit.js":
/*!***********************************************!*\
  !*** ./components/survivalKit/SurvivalKit.js ***!
  \***********************************************/
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

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/survivalKit/SurvivalKit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class SurvivalKit extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      kit: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_3__["default"].getKit(this.props.id).then(kit => {
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
            lineNumber: 32
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, p, "...");
      }
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

    if (kit === undefined || kit.products === undefined || kit.techniques === undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, kit.products.map((p, index) => {
        let product = p.product;
        return __jsx(_ProductKit__WEBPACK_IMPORTED_MODULE_4__["default"], {
          p: p,
          product: product,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }), kit.techniques.map((technique, index) => {
        return __jsx(_TechniqueKit__WEBPACK_IMPORTED_MODULE_5__["default"], {
          technique: technique,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      }), __jsx("div", {
        className: "technique-survival-kit-card",
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx("div", {
        className: "technique-rebound-kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        className: "technique-kit-name-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("p", {
        id: "technique-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Name of Technique")), __jsx("p", {
        id: "technique-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Technique"), __jsx("div", {
        className: "technique-kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Category")))), __jsx("div", {
        className: "technique-kit-description-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: "technique-header-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("p", {
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
      }, "Header"))), __jsx("div", {
        className: "technique-steps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "- description"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "- description"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))), __jsx("div", {
        className: "recomendation-technique-survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "recommend-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Rebound Recommends")), __jsx("div", {
        className: "recommend-div-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("img", {
        id: "recommend-product",
        src: "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s1200x630.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("div", {
        className: "recommend-div-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Title of product")), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet."), __jsx("p", {
        id: "recommend-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "$300.00"), __jsx("button", {
        className: "book-button-recommend add-to-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Add to Cart")))))), __jsx("div", {
        className: "techniques-kit-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("div", {
        className: "tip-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1576256025/cloud.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), __jsx("div", {
        className: "kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("p", {
        id: "tip-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "This is the name of the technique")), __jsx("p", {
        style: {
          color: "#F66C4F"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Technique"), __jsx("div", {
        className: "kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Category")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Category"))), __jsx("p", {
        id: "tip-intro-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Brief descriptin, yea yea , jajajaj esta tecnica es para energitarse despues de la siesta."), __jsx("div", {
        className: "learn-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "learn-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Learn more"), __jsx("img", {
        id: "arrow-down-kit",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
        alt: "laern more arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), __jsx("div", {
        className: "learn-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        className: "learn-technique",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("p", {
        id: "follow-these-steps",
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
      }, "Follow these steps:")), __jsx("ol", {
        style: {
          paddingLeft: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Drink 8 water drinks"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Workout"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Do it for the vine")))))), __jsx("div", {
        className: "tip-save-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite technique",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "save to favorites")))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SurvivalKit);

/***/ })

})
//# sourceMappingURL=[id].js.b3dee28d31f05380084c.hot-update.js.map