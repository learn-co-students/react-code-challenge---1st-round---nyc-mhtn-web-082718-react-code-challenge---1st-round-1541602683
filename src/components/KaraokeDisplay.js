import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.currentState.currentSongTitle}</h2>
      <Lyrics lyrics={props.currentState.currentSong}/>
    </div>
  )
}

export default KaraokeDisplay;
