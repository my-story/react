import React from 'react'
import {Route, Switch } from 'react-router-dom'
// import ProductList from './components/products/ProductList'
import InfluencerList from './components/influencer/InfluencerList'
import ProductList from './components/products/ProductList'
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Logout from './components/auth/logout'
import InfluencerCreate from './components/influencer/InfluencerCreate';
import ReviewForm from './components/reviews/ReviewForm'
// import AddImage from './components/products/ProductAddImage';
// import ProductCreate from './components/products/ProductCreate';
import ReviewOne from './components/reviews/ReviewOne'


export default (props) => (
<Switch>
  <Route exact path="/" component={InfluencerList} />
  <Route path="/products" component={ProductList} />
  <Route path="/signup" component={Signup} />
  <Route path="/login"  render={() => <Login {...props} />} />
  <Route path="/logout" render={() => <Logout {...props} />} />
  <Route path="/create" component={() => <InfluencerCreate {...props} />} />
  <Route path="/reviewForm" render={() => <ReviewForm {...props} />} />
  <Route path="/review/:id" component={ReviewOne} />


</Switch>

);