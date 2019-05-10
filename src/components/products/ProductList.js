import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';
import {Link} from 'react-router-dom'
// import AuthServices from '../../services/AuthServices'

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
  // getUser = ()=>{
  //   AuthServices.loggedin()
  //     .then((user)=>
  //     this.setState({
  //       ...this.state,
  //       user
  //     }))
  //     console.log(this.state.user);
  // }
  componentDidMount() {
    this.fetchProducts();
    // this.getUser()
  }

  render(){
    const {products,user} = this.state
    console.log(products)
    console.log(products.influencer)
    
    return(
      <div>
        HEY
      {products.map((i,index)=>{
        return(
            <Link key={index}to={`product/${i._id}`}>
            <div key={index} className="influencer-card">
              <p>model: {i.model}</p>
              <p>description: {i.description}</p>
              <p>influencer: {i.influencer.name}</p>
              <img height="100" src={i.images} alt="{i.name}" />
            </div>
            </Link>
        )
    })}
      </div>
    )
  }
}

export default ProductList;
