import React, {Component} from 'react';
// import "../App.css";
import Axios from 'axios';
import UserService from '../../services/UserServices';
import {Link} from 'react-router-dom';

import * as toastr from 'toastr';


class Signup extends Component {
      state = { usernameInput: '', passwordInput: ''};
      service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    //use toasters for messages


    handleFormSubmit = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3002/api/signup', {username: this.state.usernameInput, password: this.state.passwordInput}, {withCredentials: true})
        
        // this.service.signup(this.state.usernameInput, this.state.passwordInput)
        .then((userFromDB)=>{
            // if (userFromDB.status === 403){
            //     console.log('this is the error you are looking for', userFromDB.status)
            //     toastr.error('Email invalid or password too short.') 
            //     window.alert(userFromDB.data.errors)
            // }
            console.log('------------------------', userFromDB)
            this.props.logTheUserIntoAppComponent(userFromDB)
            // here we wait for the API to give us the user object back after logging in
            // then we pass that user object back to app component
            this.setState({usernameInput: '', passwordInput: ''})


            // redirect 
            this.props.history.push('/');


        })
        .catch((err)=>{
            if (err = 403){
                console.log('this is the error you are looking for', err)
                toastr.error('Email invalid or password too short.') 
                // window.alert(err)
            } else{
                console.log('sorry something went wrong', err)
            }

        })

    }
  
    render(){
      return(
        <div className="login-form-parent">
            <form className="login-form" onSubmit={this.handleFormSubmit}>

            <div>

     
                <input  placeholder="USERNAME"type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
                
                <input placeholder="PASSWORD" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)} />
                
            </div>
                <button type="submit" className="button-id">Submit</button>
            <p>Already have account? 
                <Link to={"/login"}> Login</Link>
            </p>
            </form>


    </div>
      )
    }
  }
  
  export default Signup;