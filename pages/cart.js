import React, { Component } from 'react';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import QtyContext from "../components/contexts/QtyContext";
import CartItem from "../components/cart/CartItem";

class CartLanding extends Component {

  state = {
    products: "",
    user: "",
    fetchedUser: false,
    seecart: false,
    userLogged: false,
    newProducts: "",
    productsQty: [],
    total: this.getTotal()
  }

  static contextType = QtyContext;

  fetchCart = () => {
    const cookies = new Cookies();
    if (cookies.get('Products') !== undefined) {
      this.setState({
        ...this.state,
        products: cookies.get('Products'),
        fetchedUser: false
      })
    } else {
      this.setState({
        ...this.state,
        products: null,
        fetchedUser: false
      })
    }
  }

  setUser = () => {
    this.setState({
      ...this.state,
      user: this.props.user,
      fetchedUser: true,
    })
  }

  getTotal() {
    let counter = 0;
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");

    if (cookies.get("Products") === undefined) {
      return;
    }

    if (cookieArr !== undefined) {
      for (let i = 0; i < cookieArr.length; i++) {
        counter += (cookieArr[i].prize * cookieArr[i].qty);
      }
    }
    if (counter === 0) {
      this.setState({
        ...this.state,
        products: null
      })
    }


    return counter;
  }

  componentDidMount() {
    this.setUser();
  }


  delete(e, i) {
    e.preventDefault();
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");
    
    for (let j = 0; j < cookieArr.length; j++) {
      if (i.influencer._id === cookieArr[j].influencer._id) {
        cookieArr.splice(j, 1);
        cookies.set("Products", cookieArr, { path: '/' });
      }
    }

    if (cookieArr.length === 0) {
      const cookies = new Cookies();
      cookies.remove("Products");
      this.setState({
        ...this.state,
        products: null
      })
    } else {
      this.setState({
        ...this.state,
        products: cookies.get("Products"),
        total: this.getTotal()
      })
    }
    this.context.updateQty();
  }

  deleteProducts() {
    this.setState({
      products: null,
    })
  }



  onCheckout() {
    const cookies = new Cookies();
    cookies.get("Products");
  }

  updateTotal() {
    this.setState({
      ...this.state,
      total: this.getTotal()
    })
  }

  render() {

    if (this.state.fetchedUser) {
      this.fetchCart();
    }

    if (this.state.products == null) {
      return (
        <div>Your cart is empty</div>
      )
    }
    if (this.state.products[0] !== null) {
      if (this.state.products !== "") {
        this.getTotal();
        return (
          <div className="cart-page">
            <div className="cart-heading">
              <div>
              <h1>Your Cart</h1>
              <p># items</p>
              </div>
              <div className="cart-total">
                <p>Total</p>
                <p>$230123</p>
              </div>
            </div>
            {this.state.products.map((i, index) => {
              return (
                <div key={index} className="products-card">
                  <CartItem user={this.props.user} key={index} product={i} updateTotal={this.updateTotal.bind(this)} />
                  <button onClick={(e) => this.delete(e, i)}>Delete</button>
                </div>
              )
            })}
            <h3>Total:{this.state.total}</h3>

            <Link href={"/shipping"}>
              <button onClick={this.onCheckout}>Checkout</button>
            </Link>


          </div>
        )
      } else {
        return (
          <div>Loading....</div>
        )
      }
    } else {
      return (
        <div>Your cart is empty</div>
      )
    }
  }
}

export default CartLanding;