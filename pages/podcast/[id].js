import React, { Component } from "react";
import PodcastServices from "../../services/PodcastServices";

class PodcastDetail extends Component {
    state = {
        podcast: ""
    }

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    componentDidMount() {
        const {id} = this.props;
        
        PodcastServices.getOne(id)
            .then((podcast) => this.setState({podcast}))
            .catch((err) => console.log(err))
    }

    render(){
        const {podcast} = this.state;

        console.log(this.state)

        if (podcast === "") {
            return(<div></div>)
        } else {
            return(
                <div>
                    <p>hola</p>
                </div>
            )
        }
    }
}

export default PodcastDetail