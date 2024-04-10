import React from 'react'
import  './Specials.css'
import Card from '../cards/Card'

function Specials() {
  return (
    <div className='specials-container'>
        <div className='header-specials'>
            <div className='specialTitle-container'>
              <h1>This Weeks Specials</h1>
            </div>
            <div className='specialButtomContainer'>
              <button className='actionBut'>Online Menu</button>
            </div>
        </div>
        <div className='cards-specials'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Specials
