import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import Link from 'next/link';
import * as toastr from 'toastr';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {FacebookShareButton, TwitterShareButton,  WhatsappShareButton} from "react-share";
import ReviewServices from '../../services/ReviewServices';
import InfluencerServices from '../../services/InfluencerServices';
import UserContext from '../../components/contexts/UserContext';
import ReviewUpdate from '../../components/reviews/ReviewUpdate';
import CartBubble from '../../components/cart/CartBubble';
import Votes from '../../components/votes/Votes';
import InfluencerCard from '../../components/influencer/InfluencerCard';
import SurvivalKit from '../../components/survivalKit/SurvivalKit';
import KitServices from '../../services/KitServices'

class ReviewOne extends Component {
  
  state = {
    influencers: [],
    review: {},
    kit: {},
    disableVoteButtons: false,
    update: false,
  }

  static contextType = UserContext;


  static getInitialProps({ query: { id } }) {
    return { id };
  }


  componentDidMount() {
    this.fetchInfluencer();

    const { id } = this.props;

    ReviewServices.getReview(id)
      .then((review) => {
        this.setState({
          review: review
        })
      })
      .catch(() => toastr.error('Error occured while fetching. Please try later.'));
      
      this.getkit(id)
  }

  getkit = (id) => {
    KitServices.getKit(id)
      .then((kit) => {
          this.setState({
              kit: kit
          })
      })
      .catch(() => toastr.error('Error occured while fetching. Please try later.'));
  }



  fetchInfluencer = () => {
    InfluencerServices.getAll()
      .then(influencers => this.setState({
        ...this.state,
        influencers
      }))
      .catch((err) => console.log(err))
  }
  
  update = () => {
    this.setState({
      update: true
    })
  }

  delete = () => {
    let { id } = this.props;

    ReviewServices.deleteReview(this.context.user, id)
      .then(() => {
        toastr.success("deleted the review");
      })
      .catch(err => console.log(err))
  }

  upvote = () => {
    if (!this.context.islogged) {
      return toastr.info('You must be logged in to leave vote.');
    }

    if (!this.state.disableVoteButtons) {
      this.setState({ disableVoteButtons: true });
      if (this.isUpvoted()) {
        ReviewServices.undoVoteUp(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);

              return {
                review: { ...state.review, upvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      } else {
        ReviewServices.voteUp(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);
              const upvotes = state.review.upvotes
                .filter(upvote => upvote.author !== this.context.user._id)
                .concat({ author: this.context.user._id });

              return {
                review: { ...state.review, downvotes, upvotes },
                disableVoteButtons: false,
                upvoted: true
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      }
    }
  }

  downvote = () => {
    if (!this.context.islogged) {
      return toastr.info('You must be logged in to leave vote.');
    }

    if (!this.state.disableVoteButtons) {
      this.setState({ disableVoteButtons: true });
      if (this.isDownvoted()) {
        ReviewServices.undoVoteDown(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);

              return {
                review: { ...state.review, downvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      } else {
        ReviewServices.voteDown(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);
              const downvotes = state.review.downvotes
                .filter(downvote => downvote.author !== this.context.user._id)
                .concat({ author: this.context.user._id });

              return {
                review: { ...state.review, downvotes, upvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      }
    }
  }

  saidNo = () => {
    toastr.error("didn't delete the review");
  }

  submit = () => {
    confirmAlert({
      title: 'Confirm to delete this review',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.delete()
        },
        {
          label: 'No',
          onClick: () => this.saidNo()
        }
      ]
    });
  };

  isDownvoted = () => this.state.review.downvotes && this.state.review.downvotes.find(vote => vote.author === this.context.user._id);

  isUpvoted = () => this.state.review.upvotes && this.state.review.upvotes.find(vote => vote.author === this.context.user._id);

  votes = () => {
    if (this.state.review.upvotes && this.state.review.downvotes) {
      return this.state.review.upvotes.length - this.state.review.downvotes.length;
    } else {
      return 0;
    }
  };

  audioDraw = () => {
    const {review} = this.state;

    if (this.state.review.voicenote === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
            <audio ref="audio_tag" src={review.voicenote} controls/>
        </div>
      )
    };
  };

  // instagramRedirect = () => {
  //   return(
  //     <div>
  //       <Link href="instagram.com/kingjames"></Link>
  //     </div>
  //   )
  // }

  videoDraw = () => {

    if (this.state.review.video === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
            {/* <video className="video" controls src={review.video} /> */}
          <iframe src={'https://www.youtube.com/embed/E7wJTI-1dvQ'}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            className='video-youtube' 
          />
        </div>
      )
    };
  };



  render() {
    const review = this.state.review || {};
    const influencer = this.state.review.influencer || {};
    const influencers = this.state.influencers;
    const kit = this.state.kit;

    if(this.state.kit === {} || this.state.kit === undefined || this.state.review.influencer === undefined){
      return(
        <div>
          <p>Loadingg........</p>
        </div>
      )
    } else {
        return (

        <div style={{height:"350vh"}} className="review-outer-page">
          <div className="review-page">
            <div>
              <div className="review-heading-div">
                <img src={influencer.profilePic} alt="Expert Image" className="influencer-pic" />
                <p className="heading" >{review.title}</p>
              </div>
              <div className="subheading">
                <div className="category-name">
                  <p className="author">by: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
                  <div className="category-card">
                    <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png" alt="the product" className="icon"/>
                    <span className="photography">{influencer.expertise}</span>
                  </div>
                </div>
                <div className="profile-instagram">
                  <p className="profile-name">{influencer.name && influencer.name.firstName}'s profile</p>
                  <img  className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram"/>
                </div>
              </div>
                <div>
                  {this.videoDraw()}
                </div>
          </div>

          <div>
            <div className="survival-kit-section">
            <h5>Few words about {influencer.name && influencer.name.firstName}</h5>
              <p>
               {influencer.description}
                </p>
                <div className="books-section">
                 <h5>BOOKS:</h5>
                 <div className="book-container">
                   <div className="book-card">
                     <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                     <p><b>Title of Book jajaa Es largo vamos a ver</b></p>
                     <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                   </div>
                   <div className="book-card">
                     <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                     <p><b>Title of Book</b></p>
                     <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                   </div>
                   <div className="book-card">
                     <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                     <p><b>Title of Book fwefwe </b></p>
                     <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                   </div>
                   <div className="book-card">
                     <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                     <p><b>Title of Book www  wef</b></p>
                     <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                   </div>
   
                   
                 </div>
              </div>
              <section className="survival-habits-heading">
                <button className="clicked-show">SURVIVAL KITS</button>
              </section>
              <div className="rectangle-survival-title">
                {/* <div className="rectangle-title-div">
                  <h3>{kit.title}</h3>
                </div>  
                <div className="rectangle-subtitle-div">
                  <div className="rectangle-sage-div">
                    <img className="rectangle-sage-picture " src={influencer.profilePic} alt="Sage Picture" />
                    <span>By {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</span>
                  </div>
                  <div className="rectangle-add-all-div">
                    <p>Favorite all</p>
                    <button className="recangle-add-button">
                    <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                    </button>
                  </div>
                </div>    */}
                <img className="rectangle-survival-title-picture" src={influencer.profilePic}/>
                <div className="review-survival-title">
                  <div>
                    <h2 id="review-survival-title"><b>{kit.title}</b></h2>
                  </div>
                  <div>
                     <h4 id="review-survival-title">{influencer.name.firstName} {influencer.name.lastName}</h4>
                  </div>
                </div>
                {/* <div className="bookmark-survival-title"> */}
							<img id="survival-title-bookmark-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                {/* </div> */}
            </div>
              
              {/* <div> */}
                <SurvivalKit id={influencer._id}></SurvivalKit>
              {/* </div> */}
                
            </div>
            {this.audioDraw()}
            <div className="bottom-review-container">
              <Votes
                isDownvoted={this.isDownvoted()}
                isUpvoted={this.isUpvoted()}
                votes={this.votes()}
                voteDown={this.downvote}
                voteUp={this.upvote}
              />
              <div className="share-buttons">
                <span className="share-text">SHARE</span>
                <WhatsappShareButton url={"zapos.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram button"/></WhatsappShareButton>
                <FacebookShareButton url={"headspace.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg" alt="facebook button"/></FacebookShareButton>
                <TwitterShareButton url={"amazon.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg" alt="twitter button"/></TwitterShareButton>
              </div>
              </div>
              </div>
              {/* <CartBubble product={product}/> */}
            </div>
            <div className="expert-card-section-review">
            <div className="div-review-cards">
            <h2><b>Similar Sages</b></h2>
            </div>
            <div className="cards-review">
            {influencers.map((i, index) => {
              return (
                <InfluencerCard review="yes" i={i} index={index} />
              )
            })}
            </div>
          </div>
          </div>
      );
      } 
      }
}

export default ReviewOne;