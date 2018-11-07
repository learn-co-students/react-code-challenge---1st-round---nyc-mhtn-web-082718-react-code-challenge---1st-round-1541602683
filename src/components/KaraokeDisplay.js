import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {

  const displayVoteBar = () => {
    if (props.currentSong.id) {
      return (
        <VoteBar
          upTitle='Like'
          downTitle='Dislike'
          voteUp={likeSong}
          voteDown={dislikeSong}
        />
      )
    }
  }

  const likeSong = () => {
    props.likeSong(props.currentSong)
  }

  const dislikeSong = () => {
    props.dislikeSong(props.currentSong)
  }

  return (
    <div className="karaoke-display">
      {displayVoteBar()}
      <h2>{props.currentSong.title}</h2>
      <Lyrics
        lyrics={props.currentSong.lyrics}
        onFinish={props.onFinish}
      />
    </div>
  )
}

export default KaraokeDisplay;
