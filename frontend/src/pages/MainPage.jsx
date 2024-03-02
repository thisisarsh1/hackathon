import React, { useState, useEffect } from 'react'
import "/src/styles/MainPage.css"
import Hero from '/src/components/Hero.jsx'
import Navbar from '/src/components/Navbar.jsx'
import Abouts from '/src/components/Abouts.jsx'
import EventCarda from '/src/components/EventCarda.jsx';
import Events from '../components/Events'
import Outro from '/src/components/Outro.jsx';
import Map from '/src/components/Map.jsx'
import Bgimg from '/src/components/Background.jsx'
// import BackgroundGradient from '/src/components/Test.jsx'
function MainPage() {
    

    return (
        <div >
            <Bgimg></Bgimg>
             <Navbar></Navbar>
            <Hero></Hero>
            <Abouts></Abouts>
            <EventCarda></EventCarda>
            <Map></Map>
            <Outro></Outro>
           
            {/* <BackgroundGradient></BackgroundGradient> */}
        </div>
    )
}

export default MainPage