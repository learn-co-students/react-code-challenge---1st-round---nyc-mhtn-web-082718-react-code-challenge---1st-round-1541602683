import React from 'react';
import Song from './Song.js'

const SongList = (props) => {
  // console.log(props)

  const renderSongs = () => {
    return props.songList.map( song => <Song key={song.id} playSong={props.playSong} song={song}/> )
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {renderSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
