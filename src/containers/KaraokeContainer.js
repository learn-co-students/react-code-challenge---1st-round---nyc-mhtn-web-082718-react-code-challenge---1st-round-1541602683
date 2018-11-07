import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

const url = 'http://localhost:4000/users/1/songs'

class KaraokeContainer extends Component {

  constructor() {
    super();
    this.state = {
      songsArray: [],
      playingId: '',
      searchValue: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch}/>
          <SongList allSongs={this.state.songsArray} handlePlay={this.handlePlay} searchValue={this.state.searchValue}/>
        </div>
        <KaraokeDisplay allSongs={this.state.songsArray} songToPlay={this.state.playingId}/>
      </div>
    );
  }

  getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json, 'All the songs')
      this.setState({
        songsArray: json
      })
    })
  }

  handlePlay = (event) => {
    // console.log(event.target.id)
    this.setState({
      playingId: event.target.id
    }, () => console.log(this.state.playingId))
  }


  handleSearch = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    }, () => console.log(this.state.searchValue))
  }


} //end of class

export default KaraokeContainer;
