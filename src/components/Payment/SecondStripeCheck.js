import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    // this.total = this.props.total
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

      let response = axios.post("http://localhost:3002/payment/charge", {
        headers: {"Content-Type": "text/plain"},
        token: token.id,
        total: this.props.total * 100
      });
      
    
      if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    // console.log(this.props.total)
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