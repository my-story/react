import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';
import SearchBar from '../influencer/SearchInfluencer';
import ProductOne from "./ProductOne";


class ProductList extends Component {
  state = {
    products: [],
    user:{},
    productsNew:[],
    category:[
      "Sports","Music","Tech","Clothes"
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

  componentDidMount () {
    this.fetchProducts();
    this.getUser();
  };

  searchBar = (e) => {
    ProductService.searchProduct(e.target.value)
      .then((res) => this.setState({ products:res }))
      .catch((err)=>console.log(err))
  };


  render(){
    const {products, category} = this.state
    return(
      <div>
        <div>
          <SearchBar getFilter={this.searchBar} />
        </div>
        <div>
          {category.map((c,index)=>{
            return(
              <div>
                <button value={c} onClick={(e) => this.searchBar(e)}>{c}</button>
              </div>
            )
          })}

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
