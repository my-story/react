
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import validator from 'email-validator';
import passwordValidator from 'password-validator';
import * as toastr from 'toastr';
import AuthServices from '../src/services/AuthServices';
import Login from './login';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    // signedup: false,
    login: true,
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault(event);

    let schema = new passwordValidator();

    schema
      .is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits()
      .has().not().spaces()

    if (!validator.validate(this.state.username)) {

      return toastr.error("Wrong Email Format");

    } else if (!schema.validate(this.state.password)) {

      return toastr.error("Password must have Uppercase, Lowecase, Digits, and min length is 8");

    } else {
      const { username, password } = this.state;

      const user = {
        username: username,
        password: password
      };

      AuthServices.signup(user)
        .then(response => {
          if (response.data) {
            console.log("sucessful signup");
            this.setState({
              signedup: true
            })
          } else {
            console.log("signup error");
          }
        }).catch(error => {
          console.log(error);
        })
    }
  }
  login = () => {
    this.setState({login:false})
  }

  render() {
    if (this.state.login) {
      return (
        <div className="login-form-parent">
          <div className="signup-rectangle">
          <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <p className="s-login">Sign Up</p>
            <div className="signup-container">
              <div className="name-last-container">
                <input placeholder="First Name" type="text" name="firstName" />
                <input placeholder="Last Name" type="text" name="lastName" />
              </div>
              <input placeholder="Email" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              <input placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              <input placeholder="Confirm Password/not working" />

            </div>
            {/* <button type="submit" className="button-id">Submit</button> */}
            <button type="submit" className="login-button"><span className="login-font">Sign Up</span></button>
            {/* <p>Already have account?
              <Link href={"/login"}> Login</Link>
            </p> */}
          </form>
          </div>
          <div className="orange-signup-rectangle">
            <div className="not-signup-container">
              <p><b>Have an account?</b></p> 
              <button className="sign-up-button" onClick={this.login}><b>Log In</b></button>
            </div>
          </div>
        </div>

      )
    } else  {
      return (
        <div>
        <Login></Login>
        </div>
      )
    // } 
  //   if (this.state.signedup) {
  //     Router.push('/login');
  //     return null;

  // }
}
}
}

export default Signup;



