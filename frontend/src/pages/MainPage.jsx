import React, { useState, useEffect } from 'react'
import "../styles/MainPage.css"
import Navbar from '../components/navbar'

function MainPage() {
    // const [data, setData] = useState([])
    // const [inputValue, setInputValue] = useState('')

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    // const handleChange = (e) => {
    //     setInputValue(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setData([...data, inputValue])
    //     setInputValue('')
    // }

    return (
        <div>
            {/* This is the main page. All components go here
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='type your name' value={inputValue} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))} */}

             <Navbar />
        </div>
    )
}

export default MainPage