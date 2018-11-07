import React from 'react';
import Song from "./Song"

const SongList = (props) => {

  const checkFilter = () =>{
    // return props.allSongs.filter(song=>song.title.toLowerCase().includes(props.searchTerm.toLowerCase())).map(song=> <Song key={song.id} song={song} showLyrics={props.showLyrics}/>)
    if (props.filteredResults.length>0) {
      return props.filteredResults.map(song=> <Song key={song.id} song={song} showLyrics={props.showLyrics} playFetch={props.playFetch}/>)
    } else {
      return props.allSongs.map(song=> <Song key={song.id} song={song} showLyrics={props.showLyrics} playFetch={props.playFetch}/>)
    }
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

        {checkFilter()}

      </tbody>
    </table>
  )
}

export default SongList;
