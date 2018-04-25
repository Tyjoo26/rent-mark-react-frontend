import { Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {getEvent} from "./fetchEvents.js"
import EventShow from './eventShow.js'
import EditEvent from './edit-event.js'

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event: null
    }
  }

  componentDidMount() {
    getEvent(this.props.match.params.id)
      .then((event) => event[0])
      .then((event) => this.setState( { event } ))
      .catch((error)  => console.error( { error }))
  }

  render() {
    console.log(this.state.event)
    return(
      <Switch>
        <Route exact path={`/events/${this.props.match.params.id}`}
        render={(routeProps) => <EventShow
        event={this.state.event}/>}/>
        <Route exact path={`/events/${this.props.match.params.id}/edit`}
        render={(routeProps) => <EditEvent
        event={this.state.event}/>}/>
      </Switch>
    )
  }
}

export default Event
