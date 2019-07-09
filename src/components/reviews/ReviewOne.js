import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as toastr from 'toastr';
import UserContext from '../contexts/UserContext';
import ReviewUpdate from './ReviewUpdate';
import ReviewServices from '../../services/ReviewServices';

class ReviewOne extends Component {
	state = {
			review: {},
			influencer: {},
			update: false,
			votes: 0,
			upvoted: "",
			downvoted: "",
			user: "",
			logged: true
	}

	static contextType = UserContext;

	componentDidMount() {
		let { id } = this.props.match.params;

		ReviewServices.getReview(id)
			.then((review) => {    
					this.setState({review:review.data[0],influencer: review.data[0].influencer, votes: review.data[0].votes, user:this.context.user});
			})
			.catch(err => console.log(err));
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

	render() {
		const {review, influencer} = this.state;

		if (!influencer) {
			return (<h1>Review comming soon</h1>);
		} else {
			if (this.context.user.role !== "Admin") {
				return (
						<div>
								<div>
										<img src={influencer.profilePic} alt={influencer.name.firstName} />
										<p>name: {influencer.name.firstName}</p>
										<p>expertise: {influencer.expertise}</p>
										<p>review: {influencer.review}</p>
								</div>
								<div>
										<h3>Review</h3>
										<p> title: {review.title}</p> 
										<p> review: {review.review}</p> 
										<p> voicenote: {review.voicenote}</p> 
										<ReactPlayer url={review.video} playing={false} />
										<AudioPlayer autoPlay={false} src={review.voicenote} onPlay={e => console.log("onPlay")} />
										<span>{this.state.votes}</span>
								</div>
						</div>
				);
		} else {
			if (this.state.update) {
				return(<ReviewUpdate oldReview={this.state}/>);
			} else {
				return (
					<div>
						<div>
							<img src={influencer.profilePic} alt={influencer.name.firstName} />
							<p>name: {influencer.name.firstName}</p>
							<p>expertise: {influencer.expertise}</p>
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
						</div>
					</div>
				);
			}
		}	
	}
}
}

export default ReviewOne;