import React, { Component } from 'react';

class Filter extends Component {


  render() {
    const {updateSearch, searchValue} = this.props
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={event => updateSearch(event)} id="title-filter" type="text" value={searchValue} />
      </div>
    );
  }
}

export default Filter;
