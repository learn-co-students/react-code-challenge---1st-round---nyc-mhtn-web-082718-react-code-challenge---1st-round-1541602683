import React, { Component } from 'react';

class Filter extends Component {

  handleChange =(event)=>{
    this.props.filterSongs(event.target.value)
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={this.handleChange} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
