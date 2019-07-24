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
						<span>
						<Logout {...this.props}>Logout</Logout>
						</span>
						<Link href="/">
						<span>
						<p>Home</p>
						</span>
						</Link>
						<Link href="/products">
						<span>
						<p>Products</p>
						</span>
						</Link>
						<span>
						<p>About us</p>
						</span>
						<Link href="/profile">
								<span>
									<p>Profile</p>
								</span>
						</Link>
						<Link href="/cart">
							<span>
									<p><Icon type="shopping-cart" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer></p>
							</span>
						</Link>
					</div>
				</div>
			);
			
		} else {
			
				return(
					<div>
						<div className="nav-bar">
							<Link href="/login">
								<span>
								<p>Log in</p>
								</span>
							</Link>
							<Link href="/">
								<span>
								<p>Home</p>
								</span>
							</Link>
							<Link href="/products">
								<span>
								<p>Products</p>
								</span>
							</Link>
							<Link href="/profile">
								<span>
									<p>Profile</p>
								</span>
							</Link>
								<span>
								<p>About us</p>
								</span>
							<Link href="/cart">
								<span>
									<p><Icon type="shopping-cart" /><QtyConsumer>{(obj) => obj.getQtyState}</QtyConsumer></p>
								</span>
							</Link>
						</div>
					</div>
				);
		}
	}
}

export default NavBar;