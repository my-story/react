import React, { Component } from 'react'
// import authService from '../../services/AuthServices';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/i;

const validators = {
  email: (value) => {
    let error;
    if (!value || value === '') {
      error = 'Email is required';
    } else if (!emailPattern.test(value)) {
      error = 'Invalid email format'; 
    }
    return error;
  },
  password: (value) => {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (!value.length >= 8) {
      error = 'Password must contains at least 8 characters';
    }
    return error;
  }
}
 
class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {},
    touch: {},
    authenticated: false
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.hasErrors());
    if (!this.hasErrors()) {
      // authService.login(this.state.user)
      axios.post('http://localhost:3002/api/login', {username: this.state.username, password: this.state.password}, {withCredentials: true})
      .then(
        (user) => {
          console.log(user)
          this.setState({ authenticated: true })
          this.props.history.push('/');
        },
        (error) => {
          const { message, errors } = error.response.data;
          this.setState({
            errors: {
              ...this.state.errors,
              ...errors,
              password: message
            }
          })
        }
      )
    }
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name] && validators[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  hasErrors = () => Object.keys(this.state.user)
    .some(attr => validators[attr] && validators[attr](this.state.user[attr]))
  
  render() {
    const { touch, errors, user } = this.state;
    // if (this.state.authenticated) {
    //   return (<Redirect to="/product" />);
    // } else {
      return (
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-3">
            <form onSubmit={this.onSubmit}>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
                </div>
                <input type="text" className={`form-control ${touch.email && errors.email && 'is-invalid'}`} name="email" placeholder="Email" onChange={this.handleChange} value={user.email} onBlur={this.handleBlur} />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
              
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text" style={{width: '42px'}}><i className="fa fa-lock"></i></div>
                </div>
                <input type="password" className={`form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur}/>
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <div className="from-actions">
                <button type="submit" className="btn btn-primary btn-block" disabled={this.hasErrors()}>Login</button>
              </div>
            </form>
            <hr />
            <p className="text-center">Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      );
    }
  }
// }

export default Login;
import React, {Component} from 'react';
// import "../App.css";
import UserService from '../../services/UserServices';
import Axios from 'axios';

import * as toastr from 'toastr';


class Login extends Component {
      state = { usernameInput: '', passwordInput: '' };
      userService = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3002/api/login', {username: this.state.userNameInput, password: this.state.passWordInput}, {withCredentials: true})
        // this.userService.login(this.state.usernameInput, this.state.passwordInput)
        .then((userFromDB)=>{
            console.log(userFromDB);
            // here we wait for the API to give us the user object back after logging in
            this.setState({usernameInput: '', passwordInput: ''})
            
            // then we pass that user object back to app component
            this.props.logTheUserIntoAppComponent(userFromDB)
            // here, we are getting the user object from the DB
            // and we're setting AppComponent.state.loggedinuser equal to it


            this.props.history.push('/');
            // then we redirect
            


        })
        .catch((err)=>{
          if (err = 402){
            toastr.error('Something went wrong authenticating the user.')
          }
            console.log('sorry something went wrong', err)
            // toastr.error('something went wrong authenticating the user.')

        })

    }
  
    render(){
      return(
        <div className="login-form-parent">
                    <div>

                        <form onSubmit={this.handleFormSubmit} className="login-form">

                        
                {/* <label>Username:</label> */}

                <div>
                <input placeholder="USERNAME"type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
                    
                

                {/* <label>Password:</label> */}
                <input placeholder="PASSWORD" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)} />
                </div>


            
                <button className="button-id" type="submit" value="Login">Continue</button>
                
            
                        </form>
             </div>

    </div>






      )
    }
  }
  
  export default Login;





