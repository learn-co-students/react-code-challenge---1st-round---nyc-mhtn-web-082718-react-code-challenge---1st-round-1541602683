import React from 'react';
import Song from '../components/Song';

const SongList = (props) => {
  const displaySongs = () => {
    return props.songs.map(s => {
      return <Song song={s} key={s.id} playSong={props.playSong} showQueueState={props.showQueueState} />
    })
  }

  const displayColumns = () => {
    if (!props.showQueueState) {
      return (
        <React.Fragment>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </React.Fragment>
      )
    }
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          {displayColumns()}
        </tr>

        {displaySongs()}

      </tbody>
    </table>
  )
}

export default SongList;
