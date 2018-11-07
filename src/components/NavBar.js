import React from 'react';

const NavBar = (props) => {

  let handleClick = (event) => {
    if(!props.currentDisplay && event.target.name==="queuedisplay"){
      props.toggleDisplay()
    }
    else if(props.currentDisplay && event.target.name==="songdisplay"){
      props.toggleDisplay()
    }
  }

  return (
    <div className="nav-bar">
      <button
        name="songdisplay"
        className="pure-button"
        onClick={handleClick}
      >
        Song List
      </button>
      <button
        name="queuedisplay"
        className="pure-button"
        onClick={handleClick}
      >
        Queue
      </button>
    </div>
  )
}

export default NavBar;
