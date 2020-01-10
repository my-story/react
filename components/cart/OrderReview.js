import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import QtyContext from "../contexts/QtyContext";

const cookies = new Cookies();

class OrderReview extends Component {

  state = {
    products: cookies.get("Products"),

  }

  render() {
      console.log(this.state)
      return(
        <div className="order-summary-container">
            <div className="order-title">
                <h2>Order Summary</h2>
                <p><b>Edit</b></p>
            </div>
        </div>
      )
  }
}

export default OrderReview