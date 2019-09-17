import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../../src/components/contexts/UserContext';
import ReviewServices from "../../src/services/ReviewServices";

const { TextArea } = Input;

class ReviewUpdate extends Component {

  state = {
    title: "",
    review: "",
    video: "",
    voicenote: "",
    influencer: "",
    created: false
  }

  static contextType = UserContext;

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getReview = () =>{
    console.log(this.props);
    ReviewServices.getReview(this.props.id)
      .then((review) =>{
        this.setState({
          title: review.title,
          review: review.review,
          video: review.video,
          voicenote: review.voicenote,
          influencer: review.influencer._id,
          created: false
        })
      })
      .catch((error) => console.log(error));
  }

  componentDidMount = () =>{
    this.getReview();
  }

  handleSubmit = () => {
    let id = this.state.influencer;
    
    const newReview = {
      title: this.state.title,
      review: this.state.review,
      influencer: this.state.influencer,
      video: this.state.video,
      voicenote: this.state.voicenote,
    }
    

    ReviewServices.editReview(newReview, id)
      .then(() => {
        console.log("entered the then")
        this.setState({ created: true });
      })
      .catch(err => console.log(err));
  }



  render() {
    console.log(this.state)
    // console.log(this.props.oldReview.title)
    if (this.context.user.role === "Admin" && !this.state.created) {
      if(this.state.title){
        return (
          <div>
            <Input name="title" defaultValue={this.state.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
            <TextArea rows={4} defaultValue={this.state.review} name="review" placeholder="Please enter review of review" onChange={this.onChange} />
            <Input name="influencer" defaultValue={this.state.influencer} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
            <Input name="video" defaultValue={this.state.video} placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
            <Input name="voicenote" defaultValue={this.state.voicenote} placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
            <button onClick={this.handleSubmit}>Update</button>
            {/* <p>saes</p> */}
          </div>
        );
      } else {
        return(
          <div>
            <p>loading ....</p>
          </div>
        )
      }
    } else {
      Router.push('/admin/influencer-chart');
      return null;
    }
  }
}

export default ReviewUpdate;