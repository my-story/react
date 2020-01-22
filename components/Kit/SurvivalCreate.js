import React, {Component} from 'react';
import KitServices from '../../services/KitServices';
import { Input, Select } from 'antd';
const { TextArea } = Input;
// import UserContext from '../contexts/UserContext';

class KitCreate extends Component {
    state = {
        kit : {
            influencer: "",
            products: [],
            // tips: [],
            role: ""
        }
    }
    // static contextType = UserContext;

    onChange = (e) => {
        let { kit } = this.state
        kit[e.target.name] = e.target.value
        this.setState( {kit} )
      };

      onChangeProduct = (e) => {
        let { product } = this.state.kit
        let value = e.target.value;
        product[e.target.name] = value.split(' ');
        this.setState( {product} )
      };

      
    render() {
        return (
            <div>
                 <Input name="influencer" placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <TextArea name="products" rows={4} type="text" placeholder="Add products id separated [space]" onChange={this.onChangeProduct} />
                 {/* <TextArea name="tips" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} /> */}
            </div>
        )
    }
    
}

export default KitCreate