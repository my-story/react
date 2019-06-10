import React, { Component } from 'react';
import UserContext from '../contexts/UserContext';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import * as toastr from 'toastr';
import InfluencerUpdate from "./InfluencerUpdate";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class InfluencerList extends Component{
  state={
    update: false,
  }
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

  update = () =>{
    this.setState({
      update: true
    })
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
      if(this.state.update === true){
        return(<Redirect to={{
          pathname:"/influencerUpdate",
          state:{influencer: this.props.influencer}
        }} />)
      }
      return(
        <div className="influencer-card">
        <Link to={`review/${this.props.influencer._id}`}>
          <p>name: {this.props.influencer.name}</p>
          <p>description: {this.props.influencer.review}</p>
          {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
        </Link>
        <button onClick={this.update}>Update</button>
        <button onClick={this.submit}>Delete</button>
        </div>
      )
    }
  }
}

export default InfluencerList;