import React, { Component } from "react";
import PodcastServices from "../../services/PodcastServices";
import KitServices from "../../services/KitServices";
// import SurvivalKit from "../../components/survivalKit/SurvivalKit";
import KitCard from "../../components/survivalKit/KitCard";
class PodcastDetail extends Component {
    state = {
        podcast: "",
        kits: ""
    }

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    fetchPodcast = () => {
        const {id} = this.props;
        
        PodcastServices.getOne(id)
            .then((podcast) => {
                this.setState({podcast})
                this.fetchKits(podcast.influencer._id)
            })
            .catch((err) => console.log(err))
    };

    fetchKits = (id) => {
        KitServices.getKits(id)
            .then((kits) => this.setState({kits}))
            .catch((err) => console.log(err))
    };

    componentDidMount() {
        this.fetchPodcast();
    };

    render(){
        const {podcast} = this.state;
        console.log(this.state)
        if (podcast === "" || this.state.kits === "") {
            return(<div></div>)
        } else {
            return(
                <div className="podcast-detail-page">

                    <div className="podcast-header-div">
                            <p id="categories-podcast">Categories </p>
                
                            <h1>{podcast.title}</h1>
                        <div className="name-and-share">
                            <div>
                                <h2>{podcast.influencer.name.firstName} {podcast.influencer.name.lastName} | {podcast.time}</h2>
                            </div>
                            <div>
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className="podcast-detail-description-div">
                        <p>{podcast.description}</p>
                        <h4>Who is {podcast.influencer.name.firstName} {podcast.influencer.name.lastName} ?</h4>
                            <p>{podcast.influencer.description}</p>
                    </div>
                    <div className="podcast-detail-kit-div">
                        <p id="survival-kit-word">SURVIVAL KITS</p>
                        <div className="kits-all-section">
                            {this.state.kits.map((i, index) => {
                                return (
                                    <KitCard kit={i} key={index}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PodcastDetail