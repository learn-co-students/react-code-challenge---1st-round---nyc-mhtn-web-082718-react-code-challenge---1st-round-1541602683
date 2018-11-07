import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';

const songsAPI = "http://localhost:4000/users/17/songs"

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: {},
    queuedSongs: [],
    currentFilter: ""
  }

  componentWillMount(){
    fetch(songsAPI).then(res=>res.json()).then(json=>{
      this.setState({songs:json})
    })
  }

  changeFilter = (event) => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  filteredSongs = () => {
    return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.currentFilter.toLowerCase()))
  }

  playSong = (song) => {
    if(this.state.currentSong !== song)
      { fetch(songsAPI+"/"+song.id+"/play",{
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(fetch(songsAPI).then(res=>res.json()).then(json=>{
        this.setState({
          songs: json,
          currentSong: json.find(j=>j.id===song.id)
        })
      }))
    }
  }

  likeSong = (song) => {
    fetch(songsAPI+"/"+song.id+"/like",{
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(fetch(songsAPI).then(res=>res.json()).then(json=>{
      this.setState({
        songs: json,
        currentSong: json.find(j=>j.id===song.id)
      })
    }))
  }

  dislikeSong = (song) => {
    fetch(songsAPI+"/"+song.id+"/dislike",{
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(fetch(songsAPI).then(res=>res.json()).then(json=>{
      this.setState({
        songs: json,
        currentSong: json.find(j=>j.id===song.id)
      })
    }))
  }



  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter currentFilter={this.state.currentFilter} onChange={this.changeFilter}/>
          <SongList playSong={this.playSong} songs={this.filteredSongs()}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong} likeSong={this.likeSong} dislikeSong={this.dislikeSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
