import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      currentSong: null,
      filterText: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs')
      .then(resp => resp.json())
      .then(songsJSON => this.setState({
        songs: songsJSON,
      }))
  }

  displaySong = (song) => {
    this.setState({
      currentSong: song,
    })
  }

  setFilter = (text) => {
    this.setState({
      filterText: text,
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            setFilter={this.setFilter}
            filterText={this.state.filterText} />
          <SongList
            songs={this.state.songs}
            displaySong={this.displaySong}
            filterText={this.state.filterText} />
        </div>
        <KaraokeDisplay
          currentSong={this.state.currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
