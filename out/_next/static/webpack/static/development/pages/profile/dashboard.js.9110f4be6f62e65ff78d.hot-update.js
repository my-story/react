webpackHotUpdate("static/development/pages/profile/dashboard.js",{

/***/ "./pages/profile/dashboard.js":
/*!************************************!*\
  !*** ./pages/profile/dashboard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_survivalKit_SurvivalKitProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/survivalKit/SurvivalKitProfile */ "./components/survivalKit/SurvivalKitProfile.js");
/* harmony import */ var _components_contexts_QtyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contexts/QtyContext */ "./components/contexts/QtyContext.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contexts/UserContext */ "./components/contexts/UserContext.js");

var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/pages/profile/dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Profile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      user: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      this.setState({
        user: this.context.user
      });
    });
  }

  // getKitsProfile = () => {
  //     const {kit} = this.state;
  // }
  render() {
    const {
      user
    } = this.context;

    if (!this.state.user) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Loading...");
    } else {
      return __jsx("div", {
        className: "profile-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("div", {
        className: "profile-profile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("img", {
        id: "profile-picture",
        src: "https://www.pikpng.com/pngl/m/286-2863567_contact-profile-user-default-female-suit-comments-profile.png",
        alt: "Sage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Name")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "profile-glyph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Order History")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "profile-glyph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Order History")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "profile-glyph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Order History")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("img", {
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg",
        alt: "profile-glyph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Order History")))), __jsx("div", {
        className: "profile-dashboard-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, user.kits.map((kit, index) => {
        return __jsx(_components_survivalKit_SurvivalKitProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
          kit: kit,
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      })));
    }
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Profile, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=dashboard.js.9110f4be6f62e65ff78d.hot-update.js.map