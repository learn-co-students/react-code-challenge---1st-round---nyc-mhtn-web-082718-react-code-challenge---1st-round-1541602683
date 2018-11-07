import React from 'react';
import Song from './Song';

const SongList = ({allSongs, toggleSelectedSong}) => {

  const showSongs = () => {
    return allSongs.map(song => {
      return <Song song={song} toggleSelectedSong={toggleSelectedSong} key={song.title}/>
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
        {showSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
