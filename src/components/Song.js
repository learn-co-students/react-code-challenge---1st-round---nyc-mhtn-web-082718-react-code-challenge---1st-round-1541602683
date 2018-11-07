import React from 'react';

const Song = (props) => {
  return (
    props.songStuff.map((songObj) =>
      <tr>
        <td>{songObj.title}</td>
        <td>{songObj.singer}</td>
        <td><button key={songObj.id}>Play</button></td>
      </tr>
    )
  )
}

export default Song;
