import React,{ Component } from 'react';
// import { Redirect} from 'react-router-dom';
import Router from 'next/router';
import { Input } from 'antd';
import ReviewServices from "../../services/ReviewServices";

const { TextArea } = Input;

class ReviewForm extends Component {
    state= {
      title:"",
      one:"",
      two:"",
      three:"",
      specs:"",
      influencer:this.props.influencer,
      video:"",
      voicenote:"",
      created:false,
      product: this.props.product,
      reviewDone:{}
    }


    onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = () => {
      ReviewServices.createReview({
          title: this.state.title,
          one: this.state.one,
          two: this.state.two,
          three: this.state.three,
          specs: this.state.specs,
          influencer: this.state.influencer,
          video: this.state.video,
          voicenote: this.state.voicenote,
          product: this.state.product,
          user: this.props.user
        })
        .then((res) => this.setState({created:true,reviewDone:res}))
        .catch((e)=>console.log(e))  
    };
      
    

    render() {
      if (this.props.user.role === "Admin") {
        if (this.state.created) {    
            Router.push('/');
            return null;
        } else {
          return (
            <div>  
              <Input name="title" placeholder="Please enter title " allowClear onChange={this.onChange} />
              <TextArea rows={4} name="one" placeholder="How I Got here..." onChange={this.onChange} />
              <TextArea rows={4} name="two" placeholder="How X helped me..." onChange={this.onChange} />
              <TextArea rows={4} name="three" placeholder="Here it is!..." onChange={this.onChange} />
              <TextArea rows={4} name="specs" placeholder="SPECS" onChange={this.onChange} />
              <Input name="influencer" placeholder="Please enter infleuncer ID " defaultValue={this.state.influencer._id} allowClear onChange={this.onChange} />
              <Input name="video" placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
              <Input name="voicenote" placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
              <Input name="product" placeholder="Please enter influencer product" allowClear defaultValue={this.state.product._id} onChange={this.onChange} />
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          )}   
          } else {
            Router.push('/');
            return null;
          }
}; 
};

export default ReviewForm;