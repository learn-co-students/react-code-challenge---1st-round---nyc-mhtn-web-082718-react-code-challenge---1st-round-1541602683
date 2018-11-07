import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {

  console.log(props.songs.songs)

  const displaySong = props.songs.songs.filter( songObj => songObj.id === props.displayedSong )

  console.log(displaySong)

    return (
      <div className="karaoke-display">
        <h2>{displaySong.title}</h2>
        <Lyrics lyrics="example song lyrics" />
      </div>
    )

}

export default KaraokeDisplay;
