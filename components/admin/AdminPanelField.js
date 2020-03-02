import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import ProductServices from "../../services/ProductServices";
import ReviewServices from "../../services/ReviewServices";
import KitServices from '../../services/KitServices';

class AdminPanelField extends Component {
  state = {
    influencers: {},
    product: "",
    review: "",
    kit: "",
    tip: "",
    technique: "",
    survivalProduct: ""
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
    
    KitServices.getTipAdmin(id)
      .then(tip => this.setState({
        tip: tip
      }))
      .catch((err) => console.log(err))

      KitServices.getTechniqueAdmin(id)
      .then(technique => this.setState({
        technique: technique
      }))
      .catch((err) => console.log(err))

      KitServices.getSurvivalProductAdmin(id)
      .then(survivalProduct => this.setState({
        survivalProduct: survivalProduct
      }))
      .catch((err) => console.log(err))
    
    
  }

  componentDidMount = () => {
    this.getAll(this.props.influencer._id);
  }

  onClickKit = () => {
    Router.push({
      pathname:`/admin/kit-update/${this.state.kit._id}`,
      props: this.state.kit._id
    });
  }

  onClickInfluencer = () => {
    Router.push('/admin/influencer-update/' + this.props.influencer._id);
  }

  onClickReview = () => {
    Router.push('/admin/review-update/' + this.props.influencer._id);
  }

  allTips = () => {
    const {tip} = this.state;
    if(tip.length > 0) {
      tip.map((tip,index) => {
        console.log(tip)
        return(
          <div>
          <Link href={`admin/tip-update/${tip._id}`} key={index}>
            <p>{tip.header} hedaer</p>
          </Link>
          </div>
        )
      })

    } else {
      return
    }
  };
  //{this.props.influencer._id}
  //{this.state.product[0]._id}
  //{this.state.review._id}

  render() {
    console.log(this.state);

    if (this.state.review && this.state.kit && this.state.tip){
    return(
      <div>
      <ul>
        <li onClick={this.onClickInfluencer}>Influencer: {this.props.influencer.name.firstName} {this.props.influencer.name.lastName}</li>
        <li onClick={this.onClickKit}>Kit {this.state.kit._id}</li>
        {/* <li onClick={this.onClickProduct}>Product: {this.state.product[0].model}</li> */}
        <li onClick={this.onClickReview}>Review: {this.state.review.title}</li>
      </ul>
        {this.allTips()}
      </div>
    )
    } else {
      return(
        <ul>
          <li>Loading...</li>
        </ul>
      )
    }
  }
}

export default AdminPanelField;