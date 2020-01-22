webpackHotUpdate("static/development/pages/shipping_address.js",{

/***/ "./pages/shipping_address.js":
/*!***********************************!*\
  !*** ./pages/shipping_address.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _constants_Countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/Countries */ "./constants/Countries.js");
/* harmony import */ var _services_OrderServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/OrderServices */ "./services/OrderServices.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contexts/UserContext */ "./components/contexts/UserContext.js");


var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/pages/shipping_address.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class ShippingRates extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      products: "",
      address: {
        name: "",
        company: "",
        street1: "",
        city: "",
        state: "",
        zip: "",
        country: ""
      },
      addressCheck: "",
      billing: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "componentDidMount", () => {
      const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__["default"]();
      this.setState({
        products: cookies.get('Products'),
        countries: _constants_Countries__WEBPACK_IMPORTED_MODULE_7__["default"]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onChange", e => {
      let {
        address
      } = this.state;
      address[e.target.name] = e.target.value;
      this.setState({
        address
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "validateAddress", () => {
      const {
        address
      } = this.state;

      if (address.name === '' || address.street1 === '' || address.city === '' || address.state === '' || address.zip === '' || address.country === '') {
        toastr__WEBPACK_IMPORTED_MODULE_5__["error"]("Missing Fields");
        return;
      } else {
        _services_OrderServices__WEBPACK_IMPORTED_MODULE_8__["default"].checkAddress(address).then(res => {
          this.setState({
            addressCheck: res
          });
          this.context.setAddress(res);
        }).catch(e => console.log(e));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "useBilling", e => {
      if (e.target.checked) {
        this.setState({
          billing: true
        });
      } else {
        this.setState({
          billing: false
        });
      }
    });
  }

  getTotal() {
    let counter = 0;
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__["default"]();
    const cookieArr = cookies.get("Products");

    if (cookieArr !== undefined) {
      for (let i = 0; i < cookieArr.length; i++) {
        counter += cookieArr[i].prize * cookieArr[i].qty;
      }
    }

    return counter;
  }

  render() {
    console.log(this.state);

    if (this.getTotal() === 0) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      return null;
    }

    if (this.state.addressCheck === "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "name",
        placeholder: "Enter Name",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "company",
        placeholder: "Enter Company",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "street1",
        placeholder: "Enter Complete Street",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "city",
        placeholder: "Enter City",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "state",
        placeholder: "Enter State ",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "zip",
        type: "number",
        placeholder: "Enter Zipcode",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "country",
        placeholder: "Enter Country",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
        onChange: this.useBilling,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Use this as your Billing Address?"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("button", {
        onClick: () => this.validateAddress(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Check address")));
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: '/shipping_rate',
        query: {
          address: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.addressCheck),
          billing: this.state.billing
        }
      });
      return null;
    }
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(ShippingRates, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ShippingRates);

/***/ })

})
//# sourceMappingURL=shipping_address.js.49bc26d9c8f030bf854a.hot-update.js.map