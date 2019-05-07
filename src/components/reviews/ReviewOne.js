import React, {Component} from 'react'
import axios from 'axios'

import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";


class ReviewOne extends Component{
    state={
        review:{},
        influencer:{}
    }

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
    render(){
        const {review, influencer} = this.state
        console.log(review,influencer)
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
    }
}

export default ReviewOne