import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      num: 32,
    };
  }

  handleInputChanged = (event) => {
    this.setState({
      num: event.target.value,
    });
  };

  render() {
    const { num } = this.state;
    return (
      <>
        <label>Number of Events</label>
        <input
          className="numberOfEvents"
          type="number"
          value={num}
          onChange={this.handleInputChanged}
        />
      </>
    );
  }
}
