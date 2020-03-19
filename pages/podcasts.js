import React, { Component } from 'react';
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


  componentDidMount() {
    PodcastServices.getAll()
      .then((res) => this.setState({
        podcasts: res
      }))
      .catch(err => console.log(err))
  };

  render() {
    const {podcasts , category} = this.state;

    return (
        <div className="podcast-all-page">
            <h1><b>The Rebound Podcasts</b></h1>
            <div className="category-bar"> 
            <p><b className="all-categories-p" >All Categories: </b></p>
            <div>
              {category.map((category, index) => {
                return (
                  <div>
                    <CategoryBubbleOne searchbar={this.searchBar} category={category}></CategoryBubbleOne>
                  </div>
                )
               })}
            </div>
          </div>
            {podcasts.map((podcast, index) => {
              return (
                <PodcastCard podcast={podcast} index={index}></PodcastCard>
              )
            })}
        </div>
    )
 }
}

    

export default Podcasts;