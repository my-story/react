import React, { Component } from 'react';
import Link from 'next/link';
import ReviewServices from '../../services/ReviewServices';


class influencerCard extends Component {
  state = {
    review: {},
    product: {}
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

  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.i.profilePic + ')',
      height: "43vh",
      // width: "25vw",
      width: "24vw",
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
      <Link href={`review/${this.props.i._id}`} key={this.props.index}>  
        <div style={divStyle} >
          <div className="top-card">      
            <div className="category-card">
                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
                <span className="photography">Photography</span>
            </div>
            </div>
            <div className="bottom-card">
              <div id="name-votes">
                <p id="name-card"><b>{this.props.i.name.firstName} {this.props.i.name.lastName} </b></p>
            <div className="votes">
              <p>upvotes</p>
              <p> {this.votes()}</p>
            </div>
          </div>
          <div className="product-card-bubble">
            <img id="product-picture" src={this.state.product.images} alt="product-picture"/>
            {/* <div className="bubble-product-prize"> */}
            <div>
            <p id="name-inside-product"><b>{this.state.product.model}</b></p>
            <p id="prize-inside-product">${this.state.product.prize}</p>
            </div>
            {/* </div> */}
          </div>
        </div>
        </div>
      </Link>
    )
  }
}

export default influencerCard;