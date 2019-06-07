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
  console.log("hey catch")
  toastr.error('Payment Error');
};

// axios.get(url, {withCredentials:true})
// .then((res)=>{
//     this.setState({
//       category: res.data.category,
//       description: res.data.description,
//       influencer: res.data.influencer,
//       model: res.data.model,
//       prize: res.data.prize,
//       images: res.data.images,
//       _id: res.data._id,
//     })   
//     console.log(res)
// })
// .catch(err=>console.log(err))

const getInfluencers = (products) =>{
  const rewardArr = [];
  let reward = {};
  for (var i = 0; i < products.length; i++){
    reward["influencer"] = products[i].influencer;
    reward["price"] = products[i].prize;
    reward["qty"] = products[i].qty;

    rewardArr.push(reward);
    reward = {};
  }
  return rewardArr;
}


const orderUpdate = (token,user,address) => {
  console.log("hey sucess")
    const cookies = new Cookies();
    let products = cookies.get("Products")
    let rewardArr = getInfluencers(products);
    console.log(rewardArr);

    for (var i = 0; i < rewardArr.length; i++){
      let revenue = rewardArr[i].price * rewardArr[i].qty;
      
      axios.get(`http://localhost:3002/influencer/${rewardArr[i].influencer}`)
        .then((influencer) => {
          let influencerCut = revenue * influencer.data.percentage;
          let newReward = influencerCut + influencer.data.reward;
        
          axios.post(`http://localhost:3002/influencer/edit/${influencer.data._id}`, {reward:newReward})
            .then((influencer) => {
              console.log("added influencer reward to" + influencer);
            })
            .catch((error) => console.log(error))
          // then add this to the influencer reward
        })
        .catch((error) => console.log(error));
    }
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

const onToken = (amount, description, user, address) => token =>{
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(() => successPayment,orderUpdate(token,user, address))    
    .catch(() => errorPayment);
}

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