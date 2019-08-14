import React, { Component } from 'react';
import * as toastr from 'toastr';
import Cookies from 'universal-cookie';
import QtyContext from "../../src/components/contexts/QtyContext";
import ProductServices from '../../src/services/ProductServices';
import { addCart } from '../../src/constants/Utils';

class ProductDetail extends Component {
  state = {
    category: "",
    description: "",
    influencer: {},
    model: "",
    prize: "",
    images: "",
    _id: "",
    qty: 1,
    total: undefined,
  };

  static contextType = QtyContext;

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  componentDidMount() {
    const { id } = this.props;

    ProductServices.productDetail(id)
      .then((res) => this.setState(res))
      .catch(err => console.log(err))
  };

  fetchQty() {
    const cookies = new Cookies();
    var currentProducts = cookies.get('Products');

    for (var i = 0; i < currentProducts.length; i++) {
      if (currentProducts[i].influencer._id === this.state.influencer._id) {
        this.setState({ qty: currentProducts[i].qty });
      }
    }
  };


  addCart = () => {
    const prepareStateForCookie = state => {
        // modifying state is bad practice so we need a copy of it
        // since profilePic is base64 we need to set it to null otherwise we will quickly exceed the Cookie size limit
        const stateCopy = {...state, influencer: {...state.influencer}}; 
        stateCopy.influencer.profilePic = null;
        return stateCopy;
    };

    const cookies = new Cookies();
    if (this.state.total === 0) {
      toastr.error("this product is sold out");
    }

    if (this.state.qty <= 9 && this.state.qty <= this.state.total && this.state.total !== 0) {
      if (cookies.get("Products") !== undefined) {
        var currentProducts = cookies.get('Products');
        var isRepeated = false;
        for (var i = 0; i < currentProducts.length; i++) {
          if (currentProducts[i].influencer._id === this.state.influencer._id) {
            currentProducts[i].qty = currentProducts[i].qty + 1;
            this.setState({ qty: currentProducts[i].qty + 1 });
            isRepeated = true;
          };
        };
        if (isRepeated) {
          cookies.set("Products", currentProducts, { path: '/' });
        } else {
          currentProducts.push(prepareStateForCookie(this.state));
          cookies.set("Products", currentProducts, { path: '/' });
        }
      } else {
        cookies.set("Products", [prepareStateForCookie(this.state)], { path: '/' });
      }
      this.context.updateQty();
    };
  };

  render() {
    return (
      <div>
        <h3>Product Detail</h3>
        <ul>
          <li><img src={this.state.images[0]} alt="the product" /></li>
          <li>category: {this.state.category}</li>
          <li>description: {this.state.description}</li>
          <li>influencer: {this.state.influencer.name ? this.state.influencer.name.firstName + ' ' + this.state.influencer.name.lastName : ''}</li>
          <li>model: {this.state.model}</li>
          <li>price: {this.state.prize}</li>
          <li>amount in stock: {this.state.total}</li>
        </ul>
        <button onClick={this.addCart}>add to cart</button>

      </div>

    )
  }
}

export default ProductDetail;