import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';
import SearchBar from './SearchInfluencer';
import InfluencerItem from "./InfluencerItem";
import InfluencerServices from '../../services/InfluencerServices';


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
			.catch((err) => console.log(err))
		}
		
	// needs fixing
	getFilter = (e) => { 
			InfluencerServices.getFilter(e.target.value)
				.then((res) => this.setState({influencers:res.data}))
				.catch((err) => console.log(err))
    }

	componentDidMount(){
      this.fetchInfluencer()
    }

//Still needs fixing
	filterCategory = (e) =>{
			InfluencerServices.searchFilter(e.target.value)
				.then((res) => this.setState({influencers:res.data}))
				.catch((err) => console.log(err))
    }

		render(){
			const {influencers, category} = this.state

				return(
						<div>
							<h1>Influencer landing</h1>
								<div>
								<SearchBar getFilter={this.getFilter} />
								{category.map((c,index) => {
										return(
										<div>
												<button value={c} onClick={(e) => this.filterCategory(e)}>{c}</button>
										</div>
										)
									})}
								</div>
								<Slider {...settings}>
								{influencers.map((i,index) => {
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