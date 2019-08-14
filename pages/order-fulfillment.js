import React from 'react'
import Cookies from 'universal-cookie'
import QtyContext from '../src/components/contexts/QtyContext'

class OrderPaid extends React.Component {
  static contextType = QtyContext


  componentWillMount() {
    const cookies = new Cookies(); 
    cookies.remove("Products");
    this.context.updateQty()

  }


  render() {
    return (
      <div>
        <h1>Your purchase is complete</h1>
      </div>
    )
  }

}

export default OrderPaid