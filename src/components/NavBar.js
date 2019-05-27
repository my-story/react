import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import Logout from './auth/logout';
import Cookies from 'universal-cookie';

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
        this.adjustState();
    }

    getQty(){
        const cookies = new Cookies();
        const cookieArr = cookies.get("Products");
        var total = 0;
        if(cookieArr === undefined) {
            return
        }else{
            for(var i = 0; i < cookieArr.length; i++){
                total += cookieArr[i].qty;
            }
        }
        return total;
    }

    render(){
        // console.log(this.props)
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
                        <Link to="/products">
                        <span>
                        <p>Products</p>
                        </span>
                        </Link>
                        <span>
                        <p>About us</p>
                        </span>
                        <Link to="/cart">
                            <span>
                                <p><Icon type="shopping-cart" />{this.getQty()}</p>
                            </span>
                        </Link>
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
                        <Link to="/products">
                        <span>
                        <p>Products</p>
                        </span>
                        </Link>
                        <span>
                        <p>About us</p>
                        </span>
                        <Link to="/cart">
                            <span>
                                <p><Icon type="shopping-cart" />{this.getQty()}</p>
                            </span>
                        </Link>
                    </div>
                    
    
                </div>
            )

        }

    }
}

export default NavBar;