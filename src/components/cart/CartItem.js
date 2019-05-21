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
    this.setProduct();
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


  onChange = (e, id, model) => {

    this.setState({
      value: parseInt(e.target.value)
    })

    this.props.passState(parseInt(e.target.value), id, model)

    
    // if (value !== "" && value <= 9 || value !== null && value <= 9 ){
    //   this.setState({
    //     value: value
    //   })
    // } else if (value > 9){
    //   console.log("max value is 9 for bigger purchases contact us in the about me section")
    // }
    // console.log("this is the value in the state",this.state.value);
    // if (value > this.state.value){
    //   console.log('value', value);
    //   console.log("state", this.state.value);
    //   var newAmount = value - this.state.value;
    //   console.log("new amount", newAmount);
  
    //   if(value !== ""){
    //     this.setState({
    //       value: value
    //     })
    //   }
    //   console.log("this is the new amount", newAmount);
      
  
    //   for (var i = this.state.value; i < value; i++){
    //     axios.post("http://localhost:3002/order" , {
    //       user: this.props.user._id,
    //       _id: this.props.product._id
    //     }, {withCredentials:true})
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err))
    //   }
    // } else {

    //   if (value !== ""){
    //     const url = `http://localhost:3002/order/delete/${this.props.product._id}`;

    //     axios.post(url , {
    //       user: this.props.user
    //     }, {withCredentials:true})
    //       .then((res) => {
    //         for (var i = 0; i < value; i++){
    //           axios.post("http://localhost:3002/order" , {
    //             user: this.props.user._id,
    //             _id: this.props.product._id
    //           }, {withCredentials:true})
    //             .then((res) => console.log(res))
    //             .catch((err) => console.log(err))
    //         }
    //       })
    //       .catch((err) => err)


    //   }
    // }
  }

  render(){
    // console.log(this.state.product)

  
    return(
      <ul>
        <li>{this.props.product.model}</li>
        <li>Price:{this.props.product.prize}</li>
        {/* <li>Quantity:<InputNumber min={0} max={9} defaultValue={this.props.times} onChange={this.onChange.bind(this)} /></li> */}
        <li>
          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect01" defaultValue={this.props.times} onChange={(e) => this.onChange(e, this.props.product._id ,this.props.product.model)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </li>
      </ul>
    )
  }
}

export default CardItem;