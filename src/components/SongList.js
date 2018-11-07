import React from 'react';
import KaraokeContainer from '../containers/KaraokeContainer'
import Song from './Song'

const SongList = (props) => {


  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        <Song songStuff={props.songJson} />


      </tbody>
    </table>
  )
}

export default SongList;
