import React, { Component } from 'react';
import ProductService from '../services/ProductServices';
import SearchBar from '../components/influencer/SearchInfluencer';
import ProductOne from "../components/products/ProductOne";


class ProductList extends Component {
  state = {
    products: [],
    user: {},
    productsNew: [],
    category: [
      "All","Sports", "Music", "Tech", "Clothes"
    ],
  };

  fetchProducts = () => {
    ProductService.getAll()
      .then(products => this.setState({
        ...this.state,
        products
      }))
  };

  getUser = () => {
    this.setState({
      ...this.state,
      user: this.props.user
    })
  };

  componentDidMount() {
    this.fetchProducts();
    this.getUser();
  };

  searchBar = (e) => {
    if(e === "All"){
      this.fetchProducts()
    } else {
      ProductService.searchProduct(e)
      .then((res) => this.setState({ products: res }))
      .catch((err) => console.log(err))
    }
  };


  render() {
    const { products, category } = this.state
    return (
      <div className="product-all-page">
        {/* <p>Products</p>
        <div>
          <SearchBar getFilter={this.searchBar} />
        </div> */}
        <div>
          <div className="category-bar"> 
            <p><b>All Categories: </b></p>
            <div>
              {category.map((c, index) => {
                return (
                  <div>
                    <span id="category-bubble" title={c} onClick={() => this.searchBar(c)}>{c}</span>
                  </div>
                )
               })}
            </div>
          </div>
          </div>
        <div className="expert-card-section">
          {products.map((i, index) => {
            return (
              <div>
                <ProductOne i={i} index={index} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductList; 
