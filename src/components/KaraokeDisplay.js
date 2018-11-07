import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {
  const voteUp = () => {
    props.updateSongInfo(props.song, "like")
  }

  const voteDown = () => {
    props.updateSongInfo(props.song, "dislike")
  }
  
  return (
    <div className="karaoke-display">
      {props.song.id ? 
        <VoteBar 
          upTitle="Love" 
          voteUp={voteUp}
          downTitle="Hate" 
          voteDown={voteDown}
        /> 
        : 
        null}
      <h2>{props.song.title ? props.song.title : "Nothing Playing"}</h2>
      {props.song.lyrics ? <Lyrics lyrics={props.song.lyrics} /> : null }
    </div>
  )
}

export default KaraokeDisplay;
