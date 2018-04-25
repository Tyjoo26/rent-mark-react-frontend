import React, { Component } from 'react';
import {patchEvent} from './fetchEvents.js'
import {FormControl, FormGroup, ControlLabel, Form, Col, Button} from 'react-bootstrap';


class EditEvent extends Component {
  constructor() {
    super();
    this.state = this.props.event
  }

  patch = (e) => {
    e.preventDefault;
    console.log(e)
  }

  render() {
    return(
      <div>
        <h1>
          Edit Event Details
        </h1>
        <div className="form-format">
          <Form horizontal onSubmit={this.patch}>
            <FormGroup controlId="formHorizontalUnitNumber">
              <Col componentClass={ControlLabel} sm={2}>
                First Name
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.event_name}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalUnitType">
              <Col componentClass={ControlLabel} sm={2}>
                Last Name
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.event_details}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalRentBalance">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.event_date}`} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={7}>
                <Button type="submit">Submit New Details</Button>
              </Col>
            </FormGroup>
          </Form>;
        </div>
      </div>
    )
  }
}
export default EditEvent
