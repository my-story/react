import  React , { Component }  from 'react';
import Cookies from 'universal-cookie';
import QtyContext from "../contexts/QtyContext";

class CardItem extends Component {
  state = {
    product: "",
    value: this.props.times
  }

  static contextType = QtyContext;

  setProduct(){
    this.setState({
      product: this.props.product
    })

  }

  componentDidMount() {
    this.setProduct();
  }

//   var currentProducts = cookies.get('Products');
//   var isRepeated = false;
//   for (var i = 0; i < currentProducts.length; i++){
//     if (currentProducts[i].influencer === this.state.influencer){
//       currentProducts[i].qty = currentProducts[i].qty + 1
//       isRepeated = true;
//     }
//   }

//   if (isRepeated){
//     cookies.set("Products", currentProducts, { path: '/' });
//   } else {
//     currentProducts.push(this.state);
//     cookies.set("Products", currentProducts, { path: '/' });
//   }      
// } else {
//   cookies.set("Products", [this.state], { path: '/' });
// }

  onChange = (e, influencerId) => {

    this.setState({
      value: parseInt(e.target.value)
    })

    const cookies = new Cookies();
    var currentProducts = cookies.get('Products');
       
    for (var i = 0; i < currentProducts.length; i++){
      if (currentProducts[i].influencer === influencerId){
        currentProducts[i].qty = parseInt(e.target.value)
      }
    }

    cookies.set("Products", currentProducts, { path: '/' });
    console.log(cookies.get('Products'));
    this.props.updateTotal();
    this.context.updateQty();
  }

  render(){
    console.log(this.props.product)

  
    return(
      <ul>
        <li>{this.props.product.model}</li>
        <li>Price:{this.props.product.prize}</li>
        {/* <li>Quantity:<InputNumber min={0} max={9} defaultValue={this.props.times} onChange={this.onChange.bind(this)} /></li> */}
        <li>
          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect01" defaultValue={this.props.product.qty} onChange={(e) => this.onChange(e, this.props.product.influencer)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
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