import React, { Component } from 'react';
import axios from "axios";
import Checkout from '../Stripe/Checkout'
class  ProductDetail extends Component{
  state = {
    category: "",
    description: "",
    influencer: "",
    model: "",
    prize: "",
    images:"",
    _id:"",
    user:"",
  }

  // data:
  // category: ["Tech"]
  // createdAt: "2019-04-25T22:48:52.035Z"
  // description: "really good product"
  // influencer: "5cc239192f0f68eaeb53f400"
  // model: "its a product"
  // prize: 200
  // updatedAt: "2019-04-25T22:48:52.035Z"
  // __v: 0
  // _id: "5cc239542f0f68eaeb53f401"

  componentDidMount(){
    let { id } = this.props.match.params
    const url= `http://localhost:3002/product/details/${id}`
    
    axios.get(url, {withCredentials:true})
    .then((res)=>{
        this.setState({
          category: res.data.category,
          description: res.data.description,
          influencer: res.data.influencer,
          model: res.data.model,
          prize: res.data.prize,
          images: res.data.images,
          _id: res.data._id,
          user: this.props.location.state.user
        })   
        console.log(res)
    })
    .catch(err=>console.log(err))
  }

  addCart = () =>{
    axios.post("http://localhost:3002/order" , {
      user: this.state.user._id,
      _id: this.state._id
    }, {withCredentials:true})
      .then((res) => console.log(res))
      .catch((err) => err)
    console.log("hey");
  }
  render(){

    console.log(this.state);

    return(
      <div>
        <h3>Product Detail</h3>
        <ul>
          <li><img src={this.state.images} alt="image of the product"/></li>
          <li>category: {this.state.category}</li>
          <li>description: {this.state.description}</li>
          <li>influencer: {this.state.influencer}</li>
          <li>model: {this.state.model}</li>
          <li>price: {this.state.prize}</li>
        </ul>
        <Checkout
            name={this.state.model}
            description={this.state.description}
            amount={this.state.prize}
          />
        <button onClick={this.addCart}>add to cart</button>

      </div>

    )
  }
}

export default ProductDetail;