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
      targetSong: [],
      search: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
    .then(result => result.json())
    .then(result => this.setState({
      songs: result
    }))
  }

  captureSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  renderLyrics = (id) => {
    let targetSongFind = this.state.songs.find(song => id === song.id)
    this.setState({
      targetSong: targetSongFind
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter search={this.captureSearch}/>
          <SongList songs={this.state.songs} renderLyrics={this.renderLyrics} searchQuery={this.state.search}/>
        </div>
        <KaraokeDisplay song={this.state.targetSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
