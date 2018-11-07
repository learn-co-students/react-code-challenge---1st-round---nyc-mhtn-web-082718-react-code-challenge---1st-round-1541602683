import React, {Component} from 'react';
import Song from './Song'

class SongList extends Component{

  state = {
    songList: []
  }
 getSongs = () => {
    fetch("http://localhost:4000/songs")
    .then(res => res.json())
    .then(songs => this.setState({songList: songs}))
  }

  // checkSearchCritera = (searchCritera) => {
  //   if(searchCritera.length !== 0){
  //     const newSongs = this.state.songList.filter(song => song.includes(searchCritera)
  //     this.setState({
  //     songList: newSongs
  //   })
  // }


 createHTMLforSongs = (props) => {
  return this.state.songList.map(song =>
    <Song key={song.id} title={song.title} singer={song.singer} lyrics={song.lyrics} clickHandler={this.props.clickHandler} />
  )
}

render(){

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {this.getSongs()}
        {this.createHTMLforSongs(this.props)}


      </tbody>
    </table>
  )}


}
export default SongList;
