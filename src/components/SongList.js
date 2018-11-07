import React from 'react';
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

        {props.songs.map(songObj =>{
          return <Song
            key={songObj.id}
            song={songObj}
            handlePlay={props.handlePlay}/>
        })}

      </tbody>
    </table>
  )
}

export default SongList;
