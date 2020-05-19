import React, { Component } from 'react';
import Link from 'next/link';
import PodcastServices from '../services/PodcastServices';
import PodcastCard from '../components/podcast/PodcastCard';
import CategoryBubbleOne from '../components/category/CategoryBubbleOne';

class Podcasts extends Component {
  state = {
    podcasts: [],
    category: [
      "All","Sports", "Music", "Tech", "Clothes"
    ],
  };


  fetchPodcasts = () => {
    PodcastServices.getAll()
    .then((podcasts) => this.setState({
      ...this.state,
      podcasts
    }))
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchPodcasts();
  };

  searchBar = (e) => {
    if(e === "All"){
      this.fetchPodcasts()
    } else {
      PodcastServices.searchPodcast(e)
      .then((podcasts) => this.setState({ podcasts }))
      .catch((err) => console.log(err))
    }
  };
  
  render() {
    const {podcasts , category} = this.state;
    console.log(podcasts);

    return (
        <div className="podcast-all-page">
            <h1><b>The Rebound Podcasts</b></h1>
            <div className="category-bar"> 
            <p><b className="all-categories-p">All Categories: </b></p>
            <div className="bar-categories-div">
              {category.map((category, index) => {
                return (
                  <div>
                    <CategoryBubbleOne searchbar={this.searchBar} category={category}></CategoryBubbleOne>
                  </div>
                )
               })}
            </div>
          </div>
          <div>
            {podcasts.map((podcast, index) => {
              
              return (
                // <Link prefetch href="podcast/[id]" as={`podcast/${podcast._id}`} key={index} >
                // <a>
                // <div>
                <PodcastCard podcast={podcast} index={index}></PodcastCard>
                // </div>
                // </Link>
              )
            })}
            </div>
        </div>
    )
 }
}

    

export default Podcasts;