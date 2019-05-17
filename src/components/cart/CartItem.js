import  React , { Component }  from 'react';
import axios from "axios";

class CardItem extends Component {
  state = {
    product: "",
  }

  setProduct(){
    this.setState({
      product: this.props.product
    })
  }

  componentDidMount() {
    this.setProduct()
  }

  delete(e){
    e.preventDefault()
    console.log(this.props.product._id)
    const url = `http://localhost:3002/order/delete/${this.props.product._id}`;

    axios.post(url , {
      user: this.props.user
    }, {withCredentials:true})
      .then((res) => console.log(res))
      .catch((err) => err)
  }
  render(){
    console.log(this.state.product)

  
    return(
      <ul>
        <li>{this.props.product.model}</li>
        <li>Price:{this.props.product.prize}</li>
        <li>times: {this.props.times}</li>
      </ul>
    )
  }
}

export default CardItem;