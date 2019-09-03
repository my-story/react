import React, { Component } from 'react';
import Router from 'next/router'
import * as toastr from 'toastr';
import AuthServices from '../src/services/AuthServices';

class Login extends Component {
  state = {
    username: '',
    password: '',
    loggedin: false,
    path: ''
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

  savePath = () => {
    window.previousLocation = this.props.location;
    this.setState({ path: window.previousLocation });
  }

  componentDidMount = () => {
    this.savePath();
  }

  render() {
    if (!this.state.loggedin) {
      return (
        <div className="login-form-parent">
          <div className="login-rectangle">
            <form className="login-form" onSubmit={this.handleFormSubmit}>
              <p className="p-login">Login</p>
              <div className="inputs-login">
                <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img>
                <input placeholder="Password" className="inputs-login-styling margin-input-login" name="password" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img>
              </div>
              <button type="submit" className="login-button"><span className="login-font">Login</span></button>
              <div className="forgot-pass-parent">
                <input type="checkbox"/><span>Remember Me?</span>
                <span to="recover-pass">Forgot Password?</span>
              </div>
            </form>
          </div>
          <div className="orange-login-rectangle"></div>
        </div>
      )
    } else {
      Router.push('/')
      return null;
    }
  }
}

export default Login;

