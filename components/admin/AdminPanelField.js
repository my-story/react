import React, { Component } from 'react';
import Router from 'next/router';
import ProductServices from "../../services/ProductServices";
import ReviewServices from "../../services/ReviewServices";
import KitServices from '../../services/KitServices';

class AdminPanelField extends Component {
  state = {
    influencers: {},
    product: "",
    review: "",
    kit: ""
  };

  getAll = (id) => {
    // ProductServices.getOneAdmin(id)
    //   .then(product => this.setState({
    //     product: product
    //   }))
    //   .catch((err) => console.log(err))

    ReviewServices.getReviewAdmin(id)
      .then(review => this.setState({
        review: review
      }))
      .catch((err) => console.log(err))

    KitServices.getKit(id)
    .then(kit => this.setState({
      kit: kit
    }))
    .catch((err) => console.log(err))
    
  }

  componentDidMount = () => {
    this.getAll(this.props.influencer._id);
  }

  onClickKit = () => {
    Router.push({
      pathname:`/admin/kitUpdate/${this.state.kit._id}`,
      props: this.state.kit._id
    });
  }

  onClickInfluencer = () => {
    Router.push('/influencerUpdate/' + this.props.influencer._id);
  }

  onClickReview = () => {
    Router.push('/reviewUpdate/' + this.props.influencer._id);
  }

  //{this.props.influencer._id}
  //{this.state.product[0]._id}
  //{this.state.review._id}

  render() {
    console.log(this.state);

    if (this.state.review && this.state.kit){
    return(
      <ul>
        <li onClick={this.onClickInfluencer}>Influencer: {this.props.influencer.name.firstName} {this.props.influencer.name.lastName}</li>
        <li onClick={this.onClickKit}>Kit {this.state.kit._id}</li>
        
        {/* <li onClick={this.onClickProduct}>Product: {this.state.product[0].model}</li> */}
        <li onClick={this.onClickReview}>Review: {this.state.review.title}</li>
      </ul>
    )
    } else {
      return(
        <ul>
          <li>loading...</li>
        </ul>
      )
    }
  }
}

export default AdminPanelField;