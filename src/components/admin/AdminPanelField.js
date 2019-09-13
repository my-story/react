import React, { Component } from 'react';
import Router from 'next/router';
import ProductServices from "../../services/ProductServices";
import ReviewServices from "../../services/ReviewServices";

class AdminPanelField extends Component {
  state = {
    influencers: {},
    product: "",
    review: ""
  };

  getAll = (id) => {
    ProductServices.getOneAdmin(id)
      .then(product => this.setState({
        product: product
      }))
      .catch((err) => console.log(err))

    ReviewServices.getReviewAdmin(id)
      .then(review => this.setState({
        review: review
      }))
      .catch((err) => console.log(err))
  }

  componentDidMount = () => {
    this.getAll(this.props.influencer._id);
  }

  onClickProduct = () => {
    Router.push('/productUpdate/' + this.state.product[0]._id);
  }

  //{this.props.influencer._id}
  //{this.state.product[0]._id}
  //{this.state.review._id}

  render() {
    if (this.state.product && this.state.review){
    return(
      <ul>
        <li>Influencer: {this.props.influencer.name.firstName} {this.props.influencer.name.lastName}</li>
        <li onClick={this.onClickProduct}>Product: {this.state.product[0].model}</li>
        <li>Review: {this.state.review.title}</li>
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