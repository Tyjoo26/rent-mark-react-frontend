import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Welcome from './welcome.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllUsers from './allUsers.js'
import AllEvents from './allEvents.js'
import AllUnits from './allUnits.js'
import User from './user.js'
import EditUser from './edit-user.js'









class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header
          isLoggedIn={this.state.isLoggedIn}/>
          <main>
            <Switch>
              <Route exact path="/users" component={ AllUsers }/>
              <Route path="/users/:user_id" component={User}/>
              // <Route path="/users/:user_id/edit" component={EditUser}/>
              <Route path="/" component={Welcome}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
