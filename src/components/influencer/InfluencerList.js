import React, { Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'
import AuthServices from '../../services/AuthServices'


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

      checkLogged = () => {
        AuthServices.loggedin()
            .then(user => console.log(user))
            .catch((e)=>console.log(e)) 
      }


    componentDidMount(){
        this.fetchInfluencer()
        this.checkLogged()
    }

    render(){
        const {influencers} = this.state
        return(
            <div>
                <h1>Influencer landing</h1>
                {influencers.map((i,index)=>{
                    return(
                        <div key={index} className="influencer-card">
                        <p>name: {i.name}</p>
                        <p>description: {i.review}</p>
                        <img height="100" src={i.profilePic} alt={i.name} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default InfluencerList;