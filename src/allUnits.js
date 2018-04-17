import React, { Component } from 'react';
import FetchUnits from './fetchUnits.js'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class AllUnits extends Component {
  render() {
    return (
      <div>
        <h1>
          All Units
        </h1>
          <BootstrapTable >
            <TableHeaderColumn dataField='unit_number'>Unit Number</TableHeaderColumn>
            <TableHeaderColumn dataField='unit_type'>Unit Type</TableHeaderColumn>
            <TableHeaderColumn dataField='rent_due'>Rent Balance</TableHeaderColumn>
            <TableHeaderColumn dataField='rent_due_date'>Rent Due Date</TableHeaderColumn>
            <TableHeaderColumn dataField='occupants'>Occupants</TableHeaderColumn>
            <TableHeaderColumn> Edit Unit</TableHeaderColumn>
          </BootstrapTable>
      </div>
    )
  }
}
