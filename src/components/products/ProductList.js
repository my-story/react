import  React , { Component }  from 'react';
import ProductService from '../../services/ProductServices';
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
    // console.log(products.influencer)
    if(!user)return <div>Loadingg....</div>
    // if(!products)return <div>Loading...S</div>
    
    
    return(
      <div>
        HEY
      {products.map((i,index)=>{
        return(
            
            <div key={index} className="influencer-card">
            <p>model: {i.model}</p>
            <p>description: {i.description}</p>
            <p>influencer: {i.influencer.name}</p>
            <img height="100" src={i.images} alt="{i.name}" />
            </div>
        )
    })}
    </div>
    )
  }
}

export default ProductList;
