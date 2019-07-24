import React, { Component } from 'react'
import Router from 'next/router';
import { Input } from 'antd';
import ReviewServices from "../src/services/ReviewServices"

const { TextArea } = Input;

class ReviewForm extends Component {
  state = {
    title: "",
    review: "",
    influencer: "",
    video: "",
    voicenote: "",
    created: false,
    reviewDone: {}
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    ReviewServices.createReview({
      title: this.state.title,
      review: this.state.review,
      influencer: this.state.influencer,
      video: this.state.video,
      voicenote: this.state.voicenote,
      user: this.props.user
    })
      .then((res) => this.setState({ created: true, reviewDone: res }))
      .catch((e) => console.log(e))
  };



  render() {
    if (this.props.user.role === "Admin" && !this.state.created) {
      return (
        <div>
          <Input name="title" placeholder="Please enter title " allowClear onChange={this.onChange} />
          <TextArea rows={4} name="review" placeholder="Please enter review of review" onChange={this.onChange} />
          <Input name="influencer" placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
          <Input name="video" placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
          <Input name="voicenote" placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      )
    } else {
      Router.push('/');
      return null;
    }
  };
};

export default ReviewForm;