import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      filteredSongs: [],
      currentSong: {}
    }
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            filterSongs={this.filterSongs}
          />
          <SongList
            songs={this.state.filteredSongs}
            playSong={this.playSong}
          />
        </div>
        <KaraokeDisplay
          currentSong={this.state.currentSong}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchSongs()
  }

  ///////////////////////////

  fetchSongs = () => {
    fetch('http://localhost:4000/songs')
    .then(r => r.json())
    .then(r => {
      this.setState({
        songs: r,
        filteredSongs: r
      })
    })
  }

  playSong = (song) => {
    this.setState({
      currentSong: song
    })
  }

  filterSongs = (query) => {
    const newFilteredSongs = this.state.songs.filter(s => {
      return s.title.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({
      filteredSongs: newFilteredSongs
    })
  }
}

export default KaraokeContainer;
