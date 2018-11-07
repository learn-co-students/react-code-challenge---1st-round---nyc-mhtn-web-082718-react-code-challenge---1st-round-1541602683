import React from 'react';
import Song from './Song'

const SongList = (props) => {

  function mapThroughSongs() {
    let songs = props.songs
    let filterBy = props.currentState.filterBy

    let filteredSongs = songs.filter( song => {
      return song.title.includes(filterBy)
    })

    return filteredSongs.map( song => (
      <Song
        key={song.id}
        song={song}
        handlePlayButton={props.handlePlayButton}
      />
    ))
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Times Played</th>
          <th>▶</th>
        </tr>

        {mapThroughSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
