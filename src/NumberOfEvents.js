import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numOfEvents: 32,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      numOfEvents: event.target.value,
    });
  };

  render() {
    const { numOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberOfEvents-input"
          value={numOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
