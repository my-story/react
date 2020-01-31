import React, { Component } from 'react';
import * as toastr from 'toastr';
import Cookies from 'universal-cookie';
import QtyContext from "../../components/contexts/QtyContext";
import ProductServices from '../../services/ProductServices';
import Votes from "../../components/votes/Votes";

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

  backedByProduct = () => {
    const {id} = this.state._id;
    
  }

  render() {
  const { influencer } = this.state || {};
  const {model} = this.state || "";
  const {name} = this.state.influencer || {};

 
  if (model === undefined){
    return <div></div>
  } else {
    return (
      <div className="product-detail-page">
        <section className="product-first-section">
          <div id="product-pictures">
            <div id="product-pictures-circle">
            <img className="main-image" src={this.state.images[0]} alt="the product" />
            <div id="image-circle">
              <img id="options-pictures" src={this.state.images[0]} alt="options-pictures" />
            </div>
            <div id="image-circle2">
              <img id="options-pictures" src={this.state.images[0]} alt="options-pictures" />
            </div>
            <div id="image-circle3">
              <img id="options-pictures" src={this.state.images[0]} alt="options-pictures" />
            </div>
            </div>
        </div>
        <div id="product-description">
          <div className="product-model-div">
            <h2 id="product-model"><b>{this.state.model}</b></h2>
          {/* <div className="product-number-div">
            <p id="product-number1">Product #</p>
            <p id="product-number">{this.state._id} should alter ID</p>
          </div> */}
          <div className="product-description-div">
            <p id="product-description-1">{this.state.description}</p>
          </div>
          <div className="product-price-add">
          <p id="product-prize">${this.state.prize}</p>
          <button onClick={this.addCart} className="product add-to-cart"><b>Add to Cart</b></button>
          </div>
          </div>
        </div>
        </section>
        <div className="specification">
          <h2><b>Specifications</b></h2>
          <div>
            <ul>
              <li>You know that good good, it is good indeed boyy pero q es lo que pasa si le meto mas palabras jajaja , lqql</li>
              <li>You know that good good, it is good indeed boyy</li>
              <li>You know that good good, it is good indeed boyy</li>
              <li>You know that good good, it is good indeed boyy</li>
              <li>You know that good good, it is good indeed boyy</li>
              <li>You know that good good, it is good indeed boyy</li>
            </ul>
          </div>
        </div>
        
        {/* Code function that gets bakced by list */}
        <div className="product-backed-by">
          <div>
            <p><b>Backed by:</b></p>
            {/* <img id="expert-quote-picture" src={influencer.profilePic} alt="Sage" />
            <img id="expert-quote-picture" src={influencer.profilePic} alt="Sage" />
            <img id="expert-quote-picture" src={influencer.profilePic} alt="Sage" /> */}
            
          </div>
        </div>
        {/* <section className="product-expert-quote">
        <div className="product-expert-picture">
          <div>
            <img id="expert-quote-picture" src={influencer.profilePic} alt="Sage" />
          </div>
          <div>
          <Votes></Votes>
          </div>
        </div>
        <div className="expert-quote">
          <img alt="quotes-air" id="quotes-air" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1568057128/quotes.svg"/>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum massa justo, sit amet feugiat mi tempus.</p>
          <div className="link-review-div">
            <p id="link-to-review">Conversation with PLACEHOLDER</p>
            <img id ="arrow-right" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1571419511/icons8-expand-arrow-24.png" alt="arrow" />
          </div>
          </div>
        </div>
        </section> */}
      </div>

    )
  }
}
  }
    

export default ProductDetail;