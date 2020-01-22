import React, { Component } from 'react';
import Router from 'next/router';
import { Input, Checkbox } from 'antd';
import * as toastr from 'toastr';
import Cookies from 'universal-cookie';
import countries from '../constants/Countries';
import OrderServices from '../services/OrderServices';
import UserContext from '../components/contexts/UserContext';
import OrderReview from '../components/cart/OrderReview';

class ShippingRates extends Component {

  state = {
    products: "",
    address: {
      name: "",
      company: "",
      street1: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    addressCheck: "",
    billing: true
  }

  static contextType = UserContext;

  componentDidMount = () => {
    const cookies = new Cookies();
    this.setState({ products: cookies.get('Products'), countries });
  }

  getTotal() {
    let counter = 0;
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");
    if (cookieArr !== undefined) {
      for (let i = 0; i < cookieArr.length; i++) {
        counter += (cookieArr[i].prize * cookieArr[i].qty);
      }
    }

    return counter;
  }


  onChange = e => {
    let { address } = this.state;
    address[e.target.name] = e.target.value;
    this.setState({ address });
    const cookies = new Cookies();
    cookies.set("Address", address, { path: '/' });
    console.log(cookies.get("Address"))
  }

  validateAddress = () => {
    const { address } = this.state;

    if (address.name === '' || address.street1 === '' || address.city === '' || address.state === '' || address.zip === '' || address.country === '') {
      toastr.error("Missing Fields");
      return;
    } else {
      OrderServices.checkAddress(address)
        .then((res) => {
          this.setState({ addressCheck: res });
          this.context.setAddress(res);
        })
        .catch((e) => console.log(e))
    }
  }

  useBilling = (e) => {
    if (e.target.checked) {
      this.setState({ billing: true });
    } else {
      this.setState({ billing: false });
    }
  }


  render() {
console.log(this.state)
    if (this.getTotal() === 0) {
      Router.push('/');
      return null;
    }


    if (this.state.addressCheck === "") {
      return (
        <div className="checkout-page">
          <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-timeline">
              <p id="checkout-clicked"><b>1. SHIPPING DETAILS</b></p>
              <p>2. PAYMENT DETAILS</p>
            </div>
          </div>
          <span id="checkout-personal">Personal Information</span>
          <div className="checkout-address-input">
            <div>
              <p>First Name</p>
              <Input id="checkout-input" name="name" placeholder="Enter Name" onChange={this.onChange} />
              <p>Last Name</p>          
              <Input id="checkout-input"name="company" placeholder="Enter Company" onChange={this.onChange} />
              <p>Address</p>
              <Input id="checkout-input" name="street1" placeholder="Enter Complete Street" onChange={this.onChange} />
              </div>
              <div>
              <p>City</p>          
              <Input id="checkout-input" name="city" placeholder="Enter City" onChange={this.onChange} />
              <p>State</p>         
              <Input id="checkout-input" name="state" placeholder="Enter State " onChange={this.onChange} />
              <p>Zipcode</p>    
              <Input id="checkout-input" name="zip" type="number" placeholder="Enter Zipcode" onChange={this.onChange} />
              <p>Country</p>          
              <Input id="checkout-input" name="country" placeholder="Enter Country" onChange={this.onChange} />
              <Checkbox onChange={this.useBilling}>Use this as your Billing Address?</Checkbox>
            </div>
          </div>
          <div>
            <button onClick={() => this.validateAddress()}>Check address</button>
          </div>
          
          <div >
           <OrderReview></OrderReview>
         </div>
        
        </div>
      );

    } else {
      Router.push({
        pathname: '/shipping_rate',
        query: { 
          address: JSON.stringify(this.state.addressCheck), 
          billing: this.state.billing 
        }
      });
      return null;
    }
  }
}
export default ShippingRates;