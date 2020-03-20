webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./components/profile/TipProfile.js":
/*!******************************************!*\
  !*** ./components/profile/TipProfile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/profile/TipProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class TipProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      tip: "",
      size: "130px",
      divSize: "60px"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shrinkParagraph", p => {
      // const {kit} = this.state;
      const length = p.length;

      if (length > 180) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, p.substring(0, 180), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, p);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openCard", () => {
      let newSize = this.state.size === '130px' ? '180px' : '130px';
      let newDivSize = this.state.divSize === '60px' ? '110px' : '60px';
      this.setState({
        size: newSize,
        divSize: newDivSize
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showMore", () => {
      const {
        tip
      } = this.state;

      if (this.state.size === "130px") {
        return __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival-tip",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Show more"), __jsx("img", {
          id: "arrow-down-kit-tip",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }));
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx("p", {
          id: "tip-kit-box-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, tip.description, "."), __jsx("div", {
          onClick: this.openCard,
          className: "learn-more-survival-tip",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Show less"), __jsx("img", {
          style: {
            transform: "rotate(-180deg)"
          },
          id: "arrow-down-kit-tip",
          src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg",
          alt: "laern more arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })));
      }
    });
  }

  componentDidMount() {
    this.setState({
      tip: this.props.tip
    });
  }

  render() {
    const {
      tip
    } = this.state;

    if (tip === "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Loading...");
    } else {
      return __jsx("div", {
        style: {
          height: this.state.size
        },
        className: "tip-kit-div-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("div", {
        className: "tip-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("img", {
        id: "tip-bulb",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921452/TECHNIQUES_FONTGUIDEAsset_4_300x.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), __jsx("div", {
        className: "tip-kit-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontSize: "3.5vh",
          height: this.state.divSize
        },
        id: "tip-kit-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.shrinkParagraph(tip.header)), this.showMore()), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx("div", {
        className: "tip-survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TipProfile);

/***/ })

})
//# sourceMappingURL=dashboard.js.b4a978e3b0aff7de7708.hot-update.js.map