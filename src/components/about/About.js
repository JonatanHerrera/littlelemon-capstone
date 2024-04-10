import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='aboutText-container'>
        <h1 className='titleName'>Little Lemon</h1>
        <h2 className='subTitleName'>Chicago</h2>
        <p  className='p-n'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </div>
      <div className='aboutImages-container'>
        <img id='about1' className='aboutSectionImg' src='/restaurant chef B.jpg'/>
        <img id='about2' className='aboutSectionImg' src='/Mario and Adrian A.jpg'/>
      </div>

    </div>
  )
}

export default About
