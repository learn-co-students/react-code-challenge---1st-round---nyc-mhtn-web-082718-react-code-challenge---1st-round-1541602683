import React from 'react';
import Song from './Song'

const SongList = (props) => {
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

        {props.songs.map(song => <Song key={song.id} playSong={props.playSong} song={song} />)}

      </tbody>
    </table>
  )
}

export default SongList;
