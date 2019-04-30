
import React, {Component} from 'react';
// import "../App.css";
import axios from 'axios';
// import UserService from '../../services/UserServices';
import { Link, Redirect } from 'react-router-dom';
import * as toastr from 'toastr';


class Signup extends Component {
      state = { 
          username: '', 
          password: '',
          signedup: false
        };
    //   service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    //use toasters for messages


    handleFormSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3002/api',{
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
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



