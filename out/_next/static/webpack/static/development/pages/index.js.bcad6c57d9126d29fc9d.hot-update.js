webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/InfluencerServices */ "./services/InfluencerServices.js");
/* harmony import */ var _components_influencer_SearchInfluencer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/influencer/SearchInfluencer */ "./components/influencer/SearchInfluencer.js");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-modal */ "./node_modules/react-responsive-modal/lib/index.es.js");
/* harmony import */ var _components_survivalKit_KitMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/survivalKit/KitMap */ "./components/survivalKit/KitMap.js");

var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Slider from "react-slick";




 // import InfluencerItem from "../src/components/influencer/InfluencerItem";
// import InfluencerCard from '../components/influencer/InfluencerCard';




class InfluencerList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      influencers: [],
      category: ["Athlete", "Musician", "Tech", "Artist"],
      search_expert: [],
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterCategory", e => {
      _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_4__["default"].searchFilter(e.target.value).then(res => this.setState({
        influencers: res
      })).catch(err => console.log(err));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenModal", () => {
      this.setState({
        open: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      this.setState({
        open: false
      });
    });
  }

  render() {
    const {
      open
    } = this.state;
    return __jsx("div", {
      className: "index-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, "Rebound Sages"), __jsx("link", {
      rel: "canonical",
      href: "http://mysite.com/example",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "https://img.icons8.com/ios-filled/64/000000/circled-down.png",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "expert-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "expert-video",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx("video", {
      className: "video",
      controls: true,
      src: "https://res.cloudinary.com/dpt8pbi8n/video/upload/v1567711319/y2mate.com_-_joe_rogan_where_does_freedom_of_speech_end_jCPfU45L3iM_1080p.mp4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }))), __jsx("div", {
      className: "expert-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "expert-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, " Find the tools to overcome your adversities."), __jsx("div", {
      className: "expert-message-p-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, __jsx("p", {
      id: "expert-message-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, "We talk to professionals that have dealt with tremendous adversity, and find out what tips, techniques and products they used especifically for overcoming that problem.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 14
      }
    }, __jsx("button", {
      id: "survival-kit-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 20
      }
    }, "SEE SURVIVAL KITS"))))), __jsx("h2", {
      style: {
        paddingBottom: "20px",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 67
      }
    }, "Top Survival Kits")), __jsx(_components_survivalKit_KitMap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "top-categories",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, "Top Categories")), __jsx("div", {
      className: "categories-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "categories-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "blue-dash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx("img", {
      id: "category-on-dash",
      src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790965/icons8-sport-96_1.png",
      alt: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 20
      }
    }, "Athlete")), __jsx("div", {
      id: "dash-under",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    })), __jsx("div", {
      id: "categories-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "blue-dash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("img", {
      id: "category-on-dash",
      src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790640/icons8-paragraph-96_1.png",
      alt: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 37
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 20
      }
    }, "Author")), __jsx("div", {
      id: "dash-under",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    })), __jsx("div", {
      id: "categories-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "blue-dash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("img", {
      id: "category-on-dash",
      src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790797/icons8-comedy-100_2.png",
      alt: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 37
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 20
      }
    }, "Comedian")), __jsx("div", {
      id: "dash-under",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    })), __jsx("div", {
      id: "categories-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "blue-dash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, __jsx("img", {
      id: "category-on-dash",
      src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790797/icons8-comedy-100_2.png",
      alt: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 37
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 20
      }
    }, "Comedian")), __jsx("div", {
      id: "dash-under",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: "category-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 16
      }
    }, "All Categories: ")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, __jsx("span", {
      id: "category-bubble",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, "Athlete"), __jsx("span", {
      id: "category-bubble",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, "Author"), __jsx("span", {
      id: "category-bubble",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, "Comedian"), __jsx("span", {
      id: "category-bubble",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, "Comedian")))), __jsx("div", {
      className: "index-best-book-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "best-book-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, "The Best Book This Week")), __jsx("div", {
      className: "best-book-info-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "best-book-pictures",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("img", {
      id: "best-book-cover",
      src: "https://miro.medium.com/max/3000/1*r6rpoanJHbvwZpSW7mZjzg.jpeg",
      alt: "Book Cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }), __jsx("img", {
      id: "best-book-author",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Robert_Greene_B%26W.jpg",
      alt: "Author Picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "best-book-title-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, "The Alchemist, 25th Anniversary: A Fable About Following Your Dream "), __jsx("p", {
      id: "best-author-p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, "Paulo Coelho | #86 in Books on Amazon"), __jsx("p", {
      id: "best-description-p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago."), __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, "Get the Book")))), __jsx("div", {
      className: "heyhey-expert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }, __jsx("img", {
      id: "absurd-question-image",
      src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1583447725/05.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "heyhey-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "hey-message-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }
    }, "Hey! Your opinion really matters to us."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, "Feel free to let us know what you feel about the website, or any Survival Tips you would like to see.")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, __jsx("button", {
      onClick: this.onOpenModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 52
      }
    }, "Share an opinion")), __jsx(react_responsive_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "pop-up-css",
      className: "modal",
      open: open,
      onClose: this.onCloseModal,
      center: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "heading-pop-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 19
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 23
      }
    }, "Share your opinion")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 19
      }
    }, "We greatly appreciate you feedback!")), __jsx("ol", {
      className: "questions-pop-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    }, __jsx("li", {
      id: "question-modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }, "Have you enjoyed the overall experience of the application?"), __jsx("div", {
      id: "number-bar",
      className: "btn-group mr-2",
      role: "group",
      "aria-label": "First group",
      clicked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 23
      }
    }, "1"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 23
      }
    }, "2"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 23
      }
    }, "3"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 23
      }
    }, "4"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 23
      }
    }, "5"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 23
      }
    }, "6"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 23
      }
    }, "7"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 23
      }
    }, "8"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 23
      }
    }, "9"), __jsx("button", {
      type: "button",
      id: "pop-up-bttn",
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 23
      }
    }, "10")), __jsx("li", {
      id: "question-modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 21
      }
    }, "Have you encountered any problems when using our site?"), __jsx("div", {
      className: "yes-no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }, __jsx("div", {
      class: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 23
      }
    }, __jsx("input", {
      class: "form-check-input",
      type: "radio",
      name: "exampleRadios",
      id: "exampleRadios1",
      value: "option1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }), __jsx("label", {
      class: "form-check-label",
      for: "exampleRadios1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, "Yes")), __jsx("div", {
      class: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 23
      }
    }, __jsx("input", {
      class: "form-check-input",
      type: "radio",
      name: "exampleRadios",
      id: "exampleRadios2",
      value: "option2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }), __jsx("label", {
      class: "form-check-label",
      for: "exampleRadios2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, "No"))), __jsx("li", {
      id: "question-modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }
    }, "If you would like to see something improve in this page what would it be?"), __jsx("textarea", {
      class: "form-control",
      id: "exampleFormControlTextarea1",
      rows: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "button-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    }, __jsx("button", {
      className: "feedback-submit-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "login-font",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 62
      }
    }, "Submit"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InfluencerList);

/***/ })

})
//# sourceMappingURL=index.js.bcad6c57d9126d29fc9d.hot-update.js.map