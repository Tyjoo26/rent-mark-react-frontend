import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {getUsers} from './fetchUsers.js'
const [handleResponse, errorLog] = require('./response-handlers')


class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers()
      .then((users) => this.setState({users: users}))
      .catch((error) => console.error( {  error }))
  }

  iterateUsers = () => {
    return this.state.users.map(user => {
      return <tr key={user.key}>
                <th> {user.unit_number} </th>
                <th> {user.unit_type}</th>
                <th> {user.unit_rent_due}  </th>
                <th> {user.unit_rent_due_date} </th>
                <th> {user.user_first_name} </th>
                <th> {user.user_last_name} </th>
                <th> {user.user_email} </th>
                <th> <Link to={`/users/${user.user_id}`} >Access Details</Link></th>
            </tr>
    })
  }

  render() {
    return (
      <div>
        <h1>
          All Users
        </h1>
        <table>
        <tbody>
          <tr>
            <th>Unit Number </th>
            <th>Unit Type   </th>
            <th>Unit Rent   </th>
            <th>Rent Due Date </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Email </th>
            <th>User Details </th>
          </tr>
        </tbody>
          <tbody>
          {this.iterateUsers()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AllUsers
