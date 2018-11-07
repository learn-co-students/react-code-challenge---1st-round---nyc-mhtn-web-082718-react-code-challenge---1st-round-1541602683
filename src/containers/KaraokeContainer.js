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
          <Filter
            handleFilter={this.props.handleFilter}
          />
          <SongList
            songs={this.props.songs}
            handlePlayButton={this.props.handlePlayButton}
            currentState={this.props.currentState}
          />
        </div>
        <KaraokeDisplay
          currentState={this.props.currentState}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
