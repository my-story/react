import React, {Component} from 'react';
// import './App.css';
// import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
import AuthServices from './services/AuthServices'
// import Login from './components/auth/login';
// import Signup from './components/auth/signup';


class App extends Component {


  state = {
    loggedInUser: {},
    islogged: false,
    error:null,
    details:''
  }

  getUser = (user) => {
    this.setState({
      loggedInUser: user,
      islogged: true,
    });

    console.log("this is the app state:" , this.state.loggedInUser);
  }
 
  checkLogged = () => {
    return this.state.islogged;
  }

  logout = () => {
    this.setState({
      islogged: false
    })
  }


  render(){


    return (
      <div>
      <Routes giveuser={this.getUser} logout={this.logout} checklogged={this.checkLogged} user={this.state.loggedInUser}/>
      </div>
    );
  } 
}

export default App;
