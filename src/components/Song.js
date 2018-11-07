import React from 'react';

// let handlePlay = (e) => {
//   console.log(e)
// }

  // took a long time to figure out how to get the id from line 15.
  //now need to write a call back function in karokeContainer to set state to display in karokeDisplay.

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button data-id ={props.id} onClick={e=>props.handleSongSelect(e.target.dataset.id)} >Play</button></td>
    </tr>
  )
}

export default Song;
