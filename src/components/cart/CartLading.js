import  React , { Component }  from 'react';

import {Link} from 'react-router-dom'
import CartItem from "./CartItem";
import Cookies from 'universal-cookie';



class CartLanding extends Component {

    state = {
      products: "",
      user:"",
      fetchedUser: false,
      seecart: false,
      userLogged: false ,
      newProducts: "",
      productsQty: [],
    }
  
  

  fetchCart = () => { 
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
  }

  setUser = ()=>{
    this.setState({
      ...this.state,
      user: this.props.user,
      fetchedUser: true,
    })
  }

  getTotal(){
      var counter = 0;
      const cookies = new Cookies();
      const cookieArr = cookies.get("Products");

      for (var i = 0; i < cookieArr.length; i++){
        counter += (cookieArr[i].prize * cookieArr[i].qty)
      }
      
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


  delete(e, i){
    e.preventDefault()

      const cookies = new Cookies();
      const cookieArr = cookies.get("Products");

      for (var j = 0; j < cookieArr.length; j++){

        if (i.influencer === cookieArr[j].influencer){
          cookieArr.splice(j, 1);
          cookies.set("Products", cookieArr, { path: '/' });
        }
      }

      if(cookieArr.length === 0){
        const cookies = new Cookies();
        cookies.remove("Products");
        this.setState({
          ...this.state,
          products: null
        })
      } else {
        this.setState({
          ...this.state,
          products: cookies.get("Products")
        })
      }
  }

  deleteProducts(){
    this.setState({
      products: null,
    })
  }


  arrangeDuplicates(){
    var productArr = this.state.products;
    var newArr = [];
    for(var i = 0; i < productArr.length; i++){
      var model = productArr[i].model;
      // var times = this.howManyTimes(model);
      if (newArr.map(x => x.model).indexOf(model) === -1){
        newArr.push(productArr[i]);
      }
    }
    return newArr;
    // this.setState({
    //   ...this.state,
    //   newProducts: newArr
    // })
    
  }

  onCheckout(){
    const cookies = new Cookies();
    cookies.get("Products")
  }
  
  render(){

    if(this.state.fetchedUser){
      this.fetchCart()
    }
  
  if (this.state.products == null){
      return(
        <div>Your cart is empty</div>
      )
  }
  if(this.state.products[0] !== null){
    if(this.state.products !== ""){
      this.getTotal();
      // this.arrangeDuplicates();
      return(
        <div className="cart-page">
        {this.state.products.map((i,index)=>{
          return(
          <div key={index} className="products-card">
             <CartItem user={this.props.user} key={index} product={i} />
             <button onClick={(e) => this.delete(e, i)}>Delete</button>
          </div>
          )
          })}
          <h3>Total:{this.getTotal()}</h3>

          <Link to={{
            pathname:"/shipping",
            }}>
          <button onClick={this.onCheckout}>Checkout</button>
          </Link>


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