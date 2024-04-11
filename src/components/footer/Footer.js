import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerLogo">
        <img src="/Logo.svg" alt="Logo2" className="Logo2" />
      </div>
      <div className="footerDiv">
        <h2>Navigation</h2>
        <ul className="aboutList">
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
      </div>
      <div className="footerDiv">
        <h2>Contact</h2>
        <ul className="aboutList">
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footerDiv">
        <h2>Social Media</h2>
        <ul className="aboutList">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Whatsapp</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
