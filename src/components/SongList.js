import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const makeSongs = (props) => {
    // console.log(props)
    return props.allSongs.map(song => {
      return <Song key={song.id} songObj={song}/>
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
        {makeSongs(props)}
      </tbody>
    </table>
  )
}

export default SongList;
