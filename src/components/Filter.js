import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.props.currentFilter} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default Filter;
