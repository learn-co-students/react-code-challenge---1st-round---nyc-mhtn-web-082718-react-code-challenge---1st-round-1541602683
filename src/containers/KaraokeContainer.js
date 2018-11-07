import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    allSongs: [],
    songToEdit: "",
    search: ""
  }


  componentDidMount = () => {
    fetch('http://localhost:4000/users/1/songs')
    .then(res => res.json())
    .then(res => {
      this.setState({
        allSongs: res ,
      });
    })
  }

  playSong = (songObj) => {
    if (this.state.songToEdit.id === songObj.id ) {
      alert('Already Playing')
    }
    songObj.plays ? songObj.plays = songObj.plays + 1 : songObj.plays = 1
    // console.log(songObj);
    let newSongData = this.state.allSongs.map(song => {
      console.log(song);
      if (song.id === songObj.id){
        return songObj
      } else {
        return song
      }
    })
    this.setState({
      allSongs: newSongData,
      songToEdit: songObj
    });

    fetch(`http://localhost:4000/users/1/songs/${songObj.id}/play`, {
      method: 'PATCH',
      body: JSON.stringify({
        plays: songObj.plays
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }) // end Fetch
    .then(res => res.json())
    .then(resJson => console.log(resJson))
  } // end of play


  onSearchChange = (query) => {
    this.setState({
      search: query,
    });
  }


  likeIt = (songObj) => {
    songObj.likes ? songObj.likes = songObj.likes + 1 : songObj.likes = 1
    // console.log(songObj);

    let newSongData = this.state.allSongs.map(song => {
      console.log(song);
      if (song.id === songObj.id){
        return songObj
      } else {
        return song
      }
    })
    this.setState({
      allSongs: newSongData,
      songToEdit: songObj
    });

    fetch(`http://localhost:4000/users/1/songs/${songObj.id}/like`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: songObj.likes
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }) // end Fetch
    .then(res => res.json())
    .then(resJson => console.log(resJson))
  } // end of like it


  dislikeIt = (songObj) => {
    songObj.dislikes ? songObj.dislikes = songObj.dislikes + 1 : songObj.dislikes = 1
    // console.log(songObj);

    let newSongData = this.state.allSongs.map(song => {
      console.log(song);
      if (song.id === songObj.id){
        return songObj
      } else {
        return song
      }
    })
    this.setState({
      allSongs: newSongData,
      songToEdit: songObj
    });

    fetch(`http://localhost:4000/users/1/songs/${songObj.id}/dislike`, {
      method: 'PATCH',
      body: JSON.stringify({
        dislikes: songObj.dislikes
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }) // end Fetch
    .then(res => res.json())
    .then(resJson => console.log(resJson))
  } // end of dislike


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter search={this.state.search} onSearchChange={this.onSearchChange}/>
          <SongList songs={this.state.allSongs} playSong={this.playSong} search={this.state.search}/>
        </div>
        <KaraokeDisplay
          song={this.state.songToEdit}
          likeIt={this.likeIt}
          dislikeIt={this.dislikeIt}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
