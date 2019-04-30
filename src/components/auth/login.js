import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = { 
      username: '', 
      password: '',
      loggedin: false
    };
//   service = new UserService();


handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state);
}

//use toasters for messages


handleFormSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3002/api/login',{
        username: this.state.username,
        password: this.state.password
    })
    .then(response => {
        console.log(response)
        if(response.status === 200){
            console.log("sucessful loggin");
            this.setState({
                loggedin: true
            })
        } 

    }).catch(error => {
        console.log("loggin error")
        console.log(error);
    })
}

render(){
if(!this.state.loggedin){
    return(
        <div className="login-form-parent">
            <form className="login-form" onSubmit={this.handleFormSubmit}>

            <div>

     
                <input  placeholder="USERNAME"type="text" name="username" onChange={ e => this.handleChange(e)}/>
                
                <input placeholder="PASSWORD" name="password" onChange={ e => this.handleChange(e)} />
                
            </div>
                <button type="submit" className="button-id">Submit</button>
            </form>


        </div>
      )
} else {
  return(<Redirect to="/"></Redirect>)
}
}
}

export default Login;

