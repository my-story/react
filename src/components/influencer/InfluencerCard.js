import React, { Component } from 'react';
import Link from 'next/link';
import ReviewServices from '../../services/ReviewServices';


class influencerCard extends Component {
  state = {
    review: {}
  };

  componentDidMount() {
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

  render(){
    console.log(this.props);
    console.log(this.state);
    const divStyle = {
      backgroundImage: 'url(' + this.props.i.profilePic + ')',
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
    return(
      <Link href={`review/${this.props.i._id}`} key={this.props.index}>  
        <div style={divStyle} >      
            <div className="category-card">
                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
                <span className="photography">Photography</span>
            </div>
            <div class="bottom-card">
              <div id="name-votes">
                <p id="name-card"><b>{this.props.i.name.firstName} {this.props.i.name.lastName} </b></p>
            <div class="votes">
              <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373742/arrow_1.svg" id="arrow" alt="arrow-down"/>
              <p>{this.votes()}</p>
              <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373737/arrow_2.svg" id="arrow" alt="arrow-up"/>
            </div>
          </div>
          <div class="product-card  -bubble">
            <img id="product-picture" alt="the product" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565216217/img.png" alt="product-picture"/>
          </div>
        </div>
        </div>
      </Link>
    )
  }
}

export default influencerCard;