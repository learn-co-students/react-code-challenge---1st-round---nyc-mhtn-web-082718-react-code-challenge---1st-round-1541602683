import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

// fetch songs and set them to state
// display list as props to song list and down to song
// add event listener to song on that sends a Fetch PATCH to songs url
// clicking play will pass song data to karaoke display and lyrics.
class KaraokeContainer extends Component {

  state = {
    songList: [],
    playingSong: null,
    filteredSongs: null,
    filterOn: false
  }

  fetchSongs = () => {
    fetch("http://localhost:4000/users/1/songs")
    .then(r => r.json())
    .then((songRes) => {
      this.setState((currentState) => {
        return { songList: songRes}
      })
    })
  }// end of fetch songs

  componentDidMount(){
    this.fetchSongs()
  }

  playSong = (songObj) => {
    const songId = songObj.id
    console.log(songId)
    fetch(`http://localhost:4000/users/1/songs/${songId}/play`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then((playRes) => {
      this.setState((currentState) => {
        return {playingSong: playRes}
      })
    })
  }// end of play song

  searchForSong = (songName) => {
    const searchResult = this.state.songList.filter((song) => {
      return song.title.toLowerCase().includes(songName.toLowerCase())
    })
    this.setState((currentState) => {
      return {filteredSongs: searchResult, filterOn: true }
    }, () => console.log(this.state.filteredSongs, this.state.filterOn ))
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchForSong={this.searchForSong} />
          <SongList songList={this.state.songList === null ? null : this.state.filterOn ? this.state.filteredSongs : this.state.songList }
                    playSong={this.playSong}
          />
        </div>
        <KaraokeDisplay playingSong={this.state.playingSong === null? null: this.state.playingSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
