import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';


class ProductList extends Component {
  state = {
    products: []
  }

  fetchProducts = () => {
    ProductService.getAll()
      .then(products => this.setState({
        ...this.state,
        products
      }))
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render(){
    console.log(this.state.products)
    return(
      <div>HEY</div>
    )
  }
}

export default ProductList;
