import React from 'react';
import Song from './Song';

const SongList = ({songs, displaySong, filterText}) => {
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
        {songs.filter(song => song.title.toLowerCase().includes(filterText.toLowerCase())).map(song => <Song key={song.title} song={song} displaySong={displaySong} />)}

      </tbody>
    </table>
  )
}

export default SongList;
