import React, { Component } from 'react';
import {showUser} from './fetchUsers.js'


class User extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      unitType: null,
      unitNumber:null,
      rentBalance:null,
      rentDue:null
    }
  }

  componentDidMount() {
    showUser(this.props.match.params.user_id)
      .then((user) => user[0])
      .then((user) => this.setState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        unitType: user.unit_type,
        unitNumber: user.unit_number,
        rentBalance: user.rent_balance,
        rentDue: user.rent_due_date
      }))
      .catch((error) => console.error( { error }))
  }

  render() {
    console.log(this.state)
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
              <th>Pay Rent</th>
            </tr>
            <tr>
              <th>{this.state.firstName}</th>
              <th>{this.state.lastName}</th>
              <th>{this.state.email}</th>
              <th>{this.state.unitType}</th>
              <th>{this.state.unitNumber}</th>
              <th>{this.state.rentBalance}</th>
              <th>{this.state.rentDue}</th>
              <th> </th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default User
