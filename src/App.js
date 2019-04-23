import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Routes from './Routes';

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <Link to="/login" >Login </Link>
    </div>
    <Routes />
    </div>
  );
}

export default App;
