webpackHotUpdate("static/development/pages/review/[id].js",{

/***/ "./pages/review/[id].js":
/*!******************************!*\
  !*** ./pages/review/[id].js ***!
  \******************************/
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
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-confirm-alert */ "./node_modules/react-confirm-alert/lib/index.js");
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-confirm-alert/src/react-confirm-alert.css */ "./node_modules/react-confirm-alert/src/react-confirm-alert.css");
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/ReviewServices */ "./services/ReviewServices.js");
/* harmony import */ var _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/InfluencerServices */ "./services/InfluencerServices.js");
/* harmony import */ var _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/contexts/UserContext */ "./components/contexts/UserContext.js");
/* harmony import */ var _components_reviews_ReviewUpdate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reviews/ReviewUpdate */ "./components/reviews/ReviewUpdate.js");
/* harmony import */ var _components_cart_CartBubble__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/cart/CartBubble */ "./components/cart/CartBubble.js");
/* harmony import */ var _components_votes_Votes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/votes/Votes */ "./components/votes/Votes.js");
/* harmony import */ var _components_influencer_InfluencerCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/influencer/InfluencerCard */ "./components/influencer/InfluencerCard.js");
/* harmony import */ var _components_reviews_SurvivalKit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reviews/SurvivalKit */ "./components/reviews/SurvivalKit.js");







var _jsxFileName = "/home/sebastiang/Desktop/code/projectsFLash/mystory-website/react/pages/review/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }
















class ReviewOne extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      influencers: [],
      review: {},
      disableVoteButtons: false,
      update: false,
      kit: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fetchInfluencer", () => {
      _services_InfluencerServices__WEBPACK_IMPORTED_MODULE_14__["default"].getAll().then(influencers => this.setState(_objectSpread({}, this.state, {
        influencers
      }))).catch(err => console.log(err));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "update", () => {
      this.setState({
        update: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "delete", () => {
      let {
        id
      } = this.props;
      _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].deleteReview(this.context.user, id).then(() => {
        toastr__WEBPACK_IMPORTED_MODULE_10__["success"]("deleted the review");
      }).catch(err => console.log(err));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "upvote", () => {
      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_10__["info"]('You must be logged in to leave vote.');
      }

      if (!this.state.disableVoteButtons) {
        this.setState({
          disableVoteButtons: true
        });

        if (this.isUpvoted()) {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].undoVoteUp(this.state.review.influencer._id, this.context.user._id).then(() => {
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
            toastr__WEBPACK_IMPORTED_MODULE_10__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        } else {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].voteUp(this.state.review.influencer._id, this.context.user._id).then(() => {
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
            toastr__WEBPACK_IMPORTED_MODULE_10__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "downvote", () => {
      if (!this.context.islogged) {
        return toastr__WEBPACK_IMPORTED_MODULE_10__["info"]('You must be logged in to leave vote.');
      }

      if (!this.state.disableVoteButtons) {
        this.setState({
          disableVoteButtons: true
        });

        if (this.isDownvoted()) {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].undoVoteDown(this.state.review.influencer._id, this.context.user._id).then(() => {
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
            toastr__WEBPACK_IMPORTED_MODULE_10__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        } else {
          _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].voteDown(this.state.review.influencer._id, this.context.user._id).then(() => {
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
            toastr__WEBPACK_IMPORTED_MODULE_10__["error"]('Internal server error');
            this.setState({
              disableVoteButtons: false
            });
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "saidNo", () => {
      toastr__WEBPACK_IMPORTED_MODULE_10__["error"]("didn't delete the review");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "submit", () => {
      Object(react_confirm_alert__WEBPACK_IMPORTED_MODULE_8__["confirmAlert"])({
        title: 'Confirm to delete this review',
        message: 'Are you sure to do this.',
        buttons: [{
          label: 'Yes',
          onClick: () => this.delete()
        }, {
          label: 'No',
          onClick: () => this.saidNo()
        }]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "isDownvoted", () => this.state.review.downvotes && this.state.review.downvotes.find(vote => vote.author === this.context.user._id));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "isUpvoted", () => this.state.review.upvotes && this.state.review.upvotes.find(vote => vote.author === this.context.user._id));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "votes", () => {
      if (this.state.review.upvotes && this.state.review.downvotes) {
        return this.state.review.upvotes.length - this.state.review.downvotes.length;
      } else {
        return 0;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "audioDraw", () => {
      const {
        review
      } = this.state;

      if (this.state.review.voicenote === "") {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, __jsx("audio", {
          ref: "audio_tag",
          src: review.voicenote,
          controls: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }));
      }

      ;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "videoDraw", () => {
      const {
        review
      } = this.state;

      if (this.state.review.video === "") {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, __jsx("video", {
          className: "video",
          controls: true,
          src: review.video,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }));
      }

      ;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "habits", () => {
      this.setState({
        kit: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "survival", () => {
      this.setState({
        kit: true
      });
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
    // this.setState({height:this.myInput.current.offsetHeight});
    this.fetchInfluencer();
    const {
      id
    } = this.props; // console.log(id)

    _services_ReviewServices__WEBPACK_IMPORTED_MODULE_13__["default"].getReview(id).then(review => this.setState(() => ({
      review: review
    }))).catch(() => toastr__WEBPACK_IMPORTED_MODULE_10__["error"]('Error occured while fetching review. Please try later.'));
  }

  render() {
    const review = this.state.review || {};
    const influencer = this.state.review.influencer || {};
    const product = this.state.review.product || {};
    const influencers = this.state.influencers; // const height = this.state;

    console.log(review.video);

    if (this.context.user.role !== "Admin") {
      if (this.state.kit === true) {
        return (//THIS IS FOR SURVIVAL KIT CLICKED
          // style={{height:height}}ref={this.myInput} READ the height of page 
          __jsx("div", {
            style: {
              height: "350vh"
            },
            className: "review-outer-page",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          }, __jsx("div", {
            className: "review-page",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 261
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 262
            },
            __self: this
          }, __jsx("img", {
            src: influencer.profilePic,
            alt: "Expert Image",
            className: "influencer-pic",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 263
            },
            __self: this
          }), __jsx("p", {
            className: "heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 264
            },
            __self: this
          }, review.title)), __jsx("div", {
            className: "subheading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266
            },
            __self: this
          }, __jsx("div", {
            className: "category-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }, __jsx("p", {
            className: "author",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, "by: ", influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName), __jsx("div", {
            className: "category-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, __jsx("img", {
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png",
            alt: "the product",
            className: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }), __jsx("span", {
            className: "photography",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }, influencer.expertise))), __jsx("div", {
            className: "profile-instagram",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          }, __jsx("p", {
            className: "profile-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 275
            },
            __self: this
          }, influencer.name && influencer.name.firstName, "'s profile"), __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
            alt: "instagram",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 276
            },
            __self: this
          }))), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            },
            __self: this
          }, this.videoDraw())), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: this
          }, __jsx("div", {
            className: "survival-kit-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }, __jsx("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }, "Few words about ", influencer.name && influencer.name.firstName), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 287
            },
            __self: this
          }, "He is a world wide best selling author, Israel's Squash national champion of 2000, and proffesor of happiness. Tal has dedicated his life for helping the most needed... etc."), __jsx("div", {
            className: "books-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 290
            },
            __self: this
          }, __jsx("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            },
            __self: this
          }, "BOOKS:"), __jsx("div", {
            className: "book-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 292
            },
            __self: this
          }, __jsx("div", {
            className: "book-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: this
          }, __jsx("img", {
            height: "150",
            width: "auto",
            src: "https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg",
            alt: "Book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 294
            },
            __self: this
          }), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }, "Title of Book jajaa Es largo vamos a ver")), __jsx("button", {
            className: "book-button add-to-cart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, "Buy on Amazon"))), __jsx("div", {
            className: "book-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          }, __jsx("img", {
            height: "150",
            width: "auto",
            src: "https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg",
            alt: "Book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          }), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }, "Title of Book")), __jsx("button", {
            className: "book-button add-to-cart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }, "Buy on Amazon"))), __jsx("div", {
            className: "book-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }, __jsx("img", {
            height: "150",
            width: "auto",
            src: "https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg",
            alt: "Book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          }), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, "Title of Book fwefwe ")), __jsx("button", {
            className: "book-button add-to-cart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, "Buy on Amazon"))), __jsx("div", {
            className: "book-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }, __jsx("img", {
            height: "150",
            width: "auto",
            src: "https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg",
            alt: "Book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 309
            },
            __self: this
          }), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310
            },
            __self: this
          }, "Title of Book www  wef")), __jsx("button", {
            className: "book-button add-to-cart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311
            },
            __self: this
          }, "Buy on Amazon"))))), __jsx("section", {
            className: "survival-habits-heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 317
            },
            __self: this
          }, __jsx("button", {
            className: "clicked-show",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 318
            },
            __self: this
          }, "SURVIVAL KITS"), __jsx("button", {
            className: "not-clicked",
            onClick: this.habits,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }, " HABITS")), __jsx(_components_reviews_SurvivalKit__WEBPACK_IMPORTED_MODULE_20__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            },
            __self: this
          })), this.audioDraw(), __jsx("div", {
            className: "bottom-review-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }, __jsx(_components_votes_Votes__WEBPACK_IMPORTED_MODULE_18__["default"], {
            isDownvoted: this.isDownvoted(),
            isUpvoted: this.isUpvoted(),
            votes: this.votes(),
            voteDown: this.downvote,
            voteUp: this.upvote,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 325
            },
            __self: this
          }), __jsx("div", {
            className: "share-buttons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            },
            __self: this
          }, __jsx("span", {
            className: "share-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 333
            },
            __self: this
          }, "SHARE"), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["WhatsappShareButton"], {
            url: "zapos.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 334
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
            alt: "instagram button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 334
            },
            __self: this
          })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
            url: "headspace.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg",
            alt: "facebook button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["TwitterShareButton"], {
            url: "amazon.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 336
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg",
            alt: "twitter button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 336
            },
            __self: this
          })))))), __jsx("div", {
            className: "expert-card-section-review",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 342
            },
            __self: this
          }, __jsx("div", {
            className: "div-review-cards",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 343
            },
            __self: this
          }, __jsx("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 344
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 344
            },
            __self: this
          }, "Similar Sages"))), __jsx("div", {
            className: "cards-review",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 346
            },
            __self: this
          }, influencers.map((i, index) => {
            return __jsx(_components_influencer_InfluencerCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
              review: "yes",
              i: i,
              index: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 349
              },
              __self: this
            });
          }))))
        );
      } else {
        return (//This is for habits
          __jsx("div", {
            style: {
              height: "350vh"
            },
            className: "review-outer-page",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            },
            __self: this
          }, __jsx("div", {
            className: "review-page",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 361
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }, __jsx("img", {
            src: influencer.profilePic,
            alt: "Expert Image",
            className: "influencer-pic",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }), __jsx("p", {
            className: "heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }, review.title)), __jsx("div", {
            className: "subheading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            },
            __self: this
          }, __jsx("div", {
            className: "category-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }, __jsx("p", {
            className: "author",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369
            },
            __self: this
          }, "by: ", influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName), __jsx("div", {
            className: "category-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          }, __jsx("img", {
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png",
            alt: "the product",
            className: "icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 374
            },
            __self: this
          }), __jsx("span", {
            className: "photography",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            },
            __self: this
          }, influencer.expertise))), __jsx("div", {
            className: "profile-instagram",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 378
            },
            __self: this
          }, __jsx("p", {
            className: "profile-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 379
            },
            __self: this
          }, influencer.name && influencer.name.firstName, "'s profile"), __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
            alt: "instagram",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            },
            __self: this
          }))), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            },
            __self: this
          }, this.videoDraw())), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 387
            },
            __self: this
          }, __jsx("div", {
            className: "survival-kit-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 388
            },
            __self: this
          }, __jsx("section", {
            className: "survival-habits-heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            },
            __self: this
          }, __jsx("button", {
            className: "not-clicked",
            onClick: this.survival,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }, "SURVIVAL KITS"), __jsx("button", {
            className: "clicked-show",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            },
            __self: this
          }, " HABITS")), __jsx("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393
            },
            __self: this
          }, "few words about the habits"), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, "X has this cool little \u2026 that allowed me to\u2026 while still being able to\u2026  no one else is doing this . This means I can\u2026. While still being able to \u2026 and it also means I don;t have to buy additional\u2026. Then add  Why it is a  Difference maker , why you love it , why you  will always use it Example -The first major differ"), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 397
            },
            __self: this
          }, __jsx("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398
            },
            __self: this
          }, "BOOKS:"), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 399
            },
            __self: this
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 400
            },
            __self: this
          }, __jsx("img", {
            src: "",
            alt: "Book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, "Title of Book"), __jsx("button", {
            className: "book-button add-to-cart",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }, "Add to Cart")))))), this.audioDraw(), __jsx("div", {
            className: "bottom-review-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }, __jsx(_components_votes_Votes__WEBPACK_IMPORTED_MODULE_18__["default"], {
            isDownvoted: this.isDownvoted(),
            isUpvoted: this.isUpvoted(),
            votes: this.votes(),
            voteDown: this.downvote,
            voteUp: this.upvote,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 410
            },
            __self: this
          }), __jsx("div", {
            className: "share-buttons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417
            },
            __self: this
          }, __jsx("span", {
            className: "share-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 418
            },
            __self: this
          }, "SHARE"), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["WhatsappShareButton"], {
            url: "zapos.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg",
            alt: "instagram button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419
            },
            __self: this
          })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
            url: "headspace.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 420
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg",
            alt: "facebook button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 420
            },
            __self: this
          })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["TwitterShareButton"], {
            url: "amazon.com",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421
            },
            __self: this
          }, __jsx("img", {
            className: "instagram",
            src: "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg",
            alt: "twitter button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421
            },
            __self: this
          })))))), __jsx("div", {
            className: "expert-card-section-review",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 427
            },
            __self: this
          }, __jsx("div", {
            className: "div-review-cards",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 428
            },
            __self: this
          }, __jsx("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 429
            },
            __self: this
          }, __jsx("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 429
            },
            __self: this
          }, "Similar Sages"))), __jsx("div", {
            className: "cards-review",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 431
            },
            __self: this
          }, influencers.map((i, index) => {
            return __jsx(_components_influencer_InfluencerCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
              review: "yes",
              i: i,
              index: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 434
              },
              __self: this
            });
          }))))
        );
      } // return (
      // <div className="review-outer-page">
      //   <div className="review-page">
      //     <div >
      //       <div>
      //         <img src={influencer.profilePic} alt="Expert Image" className="influencer-pic" />
      //         <p className="heading" >{review.title}</p>
      //       </div>
      //       <div className="subheading">
      //         <div className="category-name">
      //           <p className="author">by: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
      //           <div className="category-card">
      //             <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png" alt="the product" className="icon"/>
      //             <span className="photography">{influencer.expertise}</span>
      //           </div>
      //         </div>
      //         <div className="profile-instagram">
      //           <p className="profile-name">{influencer.name && influencer.name.firstName}'s profile</p>
      //           <img  className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram"/>
      //         </div>
      //       </div>
      //         <div>
      //           {this.videoDraw()}
      //         </div>
      //     </div>
      //     <div>
      //       {/* <div className="review-of-product">
      //         <div>
      //         <h5><b>How did I get here?</b></h5>
      //         <p>“Back when I had hair in the eighties, Comedy was just this thing I toyed with -  a few people said my Richard Pryor impressions were funny so I gave it a go, now looking back as comedy morphed into commentating. I’m so thankful for the experiences that made me who I am;  where would I be without the hustle of Jeff that sparked a bidding war for my unique brand of blue comedy, where would I be without… believing…”</p>
      //         </div>
      //         <div>
      //         <h5><b>How <u style={{textDecoration:"underline dotted #97cfdc"}}>IT</u> helped me succeed</b></h5>
      //         <p>“ So no man is an island, we know this but certainly man can get a leg up with a few props, for me this came in the form is  (product / experience X)    … I realized that X would help me… and then in turn I could use it to…”</p>
      //         </div>
      //         <div>
      //         <h5><b>What is it?</b></h5>
      //         <p> Ex -  X has this cool little … that allowed me to… while still being able to…  no one else is doing this . This means I can…. While still being able to … and it also means I don;t have to buy additional….
      //           Then add  Why it is a  Difference maker , why you love it , why you  will always use it 
      //           Example -The first major difference I see is that (X) isn’t like… or….  . It’s functionality  is far superior...
      //           </p>
      //         </div>
      //         <div className="specs-review">
      //         <h5><b>Practical Specs</b></h5>
      //         {specs.map((spec, index)=> {
      //           return(
      //             <li>{spec}</li>
      //           )
      //         })}
      //         </div>
      //       </div> */}
      //       {/* <p> voicenote: {review.voicenote}</p> */}
      //       {/* <video controls src={review.video} /> */}
      //       {/* <audio ref="audio_tag" src={review.voicenote} controls/> */}
      //       <div className="survival-kit-section">
      //         <section className="survival-habits-heading">
      //           <button>SURVIVAL KITS</button>
      //           <button> HABITS</button>
      //         </section>
      //         <h2>few words about the kit</h2>
      //         <p>X has this cool little … that allowed me to… while still being able to…  no one else is doing this . This means I can…. While still being able to … and it also means I don;t have to buy additional….
      //           Then add  Why it is a  Difference maker , why you love it , why you  will always use it 
      //           Example -The first major differ</p>
      //           <div>
      //             product card
      //           </div>
      //       </div>
      //       {this.audioDraw()}
      //       <div className="bottom-review-container">
      //         <Votes
      //           isDownvoted={this.isDownvoted()}
      //           isUpvoted={this.isUpvoted()}
      //           votes={this.votes()}
      //           voteDown={this.downvote}
      //           voteUp={this.upvote}
      //         />
      //         <div className="share-buttons">
      //           <span className="share-text">SHARE</span>
      //           <WhatsappShareButton url={"zapos.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram button"/></WhatsappShareButton>
      //           <FacebookShareButton url={"headspace.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg" alt="facebook button"/></FacebookShareButton>
      //           <TwitterShareButton url={"amazon.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg" alt="twitter button"/></TwitterShareButton>
      //         </div>
      //       </div>
      //     </div>
      //     <CartBubble product={product}/>
      //   </div>
      //   <div className="expert-card-section-review">
      //   <div className="div-review-cards">
      //   <h2><b>Similar Sages</b></h2>
      //   </div>
      //   <div className="cards-review">
      //   {influencers.map((i, index) => {
      //     return (
      //       <InfluencerCard review="yes" i={i} index={index} />
      //     )
      //   })}
      //   </div>
      //  </div>
      // </div>
      // );

    } else {
      if (this.state.update) {
        return __jsx(_components_reviews_ReviewUpdate__WEBPACK_IMPORTED_MODULE_16__["default"], {
          oldReview: this.state.review,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/product/".concat(product._id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 557
          },
          __self: this
        }, "Buy Now "), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 558
          },
          __self: this
        }, product.model), __jsx("img", {
          src: influencer.profilePic,
          alt: influencer.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 559
          },
          __self: this
        }), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          },
          __self: this
        }, "Name: ", influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 561
          },
          __self: this
        }, "Expertise: ", influencer.expertise && influencer.expertise.join(', ')), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 562
          },
          __self: this
        }, "Review: ", influencer.review)), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565
          },
          __self: this
        }, "Review"), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566
          },
          __self: this
        }, " Title: ", review.title), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          },
          __self: this
        }, " Review: ", review.review), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        }, " Voicenote: ", review.voicenote), this.videoDraw(), this.audioDraw(), __jsx("button", {
          onClick: this.update,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          },
          __self: this
        }, "Update"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574
          },
          __self: this
        }), __jsx("button", {
          onClick: this.submit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575
          },
          __self: this
        }, "Delete"), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          },
          __self: this
        }, __jsx(_components_votes_Votes__WEBPACK_IMPORTED_MODULE_18__["default"], {
          isDownvoted: this.isDownvoted(),
          isUpvoted: this.isUpvoted(),
          votes: this.votes(),
          voteDown: this.downvote,
          voteUp: this.upvote,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          },
          __self: this
        }))));
      }
    }
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ReviewOne, "contextType", _components_contexts_UserContext__WEBPACK_IMPORTED_MODULE_15__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ReviewOne);

/***/ })

})
//# sourceMappingURL=[id].js.8d6e99de705d45d27f7b.hot-update.js.map