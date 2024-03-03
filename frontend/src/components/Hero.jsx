import React from 'react'
// import "../styles/hero.css"
import "/src/styles/Hero.css"
import img3 from "/src/assets/Group1.png"
import vector2 from "/src/assets/vector2.png"

import { motion, useScroll } from "framer-motion"
import { Button } from 'flowbite-react';

function Hero() {
    // check figma file for hero
  return (
    <div className='hero'>

      <img className="background" src={vector2} alt="" />
      <div id="hero_left">
        <div id="text">
          <h3 id="main" >RCOE</h3>
          <h3 id="second" >CODE</h3>
          <h3 id="second" >CELL</h3>
        </div>
        <div id="head">
        <img src={img3}></img>
        <div className="text">Lorem</div>
        </div>
        
      </div>
     
      <div id="gif">
        <img src="./robot1.gif" alt="" />
      </div>
    </div>


  )
}

export default Hero