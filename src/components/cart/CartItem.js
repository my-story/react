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


  onChange = (e, id, model) => {

    this.setState({
      value: parseInt(e.target.value)
    })

    this.props.passState(parseInt(e.target.value), id, model)

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