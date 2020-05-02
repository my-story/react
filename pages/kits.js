import React, { Component } from 'react'
import KitServices from '../services/KitServices';
import KitCard from '../components/survivalKit/KitCard';
import CategoryBubbleOne from '../components/category/CategoryBubbleOne';


class Kits extends Component {
    state = {
        kits: [],
        category: [
            "All","Sports", "Music", "Tech", "Clothes"
          ],
      };

    fetchKits = () => {
        KitServices.getAll()
          .then(kits => this.setState({
            kits: kits
          }))
    };

    searchBar = (e) => {
        if(e === "All"){
          this.fetchKits()
        } else {
          KitServices.searchKit(e)
          .then((res) => this.setState({ kits: res }))
          .catch((err) => console.log(err))
        }
      };

    componentDidMount(){
        this.fetchKits();
    };

    render () {
        const { category } = this.state;

        if (this.state.kits.length === 0 || this.state.kits === undefined){
            return ( 
                <div></div>
            )
        } else {
        return (
            <div className="kits-all-page">
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
                <div className="kits-all-section">
                {this.state.kits.map((i, index) => {
                    
                return (
                    <KitCard kit={i} key={index}/>
                )
                })}
                </div>
            </div>
        )
    }
}
}

export default Kits;

