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
    console.log(this.props);

    return(
        <div key={this.props.index} className="product-big-card">
          <Link key={this.props.index} href={`product/${this.props.i._id}`} >
              <div className="product-big-card-image">
                <img className="product-big-card-image-size" src={this.props.i.images[0]} alt={this.props.i.name} />
                <div className="p-product-big">
                  <span>{this.props.i.model}</span>
                </div>
                <div className="p-product-big">
                  <span>${this.props.i.prize}</span>
                </div>
              </div>
          </Link>
        </div>
    )
  }
}

export default ProductOne;