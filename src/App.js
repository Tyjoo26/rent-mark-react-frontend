import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Welcome from './welcome.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllUsers from './allUsers.js'
import AllEvents from './allEvents.js'
import AllUnits from './allUnits.js'
import User from './user.js'
import Unit from './unit.js'
import Event from './event.js'
import EditUser from './edit-user.js'
import EditUnit from './edit-unit.js'
import EditEvent from './edit-event.js'






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
              <Route exact path="/events" component={ AllEvents }/>
              <Route exact path="/units"
              component={ AllUnits}/>
              <Route path="/users/:user_id" component={User}/>
              <Route path="/units/:unit_id"
              component={Unit}/>
              <Route path="/units/:unit_id/edit"
              component={EditUnit}/>
              <Route path="/users/:user_id/edit" component={EditUser}/>
              <Route path="/" component={Welcome}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
