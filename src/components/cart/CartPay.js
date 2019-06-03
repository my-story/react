import React, {Component} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
let products = cookies.get("Products")

class CartPay extends Component{
    state={
        rate:this.props.location.state.rate
    }


    render(){
        console.log(this.state.rate)
        
        return(
            <div>
            </div>
        )
    }
}

export default CartPay