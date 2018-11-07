import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props)
    // debugger
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={e => this.props.setFilter(e.target.value)} value={this.props.filterText} />
      </div>
    );
  }
}

export default Filter;
