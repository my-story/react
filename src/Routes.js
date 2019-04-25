import React from 'react'
import {Route, Switch } from 'react-router-dom'
// import ProductList from './components/products/ProductList'
import InfluencerList from './components/influencer/InfluencerList'
import ProductList from './components/products/ProductList'
import signup from './components/auth/signup';
import Login from './components/auth/login';
// import InfluencerCreate from './components/influencer/InfluencerCreate';

import LinkProduct from './components/influencer/LinkProduct';

export default () => (
<Switch>
  <Route exact path="/" component={InfluencerList} />
  {/* <Route exact path="/" component={Index} /> */}
  <Route path="/products" component={ProductList} />
  <Route path="/signup" component={signup} />
  <Route path="/login" component={Login} />
  <Route path="/create" component={LinkProduct} />

</Switch>

);