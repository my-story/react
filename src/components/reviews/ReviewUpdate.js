import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../contexts/UserContext';
import ReviewServices from '../../services/ReviewServices';

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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () =>{
    this.setState({
      title: this.props.oldReview.title,
      review: this.props.oldReview.review,
      video: this.props.oldReview.video,
      voicenote: this.props.oldReview.voicenote,
      influencer: this.props.oldReview.influencer._id,
      created: false
    });
  }

  handleSubmit = () => {
    let id = this.state.influencer;
    console.log(id);
    const newReview = {
      title: this.state.title,
      review: this.state.review,
      influencer: this.state.influencer,
      video: this.state.video,
      voicenote: this.state.voicenote,
    }
    console.log(newReview)

    ReviewServices.editReview(newReview, id)
      .then(() => {
        console.log("entered the then")
        this.setState({ created: true });
      })
      .catch(err => console.log(err));
  }



  render() {
    console.log(this.state)
    console.log(this.props.oldReview.title)
    if (this.context.user.role === "Admin" && !this.state.created) {
      return (
        <div>
          <Input name="title" defaultValue={this.props.oldReview.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
          <TextArea rows={4} defaultValue={this.props.oldReview.review} name="review" placeholder="Please enter review of review" onChange={this.onChange} />
          <Input name="influencer" defaultValue={this.props.oldReview.influencer._id} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
          <Input name="video" defaultValue={this.props.oldReview.video} placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
          <Input name="voicenote" defaultValue={this.props.oldReview.voicenote} placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
          <button onClick={this.handleSubmit}>Update</button>
        </div>
      );
    } else {
      Router.push('/');
      return null;
    }
  }
}

export default ReviewUpdate;