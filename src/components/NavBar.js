import React, {Component} from 'react';
import Link from 'next/link';
import {Icon} from 'antd';
import Logout from './auth/Logout';
import {QtyConsumer} from "./contexts/QtyContext";


class NavBar extends Component {
	state = {

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

	render() {
		if (this.props.islogged) {
			return(
				<div>
					<div className="nav-bar">
						<Link href="/">
						{/* <span className="links-nav"> */}
							<p>Home</p>
						{/* </span> */}
						</Link>
						<Link href="/products">
						{/* <span className="links-nav"> */}
							<p>Products</p>
						{/* </span> */}
						</Link>
						{/* <span className="links-nav"> */}
							<p>About us</p>
						{/* </span> */}
						<Link href="/profile">
						{/* <span> */}
							<p>Profile</p>
						{/* </span> */}
						</Link>
						{/* <span className="links-nav"> */}
							<Logout {...this.props}>Logout</Logout>
						{/* </span> */}
						<Link href="/cart">
						{/* <span> */}
							<p><Icon type="shopping-cart" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer></p>
						{/* </span> */}
						</Link>
					</div>
				</div>
			);
			
		} else {
				return(
					<div>
						<div className="nav-bar">
							<div className="navbar-section">
								<img id="logo-mystory" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="logo mystory" />
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
								<Link href="/profile">
									{/* <span>
										<p>PROFILE</p>
									</span> */}
									<img id="account-glyph" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565203081/icons8-user-30.png" alt="account profile" />
								</Link>
							<Link href="/login">
								<span>
								<p>LOG IN</p>
								</span>
							</Link>
							<Link href="/cart">
								<span>
									<p><Icon type="shopping-cart" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer></p>
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