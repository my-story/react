import React, { Component } from 'react';
import ProductService from '../src/services/ProductServices';
import SearchBar from '../src/components/influencer/SearchInfluencer';
import ProductOne from "../src/components/products/ProductOne";
import CategoryBubbleOne from '../src/components/category/CategoryBubbleOne';

class ProductList extends Component {
  state = {
    products: [],
    user: {},
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

  filterPriceDecending = () => {
    ProductService.filterPriceDecending()
    .then((res) => this.setState({ products: res }))
    .catch((err) => console.log(err))
  }

  filterPriceAcending = () => {
    ProductService.filterPriceAcending()
    .then((res) => this.setState({ products: res }))
    .catch((err) => console.log(err))
  }


  render() {
    const { products, category } = this.state

    return (
      <div className="product-all-page">
        {/* <p>Products</p>
        <div>
          <SearchBar getFilter={this.searchBar} />
        </div> */}
        <div>
          <h1>Products</h1>
        </div>
        <div>
          <div className="category-bar"> 
            <p><b className="all-categories-p" >All Categories: </b></p>
            <div>
              {category.map((category, index) => {
                return (
                  <div>
                    <CategoryBubbleOne searchbar={this.searchBar} category={category}></CategoryBubbleOne>
                  </div>
                )
               })}
            </div>
          </div>
          <div>
            <button onClick={this.filterPriceDecending}>High-To-Low:</button>
            <button onClick={this.filterPriceAcending}>Low-To-High:</button>
          </div>
          <div className="all-products-span-div">
            <span className="all-products-span">All Products ({this.state.products.length})</span>
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
