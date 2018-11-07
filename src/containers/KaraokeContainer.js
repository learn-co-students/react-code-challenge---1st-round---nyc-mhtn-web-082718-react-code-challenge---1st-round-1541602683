import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  // I am well aware that I will not be passing this code challenge; I don't have the understanding of React fundamentals necessary to do so. So, with this in mind, I am approaching this as more of a teachable exercise, making the most of these 90 minutes to try and wrap my mind around the few React concepts I do know, and making note of the many that I don't so that I am best prepared for next week's retake.

  // Stands to reason that KaraokeContainer needs to be the one to fetch all the song data so it can pass all that information to its children.

  // const API = 'http://localhost:4000/users/1/songs'
  // Apparently I can't set the API to a const? - Syntax error: Unexpected token... WHY?

  // OK, so, what do I have to do?
    // I've got access to the song data from the API below. Nice. Now I've got to figure out how to pass that data down to all the children. How am I going to do that? Set a state I suppose.
    // I don't have to use a constructor for it, since this is the top component, and therefore don't need to pass it props

  // I am like 50% I've correctly set the state. How can I confirm this?
  // How do I pass any of this down?

  // Think, how should this app work?
    // I need to access the song data, first and foremost. This will be stored in the state.
    // Then, I need to be able to pass down that information to SongList and via SongList down to Song, where the songs will be displayed according to the state of its grandparent, KaraokeContainer.
    // I then reckon it will be up to Filter to use an onChange event listener to alter the state of songData so that it is re-rendered in Song.js
    // Where am I stuck? Passing down the state. I'm guessing I need to do this by setting props in Filter, SongList, and KaraokeDisplay. I'm going to try that now.

  state = {
    songData: [],
    // test: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
      .then(resp => resp.json())
      .then(parsedResp => {
        const songData = parsedResp.map(song => {
          return Object.assign({}, song)
        })
        this.setState({
          songData: songData
        }), console.log(this.state) // Cool, I've figured out how to check the state, I have indeed updated it.
      })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songData={this.state.songData} />
          <SongList songData={this.state.songData} />
        </div>
        <KaraokeDisplay songData={this.state.songData} />
      </div>
    );
  }
}

export default KaraokeContainer;
