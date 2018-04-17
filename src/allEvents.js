import React, { Component } from 'react';
import FetchEvents from './fetchEvents.js'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class AllEvents extends Component {
  render() {
    return (
      <div>
        <h1>
          All Events
        </h1>
          <BootstrapTable >
            <TableHeaderColumn dataField='name'>Event Name</TableHeaderColumn>
            <TableHeaderColumn dataField='details'>Event Details</TableHeaderColumn>
            <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
            <TableHeaderColumn dataField='rent_due_date'>Rent Due Date</TableHeaderColumn>
          </BootstrapTable>
      </div>
    )
  }
}
