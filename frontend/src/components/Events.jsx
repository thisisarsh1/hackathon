import React from 'react'
import EventCard from './EventCard'
import img from "/src/assets/Group.png"
import imga from "/src/assets/WhatsApp Image 2024-02-22 at 9.23.25 AM.jpeg"
import imgb from "/src/assets/WhatsApp Image 2024-02-22 at 9.23.48 AM.jpeg"
import imgc from "/src/assets/WhatsApp Image 2024-02-29 at 2.58.00 PM.jpeg"
import "/src/styles/Events.css"

function Events() {
  const events = [
    {
      image: imga,
      title: "Event 1"
    },
    {
      image: imgb,
      title: "Event 2"
    },
  ]


  return (
    <div className='Events'>
      <div className='head1'>  <img src={img}></img>
        <div className="txt"> Upcoming Events</div>
      </div>
      <div className='event__card__section'>
        {events.map((event, index) => (
          <EventCard
            className="event__card__section__card"
            key={index}
            image={event.image} title={event.title} />
        ))}
      </div>

    </div>
  )
}

export default Events