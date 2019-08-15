import React, { Component } from 'react';
// import Slider from "react-slick";
import Link from 'next/link'
// import SearchBar from '../src/components/influencer/SearchInfluencer';
// import InfluencerItem from "../src/components/influencer/InfluencerItem";
import InfluencerServices from '../src/services/InfluencerServices';
import InfluencerCard from '../src/components/influencer/InfluencerCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  accessibility: true,
};

class InfluencerList extends Component {

  state = {
    influencers: [],
    category: [
      "Athlete", "Musician", "Tech", "Artist"
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

  //		.then((res) => this.setState({influencers:res.data}))
  // needs fixing
  getFilter = (e) => {
    InfluencerServices.getFilter(e.target.value)
      .then((res) => this.setState({ influencers: res }))
      .catch((err) => console.log(err))
  }

  //Still needs fixing
  filterCategory = (e) => {
    InfluencerServices.searchFilter(e.target.value)
      .then((res) => this.setState({ influencers: res }))
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.fetchInfluencer();

  }

  render() {
    const { influencers, category } = this.state
    return (
      <div className="index-page">
        <div className="expert-section">
          <div className="expert-div">
            <img className="background-orange-bubble" src="" />
            <img id="expert-illustration" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380238/3260_Converted.png" alt="expert illustration" />
            <img className="background-blue-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380557/Bitmap_Copy.png" />
          </div>
          <div className="expert-message">
            <p> Hey!<br></br>
            Im John,<br></br>
            </p>
            <p style={{color:"#F66C4F"}}>The Master of<br></br>
            Opinions.</p> 
            <p id="skip-intro">Skip intro</p>
          </div>
        </div>
        <h2 style={{paddingBottom: "20px"}}><b>Top Recomendations</b></h2>
        {/* Search Bar Reactive 

        <div>
          <SearchBar getFilter={this.getFilter} />
          {category.map((c, index) => {
            return (
              <div key={index}>
                <button value={c} onClick={(e) => this.filterCategory(e)}>{c}</button>
              </div>
            )
          })}
        </div> */}
        <div className="expert-card-section">
        {influencers.map((i, index) => {
          return (
            <div>
              <InfluencerCard i={i} index={index} />
            </div> 
          )
        })}
        </div>
        <div className="heyhey-expert">
          <div className="expert-circle-background">
            <img id="expert-circle" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565887285/3260_Converted_1.png" alt="expert-circle" />
            <div id="big-circle"></div>
            <div id="small-circle"></div>
          </div>
          <div className="heyhey-message">
            <h1>Hey hey!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
            <button><b>Share an opinion</b></button>
          </div>
        </div>

    

      </div>
    )
  }
}

export default InfluencerList;