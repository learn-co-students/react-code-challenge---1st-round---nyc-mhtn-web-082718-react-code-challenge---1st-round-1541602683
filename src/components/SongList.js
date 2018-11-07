import React from 'react';
import KaraokeContainer from '../containers/KaraokeContainer'

const SongList = (props) => {


  const playHandler = (newSongID) => {

  }


  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songJson.map((songObj) =>
          <tr>
            <td>{songObj.title}</td>
            <td>{songObj.singer}</td>
            <td><button key={songObj.id} onClick={playHandler(songObj.id)}>Play</button></td>
          </tr>
        )}


      </tbody>
    </table>
  )
}

export default SongList;
