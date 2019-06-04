import React, {Component} from 'react'
import axios from 'axios'
import { Redirect} from 'react-router-dom'
import { Input } from 'antd';
import UserContext from '../contexts/UserContext';


const { TextArea } = Input;


class ReviewUpdate extends Component{
  state = {
 
  }

  static contextType = UserContext;

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  componentDidMount(){
    this.setState({
      title: this.props.oldReview.review.title,
      review: this.props.oldReview.review.review,
      video: this.props.oldReview.review.video,
      voicenote:this.props.oldReview.review.voicenote,
      influencer: this.props.oldReview.influencer._id,
      created: false
    })
  }
  handleSubmit = () => {
    let id = this.state.influencer;
    const url= `http://localhost:3002/reviews/edit/${id}`;
    const newReview = {
      title: this.state.title,
      review: this.state.review,
      influencer: this.state.influencer,
      video: this.state.video,
      voicenote: this.state.voicenote,
      user: this.context.user
    }
    console.log(newReview);
    axios.post(url, newReview, {withCredentials:true})
      .then((review)=>{   
          console.log(review)
          this.setState({created:true})
      })
      .catch(err=>console.log(err))
  }
    
  

  render(){
    console.log(this.state)
    if (this.context.user.role === "Admin"){
      if(this.state.created){
        return(<Redirect to="/"></Redirect>)
      }else{
        return(
          <div>  
            <Input name="title" defaultValue={this.props.oldReview.review.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
            <TextArea rows={4} defaultValue={this.props.oldReview.review.review} name="review" placeholder="Please enter review of review" onChange={this.onChange} />
            <Input name="influencer" defaultValue={this.props.oldReview.influencer._id} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
            <Input name="video" defaultValue={this.props.oldReview.review.video} placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
            <Input name="voicenote"defaultValue={this.props.oldReview.review.voicenote} placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
           <button onClick={this.handleSubmit}>Update</button>
          </div>
        )
          }   
} else {
  return( <Redirect to="/"></Redirect>)
}
}
}

export default ReviewUpdate;