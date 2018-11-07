import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {

  const titleCheck = (props) => {
    return props.display ?  <h2>{props.title}</h2> : <h2>Song Title</h2>
  }
  const lyricCheck = (props) => {
    return props.display ? <Lyrics lyrics={props.lyrics} />
:  <Lyrics lyrics="example song lyrics" />

  }

  return (
    <div className="karaoke-display">
      {titleCheck(props)}
      {lyricCheck(props)}
    </div>
  )
}

export default KaraokeDisplay;
