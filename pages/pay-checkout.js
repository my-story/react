import React, { Component } from 'react';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import Stripe from '../components/payment/Stripe';
import UserContext from '../components/contexts/UserContext';

const cookies = new Cookies();

class CartPay extends Component {

  state = {
    products: cookies.get("Products"),
    total: 0,
    tax: 0
  }

  static contextType = UserContext;
   static getInitialProps({ query: { rate, address, billing } }) {
    return { 
      rate: JSON.parse(rate), 
      address: JSON.parse(address), 
      billing: JSON.parse(billing) 
    };
  }

  getTotal = () => {
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

  //Arreglar cuando tengamos reward percentages, sacar fees nuestros y tax verdadero
  totalCost = () => {
    const { rate } = this.props;
    let total = 0;
    let tax = Number((+this.getTotal() * 0.025).toFixed(2));
    total = Number((+rate.amount + +this.getTotal() + +tax).toFixed(2));
    this.setState({ total, tax });
  }

  componentDidMount() {
    this.totalCost();
  }

  render() {
    const { products } = this.state;

    if (products === undefined) {
      Router.push('/');
      return null;
    }

    return (
      <div>
        <h2>
          order review:
              </h2>
        <div>
          <p>Order Summary</p>
          {products.map((i, index) => {
            return (
              <div key={index} className="influencer-card">
                <p>name: {i.model}</p>
                <p>price: {i.price}</p>
                <p> {i.description} </p>
              </div>
            )
          })}
          <p>Price: ${this.getTotal()}</p>
          <p>Shipping: ${this.props.rate.amount}</p>
          <p>Tax: ${this.state.tax}</p>
          <p>Total: ${this.state.total}</p>
        </div>
        <Stripe user={this.props.user} address={this.props.address} total={this.state.total}></Stripe>
      </div>
    )
  }
}

export default CartPay