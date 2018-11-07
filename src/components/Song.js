import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td>{props.plays ? props.plays : 0}</td>
      <td>
        <button 
          onClick={() => props.playSong(props)}>
            Play
        </button>
      </td>
    </tr>
  )
}

export default Song;
