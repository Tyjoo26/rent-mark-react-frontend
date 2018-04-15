import React, { Component } from 'react';
import Header from "./header.js"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class AdminDashboard extends Component{
  render() {
    return (
      <div>
       <Header />
        <div
        className='admin-dashboard'
          <h1>
           Admin Dashboard
          </h1>
            <div>
              <button>
                View All Units
              </button>
              <button>
                View All Events
              </button>
              <button>
                View All Users
              </button>
              <button>
                Edit Details
              </button>
            </div>
        </div>
      </div>
    )
  }
}
