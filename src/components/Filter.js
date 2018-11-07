import React, { Component } from 'react';

class Filter extends Component {

  render() {
    // console.log(this.props);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.props.input} onChange={this.props.handleValueChange}/>
      </div>
    );
  }
}

export default Filter;
