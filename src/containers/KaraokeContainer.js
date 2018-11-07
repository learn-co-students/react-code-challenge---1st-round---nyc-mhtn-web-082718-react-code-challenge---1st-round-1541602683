import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import NavBar from '../components/NavBar'

const songsAPI = "http://localhost:4000/users/17/songs"

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: {},
    queuedSongs: [],
    currentFilter: "",
    displayQueue: false
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
    if(this.state.currentSong.id !== song.id)
      { fetch(songsAPI+"/"+song.id+"/play",{
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(json => {
        this.setState((currentState) => {
          let updated = currentState.songs.map(s => {
            if(s.id === json.id){
              s.plays++
            }
            return s
          })
          return {songs:updated,currentSong:json}
        })
      })
    }
  }

  likeSong = (song) => {
    fetch(songsAPI+"/"+song.id+"/like",{
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(json => {
      this.setState((currentState) => {
        let updated = currentState.songs.map(s => {
          if(s.id === json.id){
            s.likes++
          }
          return s
        })
        return {songs:updated}
      })
    })
  }

  dislikeSong = (song) => {
    fetch(songsAPI+"/"+song.id+"/dislike",{
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(json => {
      this.setState((currentState) => {
        let updated = currentState.songs.map(s => {
          if(s.id === json.id){
            s.dislikes++
          }
          return s
        })
        return {songs:updated}
      })
    })
  }

  toggleDisplay = () => {
    this.setState((currentState) => {
      return {displayQueue: !currentState.displayQueue}
    })
  }



  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <NavBar toggleDisplay={this.toggleDisplay} currentDisplay={this.state.displayQueue}/>
          <Filter currentFilter={this.state.currentFilter} onChange={this.changeFilter}/>
          {this.state.displayQueue ? null : <SongList playSong={this.playSong} songs={this.filteredSongs()}/>}
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong} likeSong={this.likeSong} dislikeSong={this.dislikeSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
