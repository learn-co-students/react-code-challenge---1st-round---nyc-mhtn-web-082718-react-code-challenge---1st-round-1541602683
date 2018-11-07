import React, { Component } from 'react';

class Filter extends Component {
  handleChange = (e) => {
    this.props.filterSongs(e.target.value)
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Filter;
