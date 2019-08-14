import React, { Component } from 'react';
import Slider from "react-slick";
import Link from 'next/link'
import SearchBar from '../src/components/influencer/SearchInfluencer';
import InfluencerItem from "../src/components/influencer/InfluencerItem";
import InfluencerServices from '../src/services/InfluencerServices';


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

{/* // {influencers.map((i, index) => {

//   const divStyle = {
//     backgroundImage: 'url(' + i.profilePic + ')',
//     height: "43vh",
//     width: "25vw",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     borderRadius: "8px",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "100% 100%  ",
//   };
  
//       return (
//           <div className="expert-card" style={ divStyle } >
//               <div className="category-card">
//                   <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
//                   <span className="photography">Photography</span>
//                 </div>
//               <div class="bottom-card">
//                 <div id="name-votes">
//                   <p id="name-card"><b>{i.name.firstName} {i.name.lastName} </b></p>
//               <div class="votes">
//               <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373742/arrow_1.svg" id="arrow" alt="arrow-down"/>
//             <p>23</p>
//                 <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373737/arrow_2.svg" id="arrow" alt="arrow-up"/>
//             </div>
//           </div>
//           <div class="product-bubble">
//             <img id="product-picture" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565216217/img.png" alt="product-picture"/>
//           </div>
//         </div>

// </div>

              
//             )

//           })} */}
  <div className="heyhey-expert">

  </div>

 
    {influencers.map((i, index) => {
      const divStyle = {
        backgroundImage: 'url(' + i.profilePic + ')',
        height: "43vh",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "8px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        boxShadow: "20px",
        // padding: "20px"
      };
            return (
              // <InfluencerItem style={divStyle} influencer={i} key={index}></InfluencerItem>
              <div style={divStyle} key={index}>
              {/* <Link key={index} href={`review/${i._id}`}>         */}
                  <div className="category-card">
                      <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
                      <span className="photography">Photography</span>
                  </div>
                  <div class="bottom-card">
                    <div id="name-votes">
                      <p id="name-card"><b>{i.name.firstName} {i.name.lastName} </b></p>
                  <div class="votes">
                  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373742/arrow_1.svg" id="arrow" alt="arrow-down"/>
                <p>23</p>
                    <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373737/arrow_2.svg" id="arrow" alt="arrow-up"/>
                </div>
              </div>
              <div class="product-card  -bubble">
                <img id="product-picture" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565216217/img.png" alt="product-picture"/>
              </div>
            </div>
            {/* </Link>  */}
            </div>
            )
          })}


      </div>
    )
  }
}

export default InfluencerList;