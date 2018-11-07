import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const makeSongs = (props) => {
    // console.log(props)
    const newSongsArray = filterSongs(props)
    // console.log(newSongsArray)
    return newSongsArray.map(song => {
      return <Song key={song.id} songObj={song} handlePlay={(event) => props.handlePlay(event)}/>
    })
  }

  const filterSongs = (props) => {
    // console.log(props.searchValue)
    return props.allSongs.filter(song => {
      return song.title.includes(props.searchValue)
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
