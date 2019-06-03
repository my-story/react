import React, {Component} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import UserContext from '../contexts/UserContext';
import ReviewUpdate from './ReviewUpdate';

class ReviewOne extends Component{
    state={
        review:{},
        influencer:{},
        update: false
    }
    static contextType = UserContext;

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `http://localhost:3002/reviews/specific/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((review)=>{   
            console.log(review.data[0])
            this.setState({review:review.data[0],influencer: review.data[0].influencer})
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
            // this.setState({review:review.data[0],influencer: review.data[0].influencer})
        })
        .catch(err=>console.log(err))
    }
    render(){
        const {review, influencer} = this.state
        console.log(review,influencer)
        console.log("user", this.context.user.role === "Admin");

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
                       <ReactPlayer url={review.video} playing />
                       <AudioPlayer autoPlay src={review.voicenote} onPlay={e => console.log("onPlay")} />
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
                            <button onClick={this.delete}>Delete</button>
                        </div>
                    </div>
                )
              }
        }
    }
}

export default ReviewOne