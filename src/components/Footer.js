import React, {Component} from "react";

class Footer extends Component{
  render(){
		return(
			<footer className="footer-container">
				<div className="logo-div">
					<div className="logo-copywrite">
						<p>My Story</p>
						<p>Copyright @ 2019 My Story</p>
					</div>
					<div className="nav-footer">
						<p>Experts</p>
						<p>Products</p>
						<p>About</p>
						<p>Contact</p>
					</div>
				</div>
				<div className="important-info">
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Support</p>
					<p>Contact</p>
					<p id="donate-footer">Donate</p>
				</div>	
			</footer>
			)
    }
}

export default Footer