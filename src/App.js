import React, {Component} from 'react';
// import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

class App extends Component {
  logInTheUser = (userToLogIn) => {
    if(userToLogIn.username){
      this.setState({loggedInUser: userToLogIn, error: false})
    } else {
      this.setState({
        error:true,
        details:userToLogIn
      })
    }
  }
  render(){

    return (
        <div>

        <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
        <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
      <Routes />
      </div>
    );
  } 
}

export default App;
