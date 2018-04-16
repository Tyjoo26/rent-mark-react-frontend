import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Welcome from './welcome.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import FetchUser from './fetchUsers.js'
import FetchUnits from './fetchUnits.js'
import FetchEvents from './fetchEvents.js'

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
