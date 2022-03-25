import React, { Component } from 'react';

export default class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      suggestions: [],
    };
  }

  handleInputChanged = (event) => {
    const { value } = event.target;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    const { query, suggestions } = this.state;
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {suggestions.map((suggestion, idx) => (
            <li key={idx} onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}
            </li>
          ))}
          <li key="all" onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}
