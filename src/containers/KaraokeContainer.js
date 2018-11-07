import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  apiURL = "http://localhost:4000/users/1/songs"

  constructor(props) {
    super(props)
    this.state = {
      nowPlaying: {},
      songs: [],
      filter: '',
    }
  }

  sendUpdate = (id, endpoint) => {
    fetch(`${this.apiURL}/${id}/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r=>r.json())
    .then(j=>{
      console.log("Done.")
      console.log(j)
    })
  }
  
  playSong = (songProps) => {
    if (songProps.id === this.state.nowPlaying.id) {
      return
    }

    this.setState({
      nowPlaying: songProps
    }, this.sendUpdate(songProps.id, 'play'))
  }

  updateSongs = songs => {
    this.setState({ songs })
  }

  updateFilter = e => {
    this.setState({ filter: e.target.value })
  }

  componentDidMount() {
    fetch(this.apiURL)
    .then(r=>r.json())
    .then(j=>this.updateSongs(j))
  }
  
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter 
            updateFilter={this.updateFilter}
          />
          <SongList 
            songs={this.state.songs} 
            playSong={this.playSong}
            filter={this.state.filter}
          />
        </div>
        <KaraokeDisplay 
          song={this.state.nowPlaying}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
