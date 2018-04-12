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
        <div
        className="hero-image"
        style={{backgroundImage: `url(${banner})`}}
        alt="banner" />
          <p
          className="welcome">
          Resident Portal
          </p>
        <div className="welcome-content">
          <p className="welcome">
            {`Log in, tell us what you need and we'll get it done.`}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
