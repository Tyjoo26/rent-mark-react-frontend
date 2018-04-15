import React, { Component } from 'react';
import logo from './rent_mark.png';
import './App.css';
import renderIf from './renderIf.js';

class Header extends Component {
  constructor() {
    super();
  }
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
        </div>
      </div>
    )
  }
}

export default Header;
