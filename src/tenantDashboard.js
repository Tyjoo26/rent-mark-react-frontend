import React, { Component } from 'react';
import Header from "./header.js"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TenantDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
        className= "tenant-dashboard">
          <h1>
            Account Management
          </h1>
            <BootstrapTable >
              <TableHeaderColumn dataField='first_name'>First name</TableHeaderColumn>
              <TableHeaderColumn dataField='last_name'>Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField='unit_number'>Unit Number</TableHeaderColumn>
              <TableHeaderColumn dataField='unit_type'>Unit Type</TableHeaderColumn>
              <TableHeaderColumn dataField='rent_due'>Rent</TableHeaderColumn>
              <TableHeaderColumn dataField='rent_due_date'>Rent Due Date</TableHeaderColumn>
              <TableHeaderColumn>Rent Status</TableHeaderColumn>
            </BootstrapTable>
          <button>
            Edit Account Details
          </button>
            <br />
          <button>
            View Available Events
          </button>
        </div>
      </div>
    )
  }

}
