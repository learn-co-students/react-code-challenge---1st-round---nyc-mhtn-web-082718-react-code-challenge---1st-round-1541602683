import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs')
      .then(res => res.json())
      .then((songData) => this.setState({ data: songData }))
  }




  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer songs={this.state.data}
        title={this.state.data.map((song) => song.title)} />
      </div>
    );
  }
}

export default App;
