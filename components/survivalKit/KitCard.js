import React, { Component } from 'react'

class KitCard extends Component {
    render () {
        if (!this.props.kit.title) {
            return(<div></div>)
        } else {
            return (
                /* <Link href="review/[id]" as={`review/${this.props.i._id}`} key={this.props.index} prefetch>   */
                <div className="expert-card-container">
                    <div className="expert-card-picture-div">
                        <img className="expert-card-picture-round" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1583176290/simon-migaj-b2qszO9C7sw-unsplash.jpg" alt="Sage picture" />
                    </div>
                    <div className="expert-card-name">
                    <div> 
                        <img id="expert-profile-pic-card" src={this.props.kit.influencer.profilePic} /> 
                    </div> 
                    <div className="expert-card-name-survival">
                        <div>
                            <div id="card-kit-title"><b>{this.props.kit.title}</b></div>
                        </div>
                        <div id="card-kit-name">
                            {this.props.kit.influencer.name.firstName} {this.props.kit.influencer.name.lastName}
                        </div>
                    </div>
                    </div>
                </div>
                )
        }

    }
}

export default KitCard