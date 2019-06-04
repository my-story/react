import React,{Component} from 'react'
import axios from 'axios';
import OrderServices from '../../services/OrderServices'
import MailerServices from '../../services/MailerServices'

import * as toastr from 'toastr'
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';
import Cookies from 'universal-cookie';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;


let loggedUser = ""

const successPayment = () => {
  // const cookies = new Cookies();
  // cookies.remove("Products");
  // this.props.deleteProducts();
  toastr.success('Payment Successful');
};

const errorPayment = data => {
  toastr.error('Payment Error');
};

const orderUpdate = (token,user,address) => {
  console.log(address)
    const cookies = new Cookies();
    let products = cookies.get("Products")
    
    // let productIds = []
    //   products[0].forEach(function(product){
    //     productIds.push(product._id)
    //   })
    // let usuario = t

    OrderServices.createOrder({user:user, products: products, email:token.email, cardname:token.card.name , address:address.street1 , address_city: address.city})
    .then((res)=> {
      console.log(res)
      MailerServices.sendMail({name:token.card.name , email:token.email})
      const cookies = new Cookies();
      cookies.remove("Products");
    })
    .catch((e)=> console.log(e))

}

const onToken = (amount, description, user, address) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment,orderUpdate(token,user, address))
      // OrderServices.payCart({cardname:token.card.name , address: token.card.address_line1 , address_city: token.card.address_city,address_zip: token.card.address_zip})
    
    .catch(errorPayment);

const Checkout = ({ name, description, amount, user, address }) =>{
   
  return(
        <StripeCheckout
        name={name}
        description={description}
        amount={fromEuroToCent(amount)}
        token={onToken(amount, description,user,address)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        // billingAddress={true}
        // shippingAddress={true}
      />
      )
      }



export default Checkout;