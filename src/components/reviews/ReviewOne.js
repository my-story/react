import React, {Component} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import UserContext from '../contexts/UserContext';
import ReviewUpdate from './ReviewUpdate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as toastr from 'toastr';

class ReviewOne extends Component{
    state={
        review:{},
        influencer:{},
        update: false,
        votes: 0,
        upvoted: false,
        downvoted: false
    }
    static contextType = UserContext;

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `http://localhost:3002/reviews/specific/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((review)=>{   
            console.log(review.data[0])
            this.setState({review:review.data[0],influencer: review.data[0].influencer, votes: review.data[0].votes, upvoted: this.hasUserUpvoted(), downvoted: this.hasUserDownvoted()})
        })
        .catch(err=>console.log(err))
    }

    update = () =>{
        this.setState({
            update: true
        })
    }

    delete = () =>{
        let { id } = this.props.match.params
        const url= `http://localhost:3002/reviews/delete/${id}`
        
        axios.post(url, this.context.user, {withCredentials:true})
        .then((review)=>{   
            console.log(review)
            toastr.success("deleted the review");
            // this.setState({review:review.data[0],influencer: review.data[0].influencer})
        })
        .catch(err=>console.log(err))
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
    
    hasUserUpvoted = () =>{
        for (var i = 0; i < this.context.user.reviewsUpvoted.length; i++){
            if(this.context.user.reviewsUpvoted[i] === this.state.review._id){
                return true;
            }
        }
        return false;
    }

    hasUserDownvoted = () =>{
        for (var i = 0; i < this.context.user.reviewsDownvoted.length; i++){
            if(this.context.user.reviewsDownvoted[i] === this.state.review._id){
                return true;
            }
        }
        return false;
    }
    upvote = () =>{
        let influencerId = this.state.influencer._id;
        let userId = this.context.user._id

        if(this.state.downvoted){
            axios.post(`http://localhost:3002/api/pull/downvote/${userId}`, {reviewId: this.state.review._id},{withCredentials:true})
                .then((user) =>{
                    console.log(user)
                    this.setState({
                        downvoted: false
                    })
                })
                .catch((err)=> console.log(err));
        }
        if(this.hasUserUpvoted() === false && this.state.upvoted === false){
        axios.post(`http://localhost:3002/reviews/upvote/${influencerId}`, {withCredentials:true})
            .then((review)=>{
                axios.post(`http://localhost:3002/api/upvote/${userId}`, {reviewId: this.state.review._id}, {withCredentials:true})
                .then((user)=>{
                    console.log(user)
                    this.setState({
                        upvoted: true
                    })
                })
                .catch((err)=>{console.log(err)})
                
                this.setState({
                    votes: review.data.votes
                })
            })
            .catch(err=>console.log(err))
        }
    }

    downvote = () =>{
        let influencerId = this.state.influencer._id;
        let userId = this.context.user._id

        if(this.state.upvoted){
            axios.post(`http://localhost:3002/api/pull/upvote/${userId}`, {reviewId: this.state.review._id},{withCredentials:true})
                .then((user) =>{
                    console.log(user)
                    this.setState({
                        upvoted: false
                    })
                })
                .catch((err)=> console.log(err));
        }

        if(this.hasUserDownvoted() === false && this.state.downvoted === false){
            axios.post(`http://localhost:3002/reviews/downvote/${influencerId}`, {withCredentials:true})
            .then((review)=>{
                axios.post(`http://localhost:3002/api/downvote/${userId}`, {reviewId: this.state.review._id}, {withCredentials:true})
                .then((user)=>{
                    console.log(user)
                    this.setState({
                        downvoted: true
                    })
                })
                .catch((err)=>{console.log(err)})
                
                this.setState({
                    votes: review.data.votes
                })
            })
            .catch(err=>console.log(err))
        }
    }

    render(){
        console.log("upvoted " + this.hasUserUpvoted);
        console.log("downvoted " + this.hasUserDownvoted);
        const {review, influencer} = this.state
        if(this.context.user.role !== "Admin"){
            return(
                <div>
                    <div>
                        <img src={influencer.profilePic} alt={influencer.name} />
                        <p>name: {influencer.name}</p>
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
                       <button onClick={this.upvote}>Upvote</button>
                       <span>{this.state.votes}</span>
                       <button onClick={this.downvote}>Downvote</button>
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
                            <p>name: {influencer.name}</p>
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
                )
              }
        }
        
    }
}

export default ReviewOne