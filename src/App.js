import React, {Component} from 'react';
// import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Routes from './Routes';
// import Login from './components/auth/login';
import Signup from './components/auth/signup';


class App extends Component {


  state={
    loggedInUser: null,
    error:null,
    details:''
  }

  // service = new UserService();

  // componentDidMount(props){
  //   console.log('in app')
  //   this.fetchUser()
  // }


    logout = () =>{
      this.service.logout().then(()=>{
        this.setState({loggedInUser: null});
      })
    }


  render(){

    return (
        <div>
          <nav>
            {/* <p>{this.showUser()}</p> */}
            <button onClick= {this.logout} >Logout</button>
          </nav>

        {/* <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } /> */}
        <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
      <Routes />
      </div>
    );
  } 
}

export default App;
