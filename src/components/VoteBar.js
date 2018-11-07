import React from 'react';

const VoteBar = ({ showSongs, showQueue,targetSong}) => {
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={showSongs(targetSong.id)}
      >
        Likes
      </button>
      <button
        className="pure-button down-button"
        onClick={showQueue}
      >
        Dislikes
      </button>
    </div>
  )
}

export default VoteBar;
