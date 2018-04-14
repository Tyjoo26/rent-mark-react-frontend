import React, { Component } from 'react';
import logo from './rent_mark.png'
import './App.css';
import Header from './header.js'
import Welcome from './welcome.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
      </div>
    );
  }
}

export default App;
