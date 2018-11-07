import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      currentSong: null,
      filterText: '',
    }
    this.playSong = this.playSong.bind(this)
    this.increasePlay = this.increasePlay.bind(this)
    this.voteUp = this.voteUp.bind(this)
    this.voteDown = this.voteDown.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
      .then(resp => resp.json())
      .then(songsJSON => this.setState({
        songs: songsJSON,
      }))
  }

  playSong = (song) => {
    this.setState(prevState => {
      const prevID = prevState.currentSong ? prevState.currentSong.id : null
      if (prevID !== song.id) {
        this.increasePlay(song.id)
        return {
          currentSong: song,
        }
      }
    })
  }

  increasePlay = (songID) => {
    fetch(`http://localhost:4000/users/1/songs/${songID}/play`, {
      method: 'PATCH'
    })
      .then(resp => resp.json())
      .then(songJSON => {
        this.setState(prevState => {
          return {
            songs: prevState.songs.map(song => song.id === songID ? songJSON : song)
          }
        })
      })
  }

  setFilter = (text) => {
    this.setState({
      filterText: text,
    })
  }

  voteUp = () => {
    const songID = this.state.currentSong.id;
    fetch(`http://localhost:4000/users/1/songs/${songID}/like`, {
      method: 'PATCH'
    })
      .then(resp => resp.json())
      .then(songJSON => {
        this.setState(prevState => {
          return {
            songs: prevState.songs.map(song => song.id === songID ? songJSON : song)
          }
        })
      })

  }

  voteDown = () => {
    const songID = this.state.currentSong.id;
    fetch(`http://localhost:4000/users/1/songs/${songID}/dislike`, {
      method: 'PATCH'
    })
      .then(resp => resp.json())
      .then(songJSON => {
        this.setState(prevState => {
          return {
            songs: prevState.songs.map(song => song.id === songID ? songJSON : song)
          }
        })
      })

  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            setFilter={this.setFilter}
            filterText={this.state.filterText} />
          <SongList
            songs={this.state.songs}
            playSong={this.playSong}
            filterText={this.state.filterText} />
        </div>
        <KaraokeDisplay
          currentSong={this.state.currentSong}
          voteUp={this.voteUp}
          voteDown={this.voteDown} />
      </div>
    );
  }
}

export default KaraokeContainer;
