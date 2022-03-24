import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

// -- Unit Test -- //

describe('<NumberOfEvents /> components', () => {
  let numberOfEventsWrapper;
  beforeAll(() => {
    numberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render number of events input', () => {
    expect(numberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('change the number of events when changing', () => {
    const numObject = { target: { value: 10 } };
    numberOfEventsWrapper.find('.numberOfEvents').simulate('change', numObject);
    expect(numberOfEventsWrapper.state('num')).toBe(10);
  });
});
