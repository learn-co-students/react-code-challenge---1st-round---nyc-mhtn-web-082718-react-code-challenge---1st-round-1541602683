import React from 'react';
import Lyrics from './Lyrics';

import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {

  const renderLikeButtons = () => {
    return props.song.title ? <VoteBar song={props.song} incrementLikes={props.incrementLikes} incrementDislikes={props.incrementDislikes} /> : null
  }

  return (
    <div className="karaoke-display">
      {renderLikeButtons()}
      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
