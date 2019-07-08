import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './SecondStripeCheck';

class Stripe extends Component {

  render() {

    return (
      <StripeProvider apiKey="pk_test_isDXP591iL1OVb7ZqqfJoYSy00ODZSz9IF">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm user={this.props.user} address={this.props.address} total={this.props.total} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;