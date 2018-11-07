import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from "./VoteBar.js"

const KaraokeDisplay = (props) => {
  // console.log(props.playingSong)
  return (
    <div className="karaoke-display">
      <h2>{props.playingSong === "No Song Playing" ? "No Song Playing" : props.playingSong.title}</h2>
      {props.playingSong === 'No Song Playing' ? null : <VoteBar upTitle="Like" downTitle="Dislike"/>}
      <Lyrics lyrics={props.playingSong === null ? "no lyrics yet" : props.playingSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
