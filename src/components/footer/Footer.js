import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footerLogo'>
        <img src="/Logo.svg" alt="Logo2" className='Logo2'/>
        </div>
        <div className='footerDiv'>
          <h2>Navigation</h2>
          <ul className='aboutList'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Menu</a></li>
            <li><a href="/Reservations">Reservations</a></li>
            <li><a href="/OrderOnline">Order Online</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </div>
        <div className='footerDiv'>
            <h2>Contact</h2>
            <ul className='aboutList'>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
        </div>
        <div className='footerDiv'>
          <h2>Social Media</h2>
          <ul className='aboutList'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer
