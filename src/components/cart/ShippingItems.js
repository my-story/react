import React, { Component } from 'react'
import { Input } from 'antd';

import Checkout from '../Payment/Checkout'
import Cookies from 'universal-cookie';


class ShippingRates extends Component{
    state={
        products:"",
        address:{}
    }

    componentDidMount(){
        const cookies = new Cookies();
        this.setState({products:cookies.get('Products')})
    }

    getTotal(){
        var counter = 0;
        const cookies = new Cookies();
        const cookieArr = cookies.get("Products");
  
        for (var i = 0; i < cookieArr.length; i++){
          counter += (cookieArr[i].prize * cookieArr[i].qty)
        }

        return counter;
  }

    onChange = e => {
        let { address } = this.state
        address[e.target.name] = e.target.value
        this.setState({ address })
    }

    render(){
        
        console.log(this.state)
      
        return(
            <div>

                <Input name="name" placeholder="Enter Name" onChange={this.onChange} />
                <Input name="company" placeholder="Enter Company" onChange={this.onChange} />
                <Input name="street1" placeholder="Enter Complete Street" onChange={this.onChange} />
                <Input name="city" placeholder="Enter City" onChange={this.onChange} />
                <Input name="state" placeholder="Enter State " onChange={this.onChange} />
                <Input name="zip" type="number" placeholder="Enter Zipcode" onChange={this.onChange} />
                <Input name="country" placeholder="Enter Country" onChange={this.onChange} />
                <div>

                <Checkout 
                name={`You have ${this.state.products.length}# of item(s)`}
                description={"thank you for buying with my story"}
                amount={this.getTotal()}
                deleteProducts={this.deleteProducts}
                user={this.props.user}          
                >
                </Checkout> 
                </div>
            </div>
        )
    }
}
export default ShippingRates