import React, {Component} from 'react';
import Link from 'next/link';
import {Icon} from 'antd';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu'
import Logout from './auth/Logout';
// import InfluencerServices from '../services/InfluencerServices';
import {QtyConsumer} from './contexts/QtyContext';
import UserContext from './contexts/UserContext';
// import SearchBar from './influencer/SearchInfluencer';



class NavBar extends Component {
	state = {
		logged: "",
		user: "",
	}

	static contextType = UserContext;

	showSettings (event) {
		event.preventDefault();

	  }
	adjustState = () => {
		this.setState({
				logged: this.props.islogged,
				user: this.props.user
		})
	}
	componentDidMount = () => {
		this.adjustState();
		this.setState({userLogged:JSON.stringify(this.context.user)})
	}



	render() {
		// console.log("user jeje " + this.state.userLogged)
		
		if (this.props.islogged) {
			return(
				<div>
					<MediaQuery maxDeviceWidth={490}>
					<div  className="navbar-burder-div">
					<Menu>
						<a id="home" className="menu-item" href="/">Home</a>
						<a id="about" className="menu-item" href="/about">About</a>
						<a id="contact" className="menu-item" href="/contact">Contact</a>
						<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
					</Menu>
					</div>
					</MediaQuery>

				<MediaQuery minDeviceWidth={700}>		
				<div className="nav-bar">
					<div className="navbar-section">
						{/* <img id="logo-mystory" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="logo mystory" /> */}
						<p id="mystory-name">My Story</p>
						<Link href="/">
							<span>
								<p>SAGES</p>
							</span>
						</Link>
						<Link href="/products">
							<span>
								<p>PRODUCTS</p>
							</span>
						</Link>
						<span>
							<p>ABOUT</p>
						</span>
						<Link href="/contact-us">
						<span>
							<p>CONTACT</p>
						</span>
						</Link>
					{/* <div className="icons-account-cart"> */}
						{/* <img id="account-glyph" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565379958/ucer.svg" alt="account profile" /> */}
				{/* Search Bar Functionality */}
						{/* <div> */}
						{/* <SearchBar /> */}
						
						{/* </div> */}

					 	<span >
							 <Logout {...this.props}>Logout</Logout>
							 
				 		</span>
					<Link href="/cart">
						<span>
						<img id="shopping-cart" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer>
						</span>
					</Link>
					{/* </div> */}
					</div>

				</div>
				</MediaQuery>
			</div>
			);
			
		} else {
				return(
					<div>
					<MediaQuery maxDeviceWidth={490}>
					<div className="navbar-burder-div">
					<Menu>
						<a id="mobile-nav" className="menu-item" href="/">Sages</a>
						<a id="mobile-nav" className="menu-item" href="/products">Store</a>
						<a id="mobile-nav" className="menu-item" href="/about">About Us</a>
						<a id="mobile-nav" className="menu-item" href="/contact-us">Contact</a>
						<a id="mobile-nav" className="menu-item" href="/login">Log in</a>
					</Menu>
					</div>
					</MediaQuery>
					<MediaQuery minDeviceWidth={700}>
						<div className="nav-bar">
							<div className="navbar-section">
								{/* <img id="logo-mystory" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="logo mystory" /> */}
								<p id="mystory-name" >My Story</p>
								<Link href="/">
									<span>
										<p>SAGES</p>
									</span>
								</Link>
								<Link href="/products">
									<span>
										<p>PRODUCTS</p>
									</span>
								</Link>
								<Link href="/about">
								<span>
									<p>ABOUT</p>
								</span>
								</Link>
								<Link href="/contact-us">
								<span>
									<p>CONTACT</p>
								</span>
								</Link>
						
							<Link href="/login">
								<span>
								<p>LOG IN</p>
								</span>
							</Link>
							<Link href="/cart">
								<span>
									<img id="shopping-cart" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer>
								</span>
							</Link>
						
							</div>						
						</div>
						</MediaQuery>
					</div>
				);
		}
	}
}

export default NavBar;