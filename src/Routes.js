import React from 'react';
import {Route, Switch } from 'react-router-dom';
import InfluencerList from './components/influencer/InfluencerList';
import ProductList from './components/products/ProductList';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import InfluencerCreate from './components/influencer/InfluencerCreate';
import ReviewForm from './components/reviews/ReviewForm';
import ReviewOne from './components/reviews/ReviewOne';
import ProductDetail from './components/products/ProductDetail';
import CartLanding from './components/cart/CartLading';
import ShippingRates from './components/cart/ShippingItems';
import FinalCheckout from './components/cart/FinalCheckout';
import ProductUpdate from "./components/products/ProductUpdate";
import CartPay from './components/cart/CartPay';
import ReviewUpdate from './components/reviews/ReviewUpdate';
import InfluencerUpdate from './components/influencer/InfluencerUpdate';
import OrderPaid from './components/Payment/OrderPaid';
import LineGraph from './components/influencer/LineGraph';


export default (props) => (
  
<Switch>
  <Route exact path="/" component={InfluencerList} />
  <Route path="/products" render={() => <ProductList {...props} />} />
  <Route path="/signup" component={Signup} />
  <Route path="/login"  render={() => <Login {...props} />} />
  <Route path="/logout" render={() => <Logout {...props} />} />
  <Route path="/create" component={() => <InfluencerCreate {...props} />} />
  <Route path="/reviewForm" render={() => <ReviewForm {...props} />} />
  <Route path="/review/:id" component={ReviewOne} />
  <Route path="/product/:id" component={ProductDetail} />
  <Route path="/cart" component={() => <CartLanding {...props} />}/>
  <Route path="/shipping" component={() => <ShippingRates {...props} />}/>
  <Route path="/final-checkout" component={FinalCheckout} />
  <Route path="/pay-checkout" component={CartPay} />
  <Route path="/reviewUpdate" component={ReviewUpdate} />
  <Route path="/influencerUpdate" component={InfluencerUpdate}/>
  <Route path="/ProductUpdate" component={ProductUpdate}/>
  <Route path="/order-fulfillment" component={OrderPaid}/>
  <Route path="/line-graph" component={LineGraph} />
</Switch>

);