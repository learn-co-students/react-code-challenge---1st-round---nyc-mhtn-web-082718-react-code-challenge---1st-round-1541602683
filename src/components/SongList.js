import React from 'react';
import Song from './Song';
const SongList = ({songs,showLyrics}) => {
  const renderSong = songs.map(song=> <Song key={song.id} song={song} showLyrics={showLyrics}/>)
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

        {renderSong}

      </tbody>
    </table>
  )
}

export default SongList;
