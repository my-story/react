webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _auth_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/Logout */ "./components/auth/Logout.js");
/* harmony import */ var _contexts_QtyContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/QtyContext */ "./components/contexts/QtyContext.js");
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contexts/UserContext */ "./components/contexts/UserContext.js");
/* harmony import */ var _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/images/reboundLogo01.png */ "./public/images/reboundLogo01.png");
/* harmony import */ var _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\components\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 // import InfluencerServices from '../services/InfluencerServices';



 // import SearchBar from './influencer/SearchInfluencer';

class NavBar extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      logged: "",
      user: "",
      userLogged: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "adjustState", () => {
      this.setState({
        logged: this.props.islogged,
        user: this.props.user
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "componentDidMount", () => {
      this.adjustState();
      this.setState({
        userLogged: this.context.user
      });
    });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const {
      userLogged
    } = this.state;

    if (this.context.user.length !== 0) {
      // if (userLogged.length > 0) {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5
        }
      }, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_5___default.a, {
        maxDeviceWidth: 490,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "navbar-burder-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }
      }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_7__["slide"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }
      }, __jsx("img", {
        id: "logo-rebound-mobile",
        src: _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/profile/dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, "Profile"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      }, "Home"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, "Podcasts"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, "Store"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/kits",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }
      }, "Kits"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, "About Us"), __jsx("p", {
        style: {
          color: "white",
          borderBottom: "solid",
          marginLeft: "-40px",
          marginTop: "25px"
        },
        id: "mobile-nav logout",
        className: "menu-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }
      }, __jsx(_auth_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 143
        }
      }), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 168
        }
      }, "Logout")))))), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_5___default.a, {
        minDeviceWidth: 700,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "nav-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "navbar-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }
      }, __jsx("img", {
        id: "logo-rebound",
        src: _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, "SAGES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 8
        }
      }, "PODCASTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, "PRODUCTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/kits",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 8
        }
      }, "KITS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 8
        }
      }, "ABOUT"))), __jsx("div", {
        className: "dropdown-account-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Toggle, {
        variant: "success",
        id: "dropdown-basic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, userLogged.firstName, __jsx("img", {
        id: "profile-picture",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582837688/Pngtree_silence_silent_alien_distortion_3922389.png",
        alt: "Sage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 8
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
        href: "/profile/dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 8
        }
      }, "Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
        href: "#/action-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 8
        }
      }, "Another action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].Item, {
        href: "#/action-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 8
        }
      }, __jsx(_auth_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 8
        }
      }), "Logout"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/cart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "cart-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      }, __jsx("img", {
        id: "shopping-cart",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 7
        }
      }), __jsx(_contexts_QtyContext__WEBPACK_IMPORTED_MODULE_9__["QtyConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
        }
      }, obj => obj.getQtyState)))))));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 4
        }
      }, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_5___default.a, {
        maxDeviceWidth: 490,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "navbar-burder-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 4
        }
      }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_7__["slide"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 4
        }
      }, __jsx("img", {
        id: "logo-rebound-mobile",
        src: _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 5
        }
      }), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 5
        }
      }, "Home"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 5
        }
      }, "Podcasts"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 5
        }
      }, "Store"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/kits",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 5
        }
      }, "Kits"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 5
        }
      }, "About Us"), __jsx("a", {
        id: "mobile-nav",
        className: "menu-item",
        href: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 5
        }
      }, "Log in")))), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_5___default.a, {
        minDeviceWidth: 700,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "nav-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "navbar-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }
      }, __jsx("img", {
        id: "logo-rebound",
        src: _public_images_reboundLogo01_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 7
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }, "SAGES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }, "PODCASTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }
      }, "PRODUCTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/kits",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 8
        }
      }, "KITS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 8
        }
      }, "ABOUT"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 6
        }
      }, __jsx("span", {
        id: "login-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 7
        }
      }, "LOG IN"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/cart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "cart-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 7
        }
      }, __jsx("img", {
        id: "shopping-cart",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 8
        }
      }), __jsx(_contexts_QtyContext__WEBPACK_IMPORTED_MODULE_9__["QtyConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 118
        }
      }, obj => obj.getQtyState)))))));
    }
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, "contextType", _contexts_UserContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.45480fb1ada821335d2a.hot-update.js.map