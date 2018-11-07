import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log(props.playingSong)
  return (
    <div className="karaoke-display">
      <h2>{props.playingSong === null ? null : props.playingSong.title}</h2>
      <Lyrics lyrics={props.playingSong === null ? "no lyrics yet" : props.playingSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
