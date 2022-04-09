import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  handleButtonClicked = () => {
    this.setState({
      showDetails: this.state.showDetails ? false : true,
    });
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="startDateTimeZone">
          {event.start.dateTime}({event.start.timeZone})
        </p>
        <p className="location">{event.location}</p>
        {showDetails && (
          <div className="event__Details">
            <h3>About event: </h3>
            <a href={event.htmlLink}>See details on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        )}
        <Button
          className="btn btn-show-hide"
          onClick={() => this.handleButtonClicked()}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
      </div>
    );
  }
}
