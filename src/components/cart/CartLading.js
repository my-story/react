import  React , { Component }  from 'react';
import OrderServices from "../../services/OrderServices";
import CartItem from "./CartItem";
import axios from "axios";

class CartLanding extends Component {
  state = {
    products: "",
    user:"",
    fetchedUser: false
  }

  fetchCart = (user) => {
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
    var counter = 0;

    for (var i = 0; i < this.state.products.length; i++){
      counter += this.state.products[i].prize;
    }
    console.log("total");
    return counter;
  }
  componentDidMount() {
    this.setUser()
  }

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
    console.log(this.state.products)
    if(this.state.fetchedUser){
      this.fetchCart(this.state.user._id)
    }

    if(this.state.products !== ""){
      this.getTotal();
      return(
        <div>
        {this.state.products.map((i,index)=>{
          return(
          <div>
             <CartItem user={this.props.user} key={index} product={i}/>
             <button onClick={(e) => this.delete(e, i)}>Delete</button>
          </div>
          )
          })}
          <h3>Total:{this.getTotal()}</h3>
        </div>
      )
    } else {
      return(
        <div>Loading....</div>
      )
    }
  }
}

export default CartLanding;