
import React, {Component} from 'react';
// import "../App.css";
import axios from 'axios';
// import UserService from '../../services/UserServices';
import { Link, Redirect } from 'react-router-dom';
import * as toastr from 'toastr';
import validator from 'email-validator';
import passwordValidator from 'password-validator';

class Signup extends Component {
      state = { 
          username: '', 
          password: '',
          signedup: false
        };
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    //use toasters for messages


    handleFormSubmit = (event) =>{
        event.preventDefault(event);
        // Create a schema
        var schema = new passwordValidator();

        // Add properties to it
        schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits()                                 // Must have digits
        .has().not().spaces()      

        if(!validator.validate(this.state.username)){
            return toastr.error("Wrong Email Format");
        } else if (!schema.validate(this.state.password)){
            return toastr.error("Password must have Uppercase, Lowecase, Digits, and min length is 8");
        } else {
            axios.post('http://localhost:3002/api',{
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                if(response.data){
                    console.log("sucessful signup");
                    this.setState({
                        signedup: true
                    })
                } else {
                    console.log("signup error")
                }
            }).catch(error => {
                console.log("signup error")
                console.log(error);
            })
        }

    }
  
    render(){
    if(!this.state.signedup){
        return(
            <div className="login-form-parent">
                <form className="login-form" onSubmit={this.handleFormSubmit}>
    
                <div>
    
         
                    <input  placeholder="USERNAME"type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                    
                    <input placeholder="PASSWORD" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                    
                </div>
                    <button type="submit" className="button-id">Submit</button>
                <p>Already have account? 
                    <Link to={"/login"}> Login</Link>
                </p>
                </form>
    
    
            </div>
          )
    } else {
        return(<Redirect to="/login"></Redirect>)
    }
    }
  }
  
  export default Signup;



