import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import Link from 'next/link'
import * as toastr from 'toastr';
import UserContext from '../../src/components/contexts/UserContext';
import ReviewUpdate from '../../src/components/reviews/ReviewUpdate';
import ReviewServices from '../../src/services/ReviewServices';
import 'react-confirm-alert/src/react-confirm-alert.css';


const Vote = ({ votes, voteDown, voteUp }) => {
  return (
    <div>
      <button onClick={voteDown}>Downvote</button>
      <span>{votes}</span>
      <button onClick={voteUp}>Upvote</button>
    </div>
  );
};

class ReviewOne extends Component {
  static contextType = UserContext;
  state = {
    review: {},
    // influencer: {},
    // name: {},
    disableVoteButtons: false,
    update: false,
  }

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  componentDidMount() {
    const { id } = this.props;
    ReviewServices.getReview(id)
      .then((review) => this.setState(() => ({ review: review })))
      .catch(() => toastr.error('Error occured while fetching review. Please try later.'));
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

  videoDraw = () => {
    const {review} = this.state;

    if (this.state.review.video === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
            <video controls src={review.video} />
        </div>
      )
    };
  };



  render() {
    const review = this.state.review;
    const influencer = this.state.review.influencer || {};
    const product = this.state.review.product || {};

    if (this.context.user.role !== "Admin") {
      return (
        <div className="review-page">
          <div>
            <div>
              <p className="heading" >Canon EOS R Mirrorless Camera with RF 24-105mm</p>
            </div>
            <div className="subheading">
              <div className="category-name">
                <p className="author">by: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
              {/* </div>
              <div> */}
                <div className="shape, card-category">
                  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
                  <span className="photography">Photography</span>
                </div>
              </div>
              <div>
                <p className="profile-name">{influencer.name && influencer.name.firstName}'s profile</p>
              </div>
            </div>
              <Link href={`/product/${product._id}`}> Buy Now </Link> 
              <p>{product.model}</p>
              <img src={influencer.profilePic} alt={influencer.name} />
              <p>name: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
              <p>expertise: {influencer.expertise && influencer.expertise.join(', ')}</p>
              <p>review: {influencer.review}</p>
          </div>
          <div>
            <h3>Review</h3>
            <p> title: {review.title}</p>
            <p> review: {review.review}</p>
            <p> voicenote: {review.voicenote}</p>
            {/* <video controls src={review.video} /> */}
            {/* <audio ref="audio_tag" src={review.voicenote} controls/> */}
            {this.videoDraw()}
            {this.audioDraw()}
            <Vote
              isDownvoted={this.isDownvoted()}
              isUpvoted={this.isUpvoted()}
              votes={this.votes()}
              voteDown={this.downvote}
              voteUp={this.upvote}
            />
          </div>
        </div>
      );
    } else {
      if (this.state.update) {
        return (<ReviewUpdate oldReview={this.state} />);
      } else {
        return (
          <div>
            <div>
              <Link href={`/product/${product._id}`}>Buy Now </Link>
            <p>{product.model}</p>
              <img src={influencer.profilePic} alt={influencer.name} />
              <p>name: {influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
              <p>expertise: {influencer.expertise && influencer.expertise.join(', ')}</p>
              <p>review: {influencer.review}</p>
            </div>
            <div>
              <h3>Review</h3>
              <p> title: {review.title}</p>
              <p> review: {review.review}</p>
              <p> voicenote: {review.voicenote}</p>
              {/* <video controls src={review.video} /> */}
              {/* <audio ref="audio_tag" src={review.voicenote} controls/> */}
            {this.videoDraw()}
              {this.audioDraw()}
              <button onClick={this.update}>Update</button>
              <br />
              <button onClick={this.submit}>Delete</button>
              <Vote
                isDownvoted={this.isDownvoted()}
                isUpvoted={this.isUpvoted()}
                votes={this.votes()}
                voteDown={this.downvote}
                voteUp={this.upvote}
              />
            </div>
          </div>
        )

      }
    }

  }
}

export default ReviewOne;