import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

// -- Unit Test -- //

describe('<NumberOfEvents /> components', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(
      NumberOfEventsWrapper.find('#numberOfEvents__input').prop('value')
    ).toBe(numberOfEvents);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('#numberOfEvents__input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
  });

  test('show number of events input label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
  });
});
