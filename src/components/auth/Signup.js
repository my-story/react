
import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import validator from 'email-validator';
import passwordValidator from 'password-validator';
import * as toastr from 'toastr';
import AuthServices from '../../services/AuthServices';

class Signup extends Component {
    state = { 
        username: '', 
        password: '',
        signedup: false
    };
    
  
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
            const {username, password} = this.state;

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
  
    render(){
    if (!this.state.signedup) {
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



