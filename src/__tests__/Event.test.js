import React from 'react';
import { shallow } from 'enzyme';

import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> Component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('should render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('should render summary of the event', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('should render start date', () => {
    expect(EventWrapper.find('.startDate')).toHaveLength(1);
  });

  test('should render start date timezone', () => {
    expect(EventWrapper.find('.timezone')).toHaveLength(1);
  });

  test('should render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('should render details button', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });

  test('details should collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('should open details when show button is clicked', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('should close details when hide button is clicked', () => {
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
