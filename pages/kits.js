import React, { Component } from 'react'
import KitServices from '../services/KitServices';
import KitCard from '../components/survivalKit/KitCard';

class Kits extends Component {
    state = {
        kits: []
      };

    fetchKits = () => {
        KitServices.getAll()
          .then(kitsAll => this.setState({
            kits: kitsAll
          }))
    };

    componentDidMount(){
        this.fetchKits();
    };

    render () {
        
        if (this.state.kits === [] || this.state.kits === undefined){
            return ( 
                <div><p></p></div>
            )
        } else {
        return (
            <div className="kits-all-page">
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

