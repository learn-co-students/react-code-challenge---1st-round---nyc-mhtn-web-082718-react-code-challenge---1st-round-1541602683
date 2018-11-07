import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    allSongs: [],
    songToEdit: "",
    search: ""
  }


  componentDidMount = () => {
    fetch('http://localhost:4000/songs')
    .then(res => res.json())
    .then(res => {
      this.setState({
        allSongs: res ,
      });
    })
  }

  displaySong = (songObj) => {
    this.setState({
      songToEdit: songObj
    });
  }

  onSearchChange = (query) => {
    this.setState({
      search: query,
    });
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter search={this.state.search} onSearchChange={this.onSearchChange}/>
          <SongList songs={this.state.allSongs} displaySong={this.displaySong} search={this.state.search}/>
        </div>
        <KaraokeDisplay song={this.state.songToEdit}/>
      </div>
    );
  }
}

export default KaraokeContainer;
