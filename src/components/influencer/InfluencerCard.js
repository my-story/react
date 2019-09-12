import React, { Component } from 'react';
import Link from 'next/link';
import ReviewServices from '../../services/ReviewServices';


class influencerCard extends Component {

  
  state = {
    review: {},
    product: {},
    opacity: "1",
  };

  

  componentDidMount() {
    ReviewServices.getReview(this.props.i._id)
      .then((review) => this.setState(() => ({ review: review, product: review.product })))
      .catch(() => console.log('Error occured while fetching review. Please try later.'));
  }

  votes = () => {
    if (this.state.review.upvotes && this.state.review.downvotes) {
      return this.state.review.upvotes.length - this.state.review.downvotes.length;
    } else {
      return 0;
    }
  };

  getGlyphicon = (category) =>{
    const Comedy = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png";
    const Athlete = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567788668/icons8-sport-96.png";
    const Author = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567788259/icons8-paragraph-96.png"; 

    const arr = [{"Comedian": Comedy}, {"Athlete": Athlete}, {"Author": Author}];

    for(let i = 0; i < arr.length; i++){
      if(Object.keys(arr[i]).join('') === category){
        return arr[i][category];
      }
    }
  }

  opaqueOn = () => {
    this.setState({
      opacity: "0.3"
    });
  }

  opaqueOff = () =>{
    this.setState({
      opacity: "1"
    });
  }

  render() {
    const photoBackground= {
      backgroundImage: 'url(' + this.props.i.profilePic + ')',
    };  

    // const divStyleReview = {
    //   backgroundImage: 'url(' + this.props.i.profilePic + ')',
    //   // background: "rgba(255, 255, 255, 0.3)",
    //   // filter: "alpha(opacity=50)",
    //   // backgroundBlendMode: "lighten",
    //   transform: "scale(0.8)",
    //   maxHeight: "43vh",
    //   // width: "25vw",
    //   maxWidth: "24vw",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "space-between",
    //   borderRadius: "8px",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   backgroundSize: "100% 100%",
    //   // boxShadow: "20px",
    //   opacity: this.state.opacity,
    //   // backgroundColor: "black",
      
    //   // padding: "20px" 
    // };  

    if (this.props.review === "yes"){
      return(
        <Link href={`review/${this.props.i._id}`} key={this.props.index}>  
          <div className="expert-card review">
          <div style={photoBackground} className="test-background-image"></div>
            <div className="top-card">      
              <div className={`category-bubble ${this.props.i.expertise[0]}`}>
                  <img src={this.getGlyphicon(this.props.i.expertise[0])} alt="the product" className="icon"/>
                  <span className="category-name">{this.props.i.expertise}</span>
              </div>
              <div className="quote-hover">
                <img id="quote-pic" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1568057128/quotes.svg" alt="Quotes" />
                <p> Lorem ipsum hyea fieqof, cuando pudes , lmetele, kasndaw punto y coma.</p>
              </div>
              </div>
              <div className="bottom-card">
              <div id="name-votes">
                  <p id="name-card"><b>{this.props.i.name.firstName} {this.props.i.name.lastName}</b></p>
                <div className="votes">
                  <p>upvotes</p>
                  <p> {this.votes()}</p>
                </div>
              </div>
            <div className="product-card-bubble">
              <img id="product-picture" src={this.state.product.images} alt="product-picture"/>
              <div>
              <p id="name-inside-product"><b>{this.state.product.model}</b></p>
              <p id="prize-inside-product">${this.state.product.prize}</p>
              </div>
            </div>
          </div>
          </div>
        </Link>
      )
    } else {
      return (
        <Link href={`review/${this.props.i._id}`} key={this.props.index}>  
          <div className="expert-card">
          <div style={photoBackground} className="test-background-image"></div>
            <div className="top-card">      
              <div className={`category-bubble ${this.props.i.expertise[0]}`}>
                  <img src={this.getGlyphicon(this.props.i.expertise[0])} alt="the product" className="icon"/>
                  <span className="category-name">{this.props.i.expertise}</span>
              </div>
              <div className="quote-hover">
                <img id="quote-pic" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1568057128/quotes.svg" alt="Quotes" />
                <p> Lorem ipsum hyea fieqof, cuando pudes , lmetele, kasndaw punto y coma.</p>
              </div>
              </div>
              <div className="bottom-card">
              <div id="name-votes">
                  <p id="name-card"><b>{this.props.i.name.firstName} {this.props.i.name.lastName}</b></p>
                <div className="votes">
                  <p>upvotes</p>
                  <p> {this.votes()}</p>
                </div>
              </div>
            <div className="product-card-bubble">
              <img id="product-picture" src={this.state.product.images} alt="product-picture"/>
              <div>
              <p id="name-inside-product"><b>{this.state.product.model}</b></p>
              <p id="prize-inside-product">${this.state.product.prize}</p>
              </div>
            </div>
          </div>
          </div>
        </Link>
      )
    }
  }
}

export default influencerCard;