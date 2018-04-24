import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {showUnit} from './fetchUnits.js'

class UnitShow extends Component {
  dataRows = () => {
    if(!this.props.unit) return
    return (
      <tr>
        <th>{this.props.unit.unit_number}</th>
        <th>{this.props.unit.unit_type}</th>
        <th>{this.props.unit.unit_rent_due}</th>
        <th>{this.props.unit.unit_rent_due_date}</th>
      </tr>
    )
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h1>
          Unit Details
        </h1>
          <br />
        <table>
          <tbody>
            <tr>
            <th>Unit Number</th>
            <th>Unit Type</th>
            <th>Unit Rent Balance</th>
            <th>Unit Rent Due Date</th>
            </tr>
            {this.dataRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UnitShow
