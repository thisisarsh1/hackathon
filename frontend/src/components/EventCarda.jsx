import React from 'react'
import "/src/styles/EventCard.css"
import img from "/src/assets/Group.png"
import imga from "/src/assets/WhatsApp Image 2024-02-22 at 9.23.25 AM.jpeg"
import imgb from "/src/assets/WhatsApp Image 2024-02-22 at 9.23.48 AM.jpeg"
import imgc from "/src/assets/WhatsApp Image 2024-02-29 at 2.58.00 PM.jpeg"
function EventCard() {
 
  return (
    <div className='EventCard'>
      <div className='head1'>  <img src={img}></img>
       <div className="txt"> Upcoming Events</div>
      </div>
      <div className='boxs'>
      <div className="center-box">
        <div className="card">
          <div className="animated-border-box">
                      <img className= "box1 " src={imga}></img>
          
           </div>
            

            <div className="animated-border-box" id='b2'>
            <img className= "box2 "src={imgb}></img>
          
           </div>
            

            <div className="animated-border-box" id='b3'>
            <img className= "box3 "src={imgc}></img>
          
           </div>
            </div>
            
            
          
        </div>
     </div>
    </div>
  )
}

export default EventCard