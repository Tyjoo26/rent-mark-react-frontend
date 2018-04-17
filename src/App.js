import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Welcome from './welcome.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllUsers from './allUsers.js'
import AllEvents from './allEvents.js'
import AllUnits from './allUnits.js'
import User from './user.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div className="App">
        <Header
        isLoggedIn={this.state.isLoggedIn}/>
        <Welcome isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default App;
