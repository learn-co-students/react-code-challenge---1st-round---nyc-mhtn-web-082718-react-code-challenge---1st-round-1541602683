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
      search: ''
    }
  }

  setStateToSearch = (searchVal) => {
    this.setState({
      search: searchVal
    }, () => {
      console.log(this.state.search);
    })
  }

  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs = () => {
    const playing = {playing: false}
    fetch('http://localhost:4000/users/1/songs')
    .then(resp => resp.json())
    .then(json => {
      this.addPlaying(playing, json)
    })
  }

  addPlaying = (playing, json) => {
    const newJson = json.map(eachSong => {
      return {...eachSong, ...playing}
    })
    this.setState({
      songs: newJson
    }, () => {
      console.log(this.state.songs);
    })
  }

  ifPlayClicked = (songName) => {
    // in progress.. not working 
    console.log(songName);
    const newSongsState = this.state.songs.map(eachSong => {
      if (eachSong.title === songName) {
        eachSong.playing = !eachSong.playing
      }
    })
    this.setState({
      songs: newSongsState
    })
  }

  mapThroughSongs = () => {
    return this.state.songs.map(song => {
      return <KaraokeDisplay song={song} key={song.title}/>
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter search={this.setStateToSearch}/>
          <SongList songs={this.state.songs} searchTerm={this.state.search}
          ifPlayClicked={this.ifPlayClicked}/>
        </div>
        {this.mapThroughSongs()}
      </div>
    );
  }
}

export default KaraokeContainer;
