import React,{ Component } from 'react';
import { Input } from 'antd';
import { Select } from 'antd';

const { TextArea } = Input;
const OPTIONS = ["Sports","Music","Tech","Clothes"];



class ProductCreate extends Component {
  state = {
    selectedItems: [],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  onChange = (e) => {
    console.log(e);
  };

  render(){
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return(
      <div>
          <h2>Create Product</h2>
          <Input name="name" placeholder="Please enter product name" allowClear onChange={this.onChange} />
          <Input name="prize" placeholder="Please enter product price" allowClear onChange={this.onChange} />
          <Input name="description" placeholder="Please enter product description" allowClear onChange={this.onChange} />
          <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={selectedItems}
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
    )
  }
}

export default ProductCreate;