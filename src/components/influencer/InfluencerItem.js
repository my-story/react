import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as toastr from 'toastr';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';

class InfluencerList extends Component{
  state = {
    update: false,
  }

  static contextType = UserContext;

  delete = () => {
    let  id  = this.props.influencer._id;
    let user = {user: this.context.user};

    InfluencerServices.deleteInfluencer(user, id)
      .then((review) => {   
          console.log(review);
          toastr.success("deleted the review");
      })
      .catch(err => console.log(err));
  }


  saidNo = () => {
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

  update = () => {
    this.setState({
      update: true
    })
  }

  render() {
    if (this.context.user.role !== "Admin") {
      return(
        <div key={this.props.index} className="influencer-card">
        <Link href={`review/${this.props.influencer._id}`}>
          <div>
            <p>name: {this.props.influencer.name.firstName} lastname: {this.props.influencer.name.lastName}</p>          

            <p>description: {this.props.influencer.review}</p>
            {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
          </div>
        </Link>
        </div>
      )
    } else {
      if (this.state.update === true) {
        Router.push('/influencerUpdate/' + this.props.influencer._id);
        return null;
      }
      return(
        <div className="influencer-card">
        <Link href={`review/${this.props.influencer._id}`}>
          <div>
            <p>name: {this.props.influencer.name.firstName} lastname: {this.props.influencer.name.lastName}</p>
            <p>description: {this.props.influencer.review}</p>
            {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
          </div>
        </Link>
        <button onClick={this.update}>Update</button>
        <button onClick={this.submit}>Delete</button>
        </div>
      )
    }
  }
}

export default InfluencerList;