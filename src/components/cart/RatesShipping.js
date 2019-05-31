import React, { Component } from 'react'

class Rates extends Component{
    state={

    }
    showRates=(e)=>{
        console.log(this.props.rates.amount)
    }
    render(){
        return(
            <div>
                        <div key={this.props.index} className="influencer-card">
                        <p>Price: {this.props.rates.amount}</p>
                        <p>{this.props.rates.duration_terms}</p>
                        <p>Your package will arrive in: {this.props.rates.duration_days}</p>
                        <p>{this.props.rates.provider}</p>
                        <p>{this.props.rates.servicelevel.name}</p>
                        <input onClick={this.showRates} type="checkbox" />
                        </div>

            </div>

        )
    }
}   

export default Rates