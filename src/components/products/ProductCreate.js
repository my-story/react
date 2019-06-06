import React,{ Component } from 'react';
import ProductServices from '../../services/ProductServices'
import { Input, Select } from 'antd';
import { Redirect } from 'react-router-dom';
import * as toastr from 'toastr'

// const { TextArea } = Input;
const OPTIONS = ["Sports","Music","Tech","Clothes"];
const { TextArea } = Input;

class ProductCreate extends Component {
  state = {
    product:{
      model:"",
      prize:0,
      description:"",
      category:[],
      images:[],
      influencer: this.props.influencer._id
    },
    selectedItems: [],
    productCreated: null
  };

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState( {product} )
  };


  onChangeImage = (e) => {
    let { product } = this.state
    let value = e.target.value;
    product[e.target.name] = value.split(' ');
    this.setState( {product} )
  };

  handleChange = (selectedItems,imageUrl) => {
    this.setState({product:{
        ...this.state.product,
        category: selectedItems,
      } })
  }

// addImage = () => {
//   const { product } = this.state
//   let imagesArr = product.images.split(' ');
//   this.setState({product: {
//     ...this.state.product,
//     images: imagesArr
//   }})
// }

  onSubmit=()=>{
    let { product } = this.state

    if(product.model.length === 0||product.prize === 0 || product.description.length === 0 || product.category.length === 0){
      toastr.error("Please complete all required fields")
      return
    }else{
      this.addBackend()
    }
  }

  addBackend(){
    ProductServices.productForm(this.state.product)
      .then((product)=>{
        console.log(product.data)
        this.setState({productCreated:true})
      })
      .catch((e)=>console.log(e))
  }

  render(){
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    if(this.state.productCreated){
      return (<Redirect to="/" />)
    }
      return(

        <div>
            <h2>Create Product</h2>
          <div className="create-card">
            <Input name="model" placeholder="Please enter product name"  onChange={this.onChange} />
            <Input name="prize" type="number" placeholder="Please enter product price"  onChange={this.onChange} />
            <TextArea name="images" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} />
            <TextArea name="description" rows={4} placeholder="Please enter product description"  onChange={this.onChange} />
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
        </div>
        // </div>
      )
    }
    
  }
  export default ProductCreate;