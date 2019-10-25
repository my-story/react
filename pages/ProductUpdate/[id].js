import React, { Component } from 'react';
import Router from 'next/router';
import * as toastr from 'toastr'
import { Input, Select } from 'antd';
import ProductServices from '../../services/ProductServices';

const OPTIONS = ["Sports", "Music", "Tech", "Clothes"];
const { TextArea } = Input;

class ProductUpdate extends Component {

  state = {
    product: {},
    selectedItems: [],
    productCreated: false
  };

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  componentDidMount() {
    ProductServices.productDetail(this.props.id)
      .then(product => {
        this.setState(() => ({ 
          product: {
            model: product.model,
            prize: product.prize,
            description: product.description,
            category: product.category,
            images: product.images,
            influencer: product.influencer,
            influencerId: product.influencer._id,
            total: product.total
          }
        }));
      })
  }

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState({ product })
  };


  onChangeImage = (e) => {
    let { product } = this.state
    let value = e.target.value;
    product[e.target.name] = value.split(' ');
    this.setState({ product })
  };

  handleChange = (selectedItems) => {
    this.setState({
      product: {
        ...this.state.product,
        category: selectedItems,
      }
    })
  };



  onSubmit = () => {
    let { product } = this.state
    if (product.model.length === 0 || product.prize === 0 || product.description.length === 0 || product.category.length === 0) {
      toastr.error("Please complete all required fields")
      return
    } else {
      this.addBackend();
      console.log(this.state);
    }
  };


  addBackend() {
    let id = this.state.product.influencerId;
    ProductServices.updateProduct(id, this.state.product)
      .then((product) => this.setState({ productCreated: true }))
      .catch(err => console.log(err))
  };

  render() {
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    if (this.state.productCreated) {
      Router.push('/admin/influencer-chart');
      return null;
    }
    return (

      <div>
        <h2>Create Product</h2>
        <div className="create-card">
          <Input name="model" value={this.state.product.model} placeholder="Please enter product name" onChange={this.onChange} />
          <Input name="prize" value={this.state.product.prize} type="number" placeholder="Please enter product price" onChange={this.onChange} />
          <Input name="total" value={this.state.product.total} type="number" placeholder="Please enter amount of products in stock" onChange={this.onChange} />
          <TextArea name="images" value={this.state.product.images} rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} />
          <TextArea name="description" value={this.state.product.description} rows={4} placeholder="Please enter product description" onChange={this.onChange} />
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }

}
export default ProductUpdate;