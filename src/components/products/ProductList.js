import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';
// import ProductDetail from './ProductDetail';
// import ProductOne from "./ProductOne";
// import AuthServices from '../../services/AuthServices'
import axios from 'axios';
import SearchBar from '../influencer/SearchInfluencer';
import ProductOne from "./ProductOne";

class ProductList extends Component {
  state = {
    products: [],
    user:{}
  }

  fetchProducts = () => {
    ProductService.getAll()
    
      .then(products => this.setState({
        ...this.state,
        products
      }))
  }
  getUser = ()=>{
    this.setState({
      ...this.state,
      user: this.props.user
    })
  }
  componentDidMount() {
    this.fetchProducts();
    this.getUser()
  }

  onClick = (i) =>{
    console.log("hey");
    console.log(i);
  }

  getFilter = (e) => { 
    let url = "http://localhost:3002/product/filter?search=" + e.target.value
    axios.get(url,{withCredentials:true})
    .then((res)=>{
        this.setState({products:res.data})
    })
    .catch((err)=>console.log(err))
}

  render(){
    console.log(this.state)
    const {products,user} = this.state
    
    
    return(
      <div>
        <div>
          <SearchBar getFilter={this.getFilter} />
        </div>
      {products.map((i,index)=>{
        return(
          <div>
            <ProductOne i={i} index={index}/>
          </div>
        )
    })}
      </div>
    )
  }
}

export default ProductList;
