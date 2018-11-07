import React, { Component } from 'react';

class Filter extends Component {
  state = {
    search: ""
  }

  change = (event) => {
    this.setState({
      search: event.target.value,
    }, () => this.props.onSearchChange(this.state.search));
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter"
          type="text"
          value={this.state.search}
          onChange={this.change}/>
      </div>
    );
  }
}

export default Filter;
