import React from 'react';

const Song = (props) => {

  // console.log(props)

  const handleClick = () => {
    props.playSong(props.song)
    // console.log(props.song)
  }
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>{props.song.plays}</td>
      <td><button
          onClick={handleClick}
      >Play</button></td>
    </tr>
  )
}

export default Song;
