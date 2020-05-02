webpackHotUpdate("static\\development\\pages\\review\\[id].js",{

/***/ "./pages/review/[id].js":
/*!******************************!*\
  !*** ./pages/review/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confirm-alert */ "./node_modules/react-confirm-alert/lib/index.js");
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-confirm-alert/src/react-confirm-alert.css */ "./node_modules/react-confirm-alert/src/react-confirm-alert.css");
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ReviewServices */ "./services/ReviewServices.js");
/* harmony import */ var _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/InfluencerServices */ "./services/InfluencerServices.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contexts/UserContext */ "./components/contexts/UserContext.js");
/* harmony import */ var _components_reviews_ReviewUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reviews/ReviewUpdate */ "./components/reviews/ReviewUpdate.js");
/* harmony import */ var _components_cart_CartBubble__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/cart/CartBubble */ "./components/cart/CartBubble.js");
/* harmony import */ var _components_votes_Votes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/votes/Votes */ "./components/votes/Votes.js");
/* harmony import */ var _components_influencer_InfluencerCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/influencer/InfluencerCard */ "./components/influencer/InfluencerCard.js");
/* harmony import */ var _components_survivalKit_SurvivalKit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/survivalKit/SurvivalKit */ "./components/survivalKit/SurvivalKit.js");
/* harmony import */ var _services_KitServices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/KitServices */ "./services/KitServices.js");

var _jsxFileName = "C:\\Users\\sebas\\Desktop\\code\\rebound\\react\\pages\\review\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















class ReviewOne extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      influencers: [],
      review: {},
      kit: {},
      disableVoteButtons: false,
      update: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getkit", id => {
      _services_KitServices__WEBPACK_IMPORTED_MODULE_15__["default"].getKit(id).then(kit => {
        this.setState({
          kit: kit
        });
      }).catch(() => toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Error occured while fetching. Please try later.'));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchInfluencer", () => {
      _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_8__["default"].getAll().then(influencers => this.setState(_objectSpread({}, this.state, {
        influencers
      }))).catch(err => console.log(err));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "update", () => {
      this.setState({
        update: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "upvote", () => {
      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_4__["info"]('You must be logged in to leave vote.');
      }

      if (!this.state.disableVoteButtons) {
        this.setState({
          disableVoteButtons: true
        });

        if (this.isUpvoted()) {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__["default"].undoVoteUp(this.state.review.influencer._id, this.context.user._id).then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);
              return {
                review: _objectSpread({}, state.review, {
                  upvotes
                }),
                disableVoteButtons: false
              };
            });
          }).catch(() => {
            toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        } else {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__["default"].voteUp(this.state.review.influencer._id, this.context.user._id).then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id).concat({
                author: this.context.user._id
              });
              return {
                review: _objectSpread({}, state.review, {
                  downvotes,
                  upvotes
                }),
                disableVoteButtons: false,
                upvoted: true
              };
            });
          }).catch(() => {
            toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "downvote", () => {
      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_4__["info"]('You must be logged in to leave vote.');
      }

      if (!this.state.disableVoteButtons) {
        this.setState({
          disableVoteButtons: true
        });

        if (this.isDownvoted()) {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__["default"].undoVoteDown(this.state.review.influencer._id, this.context.user._id).then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);
              return {
                review: _objectSpread({}, state.review, {
                  downvotes
                }),
                disableVoteButtons: false
              };
            });
          }).catch(() => {
            toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        } else {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__["default"].voteDown(this.state.review.influencer._id, this.context.user._id).then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id).concat({
                author: this.context.user._id
              });
              return {
                review: _objectSpread({}, state.review, {
                  downvotes,
                  upvotes
                }),
                disableVoteButtons: false
              };
            });
          }).catch(() => {
            toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isDownvoted", () => this.state.review.downvotes && this.state.review.downvotes.find(vote => vote.author === this.context.user._id));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isUpvoted", () => this.state.review.upvotes && this.state.review.upvotes.find(vote => vote.author === this.context.user._id));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "votes", () => {
      if (this.state.review.upvotes && this.state.review.downvotes) {
        return this.state.review.upvotes.length - this.state.review.downvotes.length;
      } else {
        return 0;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "audioDraw", () => {
      const {
        review
      } = this.state;

      if (this.state.review.voicenote === "") {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 9
          }
        });
      } else {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 9
          }
        }, __jsx("audio", {
          ref: "audio_tag",
          src: review.voicenote,
          controls: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }
        }));
      }

      ;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "videoDraw", () => {
      if (this.state.review.video === "") {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 9
          }
        });
      } else {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 9
          }
        }, __jsx("iframe", {
          src: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
          frameBorder: "0",
          allow: "autoplay; encrypted-media",
          allowFullScreen: true,
          title: "video",
          className: "video-youtube",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 11
          }
        }));
      }

      ;
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

  componentDidMount() {
    this.fetchInfluencer();
    const {
      id
    } = this.props;
    _services_ReviewServices__WEBPACK_IMPORTED_MODULE_7__["default"].getReview(id).then(review => {
      this.setState({
        review: review
      });
    }).catch(() => toastr__WEBPACK_IMPORTED_MODULE_4__["error"]('Error occured while fetching. Please try later.'));
    this.getkit(id);
  }

  render() {
    console.log(this.props.id);
    const review = this.state.review || {};
    const influencer = this.state.review.influencer || {};
    const influencers = this.state.influencers;
    const kit = this.state.kit;

    if (this.state.kit === {} || this.state.kit === undefined || this.state.review.influencer === undefined) {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }
      }, "Loadingg........"));
    } else {
      return __jsx("div", {
        style: {
          height: "350vh"
        },
        className: "review-outer-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "review-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "review-heading-div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: influencer.profilePic,
        alt: "Expert Image",
        className: "influencer-pic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 17
        }
      }, review.title)), __jsx("div", {
        className: "subheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "category-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "author",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 19
        }
      }, influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName), __jsx("span", {
        id: "category-bubble-review",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 15
        }
      }, "Athlete")), __jsx("div", {
        className: "profile-instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "profile-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 19
        }
      }, influencer.name && influencer.name.firstName, "'s profile"), __jsx("img", {
        className: "instagram",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
        alt: "instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 19
        }
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 17
        }
      }, this.videoDraw())), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "survival-kit-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 13
        }
      }, "Few words about ", influencer.name && influencer.name.firstName), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }
      }, influencer.description), __jsx("div", {
        className: "books-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 18
        }
      }, "BOOKS"), __jsx("div", {
        className: "book-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "book-card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 20
        }
      }, __jsx("img", {
        height: "auto",
        width: "100%",
        src: "https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg",
        alt: "Book",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 22
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 22
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 25
        }
      }, "The Happiness Hypothesis: Jonathan Haidt")), __jsx("button", {
        className: "book-button add-to-cart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 22
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 66
        }
      }, "Buy on Amazon"))))), __jsx("section", {
        className: "survival-habits-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 15
        }
      }, __jsx("button", {
        className: "clicked-show",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 17
        }
      }, "SURVIVAL KITS")), __jsx(_components_survivalKit_SurvivalKit__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: influencer._id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 17
        }
      })), this.audioDraw(), __jsx("div", {
        className: "bottom-review-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 13
        }
      }, __jsx(_components_votes_Votes__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isDownvoted: this.isDownvoted(),
        isUpvoted: this.isUpvoted(),
        votes: this.votes(),
        voteDown: this.downvote,
        voteUp: this.upvote,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "share-buttons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "share-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }
      }, "SHARE"), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["WhatsappShareButton"], {
        url: "zapos.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: "instagram",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
        alt: "instagram button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 56
        }
      })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["FacebookShareButton"], {
        url: "headspace.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: "instagram",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg",
        alt: "facebook button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 60
        }
      })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["TwitterShareButton"], {
        url: "amazon.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: "instagram",
        src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg",
        alt: "twitter button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 56
        }
      })))))), __jsx("div", {
        className: "expert-card-section-review",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "div-review-cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 13
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 13
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 17
        }
      }, "Similar Sages"))), __jsx("div", {
        className: "cards-review",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 13
        }
      }, influencers.map((i, index) => {
        return __jsx(_components_influencer_InfluencerCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
          review: "yes",
          i: i,
          index: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 17
          }
        });
      }))));
    }
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ReviewOne, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ReviewOne);

/***/ })

})
//# sourceMappingURL=[id].js.50f0b7dd9757eb6add1e.hot-update.js.map