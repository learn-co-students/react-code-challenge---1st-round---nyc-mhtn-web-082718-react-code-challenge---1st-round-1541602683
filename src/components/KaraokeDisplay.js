import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = ({allSongs, currentSong}) => {

  return (
    <div className="karaoke-display">
      <h2>{currentSong.title}</h2>
      <Lyrics lyrics={currentSong ?  currentSong.lyrics : 'Select a song to get started!'} />
    </div>
  )
}

export default KaraokeDisplay;
