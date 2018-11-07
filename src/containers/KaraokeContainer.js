import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    allSongs: [],
    currentSong: '',
    searchValue: ''
  }

  componentDidMount() {
    this.getSongs()
  }

  getSongs = () => {
    fetch('http://localhost:4000/users/1/songs')
    .then(r => r.json())
    .then(allSongs => {
      this.setState({
        allSongs
      })
    })
    // this.setState({
    //   allSongs: songs
    // })
  }

  toggleSelectedSong = (selectedSong) => {
    this.setState({
      currentSong: selectedSong
    })
  }

  updateSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    }, this.filterSongs())
  }

  filterSongs = () => {
    const filteredSongs = this.state.allSongs.filter(song => song.title.toLowerCase().includes(this.state.searchValue))

    if (this.state.searchValue) {
      this.setState({
        allSongs: filteredSongs
      })
    } else if (!this.state.searchValue){
      this.getSongs()
    }
  }

  render() {
    const {allSongs, currentSong, searchValue} = this.state

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter updateSearch={this.updateSearch} searchValue={searchValue}/>
          <SongList allSongs={allSongs} toggleSelectedSong={this.toggleSelectedSong} />
        </div>
        <KaraokeDisplay allSongs={allSongs} currentSong={currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
