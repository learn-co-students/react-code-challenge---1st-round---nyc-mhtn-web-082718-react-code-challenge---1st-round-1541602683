import React from 'react';
import KaraokeDisplay from './KaraokeDisplay'

const Song = (props) => {


  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button onClick={() => props.clickHandler(props.title, props.lyrics)}>Play</button></td>
    </tr>
  )
}

export default Song;
