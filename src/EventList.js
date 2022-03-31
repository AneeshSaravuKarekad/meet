import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Event from './Event';

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        <Row className="justify-content-center">
          {events.map((event) => (
            <Col>
              <li key={event.id}>
                <Event event={event} />
              </li>
            </Col>
          ))}
        </Row>
      </ul>
    );
  }
}
