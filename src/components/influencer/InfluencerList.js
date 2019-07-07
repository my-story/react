import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import SearchBar from './SearchInfluencer';
import InfluencerServices from '../../services/InfluencerServices';
import InfluencerItem from "./InfluencerItem";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility:true,
  };

class InfluencerList extends Component{
    state = {
			influencers:[],
			category:[
					"Athlete","Musician","Tech","Artist"
			]
    }

    fetchInfluencer = () => {
			InfluencerServices.getAll()
				.then(influencers => this.setState({
					...this.state,
					influencers
				}))
		}
		
		// needs fixing
    getFilter = (e) => { 
			InfluencerServices.getFilter(e.target.value)
			.then((res)=>{
					this.setState({influencers:res.data})
			})
			.catch((err)=>console.log(err))
    }

    componentDidMount(){
      this.fetchInfluencer()
    }


    filterCategory = (e) =>{
			let url = `http://localhost:3002/influencer/filter/category?search=${e.target.value}`
			axios.get(url,{withCredentials:true})
			.then((res)=>{
					console.log(res)
					this.setState({influencers:res.data})
			})
			.catch((err)=>console.log(err))
    }



    render(){
        const {influencers, category} = this.state
            return(
                <div>
                    <h1>Influencer landing</h1>
                    <div>
                    <SearchBar getFilter={this.getFilter} />
                    {category.map((c,index)=>{
                        return(
                        <div>
                            <button value={c} onClick={(e) => this.filterCategory(e)}>{c}</button>
                        </div>
                        )
                    })}
                    </div>
                    <Slider {...settings}>
                    {influencers.map((i,index)=>{
                        return(
                            <InfluencerItem key={index} influencer={i}></InfluencerItem>
                        )
                    })}
                    </Slider>
    
                </div>
            )
}
}

export default InfluencerList;