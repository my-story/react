import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';
// import isEmptyObj from "is-empty-object"
import QtyContext from "../contexts/QtyContext";

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

  static contextType = QtyContext;

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
    // cookies.addChangeListener((e) => console.log(e));
    if(cookies.get("Products") !== undefined){
      var currentProducts = cookies.get('Products');
      console.log(currentProducts);
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
    this.context.updateQty();
  }

  render(){
    return(
      <div>
        <h3>Product Detail</h3>
        <ul>
          <li><img src={this.state.images[0]} alt="the product"/></li>
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