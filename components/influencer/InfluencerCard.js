import React, { Component } from 'react';
import Link from 'next/link';
import ReviewServices from '../../services/ReviewServices';


class influencerCard extends Component {

  
  state = {
    review: {},
    kit: {},
    opacity: "1",
  };

  

  componentDidMount = () => {
    ReviewServices.getReview(this.props.i._id)
      .then((review) => this.setState(() => ({ review: review })))
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

  displayCategory = () => {
    if (this.state.review.kit.category !== undefined) {
      console.log(this.state.review.kit.category)
      return(<div id={`card-kit-category`} className={this.state.review.kit.category}></div>)
    } else {
      return(<div></div>)
    }
  }
  displayTitle = () => {
    if (this.state.review.kit.title !== undefined) {
      return(<div id="card-kit-title"><b>{this.state.review.kit.title}</b></div>)
    } else {
      return(<div></div>)
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
    const {review} = this.state;
    
    if (this.props.review === "yes" || review.kit === undefined){
      return(
        <Link href="/review/[id]" as={`/review/${this.props.i._id}`} key={this.props.index} prefetch>  
          {/* <div className="expert-card review">
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
          </div> */}
          <div>

          </div>
        </Link>
      )
    } else {
      return (
        <Link href="review/[id]" as={`review/${this.props.i._id}`} key={this.props.index} prefetch>  
          {/* <div className="expert-card">
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
          </div> */}
          <div className="expert-card-container">
            <div className="expert-card-name">
              <div>
              {this.displayCategory()}
              </div>
              <div>
              {this.displayTitle()}
              </div>
              <div id="card-kit-name">
                {this.props.i.name.firstName} {this.props.i.name.lastName}
              </div>
            </div>

            <div className="expert-card-paragraph">
              <p>
              Classic looks and all-game comfort are what these juniors' soccer cleats are all about. They feature a lightweight, durable synthetic upper. They're designed for stability and speed on firm ground.
              </p>
            </div>
            <div className="expert-card-picture-div">
              <div className="expert-card-picture-round">
                {/* <img src="" alt="Sage picture" /> */}
              </div>
            </div>
          </div>
        </Link>
      )
    }
  }
}

export default influencerCard;