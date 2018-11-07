import React from 'react';

const Song = (props) => {
  // console.log(props.song);
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={() => props.playSong(props.song)}>Play</button></td>
      <td>{props.song.likes}</td>
      <td>{props.song.dislikes}</td>
      <td>{props.song.plays}</td>
    </tr>
  )
}

export default Song;
