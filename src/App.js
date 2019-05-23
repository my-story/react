import React, {Component} from 'react';
// import './App.css';
// import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
import axios from "axios";
import AuthServices from './services/AuthServices'
import NavBar from './components/NavBar';
// import Login from './components/auth/login';
// import Signup from './components/auth/signup';
import Cookies from 'universal-cookie';

class App extends Component {


  state = {
    loggedInUser: "",
    islogged: "",
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

  checkLogged() {
    axios
    .get("http://localhost:3002/api/private", { withCredentials: true })
    .then(res => {
      console.log(res);
      this.setState({ islogged: true , loggedInUser : res.data});
    })
    .catch(e => {
      this.setState({ islogged: false });
      // this.render();
    });
  };

  bye = () =>{
    if (this.state.islogged){
      this.setState({
        loggedInUser: {},
        islogged: false
      })
    } else {
      console.log("already logged out")
    }
    // this.checkLogged()
  }

  componentDidMount = ()=>{
    this.checkLogged()
  }


  render(){
    console.log(this.state.islogged)
    if(this.state.islogged === ""){
      return(
        <div>loading...</div>
      )
    } else {
      return (
        <div>
        <NavBar islogged={this.state.islogged} checklogged={this.checkLogged} logout={this.bye} user={this.state.loggedInUser}></NavBar>
        <Routes giveuser={this.getUser} signout={this.bye} checklogged={this.checkLogged} user={this.state.loggedInUser}/>
        </div>
      );
    }
  } 
}

export default App;
