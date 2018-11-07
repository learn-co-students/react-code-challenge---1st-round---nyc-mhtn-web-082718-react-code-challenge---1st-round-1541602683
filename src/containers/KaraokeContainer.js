import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {


    constructor(props){
      super(props)
      this.state = {
        songs: [],
        targetSong: {},
        filter: '',
        likeSong: 0,
      }
    }

    componentDidMount(){
      fetch('http://localhost:4000/users/1/songs')
        .then(r=> r.json())
        .then(resJson=>{
          this.setState({
            songs: resJson
          })
        })

    }
    showLyrics =(id)=> {
      let playsong= this.state.songs.find(song=> song.id === id)

      if (playsong !== this.state.targetSong){
        playsong.plays++
      this.setState({
        targetSong:playsong,
      })


      fetch(`http://localhost:4000/users/1/songs/${id}/play`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify({
          plays:  playsong.plays
        })
      }).then(r=>r.json())
        .then(resJson=> {

        })
        .then(()=>{
          
        })
      }
    }
    handleChange=(e)=>{
      console.log(e.target.value)
      this.setState({
        filter: e.target.value
      })
    }

    showSongs=(id)=>{
      let playsong= this.state.songs.find(song=> song.id === id)
      playsong.likes++

      fetch(`http://localhost:4000/users/1/songs/${id}/like`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify({
          likes:  playsong.likes
        })
      }).then(r=>r.json())
        .then(resJson=> {
          console.log(resJson)
        })

    }
  render() {
    console.log(this.state.filter)
    let filterSong= this.state.songs.filter(song=> song.title.toLowerCase().includes(this.state.filter))


    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange}/>
          <SongList songs={filterSong} showLyrics={this.showLyrics}/>
        </div>
        <KaraokeDisplay targetSong={this.state.targetSong} showSongs={this.showSongs}/>
      </div>
    );
  }
}

export default KaraokeContainer;
