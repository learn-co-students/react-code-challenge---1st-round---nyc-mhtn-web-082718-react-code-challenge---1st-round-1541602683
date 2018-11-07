import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({allSongs, currentSong}) => {

  return (
    <div className="karaoke-display">
      {currentSong ? <VoteBar upTitle='Like' downTitle='Dislike'/> : null}
      <h2>{currentSong.title}</h2>
      <Lyrics lyrics={currentSong ?  currentSong.lyrics : 'Select a song to get started!'} />
    </div>
  )
}

export default KaraokeDisplay;
