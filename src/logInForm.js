import React, { Component } from 'react';


class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: ''
                  }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    console.log(target)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="Email"
              type='text'
              value="Email"
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
              <input
              name="Password"
              type='text'
              value="Password"
              onChange={this.handleChange} />
          </label>
          </form>
      </div>
    )
  }
}

export default LogInForm;
