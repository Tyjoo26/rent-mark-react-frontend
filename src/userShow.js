import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {showUser} from './fetchUsers.js'

class UserShow extends Component {
  payRent = () => {

  }
  dataRows = () => {
    if(!this.props.user) return
    return (
    <tr>
      <th>{this.props.user.first_name}</th>
      <th>{this.props.user.last_name}</th>
      <th>{this.props.user.email}</th>
      <th>{this.props.user.unit_type}</th>
      <th>{this.props.user.unit_number}</th>
      <th>{this.props.user.rent_balance}</th>
      <th>{this.props.user.rent_due_date}</th>
      <th><Link to={`/users/${this.props.user.user_id}/edit`}>Edit Details</Link></th>
      <th>Pay Rent </th>
    </tr>
    )
  }

  render() {
    return(
      <div>
        <h1>
          Tenant Details
        </h1>
        <br />
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Unit Type</th>
              <th>Unit Number</th>
              <th>Rent Balance</th>
              <th>Rent Due Date</th>
              <th>Edit</th>
              <th>Pay Rent</th>
            </tr>
            {this.dataRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserShow
