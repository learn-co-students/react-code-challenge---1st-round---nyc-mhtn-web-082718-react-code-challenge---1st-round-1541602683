import React from 'react';
import Lyrics from './Lyrics';

let displayButtons = (props) => {
  if (props.song.title){
    return (
      <div className='vote-bar'>
        <button className='up-button' onClick={()=>props.likeIt(props.song)}>Like</button>
        <button className='down-button' onClick={()=>props.dislikeIt(props.song)}>Dislike</button>
      </div>
    )
  }
}

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      {displayButtons(props)}
      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
