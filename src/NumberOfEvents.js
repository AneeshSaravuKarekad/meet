import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

export default class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
      infoText: '',
    };
  }

  handleInputChanged = (event) => {
    const { value } = event.target;
    this.props.updateEvents(value);
    this.setState({ numberOfEvents: value });
    if (value < 1 || value > 32) {
      this.setState({
        infoText: 'Select number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: '',
      });
    }
  };

  render() {
    const { numberOfEvents, infoText } = this.state;
    return (
      <>
        <div className="numberOfEvents" style={{ display: 'flex' }}>
          <label style={{ marginRight: '1rem' }}>Number of Events: </label>
          <input
            id="numberOfEvents__input"
            type="number"
            value={numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </div>
        <ErrorAlert text={infoText} />
      </>
    );
  }
}
