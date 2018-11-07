import React, { Component } from 'react';
import NavBar from './NavBar';
import SongList from './SongList';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <NavBar
          showSongs={this.props.showSongs}
          showQueue={this.props.showQueue}
        />
        {this.props.showFilter()}
        <SongList
          songs={this.props.showSongsOrQueue()}
          playSong={this.props.playSong}
          showQueueState={this.props.showQueueState}
        />
      </div>
    );
  }
}

export default Sidebar;
