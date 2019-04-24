import React from 'react'
import {Route, Switch } from 'react-router-dom'

// import ProductList from './components/products/ProductList'
import InfluencerList from './components/influencer/InfluencerList'
import ProductList from './components/products/ProductList'


export default () => (
<Switch>
  <Route exact path="/" component={InfluencerList} />

  <Route path="/products" component={ProductList} />

</Switch>

);