webpackHotUpdate("static/development/pages/admin/kitUpdate/[id].js",{

/***/ "./pages/admin/kitUpdate/[id].js":
/*!***************************************!*\
  !*** ./pages/admin/kitUpdate/[id].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/KitServices */ "./services/KitServices.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/contexts/UserContext */ "./components/contexts/UserContext.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/pages/admin/kitUpdate/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_10__["Input"];
const OPTIONS = ["Addiction", "Sleep", "Spirituality"]; //Kit/create = route. Needs Authentication 

class KitUpdate extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      kit: {
        title: "",
        influencer: false,
        products: [],
        product: [],
        comment: [],
        tips: [],
        header: [],
        description: [],
        techniques: [],
        techniqueTitle: "",
        techniqueHeader: [],
        techniqueDescription: [],
        category: "",
        role: ""
      },
      selectedItems: [],
      kitOld: {},
      kitUpdate: false,
      fixedArrays: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "componentDidMount", () => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_8__["default"].getKitAdmin(this.props.id).then(kit => this.setState({
        kit: {
          title: kit.title,
          influencer: kit.influencer,
          products: kit.products,
          tips: kit.tips,
          techniques: kit.techniques,
          category: kit.category,
          _id: kit._id
        }
      })).catch(err => console.log(err));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChange", e => {
      let {
        kit
      } = this.state;
      kit[e.target.name] = e.target.value;
      this.setState({
        kit
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleChange", selectedItems => {
      this.setState({
        kit: _objectSpread({}, this.state.kit, {
          category: selectedItems
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fixComments", () => {
      const {
        kit
      } = this.state;
      const {
        techniqueHeader,
        techniqueDescription,
        techniqueTitle
      } = this.state.kit;
      let descriptions = techniqueDescription.split(" , ");
      let title = techniqueTitle;
      let object = {
        title,
        technique: {
          techniqueHeader,
          descriptions
        }
      };
      let array = this.state.kit.products;
      let newArray = array.push(object);

      if (object !== "") {
        this.setState({
          products: newArray
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fixTips", () => {
      const {
        kit
      } = this.state;
      const {
        header,
        description
      } = this.state.kit;
      let object = {
        header,
        description
      };
      let array = this.state.kit.tips;
      let newArray = array.push(object);

      if (object !== "") {
        this.setState({
          tips: newArray
        }); // console.log(object, this.state.kit.products)
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "addSubHeading", () => {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fixTechniques", () => {
      const {
        kit
      } = this.state;
      const {
        techniqueHeader,
        techniqueDescription,
        techniqueTitle
      } = this.state.kit;
      let descriptions = techniqueDescription.split(" , ");
      let header = techniqueHeader;
      let title = techniqueTitle;
      let object = {
        title,
        technique: {
          header,
          descriptions
        }
      };
      let array = this.state.kit.techniques;
      let newArray = array.push(object);

      if (object !== "") {
        this.setState({
          techniques: newArray
        }); // console.log(object, this.state.kit.products)
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onSubmit", () => {
      let {
        kit
      } = this.state;

      if (kit === false) {
        toastr__WEBPACK_IMPORTED_MODULE_11__["error"]("Please complete all required fields");
        return;
      } else {
        this.addBackend(); // console.log("ready for backend")
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "addBackend", () => {
      let {
        kit
      } = this.state;
      const id = kit._id;
      _services_KitServices__WEBPACK_IMPORTED_MODULE_8__["default"].updateKit({
        kit: {
          title: kit.title,
          influencer: kit.influencer,
          products: kit.products,
          tips: kit.tips,
          techniques: kit.techniques,
          category: kit.category[0]
        }
      }, id) // console.log(kit)
      .then(k => {
        // this.setState({
        //   kit: kit,
        //   kitUpdate:true
        // })
        console.log(k);
      }).catch(e => console.log(e));
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
      kit,
      kitOld,
      selectedItems
    } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    console.log(this.state);

    if (this.state.kit) {
      return __jsx("div", {
        className: "create-survival-kit-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "title",
        placeholder: kitOld.title,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "influencer",
        placeholder: kit.influencer,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), __jsx(TextArea, {
        name: "product",
        rows: 4,
        type: "text",
        placeholder: "Add product ID",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), __jsx(TextArea, {
        name: "comment",
        rows: 4,
        type: "text",
        placeholder: "Add product",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), __jsx("button", {
        onClick: this.fixComments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, " Add products "), __jsx(TextArea, {
        name: "header",
        rows: 4,
        type: "text",
        placeholder: "Add tip header",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx(TextArea, {
        name: "description",
        rows: 4,
        type: "text",
        placeholder: "Add tip description",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), __jsx("button", {
        onClick: this.fixTips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, " Add tips "), __jsx(TextArea, {
        name: "techniqueTitle",
        rows: 4,
        type: "text",
        placeholder: "Add technique title",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), __jsx(TextArea, {
        name: "techniqueHeader",
        rows: 4,
        type: "text",
        placeholder: "Add technique header",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx(TextArea, {
        name: "techniqueDescription",
        rows: 4,
        type: "text",
        placeholder: "Add technique description",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), __jsx("button", {
        onClick: this.fixTechniques,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, " Add techniques "), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "category",
        placeholder: "Please enter category",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Select"], {
        mode: "multiple",
        placeholder: "This is the Category. ADMIN can create new categories",
        name: "category",
        onChange: this.handleChange,
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, filteredOptions.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Select"].Option, {
        key: item,
        value: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, item))), __jsx("button", {
        onClick: this.saveState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Save State"), __jsx("button", {
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Submit"));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "...");
    }
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(KitUpdate, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (KitUpdate);

/***/ })

})
//# sourceMappingURL=[id].js.53a4933ff3a57f85512b.hot-update.js.map