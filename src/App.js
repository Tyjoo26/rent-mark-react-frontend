import React, { Component } from 'react';
import logo from './rent_mark.png'
import banner from './aussie.jpg'
import './App.css';
import Header from './header.js'
import {FormControl, FormGroup, ControlLabel, Form, Col, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
            {`Access Your Account`}
          </div>
          <div className="welcome-content">
            <Form horizontal>
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
    );
  }
}

export default App;
