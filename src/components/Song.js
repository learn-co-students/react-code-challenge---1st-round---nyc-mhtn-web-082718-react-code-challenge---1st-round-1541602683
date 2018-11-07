import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={() => props.ifPlayClicked(props.song.title)}>Play</button></td>
    </tr>
  )
}

//need to pass up data on onclick to update state of specific song to playing in Karaoke Container

export default Song;
