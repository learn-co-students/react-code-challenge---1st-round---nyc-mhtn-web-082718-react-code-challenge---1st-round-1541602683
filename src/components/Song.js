import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.songObj.title}</td>
      <td>{props.songObj.singer}</td>
      <td><button onClick={}>Play</button></td>
    </tr>
  )
}

export default Song;
