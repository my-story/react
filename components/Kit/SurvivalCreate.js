import React, {Component} from 'react';
import KitServices from '../../services/KitServices';
import { Input, Select } from 'antd';
const { TextArea } = Input;
// import UserContext from '../contexts/UserContext';

class KitCreate extends Component {
    state = {
        kit : {
            influencer: "",
            products: [{
                product: "",
                comment: ""
            }],
            tips: [{
                header: "",
                description: "",
                video: ""
            }],
            techniques: [{
                header: "",
                description: "",
                video: ""
            }],
            category: "",
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

    submit = () => {
        // KitServices.kitCreate
    }

      
    render() {

        console.log(this.state)
        return (
            <div>
                 <Input name="influencer" placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <TextArea name="products.product" rows={4} type="text" placeholder="Add products id separated [space]" onChange={this.onChangeProduct} />
                 <TextArea name="products.comment" rows={4} type="text" placeholder="Add products id separated [space]" onChange={this.onChangeProduct} />
                 
                 
                 <TextArea name="tips.header" rows={4} type="text" placeholder="Add tip header" onChange={this.onChangeProduct} />
                 
                 <TextArea name="tips.description" rows={4} type="text" placeholder="Explain tip" onChange={this.onChangeProduct} />
                 
                 <TextArea name="techniques.header" rows={4} type="text" placeholder="Add technique header" onChange={this.onChangeProduct} />
                 <TextArea name="techniques.description" rows={4} type="text" placeholder="Explain technique" onChange={this.onChangeProduct} />
                 
                 <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
    
}

export default KitCreate