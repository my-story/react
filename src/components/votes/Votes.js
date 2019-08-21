import React, { Component } from 'react';

class Votes extends Component {
  render(){
    if (this.props.isUpvoted){
      return(
        <div className="bottom-review-container">
        <div className="votes-container">
          <input type="image" className="upvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242957/icons8-back-arrow-64_2.png" alt="upvote" onClick={this.props.voteUp} />
          <span>{this.props.votes}</span>
          <input type="image" className="downvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242958/icons8-back-arrow-64.png" alt="downvote" onClick={this.props.voteDown}/>
        </div>
        <div>

        </div>
      </div>
      )
    } else if (this.props.isDownvoted){
      return(
        <div className="bottom-review-container">
        <div className="votes-container">
          <input type="image" className="upvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242958/icons8-back-arrow-64.png" alt="upvote" onClick={this.props.voteUp} />
          <span>{this.props.votes}</span>
          <input type="image" className="downvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242957/icons8-back-arrow-64_3.png" alt="downvote" onClick={this.props.voteDown}/>
        </div>
        <div>

        </div>
      </div>
      )
    } else {
      return(
      <div className="bottom-review-container">
        <div className="votes-container">
          <input type="image" className="upvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242958/icons8-back-arrow-64.png" alt="upvote" onClick={this.props.voteUp} />
          <span>{this.props.votes}</span>
          <input type="image" className="downvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566242958/icons8-back-arrow-64.png" alt="downvote" onClick={this.props.voteDown}/>
        </div>
        <div>

        </div>
      </div>
      )
    }
  }
}

export default Votes;