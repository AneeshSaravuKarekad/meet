import React, { Component } from 'react';

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleShowDetails = () => {
    this.state.collapsed
      ? this.setState({ collapsed: false })
      : this.setState({ collapsed: true });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="startDate">{event.start.dateTime}</p>
        <p className="timezone">{event.start.timeZone}</p>

        <p className="location">{event.location}</p>

        {!collapsed && (
          <div className="show-content">
            <h3>About the event:</h3>
            <a href={event.htmlLink}>See details on Google calender</a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className={collapsed ? 'show btn-details' : 'hide btn-details'}
          onClick={this.toggleShowDetails}
        >
          {collapsed ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}
