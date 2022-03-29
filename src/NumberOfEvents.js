import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
      error: '',
    };
  }

  handleInputChanged = (event) => {
    const { value } = event.target;
    this.props.updateEvents(value);
    this.setState({ numberOfEvents: value });
    if (value < 1 || value > 32) {
      this.setState({
        error: 'Select number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        error: '',
      });
    }
  };

  render() {
    const { numberOfEvents, error } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          id="numberOfEvents__input"
          type="number"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <p>{error && error}</p>
      </div>
    );
  }
}
