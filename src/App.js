import React, { Component } from 'react';
import logo from './rent_mark.png'
import banner from './aussie.jpg'
import './App.css';
import Header from './header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img
        className="hero-image"
        src={banner}
        alt="banner" />
        <div className="welcome-content">
          <p
          className="welcome">
          Resident Portal
          </p>
        </div>
      </div>
    );
  }
}

export default App;
