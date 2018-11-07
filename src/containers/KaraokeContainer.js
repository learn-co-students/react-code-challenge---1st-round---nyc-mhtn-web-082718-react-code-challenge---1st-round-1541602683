import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

state={
  songs:[],
  playedSong:{}
}

componentDidMount() {
  fetch('http://localhost:4000/users/1/songs').then(response => response.json())
  .then(songData => this.setState({
    songs:songData
  }))
}

handlePlay = (event) => {
const played = this.state.songs.find(song =>{song.id === event.target.id})
this.setState({
  playedSong:played
})
}

// Clearly, I need more practice. The idea was to find the song that was clicked based on id's matching, then pass that to KaraokeDisplay & Lyrics so they could be rendered but choked on the find above (handlePlay). I'll continue to work on it & see you next week.


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList
            songs={this.state.songs}
            handlePlay={this.handlePlay}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
