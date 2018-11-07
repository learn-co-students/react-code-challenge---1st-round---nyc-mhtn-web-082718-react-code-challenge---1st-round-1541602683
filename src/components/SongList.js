import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const filterSongs = () => {
    return props.songs.filter( song => {
      return song.title.toLowerCase().includes(props.filter.toLowerCase())
    })
  }
  
  const makeSongComponents = (songs) => {
    return songs.map( song => {
      return (
        <Song 
          key={song.id}
          id={song.id}
          title={song.title}
          singer={song.singer}
          lyrics={song.lyrics}
          plays={song.plays}
          playSong={props.playSong}
        />
      )
    })
  }
  
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {makeSongComponents(filterSongs())}
        
      </tbody>
    </table>
  )
}

export default SongList;
