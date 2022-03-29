import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      location: 'all',
    };
  }

  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = 'all', eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events.slice(0, eventCount)
          : events
              .filter((event) => event.location === location)
              .slice(0, eventCount);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        location,
      });
    });
  };

  updateNumberOfEvents = (num) => {
    this.setState(
      {
        numberOfEvents: num,
      },
      this.updateEvents(this.state.location, num)
    );
  };

  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateNumberOfEvents}
          numberOfEvents={numberOfEvents}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
