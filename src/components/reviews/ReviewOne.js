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
        votes: 0
    }
    static contextType = UserContext;

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `http://localhost:3002/reviews/specific/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((review)=>{   
            console.log(review.data[0])
            this.setState({review:review.data[0],influencer: review.data[0].influencer, votes: review.data[0].upvotes})
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
    
    upvote = () =>{
        let id = this.state.influencer._id;
        axios.post(`http://localhost:3002/reviews/upvote/${id}`, {withCredentials:true})
            .then((review)=>{   
                this.setState({
                    votes: review.data.upvotes
                })
            })
            .catch(err=>console.log(err))
    }

    downvote = () =>{
        let id = this.state.influencer._id;
        axios.post(`http://localhost:3002/reviews/downvote/${id}`, {withCredentials:true})
            .then((review)=>{   
                this.setState({
                    votes: review.data.upvotes
                })
            })
            .catch(err=>console.log(err)) 
    }

    render(){
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