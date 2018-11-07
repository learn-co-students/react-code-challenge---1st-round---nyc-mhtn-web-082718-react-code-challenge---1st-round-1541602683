import React from 'react';
import Song from './Song'

const SongList = (props) => {
  // console.log(props)

  const createSongProps = () => {
    return props.songs.map(song => {
      if (song.title.includes(props.searchQuery)) {
        return(
          <Song
            key={song.id}
            id={song.id}
            title={song.title}
            singer={song.singer}
            plays={song.plays}
            likes={song.likes}
            dislikes={song.dislikes}
            renderLyrics={props.renderLyrics}
          />
        )
      }
    })
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {createSongProps()}
        {/* Your Code Goes Here */}

      </tbody>
    </table>
  )
}

export default SongList;
