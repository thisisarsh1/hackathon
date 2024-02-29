import React from 'react'
// import "../styles/hero.css"
import "/src/styles/Hero.css"
import { motion, useScroll } from "framer-motion"

function Hero() {
    // check figma file for hero
  return (
    <div className='hero'>
      <motion.div 
      initial={{ opacity: 0, marginLeft: -200 }}
      whileInView={{ opacity: 1, marginLeft: 0 }}
      transition={{ duration: 1 }}
      className="box"
      >
          <p>this is a box</p>
      </motion.div>
    </div>
  )
}

export default Hero