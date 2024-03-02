import React from 'react'
// import "../styles/Eventcard.css"

function EventCard(props) {
    const { image, title } = props;

    return (
        <div className='eventCard'>
            <img src={image} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default EventCard