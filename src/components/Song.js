import React from 'react';

const Song = (props) => {
  // console.log(props)

  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button>Play</button></td>
    </tr>
  )
}

export default Song;

//add on click on button where it would be a callback. this fn would be held in kc where you grab the sepcific songs
//this song would be passed into the KaraokeDisplay with the lyrics
