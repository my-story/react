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
        console.log(this.state.kits[0])
        if (this.state.kits == [] || this.state.kits == undefined){
            return ( 
                <div><p>loadingg...</p></div>
            )
        } else {
        return (
            <div>
                {this.state.kits.map((i, index) => {
                return (
                    <KitCard kit={i} key={index}/>
                )
                })}
            </div>
        )
    }
}
}

export default Kits;

