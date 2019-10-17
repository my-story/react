import React, { Component } from 'react';
import * as toastr from 'toastr';
import Cookies from 'universal-cookie';
import QtyContext from "../../src/components/contexts/QtyContext";
import ProductServices from '../../src/services/ProductServices';
import Votes from "../../src/components/votes/Votes";

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
      <div className="product-detail-page">
        <section className="product-first-section">
          <div id="product-pictures">
            <div id="product-pictures-circle">
            <img className="main-image" src={this.state.images[0]} alt="the product" />
            <div id="image-circle">
              <img id="options-pictures" src={this.state.images[0]} alt="options-pictures" />
            </div>
            </div>
          </div>
        <div id="product-description">
          <div>
          <h2 id="product-model"><b>{this.state.model}</b></h2>
          <div className="product-number-div">
          <p id="product-number1">Product #</p>
          <p id="product-number">{this.state._id}</p>
          </div>
          <div className="product-description-div">
          <p id="product-description">{this.state.description}</p>
          </div>
          <p id="product-prize">${this.state.prize}</p>
          <button onClick={this.addCart} className="product add-to-cart"><b>Add to Cart</b></button>
          </div>
        </div>
        </section>
        <section className="specification">
          <h2><b>Specifications</b></h2>
          <div>
            <ul>
              <li>You know that good good</li>
              <li>You know that good good</li>
              <li>You know that good good</li>
              <li>You know that good good</li>

            </ul>
          </div>
        </section>
        <section className="product-expert-quote">
        <div className="product-expert-picture">
          <div>

          </div>
          <div>
          <Votes></Votes>
          </div>
        </div>
        <div>
          <img alt="quotes-air" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1568057128/quotes.svg"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum massa justo, sit amet feugiat mi tempus.</p>
          <p>Review by Joshua Sterling</p>
        </div>
        </section>

      </div>

    )
  }
}

export default ProductDetail;