
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import validator from 'email-validator';
import passwordValidator from 'password-validator';
import * as toastr from 'toastr';
import AuthServices from '../services/AuthServices';
import Login from './login';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    // signedup: false,
    password2:'',
    login: true,
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
      if(this.state.password !== this.state.password2){
        toastr.error("Passwords Dont Match")
      } else {
        return
    }
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
                <input className="inputs-login-styling margin-input-login" placeholder="First Name" type="text" name="firstName" />
                <input className="inputs-login-styling margin-input-login" placeholder="Last Name" type="text" name="lastName" />
              </div>
              <input className="inputs-login-styling margin-input-login" placeholder="Email" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              <input className="inputs-login-styling margin-input-login" placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              <input className="inputs-login-styling margin-input-login" placeholder="Confirm Password/not working" name="password2" onChange={e => this.handleChange(e)}/>

            </div>
            {/* <button type="submit" className="button-id">Submit</button> */}
            <button type="submit" className="sign-up-button form"><span className="login-font">Sign Up</span></button>
            <div className="terms-conditions-div">
              <p>By clicking this Sign up button you agree to our</p>
              <p>Terms and Conditions and Privacy Policy</p>
            </div>
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



