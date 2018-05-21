import React, { Component } from 'react';
import {getEvents } from './fetchEvents.js'
import {BrowserRouter as  Link} from 'react-router-dom'
// const [handleResponse, errorLog] = require('./response-handlers')

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    getEvents()
      .then((events) => this.setState({events:events}))
      .catch((error) => console.error( { error }))
  }

  iterateEvents = () => {
    return this.state.events.map( event => {
      return <tr key = {event.key}>
        <th>{event.event_name} </th>
        <th>{event.event_details} </th>
        <th>{event.event_date} </th>
        <th> <Link to={`/events/${event.id}`}> Access Details</Link> </th>
        <th> <Link to={`/events/${event.id}/edit`}> Edit Details</Link> </th>
        <th>
          <button>
            Delete Event
          </button>
        </th>
        </tr>
    })
  }
  render() {
    return (
      <div>
        <h1>
          All Events
        </h1>
          <table>
            <tbody>
            <tr>
              <th> Event Name </th>
              <th> Event Details </th>
              <th> Event Date </th>
              <th> Modify Details</th>
              <th> </th>
              <th> </th>
            </tr>
          </tbody>
          <tbody>
          {this.iterateEvents()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AllEvents
