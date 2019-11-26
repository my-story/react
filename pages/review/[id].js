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
import SurvivalKit from '../../components/reviews/SurvivalKit';


class ReviewOne extends Component {
  static contextType = UserContext;
  
  state = {
    influencers: [],
    review: {},
    disableVoteButtons: false,
    update: false,
    kit: true,
  }

  static getInitialProps({ query: { id } }) {
    return { id };
  }


  componentDidMount() {
    this.fetchInfluencer();

    const { id } = this.props;
    // console.log(id)
    ReviewServices.getReview(id)
      .then((review) => this.setState(() => ({review: review})))
      .catch(() => toastr.error('Error occured while fetching review. Please try later.'));
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
    const {review} = this.state;

    if (this.state.review.video === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
            <video className="video" controls src={review.video} />
        </div>
      )
    };
  };
  habits = () => {
    this.setState({kit:false})
  }
  survival = () => {
    this.setState({kit:true})
  }

  render() {
    console.log(this.state)
    const review = this.state.review || {};
    const influencer = this.state.review.influencer || {};
    const product = this.state.review.product || {};
    const influencers = this.state.influencers;

    if (this.context.user.role !== "Admin") {
      if(this.state.kit === true) {
        return (

          //THIS IS FOR SURVIVAL KIT CLICKED
<div className="review-outer-page">
        <div className="review-page">
          <div >
            <div>
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
              <section className="survival-habits-heading">
                <button className="clicked-show">SURVIVAL KITS</button>
                <button className="not-clicked" onClick={this.habits}> HABITS</button>
              </section>
              <h5>few words about the kit</h5>
              <p>X has this cool little … that allowed me to… while still being able to…  no one else is doing this . This means I can…. While still being able to … and it also means I don;t have to buy additional….
                Then add  Why it is a  Difference maker , why you love it , why you  will always use it 
                Example -The first major differ</p>
                <SurvivalKit></SurvivalKit>
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
          <CartBubble product={product}/>
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
      } else {
        return (

          //This is for habits
          <div className="review-outer-page">
        <div className="review-page">
          <div >
            <div>
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
              <section className="survival-habits-heading">
                <button className="not-clicked" onClick={this.survival}>SURVIVAL KITS</button>
                <button className="clicked-show"> HABITS</button>
              </section>
              <h5>few words about the habits</h5>
              <p>X has this cool little … that allowed me to… while still being able to…  no one else is doing this . This means I can…. While still being able to … and it also means I don;t have to buy additional….
                Then add  Why it is a  Difference maker , why you love it , why you  will always use it 
                Example -The first major differ</p>
                <div>
                  product card
                </div>
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
          <CartBubble product={product}/>
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
        )
      }
      // return (
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
        return (<ReviewUpdate oldReview={this.state.review} />);
      } else {
        return (
          <div>
            <div>
              <Link href={`/product/${product._id}`}>Buy Now </Link>
            <p>{product.model}</p>
              <img src={influencer.profilePic} alt={influencer.name} />
              <p>Name: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
              <p>Expertise: {influencer.expertise && influencer.expertise.join(', ')}</p>
              <p>Review: {influencer.review}</p>
            </div>
            <div>
              <h3>Review</h3>
              <p> Title: {review.title}</p>
              <p> Review: {review.review}</p>
              <p> Voicenote: {review.voicenote}</p>
              {/* <video controls src={review.video} /> */}
              {/* <audio ref="audio_tag" src={review.voicenote} controls/> */}
              {this.videoDraw()}
              {this.audioDraw()}
              <button onClick={this.update}>Update</button>
              <br />
              <button onClick={this.submit}>Delete</button>
              <div>
                <Votes
                  isDownvoted={this.isDownvoted()}
                  isUpvoted={this.isUpvoted()}
                  votes={this.votes()}
                  voteDown={this.downvote}
                  voteUp={this.upvote}
                />
              </div>
            </div>
          </div>
        )

      }
    }

  }
}

export default ReviewOne;