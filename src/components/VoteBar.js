import React from 'react';

const VoteBar = (props) => {
  let handleLike = () => {
    props.likeSong(props.song)
  }

  let handleDislike = () => {
    props.dislikeSong(props.song)
  }

  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={handleLike}
      >
        {props.song.title} Rocks!
      </button>
      <button
        className="pure-button down-button"
        onClick={handleDislike}
      >
        {props.song.singer} should sing it!
      </button>
    </div>
  )
}

export default VoteBar;
