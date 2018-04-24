import { Route, Link, Switch} from 'react-router-dom'
import React, { Component } from 'react';


class User extends Component {
  constuctor() {
    super();
    this.state = {
      unit: null
    }
  }

  componentDidMount() {
    showUser(this.props.match.params.unit_id)
      .then((unit) => unit[0])
      .then((unit) => this.setState({ unit }))
      .catch((error) => console.error( { error }))
  }

}
