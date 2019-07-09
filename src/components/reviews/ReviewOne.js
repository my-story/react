import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import * as toastr from 'toastr';
import UserContext from '../contexts/UserContext';
import ReviewUpdate from './ReviewUpdate';
import ReviewServices from '../../services/ReviewServices';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Vote = ({ votes, voteDown, voteUp }) => {
    return (
        <div>
            <button onClick={voteDown}>Downvote</button>
            <span>{votes}</span>
            <button onClick={voteUp}>Upvote</button>
        </div>
    );
}

class ReviewOne extends Component{
    static contextType = UserContext;
	state = {
			review: {},
			influencer: {},
			name:{},

			update: false,
	}

    componentDidMount(){
        const { id } = this.props.match.params;
		ReviewServices.getReview(id)
      .then((review) => this.setState(() => ({ review: review })))
// 			.then((review) => {    
// 					this.setState({review:review.data[0],influencer: review.data[0].influencer, name: review.data[0].influencer.name , votes: review.data[0].votes, user:this.context.user});
// 			})
       .catch(() => toastr.error('Error occured while fetching review. Please try later.'));
	}

	update = () => {
		this.setState({
				update: true
		})
	}

	delete = () => {
			let { id } = this.props.match.params;

			ReviewServices.deleteReview(this.context.user, id)
				.then(() => {   
						toastr.success("deleted the review");
				})
				.catch(err => console.log(err))
	}

    upvote = () => {
        if (this.context.islogged) {
            if (this.isUpvoted()) {
                ReviewServices.undoVoteUp(this.state.review.influencer._id, this.context.user._id)
                    .then(() => {
                        this.setState(state => {
                            const upvotes = state.review.upvotes.filter(upvote => upvote !== this.context.user._id);

                            return {
                                review: { ...state.review, upvotes }
                            }
                        });
                    })
                    .catch(() => toastr.error('Internal server error'));
            } else {
                ReviewServices.voteUp(this.state.review.influencer._id, this.context.user._id)
                    .then(() => {
                        this.setState(state => {
                            const downvotes = state.review.downvotes.filter(downvote => downvote !== this.context.user._id);
                            const upvotes = state.review.upvotes.concat(this.context.user._id);
    
                            return {
                                review: { ...state.review, downvotes, upvotes }
                            }
                        });
                    })
                    .catch(() => toastr.error('Internal server error'));
            }
        } else {
            toastr.info('You must be logged in to leave vote.');
        }
    }

    downvote = () => {
        if (this.context.islogged) {
            if (this.isDownvoted()) {
                ReviewServices.undoVoteDown(this.state.review.influencer._id, this.context.user._id)
                    .then(() => {
                        this.setState(state => {
                            const downvotes = state.review.downvotes.filter(downvote => downvote !== this.context.user._id);

                            return {
                                review: { ...state.review, downvotes }
                            }
                        });
                    })
                    .catch(() => toastr.error('Internal server error'));
            } else {
                ReviewServices.voteDown(this.state.review.influencer._id, this.context.user._id)
                    .then(() => {
                        this.setState(state => {
                            const upvotes = state.review.upvotes.filter(upvote => upvote !== this.context.user._id);
                            const downvotes = state.review.downvotes.concat(this.context.user._id);

                            return {
                                review: { ...state.review, downvotes, upvotes }
                            }
                        });
                    })
                    .catch(() => toastr.error('Internal server error'));
            }
        } else {
            toastr.info('You must be logged in to leave vote.');
        }
    }

	saidNo = () =>{
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



    isDownvoted = () => this.state.review.downvotes && this.state.review.downvotes.find(vote => vote.author === this.context.user.id);

    isUpvoted = () => this.state.review.upvotes && this.state.review.upvotes.find(vote => vote.author === this.context.user.id);

    votes = () => {
        if (this.state.review.upvotes && this.state.review.downvotes) {
            return this.state.review.upvotes.length - this.state.review.downvotes.length;
		} else {
            return 0;
        }
    };

    render(){
        const review = this.state.review;
        const influencer = this.state.review.influencer || {};


	// if(influencer.name === "") {
	// 	return(<div>Loading...</div>)
	// }
	// if (!influencer) {
	// 	return (<h1>Review comming soon</h1>);
	// } else {
	// 	if (this.context.user.role !== "Admin") {
	// 		return (
	// 				<div>
	// 				<div>
	// 					<img src={influencer.profilePic} alt={name.firstName} />
	// 					<p>name: {name.firstName} {name.lastName}</p>									
	// 					<p>expertise: {influencer.expertise}</p>
	// 					<p>review: {influencer.review}</p>
	// 				</div>
	// 				<div>
	// 					<h3>Review</h3>
	// 					<p> title: {review.title}</p> 
	// 					<p> review: {review.review}</p> 
	// 					<p> voicenote: {review.voicenote}</p> 
	// 					<ReactPlayer url={review.video} playing={false} />
	// 					<AudioPlayer autoPlay={false} src={review.voicenote} onPlay={e => console.log("onPlay")} />
	// 					<span>{this.state.votes}</span>
	// 				</div>
	// 				</div>
	// 		);
	// } else {
	// 	if (this.state.update) {
	// 		return(<ReviewUpdate oldReview={this.state}/>);
        if(this.context.user.role !== "Admin"){
            return(
						<div>
								<div>
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
										<ReactPlayer url={review.video} playing={false} />
										<AudioPlayer autoPlay={false} src={review.voicenote} onPlay={e => console.log("onPlay")} />
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
		} else {
            if(this.state.update){
                return(<ReviewUpdate oldReview={this.state}/>)
			} else {
                return(
					<div>
						<div>
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
							<ReactPlayer url={review.video} playing />
							<AudioPlayer autoPlay src={review.voicenote} onPlay={e => console.log("onPlay")} />
							<button onClick={this.update}>Update</button>
							<br/>
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

// 	render() {
// 	const {review, influencer, name } = this.state;

// 	if(influencer.name === "") {
// 		return(<div>Loading...</div>)
// 	}
// 	if (!influencer) {
// 		return (<h1>Review comming soon</h1>);
// 	} else {
// 		if (this.context.user.role !== "Admin") {
// 			return (
// 					<div>
// 							<div>
// 									<img src={influencer.profilePic} alt={name.firstName} />
// 									<p>name: {name.firstName} {name.lastName}</p>									
// 									<p>expertise: {influencer.expertise}</p>
// 									<p>review: {influencer.review}</p>
// 							</div>
// 							<div>
// 								<h3>Review</h3>
// 								<p> title: {review.title}</p> 
// 								<p> review: {review.review}</p> 
// 								<p> voicenote: {review.voicenote}</p> 
// 								<ReactPlayer url={review.video} playing={false} />
// 								<AudioPlayer autoPlay={false} src={review.voicenote} onPlay={e => console.log("onPlay")} />
// 								<span>{this.state.votes}</span>
// 							</div>
// 					</div>
// 			);
// 	} else {
// 		if (this.state.update) {
// 			return(<ReviewUpdate oldReview={this.state}/>);
// 		} else {
// 			return (
// 				<div>
// 					<div>
// 						<img src={influencer.profilePic} alt={name.firstName} />
// 						<p>name: {name.firstName} {name.lastName}</p>
// 						<p>expertise: {influencer.expertise}</p>
// 						<p>review: {influencer.review}</p>
// 					</div>
// 					<div>
// 						<h3>Review</h3>
// 						<p> title: {review.title}</p> 
// 						<p> review: {review.review}</p> 
// 						<p> voicenote: {review.voicenote}</p> 
// 						<ReactPlayer url={review.video} playing />
// 						<AudioPlayer autoPlay src={review.voicenote} onPlay={e => console.log("onPlay")} />
// 						<button onClick={this.update}>Update</button>
// 						<br/>
// 						<button onClick={this.submit}>Delete</button>
// 					</div>
// 				</div>
// 				);
// 			}

		}	
	}
        
}
}

export default ReviewOne;