import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
// import axios from 'axios';
import * as toastr from 'toastr';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ProductServices from '../../services/ProductServices';
import UserContext from '../contexts/UserContext';


class ProductOne extends Component {
  state = {
    update: false,
  }
  static contextType = UserContext;

  delete = () => {
    let id = this.props.i.influencer._id;
    ProductServices.deleteProduct(id)
      .then(() => toastr.success("deleted the product"))
      .catch(err=>console.log(err))
  };

  update = () => {
    this.setState({
      update: true
    })
  };

  saidNo = () => {
    toastr.error("didn't delete the product");
  };   

  submit = () => {
    confirmAlert({
      title: 'Confirm to delete this product',
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

  render() {

    if (this.context.user.role === "Admin") {
      if (this.state.update === true) {
        Router.push('/productUpdate/' + this.props.i._id);
        return null;
      };
      return(
        <div key={this.props.index} className="influencer-card">
          <Link key={this.props.index} href={`product/${this.props.i._id}`}>
              <div>
                <p>model: {this.props.i.model}</p>
                <p>description: {this.props.i.description}</p>
                <p>influencer: {this.props.i.influencer.name.firstName}</p>
                <img height="100" src={this.props.i.images[0]} alt={this.props.i.name} />
              </div>
          </Link>
          <div>
          <button onClick={this.submit}>Delete</button>
          <button onClick={this.update}>Update</button>
          </div>
        </div> 
      )
    } else {
      return(
        <div key={this.props.index} className="influencer-card">
          <Link key={this.props.index} href={`product/${this.props.i._id}`}>
              <div>
                <p>model: {this.props.i.model}</p>
                <p>description: {this.props.i.description}</p>
                <p>influencer: {this.props.i.influencer.name.firstName}</p>
                <img height="100" src={this.props.i.images[0]} alt={this.props.i.name} />
              </div>
          </Link>
        </div>
      )
    }
  }
}

export default ProductOne;