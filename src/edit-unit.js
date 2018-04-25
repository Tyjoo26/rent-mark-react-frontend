import React, { Component } from 'react';
import {patchUnit} from './fetchUnits.js'
import {FormControl, FormGroup, ControlLabel, Form, Col, Button} from 'react-bootstrap';

class EditUnit extends Component {
  constructor(props) {
    super();
    console.log("in edit", props)
    this.state = this.props ? this.props.unit : {}
  }

  patch = (e) => {
    e.preventDefault;
    console.log(e)
  }

  render() {
    console.log("state in edit unit", this.state)
    return(
      <div>
        <h1>
          Edit Unit Details
        </h1>
        <div className="form-format">
          <Form horizontal onSubmit={this.patch}>
            <FormGroup controlId="formHorizontalUnitNumber">
              <Col componentClass={ControlLabel} sm={2}>
                Unit Number
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.unit_number}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalUnitType">
              <Col componentClass={ControlLabel} sm={2}>
                Unit Type
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.unit_type}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalRentBalance">
              <Col componentClass={ControlLabel} sm={2}>
                Rent Balance
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.unit_rent_due}`} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalUnitRentDue">
              <Col componentClass={ControlLabel} sm={2}>
                Rent Due Date
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder={`${this.state.unit_rentunit_rent_due_date}`} />
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

export default EditUnit
