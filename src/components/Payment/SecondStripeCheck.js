import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import OrderServices from '../../services/OrderServices'
import MailerServices from '../../services/MailerServices'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import UserContext from '../contexts/UserContext'




class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      user:{
        email: '',
        name:'',
      },
      message:{
        total: this.props.total,
        products: ""
      },
      paid: false,
      total: 0
    }
    // this.total = this.props.total
  }
  static contextType = UserContext


componentDidMount(){
  // COokie of Products  
const cookies = new Cookies();
let products = cookies.get("Products")
this.setState({products})
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

  onChange = (e) =>{
    let { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user })
  }


  async submit(ev) {
    
      let {token} = await this.props.stripe.createToken({name: this.state.user.email});

      axios.post("http://localhost:3002/payment/charge", {
        headers: {"Content-Type": "text/plain"},
        token: token.id,
        total: Math.trunc(this.props.total * 100),
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


        OrderServices.createOrder({user:this.context.user, products: products, address:this.props.address, email:this.state.user.email, name:this.state.user.name})
        .then((res)=> {
          console.log(res)
          MailerServices.sendMail({name:this.state.user.name , email:this.state.user.email, message:this.state.message})
          const cookies = new Cookies();

          cookies.remove("Products");

          this.setState({paid:true})
        })
        .catch((e)=> console.log(e))

          })
          .catch((err)=>console.log("erorrr paying", err))
      }


      

  render() {
    // console.log(this.context.user.username)
    // const cookies = new Cookies();
    // let products = cookies.get("Products")

    if(this.state.paid === true ){
      return(<Redirect to="/order-fulfillment"></Redirect>)
    }

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <input type="text" name="name" onChange={this.onChange}/>
        <input type="email" name="email" onChange={this.onChange}/>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);