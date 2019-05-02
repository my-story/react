import React, {Component} from 'react';
// import './App.css';
// import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
import AuthServices from './services/AuthServices'
// import Login from './components/auth/login';
import Signup from './components/auth/signup';


class App extends Component {


  state={
    loggedInUser: {},
    error:null,
    details:''
  }
 

  checkLogged=()=>{
    AuthServices.loggedin()
    .then(user => this.setState({
      // ...this.state,
      loggedInUser:{user}
    }))
    .catch((e)=>console.log(e))
  }
  componentDidMount = ()=> {
    this.checkLogged()
  }

  render(){
    const { loggedInUser } = this.state
    console.log("logged user" , loggedInUser)
    return (
      <div>
      <Routes />
      </div>
    );
  } 
}

export default App;
