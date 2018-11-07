import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {

  const findSong = (props) => {
    return props.allSongs.find(song => props.songToPlay === song.id)
  }

  const songObj = findSong(props)

  // const songObj = props.allSongs.find(song => props.songToPlay === song.id)

  return (
    <div className="karaoke-display">
      <h2>{props.songToPlay ? findSong(props).title : 'Song Title'}</h2>
      <Lyrics lyrics={props.songToPlay ? findSong(props).lyrics : 'Song Lyrics'} />
    </div>
  )

} //end of component

export default KaraokeDisplay;
