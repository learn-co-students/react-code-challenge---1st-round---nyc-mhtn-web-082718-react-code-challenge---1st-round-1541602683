import React, { Component } from 'react';

class Filter extends Component {
  // Ok, so something I've got to figure out, is why Filter is a class component - implying it does need to set its own state - whereas SongList and Song are functional components - implying they don't need a state.
  // As of right now I feel the reason behind that is so it can set that to the songData state of its parent, which is how it'll alter KaraokeContainer's state.

  // Nevertheless, I suppose the first thing to figure out is making sure the state props got passed down.

  constructor(props) {
    super(props)
    console.log(props) // Ok... well for some reason songData has been passed down as a prop, but it's an empty array. Let's figure that out. I'm guessing that it's being rendered by KaraokeContainer before the state gets updated. That's likely got to do with the asynchronous nature of setState. How do I fix that? Am I approaching this the wrong way?
    this.state = {
      // songData: {this.props.songData} // Syntax error: this is a reserved word
    }
  }

  // console.log(this.state)

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
