import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';

import './App.css';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';
import { extractLocations } from './api';
class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    this.setState({
      location: extractLocations(mockData),
    });
  }

  render() {
    const { locations } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} />
        <NumberOfEvents />
        <EventList events={mockData} />
      </div>
    );
  }
}

export default App;
