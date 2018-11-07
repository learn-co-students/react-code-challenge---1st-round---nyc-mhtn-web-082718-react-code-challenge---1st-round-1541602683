import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state={
    allSongs:[],
    searchTerm:"",
    playingSong: {},
    previousSong:{},
    filteredResults: []
  }

  getFetch=()=>{
    fetch("http://localhost:4000/users/22/songs")
    .then(res=>res.json())
    .then(parsed=>{
      this.setState({
        allSongs: parsed
      }, ()=>console.log(this.state))
    })
  }

  componentDidMount = () =>{
    this.getFetch()
  }

  showLyrics = (id) =>{
    let pickedSong = this.state.allSongs.find(song=> song.id === id)
    this.setState({
      ...this.state,
      playingSong: pickedSong,
      previousSong: this.state.playingSong
    }, ()=>this.playFetch(id))
  }


 // || song.singer.toLowerCase().includes(term.toLowerCase())
  filterSongs = (term) =>{
    let filtered= this.state.allSongs.filter(song=> song.title.toLowerCase().includes(term.toLowerCase()))

    this.setState({
      ...this.state,
      searchTerm: term,
      filteredResults: filtered
    }, ()=> console.log(this.state))
  }

  likeFetch=(id)=>{
    fetch("http://localhost:4000/users/22/songs/"+ id +"/like",{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then(res=>res.json())
    .then(parsed=>{
      let patchedSong= this.state.allSongs.map(song=> {
        if (song.id===parsed.id) {
          song.likes= parsed.likes
          return song
        } else {
          return song
        }
      })
      this.setState({
        ...this.state,
        allSongs: patchedSong
      })
    })
  }

  dislikeFetch=(id)=>{
    fetch("http://localhost:4000/users/22/songs/"+ id +"/dislike",{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then(res=>res.json())
    .then(parsed=>{
      let patchedSong= this.state.allSongs.map(song=> {
        if (song.id===parsed.id) {
          song.dislikes= parsed.dislikes
          return song
        } else {
          return song
        }
      })
      this.setState({
        ...this.state,
        allSongs: patchedSong
      })
    })
  }

  playFetch=(id)=>{
    if (this.state.previousSong.id === id) {
      alert("You can't play it at the same time!")
    } else {
      fetch("http://localhost:4000/users/22/songs/"+ id +"/play",{
        method: "PATCH",
        headers:{
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        }
      })
      .then(res=>res.json())
      .then(parsed=>{
        let patchedSong= this.state.allSongs.map(song=> {
          if (song.id===parsed.id) {
            song.plays= parsed.plays
            return song
          } else {
            return song
          }
        })
        this.setState({
          ...this.state,
          allSongs: patchedSong
        })
      })
    }
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSongs={this.filterSongs}/>
          <SongList allSongs={this.state.allSongs} searchTerm={this.searchTerm} filteredResults={this.state.filteredResults} showLyrics={this.showLyrics} playFetch={this.playFetch}/>
        </div>
        <KaraokeDisplay song={this.state.playingSong} likeFetch={this.likeFetch} dislikeFetch={this.dislikeFetch}/>
      </div>
    );
  }
}

export default KaraokeContainer;
