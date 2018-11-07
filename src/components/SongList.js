import React from 'react';
import Song from './Song'
const SongList = (props) => {

  const mapAndFilterThroughSongs = () => {
    const filteredSongs =
    props.songs.filter(song =>
      song.title.toLowerCase().includes(props.searchTerm)
    )
    return filteredSongs.map(song => {
      return <Song song={song} key={song.title} ifPlayClicked={props.ifPlayClicked}/>
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
        {mapAndFilterThroughSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
