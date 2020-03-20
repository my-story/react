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
    console.log(this.props.technique);
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

/***/ })

})
//# sourceMappingURL=dashboard.js.da6083eb45fd9e6fb219.hot-update.js.map