import React from 'react';

const Song = ({song, toggleSelectedSong, currentSong}) => {

  const pressPlayButton = (event) => {
    if (song === currentSong) {
    } else if (song !== currentSong) {
      incrementPlayCount()
      toggleSelectedSong(song)
    }
  }

  const incrementPlayCount = () => {
    fetch(`http://localhost:4000/users/1/songs/${song.id}/play`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.likes}</td>
      <td>{song.dislikes}</td>
      <td>{song.plays}</td>
      <td><button onClick={pressPlayButton} >Play</button></td>
    </tr>
  )
}

export default Song;
