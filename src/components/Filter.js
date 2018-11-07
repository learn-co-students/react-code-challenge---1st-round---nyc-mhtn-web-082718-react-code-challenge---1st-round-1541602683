import React, { Component } from 'react';

class Filter extends Component {

  //filter is lagging 

  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  controlInput = (event) => {
    this.setState({
      input: event.target.value
    }, () => {
      console.log(this.state.input);
    })
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={(event) => {this.controlInput(event); this.props.search(this.state.input)}} name='input'
        value={this.state.input}/>
      </div>
    );
  }
}

export default Filter;
