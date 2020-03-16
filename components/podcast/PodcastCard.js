import React, { Component } from 'react';
import PodcastServices from '../../services/PodcastServices';

class PodcastCard extends Component {

    state = {
        podcast: ""
    }

    componentDidMount() {
        this.setState({podcast: this.props.podcast})
    }

    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
    
            if (length > 170){
                return(
                    <p>{p.substring(0,170)} ...</p>
                )
            } else {
               return(
                   <p>{p}</p>
               )
            }
        
    };

    render() {
        const {podcast} = this.state;

        console.log(podcast);

        if (podcast === ""){
            return(<div>Loading....</div>)
        } else {
            return (
                <div className="podcast-outer-card">
                    <div className="podcast-image-div">
                        <img id="podcast-thumbnail-image"src="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg" alt="" />
                    </div>
                    <div className="podcast-information">
                        <div className="podcast-heading-div">
                            <h2>{podcast.influencer.name.firstName} {podcast.influencer.name.lastName}</h2>
                            <p>{podcast.time}</p>
                        </div>
                        <div className="podcast-description-div">
                        <p>{podcast.title}</p>
                        {/* <p>{podcast.description}</p> */}
                        {this.shrinkParagraph(podcast.description)}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default PodcastCard;