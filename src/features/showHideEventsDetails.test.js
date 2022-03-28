import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user is on the main page of the app', () => {});

    when('an event is displayed', () => {
      AppWrapper = mount(<App />);
    });

    then('the event details will be collapsed.', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is displayed with a list of events', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks on an individual event', () => {
      AppWrapper.update();
      AppWrapper.find('.btn-show-hide').at(0).simulate('click');
    });

    then('the event details will be displayed', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('The user has clicked on an event to display details', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.btn-show-hide').at(0).simulate('click');
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });

    when('the user clicks on “close” button', () => {
      AppWrapper.find('.btn-show-hide').at(0).simulate('click');
    });

    then('the event details will hide', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });
});
