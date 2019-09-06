import React, { Component } from 'react';
// import Slider from "react-slick";
import Link from 'next/link'
import InfluencerServices from '../src/services/InfluencerServices';
import SearchBar from '../src/components/influencer/SearchInfluencer';
// import InfluencerItem from "../src/components/influencer/InfluencerItem";
import InfluencerCard from '../src/components/influencer/InfluencerCard';


class InfluencerList extends Component {

  state = {
    influencers: [],
    category: [
      "Athlete", "Musician", "Tech", "Artist"
    ],
    search_expert:[]
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
  // getFilter = (e) => {
  //   InfluencerServices.getFilter(e.target.value)
  //     .then((res) => this.setState({ search_expert: res }))
  //     .catch((err) => console.log(err))
  // }

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
            {/* <div id="expert-orange-bubble"> */}
            <img id="expert-illustration" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380238/3260_Converted.png" alt="expert illustration" />
            {/* </div> */}
            <img className="background-blue-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380557/Bitmap_Copy.png" />
            {/* <img className="background-orange-bubble" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566236933/shape.svg" /> */}
          </div>
          <div className="expert-message">
            <p id="im-john"> Hey!<br></br>
            I'm John,<br></br>
            </p>
            <p id="master-of" style={{color:"#F66C4F"}}>the Master of<br></br>
            Opinions.</p> 
            <p id="skip-intro">Skip intro</p>
          </div>
        </div>
        <h2 style={{paddingBottom: "20px"}}><b>Top Recomendations</b></h2>
        {/* Search Bar Reactive  */}

        <div>
          {/* <SearchBar getFilter={this.getFilter} /> */}
          {/* {category.map((c, index) => {
            return (
              <div key={index}>
                <button value={c} onClick={(e) => this.filterCategory(e)}>{c}</button>
              </div>
            )
          })} */}
        </div>

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

        <div className="top-categories">
          <h2><b>Top Categories</b></h2>

          <div className="categories-container">
            <div id="categories-card">
              {/* <img id="category-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178040/Deco-Design/icons8-colosseum-48_1.png" alt="category-image" /> */}
              <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790965/icons8-sport-96_1.png" alt="category" /></div>
              <p><b>Athlete</b></p>
              <div id="dash-under"></div>
            </div>
            <div id="categories-card">
              {/* <img id="category-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178040/Deco-Design/icons8-colosseum-48_1.png" alt="category-image" /> */}
              <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790640/icons8-paragraph-96_1.png" alt="category" /></div>             
              <p><b>Author</b></p>
              <div id="dash-under"></div>
            </div>
            <div id="categories-card">
              {/* <img id="category-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178040/Deco-Design/icons8-colosseum-48_1.png" alt="category-image" /> */}
              <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790797/icons8-comedy-100_2.png" alt="category" /></div>              
              <p><b>Comedian</b></p>
              <div id="dash-under"></div>
            </div>
            {/* <div id="categories-card">
              <img id="category-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178040/Deco-Design/icons8-colosseum-48_1.png" alt="category-image" />
              <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567791082/icons8-music-notation-250.png" alt="category" /></div>              
              <p><b>Musician</b></p>
              <div id="dash-under"></div>
            </div> */}
          </div>
          <div className="category-bar"> 
          <p><b>All Categories: </b></p>
          <div>
            <span id="category-bubble">Athlete</span>
            <span id="category-bubble">Author</span>
            <span id="category-bubble">Comedian</span>
            {/* <span id="category-bubble">Surprise</span>
            <span id="category-bubble">Coming Soon</span>
            <span id="category-bubble">Coming Soon</span>
            <span id="category-bubble">Coming Soon</span> */}

          </div>
          </div>
        </div>

        <div className="video-section">
          <div className="video-message">
            <h1><b>What is it all about?</b></h1>
            <p>Why wouldn't you trust the best of the best? <br></br></p>

            <span><b>Watch a short video about us</b></span>
          </div>
          <div id="video-about-us-container">
            <input type="image" id="video-start" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566406923/btn.svg" />
            <img id="about-us-video" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566405071/Video.png" alt="video-about-us"/>
          </div>
        </div>
        <div className="donate-margin">
        <div className="donate-section">
          <div className="donate-message">
            <h2>A short message calling<br></br>for the donations</h2>
            <p>Sages focuses on giving back to the community.<br></br> 
            For every sale made, 10% will be donated to a <br></br>
            foundation chosen by the expert.</p>
              <div className="donate-buttons">
              <p>Donate</p>
              <p>Learn more about what we do</p>
              </div>
          </div>
          <div> 
            <img id="donate-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566410262/Screenshot_from_2019-08-21_13-57-13.png" alt="donate-picture-logo"/>
          </div>
        </div>
        </div>
        
      </div>
    )
  }
}

export default InfluencerList;