import { Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';
import {ShowUnit} from './fetchUnits.js'
import UnitShow from './unitShow.js'
import EditUnit from "./edit-unit.js"

class Unit extends Component {
  constructor() {
    super();
    this.state = {
      unit: null
    }
  }

  componentDidMount() {
    ShowUnit(this.props.match.params.unit_id)
      .then((unit) => unit[0])
      .then((unit) => this.setState({ unit }))
      .catch((error) => console.error( { error }))
  }

  render() {
    console.log(this.state)
    return(
      <Switch>
        <Route exact path={`/units/${this.props.match.params.unit_id}`}
        render={(routeProps) => <UnitShow
        unit={this.state.unit}/>}/>
        <Route exact path={`/units/${this.props.match.params.unit_id}/edit`}
        render={(routeProps) => <EditUnit
        unit={this.state.unit}/>}/>
      </Switch>
    )
  }
}
export default Unit
