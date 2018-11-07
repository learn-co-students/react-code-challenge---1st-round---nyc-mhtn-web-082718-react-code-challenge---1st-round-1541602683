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
      songsArray: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList allSongs={this.state.songsArray}/>
        </div>
        <KaraokeDisplay />
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


} //end of class

export default KaraokeContainer;
