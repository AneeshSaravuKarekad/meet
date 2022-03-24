import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import { mockData } from '../mock-data';

// -- Unit Tests --//

describe('<Event /> Component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('renders event card', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('renders event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('renders start date and time', () => {
    expect(EventWrapper.find('.startDateTimeZone')).toHaveLength(1);
  });
  test('renders location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render a show/hide button', () => {
    expect(EventWrapper.find('.btn-show-hide')).toHaveLength(1);
  });

  test('render details when show button is clicked', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('.btn-show-hide').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('collapse details when hide button is clicked', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    EventWrapper.find('.btn-show-hide').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
});
