import React, { Component } from 'react';
import {getUnits} from './fetchUnits.js'

const [handleResponse, errorLog] = require('./response-handlers')


class Units extends Component {
  constructor() {
    super();
    this.state= {
      units: []
    }
  }

  componentDidMount() {
    getUnits()
      .then((units)=>  this.setState({units:units}))
      .catch((error) => console.error( { error }))
    }


  iterateUnits = () => {

    return this.state.units.map(unit => {
      return <tr key = {unit.key}>
        <th>{unit.unit_number} </th>
        <th>{unit.unit_type}</th>
        <th>{unit.unit_rent}</th>
        <th>{unit.unit_rent_due_date}</th>
        </tr>
    })
  }

  render() {
    return (
      <div>
        <h1>
          All Units
        </h1>
          <table>
          <tbody>
            <tr>
            <th> Unit Number </th>
            <th> Unit Type </th>
            <th> Unit Rent </th>
            <th> Unit Rent Due Date </th>
            </tr>
          </tbody>
            <tbody>
            {this.iterateUnits()}
            </tbody>
          </table>
      </div>
    )
  }
}
 export default Units
