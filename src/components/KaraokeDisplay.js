import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from "./VoteBar"

const KaraokeDisplay = (props) => {

  const renderVoteBar = ()=>{
    if (Object.keys(props.song).length===0) {
      return null
    } else {
      return <VoteBar likeFetch={props.likeFetch} dislikeFetch={props.dislikeFetch} id={props.song.id}/>
    }
  }


  return (
    <div className="karaoke-display">
    {renderVoteBar()}
      <h2>{Object.keys(props.song).length === 0? "Nothing Playing" : props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
