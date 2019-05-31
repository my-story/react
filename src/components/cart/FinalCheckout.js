import React, {Component} from 'react'
import OrderServices from '../../services/OrderServices'

import { Checkbox } from 'antd';
import Cookies from 'universal-cookie'
import Rates from './RatesShipping';

class FinalCheckout extends Component{
    state={
        products: "",
        address: this.props.location.state.address,
        rates: ""
    }



    giveRates=()=>{
        const {address} = this.state
    
        OrderServices.shippingRates(address)
        .then((res)=>{
            this.setState({rates:res.rates})
            // console.log(res)
        })
        .catch((e)=>console.log(e))
    }


    componentDidMount(){
        const cookies = new Cookies();
        let products = cookies.get("Products")
        // let tempAdd = products[products.length -1]
        // let address = tempAdd.address
        this.setState({products})
        this.giveRates()
    }
    render(){
        const {products,rates} = this.state
        console.log(rates,products)
        if(rates.length===0){
            return<div>loading..................</div>
        }
        return(
            <div>
            {rates.map((i,index)=>{
                return(
            <Rates rates={i} index={index}></Rates>
            )
                })}

            </div>
        )
    }
}
export default FinalCheckout