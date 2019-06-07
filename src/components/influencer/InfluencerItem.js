import React, { Component } from 'react';
import UserContext from '../contexts/UserContext';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as toastr from 'toastr';

class InfluencerList extends Component{
  static contextType = UserContext;

  delete = () =>{
    let  id  = this.props.influencer._id
    const url= `http://localhost:3002/influencer/delete/${id}`
    
    axios.post(url, this.context.user, {withCredentials:true})
    .then((review)=>{   
        console.log(review)
        toastr.success("deleted the review");
        // this.setState({review:review.data[0],influencer: review.data[0].influencer})
    })
    .catch(err=>console.log(err))
}
  render(){
    if(this.context.user.role !== "Admin"){
      return(
        <div key={this.props.index} className="influencer-card">
        <Link to={`review/${this.props.influencer._id}`}>
          <p>name: {this.props.influencer.name}</p>
          <p>description: {this.props.influencer.review}</p>
          {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
        </Link>
        </div>
      )
    } else {
      return(
        <div className="influencer-card">
        <Link to={`review/${this.props.influencer._id}`}>
          <p>name: {this.props.influencer.name}</p>
          <p>description: {this.props.influencer.review}</p>
          {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
        </Link>
        <button>Update</button>
        <button onClick={this.delete}>Delete</button>
        </div>
      )
    }
  }
}

export default InfluencerList;