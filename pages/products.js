import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import ProductService from '../services/ProductServices';
// import SearchBar from '../components/influencer/SearchInfluencer';
import ProductOne from "../components/products/ProductOne";
import CategoryBubbleOne from '../components/category/CategoryBubbleOne';
import { Menu, Dropdown, Icon } from 'antd';

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

    const menu = (
      <Menu>
        <Menu.Item>
          <span onClick={this.filterPriceDecending}>
            High-To-Low
          </span>
        </Menu.Item>
        <Menu.Item>
          <span onClick={this.filterPriceAcending}>
            Low-To-High
          </span>
        </Menu.Item>
      </Menu>
    );
    


    return (
      <div className="product-all-page">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Rebound Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Shop from a list of products that will imorove your lifestyle :)" />
        {/* <link rel="shortcut icon" href="https://img.icons8.com/ios-filled/64/000000/circled-down.png" type="image/x-icon"></link> */}
        </Helmet>
        {/* <p>Products</p>
        <div>
          <SearchBar getFilter={this.searchBar} />
        </div> */}
        <div>
          <h1><b>Products</b></h1>
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
            <span><b>Sort by: </b></span>
            <Dropdown overlay={menu}>
              <span className="ant-dropdown-link">
                price <Icon type="down" />
              </span>
            </Dropdown>
          </div>
          <div className="all-products-span-div">
            <span className="all-products-span">All Products ({this.state.products.length})</span>
          </div>
        </div>
        <div className="product-card-section">
          {products.map((i, index) => {
            return (
              <div className="product-card-1"> 
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
