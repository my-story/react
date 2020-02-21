import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class ProductTip extends Component {
    state = {
        product: {}
    }

    onChange = (e) => {
        let { product } = this.state;
        product[e.target.name] = e.target.value
        this.setState( {product} )
      };
        
    render() {
        return(
            <div>
                <TextArea name="product" rows={4} type="text" placeholder="Add product id" onChange={this.onChange} />
                <TextArea name="comment" rows={4} type="text" placeholder="Add product" onChange={this.onChange} />
                <button> Add products </button>
            </div>
        )
    }
}

export default ProductTip;
