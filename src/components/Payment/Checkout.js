import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import OrderServices from '../../services/OrderServices'
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment,console.log(token.card),
      OrderServices.payCart({address: token.card.address_line1 , address_city: token.card.address_city,address_zip: token.card.address_zip})
    )
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
  
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    billingAddress={true}
    shippingAddress={true}
    



  />
export default Checkout;