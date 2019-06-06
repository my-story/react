import React,{ Component } from 'react';
import ProductServices from '../../services/ProductServices'
import ProductAddImage from './ProductAddImage'
import { Input, Select } from 'antd';
// import { Redirect } from 'react-router-dom'
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
    // imageUrl: [],
    selectedItems: [],
    productCreated: null
  };

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState( {product} )
  };

  handleChange = (selectedItems,imageUrl) => {
    this.setState({product:{
        ...this.state.product,
        category: selectedItems,
      } })
  }
//   handleImageChange = (e) => {
//     this.setState({profilePic: e.target.files[0]})
// }
addImage = () => {
const { product } = this.state
  let imagesArr = product.images.split('')
  console.log(imagesArr)
  // this.setState({images:imagesArr})
}

  onSubmit=()=>{
    let { product } = this.state

    
    if(product.model.length === 0||product.prize === 0 || product.description.length === 0 || product.category.length === 0){
      toastr.error("Please complete all required fields")
      return
    }else{
      this.addImage()
      ProductServices.productForm(product)
        .then((product)=>{
          console.log(product.data)
          this.setState({productCreated:true})
        })
        .catch((e)=>console.log(e))
    }

}

    // addImage = (file, url) => {
    //   const formData = new FormData()
    //   formData.append('picture', file)
    //   return serviceUpload.post(url, formData, {headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },})
    //     .then( (res) => {
    //       this.props.history.push('/profile')
    //     })
    //     .catch( e => console.log(e))
    //   }


  render(){
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
console.log(this.state)

    if(this.state.productCreated){
      // return (<Redirect to="/product/upload/image" />)
      return(<ProductAddImage></ProductAddImage>)
    }
      return(

        <div>
            <h2>Create Product</h2>
          <div className="create-card">
            <Input name="model" placeholder="Please enter product name"  onChange={this.onChange} />
            <Input name="prize" type="number" placeholder="Please enter product price"  onChange={this.onChange} />
            <Input name="images" type="text" placeholder="Add Cloudinary image url" onChange={this.onChange} />
            {/* <Input type="text" placeholder="Add Cloudinary image url" onChange={this.addImage} />
            <Input type="text" placeholder="Add Cloudinary image url" onChange={this.addImage} /> */}

            <TextArea name="description"  rows={4} placeholder="Please enter product description"  onChange={this.onChange} />
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
          {/* <TextArea placeholder="please enter product description" rows={4} /> */}
        </div>
    
        <button onClick={this.onSubmit}>Submit</button>
  
        </div>
      )
    }
   
  }


export default ProductCreate;