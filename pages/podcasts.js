import React, { Component } from 'react';
import PodcastServices from '../services/PodcastServices';

class Podcasts extends Component {
  state = {
    podcasts: []
  };


  componentDidMount() {
    PodcastServices.getAll()
      .then((res) => this.setState({
        podcasts: res
      }))
      .catch(err => console.log(err))
  };

  render() {
    console.log(this.state)
    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
 }
}

    

export default Podcasts;