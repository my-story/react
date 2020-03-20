webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./components/profile/TechniqueProfile.js":
/*!************************************************!*\
  !*** ./components/profile/TechniqueProfile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/components/profile/TechniqueProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class TechniqueProfile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      technique: ""
    });
  }

  componentDidMount() {
    this.setState({
      technique: this.props.technique
    });
  }

  render() {
    const {
      technique
    } = this.state;
    console.log(this.props.technique);

    if (technique === "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Loading...");
    } else {
      return __jsx("div", {
        className: "technique-survival-kit-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("div", {
        className: "survival-card-image-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("img", {
        id: "survival-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921481/TECHNIQUES_FONTGUIDEAsset_6_300x.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), __jsx("div", {
        className: "technique-kit-description-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        className: "technique-kit-name-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("p", {
        id: "technique-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, technique.title)), __jsx("p", {
        id: "technique-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Technique"), __jsx("div", {
        className: "technique-kit-category-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Category")))), technique.subheading.map((t, index) => {
        if (t.descriptions.length > 0) {
          return __jsx("div", {
            className: "technique-kit-description-p",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("div", {
            className: "technique-header-div",
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
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, t.header))), t.descriptions.map((description, index) => {
            return __jsx("div", {
              key: index,
              className: "technique-steps",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            }, __jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            }, "- ", description), __jsx("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            }));
          }));
        }
      })), __jsx("div", {
        className: "line-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("div", {
        className: "technique-survival-prize-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        className: "survival-save-favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TechniqueProfile);

/***/ })

})
//# sourceMappingURL=dashboard.js.73879522d5d7fd2f03eb.hot-update.js.map