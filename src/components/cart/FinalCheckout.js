import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import Rates from './RatesShipping';
import OrderServices from '../../services/OrderServices';

class FinalCheckout extends Component{

    state = {
        products: "",
        address: this.props.location.state.address,
        rates: "",
        billing: this.props.location.state.billing
    }

    giveRates = () => {
        const {address} = this.state;

        OrderServices.shippingRates(address)
        .then((res) => {
            this.setState({rates:res.rates});
        })
        .catch((e) => console.log(e))
    }

    componentDidMount() {
        const cookies = new Cookies();
        let products = cookies.get("Products");
        this.setState({products});
        this.giveRates();
    }

    render() {
        const {rates , billing , address} = this.state;

        if (rates.length === 0) {
            return<div>Loading...</div>
        }

        return(
            <div>
            {rates.map((i,index)=>{
                return(
                    <Rates showRates={this.showRates} address={address} billingAddress={billing} rates={i} index={index}></Rates>
                )
            })}
            </div>
        )
    }
}
export default FinalCheckout