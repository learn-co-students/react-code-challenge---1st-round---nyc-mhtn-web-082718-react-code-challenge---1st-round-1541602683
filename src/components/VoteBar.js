import React from 'react';

// { upTitle, voteUp, downTitle, voteDown },
const VoteBar = (props) => {
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={()=>props.likeFetch(props.id)}
      >
        Like
      </button>
      <button
        className="pure-button down-button"
        onClick={()=>props.dislikeFetch(props.id)}
      >
        Dislike
      </button>
    </div>
  )
}

export default VoteBar;
