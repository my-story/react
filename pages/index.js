import React, { Component } from 'react';
// import Slider from "react-slick";
import Link from 'next/link'
import InfluencerServices from '../services/InfluencerServices';
import SearchBar from '../components/influencer/SearchInfluencer';
// import InfluencerItem from "../src/components/influencer/InfluencerItem";
import InfluencerCard from '../components/influencer/InfluencerCard';
import Modal from "react-responsive-modal";


class InfluencerList extends Component {
  state = {
    influencers: [],
    category: [
      "Athlete", "Musician", "Tech", "Artist"
    ],
    search_expert:[],
    open: false
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

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { influencers, category, open } = this.state
   
    return (
      <div className="index-page">
        <div className="expert-section">
          <div className="expert-video">
            <div>
            <video className="video" controls src="https://res.cloudinary.com/dpt8pbi8n/video/upload/v1567711319/y2mate.com_-_joe_rogan_where_does_freedom_of_speech_end_jCPfU45L3iM_1080p.mp4" />
            </div>
          </div>
          <div className="expert-div">
          <div className="expert-message">
            <p id="im-john"> Hey!<br></br>
            I'm John,<br></br>
            </p>
            <p id="master-of" style={{color:"#F66C4F "}}>the Master of<br></br>
            Opinions.</p> 
            <p id="skip-intro">Skip intro</p>
          </div>
            {/* <img id="expert-illustration" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380238/3260_Converted.png" alt="expert illustration" /> */}
            <img className="background-blue-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380557/Bitmap_Copy.png" alt="blue-dash"/>
          </div>
        </div>
        <h2 style={{paddingBottom: "20px"}}><b>Top Recomendations</b></h2>
        <div>
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
            {/* <button><b>Share an opinion</b></button> */}
            <div> 
              <button onClick={this.onOpenModal}><b>Share an opinion</b></button>
              <Modal id="pop-up-css" className="modal" open={open} onClose={this.onCloseModal} center>
                <div className="heading-pop-up">
                <h2><b>Share your opinion</b></h2>
                <p>We greatly appreciate you feedback!</p>
                </div>
                <ol className="questions-pop-up">
                  <li id="question-modal">Have you enjoyed the overall experience of the application?</li>
                  <div id="number-bar" className="btn-group mr-2" role="group" aria-label="First group" clicked>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">1</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">2</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">3</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">4</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">5</button>
                    <button type="button" id="pop-up-bttn"className="btn btn-secondary">6</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">7</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">8</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">9</button>
                    <button type="button" id="pop-up-bttn" className="btn btn-secondary">10</button>
                  </div>
                  <li id="question-modal">Have you encountered any problems when using our site?</li>
                  <div className="yes-no">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                    </div>
                  <li id="question-modal">If you would like to see something improve in this page what would it be?</li>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </ol>
                <div className="button-div">
                <button className="feedback-submit-button"><span className="login-font">Submit</span></button>
                </div>
              </Modal>
            </div>
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
{/* 
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
        </div> */}


            <div className="index-best-book-div">
            <div className="best-book-header">
              <h1>The Best Book This Week</h1>
            </div>
            <div className="best-book-info-div">
              <div className="best-book-pictures">
                <img id="best-book-cover" src="https://www.bookcoversclub.com/wp-content/uploads/2018/02/book-cover-352.jpg" alt="Book Cover" />
                <img id="best-book-author" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Robert_Greene_B%26W.jpg" alt="Author Picture" />
              </div>
              <div className="best-book-title-div">
                <h2>Name of the book</h2>
                <p id="best-author-p">Author: Jota Jota Cisneros</p>
                <p id="best-description-p">Descripcion del libro. Lorem ipsum saes, toca ver que aprendemos del libro para poder saaessss.esto es un test.!</p>
                <button>Get the Book</button>
              </div>
            </div>

            </div>

        
      </div>
    )
  }
}

export default InfluencerList;