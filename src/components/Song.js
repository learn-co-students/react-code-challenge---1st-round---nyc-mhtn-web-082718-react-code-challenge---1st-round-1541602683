import React from 'react';

const Song = ({song, displaySong}) => {
  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td><button onClick={() => displaySong(song)}>Play</button></td>
    </tr>
  )
}

export default Song;
