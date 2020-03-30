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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getTipsList", kit => {
      const {
        user
      } = this.state;

      if (kit) {
        if (user.tips.length > 0) {
          kit.tips.map((tip, index) => {
            if (user.tips.includes(tip._id)) {
              return __jsx("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              }, __jsx("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              }, "Hola..........................")); // console.log(tip)
            } else {
              return __jsx("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              }, __jsx("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              }, "No tip"));
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
            if (user.techniques.includes(technique._id)) {// console.log(technique) 
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
            if (user.products.includes(product._id)) {// console.log(product)
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
            lineNumber: 95
          },
          __self: this
        }, p.substring(0, 100), " ...");
      } else {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
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
          lineNumber: 110
        },
        __self: this
      }, "...");
    } else {
      return __jsx("div", {
        className: "product-kit-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("div", {
        className: "rectangle-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("img", {
        className: "rectangle-survival-title-picture",
        src: kit.influencer.profilePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx("div", {
        className: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("h2", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, kit.title))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("h4", {
        id: "review-survival-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, kit.influencer.name.firstName, " ", kit.influencer.name.lastName))), __jsx("img", {
        id: "survival-title-bookmark-image",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, kit.title), this.getTipsList(kit), this.getTechniquesList(), this.getProductsList(), kit.techniques.map((technique, index) => {
        if (user.techniques.includes(technique._id)) {
          return __jsx(_profile_TechniqueProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
            technique: technique,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          });
        }
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SurvivalKitProfile);

/***/ }),

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
      technique: {}
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
    console.log(this.props);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }) // <div className="technique-survival-kit-card">
    // <div className="survival-card-image-div">
    //     <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921481/TECHNIQUES_FONTGUIDEAsset_6_300x.png"/>
    // </div>
    // <div className="technique-kit-description-div">
    //     <div className="technique-kit-name-category">
    //         <p id="technique-name"><b>{technique.title}</b></p>
    //         <p id="technique-word">Technique</p>
    //         <div className="technique-kit-category-bubble">
    //             <div>
    //                 <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
    //                 <span>Category</span>
    //             </div>
    //         </div>
    //     </div>
    //         {technique.subheading.map((t ,index) => {
    //             if(t.descriptions.length > 0){
    //                 return(
    //                     <div className="technique-kit-description-p">
    //                         <div className="technique-header-div">
    //                             <p><b>{t.header}</b></p>
    //                         </div>
    //                         {t.descriptions.map((description,index) => {
    //                             return(
    //                                 <div key={index} className="technique-steps">
    //                                 <p>- {description}</p><br></br>
    //                                 {/* <p>- description</p><br></br>         */}
    //                             </div>
    //                             )
    //                         })}
    //                     </div>
    //                 )
    //             }
    //         })}
    //     </div>
    //     {/* <div className="line-2"></div>
    //     <div className="survival-prize-div">
    //     <div className="survival-save-favorite">
    //             <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
    //         </div>
    //         <p id="survival-prize">$150</p>
    //         <button className="survival-kit-add-to-cart">Add to card</button>
    //     </div> */}
    //             <div className="line-2"></div>
    //         <div className="technique-survival-prize-div">
    //         <div className="survival-save-favorite">
    //             <img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
    //         </div>
    //         </div>
    // </div>
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TechniqueProfile);

/***/ }),

/***/ "./components/survivalKit/ProductKit.js":
false,

/***/ "./components/survivalKit/TipKit.js":
false,

/***/ "./services/AuthServices.js":
false

})
//# sourceMappingURL=dashboard.js.67bca1b755490a03e489.hot-update.js.map