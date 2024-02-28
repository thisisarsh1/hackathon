import React from 'react'
import "/src/styles/Navbar.css"

function Navbar() {

  return (
    <div className='navbar'>
      <div id="nav_left">
        <div id="logo">
          <img src="./images/logo.jpeg" alt="" />
        </div>
        <div id="name">
          <h5 id='main'>rcoe</h5>
          <h4 id='second'>code cell</h4>
        </div>
      </div>
      <div id="nav_right">
        <a href=""><img src="./images/join.png" alt="" /></a>
        <a href="">Home</a>
        <a href="">Events</a>
        <a href="">Gallery</a>
        <a href="">Blogs</a>
        <a href="">Members</a>

      </div>
    </div>
  )
}

export default Navbar