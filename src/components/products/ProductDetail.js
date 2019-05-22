import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';
import isEmptyObj from "is-empty-object"



class  ProductDetail extends Component{
  state = {
    category: "",
    description: "",
    influencer: "",
    model: "",
    prize: "",
    images:"",
    _id:"",
    qty: 1,
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
        })   
        console.log(res)
    })
    .catch(err=>console.log(err))
  }

  addCart = () =>{
    const cookies = new Cookies();
    console.log(cookies.get("Products"));

    if(cookies.get("Products") !== undefined){
      var currentProducts = cookies.get('Products');
      var isRepeated = false;
      for (var i = 0; i < currentProducts.length; i++){
        if (currentProducts[i].influencer === this.state.influencer){
          currentProducts[i].qty = currentProducts[i].qty + 1
          isRepeated = true;
        }
      }

      if (isRepeated){
        cookies.set("Products", currentProducts, { path: '/' });
      } else {
        currentProducts.push(this.state);
        cookies.set("Products", currentProducts, { path: '/' });
      }      
    } else {
      cookies.set("Products", [this.state], { path: '/' });
    }
  }
  render(){

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
      
        <button onClick={this.addCart}>add to cart</button>

      </div>

    )
  }
}

export default ProductDetail;