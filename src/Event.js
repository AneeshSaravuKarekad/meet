import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

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
      <Card
        className="event"
        style={{ width: '24rem', padding: '0', minHeight: '18rem' }}
      >
        <Card.Header className="summary">
          <Card.Title>{event.summary}</Card.Title>
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
        <Card.Footer style={{ textAlign: 'center' }}>
          <Button
            className="btn btn-show-hide"
            onClick={() => this.handleButtonClicked()}
            style={{ width: '100%' }}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
