import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Input, Checkbox } from 'antd';
import * as toastr from 'toastr'

// import Checkout from '../Payment/Checkout'
import countries from '../../constants/countries'
import OrderServices from '../../services/OrderServices'
import Cookies from 'universal-cookie';
import UserContext from '../contexts/UserContext';

import { Select } from 'antd';

const { Option } = Select

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
        },
        // countries:"",
        addressCheck: "",
        billing:true
    }
    static contextType = UserContext

    componentDidMount=()=>{
        const cookies = new Cookies();
        this.setState({products:cookies.get('Products'), countries})

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
    onClick(e){
        // const {address} = this.state
        // address.country = e.target
        console.log(e)
    }

    validateAddress = ()=> {
        const { address } = this.state

        if(address.name==='' || address.street1=== '' || address.city==='' || address.state==='' || address.zip==='' || address.country===''){
        toastr.error("Missing Fields")
        return
        }else{
            OrderServices.checkAddress(address)
            .then((res)=>{
                // const cookies = new Cookies();
                // let products = cookies.get("Products")
                // products.push({address:res})
                // cookies.set("Products", products, { path: '/' });
                this.setState({addressCheck:res})
                this.context.setAddress(res)


            })
            .catch((e)=>console.log(e))
        }
    }
    useBilling = (e)=> {
        if(e.target.checked){
            this.setState({billing:true})
        }else{
            this.setState({billing:false})
        }
      }


    render(){
    const { countrieslist} = this.state
    console.log(this.onClick)

        if(this.getTotal() === 0){
            return(<Redirect to="/"></Redirect>)
        }
        
        if(this.state.addressCheck === ""){
            return(
                <div>
                
                    <Input name="name" placeholder="Enter Name" onChange={this.onChange} />
                    <Input name="company" placeholder="Enter Company" onChange={this.onChange} />
                    <Input name="street1" placeholder="Enter Complete Street" onChange={this.onChange} />
                    <Input name="city" placeholder="Enter City" onChange={this.onChange} />
                    <Input name="state" placeholder="Enter State " onChange={this.onChange} />
                    <Input name="zip" type="number" placeholder="Enter Zipcode" onChange={this.onChange} />
                    <Input name="country" placeholder="Enter Country" onChange={this.onChange} />
                    
                    {/* <Select name="country"
                            onClick={this.onClick}
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a a Country"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                        {countries.map((i,index)=>{
                    return(
                        <Option key={index} name="country" value={i.name}>{i.name}</Option>

                    )
                })}
                        </Select> */}

                    <Checkbox onChange={this.useBilling}>Use this as your Billing Address?</Checkbox>
                    <div>
                    <button onClick={()=>this.validateAddress()}>Check address</button>
                    
                    {/* <Checkout 
                    // onClick={this.validateAddress()}
                    name={`You have ${this.state.products.length}# of item(s)`}
                    description={"thank you for buying with my story"}
                    amount={this.getTotal()}
                    deleteProducts={this.deleteProducts}
                    user={this.props.user}          
                    >
                    </Checkout>  */}
                    </div>
                </div>
            )

        }else{
        return(
            <div>
                <Redirect to={{
                pathname:"/final-checkout",
                state:{address: this.state.addressCheck, billing:this.state.billing }
                }}
                ></Redirect>
            </div>
        )
        }
        
    }
}
export default ShippingRates