import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../../components/contexts/UserContext';
import ReviewServices from "../../services/ReviewServices";

const { TextArea } = Input;

class ReviewUpdate extends Component {

  state = {
    title: "",
    one: "",
    two: "",
    three: "",
    specs: "",
    kit: "",
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


  getReview = () => {
    ReviewServices.getReview(this.props.id)
      .then((review) =>{
        this.setState({
          title: review.title,
          one: review.review.one,
          two: review.review.two,
          three: review.review.three,
          specs: review.review.specs,
          kit: review.kit,
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
      one: this.state.one,
      two: this.state.two,
      three: this.state.three,
      specs: this.state.specs,
      influencer: this.state.influencer,
      video: this.state.video,
      kit: this.state.kit,
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

    // console.log(this.props.oldReview.title)
    if (this.context.user.role === "Admin" && !this.state.created) {
      if(this.state.title){
        return (
          <div>
            <Input name="title" defaultValue={this.state.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
            <TextArea rows={4} name="one" placeholder="How I Got here..." defaultValue={this.state.one} onChange={this.onChange} />
            <TextArea rows={4} name="two" placeholder="How X helped me..." defaultValue={this.state.two} onChange={this.onChange} />
            <TextArea rows={4} name="three" placeholder="Here it is!..." defaultValue={this.state.three} onChange={this.onChange} />
            <TextArea rows={4} name="specs" placeholder="SPECS" defaultValue={this.state.specs} onChange={this.onChange} />
            <Input name="influencer" defaultValue={this.state.influencer} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
            <Input name="kit" defaultValue={this.state.kit} placeholder="Please enter kit ID " allowClear onChange={this.onChange} />
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