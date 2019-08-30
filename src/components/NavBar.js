import React, {Component} from 'react';
import Link from 'next/link';
import {Icon} from 'antd';
import Logout from './auth/Logout';
import InfluencerServices from '../services/InfluencerServices';
import {QtyConsumer} from './contexts/QtyContext';
import SearchBar from './influencer/SearchInfluencer';
import { thisExpression } from '@babel/types';



class NavBar extends Component {
	state = {
		logged: "",
		user: "",
		search_expert: "",
	}

	adjustState = () => {
		this.setState({
				logged: this.props.islogged,
				user: this.props.user
		})
	}
	componentDidMount = () => {
		this.adjustState();
	}
	getFilter = (e) => {
		InfluencerServices.getFilter(e.target.value)
		  .then((res) => this.setState({ search_expert: res }))
		  .catch((err) => console.log(err))
	  }

	render() {
		console.log(this.state)
		if (this.props.islogged) {
			return(
				<div>
				<div className="nav-bar">
					<div className="navbar-section">
						{/* <img id="logo-mystory" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="logo mystory" /> */}
						<p id="mystory-name">My Story</p>
						<Link href="/">
							<span>
								<p>EXPERTS</p>
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
						<span>
							<p>CONTACT</p>
						</span>
					</div>
					<div className="icons-account-cart">
						{/* <img id="account-glyph" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565379958/ucer.svg" alt="account profile" /> */}
						<SearchBar getFilter={this.getFilter} />
					 	<span className="links-nav">
				 			<Logout {...this.props}>Logout</Logout>
				 		</span>
					<Link href="/cart">
						<span>
						<img id="shopping-cart" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566514790/cart_icon_1.svg" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer>
						</span>
					</Link>
					</div>
				</div>
			</div>
			);
			
		} else {
				return(
					<div>
						<div className="nav-bar">
							<div className="navbar-section">
								{/* <img id="logo-mystory" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="logo mystory" /> */}
								<p id="mystory-name" >My Story</p>
								<Link href="/">
									<span>
										<p>EXPERTS</p>
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
								<span>
									<p>CONTACT</p>
								</span>
							</div>
							<div className="icons-account-cart">
								{/* <div className="search-bar-input"> */}
								{/* <img id="search-bar-glyph" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566509579/search.svg" alt="account profile" /> */}
								{/* </div> */}
								<SearchBar getFilter={this.getFilter} />
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
					</div>
				);
		}
	}
}

export default NavBar;