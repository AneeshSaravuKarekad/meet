import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import { WarningAlert } from './Alert';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      location: 'all',
      showWelcomeScreen: undefined,
      offlineAlertText: '',
    };
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;

    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get('code');
    this.setState({
      showWelcomeScreen: !(code || isTokenValid),
    });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineAlertText: 'You are not connected to the internet',
      });
    } else {
      this.setState({
        offlineAlertText: '',
      });
    }
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
    const {
      events,
      locations,
      numberOfEvents,
      showWelcomeScreen,
      offlineAlertText,
    } = this.state;

    if (showWelcomeScreen === undefined) return <div className="App" />;
    return (
      <div className="App">
        <WarningAlert text={offlineAlertText} />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateNumberOfEvents}
          numberOfEvents={numberOfEvents}
        />
        <EventList events={events} />
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
