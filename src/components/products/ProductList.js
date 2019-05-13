import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';
import {Link} from 'react-router-dom'
// import ProductDetail from './ProductDetail';
// import ProductOne from "./ProductOne";
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

  render(){
    console.log(this.state)
    const {products,user} = this.state
    
    
    return(
      <div>
        HEY
      {products.map((i,index)=>{
        return(
          <Link key={index} to={{
            pathname:`product/${i._id}`,
            state: {
              user: this.state.user,
            }
            }}>
             <div key={index} className="influencer-card">
               <p>model: {i.model}</p>
               <p>description: {i.description}</p>
               <p>influencer: {i.influencer.name}</p>
               <img height="100" src={i.images} alt={i.name} />
             </div>
          </Link>
        )
    })}
      </div>
    )
  }
}

export default ProductList;
