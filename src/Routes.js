import React from 'react'
import {Route, Switch } from 'react-router-dom'
import ProductList from './components/products/ProductList'

export default () => (
<Switch>
  {/* <Route exact path="/" component={Index} /> */}
  <Route path="/products" component={ProductList} />
</Switch>

);