import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.songToDisplay}</h2>
      <Lyrics lyrics="example song lyrics" />
    </div>
  )
}

export default KaraokeDisplay;
