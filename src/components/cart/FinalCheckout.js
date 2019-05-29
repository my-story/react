import React, {Component} from 'react'
import Cookies from 'universal-cookie'
import OrderServices from '../../services/OrderServices'

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
        // const cookies = new Cookies();
        // let products = cookies.get("Products")
        // let tempAdd = products[products.length -1]
        // let address = tempAdd.address
        // this.setState({products,address})
        this.giveRates()
    }
    render(){
        const {products,address,rates} = this.state
        console.log(rates)
        if(rates.length===0){
            return<div>loading..................</div>
        }
        return(
            <div>
                {rates.map((i,index)=>{
                    return(

                        <div key={index} className="influencer-card">
                        <p>Price: {i.amount}</p>
                        <p>{i.duration_terms}</p>
                        <p>Your package will arrive in: {i.duration_days}</p>
                        <p>{i.provider}</p>
                        <p>{i.servicelevel.name}</p>


                        
                        </div>

                    )
                })}

            </div>
        )
    }
}
export default FinalCheckout