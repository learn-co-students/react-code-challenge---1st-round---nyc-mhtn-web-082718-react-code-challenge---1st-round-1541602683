import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    title: '',
    lyrics: '',
    display: false,
    searchInput: ''
  }

  searchCatcher = (e) => {
    this.setState({
      searchInput: e.target.value
    }, () => console.log(this.state.searchInput))
  }

  clickHandler = (title, lyrics) => {
      this.setState({
        title: title,
        lyrics: lyrics,
        display: true
      })
    }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchCatcher={this.searchCatcher}/>
          <SongList clickHandler={this.clickHandler} searchCritera={this.state.searchInput}/>
        </div>
        <KaraokeDisplay title={this.state.title} lyrics={this.state.lyrics} display={this.state.display}/>
      </div>
    );
  }
}

export default KaraokeContainer;
