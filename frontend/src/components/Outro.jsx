import React from 'react'
import "/src/styles/outro.css"
import img3 from "/public/13.svg"
import img4 from '/src/assets/rizvi.jpeg'
function Outro() {
    // check figma file for About of upcoming events
  return (
    <div className='Outro'>
        <div className='img'>
            <img className= "img1 " src={img3}></img>
            <img className= "img2 " src={img4}></img>
            </div>

        </div>
  )
}

export default Outro