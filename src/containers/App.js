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
      filterBy: '',
      plug: true
    }
  }

  componentDidMount = () => {

    fetch('http://localhost:4000/users/3/songs')
      .then( resp => resp.json() )
      .then( parsed => this.setState({
        songs: parsed
      }))
  }

  handlePlayButton = (props) => {
    let numPlays = props.song.plays
    let newPlays = numPlays + 1

    this.setState({
      currentSong: props.song.lyrics,
      currentSongTitle: props.song.title
    })

    fetch(`http://localhost:4000/users/3/songs/${props.song.id}/play`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        plays: newPlays
      })
    })
    .then( resp => resp.json() )
    .then( parsed => this.setState({
      songs: [...this.state.songs]
    }))
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
