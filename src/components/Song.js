import React from 'react';

const Song = (props) => {
  const handleClick = () => {
    props.playSong(props.song)
  }

  const displayColumns = () => {
    if (!props.showQueueState) {
      return (
        <React.Fragment>
          <td>{props.song.likes}</td>
          <td>{props.song.dislikes}</td>
          <td>{props.song.plays}</td>
          <td>
            <button
              onClick={handleClick}
            >
              Play
            </button>
          </td>
        </React.Fragment>
      )
    }
  }

  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      {displayColumns()}

    </tr>
  )
}

export default Song;
