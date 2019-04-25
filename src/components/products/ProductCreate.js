import React,{ Component } from 'react';
import { Input } from 'antd';
import { Select } from 'antd';

const { TextArea } = Input;
const OPTIONS = ["Sports","Music","Tech","Clothes"];


class ProductCreate extends Component {
  state = {
    product:{
      name:"",
      prize:0,
      images:[],
      description:"",
      category:[]
    },
    selectedItems: []
  };

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState({ product })
  };

  handleChange = selectedItems => {
    const { product } = this.state
    this.setState({product:{
        ...this.state.data,
        category: selectedItems} })
        this.props.onCreation(product);
  }



  render(){
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return(
      <div>
          <h2>Create Product</h2>
        <div className="create-card">
          <Input name="name" placeholder="Please enter product name" allowClear onChange={this.onChange} />
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

      </div>
    )
  }
}

export default ProductCreate;