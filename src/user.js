import { Route, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {showUser} from './fetchUsers.js'
import UserShow from './userShow.js'
import EditUser from './edit-user.js'


class User extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    showUser(this.props.match.params.user_id)
      .then((user) => user[0])
      .then((user) => this.setState({ user }))
      .catch((error) => console.error( { error }))
  }


  render(){
    return(
      <Switch>
        <Route exact path=""
        render={(routeProps) => <UserShow user={this.state.user}/>}/>
        <Route exact path="edit" render={(routeProps) => <EditUser user={this.state.user}/>}/>
      </Switch>
    )
  }
}

export default User
