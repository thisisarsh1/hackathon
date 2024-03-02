import React from 'react'
import "/src/styles/About.css"
import about_img from '/public/undraw_team_spirit_re_yl1v.svg'
import about_img1 from '/public/Group1.svg'
function Abouts() {
    // check figma file for About of upcoming events
  return (
    <div className='about'>
        <div className='head'>About Us
        <img src={about_img1}></img>
        </div>
       <div className="about_img">
        <img src={about_img}></img>
       </div>

      


        </div>
  )
}

export default Abouts