import React from 'react'
import QtyContext from '../src/components/contexts/QtyContext'

class OrderPaid extends React.Component {
  static contextType = QtyContext

  componentDidMount() {
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