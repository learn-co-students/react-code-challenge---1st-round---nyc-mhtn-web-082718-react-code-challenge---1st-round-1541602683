import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

  const APIURL = 'http://localhost:4000/users/1/songs'


class App extends Component {

  state = {
    songs: [],
    displayedSong: 0
  }

  componentDidMount(){
    fetch(APIURL)
      .then(r => r.json())
      .then(songs => {
        this.setState({
          songs: songs
        })
      })
  }

  handlePlayClick = (songId) => {
    this.setState({
      displayedSong: songId
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer
          songs={this.state.songs}
          displayedSong={this.state.displayedSong}
          handlePlayClick={this.handlePlayClick}/>
      </div>
    );
  }
}

export default App;
