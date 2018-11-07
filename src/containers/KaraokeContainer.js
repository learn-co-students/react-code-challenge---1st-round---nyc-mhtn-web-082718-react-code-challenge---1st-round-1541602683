import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';


class KaraokeContainer extends Component {
   constructor () {
     super()
     this.state = {
       songs: [],
       content:'',
       song:''
     }
   }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
    .then(resp => resp.json())
    .then(songs => this.setState({songs}))
  }

  handleFilter = (event) => {
    this.setState({
      song: event.target.value
    })
  }


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songFilter={this.handleFilter} songInput={this.state.song}/>
          <SongList songs={this.state.songs}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
