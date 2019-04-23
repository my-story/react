import React, { Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'

class InfluencerList extends Component{
    state={
        influencers:[]
    }

    fetchInfluencer = () => {
        InfluencerServices.getAll()
          .then(influencers => this.setState({
            ...this.state,
            influencers
          }))
      }
    componentDidMount(){
        this.fetchInfluencer()
    }

    render(){
        const {influencers} = this.state
        console.log(influencers)
        return(
            <div>
                <h1>Influencer landing</h1>
                {influencers.map((i,index)=>{
                    return(
                        <div key={index} className="influencer-card">
                        <p>name: {i.name}</p>
                        <p>description: {i.description}</p>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default InfluencerList;