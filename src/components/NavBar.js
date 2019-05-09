import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
// import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
import Logout from './auth/logout';

class NavBar extends Component {
    state = {

    }

    adjustState = () =>{
        this.setState({
            logged: this.props.islogged,
            user: this.props.user
        })
    }
    componentDidMount = ()=> {
        this.adjustState()
    }

    render(){
        console.log(this.props)
        if(this.props.islogged){
            return(
                <div>
                    <div className="nav-bar">
                        <span>
                        <Logout {...this.props}>Logout</Logout>
                        </span>
                        <Link to="/">
                        <span>
                        <p>Home</p>
                        </span>
                        </Link>
                        <span>
                        <p>Products</p>
                        </span>
                        <span>
                        <p>About us</p>
                        </span>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                <div className="nav-bar">
                    <Link to="/login">
                        <span>
                        <p>Log in</p>
                        </span>
                    </Link>
                    <Link to="/">
                        <span>
                        <p>Home</p>
                        </span>
                        </Link>
                        <span>
                        <p>Products</p>
                        </span>
                        <span>
                        <p>About us</p>
                        </span>
                    </div>
                    
    
                </div>
            )

        }

    }
}

export default NavBar;