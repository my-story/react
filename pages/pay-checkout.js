// import React, { Component } from 'react';
// import Router from 'next/router';
// import Cookies from 'universal-cookie';
// import Stripe from '../components/payment/Stripe';
// import UserContext from '../components/contexts/UserContext';
// import OrderReview from '../components/cart/OrderReview'; 

// const cookies = new Cookies();

// class CartPay extends Component {

//   state = {
//     products: cookies.get("Products"),
//     total: 0,
//     tax: 0
//   }

//   static contextType = UserContext;
//   //  static getInitialProps({ query: { rate, address, billing } }) {
//   //   return { 
//   //     rate: JSON.parse(rate),
//   //     address: JSON.parse(address), 
//   //     billing: JSON.parse(billing) 
//   //   };
//   // }

//   getTotal = () => {
//     let counter = 0;
//     const cookies = new Cookies();
//     const cookieArr = cookies.get("Products");

//     if (cookies.get("Products") === undefined) {
//       return;
//     }

//     if (cookieArr !== undefined) {
//       for (let i = 0; i < cookieArr.length; i++) {
//         counter += (cookieArr[i].prize * cookieArr[i].qty);
//       }
//     }

//     if (counter === 0) {
//       this.setState({
//         ...this.state,
//         products: null
//       })
//     }

//     return counter;
//   }

//   //Arreglar cuando tengamos reward percentages, sacar fees nuestros y tax verdadero
//   totalCost = () => {
//     // const { rate } = this.props;
//     // let total = 0;
//     // let tax = Number((+this.getTotal() * 0.025).toFixed(2));
//     // total = Number((+rate.amount + +this.getTotal() + +tax).toFixed(2));
//     // this.setState({ total, tax });
//   }

//   componentDidMount() {
//     this.totalCost();
//   }

//   render() {
//     const { products } = this.state;

//     if (products === undefined) {
//       Router.push('/');
//       return null;
//     }
//     const cookies = new Cookies();

//     return (
//       <div>
//         <div className="checkout-page">
//           <div className="checkout-container">
//             <h2>Checkout</h2>
//             <div className="checkout-timeline">
//               <p><b>1. SHIPPING DETAILS</b></p>
//               <p id="checkout-clicked">2. PAYMENT DETAILS</p>
//             </div>
//           </div>
//           <span id="checkout-personal">Payment Information</span>
//           <Stripe user={this.props.user} address={this.props.address} total={this.state.total}></Stripe>
//           <div>
//             {/* <button onClick={() => this.validateAddress()}>Check address</button> */}
//           </div>
//           <div >
//            <OrderReview button="Pay Now"></OrderReview>
//          </div>
//          <div className="shipping-checkout-div">
//           <span className="checkout-font">Address<a className="checkout-font-a" href="/shipping_address"> [edit]</a></span>
//           <div className="shipping-confirmation">
//             <p>{cookies.get("Address").name} {cookies.get("Address").lastName}</p>
//             <p>{cookies.get("Address").street1}</p>
//             <p>{cookies.get("Address").city} {cookies.get("Address").zip}</p>
//             <p>{cookies.get("Address").state}</p>
//             <p>{cookies.get("Address").country}</p>
//           </div>
//          </div>
        
//         </div>
//       </div>
//     )
//   }
// }

// export default CartPay