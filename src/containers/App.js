import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      songs: [],
      currentSong: '',
      currentSongTitle: '',
      filterBy: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/songs')
      .then( resp => resp.json() )
      .then( parsed => this.setState({
        songs: parsed
      }))
  }

  handlePlayButton = (props) => {
    this.setState({
      currentSong: props.song.lyrics,
      currentSongTitle: props.song.title
    })
  }

  handleFilter = (event) => {
    this.setState({
      filterBy: event.target.value
    })
  }


  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer
          songs={this.state.songs}
          handlePlayButton={this.handlePlayButton}
          currentState={this.state}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

export default App;
