import React from 'react';
import Song from './Song'

const SongList = (props) => {
  // console.log(props)
  const mapThroughSongs = () => {
    return props.songs.map((song) => {
      return <Song song={song} key={song.id} />
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

        {mapThroughSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
