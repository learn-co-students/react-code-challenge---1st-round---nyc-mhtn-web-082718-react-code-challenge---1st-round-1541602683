import React from 'react';
import Song from './Song';

const SongList = ({allSongs, toggleSelectedSong, currentSong}) => {

  const showSongs = () => {
    return allSongs.map(song => {
      return <Song song={song} toggleSelectedSong={toggleSelectedSong} key={song.title} currentSong={currentSong} />
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
        {showSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
