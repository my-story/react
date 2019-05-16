import  React , { Component }  from 'react';
import OrderServices from "../../services/OrderServices";
import CartItem from "./CartItem";
import {Link} from 'react-router-dom'
import Checkout from '../Payment/Checkout'
import Cookies from 'universal-cookie';

import axios from "axios";



class CartLanding extends Component {

    state = {
      products: "",
      user:"",
      fetchedUser: false,
      seecart: false,
      userLogged: false  
    }
  
  

  fetchCart = (user) => {
    console.log("this fetch cart user:", user)
    OrderServices.getCart(user)
      .then(response => {
        this.setState({
          ...this.state,
          products: response.product,
          fetchedUser: false,
          userLogged: true
        })
        
      }).catch(error => {
          console.log("not signed in")
          
          const cookies = new Cookies();
          if(cookies.get('Products') !== undefined){
            this.setState({
              ...this.state,
              products:cookies.get('Products'),
              fetchedUser: false
            })
          } else {
            this.setState({
              ...this.state,
              products:null,
              fetchedUser: false
            })
          }
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
      
      if (counter === 0){
        this.setState({
          ...this.state,
          products:null
        })
      }
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

    if (this.state.userLogged){
      console.log(i._id)
      const url = `http://localhost:3002/order/delete/${i._id}`;
  
      axios.post(url , {
        user: this.props.user
      }, {withCredentials:true})
        .then((res) => this.setState({
          products: res.data.product
        }))
        .catch((err) => err)
    } else {
      const cookies = new Cookies();
      const cookieArr = cookies.get("Products");

      for (var j = 0; j < cookieArr.length; j++){
        console.log("this is i", i);
        console.log(cookieArr[j])

        if (i.influencer === cookieArr[j].influencer){
          cookieArr.splice(j, 1);
          cookies.set("Products", cookieArr, { path: '/' });
        }
      }

      this.setState({
        ...this.state,
        products: cookies.get("Products")
      })
    }
  }

  deleteProducts(){
    console.log("hey delete products");
    this.setState({
      products: null,
    })
  }


  render(){
    console.log("state:",this.state);
    console.log("props", this.props);
    if(this.state.fetchedUser){
      console.log("this is the user:", this.state.user);
      this.fetchCart(this.state.user._id)
    }
  
  if (this.state.products == null){
      return(
        <div>Your cart is empty</div>
      )
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
                deleteProducts={this.deleteProducts}           
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