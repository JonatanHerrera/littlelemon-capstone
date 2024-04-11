import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/Logo.svg" alt="Logo" className="Logo1" />
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/OrderOnline">Order Online</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
