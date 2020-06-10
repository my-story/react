import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../public/images/reboundLogo01.png';
import ProfileGlyph from '../public/images/icons8-name-90.png';
import Logout from './auth/Logout';


const PhoneNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);



if (props.loggedIn === true) {
    return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
                <img id="logo-rebound-mobile" src={Logo} />										
            </NavbarBrand>
            <NavbarBrand href="/profile/dashboard" className="mr-auto">
                <img id="profile-glyph" src={ProfileGlyph} />																	
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/kits">Survival Kits</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/podcasts">Podcast</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About us</NavLink>
                </NavItem>
                <NavItem>
                  {/* <NavLink href="/logout">Logout</NavLink> */}
                  <Logout {...this.props} >Logout</Logout>
                </NavItem>
   
              </Nav>

            </Collapse>
          </Navbar>
        </div>
      );
} else {
    return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
                <img id="logo-rebound-mobile" src={Logo} />										
            </NavbarBrand>
            <NavbarBrand href="/login" className="mr-auto">
                <img id="profile-glyph" src={ProfileGlyph} />																	
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
              <NavItem>
                  <NavLink href="/kits">Survival Kits</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/podcasts">Podcast</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
}
  
}

export default PhoneNavBar;