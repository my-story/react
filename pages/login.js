import React, { Component } from 'react';
import Link from 'next/link';
import MediaQuery from 'react-responsive';
import * as toastr from 'toastr';
import AuthServices from '../services/AuthServices';
import Signup from './signup';

class Login extends Component {

  state = {
    username: '',
    password: '',
    loggedin: true,
    path: '',
    // signUp: false,
  };




  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    const user = {
      username: username,
      password: password
    };

    AuthServices.login(user)
      .then(response => {
        if (response.status === 200) {
          this.props.giveuser(response.data);
          this.setState({
            loggedin: true
          })
        }
      }).catch(error => {
        toastr.error("invalid username or password");
        console.log(error);
      })
  }
  signUp = () => {
    this.setState({loggedin: false})
  }
  savePath = () => {
    window.previousLocation = this.props.location;
    this.setState({ path: window.previousLocation });
  }

  componentDidMount = () => {
    this.savePath();
  }



  render() {

    // const isLaptopScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1220px)' })
    // const isTabletOrMobileDevice = useMediaQuery({
    //   query: '(max-device-width: 1224px)'
    // })

    if (!this.state.loggedin) {
      return (
        <div>
      <Signup></Signup>
        </div>
      )
    }
      return (
        <div>
        <MediaQuery maxDeviceWidth={490}>
        <div className="mobile-login-page">
        <div className="mobile-login-form">
          <div className="">
            <form className="login-form" onSubmit={this.handleFormSubmit}>
              <div className="p-login-header">
              <p className="p-login">Log in</p>             
              <p className="new-login">New to Rebound?</p>    
              <Link href="signup" as={`signup`}><p className="new-login signup">SIGN UP FOR FREE!</p></Link>
              </div>
              <div className="inputs-login">
                <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img>
                <input placeholder="Password" className="inputs-login-styling margin-input-login" name="password" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img>
              <button type="submit" className="login-button"><span className="login-font">Log in</span></button>
              </div>              
              <div className="remember-div">
                <div className="">
                <input type="checkbox"/><span>Remember Me</span>
                </div>
                <span id="forgot-password" to="recover-pass">Forgot Password?</span>
              </div>
            </form>
          </div>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={700}>
                <div className="login-form-parent">
                  <div className="login-rectangle">
                    <form className="login-form" onSubmit={this.handleFormSubmit}>
                      <p className="p-login">Log In</p>
                      <div className="inputs-login">
        
                        <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                        <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img>
                        <input placeholder="Password" className="inputs-login-styling margin-input-login" name="password" onChange={e => this.handleChange(e)} />
                        <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img>
                      </div>
                      <button type="submit" className="login-button"><span className="login-font">Log in</span></button>
                      <div className="forgot-pass-parent">
                        <div className="remember-me-container">
                        <input type="checkbox"/><span>Remember Me</span>
                        </div>
                        <span id="forgot-password" to="recover-pass">Forgot Password?</span>
                      </div>
                    </form>
                  </div>
                  <div className="orange-login-rectangle">
                    <div className="not-signup-container">
                      <p><b>Don't have an account yet?</b></p> 
                      <button className="sign-up-button" onClick={this.signUp}><b>Sign up</b></button>
                    </div>
                  </div>
                </div>
                </MediaQuery>
                </div>

      )
  }
}

export default Login;

