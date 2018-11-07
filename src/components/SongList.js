import React from 'react';


const SongList = (props) => {

const listSongs = props.songs.map((song) => {
    return (
      <tr>
        <td>{song.title}</td>
        <td>{song.singer}</td>
        <th>Play</th>
      </tr>
    )

})



  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {listSongs}

      </tbody>
    </table>
  )
}

export default SongList;
