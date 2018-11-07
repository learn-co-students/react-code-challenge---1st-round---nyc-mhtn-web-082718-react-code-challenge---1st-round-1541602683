import React from 'react';

const VoteBar = (props) => {

  console.log(props.song)

  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={() => props.incrementLikes(props.song.id)}
      >
        <h3>Like</h3>
      </button>
      <button
        className="pure-button down-button"
        onClick={() => props.incrementDislikes(props.song.id)}
      >
        <h3>Dislike</h3>
      </button>
    </div>
  )
}

export default VoteBar;
