import  React , { Component }  from 'react';
import CartItem from "./CartItem";
import Checkout from '../Payment/Checkout'
import Cookies from 'universal-cookie';



class CartLanding extends Component {

    state = {
      products: "",
      user:"",
      fetchedUser: false,
      seecart: false,
      userLogged: false ,
      newProducts: "",
      productsQty: []
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

  howManyTimes(model){
    var counter = 0;
    for (var j = 0; j < this.state.products.length; j++){
      if(this.state.products[j].model === model){
        counter++;
      }
    }
    return counter;
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

  }

  passState(){

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
             <CartItem passState={this.passState.bind(this)} user={this.props.user} key={index} product={i} times={this.howManyTimes(i.model)}/>
             <button onClick={(e) => this.delete(e, i)}>Delete</button>
          </div>
          )
          })}
          <h3>Total:{this.getTotal()}</h3>

                <Checkout 
                name={`You have ${this.state.products.length}# of item(s)`}
                description={"thank you for buying with my story"}
                amount={this.getTotal()}
                deleteProducts={this.deleteProducts}
                user={this.props.user}          
                >
                </Checkout> 
                <button onClick={this.onCheckout.bind(this)}>Checkout</button>
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