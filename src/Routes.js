import React from 'react'
import {Route, Switch } from 'react-router-dom'
// import ProductList from './components/products/ProductList'
import InfluencerList from './components/influencer/InfluencerList'
import ProductList from './components/products/ProductList'
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import InfluencerCreate from './components/influencer/InfluencerCreate';
import addVoicenote from './components/reviews/ReviewForm'
// import AddImage from './components/products/ProductAddImage';
// import ProductCreate from './components/products/ProductCreate';
import InfluencerReviewForm from './components/influencer/InfluencerReviewForms';
import ReviewOne from './components/reviews/ReviewOne'


export default () => (
<Switch>
  <Route exact path="/" component={InfluencerList} />
  {/* <Route exact path="/" component={Index} /> */}
  <Route path="/products" component={ProductList} />
  <Route path="/signup" component={Signup} />
  <Route path="/login" component={Login} />
  <Route path="/create" component={InfluencerCreate} />
  <Route path="/addVoicenote" component={addVoicenote} />
  <Route path="/reviewForm" component={InfluencerReviewForm}/>
  <Route path="/review/:id" component={ReviewOne} />
  {/* <Route path="/crear/product" component={ProductCreate} /> */}
  {/* <Route path="/product/upload" component={AddImage} /> */}


</Switch>

);