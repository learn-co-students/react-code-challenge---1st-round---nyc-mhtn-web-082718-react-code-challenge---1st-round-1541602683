import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = ({currentSong}) => {
  let title = '';
  let lyrics = '';
  if (currentSong) {
    title = currentSong.title;
    lyrics = currentSong.lyrics;
  }
  return (
    <div className="karaoke-display">
      <h2>{title}</h2>
      <Lyrics lyrics={lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
