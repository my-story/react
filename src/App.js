import React, {Component} from 'react';
// import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import UserService from './services/UserServicesJavier';


class App extends Component {


  state={
    loggedInUser: null,
    error:null,
    details:''
  }

  service = new UserService();

  componentDidMount(props){
    console.log('in app')
    this.fetchUser()
  }

 


    fetchUser(){
      // if( this.state.loggedInUser === null ){
        this.service.loggedin()
        .then(theActualUserFromDB =>{
          console.log(theActualUserFromDB)
          this.setState({
            loggedInUser:  theActualUserFromDB
          }) 
          
        })
        .catch( err =>{
          console.log('catch getting hit')
          this.setState({
            loggedInUser:  false
          }) 
        })
      // }
    }



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



    showUser = () =>{
      if(this.state.error){
        return (
          <div>sry, {this.state.details.message}</div>
        )
      }
      if(this.state.loggedInUser){
        return(
          <div>Welcome, {this.state.loggedInUser.username}</div>
        )
      }
    }


    logout = () =>{
      this.service.logout().then(()=>{
        this.setState({loggedInUser: null});
      })
    }


  render(){

    return (
        <div>
          <nav>
            <p>{this.showUser()}</p>
            <button onClick= {this.logout} >Logout</button>
          </nav>

        <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
        <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
      <Routes />
      </div>
    );
  } 
}

export default App;
