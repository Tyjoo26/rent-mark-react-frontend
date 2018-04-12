import React, { Component } from 'react';
import logo from './rent_mark.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img
        src={logo}
        alt="logo"/>
        <div className="contact-us-header">
          <button>
            Contact Us
          </button>
        </div>
        <div className="v-left">
          <button>
            Log In
          </button>
        </div>
      </div>
    )
  }
}

export default Header;
