import React, { Component } from 'react';
import banner from './aussie.jpg'
import './App.css';
import Header from './header.js'
import {FormControl, FormGroup, ControlLabel, Form, Col, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import tenantDashboard from './tenantDashboard.js'


class Welcome extends Component {


  logIn = (e) => {
    console.log(e.target.parentNode)
  }


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
          <Form horizontal onSubmit={this.logIn}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={8}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={8}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={7}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>;
        </div>
      </section>
      </div>
    )
  }
}





export default Welcome;
