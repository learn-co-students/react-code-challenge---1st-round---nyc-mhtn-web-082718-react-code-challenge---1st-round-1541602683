import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
const theSongAPI = 'http://localhost:4000/users/1/songs'
class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: []
  }

  handleSongSelect(song) {
    //Following steps:  Create a call back function to set current song to change when called
    // in song onclick to tell karaokeDisplay what song to play. State.currentSong needs to be set.
    // state.currentSong will be send down after it is set to karaokeDisplay
    console.log(song)
  }

  getTheApi = () => {
    fetch(theSongAPI)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        songs: myJson
      })
    });
  }

  componentDidMount() {
    this.getTheApi()
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.songs} handleSongSelect={this.handleSongSelect()} />
        </div>
        <KaraokeDisplay songs={this.state.songs} />
      </div>
    );
  }
}



export default KaraokeContainer;
