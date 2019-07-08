import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import * as toastr from 'toastr';
import AuthServices from '../../services/AuthServices';

class Login extends Component {
  state = { 
      username: '', 
      password: '',
      loggedin: false,
      path:''
    };



	handleChange = (e) => {
  	this.setState({[e.target.name]: e.target.value});
}

handleFormSubmit = (event) => {
		event.preventDefault();
		const {username, password} = this.state;

		const user = {
			username: username,
			password: password
		};
	
		AuthServices.login(user)
			.then(response => {
				if(response.status === 200) {
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
    this.setState({path:window.previousLocation});
}

componentDidMount = () => {
    this.savePath();
}

render() {
if(!this.state.loggedin) {
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

