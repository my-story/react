import React, {Component} from 'react';
import Link from 'next/link';
import {Icon} from 'antd';	
import MediaQuery from 'react-responsive';
import {ButtonToolbar, Dropdown,DropdownButton, SplitButton} from 'react-bootstrap';
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
		userLogged: "",
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
		this.setState({userLogged:this.context.user})
	}



	render() {
		const {userLogged} = this.state;
		
	if (this.context.user.length !== 0) {
		// if (userLogged.length > 0) {
			return(
				<div>
					<MediaQuery maxDeviceWidth={490}>
					<div  className="navbar-burder-div">
					<Menu>
						<div clasName="menu-profile-div">
							<img className="menu-profile-image" src="https://cdn.shopify.com/s/files/1/1425/8892/products/SID400205--Batman-LS-Bust.jpg?v=1571268366" />
							<p id="menu-profile-name">User Lastname</p>
						</div>
						<a id="home" className="menu-item" href="/">Home</a>
						<a id="about" className="menu-item" href="/about">About</a>
						<a id="about" className="menu-item" href="/podcasts">Podcasts</a>
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
						<Link href="/podcasts">
						<span>
							<p>PODCASTS</p>
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
					<div className="dropdown-account-nav">
						<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							{userLogged.firstName}
							<img id="profile-picture" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582837688/Pngtree_silence_silent_alien_distortion_3922389.png" alt="Sage" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="/profile/dashboard">Profile</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">
							<Logout {...this.props} >Logout</Logout>
							</Dropdown.Item>
						</Dropdown.Menu>
						</Dropdown>
					</div>
					<Link href="/cart">
						<div className="cart-div"> 
						<img id="shopping-cart" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg" />
						<QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer>
						</div>
					</Link>
					{/* </div> */}
					</div>

				</div>
				</MediaQuery>
			</div>
			);
	}	else {
		return(
			<div>
			<MediaQuery maxDeviceWidth={490}>
			<div className="navbar-burder-div">
			<Menu>
				<a id="mobile-nav" className="menu-item" href="/">Sages</a>
				<a id="mobile-nav" className="menu-item" href="/podcasts">Podcasts</a>
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
						<Link href="/podcasts">
							<span>
								<p>PODCASTS</p>
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
						<span id="login-nav">
						<p >LOG IN</p>
						</span>
					</Link>
					<Link href="/cart">
						<div className="cart-div">
							<img id="shopping-cart" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer>
						</div>
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