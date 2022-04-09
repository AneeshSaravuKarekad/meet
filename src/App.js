import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import './App.css';
import { OfflineAlert } from './Alert';
import EventGenre from './EventGenre';
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

    if (
      navigator.onLine &&
      !window.location.href.startsWith('http://localhost')
    ) {
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
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
          <Row key={12313}>
            <Navbar bg="light" expand="lg" style={{ width: '100%' }}>
              <Container fluid>
                <Navbar.Brand style={{ fontSize: '2.5rem' }}>Meet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav
                    style={{
                      width: '100%',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
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
              </Container>
            </Navbar>
          </Row>

          {!navigator.onLine && (
            <Row className="justify-content-center" key={512}>
              <OfflineAlert
                text={
                  'You are offline. New events can not be loaded until you have an internet connection'
                }
              />
            </Row>
          )}

          <Row
            className="justify-content-center"
            style={{ alignItems: 'center' }}
            key={'123gd'}
          >
            <div className="data-vis-wrapper" style={{ width: '100%' }} key={1}>
              <EventGenre events={events} />
              <ResponsiveContainer height={400}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis
                    allowDecimals={false}
                    type="number"
                    dataKey="number"
                    name="number of events"
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <EventList events={events} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
