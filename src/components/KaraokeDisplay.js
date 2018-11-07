import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar'

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      {props.currentSong.id ? <VoteBar song={props.currentSong} likeSong={props.likeSong} dislikeSong={props.dislikeSong} /> : null}
      <h2>{props.currentSong.title}</h2>
      <Lyrics lyrics={props.currentSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
