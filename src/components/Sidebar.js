import React, { Component } from 'react';
import NavBar from './NavBar';
import SongList from './SongList';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      filteredSongs: [],
      currentSong: {},
      queuedSongs: [],
      showQueue: false
    }
  }

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

  // componentDidMount() {
    // this.props.fetchSongs()
  // }

  ///////////////////////////
  //
  // fetchSongs = () => {
  //   fetch('http://localhost:4000/users/1/songs')
  //   .then(r => r.json())
  //   .then(r => {
  //     this.setState({
  //       songs: r,
  //       filteredSongs: r
  //     })
  //   })
  // }
  //
  // playSong = (song) => {
  //   if (!this.isSongInQueue(song)) {
  //     fetch(`http://localhost:4000/users/1/songs/${song.id}/play`, {
  //       method: 'PATCH'
  //     })
  //     .then(() => {
  //       this.fetchSongs()
  //       if (this.state.currentSong.id) {
  //         this.addToQueue(song)
  //       }
  //       else {
  //         this.setState({
  //           currentSong: song
  //         })
  //       }
  //     })
  //   }
  // }
  //
  // isSongInQueue = (song) => {
  //   const songIsQueued = this.state.queuedSongs.map(s => s.id).includes(song.id)
  //
  //   const songIsPlaying = this.state.currentSong.id === song.id
  //
  //   return songIsQueued || songIsPlaying
  // }
  //
  // addToQueue = (song) => {
  //   console.log('adding', song.title, 'to queue');
  //
  //   const newQueue = this.state.queuedSongs
  //   newQueue.push(song)
  //   this.setState({
  //     queuedSongs: newQueue
  //   })
  // }
  //
  // onFinish = () => {
  //   const newQueue = this.state.queuedSongs
  //   const songToPlay = newQueue.shift()
  //   this.setState({
  //     queuedSongs: newQueue,
  //     currentSong: songToPlay || {}
  //   })
  // }
  //
  // showSongs = () => {
  //   this.setState({
  //     showQueue: false
  //   })
  // }
  //
  // showQueue = () => {
  //   this.setState({
  //     showQueue: true
  //   })
  // }
  //
  // showFilter = () => {
  //   if (!this.state.showQueue) {
  //     return (
  //       <Filter
  //         filterSongs={this.filterSongs}
  //       />
  //     )
  //   }
  // }
  //
  // showSongsOrQueue = () => {
  //   if (this.state.showQueue) {
  //     return this.state.queuedSongs
  //   }
  //   else {
  //     return this.state.filteredSongs
  //   }
  // }
  //
  // likeSong = (song) => {
  //   fetch(`http://localhost:4000/users/1/songs/${song.id}/like`, {
  //     method: 'PATCH'
  //   })
  //   .then(() => {
  //     this.fetchSongs()
  //   })
  // }
  //
  // dislikeSong = (song) => {
  //   fetch(`http://localhost:4000/users/1/songs/${song.id}/dislike`, {
  //     method: 'PATCH'
  //   })
  //   .then(() => {
  //     this.fetchSongs()
  //   })
  // }
  //
  // filterSongs = (query) => {
  //   const newFilteredSongs = this.state.songs.filter(s => {
  //     return s.title.toLowerCase().includes(query.toLowerCase())
  //   })
  //   this.setState({
  //     filteredSongs: newFilteredSongs
  //   })
  // }
}

export default Sidebar;
