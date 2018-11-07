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
          likeSong={this.likeSong}
          dislikeSong={this.dislikeSong}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchSongs()
  }

  ///////////////////////////

  fetchSongs = () => {
    fetch('http://localhost:4000/users/1/songs')
    .then(r => r.json())
    .then(r => {
      this.setState({
        songs: r,
        filteredSongs: r
      })
    })
  }

  playSong = (song) => {
    fetch(`http://localhost:4000/users/1/songs/${song.id}/play`, {
      method: 'PATCH'
    })
    .then(() => {
      this.fetchSongs()
      this.setState({
        currentSong: song
      })
    })
  }

  likeSong = (song) => {
    fetch(`http://localhost:4000/users/1/songs/${song.id}/like`, {
      method: 'PATCH'
    })
    .then(() => {
      this.fetchSongs()
    })
  }

  dislikeSong = (song) => {
    fetch(`http://localhost:4000/users/1/songs/${song.id}/dislike`, {
      method: 'PATCH'
    })
    .then(() => {
      this.fetchSongs()
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
