import React from 'react'

const Navbar = () => {
  return (
     <nav>
      <div className="logo">
          <img src="/Logo.svg" alt="Logo" />
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Menu</a></li>
        <li><a href="/Reservations">Reservations</a></li>
        <li><a href="/OrderOnline">Order Online</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
