import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const song = props.songs.songs.map( song => {
    return <Song
              key={song.id}
              song={song}
              handlePlayClick={props.handlePlayClick}/>
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {song}

      </tbody>
    </table>
  )
}

export default SongList;
