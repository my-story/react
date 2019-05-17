import React,{Component} from 'react'
import axios from 'axios';
import OrderServices from '../../services/OrderServices'

import * as toastr from 'toastr'
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';
import Cookies from 'universal-cookie';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;


let loggedUser = ""

const successPayment = (token) => {
  // const cookies = new Cookies();
  // cookies.remove("Products");
  // this.props.deleteProducts();
  orderUpdate(token)
  toastr.success('Payment Successful');
};

const errorPayment = data => {
  toastr.error('Payment Error');
};

const orderUpdate = (token,user) => {

if(user !== "" && user !== undefined){
  OrderServices.payCart({user: user ,cardname:token.card.name , address: token.card.address_line1 , address_city: token.card.address_city,address_zip: token.card.address_zip})
    .then((res)=> console.log(res))
    .catch((e)=> console.log(e))
}else{
  //ITS CREATING TWICE WHEN U USE COOKIES
  const cookies = new Cookies();
  let products = [cookies.get("Products")]
  let productIds = []
    products[0].forEach(function(product){
      productIds.push(product._id)
    })
  OrderServices.createOrder({products: productIds, cardname:token.card.name , address: token.card.address_line1 , address_city: token.card.address_city,address_zip: token.card.address_zip})
  .then((res)=> {
    const cookies = new Cookies();
    cookies.remove("Products");
    this.props.deleteProducts();
  })
  .catch((e)=> console.log(e))
}

}

const onToken = (amount, description, user) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment(token),orderUpdate(token,user))
      // OrderServices.payCart({cardname:token.card.name , address: token.card.address_line1 , address_city: token.card.address_city,address_zip: token.card.address_zip})
    
    .catch(errorPayment);

const Checkout = ({ name, description, amount, user }) =>{
   

  return(
    <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description,user)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    billingAddress={true}
    shippingAddress={true}
  />

  )
 
  }



export default Checkout;