import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';

class navBar extends Component {

    render(){
        return(
            <div className="nav-bar">
                <h3>{this.showUser}</h3>

            </div>
        )
    }
}

export default navBar;