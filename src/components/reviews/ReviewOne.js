import React, {Component} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import UserContext from '../contexts/UserContext';
import ReviewUpdate from './ReviewUpdate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as toastr from 'toastr';
import { Redirect } from 'react-router-dom';

class ReviewOne extends Component{
    state={
        review:{},
        influencer:{},
        update: false,
        votes: 0,
        upvoted: "",
        downvoted: "",
        user: "",
        logged: true
    }
    static contextType = UserContext;

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `http://localhost:3002/reviews/specific/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((review)=>{   
            console.log(review.data[0])
            console.log(this.context.user);
            this.setState({review:review.data[0],influencer: review.data[0].influencer, votes: review.data[0].votes, user:this.context.user});
            this.setState({
                upvoted: this.hasUserUpvoted(),
                downvoted: this.hasUserDownvoted()
            })
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
        for (var i = 0; i < this.state.user.reviewsUpvoted.length; i++){
            if(this.state.user.reviewsUpvoted[i] === this.state.review._id){
                return true;
            }
        }
        return false;
    }

    hasUserDownvoted = () =>{
        for (var i = 0; i < this.state.user.reviewsDownvoted.length; i++){
            if(this.state.user.reviewsDownvoted[i] === this.state.review._id){
                return true;
            }
        }
        return false;
    }
    upvote = () =>{
        let influencerId = this.state.influencer._id;
        let userId = this.context.user._id
        if(!this.context.user._id){
            this.setState({logged: false})
        } else {
            if(this.hasUserDownvoted() || this.state.downvoted){
                axios.post(`http://localhost:3002/api/pull/downvote/${userId}`, {reviewId: this.state.review._id, user: this.context.user},{withCredentials:true})
                    .then((user) =>{
                        console.log(user);
                        this.setState({
                            user: user.data,
                            downvoted: false
                        })
                    })
                    .catch((err)=> console.log(err));
            }
    
            if(this.hasUserUpvoted() === false){
            axios.post(`http://localhost:3002/reviews/upvote/${influencerId}`, {user: this.context.user},{withCredentials:true})
                .then((review)=>{
                    axios.post(`http://localhost:3002/api/upvote/${userId}`, {reviewId: this.state.review._id , user: this.context.user}, {withCredentials:true})
                    .then((user)=>{
                        this.setState({
                            user: user.data,
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
    }

    button = () =>{
        console.log(this.state);
        if (this.state.downvoted){
            return(<button onClick={this.upvote}>Upvote</button>)
        } else {
            return(<button onClick={this.downvote}>Downvote</button>)
        }
    }

    downvote = () =>{

        let influencerId = this.state.influencer._id;
        let userId = this.context.user._id
        
        if(this.hasUserUpvoted() || this.state.upvoted){
            axios.post(`http://localhost:3002/api/pull/upvote/${userId}`, {reviewId: this.state.review._id, user: this.context.user},{withCredentials:true})
                .then((user) =>{
                    this.setState({
                        user: user.data,
                        upvoted: false
                    })
                })
                .catch((err)=> console.log(err));
        }

        if(this.hasUserDownvoted() === false){
            axios.post(`http://localhost:3002/reviews/downvote/${influencerId}`, {user: this.context.user}, {withCredentials:true})
            .then((review)=>{
                axios.post(`http://localhost:3002/api/downvote/${userId}`, {reviewId: this.state.review._id, user: this.context.user}, {withCredentials:true})
                .then((user)=>{
                    this.setState({
                        user: user.data,
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
        const {review, influencer} = this.state

        if(!this.state.logged){
            return(
                <Redirect to="/login"></Redirect>
            )
        }
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
                        {this.button()}
                        <span>{this.state.votes}</span>
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