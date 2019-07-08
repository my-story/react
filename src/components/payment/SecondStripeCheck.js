import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import OrderServices from '../../services/OrderServices';
import MailerServices from '../../services/MailerServices';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';
import ProductServices from '../../services/ProductServices';
import PaymentServices from '../../services/PaymentServices';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      user: {
        email: '',
        name:'',
      },
      message: {
        total: this.props.total,
        products: ""
      },
      paid: false,
      total: 0
    }
  }
  static contextType = UserContext;


  componentDidMount () {
    const cookies = new Cookies();
    let products = cookies.get("Products");
    this.setState({products});
  };

  reward = (rewardArr) => {
    for (let i = 0; i < rewardArr.length; i++) {
      let revenue = rewardArr[i].price * rewardArr[i].qty;
      
      InfluencerServices.getOne(rewardArr[i].influencer)
        .then((influencer) => {
          let influencerCut = revenue * influencer.data.percentage;
          let newReward = influencerCut + influencer.data.reward;

          InfluencerServices.addReward({reward:newReward}, influencer.data._id)
            .then((influencer) => {
              console.log("added influencer reward to" + influencer);
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => console.log(error));
    }
  }
  
  totalProductUpdate = (array) => {
    for (let i = 0; i < array.length; i++){
      let qty = array[i].qty;
      let id = array[i]._id;
      
      ProductServices.updateTotal(id , {qty: qty})
        .then((product) => {
          console.log(product);
        })
        .catch((error) => console.log(error));
    }
  }

   getInfluencers = (products) => {
    const rewardArr = [];
    let reward = {};
    for (let i = 0; i < products.length; i++){
      reward["influencer"] = products[i].influencer;
      reward["price"] = products[i].prize;
      reward["qty"] = products[i].qty;
  
      rewardArr.push(reward);
      reward = {};
    }
    return rewardArr;
  }

  onChange = (e) => {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }


  async submit(ev) {
    
      let {token} = await this.props.stripe.createToken({name: this.state.user.email});

    PaymentServices.charge({
      headers: {"Content-Type": "text/plain"},
      token: token.id,
      total: Math.trunc(this.props.total * 100),
    })
      .then(() => {
          const cookies = new Cookies();
          let products = cookies.get("Products");
          let rewardArr = this.getInfluencers(products);
          this.totalProductUpdate(products);
          this.reward(rewardArr);


          OrderServices.createOrder({user:this.context.user, products: products, address:this.props.address, email:this.state.user.email, name:this.state.user.name})
          .then(() => {
            const cookies = new Cookies();
            cookies.remove("Products");
            this.setState({paid:true});

            MailerServices.sendMail({name:this.state.user.name , email:this.state.user.email, message:this.state.message})
            .then((info) => console.log(info))
            .catch((err) => console.log(err));
          })
          .catch((e)=> console.log(e));

          })
      .catch((err)=>console.log("erorrr paying", err));
      };
    
  render() {
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