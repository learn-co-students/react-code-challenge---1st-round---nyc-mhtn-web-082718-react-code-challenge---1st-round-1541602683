import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({targetSong,showSongs}) => {
  const renderVoteBar =()=>{
    if (targetSong.id){
      return <VoteBar showSongs={showSongs} targetSong={targetSong}/>
    }else{
      return null
    }


  }
  console.log(targetSong)
  return (
    <div className="karaoke-display">
      {renderVoteBar()}
      <h2>{targetSong.title}</h2>
      <Lyrics lyrics={targetSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
