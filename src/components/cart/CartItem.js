import  React , { Component }  from 'react';
import axios from "axios";
import {InputNumber} from "antd";


class CardItem extends Component {
  state = {
    product: "",
    value: this.props.times
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


  onChange(value) {
    console.log('changed', value);
    console.log("state", this.state.value);
    var newAmount = value - this.state.value;
    console.log("new amount", newAmount);

    if(value !== ""){
      this.setState({
        value: value
      })
    }
    console.log("this is the new amount", newAmount);

    for (var i = 0; i < newAmount; i++){
      axios.post("http://localhost:3002/order" , {
        user: this.props.user._id,
        _id: this.props.product._id
      }, {withCredentials:true})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }

  render(){
    console.log(this.state.product)

  
    return(
      <ul>
        <li>{this.props.product.model}</li>
        <li>Price:{this.props.product.prize}</li>
        <li>Quantity:<InputNumber min={0} max={10} defaultValue={this.props.times} onChange={this.onChange.bind(this)} /></li>
        
      </ul>
    )
  }
}

export default CardItem;