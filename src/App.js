import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import './App.css';
import { OfflineAlert } from './Alert';
import { Container, Nav, Navbar } from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      location: 'all',
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;

    if (navigator.onLine) {
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
    } else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            locations: extractLocations(events),
          });
        }
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
    const { events, locations, numberOfEvents, showWelcomeScreen } = this.state;

    if (showWelcomeScreen === true) {
      return (
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );
    }
    return (
      <div className="App">
        <Container fluid>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ fontSize: '2.5rem' }}>Meet</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav">
                <Nav.Link>
                  <NumberOfEvents
                    updateEvents={this.updateNumberOfEvents}
                    numberOfEvents={numberOfEvents}
                  />
                </Nav.Link>
                <Nav.Link>
                  <CitySearch
                    locations={locations}
                    updateEvents={this.updateEvents}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        {!navigator.onLine && (
          <OfflineAlert
            text={
              'You are offline. New events can not be loaded until you have an internet connection'
            }
          />
        )}
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
