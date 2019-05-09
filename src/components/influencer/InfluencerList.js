import React, { Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'
import AuthServices from '../../services/AuthServices'
import {Link} from 'react-router-dom'
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility:true
  };

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
        // this.checkLogged()
    }

    render(){
        const {influencers} = this.state
        return(
            <div>
                <h1>Influencer landing</h1>
                <Slider {...settings}>

                {influencers.map((i,index)=>{
                    return(

                        <Link key={i}to={`review/${i._id}`}>
                        <div key={index} className="influencer-card">
                        <p>name: {i.name}</p>
                        <p>description: {i.review}</p>
                        <img height="100" src={i.profilePic} alt={i.name} />
                        </div>
                        </Link>
                    )
                })}
                </Slider>

            </div>
        )
    }
}

export default InfluencerList;