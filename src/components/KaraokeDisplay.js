import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({currentSong, voteUp, voteDown}) => {
  let title = '';
  let lyrics = '';

  if (currentSong) {
    title = currentSong.title;
    lyrics = currentSong.lyrics;
  }

  return (
    <div className="karaoke-display">
      {currentSong ? <VoteBar songID={currentSong.id} upTitle="Like" voteUp={voteUp} downTitle="Dislike" voteDown={voteDown} /> : null}
      <h2>{title}</h2>
      <Lyrics lyrics={lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
