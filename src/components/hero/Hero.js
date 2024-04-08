import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button>Reserve a table</button>
       </div>
       <div>
        <img className ='heroImage' src='/restauranfood.jpg'/>
       </div>
    </div>
  )
}

export default Hero
