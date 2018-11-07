import React from 'react';
import Song from './Song'

let showSongs = (props) => {
  if (props.search.length === 0) {
    return props.songs.map(song => {
      return <Song key={song.id} song={song} displaySong={props.displaySong}/>
    })
  } else {
    console.log(props.songs);
    let results = props.songs.filter(song => song.title.toLowerCase().includes(props.search.toLowerCase()))
    return results.map(song => {
      return <Song key={song.id} song={song} displaySong={props.displaySong}/>
    })
  }
}


const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {showSongs(props)}

      </tbody>
    </table>
  )
}

export default SongList;
