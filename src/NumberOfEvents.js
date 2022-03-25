import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
    };
  }

  handleInputChanged = (event) => {
    const { value } = event.target;
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          id="numberOfEvents__input"
          type="number"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
