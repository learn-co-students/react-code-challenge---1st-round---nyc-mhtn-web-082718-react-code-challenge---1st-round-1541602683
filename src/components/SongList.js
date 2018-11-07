import React from 'react';
import Song from '../components/Song';

const SongList = (props) => {
  const displaySongs = () => {
    return props.songs.map(s => {
      return <Song song={s} key={s.id} playSong={props.playSong} />
    })
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

        {displaySongs()}

      </tbody>
    </table>
  )
}

export default SongList;
