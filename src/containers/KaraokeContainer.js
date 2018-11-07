import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {





  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songJson={this.props.songs} />
        </div>
        <KaraokeDisplay songsJson={this.props.songs} titleHolder={this.props} />
      </div>
    );
  }
}

export default KaraokeContainer;
