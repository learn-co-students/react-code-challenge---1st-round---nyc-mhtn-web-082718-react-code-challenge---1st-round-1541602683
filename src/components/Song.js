import React from 'react';

const Song = ({song, toggleSelectedSong}) => {

  const pressPlayButton = (event) => {
    toggleSelectedSong(song)
  }

  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td><button onClick={pressPlayButton} >Play</button></td>
    </tr>
  )
}

export default Song;
