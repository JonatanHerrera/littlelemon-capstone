import React from 'react'
import  './Specials.css'
import Card from '../cards/Card'

function Specials() {
  return (
    <div className='specials-container'>
        <div className='header-specials'>
            <div><h1>This Weeks Specials</h1></div>
            <div><button>Online Menu</button></div>
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
