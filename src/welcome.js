import React, { Component } from 'react';
import banner from './aussie.jpg'
import LogInForm from './logInForm.js'

import './App.css';
// import Header from './header.js'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import tenantDashboard from './tenantDashboard.js'


class Welcome extends Component {




  render() {
    return (
      <div>
      <div
      className="hero-image"
      style={{backgroundImage: `url(${banner})`}}
      alt="banner">
        <p
        className="welcome">
        Resident Portal
        </p>
      </div>
      <section id="welcome-body">
        <div id="welcome-header">
          {`With our Resident Portal, we've made it easy and convenient for you to pay your rent and submit service requests online.`}
          <br />
          <br />
          {`Access your account!`}
        </div>
        <div className="welcome-content">
          <LogInForm/>
        </div>
      </section>
      </div>
    )
  }
}





export default Welcome;
