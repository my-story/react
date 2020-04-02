import React, { Component } from 'react';
import Link from 'next/link';
import PodcastServices from '../../services/PodcastServices';

class PodcastCard extends Component {

    state = {
        // podcast: ""
    }

    // componentDidMount() {
    //     this.setState({podcast: this.props.podcast})
    // }

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
        // const {podcast} = this.props;

        console.log(this.props.podcast._id);

        // if (podcast === ""){
        //     return(<div></div>)
        // } else {
            return (
                <div key={this.props.index} className="podcast-outer-card">
                <Link href="/podcast/[id]" as={`/podcast/${this.props.podcast._id}`} key={this.props.index} prefetch>
                    <div className="podcast-image-div">
                        <img id="podcast-thumbnail-image"src="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg" alt="" />
                    </div>
                    <div className="podcast-information">
                        <div className="podcast-heading-div">
                            <h2>{this.props.podcast.influencer.name.firstName} {this.props.podcast.influencer.name.lastName}</h2>
                            <p>{this.props.podcast.time}</p>
                        </div>
                        <div className="podcast-description-div">
                        <p>{this.props.podcast.title}</p>
                        {/* <p>{podcast.description}</p> */}
                        {this.shrinkParagraph(this.props.podcast.description)}
                        </div>
                    </div>
                </Link>
                </div>
            );
        

    }
}

export default PodcastCard;