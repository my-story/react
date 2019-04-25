import React,{ Component } from 'react';
import ProductServices from '../../services/ProductServices'
import { Input } from 'antd';
import { Select } from 'antd';

const { TextArea } = Input;
const OPTIONS = ["Sports","Music","Tech","Clothes"];


class ProductCreate extends Component {
  state = {
    product:{
      model:"",
      prize:0,
      images:[],
      description:"",
      category:[],
      influencer: this.props.influencer._id
    },
    selectedItems: []
  };

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState( {product} )
  };

  handleChange = selectedItems => {
    this.setState({product:{
        ...this.state.product,
        category: selectedItems} })

  }
  onSubmit=()=>{
    let { product } = this.state
    
        ProductServices.productForm(product)
            .then((product)=> console.log(product))
            .catch((e)=>console.log(e))

}


  render(){
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    // console.log(product)
    // console.log(this.props.influencer._id);
    return(
      <div>
          <h2>Create Product</h2>
        <div className="create-card">
          <Input name="model" placeholder="Please enter product name" allowClear onChange={this.onChange} />
          <Input name="prize" type="number" placeholder="Please enter product price" allowClear onChange={this.onChange} />
          <Input name="description" placeholder="Please enter product description" allowClear onChange={this.onChange} />
          <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={product.category}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {filteredOptions.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
        <TextArea placeholder="please enter product description" rows={4} />
      </div>
      <button onClick={this.onSubmit}>Submit</button>

      </div>
    )
  }
}

export default ProductCreate;