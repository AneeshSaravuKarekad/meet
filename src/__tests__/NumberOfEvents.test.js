import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

// -- Unit Test -- //

describe('<NumberOfEvents /> components', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('num');
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(
      numberOfEvents
    );
  });

  test('change the number of events when changing', () => {
    const numObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', numObject);
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
  });

  test('show number of events input label', () => {
    expect(NumberOfEventsWrapper.find('label')).toHaveLength(1);
  });
});
