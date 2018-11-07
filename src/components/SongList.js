import React from 'react';
import Song from './Song'


const SongList = (props) => {

  let getSongs = () => {
    return props.songs.map(songsObj => {
      return <Song key={songsObj.id}
        id={songsObj.id}
      title={songsObj.title}
      singer={songsObj.singer}
      handleSongSelect={props.handleSongSelect} />
    })
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {getSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
