import React from 'react'
import {Route, Switch } from 'react-router-dom'
// import ProductList from './components/products/ProductList'
import InfluencerList from './components/influencer/InfluencerList'

export default () => (
<Switch>
  <Route exact path="/" component={InfluencerList} />
  {/* <Route exact path="/" component={Index} /> */}
  {/* <Route path="/products" component={ProductList} /> */}

</Switch>

);