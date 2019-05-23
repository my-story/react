import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Input } from 'antd';
import * as toastr from 'toastr'

import Checkout from '../Payment/Checkout'
import OrderServices from '../../services/OrderServices'
import Cookies from 'universal-cookie';



class ShippingRates extends Component{
    state={
        products:"",
        address:{
            name:"",
            company:"",
            street1:"",
            city:"",
            state:"",
            zip:"",
            country:""
        }
    }

    componentDidMount(){
        const cookies = new Cookies();
        this.setState({products:cookies.get('Products')})
    }

    getTotal(){
        var counter = 0;
        const cookies = new Cookies();
        const cookieArr = cookies.get("Products");
        if(cookieArr !== undefined){
            for (var i = 0; i < cookieArr.length; i++){
                counter += (cookieArr[i].prize * cookieArr[i].qty)
              }
        }

        return counter;
  }

  onChange = e => {
    let { address } = this.state
    address[e.target.name] = e.target.value
    this.setState({ address })
}

    validateAddress = ()=> {
        const { address } = this.state

        // if( address.name===undefined || address.street1=== undefined || address.city=== undefined || address.state=== undefined || address.zip=== undefined || address.country=== undefined){
        // toastr.error("Missing Fields")
        // console.log("No te deja comprar ")
        // return
        // }else{
            OrderServices.checkAddress(address)
            .then((res)=>{
                console.log(res)
                // this.setState({address:res.data})
            })
            .catch((e)=>console.log(e))
        // }
    }


    render(){
        
        console.log(this.state.address)
        if(this.getTotal() === 0){
            return(<Redirect to="/"></Redirect>)
        }
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
                
                <button onClick={()=>this.validateAddress()}>Check address</button>
                <Checkout 
                // onClick={this.validateAddress()}
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