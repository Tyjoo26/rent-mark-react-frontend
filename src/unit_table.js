import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class UnitsTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ units } striped hover condensed>
          <TableHeaderColumn dataField='unit_number' isKey>Unit Number</TableHeaderColumn>
          <TableHeaderColumn dataField='unit_type'>Unit Type</TableHeaderColumn>
          <TableHeaderColumn dataField='rent_due'>Balance Due</TableHeaderColumn>
          <TableHeaderColumn dataField='rent_due_date'>Rent Due Date</TableHeaderColumn>
          <TableHeaderColumn>Unit Occupants</TableHeaderColumn>
          <TableHeaderColumn>Edit Unit</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
