import  React , { Component }  from 'react';
import OrderServices from "../../services/OrderServices";
import CartItem from "./CartItem";
import {Link} from 'react-router-dom'
import Checkout from '../Payment/Checkout'

import axios from "axios";



class CartLanding extends Component {

    state = {
      products: "",
      user:"",
      fetchedUser: false,
      seecart: false  
    }
  
  

  fetchCart = (user) => {
    console.log("this fetch cart user:", user)
    OrderServices.getCart(user)
      .then(response => {
        this.setState({
          ...this.state,
          products: response.product,
          fetchedUser: false
        })
        
      }).catch(error => {
          console.log("no products")
          console.log(error);
      })
  }

  setUser = ()=>{
    this.setState({
      ...this.state,
      user: this.props.user,
      fetchedUser: true,
    })
  }

  getTotal(){
    console.log(this.state)
    var counter = 0;

    for (var i = 0; i < this.state.products.length; i++){
      counter += this.state.products[i].prize;
    }
    console.log(this.state);

    return counter;
  }
  componentDidMount() {
    this.setUser()
  }

  // openCart=()=>{
  //   if(this.state.seecart === true){
  //     this.setState({seecart:false})
  //   }else if(this.state.seecart === false){
  //     this.setState({seecart:true})

  //   }
  


  //   }
  

  delete(e, i){
    e.preventDefault()
    console.log(i._id)
    const url = `http://localhost:3002/order/delete/${i._id}`;

    axios.post(url , {
      user: this.props.user
    }, {withCredentials:true})
      .then((res) => this.setState({
        products: res.data.product
      }))
      .catch((err) => err)
  }


  render(){
    console.log("state:",this.state);
    console.log("props", this.props);
    if(this.state.fetchedUser){
      console.log("this is the user:", this.state.user);
      this.fetchCart(this.state.user._id)
    }

  if(this.state.products[0] !== null){
    if(this.state.products !== ""){
      this.getTotal();
      return(
        <div className="cart-page">
        {this.state.products.map((i,index)=>{
          return(
          <div key={index} className="products-card">
             <CartItem user={this.props.user} key={index} product={i}/>
             <button onClick={(e) => this.delete(e, i)}>Delete</button>
          </div>
          )
          })}
          <h3>Total:{this.getTotal()}</h3>

          {/* <Link to={{
            pathname:'/payment',
            state: {
              user: this.state.user,
              products: this.state.products,
            }
            }}>
          <button>Proceed to Checkout</button>
          </Link> */}
                <Checkout 
                name={`You have ${this.state.products.length}# of item(s)`}
                description={"thank you for buying with my story"}
                amount={this.getTotal()}           
                >
                </Checkout>
        </div>
      )
    } else {
      return(
        <div>Loading....</div>
      )
    }
  }  else {
    return(
      <div>Your cart is empty</div>
    )
  }
  }
}

export default CartLanding;