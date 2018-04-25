import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {getEvent} from './fetchUnits.js'


class EventShow extends Component {
  dataRows = () => {
    if(!this.props.event) return
    return (
      <tr>
        <th>{this.props.event.event_name}</th>
        <th>{this.props.event.event_details}</th>
        <th>{this.props.event.event_date}</th>
      </tr>
    )
  }

  render() {
    return(
      <div>
        <h1>
          Event Details
        </h1>
          <br />
        <table>
          <tbody>
            <tr>
              <th> Event Name </th>
              <th> Event Details </th>
              <th> Event Date </th>
            </tr>
          {this.dataRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EventShow
