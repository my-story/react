import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import OrderServices from '../../services/OrderServices'
import MailerServices from '../../services/MailerServices'
import axios from 'axios'
import Cookies from 'universal-cookie'


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    // this.total = this.props.total
  }

  reward = (rewardArr) =>{
    for (var i = 0; i < rewardArr.length; i++){
      let revenue = rewardArr[i].price * rewardArr[i].qty;
      
      axios.get(`http://localhost:3002/influencer/${rewardArr[i].influencer}`)
        .then((influencer) => {
          let influencerCut = revenue * influencer.data.percentage;
          let newReward = influencerCut + influencer.data.reward;
          //Post Route
          axios.post(`http://localhost:3002/influencer/reward/${influencer.data._id}`, {reward:newReward})
            .then((influencer) => {
              console.log("added influencer reward to" + influencer.data);
            })
        })
        .catch((error) => console.log(error));
    }
  }
   getInfluencers = (products) =>{
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

  

  // componentDidMount(){
  //   this.makeDecimal()
  // }

  // makeDecimal = () =>{
  //   const { total } = this.state
  //   let newTotal = parseInt(total.toString().replace(".", ""), 10);
  //   this.setState({...this.state, total:newTotal})
  // }

  async submit(ev) {

      let {token} = await this.props.stripe.createToken({name: "Name"});

      axios.post("http://localhost:3002/payment/charge", {
        headers: {"Content-Type": "text/plain"},
        token: token.id,
        total: this.props.total * 100,
        // address: this.props.address
      })
      // if(response.ok){
      //   console.log("Purchase Complete!")
      // }
      .then((res)=>{
        const cookies = new Cookies();
        let products = cookies.get("Products")
        let rewardArr = this.getInfluencers(products);

        this.reward(rewardArr)
        // for (var i = 0; i < rewardArr.length; i++){
        //   let revenue = rewardArr[i].price * rewardArr[i].qty;
          
        //   axios.get(`http://localhost:3002/influencer/${rewardArr[i].influencer}`)
        //     .then((influencer) => {
        //       let influencerCut = revenue * influencer.data.percentage;
        //       let newReward = influencerCut + influencer.data.reward;
            
        //       //HAY QUE ARREGLAR ESTA RUTA MONDAY 06/10
        //       axios.post(`http://localhost:3002/influencer/reward/${influencer.data._id}`, {reward:newReward})
        //         .then((influencer) => {
        //           console.log("added influencer reward to" + influencer);
        //         })
        //         .catch((error) => console.log(error))
        //       // then add this to the influencer reward
        //     })
        //     .catch((error) => console.log(error));
        // }


        OrderServices.createOrder({user:this.props.user, products: products, address:this.props.address})
        .then((res)=> {
          console.log(res)
          MailerServices.sendMail({name:token.card.name , email:token.email})
          const cookies = new Cookies();
          cookies.remove("Products");
        })
        .catch((e)=> console.log(e))

          })
          .catch((err)=>console.log("erorrr paying", err))
      }
      

  render() {
    console.log(this.props)
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);