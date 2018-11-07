import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    input: ''
  }

  componentDidMount() {
    this.getFetchSongs()
  }

  getFetchSongs = () => {
    fetch('http://localhost:4000/users/1/songs')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      this.setState({songs: data})
    })
  }

  handleValueChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value)
  }

  // filterThroughSongs = () => {
  //   return this.state.songs.filter((song) => {
  //     return song.name.includes(this.state.input)
  //   })
  // }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            songs={this.state.songs}
            input={this.state.input}
            handleValueChange={this.handleValueChange}
          />
          <SongList
            songs={this.state.songs}
            filterThroughSongs={this.filterThroughSongs}
          />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
