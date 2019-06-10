import React, { Component } from 'react';
import UserContext from '../contexts/UserContext';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import * as toastr from 'toastr';
// import InfluencerUpdate from "./InfluencerUpdate";

class ProductOne extends Component{
  state={
    update: false,
  }
  static contextType = UserContext;


  delete = () =>{
    let id = this.props.i.influencer._id;
    const url = `http://localhost:3002/product/delete/${id}`;

    axios.post(url, this.context.user, {withCredentials:true})
        .then((review)=>{   
        console.log(review)
        toastr.success("deleted the review");
        })
        .catch(err=>console.log(err))
  }

  update = () =>{
    this.setState({
      update: true
    })
  }
  render(){
    if(this.context.user.role === "Admin"){
      if(this.state.update === true){
        return(<Redirect to={{
          pathname:"/productUpdate",
          state:{product: this.props.i}
        }} />)
      }
      
      return(
        <div key={this.props.index} className="influencer-card">
          <Link key={this.props.index} to={{
            pathname:`product/${this.props.i._id}`,
            state: {
              user: this.context.user,
            }
            }}>
              <p>model: {this.props.i.model}</p>
              <p>description: {this.props.i.description}</p>
              <p>influencer: {this.props.i.influencer.name}</p>
              <img height="100" src={this.props.i.images[0]} alt={this.props.i.name} />
          </Link>
          <div>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.update}>Update</button>
          </div>
        </div> 
      )
    } else {
      return(
        <div key={this.props.index} className="influencer-card">
          <Link key={this.props.index} to={{
            pathname:`product/${this.props.i._id}`,
            state: {
              user: this.context.user,
            }
            }}>
              <p>model: {this.props.i.model}</p>
              <p>description: {this.props.i.description}</p>
              <p>influencer: {this.props.i.influencer.name}</p>
              <img height="100" src={this.props.i.images[0]} alt={this.props.i.name} />
          </Link>
        </div>
      )
    }
  }
}

export default ProductOne;