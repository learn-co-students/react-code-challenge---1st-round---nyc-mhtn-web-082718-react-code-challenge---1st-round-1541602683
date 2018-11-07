import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.song.title ? props.song.title : "Nothing Playing"}</h2>
      {props.song.lyrics ? <Lyrics lyrics={props.song.lyrics} /> : null }
    </div>
  )
}

export default KaraokeDisplay;
