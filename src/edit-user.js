import React, { Component } from 'react';
import {patchUser} from './fetchUsers.js'
import {FormControl, FormGroup, ControlLabel, Form, Col, Button} from 'react-bootstrap';

class EditUser extends Component{
  constructor(){
    super();
    this.state = this.props.user
  }

  patch = (e) => {
    e.preventDefault;
    console.log(e)
  }

  render() {
    return(
      <div>
        <h1>
          Edit Tenant Details
        </h1>
        <div className="form-format">
          <Form horizontal onSubmit={this.patch}>
            <FormGroup controlId="formHorizontalFirstName">
              <Col componentClass={ControlLabel} sm={2}>
                First Name
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.first_name}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalLastName">
              <Col componentClass={ControlLabel} sm={2}>
                Last Name
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.last_name}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.email}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={7}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>;
        </div>
      </div>
    )
  }
}
export default EditUser
