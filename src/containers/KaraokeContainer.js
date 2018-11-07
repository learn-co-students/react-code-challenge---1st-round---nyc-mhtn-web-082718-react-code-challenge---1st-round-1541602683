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
          <SongList
            songs={this.props}
            handlePlayClick={this.props.handlePlayClick}/>
        </div>
        <KaraokeDisplay
          songs={this.props}
          displayedSong={this.props.displayedSong}
          handlePlayClick={this.props.handlePlayClick}/>
      </div>
    );
  }
}

export default KaraokeContainer;
