import React, { Component } from 'react';

class Filter extends Component {

  state = {
    currentSearchTerm: null
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({
      currentSearchTerm: event.target.value
    }, () => this.props.searchForSong(this.state.currentSearchTerm))

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
