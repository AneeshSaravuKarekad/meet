import React from 'react';
import { shallow } from 'enzyme';

import EventList from '../EventList';
import CitySearch from '../CitySearch';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

// -- Unit Testing -- //

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
