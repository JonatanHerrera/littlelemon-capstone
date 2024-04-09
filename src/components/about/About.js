import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </div>
      <div>
        <img className='aboutSectionImg' src='/restaurant chef B.jpg'/>
        <img className='aboutSectionImg' src='/Mario and Adrian A.jpg'/>
      </div>

    </div>
  )
}

export default About
