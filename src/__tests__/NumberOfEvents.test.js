import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents-input')).toHaveLength(1);
  });

  test('should render 32 number of events by default', () => {
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(32);
  });

  test('should change number of events', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.numberOfEvents-input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(10);
  });
});
