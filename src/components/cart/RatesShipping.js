import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Rates extends Component{

    state = {
        rate: "",
        billing: "",
        address: ""
    }

    showRates = () => {
        this.setState({rate:this.props.rates, billing:this.props.billingAddress, address:this.props.address});
    }

    render(){

        if(this.state.rate === "") {
            return(
                <div>
                    <div key={this.props.index} className="influencer-card">
                    <p>Price: {this.props.rates.amount}</p>
                    <p>{this.props.rates.duration_terms}</p>
                    <p>Estimated days: {this.props.rates.estimated_days}</p>
                    <p>{this.props.rates.provider}</p>
                    <p>{this.props.rates.servicelevel.name}</p>
                    {/* <input id="checkbox" type="checkbox" /> */}
                    <button onClick={this.showRates} >Choose this shipping</button>
                    </div>
                </div>  
            )

        } else {
            return(
                <Redirect to={{
                    pathname:"/pay-checkout",
                    state:{rate: this.state.rate, billing:this.state.billing, address:this.state.address }
                }}></Redirect>
            )
        }
    }
}   

export default Rates